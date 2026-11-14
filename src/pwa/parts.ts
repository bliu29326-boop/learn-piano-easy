/**
 * The shell's parts and locales on the page: `ensureParts` makes the parts a view needs available offline
 * before the view loads their code, and `ensureLocale` does the same for a locale before the site shows
 * it. `cache-groups.ts` says what each part and each locale's subset holds.
 *
 * The contract of `ensureParts(ids, onProgress, scope)`:
 * - It resolves once every part of `ids`, and every part each needs by `PART_NEEDS`, is in the shell
 *   cache of the version the page runs: the version `cache-groups.json` names. Of each part it fills the
 *   language-neutral files and the subsets of the marked locales. It never rejects.
 * - `scope` `view` fills only what a view opens with: every file but the route pages, the `index.html`
 *   of each of Learn Piano's routes in each locale. Those are most of Learn Piano's files and bytes, and
 *   only an offline reload of a route reads one. The worker answers a missing one with the root page,
 *   which shows the same route. `all`, the default, fills every file, and its `cached` means all of them.
 * - It writes each part's mark before it fetches, so every later install keeps the part. An install
 *   that a fill cut short finishes it.
 * - `ensureLocale(locale, onProgress, scope)` keeps the same contract for one locale's subset of the core
 *   and of every marked part. It writes the locale's mark before it fetches.
 * - It fetches only the files that cache misses. A file in a version's cache is that version's, since
 *   the worker copies a file only by its hash and this fill checks the hash of each file it fetches.
 * - `onProgress` hears the files stored and the bytes arrived, and the totals the call fetches. It hears
 *   them once before the first fetch, again as each body's bytes arrive, and after each file it stores.
 *   A call that fetches nothing never calls it, so a host shows a bar only for a real download.
 * - Its result says how it ended:
 *   - `ready`: every part is now in the cache.
 *   - `cached`: every part was in the cache already, so the caller shows no progress.
 *   - `offline`: a fetch failed with a network error or a server error, the index could not be read,
 *     or the browser refused to store a file.
 *   - `stale`: a file the index lists answered 404, or with bytes of another hash. The server runs a
 *     newer version, and only a reload into it can open the part.
 * - After `offline` or `stale` the files stored so far stay, and a later call fetches only the rest.
 * - Without a service worker or the Cache API, as in a development build, it resolves `ready` at once.
 *   The browser then loads each file from the network.
 * - Calls that overlap share each file's fetch, so no file is fetched twice at once. Each call hears the
 *   bytes of the fetches it joins.
 *
 * Decisions, and what each costs:
 * - Six fetches run at once, as in the cache manager. More would hurry a fast link and starve a slow one.
 * - A fetch uses cache mode `reload`, which the worker passes to the network. The bytes are then the
 *   server's, never an older copy from the browser's HTTP cache.
 * - The first failed file ends the fill: the files not yet started are skipped.
 * - A body is read as a stream, so the bar moves within a big file. The file is stored with its bytes
 *   and its `Content-Type` alone, since the bytes are already decoded.
 */
import type { Locale } from "../i18n/locale-table";
import {
  KEPT_LOCALE,
  loadGroupIndex,
  localeMark,
  markedIn,
  PARTS_CACHE,
  partMark,
  shellCacheName,
  withNeeds,
  type GroupFiles,
  type PartId,
} from "./cache-groups";
import { contentHash, inParallel } from "./current";
import { readBody } from "./read-body";

/** Which files of the parts `ensureParts` fills, as its head comment says. */
export type PartsScope = "view" | "all";

/** The end of a route page's URL. A part's other files are scripts, styles, models and data. */
const ROUTE_PAGE = "/index.html";

/** How `ensureParts` ended, as its head comment says. */
export type PartsResult = "ready" | "cached" | "offline" | "stale";

/** How far a fill of the parts has come. */
export interface PartsProgress {
  /** The files stored so far. */
  files: number;
  /** The files the fill fetches. */
  totalFiles: number;
  /** The bytes arrived so far, of the files stored and the files on their way. */
  bytes: number;
  /** The bytes the fill fetches. */
  totalBytes: number;
}

/** How many files are fetched at once. */
const PARALLEL = 6;

/** How the fetch of one file ended. */
type Outcome = "ok" | "offline" | "stale";

/** A fetch of one file under way: how it ends, and who hears its bytes arrive. */
interface Fetch {
  run: Promise<Outcome>;
  listeners: Set<(bytes: number) => void>;
}

/** The fetch of each file under way, by its URL, which every overlapping call joins. */
const fetching = new Map<string, Fetch>();

/**
 * Whether this page caches the parts: a release build, with a service worker and the Cache API. A unit
 * test runs without the build's `__DEV__`, and caches nothing.
 */
function partsCached(): boolean {
  return typeof __DEV__ === "boolean" && !__DEV__ && "serviceWorker" in navigator && typeof caches !== "undefined";
}

/** Fetches `url` into `cache` when its bytes hash to `hash`, telling `onBytes` as they arrive. It never rejects. */
async function fetchInto(cache: Cache, url: string, hash: string, onBytes: (bytes: number) => void): Promise<Outcome> {
  try {
    const response = await fetch(url, { cache: "reload" });
    if (response.status === 404) return "stale";
    if (!response.ok) return "offline";
    const bytes = await readBody(response, onBytes);
    if ((await contentHash(bytes)) !== hash) return "stale";
    const type = response.headers.get("content-type");
    await cache.put(url, new Response(bytes, { headers: type === null ? {} : { "content-type": type } }));
    return "ok";
  } catch {
    return "offline";
  }
}

/** Fetches `url` into `cache`, or joins the fetch of it under way. `onBytes` hears its bytes either way. */
function fetchOnce(cache: Cache, url: string, hash: string, onBytes: (bytes: number) => void): Promise<Outcome> {
  let run = fetching.get(url);
  if (run === undefined) {
    const listeners = new Set<(bytes: number) => void>();
    const started: Fetch = { run: fetchInto(cache, url, hash, (bytes) => listeners.forEach((listener) => listener(bytes))), listeners };
    fetching.set(url, started);
    void started.run.then(() => fetching.delete(url));
    run = started;
  }
  run.listeners.add(onBytes);
  return run.run;
}

/** A file a fill may fetch: its absolute URL, its content hash and its bytes. */
interface Wanted {
  url: string;
  hash: string;
  size: number;
}

/** The files of `group` whose locale `keep` takes, `""` for a language-neutral one, as fill entries. */
function wantedOf(group: GroupFiles, keep: (locale: Locale | "") => boolean): Wanted[] {
  const wanted: Wanted[] = [];
  group.files.forEach((file, i) => {
    if (keep(group.locales[i] ?? "")) wanted.push({ url: new URL(file, document.baseURI).href, hash: group.hashes[i] ?? "", size: group.sizes[i] ?? 0 });
  });
  return wanted;
}

/** What the parts cache keeps: the marked parts, and the marked locales with English. */
async function marked(marks: Cache): Promise<{ parts: PartId[]; locales: Locale[] }> {
  return markedIn((await marks.keys()).map((request) => request.url), document.baseURI);
}

/** Makes the parts `ids` available offline in every marked locale, as the head comment's contract says. */
export async function ensureParts(
  ids: readonly PartId[],
  onProgress?: (progress: PartsProgress) => void,
  scope: PartsScope = "all",
): Promise<PartsResult> {
  if (!partsCached()) return "ready";
  const index = await loadGroupIndex();
  if (index === undefined) return "offline";
  const parts = withNeeds(ids);
  try {
    const marks = await caches.open(PARTS_CACHE);
    await Promise.all(parts.map((id) => marks.put(partMark(id, document.baseURI), new Response(""))));
    const { locales } = await marked(marks);
    const wanted = parts.flatMap((id) => wantedOf(index.groups[id], (locale) => locale === "" || locales.includes(locale)));
    return await fill(index.version, wanted, scope, onProgress);
  } catch {
    return "offline";
  }
}

/**
 * Makes `locale` available offline, as the head comment's contract says for a part: its subset of the
 * core and of every marked part. It marks the locale first, so every later install keeps it.
 */
export async function ensureLocale(locale: Locale, onProgress?: (progress: PartsProgress) => void, scope: PartsScope = "all"): Promise<PartsResult> {
  if (!partsCached()) return "ready";
  const index = await loadGroupIndex();
  if (index === undefined) return "offline";
  try {
    const marks = await caches.open(PARTS_CACHE);
    await marks.put(localeMark(locale, document.baseURI), new Response(""));
    const { parts } = await marked(marks);
    const wanted = (["app", ...parts] as const).flatMap((id) => wantedOf(index.groups[id], (of) => of === locale));
    return await fill(index.version, wanted, scope, onProgress);
  } catch {
    return "offline";
  }
}

/** Marks `locale` without a fetch, so the first install of a first visit fills its subsets. */
export async function markLocale(locale: Locale): Promise<void> {
  if (!partsCached()) return;
  try {
    await (await caches.open(PARTS_CACHE)).put(localeMark(locale, document.baseURI), new Response(""));
  } catch {
    // A browser that refuses to store the mark caches the locale when the learner next opens it.
  }
}

/** The locales every install keeps: the marked ones, and English. */
export async function markedLocales(): Promise<Locale[]> {
  if (typeof caches === "undefined") return [KEPT_LOCALE];
  return (await marked(await caches.open(PARTS_CACHE))).locales;
}

/** Fetches into the shell cache of `version` the files of `wanted` that it misses, within `scope`. */
async function fill(version: string, wanted: readonly Wanted[], scope: PartsScope, onProgress?: (progress: PartsProgress) => void): Promise<PartsResult> {
  const cache = await caches.open(shellCacheName(version));
  const held = new Set((await cache.keys()).map((request) => request.url));
  const missing = wanted.filter((file) => !held.has(file.url) && (scope === "all" || !file.url.endsWith(ROUTE_PAGE)));
  if (missing.length === 0) return "cached";

  const progress: PartsProgress = { files: 0, totalFiles: missing.length, bytes: 0, totalBytes: 0 };
  for (const file of missing) progress.totalBytes += file.size;
  onProgress?.({ ...progress });
  let failure: "offline" | "stale" | undefined;
  await inParallel(missing, PARALLEL, async (file) => {
    if (failure !== undefined) return;
    // A joined fetch may have read some bytes already, so each report adds what is new since the last.
    let counted = 0;
    const outcome = await fetchOnce(cache, file.url, file.hash, (bytes) => {
      progress.bytes += bytes - counted;
      counted = bytes;
      onProgress?.({ ...progress });
    });
    if (outcome !== "ok") {
      // A newer server explains a failed fetch too, so `stale` wins over `offline`.
      if (failure !== "stale") failure = outcome;
      return;
    }
    progress.files++;
    progress.bytes += file.size - counted;
    onProgress?.({ ...progress });
  });
  return failure ?? "ready";
}

/** Removes the mark of part `id`, so no later install keeps it. The caller removes its files. */
export async function unmarkPart(id: PartId): Promise<void> {
  if (typeof caches === "undefined") return;
  await (await caches.open(PARTS_CACHE)).delete(partMark(id, document.baseURI));
}

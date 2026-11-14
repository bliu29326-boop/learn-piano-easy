/**
 * The shell's parts on the page: `ensureParts` makes the parts a view needs available offline before the
 * view loads their code. `cache-groups.ts` says what each part holds.
 *
 * The contract of `ensureParts(ids, onProgress)`:
 * - It resolves once every part of `ids`, and every part each needs by `PART_NEEDS`, is in the shell
 *   cache of the version the page runs: the version `cache-groups.json` names. It never rejects.
 * - It writes each part's mark before it fetches, so every later install keeps the part. An install
 *   that a fill cut short finishes it.
 * - It fetches only the files that cache misses. A file in a version's cache is that version's, since
 *   the worker copies a file only by its hash and this fill checks the hash of each file it fetches.
 * - `onProgress` hears the files and bytes done, and in total, after each file it stores. A call that
 *   fetches nothing never calls it.
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
 * - Calls that overlap share each file's fetch, so no file is fetched twice at once.
 *
 * Decisions, and what each costs:
 * - Six fetches run at once, as in the cache manager. More would hurry a fast link and starve a slow one.
 * - A fetch uses cache mode `reload`, which the worker passes to the network. The bytes are then the
 *   server's, never an older copy from the browser's HTTP cache.
 * - The first failed file ends the fill: the files not yet started are skipped.
 */
import { loadGroupIndex, PARTS_CACHE, partMark, shellCacheName, withNeeds, type PartId } from "./cache-groups";
import { inParallel, isCurrent } from "./current";

/** How `ensureParts` ended, as its head comment says. */
export type PartsResult = "ready" | "cached" | "offline" | "stale";

/** How far a fill of the parts has come. */
export interface PartsProgress {
  /** The files stored so far. */
  files: number;
  /** The files the fill fetches. */
  totalFiles: number;
  /** The bytes stored so far. */
  bytes: number;
  /** The bytes the fill fetches. */
  totalBytes: number;
}

/** How many files are fetched at once. */
const PARALLEL = 6;

/** How the fetch of one file ended. */
type Outcome = "ok" | "offline" | "stale";

/** The fetch of each file under way, by its URL, which every overlapping call joins. */
const fetching = new Map<string, Promise<Outcome>>();

/** Whether this page caches the parts: a release build, with a service worker and the Cache API. */
function partsCached(): boolean {
  return !__DEV__ && "serviceWorker" in navigator && typeof caches !== "undefined";
}

/** Fetches `url` into `cache` when its bytes hash to `hash`. It never rejects. */
async function fetchInto(cache: Cache, url: string, hash: string): Promise<Outcome> {
  try {
    const response = await fetch(url, { cache: "reload" });
    if (response.status === 404) return "stale";
    if (!response.ok) return "offline";
    if (!(await isCurrent(response, hash))) return "stale";
    await cache.put(url, response);
    return "ok";
  } catch {
    return "offline";
  }
}

/** Fetches `url` into `cache`, or joins the fetch of it under way. */
function fetchOnce(cache: Cache, url: string, hash: string): Promise<Outcome> {
  let run = fetching.get(url);
  if (run === undefined) {
    run = fetchInto(cache, url, hash);
    fetching.set(url, run);
    void run.then(() => fetching.delete(url));
  }
  return run;
}

/** Makes the parts `ids` available offline, as the head comment's contract says. */
export async function ensureParts(ids: readonly PartId[], onProgress?: (progress: PartsProgress) => void): Promise<PartsResult> {
  if (!partsCached()) return "ready";
  const index = await loadGroupIndex();
  if (index === undefined) return "offline";
  const root = document.baseURI;
  const parts = withNeeds(ids);
  try {
    const marks = await caches.open(PARTS_CACHE);
    await Promise.all(parts.map((id) => marks.put(partMark(id, root), new Response(""))));
    const cache = await caches.open(shellCacheName(index.version));
    const held = new Set((await cache.keys()).map((request) => request.url));
    const wanted = parts
      .flatMap((id) => {
        const { files, hashes, sizes } = index.groups[id];
        return files.map((file, i) => ({ url: new URL(file, root).href, hash: hashes[i] ?? "", size: sizes[i] ?? 0 }));
      })
      .filter((file) => !held.has(file.url));
    if (wanted.length === 0) return "cached";

    const progress: PartsProgress = { files: 0, totalFiles: wanted.length, bytes: 0, totalBytes: 0 };
    for (const file of wanted) progress.totalBytes += file.size;
    let failure: "offline" | "stale" | undefined;
    await inParallel(wanted, PARALLEL, async (file) => {
      if (failure !== undefined) return;
      const outcome = await fetchOnce(cache, file.url, file.hash);
      if (outcome !== "ok") {
        // A newer server explains a failed fetch too, so `stale` wins over `offline`.
        if (failure !== "stale") failure = outcome;
        return;
      }
      progress.files++;
      progress.bytes += file.size;
      onProgress?.({ ...progress });
    });
    return failure ?? "ready";
  } catch {
    return "offline";
  }
}

/** Removes the mark of part `id`, so no later install keeps it. The caller removes its files. */
export async function unmarkPart(id: PartId): Promise<void> {
  if (typeof caches === "undefined") return;
  await (await caches.open(PARTS_CACHE)).delete(partMark(id, document.baseURI));
}

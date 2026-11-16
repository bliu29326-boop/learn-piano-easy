/**
 * The cache groups: which files of the build the learner caches together, and the caches that hold them.
 *
 * - **app** is the core of the shell: the site itself. It holds every page but Learn Piano's, and the
 *   code the landing page and the other pages run. The styles, fonts, icons, pictures, licenses and the
 *   index join it too. The service worker precaches it on install, into a cache named by the version.
 * - **player** and **learn** are the shell's parts: the player, and Learn Piano. They live in the core's
 *   versioned cache, but a first install fetches neither. The page fills a part whole through
 *   `ensureParts` of `parts.ts`, and marks it. Every later install keeps each marked part.
 * - **songs** is every other file under `songs/`. The worker caches each on first use.
 * - **sounds** is every file under `sounds/`, cached the same way.
 *
 * Songs and sounds share one content cache that outlives versions, so an update downloads again only a
 * cached file whose bytes changed. Source maps, the worker script, the social pictures, `robots.txt` and
 * `sitemap.xml` belong to no group. Only a developer loads a map, and the browser keeps the worker
 * itself. Only a search or social site fetches the rest.
 *
 * Which part a chunk of the site's bundle joins comes from the bundler's chunk graph, as `tools/build.ts`
 * says, starting from each part's roots in `PART_ROOTS`. Every other file joins by its path, in
 * `partOfPath`, by who uses it:
 * - `parse-worker.js`, `models/` and the song catalog join the player. Only the player parses a MIDI
 *   file, draws the hand and lists the songs.
 * - The landing page's songs join the player too. Only the player plays them.
 * - The pages of Learn Piano's routes join learn: its map, the profile and every lesson, in every locale.
 *   The worker answers a page it does not hold with the root page, which shows the same route.
 * - Everything else is core. `app.css` holds the styles every page shares, and the pictures are the
 *   landing page's and the mascot's, which the core's pages show.
 *
 * **Locale is the shell's second dimension.** Each shell group splits into its language-neutral files and
 * one subset per locale, a pseudo-locale too. A route page belongs to its locale's subset. A chunk
 * belongs to a locale's subset when only that locale's roots in `LOCALE_ROOTS` reach it: its catalog and
 * its lesson texts. The build places the chunks from the bundler's graph, as it does the parts. Every
 * other file is language-neutral.
 * - **A locale is marked** in the parts cache, under `localeMark`, when the site first shows a page in
 *   it. Every install fills the neutral files and the subsets of the marked locales alone.
 * - **English is always kept.** Every locale's catalog and lesson texts fill their gaps with the English
 *   at run time, so the English texts sit in the neutral code. English's own subset holds only its route
 *   pages, and `markedIn` counts English as marked, so a visit in any locale keeps them too.
 *
 * The build writes `cache-groups.json` into the core. It names the version and lists each group's files,
 * their content hashes, their bytes and their locales, so the cache manager reads sizes without a
 * network call.
 */
import { DEFAULT_LOCALE, isPseudoLocale, LOCALES, PSEUDO_LOCALES, type Locale } from "../i18n/locale-table";
import { LANDING_SONGS } from "../landing/songs";

/** A part of the shell, which the page fills on first use. */
export type PartId = "player" | "learn";

/** A group of the versioned shell cache: the core, or a part. */
export type ShellGroupId = "app" | PartId;

/** A cache group's id. The id of an on-demand group is also its folder. */
export type GroupId = ShellGroupId | "songs" | "sounds";

/**
 * Every group, in the order the cache manager shows them. Each group's label and description are the
 * catalog's `player.shell.cache.groups`, which the cache manager reads, so the worker carries no texts.
 */
export const GROUP_IDS: readonly GroupId[] = ["app", "player", "learn", "songs", "sounds"];

/** The parts, each after every part it needs. */
export const PARTS: readonly PartId[] = ["player", "learn"];

/** The shell's groups, which share the versioned cache. */
export const SHELL_GROUPS: readonly ShellGroupId[] = ["app", ...PARTS];

/** The parts each part needs. Learn Piano's views draw the piano, so learn needs the player. */
export const PART_NEEDS: Readonly<Record<PartId, readonly PartId[]>> = { player: [], learn: ["player"] };

/** `ids` with every part each needs, in the order of `PARTS`. */
export function withNeeds(ids: readonly PartId[]): PartId[] {
  const wanted = new Set<PartId>();
  const add = (id: PartId): void => {
    if (wanted.has(id)) return;
    wanted.add(id);
    PART_NEEDS[id].forEach(add);
  };
  ids.forEach(add);
  return PARTS.filter((id) => wanted.has(id));
}

/**
 * Each part's roots: the source modules whose `import()` starts the part, as the bundler's inputs name
 * them, or a glob of them. The player's are every module whose dynamic import loads three.js or the audio
 * engine: the player, the landing page's player and piano, the site's audio service and the component
 * gallery. Learn's are its three views and the course's worlds.
 */
export const PART_ROOTS: Readonly<Record<PartId, readonly string[]>> = {
  player: ["src/app/shell.ts", "src/app/embed.ts", "src/render/piano-keys.ts", "src/site/services.ts", "src/ui/gallery.ts"],
  learn: ["src/learn/map-view.ts", "src/learn/profile-view.ts", "src/learn/lesson-view.ts", "src/learn/lessons/*/index.ts"],
};

/**
 * Each part's anchors: modules the build fails on when they land in the core. Only the part runs them,
 * so one in the core means an `import()` that no root starts carries the part's code there.
 */
export const PART_ANCHORS: Readonly<Record<PartId, readonly string[]>> = {
  player: ["node_modules/three/build/three.core.js", "src/audio/engine.ts"],
  learn: ["src/learn/steps/kinds.ts"],
};

/**
 * The roots of each locale's subset: the source modules whose `import()` loads one locale's texts, with
 * `{locale}` for its code. They are each catalog and each world's lesson texts. English and the
 * pseudo-locales have none, since their texts are in the neutral code.
 */
export const LOCALE_ROOTS: readonly string[] = ["src/i18n/messages/{locale}.ts", "src/learn/lessons/*/texts.{locale}.ts"];

/** The locale English stands for: every locale falls back to its texts, so every install keeps it. */
export const KEPT_LOCALE: Locale = DEFAULT_LOCALE;

/** The groups the worker caches on first use, never up front. Each is a top-level folder of `public/`. */
export const ON_DEMAND: readonly GroupId[] = ["songs", "sounds"];

/**
 * The files the build writes beside the groups' files, which no group caches: the worker, and the files
 * only a search engine's crawler reads.
 */
const UNGROUPED = ["sw.js", "robots.txt", "sitemap.xml", "_headers", "_redirects", "_routes.json", "404.html"];

/** The files of the songs folder that the player part holds. */
const PLAYER_SONGS: ReadonlySet<string> = new Set(["songs/catalog.json", ...LANDING_SONGS]);

/** A page of Learn Piano's routes, in any locale: its map, the profile and every lesson. */
const LEARN_PAGE = /^(?:[^/]+\/)?learn\/(?:.+\/)?index\.html$/;

/** The file the build writes with each group's files and bytes. */
export const GROUP_INDEX = "cache-groups.json";

function topFolder(path: string): string {
  return path.split("/")[0] ?? "";
}

/** The folder of the social pictures, which only a search or social site fetches. */
const SOCIAL_FOLDER = "images/social/";

/** Server identity and payment routes must never enter any offline cache. */
export function isPrivatePath(path: string): boolean {
  const normalized = path.replace(/^\.?\//, "").split(/[?#]/, 1)[0] ?? "";
  return /^(?:api(?:\/|$)|account(?:\/|$))/.test(normalized);
}

function grouped(path: string): boolean {
  return !isPrivatePath(path) && !path.endsWith(".map") && !UNGROUPED.includes(path) && !path.startsWith(SOCIAL_FOLDER);
}

/** The part of a file outside the bundle's chunks, by its path, or `undefined` for the core. */
export function partOfPath(path: string): PartId | undefined {
  if (path === "parse-worker.js" || topFolder(path) === "models" || PLAYER_SONGS.has(path)) return "player";
  if (LEARN_PAGE.test(path)) return "learn";
  return undefined;
}

/** The locale of a file that is no chunk, by its path: a route page's, or `""` for a neutral file. */
function localeOfPath(path: string): Locale | "" {
  if (path !== "index.html" && !path.endsWith("/index.html")) return "";
  const first = topFolder(path);
  return (LOCALES as readonly string[]).includes(first) || isPseudoLocale(first) ? (first as Locale) : DEFAULT_LOCALE;
}

/**
 * The locale whose subset holds `path`, or `""` for a language-neutral file. `locales` names the locale
 * of each chunk the build placed in one.
 */
export function localeOf(path: string, locales?: ReadonlyMap<string, Locale>): Locale | "" {
  return locales?.get(path) ?? localeOfPath(path);
}

/**
 * The group that holds `path`, or `undefined` for a file no group caches. `chunks` names the part of each
 * chunk the build placed in one. Without it a chunk counts as core, which serves the worker: it answers
 * every shell group from the same cache.
 */
export function groupOf(path: string, chunks?: ReadonlyMap<string, PartId>): GroupId | undefined {
  if (!grouped(path)) return undefined;
  const part = chunks?.get(path) ?? partOfPath(path);
  if (part !== undefined) return part;
  const top = topFolder(path);
  return top === "songs" || top === "sounds" ? top : "app";
}

/** Whether a group lives in the versioned shell cache. */
export function inShell(group: GroupId): group is ShellGroupId {
  return (SHELL_GROUPS as readonly GroupId[]).includes(group);
}

/** The name of the cache that holds the shell of `version`. */
export function shellCacheName(version: string): string {
  return `shell-${version}`;
}

/** The cache that holds songs and sounds across versions. */
export const CONTENT_CACHE = "content";

/** The cache that holds a group's files. */
export function cacheNameOf(group: GroupId, version: string): string {
  return inShell(group) ? shellCacheName(version) : CONTENT_CACHE;
}

/**
 * The cache that holds the marks of the parts the learner opened and the locales the site showed, one
 * entry each under `partMark` and `localeMark`. It outlives versions, so each install knows what to keep.
 */
export const PARTS_CACHE = "parts";

/** The URL of a part's mark in `PARTS_CACHE`, below the app's root `root`. It is never fetched. */
export function partMark(part: PartId, root: string): string {
  return new URL(`__parts/${part}`, root).href;
}

/** The URL of a locale's mark in `PARTS_CACHE`, below the app's root `root`. It is never fetched. */
export function localeMark(locale: Locale, root: string): string {
  return new URL(`__locales/${locale}`, root).href;
}

/** What the marks `urls` of `PARTS_CACHE` keep: the marked parts, and the marked locales with English. */
export function markedIn(urls: readonly string[], root: string): { parts: PartId[]; locales: Locale[] } {
  const held = new Set(urls);
  const locales: Locale[] = [...LOCALES, ...PSEUDO_LOCALES].filter((locale) => locale === KEPT_LOCALE || held.has(localeMark(locale, root)));
  return { parts: PARTS.filter((part) => held.has(partMark(part, root))), locales };
}

/** The `type` of the message a worker's install posts to the pages as it goes. */
export const INSTALL_PROGRESS = "install-progress";

/** How far a worker's install has come: the message it posts to every page of its scope. */
export interface InstallProgress {
  type: typeof INSTALL_PROGRESS;
  /** The files the install holds so far, copied or fetched. */
  files: number;
  /** The files the install fills. */
  totalFiles: number;
  /** The bytes of the files it holds so far. */
  bytes: number;
  /** The bytes of every file it fills. */
  totalBytes: number;
}

/** A group's entry in `cache-groups.json`. */
export interface GroupFiles {
  /** The file URLs, relative to the app's root as `./path`. */
  files: string[];
  /** The content hash of the file at the same place in `files`, as `current.ts` makes it. */
  hashes: string[];
  /** The bytes of the file at the same place in `files`. */
  sizes: number[];
  /** The locale of the file at the same place in `files`, or `""` for a language-neutral one. */
  locales: (Locale | "")[];
  /** The bytes of every file in total. */
  bytes: number;
}

/** The files of `group` that are language-neutral or in one of `locales`, with their bytes summed. */
export function filesIn(group: GroupFiles, locales: readonly Locale[]): GroupFiles {
  const kept: GroupFiles = { files: [], hashes: [], sizes: [], locales: [], bytes: 0 };
  group.files.forEach((file, i) => {
    const locale = group.locales[i] ?? "";
    if (locale !== "" && !locales.includes(locale)) return;
    kept.files.push(file);
    kept.hashes.push(group.hashes[i] ?? "");
    kept.sizes.push(group.sizes[i] ?? 0);
    kept.locales.push(locale);
    if (file !== "./") kept.bytes += group.sizes[i] ?? 0;
  });
  return kept;
}

/** What `cache-groups.json` holds. */
export interface GroupIndex {
  /** The build's version, which names its shell cache. */
  version: string;
  groups: Record<GroupId, GroupFiles>;
}

/** The index the build wrote, read by the page from the app's root, or `undefined` when it cannot be read. */
export async function loadGroupIndex(): Promise<GroupIndex | undefined> {
  try {
    const response = await fetch(`./${GROUP_INDEX}`);
    return response.ok ? ((await response.json()) as GroupIndex) : undefined;
  } catch {
    return undefined;
  }
}

/** A file of the build: its path relative to the app's root, its size in bytes and its content hash. */
export interface BuiltFile {
  path: string;
  bytes: number;
  hash: string;
}

/**
 * The index of `files` for `version`, with each chunk's part from `chunks` and its locale from `locales`.
 * The app group also holds `./`, the root page, whose bytes are those of `index.html`. It is
 * language-neutral, since the worker answers a page it lacks in any locale with it.
 */
export function groupIndex(
  version: string,
  files: readonly BuiltFile[],
  chunks?: ReadonlyMap<string, PartId>,
  locales?: ReadonlyMap<string, Locale>,
): GroupIndex {
  const empty = (): GroupFiles => ({ files: [], hashes: [], sizes: [], locales: [], bytes: 0 });
  const groups = Object.fromEntries(GROUP_IDS.map((id) => [id, empty()])) as Record<GroupId, GroupFiles>;
  const root = files.find((file) => file.path === "index.html");
  if (root !== undefined) {
    groups.app.files.push("./");
    groups.app.hashes.push(root.hash);
    groups.app.sizes.push(root.bytes);
    groups.app.locales.push("");
  }
  for (const { path, bytes, hash } of files) {
    const id = groupOf(path, chunks);
    if (id === undefined) continue;
    const group = groups[id];
    group.files.push(`./${path}`);
    group.hashes.push(hash);
    group.sizes.push(bytes);
    group.locales.push(inShell(id) ? localeOf(path, locales) : "");
    group.bytes += bytes;
  }
  return { version, groups };
}

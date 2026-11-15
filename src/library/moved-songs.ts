/**
 * Moved songs: the catalog files that left the library, the file each became, and the one-time move of
 * a learner's stored work from the old song id to the new one.
 *
 * Two kinds of file moved:
 * - The five beginner tunes of `beginner/` became songs of ours. Each maps to its Common version, the
 *   one closest to the old arrangement, and every stored value moves, the fingers set by hand too.
 * - A version of ours whose notes a later pass reworked left `<id>.mid` for `<id>-2.mid`.
 *   `REWORKED_VERSIONS` names each, and `tools/make-our-songs.ts` writes its file from that list. Its
 *   fingers set by hand stay under the old file, since they are keyed by note index and the notes
 *   differ.
 *
 * `moveStoredSongs` runs on start, before the stores read the storage. It moves the track settings, the
 * key, the last song, the favourite and the last play, and the fingers where a move keeps them.
 *
 * Decisions, and what each costs:
 * - The move works on the stored JSON, and never through `FingerStore`, `TrackStore` or `SongMemory`.
 *   Those check each entry against a song, and the move has no song to load.
 * - An entry moves only when the new id holds none, so work saved on the new version is never
 *   overwritten. An entry that cannot move stays under its old id.
 * - A moved entry leaves its old id. The move then finds nothing on the next start, so it needs no
 *   flag of its own.
 * - Takes stay where they are. The history keys a take by its notes, and the new versions have other
 *   notes. A measured length and a version's skills stay too, since they describe the old file.
 * - A storage that refuses a write keeps everything under the old ids, so the move tries again on
 *   the next start.
 * - A reworked file is named by a list in the app, not by the song module, since the app needs the
 *   list on start and never loads a module.
 */
import type { StorageLike } from "../settings/store";
import { FINGERS_KEY } from "../theory/fingering-editor";
import { LAST_SONG_KEY } from "./open-song";
import { SONG_MEMORY_KEY } from "./song-memory";
import { SONG_KEYS_KEY, SONG_TRACKS_KEY } from "./track-settings";

/** One move of a song's stored work: the catalog file it left, the file it moved to, and whether its fingers move. */
export interface SongMove {
  from: string;
  to: string;
  fingers: boolean;
}

/** The beginner tunes that became songs of ours, by slug. Each kept its slug as its file name. */
const MOVED_SLUGS = ["mary-had-a-little-lamb", "twinkle-twinkle-little-star", "old-macdonald-had-a-farm", "row-row-row-your-boat", "yankee-doodle"];

/**
 * The versions of ours whose notes were reworked, as `<slug>/<id>`, such as `morning-mood/common`. Each
 * left `ours/<slug>/<id>.mid` for `ours/<slug>/<id>-2.mid`.
 */
export const REWORKED_VERSIONS: readonly string[] = [
  "air-on-the-g-string/common",
  "air-on-the-g-string/rare",
  "air-on-the-g-string/epic",
  "air-on-the-g-string/legendary",
  "also-sprach-zarathustra/common",
  "also-sprach-zarathustra/rare",
  "also-sprach-zarathustra/epic",
  "also-sprach-zarathustra/legendary",
  "angels-we-have-heard-on-high/epic",
  "angels-we-have-heard-on-high/legendary",
  "aquarium/common",
  "aquarium/rare",
  "aquarium/epic",
  "aquarium/legendary",
  "ave-maria/common",
  "ave-maria/rare",
  "ave-maria/epic",
  "ave-maria/legendary",
  "beethoven-5/common",
  "beethoven-5/rare",
  "beethoven-5/epic",
  "beethoven-5/legendary",
  "beethoven-7-allegretto/common",
  "beethoven-7-allegretto/rare",
  "beethoven-7-allegretto/epic",
  "beethoven-7-allegretto/legendary",
  "blow-the-man-down/common",
  "blow-the-man-down/rare",
  "blow-the-man-down/epic",
  "blow-the-man-down/legendary",
  "bolero/common",
  "bolero/rare",
  "bolero/epic",
  "bolero/legendary",
  "can-can/common",
  "can-can/rare",
  "can-can/epic",
  "can-can/legendary",
  "chopin-nocturne-c-sharp-minor/common",
  "chopin-nocturne-c-sharp-minor/rare",
  "chopin-nocturne-c-sharp-minor/epic",
  "chopin-nocturne-c-sharp-minor/legendary",
  "clair-de-lune/common",
  "clair-de-lune/rare",
  "clair-de-lune/epic",
  "clair-de-lune/legendary",
  "drunken-sailor/common",
  "drunken-sailor/rare",
  "drunken-sailor/epic",
  "drunken-sailor/legendary",
  "eine-kleine-nachtmusik/common",
  "eine-kleine-nachtmusik/rare",
  "eine-kleine-nachtmusik/epic",
  "eine-kleine-nachtmusik/legendary",
  "funeral-march/common",
  "funeral-march/rare",
  "funeral-march/epic",
  "funeral-march/legendary",
  "fur-elise/epic",
  "fur-elise/legendary",
  "gymnopedie-1/common",
  "gymnopedie-1/rare",
  "gymnopedie-1/epic",
  "gymnopedie-1/legendary",
  "hall-of-the-mountain-king/common",
  "hall-of-the-mountain-king/rare",
  "haul-away-joe/common",
  "haul-away-joe/rare",
  "haul-away-joe/epic",
  "haul-away-joe/legendary",
  "hungarian-dance-5/common",
  "hungarian-dance-5/rare",
  "hungarian-dance-5/epic",
  "hungarian-dance-5/legendary",
  "lacrimosa/common",
  "lacrimosa/rare",
  "lacrimosa/epic",
  "lacrimosa/legendary",
  "mahler-adagietto/common",
  "mahler-adagietto/rare",
  "mahler-adagietto/epic",
  "mahler-adagietto/legendary",
  "moonlight-sonata/common",
  "moonlight-sonata/rare",
  "moonlight-sonata/epic",
  "moonlight-sonata/legendary",
  "morning-mood/common",
  "morning-mood/rare",
  "morning-mood/epic",
  "morning-mood/legendary",
  "mozart-21-andante/common",
  "mozart-21-andante/rare",
  "mozart-21-andante/epic",
  "mozart-21-andante/legendary",
  "night-on-bald-mountain/common",
  "night-on-bald-mountain/rare",
  "night-on-bald-mountain/epic",
  "night-on-bald-mountain/legendary",
  "sailors-hornpipe/common",
  "sailors-hornpipe/rare",
  "sailors-hornpipe/epic",
  "sailors-hornpipe/legendary",
  "spanish-ladies/common",
  "spanish-ladies/rare",
  "spanish-ladies/epic",
  "spanish-ladies/legendary",
  "swan-lake/common",
  "swan-lake/rare",
  "swan-lake/epic",
  "swan-lake/legendary",
  "the-sorcerers-apprentice/common",
  "the-sorcerers-apprentice/rare",
  "the-sorcerers-apprentice/epic",
  "the-sorcerers-apprentice/legendary",
  "toccata-in-d-minor/common",
  "toccata-in-d-minor/rare",
  "toccata-in-d-minor/epic",
  "toccata-in-d-minor/legendary",
  "twinkle-twinkle-little-star/rare",
  "twinkle-twinkle-little-star/epic",
  "twinkle-twinkle-little-star/legendary",
  "vltava/common",
  "vltava/rare",
  "vltava/epic",
  "vltava/legendary",
  "wedding-march/common",
  "wedding-march/rare",
  "wedding-march/epic",
  "wedding-march/legendary",
  "william-tell/common",
  "william-tell/rare",
  "william-tell/epic",
  "william-tell/legendary",
  "yankee-doodle/epic",
];

/** The file name of the version `id` of the song `slug`, in its folder: `<id>-2.mid` once reworked, else `<id>.mid`. */
export function versionFileName(slug: string, id: string, reworked: readonly string[] = REWORKED_VERSIONS): string {
  return reworked.includes(`${slug}/${id}`) ? `${id}-2.mid` : `${id}.mid`;
}

/** The moves of `reworked`, each from `<id>.mid` to `<id>-2.mid`, with the fingers left behind. */
export function reworkedMoves(reworked: readonly string[]): SongMove[] {
  return reworked.map((version) => ({ from: `ours/${version}.mid`, to: `ours/${version}-2.mid`, fingers: false }));
}

/** Every move of a catalog file, from `songs/`: the beginner tunes, then the reworked versions. */
export const SONG_MOVES: readonly SongMove[] = [
  ...MOVED_SLUGS.map((slug) => ({ from: `beginner/${slug}.mid`, to: `ours/${slug}/common.mid`, fingers: true })),
  ...reworkedMoves(REWORKED_VERSIONS),
];

/** The value under `key` in `storage`, parsed, or undefined when it is missing or not JSON. */
function read(storage: StorageLike, key: string): unknown {
  try {
    return JSON.parse(storage.getItem(key) ?? "null") ?? undefined;
  } catch {
    return undefined;
  }
}

/** Writes `value` under `key`, and tells whether the storage took it. */
function write(storage: StorageLike, key: string, value: unknown): boolean {
  try {
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/** Whether `value` is a plain object, not null and not an array. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** `songs` with each entry of `moves` under its new id, or undefined when nothing moved. */
function movedEntries(songs: Record<string, unknown>, moves: readonly SongMove[]): Record<string, unknown> | undefined {
  const next = { ...songs };
  let moved = false;
  for (const { from, to } of moves) {
    const [oldId, newId] = [`catalog:${from}`, `catalog:${to}`];
    if (!(oldId in next) || newId in next) continue;
    next[newId] = next[oldId];
    delete next[oldId];
    moved = true;
  }
  return moved ? next : undefined;
}

/** `favourites` with each id of `moves` renamed, or undefined when nothing moved. */
function movedFavourites(favourites: unknown[], moves: readonly SongMove[]): unknown[] | undefined {
  const next = [...favourites];
  let moved = false;
  for (const { from, to } of moves) {
    const at = next.indexOf(`catalog:${from}`);
    if (at < 0 || next.includes(`catalog:${to}`)) continue;
    next[at] = `catalog:${to}`;
    moved = true;
  }
  return moved ? next : undefined;
}

/** Moves the stored work of every song of `moves` in `storage` from its old song id to its new one. */
export function moveStoredSongs(storage: StorageLike | null, moves: readonly SongMove[] = SONG_MOVES): void {
  if (storage === null) return;
  for (const key of [FINGERS_KEY, SONG_TRACKS_KEY, SONG_KEYS_KEY]) {
    const raw = read(storage, key);
    if (!isRecord(raw)) continue;
    const songs = movedEntries(raw, key === FINGERS_KEY ? moves.filter((move) => move.fingers) : moves);
    if (songs !== undefined) write(storage, key, songs);
  }
  const memory = read(storage, SONG_MEMORY_KEY);
  if (isRecord(memory)) {
    const favourites = Array.isArray(memory.favourites) ? movedFavourites(memory.favourites, moves) : undefined;
    const played = isRecord(memory.played) ? movedEntries(memory.played, moves) : undefined;
    if (favourites !== undefined || played !== undefined) {
      write(storage, SONG_MEMORY_KEY, { ...memory, ...(favourites === undefined ? {} : { favourites }), ...(played === undefined ? {} : { played }) });
    }
  }
  const last = read(storage, LAST_SONG_KEY);
  if (!isRecord(last)) return;
  const { source, file } = last;
  const to = source === "catalog" ? moves.find((move) => move.from === file)?.to : undefined;
  if (to !== undefined) write(storage, LAST_SONG_KEY, { source, file: to });
}

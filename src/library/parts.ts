/**
 * The parts of a work, such as a sonata's movements or a cycle's numbers: whether a catalog song is
 * one, and how it reads in the live locale.
 *
 * Decisions, and what each costs:
 * - A part is a catalog song with a `piece` and a `part`, a `name` or both. A version of a song of ours
 *   is never a part, since its `piece` names its song.
 * - A part reads as its place and its own name, such as "Movement 3: Alla Turca". It reads as either one
 *   alone when it has only that. The place follows its `kind`, so German says "3. Satz".
 * - The catalog keeps a part's English label as its `title`, so every reader of a title gets a whole
 *   text. A test holds the two equal, at the cost of the label in two places.
 */
import { t } from "../i18n/live";
import type { playerLibrary } from "../i18n/messages/player-library.en";
import type { CatalogSong } from "./search";

/** The texts a part reads with, in one locale. */
export type PartWords = typeof playerLibrary.parts;

/** The fields of a catalog song that say whether it is a part, and how it reads. */
export type PartFields = Pick<CatalogSong, "song" | "piece" | "title" | "part" | "kind" | "name">;

/** Whether `song` is a part of a work. */
export function isPart(song: PartFields): boolean {
  return song.song === undefined && song.piece !== null && (song.part !== undefined || song.name !== undefined);
}

/** How `song` reads inside its work, in `words`. A song that is not a part reads as its title. */
export function partLabel(song: PartFields, words: PartWords = t().player.library.parts): string {
  if (!isPart(song)) return song.title;
  const place = song.part === undefined || song.kind === undefined ? undefined : words[song.kind](song.part);
  if (place === undefined) return song.name ?? song.title;
  return song.name === undefined ? place : words.named(place, song.name);
}

/** How `song` reads on its own: a part names its work first. Any other song reads as its title. */
export function partTitle(song: PartFields, words: PartWords = t().player.library.parts): string {
  return isPart(song) ? words.inWork(song.piece!, partLabel(song, words)) : song.title;
}

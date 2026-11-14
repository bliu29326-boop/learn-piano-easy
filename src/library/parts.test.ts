import { afterEach, expect, test } from "bun:test";
import { join } from "node:path";

import { setLiveLocale } from "../i18n/live";
import { loadLocale } from "../i18n/locale";
import { playerLibrary } from "../i18n/messages/player-library.en";
import { isPart, partLabel, partTitle } from "./parts";
import { type CatalogSong, songTitle } from "./search";

const catalog = (await Bun.file(join(import.meta.dir, "..", "..", "public", "songs", "catalog.json")).json()) as CatalogSong[];

afterEach(() => setLiveLocale("en"));

test("every_part_of_a_work_has_a_name_or_a_place", () => {
  const parts = catalog.filter(isPart);
  expect(parts.length).toBeGreaterThan(0);
  for (const song of parts) {
    // A place needs both its number and how it reads, and the title is the English label.
    expect({ file: song.file, placed: song.kind === undefined || song.part !== undefined }).toEqual({ file: song.file, placed: true });
    expect({ file: song.file, title: song.title }).toEqual({ file: song.file, title: partLabel(song, playerLibrary.parts) });
  }
  // A title that only counts, such as "1st Mvmt." or "No. 3", belongs to a part.
  const bare = catalog.filter((song) => !isPart(song) && /^(\d+(st|nd|rd|th)? ?\.|No\. ?\d|Movement \d|Variation \d)/.test(song.title));
  expect(bare.map((song) => song.file)).toEqual([]);
});

test("a_part_reads_its_place_in_the_live_locale", async () => {
  const song = { composer: "Example", piece: "Sonata No. 11", title: "Movement 3: Alla Turca", part: 3, kind: "movement", name: "Alla Turca", file: "x.mid", difficulty: 5, license: "", credit: "" } satisfies CatalogSong;
  expect(partLabel(song)).toBe("Movement 3: Alla Turca");
  expect(songTitle(song)).toBe("Sonata No. 11 · Movement 3: Alla Turca");
  await loadLocale("de");
  setLiveLocale("de");
  const { name: _, ...unnamed } = song;
  expect(partLabel(unnamed)).toBe("3. Satz");
  expect(partTitle(song)).toBe("Sonata No. 11 · 3. Satz: Alla Turca");
  // A song that is not a part reads as its title alone.
  expect(songTitle({ ...song, piece: null })).toBe(song.title);
});

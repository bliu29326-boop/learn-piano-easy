import { join } from "node:path";

import { RARITIES, readGuide, textIn, versionOf, type Guide, type GuideText } from "../src/library/guide";
import { filterSongs, groupSongs, NO_FILTER } from "../src/library/search";
import { readMidi } from "../src/midi/smf-read";
import { songFromMidi, songLength } from "../src/midi/song";
import { expect, test } from "../src/testing";
import { readCatalog, songsDir } from "./catalog";
import {
  guideOf,
  guideText,
  guideTranslationsOf,
  isPublicDomain,
  licenseText,
  originalProblems,
  ourOriginal,
  ourSongs,
  oursFolder,
  rowsOf,
  songProblems,
  stepFileName,
  stepsOf,
  versionBytes,
  versionMeter,
  type OurOriginal,
  type OurSong,
} from "./make-our-songs";
import { measure, ORIGINAL_PAST_LEGENDARY, originalDifficulty, trickySpots } from "./song-meter";

/** The catalog difficulty each rarity's versions take, from its lowest to its highest. */
const BANDS = { common: [1, 1.5], rare: [2, 2.5], epic: [3, 3.5], legendary: [4, 4.5] } as const;

/** The sentences of `text`, where neither `St.` nor a name's initial, as in `William J.`, ends one. */
function sentences(text: string): string[] {
  return text.split(/(?<!\b[A-Z][a-z]+ [A-Z]\.|\bSt\.)(?<=[.!?])\s+/).filter((sentence) => sentence.trim() !== "");
}

/**
 * The German abbreviations whose period ends no sentence: `z. B.`, `d. h.`, `u. a.`, `St.`, `Nr.` and the
 * like, and a day or a century before its noun, as in `24. Dezember` or `19. Jahrhundert`. A German noun
 * is capitalised, so a capital after a period proves nothing, and a note name such as `C.` may end one.
 */
const GERMAN_ABBREVIATIONS =
  /(?<![\p{L}\d])(?:z\. ?B|d\. ?h|u\. ?a|[uo]\. ?Ä|[vn]\. Chr|bzw|ca|Nr|St|Dr|Jh|vgl|evtl|ggf|Hl)\.|(?<![\p{L}\d])\d{1,2}\.(?= (?:Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember|Jahrhundert)\b)/gu;

/** The sentences of the German `text`, where no abbreviation of `GERMAN_ABBREVIATIONS` ends one. */
function germanSentences(text: string): string[] {
  const kept = text.replace(GERMAN_ABBREVIATIONS, (abbreviation) => abbreviation.replaceAll(".", "\u0000"));
  return kept
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => sentence.trim() !== "")
    .map((sentence) => sentence.replaceAll("\u0000", "."));
}

/** The guide of `slug` as the tree holds it. */
async function storedGuide(slug: string): Promise<unknown> {
  return Bun.file(join(songsDir, oursFolder, slug, "guide.json")).json();
}

test("every_song_of_ours_earns_its_rarities", () => {
  expect(ourSongs.length).toBeGreaterThan(0);
  for (const song of ourSongs) {
    expect({ song: song.slug, problems: songProblems(song) }).toEqual({ song: song.slug, problems: [] });
    for (const row of rowsOf(song)) {
      // Our Original keeps no band, and `every_original_of_ours_keeps_its_hook_and_a_hand` rates it.
      if (row.rarity === undefined) continue;
      const [low, high] = BANDS[row.rarity];
      expect({ file: row.file, inBand: row.difficulty >= low && row.difficulty <= high }).toEqual({ file: row.file, inBand: true });
    }
  }
  // A tune is free only once both its publication and its composer's death lie far enough back.
  const source = { composer: "Someone", died: 1900, published: 1890, edition: "First edition" };
  expect(isPublicDomain(source, 2026)).toBe(true);
  expect(isPublicDomain({ ...source, published: 1931 }, 2026)).toBe(false);
  expect(isPublicDomain({ ...source, died: 1956 }, 2026)).toBe(false);
  expect(isPublicDomain({ ...source, died: null }, 2026)).toBe(true);
}, 60_000);

test("no_version_plays_a_bar_of_our_own", () => {
  // A tune of our own is ours throughout, so only the songs of a public domain source count.
  const own = ourSongs
    .filter((song) => song.source.own !== true)
    .flatMap((song) => RARITIES.flatMap((rarity) => {
      const bars = song.versions[rarity].ownBars ?? [];
      return bars.length === 0 ? [] : [`${song.slug}/${rarity}: bars ${bars.join(", ")}`];
    }));
  expect(own).toEqual([]);
});

test("every_original_of_ours_keeps_its_hook_and_a_hand", () => {
  const ours = ourSongs.filter((song) => ourOriginal(song) !== undefined);
  expect(ours.some((song) => song.slug === "morning-mood")).toBe(true);
  for (const song of ours) {
    expect({ song: song.slug, problems: originalProblems(song) }).toEqual({ song: song.slug, problems: [] });
    // The meter rates it as the lowest rarity it fits, or past Legendary, and every row names its file.
    const rows = rowsOf(song);
    const row = rows.at(-1)!;
    expect({ song: song.slug, rarity: row.rarity, file: row.file }).toEqual({ song: song.slug, rarity: undefined, file: `${oursFolder}/${song.slug}/mythic.mid` });
    expect({ song: song.slug, difficulty: row.difficulty }).toEqual({ song: song.slug, difficulty: originalDifficulty(measure(versionMeter(song, "mythic"))) });
    expect({ song: song.slug, mythic: rows.every((other) => other.mythic === row.file) }).toEqual({ song: song.slug, mythic: true });
  }
  // A version that keeps the tune's key passes as an Original, and each broken rule is named.
  const song = ourSongs.find((one) => one.slug === "silent-night")!;
  const { de: _german, ...bare } = song;
  const as = (original: OurOriginal): OurSong => ({ ...bare, mythic: original });
  const good: OurOriginal = { ...song.versions.legendary, source: { edition: "A print", printed: 1900 } };
  expect(originalProblems(as(good), 2026)).toEqual([]);
  expect(originalDifficulty({ ...measure(versionMeter(song, "legendary")), "starts per second, one hand": 99 })).toBe(ORIGINAL_PAST_LEGENDARY);
  const named = (original: OurOriginal) => originalProblems(as(original), 2026).join("\n");
  expect(named({ ...good, source: { edition: "A print", printed: 1950 } })).toContain("not public domain");
  expect(named({ ...good, source: { edition: "A print", printed: 1900, addedBars: [1, 2, 3] } })).toContain("adds 3 bars");
  expect(named({ ...good, right: good.right.replace(/\/\d+(?=:)/, "") })).toContain("has no finger");
  // A semitone up, every note spelled with sharps: the hook then plays outside the tune's key.
  const names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const moved = (text: string) =>
    text.replace(/\b([A-G])([#b]?)(\d)(?=[/:+])/g, (_, letter: string, accidental: string, octave: string) => {
      const pitch = 12 * (Number(octave) + 1) + names.indexOf(letter) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0) + 1;
      return `${names[pitch % 12]}${Math.floor(pitch / 12) - 1}`;
    });
  expect(named({ ...good, right: moved(good.right), left: moved(good.left) })).toContain("the hook is lost");
  // A print a semitone up names that move as `keyShift`, and the hook is found in the print's key.
  const shifted = { ...good, right: moved(good.right), left: moved(good.left), source: { ...good.source, keyShift: 1 } };
  expect(named(shifted)).not.toContain("the hook is lost");
}, 60_000);

/** The slugs of every Christmas song of ours that is or will be written, by the goal `christmas-songs`. */
const CHRISTMAS = new Set([
  "jingle-bells",
  "silent-night",
  "o-christmas-tree",
  "it-came-upon-the-midnight-clear",
  "deck-the-halls",
  "joy-to-the-world",
  "hark-the-herald-angels-sing",
  "o-come-all-ye-faithful",
  "the-first-noel",
  "god-rest-ye-merry-gentlemen",
  "away-in-a-manger",
  "carol-of-the-bells",
  "ding-dong-merrily-on-high",
  "we-three-kings",
  "o-holy-night",
  "angels-we-have-heard-on-high",
  "good-king-wenceslas",
  "the-twelve-days-of-christmas",
  "up-on-the-housetop",
  "jolly-old-saint-nicholas",
  "o-little-town-of-bethlehem",
  "leise-rieselt-der-schnee",
  "alle-jahre-wieder",
  "kling-gloeckchen",
  "o-du-froehliche",
  "ihr-kinderlein-kommet",
  "morgen-kinder",
  "kommet-ihr-hirten",
  "suesser-die-glocken",
  "es-ist-ein-ros-entsprungen",
  "tochter-zion",
]);

/** The slugs of every film song of ours, which the collection "At the movies" holds. */
const FILM = new Set([
  "canon-in-d",
  "ode-to-joy",
  "hall-of-the-mountain-king",
  "the-entertainer",
  "also-sprach-zarathustra",
  "the-blue-danube",
  "habanera",
  "dies-irae",
  "clair-de-lune",
  "moonlight-sonata",
  "beethoven-7-allegretto",
  "gymnopedie-1",
  "hungarian-dance-5",
  "eine-kleine-nachtmusik",
  "lacrimosa",
  "mozart-21-andante",
  "air-on-the-g-string",
  "toccata-in-d-minor",
  "handel-sarabande",
  "william-tell",
  "swan-lake",
  "night-on-bald-mountain",
  "the-sorcerers-apprentice",
  "ave-maria",
  "bolero",
  "vltava",
  "funeral-march",
  "beethoven-5",
  "aquarium",
  "can-can",
  "chopin-nocturne-c-sharp-minor",
  "morning-mood",
  "wedding-march",
  "mahler-adagietto",
  "neon-chase",
  "black-flag-jig",
  "last-horizon",
]);

/** The slugs of every sea shanty of ours, which the collection "Sea shanties" holds. */
const SEA = new Set(["drunken-sailor", "blow-the-man-down", "sailors-hornpipe", "spanish-ladies", "haul-away-joe"]);

test("every_catalog_song_names_its_length_and_our_versions_their_skills", async () => {
  const catalog = await readCatalog();
  expect(catalog.length).toBeGreaterThan(0);
  const guides = new Map<string, Guide>();
  for (const row of catalog) {
    // The length is the file's own, to the end of its last note, in whole seconds.
    const bytes = new Uint8Array(await Bun.file(join(songsDir, row.file)).arrayBuffer());
    const seconds = Math.round(songLength(songFromMidi(readMidi(bytes))));
    expect({ file: row.file, seconds: row.seconds }).toEqual({ file: row.file, seconds });
    expect({ file: row.file, positive: seconds > 0 }).toEqual({ file: row.file, positive: true });
    if (row.song === undefined) {
      expect({ file: row.file, skills: row.skills }).toEqual({ file: row.file, skills: undefined });
      continue;
    }
    // A version of ours names the skills its guide names, in the guide's order.
    if (!guides.has(row.song)) guides.set(row.song, readGuide(await storedGuide(row.song))!);
    const guide = guides.get(row.song)!;
    const version = row.rarity === undefined ? guide.original! : guide.versions[row.rarity];
    expect({ file: row.file, skills: row.skills }).toEqual({ file: row.file, skills: version.skills });
  }
}, 60_000);

test("every_christmas_song_is_in_the_collection", async () => {
  expect(ourSongs.some((song) => song.slug === "jingle-bells")).toBe(true);
  for (const song of ourSongs) {
    expect({ song: song.slug, christmas: song.collection === "christmas" }).toEqual({ song: song.slug, christmas: CHRISTMAS.has(song.slug) });
  }
  // The catalog in the tree carries the collection on every version, and the library groups them first.
  const catalog = await readCatalog();
  for (const row of catalog.filter((row) => row.song !== undefined)) {
    expect({ file: row.file, christmas: row.collection === "christmas" }).toEqual({ file: row.file, christmas: CHRISTMAS.has(row.song!) });
  }
  const first = groupSongs(catalog)[0]!;
  expect(first.name).toBe("Christmas");
  expect(first.pieces[0]!.songs[0]!.song).toBe("jingle-bells");
});

/** Checks that the songs of ours and the catalog's rows name `collection` exactly for the slugs of `slugs`. */
async function expectCollection(collection: "film" | "sea", slugs: Set<string>): Promise<void> {
  for (const song of ourSongs) {
    expect({ song: song.slug, in: song.collection === collection }).toEqual({ song: song.slug, in: slugs.has(song.slug) });
  }
  const catalog = await readCatalog();
  for (const row of catalog.filter((row) => row.song !== undefined)) {
    expect({ file: row.file, in: row.collection === collection }).toEqual({ file: row.file, in: slugs.has(row.song!) });
  }
}

test("every_film_song_is_in_the_collection", async () => {
  expect(ourSongs.some((song) => song.slug === "canon-in-d")).toBe(true);
  await expectCollection("film", FILM);
  // The library shows the film songs as the group after Christmas.
  const groups = groupSongs(await readCatalog());
  expect(groups[1]!.name).toBe("At the movies");
  expect(groups[1]!.collection).toBe("film");
});

test("every_shanty_is_in_the_collection", async () => {
  await expectCollection("sea", SEA);
  // A shanty is never a film song, so each shows in one group only.
  expect([...SEA].filter((slug) => FILM.has(slug))).toEqual([]);
});

test("a_tune_of_our_own_needs_no_public_domain_years", () => {
  const own = { composer: "learn-piano-easy", died: null, published: 2026, edition: "Our own tune, in the style of a film score", own: true } as const;
  expect(isPublicDomain(own, 2026)).toBe(true);
  // Without the flag, the same years are refused.
  const { own: _, ...borrowed } = own;
  expect(isPublicDomain(borrowed, 2026)).toBe(false);
  // Every tune of ours is credited to the project, and only such a tune carries the flag.
  for (const song of ourSongs) {
    expect({ song: song.slug, own: song.source.own === true }).toEqual({ song: song.slug, own: song.source.composer === "learn-piano-easy" });
  }
});

test("a_song_is_found_by_another_title", async () => {
  const catalog = await readCatalog();
  const named = ourSongs.filter((song) => (song.aka ?? []).length > 0);
  expect(named.some((song) => song.slug === "jingle-bells")).toBe(true);
  for (const song of named) {
    for (const title of song.aka!) {
      const found = filterSongs(catalog, { ...NO_FILTER, query: title }).filter((row) => row.song === song.slug);
      expect({ title, versions: found.length }).toEqual({ title, versions: stepsOf(song).length });
    }
  }
});

test("every_guide_is_complete", async () => {
  // A German abbreviation or a date ends no sentence, and a note name may.
  expect(germanSentences("Spiel z. B. das C. Am 24. Dezember 1818 sang man in St. Nikolaus, d. h. in Oberndorf.")).toEqual([
    "Spiel z. B. das C.",
    "Am 24. Dezember 1818 sang man in St. Nikolaus, d. h. in Oberndorf.",
  ]);
  const untranslated: string[] = [];
  for (const song of ourSongs) {
    const guide = readGuide(await storedGuide(song.slug)) as Guide;
    expect({ song: song.slug, read: guide !== undefined }).toEqual({ song: song.slug, read: true });
    // The story takes two to four sentences in each language it is written in.
    const counts = [sentences(guide.about.en).length, ...(guide.about.de === undefined ? [] : [germanSentences(guide.about.de).length])];
    expect({ song: song.slug, counts, fit: counts.every((count) => count >= 2 && count <= 4) }).toEqual({ song: song.slug, counts, fit: true });
    const texts: GuideText[] = [guide.about, guide.funFact];
    for (const step of stepsOf(song)) {
      const version = versionOf(guide, step)!;
      const where = `${song.slug}, ${step}`;
      // A finger for every note of each hand's track, in file order.
      const file = songFromMidi(readMidi(versionBytes(song, step)));
      expect({ where, right: version.fingers.right.length, left: version.fingers.left.length }).toEqual({
        where,
        right: file.tracks[0]!.notes.length,
        left: file.tracks[1]!.notes.length,
      });
      // Each hand's start position names the keys of its first notes.
      for (const hand of ["right", "left"] as const) {
        expect({ where, hand, starts: version.start[hand].some((key) => key !== null) }).toEqual({ where, hand, starts: true });
      }
      expect({ where, tips: version.tips.length > 0 }).toEqual({ where, tips: true });
      const spots = trickySpots(versionMeter(song, step)).map((spot) => spot.bar);
      expect({ where, tricky: version.tricky.map((spot) => spot.bar) }).toEqual({ where, tricky: spots });
      texts.push(...version.practice.map((step) => step.text), ...version.tips.map((tip) => tip.text), ...version.tricky.map((spot) => spot.text));
    }
    // A learner reads every sentence, in English and German, so each keeps to the prose rules' 25 words.
    const all = [...texts.flatMap((text) => sentences(text.en)), ...texts.flatMap((text) => (text.de === undefined ? [] : germanSentences(text.de)))];
    for (const sentence of all) {
      expect({ sentence, short: sentence.split(/\s+/).length <= 25 }).toEqual({ sentence, short: true });
    }
    // A song with German has it for every text, and a song without it is listed below.
    if (song.de === undefined) untranslated.push(song.slug);
    else expect({ song: song.slug, missing: texts.filter((text) => text.de === undefined).map((text) => text.en) }).toEqual({ song: song.slug, missing: [] });
  }
  // A malformed guide is dropped whole.
  const good = guideOf(ourSongs[0]!);
  expect(readGuide(JSON.parse(JSON.stringify(good)))).toEqual(good);
  const unknownSkill = { ...good, versions: { ...good.versions, rare: { ...good.versions.rare, skills: ["juggling"] } } };
  expect(readGuide(unknownSkill)).toBeUndefined();
  const noPlan = { ...good, versions: { ...good.versions, epic: { ...good.versions.epic, practice: [] } } };
  expect(readGuide(noPlan)).toBeUndefined();
  // An Original's guide reads only as a whole version's guide, beside the file it guides.
  expect(readGuide({ ...good, mythic: "ours/x/mythic.mid", original: good.versions.common })).toBeDefined();
  expect(readGuide({ ...good, mythic: "ours/x/mythic.mid", original: { ...good.versions.common, practice: [] } })).toBeUndefined();
  expect(readGuide({ ...good, mythic: null, original: good.versions.common })).toBeUndefined();
  expect(readGuide({ ...good, about: { en: "" } })).toBeUndefined();
  expect(readGuide({ ...good, about: "A story in one language." })).toBeUndefined();
  expect(readGuide({ ...good, funFact: { en: "A fact.", de: " " } })).toBeUndefined();
  // A text without German reads, and shows in English.
  expect(textIn({ en: "Play." }, "de")).toBe("Play.");
  expect(textIn({ en: "Play.", de: "Spiel." }, "de")).toBe("Spiel.");
  // Last, so every check above runs first: the songs whose module has no German block, by slug.
  expect({ untranslated }).toEqual({ untranslated: [] });
});

test("a_guide_without_a_translation_shows_english", () => {
  const song = ourSongs[0]!;
  const bare = guideOf(song);
  const partial = guideOf(song, { es: { about: "Una canción para empezar." } });
  // A locale without a file adds no text, and every text then reads in English.
  expect(guideOf(song, {})).toEqual(bare);
  expect(textIn(bare.funFact, "es")).toBe(song.funFact);
  // A file that holds one text adds only that one.
  expect(partial.about).toEqual({ ...bare.about, es: "Una canción para empezar." });
  expect(partial.funFact).toEqual(bare.funFact);
  expect(partial.versions.common).toEqual(bare.versions.common);
  expect(textIn(partial.versions.common.practice[0]!.text, "es")).toBe(song.versions.common.practice[0]!.text);
});

test("a_translated_list_of_another_length_shows_english", () => {
  const song = ourSongs[0]!;
  const { practice, tips } = song.versions.common;
  const guide = guideOf(song, {
    es: { versions: { common: { practice: [...practice.map((_, at) => `Paso ${at + 1}.`), "Un paso de más."], tips: tips.map((_, at) => `Consejo ${at + 1}.`) } } },
  });
  // The practice list is one too long, so every step shows the English.
  expect(guide.versions.common.practice.map((step) => step.text.es)).toEqual(practice.map(() => undefined));
  // The tips match the English by count, so each tip shows its own.
  expect(guide.versions.common.tips.map((tip) => tip.text.es)).toEqual(tips.map((_, at) => `Consejo ${at + 1}.`));
});

test("the_files_match_their_source", async () => {
  const catalog = await readCatalog();
  for (const song of ourSongs) {
    const dir = join(songsDir, oursFolder, song.slug);
    for (const step of stepsOf(song)) {
      const name = stepFileName(song, step);
      const stored = new Uint8Array(await Bun.file(join(dir, name)).arrayBuffer());
      expect({ file: `${song.slug}/${name}`, same: Buffer.from(stored).equals(Buffer.from(versionBytes(song, step))) }).toEqual({
        file: `${song.slug}/${name}`,
        same: true,
      });
    }
    expect(await Bun.file(join(dir, "guide.json")).text()).toBe(guideText(guideOf(song, await guideTranslationsOf(song.slug))));
  }
  expect(await Bun.file(join(songsDir, oursFolder, "LICENSE.md")).text()).toBe(licenseText(ourSongs));
  const ours = catalog.filter((row) => row.file.startsWith(`${oursFolder}/`));
  expect(ours).toEqual(ourSongs.flatMap(rowsOf));
}, 60_000);

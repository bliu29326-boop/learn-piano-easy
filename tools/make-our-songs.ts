/**
 * Our songs: writes each song of `tools/our-songs/` as four MIDI files and a guide in
 * `public/songs/ours/<slug>/`, the folder's `LICENSE.md`, and four rows per song in
 * `public/songs/catalog.json`. A song whose Original is ours gets a fifth file, `mythic.mid`, and a fifth
 * row. [docs/our-songs.md](../docs/our-songs.md) holds the rules a song follows.
 *
 * A song module exports an `OurSong`: its source, its tune with the hook, its four versions in the
 * notation of `tools/song-notation.ts`, its Original, and the text of its guide. The writer measures every
 * step with `tools/song-meter.ts` and refuses the whole run on any problem `songProblems` names.
 *
 * A version whose notes a rework changed is written to `<id>-2.mid` instead, and its old file is deleted.
 * `REWORKED_VERSIONS` in `src/library/moved-songs.ts` names each, since the app moves a learner's work
 * by that list. A version marks its bars of our own in `ownBars` until a rework replaces them.
 *
 * Our Original is an `OurVersion` with its own `source`, the print it follows. Its row carries no
 * `rarity`, and every row of the song names its file as `mythic`. Its guide is the guide's `original`, and
 * its German is the German block's `original`, in the shape of a version's.
 *
 * A guide's text is English beside each field, and German in the song's `de` block, which
 * `tools/our-songs/silent-night.ts` shows. A translator adds that block and changes no other line:
 * - `de.about` and `de.funFact` translate `about` and `funFact`.
 * - `de.versions.<id>.practice` and `de.versions.<id>.tips` hold one text per step and per tip, in the
 *   English order.
 * - `de.versions.<id>.tricky` holds one text per tricky bar, under the same bar numbers as `tricky`.
 * - The writer refuses a block whose counts or bars differ from the English.
 * - The test `every_guide_is_complete` checks each German text has words, and each German sentence
 *   keeps to 25. A German `about` takes 2 to 4 sentences. The test's last check lists every song
 *   without a block.
 * - A sentence ends at `.`, `!` or `?`. The abbreviations `z. B.`, `d. h.`, `u. a.` and `St.` end none, nor
 *   a day or century before its noun, as in `24. Dezember`. Every other abbreviation is written out.
 *
 * Every other locale's text is `tools/our-songs/<slug>.<locale>.ts`, which exports `translation`, a
 * `Translation<GuideTranslation>` in the shape of the German block. It may lack any text, and the guide
 * shows the English in its place. A practice or tip list of another length than the English shows the
 * English list, since its texts match the steps by position.
 *
 * The writer stores each text as `{ "en": …, "de": …, … }` in the locale table's order. It leaves a
 * locale out where no translation holds the text.
 *
 * Decisions, and what each costs:
 * - The guide's fingers, start position and tricky bars come from the versions and the meter, so the
 *   module writes only what a person must: the fingers in the notation and the text.
 * - A version's tricky spots are the bars the meter names, and the module writes one tip per bar. A
 *   change to a version that moves its tricky bars then fails until the tips follow.
 * - The start position of a hand maps each finger to the first key it plays, until a finger takes a
 *   second key. That is where the opening position ends.
 * - The German sits in one block apart from the English, so a translator touches no note and no English
 *   line. Its steps and tips match the English by position, so a step moved in one list moves in both.
 * - A version's catalog difficulty is the meter's `catalogDifficulty`, never set by hand.
 * - A song's collection and other titles go on each of its rows, so the library groups and finds every
 *   version alike.
 * - A version's row names its skills, the same as its guide does, so the library tags it without
 *   reading the guide.
 * - The rows replace every catalog row under `ours/` and follow the modern pieces, so the other song
 *   tools keep them in place. The rest of the catalog keeps its order.
 * - The tunes are public domain, and the arrangements are ours under the MIT License.
 *
 * `bun tools/make-our-songs.ts`. It needs no network, and the app never runs it. `tools/check-our-song.ts`
 * checks one module alone and writes nothing.
 */
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

import { readMidi } from "../src/midi/smf-read";
import { writeMidi } from "../src/midi/smf-write";
import { songFromMidi } from "../src/midi/song";
import { LOCALE_TABLE, type LocaleCode } from "../src/i18n/locale-table";
import type { Translation } from "../src/i18n/translation";
import { playerLibrary } from "../src/i18n/messages/player-library.en";
import { FEWEST_STEPS, MOST_STEPS, RARITIES, RARITY_NAMES, type Guide, type GuideStep, type GuideText, type PracticeStep, type Rarity, type Tip, type VersionGuide } from "../src/library/guide";
import { versionFileName } from "../src/library/moved-songs";
import type { Collection } from "../src/library/search";
import type { SkillId } from "../src/library/skills";
import type { Finger, Hand } from "../src/theory/fingering";
import type { Key } from "../src/theory/key";
import { readCatalog, songsDir, withSpan, writeCatalog, type CatalogSong } from "./catalog";
import { originalsFolder } from "./make-original-songs";
import {
  barCount,
  breaksOf,
  catalogDifficulty,
  earns,
  fingerProblems,
  matchTune,
  measure,
  meterOfNotation,
  originalDifficulty,
  originalFingerProblems,
  originalTuneProblems,
  trickySpots,
  tuneOf,
  type MeterSong,
} from "./song-meter";
import { fingerKey, parseSong, twoHandMidi, writtenFingers, type HandNote, type TwoHandSong } from "./song-notation";
import { canonInD } from "./our-songs/canon-in-d";
import { alleJahreWieder } from "./our-songs/alle-jahre-wieder";
import { alsoSprachZarathustra } from "./our-songs/also-sprach-zarathustra";
import { angelsWeHaveHeardOnHigh } from "./our-songs/angels-we-have-heard-on-high";
import { awayInAManger } from "./our-songs/away-in-a-manger";
import { carolOfTheBells } from "./our-songs/carol-of-the-bells";
import { clairDeLune } from "./our-songs/clair-de-lune";
import { moonlightSonata } from "./our-songs/moonlight-sonata";
import { beethoven7Allegretto } from "./our-songs/beethoven-7-allegretto";
import { gymnopedie1 } from "./our-songs/gymnopedie-1";
import { hungarianDance5 } from "./our-songs/hungarian-dance-5";
import { eineKleineNachtmusik } from "./our-songs/eine-kleine-nachtmusik";
import { lacrimosa } from "./our-songs/lacrimosa";
import { mozart21Andante } from "./our-songs/mozart-21-andante";
import { airOnTheGString } from "./our-songs/air-on-the-g-string";
import { toccataInDMinor } from "./our-songs/toccata-in-d-minor";
import { handelSarabande } from "./our-songs/handel-sarabande";
import { williamTell } from "./our-songs/william-tell";
import { swanLake } from "./our-songs/swan-lake";
import { nightOnBaldMountain } from "./our-songs/night-on-bald-mountain";
import { theSorcerersApprentice } from "./our-songs/the-sorcerers-apprentice";
import { aveMaria } from "./our-songs/ave-maria";
import { bolero } from "./our-songs/bolero";
import { funeralMarch } from "./our-songs/funeral-march";
import { beethoven5 } from "./our-songs/beethoven-5";
import { chopinNocturneCSharpMinor } from "./our-songs/chopin-nocturne-c-sharp-minor";
import { morningMood } from "./our-songs/morning-mood";
import { weddingMarch } from "./our-songs/wedding-march";
import { canCan } from "./our-songs/can-can";
import { vltava } from "./our-songs/vltava";
import { aquarium } from "./our-songs/aquarium";
import { mahlerAdagietto } from "./our-songs/mahler-adagietto";
import { drunkenSailor } from "./our-songs/drunken-sailor";
import { blowTheManDown } from "./our-songs/blow-the-man-down";
import { sailorsHornpipe } from "./our-songs/sailors-hornpipe";
import { spanishLadies } from "./our-songs/spanish-ladies";
import { haulAwayJoe } from "./our-songs/haul-away-joe";
import { neonChase } from "./our-songs/neon-chase";
import { blackFlagJig } from "./our-songs/black-flag-jig";
import { lastHorizon } from "./our-songs/last-horizon";
import { deckTheHalls } from "./our-songs/deck-the-halls";
import { diesIrae } from "./our-songs/dies-irae";
import { dingDongMerrilyOnHigh } from "./our-songs/ding-dong-merrily-on-high";
import { esIstEinRosEntsprungen } from "./our-songs/es-ist-ein-ros-entsprungen";
import { furElise } from "./our-songs/fur-elise";
import { godRestYeMerryGentlemen } from "./our-songs/god-rest-ye-merry-gentlemen";
import { goodKingWenceslas } from "./our-songs/good-king-wenceslas";
import { habanera } from "./our-songs/habanera";
import { hallOfTheMountainKing } from "./our-songs/hall-of-the-mountain-king";
import { happyBirthday } from "./our-songs/happy-birthday";
import { harkTheHeraldAngelsSing } from "./our-songs/hark-the-herald-angels-sing";
import { ihrKinderleinKommet } from "./our-songs/ihr-kinderlein-kommet";
import { itCameUponTheMidnightClear } from "./our-songs/it-came-upon-the-midnight-clear";
import { jingleBells } from "./our-songs/jingle-bells";
import { jollyOldSaintNicholas } from "./our-songs/jolly-old-saint-nicholas";
import { joyToTheWorld } from "./our-songs/joy-to-the-world";
import { klingGloeckchen } from "./our-songs/kling-gloeckchen";
import { kommetIhrHirten } from "./our-songs/kommet-ihr-hirten";
import { leiseRieseltDerSchnee } from "./our-songs/leise-rieselt-der-schnee";
import { maryHadALittleLamb } from "./our-songs/mary-had-a-little-lamb";
import { morgenKinder } from "./our-songs/morgen-kinder";
import { oChristmasTree } from "./our-songs/o-christmas-tree";
import { oComeAllYeFaithful } from "./our-songs/o-come-all-ye-faithful";
import { oDuFroehliche } from "./our-songs/o-du-froehliche";
import { oHolyNight } from "./our-songs/o-holy-night";
import { oLittleTownOfBethlehem } from "./our-songs/o-little-town-of-bethlehem";
import { odeToJoy } from "./our-songs/ode-to-joy";
import { oldMacDonaldHadAFarm } from "./our-songs/old-macdonald-had-a-farm";
import { rowRowRowYourBoat } from "./our-songs/row-row-row-your-boat";
import { silentNight } from "./our-songs/silent-night";
import { theBlueDanube } from "./our-songs/the-blue-danube";
import { theEntertainer } from "./our-songs/the-entertainer";
import { theFirstNoel } from "./our-songs/the-first-noel";
import { suesserDieGlocken } from "./our-songs/suesser-die-glocken";
import { theTwelveDaysOfChristmas } from "./our-songs/the-twelve-days-of-christmas";
import { tochterZion } from "./our-songs/tochter-zion";
import { twinkleTwinkleLittleStar } from "./our-songs/twinkle-twinkle-little-star";
import { upOnTheHousetop } from "./our-songs/up-on-the-housetop";
import { weThreeKings } from "./our-songs/we-three-kings";
import { yankeeDoodle } from "./our-songs/yankee-doodle";

/** The folder of our songs, relative to `public/songs/`. */
export const oursFolder = "ours";

/** The license of every version of ours. */
export const oursLicense = "MIT";

/** Who every version of ours is credited to. */
export const oursCredit = "Arranged by the learn-piano-easy authors";

/** Where a song's tune comes from, and why it is public domain or ours. */
export interface OurSource {
  /** The composer, `Traditional`, or `learn-piano-easy` for a tune of our own. */
  composer: string;
  /** The year the composer died, or null for a traditional tune or one of our own. */
  died: number | null;
  /** The year the tune was first published. */
  published: number;
  /** The public domain edition the tune was checked against, or a note that the tune is ours. */
  edition: string;
  /** True for a tune of our own, which is MIT as every version of ours is and needs no public domain years. */
  own?: true;
}

/** A song's tune in one line of the notation, its key and its hook. */
export interface OurTune {
  text: string;
  numerator: number;
  denominator: number;
  steps?: number;
  key: Key;
  /** The hook's first and last bar, from 1. */
  hookBars: [number, number];
}

/** A practice step or tip as a module writes it: its text in English alone. */
export type Written<T extends { text: GuideText }> = Omit<T, "text"> & { text: string };

/** One version of a song: its notes in the notation and the text of its guide. */
export interface OurVersion {
  /** The version's key, which its file names, so the meter and the sheet read it without guessing. */
  key: Key;
  bpm: number;
  numerator: number;
  denominator: number;
  steps?: number;
  right: string;
  left: string;
  pedal?: string;
  /** The bars, from 1, where the hands clash on purpose. */
  markedClashBars?: number[];
  /**
   * The bars, from 1, whose melody is our own rather than the source's. A rework replaces each with the
   * source's next real phrase, and `no_version_plays_a_bar_of_our_own` lists every one left.
   */
  ownBars?: number[];
  skills: SkillId[];
  practice: Written<PracticeStep>[];
  tips: Written<Tip>[];
  /** A tip for each bar the meter names as a tricky spot, by bar. */
  tricky: Record<number, string>;
}

/** The public domain print an Original of ours follows. */
export interface OriginalSource {
  /** The edition: what it prints, who printed it, and where its scan is. */
  edition: string;
  /** The year the edition was printed. */
  printed: number;
  /** The bars, from 1, that a cut's last cadence adds and the source lacks. There are at most two. */
  addedBars?: number[];
  /**
   * The semitones from the tune's key to the print's key, where the print sets the piece in another key
   * than our versions, as Heugel's *Can-Can* in D does against our G. It is 0 where the keys agree.
   */
  keyShift?: number;
}

/** Our Original of a song: the piece set for two hands, with the guide of a version. */
export interface OurOriginal extends OurVersion {
  source: OriginalSource;
}

/** The most bars an Original of ours may add for a cut's last cadence. */
export const MOST_ADDED_BARS = 2;

/** One locale's text of one version's guide, in the shape of its English text. */
export interface VersionTranslation {
  /** One text per practice step, in the order of `practice`. */
  practice: string[];
  /** One text per tip, in the order of `tips`. */
  tips: string[];
  /** One text per tricky bar, by the same bars as `tricky`. */
  tricky: Record<number, string>;
}

/** One locale's text of a song's guide. German holds every text, and every other locale may lack any. */
export interface GuideTranslation {
  about: string;
  funFact: string;
  versions: Record<Rarity, VersionTranslation>;
  /** The text of the Original's guide, where the Original is ours. */
  original?: VersionTranslation;
}

/** The translations of a song's guide beyond German, by locale, as its `<slug>.<locale>.ts` files hold them. */
export type GuideTranslations = Partial<Record<LocaleCode, Translation<GuideTranslation>>>;

/** A song of ours, as its module exports it. */
export interface OurSong {
  /** The folder's name and the catalog rows' `song`. */
  slug: string;
  title: string;
  source: OurSource;
  about: string;
  funFact: string;
  /**
   * The song's Original, its last step: the catalog file of the composer's own piano score, our setting
   * of the piece, or null for a tune of our own.
   */
  mythic: string | OurOriginal | null;
  /** The collection the library groups the song in, such as `christmas`, or none. */
  collection?: Collection;
  /** The song's other titles, which the library's search matches, such as `Stille Nacht`. */
  aka?: string[];
  tune: OurTune;
  versions: Record<Rarity, OurVersion>;
  /** The guide's German text. A song without it still builds, and the guide's test names it as missing. */
  de?: GuideTranslation;
}

/** Every song of ours, in the catalog's order. */
export const ourSongs: readonly OurSong[] = [
  maryHadALittleLamb,
  twinkleTwinkleLittleStar,
  oldMacDonaldHadAFarm,
  rowRowRowYourBoat,
  yankeeDoodle,
  odeToJoy,
  happyBirthday,
  jingleBells,
  canonInD,
  hallOfTheMountainKing,
  furElise,
  theEntertainer,
  silentNight,
  oChristmasTree,
  itCameUponTheMidnightClear,
  deckTheHalls,
  joyToTheWorld,
  harkTheHeraldAngelsSing,
  oComeAllYeFaithful,
  theFirstNoel,
  godRestYeMerryGentlemen,
  awayInAManger,
  carolOfTheBells,
  dingDongMerrilyOnHigh,
  weThreeKings,
  oHolyNight,
  angelsWeHaveHeardOnHigh,
  goodKingWenceslas,
  theTwelveDaysOfChristmas,
  upOnTheHousetop,
  jollyOldSaintNicholas,
  oLittleTownOfBethlehem,
  leiseRieseltDerSchnee,
  alleJahreWieder,
  klingGloeckchen,
  oDuFroehliche,
  ihrKinderleinKommet,
  morgenKinder,
  kommetIhrHirten,
  suesserDieGlocken,
  esIstEinRosEntsprungen,
  tochterZion,
  alsoSprachZarathustra,
  theBlueDanube,
  habanera,
  diesIrae,
  clairDeLune,
  moonlightSonata,
  beethoven7Allegretto,
  gymnopedie1,
  hungarianDance5,
  eineKleineNachtmusik,
  lacrimosa,
  mozart21Andante,
  airOnTheGString,
  toccataInDMinor,
  handelSarabande,
  williamTell,
  swanLake,
  nightOnBaldMountain,
  theSorcerersApprentice,
  aveMaria,
  bolero,
  funeralMarch,
  beethoven5,
  chopinNocturneCSharpMinor,
  morningMood,
  weddingMarch,
  canCan,
  vltava,
  aquarium,
  mahlerAdagietto,
  drunkenSailor,
  blowTheManDown,
  sailorsHornpipe,
  spanishLadies,
  haulAwayJoe,
  neonChase,
  blackFlagJig,
  lastHorizon,
];

/** The Original of `song` where it is ours, or undefined for a catalog score or none. */
export function ourOriginal(song: OurSong): OurOriginal | undefined {
  return typeof song.mythic === "object" && song.mythic !== null ? song.mythic : undefined;
}

/** Every step of `song` that is ours: its four versions, then its Original where that is ours. */
export function stepsOf(song: OurSong): GuideStep[] {
  return ourOriginal(song) === undefined ? [...RARITIES] : [...RARITIES, "mythic"];
}

/** The step `step` of `song`. An Original that is not ours is an error. */
function stepVersion(song: OurSong, step: GuideStep): OurVersion | OurOriginal {
  if (step !== "mythic") return song.versions[step];
  const original = ourOriginal(song);
  if (original === undefined) throw new Error(`${song.title}: its Original is not ours`);
  return original;
}

/** The English name of `step`, which the catalog's titles and the files carry whatever the live locale. */
function stepEnglishName(step: GuideStep): string {
  return step === "mythic" ? playerLibrary.rarity.originalName : RARITY_NAMES[step];
}

/** The step `step` of `song` as a song of the notation. */
export function versionNotation(song: OurSong, step: GuideStep): TwoHandSong {
  const own: OurVersion & { source?: OriginalSource } = stepVersion(song, step);
  const { markedClashBars: _clashes, ownBars: _own, skills: _skills, practice: _practice, tips: _tips, tricky: _tricky, source: _source, ...notes } = own;
  return { title: `${song.title}, ${stepEnglishName(step)}`, file: stepFileName(song, step), difficulty: 0, ...notes };
}

/** The MIDI file of the step `step` of `song`. */
export function versionBytes(song: OurSong, step: GuideStep): Uint8Array {
  return writeMidi(twoHandMidi(versionNotation(song, step)));
}

/** The meter's view of the step `step` of `song`. */
export function versionMeter(song: OurSong, step: GuideStep): MeterSong {
  return meterOfNotation(versionNotation(song, step), stepVersion(song, step).markedClashBars ?? []);
}

/** The file name of the step `step` of `song` in its folder: `<id>-2.mid` for a reworked version, else `<id>.mid`. */
function stepFileName(song: OurSong, step: GuideStep): string {
  return step === "mythic" ? "mythic.mid" : versionFileName(song.slug, step);
}

/** The catalog file of the step `step` of `song`, from `songs/`. */
function versionFile(song: OurSong, step: GuideStep): string {
  return `${oursFolder}/${song.slug}/${stepFileName(song, step)}`;
}

/** The catalog file of `song`'s Original, ours or the catalog's, or null. */
function mythicFile(song: OurSong): string | null {
  return ourOriginal(song) === undefined ? (song.mythic as string | null) : versionFile(song, "mythic");
}

/**
 * Whether a tune published in `published` by a composer who died in `died` is free in the US and the EU
 * in `year`. A tune of our own is always free to ship.
 */
export function isPublicDomain(source: OurSource, year: number): boolean {
  if (source.own === true) return true;
  return source.published + 95 < year && (source.died === null || source.died + 70 < year);
}

/** What the version `rarity` of `song` breaks: its rarity, its tune, its fingers, or a bar its guide names. */
export function versionProblems(song: OurSong, rarity: Rarity): string[] {
  const where = `${song.title}, ${RARITY_NAMES[rarity]}`;
  const meter = versionMeter(song, rarity);
  const measures = measure(meter);
  const problems: string[] = [];
  if (!earns(measures, rarity)) {
    const breaks = breaksOf(measures, rarity);
    const below = RARITIES[RARITIES.indexOf(rarity) - 1];
    if (breaks.length > 0) problems.push(`breaks ${breaks.map((b) => `${b.name} (${+b.value.toFixed(2)} past ${b.limit})`).join(", ")}`);
    else problems.push(`fits ${below}, so it does not earn ${rarity}`);
  }
  const { tune } = song;
  problems.push(...matchTune(meter, tuneOf(tune.text, tune, tune.key, tune.hookBars), rarity).problems);
  problems.push(...fingerProblems(meter), ...guideProblems(song, rarity, meter));
  const bars = barCount(meter);
  const strayOwn = (song.versions[rarity].ownBars ?? []).filter((bar) => !Number.isInteger(bar) || bar < 1 || bar > bars);
  if (strayOwn.length > 0) problems.push(`marks bars ${strayOwn.join(", ")} as our own, outside its ${bars} bars`);
  return problems.map((problem) => `${where}: ${problem}`);
}

/**
 * What our Original of `song` breaks: its print's years, a cut's added bars, its hook, its fingers, or a
 * bar its guide names. It keeps no limit of the four versions.
 */
export function originalProblems(song: OurSong, year = new Date().getFullYear()): string[] {
  const original = ourOriginal(song);
  if (original === undefined) return [];
  const meter = versionMeter(song, "mythic");
  const { tune } = song;
  const { printed, addedBars = [], keyShift = 0 } = original.source;
  const problems: string[] = [];
  if (printed + 95 >= year) problems.push(`its edition of ${printed} is not public domain in ${year}`);
  if (addedBars.length > MOST_ADDED_BARS) problems.push(`it adds ${addedBars.length} bars, past ${MOST_ADDED_BARS}`);
  const bars = barCount(meter);
  for (const bar of addedBars) if (bar < 1 || bar > bars) problems.push(`its added bar ${bar} lies outside its ${bars} bars`);
  problems.push(...originalTuneProblems(meter, tuneOf(tune.text, tune, tune.key, tune.hookBars), keyShift));
  problems.push(...originalFingerProblems(meter), ...guideProblems(song, "mythic", meter));
  if (song.de !== undefined && song.de.original === undefined) problems.push("its guide has no German");
  return problems.map((problem) => `${song.title}, ${stepEnglishName("mythic")}: ${problem}`);
}

/** What the guide of the step `step` of `song`, measured as `meter`, breaks: a bar it names, or its German. */
function guideProblems(song: OurSong, step: GuideStep, meter: MeterSong): string[] {
  const problems: string[] = [];
  const bars = barCount(meter);
  const version = stepVersion(song, step);
  const named = [
    ...version.tips.map((tip) => [tip.fromBar, tip.toBar]),
    ...version.practice.flatMap((step) => (step.loop === null ? [] : [step.loop])),
    ...Object.keys(version.tricky).map((bar) => [Number(bar), Number(bar)]),
  ];
  for (const [from, to] of named) if (to! > bars || from! < 1) problems.push(`bars ${from} to ${to} lie outside its ${bars} bars`);
  const steps = version.practice.length;
  if (steps < FEWEST_STEPS || steps > MOST_STEPS) problems.push(`it has ${steps} practice steps, outside ${FEWEST_STEPS} to ${MOST_STEPS}`);
  const spots = trickySpots(meter).map((spot) => spot.bar).sort((a, b) => a - b);
  const written = Object.keys(version.tricky).map(Number).sort((a, b) => a - b);
  if (spots.join() !== written.join()) problems.push(`its tricky spots are bars ${spots.join(", ")}, and the tips name bars ${written.join(", ")}`);
  const german = step === "mythic" ? song.de?.original : song.de?.versions[step];
  if (german !== undefined) {
    if (german.practice.length !== version.practice.length) problems.push(`it has ${version.practice.length} practice steps, and ${german.practice.length} in German`);
    if (german.tips.length !== version.tips.length) problems.push(`it has ${version.tips.length} tips, and ${german.tips.length} in German`);
    const germanBars = Object.keys(german.tricky).map(Number).sort((a, b) => a - b);
    if (germanBars.join() !== written.join()) problems.push(`its tricky tips name bars ${written.join(", ")}, and in German bars ${germanBars.join(", ")}`);
  }
  return problems;
}

/** What `song` breaks in `year`: its source, any of its versions, or its Original of ours. */
export function songProblems(song: OurSong, year = new Date().getFullYear()): string[] {
  const problems = isPublicDomain(song.source, year) ? [] : [`${song.title}: its tune is not public domain in ${year}`];
  return [...problems, ...RARITIES.flatMap((rarity) => versionProblems(song, rarity)), ...originalProblems(song, year)];
}

/** The key under each finger of `notes` at their start, until a finger takes a second key. */
function startOf(notes: readonly HandNote[]): (number | null)[] {
  const keys: (number | null)[] = [null, null, null, null, null];
  for (const note of notes) {
    for (let at = 0; at < note.pitches.length; at++) {
      const finger = note.fingers[at];
      if (finger === undefined) continue;
      const held = keys[finger - 1];
      if (held !== null && held !== note.pitches[at]) return keys;
      keys[finger - 1] = note.pitches[at]!;
    }
  }
  return keys;
}

/** Each translation of `song`'s guide in the table's order: German from its module, then `others`. */
function translationsOf(song: OurSong, others: GuideTranslations): [LocaleCode, Translation<GuideTranslation>][] {
  return LOCALE_TABLE.flatMap(({ code }): [LocaleCode, Translation<GuideTranslation>][] => {
    const own = code === "de" ? song.de : code === "en" ? undefined : others[code];
    return own === undefined ? [] : [[code, own]];
  });
}

/** The text `en` with each locale's text that `pick` finds in `translations`, and no key where it finds none. */
function guideTextOf(en: string, translations: readonly [LocaleCode, Translation<GuideTranslation>][], pick: (translation: Translation<GuideTranslation>) => string | undefined): GuideText {
  const text: GuideText = { en };
  for (const [locale, translation] of translations) {
    const own = pick(translation);
    if (own !== undefined) text[locale] = own;
  }
  return text;
}

/** `list` when it holds `length` texts, else undefined, so a list of another length shows the English. */
function sameLength(list: readonly string[] | undefined, length: number): readonly string[] | undefined {
  return list?.length === length ? list : undefined;
}

/** The translations beyond German of the song `slug`: each `tools/our-songs/<slug>.<locale>.ts` that exists. */
export async function guideTranslationsOf(slug: string): Promise<GuideTranslations> {
  const found: GuideTranslations = {};
  for (const { code } of LOCALE_TABLE) {
    if (code === "en" || code === "de") continue;
    const path = join(import.meta.dir, "our-songs", `${slug}.${code}.ts`);
    if (await Bun.file(path).exists()) found[code] = ((await import(path)) as { translation: Translation<GuideTranslation> }).translation;
  }
  return found;
}

/** The guide of the step `step` of `song`, with the texts of `translations`. */
function versionGuide(song: OurSong, step: GuideStep, translations: readonly [LocaleCode, Translation<GuideTranslation>][]): VersionGuide {
  const notation = versionNotation(song, step);
  const written = writtenFingers(notation);
  const file = songFromMidi(readMidi(versionBytes(song, step)));
  const fingersOf = (track: number, hand: Hand): Finger[] =>
    (file.tracks[track]?.notes ?? []).map((note) => {
      const finger = written[hand].get(fingerKey(note.startTick, note.pitch));
      if (finger === undefined) throw new Error(`${notation.title}: the ${hand} hand's note at tick ${note.startTick} has no finger`);
      return finger;
    });
  const parsed = parseSong(notation);
  const version = stepVersion(song, step);
  const own = (translation: Translation<GuideTranslation>) => (step === "mythic" ? translation.original : translation.versions?.[step]);
  return {
    file: versionFile(song, step),
    skills: version.skills,
    fingers: { right: fingersOf(0, "right"), left: fingersOf(1, "left") },
    start: { right: startOf(parsed.right), left: startOf(parsed.left) },
    practice: version.practice.map((step, at) => ({ ...step, text: guideTextOf(step.text, translations, (t) => sameLength(own(t)?.practice, version.practice.length)?.[at]) })),
    tips: version.tips.map((tip, at) => ({ ...tip, text: guideTextOf(tip.text, translations, (t) => sameLength(own(t)?.tips, version.tips.length)?.[at]) })),
    tricky: trickySpots(versionMeter(song, step)).map(({ bar }) => ({ bar, text: guideTextOf(version.tricky[bar]!, translations, (t) => own(t)?.tricky?.[bar]) })),
  };
}

/** The guide of `song`, with German from its module and each locale of `others`. */
export function guideOf(song: OurSong, others: GuideTranslations = {}): Guide {
  const translations = translationsOf(song, others);
  return {
    song: song.slug,
    title: song.title,
    composer: song.source.composer,
    about: guideTextOf(song.about, translations, (t) => t.about),
    funFact: guideTextOf(song.funFact, translations, (t) => t.funFact),
    mythic: mythicFile(song),
    versions: Object.fromEntries(RARITIES.map((rarity) => [rarity, versionGuide(song, rarity, translations)])) as Record<Rarity, VersionGuide>,
    ...(ourOriginal(song) === undefined ? {} : { original: versionGuide(song, "mythic", translations) }),
  };
}

/** `guide` as the text of its file: two-space JSON with each list of numbers on one line. */
export function guideText(guide: Guide): string {
  const text = JSON.stringify(guide, null, 2).replace(/\[\s*((?:-?\d+|null)(?:,\s*(?:-?\d+|null))*)\s*\]/g, (_, items: string) => `[${items.split(/,\s*/).join(", ")}]`);
  return `${text}\n`;
}

/** The catalog rows of `song`: one per version, then one for its Original of ours. That row has no `rarity`. */
export function rowsOf(song: OurSong): CatalogSong[] {
  const mythic = mythicFile(song);
  return stepsOf(song).map((step) => {
    const measures = measure(versionMeter(song, step));
    const row = {
      composer: song.source.composer,
      piece: song.title,
      title: stepEnglishName(step),
      file: versionFile(song, step),
      difficulty: step === "mythic" ? originalDifficulty(measures) : catalogDifficulty(measures, step),
      license: oursLicense,
      credit: oursCredit,
    };
    const ours: CatalogSong = { ...withSpan(row, versionBytes(song, step)), song: song.slug, ...(step === "mythic" ? {} : { rarity: step }), skills: [...stepVersion(song, step).skills] };
    if (mythic !== null) ours.mythic = mythic;
    if (song.collection !== undefined) ours.collection = song.collection;
    if (song.aka !== undefined) ours.aka = song.aka;
    return ours;
  });
}

/** The text of the folder's `LICENSE.md` for `songs`. */
export function licenseText(songs: readonly OurSong[]): string {
  const rows = songs.flatMap((song) => [
    ...stepsOf(song).map((step) => `| \`${song.slug}/${stepFileName(song, step)}\` | ${song.title}, ${stepEnglishName(step)} | ${song.source.composer} | MIT |`),
    `| \`${song.slug}/guide.json\` | ${song.title}, the guide | | MIT |`,
  ]);
  return `# Our songs

The files in this folder are our own arrangements of tunes in the public domain, and the guides to them.
They are under the MIT License, the same as the app: see \`LICENSE\` at the repository root.

\`tools/make-our-songs.ts\` writes them from \`tools/our-songs/\`, so a change goes there, never into a file here.

| File | Title | Tune by | License |
|---|---|---|---|
${rows.join("\n")}
`;
}

/** Writes every song of ours, its guide, the folder's license and the catalog rows. Returns the rows. */
export async function makeOurSongs(songs: readonly OurSong[] = ourSongs): Promise<CatalogSong[]> {
  const problems = songs.flatMap((song) => songProblems(song));
  if (problems.length > 0) throw new Error(`The meter refuses:\n${problems.join("\n")}`);
  const rows: CatalogSong[] = [];
  for (const song of songs) {
    const dir = join(songsDir, oursFolder, song.slug);
    await mkdir(dir, { recursive: true });
    for (const step of stepsOf(song)) {
      const name = stepFileName(song, step);
      await Bun.write(join(dir, name), versionBytes(song, step));
      // A reworked version's old file leaves the folder, as its row leaves the catalog.
      if (name !== `${step}.mid`) await rm(join(dir, `${step}.mid`), { force: true });
    }
    await Bun.write(join(dir, "guide.json"), guideText(guideOf(song, await guideTranslationsOf(song.slug))));
    rows.push(...rowsOf(song));
  }
  await Bun.write(join(songsDir, oursFolder, "LICENSE.md"), licenseText(songs));
  const others = (await readCatalog()).filter((row) => !row.file.startsWith(`${oursFolder}/`));
  const first = (row: CatalogSong) => row.file.startsWith(`${originalsFolder}/`);
  await writeCatalog([...others.filter(first), ...rows, ...others.filter((row) => !first(row))]);
  return rows;
}

if (import.meta.main) {
  const rows = await makeOurSongs();
  console.log(`${rows.length} versions in public/songs/${oursFolder}/`);
}

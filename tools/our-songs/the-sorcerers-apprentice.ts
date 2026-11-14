/**
 * *The Sorcerer's Apprentice*: the bassoon's broom theme from Dukas's symphonic poem, in four versions
 * of ours.
 *
 * The tune is the theme's bars 1 to 10. The print is in 3/8 with staccato eighths, and the tune writes
 * every eighth as a quarter, so each print bar is a bar of 3/4. Its key is F minor, with E as the raised
 * seventh and D natural as a passing note. The hook is bars 1 to 6.
 *
 * The tune is the Original's bars 257 to 266. Every version plays it one or two octaves up in the right
 * hand, then the source's next phrase from the Original's bar 267. That phrase climbs to a repeated C,
 * then runs down to the low C, the key's fifth, in bar 283.
 *
 * Common plays bars 267 to 278, which end on the tonic chord, and closes on A minor. Rare plays bars 267
 * to 281, down to the fifth, and closes on A minor. The low run would cross their hands, so both stop
 * before it. Epic and Legendary play the whole phrase, and close on the tonic after bar 283.
 *
 * Common moves the tune to A minor over a held bass note or open fifth per bar. Rare keeps A minor, and
 * puts a waltz bass under it. Epic moves to D minor, two octaves up, over broken chords in eighths. Its
 * left hand plays the run down two octaves below the right. Legendary keeps F minor over a plucked
 * octave bass. Under the run down it takes the print's own chords, then plays the run an octave below.
 *
 * The Original follows Victor Staub's transcription for two hands, Durand 1908, in F minor. It is cut:
 * printed pages 1 to 5 and the first two bars of page 6, then pages 24 and 25 to the end. The join goes
 * from the last G of page 6's second bar straight to the En serrant of page 24, with no bar of ours.
 *
 * The print changes meter and tempo: 9/8 Assez lent, 9/16 Vif, 3/8 Vif. A song holds one meter and one
 * tempo, so the Original keeps every note's real length on one grid instead. Its bar is a bar of the Vif's
 * 3/8 at a dotted quarter of 112, twelve units to the eighth. A 9/16 bar lasts two of these, and a slow
 * 9/8 bar ten, which puts the Assez lent at an eighth of about 101. Bar numbers in its guide count the grid.
 *
 * Where the print holds a note under a moving voice, the note sounds until its hand moves on, and is never
 * struck again. The pedal holds the two chords the print builds over three slow bars. Chords wider than a
 * hand are rolled. The left hand of bars 257 to 266 carries the tune, so it takes the tune notes the
 * print beams with the right hand's chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const F_MINOR: Key = { tonic: 5, mode: "minor" };

/** The key of Common and Rare. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The key of Epic. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 3/4, in quarters, which are the print's staccato eighths. */
const tune =
  "F3:2 r:1 | C4:2 r:1 | C3:1 D3:1 E3:1 | F3:1 r:1 Ab3:1 | F3:1 r:1 Ab3:1 | G3:1 F3:1 E3:1 | " +
  "F3:1 r:1 Ab3:1 | F3:1 r:1 Ab3:1 | G3:1 F3:1 E3:1 | F3:1 r:1 Ab3:1";

/** The tune in A minor, an octave up, in quarters, as Common and Rare play it. */
const TUNE_A_MINOR = [
  "A4/1:2 r:1 | E5/5:2 r:1 | E4/1:1 F#4/2:1 G#4/3:1 | A4/4:1 r:1 C5/5:1 | A4/4:1 r:1 C5/5:1",
  "B4/4:1 A4/3:1 G#4/2:1 | A4/4:1 r:1 C5/5:1 | A4/4:1 r:1 C5/5:1 | B4/4:1 A4/3:1 G#4/2:1 | A4/4:1 r:1 C5/5:1",
].join(" | ");

/** The Original's bars 267 to 278 in A minor quarters, as Common plays them and Rare in eighths. */
const NEXT_A_MINOR = [
  "A4/1:1 C5/3:1 B4/2:1 | A4/1:1 B4/2:1 C5/3:1 | B4/2:1 D5/4:1 C5/3:1 | B4/2:1 r:1 D#5/4:1",
  "A4/1:1 r:1 C5/3:1 | B4/2:1 D5/4:1 C5/3:1 | B4/2:1 r:1 D#5/4:1 | A4/1:1 r:1 C5/3:1",
  "B4/2:1 C#5/3:1 D5/4:1 | E5/5:1 E5/5:1 E5/5:1 | E5/5:1 E5/5:1 E5/5:1 | E5/5:1 D5/4:1 C5/3:1",
].join(" | ");

/**
 * The Original's bars 279 to 281 in A minor eighths, as Rare plays them: down from B to the dominant E.
 * Bar 280's last sixteenth is left out, and the hand slips down a key at the repeated G.
 */
const DOWN_A_MINOR = "B4/2:2 D5/5:2 C5/4:2 | B4/3:2 A4/2:2 G4/1:2 | G4/3:2 F#4/2:2 E4/1:2";

/** The Original's bars 267 to 283 in D minor sixteenths, as Epic plays them, two octaves up. */
const NEXT_D_MINOR = [
  "D5/1:4 F5/3:4 E5/2:4 | D5/1:4 E5/2:4 F5/3:4 | E5/2:4 G5/4:4 F5/3:4 | E5/2:4 r:4 G#5/4:4",
  "D5/1:4 r:4 F5/3:4 | E5/2:4 G5/4:4 F5/3:4 | E5/2:4 r:4 G#5/4:4 | D5/1:4 r:4 F5/3:4",
  "E5/1:4 F#5/2:4 G5/3:4 | A5/5:4 A5/5:4 A5/5:4 | A5/5:4 A5/5:4 A5/5:4 | A5/5:4 G5/4:4 F5/3:4",
  "E5/2:4 G5/5:4 F5/4:4 | E5/3:4 D5/2:4 C5/1:3 D5/2:1 | C5/1:4 B4/3:4 A4/2:4 | G4/1:4 F4/3:4 E4/2:4",
  "D4/1:4 C4/3:4 B3/2:3 A3/1:1",
].join(" | ");

/** The left hand's line of the Original's bars 281 to 283 in D minor sixteenths, under Epic's run down. */
const DOWN_D_MINOR_LEFT = "C3+F3+G#3/5+2+1:4 B2/5:4 A2/5:4 | G2/5:4 F2/5:4 E2/5:4 | D2/5:4 C2/5:4 B1/5:3 A1/5:1";

/** The Original's bars 267 to 283 in F minor sixteenths, as Legendary plays them, each quarter short. */
const NEXT_F_MINOR = [
  "F4/1:2 r:2 Ab4/3:2 r:2 G4/2:2 r:2 | F4/1:2 r:2 G4/2:2 r:2 Ab4/3:2 r:2",
  "G4/2:2 r:2 Bb4/4:2 r:2 Ab4/3:2 r:2 | G4/2:2 r:6 B4/4:2 r:2 | F4/1:2 r:6 Ab4/3:2 r:2",
  "G4/2:2 r:2 Bb4/4:2 r:2 Ab4/3:2 r:2 | G4/2:2 r:6 B4/4:2 r:2 | F4/1:2 r:6 Ab4/3:2 r:2",
  "G4/1:2 r:2 A4/2:2 r:2 Bb4/3:2 r:2 | C5/5:2 r:2 C5/5:2 r:2 C5/5:2 r:2 | C5/5:2 r:2 C5/5:2 r:2 C5/5:2 r:2",
  "C5/5:2 r:2 Bb4/4:2 r:2 Ab4/3:2 r:2 | G4/2:2 r:2 Bb4/4:2 r:2 Ab4/3:2 r:2",
  "G4/3:2 r:2 F4/2:2 r:2 Eb4/1:3 F4/2:1 | Eb4/1:2 r:2 D4/3:2 r:2 C4/2:2 r:2",
  "Bb3/1:2 r:2 Ab3/3:2 r:2 G3/2:2 r:2 | F3/1:2 r:2 Eb3/3:2 r:2 D3/2:3 C3/1:1",
].join(" | ");

/**
 * The left hand of the Original's bars 279 to 283 in F minor sixteenths, under Legendary's run down: the
 * print's held chord, its chords on the beat, then its line an octave below the right hand.
 */
const DOWN_F_MINOR_LEFT = [
  "B2+Eb3+G3/5+3+1:12 | B2+Eb3+G3/5+3+1:4 r:4 Eb3+G3+Bb3/5+3+1:3 F3/4:1",
  "Eb3+F3+Ab3+B3/5+4+2+1:4 D3/5:4 C3/5:4 | Bb2/5:4 Ab2/5:4 G2/5:4 | F2/5:4 Eb2/5:4 D2/5:3 C2/5:1",
].join(" | ");

/** `text` with every length times `factor`, so a line in quarters reads in eighths at 2 and in sixteenths at 4. */
function inUnits(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** Common's bar of each chord: a held fifth or bass note in one place of the hand. `x` is A alone. */
const HELD: Record<string, string> = {
  a: "A2+E3/5+1:3",
  e: "E3/1:3",
  d: "D3/2:3",
  b: "B2/4:3",
  x: "A2/5:3",
};

/** Rare's waltz bar of each chord: a low note, then a two-note chord twice, or one note under the high E. */
const WALTZ: Record<string, string> = {
  a: "A2/4:2 C3+E3/2+1:2 C3+E3/2+1:2",
  e: "E2/5:2 B2+E3/2+1:2 B2+E3/2+1:2",
  f: "F2/5:2 A2+C3/2+1:2 A2+C3/2+1:2",
  n: "A2/4:2 E3/1:2 E3/1:2",
  D: "F2/5:2 A2+D3/2+1:2 A2+D3/2+1:2",
  b: "F#2/5:2 A2+B2/2+1:2 A2+B2/2+1:2",
  o: "F#2/5:2 A2+C3/2+1:2 A2+C3/2+1:2",
  g: "F2/5:2 G#2+B2/2+1:2 G#2+B2/2+1:2",
  s: "F#2/5:2 E3/1:2 E3/1:2",
  u: "G#2/4:2 C3+E3/2+1:2 C3+E3/2+1:2",
  w: "G2/5:2 B2+D3/2+1:2 D3/1:2",
  G: "G2/5:2 B2+D3/2+1:2 B2+D3/2+1:2",
};

/** Epic's broken chord of each chord, six eighths to the bar. */
const BROKEN: Record<string, string> = {
  d: "D3/5:1 A3/1:1 F3/3:1 A3/1:1 F3/3:1 A3/1:1",
  a: "A2/5:1 E3/2:1 A3/1:1 E3/2:1 C#3/4:1 E3/2:1",
  b: "Bb2/5:1 F3/1:1 D3/3:1 F3/1:1 D3/3:1 F3/1:1",
  g: "G2/5:1 D3/1:1 Bb2/3:1 D3/1:1 Bb2/3:1 D3/1:1",
  s: "G#2/5:1 E3/1:1 D3/2:1 E3/1:1 D3/2:1 E3/1:1",
  o: "G#2/5:1 D3/1:1 B2/3:1 D3/1:1 B2/3:1 D3/1:1",
  h: "A#2/5:1 E3/1:1 C#3/3:1 E3/1:1 C#3/3:1 E3/1:1",
  B: "B2/5:1 A3/1:1 D#3/3:1 A3/1:1 D#3/3:1 A3/1:1",
  c: "C#3/5:1 A3/1:1 F3/3:1 A3/1:1 F3/3:1 A3/1:1",
  E: "E3/5:1 C4/1:1 G#3/3:1 C4/1:1 G#3/3:1 C4/1:1",
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1 E3/3:1 G3/1:1",
};

/** Legendary's plucked bar of each chord in sixteenths: an octave, then a two-note chord on each beat. */
const PLUCKED: Record<string, string> = {
  f: "F2+F3/5+1:2 r:2 F3+Ab3/2+1:2 r:2 F3+Ab3/2+1:2 r:2",
  c: "C2+C3/5+1:2 r:2 E3+G3/2+1:2 r:2 E3+G3/2+1:2 r:2",
  7: "C2+C3/5+1:2 r:2 G3+Bb3/2+1:2 r:2 G3+Bb3/2+1:2 r:2",
  D: "Db2+Db3/5+1:2 r:2 F3+Ab3/2+1:2 r:2 F3+Ab3/2+1:2 r:2",
  b: "Bb1+Bb2/5+1:2 r:2 Db3+F3/2+1:2 r:2 Db3+F3/2+1:2 r:2",
  A: "Ab1+Ab2/5+1:2 r:2 C3+F3/2+1:2 r:2 C3+F3/2+1:2 r:2",
  g: "B1+B2/5+1:2 r:2 F3+G3/2+1:2 r:2 F3+G3/2+1:2 r:2",
  o: "B1+B2/5+1:2 r:2 D3+F3/2+1:2 r:2 D3+F3/2+1:2 r:2",
  h: "C#2+C#3/5+1:2 r:2 E3+G3/2+1:2 r:2 E3+G3/2+1:2 r:2",
  d: "D2+D3/5+1:2 r:2 F#3+C4/2+1:2 r:2 F#3+C4/2+1:2 r:2",
  e: "E2+E3/5+1:2 r:2 G#3+C4/2+1:2 r:2 G#3+C4/2+1:2 r:2",
};

/** The bars of `patterns` for `chords`, one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords]
    .map((chord) => {
      const bar = patterns[chord];
      if (bar === undefined) throw new Error(`no bar for chord ${chord}`);
      return bar;
    })
    .join(" | ");
}

/** Legendary's bar of F, a rest and A flat, in sixteenths, with each quarter played short. */
const PLUCK_FA = "F4/4:2 r:6 Ab4/5:2 r:2";

/** Legendary's bar of G, F and E, in sixteenths, with each quarter played short. */
const PLUCK_TURN = "G4/4:2 r:2 F4/3:2 r:2 E4/2:2 r:2";

/** `text` repeated `count` times, as one line. */
function times(text: string, count: number): string {
  return Array<string>(count).fill(text).join(" ");
}

/** One bar of the print in the Original's grid units: the right hand, the left hand and the pedal. */
type PrintBar = readonly [right: string, left: string, pedal: string];

/** The units of one bar of the Original: a bar of the Vif's 3/8, at twelve units to the eighth. */
const GRID_BAR = 36;

/** Grid units per print unit in the Assez lent, whose eighth of about 101 lasts ten-thirds of the Vif's. */
const SLOW = 10 / 3;

/** Grid units per print unit in the 9/16 bars, whose sixteenth at 504 a minute lasts four-thirds of the Vif's. */
const QUICK = 4 / 3;

/** The sum of the lengths of `text`. */
function unitsOf(text: string): number {
  return text.split(" ").reduce((sum, token) => sum + Number(/:(\d+)~?$/.exec(token)?.[1] ?? Number.NaN), 0);
}

/** `text` with every length times `factor`. Throws on a length that does not come out whole. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => {
    const length = Number(units) * factor;
    if (Math.abs(length - Math.round(length)) > 1e-9) throw new Error(`${units} units do not scale by ${factor}`);
    return `:${Math.round(length)}`;
  });
}

/** `text` in print units of the 9/16 bars, in grid units. */
function quick(text: string): string {
  return scaled(text, QUICK);
}

/** `text` in print units of the Assez lent, in grid units. */
function slowly(text: string): string {
  return scaled(text, SLOW);
}

/** A print bar of `units` print units, set at `factor` grid units per print unit. Throws on a part that does not fill it. */
function printBar(factor: number, units: number, right: string, left: string, pedal = `r:${units}`): PrintBar {
  const bar = [right, left, pedal].map((part) => scaled(part, factor));
  const length = Math.round(units * factor);
  for (const part of bar) if (unitsOf(part) !== length) throw new Error(`a print bar holds ${unitsOf(part)} units, not ${length}: ${part}`);
  return [bar[0]!, bar[1]!, bar[2]!];
}

/** A bar of the Assez lent in 9/8, in print units. */
function lent(right: string, left: string, pedal?: string): PrintBar {
  return printBar(SLOW, 108, right, left, pedal);
}

/** A bar of the Vif in 9/16, in print units. */
function vif16(right: string, left: string): PrintBar {
  return printBar(QUICK, 54, right, left);
}

/** A bar of the Vif in 3/8, in print units, which are the grid's. */
function vif(right: string, left: string): PrintBar {
  return printBar(1, 36, right, left);
}

/** A print bar already written in grid units: 72 for a bar of 9/16, 360 for a bar of 9/8. */
function set(units: number, right: string, left: string): PrintBar {
  return printBar(1, units, right, left);
}

/**
 * The bars of `text` in bars of `size` units. A note that crosses a bar line is tied over it, and a rest
 * is split. Throws where the line does not end on a bar line.
 */
function barred(text: string, size: number): string[] {
  const bars: string[][] = [[]];
  let room = size;
  for (const token of text.split(" ")) {
    const [, head = "", units = "0", tie = ""] = /^(.+):(\d+)(~?)$/.exec(token) ?? [];
    let left = Number(units);
    if (head === "" || left <= 0) throw new Error(`"${token}" is not a note`);
    while (left > 0) {
      const take = Math.min(left, room);
      left -= take;
      room -= take;
      const tied = left > 0 ? (head === "r" ? "" : "~") : tie;
      bars.at(-1)!.push(`${head}:${take}${tied}`);
      if (room === 0) {
        bars.push([]);
        room = size;
      }
    }
  }
  if (room !== size) throw new Error(`the line ends ${size - room} units into a bar`);
  bars.pop();
  return bars.map((bar) => bar.join(" "));
}

/** The semitones of each note letter above C. */
const LETTERS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The MIDI pitch of a note name such as `G#4`, `Cb6` or `E#6`. */
function pitchOf(name: string): number {
  const match = /^([A-G])([#b]?)(\d)$/.exec(name);
  if (match === null) throw new Error(`"${name}" is not a note name`);
  return 12 * (Number(match[3]) + 1) + (LETTERS[match[1]!] ?? 0) + (match[2] === "#" ? 1 : match[2] === "b" ? -1 : 0);
}

/** The widest chord a hand holds at once: 15 semitones, the practical span of fingers 1 and 5. */
const WIDEST_HELD = 15;

/** The grid units each note of a rolled chord takes before the next: 2, about a 64th of the Vif. */
const ROLL_UNITS = 2;

/**
 * `text` with each chord wider than a hand holds rolled from its lowest note up. Each note but the top
 * takes `ROLL_UNITS`, or 1 where the chord is too short for that, and the top note keeps the rest.
 */
function rolledWide(text: string): string {
  return text
    .split(" ")
    .map((token) => {
      const [, chord, fingers, units, tie] = /^([^/]+\+[^/]+)\/([\d+]+):(\d+)(~?)$/.exec(token) ?? [];
      if (chord === undefined || fingers === undefined || units === undefined) return token;
      const marks = fingers.split("+");
      const notes = chord
        .split("+")
        .map((name, at) => ({ name, pitch: pitchOf(name), finger: marks[at] }))
        .sort((a, b) => a.pitch - b.pitch);
      if (notes.at(-1)!.pitch - notes[0]!.pitch <= WIDEST_HELD) return token;
      if (tie) throw new Error(`a chord too wide to hold cannot be tied: ${token}`);
      const last = notes.length - 1;
      const step = Math.min(ROLL_UNITS, Math.floor((Number(units) - 1) / last));
      if (step < 1) throw new Error(`${token} is too short to roll`);
      return notes.map((note, at) => `${note.name}/${note.finger}:${at === last ? Number(units) - last * step : step}`).join(" ");
    })
    .join(" ");
}

/** A bar of the print's long multi-bar rests. */
const REST = vif("r:36", "r:36");

/**
 * Printed pages 1 and 2 to the first 9/16: the Assez lent. Long harmonies are held over a soft bass, with
 * runs of 32nds rising into each chord. The pedal holds the two chords the print builds over three bars.
 */
const INTRODUCTION: PrintBar[] = [
  // Bars 1 to 10: the right hand rests through the eighth rest its line lacks and its remark names.
  lent("A5+A6/1+5:12 r:12 r:12 r:24 r:12 r:24 r:12", "A4/1:108~"),
  lent(
    "Cb6/2:3 Fb5/1:3 Cb6/2:3 Fb6/4:3 Cb7/5:18 Gb5+Bb5/1+3:3 Fb5+Cb6/1+4:3 Ab5/3:3 D5/1:3 Ab5/3:3 D6/4:3 Ab6/5:18 E5+G5/1+3:3 D5+Ab5/1+4:3 F5/2:3 Db5/1:3 F5/2:3 Db6/4:3 Fb6/5:18 D5+E5/1+2:3 Db5+F5/1+3:3",
    "A4:24 A4/3:6 Cb5/2:3 A4/3:3 Bb4+D5/2+1:30 Db5/1:3 Bb4/2:3 Db5/1:24 C5/2:6 Bb4/3:3 C5/2:3",
  ),
  lent("C5+D5/1+2:3 Ab4/1:3 C5+D5/2+3:3 Ab5/5:3 Ab5+C6+D6/1+3+5:96", "F4/5:36 C5/1:36 C4/5:12 D4/4:12 E4/3:12"),
  lent("r:24 r:12 r:24 r:12 C5+Ab5/1+5:12 D5/2:12 E5/3:12", "F4/5:36 C5/1:72~", "P:108~"),
  lent("F5/1:36 C6/2:36 Ab6/5:12 D6/3:12 E6/4:12", "C5:108", "P:108~"),
  lent("F6/4:36 C7/5:72", "D5/1:108", "P:108"),
  lent("Ab5+Ab6/1+5:12 r:12 r:12 r:24 r:12 r:24 r:12", "Ab4/2:108"),
  lent(
    "E6/2:3 Ab5/1:3 E6/2:3 Ab6/4:3 E7/5:18 D6+Bb5/2+1:3 E6+Ab5/3+1:3 C6/2:3 F#5/1:3 C6/2:3 F#6/4:3 C7/5:18 B5+G5/2+1:3 C6+F#5/3+1:3 Ab5/2:3 Fb5/1:3 Ab5/2:3 Fb6/4:3 Ab6/5:18 F5+G5/1+2:3 Fb5+Ab5/1+2:3",
    "C5/2:24 C5/2:6 E5/1:3 C5/2:3 D5/2:24 D5/2:6 E5/1:3 D5/2:3 Db5+Fb5/2+1:30 D5/2:3 Db5/2:3",
  ),
  lent("E5+F5/2+3:3 Cb5/1:3 E5+F5/2+3:3 Cb6/1:3 Eb6+F6/3+5:96", "Ab4/3:36 Eb5/1:36 Eb4/5:12 F4/4:12 G4/3:12"),
  lent("r:24 r:12 r:24 r:12 r:12 F5/1:12 G5/2:12", "Ab4/5:36 Eb5/2:36 Cb6/1:36~", "P:108~"),
  lent("Ab5/2:36 Eb6/1:36 Cb7/5:12 F6/2:12 G6/3:12", "Cb6:108", "P:108~"),
  lent("Ab6/1:36 Eb7/5:72", "F5/2:108", "P:108"),
  lent("Ab5+Ab6/1+5:12 r:12 r:12 r:24 r:12 r:24 r:12", "Ab4/2:108"),
];

/** The left hand's trill on C under the 9/16 bars, at six grid units a note, about eleven a second. */
const C_TRILL = times("C4/4:6 D4/3:6", 6);

/**
 * The rest of page 1 and page 2: the first Vif bursts in 9/16, the slow tremolos of the 1er Mouvt, then
 * the Vif's leaping chords, a long trill on C and a loud close on C.
 */
const FIRST_CALLS: PrintBar[] = [
  set(
    72,
    "F6/1:1 G6/2:1 Ab5+D6+Ab6/1+2+5:6 r:8 G5+G6/1+5:6 Ab6/5:2 G6/4:8 F#6/3:8 G6/4:8 Ab6/5:8 r:8 G6/4:8",
    quick("G3+D4+B4+F5/5+3+2+1:6 r:6 r:6 G5/2:6 F#5/3:6 G5/2:6 Ab5/1:6 r:6 G5/2:6"),
  ),
  set(
    72,
    "Ab6/5:2 G5+D6+G6/1+2+5:6 r:8 Gb6/4:8 G6/5:2 Gb5+Db6+Gb6/1+2+5:6 r:8 F6/4:8 Gb6/5:2 F5+C6+F6/1+2+5:6 r:8 E6/4:8",
    quick("B4+D5/3+1:6 r:6 Gb5/1:6 Bb4+Db5/3+1:6 r:6 F5/1:6 A4+C5/3+1:6 r:6 E5/1:6"),
  ),
  vif16(
    "E5+B5+E6/1+3+5:6 Eb5+Bb5+Eb6/1+3+5:6 D5+A5+D6/1+3+5:6 Db5+Ab5+Db6/1+3+5:6 C5+G5+C6/1+3+5:6 Cb5+Gb5+Cb6/1+3+5:6 Cb5+Gb5+Cb6/1+3+5:6 Bb4+F5+Bb5/1+3+5:6 A4+E5+A5/1+3+5:6",
    "G#4+B4/3+1:6 G4+Bb4/3+1:6 F#4+A4/3+1:6 F4+Ab4/3+1:6 Eb4+G4/3+1:6 Eb4+Gb4/3+1:6 Eb4+Gb4/3+1:6 D4+F4/3+1:6 C#4+E4/3+1:6",
  ),
  vif16(
    "Ab4+Eb5+Ab5/1+2+5:6 D5+G5/2+4:6 Eb5+Ab5/2+5:6 Eb5/2:6 r:6 r:6 Eb4/1:6 F4/2:6 G4/3:6",
    "C4+Eb4/5+3:6 B3+D4/5+3:6 C4+Eb4/5+3:6 r:12 r:6 r:12 r:6",
  ),
  lent(`r:24 r:12 ${times("Cb6+Fb6/3+5:3 Fb5/1:3", 12)}`, "Ab4/3:60 Cb5/1:12 Ab4/3:36~"),
  lent(times("C6+E6/3+5:3 E5/1:3", 18), "Ab4:60 C5/1:12 Bb4/2:12 Ab4/3:12 G4/4:12"),
  lent(times("Ab5+E6/2+5:3 E5/1:3", 18), "C4+Ab4/5+1:60 E4/3:12 C4/5:36~"),
  lent(times("Ab5+E6/2+5:3 E5/1:3", 18), "C4:60 E4/1:12 D4/2:12 C4/3:12 B3/4:12"),
  lent(times("Ab5+E6/2+5:3 E5/1:3", 18), "C4/1:108"),
  set(
    72,
    "Db6/2:1 Eb6/3:1 F6/4:1 Gb5+Db6+Gb6/1+2+5:5 r:8 r:8 A6/2:1 B6/3:1 C#7/4:1 D6+A6+D7/1+2+5:5 r:8 r:8 Eb6/2:1 F6/3:1 G6/4:1 Ab5+Eb6+Ab6/1+2+5:5 r:8 F4+A4+Db5/1+2+5:8",
    quick("Gb3+Db4+Bb4/5+3+1:6 r:6 r:6 D3+A3+F#4+D5/5+4+2+1:6 r:6 r:6 Ab3+Eb4+C5/5+3+1:6 r:6 r:6"),
  ),
  set(72, quick("r:18 F5+F6/1+5:6 r:6 r:6 Db6+Db7/1+5:6 r:6 r:6"), "C#4/3:1 D4/2:1 E4/1:1 F4+A4+Db5/5+3+1:69~"),
  vif16(
    "Db5+Db6/1+5:6 D5+D6/1+5:6 Eb5+Eb6/1+5:6 E5+E6/1+5:6 r:6 r:6 Eb5+Ab5+Db6/1+3+5:6 r:6 F4+A4+Db5/1+2+5:6",
    "F4+A4+Db5:18 E4+Ab4+Bb4/5+2+1:18 r:12 r:6",
  ),
  set(72, quick("r:18 F5+F6/1+5:6 r:6 r:6 Db6+Db7/1+5:6 r:6 r:6"), "C#4/3:1 D4/2:1 E4/1:1 F4+A4+Db5/5+3+1:69~"),
  vif16(
    "Db5+Db6/1+5:6 D5+D6/1+5:6 Eb5+Eb6/1+5:6 E5+E6/1+5:6 r:6 r:6 Eb5+Ab5+Db6/1+2+5:6 r:6 F4+A4+Db5/1+2+4:6",
    "F4+A4+Db5:18 E4+Ab4+Bb4/5+2+1:18 r:12 r:6",
  ),
  set(72, quick("r:18 F5+F6/1+5:6 r:6 r:6 Db6+Db7/1+5:6 r:6 r:6"), "C#4/3:1 D4/2:1 E4/1:1 F4+A4+Db5/5+3+1:69~"),
  vif16(
    "F5/4:6 r:6 r:6 Db5+Db6/1+5:6 r:6 r:6 Ab5+Db6+Ab6/1+2+5:6 r:6 F5+A5+Db6/1+2+4:6",
    "F4+A4+Db5:18 E4+Ab4+Bb4/5+2+1:18 r:12 r:6",
  ),
  set(
    72,
    quick("r:18 A5/4:6 r:6 r:6 F5+F6/1+5:6 r:6 r:6"),
    "C#4/3:1 D4/2:1 E4/1:1 F4+A4+Db5/5+3+1:53 E4+Ab4+Bb4/5+2+1:8 F4+A4+Db5/5+3+1:8",
  ),
  vif16("r:12 r:6 A5/4:6 r:6 r:6 F5+F6/1+5:6 r:6 r:6", "F4+A4+Db5/5+3+1:42 E4+Ab4+Bb4/5+2+1:6 F4+A4+Db5/5+3+1:6"),
  set(
    72,
    quick("F#5+Bb5+D6+F#6/1+2+3+5:6 Bb5+D6/3+5:6 D5+F#5/1+2:6 Bb5+D6/3+5:6 D5+F#5/1+2:6 Bb5+D6/3+5:6 Bb5+D6/3+5:6 D5+F#5/1+2:6 Bb5+D6/3+5:6"),
    `C4+F#4+Bb4+D5/5+3+2+1:6 ${times("D4/3:6 C4/4:6", 5)} D4/3:6`,
  ),
  set(
    72,
    quick("Bb5+D6/3+5:6 D5+F#5/1+2:6 Bb5+D6/3+5:6 Bb5+D6/3+5:6 D5+F#5/1+2:6 Bb5+D6/3+5:6 F#5+Bb5+D6/1+3+5:6 F5+A5+C#6/1+3+5:6 F#5+Bb5+D6/1+3+5:6"),
    C_TRILL,
  ),
  set(
    72,
    quick("F#5+Bb5/3+5:6 Bb4+D5/1+2:6 F#5+Bb5/3+5:6 F#5+Bb5/3+5:6 Bb4+D5/1+2:6 F#5+Bb5/3+5:6 D5+F#5+Bb5/1+3+5:6 C#5+F5+A5/1+3+5:6 D5+F#5+Bb5/1+3+5:6"),
    C_TRILL,
  ),
  set(
    72,
    quick("D5+F#5/1+3:6 F#4+Bb4/1+2:6 D5+F#5/1+3:6 D5+F#5/1+3:6 F#4+Bb4/1+2:6 D5+F#5/1+3:6 Bb4+D5+F#5/1+2+4:6 A4+C#5+F5/1+2+4:6 Bb4+D5+F#5/1+2+4:6"),
    C_TRILL,
  ),
  vif16(times("Bb4+D5/2+4:3 A4+C#5/1+3:3", 9), "C4+D4+F#4/5+4+2:54~"),
  vif16(times("D5+Bb5+D6/1+3+5:3 A5+C#6/2+4:3", 9), "C4+D4+F#4:54~"),
  // Bars 219 and 220: the left hand leaves out the upper octave the print sets in parentheses.
  set(
    72,
    `${times("D5+Bb5+D6/1+3+5:4 A5+C#6/2+4:4", 6)} D5+Bb5+D6/1+3+5:6 E5+C#6+E6/1+3+5:6 F5+C#6+F6/1+3+5:6 F#5+Eb6+F#6/1+4+5:6`,
    "C4+D4+F#4:48 C4/1:6 Bb3/2:6 Ab3/3:6 F3/5:6",
  ),
  vif16(
    "F5+B5+D6+G6/1+2+3+5:6 r:6 r:6 r:12 r:6 Bb4+E5+G5+C6+C7/1+2+3+4+5:6 r:6 r:6",
    "C3+G3+Bb3+D4/5+3+2+1:6 r:6 r:6 r:12 r:6 C3+G3+Bb3+E4/5+3+2+1:6 r:6 r:6",
  ),
  vif16("r:54", "C1+C2/5+1:6 r:6 r:6 r:12 r:6 r:12 r:6"),
  vif16("r:54", "r:54"),
];

/** The Vif's bar of the low F chord alone, and of the low F chord answered by A flat and C. */
const LOW_F = vif("r:36", "F2+Ab2/5+3:24 r:12");
const LOW_F_ANSWERED = vif("r:24 Ab3+C4/1+2:12", "F2+Ab2/5+3:24 r:12");

/**
 * Printed page 3: the Vif in 3/8. The low F chord counts in through long rests, and the broom's tune
 * enters in the left hand from bar 257. Chords answer it, it climbs, and trills lead to a loud tutti.
 */
const BROOM: PrintBar[] = [
  LOW_F,
  ...Array<PrintBar>(5).fill(REST),
  LOW_F,
  ...Array<PrintBar>(5).fill(REST),
  LOW_F_ANSWERED,
  LOW_F,
  ...Array<PrintBar>(4).fill(REST),
  LOW_F_ANSWERED,
  LOW_F,
  ...Array<PrintBar>(4).fill(REST),
  ...Array<PrintBar>(6).fill(LOW_F_ANSWERED),
  vif("r:24 Ab3+C4+F4/1+2+4:12", "F2+Ab2+F3/5+3+1:24 r:12"),
  // Bar 258: the left hand plays the tune's C4 alone and leaves out the print's low F and A flat. That keeps
  // the C4 a note of one hand, where the meter's hook check finds the tune.
  vif("r:24 Ab3+F4/1+4:12", "C4/1:24 r:12"),
  vif("r:24 G3+Bb3+C4/1+2+4:12", "F2+Bb2+C3/5+3+2:12 D3/2:12 E3/1:12"),
  vif("r:12 r:12 C4+F4/2+5:12", "F2+Ab2+F3/5+4+1:12 r:12 Ab3/1:12"),
  vif("r:12 r:12 C4+F4/1+5:12", "F2+Ab2+F3/5+4+1:12 r:12 Ab3/1:12"),
  vif("r:24 G3+Bb3+Db4/1+2+4:12", "F2+Bb2+G3/5+3+1:12 F3/2:12 E3/3:12"),
  vif("r:12 r:12 C4+F4/1+5:12", "F2+Ab2+F3/5+4+1:12 r:12 Ab3/1:12"),
  vif("r:12 r:12 C4+F4/1+5:12", "F2+Ab2+F3/5+4+1:12 r:12 Ab3/1:12"),
  vif("r:24 G3+Bb3+Db4/1+2+4:12", "F2+Bb2+G3/5+3+1:12 F3/2:12 E3/3:12"),
  vif("r:12 r:12 C4+F4/1+5:12", "F2+Ab2+F3/5+4+1:12 r:12 Ab3/1:12"),
  vif("r:12 r:12 Ab3+C4+Ab4/1+2+5:12", "F2+Ab2+F3/5+4+1:12 Ab3/1:12 G3/2:12"),
  vif("r:12 r:12 C4+F4+C5/1+2+5:12", "Ab2+C3+F3/5+3+1:12 G3/2:12 Ab3/1:12"),
  vif("r:12 r:12 Db4+F4+Db5/1+2+5:12", "Bb2+F3+G3/5+2+1:12 Bb3/1:12 Ab3/2:12"),
  vif("r:12 r:12 Db4+F4+Db5/1+2+5:12", "B2+F3+G3/5+2+1:12 r:12 B3/1:12"),
  vif("r:12 r:12 D4+F4+D5/1+2+5:12", "B2+F3/5+1:12 r:12 Ab3/1:12"),
  vif("r:12 r:12 Db4+F4+Db5/1+2+5:12", "Bb2+F3+G3/5+2+1:12 Bb3/1:12 Ab3/2:12"),
  vif("r:12 r:12 Db4+F4+Db5/1+2+5:12", "B2+F3+G3/5+2+1:12 r:12 B3/1:12"),
  vif("r:12 r:12 D4+F4+D5/1+2+5:12", "B2+F3/5+1:12 r:12 Ab3/1:12"),
  vif("r:12 r:12 E4+Bb4+E5/1+3+5:12", "C#3+E3+G3/5+3+1:12 A3/2:12 Bb3/1:12"),
  vif("r:12 r:12 D4+Bb4+D5/1+3+5:12", "D3+F#3+C4/5+3+1:12 C4/1:12 C4/1:12"),
  vif("r:12 r:12 Bb4+C5/1+2:12", "E3+G#3+C4/5+3+1:12 C4/1:12 C4/1:12"),
  vif("r:12 r:12 C4+D4+F#4/1+2+4:12", "F3+Ab3+C4/5+3+1:12 Bb3/2:12 Ab3/3:12"),
  vif("B3+Eb4+G4/1+3+5:36~", "G3/3:12 Bb3/1:12 Ab3/2:12"),
  vif("B3+Eb4+G4:12 r:24", "G3/2:12 F3/3:12 Eb3+G3+Bb3/5+3+1:9 F3/2:3"),
  vif("r:36", "Eb3+F3+Ab3+B3/5+4+2+1:12 D3/5:12 C3/5:12"),
  vif("r:36", "Bb2/5:12 Ab2/5:12 G2/5:12"),
  vif("r:36", "F2/5:12 Eb2/5:12 D2/5:9 C2/5:3"),
  vif("G3+C4/1+2:6 Db4/3:6 C4/2:6 Db4/3:6 C4/2:6 Db4/3:6", "E3/2:6 F3/1:6 E3/2:6 F3/1:6 E3/2:6 F3/1:6"),
  vif("Ab3+Db4/1+3:6 Eb4/4:6 Db4/3:6 Eb4/4:6 C4/2:6 Db4/3:6", "C3+F3/5+2:6 G3/1:6 F3/2:6 G3/1:6 E3/3:6 F3/2:6"),
  vif("G3+C4/1+2:12 C4+E4/1+3:12 E4+G4/3+5:12", "C3+E3/5+3:12 G3/2:12 Bb3/1:12"),
  vif("C5/2:6 Db5/3:6 C5/2:6 Db5/3:6 C5/2:6 Db5/3:6", "Ab3+C4+Ab4/5+4+1:24 E4/1:12"),
  vif("B4+C5/1+2:6 Db5/3:6 C5/2:6 Db5/3:6 C5/2:6 Db5/3:6", "G3+B3+G4/5+4+1:24 E4/1:12"),
  vif("Bb4+C5/1+2:6 Db5/3:6 C5+Eb5/2+4:6 Db5/3:6 C5+Ab5/1+5:6 Db5/2:6", "Gb3+Bb3+Eb4+Gb4/5+4+2+1:12 C4/1:12 F3+Ab3+F4/5+4+1:12"),
  vif("C5+G5+C6/1+3+5:12 r:6 C6+C7/1+5:6 Bb5+Db6+Bb6/1+2+5:12", "E3+G3+C4/5+3+1:12 r:12 E3+G3+Db4+G4/5+4+2+1:12"),
  vif("Bb5+Bb6/1+5:12 Ab5+Ab6/1+5:12 G5+Db6+G6/1+2+5:12", "F3+Ab3+Db4+Ab4/5+4+2+1:12 r:12 F3+Ab3+Db4+Ab4/5+4+2+1:12"),
  vif("F5+Db6+F6/1+3+5:12 Eb5+C6+Eb6/1+3+5:12 Db5+Bb5+Db6/1+4+5:12", "G3+Bb3+Db4+G4/5+4+2+1:12 r:12 G3+Db4+F4+Bb4/5+3+2+1:12"),
  vif("C5+Ab5+C6/1+4+5:12 G5/3:12 Gb5/2:12", "Ab3+C4+F4+Ab4/5+4+2+1:12 G4/2:12 Gb4/3:12"),
  vif("Gb5+C6/3+5:12 Eb5+Gb5+Eb6/1+2+5:12 Db5+Gb5+Db6/1+3+5:12", "Bb3+Db4+Gb4/5+3+1:12 Gb3+Bb3+Gb4/5+4+1:12 Bb3+Db4+Gb4/5+3+1:12"),
  vif("Ab4+Fb5+Ab5/1+3+5:12 r:12 G4+Bb4+G5/1+2+5:12", "Db3+Bb3+Fb4/5+2+1:12 Db4/1:12 Db3+Bb3+Db4/5+2+1:12"),
  vif("F4+Ab4+F5/1+2+5:12 r:12 Ab4+Eb5+Ab5/1+3+5:12", "C3+Ab3+C4/5+2+1:12 r:12 C4+Eb4/2+1:12"),
  vif("F4+D5+F5/1+4+5:12 r:12 Ab4+D5+Ab5/1+3+5:12", "C3+A3+Bb3/5+2+1:12 r:12 Bb3+D4/2+1:12"),
  vif("G4+Db5+G5/1+3+5:12 F4+C5+F5/1+3+5:12 E4+Bb4+E5/1+3+5:12", "Bb3+Db4/2+1:12 C3+Ab3+C4/5+2+1:12 C3+G3+Bb3/5+2+1:12"),
  vif("F4+Ab4+F5/1+2+5:12 r:12 r:12", "F3+Ab3/2+1:12 C3/5:12 F3/2:12"),
  vif("r:36", "Ab2/3:12 C3/2:12 C2/5:12"),
  vif("r:36", "F2/5:12 r:12 Ab2/3:12"),
];

/** The right hand's figure of three voices over the held F, on D, D flat and F. */
const SLIDE_HIGH = "A4+F5+D6/1+2+5:24 G#4+E5+C6/1+2+5:6 A4+F5+D6/1+2+5:6";
const SLIDE_MIDDLE = "F4+Db5+A5/1+2+5:24 E4+C5+G#5/1+2+5:6 F4+Db5+A5/1+2+5:6";

/** The right hand's chords over the held F: a diminished seventh, then the turn on G and B. */
const HALF_DIM = "Gb3+A3+Db4/1+2+4:12 r:12 Gb3+A3+F4/1+2+5:12";
const G_TURN = "G3+B3+Eb4/1+2+4:12 G3+B3+Db4/1+2+4:12 G3+B3/1+3:12";
const LOW_TURN = "B3+Eb4+G4/1+2+4:12 B3+Eb4+F4/1+2+3:12 B3+Eb4/1+2:12";
const A_CHORDS = "A3+Db4+F4/1+2+4:12 r:12 A3+Db4+A4/1+2+5:12";

/** The right hand's sixteenths on E flat, with F sharp below, of page 4's crescendo. */
const E_FLAT_SHAKE = times("Bb4+Eb5+G5/1+2+5:6 F#5/4:6", 3);

/**
 * Printed page 4: chords slide over a low F held for bars at a time, then sixteenths climb in E flat and E,
 * with the left hand crossing over the right. A loud ninth chord on C closes the page.
 */
const SLIDES: PrintBar[] = [
  vif(SLIDE_HIGH, "F1+F2/5+1:36~"),
  vif(SLIDE_MIDDLE, "F1+F2:36~"),
  vif("Db4+A4+F5/1+2+5:24 C4+G#4+E5/1+2+5:6 Db4+A4+F5/1+2+5:6", "F1+F2:36"),
  // Bars 305 and 314: the upper notes of the left hand's rolled chord join the right hand's roll, so the
  // left hand holds the low F. Bars 311 and 320: the left hand's chord doubles the right hand's, and is left out.
  vif("F3+A3+Db4+F4+Db5/1+2+3+4+5:12 r:12 F3+A3+F4/1+2+5:12", "F1+F2/5+1:36~"),
  vif(HALF_DIM, "F1+F2:36~"),
  vif(G_TURN, "F1+F2:36"),
  vif("F3+A3+Db4/1+2+4:12 r:12 F3+A3+F4/1+2+5:12", "E1/2:3 F1/1:3 F1+F2/5+1:30~"),
  vif(HALF_DIM, "F1+F2:36~"),
  vif(G_TURN, "F1+F2:36"),
  vif("Db5+A5+F6/1+3+5:24 C5+G#5+E6/1+3+5:6 Db5+A5+F6/1+3+5:6", "F1+F2/5+1:36~"),
  vif(SLIDE_HIGH, "F1+F2:36~"),
  vif(SLIDE_MIDDLE, "F1+F2:36"),
  vif("A3+Db4+F4+A4+F5/1+2+3+4+5:12 r:12 A3+Db4+A4/1+2+5:12", "F1+F2/5+1:36~"),
  vif(A_CHORDS, "F1+F2:36~"),
  vif(LOW_TURN, "F1+F2:36"),
  vif(A_CHORDS, "E1/5:3 F1+F2/5+1:33~"),
  vif(A_CHORDS, "F1+F2:36~"),
  vif(LOW_TURN, "F1+F2:36"),
  vif("Db5+A5+F6/1+3+5:24 G#5+E6/1+4:6 A5+F6/2+5:6", "F1+F2/5+1:12 r:12 A2/3:12"),
  vif("F5+Db6/1+5:24 E5+C6/1+4:6 F5+Db6/1+5:6", "F1+F2/5+1:12 A2/2:12 G2/3:12"),
  vif("F4+Db5+A5/1+2+5:24 C5+G#5/1+4:6 Db5+A5/2+5:6", "F1+F2/5+1:12 G2/3:12 A2/2:12"),
  vif("G4+Eb5+Bb5/1+3+5:6 F#5/4:6 Bb4+Eb5+G5/1+2+5:6 F#5/4:6 Bb4+Eb5+G5/1+2+5:6 F#5/4:6", "G1+G2/5+1:12 Bb2/2:12 Ab2/3:12"),
  vif(E_FLAT_SHAKE, "G2+Bb3/5+1:12 Eb4/1:12 Bb5/2:12"),
  vif("Bb4+Eb5+G5/1+2+5:6 F#5/4:6 G5/5:6 F#5/4:6 G5/5:6 Ab5/5:6", "Eb6/2:12 r:12 r:12"),
  vif("Db5+A5+F6/1+3+5:24 G#5+E6/1+4:6 A5+F6/2+5:6", "F1+F2/5+1:12 r:12 A2/3:12"),
  vif("F5+Db6/1+5:24 E5+C6/1+4:6 F5+Db6/1+5:6", "F1+F2/5+1:12 A2/2:12 G2/3:12"),
  vif("F4+Db5+A5/1+2+5:24 C5+G#5/1+4:6 Db5+A5/2+5:6", "F1+F2/5+1:12 G2/3:12 A2/2:12"),
  vif("G4+Eb5+Bb5/1+2+5:6 F#5/4:6 Bb4+Eb5+G5/1+2+5:6 F#5/4:6 Bb4+Eb5+G5/1+2+5:6 F#5/4:6", "G1+G2/5+1:12 Bb2/3:12 Ab2/4:12"),
  vif(E_FLAT_SHAKE, "G2+Bb3/5+1:12 Eb4/1:12 Bb5/2:12"),
  vif(E_FLAT_SHAKE, "Eb6/2:12 r:12 r:12"),
  vif("B4+E5+G5/1+2+5:6 F#5/3:6 G5/4:6 F#5/3:6 G5/4:6 A5/5:6", "G1+G2/5+1:12 B2/3:12 A2/4:12"),
  vif("E5+G5+B5/1+3+5:6 A#5/3:6 B5/4:6 A#5/3:6 B5/4:6 D#6/5:6", "G2+B3/5+1:12 E4/1:12 B4/1:12"),
  vif("G5+B5+E6/1+3+5:6 D#6/3:6 E6/4:6 D#6/3:6 E6/4:6 F#6/5:6", "E5/1:12 r:12 r:12"),
  vif("B5+E6+G6/1+2+5:6 F#6/3:6 G6/4:6 F#6/3:6 G6/4:6 A6/5:6", "G1+G2/5+1:12 B3/1:12 E4/1:12"),
  vif("E6+G6+B6/1+3+5:6 A#6/3:6 B6/4:6 A#6/3:6 B6/4:6 D#7/5:6", "B4/1:12 E5/1:12 B5/2:6 D#6/4:6"),
  vif("G6+B6+E7/1+3+5:6 D#7/3:6 E7/4:6 D#7/3:6 E7/4:6 F#7/5:6", "E6/2:6 D#6/1:6 E6/2:6 r:6 r:12"),
  vif("G6+Bb6+G7/1+2+5:12 r:12 D5+F5+B5/1+2+5:12", "C2/5:3 C3/1:3 E5+G5+D6/5+3+1:6 Eb5+Gb5+C6/5+3+1:12 r:12"),
];

/** The right hand's tune of page 5 in sixths: A flat and C, then G, then A flat and C again. */
const TUNE_ON_C = "Ab5+C6/3+5:6 G5/2:6 Ab5+C6/3+5:12";
const TUNE_ON_D_FLAT = "Ab5+Db6/3+5:6 G5/2:6 Ab5+Db6/3+5:12";
const TUNE_ON_D_FLAT_LOW = "Ab5+Db6/2+5:6 G5/1:6 Ab5+Db6/2+5:12";
const TURN_ON_G = "Db5+G5+Db6/1+2+5:6 F#5/1:6 G5+Db6/2+5:6 F#5/1:6 G5+Db6/2+5:12";
const D_FLAT_LEFT = "F3+Ab3+Db4+F4/5+4+2+1:12 r:12 Ab4/1:12";
const RUN_DOWN = vif("F4+G4/1+2:6 Eb4/1:6 Db4/1:6 C4/1:6 Db5/5:12", "Db4/1:6 C4/2:6 Bb3/3:6 Ab3/4:6 G3+Bb3/5+3:12");
const SIXTHS_UP = vif(
  "Bb4+Gb5+Bb5/1+3+5:6 Cb5+Ab5+Cb6/1+3+5:6 Db5+Bb5+Db6/1+3+5:6 Eb5+Cb6+Eb6/1+3+5:6 Fb5+Db6+Fb6/1+3+5:12",
  "Fb4/2:24 Ab4/1:12",
);
const E_FLAT_CALL = vif(
  "Eb5+Eb6/1+5:12 r:12 Eb6+Eb7/1+5:12",
  "Eb2+Eb3+Db4+Eb4+G4/5+1+3+2+1:12 Db4+Eb4+Ab4/3+2+1:12 Db4+Eb4+Bb4/4+3+1:12",
);
const G_FLAT_CALL = vif("C4+Gb4+C5/1+2+5:12 C5+Gb5/1+5:12 Gb4+C5/1+5:12", "Ab2+Ab3/5+1:12 Ab3+C4+Gb4/5+3+1:12 Ab3+Eb4/5+1:12");
/**
 * The augmented chord's bar. Here, and in each `E_FLAT_CALL`, the print brackets a third layer to the left
 * hand's low E flat octave on beat 1: B3+Eb4+G4 here, Db4+Eb4+G4 there. No hand holds all five notes, so
 * `rolledWide` rolls them from Eb2 up in bars 365, 367, 371 and 373.
 */
const AUGMENTED = vif(
  "Eb5+G5+Eb6/1+2+5:12 G5+B5+G6/1+2+5:12 F5+B5+F6/1+2+5:12",
  "Eb2+Eb3+B3+Eb4+G4/5+1+3+2+1:12 r:12 Eb3+G3+B3/5+3+1:12",
);

/**
 * Printed page 5 and two bars of page 6: chords slide down over a low C, then the tune runs high in the
 * right hand, loud, with the left hand's chords on the beat. Calls on E flat and augmented chords build
 * to G, and the right hand rocks on G and F sharp as the section dies away.
 */
const TUTTI: PrintBar[] = [
  vif("Db5+E5+Bb5/1+2+5:12 C5+Eb5+A5/1+2+5:12 B4+D5+Ab5/1+2+5:12", "C2/5:24 E3+G3/2+1:12"),
  vif("Bb4+Db5+G5/1+2+5:12 A4+C5+Gb5/1+2+5:12 Ab4+B4+F5/1+2+5:12", "C2/5:24 G3+Bb3/2+1:12"),
  vif("G4+Bb4+E5/1+2+5:12 Gb4+A4+Eb5/1+2+5:12 F4+Ab4+D5/1+2+5:12", "C2/5:24 Bb3+E4/2+1:12"),
  vif("E4+G4+Db5/1+2+5:12 Eb4+Gb4+C5/1+2+5:12 D4+F4+B4/1+2+5:12", "C2/5:24 G4/1:12"),
  vif("Db4+E4+Bb4/1+2+5:12 C4+Eb4+Ab4/1+2+5:12 Bb3+Db4+E4+G4/1+2+3+5:12", "C2/5:24 Bb4/1:12"),
  vif("A3+C4+F4/1+2+5:12 Ab5+C6/3+5:6 G5/2:6 Ab5+C6/3+5:12", "F2+F3/5+1:12 r:12 r:12"),
  vif(`Ab5+C6/3+5:12 ${TUNE_ON_C}`, "C5/1:24 r:12"),
  vif(`C5+Ab5+C6/1+3+5:12 ${TUNE_ON_C}`, "C4/3:12 D4/2:12 E4/1:12"),
  vif(`Db5+Ab5+Db6/1+3+5:12 ${TUNE_ON_D_FLAT}`, D_FLAT_LEFT),
  vif(`Db5+Ab5+Db6/1+3+5:12 ${TUNE_ON_D_FLAT}`, D_FLAT_LEFT),
  vif(TURN_ON_G, "Bb3+Db4+G4/5+3+1:12 F4/2:12 E4/3:12"),
  vif(`Db5+Ab5+Db6/1+3+5:12 ${TUNE_ON_D_FLAT}`, D_FLAT_LEFT),
  vif(`Db5+Ab5+Db6/1+3+5:12 ${TUNE_ON_D_FLAT}`, D_FLAT_LEFT),
  vif(TURN_ON_G, "Bb3+Db4+G4/5+3+1:12 F4/2:12 E4/3:12"),
  vif(`Db5+Ab5+Db6/1+2+5:12 ${TUNE_ON_D_FLAT_LOW}`, D_FLAT_LEFT),
  vif(`Db5+Ab5+Db6/1+2+5:12 ${TUNE_ON_D_FLAT_LOW}`, "F3+Ab3+Db4+F4/5+4+2+1:12 Ab4/1:12 G4/1:12"),
  vif("Db5+F5+Db6/1+2+5:12 F5+Db6/2+5:6 E5/1:6 F5+Db6/2+5:12", "Ab3+Db4+F4/5+2+1:12 G4/1:12 Ab4/1:12"),
  vif("Db5+F5+Db6/1+2+5:12 Bb4/1:12 Ab4/1:12", "Db4+F4+G4/3+2+1:12 Db4+F4/2+1:12 Db4+F4/2+1:12"),
  RUN_DOWN,
  SIXTHS_UP,
  vif("r:12 Bb4/1:12 Ab4/1:12", "Db4+F4+G4/3+2+1:12 Db4+F4/2+1:12 Db4+F4/2+1:12"),
  RUN_DOWN,
  SIXTHS_UP,
  vif("Db4+Eb4+G4/1+2+4:12 Ab4+G5/1+5:12 G4+Bb4/1+3:12", "Eb2+Eb3/5+1:12 Db4+Eb4/1+2:12 Eb3+Db4/5+1:12"),
  vif("C4+Gb4+C5/1+2+5:12 C5+Gb5/1+4:12 Gb4+C5/1+4:12", "Ab2+Ab3/5+1:12 Ab3+Eb4+Gb4/5+2+1:12 Ab3+Eb4/5+1:12"),
  vif("C4+Gb4+C5/1+2+5:12 Bb4+Gb5/1+4:12 Eb4+Gb4+Ab4/1+2+4:12", "Ab2+Ab3/5+1:12 Ab3+C4+Gb4/5+4+1:12 Ab3+C4/5+3:12"),
  AUGMENTED,
  vif("Eb5+G5+Eb6/1+2+5:12 B4+Eb5+B5/1+2+5:12 B5+B6/1+5:12", "G3+B3+Eb4/5+2+1:12 r:12 r:12"),
  E_FLAT_CALL,
  G_FLAT_CALL,
  G_FLAT_CALL,
  vif("C4+Gb4+C5/1+2+5:12 Bb4+Gb5/1+5:12 Eb4+Gb4+Ab4/1+2+4:12", "Ab2+Ab3/5+1:12 Ab3+C4+Gb4/5+3+1:12 Ab3+C4/5+1:12"),
  AUGMENTED,
  vif("Eb5+G5+Eb6/1+2+5:12 B4+Eb5+B5/1+2+5:12 B5+B6/1+5:12", "G3+B3+Eb4/5+3+1:12 r:12 r:12"),
  E_FLAT_CALL,
  vif(times("C4+Gb4+C5/1+2+5:12", 3), "Ab2+Ab3/5+1:12 Ab3/1:12 Ab2+Ab3/5+1:12"),
  vif(times("C5+Gb5+C6/1+3+5:12", 3), "Eb4+Gb4/2+1:12 Ab3+Gb4/5+1:12 Eb4+Gb4/2+1:12"),
  vif("C4+Gb4+C5/1+2+5:12 C4+Gb4+C5/1+2+5:12 C5+Gb5+C6/1+3+5:12", "Ab3/1:12 Ab2/5:12 Ab3+C4+Gb4/5+3+1:12"),
  vif(times("C4+Eb4+C5/1+2+5:12", 3), "G3/1:12 G2/5:12 G3/1:12"),
  vif(times("C5+G5+C6/1+3+5:12", 3), "Eb4+G4/2+1:12 G3+Eb4+G4/5+2+1:12 Eb4+G4/2+1:12"),
  vif("C4+Eb4+C5/1+2+5:12 C4+Eb4+C5/1+2+5:12 C5+Eb5+C6/1+2+5:12", "G3/1:12 G2/5:12 G3+Eb4+G4/5+2+1:12"),
  vif("Eb4+G4+C5/1+2+5:12 Eb4+G4+C5/1+2+5:12 C5+G5+C6/1+3+5:12", "A3/1:12 A2/5:12 A3+Eb4+G4/5+2+1:12"),
  vif("G4+A4+Eb5/1+2+5:12 G4+A4+Eb5/1+2+5:12 Eb5+G5+Eb6/1+2+5:12", "C4/1:12 C3/5:12 C4+G4+A4/5+2+1:12"),
  vif("A4+C5+F#5/1+2+5:12 C5+Eb5+F#5/1+3+5:12 F#5+A5+F#6/1+2+5:12", "Eb4/2:12 A3/1:12 C4+Eb4+A4/5+3+1:12"),
  vif("G5+D6+G6/1+3+5:12 G4/2:6 F#4/1:6 G4/2:6 F#4/1:6", "D2+F2+Bb2/5+3+1:12 r:12 r:12"),
  vif("G4/2:12 G4/2:6 F#4/1:6 G4/2:6 F#4/1:6", "r:36"),
  vif("G4/2:12 G4/2:6 F#4/1:6 G4/2:6 F#4/1:6", "r:36"),
];

/**
 * Printed page 24, after the cut: En serrant, a loud sequence falls by thirds in both hands, then broken
 * octaves climb over a low D and F, and the bass climbs by fourths under accented quarters.
 */
const SERRANT: PrintBar[] = [
  // Bar 416's first chord spans a major tenth on one stem, past 15 semitones, and is rolled.
  vif("D5+Ab5+C6+F6/1+2+3+5:24 G5+E6/1+5:6 C6+F6/2+5:6", "D2+D3/5+1:12 D5/5:6 C6/1:6 D5/5:6 Ab5/2:6"),
  vif("F5+D6/1+5:24 E5+C#6/1+5:6 Ab5+D6/2+5:6", "C5/5:6 Ab5/1:6 C5/5:6 Ab5/1:6 C5/5:6 F5/2:6"),
  vif("D5+B5/1+5:24 C#5+A#5/1+5:6 F5+B5/2+5:6", "Ab4/5:6 F5/1:6 Ab4/5:6 F5/1:6 Ab4/5:6 D5/3:6"),
  vif("C5+Ab5/1+5:24 B4+G5/1+5:6 Eb5+Ab5/2+5:6", "F#4/5:6 Eb5/1:6 F#4/5:6 Eb5/1:6 F#4/5:6 C5/2:6"),
  vif("Ab4+F5/1+5:24 G4+E5/1+5:6 C5+F5/2+5:6", "D4/5:6 C5/1:6 D4/5:6 C5/1:6 D4/5:6 Ab4/3:6"),
  vif("F4+D5/1+5:24 E4+C#5/1+5:6 Ab4+D5/2+5:6", "C4/5:6 Ab4/1:6 C4/5:6 Ab4/1:6 C4/5:6 F4/3:6"),
  vif("D4+B4/1+5:24 C#4+A#4/1+5:6 F4+B4/2+5:6", "Ab3/5:6 F4/1:6 Ab3/5:6 F4/1:6 Ab3/5:6 D4/2:6"),
  vif("C4+Ab4/1+5:24 B3+G4/1+5:6 Eb4+Ab4/2+5:6", "F#3/5:6 Eb4/1:6 F#3/5:6 Eb4/1:6 F#3/5:6 C4/2:6"),
  vif("Ab3+F4/1+5:24 G3+E4/1+5:6 C4+F4/2+5:6", "D3/5:6 C4/1:6 D3/5:6 C4/1:6 D3/5:6 Ab3/2:6"),
  vif("F3+D4/1+5:24 E3+C#4/1+5:6 Ab3+D4/2+5:6", "C3/5:6 Ab3/1:6 C3/5:6 Ab3/1:6 C3/5:6 F3/2:6"),
  vif("D3+B3/1+5:24 C#3+A#3/1+5:6 F3+B3/2+5:6", "Ab2/5:6 F3/1:6 Ab2/5:6 F3/1:6 Ab2/5:6 D3/2:6"),
  vif("C3+Ab3/1+5:24 B2+G3/1+5:6 Eb3+Ab3/2+5:6", "F#2/5:6 Eb3/1:6 F#2/5:6 Eb3/1:6 F#2/5:6 C3/2:6"),
  vif("Ab2+C3+F3/1+2+5:6 F2/1:6 F3/5:6 F2/1:6 F3/5:6 F2/1:6", "D2/4:24 C#2/5:6 D2/4:6"),
  vif(times("C4/5:6 C3/1:6", 3), "F2/2:24 E2/3:6 F2/2:6"),
  vif(times("F4/5:6 F3/1:6", 3), "D2+Ab2/5+1:24 C#2/5:6 D2/4:6"),
  vif(times("C5/5:6 C4/1:6", 3), "F2/2:24 E2/3:6 F2/2:6"),
  vif(times("F5/5:6 F4/1:6", 3), "D2+Ab2/5+1:24 C#2/5:6 D2/4:6"),
  vif(times("C6/5:6 C5/1:6", 3), "F2/2:24 E2/3:6 F2/2:6"),
  vif("Bb2+C3+Gb3/1+2+4:12 Ab3/4:12 Bb3/5:12", "Eb2/5:6 Eb3/1:6 Eb2/5:6 Eb3/1:6 D2/5:6 Eb2/4:6"),
  vif("Eb3+Bb3+C4/1+4+5:6 C3/1:6 C4/5:6 C3/1:6 C4/5:6 C3/1:6", "Gb2/2:24 F2/3:6 Gb2/2:6"),
  vif("Bb3+C4+Gb4/1+2+4:12 Ab4/4:12 Bb4/5:12", "Eb2/5:6 Eb3/1:6 Eb2/5:6 Eb3/1:6 D2/5:6 Eb2/4:6"),
  vif("Eb4+Bb4+C5/1+4+5:6 C4/1:6 C5/5:6 C4/1:6 C5/5:6 C4/1:6", "Gb2/2:24 F2/3:6 Gb2/2:6"),
  vif("Bb4+C5+Gb5/1+2+4:12 Ab5/4:12 Bb5/5:12", "Eb2/5:6 Eb3/1:6 Eb2/5:6 Eb3/1:6 D2/5:6 Eb2/4:6"),
  vif("Eb5+Bb5+C6/1+4+5:6 C5/3:6 C5/2:6 C4/3:6 C4/2:6 C3/1:6", "Gb2/2:24 F2/3:6 Gb2/2:6"),
  vif("Bb3/2:24 A3/1:6 Bb3/2:6", "Bb1+Bb2/5+1:24 A2/2:6 Bb2/1:6"),
  vif("Eb4/2:24 D4/1:6 Eb4/2:6", "Eb2+Eb3/5+1:24 D3/2:6 Eb3/1:6"),
  vif("Ab4/2:24 G4/1:6 Ab4/2:6", "Ab2+Ab3/5+1:24 G3/2:6 Ab3/1:6"),
  vif("Db5/2:24 C5/1:6 Db5/2:6", "Db3+Db4/5+1:24 C4/2:6 Db4/1:6"),
  vif("Gb5/2:24 F5/1:6 Gb5/2:6", "Gb3+Gb4/5+1:24 F4/2:6 Gb4/1:6"),
  vif("Cb6/2:24 Bb5/1:6 Cb6/2:6", "Cb4+Cb5/5+1:24 Bb4/2:6 Cb5/1:6"),
  vif("C5+Ab5+E6/1+3+5:24 A5+B5+D#6/1+2+5:6 Ab5+C6+E6/1+3+5:6", "Ab1+Ab2/5+1:24 G2/2:6 Ab2/1:6"),
  vif("F5+A5+Db6/1+2+5:24 Gb5+Ab5+C6/1+2+4:6 F5+A5+Db6/1+2+5:6", "Db2+Db3/5+1:24 Eb3/1:6 Db3/2:6"),
  vif("D5+F#5+Bb5/1+3+5:24 Eb5+G5+A5/1+3+4:6 D5+F#5+Bb5/1+3+5:6", "F#2+F#3/5+1:24 F3/2:6 F#3/1:6"),
  vif("B4+D#5+G5/1+3+5:24 C5+D5+F#5/1+2+4:6 B4+D#5+G5/1+3+5:6", "B2+B3/5+1:24 A#3/2:6 B3/1:6"),
  vif("Ab4+C5+E5/1+3+5:24 G4+B4+D#5/1+3+5:6 Ab4+C5+E5/1+3+5:6", "E3+E4/5+1:24 F#4/1:6 E4/2:6"),
  vif("E4+Ab4+C5/1+3+5:24 Eb4+G4+B4/1+3+5:6 E4+Ab4+C5/1+3+5:6", "Ab3/1:24 r:12"),
  vif("Ab4+Db5+Fb5+Ab5/1+2+3+5:12 Db5+Fb5/2+3:12 Db5+Fb5/2+3:12", "Eb2+Eb3/5+1:12 Db4+Fb4/2+1:12 Db4+Fb4/2+1:12"),
  vif("Eb5+Eb6/1+5:12 C5+Eb5/1+2:12 C5+Eb5/1+2:12", times("C4+Eb4/2+1:12", 3)),
  vif("Eb4+Eb5/1+5:12 F4+F5/1+5:12 Gb4+Gb5/1+5:12", times("B3+D4/2+1:12", 3)),
];

/** The right hand's chord on G over the held octave, and its two answers. */
const G_OVER_F = vif("G4+Bb4+Db5+G5/1+2+3+5:12 Bb4+Db5/2+3:12 Bb4+Db5/2+3:12", "F2+F3/5+1:12 Bb3+Db4/2+1:12 Bb3+Db4/2+1:12");
const G_OVER_B_FLAT = vif("Bb4+Db5/2+3:12 Db5+F5/3+4:12 Db5+F5/3+4:12", "Bb2+Bb3/5+1:12 Db4+F4/2+1:12 Db4+F4/2+1:12");
const BASS_CLIMB = vif(times("Db5+F5/2+4:12", 3), "Bb1+Bb2/5+1:12 C2+C3/5+1:12 Db2+Db3/5+1:12");
const OCTAVES_UP = vif("E4+E5/1+5:12 F4+F5/1+5:12 G4+G5/1+5:12", "C2+C3/5+1:18 F2+F3/5+1:18");
const CALL_DOWN = vif("Ab4+Ab5/1+5:18 Eb5+Eb6/1+5:18", "Cb4+D4+F4/3+2+1:18 Bb3+Db4+G4/3+2+1:18");

/** The right hand's trill on F sharp over three bars of the Assez lent, at about eleven notes a second. */
const F_SHARP_TRILL = barred(`F#5+F#6/1+3:6 ${times("G6/4:6 F#6/3:6", 87)} G6/4:10 E#6/2:10 F#6/3:10`, 360);

/**
 * Printed page 25 to the end: the tutti grows to sempre ff, the Assez lent returns with a trill and the
 * opening's sighing chords, and two loud Vif bars end the piece on F.
 */
const ENDING: PrintBar[] = [
  G_OVER_F,
  G_OVER_B_FLAT,
  BASS_CLIMB,
  vif("Ab4+Db5+Fb5+Ab5/1+2+3+5:12 Db5+Fb5/2+3:12 Db5+Fb5/2+3:12", "Eb2+Eb3/5+1:12 Db4+Fb4/2+1:12 Db4+Fb4/2+1:12"),
  vif("Eb5+Eb6/1+5:12 C5+Eb5/1+2:12 C5+Eb5/1+2:12", times("C4+Eb4/2+1:12", 3)),
  vif("Eb4+Eb5/1+5:12 F4+F5/1+5:12 Gb4+Gb5/1+5:12", times("B3+D4/2+1:12", 3)),
  G_OVER_F,
  G_OVER_B_FLAT,
  BASS_CLIMB,
  vif("Ab4+Cb5+D5+F5+Ab5/1+2+3+4+5:18 Eb5+Eb6/1+5:18", "Eb2+Eb3/5+1:18 Bb3+Db4+G4/3+2+1:18"),
  OCTAVES_UP,
  CALL_DOWN,
  OCTAVES_UP,
  CALL_DOWN,
  OCTAVES_UP,
  vif("Ab4+Ab5/1+5:12 Eb5+Eb6/1+5:12 E4+E5/1+5:12", "Cb4+D4+F4/3+2+1:18 Bb3+Db4+G4/3+2+1:18"),
  vif("F4+F5/1+5:12 F#4+F#5/1+5:12 G4+G5/1+5:12", "Ab3+C4+D4/5+2+1:18 C2+C3/5+1:18"),
  vif("Ab4+Ab5/1+5:12 C5+C6/1+5:12 F5+F6/1+5:12", "F3+Ab3+C4+Eb4/5+3+2+1:24 Eb2+Eb3/5+1:12"),
  set(360, F_SHARP_TRILL[0]!, slowly("D2+D3/5+1:3 Bb3+D4+F#4/5+3+1:69 Ab3+C4+D4/5+2+1:24 r:6 Bb3+D4+F#4/5+3+1:6")),
  set(360, F_SHARP_TRILL[1]!, slowly("Bb3+D4+F#4/5+3+1:72 Ab3+C4+D4/5+2+1:24 r:6 Bb3+D4+F#4/5+3+1:6")),
  set(
    360,
    F_SHARP_TRILL[2]!,
    slowly("Bb3+D4+F#4/5+3+1:48 r:12 Ab3+C4+D4/5+2+1:6 Bb3+D4+F#4/5+3+1:6 Bb3+D4+F#4/5+3+1:24 Ab3+C4+D4/5+2+1:6 Bb3+D4+F#4/5+3+1:6"),
  ),
  lent("G5+Bb5+F6+G6/1+2+4+5:6 r:6 r:12 r:12 r:72", "C2+C3+Bb3+Db4+G4/5+4+3+2+1:6 r:6 r:12 r:12 r:72"),
  lent("Bb3+E4+G4+C5/1+2+3+5:6 r:6 r:12 r:12 r:72", "C3+G3/5+1:6 r:6 r:12 r:12 r:72"),
  lent("r:108", "F2+Ab2/5+3:12 r:12 r:12 r:72"),
  lent("r:108", "F2+Ab2/5+3:12 r:12 r:12 r:72"),
  lent(
    "A4+F5+Db6/1+3+5:30 G#4+E5+C6/1+2+5:3 A4+F5+Db6/1+3+5:3 F4+Db5+A5/1+3+5:30 E4+C5+G#5/1+2+5:3 F4+Db5+A5/1+3+5:3 Db4+A4+F5/1+3+5:30 C4+G#4+E5/1+2+5:3 Db4+A4+F5/1+3+5:3",
    "F1+F2/5+1:84 r:12 r:12",
  ),
  lent("F#4+Bb4+D5/1+3+5:24 A4/2:9 Bb4/3:3 Eb4+A4+C5/1+3+5:12 F#4/2:12 G4/3:12 E4+A4+Bb4/1+3+4:24 G4/2:12", "C3/5:36 C4/1:36 C3/5:12 D3/4:12 E3/3:12"),
  lent(
    "A4+F5+Db6/1+2+5:30 G#4+E5+C6/1+2+5:3 A4+F5+Db6/1+2+5:3 F4+Db5+A5/1+2+5:30 E4+C5+G#5/1+2+5:3 F4+Db5+A5/1+2+5:3 Db4+A4+F5/1+2+5:30 C4+G#4+E5/1+2+5:3 Db4+A4+F5/1+2+5:3",
    "F1+F2/5+1:84 r:24",
  ),
  lent("F#4+Bb4+D5/1+2+4:24 A4/2:9 Bb4/3:3 Eb4+A4+C5/1+3+5:12 F#4/2:12 G4/3:12 E4+A4+Bb4/1+3+4:24 G4/2:12", "C3/5:36 C4/1:36 C3/5:12 D3/4:12 E3/3:12"),
  lent("F4+Ab4+Db5/1+2+4:24 Cb5/4:12 Ab4/2:24 Cb5/4:12 Bb4/3:12 Ab4/2:12 G4/1:12", "F3+Cb4/5+2:108"),
  lent("F4+Ab4+D5/1+2+4:24 Cb5/4:12 Ab4/2:24 Cb5/4:12 Bb4/3:12 Ab4/2:12 G4/1:12", "C4/1:108~"),
  // Bars 573 to 592: the left hand leaves its C for the high third line's notes. Bar 583's high G falls
  // with both hands' notes, and is left out.
  lent("Ab4+C5+Eb5/1+2+4:72 G4+Bb4+E5/1+2+4:36", "C4:36 Gb6/2:12 r:24 Db7/1:12 r:24"),
  lent("F4+Bb4/1+4:36 E4/1:72", "C4/1:72 C7/1:12 r:24"),
  vif("C5+G5+Bb5+C6/1+2+3+5:12 D5+G5+Bb5+D6/1+2+3+5:12 E5+G5+Bb5+E6/1+2+3+5:12", times("C2+C3/5+1:12", 3)),
  vif("F5+Ab5+C6+F6/1+2+3+5:12 r:24", "F1+F2/5+1:12 r:24"),
];

/** The Original's print bars in order: printed pages 1 to 5 and two bars of page 6, then pages 24 and 25. */
const PRINT_BARS: PrintBar[] = [...INTRODUCTION, ...FIRST_CALLS, ...BROOM, ...SLIDES, ...TUTTI, ...SERRANT, ...ENDING];

/** One line of the Original: `part` of each print bar in order, with wide chords rolled, in bars of the grid. */
function printLine(part: 0 | 1 | 2): string {
  const line = PRINT_BARS.map((bar) => (part === 2 ? bar[part] : rolledWide(bar[part]))).join(" ");
  return barred(line, GRID_BAR).join(" | ");
}

export const theSorcerersApprentice: OurSong = {
  slug: "the-sorcerers-apprentice",
  title: "The Sorcerer's Apprentice",
  aka: ["L'Apprenti sorcier", "Der Zauberlehrling", "Sorcerer's Apprentice"],
  source: {
    composer: "Paul Dukas",
    died: 1935,
    published: 1897,
    edition:
      "The Sorcerer's Apprentice, the bassoon's broom theme in bars 1 to 10, as an engraving of the theme on Wikimedia Commons prints it, with Wikipedia's score of the opening confirming its first notes",
  },
  about:
    "Paul Dukas completed this symphonic poem in 1897, and it was published the same year. " +
    "It follows Goethe's 1797 poem Der Zauberlehrling. " +
    "In Walt Disney's film Fantasia (1940), Mickey Mouse plays the apprentice.",
  funFact: "Dukas subtitled it a scherzo after a ballad by Goethe. It is by far the most performed and recorded of his works.",
  mythic: {
    key: F_MINOR,
    bpm: 168,
    numerator: 3,
    denominator: 8,
    steps: 12,
    right: printLine(0),
    left: printLine(1),
    pedal: printLine(2),
    source: {
      edition:
        "L'Apprenti sorcier, scherzo after a ballad by Goethe, transcribed for piano two hands by Victor Staub, A. Durand & Fils, Paris, plate D. & F. 7134, scanned as Internet Archive item afm6655.0001.001.umich.edu; printed pages 1 to 5 and the first two bars of page 6, then pages 24 and 25 to the end, joined with no bar of ours",
      printed: 1908,
    },
    skills: ["left-hand-melody", "melody-in-chords", "sixteenth-notes"],
    practice: [
      { text: "Play bars 257 to 274 with the left hand alone. It carries the broom's tune, which starts on F and leaps up to C.", hands: "left", speed: 0.6, loop: [257, 274], wait: true },
      { text: "Play bars 339 to 352 with the right hand alone. The tune runs high in sixths, loud and short.", hands: "right", speed: 0.6, loop: [339, 352], wait: true },
      { text: "Play bars 1 to 130 slowly with both hands, and let the song wait. Each slow bar of the print spans ten bars here.", hands: "both", speed: 0.7, loop: [1, 130], wait: true },
      { text: "Play bars 386 to 424 with both hands at half speed. Both hands fall and climb in sixteenths.", hands: "both", speed: 0.5, loop: [386, 424], wait: false },
      { text: "Play the whole piece with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 130, kind: "rhythm", text: "The piece opens slowly. Each slow bar of the print lasts ten bars here, so count the long notes out in full." },
      { fromBar: 131, toBar: 226, kind: "rhythm", text: "Quick bursts break into the slow music. Bars 131 to 138 and 189 to 226 rush, and bars 139 to 188 are slow again." },
      { fromBar: 227, toBar: 274, kind: "sound", text: "The low F chord counts the broom in. Keep it soft and short, and let the left hand's tune enter a little louder at bar 257." },
      { fromBar: 302, toBar: 338, kind: "fingering", text: "The right hand rolls its widest chords from the bottom note up. Keep each roll quick, so it lands almost together." },
      { fromBar: 443, toBar: 472, kind: "fingering", text: "The trill on F sharp lasts three slow bars. Use fingers 3 and 4, and keep them light." },
    ],
    tricky: {
      326: "Roll the first chord quickly from D flat up to F. Then the thumb takes G sharp, and finger 2 takes A.",
      332: "The hand opens on B, E and G, then rocks between F sharp and G. Finger 5 reaches up to A at the end.",
      338: "The left hand slips up from two low C's to its high chords. The hands take turns: right, left, right.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 4, key: F_MINOR, hookBars: [1, 6] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 112,
      numerator: 3,
      denominator: 4,
      right: `${TUNE_A_MINOR} | ${NEXT_A_MINOR} | A4/1:3`,
      left: bars(HELD, "aeeaaeaaeaaadbxdbxbeeaa"),
      skills: ["held-bass", "position-change"],
      practice: [
        { text: "Play the first three bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 4 to 10 with the right hand alone. The hand stays in one place.", hands: "right", speed: 0.6, loop: [4, 10], wait: true },
        { text: "Now the left hand alone. It holds one low note or two in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first ten bars.", hands: "both", speed: 0.7, loop: [1, 10], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Play every note short and light, like a broom hopping along. The rests are part of the tune." },
        { fromBar: 4, toBar: 5, kind: "rhythm", text: "Count one, two, three. The rest falls on two, and the high note on three." },
        { fromBar: 11, toBar: 22, kind: "fingering", text: "From bar 11 the thumb sits on A, and each finger keeps its own key up to E. Play D sharp and C sharp with the fingers of D and C." },
      ],
      tricky: {
        7: "After G sharp on finger 2, finger 4 takes A. The left hand moves from E back to A and E.",
        10: "As in bar 7, finger 4 takes A after G sharp. Then finger 5 reaches up to C.",
        11: "The thumb drops onto A, right after finger 5 played C. Then finger 3 takes C, and finger 2 takes B.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 108,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: `${inUnits(TUNE_A_MINOR, 2)} | ${inUnits(NEXT_A_MINOR, 2)} | ${DOWN_A_MINOR} | E4+A4/1+4:6`,
      left: `${bars(WALTZ, "aeeaaeaaeannDboDbogsuawGe")} | A2+C3+E3/5+2+1:6`,
      skills: ["waltz-bass", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone. A low note comes first, and a two-note chord answers it twice.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first ten bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 10], wait: true },
        { text: "Join the hands on the first six bars, slowly.", hands: "both", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Play bars 11 to 26 with both hands, slowly. The tune climbs to a high E, then steps down to the low E.", hands: "both", speed: 0.7, loop: [11, 26], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Keep the tune short and bouncy. Let go of each note before the next one." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the low note a little louder than the chords after it. It keeps the beat." },
        { fromBar: 23, toBar: 25, kind: "fingering", text: "The tune steps down to the low E. Finger 3 takes the G again in bar 25, so the thumb reaches E." },
      ],
      tricky: {
        7: "Finger 4 takes A after G sharp. The left hand drops from its E chord back to A.",
        10: "The tune ends here. Finger 4 takes A, and the left hand moves back to A.",
        11: "The thumb drops onto A, right after finger 5 played C. The left hand plays A, then E twice.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 120,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right: [
        inUnits(
          [
            "D5/1:2 r:1 | A5/5:2 r:1 | A4/1:1 B4/2:1 C#5/3:1 | D5/4:1 r:1 F5/5:1 | D5/4:1 r:1 F5/5:1",
            "E5/4:1 D5/3:1 C#5/2:1 | D5/4:1 r:1 F5/5:1 | D5/4:1 r:1 F5/5:1 | E5/4:1 D5/3:1 C#5/2:1 | D5/4:1 r:1 F5/5:1",
          ].join(" | "),
          4,
        ),
        NEXT_D_MINOR,
        "D4+F4+A4/1+2+4:12",
      ].join(" | "),
      left: `${inUnits(bars(BROKEN, "daaddaddadddgsogsohBcdEC"), 2)} | ${DOWN_D_MINOR_LEFT} | D2+A2/5+1:12`,
      markedClashBars: [11, 12, 23],
      skills: ["broken-chords", "finger-over"],
      practice: [
        { text: "Play the left hand's broken chords alone until they roll by themselves.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on the first ten bars. Keep each note short.", hands: "right", speed: 0.6, loop: [1, 10], wait: true },
        { text: "Play bars 24 to 28 with the right hand alone. Finger 3 crosses over the thumb as the tune runs down.", hands: "right", speed: 0.6, loop: [24, 28], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Keep the broken chords soft and even, so the hopping tune stands out above them." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "The thumb lands on the low A after the rest. Then fingers 2 and 3 climb." },
        { fromBar: 25, toBar: 27, kind: "sound", text: "Both hands play the same line two octaves apart. Keep them exactly together." },
      ],
      tricky: {
        25: "Finger 3 crosses over the thumb onto B. The left hand plays the same line two octaves lower.",
        26: "Finger 3 crosses over the thumb again, this time onto F. The left hand steps down with finger 5 each time.",
        27: "Cross finger 3 over the thumb onto C. Then B is long and A is short, and the left hand lands on the low A.",
      },
    },
    legendary: {
      key: F_MINOR,
      bpm: 126,
      numerator: 3,
      denominator: 4,
      steps: 4,
      right: [
        "F4/1:8 r:4 | C5/5:8 r:4 | C4/1:4 D4/2:4 E4/3:4",
        `${PLUCK_FA} | ${PLUCK_FA} | ${PLUCK_TURN} | ${PLUCK_FA} | ${PLUCK_FA} | ${PLUCK_TURN} | ${PLUCK_FA}`,
        NEXT_F_MINOR,
        "F3+Ab3+C4/1+2+4:12",
      ].join(" | "),
      left: `${bars(PLUCKED, "fccff7ff7ffAbgobgohdef")} | ${DOWN_F_MINOR_LEFT} | F1+F2/5+1:12`,
      markedClashBars: [11, 23],
      skills: ["octave-bass", "sixteenth-notes"],
      practice: [
        { text: "Play the left hand alone. A low octave comes first, then two short chords.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand alone on the first ten bars. Let go of each note at once.", hands: "right", speed: 0.6, loop: [1, 10], wait: true },
        { text: "Play bars 23 to 28 with both hands, slowly. From bar 25, both hands run down together, an octave apart.", hands: "both", speed: 0.5, loop: [23, 28], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 10, kind: "sound", text: "Both hands play short and dry. The broom tiptoes before it starts to run." },
        { fromBar: 1, toBar: 10, kind: "trick", text: "Let the left wrist bounce from the low octave up to the chords." },
        { fromBar: 25, toBar: 27, kind: "fingering", text: "The right hand runs down in groups of three. The thumb starts each group, and finger 3 crosses over it." },
      ],
      tricky: {
        6: "The right fingers walk down G, F and E, each one short. The left hand leaps up to its chords.",
        9: "As in bar 6, the right fingers walk down G, F and E. The left hand leaps from the low C up to its chords.",
        12: "The left hand drops to a low A flat octave, then leaps up to C and F. The right hand climbs F, G and A flat.",
      },
    },
  },
  de: {
    about:
      "Paul Dukas vollendete diese sinfonische Dichtung 1897, und sie erschien im selben Jahr im Druck. " +
      "Sie folgt Goethes Gedicht Der Zauberlehrling von 1797. " +
      "In Walt Disneys Film Fantasia (1940) spielt Micky Maus den Zauberlehrling.",
    funFact:
      "Dukas nannte sie im Untertitel ein Scherzo nach einer Ballade von Goethe. Sie ist mit Abstand sein meistgespieltes und meistaufgenommenes Werk.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten drei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 10 nur mit der rechten Hand. Die Hand bleibt an einem Platz.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt einen oder zwei tiefe Töne.",
          "Spiel die ersten zehn Takte mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel jeden Ton kurz und leicht, wie ein hüpfender Besen. Die Pausen gehören zur Melodie.",
          "Zähl eins, zwei, drei. Die Pause fällt auf zwei, und der hohe Ton auf drei.",
          "Ab Takt 11 liegt der Daumen auf dem A, und jeder Finger bleibt auf seiner Taste bis zum E. Dis und Cis spielst du mit den Fingern von D und C.",
        ],
        tricky: {
          7: "Nach dem Gis mit Finger 2 nimmt Finger 4 das A. Die linke Hand geht vom E zurück zu A und E.",
          10: "Wie in Takt 7 nimmt Finger 4 nach dem Gis das A. Dann greift Finger 5 hinauf zum C.",
          11: "Der Daumen fällt auf das A, gleich nachdem Finger 5 das C gespielt hat. Dann nimmt Finger 3 das C und Finger 2 das H.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein tiefer Ton, dann antwortet zweimal ein Zweiklang.",
          "Spiel die ersten zehn Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten sechs Takte langsam mit beiden Händen zusammen.",
          "Spiel die Takte 11 bis 26 langsam mit beiden Händen. Die Melodie steigt bis zu einem hohen E und geht dann stufenweise hinunter zum tiefen E.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt die Melodie kurz und federnd. Lass jeden Ton vor dem nächsten los.",
          "Spiel den tiefen Ton etwas lauter als die Akkorde danach. Er hält den Schlag.",
          "Die Melodie geht stufenweise hinunter zum tiefen E. In Takt 25 nimmt Finger 3 das G noch einmal, damit der Daumen das E erreicht.",
        ],
        tricky: {
          7: "Finger 4 nimmt nach dem Gis das A. Die linke Hand geht von ihrem E-Akkord zurück zum A.",
          10: "Hier endet die Melodie. Finger 4 nimmt das A, und die linke Hand geht zurück zum A.",
          11: "Der Daumen fällt auf das A, gleich nachdem Finger 5 das C gespielt hat. Die linke Hand spielt A und dann zweimal E.",
        },
      },
      epic: {
        practice: [
          "Spiel die gebrochenen Akkorde der linken Hand allein, bis sie von selbst rollen.",
          "Spiel die ersten zehn Takte nur mit der rechten Hand. Halt jeden Ton kurz.",
          "Spiel die Takte 24 bis 28 nur mit der rechten Hand. Finger 3 kreuzt über den Daumen, während die Melodie hinunterläuft.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Halt die gebrochenen Akkorde leise und gleichmäßig, damit die hüpfende Melodie darüber hervortritt.",
          "Nach der Pause landet der Daumen auf dem tiefen A. Dann steigen Finger 2 und 3.",
          "Beide Hände spielen dieselbe Linie im Abstand von zwei Oktaven. Halt sie genau zusammen.",
        ],
        tricky: {
          25: "Finger 3 kreuzt über den Daumen auf das H. Die linke Hand spielt dieselbe Linie zwei Oktaven tiefer.",
          26: "Finger 3 kreuzt noch einmal über den Daumen, diesmal auf das F. Die linke Hand geht jedes Mal mit Finger 5 eine Taste tiefer.",
          27: "Kreuz Finger 3 über den Daumen auf das C. Dann ist das H lang und das A kurz, und die linke Hand landet auf dem tiefen A.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt eine tiefe Oktave, dann zwei kurze Akkorde.",
          "Spiel die ersten zehn Takte nur mit der rechten Hand. Lass jeden Ton sofort wieder los.",
          "Spiel die Takte 23 bis 28 langsam mit beiden Händen. Ab Takt 25 laufen beide Hände zusammen hinunter, eine Oktave auseinander.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Beide Hände spielen kurz und trocken. Der Besen schleicht auf Zehenspitzen, bevor er losläuft.",
          "Lass das linke Handgelenk von der tiefen Oktave hinauf zu den Akkorden federn.",
          "Die rechte Hand läuft in Dreiergruppen hinunter. Der Daumen beginnt jede Gruppe, und Finger 3 kreuzt darüber.",
        ],
        tricky: {
          6: "Die rechten Finger laufen kurz über G, F und E hinunter. Die linke Hand springt hinauf zu ihren Akkorden.",
          9: "Wie in Takt 6 laufen die rechten Finger über G, F und E hinunter. Die linke Hand springt vom tiefen C hinauf zu ihren Akkorden.",
          12: "Die linke Hand fällt zu einer tiefen As-Oktave und springt dann hinauf zu C und F. Die rechte Hand steigt über F, G und As.",
        },
      },
    },
    original: {
      practice: [
        "Spiel die Takte 257 bis 274 nur mit der linken Hand. Sie trägt die Melodie des Besens, die auf F beginnt und zum C hinaufspringt.",
        "Spiel die Takte 339 bis 352 nur mit der rechten Hand. Die Melodie läuft hoch in Sexten, laut und kurz.",
        "Spiel die Takte 1 bis 130 langsam mit beiden Händen, und lass das Stück warten. Jeder langsame Takt des Drucks umfasst hier zehn Takte.",
        "Spiel die Takte 386 bis 424 mit beiden Händen im halben Tempo. Beide Hände fallen und steigen in Sechzehnteln.",
        "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
      ],
      tips: [
        "Das Stück beginnt langsam. Jeder langsame Takt des Drucks dauert hier zehn Takte, also zähl die langen Töne ganz aus.",
        "Schnelle Ausbrüche unterbrechen die langsame Musik. Die Takte 131 bis 138 und 189 bis 226 stürmen, die Takte 139 bis 188 sind wieder langsam.",
        "Der tiefe F-Akkord zählt den Besen ein. Spiel ihn leise und kurz, und lass die Melodie der linken Hand ab Takt 257 etwas lauter einsetzen.",
        "Die rechte Hand bricht ihre weitesten Akkorde vom tiefsten Ton aus. Brich sie schnell, damit sie fast zusammen klingen.",
        "Der Triller auf Fis dauert drei langsame Takte. Nimm die Finger 3 und 4, und halt sie leicht.",
      ],
      tricky: {
        326: "Brich den ersten Akkord schnell vom Des hinauf zum F. Dann nimmt der Daumen das Gis, und Finger 2 das A.",
        332: "Die Hand öffnet sich auf H, E und G und wiegt dann zwischen Fis und G. Am Ende greift Finger 5 hinauf zum A.",
        338: "Die linke Hand gleitet von zwei tiefen C hinauf zu ihren hohen Akkorden. Die Hände wechseln sich ab: rechts, links, rechts.",
      },
    },
  },
};

/**
 * *Vltava*: the river's theme from Smetana's symphonic poem, in four versions of ours.
 *
 * The source is a scanned book of orchestral themes on Wikimedia Commons, `File:Orchesterwerke Romantik
 * Themen.pdf`, which prints *Die Moldau* on its page 829. The print is in 6/8, Allegro comodo, non
 * agitato, in E minor. After two bars of flute sixteenths, the theme enters with an eighth upbeat B,
 * marked p dolce. The tune is that upbeat and the eight bars that follow, to the E of the ninth.
 *
 * The tune writes every eighth as a quarter, so each print bar is a bar of 6/4. Bar 1 holds the upbeat
 * after a rest. Its range is B4 to C6, every note lies in E minor, and the hook is all nine bars.
 *
 * Every version writes the tune in 6/4 eighths, one bar per print bar, and then plays 8 bars of our own.
 * Epic and Legendary then play the tune again in another setting. Our chords are E minor, with A minor
 * under the high C and the long A, and B major under the F sharps before the close. Our own bars use the
 * same three chords. Every version keeps E minor and closes on it.
 *
 * Common plays the tune over an open fifth and two other held shapes, with one change of hand position.
 * Rare plays a long bass note and a short note or two-note chord in each half bar, the lilt of the tune.
 * Epic rolls a broken chord under the tune with the pedal, then plays it again in thirds and sixths.
 * Legendary plays an octave bass and a chord on each beat, and arpeggios over two octaves under our own
 * bars. It then plays the tune again in chords of three and four notes.
 *
 * Our Original reduces Eulenburg's full score for two hands, with a cut from bar 79 to bar 333. Its
 * `mythic` field says what the cut leaves out.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const E_MINOR: Key = { tonic: 4, mode: "minor" };

/** The tune in 6/4, in quarters, which are the print's eighths: one bar per print bar, after the upbeat. */
const tune = "r:5 B4:1 | E5:2 F#5:1 G5:2 A5:1 | B5:2 B5:1 B5:3 | C6:3 C6:3 | B5:3 B5:2 B5:1 | A5:3 A5:2 A5:1 | G5:2 A5:1 G5:2 G5:1 | F#5:3 F#5:2 F#5:1 | E5:2 r:4";

/**
 * The tune in 6/4 eighths with the hand still, for Common and Rare. The A of bar 2 is cut short, so the
 * hand moves up a key in the rest. Finger 2 takes over the last F sharp, so the thumb lands on E.
 */
const TUNE_STILL = [
  "r:10 B4/1:2 | E5/2:4 F#5/3:2 G5/4:4 A5/5:1 r:1 | B5/4:4 B5/4:2 B5/4:6 | C6/5:6 C6/5:6",
  "B5/4:6 B5/4:4 B5/4:2 | A5/3:6 A5/3:4 A5/3:2 | G5/2:4 A5/3:2 G5/2:4 G5/2:2 | F#5/1:6 F#5/1:4 F#5/2:2",
].join(" | ");

/** The tune in 6/4 eighths with the thumb passing under to G, for Epic and Legendary, ending before the last E. */
const TUNE_UNDER = [
  "r:10 B4/1:2 | E5/2:4 F#5/3:2 G5/1:4 A5/2:2 | B5/3:4 B5/3:2 B5/3:6 | C6/4:6 C6/4:6",
  "B5/3:6 B5/3:4 B5/3:2 | A5/2:6 A5/2:4 A5/2:2 | G5/1:4 A5/2:2 G5/1:4 G5/2:2 | F#5/1:6 F#5/1:4 F#5/2:2",
].join(" | ");

/** Our bars 9 to 16 in quarters, in one hand position from E to B, for Common. Bar 9 holds the tune's last E. */
const OWN_COMMON = [
  "E5/1:12 | G5/3:4 F#5/2:2 E5/1:4 F#5/2:2 | A5/4:4 G5/3:2 E5/1:6 | G5/3:4 A5/4:2 B5/5:6",
  "A5/4:4 F#5/2:2 B5/5:6 | B5/5:4 A5/4:2 G5/3:4 F#5/2:2 | E5/1:4 G5/3:2 A5/4:6 | B5/5:4 A5/4:2 F#5/2:6",
].join(" | ");

/** Our bars 9 to 16 for Rare, in the same hand position, with a few eighths. */
const OWN_RARE = [
  "E5/1:12 | G5/3:4 F#5/2:1 G5/3:1 E5/1:4 F#5/2:2 | A5/4:4 G5/3:2 E5/1:6 | G5/3:2 A5/4:2 B5/5:2 A5/4:1 G5/3:1 B5/5:4",
  "A5/4:4 F#5/2:2 B5/5:6 | B5/5:4 A5/4:1 G5/3:1 F#5/2:2 G5/3:1 A5/4:1 G5/3:2 | E5/1:4 F#5/2:1 G5/3:1 A5/4:6 | B5/5:4 A5/4:2 F#5/2:6",
].join(" | ");

/** Our bars 9 to 17 in eighths for Epic and Legendary, with the thumb passing under. Bar 17 ends on the upbeat B. */
const OWN_EIGHTHS = [
  "E5/1:12",
  "G5/3:2 F#5/2:1 E5/1:1 F#5/2:1 G5/3:1 B5/5:4 A5/4:2 | C6/5:2 B5/4:1 A5/3:1 G5/2:1 A5/3:1 E5/1:6",
  "E5/1:1 F#5/2:1 G5/3:1 A5/1:1 B5/2:1 C6/3:1 B5/2:4 G5/1:2 | F#5/2:2 A5/4:1 B5/5:1 A5/4:1 F#5/2:1 D#5/1:4 F#5/2:2",
  "B5/5:2 A5/4:1 G5/3:1 F#5/2:1 E5/1:1 G5/3:4 B5/5:2 | C6/5:2 B5/4:1 A5/3:1 E5/1:2 A5/4:4 C6/5:2",
  "B5/5:2 A5/4:1 F#5/2:1 D#5/1:2 F#5/2:4 A5/4:2 | G5/3:4 F#5/2:2 E5/1:4 B4/1:2",
].join(" | ");

/** Epic's tune again in eighths, with a third, a fourth or a sixth under each note. */
const EPIC_TUNE_AGAIN = [
  "B4+E5/1+3:4 D5+F#5/1+3:2 E5+G5/2+4:4 F#5+A5/3+5:2 | G5+B5/3+5:4 G5+B5/3+5:2 G5+B5/3+5:6",
  "A5+C6/3+5:6 E5+C6/1+5:6 | G5+B5/3+5:6 G5+B5/3+5:4 G5+B5/3+5:2",
  "E5+A5/1+4:6 C5+A5/1+5:4 E5+A5/1+4:2 | E5+G5/1+3:4 F#5+A5/2+4:2 E5+G5/1+3:4 B4+G5/1+5:2",
  "D#5+F#5/1+3:6 D#5+F#5/1+3:4 A4+F#5/1+5:2 | G4+B4+E5/1+2+5:12",
].join(" | ");

/** Legendary's tune again in eighths, in chords of three and four notes with the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "G4+B4+E5/1+2+5:4 A4+C5+F#5/1+2+5:2 B4+E5+G5/1+3+5:4 C5+E5+A5/1+3+5:2",
  "E5+G5+B5/1+3+5:4 B5/5:2 B4+E5+G5+B5/1+2+3+5:6",
  "C5+E5+A5+C6/1+2+3+5:6 E5+A5+C6/1+3+5:6",
  "B4+E5+G5+B5/1+2+3+5:6 E5+G5+B5/1+2+4:4 G5+B5/2+5:2",
  "C5+E5+A5/1+2+5:6 C5+E5+A5/1+2+5:4 E5+A5/2+5:2",
  "B4+E5+G5/1+2+5:4 C5+E5+A5/1+2+5:2 B4+E5+G5/1+2+5:4 B4+E5+G5/1+2+5:2",
  "B4+D#5+F#5/1+2+4:6 A4+D#5+F#5/1+2+4:4 B4+F#5/1+4:1 r:1",
  "E4+G4+B4+E5/1+2+3+5:12",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"eeaa"`: one letter per half bar, two per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  const halves = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** The chords under tune bars 2 to 9, two per bar: e, a and b are E minor, A minor and B major. */
const TUNE_CHORDS = "eeeeaaeeaaeebbee";

/** The chords under our bars 10 to 17, two per bar. */
const OWN_CHORDS = "eeaaeebbeeaabbee";

/** Common's held shapes in eighths, a whole bar each, with the hand still: E3 under finger 5, C4 under the thumb. */
const HELD: Record<string, string> = {
  e: "E3+B3/5+2:12",
  a: "E3+A3/5+3:12",
  b: "F#3+B3/4+2:12",
};

/** Rare's half bar in eighths: a long bass note, then a short chord, in the same hand place as Common. */
const LILT: Record<string, string> = {
  e: "E3/5:4 B3/2:2",
  a: "E3/5:4 A3+C4/3+1:2",
  b: "F#3/4:4 A3+B3/2+1:2",
};

/** Epic's half bar in eighths: a broken chord near E3, so a beat never sounds the note that rubs against the tune. */
const BROKEN: Record<string, string> = {
  e: "E3/5:1 G3/3:1 B3/1:1 G3/3:1 B3/1:1 G3/3:1",
  a: "E3/5:1 C4/1:1 A3/2:1 C4/1:1 A3/2:1 C4/1:1",
  b: "D#3/5:1 F#3/3:1 B3/1:1 F#3/3:1 B3/1:1 F#3/3:1",
};

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  e: ["E2+E3/5+1", "B2+E3+G3/5+2+1"],
  a: ["A1+A2/5+1", "A2+C3+E3/5+3+1"],
  b: ["B1+B2/5+1", "B2+D#3+F#3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:1 r:1 ${triad}:1 r:1 ${triad}:1 r:1`;
}

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  e: "E2 B2 E3 G3 B3 E4",
  a: "A1 E2 A2 C3 E3 A3",
  b: "B1 F#2 B2 D#3 F#3 B3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves, back down to the fifth, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const steps: [number, number][] = [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1], [4, 2], [3, 3], [2, 1], [1, 2]];
  WIDE[chord] = `${steps.map(([at, finger]) => `${pitches[at]}/${finger}:1`).join(" ")} r:2`;
}

/** The pedal of Epic and Legendary in eighths: up in bar 1, changed at each half bar, held through the last bar. */
const PEDAL = `r:12 | ${Array<string>(23).fill("P:6 P:6").join(" | ")} | P:12`;

/** The left hand of Common: rest in bar 1, then one held shape per bar. */
const COMMON_LEFT = ["r:12", ...[..."eeaeaebeeaebeabe"].map((chord) => HELD[chord])].join(" | ");

/** One bar of the Original in 32nds, 24 to the bar: the right hand and the left hand. */
type PrintBar = readonly [right: string, left: string];

/**
 * Bars 1 to 39: the two flutes' source, then the strings' river figure under a held horn. The right hand
 * plays the flutes, and the clarinets from bar 16. The left hand takes the harp's E an octave lower and the
 * violins' pizzicato chords in the octave from E3, under the flutes. Bars 18, 19, 22 and 23 drop the
 * flute's or clarinet's low note under a high eighth, which no hand holds with it. Bars 24 to 27 hold the
 * viola's B and leave out the pizzicato, which doubles the flutes. Bar 33 leaves out the flute's C4,
 * which the viola plays. Bars 36 to 39 leave out the horns' E, which sounds as E3 in the cellos' range.
 */
const SOURCE: Record<number, PrintBar> = {
  1: ["E4/1:2 F#4/2:2 G4/3:2 F#4/2:2 G4/3:2 A4/4:2 B4/5:4 r:8", "E3/5:4 r:16 E3+G3+B3/5+3+1:4"],
  2: ["E4/1:2 F#4/2:2 G4/3:2 F#4/2:2 G4/3:2 A4/4:2 B4/5:4 r:8", "E3/5:4 r:16 E3+G3+B3/5+3+1:4"],
  3: ["E4/1:2 F#4/2:2 G4/3:2 F#4/2:2 G4/3:2 A4/4:2 G4/1:2 A4/2:2 B4/3:2 A4/2:2 B4/3:2 C5/4:2", "E3/5:4 r:20"],
  4: ["B4/2:2 C5/3:2 D5/4:2 C5/3:2 B4/2:2 A4/1:2 B4/4:2 A4/3:2 G4/2:2 A4/3:2 G4/2:2 F#4/1:2", "E3/5:4 r:16 E3+B3/5+1:4"],
  5: ["E4/1:2 F#4/2:2 G4/3:2 F#4/2:2 G4/3:2 A4/4:2 G4/1:2 A4/2:2 B4/3:2 A4/2:2 B4/3:2 C5/4:2", "E3+G3/5+3:4 r:20"],
  6: ["B4/2:2 C5/3:2 D5/4:2 C5/3:2 B4/2:2 A4/1:2 B4/4:2 A4/3:2 G4/2:2 A4/3:2 G4/2:2 F#4/1:2", "E3/5:4 r:16 E3+B3/5+1:4"],
  7: ["E4/1:2 F#4/2:2 G4/3:2 F#4/2:2 G4/3:2 A4/4:2 G4/1:2 A4/2:2 B4/3:2 A4/2:2 B4/3:2 C5/4:2", "E3+G3/5+3:4 r:20"],
  8: ["D5/1:2 E5/2:2 F#5/3:2 E5/2:2 F#5/3:2 G5/4:2 A5/1:2 B5/2:2 C6/3:2 B5/2:2 C6/3:2 D6/4:2", "G3+G4/5+1:4 r:20"],
  9: ["C4/1:2 D4/2:2 E4/3:2 D4/2:2 E4/3:2 F#4/4:2 E4/1:2 F#4/2:2 G4/3:2 F#4/2:2 G4/3:2 A4/4:2", "C3/5:4 r:20"],
  10: ["B4/1:2 C5/2:2 D5/3:2 C5/2:2 D5/3:2 E5/4:2 F#5/1:2 G5/2:2 A5/3:2 G5/2:2 A5/3:2 B5/4:2", "r:12 G3+B3+D4/5+3+1:4 r:8"],
  11: ["A4+C6/1+5:2 B4/1:2 C5/2:2 B4/1:2 C5/2:2 D5/3:2 E5/1:2 F#5/2:2 G5/3:2 F#5/2:2 G5/3:2 A5/4:2", "A3/5:4 r:20"],
  12: ["G4+B5/1+5:2 A4/2:2 B4/3:2 A4/2:2 B4/3:2 C5/4:2 B4/1:2 E5/2:2 F#5/3:2 E5/2:2 F#5/3:2 G5/4:2", "r:12 G3+B3+E4/5+3+1:4 r:8"],
  13: [
    "F#4+A5/1+5:2 G4/1:2 A4/2:2 G4/1:2 A4/2:2 B4/3:2 C#5/1:2 D#5/2:2 E5/3:2 F#5/4:2 G5/5:2 E5/3:2",
    "F#3+A3+C4/5+3+1:4 r:8 E3+G3+A#3+C#4/5+4+2+1:4 r:8",
  ],
  14: ["D#5/2:2 E5/3:2 F#5/4:2 E5/3:2 D#5/2:2 C#5/1:2 B4/1:2 C#5/2:2 D#5/3:2 C#5/2:2 B4/1:2 A#4/1:2", "D#3+F#3+B3/5+3+1:4 r:20"],
  15: ["B4/1:2 C5/2:2 D5/3:2 C5/2:2 B4/1:2 A4/1:2 B4/4:2 A4/3:2 G4/2:2 A4/3:2 G4/2:2 F#4/1:2", "r:12 B2+A3/5+1:4 r:8"],
  16: [
    "E4+E5/1+5:2 F#4+D5/2+5:2 E4+C5/1+4:2 F#4+D5/2+5:2 E4+C5/1+4:2 G4+B4/2+4:2 C5+E5/1+3:2 B4+D#5/1+3:2 A4+E5/1+4:2 B4+D#5/1+3:2 A4+E5/1+4:2 G4+G5/1+5:2",
    "C3+E3+G3/5+3+1:4 r:20",
  ],
  17: [
    "E5+C6/1+5:2 F#4+D5/1+4:2 E4+C5/1+4:2 F#4+D5/1+4:2 E4+C5/1+4:2 G4+B4/1+3:2 C5+E5/1+3:2 B4+D#5/1+3:2 A4+E5/1+4:2 B4+D#5/1+3:2 A4+E5/1+4:2 G4+G5/1+5:2",
    "r:24",
  ],
  18: [
    "D5+B5/1+5:2 A4+C5/1+2:2 G4+B4/1+3:2 F#4+A4/1+2:2 G4/1:2 D4+B4/1+4:2 D5+G5/1+4:2 C5+A5/1+5:2 B4+G5/1+4:2 A4+F#5/1+4:2 G4+G5/1+5:2 B5/5:2",
    "r:8 G3+B3/4+2:4 D3+G3+B3/5+3+1:4 r:6 D4/1:2",
  ],
  19: [
    "D5+D6/1+5:2 A4+C5/1+2:2 G4+B4/1+3:2 F#4+A4/1+2:2 G4/1:2 D4+B4/1+4:2 D5+G5/1+4:2 C5+A5/1+5:2 B4+G5/1+4:2 A4+F#5/1+4:2 G4+G5/1+5:2 B5/5:2",
    "B3/1:4 r:4 G3+B3/4+2:4 D3+G3+B3/5+3+1:4 r:6 D4/1:2",
  ],
  20: [
    "C5+A5/1+5:2 B4+D5/1+3:2 A4+C5/1+2:2 E4+B4/1+5:2 A4+C5/1+2:2 B4+D5/1+3:2 C5+E5+A5/1+2+5:2 D5+B5/1+5:2 C5+A5/1+5:2 B4+G#5/1+5:2 A4+A5/1+5:2 B5/5:2",
    "E4/1:4 r:8 A3+C4+E4/5+3+1:4 r:6 E4/1:2",
  ],
  21: [
    "A4+C6/1+5:2 B4+D5/1+3:2 A4+C5/1+2:2 E4+B4/1+5:2 A4+C5/1+2:2 B4+D5/1+3:2 C5+E5+A5/1+2+5:2 D5+B5/1+5:2 C5+A5/1+5:2 B4+G#5/1+5:2 A4+A5/1+5:2 C6/5:2",
    "r:22 E4/1:2",
  ],
  22: [
    "E5+B5/1+5:2 A4+C5/1+2:2 G4+B4/1+3:2 F#4+A4/1+2:2 G4/1:2 F#4+B4/1+4:2 E5+G5/1+3:2 C5+A5/1+5:2 B4+G5/1+5:2 A4+F#5/1+5:2 G4+G5/1+5:2 B5/5:2",
    "E4/1:2 r:6 E3+B3/5+1:4 E4/1:4 r:6 F#4/1:2",
  ],
  23: [
    "E5+E6/1+5:2 A4+C5/1+2:2 G4+B4/1+3:2 F#4+A4/1+2:2 G4/1:2 F#4+B4/1+4:2 E5+G5/1+3:2 C5+A5/1+5:2 B4+G5/1+5:2 A4+F#5/1+5:2 G4+E5/1+4:2 G5/5:2",
    "E4/1:4 r:4 E3+B3/5+1:4 E4/1:4 r:6 E4/1:2",
  ],
  24: [
    "D#5+B5/1+5:2 G4+E5/1+4:2 F#4+D#5/1+4:2 E4+C#5/1+4:2 F#4+D#5/1+4:2 A4+F#5/1+5:2 C5+A5/1+5:2 B4+G5/1+5:2 A4+F#5/1+5:2 G4+E5/1+4:2 A4+F#5/1+5:2 C5+A5/1+5:2",
    "B3/5:24~",
  ],
  25: [
    "G4+B4+G5/1+2+5:2 A4/1:2 G4+B4/1+3:2 F#4+A4/1+2:2 E4+G4/1+2:2 G4+B4/1+3:2 B4+E5+G5/1+3+5:2 A4+F#5/1+5:2 G4+E5/1+4:2 F#4+D#5/1+4:2 G4+E5/1+4:2 E4+G5/1+5:2",
    "B3/5:24~",
  ],
  26: ["A4+F#5/1+5:2 B4/2:2 A4/1:2 G4/3:2 F#4/2:2 A4/4:2 C5+F#5/1+5:2 E5/4:2 D#5/3:2 C#5/2:2 D#5/3:2 F#5/5:2", "B3/5:24~"],
  27: ["G4+E5/1+5:2 A4/2:2 G4/1:2 F#4/3:2 E4/2:2 G4/4:2 A#4+E5/1+5:2 D#5/4:2 C#5/3:2 B#4/2:2 C#5/3:2 E5/5:2", "B3/5:24"],
  28: [
    "F#4+D#5/1+4:2 G4+E5/2+5:2 A4+F#5/1+4:2 B4+G5/2+5:2 C5+A5/1+4:2 B4+G5/1+3:2 C5+A5/1+4:2 D5+B5/2+5:2 E5+C6/1+5:2 D5+B5/2+5:2 C5+A5/1+3:2 D5+B5/2+5:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2",
  ],
  29: [
    "C5+A5/1+5:2 B4+G5/1+4:2 A4+F#5/1+4:2 B4+G5/2+5:2 A4+F#5/1+4:2 G4+E5/1+4:2 F#4+D#5/1+4:2 G4+E5/1+4:2 A4+F#5/2+5:2 G4+E5/1+4:2 F#4+D5/1+4:2 E4+C5/1+4:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2",
  ],
  30: [
    "D#4+B4/1+4:2 E4+C#5/1+4:2 F#4+D#5/1+4:2 G4+E5/1+4:2 A4+F#5/2+5:2 B4+G5/1+4:2 C5+A5/1+4:2 D5+B5/2+5:2 E5+C6/2+5:2 D5+B5/1+4:2 C5+A5/1+3:2 D5+B5/2+5:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2",
  ],
  31: [
    "C5+A5/1+5:2 B4+G5/1+4:2 A4+F#5/1+4:2 B4+G5/2+5:2 A4+F#5/1+4:2 G4+E5/1+4:2 F#4+D#5/1+4:2 G4+E5/1+4:2 A4+F#5/2+5:2 G4+E5/1+4:2 F#4+D5/1+4:2 E4+C5/1+4:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2",
  ],
  32: [
    "D#4+B4/1+5:2 E4+C5/1+5:2 F#4+D5/2+5:2 E4+C5/1+4:2 D#4+B4/1+3:2 E4+C5/1+4:2 F#4+D5/2+5:2 E4+C5/1+4:2 D#4+B4/1+3:2 E4+C5/1+4:2 F#4+D5/2+5:2 E4+C5/1+4:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2",
  ],
  33: [
    "D#4+B4/1+5:2 E4+C5/1+5:2 D4+B4/1+5:2 E4+A4/2+4:2 D4+G4/1+3:2 F#4/2:2 C#4+F#4/1+4:2 D#4/2:2 E4/1:2 F#4/2:2 E4+G4/1+3:2 F#4+A4/2+4:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2",
  ],
  34: [
    "D#4+B4/1+5:2 E4+C5/1+5:2 F#4+D5/2+5:2 E4+C5/1+4:2 D#4+B4/1+3:2 E4+C5/1+4:2 F#4+D5/2+5:2 E4+C5/1+4:2 D#4+B4/1+3:2 E4+C5/1+4:2 F#4+D5/2+5:2 E4+C5/1+4:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2",
  ],
  35: [
    "D#4+B4/1+5:2 E4+C5/1+5:2 F#4+D5/2+5:2 E4+C5/1+4:2 D#4+B4/1+3:2 F#4+A4/2+3:2 G4+B4/2+4:2 F#4+A4/1+3:2 E4+G4/2+4:2 D#4+F#4/1+3:2 E4/2:2 D#4/1:2",
    "B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 C4/1:2 B3/2:2 A3/3:2 G3/4:2 F#3/5:2",
  ],
  36: ["E4/1:4 r:20", "E2+E3/5+1:2 F#3/3:2 G3/2:2 F#3/3:2 G3/2:2 A3/1:2 G3/4:2 A3/3:2 B3/2:2 A3/3:2 B3/2:2 C4/1:2"],
  37: ["r:24", "B3/3:2 C4/2:2 D4/1:2 C4/2:2 B3/3:2 A3/4:2 B3/2:2 A3/3:2 G3/4:2 A3/3:2 G3/4:2 F#3/5:2"],
  38: ["r:24", "E2+E3/5+1:2 F#3/3:2 G3/2:2 F#3/3:2 G3/2:2 A3/1:2 G3/4:2 A3/3:2 B3/2:2 A3/3:2 B3/2:2 C4/1:2"],
  39: ["r:20 B4/1:4", "B3/3:2 C4/2:2 D4/1:2 C4/2:2 B3/3:2 A3/4:2 B3/2:2 A3/3:2 G3/4:2 A3/3:2 G3/4:2 F#3/5:2"],
};

/**
 * Bars 40 to 79: the river theme over the second violins' running sixteenths, struck with the bass on
 * the bar's first note. Where the figure would meet the tune, it plays an octave lower: bars 50, 59,
 * 60, 62 and 64 to 69. Bars 57, 58, 59 and 61 leave out the oboes' lower octave, which the figure crosses.
 * Bar 42 leaves out the second oboe's F sharp under the held C. Bars 62 to 69 strike only the bass of
 * the first beat, as bars 54 and 58 do. Bars 43 and 51 tie the B of the dotted quarter into the quarter,
 * as the print does. Bars 51 and 56 roll the bass into the figure's first note, which lies past a tenth.
 * Bar 63 plays the figure's first note, the print's G4, as G3, since no hand reaches it from the bass E2.
 */
const THEME: Record<number, PrintBar> = {
  40: ["G4+E5/1+5:8 B4+F#5/1+5:4 E5+G5/2+4:8 F#5+A5/3+5:4", "E2+E3/5+1:2 F#3/3:2 G3/2:2 F#3/3:2 G3/2:2 A3/1:2 B3/2:2 E4/1:2 B3/2:2 A3/3:2 G3/4:2 F#3/5:2"],
  41: ["G5+B5/2+5:8 G5+B5/2+5:4 G5+B5/2+5:12", "E2+E3/5+1:2 F#3/3:2 G3/2:2 F#3/3:2 G3/2:2 A3/1:2 B3/2:2 E4/1:2 B3/2:2 A3/3:2 G3/4:2 F#3/5:2"],
  42: ["E5+C6/1+5:12 E5+C6/1+5:12", "C2+C3/5+1:2 D3/3:2 E3/2:2 D3/3:2 E3/2:2 F#3/1:2 G3/4:2 C4/1:2 G3/4:2 F#3/5:2 E3/4:2 D3/5:2"],
  43: ["G5+B5/2+5:20 G5+B5/2+5:4", "G2+G3/5+1:2 A3/3:2 B3/2:2 A3/3:2 B3/2:2 C4/1:2 D4/1:2 G4/1:2 D4/2:2 C4/3:2 B3/4:2 G3/5:2"],
  44: ["F#5+A5/3+5:12 F#5+A5/3+5:8 F#5+A5/3+5:4", "A2+A3/5+1:2 C4/4:2 F#4/2:2 C4/4:2 F#4/2:2 G4/1:2 A4/1:6 G4/2:2 F#4/3:2 C4/5:2"],
  45: ["E5+G5/2+4:8 E5+G5/2+4:4 E5+G5/2+4:8 E5+G5/2+4:4", "B2+G3/5+1:2 B3/4:2 E4/2:2 B3/4:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  46: ["D#5+F#5/2+4:12 D#5+F#5/2+4:8 D#5+F#5/2+4:4", "B2+A3/5+1:2 B3/4:2 D#4/2:2 B3/4:2 D#4/2:2 E4/1:2 F#4/1:6 E4/2:2 D#4/3:2 A3/5:2"],
  47: ["B4+E5/1+3:16 r:4 B4/1:4", "E2+G3/5+1:2 B3/4:2 E4/2:2 B3/4:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  48: ["G4+E5/1+4:8 B4+F#5/2+5:4 E5+G5/1+3:8 F#5+A5/2+4:4", "E2+G3/5+1:2 B3/4:2 E4/2:2 B3/4:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  49: ["G5+B5/3+5:8 G5+B5/3+5:4 G5+B5/3+5:12", "E2+G3/5+1:2 B3/4:2 E4/2:2 B3/4:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  50: ["E5+C6/1+5:12 E5+C6/1+5:12", "C2+E3/5+1:2 G3/4:2 C4/2:2 G3/4:2 C4/2:2 D4/1:2 E4/1:6 D4/2:2 C4/3:2 G3/5:2"],
  51: ["G5+B5/3+5:20 G5+B5/3+5:4", "G2+B3/5+1:2 D4/4:2 G4/2:2 D4/4:2 G4/2:2 A4/1:2 B4/1:6 A4/2:2 G4/3:2 D4/5:2"],
  52: ["F#5+A5/3+5:12 F#5+A5/3+5:8 F#5+A5/3+5:4", "A2+A3/5+1:2 C4/4:2 F#4/2:2 C4/4:2 F#4/2:2 G4/1:2 A4/1:6 G4/2:2 F#4/3:2 C4/5:2"],
  53: ["E5+G5/2+4:8 F#5+A5/3+5:4 E5+G5/2+4:8 E5+G5/2+4:4", "B2+G3/5+1:2 B3/3:2 E4/2:2 B3/3:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  54: ["D#5+F#5/2+4:12 D#5+F#5/2+4:8 D#5+F#5/2+4:4", "B2+A3/5+1:2 B3/3:2 D#4/2:2 B3/3:2 D#4/2:2 E4/1:2 F#4/1:6 E4/2:2 D#4/3:2 A3/5:2"],
  55: ["B4+E5/1+3:12 r:8 B4/1:4", "E2+G3/5+1:2 B3/3:2 E4/2:2 B3/3:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  56: ["G4+C5/1+2:8 D5/3:4 E5/4:8 F#5/5:4", "C3+E4/5+1:2 G3/3:2 C4/1:2 G3/3:2 C4/2:2 D4/1:2 E4/1:6 D4/2:2 C4/3:2 G3/5:2"],
  57: ["G5/2:8 A5/3:4 B5/4:8 C6/5:4", "B2+B3/5+1:2 D4/3:2 G4/1:2 D4/3:2 G4/2:2 A4/1:2 B4/1:6 A4/2:2 G4/3:2 D4/5:2"],
  58: ["D6/5:12 A5/2:8 C6/4:4", "A2+A3/5+1:2 C4/3:2 F#4/1:2 C4/3:2 F#4/2:2 G4/1:2 A4/1:6 G4/2:2 F#4/3:2 C4/5:2"],
  59: ["B5/4:16 r:4 E4/1:4", "G2+B2/5+4:2 D3/3:2 G3/1:2 D3/3:2 G3/2:2 A3/1:2 B3/1:6 A3/2:2 G3/3:2 D3/5:2"],
  60: ["A4/1:8 B4/2:4 C5/3:8 D5/4:4", "A2+C3/5+4:2 E3/3:2 A3/1:2 E3/3:2 A3/2:2 B3/1:2 C4/1:6 B3/2:2 A3/3:2 E3/5:2"],
  61: ["E5/1:8 F#5/2:4 G5/3:8 A5/4:4", "G2+G3/5+1:2 B3/3:2 E4/1:2 B3/3:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  62: ["B5/5:12 F#5/2:8 A5/4:4", "F#2+D#3/5+1:2 F#3/3:2 B3/1:2 F#3/3:2 B3/2:2 C#4/1:2 D#4/1:6 C4/2:2 B3/3:2 F#3/5:2"],
  63: ["G5/4:20 E5+G5/2+4:4", "E2+G3/5+1:2 B3/3:2 E4/1:2 B3/3:2 E4/2:2 F#4/1:2 G4/1:6 F#4/2:2 E4/3:2 B3/5:2"],
  64: ["E5+G5/2+4:12 C#5+E5/1+3:8 E5+G5/2+4:4", "A#2+C#3/5+4:2 E3/3:2 G3/1:2 E3/3:2 G3/2:2 A#3/1:2 C#4/1:6 B3/2:2 A#3/3:2 E3/5:2"],
  65: ["D#5+B5/1+5:12 F#5/3:8 E5+G5/2+4:4", "B2+D#3/5+4:2 F#3/3:2 B3/1:2 F#3/3:2 B3/2:2 C#4/1:2 D#4/1:6 C#4/2:2 B3/3:2 F#3/5:2"],
  66: ["E5+G5/2+4:12 C#5+E5/1+3:8 E5+G5/2+4:4", "A#2+C#3/5+4:2 E3/3:2 G3/1:2 E3/3:2 G3/2:2 A#3/1:2 C#4/1:6 B3/2:2 A#3/3:2 E3/5:2"],
  67: ["D#5+B5/1+5:12 D#5+F#5/1+3:8 D#5+F#5/1+3:4", "B2+D#3/5+4:2 F#3/3:2 B3/1:2 F#3/3:2 B3/2:2 C#4/1:2 D#4/1:6 C#4/2:2 B3/3:2 F#3/5:2"],
  68: ["D#5+B5/1+5:12 D#5+F#5/1+3:8 D#5+F#5/1+3:4", "B2+D#3/5+4:2 F#3/3:2 B3/1:2 F#3/3:2 B3/2:2 C#4/1:2 D#4/1:6 C#4/2:2 B3/3:2 F#3/5:2"],
  69: ["D#5+B5/1+5:20 r:4", "B2+D#3/5+4:2 F#3/3:2 B3/1:2 F#3/3:2 B3/2:2 C#4/1:2 D#4/2:2 F#4/1:2 D#4/2:2 C#4/3:2 B3/4:2 C#4/3:2"],
  70: [
    "D#5/2:2 F#5/4:2 D#5/2:2 C#5/1:2 B4/1:2 D#5/2:2 F#5/2:2 G5/3:2 A5/4:2 G5/3:2 F#5/2:2 G5/3:2",
    "B1+B2/5+1:4 r:8 C4/1:2 B3/2:2 A3/3:2 B3/2:2 C4/1:2 B3/2:2",
  ],
  71: [
    "C5+A5/1+5:2 B4+G5/1+4:2 A4+F#5/1+3:2 B4+G5/1+4:2 C5+A5/1+5:2 B4+G5/1+4:2 A4+F#5/1+5:2 G4+E5/1+4:2 F#4+D#5/1+3:2 G4+E5/1+4:2 F#4+D#5/1+3:2 E4+C#5/1+2:2",
    "B2+A3/5+1:2 B3/1:2 C4/1:2 B3/2:2 A3/3:2 B3/2:2 B2+C4/5+1:4 r:8",
  ],
  72: [
    "F#4+D#5/1+5:2 G4+E5/1+5:2 A4+F#5/1+5:2 G4+E5/1+4:2 F#4+D5/1+3:2 E4+C5/1+2:2 D4+B4/1+5:2 C4+A4/1+4:2 B3+G4/1+3:2 A3+F#4/1+2:2 B4/5:4",
    "B2+D#3/5+3:2 C3+E3/4+2:2 B2+D#3/5+3:2 C3+E3/4+2:2 B2+D#3/5+3:2 C3+E3/4+2:2 B2+D#3/5+3:2 C3+E3/4+2:2 B2+D#3/5+3:2 C3+E3/4+2:2 B2+D#3/5+3:2 C3+E3/4+2:2",
  ],
  73: ["E5/1:8 F#5/2:4 G#5/3:8 A5/4:4", "E2+E3/5+1:2 F#3/3:2 G#3/2:2 F#3/3:2 G#3/2:2 A3/1:2 B3/3:2 E4/1:2 B3/2:2 A3/3:2 G#3/4:2 F#3/5:2"],
  74: ["B5/5:8 B5/5:4 B5/5:12", "E2+E3/5+1:2 F#3/3:2 G#3/2:2 F#3/3:2 G#3/2:2 A3/1:2 B3/3:2 E4/1:2 B3/2:2 A3/3:2 G#3/4:2 F#3/5:2"],
  75: ["C6/5:12 C6/5:12", "A2/5:2 B2/4:2 C3/3:2 B2/4:2 C3/3:2 E3/1:2 D3+A3/5+2:2 C4/1:2 A3/2:2 F3/3:2 D3/4:2 A2/5:2"],
  76: ["B5/5:20 B5/5:4", "G2/5:2 A2/4:2 B2/3:2 A2/4:2 B2/3:2 C3/2:2 D3/2:2 G3/1:2 D3/2:2 C3/3:2 B2/4:2 A2/5:2"],
  77: ["A5/5:12 A5/5:8 A5/5:4", "A2+F3/5+1:2 G3/3:2 A3/2:2 G3/3:2 A3/2:2 C4/1:2 B2+F3/5+2:2 A3/1:2 F3/2:2 E3/3:2 D3/4:2 B2/5:2"],
  78: ["G5/4:8 A5/5:4 G5/4:12", "C3/5:2 D3/4:2 E3/3:2 D3/4:2 E3/3:2 F3/2:2 G3/2:2 C4/1:2 G3/2:2 F3/3:2 E3/4:2 C3/5:2"],
  79: ["F#5/4:12 F#5/4:8 F#5/4:4", "A2/5:2 B2/4:2 C3/3:2 B2/4:2 C3/3:2 E3/1:2 B2+D#3/5+2:2 F#3/1:2 D#3/2:2 B2/3:2 A2/4:2 F#2/5:2"],
};

/**
 * Bars 333 to 358: the river theme in E major, Più moto, over the first cellos' broken chords. Bar 353
 * onward plays the violins' tune alone, as the print's flutes there were not read.
 */
const MAJOR: Record<number, PrintBar> = {
  333: ["E5/1:8 F#5/2:4 E5+G#5/1+3:8 F#5+A5/2+4:4", "E2/5:4 B2/2:4 G#3/1:4 G#3/1:4 B2/2:4 E2/5:4"],
  334: ["G#5+B5/2+4:8 G#5+B5/2+4:4 G#5+B5/2+4:12", "E2/5:4 B2/2:4 G#3/1:4 G#3/1:4 B2/2:4 E2/5:4"],
  335: ["A5+C#6/2+4:12 A5+C#6/2+4:12", "D#2/5:4 B2/2:4 F#3/1:4 F#3/1:4 B2/2:4 D#2/5:4"],
  336: ["G#5+B5/2+4:20 G#5+B5/2+4:4", "E2/5:4 B2/2:4 G#3/1:4 G#3/1:4 B2/2:4 E2/5:4"],
  337: ["A5+C#6/2+4:12 A5+C#6/2+4:12", "D#2/5:4 B2/2:4 F#3/1:4 F#3/1:4 B2/2:4 D#2/5:4"],
  338: ["G#5+B5/2+4:20 G#5+B5/2+4:4", "E2/5:4 B2/2:4 G#3/1:4 G#3/1:4 B2/2:4 E2/5:4"],
  339: ["F#5+A5/2+4:12 F#5+A5/2+4:8 F#5+A5/2+4:4", "A2/5:4 C#3/3:4 F#3/1:4 F#3/1:4 C#3/3:4 A2/5:4"],
  340: ["E5+G#5/1+3:8 F#5+A5/2+4:4 E5+G#5/1+3:8 E5+G#5/1+3:4", "B2/5:4 E3/3:4 B3/1:4 B3/1:4 E3/3:4 B2/5:4"],
  341: ["D#5+F#5/1+3:12 D#5+F#5/1+3:8 D#5+F#5/1+3:4", "A2/5:4 D#3/3:4 B3/1:4 B3/1:4 D#3/3:4 A2/5:4"],
  342: ["G#5+B5/2+4:20 G#5+B5/2+4:4", "G#2/5:4 D3/3:4 B3/1:4 B3/1:4 D3/3:4 G#2/5:4"],
  343: ["F#5+A5/2+4:12 F#5+A5/2+4:8 F#5+A5/2+4:4", "A2/5:4 F#3/2:4 C#4/1:4 C#4/1:4 F#3/2:4 A2/5:4"],
  344: ["E5+G#5/1+3:8 F#5+A5/2+4:4 E5+G#5/1+3:8 E5+G#5/1+3:4", "B2/5:4 E3/3:4 B3/1:4 B3/1:4 E3/3:4 B2/5:4"],
  345: ["D#5+F#5/1+3:12 D#5+F#5/1+3:8 D#5+F#5/1+3:4", "A2/5:4 D#3/3:4 B3/1:4 B3/1:4 D#3/3:4 A2/5:4"],
  346: ["E#5+B5+D6/1+3+5:20 E#5+B5+D6/1+3+5:4", "G#2/5:4 D3/3:4 B3/1:4 B3/1:4 D3/3:4 G#2/5:4"],
  347: ["F#5+A5+C#6/1+2+5:12 D#5+A5+C6/1+3+5:8 D#5+A5+C6/1+3+5:4", "A2/5:4 C#3/3:4 F#3/1:4 F#2/5:4 A2/4:4 D#3/2:4"],
  348: ["E5+G#5+B5/1+3+5:12 F#5+A5/2+4:8 F#5+A5/2+4:4", "G#2/5:4 B2/4:4 E3/2:4 A2/5:4 C#3/3:4 F#3/1:4"],
  349: ["E5+G#5/1+3:8 F#5+A5/2+4:4 E5+G#5/1+3:8 E5+G#5/1+3:4", "B2/5:4 E3/3:4 B3/1:4 B3/1:4 E3/3:4 B2/5:4"],
  350: ["D#5+F#5/1+3:8 E5+G#5/2+4:4 D#5+F#5/1+3:8 D#5+F#5/1+3:4", "B2/5:4 F#3/2:4 B3/1:4 B3/1:4 F#3/2:4 B2/5:4"],
  351: ["B4+E5/1+3:8 D#5+F#5/2+4:4 E5+G#5/3+5:8 E5+G#5/3+5:4", "E2/5:4 B2/2:4 G#3/1:4 G#3/1:4 B2/2:4 E2/5:4"],
  352: ["C#5+E5/1+3:8 D#5+F#5/2+4:4 E5+G#5/3+5:8 E5+G#5/3+5:4", "C#2+C#3/5+1:4 E3/3:4 G#3/1:4 G#3/1:4 E3/3:4 C#3/5:4"],
  353: ["E5/2:8 F#5/3:4 G#5/4:8 G#5/4:4", "B1+B2/5+1:4 E3/3:4 B3/1:4 B3/1:4 E3/3:4 B2/5:4"],
  354: ["B5/5:12 F#5/2:8 A5/4:4", "B1+B2/5+1:4 F#3/3:4 B3/1:4 B3/1:4 F#3/2:4 D#3/4:4"],
  355: ["G#5/4:8 F#5/3:4 G#5/4:8 G#5/4:4", "E2+E3/5+1:4 G#3/3:4 B3/1:4 D#3+B3/5+1:4 G#3/2:4 E3/4:4"],
  356: ["E5/2:8 F#5/3:4 G#5/4:8 G#5/4:4", "C#3+E3/5+4:4 G#3/2:4 C#4/1:4 B2+C#4/5+1:4 G#3/2:4 E3/4:4"],
  357: ["E5/2:8 F#5/3:4 G#5/4:8 G#5/4:4", "A#2+E3/5+3:4 F#3/2:4 C#4/1:4 F#2/5:4 F#3/1:4 E3/2:4"],
  358: ["B5/5:12 B5/5:8 B5/5:4", "B2+E3/5+3:4 F#3/2:4 B3/1:4 B3/1:4 F#3/2:4 B2/5:4"],
};

/**
 * Bars 359 to 406: the Vyšehrad motif, then the close on E major. The cellos play four even eighths
 * against the bar's two beats in bars 359 to 373, six units each. The right hand holds each chord the
 * print ties over a bar line. At bar 364 the tie holds the oboe's C sharp with the E, and at bar 373 it
 * holds the F sharp of bar 372, where the print strikes a new B under them. Bar 361 leaves out the
 * oboe's low B under the octave. From bar 390 the winds hold the chord and the brass repeat a fanfare
 * rhythm, so the right hand keeps the violins' arpeggio, the only line that moves.
 */
const VYSEHRAD: Record<number, PrintBar> = {
  359: ["B4+G#5+B5/1+4+5:24", "E2/5:6 B2/2:6 G#3/1:6 B2/2:6"],
  360: ["C#6+E6/3+5:24~", "C#2/5:6 G#2/3:6 E3/1:6 G#2/3:6"],
  361: ["C#6+E6/3+5:12 B5+D#6/2+4:12", "C#2/5:6 G#2/1:6 D#2/5:6 B2/1:6"],
  362: ["B4+G#5+B5/1+4+5:24", "E2/5:6 B2/2:6 G#3/1:6 B2/2:6"],
  363: ["C#6+E6/3+5:24~", "C#2/5:6 G#2/3:6 E3/1:6 G#2/3:6"],
  364: ["C#6+E6/3+5:12 B4+F#5+D#6/1+3+5:12", "C#2/5:6 G#2/1:6 D#2/5:6 B2/1:6"],
  365: ["B4+E5+G#5/1+2+5:24", "E2/5:6 B2/3:6 G#3/1:6 B2/3:6"],
  366: ["E5+G#5+C#6/1+3+5:24~", "G#2/5:6 E3/3:6 C#4/1:6 E3/3:6"],
  367: ["E5+G#5+C#6/1+3+5:12 D#5+G#5+B5/1+2+5:12", "G#2/5:6 E3/2:6 B2/4:6 D#3/2:6"],
  368: ["E4+C#5+G#5/1+3+5:24", "C#2/5:6 G#2/2:6 E3/1:6 G#2/2:6"],
  369: ["C#5+F#5+B5/1+2+5:24~", "F#2/5:6 C#3/3:6 F#3/1:6 C#3/3:6"],
  370: ["C#5+F#5+B5/1+2+5:12 C#5+F#5+A5/1+2+5:8 C#5+G#5/1+5:4", "F#2/5:6 C#3/2:6 G#2/4:6 C#3/2:6"],
  371: ["A4+C#5+F#5/1+2+5:24", "A2/5:6 C#3/3:6 F#3/1:6 C#3/3:6"],
  372: ["F#4+D#5+A5/1+3+5:24~", "B2/5:6 D#3/3:6 F#3/1:6 D#3/3:6"],
  373: ["F#4+D#5+A5/1+3+5:12 A4+B4+D#5+G#5/1+2+3+5:12", "B1+B2/5+1:6 D#3/2:6 F#3/1:6 D#3/2:6"],
  374: ["B4+E5+G#5/1+2+5:12 B4+F#5+B5/1+3+5:12", "E2+E3/5+1:8 E3/1:4 B1+B2/5+1:8 B2/1:4"],
  375: ["G#5+E6/1+5:12 B4+F#5+B5/1+3+5:12", "G#1+G#2/5+1:8 G#2/1:4 B1+B2/5+1:8 B2/1:4"],
  376: ["B4+E5+G#5/1+2+5:12 B4+D#5+F#5+B5/1+2+3+5:12", "E2+E3/5+1:8 E3/1:4 B1+B2/5+1:8 B2/1:4"],
  377: ["B4+E5+G#5/1+2+5:12 B4+F#5+B5/1+3+5:12", "E2+E3/5+1:8 E3/1:4 B1+B2/5+1:8 B2/1:4"],
  378: ["G#5+E6/1+5:12 B4+F#5+B5/1+3+5:12", "G#1+G#2/5+1:8 G#2/1:4 B1+B2/5+1:8 B2/1:4"],
  379: ["B4+E5+G#5/1+2+5:12 B4+D#5+F#5+B5/1+2+3+5:12", "E2+E3/5+1:8 E3/1:4 B1+B2/5+1:8 B2/1:4"],
  380: ["B4+E5+G#5/1+2+5:12 B4+F#5+B5/1+3+5:12", "E2+E3/5+1:8 E3/1:4 B1+B2/5+1:8 B2/1:4"],
  381: ["G#5+E6/1+5:24", "G#1+G#2/5+1:8 G#3/1:4 G#3/1:8 G#2/5:4"],
  382: ["A5+B5+D#6+F#6/1+2+3+5:24", "B1+B2/5+1:8 B3/1:4 B3/1:8 B2/5:4"],
  383: ["B5+E6+G#6/1+3+5:24", "E2/5:8 E3/1:4 E3/1:8 E2/5:4"],
  384: ["A5+B5+D#6+F#6/1+2+3+5:24~", "B1+B2/5+1:8 B3/1:4 B3/1:8 B2/5:4"],
  385: ["A5+B5+D#6+F#6/1+2+3+5:24", "B1+B2/5+1:8 B3/1:4 B3/1:8 B2/5:4"],
  386: ["B5+E6+G#6/1+3+5:24", "E2/5:8 E3/1:4 E3/1:8 E2/5:4"],
  387: ["A5+B5+D#6+F#6/1+2+3+5:24~", "B1+B2/5+1:8 B3/1:4 B3/1:8 B2/5:4"],
  388: ["A5+B5+D#6+F#6/1+2+3+5:24", "B1+B2/5+1:8 B3/1:4 B3/1:8 B2/5:4"],
  389: ["B5+E6+G#6/1+3+5:24", "E2/5:8 E3/1:4 E3/1:8 E2/5:4"],
  390: ["G#4/1:4 B4/2:4 E5/3:4 G#5/1:4 B5/2:4 E6/4:4", "E2/5:8 E3/1:4 E3/1:8 E2/5:4"],
  391: ["G#6/5:4 E6/4:4 B5/2:4 G#5/4:4 E5/2:4 B4/1:4", "E2/5:8 E3/1:4 E3/1:8 E2/5:4"],
  392: ["B4/1:4 D#5/2:4 F#5/3:4 B5/1:4 D#6/2:4 F#6/4:4", "B2/5:8 B3/1:4 B3/1:8 B2/5:4"],
  393: ["B6/5:4 F#6/4:4 D#6/2:4 B5/1:4 F#5/3:4 D#5/2:4", "B2/5:8 B3/1:4 B3/1:8 B2/5:4"],
  394: ["B5/5:4 F#5/3:4 D#5/2:4 B4/1:4 A4/3:4 F#4/1:4", "B2/5:8 B3/1:4 B3/1:8 B2/5:4"],
  395: ["E4/1:4 G#4/2:4 B4/3:4 E5/1:4 G#5/2:4 B5/4:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  396: ["E6/5:4 B5/4:4 G#5/2:4 E5/1:4 B4/3:4 G#4/1:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  397: ["B5/5:4 G#5/4:4 E5/3:4 B4/2:4 G#4/1:4 E4/1:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  398: ["G#4/1:4 B4/2:4 E5/3:4 G#5/1:4 B5/2:4 E6/4:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  399: ["G#6/5:4 E6/4:4 B5/2:4 G#5/4:4 E5/2:4 B4/1:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  400: ["G#5/5:4 E5/4:4 B4/3:4 G#4/2:4 E4/1:4 B3/1:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  401: ["G#3/1:4 B3/2:4 E4/3:4 G#4/1:4 B4/2:4 E5/4:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  402: ["G#5/1:4 B5/2:4 E6/3:4 G#6/4:4 B6/5:4 G#6/4:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  403: ["E6/5:4 B5/4:4 G#5/2:4 E5/1:4 B4/3:4 G#4/1:4", "E2/5:8 B2/2:4 E3/1:8 B2/2:4"],
  404: ["G#3+E4/1+5:8 B3+F#4/1+4:4 E4+G#4/2+5:8 F#4+B4/1+4:4", "E2/5:4 B2/2:4 E3/1:4 B2/2:8 E2/5:4"],
  405: ["G#4+E5/1+4:8 B4+F#5/1+4:4 E5+G#5/2+4:8 F#5+B5/2+5:4", "E2/5:4 B2/2:4 E3/1:4 B2/2:8 E2/5:4"],
  406: ["E5+G#5/1+3:8 F#5+B5/1+4:4 G#5+E6/1+5:8 B5+F#6/1+5:4", "E2/5:4 B2/2:4 E3/1:4 B2/2:8 E2/5:4"],
};

/** Bars 407 to 427: the violins' E major arpeggio falls, rises and fades, then the last B major and E major chords. */
const FAREWELL: Record<number, PrintBar> = {
  407: ["E6+G#6/2+5:8 B5+F#6/1+5:4 G#5+E6/1+5:8 F#5+B5/1+4:4", "E1+E2/5+1:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  408: ["E5+G#5/2+5:8 B4+F#5/1+5:4 G#4+E5/1+5:8 F#4+B4/1+4:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  409: ["E4+G#4/2+5:8 B3+F#4/1+5:4 G#3+E4/1+5:8 B3/2:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  410: ["G#3/2:8 B3/3:4 G#3+E4/1+4:8 B3+F#4/2+5:4", "E1+E2/5+1:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  411: ["E4+G#4/1+4:8 F#4+B4/2+5:4 G#4+E5/1+5:8 B4+F#5/1+5:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  412: ["E5+G#5/1+4:8 F#5+B5/2+5:4 G#5+E6/1+5:8 B5+F#6/1+5:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  413: ["E6+G#6/2+5:8 B5+F#6/1+5:4 G#5+E6/1+5:8 F#5+B5/1+4:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  414: ["E5+G#5/2+5:8 B4+F#5/1+5:4 G#4+E5/1+5:8 F#4+B4/1+4:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  415: ["E4+G#4/2+5:8 B3+F#4/1+5:4 G#3+E4/1+5:8 B3/2:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  416: ["G#3/2:8 B3/3:4 G#3+E4/1+4:8 B3+F#4/2+5:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  417: ["E4+G#4/1+4:8 F#4+B4/2+5:4 G#4+E5/1+5:8 B4+F#5/1+5:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  418: ["E5+G#5/1+4:8 F#5+B5/2+5:4 G#5+E6/1+5:8 B5+F#6/1+5:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  419: ["E6+G#6/2+5:8 B5+F#6/1+5:4 G#5+E6/1+5:8 F#5+B5/1+4:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  420: ["E5+G#5/2+5:8 B4+F#5/1+5:4 G#4+E5/1+5:8 F#4+B4/1+4:4", "E2/5:4 B2/3:4 E3/1:4 B2/3:8 E2/5:4"],
  421: ["E4+G#4/2+5:8 B3+F#4/1+5:4 G#3+E4/1+5:8 B3/2:4", "E2/5:4 B2/3:4 E3/1:4 E3/1:8 B2/3:4"],
  422: ["G#3/2:8 B3/3:4 G#3+E4/1+4:8 B3+F#4/2+5:4", "E2/5:8 r:16"],
  423: ["E4+G#4/1+4:8 F#4+B4/2+5:4 G#4+E5/1+5:8 B4+F#5/1+5:4", "r:24"],
  424: ["E5+G#5/1+4:8 F#5+B5/2+5:4 G#5+E6/1+5:8 B5+F#6/1+5:4", "r:24"],
  425: ["E6+G#6/2+5:12 r:12", "r:24"],
  426: ["B4+D#5+B5/1+2+5:8 r:16", "B1+B2/5+1:8 r:16"],
  427: ["G#5+B5+E6/1+2+5:8 r:16", "E1+E2/5+1:8 r:16"],
};

/** The print's bars the Original plays, by their number in the print. */
const PRINT_BARS: Record<number, PrintBar> = { ...SOURCE, ...THEME, ...MAJOR, ...VYSEHRAD, ...FAREWELL };

/**
 * Our pedal, by print bar, as the full score marks none. Bars 1 to 79 keep it up: their pizzicato and
 * staccato want a dry sound. From bar 333 it holds each chord the harmony keeps for a bar, and changes at
 * the half bar where the chord changes there. Every bar it leaves out keeps the pedal up.
 */
const PRINT_PEDAL: Record<number, string> = {};
for (let bar = 333; bar <= 424; bar += 1) PRINT_PEDAL[bar] = "P:24";
for (const bar of [347, 348, 355, 356, 357, 361, 364, 367, 370, 374, 375, 376, 377, 378, 379, 380]) PRINT_PEDAL[bar] = "P:12 P:12";
PRINT_PEDAL[425] = "P:12 r:12";
PRINT_PEDAL[426] = "P:8 r:16";
PRINT_PEDAL[427] = "P:8 r:16";

/** The print's bars `from` to `to`. */
function run(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, at) => from + at);
}

/**
 * The 174 bars the Original plays, without the print's repeat of bars 55 to 79:
 * - bars 1 to 79: print bars 1 to 79, the source and the river theme in E minor, ending on B7.
 * - bars 80 to 174: print bars 333 to 427, the river in E major, Vyšehrad and the close. Played bar n
 *   is print bar n + 253.
 */
const PLAYED = [...run(1, 79), ...run(333, 427)];

/** One line of the Original: the right hand, the left hand or the pedal of each played bar, in order. */
function printLine(part: 0 | 1 | 2): string {
  return PLAYED.map((number) => {
    const bar = PRINT_BARS[number];
    if (bar === undefined) throw new Error(`Vltava's Original has no bar ${number}`);
    return part === 2 ? (PRINT_PEDAL[number] ?? "r:24") : rolledWide(bar[part]);
  }).join(" | ");
}

/** The pitch class of each letter. */
const CLASSES: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The MIDI pitch of a note name such as `G#4` or `Bb3`. */
function pitchOf(name: string): number {
  const [, letter = "C", accidental = "", octave = "4"] = /^([A-G])([#b]?)(\d)$/.exec(name) ?? [];
  return 12 * (Number(octave) + 1) + (CLASSES[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0);
}

/** The widest chord a hand holds at once: 15 semitones, the practical span of fingers 1 and 5. */
const WIDEST_HELD = 15;

/**
 * `text` with each chord wider than a hand holds rolled from its lowest note.
 * Each note but the top takes one 32nd, and the top note keeps the rest of the chord's length.
 */
function rolledWide(text: string): string {
  return text
    .split(" ")
    .map((token) => {
      const [, chord, fingers, units] = /^([^/]+\+[^/]+)\/([\d+]+):(\d+)$/.exec(token) ?? [];
      if (chord === undefined || fingers === undefined || units === undefined) return token;
      const names = chord.split("+");
      const pitches = names.map(pitchOf);
      if (Math.max(...pitches) - Math.min(...pitches) <= WIDEST_HELD) return token;
      const marks = fingers.split("+");
      const last = names.length - 1;
      return names.map((name, at) => `${name}/${marks[at]}:${at === last ? Number(units) - last : 1}`).join(" ");
    })
    .join(" ");
}

export const vltava: OurSong = {
  slug: "vltava",
  title: "Vltava",
  aka: ["Die Moldau", "The Moldau", "Má vlast", "Moldau"],
  source: {
    composer: "Bedřich Smetana",
    died: 1884,
    published: 1875,
    edition:
      "Má vlast, Vltava, the theme's upbeat and bars 1 to 8, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 829; Vltava was first played in 1875",
  },
  about:
    "Smetana wrote Vltava in 1874, the second of six symphonic poems in his cycle Má vlast, My Country. " +
    "Its music paints the river that flows through Prague. " +
    "Terrence Malick's 2011 film The Tree of Life uses it.",
  funFact: "Its famous tune is an adaptation of La Mantovana, a melody attributed to the Italian Renaissance tenor Giuseppe Cenci.",
  /**
   * Our Original follows Eulenburg's full score, reduced for two hands. It plays bars 1 to 79 and leaves
   * out the print's repeat of bars 55 to 79. It then cuts from bar 79's B7 to bar 333, the river theme in
   * E major. The cut leaves out bars 80 to 332: the forest hunt, the peasant wedding, the nymphs'
   * moonlight, the St John's rapids and the theme's return in E minor. It adds no bar of its own. The
   * module holds one key, E minor, and spells the sharps of the E major bars as accidentals. It keeps one
   * tempo, so the print's Più moto at bar 333 is not heard.
   */
  mythic: {
    key: E_MINOR,
    bpm: 99,
    numerator: 6,
    denominator: 8,
    steps: 4,
    right: printLine(0),
    left: printLine(1),
    pedal: printLine(2),
    source: {
      edition:
        "Smetana, Má vlast No. 2, Vltava, Eulenburg study score No. 472, Leipzig, plate E.E. 3642, bars 1 to 79 and 333 to 427, printed pages 1 to 18 and 87 to 104, reduced for two hands, scanned as Internet Archive item mavlastvltavno20000unse",
      printed: 1914,
    },
    skills: ["sixteenth-notes", "broken-chords", "melody-in-chords"],
    practice: [
      { text: "Play bars 1 to 8 slowly with the right hand alone. Keep the flutes' sixteenths light and even.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
      { text: "Play bars 40 to 55 with the left hand alone. Strike the low bass with the first sixteenth, then let the figure run.", hands: "left", speed: 0.5, loop: [40, 55], wait: false },
      { text: "Play the river theme, bars 40 to 55, with both hands at half speed.", hands: "both", speed: 0.5, loop: [40, 55], wait: false },
      { text: "Play bars 106 to 120 with both hands, slowly. Hold each loud chord over the left hand's four even notes.", hands: "both", speed: 0.6, loop: [106, 120], wait: false },
      { text: "Play the whole piece with both hands at full speed, with the pedal from bar 80.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 39, kind: "sound", text: "The river starts as a thin spring. Keep the sixteenths soft, and the left hand's notes short." },
      { fromBar: 40, toBar: 79, kind: "rhythm", text: "The tune sings on top, and the sixteenths flow under it. Strike the low bass together with the first sixteenth." },
      { fromBar: 80, toBar: 105, kind: "sound", text: "The river returns in E major and very loud. Let the tune's thirds ring over the broken chords." },
      { fromBar: 106, toBar: 120, kind: "rhythm", text: "Here the left hand plays four even notes in each bar, two to a beat. Count them before you join the hands." },
      { fromBar: 154, toBar: 174, kind: "sound", text: "The arpeggios fade to almost nothing. Then two loud chords end the piece." },
    ],
    tricky: {
      42: "The high C sounds twice, loud, with E under it. The left hand strikes a low C octave, then runs up to C and back to D.",
      59: "Hold the high B, then jump the right hand down to the E above middle C. That E starts the next phrase.",
      70: "The tune rests, and the right hand takes the running sixteenths up to A. The left hand plays a low B, then turns around the B below middle C.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 6, denominator: 4, key: E_MINOR, hookBars: [1, 9] },
  versions: {
    common: {
      key: E_MINOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      ownBars: [10, 11, 12, 13, 14, 15, 16],
      right: `${TUNE_STILL} | ${OWN_COMMON} | E5/1:12`,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 5 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 5 to 9 with the right hand alone, where the tune walks down to E.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar, and never moves.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first nine bars, slowly.", hands: "both", speed: 0.7, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Start with the thumb on B. Fingers 2 to 5 then climb from E to A." },
        { fromBar: 2, toBar: 3, kind: "trick", text: "Let go of A a little early. In the short gap, move the hand up one key, with finger 4 on B." },
        { fromBar: 1, toBar: 17, kind: "rhythm", text: "Count six beats in a bar: long, short, long, short. The river flows on and never hurries." },
      ],
      tricky: {
        3: "Finger 4 plays B three times. The hand has just moved up one key, so finger 5 waits over C.",
        5: "After the two high Cs, finger 4 plays B again. Keep the hand still, and let the fingers walk down.",
        8: "Play the first two F sharps with the thumb, and the third with finger 2. The thumb is then free for E.",
      },
    },
    rare: {
      key: E_MINOR,
      bpm: 112,
      numerator: 6,
      denominator: 4,
      steps: 2,
      ownBars: [10, 11, 12, 13, 14, 15, 16],
      right: `${TUNE_STILL} | ${OWN_RARE} | E5+G5/1+3:12`,
      left: `r:12 | ${bars(LILT, TUNE_CHORDS)} | ${bars(LILT, OWN_CHORDS.slice(0, -2))} | E3+B3/5+2:12`,
      skills: ["two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a long low note, then a short note or chord.", hands: "left", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play the right hand alone on the first nine bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "rhythm", text: "Each half bar has a long note and a short one, in both hands. Feel the swing: long, short." },
        { fromBar: 2, toBar: 3, kind: "trick", text: "Let go of A a little early. In the short gap, move the hand up one key, with finger 4 on B." },
        { fromBar: 17, toBar: 17, kind: "fingering", text: "End with E and G together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        3: "Finger 4 plays B three times after the hand moves up. The left hand plays a long E, then a short B.",
        5: "Finger 4 plays B three times again, and finger 3 waits over A for the next bar.",
        12: "Fingers 3, 4 and 5 climb from G to B. Then A and G step back quickly before the long B.",
      },
    },
    epic: {
      key: E_MINOR,
      bpm: 132,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_UNDER, OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: `r:12 | ${bars(BROKEN, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | E3+G3+B3/5+3+1:12`,
      pedal: PEDAL,
      ownBars: [10, 11, 12, 13, 14, 15, 16, 17],
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone until the broken chords flow by themselves.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the right hand alone on bars 10 to 17, and pass the thumb under on the way up.", hands: "right", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Pass the thumb under to G after F sharp. Fingers 2, 3 and 4 then reach A, B and C." },
        { fromBar: 18, toBar: 25, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        16: "The thumb takes D sharp, and the left hand plays a low D sharp under it. Both lead back home to E.",
        17: "Fingers 3, 2 and 1 walk down to E. Then the thumb jumps down to B, the upbeat of the tune.",
        24: "Fingers 1 and 3 hold D sharp and F sharp. Then the thumb stretches down to A for the sixth.",
      },
    },
    legendary: {
      key: E_MINOR,
      bpm: 144,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_UNDER, OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [
        "r:12",
        bars(STRIDE, TUNE_CHORDS),
        [..."eaebeabe"].map((chord) => WIDE[chord]).join(" | "),
        bars(STRIDE, TUNE_CHORDS.slice(0, -2)),
        "E1+E2/5+1:12",
      ].join(" | "),
      pedal: PEDAL,
      markedClashBars: [2, 18, 23],
      ownBars: [10, 11, 12, 13, 14, 15, 16, 17],
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [2, 5], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "Let the arpeggios flow softly, like the river under the tune." },
        { fromBar: 18, toBar: 23, kind: "sound", text: "A few chords rub against the bass on purpose. Play the top note of each chord a little louder." },
      ],
      tricky: {
        20: "Spread the hand over C, E, A and C for the first chord. Then the thumb moves up to E for the second.",
        22: "The A minor chord sounds three times. Keep the hand loose, and play the last one with fingers 2 and 5.",
        24: "Hold the B major chords, then use the short rest to spread the hand over E, G, B and E.",
      },
    },
  },
  de: {
    about:
      "Smetana schrieb Die Moldau 1874, die zweite von sechs sinfonischen Dichtungen in seinem Zyklus Má vlast, Mein Vaterland. " +
      "Ihre Musik malt den Fluss, der durch Prag fließt. " +
      "Terrence Malicks Film The Tree of Life aus dem Jahr 2011 verwendet sie.",
    funFact: "Ihre berühmte Melodie ist eine Bearbeitung von La Mantovana, einer Melodie, die dem italienischen Renaissance-Tenor Giuseppe Cenci zugeschrieben wird.",
    original: {
      practice: [
        "Spiel die Takte 1 bis 8 langsam nur mit der rechten Hand. Halt die Sechzehntel der Flöten leicht und gleichmäßig.",
        "Spiel die Takte 40 bis 55 nur mit der linken Hand. Schlag den tiefen Basston mit dem ersten Sechzehntel an, und lass dann die Figur laufen.",
        "Spiel das Flussthema, die Takte 40 bis 55, mit beiden Händen im halben Tempo.",
        "Spiel die Takte 106 bis 120 langsam mit beiden Händen. Halt jeden lauten Akkord über den vier gleichmäßigen Tönen der linken Hand.",
        "Spiel das ganze Stück mit beiden Händen im vollen Tempo, mit Pedal ab Takt 80.",
      ],
      tips: [
        "Der Fluss beginnt als dünne Quelle. Spiel die Sechzehntel leise und die Töne der linken Hand kurz.",
        "Die Melodie singt oben, und die Sechzehntel fließen darunter. Schlag den tiefen Basston zusammen mit dem ersten Sechzehntel an.",
        "Der Fluss kehrt in E-Dur und sehr laut zurück. Lass die Terzen der Melodie über den gebrochenen Akkorden klingen.",
        "Hier spielt die linke Hand vier gleichmäßige Töne in jedem Takt, zwei auf jeden Schlag. Zähl sie, bevor du die Hände zusammennimmst.",
        "Die Arpeggios verklingen fast ganz. Dann beenden zwei laute Akkorde das Stück.",
      ],
      tricky: {
        42: "Das hohe C klingt zweimal laut, mit dem E darunter. Die linke Hand schlägt eine tiefe C-Oktave an, läuft dann hinauf zum C und zurück zum D.",
        59: "Halt das hohe H, und spring dann mit der rechten Hand hinunter zum E über dem mittleren C. Dieses E beginnt die nächste Phrase.",
        70: "Die Melodie pausiert, und die rechte Hand übernimmt die laufenden Sechzehntel bis hinauf zum A. Die linke Hand spielt ein tiefes H und kreist dann um das H unter dem mittleren C.",
      },
    },
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 5 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 9 nur mit der rechten Hand. Dort steigt die Melodie hinunter zum E.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang und bewegt sich nie.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem H an. Dann steigen Finger 2 bis 5 vom E bis zum A.",
          "Lass das A etwas früher los. In der kurzen Lücke rückt die Hand eine Taste höher, mit Finger 4 auf dem H.",
          "Zähl sechs Schläge in jedem Takt: lang, kurz, lang, kurz. Der Fluss fließt weiter und hetzt nie.",
        ],
        tricky: {
          3: "Finger 4 spielt dreimal das H. Die Hand ist gerade eine Taste höher gerückt, also wartet Finger 5 über dem C.",
          5: "Nach den zwei hohen C spielt Finger 4 wieder das H. Halt die Hand still, und lass die Finger hinuntergehen.",
          8: "Spiel die ersten zwei Fis mit dem Daumen und das dritte mit Finger 2. Dann ist der Daumen frei für das E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: erst einen langen tiefen Ton, dann einen kurzen Ton oder Akkord.",
          "Spiel die ersten neun Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Jeder halbe Takt hat einen langen und einen kurzen Ton, in beiden Händen. Spür das Schaukeln: lang, kurz.",
          "Lass das A etwas früher los. In der kurzen Lücke rückt die Hand eine Taste höher, mit Finger 4 auf dem H.",
          "Am Ende spielst du E und G zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          3: "Nachdem die Hand höher gerückt ist, spielt Finger 4 dreimal das H. Die linke Hand spielt ein langes E, dann ein kurzes H.",
          5: "Finger 4 spielt wieder dreimal das H, und Finger 3 wartet über dem A auf den nächsten Takt.",
          12: "Finger 3, 4 und 5 steigen vom G zum H. Dann gehen A und G schnell zurück vor dem langen H.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst fließen.",
          "Spiel die Takte 10 bis 17 nur mit der rechten Hand, und setz auf dem Weg nach oben den Daumen unter.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Setz nach dem Fis den Daumen unter zum G. Dann erreichen Finger 2, 3 und 4 das A, das H und das C.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          16: "Der Daumen nimmt das Dis, und die linke Hand spielt ein tiefes Dis darunter. Beide führen zurück zum E.",
          17: "Finger 3, 2 und 1 gehen hinunter zum E. Dann springt der Daumen hinunter zum H, dem Auftakt der Melodie.",
          24: "Finger 1 und 3 halten Dis und Fis. Dann streckt sich der Daumen hinunter zum A für die Sexte.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios leise fließen, wie den Fluss unter der Melodie.",
          "Ein paar Akkorde reiben sich absichtlich am Bass. Spiel den oberen Ton jedes Akkords etwas lauter.",
        ],
        tricky: {
          20: "Spann die Hand für den ersten Akkord über C, E, A und C. Dann rückt der Daumen für den zweiten hinauf zum E.",
          22: "Der a-Moll-Akkord klingt dreimal. Halt die Hand locker, und spiel den letzten mit Finger 2 und 5.",
          24: "Halt die H-Dur-Akkorde, und nutz dann die kurze Pause, um die Hand über E, G, H und E zu spannen.",
        },
      },
    },
  },
};

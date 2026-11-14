/**
 * *William Tell Overture*: the first phrase of the finale of Rossini's overture, in four versions of ours,
 * and the whole finale as our Original.
 *
 * The tune is the top voice of Louis Niedermeyer's piano reduction. The print is in 2/4 and E major, with
 * sixteenths. The tune writes every sixteenth as a quarter, so each print bar is a bar of 4/2. Bar 1
 * holds the upbeat after a rest. The print's right hand plays a repeated B under the tune, which the tune
 * leaves out where a higher note sounds. The hook is the whole tune.
 *
 * Every version writes the tune in 4/2 quarters, one bar per print bar. The tune ends on the dominant,
 * so every version plays it two or three times, with bars of our own between. Our bars answer with the
 * tune's long, short, short rhythm on other chord notes, over I, IV, V and V7. Every version closes on
 * the tonic.
 *
 * Common moves the tune to C major, an octave up, over held fifths in one hand position. Its E before
 * each low G ends an eighth early, so the hand has a breath for the leap. Rare moves it to G major, over a
 * triad or a two-note chord on each half bar, and adds two-note chords to our bars. Epic moves it to A
 * major over an Alberti bass with the pedal, plays it again in sixths, then an octave up. Legendary
 * keeps E major over a stride bass, plays the tune again in octaves and then in chords.
 *
 * The sixths, the octaves, the chords and the stride are played short, each with an eighth's rest
 * after it. The hand then jumps to its next shape instead of stretching.
 *
 * The Original is the whole finale in Niedermeyer's reduction, printed pages 6 to 10: 252 bars of 2/4 in
 * E major, at the print's quarter of 152. A unit is a 32nd, 16 to the bar. Its bars are numbered 1 to
 * 252 in order, and each page's table names the print's page bar beside each section. Where the print
 * writes a doubled sharp, the notation names the white key it sounds, so F double sharp is G.
 *
 * A tie over a bar line is the notation's `~`, so the note sounds once. Bars 15 to 17 hold a B major
 * chord so, and bars 90 and 91 a C sharp. The left chord of bars 174, 178, 198 and 202 is tied into
 * the next bar's first eighth.
 *
 * The print marks no pedal, so the pedal is ours. It holds a bar at a time, only where the harmony holds
 * the whole bar. Those bars are the tremolo of bars 167 to 173, the E major figure of bars 236 to 239,
 * and the last bar.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const E_MAJOR: Key = { tonic: 4, mode: "major" };

/** Common's key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** Rare's key. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** Epic's key, of three sharps. */
const A_MAJOR: Key = { tonic: 9, mode: "major" };

/** The tune in 4/2, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "r:6 B3:1 B3:1 | B3:2 B3:1 B3:1 B3:2 B3:1 B3:1 | E4:2 F#4:2 G#4:2 B3:1 B3:1 | B3:2 B3:1 B3:1 E4:2 G#4:1 G#4:1 | F#4:2 D#4:2 B3:2 r:2";

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/**
 * `text`, a line in quarters, in eighths, with every note or chord an eighth short and an eighth's rest
 * after it. The hand then has a breath before each move, so a moving sixth or octave never stretches.
 */
function staccato(text: string): string {
  return text
    .split(" ")
    .map((token) => {
      const [notes, units] = token.split(":");
      if (notes === undefined || units === undefined) return token;
      const eighths = 2 * Number(units);
      return notes === "r" ? `r:${eighths}` : `${notes}:${eighths - 1} r:1`;
    })
    .join(" ");
}

/** Bars of `patterns` from `chords`, such as `"iv"`: one letter per half bar, two per bar. */
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

/** Common's left hand in eighths: a fifth held for the half bar, or the whole bar when the chord stays. */
function held(chords: string): string {
  const shape: Record<string, string> = { i: "C3+G3/5+1", f: "C3+F3/5+2", v: "D3+G3/4+1" };
  const lines: string[] = [];
  for (let at = 0; at < chords.length; at += 2) {
    const first = shape[chords[at] ?? ""];
    const second = shape[chords[at + 1] ?? ""];
    if (first === undefined || second === undefined) throw new Error(`No shape for chords ${chords}`);
    lines.push(first === second ? `${first}:16` : `${first}:8 ${second}:8`);
  }
  return lines.join(" | ");
}

/** The chords under the tune's last four bars, one letter per half bar. */
const TUNE_CHORDS = "iiiivivv";

/** The chords under the whole tune, its first bar of rest included. */
const HEAD_CHORDS = `ii${TUNE_CHORDS}`;

/** Common's tune in C major, an octave up, in eighths: bars 1 to 5. The E before each low G ends early. */
const COMMON_HEAD = "r:12 G4/1:2 G4/1:2";
const COMMON_BODY = [
  "G4/1:4 G4/1:2 G4/1:2 G4/1:4 G4/1:2 G4/1:2",
  "C5/3:4 D5/4:4 E5/5:3 r:1 G4/1:2 G4/1:2",
  "G4/1:4 G4/1:2 G4/1:2 C5/3:4 E5/5:2 E5/5:2",
  "D5/4:4 B4/2:4 G4/1:4 r:4",
].join(" | ");

/** Rare's tune in G major, in quarters. */
const RARE_HEAD = "r:6 D4/1:1 D4/1:1";
const RARE_BODY = [
  "D4/1:2 D4/1:1 D4/1:1 D4/1:2 D4/1:1 D4/1:1",
  "G4/3:2 A4/4:2 B4/5:2 D4/1:1 D4/1:1",
  "D4/1:2 D4/1:1 D4/1:1 G4/3:2 B4/5:1 B4/5:1",
  "A4/4:2 F#4/2:2 D4/1:2 r:2",
].join(" | ");

/** Epic's tune in A major, in quarters. */
const EPIC_HEAD = "r:6 E4/1:1 E4/1:1";
const EPIC_BODY = [
  "E4/1:2 E4/1:1 E4/1:1 E4/1:2 E4/1:1 E4/1:1",
  "A4/3:2 B4/4:2 C#5/5:2 E4/1:1 E4/1:1",
  "E4/1:2 E4/1:1 E4/1:1 A4/3:2 C#5/5:1 C#5/5:1",
  "B4/4:2 G#4/2:2 E4/1:2 r:2",
].join(" | ");

/** Epic's tune in A major, in quarters, with a third or a sixth under every note. */
const EPIC_SIXTHS = [
  "C#4+E4/1+3:2 C#4+E4/1+3:1 C#4+E4/1+3:1 C#4+E4/1+3:2 C#4+E4/1+3:1 C#4+E4/1+3:1",
  "C#4+A4/1+5:2 D4+B4/1+5:2 E4+C#5/1+5:2 C#4+E4/1+3:1 C#4+E4/1+3:1",
  "B3+E4/1+3:2 B3+E4/1+3:1 B3+E4/1+3:1 C#4+A4/1+5:2 E4+C#5/1+5:1 E4+C#5/1+5:1",
  "D4+B4/1+5:2 B3+G#4/1+5:2 G#3+E4/1+4:2 r:2",
].join(" | ");

/** Legendary's tune in E major, an octave up, in quarters. */
const LEGENDARY_HEAD = "r:6 B4/1:1 B4/1:1";
const LEGENDARY_BODY = [
  "B4/1:2 B4/1:1 B4/1:1 B4/1:2 B4/1:1 B4/1:1",
  "E5/3:2 F#5/4:2 G#5/5:2 B4/1:1 B4/1:1",
  "B4/1:2 B4/1:1 B4/1:1 E5/3:2 G#5/5:1 G#5/5:1",
  "F#5/4:2 D#5/2:2 B4/1:2 r:2",
].join(" | ");

/** Legendary's tune in E major, in quarters, in octaves. */
const LEGENDARY_OCTAVES = [
  "B3+B4/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1 B3+B4/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1",
  "E4+E5/1+5:2 F#4+F#5/1+5:2 G#4+G#5/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1",
  "B3+B4/1+5:2 B3+B4/1+5:1 B3+B4/1+5:1 E4+E5/1+5:2 G#4+G#5/1+5:1 G#4+G#5/1+5:1",
  "F#4+F#5/1+5:2 D#4+D#5/1+5:2 B3+B4/1+5:2 r:2",
].join(" | ");

/** Legendary's tune in E major, an octave up, in quarters, as the top of a chord. */
const LEGENDARY_CHORDS = [
  "E4+G#4+B4/1+3+5:2 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:2 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:1",
  "G#4+B4+E5/1+2+5:2 B4+F#5/1+5:2 B4+E5+G#5/1+3+5:2 E4+G#4+B4/1+3+5:1 E4+G#4+B4/1+3+5:1",
  "D#4+F#4+B4/1+2+5:2 D#4+F#4+B4/1+2+5:1 D#4+F#4+B4/1+2+5:1 G#4+B4+E5/1+2+5:2 B4+E5+G#5/1+3+5:1 B4+E5+G#5/1+3+5:1",
  "B4+D#5+F#5/1+3+5:2 F#4+B4+D#5/1+3+5:2 D#4+F#4+B4/1+2+5:2 r:2",
].join(" | ");

/** Rare's two-note chord or triad on each half bar, in quarters. */
const RARE_LEFT: Record<string, string> = {
  i: "G2+B2+D3/5+3+1:4",
  f: "G2+C3/5+2:4",
  v: "A2+D3/4+1:4",
  "7": "A2+C3+D3/4+2+1:4",
};

/** Epic's Alberti bass on each half bar, in eighths, in inversions that keep the hand still. */
const ALBERTI: Record<string, string> = {
  i: "A2/5:1 E3/1:1 C#3/3:1 E3/1:1 A2/5:1 E3/1:1 C#3/3:1 E3/1:1",
  f: "A2/5:1 F#3/1:1 D3/3:1 F#3/1:1 A2/5:1 F#3/1:1 D3/3:1 F#3/1:1",
  v: "G#2/5:1 E3/1:1 B2/3:1 E3/1:1 G#2/5:1 E3/1:1 B2/3:1 E3/1:1",
  "7": "G#2/5:1 E3/1:1 D3/2:1 E3/1:1 G#2/5:1 E3/1:1 D3/2:1 E3/1:1",
};

/**
 * Legendary's stride on each half bar, in eighths: an octave, a chord, the fifth's octave, a chord. Each
 * is an eighth long, with an eighth's rest to jump.
 */
const STRIDE: Record<string, string> = {
  i: "E2+E3/5+1:1 r:1 G#2+B2+E3/3+2+1:1 r:1 B1+B2/5+1:1 r:1 G#2+B2+E3/3+2+1:1 r:1",
  f: "A1+A2/5+1:1 r:1 A2+C#3+E3/3+2+1:1 r:1 E2+E3/5+1:1 r:1 A2+C#3+E3/3+2+1:1 r:1",
  v: "B1+B2/5+1:1 r:1 F#2+B2+D#3/3+2+1:1 r:1 F#1+F#2/5+1:1 r:1 F#2+B2+D#3/3+2+1:1 r:1",
  "7": "B1+B2/5+1:1 r:1 A2+B2+D#3/3+2+1:1 r:1 F#1+F#2/5+1:1 r:1 A2+B2+D#3/3+2+1:1 r:1",
};

/** The chords of Epic and Legendary from bar 1 to bar 23, one letter per half bar. */
const BIG_CHORDS = `${HEAD_CHORDS}ffi7i7ii${TUNE_CHORDS}ifi7fvii${TUNE_CHORDS}`;

/** A pedal line of `count` bars, changed on every half bar. */
function halfBarPedal(count: number): string {
  return Array(count).fill("P:8 P:8").join(" | ");
}

/**
 * One bar of the Original in 32nds, 16 to the bar: the right hand, the left hand and the pedal. A bar
 * without a pedal keeps it up.
 */
type PrintBar = readonly [right: string, left: string, pedal?: string];

/** A bar of the Original: its notes, or the number of the earlier bar it repeats note for note. */
type OriginalBar = PrintBar | number;

/** The left hand's chords in four voices: E major, B major and B seventh, and C sharp minor. */
const E4V = "E3+G#3+B3+E4/5+3+2+1";
const B4V = "B2+D#3+F#3+B3/5+3+2+1";
const B7 = "B2+D#3+F#3+A3/5+3+2+1";
const CS4V = "C#3+E3+G#3+C#4/5+3+2+1";

/** The trumpet's rhythm on one note or chord: an eighth and two 16ths, twice. */
function gallop(notes: string): string {
  return `${notes}:4 ${notes}:2 ${notes}:2 ${notes}:4 ${notes}:2 ${notes}:2`;
}

/** `text` written `count` times, joined by spaces, as a tremolo repeats its pair. */
function times(text: string, count: number): string {
  return Array(count).fill(text).join(" ");
}

/**
 * Printed page 6, bars 1 to 59: the print's page bars 1 to 59.
 * - Bars 1 to 17: the trumpet's call on B over a G major chord, then over E major, to a held B major chord.
 * - Bars 18 to 25: the galop's tune softly, on a repeated B under the left hand's E major.
 * - Bars 26 to 35: the tune loudly in octaves, an 8va line in bars 32 to 34.
 * - Bars 36 to 49: the C sharp minor answer in thirds and octaves, played twice.
 * - Bars 50 to 59: the bridge of rising bass steps, then the tune softly again.
 */
const PAGE_6: Record<number, OriginalBar> = {
  1: ["B4/3:8 r:4 B4/3:2 B4/3:2", "G2+B2+D3+G3/5+3+2+1:4 r:4 r:8"],
  2: ["B4/3:8 r:4 B4/3:2 B4/3:2", "r:16"],
  3: ["B4/3:4 G#4/2:4 E4/1:4 G#4/2:4", "r:16"],
  4: ["B4/3:4 G#4/2:4 B4/3:4 E5/5:4", "r:16"],
  5: ["B4/3:4 G#4/2:4 E4/1:4 G#4/2:4", "E4/3:8 r:4 E4/3:2 E4/3:2"],
  6: ["B4/3:4 G#4/2:4 B4/3:4 E5/5:4", "E4/3:8 r:4 E4+G#4/3+1:2 E4+G#4/3+1:2"],
  7: ["B4/3:8 r:4 B4/3:2 B4/3:2", "E4+G#4/3+1:4 B3+F#4/5+1:4 G#3+E4/5+1:4 B3+F#4/5+1:4"],
  8: ["B4/3:8 r:4 B4/3:2 B4/3:2", "E4+G#4/3+1:4 G#4+B4/3+1:4 F#4+A4/3+1:4 E4+G#4/3+1:4"],
  9: ["B4/3:8 r:4 B4/3:2 B4/3:2", "B3+F#4/5+1:4 E4+G#4/3+1:4 B3+F#4/5+1:4 F#4+A4/3+1:4"],
  10: ["B4/3:8 r:4 B4/3:2 B4/3:2", "E4+G#4/3+1:4 B3+F#4/5+1:4 G#3+E4/5+1:4 E4+G#4/3+1:4"],
  11: ["B4/3:4 B4/3:2 B4/3:2 B4/3:4 B4/3:4", "B3+D#4+F#4/5+3+1:4 B3+D#4+F#4/5+3+1:2 B3+D#4+F#4/5+3+1:2 B3+D#4+F#4/5+3+1:4 B3+D#4+F#4/5+3+1:4"],
  12: 11,
  13: 11,
  14: 11,
  // The print ties this chord over bars 16 and 17, to bar 17's first eighth.
  15: ["B4/3:16~", "B3+D#4+F#4/5+3+1:16~"],
  16: ["B4:16~", "B3+D#4+F#4:16~"],
  17: ["B4:4 r:4 r:8", "B3+D#4+F#4:4 r:4 r:8"],
  // Bar 18: the tune, pianissimo.
  18: ["r:8 r:4 B3/2:2 B3/2:2", "r:8 r:4 E3+G#3/3+1:2 E3+G#3/3+1:2"],
  19: [gallop("B3/2"), gallop("E3+G#3/3+1")],
  20: ["B3+E4/1+4:4 B3+F#4/1+5:4 B3+G#4/1+5:4 B3/1:2 B3/1:2", "E3+G#3/3+1:4 E3+G#3/3+1:4 E3+G#3/3+1:4 E3+G#3/3+1:2 E3+G#3/3+1:2"],
  21: ["B3/1:4 B3/1:2 B3/1:2 B3+E4/1+4:4 B3+G#4/1+5:2 B3+G#4/1+5:2", gallop("E3+G#3/3+1")],
  22: ["B3+F#4/1+5:4 B3+D#4/1+3:4 B3/1:4 B3/1:2 B3/1:2", "B2+D#3+F#3/5+3+1:4 B2+D#3+F#3/5+3+1:4 B2+D#3+F#3/5+3+1:4 E3+G#3/3+1:2 E3+G#3/3+1:2"],
  23: [gallop("B3/1"), gallop("E3+G#3/3+1")],
  24: ["B3+E4/1+4:4 B3+F#4/1+5:4 B3+G#4/1+5:4 E4/3:2 G#4/4:2", "E3+G#3/3+1:4 E3+G#3/3+1:4 E3+G#3/3+1:4 E3+G#3+B3/5+3+1:2 E3+G#3+B3/5+3+1:2"],
  25: ["B4/3:10 A4/2:2 G#4/2:2 F#4/1:2", gallop(B7)],
  // Bar 26: the tune fortissimo, in octaves.
  26: ["E4/3:4 B3+G#4/1+5:4 B3+E4/1+4:4 B4+B5/1+5:2 B4+B5/1+5:2", `E3+G#3/3+1:4 E3+G#3/3+1:4 E3+G#3/3+1:4 ${E4V}:2 ${E4V}:2`],
  27: [gallop("B4+B5/1+5"), gallop(E4V)],
  28: ["E5+E6/1+5:4 F#5+F#6/1+5:4 G#5+G#6/1+5:4 B4+B5/1+5:2 B4+B5/1+5:2", `${E4V}:4 ${E4V}:4 ${E4V}:4 ${E4V}:2 ${E4V}:2`],
  29: ["B4+B5/1+5:4 B4+B5/1+5:2 B4+B5/1+5:2 E5+E6/1+5:4 G#5+G#6/1+5:2 G#5+G#6/1+5:2", gallop(E4V)],
  30: ["F#5+F#6/1+5:4 D#5+D#6/1+5:4 B4+B5/1+5:4 B4+B5/1+5:2 B4+B5/1+5:2", `${B4V}:4 ${B4V}:4 ${B4V}:4 ${E4V}:2 ${E4V}:2`],
  31: 27,
  32: ["E5+E6/1+5:4 F#5+F#6/1+5:4 G#5+G#6/1+5:4 E6/4:2 G#6/5:2", `${E4V}:4 ${E4V}:4 ${E4V}:4 E3+G#3+B3/5+3+1:2 E3+G#3+B3/5+3+1:2`],
  33: ["B5+B6/1+5:10 A6/4:2 G#6/3:2 F#6/2:2", gallop(B7)],
  34: ["E6/3:4 B5+G#6/1+5:4 B5+E6/1+5:4 E5+G#5/1+3:2 E5+G#5/1+3:2", `E3+G#3/3+1:4 ${E4V}:4 ${E4V}:4 ${CS4V}:2 ${CS4V}:2`],
  35: [gallop("E5+G#5/1+3"), gallop(CS4V)],
  // Bar 36: the C sharp minor answer.
  36: ["E5+G#5/1+3:4 C#5+C#6/1+5:4 E5+G#5/1+3:4 C#5+C#6/1+5:4", `${CS4V}:4 r:4 ${CS4V}:4 r:4`],
  37: ["E5+G#5/1+3:4 C#5+C#6/1+5:4 E5+G#5/1+3:4 D#5+F#5/1+3:4", `${CS4V}:4 r:4 G#2+G#3/5+1:4 r:4`],
  38: ["C#5+E5/1+3:4 B#4+D#5/1+3:4 C#5/2:4 E5+G#5/1+3:2 E5+G#5/1+3:2", `C#3+G#3/5+1:4 C#3+F#3+A3/5+3+1:4 C#3+E3+G#3/5+3+1:4 ${CS4V}:2 ${CS4V}:2`],
  39: 35,
  40: 36,
  41: ["E5+G#5/1+3:4 C#5+C#6/1+5:4 F#5+B5/1+5:4 E5+A#5/1+5:4", `${CS4V}:4 r:4 F#3+D#4/5+1:4 F#3+C#4/5+1:4`],
  // The natural on G3 holds to the bar's end, so the last two chords take G natural.
  42: ["D#5+B5/1+5:4 E5+A#5/1+5:4 D#5+B5/1+5:4 E5+G#5/1+3:2 E5+G#5/1+3:2", "B2+B3/5+1:4 B2+G3/5+1:4 B2+F#3/5+1:4 C#3+E3+G3+C#4/5+3+2+1:2 C#3+E3+G3+C#4/5+3+2+1:2"],
  43: 35,
  44: 36,
  45: 37,
  46: 38,
  47: 35,
  48: 36,
  49: 41,
  // Bar 50: the bridge.
  50: ["D#5+B5/1+5:4 B4/2:2 B4/2:2 B4/2:4 B3+F#4/1+5:2 B3+F#4/1+5:2", "B2+B3/5+1:4 r:4 r:8"],
  51: ["B3+F#4/1+5:4 B3+F#4/1+5:2 B3+F#4/1+5:2 B3+F#4/1+5:4 E4+G#4/1+3:4", "r:16"],
  52: ["F#4+A4/1+3:4 B3+F#4/1+5:8 F#4+A4/1+3:4", "r:4 B2/5:4 C#3/4:4 D#3/3:4"],
  53: ["E4+G#4/1+3:4 E4/1:8 E4+G#4/1+3:4", "E3/5:4 F#3/4:4 G#3/3:4 A3/2:4"],
  54: ["D#4+F#4/1+3:4 D#4+F#4/1+3:4 D#4+F#4/1+3:4 B4+F#5/1+5:2 B4+F#5/1+5:2", "B3/3:4 B2+B3/5+1:4 B2+B3/5+1:4 B3+F#4/5+1:2 B3+F#4/5+1:2"],
  55: ["B4+F#5/1+5:4 B4+F#5/1+5:2 B4+F#5/1+5:2 B4+F#5/1+5:4 E5+G#5/1+3:4", "B3+F#4/5+1:4 B3+F#4/5+1:2 B3+F#4/5+1:2 B3+F#4/5+1:4 E4+G#4/3+1:4"],
  56: ["F#5+A5/1+3:4 B4+F#5/1+5:8 F#5+A5/1+3:4", "F#4+A4/3+1:4 B2/5:4 C#3/4:4 D#3/3:4"],
  57: ["E5+G#5/1+3:4 G#4+E5/1+5:8 E5+G#5/1+3:4", "E3/5:4 F#3/4:4 G#3/3:4 A3/2:4"],
  58: ["D#5+F#5/1+3:4 B4/2:2 B4/2:2 B4/2:4 B3/1:2 B3/1:2", "B3/3:4 r:4 r:4 E3+G#3/3+1:2 E3+G#3/3+1:2"],
  59: 23,
};

/**
 * Printed page 7, bars 60 to 111: the print's page bars 7.1 to 7.52.
 * - Bars 60 to 75: the tune softly, then in octaves to a run of seven 32nds in bar 74 (7.15).
 * - Bars 76 to 89 (7.17 to 7.30): broken octaves over a left-hand tremolo, then 16ths that climb to the top.
 * - Bars 90 to 104 (7.31 to 7.45): the C sharp minor answer in 16ths, and a chromatic turn.
 * - Bars 105 to 111 (7.46 to 7.52): the 16ths again, an octave lower.
 */
const PAGE_7: Record<number, OriginalBar> = {
  60: ["B3+E4/1+3:4 B3+F#4/1+4:4 B3+G#4/1+5:4 B3/1:2 B3/1:2", "E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3/5+3:2 E3+G#3/5+3:2"],
  61: ["B3/1:4 B3/1:2 B3/1:2 B3+E4/1+3:4 B3+G#4/1+5:2 B3+G#4/1+5:2", gallop("E3+G#3/5+3")],
  62: ["B3+F#4/1+4:4 B3+D#4/1+3:4 B3/1:4 B3/1:2 B3/1:2", "B2+D#3+F#3/5+3+1:4 B2+D#3+F#3/5+3+1:4 B2+D#3+F#3/5+3+1:4 E3+G#3/5+3:2 E3+G#3/5+3:2"],
  63: [gallop("B3/1"), gallop("E3+G#3/5+3")],
  64: ["B3+E4/1+3:4 B3+F#4/1+4:4 B3+G#4/1+5:4 E4/1:2 G#4/3:2", "E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3+B3/5+3+1:2 E3+G#3+B3/5+3+1:2"],
  65: ["B4/4:10 A4/3:2 G#4/2:2 F#4/1:2", gallop(B7)],
  66: ["E4/1:4 B3+G#4/1+5:4 B3+E4/1+3:4 B4+B5/1+5:2 B4+B5/1+5:2", `E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3/5+3:4 ${E4V}:2 ${E4V}:2`],
  67: 27,
  68: 28,
  69: 29,
  70: 30,
  71: 27,
  72: ["E5+E6/1+5:4 F#5+F#6/1+5:4 G#5+G#6/1+5:4 E6/5:2 G#6/5:2", `${E4V}:4 ${E4V}:4 ${E4V}:4 E3+G#3+B3/5+3+1:2 E3+G#3+B3/5+3+1:2`],
  73: 33,
  // The print's run of seven 32nds stands over the left hand's last eighth rest. It starts three 32nds
  // early, so the third chord is a 32nd long.
  74: ["E6/1:4 B5+G#6/1+5:4 B5+E6/1+5:1 E5/1:1 F#5/2:1 G#5/3:1 A5/1:1 B5/2:1 C#6/3:1 D#6/4:1", `E3+G#3/5+3:4 ${E4V}:4 ${E4V}:4 r:4`],
  75: ["E6/1:4 E5+E6/1+5:2 E5+E6/1+5:2 E5+E6/1+5:4 E5+E6/1+5:4", `${E4V}:4 ${E4V}:4 ${E4V}:4 ${E4V}:4`],
  // Bar 76 (7.17): broken octaves over a tremolo.
  76: ["G#5/1:2 G#6/5:2 G#5/1:2 G#6/5:2 G#5/1:2 G#6/5:2 F#5/1:2 F#6/5:2", times("B#3/1:2 E3/5:2", 4)],
  77: ["E5/1:2 E6/5:2 D#5/1:2 D#6/5:2 E5/1:2 E6/5:2 C#5/1:2 C#6/5:2", "C#4/1:2 E3/5:2 B#3/1:2 E3/5:2 C#4/1:2 E3/5:2 A3/1:2 E3/5:2"],
  78: ["B5/1:2 C#6/2:2 B5/1:2 C#6/2:2 B5/1:2 C#6/2:2 D#6/3:2 E6/4:2", `E3+G#3/5+3:4 r:4 ${E4V}:4 r:4`],
  79: ["A5/1:2 B5/2:2 A5/1:2 B5/2:2 A5/1:2 B5/2:2 C#6/3:2 D#6/4:2", `${B4V}:4 r:4 ${B4V}:4 r:4`],
  80: ["G#5/1:2 A5/2:2 G#5/1:2 A5/2:2 G#5/1:2 A5/2:2 B5/3:2 C#6/4:2", "E3+G#3+B3/5+3+1:4 r:4 E3+G#3+B3/5+3+1:4 r:4"],
  81: [times("F#5/1:2 G#5/2:2", 4), "A2+C#3+E3+F#3/5+3+2+1:4 r:4 A2+C#3+E3+F#3/5+3+2+1:4 r:4"],
  82: ["F#5/3:2 G#5/4:2 F#5/3:2 D#5/2:2 B4/1:2 B5/1:2 C#6/2:2 D#6/3:2", "B2+D#3+F#3/5+3+1:4 r:4 r:8"],
  83: 75,
  84: 76,
  85: 77,
  86: 78,
  87: 79,
  88: 80,
  89: ["F#5/1:2 G#5/2:2 F#5/1:2 G#5/2:2 F#5/1:2 A5/3:2 G#5/2:2 F#5/1:2", "A2+C#3+E3+F#3/5+3+2+1:4 r:4 B2+D#3+A3/5+3+1:4 r:4"],
  // Bar 90 (7.31): the C sharp minor answer in 16ths. The print ties the C sharp into bar 91.
  90: ["E5/2:4 r:4 C#5/1:8~", "E3+G#3/5+3:4 r:4 r:8"],
  91: ["C#5:2 B#4/2:2 C#5/3:2 B#4/2:2 D#5/4:2 C#5/3:2 B4/2:2 A4/1:2", `${CS4V}:4 r:4 F#3+A3+C#4/5+2+1:4 r:4`],
  92: ["C#5/4:2 B4/3:2 G#4/2:2 E4/1:2 E4/1:2 E4/1:2 E4/1:2 E4/1:2", `${CS4V}:4 r:4 r:4 C#3+E3+G#3/5+3+1:4`],
  93: ["G#4/4:2 F#4/3:2 D#4/2:2 B3/1:2 B3/1:2 B3/1:2 B3/1:2 B3/1:2", "G#2+B#2+D#3+G#3/5+3+2+1:4 r:4 r:4 G#2+B#2+D#3/5+3+1:4"],
  94: ["G#3/1:2 C#4/2:2 E4/3:2 G#4/4:2 C#5/4:2 C#5/4:2 C#5/4:2 C#5/4:2", "C#3+E3/5+3:4 r:4 r:8"],
  95: ["C#5/3:2 B#4/2:2 C#5/3:2 B#4/2:2 D#5/4:2 C#5/3:2 B4/2:2 A4/1:2", `${CS4V}:4 r:4 F#3+A3+C#4/5+2+1:4 r:4`],
  96: 92,
  97: 93,
  98: ["G#3/1:2 C#4/2:2 E4/3:2 G#4/4:2 C#5/4:2 E5/5:2 D#5/4:2 C#5/3:2", "E3+G#3/5+3:4 r:4 r:8"],
  99: ["D#5/4:2 B#4/3:2 G#4/2:2 G#4/2:2 G#4/1:2 G#5/5:2 E5/3:2 C#5/2:2", "G#3+B#3+D#4/5+3+1:4 r:4 r:4 G#3+C#4+E4/5+3+1:4"],
  100: 99,
  // Bar 101 (7.42): the print's F double sharp is written G.
  101: ["D#5/5:2 B#4/4:2 G#4/2:2 G#4/2:2 A#4/3:2 G4/2:2 D#4/1:2 D#4/1:2", "G#3+B#3+D#4/5+3+1:4 r:4 D#3+G3+C#4/5+3+1:4 r:4"],
  102: ["G#4/3:2 G4/2:2 G#4/3:2 G4/2:2 G#4/3:2 A4/4:2 G#4/3:2 F#4/2:2", "G#3+B3/3+1:4 r:4 r:8"],
  103: ["E4/3:2 B3/1:2 A#3/1:2 B3/1:2 E4/3:2 B3/1:2 F#4/4:2 B3/1:2", "E3+G#3/3+1:4 r:4 G#2+E3/5+1:4 B2+F#3/5+1:4"],
  104: ["G#4/3:2 E4/2:2 D#4/1:2 E4/2:2 G#4/3:2 E4/2:2 A4/4:2 F#4/3:2", "E3+G#3/3+1:4 r:4 E3+G#3/3+1:4 E3+F#3+A3/3+2+1:4"],
  // Bar 105 (7.46): the 16ths an octave lower.
  105: ["B4/1:2 G#5/5:2 F#5/4:2 E5/3:2 D#5/2:2 F#5/4:2 E5/3:2 C#5/1:2", "E3+G#3+B3/5+3+1:4 r:4 r:4 E3+G3+A#3+C#4/5+4+2+1:4"],
  106: ["B4/1:2 C#5/2:2 B4/1:2 C#5/2:2 D#5/3:2 E5/4:2 F#5/5:2 G#5/5:2", "E3+G#3+B3/5+3+1:4 r:4 E3+G#3+B3/5+3+1:4 r:4"],
  107: ["A4/1:2 B4/2:2 A4/1:2 B4/2:2 C#5/1:2 D#5/2:2 E5/3:2 F#5/4:2", `${B4V}:4 r:4 ${B4V}:4 r:4`],
  108: ["G#4/1:2 A4/2:2 G#4/1:2 A4/2:2 B4/1:2 C#5/2:2 D#5/3:2 E5/4:2", "E3+G#3+B3/5+3+1:4 r:4 E3+G#3+B3/5+3+1:4 r:4"],
  109: [times("F#4/1:2 G#4/2:2", 4), "A2+C#3+E3+F#3/5+3+2+1:4 r:4 A2+C#3+E3+F#3/5+3+2+1:4 r:4"],
  110: ["F#4/3:2 G#4/4:2 F#4/3:2 D#4/2:2 B3/1:2 B#3/1:2 C#4/2:2 D#4/3:2", "B2+D#3+F#3/5+3+1:4 r:4 r:8"],
  111: 103,
};

/**
 * Printed page 8, bars 112 to 160: the print's page bars 8.1 to 8.49.
 * - Bars 112 to 133 (8.1 to 8.22): the 16ths climb again, with the broken octaves and tremolo twice.
 * - Bars 134 to 149 (8.23 to 8.38): the C sharp minor answer, always fortissimo.
 * - Bars 150 to 157 (8.39 to 8.46): a soft shake of B, A sharp and C sharp over the left hand's chords.
 * - Bars 158 to 160 (8.47 to 8.49): the tune softly again.
 */
const PAGE_8: Record<number, OriginalBar> = {
  112: ["G#4/4:2 E4/2:2 D#4/1:2 E4/2:2 G#4/4:2 E4/2:2 A4/5:2 F#4/3:2", "E3+G#3/5+3:4 r:4 E3+G#3/5+3:4 E3+F#3+A3/5+4+2:4"],
  113: ["B4/3:2 G#5/5:2 F#5/4:2 E5/3:2 D#5/2:2 F#5/4:2 E5/3:2 C#5/2:2", "E3+G#3+B3/5+3+1:4 r:4 r:4 E3+G3+A#3+C#4/5+4+2+1:4"],
  114: ["B4/2:2 C#5/3:2 B4/2:2 C#5/3:2 D#5/2:2 E5/3:2 F#5/4:2 G#5/5:2", "E3+G#3+B3/5+3+1:4 r:4 E3+G#3+B3/5+3+1:4 r:4"],
  115: ["B4/2:2 C#5/3:2 B4/2:2 C#5/3:2 D#5/2:2 E5/3:2 F#5/4:2 G#5/5:2", "B2+D#3+F#3+A3/5+4+2+1:4 r:4 B2+D#3+F#3+A3/5+4+2+1:4 r:4"],
  116: ["G#4/2:2 A4/3:2 G#4/2:2 A4/3:2 B4/2:2 C#5/3:2 D#5/4:2 E5/5:2", "E3+G#3+B3/5+3+1:4 r:4 E3+G#3+B3/5+3+1:4 r:4"],
  117: ["F#4/1:2 C#5/5:2 B#4/4:2 C#5/5:2 D#5/5:2 C#5/4:2 A4/2:2 F#4/1:2", "A2+E3+F#3/5+2+1:4 r:4 B2+D#3+A3/5+3+1:4 r:4"],
  118: ["D#4/1:2 E5/1:2 F#5/2:2 G#5/3:2 A5/4:2 B5/5:2 C#6/5:2 D#6/5:2", "E3+G#3/5+3:4 r:4 r:8"],
  119: ["E6/5:4 E5+E6/1+5:2 E5+E6/1+5:2 E5+E6/1+5:4 E5+E6/1+5:4", `${E4V}:4 ${E4V}:4 ${E4V}:4 ${E4V}:4`],
  120: ["G#5/1:2 G#6/5:2 G#5/1:2 G#6/5:2 G#5/1:2 G#6/5:2 F#5/1:2 F#6/5:2", times("B#3/2:2 E3/5:2", 4)],
  121: ["E5/1:2 E6/5:2 D#5/1:2 D#6/5:2 E5/1:2 E6/5:2 C#5/1:2 C#6/5:2", "C#4/1:2 E3/5:2 B#3/2:2 E3/5:2 C#4/1:2 E3/5:2 A3/2:2 E3/5:2"],
  122: ["B5/3:2 C#6/4:2 B5/3:2 C#6/4:2 B5/3:2 C#6/4:2 D#6/5:2 E6/5:2", `E3+G#3/5+3:4 r:4 ${E4V}:4 r:4`],
  // Bars 123 and 131 are the same music. The left chord's top is B3, as bar 131's reading at 400% has it.
  123: ["A5/2:2 B5/3:2 A5/2:2 B5/3:2 A5/2:2 B5/3:2 C#6/4:2 D#6/5:2", "B2+D#3+F#3+B3/5+4+2+1:4 r:4 B2+D#3+F#3+B3/5+4+2+1:4 r:4"],
  124: ["G#5/2:2 A5/3:2 G#5/2:2 A5/3:2 G#5/2:2 A5/3:2 B5/4:2 C#6/5:2", "E3+G#3+B3/5+3+1:4 r:4 E3+G#3+B3/5+3+1:4 r:4"],
  125: [times("F#5/2:2 G#5/3:2", 4), "A2+C#3+E3+F#3/5+3+2+1:4 r:4 A2+C#3+E3+F#3/5+3+2+1:4 r:4"],
  126: ["F#5/3:2 G#5/4:2 F#5/3:2 D#5/2:2 B4/1:2 B5/3:2 C#6/4:2 D#6/5:2", "B2+D#3+F#3/5+3+1:4 r:4 r:8"],
  127: 119,
  128: 120,
  129: 121,
  130: 122,
  131: ["A5/2:2 B5/3:2 A5/2:2 B5/3:2 A5/2:2 B5/3:2 C#6/4:2 D#6/5:2", `${B4V}:4 r:4 ${B4V}:4 r:4`],
  132: 124,
  133: ["F#5/2:2 G#5/3:2 F#5/2:2 G#5/3:2 F#5/2:2 A5/4:2 G#5/3:2 F#5/2:2", "A2+C#3+E3+F#3/5+3+2+1:4 r:4 B2+D#3+A3/5+3+1:4 r:4"],
  // Bar 134 (8.23): the C sharp minor answer, sempre fortissimo.
  134: ["E5/1:4 B4/1:4 E5/2:4 E5+G#5/2+4:2 E5+G#5/2+4:2", "E3+G#3+B3/5+3+1:4 E3+G#3+B3/5+3+1:4 E3+G#3+B3/5+3+1:4 C#3+E3+G#3+C#4/5+4+2+1:2 C#3+E3+G#3+C#4/5+4+2+1:2"],
  135: [gallop("E5+G#5/2+4"), gallop("C#3+E3+G#3+C#4/5+4+2+1")],
  136: ["E5+G#5/2+4:4 C#5+C#6/1+5:4 E5+G#5/2+4:4 C#5+C#6/1+5:4", "C#3+E3+G#3+C#4/5+4+2+1:4 r:4 C#3+E3+G#3+C#4/5+4+2+1:4 r:4"],
  137: ["E5+G#5/2+4:4 C#5+C#6/1+5:4 E5+G#5/2+4:4 D#5+F#5/2+4:4", "C#3+E3+G#3+C#4/5+4+2+1:4 r:4 G#2+G#3/5+1:4 r:4"],
  138: ["C#5+E5/1+3:4 B#4+D#5/1+3:4 C#5/1:4 E5+G#5/2+4:2 E5+G#5/2+4:2", "C#3+G#3/5+1:4 C#3+F#3+A3/5+2+1:4 C#3+E3+G#3/5+3+1:4 C#3+E3+G#3+C#4/5+4+2+1:2 C#3+E3+G#3+C#4/5+4+2+1:2"],
  139: 135,
  140: 136,
  141: ["E5+G#5/2+4:4 C#5+C#6/1+5:4 F#5+B5/2+5:4 E5+A#5/1+4:4", "C#3+E3+G#3+C#4/5+4+2+1:4 r:4 F#3+D#4/5+1:4 F#3+C#4/5+1:4"],
  // The natural on G3 holds to the bar's end, as in bar 42.
  142: ["D#5+B5/1+5:4 E5+A#5/1+4:4 D#5+B5/1+5:4 E5+G#5/2+4:2 E5+G#5/2+4:2", "B2+B3/5+1:4 B2+G3/5+2:4 B2+F#3/5+2:4 C#3+E3+G3+C#4/5+4+2+1:2 C#3+E3+G3+C#4/5+4+2+1:2"],
  143: 135,
  144: 136,
  145: ["E5+G#5/2+4:4 C#5+C#6/1+5:4 E5+G#5/2+4:4 D#5+F#5/1+3:4", "C#3+E3+G#3+C#4/5+4+2+1:4 r:4 G#2+G#3/5+1:4 r:4"],
  146: ["C#5+E5/1+3:4 B#4+D#5/1+2:4 C#5/1:4 E5+G#5/2+4:2 E5+G#5/2+4:2", "C#3+G#3/5+1:4 C#3+F#3+A3/5+2+1:4 C#3+E3+G#3/5+3+1:4 C#3+E3+G#3+C#4/5+4+2+1:2 C#3+E3+G#3+C#4/5+4+2+1:2"],
  147: 135,
  148: 136,
  149: 141,
  // Bar 150 (8.39): the soft shake over B.
  150: ["D#5+B5/1+4:2 A#5/3:2 C#6/5:2 A#5/3:2 B5/4:2 A#5/3:2 C#6/5:2 A#5/3:2", "B2+B3/5+1:4 r:4 r:4 B3+F#4/5+1:2 B3+F#4/5+1:2"],
  151: [times("B5/4:2 A#5/3:2 C#6/5:2 A#5/3:2", 2), "B3+F#4/5+1:4 B3+F#4/5+1:2 B3+F#4/5+1:2 B3+F#4/5+1:4 E4+G#4/2+1:4"],
  152: [times("B5/4:2 A#5/3:2 C#6/5:2 A#5/3:2", 2), "F#4+A4/2+1:4 B3+F#4/5+1:8 F#4+A4/2+1:4"],
  153: [times("B5/4:2 A#5/3:2 C#6/5:2 A#5/3:2", 2), "E4+G#4/2+1:4 G#3+E4/5+1:8 E4+G#4/2+1:4"],
  154: [times("B5/4:2 A#5/3:2 C#6/5:2 A#5/3:2", 2), "B3+F#4/5+1:4 B2+B3/5+1:4 B2+B3/5+1:4 B3+F#4/5+1:2 B3+F#4/5+1:2"],
  155: 151,
  156: 152,
  157: 153,
  // Bar 158 (8.47): the tune, pianissimo.
  158: ["B5/5:4 B4/1:2 B4/1:2 B4/1:4 B3/1:2 B3/1:2", "B3+F#4/5+1:4 r:4 r:4 E3+G#3/3+1:2 E3+G#3/3+1:2"],
  159: 23,
  160: ["B3+E4/1+3:4 B3+F#4/1+4:4 B3+G#4/1+5:4 B3/1:2 B3/1:2", "E3+G#3/3+1:4 E3+G#3/3+1:4 E3+G#3/3+1:4 E3+G#3/3+1:2 E3+G#3/3+1:2"],
};

/** The left hand's tremolo of `chord` and `note`, in 16ths for the whole bar. */
function tremolo(chord: string, note: string): string {
  return times(`${chord}:2 ${note}:2`, 4);
}

/**
 * Printed page 9, bars 161 to 206: the print's page bars 9.1 to 9.46.
 * - Bars 161 to 166 (9.1 to 9.6): the tune's end.
 * - Bars 167 to 173 (9.7 to 9.13): the tune in octaves over a left-hand tremolo, fortissimo.
 * - Bars 174 to 181 (9.14 to 9.21): scales that climb to a high third, over a climbing bass.
 * - Bars 182 to 197 (9.22 to 9.37): broken octaves over C major, E major, C sharp and C, then falling octaves.
 * - Bars 198 to 206 (9.38 to 9.46): the climbing scales again.
 */
const PAGE_9: Record<number, OriginalBar> = {
  161: ["B3/1:4 B3/1:2 B3/1:2 B3+E4/1+5:4 B3+G#4/1+5:2 B3+G#4/1+5:2", gallop("E3+G#3/5+3")],
  162: ["B3+F#4/1+5:4 B3+D#4/1+3:4 B3/1:4 B3/1:2 B3/1:2", "B2+D#3+F#3/5+3+1:4 B2+D#3+F#3/5+3+1:4 B2+D#3+F#3/5+3+1:4 E3+G#3/5+3:2 E3+G#3/5+3:2"],
  163: 63,
  164: ["B3+E4/1+5:4 B3+F#4/1+5:4 B3+G#4/1+5:4 E4/2:2 G#4/4:2", "E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3+B3/5+3+1:2 E3+G#3+B3/5+3+1:2"],
  165: 65,
  166: ["E4/2:8 r:4 B4+B5/1+5:2 B4+B5/1+5:2", "E3+G#3/5+3:4 E3+G#3/5+3:4 E3+G#3/5+3:4 r:4"],
  // Bar 167 (9.7): the tune in octaves over a tremolo, with a pedal of ours.
  167: [gallop("B4+B5/1+5"), tremolo("E2+G#2+B2/5+3+1", "E3/1"), "P:16"],
  168: ["E5+E6/1+5:4 F#5+F#6/1+5:4 G#5+G#6/1+5:4 B4+B5/1+5:2 B4+B5/1+5:2", tremolo("E2+G#2+B2/5+3+1", "E3/1"), "P:16"],
  169: ["B4+B5/1+5:4 B4+B5/1+5:2 B4+B5/1+5:2 E5+E6/1+5:4 G#5+G#6/1+5:2 G#5+G#6/1+5:2", tremolo("E2+G#2+B2/5+3+1", "E3/1"), "P:16"],
  170: ["F#5+F#6/1+5:4 D#5+D#6/1+5:4 B4+B5/1+5:4 B4+B5/1+5:2 B4+B5/1+5:2", tremolo("B2+D#3+F#3/5+3+1", "B3/1"), "P:16"],
  171: 167,
  172: ["E5+E6/1+5:4 F#5+F#6/1+5:4 G#5+G#6/1+5:4 E5/1:2 G#5/3:2", tremolo("E2+G#2+B2/5+3+1", "E3/1"), "P:16"],
  173: ["B5/5:10 A5/4:2 G#5/3:2 F#5/2:2", tremolo("B2+D#3+F#3/5+3+1", "A3/1"), "P:16"],
  // Bar 174 (9.14): the climbing scales. The print ties the left chord into the next bar's first eighth.
  174: ["E5/1:2 F#5/2:2 G#5/3:2 A5/4:2 G#5/1:2 A5/2:2 B5/3:2 C#6/5:2", `E3+G#3/5+3:6 ${E4V}:2 ${E4V}:8~`],
  175: ["B5/1:2 C#6/2:2 D#6/3:2 E6/4:2 D#6/1:2 E6/2:2 F#6/3:2 G#6/5:2", `${E4V}:4 B3/1:4 G#3/3:4 E3/5:4`],
  176: [times("F#6+A6/3+5:2 A5/1:2", 4), "B2/5:4 C3/4:4 C#3/3:4 D3/2:4"],
  177: [times("F#6+A6/3+5:2 A5/1:2", 4), "D3/3:4 F#3/2:4 B3/1:4 B2/5:4"],
  178: ["E5/1:2 F#5/2:2 G#5/3:2 A5/4:2 G#5/1:2 A5/2:2 B5/3:2 C#6/5:2", `E3/5:6 ${E4V}:2 ${E4V}:8~`],
  179: 175,
  180: 176,
  181: [times("F#6+A6/3+5:2 A5/1:2", 4), "D#3/3:4 F#3/2:4 B3/1:4 B2/5:4"],
  // Bar 182 (9.22): broken octaves over moving chords.
  182: ["r:2 G#5/1:2 G#6/5:2 G#5/1:2 r:2 D#5/1:2 D#6/5:2 D#5/1:2", "E3+G#3+B3/5+3+1:4 r:4 G#2+B#2+D#3+G#3/5+4+2+1:4 r:4"],
  183: ["r:2 E5/1:2 E6/5:2 E5/1:2 r:2 A5/1:2 A6/5:2 A5/1:2", "C#3+E3+G#3/5+3+1:4 r:4 B2+D#3+F#3+B3/5+4+2+1:4 r:4"],
  184: 182,
  185: 183,
  186: ["r:2 G5/1:2 G6/5:2 G5/1:2 G6/5:2 G5/1:2 G6/5:2 G5/1:2", "E3+G3+C4/5+3+1:4 E3+G3+C4/5+3+1:4 E3+G3+C4/5+3+1:4 E3+G3+C4/5+3+1:4"],
  187: ["G6/5:2 G5/1:2 E6/4:2 G5/1:2 C6/2:2 G5/1:2 E6/4:2 G5/1:2", "E3+G3+C4/5+3+1:4 r:4 r:8"],
  188: [times("G#6/5:2 G#5/1:2", 4), "E3+G#3+B3/5+3+1:4 E3+G#3+B3/5+3+1:4 E3+G#3+B3/5+3+1:4 E3+G#3+B3/5+3+1:4"],
  189: ["G#6/5:2 G#5/1:2 E6/4:2 G#5/1:2 B5/2:2 G#5/1:2 E6/4:2 G#5/1:2", "E3+G#3+B3/5+3+1:4 r:4 r:8"],
  190: [times("G#6/5:2 G#5/1:2", 4), "C#3+E#3+B3/5+3+1:4 C#3+E#3+B3/5+3+1:4 C#3+E#3+B3/5+3+1:4 C#3+E#3+B3/5+3+1:4"],
  191: ["G#6/5:2 G#5/1:2 E#6/4:2 G#5/1:2 C#6/2:2 G#5/1:2 E#6/4:2 G#5/1:2", "C#3+E#3+B3/5+3+1:4 r:4 r:8"],
  192: [times("A#6/5:2 A#5/1:2", 4), "C3+E3+G3/5+3+1:4 C3+E3+G3/5+3+1:4 C3+E3+G3/5+3+1:4 C3+E3+G3/5+3+1:4"],
  // The print gives this bar's first high A no sign. A natural would clash with the A#5 after it, and the
  // matching bars repeat the bar before's top note, so the missing sharp is a misprint.
  193: ["A#6/5:2 A#5/1:2 G6/4:2 A#5/1:2 E6/2:2 A#5/1:2 G6/4:2 A#5/1:2", "C3+E3+G3/5+3+1:4 r:4 r:8"],
  194: ["B6/5:4 A#5/1:2 A#6/5:2 A5/1:2 A6/5:2 G#5/1:2 G#6/5:2", tremolo("B2+E3+G#3/5+3+1", "B3/1")],
  195: ["F#5/1:2 F#6/5:2 E5/1:2 E6/5:2 D#5/1:2 D#6/5:2 C#5/1:2 C#6/5:2", tremolo("B2+E3+G#3/5+3+1", "B3/1")],
  196: ["B4/1:2 B5/5:2 A#4/1:2 A#5/5:2 A4/1:2 A5/5:2 G#4/1:2 G#5/5:2", tremolo("B2+D#3+F#3/5+3+1", "B3/1")],
  197: ["F#4/1:2 F#5/5:2 E4/1:2 E5/5:2 D#4/1:2 D#5/5:2 F#4/1:2 F#5/5:2", tremolo("B2+D#3+F#3/5+3+1", "B3/1")],
  // Bar 198 (9.38): the climbing scales again.
  198: 174,
  199: 175,
  200: 176,
  201: 181,
  202: 178,
  203: 175,
  204: 176,
  205: 181,
  206: 182,
};

/**
 * Printed page 10, bars 207 to 252: the print's page bars 10.1 to 10.46, the end.
 * - Bars 207 to 221 (10.1 to 10.15): the broken octaves and the falling octaves once more.
 * - Bars 222 to 229 (10.16 to 10.23): the tune's last call, rising octaves, and a bar of rest.
 * - Bars 230 to 235 (10.24 to 10.29): a chromatic scale up, then a shake of E and D sharp over E and B.
 * - Bars 236 to 252 (10.30 to 10.46): the coda on E major, falling through its chord to the last chord.
 */
const PAGE_10: Record<number, OriginalBar> = {
  // Bars 207 to 209 (p10.1 to p10.3) are engraved as p9.23, p9.22 and p9.23.
  207: 183,
  208: 182,
  209: 183,
  210: ["r:2 G5/2:2 G6/5:2 G5/2:2 G6/5:2 G5/2:2 G6/5:2 G5/2:2", "E3+G3+C4/5+2+1:4 E3+G3+C4/5+2+1:4 E3+G3+C4/5+2+1:4 E3+G3+C4/5+2+1:4"],
  211: ["G6/5:2 G5/2:2 E6/4:2 G5/2:2 C6/4:2 G5/2:2 E6/4:2 G5/2:2", "E3+G3+C4/5+2+1:4 r:4 r:8"],
  212: [times("G#6/5:2 G#5/2:2", 4), "E3+G#3+B3/5+2+1:4 E3+G#3+B3/5+2+1:4 E3+G#3+B3/5+2+1:4 E3+G#3+B3/5+2+1:4"],
  213: ["G#6/5:2 G#5/1:2 E6/4:2 G#5/1:2 B5/3:2 G#5/1:2 E6/4:2 G#5/1:2", "E3+G#3+B3/5+2+1:4 r:4 r:8"],
  214: 190,
  215: ["G#6/5:2 G#5/1:2 E#6/4:2 G#5/1:2 C#6/5:2 G#5/1:2 E#6/4:2 G#5/1:2", "C#3+E#3+B3/5+3+1:4 r:4 r:8"],
  216: 192,
  // The print gives this bar's first high A no sign, a misprint as in bar 193.
  217: ["A#6/5:2 A#5/1:2 G6/5:2 A#5/1:2 E6/4:2 A#5/1:2 G6/5:2 A#5/1:2", "C3+E3+G3/5+3+1:4 r:4 r:8"],
  218: ["B6/5:4 A#5/1:2 A#6/5:2 A5/1:2 A6/5:2 G#5/1:2 G#6/5:2", tremolo("B2+E3+G#3/5+2+1", "B3/1")],
  219: ["F#5/1:2 F#6/5:2 E5/1:2 E6/5:2 D#5/1:2 D#6/5:2 C#5/1:2 C#6/5:2", tremolo("B2+E3+G#3/5+2+1", "B3/1")],
  220: 196,
  221: 197,
  // Bar 222 (10.16): the tune's last call.
  222: ["E5/2:2 D#5/1:2 E5/2:2 D#5/1:2 E5/2:4 B4+B5/1+5:2 B4+B5/1+5:2", "E3+G#3+B3/5+2+1:4 r:4 r:4 B3/1:2 B3/1:2"],
  223: [gallop("B4+B5/1+5"), gallop("B3/1")],
  224: ["E5+E6/1+5:4 F#5+F#6/1+5:4 G#5+G#6/1+5:4 B4+B5/1+5:2 B4+B5/1+5:2", "E4/1:4 F#4/2:4 G#4/3:4 B3/1:2 B3/1:2"],
  225: 223,
  226: ["G#5+G#6/1+5:4 A5+A6/1+5:4 B5+B6/1+5:4 r:4", "G#4/3:4 A4/2:4 B4/1:4 r:4"],
  227: ["E5+E6/1+5:4 F#5+F#6/1+5:4 G#5+G#6/1+5:4 r:4", "E4/3:4 F#4/2:4 G#4/1:4 r:4"],
  228: ["G#4+G#5/1+5:4 A4+A5/1+5:4 B4+B5/1+5:4 r:4", "G#3/3:4 A3/2:4 B3/1:4 r:4"],
  229: ["r:16", "r:16"],
  // Bar 230 (10.24): the chromatic scale.
  230: ["B4/1:2 B#4/2:2 C#5/3:2 D5/1:2 D#5/3:2 E5/1:2 E#5/2:2 F#5/3:2", tremolo("B2+D#3+F#3/5+3+1", "B3/1")],
  231: ["G5/1:2 G#5/3:2 A5/1:2 A#5/3:2 B5/1:2 B#5/2:2 C#6/3:2 D#6/4:2", tremolo("B2+D#3+F#3/5+3+1", "B3/1")],
  232: [times("E6/5:2 D#6/4:2 F#6/5:2 D#6/4:2", 2), "E3+G#3/5+1:4 B2+A3/5+1:4 E3+G#3/5+1:4 B2+A3/5+1:4"],
  233: [times("E6/5:2 D#6/4:2 F#6/5:2 D#6/4:2", 2), "E3+G#3/3+1:4 B2+A3/5+1:4 E3+G#3/3+1:4 B2+A3/5+1:4"],
  234: 233,
  235: 233,
  // Bar 236 (10.30): the coda, with a pedal of ours over its E major figure.
  236: ["E6/5:4 E6/5:2 E5/1:2 E6/5:2 E5/1:2 E6/5:2 E5/1:2", "E3+G#3/3+1:4 r:4 E3+G#3+B3/5+2+1:2 E4/1:2 E3+G#3+B3/5+2+1:2 E4/1:2", "P:16"],
  237: ["E6/5:4 B5/4:2 B4/1:2 B5/4:2 B4/1:2 B5/4:2 B4/1:2", tremolo("E3+G#3+B3/5+2+1", "E4/1"), "P:16"],
  238: ["B5/4:4 G#5/3:2 G#4/1:2 G#5/3:2 G#4/1:2 G#5/3:2 G#4/1:2", tremolo("E3+G#3+B3/5+2+1", "E4/1"), "P:16"],
  239: ["G#5/4:4 E5/2:2 B4/1:2 E5/2:2 B4/1:2 E5/2:2 B4/1:2", tremolo("E3+G#3+B3/5+2+1", "E4/1"), "P:16"],
  240: ["E5/3:4 E5/3:2 E5/3:2 E5/3:4 E5/3:4", "E3+G#3+B3/5+2+1:4 E3+E4/5+1:4 E3+E4/5+1:4 E3+E4/5+1:4"],
  241: ["E5/3:4 B4/1:2 B4/1:2 B4/1:4 B4/1:4", "E3+E4/5+1:4 B2+B3/5+1:4 B2+B3/5+1:4 B2+B3/5+1:4"],
  242: ["B4/3:4 G#4/1:2 G#4/1:2 G#4/1:4 G#4/1:4", "B2+B3/5+1:4 G#2+G#3/5+1:4 G#2+G#3/5+1:4 G#2+G#3/5+1:4"],
  243: ["G#4/3:4 E4/1:2 E4/1:2 E4/1:4 E4/1:4", "G#2+G#3/5+1:4 E2+E3/5+1:4 E2+E3/5+1:4 E2+E3/5+1:4"],
  244: ["E4/3:4 B3/1:4 E4/3:4 B3/1:4", "E2+E3/5+1:4 B2/5:4 E3/3:4 B2/5:4"],
  245: ["G#4/3:4 E4/1:4 B4/4:4 G#4/3:4", "G#3/3:4 E3/5:4 B3/1:4 G#3/3:4"],
  246: ["E5/3:4 B4/1:4 E5/3:4 B4/1:4", "E3+E4/5+1:4 B2/5:4 E3/3:4 B2/5:4"],
  247: ["G#5/4:4 E5/3:4 B5/5:4 G#5/4:4", "G#3/3:4 E3/5:4 B3/1:4 G#3/3:4"],
  248: ["E6/5:8 r:4 E5+G#5+E6/1+2+5:2 E5+G#5+E6/1+2+5:2", "E4/1:8 r:4 E4/1:2 E4/1:2"],
  249: [times("E5+G#5+E6/1+2+5:4", 4), "E4/1:4 B3/2:4 G#3/3:4 B3/2:4"],
  250: ["E5+G#5+E6/1+2+5:8 r:6 E5+G#5+E6/1+2+5:2", "E3/3:8 r:6 E3+B3+E4/5+2+1:2"],
  251: ["E5+G#5+E6/1+2+5:4 r:4 r:6 G#3+E4/1+5:2", "E3+B3+E4/5+2+1:4 r:4 r:6 E2+B2+E3/5+2+1:2"],
  252: ["G#3+E4/1+5:16", "E2+B2+E3/5+2+1:16", "P:16"],
};

/** The Original's bars, by their number from 1. */
const PRINT_BARS: Record<number, OriginalBar> = { ...PAGE_6, ...PAGE_7, ...PAGE_8, ...PAGE_9, ...PAGE_10 };

/** The number of the Original's bars: the whole finale. */
const PRINT_BAR_COUNT = 252;

/** Bar `at` of the Original, with a repeated bar read from the bar it repeats. */
function printBar(at: number): PrintBar {
  const bar = PRINT_BARS[at];
  if (bar === undefined) throw new Error(`William Tell's Original has no bar ${at}`);
  return typeof bar === "number" ? printBar(bar) : bar;
}

/** One line of the Original: `part` of each bar, in the print's order. */
function printLine(part: 0 | 1 | 2): string {
  return Array.from({ length: PRINT_BAR_COUNT }, (_, at) => printBar(at + 1)[part] ?? "r:16").join(" | ");
}

export const williamTell: OurSong = {
  slug: "william-tell",
  title: "William Tell Overture",
  aka: ["William Tell", "Guillaume Tell", "Wilhelm Tell", "March of the Swiss Soldiers"],
  source: {
    composer: "Gioachino Rossini",
    died: 1868,
    published: 1829,
    edition:
      "William Tell Overture, the first phrase of its finale, the top voice of Louis Niedermeyer's piano reduction, printed by E. Troupenas in Paris between 1829 and 1830, as Gallica's scan on Wikimedia Commons shows it",
  },
  about:
    "Rossini's opera William Tell premiered in 1829, and it was the last of his 39 operas. " +
    "Its overture ends with a fast galop, often called the March of the Swiss Soldiers. " +
    "That finale became the theme music of The Lone Ranger on radio, television and film.",
  funFact: "Some writers have defined an intellectual as a man who can listen to the William Tell Overture without thinking of the Lone Ranger.",
  mythic: {
    key: E_MAJOR,
    bpm: 152,
    numerator: 2,
    denominator: 4,
    steps: 8,
    right: printLine(0),
    left: printLine(1),
    pedal: printLine(2),
    source: {
      edition:
        "William Tell Overture, the finale, in Louis Niedermeyer's two-hand piano reduction, printed by E. Troupenas in Paris as plate 329, Gallica's scan btv1b90674594 on Wikimedia Commons, printed pages 6 to 10",
      printed: 1830,
    },
    skills: ["sixteenth-notes", "thirds-and-sixths", "melody-in-chords"],
    practice: [
      { text: "Play bars 18 to 25 slowly with the right hand alone. This is the galop's tune, over a repeated B.", hands: "right", speed: 0.5, loop: [18, 25], wait: true },
      { text: "Play bars 26 to 35 with the right hand alone. Keep the hand open in an octave, and let it bounce from key to key.", hands: "right", speed: 0.5, loop: [26, 35], wait: true },
      { text: "Play bars 36 to 49 with the left hand alone. It jumps between full chords in C sharp minor.", hands: "left", speed: 0.5, loop: [36, 49], wait: true },
      { text: "Play the 16ths of bars 112 to 126 with the right hand alone. Keep every note short and even.", hands: "right", speed: 0.5, loop: [112, 126], wait: false },
      { text: "Play the whole finale with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 17, kind: "sound", text: "The opening sounds like trumpets. Play the repeated B crisply, and hold the B major chord of bar 15 through bar 16, into bar 17." },
      { fromBar: 18, toBar: 25, kind: "rhythm", text: "Say \"long, short, short\" as you play. Each beat is an eighth and two 16ths, like a galloping horse." },
      { fromBar: 76, toBar: 77, kind: "fingering", text: "In the broken octaves, the thumb takes the low note and finger 5 the high one. Let the wrist rock between them." },
      { fromBar: 167, toBar: 173, kind: "sound", text: "The left hand shakes between a low chord and one note above it. Keep it light, so the octaves on top ring out." },
      { fromBar: 236, toBar: 252, kind: "sound", text: "The coda stays on E major to the end. Keep the beat steady as the notes fall, and let the last chord ring." },
    ],
    tricky: {
      210: "The right hand jumps between G and the G an octave higher, with fingers 2 and 5. The left hand repeats a C major chord, whose G and C are white keys.",
      212: "The right hand shakes between two G sharps an octave apart, with fingers 5 and 2. The left hand plays an E major chord on every eighth.",
      224: "Both hands climb through E, F sharp and G sharp, the right in octaves. Then the right hand drops to the octave on B, and the left hand to B.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: E_MAJOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        COMMON_HEAD,
        COMMON_BODY,
        "C5/3:4 C5/3:2 C5/3:2 C5/3:4 E5/5:2 E5/5:2 | D5/4:4 D5/4:2 D5/4:2 B4/2:4 G4/1:4",
        "C5/3:4 E5/5:4 D5/4:4 B4/2:4 | C5/3:8 r:4 G4/1:2 G4/1:2",
        COMMON_BODY,
        "E5/5:4 E5/5:2 E5/5:2 C5/3:4 C5/3:2 C5/3:2 | E5/5:4 D5/4:2 C5/3:2 D5/4:4 B4/2:4 | C5/3:16",
      ].join(" | "),
      left: held(`${HEAD_CHORDS}fivvivii${TUNE_CHORDS}ifivii`),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play bars 6 to 9 with the right hand alone. They answer the tune with the same rhythm.", hands: "right", speed: 0.6, loop: [6, 9], wait: true },
        { text: "Now the left hand alone. It holds one shape for half a bar or a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first nine bars, slowly.", hands: "both", speed: 0.7, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Say \"long, short, short\" as you play. That rhythm is the gallop of a horse." },
        { fromBar: 3, toBar: 3, kind: "trick", text: "Lift finger 5 from E a little early. Then the thumb lands on the low G in time." },
        { fromBar: 1, toBar: 16, kind: "fingering", text: "Each finger keeps its own key. The thumb plays every G." },
      ],
      tricky: {
        7: "Finger 4 plays D three times. Then fingers 2 and 1 step down to B and G.",
        8: "Finger 3 plays C, then finger 5 skips up to E. The left hand changes to D and G halfway.",
        15: "Fingers 5, 4 and 3 walk down from E to C. The left hand changes to D and G for the last two notes.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 168,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        RARE_HEAD,
        RARE_BODY,
        "D4+G4/1+3:2 G4/3:1 G4/3:1 D4+G4/1+3:2 B4/5:1 B4/5:1 | F#4+A4/2+4:2 A4/4:1 A4/4:1 F#4+A4/2+4:2 G4/3:1 F#4/2:1",
        "G4+B4/3+5:2 B4/5:1 A4/4:1 G4/3:2 F#4+A4/2+4:2 | G4+B4/3+5:4 r:2 D4/1:1 D4/1:1",
        RARE_BODY,
        "B4/5:2 B4/5:1 B4/5:1 G4/3:2 G4/3:1 G4/3:1 | A4/4:2 A4/4:1 A4/4:1 B4/5:2 G4/3:2",
        "D4+G4/1+3:2 G4/3:1 A4/4:1 F#4+A4/2+4:4 | G4+B4/3+5:4 r:2 D4/1:1 D4/1:1",
        RARE_BODY,
        "B4/5:2 B4/5:1 B4/5:1 D4+G4/1+3:2 G4/3:1 G4/3:1 | G4+B4/3+5:2 A4/4:1 G4/3:1 F#4+A4/2+4:4 | D4+G4/1+3:8",
      ].join(" | "),
      left: `${bars(RARE_LEFT, `${HEAD_CHORDS}fiv7ivii${TUNE_CHORDS}ifvif7ii${TUNE_CHORDS}ifi7`)} | G2+B2+D3/5+3+1:8`,
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play the first five bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 5], wait: true },
        { text: "Play the left hand alone. It plays one chord on each half bar.", hands: "left", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed, like a galloping horse.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 5, kind: "rhythm", text: "Count four beats in each bar, two quarters to a beat. The left hand plays on every beat." },
        { fromBar: 6, toBar: 9, kind: "fingering", text: "The two-note chords use fingers 1 and 3, 2 and 4, or 3 and 5." },
        { fromBar: 1, toBar: 24, kind: "sound", text: "Play the repeated notes lightly, with a loose wrist, like hooves on a road." },
      ],
      tricky: {
        7: "Fingers 2 and 4 play F sharp and A together. Then finger 4 repeats A alone.",
        8: "The pairs move from G and B to F sharp and A. Keep the hand in place, and change only the fingers.",
        15: "Finger 4 repeats A, and finger 5 takes B. The left hand goes back to G, B and D halfway.",
      },
    },
    epic: {
      key: A_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(EPIC_HEAD),
        inEighths(EPIC_BODY),
        "A4/1:4 A4/1:2 A4/1:2 D5/3:4 F#5/5:2 F#5/5:2 | E5/4:4 E5/4:2 E5/4:2 D5/3:2 C#5/2:2 B4/1:4",
        "A4/1:1 B4/2:1 C#5/3:1 D5/4:1 E5/5:4 D5/4:2 B4/2:2 G#4/1:4 | A4/2:8 r:4 C#4+E4/1+3:2 C#4+E4/1+3:2",
        staccato(EPIC_SIXTHS),
        "C#5/3:4 C#5/3:2 C#5/3:2 D5/4:4 F#5/5:2 F#5/5:2 | E5/5:4 C#5/3:2 A4/1:2 D5/4:2 B4/2:2 G#4/1:2 B4/2:2",
        "F#5/5:4 D5/4:2 A4/2:2 B4/3:4 G#4/2:2 E4/1:2 | A4/3:8 r:4 E5/1:2 E5/1:2",
        inEighths(octaveUp(EPIC_BODY)),
        "C#5+A5/1+5:4 C#5+A5/1+5:2 C#5+A5/1+5:2 D5+A5/1+5:4 D5+F#5/1+3:2 D5+F#5/1+3:2",
        "E5+C#6/1+5:4 C#5+A5/1+5:4 B4+G#5/1+5:4 D5+B5/1+5:4 | C#5+E5+A5/1+2+5:16",
      ].join(" | "),
      left: `${bars(ALBERTI, `${BIG_CHORDS}ifi7`)} | A2+E3+A3/5+2+1:16`,
      pedal: `${halfBarPedal(23)} | P:16`,
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each half bar rocks from the low note to the two notes above.", hands: "left", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Play the right hand's sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [10, 13], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 9, kind: "sound", text: "Change the pedal on every half bar, as the bass note comes back." },
        { fromBar: 8, toBar: 8, kind: "fingering", text: "The run climbs from A to E with fingers 1 to 5. Keep the wrist level." },
        { fromBar: 10, toBar: 13, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        9: "Finger 2 holds A after the thumb's G sharp. Then the hand drops to C sharp and E for the next bar.",
        14: "Finger 3 repeats C sharp, then fingers 4 and 5 reach up to D and F sharp.",
        17: "Use the rest after the long A to move the thumb up to the high E.",
      },
    },
    legendary: {
      key: E_MAJOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [
        inEighths(LEGENDARY_HEAD),
        inEighths(LEGENDARY_BODY),
        "C#5+E5+A5/1+2+5:4 C#5+E5+A5/1+2+5:2 C#5+E5+A5/1+2+5:2 A4/1:1 B4/2:1 C#5/3:1 E5/4:1 A5/5:4",
        "G#5/5:2 E5/3:2 B4/1:2 E5/3:2 A5/5:2 F#5/4:2 D#5/2:2 B4/1:2",
        "E5/1:1 F#5/2:1 G#5/3:1 A5/4:1 B5/5:4 A5/5:2 F#5/3:2 D#5/2:2 B4/1:2",
        "G#4+B4+E5/1+2+5:8 r:4 B3+B4/1+5:2 B3+B4/1+5:2",
        staccato(LEGENDARY_OCTAVES),
        "B5/5:4 B5/5:2 B5/5:2 A5/4:4 A5/4:2 A5/4:2 | G#5/3:2 A5/4:2 B5/5:2 G#5/3:2 A5/4:2 F#5/2:2 D#5/1:4",
        "E5/1:1 F#5/2:1 G#5/3:1 A5/4:1 C#6/5:4 B5/5:2 A5/4:1 G#5/3:1 F#5/2:2 D#5/1:2",
        "E5/1:8 r:4 E4+G#4+B4/1+3+5:2 E4+G#4+B4/1+3+5:2",
        staccato(LEGENDARY_CHORDS),
        "A4+C#5+E5+A5/1+2+3+5:4 A4+C#5+E5+A5/1+2+3+5:2 A4+C#5+E5+A5/1+2+3+5:2 A4+B4+D#5+F#5/1+2+3+5:4 A4+B4+D#5+F#5/1+2+3+5:2 A4+B4+D#5+F#5/1+2+3+5:2",
        "E5/1:1 F#5/2:1 G#5/3:1 A5/4:1 B5/5:4 A5/5:2 F#5/4:2 D#5/2:2 B4/1:2",
        "E4+G#4+B4+E5/1+2+3+5:16",
      ].join(" | "),
      left: `${bars(STRIDE, `${BIG_CHORDS}f7i7`)} | E2+B2+E3/5+2+1:16`,
      pedal: `${halfBarPedal(23)} | P:16`,
      skills: ["stride", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: a low octave, a chord, another octave, a chord.", hands: "left", speed: 0.5, loop: [1, 5], wait: true },
        { text: "Play the right hand's octaves alone. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [10, 13], wait: true },
        { text: "Join the hands on the first nine bars, slowly.", hands: "both", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 9, kind: "trick", text: "In the left hand, let the arm swing between the low octave and the chord." },
        { fromBar: 10, toBar: 13, kind: "sound", text: "Let the little finger sing the top note of each octave a little louder." },
        { fromBar: 18, toBar: 21, kind: "fingering", text: "The tune is the top note of each chord. Finger 5 plays it every time." },
      ],
      tricky: {
        13: "The octaves fall from F sharp to B. Keep the hand open, and let it bounce on each one.",
        21: "The chords step down. Keep finger 5 on the top note, and let the hand bounce.",
        22: "The thumb stays on A. Fingers 2, 3 and 5 move from C sharp, E and A to B, D sharp and F sharp.",
      },
    },
  },
  de: {
    about:
      "Rossinis Oper Wilhelm Tell wurde 1829 uraufgeführt, und sie war die letzte seiner 39 Opern. " +
      "Ihre Ouvertüre endet mit einem schnellen Galopp, oft Marsch der Schweizer Soldaten genannt. " +
      "Dieses Finale wurde die Titelmusik von The Lone Ranger in Radio, Fernsehen und Film.",
    funFact: "Manche Autoren nennen einen Intellektuellen jemanden, der die Wilhelm-Tell-Ouvertüre hören kann, ohne an den Lone Ranger zu denken.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten fünf Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 6 bis 9 nur mit der rechten Hand. Sie antworten der Melodie im gleichen Rhythmus.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen halben oder einen ganzen Takt lang.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Sag beim Spielen \"lang, kurz, kurz\". Dieser Rhythmus ist der Galopp eines Pferdes.",
          "Heb Finger 5 etwas früher vom E. Dann landet der Daumen rechtzeitig auf dem tiefen G.",
          "Jeder Finger bleibt auf seiner eigenen Taste. Der Daumen spielt jedes G.",
        ],
        tricky: {
          7: "Finger 4 spielt das D dreimal. Dann steigen Finger 2 und 1 hinab zu H und G.",
          8: "Finger 3 spielt das C, dann springt Finger 5 hinauf zum E. Die linke Hand wechselt in der Mitte zu D und G.",
          15: "Finger 5, 4 und 3 gehen vom E hinab zum C. Für die letzten zwei Töne wechselt die linke Hand zu D und G.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten fünf Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Sie spielt auf jedem halben Takt einen Akkord.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo, wie ein galoppierendes Pferd.",
        ],
        tips: [
          "Zähl in jedem Takt vier Schläge, zwei Viertel pro Schlag. Die linke Hand spielt auf jedem Schlag.",
          "Die Zweiklänge nehmen Finger 1 und 3, 2 und 4 oder 3 und 5.",
          "Spiel die wiederholten Töne leicht, mit lockerem Handgelenk, wie Hufe auf einer Straße.",
        ],
        tricky: {
          7: "Finger 2 und 4 spielen Fis und A zusammen. Dann wiederholt Finger 4 das A allein.",
          8: "Die Paare wandern von G und H zu Fis und A. Lass die Hand an ihrem Platz, und wechsle nur die Finger.",
          15: "Finger 4 wiederholt das A, und Finger 5 nimmt das H. In der Mitte geht die linke Hand zurück zu G, H und D.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder halbe Takt schaukelt vom tiefen Ton zu den zwei Tönen darüber.",
          "Spiel die Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal auf jedem halben Takt, wenn der Basston wiederkommt.",
          "Der Lauf steigt mit Finger 1 bis 5 vom A zum E. Halt das Handgelenk ruhig.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          9: "Finger 2 hält das A nach dem Gis des Daumens. Dann geht die Hand für den nächsten Takt hinab zu Cis und E.",
          14: "Finger 3 wiederholt das Cis, dann greifen Finger 4 und 5 hinauf zu D und Fis.",
          17: "Nutz die Pause nach dem langen A, um den Daumen hinauf zum hohen E zu bringen.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine tiefe Oktave, ein Akkord, noch eine Oktave, ein Akkord.",
          "Spiel die Oktaven der rechten Hand allein. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel die ersten neun Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Lass in der linken Hand den Arm zwischen der tiefen Oktave und dem Akkord schwingen.",
          "Lass den kleinen Finger den oberen Ton jeder Oktave etwas lauter singen.",
          "Die Melodie ist der obere Ton jedes Akkords. Finger 5 spielt sie jedes Mal.",
        ],
        tricky: {
          13: "Die Oktaven fallen vom Fis zum H. Halt die Hand offen, und lass sie auf jeder Oktave federn.",
          21: "Die Akkorde steigen hinab. Lass Finger 5 auf dem oberen Ton, und lass die Hand federn.",
          22: "Der Daumen bleibt auf dem A. Finger 2, 3 und 5 wandern von Cis, E und A zu H, Dis und Fis.",
        },
      },
    },
    original: {
      practice: [
        "Spiel die Takte 18 bis 25 langsam nur mit der rechten Hand. Das ist die Melodie des Galopps, über einem wiederholten H.",
        "Spiel die Takte 26 bis 35 nur mit der rechten Hand. Halt die Hand in einer Oktave offen, und lass sie von Taste zu Taste federn.",
        "Spiel die Takte 36 bis 49 nur mit der linken Hand. Sie springt zwischen vollen Akkorden in cis-Moll.",
        "Spiel die Sechzehntel der Takte 112 bis 126 nur mit der rechten Hand. Spiel jeden Ton kurz und gleichmäßig.",
        "Spiel das ganze Finale mit beiden Händen im vollen Tempo.",
      ],
      tips: [
        "Der Anfang klingt wie Trompeten. Spiel das wiederholte H knapp, und halte den H-Dur-Akkord von Takt 15 durch Takt 16 bis in Takt 17.",
        "Sag beim Spielen \"lang, kurz, kurz\". Jeder Schlag ist ein Achtel und zwei Sechzehntel, wie ein galoppierendes Pferd.",
        "Bei den gebrochenen Oktaven nimmt der Daumen den tiefen Ton und Finger 5 den hohen. Lass das Handgelenk zwischen ihnen schaukeln.",
        "Die linke Hand wechselt schnell zwischen einem tiefen Akkord und einem Ton darüber. Spiel sie leicht, damit die Oktaven oben klingen.",
        "Die Coda bleibt bis zum Schluss in E-Dur. Halt den Schlag gleichmäßig, während die Töne fallen, und lass den letzten Akkord klingen.",
      ],
      tricky: {
        210: "Die rechte Hand springt mit Finger 2 und 5 zwischen G und dem G eine Oktave höher. Die linke Hand wiederholt einen C-Dur-Akkord, dessen G und C weiße Tasten sind.",
        212: "Die rechte Hand wechselt mit Finger 5 und 2 zwischen zwei Gis im Oktavabstand. Die linke Hand spielt auf jedem Achtel einen E-Dur-Akkord.",
        224: "Beide Hände steigen über E, Fis und Gis, die rechte in Oktaven. Dann fällt die rechte Hand zur Oktave auf H und die linke zum H.",
      },
    },
  },
};

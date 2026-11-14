/**
 * *Morning Mood*: the flute's theme from Grieg's first *Peer Gynt* Suite, in four versions of ours and
 * an Original.
 *
 * The tune is the flute's theme in bars 1 to 4, from a scanned book of orchestral themes. The print is
 * in 6/8, Allegretto pastorale, in E major, and its grace notes are left out. The tune writes every
 * sixteenth as a quarter, so each print bar is a bar of 6/2. Its range is E5 to C sharp 6, and the hook
 * is all four bars.
 *
 * Every version writes the tune in 6/4 quarters, two bars per print bar, and then plays 8 bars of our
 * own. Epic and Legendary then play the tune again in another setting. The tune sits on the tonic, with
 * the dominant at the half of bar 7. Our own bars add the subdominant and the dominant. Epic and
 * Legendary put the sixth chord under the high C sharps of bar 6. Every version closes on the tonic.
 *
 * Common moves the song to C major and Rare to G major, where the tune keeps one hand position. E major
 * has four sharps, so Epic moves it to D major, and Legendary keeps E major.
 *
 * Common plays the tune over held open fifths and single bass notes, with the left hand still. Rare
 * plays a waltz bass in one place: a low note on the beat, then a chord or a single note twice. Epic
 * rolls an Alberti bass with the pedal, then plays the tune again with a third or a sixth under it.
 * Legendary plays an octave bass and a chord on each beat, arpeggios over two octaves under our own
 * bars, and the tune again in chords of three and four notes.
 *
 * The Original is Grieg's own piano version, as G. Schirmer printed it in 1899. It sets the whole piece,
 * 87 bars of 6/8 in E major. Each bar is 24 units of a 32nd, and the tempo is a dotted quarter at 60.
 * A grace note takes its time from the note it follows. Where nothing comes before it, it takes its time
 * from the note it leads to. Before bar 3, bar 2's last G sharp becomes the first of the two graces. Bar 3
 * then starts on its B, and the hook plays note for note. Each hand plays one chord at a time. A note held
 * under moving notes ends where the next one starts, and the pedal holds its sound. A tied note is never
 * struck again. A left-hand chord wider than a tenth's reach is rolled from its lowest note, as the print's
 * bracket asks.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const E_MAJOR: Key = { tonic: 4, mode: "major" };

/** The key Common moves the song to. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The key Rare moves the song to. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The key Epic moves the song to, since Epic allows three sharps. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The tune in 6/2, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "B5:2 G#5:2 F#5:2 E5:2 F#5:2 G#5:2 | B5:2 G#5:2 F#5:2 E5:2 F#5:1 G#5:1 F#5:1 G#5:1 | " +
  "B5:2 G#5:2 B5:2 C#6:2 G#5:2 C#6:2 | B5:2 G#5:2 F#5:2 E5:4 r:2";

/**
 * The tune in E major, in 6/4 quarters, two bars per print bar. Finger 5 takes B, and finger 3 takes G
 * sharp, since fingers 3 and 4 stretch badly over a minor third. In bars 9 and 10 finger 2 takes G sharp,
 * so finger 5 can reach C sharp. Finger 5 then steps back to B, the tune's one change of position.
 */
const TUNE_RIGHT = [
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:2 F#5/2:2 G#5/3:2",
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:2 F#5/2:1 G#5/3:1 F#5/2:1 G#5/3:1",
  "B5/5:2 G#5/2:2 B5/4:2 | C#6/5:2 G#5/2:2 C#6/5:2",
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:4 r:2",
].join(" | ");

/** Our eight bars after the tune, in E major quarters, on E, F sharp, G sharp and B, with the hand still. */
const OWN = [
  "B5/5:2 F#5/2:2 B5/5:2 | G#5/3:2 F#5/2:2 E5/1:2 | F#5/2:2 G#5/3:2 B5/5:2 | B5/5:4 F#5/2:2",
  "E5/1:2 F#5/2:2 B5/5:2 | G#5/3:2 E5/1:2 G#5/3:2 | F#5/2:2 G#5/3:2 F#5/2:2",
].join(" | ");

/** Our eight bars after the tune, in E major eighths, over A, E, C-sharp minor and B. */
const OWN_EIGHTHS = [
  "C#6/3:2 B5/2:2 A5/1:2 B5/2:2 C#6/3:2 E6/5:2 | B5/5:4 G#5/3:2 E5/1:2 F#5/2:2 G#5/3:2",
  "C#6/5:2 B5/4:2 G#5/3:2 F#5/2:2 E5/1:2 F#5/2:2 | F#5/2:4 D#5/1:2 F#5/2:2 B5/5:4",
  "A5/1:2 C#6/2:2 E6/4:2 C#6/2:2 B5/1:4 | B5/5:2 G#5/3:2 E5/1:2 G#5/3:2 B5/5:4",
  "F#5/2:2 B5/5:2 A5/4:2 F#5/2:2 D#5/1:2 F#5/2:2 | E5/1:12",
].join(" | ");

/** Epic's tune again in E major eighths, with a third or a sixth under most of its notes. */
const EPIC_TUNE_AGAIN = [
  "G#5+B5/3+4:4 E5+G#5/1+3:4 F#5/2:4 | E5/1:4 F#5/2:4 E5+G#5/1+3:4",
  "G#5+B5/3+4:4 E5+G#5/1+3:4 F#5/2:4 | E5/1:4 F#5/2:2 G#5/3:2 F#5/2:2 G#5/3:2",
  "G#5+B5/3+4:4 E5+G#5/1+3:4 G#5+B5/3+4:4 | E5+C#6/1+5:4 E5+G#5/1+3:4 E5+C#6/1+5:4",
  "G#5+B5/3+4:4 G#5/3:4 F#5/2:3 r:1 | G#4+B4+E5/1+2+5:12",
].join(" | ");

/** Legendary's tune again in E major eighths, in chords of three and four notes with the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "E5+G#5+B5/1+3+5:4 B4+E5+G#5/1+2+4:4 B4+F#5/1+4:4 | G#4+B4+E5/1+2+3:4 B4+F#5/1+4:4 B4+E5+G#5/1+2+4:4",
  "E5+G#5+B5/1+3+5:4 B4+E5+G#5/1+2+4:4 B4+F#5/1+4:4 | G#4+B4+E5/1+2+3:4 F#5/4:2 G#5/5:2 F#5/4:2 G#5/5:2",
  "E5+G#5+B5/1+3+5:4 B4+E5+G#5/1+2+4:4 E5+G#5+B5/1+3+5:4 | C#5+E5+G#5+C#6/1+2+3+5:4 C#5+E5+G#5/1+2+4:4 C#5+E5+G#5+C#6/1+2+3+5:4",
  "E5+G#5+B5/1+3+5:4 B4+G#5/1+4:4 B4+D#5+F#5/1+2+4:3 r:1 | E4+G#4+B4+E5/1+2+3+5:12",
].join(" | ");

/** The name of each pitch class, spelled with sharps, as C, G, D and E major spell them. */
const NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/** The pitch class of each note name. */
const CLASSES: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** `text` moved by `semitones`, with every note spelled by `NAMES`. */
function moved(text: string, semitones: number): string {
  return text.replace(/([A-G])(#?)(\d)(?=[/:+])/g, (_, letter: string, sharp: string, octave: string) => {
    const from = 12 * (Number(octave) + 1) + (CLASSES[letter] ?? 0) + (sharp === "#" ? 1 : 0);
    const to = from + semitones;
    return `${NAMES[to % 12]}${Math.floor(to / 12) - 1}`;
  });
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** `text` written `count` times, joined by spaces, as a trill or a tremolo repeats its pair. */
function times(text: string, count: number): string {
  return Array<string>(count).fill(text).join(" ");
}

/** Bars of `patterns` from `chords`, such as `"EEAB"`: one letter per half bar, two per bar. */
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

/** The chords under the tune, two per bar: E, A, B and C are E major, A major, B major and C-sharp minor. */
const TUNE_CHORDS = "EEEEEEEEEECCEBEE";

/** The chords under our eight bars, two per bar. */
const OWN_CHORDS = "AAEECCBBAAEEBBEE";

/** Common's left hand in C major quarters: an open fifth or one bass note, held, with the hand still. */
const COMMON_LEFT = [
  "C3+G3/5+1:6 | C3+G3/5+1:6 | C3+G3/5+1:6 | C3+G3/5+1:6",
  "C3+G3/5+1:6 | C3+G3/5+1:6 | C3+G3/5+1:3 D3+G3/4+1:3 | C3+G3/5+1:6",
  "F3/2:6 | C3+G3/5+1:6 | C3+G3/5+1:6 | D3+G3/4+1:6",
  "F3/2:6 | C3+G3/5+1:6 | D3+G3/4+1:6 | C3+G3/5+1:6",
].join(" | ");

/** Rare's half bar in G major quarters: a low note, then a two-note chord twice, with the hand still. */
const WALTZ: Record<string, string> = {
  g: "G2/5:1 B2+D3/3+1:1 B2+D3/3+1:1",
  c: "G2/5:1 A2+C3/4+2:1 A2+C3/4+2:1",
  d: "A2/4:1 D3/1:1 D3/1:1",
};

/** Epic's half bar in E major eighths: an Alberti group, low, high, middle, high, middle, high. */
const ALBERTI: Record<string, string> = {
  E: "E3/5:1 B3/1:1 G#3/3:1 B3/1:1 G#3/3:1 B3/1:1",
  A: "A2/5:1 E3/1:1 C#3/3:1 E3/1:1 C#3/3:1 E3/1:1",
  B: "B2/5:1 F#3/1:1 D#3/3:1 F#3/1:1 D#3/3:1 F#3/1:1",
  C: "C#3/5:1 G#3/1:1 E3/3:1 G#3/1:1 E3/3:1 G#3/1:1",
};

/** Legendary's half bar in eighths: an octave on the beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  E: ["E2+E3/5+1", "B2+E3+G#3/5+2+1"],
  A: ["A1+A2/5+1", "A2+C#3+E3/5+3+1"],
  B: ["B1+B2/5+1", "B2+D#3+F#3/5+3+1"],
  C: ["C#2+C#3/5+1", "C#3+E3+G#3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:1 r:1 ${triad}:1 r:1 ${triad}:1 r:1`;
}

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  A: "A1 E2 A2 C#3 E3 A3",
  E: "E2 B2 E3 G#3 B3 E4",
  C: "C#2 G#2 C#3 E3 G#3 C#4",
  B: "B1 F#2 B2 D#3 F#3 B3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves, back down to the fifth, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const steps: [number, number][] = [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1], [4, 2], [3, 3], [2, 1], [1, 2]];
  WIDE[chord] = `${steps.map(([at, finger]) => `${pitches[at]}/${finger}:1`).join(" ")} r:2`;
}

/** The last bar of Epic and Legendary in the left hand: a low E major chord, held. */
const LAST_LEFT = "E2+B2+E3/5+2+1:12";

/** The pedal of Epic and Legendary in eighths: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:6 P:6").join(" | ")} | P:12`;

/** Epic's left hand in E major eighths: the Alberti bass under all three parts, then the last chord. */
const EPIC_LEFT = `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | ${LAST_LEFT}`;

/** Legendary's left hand: stride under the tune, arpeggios under our bars, stride again and the last chord. */
const LEGENDARY_LEFT = [
  bars(STRIDE, TUNE_CHORDS),
  [..."AECBAEBE"].map((chord) => WIDE[chord]).join(" | "),
  bars(STRIDE, TUNE_CHORDS.slice(0, -2)),
  LAST_LEFT,
].join(" | ");

/** One bar of the Original in 32nds, 24 to the bar: the right hand, the left hand and the pedal. */
type PrintBar = readonly [right: string, left: string, pedal: string];

/** The left hand's E major chord under the tune's first bars. */
const E_CHORD = "E3+B3+G#4/5+2+1";

/**
 * Bars 1 to 20: the tune softly in E major, then an octave lower, turning to G sharp major. Bars 9 to 16
 * play it in G sharp major, and bars 17 to 20 grow on B major. The graces before bar 3 take their time
 * from bar 2's last note, so bar 3 starts on its B.
 */
const OPENING: Record<number, PrintBar> = {
  1: ["B5/5:4 G#5/3:4 F#5/2:4 E5/1:4 F#5/2:4 G#5/3:4", `${E_CHORD}:24`, "P:24"],
  2: ["B5/5:2 G#5/3:1 A5/4:1 G#5/3:4 F#5/2:4 E5/1:4 F#5/2:2 G#5/3:2 F#5/2:2 G#5/3:1 A5/4:1", `${E_CHORD}:24`, "P:24"],
  3: ["B5/5:4 G#5/2:4 B5/4:4 C#5+C#6/1+5:4 G#5/2:4 C#6/5:4", `${E_CHORD}:12 C#3+G#3+E4/5+2+1:12`, "P:12 P:12"],
  4: ["B4+B5/1+5:4 G#5/4:4 F#5/3:4 E5/2:8 r:4", `${E_CHORD}:12 B3/2:4 G#3/3:4 F#3/4:4`, "P:12 r:12"],
  5: ["G#3+E4+B4/1+2+5:4 G#4/4:4 F#4/3:4 E4/2:4 F#4/3:4 G#4/4:4", "E2+B2+E3/5+2+1:24", "P:24"],
  6: ["G#3+E4+B4/1+2+5:2 G#4/3:1 A4/4:1 G#4/3:4 F#4/2:4 E4/1:4 F#4/2:2 G#4/3:2 F#4/2:2 G#4/3:2", "E2+B2+E3/5+2+1:24", "P:24"],
  7: ["G#4/2:1 A4/3:1 E4+B4/1+4:2 G#4/2:4 B4/4:4 E4+C#5/1+4:4 G#4/2:4 C#5/4:4", "E2+B2+G#3/5+2+1:12 C#3+G#3+C#4/5+2+1:12", "P:12 P:12"],
  8: ["D#4+D#5/1+5:4 B#4/4:4 A#4/3:4 G#4/2:8 r:4", "G#2+D#3+B#3/5+2+1:12 D#4/2:4 B#3/3:4 A#3/4:4", "P:12 r:12"],
  9: ["D#6/5:4 B#5/3:4 A#5/2:4 G#5/1:4 A#5/2:4 B#5/3:4", "G#3+D#4+B#4/5+2+1:24", "P:24"],
  10: ["D#6/5:2 B#5/3:1 C#6/4:1 B#5/3:4 A#5/2:4 G#5/1:4 A#5/2:2 B#5/3:2 A#5/2:2 B#5/3:2", "G#3+D#4+B#4/5+2+1:24", "P:24"],
  11: ["B#5/2:1 C#6/3:1 D#6/4:2 B#5/2:4 D#6/4:4 E5+E6/1+5:4 B#5/2:4 E6/5:4", "G#3+D#4+B#4/5+2+1:12 E3+B#3+G#4/5+2+1:12", "P:12 P:12"],
  12: ["D#5+D#6/1+5:4 B#5/4:4 A#5/3:4 G#5/2:8 r:4", "G#3+D#4+B#4/5+3+1:12 D#4/2:4 B#3/3:4 A#3/4:4", "P:12 r:12"],
  13: ["B#3+F#4+D#5/1+2+5:4 B#4/4:4 A#4/3:4 G#4/2:4 A#4/3:4 B#4/4:4", "G#2+D#3+G#3/5+2+1:24", "P:24"],
  14: ["B#3+F#4+D#5/1+2+5:2 B#4/4:1 C#5/5:1 B#4/4:4 A#4/2:4 G#4/1:4 A#4/2:2 B#4/3:2 A#4/2:2 B#4/3:2", "G#2+D#3+G#3/5+2+1:24", "P:24"],
  15: ["B#4/2:1 C#5/3:1 G#4+D#5/1+4:2 B#4/2:4 D#5/4:4 E4+G#4+E5/1+2+5:4 C#5/3:4 E5/5:4", "G#2+D#3+B#3/5+3+1:12 C#3+G#3+C#4/5+2+1:12", "P:12 P:12"],
  16: ["F#4+B4+F#5/1+2+5:4 D#5/4:4 C#5/3:4 B4/2:8 r:4", "B2+F#3+D#4/5+2+1:12 F#4/2:4 D#4/3:4 C#4/4:4", "P:12 r:12"],
  17: ["F#5+F#6/1+5:4 D#6/4:4 C#6/3:4 B5/2:4 C#6/3:2 D#6/4:2 C#6/3:2 D#6/4:2", "B3+F#4+D#5/5+2+1:24", "P:24"],
  18: ["F#4+B4+F#5/1+2+5:4 D#5/4:4 C#5/3:4 B4/2:4 C#5/3:2 D#5/4:2 C#5/3:2 D#5/4:2", "B2+F#3+D#4/5+2+1:24", "P:24"],
  19: ["F#5+F#6/1+5:4 D#6/4:4 B5/2:4 F#4+B4+F#5/1+2+5:4 D#5/4:4 B4/2:4", "B3+F#4+D#5/5+2+1:12 B2+F#3+D#4/5+2+1:12", "P:24"],
  20: ["F#5+F#6/1+5:4 D#6/4:4 B5/2:4 F#4+B4+F#5/1+2+5:4 D#5/4:4 B4/1:4", "B3+A4+D#5/5+2+1:12 B2+A3+D#4/5+2+1:12", "P:24"],
};

/** Bars 21 to 29: the tune loudly in octaves over a low bass, then a step higher, climbing to G sharp. */
const FORTE: Record<number, PrintBar> = {
  21: ["B4+E5+B5/1+2+5:4 G#4+G#5/1+5:4 F#4+F#5/1+5:4 E4+E5/1+5:4 F#4+F#5/1+5:4 G#4+G#5/1+5:4", "E2+B2+G#3/5+2+1:24", "P:24"],
  22: ["B4+E5+B5/1+2+5:2 G#5/4:1 A5/5:1 G#4+G#5/1+5:4 F#4+F#5/1+5:4 E4+E5/1+5:4 F#4+F#5/1+5:2 G#4+G#5/1+5:2 F#4+F#5/1+5:2 G#4+G#5/1+5:2", "E2+B2+G#3/5+2+1:24", "P:24"],
  23: ["B4+G#5/1+3:1 A5/4:1 B5/5:2 G#5/3:4 B5/5:4 C#5+E5+C#6/1+2+5:4 G#5/3:4 C#6/5:4", "E2+B2+G#3/5+2+1:12 E2+C#3+G#3/5+3+1:12", "P:12 P:12"],
  24: ["C#5+E5+C#6/1+2+5:4 A5/5:4 G#5/4:4 F#5/3:8 r:4", "F#2+C#3+A3/5+2+1:12 C#3+C#4/5+1:4 A2+A3/5+1:4 G#2+G#3/5+1:4", "P:24"],
  25: ["C#5+E5+C#6/1+2+5:4 A4+A5/1+5:4 G#4+G#5/1+5:4 F#4+F#5/1+5:4 G#4+G#5/1+5:4 A4+A5/1+5:4", "F#2+C#3+E3+A3/5+3+2+1:24", "P:24"],
  26: ["C#5+E5+C#6/1+2+5:2 A5/4:1 B5/5:1 A4+A5/1+5:4 G#4+G#5/1+5:4 F#4+F#5/1+5:4 G#4+G#5/1+5:2 A4+A5/1+5:2 G#4+G#5/1+5:2 A4+A5/1+5:2", "F#2+C#3+E3+A3/5+3+2+1:24", "P:24"],
  27: ["E5+A5/1+3:1 B5/4:1 C#6/5:2 A5/3:4 C#6/5:4 D#5+F#5+D#6/1+2+5:4 A5/3:4 D#6/5:2 D#6/4:1 E6/5:1", "F#2+C#3+E3+A3/5+3+2+1:12 F#2+D#3+A3/5+2+1:12", "P:12 P:12"],
  28: ["F#5+D#6/1+4:4 B5/3:4 D#6/5:4 E5+G#5+E6/1+2+5:4 B5/4:4 E6/5:2 E6/4:1 F#6/5:1", "G#2+D#3+F#3+B3/5+3+2+1:12 G#2+E3+B3/5+2+1:12", "P:12 P:12"],
  29: ["G#5+E6/1+5:4 C#6/3:4 E6/5:4 F#5+A5+F#6/1+2+5:4 C#6/3:4 F#6/5:4", "A2+E3+G#3+C#4/5+3+2+1:12 A2+F#3+C#4/5+2+1:12", "P:12 P:12"],
};

/** The right hand's loud G sharp major arpeggio of bars 30, 34 and 35, down and up in sixteenths. */
const G_SHARP_STORM = "G#5+G#6/1+5:2 D#6/4:2 B#5/3:2 G#5/1:2 B#5/2:2 D#6/3:2";

/** The left hand of bars 34 and 35: a loud G sharp major chord, then a soft A major chord rising to F sharp. */
const STORM_ANSWER_LEFT = "G#2+D#3+B#3/5+2+1:12 A3+C#4+E4/5+3+2:8 F#4/1:4";

/** The left hand of bars 42 and 43: a loud F major chord, then a soft G flat major chord rising to E flat. */
const F_STORM_ANSWER_LEFT = "F2+C3+A3/5+2+1:12 Gb3+Bb3+Db4/5+3+2:8 Eb4/1:4";

/** The right hand of bars 42 and 43: a loud F major arpeggio, then a soft answer on B flat. */
const F_STORM_RIGHT = "F5+F6/1+5:2 C6/3:2 A5/2:2 F5/1:2 A5/2:2 C6/3:2 r:4 Db5+Bb5/2+5:4 Bb4/1:4";

/**
 * Bars 30 to 43: very loud arpeggios in sixteenths on G sharp major, each answered softly. The left hand
 * crosses into the treble for two notes of each loud bar. Bars 37 to 43 do the same on F major.
 */
const STORM: Record<number, PrintBar> = {
  30: [`${G_SHARP_STORM} D#6/5:2 B#5/4:2 G#5/2:2 D#5/1:2 G#5/2:2 B#5/4:2`, "G#2+D#3+B#3/5+2+1:12 G#5/2:2 D#5/4:2 r:8", "P:24"],
  31: ["B#5/5:2 G#5/3:2 D#5/2:2 B#4/1:2 D#5/2:2 G#5/4:2 G#5/5:2 D#5/3:2 B#4/2:2 G#4/1:2 B#4/2:2 D#5/3:2", "D#5/2:2 B#4/4:2 r:8 B#4/2:2 G#4/4:2 r:8", "P:24"],
  32: ["r:4 G#5+C#6/3+5:4 C#5/1:4 r:4 F#5+C#6/2+5:4 C#5/1:4", "A3+C#4+G#4/5+3+1:12 F#4/2:12", "P:24"],
  33: ["r:4 E5+C#6/2+5:4 C#5/1:4 r:4 F#5+C#6/2+5:4 C#5/1:4", "E4/2:12 F#4/1:12", "P:24"],
  34: [`${G_SHARP_STORM} r:4 E5+C#6/2+5:4 C#5/1:4`, STORM_ANSWER_LEFT, "P:12 r:12"],
  35: [`${G_SHARP_STORM} r:4 E5+C#6/2+5:4 C#5/1:4`, STORM_ANSWER_LEFT, "P:12 r:12"],
  36: ["B#4/4:2 G#4/2:2 D#4/1:2 G#4/2:2 B#4/3:2 D#5/5:2 D#5/3:2 B#4/2:2 G#4/1:2 B#4/2:2 D#5/3:2 G#5/5:2", "G#2+D#3+B#3/5+2+1:24", "P:24"],
  37: ["G#5/4:2 D#5/2:2 B#4/1:2 D#5/2:2 G#5/3:2 B#5/5:2 E5+C6/1+4:2 G5/2:2 E5/1:2 G5/2:2 C6/4:2 E6/5:2", "r:12 G2+C3+E3+Bb3/5+4+2+1:12", "P:12 P:12"],
  38: ["F5+F6/1+5:2 C6/4:2 A5/3:2 F5/1:2 A5/2:2 C6/3:2 C6/5:2 A5/4:2 F5/2:2 C5/1:2 F5/2:2 A5/4:2", "F2+C3+A3/5+2+1:12 F5/2:2 C5/4:2 r:8", "P:24"],
  39: ["A5/5:2 F5/3:2 C5/2:2 A4/1:2 C5/2:2 F5/4:2 F5/5:2 C5/3:2 A4/2:2 F4/1:2 A4/2:2 C5/3:2", "C5/2:2 A4/4:2 r:8 A4/2:2 F4/4:2 r:8", "P:24"],
  40: ["r:4 F5+Bb5/2+5:4 Bb4/1:4 r:4 Eb5+Bb5/2+5:4 Bb4/1:4", "Gb3+Bb3+F4/5+4+1:12 Eb4/2:12", "P:24"],
  41: ["r:4 Db5+Bb5/2+5:4 Bb4/1:4 r:4 Eb5+Bb5/2+5:4 Bb4/1:4", "Db4/2:12 Eb4/1:12", "P:24"],
  42: [F_STORM_RIGHT, F_STORM_ANSWER_LEFT, "P:12 r:12"],
  43: [F_STORM_RIGHT, F_STORM_ANSWER_LEFT, "P:12 r:12"],
};

/** The right hand's broken F major chord of bars 50, 51, 53 and 54, twice in a bar. */
const F_BROKEN = "F5+C6/1+5:2 A5/4:2 F5/2:2 C5/1:2 F5/2:2 A5/4:2";

/** The right hand's broken E major chord of bars 56, 57 and 59, twice in a bar. */
const E_BROKEN = "E5+B5/1+5:2 G#5/4:2 E5/2:2 B4/1:2 E5/2:2 G#5/4:2";

/**
 * Bars 44 to 63: arpeggios climb from F major to a loud D major, then fade to a calm D flat. Broken chords
 * rock gently over a singing bass in F major, then in E major, and die away.
 */
const CALM: Record<number, PrintBar> = {
  44: ["A4/4:2 F4/2:2 C4/1:2 F4/2:2 A4/3:2 C5/5:2 C5/3:2 A4/2:2 F4/1:2 A4/2:2 C5/3:2 F5/5:2", "F2+C3+A3/5+2+1:24", "P:24"],
  45: ["F5/4:2 C5/2:2 A4/1:2 C5/2:2 F5/4:2 A5/5:2 C#5+A5/1+4:2 E5/2:2 C#5/1:2 E5/2:2 A5/4:2 C#6/5:2", "r:12 E2+A2+C#3+G3/5+4+2+1:12", "P:12 P:12"],
  46: ["D5+D6/1+5:2 A5/4:2 F#5/2:2 D5/1:2 F#5/2:2 A5/4:2 D6/5:2 A5/4:2 F#5/2:2 D5/1:2 F#5/2:2 A5/4:2", "D2+A2+F#3/5+2+1:12 F#5/2:2 D5/4:2 r:8", "P:24"],
  47: [times("D6/5:2 A5/4:2 F#5/2:2 D5/1:2 F#5/2:2 A5/4:2", 2), times("F#5/2:2 D5/4:2 r:8", 2), "P:24"],
  48: [times("F#5+D6/1+5:2 A5/4:2 F#5/2:2 D5/1:2 F#5/2:2 A5/4:2", 2), "D4+F#4+A4/4+2+1:24", "r:24"],
  49: [times("F5+Db6/1+5:2 A5/4:2 F5/2:2 Db5/1:2 F5/2:2 A5/4:2", 2), "Db4+F4+A4/4+2+1:23 C2/5:1", "r:24"],
  50: [times(F_BROKEN, 2), "C3+C4/5+1:4 A3/2:4 G3/3:4 F3/4:4 G3/3:4 A3/2:4", "P:24"],
  51: [times(F_BROKEN, 2), "C4/1:4 A3/2:4 G3/3:4 F3/4:4 G3/3:2 A3/2:2 G3/3:2 A3/2:2", "P:24"],
  52: [`${F_BROKEN} F5+D6/1+5:2 A5/4:2 F5/2:2 D5/1:2 F5/2:2 A5/4:2`, "C3+F3+A3+C4/5+3+2+1:4 A3/2:4 C4/1:4 A2/5:1 F3+A3+D4/3+2+1:3 A3/2:4 D4/1:4", "r:24"],
  53: [times(F_BROKEN, 2), "C3+F3+A3+C4/5+3+2+1:16 r:8", "r:24"],
  54: [times(F_BROKEN, 2), "C4+F4+A4/5+2+1:24", "r:24"],
  55: [times("E5+C6/1+5:2 G#5/3:2 E5/2:2 C5/1:2 E5/2:2 G#5/3:2", 2), "C4+E4+G#4/4+2+1:23 B1/5:1", "r:24"],
  56: [times(E_BROKEN, 2), "B2+B3/5+1:4 G#3/2:4 F#3/3:4 E3/4:4 F#3/3:4 G#3/2:4", "P:24"],
  57: [times(E_BROKEN, 2), "B3/1:4 G#3/2:4 F#3/3:4 E3/4:4 F#3/3:2 G#3/2:2 F#3/3:2 G#3/2:2", "P:24"],
  58: [`${E_BROKEN} E5+C#6/1+5:2 G#5/3:2 E5/2:2 C#5/1:2 E5/2:2 G#5/3:2`, "B2+E3+G#3+B3/5+3+2+1:4 G#3/2:4 B3/1:4 G#2/5:1 E3+G#3+C#4/3+2+1:3 G#3/2:4 C#4/1:4", "r:24"],
  59: [times(E_BROKEN, 2), "B2+E3+G#3+B3/5+3+2+1:16 r:8", "r:24"],
  60: ["E5+C#6/1+5:2 G#5/3:2 E5/2:2 C#5/1:2 E5/2:2 G#5/3:2 E5+B5/1+5:2 G#5/3:2 E5/2:2 B4/1:2 E5/2:2 G#5/4:2", "G#2+E3+G#3+C#4/5+3+2+1:4 G#3/2:4 C#4/1:4 B2+E3+G#3+B3/5+3+2+1:8 r:4", "r:24"],
  61: ["E5+C#6/1+5:2 G#5/3:2 E5/2:2 C#5/1:2 E5/2:2 G#5/3:2 E5+B5/1+5:2 G#5/3:2 E5/2:2 B4/1:2 E5/2:2 G#5/4:2", "G#2+E3+G#3+C#4/5+3+2+1:4 G#3/2:4 C#4/1:4 B2+E3+G#3+B3/5+3+2+1:8 r:4", "r:24"],
  62: [times("E5+C#6/1+5:2 G#5/3:2 E5/2:2 C#5/1:2 E5/2:2 G#5/3:2", 2), "G#2+E3+G#3+C#4/5+3+2+1:24", "r:24"],
  63: ["r:24", "G#3/2:12 C#4/1:12", "r:24"],
};

/** The right hand's trill on D sharp over a B major seventh, for a whole bar. */
const TRILL_D_SHARP = `D#4+A4+D#5/1+2+4:2 ${times("E5/5:1 D#5/4:1", 10)} C#5/3:1 D#5/4:1`;

/** The right hand's trill on B over an E major chord, for half a bar. */
const TRILL_B = `E5+B5/1+3:2 ${times("C#6/4:1 B5/3:1", 4)} A#5/2:1 B5/3:1`;

/** The left hand's B major seventh under the trill on D sharp. */
const B_SEVENTH = "F#2+B2+A3/5+4+1";

/** The left hand under the trill on B: a low E major chord, then two notes rocking in the middle. */
const ROCKING_LEFT = `E2+B2+G#3/5+2+1:4 B3+F#4/5+2:4 E4+G#4/3+1:4 E4+G#4/3+1:4 B3+F#4/5+2:4 E4+G#4/3+1:4`;

/** The right hand's tune of bars 66 and 70, turning to C sharp minor. */
const TURN = "B4/4:4 C#5/5:4 A#4/2:4 C#5/3:4";

/**
 * Bars 64 to 78: the tune very softly in the middle of the piano, then trills on D sharp and B. A long
 * chord on B leads home.
 */
const TRILLS: Record<number, PrintBar> = {
  64: ["E4+B4/1+5:4 G#4/3:4 F#4/2:4 E4/1:4 F#4/2:4 G#4/3:4", "B2+G#3+B3/5+2+1:12 C#3+A3/3+1:12", "r:24"],
  65: ["E4+B4/1+5:4 G#4/3:4 F#4/2:4 E4/1:4 F#4/2:2 G#4/3:2 F#4/2:2 G#4/3:2", "B2+G#3/5+1:12 A2+E3+C#4/5+2+1:12", "r:24"],
  66: [`E4+B4/1+3:4 G#4/2:4 ${TURN}`, "G#2+C#3+E3/3+2+1:12 G2/4:12", "r:24"],
  67: [TRILL_D_SHARP, `${B_SEVENTH}:24`, "P:24"],
  68: [`${TRILL_B} ${TRILL_B}`, ROCKING_LEFT, "P:24"],
  69: [`${TRILL_B} ${TRILL_B}`, "E4+G#4/3+1:4 B3+F#4/5+2:4 E4+G#4/3+1:4 E4+G#4/3+1:4 B3+F#4/5+2:4 E4+G#4/3+1:4", "P:24"],
  70: [`E4+B4/1+4:4 G#4/2:4 ${TURN}`, "G#2+C#3+E3/3+2+1:12 G2/4:12", "P:24"],
  71: [TRILL_D_SHARP, `${B_SEVENTH}:24`, "P:24"],
  72: [`${TRILL_B} ${TRILL_B}`, ROCKING_LEFT, "P:24"],
  73: [TRILL_D_SHARP, `${B_SEVENTH}:24`, "P:24"],
  74: [`${TRILL_B} D#4+A4+D#5/1+2+4:2 ${times("E5/5:1 D#5/4:1", 4)} C#5/3:1 D#5/4:1`, `E2+B2+G#3/5+2+1:4 B3+F#4/5+2:4 E4+G#4/3+1:4 ${B_SEVENTH}:8 r:4`, "P:12 P:12"],
  75: [`${TRILL_B} D#4+A4+D#5/1+2+4:2 ${times("E5/5:1 D#5/4:1", 4)} C#5/3:1 D#5/4:1`, `E2+B2+G#3/5+2+1:4 B3+F#4/5+2:4 E4+G#4/3+1:4 ${B_SEVENTH}:8 r:4`, "P:12 P:12"],
  76: ["r:24", "r:24", "P:24"],
  77: ["F#3+A3+B3+D#4/1+2+3+5:24", "B1+B2/5+1:4 r:20", "P:24"],
  78: ["F#3+A3+B3+D#4/1+2+3+4:12 F#3+A3+B3+E4/1+2+3+5:12", "B1+B2/5+1:4 r:8 B1+B2/5+1:4 r:8", "P:24"],
};

/** The right hand's two chords of bars 81 and 82: E major, then C sharp minor. */
const RETURN_CHORDS = "B3+E4+G#4+B4/1+2+3+5:12 C#4+E4+G#4+C#5/1+2+3+5:12";

/**
 * Bars 79 to 87: the tune returns more calmly, over a walking bass. Soft chords of E major close it, and
 * the lowest E trembles in octaves to the end.
 */
const RETURN: Record<number, PrintBar> = {
  79: ["B5/5:4 G#5/3:4 F#5/2:4 E5/1:4 F#5/2:4 G#5/3:4", "E2+B2+G#3/5+3+1:12 C#3/2:12", "P:24"],
  80: ["B5/5:4 G#5/3:4 F#5/2:4 E5/1:4 F#5/2:2 G#5/3:2 F#5/2:2 G#5/3:2", "B2/3:12 C#3/2:12", "P:24"],
  81: [RETURN_CHORDS, "r:4 G#3/1:4 F#3/2:4 E3/3:4 F#3/2:4 G#3/1:4", "P:24"],
  82: [RETURN_CHORDS, "r:4 G#3/1:4 F#3/2:4 E3/3:4 F#3/2:2 G#3/1:2 F#3/2:2 G#3/1:2", "P:24"],
  83: ["B4+E5+G#5+B5/1+2+3+5:24", "B2/5:1 G#3/2:1 B3/1:1 E4/2:21", "P:24"],
  84: ["C#5+E5+G#5+C#6/1+2+3+5:24", "G#2/5:1 E3+G#3+C#4/3+2+1:23", "P:24"],
  85: ["E5+G#5+B5+E6/1+2+3+5:24", `E2/5:1 B2/2:1 E3/1:1 G#3/3:1 B3/2:1 E4/1:7 ${times("E1/5:1 E2/1:1", 6)}`, "P:24"],
  86: ["r:24", times("E1/5:1 E2/1:1", 12), "P:24"],
  87: ["r:24", "E1/5:8 r:16", "P:8 r:16"],
};

/** The Original's 87 bars, by their number in the print. */
const PRINT_BARS: Record<number, PrintBar> = { ...OPENING, ...FORTE, ...STORM, ...CALM, ...TRILLS, ...RETURN };

/** One line of the Original: `part` of each print bar, in the print's order. */
function printLine(part: 0 | 1 | 2): string {
  return Array.from({ length: 87 }, (_, at) => {
    const bar = PRINT_BARS[at + 1];
    if (bar === undefined) throw new Error(`Morning Mood's Original has no bar ${at + 1}`);
    return part === 1 ? rolledWide(bar[part]) : bar[part];
  }).join(" | ");
}

/** The MIDI pitch of a note name such as `G#4` or `Bb3`. */
function pitchOf(name: string): number {
  const [, letter = "C", accidental = "", octave = "4"] = /^([A-G])([#b]?)(\d)$/.exec(name) ?? [];
  return 12 * (Number(octave) + 1) + (CLASSES[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0);
}

/** The widest chord a hand holds at once: 15 semitones, the practical span of fingers 1 and 5. */
const WIDEST_HELD = 15;

/**
 * `text` with each chord wider than a hand holds rolled from its lowest note, as the print's bracket asks.
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

export const morningMood: OurSong = {
  slug: "morning-mood",
  title: "Morning Mood",
  aka: ["Morgenstemning", "Morgenstimmung", "Morning", "Peer Gynt Suite No. 1"],
  source: {
    composer: "Edvard Grieg",
    died: 1907,
    published: 1888,
    edition:
      "Peer Gynt Suite No. 1, Op. 46, Morning Mood, the flute's theme in bars 1 to 4, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 287; Suite No. 1 was published in 1888",
  },
  about:
    "Grieg wrote Morning Mood in 1875 for Ibsen's play Peer Gynt, and published it in his first Peer Gynt Suite in 1888. " +
    "Its tune uses only five notes of the scale, and passes between flute and oboe. " +
    "The 1973 film Soylent Green plays it as a dying man listens to the music he chose.",
  funFact: "The music paints a sunrise in the Moroccan desert, not over a Norwegian fjord as most listeners imagine.",
  mythic: {
    key: E_MAJOR,
    bpm: 90,
    numerator: 6,
    denominator: 8,
    steps: 4,
    right: printLine(0),
    left: printLine(1),
    pedal: printLine(2),
    source: {
      edition:
        "Peer Gynt Suite No. 1, Op. 46, Morning Mood, in Grieg's own piano version as G. Schirmer printed it in 1899, edited by Louis Oesterle, scanned as Internet Archive item 31761045200615, printed pages 3 to 6",
      printed: 1899,
    },
    skills: ["melody-in-chords", "arpeggios", "sixteenth-notes"],
    practice: [
      { text: "Play bars 1 to 8 slowly with the right hand alone. Let the song wait for each note, and keep the tune soft.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
      { text: "Play bars 30 to 39 with the left hand alone. In the loud bars it plays a low chord, then reaches up for two quick notes.", hands: "left", speed: 0.5, loop: [30, 39], wait: true },
      { text: "Play bars 30 to 36 with the right hand alone. Keep the sixteenths even, and the soft chords between them quiet.", hands: "right", speed: 0.5, loop: [30, 36], wait: true },
      { text: "Play the trills of bars 67 to 75 with the right hand alone. Start slowly, and keep the two fingers light.", hands: "right", speed: 0.5, loop: [67, 75], wait: false },
      { text: "Play the whole piece with both hands at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 20, kind: "sound", text: "The tune paints a sunrise. Play it softly, and change the pedal where the left hand's chord changes." },
      { fromBar: 2, toBar: 3, kind: "rhythm", text: "The tune has quick grace notes in bars 2 and 3. Play them lightly, so the beat stays steady." },
      { fromBar: 21, toBar: 29, kind: "sound", text: "The tune returns loudly in octaves. Let the top note of each octave sing." },
      { fromBar: 30, toBar: 43, kind: "sound", text: "Loud sixteenths and soft chords take turns here. Make each change from loud to soft sudden." },
    ],
    tricky: {
      74: "The trill on B lasts half a bar. Then the hand moves down to a chord, and trills on D sharp. The left hand jumps down to a B seventh chord.",
      75: "This bar repeats bar 74. Move the hand early, so the second trill starts right at the half bar.",
      85: "The left hand rolls an E major chord over two octaves, up to the E above middle C. Then it shakes between two low E's an octave apart.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: E_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 1,
      ownBars: [9, 10, 11, 12, 13, 14, 15],
      right: moved(`${TUNE_RIGHT} | ${OWN} | E5/1:6`, -16),
      left: COMMON_LEFT,
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The hand stays in the same place.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds each shape for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Your right thumb sits on middle C, and finger 5 starts on G. Fingers 2 and 3 rest on D and E." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "After the first C, four short notes rock between D and E. Count them evenly." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play softly, like the sun rising slowly. Each note should flow into the next." },
      ],
      tricky: {
        5: "Finger 2 takes E here, and finger 4 takes G. That frees finger 5 for the high A in bar 6.",
        6: "Finger 5 plays A, and finger 2 plays E. Keep the hand open between them.",
        7: "Finger 5 steps back from A to G. The left hand moves to D and G at the half bar.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 6,
      denominator: 4,
      steps: 1,
      ownBars: [9, 10, 11, 12, 13, 14, 15],
      right: moved(`${TUNE_RIGHT} | ${OWN} | E5+G#5/1+3:6`, -9),
      left: `${bars(WALTZ, "gggggggggggggdgg")} | ${bars(WALTZ, "ccggggddccggdd")} | G2+B2+D3/5+3+1:6`,
      skills: ["waltz-bass", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone: a low note, then a two-note chord twice. The hand stays still.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The left hand plays on every beat. Count one, two, three, twice in each bar." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand's chords soft, so the tune floats above them like morning light." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with G and B together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        5: "Finger 2 takes B here, and finger 4 takes D. That frees finger 5 for the high E in bar 6.",
        7: "Finger 5 steps back from E to D. The left hand moves to A and D at the half bar.",
        9: "The left hand keeps finger 5 on G. Fingers 4 and 2 move to A and C for the new chord.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 150,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: moved([inEighths(TUNE_RIGHT), OWN_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "), -2),
      left: moved(EPIC_LEFT, -2),
      pedal: PEDAL,
      ownBars: [9, 10, 11, 12, 13, 14, 15],
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "Our own bars move the hand. Look ahead to the first finger of each bar." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        7: "At the half bar the left hand changes to an A major Alberti group, with finger 5 on the low A.",
        11: "Five notes walk down from B to D, one finger each. Then finger 2 steps back up to E.",
        24: "Use the short rest to spread the right hand over F sharp, A and D for the last chord.",
      },
    },
    legendary: {
      key: E_MAJOR,
      bpm: 168,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [inEighths(TUNE_RIGHT), OWN_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: LEGENDARY_LEFT,
      pedal: PEDAL,
      ownBars: [9, 10, 11, 12, 13, 14, 15],
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand's arpeggios alone. They climb two octaves and come back down.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the arpeggios flow softly under the tune, and change the pedal on each new chord." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        6: "The left hand jumps to C sharp for the whole bar. The right hand plays C sharp with finger 5 and G sharp with finger 2.",
        22: "The two C sharps make an octave, with E and G sharp between them. Keep the hand spread for the whole bar.",
        23: "Three shapes follow each other: E major, then B and G sharp, then B major. The left hand changes to B at the half bar.",
      },
    },
  },
  de: {
    about:
      "Grieg schrieb die Morgenstimmung 1875 für Ibsens Schauspiel Peer Gynt und veröffentlichte sie 1888 in seiner ersten Peer-Gynt-Suite. " +
      "Ihre Melodie verwendet nur fünf Töne der Tonleiter und wandert zwischen Flöte und Oboe hin und her. " +
      "Der Film Soylent Green von 1973 spielt sie, während ein sterbender Mann der Musik lauscht, die er gewählt hat.",
    funFact: "Die Musik malt einen Sonnenaufgang in der marokkanischen Wüste, nicht über einem norwegischen Fjord, wie die meisten Hörer glauben.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die Hand bleibt an derselben Stelle.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Dein rechter Daumen liegt auf dem mittleren C, und Finger 5 beginnt auf dem G. Finger 2 und 3 liegen auf D und E.",
          "Nach dem ersten C wiegen sich vier kurze Töne zwischen D und E. Zähl sie gleichmäßig.",
          "Spiel leise, wie die langsam aufgehende Sonne. Jeder Ton soll in den nächsten fließen.",
        ],
        tricky: {
          5: "Hier nimmt Finger 2 das E, und Finger 4 nimmt das G. So ist Finger 5 frei für das hohe A in Takt 6.",
          6: "Finger 5 spielt das A, und Finger 2 spielt das E. Halt die Hand dazwischen offen.",
          7: "Finger 5 geht vom A zurück zum G. Die linke Hand wechselt in der Mitte des Takts zu D und G.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann zweimal einen Zweiklang. Die Hand bleibt still.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag. Zähl eins, zwei, drei, zweimal in jedem Takt.",
          "Spiel die Akkorde der linken Hand leise, damit die Melodie wie Morgenlicht darüber schwebt.",
          "Am Ende spielst du G und H zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          5: "Hier nimmt Finger 2 das H, und Finger 4 nimmt das D. So ist Finger 5 frei für das hohe E in Takt 6.",
          7: "Finger 5 geht vom E zurück zum D. Die linke Hand wechselt in der Mitte des Takts zu A und D.",
          9: "Die linke Hand lässt Finger 5 auf dem G. Finger 4 und 2 gehen für den neuen Akkord zu A und C.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "In unseren eigenen Takten wandert die Hand. Schau voraus auf den ersten Finger jedes Takts.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          7: "In der Mitte des Takts wechselt die linke Hand zu einer Alberti-Figur in A-Dur, mit Finger 5 auf dem tiefen A.",
          11: "Fünf Töne gehen vom H hinunter zum D, ein Finger für jeden. Dann geht Finger 2 zurück hinauf zum E.",
          24: "Nutz die kurze Pause, um die rechte Hand über Fis, A und D für den letzten Akkord zu spannen.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Sie steigen zwei Oktaven hinauf und kommen wieder herunter.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios leise unter der Melodie fließen, und wechsle das Pedal bei jedem neuen Akkord.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          6: "Die linke Hand springt für den ganzen Takt zum Cis. Die rechte Hand spielt das Cis mit Finger 5 und das Gis mit Finger 2.",
          22: "Die beiden Cis bilden eine Oktave, mit E und Gis dazwischen. Halt die Hand den ganzen Takt lang gespannt.",
          23: "Drei Griffe folgen aufeinander: E-Dur, dann H und Gis, dann H-Dur. Die linke Hand wechselt in der Mitte des Takts zum H.",
        },
      },
    },
    original: {
      practice: [
        "Spiel die Takte 1 bis 8 langsam nur mit der rechten Hand. Lass das Stück auf jeden Ton warten, und spiel die Melodie leise.",
        "Spiel die Takte 30 bis 39 nur mit der linken Hand. In den lauten Takten spielt sie einen tiefen Akkord und greift dann hinauf zu zwei schnellen Tönen.",
        "Spiel die Takte 30 bis 36 nur mit der rechten Hand. Spiel die Sechzehntel gleichmäßig und die leisen Akkorde dazwischen ruhig.",
        "Spiel die Triller der Takte 67 bis 75 nur mit der rechten Hand. Fang langsam an, und halt die beiden Finger leicht.",
        "Spiel das ganze Stück mit beiden Händen im vollen Tempo, mit Pedal.",
      ],
      tips: [
        "Die Melodie malt einen Sonnenaufgang. Spiel sie leise, und wechsle das Pedal, wo der Akkord der linken Hand wechselt.",
        "Die Melodie hat schnelle Vorschläge in den Takten 2 und 3. Spiel sie leicht, damit der Schlag gleichmäßig bleibt.",
        "Die Melodie kehrt laut in Oktaven zurück. Lass den oberen Ton jeder Oktave singen.",
        "Hier wechseln laute Sechzehntel und leise Akkorde einander ab. Wechsle jedes Mal plötzlich von laut zu leise.",
      ],
      tricky: {
        74: "Der Triller auf H dauert einen halben Takt. Dann geht die Hand hinunter zu einem Akkord und trillert auf Dis. Die linke Hand springt hinunter zu einem H-Septakkord.",
        75: "Dieser Takt wiederholt Takt 74. Bewege die Hand früh, damit der zweite Triller genau in der Mitte des Takts beginnt.",
        85: "Die linke Hand bricht einen E-Dur-Akkord über zwei Oktaven, hinauf zum E über dem mittleren C. Dann wechselt sie schnell zwischen zwei tiefen E im Oktavabstand.",
      },
    },
  },
};

/**
 * *Symphony No. 5*: the four-note motif that opens Beethoven's symphony, in four versions of ours.
 *
 * The tune is bars 1 to 5 of the first movement, as the score in Wikipedia's article on the symphony
 * prints it. The print is in 2/4 and C minor, Allegro con brio. The tune writes every eighth as a
 * quarter, so each print bar is a bar of 4/4. Each fermata note holds one whole bar, and the tied D of
 * print bars 4 and 5 is one bar. The tune is four bars, and the hook is all four.
 *
 * Every version plays the tune, then bars of our own built on the motif's rhythm: three short notes and
 * a long one. The tune's chords are C minor, then G major under the F and the D. Our bars move through
 * C minor, G major, A-flat major and F minor, and every version closes on C minor. Common and Rare move
 * the song to A minor, so their chords are A minor, E major, F major and D minor.
 *
 * Common plays the tune in quarters over held bass notes, with both hands in one place. Rare plays the
 * tune in eighths, with two-note chords on our long notes, over a bass note and two short chords. Epic
 * plays the tune in octaves over an Alberti bass, and climbs a scale with the thumb passing under. Legendary
 * plays the tune in four-note chords over a stride bass, then runs in sixteenths over arpeggios across two
 * octaves. It plays the tune again in octaves and ends on a four-note chord. Where the tune is in octaves or
 * chords, its third short note ends early, so the hand has a rest to jump to the long note.
 *
 * The Original follows Liszt's transcription of the first movement for piano solo, in 2/4 and C minor at a
 * half note of 108. The scan has lost its title page. The whole movement plays for more than four minutes,
 * so the Original cuts it. It plays the exposition, Beethoven's bars 1 to 124, once without its printed
 * repeat. It leaves out the development and goes straight to bar 248, where the recapitulation starts
 * with the motto's three short notes. From there it plays to the movement's last bar. Every bar is Liszt's.
 *
 * A quarter is 24 units, so the written-out tremolos keep their 32nds. A fermata keeps its printed length,
 * since every bar fills 2/4. The oboe's free cadenza of bar 268 runs 192 units at its printed lengths,
 * so it fills four bars of 48 after the fermata bar. Our bar 145 is that fermata bar, and our bars 146
 * to 149 hold the cadenza.
 *
 * Two voices in one hand are merged into one line of chords. A note the print holds or ties while another
 * note of its hand starts ends where that note starts, so no note is struck twice. Liszt's ossia staves
 * and his "8a bassa ad libitum" doublings are left out. A chord past a hand's span drops a doubling note,
 * and each such bar is named where it is written. The chords still wider than 15 semitones are rolled from
 * the bottom by `rolledWide`: our bars 52, 85, 86, 87, 89, 91, 96 and 177.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const C_MINOR: Key = { tonic: 0, mode: "minor" };

/** The key Common and Rare move the song to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "r:1 G4:1 G4:1 G4:1 | Eb4:4 | r:1 F4:1 F4:1 F4:1 | D4:4";

/** Each pitch of the C minor text, its pitch in A minor a minor third down, and the octave it loses. */
const DOWN_A_THIRD: Record<string, [string, number]> = {
  C: ["A", 1],
  D: ["B", 1],
  Eb: ["C", 0],
  F: ["D", 0],
  G: ["E", 0],
  Ab: ["F", 0],
  Bb: ["G", 0],
  B: ["G#", 1],
};

/** `text`, written in C minor, moved down a minor third to A minor. */
function toAMinor(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => {
    const to = DOWN_A_THIRD[name];
    if (to === undefined) throw new Error(`No A minor pitch for ${name}`);
    return `${to[0]}${Number(octave) - to[1]}`;
  });
}

/** Bars of `patterns` from `chords`, such as `"ccgg"`: one letter per pattern, `perBar` patterns per bar. */
function bars(patterns: Record<string, string>, chords: string, perBar: number): string {
  const parts = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < parts.length; at += perBar) lines.push(parts.slice(at, at + perBar).join(" "));
  return lines.join(" | ");
}

/** The tune's chords, one a bar: c, g, a and f are C minor, G major, A-flat major and F minor. */
const TUNE_CHORDS = "ccgg";

/** The chords of Rare's and Epic's own bars, one a bar, before the closing bar. */
const OWN_CHORDS = "ccggaaffcfg";

/** The tune in 4/4 quarters, fingered in the hand's one place from D to A flat. */
const TUNE_QUARTERS = "r:1 G4/4:1 G4/4:1 G4/4:1 | Eb4/2:4 | r:1 F4/3:1 F4/3:1 F4/3:1 | D4/1:4";

/** Common's eight bars after the tune, in quarters, in the same place as the tune. */
const COMMON_OWN = [
  "r:1 Eb4/2:1 F4/3:1 G4/4:1 | D4/1:4 | r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 | F4/3:4",
  "r:1 G4/4:1 Ab4/5:1 G4/4:1 | Eb4/2:4 | r:1 F4/3:1 F4/3:1 D4/1:1 | Eb4/2:4",
].join(" | ");

/** Common's bass for each bar, in quarters: one note, or an open fifth for F minor, held. */
const HELD: Record<string, string> = {
  c: "C4/1:4",
  g: "G3/4:4",
  a: "Ab3/3:4",
  f: "F3+C4/5+1:4",
};

/** The tune in 4/4 eighths, fingered as in Common. */
const TUNE_EIGHTHS = "r:2 G4/4:2 G4/4:2 G4/4:2 | Eb4/2:8 | r:2 F4/3:2 F4/3:2 F4/3:2 | D4/1:8";

/** Rare's twelve bars after the tune, in eighths: the motif in each bar, with a two-note chord on its long note. */
const RARE_OWN = [
  "r:1 G4/4:1 G4/4:1 G4/4:1 Eb4/2:4 | r:1 F4/3:1 Eb4/2:1 D4/1:1 Eb4+G4/2+4:4",
  "r:1 F4/3:1 F4/3:1 F4/3:1 D4/1:4 | r:1 Eb4/2:1 F4/3:1 G4/4:1 D4+G4/1+4:4",
  "r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 Eb4/2:4 | r:1 F4/3:1 F4/3:1 F4/3:1 Eb4+Ab4/2+5:4",
  "r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 F4/3:4 | r:1 Eb4/2:1 F4/3:1 Ab4/5:1 F4/3:4",
  "r:1 G4/4:1 G4/4:1 G4/4:1 Eb4+G4/2+4:4 | r:1 Ab4/5:1 Ab4/5:1 Ab4/5:1 F4+Ab4/3+5:4",
  "r:1 F4/3:1 F4/3:1 F4/3:1 D4+F4/1+3:4 | Eb4+G4/2+4:8",
].join(" | ");

/** Rare's bass for each bar, in eighths: a half note, then two short chords, all in one hand position. */
const PULSE: Record<string, string> = {
  c: "C4/1:4 G3+C4/4+1:2 G3+C4/4+1:2",
  g: "G3/4:4 G3/4:2 G3/4:2",
  a: "Ab3/3:4 Ab3+C4/3+1:2 Ab3+C4/3+1:2",
  f: "F3/5:4 Ab3+C4/3+1:2 Ab3+C4/3+1:2",
};

/** Epic's tune in eighths, in octaves. */
const TUNE_OCTAVES_EIGHTHS =
  "r:2 G4+G5/1+5:2 G4+G5/1+5:2 G4+G5/1+5:1 r:1 | Eb4+Eb5/1+5:8 | r:2 F4+F5/1+5:2 F4+F5/1+5:2 F4+F5/1+5:1 r:1 | D4+D5/1+5:8";

/** Epic's twelve bars after the tune, in eighths, with a scale in bar 12 where the thumb passes under. */
const EPIC_OWN = [
  "r:1 Eb5/3:1 Eb5/3:1 Eb5/3:1 C5+G5/1+5:4 | r:1 G5/5:1 F5/4:1 Eb5/3:1 C5+Eb5/1+3:4",
  "r:1 F5/5:1 F5/5:1 F5/5:1 B4+D5/1+3:4 | r:1 D5/3:1 Eb5/4:1 D5/3:1 B4+G5/1+5:4",
  "r:1 Eb5/3:1 Eb5/3:1 Eb5/3:1 C5+Ab5/1+5:4 | r:1 C6/5:1 Bb5/4:1 Ab5/3:1 Eb5+Ab5/1+3:4",
  "r:1 Ab5/5:1 Ab5/5:1 Ab5/5:1 C5+F5/1+4:3 r:1 | F4/1:1 G4/2:1 Ab4/3:1 Bb4/1:1 C5/2:1 D5/3:1 Eb5/4:1 F5/5:1",
  "r:1 G5/5:1 G5/5:1 G5/5:1 C5+Eb5/1+3:4 | r:1 F5/4:1 Ab5/5:1 F5/4:1 C5+F5/1+4:4",
  "r:1 D5/3:1 D5/3:1 D5/3:1 B4+F5/1+5:4 | C5+Eb5+G5/1+3+5:8",
].join(" | ");

/** Epic's Alberti bass for each bar, in eighths: low, high, middle, high, twice. */
const ALBERTI: Record<string, string> = {
  c: "C3/5:1 G3/1:1 Eb3/3:1 G3/1:1",
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  a: "Ab2/5:1 Eb3/1:1 C3/3:1 Eb3/1:1",
  f: "F2/5:1 C3/1:1 Ab2/3:1 C3/1:1",
};
for (const chord of Object.keys(ALBERTI)) ALBERTI[chord] = `${ALBERTI[chord]} ${ALBERTI[chord]}`;

/** Legendary's tune in sixteenths, each note the top of a four-note chord. */
const TUNE_CHORDS_SIXTEENTHS = [
  "r:4 G4+C5+Eb5+G5/1+2+3+5:4 G4+C5+Eb5+G5/1+2+3+5:4 G4+C5+Eb5+G5/1+2+3+5:2 r:2 | Eb4+G4+C5+Eb5/1+2+3+5:16",
  "r:4 G4+B4+D5+F5/1+2+3+5:4 G4+B4+D5+F5/1+2+3+5:4 G4+B4+D5+F5/1+2+3+5:2 r:2 | D4+G4+B4+D5/1+2+3+5:16",
].join(" | ");

/** Legendary's tune again in sixteenths, in octaves. */
const TUNE_OCTAVES_SIXTEENTHS =
  "r:4 G4+G5/1+5:4 G4+G5/1+5:4 G4+G5/1+5:2 r:2 | Eb4+Eb5/1+5:16 | r:4 F4+F5/1+5:4 F4+F5/1+5:4 F4+F5/1+5:2 r:2 | D4+D5/1+5:14 r:2";

/** Legendary's twelve bars after the tune, in sixteenths, with a run in bar 12 where the thumb passes under twice. */
const LEGENDARY_OWN = [
  "r:2 G5/5:2 G5/5:2 G5/5:2 C5+Eb5+G5/1+2+5:8",
  "G5/5:1 F5/4:1 Eb5/3:1 D5/2:1 C5/1:1 D5/2:1 Eb5/3:1 F5/4:1 G5/5:4 C5+Eb5/1+3:4",
  "r:2 F5/5:2 F5/5:2 F5/5:2 B4+D5+F5/1+2+5:8",
  "D5/3:1 Eb5/4:1 D5/3:1 C5/2:1 B4/1:1 C5/2:1 D5/3:1 Eb5/4:1 F5/5:4 B4+D5/1+3:4",
  "r:2 Eb5/3:2 Eb5/3:2 Eb5/3:2 C5+Eb5+Ab5/1+2+5:8",
  "C5/1:1 Eb5/2:1 Ab5/5:1 Eb5/2:1 C5/1:1 Eb5/2:1 Ab5/5:1 Eb5/2:1 C5/1:1 Eb5/2:1 Ab5/5:1 Eb5/2:1 C5+Eb5+Ab5/1+2+5:4",
  "r:2 Ab5/5:2 Ab5/5:2 Ab5/5:2 C5+F5+Ab5/1+3+5:6 r:2",
  "F4/1:1 G4/2:1 Ab4/3:1 Bb4/1:1 C5/2:1 D5/3:1 Eb5/4:1 F5/1:1 G5/2:1 Ab5/3:1 Bb5/4:1 C6/5:1 Ab5/3:2 F5/1:2",
  "r:2 G5/5:2 G5/5:2 G5/5:2 C5+Eb5+G5/1+2+5:8",
  "r:2 Ab5/5:2 Ab5/5:2 Ab5/5:2 C5+F5+Ab5/1+3+5:8",
  "r:2 F5/5:2 F5/5:2 F5/5:2 B4+D5+F5/1+2+5:8",
  "D5/3:1 Eb5/4:1 D5/3:1 C5/2:1 B4/1:4 r:8",
].join(" | ");

/** The chords of Legendary's own bars, one a bar. */
const LEGENDARY_OWN_CHORDS = "ccggaaffcfgg";

/** Legendary's stride for each half bar, in sixteenths: an octave, then a chord, each with a rest to jump. */
const STRIDE: Record<string, string> = {
  c: "C2+C3/5+1:2 r:2 Eb3+G3+C4/4+2+1:2 r:2",
  g: "G1+G2/5+1:2 r:2 D3+G3+B3/4+2+1:2 r:2",
};

/** The tune's chords for Legendary's stride, two per bar. */
const TUNE_HALVES = "ccccgggg";

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  c: "C2 G2 C3 Eb3 G3 C4",
  g: "G1 D2 G2 B2 D3 G3",
  a: "Ab1 Eb2 Ab2 C3 Eb3 Ab3",
  f: "F1 C2 F2 Ab2 C3 F3",
};

/** Legendary's bar of arpeggio in eighths: up two octaves and back one note, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 1];
  WIDE[chord] = `${[0, 1, 2, 3, 4, 5, 4].map((at) => `${pitches[at]}/${fingers[at]}:2`).join(" ")} r:2`;
}

/** `pattern` repeated `count` times, one bar each. */
function repeat(pattern: string, count: number): string {
  return Array(count).fill(pattern).join(" | ");
}

/** One bar of the Original, a quarter being 24 units and a bar 48: the right hand, the left hand and the pedal. */
type PrintBar = readonly [right: string, left: string, pedal: string];

/**
 * Exposition, print pages 1 to 3 (Beethoven's bars 1 to 124), keyed by image, system and bar. A note
 * the print ties on while another note of its hand starts ends where that note starts, so no note is struck twice.
 */
const EXPOSITION: Record<string, PrintBar> = {
  "n0.s1.1": ["r:12 G3+G4/1+5:12 G3+G4/1+5:12 G3+G4/1+5:12", "r:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "r:48"],
  "n0.s1.2": ["Eb3+Eb4/1+5:48", "Eb1+Eb2/5+1:48", "P:48"],
  "n0.s1.3": ["r:12 F3+F4/1+5:12 F3+F4/1+5:12 F3+F4/1+5:12", "r:12 F1+F2/5+1:12 F1+F2/5+1:12 F1+F2/5+1:12", "r:48"],
  "n0.s1.4": ["D3+D4/1+5:48~", "D1+D2/5+1:48~", "P:48~"],
  "n0.s1.5": ["D3+D4/1+5:48", "D1+D2/5+1:48", "P:48"],
  "n0.s1.6": ["r:12 G4/2:12 G4/2:12 G4/2:12", "r:48", "r:48"],
  "n0.s1.7": ["r:12 Ab4/2:12 Ab4/2:12 Ab4/2:12", "C4+Eb4/4+2:48", "r:48"],
  "n0.s1.8": ["r:12 Eb5/4:12 Eb5/4:12 Eb5/4:12", "G4/1:48~", "r:48"],
  "n0.s2.1": ["C5/4:48~", "G4/1:48~", "r:48"],
  "n0.s2.2": ["C5/4:12 G4/1:12 G4/1:12 G4/1:12", "G4/1:12 r:36", "r:48"],
  "n0.s2.3": ["r:12 Ab4/2:12 Ab4/2:12 Ab4/2:12", "B3+D4/4+2:48", "r:48"],
  "n0.s2.4": ["r:12 F5/4:12 F5/4:12 F5/4:12", "G4/1:48~", "r:48"],
  "n0.s2.5": ["D5/3:48~", "G4/1:48~", "r:48"],
  "n0.s2.6": ["D5/3:12 G5/4:12 G5/4:12 F5/3:12", "G4/1:48", "r:48"],
  "n0.s2.7": ["Eb5/2:48", "C4+Eb4/4+2:12 Eb4/2:12 Eb4/2:12 F4/1:12", "r:48"],
  "n0.s2.8": ["D5/1:12 G5/4:12 G5/4:12 F5/3:12", "B3+G4/5+1:48", "r:48"],
  "n0.s2.9": ["Eb5/2:48", "C4/4:12 Eb4/2:12 Eb4/2:12 F4/1:12", "r:48"],
  "n0.s3.1": ["D5/4:12 G4+D5+G5/1+3+5:12 G4+D5+G5/1+3+5:12 G4+D5+F5/1+3+5:12", "B3+G4/5+1:12 B2+G3+B3/5+2+1:12 B2+G3+B3/5+2+1:12 B2+G3+B3/5+2+1:12", "r:48"],
  "n0.s3.2": ["G4+C5+Eb5/1+3+5:24 r:24", "C3+G3+C4/5+2+1:24 r:24", "r:48"],
  "n0.s3.3": ["C4+F#4+C5/1+2+5:24 r:24", "Ab2+C3+Ab3/5+4+1:24 r:24", "r:48"],
  "n0.s3.4": ["G4+B4+G5/1+2+5:48", "G2+D3+G3/5+2+1:24 r:24", "r:48"],
  "n0.s3.5": ["r:12 Ab3+Ab4/1+5:12 Ab3+Ab4/1+5:12 Ab3+Ab4/1+5:12", "r:12 Ab1+Ab2/5+1:12 Ab1+Ab2/5+1:12 Ab1+Ab2/5+1:12", "r:48"],
  "n0.s3.6": ["F3+F4/1+5:48~", "F1+F2/5+1:48~", "P:48~"],
  "n0.s3.7": ["F3+F4/1+5:48", "F1+F2/5+1:48", "P:48"],
  "n0.s3.8": ["r:12 Ab4/3:12 Ab4/3:12 Ab4/3:12", "r:48", "r:48"],
  "n0.s3.9": ["F4/5:48", "r:12 D4/2:12 D4/2:12 D4/2:12", "r:48"],
  "n0.s3.10": ["B3/2:48", "r:12 Ab3/3:12 Ab3/3:12 Ab3/3:12", "r:48"],
  "n0.s4.1": ["G3/1:48", "r:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "r:48"],
  "n0.s4.2": ["C4+Eb4/2+4:12 Ab4/3:12 Ab4/3:12 Ab4/3:12", "C2+C3/5+1:12 r:36", "r:48"],
  "n0.s4.3": ["F4/5:48", "r:12 D4/2:12 D4/2:12 D4/2:12", "r:48"],
  "n0.s4.4": ["B3/2:48", "r:12 Ab3/3:12 Ab3/3:12 Ab3/3:12", "r:48"],
  "n0.s4.5": ["G3/1:48", "r:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "r:48"],
  "n0.s4.6": ["C4+Eb4/2+4:12 Eb4+G4/1+2:12 Eb4+G4+C5/1+2+5:12 Eb4+G4+C5/1+2+5:12", "C2+C3/5+1:24 r:24", "r:48"],
  "n0.s4.7": ["D4+F4+Ab4+C5/1+2+3+5:48", "r:12 C2+C3/5+1:12 C2+C3/5+1:12 C2+C3/5+1:12", "r:48"],
  // n0.s4.8: the second chord's F4 takes finger 1, the other reading of the print's finger.
  "n0.s4.8": ["B4/5:12 F4+Ab4+B4/1+2+3:12 F4+Ab4+D5/1+2+5:12 F4+Ab4+D5/1+2+5:12", "C2+C3/5+1:24 r:24", "r:48"],
  "n1.s1.1": ["D4+F4+G4+D5/1+2+3+5:48", "r:12 C2+C3/5+1:12 C2+C3/5+1:12 C2+C3/5+1:12", "r:48"],
  "n1.s1.2": ["Eb4+G4+C5/1+2+4:12 Eb4+G4+C5/1+2+4:12 Eb4+G4+C5/1+2+4:12 Eb5/5:12", "C2+C3/5+1:24 Eb3+G3+C4/3+2+1:12 C3/5:12", "r:48"],
  "n1.s1.3": ["F4+Ab4+Eb5/1+2+5:12 D5/4:12 F4+Ab4+D5/1+2+4:12 F5/5:12", "C2+C3/5+1:24 F3+Ab3+B3/3+2+1:12 C3/5:12", "P:48"],
  "n1.s1.4": ["G4+Bb4+F5/1+2+5:12 E5/4:12 G4+Bb4+E5/1+2+4:12 G5/5:12", "C2+C3/5+1:24 G3+Bb3/2+1:12 C3/5:12", "P:48"],
  "n1.s1.5": ["Ab4+C5+G5/1+2+5:12 F5/4:12 Ab4+C5+F5/1+2+4:12 Ab5/5:12", "C2+C3/5+1:24 F3+Ab3/2+1:12 C3/5:12", "P:48"],
  "n1.s1.6": ["Bb4+E5+Ab5/1+2+4:12 G5/4:12 Bb4+E5+G5/1+2+4:12 Bb5/5:12", "C2+C3/5+1:24 E3+G3/2+1:12 C3/5:12", "P:48"],
  "n1.s1.7": ["C5+F5+Bb5/1+2+4:12 Ab5/4:12 C5+F5+Ab5/1+2+4:12 C6/5:12", "C2+C3/5+1:24 F3+Ab3/2+1:12 C3/5:12", "P:48"],
  "n1.s1.8": ["D5+F5+Ab5+C6/1+2+3+5:12 B5/4:12 D5+F5+Ab5+B5/1+2+3+4:12 D6/5:12", "C2+C3/5+1:24 F3+Ab3+B3/3+2+1:12 C3/5:12", "P:48"],
  "n1.s2.1": ["C5+Eb5+C6/1+2+5:12 G5+C6+Eb6/1+2+4:12 G5+C6+Eb6/1+2+4:12 G5+C6+Eb6/1+2+4:12", "C2+C3/5+1:12 G4+C5+Eb5/5+3+2:12 G4+C5+Eb5/5+3+2:12 G4+C5+Eb5/5+3+2:12", "P:48~"],
  "n1.s2.2": ["Eb5+G5+C6/2+3+5:12 C5+Eb5+G5/2+3+5:12 C5+Eb5+G5/2+3+5:12 C5+Eb5+G5/2+3+5:12", "Eb4+G4+C5/4+2+1:12 C4+Eb4+G4/3+2+1:12 C4+Eb4+G4/3+2+1:12 C4+Eb4+G4/3+2+1:12", "P:48~"],
  "n1.s2.3": ["G4+C5+Eb5/1+2+3:12 Eb4+G4+C5/2+3+5:12 C4+Eb4+G4/1+2+3:12 C4+Eb4+G4/1+2+3:12", "G3+C4+Eb4/5+3+2:12 Eb3+G3+C4/3+2+1:12 C3+Eb3+G3/5+3+2:12 C3+Eb3+G3/5+3+2:12", "P:48~"],
  "n1.s2.4": ["C4+Eb4/1+2:12 C3+Eb3+G3+C4/1+2+3+5:12 C3+Eb3+G3+C4/1+2+3+5:12 C3+Eb3+G3+C4/1+2+3+5:12", "C3+Eb3/5+3:12 C2+G2/5+1:12 C2+G2/5+1:12 C2+G2/5+1:12", "P:48"],
  "n1.s2.5": ["D3+F3+G3+B3/1+2+3+5:12 G5+B5+F6/1+2+5:12 G5+B5+D6/1+2+3:12 G5+B5+D6/1+2+3:12", "G1+G2/5+1:12 G4+B4+F5/5+3+1:12 G4+B4+D5/5+3+2:12 G4+B4+D5/5+3+2:12", "r:48"],
  "n1.s2.6": ["G5+B5/1+2:12 B4+D5+G5/1+2+5:12 B4+D5+F5/1+2+4:12 B4+D5+F5/1+2+4:12", "G4+B4/5+3:12 B3+D4+G4/5+3+1:12 B3+D4+F4/5+3+2:12 B3+D4+F4/5+3+2:12", "r:48"],
  "n1.s2.7": ["B4+D5/1+2:12 D4+F4+B4/1+2+5:12 D4+F4+G4/1+2+3:12 B3+D4+F4/1+2+4:12", "B3+D4/5+3:12 D3+F3+B3/5+3+1:12 D3+F3+G3/5+3+2:12 G2+D3+F3/5+2+1:12", "r:48"],
  // n1.s3.1: the left hand's second chord drops its low G1, which doubles G2, to fit the hand.
  "n1.s3.1": ["B3+D4/1+2:12 B3/1:12 C4/2:12 C4/2:12", "G2+D3/5+2:12 G2+D3+F3/5+2+1:12 C2+G2+Eb3/5+2+1:12 C2+G2+Eb3/5+2+1:12", "P:12 r:36"],
  "n1.s3.2": ["C4/1:12 Eb5+Gb5+Eb6/1+2+5:12 Eb5+Gb5+Eb6/1+2+5:12 Eb5+Gb5+Eb6/1+2+5:12", "C2+A2+Eb3+Gb3/5+3+2+1:12 Eb4+Gb4/2+1:12 Eb4+Gb4/2+1:12 Eb4+Gb4/2+1:12", "P:48~"],
  "n1.s3.3": ["C5+Eb5+C6/1+2+5:12 A4+C5+A5/1+2+5:12 A4+C5+A5/1+2+5:12 A4+C5+A5/1+2+5:12", "C4+Eb4/3+2:12 A3+C4/2+1:12 A3+C4/2+1:12 A3+C4/2+1:12", "P:48~"],
  "n1.s3.4": ["Gb4+A4+Gb5/1+2+5:12 Eb4+Gb4+Eb5/1+2+5:12 Eb4+Gb4+Eb5/1+2+5:12 Eb4+Gb4+Eb5/1+2+5:12", "Gb3+A3/3+2:12 Eb3+Gb3/2+1:12 Eb3+Gb3/2+1:12 Eb3+Gb3/2+1:12", "P:48~"],
  "n1.s3.5": ["C4+Eb4+C5/1+2+5:12 A3+Eb4+Gb4+A4/1+2+3+5:12 A3+Eb4+Gb4+A4/1+2+3+5:12 A3+Eb4+Gb4+A4/1+2+3+5:12", "C3+Eb3/2+1:12 C2+Eb2+Gb2+C3/5+3+2+1:12 C2+Eb2+Gb2+C3/5+3+2+1:12 C2+Eb2+Gb2+C3/5+3+2+1:12", "P:48~"],
  "n1.s3.6": ["A3+Eb4+Gb4+A4/1+2+3+5:24 r:24", "C2+Eb2+Gb2+C3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n1.s3.7": ["r:48", "r:48", "r:48"],
  "n1.s3.8": ["Bb3+F4+Bb4/1+3+5:24 r:24", "D2+F2+Bb2+D3/5+4+2+1:24 r:24", "P:48~"],
  "n1.s3.9": ["r:12 Bb4/3:12 Bb4/3:12 Bb4/3:12", "r:48", "P:48"],
  "n1.s4.1": ["r:48", "Eb4/1:48", "r:48"],
  "n1.s4.2": ["F4/2:48", "r:48", "r:48"],
  "n1.s4.3": ["r:48", "Bb3/1:48", "r:48"],
  "n1.s4.4": ["Bb4/1:24 Eb5/4:24", "Eb4+G4/2+1:48", "r:48"],
  "n1.s4.5": ["D5/3:24 Eb5/4:24", "F4+Ab4/2+1:48", "r:48"],
  "n1.s4.6": ["D4+Ab4+F5/1+2+5:24 C5/3:24", "r:12 Bb1+Bb2/5+1:12 Bb1+Bb2/5+1:12 Bb1+Bb2/5+1:12", "r:48"],
  "n1.s4.7": ["Eb4+G4+C5/1+2+5:24 Bb4/4:24", "Eb2+Eb3/5+1:24 r:24", "r:48"],
  "n1.s4.8": ["Eb4+G4+Bb4/1+2+4:24 Eb5/5:24", "G3+Bb3/2+1:48", "r:48"],
  "n1.s4.9": ["F4+Ab4+D5/1+2+4:24 Eb5/5:24", "F3+Ab3+Bb3/3+2+1:48", "r:48"],
  "n1.s4.10": ["D4+Ab4+F5/1+2+5:24 C5/3:24", "r:12 Bb1+Bb2/5+1:12 Bb1+Bb2/5+1:12 Bb1+Bb2/5+1:12", "r:48"],
  "n1.s4.11": ["Eb4+G4+C5/1+2+5:24 Bb4/4:24", "Eb2+Eb3/5+1:24 r:24", "r:48"],
  "n1.s4.12": ["Bb4+Bb5/1+5:24 Eb5+Eb6/1+5:24", "G3+Bb3+Eb4+G4/5+4+2+1:48", "r:48"],
  "n1.s4.13": ["D5+D6/1+5:24 Eb5+Eb6/1+5:24", "F3+Bb3+Ab4/5+3+1:48", "r:48"],
  "n2.s1.1": ["F5+F6/1+5:24 C5+C6/1+5:24", "Ab3+D4/2+1:12 Bb2/5:12 Bb2/5:12 Bb2/5:12", "r:48"],
  "n2.s1.2": ["C5+C6/1+5:24 Bb4+Bb5/1+5:24", "Eb3+G3+Eb4/4+2+1:24 r:24", "r:48"],
  "n2.s1.3": ["Eb4+G4+Bb4/1+2+3:24 C5/4:24", "r:48", "r:48"],
  "n2.s1.4": ["E4+G4+Db5/1+2+5:24 C5/4:24", "r:48", "r:48"],
  "n2.s1.5": ["E4+G4+Bb4/1+2+4:24 C5/5:24", "r:12 C2+C3/5+1:12 C2+C3/5+1:12 C2+C3/5+1:12", "r:48"],
  "n2.s1.6": ["C4+F4+Bb4/1+2+4:24 Ab4/3:24", "F2+F3/5+1:24 r:24", "r:48"],
  "n2.s1.7": ["F4+Ab4+Db5/1+2+3:24 Eb5/4:24", "r:48", "r:48"],
  "n2.s1.8": ["G4+Bb4+F5/1+2+5:24 Eb5/4:24", "r:48", "r:48"],
  "n2.s1.9": ["G4+Bb4+Db5/1+2+4:24 Eb5/5:24", "r:12 Eb2+Eb3/5+1:12 Eb2+Eb3/5+1:12 Eb2+Eb3/5+1:12", "r:48"],
  "n2.s1.10": ["Eb4+Ab4+Db5/1+2+4:24 C5/3:24", "Ab2+Ab3/5+1:24 r:24", "r:48"],
  "n2.s1.11": ["C5+Eb5/1+3:24 F5/4:24", "Ab3+Eb4/5+2:24 F4/1:24", "r:48"],
  "n2.s1.12": ["Gb4+C5+Gb5+Ab5/1+2+4+5:24 F4+F5/1+4:24", "A3+Eb4/2+1:12 A2+A3/5+1:12 A2+A3/5+1:12 A2+A3/5+1:12", "P:48~"],
  "n2.s2.1": ["Eb4+Eb5+C6/1+3+5:24 F4+F5/1+4:24", "A2+A3/5+1:24 r:24", "P:48"],
  "n2.s2.2": ["Gb4+Bb4+Gb5+Bb5/1+2+3+5:24 F4+F5/1+4:24", "Bb3+Eb4/2+1:12 Bb2+Bb3/5+1:12 Bb2+Bb3/5+1:12 Bb2+Bb3/5+1:12", "P:48~"],
  "n2.s2.3": ["Eb4+Bb4+Eb5+Bb5/1+2+3+5:24 F4+F5/1+4:24", "Bb2+Bb3/5+1:24 r:24", "P:48"],
  // n2.s2.4, n2.s2.6 and n2.s2.8: the bracketed first chord drops its lower A or Ab, which doubles the top note, to fit the hand.
  "n2.s2.4": ["Gb4+Gb5+A5/1+4+5:24 F4+F5/1+4:24", "Cb4+Eb4/2+1:12 Cb3+Cb4/5+1:12 Cb3+Cb4/5+1:12 Cb3+Cb4/5+1:12", "P:48~"],
  "n2.s2.5": ["Eb4+Ab4+Eb5+Ab5/4+1+3+5:24 F4+F5/1+4:24", "Cb3+Cb4/5+1:24 r:24", "P:48"],
  "n2.s2.6": ["Gb4+Gb5+Ab5/1+4+5:24 F4+F5/1+4:24", "r:12 C3+C4/5+1:12 C3+C4/5+1:12 C3+C4/5+1:12", "P:48~"],
  "n2.s2.7": ["Eb4+Ab4+Eb5+Ab5/1+2+4+5:24 F4+F5/1+4:24", "C3+C4/5+1:24 r:24", "P:48~"],
  "n2.s2.8": ["Gb4+Gb5+Ab5/1+4+5:24 F4+A4+Eb5+F5/1+2+4+5:24", "r:12 C3+C4/5+1:12 C3+C4/5+1:12 C3+C4/5+1:12", "P:48~"],
  "n2.s2.9": ["Gb4+Ab4+Eb5+Gb5/1+2+4+5:24 A4+Eb5+Gb5+A5/1+2+3+5:24", "C3+C4/5+1:24 C3+Eb3+Gb3+A3+C4/5+4+3+2+1:24", "P:48"],
  "n2.s2.10": ["Bb4+F5+Ab5+Bb5/1+2+4+5:48~", "D3+F3+Bb3+D4/5+3+2+1:48~", "P:48~"],
  "n2.s2.11": ["Bb4+F5+Ab5+Bb5/1+2+4+5:12 C5+C6/1+5:12 Bb4+Bb5/1+5:12 Ab4+Ab5/1+5:12", "D3+F3+Bb3+D4/5+3+2+1:24 D2+Bb2+D3/5+2+1:24", "P:36 r:12"],
  "n2.s3.1": ["Ab4+Ab5/1+5:12 G4+G5/1+5:12 F4+F5/1+5:12 Eb4+Eb5/1+5:12", "Eb2+Bb2+G3/5+2+1:24 r:24", "r:48"],
  "n2.s3.2": ["Eb4+Ab4+Bb4+Eb5/1+2+3+5:12 D4+D5/1+5:12 C4+C5/1+5:12 D4+D5/1+5:12", "F2+Bb2+F3/5+2+1:24 r:24", "r:48"],
  "n2.s3.3": ["F4+F5/1+5:12 Eb4+Eb5/1+5:12 Bb4/3:12 G4/1:12", "G2+Bb2+Eb3+G3/5+4+2+1:24 r:24", "r:48"],
  "n2.s3.4": ["D4+D5/1+5:12 C4+C5/1+5:12 Ab4/3:12 F4/2:12", "Ab2+Eb3+F3+Ab3/5+3+2+1:24 r:24", "r:48"],
  "n2.s3.5": ["C4+C5/1+5:12 Bb3+Bb4/1+5:12 G4/3:12 Eb4/2:12", "Bb2+Eb3+G3/5+2+1:24 r:24", "r:48"],
  "n2.s3.6": ["r:12 A4+A5/1+5:12 Bb4+Bb5/1+4:12 A4+A5/1+5:12", "Bb2+D3+F3+Bb3/5+3+2+1:12 r:36", "r:48"],
  // n2.s3.7: the print's small grace note after the first octave cannot be read, so it is left out.
  "n2.s3.7": ["Bb4+Bb5/1+4:12 A4+A5/1+5:12 Bb4+Bb5/1+4:12 A4+A5/1+5:12", "D2+Bb2+D3/5+2+1:24 F2+Bb2+F3/5+2+1:24", "P:48~"],
  "n2.s3.8": ["Bb4+Bb5/1+4:12 C5+C6/1+5:12 Bb4+Bb5/1+4:12 Ab4+Ab5/1+3:12", "D2+Bb2+D3/5+2+1:24 F2+Bb2+F3/5+2+1:24", "P:48"],
  "n2.s3.9": ["Ab4+Ab5/1+5:12 G4+G5/1+5:12 F4+F5/1+5:12 Eb4+Eb5/1+5:12", "Eb2+Bb2+Eb3/5+2+1:24 G2+Bb2+G3/5+3+1:24", "P:48"],
  "n2.s4.1": ["Eb4+Eb5/1+5:12 D4+D5/1+5:12 C4+C5/1+5:12 D4+D5/1+5:12", "F2+Bb2+F3/5+2+1:24 Ab2+Bb2+Ab3/5+4+1:24", "P:48"],
  "n2.s4.2": ["F4+F5/1+5:12 Eb4+Eb5/1+5:12 Eb4+Bb4/1+4:12 G4/2:12", "G2+Bb2+G3/5+3+1:24 Bb2+G3/3+1:12 Bb3/1:12", "P:48"],
  "n2.s4.3": ["D4+D5/1+5:12 C5/4:12 C4+Ab4/1+3:12 F4/2:12", "Ab2+Eb3/5+2:12 Ab3/1:12 C3+Eb3/4+2:12 Ab3/1:12", "P:48"],
  "n2.s4.4": ["C4+C5/1+5:12 Bb4/4:12 Bb3+G4/1+3:12 Eb4/2:12", "Bb2+Eb3/5+2:12 G3/1:12 Bb2+Eb3/5+2:12 G3/1:12", "P:48"],
  "n2.s4.5": ["r:12 Bb4+D5+Bb5/1+2+5:12 Bb4+D5+Bb5/1+2+5:12 Bb4+D5+Bb5/1+2+5:12", "Bb2+D3+F3/5+3+1:24 Bb2+F3+Ab3/5+2+1:24", "P:48"],
  "n2.s4.6": ["Eb4+G4+Bb4+Eb5/1+2+3+5:12 G5+G6/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12", "Eb2+G2+Bb2+Eb3/5+4+2+1:12 G4/1:12 G4/1:12 G4/1:12", "P:48~"],
  "n2.s4.7": ["Eb5+Eb6/1+5:12 Bb4+Bb5/1+5:12 Bb4+Bb5/1+5:12 Bb4+Bb5/1+5:12", "Eb4/1:12 Bb3/3:12 Bb3/3:12 Bb3/3:12", "P:48~"],
  "n2.s4.8": ["G4+G5/1+5:12 Eb4+Eb5/1+5:12 Eb4+Eb5/1+5:12 Eb4+Eb5/1+5:12", "G3/5:12 Eb3/2:12 Eb3/1:12 Eb3/1:12", "P:48"],
  "n2.s4.9": ["Bb4/2:12 F4+D5+F5/1+3+5:12 F4+D5+F5/1+3+5:12 F4+D5+F5/1+3+5:12", "Bb2+Bb3/5+1:12 Bb1/5:12 Bb1/5:12 Bb1/5:12", "r:48"],
  "n2.s5.1": ["G4+Bb4+Eb5+G5/1+2+3+5:12 G5+G6/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12", "Eb2+G2+Bb2+Eb3/5+3+2+1:12 G4/1:12 G4/1:12 G4/1:12", "P:48~"],
  "n2.s5.2": ["Eb5+Eb6/1+5:12 Bb4+Bb5/1+5:12 Bb4+Bb5/1+5:12 Bb4+Bb5/1+5:12", "Eb4/1:12 Bb3/2:12 Bb3/2:12 Bb3/2:12", "P:48~"],
  "n2.s5.3": ["G4+G5/1+5:12 Eb4+Eb5/1+5:12 Eb4+Eb5/1+5:12 Eb4+Eb5/1+5:12", "G3/1:12 Eb3/3:12 Eb3/3:12 Eb3/3:12", "P:48"],
  "n2.s5.4": ["Bb4/1:12 D5+F5+Bb5/2+3+5:12 D5+F5+Bb5/2+3+5:12 D5+F5+Bb5/2+3+5:12", "Bb2+Bb3/5+1:12 Bb1/5:12 Bb1/5:12 Bb1/5:12", "P:48"],
  "n2.s5.5": ["Bb4+Eb5+G5+Bb5/1+2+3+5:24 r:24", "Eb2+G2+Bb2+Eb3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n2.s5.6": ["r:12 Bb4+D5+F5+Bb5/1+2+3+5:12 Bb4+D5+F5+Bb5/1+2+3+5:12 Bb4+D5+F5+Bb5/1+2+3+5:12", "r:12 Bb1+Bb2/5+1:12 Bb1+Bb2/5+1:12 Bb1+Bb2/5+1:12", "P:48"],
  "n2.s5.7": ["Bb4+Eb5+G5+Bb5/1+2+3+5:24 r:24", "Eb2+G2+Bb2+Eb3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n2.s5.8": ["r:12 D5+F5+Bb5+D6/1+2+3+5:12 D5+F5+Bb5+D6/1+2+3+5:12 D5+F5+Bb5+D6/1+2+3+5:12", "r:12 Bb2+D3+F3+Bb3/5+3+2+1:12 Bb2+D3+F3+Bb3/5+3+2+1:12 Bb2+D3+F3+Bb3/5+3+2+1:12", "P:48"],
  "n2.s5.9": ["Eb5+G5+Bb5+Eb6/1+2+3+5:24 r:24", "Eb3+G3+Bb3+Eb4/5+3+2+1:24 r:24", "P:48~"],
  "n2.s5.10": ["r:48", "r:48", "P:48~"],
  "n2.s5.11": ["r:48", "r:48", "P:48"],
};

/**
 * Recapitulation and coda, print pages 6 to 10 (Beethoven's bars 248 to the end), from n5.s1.7, the
 * motto's three short notes before the fermata. That bar's first eighth is the development's last chord,
 * as Liszt prints it. The oboe's free cadenza at n5.s3.7 runs 192 units, so it takes four bars of 48.
 */
const RECAPITULATION: Record<string, PrintBar> = {
  "n5.s1.7": ["F4+F5/1+5:12 G4+G5/1+5:12 G4+G5/1+5:12 G4+G5/1+5:12", "F2+F3/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12", "r:12 P:36~"],
  "n5.s1.8": ["G3+D4+F4+Ab4/1+2+3+5:48", "Eb2+G2/5+3:3 Eb3/1:3 Eb2+G2/5+3:3 Eb3/1:3 Eb2+G2/5+3:3 Eb3/1:3 Eb2+G2/5+3:3 Eb3/1:3 Eb2+G2/5+3:3 Eb3/1:3 Eb2+G2/5+3:3 Eb3/1:3 Eb2+G2/5+3:3 Eb3/1:3 Eb2+G2/5+3:3 Eb3/1:3", "P:48"],
  // n5.s1.9: the print gives each hand's inner second to the thumb alone, which one finger per key cannot
  // write. The right hand drops G4 and the left hand drops F3, each a doubling.
  "n5.s1.9": ["r:12 F4+F5+G5/1+4+5:12 F4+F5+G5/1+4+5:12 F4+F5+G5/1+4+5:12", "r:12 F2+G2+G3/5+4+1:12 F2+G2+G3/5+4+1:12 F2+G2+G3/5+4+1:12", "P:36 r:12"],
  "n5.s2.1": ["G3+D4+G4/1+2+5:48~", "D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3", "P:48~"],
  "n5.s2.2": ["G3+D4+G4/1+2+5:48", "D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3 D2+G2/5+2:3 D3/1:3", "P:48"],
  "n5.s2.3": ["r:12 G4/2:12 G4/2:12 G4/2:12", "r:48", "r:48"],
  "n5.s2.4": ["Eb4/1:12 Ab4/3:12 Ab4/3:12 Ab4/3:12", "C3+C4/5+1:48~", "r:48"],
  "n5.s2.5": ["G4/2:12 Eb5/5:12 Eb5/5:12 Eb5/5:12", "C3+C4/5+1:48~", "r:48"],
  "n5.s2.6": ["C5/5:24 r:24", "C3+C4/5+1:24 C3+C4/5+1:24", "r:48"],
  "n5.s2.7": ["r:12 G4/2:12 G4/2:12 G4/2:12", "Eb3+Eb4/4+1:24 C3+C4/5+1:24", "r:48"],
  "n5.s2.8": ["D4/1:12 Ab4/3:12 Ab4/3:12 Ab4/3:12", "B2+B3/5+1:48~", "r:48"],
  "n5.s2.9": ["G4/2:12 F5/5:12 F5/5:12 F5/5:12", "B2+B3/5+1:48~", "r:48"],
  "n5.s2.10": ["D5/5:48~", "B2+B3/5+1:24 G2+G3/5+1:24", "r:48"],
  "n5.s2.11": ["D5/5:12 G5/5:12 G5/5:12 F5/4:12", "B2+B3/4+1:24 G2+G3/5+1:24", "r:48"],
  "n5.s3.1": ["Eb5/3:12 Eb4/1:12 Eb4/1:12 F4/4:12", "C3+G3+C4/5+2+1:24 r:24", "r:48"],
  "n5.s3.2": ["G4+D5/1+2:12 G5/5:12 G5/5:12 F5/4:12", "B2+G3+B3/5+2+1:24 r:24", "r:48"],
  "n5.s3.3": ["Eb5/3:12 Eb4/1:12 Eb4/1:12 F4/4:12", "C3+G3+C4/5+2+1:12 Eb3/4:12 Eb3/4:12 F3/3:12", "r:48"],
  "n5.s3.4": ["G4+D5/1+3:12 B4+G5/1+5:12 C5+G5/2+5:12 D5+F5/3+4:12", "G3+B3/5+3:12 G3+B3/5+3:12 A3+C4/4+2:12 B3+D4/3+1:12", "r:48"],
  "n5.s3.5": ["G4+Eb5/1+4:24 r:24", "C4+Eb4/2+1:24 r:24", "r:48"],
  "n5.s3.6": ["C4+F#4+C5/1+2+5:24 r:24", "Ab2+C3+Ab3/5+4+1:24 r:24", "r:48"],
  // n5.s3.7: the fermata chord holds its half-note G5 for the whole bar, so its G4 and B4 sound with it.
  // The oboe's cadenza follows it at its printed lengths, 192 units over four bars of our own count.
  "n5.s3.7": ["G4+B4+G5/1+2+5:48", "G2+D3+G3/5+2+1:24 r:24", "r:48"],
  "n5.s3.7b": ["F5/4:24 Eb5/3:24", "r:48", "r:48"],
  "n5.s3.7c": ["D5/2:48", "r:48", "r:48"],
  "n5.s3.7d": ["Eb5/3:6 D5/2:6 C5/1:6 D5/2:6 F5/4:24", "r:48", "r:48"],
  "n5.s3.7e": ["Eb5/3:24 D5/2:24", "r:48", "r:48"],
  "n5.s3.8": ["r:48", "r:12 Ab4/1:12 Ab4/1:12 Ab4/1:12", "r:48"],
  "n5.s3.9": ["r:12 D4/1:12 D4/1:12 D4/1:12", "F4/2:48", "r:48"],
  "n5.s3.10": ["B3/1:48", "r:12 Ab3/1:12 Ab3/1:12 Ab3/1:12", "r:48"],
  "n5.s4.1": ["G3/1:48", "r:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "r:48"],
  "n5.s4.2": ["G3+C4+Eb4/1+2+3:12 Ab4/5:12 Ab4/5:12 Ab4/5:12", "C2+C3/5+1:12 Ab2+Ab3/5+1:12 Ab2+Ab3/5+1:12 Ab2+Ab3/5+1:12", "r:12 P:36~"],
  "n5.s4.3": ["F4/5:12 D4/3:12 D4/3:12 D4/3:12", "F2+F3/5+1:12 D2+D3/5+1:12 D2+D3/5+1:12 D2+D3/5+1:12", "P:48~"],
  "n5.s4.4": ["B3/1:12 Ab3/1:12 Ab3/1:12 Ab3/1:12", "B1+B2/5+1:12 Ab1+Ab2/5+1:12 Ab1+Ab2/5+1:12 Ab1+Ab2/5+1:12", "P:48"],
  "n5.s4.5": ["G3/1:12 D4+F4+B4/1+2+4:12 D4+F4+B4/1+2+4:12 D4+F4+B4/1+2+4:12", "G1+G2/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12", "r:48"],
  "n5.s4.6": ["C4+Eb4+C5/1+2+5:12 Eb4+G4+C5/1+2+5:12 Eb4+G4+C5/1+2+5:12 Eb4+G4+C5/1+2+5:12", "C2+C3/5+1:12 r:36", "r:48"],
  "n5.s4.7": ["D4+F4+Ab4+C5/1+2+3+5:48", "r:12 C2+C3/5+1:12 C2+C3/5+1:12 C2+C3/5+1:12", "r:48"],
  "n5.s4.8": ["B4/4:12 F4+Ab4+B4/1+2+3:12 F4+Ab4+B4/1+2+3:12 F4+Ab4+D5/1+2+4:12", "C2+C3/5+1:24 r:24", "r:48"],
  "n5.s4.9": ["Eb4+G4+D5/1+2+5:48", "r:12 C2+C3/5+1:12 C2+C3/5+1:12 C2+C3/5+1:12", "r:48"],
  "n5.s5.1": ["C5/5:12 C5/4:12 Eb4+G4+C5/1+2+4:12 Eb5/5:12", "C2+C3/5+1:24 Eb3+G3+C4/3+2+1:12 C3/5:12", "r:48"],
  "n5.s5.2": ["F4+Ab4+Eb5/1+2+5:12 D5/4:12 F4+Ab4+D5/1+2+4:12 F5/5:12", "C2+C3/5+1:24 F3+Ab3+B3/3+2+1:12 C3/5:12", "P:48"],
  "n5.s5.3": ["G4+Bb4+F5/1+2+5:12 E5/4:12 G4+Bb4+E5/1+2+4:12 G5/5:12", "C2+C3/5+1:24 G3+Bb3/2+1:12 C3/5:12", "P:48"],
  "n5.s5.4": ["Ab4+C5+G5/1+2+5:12 F5/4:12 Ab4+C5+F5/1+2+4:12 Ab5/5:12", "C2+C3/5+1:24 F3+Ab3/2+1:12 C3/5:12", "P:48"],
  "n5.s5.5": ["Bb4+E5+Ab5/1+2+5:12 G5/4:12 Bb4+E5+G5/1+2+4:12 Bb5/5:12", "C2+C3/5+1:24 E3+G3/2+1:12 C3/5:12", "P:48"],
  "n5.s5.6": ["C5+F5+Bb5/1+2+5:12 Ab5/4:12 C5+F5+Ab5/1+2+4:12 C6/5:12", "C2+C3/5+1:24 F3+Ab3/2+1:12 C3/5:12", "P:48"],
  "n5.s5.7": ["D5+F5+Ab5+C6/1+2+3+5:12 B5/4:12 D5+F5+Ab5+B5/1+2+3+4:12 D6/5:12", "C2+C3/5+1:24 F3+Ab3+B3/3+2+1:12 C3/5:12", "P:48"],
  "n5.s5.8": ["C5+Eb5+C6/1+2+5:12 G5+C6+Eb6/1+2+4:12 G5+C6+Eb6/1+2+4:12 G5+C6+Eb6/1+2+4:12", "C2+Eb2+G2+C3/5+3+2+1:12 G4+C5+Eb5/5+3+2:12 G4+C5+Eb5/5+3+2:12 G4+C5+Eb5/5+3+2:12", "P:48~"],
  "n5.s5.9": ["Eb5+G5+C6/2+3+5:12 C5+Eb5+G5/2+3+5:12 C5+Eb5+G5/2+3+5:12 C5+Eb5+G5/2+3+5:12", "Eb4+G4+C5/4+2+1:12 C4+Eb4+G4/3+2+1:12 C4+Eb4+G4/3+2+1:12 C4+Eb4+G4/3+2+1:12", "P:48~"],
  "n6.s1.1": ["G4+C5+Eb5/1+2+3:12 Eb4+G4+C5/2+3+5:12 C4+Eb4+G4/1+2+3:12 C4+Eb4+G4/1+2+3:12", "G3+C4+Eb4/5+3+2:12 Eb3+G3+C4/5+2+1:12 C3+Eb3+G3/5+3+2:12 C3+Eb3+G3/5+3+2:12", "P:48~"],
  // n6.s1.2: the left hand's chords drop C3 and G3, which double C2 and G2, to fit the hand.
  "n6.s1.2": ["C4+Eb4/1+2:12 C4/1:12 C4/1:12 C4/1:12", "C3+Eb3/5+3:12 C2+G2+Eb3/5+2+1:12 C2+G2+Eb3/5+2+1:12 C2+G2+Eb3/5+2+1:12", "P:48"],
  // n6.s1.3: the left hand's first chord drops G1, which doubles G2, to fit the hand.
  "n6.s1.3": ["B3/1:12 G5+B5+F6/1+2+5:12 G5+B5+D6/1+2+3:12 G5+B5+D6/1+2+3:12", "G2+D3+F3+G3/5+3+2+1:12 G4+D5+F5/5+2+1:12 G4+B4+D5/5+2+1:12 G4+B4+D5/5+2+1:12", "P:48~"],
  "n6.s1.4": ["D5+F5+B5/1+2+5:12 B4+D5+G5/1+2+5:12 B4+D5+F5/1+2+4:12 B4+D5+F5/1+2+4:12", "D4+F4+B4/5+3+1:12 B3+D4+G4/5+3+1:12 B3+D4+F4/5+2+1:12 B3+D4+F4/5+2+1:12", "P:48~"],
  "n6.s1.5": ["B4+D5/1+2:12 D4+F4+B4/1+2+5:12 D4+F4+G4/1+2+3:12 B3+D4+F4/1+2+4:12", "B3+D4/5+3:12 D3+F3+B3/5+3+1:12 D3+F3+G3/5+3+2:12 G2+D3+F3/5+2+1:12", "P:48~"],
  // n6.s1.6: the left hand's second chord drops G1, which doubles G2, to fit the hand.
  "n6.s1.6": ["B3+D4/1+3:12 B3/4:12 C4/5:12 C4/5:12", "G2+D3/5+1:12 G2+D3+F3/5+2+1:12 C2+G2+Eb3/5+3+1:12 C2+G2+Eb3/5+3+1:12", "P:12 r:36"],
  // n6.s1.7: the left hand's first chord drops F#2, which doubles F#3, and is rolled.
  "n6.s1.7": ["C4/1:12 Eb5+Eb6/1+5:12 Eb5+Eb6/1+5:12 Eb5+Eb6/1+5:12", "C2+A2+Eb3+F#3/5+3+2+1:12 Eb3+Eb4/5+1:12 Eb3+Eb4/5+1:12 Eb3+Eb4/5+1:12", "P:48~"],
  "n6.s2.1": ["C5+C6/1+5:12 A4+A5/1+5:12 A4+A5/1+5:12 A4+A5/1+5:12", "C3+C4/5+1:12 A2+A3/5+1:12 A2+A3/5+1:12 A2+A3/5+1:12", "P:48~"],
  "n6.s2.2": ["F#4+F#5/1+5:12 Eb4+Eb5/1+5:12 Eb4+Eb5/1+5:12 Eb4+Eb5/1+5:12", "F#2+F#3/5+1:12 Eb2+Eb3/5+1:12 Eb2+Eb3/5+1:12 Eb2+Eb3/5+1:12", "P:48~"],
  "n6.s2.3": ["C4+C5/1+5:12 A3+A4/1+5:12 A3+A4/1+5:12 A3+A4/1+5:12", "C2+C3/5+1:12 A1+A2/5+1:12 A1+A2/5+1:12 A1+A2/5+1:12", "P:48~"],
  "n6.s2.4": ["A3+C4+Eb4+F#4/1+2+3+4:24 r:24", "C2+Eb2+F#2+A2+C3/5+4+3+2+1:24 r:24", "P:24 r:24"],
  "n6.s2.5": ["G3+B3+D4+G4/1+2+3+5:24 r:24", "B1+D2+G2+B2/5+4+2+1:24 r:24", "P:24 r:24"],
  "n6.s2.6": ["r:12 G4/3:12 G4/3:12 G4/3:12", "r:48", "r:48"],
  "n6.s2.7": ["r:48", "C4/1:48", "r:48"],
  "n6.s2.8": ["D4/1:48", "r:48", "r:48"],
  "n6.s2.9": ["r:48", "G3/2:48", "r:48"],
  "n6.s2.10": ["E4+G4/1+2:24 C5/5:24", "C4/1:48", "r:48"],
  "n6.s2.11": ["F4+B4/1+3:24 C5/4:24", "D4/1:48", "r:48"],
  "n6.s3.1": ["B3+F4+D5/1+2+5:24 A4/3:24", "r:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "r:48"],
  "n6.s3.2": ["C4+E4+A4/1+2+4:24 G4/3:24", "C2+C3/5+1:24 r:24", "r:48"],
  "n6.s3.3": ["C5+E5+G5/1+2+3:24 C6/5:24", "G3+E4+G4/5+2+1:48", "r:48"],
  "n6.s3.4": ["D5+F5+B5/1+2+4:24 C6/5:24", "D4+F4/2+1:48", "r:48"],
  "n6.s3.5": ["B4+F5+D6/1+2+5:24 A5/3:24", "r:12 G2/1:12 G2/1:12 G2/1:12", "r:48"],
  "n6.s3.6": ["C5+E5+A5/1+2+4:24 G5/3:24", "C3/1:24 r:24", "r:48"],
  "n6.s3.7": ["C4+E4+G4/1+2+3:24 C5/5:24", "E3+G3/3+1:48", "r:48"],
  "n6.s3.8": ["D4+F4+B4/1+2+4:24 C5/5:24", "D3+F3/5+3:48", "r:48"],
  "n6.s3.9": ["B3+F4+D5/1+2+5:24 A4/3:24", "r:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "r:48"],
  "n6.s3.10": ["C4+E4+A4/1+2+4:24 G4/3:24", "C2+C3/5+1:24 r:24", "r:48"],
  "n6.s4.1": ["C5+E5+G5/1+2+3:24 C6/5:24", "G3+E4+G4/5+2+1:48", "r:48"],
  "n6.s4.2": ["D5+F5+B5/1+2+4:24 C6/5:24", "D4+F4/2+1:48", "r:48"],
  "n6.s4.3": ["B4+F5+D6/1+2+5:24 A5/3:24", "r:12 G2/1:12 G2/1:12 G2/1:12", "r:48"],
  "n6.s4.4": ["C5+E5+A5/1+2+4:24 G5/3:24", "C3/1:24 r:24", "r:48"],
  // n6.s4.5: the right hand drops its Bb4, which the left hand's violin line plays at the unison.
  "n6.s4.5": ["G4/1:48", "Bb4/2:24 C5/1:24", "r:48"],
  "n6.s4.6": ["E4+G4/1+3:48", "Db5/1:24 C5/2:24", "r:48"],
  "n6.s4.7": ["E4+G4+Bb4/1+2+4:24 C5/5:24", "r:12 C2+C3/5+1:12 C2+C3/5+1:12 C2+C3/5+1:12", "r:48"],
  "n6.s4.8": ["C4+F4+Bb4/1+2+4:24 A4/3:24", "F2+F3/5+1:24 r:24", "r:48"],
  "n6.s4.9": ["F4+A4/2+4:48", "C5/2:24 D5/1:24", "r:48"],
  "n6.s4.10": ["F#4+A4/2+4:48", "Eb5/1:24 D5/2:24", "r:48"],
  "n6.s6.1": ["F#4+A4+C5/1+2+4:24 D5/5:24", "r:12 D2+D3/5+1:12 D2+D3/5+1:12 D2+D3/5+1:12", "r:48"],
  "n6.s6.2": ["D4+G4+C5/1+2+5:24 B4/4:24", "G2+G3/5+1:24 r:24", "r:48"],
  "n6.s6.3": ["F4+F5/1+3:24 G4+G5/1+4:24", "Ab2+Ab3/5+1:48~", "P:48~"],
  "n6.s6.4": ["Ab4+Ab5/1+5:24 G4+G5/1+4:24", "Ab2+Ab3/5+1:12 Ab1/5:12 Ab1/5:12 Ab1/5:12", "P:48~"],
  "n6.s6.5": ["F4+F5/1+3:24 G4+G5/1+4:24", "Ab1+Ab2/5+1:24 r:24", "P:24 r:24"],
  "n6.s6.6": ["Ab4+Ab5/1+5:24 G4+G5/1+4:24", "B2+B3/5+1:12 B1/5:12 B1/5:12 B1/5:12", "P:48~"],
  "n6.s6.7": ["F4+F5/1+3:24 G4+G5/1+4:24", "B1+B2/5+1:24 r:24", "P:24 r:24"],
  "n6.s6.8": ["Ab4+Ab5/1+5:24 G4+G5/1+4:24", "D3+C4/5+1:12 D2/5:12 D2/5:12 D2/5:12", "P:48~"],
  "n6.s6.9": ["F4+F5/1+3:24 G4+G5/1+4:24", "D2+D3/5+1:24 r:24", "P:48~"],
  "n6.s6.10": ["Ab4+Ab5/1+5:24 G4+G5/1+4:24", "r:12 D2+D3/5+1:12 D2+D3/5+1:12 D2+D3/5+1:12", "P:48~"],
  "n6.s6.11": ["F#4+F#5/1+3:24 G4+G5/1+4:24", "D2+D3/5+1:24 r:24", "P:24 r:24"],
  "n7.s1.1": ["A4+A5/1+5:24 G4+G5/1+4:24", "r:12 D3+D4/5+1:12 D3+D4/5+1:12 D3+D4/5+1:12", "P:48~"],
  "n7.s1.2": ["F#4+F#5/1+3:24 G4+G5/1+4:24", "D3+D4/5+1:24 r:24", "P:48~"],
  "n7.s1.3": ["A5+A6/1+5:24 G5+G6/1+4:24", "A4/1:24 D4+G4/2+1:24", "P:48~"],
  "n7.s1.4": ["F#5+F#6/1+3:24 G5+G6/1+4:24", "F#4/1:24 D4+G4/2+1:24", "P:48~"],
  "n7.s1.5": ["F#5+F#6/1+3:24 G5+G6/1+4:24", "F#3/1:24 D3+G3/2+1:24", "P:48~"],
  "n7.s1.6": ["F#5+F#6/1+3:24 G5+G6/1+4:24", "F#3/1:24 D3+G3/2+1:24", "P:48"],
  "n7.s1.7": ["G5+B5+F6+G6/1+2+4+5:48~", "D2+G2/5+3:3 D3/1:3 D2+G2/5+3:3 D3/1:3 D2+G2/5+3:3 D3/1:3 D2+G2/5+3:3 D3/1:3 D2+G2/5+3:3 D3/1:3 D2+G2/5+3:3 D3/1:3 D2+G2/5+3:3 D3/1:3 D2+G2/5+3:3 D3/1:3", "P:48~"],
  // n7.s1.8: the left hand's last chord drops B2, which doubles B1, to fit the hand.
  "n7.s1.8": ["G5+B5+F6+G6/1+2+4+5:12 A5+A6/1+5:12 G5+G6/1+5:12 F5+F6/1+5:12", "D2+G2/5+1:12 r:12 B1+D3/5+1:24", "P:24 r:24"],
  "n7.s1.9": ["F5+F6/1+5:12 E5+E6/1+5:12 D5+D6/1+5:12 C5+C6/1+5:12", "C2+G2+C3/5+2+1:24 r:24", "r:48"],
  "n7.s1.10": ["C5+F5+G5+C6/1+2+3+5:12 B4+B5/1+5:12 A4+A5/1+5:12 B4+B5/1+5:12", "D2+G2+D3/5+2+1:24 r:24", "r:48"],
  "n7.s2.1": ["D5+D6/1+5:12 C5+C6/1+5:12 G5/4:12 E5/2:12", "E2+E3/5+1:24 C4+E4+G4/5+3+1:24", "P:48"],
  "n7.s2.2": ["B4+B5/1+5:12 A4+A5/1+5:12 F5/4:12 D5/2:12", "F2+F3/5+1:24 A3+C4+D4+F4/5+3+2+1:24", "P:48"],
  "n7.s2.3": ["A4+A5/1+5:12 G4+G5/1+5:12 E5/3:12 C5/1:12", "G2+G3/5+1:24 G3+C4+E4/5+2+1:24", "P:48"],
  "n7.s2.4": ["G4/1:12 F#4+F#5/1+4:12 G4+G5/1+5:12 F#4+F#5/1+4:12", "G3+B3+D4/5+3+1:12 r:36", "r:48"],
  "n7.s2.5": ["G4+D5+F5+G5/1+2+3+5:12 F#4+F#5/1+4:12 G4+G5/1+5:12 F#4+F#5/1+4:12", "B1+G2+B2/5+2+1:24 D2+D3/5+1:24", "P:48~"],
  "n7.s2.6": ["G4+G5/1+5:12 A4+A5/1+5:12 G4+G5/1+5:12 F4+F5/1+5:12", "B1+B2/5+1:24 D2+D3/5+1:24", "P:48"],
  "n7.s2.7": ["F4+F5/1+5:12 E4+E5/1+5:12 D4+D5/1+5:12 C4+C5/1+5:12", "C2+G2+C3/5+2+1:24 E2+G2+E3/5+3+1:24", "P:48"],
  "n7.s3.1": ["C4+C5/1+5:12 B3+B4/1+5:12 A3+A4/1+4:12 B3+B4/1+5:12", "D2+G2+D3/5+4+1:24 F2+G2+F3/5+4+1:24", "P:48"],
  "n7.s3.2": ["D4+D5/1+5:12 C4+C5/1+5:12 G4/3:12 E4/1:12", "E2+G2+E3/5+4+1:24 G2+E3/5+1:12 G3/1:12", "P:48"],
  "n7.s3.3": ["B3+B4/1+5:12 A3+A4/1+4:12 F4/3:12 D4/1:12", "F2+D3/5+2:12 F3/1:12 A2+D3/4+2:12 F3/1:12", "P:48"],
  "n7.s3.4": ["A3+A4/1+5:12 G3+G4/1+5:12 E4/2:12 C4/1:12", "G2+C3/5+2:12 E3/1:12 G2+C3/5+2:12 E3/1:12", "P:48"],
  "n7.s3.5": ["r:12 G4+B4+G5/1+2+5:12 G4+B4+G5/1+2+5:12 G4+B4+G5/1+2+5:12", "G2+B2+D3+G3/5+4+2+1:24 G2+D3+F3/5+2+1:24", "P:48"],
  "n7.s3.6": ["C4+E4+G4+C5/1+2+3+5:12 E5+E6/1+5:12 E5+E6/1+5:12 E5+E6/1+5:12", "C2+E2+G2+C3/5+3+2+1:12 E4/1:12 E4/1:12 E4/1:12", "P:48~"],
  "n7.s3.7": ["C5+C6/1+5:12 G4+G5/1+5:12 G4+G5/1+5:12 G4+G5/1+5:12", "C4/1:12 G3/1:12 G3/1:12 G3/1:12", "P:48~"],
  "n7.s4.1": ["E4+E5/1+5:12 C4+C5/1+5:12 C4+C5/1+5:12 C4+C5/1+5:12", "E3/1:12 C3/1:12 C3/1:12 C3/1:12", "P:48"],
  "n7.s4.2": ["G4/2:12 D4+B4+D5/1+3+5:12 D4+B4+D5/1+3+5:12 D4+B4+D5/1+3+5:12", "G2+G3/5+1:12 G1/5:12 G1/5:12 G1/5:12", "P:48"],
  "n7.s4.3": ["E4+G4+C5+E5/1+2+3+5:12 E6+E7/1+5:12 E6+E7/1+5:12 E6+E7/1+5:12", "C2+E2+G2+C3/5+3+2+1:12 E4+E5/5+1:12 E4+E5/5+1:12 E4+E5/5+1:12", "P:48~"],
  "n7.s4.4": ["C6+C7/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12", "C4+C5/5+1:12 G3+G4/5+1:12 G3+G4/5+1:12 G3+G4/5+1:12", "P:48~"],
  "n7.s4.5": ["E5+E6/1+5:12 C5+C6/1+5:12 C5+C6/1+5:12 C5+C6/1+5:12", "E3+E4/5+1:12 C3+C4/5+1:12 C3+C4/5+1:12 C3+C4/5+1:12", "P:48"],
  "n7.s4.6": ["G4+G5/1+5:12 B4+D5/2+3:12 B4+D5/2+3:12 B4+D5/2+3:12", "G2+G3/5+1:12 G1/5:12 G1/5:12 G1/5:12", "P:48"],
  "n7.s4.7": ["G4+C5+E5+G5/1+2+3+5:24 r:24", "C2+E2+G2+C3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n7.s5.1": ["r:12 G4+B4+D5+G5/1+2+3+5:12 G4+B4+D5+G5/1+2+3+5:12 G4+B4+D5+G5/1+2+3+5:12", "r:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "P:48"],
  "n7.s5.2": ["G4+C5+E5+G5/1+2+3+5:24 r:24", "C2+E2+G2+C3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n7.s5.3": ["r:12 B4+D5+G5+B5/1+2+3+5:12 B4+D5+G5+B5/1+2+3+5:12 B4+D5+G5+B5/1+2+3+5:12", "r:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12", "P:48"],
  "n7.s5.4": ["C5+E5+G5+C6/1+2+3+5:12 C6+C7/1+5:12 C6+C7/1+5:12 C6+C7/1+5:12", "C3+E3+G3+C4/5+3+2+1:12 C4+C5/5+1:12 C4+C5/5+1:12 C4+C5/5+1:12", "P:48~"],
  "n7.s5.5": ["C6+C7/1+5:12 C5+E5+C6/1+2+5:12 C5+E5+C6/1+2+5:12 C5+E5+C6/1+2+5:12", "C4+C5/5+1:12 C3+G3+C4/5+2+1:12 C3+G3+C4/5+2+1:12 C3+G3+C4/5+2+1:12", "P:48"],
  "n7.s5.6": ["C5+F5+C6/1+2+5:12 C6+C7/1+5:12 C6+C7/1+5:12 C6+C7/1+5:12", "Ab2+F3+Ab3/5+2+1:12 C4+C5/5+1:12 C4+C5/5+1:12 C4+C5/5+1:12", "P:48~"],
  "n7.s5.7": ["C6+C7/1+5:12 C5+F5+C6/1+2+5:12 C5+F5+C6/1+2+5:12 C5+F5+C6/1+2+5:12", "C4+C5/5+1:12 Ab2+F3+Ab3/5+2+1:12 Ab2+F3+Ab3/5+2+1:12 Ab2+F3+Ab3/5+2+1:12", "P:48"],
  "n7.s6.1": ["C5+G5+C6/1+3+5:12 C6+C7/1+5:12 C6+C7/1+5:12 C6+C7/1+5:12", "E2+C3+E3/5+2+1:12 C4+C5/5+1:12 C4+C5/5+1:12 C4+C5/5+1:12", "P:48~"],
  "n7.s6.2": ["C6+C7/1+5:12 C5+G5+C6/1+3+5:12 C5+G5+C6/1+3+5:12 C5+G5+C6/1+3+5:12", "C4+C5/5+1:12 E2+C3+E3/5+2+1:12 E2+C3+E3/5+2+1:12 E2+C3+E3/5+2+1:12", "P:48"],
  "n7.s6.3": ["C5+Ab5+C6/1+3+5:12 C6+C7/1+5:12 C6+C7/1+5:12 C6+C7/1+5:12", "F2+C3+F3/5+2+1:12 C4+C5/5+1:12 C4+C5/5+1:12 C4+C5/5+1:12", "P:48~"],
  "n7.s6.4": ["C6+C7/1+5:12 C5+Ab5+C6/1+3+5:12 C5+Ab5+C6/1+3+5:12 C5+Ab5+C6/1+3+5:12", "C4+C5/5+1:12 F2+C3+F3/5+2+1:12 F2+C3+F3/5+2+1:12 F2+C3+F3/5+2+1:12", "P:48"],
  "n7.s6.5": ["Db5+Ab5+Db6/1+3+5:12 Db5+F5+Ab5+Db6/1+2+3+5:12 Db5+F5+Ab5+Db6/1+2+3+5:12 Db5+F5+Ab5+Db6/1+2+3+5:12", "F2+Db3+F3/5+2+1:12 F2+Ab2+Db3+F3/5+4+2+1:12 F2+Ab2+Db3+F3/5+4+2+1:12 F2+Ab2+Db3+F3/5+4+2+1:12", "P:48~"],
  "n7.s6.6": ["Db5+F5+Ab5+Db6/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12", "F2+Ab2+Db3+F3/5+4+2+1:12 F1+Ab1+Db2+F2/5+4+2+1:12 F1+Ab1+Db2+F2/5+4+2+1:12 F1+Ab1+Db2+F2/5+4+2+1:12", "P:48~"],
  "n7.s6.7": ["Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12", "F1+Ab1+Db2+F2/5+4+2+1:12 F1+Ab1+Db2+F2/5+4+2+1:12 F1+Ab1+Db2+F2/5+4+2+1:12 F1+Ab1+Db2+F2/5+4+2+1:12", "P:48~"],
  "n8.s1.1": ["Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12 Db6+F6+Ab6+Db7/1+2+3+5:12", "F1+Ab1+Db2+F2/5+3+2+1:12 F1+Ab1+Db2+F2/5+3+2+1:12 F1+Ab1+Db2+F2/5+3+2+1:12 F1+Ab1+Db2+F2/5+3+2+1:12", "P:48~"],
  "n8.s1.2": ["Db6+F6+Ab6+Db7/1+2+3+5:24 r:24", "F1+Ab1+Db2+F2/5+3+2+1:24 r:24", "P:24 r:24"],
  "n8.s1.3": ["r:12 F4/2:12 F4/2:12 F4/2:12", "r:12 F3/2:12 F3/2:12 F3/2:12", "r:48"],
  "n8.s1.4": ["Ab4/3:24 r:24", "Ab3/1:24 r:24", "r:48"],
  "n8.s1.5": ["r:48", "r:48", "r:48"],
  "n8.s1.6": ["r:12 Eb5+A5+Eb6/1+2+5:12 Eb5+A5+Eb6/1+2+5:12 Eb5+A5+Eb6/1+2+5:12", "r:12 F#2+C3+F#3/5+2+1:12 F#2+C3+F#3/5+2+1:12 F#2+C3+F#3/5+2+1:12", "P:48~"],
  "n8.s1.7": ["Eb5+A5+Eb6/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12", "F#2+C3+F#3/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12", "P:48~"],
  "n8.s1.8": ["Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12", "F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12", "P:48~"],
  "n8.s1.9": ["Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12", "F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12", "P:48~"],
  "n8.s2.1": ["Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12 Eb6+A6+Eb7/1+2+5:12", "F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12 F#1+C2+F#2/5+2+1:12", "P:48~"],
  "n8.s2.2": ["Eb6+A6+Eb7/1+2+5:24 r:24", "F#1+C2+F#2/5+2+1:24 r:24", "P:48~"],
  "n8.s2.3": ["r:12 C5+C6/1+5:12 C5+C6/1+5:12 C5+C6/1+5:12", "r:12 C4/1:12 C4/1:12 C4/1:12", "P:48~"],
  "n8.s2.4": ["Eb5+Eb6/1+5:24 r:24", "Eb4/1:24 r:24", "P:24 r:24"],
  "n8.s2.5": ["r:48", "r:12 G3+G4/5+1:12 G3+G4/5+1:12 G3+G4/5+1:12", "r:48"],
  "n8.s2.6": ["r:48", "Eb3+G3+Eb4/5+3+1:48", "r:48"],
  "n8.s2.7": ["B3+B4/1+5:12 C4+C5/1+5:12 D4+D5/1+5:12 Eb4+Eb5/1+4:12", "F3+F4/5+1:48", "P:48~"],
  "n8.s2.8": ["F4+F5/1+3:12 G4+G5/1+4:12 Ab4+Ab5/1+4:12 G4+G5/1+5:12", "D3+F3+Ab3+B3+D4/5+4+3+2+1:48~", "P:48~"],
  "n8.s2.9": ["Ab4+Ab5/1+4:12 G5/3:12 Ab5/4:12 G5/3:12", "D3+F3+Ab3+B3+D4/5+4+3+2+1:12 G3+G4/5+1:12 G3+G4/5+1:12 G3+G4/5+1:12", "P:48"],
  "n8.s3.1": ["r:48", "Eb3+G3+Eb4/5+3+1:48", "r:48"],
  "n8.s3.2": ["B4+B5/1+5:12 C5+C6/1+5:12 D5+D6/1+5:12 Eb5+Eb6/1+4:12", "F3+F4/5+1:48", "P:48~"],
  "n8.s3.3": ["F5+F6/1+5:12 G5+G6/1+5:12 Ab5+Ab6/1+4:12 G5+G6/1+5:12", "D3+F3+Ab3+B3+D4/5+4+3+2+1:48~", "P:48~"],
  "n8.s3.4": ["Ab5+Ab6/1+4:12 G5+G6/1+5:12 Ab5+Ab6/1+4:12 G5+G6/1+5:12", "D3+F3+Ab3+B3+D4/5+4+3+2+1:12 G3+F4/5+1:12 G3+F4/5+1:12 G3+F4/5+1:12", "P:36 r:12"],
  "n8.s3.5": ["Ab5+Ab6/1+4:12 G5+G6/1+5:12 Bb5+Bb6/1+4:12 Ab5+Ab6/1+4:12", "Eb3+Eb4/5+1:24 F3+F4/5+1:24", "r:48"],
  "n8.s3.6": ["G5+G6/1+5:12 F5+F6/1+5:12 Ab5+Ab6/1+4:12 G5+G6/1+5:12", "D3+D4/5+1:24 Eb3+Eb4/5+1:24", "r:48"],
  "n8.s3.7": ["F5+F6/1+5:12 Eb5+Eb6/1+4:12 G5+G6/1+5:12 F5+F6/1+5:12", "C3+C4/5+1:24 D3+D4/5+1:24", "r:48"],
  "n8.s3.8": ["Eb5+Eb6/1+4:12 D5+D6/1+5:12 F5+F6/1+5:12 Eb5+Eb6/1+4:12", "Bb2+Bb3/5+1:24 C3+C4/5+1:24", "r:48"],
  "n8.s4.1": ["D5+D6/1+5:12 C5+C6/1+5:12 Eb5+Eb6/1+4:12 D5+D6/1+5:12", "Ab2+C3+Ab3/5+3+1:24 Bb2+D3+Bb3/5+3+1:24", "r:48"],
  "n8.s4.2": ["C5+C6/1+5:12 Bb4+Bb5/1+4:12 D5+D6/1+5:12 C5+C6/1+5:12", "G2+Bb2+G3/5+3+1:24 Ab2+C3+Ab3/5+3+1:24", "r:48"],
  "n8.s4.3": ["Bb4+Bb5/1+4:12 Ab4+Ab5/1+4:12 C5+C6/1+5:12 Bb4+Bb5/1+4:12", "F2+Ab2+F3/5+3+1:24 G2+Bb2+G3/5+3+1:24", "r:48"],
  "n8.s4.4": ["Ab4+Ab5/1+4:12 G4+G5/1+5:12 Bb4+Bb5/1+4:12 Ab4+Ab5/1+4:12", "Eb2+G2+Eb3/5+3+1:24 F2+Ab2+F3/5+3+1:24", "r:48"],
  "n8.s4.5": ["F4/1:12 G5/5:12 Eb4/1:12 G5/5:12", "D2+F2+D3/5+3+1:24 C2+Eb2+C3/5+3+1:24", "r:48"],
  "n8.s4.6": ["D4/1:12 G5/5:12 Eb4/1:12 G5/5:12", "B1+D2+B2/5+3+1:24 C2+Eb2+C3/5+3+1:24", "r:48"],
  "n8.s4.7": ["F4/1:12 G5/5:12 Eb4/1:12 G5/5:12", "D2+F2+D3/5+3+1:24 C2+Eb2+C3/5+3+1:24", "r:48"],
  "n8.s4.8": ["F4/1:12 G5/5:12 G4+C5/1+2:12 G5/5:12", "D2+F2+D3/5+3+1:24 E2+G2+C3+E3/5+4+2+1:24", "r:48"],
  "n8.s5.1": ["Ab4+C5/1+2:12 Ab5/5:12 C5+G5/1+4:12 C6/5:12", "F2+Ab2+C3+F3/5+4+2+1:24 E2+G2+C3+E3/5+4+2+1:24", "r:48"],
  "n8.s5.2": ["C5+Ab5/1+5:12 C6/5:12 B4+F5/1+4:12 B5/5:12", "F2+Ab2+C3+F3/5+4+2+1:24 G2+B2+G3/5+3+1:24", "r:48"],
  "n8.s5.3": ["C5+F5/1+3:12 C6/5:12 B4+F5/1+3:12 B5/5:12", "Ab2+C3+Ab3/5+3+1:24 G2+B2+G3/5+3+1:24", "r:48"],
  "n8.s5.4": ["C5+F5/1+3:12 C6/5:12 D5+F5+G5/1+2+3:12 D6/5:12", "A2+C3+A3/5+3+1:24 B2+D3+B3/5+3+1:24", "r:48"],
  "n8.s5.5": ["Eb4+C5+Eb5/1+4+5:24 C4+C5/1+5:24", "C3+Eb3+C4/5+3+1:12 C2/5:12 C2/5:12 C2/5:12", "P:48"],
  "n8.s5.6": ["D4+D5/1+5:24 Eb4+Eb5/1+5:24", "C2+C3/5+1:24 r:24", "P:24 r:24"],
  "n8.s5.7": ["F4+C5+F5/1+3+5:24 D4+D5/1+5:24", "Ab3+C4/2+1:12 Ab2+C3/5+3:12 Ab2+C3/5+3:12 Ab2+C3/5+3:12", "P:48~"],
  "n8.s5.8": ["Eb4+C5+Eb5/1+3+5:24 F4+C5+F5/1+3+5:24", "Ab2+C3/5+3:24 r:24", "P:48"],
  "n8.s5.9": ["G4+C5+G5/1+3+5:24 Eb4+Eb5/1+5:24", "C3+Eb3+C4/5+3+1:12 Eb2/5:12 Eb2/5:12 Eb2/5:12", "P:48~"],
  "n8.s6.1": ["F4+C5+F5/1+3+5:24 G4+C5+G5/1+2+5:24", "Eb2+C3/5+1:24 r:24", "P:48"],
  "n8.s6.2": ["Ab4+C5+Ab5/1+2+5:24 F4+F5/1+5:24", "F2+F3/5+1:12 Ab2+C3/3+2:12 Ab2+C3/3+2:12 Ab2+C3/3+2:12", "P:48"],
  "n8.s6.3": ["G4+C5+G5/1+2+5:24 A4+C5+A5/1+2+5:24", "Eb2+G2+C3+Eb3/5+4+2+1:24 r:24", "P:24 r:24"],
  "n8.s6.4": ["B4+D5+F5+B5/1+2+3+5:24 G4+G5/1+5:24", "D2+D3/5+1:12 G2+B2/3+2:12 G2+B2/3+2:12 G2+B2/3+2:12", "r:48"],
  "n8.s6.5": ["A4+A5/1+5:24 B4+B5/1+5:24", "F2+G2+D3+F3/5+4+2+1:48", "r:48"],
  "n8.s6.6": ["C5+Eb5+C6/1+2+5:24 G4+G5/1+5:24", "Eb2+G2+C3+Eb3/5+4+2+1:24 r:24", "P:24 r:24"],
  "n8.s6.7": ["Ab4+C5+Eb5+Ab5/1+2+3+5:24 Eb4+Eb5/1+5:24", "C2+Eb2+Ab2+C3/5+4+2+1:24 r:24", "P:24 r:24"],
  "n8.s6.8": ["F4+Ab4+C5+F5/1+2+3+5:24 D4+D5/1+5:24", "F2+Ab2+C3+F3/5+4+2+1:24 r:24", "P:24 r:24"],
  "n8.s6.9": ["Eb4+Ab4+C5+Eb5/1+2+3+5:24 F4+F5/1+5:24", "D2+Ab2+C3+D3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n8.s6.10": ["G4+C5+D5+G5/1+2+3+5:24 F#4+F#5/1+5:24", "G2+C3+D3+G3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n9.s1.1": ["G4+B4+D5+G5/1+2+3+5:24 G4/1:24", "G2+B2+D3+G3/5+4+2+1:24 G3/1:24", "P:48"],
  "n9.s1.2": ["C5+C6/1+5:48", "C3+C4/5+1:48", "r:48"],
  "n9.s1.3": ["D5+C6+D6/1+4+5:24 Eb5+C6+Eb6/1+4+5:24", "D3+C4+D4/5+2+1:24 Eb3+C4+Eb4/5+2+1:24", "r:48"],
  "n9.s1.4": ["F5+C6+F6/1+3+5:24 D5+D6/1+5:24", "F3+C4+F4/5+2+1:24 D3+D4/5+1:24", "r:48"],
  "n9.s1.5": ["C4+Eb4/1+3:24 C4+F4/1+4:24", "Eb2+C3+Eb3/5+2+1:24 F2+C3+F3/5+2+1:24", "r:48"],
  "n9.s1.6": ["C4+G4/1+5:24 Eb4/3:24", "G2+C3+G3/5+3+1:24 Eb2+Eb3/5+1:24", "r:48"],
  "n9.s1.7": ["F5+C6+F6/1+3+5:24 G5+C6+G6/1+2+5:24", "F3+C4+F4/5+2+1:24 G3+C4+G4/5+3+1:24", "r:48"],
  "n9.s1.8": ["Ab5+C6+Ab6/1+2+5:24 F5+F6/1+5:24", "Ab3+C4+Ab4/5+3+1:24 F3+F4/5+1:24", "r:48"],
  "n9.s1.9": ["B3+G4+B4/1+4+5:24 C4+G4+C5/1+4+5:24", "G2+G3/5+1:24 A2+G3+A3/5+2+1:24", "r:48"],
  "n9.s1.10": ["D4+G4+D5/1+3+5:24 B3+B4/1+5:24", "B2+G3+B3/5+2+1:24 G2/5:24", "r:48"],
  "n9.s1.11": ["C5+A5+C6/1+4+5:24 D5+B5+D6/1+4+5:24", "G3+A3+C4+G4/5+4+3+1:24 G3+B3+D4+G4/5+4+2+1:24", "r:48"],
  "n9.s2.1": ["Eb5+C6+Eb6/1+4+5:24 G5+C6/2+5:24", "G3+C4+Eb4+G4/5+3+2+1:24 G3+C4/5+3:24", "r:48"],
  "n9.s2.2": ["B3+G4+B4/1+4+5:24 C4+G4+C5/1+4+5:24", "G2+G3/5+1:24 A2+G3+A3/5+2+1:24", "r:48"],
  "n9.s2.3": ["D4+G4+D5/1+3+5:24 B3+B4/1+5:24", "B2+G3+B3/5+2+1:24 G2/5:24", "r:48"],
  "n9.s2.4": ["C5+A5+C6/1+4+5:24 D5+B5+D6/1+4+5:24", "G3+A3+C4+G4/5+4+3+1:24 G3+B3+D4+G4/5+4+2+1:24", "r:48"],
  "n9.s2.5": ["Eb5+G5+C6+Eb6/1+2+4+5:24 D5+Bb5+D6/1+4+5:24", "C4+Eb4+G4/5+3+1:24 G3+D4/5+2:24", "r:48"],
  "n9.s2.6": ["C5+Ab5+C6/1+4+5:24 Bb4+G5+Bb5/1+4+5:24", "Ab3+C4+Eb4/3+2+1:24 Eb3+Bb3+Eb4/5+2+1:24", "r:48"],
  "n9.s2.7": ["Ab4+F5+Ab5/1+4+5:24 G4+Eb5+G5/1+4+5:24", "F3+Ab3+C4/3+2+1:24 C3+G3+C4/5+2+1:24", "r:48"],
  "n9.s2.8": ["Ab3+C4+F4+Ab4/1+2+4+5:24 G3+C4+Eb4+G4/1+2+3+5:24", "F2+Ab2+C3/5+3+1:24 C2+Eb2+G2+C3/5+4+2+1:24", "r:48"],
  "n9.s2.9": ["Ab4+C5+F5+Ab5/1+2+4+5:24 G4+C5+Eb5+G5/1+2+3+5:24", "F3+Ab3+C4/5+3+1:24 C3+Eb3+G3+C4/5+4+2+1:24", "r:48"],
  "n9.s2.10": ["Ab5+C6+F6+Ab6/1+2+4+5:24 G5+C6+Eb6+G6/1+2+3+5:24", "F4+Ab4/3+1:24 C4+Eb4+G4/5+3+1:24", "r:48"],
  "n9.s2.11": ["r:24 G5+C6+Eb6+G6/1+2+3+5:24", "G2+C3+Eb3+G3/5+4+2+1:24 r:24", "P:48"],
  "n9.s3.1": ["r:24 G5+B5+D6+G6/1+2+3+5:24", "G2+B2+D3+G3/5+3+2+1:24 r:24", "P:24 r:24"],
  "n9.s3.2": ["Eb4+Eb5/1+5:24 Bb4+D5/2+4:24", "C3+C4/5+1:24 G3+Bb3/2+1:24", "r:48"],
  "n9.s3.3": ["C4+C5/1+5:24 G4+Bb4/2+4:24", "Ab2+Ab3/5+1:24 Eb3+G3/2+1:24", "r:48"],
  "n9.s3.4": ["Ab3+Ab4/1+5:24 Eb4+G4/2+4:24", "F2+F3/5+1:24 C3+Eb3/2+1:24", "r:48"],
  "n9.s3.5": ["C5+F5+Ab5/1+3+5:24 Eb5+G5/3+5:24", "F4+Ab4/3+1:24 C4+G4/5+1:24", "r:48"],
  "n9.s3.6": ["C4+F4+Ab4/1+3+5:24 Eb4+G4/3+5:24", "F3+Ab3/3+1:24 C3+Eb3+G3/5+3+1:24", "r:48"],
  "n9.s3.7": ["Ab5+C6+F6+Ab6/1+2+3+5:24 G5+C6+Eb6+G6/1+2+3+5:24", "F2+F3/5+1:24 C2+C3/5+1:24", "r:48"],
  "n9.s3.8": ["r:24 G5+C6+Eb6+G6/1+2+3+5:24", "G2+C3+Eb3+G3/5+3+2+1:24 r:24", "r:48"],
  "n9.s3.9": ["r:24 G5+B5+D6+G6/1+2+3+5:24", "G2+B2+D3+G3/5+3+2+1:24 r:24", "r:48"],
  "n9.s3.10": ["C5+Eb5+C6/1+2+5:12 G4+G5/1+5:12 G4+G5/1+5:12 G4+G5/1+5:12", "C2+Eb2+G2+C3/5+4+2+1:12 G2+G3/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12", "P:48"],
  "n9.s3.11": ["G4+G5/1+5:12 B5+D6+G6/2+3+5:12 B5+D6+G6/2+3+5:12 B5+D6+G6/2+3+5:12", "G2+G3/5+1:12 D4+F4+G4/3+2+1:12 D4+F4+G4/3+2+1:12 D4+F4+G4/3+2+1:12", "P:48"],
  "n9.s4.1": ["G5+B5+D6+G6/1+2+3+5:48~", "G3+D4+F4+G4/5+3+2+1:48~", "r:48"],
  "n9.s4.2": ["G5+B5+D6+G6/1+2+3+5:24 C6+Eb6/2+3:24", "G3+D4+F4+G4/5+3+2+1:24 C4+Eb4/3+2:24", "r:48"],
  "n9.s4.3": ["D6+F6/3+4:24 B5+D6/2+3:24", "B3+D4/3+2:24 D4+F4/2+1:24", "r:48"],
  "n9.s4.4": ["C6+Eb6/2+3:24 D6+F6/3+4:24", "C4+Eb4/2+1:12 G3/5:12 G3+B3+D4/5+3+2:12 G3/5:12", "r:48"],
  "n9.s4.5": ["C6+Eb6/2+3:12 G4/2:12 G4/2:12 G4/2:12", "C4+Eb4/2+1:12 G2+G3/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12", "P:48~"],
  "n9.s4.6": ["G4/2:12 G4+G5/1+5:12 G4+G5/1+5:12 G4+G5/1+5:12", "G2+G3/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12 G2+G3/5+1:12", "P:48~"],
  "n9.s4.7": ["G4+G5/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12", "G2+G3/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "P:48~"],
  "n9.s4.8": ["G5+G6/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12 G5+G6/1+5:12", "G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12 G1+G2/5+1:12", "P:48~"],
  "n9.s4.9": ["G3+Eb4+G4/1+3+5:48", "Eb1+G1/5+3:3 Eb2/1:3 Eb1+G1/5+3:3 Eb2/1:3 Eb1+G1/5+3:3 Eb2/1:3 Eb1+G1/5+3:3 Eb2/1:3 Eb1+G1/5+3:3 Eb2/1:3 Eb1+G1/5+3:3 Eb2/1:3 Eb1+G1/5+3:3 Eb2/1:3 Eb1+G1/5+3:3 Eb2/1:3", "P:48"],
  "n9.s4.10": ["r:12 G5+F6+G6/1+4+5:12 G5+F6+G6/1+4+5:12 G5+F6+G6/1+4+5:12", "r:12 F1+F2/5+1:12 F1+F2/5+1:12 F1+F2/5+1:12", "r:12 P:36"],
  "n9.s5.1": ["G3+D4+G4/1+2+5:48~", "D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3", "P:48~"],
  "n9.s5.2": ["G3+D4+G4/1+2+5:48", "D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3 D1+G1/5+2:3 D2/1:3", "P:48"],
  "n9.s5.3": ["r:12 G4/2:12 G4/2:12 G4/2:12", "r:48", "r:48"],
  "n9.s5.4": ["Eb4/1:12 Ab4/3:12 Ab4/3:12 Ab4/3:12", "C2+G2/5+1:48~", "r:48"],
  "n9.s5.5": ["G4/2:12 Eb5/5:12 Eb5/5:12 Eb5/5:12", "C2+G2/5+1:48~", "r:48"],
  "n9.s5.6": ["C5/2:24 Ab5/5:24", "C2+G2/5+1:48~", "r:48"],
  "n9.s5.7": ["G5/5:12 G4/1:12 G4/1:12 G4/1:12", "C2+G2/5+1:48~", "r:48"],
  "n9.s5.8": ["Eb4/1:12 Ab4/3:12 Ab4/3:12 Ab4/3:12", "C2+G2/5+1:48~", "r:48"],
  "n9.s5.9": ["G4/2:12 Eb5/5:12 Eb5/5:12 Eb5/5:12", "C2+G2/5+1:48~", "r:48"],
  "n9.s5.10": ["C5/2:24 Ab5/5:24", "C2+G2/5+1:48", "r:48"],
  "n9.s5.11": ["G5/5:12 D5+G5+B5+D6/1+2+3+5:12 D5+G5+B5+D6/1+2+3+5:12 D5+G5+B5+D6/1+2+3+5:12", "r:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12", "r:12 P:36"],
  "n9.s6.1": ["Eb5+G5+C6+Eb6/1+2+3+5:24 r:24", "C3+Eb3+G3+C4/5+3+2+1:24 r:24", "P:24 r:24"],
  "n9.s6.2": ["r:12 D5+G5+B5+D6/1+2+3+5:12 D5+G5+B5+D6/1+2+3+5:12 D5+G5+B5+D6/1+2+3+5:12", "r:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12", "r:12 P:36"],
  "n9.s6.3": ["Eb5+G5+C6+Eb6/1+2+3+5:24 r:24", "C3+Eb3+G3+C4/5+3+2+1:24 r:24", "P:24 r:24"],
  "n9.s6.4": ["r:12 D5+G5+B5+D6/1+2+3+5:12 D5+G5+B5+D6/1+2+3+5:12 D5+G5+B5+D6/1+2+3+5:12", "r:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12 G2+B2+D3+G3/5+3+2+1:12", "r:48"],
  "n9.s6.5": ["Eb5+G5+C6+Eb6/1+2+3+5:24 G5+B5+D6+G6/1+2+3+5:24", "C3+Eb3+G3+C4/5+3+2+1:24 G2+B2+D3+G3/5+3+2+1:24", "r:48"],
  "n9.s6.6": ["G5+C6+Eb6+G6/1+2+3+5:24 G5+B5+D6+G6/1+2+3+5:24", "C3+Eb3+G3+C4/5+3+2+1:24 G2+B2+D3+G3/5+3+2+1:24", "r:48"],
  "n9.s6.7": ["G5+C6+Eb6+G6/1+2+3+5:24 G5+B5+D6+G6/1+2+3+5:24", "C3+Eb3+G3+C4/5+3+2+1:24 G2+B2+D3+G3/5+3+2+1:24", "r:48"],
  "n9.s6.8": ["G5+C6+Eb6+G6/1+2+3+5:24 G5+B5+D6+G6/1+2+3+5:24", "C2+C3/5+1:24 G1+G2/5+1:24", "r:48"],
  "n9.s6.9": ["G5+C6+Eb6+G6/1+2+3+5:24 r:24", "C2+Eb2+G2+C3/5+3+2+1:24 r:24", "r:48"],
  "n9.s6.10": ["B3+D4+G4+B4/1+2+3+5:24 r:24", "G2+B2+D3+G3/5+3+2+1:24 r:24", "r:48"],
  "n9.s6.11": ["C4+Eb4+G4+C5/1+2+3+5:24 r:24", "C2+Eb2+G2+C3/5+3+2+1:24 r:24", "r:48"],
};

/** The Original's bars in the print's order: the exposition once, then the recapitulation and coda. */
const PRINT_BARS: PrintBar[] = [...Object.values(EXPOSITION), ...Object.values(RECAPITULATION)];

/** The semitones of each note letter above C. */
const LETTER_STEPS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The MIDI pitch of a note name such as `F#4` or `Bb3`. */
function pitchOf(name: string): number {
  const [, letter = "C", accidental = "", octave = "4"] = /^([A-G])([#b]?)(\d)$/.exec(name) ?? [];
  return 12 * (Number(octave) + 1) + (LETTER_STEPS[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0);
}

/** The widest chord a hand holds at once: 15 semitones, the practical span of fingers 1 and 5. */
const WIDEST_HELD = 15;

/** The units of one note of a rolled chord: a 32nd, a quarter being 24. */
const ROLL_STEP = 3;

/**
 * `text` with each chord wider than a hand holds rolled from its lowest note. Each note but the top
 * takes a 32nd, and the top note keeps the rest of the chord's length. A tied chord is never rolled.
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
      return names.map((name, at) => `${name}/${marks[at]}:${at === last ? Number(units) - last * ROLL_STEP : ROLL_STEP}`).join(" ");
    })
    .join(" ");
}

/** One line of the Original: `part` of each print bar, in the print's order, its wide chords rolled. */
function printLine(part: 0 | 1 | 2): string {
  return PRINT_BARS.map((bar) => (part === 2 ? bar[part] : rolledWide(bar[part]))).join(" | ");
}

export const beethoven5: OurSong = {
  slug: "beethoven-5",
  title: "Symphony No. 5",
  aka: ["Beethoven's Fifth", "Fifth Symphony", "Op. 67", "Schicksalssinfonie"],
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1809,
    edition:
      "Symphony No. 5 in C minor, Op. 67, first movement, bars 1 to 5, as the score in Wikipedia's article on the symphony prints it; the first edition was printed in April 1809",
  },
  about:
    "Beethoven's Fifth Symphony opens with four notes, three short and one long. " +
    "Its first printed edition appeared in April 1809. " +
    "The film Fantasia 2000 (1999) opens with this symphony.",
  funFact: "Beethoven dedicated the symphony to two of his patrons, Prince Joseph Franz von Lobkowitz and Count Razumovsky.",
  mythic: {
    key: C_MINOR,
    bpm: 216,
    numerator: 2,
    denominator: 4,
    steps: 24,
    right: printLine(0),
    left: printLine(1),
    pedal: printLine(2),
    source: {
      edition:
        "Symphony No. 5 in C minor, Op. 67, first movement, in Franz Liszt's transcription for piano solo (S.464), Breitkopf & Härtel, Leipzig, 1865, scanned as Internet Archive item SymphonyNo.5Op.67_833, file SymphonyNo.5Op.67-Piano.pdf, whose title page is lost; printed pages 1 to 3 (bars 1 to 124, the exposition, played once without its repeat) and 6 to 10 (bars 248 to the end), joined at bar 248",
      printed: 1865,
    },
    skills: ["octave-bass", "melody-in-chords", "position-change"],
    practice: [
      { text: "Play bars 1 to 21 with the right hand alone. Count the rest before each group of three short notes.", hands: "right", speed: 0.6, loop: [1, 21], wait: true },
      { text: "Play bars 44 to 50 with the left hand alone. It leaps from a low octave up to chords in the treble.", hands: "left", speed: 0.5, loop: [44, 50], wait: true },
      { text: "Play bars 59 to 72 with both hands. A horn call leads into the soft second theme.", hands: "both", speed: 0.6, loop: [59, 72], wait: true },
      { text: "Play bars 242 to 250 with both hands. Each hand strikes a chord, then leaps far up for loud octaves.", hands: "both", speed: 0.5, loop: [242, 250], wait: false },
      { text: "Play the whole movement with both hands at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 5, kind: "rhythm", text: "Three short notes and a long one open the symphony. Feel the rest on the beat, and hold each long note to its end." },
      { fromBar: 59, toBar: 62, kind: "sound", text: "This is a horn call in single notes. Play each one loudly and let it ring." },
      { fromBar: 63, toBar: 72, kind: "sound", text: "The second theme is soft and sweet. Keep the left hand's octaves light beneath it." },
      { fromBar: 145, toBar: 149, kind: "rhythm", text: "An oboe sings a short, slow solo here. Play it softly and freely, then pick up the fast beat again." },
      { fromBar: 372, toBar: 382, kind: "trick", text: "The last bars hammer C minor and G major chords. Keep your wrists loose, so each chord stays short." },
    ],
    tricky: {
      48: "The right hand plays a low chord, then leaps over two octaves to high chords. The left hand jumps from a deep octave up into the treble.",
      169: "The left hand strikes a deep C minor chord, then jumps over two octaves for three chords. The right hand plays high chords above it.",
      246: "Each hand plays a chord, then leaps far up for three loud octaves. The right hand's octaves lie near the top of the keyboard.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: toAMinor(`${TUNE_QUARTERS} | ${COMMON_OWN}`),
      left: toAMinor(bars(HELD, `${TUNE_CHORDS}cgafcagc`, 1)),
      ownBars: [5, 6, 7, 8, 9, 10, 11, 12],
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 12 with the right hand alone. The hand stays in one place.", hands: "right", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Now the left hand alone. It holds one note for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first four bars, slowly.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Rest on beat one. Then play E on beats two, three and four." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the three short notes strongly, and let the long note ring for the whole bar." },
        { fromBar: 5, toBar: 12, kind: "fingering", text: "The thumb stays on B, and each finger keeps its own key." },
      ],
      tricky: {
        1: "Rest on beat one, then play E three times with finger 4. Keep the finger loose for each new note.",
        7: "Finger 5 plays F three times. Lift it a little between the notes, so each one sounds.",
        9: "Fingers 4 and 5 rock between E and F. Keep both fingers close to the keys.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      ownBars: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      right: toAMinor(`${TUNE_EIGHTHS} | ${RARE_OWN}`),
      left: toAMinor(`${bars(PULSE, `${TUNE_CHORDS}${OWN_CHORDS}`, 1)} | C4/1:8`),
      skills: ["eighth-notes", "two-note-chords"],
      practice: [
        { text: "Play the first four bars with the right hand alone. The short notes are eighths.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. A long bass note comes first, then two short chords.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Join the hands on bars 5 to 8, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Each motif starts with a short rest. Then three quick notes lead into the long one." },
        { fromBar: 5, toBar: 15, kind: "sound", text: "Every bar plays the opening idea again: three short notes and a long one." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with C and E together. Fingers 2 and 4 press them as one." },
      ],
      tricky: {
        1: "Three quick E's follow the short rest. Play them with finger 4, light and even.",
        5: "Play three quick E's with finger 4. Then finger 2 holds C for half the bar.",
        13: "After the three quick E's, fingers 2 and 4 press C and E together.",
      },
    },
    epic: {
      key: C_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: `${TUNE_OCTAVES_EIGHTHS} | ${EPIC_OWN}`,
      left: `${bars(ALBERTI, `${TUNE_CHORDS}${OWN_CHORDS}`, 1)} | C2+G2+C3/5+2+1:8`,
      pedal: repeat("P:8", 16),
      ownBars: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      skills: ["alberti-bass", "thumb-under", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the octaves of the first four bars alone. Keep the hand open from thumb to little finger.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the scale in bar 12 with the right hand alone. Pass the thumb under to B flat.", hands: "right", speed: 0.5, loop: [12, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the octaves loud and sharp, then let each long note ring." },
        { fromBar: 5, toBar: 16, kind: "sound", text: "Change the pedal at the start of every bar, when the chord changes." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Pass the thumb under to B flat, then climb with fingers 2 to 5." },
      ],
      tricky: {
        5: "Play E flat three times with finger 3. Then open the hand wide for C and G.",
        10: "Start high on C with finger 5, and walk down to A flat. Then the thumb drops to E flat.",
        12: "Pass the thumb under to B flat after A flat. Fingers 2 to 5 then climb to F.",
      },
    },
    legendary: {
      key: C_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [TUNE_CHORDS_SIXTEENTHS, LEGENDARY_OWN, TUNE_OCTAVES_SIXTEENTHS, "C4+Eb4+G4+C5/1+2+3+5:16"].join(" | "),
      left: [
        bars(STRIDE, TUNE_HALVES, 2),
        bars(WIDE, LEGENDARY_OWN_CHORDS, 1),
        bars(STRIDE, TUNE_HALVES, 2),
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: repeat("P:8 P:8", 21),
      ownBars: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      skills: ["melody-in-chords", "stride", "arpeggios"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the run in bar 12 with the right hand alone. The thumb passes under twice.", hands: "right", speed: 0.4, loop: [12, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Press all four notes of each chord as one, with the top note a little louder." },
        { fromBar: 5, toBar: 16, kind: "trick", text: "The left hand climbs two octaves in every bar. Finger 3 crosses over the thumb." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Pass the thumb under to B flat, and again to F. Then finger 5 reaches C." },
      ],
      tricky: {
        3: "The left hand jumps from the low G up to the chord. Use the short rest after each octave to jump.",
        4: "The right hand holds its chord. Let the left hand jump between the low G and the chord above it.",
        19: "Play F in octaves three times, with the hand open. The left hand jumps from the low G as before.",
      },
    },
  },
  de: {
    about:
      "Beethovens Fünfte Sinfonie beginnt mit vier Tönen, drei kurzen und einem langen. " +
      "Ihre erste gedruckte Ausgabe erschien im April 1809. " +
      "Der Film Fantasia 2000 (1999) beginnt mit dieser Sinfonie.",
    funFact: "Beethoven widmete die Sinfonie zwei seiner Gönner, Fürst Joseph Franz von Lobkowitz und Graf Rasumowsky.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 12 nur mit der rechten Hand. Die Hand bleibt an einem Platz.",
          "Jetzt die linke Hand allein. Sie hält einen Ton einen ganzen Takt lang.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Auf Schlag eins ist Pause. Dann spielst du das E auf den Schlägen zwei, drei und vier.",
          "Spiel die drei kurzen Töne kräftig, und lass den langen Ton den ganzen Takt klingen.",
          "Der Daumen bleibt auf dem H, und jeder Finger behält seine eigene Taste.",
        ],
        tricky: {
          1: "Auf Schlag eins ist Pause, dann spielst du dreimal das E mit Finger 4. Halt den Finger für jeden neuen Ton locker.",
          7: "Finger 5 spielt dreimal das F. Heb ihn zwischen den Tönen ein wenig an, damit jeder Ton klingt.",
          9: "Finger 4 und 5 wiegen zwischen E und F hin und her. Halt beide Finger nah an den Tasten.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand. Die kurzen Töne sind Achtel.",
          "Spiel die linke Hand allein. Zuerst kommt ein langer Basston, dann zwei kurze Akkorde.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Jedes Motiv beginnt mit einer kurzen Pause. Dann führen drei schnelle Töne zum langen Ton.",
          "Jeder Takt spielt die Idee vom Anfang noch einmal: drei kurze Töne und einen langen.",
          "Am Ende spielst du C und E zusammen. Finger 2 und 4 drücken sie wie einen Ton.",
        ],
        tricky: {
          1: "Nach der kurzen Pause kommen drei schnelle E. Spiel sie mit Finger 4, leicht und gleichmäßig.",
          5: "Spiel drei schnelle E mit Finger 4. Dann hält Finger 2 das C einen halben Takt lang.",
          13: "Nach den drei schnellen E drücken Finger 2 und 4 das C und das E zusammen.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Oktaven der ersten vier Takte allein. Halt die Hand vom Daumen bis zum kleinen Finger offen.",
          "Spiel die Tonleiter in Takt 12 nur mit der rechten Hand. Führ den Daumen unter zum B.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Spiel die Oktaven laut und scharf, und lass dann jeden langen Ton klingen.",
          "Wechsle das Pedal am Anfang jedes Takts, wenn der Akkord wechselt.",
          "Führ den Daumen unter zum B, dann steig mit Finger 2 bis 5 weiter.",
        ],
        tricky: {
          5: "Spiel dreimal das Es mit Finger 3. Dann öffne die Hand weit für C und G.",
          10: "Beginn oben auf dem C mit Finger 5, und geh hinunter zum As. Dann fällt der Daumen auf das Es.",
          12: "Führ nach dem As den Daumen unter zum B. Dann steigen Finger 2 bis 5 hinauf zum F.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel den Lauf in Takt 12 nur mit der rechten Hand. Der Daumen geht zweimal unter.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Drück alle vier Töne jedes Akkords wie einen, mit dem oberen Ton etwas lauter.",
          "Die linke Hand steigt in jedem Takt zwei Oktaven hinauf. Finger 3 kreuzt über den Daumen.",
          "Führ den Daumen unter zum B und noch einmal zum F. Dann reicht Finger 5 zum C.",
        ],
        tricky: {
          3: "Die linke Hand springt vom tiefen G hinauf zum Akkord. Nutz die kurze Pause nach jeder Oktave zum Springen.",
          4: "Die rechte Hand hält ihren Akkord. Lass die linke Hand zwischen dem tiefen G und dem Akkord darüber springen.",
          19: "Spiel das F dreimal in Oktaven, mit offener Hand. Die linke Hand springt wie vorher vom tiefen G.",
        },
      },
    },
    original: {
      practice: [
        "Spiel die Takte 1 bis 21 nur mit der rechten Hand. Zähl die Pause vor jeder Gruppe aus drei kurzen Tönen.",
        "Spiel die Takte 44 bis 50 nur mit der linken Hand. Sie springt von einer tiefen Oktave hinauf zu Akkorden im Violinschlüssel.",
        "Spiel die Takte 59 bis 72 mit beiden Händen. Ein Hornruf führt zum leisen zweiten Thema.",
        "Spiel die Takte 242 bis 250 mit beiden Händen. Jede Hand schlägt einen Akkord an und springt dann weit hinauf zu lauten Oktaven.",
        "Spiel den ganzen Satz mit beiden Händen im vollen Tempo, mit Pedal.",
      ],
      tips: [
        "Drei kurze Töne und ein langer eröffnen die Sinfonie. Spür die Pause auf dem Schlag, und halt jeden langen Ton bis zum Ende.",
        "Das ist ein Hornruf aus einzelnen Tönen. Spiel jeden laut, und lass ihn klingen.",
        "Das zweite Thema ist leise und lieblich. Spiel die Oktaven der linken Hand leicht darunter.",
        "Hier singt eine Oboe ein kurzes, langsames Solo. Spiel es leise und frei, dann nimm das schnelle Tempo wieder auf.",
        "Die letzten Takte hämmern c-Moll- und G-Dur-Akkorde. Halt die Handgelenke locker, damit jeder Akkord kurz bleibt.",
      ],
      tricky: {
        48: "Die rechte Hand spielt einen tiefen Akkord und springt dann über zwei Oktaven zu hohen Akkorden. Die linke Hand springt von einer tiefen Oktave hinauf in den Violinschlüssel.",
        169: "Die linke Hand schlägt einen tiefen c-Moll-Akkord an und springt dann über zwei Oktaven zu drei Akkorden. Die rechte Hand spielt hohe Akkorde darüber.",
        246: "Jede Hand spielt einen Akkord und springt dann weit hinauf zu drei lauten Oktaven. Die Oktaven der rechten Hand liegen nah am oberen Ende der Tastatur.",
      },
    },
  },
};

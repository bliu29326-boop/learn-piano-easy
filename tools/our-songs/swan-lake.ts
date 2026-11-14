/**
 * *Swan Lake*: the oboe's theme from Act II of Tchaikovsky's ballet, in four versions of ours.
 *
 * The tune is the oboe's theme in bars 1 to 8 of Act II No. 10. The print is in 4/4 with eighths, and
 * the tune writes every eighth as a quarter, so each print bar is a bar of 4/2. Its key is B minor, and
 * the hook is bars 1 to 4. The tune is the Original's bars 2 to 9.
 *
 * After the tune, every version plays the source's next phrase, the Original's bars 10 to 17. It climbs
 * through A major, F sharp minor and E minor, and ends on C major. Common and Rare move the song to A
 * minor. Common plays bars 10 to 13 only, which end on the home chord, and closes on A minor. Rare plays
 * bars 10 to 17 and closes on A minor. Both leave out a few passing notes, so the hand moves only twice.
 *
 * Common plays the tune over held open fifths and single bass notes. Rare plays a low note on each beat
 * and a two-note chord on the next. Epic and Legendary take the Original's own accompaniment from its
 * bars 2 to 25: the left hand's tremolo under the tune, and triplet arpeggios under the next phrase. Then
 * comes bar 18, and the tune again in the left hand under the right hand's tremolo. Legendary plays these
 * bars as printed, and Epic plays each tremolo at half its speed. Both let go a short rest before each
 * leap no hand spans, and close on a held B minor chord.
 *
 * The Original is the whole Scene, Act II No. 1, all 70 bars of Kashkin's two-hand piano score. It
 * plays the oboe's theme over a soft tremolo, then in the left hand under loud chords, and last in
 * octaves before a quiet close.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const B_MINOR: Key = { tonic: 11, mode: "minor" };

/** The key Common and Rare move the song to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/2, in quarters, which are the print's eighths: one bar per print bar. */
const tune =
  "F#5:4 B4:1 C#5:1 D5:1 E5:1 | F#5:3 D5:1 F#5:3 D5:1 | F#5:3 B4:1 D5:1 B4:1 G4:1 D5:1 | B4:5 E5:1 D5:1 C#5:1 | " +
  "F#5:4 B4:1 C#5:1 D5:1 E5:1 | F#5:3 D5:1 F#5:3 D5:1 | F#5:3 B4:1 D5:1 B4:1 G4:1 D5:1 | B4:6 B4:2";

/** The tune's first three bars in quarters, fingered. Finger 2 takes B in bar 3, so the thumb reaches G. */
const TUNE_OPENING =
  "F#5/5:4 B4/1:1 C#5/2:1 D5/3:1 E5/4:1 | F#5/5:3 D5/3:1 F#5/5:3 D5/3:1 | " +
  "F#5/5:3 B4/2:1 D5/3:1 B4/2:1 G4/1:1 D5/3:1";

/** The tune in 4/2, in quarters, fingered in one place. */
const TUNE_RIGHT = `${TUNE_OPENING} | B4/1:5 E5/4:1 D5/3:1 C#5/2:1 | ${TUNE_OPENING} | B4/1:6 B4/1:2`;

/**
 * The Original's bars 10 and 14 in A minor quarters, for Common and Rare. The last F is left out, so the
 * hand moves only after the held E.
 */
const RISE_A_MINOR = "B4/2:2 C5/3:2 D5/4:2 E5/5:2";

/** The Original's bars 11 and 15 in A minor quarters. Finger 5 moves up from E to G. */
const SIGH_A_MINOR = "G5/5:3 F5/3:1 E5/2:2 F5/3:1 G5/4:1";

/** The Original's bars 12 and 16 in A minor quarters. */
const CLIMB_A_MINOR = "A5/5:3 G5/3:1 F5/2:2 G5/3:1 A5/4:1";

/** The Original's bar 13 in A minor quarters. It leaves out the run from C to B, and lands on A. */
const PEAK_A_MINOR = "B5/5:3 A5/4:1 E5/2:2 A4/1:2";

/** The Original's bar 13 in A minor quarters, as Common plays it: the high B and A, then a held E. */
const COMMON_PEAK = "B5/5:3 A5/4:1 E5/2:4";

/** The Original's bar 17 in A minor quarters: B flat major. */
const TURN_A_MINOR = "Bb5/5:3 F5/2:1 D5/1:2 F5/2:1 Bb5/5:1";

/**
 * Common's left hand under the Original's bars 10 to 13 and its close, in A minor: G major, E minor,
 * D minor, then B and E before the A minor close.
 */
const COMMON_PHRASE_LEFT = "G2+D3/5+2:8 | B2+E3/4+1:4 B2/4:4 | D3/2:8 | B2/4:4 E3/1:4 | A2+E3/5+1:8";

/** Rare's half bar in A minor quarters under the Original's bars 10 to 17: a low note, then a chord. */
const RARE_PULSE: Record<string, string> = {
  g: "G2/5:2 D3/2:2",
  G: "G2/5:2 B2+D3/3+2:2",
  e: "E3/1:2 G2+B2/5+3:2",
  d: "A2/4:2 D3+F3/2+1:2",
  f: "A2/4:2 C3+F3/2+1:2",
  b: "B2/4:2 D#3+F#3/2+1:2",
  7: "B2/4:2 D3+E3/2+1:2",
  B: "Bb2/4:2 D3+F3/2+1:2",
  D: "D3/2:2 D3+F3/2+1:2",
};

/** Rare's chords under the Original's bars 10 to 17, two per bar. */
const RARE_PHRASE_CHORDS = "gGeeddb7gGeedfBD";

/** Each pitch of the B minor text and its pitch in A minor, a whole step down. */
const DOWN_A_STEP: Record<string, string> = { B: "A", "C#": "B", D: "C", E: "D", "F#": "E", G: "F", A: "G", "A#": "G#" };

/** `text`, written in B minor, moved down a whole step to A minor. */
function toAMinor(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => {
    const to = DOWN_A_STEP[name];
    if (to === undefined) throw new Error(`No A minor pitch for ${name}`);
    return `${to}${name.startsWith("C") ? Number(octave) - 1 : Number(octave)}`;
  });
}

/** `text` with every length times `factor`, so a line in quarters reads in the Original's units at 12. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"bbge"`: one letter per half bar, two per bar. */
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

/** Common's left hand under the tune in B minor quarters, one bar per entry: an open fifth, or one bass note, held. */
const COMMON_LEFT = [
  "B2+F#3/5+1:8 | B2+F#3/5+1:8 | E3/2:8 | B2+F#3/5+1:4 F#3/1:4",
  "B2+F#3/5+1:8 | B2+F#3/5+1:8 | E3/2:8 | F#3/1:4 B2+F#3/5+1:4",
].join(" | ");

/** Rare's half bar in B minor quarters: a low note on the beat, then a two-note chord. `h` holds F sharp. */
const PULSE: Record<string, string> = {
  b: "B2/5:2 D3+F#3/3+1:2",
  e: "E3/2:2 B2+E3/5+2:2",
  f: "F#3/1:2 C#3+F#3/4+1:2",
  h: "F#3/1:4",
};

/** One bar of the Original in 24 units a quarter, 96 to the bar: the right hand, the left hand and the pedal. */
type PrintBar = readonly [right: string, left: string, pedal: string];

/** A bar with the pedal up. */
const UP = "r:96";

/** `text` written `count` times in a row. */
function times(text: string, count: number): string {
  return Array<string>(count).fill(text).join(" ");
}

/** A measured tremolo: `low`, then `high`, each `units` long, `pairs` times. Both name their fingers. */
function shake(low: string, high: string, units: number, pairs: number): string {
  return times(`${low}:${units} ${high}:${units}`, pairs);
}

/** `chord` struck `count` times as triplet eighths, 8 units each. */
function triplets(chord: string, count: number): string {
  return times(`${chord}:8`, count);
}

/** The left hand's B minor tremolo of bars 1 to 4: B and D, then F sharp above them. */
const B_SHAKE: [string, string] = ["B3+D4/4+2", "F#4/1"];

/** The left hand's E minor tremolo of bars 2 and 5. */
const E_SHAKE: [string, string] = ["B3+E4/4+2", "G4/1"];

/** The tune's bars 2 and 6: the long F sharp, then four eighths climbing from B to E. */
const CLIMB = "F#5/5:48 B4/1:12 C#5/2:12 D5/3:12 E5/4:12";

/** The tune's bars 3 and 7: F sharp and D twice. */
const SWING = "F#5/5:36 D5/3:12 F#5/5:36 D5/3:12";

/** The tune's bars 4 and 8: F sharp, then down through B, D, B and G. */
const TURN = "F#5/5:36 B4/2:12 D5/4:12 B4/2:12 G4/1:12 D5/4:12";

/**
 * Bars 1 to 9 (p64.1 to p64.9): the oboe's theme, pianissimo, over a measured tremolo in the left hand.
 * Every left-hand 32nd is 3 units. Bar 5's half-note B is tied to the eighth after it, so it sounds 60 units.
 * Bar 9's sixteenth triplets are 4 units a note.
 */
const THEME: Record<number, PrintBar> = {
  1: ["r:96", `B2/5:12 ${shake(...B_SHAKE, 3, 6)} ${shake(...B_SHAKE, 3, 8)}`, UP],
  2: [CLIMB, `B2/5:12 ${shake(...B_SHAKE, 3, 6)} ${shake(...E_SHAKE, 3, 8)}`, UP],
  3: [SWING, shake(...B_SHAKE, 3, 16), UP],
  4: [TURN, `B2/5:12 ${shake(...B_SHAKE, 3, 6)} ${shake("G#3+B3/4+2", "F4/1", 3, 4)} ${shake("G3+B3/4+2", "E4/1", 3, 2)} ${shake("F#3+A#3/5+3", "E4/1", 3, 2)}`, UP],
  5: [
    "B4/1:60 E5/4:12 D5/3:12 C#5/2:12",
    `D4/1:3 B3/2:3 F#3/3:3 B2/5:3 F#3/3:3 B3/2:3 D4/1:3 B3/2:3 ${shake(...E_SHAKE, 3, 4)} ${shake("B3+F#4/4+2", "A4/1", 3, 4)} ${shake(...E_SHAKE, 3, 4)}`,
    UP,
  ],
  6: [CLIMB, `${shake(...B_SHAKE, 3, 4)} ${shake("A3+D4/4+2", "F#4/1", 3, 4)} ${shake("G#3+B3/4+2", "F4/1", 3, 4)} ${shake("G3+B3/4+2", "E4/1", 3, 4)}`, UP],
  7: [SWING, `${shake("F#3+B3/4+2", "D4/1", 3, 4)} ${shake("F#3+G#3/3+2", "B3/1", 3, 4)} ${shake("E3+F#3+A#3/5+4+2", "C#4/1", 3, 4)} ${shake("D3+F#3/4+2", "B3/1", 3, 4)}`, UP],
  8: [
    TURN,
    [
      shake("C#3+E3+F#3/5+3+2", "A#3/1", 3, 2),
      shake("C#3+E3/5+3", "F#3/1", 3, 2),
      shake("B2+D3/5+3", "F#3/1", 3, 2),
      shake("A2+D3/5+2", "F#3/1", 3, 2),
      shake("G#2+B2/5+4", "F3/1", 3, 4),
      shake("G2+B2/5+4", "E3/1", 3, 2),
      shake("F#2+A#2/5+4", "E3/1", 3, 2),
    ].join(" "),
    UP,
  ],
  9: ["B4/2:72 B4/2:24", `${times("B2/5:4 D3/4:4 F#3/2:4 B3/1:4 F#3/2:4 D3/4:4", 2)} B2/5:12 r:36`, UP],
};

/** The left hand's triplet eighths on A, for bars 10 and 14: up from A to E and back, twice. */
const A_RISE = "A3/3:8 C#4/2:8 E4/1:8 C#4/2:8 A3/4:8";

/** The right hand's bars 10 and 14: chords in A major climbing to G. */
const A_CHORDS = "E4+A4+C#5/1+2+4:24 D5/5:24 A4+C#5+E5/1+3+5:24 F#5/4:12 G5/5:12";

/** The right hand's bars 11 and 15: a high A sighing down to F sharp. */
const FS_SIGH = "A4+C#5+A5/1+2+5:36 G5/4:12 A4+C#5+F#5/1+2+3:24 G5/4:12 A5/5:12";

/** The left hand's bars 11 and 15: an F sharp minor arpeggio in triplet eighths, then a single eighth. */
const FS_RISE = "F#2+F#3/5+1:8 A2/4:8 C#3/3:8 F#3/2:8 A3/1:8 C#4/3:8 F#4/1:12 r:36";

/**
 * Bars 10 to 17 (p64.10 to p64.17): softly in A major and F sharp minor, the left hand in triplet
 * eighths of 8 units. Bar 17's quintuplet of sixteenths is 5, 5, 5, 5 and 4 units.
 */
const ANSWER: Record<number, PrintBar> = {
  10: [A_CHORDS, `A2/5:8 ${A_RISE} G2/5:8 ${A_RISE}`, UP],
  11: [FS_SIGH, FS_RISE, UP],
  12: ["B4+E5+B5/1+2+5:36 A5/4:12 B4+E5+G5/1+2+3:24 A5/4:12 B5/5:12", "E2+E3/5+1:8 B2/4:8 E3/3:8 G3/2:8 B3/1:8 E4/3:8 G4/1:12 r:36", UP],
  // The print gives the G3 of beat 2 no sharp, though G2 before it has one. The arpeggio is C sharp major,
  // as bar 12's shape shows, so the missing sharp is a misprint and G3 is set sharp.
  13: [
    "C#5+E#5+C#6/1+2+5:36 B5/4:12 A#4+F#5/1+5:12 D5/3:12 F#4+C#5/1+3:12 B4/2:12",
    "C#2+C#3/5+1:8 G#2/4:8 C#3/3:8 E#3/2:8 G#3/1:8 C#4/3:8 F#3+F#4/5+1:24 B3+D4/2+1:24",
    UP,
  ],
  // The octaves take fingers 5 and 1, as the meter refuses 5 and 3, or 5 and 4, across an octave.
  14: [A_CHORDS, `A2+A3/5+1:8 ${A_RISE} G2+G3/5+1:8 ${A_RISE}`, UP],
  15: [FS_SIGH, FS_RISE, UP],
  16: [
    "B4+E5+B5/1+2+5:36 A5/4:12 B4+F5+G5/1+2+3:24 A5/4:12 B5/5:12",
    "E2+E3/5+1:8 B2/4:8 E3/3:8 G3/2:8 B3/1:8 E4/3:8 D3/5:8 G3/3:8 B3/2:8 F4/1:8 B3/2:8 G3/3:8",
    UP,
  ],
  17: [
    "C5+E5+C6/1+2+5:36 G5/3:12 E5/1:24 G5/2:12 C6/5:12",
    "C3+E3/5+3:6 G3/2:6 C4/1:6 G3/2:6 E3/5:5 G3/4:5 C4/3:5 E4/2:5 G4/1:4 C5/1:24 Bb2+Bb3/5+1:24",
    UP,
  ],
};

/** The right hand's B minor tremolo of bars 19 to 25: B, D and F sharp above B. */
const B_HIGH: [string, string] = ["D5+F#5+B5/2+3+5", "B4/1"];

/** The right hand's E minor tremolo of bars 22 and 23. */
const E_HIGH: [string, string] = ["E5+G5+B5/2+3+5", "B4/1"];

/** The left hand's bars 19 and 23: the tune's long F sharp, a low octave, then B climbing to E. */
const LOW_CLIMB = "F#3+B3+D4+F#4/5+3+2+1:24 B1+B2/5+1:24 G3+B3/5+4:12 C#4/3:12 D4/2:12 E4/1:12";

/**
 * The left hand's bars 20 and 24: the tune's F sharp and D twice, over a low octave. The print holds F
 * sharp over the octave, which no hand spans. The hand lets F sharp go as the octave comes, and the pedal
 * holds both.
 */
const LOW_SWING = "F#3+B3+D4+F#4/5+3+2+1:24 B1+B2/5+1:12 D4/3:12 F#4/1:36 D4/3:12";

/**
 * Bars 18 to 25 (p65.1 to p65.8): forte and marcato. The theme moves into the left hand, under the
 * right hand's tremolo in 32nds of 3 units. The print pedals bars 19 to 22. Bars 23 to 25 repeat bars
 * 19 to 21, so they take the same pedal.
 */
const MARCATO: Record<number, PrintBar> = {
  18: [
    "C#5+C#6/1+5:36 G#5/4:12 C#5+C#6/1+5:36 F#5/3:12",
    "E#3+B3+C#4/5+2+1:24 G#2+G#3/5+1:24 E3+A#3+C#4/5+2+1:24 F#2+F#3/5+1:24",
    UP,
  ],
  19: [`B5/5:12 ${shake("E5/4", "B4/1", 3, 6)} ${shake("B4+E5/2+5", "G4/1", 3, 8)}`, LOW_CLIMB, "P:48 r:48"],
  20: [shake("D5+F#5/2+4", "B4/1", 3, 16), LOW_SWING, "P:84 r:12"],
  // The print gives this bar's A5 no sharp, though bar 25 has A sharp there. A natural would clash with
  // the A#4 it shakes against, so the missing sharp is a misprint and A5 is set sharp.
  21: [
    `${shake("D5+F#5/2+4", "B4/1", 3, 8)} ${shake("D5+G5/2+5", "B4/1", 3, 4)} ${shake("E5+A#5/2+5", "A#4/1", 3, 4)}`,
    "F#3+B3+D4+F#4/5+3+2+1:24 B1+B2/5+1:12 B3/2:12 F3+G3+D4/5+4+1:12 B3/2:12 E3+G3/5+3:12 D4/1:12",
    "P:48 P:24 r:24",
  ],
  // The print ties B3 over the low octave, which no hand spans. The hand lets B3 go as the octave comes.
  22: [
    `${shake(...B_HIGH, 3, 8)} ${shake(...E_HIGH, 3, 8)}`,
    "D3+F#3+B3/5+3+1:24 B1+B2/5+1:24 B2+E3+G3/5+3+2:12 E4/1:12 D4/2:12 C#4/3:12",
    "P:48 r:48",
  ],
  23: [`${shake(...B_HIGH, 3, 8)} ${shake(...E_HIGH, 3, 8)}`, LOW_CLIMB, "P:48 r:48"],
  // As in bar 20, the hand lets F sharp go as the low octave comes, and the pedal holds both.
  24: [shake(...B_HIGH, 3, 16), LOW_SWING, "P:84 r:12"],
  25: [
    `${shake(...B_HIGH, 3, 8)} ${shake("D5+G5/2+5", "B4/1", 3, 4)} ${shake("E5+A#5/2+5", "A#4/1", 3, 4)}`,
    "F#3+B3+D4+F#4/5+3+2+1:24 B1+B2/5+1:12 B3/2:12 F#3+G3+D4/5+4+1:12 B3/2:12 E3+G3/5+3:12 D4/1:12",
    "P:48 P:24 r:24",
  ],
};

/** The right hand's A major chord in triplet eighths, for bars 27 and 31. */
const A_HIGH = triplets("C#5+E5+A5+C#6/1+2+4+5", 12);

/** The right hand's F sharp minor chord in triplet eighths, for bars 28 and 32. */
const FS_HIGH = triplets("C#5+F#5+A5+C#6/1+2+4+5", 12);

/** The right hand's bars 34 and 36: C major, then E minor, in triplet eighths. */
const C_TO_E = `${triplets("E5+G5+C6/1+3+5", 6)} ${triplets("E5+G5+B5/1+3+5", 6)}`;

/** The right hand's bars 35 and 37: F sharp major, then E minor, in triplet eighths. */
const FS_TO_E = `${triplets("C#5+F#5+A#5/1+2+4", 6)} ${triplets("E5+G5+B5/1+3+5", 6)}`;

/** The left hand's bars 34 and 36: two triplet quarters, a C major chord and an E minor chord around a low octave. */
const C_TRIPLETS = "C4+E4+G4+C5/5+3+2+1:16 G4/2:16 C5/1:16 B3+E4+G4+B4/5+3+2+1:16 E2+E3/5+1:16 B3+E4+G4+B4/5+3+2+1:16";

/** The right hand's C major chords shaken in triplet eighths, for bars 38, 40 and 42. */
const C_SHAKE = times(
  `${triplets("C5+E5+G5+C6/1+2+3+5", 2)} ${triplets("G4+C5+E5+G5/1+2+3+5", 2)} ${triplets("C5+E5+G5+C6/1+2+3+5", 2)}`,
  2,
);

/** The left hand's bars 38, 40 and 42: a low C octave, then a C major chord. */
const C_LOW = "C2+C3/5+1:48 C3+E3+G3+C4/5+3+2+1:48";

/**
 * Bars 26 to 38 (p65.9 to p65.21): the right hand plays chords in triplet eighths of 8 units, and the left
 * hand carries the tune. Bar 26's sixteenth sextuplets are 4 units a note, and bars 34 to 37's triplet
 * quarters 16 units. A chord wider than the hand holds, as in bars 27 and 31, is rolled.
 */
const TRIPLETS: Record<number, PrintBar> = {
  26: [
    triplets("B4+D5+F#5+B5/1+2+3+5", 12),
    "D3+F#3+B3/5+3+1:12 r:12 B1/5:4 D2/4:4 F#2/2:4 B2/1:4 D3/3:4 F#3/2:4 B3/1:4 F#3/2:4 D3/3:4 B2/4:4 D3/3:4 F#3/2:4 B3/1:12 r:12",
    UP,
  ],
  27: [A_HIGH, "A2+E3+C#4/5+2+1:24 D4/1:24 G3+A3+C#4+E4/5+4+2+1:24 F#4/2:12 G4/3:12", UP],
  28: [FS_HIGH, "F#3+A3+C#4+A4/5+3+2+1:36 G4/1:12 F#3+A3+C#4+F#4/5+3+2+1:24 G4/2:12 A4/3:12", UP],
  29: [triplets("E5+G5+B5+E6/1+2+3+5", 12), "E3/5:3 B3+E4+G4+B4/5+3+2+1:33 A4/2:12 B3+E4+G4/5+2+1:24 A4/2:12 B4/3:12", UP],
  // The print holds C#5 over the low octave, which no hand spans. The hand lets C#5 go as the octave
  // comes, and our pedal holds the C sharp major chord across the half bar.
  30: [
    `${triplets("E#5+G#5+C#6+E#6/1+2+3+5", 6)} ${triplets("F#5+A#5+C#6+F#6/1+2+3+5", 3)} ${triplets("D5+F#5+B5+D6/1+2+4+5", 3)}`,
    "C#4+E#4+G#4+C#5/5+3+2+1:24 C#2+C#3/5+1:12 B4/1:12 F#3+F#4/5+1:12 D4/2:12 C#4/3:12 B3/4:12",
    "P:48 r:48",
  ],
  31: [A_HIGH, "A2+E3+C#4/5+3+1:24 D4/1:24 G3+A3+C#4+E4/5+4+2+1:24 F#4/3:12 G4/2:12", UP],
  // The last E3 is the grace note before bar 33, its time taken from the A.
  32: [FS_HIGH, "F#3+A3+C#4+A4/5+3+2+1:36 G4/2:12 F#3+A3+C#4+F#4/5+3+2+1:24 G4/3:12 A4/2:9 E3/5:3", UP],
  // The three grace notes D3, F3 and B3 take their time from the eighth A4.
  33: [
    `${triplets("E5+G5+B5/1+3+5", 6)} ${triplets("F5+G5+B5/1+2+5", 6)}`,
    "B3+E4+G4+B4/5+3+2+1:36 A4/2:3 D3/5:3 F3/4:3 B3/2:3 F4+G4/2+1:24 A4/3:12 B4/2:12",
    UP,
  ],
  34: [C_TO_E, C_TRIPLETS, UP],
  35: [FS_TO_E, "A#3+C#4+F#4+A#4/5+4+2+1:16 F#4/2:16 A#4/1:16 B3+E4+G4+B4/5+3+2+1:16 E3/5:16 B3+E4+G4+B4/5+3+2+1:16", UP],
  36: [C_TO_E, C_TRIPLETS, UP],
  37: [FS_TO_E, "A#3+C#4+F#4+A#4/5+4+2+1:16 F#4/2:16 A#4/1:16 B3+E4+G4+B4/5+3+2+1:16 E2+E3/5+1:16 B3+E4+G4+B4/5+3+2+1:16", UP],
  38: [C_SHAKE, C_LOW, UP],
};

/** The left hand's bars 39 and 41: an F sharp octave, then F sharp and C sharp in triplet quarters. */
const FS_SWAY = "F#1+F#2/5+1:16 F#2/1:16 C#3/1:16 C#3/1:16 F#2/3:16 C#3/1:16";

/** The right hand's first half bar of bars 39 and 41: an E minor chord. */
const E_HALF = "G4+B4+E5+G5/1+2+3+5:48";

/** The right hand's half bar on D, D, C sharp, for bars 46 and 47, with `a` as its A or A sharp. */
function dShake(a: string): string {
  return `${triplets(`D5+E5+${a}5+D6/1+2+4+5`, 4)} ${triplets(`C#5+E5+${a}5+C#6/1+2+4+5`, 2)}`;
}

/**
 * Bars 39 to 51 (p66.1 to p66.13): the climax, in triplet quarters of 16 units. The print's one-slash
 * tremolo strikes each triplet chord twice, as triplet eighths of 8 units. Bar 48 is più mosso. Our song
 * keeps one tempo, so it plays at 72 to the end.
 */
const CLIMAX: Record<number, PrintBar> = {
  39: [`${E_HALF} F#4+A#4+E5+F#5/1+2+4+5:32 F#4+A#4+E5+F#5/1+2+4+5:16`, FS_SWAY, UP],
  40: [C_SHAKE, C_LOW, UP],
  41: [`${E_HALF} F#4+A#4+E5+F#5/1+2+4+5:32 F#4+F#5/1+5:16`, FS_SWAY, UP],
  42: [C_SHAKE, C_LOW, UP],
  43: [triplets("C#5+E5+G5+C#6/1+2+3+5", 12), times("B2+B3/5+1:16 E2+E3/5+1:16 B2+B3/5+1:16", 2), UP],
  44: [
    times(`${triplets("D5+F5+Ab5+D6/1+2+3+5", 2)} ${triplets("Bb4+F5+Ab5+Bb5/1+2+3+5", 2)} ${triplets("D5+F5+Ab5+D6/1+2+3+5", 2)}`, 2),
    "Bb2+F3+Ab3+Bb3/5+3+2+1:96",
    UP,
  ],
  45: [
    `${triplets("D5+E5+A#5+D6/1+2+4+5", 10)} ${triplets("C#5+E5+A#5+C#6/1+2+4+5", 2)}`,
    "F#1+F#2/5+1:16 C#4/2:16 F#4/1:16 F#4/1:16 C#4/2:16 F#4/1:16",
    UP,
  ],
  46: [times(dShake("A#"), 2), "F#3+A#3+F#4/5+3+1:48 F#1+F#2/5+1:48", UP],
  // The print gives this bar no sharp on its A's, though bar 46 has them. It is set natural, as printed.
  47: [times(dShake("A"), 2), "F#3+A3+F#4/5+3+1:48 F#1+F#2/5+1:48", UP],
  48: [
    "F#5+F#6/1+5:12 r:12 E5+E6/1+5:12 r:12 C#5+C#6/1+5:12 r:12 A#4+A#5/1+5:12 r:12",
    "r:12 F#4/1:12 r:12 E4/2:12 r:12 C#4/3:12 r:12 A#3/5:12",
    UP,
  ],
  49: ["F#4+F#5/1+5:12 r:12 E5/4:12 r:12 C#5/2:12 r:12 A#4/1:12 r:12", "r:12 F#3/5:12 r:12 E4/1:12 r:12 C#4/2:12 r:12 A#3/3:12", UP],
  50: ["F#4/4:24 E4/3:24 C#4/2:24 A#3/1:24", "F#3/1:24 E3/2:24 C#3/3:24 A#2/5:24", UP],
  // The print's right hand rests three beats only. Our last beat is a rest too.
  51: ["r:96", "F#2+F#3/5+1:24 E2+E3/5+1:24 D2+D3/5+1:24 C#2+C#3/5+1:24", UP],
};

/** The right hand's bars 54 and 55: an F sharp octave shaken in sixteenths, then a D octave. */
const FS_OCTAVES = `${times("F#6/5:6 F#5/1:6", 6)} ${times("D6/5:6 D5/1:6", 2)}`;

/** The left hand's bars 54 and 55: F sharp held, a B minor chord, then D. */
const FS_HOLD = "F#4/1:48 B2+D3+F#3+B3/5+4+2+1:24 D4/1:24";

/** The left hand's bars 56 to 59: a B minor chord on beats 2 and 4. */
const B_OFFBEATS = "r:24 B2+D3+F#3+B3/5+4+2+1:24 r:24 B2+D3+F#3+B3/5+4+2+1:24";

/** The left hand's B minor tremolo in sixteenths, a whole bar, for bars 60, 61 and 63. */
const B_LOW = shake("B3+D4/5+3", "F#4/1", 6, 8);

/** The right hand's B minor tremolo in sixteenths, a whole bar, for bars 64 to 69. */
const B_SOFT = shake("D4+F#4/2+4", "B3/1", 6, 8);

/**
 * Bars 52 to 70 (p66.14 to p66.32): fortissimo, the theme in octaves, then a soft close on B minor.
 * Every sixteenth is 6 units.
 */
const CLOSE: Record<number, PrintBar> = {
  52: ["F#5+B5+D6+F#6/1+2+3+5:96", `B1+B2/5+1:24 ${shake("B2+D3+F#3/5+3+1", "B3/1", 6, 6)}`, UP],
  53: [
    "B5/5:6 B4/1:6 B5/5:6 B4/1:6 C#6/5:6 C#5/1:6 C#6/5:6 C#5/1:6 D6/5:6 D5/1:6 D6/5:6 D5/1:6 E6/5:6 E5/1:6 E6/5:6 E5/1:6",
    "B3/4:24 C#4/3:24 D4/2:24 E4/1:24",
    UP,
  ],
  54: [FS_OCTAVES, FS_HOLD, UP],
  55: [FS_OCTAVES, FS_HOLD, UP],
  56: ["F#5+F#6/1+5:48 D5+D6/1+5:48", B_OFFBEATS, UP],
  57: ["B4+B5/1+5:48 F#4+F#5/1+5:48", B_OFFBEATS, UP],
  58: ["D5+D6/1+5:48 B4+B5/1+5:48", B_OFFBEATS, UP],
  59: ["F#4+F#5/1+5:48 D4+D5/1+5:48", B_OFFBEATS, UP],
  // The print's octave stands alone, with no rest after it, as bar 52's chord does. It holds the bar.
  60: ["F#5+F#6/1+5:96", B_LOW, UP],
  61: ["B4+B5/1+5:24 C#5+C#6/1+5:24 D5+D6/1+5:24 E5+E6/1+5:24", B_LOW, UP],
  // The print's tremolo here shakes B and D with D alone, where bars 60, 61 and 63 have F sharp.
  62: ["F#5+F#6/1+5:72 D5+D6/1+5:24", shake("B3+D4/5+2", "D4/2", 6, 8), UP],
  63: ["F#5+F#6/1+5:72 D5+D6/1+5:24", B_LOW, UP],
  64: [B_SOFT, "F#2+F#3/5+1:96", UP],
  65: [B_SOFT, "B1+B2/5+1:24 C#2+C#3/5+1:24 D2+D3/5+1:24 E2+E3/5+1:24", UP],
  66: [B_SOFT, "F#2+F#3/5+1:72 D2+D3/5+1:24", UP],
  67: [B_SOFT, "F#2+F#3/5+1:72 D2+D3/5+1:24", UP],
  68: [B_SOFT, "B1+B2/5+1:24 r:72", UP],
  69: [B_SOFT, "B1+B2/5+1:24 r:24 B1+B2/5+1:24 r:24", UP],
  70: ["B3+D4+F#4/1+2+4:24 r:72", "B1+B2/5+1:24 r:72", UP],
};

/** The Original's 70 bars, in the print's order. */
const PRINT_BARS: Record<number, PrintBar> = { ...THEME, ...ANSWER, ...MARCATO, ...TRIPLETS, ...CLIMAX, ...CLOSE };

/** The number of the Original's bars. */
const PRINT_BAR_COUNT = 70;

/** One line of the Original: `part` of each print bar, in the print's order. */
function printLine(part: 0 | 1 | 2): string {
  return Array.from({ length: PRINT_BAR_COUNT }, (_, at) => {
    const bar = PRINT_BARS[at + 1];
    if (bar === undefined) throw new Error(`Swan Lake's Original has no bar ${at + 1}`);
    return part === 2 ? bar[part] : rolledWide(bar[part]);
  }).join(" | ");
}

/** The semitone of each letter above C. */
const CLASSES: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The MIDI pitch of a note name such as `G#4` or `Bb3`. */
function pitchOf(name: string): number {
  const [, letter = "C", accidental = "", octave = "4"] = /^([A-G])([#b]?)(\d)$/.exec(name) ?? [];
  return 12 * (Number(octave) + 1) + (CLASSES[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0);
}

/** The widest chord a hand holds at once: 15 semitones, the practical span of fingers 1 and 5. */
const WIDEST_HELD = 15;

/** The units of a 32nd, which each note of a rolled chord takes. */
const ROLL_UNITS = 3;

/**
 * `text` with each chord wider than a hand holds rolled from its lowest note.
 * Each note but the top takes a 32nd, and the top note keeps the rest of the chord's length.
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
      return names.map((name, at) => `${name}/${marks[at]}:${at === last ? Number(units) - ROLL_UNITS * last : ROLL_UNITS}`).join(" ");
    })
    .join(" ");
}

/** Print bar `bar` of the Original. */
function printBar(bar: number): PrintBar {
  const found = PRINT_BARS[bar];
  if (found === undefined) throw new Error(`Swan Lake's Original has no bar ${bar}`);
  return found;
}

/** `part` of the Original's bars `from` to `to`, one entry per bar. */
function printPart(from: number, to: number, part: 0 | 1 | 2): string[] {
  return Array.from({ length: to - from + 1 }, (_, at) => printBar(from + at)[part]);
}

/**
 * The right hand's bars 10 and 14 for Epic and Legendary. The first chord lets go a short rest early, so
 * finger 2 can take D and the hand climbs to G.
 */
const A_CHORDS_FINGERED = "E4+A4+C#5/1+2+4:18 r:6 D5/2:24 A4+C#5+E5/1+2+3:24 F#5/4:12 G5/5:12";

/** The left hand's triplets on A for Epic and Legendary: the thumb takes the A above, and finger 3 crosses over it. */
const A_RISE_FINGERED = "A3/1:8 C#4/3:8 E4/2:8 C#4/3:8 A3/1:8";

/** The left hand's E minor arpeggio of bars 12 and 16 for Epic and Legendary, fingered 5, 3, 2, 1, then over to E. */
const E_RISE_FINGERED = "E2+E3/5+1:8 B2/3:8 E3/2:8 G3/1:8 B3/2:8 E4/1:8";

/** The tune's long F sharp in the left hand's chord, let go a short rest before the low octave. */
const HIGH_F_SHARP = "F#3+B3+D4+F#4/5+3+2+1:18 r:6";

/** The left hand's bars 19 and 23 for Legendary: the long F sharp, a low octave, then B climbing to E. */
const LOW_CLIMB_FINGERED = `${HIGH_F_SHARP} B1+B2/5+1:18 r:6 G3+B3/5+4:12 C#4/3:12 D4/2:12 E4/1:12`;

/** The left hand's bars 20 and 24 for Legendary: F sharp and D twice, over a low octave. */
const LOW_SWING_FINGERED = `${HIGH_F_SHARP} B1+B2/5+1:6 r:6 D4/2:12 F#4/1:36 D4/2:12`;

/** The left hand's bar 22 for Epic and Legendary: the tune's long B, then E, D and C sharp. */
const LOW_TURN_LEFT = "D3+F#3+B3/5+3+1:18 r:6 B1+B2/5+1:18 r:6 B2+E3+G3/5+3+2:6 r:6 E4/1:12 D4/2:12 C#4/3:12";

/** The left hand's bars 21 and 25 for Legendary, with `low` as the lowest note of the G chord. */
function lowTurnFingered(low: string): string {
  return `${HIGH_F_SHARP} B1+B2/5+1:6 r:6 B3/2:12 ${low}+G3+D4/5+4+1:12 B3/2:12 E3+G3/5+3:12 D4/1:12`;
}

/**
 * The Original's bars that Epic and Legendary play in another fingering, by bar: the right hand, then the
 * left. A version's fingers are checked move by move, where the Original's are not. So these bars move
 * fingers within the hand's span, and let go a short rest before each leap no hand spans.
 */
const FINGERED: Record<number, [right: string | undefined, left: string | undefined]> = {
  2: [undefined, `B2/5:6 r:6 ${shake(...B_SHAKE, 3, 6)} ${shake(...E_SHAKE, 3, 8)}`],
  3: [undefined, `${shake(...B_SHAKE, 3, 15)} r:6`],
  4: [
    undefined,
    `B2/5:6 r:6 ${shake(...B_SHAKE, 3, 6)} ${shake("G#3+B3/4+2", "F4/1", 3, 4)} ${shake("G3+B3/4+2", "E4/1", 3, 2)} ${shake("F#3+A#3/5+3", "E4/1", 3, 2)}`,
  ],
  10: [A_CHORDS_FINGERED, `A2/5:8 ${A_RISE_FINGERED} G2/5:8 ${A_RISE_FINGERED}`],
  12: [undefined, "E2+E3/5+1:8 B2/3:8 E3/2:8 G3/1:8 B3/3:8 E4/2:8 G4/1:12 r:36"],
  13: [
    "C#5+E#5+C#6/1+2+5:36 B5/4:12 A#4+F#5/1+4:12 D5/3:12 F#4+C#5/1+2:12 B4/2:12",
    "C#2+C#3/5+1:8 G#2/3:8 C#3/2:8 E#3/1:8 G#3/3:8 C#4/2:8 F#3+F#4/5+1:24 B3+D4/2+1:18 r:6",
  ],
  14: [A_CHORDS_FINGERED, `A2+A3/5+1:8 ${A_RISE_FINGERED} G2+G3/5+1:8 ${A_RISE_FINGERED}`],
  16: [undefined, `${E_RISE_FINGERED} D3/5:8 G3/3:8 B3/2:8 F4/1:8 B3/2:8 G3/3:8`],
  17: [undefined, "C3+E3/5+3:6 G3/2:6 C4/1:6 G3/2:6 E3/5:5 G3/3:5 C4/2:5 E4/1:5 G4/2:4 C5/1:18 r:6 Bb2+Bb3/5+1:18 r:6"],
  18: [undefined, "E#3+B3+C#4/5+2+1:18 r:6 G#2+G#3/5+1:18 r:6 E3+A#3+C#4/5+2+1:18 r:6 F#2+F#3/5+1:18 r:6"],
  19: [`B5/5:12 ${shake("E5/2", "B4/1", 3, 6)} ${shake("B4+E5/2+5", "G4/1", 3, 8)}`, LOW_CLIMB_FINGERED],
  20: [undefined, LOW_SWING_FINGERED],
  21: [undefined, lowTurnFingered("F3")],
  22: [undefined, LOW_TURN_LEFT],
  23: [undefined, LOW_CLIMB_FINGERED],
  24: [undefined, LOW_SWING_FINGERED],
  25: [undefined, lowTurnFingered("F#3")],
};

/** Epic's tremolo: `low`, then `high`, an eighth each, `pairs` times. It runs at half the Original's speed. */
function slowShake(low: string, high: string, pairs: number): string {
  return shake(low, high, 6, pairs);
}

/** Epic's left hand under the tune: the Original's tremolo of bars 2 to 9, at half its speed. */
const EPIC_THEME_LEFT = [
  `B2/5:6 r:6 ${slowShake(...B_SHAKE, 3)} ${slowShake(...E_SHAKE, 4)}`,
  `${slowShake(...B_SHAKE, 7)} B3+D4/4+2:6 r:6`,
  `B2/5:6 r:6 ${slowShake(...B_SHAKE, 3)} ${slowShake("G#3+B3/4+2", "F4/1", 2)} ${slowShake("G3+B3/4+2", "E4/1", 1)} ${slowShake("F#3+A#3/5+3", "E4/1", 1)}`,
  `D4/1:6 F#3/3:6 B2/5:6 F#3/5:6 ${slowShake(...E_SHAKE, 2)} ${slowShake("B3+F#4/4+2", "A4/1", 2)} ${slowShake(...E_SHAKE, 2)}`,
  `${slowShake(...B_SHAKE, 2)} ${slowShake("A3+D4/4+2", "F#4/1", 2)} ${slowShake("G#3+B3/4+2", "F4/1", 2)} ${slowShake("G3+B3/4+2", "E4/1", 2)}`,
  `${slowShake("F#3+B3/4+2", "D4/1", 2)} ${slowShake("F#3+G#3/3+2", "B3/1", 2)} ${slowShake("E3+F#3+A#3/5+4+2", "C#4/1", 2)} ${slowShake("D3+F#3/4+2", "B3/1", 2)}`,
  [
    slowShake("C#3+E3+F#3/5+3+2", "A#3/1", 1),
    slowShake("C#3+E3/5+3", "F#3/1", 1),
    slowShake("B2+D3/5+3", "F#3/1", 1),
    slowShake("A2+D3/5+2", "F#3/1", 1),
    slowShake("G#2+B2/5+4", "F3/1", 2),
    slowShake("G2+B2/5+4", "E3/1", 1),
    slowShake("F#2+A#2/5+4", "E3/1", 1),
  ].join(" "),
  "B2/5:8 D3/4:8 F#3/2:8 B3/1:8 F#3/2:8 D3/4:8 B2/5:12 r:36",
];

/** Epic's left hand of the Original's bar 17: its quintuplet climbs in triplet eighths, and its high C is left out. */
const EPIC_C_LEFT = "C3+E3/5+3:6 G3/2:6 C4/1:6 G3/2:6 E3/5:8 G3/3:8 C4/1:32 Bb2+Bb3/5+1:18 r:6";

/** Epic's chord of the tune's long F sharp, in three notes, let go a short rest before the low octave. */
const EPIC_HIGH_F_SHARP = "B3+D4+F#4/3+2+1:18 r:6";

/** Epic's left hand of the Original's bars 19 to 25: the tune, with a short rest before each low octave. */
const EPIC_MARCATO_LEFT = [
  `${EPIC_HIGH_F_SHARP} B1+B2/5+1:18 r:6 G3+B3/5+4:12 C#4/3:12 D4/2:12 E4/1:12`,
  `${EPIC_HIGH_F_SHARP} B1+B2/5+1:6 r:6 D4/3:12 F#4/1:36 D4/3:12`,
  `${EPIC_HIGH_F_SHARP} B1+B2/5+1:6 r:6 B3/2:12 F3+G3+D4/5+4+1:12 B3/2:12 E3+G3/5+3:12 D4/1:12`,
  LOW_TURN_LEFT,
  `${EPIC_HIGH_F_SHARP} B1+B2/5+1:18 r:6 G3+B3/5+4:12 C#4/3:12 D4/2:12 E4/1:12`,
  `${EPIC_HIGH_F_SHARP} B1+B2/5+1:6 r:6 D4/3:12 F#4/1:36 D4/3:12`,
  `${EPIC_HIGH_F_SHARP} B1+B2/5+1:6 r:6 B3/2:12 F#3+G3+D4/5+4+1:12 B3/2:12 E3+G3/5+3:12 D4/1:12`,
];

/** Epic's right hand of the Original's bars 19 to 25: the tremolo over the tune, at half its speed. */
const EPIC_MARCATO_RIGHT = [
  `B5/5:12 ${slowShake("E5/2", "B4/1", 3)} ${slowShake("B4+E5/2+5", "G4/1", 4)}`,
  slowShake("D5+F#5/2+4", "B4/1", 8),
  `${slowShake("D5+F#5/2+4", "B4/1", 4)} ${slowShake("D5+G5/2+5", "B4/1", 2)} ${slowShake("E5+A#5/2+5", "A#4/1", 2)}`,
  `${slowShake(...B_HIGH, 4)} ${slowShake(...E_HIGH, 4)}`,
  `${slowShake(...B_HIGH, 4)} ${slowShake(...E_HIGH, 4)}`,
  slowShake(...B_HIGH, 8),
  `${slowShake(...B_HIGH, 4)} ${slowShake("D5+G5/2+5", "B4/1", 2)} ${slowShake("E5+A#5/2+5", "A#4/1", 2)}`,
];

/** `part` of the Original's bars `from` to `to` as Epic and Legendary play them: from `FINGERED` where it has the bar. */
function fingeredPart(from: number, to: number, part: 0 | 1): string[] {
  return Array.from({ length: to - from + 1 }, (_, at) => {
    const bar = from + at;
    return FINGERED[bar]?.[part] ?? printBar(bar)[part];
  });
}

/** The B minor chord that closes Epic and Legendary: the left hand's part. */
const CLOSE_LEFT = "B2+F#3+B3/5+2+1:96";

export const swanLake: OurSong = {
  slug: "swan-lake",
  title: "Swan Lake",
  aka: ["Schwanensee", "Le Lac des cygnes", "Swan Lake theme", "Op. 20"],
  source: {
    composer: "Pyotr Ilyich Tchaikovsky",
    died: 1893,
    published: 1877,
    edition:
      "Swan Lake, Op. 20, Act II No. 10, the oboe's theme in bars 1 to 8, as a public domain typeset of the theme on Wikimedia Commons prints it; 1877 is the year of the ballet's first staging",
  },
  about:
    "Tchaikovsky wrote the music for the ballet Swan Lake in 1875 and 1876, and the Bolshoi Ballet first staged it in 1877. " +
    "This theme is the oboe's tune from the second act. " +
    "The film Black Swan (2010) contains sequences from Swan Lake.",
  funFact: "Vladimir Begichev commissioned the score in May 1875, and Tchaikovsky received a fee of 800 rubles for it.",
  mythic: {
    key: B_MINOR,
    // The print has no tempo word. The full score marks the Scene Moderato, so it plays at 72 a quarter.
    // The print's più mosso at bar 48 would ask for about 92, but a song keeps one tempo, so 72 holds.
    bpm: 72,
    numerator: 4,
    denominator: 4,
    steps: 24,
    right: printLine(0),
    left: printLine(1),
    pedal: printLine(2),
    source: {
      edition:
        "Swan Lake, Op. 20, Act II No. 1 Scène, in N. Kashkin's piano score for two hands, P. Jurgenson, Moscow, plate 2950, with the Paris imprint of Félix Mackar, scanned by Gallica as bpt6k1913424b on Wikimedia Commons, images 68 to 70, printed pages 64 to 66; the print is undated, and 1895 is its latest likely year",
      printed: 1895,
    },
    skills: ["left-hand-melody", "melody-in-chords", "octave-bass"],
    practice: [
      { text: "Play bars 1 to 9 with the left hand alone. Shake evenly between the lower notes and the upper note, and keep it very soft.", hands: "left", speed: 0.5, loop: [1, 9], wait: false },
      { text: "Play bars 18 to 25 with the left hand alone. It carries the tune here, and jumps down to a low octave on beat 2.", hands: "left", speed: 0.5, loop: [18, 25], wait: true },
      { text: "Play bars 26 to 38 with the right hand alone. Strike each chord in even groups of three, and keep the wrist loose.", hands: "right", speed: 0.5, loop: [26, 38], wait: false },
      { text: "Play bars 39 to 47 with both hands, slowly. Count three even notes to every half bar.", hands: "both", speed: 0.6, loop: [39, 47], wait: false },
      { text: "Play the whole Scene with both hands at full speed, with the pedal where it is marked.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 9, kind: "sound", text: "The oboe sings the theme here. Play the tremolo below it as softly as you can." },
      { fromBar: 10, toBar: 17, kind: "rhythm", text: "The left hand plays three notes to each beat. Keep them even against the right hand's straight eighths." },
      { fromBar: 18, toBar: 38, kind: "sound", text: "The tune moves into the left hand. Let it sing out, and keep the right hand's chords a little softer." },
      { fromBar: 52, toBar: 70, kind: "sound", text: "The tune returns very loudly in octaves. Then the music grows soft and ends on a quiet B minor chord." },
    ],
    tricky: {
      24: "The left hand plays the tune's F sharp in a chord, then jumps down to a low B octave. The pedal holds both as the hand comes back up to D.",
      30: "The left hand plays a C sharp major chord, jumps down to a low C sharp octave, then leaps back up to B. Hold the pedal across the jump.",
      45: "The left hand strikes a low F sharp octave, then leaps up to the C sharp above middle C. The right hand keeps shaking its chord in triplets.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: B_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${toAMinor(TUNE_RIGHT)} | ${RISE_A_MINOR} | ${SIGH_A_MINOR} | ${CLIMB_A_MINOR} | ${COMMON_PEAK} | A4/1:8`,
      left: `${toAMinor(COMMON_LEFT)} | ${COMMON_PHRASE_LEFT}`,
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 13 with the right hand alone. Finger 5 moves up from E to G in bar 10.", hands: "right", speed: 0.6, loop: [9, 13], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Hold the first E while you count to four. Then four short notes climb from A to D." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "This is a sad, proud tune. Let each long high note sing." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "Finger 2 plays A in this bar, so the thumb can reach down to F." },
      ],
      tricky: {
        3: "Play A with finger 2 here. Then the thumb reaches down to F, and finger 3 takes C.",
        7: "As in bar 3, finger 2 plays A, and the thumb reaches down to F.",
        10: "Finger 5 holds E, then moves up to G. Finger 3 takes F, and finger 2 takes E.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: [
        toAMinor(TUNE_RIGHT),
        RISE_A_MINOR,
        SIGH_A_MINOR,
        CLIMB_A_MINOR,
        PEAK_A_MINOR,
        RISE_A_MINOR,
        SIGH_A_MINOR,
        CLIMB_A_MINOR,
        TURN_A_MINOR,
        "C5+A5/1+4:8",
      ].join(" | "),
      left: `${toAMinor(bars(PULSE, "bbbbeebhbbbbeefb"))} | ${bars(RARE_PULSE, RARE_PHRASE_CHORDS)} | A2+C3+E3/5+3+1:8`,
      skills: ["two-note-chords", "waltz-bass"],
      practice: [
        { text: "Play the left hand alone. A low note comes on the beat, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "The left hand plays on every beat: a low note, then a chord. Count it as one, two." },
        { fromBar: 1, toBar: 17, kind: "sound", text: "Keep the left hand soft, so the tune sings above it." },
        { fromBar: 17, toBar: 17, kind: "fingering", text: "End with C and A together. Fingers 1 and 4 press them as one." },
      ],
      tricky: {
        9: "Finger 2 starts on B, and each finger climbs one key up to E. The left hand plays G, then D.",
        10: "Finger 5 moves up from E to G. Then fingers 3 and 2 take F and E.",
        14: "As in bar 10, finger 5 moves up from E to G.",
      },
    },
    epic: {
      key: B_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 24,
      right: [scaled(TUNE_RIGHT, 12), ...fingeredPart(10, 18, 0), ...EPIC_MARCATO_RIGHT, "B4+D5+F#5/1+2+4:96"].join(" | "),
      left: [...EPIC_THEME_LEFT, ...fingeredPart(10, 16, 1), EPIC_C_LEFT, ...fingeredPart(18, 18, 1), ...EPIC_MARCATO_LEFT, CLOSE_LEFT].join(" | "),
      pedal: [...Array<string>(17).fill(UP), ...printPart(19, 25, 2), "P:96"].join(" | "),
      markedClashBars: [12, 24],
      skills: ["left-hand-melody", "broken-chords", "pedal"],
      practice: [
        { text: "Play bars 1 to 4 with the left hand alone. Shake evenly between the lower notes and the upper note.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 18 to 24 with the left hand alone. It carries the tune here, under the right hand's tremolo.", hands: "left", speed: 0.5, loop: [18, 24], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the tremolo as softly as you can, so the tune sings above it." },
        { fromBar: 9, toBar: 16, kind: "rhythm", text: "The left hand plays three notes to each beat. Keep them even against the right hand's straight notes." },
        { fromBar: 18, toBar: 24, kind: "sound", text: "The tune is in the left hand now. Let it sing out, and keep the right hand's tremolo softer." },
      ],
      tricky: {
        18: "The left hand now plays the tune. It lets go of its chord early, jumps down to a low octave, then climbs from B to E.",
        19: "Let go of the chord a little early, and jump down to the low B octave. Then finger 3 takes D, and the thumb takes F sharp.",
        23: "As in bar 19, jump down to the low octave in the short rest. The right hand keeps shaking evenly above.",
      },
    },
    legendary: {
      key: B_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 24,
      right: [...fingeredPart(2, 25, 0), "B4+D5+F#5+B5/1+2+3+5:96"].join(" | "),
      left: [...fingeredPart(2, 25, 1), CLOSE_LEFT].join(" | "),
      pedal: [...printPart(2, 25, 2), "P:96"].join(" | "),
      markedClashBars: [12, 24],
      skills: ["left-hand-melody", "arpeggios", "octave-bass"],
      practice: [
        { text: "Play bars 1 to 8 with the left hand alone. Shake evenly between the lower notes and the upper note, and keep it very soft.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play bars 9 to 16 with the left hand alone. It plays three notes to each beat, and finger 3 crosses over the thumb.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play bars 18 to 24 with the left hand alone. It carries the tune, and jumps down to a low octave in each bar.", hands: "left", speed: 0.5, loop: [18, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the tremolo as softly as you can. The oboe's tune sings above it." },
        { fromBar: 9, toBar: 16, kind: "rhythm", text: "The left hand plays three notes to each beat. Keep them even against the right hand's straight notes." },
        { fromBar: 18, toBar: 24, kind: "sound", text: "The tune moves into the left hand. Let it sing out, and keep the right hand's tremolo softer." },
      ],
      tricky: {
        22: "The left hand lets go of its four-note chord early, and jumps down to the low B octave. Then it climbs from B to E.",
        23: "The left hand plays the tune's F sharp in a chord, then jumps down to a low B octave. Then finger 2 takes D.",
        24: "Jump down to the low octave, then back up to B. The right hand's tremolo moves to G, then to A sharp.",
      },
    },
  },
  de: {
    about:
      "Tschaikowsky schrieb die Musik zum Ballett Schwanensee in den Jahren 1875 und 1876, und das Bolschoi-Ballett brachte es 1877 zum ersten Mal auf die Bühne. " +
      "Dieses Thema ist die Melodie der Oboe aus dem zweiten Akt. " +
      "Der Film Black Swan (2010) enthält Szenen aus Schwanensee.",
    funFact: "Wladimir Begitschew gab die Musik im Mai 1875 in Auftrag, und Tschaikowsky erhielt dafür 800 Rubel.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 13 nur mit der rechten Hand. In Takt 10 geht Finger 5 vom E hinauf zum G.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen oder einen halben Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste E, während du bis vier zählst. Dann steigen vier kurze Töne von A bis D.",
          "Das ist eine traurige, stolze Melodie. Lass jeden langen hohen Ton singen.",
          "In diesem Takt spielt Finger 2 das A, damit der Daumen hinunter zum F reicht.",
        ],
        tricky: {
          3: "Spiel das A hier mit Finger 2. Dann reicht der Daumen hinunter zum F, und Finger 3 nimmt das C.",
          7: "Wie in Takt 3 spielt Finger 2 das A, und der Daumen reicht hinunter zum F.",
          10: "Finger 5 hält das E und geht dann hinauf zum G. Finger 3 nimmt das F, und Finger 2 nimmt das E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein tiefer Ton, und ein Zweiklang antwortet.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag: erst einen tiefen Ton, dann einen Akkord. Zähl dazu eins, zwei.",
          "Spiel die linke Hand leise, damit die Melodie darüber singt.",
          "Am Ende spielst du C und A zusammen. Finger 1 und 4 drücken sie wie einen Ton.",
        ],
        tricky: {
          9: "Finger 2 beginnt auf dem H, und jeder Finger steigt eine Taste höher bis zum E. Die linke Hand spielt G, dann D.",
          10: "Finger 5 geht vom E hinauf zum G. Dann nehmen Finger 3 und 2 das F und das E.",
          14: "Wie in Takt 10 geht Finger 5 vom E hinauf zum G.",
        },
      },
      epic: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der linken Hand. Wechsle gleichmäßig zwischen den unteren Tönen und dem oberen Ton.",
          "Spiel die Takte 18 bis 24 nur mit der linken Hand. Sie trägt hier die Melodie, unter dem Tremolo der rechten Hand.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Spiel das Tremolo so leise, wie du kannst, damit die Melodie darüber singt.",
          "Die linke Hand spielt drei Töne auf jeden Schlag. Halt sie gleichmäßig gegen die geraden Töne der rechten Hand.",
          "Die Melodie liegt jetzt in der linken Hand. Lass sie singen, und spiel das Tremolo der rechten Hand leiser.",
        ],
        tricky: {
          18: "Die linke Hand spielt jetzt die Melodie. Sie lässt ihren Akkord früh los, springt hinunter zu einer tiefen Oktave und steigt dann vom H zum E.",
          19: "Lass den Akkord etwas früher los, und spring hinunter zur tiefen H-Oktave. Dann nimmt Finger 3 das D und der Daumen das Fis.",
          23: "Wie in Takt 19 springst du in der kurzen Pause hinunter zur tiefen Oktave. Die rechte Hand wechselt darüber gleichmäßig weiter.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Takte 1 bis 8 nur mit der linken Hand. Wechsle gleichmäßig zwischen den unteren Tönen und dem oberen Ton, und spiel sehr leise.",
          "Spiel die Takte 9 bis 16 nur mit der linken Hand. Sie spielt drei Töne auf jeden Schlag, und Finger 3 kreuzt über den Daumen.",
          "Spiel die Takte 18 bis 24 nur mit der linken Hand. Sie trägt die Melodie und springt in jedem Takt hinunter zu einer tiefen Oktave.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel das Tremolo so leise, wie du kannst. Die Melodie der Oboe singt darüber.",
          "Die linke Hand spielt drei Töne auf jeden Schlag. Halt sie gleichmäßig gegen die geraden Töne der rechten Hand.",
          "Die Melodie wandert in die linke Hand. Lass sie singen, und spiel das Tremolo der rechten Hand leiser.",
        ],
        tricky: {
          22: "Die linke Hand lässt ihren Vierklang früh los und springt hinunter zur tiefen H-Oktave. Dann steigt sie vom H zum E.",
          23: "Die linke Hand spielt das Fis der Melodie in einem Akkord und springt dann hinunter zu einer tiefen H-Oktave. Dann nimmt Finger 2 das D.",
          24: "Spring hinunter zur tiefen Oktave und dann zurück hinauf zum H. Das Tremolo der rechten Hand geht zum G und dann zum Ais.",
        },
      },
    },
    original: {
      practice: [
        "Spiel die Takte 1 bis 9 nur mit der linken Hand. Wechsle gleichmäßig zwischen den unteren Tönen und dem oberen Ton, und spiel sehr leise.",
        "Spiel die Takte 18 bis 25 nur mit der linken Hand. Sie trägt hier die Melodie und springt auf Schlag 2 hinunter zu einer tiefen Oktave.",
        "Spiel die Takte 26 bis 38 nur mit der rechten Hand. Schlag jeden Akkord in gleichmäßigen Dreiergruppen an, und halt das Handgelenk locker.",
        "Spiel die Takte 39 bis 47 langsam mit beiden Händen. Zähl drei gleichmäßige Töne auf jeden halben Takt.",
        "Spiel die ganze Szene mit beiden Händen im vollen Tempo, mit Pedal, wo es notiert ist.",
      ],
      tips: [
        "Hier singt die Oboe das Thema. Spiel das Tremolo darunter so leise, wie du kannst.",
        "Die linke Hand spielt drei Töne auf jeden Schlag. Halt sie gleichmäßig gegen die geraden Achtel der rechten Hand.",
        "Die Melodie wandert in die linke Hand. Lass sie singen, und spiel die Akkorde der rechten Hand etwas leiser.",
        "Die Melodie kehrt sehr laut in Oktaven zurück. Dann wird die Musik leise und endet auf einem ruhigen h-Moll-Akkord.",
      ],
      tricky: {
        24: "Die linke Hand spielt das Fis der Melodie in einem Akkord und springt dann hinunter zu einer tiefen H-Oktave. Das Pedal hält beide, während die Hand zurück zum D kommt.",
        30: "Die linke Hand spielt einen Cis-Dur-Akkord, springt hinunter zu einer tiefen Cis-Oktave und dann zurück hinauf zum H. Halt das Pedal über den Sprung.",
        45: "Die linke Hand schlägt eine tiefe Fis-Oktave an und springt dann hinauf zum Cis über dem mittleren C. Die rechte Hand wiederholt dabei weiter ihren Akkord in Triolen.",
      },
    },
  },
};

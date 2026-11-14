/**
 * *Boléro*: the first flute solo of Ravel's piece for orchestra, in four versions of ours, and our
 * Original of its first 76 bars.
 *
 * The tune is the flute's solo in bars 5 to 12 of the full score. The print is in 3/4 with sixteenths,
 * and the tune writes every sixteenth as a quarter, so each print bar is a bar of 3/1. Ties inside a bar
 * are merged. A tie over a bar line cannot be written, so the tune strikes that note again in bars 4, 5
 * and 8. Its key is C major, and the hook is bars 1 to 4.
 *
 * Every version writes the tune in 3/1 quarters, one bar per print bar. It plays the 8 tune bars, then
 * the source's next phrase: the flute's bars 13 to 20, as the Original plays them. Common has time for
 * only the first three of these bars, and closes on C. Rare plays all eight, and closes on C and E. Epic
 * and Legendary go on to the two bars of rhythm alone. They then play the tune again, as the clarinet
 * takes it up in the score, and close on C major.
 *
 * Common plays the tune over held open fifths and single bass notes, on C major, G major and F major. It
 * leaves out the last D of bar 5, so the hand never moves in the tune. Rare plays the root, the fifth,
 * then both on the three beats of each bar. Epic and Legendary take the Original's left hand from bar 23
 * throughout: the strings' plucked chords, with the snare drum's rhythm on G3 between them. Epic plays
 * the tune again with a sixth or a chord under its long notes. Legendary plays it again in octaves, and
 * ends on a four-note chord.
 *
 * The Original reduces Durand's full score for two hands in 3/4, in 24ths of a quarter. The right hand
 * plays each tune, and the bolero rhythm on G4 where no tune sounds. The left hand plays the strings'
 * plucked chords, and from bar 23 the rhythm on G3 between them. Bars 53 to 57 swap the hands, since the
 * tune falls below middle C there.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "C5:6 B4:1 C5:1 D5:1 C5:1 B4:1 A4:1 | C5:2 C5:1 A4:1 C5:6 B4:1 C5:1 | A4:1 G4:1 E4:1 F4:1 G4:8 | " +
  "G4:1 F4:1 E4:1 D4:1 E4:1 F4:1 G4:1 A4:1 G4:4 | G4:5 A4:1 B4:1 A4:1 G4:1 F4:1 E4:1 D4:1 | " +
  "E4:1 D4:1 C4:4 C4:1 D4:1 E4:2 F4:2 | D4:4 G4:8 | G4:10 r:2";

/**
 * The tune's first four bars in quarters, fingered in one place. Finger 5 takes the long C in bar 2, so
 * finger 2 can reach E in bar 3.
 */
const TUNE_HOOK = [
  "C5/4:6 B4/3:1 C5/4:1 D5/5:1 C5/4:1 B4/3:1 A4/2:1",
  "C5/4:2 C5/4:1 A4/2:1 C5/5:6 B4/4:1 C5/5:1",
  "A4/4:1 G4/3:1 E4/2:1 F4/3:1 G4/4:8",
  "G4/4:1 F4/3:1 E4/2:1 D4/1:1 E4/2:1 F4/3:1 G4/4:1 A4/5:1 G4/4:4",
].join(" | ");

/** The tune's bars 5 and 6 in quarters: the thumb steps down to D, then to C. */
const TUNE_FALL = "G4/3:5 A4/4:1 B4/5:1 A4/4:1 G4/3:1 F4/2:1 E4/1:1 D4/1:1 | E4/2:1 D4/1:1 C4/1:4 C4/1:1 D4/2:1 E4/3:2 F4/4:2";

/** The tune's last two bars in quarters. The thumb strikes G again, so the hand can reach up to D after it. */
const TUNE_END = "D4/2:4 G4/5:8 | G4/1:10 r:2";

/** The whole tune in quarters, as Rare, Epic and Legendary finger it. */
const TUNE_RIGHT = `${TUNE_HOOK} | ${TUNE_FALL} | ${TUNE_END}`;

/** Common's tune in quarters: bar 5 holds E in place of its last D, so the hand stays in one place. */
const COMMON_TUNE = [
  TUNE_HOOK,
  "G4/3:5 A4/4:1 B4/5:1 A4/4:1 G4/3:1 F4/2:1 E4/1:2",
  "E4/3:1 D4/2:1 C4/1:4 C4/1:1 D4/2:1 E4/3:2 F4/4:2",
  TUNE_END,
].join(" | ");

/**
 * The tune's next phrase in quarters, print bars 13 to 20, as Common and Rare finger it. The hand starts
 * high on D, and each move to a lower place passes between two fingers within their span.
 */
const NEXT_PHRASE = [
  "D5/5:7 C5/4:1 B4/3:1 A4/2:1 B4/3:1 C5/4:1",
  "D5/5:1 C5/4:1 B4/3:3 C5/4:1 B4/3:1 A4/2:1 C5/4:1 B4/3:1 A4/2:1 F4/1:1~",
  "F4/1:2 F4/1:1 F4/1:1 F4/1:2 A4/3:2 C5/5:1 A4/3:1 B4/4:1 G4/2:1",
  "F4/1:2 F4/1:1 F4/1:1 F4/1:2 A4/3:2 B4/4:1 G4/2:1 A4/5:1 F4/3:1",
  "D4/2:2 D4/2:1 C4/1:1 D4/2:6 D4/2:1 D4/2:1",
  "D4/2:2 F4/3:2 A4/5:1 F4/3:1 G4/5:1 E4/3:1 D4/2:2 D4/2:1 C4/1:1",
  "D4/2:6 D4/2:1 C4/1:1 D4/2:2 E4/3:1 F4/4:1",
  "G4/5:9 F4/4:1 E4/3:1 D4/2:1",
];

/** Common's bars after the tune: the first three bars of the next phrase, then C to close. */
const COMMON_NEXT = [...NEXT_PHRASE.slice(0, 3), "C5/5:6 r:6"].join(" | ");

/** Rare's bars after the tune, in eighths: the whole next phrase, then C and E to close. */
const RARE_NEXT = `${scaled(NEXT_PHRASE.join(" | "), 2)} | C4+E4/1+3:24`;

/** Epic's tune again in quarters, with a sixth or a chord under its long notes. */
const EPIC_AGAIN = [
  "E4+C5/1+4:6 B4/3:1 C5/4:1 D5/5:1 C5/4:1 B4/3:1 A4/2:1",
  "C5/4:2 C5/4:1 A4/2:1 E4+C5/1+5:6 B4/4:1 C5/5:1",
  "A4/4:1 G4/3:1 E4/2:1 F4/3:1 C4+E4+G4/1+2+4:8",
  "G4/4:1 F4/3:1 E4/2:1 D4/1:1 E4/2:1 F4/3:1 G4/4:1 A4/5:1 D4+G4/1+4:4",
  "D4+G4/1+3:5 A4/4:1 B4/5:1 A4/4:1 G4/3:1 F4/2:1 E4/1:1 D4/1:1",
  "E4/2:1 D4/1:1 C4/1:4 C4/1:1 D4/2:1 E4/3:2 F4/4:2",
  "D4/2:4 B3+D4+G4/1+2+5:8",
  "C4+E4+G4/1+2+5:10 r:2",
].join(" | ");

/** `text` with every note doubled an octave up, played by the thumb and the little finger. */
function inOctaves(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)\/\d(?=:)/g, (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5`);
}

/** `text` with every length times `factor`, so a line in quarters reads in sixths of a quarter for 6. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/**
 * Legendary's tune again in octaves, in sixths of a quarter. The octave D in bar 7 ends an eighth early,
 * so the hand can jump up to G.
 */
const LEGENDARY_AGAIN = [
  scaled(inOctaves(`${TUNE_HOOK} | ${TUNE_FALL}`), 6),
  "D4+D5/1+5:21 r:3 G4+G5/1+5:48",
  "G4+G5/1+5:60 r:12",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"CCG"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords]
    .map((chord) => {
      const pattern = patterns[chord];
      if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
      return pattern;
    })
    .join(" | ");
}

/** Common's bass for each bar, in quarters: an open fifth or one note, held. `c` and `h` end in a rest to move. */
const HELD: Record<string, string> = {
  C: "C3+G3/5+1:12",
  G: "G3/1:12",
  c: "C3+G3/5+1:10 r:2",
  h: "G3/1:10 r:2",
  F: "F2+C3/5+1:12",
  E: "C3+G3/5+1:6 r:6",
};

/**
 * Rare's bass for each bar, in eighths: the root, the fifth, then both, one on each beat. `e` ends the
 * tune in a rest, and `E` holds the last chord.
 */
const ROOT_FIFTH: Record<string, string> = {
  C: "C3/3:8 G3/1:8 C3+G3/3+1:8",
  G: "G2/5:8 D3/2:8 G2+D3/5+2:8",
  e: "C3/3:8 G3/1:8 C3+G3/3+1:6 r:2",
  f: "F2/5:8 C3/2:8 F2+C3/5+2:8",
  g: "G2/4:8 D3/1:8 G2+D3/4+1:8",
  E: "C3+G3/2+1:24",
};

/** One bar of the Original in 24ths of a quarter, 72 to the bar: the right hand and the left hand. */
type PrintBar = readonly [right: string, left: string];

/** The Original's bars in the print. Bar 77 is our closing chord. */
const PRINT_LENGTH = 76;

/** The bolero rhythm on G4, as the flute plays it, in odd and in even bars. */
const RHYTHM_ODD = "G4/3:12 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:12";
const RHYTHM_EVEN = "G4/3:12 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:4 G4/2:4 G4/1:4 G4/3:4 G4/2:4 G4/1:4 G4/3:4 G4/2:4 G4/1:4";

/** The strings' plucked chords of bars 1 to 20, in odd and in even bars, the viola's G3 and G4 on beat 2. */
const OPENING_ODD = "C3+G3/5+1:24 G3+G4/5+1:24 G2+G3/5+1:24";
const OPENING_EVEN = "C3+G3/5+1:24 G3+G4/5+1:24 G2+G3/5+1:12 G3/1:12";

/** The plucked chords from bar 21 under the right hand's bolero rhythm. Beat 2 leaves G4 to the right hand. */
const PLUCKED_ODD = "C3+G3/5+1:24 G3/1:24 G2+C3+G3/5+4+1:24";
const PLUCKED_EVEN = "C3+G3/5+1:24 G3/1:24 G2+C3+G3/5+4+1:12 G3/1:12";

/**
 * The left hand under a tune from bar 23: the plucked chords on the beats, and the flute's bolero rhythm
 * an octave down on G3 between them, so no hand plays it twice.
 */
const DRUM_ODD = "C3+G3/5+1:12 G3/3:4 G3/2:4 G3/1:4 G3/1:12 G3/3:4 G3/2:4 G3/1:4 G2+C3+G3/5+4+1:12 G3/1:12";
const DRUM_EVEN = "C3+G3/5+1:12 G3/3:4 G3/2:4 G3/1:4 G3/1:12 G3/3:4 G3/2:4 G3/1:4 G2+C3+G3/5+4+1:4 G3/3:4 G3/2:4 G3/1:4 G3/3:4 G3/2:4";

/**
 * The A theme, as the flute plays it in bars 5 to 20 and the clarinet in bars 23 to 38. Both statements
 * take the clarinet's reading and fingers, so bars 9 and 27 hold G4 into their first 16th.
 */
const A_THEME = [
  "C5/3:36 B4/2:6 C5/3:6 D5/4:6 C5/3:6 B4/2:6 A4/1:6",
  "C5/3:12 C5/3:6 A4/1:6 C5/3:36 B4/2:6 C5/3:6",
  "A4/4:6 G4/3:6 E4/1:6 F4/2:6 G4/3:48~",
  "G4/3:6 F4/2:6 E4/1:6 D4/1:6 E4/2:6 F4/1:6 G4/2:6 A4/3:6 G4/2:24~",
  "G4/2:30 A4/3:6 B4/4:6 A4/3:6 G4/2:6 F4/1:6 E4/3:6 D4/2:6",
  "E4/3:6 D4/2:6 C4/1:24 C4/1:6 D4/2:6 E4/3:12 F4/4:12",
  "D4/1:24 G4/4:48~",
  "G4/4:60 r:12",
  "D5/5:42 C5/4:6 B4/3:6 A4/2:6 B4/3:6 C5/4:6",
  "D5/5:6 C5/4:6 B4/3:18 C5/4:6 B4/3:6 A4/2:6 C5/4:6 B4/3:6 A4/2:6 F4/1:6~",
  "F4/1:12 F4/1:6 F4/1:6 F4/1:12 A4/2:12 C5/4:6 A4/2:6 B4/3:6 G4/1:6",
  "F4/1:12 F4/1:6 F4/1:6 F4/1:12 A4/3:12 B4/4:6 G4/2:6 A4/3:6 F4/1:6",
  "D4/2:12 D4/2:6 C4/1:6 D4/2:36 D4/2:6 D4/2:6",
  "D4/1:12 F4/2:12 A4/5:6 F4/3:6 G4/4:6 E4/2:6 D4/1:12 D4/2:6 C4/1:6",
  "D4/2:36 D4/2:6 C4/1:6 D4/2:12 E4/3:6 F4/4:6",
  "G4/5:54 F4/4:6 E4/3:6 D4/2:6",
];

/** The bassoon's B theme in bars 41 to 52, where it still lies above the left hand's G3. */
const B_THEME_LOW = [
  "Bb4/4:30 A4/3:6 G4/2:6 F4/1:6 Bb4/4:6 C5/5:6 A4/3:6 G4/2:6",
  "Bb4/4:12 A4/3:6 G4/2:6 Bb4/4:24 A4/3:6 Bb4/4:6 A4/3:6 G4/2:6~",
  "G4/4:30 F4/3:6 E4/2:6 D4/1:6 E4/2:24~",
  "E4/2:24 r:12 Bb4/3:12 C5/4:12 Db5/5:12~",
  "Db5/5:12 Db5/5:24 Db5/5:12 Db5/5:12 Db5/5:12",
  "Db5/5:8 Db5/5:8 Db5/5:8 Db5/5:12 C5/4:6 Bb4/3:6 Db5/5:12 C5/4:6 Bb4/3:6",
  "Db5/4:6 C5/3:6 Bb4/2:6 Ab4/1:6 G4/3:6 F4/2:6 E4/1:36~",
  "E4/1:60 r:12",
  "D4/1:36 E4/2:12 D4/1:6 E4/2:6 F4/3:12~",
  "F4/3:24 G4/4:12 Ab4/5:12 F4/3:8 G4/4:8 E4/2:8",
  "D4/3:6 E4/4:6 D4/3:6 C4/2:18 Bb3/1:36~",
  "Bb3/1:6 C4/2:6 Bb3/1:6 C4/2:6 D4/3:6 E4/4:6 D4/3:6 C4/2:6 D4/4:6 C4/3:6 Bb3/2:6 Ab3/1:6",
];

/**
 * Bars 53 to 57, where the B theme falls below middle C. The right hand plays it to the breath in bar 53,
 * and the left hand takes it from the F below, down to C. The right hand then plays the flute's rhythm on
 * G4 and the viola's G3 under it, where the tune leaves G3 free. The print turns the bassoon to the bass
 * clef at the breath, so its last notes read as the E-flat clarinet's in bars 71 to 75, an octave down.
 */
const B_THEME_FALL: Record<number, PrintBar> = {
  53: ["Bb3/3:6 Ab3/2:6 G3/1:24 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:12", "C3+G3/5+1:12 r:24 F3/2:36~"],
  54: [
    "G3+G4/1+5:12 G4/4:4 G4/3:4 G4/2:4 G4/5:12 G4/4:4 G4/3:4 G4/2:4 G4/4:4 G4/3:4 G4/2:4 G4/4:4 G4/3:4 G4/2:4",
    "F3/2:30 G3/1:6 F3/2:6 Eb3/3:30~",
  ],
  55: [
    "G3+G4/1+5:12 G4/4:4 G4/3:4 G4/2:4 G3+G4/1+5:12 G4/4:4 G4/3:4 G4/2:4 G4/4:12 G4/4:12",
    "Eb3/3:24 F3/2:6 Eb3/3:6 F3/2:6 Db3/4:30~",
  ],
  56: [
    "G3+G4/1+5:12 G4/4:4 G4/3:4 G4/2:4 G3+G4/1+5:12 G4/4:4 G4/3:4 G4/2:4 G4/4:4 G4/3:4 G4/2:4 G4/4:4 G4/3:4 G4/2:4",
    "Db3/4:30 Db3/4:6 Eb3/3:6 Db3/4:6 F3/2:6 Eb3/3:6 Db3/4:6 C3/5:6~",
  ],
  57: [RHYTHM_ODD, "C3/5:24 G3/1:24 G2+C3+G3/5+4+1:24"],
};

/** The E-flat clarinet's B theme in bars 59 to 74, as it sounds, a minor third above the written notes. */
const B_THEME_HIGH = [
  "Bb5/4:30 A5/3:6 G5/2:6 F5/1:6 Bb5/4:6 C6/5:6 A5/3:6 G5/2:6",
  "Bb5/4:12 A5/3:6 G5/2:6 Bb5/4:24 A5/3:6 Bb5/4:6 A5/3:6 G5/2:6~",
  "G5/2:30 F5/1:6 E5/3:6 D5/2:6 E5/3:24~",
  "E5/3:24 r:12 Bb5/2:12 C6/3:12 Db6/4:12~",
  "Db6/4:12 Db6/3:24 Db6/4:12 Db6/3:12 Db6/2:12",
  "Db6/4:8 Db6/3:8 Db6/2:8 Db6/4:12 C6/3:6 Bb5/2:6 Db6/4:12 C6/3:6 Bb5/2:6",
  "Db6/5:6 C6/4:6 Bb5/3:6 Ab5/2:6 G5/1:6 F5/3:6 E5/2:36~",
  "E5/2:60 r:12",
  "D5/1:36 E5/2:12 D5/1:6 E5/2:6 F5/3:12~",
  "F5/3:24 G5/4:12 Ab5/5:12 F5/3:8 G5/4:8 E5/2:8",
  "D5/3:6 E5/4:6 D5/3:6 C5/2:18 Bb4/1:36~",
  "Bb4/1:6 C5/2:6 Bb4/1:6 C5/2:6 D5/3:6 E5/4:6 D5/3:6 C5/2:6 D5/4:6 C5/3:6 Bb4/2:6 Ab4/1:6",
  "Bb4/3:6 Ab4/2:6 G4/1:24 F4/2:36~",
  "F4/2:30 G4/3:6 F4/2:6 Eb4/1:30~",
  "Eb4/1:24 F4/3:6 Eb4/2:6 F4/3:6 Db4/1:30~",
  "Db4/1:30 Db4/1:6 Eb4/2:6 Db4/1:6 F4/3:6 Eb4/2:6 Db4/1:6 C4/1:6~",
];

/**
 * Bars 75 and 76: the bolero rhythm alone, with the cellos' new E3 and the violas' C4 in the left hand.
 * The tune's last C4 is held from bar 74, so the flute's G4 joins on the second eighth.
 */
const CLOSE: Record<number, PrintBar> = {
  75: ["C4/1:12 G4/3:4 G4/2:4 G4/1:4 G4/1:12 G4/3:4 G4/2:4 G4/1:4 G4/1:12 G4/1:12", "C3+E3+G3/5+3+1:24 C4/1:24 G2+G3/5+1:24"],
  76: [
    "G4/1:12 G4/3:4 G4/2:4 G4/1:4 G4/1:12 G4/3:4 G4/2:4 G4/1:4 G4/3:4 G4/2:4 G4/1:4 G4/3:4 G4/2:4 G4/1:4",
    "C3+E3+G3/5+3+1:24 C4/1:24 G2+G3/5+1:12 G3/1:12",
  ],
};

/** Our closing bar after the cut: a held C major chord. */
const LAST_BAR: PrintBar = ["C4+E4+G4+C5/1+2+3+5:72", "C2+G2+C3/5+2+1:72"];

/** Whether the right hand's bar `text` sounds `name` between the units `from` and `to`. */
function sounds(text: string, name: string, from: number, to: number): boolean {
  let at = 0;
  for (const token of text.split(" ")) {
    const [head = "", length = ""] = token.split(":");
    const end = at + Number.parseInt(length, 10);
    if ((head.split("/")[0] ?? "").split("+").includes(name) && at < to && end > from) return true;
    at = end;
  }
  return false;
}

/** The plucked chords of bars 1 to 20 under `right`. The viola's G4 drops where the tune sounds G4 on beat 2. */
function opening(bar: number, right: string): string {
  const chords = bar % 2 === 0 ? OPENING_EVEN : OPENING_ODD;
  return sounds(right, "G4", 24, 48) ? chords.replace("G3+G4/5+1:24", "G3/1:24") : chords;
}

/** Bar `bar` of the print, from 1 to 76. */
function printBar(bar: number): PrintBar {
  const even = bar % 2 === 0;
  const fall = B_THEME_FALL[bar] ?? CLOSE[bar];
  if (fall !== undefined) return fall;
  if (bar <= 4) return ["r:72", opening(bar, "r:72")];
  if (bar <= 20) return [A_THEME[bar - 5]!, opening(bar, A_THEME[bar - 5]!)];
  if (bar === 21) return ["C4/1:12 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:12", PLUCKED_ODD];
  if (bar === 39) return ["C4+G4/1+5:12 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:4 G4/2:4 G4/1:4 G4/3:12 G4/3:12", PLUCKED_ODD];
  if (bar === 22 || bar === 40 || bar === 58) return [RHYTHM_EVEN, PLUCKED_EVEN];
  const drum = even ? DRUM_EVEN : DRUM_ODD;
  if (bar <= 38) return [A_THEME[bar - 23]!, drum];
  if (bar <= 52) return [B_THEME_LOW[bar - 41]!, drum];
  if (bar <= 74) return [B_THEME_HIGH[bar - 59]!, drum];
  throw new Error(`Boléro's Original has no bar ${bar}`);
}

/** One hand of the Original: `part` of each print bar in order, then our closing bar. */
function printLine(part: 0 | 1): string {
  const bars = Array.from({ length: PRINT_LENGTH }, (_, at) => printBar(at + 1)[part]);
  return [...bars, LAST_BAR[part]].join(" | ");
}

/** The Original's pedal: none under the plucked bars, and down through our closing chord. */
const ORIGINAL_PEDAL = [...Array(PRINT_LENGTH).fill("r:72"), "P:72"].join(" | ");

/** The print bars from `first` to `last`. */
function printRange(first: number, last: number): number[] {
  return Array.from({ length: last - first + 1 }, (_, at) => first + at);
}

/**
 * The even bar's drum figure as Epic and Legendary finger it. The thumb keeps G3 for two notes after the
 * chord on beat 3, since the chord's little finger lies an octave below.
 */
const DRUM_EVEN_HELD =
  "C3+G3/5+1:12 G3/3:4 G3/2:4 G3/1:4 G3/1:12 G3/3:4 G3/2:4 G3/1:4 G2+C3+G3/5+4+1:4 G3/1:4 G3/1:4 G3/3:4 G3/2:4 G3/1:4";

/** The Original's left hand from bar 23 for print bar `bar`: the plucked chords and the drum rhythm on G3. */
function drum(bar: number): string {
  return bar % 2 === 0 ? DRUM_EVEN_HELD : DRUM_ODD;
}

/**
 * Epic's right hand after the tune, in 24ths of a quarter as the Original writes it: the next phrase,
 * print bars 13 to 20, then the rhythm alone of bars 21 and 22.
 */
const NEXT_RIGHT = printRange(13, 22).map((bar) => printBar(bar)[0]).join(" | ");

/** Legendary's: Epic's, with the last G cut short, so the hand has an eighth's rest to leap to the octaves. */
const NEXT_RIGHT_LEAP = NEXT_RIGHT.replace(/G4\/1:4$/, "G4/1:1 r:3");

/**
 * Epic's and Legendary's left hand: the Original's from bar 23, the plucked chords with the drum rhythm
 * between them. It plays under the tune's print bars 5 to 20 and under the tune's return. The plucked
 * chords of bars 21 and 22 lie between, and our closing bar holds C.
 */
const SOURCE_LEFT = [
  ...printRange(5, 20).map(drum),
  ...printRange(21, 22).map((bar) => printBar(bar)[1]),
  ...printRange(23, 30).map(drum),
  "C3+G3/5+1:72",
].join(" | ");

/** Epic's and Legendary's pedal: up as the score has it, and down for the last chord. */
const SOURCE_PEDAL = [...Array(26).fill("r:72"), "P:72"].join(" | ");

export const bolero: OurSong = {
  slug: "bolero",
  title: "Boléro",
  aka: ["Bolero", "Ravel's Boléro", "Ravel Bolero"],
  source: {
    composer: "Maurice Ravel",
    died: 1937,
    published: 1929,
    edition:
      "Boléro, the first flute solo in bars 5 to 12, as Nicolas Sceaux's CC0 typeset of the full score on Wikimedia Commons prints it; Durand first published the score in 1929",
  },
  about:
    "Ravel wrote Boléro for orchestra in 1928, and Durand first published it in 1929. " +
    "Two melodies take turns over one snare drum rhythm, which grows from soft to loud. " +
    "The 1979 film 10 featured it prominently, and its sales soared.",
  funFact: "Ravel first played the melody with one finger to his friend Gustave Samazeuilh, and asked whether it had an insistent quality.",
  /**
   * Our Original keeps bars 1 to 76 of the 340: the first four statements, each closing on two bars of the
   * rhythm alone. The later statements are left out, because the scan of the tutti pages is unreadable.
   * Bar 77 is ours, a held C major chord. The score has no pedal; ours holds only that chord.
   */
  mythic: {
    key: C_MAJOR,
    bpm: 72,
    numerator: 3,
    denominator: 4,
    steps: 24,
    right: printLine(0),
    left: printLine(1),
    pedal: ORIGINAL_PEDAL,
    source: {
      edition:
        "Ravel, Boléro, full score, Durand & Cie, Paris, plate D. & F. 11 839, bars 1 to 76, printed pages 1 to 9, reduced for two hands; scanned as Internet Archive item imslp-104723-pmlp-03667-ravel-bolero-cropped",
      printed: 1929,
      addedBars: [77],
    },
    skills: ["sixteenth-notes", "left-hand-melody", "position-change"],
    practice: [
      { text: "Play bars 1 to 8 with the left hand alone. It plucks the same three chords in every bar, like the strings.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
      { text: "Play the flute's tune in bars 5 to 20 with the right hand alone. Hold each long note for its full length.", hands: "right", speed: 0.6, loop: [5, 20], wait: true },
      { text: "Play bars 23 to 30 with the left hand alone. Between its chords it plays the drum rhythm on G, with quick triplets.", hands: "left", speed: 0.5, loop: [23, 30], wait: false },
      { text: "Play bars 51 to 58 slowly with both hands. The left hand takes the tune in bar 53, and the right hand takes the drum rhythm.", hands: "both", speed: 0.5, loop: [51, 58], wait: true },
      { text: "Play the whole piece with both hands at full speed. Keep it soft and steady, and never hurry.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 4, kind: "rhythm", text: "The piece starts with plucked chords alone. Count three slow beats, and keep them perfectly even." },
      { fromBar: 23, toBar: 38, kind: "rhythm", text: "The left hand now adds the drum rhythm. Play its three quick notes lightly, so the tune stays on top." },
      { fromBar: 41, toBar: 52, kind: "sound", text: "The second tune bends with B flat and D flat. Let these notes sound a little sad." },
      { fromBar: 53, toBar: 57, kind: "trick", text: "The tune falls below middle C here, so the left hand takes it. The right hand plays the drum rhythm above." },
    ],
    tricky: {
      25: "The right thumb plays E, then fingers 2 and 3 play F and G. Hold the G to the end, while the left hand plays the drum rhythm.",
      51: "Four quick notes end on a long C. Then the thumb plays the low B flat, just above the left hand's G.",
      62: "After the long E, the right hand jumps up to B flat. Play B flat, C and D flat with fingers 2, 3 and 4.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 144,
      numerator: 3,
      denominator: 1,
      steps: 4,
      right: `${COMMON_TUNE} | ${COMMON_NEXT}`,
      left: bars(HELD, "CCCGGCGcGhFE"),
      skills: ["five-finger-position", "open-fifths", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune sinks slowly down to C.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one note or a fifth for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play softly and evenly, like a flute far away. The tune should hardly change in volume." },
        { fromBar: 2, toBar: 3, kind: "fingering", text: "Take the long C with finger 5. Then finger 2 can reach down to E without moving the hand." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Play E again with finger 3 at the start of bar 6. The thumb is then ready for C." },
      ],
      tricky: {
        2: "Finger 2 plays A, then finger 5 takes the long C. Fingers 4 and 5 then play B and C.",
        11: "The thumb holds F, then plays it three more times. Fingers 3 and 5 play A and C, and finger 2 ends on G.",
        12: "Finger 5 reaches up from G to the last C. The left hand moves from F and C to C and G.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 160,
      numerator: 3,
      denominator: 1,
      steps: 8,
      right: `${scaled(TUNE_RIGHT, 2)} | ${RARE_NEXT}`,
      left: bars(ROOT_FIFTH, "CCCGGCGeggfggfggE"),
      skills: ["waltz-bass", "two-note-chords", "position-change"],
      practice: [
        { text: "Play the left hand alone: the root, the fifth, then both, one on each beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 and 6 with the right hand alone. The thumb steps down twice.", hands: "right", speed: 0.6, loop: [5, 6], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Count three slow beats in each bar. The left hand plays once on each beat, like a quiet drum." },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "After E, the thumb steps down to D. In the next bar it steps down again to C." },
        { fromBar: 17, toBar: 17, kind: "sound", text: "Press C and E together, and let them ring to the end." },
      ],
      tricky: {
        5: "After the long G, fingers 4 and 5 climb to B. At the end, the thumb plays E, then steps down to D.",
        6: "Finger 2 plays E, and the thumb plays D. Then the thumb steps down to C and stays there.",
        9: "Use the short rest to move the left hand down to G. The right hand reaches up to D with finger 5.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 200,
      numerator: 3,
      denominator: 1,
      steps: 24,
      right: [scaled(TUNE_RIGHT, 6), NEXT_RIGHT, scaled(EPIC_AGAIN, 6), "E4+G4+C5/1+2+5:72"].join(" | "),
      left: SOURCE_LEFT,
      pedal: SOURCE_PEDAL,
      markedClashBars: [9, 12, 25],
      skills: ["thirds-and-sixths", "finger-over", "position-change"],
      practice: [
        { text: "Play the left hand alone. A plucked chord comes first, then three quick notes on G, like a snare drum.", hands: "left", speed: 0.5, loop: [1, 2], wait: false },
        { text: "Play bars 9 to 16 with the right hand alone. The second half of the tune falls from high D to low D.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal on the last chord.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The three quick notes fit into the time of two tune notes. Keep them light and even." },
        { fromBar: 17, toBar: 18, kind: "rhythm", text: "The tune rests here, and only the drum rhythm plays. Count the three beats, and keep them even." },
        { fromBar: 19, toBar: 26, kind: "sound", text: "The tune comes back fuller. Let its top note sing over the lower notes." },
      ],
      tricky: {
        6: "The thumb steps down from D to C, while the left hand keeps the drum rhythm going.",
        12: "Keep the thumb on F, and play A, B, G and A above it with fingers 3, 4, 2 and 3. The left hand keeps the drum rhythm.",
        24: "As in bar 6, the thumb steps down from D to C. The left hand plays the drum rhythm under it.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 240,
      numerator: 3,
      denominator: 1,
      steps: 24,
      right: [scaled(TUNE_RIGHT, 6), NEXT_RIGHT_LEAP, LEGENDARY_AGAIN, LAST_BAR[0]].join(" | "),
      left: SOURCE_LEFT,
      pedal: SOURCE_PEDAL,
      markedClashBars: [9, 12],
      skills: ["melody-in-chords", "finger-over", "position-change"],
      practice: [
        { text: "Play the left hand alone on the first two bars. Land each chord firmly, then play the quick notes lightly.", hands: "left", speed: 0.5, loop: [1, 2], wait: false },
        { text: "Play bars 9 to 16 with the right hand alone. The second half of the tune falls from high D to low D.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's octaves alone in bars 19 to 26. Keep the hand open, with the thumb and little finger ready.", hands: "right", speed: 0.5, loop: [19, 26], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let it grow louder to the last chord.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "The left hand plays the strings' chords and the snare drum's rhythm. Keep it soft, so the tune sings above it." },
        { fromBar: 17, toBar: 18, kind: "rhythm", text: "The tune rests here, and only the drum rhythm plays. Count the three beats, and keep them even." },
        { fromBar: 19, toBar: 27, kind: "sound", text: "Start the octaves softly and grow louder, as the whole orchestra does in the piece." },
      ],
      tricky: {
        19: "The octaves begin. Open the hand with the thumb on C and the little finger on the C above.",
        22: "The octaves step down from G to D and back up to A. Keep the wrist loose and the hand open.",
        23: "After the long G, the octaves climb to B and fall to D. Move the whole hand, and keep it open.",
      },
    },
  },
  de: {
    about:
      "Ravel schrieb den Boléro 1928 für Orchester, und Durand veröffentlichte ihn erstmals 1929. " +
      "Zwei Melodien wechseln sich über einem einzigen Rhythmus der kleinen Trommel ab, der von leise zu laut wächst. " +
      "Der Film 10 von 1979 stellte ihn deutlich heraus, und seine Verkaufszahlen schnellten in die Höhe.",
    funFact: "Ravel spielte die Melodie zuerst mit einem Finger seinem Freund Gustave Samazeuilh vor und fragte, ob sie etwas Eindringliches habe.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie sinkt langsam hinab zum C.",
          "Jetzt die linke Hand allein. Sie hält einen Ton oder eine Quinte einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel leise und gleichmäßig, wie eine Flöte in der Ferne. Die Lautstärke soll sich kaum ändern.",
          "Nimm das lange C mit Finger 5. Dann erreicht Finger 2 das E, ohne dass die Hand sich bewegt.",
          "Spiel das E am Anfang von Takt 6 noch einmal mit Finger 3. Dann ist der Daumen bereit für das C.",
        ],
        tricky: {
          2: "Finger 2 spielt das A, dann nimmt Finger 5 das lange C. Danach spielen Finger 4 und 5 das H und das C.",
          11: "Der Daumen hält das F und spielt es dann noch dreimal. Finger 3 und 5 spielen A und C, und Finger 2 endet auf dem G.",
          12: "Finger 5 reicht vom G hinauf zum letzten C. Die linke Hand rückt von F und C zu C und G.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: den Grundton, die Quinte, dann beide, einen auf jedem Schlag.",
          "Spiel die Takte 5 und 6 nur mit der rechten Hand. Der Daumen rückt zweimal nach unten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Zähl in jedem Takt drei langsame Schläge. Die linke Hand spielt einmal auf jedem Schlag, wie eine leise Trommel.",
          "Nach dem E rückt der Daumen hinab zum D. Im nächsten Takt rückt er wieder hinab zum C.",
          "Drück C und E zusammen, und lass sie bis zum Ende klingen.",
        ],
        tricky: {
          5: "Nach dem langen G steigen Finger 4 und 5 hinauf zum H. Am Ende spielt der Daumen das E und rückt dann hinab zum D.",
          6: "Finger 2 spielt das E, und der Daumen spielt das D. Dann rückt der Daumen hinab zum C und bleibt dort.",
          9: "Nutz die kurze Pause, um die linke Hand hinab zum G zu setzen. Die rechte Hand reicht mit Finger 5 hinauf zum D.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein gezupfter Akkord, dann drei schnelle Töne auf G, wie eine kleine Trommel.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die zweite Hälfte der Melodie fällt vom hohen D zum tiefen D.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal auf dem letzten Akkord.",
        ],
        tips: [
          "Die drei schnellen Töne passen in die Zeit von zwei Melodietönen. Spiel sie leicht und gleichmäßig.",
          "Hier schweigt die Melodie, und nur der Trommelrhythmus spielt. Zähl die drei Schläge, und halt sie gleichmäßig.",
          "Die Melodie kehrt voller zurück. Lass ihren oberen Ton über den tieferen Tönen singen.",
        ],
        tricky: {
          6: "Der Daumen rückt vom D hinab zum C, während die linke Hand den Trommelrhythmus weiterspielt.",
          12: "Lass den Daumen auf dem F, und spiel A, H, G und A darüber mit Finger 3, 4, 2 und 3. Die linke Hand spielt weiter den Trommelrhythmus.",
          24: "Wie in Takt 6 rückt der Daumen vom D hinab zum C. Die linke Hand spielt darunter den Trommelrhythmus.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein in den ersten zwei Takten. Setz jeden Akkord fest auf, dann spiel die schnellen Töne leicht.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die zweite Hälfte der Melodie fällt vom hohen D zum tiefen D.",
          "Spiel die Oktaven der rechten Hand allein in den Takten 19 bis 26. Halt die Hand offen, mit Daumen und kleinem Finger bereit.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass es bis zum letzten Akkord lauter werden.",
        ],
        tips: [
          "Die linke Hand spielt die Akkorde der Streicher und den Rhythmus der kleinen Trommel. Spiel sie leise, damit die Melodie darüber singt.",
          "Hier schweigt die Melodie, und nur der Trommelrhythmus spielt. Zähl die drei Schläge, und halt sie gleichmäßig.",
          "Beginn die Oktaven leise und werde lauter, wie das ganze Orchester im Stück.",
        ],
        tricky: {
          19: "Die Oktaven beginnen. Öffne die Hand, mit dem Daumen auf dem C und dem kleinen Finger auf dem C darüber.",
          22: "Die Oktaven steigen vom G hinab zum D und wieder hinauf zum A. Halt das Handgelenk locker und die Hand offen.",
          23: "Nach dem langen G steigen die Oktaven zum H und fallen bis zum D. Beweg die ganze Hand, und halt sie offen.",
        },
      },
    },
    original: {
      practice: [
        "Spiel die Takte 1 bis 8 nur mit der linken Hand. Sie zupft in jedem Takt dieselben drei Akkorde, wie die Streicher.",
        "Spiel die Melodie der Flöte in den Takten 5 bis 20 nur mit der rechten Hand. Halte jeden langen Ton für seine volle Länge.",
        "Spiel die Takte 23 bis 30 nur mit der linken Hand. Zwischen ihren Akkorden spielt sie den Trommelrhythmus auf G, mit schnellen Triolen.",
        "Spiel die Takte 51 bis 58 langsam mit beiden Händen. Die linke Hand übernimmt in Takt 53 die Melodie, und die rechte Hand den Trommelrhythmus.",
        "Spiel das ganze Stück mit beiden Händen im vollen Tempo. Bleib leise und gleichmäßig, und werde nie schneller.",
      ],
      tips: [
        "Das Stück beginnt nur mit gezupften Akkorden. Zähl drei langsame Schläge, und halte sie ganz gleichmäßig.",
        "Die linke Hand spielt jetzt auch den Trommelrhythmus. Spiel ihre drei schnellen Töne leicht, damit die Melodie oben bleibt.",
        "Die zweite Melodie biegt sich mit B und Des. Lass diese Töne ein wenig traurig klingen.",
        "Hier fällt die Melodie unter das mittlere C, also übernimmt sie die linke Hand. Die rechte Hand spielt darüber den Trommelrhythmus.",
      ],
      tricky: {
        25: "Der rechte Daumen spielt das E, dann spielen Finger 2 und 3 das F und das G. Halte das G bis zum Ende, während die linke Hand den Trommelrhythmus spielt.",
        51: "Vier schnelle Töne enden auf einem langen C. Dann spielt der Daumen das tiefe B, knapp über dem G der linken Hand.",
        62: "Nach dem langen E springt die rechte Hand hinauf zum B. Spiel B, C und Des mit Finger 2, 3 und 4.",
      },
    },
  },
};

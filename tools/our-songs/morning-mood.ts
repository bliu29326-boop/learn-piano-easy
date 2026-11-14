/**
 * *Morning Mood*: the flute's theme from Grieg's first *Peer Gynt* Suite, in four versions of ours and
 * an Original.
 *
 * The tune is the flute's theme in bars 1 to 4, from a scanned book of orchestral themes. The print is
 * in 6/8, Allegretto pastorale, in E major, and its grace notes are left out. The tune writes every
 * sixteenth as a quarter, so each print bar is a bar of 6/2. Its range is E5 to C sharp 6, and the hook
 * is all four bars.
 *
 * Every version writes the tune in 6/4 quarters, two bars per print bar. Bars 9 to 16 then play the
 * Original's bars 5 to 8, where the tune comes back and its last bar turns to G sharp major. Bar 17
 * closes on the tonic. Common and Rare play bars 9 to 16 at the tune's height, without the graces. Epic
 * and Legendary play them an octave lower, as the print does, with its graces as eighths.
 *
 * Common moves the song to C major and Rare to G major, where the tune keeps one hand position. E major
 * has four sharps, so Epic moves it to D major, and Legendary keeps E major.
 *
 * Common plays the tune over held open fifths and single bass notes, with the left hand still. Rare
 * plays a waltz bass: a low note on the beat, then a chord or a fifth twice. Epic and Legendary take the
 * Original's left hand: a chord held through each bar with the pedal. In bars 8 and 16 the left hand
 * echoes the tune's last three notes, as the print does. The print's widest chords are voiced within an
 * octave, in three notes for Epic and four for Legendary. Each chord ends an eighth early, so the hand
 * can jump.
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
const TUNE_LINES = [
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:2 F#5/2:2 G#5/3:2",
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:2 F#5/2:1 G#5/3:1 F#5/2:1 G#5/3:1",
  "B5/5:2 G#5/2:2 B5/4:2 | C#6/5:2 G#5/2:2 C#6/5:2",
  "B5/5:2 G#5/3:2 F#5/2:2 | E5/1:4 r:2",
];
const TUNE_RIGHT = TUNE_LINES.join(" | ");

/**
 * The Original's bars 5 to 8 in E major quarters, at the tune's height and without the graces. They
 * play the tune again, and its last bar turns to G sharp major: D sharp, B sharp, A sharp, then G
 * sharp. Finger 5 steps up to D sharp, and the thumb ends on G sharp.
 */
const NEXT_QUARTERS = [...TUNE_LINES.slice(0, 3), "D#6/5:2 B#5/3:2 A#5/2:2 | G#5/1:4 r:2"].join(" | ");

/**
 * The Original's bars 5 to 8 in E major eighths, at the print's height, an octave below the tune. A
 * print 32nd is our eighth, so its graces sound as eighths. The print's chord of G sharp, E and B is too
 * wide for the hand, so it keeps E and B.
 */
const NEXT_EIGHTHS = [
  "E4+B4/1+5:4 G#4/4:4 F#4/3:4 | E4/2:4 F#4/3:4 G#4/4:4",
  "E4+B4/1+5:2 G#4/3:1 A4/4:1 G#4/3:4 F#4/2:4 | E4/1:4 F#4/2:2 G#4/3:2 F#4/2:2 G#4/3:2",
  "G#4/2:1 A4/3:1 E4+B4/1+4:2 G#4/2:4 B4/4:4 | E4+C#5/1+4:4 G#4/2:4 C#5/4:4",
  "D#4+D#5/1+5:4 B#4/4:4 A#4/3:4 | G#4/2:8 r:4",
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

/** Bars of `patterns` from `chords`, such as `"gggd"`: one letter per half bar, two per bar. */
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

/** Common's left hand under the tune's first six bars, in C major quarters: an open fifth, held. */
const COMMON_HELD = Array<string>(6).fill("C3+G3/5+1:6").join(" | ");

/**
 * Common's left hand in C major quarters, with the hand still: open fifths under the tune and its
 * return, then E under the turn to E major, and the fifth again under the last bar.
 */
const COMMON_LEFT = [
  COMMON_HELD,
  "C3+G3/5+1:3 D3+G3/4+1:3 | C3+G3/5+1:6",
  COMMON_HELD,
  "E3/3:6 | E3/3:6 | C3+G3/5+1:6",
].join(" | ");

/** Rare's half bar in G major quarters: a low note, then a chord or a fifth twice. B moves the hand. */
const WALTZ: Record<string, string> = {
  g: "G2/5:1 B2+D3/3+1:1 B2+D3/3+1:1",
  d: "A2/4:1 D3/1:1 D3/1:1",
  b: "B2/5:1 F#3/1:1 F#3/1:1",
};

/** `chord` held through a bar of E major eighths, ending an eighth early so the hand can jump. */
function held(chord: string): string {
  return `${chord}:11 r:1`;
}

/**
 * The Original's left hand under bars 1 to 4, for each version bar in E major eighths: a chord held
 * through the bar, and the tune's falling B, G sharp and F sharp echoed in the last bar. The print's
 * chord of E, B and G sharp is too wide for the hand, so `chords` voices it.
 */
function heldUnderTune(chords: { e: string; cSharp: string }): string {
  const { e, cSharp } = chords;
  return [...Array<string>(5).fill(held(e)), held(cSharp), held(e), "B3/2:4 G#3/3:4 F#3/4:3 r:1"].join(" | ");
}

/**
 * The Original's left hand under bars 5 to 8 in E major eighths, two bars per print bar: low E major,
 * C sharp minor, G sharp major, and the echo of D sharp, B sharp and A sharp.
 */
function heldUnderNext(gSharp: string): string {
  return [
    ...Array<string>(5).fill(held("E2+B2+E3/5+2+1")),
    held("C#3+G#3+C#4/5+2+1"),
    held(gSharp),
    "D#4/2:4 B#3/3:4 A#3/4:3 r:1",
  ].join(" | ");
}

/** The last bar of Epic and Legendary in the left hand: a low E major chord, held. */
const LAST_LEFT = "E2+B2+E3/5+2+1:12";

/** The pedal of Epic and Legendary in eighths: held through each bar, and lifted for each echo. */
const PEDAL = [...Array<string>(7).fill("P:12"), "r:12", ...Array<string>(7).fill("P:12"), "r:12", "P:12"].join(" | ");

/** Epic's left hand in E major eighths: chords of three notes as the Original holds them, then the last chord. */
const EPIC_LEFT = [
  heldUnderTune({ e: "E3+B3+E4/5+2+1", cSharp: "C#3+G#3+C#4/5+2+1" }),
  heldUnderNext("G#2+D#3+G#3/5+2+1"),
  LAST_LEFT,
].join(" | ");

/** Legendary's left hand in E major eighths: chords of four notes where the hand spans them, then the last chord. */
const LEGENDARY_LEFT = [
  heldUnderTune({ e: "E3+G#3+B3+E4/5+3+2+1", cSharp: "C#3+E3+G#3+C#4/5+3+2+1" }),
  heldUnderNext("G#2+B#2+D#3+G#3/5+3+2+1"),
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
      right: moved(`${TUNE_RIGHT} | ${NEXT_QUARTERS} | G#5/1:6`, -16),
      left: COMMON_LEFT,
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 17 with the right hand alone. The tune comes back, and then it turns to E.", hands: "right", speed: 0.6, loop: [9, 17], wait: true },
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
        7: "Finger 5 steps back from A to G. The left hand moves to D and G at the half bar.",
        15: "The hand moves up so finger 5 plays B. Fingers 3 and 2 then play the black keys G sharp and F sharp.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 6,
      denominator: 4,
      steps: 1,
      right: moved(`${TUNE_RIGHT} | ${NEXT_QUARTERS} | E5+G#5/1+3:6`, -9),
      left: `${bars(WALTZ, "gggggggggggggdgg")} | ${bars(WALTZ, "ggggggggggggbbbb")} | G2+B2+D3/5+3+1:6`,
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
        { fromBar: 17, toBar: 17, kind: "fingering", text: "End with G and B together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        7: "Finger 5 steps back from E to D. The left hand moves to A and D at the half bar.",
        15: "The hand moves up so finger 5 plays F sharp. Then fingers 3 and 2 play D sharp and C sharp. The left hand moves to B.",
        17: "Use the rest to move the thumb down to G. Fingers 1 and 3 press G and B together.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 150,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: moved([inEighths(TUNE_RIGHT), NEXT_EIGHTHS, "E4+G#4+B4/1+3+5:12"].join(" | "), -2),
      left: moved(EPIC_LEFT, -2),
      pedal: PEDAL,
      skills: ["pedal", "left-hand-melody"],
      practice: [
        { text: "Play the left hand alone. Hold each chord for the whole bar, and lift it just before the next.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The tune comes back an octave lower, with quick grace notes.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Press the pedal with each chord. Lift it in bars 8 and 16, where the left hand echoes the tune." },
        { fromBar: 8, toBar: 8, kind: "sound", text: "The left hand answers the tune with A, F sharp and E. Let it sing like a second voice." },
        { fromBar: 11, toBar: 13, kind: "rhythm", text: "The grace notes are quick eighths. Play them lightly, and land on the beat after them." },
      ],
      tricky: {
        9: "The right hand drops an octave. Spread fingers 1 and 5 over D and A, while the left hand holds a low D chord.",
        16: "The right hand holds F sharp. The left hand plays C sharp, A sharp and G sharp, each for two beats.",
        17: "Spread the right hand over D, F sharp and A with fingers 1, 3 and 5. The left hand holds a low D chord.",
      },
    },
    legendary: {
      key: E_MAJOR,
      bpm: 168,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [inEighths(TUNE_RIGHT), NEXT_EIGHTHS, "E4+G#4+B4+E5/1+2+3+5:12"].join(" | "),
      left: LEGENDARY_LEFT,
      pedal: PEDAL,
      skills: ["pedal", "left-hand-melody", "position-change"],
      practice: [
        { text: "Play the left hand alone. Hold each chord of four notes for the whole bar, and lift it just before the next.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The tune comes back an octave lower, with quick grace notes.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play bars 13 to 17 with both hands, slowly. Watch the left hand's jump up to the echo in bar 16.", hands: "both", speed: 0.5, loop: [13, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 17, kind: "trick", text: "Lift each chord an eighth early. The short rest gives the hand time to jump to the next one." },
        { fromBar: 8, toBar: 8, kind: "sound", text: "The left hand answers the tune with B, G sharp and F sharp. Let it sing like a second voice." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "The tune turns to G sharp major here. Play the D sharp octave warmly, then let the left hand's echo answer." },
      ],
      tricky: {
        9: "The right hand drops an octave. Spread fingers 1 and 5 over E and B, while the left hand holds a low E chord.",
        16: "The right hand holds G sharp. The left hand plays D sharp, B sharp and A sharp, each for two beats.",
        17: "Spread the right hand over E, G sharp, B and E with fingers 1, 2, 3 and 5. The left hand holds a low E chord.",
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
          "Spiel die Takte 9 bis 17 nur mit der rechten Hand. Die Melodie kehrt zurück und wendet sich dann zum E.",
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
          7: "Finger 5 geht vom A zurück zum G. Die linke Hand wechselt in der Mitte des Takts zu D und G.",
          15: "Die Hand rückt hinauf, damit Finger 5 das H spielt. Finger 3 und 2 spielen dann die schwarzen Tasten Gis und Fis.",
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
          7: "Finger 5 geht vom E zurück zum D. Die linke Hand wechselt in der Mitte des Takts zu A und D.",
          15: "Die Hand rückt hinauf, damit Finger 5 das Fis spielt. Dann spielen Finger 3 und 2 Dis und Cis. Die linke Hand wechselt zum H.",
          17: "Nutz die Pause, um den Daumen hinunter zum G zu setzen. Finger 1 und 3 drücken G und H zusammen.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Halt jeden Akkord den ganzen Takt lang, und lös ihn kurz vor dem nächsten.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die Melodie kehrt eine Oktave tiefer zurück, mit schnellen Vorschlägen.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Tritt das Pedal mit jedem Akkord. Lös es in den Takten 8 und 16, wo die linke Hand die Melodie als Echo spielt.",
          "Die linke Hand antwortet der Melodie mit A, Fis und E. Lass sie singen wie eine zweite Stimme.",
          "Die Vorschläge sind schnelle Achtel. Spiel sie leicht, und lande auf dem Schlag danach.",
        ],
        tricky: {
          9: "Die rechte Hand geht eine Oktave hinunter. Spann Finger 1 und 5 über D und A, während die linke Hand einen tiefen D-Dur-Akkord hält.",
          16: "Die rechte Hand hält das Fis. Die linke Hand spielt Cis, Ais und Gis, jeden Ton zwei Schläge lang.",
          17: "Spann die rechte Hand mit Finger 1, 3 und 5 über D, Fis und A. Die linke Hand hält einen tiefen D-Dur-Akkord.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Halt jeden Vierklang den ganzen Takt lang, und lös ihn kurz vor dem nächsten.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die Melodie kehrt eine Oktave tiefer zurück, mit schnellen Vorschlägen.",
          "Spiel die Takte 13 bis 17 langsam mit beiden Händen. Achte in Takt 16 auf den Sprung der linken Hand hinauf zum Echo.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Lös jeden Akkord ein Achtel früher. Die kurze Pause gibt der Hand Zeit, zum nächsten zu springen.",
          "Die linke Hand antwortet der Melodie mit H, Gis und Fis. Lass sie singen wie eine zweite Stimme.",
          "Hier wendet sich die Melodie nach Gis-Dur. Spiel die Dis-Oktave warm, dann lass das Echo der linken Hand antworten.",
        ],
        tricky: {
          9: "Die rechte Hand geht eine Oktave hinunter. Spann Finger 1 und 5 über E und H, während die linke Hand einen tiefen E-Dur-Akkord hält.",
          16: "Die rechte Hand hält das Gis. Die linke Hand spielt Dis, His und Ais, jeden Ton zwei Schläge lang.",
          17: "Spann die rechte Hand mit Finger 1, 2, 3 und 5 über E, Gis, H und E. Die linke Hand hält einen tiefen E-Dur-Akkord.",
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

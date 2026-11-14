/**
 * *Can-can*: the famous strain of the Galop infernal from Offenbach's *Orphée aux Enfers*, in four
 * versions of ours.
 *
 * The tune is the strain "Ce bal est original" in Heugel's piano score of 1862, on its page 81. The
 * Galop is in 2/4 and D major, and this strain is in G major, with the right hand in octaves. The tune
 * is the octaves' top notes. The print's notes are eighths, and the tune writes each as a quarter, so
 * each print bar is a bar of 4/4. The tune is the print's first six bars and the first eighth of its
 * seventh. The seventh bar then runs up an arpeggio, which the tune cuts to rests. The hook is the
 * whole tune.
 *
 * The print's chords are G major and D7 in turns, with G then D7 in bar 4. Our versions follow them
 * under the tune. Every version keeps G major. Common, Rare and Epic play the tune an octave lower, from
 * G4 to E5.
 *
 * After the tune, every version plays the rest of the verse as our Original has it, at its bars 47 to
 * 54 and 71. Bar 8 is the scale down from D to A, and bar 9 lands on G. Bars 10 to 14 play the tune's
 * bars 2 to 6 again, over the tune's chords. Bar 15 turns through G, D, A and B over G and D. Bar 16
 * closes on G, as the verse's second ending does. The print's D7 sounds as D major wherever its C would
 * clash with the tune's B. Rare keeps G under all of bar 15 for that reason.
 *
 * Common plays the verse over held fifths and single bass notes. Rare plays a bass note and a two-note
 * chord in turns, and adds a few two-note chords. Epic and Legendary take the print's own left hand: a
 * low octave on the beat, then a chord. Each sounds half a bar, since a print eighth is our quarter, and
 * ends a little early so the hand can jump. Epic adds the pedal and a third under the long Ds. In bar 7,
 * Epic and Legendary run on down G, F sharp and E, as the print does. In Epic's bar 8, finger 3 crosses
 * over the thumb. Legendary plays the whole verse in octaves, as the print does, and closes on the
 * print's chord of four notes.
 *
 * Legendary's octaves are played short, each with an eighth's rest after it. The hand then jumps to its
 * next octave instead of stretching. In bar 7 of Epic and Legendary, the print's F sharp clashes with the
 * G of the bass, and each version marks it.
 *
 * Our Original is the whole Galop, No. 28 of the operetta, as the piano part of Heugel's vocal score of
 * 1874 prints it on its pages 287 to 291. It is in D major and 2/4, so the tune's hook sounds a fifth
 * higher than in our versions, and `keyShift` is 7. It plays every repeat as printed, each repeated
 * section with its first ending, then again with its second: 146 bars. The famous strain is its bars 95
 * to 126, and the chorus's verse "Ce bal est original" is its bars 40 to 71, in G major.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The print's key, which the Original keeps. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The tune in 4/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "G5:4 | A5:1 C6:1 B5:1 A5:1 | D6:2 D6:2 | D6:1 E6:1 B5:1 C6:1 | A5:2 A5:2 | A5:1 C6:1 B5:1 A5:1 | G5:1 r:3";

/** The tune's first six bars an octave lower, in quarters, fingered so the hand never leaves its place. */
const TUNE_LOW_HEAD =
  "G4/1:4 | A4/2:1 C5/4:1 B4/3:1 A4/2:1 | D5/5:2 D5/5:2 | D5/4:1 E5/5:1 B4/2:1 C5/3:1 | " +
  "A4/2:2 A4/2:2 | A4/2:1 C5/4:1 B4/3:1 A4/2:1";

/** The whole tune an octave lower, in quarters. */
const TUNE_LOW = `${TUNE_LOW_HEAD} | G4/1:1 r:3`;

/** The tune's bars 2 to 6 an octave lower, which the verse plays again from its bar 10. */
const TUNE_LOW_AGAIN = TUNE_LOW_HEAD.split(" | ").slice(1).join(" | ");

/** `text` with every length times `factor`, so a line in quarters reads in eighths or sixteenths. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"gd"`: one letter per half bar, two per bar. */
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

/**
 * The chords under the tune, one letter per half bar: g is G major, d is D7. They are the print's, but
 * bar 4 takes D7 in its second half, where the print keeps G. The tune's C would clash with G's B there.
 */
const TUNE_CHORDS = "ggddgggdddddgg";

/**
 * The chords of the verse's bars 8 to 15, which follow the tune in the print, one letter per half bar.
 * Bars 10 to 14 play the tune's bars 2 to 6 again, under the same chords.
 */
const NEXT_CHORDS = `ddgg${TUNE_CHORDS.slice(2, 12)}gd`;

/** The verse's bar 8, the scale down from D that answers the tune, in quarters. */
const SCALE_DOWN = "D5/5:1 C5/4:1 B4/3:1 A4/2:1";

/** The verse's bar 15, its last turn before the close: G, D, A and B, in quarters. */
const LAST_TURN = "G4/1:1 D5/5:1 A4/2:1 B4/3:1";

/** Common's bars 8 to 16 in quarters, the verse's next phrase in the tune's hand position. */
const COMMON_NEXT = [SCALE_DOWN, "G4/1:4", TUNE_LOW_AGAIN, LAST_TURN, "G4/1:4"].join(" | ");

/** Common's left hand for each chord, held for half a bar: an open fifth on G, one note on D. */
const HELD: Record<string, string> = { g: "G2+D3/5+1:2", d: "D3/1:2" };

/** Rare's bars 8 to 16 in quarters, the verse's next phrase with a few two-note chords. */
const RARE_NEXT = [
  SCALE_DOWN,
  "G4+B4/1+3:4",
  "A4/2:1 C5/4:1 B4/3:1 A4/2:1 | B4+D5/3+5:2 B4+D5/3+5:2 | D5/4:1 E5/5:1 B4/2:1 C5/3:1",
  "A4/2:2 A4/2:2 | A4/2:1 C5/4:1 B4/3:1 A4/2:1",
  LAST_TURN,
  "G4+B4/1+3:4",
].join(" | ");

/** Rare's half bar in quarters: a bass note on the beat, then a two-note chord. */
const PULSE: Record<string, string> = {
  g: "G2/5:1 B2+D3/3+1:1",
  d: "D3/1:1 A2+C3/4+2:1",
};

/** Rare's chords. G holds through bar 15, where the D seventh's C would clash with the tune's last B. */
const RARE_CHORDS = `${TUNE_CHORDS}${NEXT_CHORDS.slice(0, -1)}g`;

/** Epic's tune in eighths, its last bar going on down G, F sharp and E as the print does. */
const EPIC_TUNE = `${scaled(TUNE_LOW_HEAD, 2)} | G4/1:2 G5/5:2 F#5/4:2 E5/3:2`;

/**
 * Epic's bars 8 to 16 in eighths: the scale down with finger 3 over the thumb, the tune again with a
 * third under its long Ds, the last turn, and the close on G.
 */
const EPIC_NEXT = [
  "D5/2:2 C5/1:2 B4/3:2 A4/2:2 | G4/1:8",
  "A4/2:2 C5/4:2 B4/3:2 A4/2:2 | B4+D5/3+5:4 B4+D5/3+5:4 | D5/4:2 E5/5:2 B4/2:2 C5/3:2",
  "A4/2:4 A4/2:4 | A4/2:2 C5/4:2 B4/3:2 A4/2:2",
  "G4/1:2 D5/5:2 A4/2:2 B4/3:2 | G4/1:4 B3+D4+G4/1+2+5:4",
].join(" | ");

/** The print's bass, a low octave on the beat, for each chord: half a bar in eighths, with an eighth's rest to jump. */
const OCTAVE: Record<string, string> = { g: "G2+G3/5+1:3 r:1", d: "D2+D3/5+1:3 r:1" };

/** The print's chord after the octave, half a bar in eighths, with D major for the print's D seventh. */
const CHORD: Record<string, string> = { g: "G3+B3+D4/5+3+1:3 r:1", d: "D3+F#3+A3/5+3+1:3 r:1" };

/** Bars of the print's figure from `chords`, two letters per bar: the octave of the first, the chord of the second. */
function oomPah(octaves: Record<string, string>, chords: Record<string, string>, letters: string): string {
  const lines: string[] = [];
  for (let at = 0; at < letters.length; at += 2) {
    const low = octaves[letters[at] ?? ""];
    const high = chords[letters[at + 1] ?? ""];
    if (low === undefined || high === undefined) throw new Error(`No figure for chords ${letters.slice(at, at + 2)}`);
    lines.push(`${low} ${high}`);
  }
  return lines.join(" | ");
}

/** A pedal bar for each bar of `letters`, two letters per bar, changed halfway where the chord changes. */
function pedalBars(letters: string): string[] {
  const lines: string[] = [];
  for (let at = 0; at < letters.length; at += 2) lines.push(letters[at] === letters[at + 1] ? "P:8" : "P:4 P:4");
  return lines;
}

/** Legendary's tune's first six bars in sixteenths, in short octaves, as the print plays it. */
const LEGENDARY_HEAD = [
  "G4+G5/1+5:14 r:2",
  "A4+A5/1+5:2 r:2 C5+C6/1+5:2 r:2 B4+B5/1+5:2 r:2 A4+A5/1+5:2 r:2",
  "D5+D6/1+5:6 r:2 D5+D6/1+5:6 r:2",
  "D5+D6/1+5:2 r:2 E5+E6/1+5:2 r:2 B4+B5/1+5:2 r:2 C5+C6/1+5:2 r:2",
  "A4+A5/1+5:6 r:2 A4+A5/1+5:6 r:2",
  "A4+A5/1+5:2 r:2 C5+C6/1+5:2 r:2 B4+B5/1+5:2 r:2 A4+A5/1+5:2 r:2",
];

/**
 * Legendary's whole verse in sixteenths, in short octaves as the print plays it: the tune, its last bar
 * going on down G, F sharp and E, the scale down, the tune again, the last turn, and the close. The close
 * strikes G in octaves, then the print's chord of G, B, D and G.
 */
const LEGENDARY_VERSE = [
  ...LEGENDARY_HEAD,
  "G4+G5/1+5:2 r:2 G5+G6/1+5:2 r:2 F#5+F#6/1+5:2 r:2 E5+E6/1+5:2 r:2",
  "D5+D6/1+5:2 r:2 C5+C6/1+5:2 r:2 B4+B5/1+5:2 r:2 A4+A5/1+5:2 r:2",
  ...LEGENDARY_HEAD,
  "G4+G5/1+5:2 r:2 D5+D6/1+5:2 r:2 A4+A5/1+5:2 r:2 B4+B5/1+5:2 r:2",
  "G4+G5/1+5:6 r:2 G4+B4+D5+G5/1+2+3+5:8",
].join(" | ");

/** Legendary's bass in sixteenths: the print's low octave, then its chord, each short with an eighth's rest. */
const OCTAVE_SHORT: Record<string, string> = { g: "G2+G3/5+1:6 r:2", d: "D2+D3/5+1:6 r:2" };
const CHORD_SHORT: Record<string, string> = { g: "G3+B3+D4/5+3+1:6 r:2", d: "D3+F#3+A3/5+3+1:6 r:2" };

/** One bar of the Original in 32nds, 16 to the bar: the right hand, then the left hand. */
type PrintBar = readonly [right: string, left: string];

/** `token` played `count` times in a row. */
function times(token: string, count: number): string {
  return Array<string>(count).fill(token).join(" ");
}

/** The left hand's A seventh chord of the opening, an eighth long. */
const A7 = "A2+E3+G3/5+2+1:4";

/** The left hand's D major chord, an eighth long. */
const D_CHORD = "D3+F#3+A3/5+3+1:4";

/** The left hand's D major third, an eighth long. */
const D_THIRD = "D3+F#3/3+1:4";

/** The left hand's A major chord under the famous strain, an eighth long, with finger 3 on C sharp. */
const A_CHORD = "A2+C#3+E3+A3/5+3+2+1:4";

/** The same A major chord with finger 4 on C sharp, as the transcription of p290.6 onward fingers it. */
const A_CHORD_WIDE = "A2+C#3+E3+A3/5+4+2+1:4";

/** The second strain's first bar, at p287.11 and p287.15: F sharp, then D, in octaves in both hands. */
const F_SHARP_D: PrintBar = ["F#5+F#6/1+5:8 D5+D6/1+5:8", "F#3+F#4/5+1:8 D3+D4/5+1:8"];

/** The second strain's second bar, at p287.12 and p287.16: B, then A, in octaves in both hands. */
const B_A: PrintBar = ["B4+B5/1+5:8 A4+A5/1+5:8", "B2+B3/5+1:8 A2+A3/5+1:8"];

/** The bar of D major and A seventh that p287.19 and p288.1 to p288.3 repeat. */
const D_A: PrintBar = ["F#5+D6/1+5:4 A5/3:4 G5+C#6/1+4:4 A5/2:4", "D3+F#3/3+1:8 A2+E3+G3/5+2+1:8"];

/**
 * Page 287: the Galop's opening strain on A seventh and D, repeated with two endings, then its second
 * strain loudly in octaves, repeated with two endings.
 */
const PAGE_287: Record<string, PrintBar> = {
  "287.1": ["A4/1:4 E5/4:4 E5/4:4 F#5/5:4", times(A7, 4)],
  "287.2": ["F#5/5:1 E5/4:3 D5/3:4 D5/3:4 F#5/5:4", `${times(D_THIRD, 3)} ${D_CHORD}`],
  "287.3": ["G5/1:4 B5/2:4 D6/5:4 B5/2:4", times("G3+B3/3+1:4", 4)],
  "287.4": ["B5/4:4 A5/3:4 A5/3:8", times(D_CHORD, 4)],
  "287.5": ["B5/5:4 C#5/1:4 C#5/1:4 B5/5:4", times(A7, 4)],
  "287.6": ["A5/5:4 D5/1:4 D5/1:4 F#5/3:4", times(D_THIRD, 4)],
  "287.7": ["G#5/4:1 F#5/3:3 E5/2:4 F#5/3:4 E5/2:4", times("E3+G#3+B3/5+3+1:4", 4)],
  "287.8": ["F#5/3:4 E5/2:4 F#5/3:4 E5/2:4", times("A3+C#4/2+1:4", 4)],
  "287.9": ["G5/4:1 F#5/3:3 E5/2:4 F#5/3:4 E5/2:4", times(A7, 4)],
  "287.10": ["E5/3:4 D5/2:4 D5/2:8", `${times(D_THIRD, 2)} D3+F#3/3+1:8`],
  "287.11": F_SHARP_D,
  "287.12": B_A,
  "287.13": ["A4+A5/1+5:4 A4+E5/1+3:4 A4+F#5/1+4:4 A4+G5/1+5:4", times("A2+C#3+G3/5+4+1:4", 4)],
  "287.14": ["A4+F#5/1+5:4 A4+E5/1+4:4 A4+D5/1+3:8", `${times(D_THIRD, 2)} D3+F#3/3+1:8`],
  "287.15": F_SHARP_D,
  "287.16": B_A,
  "287.17": ["E5+G#5/1+2:4 E5+A5/1+3:4 E5+B5/1+4:4 E5+C#6/1+5:4", times(A7, 4)],
  "287.18": ["F#5+E6/1+5:4 F#5+D6/1+4:4 F#5+D6/1+4:8", `${times(D_THIRD, 2)} D3+F#3/3+1:8`],
  "287.19": D_A,
};

/** The right hand's dotted D octaves of p288.4 to p288.7, half a bar. */
const DOTTED = "D4+D5/1+5:6 D4+D5/1+5:2";

/** The left hand's G major and D seventh of the verse: a low octave, then a chord, each a quarter. */
const VERSE_G = "G2+G3/5+1:8 G3+B3+D4/5+3+1:8";
const VERSE_D7 = "D2+D3/5+1:8 D3+F#3+A3+C4/5+3+2+1:8";

/** The verse's right-hand bars that come back, in octaves: A C B A, D D, D E B C, A A. */
const ACBA = "A4+A5/1+5:4 C5+C6/1+5:4 B4+B5/1+5:4 A4+A5/1+5:4";
const DD = "D5+D6/1+5:8 D5+D6/1+5:8";
const DEBC = "D5+D6/1+5:4 E5+E6/1+5:4 B4+B5/1+5:4 C5+C6/1+5:4";
const AA = "A4+A5/1+5:8 A4+A5/1+5:8";

/**
 * Page 288: four bars on D lead to the verse "Ce bal est original" in G major, the tune in octaves, which
 * the chorus sings with the piano's lower notes. It repeats with two endings. Then the opening strain
 * returns. Bars p288.4 to p288.7 hold D in dotted octaves.
 */
const PAGE_288: Record<string, PrintBar> = {
  "288.1": D_A,
  "288.2": D_A,
  "288.3": D_A,
  "288.4": [`F#5+D6/2+5:6 D4+D5/1+5:2 ${DOTTED}`, "D3+F#3/3+1:6 D3/1:2 D3/1:6 D3/1:2"],
  "288.5": [`${DOTTED} ${DOTTED}`, times("D3/1:6 D3/1:2", 2)],
  "288.6": [`${DOTTED} ${DOTTED}`, times("D3/1:6 D3/1:2", 2)],
  "288.7": [`${DOTTED} ${DOTTED}`, times("D3/1:6 D3/1:2", 2)],
  "288.8": ["G4+G5/1+5:16", VERSE_G],
  "288.9": [ACBA, VERSE_D7],
  "288.10": [DD, VERSE_G],
  "288.11": [DEBC, VERSE_G],
  "288.12": [AA, VERSE_D7],
  "288.13": [ACBA, VERSE_D7],
  "288.14": ["G4+G5/1+5:4 G5+G6/1+5:4 F#5+F#6/1+5:4 E5+E6/1+5:4", VERSE_G],
  "288.15": ["D5+D6/1+5:4 C5+C6/1+5:4 B4+B5/1+5:4 A4+A5/1+5:4", VERSE_D7],
  "288.16": ["G4+G5/1+5:16", VERSE_G],
  "288.17": [ACBA, VERSE_D7],
  "288.18": [DD, VERSE_G],
  "288.19": [DEBC, VERSE_G],
  "288.20": [AA, VERSE_D7],
  "288.21": [ACBA, VERSE_D7],
  "288.22": ["G4+G5/1+5:4 D5+D6/1+5:4 A4+A5/1+5:4 B4+B5/1+5:4", "G3+B3/3+1:8 D3+F#3+C4/5+3+1:8"],
  "288.23": ["G4+G5/1+5:8 D4+D5/1+5:8", "G3+B3/3+1:8 r:8"],
  "288.24": ["G4+G5/1+5:8 G4+B4+D5+G5/1+2+3+5:8", VERSE_G],
  // p288.25 and p288.26 are engraved as p287.1 and p287.2, with the grace F sharp before bar 26's E.
  "288.25": ["A4/1:4 E5/4:4 E5/4:4 F#5/5:4", times(A7, 4)],
  "288.26": ["F#5/5:1 E5/4:3 D5/3:4 D5/3:4 F#5/5:4", `${times(D_THIRD, 3)} ${D_CHORD}`],
  "288.27": ["G5/1:4 B5/3:4 D6/5:4 B5/3:4", times("G3+B3/3+1:4", 4)],
  "288.28": ["B5/3:4 A5/2:4 A5/2:8", times(D_CHORD, 4)],
  "288.29": ["B5/5:4 C#5/1:4 C#5/1:4 B5/5:4", times(A7, 4)],
};

/** The right hand's B and A of p289.8 to p289.11, then of p289.12 to p289.14 in another fingering. */
const B_A_A = "B5/4:4 A5/3:4 A5/3:8";
const B_A_A_HIGH = "B5/5:4 A5/4:4 A5/4:8";

/** The left hand's A seventh chord of p289.15 to p289.18, an eighth long. */
const A7_FULL = "A3+C#4+E4+G4/5+3+2+1:4";

/**
 * Page 289: the opening strain ends, and the left hand climbs in chords under a repeated B and A, louder
 * and louder. Then the famous strain begins in octaves, with the whole chorus.
 */
const PAGE_289: Record<string, PrintBar> = {
  "289.1": ["A5/5:4 D5/1:4 D5/1:4 F#5/3:4", times(D_THIRD, 4)],
  "289.2": ["G#5/4:1 F#5/3:3 E5/2:4 F#5/3:4 E5/2:4", times("E3+G#3+D4/5+3+1:4", 4)],
  "289.3": ["G5/4:1 F#5/3:3 E5/2:4 F#5/3:4 E5/2:4", times("A3+C#4/2+1:4", 4)],
  "289.4": ["A4/1:4 E5/4:4 E5/4:4 F#5/5:4", times(A7, 4)],
  "289.5": ["F#5/4:1 E5/3:3 D5/2:4 D5/2:4 F#5/4:4", `${times(D_THIRD, 3)} ${D_CHORD}`],
  "289.6": ["G5/1:4 B5/2:4 D6/4:4 B5/2:4", times("G3+B3/2+1:4", 4)],
  "289.7": ["B5/4:4 A5/3:4 A5/3:8", times(D_CHORD, 4)],
  "289.8": [B_A_A, times("A3+C#4+E4/5+3+1:4", 4)],
  "289.9": [B_A_A, times("A3+D4+F4/5+2+1:4", 4)],
  "289.10": [B_A_A, times("A3+D#4+F#4/5+2+1:4", 4)],
  "289.11": [B_A_A, times("A3+E4+G4/5+2+1:4", 4)],
  "289.12": [B_A_A_HIGH, times("A3+C#4+E4/5+3+1:4", 4)],
  "289.13": [B_A_A_HIGH, times("A3+D4+F4/5+2+1:4", 4)],
  "289.14": [B_A_A_HIGH, times("A3+D#4+F#4/5+2+1:4", 4)],
  "289.15": ["B5/5:4 A5/4:4 B5/5:4 A5/4:4", times(A7_FULL, 4)],
  "289.16": ["B5/5:4 A5/4:4 B5/5:4 A5/4:4", times(A7_FULL, 4)],
  "289.17": ["B5/5:4 A5/4:4 B5/5:4 A5/4:4", times(A7_FULL, 4)],
  // The chorus's pickup, a quarter's A4 into the famous strain, is added under the piano's B5 and A5.
  // The notation strikes it with each of them, so it sounds as two eighths instead of one quarter.
  "289.18": ["B5/5:4 A5/4:4 A4+B5/1+5:4 A4+A5/1+4:4", times(A7_FULL, 4)],
  "289.19": ["D5+D6/1+5:16", `D4+F#4/2+1:4 ${times(D_CHORD, 3)}`],
  "289.20": ["E5+E6/1+5:4 G5+G6/1+5:4 F#5+F#6/1+5:4 E5+E6/1+5:4", times(A_CHORD, 4)],
  "289.21": ["A5+A6/1+5:8 A5+A6/1+5:8", times(D_CHORD, 4)],
  "289.22": ["A5+A6/1+5:4 B5+B6/1+5:4 F#5+F#6/1+5:4 G5+G6/1+5:4", times(D_CHORD, 4)],
};

/** The famous strain's E G F# E in octaves, as p289.20 and page 290 play it. */
const EGFE = "E5+E6/1+5:4 G5+G6/1+5:4 F#5+F#6/1+5:4 E5+E6/1+5:4";

/**
 * Page 290: the famous strain goes on an octave higher than printed, under the print's 8va line, and
 * repeats with two endings. The second ending turns to B minor and G major.
 */
const PAGE_290: Record<string, PrintBar> = {
  "290.1": ["E5+E6/1+5:8 E5+E6/1+5:8", times(A_CHORD, 4)],
  "290.2": [EGFE, times(A_CHORD, 4)],
  "290.3": ["D5+D6/1+5:4 D6+D7/1+5:4 C#6+C#7/1+5:4 B5+B6/1+5:4", times(D_CHORD, 4)],
  "290.4": ["A5+A6/1+5:4 G5+G6/1+5:4 F#5+F#6/1+5:4 E5+E6/1+5:4", times(A_CHORD, 4)],
  "290.5": ["D5+D6/1+5:16", times(D_CHORD, 4)],
  "290.6": [EGFE, times(A_CHORD_WIDE, 4)],
  "290.7": ["A5+A6/1+5:8 A5+A6/1+5:8", times(D_CHORD, 4)],
  "290.8": ["A5+A6/1+5:4 B5+B6/1+5:4 F#5+F#6/1+5:4 G5+G6/1+5:4", times(D_CHORD, 4)],
  "290.9": ["E5+E6/1+5:8 E5+E6/1+5:8", times(A_CHORD_WIDE, 4)],
  "290.10": [EGFE, times(A_CHORD_WIDE, 4)],
  "290.11": ["D5+D6/1+5:4 A5+A6/1+5:4 E5+E6/1+5:4 F#5+F#6/1+5:4", `${times(D_CHORD, 2)} ${times(A_CHORD_WIDE, 2)}`],
  "290.12": ["D5+D6/1+5:8 A4+A5/1+5:8", times(D_CHORD, 4)],
  "290.13": ["D5+D6/1+5:8 A4+D5/1+4:8", "D3+D4/5+1:8 D3+D4/5+1:8"],
  "290.14": ["A4+E5/1+4:8 A4+D5+F#5/1+3+5:8", "C#3+C#4/5+1:8 C3+C4/5+1:8"],
  // The chorus sings G5 here for a dotted quarter and an eighth, and the piano's right hand does not.
  // The G5 is added to each of the hand's four chords, so it sounds with each instead of held.
  "290.15": [
    "D5+F#5+G5+A5/1+2+4+5:4 G4+D5+G5/1+3+5:4 G4+C#5+G5/1+3+5:4 G4+B4+G5/1+2+5:4",
    "B2+B3/5+1:4 B2+B3/5+1:4 G2+G3/5+1:4 G2+G3/5+1:4",
  ],
};

/** The left hand's tremolo of p291.10 to p291.13 on D major, in sixteenths. */
const TREMOLO = times("D3+F#3/5+3:2 A3/1:2", 4);

/** The left hand's D major chord of the closing bars, a quarter, then a quarter's rest. */
const LAST_LEFT = "D3+F#3+A3+D4/5+3+2+1:8 r:8";

/** Page 291: the strain's last turn, the tune on D major over a tremolo, and the closing chords. */
const PAGE_291: Record<string, PrintBar> = {
  "291.1": ["G4+A4/1+2:4 A4+G5/1+5:4 A4+F#5/1+4:4 A4+E5/1+3:4", `A2+A3/5+1:4 ${times("A2+C#3+A3/5+3+1:4", 3)}`],
  "291.2": ["F#4+D5/1+5:8 F#4+D5/1+5:8", "D3+F#3+A3/5+3+1:8 D3+D4/5+1:8"],
  "291.3": ["A4+E5/1+4:8 A4+D5+F#5/1+3+5:8", "C#3+C#4/5+1:8 C3+C4/5+1:8"],
  "291.4": ["D5+F#5+A5/1+3+5:4 G4+D5+G5/1+3+5:4 G4+C#5/1+4:4 G4+B4/1+3:4", "B2+B3/5+1:4 B2+B3/5+1:4 G2+G3/5+1:4 G2+G3/5+1:4"],
  "291.5": ["G4+A4/1+2:4 A4+G5/1+5:4 A4+F#5/1+4:4 A4+E5/1+3:4", "A2+A3/5+1:4 A2+E3+A3/5+2+1:4 A2+D3+A3/5+3+1:4 A2+E3+A3/5+2+1:4"],
  "291.6": ["A4+D5/1+4:4 A4+A5/1+5:4 A4+E5/1+3:4 A4+F#5/1+4:4", `${times(D_CHORD, 2)} ${times(A_CHORD_WIDE, 2)}`],
  "291.7": ["A4+D5/1+4:4 A4+A5/1+5:4 A4+E5/1+3:4 A4+F#5/1+4:4", `${times(D_CHORD, 2)} ${times(A_CHORD_WIDE, 2)}`],
  "291.8": ["A4+D5/1+4:4 A4+A5/1+5:4 A4+E5/1+3:4 A4+F#5/1+4:4", `${times(D_CHORD, 2)} ${times(A_CHORD_WIDE, 2)}`],
  "291.9": ["A4+D5/1+4:4 A4+A5/1+5:4 A4+E5/1+3:4 A4+F#5/1+4:4", `${times(D_CHORD, 2)} ${times(A_CHORD_WIDE, 2)}`],
  "291.10": ["A4+D5/1+5:16", TREMOLO],
  "291.11": ["F#5+F#6/1+5:8 D5+D6/1+5:8", TREMOLO],
  "291.12": ["A5+A6/1+5:8 D5+D6/1+5:8", TREMOLO],
  "291.13": ["F#5/2:8 A5/4:8", TREMOLO],
  "291.14": ["D6/5:8 r:8", "D3+F#3+A3/5+3+1:8 r:8"],
  "291.15": ["D5+F#5+A5+D6/1+2+3+5:8 r:8", LAST_LEFT],
  "291.16": ["D5+F#5+A5/1+3+5:8 r:8", LAST_LEFT],
  "291.17": ["F#5+A5+D6+F#6/1+2+3+5:8 r:8", LAST_LEFT],
  "291.18": [times("F#5+A5+D6/1+3+5:2 D5/1:2", 4), times("D3+F#3+A3/5+3+2:2 D4/1:2", 4)],
  "291.19": ["F#5+A5+D6/1+3+5:8 r:8", "D3+F#3+A3/5+3+1:8 r:8"],
};

/** The print's bars by page and bar on the page, such as `"289.19"`. */
const PRINT_BARS: Record<string, PrintBar> = { ...PAGE_287, ...PAGE_288, ...PAGE_289, ...PAGE_290, ...PAGE_291 };

/**
 * The print's pedal, which it never marks: ours holds through the tremolos on D major alone, at p291.10
 * to p291.13 and p291.18, where the harmony holds still. Every other bar keeps it up.
 */
const PEDAL: Record<string, string> = {
  "291.10": "P:16~",
  "291.11": "P:16~",
  "291.12": "P:16~",
  "291.13": "P:16",
  "291.18": "P:16",
  "291.19": "P:8 r:8",
};

/** The bars `from` to `to` of the print's page `page`. */
function run(page: number, from: number, to: number): string[] {
  return Array.from({ length: to - from + 1 }, (_, at) => `${page}.${from + at}`);
}

/** The body of the famous strain's repeat, p289.19 to p290.10. */
const STRAIN = [...run(289, 19, 22), ...run(290, 1, 10)];

/**
 * The 146 bars the Original plays, with every repeat as printed:
 * - bars 1 to 16: the opening strain, p287.1 to p287.8, then p287.1 to p287.6 and its second ending.
 * - bars 17 to 32: the loud second strain, p287.11 to p287.18, then p287.11 to p287.17 and p287.19.
 * - bars 33 to 39: p288.1 to p288.7, D and A, then the dotted octaves on D from bar 36.
 * - bars 40 to 71: the verse, p288.8 to p288.23, then p288.8 to p288.22 and p288.24.
 * - bars 72 to 94: the opening strain again and the climb, p288.25 to p289.18.
 * - bars 95 to 126: the famous strain, p289.19 to p290.12, then p289.19 to p290.10 and p290.13 to p290.14.
 * - bars 127 to 146: the close, p290.15 and p291.1 to p291.19.
 */
const PLAYED = [
  ...run(287, 1, 8), ...run(287, 1, 6), ...run(287, 9, 10),
  ...run(287, 11, 18), ...run(287, 11, 17), "287.19",
  ...run(288, 1, 7),
  ...run(288, 8, 23), ...run(288, 8, 22), "288.24",
  ...run(288, 25, 29), ...run(289, 1, 18),
  ...STRAIN, ...run(290, 11, 12), ...STRAIN, ...run(290, 13, 14),
  "290.15", ...run(291, 1, 19),
];

/** One line of the Original: the right hand, the left hand or the pedal of each played bar, in order. */
function printLine(part: 0 | 1 | 2): string {
  return PLAYED.map((name) => {
    const bar = PRINT_BARS[name];
    if (bar === undefined) throw new Error(`Can-can's Original has no bar p${name}`);
    return part === 2 ? (PEDAL[name] ?? "r:16") : bar[part];
  }).join(" | ");
}

export const canCan: OurSong = {
  slug: "can-can",
  title: "Can-can",
  aka: ["Can-Can", "Cancan", "Galop infernal", "Infernal Galop", "Orpheus in the Underworld", "Orphée aux Enfers"],
  source: {
    composer: "Jacques Offenbach",
    died: 1880,
    published: 1862,
    edition:
      "Orphée aux Enfers, the Galop infernal's strain in G major, bars 1 to 7, as Heugel's piano score of 1862 on Wikimedia Commons prints it on its page 81",
  },
  about:
    "Offenbach wrote the Galop infernal for the wild party of the gods that ends his operetta Orpheus in the Underworld, first staged in 1858. " +
    "In the 1890s the Paris cabarets the Moulin Rouge and the Folies Bergère took it up to accompany the can-can. " +
    "The 2001 film Moulin Rouge! uses it in its score.",
  funFact: "Its tune shares its main notes with two far slower songs of the same act, yet sounds nothing like them.",
  mythic: {
    key: D_MAJOR,
    bpm: 120,
    numerator: 2,
    denominator: 4,
    steps: 8,
    right: printLine(0),
    left: printLine(1),
    pedal: printLine(2),
    source: {
      edition:
        "Orphée aux Enfers, No. 28, the Galop infernal, in the piano part of Heugel's vocal score, Paris, arranger not named, scanned as Internet Archive item orpheauxenfers00offe, printed pages 287 to 291",
      printed: 1874,
      keyShift: 7,
    },
    skills: ["melody-in-chords", "octave-bass", "dotted-rhythm"],
    practice: [
      { text: "Play bars 1 to 16 slowly with the right hand alone. Play each grace note lightly, and let the next note follow at once.", hands: "right", speed: 0.6, loop: [1, 16], wait: true },
      { text: "Play the verse, bars 40 to 71, with the right hand alone. Keep fingers 1 and 5 firm on the octaves, and bounce from the wrist.", hands: "right", speed: 0.5, loop: [40, 71], wait: true },
      { text: "Play bars 40 to 71 with the left hand alone. On each beat it jumps from a low octave up to a chord.", hands: "left", speed: 0.5, loop: [40, 71], wait: true },
      { text: "Play the famous strain, bars 95 to 126, with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: [95, 126], wait: false },
      { text: "Play the whole Galop with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
    ],
    tips: [
      { fromBar: 1, toBar: 16, kind: "rhythm", text: "Each grace note takes a 32nd from the note after it. Play it lightly, and keep the beat steady." },
      { fromBar: 17, toBar: 32, kind: "sound", text: "The second strain is loud, with octaves in the right hand. Play each octave from the wrist." },
      { fromBar: 36, toBar: 39, kind: "rhythm", text: "The octaves on D are long, then short. Keep each short one quick and light." },
      { fromBar: 84, toBar: 94, kind: "sound", text: "The left hand climbs through new chords under a repeated B and A. Grow louder towards bar 95." },
      { fromBar: 95, toBar: 126, kind: "sound", text: "The famous strain sounds high, in octaves. Let the top note of each octave ring out." },
    ],
    tricky: {
      41: "The right hand plays A, C, B and A in octaves with fingers 1 and 5. The left hand jumps from a low D octave to a four-note chord.",
      49: "This bar repeats bar 41. Keep the octaves even, and land the four notes of the left hand's chord together.",
      57: "Bar 41 comes back in the verse's repeat. Move the left hand early from the low D octave up to its chord.",
    },
  },
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: G_MAJOR, hookBars: [1, 7] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 4,
      right: `${TUNE_LOW} | ${COMMON_NEXT}`,
      left: `${bars(HELD, `${TUNE_CHORDS}${NEXT_CHORDS}`).replace(/(\S+):2 \1:2/g, "$1:4")} | G2+D3/5+1:4`,
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first seven bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play bars 8 to 16 with the right hand alone. The hand stays in the same place.", hands: "right", speed: 0.6, loop: [8, 16], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first seven bars, slowly.", hands: "both", speed: 0.7, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Hold the first G for four beats. The dancers wait for the music to start." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Finger 5 plays the first two Ds. Then finger 4 takes D, so finger 5 can reach E." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Play the quarters short and bouncy, like dancers kicking their legs." },
      ],
      tricky: {
        4: "Change from finger 5 to finger 4 on D. Then finger 5 reaches E, and finger 2 drops to B.",
        5: "Finger 3 leaves C, and finger 2 plays A twice. Hold each A for two beats.",
        12: "Bar 4 comes back. Finger 4 takes D, so finger 5 can reach E. Then finger 2 drops to B.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      right: `${TUNE_LOW} | ${RARE_NEXT}`,
      left: `${bars(PULSE, RARE_CHORDS)} | G2+B2+D3/5+3+1:4`,
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play the left hand alone. A bass note comes on the beat, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play the right hand alone on the first seven bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Join the hands on the first seven bars, slowly.", hands: "both", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed, like a dance hall at midnight.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "rhythm", text: "The left hand plays on every beat: a low note, then a chord. Count it as one, two." },
        { fromBar: 8, toBar: 16, kind: "fingering", text: "The two-note chords use fingers 1 and 3 on G and B, or 3 and 5 on B and D." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand light and short, so the tune can dance above it." },
      ],
      tricky: {
        4: "Change from finger 5 to finger 4 on D. Then finger 5 reaches E, and finger 2 drops to B.",
        5: "Finger 2 plays A twice, and holds each A for two beats. The left hand plays D, then A and C, twice.",
        12: "Bar 4 comes back. Change from finger 5 to finger 4 on D, then finger 5 reaches E.",
      },
    },
    epic: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: `${EPIC_TUNE} | ${EPIC_NEXT}`,
      left: `${oomPah(OCTAVE, CHORD, `${TUNE_CHORDS}${NEXT_CHORDS}`)} | G2+G3/5+1:8`,
      pedal: [...pedalBars(`${TUNE_CHORDS}${NEXT_CHORDS}`), "P:8"].join(" | "),
      markedClashBars: [7],
      skills: ["octave-bass", "finger-over", "pedal"],
      practice: [
        { text: "Play the left hand alone: a low octave on the beat, then a chord. Lift each a little early, and jump.", hands: "left", speed: 0.5, loop: [1, 7], wait: false },
        { text: "Play bars 7 to 9 with the right hand alone. Finger 3 crosses over the thumb from C down to B.", hands: "right", speed: 0.5, loop: [7, 9], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "sound", text: "Change the pedal on each new chord. In bar 4 it changes halfway." },
        { fromBar: 7, toBar: 7, kind: "sound", text: "The F sharp rubs against the G in the bass, as the score has it. Play it lightly, and go on." },
        { fromBar: 7, toBar: 8, kind: "fingering", text: "From the high G, the scale runs down with fingers 5, 4, 3, 2 and 1. Then finger 3 crosses over to B." },
      ],
      tricky: {
        2: "Lift the low D octave early, and jump up to the chord. The right hand plays A, C, B and A meanwhile.",
        8: "The thumb plays C, and finger 3 crosses over it down to B. Finger 2 then takes A.",
        10: "The left hand jumps from the low D up to its chord again. Keep the right hand's A, C, B and A even.",
      },
    },
    legendary: {
      key: G_MAJOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: LEGENDARY_VERSE,
      left: `${oomPah(OCTAVE_SHORT, CHORD_SHORT, `${TUNE_CHORDS}${NEXT_CHORDS}`)} | G2+G3/5+1:6 r:2 G3+B3+D4/5+3+1:8`,
      markedClashBars: [7],
      skills: ["octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 7], wait: true },
        { text: "Play the right hand's octaves alone. Keep fingers 1 and 5 firm, and bounce from the wrist.", hands: "right", speed: 0.5, loop: [1, 7], wait: true },
        { text: "Play bars 7 to 9 with the right hand alone. The octaves run down from the high G to the low one.", hands: "right", speed: 0.5, loop: [7, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "trick", text: "Use the short rest after each octave to jump to the next one." },
        { fromBar: 7, toBar: 8, kind: "sound", text: "The octaves fall step by step from the high G. Play each one short, and let the line sing down." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "The last chord spreads the right hand over G, B, D and G with fingers 1, 2, 3 and 5." },
      ],
      tricky: {
        2: "The octaves move by step: A, C, B and A. Keep fingers 1 and 5 firm, and use each short rest to move.",
        8: "The octaves step down D, C, B and A. The left hand jumps from the low D octave up to its chord.",
        10: "Bar 2 comes back. Use each short rest to move the octave, and keep the left hand's jumps light.",
      },
    },
  },
  de: {
    about:
      "Offenbach schrieb den Galop infernal 1858 für das wilde Fest der Götter am Ende seiner Operette Orpheus in der Unterwelt. " +
      "In den 1890er-Jahren übernahmen die Pariser Kabaretts Moulin Rouge und Folies Bergère ihn als Musik zum Cancan. " +
      "Der Film Moulin Rouge! von 2001 verwendet ihn in seiner Musik.",
    funFact: "Seine Melodie teilt ihre Haupttöne mit zwei viel langsameren Liedern desselben Akts und klingt doch ganz anders.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten sieben Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 8 bis 16 nur mit der rechten Hand. Die Hand bleibt am selben Platz.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen oder einen halben Takt lang.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste G vier Schläge lang. Die Tänzerinnen warten auf den Einsatz der Musik.",
          "Finger 5 spielt die ersten beiden D. Dann nimmt Finger 4 das D, damit Finger 5 das E erreicht.",
          "Spiel die Viertel kurz und federnd, wie Tänzerinnen, die die Beine hochwerfen.",
        ],
        tricky: {
          4: "Wechsle auf dem D von Finger 5 zu Finger 4. Dann erreicht Finger 5 das E, und Finger 2 fällt auf das H.",
          5: "Finger 3 verlässt das C, und Finger 2 spielt zweimal das A. Halt jedes A zwei Schläge lang.",
          12: "Takt 4 kehrt zurück. Finger 4 nimmt das D, damit Finger 5 das E erreicht. Dann fällt Finger 2 auf das H.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein Basston, und ein Zweiklang antwortet.",
          "Spiel die ersten sieben Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo, wie in einem Tanzsaal um Mitternacht.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag: erst einen tiefen Ton, dann einen Akkord. Zähl dazu eins, zwei.",
          "Die Zweiklänge spielst du mit Finger 1 und 3 auf G und H oder mit Finger 3 und 5 auf H und D.",
          "Spiel die linke Hand leicht und kurz, damit die Melodie darüber tanzen kann.",
        ],
        tricky: {
          4: "Wechsle auf dem D von Finger 5 zu Finger 4. Dann erreicht Finger 5 das E, und Finger 2 fällt auf das H.",
          5: "Finger 2 spielt zweimal das A und hält jedes A zwei Schläge lang. Die linke Hand spielt zweimal D, dann A und C.",
          12: "Takt 4 kehrt zurück. Wechsle auf dem D von Finger 5 zu Finger 4, dann erreicht Finger 5 das E.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein: eine tiefe Oktave auf dem Schlag, dann einen Akkord. Lös jeden etwas früher, und spring.",
          "Spiel die Takte 7 bis 9 nur mit der rechten Hand. Finger 3 kreuzt vom C über den Daumen hinunter zum H.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Akkord. In Takt 4 wechselt es in der Mitte.",
          "Das Fis reibt sich am G im Bass, wie es im Notenblatt steht. Spiel es leicht, und spiel weiter.",
          "Vom hohen G läuft die Tonleiter mit Finger 5, 4, 3, 2 und 1 hinab. Dann kreuzt Finger 3 hinüber zum H.",
        ],
        tricky: {
          2: "Lös die tiefe D-Oktave früh, und spring hinauf zum Akkord. Die rechte Hand spielt dabei A, C, H und A.",
          8: "Der Daumen spielt das C, und Finger 3 kreuzt darüber hinunter zum H. Dann nimmt Finger 2 das A.",
          10: "Die linke Hand springt wieder vom tiefen D hinauf zu ihrem Akkord. Spiel A, C, H und A der rechten Hand gleichmäßig.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Oktaven der rechten Hand allein. Halt Finger 1 und 5 fest, und federe aus dem Handgelenk.",
          "Spiel die Takte 7 bis 9 nur mit der rechten Hand. Die Oktaven laufen vom hohen G hinab zum tiefen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave, um zur nächsten zu springen.",
          "Die Oktaven fallen Schritt für Schritt vom hohen G. Spiel jede kurz, und lass die Linie singend absteigen.",
          "Der letzte Akkord spannt die rechte Hand mit Finger 1, 2, 3 und 5 über G, H, D und G.",
        ],
        tricky: {
          2: "Die Oktaven gehen in Schritten: A, C, H und A. Halt Finger 1 und 5 fest, und nutz jede kurze Pause zum Wechseln.",
          8: "Die Oktaven steigen über D, C, H und A hinab. Die linke Hand springt von der tiefen D-Oktave hinauf zu ihrem Akkord.",
          10: "Takt 2 kehrt zurück. Nutz jede kurze Pause, um die Oktave zu versetzen, und spring mit der linken Hand leicht.",
        },
      },
    },
    original: {
      practice: [
        "Spiel die Takte 1 bis 16 langsam nur mit der rechten Hand. Spiel jeden Vorschlag leicht, und lass den nächsten Ton sofort folgen.",
        "Spiel die Strophe, Takt 40 bis 71, nur mit der rechten Hand. Halt Finger 1 und 5 auf den Oktaven fest, und federe aus dem Handgelenk.",
        "Spiel die Takte 40 bis 71 nur mit der linken Hand. Auf jedem Schlag springt sie von einer tiefen Oktave hinauf zu einem Akkord.",
        "Spiel die berühmte Melodie, Takt 95 bis 126, mit beiden Händen in Dreiviertel-Tempo.",
        "Spiel den ganzen Galopp mit beiden Händen im vollen Tempo.",
      ],
      tips: [
        "Jeder Vorschlag nimmt dem Ton danach ein Zweiunddreißigstel. Spiel ihn leicht, und halt den Schlag gleichmäßig.",
        "Der zweite Teil ist laut, mit Oktaven in der rechten Hand. Spiel jede Oktave aus dem Handgelenk.",
        "Die Oktaven auf D sind lang, dann kurz. Spiel jede kurze schnell und leicht.",
        "Die linke Hand steigt unter einem wiederholten H und A durch neue Akkorde. Werde bis Takt 95 immer lauter.",
        "Die berühmte Melodie klingt hoch, in Oktaven. Lass den oberen Ton jeder Oktave klingen.",
      ],
      tricky: {
        41: "Die rechte Hand spielt A, C, H und A in Oktaven mit Finger 1 und 5. Die linke Hand springt von einer tiefen D-Oktave zu einem Vierklang.",
        49: "Dieser Takt wiederholt Takt 41. Spiel die Oktaven gleichmäßig, und schlag die vier Töne des Akkords der linken Hand zusammen an.",
        57: "Takt 41 kehrt in der Wiederholung der Strophe zurück. Bewege die linke Hand früh von der tiefen D-Oktave hinauf zu ihrem Akkord.",
      },
    },
  },
};

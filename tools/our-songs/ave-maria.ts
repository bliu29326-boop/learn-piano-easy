/**
 * *Ave Maria*: the voice's first verse from Schubert's Ellens dritter Gesang, in four versions of ours.
 *
 * The tune is the voice's bars 3 and 4 in the C. F. Peters edition, as the Mutopia Project's typeset
 * prints it. The print is in 4/4 and B-flat major, slow, with sixteenths and dotted rhythms. The tune
 * writes every sixteenth as a quarter, so it reads each print bar as one bar of 4/1. The grace notes
 * before the last group of bar 2 are left out. The hook is both bars.
 *
 * Every version writes the print in 4/2, two bars per print bar, so each print beat is half a bar. After
 * the tune, every version goes on with the voice's next phrases, over the print's chords. Common plays the
 * print's bars 5 to 8 and closes on the home chord. Rare and Epic play bars 5 to 8, then bar 13, where the
 * tune's first bar returns, and bar 14, which closes the verse. Legendary plays the whole verse, bars 3 to 14.
 *
 * Every line is written in C major, a whole tone above the print. Common and Rare stay in C major, and
 * Epic and Legendary are moved down a whole tone to the print's B-flat major.
 *
 * Common plays the voice over held bass notes. It leaves out the quickest notes and most notes outside its
 * hand position. Rare plays a bass note and a two-note chord on each half bar. It plays each of the voice's
 * triplets as two eighths and a quarter. Its bar 6 takes A minor where the print's chord would clash with
 * the voice, and its bar 8 plays the print's chord over B.
 *
 * Epic and Legendary play the voice's triplets and the six notes of its bar 8. They take the print's own
 * accompaniment. Its right hand plays a rest and five two-note shapes to the beat, up and back down. Its
 * left hand strikes a low octave on the beat. Legendary plays both in its left hand: the octave in the
 * rest's place, then the shapes, an octave below the print. Epic plays one bass note, then the lower note
 * of each shape. The pedal changes at each beat and holds the bass, so the bass and the last note sound
 * short while the hand jumps.
 *
 * The voice rubs against the print's accompaniment in a few bars. Epic and Legendary keep those clashes,
 * and their guides mark them.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const B_FLAT_MAJOR: Key = { tonic: 10, mode: "major" };

/** The key Common and Rare move to, and the key every line is written in. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune = "Bb4:6 A4:1 Bb4:1 D5:7 C5:1 | Bb4:4 r:4 C5:4 Bb4:1 A4:1 G4:1 A4:1";

/** The pitch class of each note letter. */
const LETTERS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The name of each pitch class, spelt with flats. */
const FLAT_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

/** `text` a whole tone down, every note spelt with flats, so a line in C major reads in B-flat major. */
function wholeToneDown(text: string): string {
  return text.replace(/([A-G])([#b]?)(\d)(?=[/:+])/g, (_, letter: string, accidental: string, octave: string) => {
    const pitch = 12 * (Number(octave) + 1) + (LETTERS[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0) - 2;
    return `${FLAT_NAMES[pitch % 12]}${Math.floor(pitch / 12) - 1}`;
  });
}

/** `text` with every length times `factor`, so a line in eighths reads in the finer grid of Epic and Legendary. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** The tune in C major, in eighths, which are the print's 32nds, fingered in one place: A with the thumb, up to E with finger 5. */
const TUNE_RIGHT = "C5/3:12 B4/2:2 C5/3:2 | E5/5:14 D5/4:2 | C5/3:8 r:8 | D5/4:8 C5/3:2 B4/2:2 A4/1:2 B4/2:2";

/** The tune's first two bars, the print's bar 3, which its bar 13 plays again. */
const TUNE_START = TUNE_RIGHT.split(" | ").slice(0, 2).join(" | ");

/**
 * The voice's print bars 5 to 8 in C major, in Epic's and Legendary's grid: 48 to the bar, 6 to the print's
 * sixteenth. The print's triplets and its six notes in bar 8 take 4 each.
 */
const PHRASE = [
  "C5/3:24 r:12 E5/5:12",
  "E5/5:18 D5/4:3 C5/3:3 B4/2:6 A4/1:6 E5/4:6 F#5/5:6",
  "E5/4:24 D#5/3:18 B4/1:6",
  "D5/3:18 C5/2:6 B4/1:4 D5/3:4 E5/4:4 F5/5:4 D5/3:4 B4/1:4",
  "C5/2:36 E5/4:6 D5/3:6",
  "D5/3:18 B4/2:6 A4/1:4 C#5/2:4 E5/4:4 G5/5:4 E5/4:4 C#5/2:4",
  "D5/3:28 A4/1:4 B4/2:4 C5/3:4 B4/2:4 A4/1:4",
  "G4/1:24 r:12 G4/1:12",
].join(" | ");

/**
 * The voice's print bars 9 to 12 in C major, in the grid of `PHRASE`. Each appoggiatura takes half its
 * note, and the trill in bar 11 is left out.
 */
const NEXT_PHRASE = [
  "D5/3:18 D5/3:6 D5/3:9 C#5/2:3 D5/3:9 E5/4:3",
  "D5/3:9 E5/4:3 C5/2:12 r:12 C5/2:12",
  "D5/3:18 D5/3:6 D5/3:4 C#5/2:4 D5/3:4 F5/5:4 E5/4:4 D5/3:4",
  "C5/2:24 r:12 C5/2:12",
  "D5/3:18 D5/3:6 E5/4:9 E5/4:3 E5/4:4 D5/3:4 E5/4:4",
  "G5/5:6 F5/4:6 F5/4:12 r:18 A4/1:6",
  "E5/4:6 D5/3:12 D5/3:6 C5/2:4 B4/1:4 C5/2:4 Eb5/4:4 D5/3:4 C5/2:4",
  "D5/3:36 r:12",
].join(" | ");

/** Common's print bars 5 to 8 in eighths, in the tune's hand position, with the quick notes left out. */
const COMMON_PHRASE = [
  "C5/3:8 r:4 E5/5:4",
  "E5/5:6 D5/4:2 B4/2:2 A4/1:2 E5/5:4",
  "E5/5:8 D#5/4:8",
  "D5/4:6 C5/3:2 B4/2:2 E5/5:2 D5/4:2 B4/2:2",
  "C5/3:12 E5/5:2 D5/4:2",
  "D5/4:6 B4/2:2 A4/1:4 E5/5:4",
  "D5/4:8 C5/3:2 B4/2:2 A4/1:4",
  "G4/1:8 r:8",
].join(" | ");

/** Common's left hand under `COMMON_PHRASE`: the root of each chord, held. */
const COMMON_PHRASE_LEFT = "C3/1:16 | C3/1:8 A2/3:8 | B2/2:16 | E2/5:16 | A2/3:16 | B2/2:8 A2/3:8 | D3/1:16 | G2/4:16";

/** Rare's print bars 5 to 8 in eighths, each triplet as an eighth, an eighth and a quarter. */
const RARE_PHRASE = [
  "C5/3:8 r:4 E5/5:4",
  "E5/5:6 D5/4:1 C5/3:1 B4/2:2 A4/1:2 E5/4:2 F#5/5:2",
  "E5/4:8 D#5/3:6 B4/1:2",
  "D5/3:6 C5/2:2 B4/1:1 D5/3:1 E5/4:2 F5/5:1 D5/3:1 B4/1:2",
  "A4+C5/1+2:12 E5/4:2 D5/3:2",
  "D5/3:6 B4/2:2 A4/1:1 C#5/2:1 E5/3:2 G5/5:2 E5/3:2",
  "D5/2:10 A4/1:1 B4/2:1 C5/3:1 B4/2:1 A4/1:2",
  "G4/1:8 r:4 G4/1:4",
].join(" | ");

/**
 * Rare's left hand under the tune: a bass note, then a two-note chord, on each half bar. The chord before
 * each bar that starts on C lies above C, so finger 5 reaches it without a jump.
 */
const RARE_TUNE_LEFT = [
  "C3/5:4 E3+G3/2+1:4 A2/5:4 F#3/1:4 | G2/5:4 C3+E3/2+1:4 G2/5:4 D3+G3/2+1:4",
  "A2/5:4 C3+E3/2+1:4 A2/5:4 C3+E3/2+1:4 | F2/5:4 A2+D3/2+1:4 G2/5:4 D3+F3/2+1:4",
].join(" | ");

/**
 * Rare's left hand under `RARE_PHRASE`. The print's chord on F sharp in bar 8 is played over B. The chord
 * before bar 12 ends an eighth early, so the hand can jump down to G.
 */
const RARE_PHRASE_LEFT = [
  "C3/5:4 E3+G3/2+1:4 C3/5:4 E3+G3/2+1:4",
  "C3/5:4 E3+G3/2+1:4 A2/5:4 C3+E3/3+1:4",
  "B2/5:4 E3+A3/2+1:4 B2/5:4 F#3+A3/2+1:4",
  "B2/5:4 D3+F3/2+1:4 B2/5:4 D3+F3/2+1:4",
  "A2/5:4 C3+E3/3+1:4 A2/5:4 C3+E3/3+1:4",
  "B2/5:4 D3+G3/2+1:4 A2/5:4 E3+G3/2+1:4",
  "D3/5:4 G3+B3/2+1:4 D3/5:4 F#3+C4/2+1:3 r:1",
  "G2/5:4 B2+D3/2+1:4 G2/5:4 D3+G3/2+1:4",
].join(" | ");

/**
 * The print's figure for each chord, in C major and an octave below the print: three two-note shapes, low
 * to high, with the fingers of Legendary's left hand. The print's right hand plays them as six notes to
 * the beat: a rest, then the shapes up and back down.
 */
const SHAPES: Record<string, [shape: string, fingers: string][]> = {
  c: [["E3+G3", "5+2"], ["G3+C4", "3+1"], ["C4+E4", "2+1"]],
  x: [["E3+F#3", "5+2"], ["F#3+C4", "4+1"], ["C4+E4", "2+1"]],
  a: [["E3+A3", "5+2"], ["A3+C4", "3+1"], ["C4+E4", "2+1"]],
  "+": [["E3+G#3", "5+2"], ["G#3+C4", "3+1"], ["C4+E4", "2+1"]],
  b: [["F#3+A3", "5+2"], ["A3+C4", "3+1"], ["C4+E4", "2+1"]],
  B: [["F#3+A3", "5+2"], ["A3+B3", "3+1"], ["B3+D#4", "2+1"]],
  "7": [["F3+B3", "5+2"], ["B3+D4", "3+1"], ["D4+F4", "2+1"]],
  t: [["F3+G3", "5+2"], ["G3+B3", "3+1"], ["B3+D4", "2+1"]],
  n: [["F3+B3", "5+2"], ["B3+D4", "3+1"], ["D4+G4", "2+1"]],
  d: [["F3+A3", "5+2"], ["A3+D4", "3+1"], ["D4+F4", "2+1"]],
  m: [["D3+F3", "5+2"], ["F3+A3", "3+1"], ["A3+D4", "2+1"]],
  h: [["D3+G3", "5+2"], ["G3+B3", "3+1"], ["B3+D4", "2+1"]],
  k: [["G3+B3", "5+2"], ["B3+D4", "3+1"], ["D4+G4", "2+1"]],
  e: [["G3+A3", "5+2"], ["A3+C#4", "3+1"], ["C#4+G4", "2+1"]],
  D: [["F#3+C4", "5+2"], ["C4+D4", "3+1"], ["D4+F#4", "2+1"]],
  E: [["E3+G#3", "5+2"], ["G#3+B3", "3+1"], ["B3+E4", "2+1"]],
  l: [["C3+E3", "5+2"], ["E3+A3", "3+1"], ["A3+C4", "2+1"]],
  S: [["E3+C4", "5+1"], ["C4+E4", "2+1"], ["E4+G4", "2+1"]],
  o: [["Eb3+F#3", "5+2"], ["F#3+C4", "4+1"], ["C4+Eb4", "2+1"]],
};

/**
 * The print's beats, each its bass octave's low note and its chord in `SHAPES`, in C major. The tune's
 * beats are the print's bar 3, which its bar 13 plays again, and bar 4.
 */
const TUNE_BEATS = "C2/c A1/x G1/c G1/7 A1/a A1/a F1/d G1/t";
const PHRASE_BEATS = "C2/c C2/c C2/+ C2/a B1/b B1/B G#1/7 G#1/7 A1/a A1/x B1/h E2/e D2/k D2/D G2/k G2/k";
const NEXT_BEATS = "G2/n G2/n G2/S G2/S G2/n G2/n A2/a A2/l G2/h E2/E D2/d D2/d F2/m A2/o G2/h G2/t";
const CLOSE_BEATS = "C2/c C2/c";

/** Each beat of `beats` as `figure` plays it, two beats to the bar. */
function beatBars(beats: string, figure: (bass: string, shapes: [string, string][]) => string): string {
  const halves = beats.split(" ").map((beat) => {
    const [bass, chord] = beat.split("/");
    const shapes = SHAPES[chord ?? ""];
    if (bass === undefined || shapes === undefined) throw new Error(`No figure for beat ${beat}`);
    return figure(bass, shapes);
  });
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** `note` an octave higher. */
function octaveUp(note: string): string {
  return note.replace(/\d$/, (octave) => String(Number(octave) + 1));
}

/**
 * Epic's beat: one bass note, then the low notes of the print's shapes, up and back down, six to the beat.
 * The bass takes the octave's upper note where the lower one lies below E2. The bass and the last note
 * sound short, so the hand can jump, and the pedal holds them.
 */
function rippled(bass: string, shapes: [string, string][]): string {
  const low = /1$/.test(bass) || bass === "C2" || bass === "D2" ? octaveUp(bass) : bass;
  const [a, b, c] = shapes.map(([shape]) => shape.split("+")[0]);
  return `${low}/5:1 r:3 ${a}/4:4 ${b}/2:4 ${c}/1:4 ${b}/2:4 ${a}/4:1 r:3`;
}

/**
 * Legendary's beat, the print's own: the bass octave of its left hand, then the shapes of its right hand,
 * up and back down. The octave and the last shape sound short, so the hand can jump, and the pedal holds them.
 */
function printed(bass: string, shapes: [string, string][]): string {
  const [a, b, c] = shapes.map(([shape, fingers]) => `${shape}/${fingers}`);
  return `${bass}+${octaveUp(bass)}/5+1:1 r:3 ${a}:4 ${b}:4 ${c}:4 ${b}:4 ${a}:1 r:3`;
}

/** The pedal of Epic and Legendary for `barCount` bars: changed at each beat of the print, and held over the last bar. */
function pedal(barCount: number): string {
  return [...Array(barCount - 1).fill("P:24 P:24"), "P:48"].join(" | ");
}

export const aveMaria: OurSong = {
  slug: "ave-maria",
  title: "Ave Maria",
  aka: ["Ellens dritter Gesang", "Ellen's Third Song", "Schubert Ave Maria", "D. 839"],
  source: {
    composer: "Franz Schubert",
    died: 1828,
    published: 1826,
    edition:
      "Ellens dritter Gesang, D. 839, the voice's first verse in bars 3 to 14 and the piano's figure, as the Mutopia Project's typeset of the C. F. Peters edition prints it",
  },
  about:
    "Schubert set this song in 1825, from a German translation of Walter Scott's poem The Lady of the Lake. " +
    "It is Ellen's third song, and it was published in 1826 as part of his Opus 52. " +
    "Walt Disney's film Fantasia (1940) uses it in its final part, right after Night on Bald Mountain.",
  funFact: "In Fantasia, the bells at the end of Night on Bald Mountain seem to become church bells that lead into the Ave Maria.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: B_FLAT_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_RIGHT, COMMON_PHRASE, "C5/3:16"].join(" | "),
      left: ["C3/1:8 A2/3:8 | G2/4:16 | A2/3:16 | F2/5:8 G2/4:8", COMMON_PHRASE_LEFT, "C3/1:16"].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 7 with the right hand alone. The hand stays in the same place.", hands: "right", speed: 0.6, loop: [5, 7], wait: true },
        { text: "Now the left hand alone. It holds one bass note for half a bar or longer.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first seven bars, slowly.", hands: "both", speed: 0.7, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Sing the long notes in your head. The tune is a prayer, so play it softly." },
        { fromBar: 1, toBar: 6, kind: "fingering", text: "The thumb rests on A and finger 5 on E. Every note of the right hand lies under a finger." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The last four notes are even. Count them one, two, three, four." },
      ],
      tricky: {
        8: "Finger 4 slides back from D sharp to D. Then finger 2 plays B, and finger 5 reaches up to E.",
        9: "Hold C with finger 3 for most of the bar. The left hand moves up from the low E to A.",
        12: "The thumb moves down from A to G. The left hand plays G with finger 4 at the same time.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_RIGHT, RARE_PHRASE, TUNE_START, "C5/3:8 r:8", "C5+E5/3+5:16"].join(" | "),
      left: [RARE_TUNE_LEFT, RARE_PHRASE_LEFT, RARE_TUNE_LEFT.split(" | ").slice(0, 2).join(" | "), "C3/5:4 E3+G3/2+1:4 C3/5:4 E3+G3/2+1:4", "C3+E3+G3/5+2+1:16"].join(" | "),
      skills: ["two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. A bass note comes first, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Count eight beats in each bar. The left hand plays on beats 1, 3, 5 and 7." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "In bar 6, finger 5 reaches up to F sharp. In bar 7, finger 3 takes D sharp, and the thumb drops to B." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand softer than the tune, as a quiet harp under a voice." },
      ],
      tricky: {
        8: "Play B and D quickly, then E. Then F and D quickly, then B. The thumb stays on B.",
        10: "The hand opens from A up to the high G. Finger 2 takes C sharp, finger 3 takes E, and finger 5 takes G.",
        12: "The thumb moves down from A to G. The left hand jumps down to the low G in the short rest before it.",
      },
    },
    epic: {
      key: B_FLAT_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 2,
      steps: 12,
      right: wholeToneDown([scaled(TUNE_RIGHT, 3), PHRASE, scaled(TUNE_START, 3), "C5/3:24 r:24", "E4+G4+C5/1+2+5:48"].join(" | ")),
      left: wholeToneDown(
        [beatBars(`${TUNE_BEATS} ${PHRASE_BEATS} ${TUNE_BEATS.split(" ").slice(0, 4).join(" ")} ${CLOSE_BEATS}`, rippled), "C2+G2+C3/5+2+1:48"].join(" | "),
      ),
      pedal: pedal(16),
      markedClashBars: [1, 6, 13],
      skills: ["broken-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone. Each half bar plays a short bass note, then rolls up and back down.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 5 to 12 with the right hand alone. Play each group of three notes evenly.", hands: "right", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Change the pedal with each new bass note, twice in every bar." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Let the rolling left hand ripple softly, like a harp under the tune." },
        { fromBar: 1, toBar: 1, kind: "sound", text: "In bars 1, 6 and 13, the tune's A rubs against a B flat below it, as the score has it. Keep the left hand soft." },
      ],
      tricky: {
        4: "The left hand plays a low E flat, then F, each followed by a short rest to jump. The right hand plays C, B flat, A, G and A evenly.",
        8: "The right hand plays two groups of three: A, C and D, then E flat, C and A. Each group fits three notes of the left hand.",
        12: "The thumb moves down from G to F. The left hand plays a low F, then rolls up F, A and C.",
      },
    },
    legendary: {
      key: B_FLAT_MAJOR,
      bpm: 96,
      numerator: 4,
      denominator: 2,
      steps: 12,
      right: wholeToneDown(
        [scaled(TUNE_RIGHT, 3), PHRASE, NEXT_PHRASE, scaled(TUNE_START, 3), "C5/3:24 r:24", "C4+E4+G4+C5/1+2+3+5:48"].join(" | "),
      ),
      left: wholeToneDown(
        [
          beatBars(`${TUNE_BEATS} ${PHRASE_BEATS} ${NEXT_BEATS} ${TUNE_BEATS.split(" ").slice(0, 4).join(" ")} ${CLOSE_BEATS}`, printed),
          "C2+G2+C3/5+2+1:48",
        ].join(" | "),
      ),
      pedal: pedal(24),
      markedClashBars: [1, 2, 6, 19, 21, 22],
      skills: ["octave-bass", "broken-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone: a short low octave, then five pairs of notes up and back down. Jump in each short rest.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play bars 13 to 20 with the right hand alone, slowly. Fit each group of three notes into one beat.", hands: "right", speed: 0.5, loop: [13, 20], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "Use the short rest at the end of each half bar to jump to the next octave." },
        { fromBar: 1, toBar: 2, kind: "sound", text: "The tune rubs against the left hand's pairs in a few bars, as the score has it. Keep the pairs soft, under the tune." },
        { fromBar: 18, toBar: 18, kind: "sound", text: "The bar starts on a quick F that leans into E flat, as a singer would." },
        { fromBar: 24, toBar: 24, kind: "sound", text: "Play the last chord softly, and hold it until the sound fades." },
      ],
      tricky: {
        2: "Hold the D with finger 5 for almost the whole bar. Meanwhile the left hand jumps from the low F octave up to its pairs, twice.",
        4: "The left hand jumps to the low E flat octave, then to the F octave. Use the short rest after each last pair.",
        8: "The right hand plays two groups of three: A, C and D, then E flat, C and A. Each group lines up with three strokes of the left hand.",
      },
    },
  },
  de: {
    about:
      "Schubert vertonte dieses Lied 1825, nach einer deutschen Übersetzung von Walter Scotts Gedicht Das Fräulein vom See. " +
      "Es ist Ellens dritter Gesang und erschien 1826 als Teil seines Opus 52. " +
      "Walt Disneys Film Fantasia (1940) verwendet es in seinem letzten Teil, direkt nach Eine Nacht auf dem Kahlen Berge.",
    funFact: "In Fantasia scheinen die Glocken am Ende von Eine Nacht auf dem Kahlen Berge zu Kirchenglocken zu werden, die zum Ave Maria führen.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 7 nur mit der rechten Hand. Die Hand bleibt am selben Platz.",
          "Jetzt die linke Hand allein. Sie hält jeden Basston einen halben Takt lang oder länger.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Sing die langen Töne im Kopf mit. Die Melodie ist ein Gebet, also spiel sie leise.",
          "Der Daumen liegt auf dem A und Finger 5 auf dem E. Jeder Ton der rechten Hand liegt unter einem Finger.",
          "Die letzten vier Töne sind gleich lang. Zähl sie eins, zwei, drei, vier.",
        ],
        tricky: {
          8: "Finger 4 rutscht vom Dis zurück auf das D. Dann spielt Finger 2 das H, und Finger 5 greift hinauf zum E.",
          9: "Halt das C fast den ganzen Takt mit Finger 3. Die linke Hand rückt vom tiefen E hinauf zum A.",
          12: "Der Daumen rückt vom A hinab zum G. Die linke Hand spielt gleichzeitig das G mit Finger 4.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Zuerst kommt ein Basston, und ein Zweiklang antwortet ihm.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Zähl in jedem Takt acht Schläge. Die linke Hand spielt auf den Schlägen 1, 3, 5 und 7.",
          "In Takt 6 greift Finger 5 hinauf zum Fis. In Takt 7 nimmt Finger 3 das Dis, und der Daumen fällt auf das H.",
          "Spiel die linke Hand leiser als die Melodie, wie eine leise Harfe unter einer Stimme.",
        ],
        tricky: {
          8: "Spiel H und D schnell, dann E. Dann F und D schnell, dann H. Der Daumen bleibt auf dem H.",
          10: "Die Hand öffnet sich vom A bis zum hohen G. Finger 2 nimmt das Cis, Finger 3 das E und Finger 5 das G.",
          12: "Der Daumen rückt vom A hinab zum G. Die linke Hand springt in der kurzen Pause davor hinab zum tiefen G.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder halbe Takt spielt einen kurzen Basston und rollt dann hinauf und wieder hinab.",
          "Spiel die Takte 5 bis 12 nur mit der rechten Hand. Spiel jede Gruppe aus drei Tönen gleichmäßig.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Lass die rollende linke Hand leise plätschern, wie eine Harfe unter der Melodie.",
          "In den Takten 1, 6 und 13 reibt sich das A der Melodie an einem B darunter, wie in den Noten. Spiel die linke Hand leise.",
        ],
        tricky: {
          4: "Die linke Hand spielt ein tiefes Es, dann ein F, jedes mit einer kurzen Pause zum Springen. Die rechte Hand spielt C, B, A, G und A gleichmäßig.",
          8: "Die rechte Hand spielt zwei Dreiergruppen: A, C und D, dann Es, C und A. Jede Gruppe passt auf drei Töne der linken Hand.",
          12: "Der Daumen rückt vom G hinab zum F. Die linke Hand spielt ein tiefes F und rollt dann F, A und C hinauf.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine kurze tiefe Oktave, dann fünf Zweiklänge hinauf und wieder hinab. Spring in jeder kurzen Pause.",
          "Spiel die Takte 13 bis 20 langsam nur mit der rechten Hand. Spiel jede Dreiergruppe auf einen Schlag.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause am Ende jedes halben Takts, um zur nächsten Oktave zu springen.",
          "Die Melodie reibt sich in einigen Takten an den Zweiklängen der linken Hand, wie in den Noten. Spiel die Zweiklänge leise, unter der Melodie.",
          "Der Takt beginnt mit einem kurzen F, das sich in das Es lehnt, wie ein Sänger es tut.",
          "Spiel den letzten Akkord leise, und halt ihn, bis der Klang verklingt.",
        ],
        tricky: {
          2: "Halt das D fast den ganzen Takt mit Finger 5. Die linke Hand springt dabei zweimal von der tiefen F-Oktave hinauf zu ihren Zweiklängen.",
          4: "Die linke Hand springt zur tiefen Es-Oktave, dann zur F-Oktave. Nutz die kurze Pause nach dem jeweils letzten Zweiklang.",
          8: "Die rechte Hand spielt zwei Dreiergruppen: A, C und D, dann Es, C und A. Jede Gruppe passt auf drei Anschläge der linken Hand.",
        },
      },
    },
  },
};

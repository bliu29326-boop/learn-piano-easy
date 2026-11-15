/**
 * *Drunken Sailor*: the sea shanty, in four versions of ours.
 *
 * The tune is the verse as R. R. Terry's *The Shanty Book, Part I* of 1921 prints it, scanned on
 * Wikimedia Commons. The print is in 2/4 with no key signature, in the Dorian mode on D. The tune writes
 * every print sixteenth as a quarter, so each print bar is a bar of 2/1. Its key is D minor with one B
 * natural, and the hook is the first four bars.
 *
 * Every version writes the tune in 4/2, one bar per print bar. Bars 9 to 16 play the print's chorus,
 * "Hooray and up she rises", its eight bars after the verse. The chorus sings the verse again, with a
 * long A and a long G opening its first and third bars. Epic and Legendary then play the tune again in
 * another setting. Every version keeps D minor and closes on it.
 *
 * The print's chords are D minor and C major, a bar each. Its sixth bar walks down through A minor, G
 * major, F major and D minor, and its seventh plays A minor twice, E minor and C major, a chord per
 * print eighth. Common and Rare keep their level's simpler chords there: D minor, then G in Common's
 * sixth bar, and F major and C major in the seventh. Epic and Legendary follow the print's chords. In
 * bars 22 and 23, the notes their right hand adds under the tune follow the print's A minor.
 *
 * Common plays the tune in quarters over held single bass notes and one open fifth. Its hand moves
 * once in each eight bars, after the long high D. Rare plays a bass note and a short chord on alternate
 * beats. Epic and Legendary take the print's chorus figure: a low bass note on the beat, then the chord
 * three times, a print eighth each. Epic plays a single bass note under triads, and Legendary an octave
 * under chords of four notes. A short rest before each new chord lets the hand jump. Epic plays the tune
 * again an octave up over thirds and sixths. Legendary plays the tune in octaves, then again in chords of
 * three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 2/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "A4:2 A4:1 A4:1 A4:2 A4:1 A4:1 | A4:2 D4:2 F4:2 A4:2 | G4:2 G4:1 G4:1 G4:2 G4:1 G4:1 | G4:2 C4:2 E4:2 G4:2 | A4:2 A4:1 A4:1 A4:2 A4:1 A4:1 | A4:2 B4:2 C5:2 D5:2 | C5:2 A4:2 G4:2 E4:2 | D4:4 D4:4";

/** The tune in 4/2 quarters, with a finger on every note. Finger 2 takes the last A of bar 5. */
const TUNE = [
  "A4/5:2 A4/5:1 A4/5:1 A4/5:2 A4/5:1 A4/5:1 | A4/5:2 D4/1:2 F4/3:2 A4/5:2",
  "G4/4:2 G4/4:1 G4/4:1 G4/4:2 G4/4:1 G4/4:1 | G4/4:2 C4/1:2 E4/2:2 G4/4:2",
  "A4/5:2 A4/5:1 A4/5:1 A4/5:2 A4/5:1 A4/2:1 | A4/2:2 B4/3:2 C5/4:2 D5/5:2",
  "C5/5:2 A4/4:2 G4/3:2 E4/2:2 | D4/1:4 D4/1:4",
].join(" | ");

/** The print's chorus in 4/2 quarters, with the verse's fingers. Its bars 1, 3 and 5 go long, long, short. */
const CHORUS = [
  "A4/5:4 A4/5:3 A4/5:1 | A4/5:2 D4/1:2 F4/3:2 A4/5:2",
  "G4/4:4 G4/4:3 G4/4:1 | G4/4:2 C4/1:2 E4/2:2 G4/4:2",
  "A4/5:4 A4/5:3 A4/2:1 | A4/2:2 B4/3:2 C5/4:2 D5/5:2",
  "C5/5:2 A4/4:2 G4/3:2 E4/2:2 | D4/1:4 D4/1:4",
].join(" | ");

/** `text` with every length doubled, so quarters become eighths. */
function doubled(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Common's left hand under the verse or the chorus, in quarters: one held note a bar or half bar, and an open fifth on G. */
const COMMON_LEFT = "D3/1:8 | D3/1:8 | C3/2:8 | C3/2:8 | D3/1:8 | D3/1:4 G2+D3/5+1:4 | A2/4:4 C3/2:4 | D3/1:8";

/** Bars of `patterns` from `chords`, such as `"ddcc"`: one letter per half bar, two per bar. */
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

/** Rare's chords under the verse or the chorus, two per bar: d, c and f are D minor, C major and F major. */
const RARE_CHORDS = "ddddccccddddfcdd";

/**
 * Rare's half bar in eighths: a bass note, then two notes of the chord a beat later. The hand never
 * moves, since D minor and F major share F and A, and C major takes the free fingers.
 */
const OOM_PAH: Record<string, string> = {
  d: "D3/4:4 F3+A3/2+1:4",
  c: "C3/5:4 G3/2:4",
  f: "C3/5:4 F3+A3/2+1:4",
};

/** The last bar of Rare and Epic in the left hand: a D minor chord where the hand already lies. */
const LAST_CHORD = "D3+F3+A3/5+3+1:16";

/** Epic's chorus in eighths. Its last D ends a quarter early, so the hand can jump up to the tune again. */
const EPIC_CHORUS = doubled(CHORUS).replace(/D4\/1:8$/, "D4/1:6 r:2");

/** Epic's tune again in eighths, an octave up, with a third or a sixth under its long notes. */
const EPIC_TUNE_AGAIN = [
  "F5+A5/2+4:4 A5/4:2 A5/4:2 F5+A5/2+4:4 A5/4:2 A5/4:2 | F5+A5/2+4:4 D5/1:4 F5/2:4 F5+A5/2+4:4",
  "E5+G5/1+3:4 G5/3:2 G5/3:2 E5+G5/1+3:4 G5/3:2 G5/3:2 | E5+G5/1+3:4 C5/1:4 E5/2:4 E5+G5/2+4:4",
  "F5+A5/3+5:4 A5/5:2 A5/5:2 F5+A5/3+5:4 A5/5:2 A5/5:2 | C5+A5/1+4:4 D5+B5/1+5:4 A5+C6/3+5:4 F5+D6/1+5:4",
  "A5+C6/3+5:4 C5+A5/1+5:4 E5+G5/1+3:4 C5+E5/1+3:3 r:1 | F4+A4+D5/1+2+5:16",
].join(" | ");

/** Legendary's verse in eighths in octaves, with a short rest before each leap of a fourth or more. */
const TUNE_OCTAVES = [
  "A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2 A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2",
  "A4+A5/1+5:3 r:1 D4+D5/1+5:4 F4+F5/1+5:3 r:1 A4+A5/1+5:4",
  "G4+G5/1+5:4 G4+G5/1+5:2 G4+G5/1+5:2 G4+G5/1+5:4 G4+G5/1+5:2 G4+G5/1+5:2",
  "G4+G5/1+5:3 r:1 C4+C5/1+5:3 r:1 E4+E5/1+5:4 G4+G5/1+5:4",
  "A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2 A4+A5/1+5:4 A4+A5/1+5:2 A4+A5/1+5:2",
  "A4+A5/1+5:4 B4+B5/1+5:4 C5+C6/1+5:4 D5+D6/1+5:4",
  "C5+C6/1+5:4 A4+A5/1+5:4 G4+G5/1+5:4 E4+E5/1+5:4",
  "D4+D5/1+5:8 D4+D5/1+5:7 r:1",
].join(" | ");

/** Legendary's chorus in octaves: its bars 1, 3 and 5 go long, long, short, and the rest is the verse's. */
const CHORUS_OCTAVES = [
  "A4+A5/1+5:8 A4+A5/1+5:6 A4+A5/1+5:2",
  "A4+A5/1+5:3 r:1 D4+D5/1+5:4 F4+F5/1+5:3 r:1 A4+A5/1+5:4",
  "G4+G5/1+5:8 G4+G5/1+5:6 G4+G5/1+5:2",
  "G4+G5/1+5:3 r:1 C4+C5/1+5:3 r:1 E4+E5/1+5:4 G4+G5/1+5:4",
  "A4+A5/1+5:8 A4+A5/1+5:6 A4+A5/1+5:2",
  "A4+A5/1+5:4 B4+B5/1+5:4 C5+C6/1+5:4 D5+D6/1+5:4",
  "C5+C6/1+5:4 A4+A5/1+5:4 G4+G5/1+5:4 E4+E5/1+5:4",
  "D4+D5/1+5:8 D4+D5/1+5:6 r:2",
].join(" | ");

/** Legendary's tune again in short chords of three and four notes, the tune on top, each with a rest to jump. */
const LEGENDARY_TUNE_AGAIN = [
  "A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2 A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2",
  "A4+D5+F5+A5/1+2+3+5:3 r:1 F4+A4+D5/1+2+5:3 r:1 A4+D5+F5/1+2+5:3 r:1 A4+D5+F5+A5/1+2+3+5:3 r:1",
  "G4+C5+E5+G5/1+2+3+5:3 r:1 G5/5:2 G5/5:2 G4+C5+E5+G5/1+2+3+5:3 r:1 G5/5:2 G5/5:2",
  "G4+C5+E5+G5/1+2+3+5:3 r:1 E4+G4+C5/1+2+5:3 r:1 G4+C5+E5/1+2+5:3 r:1 G4+C5+E5+G5/1+2+3+5:3 r:1",
  "A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2 A4+D5+F5+A5/1+2+3+5:3 r:1 A5/5:2 A5/5:2",
  "A4+C5+E5+A5/1+2+3+5:3 r:1 B4+D5+G5+B5/1+2+3+5:3 r:1 C5+F5+A5+C6/1+2+3+5:3 r:1 D5+F5+A5+D6/1+2+3+5:3 r:1",
  "C5+E5+A5+C6/1+2+3+5:3 r:1 C5+E5+A5/1+2+5:3 r:1 B4+E5+G5/1+3+5:3 r:1 G4+C5+E5/1+2+5:3 r:1",
  "D4+F4+A4+D5/1+2+3+5:16",
].join(" | ");

/**
 * Epic's left hand under the verse, the chorus or the tune again, in eighths, from the print's chorus
 * figure. Bars 1 to 5 put a low root on the beat, then the chord three times, a half note each. Bar 6
 * walks down A, G, F and D in fifths and octaves, and bar 7 plays A minor twice, E minor and C major.
 */
function epicLeft(ending: string): string {
  const d = "D2/5:3 r:1 D3+F3+A3/5+3+1:4 D3+F3+A3/5+3+1:4 D3+F3+A3/5+3+1:3 r:1";
  const c = "C2/5:3 r:1 C3+E3+G3/5+3+1:4 C3+E3+G3/5+3+1:4 C3+E3+G3/5+3+1:3 r:1";
  const walk = "A2+E3+A3/5+2+1:3 r:1 G2+D3+G3/5+2+1:3 r:1 F2+C3+F3/5+2+1:3 r:1 D2+A2+D3/5+2+1:3 r:1";
  const seventh = "A2+E3+A3/5+2+1:3 r:1 C3+E3+A3/5+3+1:3 r:1 E3+G3+B3/5+3+1:3 r:1 C3+E3+G3/5+3+1:3 r:1";
  return [d, d, c, c, d, walk, seventh, ending].join(" | ");
}

/**
 * Legendary's left hand in eighths, from the print's chorus figure: an octave on the beat, then the
 * chord in four notes three times, with a short rest before each jump. Bars 6 and 7 move a chord of
 * four notes with each print eighth, with fingers 5, 4, 2 and 1 on all of them.
 */
function legendaryLeft(ending: string): string {
  const d = "D2+D3/5+1:3 r:1 A2+D3+F3+A3/5+3+2+1:4 A2+D3+F3+A3/5+3+2+1:4 A2+D3+F3+A3/5+3+2+1:3 r:1";
  const c = "C2+C3/5+1:3 r:1 G2+C3+E3+G3/5+3+2+1:4 G2+C3+E3+G3/5+3+2+1:4 G2+C3+E3+G3/5+3+2+1:3 r:1";
  const walk = "A2+C3+E3+A3/5+4+2+1:3 r:1 G2+B2+D3+G3/5+4+2+1:3 r:1 F2+A2+C3+F3/5+4+2+1:3 r:1 D2+F2+A2+D3/5+4+2+1:3 r:1";
  const seventh = "A2+C3+E3+A3/5+4+2+1:3 r:1 C3+E3+A3+C4/5+4+2+1:3 r:1 E3+G3+B3+E4/5+4+2+1:3 r:1 C3+E3+G3+C4/5+4+2+1:3 r:1";
  return [d, d, c, c, d, walk, seventh, ending].join(" | ");
}

/** Legendary's last bar in the left hand: a low D minor fifth and octave. */
const LEGENDARY_LAST_LEFT = "D2+A2+D3/5+2+1:16";

/** The pedal of Epic and Legendary: changed at each half bar, at each chord in bars 6 and 7 of each eight, held through the last bar. */
const PEDAL = Array.from({ length: 24 }, (_, at) => {
  if (at === 23) return "P:16";
  return at % 8 === 5 || at % 8 === 6 ? "P:4 P:4 P:4 P:4" : "P:8 P:8";
}).join(" | ");

export const drunkenSailor: OurSong = {
  slug: "drunken-sailor",
  title: "Drunken Sailor",
  aka: ["What Shall We Do with the Drunken Sailor?", "What Shall We Do with a Drunken Sailor", "Early in the Morning"],
  source: {
    composer: "Traditional",
    died: null,
    published: 1891,
    edition:
      "The verse and chorus as R. R. Terry's The Shanty Book, Part I (1921) prints them, its pages 30 and 31, scanned on Wikimedia Commons as The Shanty Book Part I (IA shantybooksailor00terr).pdf; Davis and Tozer first printed its tune in 1891",
  },
  about:
    "Drunken Sailor is a sea shanty that crews sang while hauling ropes or turning the capstan. " +
    "Nobody knows who wrote it, and its tune is in the Dorian mode.",
  funFact: "The first written account of the shanty comes from a whaling voyage of 1839, out of New London, Connecticut.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE} | ${CHORUS}`,
      left: `${COMMON_LEFT} | ${COMMON_LEFT}`,
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play bars 1 to 8 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the chorus, bars 9 to 16, with the right hand alone. In bars 9, 11 and 13 the first note lasts half a bar.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds one low note for each bar or half bar.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Each half of the bar goes long, short, short. Stamp it like a sailor on the deck." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Finger 5 plays A, then the thumb reaches down to D. The hand stays where it is." },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "Play the last A of bar 5 with finger 2. Fingers 3, 4 and 5 are then ready for B, C and D." },
      ],
      tricky: {
        3: "Finger 4 plays G six times: long, short, short, long, short, short. Keep the short notes light.",
        7: "Finger 5 moves down from D to C. Then fingers 4, 3 and 2 walk down to A, G and E.",
        15: "The chorus ends like the verse. Finger 5 moves down from D to C, and fingers 4, 3 and 2 walk down to A, G and E.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: `${doubled(TUNE)} | ${doubled(CHORUS)}`,
      left: `${bars(OOM_PAH, RARE_CHORDS)} | ${bars(OOM_PAH, RARE_CHORDS.slice(0, -2))} | ${LAST_CHORD}`,
      skills: ["triads", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a low note, then two notes on the next beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "The left hand swings low, high, low, high, like a crew pulling on a rope together." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "After the long high D, finger 5 slides down to C. That is the hand's one move in the verse." },
        { fromBar: 9, toBar: 13, kind: "rhythm", text: "The chorus opens bars 9, 11 and 13 with an A or G held for half a bar. Count it out before the next note." },
      ],
      tricky: {
        3: "Finger 4 plays G six times, while the left hand plays C, then G. Keep both hands even.",
        7: "After the long D, finger 5 moves down to C. The left hand plays C, then F and A, then C and G.",
        15: "The chorus ends like the verse. After the long D, finger 5 moves down to C, and the left hand plays C, F and A, C and G.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [doubled(TUNE), EPIC_CHORUS, EPIC_TUNE_AGAIN].join(" | "),
      left: [
        epicLeft("D3+F3+A3/5+3+1:8 D3+F3+A3/5+3+1:7 r:1"),
        epicLeft("D3+F3+A3/5+3+1:7 r:1 D2+A2+D3/5+2+1:7 r:1"),
        epicLeft(LAST_CHORD),
      ].join(" | "),
      pedal: PEDAL,
      skills: ["position-change", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the left hand alone: a low note on the beat, then the same chord three times.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the chorus, bars 9 to 16, with the right hand alone. In bars 9, 11 and 13 the first note lasts half a bar.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal twice in every bar, and on each new chord in bars 6 and 7." },
        { fromBar: 6, toBar: 6, kind: "fingering", text: "The left hand walks down A, G, F and D. Keep fingers 5, 2 and 1 on each fifth and octave." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is now the top note of each pair. Let the upper finger sing it." },
      ],
      tricky: {
        3: "Finger 4 plays G six times. The left hand plays a low C, then C, E and G together three times.",
        11: "Finger 4 holds G for half a bar, then plays it long and short. The left hand plays a low C, then the chord three times.",
        19: "Fingers 1 and 3 press E and G together, then finger 3 plays G twice alone. The left hand plays a low C, then the chord.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 160,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_OCTAVES, CHORUS_OCTAVES, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [
        legendaryLeft("A2+D3+F3+A3/5+3+2+1:8 A2+D3+F3+A3/5+3+2+1:7 r:1"),
        legendaryLeft("A2+D3+F3+A3/5+3+2+1:7 r:1 D2+D3/5+1:7 r:1"),
        legendaryLeft(LEGENDARY_LAST_LEFT),
      ].join(" | "),
      pedal: PEDAL,
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then the same chord three times, with a short rest to jump.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the right hand's octaves alone. Keep the thumb and finger 5 open, like a fixed frame.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the chorus, bars 9 to 16, with the right hand alone. In bars 9, 11 and 13 the first octave lasts half a bar.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Lift the hand in each short rest, then land on the next octave." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "In bars 6 and 7 the left hand plays a new chord on every half note. Move the whole hand, and keep fingers 5, 4, 2 and 1." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the chords short and bold, like boots on the deck. The top note is the tune." },
      ],
      tricky: {
        4: "The octaves drop from G to C, then climb to E and G. Lift the hand in each rest before the jump.",
        12: "The chorus repeats bar 4. The octaves drop from G to C and climb back, while the left hand plays an octave on C, then the chord.",
        20: "The chords drop from G to C on top, then climb back to G. Finger 5 plays the tune on every chord.",
      },
    },
  },
  de: {
    about:
      "Drunken Sailor ist ein Shanty, ein Seemannslied, das Matrosen beim Ziehen der Taue oder beim Drehen des Ankerspills sangen. " +
      "Niemand weiß, wer es geschrieben hat, und seine Melodie steht in der dorischen Tonart.",
    funFact: "Der erste schriftliche Bericht über den Shanty stammt von einer Walfangfahrt im Jahr 1839, die in New London, Connecticut, begann.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 8 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel den Refrain, die Takte 9 bis 16, nur mit der rechten Hand. In den Takten 9, 11 und 13 dauert der erste Ton einen halben Takt.",
          "Jetzt die linke Hand allein. Sie hält einen tiefen Ton für jeden Takt oder halben Takt.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jede Takthälfte geht lang, kurz, kurz. Stampf sie wie ein Matrose an Deck.",
          "Finger 5 spielt das A, dann greift der Daumen hinunter zum D. Die Hand bleibt, wo sie ist.",
          "Spiel das letzte A in Takt 5 mit Finger 2. Dann sind Finger 3, 4 und 5 bereit für H, C und D.",
        ],
        tricky: {
          3: "Finger 4 spielt sechsmal das G: lang, kurz, kurz, lang, kurz, kurz. Spiel die kurzen Töne leicht.",
          7: "Finger 5 rückt vom D hinunter zum C. Dann gehen Finger 4, 3 und 2 hinunter zu A, G und E.",
          15: "Der Refrain endet wie die Strophe. Finger 5 rückt vom D hinunter zum C, und Finger 4, 3 und 2 gehen hinunter zu A, G und E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann zwei Töne auf dem nächsten Schlag.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand schwingt tief, hoch, tief, hoch, wie eine Mannschaft, die gemeinsam an einem Tau zieht.",
          "Nach dem langen hohen D rutscht Finger 5 hinunter zum C. Das ist der einzige Wechsel der Hand in der Strophe.",
          "Der Refrain beginnt die Takte 9, 11 und 13 mit einem A oder G, das einen halben Takt klingt. Zähl es aus vor dem nächsten Ton.",
        ],
        tricky: {
          3: "Finger 4 spielt sechsmal das G, während die linke Hand C und dann G spielt. Halt beide Hände gleichmäßig.",
          7: "Nach dem langen D rückt Finger 5 hinunter zum C. Die linke Hand spielt C, dann F und A, dann C und G.",
          15: "Der Refrain endet wie die Strophe. Nach dem langen D rückt Finger 5 hinunter zum C, und die linke Hand spielt C, F und A, C und G.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton auf dem Schlag, dann dreimal denselben Akkord.",
          "Spiel den Refrain, die Takte 9 bis 16, nur mit der rechten Hand. In den Takten 9, 11 und 13 dauert der erste Ton einen halben Takt.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal zweimal in jedem Takt, und bei jedem neuen Akkord in den Takten 6 und 7.",
          "Die linke Hand geht hinunter über A, G, F und D. Halt Finger 5, 2 und 1 auf jeder Quinte und Oktave.",
          "Die Melodie ist jetzt der obere Ton jedes Paars. Lass den oberen Finger sie singen.",
        ],
        tricky: {
          3: "Finger 4 spielt sechsmal das G. Die linke Hand spielt ein tiefes C, dann dreimal C, E und G zusammen.",
          11: "Finger 4 hält das G einen halben Takt, dann spielt er es lang und kurz. Die linke Hand spielt ein tiefes C, dann dreimal den Akkord.",
          19: "Finger 1 und 3 drücken E und G zusammen, dann spielt Finger 3 zweimal das G allein. Die linke Hand spielt ein tiefes C, dann den Akkord.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann dreimal denselben Akkord, mit einer kurzen Pause zum Springen.",
          "Spiel die Oktaven der rechten Hand allein. Halt Daumen und Finger 5 offen, wie einen festen Rahmen.",
          "Spiel den Refrain, die Takte 9 bis 16, nur mit der rechten Hand. In den Takten 9, 11 und 13 dauert die erste Oktave einen halben Takt.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Heb die Hand in jeder kurzen Pause, dann lande auf der nächsten Oktave.",
          "In den Takten 6 und 7 spielt die linke Hand auf jeder Halben einen neuen Akkord. Beweg die ganze Hand, und behalt Finger 5, 4, 2 und 1.",
          "Spiel die Akkorde kurz und kräftig, wie Stiefel auf dem Deck. Der obere Ton ist die Melodie.",
        ],
        tricky: {
          4: "Die Oktaven fallen vom G zum C, dann steigen sie zu E und G. Heb die Hand in jeder Pause vor dem Sprung.",
          12: "Der Refrain wiederholt Takt 4. Die Oktaven fallen vom G zum C und steigen zurück, während die linke Hand eine Oktave auf C spielt, dann den Akkord.",
          20: "Die Akkorde fallen oben vom G zum C, dann steigen sie zurück zum G. Finger 5 spielt bei jedem Akkord die Melodie.",
        },
      },
    },
  },
};

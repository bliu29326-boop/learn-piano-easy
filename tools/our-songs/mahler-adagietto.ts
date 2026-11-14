/**
 * *Adagietto*: the first violins' theme from the fourth movement of Mahler's Fifth Symphony, in four
 * versions of ours.
 *
 * The tune is the theme as a scanned book of orchestral themes on Wikimedia Commons prints it on its
 * page 405. The print is in 4/4 and F major, with eighths. After two bars of harp, the first violins
 * enter with three eighths, C, D and E, as an upbeat. The tune is that upbeat and the seven bars after
 * it, to the whole-note G of the last. It writes every eighth as a quarter, so each print bar is a bar of
 * 4/2. Bar 1 holds the upbeat after a rest. The hook is the upbeat bar and the three bars after it.
 *
 * The chords under the tune, one or two per bar, are F, C, D minor and B-flat major, then G major and G
 * minor in bar 5. A D7 in bar 6 leads to G minor, and C major and C7 carry the tune's last G. Every
 * version keeps F major.
 *
 * The next phrase comes from the full score, Edition Peters 9015, which counts the harp's first bar as
 * bar 1. There the first violins hold their G and stop, and the first cellos play the theme's opening
 * again at half speed, in print bars 10 to 16. They start with C, D and E as an upbeat, turn through G
 * sharp and B, and come home to F in bar 16. Our bars 9 to 15 are print bars 10 to 16, one per bar. A
 * note the print ties over a bar line is struck again at the line and runs on into the same note after
 * the breath. The chords follow the cellos' bass and the violas: F, C and F over C, then diminished
 * chords over D and F, and E7 before the close. Common's open fifth under the upbeat's E would rub, so
 * its C comes a half bar early.
 *
 * Common plays the tune and print bars 10 to 12 over single bass notes and open fifths, held, and
 * ends on a bar of F. Bars 13 to 16 of the print hold too many sharps and naturals for Rare, which needs
 * 16 bars. So Rare plays the tune twice, the second time with a second note under its long notes, and
 * ends on a bar of F. Its left hand plays a low note on each beat and a two-note chord on the next.
 *
 * Epic and Legendary play the tune, print bars 10 to 16 and a bar of F, then the tune again, and close
 * on F. They take the harp's figure from the print as their left hand: a short rest, then the chord
 * broken upwards, on each half bar. Epic breaks it in three notes within an octave, with the pedal.
 * Legendary breaks it in five quick notes past the octave and one back. Under the upbeat of bar 9, its
 * C comes a half bar early. Epic plays the tune again with thirds and sixths under its long notes, and
 * Legendary an octave up in chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const F_MAJOR: Key = { tonic: 5, mode: "major" };

/** The tune in 4/2, in quarters, which are the print's eighths: one bar per print bar, after the upbeat. */
const tune = "r:5 C4:1 D4:1 E4:1 | E4:2 F4:3 F4:1 Bb4:1 A4:1 | A4:2 G4:3 G4:1 A4:1 Bb4:1 | C5:3 C5:1 D5:3 C5:1 | C5:2 B4:3 Bb4:1 D5:1 Bb4:1 | Bb4:2 A4:3 C5:1 Bb4:1 F#4:1 | F#4:1 G4:1 Bb4:3 A4:1 G4:1 F4:1 | G4:8";

/** The tune in 4/2 quarters, fingered. The thumb takes the repeated F in bar 2, so the hand never shifts. */
const TUNE_RIGHT = [
  "r:5 C4/1:1 D4/2:1 E4/3:1",
  "E4/3:2 F4/4:3 F4/1:1 Bb4/4:1 A4/3:1",
  "A4/3:2 G4/2:3 G4/2:1 A4/3:1 Bb4/4:1",
  "C5/5:3 C5/4:1 D5/5:3 C5/4:1",
  "C5/4:2 B4/3:3 Bb4/2:1 D5/5:1 Bb4/2:1",
  "Bb4/2:2 A4/1:3 C5/3:1 Bb4/2:1 F#4/1:1",
  "F#4/1:1 G4/2:1 Bb4/4:3 A4/3:1 G4/2:1 F4/1:1",
  "G4/2:8",
].join(" | ");

/**
 * The first cellos' print bars 10 to 16 in 4/2 quarters, fingered, one bar each: the phrase after the
 * tune. The thumb sits on F from bar 11, and the hand moves down for the last bar.
 */
const NEXT = [
  "r:2 C4/1:2 D4/2:2 E4/3:2",
  "E4/3:4 F4/4:4",
  "F4/1:4 Bb4/4:2 A4/3:2",
  "A4/3:4 G#4/2:4",
  "G#4/2:4 C5/5:2 B4/4:2",
  "B4/4:5 A4/3:1 G4/2:1 F4/1:1",
  "E4/5:1 D4/4:1 B3/2:1 F3/1:1 C4/3:4",
];

/**
 * The phrase in 4/2 eighths for Epic and Legendary. The last C ends an eighth early, so the hand can move
 * up to the closing F.
 */
const NEXT_EIGHTHS = inEighths(NEXT.join(" | ")).replace(/C4\/3:8$/, "C4/3:7 r:1");

/** Epic's tune again in 4/2 eighths, with a third or a sixth under its long notes, closing on F. */
const EPIC_AGAIN = [
  "A4/3:6 G4/2:2 F4/1:2 C4/1:2 D4/2:2 E4/3:2",
  "C4+E4/1+3:4 A3+F4/1+5:6 F4/1:2 Bb4/4:2 A4/3:2",
  "F4+A4/1+3:4 G4/2:6 G4/2:2 A4/3:2 Bb4/4:2",
  "A4+C5/2+5:6 C5/5:2 Bb4+D5/3+5:6 C5/4:2",
  "G4+C5/1+4:4 G4+B4/1+3:6 Bb4/2:2 D5/5:2 Bb4/2:2",
  "G4+Bb4/1+3:4 A4/2:6 C5/4:2 Bb4/3:2 F#4/1:2",
  "F#4/1:2 G4/2:2 D4+Bb4/1+5:6 A4/4:2 G4/3:2 F4/2:2",
  "E4+G4/1+3:8 Bb3+E4+G4/1+3+5:8",
  "A3+C4+F4/1+2+5:16",
].join(" | ");

/** Legendary's tune again in 4/2 eighths, an octave up, with its long notes in chords. */
const LEGENDARY_AGAIN = [
  "A4/3:6 G4/2:2 F4/1:2 C5/1:2 D5/2:2 E5/3:2",
  "C5+E5/1+3:4 C5+F5/2+5:6 F5/2:2 Bb5/4:2 A5/3:2",
  "D5+F5+A5/1+2+4:4 G5/3:6 G5/3:2 A5/4:2 Bb5/5:2",
  "F5+A5+C6/1+3+5:6 C6/5:2 F5+Bb5+D6/1+3+5:6 C6/5:2",
  "D5+G5+C6/1+3+5:4 D5+G5+B5/1+3+5:6 Bb5/4:2 D6/5:2 Bb5/3:2",
  "D5+G5+Bb5/1+3+5:4 A5/4:6 C6/5:2 Bb5/4:2 F#5/1:2",
  "F#5/1:2 G5/2:2 D5+G5+Bb5/1+3+5:6 A5/4:2 G5/3:2 F5/2:2",
  "C5+E5+G5/1+2+4:8 Bb4+C5+E5+G5/1+2+3+5:7 r:1",
  "F4+A4+C5+F5/1+2+3+5:16",
].join(" | ");

/**
 * The chords under the tune, two per bar. f, c, d, b, g and G are F, C, D minor, B flat, G minor and
 * G major. C is C7, q is G minor without its third, D is D7, and h is G minor over B flat or D.
 */
const TUNE_CHORDS = "ffcbdcfbGgqDhCcC";

/**
 * The chords under print bars 10 to 16, two per bar. u is F over C, x is D, F, A and B, y is D, F, G
 * sharp and B, E is E7, and z is F, G sharp, B and D.
 */
const NEXT_CHORDS = "ffcuuuxyyEzzEf";

/**
 * Legendary's chords under print bars 10 to 16. Its wide F would rub against the upbeat's E, so C comes
 * a half bar early.
 */
const LEGENDARY_NEXT_CHORDS = NEXT_CHORDS.replace(/^ff/, "fc");

/** Bars of `patterns` from `chords`, such as `"ffcf"`: one letter per half bar, two per bar. */
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

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** Common's left hand in quarters, one bar per entry: an open fifth or one bass note, held. */
const COMMON_LEFT = [
  "F2+C3/5+1:8 | C3/1:4 F2+C3/5+1:4 | A2/3:4 C3/1:4 | F2+C3/5+1:4 Bb2/2:4",
  "G2/4:8 | G2/4:4 C3/1:4 | Bb2/2:4 C3/1:4 | G2+C3/4+1:8",
  "F2+C3/5+1:4 C3/1:4 | C3/1:8 | F2+C3/5+1:8 | F2+C3/5+1:8",
].join(" | ");

/** Rare's half bar in quarters: a low note on the beat, then a two-note chord. */
const PULSE: Record<string, string> = {
  f: "F2/5:2 A2+C3/3+1:2",
  c: "E2/5:2 G2+C3/3+1:2",
  C: "E2/5:2 G2+Bb2+C3/3+2+1:2",
  d: "F2/5:2 A2+D3/3+1:2",
  b: "F2/5:2 Bb2+D3/2+1:2",
  g: "G2/5:2 Bb2+D3/3+1:2",
  q: "G2/5:2 D3+G3/2+1:2",
  D: "D3/2:2 C3/3:2",
  h: "Bb2/4:2 D3+G3/2+1:2",
  k: "C3/2:2 G2+Bb2/4+3:2",
  e: "C3/2:2 G2+E3/4+1:2",
};

/**
 * Rare's tune again in 4/2 quarters, with a second note under the long notes of bars 2 to 6. The print's
 * next phrase has too many sharps and naturals for Rare, so Rare repeats the tune instead.
 */
const RARE_AGAIN = [
  "r:5 C4/1:1 D4/2:1 E4/3:1",
  "C4+E4/1+3:2 F4/4:3 F4/1:1 Bb4/4:1 A4/3:1",
  "F4+A4/1+3:2 G4/2:3 G4/2:1 A4/3:1 Bb4/4:1",
  "A4+C5/3+5:3 C5/4:1 Bb4+D5/3+5:3 C5/4:1",
  "G4+C5/1+4:2 B4/3:3 Bb4/2:1 D5/5:1 Bb4/2:1",
  "G4+Bb4/1+2:2 A4/1:3 C5/3:1 Bb4/2:1 F#4/1:1",
  "F#4/1:1 G4/2:1 Bb4/4:3 A4/3:1 G4/2:1 F4/1:1",
  "G4/2:8",
].join(" | ");

/** Rare's chords under the tune. Bars 7 and 8 play C on the beat, as k and e, so the hand stays near C. */
const RARE_TUNE_CHORDS = TUNE_CHORDS.replace("Gg", "qg").replace("hCcC", "hkee");

/** The three notes, fingered, that Epic breaks upwards for each chord, within an octave. */
const HARP_NOTES: Record<string, string> = {
  f: "F2/5 C3/2 F3/1",
  c: "C2/5 G2/2 C3/1",
  C: "C2/5 G2/2 Bb2/1",
  d: "D2/5 A2/2 D3/1",
  b: "F2/5 Bb2/2 D3/1",
  g: "G2/5 Bb2/3 D3/1",
  G: "G2/5 B2/3 D3/1",
  q: "G2/5 D3/2 G3/1",
  D: "F#2/5 C3/2 D3/1",
  h: "D2/5 G2/2 Bb2/1",
  u: "C2/5 F2/2 A2/1",
  x: "D2/5 F2/3 B2/1",
  y: "D2/5 G#2/2 B2/1",
  E: "E2/5 G#2/3 D3/1",
  z: "F2/5 B2/2 D3/1",
};

/** Epic's half bar in eighths, the harp's figure: a rest, then the chord broken upwards in three notes. */
const HARP: Record<string, string> = {};
for (const [chord, notes] of Object.entries(HARP_NOTES)) {
  HARP[chord] = `r:2 ${notes
    .split(" ")
    .map((note) => `${note}:2`)
    .join(" ")}`;
}

/**
 * The six notes of each chord for Legendary's harp figure: five up from the root, past its octave, then
 * one note back. A chord of four notes takes smaller steps, so finger 3 never stretches over the thumb.
 */
const WIDE_NOTES: Record<string, string> = {
  f: "F2 C3 F3 A3 C4 A3",
  b: "F2 Bb2 D3 F3 Bb3 F3",
  g: "G2 D3 G3 Bb3 D4 Bb3",
  q: "G2 D3 G3 Bb3 D4 Bb3",
  G: "G2 D3 G3 B3 D4 B3",
  c: "C2 G2 C3 E3 G3 E3",
  C: "C2 G2 Bb2 C3 E3 C3",
  d: "D2 A2 D3 F3 A3 F3",
  D: "D2 A2 C3 D3 F#3 D3",
  h: "D2 G2 Bb2 D3 G3 D3",
  u: "C2 F2 A2 C3 F3 C3",
  x: "D2 A2 B2 D3 F3 D3",
  y: "D2 G#2 B2 D3 F3 D3",
  E: "E2 G#2 D3 E3 G#3 E3",
  z: "F2 B2 D3 F3 G#3 F3",
};

/**
 * Legendary's half bar in eighths, the harp's figure wider: a rest, then five notes up and one back.
 * Finger 3 crosses over the thumb halfway.
 */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const fingers = [5, 2, 1, 3, 2, 3];
  WIDE[chord] = `r:2 ${pitches.map((pitch, at) => `${pitch}/${fingers[at]}:1`).join(" ")}`;
}

/**
 * A pedal line of 25 bars in eighths, changed with the first note of the harp's figure on every half bar,
 * then pressed again on the last chord and held.
 */
const PEDAL = ["r:2 P:8 P:6~", ...Array(22).fill("P:2 P:8 P:6~"), "P:2 P:8 P:6", "P:16"].join(" | ");

export const mahlerAdagietto: OurSong = {
  slug: "mahler-adagietto",
  title: "Adagietto",
  aka: ["Mahler Adagietto", "Symphony No. 5", "Sinfonie Nr. 5", "Death in Venice", "Tod in Venedig"],
  source: {
    composer: "Gustav Mahler",
    died: 1911,
    published: 1904,
    edition:
      "Symphony No. 5, Adagietto, the first violins' theme, its upbeat and bars 1 to 7, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 405. The first cellos' bars 10 to 16 after it, with the bass and the harp, from the full score, Edition Peters 9015, 1904, pages 175 and 176, scanned at the Internet Archive",
  },
  about:
    "The Adagietto is the slow fourth movement of Mahler's Fifth Symphony, first played in Cologne in 1904. " +
    "Luchino Visconti's 1971 film Death in Venice made it famous far beyond the concert hall.",
  funFact: "Since that film, it has become the best known music Mahler ever wrote.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: F_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: F_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE_RIGHT} | ${NEXT.slice(0, 3).join(" | ")} | F4/1:8`,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. Bar 5 has a B, and bars 6 and 7 an F sharp.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds each note for half a bar or a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Count five quarters of rest. Then C, D and E lead softly into the tune." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Play the second F with the thumb. Then fingers 4 and 3 reach B flat and A." },
        { fromBar: 1, toBar: 12, kind: "sound", text: "This music is slow and tender. Let every long note sing, and never hurry." },
        { fromBar: 9, toBar: 11, kind: "sound", text: "In bars 9 to 11, the cellos start the tune again at half speed. Hold each note twice as long." },
      ],
      tricky: {
        2: "Finger 3 plays E and finger 4 the first F. Then the thumb takes the second F, so the hand stays still.",
        4: "Play the first C with finger 5, then repeat it with finger 4. Finger 5 then takes D.",
        5: "The B is a white key, and the B flat after it is black. Fingers 3 and 2 play them.",
      },
    },
    rare: {
      key: F_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE_RIGHT} | ${RARE_AGAIN} | F4/1:8`,
      left: `${bars(PULSE, `${RARE_TUNE_CHORDS}${RARE_TUNE_CHORDS}`)} | F2+A2+C3/5+3+1:8`,
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play the left hand alone. A low note comes on the beat, and a chord answers it.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "The left hand plays on every beat: a low note, then a chord. Count it as one, two." },
        { fromBar: 1, toBar: 17, kind: "sound", text: "Keep the left hand very soft, so the tune floats above it." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "From bar 9 the tune comes again, with a second note under its long notes. Press both keys as one." },
        { fromBar: 12, toBar: 12, kind: "fingering", text: "Fingers 3 and 5 press B flat and D together. Let D sing a little more." },
      ],
      tricky: {
        5: "The B is a white key, and the B flat after it is black. The left hand plays only G and D at first.",
        7: "The thumb plays F sharp first and F at the end. The left hand moves from B flat to C halfway.",
        15: "This is bar 7 again. The thumb plays F sharp, then F, and the left hand moves from B flat to C halfway.",
      },
    },
    epic: {
      key: F_MAJOR,
      bpm: 108,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [inEighths(TUNE_RIGHT), NEXT_EIGHTHS, "F4/1:16", EPIC_AGAIN].join(" | "),
      left: `${bars(HARP, `${TUNE_CHORDS}${NEXT_CHORDS}ff${TUNE_CHORDS}`)} | F2+C3+F3/5+2+1:16`,
      pedal: PEDAL,
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone, like the harp: a short rest, then the chord in three notes upwards.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [18, 21], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal as each three-note climb starts, twice in every bar." },
        { fromBar: 9, toBar: 15, kind: "sound", text: "In bars 9 to 15 the cellos sing the tune's start at half speed. Then it turns through G sharp and comes home to F." },
        { fromBar: 18, toBar: 24, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        2: "The left hand waits a short rest, then climbs C, G and C. The right thumb takes the second F.",
        16: "Move the right hand up from C in the short rest, and take F with the thumb. The left hand climbs F, C and F twice.",
        18: "The thumb drops from C to A for the sixth. Then it moves up to F for the single notes.",
      },
    },
    legendary: {
      key: F_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [inEighths(TUNE_RIGHT), NEXT_EIGHTHS, "F4/1:16", LEGENDARY_AGAIN].join(" | "),
      left: `${bars(WIDE, `${TUNE_CHORDS}${LEGENDARY_NEXT_CHORDS}ff${TUNE_CHORDS}`)} | F2+C3+F3/5+2+1:16`,
      pedal: PEDAL,
      skills: ["arpeggios", "sixteenth-notes", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: a short rest, then five notes up and one back, on every half bar.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand alone on bars 9 to 16. Finger 3 crosses over the thumb in every climb.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [18, 21], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Use the short rest at the start of each half bar to jump down to the next low note." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the harp's climbs flow softly under the cellos' phrase, and change the pedal on each new chord." },
        { fromBar: 18, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        6: "The left hand climbs from G to the D above middle C. Then it jumps down to D for the next climb.",
        16: "Move the right hand up from C in the short rest, and take F with the thumb. The left hand climbs from F twice.",
        22: "The right hand holds a chord with B flat on top, then the thumb reaches down to F sharp.",
      },
    },
  },
  de: {
    about:
      "Das Adagietto ist der langsame vierte Satz von Mahlers Fünfter Sinfonie, die 1904 in Köln zum ersten Mal erklang. " +
      "Luchino Viscontis Film Tod in Venedig von 1971 machte es weit über den Konzertsaal hinaus berühmt.",
    funFact: "Seit diesem Film ist es die bekannteste Musik, die Mahler je geschrieben hat.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. In Takt 5 kommt ein H, in den Takten 6 und 7 ein Fis.",
          "Jetzt die linke Hand allein. Sie hält jeden Ton einen halben oder einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl fünf Viertel Pause. Dann führen C, D und E leise in die Melodie.",
          "Spiel das zweite F mit dem Daumen. Dann erreichen Finger 4 und 3 das B und das A.",
          "Diese Musik ist langsam und zart. Lass jeden langen Ton singen, und eil nie.",
          "In den Takten 9 bis 11 beginnen die Celli die Melodie noch einmal, halb so schnell. Halt jeden Ton doppelt so lang.",
        ],
        tricky: {
          2: "Finger 3 spielt das E und Finger 4 das erste F. Dann nimmt der Daumen das zweite F, und die Hand bleibt still.",
          4: "Spiel das erste C mit Finger 5, und wiederhol es mit Finger 4. Dann nimmt Finger 5 das D.",
          5: "Das H ist eine weiße Taste, und das B danach ist schwarz. Finger 3 und 2 spielen sie.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein tiefer Ton, und ein Akkord antwortet.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt auf jedem Schlag: erst einen tiefen Ton, dann einen Akkord. Zähl dazu eins, zwei.",
          "Spiel die linke Hand sehr leise, damit die Melodie darüber schwebt.",
          "Ab Takt 9 kommt die Melodie noch einmal, mit einem zweiten Ton unter ihren langen Tönen. Drück beide Tasten wie eine.",
          "Finger 3 und 5 drücken B und D zusammen. Lass das D etwas mehr singen.",
        ],
        tricky: {
          5: "Das H ist eine weiße Taste, und das B danach ist schwarz. Die linke Hand spielt zuerst nur G und D.",
          7: "Der Daumen spielt zuerst das Fis und am Ende das F. Die linke Hand wechselt in der Mitte vom B zum C.",
          15: "Das ist noch einmal Takt 7. Der Daumen spielt das Fis, dann das F, und die linke Hand wechselt in der Mitte vom B zum C.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, wie die Harfe: eine kurze Pause, dann den Akkord in drei Tönen aufwärts.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal, wenn jeder Aufstieg aus drei Tönen beginnt, zweimal in jedem Takt.",
          "In den Takten 9 bis 15 singen die Celli den Anfang der Melodie halb so schnell. Dann geht sie über das Gis und kehrt heim zum F.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          2: "Die linke Hand wartet eine kurze Pause und steigt dann über C, G und C. Der rechte Daumen nimmt das zweite F.",
          16: "Führ die rechte Hand in der kurzen Pause vom C hinauf, und nimm das F mit dem Daumen. Die linke Hand steigt zweimal über F, C und F.",
          18: "Der Daumen fällt für die Sexte vom C zum A. Dann geht er für die einzelnen Töne hinauf zum F.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine kurze Pause, dann fünf Töne aufwärts und einen zurück, in jedem halben Takt.",
          "Spiel die linke Hand allein in den Takten 9 bis 16. Finger 3 kreuzt bei jedem Aufstieg über den Daumen.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause am Anfang jedes halben Takts, um hinunter zum nächsten tiefen Ton zu springen.",
          "Lass die Aufstiege der Harfe leise unter der Melodie der Celli fließen, und wechsle das Pedal bei jedem neuen Akkord.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          6: "Die linke Hand steigt vom G bis zum D über dem mittleren C. Dann springt sie für den nächsten Aufstieg hinunter zum D.",
          16: "Führ die rechte Hand in der kurzen Pause vom C hinauf, und nimm das F mit dem Daumen. Die linke Hand steigt zweimal vom F hinauf.",
          22: "Die rechte Hand hält einen Akkord mit dem B oben. Dann greift der Daumen hinunter zum Fis.",
        },
      },
    },
  },
};

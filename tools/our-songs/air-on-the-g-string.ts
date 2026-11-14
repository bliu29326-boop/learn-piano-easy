/**
 * *Air on the G String*: the opening of the Air from Bach's Orchestral Suite No. 3, in four versions of
 * ours.
 *
 * The tune is the first violin's bars 1 to 4, with the grace notes dropped. The print is in 4/4 and D
 * major, with sixteenths. The tune makes every sixteenth a quarter, so Common needs nothing faster, and
 * reads each print bar as one bar of 4/1. The hook is its first two bars: the long F sharp, the fall from
 * B, and the step down to A. Every version writes the tune in 4/2, two bars per print bar, and a note held
 * across one of its bar lines ends at the line.
 *
 * After the tune, every version plays the first violin's next bar, the print's bar 5. It ends on the
 * chord that leads to the dominant. Epic and Legendary go on with bar 7, the second ending, which closes
 * the first half on the dominant. Bar 7 would take Common and Rare past their longest time, so they stop
 * after bar 5. Every version then ends on a bar of the home chord.
 *
 * The bass follows the print's continuo, one chord per print beat. Common and Rare move the tune down to
 * C major, Wilhelmj's key. Epic and Legendary are written in C major too, then moved up to the print's D
 * major.
 *
 * Common plays the tune once over held bass notes. It drops one A and lifts the hand off C for a moment, so
 * the hand moves down to B after a rest. In bar 5 it merges the two shortest notes into one. Rare plays the
 * tune twice over a bass note and a two-note chord. Epic and Legendary take the continuo's own walking
 * bass, whose eighths leap by octaves and become half notes here. Epic plays it as written, with the
 * pedal. Legendary doubles each note an octave below, with a short rest for each leap. Epic plays the tune
 * again in thirds and sixths. Legendary's second time is an octave up, with four-note chords on the long
 * notes and thirds and sixths between them. Epic and Legendary strike the long first note again in bar 2.
 *
 * Under the tune's first beat of bar 2, the print puts G in the bass against the held F sharp. Common and
 * Rare may not rub a semitone, so they put the chord's third in the bass there. Epic and Legendary keep the
 * rub in bars 3 and 11, and their guides mark it. Legendary also marks its bar 17. There its chord's held D
 * rubs against the bass's C sharp, as the viola's D does in the print.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The key Common and Rare move to, and the key every line is written in. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "F#5:16 | F#5:2 B5:1 G5:1 E5:1 D5:1 C#5:1 D5:1 C#5:4 A4:4 | A5:9 F#5:1 C5:1 B4:1 E5:1 D#5:1 A5:1 G5:1 | " +
  "G5:9 E5:1 B4:1 A4:1 D5:1 C#5:1 G5:1 F#5:1";

/** The pitch class of each note letter. */
const LETTERS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The name of each pitch class, spelt with sharps. */
const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/** `text` a whole tone up, every note spelt with sharps, so a line in C major reads in D major. */
function wholeToneUp(text: string): string {
  return text.replace(/([A-G])([#b]?)(\d)(?=[/:+])/g, (_, letter: string, accidental: string, octave: string) => {
    const pitch = 12 * (Number(octave) + 1) + (LETTERS[letter] ?? 0) + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0) + 2;
    return `${SHARP_NAMES[pitch % 12]}${Math.floor(pitch / 12) - 1}`;
  });
}

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/**
 * The first violin's bar 5 in C major, in eighths, fingered: the phrase after the tune, which ends on the
 * chord that leads to the dominant.
 */
const NEXT_BAR = "E5/3:12 F#5/4:2 G5/5:2 | C5/1:4 C5/1:1 D5/2:1 E5/3:4 D5/2:2 D5/2:2 C5/1:2";

/** The first violin's bar 7 in C major, in eighths, fingered: the close of the first half on the dominant. */
const CADENCE_BAR = "B4/3:2 A4/2:2 A4/2:1 B4/3:1 C5/4:6 B4/3:2 A4/2:2 | G4/1:16";

/** Common's right hand in C major, in eighths: the tune once, bar 5 of the print, then the home note. */
const COMMON_RIGHT = [
  "E5/2:16 | r:16 | E5/2:4 A5/5:2 F5/3:2 D5/2:2 C5/1:1 r:1 B4/2:2 C5/3:2 | B4/2:8 G4/1:4 r:4",
  "G5/5:16 | r:2 E5/3:2 Bb4/1:4 D5/3:2 C#5/2:2 G5/5:2 F5/4:2 | F5/5:16 | r:2 D5/4:2 A4/2:2 G4/1:2 C5/3:2 B4/2:2 F5/5:2 E5/4:2",
  "E5/3:12 F#5/4:2 G5/5:2 | C5/1:4 D5/2:2 E5/3:4 D5/2:2 D5/2:2 C5/1:2 | C5/1:16",
].join(" | ");

/** The continuo's walking bass in C major, one bar of ours per string: the print's bars 1 to 4, a half bar each. */
const WALK = ["C3 C4 B3 B2", "A2 A3 G3 G2", "F2 F3 F#3 F#2", "G2 G3 F3 F2", "E2 E3 D3 D2", "C#2 C#3 A2 A3", "D2 D3 C3 C2", "B1 B2 G2 G3"];

/** The continuo's bars 5 and 7 in C major, a half bar each, then the last note of bar 7, which fills a bar. */
const WALK_NEXT = ["C3 C4 B3 B2", "A2 A3 F#3 D3", "G3 C3 D3 D2"];

/**
 * Epic's walking bass under the tune in C major, each note a half note, fingered. Finger 5 takes the low
 * notes and the thumb the high ones. Bar 6 ends early, so the hand can leap down to D.
 */
const EPIC_WALK = [
  "C3/5:4 C4/1:4 B3/1:4 B2/5:4",
  "A2/5:4 A3/1:4 G3/1:4 G2/5:4",
  "F2/5:4 F3/1:4 F#3/1:4 F#2/5:4",
  "G2/5:4 G3/1:4 F3/1:4 F2/5:4",
  "E2/5:4 E3/1:4 D3/1:4 D2/5:4",
  "C#2/5:4 C#3/1:4 A2/5:4 A3/1:3 r:1",
  "D2/5:4 D3/1:4 C3/1:4 C2/5:4",
  "B1/5:4 B2/1:4 G2/5:4 G3/1:4",
].join(" | ");

/** Epic's walking bass under bars 5 and 7 of the print, in C major, fingered. */
const EPIC_WALK_NEXT = "C3/5:4 C4/1:4 B3/1:4 B2/5:4 | A2/5:4 A3/1:4 F#3/2:4 D3/4:4 | G3/1:4 C3/5:4 D3/1:4 D2/5:4 | G2/5:14 r:2";

/** A note name an octave lower. */
function octaveDown(name: string): string {
  return name.replace(/(-?\d)$/, (octave) => String(Number(octave) - 1));
}

/** One bar of the walking bass in octaves: each note doubled below, held three eighths, so the hand leaps in the rest. */
function octaveWalk(notes: string): string {
  return notes
    .split(" ")
    .map((note) => `${octaveDown(note)}+${note}/5+1:3 r:1`)
    .join(" ");
}

/** Rare's right hand in C major, in eighths: the whole tune once. */
const RARE_TUNE = [
  "E5/2:16 | r:16 | E5/2:4 A5/5:2 F5/3:2 D5/2:2 C5/1:1 r:1 B4/2:2 C5/3:2 | B4/2:8 G4/1:8",
  "G5/5:16 | r:2 E5/5:2 Bb4/2:2 A4/1:2 D5/3:2 C#5/2:2 G5/5:2 F5/4:2 | F5/5:16 | r:2 D5/4:2 A4/2:2 G4/1:2 C5/3:2 B4/2:2 F5/5:2 E5/4:2",
].join(" | ");

/** Rare's left hand in C major, in eighths: a bass note, then a two-note chord, for each chord of the print. */
const RARE_BASS = [
  "C3/5:4 E3+G3/2+1:4 B2/5:4 D3+G3/2+1:4 | A2/5:4 C3+E3/2+1:4 G2/5:4 C3+E3/2+1:4",
  "A2/5:4 C3+F3/2+1:4 F#2/5:4 A2+D3/2+1:4 | G2/5:4 B2+D3/2+1:4 F2/5:4 B2+D3/2+1:4",
  "E2/5:4 G2+C3/2+1:4 G2/5:4 D3+G3/2+1:4 | A2/5:4 E3+G3/2+1:4 D3/5:4 F3+A3/2+1:4",
  "D3/5:4 F3+A3/2+1:4 C3/5:4 F3+A3/2+1:4 | B2/5:4 D3+G3/2+1:4 G2/5:4 C3+G3/2+1:4",
].join(" | ");

/** The whole tune in C major, one note at a time, in eighths, for Epic and Legendary. */
const SINGLE_TUNE = [
  "E5/3:16 | E5/3:16 | E5/3:4 A5/5:2 F5/4:2 D5/3:2 C5/2:2 B4/1:2 C5/2:2 | B4/1:8 G4/1:8",
  "G5/5:16 | r:2 E5/4:2 Bb4/2:2 A4/1:2 D5/3:2 C#5/2:2 G5/5:2 F5/4:2 | F5/5:16 | r:2 D5/4:2 A4/2:2 G4/1:2 C5/3:2 B4/2:2 F5/5:2 E5/4:2",
].join(" | ");

/** The tune's bars 3 to 8 in C major in thirds and sixths, in eighths, for Epic and Legendary. */
const THIRDS_FROM_BAR_3 = [
  "C5+E5/1+3:4 F5+A5/3+5:2 A4+F5/1+4:2 F#4+D5/1+4:2 A4+C5/2+3:2 G4+B4/1+2:2 A4+C5/2+3:2",
  "G4+B4/1+3:8 G4/1:8",
  "E5+G5/2+5:8 Bb4+G5/1+5:8",
  "r:2 C#5+E5/3+5:2 G4+Bb4/1+2:2 A4/1:2 F4+D5/1+5:2 A4+C#5/1+3:2 C#5+G5/2+5:2 D5+F5/2+4:2",
  "A4+F5/1+5:16",
  "r:2 B4+D5/3+5:2 F4+A4/1+2:2 G4/1:2 C5/4:2 G4+B4/1+3:2 D5+F5/3+5:2 C5+E5/2+4:2",
].join(" | ");

/** Legendary's walking bass under the tune in C major, in octaves. */
const LEGENDARY_WALK = WALK.map(octaveWalk).join(" | ");

/**
 * Legendary's walking bass under bars 5 and 7 of the print, in octaves. The last note of bar 7 ends early,
 * so the hand can leap.
 */
const LEGENDARY_WALK_NEXT = `${WALK_NEXT.map(octaveWalk).join(" | ")} | G1+G2/5+1:14 r:2`;

/** The pedal under the tune in eighths: changed with each chord, two per bar, and on the last beat of bar 8. */
const PEDAL_TUNE = [...Array(7).fill("P:8 P:8"), "P:8 P:4 P:4"].join(" | ");

/** The pedal under bars 5 and 7 of the print and the last chord: changed with each chord. */
const PEDAL_END = "P:8 P:8 | P:8 P:8 | P:4 P:4 P:8 | P:16 | P:16";

export const airOnTheGString: OurSong = {
  slug: "air-on-the-g-string",
  title: "Air on the G String",
  aka: ["Air", "Orchestral Suite No. 3", "BWV 1068", "Air auf der G-Saite"],
  source: {
    composer: "Johann Sebastian Bach",
    died: 1750,
    published: 1871,
    edition:
      "Orchestral Suite No. 3 in D major, BWV 1068, Air, the first violin's bars 1 to 5 and 7 over the continuo, in the Bach-Gesellschaft edition as the Mutopia Project typesets it. The year is that of August Wilhelmj's arrangement, which gave the piece its name",
  },
  about:
    "Bach wrote this Air as a slow movement of his third Orchestral Suite. " +
    "In 1871 the violinist August Wilhelmj arranged it so a violin could play the whole tune on its lowest string, the G string. " +
    "The film Se7en (1995) plays it while two detectives look through crime photographs.",
  funFact: 'Wilhelmj wrote "auf der G-Saite", on the G string, above the violin part, and that gave the piece its nickname.',
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: D_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 96,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: COMMON_RIGHT,
      left: [
        "C3/1:8 B2/2:8 | A2/3:8 G2/4:8 | A2/3:8 D3/1:8 | G2/4:8 F2/5:8",
        "C3/2:8 D3/1:8 | C#3/2:8 D3/1:8 | D3/1:8 C3/2:8 | B2/3:8 G2/5:8",
        "C3/1:8 B2/2:8 | A2/3:8 D3/1:8 | C3/2:16",
      ].join(" | "),
      skills: ["held-bass", "position-change"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune leaps down and climbs back up.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one bass note at a time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Hold the first E for a whole bar and listen. A violin sings this note on one long bow." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Lift the thumb off C for a moment. Then finger 2 lands on B, and the hand stays there." },
        { fromBar: 5, toBar: 8, kind: "rhythm", text: "Each long note fills a whole bar. Count eight slow beats, then wait one more before the next note." },
      ],
      tricky: {
        3: "Lift the thumb off C for a moment, then play B with finger 2.",
        8: "After the rest, finger 4 plays D. Then the thumb reaches down to G.",
        9: "After the rest, move the hand up: finger 3 takes E. Then fingers 4 and 5 climb to F sharp and G.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 108,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [RARE_TUNE, RARE_TUNE, NEXT_BAR, "C5+E5/1+3:16"].join(" | "),
      left: [
        RARE_BASS,
        RARE_BASS,
        "C3/5:4 E3+G3/2+1:4 B2/5:4 D3/2:4 | A2/5:4 C3+E3/2+1:4 F#2/5:4 A2+D3/2+1:2 r:2 | C3+E3+G3/5+3+1:16",
      ].join(" | "),
      skills: ["two-note-chords", "position-change"],
      practice: [
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. The bass note comes first, and the two-note chord answers it.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written. The tune comes twice.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "The bass walks down one step at a time under the long E. Keep it soft and smooth." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "Lift the thumb off C for a moment, so finger 2 can land on B." },
        { fromBar: 17, toBar: 18, kind: "rhythm", text: "Bars 17 and 18 play Bach's next bar. Play the quick C and D of bar 18 lightly, then land on E." },
      ],
      tricky: {
        6: "After the rest, finger 5 takes E. Then fingers 2 and 1 play B flat and A.",
        14: "The same move as bar 6: finger 5 on E, then B flat with finger 2.",
        19: "The right hand plays C and E together. The left hand spreads over C, E and G with fingers 5, 3 and 1.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 88,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: wholeToneUp(
        [
          SINGLE_TUNE,
          "C5+E5/1+3:8 G4+E5/1+4:8 | C5+E5/1+3:16",
          THIRDS_FROM_BAR_3,
          NEXT_BAR,
          CADENCE_BAR,
          "G4+C5+E5/1+2+4:16",
        ].join(" | "),
      ),
      left: wholeToneUp([EPIC_WALK, EPIC_WALK, EPIC_WALK_NEXT, "C3+E3+G3/5+3+1:16"].join(" | ")),
      pedal: [PEDAL_TUNE, PEDAL_TUNE, PEDAL_END].join(" | "),
      markedClashBars: [3, 11],
      skills: ["pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the walking bass alone. Finger 5 takes each low note, and the thumb each high one.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "The bass walks in steady half notes and leaps by octaves, as Bach's cellos do. Keep it soft and even." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "The G in the bass rubs against the F sharp above it. Bach wrote this rub, so let it ring." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        7: "Use the short rest at the end of bar 6 to leap the left hand down to the low E with finger 5.",
        14: "Play each pair as one, and let the top finger sing the tune. The thumb takes most of the lower notes.",
        15: "Hold B and G with the thumb and finger 5 for the whole bar. The left hand leaps down to the low E before it.",
      },
    },
    legendary: {
      key: D_MAJOR,
      bpm: 84,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: wholeToneUp(
        [
          SINGLE_TUNE,
          "r:2 E5+G5+C6+E6/1+2+3+5:6 E5+G5+B5+E6/1+2+3+5:8 |E5+A5+C6+E6/1+2+3+5:14 r:2",
          octaveUp(THIRDS_FROM_BAR_3),
          "G5+C6+E6/1+2+3:12 F#6/4:2 G6/5:2 | C6/1:4 C6/1:1 D6/2:1 E6/3:4 D6/2:2 D6/2:2 C6/1:2",
          "B5/2:2 A5/1:2 A5/1:1 B5/2:1 C6/3:6 B5/2:2 A5/1:1 r:1 | B4+D5+G5/1+2+5:16",
          "C5+E5+G5+C6/1+2+3+5:16",
        ].join(" | "),
      ),
      left: wholeToneUp([LEGENDARY_WALK, LEGENDARY_WALK, LEGENDARY_WALK_NEXT, "C2+G2+C3/5+2+1:16"].join(" | ")),
      pedal: [PEDAL_TUNE, PEDAL_TUNE, PEDAL_END].join(" | "),
      markedClashBars: [3, 11, 17],
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone. It walks in octaves, and leaps in the short rest after each one.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's chords alone on bars 9 and 10, and let the top finger sing.", hands: "right", speed: 0.5, loop: [9, 10], wait: true },
        { text: "Play the second half with both hands, slowly. The tune is an octave higher there.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "fingering", text: "Keep finger 5 and the thumb spread an octave apart, and move the whole hand from note to note." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "The G in the bass rubs against the F sharp above it. Bach wrote this rub, so let it ring." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        7: "The left hand leaps down to the octave on E. Lift each octave a little early, so the hand travels in the rest.",
        9: "Use the rest at the start to move the hand an octave up. Then grab four notes with fingers 1, 2, 3 and 5.",
        15: "Hold B and G with the thumb and finger 5 for the whole bar, while the left hand leaps down to the octave on E.",
      },
    },
  },
  de: {
    about:
      "Bach schrieb dieses Air als langsamen Satz seiner dritten Orchestersuite. " +
      "1871 bearbeitete der Geiger August Wilhelmj es so, dass eine Geige die ganze Melodie auf ihrer tiefsten Saite spielen kann, der G-Saite. " +
      "Der Film Sieben (Se7en, 1995) spielt es, während zwei Ermittler Tatortfotos ansehen.",
    funFact: 'Wilhelmj schrieb "auf der G-Saite" über die Geigenstimme, und daher hat das Stück seinen Spitznamen.',
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie springt hinab und steigt wieder hinauf.",
          "Jetzt die linke Hand allein. Sie hält immer einen Basston.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste E einen ganzen Takt lang und hör zu. Eine Geige singt diesen Ton mit einem langen Bogenstrich.",
          "Heb den Daumen kurz vom C. Dann landet Finger 2 auf dem H, und die Hand bleibt dort.",
          "Jeder lange Ton füllt einen ganzen Takt. Zähl acht langsame Schläge, dann warte noch einen bis zum nächsten Ton.",
        ],
        tricky: {
          3: "Heb den Daumen kurz vom C, dann spiel das H mit Finger 2.",
          8: "Nach der Pause spielt Finger 4 das D. Dann greift der Daumen hinab zum G.",
          9: "Rück die Hand nach der Pause hinauf: Finger 3 nimmt das E. Dann steigen Finger 4 und 5 zu Fis und G.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Zuerst kommt der Basston, dann antwortet der Zweiklang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert. Die Melodie kommt zweimal.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Unter dem langen E geht der Bass Schritt für Schritt abwärts. Spiel ihn leise und gebunden.",
          "Heb den Daumen kurz vom C, damit Finger 2 auf dem H landen kann.",
          "Die Takte 17 und 18 spielen Bachs nächsten Takt. Spiel das schnelle C und D in Takt 18 leicht, dann lande auf dem E.",
        ],
        tricky: {
          6: "Nach der Pause nimmt Finger 5 das E. Dann spielen Finger 2 und 1 das B und das A.",
          14: "Dieselbe Bewegung wie in Takt 6: Finger 5 auf das E, dann das B mit Finger 2.",
          19: "Die rechte Hand spielt C und E zusammen. Die linke Hand spannt sich mit Finger 5, 3 und 1 über C, E und G.",
        },
      },
      epic: {
        practice: [
          "Spiel den schreitenden Bass allein. Finger 5 nimmt jeden tiefen Ton, der Daumen jeden hohen.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Der Bass schreitet in ruhigen Halben und springt in Oktaven, wie Bachs Celli. Spiel ihn leise und gleichmäßig.",
          "Das G im Bass reibt sich am Fis darüber. Bach hat diese Reibung so geschrieben, also lass sie klingen.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          7: "Nutz die kurze Pause am Ende von Takt 6, um die linke Hand mit Finger 5 hinab zum tiefen E springen zu lassen.",
          14: "Spiel jedes Paar wie einen Ton, und lass den oberen Finger die Melodie singen. Der Daumen nimmt die meisten unteren Töne.",
          15: "Halt H und G mit Daumen und Finger 5 den ganzen Takt. Die linke Hand springt davor hinab zum tiefen E.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Sie schreitet in Oktaven und springt in der kurzen Pause nach jeder.",
          "Spiel die Akkorde der rechten Hand in den Takten 9 und 10 allein, und lass den obersten Finger singen.",
          "Spiel die zweite Hälfte langsam mit beiden Händen. Dort liegt die Melodie eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Halt Finger 5 und den Daumen eine Oktave weit gespreizt, und bewege die ganze Hand von Ton zu Ton.",
          "Das G im Bass reibt sich am Fis darüber. Bach hat diese Reibung so geschrieben, also lass sie klingen.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          7: "Die linke Hand springt hinab zur Oktave auf E. Heb jede Oktave etwas früher ab, damit die Hand in der Pause reist.",
          9: "Nutz die Pause am Anfang, um die Hand eine Oktave höher zu setzen. Dann greif vier Töne mit Finger 1, 2, 3 und 5.",
          15: "Halt H und G mit Daumen und Finger 5 den ganzen Takt, während die linke Hand hinab zur Oktave auf E springt.",
        },
      },
    },
  },
};

/**
 * *Symphony No. 7: Allegretto*: the opening of the second movement of Beethoven's Seventh Symphony, in four
 * versions of ours.
 *
 * The tune is the top voice of the low strings' chords in the movement's print bars 3 to 10. The print is in
 * 2/4 with eighths, an octave lower. The tune doubles every length into 4/4, so its eighths are quarters and
 * Common needs nothing faster. Each bar of 4/4 is one bar of the print. The hook is all eight bars, and their
 * rhythm of long, short, short, long, long is the piece.
 *
 * Those bars come from Wikipedia's printed opening, and every bar after them from the Mutopia Project's
 * typeset of the full score. Every version goes on with the theme's next phrase, the print's bars 11 to 18.
 * Its tune climbs from G to B and from F sharp to A, then repeats E and climbs to A. It ends on A minor.
 *
 * Common plays the tune and the next phrase over held bass notes and open fifths, and its hand never moves.
 * Rare plays the tune twice over triads with the pedal, the second time with a low note and a chord in turns.
 * Its bars 17 to 24 play the next phrase in the same pattern. In bar 22, Rare and Epic hold E major for the
 * whole bar, where the print turns to A minor halfway, so the pedal can hold the bar.
 *
 * Epic and Legendary take two figures from the print. The first is the chords of bars 3 to 10, in the tune's
 * long, short, short, long, long rhythm. The second is the cellos' figure under the theme's third statement,
 * print bars 51 to 66: a rest, two notes climbing, then a low note. Epic plays the tune over the violas'
 * thirds and sixths, with the bass in the first figure. Its bars 9 to 16 play the tune in three-note chords
 * over the second figure of print bars 51 to 58. Its bars 17 to 24 play the next phrase in three-note chords
 * over the figure of print bars 59 to 66. Legendary plays the tune in octaves over octave chords in the first
 * figure. Its bars 9 to 16 play it in four-note chords over the second figure of print bars 51 to 58. Its
 * bars 17 to 24 play the next phrase in four-note chords over octave chords in the first figure.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in quarters: the print's eight bars with every length doubled. */
const tune =
  "E4:2 E4:1 E4:1 | E4:2 E4:2 | E4:2 E4:1 E4:1 | E4:2 E4:2 | E4:2 E4:1 F#4:1 | G4:2 G4:2 | G4:2 G4:1 G4:1 | G4:2 r:2";

/** The tune in the right hand, in quarters, fingered from the thumb on E. The hand never moves. */
const RIGHT_TUNE =
  "E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2 | E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2 | " +
  "E4/1:2 E4/1:1 F#4/2:1 | G4/3:2 G4/3:2 | G4/3:2 G4/3:1 G4/3:1 | G4/3:2 r:2";

/**
 * The next phrase's first seven bars in the right hand, in quarters: the print's bars 11 to 17, with every
 * length doubled. The hand stays where the tune left it, with the thumb on E and finger 5 on B.
 */
const RIGHT_NEXT =
  "G4/3:2 G4/3:1 A4/4:1 | B4/5:2 B4/5:2 | F#4/2:2 F#4/2:1 G#4/3:1 | A4/4:2 A4/4:2 | " +
  "E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2 | E4/1:2 F#4/2:1 G#4/3:1";

/** One bar of a chord in eighths, in the tune's long, short, short rhythm. */
function longShortShort(chord: string): string {
  return `${chord}:4 ${chord}:2 ${chord}:2`;
}

/** One bar of a chord in eighths, as two long notes. */
function longLong(chord: string): string {
  return `${chord}:4 ${chord}:4`;
}

/** One bar of a chord in eighths, long, short, short, with an eighth's rest at its end for the hand to travel. */
function detachedLongShortShort(chord: string): string {
  return `${chord}:4 ${chord}:2 ${chord}:1 r:1`;
}

/** One bar of a chord in eighths, long, long, with an eighth's rest at its end for the hand to travel. */
function detachedLongLong(chord: string): string {
  return `${chord}:4 ${chord}:3 r:1`;
}

/** One bar of the cellos' figure in eighths: a quarter's rest, two notes climbing, then a low note, a quarter each. */
function climbAndLow(low: string, first: string, second: string): string {
  return `r:2 ${first}/2:2 ${second}/1:2 ${low}/5:2`;
}

/** The pedal for the tune's eight bars in eighths: changed on every bar line and at every new chord. */
const PEDAL_TUNE = "P:8 | P:8 | P:8 | P:8 | P:6 P:2 | P:8 | P:4 P:2 P:2 | P:8";

/** The pedal for Epic's next phrase in eighths, changed where bar 20 turns from A major to A minor. */
const EPIC_PEDAL_NEXT = "P:8 | P:8 | P:8 | P:4 P:4 | P:8 | P:8 | P:8 | P:8";

/** The pedal for Legendary's next phrase in eighths, changed at every new chord. */
const LEGENDARY_PEDAL_NEXT = "P:8 | P:8 | P:8 | P:4 P:4 | P:8 | P:4 P:4 | P:8 | P:8";

/** The cellos' figure of print bars 51 to 58, under the tune's eight bars, an octave lower. */
const FIGURE_TUNE = [
  climbAndLow("E2", "A2", "C3"),
  climbAndLow("E2", "G#2", "B2"),
  climbAndLow("E2", "G#2", "B2"),
  climbAndLow("E2", "A2", "C3"),
  climbAndLow("C2", "A2", "C3"),
  climbAndLow("C2", "G2", "C3"),
  climbAndLow("G2", "B2", "D3"),
  climbAndLow("C2", "G2", "C3"),
].join(" | ");

/** The cellos' figure of print bars 59 to 66, under the next phrase, an octave lower. */
const FIGURE_NEXT = [
  climbAndLow("E2", "C3", "E3"),
  climbAndLow("B1", "F#2", "B2"),
  climbAndLow("D2", "B2", "D3"),
  climbAndLow("A1", "E2", "A2"),
  climbAndLow("E2", "A2", "E3"),
  climbAndLow("E2", "B2", "E3"),
  climbAndLow("E2", "B2", "E3"),
  climbAndLow("A2", "C3", "E3"),
].join(" | ");

export const beethoven7Allegretto: OurSong = {
  slug: "beethoven-7-allegretto",
  title: "Symphony No. 7: Allegretto",
  aka: ["Beethoven 7", "Symphony No. 7"],
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1816,
    edition:
      "Symphony No. 7 in A major, Op. 92, second movement: its opening bars as Wikipedia's article on the symphony prints them, " +
      "and the Mutopia Project's typeset of the full score after the Litolff edition (BeethovenLv/O92/Symphony7_2)",
  },
  about:
    "Beethoven wrote his Seventh Symphony in 1811 and 1812. " +
    "At its premiere in Vienna in December 1813, the audience demanded to hear the Allegretto again. " +
    "The film The King's Speech (2010) plays it under the King's wartime radio speech.",
  funFact: "The tune first sounds low, in the violas and cellos.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: A_MINOR, hookBars: [1, 8] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: `${RIGHT_TUNE} | ${RIGHT_NEXT} | A4/4:4`,
      left: [
        "A2+E3/4+1:4 | B2+E3/3+1:4 | B2+E3/3+1:4 | A2+E3/4+1:4",
        "A2+E3/4+1:4 | G2+C3/5+2:4 | G2/5:4 | C3/2:4",
        "C3/2:4 | B2/3:4 | B2/3:4 | A2+E3/4+1:4",
        "A2+E3/4+1:4 | B2+E3/3+1:2 A2+E3/4+1:2 | B2+E3/3+1:4 | A2+E3/4+1:4",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 8 with the right hand alone. Your thumb plays every E, and the tune climbs to G.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The tune climbs to B, then comes back to E.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds one shape in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: 'Say "long, short, short" as you play the first bar. That rhythm is the whole piece.' },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "Your hand never moves. Fingers 1, 2 and 3 play E, F sharp and G." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Start very softly, and let each bar grow a little louder." },
      ],
      tricky: {
        1: "Your thumb plays E three times. The left hand holds A and E with fingers 4 and 1.",
        12: "Finger 4 plays A twice. The left hand comes back to A and E with fingers 4 and 1.",
        16: "Finger 4 plays the last A. Hold both hands for four beats.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 132,
      numerator: 4,
      denominator: 4,
      right: [
        RIGHT_TUNE,
        "E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2 | E4/1:2 E4/1:1 E4/1:1 | E4/1:2 E4/1:2",
        "E4/1:2 E4/1:1 F#4/2:1 | E4+G4/1+3:2 E4+G4/1+3:2 | G4/3:2 G4/3:1 G4/3:1 | E4+G4/1+3:2 r:2",
        RIGHT_NEXT,
        "E4+A4/1+4:4",
      ].join(" | "),
      left: [
        "A2+C3+E3/4+2+1:4 | G#2+B2+E3/5+3+1:4 | G#2+B2+E3/5+3+1:4 | A2+C3+E3/4+2+1:4",
        "A2+C3+E3/4+2+1:4 | G2+C3+E3/5+3+1:4 | G2+D3/5+2:4 | G2+C3+E3/5+3+1:4",
        "A2/4:1 C3+E3/2+1:1 A2/4:1 C3+E3/2+1:1 | G#2/5:1 B2+E3/3+1:1 G#2/5:1 B2+E3/3+1:1",
        "G#2/5:1 B2+E3/3+1:1 G#2/5:1 B2+E3/3+1:1 | A2/4:1 C3+E3/2+1:1 A2/4:1 C3+E3/2+1:1",
        "A2/4:1 C3+E3/2+1:1 A2/4:1 C3+E3/2+1:1 | G2/5:1 C3+E3/3+1:1 G2/5:1 C3+E3/3+1:1",
        "G2/5:1 D3/2:1 G2/5:1 D3/2:1 | G2/5:1 C3+E3/3+1:1 G2/5:1 C3+E3/3+1:1",
        "G2/5:1 C3+E3/3+1:1 G2/5:1 C3+E3/3+1:1 | B2/5:1 F#3/1:1 B2/5:1 F#3/1:1",
        "B2/5:1 D3+F#3/3+1:1 B2/5:1 D3+F#3/3+1:1 | A2/5:1 E3/1:1 A2/5:1 C3+E3/3+1:1",
        "A2/5:1 C3+E3/3+1:1 A2/5:1 C3+E3/3+1:1 | G#2/5:1 B2+E3/3+1:1 G#2/5:1 B2+E3/3+1:1",
        "G#2/5:1 B2+E3/3+1:1 G#2/5:1 B2+E3/3+1:1 | A2+C3+E3/4+2+1:4",
      ].join(" | "),
      pedal: Array(24).fill("P:4").join(" | "),
      skills: ["triads", "pedal", "two-note-chords"],
      practice: [
        { text: 'Play the right hand alone on the first eight bars, and count "long, short, short".', hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. Each bar holds one chord of three notes.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, with the pedal.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 24, where the left hand plays a low note and a chord in turns.", hands: "both", speed: 0.7, loop: [9, 24], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 6, toBar: 6, kind: "fingering", text: "The left hand moves down a little here. Finger 5 goes from G sharp to G." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold the pedal down for each whole bar, and change it right on the bar line." },
        { fromBar: 9, toBar: 23, kind: "rhythm", text: "The left hand plays on every beat now. Keep it even, like a slow march." },
      ],
      tricky: {
        15: "The left hand rocks between G and D with fingers 5 and 2.",
        16: "Play E and G together with fingers 1 and 3. Then lift the right hand in the rest.",
        18: "The left hand moves up to B. Finger 5 plays B, and the thumb plays F sharp.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        `${longShortShort("C4+E4/1+3")} | ${longLong("B3+E4/1+4")}`,
        `${longShortShort("B3+E4/1+4")} | ${longLong("C4+E4/1+3")}`,
        "C4+E4/1+3:4 C4+E4/1+3:2 D4+F#4/2+4:2 | " + longLong("E4+G4/3+5"),
        "D4+G4/2+5:4 C4+G4/1+5:2 D4+G4/2+5:2 | E4+G4/3+5:4 r:4",
        `${longShortShort("A3+C4+E4/1+2+4")} | ${longLong("G#3+B3+E4/1+2+5")}`,
        `${longShortShort("G#3+B3+E4/1+2+5")} | ${longLong("A3+C4+E4/1+2+4")}`,
        "A3+C4+E4/1+2+4:4 A3+C4+E4/1+2+4:2 A3+D4+F#4/1+3+5:2 | " + longLong("C4+E4+G4/1+3+5"),
        `${longShortShort("B3+D4+G4/1+2+5")} | C4+E4+G4/1+3+5:4 r:4`,
        "C4+E4+G4/1+2+4:4 C4+E4+G4/1+2+4:2 C4+E4+A4/1+2+5:2 | " + longLong("D#4+F#4+B4/1+2+5"),
        "B3+D4+F#4/1+2+4:4 B3+D4+F#4/1+2+4:2 B3+D4+G#4/1+2+5:2 | C#4+E4+A4/1+2+5:4 C4+E4+A4/1+2+5:4",
        `${longShortShort("A3+C4+E4/1+2+4")} | ${longLong("G#3+B3+E4/1+2+5")}`,
        "B3+E4/1+3:4 B3+F#4/1+4:2 B3+G#4/1+5:2 | C4+E4+A4/1+2+5:8",
      ].join(" | "),
      left: [
        `${longShortShort("A2+E3/5+1")} | ${longLong("G#2+E3/5+1")}`,
        `${longShortShort("E2+B2/5+1")} | ${longLong("A2+E3/5+1")}`,
        `${longShortShort("A2+E3/5+1")} | ${longLong("A2+E3/5+1")}`,
        `${longShortShort("G2+D3/5+1")} | C3+G3/5+1:4 r:4`,
        FIGURE_TUNE,
        FIGURE_NEXT,
      ].join(" | "),
      pedal: `${PEDAL_TUNE} | ${PEDAL_TUNE} | ${EPIC_PEDAL_NEXT}`,
      skills: ["broken-chords", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the left hand alone on bars 1 to 8, in the rhythm long, short, short, long, long.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone on bars 9 to 24. Each bar starts with a rest, then two notes climb and a low note follows.", hands: "left", speed: 0.6, loop: [9, 24], wait: false },
        { text: "Play the right hand alone, and press the notes of each chord as one.", hands: "right", speed: 0.6, loop: null, wait: true },
        { text: "Join the hands, slowly.", hands: "both", speed: 0.6, loop: null, wait: true },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 9, toBar: 16, kind: "sound", text: "Keep the broken chords soft, so the repeated E sings above them." },
        { fromBar: 5, toBar: 5, kind: "sound", text: "Change the pedal on the last beat, where the chord turns to D major." },
        { fromBar: 7, toBar: 7, kind: "sound", text: "Change the pedal three times in this bar, once for each new chord." },
      ],
      tricky: {
        9: "The left hand rests on the first beat, then plays A, C and a low E with fingers 2, 1 and 5.",
        19: "On the last beat, only finger 5 moves, up from F sharp to G sharp. The left hand plays B, D and a low D.",
        21: "The right hand moves down to A, C and E. The left hand plays A and E, then the E an octave below.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 144,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        `${longShortShort("E4+C5+E5/1+3+5")} | ${longLong("E4+B4+E5/1+3+5")}`,
        `${longShortShort("E4+B4+E5/1+3+5")} | ${longLong("E4+C5+E5/1+3+5")}`,
        "E4+C5+E5/1+3+5:4 E4+C5+E5/1+3+5:2 F#4+D5+F#5/1+3+5:2 | " + longLong("G4+E5+G5/1+3+5"),
        "G4+D5+G5/1+3+5:4 G4+C5+G5/1+3+5:2 G4+D5+G5/1+3+5:2 | G4+E5+G5/1+3+5:4 r:4",
        `${longShortShort("E4+A4+C5+E5/1+2+3+5")} | ${longLong("E4+G#4+B4+E5/1+2+3+5")}`,
        `${longShortShort("E4+G#4+B4+E5/1+2+3+5")} | ${longLong("E4+A4+C5+E5/1+2+3+5")}`,
        "E4+A4+C5+E5/1+2+3+5:4 E4+A4+C5+E5/1+2+3+5:2 F#4+A4+D5+F#5/1+2+3+5:2 | " + longLong("G4+C5+E5+G5/1+2+4+5"),
        `${longShortShort("G4+B4+D5+G5/1+2+3+5")} | G4+C5+E5+G5/1+2+4+5:4 r:4`,
        "G4+C5+E5+G5/1+2+4+5:4 G4+C5+E5+G5/1+2+4+5:2 A4+C5+E5+A5/1+2+3+5:1 r:1 | " +
          "B4+D#5+F#5+B5/1+2+3+5:4 B4+D#5+F#5+B5/1+2+3+5:3 r:1",
        "F#4+B4+D5+F#5/1+2+3+5:4 F#4+B4+D5+F#5/1+2+3+5:2 G#4+B4+D5+G#5/1+2+3+5:2 | " +
          "A4+C#5+E5+A5/1+2+3+5:4 A4+C5+E5+A5/1+2+3+5:3 r:1",
        `${longShortShort("E4+A4+C5+E5/1+2+3+5")} | E4+G#4+B4+E5/1+2+3+5:4 E4+A4+C5+E5/1+2+3+5:4`,
        "E4+G#4+B4+E5/1+2+3+5:4 F#4+B4+F#5/1+2+5:2 G#4+B4+E5+G#5/1+2+4+5:2 | A4+C5+E5+A5/1+2+3+5:8",
      ].join(" | "),
      left: [
        `${detachedLongShortShort("A1+E2+A2/5+2+1")} | ${detachedLongLong("G#1+E2+G#2/5+2+1")}`,
        `${detachedLongShortShort("E1+B1+E2/5+2+1")} | ${detachedLongLong("A1+E2+A2/5+2+1")}`,
        `${detachedLongShortShort("A1+E2+A2/5+2+1")} | ${detachedLongLong("A1+E2+A2/5+2+1")}`,
        `${detachedLongShortShort("G1+D2+G2/5+2+1")} | C2+G2+C3/5+2+1:4 r:4`,
        FIGURE_TUNE,
        `${detachedLongShortShort("C2+G2+C3/5+2+1")} | ${detachedLongLong("B1+F#2+B2/5+2+1")}`,
        `${detachedLongShortShort("B1+F#2+B2/5+2+1")} | ${detachedLongLong("A1+E2+A2/5+2+1")}`,
        `${detachedLongShortShort("A1+E2+A2/5+2+1")} | G#1+E2+G#2/5+2+1:3 r:1 A1+E2+A2/5+2+1:3 r:1`,
        `${detachedLongShortShort("E1+B1+E2/5+2+1")} | A1+E2+A2/5+2+1:8`,
      ].join(" | "),
      pedal: `${PEDAL_TUNE} | ${PEDAL_TUNE} | ${LEGENDARY_PEDAL_NEXT}`,
      skills: ["melody-in-chords", "octave-bass", "broken-chords"],
      practice: [
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the left hand alone on bars 9 to 16. Each bar starts with a rest, then two notes climb and a low note follows.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the top note of each octave a little louder, so the tune stands out." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "Spread the right hand over a whole octave for each chord, with the thumb and finger 5 on the outside." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Lift the left hand in each short rest, so its chords sound short and light, like the strings." },
      ],
      tricky: {
        15: "The left hand plays B and D, then drops to G with finger 5. The right hand repeats one G major chord.",
        19: "On the last beat, only the thumb and finger 5 move, up from F sharp to G sharp.",
        23: "The thumb and finger 5 climb together, from E to F sharp to G sharp. B stays in every chord.",
      },
    },
  },
  de: {
    about:
      "Beethoven schrieb seine Siebte Sinfonie 1811 und 1812. " +
      "Bei der Uraufführung in Wien im Dezember 1813 verlangte das Publikum, das Allegretto noch einmal zu hören. " +
      "Der Film The King's Speech (2010) spielt es unter der Radioansprache des Königs im Krieg.",
    funFact: "Die Melodie erklingt zuerst tief, in den Bratschen und Celli.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 8 nur mit der rechten Hand. Dein Daumen spielt jedes E, und die Melodie steigt zum G.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Die Melodie steigt zum H und kehrt dann zum E zurück.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt eine Griffform.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          'Sag "lang, kurz, kurz", während du den ersten Takt spielst. Dieser Rhythmus ist das ganze Stück.',
          "Deine Hand bewegt sich nie. Finger 1, 2 und 3 spielen E, Fis und G.",
          "Fang ganz leise an, und lass jeden Takt ein wenig lauter werden.",
        ],
        tricky: {
          1: "Dein Daumen spielt dreimal das E. Die linke Hand hält A und E mit Finger 4 und 1.",
          12: "Finger 4 spielt zweimal das A. Die linke Hand kehrt zu A und E mit Finger 4 und 1 zurück.",
          16: "Finger 4 spielt das letzte A. Halt beide Hände vier Schläge lang.",
        },
      },
      rare: {
        practice: [
          'Spiel die ersten acht Takte nur mit der rechten Hand, und zähl "lang, kurz, kurz".',
          "Spiel die linke Hand allein. Jeder Takt hält einen Akkord aus drei Tönen.",
          "Spiel die ersten acht Takte mit beiden Händen und mit Pedal.",
          "Spiel die Takte 9 bis 24. Dort spielt die linke Hand abwechselnd einen tiefen Ton und einen Akkord.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Hier rückt die linke Hand ein wenig nach unten. Finger 5 geht vom Gis zum G.",
          "Halt das Pedal jeweils einen ganzen Takt, und wechsle es genau am Taktstrich.",
          "Die linke Hand spielt jetzt auf jeden Schlag. Halt sie gleichmäßig, wie einen langsamen Marsch.",
        ],
        tricky: {
          15: "Die linke Hand wiegt sich mit Finger 5 und 2 zwischen G und D.",
          16: "Spiel E und G zusammen mit Finger 1 und 3. Dann heb die rechte Hand in der Pause an.",
          18: "Die linke Hand rückt hinauf zum H. Finger 5 spielt H, und der Daumen spielt Fis.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein in den Takten 1 bis 8, im Rhythmus lang, kurz, kurz, lang, lang.",
          "Spiel die linke Hand allein in den Takten 9 bis 24. Jeder Takt beginnt mit einer Pause, dann steigen zwei Töne, und ein tiefer Ton folgt.",
          "Spiel die rechte Hand allein, und drück die Töne jedes Akkords wie einen an.",
          "Nimm beide Hände zusammen, langsam.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt die gebrochenen Akkorde leise, damit das wiederholte E darüber singt.",
          "Wechsle das Pedal auf dem letzten Schlag. Dort wird der Akkord zu D-Dur.",
          "Wechsle das Pedal in diesem Takt dreimal, einmal für jeden neuen Akkord.",
        ],
        tricky: {
          9: "Die linke Hand pausiert auf dem ersten Schlag und spielt dann A, C und ein tiefes E mit Finger 2, 1 und 5.",
          19: "Auf dem letzten Schlag bewegt sich nur Finger 5, vom Fis hinauf zum Gis. Die linke Hand spielt H, D und ein tiefes D.",
          21: "Die rechte Hand rückt hinunter zu A, C und E. Die linke Hand spielt A und E, dann das E eine Oktave tiefer.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die linke Hand allein in den Takten 9 bis 16. Jeder Takt beginnt mit einer Pause, dann steigen zwei Töne, und ein tiefer Ton folgt.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel den oberen Ton jeder Oktave etwas lauter, damit die Melodie heraussticht.",
          "Spann die rechte Hand für jeden Akkord über eine ganze Oktave, mit Daumen und Finger 5 außen.",
          "Heb die linke Hand in jeder kurzen Pause an, damit ihre Akkorde kurz und leicht klingen, wie die Streicher.",
        ],
        tricky: {
          15: "Die linke Hand spielt H und D und fällt dann mit Finger 5 zum G. Die rechte Hand wiederholt einen G-Dur-Akkord.",
          19: "Auf dem letzten Schlag bewegen sich nur Daumen und Finger 5, vom Fis hinauf zum Gis.",
          23: "Daumen und Finger 5 steigen zusammen, von E über Fis zu Gis. Das H bleibt in jedem Akkord.",
        },
      },
    },
  },
};

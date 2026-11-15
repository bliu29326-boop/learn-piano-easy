/**
 * *The Sailor's Hornpipe*: the traditional dance tune, in four versions of ours.
 *
 * The source is a public domain typeset of *The College Hornpipe* on Wikimedia Commons, `File:College
 * Hornpipe.svg`. The print is in 2/2, in G major, in quarters and eighths. The tune is its two-eighth
 * upbeat and the first four bars that follow.
 *
 * The tune writes every eighth as a quarter, so each print bar is a bar of 2/1. Bar 1 holds the upbeat
 * after a rest. Its range is F sharp 4 to B5, and the hook is the upbeat and the next two bars.
 *
 * The tune leaps an octave down twice, from G5 to G4 and from A5 to A4. Every version plays these leaps
 * in the right hand. Its fingers stretch from 5 to the thumb, and repeated notes change the finger, so
 * the hand stays in place. Common lifts the hand for a moment before each leap.
 *
 * Every version writes the tune in 2/2 quarters, two bars per print bar. Bars 10 to 17 of every version
 * play the print's next phrase, the rest of its first strain: bars 5 to 8. The phrase runs down from G5
 * to D4 and climbs back to a close on G4. Common and Rare hold that G, and Epic ends on a G chord. In
 * Legendary, bar 17 takes the print's upbeat back to the start, and bars 18 to 26 play the tune again in
 * chords, as the print's repeat does.
 *
 * The print is one line with no chords, so the chords are ours. They are G major under the first bars,
 * and D major from the high A on. The phrase moves through G, C and D major, two chords per bar. Every
 * version keeps G major and closes on it. The print has no accompaniment, so every version plays its
 * level's patterns.
 *
 * Common plays the tune over held open fifths and single bass notes, in one hand position. In the phrase,
 * its right hand moves three times, each after a note it lets go early. Rare plays a bass note and then a
 * two-note chord or a second bass note in each bar. Its right hand moves four times in the phrase, and
 * no finger crosses. Epic rolls a broken chord in quarters with the pedal. Finger 3 crosses over the
 * thumb in the falling run, and the broken chords move up under it. Legendary plays an octave bass and a
 * chord under the tune, arpeggios over two octaves under bars 10 to 13, and the octave bass again to bar
 * 17. It then plays the tune again in chords of three and four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The tune in 2/1, in quarters, which are the print's eighths: one bar per print bar, after the upbeat. */
const tune = "r:6 G5:1 F#5:1 | G5:2 G4:2 G4:2 D5:1 C5:1 | B4:1 D5:1 G5:2 G5:1 B5:1 A5:1 G5:1 | A5:2 A4:2 A4:2 A4:1 G4:1 | F#4:1 A4:1 D5:2 D5:2 E5:1 F#5:1";

/**
 * The tune in 2/2 eighths, two bars per print bar, with a short rest before each octave leap, for Common.
 * Fingers 5 and 1 span each leap, and each repeated note takes the finger the next note needs.
 */
const TUNE_LIFTED = [
  "r:4 G5/5:2 F#5/4:2 | G5/5:3 r:1 G4/1:4 | G4/1:4 D5/4:2 C5/3:2 | B4/1:2 D5/2:2 G5/4:4 | G5/3:2 B5/5:2 A5/4:2 G5/3:2",
  "A5/4:3 r:1 A4/1:4 | A4/3:4 A4/3:2 G4/2:2 | F#4/1:2 A4/2:2 D5/4:4 | D5/2:4 E5/3:2 F#5/4:2",
].join(" | ");

/** The tune in 2/2 eighths with its leaps played straight, for Rare, Epic and Legendary. */
const TUNE_STRAIGHT = TUNE_LIFTED.replace("G5/5:3 r:1", "G5/5:4").replace("A5/4:3 r:1", "A5/4:4");

/**
 * Print bars 5 to 7 and the first two quarters of bar 8 in 2/2 quarters, two bars per print bar: bars 10
 * to 16. The run falls from G5 to D4, finger 3 crossing over the thumb, and climbs back to C5. Epic and
 * Legendary play it so.
 */
const PHRASE = [
  "G5/5:2 F#5/4:2 E5/3:2 D5/2:2 | E5/3:2 D5/2:2 C5/1:2 B4/3:2 | C5/4:2 B4/3:2 A4/2:2 G4/1:2",
  "G4/1:2 F#4/3:2 E4/2:2 D4/1:2 | E4/2:2 G4/4:2 F#4/3:2 A4/5:2 | G4/1:2 B4/3:2 A4/2:2 C5/4:2 | B4/3:4 G4/1:4",
].join(" | ");

/** The phrase for Rare. The hand moves to a new position four times, and no finger crosses over. */
const PHRASE_PLACED = [
  "G5/5:2 F#5/4:2 E5/3:2 D5/2:2 | E5/4:2 D5/3:2 C5/2:2 B4/1:2 | C5/4:2 B4/3:2 A4/2:2 G4/1:2",
  "G4/4:2 F#4/3:2 E4/2:2 D4/1:2 | E4/2:2 G4/4:2 F#4/3:2 A4/5:2 | G4/1:2 B4/3:2 A4/2:2 C5/4:2 | B4/3:4 G4/1:4",
].join(" | ");

/**
 * The phrase for Common, then a held G. The hand moves three times, and the note before each move lets go
 * an eighth early, so the hand moves in the gap.
 */
const PHRASE_LIFTED = [
  "G5/5:2 F#5/4:2 E5/3:2 D5/2:2 | E5/3:2 D5/2:2 C5/1:1 r:1 B4/3:2 | C5/4:2 B4/3:2 A4/2:2 G4/1:1 r:1",
  "G4/4:2 F#4/3:2 E4/2:2 D4/1:2 | E4/2:2 G4/4:2 F#4/3:2 A4/5:1 r:1 | G4/1:2 B4/3:2 A4/2:2 C5/4:2 | B4/3:4 G4/1:4 | G4/1:8",
].join(" | ");

/**
 * Legendary's tune again from print bar 2, in eighths, in chords of three and four notes with the tune on
 * top. Each chord but the last lets go an eighth early, so the hand has time to jump to the next.
 */
const TUNE_IN_CHORDS = [
  "G4+B4+D5+G5/1+2+3+5:4 B3+D4+G4/1+2+5:4 | B3+D4+G4/1+2+5:4 G4+B4+D5/1+3+5:2 G4+C5/1+4:2",
  "D4+G4+B4/1+2+5:2 G4+B4+D5/1+2+4:2 B4+D5+G5/1+2+5:4 | B4+D5+G5/1+2+4:2 D5+G5+B5/1+3+5:2 D5+F#5+A5/1+3+5:2 B4+D5+G5/1+2+4:2",
  "D5+F#5+A5/1+3+5:4 D4+F#4+A4/1+3+5:4 | D4+F#4+A4/1+3+5:4 F#4+A4/3+5:2 E4+G4/2+4:2",
  "A3+D4+F#4/1+2+4:2 D4+F#4+A4/1+2+4:2 F#4+A4+D5/1+2+5:4 | F#4+A4+C5+D5/1+2+3+5:4 C5+E5/2+4:2 A4+C5+F#5/1+2+5:2",
]
  .join(" | ")
  .replace(/:(\d)(?= |$)/g, (_, length: string) => `:${Number(length) - 1} r:1`)
  .concat(" | G4+B4+D5+G5/1+2+3+5:8");

/** The chords of bars 2 to 9 under the tune, two per bar: g and d are G major and D major. */
const TUNE_CHORDS = "gggggggddddddddd";

/** The chords of bars 10 to 16 under print bars 5 to 8, two per bar. The print has none, so these are ours. */
const PHRASE_CHORDS = "ggccccddcdgdgg";

/** Bars of `patterns` from `chords`, one letter per half bar, two half bars per bar. */
function halfBars(patterns: Record<string, string>, chords: string): string {
  const halves = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** Bars of `patterns` from `chords`, one letter per bar. */
function wholeBars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]!).join(" | ");
}

/** Common's held shapes, a whole bar each, in one hand position from G2 to D3. */
const HELD: Record<string, string> = {
  g: "G2+D3/5+1:8",
  c: "C3/2:8",
  d: "D3/1:8",
};

/** Rare's bar in eighths: a bass note on the first beat and a two-note chord or the fifth on the second. */
const BASS_AND_CHORD: Record<string, string> = {
  g: "G2/5:4 B2+D3/3+1:4",
  c: "C3/2:4 G2/5:4",
  d: "D3/1:4 A2/4:4",
};

/**
 * Epic's half bar in eighths, a broken chord in quarters. A lower-case letter plays the root, then the
 * fifth. Its capital, for the second half of a bar, plays the third, then the fifth. Under the phrase, e
 * and E play the D chord an octave up, b plays G major from B2, and a plays D major from A2, so the hand
 * never jumps past an octave.
 */
const BROKEN: Record<string, string> = {
  g: "G2/5:2 D3/1:2",
  c: "C3/5:2 G3/1:2",
  d: "D2/5:2 A2/1:2",
  e: "D3/5:2 A3/1:2",
  b: "B2/5:2 G3/1:2",
  a: "A2/5:2 F#3/1:2",
  G: "B2/3:2 D3/1:2",
  C: "E3/3:2 G3/1:2",
  D: "F#2/3:2 A2/1:2",
  E: "F#3/3:2 A3/1:2",
};

/** Epic's broken chords under bars 10 to 16: the chords of `PHRASE_CHORDS` in the shapes of `BROKEN`. */
const EPIC_PHRASE_CHORDS = "gGcCcCeEcebagG";

/** Legendary's half bar in eighths: an octave on the beat and a chord after it, each with a rest to jump. */
const STRIDE: Record<string, string> = {
  g: "G1+G2/5+1:1 r:1 B2+D3+G3/3+2+1:1 r:1",
  c: "C2+C3/5+1:1 r:1 G2+C3+E3/5+2+1:1 r:1",
  d: "D2+D3/5+1:1 r:1 A2+D3+F#3/5+2+1:1 r:1",
};

/** The six notes of each chord over two octaves, for Legendary's arpeggios. */
const WIDE_NOTES: Record<string, string> = {
  g: "G1 D2 G2 B2 D3 G3",
  c: "C2 G2 C3 E3 G3 C4",
  d: "D2 A2 D3 F#3 A3 D4",
};

/** Legendary's bar of arpeggio in eighths: up two octaves, back down a step, then a rest to jump. */
const WIDE: Record<string, string> = {};
for (const [chord, notes] of Object.entries(WIDE_NOTES)) {
  const pitches = notes.split(" ");
  const steps: [number, number][] = [[0, 5], [1, 2], [2, 1], [3, 3], [4, 2], [5, 1], [4, 2]];
  WIDE[chord] = `${steps.map(([at, finger]) => `${pitches[at]}/${finger}:1`).join(" ")} r:1`;
}

/** Epic's left hand: rest in bar 1, a broken chord under the tune and the phrase, and a held G chord. */
const EPIC_LEFT = [
  "r:8",
  halfBars(BROKEN, [...TUNE_CHORDS].map((chord, at) => (at % 2 === 0 ? chord : chord.toUpperCase())).join("")),
  halfBars(BROKEN, EPIC_PHRASE_CHORDS),
  "G2+D3+G3/5+2+1:8",
].join(" | ");

export const sailorsHornpipe: OurSong = {
  slug: "sailors-hornpipe",
  title: "The Sailor's Hornpipe",
  aka: ["Sailor's Hornpipe", "The College Hornpipe", "College Hornpipe"],
  source: {
    composer: "Traditional",
    died: null,
    published: 1781,
    edition:
      "A public domain typeset of The College Hornpipe on Wikimedia Commons, File:College Hornpipe.svg, in G major, for the tune and the phrase after it (bars 5 to 8); McGlashan's Collection of Scots Measures printed the tune in 1781",
  },
  about:
    "The Sailor's Hornpipe is a lively dance tune with a strong link to the Royal Navy. " +
    "Early collections printed it as The College Hornpipe.",
  funFact: "Max Fleischer's Popeye cartoons opened with the hornpipe, so many people know it as Popeye's tune.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: G_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 120,
      numerator: 2,
      denominator: 2,
      steps: 4,
      right: `${TUNE_LIFTED} | ${PHRASE_LIFTED}`,
      left: ["r:8", wholeBars(HELD, "ggg"), "G2+D3/5+1:4 D3/1:4", wholeBars(HELD, "ddddgccd"), "C3/2:4 D3/1:4", "G2+D3/5+1:4 D3/1:4", wholeBars(HELD, "gg")].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 9 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play bars 10 to 17 with the right hand alone. The tune runs down to the low D, then climbs back to G.", hands: "right", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar, and never moves.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Start with finger 5 on the high G and finger 4 on F sharp. The thumb then reaches down to the low G." },
        { fromBar: 2, toBar: 2, kind: "trick", text: "Let go of the high G a little early. In the short gap, stretch the thumb down an octave." },
        { fromBar: 11, toBar: 15, kind: "trick", text: "The hand moves three times in the run. Each time, let go of the note before a little early, and move in the gap." },
        { fromBar: 1, toBar: 17, kind: "rhythm", text: "Count four steady beats in each bar. A hornpipe is a dance, so keep it bouncing." },
      ],
      tricky: {
        4: "The thumb tucks under to B after C. Then fingers 2 and 4 climb to D and G.",
        11: "Let go of C early. In the short gap, the hand moves down, and finger 3 takes B.",
        15: "Let go of A early. The thumb then lands on G, and fingers 3, 2 and 4 play B, A and C.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 132,
      numerator: 2,
      denominator: 2,
      steps: 4,
      right: `${TUNE_STRAIGHT} | ${PHRASE_PLACED} | G4/1:8`,
      left: [
        "r:8",
        wholeBars(BASS_AND_CHORD, "ggg"),
        "G2/5:4 D3/1:4",
        wholeBars(BASS_AND_CHORD, "ddddgccd"),
        "C3/2:4 D3/1:4",
        "G2/5:4 D3/1:4",
        wholeBars(BASS_AND_CHORD, "g"),
        "G2+B2+D3/5+3+1:8",
      ].join(" | "),
      skills: ["two-note-chords", "position-change"],
      practice: [
        { text: "Play the left hand alone: a low note, then a two-note chord or a second note.", hands: "left", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play the right hand alone on the first nine bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the right hand alone on bars 10 to 17. The tune runs down to the low D, then climbs back to G.", hands: "right", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Join the hands on the whole song, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Finger 5 plays the high G, and the thumb drops to the low G. Keep the hand open as wide as an octave." },
        { fromBar: 11, toBar: 13, kind: "fingering", text: "Bars 11, 12 and 13 each start the hand in a lower place. Watch the finger on each first note." },
        { fromBar: 16, toBar: 17, kind: "rhythm", text: "The last two bars slow to longer notes. Let the dance come to rest on G." },
      ],
      tricky: {
        4: "The thumb tucks under to B after C. Then fingers 2 and 4 climb to D and G.",
        12: "Finger 4 starts on C, so the hand moves down. Fingers 3, 2 and 1 then walk down to G.",
        15: "The thumb jumps from A down to G. Then fingers 3, 2 and 4 play B, A and C.",
      },
    },
    epic: {
      key: G_MAJOR,
      bpm: 144,
      numerator: 2,
      denominator: 2,
      steps: 4,
      right: [TUNE_STRAIGHT, PHRASE, "B3+D4+G4/1+2+5:8"].join(" | "),
      left: EPIC_LEFT,
      pedal: `r:8 | P:8 | P:8 | P:8 | P:4 P:4 | ${Array<string>(8).fill("P:8").join(" | ")} | P:4 P:4 | P:4 P:4 | P:8 | P:8`,
      skills: ["broken-chords", "pedal", "thumb-under"],
      practice: [
        { text: "Play the left hand alone until the broken chords flow by themselves.", hands: "left", speed: 0.5, loop: [2, 9], wait: false },
        { text: "Play the right hand alone on bars 10 to 16. On the way down, finger 3 crosses over the thumb.", hands: "right", speed: 0.5, loop: [10, 16], wait: true },
        { text: "Play the first nine bars with both hands, and change the pedal with each new chord.", hands: "both", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "sound", text: "Change the pedal when the bass moves to a new chord. Lift it, then press it again just after the bass note." },
        { fromBar: 10, toBar: 16, kind: "sound", text: "Let the runs sing softly over the broken chords, like a fiddle at a dance." },
        { fromBar: 13, toBar: 13, kind: "fingering", text: "Play G with the thumb again, then cross finger 3 over to F sharp. Finger 2 and the thumb finish on D." },
      ],
      tricky: {
        11: "After the thumb plays C, finger 3 crosses over it to B. Keep the wrist level as it passes.",
        15: "The thumb passes under to G after finger 5 plays A. Then fingers 3, 2 and 4 play B, A and C.",
        17: "Play the last chord in both hands at once. Let the pedal hold it to the end.",
      },
    },
    legendary: {
      key: G_MAJOR,
      bpm: 160,
      numerator: 2,
      denominator: 2,
      steps: 4,
      right: [TUNE_STRAIGHT, PHRASE, "G4/1:4 G5/5:2 F#5/4:2", TUNE_IN_CHORDS].join(" | "),
      left: [
        "r:8",
        halfBars(STRIDE, TUNE_CHORDS),
        wholeBars(WIDE, PHRASE_CHORDS.slice(0, 8).replace(/(.)./g, "$1")),
        halfBars(STRIDE, `${PHRASE_CHORDS.slice(8)}gg`),
        halfBars(STRIDE, TUNE_CHORDS),
        "G1+G2/5+1:8",
      ].join(" | "),
      pedal: `r:8 | ${Array<string>(24).fill("P:4 P:4").join(" | ")} | P:8`,
      skills: ["octave-bass", "arpeggios", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the beat, then a chord, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [2, 9], wait: true },
        { text: "Play the left hand's arpeggios alone. The thumb passes under, and finger 3 crosses over.", hands: "left", speed: 0.5, loop: [10, 13], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [18, 26], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 10, toBar: 13, kind: "sound", text: "Let the arpeggios roll softly under the right hand's runs." },
        { fromBar: 18, toBar: 25, kind: "trick", text: "Each chord lets go a little early. Use that gap to move the whole hand to the next chord." },
      ],
      tricky: {
        18: "Spread the hand over G, B, D and G. Then drop it an octave to B, D and G.",
        19: "The hand climbs from a low G chord to D on top. Then fingers 1 and 4 take G and C.",
        20: "Three chords climb to the high G. Keep the wrist loose, and lead with finger 5.",
      },
    },
  },
  de: {
    about:
      "Die Sailor's Hornpipe ist eine lebhafte Tanzmelodie, die eng mit der Royal Navy verbunden ist. " +
      "Frühe Sammlungen druckten sie als The College Hornpipe.",
    funFact: "Max Fleischers Popeye-Zeichentrickfilme begannen mit der Hornpipe, darum kennen viele sie als Popeyes Melodie.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 9 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 10 bis 17 nur mit der rechten Hand. Die Melodie läuft hinunter zum tiefen D und steigt dann zurück zum G.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang und bewegt sich nie.",
          "Spiel das ganze Stück langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit Finger 5 auf dem hohen G und Finger 4 auf dem Fis an. Dann greift der Daumen hinunter zum tiefen G.",
          "Lass das hohe G etwas früher los. In der kurzen Lücke streckst du den Daumen eine Oktave nach unten.",
          "Im Lauf bewegt sich die Hand dreimal. Lass jedes Mal den Ton davor etwas früher los, und bewege dich in der Lücke.",
          "Zähl vier gleichmäßige Schläge in jedem Takt. Eine Hornpipe ist ein Tanz, also lass sie hüpfen.",
        ],
        tricky: {
          4: "Nach dem C setzt der Daumen unter zum H. Dann steigen Finger 2 und 4 zum D und zum G.",
          11: "Lass das C früh los. In der kurzen Lücke geht die Hand hinunter, und Finger 3 nimmt das H.",
          15: "Lass das A früh los. Dann landet der Daumen auf dem G, und Finger 3, 2 und 4 spielen H, A und C.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann einen Zweiklang oder einen zweiten Ton.",
          "Spiel die ersten neun Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 10 bis 17 nur mit der rechten Hand. Die Melodie läuft hinunter zum tiefen D und steigt dann zurück zum G.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Finger 5 spielt das hohe G, und der Daumen fällt zum tiefen G. Halt die Hand so weit offen wie eine Oktave.",
          "Die Takte 11, 12 und 13 beginnen jeweils mit der Hand an einer tieferen Stelle. Achte auf den Finger beim ersten Ton.",
          "Die letzten zwei Takte werden zu längeren Tönen. Lass den Tanz auf dem G zur Ruhe kommen.",
        ],
        tricky: {
          4: "Nach dem C setzt der Daumen unter zum H. Dann steigen Finger 2 und 4 zum D und zum G.",
          12: "Finger 4 beginnt auf dem C, also geht die Hand hinunter. Dann gehen Finger 3, 2 und 1 hinunter zum G.",
          15: "Der Daumen springt vom A hinunter zum G. Dann spielen Finger 3, 2 und 4 H, A und C.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis die gebrochenen Akkorde von selbst fließen.",
          "Spiel die Takte 10 bis 16 nur mit der rechten Hand. Auf dem Weg nach unten kreuzt Finger 3 über den Daumen.",
          "Spiel die ersten neun Takte mit beiden Händen, und wechsle das Pedal bei jedem neuen Akkord.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal, wenn der Bass zu einem neuen Akkord geht. Heb es an, und drück es gleich nach dem Basston wieder.",
          "Lass die Läufe leise über den gebrochenen Akkorden singen, wie eine Geige beim Tanz.",
          "Spiel das G noch einmal mit dem Daumen, dann kreuz Finger 3 über zum Fis. Finger 2 und der Daumen enden auf dem D.",
        ],
        tricky: {
          11: "Nach dem C mit dem Daumen kreuzt Finger 3 darüber zum H. Halt das Handgelenk dabei ruhig.",
          15: "Nach dem A mit Finger 5 geht der Daumen unter zum G. Dann spielen Finger 3, 2 und 4 H, A und C.",
          17: "Spiel den letzten Akkord in beiden Händen zugleich. Lass das Pedal ihn bis zum Ende halten.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem Schlag, dann einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Arpeggios der linken Hand allein. Der Daumen geht unter, und Finger 3 kreuzt darüber.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Lass die Arpeggios leise unter den Läufen der rechten Hand rollen.",
          "Jeder Akkord endet etwas früher. Nutz die Lücke, um die ganze Hand zum nächsten Akkord zu bewegen.",
        ],
        tricky: {
          18: "Spann die Hand über G, H, D und G. Dann lass sie eine Oktave tiefer auf H, D und G fallen.",
          19: "Die Hand steigt von einem tiefen G-Dur-Akkord zum D oben. Dann nehmen Finger 1 und 4 das G und das C.",
          20: "Drei Akkorde steigen zum hohen G. Halt das Handgelenk locker, und führ mit Finger 5.",
        },
      },
    },
  },
};

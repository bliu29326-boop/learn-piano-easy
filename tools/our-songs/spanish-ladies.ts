/**
 * *Spanish Ladies*: the traditional sailors' song, in four versions of ours.
 *
 * The source is the score in Wikipedia's Spanish Ladies article. The print is in 3/4, in E minor, in
 * quarters and eighths, and opens with a quarter upbeat B. The tune is the first half of the verse, to
 * the held F sharp.
 *
 * The tune writes every print eighth as a quarter, so each print bar is a bar of 3/2. Bar 1 holds the
 * upbeat after a rest. Its range is B3 to A4, every note lies in E minor, and the hook is bars 1 to 5.
 *
 * Every version writes the tune in 3/2 eighths, one bar per print bar, so our bar n is the print's bar
 * n - 1. Bar 9 ends on the print's upbeat F sharp. Bars 10 to 17 of every version play the verse's second
 * half, the print's bars 9 to 16, which climbs to B and falls twice to the low B. Epic and Legendary then
 * play the chorus, which the print sings to the tune again, an octave up in another setting.
 *
 * Under the tune, our chords are E minor, with G major under the low Bs, C major under the high A and B
 * major under the held F sharp. Under E minor, no left-hand beat sounds G, so no G rubs against the
 * tune's F sharps. Bars 10 to 17 take the print's own chords: E minor, D major, G major, B minor, C major,
 * B minor, A minor turning to B minor, and E minor. Every version keeps E minor and closes on it.
 *
 * Common plays the tune over held bass notes and open fifths, with one change of hand position at a short
 * rest. In bars 10 to 17, its left hand holds B minor's fifth alone, and A minor for the whole of bar
 * 16. Its right hand rests in place of the print's upbeat B and A in bar 13, and joins the two As of bar
 * 11. Rare plays a waltz bass of a low note and two lighter notes or chords, with eighths and two-note
 * chords. Its right hand plays bars 10 to 17 note for note.
 *
 * Epic and Legendary take the print's own figure in bars 10 to 17: the root on the beat, then the fifth
 * on each offbeat, with rests between. Bars 16 and 17 take the print's left hand at the cadence. Epic
 * plays both as printed, and Legendary an octave down, with octaves on the roots. Under the tune and the
 * chorus, Epic plays an Alberti bass with the pedal, and Legendary a stride bass. Epic plays the chorus
 * in thirds and sixths, and Legendary in chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const E_MINOR: Key = { tonic: 4, mode: "minor" };

/** The tune in 3/2, in quarters, which are the print's eighths: one bar per print bar, after the upbeat. */
const tune = "r:4 B3:2 | E4:2 E4:2 F#4:2 | E4:4 E4:1 F#4:1 | G4:2 F#4:2 E4:2 | E4:1 D4:1 B3:2 B3:2 | E4:2 E4:2 F#4:2 | E4:3 E4:1 F#4:2 | G4:2 A4:2 G4:2 | F#4:4 r:2";

/**
 * The tune in 3/2 eighths for Common and Rare. The hand lies from B to G, then moves up to E in the short
 * rest after the low Bs of bar 5. Bar 9 ends on the print's upbeat F sharp to the verse's second half.
 */
const TUNE_STILL = [
  "r:8 B3/1:4 | E4/3:4 E4/3:4 F#4/4:4 | E4/3:8 E4/3:2 F#4/4:2 | G4/5:4 F#4/4:4 E4/3:4",
  "E4/3:2 D4/2:2 B3/1:4 B3/1:3 r:1 | E4/1:4 E4/1:4 F#4/2:4 | E4/1:6 E4/1:2 F#4/2:4 | G4/3:4 A4/4:4 G4/3:4 | F#4/2:8 F#4/2:4",
].join(" | ");

/**
 * The tune in 3/2 eighths for Epic and Legendary. From bar 6, finger 2 reaches up to E, so finger 5 finds A.
 * The thumb takes the upbeat F sharp at the end of bar 9.
 */
const TUNE_REACH = [
  "r:8 B3/1:4 | E4/3:4 E4/3:4 F#4/4:4 | E4/3:8 E4/3:2 F#4/4:2 | G4/5:4 F#4/4:4 E4/3:4",
  "E4/3:2 D4/2:2 B3/1:4 B3/1:4 | E4/2:4 E4/2:4 F#4/3:4 | E4/2:6 E4/2:2 F#4/3:4 | G4/4:4 A4/5:4 G4/4:4 | F#4/3:8 F#4/1:4",
].join(" | ");

/**
 * Common's bars 10 to 17, the verse's second half, print bars 9 to 16. The hand lies from E to B, then
 * finger 3 takes E in bar 13, so the thumb finds B. A leap of a sixth is past Common's limit. So bar 13
 * rests in place of the print's upbeat B and A, and bar 16 rests briefly before the G. Bar 11 joins the
 * print's two As into one, and bar 15 reaches the low A by moving finger 4 onto the repeated E.
 */
const COMMON_NEXT = [
  "G4/3:4 F#4/2:4 G4/3:4 | A4/4:4 G4/3:4 A4/4:4 | B4/5:2 A4/4:2 G4/3:4 E4/1:4 | E4/3:2 D4/2:2 B3/1:4 r:4",
  "G4/5:4 E4/3:4 E4/3:4 | E4/4:2 D4/3:2 B3/2:4 A3/1:4 | B3/2:3 r:1 G4/5:4 F#4/4:4 | E4/3:12",
].join(" | ");

/**
 * Rare's bars 10 to 17, the verse's second half note for note, print bars 9 to 16, then E and G together.
 * The thumb takes B in bar 13, so finger 5 reaches the B an octave up.
 */
const RARE_NEXT = [
  "G4/3:4 F#4/2:4 G4/3:4 | A4/4:4 G4/3:4 A4/4:2 A4/4:2 | B4/5:2 A4/4:2 G4/3:4 E4/1:4",
  "E4/3:2 D4/2:2 B3/1:4 B4/5:2 A4/4:2 | G4/3:4 E4/1:4 E4/1:4 | E4/4:2 D4/3:2 B3/2:4 A3/1:4",
  "B3/2:4 G4/5:4 F#4/4:4 | E4+G4/3+5:12",
].join(" | ");

/**
 * The verse's second half for Epic and Legendary, print bars 9 to 16 as bars 10 to 17, note for note.
 * Bar 17 ends on the print's two upbeat Bs to the chorus, an octave up.
 */
const NEXT_EIGHTHS = [
  "G4/2:4 F#4/1:4 G4/2:4",
  "A4/3:4 G4/2:4 A4/3:2 A4/3:2",
  "B4/4:2 A4/3:2 G4/2:4 E4/1:4",
  "E4/3:2 D4/2:2 B3/1:4 B4/5:2 A4/4:2",
  "G4/3:4 E4/1:4 E4/1:4",
  "E4/4:2 D4/3:2 B3/2:4 A3/1:4",
  "B3/1:4 G4/5:4 F#4/4:4",
  "E4/1:8 B4/2:2 B4/2:2",
].join(" | ");

/** Epic's tune again an octave up in eighths, with a third, a fourth or a sixth under each note. */
const EPIC_TUNE_AGAIN = [
  "G4+E5/1+4:4 G4+E5/1+4:4 A4+F#5/1+5:4 | G4+E5/1+4:8 G4+E5/1+4:2 A4+F#5/1+5:2",
  "B4+G5/1+5:4 B4+F#5/1+4:4 B4+E5/1+3:4 | G4+E5/1+5:2 G4+D5/1+4:2 G4+B4/1+2:4 D4+B4/1+5:4",
  "G4+E5/1+5:4 B4+E5/2+5:4 A4+F#5/1+5:4 | G4+E5/1+4:6 G4+E5/1+4:2 A4+F#5/1+5:4",
  "C5+G5/1+5:4 C5+A5/1+5:4 C5+G5/1+5:4 | B4+D#5+F#5/1+2+4:8 r:4",
  "G4+B4+E5/1+2+5:12",
].join(" | ");

/** Legendary's tune again an octave up in eighths, in chords of two and three notes with the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "G4+B4+E5/1+2+5:4 G4+B4+E5/1+2+5:4 B4+D5+F#5/1+2+5:4 | G4+B4+E5/1+2+5:8 B4+E5/2+5:2 B4+F#5/1+5:2",
  "B4+E5+G5/1+2+5:4 B4+D5+F#5/1+2+5:4 G4+B4+E5/1+2+5:4 | G4+B4+E5/1+2+5:2 G4+B4+D5/1+2+4:2 G4+B4/1+3:4 G4+B4/1+3:4",
  "G4+B4+E5/1+2+5:4 G4+B4+E5/1+2+5:4 B4+D5+F#5/1+2+5:4 | G4+B4+E5/1+2+5:6 B4+E5/2+5:2 B4+D5+F#5/1+2+5:4",
  "C5+E5+G5/1+2+5:4 C5+E5+A5/1+2+5:4 C5+E5+G5/1+2+5:4 | B4+D#5+F#5/1+2+4:8 r:4",
  "E4+G4+B4+E5/1+2+3+5:12",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"eecg"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords]
    .map((chord) => {
      const pattern = patterns[chord];
      if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
      return pattern;
    })
    .join(" | ");
}

/** The chords under tune bars 2 to 9, one per bar: e, c, g and b are E minor, C major, G major and B major. */
const TUNE_CHORDS = "eeegeecb";

/**
 * The print's chords under its bars 9 to 14, our bars 10 to 15: d is D major and m is B minor. Bar 16
 * splits A minor and B minor, and bar 17 is E minor.
 */
const NEXT_CHORDS = "edgmcm";

/**
 * Common's held shapes in eighths, a whole bar each, with the hand from E3 to B3. D major moves finger 5
 * down to D. B minor holds its fifth alone, so the left hand never sounds the right hand's B. C major
 * holds its E and G alone: a C would move the hand a third time in eight bars, or stretch it past a fifth.
 */
const HELD: Record<string, string> = {
  e: "E3+B3/5+1:12",
  a: "E3+A3/5+2:12",
  c: "E3+G3/5+3:12",
  g: "G3/3:12",
  b: "F#3+B3/4+1:12",
  d: "D3+A3/5+1:12",
  m: "F#3/4:12",
};

/**
 * Rare's bar of waltz bass in eighths: a low note for a beat, then a lighter note or two-note chord on
 * each other beat. In bars 10 to 17, C major stands on its root as k, so the hand never crosses.
 */
const WALTZ: Record<string, string> = {
  e: "E3/5:4 B3/1:4 B3/1:4",
  c: "E3/5:4 G3+C4/3+1:4 G3+C4/3+1:4",
  g: "D3/5:4 G3+B3/2+1:4 G3+B3/2+1:4",
  b: "D#3/5:4 F#3+B3/3+1:4 F#3+B3/3+1:4",
  d: "D3/5:4 A3/1:4 A3/1:4",
  m: "B2/5:4 D3+F#3/3+1:4 D3+F#3/3+1:4",
  k: "C3/5:4 E3+G3/3+1:4 E3+G3/3+1:4",
};

/**
 * Epic's bar of Alberti bass in eighths: low, high, middle, high, three times. Each beat sounds the low
 * note, so the third never rubs against an F sharp of the tune. G major stands on its B.
 */
const ALBERTI: Record<string, string> = {};
for (const [chord, [low, high, middle]] of Object.entries({
  e: ["E3", "B3", "G3"],
  c:["C3", "G3", "E3"],
  g: ["B2", "G3", "D3"],
  b: ["B2", "F#3", "D#3"],
})) {
  ALBERTI[chord] = Array<string>(3).fill(`${low}/5:1 ${high}/1:1 ${middle}/3:1 ${high}/1:1`).join(" ");
}

/** Legendary's bar of stride in eighths: an octave on the first beat, a chord on the next two, each with a rest to jump. */
const STRIDE: Record<string, string> = {};
for (const [chord, [octave, triad]] of Object.entries({
  e: ["E2+E3/5+1", "B2+E3/2+1"],
  c:["C2+C3/5+1", "G2+C3+E3/5+2+1"],
  g: ["G1+G2/5+1", "G2+B2+D3/5+3+1"],
  b: ["B1+B2/5+1", "B2+D#3+F#3/5+3+1"],
})) {
  STRIDE[chord] = `${octave}:3 r:1 ${triad}:3 r:1 ${triad}:3 r:1`;
}

/**
 * The print's own figure under the verse's second half, for Epic: the root on the beat, then the fifth
 * above on each offbeat, with rests between. Under G major, the print rests on the third beat.
 */
const OFFBEAT: Record<string, string> = {};
for (const [chord, [root, fifth]] of Object.entries({
  e: ["E3", "B3"],
  d: ["D3", "A3"],
  g: ["G3", "D4"],
  m: ["B2", "F#3"],
  c: ["C3", "G3"],
})) {
  const tail = chord === "g" ? "r:4" : `r:2 ${fifth}/1:2`;
  OFFBEAT[chord] = `${root}/5:2 ${fifth}/1:2 r:2 ${fifth}/1:2 ${tail}`;
}

/** Epic's bars 16 and 17, the print's left hand note for note: A minor turning to B minor, then E minor. */
const EPIC_CADENCE = "A2/5:2 E3/2:2 A3/1:4 B2+F#3/5+1:4 | E3/5:2 G3/3:2 B3/1:4 B2/5:4";

/**
 * The same figure for Legendary, an octave down: the root in octaves, then the fifth under the root on
 * each offbeat.
 */
const OFFBEAT_LOW: Record<string, string> = {};
for (const [chord, [octave, pair]] of Object.entries({
  e: ["E2+E3", "B2+E3"],
  d: ["D2+D3", "A2+D3"],
  g: ["G2+G3", "D3+G3"],
  m: ["B1+B2", "F#2+B2"],
  c: ["C2+C3", "G2+C3"],
})) {
  const tail = chord === "g" ? "r:4" : `r:2 ${pair}/2+1:2`;
  OFFBEAT_LOW[chord] = `${octave}/5+1:2 ${pair}/2+1:2 r:2 ${pair}/2+1:2 ${tail}`;
}

/** Legendary's bars 16 and 17, the print's left hand an octave down, with octaves on the roots. */
const LEGENDARY_CADENCE =
  "A1+A2/5+1:2 E2+A2/2+1:2 r:2 E2+A2/2+1:2 B1+B2/5+1:2 F#2+B2/2+1:2 | E2+E3/5+1:2 G2+E3/3+1:2 B2+E3/2+1:3 r:1 B1+B2/5+1:3 r:1";

/** The pedal of Epic and Legendary in eighths: up in bar 1, changed at each bar, held through the last bar. */
const PEDAL = `r:12 | ${Array<string>(25).fill("P:12").join(" | ")}`;

export const spanishLadies: OurSong = {
  slug: "spanish-ladies",
  title: "Spanish Ladies",
  source: {
    composer: "Traditional",
    died: null,
    published: 1840,
    edition:
      "The verse and the chorus as the score in Wikipedia's Spanish Ladies article prints them, its melody, chords and left hand; the song's earliest dated print, Marryat's novel Poor Jack (1840), gives its words in full",
  },
  about:
    "Spanish Ladies is a traditional sailors' song about a crew sailing home to England from Spain. " +
    "A version from 1769 survives in a ship's logbook.",
  funFact: "In the 1975 film Jaws, the shark hunter Quint sings a whalers' version of the song.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 3, denominator: 2, steps: 2, key: E_MINOR, hookBars: [1, 5] },
  versions: {
    common: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: `${TUNE_STILL} | ${COMMON_NEXT}`,
      left: ["r:12", bars(HELD, TUNE_CHORDS), bars(HELD, `${NEXT_CHORDS}ae`)].join(" | "),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 9 with the right hand alone, and move the hand up in the short rest of bar 5.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play bars 10 to 17 with the right hand alone. In bar 13, finger 3 takes E, so the thumb finds B.", hands: "right", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Now the left hand alone. It holds one shape for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Start with the thumb on the low B. Finger 3 then plays E." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Let go of the second B a little early. In the gap, move the thumb up to E." },
        { fromBar: 1, toBar: 17, kind: "rhythm", text: "Count three slow beats in a bar, like a ship rolling on the waves." },
      ],
      tricky: {
        6: "The thumb now plays E twice, and finger 2 plays F sharp. The hand has moved up to E.",
        11: "Fingers 4, 3 and 4 play A, G and A. Meanwhile the left hand moves finger 5 down to D.",
        16: "Finger 2 plays B, then lift the hand in the short rest. Finger 5 lands on G, and finger 4 plays F sharp.",
      },
    },
    rare: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: `${TUNE_STILL} | ${RARE_NEXT}`,
      left: [
        "r:12",
        bars(WALTZ, TUNE_CHORDS),
        bars(WALTZ, NEXT_CHORDS.replace("c", "k")),
        "A2/5:4 C3+E3/3+1:4 B2/5:3 r:1",
        "E3+G3+B3/5+3+1:12",
      ].join(" | "),
      skills: ["waltz-bass", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a low note, then a lighter note or chord twice.", hands: "left", speed: 0.6, loop: [2, 5], wait: true },
        { text: "Play the right hand alone on the first nine bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 9], wait: true },
        { text: "Play bars 10 to 17 with the right hand alone. In bar 13, finger 5 reaches the B an octave up.", hands: "right", speed: 0.6, loop: [10, 17], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "sound", text: "Play the low note of the waltz bass a little louder than the two chords after it." },
        { fromBar: 5, toBar: 6, kind: "trick", text: "Let go of the second B a little early. In the gap, move the thumb up to E." },
        { fromBar: 15, toBar: 16, kind: "fingering", text: "In bar 15, finger 4 takes the repeated E, so the thumb reaches the low A." },
      ],
      tricky: {
        6: "The thumb now plays E twice, and finger 2 plays F sharp. The left hand plays a low E, then B twice.",
        13: "Fingers 3, 2 and 1 walk down from E to B. Then finger 5 reaches the B an octave up, and finger 4 plays A.",
        17: "End with E and G together. Fingers 3 and 5 press them as one, over the left hand's last chord.",
      },
    },
    epic: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [TUNE_REACH, NEXT_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: [
        "r:12",
        bars(ALBERTI, TUNE_CHORDS),
        bars(OFFBEAT, NEXT_CHORDS),
        EPIC_CADENCE,
        bars(ALBERTI, TUNE_CHORDS),
        "E2+B2+E3/5+2+1:12",
      ].join(" | "),
      pedal: PEDAL,
      skills: ["alberti-bass", "thumb-under", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [2, 5], wait: false },
        { text: "Play the left hand alone on bars 10 to 17: a low note on the beat, then a higher note after each beat.", hands: "left", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 25, kind: "sound", text: "Change the pedal on each new bass note, once in every bar." },
        { fromBar: 15, toBar: 16, kind: "fingering", text: "Fingers 4, 3 and 2 walk down to B, and the thumb takes the low A. The thumb stays for B, so finger 5 reaches G." },
        { fromBar: 18, toBar: 25, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        17: "The thumb holds E, then finger 2 plays the two upbeat Bs. Meanwhile the left hand climbs E, G and B, then drops to the low B.",
        22: "Finger 5 plays E twice on top, while the lower note moves from G to B. Then the thumb reaches A.",
        26: "Lift both hands after the B major chord, and land on the last E minor chord together.",
      },
    },
    legendary: {
      key: E_MINOR,
      bpm: 160,
      numerator: 3,
      denominator: 2,
      steps: 4,
      right: [TUNE_REACH, NEXT_EIGHTHS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: [
        "r:12",
        bars(STRIDE, TUNE_CHORDS),
        bars(OFFBEAT_LOW, NEXT_CHORDS),
        LEGENDARY_CADENCE,
        bars(STRIDE, TUNE_CHORDS),
        "E1+E2/5+1:12",
      ].join(" | "),
      pedal: PEDAL,
      skills: ["stride", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: an octave on the first beat, then a chord twice, each with a short rest to jump.", hands: "left", speed: 0.5, loop: [2, 5], wait: true },
        { text: "Play the left hand alone on bars 10 to 17: a low octave on the beat, then a lighter pair after each beat.", hands: "left", speed: 0.5, loop: [10, 17], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [18, 25], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 9, kind: "trick", text: "Use the short rest after each octave and chord to jump to the next one." },
        { fromBar: 10, toBar: 17, kind: "sound", text: "Keep the left hand's pairs short and light, and let each low octave ring." },
        { fromBar: 18, toBar: 25, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        5: "Fingers 3 and 2 walk down to B, and the thumb plays B twice. The left hand jumps from the low G octave to its chord.",
        21: "Keep the thumb on G through the whole bar. Only the top note moves, from E to D to B.",
        26: "Lift both hands in the short rest of bar 25. Then land on the last chord, over the low E octave.",
      },
    },
  },
  de: {
    about:
      "Spanish Ladies ist ein traditionelles Seemannslied über eine Mannschaft, die von Spanien nach England heimsegelt. " +
      "Eine Fassung von 1769 ist im Logbuch eines Schiffs erhalten.",
    funFact: "Im Film Der weiße Hai von 1975 singt der Haijäger Quint eine Walfänger-Fassung des Lieds.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 9 nur mit der rechten Hand, und rück die Hand in der kurzen Pause von Takt 5 höher.",
          "Spiel die Takte 10 bis 17 nur mit der rechten Hand. In Takt 13 nimmt Finger 3 das E, so findet der Daumen das H.",
          "Jetzt die linke Hand allein. Sie hält jeden Griff einen ganzen Takt lang.",
          "Spiel das ganze Stück langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem tiefen H an. Dann spielt Finger 3 das E.",
          "Lass das zweite H etwas früher los. In der Lücke rückt der Daumen hinauf zum E.",
          "Zähl drei langsame Schläge in jedem Takt, wie ein Schiff, das auf den Wellen schaukelt.",
        ],
        tricky: {
          6: "Jetzt spielt der Daumen zweimal das E, und Finger 2 spielt das Fis. Die Hand ist hinauf zum E gerückt.",
          11: "Finger 4, 3 und 4 spielen A, G und A. Gleichzeitig rückt die linke Hand Finger 5 hinunter zum D.",
          16: "Finger 2 spielt das H, dann heb die Hand in der kurzen Pause. Finger 5 landet auf dem G, und Finger 4 spielt das Fis.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: einen tiefen Ton, dann zweimal einen leichteren Ton oder Akkord.",
          "Spiel die ersten neun Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 10 bis 17 nur mit der rechten Hand. In Takt 13 greift Finger 5 das H eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel den tiefen Ton des Walzerbasses etwas lauter als die zwei Akkorde danach.",
          "Lass das zweite H etwas früher los. In der Lücke rückt der Daumen hinauf zum E.",
          "In Takt 15 nimmt Finger 4 das wiederholte E, so erreicht der Daumen das tiefe A.",
        ],
        tricky: {
          6: "Jetzt spielt der Daumen zweimal das E, und Finger 2 spielt das Fis. Die linke Hand spielt ein tiefes E, dann zweimal das H.",
          13: "Finger 3, 2 und 1 gehen vom E hinunter zum H. Dann greift Finger 5 das H eine Oktave höher, und Finger 4 spielt das A.",
          17: "Am Ende spielst du E und G zusammen. Finger 3 und 5 drücken sie wie einen Ton, über dem letzten Akkord der linken Hand.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Takte 10 bis 17 nur mit der linken Hand: einen tiefen Ton auf dem Schlag, dann einen höheren Ton nach jedem Schlag.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, einmal in jedem Takt.",
          "Finger 4, 3 und 2 gehen hinunter zum H, und der Daumen nimmt das tiefe A. Der Daumen bleibt für das H, so erreicht Finger 5 das G.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          17: "Der Daumen hält das E, dann spielt Finger 2 die zwei Auftakt-H. Gleichzeitig steigt die linke Hand über E, G und H und fällt dann zum tiefen H.",
          22: "Finger 5 spielt oben zweimal das E, während der untere Ton vom G zum H geht. Dann greift der Daumen das A.",
          26: "Heb beide Hände nach dem H-Dur-Akkord, und lande zusammen auf dem letzten e-Moll-Akkord.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine Oktave auf dem ersten Schlag, dann zweimal einen Akkord, jeweils mit einer kurzen Pause zum Springen.",
          "Spiel die Takte 10 bis 17 nur mit der linken Hand: eine tiefe Oktave auf dem Schlag, dann ein leichteres Paar nach jedem Schlag.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder Oktave und jedem Akkord, um zum nächsten Griff zu springen.",
          "Spiel die Paare der linken Hand kurz und leicht, und lass jede tiefe Oktave klingen.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          5: "Finger 3 und 2 gehen hinunter zum H, und der Daumen spielt zweimal das H. Die linke Hand springt von der tiefen G-Oktave zu ihrem Akkord.",
          21: "Lass den Daumen den ganzen Takt auf dem G. Nur der obere Ton bewegt sich, vom E zum D zum H.",
          26: "Heb beide Hände in der kurzen Pause von Takt 25. Dann lande auf dem letzten Akkord, über der tiefen E-Oktave.",
        },
      },
    },
  },
};

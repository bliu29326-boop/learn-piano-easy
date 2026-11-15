/**
 * *Wedding March*: the tutti theme from Mendelssohn's music to *A Midsummer Night's Dream*, in four
 * versions of ours.
 *
 * The tune is the second phrase of the march's tutti theme, from a scanned book of orchestral themes. The
 * print is in 4/4 Allegro vivace, in C major. The first phrase ends with an arpeggio no Beginner hand can
 * follow, so the tune leaves it out, and it leaves out the trill and the two grace notes too. The tune
 * writes every sixteenth as a quarter, so each print bar is a bar of 4/1, and the hook is all four bars.
 *
 * The bars after the tune come from Théodore Dubois's organ transcription of the march, printed by
 * Durand around 1909 and typeset by the Mutopia Project. Its bars 10 to 13 are the tune, note for note.
 * Its bars 19 to 22 open the march's middle section. C is held over C major, and E, D, B and G fall over
 * G major. Then G rises to C and E, and E, D, B and G fall again. Its bars 31 to 34 bring the tune back over
 * a walking bass of A, F sharp, B, D sharp, E, C sharp, D and F.
 *
 * Every version writes the print in 4/2 eighths, two bars per print bar, and keeps C major. The long G
 * of the tune ends an eighth early, so the hand lifts to its next place.
 *
 * Common and Rare play the tune, then the print's bars 19 to 21 and the first half of bar 22. These are
 * their bars 9 to 15, and bar 16 closes on C. Their right hand spreads from G to E with the thumb on G, so the new bars need
 * no move of the hand. Under the tune, their chords are F major, D major, G major and C major. Common
 * holds single bass notes and open fifths, and Rare plays a chord on each beat. Its D major chord is A
 * and D alone, so the F sharp stays the tune's one note outside the key. Under bars 9 to 15 both follow
 * the print's bass of C and G. Rare follows the print's chords there too. In its bars 11 and 15, C major
 * over G comes before G major, as in the print's bars 20 and 22.
 *
 * Epic and Legendary play the print's bars 10 to 13, 19 to 22 and 31 to 34, and close on C major. They
 * take the print's own figure: its chords in the right hand, struck in the tune's rhythm, over the
 * pedal's bass line, with the pedal. The left hand, and the right hand in bars 9 to 16, lift each chord
 * an eighth early, so the hand can jump to the next. Epic plays three notes of each chord, and its left hand strikes each bass note with one or
 * two notes of the print's left hand. Its first chord in bar 3 leaves out D sharp, which would clash
 * with the bass E. Legendary plays four notes of each chord and keeps that clash, which its guide marks.
 * In bars 9 to 16 it adds the print's left hand, which doubles the tune an octave lower. Its left hand plays the pedal's line in octaves.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune = "C6:8 B5:6 F#5:2 | A5:4 G5:4 F5:4 D5:4 | C5:8 E5:4 D5:3 E5:1 | D5:8 C5:4 r:4";

/**
 * The tune in 4/2 eighths, two bars per print bar. The thumb sits on F sharp for the first three bars.
 * The long G ends an eighth early, so the hand lifts and lands with the thumb on C.
 */
const TUNE_RIGHT = [
  "C6/5:16 | B5/4:12 F#5/1:4 | A5/3:8 G5/2:7 r:1 | F5/4:8 D5/2:8",
  "C5/1:16 | E5/3:8 D5/2:6 E5/3:2 | D5/2:16 | C5/1:8 r:8",
].join(" | ");

/**
 * Common's bars 9 to 16 in quarters: the print's bars 19 to 21 and the first half of bar 22, then C.
 * The thumb sits on G, finger 2 on B, and fingers 3 to 5 on C, D and E.
 */
const COMMON_NEXT = [
  "C5/3:8 | C5/3:6 C5/3:2 | E5/5:4 D5/4:4 | B4/2:4 G4/1:4",
  "G4/1:6 C5/3:2 | C5/3:6 E5/5:2 | E5/5:4 D5/4:4 | C5/3:8",
].join(" | ");

/** Common's left hand in quarters, in one place from C to G: one held note or an open fifth. */
const COMMON_LEFT = [
  "F3/2:8 | D3/4:8 | D3/4:4 G3/1:4 | G3/1:8 | C3+G3/5+1:8 | C3+G3/5+1:4 G3/1:4 | G3/1:8 | C3+G3/5+1:8",
  "C3+G3/5+1:8 | C3+G3/5+1:8 | G3/1:8 | G3/1:8",
  "C3+G3/5+1:8 | C3+G3/5+1:8 | G3/1:8 | C3+G3/5+1:8",
].join(" | ");

/** Rare's bars 9 to 16 in eighths: Common's bars with the print's upper notes as two-note chords. */
const RARE_NEXT = [
  "G4+C5/1+3:16 | G4+C5/1+3:12 G4+C5/1+3:4 | C5+E5/3+5:8 B4+D5/2+4:8 | B4/2:8 G4/1:8",
  "G4/1:12 G4+C5/1+3:4 | G4+C5/1+3:12 C5+E5/3+5:4 | C5+E5/3+5:8 B4+D5/2+4:8 | G4+C5/1+3:16",
].join(" | ");

/** Rare's left-hand triads. G and C share one place, so only F to D and D to G move the hand. */
const TRIAD: Record<string, string> = {
  f: "A2+C3+F3/5+4+1",
  d: "A2+D3/5+3",
  g: "B2+D3+G3/5+3+1",
  c: "C3+E3+G3/4+2+1",
};

/** Rare's left hand in eighths: a triad on every beat, two per half bar, and a held C major chord last. */
function rareLeft(): string {
  const halves = [..."ffdddgggcccgggcc" + "cccccgggcccccg"].map((chord) => `${TRIAD[chord]}:4 ${TRIAD[chord]}:4`);
  const lines: string[] = [];
  for (let at = 0; at < halves.length; at += 2) lines.push(halves.slice(at, at + 2).join(" "));
  return `${lines.join(" | ")} | ${TRIAD.c}:16`;
}

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** The print's bars 12 and 13a, or 33 and 34a, in Epic's and Legendary's right hand. */
const CADENCE = "G4+C5/1+3:16 | G4+C5+E5/1+3+5:8 G4+B4+D5/1+2+4:6 E5/5:2 | G4+B4+D5/1+2+4:15 r:1";

/** `text` with each note or chord longer than an eighth lifted an eighth early, so the hand can jump. */
function detached(text: string): string {
  return text
    .split(" ")
    .map((token) => {
      const match = /^([^r|][^:]*):(\d+)$/.exec(token);
      if (match === null || Number(match[2]) < 2) return token;
      return `${match[1]}:${Number(match[2]) - 1} r:1`;
    })
    .join(" ");
}

/**
 * A pedal line from one letter per bar: `1` holds the bar, `2` changes at its half, and `t` holds into
 * the next bar.
 */
function pedal(bars: string): string {
  const PER_BAR: Record<string, string> = { "1": "P:16", "2": "P:8 P:8", t: "P:16~" };
  return [...bars].map((bar) => PER_BAR[bar]).join(" | ");
}

/** Epic's right hand: the print's chords in three notes, the tune on top. */
const EPIC_RIGHT = [
  "E5+F#5+C6/1+2+5:16 | D#5+F#5+B5/1+2+5:12 B4+D#5+F#5/1+2+4:4 | B4+F#5+A5/1+3+5:8 B4+E5+G5/1+3+5:7 r:1",
  `A4+D5+F5/1+3+5:8 A4+D5/1+3:8 | ${CADENCE} | G4+C5/1+3:8 r:8`,
  detached(
    [
      "E4+G4+C5/1+2+5:16 | E4+G4+C5/1+2+5:12 E4+G4+C5/1+2+5:4 | G4+C5+E5/1+2+5:8 F4+B4+D5/1+3+5:8",
      "D4+F4+B4/1+2+5:8 B3+F4+G4/1+4+5:8 | C4+E4+G4/1+3+5:12 E4+G4+C5/1+2+5:4 | E4+G4+C5/1+2+5:12 G4+C5+E5/1+2+5:4",
      "G4+C5+E5/1+2+5:8 F4+B4+D5/1+3+5:8 | D4+F4+B4/1+2+5:8 B3+F4+G4/1+4+5:8",
    ].join(" | "),
  ),
  "E5+F#5+C6/1+2+5:16 | D#5+F#5+B5/1+2+5:12 B4+F#5/1+4:4 | B4+F#5+A5/1+3+5:8 Bb4+E5+G5/1+3+5:7 r:1",
  `A4+D5+F5/1+3+5:8 A4+D5+A5/1+3+5:7 r:1 | ${CADENCE} | E4+G4+C5/1+2+5:16`,
].join(" | ");

/** Epic's left hand: the print's bass line, each note struck with one or two notes of the print's chord. */
const EPIC_LEFT = [
  "A2+E3+F#3/5+2+1:16 | B2+D#3+A3/5+3+1:12 B2+D#3+A3/5+3+1:4 | E3+B3/5+1:8 E3+G3+B3/5+3+1:8 | F2+A2+D3/5+3+1:8 F2+A2+D3/5+3+1:8",
  "G2+C3+E3/5+2+1:16 | G2+G3/5+1:8 G2+F3/5+1:8 | G2+F3/5+1:16 | C3+E3/5+3:8 r:8",
  "C3+G3/5+1:16 | C3+G3/5+1:12 C3+G3/5+1:4 | G2+E3/5+1:8 G2+D3/5+2:8 | G2+B2/5+3:8 G2+G3/5+1:8",
  "C3+G3/5+1:8 C3+G3/5+1:4 C4/1:4 | E3+C4/5+1:8 C3+C4/5+1:4 E4/1:4 | G2+E3/5+1:8 G2+D3/5+2:8 | G2+B2/5+3:8 G2+G3/5+1:8",
  "A3+E4/5+1:8 F#3+E4/5+1:8 | B3+F#4/5+1:8 D#3+A3/5+1:8 | E3+B3/5+1:8 C#3+G3/5+1:8 | D3+A3/5+1:8 F2+A2+D3/5+3+1:8",
  "G2+C3+E3/5+2+1:16 | G2+G3/5+1:8 G2+F3/5+1:8 | G2+F3/5+1:16 | C2+G2+C3/5+2+1:16",
].join(" | ");

/**
 * Legendary's right hand: the print's chords in four notes, the tune on top. In bars 9 to 16 the lowest
 * note is the print's left hand, which doubles the tune an octave lower.
 */
const LEGENDARY_RIGHT = [
  "C5+E5+F#5+C6/1+2+3+5:16 | B4+D#5+F#5+B5/1+2+3+5:12 B4+D#5+F#5/1+2+3:4 | B4+D#5+F#5+A5/1+2+3+5:8 B4+E5+G5/1+3+5:7 r:1",
  `A4+D5+F5/1+3+5:8 A4+D5/1+3:8 | ${CADENCE} | G4+C5/1+3:8 r:8`,
  detached(
    [
      "C4+E4+G4+C5/1+2+3+5:16 | C4+E4+G4+C5/1+2+3+5:12 C4+E4+G4+C5/1+2+3+5:4",
      "E4+G4+C5+E5/1+2+3+5:8 D4+F4+B4+D5/1+2+4+5:8 | B3+D4+F4+B4/1+2+3+5:8 G3+B3+F4+G4/1+2+4+5:8",
      "G3+C4+E4+G4/1+2+3+5:12 C4+E4+G4+C5/1+2+3+5:4 | C4+E4+G4+C5/1+2+3+5:12 E4+G4+C5+E5/1+2+3+5:4",
      "E4+G4+C5+E5/1+2+3+5:8 D4+F4+B4+D5/1+2+4+5:8 | B3+D4+F4+B4/1+2+3+5:8 G3+B3+F4+G4/1+2+4+5:8",
    ].join(" | "),
  ),
  "C5+E5+F#5+C6/1+2+3+5:16 | B4+D#5+F#5+B5/1+2+3+5:12 B4+F#5/1+4:4 | B4+F#5+A5/1+3+5:8 Bb4+E5+G5/1+3+5:7 r:1",
  `A4+D5+F5/1+3+5:8 A4+D5+A5/1+3+5:7 r:1 | ${CADENCE} | C4+E4+G4+C5/1+2+3+5:16`,
].join(" | ");

/** Legendary's left hand: the print's pedal line in octaves. */
const LEGENDARY_LEFT = [
  "A1+A2/5+1:16 | B1+B2/5+1:12 B1+B2/5+1:4 | E2+E3/5+1:8 E2+E3/5+1:8 | F2+F3/5+1:8 F2+F3/5+1:8",
  "G1+G2/5+1:16 | G2+G3/5+1:8 G2+G3/5+1:8 | G1+G2/5+1:16 | C2+C3/5+1:8 r:8",
  "C2+C3/5+1:16 | C2+C3/5+1:12 C2+C3/5+1:4 | G1+G2/5+1:16~ | G1+G2:8 G1+G2/5+1:8",
  "C2+C3/5+1:8 C2+C3/5+1:8 | E2+E3/5+1:8 C2+C3/5+1:8 | G1+G2/5+1:16~ | G1+G2:8 G2+G3/5+1:8",
  "A2+A3/5+1:8 F#2+F#3/5+1:8 | B2+B3/5+1:8 D#2+D#3/5+1:8 | E2+E3/5+1:8 C#2+C#3/5+1:8 | D2+D3/5+1:8 F1+F2/5+1:8",
  "G1+G2/5+1:16 | G2+G3/5+1:8 G1+G2/5+1:8 | G1+G2/5+1:16 | C2+G2+C3/5+2+1:16",
].join(" | ");

/** Epic's pedal: changed with each new bass note, at most twice a bar, and held through the last bar. */
const EPIC_PEDAL = pedal("11221211" + "11222222" + "22221211");

/** Legendary's pedal, held over the print's two bass notes that last three beats. */
const LEGENDARY_PEDAL = pedal("11221211" + "11t222t2" + "22221211");

export const weddingMarch: OurSong = {
  slug: "wedding-march",
  title: "Wedding March",
  aka: ["Hochzeitsmarsch", "A Midsummer Night's Dream", "Ein Sommernachtstraum", "Op. 61"],
  source: {
    composer: "Felix Mendelssohn",
    died: 1847,
    published: 1843,
    edition:
      "A Midsummer Night's Dream, Op. 61, Wedding March, the second phrase of the tutti theme, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 452; " +
      "the bars after the tune from Théodore Dubois's transcription for organ, Paris: Durand & Cie., plate D. & F. 9516, around 1909, as the Mutopia Project typesets it; " +
      "1843 is the year of the play's first staging with the music",
  },
  about:
    "Mendelssohn wrote this march in 1842 as part of his music for Shakespeare's A Midsummer Night's Dream. " +
    "It became a favourite at weddings after Victoria, the Princess Royal, chose it for her own in 1858. " +
    "Films still play it whenever a couple leaves the altar.",
  funFact: "The first known wedding to use it was in Tiverton, England, on 2 June 1847, played by the organist Samuel Reay.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: C_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: `${TUNE_RIGHT} | ${inEighths(COMMON_NEXT)}`,
      left: inEighths(COMMON_LEFT),
      skills: ["position-change", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 4 to 8 with the right hand alone. The hand moves down to C on the long G.", hands: "right", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The thumb starts on G, and finger 3 plays C.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Now the left hand alone. It holds one note or an open fifth for a whole bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "fingering", text: "Start with the thumb on F sharp and finger 5 on the high C. The tune stays under your hand." },
        { fromBar: 3, toBar: 4, kind: "fingering", text: "Lift the hand just before G ends, and move it down. Then finger 4 lands on F." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "In the rest of bar 8, move the thumb down to G. Finger 2 takes B, and fingers 3, 4 and 5 take C, D and E." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play it bright and proud, like the doors of a church swinging open." },
      ],
      tricky: {
        2: "Hold B with finger 4 for six counts. Then the thumb plays F sharp.",
        4: "The hand has moved down. Finger 4 plays F, and finger 2 plays D.",
        9: "In the rest of bar 8, the thumb moves down to G. Then finger 3 plays C and holds it for the whole bar.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: `${TUNE_RIGHT} | ${RARE_NEXT}`,
      left: rareLeft(),
      skills: ["triads", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone. It plays a chord on every beat, like a marching band.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 3, kind: "fingering", text: "From the F chord to the D chord, finger 5 stays on A. Only the upper notes move." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the chords short and even, so the tune rings out above them." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "From bar 9, the thumb sits on G and finger 3 on C. The hand spreads to E with finger 5." },
      ],
      tricky: {
        1: "Hold the high C with finger 5. The left hand plays A, C and F on every beat.",
        2: "The left hand plays A and D. Hold B in the right hand while the chord repeats.",
        4: "Finger 4 plays F, and finger 2 plays D. The left hand stays on B, D and G.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: EPIC_RIGHT,
      left: detached(EPIC_LEFT),
      pedal: EPIC_PEDAL,
      skills: ["melody-in-chords", "pedal", "position-change"],
      practice: [
        { text: "Play the right hand's chords alone on bars 1 to 8, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. Each bass note comes with one or two notes of its chord.", hands: "left", speed: 0.5, loop: null, wait: true },
        { text: "Join the hands on bars 9 to 16, slowly. The chords move down, and the thumb leads them.", hands: "both", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 24, kind: "sound", text: "Change the pedal with each new bass note, at most twice in a bar." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the chords firm and even, like a band marching in step." },
        { fromBar: 17, toBar: 20, kind: "sound", text: "The bass walks under the tune now. Let each step of it be heard." },
      ],
      tricky: {
        15: "The chord steps down from G, C and E to F, B and D. The thumb moves from G to F, and finger 5 from E to D.",
        17: "The tune comes back over a walking bass. The left hand plays A, then F sharp, and keeps E on top with the thumb.",
        20: "The right hand plays A, D and F, then a short A, D and high A. Finger 5 reaches up from F to the high A.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: LEGENDARY_RIGHT,
      left: detached(LEGENDARY_LEFT),
      pedal: LEGENDARY_PEDAL,
      markedClashBars: [3],
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand's octaves alone, with fingers 5 and 1.", hands: "left", speed: 0.5, loop: null, wait: true },
        { text: "Play the right hand's chords alone on bars 1 to 8, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. The thumb plays the tune an octave below finger 5.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the chords like trumpets at a royal wedding. Let the little finger lead." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "Keep the thumb and finger 5 an octave apart. The middle fingers fill the chord between them." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "The right hand's D sharp rubs against the low E, as in the print. Let it ring for one beat only." },
        { fromBar: 17, toBar: 20, kind: "sound", text: "The octaves walk under the tune now. Let each step of them be heard." },
      ],
      tricky: {
        16: "Lift each chord a little early. The thumb drops from B to G, and finger 5 drops from B to G an octave above it.",
        17: "The right hand jumps up to C, E, F sharp and C. The left hand's octaves walk down from A to F sharp.",
        22: "The left hand's octave jumps from the middle G down to the low G. Fingers 4 and 5 play D and a quick E on top.",
      },
    },
  },
  de: {
    about:
      "Mendelssohn schrieb diesen Marsch 1842 als Teil seiner Musik zu Shakespeares Ein Sommernachtstraum. " +
      "Er wurde ein Liebling bei Hochzeiten, nachdem Victoria, die Princess Royal, ihn 1858 für ihre eigene Hochzeit wählte. " +
      "Filme spielen ihn noch heute, wann immer ein Paar den Altar verlässt.",
    funFact: "Die erste bekannte Hochzeit mit diesem Marsch war am 2. Juni 1847 in Tiverton, England, gespielt vom Organisten Samuel Reay.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 8 nur mit der rechten Hand. Beim langen G wandert die Hand hinunter zum C.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Der Daumen beginnt auf dem G, und Finger 3 spielt das C.",
          "Jetzt die linke Hand allein. Sie hält einen Ton oder eine leere Quinte einen ganzen oder einen halben Takt lang.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem Fis und Finger 5 auf dem hohen C an. Die Melodie bleibt unter deiner Hand.",
          "Heb die Hand kurz vor dem Ende des G und setz sie tiefer. Dann landet Finger 4 auf dem F.",
          "In der Pause von Takt 8 setzt du den Daumen hinunter aufs G. Finger 2 nimmt das H, und Finger 3, 4 und 5 nehmen C, D und E.",
          "Spiel hell und stolz, als ob die Türen einer Kirche aufschwingen.",
        ],
        tricky: {
          2: "Halt das H mit Finger 4 sechs Zählzeiten lang. Dann spielt der Daumen das Fis.",
          4: "Die Hand ist nach unten gewandert. Finger 4 spielt das F, und Finger 2 das D.",
          9: "In der Pause von Takt 8 wandert der Daumen hinunter aufs G. Dann spielt Finger 3 das C und hält es den ganzen Takt.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie spielt auf jedem Schlag einen Akkord, wie eine Blaskapelle.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Vom F-Akkord zum D-Akkord bleibt Finger 5 auf dem A. Nur die oberen Töne bewegen sich.",
          "Spiel die Akkorde kurz und gleichmäßig, damit die Melodie darüber klingt.",
          "Ab Takt 9 liegt der Daumen auf dem G und Finger 3 auf dem C. Mit Finger 5 spannt die Hand bis zum E.",
        ],
        tricky: {
          1: "Halt das hohe C mit Finger 5. Die linke Hand spielt auf jedem Schlag A, C und F.",
          2: "Die linke Hand spielt A und D. Halt das H in der rechten Hand, während der Akkord sich wiederholt.",
          4: "Finger 4 spielt das F, und Finger 2 das D. Die linke Hand bleibt auf H, D und G.",
        },
      },
      epic: {
        practice: [
          "Spiel die Akkorde der rechten Hand in den Takten 1 bis 8 allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die linke Hand allein. Zu jedem Basston kommen ein oder zwei Töne seines Akkords.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen. Die Akkorde gehen abwärts, und der Daumen führt sie.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal mit jedem neuen Basston, höchstens zweimal in einem Takt.",
          "Spiel die Akkorde fest und gleichmäßig, wie eine Kapelle im Gleichschritt.",
          "Der Bass schreitet jetzt unter der Melodie. Lass jeden seiner Schritte hören.",
        ],
        tricky: {
          15: "Der Akkord steigt von G, C und E hinab zu F, H und D. Der Daumen geht vom G zum F, und Finger 5 vom E zum D.",
          17: "Die Melodie kehrt über einem schreitenden Bass zurück. Die linke Hand spielt A, dann Fis, und hält mit dem Daumen das E oben.",
          20: "Die rechte Hand spielt A, D und F, dann kurz A, D und das hohe A. Finger 5 greift vom F hinauf zum hohen A.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Oktaven der linken Hand allein, mit Finger 5 und 1.",
          "Spiel die Akkorde der rechten Hand in den Takten 1 bis 8 allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Der Daumen spielt die Melodie eine Oktave unter Finger 5.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel die Akkorde wie Trompeten bei einer königlichen Hochzeit. Lass den kleinen Finger führen.",
          "Halt Daumen und Finger 5 eine Oktave auseinander. Die mittleren Finger füllen den Akkord dazwischen.",
          "Das Dis der rechten Hand reibt sich am tiefen E, wie im Druck. Lass es nur einen Schlag lang klingen.",
          "Die Oktaven schreiten jetzt unter der Melodie. Lass jeden ihrer Schritte hören.",
        ],
        tricky: {
          16: "Heb jeden Akkord etwas früher ab. Der Daumen fällt vom H aufs G, und Finger 5 fällt vom H aufs G eine Oktave darüber.",
          17: "Die rechte Hand springt hinauf zu C, E, Fis und C. Die Oktaven der linken Hand schreiten vom A hinab zum Fis.",
          22: "Die Oktave der linken Hand springt vom mittleren G hinab zum tiefen G. Finger 4 und 5 spielen oben D und ein schnelles E.",
        },
      },
    },
  },
};

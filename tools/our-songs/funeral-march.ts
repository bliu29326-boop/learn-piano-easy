/**
 * *Funeral March*: the opening of the third movement of Chopin's Piano Sonata No. 2, in four versions of
 * ours.
 *
 * The tune is bars 1 to 4 of the march, from two public domain typesets of the opening. The print is in
 * 4/4 Lento, with dotted eighths and sixteenths. The tune writes every sixteenth as a quarter, so each
 * print bar is a bar of 4/1. Its key is B-flat minor, and the hook is all four bars.
 *
 * Every version writes the tune in 4/2 quarters, two bars per print bar. The print's left hand rocks
 * between B-flat minor and G-flat major, a quarter each. Our versions rock the same way, one chord per
 * half bar. Bars 9 to 16 of every version play the march's next phrase, the print's bars 5 to 8. The tune
 * rises to D flat over a third below it, then falls twice from B flat down to D flat.
 *
 * Those bars follow the catalog's `piano-midi/chpn_op35_3.mid` and a public domain print of the sonata.
 * The print is the scan `Piano Sonata No.2, Op.35 (IA imslp-sonata-no2-op35-chopin-frdric).pdf` on
 * Wikimedia Commons, its page 12. Both play D flat, not C, as the short note of bar 6. The versions drop
 * the print's two grace notes.
 *
 * B-flat minor has five flats, so every version moves the key. Common and Rare play in D minor, and Epic
 * and Legendary in C minor. In Common and Rare, the print's G-flat chord would clash with the tune in bar
 * 10. The next B-flat minor chord comes half a bar early there, and in Common's bar 14. Epic and Legendary
 * keep the print's clash in bar 10 and mark it. In Legendary's bar 23, the left hand takes F, then G,
 * under the tune's four-note chords.
 *
 * Common plays the tune over the rocking bass in single notes. It plays each fall an octave lower, so no
 * leap passes a sixth. Rare tolls a chord on each beat and plays the print's thirds as two-note chords.
 * Epic and Legendary take the print's left hand, a low chord of three notes on each beat, with the pedal.
 * Epic plays the print's thirds as two-note chords and each fall in single notes. It then plays the tune
 * again an octave up over sixths. Legendary plays the tune in octaves, and each fall over the print's
 * third. It then plays the tune again in four-note chords. Every version closes on the tonic minor.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which no version keeps. */
const B_FLAT_MINOR: Key = { tonic: 10, mode: "minor" };

/** The key Common and Rare move the song to. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The key Epic and Legendary move the song to. */
const C_MINOR: Key = { tonic: 0, mode: "minor" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune = "Bb3:4 Bb3:3 Bb3:1 Bb3:8 | Bb3:4 Bb3:3 Bb3:1 Bb3:8 | Bb3:4 Bb3:3 Bb3:1 Bb3:4 Db4:3 C4:1 | C4:3 Bb3:1 Bb3:3 A3:1 Bb3:8";

/** The tune in D minor, in 4/2 quarters, with the right hand's thumb on C sharp. */
const TUNE_D = [
  "D4/2:4 D4/2:3 D4/2:1 | D4/2:8 | D4/2:4 D4/2:3 D4/2:1 | D4/2:8",
  "D4/2:4 D4/2:3 D4/2:1 | D4/2:4 F4/4:3 E4/3:1 | E4/3:3 D4/2:1 D4/2:3 C#4/1:1 | D4/2:8",
].join(" | ");

/**
 * Common's bars 9 to 16, the print's bars 5 to 8 in D minor quarters. The tune climbs to F, then falls
 * from D through C, B flat and A, twice. The hand moves up a key at bar 9. The fall sounds an octave
 * lower than the print's, from bar 13, so the hand moves down a third instead of leaping up a sixth.
 * Bar 14 holds A and leaves out the print's last F, so the fall can start again without a leap.
 */
const COMMON_NEXT = [
  "F4/3:4 F4/3:3 F4/3:1 | F4/3:4 A4/5:3 G4/4:1 | G4/4:3 F4/3:1 F4/3:3 F4/3:1 | F4/3:7 r:1",
  "D4/5:2 C4/4:2 Bb3/3:3 A3/2:1 | A3/2:8 | D4/5:2 C4/4:2 Bb3/3:3 A3/2:1 | A3/2:4 F3/1:4",
].join(" | ");

/**
 * Common's left hand in quarters: the print's bass rocking between D and B flat, and D held at the close.
 * In bars 10 and 14, D comes half a bar early, since the print's B flat would clash with the tune's A.
 */
const COMMON_LEFT = [
  "D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4",
  "D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4 | A2/4:8 | D3/1:8",
  "D3/1:4 Bb2/3:4 | D3/1:8 | D3/1:4 Bb2/3:4 | D3/1:4 Bb2/3:4",
  "D3/1:4 Bb2/3:4 | D3/1:8 | D3/1:4 Bb2/3:4 | D3/1:8",
].join(" | ");

/**
 * Rare's bars 9 to 16, the print's bars 5 to 8 in D minor eighths. The print's third under the tune
 * becomes a two-note chord, and the falling line plays alone. Bar 11 drops the print's E under G, which
 * would clash with the F of the left hand's chord.
 */
const RARE_NEXT = [
  "D4+F4/1+3:8 D4+F4/1+3:6 F4/3:2 | D4+F4/1+3:8 F4+A4/3+5:6 E4+G4/2+4:2",
  "G4/4:6 D4+F4/1+3:2 D4+F4/1+3:6 D4+F4/1+3:2 | D4+F4/1+3:14 r:2",
  "D5/5:4 C5/4:4 Bb4/3:6 A4/2:2 | F4+A4/1+2:8 F4/1:8",
  "D5/5:4 C5/4:4 Bb4/3:6 A4/2:2 | F4+A4/1+2:8 F4/1:8",
].join(" | ");

/** Rare's left-hand chords for D minor, B flat and A, voiced so the change between the first two keeps the hand still. */
const TRIAD: Record<string, string> = {
  d: "A2+D3+F3/5+2+1",
  b: "Bb2+D3+F3/4+2+1",
  a: "A2/5",
};

/**
 * Rare's left hand in eighths: a chord on every beat, rocking between D minor and B flat as the print
 * does. In bar 10, D minor comes half a bar early, since B flat would clash with the tune's A.
 */
function rareLeft(): string {
  const toll = (first: string, second: string) => `${TRIAD[first]}:4 ${TRIAD[first]}:4 ${TRIAD[second]}:4 ${TRIAD[second]}:4`;
  return [
    ...Array<string>(6).fill(toll("d", "b")),
    toll("a", "a"),
    toll("d", "d"),
    toll("d", "b"),
    toll("d", "d"),
    ...Array<string>(5).fill(toll("d", "b")),
    `${TRIAD.d}:16`,
  ].join(" | ");
}

/** The tune in C minor, in 4/2 eighths, with the right hand's thumb on B. */
const TUNE_C = [
  "C4/2:8 C4/2:6 C4/2:2 | C4/2:16 | C4/2:8 C4/2:6 C4/2:2 | C4/2:16",
  "C4/2:8 C4/2:6 C4/2:2 | C4/2:8 Eb4/4:6 D4/3:2 | D4/3:6 C4/2:2 C4/2:6 B3/1:2 | C4/2:16",
].join(" | ");

/**
 * Epic's and Legendary's bars 9 to 12, the print's bars 5 and 6 in C minor eighths. The tune climbs to E
 * flat, with the print's third under it as a two-note chord.
 */
const NEXT_C = [
  "C4+Eb4/1+3:8 C4+Eb4/1+3:6 Eb4/3:2 | C4+Eb4/1+3:8 Eb4+G4/3+5:6 D4+F4/2+4:2",
  "D4+F4/2+4:6 C4+Eb4/1+3:2 C4+Eb4/1+3:6 C4+Eb4/1+3:2 | C4+Eb4/1+3:14 r:2",
].join(" | ");

/** Epic's bars 13 to 16, the print's bars 7 and 8: the line falls from C alone, then lands on the print's chord. */
const EPIC_FALL = [
  "C5/5:4 Bb4/4:4 Ab4/3:6 G4/2:2 | C4+Eb4+G4/1+2+4:8 C4+Eb4/1+2:6 r:2",
  "C5/5:4 Bb4/4:4 Ab4/3:6 G4/2:2 | C4+Eb4+G4/1+2+4:8 C4+Eb4/1+2:8",
].join(" | ");

/** Legendary's bars 13 to 16, the print's bars 7 and 8, with the print's third held under each long note. */
const LEGENDARY_FALL = [
  "C4+Eb4+C5/1+2+5:4 Bb4/4:4 C4+Eb4+Ab4/1+2+3:6 G4/2:2 | C4+Eb4+G4/1+2+4:8 C4+Eb4/1+2:6 r:2",
  "C4+Eb4+C5/1+2+5:4 Bb4/4:4 C4+Eb4+Ab4/1+2+3:6 G4/2:2 | C4+Eb4+G4/1+2+4:8 C4+Eb4/1+2:8",
].join(" | ");

/** Epic's tune again, an octave up, with a sixth under its long notes. */
const EPIC_TUNE_AGAIN = [
  "Eb4+C5/1+5:8 Eb4+C5/1+5:6 C5/5:2 | Eb4+C5/1+5:16 | Eb4+C5/1+5:8 Eb4+C5/1+5:6 C5/5:2 | Eb4+C5/1+5:16",
  "Eb4+C5/1+5:8 Eb4+C5/1+5:6 C5/5:2 | Eb4+C5/1+4:8 Eb5/5:6 D5/4:2",
  "F4+D5/1+5:6 C5/4:2 Eb4+C5/1+5:6 B4/4:2 | Eb4+G4+C5/1+2+5:16",
].join(" | ");

/** Legendary's tune in octaves: each note of `TUNE_C` with the note an octave up, played by fingers 1 and 5. */
const TUNE_OCTAVES = TUNE_C.replace(
  /([A-G][#b]?)(\d)\/[1-5](?=:)/g,
  (_, name: string, octave: string) => `${name}${octave}+${name}${Number(octave) + 1}/1+5`,
);

/** Legendary's tune again in chords of three and four notes, the tune on top. */
const LEGENDARY_TUNE_AGAIN = [
  "C4+Eb4+G4+C5/1+2+3+5:8 Eb4+Ab4+C5/1+3+5:6 Eb4+Ab4+C5/1+3+5:2 | C4+Eb4+G4+C5/1+2+3+5:8 C4+Eb4+Ab4+C5/1+2+4+5:8",
  "C4+Eb4+G4+C5/1+2+3+5:8 Eb4+Ab4+C5/1+3+5:6 Eb4+Ab4+C5/1+3+5:2 | C4+Eb4+G4+C5/1+2+3+5:8 C4+Eb4+Ab4+C5/1+2+4+5:8",
  "C4+Eb4+G4+C5/1+2+3+5:8 Eb4+Ab4+C5/1+3+5:6 Eb4+Ab4+C5/1+3+5:2 | C4+Eb4+G4+C5/1+2+3+5:7 r:1 Eb4+Ab4+C5+Eb5/1+2+3+5:6 D5/4:2",
  "F4+Ab4+D5/1+2+5:6 C5/4:2 G4+C5/2+5:6 B4/4:2 | Eb4+G4+C5/1+3+5:16",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"caca"`: one letter per half bar, two per bar. */
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
 * The print's rocking chords in eighths, one per half bar, which is a print beat. `c` is the root, fifth
 * and octave of C minor, as the print's B-flat minor has them. `a` is A flat between two E flats, as the
 * print's G-flat chord stands between two D flats. `f` and `o` are F and G in the shape of `c`, and `o`
 * lets go early so the hand can jump to the last chord.
 */
const ROCK: Record<string, string> = {
  c: "C2+G2+C3/5+2+1:8",
  a: "Eb2+Ab2+Eb3/5+2+1:8",
  f: "F2+C3+F3/5+2+1:8",
  o: "G2+D3+G3/5+2+1:7 r:1",
};

/** The print's chords under its first eight bars, which are our 16, two letters per bar. */
const PRINT_CHORDS = "ca".repeat(16);

/**
 * Legendary's chords under the tune again, as the print's, but bar 7 takes F, then an open fifth on G.
 * The print's chords there would clash with the right hand's four-note chords.
 */
const AGAIN_CHORDS = `${"ca".repeat(6)}fo`;

/** The last bar of Epic and Legendary in the left hand: a low C minor chord. */
const LAST_LEFT = "C2+G2+C3/5+2+1:16";

/** The pedal of Epic and Legendary: changed at each half bar, held through the last bar. */
const PEDAL = `${Array<string>(23).fill("P:8 P:8").join(" | ")} | P:16`;

export const funeralMarch: OurSong = {
  slug: "funeral-march",
  title: "Funeral March",
  aka: ["Marche funèbre", "Chopin's Funeral March", "Trauermarsch", "Piano Sonata No. 2, Op. 35"],
  source: {
    composer: "Frédéric Chopin",
    died: 1849,
    published: 1840,
    edition:
      "Piano Sonata No. 2 in B-flat minor, Op. 35, third movement, bars 1 to 8, as two public domain typesets of the opening and a public domain print with the plate C. VIII. 1 on Wikimedia Commons print them; the sonata was first published in May 1840",
  },
  about:
    "This funeral march is the third movement of Chopin's Piano Sonata No. 2, published in 1840. " +
    "It was played at Chopin's own funeral, and at the state funeral of John F. Kennedy. " +
    "Films and cartoons often quote its opening for a funeral.",
  funFact: "Many scholars date the march to 1837, two years before Chopin finished the rest of the sonata.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: B_FLAT_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 2,
      right: `${TUNE_D} | ${COMMON_NEXT}`,
      left: COMMON_LEFT,
      skills: ["position-change", "held-bass", "dotted-rhythm"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune finally moves away from D.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It rocks between D and B flat, like a slow bell.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Count to four on the first D. Then a long D and a short D lead into the next bar." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play softly and heavily, like slow steps behind a coffin." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "At bar 9, the hand moves up one key, so finger 3 plays F. At bar 13, finger 5 moves down to D." },
      ],
      tricky: {
        7: "Hold E for three counts, then play D for one. Hold D for three counts, and the thumb plays C sharp last.",
        9: "Move the hand up one key, so finger 3 plays F. Count four on the first F, then a long F and a short F.",
        13: "Use the short rest in bar 12 to move the hand down. Finger 5 plays D, then the tune walks down to A.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 138,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_D.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`), RARE_NEXT].join(" | "),
      left: rareLeft(),
      skills: ["triads", "two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone. It tolls a chord on every beat, like a bell.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the left hand's chords soft and even, so the tune stays on top." },
        { fromBar: 1, toBar: 6, kind: "fingering", text: "Between the two chords, only the low note moves. Fingers 2 and 1 stay on D and F." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "The tune falls from the high D. Let each long note sing, and play each short one lightly." },
      ],
      tricky: {
        9: "Press D and F together with the thumb and finger 3, and hold them for two beats. Then press them again, and play F alone, short.",
        13: "Use the rest in bar 12 to move the hand up. Finger 5 plays the high D, then the tune walks down to A.",
        15: "The fall comes again. From the thumb on F, reach up with finger 5 to the high D.",
      },
    },
    epic: {
      key: C_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_C, NEXT_C, EPIC_FALL, EPIC_TUNE_AGAIN].join(" | "),
      left: `${bars(ROCK, `${PRINT_CHORDS}${PRINT_CHORDS.slice(0, 14)}`)} | ${LAST_LEFT}`,
      markedClashBars: [10],
      pedal: PEDAL,
      skills: ["thirds-and-sixths", "position-change", "pedal"],
      practice: [
        { text: "Play the left hand alone: a low chord on each beat, rocking between C and E flat like a slow bell.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play bars 13 to 16 with the right hand alone. The tune falls from the high C, then the hand lands on a chord.", hands: "right", speed: 0.5, loop: [13, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "The thumb stays near C. Each pair of notes moves by one key at a time." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "The tune is now on top of each pair. Let finger 5 sing it." },
      ],
      tricky: {
        13: "Finger 5 plays the high C. The tune walks down through B flat and A flat to G, with fingers 4, 3 and 2.",
        17: "The tune comes back an octave up. The thumb takes E flat, and finger 5 takes the C above it.",
        22: "Finger 4 takes C in the sixth, so finger 5 is free to reach up to E flat.",
      },
    },
    legendary: {
      key: C_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 2,
      steps: 4,
      right: [TUNE_OCTAVES.replace(/:16$/, ":14 r:2"), NEXT_C, LEGENDARY_FALL, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: `${bars(ROCK, `${PRINT_CHORDS}${AGAIN_CHORDS}`)} | ${LAST_LEFT}`,
      markedClashBars: [10],
      pedal: PEDAL,
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone: a low chord on each beat, rocking between C and E flat like a slow bell.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play bars 9 to 16 with the right hand alone. Hold the lower notes, and let the top note sing.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the octaves heavy and slow, like a great bell. Let the little finger lead." },
        { fromBar: 13, toBar: 16, kind: "fingering", text: "The thumb and finger 2 strike C and E flat under each long note. The other fingers play the falling tune above them." },
        { fromBar: 17, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        13: "Spread the hand from C up to the high C. The thumb and finger 2 strike C and E flat again under A flat.",
        15: "The fall comes again. Use the short rest in bar 14 to spread the hand back up to the high C.",
        22: "Lift the hand in the short rest, then land on E flat, A flat, C and E flat.",
      },
    },
  },
  de: {
    about:
      "Dieser Trauermarsch ist der dritte Satz von Chopins Klaviersonate Nr. 2, die 1840 erschien. " +
      "Er wurde bei Chopins eigener Beerdigung gespielt, und beim Staatsbegräbnis von John F. Kennedy. " +
      "Filme und Zeichentrickfilme zitieren oft seinen Anfang für eine Beerdigung.",
    funFact: "Viele Forscher datieren den Marsch auf 1837, zwei Jahre bevor Chopin den Rest der Sonate vollendete.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie verlässt endlich das D.",
          "Jetzt die linke Hand allein. Sie wiegt zwischen D und B hin und her, wie eine langsame Glocke.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl beim ersten D bis vier. Dann führen ein langes D und ein kurzes D in den nächsten Takt.",
          "Spiel leise und schwer, wie langsame Schritte hinter einem Sarg.",
          "In Takt 9 rückt die Hand eine Taste höher, damit Finger 3 das F spielt. In Takt 13 geht Finger 5 hinab zum D.",
        ],
        tricky: {
          7: "Halt das E drei Zählzeiten lang, dann spiel das D für eine. Halt das D drei Zählzeiten lang, und zuletzt spielt der Daumen das Cis.",
          9: "Rück die Hand eine Taste höher, damit Finger 3 das F spielt. Zähl beim ersten F bis vier, dann folgen ein langes und ein kurzes F.",
          13: "Nutz die kurze Pause in Takt 12, um die Hand nach unten zu führen. Finger 5 spielt das D, dann geht die Melodie hinab zum A.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie läutet auf jedem Schlag einen Akkord, wie eine Glocke.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel die Akkorde der linken Hand leise und gleichmäßig, damit die Melodie oben bleibt.",
          "Zwischen den beiden Akkorden bewegt sich nur der tiefe Ton. Finger 2 und 1 bleiben auf D und F.",
          "Die Melodie fällt vom hohen D. Lass jeden langen Ton singen, und spiel jeden kurzen leicht.",
        ],
        tricky: {
          9: "Drück D und F mit Daumen und Finger 3 zusammen, und halt sie zwei Schläge lang. Dann drück sie noch einmal, und spiel das F allein, kurz.",
          13: "Nutz die Pause in Takt 12, um die Hand nach oben zu führen. Finger 5 spielt das hohe D, dann geht die Melodie hinab zum A.",
          15: "Der Fall kommt noch einmal. Greif vom Daumen auf dem F mit Finger 5 hinauf zum hohen D.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein: ein tiefer Akkord auf jedem Schlag, der wie eine langsame Glocke zwischen C und Es wiegt.",
          "Spiel die Takte 13 bis 16 nur mit der rechten Hand. Die Melodie fällt vom hohen C, dann landet die Hand auf einem Akkord.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Der Daumen bleibt nahe am C. Jedes Tonpaar rückt nur um eine Taste weiter.",
          "Die Melodie ist jetzt der obere Ton jedes Paars. Lass Finger 5 sie singen.",
        ],
        tricky: {
          13: "Finger 5 spielt das hohe C. Die Melodie geht über B und As hinab zum G, mit Finger 4, 3 und 2.",
          17: "Die Melodie kehrt eine Oktave höher zurück. Der Daumen nimmt das Es, und Finger 5 das C darüber.",
          22: "Finger 4 nimmt das C in der Sexte, damit Finger 5 frei bis zum Es hinaufreicht.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: ein tiefer Akkord auf jedem Schlag, der wie eine langsame Glocke zwischen C und Es wiegt.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand. Halt die unteren Töne, und lass den oberen Ton singen.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel die Oktaven schwer und langsam, wie eine große Glocke. Lass den kleinen Finger führen.",
          "Daumen und Finger 2 schlagen unter jedem langen Ton C und Es an. Die anderen Finger spielen darüber die fallende Melodie.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          13: "Spann die Hand vom C bis hinauf zum hohen C. Unter dem As schlagen Daumen und Finger 2 noch einmal C und Es an.",
          15: "Der Fall kommt noch einmal. Nutz die kurze Pause in Takt 14, um die Hand wieder bis zum hohen C zu spannen.",
          22: "Heb die Hand in der kurzen Pause, dann lande auf Es, As, C und Es.",
        },
      },
    },
  },
};

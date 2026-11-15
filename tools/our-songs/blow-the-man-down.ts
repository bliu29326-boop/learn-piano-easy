/**
 * *Blow the Man Down*: the halyard shanty, in four versions of ours.
 *
 * The source is song 16 of R. R. Terry's *The Shanty Book, Part I* of 1921, on its pages 34 and 35. The
 * scan is `The Shanty Book Part I (IA shantybooksailor00terr).pdf` on Wikimedia Commons. It prints the
 * song in 6/8, in E-flat major, for voice and piano. After two bars of piano, it prints 8 bars of verse
 * and chorus, sung again for each of 7 verses.
 *
 * The tune is those 8 bars with the last verse's ending: an upbeat of two eighths and the 8 bars that
 * follow. The print has no further phrase. The tune writes every sixteenth as a quarter, so each print
 * bar is a bar of 6/2. Its range is D4 to E-flat 5, and the hook is its first four bars.
 *
 * Every version writes the tune in 6/4 eighths, two bars per print bar. Bar 1 holds the upbeat alone, and
 * bars 2 to 17 play print bars 1 to 8.
 *
 * The print's piano part rolls one chord in each hand on every dotted quarter, which is one bar of ours.
 * Its chords are E flat under print bars 1 and 2, G minor and F minor under bar 3, and F minor and B flat
 * under bars 4 and 5. Bar 6 holds F minor, with E flat in the bass for the high Cs. Print bars 7 and 8
 * close over a held bass with a tenor voice above it: B-flat seventh, E flat, A flat, B-flat seventh, E
 * flat. The tenor's A flat rubs against the tune's G in print bar 8, our bar 16.
 *
 * E-flat major has three flats, so Common and Rare move the song to G major. Their chords are our
 * simpler tonic, subdominant and dominant. Each plays the tune once and ends on the home chord in bar 17.
 * Common plays one held bass note or open fifth a bar. Rare plays a long bass note and a short chord in
 * each half bar, and holds the home chord in its last bar.
 *
 * Epic and Legendary keep E-flat major and take the print's left hand. They roll each of its chords
 * upwards in eighths, and hold the top note with the pedal. In print bars 7 and 8 they play its bass and
 * tenor. Both then play print bars 6 to 8 again as bars 18 to 23, over the same left hand. Epic plays
 * the tune in single notes, then the repeat an octave higher. Legendary plays the tune over the print's
 * right-hand chords, then the repeat in octaves. Both mark the print's rub in bars 16 and 22. In
 * Legendary's bar 7, the print's G in the left hand rubs against the chord's A flat, and is marked too.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const E_FLAT_MAJOR: Key = { tonic: 3, mode: "major" };

/** The key Common and Rare move the song to. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The tune in 6/2, in quarters, which are the print's sixteenths: one bar per print bar, after the upbeat. */
const tune =
  "r:8 Eb4:2 G4:2 | Bb4:3 C5:1 Bb4:2 G4:2 Eb4:2 G4:2 | Bb4:2 C5:2 Bb4:2 G4:2 Eb4:2 G4:2 | Bb4:6 C5:6 | Ab4:3 G4:1 Ab4:2 F4:4 G4:2 | Ab4:3 G4:1 Ab4:2 F4:2 D4:2 F4:2 | Ab4:2 G4:2 F4:2 C5:4 Eb5:2 | Bb4:1 Bb4:3 Bb4:2 Bb4:4 Ab4:2 | G4:3 F4:1 G4:2 Eb4:6";

/** The tune in G major, in 6/4 eighths, for Common. The hand moves only after the long E and the high G. */
const TUNE_G = [
  "r:4 G4/1:4 B4/2:4 | D5/4:6 E5/5:2 D5/4:4 | B4/2:4 G4/1:4 B4/2:4 | D5/4:4 E5/5:4 D5/4:4 | B4/2:4 G4/1:4 B4/2:4",
  "D5/4:12 | E5/5:12 | C5/4:6 B4/3:2 C5/4:4 | A4/2:8 B4/3:4 | C5/4:6 B4/3:2 C5/4:4 | A4/2:4 F#4/1:4 A4/2:4",
  "C5/3:4 B4/2:4 A4/1:4 | E5/4:8 G5/5:4 | D5/5:2 D5/5:6 D5/5:4 | D5/5:8 C5/4:4 | B4/3:6 A4/2:2 B4/3:4 | G4/1:12",
].join(" | ");

/** Rare's tune: Common's, with a two-note chord under four long notes. */
const TUNE_G_CHORDS = TUNE_G.replace("D5/4:12", "B4+D5/2+4:12")
  .replace("E5/5:12", "C5+E5/3+5:12")
  .replace("A4/2:8", "F#4+A4/1+2:8")
  .replace("D5/5:8", "B4+D5/3+5:8");

/** The tune in E-flat major, in 6/4 eighths, for Epic. Its last E flat leaves a quarter's rest to jump to the repeat. */
const TUNE_E = [
  "r:4 Eb4/1:4 G4/2:4 | Bb4/4:6 C5/5:2 Bb4/4:4 | G4/2:4 Eb4/1:4 G4/2:4 | Bb4/4:4 C5/5:4 Bb4/4:4 | G4/2:4 Eb4/1:4 G4/2:4",
  "Bb4/4:12 | C5/5:12 | Ab4/4:6 G4/3:2 Ab4/4:4 | F4/2:8 G4/3:4 | Ab4/4:6 G4/3:2 Ab4/4:4 | F4/2:4 D4/1:4 F4/2:4",
  "Ab4/3:4 G4/2:4 F4/1:4 | C5/4:8 Eb5/5:4 | Bb4/5:2 Bb4/5:6 Bb4/5:4 | Bb4/5:8 Ab4/4:4 | G4/3:6 F4/2:2 G4/3:4 | Eb4/1:10 r:2",
].join(" | ");

/**
 * Legendary's tune in E-flat major, over the print's right-hand chords. Each chord keeps the print's
 * notes below the tune, within an octave. In bar 10 it leaves out C, which the left hand holds.
 */
const TUNE_E_CHORDS = [
  "r:4 Eb4/1:4 G4/2:4",
  "Eb4+G4+Bb4/1+2+4:6 C5/5:2 Eb4+G4+Bb4/1+2+4:4",
  "Eb4+G4/1+2:4 Eb4/1:4 G4/2:4",
  "Eb4+G4+Bb4/1+2+4:4 Eb4+G4+C5/1+2+5:4 Eb4+G4+Bb4/1+2+4:4",
  "Eb4+G4/1+2:4 Eb4/1:4 G4/2:4",
  "Bb3+D4+G4+Bb4/1+2+3+5:12",
  "C4+F4+Ab4+C5/1+2+4+5:12",
  "C4+F4+Ab4/1+2+4:6 G4/3:2 C4+F4+Ab4/1+2+4:4",
  "Bb3+D4+F4/1+2+4:8 G4/4:4",
  "F4+Ab4/2+4:6 G4/3:2 F4+Ab4/2+4:4",
  "Bb3+D4+F4/1+2+4:4 D4/2:4 F4/4:4",
  "Ab4/4:4 G4/3:4 F4/2:4",
  "F4+Ab4+C5/1+2+4:8 Eb5/5:4",
  "Bb4/5:2 D4+F4+Bb4/1+2+5:6 D4+F4+Bb4/1+2+5:4",
  "Eb4+G4+Bb4/1+2+5:8 Eb4+Ab4/1+4:4",
  "D4+G4/1+3:6 F4/2:2 D4+G4/1+3:4",
  "Bb3+Eb4/1+3:10 r:2",
].join(" | ");

/** Epic's bars 18 to 23: tune bars 12 to 17, the print's bars 6 to 8, an octave higher. */
const CHORUS_HIGH = [
  "Ab5/3:4 G5/2:4 F5/1:4",
  "C6/4:8 Eb6/5:4",
  "Bb5/5:2 Bb5/5:6 Bb5/5:4",
  "Bb5/5:8 Ab5/4:4",
  "G5/3:6 F5/2:2 G5/3:4",
  "Eb5/1:12",
].join(" | ");

/**
 * Legendary's bars 18 to 23: the same print bars in octaves, with the print's chord between on long
 * notes. An eighth's rest ends bars 18, 19 and 22, so the hand can jump to the next octave.
 */
const CHORUS_OCTAVES = [
  "Ab4+C5+Ab5/1+2+5:4 G4+G5/1+5:4 F4+F5/1+5:3 r:1",
  "C5+F5+Ab5+C6/1+2+3+5:8 Eb5+Eb6/1+5:3 r:1",
  "Bb4+Bb5/1+5:2 Bb4+D5+F5+Bb5/1+2+3+5:6 Bb4+F5+Bb5/1+3+5:4",
  "Bb4+Eb5+G5+Bb5/1+2+3+5:8 Ab4+Eb5+Ab5/1+3+5:4",
  "G4+Bb4+D5+G5/1+2+3+5:6 F4+F5/1+5:2 G4+Bb4+G5/1+2+5:3 r:1",
  "Eb4+G4+Bb4+Eb5/1+2+3+5:12",
].join(" | ");

/**
 * The print's left hand under tune bars 2 to 16, one bar each. A chord rolls upwards in eighths, and its
 * top note holds to the end of the bar. Bars 14 to 16 are print bars 7 and 8: a bass and a tenor note
 * together, then the tenor alone.
 */
const PRINT_LEFT = [
  "Eb2/5:1 Bb2/2:1 Eb3/1:10",
  "Eb2/5:1 Bb2/2:1 Eb3/1:10",
  "Eb2/5:1 Bb2/2:1 Eb3/1:10",
  "Eb2/5:1 Bb2/2:1 Eb3/1:10",
  "G2/5:1 D3/2:1 G3/1:10",
  "C3/5:1 G3/1:11",
  "F2/5:1 C3/2:1 F3/1:10",
  "Bb2/5:1 F3/2:1 Bb3/1:10",
  "F3/5:1 Ab3/3:1 C4/1:10",
  "Bb2/5:1 F3/2:1 Bb3/1:10",
  "F3/5:1 Ab3/3:1 C4/1:10",
  "Eb3/5:1 Ab3/2:1 C4/1:10",
  "D3+Bb3/5+1:8 Ab3/2:4",
  "Eb3+G3/4+2:8 C3+Ab3/5+1:4",
  "Bb2+Bb3/5+1:8 Ab3/2:4",
];

/** The left hand under the repeat of tune bars 12 to 16, the same as under the tune. */
const CHORUS_LEFT = PRINT_LEFT.slice(10);

/** Bars of `patterns` from `chords`, such as `"ttss"`: one letter per half bar, two per bar. */
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

/** The chords under tune bars 2 to 17, two per bar: t, s and d are the tonic, subdominant and dominant. */
const TUNE_CHORDS = "tttttttttt" + "ss" + "dddddddddd" + "ss" + "tt" + "dd" + "tt" + "tt";

/** Common's held shapes in G major, a whole bar each. The hand stays on G2 to D3, finger 5 to the thumb. */
const HELD: Record<string, string> = {
  t: "G2+D3/5+1:12",
  s: "C3/2:12",
  d: "D3/1:12",
};

/** Rare's half bar in G major: a long bass note, then a short chord, in Common's hand place. */
const LILT: Record<string, string> = {
  t: "G2/5:4 B2+D3/3+1:2",
  s: "C3/2:4 G2+C3/5+2:2",
  d: "D3/1:4 A2+D3/4+1:2",
};

/** The pedal of bars 12 to 17, changed with each chord: once a bar, and at the A-flat chord in bar 15. */
const CHORUS_PEDAL = ["P:12", "P:12", "P:12", "P:8 P:4", "P:12", "P:12"];

/** The pedal of Epic and Legendary: up in bar 1, then changed with each chord of the left hand. */
const PEDAL = ["r:12", ...Array<string>(10).fill("P:12"), ...CHORUS_PEDAL, ...CHORUS_PEDAL].join(" | ");

/** Common's left hand: rest in bar 1, then one held shape per bar. */
const COMMON_LEFT = ["r:12", ...[...TUNE_CHORDS].filter((_, at) => at % 2 === 0).map((chord) => HELD[chord])].join(" | ");

export const blowTheManDown: OurSong = {
  slug: "blow-the-man-down",
  title: "Blow the Man Down",
  source: {
    composer: "Traditional",
    died: null,
    published: 1921,
    edition:
      "The verse, chorus and piano part as R. R. Terry's The Shanty Book, Part I (1921) prints them on pages 34 and 35, scanned on Wikimedia Commons",
  },
  about:
    "Blow the Man Down is a halyard shanty, sung while a crew hauled a heavy sail up its mast. " +
    "Our tune follows R. R. Terry's print of 1921.",
  funFact: "A newspaper in Syracuse, New York, quoted a line of the song in 1867. Sailors had sung it on a steamship from New York to Glasgow.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 6, denominator: 2, steps: 2, key: E_FLAT_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 132,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: TUNE_G,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "open-fifths", "dotted-rhythm"],
      practice: [
        { text: "Play bars 1 to 7 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Play bars 8 to 17 with the right hand alone. The hand moves twice, each time after a long note.", hands: "right", speed: 0.6, loop: [8, 17], wait: true },
        { text: "Now the left hand alone. It holds one note or two for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first seven bars, slowly.", hands: "both", speed: 0.7, loop: [1, 7], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 7, kind: "fingering", text: "Start with the thumb on G. Finger 2 takes B, finger 4 takes D, and finger 5 takes E." },
        { fromBar: 2, toBar: 3, kind: "rhythm", text: "Hold the first D for three counts, then play E for one. The short E pulls like a rope." },
        { fromBar: 1, toBar: 17, kind: "sound", text: "Sailors sang this while they hauled a sail. Lean a little on the first note of each bar, like a pull." },
      ],
      tricky: {
        8: "After the long E, the hand moves down. Finger 4 lands on C, and the thumb waits over F sharp.",
        13: "Finger 4 reaches up from A to E, and finger 5 plays the high G.",
        14: "After the high G, finger 5 moves down to D. It plays D three times: short, long, then medium.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: TUNE_G_CHORDS,
      left: `r:12 | ${bars(LILT, TUNE_CHORDS.slice(0, -2))} | G2+B2+D3/5+3+1:12`,
      skills: ["two-note-chords", "triads", "eighth-notes"],
      practice: [
        { text: "Play the left hand alone: a long low note, then a short chord.", hands: "left", speed: 0.6, loop: [2, 9], wait: true },
        { text: "Play the right hand alone on the first seven bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 7], wait: true },
        { text: "Join the hands on bars 8 to 17, slowly.", hands: "both", speed: 0.6, loop: [8, 17], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 17, kind: "rhythm", text: "The left hand plays long, short, long, short in every bar. Let the tune ride on top like a boat on waves." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "Press both notes of each chord as one. The top note is the tune, so let it ring a little louder." },
        { fromBar: 17, toBar: 17, kind: "sound", text: "In the last bar, the left hand holds G, B and D under the tune's long G. Let the chord ring to the end." },
      ],
      tricky: {
        8: "After the chord of C and E, the hand moves down. Finger 4 lands on C. The left hand plays D, then A and D together.",
        13: "Finger 4 reaches up from A to E, and finger 5 plays the high G. The left hand plays C, then G and C together.",
        14: "Finger 5 moves down from the high G to D and plays it three times. Keep the wrist loose.",
      },
    },
    epic: {
      key: E_FLAT_MAJOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_E, CHORUS_HIGH].join(" | "),
      left: ["r:12", ...PRINT_LEFT, "Eb3+G3+Bb3/5+3+1:12", ...CHORUS_LEFT, "Eb3+G3+Bb3/5+3+1:12"].join(" | "),
      pedal: PEDAL,
      markedClashBars: [16, 22],
      skills: ["broken-chords", "position-change", "pedal"],
      practice: [
        { text: "Play the left hand alone. Roll each chord up from its lowest note, and hold the top note to the end of the bar.", hands: "left", speed: 0.5, loop: [2, 9], wait: false },
        { text: "Play bars 14 to 17 with the left hand alone. A low note and a higher one sound together, then the higher one moves.", hands: "left", speed: 0.5, loop: [14, 17], wait: true },
        { text: "Play bars 18 to 23 with the right hand alone. The chorus comes again, an octave higher.", hands: "right", speed: 0.5, loop: [18, 23], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 23, kind: "sound", text: "Change the pedal with each new chord of the left hand. That is once a bar, and twice in bars 15 and 21." },
        { fromBar: 16, toBar: 16, kind: "sound", text: "The left hand's A flat rubs against the tune's G. The old print sets it this way, and the next bar settles it." },
        { fromBar: 18, toBar: 23, kind: "fingering", text: "The chorus comes back an octave higher. Put the thumb on F, so finger 3 lands on the high A flat." },
      ],
      tricky: {
        14: "After the high E flat, finger 5 moves down to B flat and plays it three times. The left hand plays D and B flat together, then A flat.",
        18: "Use the short rest in bar 17 to jump up an octave. Finger 3 lands on the high A flat, and the left hand rolls F, A flat and C.",
        20: "Finger 5 moves down from the high E flat to B flat and plays it three times. The left hand plays D and B flat together, then A flat.",
      },
    },
    legendary: {
      key: E_FLAT_MAJOR,
      bpm: 138,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [TUNE_E_CHORDS, CHORUS_OCTAVES].join(" | "),
      left: ["r:12", ...PRINT_LEFT, "Eb3+G3/3+1:10 r:2", ...CHORUS_LEFT, "Eb3+G3/3+1:12"].join(" | "),
      pedal: PEDAL,
      markedClashBars: [7, 16, 22],
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [1, 9], wait: true },
        { text: "Play the left hand alone. Roll each chord up from its lowest note, and hold the top note to the end of the bar.", hands: "left", speed: 0.5, loop: [2, 13], wait: true },
        { text: "Play bars 18 to 23 with the right hand alone. The chorus comes again in octaves, with the thumb below and finger 5 on top.", hands: "right", speed: 0.5, loop: [18, 23], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 2, toBar: 23, kind: "sound", text: "Change the pedal with each new chord of the left hand. That is once a bar, and twice in bars 15 and 21." },
        { fromBar: 6, toBar: 7, kind: "sound", text: "Play the top note of each big chord a little louder. It carries the tune." },
        { fromBar: 18, toBar: 23, kind: "sound", text: "The octaves make the chorus ring out. Keep the thumb light, so finger 5 leads." },
      ],
      tricky: {
        18: "Use the short rest in bar 17 to move both hands. The right hand plays A flat in octaves, with C between, and walks down to F.",
        19: "Use the short rest after F to jump up. Spread the hand from C to the high C, then play E flat in octaves.",
        22: "Finger 3 takes D, so finger 5 is free for the high G. Then the left hand's A flat rubs against G, as in the old print.",
      },
    },
  },
  de: {
    about:
      "Blow the Man Down ist ein Shanty zum Segelsetzen. Eine Mannschaft sang ihn, während sie ein schweres Segel den Mast hinaufzog. " +
      "Unsere Melodie folgt dem Druck von Richard Runciman Terry aus dem Jahr 1921.",
    funFact: "Eine Zeitung in Syracuse im Staat New York zitierte 1867 eine Zeile des Lieds. Seeleute hatten es auf einem Dampfschiff von New York nach Glasgow gesungen.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 7 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 8 bis 17 nur mit der rechten Hand. Die Hand rückt zweimal, jedes Mal nach einem langen Ton.",
          "Jetzt die linke Hand allein. Sie hält einen oder zwei Töne einen ganzen Takt lang.",
          "Spiel die ersten sieben Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Fang mit dem Daumen auf dem G an. Finger 2 nimmt das H, Finger 4 das D und Finger 5 das E.",
          "Halt das erste D drei Zählzeiten lang, dann spiel das E für eine. Das kurze E zieht wie an einem Seil.",
          "Seeleute sangen das, während sie ein Segel hochzogen. Betone den ersten Ton jedes Takts ein wenig, wie einen Zug.",
        ],
        tricky: {
          8: "Nach dem langen E rückt die Hand hinunter. Finger 4 landet auf dem C, und der Daumen wartet über dem Fis.",
          13: "Finger 4 greift vom A hinauf zum E, und Finger 5 spielt das hohe G.",
          14: "Nach dem hohen G rückt Finger 5 hinunter zum D. Er spielt das D dreimal: kurz, lang, dann mittel.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: erst einen langen tiefen Ton, dann einen kurzen Akkord.",
          "Spiel die ersten sieben Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 8 bis 17 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand spielt in jedem Takt lang, kurz, lang, kurz. Lass die Melodie oben reiten wie ein Boot auf den Wellen.",
          "Drück beide Töne jedes Akkords wie einen an. Der obere Ton ist die Melodie, also lass ihn etwas lauter klingen.",
          "Im letzten Takt hält die linke Hand G, H und D unter dem langen G der Melodie. Lass den Akkord bis zum Ende klingen.",
        ],
        tricky: {
          8: "Nach dem Akkord aus C und E rückt die Hand hinunter. Finger 4 landet auf dem C. Die linke Hand spielt D, dann A und D zusammen.",
          13: "Finger 4 greift vom A hinauf zum E, und Finger 5 spielt das hohe G. Die linke Hand spielt C, dann G und C zusammen.",
          14: "Finger 5 rückt vom hohen G hinunter zum D und spielt es dreimal. Halt das Handgelenk locker.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Brich jeden Akkord von seinem tiefsten Ton aus nach oben, und halt den obersten Ton bis zum Ende des Takts.",
          "Spiel die Takte 14 bis 17 nur mit der linken Hand. Ein tiefer und ein höherer Ton klingen zusammen, dann bewegt sich der höhere.",
          "Spiel die Takte 18 bis 23 nur mit der rechten Hand. Der Refrain kommt noch einmal, eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal mit jedem neuen Akkord der linken Hand. Das ist einmal pro Takt, und zweimal in den Takten 15 und 21.",
          "Das As der linken Hand reibt sich am G der Melodie. Der alte Druck setzt es so, und der nächste Takt löst es auf.",
          "Der Refrain kommt eine Oktave höher zurück. Setz den Daumen auf das F, dann landet Finger 3 auf dem hohen As.",
        ],
        tricky: {
          14: "Nach dem hohen Es rückt Finger 5 hinunter zum B und spielt es dreimal. Die linke Hand spielt D und B zusammen, dann As.",
          18: "Nutz die kurze Pause in Takt 17, um eine Oktave hinaufzuspringen. Finger 3 landet auf dem hohen As, und die linke Hand bricht F, As und C.",
          20: "Finger 5 rückt vom hohen Es hinunter zum B und spielt es dreimal. Die linke Hand spielt D und B zusammen, dann As.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die linke Hand allein. Brich jeden Akkord von seinem tiefsten Ton aus nach oben, und halt den obersten Ton bis zum Ende des Takts.",
          "Spiel die Takte 18 bis 23 nur mit der rechten Hand. Der Refrain kommt noch einmal in Oktaven, mit dem Daumen unten und Finger 5 oben.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Wechsle das Pedal mit jedem neuen Akkord der linken Hand. Das ist einmal pro Takt, und zweimal in den Takten 15 und 21.",
          "Spiel den oberen Ton jedes großen Akkords etwas lauter. Er trägt die Melodie.",
          "Die Oktaven lassen den Refrain klingen. Halt den Daumen leicht, damit Finger 5 führt.",
        ],
        tricky: {
          18: "Nutz die kurze Pause in Takt 17, um beide Hände zu versetzen. Die rechte Hand spielt As in Oktaven, mit C dazwischen, und geht hinunter zum F.",
          19: "Nutz die kurze Pause nach dem F, um hinaufzuspringen. Spann die Hand vom C bis zum hohen C, dann spiel Es in Oktaven.",
          22: "Finger 3 nimmt das D, damit Finger 5 frei ist für das hohe G. Danach reibt sich das As der linken Hand am G, wie im alten Druck.",
        },
      },
    },
  },
};

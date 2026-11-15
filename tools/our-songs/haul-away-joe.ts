/**
 * *Haul Away Joe*: a hauling shanty, in four versions of ours.
 *
 * The source is R. R. Terry's *The Shanty Book, Part I* of 1921, scanned on Wikimedia Commons. The print
 * is in 6/8, Andante molto, with no key signature. It sits in D minor, with a raised F sharp and a B
 * natural. Bars 1 to 4 are the solo, and bars 5 to 8 the chorus, ending on the last verse's held D.
 *
 * The tune writes every eighth as a quarter, so each print bar is a bar of 6/4. It has no upbeat. Its
 * range is D4 to D5. The F sharp of bar 3 and the B of bar 4 lie outside D minor, and the hook is bars 1
 * to 4, the solo.
 *
 * The print opens with four bars of piano alone, and the shanty ends with its chorus. The repeat sign
 * sends every verse back to the solo, so the print has no music past the tune. Every version writes the
 * tune in 6/4 eighths, one bar per print bar, and plays it twice, as the print's first two verses. Bars 1
 * to 8 and 9 to 16 are both the print's solo and chorus. Every version keeps D minor and closes on it.
 *
 * Common and Rare keep their own chords, two to a bar: D minor, C major, G major and A minor. A D chord
 * without its third sits under the F sharp, and A major under the last A before the close. Common plays
 * the tune over open fifths and fourths, held in one hand position. Its bar 8 takes the print's ending
 * for a verse that follows, D and then a short A, so the hand climbs back to the solo without a leap.
 * Rare plays a long bass note and a short two-note chord in each half bar, and sixths in the chorus.
 *
 * Epic and Legendary take the print's piano part. Under the solo its left hand strikes a low note, then
 * its octave or the same note, a dotted quarter each. Its right hand lilts in each bar: a quarter, a short
 * passing chord, then a long chord. Under the chorus a tenor line moves over a low A. The print's chords
 * are D minor, A minor, E minor and A minor in the solo. In the chorus they are D minor, A minor, G minor
 * over B flat, A major and D minor.
 *
 * Epic plays the print's left hand as it stands, with the pedal. Its right hand plays the tune, then the
 * second verse in thirds and sixths. Legendary folds the print's lilt into the left hand: a low octave, a
 * passing chord and a long chord. Under the chorus it plays the print's tenor line after a low octave. Its
 * second verse plays chords of two to four notes. Both put A, not F or E, under the second verse's long D
 * and C, since the tenor line moves against them.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 6/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune =
  "D5:2 D5:1 D5:2 A4:1 | C5:2 C5:1 C5:2 A4:1 | G4:2 G4:1 F#4:2 G4:1 | A4:2 B4:1 C5:2 A4:1 | D5:3 D5:2 A4:1 | C5:3 C5:2 A4:1 | G4:2 G4:1 A4:3 | D4:6";

/** The solo, bars 1 to 4, in 6/4 eighths. The hand never leaves its place, and finger 1 takes the F sharp. */
const SOLO = "D5/5:4 D5/5:2 D5/5:4 A4/2:2 | C5/5:4 C5/5:2 C5/5:4 A4/3:2 | G4/2:4 G4/2:2 F#4/1:4 G4/2:2 | A4/3:4 B4/4:2 C5/5:4 A4/3:2";

/** The chorus, bars 5 to 8, in 6/4 eighths, for Common, Epic and Legendary. */
const CHORUS = "D5/5:6 D5/5:4 A4/3:2 | C5/5:6 C5/5:4 A4/3:2 | G4/2:4 G4/2:2 A4/3:6 | D4/1:12";

/**
 * Common's first chorus, with the print's ending for a verse that follows: D, then the A that leads back
 * up to the solo.
 */
const CHORUS_FIRST = CHORUS.replace(/D4\/1:12$/, "D4/1:10 A4/2:2");

/** Rare's chorus, with a sixth under the first D and the first C. */
const CHORUS_RARE = "F4+D5/1+5:6 D5/5:4 A4/3:2 | E4+C5/1+5:6 C5/5:4 A4/3:2 | G4/2:4 G4/2:2 A4/3:6 | D4/1:12";

/** Rare's second verse: the solo and chorus again, ending on D and F together. */
const RARE_AGAIN = `${SOLO} | ${CHORUS_RARE.replace(/D4\/1:12$/, "D4+F4/1+3:12")}`;

/**
 * Epic's second verse in eighths, with a second, a third, a fourth, a fifth or a sixth under each note.
 * Bars 11 and 12 take the print's E under G, F sharp and B. Bars 13 and 14 put A
 * under the long D and C, since an F or an E would clash with the print's tenor line. Bar 15 takes the
 * print's D and G, since a B would clash with the print's B flat in the bass.
 */
const EPIC_TUNE_AGAIN = [
  "F4+D5/1+5:4 A4+D5/2+5:2 F4+D5/1+5:4 F4+A4/1+3:2 | E4+C5/1+5:4 E4+C5/1+5:2 A4+C5/3+5:4 E4+A4/1+3:2",
  "E4+G4/1+3:4 E4+G4/1+3:2 E4+F#4/1+2:4 B3+G4/1+4:2 | C4+A4/1+5:4 E4+B4/1+5:2 E4+C5/1+5:4 C4+A4/1+5:2",
  "A4+D5/2+5:6 A4+D5/2+5:4 F4+A4/1+3:2 | A4+C5/3+5:6 A4+C5/3+5:4 C4+A4/1+5:2",
  "D4+G4/1+4:4 D4+G4/1+4:2 C#4+A4/1+5:6 | A3+D4/1+3:12",
].join(" | ");

/**
 * Legendary's second verse in eighths, in chords of two to four notes with the tune on top. Bar 9 takes
 * the print's E and G under the short D. Bars 10 and 11 take the print's A minor and E minor. Bars 13 and 14 leave out the F and the E that would clash with
 * the print's tenor line, and keep the print's D and C under the tune. Bar 15 takes the print's G minor
 * over B flat.
 */
const LEGENDARY_TUNE_AGAIN = [
  "D4+F4+A4+D5/1+2+3+5:4 E4+G4+D5/1+2+5:2 D4+F4+A4+D5/1+2+3+5:4 D4+F4+A4/1+2+4:2",
  "C4+E4+C5/1+2+5:4 C4+E4+C5/1+2+5:2 C4+E4+G4+C5/1+2+3+5:4 C4+E4+A4/1+2+4:2",
  "B3+E4+G4/1+2+4:4 B3+E4+G4/1+2+4:2 E4+F#4/1+2:4 B3+E4+G4/1+2+4:2",
  "C4+E4+A4/1+2+4:4 D4+G4+B4/1+3+5:2 E4+A4+C5/1+3+5:4 C4+E4+A4/1+2+4:2",
  "D4+A4+D5/1+3+5:6 F4+A4+D5/1+3+5:4 D4+F4+A4/1+2+4:2",
  "C4+A4+C5/1+4+5:6 E4+A4+C5/1+3+5:4 C4+E4+A4/1+2+4:2",
  "Bb3+D4+G4/1+2+4:4 Bb3+D4+G4/1+2+4:2 C#4+E4+A4/1+2+4:6",
  "D4+F4+A4+D5/1+2+3+5:12",
].join(" | ");

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

/**
 * The chords under the tune, two per bar: d, c, g and a are D minor, C major, G major and A minor. D is
 * a D chord without its third, under the F sharp, and A is A major.
 */
const TUNE_CHORDS = "ddccgDaaddccgAdd";

/** Common's held shapes in eighths, a half bar each, in one hand position from C3 to A3. */
const HELD: Record<string, string> = {
  d: "D3+A3/4+1:6",
  D: "D3+A3/4+1:6",
  c: "C3+G3/5+2:6",
  g: "D3+G3/4+2:6",
  a: "E3+A3/3+1:6",
  A: "E3+A3/3+1:6",
};

/** Rare's half bar in eighths: a long bass note on finger 5, then a short two-note chord. */
const LILT: Record<string, string> = {
  d: "D3/5:4 F3+A3/2+1:2",
  D: "D3/5:4 A3/1:2",
  c: "C3/5:4 E3+G3/2+1:2",
  g: "B2/5:4 D3+G3/2+1:2",
  a: "A2/5:4 E3+A3/2+1:2",
  A: "A2/5:4 E3+A3/2+1:2",
};

/**
 * The print's left hand under bars 1 to 8, in 6/4 eighths, for Epic. In the solo it plays a low note and
 * then its octave or the same note, a dotted quarter of the print each. In the chorus a tenor line moves
 * over a held A, and bar 7 holds B flat and E, then A and E. Bar 6 strikes A again where the print ties it.
 */
const PRINT_LEFT = [
  "D2/5:6 D3/1:6",
  "A2/5:6 A3/1:6",
  "E3/1:6 E3/1:6",
  "A2/5:6 A3/1:6",
  "A2+F3/5+2:4 E3/3:2 F3/2:4 A3/1:2",
  "A2+E3/5+1:4 D#3/2:2 A2+E3/5+1:4 C3/3:2",
  "Bb2+E3/5+1:6 A2+E3/5+1:6",
  "D3/1:6 D2/5:6",
].join(" | ");

/**
 * Legendary's left hand under bars 1 to 8. In the solo it takes the print's lilt from the right hand an
 * octave down: a low octave, a short passing chord, then a long chord. In the chorus it plays the print's
 * left hand with an octave on each first beat. Each octave lets go an eighth early, so the hand can jump.
 * Bars 2 and 10 keep the print's B under the tune's C, a clash the guide marks.
 */
const LEGENDARY_LEFT = [
  "D2+D3/5+1:3 r:1 E3+G3/3+1:2 D3+F3+A3/5+3+1:5 r:1",
  "A1+A2/5+1:3 r:1 B2+D3/3+1:2 A2+C3+E3/5+3+1:5 r:1",
  "E2+E3/5+1:5 r:1 E3+F#3/2+1:4 B2+E3+G3/5+2+1:1 r:1",
  "A1+A2/5+1:3 r:1 E3/1:2 A2+C3+E3/5+3+1:5 r:1",
  "A1+A2/5+1:3 r:1 E3/3:2 F3/2:4 A3/1:1 r:1",
  "A1+A2/5+1:3 r:1 D#3/3:2 E3/2:4 C3/4:2",
  "Bb2+E3/5+1:6 A2+E3/5+1:6",
  "D3/1:6 D2/5:6",
].join(" | ");

/** Epic's whole left hand: the print's left hand twice. */
const EPIC_LEFT = [PRINT_LEFT, PRINT_LEFT].join(" | ");

/** Legendary's whole left hand: its verse twice, closing on a low D minor chord. */
const LEGENDARY_LEFT_ALL = `${LEGENDARY_LEFT} | ${LEGENDARY_LEFT.replace(/ \| [^|]+$/, "")} | D2+A2+D3/5+2+1:12`;

/** A pedal that changes with each note of `left`, so no passing note blurs into the next chord. */
function pedalUnder(left: string): string {
  return left.replace(/\S+:(\d+)/g, "P:$1");
}

export const haulAwayJoe: OurSong = {
  slug: "haul-away-joe",
  title: "Haul Away Joe",
  source: {
    composer: "Traditional",
    died: null,
    published: 1921,
    edition:
      "The solo, chorus and piano part as R. R. Terry's The Shanty Book, Part I (1921) prints them on pages 56 and 57, scanned on Wikimedia Commons",
  },
  about: "Haul Away Joe is a short shanty for hauling on a rope. R. R. Terry printed it in 1921 as a shanty for hauling the fore-sheet.",
  funFact: "One verse in Terry's print tells of King Louis of France, who lost his head in the Revolution.",
  mythic: null,
  collection: "sea",
  tune: { text: tune, numerator: 6, denominator: 4, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 108,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [SOLO, CHORUS_FIRST, SOLO, CHORUS].join(" | "),
      left: bars(HELD, TUNE_CHORDS.repeat(2)),
      skills: ["five-finger-position", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the chorus falls to the low D.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds two keys and changes them twice in a bar at most.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "Finger 5 takes D and C at the top. The thumb only plays the F sharp in bar 3." },
        { fromBar: 1, toBar: 16, kind: "rhythm", text: "Count six beats in a bar: long, short, long, short. That is the pull on the rope." },
        { fromBar: 8, toBar: 9, kind: "trick", text: "The thumb holds the low D of bar 8. Then finger 2 takes a short A, and the hand is back up for bar 9." },
      ],
      tricky: {
        2: "Finger 5 plays C three times. Then finger 3 takes A, and finger 2 waits over G.",
        3: "Finger 2 plays G twice, and the thumb takes the F sharp. The left hand moves from D and G to D and A.",
        10: "Bar 10 is bar 2 again. Finger 5 plays C three times, then finger 3 takes A.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 100,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [SOLO, CHORUS_RARE, RARE_AGAIN].join(" | "),
      left: `${bars(LILT, `${TUNE_CHORDS}${TUNE_CHORDS.slice(0, -2)}`)} | D3+A3/5+1:12`,
      skills: ["two-note-chords", "held-bass"],
      practice: [
        { text: "Play the left hand alone: a long low note, then a short chord.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Each half bar of the left hand has a long note and a short chord. Feel the heave: long, short." },
        { fromBar: 5, toBar: 6, kind: "fingering", text: "Fingers 1 and 5 press the sixths as one. Then finger 5 stays on the top note." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End with D and F together. Fingers 1 and 3 press them as one." },
      ],
      tricky: {
        5: "Spread fingers 1 and 5 over F and D for the sixth. Then finger 5 plays D again alone.",
        9: "The second verse starts. The hand jumps from the low D up to the high D, and finger 5 plays it three times.",
        13: "Bar 13 is bar 5 again. Spread fingers 1 and 5 over F and D, then finger 5 plays D alone.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 112,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [SOLO, CHORUS, EPIC_TUNE_AGAIN].join(" | "),
      left: EPIC_LEFT,
      pedal: pedalUnder(EPIC_LEFT),
      skills: ["counter-melody", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the left hand alone on the first eight bars. It is the old print's own bass line.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the right hand alone on bars 9 to 16, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Change the pedal with each new note of the left hand, so the moving notes stay clear." },
        { fromBar: 5, toBar: 6, kind: "sound", text: "In bars 5 and 6 the left hand sings a little line of its own. Let it answer the tune." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        11: "The thumb holds E under G, then under F sharp. Then it drops to B, and finger 4 takes G.",
        12: "Finger 5 climbs A, B and C over C, E and E in the thumb. Then the hand drops back to C and A.",
        13: "The right hand holds A and D with fingers 2 and 5. Below it, the left hand plays F, E, F and A.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [SOLO, CHORUS, LEGENDARY_TUNE_AGAIN].join(" | "),
      left: LEGENDARY_LEFT_ALL,
      pedal: pedalUnder(LEGENDARY_LEFT_ALL),
      markedClashBars: [2, 10],
      skills: ["octave-bass", "triads", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: a low octave, a short chord, then a long chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the left hand alone on bars 5 to 8, where a line moves under the chorus.", hands: "left", speed: 0.5, loop: [5, 8], wait: true },
        { text: "Play the right hand's chords alone on bars 9 to 16, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "trick", text: "The left hand lets go of each low octave a little early. Use that short rest to jump." },
        { fromBar: 2, toBar: 2, kind: "sound", text: "In bars 2 and 10, the left hand's B rubs against the tune's C. The old print plays it so." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the top note of each chord a little louder, so the tune rings out." },
      ],
      tricky: {
        6: "The left hand jumps from the low octave up to D sharp. Then it steps up to E and down to C.",
        13: "The right hand holds D, A and D, then F, A and D. Below it, the left hand climbs E, F and A.",
        14: "The thumb moves from C to E and back under A and C. In the last chord, A is on top.",
      },
    },
  },
  de: {
    about:
      "Haul Away Joe ist ein kurzer Shanty zum Ziehen an einem Tau. " +
      "R. R. Terry druckte ihn 1921 als Shanty zum Holen der Fockschot.",
    funFact: "Eine Strophe in Terrys Druck erzählt von König Ludwig von Frankreich, der in der Revolution seinen Kopf verlor.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort fällt der Refrain zum tiefen D.",
          "Jetzt die linke Hand allein. Sie hält zwei Tasten und wechselt sie höchstens zweimal im Takt.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Finger 5 nimmt oben das D und das C. Der Daumen spielt nur das Fis in Takt 3.",
          "Zähl sechs Schläge in jedem Takt: lang, kurz, lang, kurz. So zieht man am Tau.",
          "Der Daumen hält das tiefe D in Takt 8. Dann nimmt Finger 2 ein kurzes A, und die Hand ist wieder oben für Takt 9.",
        ],
        tricky: {
          2: "Finger 5 spielt dreimal das C. Dann nimmt Finger 3 das A, und Finger 2 wartet über dem G.",
          3: "Finger 2 spielt zweimal das G, und der Daumen nimmt das Fis. Die linke Hand wechselt von D und G zu D und A.",
          10: "Takt 10 ist wieder Takt 2. Finger 5 spielt dreimal das C, dann nimmt Finger 3 das A.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein: erst einen langen tiefen Ton, dann einen kurzen Akkord.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Jeder halbe Takt der linken Hand hat einen langen Ton und einen kurzen Akkord. Spür das Ziehen: lang, kurz.",
          "Finger 1 und 5 drücken die Sexten wie einen Ton. Dann bleibt Finger 5 auf dem oberen Ton.",
          "Am Ende spielst du D und F zusammen. Finger 1 und 3 drücken sie wie einen Ton.",
        ],
        tricky: {
          5: "Spann Finger 1 und 5 über F und D für die Sexte. Dann spielt Finger 5 das D noch einmal allein.",
          9: "Die zweite Strophe beginnt. Die Hand springt vom tiefen D zum hohen D, und Finger 5 spielt es dreimal.",
          13: "Takt 13 ist wieder Takt 5. Spann Finger 1 und 5 über F und D, dann spielt Finger 5 das D allein.",
        },
      },
      epic: {
        practice: [
          "Spiel die ersten acht Takte nur mit der linken Hand. Das ist die Basslinie aus dem alten Druck.",
          "Spiel die Takte 9 bis 16 nur mit der rechten Hand, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Ton der linken Hand, damit die bewegten Töne klar bleiben.",
          "In den Takten 5 und 6 singt die linke Hand eine eigene kleine Linie. Lass sie der Melodie antworten.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          11: "Der Daumen hält das E unter dem G, dann unter dem Fis. Dann geht er hinunter zum H, und Finger 4 nimmt das G.",
          12: "Finger 5 steigt über A, H und C, und der Daumen spielt C, E und E darunter. Dann fällt die Hand zurück auf C und A.",
          13: "Die rechte Hand hält A und D mit Finger 2 und 5. Darunter spielt die linke Hand F, E, F und A.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: eine tiefe Oktave, einen kurzen Akkord, dann einen langen Akkord.",
          "Spiel die Takte 5 bis 8 nur mit der linken Hand. Dort bewegt sich eine Linie unter dem Refrain.",
          "Spiel die Akkorde der rechten Hand in den Takten 9 bis 16 allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Die linke Hand lässt jede tiefe Oktave etwas früher los. Nutz diese kurze Pause zum Springen.",
          "In den Takten 2 und 10 reibt sich das H der linken Hand am C der Melodie. Der alte Druck spielt es so.",
          "Spiel den oberen Ton jedes Akkords etwas lauter, damit die Melodie klar klingt.",
        ],
        tricky: {
          6: "Die linke Hand springt von der tiefen Oktave hinauf zum Dis. Dann geht sie hinauf zum E und hinunter zum C.",
          13: "Die rechte Hand hält D, A und D, dann F, A und D. Darunter steigt die linke Hand über E, F und A.",
          14: "Der Daumen geht unter A und C vom C zum E und zurück. Im letzten Akkord liegt das A oben.",
        },
      },
    },
  },
};

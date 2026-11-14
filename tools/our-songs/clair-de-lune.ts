/**
 * *Clair de lune*: the opening of the third movement of Debussy's Suite bergamasque, in four versions of ours.
 *
 * The tune is the top voice of the opening eight bars, in D-flat major. The print is in 9/8 and ties a note
 * over almost every bar line, and the notation cannot tie. So the tune's bar lines sit one eighth later than
 * the print's, the print's opening eighth rest drops, and each tied note sits inside one bar. The tune also
 * doubles every length into 9/4, so its eighths are quarters and Common needs nothing faster. A unit is an
 * eighth, and the print's duplet eighths last three units. The hook is its first four bars.
 *
 * D-flat major has five flats, so every version moves the tune down a semitone to C major. The tune ends on
 * the leading note.
 *
 * Every version closes with the print's bar 9, which resolves the leading note to the home chord. Its top
 * falls from G to E, as the tune began. The print's next phrase runs to bar 14 and ends on B-flat minor,
 * A minor in our key. That is away from home, so every version stops at bar 9. Its bass sounds on our bar
 * line, one print eighth after the print's, as the tune's shifted bar lines need.
 *
 * Common plays the tune over held bass notes and open fifths, and the top of bar 9 alone. It plays that top
 * an octave lower, so the hand stays near the tune's last note. Rare plays the tune twice over a root and fifth with the pedal, the second time an octave up, and bar 9 in thirds. Epic
 * rolls close broken chords under the tune, then plays it in thirds. Legendary rolls arpeggios over two
 * octaves, then plays the tune in four-note chords.
 *
 * In the print's bar 9, the home chord climbs in four steps, from the bass to the top. Epic and Legendary
 * take that figure. Epic's left hand plays the low step, and its right hand climbs the other three by octaves. Legendary
 * plays them as the catalog's Original hands them out, with the left hand crossing over the right.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const D_FLAT_MAJOR: Key = { tonic: 1, mode: "major" };

/** The key every version moves to. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 9/4, in eighths: the print's eight bars, each tied note inside one bar, and the closing rest. */
const tune = [
  "Ab4:2 Ab5:8 F5:8 | Eb5:2 F5:2 Eb5:14 | Db5:2 Eb5:2 Db5:3 F5:6 Db5:5 | C5:2 Db5:2 C5:14",
  "Bb4:2 C5:2 Bb4:2 Eb5:2 Bb4:2 Ab4:2 Bb4:2 Ab4:4 | Gb4:2 Ab4:2 Gb4:6 F4:8",
  "F4:2 Gb4:2 F4:2 Bb4:2 F4:2 Eb4:2 F4:2 Eb4:4 | Db4:2 Eb4:2 Db4:6 C4:6 r:2",
].join(" | ");

/** The tune's last seven bars in C major, fingered, in eighths. The hand moves down in the rest of bar 4, and as finger 3 takes E in bar 7. */
const TUNE_REST = [
  "D5/3:2 E5/4:2 D5/3:14 | C5/2:2 D5/3:2 C5/2:3 E5/4:6 C5/2:5 | B4/1:2 C5/2:2 B4/1:12 r:2",
  "A4/3:2 B4/4:2 A4/3:2 D5/5:2 A4/3:2 G4/2:2 A4/4:2 G4/3:4 | F4/2:2 G4/3:2 F4/2:6 E4/1:8",
  "E4/3:2 F4/4:2 E4/3:2 A4/5:2 E4/3:2 D4/2:2 E4/4:2 D4/3:4 | C4/2:2 D4/3:2 C4/2:6 B3/1:6 r:2",
].join(" | ");

/** The whole tune in C major in the right hand, in eighths, with every note fingered. */
const RIGHT_TUNE = `G4/1:2 G5/5:8 E5/4:8 | ${TUNE_REST}`;

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** The order of a close broken chord over one bar: up and down three times, with a breath at the end. */
const CLOSE_ORDER = [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, -1];

/** The order of an arpeggio over two octaves in one bar: up, down, up, and a breath at the end. */
const WIDE_ORDER = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, -1];

/** Eighths of `notes` with `fingers` in `order`, where -1 is an eighth's rest. */
function broken(notes: readonly string[], fingers: readonly number[], order: readonly number[]): string {
  return order.map((at) => (at < 0 ? "r:1" : `${notes[at]}/${fingers[at]}:1`)).join(" ");
}

/** One bar of a close broken chord, fingered 5, 3, 2, 1 unless `fingers` says otherwise. */
function close(notes: string, fingers: readonly number[] = [5, 3, 2, 1]): string {
  return broken(notes.split(" "), fingers, CLOSE_ORDER);
}

/** One bar of an arpeggio over two octaves: the thumb passes under and finger 3 crosses over it. */
function wide(notes: string): string {
  return broken(notes.split(" "), [5, 2, 1, 3, 2, 1], WIDE_ORDER);
}

/** Epic's left hand for the tune's eight bars. Bar 6 rolls three chords over a falling bass. */
const EPIC_LEFT = [
  close("C2 E2 G2 C3"),
  close("F1 Ab1 C2 F2"),
  close("E2 G2 C3 E3", [5, 4, 2, 1]),
  close("D2 F2 A2 D3", [5, 4, 2, 1]),
  close("G1 B1 D2 F2"),
  `${broken(["C2", "F2", "A2", "C3"], [5, 3, 2, 1], [0, 1, 2, 3, 2, 1])} ${broken(["B1", "D2", "G2", "B2"], [5, 4, 2, 1], [0, 1, 2, 3, 2, 1])} ${broken(["A1", "C2", "E2", "A2"], [5, 4, 2, 1], [0, 1, 2, 3, 2, -1])}`,
  close("D2 A2 C3 D3"),
  close("G1 D2 F2 G2"),
].join(" | ");

/** Legendary's left hand for the tune's eight bars. Bar 6 rolls three chords over a falling bass. */
const LEGENDARY_LEFT = [
  wide("C2 G2 C3 E3 G3 C4"),
  wide("F1 C2 F2 Ab2 C3 F3"),
  wide("E1 C2 E2 G2 C3 E3"),
  wide("D2 A2 D3 F3 A3 D4"),
  wide("G1 D2 G2 B2 D3 F3"),
  "C2/5:1 G2/2:1 C3/1:1 E3/3:1 C3/1:1 G2/2:1 B1/5:1 G2/2:1 B2/1:1 D3/3:1 B2/1:1 G2/2:1 A1/5:1 E2/2:1 A2/1:1 C3/3:1 A2/1:1 r:1",
  wide("D2 A2 D3 F3 A3 C4"),
  wide("G1 D2 G2 B2 D3 F3"),
].join(" | ");

/** The pedal for the tune's eight bars: changed on every bar line, and three times in bar 6. */
const PEDAL_TUNE = "P:18 | P:18 | P:18 | P:18 | P:18 | P:6 P:6 P:6 | P:18 | P:18";

/**
 * The top of the print's bar 9: G and E in thirds over the home chord, as the tune began. It starts 4
 * eighths into the bar, after the print's low chord.
 */
const BAR_9_TOP = "E5+G5/3+5:6 C5+E5/1+3:8";

export const clairDeLune: OurSong = {
  slug: "clair-de-lune",
  title: "Clair de lune",
  source: {
    composer: "Claude Debussy",
    died: 1918,
    published: 1905,
    edition: "Suite bergamasque, L. 75, no. 3, in E. Fromont's first edition (1905), as the Mutopia Project typesets it",
  },
  about:
    "Clair de lune is the third movement of Debussy's Suite bergamasque, which he began around 1890 and published in 1905. " +
    'Its title means "moonlight" and comes from a poem by Paul Verlaine. ' +
    "The film Ocean's Eleven (2001) ends with it, as the thieves watch the fountains of the Bellagio.",
  funFact: 'The score opens marked pianissimo and "con sordina", so the pianist plays with the soft pedal down from the first note.',
  mythic: "piano-midi/deb_clai.mid",
  collection: "film",
  tune: { text: tune, numerator: 9, denominator: 4, steps: 2, key: D_FLAT_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 104,
      numerator: 9,
      denominator: 4,
      steps: 2,
      right: `G4/1:1 r:1 G5/5:8 E5/4:8 | ${TUNE_REST} | r:4 G4/5:6 E4/3:8`,
      left: "C3+G3/5+1:18 | D3/2:18 | C3+G3/5+1:18 | D3/2:18 | G2/5:18 | A2/4:18 | D3/1:18 | G2/5:16 r:2 | C3+G3/2+1:18",
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, where the tune walks down.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds one long note or an open fifth in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "trick", text: "Lift the thumb off G right away. The rest gives you time to jump up to the high G." },
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play softly and let each long note fade, like moonlight on water." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "Fingers 2 and 3 do most of the work here. Finger 5 reaches up for the highest note." },
      ],
      tricky: {
        1: "Play G with the thumb, then jump an octave up to G with finger 5.",
        5: "Your hand moves down in the rest of bar 4. Finger 3 lands on A.",
        7: "Play the first E with finger 3, not the thumb. That frees finger 5 for A.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 112,
      numerator: 9,
      denominator: 4,
      steps: 2,
      right: `${RIGHT_TUNE} | ${octaveUp(RIGHT_TUNE)} | r:4 ${BAR_9_TOP}`,
      left: [
        "C2/5:6 G2/1:12 | A1/5:6 E2/1:12 | C2/5:6 G2/1:12 | D2/5:6 A2/1:10 r:2",
        "G1/5:6 D2/1:12 | C2/5:6 A2/1:12 | D2/5:6 A2/1:10 r:2 | G1/5:6 D2/1:12",
        "C2/5:6 G2/1:12 | A1/5:6 E2/1:12 | C2/5:6 G2/1:12 | D2/5:6 A2/1:10 r:2",
        "G1/5:6 D2/1:12 | C2/5:6 A2/1:12 | D2/5:6 A2/1:10 r:2 | G1/5:6 D2/1:12",
        "C2/5:6 G2/1:12",
      ].join(" | "),
      pedal: Array(17).fill("P:18").join(" | "),
      skills: ["pedal", "open-fifths"],
      practice: [
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. The low note falls on beat 1, and the fifth above it on beat 4.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the first eight bars, slowly, with the pedal.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the second half, where the tune comes back an octave higher.", hands: "both", speed: 0.7, loop: [9, 17], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Hold the pedal down for each whole bar, and change it right on the bar line." },
        { fromBar: 3, toBar: 3, kind: "rhythm", text: "Count this bar in eighths. E starts halfway through beat 4." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Up high, play even softer. The tune should float like moonlight." },
      ],
      tricky: {
        5: "Your hand moves down in the rest of bar 4. Finger 3 lands on A.",
        9: "Use the rest after the low B to jump far up. Your thumb lands on G.",
        13: "As in bar 5, move the hand down in the rest before it. Finger 3 lands on A.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 116,
      numerator: 9,
      denominator: 4,
      steps: 2,
      right: [
        RIGHT_TUNE,
        "E4+G4/1+3:1 r:1 E5+G5/3+5:8 C5+E5/1+3:8",
        "B4+D5/1+3:2 C5+E5/2+4:2 B4+D5/1+3:14",
        "A4+C5/1+3:2 B4+D5/2+4:2 A4+C5/1+3:3 C5+E5/3+5:6 A4+C5/1+3:5",
        "G4+B4/1+3:2 A4+C5/2+4:2 G4+B4/1+3:12 r:2",
        "F4+A4/1+3:2 G4+B4/2+4:2 F4+A4/1+3:2 B4+D5/3+5:2 F4+A4/1+3:2 E4+G4/1+2:2 F4+A4/2+4:2 E4+G4/1+3:4",
        "D4+F4/1+3:2 E4+G4/2+4:2 D4+F4/1+3:6 C4+E4/1+3:8",
        "C4+E4/1+3:2 D4+F4/2+4:2 C4+E4/1+3:2 F4+A4/3+5:2 C4+E4/1+3:2 B3+D4/1+2:2 C4+E4/2+4:2 B3+D4/1+3:4",
        "A3+C4/1+3:2 B3+D4/2+4:2 A3+C4/1+3:6 G3+B3/1+2:6 r:2",
        `E3+G3/1+3:1 r:1 E4+G4/1+3:1 r:1 ${BAR_9_TOP}`,
      ].join(" | "),
      left: `${EPIC_LEFT} | ${EPIC_LEFT} | C2+G2/5+1:18`,
      pedal: `${PEDAL_TUNE} | ${PEDAL_TUNE} | P:18`,
      markedClashBars: [10, 11, 15],
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each chord rolls up and down, one note per eighth.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the rolling chords soft and even, so the tune floats above them." },
        { fromBar: 6, toBar: 6, kind: "sound", text: "Change the pedal three times here, once for each new bass note." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
      ],
      tricky: {
        3: "C and E start between the beats. Count this bar in eighths: E starts halfway through beat 4.",
        11: "The same rhythm as bar 3, now in thirds. Move fingers 3 and 5 up to C and E together.",
        16: "Play A and C with fingers 1 and 3, then B and D with fingers 2 and 4.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 120,
      numerator: 9,
      denominator: 4,
      steps: 2,
      right: [
        RIGHT_TUNE,
        "G4+G5/1+5:1 r:1 G5+C6+E6+G6/1+2+3+5:7 r:1 E5+G5+C6+E6/1+2+3+5:7 r:1",
        "D5+F5+Ab5+D6/1+2+3+5:1 r:1 E5+Ab5+C6+E6/1+2+3+5:1 r:1 D5+F5+Ab5+D6/1+2+3+5:13 r:1",
        "C5+E5+G5+C6/1+2+3+5:1 r:1 D5+G5+B5+D6/1+2+3+5:1 r:1 C5+E5+G5+C6/1+2+3+5:2 r:1 E5+G5+C6+E6/1+2+3+5:5 r:1 C5+E5+G5+C6/1+2+3+5:4 r:1",
        "B4+D5+F5+B5/1+2+3+5:1 r:1 C5+F5+A5+C6/1+2+3+5:1 r:1 B4+D5+F5+B5/1+2+3+5:12 r:2",
        "A4+D5+F5+A5/1+2+3+5:1 r:1 B4+D5+G5+B5/1+2+3+5:1 r:1 A4+D5+F5+A5/1+2+3+5:1 r:1 D5+F5+B5+D6/1+2+3+5:1 r:1 " +
          "A4+D5+F5+A5/1+2+3+5:1 r:1 G4+B4+D5+G5/1+2+3+5:1 r:1 A4+D5+F5+A5/1+2+3+5:1 r:1 G4+B4+D5+G5/1+2+3+5:3 r:1",
        "F4+A4+C5+F5/1+2+3+5:1 r:1 G4+B4+D5+G5/1+2+3+5:1 r:1 F4+A4+C5+F5/1+2+3+5:5 r:1 E4+A4+C5+E5/1+2+3+5:7 r:1",
        "E4+A4+C5+E5/1+2+3+5:1 r:1 F4+A4+D5+F5/1+2+3+5:1 r:1 E4+A4+C5+E5/1+2+3+5:1 r:1 A4+D5+F5+A5/1+2+3+5:1 r:1 " +
          "E4+A4+C5+E5/1+2+3+5:1 r:1 D4+F4+A4+D5/1+2+3+5:1 r:1 E4+A4+C5+E5/1+2+3+5:1 r:1 D4+F4+A4+D5/1+2+3+5:3 r:1",
        "C4+F4+G4+C5/1+2+3+5:1 r:1 D4+F4+B4+D5/1+2+3+5:1 r:1 C4+F4+G4+C5/1+2+3+5:5 r:1 B3+D4+F4+B4/1+2+3+5:5 r:3",
        `E3+G3/1+3:2 r:2 ${BAR_9_TOP}`,
      ].join(" | "),
      left: `${LEGENDARY_LEFT} | ${LEGENDARY_LEFT} | C2+G2/5+1:1 r:1 E4+G4/3+1:16`,
      pedal: `${PEDAL_TUNE} | ${PEDAL_TUNE} | P:18`,
      markedClashBars: [2, 10, 14],
      skills: ["arpeggios", "melody-in-chords", "hand-crossing"],
      practice: [
        { text: "Play the left hand alone. The thumb passes under and finger 3 crosses over, so each arpeggio spans two octaves.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the right hand's four-note chords alone, and lift the hand between them.", hands: "right", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Play the last two bars slowly. In the last bar, the left hand crosses over the right.", hands: "both", speed: 0.5, loop: [16, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "fingering", text: "In each arpeggio, the thumb passes under on the way down, and finger 3 crosses over on the way up." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
        { fromBar: 17, toBar: 17, kind: "trick", text: "The home chord climbs in four steps, from low C to high G. The hands take turns, like bells." },
      ],
      tricky: {
        9: "Play G in octaves, then use the short rest to jump up to the four-note chord.",
        13: "A chord falls on every beat here. Lift the hand a little after each one, and let the pedal join them.",
        17: "The left hand plays low C and G, and the right hand E and G. Then the left hand crosses over to E and G, and the right hand jumps above it.",
      },
    },
  },
  de: {
    about:
      "Clair de lune ist der dritte Satz von Debussys Suite bergamasque, die er um 1890 begann und 1905 veröffentlichte. " +
      'Der Titel bedeutet "Mondschein" und stammt aus einem Gedicht von Paul Verlaine. ' +
      "Der Film Ocean's Eleven (2001) endet mit diesem Stück, während die Diebe die Fontänen des Bellagio betrachten.",
    funFact: 'Die Noten beginnen mit pianissimo und "con sordina", also spielt man schon ab dem ersten Ton mit dem Leisepedal.',
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Dort wandert die Melodie abwärts.",
          "Jetzt die linke Hand allein. Sie hält in jedem Takt einen langen Ton oder eine leere Quinte.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Heb den Daumen gleich vom G ab. Die Pause gibt dir Zeit, zum hohen G zu springen.",
          "Spiel leise, und lass jeden langen Ton verklingen, wie Mondlicht auf dem Wasser.",
          "Hier arbeiten vor allem Finger 2 und 3. Finger 5 greift hinauf zum höchsten Ton.",
        ],
        tricky: {
          1: "Spiel das G mit dem Daumen, dann spring eine Oktave hinauf zum G mit Finger 5.",
          5: "Deine Hand rückt in der Pause von Takt 4 nach unten. Finger 3 landet auf dem A.",
          7: "Spiel das erste E mit Finger 3, nicht mit dem Daumen. So bleibt Finger 5 frei für das A.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Der tiefe Ton kommt auf Schlag 1, die Quinte darüber auf Schlag 4.",
          "Spiel die ersten acht Takte langsam mit beiden Händen und mit Pedal.",
          "Spiel die zweite Hälfte. Dort kommt die Melodie eine Oktave höher zurück.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das Pedal jeweils einen ganzen Takt, und wechsle es genau am Taktstrich.",
          "Zähl diesen Takt in Achteln. Das E beginnt mitten in Schlag 4.",
          "Spiel oben noch leiser. Die Melodie soll schweben wie Mondlicht.",
        ],
        tricky: {
          5: "Deine Hand rückt in der Pause von Takt 4 nach unten. Finger 3 landet auf dem A.",
          9: "Nutz die Pause nach dem tiefen H für einen weiten Sprung nach oben. Dein Daumen landet auf dem G.",
          13: "Wie in Takt 5 rückt die Hand in der Pause davor nach unten. Finger 3 landet auf dem A.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder Akkord rollt auf und ab, ein Ton pro Achtel.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt die rollenden Akkorde leise und gleichmäßig, damit die Melodie darüber schwebt.",
          "Wechsle hier das Pedal dreimal, einmal für jeden neuen Basston.",
          "Die Melodie ist der obere Ton jeder Terz, also lass den oberen Finger führen.",
        ],
        tricky: {
          3: "C und E beginnen zwischen den Schlägen. Zähl diesen Takt in Achteln: Das E beginnt mitten in Schlag 4.",
          11: "Derselbe Rhythmus wie in Takt 3, jetzt in Terzen. Führ Finger 3 und 5 zusammen hinauf zu C und E.",
          16: "Spiel A und C mit Finger 1 und 3, dann H und D mit Finger 2 und 4.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Der Daumen geht unter, Finger 3 kreuzt darüber, und so umspannt jedes Arpeggio zwei Oktaven.",
          "Spiel die vierstimmigen Akkorde der rechten Hand allein, und heb die Hand zwischen ihnen an.",
          "Spiel die letzten zwei Takte langsam. Im letzten Takt kreuzt die linke Hand über die rechte.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "In jedem Arpeggio geht der Daumen abwärts unter, und Finger 3 kreuzt aufwärts darüber.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
          "Der Grundakkord steigt in vier Stufen vom tiefen C zum hohen G. Die Hände wechseln sich ab, wie Glocken.",
        ],
        tricky: {
          9: "Spiel das G in Oktaven, dann nutz die kurze Pause für den Sprung hinauf zum vierstimmigen Akkord.",
          13: "Hier kommt auf jeden Schlag ein Akkord. Heb die Hand nach jedem ein wenig an, und lass das Pedal sie verbinden.",
          17: "Die linke Hand spielt das tiefe C und G, die rechte E und G. Dann kreuzt die linke Hand hinüber zu E und G, und die rechte springt darüber.",
        },
      },
    },
  },
};

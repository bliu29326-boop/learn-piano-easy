/**
 * *Also sprach Zarathustra*: the introduction of Strauss's tone poem, Op. 30, in four versions of ours.
 *
 * The tune is the dawn motif as Wikipedia prints and describes it, in 4/4 and in quarters. It rises C, G,
 * C, then the major third E turns to the minor third E flat. The hook is the whole tune, bars 1 and 2.
 *
 * The bars after the tune follow Otto Singer's piano duet of the introduction (Aibl, 1896), from its scan
 * on Wikimedia Commons. The print states the motif three times, from its bars 5, 9 and 13. The second
 * statement turns minor to major. The third rises from E to F, over the F major chord of print bar 15. In
 * print bars 16 to 18, its top line climbs by step from A to the B an octave and a step above. Bar 19
 * lands on a high C major chord. Under it, the Secondo trembles on a low octave of C, then F and G, with
 * timpani of C and G between statements.
 *
 * Common plays the motif three times over held open fifths, then the print's F in bar 7, and ends on the
 * home chord. Its second and third statements leave out the low C, so the hand keeps one place. Rare
 * opens on a held fifth, drums C and G between statements and echoes the motif in two-note chords. Its bar
 * 14 holds the print's F major chord before the close.
 *
 * Epic and Legendary take the Secondo's figure: its octave tremolo, written out in eighths, and its
 * timpani. Their bars 13 to 17 play print bars 15 to 19, with the print's sixteenths as eighths. Epic
 * opens on a deep C octave, then plays the motif an octave up in thirds and sixths. It climbs in thirds
 * and sixths to its last chord. Legendary plays the motif in octaves and full chords over octave bass and
 * timpani rolls. It climbs in three-note chords. Bar 17 plays the print's tremolo between the C chord and
 * high C, and bar 18 holds the chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 4/4, in quarters: the motif rising to the major third, which turns minor. */
const tune = "C4:2 G4:2 | C5:2 E5:1 Eb5:1";

/** One bar of timpani in eighths: low C and G in quarters. */
const TIMPANI = "C2/1:2 G1/5:2 C2/1:2 G1/5:2";

/** Half a bar of timpani roll in eighths, ending on a rest so the hand can jump. */
const ROLL = "C2/1:1 G1/5:1 C2/1:1 r:1";

/** One bar of the Secondo's octave tremolo in eighths, from `low` to the octave `high` and back, four times. */
function tremolo(low: string, high: string): string {
  return Array<string>(4).fill(`${low}/5:1 ${high}/1:1`).join(" ");
}

/** Epic's bars 13 to 17, print bars 15 to 19: the F chord, then the climb in thirds and sixths to high C. */
const EPIC_CLIMB = [
  "F5+A5/1+3:8",
  "F5+A5/1+3:1 G5+B5/2+4:1 A5+C6/3+5:4 F5+Ab5+D6/1+2+5:1 r:1",
  "C6+E6/1+3:1 D6+F6/2+4:1 E6+G6/3+5:4 C6+E6/1+3:1 D6+F6/2+4:1",
  "E6+G6/3+5:4 C6+A6/1+5:2 D6+B6/1+5:2",
  "E6+G6+C7/1+2+5:8",
].join(" | ");

/** Legendary's bars 13 to 18, print bars 15 to 21: the climb in three-note chords, and the tremolo on C. */
const LEGENDARY_CLIMB = [
  "C5+F5+A5/1+3+5:7 r:1",
  "C5+F5+A5/1+3+5:1 C5+G5+B5/1+3+5:1 F5+A5+C6/1+3+5:4 F5+Ab5+D6/1+2+5:2",
  "G5+C6+E6/1+3+5:1 G5+D6+F6/1+3+5:1 C6+E6+G6/1+3+5:4 G5+C6+E6/1+3+5:1 G5+D6+F6/1+3+5:1",
  "C6+E6+G6/1+3+5:4 C6+E6+A6/1+3+5:2 D6+G6+B6/1+3+5:2",
  Array<string>(4).fill("C6+E6+G6/1+2+3:1 C7/5:1").join(" "),
  "C6+E6+G6+C7/1+2+3+5:8",
].join(" | ");

export const alsoSprachZarathustra: OurSong = {
  slug: "also-sprach-zarathustra",
  title: "Also sprach Zarathustra",
  aka: ["Thus Spoke Zarathustra"],
  collection: "film",
  source: {
    composer: "Richard Strauss",
    died: 1949,
    published: 1896,
    edition:
      "Also sprach Zarathustra, Op. 30 (1896): the dawn motif of its introduction, as Wikipedia's article prints and describes it. " +
      "The bars after it follow Otto Singer's piano duet of the introduction (Jos. Aibl, Leipzig, 1896, U.E. 1114), " +
      "the scan 'Also sprach Zarathustra - Tondichtung ... op. 30 (IA alsosprachzarath00stra 0).pdf' on Wikimedia Commons, its pages 6 and 7",
  },
  about:
    "Richard Strauss wrote this tone poem in 1896, after a book by the philosopher Friedrich Nietzsche. " +
    "Its opening fanfare paints a sunrise, rising over a deep held C. " +
    "Stanley Kubrick's film 2001: A Space Odyssey (1968) opens with it.",
  funFact: "The three rising notes, C, G and C, are the second, third and fourth notes of the overtone series of a low C.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 72,
      numerator: 4,
      denominator: 4,
      right: [
        "C4/1:2 G4/1:2 | C5/2:2 E5/5:1 Eb5/4:1 | r:2 G4/1:2 | C5/2:2 Eb5/4:1 E5/5:1",
        "r:2 G4/1:2 | C5/2:2 E5/4:2 | F5/5:4 | E5/4:4",
      ].join(" | "),
      left: [
        "C3+G3/5+1:4 | C3+G3/5+1:4 | C3+G3/5+1:4 | C3+G3/5+1:4",
        "C3+G3/5+1:4 | C3+G3/5+1:4 | F2+C3/5+1:4 | C3+G3/5+1:4",
      ].join(" | "),
      skills: ["open-fifths", "position-change"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Now play bars 3 to 8 with the right hand. Your thumb stays near G.", hands: "right", speed: 0.6, loop: [3, 8], wait: true },
        { text: "Play the left hand alone. It holds one open fifth in each bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the whole song, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "This is a sunrise. Play each long note fully, and let it ring to the end." },
        { fromBar: 2, toBar: 2, kind: "sound", text: "E turns to E flat here, and the bright sound turns dark. Listen for the change." },
        { fromBar: 3, toBar: 4, kind: "trick", text: "Bar 3 leaves out the low C, so your thumb can wait on G." },
      ],
      tricky: {
        1: "Your thumb plays middle C, then moves up to G. Move it during the long note.",
        7: "The right hand steps up from E to F with finger 5. The left hand moves down to F and C.",
        8: "Both hands come home. The left hand returns to C and G, and the right hand ends on E.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 80,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:8 | r:8",
        "C4/1:4 G4/1:4 | C5/2:4 E5/5:2 Eb5/4:1 r:1 | r:4 G4/1:4 | C5/2:4 Eb5/4:2 E5/5:2",
        "r:8 | r:8",
        "G4+C5/1+2:4 C5+E5/2+5:4 | G4+D5/1+3:4 C5+E5/2+5:2 C5+Eb5/2+4:2 | G4+C5/1+2:4 C5+Eb5/2+4:4 | G4+D5/1+3:4 C5+E5/2+5:4",
        "C5+E5/2+5:4 G4+C5/1+2:4 | C5+F5/2+5:8 | G4+C5/1+2:4 C5+E5/2+5:4 | C5+E5/2+5:8",
      ].join(" | "),
      left: [
        "C3+G3/5+1:8 | C3+G3/5+1:8",
        "C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8",
        "C3/5:2 G3/1:2 C3/5:2 G3/1:2 | C3/5:2 G3/1:2 C3/5:4",
        "C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8 | C3+G3/5+1:8",
        "C3+E3+G3/5+3+1:8 | A2+C3+F3/5+3+1:8 | C3+E3+G3/5+3+1:8 | C3+E3+G3/5+3+1:8",
      ].join(" | "),
      skills: ["two-note-chords", "triads"],
      practice: [
        { text: "Play bars 3 to 6 with the right hand alone. This is the sunrise tune.", hands: "right", speed: 0.6, loop: [3, 6], wait: true },
        { text: "Play the right hand's two-note chords alone, in bars 9 to 16.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Play the left hand alone. In bars 7 and 8, it drums C and G like a timpani.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "The left hand starts alone, like a low organ note before dawn. Hold it for both bars." },
        { fromBar: 7, toBar: 8, kind: "rhythm", text: "Play the drum notes evenly, one on every beat, and a little louder each time." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "The top note of each chord carries the tune. Play it a little louder." },
      ],
      tricky: {
        3: "Your thumb plays middle C, then moves up to G during the long note.",
        14: "The right hand holds C and F with fingers 2 and 5. The left hand moves down to A, C and F.",
        15: "The left hand plays a full C chord here. Spread fingers 5, 3 and 1 over C, E and G.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:8 | r:8",
        "C4/1:4 G4/2:4 | C5/2:4 E5/5:2 Eb5/4:1 r:1 | C4/1:4 G4/2:4 | C5/2:4 Eb5/4:2 E5/5:2",
        "r:8 | r:8",
        "C5/1:4 E5+G5/3+5:3 r:1 | E5+C6/1+5:4 G5+E6/1+5:2 G5+Eb6/1+4:1 r:1 | C5/1:4 E5+G5/3+5:3 r:1 | E5+C6/1+5:4 G5+Eb6/1+5:2 G5+E6/1+5:1 r:1",
        EPIC_CLIMB,
      ].join(" | "),
      left: [
        "C1+C2/5+1:8 | C1+C2/5+1:7 r:1",
        "C2+C3/5+1:8 | C2+G2+C3/5+2+1:8 | C2+C3/5+1:8 | C2+G2+C3/5+2+1:7 r:1",
        `${TIMPANI} | C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:2`,
        [1, 2, 3, 4].map(() => tremolo("C1", "C2")).join(" | "),
        `${tremolo("F1", "F2")} | ${tremolo("F1", "F2")} | ${tremolo("G1", "G2")}`,
        "G1/5:1 G2/1:1 G1/5:1 G2/1:1 G1/5:1 G2/1:1 G1/5:1 r:1 | C1+C2/5+1:8",
      ].join(" | "),
      pedal: "P:8 | P:8 | P:8 | P:8 | P:8 | P:8 | r:8 | r:8 | P:8 | P:8 | P:8 | P:8 | P:8 | P:6 P:2 | r:2 P:6 | P:4 P:2 P:2 | P:8",
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. From bar 9, it rocks between a low note and its octave, like a drum roll.", hands: "left", speed: 0.5, loop: [9, 17], wait: false },
        { text: "Play the right hand alone on bars 9 to 12, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the right hand's climb alone, bars 13 to 17. Each pair of notes steps up from the last.", hands: "right", speed: 0.5, loop: [13, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "sound", text: "Hold the low octave with the pedal down. It should rumble like a great organ." },
        { fromBar: 4, toBar: 4, kind: "sound", text: "The bright E turns to a dark E flat. Play the E flat a little softer." },
        { fromBar: 7, toBar: 8, kind: "rhythm", text: "Drum C and G like a timpani, and grow louder into bar 9." },
      ],
      tricky: {
        3: "The right hand enters on middle C as the left hand moves up an octave. The rest in bar 2 gives it time.",
        12: "The hand opens to a sixth on E and high C, then moves up to G. Finger 5 slides from E flat to E.",
        15: "The thumb jumps up to C in the rest before this bar. The pairs climb E, F and G, then E and F again.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "r:8 | r:8",
        "C4/1:4 G4/2:4 | C5/2:4 E5/5:2 Eb5/4:1 r:1 | C4/1:4 G4/2:4 | C5/2:4 Eb5/4:2 E5/5:2",
        "r:8 | r:8",
        "C4+C5/1+5:3 r:1 G4+G5/1+5:3 r:1 | C5+C6/1+5:3 r:1 E5+G5+C6+E6/1+2+3+5:2 Eb5+G5+C6+Eb6/1+2+3+5:1 r:1",
        "C4+C5/1+5:3 r:1 G4+G5/1+5:3 r:1 | C5+C6/1+5:3 r:1 Eb5+G5+C6+Eb6/1+2+3+5:2 E5+G5+C6+E6/1+2+3+5:1 r:1",
        LEGENDARY_CLIMB,
      ].join(" | "),
      left: [
        "C1+C2/5+1:8 | C1+C2/5+1:7 r:1",
        `C2+C3/5+1:8 | C2+G2+C3/5+2+1:3 r:1 ${ROLL} | C2+C3/5+1:8 | C2+G2+C3/5+2+1:3 r:1 ${ROLL}`,
        "C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:1 G1/5:1 | C2/1:1 G1/5:1 C2/1:1 G1/5:1 C2/1:2 r:2",
        `C1+C2/5+1:8 | C1+G1+C2/5+2+1:3 r:1 ${ROLL} | C1+C2/5+1:8 | C1+G1+C2/5+2+1:3 r:1 ${ROLL}`,
        `${tremolo("F1", "F2")} | ${tremolo("F1", "F2")} | ${tremolo("G1", "G2")}`,
        `G1+G2/5+1:2 G1+G2/5+1:2 G1+G2/5+1:2 G1+G2/5+1:1 r:1 | ${tremolo("C1", "C2")} | C1+C2/5+1:8`,
      ].join(" | "),
      pedal: "P:8 | P:8 | P:8 | P:8 | P:8 | P:8 | r:8 | r:8 | P:8 | P:8 | P:8 | P:8 | P:8 | P:6 P:2 | r:2 P:6 | P:4 P:2 P:2 | P:8 | P:8",
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the right hand's octaves alone, in bars 9 to 12. Keep the hand's shape and move the whole arm.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the left hand alone. It switches between deep octaves, timpani rolls and a rocking octave.", hands: "left", speed: 0.5, loop: null, wait: true },
        { text: "Play the right hand's climb alone, bars 13 to 16. Keep each chord's shape as the hand moves up.", hands: "right", speed: 0.5, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 9, toBar: 12, kind: "trick", text: "Lock the hand in an octave, thumb and little finger. The arm carries it from key to key." },
        { fromBar: 10, toBar: 12, kind: "fingering", text: "For the four-note chords, use fingers 1, 2, 3 and 5. Finger 4 rests." },
        { fromBar: 13, toBar: 18, kind: "sound", text: "Each chord climbs higher and louder. Save your loudest sound for the last C chord." },
      ],
      tricky: {
        10: "After the octave on C, spread the hand over E, G, C and E. Thumb and little finger then drop to E flat.",
        11: "The right hand jumps from the high chord down to the octave on middle C. Use the rest before it.",
        17: "Rock the hand between the C chord and the high C, like a drum roll.",
      },
    },
  },
  de: {
    about:
      "Richard Strauss schrieb diese Tondichtung 1896, nach einem Buch des Philosophen Friedrich Nietzsche. " +
      "Ihre Eröffnungsfanfare malt einen Sonnenaufgang über einem tiefen, gehaltenen C. " +
      "Stanley Kubricks Film 2001: Odyssee im Weltraum (1968) beginnt mit ihr.",
    funFact: "Die drei aufsteigenden Töne C, G und C sind der zweite, dritte und vierte Ton der Obertonreihe eines tiefen C.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten zwei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Jetzt spiel die Takte 3 bis 8 mit der rechten Hand. Dein Daumen bleibt nahe beim G.",
          "Spiel die linke Hand allein. Sie hält in jedem Takt eine leere Quinte.",
          "Spiel das ganze Stück langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Das ist ein Sonnenaufgang. Spiel jeden langen Ton voll aus, und lass ihn bis zum Ende klingen.",
          "Hier wird aus E ein Es, und der helle Klang wird dunkel. Hör auf den Wechsel.",
          "Takt 3 lässt das tiefe C weg, damit dein Daumen auf dem G warten kann.",
        ],
        tricky: {
          1: "Dein Daumen spielt das mittlere C und geht dann hinauf zum G. Beweg ihn während des langen Tons.",
          7: "Die rechte Hand steigt mit Finger 5 vom E zum F. Die linke Hand geht hinab zu F und C.",
          8: "Beide Hände kommen nach Hause. Die linke kehrt zu C und G zurück, und die rechte endet auf E.",
        },
      },
      rare: {
        practice: [
          "Spiel die Takte 3 bis 6 nur mit der rechten Hand. Das ist die Melodie des Sonnenaufgangs.",
          "Spiel die Zweiklänge der rechten Hand allein, in den Takten 9 bis 16.",
          "Spiel die linke Hand allein. In Takt 7 und 8 trommelt sie C und G wie eine Pauke.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand beginnt allein, wie ein tiefer Orgelton vor der Morgendämmerung. Halt ihn beide Takte lang.",
          "Spiel die Paukentöne gleichmäßig, einen auf jedem Schlag, und jedes Mal etwas lauter.",
          "Der obere Ton jedes Zweiklangs trägt die Melodie. Spiel ihn etwas lauter.",
        ],
        tricky: {
          3: "Dein Daumen spielt das mittlere C und geht während des langen Tons hinauf zum G.",
          14: "Die rechte Hand hält C und F mit Finger 2 und 5. Die linke Hand geht hinab zu A, C und F.",
          15: "Die linke Hand spielt hier einen vollen C-Akkord. Leg Finger 5, 3 und 1 auf C, E und G.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Ab Takt 9 wiegt sie zwischen einem tiefen Ton und seiner Oktave, wie ein Trommelwirbel.",
          "Spiel die rechte Hand allein in den Takten 9 bis 12, und drück beide Töne jedes Paars wie einen an.",
          "Spiel den Aufstieg der rechten Hand allein, die Takte 13 bis 17. Jedes Paar steigt eine Stufe über das letzte.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt die tiefe Oktave mit gedrücktem Pedal. Sie soll grollen wie eine große Orgel.",
          "Das helle E wird zum dunklen Es. Spiel das Es etwas leiser.",
          "Trommle C und G wie eine Pauke, und werde lauter bis in Takt 9.",
        ],
        tricky: {
          3: "Die rechte Hand setzt auf dem mittleren C ein, während die linke eine Oktave hinaufgeht. Die Pause in Takt 2 gibt ihr Zeit.",
          12: "Die Hand öffnet sich zu einer Sexte auf E und dem hohen C und geht dann hinauf zum G. Finger 5 gleitet vom Es zum E.",
          15: "Der Daumen springt in der Pause vor diesem Takt hinauf zum C. Die Paare steigen E, F und G, dann noch einmal E und F.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Oktaven der rechten Hand allein, in den Takten 9 bis 12. Halt die Form der Hand, und beweg den ganzen Arm.",
          "Spiel die linke Hand allein. Sie wechselt zwischen tiefen Oktaven, Paukenwirbeln und einer wiegenden Oktave.",
          "Spiel den Aufstieg der rechten Hand allein, die Takte 13 bis 16. Halt die Form jedes Akkords, während die Hand steigt.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Halt die Hand fest in einer Oktave, Daumen und kleiner Finger. Der Arm trägt sie von Taste zu Taste.",
          "Nimm für die Vierklänge Finger 1, 2, 3 und 5. Finger 4 ruht.",
          "Jeder Akkord steigt höher und wird lauter. Heb dir den lautesten Klang für den letzten C-Akkord auf.",
        ],
        tricky: {
          10: "Nach der Oktave auf C spannt sich die Hand über E, G, C und E. Dann fallen Daumen und kleiner Finger zum Es.",
          11: "Die rechte Hand springt vom hohen Akkord hinab zur Oktave auf dem mittleren C. Nutz die Pause davor.",
          17: "Wieg die Hand zwischen dem C-Akkord und dem hohen C, wie bei einem Trommelwirbel.",
        },
      },
    },
  },
};

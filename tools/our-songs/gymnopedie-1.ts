/**
 * *Gymnopédie No. 1*: the opening of Satie's slow waltz, in four versions of ours.
 *
 * The tune is the melody's first phrase, the print's bars 5 to 8, in D major and 3/4. A unit is a quarter
 * note in the tune. The hook is all four of its bars. Under it the print rocks between a bar of G major 7
 * and a bar of D major 7, and the tune's bars 1 and 3 sit on G. Each bar has the same figure: a low bass
 * note on beat 1, then a chord on beat 2, held through beat 3.
 *
 * Every version plays the print's bars 1 to 16, read from the edition Satie published himself in 1895.
 * Bars 1 to 4 rock before the tune, and bars 5 to 8 are the tune. In bars 9 to 12 the melody holds F
 * sharp, tied through four bars of the rocking. Bars 13 to 16 play the tune again, and the print's bar 16
 * ends it on A over the D chord. Common and Rare move to C major, where the rocking runs between F and C.
 * Epic and Legendary keep D major, and end on a plain D major chord instead of the print's D major 7.
 * Common shortens bar 8 by a beat, so the hand moves up to the held E in the rest.
 *
 * The tune rubs a semitone against the root of each chord, which Common and Rare may not do. So Common
 * plays a fifth on A in each bar of F, and Rare puts G under each bar of C. Common and Rare hold the E of
 * bars 9 to 12 an octave up, near the tune, and Rare plays A, C and E under it in each bar of F. Epic and
 * Legendary keep every rub, and their guides mark it.
 *
 * Common plays the tune over held open fifths, and lifts the thumb off B for a moment to step down to A.
 * Rare rocks a bass note and a two-note chord under it, with the pedal. Epic and Legendary take the print's
 * own figure in the left hand, with the print's chords. The hand lifts for the last eighth to leap back
 * down, and the pedal holds the bar. Under the held F sharp, the chord leaves out its own F sharp. Epic
 * plays a single bass note and plays the tune's second time in thirds. Legendary plays the bass in octaves
 * and the tune's second time in chords of up to four notes.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Epic and Legendary keep. */
const D_MAJOR: Key = { tonic: 2, mode: "major" };

/** The key Common and Rare move to. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in 3/4, in quarters: the print's bars 5 to 8. */
const tune = "r:1 F#5:1 A5:1 | G5:1 F#5:1 C#5:1 | B4:1 C#5:1 D5:1 | A4:3";

/** The four bars before the tune, where the right hand rests, in eighths. */
const INTRO_EIGHTHS = "r:6 | r:6 | r:6 | r:6";

/** The tune's first three bars in C major, fingered, in eighths. The hand lifts off B to move down to A. */
const COMMON_PHRASE = "r:2 E5/3:2 G5/5:2 | F5/4:2 E5/3:2 B4/1:1 r:1 | A4/1:2 B4/2:2 C5/3:2";

/** The print's bars 9 to 12 in C major, in eighths: one E held through four bars, an octave up. */
const COMMON_HELD = "E5/3:6~ | E5/3:6~ | E5/3:6~ | E5/3:6";

/** The tune's first three bars in C major, fingered, in quarters. */
const RARE_PHRASE = "r:1 E5/3:1 G5/5:1 | F5/4:1 E5/3:1 B4/1:1 | A4/1:1 B4/2:1 C5/3:1";

/** The print's bars 9 to 12 in C major, in quarters: one E held through four bars, an octave up. */
const RARE_HELD = "E5/3:3~ | E5/3:3~ | E5/3:3~ | E5/3:3";

/** The whole tune in D major, fingered, in eighths. */
const D_TUNE = "r:2 F#5/3:2 A5/5:2 | G5/4:2 F#5/3:2 C#5/1:2 | B4/1:2 C#5/2:2 D5/3:2 | A4/1:6";

/** The print's bars 9 to 12 in D major, in eighths: one F sharp held through four bars. */
const D_HELD = "F#4/1:6~ | F#4/1:6~ | F#4/1:6~ | F#4/1:6";

/**
 * The print's bar of a chord in eighths: the bass on beat 1, then the chord on beat 2. The hand lifts for the
 * last eighth to leap back down, and the pedal holds both through the bar.
 */
function figure(bass: string, chord: string): string {
  return `${bass}:1 r:1 ${chord}:3 r:1`;
}

/** Common's left hand: an open fifth on A for each bar of F, and one on C for each bar of C. */
const COMMON_F = "A2+E3/5+2:6";
const COMMON_C = "C3+G3/4+1:6";
const COMMON_C_SHORT = "C3+G3/4+1:4 r:2";

/** Rare's left hand under the tune: F, then A and E for a bar of F; G, then B and E for a bar of C. */
const RARE_F = "F3/5:1 A3+E4/3+1:2";
const RARE_C = "G3/4:1 B3+E4/2+1:2";

/** Rare's left hand under the held E for a bar of F: A, then C and E, so no F rubs against the E. */
const RARE_A_HELD = "A3/3:1 C4+E4/2+1:2";

/** Rare's last bars: F with a breath before the bass moves down, then C, then G and C. */
const RARE_F_BREATH = "F3/5:1 A3+E4/3+1:1 r:1";
const RARE_HOME = "C3/5:1 G3+C4/2+1:2";

/** Epic's bars of the print's G major 7 and D major 7, and the two without the F sharp the right hand holds. */
const EPIC_G = figure("G2/5", "B3+D4+F#4/4+2+1");
const EPIC_D = figure("D2/5", "A3+C#4+F#4/5+3+1");
const EPIC_G_HELD = figure("G2/5", "B3+D4/2+1");
const EPIC_D_HELD = figure("D2/5", "A3+C#4/2+1");
const EPIC_HOME = figure("D2/5", "A3+D4/2+1");

/** Legendary's bars: the print's figure with the bass in octaves. */
const LEGENDARY_G = figure("G1+G2/5+1", "B3+D4+F#4/4+2+1");
const LEGENDARY_D = figure("D2+D3/5+1", "A3+C#4+F#4/5+3+1");
const LEGENDARY_G_HELD = figure("G1+G2/5+1", "B3+D4/2+1");
const LEGENDARY_D_HELD = figure("D2+D3/5+1", "A3+C#4/2+1");
const LEGENDARY_HOME = figure("D2+D3/5+1", "F#3+A3/2+1");

export const gymnopedie1: OurSong = {
  slug: "gymnopedie-1",
  title: "Gymnopédie No. 1",
  aka: ["Gymnopedie No. 1", "Gymnopédie"],
  source: {
    composer: "Erik Satie",
    died: 1925,
    published: 1888,
    edition:
      "Gymnopédie No. 1, as Wikipedia's article prints its first eight bars, checked against Satie's own early print as Wikimedia Commons scans it. " +
      "Bars 9 to 16 from the edition Satie published himself in 1895, the Gallica scan btv1b520000770 on Wikimedia Commons, its pages 1 and 2",
  },
  about:
    "Erik Satie finished his three Gymnopédies in 1888, and the first was published that summer in a magazine. " +
    'It is marked "Lent et douloureux", which means slow and sorrowful. ' +
    "The film The Royal Tenenbaums (2001) plays it.",
  funFact: "Claude Debussy, a friend of Satie, later set the first and third Gymnopédies for orchestra.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 3, denominator: 4, steps: 1, key: D_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 66,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: `${INTRO_EIGHTHS} | ${COMMON_PHRASE} | G4/1:4 r:2 | ${COMMON_HELD} | ${COMMON_PHRASE} | G4/1:6`,
      left: [
        COMMON_F, COMMON_C, COMMON_F, COMMON_C,
        COMMON_F, COMMON_C_SHORT, COMMON_F, COMMON_C,
        COMMON_F, COMMON_C, COMMON_F, COMMON_C,
        COMMON_F, COMMON_C_SHORT, COMMON_F, COMMON_C,
      ].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play the left hand alone. It holds one open fifth in each bar.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Put both hands together on bars 5 to 8, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the fifths softly and let them ring. They rock like a slow boat." },
        { fromBar: 6, toBar: 6, kind: "trick", text: "Lift the thumb off B a little early. Then it moves down to A in time." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "Slow down a little at the end, and let the last C fade." },
      ],
      tricky: {
        7: "Your thumb moves from B down to A. Then fingers 2 and 3 climb to B and C.",
        9: "Your hand moves up in the rest at the end of bar 8. Then finger 3 holds E for four whole bars.",
        15: "As in bar 7, the thumb moves down to A after the short rest.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 69,
      numerator: 3,
      denominator: 4,
      steps: 1,
      right: [
        "r:3 | r:3 | r:3 | r:3",
        RARE_PHRASE,
        "G4/1:3",
        RARE_HELD,
        RARE_PHRASE,
        "G4/1:3",
      ].join(" | "),
      left: [
        RARE_F, RARE_C, RARE_F, RARE_C,
        RARE_F, RARE_C, RARE_F, RARE_C,
        RARE_A_HELD, RARE_C, RARE_A_HELD, RARE_C,
        RARE_F, RARE_C, RARE_F_BREATH, RARE_HOME,
      ].join(" | "),
      pedal: Array(16).fill("P:3").join(" | "),
      skills: ["waltz-bass", "pedal"],
      practice: [
        { text: "Play the left hand alone. A low note comes on beat 1, and two notes together on beat 2.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on bars 5 to 8, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Join the hands on bars 5 to 8, slowly, with the pedal.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play bars 9 to 12 with both hands. Finger 3 holds E while the left hand rocks under it.", hands: "both", speed: 0.7, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 16, kind: "sound", text: "Hold the pedal down for each whole bar, and change it right on the bar line." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "The thumb plays B, then steps down to A. Keep the other fingers loose." },
        { fromBar: 15, toBar: 16, kind: "sound", text: "Let the last two bars ring softly, like the end of a lullaby." },
      ],
      tricky: {
        7: "Your thumb steps from B down to A. Keep the hand close to the keys.",
        15: "The same step as in bar 7. Then lift the left hand for the last beat.",
        16: "Your left hand moves down to low C. Use the rest at the end of bar 15.",
      },
    },
    epic: {
      key: D_MAJOR,
      bpm: 72,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        INTRO_EIGHTHS,
        D_TUNE,
        D_HELD,
        "r:2 D5+F#5/1+3:2 F#5+A5/3+5:2",
        "E5+G5/2+4:2 D5+F#5/1+3:2 A4+C#5/1+3:2",
        "G4+B4/1+3:2 A4+C#5/2+4:2 B4+D5/3+5:2",
        "F#4+A4/1+3:6",
      ].join(" | "),
      left: [
        EPIC_G, EPIC_D, EPIC_G, EPIC_D,
        EPIC_G, EPIC_D, EPIC_G, EPIC_D,
        EPIC_G_HELD, EPIC_D_HELD, EPIC_G_HELD, EPIC_D_HELD,
        EPIC_G, EPIC_D, EPIC_G, EPIC_HOME,
      ].join(" | "),
      pedal: Array(16).fill("P:6").join(" | "),
      markedClashBars: [7, 9, 11, 14, 15],
      skills: ["waltz-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the left hand alone. Jump from the low note up to the chord in the short rest.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with both hands, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "The pedal holds the low note while your hand jumps up to the chord." },
        { fromBar: 7, toBar: 7, kind: "sound", text: "C sharp rubs against D in the left hand. That soft rub is the colour Satie loved." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "The thumb holds F sharp for four bars. It rubs softly against the low G in bars 9 and 11." },
      ],
      tricky: {
        2: "Leap from low D up to the chord. Your fingers 5, 3 and 1 reach from A to F sharp.",
        6: "Your thumb reaches down to C sharp as finger 3 lets go of F sharp.",
        14: "The thirds step down from E and G. Then the thumb moves down from D to A for the last pair.",
      },
    },
    legendary: {
      key: D_MAJOR,
      bpm: 76,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        INTRO_EIGHTHS,
        D_TUNE,
        D_HELD,
        "r:2 G4+B4+D5+F#5/1+2+3+5:1 r:1 A4+D5+F#5+A5/1+2+3+5:1 r:1",
        "G4+B4+D5+G5/1+2+3+5:1 r:1 A4+D5+F#5/1+3+5:1 r:1 A4+C#5/1+2:1 r:1",
        "G4+B4/1+3:1 r:1 A4+C#5/1+3:1 r:1 G4+B4+D5/1+2+4:1 r:1",
        "D4+F#4+A4/1+2+4:6",
      ].join(" | "),
      left: [
        LEGENDARY_G, LEGENDARY_D, LEGENDARY_G, LEGENDARY_D,
        LEGENDARY_G, LEGENDARY_D, LEGENDARY_G, LEGENDARY_D,
        LEGENDARY_G_HELD, LEGENDARY_D_HELD, LEGENDARY_G_HELD, LEGENDARY_D_HELD,
        LEGENDARY_G, LEGENDARY_D, LEGENDARY_G, LEGENDARY_HOME,
      ].join(" | "),
      pedal: Array(16).fill("P:6").join(" | "),
      markedClashBars: [7, 9, 11, 13, 14, 15],
      skills: ["octave-bass", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone. Jump from the low octave up to the chord in the short rest.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with both hands, slowly.", hands: "both", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the right hand's chords alone, and lift the hand between them.", hands: "right", speed: 0.5, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "trick", text: "Look at the next chord while the pedal holds the low octave. Your eyes lead the hand." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "The thumb holds F sharp for four bars. It rubs softly against the low G in bars 9 and 11." },
        { fromBar: 13, toBar: 15, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        5: "The tune begins. Finger 3 plays F sharp, and finger 5 plays A, while the left hand leaps up to the chord.",
        7: "Your thumb moves down from C sharp to B. Then fingers 2 and 3 climb to C sharp and D.",
        15: "Lift the hand after each chord. The thumb plays G, then A, then G again.",
      },
    },
  },
  de: {
    about:
      "Erik Satie vollendete seine drei Gymnopédies 1888, und die erste erschien im Sommer desselben Jahres in einer Zeitschrift. " +
      'Sie trägt die Vortragsangabe "Lent et douloureux", also langsam und schmerzlich. ' +
      "Der Film The Royal Tenenbaums (2001) spielt dieses Stück.",
    funFact: "Claude Debussy, ein Freund von Satie, setzte später die erste und die dritte Gymnopédie für Orchester.",
    versions: {
      common: {
        practice: [
          "Spiel die linke Hand allein. Sie hält in jedem Takt eine leere Quinte.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Nimm beide Hände zusammen auf den Takten 5 bis 8, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel die Quinten leise, und lass sie klingen. Sie schaukeln wie ein langsames Boot.",
          "Heb den Daumen etwas früher vom H ab. Dann kommt er rechtzeitig hinunter zum A.",
          "Werde am Schluss etwas langsamer, und lass das letzte C verklingen.",
        ],
        tricky: {
          7: "Dein Daumen rückt vom H hinunter zum A. Dann steigen Finger 2 und 3 zu H und C.",
          9: "Deine Hand rückt in der Pause am Ende von Takt 8 hinauf. Dann hält Finger 3 das E vier ganze Takte lang.",
          15: "Wie in Takt 7 rückt der Daumen nach der kurzen Pause hinunter zum A.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Ein tiefer Ton kommt auf Schlag 1, zwei Töne zusammen auf Schlag 2.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen und mit Pedal.",
          "Spiel die Takte 9 bis 12 mit beiden Händen. Finger 3 hält das E, während die linke Hand darunter schaukelt.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das Pedal jeweils einen ganzen Takt, und wechsle es genau am Taktstrich.",
          "Der Daumen spielt H und rückt dann hinunter zum A. Halt die anderen Finger locker.",
          "Lass die letzten zwei Takte leise klingen, wie das Ende eines Wiegenlieds.",
        ],
        tricky: {
          7: "Dein Daumen rückt vom H hinunter zum A. Halt die Hand nah an den Tasten.",
          15: "Derselbe Schritt wie in Takt 7. Dann heb die linke Hand für den letzten Schlag an.",
          16: "Deine linke Hand rückt hinunter zum tiefen C. Nutz die Pause am Ende von Takt 15.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Spring in der kurzen Pause vom tiefen Ton hinauf zum Akkord.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Das Pedal hält den tiefen Ton, während deine Hand hinauf zum Akkord springt.",
          "Das Cis reibt sich am D der linken Hand. Diese leise Reibung ist die Farbe, die Satie liebte.",
          "Der Daumen hält das Fis vier Takte lang. Es reibt sich in den Takten 9 und 11 leise am tiefen G.",
        ],
        tricky: {
          2: "Spring vom tiefen D hinauf zum Akkord. Deine Finger 5, 3 und 1 greifen von A bis Fis.",
          6: "Dein Daumen greift hinunter zum Cis, während Finger 3 das Fis loslässt.",
          14: "Die Terzen steigen von E und G abwärts. Dann rückt der Daumen für das letzte Paar von D hinunter zum A.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Spring in der kurzen Pause von der tiefen Oktave hinauf zum Akkord.",
          "Spiel die Takte 5 bis 8 langsam mit beiden Händen.",
          "Spiel die Akkorde der rechten Hand allein, und heb die Hand zwischen ihnen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau auf den nächsten Akkord, während das Pedal die tiefe Oktave hält. Deine Augen führen die Hand.",
          "Der Daumen hält das Fis vier Takte lang. Es reibt sich in den Takten 9 und 11 leise am tiefen G.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          5: "Die Melodie beginnt. Finger 3 spielt Fis, und Finger 5 spielt A, während die linke Hand hinauf zum Akkord springt.",
          7: "Dein Daumen rückt vom Cis hinunter zum H. Dann steigen Finger 2 und 3 zu Cis und D.",
          15: "Heb die Hand nach jedem Akkord an. Der Daumen spielt G, dann A, dann wieder G.",
        },
      },
    },
  },
};

/**
 * *Hungarian Dance No. 5*: the opening of Brahms's dance in F-sharp minor, in four versions of ours.
 *
 * The tune is the opening phrase, the print's bars 1 to 4, in F-sharp minor. The print is in 2/4, and
 * every length here is four times as long, in 2/1. A whole note is one beat, so the print's sixteenths are
 * quarters. A unit is a quarter, and the hook is all four bars.
 *
 * The print is Moszkowski's solo arrangement in Augener's edition of 1911, as Wikimedia Commons scans it.
 * Its next phrase, bars 5 to 8, sings D, E and F sharp over a third, then holds C sharp. It then sighs
 * down from B to G sharp in pairs and lands on the low F sharp. From bar 9, the print plays the tune again
 * an octave up.
 *
 * The print's left hand plays eighths: a bass note on each beat and a short two-note chord after it. The
 * bass falls from F sharp to C sharp in the home bars. Bars 3 and 5 put a B minor chord over F sharp and
 * B, and bar 7 a C-sharp seventh over E sharp.
 *
 * Common and Rare move the song up a minor third to A minor, and keep the dominant under bar 3's leading
 * note. Common plays the print's bars 1 to 8, the tune and then the next phrase, over held roots and
 * open fifths. It merges bar 7's repeated notes. Rare plays the tune, then the tune an octave up, over a
 * bass note and its triad. Its bars 9 to 12 are the print's bars 5 to 8 an octave up. Bars 13 to 16 play
 * the tune again, as the print does, and end on the home chord.
 *
 * Epic and Legendary keep F-sharp minor and take the print's left hand note for note. Each note is short,
 * so the hand has a rest to jump in, and Legendary doubles each bass note an octave below. Over the B
 * minor chord, the tune's E sharp clashes with F sharp. Both keep that clash of the print and mark it,
 * in bars 3 and 15, and Epic also in bar 7.
 *
 * Epic plays the tune, then the tune an octave up in sixths. Its bars 9 to 12 are the print's bars 5 to 8
 * an octave up, in the print's thirds. The sixths come back in bars 13 to 16. Legendary plays the tune in
 * octaves, then quick figures around it over a C-sharp seventh in bar 7. Its bars 9 to 12 play the print's
 * bars 5 to 8 in octaves, with the sighs in single notes. Bars 13 to 16 play the tune again in full chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const F_SHARP_MINOR: Key = { tonic: 6, mode: "minor" };

/** The key Common and Rare move to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 2/1, in quarters: the print's four bars. E sharp is the leading note. */
const tune = "C#4:6 F#4:2 | A4:6 F#4:2 | E#4:6 F#4:1 G#4:1 | F#4:8";

/** The tune in A minor in the right hand, in quarters, the thumb on E. */
const TUNE_A = "E4/1:6 A4/3:2 | C5/5:6 A4/3:2 | G#4/2:6 A4/3:1 B4/4:1 | A4/3:8";

/** The print's bars 5 to 8 in A minor for Common: bar 7's repeated notes merged, the hand moving down to A there. */
const NEXT_COMMON = "F4/2:6 G4/3:1 A4/4:1 | E4/1:7 r:1 | D4/4:1 C4/3:2 B3/2:4 E4/5:1 | A3/1:8";

/** The print's bars 5 to 8 in A minor an octave up, every note at its place: Rare's bars 9 to 12. */
const NEXT_RARE = "F5/1:6 G5/2:1 A5/3:1 | E5/1:7 r:1 | D5/4:1 C5/3:1 C5/3:1 B4/2:1 B4/2:3 E5/5:1 | A4/1:7 r:1";

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** Bars of `patterns` from `halves`, such as `"ii VV"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

/** Whole bars of `patterns` from `bars`, such as `"iisi"`: one letter per bar. */
function wholeBars(patterns: Record<string, string>, bars: string): string {
  return [...bars].map((bar) => patterns[bar]).join(" | ");
}

/** Rare's left hand per half bar in A minor: the root, then its triad. The dominant keeps the thumb on E. */
const OOM_PAH: Record<string, string> = {
  i: "A2/5:4",
  I: "A2+C3+E3/5+3+1:4",
  d: "D3/2:4",
  D: "A2+D3+F3/5+2+1:4",
  v: "E3/1:4",
  V: "B2+D3+E3/4+2+1:4",
};

/**
 * The print's left hand per bar in F-sharp minor, in eighths: a bass note, a chord, a bass note, a chord.
 * Each lasts half its eighth, so the hand has a rest to jump in. `i` is the home bar, `s` bar 3, `f` bar 5,
 * `V` bar 7 and `e` bar 8.
 */
const PRINT_LEFT: Record<string, string> = {
  i: "F#2/5:1 r:1 C#3+F#3/2+1:1 r:1 C#2/5:1 r:1 C#3+F#3/2+1:1 r:1",
  s: "F#2/5:1 r:1 D3+F#3/2+1:1 r:1 B1/5:1 r:1 D3+F#3/2+1:1 r:1",
  f: "F#2/5:1 r:1 D3+F#3/2+1:1 r:1 B1/5:1 r:1 B2+F#3/4+1:1 r:1",
  V: "E#2/5:1 r:1 C#3/1:1 r:1 C#2/5:1 r:1 C#3+E#3+B3/5+3+1:1 r:1",
  e: "F#2/5:1 r:1 C#3+A3/3+1:1 r:1 C#2/5:1 r:1 C#3+A3/3+1:1 r:1",
};

/** `PRINT_LEFT` for Legendary, in its eighths: each bass note in octaves, and a rest before each jump. */
const PRINT_LEFT_OCTAVES: Record<string, string> = {
  i: "F#1+F#2/5+1:3 r:1 C#3+F#3/2+1:3 r:1 C#1+C#2/5+1:3 r:1 C#3+F#3/2+1:3 r:1",
  s: "F#1+F#2/5+1:3 r:1 D3+F#3/2+1:3 r:1 B0+B1/5+1:3 r:1 D3+F#3/2+1:3 r:1",
  f: "F#1+F#2/5+1:3 r:1 D3+F#3/2+1:3 r:1 B0+B1/5+1:3 r:1 B2+F#3/4+1:3 r:1",
  V: "E#1+E#2/5+1:3 r:1 C#3/1:3 r:1 C#1+C#2/5+1:3 r:1 C#3+E#3+B3/5+3+1:3 r:1",
  e: "F#1+F#2/5+1:3 r:1 C#3+A3/3+1:3 r:1 C#1+C#2/5+1:3 r:1 C#3+A3/3+1:3 r:1",
};

/** The tune an octave up in sixths and thirds, with a full home chord at the end: Epic's bars 5 to 8 and 13 to 16. */
const SIXTHS =
  "A4+C#5/1+3:6 A4+F#5/1+5:2 | C#5+A5/2+5:6 A4+F#5/1+4:2 | G#4+E#5/1+4:6 A4+F#5/1+4:1 B4+G#5/2+5:1 | A4+C#5+F#5/1+2+5:8";

export const hungarianDance5: OurSong = {
  slug: "hungarian-dance-5",
  title: "Hungarian Dance No. 5",
  source: {
    composer: "Johannes Brahms",
    died: 1897,
    published: 1869,
    edition:
      "Hungarian Dance No. 5 in F-sharp minor, in Moritz Moszkowski's arrangement for piano solo in Augener's edition of 1911, " +
      "as Wikimedia Commons scans it in \"21 Hungarian Dances (Piano), WoO 1\": its bars 1 to 4 for the tune, and bars 5 to 10 for the rest",
  },
  about:
    "Brahms wrote his Hungarian Dances for piano four hands, and the first set was published in 1869. " +
    "No. 5 became the most famous of them all. " +
    "In the film The Great Dictator (1940), Charlie Chaplin shaves a customer in time to it.",
  funFact: "Brahms based this dance on a csárdás by Béla Kéler, but he believed it was a folk tune.",
  mythic: null,
  collection: "film",
  aka: ["Ungarischer Tanz Nr. 5"],
  tune: { text: tune, numerator: 2, denominator: 1, steps: 4, key: F_SHARP_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 160,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: `${TUNE_A} | ${NEXT_COMMON}`,
      left: "A2+E3/5+1:8 | A2+E3/5+1:8 | E3/1:8 | A2+E3/5+1:8 | D3/2:8 | A2+E3/5+1:8 | E3/1:8 | A2+E3/5+1:8",
      skills: ["five-finger-position", "held-bass", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. In bar 7, the hand moves down to the low A.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds an open fifth, D alone in bar 5, and only the thumb in bars 3 and 7.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "rhythm", text: "Each long note lasts six counts, and the short one two. Count them, and the dance swings." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "Finger 2 holds G sharp, then fingers 3 and 4 hurry up to A and B." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "G sharp pulls hard towards A. Let it lean a little before it moves." },
        { fromBar: 6, toBar: 8, kind: "fingering", text: "At the end of bar 6, move the hand down. Finger 4 lands on D, and the thumb waits over the low A." },
      ],
      tricky: {
        2: "Finger 5 reaches up to C, then finger 3 comes back to A.",
        5: "Fingers 2, 3 and 4 play F, G and A. The thumb stays over E.",
        7: "Finger 4 plays D, then fingers 3 and 2 walk down to B. Finger 5 reaches up to E.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 200,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        TUNE_A.replace("A4/3:8", "A4/3:7 r:1"),
        octaveUp(TUNE_A),
        NEXT_RARE,
        TUNE_A.replace(" | A4/3:8", ""),
        "E4+A4/1+3:8",
      ].join(" | "),
      left: [halfBars(OOM_PAH, "iI iI vV iI iI iI vV iI dD iI vV iI iI iI vV"), "A2+C3+E3/5+3+1:8"].join(" | "),
      skills: ["triads", "position-change"],
      practice: [
        { text: "Play the left hand alone. A low note comes first, then a chord on the second beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, where it moves up an octave.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 12 with the right hand alone. The tune climbs to A, then sighs down to the A below.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the low note a little louder than the chord after it. That is the dance's oom-pah." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "While you hold the long A, move the right hand up an octave. The thumb lands on E." },
        { fromBar: 11, toBar: 11, kind: "sound", text: "The notes of bar 11 sigh in pairs. Play the first of each pair a little louder." },
        { fromBar: 12, toBar: 13, kind: "trick", text: "The short rest at the end of bar 12 gives you time to jump back down." },
      ],
      tricky: {
        5: "The right hand now plays an octave up. Your thumb lands on the high E.",
        11: "Move the hand down: finger 4 plays D. Fingers 3 and 2 repeat C and B, and finger 5 reaches up to E.",
        13: "Use the rest in bar 12 to move down from A to E. Your thumb lands on E.",
      },
    },
    epic: {
      key: F_SHARP_MINOR,
      bpm: 280,
      numerator: 2,
      denominator: 1,
      steps: 4,
      right: [
        "C#4/1:6 F#4/3:2 | A4/5:6 F#4/3:2 | E#4/2:6 F#4/3:1 G#4/4:1 | F#4/3:8",
        SIXTHS,
        "B4+D5/1+3:6 C#5+E5/2+4:1 D5+F#5/3+5:1 | A4+C#5/1+3:8 | B4/3:1 A4/2:1 A4/2:1 G#4/1:1 G#4/1:3 C#5/4:1 | F#4+A4+C#5/1+2+4:8",
        SIXTHS,
      ].join(" | "),
      left: [wholeBars(PRINT_LEFT, "iisiiisifiVeiis"), "F#2+C#3+F#3/5+2+1:8"].join(" | "),
      markedClashBars: [3, 7, 15],
      pedal: Array(16).fill("P:8").join(" | "),
      skills: ["waltz-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the left hand alone, slowly. A low note falls on each beat, and a short chord answers it.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the thirds of bars 9 to 12 with the right hand alone.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Lean on each low note, and keep the chords after it short and light. That is the dance's step." },
        { fromBar: 3, toBar: 3, kind: "fingering", text: "E sharp is the white key F. Finger 2 plays it, and the hand stays put." },
        { fromBar: 5, toBar: 8, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "The thumb sits on G sharp. Fingers 3 and 2 sigh down to it in pairs." },
      ],
      tricky: {
        7: "Fingers 1 and 4 play G sharp and E sharp. Then the hand steps up twice, quickly.",
        12: "Finger 4 stays on C sharp. The thumb and finger 2 drop down to F sharp and A for the home chord.",
        15: "The same sixths as bar 7. Keep the thumb close to A and B.",
      },
    },
    legendary: {
      key: F_SHARP_MINOR,
      bpm: 440,
      numerator: 2,
      denominator: 1,
      steps: 8,
      right: [
        "C#4+C#5/1+5:11 r:1 F#4+F#5/1+5:3 r:1 | A4+A5/1+5:11 r:1 F#4+F#5/1+5:3 r:1",
        "E#4+E#5/1+5:11 r:1 F#4+F#5/1+5:1 r:1 G#4+G#5/1+5:1 r:1 | F#4+F#5/1+5:15 r:1",
        "C#5/3:2 D5/4:2 C#5/3:2 B4/2:2 C#5/3:2 A4/1:2 F#5/5:4",
        "A5/5:2 G#5/4:2 F#5/3:2 E#5/2:2 F#5/3:2 C#5/1:2 F#5/4:4",
        "E#5/2:2 G#5/4:2 B5/5:2 G#5/4:2 E#5/2:2 C#5/1:2 F#5/3:2 G#5/4:1 r:1",
        "F#4+A4+C#5+F#5/1+2+3+5:15 r:1",
        "D4+D5/1+5:11 r:1 E4+E5/1+5:1 r:1 F#4+F#5/1+5:1 r:1 | C#4+C#5/1+5:15 r:1",
        "B4/3:2 A4/2:2 A4/2:2 G#4/1:2 G#4/1:6 C#5/4:2",
        "F#4+A4+C#5+F#5/1+2+3+5:15 r:1",
        "F#4+A4+C#5/1+2+5:11 r:1 A4+C#5+F#5/1+2+5:3 r:1 | C#5+F#5+A5/1+3+5:11 r:1 A4+C#5+F#5/1+2+5:3 r:1",
        "G#4+B4+E#5/1+2+5:11 r:1 A4+C#5+F#5/1+2+4:1 r:1 B4+E#5+G#5/1+3+5:1 r:1 | F#4+A4+C#5+F#5/1+2+3+5:16",
      ].join(" | "),
      left: [wholeBars(PRINT_LEFT_OCTAVES, "iisiiiVifiVeiis"), "F#1+F#2/5+1:16"].join(" | "),
      markedClashBars: [3, 15],
      skills: ["octave-bass", "melody-in-chords", "stride"],
      practice: [
        { text: "Play the left hand alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's octaves alone, with the thumb and little finger in one shape.", hands: "right", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the quick figures of bars 5 to 7 in the right hand alone, slowly.", hands: "right", speed: 0.4, loop: [5, 7], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the octaves with fire. This is a fast dance, and every long note should ring." },
        { fromBar: 5, toBar: 7, kind: "fingering", text: "In the quick figures, the thumb passes under to keep the run smooth." },
        { fromBar: 11, toBar: 11, kind: "sound", text: "In bar 11 the octaves stop, and single notes sigh down in pairs. Play them softly." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        8: "Spread the hand over F sharp, A, C sharp and F sharp with fingers 1, 2, 3 and 5.",
        9: "Hold the D octave, then move the same octave shape up twice, quickly, to E and F sharp.",
        12: "The four-note chord comes back. From C sharp, spread the hand down over F sharp, A, C sharp and F sharp.",
      },
    },
  },
  de: {
    about:
      "Brahms schrieb seine Ungarischen Tänze für Klavier zu vier Händen, und die erste Sammlung erschien 1869. " +
      "Der fünfte Tanz wurde der berühmteste von allen. " +
      "Im Film Der große Diktator (1940) rasiert Charlie Chaplin einen Kunden im Takt dazu.",
    funFact: "Brahms baute diesen Tanz auf einem Csárdás von Béla Kéler auf, hielt ihn aber für ein Volkslied.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. In Takt 7 rückt die Hand hinunter zum tiefen A.",
          "Jetzt die linke Hand allein. Sie hält eine leere Quinte, in Takt 5 nur das D, und in Takt 3 und 7 nur den Daumen.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jeder lange Ton dauert sechs Zählzeiten, der kurze zwei. Zähl mit, dann schwingt der Tanz.",
          "Finger 2 hält das Gis, dann eilen Finger 3 und 4 hinauf zu A und H.",
          "Das Gis zieht stark zum A. Lass es ein wenig verweilen, bevor es weitergeht.",
          "Rück die Hand am Ende von Takt 6 hinunter. Finger 4 landet auf dem D, und der Daumen wartet über dem tiefen A.",
        ],
        tricky: {
          2: "Finger 5 greift hinauf zum C, dann kehrt Finger 3 zum A zurück.",
          5: "Finger 2, 3 und 4 spielen F, G und A. Der Daumen bleibt über dem E.",
          7: "Finger 4 spielt das D, dann gehen Finger 3 und 2 hinunter zum H. Finger 5 greift hinauf zum E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Zuerst kommt ein tiefer Ton, dann ein Akkord auf dem zweiten Schlag.",
          "Spiel die ersten acht Takte nur mit der rechten Hand. Dort rückt sie eine Oktave hinauf.",
          "Spiel die Takte 9 bis 12 nur mit der rechten Hand. Die Melodie steigt zum A und seufzt dann hinunter zum A darunter.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Spiel den tiefen Ton etwas lauter als den Akkord danach. Das ist das Hm-ta des Tanzes.",
          "Während du das lange A hältst, rück die rechte Hand eine Oktave hinauf. Der Daumen landet auf dem E.",
          "Die Töne von Takt 11 seufzen paarweise. Spiel den ersten Ton jedes Paars etwas lauter.",
          "Die kurze Pause am Ende von Takt 12 gibt dir Zeit, wieder hinunterzuspringen.",
        ],
        tricky: {
          5: "Die rechte Hand spielt jetzt eine Oktave höher. Dein Daumen landet auf dem hohen E.",
          11: "Rück die Hand hinunter: Finger 4 spielt das D. Finger 3 und 2 wiederholen C und H, und Finger 5 greift hinauf zum E.",
          13: "Nutz die Pause in Takt 12, um vom A hinunter zum E zu rücken. Dein Daumen landet auf dem E.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, langsam. Auf jeden Schlag fällt ein tiefer Ton, und ein kurzer Akkord antwortet.",
          "Spiel die Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die Terzen der Takte 9 bis 12 nur mit der rechten Hand.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Betone jeden tiefen Ton, und spiel die Akkorde danach kurz und leicht. Das ist der Schritt des Tanzes.",
          "Eis ist die weiße Taste F. Finger 2 spielt es, und die Hand bleibt, wo sie ist.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
          "Der Daumen liegt auf dem Gis. Finger 3 und 2 seufzen paarweise zu ihm hinunter.",
        ],
        tricky: {
          7: "Finger 1 und 4 spielen Gis und Eis. Dann rückt die Hand zweimal schnell hinauf.",
          12: "Finger 4 bleibt auf dem Cis. Daumen und Finger 2 gehen hinunter zu Fis und A für den Schlussakkord.",
          15: "Dieselben Sexten wie in Takt 7. Halt den Daumen nah bei A und H.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Oktaven der rechten Hand allein, mit Daumen und kleinem Finger in einer Griffform.",
          "Spiel die schnellen Figuren der Takte 5 bis 7 langsam nur mit der rechten Hand.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Spiel die Oktaven mit Feuer. Das ist ein schneller Tanz, und jeder lange Ton soll klingen.",
          "In den schnellen Figuren geht der Daumen unter, damit der Lauf glatt bleibt.",
          "In Takt 11 enden die Oktaven, und einzelne Töne seufzen paarweise hinunter. Spiel sie leise.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          8: "Spann die Hand über Fis, A, Cis und Fis, mit Finger 1, 2, 3 und 5.",
          9: "Halt die Oktave D, dann rück dieselbe Oktavgriffform zweimal schnell hinauf zu E und Fis.",
          12: "Der Vierklang kommt zurück. Spann die Hand vom Cis hinunter über Fis, A, Cis und Fis.",
        },
      },
    },
  },
};

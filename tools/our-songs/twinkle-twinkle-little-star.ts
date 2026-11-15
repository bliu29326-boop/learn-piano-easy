/**
 * *Twinkle Twinkle Little Star*: the French tune "Ah! vous dirai-je, maman", in four versions of ours.
 *
 * The tune is twelve bars in C major, the theme of Mozart's Variations K. 265, with two of its 2/4 bars
 * to one of ours. The hook is its first two bars, seven notes. The theme's first page in the Breitkopf &
 * Härtel complete edition is on Wikimedia Commons as `Mozart_K_265.jpg`. Mutopia has the theme only in
 * a guitar-duo typeset, which reads the same bars.
 *
 * Common plays the tune as it is, with a finger on each note. Rare, Epic and Legendary then play the
 * theme's print bars 19 to 24 again as their bars 13 to 15, and hold the home chord in bar 16. Bar 15
 * is the print's cadence: D, D and a quick E, then C, over the print's bass F, G and C. The versions
 * leave out the print's turn before the second D.
 *
 * Rare plays the tune with a few eighth notes over held chords. Epic puts an Alberti bass under it with
 * the pedal, and plays the returning phrase in thirds. The theme's own left hand is a line of single
 * quarters, too plain for Medium and Hard. So Epic and Legendary keep their level's patterns and take
 * the print's bass notes in bar 15. Legendary plays the tune in chords over a stride bass, breaks it
 * into sixteenths, then plays it in octaves.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const C_MAJOR: Key = { tonic: 0, mode: "major" };

/** The tune in C major, in quarters: the opening phrase, the middle phrase twice, and the opening again. */
const OPENING = "C4:1 C4:1 G4:1 G4:1 | A4:1 A4:1 G4:2 | F4:1 F4:1 E4:1 E4:1 | D4:1 D4:1 C4:2";
const MIDDLE = "G4:1 G4:1 F4:1 F4:1 | E4:1 E4:1 D4:2";
const tune = [OPENING, MIDDLE, MIDDLE, OPENING].join(" | ");

/**
 * Half a bar of held chord in eighths. C keeps only C and E, so the hand reaches both F major below it
 * and G major without leaving its place.
 */
const HELD: Record<string, string> = { C: "C3+E3/2+1:4", F: "F2+A2+C3/5+3+2:4", G: "G2+B2/5+3:4" };

/** Half a bar of Alberti bass in eighths, on C major, F major over C, or G major over B. */
const ALBERTI: Record<string, string> = {
  C: "C3/5:1 G3/1:1 E3/3:1 G3/1:1",
  F: "C3/5:1 A3/1:1 F3/2:1 A3/1:1",
  G: "B2/5:1 G3/1:1 D3/3:1 G3/1:1",
};

/**
 * Epic's half bar under the print's bar 23 in eighths: the print's bass F, then G, each broken against
 * the D above it.
 */
const PRINT_23_BASS = "F2/5:1 D3/1:1 G2/4:1 D3/1:1";

/** Half a bar of stride in sixteenths: the root in octaves, then the chord, each an eighth with a rest for the jump. */
const STRIDE: Record<string, string> = {
  C: "C2+C3/5+1:2 r:2 E3+G3+C4/3+2+1:2 r:2",
  F: "F1+F2/5+1:2 r:2 A2+C3+F3/3+2+1:2 r:2",
  G: "G1+G2/5+1:2 r:2 B2+D3+G3/3+2+1:2 r:2",
};

/** Half a bar of octave bass in sixteenths, held. */
const OCTAVES: Record<string, string> = { C: "C2+C3/5+1:6 r:2", F: "F2+F3/5+1:6 r:2", G: "G2+G3/5+1:6 r:2" };

/** Half a bar of broken chord in sixteenths: root, fifth and tenth, each an eighth, then a rest for the jump. */
const BROKEN: Record<string, string> = { C: "C2/5:2 G2/2:2 E3/1:2 r:2", F: "F1/5:2 C2/2:2 A2/1:2 r:2", G: "G1/5:2 D2/2:2 B2/1:2 r:2" };

/** Bars of `patterns` from `halves`, such as `"CC FC"`: one letter per half bar, a space between bars. */
function halfBars(patterns: Record<string, string>, halves: string): string {
  return halves
    .split(" ")
    .map((bar) => [...bar].map((chord) => patterns[chord]).join(" "))
    .join(" | ");
}

export const twinkleTwinkleLittleStar: OurSong = {
  slug: "twinkle-twinkle-little-star",
  title: "Twinkle Twinkle Little Star",
  source: {
    composer: "Traditional",
    died: null,
    published: 1761,
    edition: "The theme of Mozart's Twelve Variations on \"Ah, vous dirai-je, maman\", K. 265, in the Breitkopf & Härtel complete edition, series 21, its first page as the Wikimedia Commons scan Mozart_K_265.jpg, read with the Mutopia Project's guitar-duo typeset of the theme",
  },
  about:
    "This tune began as a French song, Ah! vous dirai-je, maman, first printed in 1761. " +
    "Mozart wrote twelve variations on it for the piano. " +
    "In 1806 Jane Taylor published her poem about a little star, and it was later sung to this tune.",
  funFact: "The alphabet song and Baa, Baa, Black Sheep are sung to this same tune.",
  mythic: null,
  tune: { text: tune, numerator: 4, denominator: 4, key: C_MAJOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: C_MAJOR,
      bpm: 100,
      numerator: 4,
      denominator: 4,
      right: [
        "C4/1:1 C4/1:1 G4/4:1 G4/4:1 | A4/5:1 A4/5:1 G4/4:2 | F4/4:1 F4/4:1 E4/3:1 E4/3:1 | D4/2:1 D4/2:1 C4/1:2",
        "G4/5:1 G4/5:1 F4/4:1 F4/4:1 | E4/3:1 E4/3:1 D4/2:2 | G4/5:1 G4/5:1 F4/4:1 F4/4:1 | E4/3:1 E4/3:1 D4/2:2",
        "C4/1:1 C4/1:1 G4/4:1 G4/4:1 | A4/5:1 A4/5:1 G4/4:2 | F4/4:1 F4/4:1 E4/3:1 E4/3:1 | D4/2:1 D4/2:1 C4/1:2",
      ].join(" | "),
      left: [
        "C3/1:4 | F2/5:2 C3/1:2 | F2/5:2 C3/1:2 | G2/4:2 C3/1:2",
        "C3/1:2 F2/5:2 | C3/1:2 G2/4:2 | C3/1:2 F2/5:2 | C3/1:2 G2/4:2",
        "C3/1:4 | F2/5:2 C3/1:2 | F2/5:2 C3/1:2 | G2/4:2 C3/1:2",
      ].join(" | "),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the right hand alone, slowly, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Now the left hand alone. It only moves between C, F and G.", hands: "left", speed: 0.6, loop: [1, 12], wait: true },
        { text: "Put both hands together on the first four bars.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Put your thumb on middle C. Finger 4 plays G, and the little finger plays A." },
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The last C is twice as long as the notes before it, so count two beats." },
        { fromBar: 5, toBar: 8, kind: "sound", text: "The middle part says the same thing twice. Play it softer the second time, like an echo." },
      ],
      tricky: {
        3: "Your hand moves one key down here, so finger 4 leaves G and lands on F.",
        5: "Your little finger plays G now. Walk down from it, one finger per key: 5, 4, 3, 2.",
        11: "This is bar 3 again. Slide the hand one key down, so finger 4 lands on F.",
      },
    },
    rare: {
      key: C_MAJOR,
      bpm: 96,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "C4/1:2 C4/1:2 G4/4:2 G4/4:2 | A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:1 E4/3:1 C4/1:4",
        "G4/5:2 G4/5:2 F4/4:2 F4/4:1 G4/5:1 | E4/3:2 E4/3:2 D4/2:4 | G4/5:2 G4/5:2 F4/4:1 E4/3:1 F4/4:2 | E4/3:2 E4/3:2 D4/2:4",
        "C4/1:2 C4/1:2 G4/4:2 G4/4:2 | A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:1 E4/3:1 C4/1:4",
        "A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:1 E4/3:1 C4/1:4 | C4/1:8",
      ].join(" | "),
      left: [
        "G2+C3+E3/4+2+1:8",
        halfBars(HELD, "FC FC GC CF CG CF CG"),
        "C3+E3/2+1:8",
        halfBars(HELD, "FC FC GC FC FC"),
        "F2+A2/5+3:2 G2+B2/5+3:2 C3+E3/2+1:4 | G2+C3+E3/5+2+1:8",
      ].join(" | "),
      skills: ["eighth-notes", "triads"],
      practice: [
        { text: "Play the right hand alone, slowly, and feel the two quick notes in bar 4.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the left hand alone. It holds each chord for two or four beats.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Put both hands together on the middle part.", hands: "both", speed: 0.7, loop: [5, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 4, kind: "rhythm", text: "The D and the E share one beat. Say \"one-and\" as you play them." },
        { fromBar: 1, toBar: 8, kind: "fingering", text: "The left hand stays in one place, and each chord keeps its own fingers." },
        { fromBar: 13, toBar: 16, kind: "sound", text: "Bars 13 to 15 play the end of the tune once more, and bar 16 holds the last chord. Slow down a little at the end." },
      ],
      tricky: {
        3: "Finger 4 moves from G down to F here. Let the whole hand slide one key down with it.",
        11: "This is bar 3 again. Slide the hand one key down, so finger 4 lands on F.",
        14: "Finger 4 slides from G down to F once more, as the coda walks home.",
      },
    },
    epic: {
      key: C_MAJOR,
      bpm: 104,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        "C4/1:2 C4/1:2 G4/4:2 G4/4:2 | A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:2 C4/1:2 E4/2:1 F4/3:1",
        "G4/4:2 G4/4:2 F4/3:2 F4/3:2 | E4/2:2 E4/2:2 D4/1:2 E4/2:1 F4/3:1 | G4/4:2 G4/4:2 F4/3:2 F4/3:2 | E4/2:2 E4/2:2 D4/1:4",
        "C4/1:2 C4/1:2 E4+G4/2+4:2 E4+G4/2+4:2 | F4+A4/3+5:2 F4+A4/3+5:2 E4+G4/2+4:4 | D4+F4/2+4:2 D4+F4/2+4:2 C4+E4/1+3:2 C4+E4/1+3:2 | B3+D4/1+2:2 B3+D4/1+2:2 C4/1:4",
        "A4/5:2 A4/5:2 G4/4:4 | F4/4:2 F4/4:2 E4/3:2 E4/3:2 | D4/2:2 D4/2:1 E4/3:1 C4/1:4 | E4+G4+C5/1+2+5:8",
      ].join(" | "),
      left: [
        halfBars(ALBERTI, "CC FC FC GC CF CG CF CG CC FC FC GC FC FC"),
        `${PRINT_23_BASS} ${ALBERTI.C}`,
        "C3+E3+G3/5+3+1:8",
      ].join(" | "),
      pedal: "P:4 P:4 | ".repeat(14) + "P:2 P:2 P:4 | P:8",
      skills: ["alberti-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the left hand of bars 14 to 16 alone, slowly, until the step down to F feels sure.", hands: "left", speed: 0.5, loop: [14, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the Alberti bass softly, so the tune stays on top." },
        { fromBar: 4, toBar: 6, kind: "rhythm", text: "The two quick notes at the end of bars 4 and 6 lead up to G. Play them lightly." },
        { fromBar: 15, toBar: 15, kind: "rhythm", text: "In bar 15 the second D and the E share one beat, as the theme ends." },
        { fromBar: 1, toBar: 15, kind: "sound", text: "Change the pedal twice a bar, on beats one and three. In bar 15, change it on beat two as well." },
      ],
      tricky: {
        3: "Finger 4 slides from G down to F, while the Alberti bass keeps rolling.",
        9: "Your thumb slides from D down to C. Then fingers 2 and 4 take the first third.",
        15: "The left hand drops to F, then rocks between G and D before it climbs back to C.",
      },
    },
    legendary: {
      key: C_MAJOR,
      bpm: 92,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "C5/1:4 C5/1:4 C5+E5+G5/1+3+5:4 C5+E5+G5/1+3+5:4 | C5+F5+A5/1+3+5:4 C5+F5+A5/1+3+5:4 C5+E5+G5/1+3+5:8",
        "A4+C5+F5/1+2+5:4 A4+C5+F5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:4 | G4+B4+D5/1+2+5:4 G4+B4+D5/1+2+5:4 E4+G4+C5/1+2+4:6 r:2",
        "G5/5:1 F5/4:1 E5/3:1 F5/4:1 G5/5:1 F5/4:1 E5/3:1 F5/4:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1",
        "E5/3:1 D5/2:1 C5/1:1 D5/2:1 E5/3:1 D5/2:1 C5/1:1 D5/2:1 D5/2:8",
        "G5/5:1 F5/4:1 E5/3:1 F5/4:1 G5/5:1 F5/4:1 E5/3:1 F5/4:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1 F5/4:1 E5/3:1 D5/2:1 E5/3:1",
        "E5/3:1 D5/2:1 C5/1:1 D5/2:1 E5/3:1 D5/2:1 C5/1:1 D5/2:1 D5/2:6 r:2",
        "C4+C5/1+5:2 r:2 C4+C5/1+5:2 r:2 G4+G5/1+5:2 r:2 G4+G5/1+5:2 r:2 | A4+A5/1+5:2 r:2 A4+A5/1+5:2 r:2 G4+G5/1+5:6 r:2",
        "F4+F5/1+5:2 r:2 F4+F5/1+5:2 r:2 E4+E5/1+5:2 r:2 E4+E5/1+5:2 r:2 | D4+D5/1+5:2 r:2 D4+D5/1+5:2 r:2 C4+C5/1+5:6 r:2",
        "C5+F5+A5/1+3+5:4 C5+F5+A5/1+3+5:4 C5+E5+G5/1+3+5:8 | A4+C5+F5/1+2+5:4 A4+C5+F5/1+2+5:4 G4+C5+E5/1+2+5:4 G4+C5+E5/1+2+5:4",
        "F4+A4+D5/1+2+5:4 G4+B4+D5/1+2+4:3 E5/5:1 E4+G4+C5/1+2+5:8",
        "C4+E4+G4+C5/1+2+3+5:16",
      ].join(" | "),
      left: [
        halfBars(STRIDE, "CC FC FC GC"),
        halfBars(OCTAVES, "CF CG CF CG"),
        halfBars(BROKEN, "CC FC FC GC"),
        halfBars(STRIDE, "FC FC"),
        `F1+F2/5+1:2 r:2 B2+D3+G3/3+2+1:2 r:2 ${STRIDE.C}`,
        "C2+G2+C3/5+2+1:16",
      ].join(" | "),
      pedal: "P:8 P:8 | ".repeat(14) + "P:4 P:4 P:8 | P:16",
      skills: ["stride", "sixteenth-notes", "melody-in-chords"],
      practice: [
        { text: "Play the stride bass alone: jump down for the octave, then back up for the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Play the sixteenths of the middle part slowly, with the right hand alone.", hands: "right", speed: 0.5, loop: [5, 8], wait: true },
        { text: "Play the right hand's octaves alone, and lift the hand between them.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the whole song at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "Watch the left hand's jumps, and let the right hand find its chords by feel." },
        { fromBar: 5, toBar: 8, kind: "rhythm", text: "Each tune note starts a group of four sixteenths. Lean on it a little, so the tune still sounds." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Play the octaves short and bright, like bells." },
      ],
      tricky: {
        3: "The thumb steps from A down to G while finger 2 keeps C. Move the hand as one.",
        14: "This is bar 3 again. The thumb steps down from A to G, and finger 2 stays on C.",
        15: "Finger 4 takes the D of the second chord, so finger 5 is free for the quick E. The left hand jumps from F to a G chord.",
      },
    },
  },
  de: {
    about:
      "Diese Melodie begann als französisches Lied, \"Ah! vous dirai-je, maman\", das 1761 zuerst gedruckt wurde. " +
      "Mozart schrieb dazu zwölf Variationen für Klavier. " +
      "1806 erschien Jane Taylors Gedicht vom kleinen Stern, auf Deutsch \"Funkel, funkel, kleiner Stern\", das man später zu dieser Melodie sang.",
    funFact: "Auch das englische Alphabetlied und Baa, Baa, Black Sheep singt man zu genau dieser Melodie.",
    versions: {
      common: {
        practice: [
          "Spiel die rechte Hand allein und langsam, und lass das Lied auf jeden Ton warten.",
          "Jetzt die linke Hand allein. Sie bewegt sich nur zwischen C, F und G.",
          "Nimm beide Hände zusammen für die ersten vier Takte.",
          "Spiel das ganze Lied mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Leg deinen Daumen auf das mittlere C. Finger 4 spielt G, und der kleine Finger spielt A.",
          "Das letzte C ist doppelt so lang wie die Töne davor, also zähl zwei Schläge.",
          "Der Mittelteil sagt zweimal dasselbe. Spiel ihn beim zweiten Mal leiser, wie ein Echo.",
        ],
        tricky: {
          3: "Hier rückt deine Hand eine Taste tiefer, also verlässt Finger 4 das G und landet auf dem F.",
          5: "Jetzt spielt dein kleiner Finger das G. Geh von ihm abwärts, ein Finger pro Taste: 5, 4, 3, 2.",
          11: "Das ist wieder Takt 3. Schieb die Hand eine Taste tiefer, damit Finger 4 auf dem F landet.",
        },
      },
      rare: {
        practice: [
          "Spiel die rechte Hand allein und langsam, und spür die zwei schnellen Töne in Takt 4.",
          "Spiel die linke Hand allein. Sie hält jeden Akkord zwei oder vier Schläge lang.",
          "Nimm beide Hände zusammen für den Mittelteil.",
          "Spiel das ganze Lied mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Das D und das E teilen sich einen Schlag. Sag \"eins-und\", während du sie spielst.",
          "Die linke Hand bleibt an einem Ort, und jeder Akkord behält seine eigenen Finger.",
          "Die Takte 13 bis 15 spielen noch einmal das Ende der Melodie, und Takt 16 hält den letzten Akkord. Nimm am Ende das Tempo etwas zurück.",
        ],
        tricky: {
          3: "Finger 4 geht hier vom G hinab zum F. Lass die ganze Hand mit ihm eine Taste tiefer gleiten.",
          11: "Das ist wieder Takt 3. Schieb die Hand eine Taste tiefer, damit Finger 4 auf dem F landet.",
          14: "Finger 4 gleitet noch einmal vom G hinab zum F, während die Coda nach Hause geht.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Zweiklangs wie einen.",
          "Spiel die linke Hand der Takte 14 bis 16 allein und langsam, bis der Schritt hinab zum F sicher sitzt.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Spiel den Alberti-Bass leise, damit die Melodie obenauf bleibt.",
          "Die zwei schnellen Töne am Ende der Takte 4 und 6 führen hinauf zum G. Spiel sie leicht.",
          "In Takt 15 teilen sich das zweite D und das E einen Schlag, während das Thema endet.",
          "Wechsle das Pedal zweimal pro Takt, auf Schlag eins und drei. In Takt 15 wechsle es auch auf Schlag zwei.",
        ],
        tricky: {
          3: "Finger 4 gleitet vom G hinab zum F, während der Alberti-Bass weiterrollt.",
          9: "Dein Daumen gleitet vom D hinab zum C. Dann nehmen Finger 2 und 4 die erste Terz.",
          15: "Die linke Hand geht hinab zum F und wiegt dann zwischen G und D, bevor sie zurück zum C steigt.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Stride-Bass allein: Spring hinunter zur Oktave, dann zurück hinauf zum Akkord.",
          "Spiel die Sechzehntel des Mittelteils langsam, nur mit der rechten Hand.",
          "Spiel die Oktaven der rechten Hand allein, und heb die Hand zwischen ihnen an.",
          "Spiel das ganze Lied mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Schau auf die Sprünge der linken Hand, und lass die rechte Hand ihre Akkorde nach Gefühl finden.",
          "Jeder Melodieton beginnt eine Gruppe aus vier Sechzehnteln. Betone ihn ein wenig, damit die Melodie hörbar bleibt.",
          "Spiel die Oktaven kurz und hell, wie Glocken.",
        ],
        tricky: {
          3: "Der Daumen geht vom A hinab zum G, während Finger 2 das C hält. Beweg die Hand als Ganzes.",
          14: "Das ist wieder Takt 3. Der Daumen geht vom A hinab zum G, und Finger 2 bleibt auf dem C.",
          15: "Finger 4 nimmt das D des zweiten Akkords, damit Finger 5 frei ist für das schnelle E. Die linke Hand springt vom F zu einem G-Dur-Akkord.",
        },
      },
    },
  },
};

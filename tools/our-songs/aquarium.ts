/**
 * *Aquarium*: the opening of Saint-Saëns's *Carnival of the Animals*, No. 7, in four versions of ours.
 *
 * The tune is the theme's eight bars, in 4/4 and in quarters, one bar per print bar. The flute plays it,
 * and the tune writes the flute's notes. It ends on a whole-note B. Its key is A minor, and the hook is
 * all eight bars. The theme turns around E with D sharp, then slides down by step.
 *
 * The print is the Durand full score of 1922. The theme's bars 1 to 8 are followed by an interlude in bars
 * 9 to 12. There the flute rests and both pianos glitter in chromatic sixteenths, high above a held E. The
 * versions leave out that glitter, whose ledger lines the scan blurs. They take the strings instead: the
 * cellos' low E, the violas' E off the beat and the second violins' E, held across the beat. In bar 12
 * the first violins rise from E to the E an octave up. Bars 13 to 20 play the theme again, note for note.
 *
 * Common and Rare play the tune, the interlude, and the print's bars 13 to 16, which end on the long A.
 * They play the second violins' E an octave up, under the right hand's fifth finger, and strike each tied
 * E again. Epic and Legendary play the tune, the interlude and the theme again, the print's bars 1 to 20.
 * They close in bar 21 on A minor, where the print's bass moves to A.
 *
 * Under the theme, the print's second piano rises from the bass through one chord on each beat. Epic and
 * Legendary take that figure, in four notes of the print's chord. Epic rises once in each half bar in
 * eighths, and Legendary once on each beat in sixteenths. Bars 1 to 4 stay over the bass A. Under each D
 * sharp, the print plays F and A with B and D sharp, and no E, and the versions play F and A. Legendary
 * plays F, B and D under the D of bars 1 and 3. Under the F of bar 5 the bass moves to B flat, with F and
 * A flat. Bar 6 is G major, with G, E flat and A under the C sharp, and E major under its last E. Bar 7
 * puts B and D sharp over A under the B, and D with F sharp, A and B under the last D. Epic takes the
 * chord of each half bar's second beat there, so no chord rubs against the tune on a beat. Bars 17 to 19
 * repeat these chords. The interlude's left hand plays the cellos' E with the violas' E, then the violas'
 * pulse.
 *
 * Common plays the tune over held open fifths and single bass notes. Rare plays a root and fifth in turns,
 * one on each beat, with a held triad at bar 4 and at the end. Both play the interlude over a low E.
 * Epic plays the tune again with a third or a fourth under it, and Legendary plays it in chords.
 * Every version closes on A minor, and no version sounds a semitone against the tune on a beat.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in quarters, as the print writes it below its 8va sign: one bar per print bar. */
const tune = "E5:1 D#5:1 E5:1 D5:1 | E5:1 A4:3 | E5:1 D#5:1 E5:1 D5:1 | E5:1 A4:3 | E5:1 D#5:1 E5:1 F5:1 | D5:1 C#5:1 D5:1 E5:1 | C5:1 B4:1 C5:1 D5:1 | B4:4";

/** The tune's first two bars in quarters, fingered with the thumb on A. */
const TUNE_TURN = "E5/5:1 D#5/4:1 E5/5:1 D5/4:1 | E5/5:1 A4/1:3";

/** The tune in quarters, fingered: the thumb on A for bars 1 to 4, then on B for bars 5 to 8. */
const TUNE_RIGHT = [
  TUNE_TURN,
  TUNE_TURN,
  "E5/4:1 D#5/3:1 E5/4:1 F5/5:1 | D5/3:1 C#5/2:1 D5/3:1 E5/4:1 | C5/2:1 B4/1:1 C5/2:1 D5/3:1 | B4/1:4",
].join(" | ");

/**
 * The print's bars 9 to 12 in quarters, the second violins' E, an octave up: a beat's rest, then a half
 * and a quarter that the print ties into the next bar. Each tied note is struck again.
 */
const INTERLUDE = "r:1 E5/5:2 E5/5:1 | E5/5:1 E5/5:2 E5/5:1 | E5/5:1 E5/5:2 E5/5:1 | E5/5:1 E5/5:2 r:1";

/**
 * The print's bars 9 to 12 in eighths, at the print's pitch: the second violins' E for three bars, then
 * the first violins' rise from E to the E an octave up, which leads the theme back in.
 */
const INTERLUDE_EIGHTHS = "r:2 E4/1:4 E4/1:2 | E4/1:2 E4/1:4 E4/1:2 | E4/1:2 E4/1:4 E4/1:2 | r:2 E5/1:2 E6/5:3 r:1";

/** The tune's chords in Common, one per bar, where `l` is a lone A under each D sharp and C sharp. */
const COMMON_TUNE_CHORDS = "lalallae";

/** The tune's chords in Rare, one per bar, where `l` keeps E out from under D sharp and `t` holds a triad. */
const RARE_TUNE_CHORDS = "laltldae";

/** The E the print holds in its bass through bars 9 to 12, one letter per bar. */
const INTERLUDE_CHORDS = "eeee";

/**
 * The tune's chords in Epic, one per half bar, from the print's second piano: mostly the chord of the
 * half bar's second beat, as `RISE` names them.
 */
const EPIC_TUNE_CHORDS = "ffadffadfbcvhkee";

/** The tune's chords in Legendary, one per beat, from the print's second piano. */
const LEGENDARY_TUNE_CHORDS = "afanadddafanadddafabgcgvahakeeee";

/** `text` with every length times `times`, so a line in quarters reads in eighths or sixteenths. */
function stretch(text: string, times: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${times * Number(units)}`);
}

/** Bars of `patterns` from `chords`, such as `"aade"`: one letter per part of a bar, `perBar` parts to a bar. */
function bars(patterns: Record<string, string>, chords: string, perBar: number): string {
  const parts = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < parts.length; at += perBar) lines.push(parts.slice(at, at + perBar).join(" "));
  return lines.join(" | ");
}

/** Common's bar in quarters: an open fifth, or one bass note, held. */
const HOLD: Record<string, string> = {
  a: "A2+E3/5+1:4",
  l: "A2/5:4",
  d: "D3/2:4",
  e: "E3/1:4",
};

/**
 * Rare's bar in quarters: a root and a fifth in turns, one on each beat, with the hand over A to E.
 * `l` plays A and C, `t` holds an A minor triad.
 */
const TURNS: Record<string, string> = {
  a: "A2/5:1 E3/1:1 A2/5:1 E3/1:1",
  l: "A2/5:1 C3/3:1 A2/5:1 C3/3:1",
  d: "D3/2:1 A2/5:1 D3/2:1 A2/5:1",
  e: "E3/1:1 B2/4:1 E3/1:1 B2/4:1",
  t: "A2+C3+E3/5+3+1:4",
};

/**
 * The print's figure: a chord rising from the bass, four notes of the print's chord. `a` is A minor, `f`
 * the print's F and A over A, `n` its F, B and D over A, and `d` D minor over A. `b` is B flat with F and
 * A flat. `g` is G major, `c` G with E flat and A, and `v` E major over E. `h` is B and D sharp over A,
 * and `k` D with F sharp, A and B. `z` and `y` end the E chord early in Epic's eighths and Legendary's
 * sixteenths, so the hand can travel down to bar 9's low E.
 */
const RISE: Record<string, string> = {
  a: "A2/5:1 C3/3:1 E3/2:1 A3/1:1",
  f: "A2/5:1 C3/4:1 F3/2:1 A3/1:1",
  n: "A2/5:1 D3/3:1 F3/2:1 B3/1:1",
  d: "A2/5:1 D3/3:1 F3/2:1 A3/1:1",
  b: "Bb2/5:1 F3/3:1 Ab3/2:1 Bb3/1:1",
  g: "G2/5:1 B2/3:1 D3/2:1 G3/1:1",
  c: "G2/5:1 A2/4:1 Eb3/2:1 G3/1:1",
  v: "E2/5:1 B2/3:1 E3/2:1 G#3/1:1",
  h: "A2/5:1 B2/4:1 D#3/2:1 A3/1:1",
  k: "D3/5:1 F#3/3:1 A3/2:1 B3/1:1",
  e: "G#2/5:1 B2/3:1 E3/2:1 G#3/1:1",
  z: "G#2/5:1 B2/3:1 E3/2:1 r:1",
  y: "G#2/5:1 B2/3:1 r:2",
};

/**
 * Epic's bar of the print's bars 9 to 12 in eighths: the cellos' low E on the beat, then the violas' E
 * off the beat, the last one tied into the next bar and struck again.
 */
const PULSE: Record<string, string> = { e: "E2+E3/5+1:1 E3/1:2 E3/1:2 E3/1:2 E3/1:1" };

/** Legendary's bar of the same pulse in sixteenths. */
const PULSE_LOW: Record<string, string> = { e: "E2+E3/5+1:2 E3/1:4 E3/1:4 E3/1:4 E3/1:2" };

/** The tune's turn in eighths, with a third under its first E and the long A alone. */
const EPIC_TURN = "C5+E5/3+5:2 D#5/4:2 E5/5:2 D5/4:2 | C5+E5/3+5:2 A4/1:6";

/** Epic's tune again in eighths, with a third or a fourth under its notes, and a close on A minor. */
const EPIC_TUNE_AGAIN = [
  EPIC_TURN,
  EPIC_TURN,
  "C5+E5/2+4:2 D#5/3:2 E5/4:2 F5/5:2 | B4+D5/1+3:2 C#5/2:2 D5/3:2 E5/4:2",
  "A4+C5/1+3:2 B4/2:2 C5/3:2 D5/4:2 | G#4+B4/1+3:8 | A4+C5+E5/1+3+5:8",
].join(" | ");

/** The tune's turn in eighths, with its first E in an A minor chord and its long A in a low one, each with a rest to jump. */
const LEGENDARY_TURN = "A4+C5+E5/1+3+5:2 D#5/4:2 E5/5:2 D5/4:2 | A4+C5+E5/1+3+5:1 r:1 C4+E4+A4/1+2+5:5 r:1";

/** Legendary's tune again in eighths, with its notes on the beat in chords, and a close on A minor. */
const LEGENDARY_TUNE_AGAIN = [
  LEGENDARY_TURN,
  LEGENDARY_TURN,
  "A4+C5+E5/1+2+4:2 D#5/3:2 E5/4:2 F5/5:2 | G4+B4+D5/1+2+4:2 C#5/3:2 D5/4:2 E5/5:2",
  "E4+A4+C5/1+2+4:2 B4/3:2 C5/4:2 D5/5:2 | E4+G#4+B4/1+2+4:7 r:1 | A4+C5+E5+A5/1+2+3+5:8",
].join(" | ");

export const aquarium: OurSong = {
  slug: "aquarium",
  title: "Aquarium",
  aka: ["The Carnival of the Animals", "Le Carnaval des animaux", "Der Karneval der Tiere"],
  source: {
    composer: "Camille Saint-Saëns",
    died: 1921,
    published: 1922,
    edition:
      "Le Carnaval des animaux, Aquarium, the theme's bars 1 to 8, as a scanned book of orchestral themes on Wikimedia Commons prints it on its page 672; " +
      "bars 1 to 21 from the full score, Paris: Durand, 1922, plate D. & F. 10,154, engraved by Charles Douin, " +
      "in the Internet Archive scan ybimslp01550 of Durand's reprint of the same plates, pages 17 to 21",
  },
  about:
    "Aquarium is the seventh movement of The Carnival of the Animals, a musical joke Saint-Saëns wrote in 1886. " +
    "The suite was published in 1922, the year after his death. " +
    "Terrence Malick's 1978 film Days of Heaven plays it under its opening credits.",
  funFact: "Saint-Saëns banned public performances of the suite while he lived, fearing its jokes would harm his name as a serious composer.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: A_MINOR, hookBars: [1, 8] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 76,
      numerator: 4,
      denominator: 4,
      right: [TUNE_RIGHT, INTERLUDE, TUNE_TURN, TUNE_TURN].join(" | "),
      left: bars(HOLD, `${COMMON_TUNE_CHORDS}${INTERLUDE_CHORDS}${COMMON_TUNE_CHORDS.slice(0, 4)}`, 1),
      skills: ["five-finger-position", "held-bass"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The thumb now starts on B.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play bars 9 to 12 with the right hand alone. Count the rest, then hold each long E for two beats.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "fingering", text: "Fingers 5 and 4 rock between E and D sharp, like water lapping at glass." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play softly and smoothly, as if fish glide through still water." },
        { fromBar: 5, toBar: 5, kind: "fingering", text: "The hand moves up one key here. Finger 4 now plays E, and the thumb waits over B." },
        { fromBar: 9, toBar: 12, kind: "rhythm", text: "In bars 9 to 12 the tune rests, and E pulses over a low E. Bars 13 to 16 bring the tune back." },
      ],
      tricky: {
        1: "Rock between E and D sharp with fingers 5 and 4. Then finger 4 slides to the white D.",
        3: "Bar 3 is bar 1 again. Keep finger 4 close to the black key, so D sharp comes easily.",
        9: "Bar 9 starts with a rest. Use it to move the hand back down, so the thumb is over A and finger 5 plays E.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 80,
      numerator: 4,
      denominator: 4,
      right: [TUNE_RIGHT, INTERLUDE, TUNE_TURN, TUNE_TURN].join(" | "),
      left: bars(TURNS, `${RARE_TUNE_CHORDS}${INTERLUDE_CHORDS}${RARE_TUNE_CHORDS.slice(0, 4)}`, 1),
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the left hand alone. It steps between a low note and a higher one, on every beat.", hands: "left", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone on the first eight bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on bars 9 to 12, slowly. The right hand holds E across the beat, while the left steps on every beat.", hands: "both", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Both hands play on every beat. Keep the beats as even as slow waves." },
        { fromBar: 1, toBar: 16, kind: "sound", text: "Keep the left hand soft, so the tune floats above it." },
        { fromBar: 16, toBar: 16, kind: "fingering", text: "End on the long A, while the left hand holds A, C and E." },
      ],
      tricky: {
        1: "Rock between E and D sharp with fingers 5 and 4, while the left hand steps between A and C.",
        3: "As in bar 1, fingers 5 and 4 rock between E and D sharp. Then finger 4 takes the white D.",
        9: "Bar 9 starts with a rest. Use it to move the right hand back down, so the thumb is over A again.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 84,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [stretch(TUNE_RIGHT, 2), INTERLUDE_EIGHTHS, EPIC_TUNE_AGAIN].join(" | "),
      left: [
        bars(RISE, `${EPIC_TUNE_CHORDS.slice(0, -1)}z`, 2),
        bars(PULSE, "eee", 1),
        "E2+E3/5+1:1 E3/1:2 E3/1:2 E3/1:2 r:1",
        bars(RISE, EPIC_TUNE_CHORDS, 2),
        "A2+C3+E3/5+3+1:8",
      ].join(" | "),
      pedal: Array(21).fill("P:8").join(" | "),
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone until each half bar rises by itself, from the low A up through the chord.", hands: "left", speed: 0.5, loop: [1, 4], wait: false },
        { text: "Join the hands on bars 9 to 12, slowly. The left hand's E falls between the beats.", hands: "both", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the right hand's pairs alone from bar 13, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Change the pedal on each new bar, so the water stays clear." },
        { fromBar: 1, toBar: 8, kind: "fingering", text: "The left hand's low finger starts on A. In bars 5 to 8 it walks with the print's bass to B flat, G, E, D and G sharp." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "The tune rests in bars 9 to 12. Keep each E soft, like drops in still water." },
        { fromBar: 13, toBar: 20, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        6: "The left hand leaves the low A. It rises from G through A, E flat and G, then from the low E through B, E and G sharp.",
        13: "After the high E, drop the right hand in the short rest. It lands on C and E with fingers 3 and 5.",
        18: "Press B and D with fingers 1 and 3, while the left hand rises from G. Then fingers 2, 3 and 4 play C sharp, D and E.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 88,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [stretch(TUNE_RIGHT, 4), stretch(INTERLUDE_EIGHTHS, 2), stretch(LEGENDARY_TUNE_AGAIN, 2)].join(" | "),
      left: [
        bars(RISE, `${LEGENDARY_TUNE_CHORDS.slice(0, -1)}y`, 4),
        bars(PULSE_LOW, "eee", 1),
        "E2+E3/5+1:2 E3/1:4 E3/1:4 E3/1:4 r:2",
        bars(RISE, LEGENDARY_TUNE_CHORDS, 4),
        "A2+E3+A3/5+2+1:16",
      ].join(" | "),
      pedal: Array(21).fill("P:8 P:8").join(" | "),
      skills: ["arpeggios", "sixteenth-notes", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone. Each beat rises from the low A up through the chord, then starts again.", hands: "left", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Join the hands on bars 9 to 12, slowly. Count the off-beats, where the left hand's E falls.", hands: "both", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the right hand's chords alone from bar 13, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [13, 16], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "Each beat starts again on the low A. Let finger 5 fall back to it as the thumb ends the rise." },
        { fromBar: 1, toBar: 8, kind: "sound", text: "Let the rising notes ripple softly, like light moving through water." },
        { fromBar: 13, toBar: 20, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        13: "Press A, C and E as one. Then fingers 4 and 5 rock between D sharp and E, while the left hand rises on each beat.",
        15: "Bar 15 is bar 13 again. Keep the chord shape after the first chord, so fingers 4 and 5 find D sharp and E at once.",
        17: "After the chord of A, C and E, fingers 3, 4 and 5 play D sharp, E and F. The hand stays where it is.",
      },
    },
  },
  de: {
    about:
      "Aquarium ist der siebte Satz aus Der Karneval der Tiere, einem musikalischen Scherz, den Saint-Saëns 1886 schrieb. " +
      "Die Suite erschien 1922, im Jahr nach seinem Tod. " +
      "Terrence Malicks Film Days of Heaven von 1978 spielt den Satz zum Vorspann.",
    funFact:
      "Saint-Saëns verbot öffentliche Aufführungen der Suite zu Lebzeiten, weil er fürchtete, ihre Scherze würden seinem Ruf als ernster Komponist schaden.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Der Daumen beginnt jetzt auf dem H.",
          "Spiel die Takte 9 bis 12 nur mit der rechten Hand. Zähl die Pause, dann halt jedes lange E zwei Schläge.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Finger 5 und 4 schaukeln zwischen E und Dis, wie Wasser, das an Glas plätschert.",
          "Spiel leise und weich, als ob Fische durch stilles Wasser gleiten.",
          "Hier rückt die Hand eine Taste höher. Finger 4 spielt jetzt das E, und der Daumen wartet über dem H.",
          "In den Takten 9 bis 12 ruht die Melodie, und ein E pulsiert über einem tiefen E. Die Takte 13 bis 16 bringen die Melodie zurück.",
        ],
        tricky: {
          1: "Schaukle mit Finger 5 und 4 zwischen E und Dis. Dann rutscht Finger 4 auf das weiße D.",
          3: "Takt 3 ist wieder Takt 1. Halt Finger 4 nah an der schwarzen Taste, dann kommt das Dis leicht.",
          9: "Takt 9 beginnt mit einer Pause. Führ die Hand darin wieder hinab, damit der Daumen über dem A liegt und Finger 5 das E spielt.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Sie wechselt auf jedem Schlag zwischen einem tiefen und einem höheren Ton.",
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 9 bis 12 langsam mit beiden Händen. Die rechte Hand hält das E über den Schlag, die linke spielt auf jedem Schlag.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Beide Hände spielen auf jedem Schlag. Halt die Schläge so gleichmäßig wie langsame Wellen.",
          "Spiel die linke Hand leise, damit die Melodie darüber schwebt.",
          "Am Ende klingt das lange A, während die linke Hand A, C und E hält.",
        ],
        tricky: {
          1: "Schaukle mit Finger 5 und 4 zwischen E und Dis, während die linke Hand zwischen A und C wechselt.",
          3: "Wie in Takt 1 schaukeln Finger 5 und 4 zwischen E und Dis. Dann nimmt Finger 4 das weiße D.",
          9: "Takt 9 beginnt mit einer Pause. Führ die rechte Hand darin wieder hinab, damit der Daumen über dem A liegt.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein, bis jeder halbe Takt von selbst steigt, vom tiefen A durch den Akkord hinauf.",
          "Spiel die Takte 9 bis 12 langsam mit beiden Händen. Das E der linken Hand fällt zwischen die Schläge.",
          "Spiel die Paare der rechten Hand ab Takt 13 allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal in jedem neuen Takt, damit das Wasser klar bleibt.",
          "Der tiefe Finger der linken Hand beginnt auf dem A. In den Takten 5 bis 8 schreitet er mit dem Bass des Drucks zu B, G, E, D und Gis.",
          "In den Takten 9 bis 12 ruht die Melodie. Spiel jedes E leise, wie Tropfen in stillem Wasser.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          6: "Die linke Hand verlässt das tiefe A. Sie steigt vom G über A, Es und G, dann vom tiefen E über H, E und Gis.",
          13: "Lass die rechte Hand nach dem hohen E in der kurzen Pause sinken. Sie landet mit Finger 3 und 5 auf C und E.",
          18: "Drück H und D mit Finger 1 und 3, während die linke Hand vom G aufsteigt. Dann spielen Finger 2, 3 und 4 Cis, D und E.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Jeder Schlag steigt vom tiefen A durch den Akkord hinauf und beginnt dann neu.",
          "Spiel die Takte 9 bis 12 langsam mit beiden Händen. Zähl die Nachschläge, auf die das E der linken Hand fällt.",
          "Spiel die Akkorde der rechten Hand ab Takt 13 allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Jeder Schlag beginnt wieder auf dem tiefen A. Lass Finger 5 dorthin zurückfallen, sobald der Daumen den Aufstieg beendet.",
          "Lass die steigenden Töne leise perlen, wie Licht, das durch Wasser fällt.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          13: "Drück A, C und E wie einen Ton. Dann schaukeln Finger 4 und 5 zwischen Dis und E, während die linke Hand auf jedem Schlag steigt.",
          15: "Takt 15 ist wieder Takt 13. Halt nach dem ersten Akkord die Akkordform, dann finden Finger 4 und 5 sofort Dis und E.",
          17: "Nach dem Akkord aus A, C und E spielen Finger 3, 4 und 5 Dis, E und F. Die Hand bleibt, wo sie ist.",
        },
      },
    },
  },
};

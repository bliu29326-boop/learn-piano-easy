/**
 * *Nocturne in C-sharp minor*: the opening of Chopin's posthumous nocturne, in four versions of ours.
 *
 * The print is in 4/4, Lento con gran espressione, in C-sharp minor. Its bars 1 to 4 are a soft
 * introduction of chords, and its theme starts in bar 5. The tune is the theme in bars 5 to 8, without
 * the trill, the grace notes and the quick figure after the long C sharp. The hook is the tune's bars 1
 * and 2. The print past bar 8 is not available to read, so every version plays only the print's bars 1 to 8.
 *
 * Common and Rare move the song down a major third to A minor, and Epic moves it down a whole step to B
 * minor. Legendary keeps C-sharp minor. Every version plays the introduction, then the theme, and closes
 * on the home minor chord.
 *
 * Common plays the introduction's top notes over a held bass, then the tune over held open fifths. Rare
 * plays the introduction in two-note chords, then the tune over a low note and a two-note chord. It plays
 * the theme again over held triads with the print's quick figure in eighths, then the introduction again.
 *
 * Epic and Legendary play the print's chords in the introduction, and the print's quick figure after the
 * long C sharp, with its triplet. Their left hand plays the print's broken chords in eighths under the
 * theme. They play the theme again, Epic in thirds and sixths and Legendary in chords of three and four
 * notes. Then the introduction returns as a coda. Legendary adds a low octave to the introduction's bass.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which Legendary keeps. */
const C_SHARP_MINOR: Key = { tonic: 1, mode: "minor" };

/** The key Epic moves to, since it allows 3 sharps and C-sharp minor has 4. */
const B_MINOR: Key = { tonic: 11, mode: "minor" };

/** The key Common and Rare move to. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 4/4, in the print's own lengths. */
const tune = "G#5:2 F#5:2 | G#5:2 C#5:2 | C#6:2 r:2 | A5:2 r:2";

/**
 * Common's introduction in A minor quarters: the top notes of the print's bars 1 and 2. E comes a beat
 * late, on the third beat, since a Beginner's bass holds F for half a bar and E would clash with it.
 */
const COMMON_INTRO_RIGHT = "A4/5:1 G4/4:1 F4/3:1 E4/2:1 | D#4/1:2 E4/2:1 r:1";

/** Common's bass under the introduction: the print's bass notes, held. */
const COMMON_INTRO_LEFT = "A2/2:4 | F2/4:2 E2/5:2";

/** Common's right hand: the introduction twice, the tune, and the home note. It rests before each leap. */
const COMMON_RIGHT = [
  COMMON_INTRO_RIGHT,
  COMMON_INTRO_RIGHT,
  "E5/5:2 D5/4:2 | E5/5:2 A4/1:1 r:1 | A5/5:2 r:2 | F5/3:2 r:2",
  "A4/1:4",
].join(" | ");

/** Common's left hand: the introduction's bass twice, then an open fifth or one bass note, held. */
const COMMON_LEFT = [
  COMMON_INTRO_LEFT,
  COMMON_INTRO_LEFT,
  "A2/5:2 E3/1:2 | A2+E3/5+1:4 | D3/2:4 | D3/2:2 E3/1:2",
  "A2+E3/5+1:4",
].join(" | ");

/** Rare's introduction in A minor eighths: the print's bars 1 and 2 in two-note chords, then single notes. */
const RARE_INTRO_RIGHT = "E4+A4/2+5:2 r:1 E4+G4/2+4:1 D4+F4/1+3:2 r:1 E4/2:1 | D#4/1:2 E4/2:2 r:4";

/** Rare's left hand under the introduction: the print's chords on the beat, then its falling bass. */
const RARE_INTRO_LEFT = "A2/4:2 C3+E3/2+1:2 A2/4:2 D3+F3/2+1:2 | A2+F3/4+1:2 G#2+B2/5+2:2 r:4";

/** Rare's right hand: the introduction, the tune, the theme again with the print's quick figure, the introduction again. */
const RARE_RIGHT = [
  RARE_INTRO_RIGHT,
  RARE_INTRO_RIGHT,
  "E5/5:4 D5/4:4 | E5/5:4 A4/1:4 | A5/5:4 r:4 | F5/3:4 r:4",
  "E5/2:4 D5/1:4 | E5/2:4 A4/1:4 | E5+A5/2+5:4 A5/5:1 G5/4:1 A5/5:1 G5/4:1 | D5+F5/1+3:4 r:4",
  RARE_INTRO_RIGHT,
  RARE_INTRO_RIGHT,
  "E4+A4/2+5:8",
].join(" | ");

/** Rare's half bar in A minor eighths under the tune: a low note on the beat, then a two-note chord. */
const PULSE: Record<string, string> = {
  a: "A2/5:2 C3+E3/3+1:2",
  A: "A2/5:2 C#3+E3/3+1:2",
  d: "D3/2:2 A2+D3/5+2:2",
};

/** Rare's left hand: the introduction, the pulse under the tune, held triads under the theme again, and the close. */
const RARE_LEFT = [
  RARE_INTRO_LEFT,
  RARE_INTRO_LEFT,
  bars(PULSE, "adaaAadd"),
  "A2+C3+E3/5+3+1:4 A2+D3/5+2:4 | A2+C3+E3/5+3+1:8 | A2+C#3+E3/5+2+1:4 A2+C3+E3/5+3+1:4 | A2+D3/5+2:8",
  RARE_INTRO_LEFT,
  RARE_INTRO_LEFT,
  "A2+C3+E3/5+3+1:8",
].join(" | ");

/** Rare's pedal, held only through bars of one chord. */
const RARE_PEDAL = ["r:8 | r:8 | r:8 | r:8", "r:8 | P:8 | r:8 | P:8", "r:8 | P:8 | r:8 | P:8", "r:8 | r:8 | r:8 | r:8", "P:8"].join(" | ");

/** The print's bars 1 and 2 in C-sharp minor, in 4/4 split into twelve: its chords on and off the beat. */
const INTRO_RIGHT =
  "E4+G#4+C#5/1+2+5:12 r:6 C#4+G#4+B4/1+3+5:6 C#4+F#4+A4/1+3+5:12 r:6 C#4+E4+G#4/1+2+4:6 | " +
  "C#4+E4+G4/2+3+4:12 B#3+D#4+G#4/1+2+5:12 r:24";

/** The print's bass under its bars 1 and 2, with Legendary's low octave at the start. */
const introLeft = (low: string): string => `${low}:12 r:6 C#3/2:6 F#3/1:12 r:6 C#3/2:6 | A2/4:12 G#2/5:12 r:24`;

/** The theme in C-sharp minor, with the print's quick figure and triplet after the long C sharp. */
const THEME = "G#5/5:24 F#5/4:24 | G#5/5:24 C#5/1:24 | C#6/5:24 C#6/5:9 B5/4:3 C#6/5:4 B5/4:4 A5/3:4 | A5/3:24 r:24";

/** The print's quick figure, after the long C sharp in the tune's third bar. */
const FIGURE = "C#6/5:9 B5/4:3 C#6/5:4 B5/4:4 A5/3:4";

/** Epic's theme again in thirds and sixths under the tune. */
const EPIC_AGAIN =
  "E5+G#5/3+5:24 D#5+F#5/2+4:24 | E5+G#5/3+5:18 r:6 E4+C#5/1+5:18 r:6 | " +
  `E#5+C#6/2+5:24 ${FIGURE} | F#5+A5/2+4:24 r:24`;

/** Legendary's theme again in chords of three and four notes, each wide move after a rest. */
const LEGENDARY_AGAIN =
  "G#4+C#5+G#5/1+2+5:18 r:6 A4+D#5+F#5/1+3+5:18 r:6 | G#4+E5+G#5/1+3+5:18 r:6 E4+G#4+C#5/1+2+5:18 r:6 | " +
  `C#5+E#5+G#5+C#6/1+2+3+5:24 ${FIGURE} | C#5+F#5+A5/1+2+4:24 r:24`;

/**
 * The print's left hand under the theme, a half bar of eighths: the bass, then three notes rising and
 * falling back. c is C-sharp minor, d is its chord with D sharp, and C is C-sharp major. f is F-sharp
 * minor, and F is F-sharp minor with a rest before the next bass.
 */
const BROKEN: Record<string, string> = {
  c: "C#3/5:6 G#3/2:6 E4/1:6 C#4/1:6",
  d: "C#3/5:6 A3/2:6 D#4/1:6 C#4/1:6",
  C: "C#3/5:6 G#3/2:6 E#4/1:6 C#4/1:6",
  f: "F#3/5:6 A3/3:6 F#4/1:6 C#4/1:6",
  F: "F#3/5:6 A3/3:6 F#4/1:6 r:6",
};

/** The print's bars 5 to 8 of the left hand, then the same under the theme again. */
const THEME_LEFT = `${bars(BROKEN, "cdccCcff")} | ${bars(BROKEN, "cdccCcfF")}`;

/** The pedal of Epic and Legendary: changed with each chord, and held through the last bar. */
const PEDAL = [
  "P:24 P:24 | P:12 P:36 | P:24 P:24 | P:12 P:36",
  Array(8).fill("P:24 P:24").join(" | "),
  "P:24 P:24 | P:12 P:36 | P:24 P:24 | P:12 P:36",
  "P:48",
].join(" | ");

/** Bars of `patterns` from `chords`, such as `"cdcc"`: one letter per half bar, two per bar. */
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

/** Each pitch of the C-sharp minor text and its pitch in B minor, a whole step down. */
const DOWN_A_STEP: Record<string, string> = {
  "C#": "B",
  "D#": "C#",
  E: "D",
  "E#": "D#",
  "F#": "E",
  G: "F",
  "G#": "F#",
  A: "G",
  B: "A",
  "B#": "A#",
};

/** `text`, written in C-sharp minor, moved down a whole step to B minor. */
function toBMinor(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => {
    const to = DOWN_A_STEP[name];
    if (to === undefined) throw new Error(`No B minor pitch for ${name}`);
    return `${to}${name.startsWith("C") ? Number(octave) - 1 : Number(octave)}`;
  });
}

/** The right hand of Epic or Legendary: the introduction, the theme, the theme `again`, the introduction, and `close`. */
const twelveRight = (again: string, close: string): string => [INTRO_RIGHT, INTRO_RIGHT, THEME, again, INTRO_RIGHT, INTRO_RIGHT, close].join(" | ");

/** The left hand of Epic or Legendary, with `low` as the introduction's first bass. */
const twelveLeft = (low: string): string =>
  [introLeft(low), introLeft(low), THEME_LEFT, introLeft(low), introLeft(low), "C#2+G#2+C#3/5+2+1:48"].join(" | ");

export const chopinNocturneCSharpMinor: OurSong = {
  slug: "chopin-nocturne-c-sharp-minor",
  title: "Nocturne in C-sharp minor",
  aka: ["Lento con gran espressione", "Nocturne No. 20", "B. 49", "Op. posth.", "Nocturne cis-Moll"],
  source: {
    composer: "Frédéric Chopin",
    died: 1849,
    published: 1875,
    edition:
      "Nocturne in C-sharp minor, B. 49, bars 1 to 8, as a typeset of the opening bars on Wikimedia Commons prints them; the nocturne was first published in 1875",
  },
  about:
    "Chopin wrote this nocturne in 1830, and it was first published in 1875, long after his death. " +
    "He sent it to his sister Ludwika, to practise before his second piano concerto. " +
    "The film The Pianist plays it, and it opens the film's soundtrack album.",
  funFact: "In 1939 the pianist Władysław Szpilman was playing it live on Polish Radio when the German attack on Warsaw cut the broadcast.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 4, key: C_SHARP_MINOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 66,
      numerator: 4,
      denominator: 4,
      right: COMMON_RIGHT,
      left: COMMON_LEFT,
      skills: ["five-finger-position", "held-bass", "position-change"],
      practice: [
        { text: "Play the first two bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play bars 5 to 9 with the right hand alone. The hand starts higher, with finger 5 on the high E.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It plays one low note at a time, then an open fifth.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first four bars, slowly.", hands: "both", speed: 0.7, loop: [1, 4], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "This is a night song. Play softly, and play bars 3 and 4 softer still." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Use the rest after E to move the right hand up to the high E." },
        { fromBar: 6, toBar: 7, kind: "trick", text: "Use the short rest after the low A to move the hand up to the high A." },
      ],
      tricky: {
        2: "Finger 1 plays the black key D sharp, and finger 2 plays E. The left hand steps down from F to E.",
        4: "This is bar 2 again, more softly. Then lift the hand in the rest and move it up.",
        5: "The hand has moved up. Finger 5 plays the high E, and finger 4 plays D. The left hand plays A, then E.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 66,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: RARE_RIGHT,
      left: RARE_LEFT,
      pedal: RARE_PEDAL,
      skills: ["two-note-chords", "eighth-notes", "pedal"],
      practice: [
        { text: "Play the left hand alone. A low note comes on the beat, and a two-note chord answers it.", hands: "left", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play the right hand's two-note chords in bars 1 and 2 alone, and let the song wait for each one.", hands: "right", speed: 0.6, loop: [1, 2], wait: true },
        { text: "Play the quick figure in bar 11 with the right hand alone, slowly.", hands: "right", speed: 0.6, loop: [11, 12], wait: true },
        { text: "Join the hands on bars 5 to 12, slowly.", hands: "both", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Now play the whole song at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the opening chords softly, and bars 3 and 4 softer still, like an echo." },
        { fromBar: 6, toBar: 7, kind: "fingering", text: "The tune leaps a whole octave. The thumb plays the low A, and finger 5 the high one." },
        { fromBar: 11, toBar: 12, kind: "rhythm", text: "After the long A, play A, G, A and G evenly. Then let D and F ring." },
      ],
      tricky: {
        5: "The hand moves up in the rest before. Finger 5 plays the high E, and the left hand plays A, then C and E together.",
        13: "The hand moves back down in the rest. Fingers 2 and 5 play E and A, and the left hand starts on A with finger 4.",
        17: "Fingers 2 and 5 play E and A once more. The left hand moves finger 5 to A for the last chord.",
      },
    },
    epic: {
      key: B_MINOR,
      bpm: 56,
      numerator: 4,
      denominator: 4,
      steps: 12,
      right: toBMinor(twelveRight(EPIC_AGAIN, "E4+G#4+C#5/1+2+5:48")),
      left: toBMinor(twelveLeft("C#2/5")),
      pedal: PEDAL,
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand's broken chords alone until they roll evenly, low to high and back.", hands: "left", speed: 0.5, loop: [5, 8], wait: false },
        { text: "Play the quick figure in bar 7 with the right hand alone, very slowly. Count three even notes in the triplet.", hands: "right", speed: 0.5, loop: [7, 7], wait: true },
        { text: "Play the opening chords with both hands, slowly.", hands: "both", speed: 0.5, loop: [1, 4], wait: true },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Now play the whole song with both hands at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 17, kind: "sound", text: "Change the pedal with each new bass note, so the chords never blur." },
        { fromBar: 7, toBar: 7, kind: "rhythm", text: "The figure after the long B is Chopin's own. Its last three notes are a triplet, three even notes in one beat." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        5: "The left hand starts its broken chords. Finger 5 plays the low B, fingers 2 and 1 climb, and the thumb slides down to B.",
        11: "Hold the sixth with fingers 2 and 5. Then play the quick figure: B, A, then the triplet B, A, G.",
        13: "The opening chords return. Lift the hand in each eighth rest, and land the thumb on D, then on B.",
      },
    },
    legendary: {
      key: C_SHARP_MINOR,
      bpm: 58,
      numerator: 4,
      denominator: 4,
      steps: 12,
      right: twelveRight(LEGENDARY_AGAIN, "C#4+E4+G#4+C#5/1+2+3+5:48"),
      left: twelveLeft("C#1+C#2/5+1"),
      pedal: PEDAL,
      skills: ["broken-chords", "octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand's broken chords alone. The thumb plays the high note, then slides down to C sharp.", hands: "left", speed: 0.5, loop: [5, 8], wait: true },
        { text: "Play the quick figure in bar 7 with the right hand alone, very slowly. The triplet is three even notes.", hands: "right", speed: 0.5, loop: [7, 7], wait: true },
        { text: "Play the right hand's chords in bars 9 to 12 alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "trick", text: "Use the eighth rest after the low octave to jump up to C sharp." },
        { fromBar: 5, toBar: 12, kind: "sound", text: "Let the broken chords ripple softly, like water at night, under the singing tune." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        3: "Play softer than in bar 1. The left hand drops to the low octave on C sharp, then jumps up in the eighth rest.",
        13: "The opening returns. The left hand plays the low octave with fingers 5 and 1, then jumps up to C sharp in the rest.",
        15: "Play this echo very softly. Lift each chord in its eighth rest, and land the thumb on E, then on C sharp.",
      },
    },
  },
  de: {
    about:
      "Chopin schrieb dieses Nocturne 1830, und es erschien erst 1875, lange nach seinem Tod. " +
      "Er schickte es seiner Schwester Ludwika, damit sie es vor seinem zweiten Klavierkonzert übte. " +
      "Der Film Der Pianist spielt es, und es eröffnet das Soundtrack-Album des Films.",
    funFact: "1939 spielte der Pianist Władysław Szpilman es live im Polnischen Rundfunk, als der deutsche Angriff auf Warschau die Sendung unterbrach.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten zwei Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 9 nur mit der rechten Hand. Die Hand beginnt höher, mit Finger 5 auf dem hohen E.",
          "Jetzt die linke Hand allein. Sie spielt einen tiefen Ton nach dem anderen, dann eine leere Quinte.",
          "Spiel die ersten vier Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Das ist ein Lied der Nacht. Spiel leise, und die Takte 3 und 4 noch leiser.",
          "Nutz die Pause nach dem E, um die rechte Hand hinauf zum hohen E zu setzen.",
          "Nutz die kurze Pause nach dem tiefen A, um die Hand hinauf zum hohen A zu setzen.",
        ],
        tricky: {
          2: "Finger 1 spielt die schwarze Taste Dis, und Finger 2 spielt das E. Die linke Hand geht von F hinunter zu E.",
          4: "Das ist noch einmal Takt 2, nur leiser. Dann heb die Hand in der Pause und setz sie nach oben.",
          5: "Die Hand ist nach oben gerückt. Finger 5 spielt das hohe E, und Finger 4 das D. Die linke Hand spielt A, dann E.",
        },
      },
      rare: {
        practice: [
          "Spiel die linke Hand allein. Auf dem Schlag kommt ein tiefer Ton, und ein Zweiklang antwortet.",
          "Spiel die Zweiklänge der rechten Hand in Takt 1 und 2 allein, und lass das Stück auf jeden warten.",
          "Spiel die schnelle Figur in Takt 11 langsam nur mit der rechten Hand.",
          "Spiel die Takte 5 bis 12 langsam mit beiden Händen zusammen.",
          "Jetzt spiel das ganze Stück im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Spiel die Akkorde am Anfang leise, und die Takte 3 und 4 noch leiser, wie ein Echo.",
          "Die Melodie springt eine ganze Oktave. Der Daumen spielt das tiefe A, und Finger 5 das hohe.",
          "Nach dem langen A spiel A, G, A und G gleichmäßig. Dann lass D und F klingen.",
        ],
        tricky: {
          5: "Die Hand rückt in der Pause davor nach oben. Finger 5 spielt das hohe E, und die linke Hand spielt A, dann C und E zusammen.",
          13: "Die Hand rückt in der Pause wieder nach unten. Finger 2 und 5 spielen E und A, und die linke Hand beginnt mit Finger 4 auf dem A.",
          17: "Finger 2 und 5 spielen noch einmal E und A. Die linke Hand setzt für den letzten Akkord Finger 5 auf das A.",
        },
      },
      epic: {
        practice: [
          "Spiel die gebrochenen Akkorde der linken Hand allein, bis sie gleichmäßig hinauf und zurück rollen.",
          "Spiel die schnelle Figur in Takt 7 ganz langsam nur mit der rechten Hand. Zähl drei gleiche Töne in der Triole.",
          "Spiel die Akkorde vom Anfang langsam mit beiden Händen.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Jetzt spiel das ganze Stück mit beiden Händen im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, damit die Akkorde nie verschwimmen.",
          "Die Figur nach dem langen H ist Chopins eigene. Ihre letzten drei Töne sind eine Triole, drei gleiche Töne auf einem Schlag.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          5: "Die linke Hand beginnt ihre gebrochenen Akkorde. Finger 5 spielt das tiefe H, Finger 2 und 1 steigen, und der Daumen gleitet hinunter zum H.",
          11: "Halt die Sexte mit Finger 2 und 5. Dann spiel die schnelle Figur: H, A, dann die Triole H, A, G.",
          13: "Die Akkorde vom Anfang kehren zurück. Heb die Hand in jeder Achtelpause, und setz den Daumen auf D, dann auf H.",
        },
      },
      legendary: {
        practice: [
          "Spiel die gebrochenen Akkorde der linken Hand allein. Der Daumen spielt den hohen Ton und gleitet dann hinunter zum Cis.",
          "Spiel die schnelle Figur in Takt 7 ganz langsam nur mit der rechten Hand. Die Triole sind drei gleiche Töne.",
          "Spiel die Akkorde der rechten Hand in den Takten 9 bis 12 allein, und lass den obersten Finger die Melodie singen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die Achtelpause nach der tiefen Oktave, um hinauf zum Cis zu springen.",
          "Lass die gebrochenen Akkorde leise unter der singenden Melodie plätschern, wie Wasser in der Nacht.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          3: "Spiel leiser als in Takt 1. Die linke Hand greift die tiefe Oktave auf Cis und springt in der Achtelpause nach oben.",
          13: "Der Anfang kehrt zurück. Die linke Hand spielt die tiefe Oktave mit Finger 5 und 1 und springt in der Pause hinauf zum Cis.",
          15: "Spiel dieses Echo ganz leise. Heb jeden Akkord in seiner Achtelpause, und setz den Daumen auf E, dann auf Cis.",
        },
      },
    },
  },
};

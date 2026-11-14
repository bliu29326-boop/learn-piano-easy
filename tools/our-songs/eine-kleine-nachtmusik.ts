/**
 * *Eine kleine Nachtmusik*: the first theme of Mozart's Serenade No. 13, K. 525, in four versions of ours.
 *
 * The tune is the first theme's four bars in G major, where all the strings play in unison and octaves. The
 * print is in 4/4 with eighths. The tune keeps its notes and doubles every length into 4/2, so its eighths
 * are quarters and Common needs nothing faster. A unit is a quarter, and the hook is all four bars.
 *
 * Each print bar fills two bars of 4/4 in a version, so the tune takes eight. The strings imply the chords:
 * G major under the first half, and D7 under the second.
 *
 * After the tune, every version plays the first violin's next phrase, the print's bars 5 to 10, as the
 * Mutopia Project typesets the movement. Bars 5 to 8 answer the tune over the cello's repeated G. Bars 9
 * and 10 climb to the high D over a bass that walks G, A, B and F sharp. That D over G closes the song.
 * In bars 6 and 8, every version but Legendary leaves out the trill on G. Every version leaves out the
 * cello's G under the D7 of bars 6 and 8, where it would rub against the tune's F sharp.
 *
 * Common plays the tune and the phrase over held open fifths and bass notes. It merges each pair of the
 * print's sixteenths into the note before them. Rare plays the same over a root and fifth in turns, with
 * the sixteenths as eighths. Epic sets an Alberti bass under the tune and plays it again in thirds and
 * sixths. Under the phrase it takes the print's own figure: the inner strings repeat each chord in eighths.
 * Legendary plays the tune in octaves over an octave bass. It plays the phrase with its trills as quick
 * turns and its grace notes on the beat. Under it the cello's notes sound mostly in octaves, with the
 * chord's inner notes between.
 *
 * In the print's bar 9, the tune's G sounds over the bass's F sharp. In bar 10, the tune's B passes over
 * the chord's C. Epic marks both, in its bars 26 and 27, and Legendary marks the first, in its bar 18.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const G_MAJOR: Key = { tonic: 7, mode: "major" };

/** The tune in 4/2, in quarters: the print's four bars in eighths, every length doubled. */
const tune = "G5:2 r:1 D5:1 G5:2 r:1 D5:1 | G5:1 D5:1 G5:1 B5:1 D6:2 r:2 | C6:2 r:1 A5:1 C6:2 r:1 A5:1 | C6:1 A5:1 F#5:1 A5:1 D5:2 r:2";

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** The tune in the right hand in 4/4, in quarters, fingered. The hand moves in the rest of bar 4. */
const TUNE_QUARTERS = [
  "G5/2:2 r:1 D5/1:1 | G5/2:2 r:1 D5/1:1 | G5/2:1 D5/1:1 G5/2:1 B5/4:1 | D6/5:2 r:2",
  "C6/5:2 r:1 A5/3:1 | C6/5:2 r:1 A5/3:1 | C6/5:1 A5/3:1 F#5/2:1 A5/3:1 | D5/1:2 r:2",
].join(" | ");

/** The tune in 4/4 in eighths, fingered. */
const TUNE_EIGHTHS = inEighths(TUNE_QUARTERS);

/**
 * The print's bars 5 to 8 in the right hand in 4/4, in quarters, fingered: the phrase that answers the
 * tune. The trill on G in bars 6 and 8 is left out, so the G sounds plain.
 */
const ANSWER_QUARTERS = [
  "G5/2:1 r:1 G5/2:2~ | G5/2:1 B5/4:1 A5/3:1 G5/2:1 | G5/2:1 F#5/1:1 F#5/1:2~ | F#5/1:1 A5/3:1 C6/5:1 F#5/1:1",
  "A5/3:1 G5/2:1 G5/2:2~ | G5/2:1 B5/4:1 A5/3:1 G5/2:1 | G5/2:1 F#5/1:1 F#5/1:2~ | F#5/1:1 A5/3:1 C6/5:1 F#5/1:1",
].join(" | ");

/** The answer in 4/4 in eighths, fingered. */
const ANSWER_EIGHTHS = inEighths(ANSWER_QUARTERS);

/**
 * The print's bar 9 and the first half of bar 10 in 4/4, in eighths, fingered, without their grace notes.
 * The thumb moves down to E for the first bar, and takes over the second G of the next. Each version
 * plays the high D of bar 10 in its own last bar.
 */
const CLOSE_EIGHTHS =
  "G5/3:2 G5/3:2 F#5/2:2 E5/1:1 F#5/2:1 | G5/3:2 G5/1:2 A5/2:2 G5/1:1 A5/2:1 | B5/3:2 B5/3:2 C6/4:2 B5/3:1 C6/4:1";

/** One half bar of the print's throbbing chords in eighths: on G, on D7 over A, on G over B, and on D7 over F sharp. */
const THROB: Record<string, string> = {
  g: "G2+B2+D3/5+3+1:1 G2+B2+D3/5+3+1:1 G2+B2+D3/5+3+1:1 G2+B2+D3/5+3+1:1",
  d: "A2+C3+D3/5+2+1:1 A2+C3+D3/5+2+1:1 A2+C3+D3/5+2+1:1 A2+C3+D3/5+2+1:1",
  b: "B2+D3/3+1:1 B2+D3/3+1:1 B2+D3/3+1:1 B2+D3/3+1:1",
  f: "F#2+C3+D3/5+2+1:1 F#2+C3+D3/5+2+1:1 F#2+C3+D3/5+2+1:1 F#2+C3+D3/5+2+1:1",
};

/**
 * One half bar of the throb in sixteenths: the print's bass on each beat, and the chord's inner notes
 * between. The bass is an octave, except on B, where the hand takes B and G so it can reach F sharp next.
 */
const OCTAVE_THROB: Record<string, string> = {
  g: "G2+G3/5+1:2 B2+D3/3+2:2 G2+G3/5+1:2 B2+D3/3+2:2",
  d: "A2+A3/5+1:2 C3+D3/3+2:2 A2+A3/5+1:2 C3+D3/3+2:2",
  b: "B2+G3/5+1:2 D3/1:2 B2+G3/5+1:2 D3/1:2",
  f: "F#2+F#3/5+1:2 A2+C3/4+2:2 F#2+F#3/5+1:2 A2+C3/4+2:2",
};

/** The chords of the answer and its close, one letter per half bar of 4/4: the print's bars 5 to 10. */
const ANSWER_CHORDS = "ggggddddggggddddgdbfgd";

/** Half bars of `patterns` from `chords`, such as `"gdbf"`: one letter per half bar, two per bar. */
function halfBars(patterns: Record<string, string>, chords: string): string {
  const halves = [...chords].map((chord) => patterns[chord]);
  return Array.from({ length: Math.ceil(halves.length / 2) }, (_, at) => halves.slice(2 * at, 2 * at + 2).join(" ")).join(" | ");
}

/** One bar of Alberti bass in eighths, on G major or on D major. */
const ALBERTI: Record<string, string> = {
  g: "G2/5:1 D3/1:1 B2/3:1 D3/1:1 G2/5:1 D3/1:1 B2/3:1 D3/1:1",
  d: "F#2/5:1 D3/1:1 A2/3:1 D3/1:1 F#2/5:1 D3/1:1 A2/3:1 D3/1:1",
};

/** One bar of a root and fifth in turns, in eighths, on G major or on D major. */
const ROOT_FIFTH: Record<string, string> = {
  g: "G2/5:2 D3/1:2 G2/5:2 D3/1:2",
  d: "D3/1:2 A2/4:2 D3/1:2 A2/4:2",
};

/** One bar of octave bass in sixteenths, on G major or on D major: the root and the fifth in turns, each lifted for a jump. */
const OCTAVES: Record<string, string> = {
  g: "G1+G2/5+1:2 r:2 D2+D3/5+1:2 r:2 G1+G2/5+1:2 r:2 D2+D3/5+1:2 r:2",
  d: "D2+D3/5+1:2 r:2 A1+A2/5+1:2 r:2 D2+D3/5+1:2 r:2 A1+A2/5+1:2 r:2",
};

/** Bars of `patterns` from `chords`, such as `"ggdd"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** The chords of the tune and the answer, one letter per bar of 4/4. */
const CHORDS = "ggggddddggddggdd";

/** Rare's left hand in the print's bars 9 and 10: a root and fifth in turns, a half bar per chord. */
const ROOT_FIFTH_CLOSE = "G2/5:2 D3/1:2 D3/1:2 A2/4:2 | G2/5:2 D3/1:2 D3/1:2 A2/4:2 | G2/5:2 D3/1:2 D3/1:2 A2/4:2";

export const eineKleineNachtmusik: OurSong = {
  slug: "eine-kleine-nachtmusik",
  title: "Eine kleine Nachtmusik",
  aka: ["A Little Night Music", "Serenade No. 13"],
  source: {
    composer: "Wolfgang Amadeus Mozart",
    died: 1791,
    published: 1827,
    edition:
      "Serenade No. 13 in G major, K. 525, first movement, bars 1 to 10: the first theme as Wikipedia's article prints it, and the strings' parts as the Mutopia Project typesets them",
  },
  about:
    "Mozart finished this serenade for strings in Vienna in 1787. " +
    "It was published only in 1827, more than thirty years after his death. " +
    "In the film Amadeus (1984), the old Salieri plays it, and a priest knows the tune at once.",
  funFact: 'The title means "a little serenade", and Mozart wrote it into his own list of his works.',
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: G_MAJOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: G_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      right: [
        TUNE_QUARTERS,
        ANSWER_QUARTERS,
        "G5/2:1 G5/2:1 F#5/1:2 | G5/1:1 G5/1:1 A5/2:2 | B5/3:1 B5/3:1 C6/4:2 | D6/5:4",
      ].join(" | "),
      left: [
        "G2+D3/5+1:4 | G2+D3/5+1:4 | G2+D3/5+1:4 | G2+D3/5+1:4",
        "D3/1:4 | D3/1:4 | D3/1:4 | D3/1:4",
        "G2+D3/5+1:4 | G2+D3/5+1:4 | D3/1:4 | D3/1:4",
        "G2+D3/5+1:4 | G2+D3/5+1:4 | D3/1:4 | D3/1:4",
        "G2+D3/5+1:2 D3/1:2 | G2+D3/5+1:2 D3/1:2 | G2+D3/5+1:2 D3/1:2 | G2+D3/5+1:4",
      ].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 4 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone, after the hand moves to its new place.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Now the left hand alone. It holds G and D, or D alone, for a whole bar or half a bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "fingering", text: "Thumb on D, finger 2 on G, finger 4 on B and finger 5 on the high D." },
        { fromBar: 1, toBar: 2, kind: "sound", text: "Play the G short and bright, as if the strings snap it out." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Use the rest after the high D to move fingers 2, 3 and 5 onto F sharp, A and C." },
      ],
      tricky: {
        5: "Your hand has moved in the rest. Finger 5 now plays C, and finger 3 plays A.",
        7: "Walk down C, A and F sharp with fingers 5, 3 and 2, then back up to A.",
        18: "Move the hand up one key after F sharp, so the thumb takes G. Then finger 3 reaches B, and finger 5 the high D.",
      },
    },
    rare: {
      key: G_MAJOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: `${TUNE_EIGHTHS} | ${ANSWER_EIGHTHS} | ${CLOSE_EIGHTHS} | D6/5:8`,
      left: `${bars(ROOT_FIFTH, CHORDS)} | ${ROOT_FIFTH_CLOSE} | G2+D3/5+1:8`,
      skills: ["eighth-notes", "position-change"],
      practice: [
        { text: "Play the tune with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. It rocks between the root and the fifth on every beat.", hands: "left", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Join the hands on the tune, slowly.", hands: "both", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the answer with both hands, bars 9 to 20. It swings between G and F sharp.", hands: "both", speed: 0.7, loop: [9, 20], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Count the left hand in quarters. Each tune note lands on a beat with it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The thumb rests on F sharp for the whole answer. Fingers 2 to 5 take G, A, B and C." },
        { fromBar: 17, toBar: 20, kind: "fingering", text: "Move the thumb down to E for bar 17. In bar 18, the thumb takes over the second G." },
      ],
      tricky: {
        5: "Move the hand in the rest of bar 4. Finger 5 lands on C, and finger 3 on A.",
        7: "Walk down C, A and F sharp with fingers 5, 3 and 2, then back up to A.",
        12: "Reach up from F sharp to A and C with fingers 3 and 5, then come back to F sharp with the thumb.",
      },
    },
    epic: {
      key: G_MAJOR,
      bpm: 132,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [
        TUNE_EIGHTHS,
        "B4+G5/1+5:4 r:2 B4+D5/1+3:2 | B4+G5/1+5:4 r:2 B4+D5/1+3:2",
        "B4+G5/1+5:2 B4+D5/1+3:2 B4+G5/1+5:2 D5+B5/1+5:2 | G5+B5+D6/1+3+5:4 r:4",
        "A5+C6/3+5:4 r:2 F#5+A5/1+3:2 | A5+C6/3+5:4 r:2 F#5+A5/1+3:2",
        "A5+C6/3+5:2 F#5+A5/1+3:2 D5+F#5/1+2:2 F#5+A5/2+4:1 r:1 | A4+D5/1+4:4 r:4",
        ANSWER_EIGHTHS,
        CLOSE_EIGHTHS,
        "G5+B5+D6/1+3+5:8",
      ].join(" | "),
      left: `${bars(ALBERTI, "ggggddddggggdddd")} | ${halfBars(THROB, ANSWER_CHORDS)} | G2+B2+D3/5+3+1:8`,
      pedal: [...Array(24).fill("P:8"), ...Array(3).fill("P:4 P:4"), "P:8"].join(" | "),
      markedClashBars: [26, 27],
      skills: ["alberti-bass", "thirds-and-sixths", "pedal"],
      practice: [
        { text: "Play the Alberti bass alone until it rolls by itself: low, high, middle, high.", hands: "left", speed: 0.5, loop: [1, 8], wait: false },
        { text: "Play the right hand's thirds and sixths alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on the first eight bars, slowly.", hands: "both", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Keep the Alberti bass soft and even, so the tune sings above it." },
        { fromBar: 9, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 17, toBar: 28, kind: "sound", text: "The left hand repeats each chord in short eighths, as the inner strings do. Change the pedal with each new bass note." },
      ],
      tricky: {
        17: "The left hand leaves the Alberti bass and repeats G, B and D in eighths. Keep the chords short and even.",
        20: "Climb F sharp, A and C with fingers 1, 3 and 5, then come back to F sharp with the thumb.",
        24: "After the last F sharp, move the hand down. In bar 25, finger 3 takes G, and the thumb reaches E.",
      },
    },
    legendary: {
      key: G_MAJOR,
      bpm: 126,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [
        "G4+G5/1+5:6 r:6 D4+D5/1+5:2 r:2 | G4+G5/1+5:6 r:6 D4+D5/1+5:2 r:2",
        "G4+G5/1+5:2 r:2 D4+D5/1+5:2 r:2 G4+G5/1+5:2 r:2 B4+B5/1+5:2 r:2 | D5+D6/1+5:8 r:8",
        "C5+C6/1+5:6 r:6 A4+A5/1+5:2 r:2 | C5+C6/1+5:6 r:6 A4+A5/1+5:2 r:2",
        "C5+C6/1+5:2 r:2 A4+A5/1+5:2 r:2 F#4+F#5/1+5:2 r:2 A4+A5/1+5:2 r:2 | D4+D5/1+5:8 r:8",
        "G4+B4+D5+G5/1+2+3+5:4 r:4 G5/2:8~ | G5/2:4 B5/4:4 A5/3:4 G5/2:4",
        "A5/3:1 G5/2:1 A5/3:1 G5/2:1 F#5/1:4 F#5/1:8~ | F#5/1:4 A5/3:4 C6/5:4 F#5/1:4",
        "A5/3:4 G5/2:4 G5/2:8~ | G5/2:4 B5/4:4 A5/3:4 G5/2:4",
        "A5/3:1 G5/2:1 A5/3:1 G5/2:1 F#5/1:4 F#5/1:8~ | F#5/1:4 A5/3:4 C6/5:4 F#5/1:4",
        "G5/3:4 G5/3:4 G5/3:1 F#5/2:3 E5/1:2 F#5/2:2 | G5/3:4 G5/1:4 B5/3:1 A5/2:3 G5/1:2 A5/2:2",
        "B5/3:4 B5/3:4 D6/5:1 C6/4:3 B5/3:2 C6/4:2 | D5+G5+B5+D6/1+2+3+5:16",
      ].join(" | "),
      left: `${bars(OCTAVES, "ggggdddd")} | ${halfBars(OCTAVE_THROB, ANSWER_CHORDS)} | G2+G3/5+1:16`,
      markedClashBars: [18],
      skills: ["octave-bass", "sixteenth-notes"],
      practice: [
        { text: "Play the right hand's octaves alone. Keep the thumb and finger 5 spread, and move the whole hand.", hands: "right", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the quick turns of bars 11 and 15 alone, slowly: A, G, A, G, then F sharp.", hands: "right", speed: 0.5, loop: [11, 16], wait: true },
        { text: "Play the left hand alone. It jumps between octaves on the root and the fifth.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Octaves in both hands sound like a whole string orchestra. Play them firmly." },
        { fromBar: 11, toBar: 11, kind: "fingering", text: "Play the turn lightly with fingers 3 and 2, then land on F sharp with the thumb." },
        { fromBar: 17, toBar: 19, kind: "trick", text: "Each grace note is a quick touch on the beat. Lean into the note after it." },
      ],
      tricky: {
        2: "Lift the octave on G, then jump down to the octave on D. Keep the hand spread.",
        3: "Four octaves in a row: G, D, G and B. Lift the hand a little after each one.",
        9: "Grab G, B, D and G with fingers 1, 2, 3 and 5. Lift the hand in the rest, then hold the next G with finger 2.",
      },
    },
  },
  de: {
    about:
      "Mozart vollendete diese Serenade für Streicher 1787 in Wien. " +
      "Gedruckt wurde sie erst 1827, mehr als dreißig Jahre nach seinem Tod. " +
      "Im Film Amadeus (1984) spielt der alte Salieri sie, und ein Priester erkennt die Melodie sofort.",
    funFact: 'Der Titel bedeutet "eine kleine Serenade", und Mozart trug ihn selbst in sein Verzeichnis seiner Werke ein.',
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 4 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand, nachdem die Hand an ihren neuen Platz gerückt ist.",
          "Jetzt die linke Hand allein. Sie hält G und D, oder nur D, einen ganzen oder einen halben Takt lang.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Daumen auf D, Finger 2 auf G, Finger 4 auf H und Finger 5 auf dem hohen D.",
          "Spiel das G kurz und hell, als würden die Streicher es hinausschnellen.",
          "Nutz die Pause nach dem hohen D, um Finger 2, 3 und 5 auf Fis, A und C zu setzen.",
        ],
        tricky: {
          5: "Deine Hand ist in der Pause gerückt. Finger 5 spielt jetzt C, und Finger 3 spielt A.",
          7: "Geh mit Finger 5, 3 und 2 über C, A und Fis hinunter, dann zurück hinauf zum A.",
          18: "Rück die Hand nach dem Fis um eine Taste hinauf, sodass der Daumen das G nimmt. Dann erreicht Finger 3 das H, Finger 5 das hohe D.",
        },
      },
      rare: {
        practice: [
          "Spiel die Melodie nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Sie wiegt auf jedem Schlag zwischen Grundton und Quinte.",
          "Spiel die Melodie langsam mit beiden Händen zusammen.",
          "Spiel die Antwort mit beiden Händen, die Takte 9 bis 20. Sie pendelt zwischen G und Fis.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Zähl die linke Hand in Vierteln. Jeder Ton der Melodie fällt mit ihr auf einen Schlag.",
          "Der Daumen bleibt die ganze Antwort über auf dem Fis. Finger 2 bis 5 nehmen G, A, H und C.",
          "Setz den Daumen für Takt 17 hinab auf das E. In Takt 18 übernimmt der Daumen das zweite G.",
        ],
        tricky: {
          5: "Rück die Hand in der Pause von Takt 4. Finger 5 landet auf C, und Finger 3 auf A.",
          7: "Geh mit Finger 5, 3 und 2 über C, A und Fis hinunter, dann zurück hinauf zum A.",
          12: "Greif vom Fis mit Finger 3 und 5 hinauf zu A und C, dann kehr mit dem Daumen zum Fis zurück.",
        },
      },
      epic: {
        practice: [
          "Spiel den Alberti-Bass allein, bis er von selbst rollt: tief, hoch, Mitte, hoch.",
          "Spiel die Terzen und Sexten der rechten Hand allein, und drück beide Töne jedes Paars wie einen an.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Halt den Alberti-Bass leise und gleichmäßig, damit die Melodie darüber singt.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
          "Die linke Hand wiederholt jeden Akkord in kurzen Achteln, wie die Mittelstimmen der Streicher. Wechsle das Pedal mit jedem neuen Basston.",
        ],
        tricky: {
          17: "Die linke Hand verlässt den Alberti-Bass und wiederholt G, H und D in Achteln. Spiel die Akkorde kurz und gleichmäßig.",
          20: "Steig mit Finger 1, 3 und 5 über Fis, A und C hinauf, dann kehr mit dem Daumen zum Fis zurück.",
          24: "Rück die Hand nach dem letzten Fis hinunter. In Takt 25 nimmt Finger 3 das G, und der Daumen erreicht das E.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Oktaven der rechten Hand allein. Halt Daumen und Finger 5 gespreizt, und bewege die ganze Hand.",
          "Spiel die schnellen Doppelschläge in Takt 11 und 15 langsam allein: A, G, A, G, dann Fis.",
          "Spiel die linke Hand allein. Sie springt zwischen Oktaven auf Grundton und Quinte.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Oktaven in beiden Händen klingen wie ein ganzes Streichorchester. Spiel sie kräftig.",
          "Spiel den Doppelschlag leicht mit Finger 3 und 2, dann lande mit dem Daumen auf dem Fis.",
          "Jeder Vorschlag ist eine kurze Berührung auf dem Schlag. Lehn dich in den Ton danach.",
        ],
        tricky: {
          2: "Heb die Oktave auf G ab, dann spring hinunter zur Oktave auf D. Halt die Hand gespreizt.",
          3: "Vier Oktaven hintereinander: G, D, G und H. Heb die Hand nach jeder ein wenig an.",
          9: "Greif G, H, D und G mit Finger 1, 2, 3 und 5. Heb die Hand in der Pause, dann halt das nächste G mit Finger 2.",
        },
      },
    },
  },
};

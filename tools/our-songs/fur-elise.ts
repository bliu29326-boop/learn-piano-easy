/**
 * *Für Elise*: the opening of Beethoven's Bagatelle in A minor, WoO 59, in four versions of ours.
 *
 * The tune is the A section: the E and D sharp phrase, its answer, and the home A. The edition writes it
 * in 3/8 with sixteenths and a two-note upbeat. The tune here makes every sixteenth a quarter, so Common
 * needs nothing faster. Each bar of 3/4 is half a bar of the edition, and bar 1 holds the upbeat after a
 * quarter rest. The hook is its first four bars, from the upbeat to the first A.
 *
 * The edition's left hand climbs a broken chord from the bass, A, E and A or E, E and G sharp. It plays
 * under the tune's long notes, from bar 4 on, and rests while the right hand climbs on.
 *
 * Common plays the tune over held open fifths and drops three notes it cannot reach. Rare plays every
 * note, and its left hand climbs the edition's broken chords, with B for the edition's E above the low E.
 * Epic and Legendary play the edition's left hand as it stands, with the pedal held through each bar.
 * Their low E is let go early, so the hand jumps the tenth. Epic plays the tune again in thirds and
 * sixths. Legendary plays it again an octave up, with full chords.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key. */
const A_MINOR: Key = { tonic: 9, mode: "minor" };

/** The tune in 3/4, in quarters: the phrase, its answer, and the home A. */
const tune =
  "r:1 E5:1 D#5:1 | E5:1 D#5:1 E5:1 | B4:1 D5:1 C5:1 | A4:2 r:1 | C4:1 E4:1 A4:1 | B4:2 r:1 | E4:1 G#4:1 B4:1 | C5:2 r:1 | " +
  "E4:1 E5:1 D#5:1 | E5:1 D#5:1 E5:1 | B4:1 D5:1 C5:1 | A4:2 r:1 | C4:1 E4:1 A4:1 | B4:2 r:1 | E4:1 C5:1 B4:1 | A4:3";

/** The whole tune in the right hand, in quarters, with every note fingered. */
const RIGHT_QUARTERS =
  "r:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1 | C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | " +
  "E4/1:1 G#4/2:1 B4/4:1 | C5/5:2 r:1 | E4/1:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1 | " +
  "C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | E4/1:1 C5/5:1 B4/4:1 | A4/3:3";

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/**
 * The edition's left hand in eighths: a broken chord rising from the bass, one note per quarter. `a` is
 * A, E and A, `e` is E, E and G sharp, and `r` is a bar of rest while the right hand climbs on. The low E
 * is let go after an eighth, so the hand jumps the tenth instead of stretching. The pedal holds it.
 */
const RISING: Record<string, string> = {
  a: "A2/5:2 E3/2:2 A3/1:2",
  e: "E2/5:1 r:1 E3/2:2 G#3/1:2",
  r: "r:6",
};

/** The edition's left hand under the tune's 16 bars, one letter per bar of `RISING`. */
const TUNE_LEFT = "rrrarerarrrarera";

/** Bars of `patterns` from `chords`, such as `"aae"`: one letter per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  return [...chords].map((chord) => patterns[chord]).join(" | ");
}

/** The pedal under the tune's 16 bars: held through each bar from the first broken chord on. */
const TUNE_PEDAL = "r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6 | r:6 | r:6 | r:6 | P:6 | P:6 | P:6 | P:6 | P:6";

export const furElise: OurSong = {
  slug: "fur-elise",
  title: "Für Elise",
  source: {
    composer: "Ludwig van Beethoven",
    died: 1827,
    published: 1867,
    edition:
      "Bagatelle in A minor, WoO 59, in Ludwig Nohl's first edition (1867) and the Breitkopf & Härtel complete edition, series 25 no. 30 (1888)",
  },
  about:
    "Beethoven wrote this short piano piece in 1810, and his manuscript names it for Elise. " +
    "Nobody knows for sure who Elise was. " +
    "Ludwig Nohl found the piece and published it in 1867, forty years after Beethoven died.",
  funFact: "One theory says Nohl misread the name, and the piece was really written for Therese Malfatti, whom Beethoven hoped to marry.",
  mythic: "piano-midi/elise.mid",
  tune: { text: tune, numerator: 3, denominator: 4, key: A_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: A_MINOR,
      bpm: 112,
      numerator: 3,
      denominator: 4,
      right: [
        "r:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1",
        "C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | r:1 G#4/1:1 B4/2:1 | C5/3:2 r:1",
        "r:1 E5/5:1 D#5/4:1 | E5/5:1 D#5/4:1 E5/5:1 | B4/2:1 D5/4:1 C5/3:1 | A4/2:2 r:1",
        "C4/1:1 E4/2:1 A4/4:1 | B4/5:2 r:1 | E4/1:2 B4/5:1 | A4/4:3",
      ].join(" | "),
      left: [
        "r:3 | r:3 | r:3 | A2+E3/3+1:3",
        "A2+E3/3+1:3 | E2+B2/5+2:3 | E2+B2/5+2:3 | A2+E3/3+1:3",
        "A2/3:3 | r:3 | r:3 | A2+E3/3+1:3",
        "A2+E3/3+1:3 | E2+B2/5+2:3 | E2+B2/5+2:3 | A2+E3/3+1:3",
      ].join(" | "),
      skills: ["position-change", "open-fifths"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play the right hand alone from bar 5, where the hand moves down to middle C.", hands: "right", speed: 0.6, loop: [5, 9], wait: true },
        { text: "Now the left hand alone. It holds two shapes, one per bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 2, kind: "fingering", text: "Rock between fingers 5 and 4 for E and D sharp, like a gentle swing." },
        { fromBar: 1, toBar: 3, kind: "sound", text: "The left hand waits here. Play the tune softly, as if telling a secret." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Lift the hand in the rest after A, and land with the thumb on middle C." },
      ],
      tricky: {
        5: "After the rest, your thumb lands on middle C. Look down before you play it.",
        7: "Your thumb takes the black key G sharp, so the hand can reach up to C.",
        13: "The hand moves down to middle C again. Use the rest in bar 12 to get there.",
      },
    },
    rare: {
      key: A_MINOR,
      bpm: 126,
      numerator: 3,
      denominator: 4,
      right: RIGHT_QUARTERS,
      left: [
        "r:3 | r:3 | r:3 | A2/5:1 E3/2:1 A3/1:1",
        "r:3 | E2/5:1 B2/2:1 G#3/1:1 | r:3 | A2/5:1 E3/2:1 A3/1:1",
        "r:3 | r:3 | r:3 | A2/5:1 E3/2:1 A3/1:1",
        "r:3 | E2/5:1 B2/2:1 G#3/1:1 | r:3 | A2/5:1 E3/2:1 A3/1:1",
      ].join(" | "),
      skills: ["broken-chords", "position-change"],
      practice: [
        { text: "Play the right hand alone, slowly, on the first eight bars.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. Each chord climbs from the bass, one note per beat.", hands: "left", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Join the hands on bars 4 to 8, where they take turns.", hands: "both", speed: 0.6, loop: [4, 8], wait: true },
        { text: "Play the whole song with both hands, a little slower than written.", hands: "both", speed: 0.8, loop: null, wait: false },
        { text: "Now play it at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 5, kind: "trick", text: "The left hand climbs, then the right hand carries on climbing. It should sound like one hand." },
        { fromBar: 9, toBar: 9, kind: "fingering", text: "Thumb on E, little finger on the high E. Spread the hand over the whole octave." },
        { fromBar: 6, toBar: 6, kind: "sound", text: "G sharp in the bass makes the chord bright. It pulls the ear back home to A." },
      ],
      tricky: {
        5: "Use the rest after A to move the right thumb down to middle C.",
        6: "The left hand opens wide: finger 2 plays B, and the thumb reaches up to G sharp.",
        14: "The same stretch as bar 6: finger 2 plays B, and the left thumb reaches up to G sharp.",
      },
    },
    epic: {
      key: A_MINOR,
      bpm: 150,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(RIGHT_QUARTERS),
        "r:2 C5+E5/3+5:2 B4+D#5/2+4:2 | C5+E5/3+5:2 B4+D#5/2+4:2 C5+E5/3+5:2 | G#4+B4/1+2:2 B4+D5/2+4:2 A4+C5/1+3:1 r:1 | C4+A4/1+5:4 r:2",
        "C4/1:2 E4/2:2 A4/4:2 | D4+B4/1+5:4 r:2 | E4/1:2 G#4/2:2 B4/4:2 | E4+C5/1+5:4 r:2",
        "E4/1:2 E5/5:2 D#5/4:2 | C5+E5/3+5:2 B4+D#5/2+4:2 C5+E5/3+5:2 | G#4+B4/1+2:2 B4+D5/2+4:2 A4+C5/1+3:1 r:1 | C4+A4/1+5:4 r:2",
        "C4/1:2 E4/2:2 A4/4:2 | D4+B4/1+5:4 r:2 | E4/1:2 C5/5:2 B4/4:2 | C4+E4+A4/1+2+4:6",
      ].join(" | "),
      left: `${bars(RISING, TUNE_LEFT)} | ${bars(RISING, TUNE_LEFT)}`,
      pedal: `${TUNE_PEDAL} | ${TUNE_PEDAL}`,
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each broken chord climbs from the bass, one note per beat.", hands: "left", speed: 0.5, loop: [4, 8], wait: false },
        { text: "Play the right hand's thirds alone, and press both notes of each pair as one.", hands: "right", speed: 0.6, loop: [17, 20], wait: true },
        { text: "Join the hands on bars 4 to 8, slowly.", hands: "both", speed: 0.5, loop: [4, 8], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 8, kind: "sound", text: "Keep the broken chords soft, so the tune sings above them." },
        { fromBar: 4, toBar: 8, kind: "sound", text: "Change the pedal on every bar line. Lift it as the new bass note sounds." },
        { fromBar: 17, toBar: 19, kind: "fingering", text: "The tune is the top note of each third, so let the upper finger lead." },
      ],
      tricky: {
        6: "Let go of the low E after half a beat, and jump up to E with finger 2. The pedal holds the bass.",
        14: "The same jump as bar 6: a short low E, then finger 2 on E and the thumb on G sharp.",
        22: "The right hand holds D and B. The left hand plays the low E short, then jumps up to E and G sharp.",
      },
    },
    legendary: {
      key: A_MINOR,
      bpm: 192,
      numerator: 3,
      denominator: 4,
      steps: 2,
      right: [
        inEighths(RIGHT_QUARTERS),
        "r:2 E6/5:2 D#6/4:2 | E6/5:2 D#6/4:2 E6/5:2 | B5/2:2 D6/4:2 C6/3:1 r:1 | A4+C5+E5+A5/1+2+3+5:4 r:2",
        "C5/1:2 E5/2:2 A5/4:2 | E5+G#5+B5/1+2+4:4 r:2 | E5/1:2 G#5/2:2 B5/4:2 | E5+A5+C6/1+3+5:4 r:2",
        "E5/1:2 E6/5:2 D#6/4:2 | E6/5:2 D#6/4:2 E6/5:2 | B5/2:2 D6/4:2 C6/3:1 r:1 | A4+C5+E5+A5/1+2+3+5:4 r:2",
        "C5/1:2 E5/2:2 A5/4:2 | E5+G#5+B5/1+2+4:4 r:2 | E5/1:2 C6/5:2 B5/4:1 r:1 | A4+C5+E5+A5/1+2+3+5:6",
      ].join(" | "),
      left: `${bars(RISING, TUNE_LEFT)} | ${bars(RISING, TUNE_LEFT)}`,
      pedal: `${TUNE_PEDAL} | ${TUNE_PEDAL}`,
      skills: ["broken-chords", "melody-in-chords", "pedal"],
      practice: [
        { text: "Play the left hand alone. Each broken chord climbs from the bass, one note per beat.", hands: "left", speed: 0.5, loop: [4, 8], wait: false },
        { text: "Play the right hand's chords alone, and let the top finger sing the tune.", hands: "right", speed: 0.5, loop: [20, 24], wait: true },
        { text: "Join the hands on the second half, where the tune climbs an octave.", hands: "both", speed: 0.6, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 8, kind: "trick", text: "Let the low E go after half a beat, and jump up a tenth. The pedal keeps it sounding." },
        { fromBar: 17, toBar: 19, kind: "sound", text: "Up high, the E and D sharp should shimmer. Keep them light and even." },
        { fromBar: 20, toBar: 24, kind: "sound", text: "Play the top note of each chord a little louder than the others." },
      ],
      tricky: {
        17: "The right hand jumps up an octave for E and D sharp. Use the rest at the start of the bar to get there.",
        20: "Lift the hand off the high C, then grab A, C, E and A with fingers 1, 2, 3 and 5.",
        28: "The four-note chord comes back. Lift off the high C first, then land on the whole octave.",
      },
    },
  },
  de: {
    about:
      "Beethoven schrieb dieses kurze Klavierstück 1810, und seine Handschrift widmet es Elise. " +
      "Niemand weiß sicher, wer Elise war. " +
      "Ludwig Nohl fand das Stück und veröffentlichte es 1867, vierzig Jahre nach Beethovens Tod.",
    funFact:
      "Eine Theorie sagt, Nohl habe den Namen falsch gelesen, und das Stück sei eigentlich für Therese Malfatti, die Beethoven gern geheiratet hätte.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel ab Takt 5 nur die rechte Hand. Dort geht die Hand hinab zum mittleren C.",
          "Jetzt die linke Hand allein. Sie hält zwei Griffformen, eine pro Takt.",
          "Spiel die ersten acht Takte mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Wieg dich zwischen Finger 5 und 4 hin und her, für E und Dis, wie auf einer sanften Schaukel.",
          "Hier wartet die linke Hand. Spiel die Melodie leise, als würdest du ein Geheimnis erzählen.",
          "Heb die Hand in der Pause nach dem A, und lande mit dem Daumen auf dem mittleren C.",
        ],
        tricky: {
          5: "Nach der Pause landet dein Daumen auf dem mittleren C. Schau hin, bevor du es spielst.",
          7: "Dein Daumen nimmt die schwarze Taste Gis, damit die Hand hinauf zum C reicht.",
          13: "Die Hand geht wieder hinab zum mittleren C. Nutz die Pause in Takt 12, um dorthin zu kommen.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte langsam nur mit der rechten Hand.",
          "Spiel die linke Hand allein. Jeder Akkord steigt vom Bass auf, ein Ton pro Schlag.",
          "Spiel die Takte 4 bis 8 mit beiden Händen zusammen. Dort wechseln sie sich ab.",
          "Spiel das ganze Stück mit beiden Händen, etwas langsamer als notiert.",
          "Jetzt spiel es im vollen Tempo.",
        ],
        tips: [
          "Die linke Hand steigt, dann steigt die rechte Hand weiter. Es soll wie eine einzige Hand klingen.",
          "Daumen auf E, kleiner Finger auf dem hohen E. Spann die Hand über die ganze Oktave.",
          "Das Gis im Bass macht den Akkord hell. Es zieht das Ohr zurück nach Hause zum A.",
        ],
        tricky: {
          5: "Nutz die Pause nach dem A, um den rechten Daumen hinab zum mittleren C zu führen.",
          6: "Die linke Hand öffnet sich weit: Finger 2 spielt das H, und der Daumen greift hinauf zum Gis.",
          14: "Dieselbe Streckung wie in Takt 6: Finger 2 spielt das H, und der linke Daumen greift hinauf zum Gis.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder gebrochene Akkord steigt vom Bass auf, ein Ton pro Schlag.",
          "Spiel die Terzen der rechten Hand allein, und drück beide Töne jedes Zweiklangs wie einen an.",
          "Spiel die Takte 4 bis 8 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Spiel die gebrochenen Akkorde leise, damit die Melodie darüber singt.",
          "Wechsle das Pedal an jedem Taktstrich. Heb es an, sobald der neue Basston klingt.",
          "Die Melodie ist der obere Ton jeder Terz, also lass den oberen Finger führen.",
        ],
        tricky: {
          6: "Lass das tiefe E nach einem halben Schlag los, und spring mit Finger 2 hinauf zum E. Das Pedal hält den Bass.",
          14: "Derselbe Sprung wie in Takt 6: ein kurzes tiefes E, dann Finger 2 auf dem E und der Daumen auf dem Gis.",
          22: "Die rechte Hand hält D und H. Die linke Hand spielt das tiefe E kurz, dann springt sie hinauf zu E und Gis.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein. Jeder gebrochene Akkord steigt vom Bass auf, ein Ton pro Schlag.",
          "Spiel die Akkorde der rechten Hand allein, und lass den obersten Finger die Melodie singen.",
          "Spiel die zweite Hälfte mit beiden Händen zusammen. Dort steigt die Melodie eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Lass das tiefe E nach einem halben Schlag los, und spring eine Dezime hinauf. Das Pedal lässt es weiterklingen.",
          "Oben sollen E und Dis schimmern. Spiel sie leicht und gleichmäßig.",
          "Spiel den oberen Ton jedes Akkords etwas lauter als die anderen.",
        ],
        tricky: {
          17: "Die rechte Hand springt für E und Dis eine Oktave hinauf. Nutz die Pause am Anfang des Takts, um dorthin zu kommen.",
          20: "Heb die Hand vom hohen C, dann greif A, C, E und A mit Finger 1, 2, 3 und 5.",
          28: "Der Vierklang kommt zurück. Heb zuerst vom hohen C ab, dann lande auf der ganzen Oktave.",
        },
      },
    },
  },
};

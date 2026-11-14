/**
 * *Piano Concerto No. 21: Andante*: the first theme of the slow movement of Mozart's concerto K. 467, in
 * four versions of ours.
 *
 * The tune is the melody of the print's bars 2 to 7, in F major. The print is in 4/4 with sixteenths. The
 * tune makes every sixteenth a quarter, so Common needs nothing faster, and reads each print bar as one bar
 * of 4/1. Every version keeps that bar, so the long C of bar 2 never crosses a bar line. A beat is a whole
 * note, one beat of the print. The hook is bars 1 to 3. The chords are the print's: F major, then C seventh
 * in bars 3 to 5, then home.
 *
 * The print's bars 8 to 11 answer the tune. Bars 8 and 10 open on a loud chord, F seventh, then a diminished
 * seventh on B. A low line answers each: A, A, C, B flat, then B, B, C and F. Bar 9 rests on B flat, and
 * bar 11 on F minor over a low C. Every version plays these four bars right after the tune, then closes on F
 * major. Common plays them as bars 7 to 10, and the others as bars 13 to 16.
 *
 * Common plays the answer two octaves up, in the tune's own hand position, so its last F falls a fifth
 * instead of rising a fourth. Its left hand holds the print's bass notes. Common and Rare play the second B
 * once, and Rare leaves out the E flat of the F seventh. Each keeps its notes outside the key within the
 * limit. Rare, Epic and Legendary play the answer an octave up. Epic and Legendary open bars 13 and 15 with
 * the print's loud chord.
 *
 * Under the tune the print's strings repeat one chord in triplet eighths, three to a beat, and the basses
 * pluck the chord's notes on the first three beats. Epic's left hand plays the strings' chords, three to a
 * beat. Legendary's plucks the basses' notes, with an octave on the first beat, and fills each beat with the
 * strings' chord. In Epic's bars 6 and 12, the tune's G sharp sounds against the strings' A, as in the print,
 * and the version marks that clash.
 *
 * Common plays the tune once over held roots and open fifths. Its short C in bar 1 ends early, so the hand
 * has a breath to reach the high A. Rare plays it twice over a bass note and its chord on every beat. Epic
 * plays it with the pedal, then again with sixths and thirds under it. Legendary plays the second time an
 * octave up, and the answer in octaves. It closes on a four-note chord.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const F_MAJOR: Key = { tonic: 5, mode: "major" };

/** The tune in 4/1, in quarters, which are the print's sixteenths: one bar per print bar. */
const tune =
  "F5:7 C5:1 A5:7 F5:1 | C6:12 D6:1 C6:1 Bb5:1 A5:1 | F#5:4 G5:4 r:8 | C5:8 E5:4 G5:4 | Bb5:8 Bb5:2 D6:2 C6:2 Bb5:2 | G#5:2 A5:2 A5:4 r:8";

/** The tune in the right hand, in quarters, with every note fingered. */
const RIGHT_QUARTERS =
  "F5/2:7 C5/1:1 A5/5:7 F5/1:1 | C6/4:12 D6/5:1 C6/4:1 Bb5/3:1 A5/2:1 | F#5/1:4 G5/2:4 r:8 | " +
  "C5/1:8 E5/2:4 G5/3:4 | Bb5/3:8 Bb5/3:2 D6/5:2 C6/4:2 Bb5/3:2 | G#5/2:2 A5/4:2 A5/4:4 r:8";

/** `text` with every length three times as long, so a line in quarters reads in triplet eighths. */
function inTriplets(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${3 * Number(units)}`);
}

/** `text` an octave up: every note name's octave plus one. */
function octaveUp(text: string): string {
  return text.replace(/([A-G][#b]?)(\d)(?=[/:+])/g, (_, name: string, octave: string) => `${name}${Number(octave) + 1}`);
}

/** Epic's second time through the tune, in triplet eighths, with sixths and thirds under its long notes. */
const EPIC_SECOND = [
  "A4+F5/1+3:21 C5/1:3 F5+A5/2+5:21 F5/1:3",
  "A5+C6/2+4:36 D6/5:3 C6/4:3 Bb5/3:3 A5/2:3",
  "F#5/1:12 E5+G5/1+2:12 r:24",
  "C5/1:24 E5/2:12 C5+G5/1+3:12",
  "D5+Bb5/1+3:24 Bb5/3:6 D6/5:6 C6/4:6 Bb5/3:6",
  "G#5/2:6 A5/4:6 C5+F5+A5/1+2+4:12 r:24",
].join(" | ");

/**
 * Epic's bars 13 to 17 in triplet eighths: the print's bars 8 to 11, then the home chord. The top three notes
 * of each loud chord open the bar, and the low answer follows an octave up.
 */
const EPIC_ANSWER = [
  "F5+A5+C6/1+3+5:12 r:12 A4/1:18 A4/1:6",
  "C5/3:6 Bb4/2:6 Bb4/2:12 r:24",
  "Ab5+B5+D6/1+2+4:12 r:12 B4/1:18 B4/1:6",
  "C5/2:36 F5/5:12",
  "A4+C5+F5/1+2+5:48",
].join(" | ");

/** Legendary's bars 13 to 17 in triplet eighths: the print's whole loud chords, and the answer in octaves. */
const LEGENDARY_ANSWER = [
  "Eb5+F5+A5+C6/1+2+3+5:12 r:12 A4+A5/1+5:18 A4+A5/1+5:6",
  "C5+C6/1+5:6 Bb4+Bb5/1+5:6 Bb4+Bb5/1+5:12 r:24",
  "F5+Ab5+B5+D6/1+2+3+5:12 r:12 B4+B5/1+5:18 B4+B5/1+5:6",
  "C5+C6/1+5:34 r:2 F5+F6/1+5:12",
  "F5+A5+C6+F6/1+2+3+5:48",
].join(" | ");

/** Rare's left hand for one bar of F: the root, then the chord on each other beat. */
const RARE_F = "F2/5:4 A2+C3/3+2:4 A2+C3/3+2:4 A2+C3/3+2:4";

/** Rare's left hand for one bar of C seventh: the root, then the chord on each other beat. */
const RARE_C = "C3/2:4 G2+C3+E3/4+2+1:4 G2+C3+E3/4+2+1:4 G2+C3+E3/4+2+1:4";

/** Rare's left hand for one bar: `root`, then `chord` on each other beat, lifted just before the next bar. */
function rareBar(root: string, chord: string): string {
  return `${root}:4 ${chord}:4 ${chord}:4 ${chord}:3 r:1`;
}

/**
 * One bar of the print's strings: `chord` twelve times in triplet eighths, three to a beat. With `lift`, the
 * last chord is cut short, so the hand has time to move to the next bar's chord.
 */
function strings(chord: string, lift = false): string {
  const chords = Array(12).fill(`${chord}:4`);
  if (lift) chords[11] = `${chord}:2 r:2`;
  return chords.join(" ");
}

/**
 * One bar of the print's basses and strings in triplet eighths. Each of the first three beats plucks one of
 * `basses` short, then plays `chord` twice. The fourth beat plays `chord` three times. The last chord of each
 * beat is cut short, so the hand has time to jump.
 */
function plucked(basses: string[], chord: string): string {
  return [...basses.map((bass) => `${bass}:2 r:2 ${chord}:4 ${chord}:2 r:2`), `${chord}:4 ${chord}:4 ${chord}:2 r:2`].join(" ");
}

/** Legendary's left hand for one bar of F, as the print's basses and strings play it. */
const LEGENDARY_F = plucked(["F1+F2/5+1", "A2/5", "C3/5"], "F3+A3+C4/3+2+1");

/** Legendary's left hand for one bar of C seventh, as the print's basses and strings play it. */
const LEGENDARY_C = plucked(["C2+C3/5+1", "E2/5", "G2/5"], "E3+Bb3+C4/4+2+1");

/** The pedal held for each whole bar of 4/1 in triplet eighths, for `count` bars. */
function pedalBars(count: number): string {
  return Array(count).fill("P:48").join(" | ");
}

export const mozart21Andante: OurSong = {
  slug: "mozart-21-andante",
  title: "Piano Concerto No. 21: Andante",
  aka: ["Elvira Madigan", "K. 467", "Klavierkonzert Nr. 21"],
  source: {
    composer: "Wolfgang Amadeus Mozart",
    died: 1791,
    published: 1855,
    edition:
      "Piano Concerto No. 21 in C major, K. 467, second movement, its first theme in bars 2 to 7 and its answer in bars 8 to 11, as a piano four-hands arrangement on Wikimedia Commons prints it: the scan 'Piano Concerto No.21 in C major, K.467 (IA imslp-concerto-no21-in-c-major-k467-mozart-wolfgang-amadeus).pdf', pages 1 and 2. The year is that of J. B. Cramer's transcription (Richault, Paris), the earliest dated print read",
  },
  about:
    "Mozart completed this concerto on 9 March 1785, four weeks after the one before it. " +
    "Its slow movement, the Andante, sings a long tune over soft repeated chords. " +
    "The film Elvira Madigan (1967) plays it, and the concerto is now widely known by that name.",
  funFact: "Mozart finished the concerto only four weeks after his Piano Concerto No. 20.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 1, steps: 4, key: F_MAJOR, hookBars: [1, 3] },
  versions: {
    common: {
      key: F_MAJOR,
      bpm: 176,
      numerator: 4,
      denominator: 1,
      steps: 8,
      right: [
        "F5/2:14 C5/1:1 r:1 A5/5:14 F5/1:2 | C6/4:24 D6/5:2 C6/4:2 Bb5/3:2 A5/2:2 | F#5/1:8 G5/2:8 r:16",
        "C5/1:16 E5/2:8 G5/3:8 | Bb5/3:16 Bb5/3:4 D6/5:4 C6/4:4 Bb5/3:4 | G#5/2:4 A5/3:4 A5/3:8 r:16",
        "r:16 A5/3:12 A5/3:4 | C6/5:4 Bb5/4:4 Bb5/4:8 r:16 | r:16 B5/4:16 | C6/5:24 F5/1:8 | F5/1:32",
      ].join(" | "),
      left: [
        "F2+C3/5+1:32 | F2+C3/5+1:32 | C3/1:32",
        "C3/1:16 G2/4:16 | C3/1:16 Bb2/2:16 | F2+C3/5+1:32",
        "F2+C3/5+1:32 | Bb2+F3/5+1:32 | B2/4:32 | C3/1:32 | F2+C3/5+1:32",
      ].join(" | "),
      skills: ["held-bass", "open-fifths"],
      practice: [
        { text: "Play bars 1 to 3 with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 3], wait: true },
        { text: "Play bars 4 to 11 with the right hand alone. From bar 7, it answers a low chord.", hands: "right", speed: 0.6, loop: [4, 11], wait: true },
        { text: "Now the left hand alone. It holds one note or an open fifth for a long time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together, slowly.", hands: "both", speed: 0.7, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 1, kind: "rhythm", text: "Hold the first F for seven counts. The short C comes just before the next long note." },
        { fromBar: 2, toBar: 2, kind: "fingering", text: "Finger 4 holds the high C. Then fingers 5, 4, 3 and 2 play four quick notes." },
        { fromBar: 1, toBar: 11, kind: "sound", text: "Play softly and smoothly, as if you were humming a lullaby." },
      ],
      tricky: {
        5: "Finger 3 moves up from G to B flat. Then fingers 5, 4 and 3 play D, C and B flat.",
        8: "The left hand moves down to B flat and F. The right hand plays C with finger 5, then B flat twice with finger 4.",
        9: "Both hands play B, not B flat, with finger 4. It is the white key just above B flat.",
      },
    },
    rare: {
      key: F_MAJOR,
      bpm: 184,
      numerator: 4,
      denominator: 1,
      steps: 4,
      right: [
        RIGHT_QUARTERS,
        RIGHT_QUARTERS,
        "r:8 A4/1:6 A4/1:2 | C5/3:2 Bb4/2:2 Bb4/2:4 r:8 | r:8 B4/2:8 | C5/3:12 F5/5:4 | A4+F5/1+5:16",
      ].join(" | "),
      left: [
        `${RARE_F} | ${RARE_F} | ${RARE_C} | ${RARE_C} | ${RARE_C} | ${RARE_F}`,
        `${RARE_F} | ${RARE_F} | ${RARE_C} | ${RARE_C} | ${RARE_C} | ${RARE_F}`,
        rareBar("F2/5", "A2+C3/3+2"),
        rareBar("Bb2/5", "D3+F3/3+1"),
        rareBar("B2/5", "D3+F3/3+1"),
        "C3/5:4 F3+Ab3/2+1:11 r:1",
        "F2+A2+C3/5+3+2:16",
      ].join(" | "),
      skills: ["triads", "two-note-chords"],
      practice: [
        { text: "Play the right hand alone on the first six bars, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Play the left hand alone. A low note comes first, then the chord answers three times.", hands: "left", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Join the hands on bars 1 to 6, slowly.", hands: "both", speed: 0.6, loop: [1, 6], wait: true },
        { text: "Play bars 13 to 17. The left hand finds three new chords, and the right hand answers each one.", hands: "both", speed: 0.6, loop: [13, 17], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 6, kind: "sound", text: "Keep the chords soft, so the tune sings above them like a voice." },
        { fromBar: 3, toBar: 3, kind: "rhythm", text: "F sharp leans up into G. Give each one four counts, then rest." },
        { fromBar: 13, toBar: 15, kind: "trick", text: "Bar 13 starts with half a bar of rest. Use it to move the right thumb down to A, where it stays." },
      ],
      tricky: {
        5: "Finger 3 moves up from G to B flat. Then fingers 5, 4 and 3 play D, C and B flat.",
        11: "Finger 3 moves up from G to B flat. Then fingers 5, 4 and 3 play D, C and B flat.",
        14: "The left hand moves down to B flat with finger 5. The right hand plays C with finger 3, then B flat twice with finger 2.",
      },
    },
    epic: {
      key: F_MAJOR,
      bpm: 184,
      numerator: 4,
      denominator: 1,
      steps: 12,
      right: `${inTriplets(RIGHT_QUARTERS)} | ${EPIC_SECOND} | ${EPIC_ANSWER}`,
      left: [
        ...Array<string>(2).fill(
          [
            strings("F3+A3+C4/5+3+1"),
            strings("F3+A3+C4/5+3+1"),
            strings("E3+Bb3+C4/5+2+1"),
            strings("E3+Bb3+C4/5+2+1"),
            strings("E3+Bb3+C4/5+2+1"),
            strings("F3+A3+C4/5+3+1", true),
          ].join(" | "),
        ),
        strings("A2+Eb3+F3/5+2+1"),
        strings("Bb2+D3+F3/5+3+1"),
        strings("D3+F3+Ab3/5+3+1"),
        strings("C3+F3+Ab3/5+2+1", true),
        "F3+A3+C4/5+3+1:48",
      ].join(" | "),
      pedal: pedalBars(17),
      markedClashBars: [6, 12],
      skills: ["broken-chords", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. It repeats each chord three times on every beat, as the strings do.", hands: "left", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play the right hand alone on bars 7 to 12, where sixths and thirds join the tune.", hands: "right", speed: 0.6, loop: [7, 12], wait: true },
        { text: "Join the hands on bars 13 to 17, slowly. A loud chord opens each bar, and a low line answers it.", hands: "both", speed: 0.5, loop: [13, 17], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 6, kind: "rhythm", text: "Count three even chords in the left hand for every beat. Keep them light and soft." },
        { fromBar: 7, toBar: 12, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
        { fromBar: 1, toBar: 17, kind: "sound", text: "Change the pedal on every bar line, as the new bass note sounds." },
      ],
      tricky: {
        13: "The right hand plays F, A and C together, then drops to A with the thumb during the rest. The left hand moves down to A, E flat and F.",
        15: "Play A flat, B and D with fingers 1, 2 and 4. Then the thumb drops to B. The left hand repeats D, F and A flat.",
        16: "Hold C with finger 2 for three beats, then reach up to F with finger 5. Lift the left hand early, so it lands on the last chord in time.",
      },
    },
    legendary: {
      key: F_MAJOR,
      bpm: 192,
      numerator: 4,
      denominator: 1,
      steps: 12,
      right: [
        inTriplets(RIGHT_QUARTERS),
        octaveUp(EPIC_SECOND),
        LEGENDARY_ANSWER,
      ].join(" | "),
      left: [
        ...Array<string>(2).fill([LEGENDARY_F, LEGENDARY_F, LEGENDARY_C, LEGENDARY_C, LEGENDARY_C, LEGENDARY_F].join(" | ")),
        plucked(["A1+A2/5+1", "C2+C3/5+1", "F2/5"], "Eb3+F3/2+1"),
        plucked(["Bb1+Bb2/5+1", "D2+D3/5+1", "F2/5"], "D3+F3/2+1"),
        plucked(["B1+B2/5+1", "D2/5", "F2/5"], "D3+F3+Ab3/3+2+1"),
        plucked(["C2+C3/5+1", "F2/5", "Ab2/5"], "F3+Ab3/2+1"),
        "F1+F2/5+1:48",
      ].join(" | "),
      pedal: pedalBars(17),
      skills: ["octave-bass", "arpeggios", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone on bars 1 to 6. Jump down for the low octave, then back up for the chords.", hands: "left", speed: 0.5, loop: [1, 6], wait: true },
        { text: "Play bars 13 to 17 with both hands, slowly. Octaves in the right hand answer each loud chord.", hands: "both", speed: 0.5, loop: [13, 17], wait: true },
        { text: "Play the right hand alone from bar 7, where the tune climbs an octave.", hands: "right", speed: 0.6, loop: [7, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 6, kind: "trick", text: "Lift the left hand after each low octave. The short rest gives you time to reach the chord." },
        { fromBar: 13, toBar: 16, kind: "fingering", text: "Play each octave with the thumb and finger 5. Keep that shape as the hand moves." },
        { fromBar: 17, toBar: 17, kind: "sound", text: "Spread the right hand over the last chord, and let it ring with the pedal." },
      ],
      tricky: {
        5: "Finger 3 moves up from G to B flat, while the left hand plucks C, E and G below.",
        10: "The thumb lands on the high C after the rest, and finger 2 plays E. On the last beat, the thumb comes back to C under G.",
        11: "Play D and B flat together with the thumb and finger 3. Then fingers 3, 5, 4 and 3 play B flat, D, C and B flat.",
      },
    },
  },
  de: {
    about:
      "Mozart vollendete dieses Konzert am 9. März 1785, vier Wochen nach dem vorigen. " +
      "Sein langsamer Satz, das Andante, singt eine lange Melodie über leisen wiederholten Akkorden. " +
      "Der Film Elvira Madigan (1967) spielt es, und seither kennen viele das Konzert unter diesem Namen.",
    funFact: "Mozart vollendete das Konzert nur vier Wochen nach seinem Klavierkonzert Nr. 20.",
    versions: {
      common: {
        practice: [
          "Spiel die Takte 1 bis 3 nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 4 bis 11 nur mit der rechten Hand. Ab Takt 7 antwortet sie auf einen tiefen Akkord.",
          "Jetzt die linke Hand allein. Sie hält lange einen Ton oder eine leere Quinte.",
          "Nimm beide Hände zusammen, langsam.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt das erste F sieben Zählzeiten lang. Das kurze C kommt direkt vor dem nächsten langen Ton.",
          "Finger 4 hält das hohe C. Dann spielen Finger 5, 4, 3 und 2 vier schnelle Töne.",
          "Spiel leise und weich, als würdest du ein Wiegenlied summen.",
        ],
        tricky: {
          5: "Finger 3 rückt vom G hinauf zum B. Dann spielen Finger 5, 4 und 3 D, C und B.",
          8: "Die linke Hand rückt hinab zu B und F. Die rechte Hand spielt das C mit Finger 5, dann zweimal B mit Finger 4.",
          9: "Beide Hände spielen H, nicht B, mit Finger 4. Es ist die weiße Taste direkt über dem B.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten sechs Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Zuerst kommt ein tiefer Ton, dann antwortet der Akkord dreimal.",
          "Spiel die Takte 1 bis 6 langsam mit beiden Händen zusammen.",
          "Spiel die Takte 13 bis 17. Die linke Hand findet drei neue Akkorde, und die rechte Hand antwortet auf jeden.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Halt die Akkorde leise, damit die Melodie darüber singt wie eine Stimme.",
          "Das Fis lehnt sich hinauf zum G. Gib jedem vier Zählzeiten, dann mach Pause.",
          "Takt 13 beginnt mit einer halben Pause. Nutz sie, um den rechten Daumen hinab zum A zu setzen. Dort bleibt er.",
        ],
        tricky: {
          5: "Finger 3 rückt vom G hinauf zum B. Dann spielen Finger 5, 4 und 3 D, C und B.",
          11: "Finger 3 rückt vom G hinauf zum B. Dann spielen Finger 5, 4 und 3 D, C und B.",
          14: "Die linke Hand rückt mit Finger 5 hinab zum B. Die rechte Hand spielt das C mit Finger 3, dann zweimal B mit Finger 2.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Sie wiederholt jeden Akkord dreimal auf jedem Schlag, wie die Streicher.",
          "Spiel die Takte 7 bis 12 nur mit der rechten Hand. Dort kommen Sexten und Terzen zur Melodie.",
          "Spiel die Takte 13 bis 17 langsam mit beiden Händen. Ein lauter Akkord eröffnet jeden Takt, und eine tiefe Linie antwortet.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Zähl in der linken Hand drei gleichmäßige Akkorde pro Schlag. Spiel sie leicht und leise.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
          "Wechsle das Pedal an jedem Taktstrich, sobald der neue Basston klingt.",
        ],
        tricky: {
          13: "Die rechte Hand spielt F, A und C zusammen und fällt in der Pause mit dem Daumen zum A. Die linke Hand rückt hinab zu A, Es und F.",
          15: "Spiel As, H und D mit Finger 1, 2 und 4. Dann fällt der Daumen zum H. Die linke Hand wiederholt D, F und As.",
          16: "Halt das C drei Schläge lang mit Finger 2, dann greif mit Finger 5 hinauf zum F. Heb die linke Hand früh an, damit sie rechtzeitig auf dem letzten Akkord landet.",
        },
      },
      legendary: {
        practice: [
          "Spiel die Takte 1 bis 6 nur mit der linken Hand. Spring hinunter zur tiefen Oktave, dann zurück hinauf zu den Akkorden.",
          "Spiel die Takte 13 bis 17 langsam mit beiden Händen. Oktaven in der rechten Hand antworten auf jeden lauten Akkord.",
          "Spiel ab Takt 7 nur die rechte Hand. Dort steigt die Melodie eine Oktave höher.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Heb die linke Hand nach jeder tiefen Oktave an. Die kurze Pause gibt dir Zeit, den Akkord zu erreichen.",
          "Spiel jede Oktave mit Daumen und Finger 5. Behalte diese Form, während die Hand wandert.",
          "Spann die rechte Hand über den letzten Akkord, und lass ihn mit dem Pedal klingen.",
        ],
        tricky: {
          5: "Finger 3 rückt vom G hinauf zum B, während die linke Hand darunter C, E und G zupft.",
          10: "Nach der Pause landet der Daumen auf dem hohen C, und Finger 2 spielt das E. Auf dem letzten Schlag kehrt der Daumen zum C unter dem G zurück.",
          11: "Spiel D und B zusammen mit Daumen und Finger 3. Dann spielen Finger 3, 5, 4 und 3 B, D, C und B.",
        },
      },
    },
  },
};

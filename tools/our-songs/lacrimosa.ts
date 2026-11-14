/**
 * *Lacrimosa*: the soprano's first phrases from the Lacrimosa of Mozart's Requiem, in four versions of ours.
 *
 * The tune is the soprano's "Lacrimosa dies illa", bars 3 and 4 of the vocal score. The print is in 12/8
 * and D minor. The tune writes every eighth as a quarter, so it reads in 12/4. Its first A is a dotted
 * quarter tied to an eighth, which makes one note of four units. The hook is both bars.
 *
 * Every version writes the tune in 6/4 quarters, two bars per print bar, so each print beat is half a
 * bar. Bars 5 to 12 of every version play the print's bars 5 to 8, "qua resurget ex favilla judicandus
 * homo reus". The soprano climbs from D to D in short notes with rests, over the bass D, A, D, C, F, E,
 * A and G. It then climbs by half steps from E flat to the high A, over C, B flat, A, C, B, B flat and A.
 * Those bars follow the vocal score and the full score that Wikimedia Commons scans.
 *
 * Common and Rare play the climb as E flat, F, G, G sharp and A, since the hand may move only twice in
 * eight bars. Common holds a bass note for each half bar and ends on D minor after bar 12. Rare rocks a
 * two-note chord, long then short, and plays the tune again before its last chord. Both finger the long D
 * of bar 4 with finger 5, so the hand reaches down to D without a move.
 *
 * Epic and Legendary take the print's figure: the bass on each beat, then the strings' two chords on the
 * second and third eighths. They play the whole climb, then the tune again before a D minor chord. Epic
 * plays the line in single notes and the tune again in sixths. Legendary plays an octave bass, the line
 * in octaves and the tune again in octaves. In bars 3 and 15, and Epic's bar 13, B flat in the bass rubs
 * against the tune's A, as the print's chord does.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 12/4, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "A4:4 F5:1 E5:1 D5:3 C#5:1 r:2 | A4:4 F5:1 D5:1 D5:3 C#5:1 r:2";

/**
 * The tune in 6/4 quarters. Finger 5 takes over the long D of bar 4, so finger 4 plays C sharp and the
 * hand reaches the next low D without a move.
 */
const TUNE_RIGHT = "A4/1:4 F5/5:1 E5/4:1 | D5/3:3 C#5/2:1 r:2 | A4/1:4 F5/5:1 D5/3:1 | D5/5:3 C#5/4:1 r:2";

/** The print's bars 5 and 6 in 6/4 quarters: the soprano climbs from D to D, each note short with a rest. */
const RISE = "D4/1:1 r:2 E4/2:1 r:2 | F4/3:1 r:2 G4/4:1 r:2 | A4/5:1 r:2 B4/1:1 r:2 | C5/2:1 r:2 D5/3:1 r:2";

/** The print's bars 7 and 8 for Rare in 6/4 quarters: the climb from E flat to A, without E, F sharp and the second G. */
const RARE_CLIMB = "Eb5/1:6 | F5/2:6 | G5/3:3 G#5/4:3 | A5/5:3 A4/1:1 r:2";

/**
 * The print's bars 7 and 8 in 6/4 eighths: the soprano climbs by half steps from E flat to A, then drops
 * an octave. The high A lets go an eighth early, so the hand has time for the drop.
 */
const CLIMB = "Eb5/3:6 E5/1:6 | F5/2:6 F#5/3:6 | G5/1:6 G#5/3:6 | A5/4:5 r:1 A4/1:2 r:4";

/** The chords under the tune, two beats per bar: G minor under the held A of the second print bar. */
const TUNE_CHORDS = "dgdadgda";

/** The chords under the tune with the print's B flat under the held A of the second print bar. */
const TUNE_CHORDS_B_FLAT = "dgdadbda";

/** The print's chords under its bars 5 to 8, two beats per bar, as `FIGURE` names them. */
const PRINT_CHORDS = "dadcfemonshtkxaa";

/** The tune in 6/4 eighths, with a third or a sixth under every note. */
const TUNE_SIXTHS = [
  "F4+A4/1+2:8 A4+F5/2+5:2 G4+E5/1+4:2 | F4+D5/1+3:6 E4+C#5/1+2:2 r:4",
  "F4+A4/1+2:8 A4+F5/2+5:2 F4+D5/1+3:2 | F4+D5/1+3:6 E4+C#5/1+2:2 r:4",
].join(" | ");

/** The tune in 6/4 eighths, in octaves. Each A ends an eighth early, so the hand can jump in the rest. */
const TUNE_OCTAVES = [
  "A3+A4/1+5:7 r:1 F4+F5/1+5:2 E4+E5/1+5:2 | D4+D5/1+5:6 C#4+C#5/1+5:2 r:4",
  "A3+A4/1+5:7 r:1 F4+F5/1+5:2 D4+D5/1+5:2 | D4+D5/1+5:6 C#4+C#5/1+5:2 r:4",
].join(" | ");

/** `text` with every length doubled, so a line in quarters reads in eighths. */
function inEighths(text: string): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${2 * Number(units)}`);
}

/** `text` in octaves: each note with the note an octave down, played by fingers 1 and 5. */
function inOctaves(text: string): string {
  return text.replace(
    /([A-G][#b]?)(\d)\/[1-5](?=:)/g,
    (_, name: string, octave: string) => `${name}${Number(octave) - 1}+${name}${octave}/1+5`,
  );
}

/** Bars of `patterns` from `chords`, such as `"dgda"`: one letter per beat, two beats per bar. */
function bars(patterns: Record<string, string>, chords: string): string {
  const beats = [...chords].map((chord) => {
    const pattern = patterns[chord];
    if (pattern === undefined) throw new Error(`No pattern for chord ${chord}`);
    return pattern;
  });
  const lines: string[] = [];
  for (let at = 0; at < beats.length; at += 2) lines.push(beats.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/** Common's bass on each beat, in eighths: a dotted half. */
const HELD: Record<string, string> = {
  d: "A2+D3/4+1:6",
  g: "G2+D3/5+1:6",
  a: "A2/4:6",
};

/**
 * Common's left hand under the print's bars 5 to 8, in eighths: the root of each chord, held for half a
 * bar. B flat stands under G sharp, as in the print, and C is held through bar 9.
 */
const COMMON_BASS = [
  "D3/1:6 A2/4:6 | D3/1:6 C3/2:6 | F3/1:6 E3/2:6 | A2/5:6 G2/5:6",
  "C3/2:12 | F3/1:6 D3/2:6 | G2/5:6 Bb2/3:6 | A2/4:12",
].join(" | ");

/** Rare's two-note chord on each beat, in quarters: long, then short. Rare plays G minor for B flat. */
const PULSE: Record<string, string> = {
  d: "A2+D3/4+1:2 A2+D3/4+1:1",
  g: "G2+D3/5+1:2 G2+D3/5+1:1",
  a: "A2+C#3/4+2:2 A2+C#3/4+2:1",
};

/** `chords` rocked as Rare's pulse, long then short, two per bar. */
function pulse(...chords: string[]): string {
  const beats = chords.map((chord) => `${chord}:2 ${chord}:1`);
  const lines: string[] = [];
  for (let at = 0; at < beats.length; at += 2) lines.push(beats.slice(at, at + 2).join(" "));
  return lines.join(" | ");
}

/**
 * Rare's chords under the print's bars 5 to 8, voiced so the hand moves only once, in bar 8. A minor
 * takes its third, and bar 11 holds the print's B flat under G sharp.
 */
const RARE_PRINT_LEFT = pulse(
  "A2+D3/4+1",
  "A2+C#3/4+2",
  "A2+D3/4+1",
  "G2+C3/5+2",
  "C3+F3/2+1",
  "E2+B2/5+3",
  "A2+C3/4+2",
  "G2+D3/5+1",
  "G2+C3/5+2",
  "G2+C3/5+2",
  "A2+F3/4+1",
  "A2+D3/4+2",
  "G2+D3/5+2",
  "Bb2+D3/4+2",
  "A2+E3/5+1",
  "A2+C#3/5+2",
);

/** The print's chord on each beat, as the bass note and the two notes above it. */
const FIGURE: Record<string, [string, string]> = {
  d: ["D3", "F3+A3"],
  g: ["G2", "Bb2+D3"],
  b: ["Bb2", "D3+F3"],
  a: ["A2", "C#3+E3"],
  c: ["C3", "G3+C4"],
  f: ["F2", "A2+C3"],
  e: ["E2", "B2+E3"],
  m: ["A2", "C3+E3"],
  o: ["G2", "D3+G3"],
  n: ["C3", "Eb3+G3"],
  s: ["Bb2", "E3+G3"],
  h: ["A2", "C3+F3"],
  t: ["C3", "F#3+A3"],
  k: ["B2", "D3+G3"],
  x: ["Bb2", "D3"],
};

/** The fingers of a chord of one or two notes, top note on the thumb. */
function pairFingers(pair: string): string {
  return pair.includes("+") ? "2+1" : "1";
}

/**
 * Epic's figure on each beat, in eighths: the bass for a quarter, then the chord twice, the second time
 * short, so the hand can move to the next bass.
 */
const STRINGS: Record<string, string> = Object.fromEntries(
  Object.entries(FIGURE).map(([chord, [bass, pair]]) => {
    const above = `${pair}/${pairFingers(pair)}`;
    return [chord, `${bass}/5:2 ${above}:2 ${above}:1 r:1`];
  }),
);

/** Legendary's figure on each beat, in eighths: the bass in octaves with a rest to jump, then the chord twice. */
const OCTAVE_STRINGS: Record<string, string> = Object.fromEntries(
  Object.entries(FIGURE).map(([chord, [bass, pair]]) => {
    const octave = bass.replace(/(\d)$/, (_, number: string) => `${Number(number) - 1}+${bass}`);
    const above = `${pair}/${pairFingers(pair)}`;
    return [chord, `${octave}/5+1:1 r:1 ${above}:2 ${above}:1 r:1`];
  }),
);

/** The chords of Epic and Legendary before their last bar, two beats per bar. */
const BIG_CHORDS = `${TUNE_CHORDS_B_FLAT}${PRINT_CHORDS}${TUNE_CHORDS_B_FLAT}`;

/** The pedal of Epic and Legendary: changed at each half bar, held through the last bar. */
const PEDAL = [...Array(16).fill("P:6 P:6"), "P:12"].join(" | ");

/** Common's tune in 6/4, in eighths: each A ends an eighth early, before the reach up to F. */
const COMMON_TUNE = "A4/1:7 r:1 F5/5:2 E5/4:2 | D5/3:6 C#5/2:2 r:4 | A4/1:7 r:1 F5/5:2 D5/3:2 | D5/5:6 C#5/4:2 r:4";

/** Common's bars 5 to 12, in eighths: the print's bars 5 to 8, with the climb as E flat, F, G, G sharp and A. */
const COMMON_NEXT = `${inEighths(RISE)} | Eb5/1:12 | F5/2:12 | G5/3:6 G#5/4:6 | A5/5:12`;

export const lacrimosa: OurSong = {
  slug: "lacrimosa",
  title: "Lacrimosa",
  aka: ["Lacrymosa", "Requiem in D minor", "K. 626"],
  source: {
    composer: "Wolfgang Amadeus Mozart, completed by Franz Xaver Süssmayr",
    died: 1803,
    published: 1800,
    edition:
      "Requiem in D minor, K. 626, No. 7 Lacrimosa, the soprano's bars 3 to 8, in the vocal score with Latin and German text that Wikimedia Commons scans (IA wamozartimissapr00moza, page 29), and the bass of bars 5 to 8 in the Breitkopf & Härtel full score on Wikimedia Commons (IMSLP26746, pages 60 and 61)",
  },
  about:
    "Mozart died in 1791 while he was writing his Requiem. " +
    "His pupil Franz Xaver Süssmayr finished it, and Breitkopf & Härtel printed the score in 1800. " +
    "The film Amadeus tells the story of how Mozart wrote this Requiem.",
  funFact: "Mozart's own draft of the Lacrimosa breaks off after its first eight bars.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 12, denominator: 4, key: D_MINOR, hookBars: [1, 2] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 104,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: `${COMMON_TUNE} | ${COMMON_NEXT} | D5/1:12`,
      left: `${bars(HELD, TUNE_CHORDS)} | ${COMMON_BASS} | A2+D3/4+1:12`,
      skills: ["five-finger-position", "held-bass", "position-change"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 8 with the right hand alone. The tune climbs one key at a time, with a rest after each note.", hands: "right", speed: 0.6, loop: [5, 8], wait: true },
        { text: "Play bars 9 to 13 with the right hand alone. Each long note climbs higher, up to the high A.", hands: "right", speed: 0.6, loop: [9, 13], wait: true },
        { text: "Now the left hand alone. It holds one note for half a bar at a time.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Each falling pair of notes is a sigh. Play the first note a little louder than the second." },
        { fromBar: 4, toBar: 5, kind: "fingering", text: "Play the long D in bar 4 with finger 5. Then finger 4 plays C sharp, and the thumb reaches down to D." },
        { fromBar: 5, toBar: 8, kind: "trick", text: "Each note is short, with a rest after it. Use the rests to move the hand up in bar 7." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "The tune climbs to its loudest note. Play each long note a little louder than the one before." },
      ],
      tricky: {
        7: "After A, use the rest to move the thumb up to B. The left hand climbs to F, then steps down to E.",
        8: "Fingers 2 and 3 play C and D. The left hand slides finger 5 from A down to G.",
        9: "Use the rest to move the thumb up to E flat. Hold it for the whole bar.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 116,
      numerator: 6,
      denominator: 4,
      right: [TUNE_RIGHT, RISE, RARE_CLIMB, TUNE_RIGHT, "A4+D5/1+5:6"].join(" | "),
      left: [bars(PULSE, TUNE_CHORDS), RARE_PRINT_LEFT, bars(PULSE, TUNE_CHORDS), "A2+D3+F3/4+2+1:6"].join(" | "),
      skills: ["two-note-chords", "waltz-bass", "position-change"],
      practice: [
        { text: "Play the first four bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 4], wait: true },
        { text: "Play bars 5 to 12 with the right hand alone. The tune climbs from the low D up to the high A.", hands: "right", speed: 0.6, loop: [5, 12], wait: true },
        { text: "Play the left hand alone. Each chord comes twice: long, then short.", hands: "left", speed: 0.6, loop: [1, 12], wait: true },
        { text: "Join the hands on the first twelve bars, slowly.", hands: "both", speed: 0.6, loop: [1, 12], wait: true },
        { text: "Now play the whole song at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "rhythm", text: "Count six beats in each bar. The left hand plays on beats 1, 3, 4 and 6." },
        { fromBar: 4, toBar: 5, kind: "fingering", text: "Play the long D in bar 4 with finger 5. Then finger 4 plays C sharp, and the thumb reaches down to D." },
        { fromBar: 5, toBar: 8, kind: "trick", text: "Each note is short, with a rest after it. Use the rest in bar 7 to move the thumb up to B." },
        { fromBar: 9, toBar: 12, kind: "sound", text: "Grow louder as the tune climbs, and let the high A ring." },
      ],
      tricky: {
        7: "After A, use the rest to move the thumb up to B. The left hand moves down to a low E and B.",
        9: "Use the rest to move the thumb up to E flat, and hold it for the whole bar.",
        11: "Fingers 3 and 4 step from G to G sharp. The left hand holds B flat and D under them.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 112,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [inEighths(TUNE_RIGHT), inEighths(RISE), CLIMB, TUNE_SIXTHS, "F4+A4+D5/1+2+5:12"].join(" | "),
      left: `${bars(STRINGS, BIG_CHORDS)} | D2+A2+D3/5+2+1:12`,
      pedal: PEDAL,
      markedClashBars: [3, 13, 15],
      skills: ["waltz-bass", "pedal", "thirds-and-sixths"],
      practice: [
        { text: "Play the left hand alone. Each half bar has a bass note, then two soft chords.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 12 with the right hand alone. The tune climbs one key at a time.", hands: "right", speed: 0.6, loop: [9, 12], wait: true },
        { text: "Join the hands on the first twelve bars, slowly.", hands: "both", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, with the pedal.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "sound", text: "Change the pedal on each new bass note, twice in every bar." },
        { fromBar: 3, toBar: 3, kind: "sound", text: "B flat in the bass rubs against the held A. That sad rub is on purpose." },
        { fromBar: 9, toBar: 12, kind: "fingering", text: "Finger 3 takes every black key. The thumb and finger 2 take most white keys." },
        { fromBar: 13, toBar: 16, kind: "fingering", text: "The tune is the top note of each pair, so let the upper finger lead." },
      ],
      tricky: {
        7: "After A, use the rest to move the thumb up to B. The left hand jumps down to a low F, then a low E.",
        13: "The tune comes back in pairs. Fingers 2 and 5 take A and F together.",
        14: "Hold D with fingers 1 and 3. Then fingers 1 and 2 play E and C sharp.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 120,
      numerator: 6,
      denominator: 4,
      steps: 2,
      right: [inEighths(TUNE_RIGHT), inOctaves(inEighths(RISE)), inOctaves(CLIMB), TUNE_OCTAVES, "D4+F4+A4+D5/1+2+3+5:12"].join(" | "),
      left: `${bars(OCTAVE_STRINGS, BIG_CHORDS)} | D2+A2+D3/5+2+1:12`,
      pedal: PEDAL,
      markedClashBars: [3, 15],
      skills: ["octave-bass", "melody-in-chords"],
      practice: [
        { text: "Play the left hand alone: the low octave, a short rest, then two soft chords.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 12 with the right hand alone. Climb in octaves, one key at a time.", hands: "right", speed: 0.5, loop: [9, 12], wait: true },
        { text: "Join the hands on the first twelve bars, slowly.", hands: "both", speed: 0.5, loop: [1, 12], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 12, kind: "trick", text: "Use the short rest after each low octave to jump up to the chords." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Let the little finger sing the top note of each octave a little louder." },
        { fromBar: 17, toBar: 17, kind: "sound", text: "Play the last chord softly, and hold it until the sound fades." },
      ],
      tricky: {
        5: "The octaves begin. Keep the hand open, with the thumb on the low D and finger 5 on the high D.",
        7: "Use the rest after each octave to move the open hand up one key.",
        13: "The tune comes back in octaves. Use the short rest after A to jump up to F.",
      },
    },
  },
  de: {
    about:
      "Mozart starb 1791, während er an seinem Requiem schrieb. " +
      "Sein Schüler Franz Xaver Süßmayr vollendete es, und Breitkopf & Härtel druckte die Partitur im Jahr 1800. " +
      "Der Film Amadeus erzählt, wie Mozart dieses Requiem schrieb.",
    funFact: "Mozarts eigener Entwurf des Lacrimosa bricht nach den ersten acht Takten ab.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 8 nur mit der rechten Hand. Die Melodie steigt Taste für Taste, mit einer Pause nach jedem Ton.",
          "Spiel die Takte 9 bis 13 nur mit der rechten Hand. Jeder lange Ton steigt höher, bis zum hohen A.",
          "Jetzt die linke Hand allein. Sie hält jeden Ton einen halben Takt lang.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Jedes fallende Tonpaar ist ein Seufzer. Spiel den ersten Ton etwas lauter als den zweiten.",
          "Spiel das lange D in Takt 4 mit Finger 5. Dann spielt Finger 4 das Cis, und der Daumen reicht hinunter zum D.",
          "Jeder Ton ist kurz, mit einer Pause danach. Nutz die Pausen, um die Hand in Takt 7 nach oben zu setzen.",
          "Die Melodie steigt zu ihrem lautesten Ton. Spiel jeden langen Ton etwas lauter als den davor.",
        ],
        tricky: {
          7: "Nutz nach dem A die Pause, um den Daumen hinauf zum H zu setzen. Die linke Hand steigt zum F und geht dann hinunter zum E.",
          8: "Finger 2 und 3 spielen C und D. Die linke Hand rutscht mit Finger 5 vom A hinunter zum G.",
          9: "Nutz die Pause, um den Daumen hinauf zum Es zu setzen. Halt es den ganzen Takt lang.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten vier Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die Takte 5 bis 12 nur mit der rechten Hand. Die Melodie steigt vom tiefen D bis zum hohen A.",
          "Spiel die linke Hand allein. Jeder Akkord kommt zweimal: erst lang, dann kurz.",
          "Spiel die ersten zwölf Takte langsam mit beiden Händen zusammen.",
          "Jetzt spiel das ganze Stück im vollen Tempo.",
        ],
        tips: [
          "Zähl in jedem Takt sechs Schläge. Die linke Hand spielt auf den Schlägen 1, 3, 4 und 6.",
          "Spiel das lange D in Takt 4 mit Finger 5. Dann spielt Finger 4 das Cis, und der Daumen reicht hinunter zum D.",
          "Jeder Ton ist kurz, mit einer Pause danach. Nutz die Pause in Takt 7, um den Daumen hinauf zum H zu setzen.",
          "Werde lauter, während die Melodie steigt, und lass das hohe A klingen.",
        ],
        tricky: {
          7: "Nutz nach dem A die Pause, um den Daumen hinauf zum H zu setzen. Die linke Hand geht hinunter zu einem tiefen E und H.",
          9: "Nutz die Pause, um den Daumen hinauf zum Es zu setzen, und halt es den ganzen Takt lang.",
          11: "Finger 3 und 4 steigen vom G zum Gis. Die linke Hand hält B und D darunter.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Jeder halbe Takt hat einen Basston, dann zwei leise Akkorde.",
          "Spiel die Takte 9 bis 12 nur mit der rechten Hand. Die Melodie steigt Taste für Taste.",
          "Spiel die ersten zwölf Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, mit Pedal.",
        ],
        tips: [
          "Wechsle das Pedal bei jedem neuen Basston, zweimal in jedem Takt.",
          "Das B im Bass reibt sich am gehaltenen A. Diese traurige Reibung ist gewollt.",
          "Finger 3 nimmt jede schwarze Taste. Daumen und Finger 2 nehmen die meisten weißen Tasten.",
          "Die Melodie ist der obere Ton jedes Paars, also lass den oberen Finger führen.",
        ],
        tricky: {
          7: "Nutz nach dem A die Pause, um den Daumen hinauf zum H zu setzen. Die linke Hand springt hinunter zu einem tiefen F, dann zu einem tiefen E.",
          13: "Die Melodie kommt in Paaren zurück. Finger 2 und 5 nehmen A und F zusammen.",
          14: "Halt das D mit Finger 1 und 3. Dann spielen Finger 1 und 2 E und Cis.",
        },
      },
      legendary: {
        practice: [
          "Spiel die linke Hand allein: die tiefe Oktave, eine kurze Pause, dann zwei leise Akkorde.",
          "Spiel die Takte 9 bis 12 nur mit der rechten Hand. Steig in Oktaven, Taste für Taste.",
          "Spiel die ersten zwölf Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Nutz die kurze Pause nach jeder tiefen Oktave, um hinauf zu den Akkorden zu springen.",
          "Lass den kleinen Finger den oberen Ton jeder Oktave etwas lauter singen.",
          "Spiel den letzten Akkord leise, und halt ihn, bis der Klang verklingt.",
        ],
        tricky: {
          5: "Die Oktaven beginnen. Halt die Hand offen, mit dem Daumen auf dem tiefen D und Finger 5 auf dem hohen D.",
          7: "Nutz die Pause nach jeder Oktave, um die offene Hand eine Taste höher zu setzen.",
          13: "Die Melodie kommt in Oktaven zurück. Nutz die kurze Pause nach dem A, um hinauf zum F zu springen.",
        },
      },
    },
  },
};

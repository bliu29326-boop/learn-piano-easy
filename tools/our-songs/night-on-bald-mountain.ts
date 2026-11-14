/**
 * *Night on Bald Mountain*: the brass theme of Mussorgsky's tone poem, in four versions of ours.
 *
 * The tune is the brass theme's first two statements, the print's bars 67 to 70 in Chernov's piano
 * arrangement. The print is in 2/2 and D minor, Allegro feroce. The tune writes every eighth as a quarter,
 * so each print bar is a bar of 4/2. The print ends its bars 68 and 70 with a quick run, which the tune
 * leaves out as rests. The second statement is the first a fourth higher. The hook is all four bars.
 *
 * Every version writes the tune in 4/4 quarters, two bars per print bar, over A and then D. Bars 9 to 16
 * of every version play the print's bars 82 to 85, the Poco più sostenuto. Its line is the first statement
 * again, in longer notes over a D pedal, and it sounds twice. Bars 17 to 20 play the print's bars 86 and
 * 87. The line falls to C, then calls from B flat up to E and from A up to its octave. Epic and Legendary
 * also play the print's repeat of them, bars 88 and 89, as their bars 21 to 24. Every version then closes
 * on D minor. The right hand sounds an octave below the print, so the new bars stay near the tune.
 *
 * Common plays the tune and the new bars over held single bass notes, D throughout the new bars. It drops
 * the octave call in bar 20, so no leap passes a fifth. Rare pulses the bass on the beat and keeps the
 * octave call. Epic and Legendary take the print's left hand. Under the tune it strikes a chord with each
 * tune note, here an octave on A and then on D. Under the new bars it repeats an open fifth on D in
 * eighths, with a chord of D, A and D at the start of each print bar pair. Epic fills the tune's first rest with a
 * run of our own in eighths, and Legendary with one in sixteenths. Legendary also plays the print's lower
 * voice in bars 19, 20, 23 and 24: D under B flat, and C sharp under A. B flat against the low A, and C
 * sharp against the low D, are the print's own clashes, and the guide marks them.
 */
import type { Key } from "../../src/theory/key";
import type { OurSong } from "../make-our-songs";

/** The tune's own key, which every version keeps. */
const D_MINOR: Key = { tonic: 2, mode: "minor" };

/** The tune in 4/2, in quarters, which are the print's eighths: one bar per print bar. */
const tune = "A4:1 E4:2 F4:1 E4:1 D4:1 E4:1 F4:1 | G4:2 A4:2 E4:1 r:3 | r:1 A4:2 Bb4:1 A4:1 G4:1 A4:1 Bb4:1 | C5:2 D5:2 A4:1 r:3";

/** The tune in 4/4 quarters, fingered from D up to A, then from G up to D. */
const TUNE_RIGHT = [
  "A4/5:1 E4/2:2 F4/3:1 | E4/2:1 D4/1:1 E4/2:1 F4/3:1 | G4/4:2 A4/5:2 | E4/2:1 r:3",
  "r:1 A4/2:2 Bb4/3:1 | A4/2:1 G4/1:1 A4/2:1 Bb4/3:1 | C5/4:2 D5/5:2 | A4/2:1 r:3",
].join(" | ");

/** The tune in 4/4 eighths, with a run of our own in eighths through its first rest. */
const TUNE_RUN_EIGHTHS = [
  "A4/5:2 E4/2:4 F4/3:2 | E4/2:2 D4/1:2 E4/2:2 F4/3:2 | G4/4:4 A4/5:4",
  "E4/2:2 F4/3:1 G4/1:1 A4/2:1 Bb4/3:1 C#5/4:1 D5/5:1 | C5/4:1 Bb4/3:1 A4/2:4 Bb4/3:2",
  "A4/2:2 G4/1:2 A4/2:2 Bb4/3:2 | C5/4:4 D5/5:4 | A4/2:2 r:6",
].join(" | ");

/** The tune in 4/4 sixteenths, with a run of our own in sixteenths through its first rest. */
const TUNE_RUN_SIXTEENTHS = [
  "A4/5:4 E4/2:8 F4/3:4 | E4/2:4 D4/1:4 E4/2:4 F4/3:4 | G4/4:8 A4/5:8",
  "E4/2:4 F4/3:1 G4/1:1 A4/2:1 Bb4/3:1 C#5/4:1 D5/5:1 C#5/4:1 Bb4/3:1 A4/2:1 G4/1:1 F4/3:1 E4/2:1",
  "D4/1:1 E4/2:1 F4/3:1 G4/1:1 A4/2:8 Bb4/3:4 | A4/2:4 G4/1:4 A4/2:4 Bb4/3:4 | C5/4:8 D5/5:8 | A4/2:4 r:12",
].join(" | ");

/** The print's bars 82 and 83 in 4/4 quarters, from D up to A. The print plays them twice. */
const SOSTENUTO = "E4/2:3 F4/3:1 | E4/2:1 D4/1:1 E4/2:1 F4/3:1 | G4/4:2 A4/5:2 | E4/2:3 r:1";

/** The print's bar 86 and the first half of bar 87 in 4/4 quarters, with the thumb on B flat. */
const FALL = "E4/4:3 F4/5:1 | E4/4:1 D4/3:1 C4/2:1 E4/4:1 | Bb3/1:2 E4/4:1 r:1";

/** The second half of the print's bar 87 in 4/4 quarters: A, then the A above. */
const OCTAVE_CALL = "A3/1:2 A4/5:1 r:1";

/**
 * Legendary's print bars 86 and 87 in 4/4 sixteenths, with the print's lower voice: D under B flat, and
 * C sharp under A.
 */
const FALL_LOWER_VOICE = "E4/4:12 F4/5:4 | E4/4:4 D4/3:4 C4/2:4 E4/4:4 | D3+Bb3/1+2:8 E4/5:4 r:4 | C#3+A3/1+5:6 r:2 A4/5:4 r:4";

/**
 * Epic's and Legendary's left hand under the tune, in 4/4 eighths: the print's chord on each note of the tune, here an
 * octave on A and then on D. It rests through the run.
 */
const TUNE_LEFT = [
  "A2+A3/5+1:2 A2+A3/5+1:4 A2+A3/5+1:2 | A2+A3/5+1:2 A2+A3/5+1:2 A2+A3/5+1:2 A2+A3/5+1:2",
  "A2+A3/5+1:4 A2+A3/5+1:4 | A2+A3/5+1:2 r:6",
  "D2+D3/5+1:2 D2+D3/5+1:4 D2+D3/5+1:2 | D2+D3/5+1:2 D2+D3/5+1:2 D2+D3/5+1:2 D2+D3/5+1:2",
  "D2+D3/5+1:4 D2+D3/5+1:4 | D2+D3/5+1:2 r:6",
].join(" | ");

/**
 * The print's left hand under one pair of its bars, in 4/4 eighths: a D chord with the octave on top, then
 * an open fifth on D. The hand keeps fingers 5 and 2 on the fifth throughout.
 */
const PEDAL_FIFTHS = `D2+A2+D3/5+2+1:1 ${Array<string>(7).fill("D2+A2/5+2:1").join(" ")} | ${Array<string>(3).fill(Array<string>(8).fill("D2+A2/5+2:1").join(" ")).join(" | ")}`;

/** `text` with every length times `factor`, so a line in quarters reads in eighths for 2. */
function scaled(text: string, factor: number): string {
  return text.replace(/:(\d+)/g, (_, units: string) => `:${factor * Number(units)}`);
}

/** `pattern` repeated `count` times, one bar each. */
function repeat(pattern: string, count: number): string {
  return Array(count).fill(pattern).join(" | ");
}

/** Rare's bass on A, in eighths: a half note, then two quarters, in one hand position. */
const PULSE_A = "A2/4:4 A2/4:2 A2/4:2";

/** Rare's bass on D, in eighths: a half note, then two quarters. */
const PULSE_D = "D3/1:4 D3/1:2 D3/1:2";

export const nightOnBaldMountain: OurSong = {
  slug: "night-on-bald-mountain",
  title: "Night on Bald Mountain",
  aka: ["Night on the Bare Mountain", "Eine Nacht auf dem Kahlen Berge", "St. John's Eve on Bald Mountain"],
  source: {
    composer: "Modest Mussorgsky",
    died: 1881,
    published: 1886,
    edition:
      "Night on Bald Mountain in Konstantin Chernov's piano arrangement, as the Mutopia Project's typeset prints it (Mutopia 1892, after IMSLP #19990): the brass theme's first two statements without their quick runs, bars 67 to 70, and the Poco più sostenuto, bars 82 to 89",
  },
  about:
    "Mussorgsky finished his musical picture of a witches' sabbath on Bald Mountain on St. John's Eve, 23 June 1867. " +
    "Five years after his death, Rimsky-Korsakov published his own arrangement of it in 1886. " +
    "Walt Disney's film Fantasia (1940) made it famous, in Leopold Stokowski's arrangement based on Rimsky-Korsakov's version.",
  funFact: "Together with Rimsky-Korsakov's Sadko, also from 1867, it is one of the first tone poems by a Russian composer.",
  mythic: null,
  collection: "film",
  tune: { text: tune, numerator: 4, denominator: 2, steps: 2, key: D_MINOR, hookBars: [1, 4] },
  versions: {
    common: {
      key: D_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      right: [TUNE_RIGHT, SOSTENUTO, SOSTENUTO, FALL, "A3/1:2 r:2", "D4/4:4"].join(" | "),
      left: [repeat("A2/4:4", 4), repeat("D3/1:4", 16), "A2+D3/4+1:4"].join(" | "),
      skills: ["five-finger-position", "held-bass", "position-change"],
      practice: [
        { text: "Play the first eight bars with the right hand alone, and let the song wait for each note. At bar 5 the thumb moves up to G.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play bars 9 to 21 with the right hand alone. The thumb starts on D, and moves down to B flat at bar 17.", hands: "right", speed: 0.6, loop: [9, 21], wait: true },
        { text: "Now the left hand alone. It holds one note for a whole bar.", hands: "left", speed: 0.6, loop: null, wait: true },
        { text: "Put both hands together on the first eight bars, slowly.", hands: "both", speed: 0.7, loop: [1, 8], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 4, kind: "sound", text: "Play the tune loud and heavy, like brass instruments calling in the night." },
        { fromBar: 4, toBar: 5, kind: "trick", text: "Use the long rest to move the right hand up to G." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "The tune comes back in longer notes. Play it calmer than at the start." },
        { fromBar: 16, toBar: 17, kind: "fingering", text: "Use the rest in bar 16 to move the hand down. The thumb then sits on B flat." },
      ],
      tricky: {
        5: "The hand has moved up. Finger 2 plays A, and finger 3 plays B flat.",
        9: "Move the hand back down in the rest, so the thumb sits on D. Finger 2 starts on E.",
        19: "The thumb plays B flat, then finger 4 plays E. Move the hand down in the rest, so the thumb takes A.",
      },
    },
    rare: {
      key: D_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [scaled(TUNE_RIGHT, 2), scaled(SOSTENUTO, 2), scaled(SOSTENUTO, 2), scaled(FALL, 2), scaled(OCTAVE_CALL, 2), "A3+D4/1+4:8"].join(" | "),
      left: [repeat(PULSE_A, 4), repeat(PULSE_D, 16), "A2+D3/4+1:8"].join(" | "),
      skills: ["two-note-chords", "eighth-notes"],
      practice: [
        { text: "Play the first eight bars with the right hand alone, and let the song wait for each note.", hands: "right", speed: 0.6, loop: [1, 8], wait: true },
        { text: "Play the left hand alone. It plays on beats 1, 3 and 4 of every bar.", hands: "left", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on bars 9 to 16, slowly.", hands: "both", speed: 0.6, loop: [9, 16], wait: true },
        { text: "Join the hands on bars 17 to 21. The right hand moves down to B flat, then to A.", hands: "both", speed: 0.6, loop: [17, 21], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Play the tune loud and heavy, like brass instruments calling in the night." },
        { fromBar: 1, toBar: 8, kind: "rhythm", text: "Count four beats in each bar. The bass plays on beats 1, 3 and 4." },
        { fromBar: 9, toBar: 20, kind: "fingering", text: "From bar 9 the left hand stays on D. Keep the thumb on it." },
        { fromBar: 20, toBar: 20, kind: "trick", text: "The low A calls up to the A above. Open the hand wide, and play both short." },
      ],
      tricky: {
        5: "The hand has moved up in the rest. Finger 2 plays A, and finger 3 plays B flat.",
        9: "Move the hand back down in the rest, so the thumb sits on D. Finger 2 starts on E.",
        21: "Bring the hand back from the high A in the rest. The thumb takes A and finger 4 takes D, held for the whole bar.",
      },
    },
    epic: {
      key: D_MINOR,
      bpm: 112,
      numerator: 4,
      denominator: 4,
      steps: 2,
      right: [TUNE_RUN_EIGHTHS, scaled(SOSTENUTO, 2), scaled(SOSTENUTO, 2), scaled(`${FALL} | ${OCTAVE_CALL}`, 2), scaled(`${FALL} | ${OCTAVE_CALL}`, 2), "D4+F4+A4/1+3+5:8"].join(" | "),
      left: [TUNE_LEFT, repeat(PEDAL_FIFTHS, 4), "D2+A2+D3/5+2+1:8"].join(" | "),
      markedClashBars: [19, 23],
      skills: ["thumb-under", "open-fifths", "position-change"],
      practice: [
        { text: "Play the left hand alone. Under the tune it strikes an octave with each note of the tune.", hands: "left", speed: 0.5, loop: [1, 8], wait: true },
        { text: "Play the run in bar 4 with the right hand alone. Pass the thumb under to G.", hands: "right", speed: 0.5, loop: [4, 5], wait: true },
        { text: "Play the left hand alone from bar 9. It repeats an open fifth on D in eighths.", hands: "left", speed: 0.5, loop: [9, 16], wait: true },
        { text: "Join the hands on bars 17 to 24, slowly.", hands: "both", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at full speed.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 1, toBar: 8, kind: "sound", text: "Strike each octave together with the tune, like a brass band marching in." },
        { fromBar: 4, toBar: 5, kind: "fingering", text: "In the run, pass the thumb under to G, then climb with fingers 2 to 5." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "Keep the fifths short and light. The tune sings above them." },
        { fromBar: 19, toBar: 23, kind: "sound", text: "B flat rubs against the low A. Mussorgsky wants this sharp clash, so play it boldly." },
      ],
      tricky: {
        5: "The left hand jumps down to the D octave. In the right hand, fingers 4, 3 and 2 come down from C to A.",
        9: "Move the right hand down in the rest, so the thumb sits on D. The left hand starts its fifths with a chord of three notes.",
        21: "Bring the right hand down from the high A in the rest. The thumb sits on B flat, and finger 4 plays E.",
      },
    },
    legendary: {
      key: D_MINOR,
      bpm: 120,
      numerator: 4,
      denominator: 4,
      steps: 4,
      right: [TUNE_RUN_SIXTEENTHS, scaled(SOSTENUTO, 4), scaled(SOSTENUTO, 4), FALL_LOWER_VOICE, FALL_LOWER_VOICE, "D4+F4+A4+D5/1+2+3+5:16"].join(" | "),
      left: [scaled(TUNE_LEFT, 2), repeat(scaled(PEDAL_FIFTHS, 2), 4), "D2+A2+D3/5+2+1:16"].join(" | "),
      markedClashBars: [19, 20, 23, 24],
      skills: ["sixteenth-notes", "octave-bass", "counter-melody"],
      practice: [
        { text: "Play the run in bars 4 and 5 with the right hand alone, very slowly.", hands: "right", speed: 0.4, loop: [4, 5], wait: true },
        { text: "Play the left hand alone: an octave with each note of the tune, then the low fifths from bar 9.", hands: "left", speed: 0.5, loop: [1, 16], wait: true },
        { text: "Play bars 17 to 24 with the right hand alone. Bars 19 and 20 take a low note under the tune, then leap up.", hands: "right", speed: 0.5, loop: [17, 24], wait: true },
        { text: "Play the whole song with both hands at three-quarter speed.", hands: "both", speed: 0.75, loop: null, wait: false },
        { text: "Now play it at full speed, and let the last chord ring.", hands: "both", speed: 1, loop: null, wait: false },
      ],
      tips: [
        { fromBar: 4, toBar: 5, kind: "trick", text: "The run swirls up and down like the wind. Keep it light and even." },
        { fromBar: 9, toBar: 16, kind: "sound", text: "The tune comes back in longer notes. Let it sing over the quiet fifths." },
        { fromBar: 19, toBar: 24, kind: "sound", text: "B flat against the low A, and C sharp against the low D, are Mussorgsky's own clashes. Play them boldly." },
        { fromBar: 25, toBar: 25, kind: "sound", text: "Play the last chord loud, and hold it until the sound fades." },
      ],
      tricky: {
        5: "The run lands on D with the thumb. Pass the thumb under again to G after F, then hold A with finger 2.",
        20: "C sharp clashes with the low D on purpose. Lift the hand in the short rest, then leap up to the high A with finger 5.",
        24: "The leap of bar 20 comes again. Lift the hand in the short rest, then land on the high A with finger 5.",
      },
    },
  },
  de: {
    about:
      "Mussorgski vollendete sein musikalisches Bild eines Hexensabbats auf dem Kahlen Berg in der Johannisnacht, am 23. Juni 1867. " +
      "Fünf Jahre nach seinem Tod veröffentlichte Rimski-Korsakow 1886 seine eigene Bearbeitung. " +
      "Walt Disneys Film Fantasia (1940) machte sie berühmt, in Leopold Stokowskis Bearbeitung nach Rimski-Korsakows Fassung.",
    funFact: "Zusammen mit Rimski-Korsakows Sadko, ebenfalls von 1867, ist es eine der ersten sinfonischen Dichtungen eines russischen Komponisten.",
    versions: {
      common: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten. In Takt 5 rückt der Daumen hinauf zum G.",
          "Spiel die Takte 9 bis 21 nur mit der rechten Hand. Der Daumen beginnt auf dem D und rückt in Takt 17 hinunter zum B.",
          "Jetzt die linke Hand allein. Sie hält einen Ton einen ganzen Takt lang.",
          "Spiel die ersten acht Takte langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel die Melodie laut und schwer, wie Blechbläser, die in die Nacht rufen.",
          "Nutz die lange Pause, um die rechte Hand hinauf zum G zu setzen.",
          "Die Melodie kehrt in längeren Tönen zurück. Spiel sie ruhiger als am Anfang.",
          "Nutz die Pause in Takt 16, um die Hand nach unten zu setzen. Dann liegt der Daumen auf dem B.",
        ],
        tricky: {
          5: "Die Hand ist nach oben gerückt. Finger 2 spielt das A, und Finger 3 spielt das B.",
          9: "Setz die Hand in der Pause wieder nach unten, sodass der Daumen auf dem D liegt. Finger 2 beginnt auf dem E.",
          19: "Der Daumen spielt das B, dann spielt Finger 4 das E. Setz die Hand in der Pause nach unten, sodass der Daumen das A nimmt.",
        },
      },
      rare: {
        practice: [
          "Spiel die ersten acht Takte nur mit der rechten Hand, und lass das Stück auf jeden Ton warten.",
          "Spiel die linke Hand allein. Sie spielt in jedem Takt auf den Schlägen 1, 3 und 4.",
          "Spiel die Takte 9 bis 16 langsam mit beiden Händen zusammen.",
          "Spiel die Takte 17 bis 21 mit beiden Händen zusammen. Die rechte Hand rückt hinunter zum B, dann zum A.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Spiel die Melodie laut und schwer, wie Blechbläser, die in die Nacht rufen.",
          "Zähl in jedem Takt vier Schläge. Der Bass spielt auf den Schlägen 1, 3 und 4.",
          "Ab Takt 9 bleibt die linke Hand auf dem D. Lass den Daumen darauf liegen.",
          "Das tiefe A ruft hinauf zum A darüber. Öffne die Hand weit, und spiel beide Töne kurz.",
        ],
        tricky: {
          5: "Die Hand ist in der Pause nach oben gerückt. Finger 2 spielt das A, und Finger 3 spielt das B.",
          9: "Setz die Hand in der Pause wieder nach unten, sodass der Daumen auf dem D liegt. Finger 2 beginnt auf dem E.",
          21: "Hol die Hand in der Pause vom hohen A zurück. Der Daumen nimmt das A und Finger 4 das D, einen ganzen Takt lang gehalten.",
        },
      },
      epic: {
        practice: [
          "Spiel die linke Hand allein. Unter der Melodie schlägt sie zu jedem Melodieton eine Oktave an.",
          "Spiel den Lauf in Takt 4 nur mit der rechten Hand. Führ den Daumen unter zum G.",
          "Spiel die linke Hand allein ab Takt 9. Sie wiederholt eine leere Quinte auf dem D in Achteln.",
          "Spiel die Takte 17 bis 24 langsam mit beiden Händen zusammen.",
          "Spiel das ganze Stück mit beiden Händen im vollen Tempo.",
        ],
        tips: [
          "Schlag jede Oktave zusammen mit der Melodie an, wie eine Blaskapelle, die einmarschiert.",
          "Führ im Lauf den Daumen unter zum G, dann steig mit Finger 2 bis 5 weiter.",
          "Spiel die Quinten kurz und leicht. Die Melodie singt über ihnen.",
          "Das B reibt sich am tiefen A. Mussorgski will diesen scharfen Zusammenklang, also spiel ihn kräftig.",
        ],
        tricky: {
          5: "Die linke Hand springt hinunter zur Oktave auf dem D. In der rechten Hand gehen Finger 4, 3 und 2 vom C hinab zum A.",
          9: "Setz die rechte Hand in der Pause nach unten, sodass der Daumen auf dem D liegt. Die linke Hand beginnt ihre Quinten mit einem Akkord aus drei Tönen.",
          21: "Hol die rechte Hand in der Pause vom hohen A herunter. Der Daumen liegt auf dem B, und Finger 4 spielt das E.",
        },
      },
      legendary: {
        practice: [
          "Spiel den Lauf in Takt 4 und 5 nur mit der rechten Hand, ganz langsam.",
          "Spiel die linke Hand allein: eine Oktave zu jedem Melodieton, dann ab Takt 9 die tiefen Quinten.",
          "Spiel die Takte 17 bis 24 nur mit der rechten Hand. Die Takte 19 und 20 nehmen einen tiefen Ton unter der Melodie mit, dann springt die Hand nach oben.",
          "Spiel das ganze Stück mit beiden Händen in Dreiviertel-Tempo.",
          "Jetzt spiel es im vollen Tempo, und lass den letzten Akkord klingen.",
        ],
        tips: [
          "Der Lauf wirbelt auf und ab wie der Wind. Spiel ihn leicht und gleichmäßig.",
          "Die Melodie kehrt in längeren Tönen zurück. Lass sie über den leisen Quinten singen.",
          "Das B gegen das tiefe A und das Cis gegen das tiefe D sind Mussorgskis eigene Reibungen. Spiel sie kräftig.",
          "Spiel den letzten Akkord laut, und halt ihn, bis der Klang verklingt.",
        ],
        tricky: {
          5: "Der Lauf landet mit dem Daumen auf dem D. Führ den Daumen nach dem F noch einmal unter zum G, dann halt das A mit Finger 2.",
          20: "Das Cis reibt sich absichtlich am tiefen D. Heb die Hand in der kurzen Pause, dann spring mit Finger 5 hinauf zum hohen A.",
          24: "Der Sprung aus Takt 20 kommt wieder. Heb die Hand in der kurzen Pause, dann lande mit Finger 5 auf dem hohen A.",
        },
      },
    },
  },
};

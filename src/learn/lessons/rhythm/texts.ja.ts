/** The Japanese texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourJa } from "./counting-to-four.ja";
import { halfNotesJa } from "./half-notes.ja";
import { odeToJoyJa } from "./ode-to-joy.ja";
import { quarterNotesJa } from "./quarter-notes.ja";
import { restsJa } from "./rests.ja";
import { tempoAndTheMetronomeJa } from "./tempo-and-the-metronome.ja";
import { theBeatJa } from "./the-beat.ja";
import { threeFourTimeJa } from "./three-four-time.ja";
import { wholeNotesJa } from "./whole-notes.ja";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourJa,
  "half-notes": halfNotesJa,
  "ode-to-joy": odeToJoyJa,
  "quarter-notes": quarterNotesJa,
  rests: restsJa,
  "tempo-and-the-metronome": tempoAndTheMetronomeJa,
  "the-beat": theBeatJa,
  "three-four-time": threeFourTimeJa,
  "whole-notes": wholeNotesJa,
};

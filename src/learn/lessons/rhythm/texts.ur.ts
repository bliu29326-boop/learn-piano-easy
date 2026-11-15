/** The Urdu texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourUr } from "./counting-to-four.ur";
import { halfNotesUr } from "./half-notes.ur";
import { odeToJoyUr } from "./ode-to-joy.ur";
import { quarterNotesUr } from "./quarter-notes.ur";
import { restsUr } from "./rests.ur";
import { tempoAndTheMetronomeUr } from "./tempo-and-the-metronome.ur";
import { theBeatUr } from "./the-beat.ur";
import { threeFourTimeUr } from "./three-four-time.ur";
import { wholeNotesUr } from "./whole-notes.ur";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourUr,
  "half-notes": halfNotesUr,
  "ode-to-joy": odeToJoyUr,
  "quarter-notes": quarterNotesUr,
  rests: restsUr,
  "tempo-and-the-metronome": tempoAndTheMetronomeUr,
  "the-beat": theBeatUr,
  "three-four-time": threeFourTimeUr,
  "whole-notes": wholeNotesUr,
};

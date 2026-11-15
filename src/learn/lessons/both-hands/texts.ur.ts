/** The Urdu texts of *Both hands*' lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteUr } from "./a-held-bass-note.ur";
import { changingTheBassOnTheBeatUr } from "./changing-the-bass-on-the-beat.ur";
import { dottedRhythmUr } from "./dotted-rhythm.ur";
import { eighthNotesUr } from "./eighth-notes.ur";
import { handsApartThenTogetherUr } from "./hands-apart-then-together.ur";
import { movingTheHandUr } from "./moving-the-hand.ur";
import { odeToJoyBothHandsUr } from "./ode-to-joy.ur";
import { openFifthsUr } from "./open-fifths.ur";
import { tuneAndBassTogetherUr } from "./tune-and-bass-together.ur";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteUr,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatUr,
  "dotted-rhythm": dottedRhythmUr,
  "eighth-notes": eighthNotesUr,
  "hands-apart-then-together": handsApartThenTogetherUr,
  "moving-the-hand": movingTheHandUr,
  "ode-to-joy": odeToJoyBothHandsUr,
  "open-fifths": openFifthsUr,
  "tune-and-bass-together": tuneAndBassTogetherUr,
};

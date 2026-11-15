/** The Japanese texts of *Both hands*' lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteJa } from "./a-held-bass-note.ja";
import { changingTheBassOnTheBeatJa } from "./changing-the-bass-on-the-beat.ja";
import { dottedRhythmJa } from "./dotted-rhythm.ja";
import { eighthNotesJa } from "./eighth-notes.ja";
import { handsApartThenTogetherJa } from "./hands-apart-then-together.ja";
import { movingTheHandJa } from "./moving-the-hand.ja";
import { odeToJoyBothHandsJa } from "./ode-to-joy.ja";
import { openFifthsJa } from "./open-fifths.ja";
import { tuneAndBassTogetherJa } from "./tune-and-bass-together.ja";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteJa,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatJa,
  "dotted-rhythm": dottedRhythmJa,
  "eighth-notes": eighthNotesJa,
  "hands-apart-then-together": handsApartThenTogetherJa,
  "moving-the-hand": movingTheHandJa,
  "ode-to-joy": odeToJoyBothHandsJa,
  "open-fifths": openFifthsJa,
  "tune-and-bass-together": tuneAndBassTogetherJa,
};

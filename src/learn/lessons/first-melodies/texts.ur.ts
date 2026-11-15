/** The Urdu texts of *First melodies*' lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsUr } from "./hands-take-turns.ur";
import { leftHandCPositionUr } from "./left-hand-c-position.ur";
import { maryUr } from "./mary-had-a-little-lamb.ur";
import { maryFirstPhraseUr } from "./mary-first-phrase.ur";
import { repeatedNotesUr } from "./repeated-notes.ur";
import { rightHandCPositionUr } from "./right-hand-c-position.ur";
import { skipsUr } from "./skips.ur";
import { stepsUr } from "./steps.ur";
import { twinkleFirstPhraseUr } from "./twinkle-first-phrase.ur";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsUr,
  "left-hand-c-position": leftHandCPositionUr,
  "mary-first-phrase": maryFirstPhraseUr,
  "mary-had-a-little-lamb": maryUr,
  "repeated-notes": repeatedNotesUr,
  "right-hand-c-position": rightHandCPositionUr,
  skips: skipsUr,
  steps: stepsUr,
  "twinkle-first-phrase": twinkleFirstPhraseUr,
};

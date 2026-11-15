/** The Japanese texts of *First melodies*' lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsJa } from "./hands-take-turns.ja";
import { leftHandCPositionJa } from "./left-hand-c-position.ja";
import { maryJa } from "./mary-had-a-little-lamb.ja";
import { maryFirstPhraseJa } from "./mary-first-phrase.ja";
import { repeatedNotesJa } from "./repeated-notes.ja";
import { rightHandCPositionJa } from "./right-hand-c-position.ja";
import { skipsJa } from "./skips.ja";
import { stepsJa } from "./steps.ja";
import { twinkleFirstPhraseJa } from "./twinkle-first-phrase.ja";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsJa,
  "left-hand-c-position": leftHandCPositionJa,
  "mary-first-phrase": maryFirstPhraseJa,
  "mary-had-a-little-lamb": maryJa,
  "repeated-notes": repeatedNotesJa,
  "right-hand-c-position": rightHandCPositionJa,
  skips: skipsJa,
  steps: stepsJa,
  "twinkle-first-phrase": twinkleFirstPhraseJa,
};

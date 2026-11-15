/** The Urdu texts of *Expression*'s lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoUr } from "./crescendo-and-diminuendo.ur";
import { furEliseRareUr } from "./fur-elise.ur";
import { legatoUr } from "./legato.ur";
import { loudAndSoftUr } from "./loud-and-soft.ur";
import { phrasesUr } from "./phrases.ur";
import { playingWithFeelingUr } from "./playing-with-feeling.ur";
import { slowingDownUr } from "./slowing-down.ur";
import { staccatoUr } from "./staccato.ur";
import { theSustainPedalUr } from "./the-sustain-pedal.ur";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoUr,
  "fur-elise": furEliseRareUr,
  legato: legatoUr,
  "loud-and-soft": loudAndSoftUr,
  phrases: phrasesUr,
  "playing-with-feeling": playingWithFeelingUr,
  "slowing-down": slowingDownUr,
  staccato: staccatoUr,
  "the-sustain-pedal": theSustainPedalUr,
};

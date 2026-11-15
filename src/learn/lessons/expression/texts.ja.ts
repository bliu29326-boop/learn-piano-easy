/** The Japanese texts of *Expression*'s lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoJa } from "./crescendo-and-diminuendo.ja";
import { furEliseRareJa } from "./fur-elise.ja";
import { legatoJa } from "./legato.ja";
import { loudAndSoftJa } from "./loud-and-soft.ja";
import { phrasesJa } from "./phrases.ja";
import { playingWithFeelingJa } from "./playing-with-feeling.ja";
import { slowingDownJa } from "./slowing-down.ja";
import { staccatoJa } from "./staccato.ja";
import { theSustainPedalJa } from "./the-sustain-pedal.ja";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoJa,
  "fur-elise": furEliseRareJa,
  legato: legatoJa,
  "loud-and-soft": loudAndSoftJa,
  phrases: phrasesJa,
  "playing-with-feeling": playingWithFeelingJa,
  "slowing-down": slowingDownJa,
  staccato: staccatoJa,
  "the-sustain-pedal": theSustainPedalJa,
};

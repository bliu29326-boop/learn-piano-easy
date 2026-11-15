/** The Urdu texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsUr } from "./black-key-groups.ur";
import { findCUr } from "./find-c.ur";
import { fingerNumbersUr } from "./finger-numbers.ur";
import { highAndLowUr } from "./high-and-low.ur";
import { keyHuntUr } from "./key-hunt.ur";
import { octavesUr } from "./octaves.ur";
import { sittingAtThePianoUr } from "./sitting-at-the-piano.ur";
import { theWhiteKeysUr } from "./the-white-keys.ur";
import { welcomeUr } from "./welcome.ur";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsUr,
  "find-c": findCUr,
  "finger-numbers": fingerNumbersUr,
  "high-and-low": highAndLowUr,
  "key-hunt": keyHuntUr,
  octaves: octavesUr,
  "sitting-at-the-piano": sittingAtThePianoUr,
  "the-white-keys": theWhiteKeysUr,
  welcome: welcomeUr,
};

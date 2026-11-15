/** The Japanese texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsJa } from "./black-key-groups.ja";
import { findCJa } from "./find-c.ja";
import { fingerNumbersJa } from "./finger-numbers.ja";
import { highAndLowJa } from "./high-and-low.ja";
import { keyHuntJa } from "./key-hunt.ja";
import { octavesJa } from "./octaves.ja";
import { sittingAtThePianoJa } from "./sitting-at-the-piano.ja";
import { theWhiteKeysJa } from "./the-white-keys.ja";
import { welcomeJa } from "./welcome.ja";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsJa,
  "find-c": findCJa,
  "finger-numbers": fingerNumbersJa,
  "high-and-low": highAndLowJa,
  "key-hunt": keyHuntJa,
  octaves: octavesJa,
  "sitting-at-the-piano": sittingAtThePianoJa,
  "the-white-keys": theWhiteKeysJa,
  welcome: welcomeJa,
};

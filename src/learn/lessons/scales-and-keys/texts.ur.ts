/** The Urdu texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorUr } from "./f-major.ur";
import { fingerOverTheThumbUr } from "./finger-over-the-thumb.ur";
import { flatsUr } from "./flats.ur";
import { gMajorUr } from "./g-major.ur";
import { halfAndWholeStepsUr } from "./half-and-whole-steps.ur";
import { jingleBellsUr } from "./jingle-bells.ur";
import { keySignaturesUr } from "./key-signatures.ur";
import { sharpsUr } from "./sharps.ur";
import { theCMajorScaleUr } from "./the-c-major-scale.ur";

export const texts: WorldTexts = {
  "f-major": fMajorUr,
  "finger-over-the-thumb": fingerOverTheThumbUr,
  flats: flatsUr,
  "g-major": gMajorUr,
  "half-and-whole-steps": halfAndWholeStepsUr,
  "jingle-bells": jingleBellsUr,
  "key-signatures": keySignaturesUr,
  sharps: sharpsUr,
  "the-c-major-scale": theCMajorScaleUr,
};

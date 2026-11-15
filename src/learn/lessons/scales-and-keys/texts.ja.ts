/** The Japanese texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorJa } from "./f-major.ja";
import { fingerOverTheThumbJa } from "./finger-over-the-thumb.ja";
import { flatsJa } from "./flats.ja";
import { gMajorJa } from "./g-major.ja";
import { halfAndWholeStepsJa } from "./half-and-whole-steps.ja";
import { jingleBellsJa } from "./jingle-bells.ja";
import { keySignaturesJa } from "./key-signatures.ja";
import { sharpsJa } from "./sharps.ja";
import { theCMajorScaleJa } from "./the-c-major-scale.ja";

export const texts: WorldTexts = {
  "f-major": fMajorJa,
  "finger-over-the-thumb": fingerOverTheThumbJa,
  flats: flatsJa,
  "g-major": gMajorJa,
  "half-and-whole-steps": halfAndWholeStepsJa,
  "jingle-bells": jingleBellsJa,
  "key-signatures": keySignaturesJa,
  sharps: sharpsJa,
  "the-c-major-scale": theCMajorScaleJa,
};

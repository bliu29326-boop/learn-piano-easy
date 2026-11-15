/** The Japanese texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksJa } from "./bass-landmarks.ja";
import { middleCJa } from "./middle-c.ja";
import { oldMacDonaldJa } from "./old-macdonald.ja";
import { readingStepsAndSkipsJa } from "./reading-steps-and-skips.ja";
import { theBassClefJa } from "./the-bass-clef.ja";
import { theGrandStaffJa } from "./the-grand-staff.ja";
import { theStaffJa } from "./the-staff.ja";
import { theTrebleClefJa } from "./the-treble-clef.ja";
import { trebleLandmarksJa } from "./treble-landmarks.ja";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksJa,
  "middle-c": middleCJa,
  "old-macdonald": oldMacDonaldJa,
  "reading-steps-and-skips": readingStepsAndSkipsJa,
  "the-bass-clef": theBassClefJa,
  "the-grand-staff": theGrandStaffJa,
  "the-staff": theStaffJa,
  "the-treble-clef": theTrebleClefJa,
  "treble-landmarks": trebleLandmarksJa,
};

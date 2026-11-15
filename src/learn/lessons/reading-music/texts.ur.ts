/** The Urdu texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksUr } from "./bass-landmarks.ur";
import { middleCUr } from "./middle-c.ur";
import { oldMacDonaldUr } from "./old-macdonald.ur";
import { readingStepsAndSkipsUr } from "./reading-steps-and-skips.ur";
import { theBassClefUr } from "./the-bass-clef.ur";
import { theGrandStaffUr } from "./the-grand-staff.ur";
import { theStaffUr } from "./the-staff.ur";
import { theTrebleClefUr } from "./the-treble-clef.ur";
import { trebleLandmarksUr } from "./treble-landmarks.ur";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksUr,
  "middle-c": middleCUr,
  "old-macdonald": oldMacDonaldUr,
  "reading-steps-and-skips": readingStepsAndSkipsUr,
  "the-bass-clef": theBassClefUr,
  "the-grand-staff": theGrandStaffUr,
  "the-staff": theStaffUr,
  "the-treble-clef": theTrebleClefUr,
  "treble-landmarks": trebleLandmarksUr,
};

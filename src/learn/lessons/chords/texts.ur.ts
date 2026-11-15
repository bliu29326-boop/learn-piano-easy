/** The Urdu texts of *Chords*' lessons, by lesson id. `World.loadTexts("ur")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassUr } from "./alberti-bass.ur";
import { brokenChordsUr } from "./broken-chords.ur";
import { cFAndGUr } from "./c-f-and-g.ur";
import { canonInDRareUr } from "./canon-in-d.ur";
import { inversionsUr } from "./inversions.ur";
import { majorTriadsUr } from "./major-triads.ur";
import { minorTriadsUr } from "./minor-triads.ur";
import { theWaltzBassUr } from "./the-waltz-bass.ur";
import { whatAChordIsUr } from "./what-a-chord-is.ur";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassUr,
  "broken-chords": brokenChordsUr,
  "c-f-and-g": cFAndGUr,
  "canon-in-d": canonInDRareUr,
  inversions: inversionsUr,
  "major-triads": majorTriadsUr,
  "minor-triads": minorTriadsUr,
  "the-waltz-bass": theWaltzBassUr,
  "what-a-chord-is": whatAChordIsUr,
};

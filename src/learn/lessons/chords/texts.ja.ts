/** The Japanese texts of *Chords*' lessons, by lesson id. `World.loadTexts("ja")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { albertiBassJa } from "./alberti-bass.ja";
import { brokenChordsJa } from "./broken-chords.ja";
import { cFAndGJa } from "./c-f-and-g.ja";
import { canonInDRareJa } from "./canon-in-d.ja";
import { inversionsJa } from "./inversions.ja";
import { majorTriadsJa } from "./major-triads.ja";
import { minorTriadsJa } from "./minor-triads.ja";
import { theWaltzBassJa } from "./the-waltz-bass.ja";
import { whatAChordIsJa } from "./what-a-chord-is.ja";

export const texts: WorldTexts = {
  "alberti-bass": albertiBassJa,
  "broken-chords": brokenChordsJa,
  "c-f-and-g": cFAndGJa,
  "canon-in-d": canonInDRareJa,
  inversions: inversionsJa,
  "major-triads": majorTriadsJa,
  "minor-triads": minorTriadsJa,
  "the-waltz-bass": theWaltzBassJa,
  "what-a-chord-is": whatAChordIsJa,
};

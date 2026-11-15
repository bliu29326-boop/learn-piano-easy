/** The boss of *Both hands* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { OdeToJoyBothHandsTexts } from "./ode-to-joy.en";

export const odeToJoyBothHandsUr: Translation<OdeToJoyBothHandsTexts> = {
  title: `آخری چیلنج: دونوں ہاتھوں سے ${isolate("Ode to Joy")}`,
  steps: {
    intro: {
      text: `یہ دھن آپ "ردھم" والی دنیا سے جانتے ہیں۔ اب بایاں ہاتھ بھی ساتھ شامل ہوتا ہے، دھن کے نیچے ${isolate("C")} پوزیشن میں۔`,
    },
    song: {
      text: `${isolate("Ode to Joy")} کے پہلے آٹھ میژر دونوں ہاتھوں سے بجائیں۔ بیس کی ہر جوڑی اگلی جوڑی آنے تک دبائے رکھیں۔ گانا آپ کا انتظار کرے گا۔`,
    },
  },
};

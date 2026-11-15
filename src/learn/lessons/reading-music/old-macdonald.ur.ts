/** *Boss: Old MacDonald Had a Farm* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { OldMacDonaldTexts } from "./old-macdonald.en";

export const oldMacDonaldUr: Translation<OldMacDonaldTexts> = {
  title: `آخری چیلنج: ${isolate("Old MacDonald Had a Farm")}`,
  steps: {
    intro: {
      text: `اس بار گرتے ہوئے نوٹ نہیں ہوں گے۔ گانا شیٹ میوزک سے پڑھیں، جیسے پیانو بجانے والے پڑھتے ہیں۔ یہ دوسری لائن والے ${isolate("G")} سے شروع ہوتا ہے۔`,
    },
    song: {
      text: `شیٹ سے ${isolate("Old MacDonald")} کے پہلے چار میژر پڑھیں، اور انہیں دائیں ہاتھ سے بجائیں۔ گانا ہر نوٹ پر آپ کا انتظار کرے گا۔`,
    },
  },
};

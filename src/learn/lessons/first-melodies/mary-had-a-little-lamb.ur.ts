/** The boss of *First melodies* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { MaryTexts } from "./mary-had-a-little-lamb.en";

export const maryUr: Translation<MaryTexts> = {
  title: `آخری چیلنج: ${isolate("Mary Had a Little Lamb")}`,
  steps: {
    intro: {
      text: "یہ دنیا ایک پورے گانے پر ختم ہوتی ہے۔ یہ گانا پلیئر میں بجتا ہے، اور ہر نوٹ پر آپ کا انتظار کرتا ہے۔",
    },
    song: {
      text: `${isolate("Mary Had a Little Lamb")} کے آٹھوں میژر دائیں ہاتھ سے بجائیں۔`,
    },
  },
};

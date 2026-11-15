/** The boss of *Rhythm* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { OdeToJoyTexts } from "./ode-to-joy.en";

export const odeToJoyUr: Translation<OdeToJoyTexts> = {
  title: `آخری چیلنج: ${isolate("Ode to Joy")}`,
  steps: {
    intro: {
      text: "یہ دنیا ایک مشہور دھن پر ختم ہوتی ہے۔ اس کا تقریباً ہر نوٹ کوارٹر نوٹ ہے، اور آخری نوٹ دو بیٹ تک چلتا ہے۔ بجاتے ہوئے ساتھ ساتھ گنتے رہیں۔",
    },
    song: {
      text: `${isolate("Ode to Joy")} کے پہلے چار میژر دائیں ہاتھ سے بجائیں۔ آخری نوٹ دو بیٹ تک دبائے رکھیں۔`,
    },
  },
};

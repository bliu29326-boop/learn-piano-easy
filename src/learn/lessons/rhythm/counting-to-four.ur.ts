/** *Counting to four* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourUr: Translation<CountingToFourTexts> = {
  title: "چار تک گنتی",
  steps: {
    "bars-demo": {
      text: `دیکھیں اور سنیں۔ چار بیٹ کا ہر گروپ نیچے والے ${isolate("C")} سے شروع ہوتا ہے، اور باقی تین بیٹ پر ${isolate("G")} بجتا ہے۔`,
    },
    "what-a-bar-is": {
      text: `بیٹ میژر میں بٹی ہوتی ہیں، اور ہر میژر ایک میژر لائن پر ختم ہوتا ہے۔ یہاں ہر میژر میں چار بیٹ ہیں، جنہیں "1، 2، 3، 4" گنا جاتا ہے۔ یہ ${isolate("4/4")} ٹائم ہے، اور بیٹ 1 سب سے زور والی ہوتی ہے۔`,
    },
    "beats-in-a-bar-quiz": {
      text: `${isolate("4/4")} ٹائم کے ایک میژر میں کتنی بیٹ ہوتی ہیں؟`,
      answers: ["تین بیٹ", "چار بیٹ", "آٹھ بیٹ"],
    },
    "strongest-beat-quiz": {
      text: "میژر کی کون سی بیٹ سب سے زور والی لگتی ہے؟",
      answers: ["بیٹ 1", "بیٹ 2", "بیٹ 4"],
    },
    "count-aloud-tap": {
      text: "\"شروع کریں\" دبائیں، اور ہر ٹک پر کوئی بھی کلید دبائیں۔ دباتے ہوئے اونچی آواز میں گنیں: \"1، 2، 3، 4\"۔ بیٹ 1 تھوڑا زور سے بولیں۔",
    },
    "fill-a-bar-quiz": {
      text: `ان میں سے کون سا ${isolate("4/4")} ٹائم کا ایک میژر بھرتا ہے؟`,
      answers: ["دو ہاف نوٹ", "تین کوارٹر نوٹ", "ایک ہول نوٹ اور ایک کوارٹر نوٹ"],
    },
    recap: {
      text: "شاباش! اب آپ چار بیٹ والے میژر گن سکتے ہیں۔",
      points: [
        "بیٹ میژر میں بٹی ہوتی ہیں، اور ہر میژر ایک میژر لائن پر ختم ہوتا ہے۔",
        `${isolate("4/4")} ٹائم میں "1، 2، 3، 4" گنیں۔`,
        "بیٹ 1 میژر کی سب سے زور والی بیٹ ہے۔",
      ],
    },
  },
};

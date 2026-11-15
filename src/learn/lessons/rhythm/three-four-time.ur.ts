/** *Three-four time* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { ThreeFourTimeTexts } from "./three-four-time.en";

export const threeFourTimeUr: Translation<ThreeFourTimeTexts> = {
  title: `${isolate("3/4")} ٹائم`,
  steps: {
    "waltz-demo": {
      text: "دیکھیں اور سنیں۔ پہلی بیٹ پر ایک نیچی پچ والا نوٹ بجتا ہے، اور اگلی دو بیٹ پر اونچی پچ والے نوٹ۔ یہ پیٹرن بار بار دہرایا جاتا ہے۔",
    },
    "beats-in-threes": {
      text: `کچھ موسیقی اپنی بیٹ کو تین تین کے گروپ میں رکھتی ہے۔ اسے "1، 2، 3، 1، 2، 3" گنیں، اور بیٹ 1 سب سے زور والی ہے۔ یہ ${isolate("3/4")} ٹائم ہے، والز کا ٹائم۔`,
    },
    "beats-in-a-bar-quiz": {
      text: `${isolate("3/4")} ٹائم کے ایک میژر میں کتنی بیٹ ہوتی ہیں؟`,
      answers: ["دو", "تین", "چار"],
    },
    "which-is-a-waltz-quiz": {
      text: `والز ${isolate("3/4")} ٹائم میں ہوتا ہے۔ اسے کیسے گنیں گے؟`,
      answers: ["1، 2، 3، 1، 2، 3", "1، 2، 3، 4، 1، 2، 3، 4"],
    },
    "tap-in-threes": {
      text: "\"شروع کریں\" دبائیں، اور پہلے چار ٹک سنیں۔ پھر ہر ٹک پر کوئی بھی کلید دبائیں، اور اونچی آواز میں \"1، 2، 3\" گنیں۔ ہر \"1\" تھوڑا زور سے بولیں۔",
    },
    recap: {
      text: "شاباش! اب آپ تین تین کر کے گن سکتے ہیں۔",
      points: [
        "کچھ موسیقی اپنی بیٹ کو تین تین کے گروپ میں رکھتی ہے۔",
        `${isolate("3/4")} ٹائم کے میژر میں تین بیٹ ہوتی ہیں، جنہیں "1، 2، 3" گنا جاتا ہے۔`,
        "بیٹ 1 سب سے زور والی ہے، جیسے والز میں۔",
      ],
    },
  },
};

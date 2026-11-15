/** *The treble clef* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { TheTrebleClefTexts } from "./the-treble-clef.en";

export const theTrebleClefUr: Translation<TheTrebleClefTexts> = {
  title: "ٹریبل کلیف",
  steps: {
    "a-clef-starts-the-staff": {
      text: "ہر اسٹاف کلیف سے شروع ہوتا ہے۔ کلیف بتاتا ہے کہ کون سی لائن اور کون سی اسپیس کس نوٹ کی ہے۔ دایاں ہاتھ زیادہ تر ٹریبل کلیف پڑھتا ہے۔",
    },
    "the-g-line": {
      text: `ٹریبل کلیف نیچے سے دوسری لائن کے گرد لپٹا ہوتا ہے۔ وہ لائن ${isolate("G")} ہے، اس لیے اس کلیف کو ${isolate("G")} کلیف بھی کہتے ہیں۔ یہ مڈل ${isolate("C")} کے اوپر والا پہلا ${isolate("G")} ہے۔`,
    },
    "g-line-quiz": {
      text: "ٹریبل کلیف کس لائن کے گرد لپٹا ہوتا ہے؟",
      answers: ["سب سے نیچے والی لائن", "نیچے سے دوسری لائن", "سب سے اوپر والی لائن"],
    },
    "hear-g-demo": {
      text: `سنیں۔ یہ دوسری لائن والا ${isolate("G")} ہے، جو دو بار بجایا جا رہا ہے۔`,
    },
    "play-g": {
      text: `یہ نوٹ ${isolate("G")} والی لائن پر ہے۔ اسے پیانو پر بجائیں۔`,
    },
    "g-neighbours": {
      text: `${isolate("G")} سے اس کے پڑوسی نوٹ ڈھونڈے جا سکتے ہیں۔ ایک قدم اوپر، اوپر والی اسپیس میں، ${isolate("A")} ہے۔ ایک قدم نیچے، نیچے والی اسپیس میں، ${isolate("F")} ہے۔`,
    },
    "neighbours-demo": {
      text: `دیکھیں اور سنیں: ${isolate("G")}، ایک قدم اوپر ${isolate("A")}، واپس ${isolate("G")}، ایک قدم نیچے ${isolate("F")}، اور پھر واپس ${isolate("G")}۔`,
    },
    "space-above-g-quiz": {
      text: `ایک نوٹ ${isolate("G")} والی لائن کے بالکل اوپر والی اسپیس میں ہے۔ یہ کون سا نوٹ ہے؟`,
      answers: ["F", "A", "B"],
    },
    "one-more-step": {
      text: `اسی طرح حروف میں ایک ایک قدم آگے بڑھتے رہیں۔ ${isolate("A")} کے اوپر ${isolate("B")} آتا ہے، بیچ والی لائن پر۔ ${isolate("F")} کے نیچے ${isolate("E")} آتا ہے، سب سے نیچے والی لائن پر۔`,
    },
    "middle-line-quiz": {
      text: "ٹریبل کلیف میں بیچ والی لائن پر کون سا نوٹ ہے؟",
      answers: ["G", "A", "B"],
    },
    "play-treble-notes": {
      text: `جو نوٹ نظر آئے، اسے بجائیں۔ پہلے ${isolate("G")} والی لائن ڈھونڈیں، پھر اوپر یا نیچے قدم گنیں۔`,
    },
    "name-treble-notes": {
      text: `اب ہر نوٹ کا نام بتائیں۔ ${isolate("G")} والی لائن سے شروع کریں، اور قدم بہ قدم اوپر یا نیچے جائیں۔`,
    },
    recap: {
      text: "شاباش! اب آپ کو ٹریبل کلیف میں اپنے پہلے نوٹ پڑھنا آ گیا ہے۔",
      points: [
        `ٹریبل کلیف دوسری لائن کے گرد لپٹا ہوتا ہے، جو ${isolate("G")} ہے۔`,
        "ایک قدم اوپر یا نیچے جانے سے اگلی لائن یا اسپیس آتی ہے، اور اگلا حرف بھی۔",
        `${isolate("G")} کے آس پاس ${isolate("E")}، ${isolate("F")}، ${isolate("A")} اور ${isolate("B")} ہیں۔`,
      ],
    },
  },
};

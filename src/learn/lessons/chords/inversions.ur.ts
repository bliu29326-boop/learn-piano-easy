/** *Inversions* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { InversionsTexts } from "./inversions.en";

export const inversionsUr: Translation<InversionsTexts> = {
  title: "انورژن",
  steps: {
    "inversions-demo": {
      text: `تین کورڈ سنیں۔ ہر ایک میں ${isolate("C")}، ${isolate("E")} اور ${isolate("G")} ہی نوٹ ہیں۔ صرف ان کی ترتیب بدلتی ہے۔`,
    },
    "same-three-notes": {
      text: `جب ${isolate("C-E-G")} میں ${isolate("C")} سب سے نیچے ہو، تو یہ روٹ پوزیشن ہے۔ انورژن انہی تین نوٹوں کو کسی اور ترتیب میں بجاتا ہے۔ یہ پھر بھی ${isolate("C")} میجر ہی ہے۔`,
    },
    "root-position": {
      text: `${isolate("C")} میجر روٹ پوزیشن میں بجائیں: مڈل ${isolate("C")} سے ${isolate("C")}، ${isolate("E")} اور ${isolate("G")}، تینوں ایک ساتھ۔ انگلی 1، 3 اور 5 استعمال کریں۔`,
    },
    "first-inversion": {
      text: `اب سب سے نیچے والا نوٹ ایک آکٹیو اوپر لے جائیں۔ ${isolate("C-E-G")} بن جاتا ہے ${isolate("E-G-C")}۔ یہ پہلا انورژن ہے۔`,
    },
    "play-first-inversion": {
      text: `پہلا انورژن بجائیں: مڈل ${isolate("C")} سے اوپر ${isolate("E")} اور ${isolate("G")}، اور ان کے اوپر والا ${isolate("C")}۔ تینوں ایک ساتھ دبائیں۔`,
    },
    "which-chord-is-e-g-c": {
      text: `${isolate("E-G-C")} کی آواز ${isolate("C-E-G")} سے تھوڑی مختلف ہے۔ یہ کون سا کورڈ ہے؟`,
      answers: [`${isolate("A")} مائنر`, `${isolate("E")} مائنر`, `${isolate("C")} میجر`],
    },
    "second-inversion": {
      text: `سب سے نیچے والا نوٹ ایک بار اور اوپر لے جائیں۔ ${isolate("E-G-C")} بن جاتا ہے ${isolate("G-C-E")}۔ یہ دوسرا انورژن ہے۔`,
    },
    "play-second-inversion": {
      text: `دوسرا انورژن بجائیں: مڈل ${isolate("C")} سے اوپر والا ${isolate("G")}، پھر اس کے اوپر اگلا ${isolate("C")} اور ${isolate("E")}۔ تینوں ایک ساتھ دبائیں۔`,
    },
    "climb-the-inversions": {
      text: `${isolate("C")} میجر کے ساتھ کلیدوں پر اوپر چڑھیں: روٹ پوزیشن، پہلا انورژن، دوسرا انورژن، اور پھر ایک آکٹیو اوپر روٹ پوزیشن۔`,
    },
    "move-less": {
      text: `انورژن سے کورڈ بدلتے وقت ہاتھ کم ہلتا ہے۔ ${isolate("C-F-A")} کی شکل میں ${isolate("F")} میجر اور ${isolate("B-D-G")} کی شکل میں ${isolate("G")} میجر، دونوں ${isolate("C-E-G")} کے بالکل پاس ہیں۔`,
    },
    "close-chords-demo": {
      text: `${isolate("C")}، ${isolate("F")}، ${isolate("G")} اور ${isolate("C")} پھر سے سنیں۔ اس بار یہ پاس پاس بجتے ہیں۔ ہر انگلی صرف ایک یا دو کلید آگے پیچھے ہوتی ہے۔`,
    },
    "which-chord-is-c-f-a": {
      text: `${isolate("C-F-A")} میں ${isolate("F")}، ${isolate("A")} اور ${isolate("C")} کسی اور ترتیب میں ہیں۔ یہ کون سا کورڈ ہے؟`,
      answers: [`${isolate("C")} میجر`, `${isolate("F")} میجر`, `${isolate("A")} مائنر`],
    },
    "close-chords": {
      text: `مڈل ${isolate("C")} سے شروع کر کے ${isolate("C-E-G")}، ${isolate("C-F-A")}، ${isolate("B-D-G")} اور ${isolate("C-E-G")} بجائیں۔ ہاتھ ایک ہی جگہ رکھیں، اور انگلیوں کو حرکت کرنے دیں۔`,
    },
    "close-chords-with-bass": {
      text: `اب ہر کورڈ کے نیچے بائیں ہاتھ سے روٹ نوٹ بھی بجائیں: مڈل ${isolate("C")} سے نیچے ${isolate("C")}، ${isolate("F")}، ${isolate("G")} اور ${isolate("C")}۔`,
    },
    recap: {
      text: "شاباش! اب آپ ایک کورڈ تین پوزیشنوں میں بجا سکتے ہیں۔",
      points: [
        "انورژن کورڈ کے تین نوٹوں کو کسی اور ترتیب میں بجاتا ہے۔",
        `سب سے نیچے والا نوٹ ایک آکٹیو اوپر لے جائیں: ${isolate("C-E-G")} بن جاتا ہے ${isolate("E-G-C")}، پھر ${isolate("G-C-E")}۔`,
        `کورڈ وہی رہتا ہے: ${isolate("E-G-C")} اور ${isolate("G-C-E")} بھی ${isolate("C")} میجر ہی ہیں۔`,
        "انورژن کورڈ کو پاس پاس رکھتے ہیں، اس لیے ہاتھ کم ہلتا ہے۔",
      ],
    },
  },
};

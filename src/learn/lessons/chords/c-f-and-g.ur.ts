/** *C, F and G* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { CFAndGTexts } from "./c-f-and-g.en";

export const cFAndGUr: Translation<CFAndGTexts> = {
  title: `${isolate("C")}، ${isolate("F")} اور ${isolate("G")}`,
  steps: {
    "progression-demo": {
      text: `چار کورڈ سنیں: ${isolate("C")}، ${isolate("F")}، ${isolate("G")} اور واپس ${isolate("C")}۔ یہ ایک چھوٹے سے گانے کی طرح لگتے ہیں، جو ${isolate("C")} پر آ کر ٹھہر جاتا ہے۔`,
    },
    "three-main-chords": {
      text: `${isolate("C")} میجر اسکیل کے پہلے، چوتھے اور پانچویں درجے پر ٹرائیڈ بنائیں۔ یہ ${isolate("C")}، ${isolate("F")} اور ${isolate("G")} ہیں، ${isolate("C")} میجر کے تین اہم کورڈ۔`,
    },
    "fourth-step": {
      text: `${isolate("C")} سے ${isolate("C")} میجر اسکیل اوپر کی طرف گنیں۔ اس کا چوتھا درجہ کون سا نوٹ ہے؟`,
      answers: ["E", "G", "D", "F"],
    },
    "the-f-triad": {
      text: `${isolate("F")} ٹرائیڈ ہے ${isolate("F")}، ${isolate("A")} اور ${isolate("C")}۔ یہ ${isolate("C")} میجر کی طرح میجر ٹرائیڈ ہے، اس لیے انگلیوں کی شکل وہی رہتی ہے۔`,
    },
    "c-and-f": {
      text: `اب آپ کی باری۔ مڈل ${isolate("C")} سے انگلی 1، 3 اور 5 کے ساتھ ${isolate("C")} میجر بجائیں۔ پھر ${isolate("F")} ٹرائیڈ کے لیے انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("F")} پر لے جائیں، اور واپس ${isolate("C")} پر آئیں۔`,
    },
    "g-triad-notes": {
      text: `${isolate("G")} ٹرائیڈ اسکیل کے پانچویں درجے پر بنتا ہے۔ یہ کن نوٹوں سے بنتا ہے؟`,
      answers: [
        `${isolate("G")}، ${isolate("B")} فلیٹ اور ${isolate("D")}`,
        `${isolate("G")}، ${isolate("B")} اور ${isolate("D")}`,
        `${isolate("G")}، ${isolate("A")} اور ${isolate("B")}`,
        `${isolate("F")}، ${isolate("A")} اور ${isolate("C")}`,
      ],
    },
    "c-and-g": {
      text: `مڈل ${isolate("C")} سے ${isolate("C")} میجر بجائیں، پھر ${isolate("G")} ٹرائیڈ کے لیے انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("G")} پر لے جائیں، اور واپس ${isolate("C")} پر آئیں۔`,
    },
    "move-the-hand": {
      text: "ایک کورڈ سے اگلے کورڈ پر پورا ہاتھ اٹھا کر لے جائیں۔ انگلی 1، 3 اور 5 کی شکل ویسی ہی رکھیں، اور انگوٹھے کو نیا روٹ نوٹ ڈھونڈنے دیں۔",
    },
    "c-f-g-c": {
      text: `دائیں ہاتھ سے چار کورڈ بجائیں: مڈل ${isolate("C")} سے ${isolate("C-E-G")}، پھر ${isolate("F-A-C")}، ${isolate("G-B-D")} اور ${isolate("C-E-G")}۔ کورڈ بدلتے ہوئے جلدی نہ کریں۔`,
    },
    "left-hand-chords": {
      text: "بایاں ہاتھ یہی کورڈ نیچے بجاتا ہے، انگلی 5، 3 اور 1 سے۔ انگلی 5 روٹ نوٹ پر رہتی ہے۔",
    },
    "left-c-f-g-c": {
      text: `بائیں ہاتھ کی انگلی 5 مڈل ${isolate("C")} سے نیچے والے ${isolate("C")} پر رکھیں۔ ${isolate("C")}، ${isolate("F")}، ${isolate("G")} اور ${isolate("C")} بجائیں، اور انگلی 5 کو ہر کورڈ کے روٹ نوٹ پر لے جائیں۔`,
    },
    "tune-demo": {
      text: "یہ رہی ان تین کورڈ پر ایک چھوٹی سی دھن۔ بایاں ہاتھ ہر کورڈ بجاتا ہے، اور دایاں ہاتھ اس کے اوپر دو نوٹ۔",
    },
    tune: {
      text: `دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("G")} پر رکھیں۔ ہر کورڈ کو اس کے میژر کے پہلے نوٹ کے ساتھ بجائیں، پھر دوسرا نوٹ اکیلا۔ آخری میژر میں دوسرا نوٹ نہیں ہے۔`,
    },
    recap: {
      text: `شاباش! اب آپ ${isolate("C")} میجر کے تین اہم کورڈ بجا سکتے ہیں۔`,
      points: [
        `${isolate("C")}، ${isolate("F")} اور ${isolate("G")} وہ ٹرائیڈ ہیں جو ${isolate("C")} میجر کے پہلے، چوتھے اور پانچویں درجے پر بنتے ہیں۔`,
        `${isolate("F")} ٹرائیڈ ہے ${isolate("F")}، ${isolate("A")} اور ${isolate("C")}، اور ${isolate("G")} ٹرائیڈ ہے ${isolate("G")}، ${isolate("B")} اور ${isolate("D")}۔`,
        "کورڈ بدلتے وقت پورا ہاتھ اٹھائیں اور اس کی شکل ویسی ہی رکھیں۔",
        `${isolate("G")} سے واپس ${isolate("C")} پر آنا مکمل لگتا ہے۔`,
      ],
    },
  },
};

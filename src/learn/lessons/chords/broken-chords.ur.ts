/** *Broken chords* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { BrokenChordsTexts } from "./broken-chords.en";

export const brokenChordsUr: Translation<BrokenChordsTexts> = {
  title: "بروکن کورڈ",
  steps: {
    "broken-demo": {
      text: `${isolate("C")} میجر سنیں، ایک وقت میں ایک نوٹ۔ یہ اوپر جاتا ہے اور واپس نیچے آتا ہے۔ کورڈ پھر بھی سنائی دیتا ہے۔`,
    },
    "one-after-another": {
      text: "بروکن کورڈ میں کورڈ کے نوٹ ایک ساتھ نہیں، بلکہ ایک کے بعد ایک بجتے ہیں۔ نوٹ وہی ہیں، اس لیے کورڈ بھی وہی ہے۔",
    },
    "chord-together": {
      text: `پہلے ${isolate("C")} میجر ایک ساتھ بجائیں: مڈل ${isolate("C")} سے ${isolate("C")}، ${isolate("E")} اور ${isolate("G")}، انگلی 1، 3 اور 5 سے۔`,
    },
    "broken-up": {
      text: `اب اسے توڑیں۔ ہاتھ اپنی جگہ پر رکھیں اور ${isolate("C")} بجائیں، پھر ${isolate("E")}، پھر ${isolate("G")}۔`,
    },
    "which-chord-broken": {
      text: `آپ نے ${isolate("C")}، ${isolate("E")} اور ${isolate("G")} ایک ایک کر کے بجائے۔ آپ نے کون سا کورڈ بجایا؟`,
      answers: [`${isolate("F")} میجر`, `${isolate("C")} میجر`, `${isolate("A")} مائنر`, `${isolate("G")} میجر`],
    },
    "up-and-down": {
      text: `بروکن کورڈ اکثر اوپر جا کر واپس نیچے آتا ہے: ${isolate("C")}، ${isolate("E")}، ${isolate("G")}، ${isolate("E")}۔ بار بار بجانے پر یہ لہر کی طرح جھولتا ہے۔`,
    },
    "broken-up-and-down": {
      text: `${isolate("C")}، ${isolate("E")}، ${isolate("G")}، ${isolate("E")} دو بار بجائیں، اور ${isolate("C")} پر ختم کریں۔ ہاتھ ایک ہی جگہ رکھیں، اور انگلیوں کو جھولنے دیں۔`,
    },
    "three-chords-broken": {
      text: `دائیں ہاتھ سے مڈل ${isolate("C")} سے شروع کر کے تین کورڈ توڑ کر بجائیں: ${isolate("C-E-G-E")}، ${isolate("F-A-C-A")} اور ${isolate("G-B-D-B")}۔ آخر میں ${isolate("C")}، ${isolate("E")} اور ${isolate("G")} بجائیں۔ ہر کورڈ کے ساتھ ہاتھ آگے بڑھائیں۔`,
    },
    "which-is-broken": {
      text: `ان میں سے کون سا بروکن ${isolate("C")} میجر کورڈ ہے؟`,
      answers: ["C-D-E-F", "C-D-C-D", "E-F-G-A", "C-E-G-E"],
    },
    "left-hand-broken": {
      text: "بایاں ہاتھ اکثر دھن کے نیچے بروکن کورڈ بجاتا ہے۔ اس سے کورڈ سنائی دیتا رہتا ہے، اور دایاں ہاتھ دھن گاتا ہے۔",
    },
    "left-hand-demo": {
      text: `ایک چھوٹی سی دھن سنیں۔ بایاں ہاتھ ${isolate("C")} میجر توڑ کر بجاتا ہے، پھر ${isolate("G")} میجر، پھر دوبارہ ${isolate("C")} میجر۔`,
    },
    "left-hand-alone": {
      text: `مڈل ${isolate("C")} سے نیچے والے ${isolate("C")} سے شروع کر کے صرف بایاں ہاتھ بجائیں: ${isolate("C-E-G-E")}، پھر اس سے نیچے والے ${isolate("G")} سے ${isolate("G-B-D-B")}، پھر ${isolate("C-E-G-E")}۔`,
    },
    "tune-over-broken-chords": {
      text: `اب دائیں ہاتھ سے ${isolate("C")} پوزیشن میں دھن بھی بجائیں۔ دھن کا ہر نوٹ بائیں ہاتھ کے کسی نوٹ کے ساتھ ہی شروع ہوتا ہے۔`,
    },
    recap: {
      text: "شاباش! اب آپ دونوں ہاتھوں سے کورڈ توڑ کر بجا سکتے ہیں۔",
      points: [
        "بروکن کورڈ اپنے نوٹ ایک کے بعد ایک بجاتا ہے۔",
        "نوٹ وہی ہیں، اس لیے کورڈ کی آواز بھی وہی ہے۔",
        `ایک عام پیٹرن اوپر جا کر واپس نیچے آتا ہے: ${isolate("C")}، ${isolate("E")}، ${isolate("G")}، ${isolate("E")}۔`,
        "بایاں ہاتھ اکثر دھن کے نیچے کورڈ توڑ کر بجاتا ہے۔",
      ],
    },
  },
};

/** *Quarter notes* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { QuarterNotesTexts } from "./quarter-notes.en";

export const quarterNotesUr: Translation<QuarterNotesTexts> = {
  title: "کوارٹر نوٹ",
  steps: {
    "quarter-demo": {
      text: `دیکھیں اور سنیں۔ مڈل ${isolate("C")} ہر بیٹ پر ایک بار بجتا ہے، اور ہر نوٹ اگلے نوٹ جتنا لمبا ہے۔`,
    },
    "what-a-quarter-note-is": {
      text: "آپ نے جتنے نوٹ سنے، وہ سب کوارٹر نوٹ تھے۔ کوارٹر نوٹ ایک بیٹ تک چلتا ہے۔ اس لیے ہر بیٹ پر ایک نوٹ بجائیں۔",
    },
    "quarter-beats-quiz": {
      text: "کوارٹر نوٹ کتنی دیر تک چلتا ہے؟",
      answers: ["ایک بیٹ", "دو بیٹ", "چار بیٹ"],
    },
    "quarter-taps": {
      text: "ہر بار دبانا ایک کوارٹر نوٹ ہے۔ \"شروع کریں\" دبائیں، چار ٹک سنیں، پھر ہر ٹک پر کوئی بھی کلید ایک بار دبائیں۔",
    },
    "phrase-demo": {
      text: "یہ ایک مشہور دھن کا شروع کا حصہ ہے۔ اس کا ہر نوٹ کوارٹر نوٹ ہے، ہر بیٹ پر ایک۔",
    },
    "quarter-phrase": {
      text: `دایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں۔ دھن بجائیں، اور ہر نوٹ کے لیے ایک بیٹ گنیں۔`,
    },
    recap: {
      text: "شاباش! اب آپ نے نوٹ کی پہلی لمبائی سیکھ لی۔",
      points: ["کوارٹر نوٹ ایک بیٹ تک چلتا ہے۔", "ہر بیٹ پر ایک کوارٹر نوٹ بجائیں۔", "بہت سی دھنیں زیادہ تر کوارٹر نوٹوں سے بنی ہوتی ہیں۔"],
    },
  },
};

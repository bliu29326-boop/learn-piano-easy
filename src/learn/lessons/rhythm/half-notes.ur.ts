/** *Half notes* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesUr: Translation<HalfNotesTexts> = {
  title: "ہاف نوٹ",
  steps: {
    "quarters-then-halves-demo": {
      text: "دیکھیں اور سنیں۔ پہلے چار چھوٹے نوٹ آتے ہیں، ہر بیٹ پر ایک۔ پھر ہر نوٹ دگنی دیر تک بجتا ہے۔",
    },
    "what-a-half-note-is": {
      text: "ہاف نوٹ دو بیٹ تک چلتا ہے۔ اسے پہلی بیٹ پر بجائیں، اور دوسری بیٹ پوری ہونے تک دبائے رکھیں۔ ہر ہاف نوٹ پر \"1، 2\" گنیں۔",
    },
    "half-beats-quiz": {
      text: "ہاف نوٹ کتنی بیٹ تک چلتا ہے؟",
      answers: ["ایک بیٹ", "دو بیٹ", "چار بیٹ"],
    },
    "play-and-hold": {
      text: `دایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں۔ ${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("D")}، ${isolate("C")} بجائیں، اور ہر کلید کو "1، 2" گنتے ہوئے دبائے رکھیں۔ یہ مرحلہ ہر نوٹ پر آپ کا انتظار کرتا ہے، اس لیے آرام سے بجائیں۔`,
    },
    "count-one-two": {
      text: "ہر ٹک پر کوئی بھی کلید دبائیں۔ دباتے ہوئے \"1، 2\"، \"1، 2\" گنیں۔ ہر \"1، 2\" ایک ہاف نوٹ کی لمبائی ہے۔",
    },
    "which-is-longer-quiz": {
      text: "کون سا نوٹ زیادہ دیر تک چلتا ہے؟",
      answers: ["کوارٹر نوٹ", "ہاف نوٹ"],
    },
    "halves-in-four-quiz": {
      text: "چار بیٹ کتنے ہاف نوٹوں سے بھرتی ہیں؟",
      answers: ["ایک", "دو", "چار"],
    },
    recap: {
      text: "شاباش! اب آپ نے ہاف نوٹ سیکھ لیا۔",
      points: ["ہاف نوٹ دو بیٹ تک چلتا ہے۔", "اسے بجائیں، پھر اگلی بیٹ پوری ہونے تک دبائے رکھیں۔", "دو ہاف نوٹ چار بیٹ بھر دیتے ہیں۔"],
    },
  },
};

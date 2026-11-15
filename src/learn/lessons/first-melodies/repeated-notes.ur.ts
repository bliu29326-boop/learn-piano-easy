/** *Repeated notes* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { RepeatedNotesTexts } from "./repeated-notes.en";

export const repeatedNotesUr: Translation<RepeatedNotesTexts> = {
  title: "دہرائے گئے نوٹ",
  steps: {
    "repeat-demo": {
      text: "دیکھیں اور سنیں۔ کچھ نوٹ بار بار بجتے ہیں، اور ہاتھ اپنی جگہ سے نہیں ہلتا۔",
    },
    "what-a-repeat-is": {
      text: "ایک نوٹ دہرایا جا سکتا ہے۔ انگلی اپنی کلید پر رہتی ہے اور اسے دوبارہ بجاتی ہے۔ دونوں نوٹوں کے بیچ کلید کو واپس اوپر آنے دیں۔",
    },
    "same-or-not": {
      text: "ہر بار دو نوٹ سنائی دیں گے۔ کیا دوسرے نوٹ کی پچ پہلے سے اونچی ہے، نیچی ہے یا ایک جیسی؟",
    },
    "repeat-e-d": {
      text: `دایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں۔ انگلی 3 سے ${isolate("E")} تین بار بجائیں، پھر انگلی 2 سے ${isolate("D")} تین بار۔`,
    },
    "repeat-after-skip": {
      text: `اب ایک چھلانگ، پھر ایک دہرایا ہوا نوٹ۔ انگلی 3 سے ${isolate("E")} بجائیں، پھر انگلی 5 سے ${isolate("G")} دو بار۔`,
    },
    "how-many-keys-quiz": {
      text: `${isolate("C")}، ${isolate("C")}، ${isolate("C")} بجانے کے لیے کتنی کلیدیں دبانی ہوں گی؟`,
      answers: ["ایک کلید، تین بار", "تین الگ الگ کلیدیں"],
    },
    "mixed-phrase": {
      text: `اس دھن میں قدم بھی ہیں، چھلانگیں بھی اور دہرائے گئے نوٹ بھی۔ ہاتھ ${isolate("C")} پوزیشن میں رکھیں، اور نشان والی کلید کے ساتھ چلیں۔`,
    },
    recap: {
      text: "شاباش! اب دہرائے گئے نوٹ آپ بجا سکتے ہیں۔",
      points: [
        "دہرایا گیا نوٹ وہی کلید دوبارہ بجاتا ہے۔",
        "انگلی اپنی کلید پر رہتی ہے اور اسے اوپر آنے دیتی ہے۔",
        "ایک دھن میں قدم، چھلانگیں اور دہرائے گئے نوٹ سب ہو سکتے ہیں۔",
      ],
    },
  },
};

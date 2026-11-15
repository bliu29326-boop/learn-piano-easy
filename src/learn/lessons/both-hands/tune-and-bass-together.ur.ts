/** *Tune and bass together* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { TuneAndBassTogetherTexts } from "./tune-and-bass-together.en";

export const tuneAndBassTogetherUr: Translation<TuneAndBassTogetherTexts> = {
  title: "دھن اور بیس ایک ساتھ",
  steps: {
    "whole-tune": {
      text: "چار میژر کی ایک چھوٹی سی دھن سنیں۔ دایاں ہاتھ دھن بجاتا ہے، اور بایاں ہاتھ ہر میژر میں ایک گہرا نوٹ ساتھ ملاتا ہے۔",
    },
    "two-layers": {
      text: "دھن ہر بیٹ پر آگے بڑھتی ہے۔ بیس صرف بیٹ 1 پر آتا ہے، اور پورے میژر تک دھن کے نیچے گونجتا رہتا ہے۔",
    },
    "tune-alone": {
      text: `پہلے صرف دھن، ${isolate("C")} پوزیشن میں۔ ${isolate("C D E F")}، ${isolate("G F E D")}، ${isolate("D E F D")} بجائیں، اور مڈل ${isolate("C")} پر ختم کریں۔`,
    },
    "bass-beat-quiz": {
      text: "ہر میژر کی کس بیٹ پر بیس نوٹ آتا ہے؟",
      answers: ["بیٹ 1 پر", "بیٹ 3 پر", "ہر بیٹ پر"],
    },
    "bass-demo": {
      text: `اب صرف بیس سنیں۔ ہر نوٹ پورے میژر تک چلتا ہے: پہلے ${isolate("C")}، پھر دو بار ${isolate("G")}، پھر دوبارہ ${isolate("C")}۔`,
    },
    "bass-alone": {
      text: `بایاں ہاتھ ${isolate("C")} پوزیشن میں رکھ کر بیس بجائیں۔ چھوٹی انگلی ${isolate("C")} بجاتی ہے، اور انگوٹھا ${isolate("G")} بجاتا ہے۔`,
    },
    "press-together": {
      text: "بیٹ 1 پر دونوں ہاتھ اپنی کلیدیں ایک ہی لمحے دباتے ہیں۔ پھر بایاں ہاتھ اپنا نوٹ دبائے رکھتا ہے، اور دایاں ہاتھ آگے بجاتا رہتا ہے۔",
    },
    "first-half": {
      text: "پہلے دو میژر دونوں ہاتھوں سے بجائیں۔ بیس نوٹ اور دھن کا پہلا نوٹ ایک ساتھ دبائیں۔",
    },
    "held-bass-quiz": {
      text: `دوسرے میژر میں دایاں ہاتھ ${isolate("G F E D")} بجاتا ہے۔ اس دوران بایاں ہاتھ کیا کرتا ہے؟`,
      answers: [`ایک آکٹیو نیچے ${isolate("G F E D")} بجاتا ہے`, `اپنا ${isolate("G")} دبائے رکھتا ہے`, "اٹھ کر آرام کرتا ہے"],
    },
    "whole-tune-together": {
      text: "اب پوری دھن دونوں ہاتھوں سے۔ ہر بیٹ 1 پر دونوں ہاتھ بجاتے ہیں، اس لیے وہاں جلدی نہ کریں۔",
    },
    recap: {
      text: "شاباش! آپ نے ایک دھن اس کے بیس کے ساتھ بجائی۔",
      points: [
        "پہلے صرف دھن سیکھیں، پھر صرف بیس، پھر دونوں کو ملائیں۔",
        "بیس بیٹ 1 پر، دھن کے نوٹ کے ساتھ آتا ہے۔",
        "بایاں ہاتھ بیس دبائے رکھتا ہے، اور دایاں ہاتھ آگے بجاتا رہتا ہے۔",
      ],
    },
  },
};

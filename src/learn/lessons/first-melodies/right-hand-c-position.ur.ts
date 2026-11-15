/** *Right hand in C position* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { RightHandCPositionTexts } from "./right-hand-c-position.en";

export const rightHandCPositionUr: Translation<RightHandCPositionTexts> = {
  title: `دایاں ہاتھ ${isolate("C")} پوزیشن میں`,
  steps: {
    "position-demo": {
      text: `دیکھیں: مڈل ${isolate("C")} سے ${isolate("G")} تک پانچ کلیدیں۔ ان میں سے ہر کلید پر دائیں ہاتھ کی ایک انگلی رہتی ہے۔`,
    },
    "c-position": {
      text: `یہ ${isolate("C")} پوزیشن ہے۔ دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} پر رہتا ہے، اور انگلیاں 2 سے 5 تک ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} پر۔ ہر انگلی کی اپنی ایک کلید ہے، اور وہ اسی پر رہتی ہے۔`,
    },
    "finger-g-quiz": {
      text: `${isolate("C")} پوزیشن میں ${isolate("G")} کون سی انگلی بجاتی ہے؟`,
      answers: ["انگلی 1", "انگلی 3", "انگلی 5"],
    },
    "finger-four-key": {
      text: `دایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں۔ انگلی 4 کے نیچے والی کلید دبائیں۔`,
    },
    "finger-two-key": {
      text: "ہاتھ وہیں رہنے دیں۔ اب انگلی 2 کے نیچے والی کلید دبائیں۔",
    },
    "finger-three-quiz": {
      text: `${isolate("C")} پوزیشن میں انگلی 3 کی کلید کون سی ہے؟`,
    },
    "finger-pattern": {
      text: "اب انگلیاں اپنی کلیدیں پہچانتی ہیں۔ انگلیاں 1، 3، 2، 4، 5 بجائیں۔ نشان والی کلید ہر اگلی کلید دکھاتی ہے۔",
    },
    "finger-walk-down": {
      text: "اب چھوٹی انگلی سے واپس نیچے آئیں۔ انگلیاں 5، 4، 3، 2، 1 بجائیں۔",
    },
    recap: {
      text: "شاباش! اب کلیدوں پر دائیں ہاتھ کا اپنا ایک گھر ہے۔",
      points: [
        `${isolate("C")} پوزیشن میں دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} پر رہتا ہے۔`,
        `انگلیاں 1 سے 5 تک ${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} پر رہتی ہیں۔`,
        "ہر انگلی کی اپنی ایک کلید ہے، اس لیے انگلی کا نمبر ایک کلید کا نام بن جاتا ہے۔",
      ],
    },
  },
};

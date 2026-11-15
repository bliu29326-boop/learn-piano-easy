/** *Left hand in C position* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { LeftHandCPositionTexts } from "./left-hand-c-position.en";

export const leftHandCPositionUr: Translation<LeftHandCPositionTexts> = {
  title: `بایاں ہاتھ ${isolate("C")} پوزیشن میں`,
  steps: {
    "left-hand-demo": {
      text: `مڈل ${isolate("C")} سے نیچے پانچ کلیدیں سنیں، پہلے اوپر اور پھر واپس نیچے۔ اس سبق میں انہیں بایاں ہاتھ بجاتا ہے۔`,
    },
    "place-left-hand": {
      text: `مڈل ${isolate("C")} سے ایک آکٹیو نیچے والا ${isolate("C")} ڈھونڈیں۔ بائیں ہاتھ کی چھوٹی انگلی، یعنی انگلی 5، اس پر رکھیں، اور اس کے دائیں طرف ہر سفید کلید پر ایک انگلی۔ انگوٹھا، یعنی انگلی 1، ${isolate("G")} پر رہتا ہے۔`,
    },
    "c-finger-quiz": {
      text: `بایاں ہاتھ ${isolate("C")} پوزیشن میں ہے۔ ${isolate("C")} کون سی انگلی بجاتی ہے؟`,
      answers: ["انگلی 1، انگوٹھا", "انگلی 3، درمیانی انگلی", "انگلی 5، چھوٹی انگلی"],
    },
    "find-left-thumb": {
      text: "ہاتھ وہیں رہنے دیں۔ بائیں انگوٹھے کے نیچے والی کلید دبائیں۔",
    },
    "find-left-middle": {
      text: "اب بائیں ہاتھ کی انگلی 3 کے نیچے والی کلید دبائیں۔",
    },
    "up-and-down": {
      text: "پانچوں کلیدیں اوپر اور پھر واپس نیچے بجائیں۔ ساتھ ساتھ انگلیاں گنیں: 5، 4، 3، 2، 1، پھر واپس 5 تک۔",
    },
    "left-steps": {
      text: "اب بائیں ہاتھ سے قدم بجائیں، انگوٹھے سے شروع کر کے۔ ہر نوٹ اگلی سفید کلید پر جاتا ہے۔",
    },
    "left-skips-repeats": {
      text: `بایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں۔ چھلانگیں اور دہرائے گئے نوٹ بجائیں: ${isolate("C")}، ${isolate("E E")}، ${isolate("G G")}، ${isolate("E")}، ${isolate("C")}۔ انگلیاں یوں چلتی ہیں: 5، 3، 3، 1، 1، 3، 5۔`,
    },
    recap: {
      text: "شاباش! اب کلیدوں پر بائیں ہاتھ کا بھی اپنا ایک گھر ہے۔",
      points: [
        `بایاں ہاتھ مڈل ${isolate("C")} سے ایک آکٹیو نیچے ${isolate("C D E F G")} پر رہتا ہے۔`,
        `چھوٹی انگلی، یعنی انگلی 5، ${isolate("C")} بجاتی ہے، اور انگوٹھا ${isolate("G")}۔`,
        "یہاں نمبر دائیں ہاتھ کے الٹ چلتے ہیں۔",
      ],
    },
  },
};

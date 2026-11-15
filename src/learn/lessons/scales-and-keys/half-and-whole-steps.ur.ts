/** *Half and whole steps* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsUr: Translation<HalfAndWholeStepsTexts> = {
  title: "سیمی ٹون اور ٹون",
  steps: {
    "key-by-key": {
      text: `سنیں، پیانو ${isolate("C")} سے ${isolate("E")} تک چڑھتا ہے۔ راستے کی ہر کلید بجتی ہے، کالی کلیدیں بھی۔`,
    },
    "half-step": {
      text: "اس چڑھائی کی ہر چال ایک سیمی ٹون تھی۔ سیمی ٹون بالکل اگلی کلید تک جاتا ہے، چاہے وہ کالی ہو یا سفید، اور بیچ میں کوئی کلید نہیں ہوتی۔",
    },
    "half-step-from-c": {
      text: `اب آپ کی باری۔ مڈل ${isolate("C")} بجائیں، پھر اس کے بالکل دائیں والی کالی کلید، اور یہ جوڑی دو بار بجائیں۔ ہر چال ایک سیمی ٹون ہے۔`,
    },
    "no-black-key-between": {
      text: `${isolate("E")} اور ${isolate("F")} کو دیکھیں۔ ان کے بیچ کوئی کالی کلید نہیں ہے۔ اس لیے ${isolate("E")} سے ${isolate("F")} ایک سیمی ٹون ہے، اور ${isolate("B")} سے ${isolate("C")} بھی۔`,
    },
    "white-half-step": {
      text: "کون سی دو سفید کلیدیں ایک سیمی ٹون کے فاصلے پر ہیں؟",
      answers: [
        `${isolate("C")} اور ${isolate("D")}`,
        `${isolate("E")} اور ${isolate("F")}`,
        `${isolate("F")} اور ${isolate("G")}`,
      ],
    },
    "e-f-and-b-c": {
      text: `مڈل ${isolate("C")} سے اوپر والے ${isolate("E")} اور ${isolate("F")} بجائیں۔ پھر ${isolate("B")} اور اس سے اوپر والا ${isolate("C")} بجائیں۔ دونوں جوڑیاں دو سفید کلیدوں کے بیچ سیمی ٹون ہیں۔`,
    },
    "whole-step": {
      text: `دو سیمی ٹون مل کر ایک ٹون بناتے ہیں۔ ٹون میں ایک کلید چھوٹ جاتی ہے۔ ${isolate("C")} سے ${isolate("D")} ایک ٹون ہے، کیونکہ بیچ میں ایک کالی کلید ہے۔`,
    },
    "whole-and-half": {
      text: `سنیں: ${isolate("C")} سے ${isolate("D")} ایک ٹون ہے، اور ${isolate("D")} سے ${isolate("E")} بھی ایک ٹون۔ پھر ${isolate("E")} سے ${isolate("F")} صرف ایک سیمی ٹون ہے۔`,
    },
    "whole-steps-from-c": {
      text: `اب آپ کی باری۔ مڈل ${isolate("C")}، ${isolate("D")} اور ${isolate("E")} بجائیں۔ ہر چال ایک ٹون ہے، جو ایک کالی کلید کے اوپر سے گزرتی ہے۔`,
    },
    "f-to-g": {
      text: `${isolate("F")} سے اوپر ${isolate("G")} تک، یہ سیمی ٹون ہے یا ٹون؟`,
      answers: ["ٹون", "سیمی ٹون"],
    },
    "whole-step-above-e": {
      text: `${isolate("E")} سے ایک ٹون اوپر والی کلید دبائیں۔ دو سیمی ٹون اوپر گنیں، اور دھیان رکھیں: پہلا سیمی ٹون ${isolate("F")} پر پہنچتا ہے۔`,
    },
    recap: {
      text: "شاباش! اب دو کلیدوں کے بیچ کا فاصلہ آپ ناپ سکتے ہیں۔",
      points: [
        "سیمی ٹون بالکل اگلی کلید تک جاتا ہے، چاہے وہ کالی ہو یا سفید۔",
        `${isolate("E")} سے ${isolate("F")} اور ${isolate("B")} سے ${isolate("C")} سفید کلیدوں کے بیچ سیمی ٹون ہیں۔`,
        "ٹون دو سیمی ٹون کا ہوتا ہے، اور اس کے بیچ میں ایک کلید ہوتی ہے۔",
      ],
    },
  },
};

/** *Sharps* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { SharpsTexts } from "./sharps.en";

export const sharpsUr: Translation<SharpsTexts> = {
  title: "شارپ",
  steps: {
    "raised-by-a-half-step": {
      text: `سنیں: ${isolate("C")}، پھر اس کے بالکل دائیں والی کالی کلید۔ پھر ${isolate("F")}، اور ${isolate("F")} کے بالکل دائیں والی کالی کلید۔`,
    },
    "the-sharp-sign": {
      text: `یہ نشان ${isolate("♯")} شارپ ہے۔ یہ نوٹ کی پچ ایک سیمی ٹون اونچی کرتا ہے، یعنی بالکل دائیں والی کلید تک۔ اس لیے ${isolate("C")} شارپ، ${isolate("C")} کے دائیں والی کالی کلید ہے۔`,
    },
    "find-c-sharp": {
      text: `${isolate("C")} شارپ ڈھونڈیں۔ کسی بھی ${isolate("C")} سے شروع کریں اور ایک سیمی ٹون اوپر جائیں۔`,
    },
    "find-f-sharp": {
      text: `اب ${isolate("F")} شارپ ڈھونڈیں۔ یہ تین کالی کلیدوں کے گروپ کی پہلی کلید ہے۔`,
    },
    "where-is-g-sharp": {
      text: `${isolate("G")} شارپ کہاں ہے؟`,
      answers: [
        `${isolate("G")} کے بالکل بائیں والی کالی کلید`,
        `${isolate("G")} کے بالکل دائیں والی کالی کلید`,
        `سفید کلید ${isolate("A")}`,
      ],
    },
    "e-sharp": {
      text: `${isolate("E")} کے دائیں طرف کوئی کالی کلید نہیں ہے۔ ${isolate("E")} سے ایک سیمی ٹون اوپر ${isolate("F")} آتا ہے۔ اس لیے ${isolate("E")} شارپ دراصل ${isolate("F")} ہے، اور ${isolate("B")} شارپ دراصل ${isolate("C")}۔`,
    },
    "e-sharp-is": {
      text: `${isolate("E")} شارپ کے لیے کون سی کلید دبائیں؟`,
    },
    "sharp-on-the-staff": {
      text: `اسٹاف پر ${isolate("♯")} نوٹ کے بالکل بائیں طرف، اسی لائن یا اسپیس پر لکھا ہوتا ہے۔ پہلے نوٹ پڑھیں، پھر ایک سیمی ٹون اوپر جائیں۔`,
    },
    "play-sharps": {
      text: "ہر نوٹ اس کے شارپ کے ساتھ پڑھیں اور بجائیں۔ پہلے سفید کلید ڈھونڈیں، پھر ایک سیمی ٹون اوپر جائیں۔",
    },
    "through-f-sharp": {
      text: `دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("D")} پر رکھیں، اور درمیانی انگلی ${isolate("F")} شارپ پر۔ ${isolate("D")}، ${isolate("E")}، ${isolate("F")} شارپ اور ${isolate("G")} بجائیں، پھر واپس نیچے ${isolate("D")} تک۔`,
    },
    recap: {
      text: "شاباش! اب شارپ آپ پڑھ بھی سکتے ہیں اور بجا بھی سکتے ہیں۔",
      points: [
        `شارپ ${isolate("♯")} نوٹ کی پچ ایک سیمی ٹون اونچی کرتا ہے، یعنی بالکل دائیں والی کلید تک۔`,
        `زیادہ تر شارپ کالی کلیدیں ہیں، جیسے ${isolate("C")} شارپ اور ${isolate("F")} شارپ۔`,
        `${isolate("E")} شارپ دراصل ${isolate("F")} ہے، اور ${isolate("B")} شارپ دراصل ${isolate("C")}، کیونکہ بیچ میں کوئی کالی کلید نہیں۔`,
        `اسٹاف پر ${isolate("♯")} اپنے نوٹ کے بالکل بائیں طرف ہوتا ہے۔`,
      ],
    },
  },
};

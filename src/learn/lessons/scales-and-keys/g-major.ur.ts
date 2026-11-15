/** *G major* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { GMajorTexts } from "./g-major.en";

export const gMajorUr: Translation<GMajorTexts> = {
  title: `${isolate("G")} میجر`,
  steps: {
    "g-scale-demo": {
      text: `${isolate("G")} سے شروع ہونے والا اسکیل سنیں۔ یہ ${isolate("C")} میجر جتنا ہی روشن لگتا ہے۔ راستے میں ایک کلید کالی ہے۔`,
    },
    "pattern-from-g": {
      text: `اسکیل کا پیٹرن ${isolate("G")} سے شروع کریں: ٹون، ٹون، سیمی ٹون، ٹون، ٹون۔ اس سے ${isolate("G")}، ${isolate("A")}، ${isolate("B")}، ${isolate("C")}، ${isolate("D")} اور ${isolate("E")} ملتے ہیں۔ یہاں تک ہر کلید سفید ہے۔`,
    },
    "whole-step-above-e": {
      text: `${isolate("E")} سے پیٹرن ایک ٹون مانگتا ہے۔ ${isolate("E")} سے ایک ٹون اوپر کون سی کلید ہے؟`,
    },
    "one-sharp": {
      text: `اس لیے ${isolate("G")} میجر اسکیل میں ${isolate("F")} کی جگہ ${isolate("F")} شارپ بجتا ہے۔ ${isolate("F")} شارپ سے ایک سیمی ٹون اوپر، اوپر والا ${isolate("G")} آتا ہے۔ ${isolate("G")} میجر میں ایک شارپ ہے: ${isolate("F")} شارپ۔`,
    },
    "find-f-sharp": {
      text: `کلیدوں پر ${isolate("F")} شارپ ڈھونڈیں۔ یہ ${isolate("F")} کے بالکل دائیں والی کالی کلید ہے۔`,
    },
    "same-fingering": {
      text: `دایاں ہاتھ ${isolate("G")} میجر بالکل ${isolate("C")} میجر کی طرح بجاتا ہے۔ انگلیاں 1، 2 اور 3 سے ${isolate("G")}، ${isolate("A")} اور ${isolate("B")} بجتے ہیں۔ انگوٹھا نیچے سے ${isolate("C")} پر جاتا ہے، پھر 1، 2، 3، 4، 5 سے ${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} شارپ اور ${isolate("G")} بجتے ہیں۔`,
    },
    "g-scale-up": {
      text: `اب آپ کی باری۔ دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("G")} پر رکھیں، اور ${isolate("G")} میجر اسکیل اگلے ${isolate("G")} تک اوپر بجائیں۔ ${isolate("F")} شارپ انگلی 4 بجاتی ہے۔`,
    },
    "g-scale-down": {
      text: `اب اسے نیچے بجائیں، اوپر والے ${isolate("G")} سے اسی ${isolate("G")} تک جہاں سے شروع کیا تھا۔ انگلی 3 انگوٹھے کے اوپر سے ${isolate("B")} پر جاتی ہے۔`,
    },
    "hear-f-and-f-sharp": {
      text: `${isolate("F")} شارپ، ${isolate("F")} سے صرف ایک سیمی ٹون اوپر ہے، اس لیے غور سے سنیں۔ کیا دوسری کلید کی پچ اونچی ہے، نیچی ہے یا ایک جیسی؟`,
    },
    "g-tune-demo": {
      text: `یہ ${isolate("G")} میجر میں ایک چھوٹی سی دھن ہے۔ بایاں ہاتھ ${isolate("G")} اور ${isolate("D")} کی ففتھ دبائے رکھتا ہے، اور دایاں ہاتھ ${isolate("F")} شارپ بجاتا ہے۔`,
    },
    "g-tune": {
      text: `دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("D")} پر رکھیں، تاکہ انگلی 3 ${isolate("F")} شارپ پر رہے۔ بایاں ہاتھ نیچے والی ففتھ بجاتا ہے: مڈل ${isolate("C")} سے نیچے والے ${isolate("C")} کے نیچے کا ${isolate("G")}، اور اس سے اوپر والا ${isolate("D")}۔ ففتھ پہلے ${isolate("G")} کے ساتھ بجائیں، اور دوسرے ${isolate("G")} کے ساتھ دوبارہ۔`,
    },
    recap: {
      text: "شاباش! آپ نے اپنا دوسرا اسکیل بجایا۔",
      points: [
        "میجر اسکیل کا پیٹرن کسی بھی کلید سے شروع ہو سکتا ہے۔",
        `${isolate("G")} سے شروع ہو تو سب سے اوپر والے نوٹ سے پہلے سیمی ٹون رکھنے کے لیے ${isolate("F")} شارپ چاہیے۔`,
        `${isolate("G")} میجر میں ایک شارپ ہے: ${isolate("F")} شارپ۔`,
        `اس کی فنگرنگ ${isolate("C")} میجر جیسی ہی ہے۔`,
      ],
    },
  },
};

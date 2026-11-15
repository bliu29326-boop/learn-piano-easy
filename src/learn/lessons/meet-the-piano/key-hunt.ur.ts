/** *The key hunt* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntUr: Translation<KeyHuntTexts> = {
  title: "کلیدوں کی تلاش",
  steps: {
    ready: {
      text: "چلیں، کلیدوں کی تلاش شروع کریں! ہر کلید کے لیے گھڑی پر آٹھ سیکنڈ ہیں۔ کالی کلیدوں کے گروپوں کی مدد سے راستہ ڈھونڈیں۔",
    },
    "any-c": { text: `کوئی بھی ${isolate("C")} ڈھونڈیں۔` },
    "middle-c": { text: `اب مڈل ${isolate("C")} ڈھونڈیں، یعنی پیانو کے بیچ والا ${isolate("C")}۔` },
    "any-f": { text: `کوئی بھی ${isolate("F")} ڈھونڈیں۔` },
    "any-g": { text: `کوئی بھی ${isolate("G")} ڈھونڈیں۔` },
    "any-d": { text: `کوئی بھی ${isolate("D")} ڈھونڈیں۔` },
    "any-b": { text: `کوئی بھی ${isolate("B")} ڈھونڈیں۔` },
    "three-middle": { text: "تین والے کسی گروپ کی بیچ والی کالی کلید ڈھونڈیں۔" },
    "any-e": { text: `کوئی بھی ${isolate("E")} ڈھونڈیں۔` },
    "any-a": { text: `کوئی بھی ${isolate("A")} ڈھونڈیں۔` },
    "high-c": { text: `آخری کلید! مڈل ${isolate("C")} سے ایک آکٹیو اوپر والا ${isolate("C")} ڈھونڈیں۔` },
    recap: {
      text: "کلیدوں کی تلاش مکمل ہو گئی۔ اب پیانو پر راستہ آپ کا جانا پہچانا ہے۔",
      points: [
        "کالی کلیدیں دو اور تین کے گروپوں میں راستہ دکھاتی ہیں۔",
        `سات حروف سفید کلیدوں کے نام ہیں، ${isolate("C")} سے ${isolate("B")} تک۔`,
        "وہی حرف ایک آکٹیو اوپر پھر سے آتا ہے۔",
      ],
    },
  },
};

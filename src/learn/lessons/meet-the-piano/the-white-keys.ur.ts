/** *The white keys* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { TheWhiteKeysTexts } from "./the-white-keys.en";

export const theWhiteKeysUr: Translation<TheWhiteKeysTexts> = {
  title: "سفید کلیدیں",
  steps: {
    "c-to-c": {
      text: `سنیں اور دیکھیں۔ پیانو مڈل ${isolate("C")} سے اوپر اگلے ${isolate("C")} تک ہر سفید کلید بجاتا ہے۔`,
    },
    "seven-letters": {
      text: `سفید کلیدوں کے نام سات حروف سے رکھے گئے ہیں: ${isolate("C D E F G A B")}۔ ${isolate("B")} کے بعد حروف پھر ${isolate("C")} سے شروع ہوتے ہیں۔ کالی کلیدیں بتاتی ہیں کہ ہر حرف کہاں ہے۔`,
    },
    "find-d": {
      text: `${isolate("D")} دو کالی کلیدوں والے گروپ کی دونوں کالی کلیدوں کے بیچ ہوتا ہے۔ ایک ${isolate("D")} ڈھونڈیں۔`,
    },
    "find-e": {
      text: `${isolate("E")} وہ سفید کلید ہے جو دو کالی کلیدوں کے گروپ کے بالکل دائیں طرف ہے۔ ایک ${isolate("E")} ڈھونڈیں۔`,
    },
    "find-f": {
      text: `${isolate("F")} وہ سفید کلید ہے جو تین کالی کلیدوں کے گروپ کے بالکل بائیں طرف ہے۔ ایک ${isolate("F")} ڈھونڈیں۔`,
    },
    "find-g": {
      text: `${isolate("G")} تین کالی کلیدوں والے گروپ کی پہلی اور دوسری کالی کلید کے بیچ ہوتا ہے۔ ایک ${isolate("G")} ڈھونڈیں۔`,
    },
    "find-a": {
      text: `${isolate("A")} تین کالی کلیدوں والے گروپ کی دوسری اور تیسری کالی کلید کے بیچ ہوتا ہے۔ ایک ${isolate("A")} ڈھونڈیں۔`,
    },
    "find-b": {
      text: `${isolate("B")} وہ سفید کلید ہے جو تین کالی کلیدوں کے گروپ کے بالکل دائیں طرف ہے۔ ایک ${isolate("B")} ڈھونڈیں۔`,
    },
    "play-c-to-c": {
      text: `اب مڈل ${isolate("C")} سے اوپر اگلے ${isolate("C")} تک ساری سفید کلیدیں بجائیں۔ بجاتے ہوئے ہر حرف بول کر کہیں۔`,
    },
    "letters-quiz": {
      text: `سفید کلیدوں پر ${isolate("B")} کے بعد کون سا حرف آتا ہے؟`,
      answers: ["A", "C", "D"],
    },
    recap: {
      text: "شاباش! اب آپ کو ہر سفید کلید کا نام معلوم ہے۔",
      points: [
        `سفید کلیدوں کے نام ${isolate("C D E F G A B")} ہیں۔`,
        `${isolate("B")} کے بعد حروف پھر ${isolate("C")} سے شروع ہوتے ہیں۔`,
        "دو اور تین کالی کلیدوں کے گروپ بتاتے ہیں کہ ہر حرف کہاں ہے۔",
      ],
    },
  },
};

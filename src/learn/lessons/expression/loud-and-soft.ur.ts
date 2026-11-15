/** *Loud and soft* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { LoudAndSoftTexts } from "./loud-and-soft.en";

export const loudAndSoftUr: Translation<LoudAndSoftTexts> = {
  title: "زور سے اور ہلکے سے",
  steps: {
    "soft-and-loud-demo": {
      text: `${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} دو بار سنیں۔ پہلی بار یہ ہلکے سے بجتے ہیں، اور دوسری بار زور سے۔`,
    },
    "key-speed": {
      text: "نوٹ کی آواز کتنی زور دار ہوگی، یہ اس پر منحصر ہے کہ اس کی کلید کتنی تیزی سے نیچے جاتی ہے۔ نرمی سے اور آہستہ آہستہ دبائی گئی کلید ہلکی آواز دیتی ہے۔ تیزی سے دبائی گئی کلید زور دار آواز دیتی ہے۔",
    },
    "what-makes-loud": {
      text: "نوٹ کی آواز زیادہ زور دار کیسے ہوتی ہے؟",
      answers: ["کلید کو زیادہ دیر دبائے رکھنے سے", "زیادہ بائیں طرف کی کلید دبانے سے", "کلید کو زیادہ تیزی سے نیچے دبانے سے", "کالی کلید دبانے سے"],
    },
    "play-softly": {
      text: `مڈل ${isolate("C")} سے شروع کر کے ${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} ہلکے سے بجائیں۔ ہر کلید نرمی سے اور آہستہ آہستہ دبائیں۔`,
    },
    "hear-softly": {
      text: `${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} کو ہلکے سے بجتے ہوئے سنیں۔ ہر کلید نرمی سے اور آہستہ آہستہ نیچے گئی۔`,
    },
    "how-softly-sounded": {
      text: "ان پانچ نوٹوں کی آواز کیسی تھی؟",
      answers: ["ہلکی", "زور دار", "پہلے ہلکی، پھر زور دار", "پہلے زور دار، پھر ہلکی"],
    },
    "play-loudly": {
      text: "اب یہی پانچ نوٹ زور سے بجائیں۔ ہر کلید تیزی سے اور مضبوطی سے دبائیں، لیکن اس پر کبھی زور سے چوٹ نہ لگائیں۔",
    },
    "hear-loudly": {
      text: `${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} کو زور سے بجتے ہوئے سنیں۔ ہر کلید تیزی سے اور مضبوطی سے نیچے گئی۔`,
    },
    "how-loudly-sounded": {
      text: "ان پانچ نوٹوں کی آواز کیسی تھی؟",
      answers: ["ہلکی", "پہلے ہلکی، پھر زور دار", "پہلے زور دار، پھر ہلکی", "زور دار"],
    },
    "piano-and-forte": {
      text: `موسیقی میں اسٹاف کے نیچے لکھے حروف بتاتے ہیں کہ کتنے زور سے بجانا ہے۔ نشان ${isolate("p")} کا مطلب ${isolate("piano")} ہے، جو اطالوی زبان میں "ہلکے سے" کو کہتے ہیں۔ نشان ${isolate("f")} کا مطلب ${isolate("forte")} ہے، یعنی اطالوی میں "زور سے"۔`,
    },
    "what-f-asks": {
      text: `اسٹاف کے نیچے نشان ${isolate("f")} نظر آ رہا ہے۔ یہ آپ سے کیا کرنے کو کہتا ہے؟`,
      answers: ["ہلکے سے بجائیں", "زور سے بجائیں", "تیز رفتار سے بجائیں", "آہستہ رفتار سے بجائیں"],
    },
    "mezzo-marks": {
      text: `ان دونوں کے بیچ دو اور نشان ہیں۔ ${isolate("mp")} کا مطلب ${isolate("mezzo-piano")} ہے، یعنی تھوڑا ہلکے سے۔ ${isolate("mf")} کا مطلب ${isolate("mezzo-forte")} ہے، یعنی تھوڑا زور سے۔`,
    },
    "softest-to-loudest": {
      text: "کون سی ترتیب سب سے ہلکے نشان سے شروع ہو کر سب سے زور دار نشان تک جاتی ہے؟",
      answers: [
        `${isolate("f")}، ${isolate("mf")}، ${isolate("mp")}، ${isolate("p")}`,
        `${isolate("mp")}، ${isolate("p")}، ${isolate("mf")}، ${isolate("f")}`,
        `${isolate("p")}، ${isolate("mp")}، ${isolate("mf")}، ${isolate("f")}`,
        `${isolate("p")}، ${isolate("f")}، ${isolate("mp")}، ${isolate("mf")}`,
      ],
    },
    "echo-demo": {
      text: `دھن کا ایک ٹکڑا سنیں جس پر ${isolate("f")} لکھا ہے، پھر اس کی گونج جس پر ${isolate("p")} لکھا ہے۔ نوٹ وہی ہیں، صرف آواز کا زور بدلتا ہے۔`,
    },
    "play-the-echo": {
      text: `${isolate("C")}، ${isolate("E")} اور ${isolate("G")} زور سے بجائیں، پھر گونج کی طرح انہیں دوبارہ ہلکے سے بجائیں۔ یہ مرحلہ صرف نوٹ جانچتا ہے، اس لیے آواز کا زور اپنے کانوں سے پرکھیں۔`,
    },
    recap: {
      text: "شاباش! آپ نے زور سے اور ہلکے سے بجانا سیکھ لیا۔",
      points: [
        "کلید کتنی تیزی سے نیچے جاتی ہے، اسی سے طے ہوتا ہے کہ آواز کتنی زور دار ہوگی۔",
        `نشان ${isolate("p")} کا مطلب ہلکے سے ہے، اور ${isolate("f")} کا مطلب زور سے۔`,
        `${isolate("mp")} اور ${isolate("mf")} کے نشان ان دونوں کے بیچ میں ہیں۔`,
      ],
    },
  },
};

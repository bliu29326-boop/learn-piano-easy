/** *What a chord is* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { WhatAChordIsTexts } from "./what-a-chord-is.en";

export const whatAChordIsUr: Translation<WhatAChordIsTexts> = {
  title: "کورڈ کیا ہے",
  steps: {
    "chord-demo": {
      text: `${isolate("C")}، ${isolate("E")} اور ${isolate("G")} کو ایک ایک کر کے سنیں۔ پھر تینوں کو ایک ساتھ سنیں۔ یہ مل کر ایک بھرپور آواز بن جاتے ہیں۔`,
    },
    "several-keys": {
      text: "کئی کلیدیں ایک ساتھ دبانے سے کورڈ بنتا ہے۔ آپ نے ایک کورڈ پہلے ہی بجایا ہے: بائیں ہاتھ کا اوپن ففتھ۔ چلیں، اب مزید کورڈ بنائیں۔",
    },
    "a-third": {
      text: `${isolate("C")} اور ${isolate("E")} ایک ساتھ دبائیں۔ ان کے بیچ تھرڈ کا فاصلہ ہے، اس لیے بیچ میں ایک سفید کلید آتی ہے۔ یہ تھرڈ انگلی 1 اور 3 سے بجائیں۔`,
    },
    "thirds-up": {
      text: `اب آپ کی باری۔ دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} پر رکھیں، اور ${isolate("C")} اور ${isolate("E")} ایک ساتھ بجائیں۔ پھر ہاتھ اوپر لے جا کر ${isolate("D")} اور ${isolate("F")} بجائیں، پھر ${isolate("E")} اور ${isolate("G")}۔`,
    },
    "skipped-key": {
      text: "سفید کلیدوں پر ایک تھرڈ دیکھیں۔ اس کی دونوں کلیدوں کے بیچ کتنی سفید کلیدیں ہیں؟",
      answers: ["کوئی نہیں", "ایک", "دو"],
    },
    "thirds-and-fifths": {
      text: `ففتھ پانچ سفید کلیدوں پر پھیلا ہوتا ہے، جیسے ${isolate("C")} سے ${isolate("G")} تک۔ اسے انگوٹھے اور انگلی 5 سے بجائیں۔ تھرڈ میٹھا لگتا ہے، اور ففتھ کھلا کھلا۔`,
    },
    "third-then-fifth": {
      text: `انگوٹھا ${isolate("C")} پر ہی رکھیں۔ پہلے تھرڈ ${isolate("C")} اور ${isolate("E")} بجائیں، پھر ففتھ ${isolate("C")} اور ${isolate("G")}۔ دونوں کو دو بار بجائیں۔`,
    },
    "stack-thirds": {
      text: `اب ایک تھرڈ کے اوپر دوسرا تھرڈ رکھیں۔ ${isolate("C")} اور ${isolate("E")} ایک تھرڈ ہے، اور ${isolate("E")} اور ${isolate("G")} اگلا۔ ${isolate("C")}، ${isolate("E")} اور ${isolate("G")} مل کر ایک ٹرائیڈ بناتے ہیں۔`,
    },
    "triad-demo": {
      text: `پہلے تھرڈ ${isolate("C")} اور ${isolate("E")} سنیں۔ پھر اوپر ${isolate("G")} آ ملتا ہے، اور ٹرائیڈ کی آواز بھرپور ہو جاتی ہے۔`,
    },
    "first-triad": {
      text: `انگلی 1، 3 اور 5 سے ${isolate("C")}، ${isolate("E")} اور ${isolate("G")} ایک ساتھ بجائیں۔ تینوں کلیدیں ایک ہی لمحے میں دبائیں، اور ٹرائیڈ دو بار بجائیں۔`,
    },
    "which-is-a-triad": {
      text: `ٹرائیڈ میں دو تھرڈ ایک دوسرے کے اوپر ہوتے ہیں۔ ${isolate("D")} سے شروع ہونے والا ٹرائیڈ کن تین کلیدوں سے بنتا ہے؟`,
      answers: [
        `${isolate("D")}، ${isolate("E")} اور ${isolate("F")}`,
        `${isolate("D")}، ${isolate("G")} اور ${isolate("A")}`,
        `${isolate("D")}، ${isolate("F")} اور ${isolate("A")}`,
      ],
    },
    "triads-up": {
      text: `دائیں ہاتھ کی شکل ویسی ہی رکھیں۔ مڈل ${isolate("C")} سے ${isolate("C-E-G")} بجائیں، پھر اوپر ${isolate("D-F-A")} اور ${isolate("E-G-B")} پر جائیں، سب سفید کلیدوں پر۔ آخر میں ${isolate("C-E-G")} بجائیں۔`,
    },
    recap: {
      text: "شاباش! آپ نے اپنے پہلے کورڈ بجا لیے۔",
      points: [
        "کورڈ یعنی کئی کلیدیں، جو ایک ساتھ دبائی جاتی ہیں۔",
        "تھرڈ میں بیچ کی ایک سفید کلید چھوٹ جاتی ہے، اور تھرڈ کو انگلی 1 اور 3 بجاتی ہیں۔",
        `دو تھرڈ ایک دوسرے کے اوپر رکھنے سے ٹرائیڈ بنتا ہے، جیسے ${isolate("C")}، ${isolate("E")} اور ${isolate("G")}۔`,
        "دائیں ہاتھ میں انگلی 1، 3 اور 5 ٹرائیڈ بجاتی ہیں۔",
      ],
    },
  },
};

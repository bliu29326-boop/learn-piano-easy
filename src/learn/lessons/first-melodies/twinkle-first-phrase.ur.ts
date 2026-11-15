/** *Twinkle's first phrase* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhraseUr: Translation<TwinkleFirstPhraseTexts> = {
  title: `${isolate("Twinkle Twinkle Little Star")} کا پہلا ٹکڑا`,
  steps: {
    "phrase-demo": {
      text: `${isolate("Twinkle Twinkle Little Star")} کا پہلا ٹکڑا سنیں۔ اس کا ایک نوٹ ${isolate("C")} پوزیشن سے باہر ہے۔`,
    },
    "one-key-past": {
      text: `وہ نوٹ ${isolate("A")} ہے، ${isolate("G")} کے فوراً بعد والی سفید کلید۔ ہاتھ ${isolate("C")} پوزیشن میں ہی رہتا ہے۔ ${isolate("A")} بجانے کے لیے چھوٹی انگلی ایک کلید دائیں طرف پھیلتی ہے۔`,
    },
    "find-a": {
      text: `دایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں۔ چھوٹی انگلی کو ${isolate("G")} سے آگے پھیلائیں اور ${isolate("A")} دبائیں۔`,
    },
    "leap-quiz": {
      text: `دھن ${isolate("C")} سے شروع ہوتی ہے، پھر بڑی چھلانگ لگا کر اوپر جاتی ہے۔ وہ کس نوٹ پر پہنچتی ہے؟`,
    },
    "climb-up": {
      text: `پہلا حصہ بجائیں: ${isolate("C")} دو بار، ${isolate("G")} دو بار، ${isolate("A")} دو بار، پھر ${isolate("G")}۔ دونوں ${isolate("C")} انگوٹھا بجاتا ہے، اور باقی سب چھوٹی انگلی، جو ${isolate("A")} تک پھیلتی ہے اور واپس آتی ہے۔`,
    },
    "walk-down": {
      text: `اب دوسرا حصہ قدم قدم نیچے آتا ہے: ${isolate("F")}، ${isolate("E")}، ${isolate("D")} اور ${isolate("C")}، ہر ایک دو بار۔ انگلیاں یوں چلتی ہیں: 4، 3، 2 اور 1۔`,
    },
    "whole-phrase": {
      text: "دونوں حصے جوڑیں۔ پورا ٹکڑا رکے بغیر بجائیں۔",
    },
    recap: {
      text: "شاباش! آپ کا ہاتھ پہلی بار پانچ انگلیوں کی حد سے آگے پہنچا۔",
      points: [
        `ایک دھن ایک نوٹ کے لیے ${isolate("C")} پوزیشن سے باہر جا سکتی ہے۔`,
        `چھوٹی انگلی ${isolate("G")} سے ${isolate("A")} تک پھیلتی ہے۔`,
        `دھن بڑی چھلانگ لگا سکتی ہے، جیسے ${isolate("C")} سے اوپر ${isolate("G")} تک۔`,
      ],
    },
  },
};

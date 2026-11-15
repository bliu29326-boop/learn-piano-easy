/** *Mary's first phrase* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseUr: Translation<MaryFirstPhraseTexts> = {
  title: `${isolate("Mary Had a Little Lamb")} کا پہلا ٹکڑا`,
  steps: {
    "phrase-demo": {
      text: `${isolate("Mary Had a Little Lamb")} کا پہلا آدھا حصہ سنیں۔ یہ قدموں، دہرائے گئے نوٹوں اور ایک چھلانگ سے بنا ہے، اور ان سب سے آپ کی پہچان پہلے سے ہے۔`,
    },
    "first-note-quiz": {
      text: "دھن کس نوٹ سے شروع ہوتی ہے؟",
    },
    "the-fingers": {
      text: `دایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں، انگوٹھا مڈل ${isolate("C")} پر۔ یہ دھن چار انگلیوں سے بجتی ہے: 1 ${isolate("C")} پر، 2 ${isolate("D")} پر، 3 ${isolate("E")} پر اور 5 ${isolate("G")} پر۔`,
    },
    "g-finger-quiz": {
      text: `${isolate("G")} کون سی انگلی بجاتی ہے؟`,
      answers: ["انگلی 2", "انگلی 3", "انگلی 5"],
    },
    "bars-one-two": {
      text: `شروع کا حصہ بجائیں: ${isolate("E")}، ${isolate("D")}، ${isolate("C")}، ${isolate("D")}، پھر ${isolate("E")} تین بار۔ انگلیاں یوں چلتی ہیں: 3، 2، 1، 2، پھر 3، 3، 3۔`,
    },
    "bars-three-four": {
      text: `اب اگلا حصہ: ${isolate("D")} تین بار، پھر ${isolate("E")}، پھر ${isolate("G")} دو بار۔ انگلیاں یوں چلتی ہیں: 2، 2، 2، پھر 3، 5، 5۔`,
    },
    "whole-phrase": {
      text: `اب پورا ٹکڑا رکے بغیر بجائیں: ${isolate("E D C D E E E")}، ${isolate("D D D")}، ${isolate("E G G")}۔`,
    },
    recap: {
      text: "شاباش! آپ نے ایک اصلی گانے کا پہلا آدھا حصہ بجایا۔",
      points: [
        "قدم، دہرائے گئے نوٹ اور ایک چھلانگ مل کر یہ دھن بناتے ہیں۔",
        "دھن چھوٹے چھوٹے ٹکڑوں میں سیکھی جاتی ہے، پھر انہیں جوڑا جاتا ہے۔",
        "انگلیوں کے نمبر ہاتھ کو بتاتے ہیں کہ کہاں جانا ہے۔",
      ],
    },
  },
};

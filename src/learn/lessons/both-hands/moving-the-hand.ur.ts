/** *Moving the hand* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { MovingTheHandTexts } from "./moving-the-hand.en";

export const movingTheHandUr: Translation<MovingTheHandTexts> = {
  title: "ہاتھ کی جگہ بدلنا",
  steps: {
    "phrase-then-move": {
      text: `دائیں ہاتھ کو دیکھیں۔ یہ ${isolate("C")} پوزیشن میں پانچ نوٹ بجاتا ہے، ریسٹ کے دوران اوپر کھسکتا ہے، اور پھر اوپر جا کر وہی شکل دوبارہ بجاتا ہے۔`,
    },
    "new-position": {
      text: `پانچ انگلیوں والی پوزیشن دوسری کلیدوں سے بھی شروع ہو سکتی ہے۔ ${isolate("G")} پوزیشن میں دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("G")} پر ہوتا ہے۔ انگلیاں ${isolate("G A B C D")} پر رہتی ہیں۔`,
    },
    "new-thumb": {
      text: `${isolate("G")} پوزیشن میں دائیں انگوٹھے کی کلید ڈھونڈیں: مڈل ${isolate("C")} کے ٹھیک اوپر والا ${isolate("G")}۔`,
    },
    "little-finger-quiz": {
      text: `دایاں ہاتھ ${isolate("G")} پوزیشن میں ہے۔ چھوٹی انگلی کون سی کلید بجاتی ہے؟`,
    },
    "middle-finger-quiz": {
      text: `ہاتھ ابھی بھی ${isolate("G")} پوزیشن میں ہے۔ درمیانی انگلی کون سی کلید بجاتی ہے؟`,
    },
    "read-g-position": {
      text: `یہ ٹریبل اسٹاف پر ${isolate("G")} پوزیشن کے نوٹ ہیں۔ ہر نوٹ کا نام بتائیں۔`,
    },
    "c-position-phrase": {
      text: `${isolate("C")} پوزیشن سے شروع کریں۔ انگوٹھے سے چوتھی انگلی تک اوپر بجائیں، اور پھر واپس نیچے مڈل ${isolate("C")} تک۔`,
    },
    "g-position-phrase": {
      text: `اب ہاتھ ${isolate("G")} پوزیشن میں لے جائیں اور وہی شکل بجائیں۔ انگوٹھا ${isolate("G")} پر، اوپر ${isolate("C")} تک، اور پھر واپس نیچے۔`,
    },
    "move-in-a-rest": {
      text: "ہاتھ کی جگہ ریسٹ کے دوران یا کسی لمبے نوٹ کے آخر میں بدلیں۔ پورا ہاتھ اٹھائیں، اس کی شکل وہی رکھیں، اور انگوٹھا نئی کلید پر لا کر رکھیں۔",
    },
    "move-and-play": {
      text: `دائیں ہاتھ سے دھن کے دو ٹکڑے بغیر رکے بجائیں۔ مڈل ${isolate("C")} سے شروع کر کے ${isolate("C D E F E D C")} بجائیں۔ پھر انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("G")} پر لے جائیں، اور ${isolate("G A B C B A G")} بجائیں۔`,
    },
    recap: {
      text: "شاباش! اب ہاتھ اپنی جگہ بدل سکتا ہے۔",
      points: [
        `${isolate("G")} پوزیشن میں دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} سے اوپر والے ${isolate("G")} پر ہوتا ہے۔`,
        `تب انگلیاں ${isolate("G A B C D")} بجاتی ہیں۔`,
        "ریسٹ یا لمبے نوٹ کے دوران پورا ہاتھ کھسکائیں، اور اس کی شکل وہی رکھیں۔",
      ],
    },
  },
};

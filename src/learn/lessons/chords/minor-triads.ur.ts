/** *Minor triads* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsUr: Translation<MinorTriadsTexts> = {
  title: "مائنر ٹرائیڈ",
  steps: {
    "major-then-minor": {
      text: `${isolate("C")} پر دو کورڈ سنیں۔ پہلا ${isolate("C")} میجر ہے، اور اس کی آواز روشن ہے۔ دوسرا ${isolate("C")} مائنر ہے، اور اس کی آواز کچھ اداس ہے۔`,
    },
    "thirds-swap": {
      text: "میجر ٹرائیڈ میں نیچے والا تھرڈ میجر تھرڈ ہوتا ہے: چار سیمی ٹون۔ اوپر والا مائنر تھرڈ ہوتا ہے۔ مائنر ٹرائیڈ میں یہ جگہ بدل لیتے ہیں، اس لیے مائنر تھرڈ پہلے آتا ہے۔",
    },
    "minor-third-size": {
      text: "میجر تھرڈ چار سیمی ٹون کا ہوتا ہے۔ مائنر تھرڈ کتنے سیمی ٹون کا ہوتا ہے؟",
      answers: ["چار", "تین", "دو"],
    },
    "lower-the-middle": {
      text: `یعنی ایک ہی قدم میں میجر ٹرائیڈ مائنر بن جاتا ہے۔ اس کا بیچ والا نوٹ ایک سیمی ٹون نیچے کر دیں۔ ${isolate("C")}، ${isolate("E")} اور ${isolate("G")} بن جاتے ہیں ${isolate("C")}، ${isolate("E")} فلیٹ اور ${isolate("G")}۔`,
    },
    "find-e-flat": {
      text: `کلیدوں پر ${isolate("E")} فلیٹ ڈھونڈیں۔ یہ ${isolate("E")} کے بالکل بائیں والی کالی کلید ہے۔`,
    },
    "c-major-to-minor": {
      text: `اب آپ کی باری۔ مڈل ${isolate("C")} سے انگلیوں 1، 3 اور 5 کے ساتھ ${isolate("C")} میجر بجائیں۔ پھر ${isolate("C")} مائنر کے لیے انگلی 3 کو کھسکا کر ${isolate("E")} فلیٹ پر لے آئیں، اور دونوں کو دو بار بجائیں۔`,
    },
    "hear-the-middle-drop": {
      text: "میجر اور مائنر میں صرف بیچ والا نوٹ ایک سیمی ٹون کھسکتا ہے۔ کیا دوسری کلید کی پچ اونچی ہے، نیچی ہے یا ویسی ہی؟",
    },
    "white-key-minors": {
      text: `تین مائنر ٹرائیڈ صرف سفید کلیدوں سے بنتے ہیں۔ ${isolate("A")} مائنر ہے ${isolate("A-C-E")}، ${isolate("D")} مائنر ہے ${isolate("D-F-A")}، اور ${isolate("E")} مائنر ہے ${isolate("E-G-B")}۔`,
    },
    "a-minor": {
      text: `دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} سے نیچے والے ${isolate("A")} پر رکھیں۔ ${isolate("A")} مائنر دو بار بجائیں: ${isolate("A")}، ${isolate("C")} اور ${isolate("E")} ایک ساتھ۔`,
    },
    "d-and-e-minor": {
      text: `اب ہاتھ کو آگے بڑھائیں۔ مڈل ${isolate("C")} سے اوپر والے ${isolate("D")} سے ${isolate("D")} مائنر بجائیں، پھر ایک سفید کلید اوپر ${isolate("E")} مائنر، پھر دوبارہ ${isolate("D")} مائنر۔`,
    },
    "g-major-to-minor": {
      text: `${isolate("G")} میجر ہے ${isolate("G")}، ${isolate("B")} اور ${isolate("D")}۔ ${isolate("G")} مائنر بجانے کے لیے کون سا نوٹ نیچے کریں گے؟`,
      answers: ["B", "G", "D"],
    },
    "major-minor-pairs": {
      text: `${isolate("F")} شارپ کے ساتھ ${isolate("D")} میجر بجائیں، پھر ${isolate("F")} کے ساتھ ${isolate("D")} مائنر۔ پھر ${isolate("B")} کے ساتھ ${isolate("G")} میجر بجائیں، اور ${isolate("B")} فلیٹ کے ساتھ ${isolate("G")} مائنر۔`,
    },
    recap: {
      text: "شاباش! اب آپ میجر اور مائنر ٹرائیڈ بجا سکتے ہیں۔",
      points: [
        "مائنر ٹرائیڈ میں پہلے مائنر تھرڈ آتا ہے، پھر اس کے اوپر میجر تھرڈ۔",
        "میجر ٹرائیڈ کا بیچ والا نوٹ نیچے کریں، تو وہ مائنر بن جاتا ہے۔",
        "میجر کی آواز روشن ہوتی ہے، اور مائنر کی کچھ اداس۔",
        `${isolate("A")}، ${isolate("D")} اور ${isolate("E")} مائنر صرف سفید کلیدوں سے بنتے ہیں۔`,
      ],
    },
  },
};

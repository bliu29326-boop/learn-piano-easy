/** *The C major scale* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { TheCMajorScaleTexts } from "./the-c-major-scale.en";

export const theCMajorScaleUr: Translation<TheCMajorScaleTexts> = {
  title: `${isolate("C")} میجر اسکیل`,
  steps: {
    "scale-demo": {
      text: `آٹھ نوٹ سنیں، جو مڈل ${isolate("C")} سے اگلے ${isolate("C")} تک چڑھتے ہیں۔ ہر کلید سفید ہے۔`,
    },
    "what-a-scale-is": {
      text: `اسکیل نوٹوں کی ایک قطار ہے، جو ایک ایک قدم اوپر چڑھتی ہے۔ ${isolate("C")} میجر اسکیل ${isolate("C")} سے شروع ہو کر اگلے ${isolate("C")} پر ختم ہوتا ہے۔`,
    },
    "scale-pattern": {
      text: `اس کے قدم ایک پیٹرن پر چلتے ہیں: ٹون، ٹون، سیمی ٹون، ٹون، ٹون، ٹون، سیمی ٹون۔ سیمی ٹون ${isolate("E")} سے ${isolate("F")} اور ${isolate("B")} سے ${isolate("C")} ہیں۔`,
    },
    "first-half-step": {
      text: `${isolate("C")} میجر اسکیل کا پہلا سیمی ٹون کہاں ہے؟`,
      answers: [
        `${isolate("C")} سے ${isolate("D")} تک`,
        `${isolate("G")} سے ${isolate("A")} تک`,
        `${isolate("E")} سے ${isolate("F")} تک`,
      ],
    },
    "first-three": {
      text: `دائیں ہاتھ کا انگوٹھا مڈل ${isolate("C")} پر رکھیں۔ انگلیاں 1، 2 اور 3 سے ${isolate("C")}، ${isolate("D")} اور ${isolate("E")} بجائیں۔`,
    },
    "thumb-under": {
      text: `آٹھ نوٹوں کے لیے ہاتھ میں صرف پانچ انگلیاں ہیں۔ ${isolate("E")} کے بعد انگوٹھا ہاتھ کے نیچے سے لے جائیں، اور اس سے ${isolate("F")} بجائیں۔`,
    },
    "which-finger-on-f": {
      text: `${isolate("C")}، ${isolate("D")} اور ${isolate("E")} انگلیاں 1، 2 اور 3 سے بجتے ہیں۔ ${isolate("F")} کون سی انگلی بجاتی ہے؟`,
      answers: ["انگلی 4", "انگلی 1، انگوٹھا", "انگلی 5"],
    },
    "tuck-to-f": {
      text: `${isolate("C")}، ${isolate("D")} اور ${isolate("E")} دوبارہ بجائیں۔ پھر انگوٹھا نیچے سے لے جائیں اور ${isolate("F")} بجائیں۔ کلائی پرسکون اور سیدھی رکھیں۔`,
    },
    "last-five": {
      text: `اب انگوٹھا ${isolate("F")} پر ہے۔ انگلیاں 1، 2، 3، 4 اور 5 سے ${isolate("F")}، ${isolate("G")}، ${isolate("A")}، ${isolate("B")} اور ${isolate("C")} بجائیں۔`,
    },
    "scale-up": {
      text: `دائیں ہاتھ سے ${isolate("C")} میجر اسکیل اوپر کی طرف بجائیں، مڈل ${isolate("C")} سے اگلے ${isolate("C")} تک۔ انگلیاں 1، 2، 3، پھر انگوٹھا نیچے سے جاتا ہے، پھر 1، 2، 3، 4، 5۔`,
    },
    "scale-down": {
      text: `اب انگلیاں 5، 4، 3، 2، 1 سے واپس نیچے آئیں۔ ${isolate("F")} کے بعد انگلی 3 انگوٹھے کے اوپر سے ${isolate("E")} پر جاتی ہے۔`,
    },
    recap: {
      text: "شاباش! آپ نے اپنا پہلا اسکیل بجایا۔",
      points: [
        `${isolate("C")} میجر اسکیل ${isolate("C")} سے ${isolate("C")} تک آٹھ سفید کلیدوں کا ہوتا ہے۔`,
        "اس کا پیٹرن ہے: ٹون، ٹون، سیمی ٹون، ٹون، ٹون، ٹون، سیمی ٹون۔",
        `اوپر جاتے ہوئے انگوٹھا نیچے سے ${isolate("F")} پر جاتا ہے۔`,
        `نیچے آتے ہوئے انگلی 3 انگوٹھے کے اوپر سے ${isolate("E")} پر جاتی ہے۔`,
      ],
    },
  },
};

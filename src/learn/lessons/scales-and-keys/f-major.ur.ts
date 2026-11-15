/** *F major* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { FMajorTexts } from "./f-major.en";

export const fMajorUr: Translation<FMajorTexts> = {
  title: `${isolate("F")} میجر`,
  steps: {
    "f-major-sound": {
      text: `ایک نیا اسکیل سنیں۔ یہ ${isolate("F")} سے شروع ہو کر ${isolate("F")} پر ختم ہوتا ہے۔ کیا اس میں ایک کالی کلید سنائی دیتی ہے؟`,
    },
    "pattern-on-f": {
      text: `اسکیل کا پیٹرن ${isolate("F")} سے شروع کریں: ٹون، ٹون، سیمی ٹون، ٹون، ٹون، ٹون، سیمی ٹون۔ ${isolate("F")} سے ${isolate("G")} ایک ٹون ہے، اور ${isolate("G")} سے ${isolate("A")} بھی۔`,
    },
    "after-a": {
      text: `اب ${isolate("A")} سے ایک سیمی ٹون اوپر جانا ہے۔ وہ کون سی کلید ہے؟`,
    },
    "find-b-flat": {
      text: `${isolate("B")} فلیٹ ڈھونڈیں۔ یہ ${isolate("B")} کے بالکل بائیں والی کالی کلید ہے۔`,
    },
    "f-fingering": {
      text: `دائیں ہاتھ کا انگوٹھا ${isolate("F")} پر رکھیں۔ انگلیاں 1، 2، 3 اور 4 سے ${isolate("F")}، ${isolate("G")}، ${isolate("A")} اور ${isolate("B")} فلیٹ بجائیں۔ پھر انگوٹھا نیچے سے ${isolate("C")} پر لے جائیں، اور 1، 2، 3، 4 سے آگے بجائیں۔`,
    },
    "where-thumb-under": {
      text: `${isolate("F")} میجر میں انگوٹھا کس کلید کے بعد نیچے سے جاتا ہے؟`,
    },
    "f-scale-up": {
      text: `اب آپ کی باری۔ ${isolate("F")} میجر اسکیل اوپر کی طرف بجائیں، مڈل ${isolate("C")} سے اوپر والے ${isolate("F")} سے اگلے ${isolate("F")} تک۔ ${isolate("B")} فلیٹ یاد رکھیں۔`,
    },
    "f-scale-down": {
      text: `اب اسے نیچے بجائیں۔ ${isolate("C")} کے بعد انگلی 4 انگوٹھے کے اوپر سے ${isolate("B")} فلیٹ پر لے جائیں۔`,
    },
    "tune-in-f": {
      text: `یہ ${isolate("F")} میجر میں ایک چھوٹی سی دھن ہے۔ بایاں ہاتھ اس کے نیچے ${isolate("F")} اور ${isolate("C")} کی ففتھ دبائے رکھتا ہے۔`,
    },
    "tune-and-fifth": {
      text: `بایاں ہاتھ نیچے والی ففتھ بجاتا ہے: مڈل ${isolate("C")} سے نیچے والا ${isolate("C")}، اور اس کے نیچے کا ${isolate("F")}۔ دایاں ہاتھ مڈل ${isolate("C")} سے اوپر والے ${isolate("F")} سے شروع کرتا ہے۔ ہر میژر کے پہلے نوٹ کے ساتھ ففتھ بھی دبائیں۔`,
    },
    recap: {
      text: `شاباش! اب ${isolate("F")} میجر میں آپ بجا سکتے ہیں۔`,
      points: [
        `${isolate("F")} سے شروع ہونے والے اسکیل کے پیٹرن کو ایک کالی کلید چاہیے: ${isolate("B")} فلیٹ۔`,
        `دایاں ہاتھ 1، 2، 3، 4 بجاتا ہے، انگوٹھا نیچے سے ${isolate("C")} پر جاتا ہے، پھر 1، 2، 3، 4۔`,
        `نیچے آتے ہوئے انگلی 4 انگوٹھے کے اوپر سے ${isolate("B")} فلیٹ پر جاتی ہے۔`,
      ],
    },
  },
};

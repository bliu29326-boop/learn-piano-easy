/** *Finger over the thumb* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { FingerOverTheThumbTexts } from "./finger-over-the-thumb.en";

export const fingerOverTheThumbUr: Translation<FingerOverTheThumbTexts> = {
  title: "انگوٹھے کے اوپر سے انگلی",
  steps: {
    "down-demo": {
      text: `${isolate("C")} میجر اسکیل نیچے آتے ہوئے سنیں، اوپر والے ${isolate("C")} سے مڈل ${isolate("C")} تک۔ ہاتھ کہیں نہیں رکتا، اور نوٹ روانی سے بہتے ہیں۔`,
    },
    "finger-over": {
      text: `نیچے آتے ہوئے انگلیاں 5، 4، 3، 2 اور 1 سے ${isolate("C")}، ${isolate("B")}، ${isolate("A")}، ${isolate("G")} اور ${isolate("F")} بجائیں۔ پھر انگلی 3 انگوٹھے کے اوپر سے ${isolate("E")} پر جاتی ہے۔ انگلیاں 2 اور 1، ${isolate("D")} اور ${isolate("C")} بجاتی ہیں۔`,
    },
    "which-finger-crosses": {
      text: `نیچے آتے ہوئے انگوٹھا ${isolate("F")} بجا چکا ہے۔ کون سی انگلی اس کے اوپر سے ${isolate("E")} پر جاتی ہے؟`,
      answers: ["انگلی 2", "انگلی 3", "انگلی 5"],
    },
    "top-five-down": {
      text: `چھوٹی انگلی مڈل ${isolate("C")} سے اوپر والے ${isolate("C")} پر رکھیں۔ ہر کلید کے لیے ایک انگلی، نیچے ${isolate("F")} تک بجائیں۔`,
    },
    "cross-onto-e": {
      text: `انگوٹھے سے ${isolate("F")} پر شروع کریں۔ انگلی 3 انگوٹھے کے اوپر سے ${isolate("E")} پر لے جائیں، پھر ${isolate("D")} اور ${isolate("C")} بجائیں۔`,
    },
    "right-hand-down": {
      text: `اب پورا اسکیل نیچے کی طرف بجائیں، اوپر والے ${isolate("C")} سے مڈل ${isolate("C")} تک۔ جب انگلی 3 اوپر سے جائے، تو ہاتھ ڈھیلا رکھیں۔`,
    },
    "left-hand-up": {
      text: `بایاں ہاتھ اوپر جاتے ہوئے یہی کرتا ہے۔ انگلیاں 5، 4، 3، 2 اور 1 سے ${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} بجائیں۔ پھر انگلی 3 انگوٹھے کے اوپر سے ${isolate("A")} پر جاتی ہے۔`,
    },
    "left-hand-demo": {
      text: `دیکھیں، بایاں ہاتھ ${isolate("C")} میجر اوپر کی طرف بجاتا ہے، مڈل ${isolate("C")} کے نیچے والے ${isolate("C")} سے مڈل ${isolate("C")} تک۔`,
    },
    "left-cross-key": {
      text: `بایاں انگوٹھا ${isolate("G")} پر ہے۔ انگلی 3 اس کے اوپر سے جاتی ہے۔ وہ کس کلید پر پہنچتی ہے؟`,
    },
    "left-scale-up": {
      text: `اب آپ کی باری۔ بائیں ہاتھ سے اسکیل اوپر کی طرف بجائیں، مڈل ${isolate("C")} کے نیچے والے ${isolate("C")} سے مڈل ${isolate("C")} تک۔`,
    },
    "scale-up-and-down": {
      text: `دائیں ہاتھ سے ${isolate("C")} میجر اسکیل بجائیں، مڈل ${isolate("C")} سے اگلے ${isolate("C")} تک اوپر، اور پھر واپس نیچے۔ اوپر جاتے ہوئے انگوٹھا نیچے سے لے جائیں، اور نیچے آتے ہوئے انگلی 3 انگوٹھے کے اوپر سے۔`,
    },
    recap: {
      text: "شاباش! اب آپ کی انگلیاں دونوں طرف کراس کرتی ہیں۔",
      points: [
        "نیچے آتے ہوئے دایاں ہاتھ 5، 4، 3، 2، 1 بجاتا ہے، پھر انگلی 3 انگوٹھے کے اوپر سے جاتی ہے۔",
        `اوپر جاتے ہوئے بایاں ہاتھ یہی کرتا ہے، اور انگلی 3 ${isolate("A")} پر جاتی ہے۔`,
        "دائیں ہاتھ میں اوپر جاتے ہوئے انگوٹھا نیچے سے جاتا ہے، اور نیچے آتے ہوئے انگلی 3 اوپر سے۔",
      ],
    },
  },
};

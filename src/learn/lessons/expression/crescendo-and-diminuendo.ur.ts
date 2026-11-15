/** *Crescendo and diminuendo* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { CrescendoAndDiminuendoTexts } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendoUr: Translation<CrescendoAndDiminuendoTexts> = {
  title: "کریشینڈو اور ڈمنیوئنڈو",
  steps: {
    "crescendo-demo": {
      text: `${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} سنیں۔ ہر نوٹ پچھلے نوٹ سے تھوڑا زیادہ زور سے بجتا ہے۔`,
    },
    "getting-louder": {
      text: `آواز کا تھوڑا تھوڑا کر کے بڑھنا کریشینڈو کہلاتا ہے۔ موسیقی میں اسے ${isolate("cresc.")} لکھتے ہیں، یا کھلتا ہوا ہیئر پن کا نشان ${isolate("<")} بناتے ہیں، جو آواز بڑھنے کے ساتھ چوڑا ہوتا جاتا ہے۔`,
    },
    "what-cresc-asks": {
      text: `اسٹاف کے نیچے ${isolate("cresc.")} نظر آ رہا ہے۔ یہ آپ سے کیا کرنے کو کہتا ہے؟`,
      answers: ["آواز تھوڑی تھوڑی کم کریں", "آواز تھوڑی تھوڑی بڑھائیں", "تیز رفتار سے بجائیں", "نوٹ اونچی پچ پر بجائیں"],
    },
    "play-crescendo": {
      text: `مڈل ${isolate("C")} سے شروع کر کے ${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} کریشینڈو کے ساتھ بجائیں۔ ${isolate("C")}، ${isolate("D")} اور ${isolate("E")} نرمی سے اور آہستہ آہستہ دبائیں، پھر ${isolate("F")} اور ${isolate("G")} تیزی سے اور مضبوطی سے۔`,
    },
    "hear-crescendo": {
      text: `${isolate("C")}، ${isolate("D")}، ${isolate("E")}، ${isolate("F")} اور ${isolate("G")} کو کریشینڈو کے ساتھ بجتے ہوئے سنیں۔ ہر کلید پچھلی کلید سے تھوڑی زیادہ تیزی سے نیچے جاتی ہے۔`,
    },
    "how-crescendo-changed": {
      text: "پہلے نوٹ سے آخری نوٹ تک آواز کیسے بدلی؟",
      answers: ["ہلکی ہی رہی", "ہلکی ہوتی گئی", "زور دار ہی رہی", "زور دار ہوتی گئی"],
    },
    "diminuendo-demo": {
      text: `اب ${isolate("G")}، ${isolate("F")}، ${isolate("E")}، ${isolate("D")} اور ${isolate("C")} سنیں۔ ہر نوٹ پچھلے نوٹ سے تھوڑا ہلکا بجتا ہے۔`,
    },
    "getting-softer": {
      text: `آواز کا تھوڑا تھوڑا کر کے کم ہونا ڈمنیوئنڈو کہلاتا ہے، اور اس کا نشان ${isolate("dim.")} ہے۔ اسے ڈیکریشینڈو بھی کہتے ہیں، جس کا نشان ${isolate("decresc.")} ہے۔ بند ہوتا ہوا ہیئر پن کا نشان ${isolate(">")} بھی یہی کہتا ہے۔`,
    },
    "which-hairpin-softer": {
      text: "کون سا نشان آواز تھوڑی تھوڑی کم کرنے کو کہتا ہے؟",
      answers: [`بند ہوتا ہیئر پن ${isolate(">")}`, `کھلتا ہیئر پن ${isolate("<")}`, `نشان ${isolate("f")}`, `نشان ${isolate("mf")}`],
    },
    "play-diminuendo": {
      text: `مڈل ${isolate("C")} کے اوپر والے ${isolate("G")} سے شروع کر کے ${isolate("G")}، ${isolate("F")}، ${isolate("E")}، ${isolate("D")} اور ${isolate("C")} ڈمنیوئنڈو کے ساتھ بجائیں۔ ${isolate("G")}، ${isolate("F")} اور ${isolate("E")} تیزی سے اور مضبوطی سے دبائیں، پھر ${isolate("D")} اور ${isolate("C")} نرمی سے اور آہستہ آہستہ۔`,
    },
    "hear-diminuendo": {
      text: `${isolate("G")}، ${isolate("F")}، ${isolate("E")}، ${isolate("D")} اور ${isolate("C")} کو ڈمنیوئنڈو کے ساتھ بجتے ہوئے سنیں۔ ہر کلید پچھلی کلید سے تھوڑی کم تیزی سے نیچے جاتی ہے۔`,
    },
    "how-diminuendo-changed": {
      text: "پہلے نوٹ سے آخری نوٹ تک آواز کیسے بدلی؟",
      answers: ["زور دار ہوتی گئی", "زور دار ہی رہی", "ہلکی ہوتی گئی", "ہلکی ہی رہی"],
    },
    "swell-and-fade": {
      text: "دھن کا ٹکڑا اکثر اوپر جاتے ہوئے زور پکڑتا ہے اور نیچے آتے ہوئے ہلکا ہو جاتا ہے۔ یہ لہر کی طرح ابھرتا اور اترتا ہے۔",
    },
    "play-swell": {
      text: `مڈل ${isolate("C")} سے ${isolate("G")} تک اوپر جائیں اور واپس ${isolate("C")} تک آئیں۔ اوپر جاتے ہوئے آواز بڑھائیں اور نیچے آتے ہوئے کم کریں۔ یہ مرحلہ صرف نوٹ جانچتا ہے، اس لیے آواز کا زور اپنے کانوں سے پرکھیں۔`,
    },
    "how-it-ends": {
      text: `دھن کا ایک ٹکڑا ${isolate("p")} سے شروع ہوتا ہے، اور اس کے نیچے کھلتا ہوا ہیئر پن ${isolate("<")} ہے۔ اس کا اختتام کیسا ہونا چاہیے؟`,
      answers: [`${isolate("p")} سے بھی ہلکا`, "شروع جتنا ہی ہلکا", "شروع سے زیادہ تیز رفتار", "شروع سے زیادہ زور دار"],
    },
    recap: {
      text: "شاباش! آپ نے موسیقی کی آواز بڑھانا اور کم کرنا سیکھ لیا۔",
      points: [
        `کریشینڈو میں آواز بڑھتی ہے۔ اس کا نشان ${isolate("cresc.")} یا کھلتا ہوا ہیئر پن ${isolate("<")} ہے۔`,
        `ڈمنیوئنڈو میں آواز کم ہوتی ہے۔ اس کا نشان ${isolate("dim.")}، ${isolate("decresc.")} یا بند ہوتا ہوا ہیئر پن ${isolate(">")} ہے۔`,
        "دھن کا ٹکڑا اکثر اوپر جاتے ہوئے ابھرتا ہے اور نیچے آتے ہوئے اترتا ہے۔",
      ],
    },
  },
};

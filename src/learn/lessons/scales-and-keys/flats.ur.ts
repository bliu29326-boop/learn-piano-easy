/** *Flats* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { FlatsTexts } from "./flats.en";

export const flatsUr: Translation<FlatsTexts> = {
  title: "فلیٹ",
  steps: {
    "flat-sound": {
      text: `${isolate("B")} سنیں، پھر اس کے بالکل بائیں والی کالی کلید۔ پھر ${isolate("E")} سنیں، اور ${isolate("E")} کے بالکل بائیں والی کالی کلید۔`,
    },
    "what-a-flat-is": {
      text: `یہ نشان فلیٹ ہے: ${isolate("♭")}۔ فلیٹ نوٹ کی پچ ایک سیمی ٹون نیچی کرتا ہے۔ اس کے لیے نوٹ کے بالکل بائیں والی کلید بجائیں۔`,
    },
    "find-b-flat": {
      text: `${isolate("B")} فلیٹ ڈھونڈیں، جو ${isolate("B♭")} لکھا جاتا ہے۔ ${isolate("B")} سے شروع کریں اور ایک کلید بائیں جائیں۔`,
    },
    "find-e-flat": {
      text: `اب ${isolate("E")} فلیٹ ڈھونڈیں، جو ${isolate("E♭")} لکھا جاتا ہے۔ یہ ${isolate("E")} کے بالکل بائیں والی کالی کلید ہے۔`,
    },
    "which-is-e-flat": {
      text: `${isolate("E")} فلیٹ کون سی کلید ہے؟`,
      answers: [
        `سفید کلید ${isolate("D")}`,
        `${isolate("E")} کے دائیں والی کالی کلید`,
        `${isolate("E")} کے بائیں والی کالی کلید`,
      ],
    },
    "hear-flats": {
      text: "فلیٹ کی پچ تھوڑی نیچی ہوتی ہے۔ دو نوٹ سنیں۔ کیا دوسرے نوٹ کی پچ اونچی ہے، نیچی ہے یا ایک جیسی؟",
    },
    "two-names": {
      text: `${isolate("C")} شارپ کا مطلب ہے ${isolate("C")} کے دائیں والی کالی کلید۔ ${isolate("D")} فلیٹ کا مطلب ہے ${isolate("D")} کے بائیں والی کالی کلید۔ یہ ایک ہی کلید ہے، اس لیے اس کے دو نام ہیں۔`,
    },
    "other-name-quiz": {
      text: `${isolate("C")} شارپ اور ایک فلیٹ ایک ہی کالی کلید ہیں۔ وہ کون سا فلیٹ ہے؟`,
    },
    "half-steps-down": {
      text: `اب آپ کی باری۔ ${isolate("B")}، ${isolate("B")} فلیٹ اور ${isolate("A")} بجائیں، پھر ${isolate("E")}، ${isolate("E")} فلیٹ اور ${isolate("D")}۔ ہر نوٹ پچھلے نوٹ سے ایک سیمی ٹون نیچے ہے۔`,
    },
    recap: {
      text: "شاباش! اب آپ کو معلوم ہے کہ فلیٹ کیا ہوتا ہے۔",
      points: [
        `فلیٹ ${isolate("♭")} نوٹ کی پچ ایک سیمی ٹون نیچی کرتا ہے۔`,
        `${isolate("B")} فلیٹ، ${isolate("B")} کے بائیں والی کالی کلید ہے، اور ${isolate("E")} فلیٹ، ${isolate("E")} کے بائیں والی۔`,
        `ایک کالی کلید کے دو نام ہو سکتے ہیں: ${isolate("C")} شارپ ہی ${isolate("D")} فلیٹ ہے۔`,
      ],
    },
  },
};

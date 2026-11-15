/** The sponsor page in Urdu. A text it leaves out shows in English. */
import { isolate } from "../format";
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

const SITE_NAME = isolate("Learn Piano Easy");
const GITHUB = isolate("GitHub");

export const sponsorPage: Translation<typeof en> = {
  lead: `${SITE_NAME} مفت ہے، اور مفت ہی رہے گا۔ اگر اس نے آپ کے دن میں تھوڑی سی موسیقی شامل کی ہے، تو اسے آگے بڑھانے میں آپ کی مدد کام آ سکتی ہے۔`,
  action: `${GITHUB} پر اسپانسر کریں`,
  note: "چھوٹی بڑی ہر رقم کام آتی ہے، ایک بار یا ہر مہینے۔",
  promises: ["کوئی اشتہار نہیں", "کوئی اکاؤنٹ نہیں", "آف لائن چلتا ہے", `اوپن سورس، ${isolate("MIT")} لائسنس`],
  picture: "ایک بڑا دل، جس کے گرد موسیقی کے دو نوٹ تیر رہے ہیں",
  who: {
    heading: "اسے کون بناتا ہے",
    text: [
      `${SITE_NAME} کو ایک شخص اپنے فارغ وقت میں بناتا ہے، کام، زندگی اور اسکیل کی مشق کے بیچ۔`,
      "کوالٹی کی جانچ ایک بلی کرتی ہے، جو کبھی کبھی کلیدوں پر چل پڑتی ہے۔",
    ],
  },
  spend: {
    heading: "آپ کی اسپانسرشپ کہاں جاتی ہے",
    items: [
      { title: "وقت", text: "نئے اسباق، نئے گانوں اور کم بگز کے لیے شامیں۔" },
      { title: "ڈومین", text: "تاکہ ویب سائٹ کا پتا وہی رہے، اور یہ آپ کو ہمیشہ اسی جگہ ملے۔" },
      { title: "کافی", text: "یہ تقریباً 120 بیٹ فی منٹ کے یکساں ٹیمپو پر کوڈ میں بدل جاتی ہے۔" },
    ],
  },
  help: {
    heading: "مدد کے دوسرے طریقے",
    lead: "پیسہ مدد کا ایک طریقہ ہے۔ یہ طریقے بھی اتنے ہی اہم ہیں:",
    star: { text: `${GITHUB} پر پروجیکٹ کو اسٹار دیں، تاکہ دوسرے سیکھنے والے اسے ڈھونڈ سکیں۔`, action: `${GITHUB} پر اسٹار دیں` },
    bug: { text: "جب کچھ غلط سنائی دے، تو بگ کی اطلاع دیں۔", action: "بگ کی اطلاع دیں" },
    friend: "کسی ایسے شخص کو بتائیں جس کی ہمیشہ سے پیانو سیکھنے کی خواہش رہی ہے۔",
  },
  thanks: "بجانے کا شکریہ۔ یہ سب آپ ہی کی بدولت ہے۔",
};

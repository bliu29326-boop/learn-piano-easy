/** The badges of *Learn Piano* in Urdu. It is a translation of the English one, so a text it leaves out shows in English. */
import { isolate } from "../format";
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "آپ کے پیانو ٹیچر کی طرف سے شاباش",
  fixed: {
    "first-note": { name: "پہلا نوٹ", description: "کسی سبق میں اپنا پہلا نوٹ بجائیں۔" },
    "first-lesson": { name: "پہلا سبق", description: "اپنا پہلا سبق مکمل کریں۔" },
    "first-three-stars": { name: "تین ستارے", description: "کوئی سبق تین ستاروں کے ساتھ مکمل کریں۔" },
    "three-stars-ten": { name: "ستاروں کا خزانہ", description: "دس اسباق میں تین تین ستارے حاصل کریں۔" },
    "first-daily-goal": { name: "ہدف پورا", description: "پہلی بار اپنا روزانہ کا ہدف پورا کریں۔" },
    "streak-3": { name: "تین دن لگاتار", description: "لگاتار تین دن اپنا روزانہ کا ہدف پورا کریں۔" },
    "streak-7": { name: "پورا ہفتہ لگاتار", description: "لگاتار سات دن اپنا روزانہ کا ہدف پورا کریں۔" },
    "streak-30": { name: "پورا مہینہ لگاتار", description: "لگاتار تیس دن اپنا روزانہ کا ہدف پورا کریں۔" },
    "streak-100": { name: "دنوں کی سنچری", description: "لگاتار سو دن اپنا روزانہ کا ہدف پورا کریں۔" },
    "notes-1000": { name: "ہزار نوٹ", description: "اسباق میں ایک ہزار نوٹ بجائیں۔" },
    "notes-10000": { name: "دس ہزار نوٹ", description: "اسباق میں دس ہزار نوٹ بجائیں۔" },
    "rhythm-ace": { name: "پہلی گیند پر چھکا", description: "ردھم کا کوئی مرحلہ پہلی ہی کوشش میں پاس کریں۔" },
    "sight-reader": { name: "ایک نظر میں", description: "بغیر کسی غلطی کے لگاتار دس نوٹ پڑھیں۔" },
    "early-bird": { name: "صبح سویرے", description: "صبح 8 بجے سے پہلے کوئی سبق مکمل کریں۔" },
    "night-owl": { name: "رات کا الو", description: "رات 10 بجے یا اس کے بعد کوئی سبق مکمل کریں۔" },
    comeback: { name: "واپسی مبارک", description: "ایک ہفتے کے وقفے کے بعد واپس آ کر کوئی سبق کریں۔" },
    legendary: { name: "مشکل گانا", description: `"بس پیانو بجائیں" والے حصے میں ہمارے کسی گانے کا مشکل ورژن آخر تک بجائیں۔` },
  },
  world: {
    name: (world: string) => `${isolate(world)} پر عبور`,
    description: (world: string) => `${isolate(world)} کا بڑا چیلنج جیتیں۔`,
  },
};

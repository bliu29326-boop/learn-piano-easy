/** The profile of *Learn Piano* in Urdu. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

/** `value` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const n = (value: number) => isolate(formatNumber("ur", value));
/** `value` with the kept word XP, isolated as one run. */
const xp = (value: number) => isolate(`${n(value)} XP`);
/** A count of days. `دن` keeps its form in both plural forms. */
const days = (value: number) => `${n(value)} دن`;

export const learnProfile: Translation<typeof en> = {
  loading: "آپ کی پیش رفت لوڈ ہو رہی ہے…",
  level: {
    heading: "لیول",
    name: (level: number) => `لیول ${n(level)}`,
    total: (total: number) => `کل ${xp(total)}`,
    toNext: (level: number) => `لیول ${n(level)} تک`,
  },
  streak: {
    heading: "لگاتار دن",
    current: (count: number) => days(count),
    currentLabel: "اب تک لگاتار",
    best: (count: number) => `بہترین: ${days(count)}`,
    today: (earned: number, goal: number) =>
      earned >= goal ? `آج: ${xp(earned)}، اور ${n(goal)} کا ہدف پورا ہو گیا` : `آج: ${xp(goal)} میں سے ${n(earned)}`,
  },
  calendar: {
    heading: "پچھلے آٹھ ہفتے",
    label: (met: number, played: number) => `پچھلے آٹھ ہفتوں میں ${days(met)} ہدف پورا ہوا، اور ${days(played)} کوئی سبق ہوا۔`,
    met: "ہدف پورا",
    played: "سبق ہوا",
    none: "کوئی سبق نہیں",
  },
  stats: {
    heading: "اعداد و شمار",
    lessons: "مکمل اسباق",
    threeStars: "تین ستاروں والے اسباق",
    days: "مشق کے دن",
    badges: "حاصل شدہ بیج",
  },
  badges: {
    heading: "بیج",
    lead: (earned: number, all: number) => `${n(all)} میں سے ${n(earned)} حاصل`,
    earned: (name: string) => `${isolate(name)}، حاصل ہو گیا`,
    locked: (name: string) => `${isolate(name)}، ابھی حاصل نہیں ہوا`,
  },
  choices: {
    heading: "آپ کی ترتیبات",
    goal: "روزانہ کا ہدف",
    goalHelp: `لگاتار دن جاری رکھنے کے لیے روزانہ اتنے ${isolate("XP")} درکار ہیں۔`,
    sounds: "انعام کی آوازیں",
    soundsHelp: "مرحلہ پاس ہونے، ستارہ ملنے، نیا لیول آنے اور بیج ملنے پر ہلکی سی گھنٹی بجتی ہے۔ پیانو کی آواز ہمیشہ آتی ہے۔",
  },
  data: {
    heading: "آپ کا ڈیٹا",
    lead: `آپ کی پیش رفت اسی براؤزر میں رہتی ہے۔ "آپ کا ڈیٹا" والا صفحہ اسے باقی سب کچھ کے ساتھ ایک فائل میں محفوظ کرتا ہے، اور اسی سے بحال بھی کرتا ہے۔`,
    open: "بیک اپ لیں یا بحال کریں",
    reset: "ساری پیش رفت ری سیٹ کریں",
    failed: "براؤزر میں محفوظ نہیں کیا جا سکا۔ کچھ نہیں بدلا۔",
    resetDone: "آپ کی پیش رفت ری سیٹ ہو گئی۔ بیک اپ فائل میں پہلے کا سب کچھ موجود ہے۔",
    close: "بند کریں",
    cancel: "میری پیش رفت رہنے دیں",
    ask: {
      title: "کیا ساری پیش رفت ری سیٹ کریں؟",
      text: `اس سے اس براؤزر سے ہر سبق، ستارہ، ${isolate("XP")} پوائنٹ اور بیج ہٹ جائے گا۔ آپ کی ترتیبات برقرار رہیں گی۔`,
      next: "جاری رکھیں",
    },
    askAgain: {
      title: "کیا آپ واقعی ایسا کرنا چاہتے ہیں؟",
      text: "پہلے ایک بیک اپ فائل محفوظ کی جاتی ہے، تاکہ بعد میں سب کچھ بحال کیا جا سکے۔ پھر آپ کی پیش رفت نئے سرے سے شروع ہوتی ہے۔",
      confirm: "میری پیش رفت ری سیٹ کریں",
    },
  },
};

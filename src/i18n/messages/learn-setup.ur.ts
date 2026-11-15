/** The first setup of *Learn Piano* in Urdu. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: `"پیانو سیکھیں" میں خوش آمدید`,
  welcome: "السلام علیکم! میں یہاں آپ کو پیانو سکھانے کے لیے ہوں۔ بس تین چھوٹے سے سوال، پھر بجانے کی باری۔",
  mascot: "آپ کا پیانو ٹیچر، شہد جیسے رنگ کے بالوں والا بن مانس جو کورڈرائے کی جیکٹ پہنے ہوئے ہے",
  close: "سیٹ اپ چھوڑیں",
  progress: "سیٹ اپ",
  steps: ["آپ کا پیانو", "آپ کا تجربہ", "روزانہ کا ہدف"],
  doneStep: "ہو گیا",
  next: "جاری رکھیں",
  device: {
    question: "بجانے کے لیے کیا استعمال ہو گا؟",
    midi: { name: `${isolate("MIDI")} کی بورڈ`, text: `ڈیجیٹل پیانو یا کی بورڈ، جو ${isolate("USB")} سے منسلک ہو۔` },
    computer: { name: "کمپیوٹر کی بورڈ", text: "کی بورڈ کے حروف والے بٹن نوٹ بجاتے ہیں۔" },
    screen: { name: "اسکرین", text: "اسکرین پر دکھائی گئی کلیدیں دبائیں۔" },
    noMidi: `اس براؤزر میں ${isolate("MIDI")} نہیں ہے۔ اس کے بجائے کمپیوٹر کی بورڈ یا اسکرین پر بجائیں۔`,
    check: "کوئی بھی کلید دبائیں، تاکہ ہم جانچ سکیں کہ وہ سنائی دیتی ہے۔",
    checkMidi: `اپنے ${isolate("MIDI")} کی بورڈ پر کوئی بھی کلید دبائیں۔`,
    checkComputer: `حرف والا کوئی بٹن دبائیں، جیسے ${isolate("Q")}، ${isolate("W")} یا ${isolate("E")}۔`,
    checkScreen: "نیچے کوئی کلید دبائیں۔",
    heard: (note: string) => `سن لیا: یہ ${isolate(note)} تھا۔`,
    keys: "آزمانے کے لیے پیانو",
    skip: "جانچ چھوڑیں",
    marks: { next: "یہ کلید آزمائیں", correct: "سنائی دی", mistake: "سنائی دی" },
  },
  before: {
    question: "کیا آپ نے پہلے کبھی پیانو بجایا ہے؟",
    never: "کبھی نہیں",
    little: "تھوڑا سا",
    yes: "ہاں، مجھے بجانا آتا ہے",
    skipTests: "نقشے پر ہر دنیا کا ایک آگے بڑھنے کا ٹیسٹ ہے۔ اسے پاس کریں، اور اس دنیا کے سارے اسباق ایک ساتھ کھل جائیں گے۔",
  },
  goal: {
    question: "روزانہ کتنی مشق؟",
    lead: `ہر روز اپنا ہدف پورا کریں، تاکہ لگاتار دن بڑھتے رہیں۔ تین ستاروں والا نیا سبق ${isolate(`${isolate(formatNumber("ur", 30))} XP`)} دیتا ہے۔`,
    label: "روزانہ کا ہدف",
    names: { "10": "آرام سے", "20": "باقاعدہ", "30": "پرجوش", "50": "دلیرانہ" },
    option: (xp: number, name: string) => `${isolate(`${isolate(formatNumber("ur", xp))} XP`)}، ${isolate(name)}`,
    start: "سیکھنا شروع کریں",
  },
};

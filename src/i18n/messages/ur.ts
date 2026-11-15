/** The Urdu catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.ur";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.ur";
import { learnLesson } from "./learn-lesson.ur";
import { learnMap } from "./learn-map.ur";
import { learnProfile } from "./learn-profile.ur";
import { learnSetup } from "./learn-setup.ur";
import { playerBar } from "./player-bar.ur";
import { playerInput } from "./player-input.ur";
import { playerLibrary } from "./player-library.ur";
import { playerSettings } from "./player-settings.ur";
import { playerShell } from "./player-shell.ur";
import { playModes } from "./play-modes.ur";
import { sponsorPage } from "./sponsor.ur";

const SITE_NAME = isolate(en.siteName);
const MIDI = isolate("MIDI");
const D3 = isolate("3D");
const MIT = isolate("MIT");

/** `n` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ur", n));

export const ur: Translation<Messages> = {
  noscript: `${SITE_NAME} کو چلنے کے لیے ${isolate("JavaScript")} درکار ہے۔`,
  pages: {
    home: {
      description: `بجا کر پیانو سیکھیں۔ رہنمائی والا کورس، ${D3} پیانو اور آپ کا ${MIDI} کی بورڈ۔ مفت، اوپن سورس اور آف لائن۔`,
    },
    play: {
      title: "بس پیانو بجائیں",
      description: `${MIDI} فائل کھولیں، اس کے نوٹ ${D3} پیانو کی طرف اڑتے دیکھیں، اور اپنے ${MIDI} کی بورڈ پر ساتھ ساتھ بجائیں۔`,
    },
    modes: {
      title: "بجانے کے موڈ",
      description: "بجانے کے تیار طریقے: پوائنٹس اور چنگاریوں کے ساتھ ایک گیم، یا ایک گانا جو آپ کا انتظار کرتا ہے اور ہر نوٹ کا نام بتاتا ہے۔",
    },
    learn: {
      title: "پیانو سیکھیں",
      description: "رہنمائی والا پیانو کورس، جو گیم کی طرح بنا ہے، ایک وقت میں ایک چھوٹا قدم۔",
    },
    profile: {
      title: "آپ کی پیش رفت",
      description: "آپ کا لیول، آپ کے بیج، اور آپ نے کتنا بجایا ہے۔",
    },
    about: {
      title: "تعارف",
      description: `${SITE_NAME} کیا ہے، اور اس کے ساتھ آنے والی ہر چیز کے لائسنس۔`,
    },
    data: {
      title: "آپ کا ڈیٹا",
      description: "اس براؤزر میں موجود اپنی ہر چیز ایک فائل میں محفوظ کریں، اور کسی بھی آلے پر واپس لائیں۔",
    },
    sponsor: {
      title: "اسپانسر کریں",
      description: `${SITE_NAME} مفت ہے، اور اسے ایک شخص بناتا ہے۔ اسے آگے بڑھانے میں مدد کے طریقے یہ ہیں۔`,
    },
    imprint: {
      title: "قانونی معلومات",
      description: `${SITE_NAME} کون چلاتا ہے، پتے اور رابطے کے ساتھ۔`,
    },
    privacy: {
      title: "رازداری کی پالیسی",
      description: `${SITE_NAME} آپ کے آلے پر کیا رکھتا ہے، کیا گنتا ہے، اور یہ گنتی کیسے بند کی جا سکتی ہے۔`,
    },
    design: {
      title: "ڈیزائن سسٹم",
      description: "ویب سائٹ کا ہر جزو، اپنی ہر حالت میں۔",
    },
    lesson: {
      title: "سبق",
      description: `"پیانو سیکھیں" کا ایک مختصر سبق، ایک وقت میں ایک قدم۔`,
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) =>
      `${isolate(title)}۔ "${isolate(world)}" سے پیانو کا ایک مفت سبق۔ ${isolate(intro)}`,
  },
  topBar: {
    home: `${SITE_NAME}، ہوم پیج`,
    nav: "مرکزی",
    learn: "پیانو سیکھیں",
    play: "بس پیانو بجائیں",
    modes: "بجانے کے موڈ",
    github: `${isolate("GitHub")} پر سورس کوڈ`,
    menu: "مینو",
    language: "زبان",
    theme: "تھیم",
    themeSystem: "سسٹم کے مطابق",
    themeLight: "ہلکی",
    themeDark: "گہری",
  },
  landing: {
    hero: {
      eyebrow: "مفت اور اوپن سورس",
      lead: "کلیدوں پر نوٹ گرتے دیکھیں، پھر انہیں خود بجائیں، ایک ایک گانا کر کے۔",
      start: "سیکھنا شروع کریں",
      play: "بس بجائیں",
      proofs: ["کوئی اکاؤنٹ نہیں", "آف لائن چلتا ہے", "کوئی اشتہار نہیں"],
      mascot: "شہد رنگ بالوں والا ایک بن مانس، ہمارا پیانو ٹیچر، دھوپ بھرے کمرے میں اپرائٹ پیانو بجا رہا ہے",
      greeting: "السلام علیکم! میں یہاں آپ کو پیانو سکھانے کے لیے ہوں۔ چلیں، شروع کریں؟",
      demo: {
        eyebrow: "یہاں آزمائیں",
        heading: "نوٹ گرتے ہیں، اور باری آپ کی",
        text: "ہر گانا ایسا ہی دکھتا ہے۔ ہر نوٹ اپنی کلید پر گرتا ہے، اور جیسے ہی وہ پہنچے، وہ کلید دبائیں۔",
      },
      piano: `پلیئر، جس کی کلیدوں پر ${isolate("Twinkle, Twinkle, Little Star")} کے نوٹ گر رہے ہیں`,
      hint: "جب یہ بجنے لگے، تو اس کی کلیدیں دبا کر ساتھ شامل ہو جائیں۔",
      playSong: "چلائیں",
      stopSong: "بند کریں",
    },
    twoWays: {
      eyebrow: "بجانے کے دو طریقے",
      heading: "قدم بہ قدم سیکھیں، یا بس بجائیں",
      lead: "وہ حصہ منتخب کریں جو آج کے دن کے مطابق ہو۔ کسی بھی وقت بدلا جا سکتا ہے۔",
      learn: {
        tag: "رہنمائی والا کورس",
        title: "پیانو سیکھیں",
        text: "چھوٹے چھوٹے مرحلوں کا رہنمائی والا کورس۔ ہر مرحلہ ایک ہنر سکھاتا ہے، اور ایک گانا اسے استعمال میں لاتا ہے۔",
        action: "سیکھنا شروع کریں",
        picture: "کورس کا نقشہ، جس کا پہلا سبق مکمل ہو چکا ہے اور اگلا کھلا ہے",
      },
      play: {
        tag: "کوئی بھی گانا",
        title: "بس پیانو بجائیں",
        text: `کوئی بھی گانا کھولیں، اس کے نوٹ ${D3} پیانو کی طرف اڑتے دیکھیں، اور ساتھ ساتھ بجائیں۔`,
        action: "بس بجائیں",
        picture: `${D3} پیانو، جس کی کلیدوں پر نوٹ گر رہے ہیں`,
      },
    },
    howItWorks: {
      eyebrow: "سیکھنا کیسے ہوتا ہے",
      heading: "چار قدم، بار بار",
      lead: "ہر سبق اسی چھوٹے چکر پر چلتا ہے، اس لیے ہمیشہ پتا رہتا ہے کہ آگے کیا ہے۔",
      steps: [
        { title: "ایک ہنر سیکھیں", text: "ایک مختصر سبق ایک نئی چیز دکھاتا ہے، جیسے کوئی نوٹ، کوئی ردھم یا ہاتھ کی کوئی پوزیشن۔" },
        { title: "اس کی مشق کریں", text: "اسے اپنے کی بورڈ پر بجائیں۔ پیانو آپ کا انتظار کرتا ہے اور ہر صحیح نوٹ پر نشان لگاتا ہے۔" },
        { title: "اصلی گانا بجائیں", text: "یہ ہنر لائبریری کے کسی گانے میں استعمال کریں، اس لیول پر جو آپ کے لیے مناسب ہو۔" },
        { title: "بیج حاصل کریں", text: `ہر سبق سے ${isolate("XP")} ملتے ہیں، اور ہر دنیا مکمل کرنے پر ایک بیج۔` },
      ],
    },
    rarities: {
      eyebrow: "ایک دھن، چار لیول",
      heading: "ہر گانا آپ کے ساتھ بڑھتا ہے",
      lead: `ہمارے ہر گانے کے چار ورژن ہیں۔ ان میں بدل کر دیکھیں کہ ${isolate("Ode to Joy")} کیسے بڑھتا ہے۔`,
      control: "ورژن",
      piano: `${isolate("Ode to Joy")} بجاتا ہوا ایک پیانو`,
      names: { common: "ابتدائی", rare: "آسان", epic: "درمیانہ", legendary: "مشکل" },
      taglines: {
        common: "آپ کے پہلے دن۔ ہاتھ کی ایک پوزیشن، آہستہ نوٹ، اور ایک بیس جو آپ کا انتظار کرتا ہے۔",
        rare: "آپ کے پہلے ہفتے۔ ایٹتھ نوٹ، آسان کورڈ، اور چلتا ہوا بیس۔",
        epic: "آپ کے پہلے مہینے۔ بروکن کورڈ، اور نیچے سے گزرتا انگوٹھا۔",
        legendary: "تقریباً ایک سال بعد۔ دونوں ہاتھ مصروف، تیز اور اپنی اپنی راہ پر۔",
      },
    },
    devices: {
      eyebrow: "جو پاس ہے اسی پر بجائیں",
      heading: "پیانو نہیں ہے؟ پھر بھی شروع کریں",
      lead: "ان میں سے ہر ایک نوٹ بجاتا ہے۔ اصلی کی بورڈ کا احساس سب سے اچھا ہے، اور باقیوں سے آج ہی شروع کیا جا سکتا ہے۔",
      ways: [
        {
          title: `${MIDI} کی بورڈ`,
          text: `اسے ${isolate("USB")} سے لگائیں اور ایک بار ${MIDI} کی اجازت دیں۔ اس کے بعد ویب سائٹ اسے خود ڈھونڈ لیتی ہے۔`,
        },
        { title: "ٹچ اسکرین", text: "اسکرین پر کلیدیں دبائیں، جتنی چاہیں انگلیوں سے۔" },
        {
          title: "آپ کا کمپیوٹر کی بورڈ",
          text: "کی بورڈ کے حروف اور نمبروں والے بٹن دو آکٹیو بجاتے ہیں، اور کسی بھی نوٹ کو دوسرے بٹن پر لے جایا جا سکتا ہے۔",
        },
      ],
      piano: "آزمانے کے لیے چھوٹا پیانو",
      start: "بجانے کے لیے چھوٹا پیانو لوڈ کریں",
      hint: "سننے کے لیے کوئی کلید چھوئیں۔",
    },
    free: {
      eyebrow: "مفت، اور آپ کا",
      heading: "نہ کچھ دینا، نہ کہیں سائن اپ",
      lead: "یہ ویب سائٹ پیانو سے محبت کرنے والے ایک شخص کا تحفہ ہے۔ یہ مفت ہی رہے گی۔",
      promises: [
        { title: "مفت، بغیر اکاؤنٹ کے", text: "ویب سائٹ کھولیں اور بجائیں۔ نہ سائن اپ ہے، نہ کچھ خریدنا ہے۔" },
        { title: "اوپن سورس", text: `کوڈ کی ہر لائن ${MIT} لائسنس کے تحت سب کے لیے کھلی ہے۔ اسے پڑھیں، بدلیں، شیئر کریں۔` },
        { title: "آف لائن چلتا ہے", text: "ایک بار لوڈ ہونے کے بعد ویب سائٹ انٹرنیٹ کے بغیر چلتی ہے۔ جو گانے آپ نے کھولے ہیں، وہ بھی آف لائن چلتے ہیں۔" },
        {
          title: "نہ اشتہار، نہ پروفائل",
          text: "آپ جو بھی بجائیں، وہ آپ کے آلے سے باہر نہیں جاتا۔ ہم صرف صفحات کے وزٹ گنتے ہیں، کوکیز کے بغیر، اور کچھ نہیں بیچتے۔",
        },
      ],
    },
    questions: {
      eyebrow: "سوالات",
      heading: "لوگ پہلے کیا پوچھتے ہیں",
      items: [
        {
          question: "کیا مجھے پیانو کی ضرورت ہے؟",
          answer: `نہیں۔ ${MIDI} کی بورڈ سب سے اچھا ہے، لیکن ٹچ اسکرین یا آپ کا کمپیوٹر کی بورڈ بھی ہر نوٹ بجاتا ہے۔`,
        },
        {
          question: "کون سے براؤزر چلتے ہیں؟",
          answer: `ہر جدید براؤزر چلتا ہے۔ ${MIDI} کی بورڈ کے لیے ${isolate("Web MIDI")} درکار ہے، جو ${isolate("Chrome")}، ${isolate("Edge")} اور ${isolate("Firefox")} میں ہے، اور ${isolate("Safari")} میں نہیں۔`,
        },
        {
          question: "کیا مجھے اکاؤنٹ چاہیے؟",
          answer: "نہیں۔ کہیں سائن اپ نہیں کرنا، اور آپ کی ترتیبات اسی براؤزر میں رہتی ہیں۔",
        },
        {
          question: "کیا یہ آف لائن چلتا ہے؟",
          answer: "جی ہاں۔ ویب سائٹ ایک بار انٹرنیٹ کے ساتھ کھولیں، اس کے بعد یہ آف لائن چلتی ہے۔ کوئی گانا ایک بار کھولنے کے بعد آف لائن بھی چلتا ہے۔",
        },
        {
          question: "کیا اپنے گانے بھی بجائے جا سکتے ہیں؟",
          answer: `جی ہاں۔ "بس پیانو بجائیں" والے حصے میں کوئی بھی ${MIDI} یا ${isolate("MusicXML")} فائل کھولیں۔ فائل آپ کے آلے پر ہی پڑھی جاتی ہے اور کبھی اپ لوڈ نہیں ہوتی۔`,
        },
        {
          question: "لائبریری میں کون سے گانے ہیں؟",
          answer: "مشہور دھنوں کے ہمارے اپنے ارینجمنٹ، ہر ایک چار ورژن میں، ہماری اپنی چند کمپوزیشنز، اور کھلے مجموعوں سے کلاسیکی کمپوزیشنز۔",
        },
        {
          question: "کیا یہ واقعی مفت ہے؟",
          answer: `جی ہاں۔ یہ ${MIT} لائسنس کے تحت اوپن سورس ہے۔ نہ اشتہار ہیں، نہ کوئی پیڈ پلان۔`,
        },
      ],
    },
    lastCall: {
      heading: "جب آپ تیار ہوں، ہم تیار ہیں",
      lead: "شروع کرنے کا ایک راستہ منتخب کریں۔ کسی بھی وقت بدلا جا سکتا ہے۔",
    },
  },
  footer: {
    tagline: "بجا کر پیانو سیکھیں۔ مفت، اوپن سورس اور آف لائن۔",
    nav: "ویب سائٹ",
    explore: "دریافت کریں",
    about: "تعارف اور لائسنس",
    legal: "قانونی",
    language: "یہ صفحہ اس زبان میں",
    license: `${MIT} لائسنس کے تحت اوپن سورس۔`,
  },
  counts: {
    badges: (n: number) => `${num(n)} بیج`,
    minutesPlayed: (n: number) => `بجانے کے ${num(n)} منٹ`,
    xp: (n: number) => `${num(n)} ${isolate("XP")}`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl: `یہ براؤزر پیانو نہیں دکھا سکتا۔ اس کی ترتیبات میں ہارڈویئر ایکسلریشن آن کریں، یا اپنے ${MIDI} کی بورڈ یا کمپیوٹر کی بورڈ پر بجائیں۔`,
    },
  },
};

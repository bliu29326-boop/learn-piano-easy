/** The lesson view of *Learn Piano* in Urdu. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

/** `n` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ur", n));
/** `n` with the kept word XP, isolated as one run. */
const xp = (n: number) => isolate(`${num(n)} XP`);
/** A whole percent with its sign, the number isolated and then the whole, as the rules test wants. */
const pct = (percent: number) => isolate(`${num(percent)}%`);

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `${num(count)} میں سے مرحلہ ${num(step)}`,
  leave: "سبق سے باہر نکلیں",
  leaveDialog: {
    title: "کیا اس سبق سے باہر نکلیں؟",
    body: "اس سبق کی پیش رفت صرف سبق ختم ہونے پر محفوظ ہوتی ہے۔",
    stay: "سیکھنا جاری رکھیں",
    leave: "باہر نکلیں",
    close: "بند کریں",
  },
  lacks: {
    touch: "میرا کی بورڈ زور سے اور ہلکے سے نہیں بجا سکتا",
    pedal: "میرے کی بورڈ میں پیڈل نہیں ہے",
  },
  loading: "سبق لوڈ ہو رہا ہے…",
  missing: "یہ سبق موجود نہیں ہے۔",
  backToCourse: "کورس پر واپس جائیں",
  band: {
    continue: "جاری رکھیں",
    right: "صحیح!",
    tryAgain: "بس تھوڑی سی کسر رہ گئی۔ دوبارہ کوشش کریں۔",
  },
  demo: {
    play: "سنیں",
    playAgain: "دوبارہ سنیں",
    skip: "چھوڑیں",
    piano: "مثال بجاتا ہوا پیانو",
    playing: "بج رہا ہے",
    slow: "آہستہ رفتار",
    side: "سائیڈ ویو",
  },
  quiz: {
    answers: "جوابات",
    wrong: "بس تھوڑی سی کسر رہ گئی۔ کوئی اور جواب آزمائیں۔",
    hint: "نمایاں جواب صحیح ہے۔",
  },
  findKey: {
    piano: "پیانو۔ وہ کلید دبائیں جس کا نام مرحلے میں دیا گیا ہے۔",
    marks: { next: "یہ کلید", correct: "صحیح", mistake: "یہ نہیں" },
    wrong: "یہ کوئی اور کلید ہے۔ دوبارہ کوشش کریں۔",
    hint: "نمایاں کلید ہی صحیح ہے۔",
    timeUp: "وقت ختم ہو گیا۔",
    secondsLeft: (seconds: number) => `${num(seconds)} سیکنڈ`,
  },
  playNotes: {
    piano: "پیانو۔ دھن کا ٹکڑا ترتیب سے بجائیں۔",
    marks: { next: "اب یہ بجائیں", correct: "بج گیا", mistake: "یہ نہیں" },
    wrong: "یہ کوئی اور نوٹ ہے۔ دوبارہ کوشش کریں۔",
    hint: (note: string) => `اگلا نوٹ ${isolate(note)} ہے۔`,
    hintChord: (...notes: string[]) =>
      `اب ${notes.slice(0, -1).map(isolate).join("، ")}${notes.length > 1 ? " اور " : ""}${isolate(notes.at(-1) ?? "")} ایک ساتھ بجائیں۔`,
    expression: {
      "too-loud": "کلید صحیح ہے، لیکن آواز بہت زور سے ہے۔ اسے ہلکے سے بجائیں۔",
      "too-soft": "کلید صحیح ہے، لیکن آواز بہت ہلکی ہے۔ اسے زور سے بجائیں۔",
      "pedal-up": "کلید صحیح ہے۔ اسے بجاتے وقت پیڈل دبائے رکھیں۔",
      "pedal-down": "کلید صحیح ہے۔ اسے بجانے سے پہلے پیڈل چھوڑیں۔",
    },
  },
  listen: {
    question: (n: number, count: number) => `${num(count)} میں سے جوڑی ${num(n)}`,
    playAgain: "دوبارہ سنیں",
    group: "کیا دوسرے نوٹ کی پچ اونچی ہے، نیچی ہے یا پہلے جیسی؟",
    answers: { higher: "اونچی پچ", lower: "نیچی پچ", same: "پہلے جیسی" },
    wrong: "بس تھوڑی سی کسر رہ گئی۔ دوبارہ سنیں اور کوئی اور جواب آزمائیں۔",
    hint: "نمایاں جواب صحیح ہے۔",
    roundAgain: (right: number, asked: number) =>
      `${num(asked)} میں سے ${num(right)} ${plural("ur", right, { one: "جواب صحیح تھا", other: "جواب صحیح تھے" })}۔ چلیں، ایک اور راؤنڈ کھیلیں۔`,
  },
  readNote: {
    staff: { treble: "ٹریبل اسٹاف پر ایک نوٹ", bass: "بیس اسٹاف پر ایک نوٹ" },
    count: (n: number, total: number) => `${num(total)} میں سے نوٹ ${num(n)}`,
    answers: "نوٹوں کے نام",
    piano: "پیانو۔ اسٹاف پر لکھا ہوا نوٹ بجائیں۔",
    marks: { next: "یہ کلید", correct: "صحیح", mistake: "یہ نہیں" },
    wrongName: "یہ کوئی اور نوٹ ہے۔ دوبارہ دیکھیں۔",
    wrongKey: "یہ کوئی اور کلید ہے۔ دوبارہ کوشش کریں۔",
    hintName: "نمایاں نام صحیح ہے۔",
    hintKey: "نمایاں کلید ہی صحیح ہے۔",
    again: "کچھ جواب ابھی صحیح نہیں ہوئے۔ یہ سب ایک بار پھر آئیں گے۔",
  },
  rhythmTap: {
    start: "شروع کریں",
    listen: "سنیں: شروع کی گنتی کا ایک میژر۔",
    tap: "اب ہر ٹک کے ساتھ کوئی بھی کلید دبائیں۔",
    piano: "ٹیپ پیڈ۔ بیٹ پر کوئی بھی کلید دبائیں۔",
    marks: { next: "یہاں دبائیں", correct: "بیٹ پر", mistake: "بیٹ سے ہٹ کر" },
    short: (hits: number, beats: number) => `${num(beats)} میں سے ${num(hits)} بیٹ پر کلید دبی۔ دوبارہ کوشش کریں۔`,
    hint: "ٹک سنتے ہی کلید دبائیں۔ نقطے بیٹ پر چمکتے ہیں۔",
    play: "اب ہر نوٹ اس کے ٹک پر بجائیں۔",
    phrasePiano: "کلیدیں۔ دھن کا ٹکڑا ٹک کے ساتھ ساتھ وقت پر بجائیں۔",
    shortNotes: (hits: number, notes: number) =>
      `${num(notes)} میں سے ${num(hits)} ${plural("ur", hits, { one: "نوٹ وقت پر بجا", other: "نوٹ وقت پر بجے" })}۔ دوبارہ کوشش کریں۔`,
    restSounded: "ریسٹ کے دوران ایک کلید بج گئی۔ انگلی اٹھائیں اور وہاں خاموشی رکھیں۔",
    phraseHint: "ہر نوٹ اس کے ٹک پر بجائیں، اور ریسٹ سے پہلے انگلی کلید سے اٹھا لیں۔ نقطے بیٹ پر چمکتے ہیں۔",
    pattern: {
      taps: (countIn: number, taps: number) => `${num(countIn)} بیٹ گنیں۔ پھر ${num(taps)} بیٹ پر کلید دبائیں۔`,
      phrase: (countIn: number, ...parts: string[]) =>
        `${num(countIn)} بیٹ گنیں۔ پھر ترتیب سے بجائیں${parts.length > 0 ? `: ${parts.map(isolate).join("، ")}` : ""}۔`,
      held: (note: string, beats: number) => `${isolate(note)} کو ${num(beats)} بیٹ تک دبائے رکھیں`,
      rest: (beats: number) => (beats === 1 ? "ریسٹ" : `${num(beats)} بیٹ کا ریسٹ`),
    },
  },
  song: {
    play: "پلیئر میں بجائیں",
    goal: (percent: number) => `اسے اس طرح بجائیں کہ ${pct(percent)} نوٹ صحیح ہوں۔`,
    notYet: (percent: number) => `گانا آپ کا انتظار کر رہا ہے۔ جب چاہیں اسے دوبارہ بجائیں، اور ${pct(percent)} کا ہدف رکھیں۔`,
    played: (percent: number) => `آپ نے اسے ${pct(percent)} صحیح نوٹوں کے ساتھ بجایا۔`,
  },
  recap: {
    heading: "آپ نے کیا سیکھا",
  },
  end: {
    heading: "سبق مکمل ہو گیا",
    stars: (n: number) => `${num(3)} میں سے ${num(n)} ${plural("ur", n, { one: "ستارہ", other: "ستارے" })}`,
    again: "دوبارہ بجائیں",
    saving: "آپ کی پیش رفت محفوظ ہو رہی ہے…",
    saved: "اس آلے پر محفوظ کر لیا گیا۔",
    unsaved: "یہ براؤزر کچھ محفوظ نہیں رکھتا، اس لیے یہ نتیجہ ٹیب بند ہونے تک ہی رہے گا۔",
    failed: "آپ کی پیش رفت محفوظ نہیں کی جا سکی۔",
    retry: "دوبارہ کوشش کریں",
    xp: (number: string) => isolate(`+${isolate(number)} XP`),
    level: (level: number, toNext: number) => `لیول ${num(level)}: لیول ${num(level + 1)} تک ${xp(toNext)} باقی`,
    skipOpened: (world: string) => `دنیا "${isolate(world)}" کے سارے اسباق اب کھل گئے ہیں۔`,
    skipShort: (stars: number) =>
      `یہ دنیا ${num(stars)} ${plural("ur", stars, { one: "ستارے", other: "ستاروں" })} سے کھلتی ہے۔ جب چاہیں دوبارہ کوشش کریں۔`,
  },
  moment: {
    continue: "جاری رکھیں",
    level: {
      heading: "لیول اپ!",
      name: (level: number) => `لیول ${num(level)}`,
      text: "ہر سبق آپ کو ایک قدم آگے لے جاتا ہے۔ یوں ہی جاری رکھیں!",
    },
    badge: { heading: "نیا بیج!" },
  },
};

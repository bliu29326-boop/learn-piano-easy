/** The player's input in Urdu. A text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { playerInput as en } from "./player-input.en";

/** `n` as the locale writes it, isolated, so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ur", n));

const midi = isolate("MIDI");

export const playerInput: Translation<typeof en> = {
  percent: (n: number) => isolate(`${num(n)}%`),
  devices: {
    heading: `${midi} آلات`,
    connect: `${midi} آلات منسلک کریں`,
    input: `${midi} ان پٹ`,
    output: `${midi} آؤٹ پٹ`,
    everyInput: "تمام ان پٹ",
    noOutput: "کوئی آؤٹ پٹ نہیں",
    notConnected: (name: string) => `${isolate(name)} (منسلک نہیں)`,
    unsupported: `یہ براؤزر ${midi} آلات تک رسائی حاصل نہیں کر سکتا۔ ${isolate("Chrome")}، ${isolate("Edge")} اور ${isolate("Firefox")} کر سکتے ہیں۔`,
    off: `${midi} کی بورڈ سے بجانے کے لیے اپنے ${midi} آلات منسلک کریں۔`,
    asking: "براؤزر کی اجازت کا انتظار ہے…",
    denied: `${midi} تک رسائی کی اجازت نہیں دی گئی۔ براؤزر میں ویب سائٹ کی ترتیبات سے اس کی اجازت دیں، پھر دوبارہ منسلک کریں۔`,
    noInputs: `کوئی ${midi} آلہ منسلک نہیں ہے۔`,
    inputsFound: (n: number) =>
      plural("ur", n, {
        one: `${num(n)} ${midi} ان پٹ ملا۔`,
        other: `${num(n)} ${midi} ان پٹ ملے۔`,
      }),
  },
  freePlay: {
    heading: "کھل کر بجائیں",
    record: "ریکارڈ کریں",
    stop: "بند کریں",
    stopRecording: "ریکارڈنگ بند کریں",
    save: "محفوظ کریں",
    saveTitle: `${midi} فائل کے طور پر محفوظ کریں`,
    recording: (clock: string) => `ریکارڈنگ ${isolate(clock)}`,
    recorded: (n: number) =>
      `${plural("ur", n, {
        one: `${num(n)} نوٹ ریکارڈ ہوا۔`,
        other: `${num(n)} نوٹ ریکارڈ ہوئے۔`,
      })} "محفوظ کریں" دبانے سے ریکارڈنگ ${midi} فائل میں محفوظ ہو جائے گی۔`,
    hint: `کھل کر بجائیں، یا اپنا بجایا ہوا محفوظ کرنے کے لیے "ریکارڈ کریں" دبائیں۔`,
  },
  history: {
    empty: "اس گانے کی ابھی کوئی مکمل کوشش نہیں ہے۔ اسکورنگ آن کر کے اسے آخر تک بجائیں۔",
    hands: { both: "دونوں", right: "دایاں", left: "بایاں" },
    columns: {
      date: "تاریخ",
      speed: "رفتار",
      hands: "ہاتھ",
      accuracy: "درستی",
      hits: "صحیح نوٹ",
      perfect: "پرفیکٹ",
      misses: "چھوٹے ہوئے نوٹ",
      mistakes: "غلط نوٹ",
    },
  },
  keyBinding: {
    help: `کسی نوٹ کی کلید دبائیں، پھر کمپیوٹر کی بورڈ کا وہ بٹن دبائیں جو اسے بجائے۔ ${isolate("Esc")} دبانے سے یہ ونڈو بند ہو جاتی ہے۔`,
    open: "بٹن بدلیں",
  },
  learnRange: {
    lowest: "اپنی سب سے نیچے والی کلید دبائیں…",
    highest: "اب اپنی سب سے اوپر والی کلید…",
    start: "اپنے کی بورڈ سے معلوم کریں",
    title: "رینج اپنے کی بورڈ سے معلوم کریں",
  },
  pitchPractice: {
    heading: "سر پہچاننے کی مشق",
    hear: "سنیں",
    hearTitle: "نوٹ سنیں",
    again: "دوبارہ شروع کریں",
    againTitle: "نیا راؤنڈ شروع کریں",
    empty: "پوچھنے کے لیے کوئی نوٹ نہیں",
    emptyHint: "آپ کے کی بورڈ پر منتخب نوٹوں کے بیچ اس اسکیل کا کوئی نوٹ نہیں۔",
    done: "راؤنڈ مکمل",
    found: (n: number, count: number) =>
      plural("ur", n, {
        one: `${num(count)} میں سے ${num(n)} نوٹ مل گیا۔`,
        other: `${num(count)} میں سے ${num(n)} نوٹ مل گئے۔`,
      }),
    play: (note: string) => `${isolate(note)} بجائیں`,
    progress: (i: number, count: number) => `${num(count)} میں سے نوٹ ${num(i)}`,
    wrong: (note: string) => `${isolate(note)} نہیں۔ دوبارہ کوشش کریں۔`,
    right: (note: string) => `${isolate(note)} صحیح ہے۔`,
    results: "سر پہچاننے کی مشق کے نتائج",
    mistakes: (n: number, count: number) =>
      `${plural("ur", count, {
        one: `${num(count)} نوٹ میں`,
        other: `${num(count)} نوٹوں میں`,
      })} ${n === 0 ? "کوئی غلط نوٹ نہیں" : `${num(n)} غلط نوٹ`}۔`,
    columns: { note: "نوٹ", asked: "پوچھا گیا", mistakes: "غلط نوٹ", playedInstead: "اس کی جگہ بجایا گیا" },
    firstTry: (n: number, count: number) =>
      plural("ur", n, {
        one: `${num(count)} میں سے ${num(n)} پہلی کوشش میں مل گیا۔`,
        other: `${num(count)} میں سے ${num(n)} پہلی کوشش میں مل گئے۔`,
      }),
  },
  scoring: {
    heading: "اسکور",
    judgements: { perfect: "پرفیکٹ", hit: "صحیح نوٹ", mistake: "غلط نوٹ", miss: "چھوٹا ہوا نوٹ" },
    counts: (hits: number, perfect: number, misses: number, mistakes: number) =>
      `صحیح نوٹ ${num(hits)} · پرفیکٹ ${num(perfect)} · چھوٹے ہوئے نوٹ ${num(misses)} · غلط نوٹ ${num(mistakes)}`,
    history: "ہسٹری",
    historyTitle: "اس گانے پر آپ کی کوششیں",
    readError: "ہسٹری پڑھی نہیں جا سکی۔",
    saved: "کوشش ہسٹری میں محفوظ ہو گئی۔",
    saveError: "یہ کوشش محفوظ نہیں کی جا سکی۔",
  },
  game: {
    levels: { easy: "آسان", normal: "عام", hard: "مشکل" },
    words: {
      perfect: "پرفیکٹ",
      great: "زبردست",
      good: "اچھا",
      hold: "ہولڈ",
      release: "صاف",
      wrong: "غلط نوٹ",
      miss: "چھوٹا ہوا نوٹ",
      short: "بہت چھوٹا",
      long: "بہت لمبا",
      late: "دیر سے",
    },
    name: "گیم",
    score: "اسکور",
    combo: "کومبو",
    multiplier: "ملٹی پلائر",
    held: (points: string) => `ہولڈ ${isolate(points)}`,
    burst: (multiplier: number) => `کومبو ${isolate(`×${num(multiplier)}`)}!`,
    inARow: (combo: number) => `لگاتار ${num(combo)}`,
    announce: (multiplier: number, combo: number) => `کومبو ${num(multiplier)} گنا، لگاتار ${num(combo)}۔`,
    result: "کوشش کا نتیجہ",
    complete: "کوشش مکمل",
    bestCombo: (combo: number) => `بہترین کومبو ${num(combo)}`,
    stats: {
      perfect: "پرفیکٹ",
      great: "زبردست",
      good: "اچھا",
      wrong: "غلط نوٹ",
      miss: "چھوٹے ہوئے نوٹ",
      late: "دیر سے",
      short: "بہت چھوٹا",
      long: "بہت لمبا",
    },
    helped: `"آپ کے نوٹوں کا انتظار" کے ساتھ`,
    close: "بند کریں",
    closeName: "کوشش کا نتیجہ بند کریں",
  },
  pdf: {
    noSong: `پہلے کوئی گانا کھولیں، پھر اس کے نوٹ ${isolate("PDF")} کے طور پر محفوظ کریں۔`,
    intro: (title: string) =>
      `${isolate(title)} کے گرتے ہوئے نوٹ پیانو کے اوپر بنا کر محفوظ کیے جاتے ہیں، اور ہر صفحے پر گانے کے چند سیکنڈ آتے ہیں۔`,
    secondsPerPage: "فی صفحہ سیکنڈ",
    background: "پس منظر کے رنگ استعمال کریں",
    pages: (pages: number, seconds: number) =>
      `${plural("ur", pages, {
        one: `${num(pages)} صفحہ`,
        other: `${num(pages)} صفحے`,
      })}، ہر ایک میں گانے کے ${num(seconds)} سیکنڈ۔`,
    save: `${isolate("PDF")} محفوظ کریں`,
    pageHeading: (title: string, from: string, to: string, page: number, count: number) =>
      `${isolate(title)}   ${isolate(from)} سے ${isolate(to)} تک   ${num(count)} میں سے صفحہ ${num(page)}`,
  },
};

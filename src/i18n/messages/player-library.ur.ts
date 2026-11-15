/** The player's song library in Urdu. A text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { playerLibrary as en } from "./player-library.en";

/** `n` as the locale writes it, isolated, so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ur", n));

/** An HTTP status, isolated and without grouping. */
const status = (n: number) => isolate(formatNumber("ur", n, { useGrouping: false }));

/** The bars from `from` to `to`, or the one bar when they are equal. */
const bars = (from: number, to: number) => (from === to ? `میژر ${num(from)}` : `میژر ${num(from)} سے ${num(to)} تک`);

const files = `${isolate("MIDI")} یا ${isolate("MusicXML")}`;

export const playerLibrary: Translation<typeof en> = {
  rarity: {
    taglines: {
      common: "ہاتھ کی ایک ہی پوزیشن، آہستہ رفتار کے نوٹ، اور ایسا بیس جو آپ کا انتظار کرتا ہے۔",
      rare: "دونوں ہاتھ بجاتے ہیں۔ ایٹتھ نوٹ، آسان کورڈ، اور ہاتھ جو کبھی کبھی اپنی جگہ بدلتا ہے۔",
      epic: "بروکن کورڈ، انگوٹھا نیچے سے لے جانا، اور پیڈل۔",
      legendary: "دونوں ہاتھ مصروف، تیز اور ایک دوسرے سے آزاد۔",
    },
    originalName: "اوریجنل",
    originalTagline: "کمپوزر کے اپنے نوٹ۔",
    ourOriginalTagline: "کمپوزیشن ویسی ہی جیسی اس کی شیٹ میوزک میں ہے، دو ہاتھوں کے لیے ترتیب دی گئی۔",
    stepTitle: (name: string, tagline: string) => `${isolate(name)}: ${isolate(tagline)}`,
  },
  collections: { christmas: "کرسمس", film: "فلموں سے", sea: "ملاحوں کے گیت" },
  parts: {
    movement: (place: number) => `موومنٹ ${num(place)}`,
    number: (place: number) => `نمبر ${num(place)}`,
    variation: (place: number) => `ویری ایشن ${num(place)}`,
    named: (place: string, name: string) => `${isolate(place)}: ${isolate(name)}`,
    inWork: (work: string, part: string) => `${isolate(work)} · ${isolate(part)}`,
  },
  skills: {
    fiveFingerPosition: "پانچ انگلیوں کی پوزیشن",
    heldBass: "دبائے رکھے بیس نوٹ",
    openFifths: "اوپن ففتھ",
    eighthNotes: "ایٹتھ نوٹ",
    dottedRhythm: "ڈاٹڈ ردھم",
    triads: "ٹرائیڈ",
    twoNoteChords: "دو نوٹوں کے کورڈ",
    positionChange: "پوزیشن بدلنا",
    thumbUnder: "انگوٹھا نیچے سے",
    fingerOver: "انگوٹھے کے اوپر سے انگلی",
    brokenChords: "بروکن کورڈ",
    albertiBass: "البرٹی بیس",
    waltzBass: "والز بیس",
    pedal: "سسٹین پیڈل",
    leftHandMelody: "بائیں ہاتھ میں دھن",
    thirdsAndSixths: "تھرڈ اور سکستھ",
    octaveBass: "آکٹیو بیس",
    stride: "اسٹرائیڈ بیس",
    arpeggios: "آرپیجیو",
    counterMelody: "ساتھ چلتی دوسری دھن",
    melodyInChords: "کورڈ میں دھن",
    handCrossing: "ہاتھ کراس کرنا",
    sixteenthNotes: "سکسٹینتھ نوٹ",
  },
  panel: {
    search: { placeholder: "نام، کمپوزر یا ٹیگ تلاش کریں", label: "گانے تلاش کریں", clear: "تلاش صاف کریں" },
    fits: "میرے کی بورڈ کے مطابق",
    kinds: { level: "مشکل کا درجہ", yours: "آپ کے", collection: "مجموعہ", style: "انداز", skill: "تکنیک", composer: "کمپوزر" },
    levels: { beginner: "ابتدائی", easy: "آسان", medium: "درمیانہ", hard: "مشکل" },
    styles: {
      baroque: "باروک",
      classical: "کلاسیکل",
      romantic: "رومانٹک",
      impressionist: "امپریشنسٹ",
      ragtime: "ریگ ٹائم",
      folk: "لوک دھن",
      contemporary: "عصری",
    },
    sets: { path: "ابتدائی راستہ", ours: "ہمارے ارینجمنٹ" },
    yours: { favourite: "پسندیدہ", played: "بجائے گئے", upload: "آپ کی فائلیں" },
    sort: {
      label: "ترتیب",
      suggested: "تجویز کردہ",
      title: "نام",
      difficulty: "مشکل کا درجہ",
      length: "دورانیہ",
      recent: "حال ہی میں بجائے گئے",
    },
    measuring: "گانوں کی پیمائش ہو رہی ہے…",
    filters: "فلٹر",
    filtersOn: (n: number) => `فلٹر (${num(n)})`,
    clear: "سب صاف کریں",
    more: (n: number) => `${num(n)} مزید`,
    fewer: "کم دکھائیں",
    sections: {
      continue: "بجانا جاری رکھیں",
      favourites: "پسندیدہ",
      path: "ابتدائی راستہ",
      pathLead: "آپ کے اگلے قدم، پہلے نوٹوں سے پہلے سوناٹینا تک۔",
      pathAll: (n: number) => `سارے ${num(n)} گانے دکھائیں`,
      all: "سارے گانے",
      results: "نتائج",
    },
    step: (n: number) => `مرحلہ ${num(n)}`,
    nowPlayingTitle: (title: string) => `اب چل رہا ہے: ${isolate(title)}`,
    preview: {
      start: "جھلک",
      stop: "جھلک بند کریں",
      title: (title: string) => `${isolate(title)} کا آغاز سنیں`,
      failed: (title: string) =>
        `"${isolate(title)}" ابھی اس آلے پر نہیں ہے۔ اس کی جھلک سننے کے لیے انٹرنیٹ سے منسلک ہوں۔`,
    },
    favourite: { label: "پسندیدہ", title: (title: string) => `پسندیدہ: ${isolate(title)}` },
    lengthTitle: "دورانیہ",
    lengthLicense: (license: string, credit: string) => `دورانیہ · ${isolate(license)} · ${isolate(credit)}`,
    workParts: (n: number) =>
      plural("ur", n, {
        one: `${num(n)} حصہ`,
        other: `${num(n)} حصے`,
      }),
    empty: { title: "کوئی گانا نہیں ملا", message: "کوئی اور لفظ آزمائیں، یا کوئی فلٹر ہٹائیں۔" },
    own: {
      heading: "آپ کے گانے",
      addFiles: { label: "فائلیں شامل کریں", title: `${files} فائلیں شامل کریں` },
      addFolder: { label: "فولڈر شامل کریں", title: `${files} فائلوں کا فولڈر شامل کریں` },
      hint: `اپنی ${files} فائلیں یہاں شامل کریں، یا انہیں ڈریگ کر کے صفحے پر کہیں بھی ڈال دیں۔`,
      export: "ایکسپورٹ کریں",
      exportTitle: (title: string) => `${isolate(title)} ایکسپورٹ کریں`,
      delete: "حذف کریں",
      deleteTitle: (title: string) => `${isolate(title)} حذف کریں`,
    },
    count: (n: number) =>
      plural("ur", n, {
        one: `${num(n)} گانا`,
        other: `${num(n)} گانے`,
      }),
  },
  tracks: {
    hands: {
      right: "دایاں ہاتھ",
      left: "بایاں ہاتھ",
      split: `دونوں ہاتھ، مڈل ${isolate("C")} سے تقسیم`,
      none: "میرا نہیں: ایپ اسے بجاتی ہے",
    },
    fromNotes: "نوٹوں کے مطابق",
    fromNotesKey: (key: string) => `نوٹوں کے مطابق: ${isolate(key)}`,
    useForNew: { label: "نئے گانوں کے لیے استعمال کریں", title: "یہ رنگ، والیوم اور سوئچ نئے گانوں کے لیے استعمال کریں" },
    reset: { label: "یہ گانا ری سیٹ کریں", title: "اس گانے کے ٹریک ڈیفالٹ پر ری سیٹ کریں" },
    keyControl: "گانے کا اسکیل",
    key: "اسکیل",
    track: (n: number) => `ٹریک ${num(n)}`,
    show: (name: string) => `${isolate(name)} دکھائیں`,
    mute: (name: string) => `${isolate(name)} کی آواز بند کریں`,
    hand: (name: string) => `${isolate(name)} کا ہاتھ`,
    colour: (name: string) => `${isolate(name)} کا رنگ`,
    volume: (name: string) => `${isolate(name)} کا والیوم (%)`,
    sheet: (name: string) => `${isolate(name)} کو شیٹ میوزک میں دکھائیں`,
    notes: (n: number) => `${num(n)} نوٹ`,
    drums: "، ڈرم، نہیں بجائے جاتے",
    fields: { show: "دکھائیں", mute: "آواز بند", hand: "ہاتھ", volume: "والیوم", sheet: "شیٹ" },
    empty: "اس گانے میں کوئی نوٹ نہیں۔",
  },
  guide: {
    hands: { both: "دونوں ہاتھ", right: "دایاں ہاتھ", left: "بایاں ہاتھ" },
    bars,
    loopBars: bars,
    wholeSong: "پورا گانا",
    waits: "آپ کا انتظار کرتا ہے",
    playsOn: "چلتا رہتا ہے",
    summary: (hands: string, percent: number, loop: string, wait: string) =>
      `${isolate(hands)}، ${isolate(`${num(percent)}%`)}، ${isolate(loop)}، ${isolate(wait)}`,
    apply: "لاگو کریں",
    applyTitle: (n: number) => `مرحلہ ${num(n)} لاگو کریں`,
    tip: (bars: string, kind: string) => `${isolate(bars)}، ${isolate(kind)}: `,
    loop: "لوپ",
    loopTitle: (bar: number) => `میژر ${num(bar)} لوپ میں چلائیں`,
    headings: { about: "تعارف", funFact: "دلچسپ بات", skills: "تکنیکیں", practice: "مشق کا منصوبہ", tips: "مشورے", tricky: "مشکل جگہیں" },
    tipKinds: { fingering: "فنگرنگ", rhythm: "ردھم", sound: "آواز", trick: "ترکیب" },
    tipMark: (kind: string) => `مشورہ: ${isolate(kind)}`,
    trickyMark: "مشکل جگہ",
  },
  openSong: {
    outside: "اس گانے کے کچھ نوٹ آپ کے کی بورڈ سے باہر ہیں۔",
    fold: "انہیں اپنی کلیدوں پر لے آئیں",
    failed: (title: string, reason: string) => `"${isolate(title)}" کو کھولا نہیں جا سکا: ${isolate(reason)}`,
    catalogFailed: (code: number) => `گانوں کی فہرست لوڈ نہیں ہو سکی (${status(code)})۔`,
    fileFailed: (code: number) => `فائل لوڈ نہیں ہو سکی (${status(code)})`,
  },
};

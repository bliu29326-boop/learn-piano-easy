/** The player's shell in Urdu. A text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` as the locale writes it, isolated, so it keeps its place in a right-to-left line. */
const num = (n: number, options?: Intl.NumberFormatOptions) => isolate(formatNumber("ur", n, options));
/** `n` seconds with two decimals and no digit grouping, isolated, such as `12.50`. */
const seconds = (n: number) => num(n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `12.5`. */
const tenths = (n: number) => formatNumber("ur", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
/** `n` megabytes with one decimal, isolated, such as `1.5 MB`. */
const megabytes = (n: number) => isolate(`${isolate(tenths(n))} MB`);
/** `n` files as the subject of a sentence or a list item: `1 فائل`, `5 فائلیں`. */
const files = (n: number) => plural("ur", n, { one: `${num(n)} فائل`, other: `${num(n)} فائلیں` });
/** `n` files before a postposition, in the oblique: `40 فائلوں`. */
const filesOf = (n: number) => plural("ur", n, { one: `${num(n)} فائل`, other: `${num(n)} فائلوں` });

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "بند کریں",
    hotkeys: "کی بورڈ شارٹ کٹ",
    keyBindings: "کمپیوٹر کی بورڈ کے بٹن",
    pdf: `${isolate("PDF")} کے طور پر محفوظ کریں`,
    offlineFiles: "آف لائن فائلیں",
    tracks: "ٹریکس",
    songs: "گانے",
    guide: (title) => `${isolate(title)} کی مشق کی گائیڈ`,
    about: `${isolate("Learn Piano Easy")} کے بارے میں`,
  },
  toast: {
    dismiss: "بند کریں",
  },
  topbar: {
    songs: "گانے",
    tracks: "ٹریکس",
    guide: "گائیڈ",
    settings: "ترتیبات",
    about: "تعارف",
    openSong: "کھلا ہوا گانا",
    demoSong: "ڈیمو گانا",
    songFallback: "گانا",
  },
  songs: {
    noneFound: "گانے کی کوئی فائل نہیں ملی۔",
    wrongKind: `صرف ${isolate("MIDI")} اور ${isolate("MusicXML")} فائلیں شامل کی جا سکتی ہیں۔`,
    added: (n) =>
      plural("ur", n, {
        one: `${num(n)} گانا "آپ کے گانے" میں شامل کیا گیا۔`,
        other: `${num(n)} گانے "آپ کے گانے" میں شامل کیے گئے۔`,
      }),
    notKept: (reason) => `گانے محفوظ نہیں کیے جا سکے: ${isolate(reason)}`,
    soundsFailed: "پیانو کی آوازیں لوڈ نہیں ہو سکیں، اس لیے گانے بغیر آواز کے چلیں گے۔",
  },
  guide: {
    step: (n, summary) => `مرحلہ ${num(n)}: ${isolate(summary)}۔`,
    barLoops: (bar) => `میژر ${num(bar)} لوپ میں چل رہا ہے۔`,
    topBeaten: (title) => `آپ نے ${isolate(title)} پار کر لیا، جو اس گانے کا آخری مرحلہ ہے۔ بہت خوب بجایا!`,
    beaten: (title, next) => `آپ نے ${isolate(title)} پار کر لیا! اب ${isolate(next)} کی باری ہے۔`,
    playNext: (next) => `${isolate(next)} بجائیں`,
  },
  lesson: {
    label: "سبق",
    target: (percent) => `اسکور والی کوشش میں ${isolate(`${num(percent)}%`)} نوٹ صحیح بجائیں۔`,
    back: "سبق پر واپس جائیں",
    missing: "اس سبق کا گانا گانوں کی لائبریری میں نہیں ہے۔",
  },
  finger: {
    label: "منتخب نوٹ",
    setByYou: "آپ کی طرف سے",
    fromGuide: "گائیڈ سے",
    suggested: "تجویز کردہ",
    none: "کوئی انگلی نہیں",
    finger: (finger, source) => `انگلی ${num(finger)}، ${isolate(source)}`,
    line: (note, said) =>
      `${isolate(note)}: ${isolate(said)}۔ انگلی رکھنے کے لیے 1 سے 5 تک، ہٹانے کے لیے 0، اور ختم کرنے کے لیے ${isolate("Esc")} دبائیں۔`,
  },
  backgroundTrack: {
    notAudio: (file) => `فائل ${isolate(file)} ایسی آڈیو نہیں جسے یہ براؤزر چلا سکے۔`,
    playsAlong: (file) => `فائل ${isolate(file)} گانے کے ساتھ چل رہی ہے۔`,
  },
  about: {
    license: "لائسنس",
    notices: "تھرڈ پارٹی نوٹس",
    packageLicense: (name) => `${isolate(name)} کا لائسنس`,
    offline: "یہ متن ابھی آف لائن دستیاب نہیں۔",
    intro: `${isolate("Learn Piano Easy")} پیانو سیکھنے کی ایک مفت، اوپن سورس ایپ ہے۔ اس میں رہنمائی والا کورس ہے، اور آپ کی اپنی ${isolate("MIDI")} فائلیں بھی چل سکتی ہیں۔ یہ آپ کے براؤزر میں آف لائن چلتی ہے۔`,
    build: (version) => `بلڈ ${isolate(version)}`,
  },
  cache: {
    groups: {
      site: {
        label: "ویب سائٹ",
        description: "خود ویب سائٹ: اس کے صفحات، کوڈ، اسٹائل اور تصویریں۔ آف لائن کھلنے کے لیے ہر صفحے کو اس کی ضرورت ہے۔",
      },
      player: {
        label: "بس پیانو بجائیں",
        description: `${isolate("3D")} پیانو، پلیئر اور گانوں کی فہرست۔ "پیانو سیکھیں" والا حصہ بھی انہیں استعمال کرتا ہے۔`,
      },
      learn: { label: "پیانو سیکھیں", description: "کورس: اس کی دنیائیں، اس کے اسباق اور آپ کی پروفائل۔" },
      songs: { label: "گانے", description: "ایپ کے ساتھ آنے والا ہر گانا، تاکہ ان میں سے کوئی بھی آف لائن کھل سکے۔" },
      sounds: { label: "پیانو کی آوازیں", description: "آوازوں کے سارے سیٹ، تاکہ جو بھی سیٹ منتخب ہو، پیانو آف لائن بجے۔" },
    },
    bytes: (n) => `${num(n, { useGrouping: false })} بائٹ`,
    kilobytes: (n) => isolate(`${isolate(tenths(n))} KB`),
    megabytes: (n) => megabytes(n),
    groupsFailed: (n, labels) =>
      `${isolate(labels)} کی ${files(n)} آف لائن استعمال کے لیے محفوظ نہیں کی جا ${plural("ur", n, { one: "سکی", other: "سکیں" })}۔`,
    updated: (labels) => `اپ ڈیٹ ہو گیا۔ ${isolate(labels)} کو آف لائن استعمال کے لیے دوبارہ محفوظ کر لیا گیا ہے۔`,
    unavailable: "یہ براؤزر اس صفحے کے لیے کوئی آف لائن فائل محفوظ نہیں رکھتا۔",
    reading: "محفوظ فائلیں پڑھی جا رہی ہیں…",
    unreadable: "آف لائن فائلوں کی فہرست پڑھی نہیں جا سکی۔ صفحہ دوبارہ لوڈ کریں اور دوبارہ کوشش کریں۔",
    intro: "محفوظ فائلیں انٹرنیٹ کے بغیر بھی کام کرتی ہیں۔ ہر حصہ الگ سے محفوظ کیا یا ہٹایا جا سکتا ہے۔",
    allSaved: "سب محفوظ",
    noneSaved: "محفوظ نہیں",
    someSaved: (count, total) => `${filesOf(total)} میں سے ${num(count)} محفوظ`,
    status: (size, total, state) => `${isolate(size)}، ${files(total)}، ${isolate(state)}۔`,
    saving: (done, total) => `محفوظ کیا جا رہا ہے: ${filesOf(total)} میں سے ${num(done)}…`,
    savingGroup: (label) => `محفوظ کیا جا رہا ہے: ${isolate(label)}`,
    failed: (n) => `${files(n)} محفوظ نہیں کی جا ${plural("ur", n, { one: "سکی", other: "سکیں" })}۔`,
    partOffline: "یہ محفوظ نہیں کیا جا سکا۔ کنکشن چیک کریں اور دوبارہ کوشش کریں۔",
    partStale: "ویب سائٹ کا نیا ورژن آ گیا ہے۔ صفحہ دوبارہ لوڈ کریں، پھر دوبارہ محفوظ کریں۔",
    save: "محفوظ کریں",
    saveAgain: "دوبارہ محفوظ کریں",
    remove: "ہٹائیں",
    saveGroup: (label) => `${isolate(label)} محفوظ کریں`,
    removeGroup: (label) => `${isolate(label)} ہٹائیں`,
    keep: "ہر اپ ڈیٹ کے بعد محفوظ رکھیں",
  },
  update: {
    ready: "نیا ورژن تیار ہے۔",
    reload: "دوبارہ لوڈ کریں",
  },
  download: {
    loading: (label) => `لوڈ ہو رہا ہے: ${isolate(label)}`,
    amount: (done, total) => `${megabytes(total)} میں سے ${isolate(tenths(done))}`,
    sounds: "پیانو کی آوازیں لوڈ ہو رہی ہیں",
    newest: "تازہ ترین ورژن لوڈ ہو رہا ہے",
    offline: (label) =>
      `${isolate(label)} کو پہلی بار کھلنے کے لیے انٹرنیٹ کی ضرورت ہے۔ انٹرنیٹ سے منسلک ہو کر دوبارہ کوشش کریں۔`,
    failed: (label) => `${isolate(label)} کو لوڈ نہیں کیا جا سکا۔ بعد میں دوبارہ کوشش کریں۔`,
    retry: "دوبارہ کوشش کریں",
  },
  scene: {
    piano: "پیانو",
    pianoRange: (range) => `پیانو، ${isolate(range)}`,
    startKeys: (keys) => `، شروع کی کلیدیں ${isolate(keys)}`,
    chord: (chord) => `، کورڈ ${isolate(chord)}`,
  },
  demo: {
    /** One syllable per word: a word is never split, since a split would break its joined letters. */
    lyrics: [
      "روشنیاں نیچے آتی دیکھیں",
      "جب وہ پہنچیں ہر کلید دبائیں",
      "پہلے آہستہ آہستہ پھر تیزی سے",
      "جلد ہی ہاتھ راستہ جان لیں گے",
    ],
    part: (n) => `حصہ ${num(n)}`,
    leftHand: "بایاں ہاتھ",
    rightHand: "دایاں ہاتھ",
  },
  chords: {
    root: "روٹ",
    /** A chord tone, such as `♭3`, as a scale degree: `درجہ ♭3`. */
    ordinal: (tone) => `درجہ ${isolate(String(tone))}`,
  },
  overlays: {
    fps: "فریم فی سیکنڈ",
    fpsValue: (n) => isolate(`${isolate(formatNumber("ur", n, { useGrouping: false }))} FPS`),
    fpsNone: isolate("– FPS"),
    tempo: "ٹیمپو",
    bpmValue: (n) => isolate(`${isolate(formatNumber("ur", n, { useGrouping: false }))} BPM`),
    track: (track, channel) => `ٹریک ${num(track)}، چینل ${num(channel)}`,
    velocity: (velocity) => `زور ${num(velocity)}`,
    timing: (start, length) => `${seconds(start)} سیکنڈ پر شروع، دورانیہ ${seconds(length)} سیکنڈ`,
  },
  sheet: {
    label: "شیٹ میوزک",
    empty: `شیٹ میوزک میں کوئی ٹریک نظر نہیں آ رہا۔ "ٹریکس" میں جا کر کوئی ٹریک دکھائیں۔`,
  },
};

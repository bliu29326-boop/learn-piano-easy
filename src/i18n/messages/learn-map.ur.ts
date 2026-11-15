/** The world map of *Learn Piano* in Urdu. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

/** `n` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ur", n));
/** `n` with the kept word XP, isolated as one run. */
const xp = (n: number) => isolate(`${num(n)} XP`);

export const learnMap: Translation<typeof en> = {
  lead: "ایک ایک سبق کر کے راستہ طے کریں۔ ہر دنیا ایک بڑے چیلنج پر ختم ہوتی ہے۔",
  loading: "کورس لوڈ ہو رہا ہے…",
  continue: "جاری رکھیں",
  nextUp: "اگلا سبق",
  world: (n: number) => `دنیا ${num(n)}`,
  progress: (done: number, all: number) => `${num(all)} میں سے ${num(done)} سبق`,
  locked: "اسے کھولنے کے لیے پچھلی دنیا کا بڑا چیلنج جیتیں، یا اس دنیا کا آگے بڑھنے کا ٹیسٹ پاس کریں۔",
  beaten: "مکمل",
  node: {
    locked: (name: string) => `${isolate(name)}، بند`,
    open: (name: string) => `${isolate(name)}، کھلا ہوا`,
    done: (name: string, stars: number) =>
      `${isolate(name)}، ${num(3)} میں سے ${num(stars)} ${plural("ur", stars, { one: "ستارہ", other: "ستارے" })}`,
  },
  medal: (world: string, earned: boolean) => `${isolate(world)} کا بیج، ${earned ? "حاصل ہو گیا" : "ابھی حاصل نہیں ہوا"}`,
  skipTest: {
    title: (world: string) => `آگے بڑھنے کا ٹیسٹ: ${isolate(world)}`,
    text: "کیا یہ سب آپ پہلے سے جانتے ہیں؟ آگے بڑھنے کا ٹیسٹ پاس کریں، اور یہاں کے سارے اسباق کھل جائیں گے۔",
    action: "آگے بڑھنے کا ٹیسٹ دیں",
  },
  bar: {
    label: "آپ کی پیش رفت",
    streak: (days: number) => `لگاتار ${num(days)} دن`,
    level: (level: number) => `لیول ${num(level)}`,
    today: "آج",
    todayGoal: (earned: number, goal: number) => `آج: ${xp(goal)} میں سے ${num(earned)}`,
    days: (days: number) => `${num(days)} دن`,
  },
};

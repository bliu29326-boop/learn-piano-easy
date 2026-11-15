/** The badges of *Learn Piano* in Japanese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "ピアノの先生が応援しています",
  fixed: {
    "first-note": { name: "はじめての音", description: "レッスンではじめて音を弾く。" },
    "first-lesson": { name: "はじめてのレッスン", description: "はじめてレッスンをクリアする。" },
    "first-three-stars": { name: "星みっつ", description: "星3つでレッスンをクリアする。" },
    "three-stars-ten": { name: "星あつめ名人", description: "10のレッスンで星3つをとる。" },
    "first-daily-goal": { name: "目標クリア", description: "はじめて1日の目標をクリアする。" },
    "streak-3": { name: "3日連続", description: "3日連続で1日の目標をクリアする。" },
    "streak-7": { name: "1週間連続", description: "7日連続で1日の目標をクリアする。" },
    "streak-30": { name: "1か月連続", description: "30日連続で1日の目標をクリアする。" },
    "streak-100": { name: "100日の道のり", description: "100日連続で1日の目標をクリアする。" },
    "notes-1000": { name: "千の音", description: "レッスンで千回音を弾く。" },
    "notes-10000": { name: "1万の音", description: "レッスンで1万回音を弾く。" },
    "rhythm-ace": { name: "リズムの達人", description: "リズムのステップに1回目で合格する。" },
    "sight-reader": { name: "楽譜よみ名人", description: "10の音を、1つもまちがえずに続けて読む。" },
    "early-bird": { name: "早起き", description: "朝8時より前にレッスンをクリアする。" },
    "night-owl": { name: "夜ふかし", description: "夜10時以降にレッスンをクリアする。" },
    comeback: { name: "おかえりなさい", description: "1週間お休みしたあと、またレッスンをする。" },
    legendary: { name: "むずかしい曲クリア", description: "気軽にピアノで、収録曲の「むずかしい」バージョンを最後まで弾く。" },
  },
  world: {
    name: (world: string) => `「${world}」マスター`,
    description: (world: string) => `「${world}」のボスをたおす。`,
  },
};

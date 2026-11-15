/** The profile of *Learn Piano* in Japanese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("ja", value);
const days = (value: number) => `${n(value)}日`;

export const learnProfile: Translation<typeof en> = {
  loading: "進み具合を読み込んでいます…",
  level: {
    heading: "レベル",
    name: (level: number) => `レベル${n(level)}`,
    total: (xp: number) => `合計${n(xp)}XP`,
    toNext: (level: number) => `レベル${n(level)}まで`,
  },
  streak: {
    heading: "連続記録",
    current: (count: number) => days(count),
    currentLabel: "連続中",
    best: (count: number) => `最高：${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `今日：${n(xp)}XP、目標の${n(goal)}XPを達成` : `今日：${n(goal)}XP中${n(xp)}XP`,
  },
  calendar: {
    heading: "最近の8週間",
    label: (met: number, played: number) =>
      `最近の8週間で、目標を達成した日は${days(met)}、レッスンをした日は${days(played)}です。`,
    met: "目標達成",
    played: "レッスンした",
    none: "レッスンなし",
  },
  stats: {
    heading: "記録",
    lessons: "クリアしたレッスン",
    threeStars: "星3つのレッスン",
    days: "練習した日数",
    badges: "獲得したバッジ",
  },
  badges: {
    heading: "バッジ",
    lead: (earned: number, all: number) => `${n(all)}個中${n(earned)}個を獲得`,
    earned: (name: string) => `${name}、獲得済み`,
    locked: (name: string) => `${name}、まだ獲得していません`,
  },
  choices: {
    heading: "設定",
    goal: "1日の目標",
    goalHelp: "連続記録を続けるために、1日に必要なXPです。",
    sounds: "ごほうびの音",
    soundsHelp: "ステップの合格、星、レベルアップ、バッジのときにチャイムが鳴ります。ピアノの音はいつでも鳴ります。",
  },
  data: {
    heading: "データ",
    lead: "進み具合はこのブラウザーに保存されます。「データ」ページでは、ほかのデータと一緒に1つのファイルに保存し、そこから復元できます。",
    open: "バックアップ・復元",
    reset: "進み具合をすべてリセット",
    failed: "ブラウザーに保存できませんでした。何も変更されていません。",
    resetDone: "進み具合をリセットしました。それまでの内容は、すべてバックアップファイルに残っています。",
    close: "閉じる",
    cancel: "進み具合を残す",
    ask: {
      title: "進み具合をすべてリセットしますか？",
      text: "このブラウザーから、すべてのレッスン、星、XP、バッジが消えます。設定はそのまま残ります。",
      next: "続ける",
    },
    askAgain: {
      title: "よろしいですか？",
      text: "先にバックアップファイルを保存するので、あとですべて復元できます。そのあと、進み具合は最初からになります。",
      confirm: "リセットする",
    },
  },
};

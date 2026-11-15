/** The world map of *Learn Piano* in Japanese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: Translation<typeof en> = {
  lead: "1レッスンずつ、道を進みましょう。どのワールドも、最後にボスが待っています。",
  loading: "コースを読み込んでいます…",
  continue: "続ける",
  nextUp: "次のレッスン",
  world: (n: number) => `ワールド${formatNumber("ja", n)}`,
  progress: (done: number, all: number) => `${formatNumber("ja", all)}レッスン中${formatNumber("ja", done)}レッスン`,
  locked: "前のワールドのボスに勝つか、このワールドのとび級テストに合格すると開きます。",
  beaten: "クリア",
  node: {
    locked: (name: string) => `${name}、ロック中`,
    open: (name: string) => `${name}、挑戦できます`,
    done: (name: string, stars: number) => `${name}、星3つ中${formatNumber("ja", stars)}つ`,
  },
  medal: (world: string, earned: boolean) => `${world}のバッジ、${earned ? "獲得済み" : "まだ獲得していません"}`,
  skipTest: {
    title: (world: string) => `とび級テスト：${world}`,
    text: "もう知っていますか？とび級テストに合格すると、ここのレッスンがすべて開きます。",
    action: "とび級テストを受ける",
  },
  bar: {
    label: "進み具合",
    streak: (days: number) => `${formatNumber("ja", days)}日連続`,
    level: (level: number) => `レベル${formatNumber("ja", level)}`,
    today: "今日",
    todayGoal: (xp: number, goal: number) => `今日：${formatNumber("ja", goal)}XP中${formatNumber("ja", xp)}XP`,
    days: (days: number) => `${formatNumber("ja", days)}日`,
  },
};

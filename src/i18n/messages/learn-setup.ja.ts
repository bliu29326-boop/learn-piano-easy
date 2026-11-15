/** The first setup of *Learn Piano* in Japanese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "ピアノを学ぶへようこそ",
  welcome: "こんにちは！ピアノの先生です。かんたんな質問に3つ答えたら、一緒に弾きましょう。",
  mascot: "ピアノの先生。はちみつ色の毛で、コーデュロイのジャケットを着たサル",
  close: "セットアップをスキップ",
  progress: "セットアップ",
  steps: ["ピアノ", "経験", "1日の目標"],
  doneStep: "完了",
  next: "続ける",
  device: {
    question: "何で弾きますか？",
    midi: { name: "MIDIキーボード", text: "USBでつないだ電子ピアノやキーボード。" },
    computer: { name: "パソコンのキーボード", text: "文字キーで音を弾きます。" },
    screen: { name: "画面", text: "画面の鍵盤を押します。" },
    noMidi: "このブラウザーはMIDIに対応していません。かわりにパソコンのキーボードか画面で弾きましょう。",
    check: "どれかのキーを押して、音が聞こえるか確かめましょう。",
    checkMidi: "MIDIキーボードのどれかの鍵盤を弾きましょう。",
    checkComputer: "Q、W、Eなどの文字キーを押しましょう。",
    checkScreen: "下の鍵盤を押しましょう。",
    heard: (note: string) => `聞こえました！今のは${note}です。`,
    keys: "試し弾きのピアノ",
    skip: "チェックをスキップ",
    marks: { next: "この鍵盤をためす", correct: "聞こえた", mistake: "聞こえた" },
  },
  before: {
    question: "ピアノを弾いたことはありますか？",
    never: "ない",
    little: "少しだけ",
    yes: "はい、弾けます",
    skipTests: "マップのワールドには、それぞれとび級テストがあります。合格すると、そのワールドのレッスンがすべて一度に開きます。",
  },
  goal: {
    question: "1日にどのくらい練習しますか？",
    lead: "毎日目標をクリアして、連続記録をのばしましょう。新しいレッスンを星3つでクリアすると、30XPもらえます。",
    label: "1日の目標",
    names: { "10": "のんびり", "20": "こつこつ", "30": "やる気まんまん", "50": "チャレンジ" },
    option: (xp: number, name: string) => `${formatNumber("ja", xp)}XP、${name}`,
    start: "レッスンを始める",
  },
};

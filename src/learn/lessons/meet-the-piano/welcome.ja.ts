/** *Welcome to the piano* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { WelcomeTexts } from "./welcome.en";

export const welcomeJa: Translation<WelcomeTexts> = {
  title: "ピアノへようこそ",
  steps: {
    hello: {
      text: "ようこそ！ここでは、小さな一歩ずつピアノを学びます。レッスンごとにひとつのことを教わり、すぐに弾いてみます。",
    },
    "sound-check": {
      text: "まずは音のチェックです。ピアノが4つの音を弾きます。何も聞こえないときは、音量を上げて「もう一度聴く」を押しましょう。",
    },
    "ways-to-play": {
      text: "どのレッスンも、画面の鍵盤、パソコンのキーボード、MIDIキーボードのどれでも弾けます。MIDIキーボードを使うときは、つないでから、プレーヤーの設定で「MIDIデバイスを接続」を一度押します。",
    },
    "ways-quiz": {
      text: "レッスンは何で弾けますか？",
      answers: ["MIDIキーボードだけ", "画面の鍵盤だけ", "どれでも：画面、パソコンのキーボード、MIDIキーボード"],
    },
    "first-key": {
      text: "はじめての音です！印のついた鍵盤を弾きましょう。",
    },
    "three-keys": {
      text: "次は、並んだ3つの鍵盤です。印のついた鍵盤を、左から右へ順に弾きましょう。",
    },
    recap: {
      text: "よくできました。はじめての音を弾けました。",
      points: [
        "音のチェックで、ピアノの音が聞こえることを確かめます。",
        "画面、パソコンのキーボード、MIDIキーボードのどれでも弾けます。",
        "印のついた鍵盤が、いつも次に弾く鍵盤です。",
      ],
    },
  },
};

/** *High and low* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { HighAndLowTexts } from "./high-and-low.en";

export const highAndLowJa: Translation<HighAndLowTexts> = {
  title: "高い音と低い音",
  steps: {
    "low-to-high": {
      text: "よく聴いて、見ていましょう。ピアノが、左側から右側へ鍵盤を弾いていきます。",
    },
    "left-is-low": {
      text: "音がだんだん上がっていくのが聞こえましたか？左の鍵盤ほど低く、右の鍵盤ほど高い音がします。",
    },
    "wide-listen": {
      text: "2つの音が聞こえます。2つ目の音は、1つ目より高い、低い、同じのどれですか？",
    },
    "climb-up": {
      text: "今度は上がっていきましょう。印のついた鍵盤を左から右へ弾いて、音が上がるのを聴きましょう。",
    },
    "climb-down": {
      text: "そして下りてきましょう。印のついた鍵盤を右から左へ弾いて、音が下がるのを聴きましょう。",
    },
    "low-then-high": {
      text: "大きくとびます。印のついた3つの鍵盤を、低いほうから高いほうへ弾きましょう。",
    },
    "which-way": {
      text: "鍵盤の上で、手を右へ動かします。音はどうなりますか？",
      answers: ["低くなる", "高くなる", "変わらない"],
    },
    "close-listen": {
      text: "よく聴きましょう。2つの音はすぐ近くにあるか、同じ音です。2つ目の音は、高い、低い、同じのどれですか？",
    },
    recap: {
      text: "よくできました。高い音と低い音を聴き分けて、弾けるようになりました。",
      points: ["左の鍵盤は低い音がします。", "右の鍵盤は高い音がします。", "2つの音が同じに聞こえることもあります。"],
    },
  },
};

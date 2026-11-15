/** *Black key groups* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { BlackKeyGroupsTexts } from "./black-key-groups.en";

export const blackKeyGroupsJa: Translation<BlackKeyGroupsTexts> = {
  title: "黒鍵のグループ",
  steps: {
    "see-the-groups": {
      text: "黒鍵を見てみましょう。黒鍵はグループになっています。まず2つのグループ、次に3つのグループです。この並びが、ピアノ全体でくり返されます。",
    },
    "smaller-group-quiz": {
      text: "小さいほうのグループに黒鍵はいくつ？",
      answers: ["1つ", "2つ", "3つ", "4つ"],
    },
    "two-left": {
      text: "2つの黒鍵のグループを見つけて、その左の黒鍵を弾きましょう。",
    },
    "two-right": {
      text: "次は、2つの黒鍵のグループの、右の黒鍵を弾きましょう。",
    },
    "group-of-three": {
      text: "2つのグループのとなりには、どれも3つの黒鍵のグループがあります。少し幅が広いので、すぐに見つかります。",
    },
    "three-left": {
      text: "3つの黒鍵のグループを見つけて、その左の黒鍵を弾きましょう。",
    },
    "three-middle": {
      text: "次は、3つの黒鍵のグループの、真ん中の黒鍵を弾きましょう。",
    },
    "all-five": {
      text: "2つのグループの黒鍵をすべて弾き、続けてとなりの3つのグループの黒鍵も弾きましょう。左から右へ進みます。",
    },
    "find-your-way": {
      text: "白鍵はどれも同じに見えます。ピアノの上で場所を見つける手がかりになるのは何ですか？",
      answers: ["白鍵の色", "2つと3つの黒鍵のグループ", "鍵盤ひとつひとつの大きさ"],
    },
    "three-right": {
      text: "最後のさがしものです。3つの黒鍵のグループの、右の黒鍵を弾きましょう。",
    },
    recap: {
      text: "よくできました。黒鍵を目印に、場所がわかるようになりました。",
      points: [
        "黒鍵は、2つと3つのグループになっています。",
        "2つのグループと3つのグループが、ピアノ全体で交互に並びます。",
        "グループを見れば、鍵盤のどこにいるかがわかります。",
      ],
    },
  },
};

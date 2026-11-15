/** *Minor triads* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsJa: Translation<MinorTriadsTexts> = {
  title: "短三和音",
  steps: {
    "major-then-minor": {
      text: "ドから始まる2つの和音を聴いてみましょう。1つ目はCコードで、明るい響きです。2つ目はCmコードで、少し暗い響きです。",
    },
    "thirds-swap": {
      text: "長三和音では、下の3度が長3度で、半音4つです。上の3度は短3度です。短三和音ではこれが入れかわり、短3度が下に来ます。",
    },
    "minor-third-size": {
      text: "長3度は半音4つです。短3度は半音いくつですか？",
      answers: ["4つ", "3つ", "2つ"],
    },
    "lower-the-middle": {
      text: "つまり、長三和音はひと工夫で短三和音に変わります。真ん中の音を半音下げるだけです。ド・ミ・ソが、ド・ミ♭・ソになります。",
    },
    "find-e-flat": {
      text: "鍵盤でミ♭（ミのフラット）を見つけましょう。ミのすぐ左にある黒鍵です。",
    },
    "c-major-to-minor": {
      text: "弾いてみましょう。真ん中のドから、1、3、5の指でCコードを弾きます。次に3の指をミ♭へすべらせてCmコードにします。どちらも2回ずつ弾きましょう。",
    },
    "hear-the-middle-drop": {
      text: "長三和音と短三和音では、真ん中の音だけが半音動きます。2つ目の鍵盤は、高い、低い、同じのどれでしょう？",
    },
    "white-key-minors": {
      text: "白鍵だけでできる短三和音が3つあります。Amコードはラ・ド・ミ、Dmコードはレ・ファ・ラ、Emコードはミ・ソ・シです。",
    },
    "a-minor": {
      text: "右手の親指を、真ん中のドのすぐ下のラに置きましょう。Amコードを2回弾きます。ラ・ド・ミを一緒に弾きます。",
    },
    "d-and-e-minor": {
      text: "今度は手を動かします。真ん中のドのすぐ上のレからDmコードを弾きます。次に白鍵1つ上でEmコード、最後にもう一度Dmコードを弾きましょう。",
    },
    "g-major-to-minor": {
      text: "Gコードはソ・シ・レです。Gmコードにするには、どの音を下げますか？",
      answers: ["シ", "ソ", "レ"],
    },
    "major-minor-pairs": {
      text: "ファ♯を使ってDコード、ファを使ってDmコードを弾きましょう。次にシを使ってGコード、シ♭を使ってGmコードを弾きます。",
    },
    recap: {
      text: "よくできました！長三和音と短三和音を弾けるようになりました。",
      points: [
        "短三和音は、短3度の上に長3度を重ねます。",
        "長三和音の真ん中の音を下げると、短三和音になります。",
        "長三和音は明るく、短三和音は少し暗く響きます。",
        "Am、Dm、Emコードは白鍵だけでできます。",
      ],
    },
  },
};

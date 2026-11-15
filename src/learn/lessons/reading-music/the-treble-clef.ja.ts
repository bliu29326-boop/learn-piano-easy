/** *The treble clef* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TheTrebleClefTexts } from "./the-treble-clef.en";

export const theTrebleClefJa: Translation<TheTrebleClefTexts> = {
  title: "ト音記号",
  steps: {
    "a-clef-starts-the-staff": {
      text: "五線は、いつも音部記号から始まります。音部記号は、どの線と間がどの音かを教えてくれます。右手は、たいていト音記号の楽譜を読みます。",
    },
    "the-g-line": {
      text: "ト音記号は、下から2本目の線のまわりをくるりと巻いています。この線がソです。ト音記号の「ト」は、日本の音名でソのことです。真ん中のドから上へ数えて、最初のソです。",
    },
    "g-line-quiz": {
      text: "ト音記号が巻いているのは、どの線ですか？",
      answers: ["いちばん下の線", "下から2本目の線", "いちばん上の線"],
    },
    "hear-g-demo": {
      text: "聴きましょう。第2線のソを2回弾きます。",
    },
    "play-g": {
      text: "この音符はソの線にあります。ピアノで弾きましょう。",
    },
    "g-neighbours": {
      text: "ソから、となりの音が見つかります。1つ上、すぐ上の間はラです。1つ下、すぐ下の間はファです。",
    },
    "neighbours-demo": {
      text: "よく見て、聴いていましょう。ソ、1つ上がってラ、ソに戻って、1つ下がってファ、そしてまたソです。",
    },
    "space-above-g-quiz": {
      text: "ソの線のすぐ上の間に音符があります。何の音ですか？",
      answers: ["ファ", "ラ", "シ"],
    },
    "one-more-step": {
      text: "音の名前を順にたどりましょう。ラの上はシで、真ん中の線にあります。ファの下はミで、いちばん下の線にあります。",
    },
    "middle-line-quiz": {
      text: "ト音記号の五線で、真ん中の線にある音は何ですか？",
      answers: ["ソ", "ラ", "シ"],
    },
    "play-treble-notes": {
      text: "見えた音符を1つずつ弾きましょう。まずソの線を見つけて、そこから上か下へ数えます。",
    },
    "name-treble-notes": {
      text: "今度は、音符の名前を答えましょう。ソの線から、上か下へたどります。",
    },
    recap: {
      text: "よくできました。ト音記号で、はじめての音符が読めました。",
      points: [
        "ト音記号は第2線を巻いていて、その線がソです。",
        "1つ上がるか下がると、次の線か間、次の音名に進みます。",
        "ソのまわりには、ミ・ファ・ラ・シがあります。",
      ],
    },
  },
};

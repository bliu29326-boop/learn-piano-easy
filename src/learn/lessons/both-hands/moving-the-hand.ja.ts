/** *Moving the hand* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { MovingTheHandTexts } from "./moving-the-hand.en";

export const movingTheHandJa: Translation<MovingTheHandTexts> = {
  title: "手を動かす",
  steps: {
    "phrase-then-move": {
      text: "右手を見てみましょう。ドのポジションで5つの音を弾き、休符のあいだに上へ移って、高いところで同じ形をもう一度弾きます。",
    },
    "new-position": {
      text: "5本の指のポジションは、ほかの鍵盤から始めることもできます。ソのポジションでは、右手の親指を真ん中のドの上のソに置きます。指はソ・ラ・シ・ド・レにのります。",
    },
    "new-thumb": {
      text: "ソのポジションで右手の親指を置く鍵盤を見つけましょう。真ん中のドのすぐ上のソです。",
    },
    "little-finger-quiz": {
      text: "右手はソのポジションです。小指が弾く鍵盤はどれですか？",
      answers: ["レ", "ド", "ソ", "ミ"],
    },
    "middle-finger-quiz": {
      text: "そのままソのポジションです。中指が弾く鍵盤はどれですか？",
      answers: ["ミ", "シ", "ラ"],
    },
    "read-g-position": {
      text: "ト音記号の五線に書いた、ソのポジションの音です。ひとつずつ名前を言いましょう。",
    },
    "c-position-phrase": {
      text: "ドのポジションから始めます。親指から4の指まで上がり、真ん中のドまで戻りましょう。",
    },
    "g-position-phrase": {
      text: "次は手をソのポジションに移して、同じ形で弾きましょう。親指をソに置き、ドまで上がって戻ります。",
    },
    "move-in-a-rest": {
      text: "手は、休符のあいだか長い音の終わりに動かします。手全体を上げて形をそのまま保ち、親指を新しい鍵盤に着けましょう。",
    },
    "move-and-play": {
      text: "右手で2つのフレーズを続けて弾きましょう。真ん中のドから始めて、ド・レ・ミ・ファ・ミ・レ・ドと弾きます。それから親指を真ん中のドの上のソに移して、ソ・ラ・シ・ド・シ・ラ・ソと弾きます。",
    },
    recap: {
      text: "よくできました！手の位置を変えられるようになりました。",
      points: [
        "ソのポジションでは、右手の親指を真ん中のドの上のソに置きます。",
        "指はソ・ラ・シ・ド・レを弾きます。",
        "休符や長い音のあいだに、形を保ったまま手全体を動かします。",
      ],
    },
  },
};

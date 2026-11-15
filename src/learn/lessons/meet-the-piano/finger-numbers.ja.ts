/** *Finger numbers* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { FingerNumbersTexts } from "./finger-numbers.en";

export const fingerNumbersJa: Translation<FingerNumbersTexts> = {
  title: "指番号",
  steps: {
    "right-hand-numbers": {
      text: "指にはそれぞれ番号があります。右手では、親指が1、小指が5です。その間の指が2、3、4です。",
    },
    "finger-three-quiz": {
      text: "3の指はどれですか？",
      answers: ["親指", "中指", "小指"],
    },
    "left-hand-numbers": {
      text: "左手も同じように数えます。親指が1、小指が5です。どちらの親指も1なので、番号は左右で鏡に映したようになります。",
    },
    "left-thumb-quiz": {
      text: "左手の親指は何番ですか？",
      answers: ["1", "3", "5"],
    },
    "five-fingers-demo": {
      text: "並んだ5つの鍵盤を見てみましょう。右手の指1本に1つずつです。親指が最初の鍵盤を弾き、続いて2、3、4、5の指が弾きます。",
    },
    "right-hand-five": {
      text: "今度は弾いてみましょう。右手の親指を真ん中のドに置き、その右の白鍵に指を1本ずつのせます。1、2、3、4、5の指で弾きましょう。",
    },
    "finger-pattern": {
      text: "手はそのままで、1、3、5、3、1の指で弾きましょう。",
    },
    "left-hand-five": {
      text: "次は左手です。小指、つまり5の指を、印のついたドに置きます。親指まで弾いていきましょう：5、4、3、2、1。",
    },
    recap: {
      text: "よくできました。指に番号がつきました。",
      points: ["親指が1、小指が5です。", "両手とも、親指から同じように数えます。", "レッスンに出てくる指の番号は、どの指で弾くかを表します。"],
    },
  },
};

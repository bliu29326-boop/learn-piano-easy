/** *Repeated notes* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { RepeatedNotesTexts } from "./repeated-notes.en";

export const repeatedNotesJa: Translation<RepeatedNotesTexts> = {
  title: "同じ音のくり返し",
  steps: {
    "repeat-demo": {
      text: "見て、聴いてみましょう。何度も鳴る音があります。そのあいだ、手は動きません。",
    },
    "what-a-repeat-is": {
      text: "同じ音をくり返すことがあります。指は鍵盤にのせたまま、もう一度弾きます。2つの音のあいだで、鍵盤がもとの高さまで戻るのを待ちましょう。",
    },
    "same-or-not": {
      text: "毎回2つの音が聞こえます。2つ目の音は、1つ目より高い？低い？それとも同じ？",
    },
    "repeat-e-d": {
      text: "右手をドのポジションに置きましょう。3の指でミを3回、次に2の指でレを3回弾きます。",
    },
    "repeat-after-skip": {
      text: "次は1つとばしのあとに、同じ音のくり返しです。3の指でミを弾いて、5の指でソを2回弾きましょう。",
    },
    "how-many-keys-quiz": {
      text: "ド・ド・ドと弾きます。弾く鍵盤はいくつ？",
      answers: ["1つの鍵盤を3回", "ちがう鍵盤を3つ"],
    },
    "mixed-phrase": {
      text: "このメロディーには、となりの音、1つとばし、同じ音のくり返しが入っています。手をドのポジションに置いたまま、印のついた鍵盤についていきましょう。",
    },
    recap: {
      text: "よくできました。同じ音のくり返しが弾けるようになりました。",
      points: ["同じ音のくり返しでは、同じ鍵盤をもう一度弾きます。", "指は鍵盤にのせたまま、鍵盤が戻るのを待ちます。", "メロディーには、となりの音、1つとばし、くり返しがまざることがあります。"],
    },
  },
};

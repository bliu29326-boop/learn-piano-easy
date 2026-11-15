/** *Eighth notes* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { EighthNotesTexts } from "./eighth-notes.en";

export const eighthNotesJa: Translation<EighthNotesTexts> = {
  title: "8分音符",
  steps: {
    "eighth-demo": {
      text: "見て、聴いてみましょう。最初は真ん中のドが1拍に1回鳴ります。次は1拍に2回鳴ります。",
    },
    "what-an-eighth-note-is": {
      text: "速い音は8分音符でした。8分音符は半拍です。だから8分音符2つで1拍になります。",
    },
    "eighths-per-beat-quiz": {
      text: "1拍は8分音符いくつ分ですか？",
      answers: ["1つ", "2つ", "4つ"],
    },
    "count-and": {
      text: "8分音符を数えるときは、拍と拍のあいだに「と」を入れて、「1と2と3と4と」と数えます。数字は拍の上に、「と」は拍と拍のちょうど真ん中に来ます。",
    },
    "counting-demo": {
      text: "一緒に数えましょう。「1、2、3と、4」。速い2つのミは、「3」とその「と」に乗っています。",
    },
    "eighth-taps": {
      text: "今度は拍がゆっくりで、1分間に60拍です。クリック音はその2倍の速さで鳴ります。クリック音1つが8分音符1つです。「1と2と」と数えながら、クリック音のたびにどれかの鍵盤を弾きましょう。",
    },
    "eighths-per-bar-quiz": {
      text: "1小節は4拍です。8分音符はいくつ入りますか？",
      answers: ["4つ", "6つ", "8つ"],
    },
    "phrase-demo": {
      text: "今度は両手で弾きます。左手は低いドを押さえ、右手は8分音符でソまでかけ上がります。それからドまでかけ下ります。",
    },
    "eighth-phrase": {
      text: "両手をドのポジションに置きましょう。右手は真ん中のドから、ド・レ・ミ・ファ・ソ・ソ・ファ・ミ・レ・ドと弾きます。左手の小指は、最初のドと一緒に真ん中のドの下のドを弾き、2つめのソと一緒にもう一度弾きます。",
    },
    recap: {
      text: "よくできました！2倍の速さで音を動かせるようになりました。",
      points: ["8分音符は半拍です。", "8分音符2つで1拍になります。", "8分音符は「1と2と」と数えます。"],
    },
  },
};

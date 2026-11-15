/** *Counting to four* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourJa: Translation<CountingToFourTexts> = {
  title: "4つ数えよう",
  steps: {
    "bars-demo": {
      text: "見て、聴いてみましょう。4拍のまとまりのはじめに低いドが鳴り、残りの3拍はソが鳴ります。",
    },
    "what-a-bar-is": {
      text: "拍は小節にまとめられ、小節の終わりには小節線があります。ここでは1小節に4拍あり、「1、2、3、4」と数えます。これが4/4拍子（4分の4拍子）で、1拍目がいちばん強い拍です。",
    },
    "beats-in-a-bar-quiz": {
      text: "4/4拍子の1小節には、何拍ありますか？",
      answers: ["3拍", "4拍", "8拍"],
    },
    "strongest-beat-quiz": {
      text: "1小節の中で、いちばん強く感じるのは何拍目ですか？",
      answers: ["1拍目", "2拍目", "4拍目"],
    },
    "count-aloud-tap": {
      text: "「スタート」を押して、クリック音のたびに好きな鍵盤を弾きましょう。弾きながら「1、2、3、4」と声に出して数えます。1拍目は少し大きな声で言いましょう。",
    },
    "fill-a-bar-quiz": {
      text: "4/4拍子の1小節をちょうど満たすのはどれですか？",
      answers: ["2分音符が2つ", "4分音符が3つ", "全音符1つと4分音符1つ"],
    },
    recap: {
      text: "よくできました！4拍の小節を数えられるようになりました。",
      points: ["拍は小節にまとまり、小節の終わりには小節線があります。", "4/4拍子では「1、2、3、4」と数えます。", "1拍目は小節の中でいちばん強い拍です。"],
    },
  },
};

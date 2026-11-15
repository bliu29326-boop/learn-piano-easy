/** *Quarter notes* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { QuarterNotesTexts } from "./quarter-notes.en";

export const quarterNotesJa: Translation<QuarterNotesTexts> = {
  title: "4分音符",
  steps: {
    "quarter-demo": {
      text: "見て、聴いてみましょう。真ん中のドが拍ごとに1回鳴ります。どの音も同じ長さです。",
    },
    "what-a-quarter-note-is": {
      text: "いま聴いた音は、どれも4分音符です。4分音符は1拍の長さです。だから、1拍に1つずつ音を弾きます。",
    },
    "quarter-beats-quiz": {
      text: "4分音符の長さはどれだけですか？",
      answers: ["1拍", "2拍", "4拍"],
    },
    "quarter-taps": {
      text: "1回弾くごとに4分音符1つです。「スタート」を押してクリック音を4回聴いたら、クリック音のたびに好きな鍵盤を1回弾きましょう。",
    },
    "phrase-demo": {
      text: "有名なメロディーの始まりです。どの音も4分音符で、1拍に1つずつです。",
    },
    "quarter-phrase": {
      text: "右手をドのポジションに置きましょう。音ごとに1拍ずつ数えながら、メロディーを弾いてみましょう。",
    },
    recap: {
      text: "よくできました！はじめての音の長さを覚えました。",
      points: ["4分音符は1拍の長さです。", "1拍に4分音符を1つ弾きます。", "多くのメロディーは、ほとんど4分音符でできています。"],
    },
  },
};

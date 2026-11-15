/** *Three-four time* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { ThreeFourTimeTexts } from "./three-four-time.en";

export const threeFourTimeJa: Translation<ThreeFourTimeTexts> = {
  title: "3/4拍子",
  steps: {
    "waltz-demo": {
      text: "見て、聴いてみましょう。1拍目に低い音が鳴り、次の2拍は高い音が鳴ります。この形がくり返されます。",
    },
    "beats-in-threes": {
      text: "拍を3つずつまとめる音楽もあります。「1、2、3、1、2、3」と数え、1拍目がいちばん強い拍です。これが3/4拍子（4分の3拍子）で、ワルツの拍子です。",
    },
    "beats-in-a-bar-quiz": {
      text: "3/4拍子の1小節には、何拍ありますか？",
      answers: ["2拍", "3拍", "4拍"],
    },
    "which-is-a-waltz-quiz": {
      text: "ワルツは3/4拍子です。どう数えますか？",
      answers: ["1、2、3、1、2、3", "1、2、3、4、1、2、3、4"],
    },
    "tap-in-threes": {
      text: "「スタート」を押すと、まずクリック音が4回鳴ります。そのあと、クリック音のたびに好きな鍵盤を弾き、「1、2、3」と声に出して数えましょう。「1」は少し大きな声で言います。",
    },
    recap: {
      text: "よくできました！3つずつ数えられるようになりました。",
      points: ["拍を3つずつまとめる音楽もあります。", "3/4拍子の1小節は3拍で、「1、2、3」と数えます。", "ワルツのように、1拍目がいちばん強い拍です。"],
    },
  },
};

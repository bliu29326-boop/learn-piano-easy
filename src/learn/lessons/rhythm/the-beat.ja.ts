/** *The beat* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TheBeatTexts } from "./the-beat.en";

export const theBeatJa: Translation<TheBeatTexts> = {
  title: "拍",
  steps: {
    "beat-demo": {
      text: "見て、聴いてみましょう。メロディーの下で、低い音が何度も鳴っています。いつも同じ速さです。",
    },
    "what-the-beat-is": {
      text: "音楽には、一定の拍があります。心臓の鼓動や、歩くときの足どりのようなものです。さっきの低い音が拍を刻んでいました。うなずいたり、トントンたたいたりして、拍に合わせてみましょう。",
    },
    "tap-the-beat": {
      text: "「スタート」を押すと、まずクリック音が4回鳴ります。そのあと、クリック音のたびに好きな鍵盤を1回弾きましょう。",
    },
    "steady-beat-quiz": {
      text: "1曲が始めから終わりまで流れます。その拍はどうなるでしょう？",
      answers: ["速くなったり遅くなったりする", "ずっと一定のまま"],
    },
    "tap-a-longer-beat": {
      text: "今度は少し長く、少し速くなります。クリック音に合わせて、1回ずつ弾き続けましょう。",
    },
    recap: {
      text: "よくできました！拍を感じて、それに合わせて弾けるようになりました。",
      points: ["音楽には一定の拍があります。", "拍は心臓の鼓動や歩く足どりに似ています。", "拍ごとに1回弾きます。"],
    },
  },
};

/** *Tune and bass together* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TuneAndBassTogetherTexts } from "./tune-and-bass-together.en";

export const tuneAndBassTogetherJa: Translation<TuneAndBassTogetherTexts> = {
  title: "メロディーと低音を一緒に",
  steps: {
    "whole-tune": {
      text: "4小節の短いメロディーを聴いてみましょう。右手がメロディーを弾き、左手は各小節に低い音をひとつ加えます。",
    },
    "two-layers": {
      text: "メロディーは拍ごとに動きます。低音は1拍目にだけ入り、メロディーの下で1小節ずっと響きます。",
    },
    "tune-alone": {
      text: "まずはメロディーだけを、ドのポジションで弾きます。ド・レ・ミ・ファ、ソ・ファ・ミ・レ、レ・ミ・ファ・レと弾き、真ん中のドで終わりましょう。",
    },
    "bass-beat-quiz": {
      text: "低音は各小節の何拍目に入りますか？",
      answers: ["1拍目", "3拍目", "毎拍"],
    },
    "bass-demo": {
      text: "次は低音だけを聴いてみましょう。どの音も1小節ずっと続きます。ド、ソが2回、そしてまたドです。",
    },
    "bass-alone": {
      text: "左手をドのポジションに置いて、低音を弾きましょう。小指でド、親指でソを弾きます。",
    },
    "press-together": {
      text: "1拍目では、両手が同時に鍵盤を弾きます。そのあと、右手が弾き続けるあいだ、左手は音を押さえたままにします。",
    },
    "first-half": {
      text: "両手で最初の2小節を弾きましょう。低音とメロディーの最初の音を一緒に弾きます。",
    },
    "held-bass-quiz": {
      text: "2小節目で、右手はソ・ファ・ミ・レと弾きます。そのあいだ、左手は何をしていますか？",
      answers: ["1オクターブ低くソ・ファ・ミ・レを弾く", "ソを押さえたまま", "鍵盤から離して休む"],
    },
    "whole-tune-together": {
      text: "次はメロディー全体を両手で弾きます。両手で弾く1拍目は、あわてずに弾きましょう。",
    },
    recap: {
      text: "よくできました！メロディーを低音つきで弾きました。",
      points: [
        "まずメロディーだけ、次に低音だけを覚え、それから合わせます。",
        "低音は1拍目に、メロディーの音と一緒に入ります。",
        "右手が弾き続けるあいだ、左手は低音を押さえておきます。",
      ],
    },
  },
};

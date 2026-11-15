/** *Hands take turns* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { HandsTakeTurnsTexts } from "./hands-take-turns.en";

export const handsTakeTurnsJa: Translation<HandsTakeTurnsTexts> = {
  title: "右手と左手で交代",
  steps: {
    "call-and-answer": {
      text: "呼びかけとこたえを聴きましょう。右手が3つの音を弾き、次に左手が同じ音を1オクターブ下で弾きます。",
    },
    "both-positions": {
      text: "両手を同時にドのポジションに置きましょう。右手の親指は真ん中のドに、左手の小指はその1オクターブ下のドに置きます。",
    },
    "low-hand-quiz": {
      text: "両手がドのポジションにあります。低い音を弾くのはどちらの手？",
      answers: ["左手", "右手", "両手一緒に"],
    },
    "echo-listen": {
      text: "毎回2つの音を聴きましょう。2つ目の音は高い？低い？それとも同じ？",
    },
    "first-turn": {
      text: "弾いてみましょう。右手でド・レ・ミを弾き、次に左手でド・レ・ミを弾きます。",
    },
    "second-turn": {
      text: "今度は右手の小指から始めて、ミまで下りましょう。左手がこたえて、親指からミまで下ります。",
    },
    "one-waits": {
      text: "片方の手が弾いているあいだ、もう片方の手は鍵盤の上で休んで待ちます。その場から動かないので、自分の番にすぐ弾けます。",
    },
    "long-phrase": {
      text: "両手ともドのポジションのままにしましょう。この長めのメロディーは4回交代します：右手、左手、右手、左手です。印のついた鍵盤を、手から手へ追いかけましょう。",
    },
    recap: {
      text: "よくできました。両手で1つのメロディーを分け合えるようになりました。",
      points: [
        "両手は1オクターブはなれて、同時にドのポジションに置けます。",
        "左手は低い音を、右手は高い音を弾きます。",
        "片方の手が弾くあいだ、もう片方はその場で自分の番を待ちます。",
      ],
    },
  },
};

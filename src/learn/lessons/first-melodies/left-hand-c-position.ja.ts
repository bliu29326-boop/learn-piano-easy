/** *Left hand in C position* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { LeftHandCPositionTexts } from "./left-hand-c-position.en";

export const leftHandCPositionJa: Translation<LeftHandCPositionTexts> = {
  title: "左手のドのポジション",
  steps: {
    "left-hand-demo": {
      text: "真ん中のドより下の5つの鍵盤を、上がってまた下りるのを聴きましょう。このレッスンでは、左手でこの鍵盤を弾きます。",
    },
    "place-left-hand": {
      text: "真ん中のドより1オクターブ下のドを見つけましょう。そこに左手の小指、5の指を置き、その右の白鍵に1本ずつ指を置きます。親指、1の指はソの上です。",
    },
    "c-finger-quiz": {
      text: "左手がドのポジションにあります。ドを弾くのはどの指？",
      answers: ["1の指（親指）", "3の指（中指）", "5の指（小指）"],
    },
    "find-left-thumb": {
      text: "手はそのままにしておきましょう。左手の親指の下の鍵盤を弾きます。",
    },
    "find-left-middle": {
      text: "次は、左手の3の指の下の鍵盤を弾きましょう。",
    },
    "up-and-down": {
      text: "5つの鍵盤を、上がってまた下りて弾きましょう。弾きながら指を数えます：5・4・3・2・1、そして5まで戻ります。",
    },
    "left-steps": {
      text: "次は左手で、親指から始めてとなりの音へ進みましょう。どの音も、となりの白鍵へ移ります。",
    },
    "left-skips-repeats": {
      text: "左手はドのポジションのままにしましょう。1つとばしと同じ音のくり返しを弾きます：ド、ミ・ミ、ソ・ソ、ミ、ド。指は5・3・3・1・1・3・5です。",
    },
    recap: {
      text: "よくできました。左手にも、鍵盤の上のおうちができました。",
      points: [
        "左手は、真ん中のドより1オクターブ下の、ド・レ・ミ・ファ・ソに置きます。",
        "小指、5の指でドを弾き、親指でソを弾きます。",
        "指番号の並びは、右手とは反対向きです。",
      ],
    },
  },
};

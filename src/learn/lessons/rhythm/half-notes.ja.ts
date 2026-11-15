/** *Half notes* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesJa: Translation<HalfNotesTexts> = {
  title: "2分音符",
  steps: {
    "quarters-then-halves-demo": {
      text: "見て、聴いてみましょう。はじめに短い音が4つ、1拍に1つずつ鳴ります。次は、どの音も2倍の長さで鳴ります。",
    },
    "what-a-half-note-is": {
      text: "2分音符は2拍の長さです。1拍目で弾いて、2拍目が終わるまで押さえたままにします。2分音符は「1、2」と数えます。",
    },
    "half-beats-quiz": {
      text: "2分音符は何拍の長さですか？",
      answers: ["1拍", "2拍", "4拍"],
    },
    "play-and-hold": {
      text: "右手をドのポジションに置きましょう。ド・レ・ミ・レ・ドを弾き、「1、2」と数える間、それぞれの鍵盤を押さえたままにします。このステップは音ごとに待ってくれるので、ゆっくりで大丈夫です。",
    },
    "count-one-two": {
      text: "クリック音のたびに、好きな鍵盤を弾きましょう。弾きながら「1、2、1、2」と数えます。「1、2」ひとつ分が、2分音符1つの長さです。",
    },
    "which-is-longer-quiz": {
      text: "長いのはどちらの音符ですか？",
      answers: ["4分音符", "2分音符"],
    },
    "halves-in-four-quiz": {
      text: "4拍をちょうど満たすのは、2分音符いくつですか？",
      answers: ["1つ", "2つ", "4つ"],
    },
    recap: {
      text: "よくできました！2分音符を覚えました。",
      points: ["2分音符は2拍の長さです。", "弾いたら、次の拍が終わるまで押さえたままにします。", "2分音符2つで4拍になります。"],
    },
  },
};

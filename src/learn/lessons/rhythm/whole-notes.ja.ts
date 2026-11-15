/** *Whole notes* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { WholeNotesTexts } from "./whole-notes.en";

export const wholeNotesJa: Translation<WholeNotesTexts> = {
  title: "全音符",
  steps: {
    "halves-then-whole-demo": {
      text: "見て、聴いてみましょう。はじめに2分音符が2つ鳴ります。次に、その2つを合わせた長さの音が1つ鳴ります。",
    },
    "what-a-whole-note-is": {
      text: "全音符は4拍の長さです。1拍目で弾いて、残りの3拍も押さえたままにします。全音符は「1、2、3、4」と数えます。",
    },
    "whole-beats-quiz": {
      text: "全音符は何拍の長さですか？",
      answers: ["2拍", "3拍", "4拍"],
    },
    "four-beats-three-ways-demo": {
      text: "4拍を3通りで満たすのを聴いてみましょう。はじめは全音符1つ、次は2分音符2つ、最後は4分音符4つです。どれも同じ長さです。",
    },
    "same-as-whole-quiz": {
      text: "全音符1つと同じ長さなのはどれですか？",
      answers: ["2分音符1つ", "2分音符2つ", "4分音符2つ"],
    },
    "quarters-in-whole-quiz": {
      text: "全音符1つと同じ長さになるのは、4分音符いくつですか？",
      answers: ["2つ", "4つ", "8つ"],
    },
    "play-and-hold": {
      text: "右手をドのポジションに置きましょう。ド・ミ・ソを弾き、「1、2、3、4」と数えるあいだ、それぞれの鍵盤を押さえたままにします。このステップは音ごとに待ってくれるので、ゆっくりで大丈夫です。",
    },
    "count-to-four": {
      text: "クリック音のたびに、好きな鍵盤を弾きましょう。弾きながら「1、2、3、4」と2回数えます。「1、2、3、4」ひとつ分が、全音符1つの長さです。",
    },
    recap: {
      text: "よくできました！全音符を覚えました。",
      points: ["全音符は4拍の長さです。", "弾いたら、さらに3拍押さえたままにします。", "全音符1つは、2分音符2つや4分音符4つと同じ長さです。"],
    },
  },
};

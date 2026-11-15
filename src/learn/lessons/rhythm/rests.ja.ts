/** *Rests* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { RestsTexts } from "./rests.en";

export const restsJa: Translation<RestsTexts> = {
  title: "休符",
  steps: {
    "rests-demo": {
      text: "見て、聴いてみましょう。ピアノが鳴らない拍もありますが、拍は続いています。",
    },
    "what-a-rest-is": {
      text: "休符は、音楽の中の「お休み」です。何も弾きませんが、数えるのは続けます。4分休符は、4分音符と同じ1拍の長さです。",
    },
    "quarter-rest-quiz": {
      text: "ド、ド、4分休符、ドと弾きます。音が鳴らないのは何拍ですか？",
      answers: ["1拍", "2拍", "1拍もない"],
    },
    "half-rest": {
      text: "2分休符は、2分音符と同じ2拍の長さです。音を出さずに2拍数えてから、また弾きます。",
    },
    "half-rest-quiz": {
      text: "2分休符は、何拍分のお休みですか？",
      answers: ["1拍", "2拍", "4拍"],
    },
    "fill-a-bar-quiz": {
      text: "4分音符、4分休符、2分音符の順に弾きます。全部で何拍ですか？",
      answers: ["2拍", "3拍", "4拍"],
    },
    "phrase-with-rests": {
      text: "見て、聴いてみましょう。ピアノはド・レ・ミと弾いて1拍休み、ミ・レと弾きます。そして2拍休んで、ドで終わります。",
    },
    "play-with-rests": {
      text: "1小節のカウントのあとに、弾いてみましょう。クリック音に合わせてド・レ・ミを弾き、指を上げて1拍休みます。ミ・レを弾いて2拍休み、ドで終わりましょう。",
    },
    recap: {
      text: "よくできました！はじめての休符を覚えました。",
      points: ["休符は音を出さない時間ですが、数えるのは続けます。", "4分休符は1拍の長さです。", "2分休符は2拍の長さです。"],
    },
  },
};

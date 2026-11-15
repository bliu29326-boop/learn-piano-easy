/** *Treble landmarks* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TrebleLandmarksTexts } from "./treble-landmarks.en";

export const trebleLandmarksJa: Translation<TrebleLandmarksTexts> = {
  title: "ト音記号の目印の音",
  steps: {
    "landmarks-demo": {
      text: "よく見て、聴いていましょう。ピアノが、真ん中のド、ソ、その上のドを弾きます。この3つの音が目印の音です。",
    },
    "three-landmarks": {
      text: "目印の音とは、ひと目でわかる音のことです。真ん中のドは加線の上に、ソは第2線にあります。高いドは、下から3つ目の間にあります。",
    },
    "high-c-quiz": {
      text: "ト音記号の五線で、高いドはどこにありますか？",
      answers: ["第2線", "五線の下の加線", "下から3つ目の間"],
    },
    "name-landmarks": {
      text: "それぞれの目印の音の名前を答えましょう。ドかソです。",
    },
    "count-from-a-landmark": {
      text: "ほかの音は、目印の音からいくつか上か下にあります。線から次の間までが1つ、間から次の線までも1つです。1つ上がるごとに、次の音名になります。",
    },
    "count-quiz": {
      text: "ソより1つ上、第2線のすぐ上の間に音符があります。何の音ですか？",
      answers: ["ファ", "ラ", "シ"],
    },
    "name-neighbours": {
      text: "音符の名前を答えましょう。いちばん近い目印の音を見つけて、上か下へ数えます。",
    },
    "read-treble-landmarks": {
      text: "ト音記号の五線の音符を、1つずつ弾きましょう。目印の音もあれば、目印の音のすぐとなりの音もあります。",
    },
    recap: {
      text: "よくできました。ト音記号の目印の音を3つ覚えました。",
      points: [
        "真ん中のドは、五線の下の加線にあります。",
        "ソは第2線に、高いドは下から3つ目の間にあります。",
        "いちばん近い目印の音から数えれば、どの音もわかります。",
      ],
    },
  },
};

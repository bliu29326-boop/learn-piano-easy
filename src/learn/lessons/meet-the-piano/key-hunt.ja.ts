/** *The key hunt* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntJa: Translation<KeyHuntTexts> = {
  title: "鍵盤さがし",
  steps: {
    ready: {
      text: "鍵盤さがしの時間です！1つの鍵盤につき、制限時間は8秒です。黒鍵のグループを手がかりに探しましょう。",
    },
    "any-c": { text: "どこでもいいので、ドを見つけましょう。" },
    "middle-c": { text: "次は、ピアノの真ん中にあるド、真ん中のドを見つけましょう。" },
    "any-f": { text: "どこでもいいので、ファを見つけましょう。" },
    "any-g": { text: "どこでもいいので、ソを見つけましょう。" },
    "any-d": { text: "どこでもいいので、レを見つけましょう。" },
    "any-b": { text: "どこでもいいので、シを見つけましょう。" },
    "three-middle": { text: "3つの黒鍵のグループの、真ん中の黒鍵を見つけましょう。" },
    "any-e": { text: "どこでもいいので、ミを見つけましょう。" },
    "any-a": { text: "どこでもいいので、ラを見つけましょう。" },
    "high-c": { text: "最後です！真ん中のドより1オクターブ上のドを見つけましょう。" },
    recap: {
      text: "鍵盤さがしをクリアしました。もうピアノの上で迷いません。",
      points: [
        "黒鍵が、2つと3つのグループで道案内をしてくれます。",
        "白鍵には、ドからシまで7つの名前があります。",
        "同じ名前の音が、1オクターブ上にまた出てきます。",
      ],
    },
  },
};

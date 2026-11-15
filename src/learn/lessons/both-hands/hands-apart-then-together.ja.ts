/** *Hands apart, then together* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { HandsApartThenTogetherTexts } from "./hands-apart-then-together.en";

export const handsApartThenTogetherJa: Translation<HandsApartThenTogetherTexts> = {
  title: "片手ずつ、それから両手で",
  steps: {
    "three-passes": {
      text: "短いメロディーを3回聴いてみましょう。最初は右手、次は左手、最後は両手で一緒に弾きます。",
    },
    "why-apart": {
      text: "片手ずつのほうが覚えやすいです。両手とも音を覚えたら、合わせて弾きます。",
    },
    "first-step-quiz": {
      text: "両手で弾く新しい曲を始めます。最初に何を練習しますか？",
      answers: ["片手ずつ", "両手一緒に、もとの速さで", "左手だけで、右手はずっと弾かない"],
    },
    "right-alone": {
      text: "まずは右手から。真ん中のドから始めて、ド・レ・ミ・レ・ドと弾きましょう。",
    },
    "left-alone": {
      text: "次は左手だけです。1オクターブ下のドから始めて、同じようにド・レ・ミ・レ・ドと弾きましょう。",
    },
    "together-steps": {
      text: "今度は両手一緒です。2つの鍵盤を同時に弾きましょう。最初は左右の手でひとつずつドを弾きます。",
    },
    "slow-together": {
      text: "両手で弾くのは初めてなので、ゆっくり弾きましょう。速くするのは、両手で安心して弾けるようになってからです。",
    },
    "mirror-tune": {
      text: "新しいメロディーです。両手が離れていって、また戻ってきます。まるで鏡のようです。",
    },
    "mirror-right": {
      text: "右手だけで。ミ・ファ・ソ・ファ・ミと弾きましょう。",
    },
    "mirror-left": {
      text: "左手だけで。真ん中のドの下のミから始めて、ミ・レ・ド・レ・ミと弾きましょう。右手は上がりましたが、左手は下がっていきます。",
    },
    "mirror-together": {
      text: "では両手を合わせましょう。あわてずに、2つの鍵盤を同時に弾きます。",
    },
    recap: {
      text: "よくできました！初めて両手で同時に弾きました。",
      points: [
        "新しい曲は、まず片手ずつ覚えます。",
        "それから両手を合わせて、ゆっくり弾きます。",
        "両手は同じ向きにも、反対の向きにも動けます。",
      ],
    },
  },
};

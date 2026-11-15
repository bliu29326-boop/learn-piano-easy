/** *Half and whole steps* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsJa: Translation<HalfAndWholeStepsTexts> = {
  title: "半音と全音",
  steps: {
    "key-by-key": {
      text: "ピアノがドからミまで上がっていくのを聴きましょう。途中の鍵盤を、黒鍵もふくめてすべて弾いています。",
    },
    "half-step": {
      text: "その上がり方の一歩一歩が半音です。半音は、黒鍵でも白鍵でも、すぐとなりの鍵盤へ進みます。あいだに鍵盤はありません。",
    },
    "half-step-from-c": {
      text: "弾いてみましょう。真ん中のドを弾いて、次にそのすぐ右の黒鍵を弾きます。この2つを2回くり返しましょう。どの動きも半音です。",
    },
    "no-black-key-between": {
      text: "ミとファを見てみましょう。あいだに黒鍵がありません。だから、ミからファは半音です。シからドも半音です。",
    },
    "white-half-step": {
      text: "半音はなれている白鍵の組はどれ？",
      answers: ["ドとレ", "ミとファ", "ファとソ"],
    },
    "e-f-and-b-c": {
      text: "真ん中のドの上のミとファを弾きましょう。次に、シとその上のドを弾きます。どちらも白鍵どうしの半音です。",
    },
    "whole-step": {
      text: "半音2つで全音になります。全音は鍵盤を1つとばします。ドからレは全音です。あいだに黒鍵があるからです。",
    },
    "whole-and-half": {
      text: "聴きましょう。ドからレは全音、レからミも全音です。でも、ミからファは半音だけです。",
    },
    "whole-steps-from-c": {
      text: "弾いてみましょう。真ん中のド・レ・ミを弾きます。どの動きも、黒鍵をこえる全音です。",
    },
    "f-to-g": {
      text: "ファからソへ上がるのは、半音？それとも全音？",
      answers: ["全音", "半音"],
    },
    "whole-step-above-e": {
      text: "ミから全音上の鍵盤を弾きましょう。半音2つ分を数えて上がります。気をつけましょう。1つ目はファに着きます。",
    },
    recap: {
      text: "よくできました。2つの鍵盤のあいだの距離をはかれるようになりました。",
      points: [
        "半音は、黒鍵でも白鍵でも、すぐとなりの鍵盤へ進みます。",
        "ミからファ、シからドは、白鍵どうしの半音です。",
        "全音は半音2つ分で、あいだに鍵盤が1つあります。",
      ],
    },
  },
};

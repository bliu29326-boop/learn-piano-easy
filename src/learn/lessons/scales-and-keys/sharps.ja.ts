/** *Sharps* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { SharpsTexts } from "./sharps.en";

export const sharpsJa: Translation<SharpsTexts> = {
  title: "シャープ",
  steps: {
    "raised-by-a-half-step": {
      text: "聴きましょう。ド、次にそのすぐ右の黒鍵。それからファと、ファのすぐ右の黒鍵です。",
    },
    "the-sharp-sign": {
      text: "この記号♯がシャープです。シャープは音を半音上げて、すぐ右の鍵盤にします。だから、ド♯はドの右の黒鍵です。",
    },
    "find-c-sharp": {
      text: "ド♯を見つけましょう。どのドからでも、半音1つ上がります。",
    },
    "find-f-sharp": {
      text: "次はファ♯を見つけましょう。3つの黒鍵のグループの、いちばん左の黒鍵です。",
    },
    "where-is-g-sharp": {
      text: "ソ♯はどこ？",
      answers: ["ソのすぐ左の黒鍵", "ソのすぐ右の黒鍵", "白鍵のラ"],
    },
    "e-sharp": {
      text: "ミの右には黒鍵がありません。ミから半音上がると、ファに着きます。だから、ミ♯はファで、シ♯はドです。",
    },
    "e-sharp-is": {
      text: "ミ♯では、どの鍵盤を弾く？",
      answers: ["ファ", "ミ", "ファ♯"],
    },
    "sharp-on-the-staff": {
      text: "五線では、♯は音符のすぐ左の、同じ線か間に書かれます。音符を読んでから、半音上げます。",
    },
    "play-sharps": {
      text: "シャープのついた音符を読んで、弾いてみましょう。まず白鍵を見つけて、そこから半音1つ上がります。",
    },
    "through-f-sharp": {
      text: "右手の親指を真ん中のドの上のレに、中指をファ♯に置きましょう。レ・ミ・ファ♯・ソと弾いて、レまで戻ります。",
    },
    recap: {
      text: "よくできました。シャープを読んで弾けるようになりました。",
      points: [
        "シャープ♯は音を半音上げて、すぐ右の鍵盤にします。",
        "シャープの多くは黒鍵です。たとえば、ド♯やファ♯です。",
        "あいだに黒鍵がないので、ミ♯はファ、シ♯はドです。",
        "五線では、♯は音符のすぐ左に書かれます。",
      ],
    },
  },
};

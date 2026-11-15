/** *Mary's first phrase* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseJa: Translation<MaryFirstPhraseTexts> = {
  title: "「メリーさんのひつじ」のはじめのフレーズ",
  steps: {
    "phrase-demo": {
      text: "「メリーさんのひつじ」の前半を聴きましょう。となりの音、同じ音のくり返し、そして1つとばしが1回。どれも、もう知っている動きです。",
    },
    "first-note-quiz": {
      text: "メロディーはどの音で始まる？",
      answers: ["ド", "ミ", "ソ"],
    },
    "the-fingers": {
      text: "右手はドのポジションのまま、親指を真ん中のドに置きましょう。このメロディーでは4本の指を使います：1はド、2はレ、3はミ、5はソです。",
    },
    "g-finger-quiz": {
      text: "ソを弾くのはどの指？",
      answers: ["2の指", "3の指", "5の指"],
    },
    "bars-one-two": {
      text: "はじめを弾きましょう：ミ・レ・ド・レ、そしてミを3回。指は3・2・1・2、そして3・3・3です。",
    },
    "bars-three-four": {
      text: "次の部分です：レを3回、次にミ、そしてソを2回。指は2・2・2、そして3・5・5です。",
    },
    "whole-phrase": {
      text: "フレーズ全体を、止まらずに弾きましょう：ミ・レ・ド・レ・ミ・ミ・ミ、レ・レ・レ、ミ・ソ・ソ。",
    },
    recap: {
      text: "よくできました。本物の曲の前半を弾きました。",
      points: ["このメロディーは、となりの音、同じ音のくり返し、1回の1つとばしでできています。", "メロディーは小さく分けて覚えてから、つなげます。", "指番号が、手の行き先を教えてくれます。"],
    },
  },
};

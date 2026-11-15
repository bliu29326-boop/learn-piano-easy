/** *Twinkle's first phrase* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhraseJa: Translation<TwinkleFirstPhraseTexts> = {
  title: "「きらきら星」のはじめのフレーズ",
  steps: {
    "phrase-demo": {
      text: "「きらきら星」のはじめのフレーズを聴きましょう。その中に、ドのポジションの外にある音が1つあります。",
    },
    "one-key-past": {
      text: "その音はラです。ソのすぐ右の白鍵です。手はドのポジションのままです。小指を右へ鍵盤1つ分広げて、ラを弾きます。",
    },
    "find-a": {
      text: "右手をドのポジションに置きましょう。小指をソの先まで広げて、ラを弾きます。",
    },
    "leap-quiz": {
      text: "メロディーはドで始まり、そこから大きくとび上がります。どの音までとぶ？",
      answers: ["レ", "ミ", "ソ"],
    },
    "climb-up": {
      text: "前半を弾きましょう：ドを2回、ソを2回、ラを2回、そしてソ。2つのドは親指で、ほかは小指で弾きます。小指はラまで広げて、また戻ります。",
    },
    "walk-down": {
      text: "後半は、となりの音へ下りていきます：ファ・ミ・レ・ドを、それぞれ2回ずつ。指は4・3・2・1です。",
    },
    "whole-phrase": {
      text: "前半と後半をつなげましょう。フレーズ全体を、止まらずに弾きます。",
    },
    recap: {
      text: "よくできました。はじめて、5本の指の外まで手をのばしました。",
      points: ["メロディーは、1つの音だけドのポジションを出ることがあります。", "小指をソからラへ広げます。", "ドからソのように、メロディーが大きくとぶこともあります。"],
    },
  },
};

/** *Tempo and the metronome* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TempoAndTheMetronomeTexts } from "./tempo-and-the-metronome.en";

export const tempoAndTheMetronomeJa: Translation<TempoAndTheMetronomeTexts> = {
  title: "テンポとメトロノーム",
  steps: {
    "slow-demo": {
      text: "見て、聴いてみましょう。このメロディーは、真ん中のドからソまで上がって、また下りてきます。ゆっくりです。",
    },
    "fast-demo": {
      text: "もう一度、同じメロディーです。音は同じですが、拍が速くなっています。",
    },
    "what-tempo-is": {
      text: "テンポは、拍の速さのことです。1分間に何拍あるかで表し、BPMと書きます。60BPMなら拍は1秒に1回、120BPMならその2倍の速さで来ます。",
    },
    "faster-tempo-quiz": {
      text: "速いのはどちらのテンポですか？",
      answers: ["1分間に60拍", "1分間に120拍"],
    },
    "slow-first": {
      text: "メトロノームは、選んだテンポで拍をクリック音で刻みます。新しい曲は、まずゆっくり練習しましょう。楽に弾けるようになったら、メトロノームを少し速くします。",
    },
    "slow-first-quiz": {
      text: "新しい曲がむずかしく感じます。どう練習しますか？",
      answers: ["まずゆっくり、それから少し速く", "はじめからもとの速さで"],
    },
    "slow-tap": {
      text: "メトロノームが60BPMで鳴ります。「スタート」を押して、クリック音のたびに好きな鍵盤を弾きましょう。",
    },
    "faster-tap": {
      text: "メトロノームが104BPMで鳴ります。「スタート」を押して、クリック音のたびに好きな鍵盤を1回弾きましょう。",
    },
    recap: {
      text: "よくできました！2つのテンポで拍を保てるようになりました。次は「喜びの歌」です。はじめはゆっくり弾きましょう。",
      points: ["テンポは拍の速さで、1分間の拍の数で表します。", "メトロノームは、選んだテンポで拍を刻みます。", "まずゆっくり、それから少し速く練習します。"],
    },
  },
};

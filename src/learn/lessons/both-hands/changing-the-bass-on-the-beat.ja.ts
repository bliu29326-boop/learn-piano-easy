/** *Changing the bass on the beat* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { ChangingTheBassOnTheBeatTexts } from "./changing-the-bass-on-the-beat.en";

export const changingTheBassOnTheBeatJa: Translation<ChangingTheBassOnTheBeatTexts> = {
  title: "拍に合わせて低音を変える",
  steps: {
    "bass-changes": {
      text: "左手を聴いてみましょう。5度を1小節ずっと押さえてから、新しい5度に移ります。右手は止まりません。",
    },
    "beat-one": {
      text: "低音は1拍目、つまり新しい小節の最初の拍で変わります。その拍の右手の音と一緒に弾きます。",
    },
    "when-it-changes": {
      text: "左手は何拍目で新しい5度に移りますか？",
      answers: ["新しい小節の1拍目", "4拍目で、少し早めに", "右手が休むとき"],
    },
    "count-the-bars": {
      text: "2小節のあいだ、1拍ごとに鍵盤を弾きながら「1、2、3、4」と数えましょう。どの小節も「1」で始まるのを感じてみましょう。",
    },
    "land-on-one": {
      text: "前の5度は4拍目まで押さえておきます。それから離して、ちょうど「1」で新しい5度に着きましょう。",
    },
    "c-to-g": {
      text: "左手だけで弾きます。真ん中のドの下のドで5度を弾き、その下のソの5度に移って、またドに戻りましょう。",
    },
    "change-under-tune": {
      text: "今度は両手です。5度はド、その下のソ、そしてまたドの順です。どの小節も、新しい5度とメロディーの音を一緒に弾いて始まります。",
    },
    "four-basses": {
      text: "4小節を聴いてみましょう。小節ごとに5度が変わります。ド、ファ、ソ、そしてまたドです。どの変わり目も「1」に来ます。",
    },
    "four-bars": {
      text: "弾いてみましょう。5度をド、その下のファとソ、そしてまたドの順に弾いて、4小節を弾きます。5度は各小節の最初の音と一緒に変えましょう。",
    },
    recap: {
      text: "よくできました！左手が拍に合わせて低音を変えられるようになりました。",
      points: [
        "低音は新しい小節の1拍目で変わります。",
        "新しい5度は右手の音と一緒に弾きます。",
        "前の5度は小節の終わりまで押さえてから移ります。",
      ],
    },
  },
};

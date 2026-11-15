/** *The bass clef* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TheBassClefTexts } from "./the-bass-clef.en";

export const theBassClefJa: Translation<TheBassClefTexts> = {
  title: "ヘ音記号",
  steps: {
    "low-notes-demo": {
      text: "よく見て、聴いていましょう。ピアノが、真ん中のドより下のド・レ・ミ・ファ・ソを弾きます。これが、左手のドのポジションの鍵盤です。",
    },
    "what-the-bass-clef-is": {
      text: "ト音記号は高い音を書き、おもに右手が読みます。ヘ音記号は低い音を書き、おもに左手が読みます。くるりと巻いた形の横に、点が2つついています。",
    },
    "low-notes-clef-quiz": {
      text: "低い音を書くのは、どちらの記号ですか？",
      answers: ["ト音記号", "ヘ音記号"],
    },
    "the-f-line": {
      text: "ヘ音記号の2つの点は、下から4本目の線をはさんで、その上と下にあります。この線がファで、真ん中のドのすぐ下のファです。ヘ音記号の「ヘ」は、日本の音名でファのことです。",
    },
    "f-line-quiz": {
      text: "ヘ音記号の2つの点がはさんでいるのは、どの線ですか？",
      answers: ["下から2本目の線", "下から4本目の線", "真ん中の線"],
    },
    "play-bass-f": {
      text: "第4線のファです。鍵盤で弾きましょう。左手のドのポジションでは、2の指がこの鍵盤にのっています。",
    },
    "neighbours-of-f": {
      text: "ファのすぐ上の間はソです。ファのすぐ下の間はミです。もう1つ下がると、真ん中の線にレがあります。",
    },
    "name-bass-notes": {
      text: "ヘ音記号の音符の名前を答えましょう。その音名のボタンを押します。第4線のファから、上か下へ数えます。",
    },
    recap: {
      text: "よくできました。ヘ音記号で、はじめての音符が読めました。",
      points: [
        "ヘ音記号は低い音を書き、おもに左手が読みます。",
        "2つの点は第4線をはさみ、その線がファです。",
        "ファから上か下へ数えると、となりの音がわかります。",
      ],
    },
  },
};

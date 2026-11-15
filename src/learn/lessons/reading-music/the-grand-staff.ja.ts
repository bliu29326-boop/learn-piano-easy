/** *The grand staff* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TheGrandStaffTexts } from "./the-grand-staff.en";

export const theGrandStaffJa: Translation<TheGrandStaffTexts> = {
  title: "大譜表",
  steps: {
    "climb-demo": {
      text: "聴きましょう。ピアノが、低いドから真ん中のドを通って、高いドまで上がっていきます。知っている2つの五線を、どちらも通ります。",
    },
    "two-staves": {
      text: "ピアノの楽譜は、2段の五線を重ねて、左側を波かっこでつなぎます。この2段をあわせて「大譜表」といいます。上がト音記号の五線、下がヘ音記号の五線です。",
    },
    "which-hand-quiz": {
      text: "上のト音記号の五線を、ふつう読むのはどちらの手ですか？",
      answers: ["右手", "左手"],
    },
    "middle-c-between": {
      text: "真ん中のドは、2段の五線の間の短い加線にあります。どちらの五線にも属していて、どちらに書かれても同じ鍵盤です。",
    },
    "middle-c-quiz": {
      text: "大譜表で、真ん中のドはどこにありますか？",
      answers: ["ト音記号の五線のいちばん上の線", "2段の五線の間の加線", "ヘ音記号の五線のいちばん下の線"],
    },
    "treble-names": {
      text: "ト音記号の五線です。音符の名前を答えましょう。",
    },
    "bass-names": {
      text: "次は、ヘ音記号の五線です。音符の名前を答えましょう。",
    },
    "low-c-staff-quiz": {
      text: "低いドは左手で弾きます。どちらの五線にありますか？",
      answers: ["ト音記号の五線", "ヘ音記号の五線"],
    },
    "bass-play": {
      text: "ヘ音記号の五線の音符を1つずつ読んで、左手で弾きましょう。",
    },
    "treble-play": {
      text: "ト音記号の五線の音符を1つずつ読んで、右手で弾きましょう。",
    },
    recap: {
      text: "よくできました。大譜表が読めるようになりました。",
      points: [
        "大譜表は、ト音記号の五線とヘ音記号の五線を波かっこでつないだものです。",
        "右手はおもにト音記号の五線を、左手はヘ音記号の五線を読みます。",
        "真ん中のドは2段の間の加線にあり、どちらの五線にも属します。",
      ],
    },
  },
};

/** *The staff* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { TheStaffTexts } from "./the-staff.en";

export const theStaffJa: Translation<TheStaffTexts> = {
  title: "五線",
  steps: {
    "five-lines": {
      text: "音楽は五線に書きます。五線は、上下に並んだ5本の線です。線は下から数えるので、いちばん下の線が第1線です。",
    },
    "lines-quiz": {
      text: "五線には線が何本ありますか？",
      answers: ["4本", "5本", "6本"],
    },
    "four-spaces": {
      text: "5本の線のあいだには、4つのすき間があります。これを「間（かん）」といいます。間も下から数えます。",
    },
    "spaces-quiz": {
      text: "五線の線と線のあいだに、間（かん）はいくつありますか？",
      answers: ["3つ", "4つ", "5つ"],
    },
    "line-or-space": {
      text: "音符は、線の上か間にあります。線の上の音符は、線が音符の真ん中を通ります。間の音符は、2本の線のすき間をうめます。",
    },
    "line-or-space-quiz": {
      text: "線が音符の真ん中を通っています。この音符はどこにありますか？",
      answers: ["線の上", "間"],
    },
    "higher-is-higher": {
      text: "五線の上のほうにある音符ほど、高い音がします。線から次の間へ1つ上がると、右どなりの白鍵になります。",
    },
    "climb-demo": {
      text: "よく見て、聴いていましょう。ピアノが、いちばん下の線からいちばん上の線まで、線と間を1つずつ上がっていきます。音が少しずつ高くなります。",
    },
    "higher-or-lower-listen": {
      text: "2つの音が聞こえます。2つ目の音は、1つ目より高い、低い、同じのどれですか？高い音なら、五線の上のほうに書かれます。",
    },
    "top-or-bottom-quiz": {
      text: "ひとつの音符はいちばん上の線に、もうひとつはいちばん下の線にあります。高い音がするのはどちらですか？",
      answers: ["いちばん下の線の音符", "いちばん上の線の音符", "同じ高さに聞こえる"],
    },
    "first-line-quiz": {
      text: "五線の第1線はどれですか？",
      answers: ["いちばん下の線", "真ん中の線", "いちばん上の線"],
    },
    recap: {
      text: "よくできました。五線のしくみがわかりました。",
      points: ["五線には5本の線と4つの間があり、下から数えます。", "音符は、線の上か間にあります。", "五線の上のほうにある音符ほど、高い音がします。"],
    },
  },
};

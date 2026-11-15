/** *Flats* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { FlatsTexts } from "./flats.en";

export const flatsJa: Translation<FlatsTexts> = {
  title: "フラット",
  steps: {
    "flat-sound": {
      text: "シを聴いて、次にそのすぐ左の黒鍵を聴きましょう。それからミと、ミのすぐ左の黒鍵です。",
    },
    "what-a-flat-is": {
      text: "この記号♭がフラットです。フラットは音を半音下げます。すぐ左どなりの鍵盤を弾きます。",
    },
    "find-b-flat": {
      text: "シのフラットを見つけましょう。シ♭と書きます。シから、左へ鍵盤1つ移ります。",
    },
    "find-e-flat": {
      text: "次は、ミのフラット、ミ♭を見つけましょう。ミのすぐ左の黒鍵です。",
    },
    "which-is-e-flat": {
      text: "ミ♭はどの鍵盤？",
      answers: ["白鍵のレ", "ミの右の黒鍵", "ミの左の黒鍵"],
    },
    "hear-flats": {
      text: "フラットの音は、少し低く聞こえます。2つの音を聴きましょう。2つ目の音は高い？低い？それとも同じ？",
    },
    "two-names": {
      text: "ドのシャープは、ドを右の黒鍵に上げます。レのフラットは、レを左の黒鍵に下げます。これは同じ鍵盤なので、名前が2つあります。",
    },
    "other-name-quiz": {
      text: "ド♯と同じ黒鍵になるフラットがあります。どのフラット？",
      answers: ["レ♭", "シ♭", "ミ♭"],
    },
    "half-steps-down": {
      text: "弾いてみましょう。シ・シ♭・ラ、次にミ・ミ♭・レと弾きます。どの音も、前の音より半音低い音です。",
    },
    recap: {
      text: "よくできました。フラットがわかりました。",
      points: [
        "フラット♭は音を半音下げます。",
        "シ♭はシの左の黒鍵、ミ♭はミの左の黒鍵です。",
        "1つの黒鍵に、名前が2つあることもあります。ド♯はレ♭でもあります。",
      ],
    },
  },
};

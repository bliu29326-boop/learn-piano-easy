/** The boss of *Scales and keys* in Japanese. */
import type { Translation } from "../../../i18n/translation";
import type { JingleBellsTexts } from "./jingle-bells.en";

export const jingleBellsJa: Translation<JingleBellsTexts> = {
  title: "ボス：「ジングルベル」を両手で",
  steps: {
    intro: {
      text: "「ジングルベル」はハ長調なので、調号はありません。メロディーは、ハ長調の音階を上がったり下がったりします。左手は各小節で、低い音1つか5度を押さえます。",
    },
    song: {
      text: "両手で「ジングルベル」を、もとの速さで弾きましょう。右手はドのポジションのままです。左手の低い音は、1小節ずっと押さえておきます。",
    },
  },
};

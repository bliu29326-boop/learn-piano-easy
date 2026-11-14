/** The guide of *Lacrimosa* in Russian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Моцарт умер в 1791 году, когда работал над своим «Реквиемом». " +
    "Его ученик Франц Ксавер Зюсмайер закончил сочинение, а издательство Breitkopf & Härtel напечатало партитуру в 1800 году. " +
    "Фильм «Амадей» рассказывает, как Моцарт писал этот реквием.",
  funFact: "Черновик Lacrimosa, написанный рукой самого Моцарта, обрывается после первых восьми тактов.",
  versions: {
    common: {},
    rare: {},
    epic: {},
    legendary: {},
  },
};

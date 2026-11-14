/** The guide of *Lacrimosa* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart murió en 1791 mientras escribía su Réquiem. " +
    "Su alumno Franz Xaver Süssmayr lo terminó, y Breitkopf & Härtel imprimió la partitura en 1800. " +
    "La película Amadeus cuenta cómo Mozart escribió este Réquiem.",
  funFact: "El borrador del propio Mozart para el Lacrimosa se interrumpe después de sus primeros ocho compases.",
  versions: {
    common: {},
    rare: {},
    epic: {},
    legendary: {},
  },
};

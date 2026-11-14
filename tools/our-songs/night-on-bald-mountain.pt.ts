/** The guide of *Night on Bald Mountain* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky terminou seu retrato musical de um sabá de bruxas no Monte Calvo na noite de São João, 23 de junho de 1867. " +
    "Cinco anos depois da morte dele, Rimsky-Korsakov publicou seu próprio arranjo da obra, em 1886. " +
    "O filme Fantasia (1940), de Walt Disney, a tornou famosa, no arranjo de Leopold Stokowski baseado na versão de Rimsky-Korsakov.",
  funFact: "Junto com Sadko, de Rimsky-Korsakov, também de 1867, é um dos primeiros poemas sinfônicos de um compositor russo.",
  versions: {
    common: {
      tricky: {
        5: "A mão subiu. O dedo 2 toca o Lá, e o dedo 3 toca o Si bemol.",
      },
    },
    rare: {
      tricky: {
        5: "A mão subiu durante a pausa. O dedo 2 toca o Lá, e o dedo 3 toca o Si bemol.",
      },
    },
  },
};

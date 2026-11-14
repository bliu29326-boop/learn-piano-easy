/** The guide of *Piano Concerto No. 21: Andante* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart concluiu este concerto em 9 de março de 1785, quatro semanas depois do anterior. " +
    "O movimento lento, o Andante, canta uma melodia longa sobre acordes suaves e repetidos. " +
    "O filme Elvira Madigan (1967) usa essa música, e hoje muita gente conhece o concerto por esse nome.",
  funFact: "Mozart terminou o concerto só quatro semanas depois do seu Concerto para Piano n.º 20.",
  versions: {
    common: {
      tips: [
        "Segure o primeiro Fá por sete tempos. O Dó curto vem logo antes da próxima nota longa.",
        "O dedo 4 segura o Dó agudo. Depois, os dedos 5, 4, 3 e 2 tocam quatro notas rápidas.",
        "Toque suave e ligado, como se cantarolasse uma canção de ninar.",
      ],
      tricky: {
        5: "O dedo 3 sobe de Sol para Si bemol. Depois, os dedos 5, 4 e 3 tocam Ré, Dó e Si bemol.",
      },
    },
    rare: {
      tricky: {
        5: "O dedo 3 sobe de Sol para Si bemol. Depois, os dedos 5, 4 e 3 tocam Ré, Dó e Si bemol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

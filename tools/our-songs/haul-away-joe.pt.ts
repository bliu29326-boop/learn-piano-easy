/** The guide of *Haul Away Joe* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe é uma canção de marinheiro curta, para puxar uma corda. " +
    "R. R. Terry a publicou em 1921 como canção para puxar a escota da vela de proa.",
  funFact: "Uma estrofe da edição de Terry fala do rei Luís da França, que perdeu a cabeça na Revolução.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos compassos 1 a 4, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8, onde o refrão desce até o Ré grave.",
        "Agora só a mão esquerda. Ela segura duas teclas e as troca no máximo duas vezes por compasso.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tricky: {
        2: "O dedo 5 toca o Dó três vezes. Depois o dedo 3 pega o Lá, e o dedo 2 espera sobre o Sol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave longa, e depois um acorde curto.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Cada meio compasso da mão esquerda tem uma nota longa e um acorde curto. Sinta o puxão: longo, curto.",
        "Os dedos 1 e 5 pressionam as sextas como uma nota só. Depois o dedo 5 fica na nota de cima.",
        "Termine com Ré e Fá juntos. Os dedos 1 e 3 pressionam os dois como uma nota só.",
      ],
      tricky: {
        5: "Abra os dedos 1 e 5 sobre Fá e Ré para a sexta. Depois o dedo 5 toca o Ré de novo, sozinho.",
      },
    },
    epic: {},
    legendary: {},
  },
};

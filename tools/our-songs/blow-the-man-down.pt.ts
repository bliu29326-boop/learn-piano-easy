/** The guide of *Blow the Man Down* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down é uma canção de marinheiro para puxar as adriças, cantada enquanto a tripulação içava uma vela pesada pelo mastro. " +
    "Nossa melodia segue a edição impressa de R. R. Terry, de 1921.",
  funFact: "Um jornal de Syracuse, em Nova York, citou um verso da canção em 1867. Marinheiros a tinham cantado num navio a vapor de Nova York a Glasgow.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 7 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 8 a 17 só com a mão direita. A mão se desloca duas vezes, sempre depois de uma nota longa.",
        "Agora só a mão esquerda. Ela segura uma ou duas notas por um compasso inteiro.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Sol. O dedo 2 pega o Si, o dedo 4 pega o Ré e o dedo 5 pega o Mi.",
        "Segure o primeiro Ré por três tempos, depois toque o Mi por um. O Mi curto puxa como uma corda.",
        "Os marinheiros cantavam isto enquanto puxavam uma vela. Dê um pouco mais de peso à primeira nota de cada compasso, como um puxão.",
      ],
      tricky: {
        8: "Depois do Mi longo, a mão desce. O dedo 4 cai no Dó, e o polegar espera sobre o Fá sustenido.",
        13: "O dedo 4 sobe do Lá até o Mi, e o dedo 5 toca o Sol agudo.",
        14: "Depois do Sol agudo, o dedo 5 desce até o Ré. Ele toca o Ré três vezes: curto, longo e depois médio.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave longa, depois um acorde curto.",
        "Toque só a mão direita nos 7 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 8 a 17, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tricky: {
        8: "Depois do acorde de Dó e Mi, a mão desce. O dedo 4 cai no Dó. A mão esquerda toca Ré, depois Lá e Ré juntos.",
        13: "O dedo 4 sobe do Lá até o Mi, e o dedo 5 toca o Sol agudo. A mão esquerda toca Dó, depois Sol e Dó juntos.",
        14: "O dedo 5 desce do Sol agudo até o Ré e toca o Ré três vezes. Mantenha o pulso solto.",
      },
    },
    epic: {},
    legendary: {},
  },
};

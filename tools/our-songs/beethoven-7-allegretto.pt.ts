/** The guide of *Symphony No. 7: Allegretto* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escreveu sua Sétima Sinfonia em 1811 e 1812. " +
    "Na estreia em Viena, em dezembro de 1813, o público exigiu ouvir o Allegretto de novo. " +
    "O filme The King's Speech (2010) usa a peça como fundo do discurso do rei no rádio, em tempo de guerra.",
  funFact: "A melodia soa primeiro no grave, nas violas e nos violoncelos.",
  versions: {
    common: {
      tips: [
        "Diga “longa, curta, curta” enquanto toca o primeiro compasso. Esse ritmo é a peça inteira.",
        "Sua mão nunca se move. Os dedos 1, 2 e 3 tocam Mi, Fá sustenido e Sol.",
        "Comece bem suave, e deixe cada compasso soar um pouco mais forte.",
      ],
    },
    rare: {
      tips: [
        "Aqui a mão esquerda desce um pouco. O dedo 5 vai do Sol sustenido para o Sol.",
        "Mantenha o pedal pisado durante cada compasso inteiro, e troque-o bem na barra de compasso.",
        "Agora a mão esquerda toca em cada tempo. Mantenha tudo regular, como uma marcha lenta.",
      ],
      tricky: {
        15: "A mão esquerda balança entre Sol e Ré com os dedos 5 e 2.",
        16: "Toque Mi e Sol juntos com os dedos 1 e 3. Depois levante a mão direita na pausa.",
      },
    },
    epic: {
      tips: [
        "Toque os acordes quebrados suaves, para o Mi repetido cantar por cima.",
        "Troque o pedal no último tempo, onde o acorde vira Ré maior.",
        "Troque o pedal três vezes neste compasso, uma para cada acorde novo.",
      ],
    },
    legendary: {},
  },
};

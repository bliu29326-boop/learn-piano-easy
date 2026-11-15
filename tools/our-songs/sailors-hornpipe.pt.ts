/** The guide of *The Sailor's Hornpipe* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe é uma melodia de dança animada, muito ligada à Marinha Real britânica. " +
    "As primeiras coletâneas a imprimiram como The College Hornpipe.",
  funFact: "Os desenhos animados do Popeye, de Max Fleischer, começavam com este hornpipe, por isso muita gente o conhece como a música do Popeye.",
  versions: {
    common: {
      tricky: {
        4: "Depois do Dó, o polegar passa por baixo até o Si. Em seguida os dedos 2 e 4 sobem até Ré e Sol.",
      },
    },
    rare: {
      tricky: {
        4: "Depois do Dó, o polegar passa por baixo até o Si. Em seguida os dedos 2 e 4 sobem até Ré e Sol.",
      },
    },
    epic: {
      tricky: {
        17: "Toque o último acorde com as duas mãos ao mesmo tempo. Deixe o pedal segurá-lo até o fim.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: uma oitava no tempo, depois um acorde, cada um com uma pausa curta para saltar.",
        "Toque só os arpejos da mão esquerda. O polegar passa por baixo, e o dedo 3 cruza por cima.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Use a pausa curta depois de cada oitava e de cada acorde para saltar até o próximo.",
        "Deixe os arpejos rolarem suaves por baixo das passagens rápidas da mão direita.",
        "Cada acorde termina um pouco antes. Use esse breve silêncio para levar a mão inteira até o próximo acorde.",
      ],
    },
  },
};

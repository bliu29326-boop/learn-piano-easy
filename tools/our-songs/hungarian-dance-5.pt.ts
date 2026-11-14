/** The guide of *Hungarian Dance No. 5* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms escreveu suas Danças Húngaras para piano a quatro mãos, e a primeira série foi publicada em 1869. " +
    "A Dança n.º 5 virou a mais famosa de todas. " +
    "No filme The Great Dictator (1940), Charlie Chaplin faz a barba de um cliente no ritmo desta música.",
  funFact: "Brahms baseou esta dança numa csárdás de Béla Kéler, mas achava que era uma melodia folclórica.",
  versions: {
    common: {
      tricky: {
        2: "O dedo 5 se estica até o Dó, e depois o dedo 3 volta para o Lá.",
      },
    },
    rare: {
      tricky: {
        5: "Agora a mão direita toca uma oitava acima. Seu polegar cai no Mi agudo.",
      },
    },
    epic: {
      tricky: {
        7: "Os dedos 1 e 4 tocam Sol sustenido e Mi sustenido. Depois a mão sobe duas vezes, depressa.",
        15: "São as mesmas sextas do compasso 7. Mantenha o polegar perto do Lá e do Si.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só as oitavas da mão direita, com o polegar e o dedo mínimo numa só posição.",
        "Toque só os desenhos rápidos da mão direita nos compassos 5 a 7, devagar.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tricky: {
        8: "Abra a mão sobre Fá sustenido, Lá, Dó sustenido e Fá sustenido, com os dedos 1, 2, 3 e 5.",
      },
    },
  },
};

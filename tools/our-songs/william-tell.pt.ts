/** The guide of *William Tell Overture* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "A ópera Guilherme Tell estreou em 1829 e foi a última das 39 óperas de Rossini. " +
    "A abertura termina com um galope rápido, muitas vezes chamado de Marcha dos Soldados Suíços. " +
    "Esse final virou o tema de The Lone Ranger no rádio, na televisão e no cinema.",
  funFact:
    "Alguns escritores já definiram um intelectual como um homem capaz de ouvir a abertura de Guilherme Tell sem pensar no Lone Ranger.",
  versions: {
    rare: {
      practice: [
        "Toque os 5 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Ela toca um acorde em cada meio compasso.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal, como um cavalo a galope.",
      ],
    },
    epic: {
      tricky: {
        17: "Use a pausa depois do Lá longo para subir o polegar até o Mi agudo.",
      },
    },
    legendary: {
      tricky: {
        13: "As oitavas descem do Fá sustenido ao Si. Mantenha a mão aberta, e deixe-a quicar em cada uma.",
      },
    },
  },
};

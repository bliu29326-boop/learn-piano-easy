/** The guide of *Swan Lake* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaikovsky escreveu a música do balé O Lago dos Cisnes em 1875 e 1876, e o Balé Bolshoi fez a estreia em 1877. " +
    "Este tema é a melodia do oboé no segundo ato. " +
    "O filme Black Swan (2010) tem cenas de O Lago dos Cisnes.",
  funFact: "Vladimir Begichev encomendou a partitura em maio de 1875, e Tchaikovsky recebeu 800 rublos por ela.",
  versions: {
    common: {
      tips: [
        "Segure o primeiro Mi enquanto conta até quatro. Depois, quatro notas curtas sobem do Lá ao Ré.",
        "É uma melodia triste e orgulhosa. Deixe cada nota longa e aguda cantar.",
        "Neste compasso, o dedo 2 toca o Lá, para o polegar alcançar o Fá mais abaixo.",
      ],
      tricky: {
        3: "Aqui, toque o Lá com o dedo 2. Depois o polegar desce até o Fá, e o dedo 3 pega o Dó.",
        7: "Como no compasso 3, o dedo 2 toca o Lá, e o polegar desce até o Fá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota grave vem no tempo, e um acorde de duas notas responde.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
    },
  },
};

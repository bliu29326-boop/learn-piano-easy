/** The guide of *Ave Maria* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert musicou esta canção em 1825, a partir de uma tradução alemã do poema A Dama do Lago, de Walter Scott. " +
    "É o terceiro canto de Ellen e saiu em 1826, como parte do Op. 52 de Schubert. " +
    "O filme Fantasia (1940), de Walt Disney, usa a canção na parte final, logo depois de Uma Noite no Monte Calvo.",
  funFact:
    "Em Fantasia, os sinos do fim de Uma Noite no Monte Calvo parecem virar sinos de igreja que levam à Ave Maria.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 7 só com a mão direita. A mão fica no mesmo lugar.",
        "Agora só a mão esquerda. Ela segura cada nota do baixo por meio compasso ou mais.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Cante as notas longas na cabeça. A melodia é uma oração, então toque suave.",
        "O polegar fica no Lá e o dedo 5 no Mi. Cada nota da mão direita está debaixo de um dedo.",
        "As quatro últimas notas têm a mesma duração. Conte-as “um, dois, três, quatro”.",
      ],
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. Uma nota do baixo vem primeiro, e um acorde de duas notas responde.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
    },
  },
};

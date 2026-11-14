/** The guide of *Can-can* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach escreveu o Galop infernal para a festa desenfreada dos deuses que fecha a opereta Orfeu no Inferno, estreada em 1858. " +
    "Nos anos 1890, os cabarés parisienses Moulin Rouge e Folies Bergère passaram a usar a peça para acompanhar o cancã. " +
    "O filme Moulin Rouge!, de 2001, usa a peça na trilha sonora.",
  funFact: "A melodia tem as mesmas notas principais de duas canções bem mais lentas do mesmo ato, mas não se parece nada com elas.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 7 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 8 a 16 só com a mão direita. A mão fica no mesmo lugar.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro ou por meio compasso.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Segure o primeiro Sol por quatro tempos. As dançarinas esperam a música começar.",
        "O dedo 5 toca os dois primeiros Rés. Depois o dedo 4 pega o Ré, para o dedo 5 alcançar o Mi.",
        "Toque as semínimas curtas e saltitantes, como dançarinas levantando as pernas.",
      ],
      tricky: {
        4: "No Ré, troque do dedo 5 para o dedo 4. Depois o dedo 5 alcança o Mi, e o dedo 2 cai no Si.",
        5: "O dedo 3 sai do Dó, e o dedo 2 toca o Lá duas vezes. Segure cada Lá por dois tempos.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota do baixo vem no tempo, e um acorde de duas notas responde.",
        "Toque só a mão direita nos 7 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 7 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal, como num salão de baile à meia-noite.",
      ],
      tricky: {
        4: "No Ré, troque do dedo 5 para o dedo 4. Depois o dedo 5 alcança o Mi, e o dedo 2 cai no Si.",
      },
    },
  },
};

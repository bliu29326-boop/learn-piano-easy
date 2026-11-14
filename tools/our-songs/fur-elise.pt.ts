/** The guide of *Für Elise* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escreveu esta pequena peça para piano em 1810, e o manuscrito dedica a peça a Elise. " +
    "Ninguém sabe ao certo quem era Elise. " +
    "Ludwig Nohl encontrou a peça e a publicou em 1867, quarenta anos depois da morte de Beethoven.",
  funFact: "Uma teoria diz que Nohl leu o nome errado, e que a peça era, na verdade, para Therese Malfatti, com quem Beethoven queria se casar.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita a partir do compasso 5, onde a mão desce até o Dó central.",
        "Agora só a mão esquerda. Ela mantém duas posições, uma por compasso.",
        "Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Alterne os dedos 5 e 4 entre Mi e Ré sustenido, como um balanço suave.",
        "Aqui a mão esquerda espera. Toque a melodia suave, como quem conta um segredo.",
        "Levante a mão na pausa depois do Lá, e pouse o polegar no Dó central.",
      ],
      tricky: {
        5: "Depois da pausa, o seu polegar pousa no Dó central. Olhe para baixo antes de tocar.",
        7: "O seu polegar pega a tecla preta Sol sustenido, assim a mão alcança o Dó mais acima.",
        13: "A mão desce de novo até o Dó central. Use a pausa do compasso 12 para chegar até ele.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, devagar.",
        "Toque só a mão esquerda. Cada acorde sobe a partir do baixo, uma nota por tempo.",
        "Junte as mãos nos compassos 4 a 8, onde elas se revezam.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda sobe, e depois a mão direita continua subindo. Deve soar como uma mão só.",
        "Polegar no Mi, dedo mínimo no Mi agudo. Abra a mão sobre a oitava inteira.",
        "O Sol sustenido no baixo deixa o acorde brilhante. Ele puxa o ouvido de volta para casa, no Lá.",
      ],
      tricky: {
        5: "Use a pausa depois do Lá para levar o polegar direito até o Dó central.",
        6: "A mão esquerda se abre bem: o dedo 2 toca o Si, e o polegar alcança o Sol sustenido mais acima.",
        14: "A mesma abertura do compasso 6: o dedo 2 toca o Si, e o polegar esquerdo alcança o Sol sustenido mais acima.",
      },
    },
    legendary: {
      tricky: {
        20: "Tire a mão do Dó agudo, e depois pegue Lá, Dó, Mi e Lá com os dedos 1, 2, 3 e 5.",
        28: "O acorde de quatro notas volta. Primeiro tire a mão do Dó agudo, depois pouse sobre a oitava inteira.",
      },
    },
  },
};

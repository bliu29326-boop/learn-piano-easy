/** The guide of *Drunken Sailor* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor é uma canção de marinheiro que as tripulações cantavam enquanto puxavam cordas ou giravam o cabrestante. " +
    "Ninguém sabe quem a escreveu, e a melodia está no modo dórico.",
  funFact: "O primeiro registro escrito desta canção de marinheiro vem de uma viagem baleeira de 1839, que partiu de New London, em Connecticut.",
  versions: {
    common: {
      tips: [
        "Cada metade do compasso tem uma nota longa e duas curtas. Marque o ritmo como um marinheiro batendo o pé no convés.",
        "O dedo 5 toca o Lá, e depois o polegar se estica para baixo até o Ré. A mão fica onde está.",
        "Toque o último Lá do compasso 5 com o dedo 2. Assim os dedos 3, 4 e 5 ficam prontos para Si, Dó e Ré.",
      ],
      tricky: {
        3: "O dedo 4 toca o Sol seis vezes: longa, curta, curta, longa, curta, curta. Toque leve as notas curtas.",
        7: "O dedo 5 desce do Ré para o Dó. Depois os dedos 4, 3 e 2 descem para Lá, Sol e Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, e depois duas notas no tempo seguinte.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tricky: {
        3: "O dedo 4 toca o Sol seis vezes, enquanto a mão esquerda toca Dó e depois Sol. Mantenha o ritmo regular nas duas mãos.",
        7: "Depois do Ré longo, o dedo 5 desce para o Dó. A mão esquerda toca Dó, depois Fá e Lá, e depois Dó e Sol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

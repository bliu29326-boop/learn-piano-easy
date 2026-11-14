/** The guide of *Eine kleine Nachtmusik* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart terminou esta serenata para cordas em Viena, em 1787. " +
    "Ela só foi publicada em 1827, mais de trinta anos depois da morte dele. " +
    "No filme Amadeus (1984), o velho Salieri toca a peça, e um padre reconhece a melodia na hora.",
  funFact: "O título quer dizer “uma pequena serenata”, e o próprio Mozart a anotou na lista das suas obras.",
  versions: {
    common: {
      tips: [
        "Polegar no Ré, dedo 2 no Sol, dedo 4 no Si e dedo 5 no Ré agudo.",
        "Toque o Sol curto e brilhante, como se as cordas o soltassem num estalo.",
        "Aproveite a pausa depois do Ré agudo para levar os dedos 2, 3 e 5 até Fá sustenido, Lá e Dó.",
      ],
      tricky: {
        5: "Sua mão mudou de lugar na pausa. Agora o dedo 5 toca o Dó, e o dedo 3 toca o Lá.",
        7: "Desça por Dó, Lá e Fá sustenido com os dedos 5, 3 e 2, e depois volte para o Lá.",
      },
    },
    rare: {
      tricky: {
        5: "Mude a mão de lugar na pausa do compasso 4. O dedo 5 cai no Dó, e o dedo 3 no Lá.",
        7: "Desça por Dó, Lá e Fá sustenido com os dedos 5, 3 e 2, e depois volte para o Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
    },
    legendary: {
      tricky: {
        2: "Solte a oitava de Sol, e depois salte para baixo até a oitava de Ré. Mantenha a mão aberta.",
        3: "Quatro oitavas seguidas: Sol, Ré, Sol e Si. Levante um pouco a mão depois de cada uma.",
      },
    },
  },
};

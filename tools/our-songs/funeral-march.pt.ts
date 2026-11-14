/** The guide of *Funeral March* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta marcha fúnebre é o terceiro movimento da Sonata para Piano n.º 2 de Chopin, publicada em 1840. " +
    "Ela foi tocada no próprio funeral de Chopin, e também no funeral de Estado de John F. Kennedy. " +
    "Filmes e desenhos animados costumam citar o começo dela numa cena de funeral.",
  funFact: "Muitos estudiosos datam a marcha de 1837, dois anos antes de Chopin terminar o resto da sonata.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8. Enfim a melodia sai do Ré.",
        "Agora só a mão esquerda. Ela balança entre Ré e Si bemol, como um sino lento.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tricky: {
        7: "Segure o Mi por três tempos e depois toque o Ré por um. Segure o Ré por três tempos, e por último o polegar toca o Dó sustenido.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela toca um acorde em cada tempo, como um sino que dobra.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
    },
    epic: {
      tricky: {
        22: "O dedo 4 pega o Dó da sexta, assim o dedo 5 fica livre para subir até o Mi bemol.",
      },
    },
    legendary: {
      tricky: {
        22: "Levante a mão na pausa curta e depois pouse em Mi bemol, Lá bemol, Dó e Mi bemol.",
      },
    },
  },
};

/** The guide of *Wedding March* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn escreveu esta marcha em 1842, como parte da sua música para Sonho de uma Noite de Verão, de Shakespeare. " +
    "Ela passou a ser uma das preferidas nos casamentos depois que Vitória, a Princesa Real, a escolheu para o próprio casamento, em 1858. " +
    "Os filmes ainda a tocam sempre que um casal sai do altar.",
  funFact:
    "O primeiro casamento conhecido a usá-la foi em Tiverton, na Inglaterra, em 2 de junho de 1847, tocada pelo organista Samuel Reay.",
  versions: {
    common: {
      tricky: {
        2: "Segure o Si com o dedo 4 enquanto conta até seis. Depois o polegar toca o Fá sustenido.",
        4: "A mão desceu. O dedo 4 toca o Fá, e o dedo 2 toca o Ré.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela toca um acorde em cada tempo, como uma banda marcial.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 9 a 16, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tricky: {
        1: "Segure o Dó agudo com o dedo 5. A mão esquerda toca Lá, Dó e Fá em cada tempo.",
        2: "A mão esquerda toca Lá e Ré. Segure o Si na mão direita enquanto o acorde se repete.",
        4: "O dedo 4 toca o Fá, e o dedo 2 toca o Ré. A mão esquerda fica em Si, Ré e Sol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

/** The guide of *Vltava* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana escreveu Vltava em 1874, o segundo dos seis poemas sinfônicos do seu ciclo Má vlast, “Minha Pátria”. " +
    "A música pinta o rio que atravessa Praga. " +
    "Terrence Malick a usa no seu filme The Tree of Life, de 2011.",
  funFact:
    "A famosa melodia de Vltava é uma adaptação de La Mantovana, uma melodia atribuída a Giuseppe Cenci, tenor italiano do Renascimento.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 5 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 9 só com a mão direita. Ali a melodia desce até o Mi.",
        "Agora só a mão esquerda. Ela mantém uma posição por um compasso inteiro, e nunca sai do lugar.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Si. Depois os dedos 2 a 5 sobem do Mi até o Lá.",
        "Solte o Lá um pouco antes. Aproveite esse instante para subir a mão uma tecla, com o dedo 4 no Si.",
        "Conte seis tempos por compasso: longa, curta, longa, curta. O rio segue fluindo e nunca tem pressa.",
      ],
      tricky: {
        3: "O dedo 4 toca o Si três vezes. A mão acabou de subir uma tecla, então o dedo 5 espera sobre o Dó.",
        8: "Toque os dois primeiros Fás sustenidos com o polegar, e o terceiro com o dedo 2. Assim o polegar fica livre para o Mi.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave longa, depois uma nota curta ou um acorde.",
        "Toque só a mão direita nos 9 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 9 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Cada meio compasso tem uma nota longa e uma curta, nas duas mãos. Sinta o balanço: longa, curta.",
        "Solte o Lá um pouco antes. Aproveite esse instante para subir a mão uma tecla, com o dedo 4 no Si.",
        "Termine com Mi e Sol juntos. Os dedos 1 e 3 pressionam as duas notas como uma só.",
      ],
      tricky: {
        3: "O dedo 4 toca o Si três vezes depois que a mão sobe. A mão esquerda toca um Mi longo, depois um Si curto.",
      },
    },
  },
};

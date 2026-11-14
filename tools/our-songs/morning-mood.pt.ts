/** The guide of *Morning Mood* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg escreveu Morning Mood em 1875 para a peça de teatro Peer Gynt, de Ibsen, e a publicou em 1888 na sua primeira Suíte Peer Gynt. " +
    "A melodia usa só cinco notas da escala e alterna entre a flauta e o oboé. " +
    "O filme Soylent Green, de 1973, usa a peça na cena em que um homem morre ouvindo a música que escolheu.",
  funFact:
    "A música pinta um nascer do sol no deserto do Marrocos, e não num fiorde norueguês, como a maioria das pessoas imagina.",
  versions: {
    common: {
      tips: [
        "Seu polegar direito fica no Dó central, e o dedo 5 começa no Sol. Os dedos 2 e 3 descansam no Ré e no Mi.",
        "Depois do primeiro Dó, quatro notas curtas balançam entre Ré e Mi. Conte-as por igual.",
        "Toque suave, como o sol nascendo devagar. Cada nota deve fluir para a próxima.",
      ],
      tricky: {
        5: "Aqui o dedo 2 toca o Mi, e o dedo 4 toca o Sol. Assim, o dedo 5 fica livre para o Lá agudo do compasso 6.",
        7: "O dedo 5 volta do Lá para o Sol. A mão esquerda passa para Ré e Sol no meio do compasso.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda: uma nota grave, e depois duas vezes um acorde de duas notas. A mão fica parada.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda toca em todos os tempos. Conte “um, dois, três” duas vezes em cada compasso.",
        "Toque suave os acordes da mão esquerda, para a melodia flutuar por cima como a luz da manhã.",
        "Termine com Sol e Si juntos. Os dedos 1 e 3 pressionam as duas notas como se fossem uma.",
      ],
      tricky: {
        7: "O dedo 5 volta do Mi para o Ré. A mão esquerda passa para Lá e Ré no meio do compasso.",
      },
    },
  },
};

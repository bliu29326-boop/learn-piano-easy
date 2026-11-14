/** The guide of *Adagietto* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O Adagietto é o quarto movimento, lento, da Quinta Sinfonia de Mahler, estreada em Colônia em 1904. " +
    "O filme Death in Venice (1971), de Luchino Visconti, deixou a peça famosa muito além das salas de concerto.",
  funFact: "Desde esse filme, ela se tornou a música mais conhecida que Mahler escreveu.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 5 a 8. O compasso 5 tem um Si, e os compassos 6 e 7 têm um Fá sustenido.",
        "Agora só a mão esquerda. Ela segura cada nota por meio compasso ou por um compasso inteiro.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tricky: {
        4: "Toque o primeiro Dó com o dedo 5 e repita-o com o dedo 4. Depois, o dedo 5 toca o Ré.",
        5: "O Si é uma tecla branca, e o Si bemol logo depois é uma tecla preta. Os dedos 3 e 2 tocam essas notas.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Uma nota grave cai no tempo, e um acorde responde a ela.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tricky: {
        5: "O Si é uma tecla branca, e o Si bemol logo depois é uma tecla preta. No começo, a mão esquerda toca só Sol e Ré.",
        7: "O polegar toca primeiro o Fá sustenido e, no fim, o Fá. A mão esquerda passa de Si bemol para Dó no meio do compasso.",
      },
    },
    epic: {
      tricky: {
        18: "O polegar desce de Dó para Lá na sexta. Depois, ele sobe até o Fá para as notas isoladas.",
      },
    },
    legendary: {
    },
  },
};

/** The guide of *Twinkle Twinkle Little Star* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta melodia nasceu como uma canção francesa, Ah! vous dirai-je, maman, impressa pela primeira vez em 1761. " +
    "Mozart escreveu doze variações sobre ela para piano. " +
    "Em 1806, Jane Taylor publicou seu poema sobre uma estrelinha, que mais tarde passou a ser cantado com esta melodia.",
  funFact: "A canção do alfabeto em inglês e Baa, Baa, Black Sheep são cantadas com esta mesma melodia.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Agora só a mão esquerda. Ela só se move entre Dó, Fá e Sol.",
        "Junte as mãos nos 4 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Coloque o polegar no Dó central. O dedo 4 toca o Sol, e o dedo mínimo toca o Lá.",
        "O último Dó dura o dobro das notas anteriores, então conte dois tempos.",
        "A parte do meio diz a mesma coisa duas vezes. Toque mais suave na segunda vez, como um eco.",
      ],
      tricky: {
        3: "Aqui sua mão desce uma tecla, então o dedo 4 sai do Sol e cai no Fá.",
        5: "Agora seu dedo mínimo toca o Sol. Desça a partir dele, um dedo por tecla: 5, 4, 3, 2.",
        11: "Este é o compasso 3 de novo. Deslize a mão uma tecla para baixo, para o dedo 4 cair no Fá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita, devagar, e sinta as duas notas rápidas do compasso 4.",
        "Toque só a mão esquerda. Ela segura cada acorde por dois ou quatro tempos.",
        "Junte as mãos na parte do meio.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tricky: {
        3: "Aqui o dedo 4 desce do Sol para o Fá. Deixe a mão inteira deslizar uma tecla para baixo junto com ele.",
        11: "Este é o compasso 3 de novo. Deslize a mão uma tecla para baixo, para o dedo 4 cair no Fá.",
        14: "O dedo 4 desliza do Sol para o Fá mais uma vez, enquanto a coda volta para casa.",
      },
    },
    epic: {
      tricky: {
        3: "O dedo 4 desliza do Sol para o Fá, enquanto o baixo Alberti continua rolando.",
        9: "Seu polegar desliza do Ré para o Dó. Depois os dedos 2 e 4 pegam a primeira terça.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só as semicolcheias da parte do meio com a mão direita, devagar.",
        "Toque só as oitavas da mão direita, e levante a mão entre elas.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Observe os saltos da mão esquerda, e deixe a mão direita achar os acordes pelo tato.",
        "Cada nota da melodia começa um grupo de quatro semicolcheias. Acentue-a um pouco, para a melodia continuar soando.",
        "Toque as oitavas curtas e brilhantes, como sinos.",
      ],
      tricky: {
        3: "O polegar desce do Lá para o Sol enquanto o dedo 2 mantém o Dó. Mova a mão como um bloco só.",
        14: "Este é o compasso 3 de novo. O polegar desce do Lá para o Sol, e o dedo 2 fica no Dó.",
      },
    },
  },
};

/** The guide of *Gymnopédie No. 1* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie terminou as suas três Gymnopédies em 1888, e a primeira saiu numa revista naquele mesmo verão. " +
    "Ela traz a indicação “Lent et douloureux”, que quer dizer lento e doloroso. " +
    "O filme The Royal Tenenbaums (2001) usa esta peça.",
  funFact: "Claude Debussy, amigo de Satie, mais tarde orquestrou a primeira e a terceira Gymnopédie.",
  versions: {
    common: {
      practice: [
        "Toque só a mão esquerda. Ela mantém uma quinta aberta em cada compasso.",
        "Toque só a mão direita nos compassos 5 a 8, e deixe a música esperar cada nota.",
        "Junte as mãos nos compassos 5 a 8, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque as quintas suaves e deixe-as soar. Elas balançam como um barco lento.",
        "Tire o polegar do Si um pouco antes. Assim ele desce até o Lá na hora certa.",
        "Vá um pouco mais devagar no final, e deixe o último Dó sumir.",
      ],
      tricky: {
        7: "O seu polegar desce do Si para o Lá. Depois os dedos 2 e 3 sobem até Si e Dó.",
      },
    },
    rare: {
      tips: [
        "Mantenha o pedal pisado durante cada compasso inteiro, e troque-o bem na barra de compasso.",
        "O polegar toca o Si e depois desce para o Lá. Deixe os outros dedos soltos.",
        "Deixe os dois últimos compassos soarem suaves, como o fim de uma canção de ninar.",
      ],
      tricky: {
        7: "O seu polegar desce do Si para o Lá. Mantenha a mão perto das teclas.",
      },
    },
    epic: {
      tricky: {
        6: "O seu polegar desce até o Dó sustenido enquanto o dedo 3 solta o Fá sustenido.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda. Na pausa curta, salte da oitava grave para cima, até o acorde.",
        "Toque os compassos 5 a 8 com as duas mãos, devagar.",
        "Toque só os acordes da mão direita, e levante a mão entre um e outro.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
    },
  },
};

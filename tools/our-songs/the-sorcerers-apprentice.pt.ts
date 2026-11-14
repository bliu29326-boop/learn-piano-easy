/** The guide of *The Sorcerer's Apprentice* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas terminou este poema sinfônico em 1897, e ele foi publicado no mesmo ano. " +
    "A peça segue o poema O Aprendiz de Feiticeiro (Der Zauberlehrling), que Goethe escreveu em 1797. " +
    "No filme Fantasia (1940), de Walt Disney, o Mickey Mouse faz o papel do aprendiz.",
  funFact: "Dukas deu à peça o subtítulo “scherzo segundo uma balada de Goethe”. É, de longe, a obra dele mais tocada e mais gravada.",
  versions: {
    common: {
      practice: [
        "Toque os 3 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 4 a 10 só com a mão direita. A mão fica num só lugar.",
        "Agora só a mão esquerda. Ela segura uma ou duas notas graves em cada compasso.",
        "Junte as mãos nos 10 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tricky: {
        7: "Depois do Sol sustenido com o dedo 2, o dedo 4 pega o Lá. A mão esquerda passa do Mi de volta para Lá e Mi.",
        10: "Como no compasso 7, o dedo 4 pega o Lá depois do Sol sustenido. Depois o dedo 5 alcança o Dó mais acima.",
      },
    },
    rare: {
      tricky: {
        7: "O dedo 4 pega o Lá depois do Sol sustenido. A mão esquerda desce do acorde de Mi de volta para o Lá.",
        10: "A melodia termina aqui. O dedo 4 pega o Lá, e a mão esquerda volta para o Lá.",
      },
    },
    legendary: {
      tricky: {
        6: "Os dedos da mão direita descem por Sol, Fá e Mi, cada nota curta. A mão esquerda salta para cima até os acordes dela.",
      },
    },
  },
};

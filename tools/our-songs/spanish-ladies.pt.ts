/** The guide of *Spanish Ladies* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies é uma canção de marinheiro tradicional, sobre uma tripulação que volta da Espanha para a Inglaterra. " +
    "Uma versão de 1769 ficou registrada no diário de bordo de um navio.",
  funFact: "No filme Jaws, de 1975, o caçador de tubarões Quint canta uma versão desta canção que os baleeiros cantavam.",
  versions: {
    common: {
      tips: [
        "Comece com o polegar no Si grave. Depois o dedo 3 toca o Mi.",
        "Solte o segundo Si um pouco antes. Nesse breve silêncio, leve o polegar para cima até o Mi.",
        "Conte três tempos lentos em cada compasso, como um navio balançando nas ondas.",
      ],
      tricky: {
        6: "Agora o polegar toca o Mi duas vezes, e o dedo 2 toca o Fá sustenido. A mão subiu até o Mi.",
      },
    },
    rare: {
      tricky: {
        6: "Agora o polegar toca o Mi duas vezes, e o dedo 2 toca o Fá sustenido. A mão esquerda toca um Mi grave, depois o Si duas vezes.",
      },
    },
    epic: {
      tricky: {
        22: "O dedo 5 toca o Mi duas vezes em cima, enquanto a nota mais grave vai do Sol para o Si. Depois o polegar alcança o Lá.",
        26: "Levante as duas mãos depois do acorde de Si maior, e pouse as duas juntas no último acorde de Mi menor.",
      },
    },
    legendary: {
      tricky: {
        21: "Mantenha o polegar no Sol durante o compasso inteiro. Só a nota de cima se move: do Mi para o Ré, e depois para o Si.",
        26: "Levante as duas mãos na pausa curta do compasso 25. Depois caia no último acorde, sobre a oitava de Mi grave.",
      },
    },
  },
};

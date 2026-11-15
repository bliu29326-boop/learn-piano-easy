/** The guide of *Aquarium* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium é o sétimo movimento de O Carnaval dos Animais, uma brincadeira musical que Saint-Saëns escreveu em 1886. " +
    "A suíte foi publicada em 1922, um ano depois da morte dele. " +
    "O filme Days of Heaven (1978), de Terrence Malick, usa esta música nos créditos de abertura.",
  funFact:
    "Saint-Saëns proibiu apresentações públicas da suíte enquanto viveu, com medo de que as brincadeiras prejudicassem a reputação dele de compositor sério.",
  versions: {
    common: {
      tricky: {
        1: "Balance entre Mi e Ré sustenido com os dedos 5 e 4. Depois o dedo 4 desliza para o Ré, na tecla branca.",
        3: "O compasso 3 é o compasso 1 de novo. Mantenha o dedo 4 perto da tecla preta, para o Ré sustenido vir fácil.",
      },
    },
    rare: {
      tricky: {
        1: "Balance entre Mi e Ré sustenido com os dedos 5 e 4, enquanto a mão esquerda alterna entre Lá e Dó.",
        3: "Como no compasso 1, os dedos 5 e 4 balançam entre Mi e Ré sustenido. Depois o dedo 4 pega o Ré, na tecla branca.",
      },
    },
    epic: {},
    legendary: {},
  },
};

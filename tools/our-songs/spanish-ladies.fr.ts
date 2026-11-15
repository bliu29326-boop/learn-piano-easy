/** The guide of *Spanish Ladies* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies est un chant de marins traditionnel. Il raconte un équipage qui rentre d’Espagne en Angleterre. " +
    "Une version de 1769 est conservée dans le journal de bord d’un navire.",
  funFact:
    "Dans le film « Les Dents de la mer », sorti en 1975, le chasseur de requins Quint chante " +
    "une version de baleiniers de ce chant.",
  versions: {
    common: {
      tips: [
        "Commence avec le pouce sur le si grave. Puis le doigt 3 joue le mi.",
        "Lâche le deuxième si un peu plus tôt. Dans ce petit vide, monte le pouce jusqu’au mi.",
        "Compte trois temps lents par mesure, comme un navire qui roule sur les vagues.",
      ],
      tricky: {
        6: "Maintenant, le pouce joue deux fois le mi, et le doigt 2 joue le fa dièse. La main est montée jusqu’au mi.",
      },
    },
    rare: {
      tricky: {
        6: "Maintenant, le pouce joue deux fois le mi, et le doigt 2 joue le fa dièse. " +
          "La main gauche joue un mi grave, puis deux fois le si.",
      },
    },
    epic: {
      tricky: {
        22: "Le doigt 5 joue deux fois le mi en haut, pendant que la note du bas passe du sol au si. Puis le pouce atteint le la.",
        26: "Lève les deux mains après l’accord de si majeur, et arrive ensemble sur le dernier accord de mi mineur.",
      },
    },
    legendary: {
      tricky: {
        21: "Garde le pouce sur le sol pendant toute la mesure. Seule la note du haut bouge, du mi au ré, puis au si.",
        26: "Lève les deux mains pendant le court silence de la mesure 25. " +
          "Puis arrive sur le dernier accord, au-dessus de l’octave de mi grave.",
      },
    },
  },
};

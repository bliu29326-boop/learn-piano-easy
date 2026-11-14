/** The guide of *Piano Concerto No. 21: Andante* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart a achevé ce concerto le 9 mars 1785, quatre semaines après le précédent. " +
    "Son mouvement lent, l’Andante, chante une longue mélodie sur de doux accords répétés. " +
    "Le film « Elvira Madigan » (1967) le fait entendre, et le concerto est aujourd’hui très connu sous ce nom.",
  funFact: "Mozart a terminé ce concerto quatre semaines seulement après son Concerto pour piano n° 20.",
  versions: {
    common: {
      tips: [
        "Tiens le premier fa pendant sept temps. Le do court arrive juste avant la note longue suivante.",
        "Le doigt 4 tient le do aigu. Puis les doigts 5, 4, 3 et 2 jouent quatre notes rapides.",
        "Joue doux et lié, comme si tu fredonnais une berceuse.",
      ],
      tricky: {
        5: "Le doigt 3 monte du sol au si bémol. Puis les doigts 5, 4 et 3 jouent ré, do et si bémol.",
      },
    },
    rare: {
      tricky: {
        5: "Le doigt 3 monte du sol au si bémol. Puis les doigts 5, 4 et 3 jouent ré, do et si bémol.",
      },
    },
    epic: {
    },
    legendary: {
    },
  },
};

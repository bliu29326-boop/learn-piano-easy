/** The guide of *Symphony No. 7: Allegretto* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven a écrit sa Septième Symphonie en 1811 et 1812. " +
    "À sa création à Vienne, en décembre 1813, le public a réclamé l’Allegretto une seconde fois. " +
    "Le film « Le Discours d’un roi » (2010) le fait entendre sous le discours radiophonique du roi en temps de guerre.",
  funFact: "La mélodie sonne d’abord dans le grave, aux altos et aux violoncelles.",
  versions: {
    common: {
      tips: [
        "Dis « long, bref, bref » en jouant la première mesure. Tout le morceau tient dans ce rythme.",
        "La main ne bouge jamais. Le pouce et les doigts 2 et 3 jouent mi, fa dièse et sol.",
        "Commence très doux, et joue chaque mesure un peu plus fort que la précédente.",
      ],
    },
    rare: {
      tips: [
        "Ici, la main gauche descend un peu. Le doigt 5 passe du sol dièse au sol.",
        "Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure.",
        "La main gauche joue maintenant sur chaque temps. Garde-la régulière, comme une marche lente.",
      ],
      tricky: {
        15: "La main gauche se balance entre sol et ré avec les doigts 5 et 2.",
        16: "Joue mi et sol ensemble avec le pouce et le doigt 3. Puis lève la main droite pendant le silence.",
      },
    },
    epic: {
      tips: [
        "Joue les accords brisés tout en douceur, pour que le mi répété chante au-dessus.",
        "Change de pédale sur le dernier temps, là où l’accord passe à ré majeur.",
        "Change de pédale trois fois dans cette mesure, une fois pour chaque nouvel accord.",
      ],
    },
    legendary: {
    },
  },
};

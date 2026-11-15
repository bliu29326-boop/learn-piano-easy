/** The guide of *Blow the Man Down* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down est un chant de marins à hisser. L’équipage le chantait en hissant une lourde voile le long du mât. " +
    "Notre mélodie suit l’édition qu’en a imprimée R. R. Terry en 1921.",
  funFact:
    "Un journal de Syracuse, dans l’État de New York, a cité un vers de la chanson en 1867. " +
    "Des marins l’avaient chantée sur un bateau à vapeur, entre New York et Glasgow.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 7 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 8 à 17 à la main droite seule. La main se déplace deux fois, chaque fois après une note longue.",
        "Maintenant, la main gauche seule. Elle tient une ou deux notes pendant toute une mesure.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur sol. Le doigt 2 prend si, le doigt 4 prend ré, et le doigt 5 prend mi.",
        "Tiens le premier ré trois temps, puis joue mi un temps. Ce mi bref tire comme une corde.",
        "Les marins chantaient cet air en hissant une voile. Appuie un peu sur la première note de chaque mesure, comme pour tirer.",
      ],
      tricky: {
        8: "Après le long mi, la main descend. Le doigt 4 arrive sur do, et le pouce attend au-dessus du fa dièse.",
        13: "Le doigt 4 monte de la à mi, et le doigt 5 joue le sol aigu.",
        14: "Après le sol aigu, le doigt 5 descend sur ré. Il joue ré trois fois : bref, long, puis moyen.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave longue, puis un accord bref.",
        "Joue les sept premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 8 à 17 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tricky: {
        8: "Après l’accord do et mi, la main descend. Le doigt 4 arrive sur do. La main gauche joue ré, puis la et ré ensemble.",
        13: "Le doigt 4 monte de la à mi, et le doigt 5 joue le sol aigu. La main gauche joue do, puis sol et do ensemble.",
        14: "Le doigt 5 descend du sol aigu sur ré et le joue trois fois. Garde le poignet souple.",
      },
    },
    epic: {},
    legendary: {},
  },
};

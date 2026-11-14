/** The guide of *The Sorcerer's Apprentice* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas a achevé ce poème symphonique en 1897, et il a été publié la même année. " +
    "Il suit « L’Apprenti sorcier », un poème de Goethe de 1797. " +
    "Dans le film de Walt Disney « Fantasia » (1940), Mickey Mouse joue l’apprenti.",
  funFact:
    "Dukas lui a donné pour sous-titre « scherzo d’après une ballade de Goethe ». " +
    "C’est de loin son œuvre la plus jouée et la plus enregistrée.",
  versions: {
    common: {
      practice: [
        "Joue les trois premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 10 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle tient une ou deux notes graves par mesure.",
        "Joue les dix premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tricky: {
        7: "Après le sol dièse au doigt 2, le doigt 4 prend le la. La main gauche quitte le mi et revient au la et au mi.",
        10: "Comme à la mesure 7, le doigt 4 prend le la après le sol dièse. Puis le doigt 5 monte chercher le do.",
      },
    },
    rare: {
      tricky: {
        7: "Le doigt 4 prend le la après le sol dièse. La main gauche redescend de son accord sur mi jusqu’au la.",
        10: "Ici, la mélodie s’arrête. Le doigt 4 prend le la, et la main gauche revient au la.",
      },
    },
    legendary: {
      tricky: {
        6: "Les doigts de la main droite descendent sol, fa et mi, chaque note courte. La main gauche saute vers le haut jusqu’à ses accords.",
      },
    },
  },
};

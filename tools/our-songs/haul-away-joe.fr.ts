/** The guide of *Haul Away Joe* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe est un court chant de marins, qu’on chantait en halant un cordage. " +
    "R. R. Terry l’a publié en 1921 comme chant pour haler l’écoute de misaine.",
  funFact:
    "Un couplet de l’édition de Terry parle du roi Louis de France, qui a perdu la tête pendant la Révolution.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. C’est là que le refrain descend jusqu’au ré grave.",
        "Maintenant, la main gauche seule. Elle tient deux touches et en change au plus deux fois par mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tricky: {
        2: "Le doigt 5 joue trois fois le do. Ensuite, le doigt 3 prend le la, et le doigt 2 attend au-dessus du sol.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une longue note grave, puis un accord court.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Chaque demi-mesure de la main gauche a une note longue et un accord court. Sens l’élan du halage : long, court.",
        "Les doigts 1 et 5 enfoncent les sixtes d’un seul geste. Ensuite, le doigt 5 reste sur la note du haut.",
        "Termine sur ré et fa ensemble. Les doigts 1 et 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        5: "Ouvre les doigts 1 et 5 sur fa et ré pour la sixte. Ensuite, le doigt 5 rejoue le ré seul.",
      },
    },
    epic: {},
    legendary: {},
  },
};

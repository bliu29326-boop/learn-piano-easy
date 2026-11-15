/** The guide of *Eine kleine Nachtmusik* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart a terminé cette sérénade pour cordes à Vienne en 1787. " +
    "Elle n’a été publiée qu’en 1827, plus de trente ans après sa mort. " +
    "Dans le film « Amadeus » (1984), le vieux Salieri la joue, et un prêtre reconnaît l’air tout de suite.",
  funFact:
    "Le titre allemand signifie « une petite sérénade ». " +
    "Mozart l’a inscrit lui-même dans le catalogue de ses œuvres.",
  versions: {
    common: {
      tips: [
        "Le pouce sur le ré, le doigt 2 sur le sol, le doigt 4 sur le si et le doigt 5 sur le ré aigu.",
        "Joue le sol court et brillant, comme si les cordes le lançaient d’un coup sec.",
        "Profite du silence après le ré aigu pour placer les doigts 2, 3 et 5 sur fa dièse, la et do.",
      ],
      tricky: {
        5: "La main s’est déplacée pendant le silence. Le doigt 5 joue maintenant le do, et le doigt 3 le la.",
        7: "Descends do, la et fa dièse avec les doigts 5, 3 et 2, puis remonte au la.",
      },
    },
    rare: {
      tricky: {
        5: "Déplace la main pendant le silence de la mesure 4. Le doigt 5 arrive sur le do, et le doigt 3 sur le la.",
        7: "Descends do, la et fa dièse avec les doigts 5, 3 et 2, puis remonte au la.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
    },
    legendary: {
      tricky: {
        2: "Quitte l’octave de sol, puis saute vers le bas sur l’octave de ré. Garde la main ouverte.",
        3: "Quatre octaves à la suite : sol, ré, sol et si. Lève un peu la main après chacune.",
      },
    },
  },
};

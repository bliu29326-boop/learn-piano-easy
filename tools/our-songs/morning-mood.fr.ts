/** The guide of *Morning Mood* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg a écrit « Au matin » en 1875 pour la pièce d’Ibsen « Peer Gynt ». " +
    "Il l’a publié en 1888 dans sa première suite de Peer Gynt. " +
    "Sa mélodie n’utilise que cinq notes de la gamme, et passe tour à tour de la flûte au hautbois. " +
    "Dans le film « Soleil vert », sorti en 1973, on l’entend pendant qu’un mourant écoute la musique qu’il a choisie.",
  funFact:
    "La musique peint un lever de soleil dans le désert marocain, et non sur un fjord norvégien, comme l’imaginent la plupart des auditeurs.",
  versions: {
    common: {
      tips: [
        "Le pouce droit est sur le do central, et le doigt 5 commence sur le sol. Les doigts 2 et 3 reposent sur ré et mi.",
        "Après le premier do, quatre notes courtes se balancent entre ré et mi. Compte-les bien régulièrement.",
        "Joue doux, comme le soleil qui se lève lentement. Chaque note doit couler dans la suivante.",
      ],
      tricky: {
        5: "Ici, le doigt 2 prend le mi, et le doigt 4 le sol. Le doigt 5 reste ainsi libre pour le la aigu de la mesure 6.",
        7: "Le doigt 5 revient du la au sol. À la demi-mesure, la main gauche passe à ré et sol.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis deux fois un accord de deux notes. La main reste immobile.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche joue sur chaque temps. Compte un, deux, trois, deux fois par mesure.",
        "Joue les accords de la main gauche tout en douceur, pour que la mélodie flotte au-dessus comme la lumière du matin.",
        "Termine sur sol et si ensemble. Les doigts 1 et 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        7: "Le doigt 5 revient du mi au ré. À la demi-mesure, la main gauche passe à la et ré.",
      },
    },
  },
};

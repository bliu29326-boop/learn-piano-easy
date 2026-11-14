/** The guide of *Air on the G String* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach a écrit cet air comme mouvement lent de sa troisième Suite pour orchestre. " +
    "En 1871, le violoniste August Wilhelmj l’a arrangé pour qu’un violon joue toute la mélodie sur sa corde la plus grave, la corde de sol. " +
    "Le film « Seven » (1995) le fait entendre pendant que deux détectives examinent des photos de scènes de crime.",
  funFact:
    "Wilhelmj a écrit « auf der G-Saite », sur la corde de sol, au-dessus de la partie de violon. " +
    "C’est de là que vient le surnom du morceau.",
  versions: {
    common: {
      tips: [
        "Tiens le premier mi pendant une mesure entière, et écoute. Un violon chante cette note d’un seul long coup d’archet.",
        "Lève un instant le pouce du do. Puis le doigt 2 arrive sur le si, et la main reste là.",
        "Chaque note longue remplit une mesure entière. Compte huit temps lents, puis attends encore un temps avant la note suivante.",
      ],
      tricky: {
        3: "Lève un instant le pouce du do, puis joue le si avec le doigt 2.",
        8: "Après le silence, le doigt 4 joue le ré. Puis le pouce descend jusqu’au sol.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. La note de basse vient d’abord, et l’accord de deux notes lui répond.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit. La mélodie passe deux fois.",
        "Maintenant, joue-le au tempo.",
      ],
      tricky: {
        6: "Après le silence, le doigt 5 prend le mi. Puis les doigts 2 et 1 jouent si bémol et la.",
        14: "Le même geste qu’à la mesure 6 : le doigt 5 sur le mi, puis si bémol avec le doigt 2.",
        19: "La main droite joue do et mi ensemble. La main gauche s’ouvre sur do, mi et sol avec les doigts 5, 3 et 1.",
      },
    },
    epic: {
      tricky: {
        14: "Joue chaque paire d’un seul geste, et laisse le doigt du haut chanter la mélodie. Le pouce prend la plupart des notes du bas.",
      },
    },
    legendary: {
      tricky: {
        9: "Profite du silence du début pour monter la main d’une octave. Puis prends quatre notes avec les doigts 1, 2, 3 et 5.",
      },
    },
  },
};

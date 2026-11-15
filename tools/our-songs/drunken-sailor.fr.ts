/** The guide of *Drunken Sailor* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor est un chant de marins. " +
    "Les équipages le chantaient en halant les cordages ou en tournant le cabestan. " +
    "Personne ne sait qui l’a écrit, et sa mélodie est en mode dorien.",
  funFact:
    "La première trace écrite de ce chant vient d’un voyage baleinier de 1839, parti de New London, dans le Connecticut.",
  versions: {
    common: {
      tips: [
        "Chaque moitié de mesure fait long, court, court. Martèle-la comme un marin qui tape du pied sur le pont.",
        "Le doigt 5 joue le la, puis le pouce descend chercher le ré. La main reste où elle est.",
        "Joue le dernier la de la mesure 5 avec le doigt 2. Les doigts 3, 4 et 5 sont alors prêts pour si, do et ré.",
      ],
      tricky: {
        3: "Le doigt 4 joue six fois le sol : long, court, court, long, court, court. Garde les notes courtes légères.",
        7: "Le doigt 5 descend du ré au do. Puis les doigts 4, 3 et 2 descendent vers la, sol et mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis deux notes sur le temps suivant.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tricky: {
        3: "Le doigt 4 joue six fois le sol, pendant que la main gauche joue do, puis sol. Garde les deux mains régulières.",
        7: "Après le long ré, le doigt 5 descend au do. La main gauche joue do, puis fa et la, puis do et sol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

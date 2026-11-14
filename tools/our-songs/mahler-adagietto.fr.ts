/** The guide of *Adagietto* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "L’Adagietto est le quatrième mouvement, le mouvement lent, de la Cinquième Symphonie de Mahler. " +
    "Elle a été jouée pour la première fois à Cologne en 1904. " +
    "Le film de Luchino Visconti « Mort à Venise », sorti en 1971, l’a rendu célèbre bien au-delà des salles de concert.",
  funFact: "Depuis ce film, c’est la musique la plus connue que Mahler ait jamais écrite.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mesure 5 a un si, et les mesures 6 et 7 un fa dièse.",
        "Maintenant, la main gauche seule. Elle tient chaque note pendant une demi-mesure ou une mesure entière.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tricky: {
        4: "Joue le premier do avec le doigt 5, puis répète-le avec le doigt 4. Le doigt 5 prend ensuite le ré.",
        5: "Le si est une touche blanche, et le si bémol qui suit est une touche noire. Les doigts 3 et 2 les jouent.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave arrive sur le temps, et un accord lui répond.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tricky: {
        5: "Le si est une touche blanche, et le si bémol qui suit est une touche noire. D’abord, la main gauche ne joue que sol et ré.",
        7: "Le pouce joue d’abord le fa dièse, puis le fa à la fin. À mi-mesure, la main gauche passe du si bémol au do.",
      },
    },
    epic: {
      tricky: {
        18: "Pour la sixte, le pouce descend du do au la. Puis il remonte au fa pour les notes seules.",
      },
    },
    legendary: {
    },
  },
};

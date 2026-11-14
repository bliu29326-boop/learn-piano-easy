/** The guide of *William Tell Overture* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "L’opéra de Rossini « Guillaume Tell » a été créé en 1829. C’était le dernier de ses 39 opéras. " +
    "Son ouverture se termine par un galop rapide, souvent appelé « March of the Swiss Soldiers ». " +
    "Ce finale est devenu le thème de « The Lone Ranger », à la radio, à la télévision et au cinéma.",
  funFact:
    "Certains auteurs ont défini un intellectuel comme un homme capable d’écouter l’ouverture de « Guillaume Tell » " +
    "sans penser au Lone Ranger.",
  versions: {
    rare: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Elle joue un accord à chaque demi-mesure.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo, comme un cheval au galop.",
      ],
    },
    epic: {
      tricky: {
        17: "Profite du silence après le long la pour monter le pouce jusqu’au mi aigu.",
      },
    },
    legendary: {
      tricky: {
        13: "Les octaves descendent du fa dièse au si. Garde la main ouverte, et laisse-la rebondir sur chacune.",
      },
    },
  },
};

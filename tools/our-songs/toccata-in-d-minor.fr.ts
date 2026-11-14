/** The guide of *Toccata and Fugue in D minor* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La « Toccata et fugue en ré mineur » de Bach a été publiée pour la première fois en 1833, " +
    "quand on redécouvrait la musique de Bach. " +
    "Felix Mendelssohn l’a défendue, et il l’a jouée avec un grand succès en 1840. " +
    "Le film de Walt Disney « Fantasia » (1940) s’ouvre sur cette œuvre.",
  funFact:
    "L’œuvre est restée presque inconnue jusqu’à sa première édition, plus de quatre-vingts ans après la mort de Bach.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 3 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 6 à la main droite seule. La même idée revient une octave plus bas.",
        "Maintenant, la main gauche seule. Aux mesures 7 et 8, elle monte dans un accord sombre, une note à la fois.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo, fort et avec aplomb.",
      ],
      tips: [
        "Joue le premier la fort et tiens-le toute la mesure, comme un grand orgue.",
        "Après le silence, le doigt 5 descend sur le sol. Puis chaque doigt joue un pas plus bas.",
        "Cet accord sonne sombre et tendu. Laisse-le flotter dans l’air, puis savoure l’accord lumineux de la mesure 9.",
      ],
      tricky: {
        2: "Profite du silence pour descendre le doigt 5 du la au sol. Le trait descend ensuite doigt après doigt.",
        4: "Profite du silence de la mesure 3 pour descendre la main d’une octave. Le doigt 5 arrive sur le la.",
      },
    },
    rare: {
      tips: [
        "Joue le long la avec force, puis laisse le trait rapide dégringoler jusqu’au ré.",
        "La pédale fait sonner chaque note de la montée, alors l’accord grandit note après note.",
        "Le fa dièse rend cet accord lumineux. Il répond à toute la tension d’avant.",
      ],
      tricky: {
        2: "Profite du silence pour descendre le doigt 5 du la au sol. Puis le trait descend doigt après doigt.",
        4: "Profite du silence de la mesure 3 pour descendre la main droite d’une octave. Le doigt 5 arrive sur le la.",
      },
    },
    epic: {
      tricky: {
        4: "Profite du silence de la mesure 3 pour descendre la main droite d’une octave. Puis lance la, sol, la et tiens le la.",
      },
    },
    legendary: {
      practice: [
        "Joue seules les octaves de la main droite sur les six premières mesures. " +
          "Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue la main gauche seule. Chaque arpège couvre deux octaves, " +
          "et la basse stride saute entre la note de basse et l’accord.",
        "Joue les mesures 7 à 9 à deux mains. Les mains y montent tour à tour dans l’accord sombre.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse gronder le dernier accord.",
      ],
      tips: [
        "Les octaves font sonner la mélodie comme un orgue. Laisse la note du haut sonner un peu plus fort.",
        "La main gauche commence la montée, et la main droite la termine. On doit entendre un seul long trait.",
        "La basse reprend en octaves le trait du début. Fais-la gronder comme les tuyaux les plus graves de l’orgue.",
      ],
    },
  },
};

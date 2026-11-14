/** The guide of *Ave Maria* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert a mis ce chant en musique en 1825, d’après une traduction allemande du poème de Walter Scott « La Dame du lac ». " +
    "C’est le troisième chant d’Ellen, publié en 1826 dans son op. 52. " +
    "Le film de Walt Disney « Fantasia » (1940) l’utilise dans sa dernière partie, juste après « Une nuit sur le mont Chauve ».",
  funFact:
    "Dans « Fantasia », les cloches de la fin d’« Une nuit sur le mont Chauve » semblent devenir des cloches d’église. " +
    "Elles mènent à l’Ave Maria.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 7 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle tient chaque note de basse une demi-mesure ou plus.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chante les notes longues dans ta tête. La mélodie est une prière, alors joue-la doux.",
        "Le pouce repose sur le la, et le doigt 5 sur le mi. Chaque note de la main droite est sous un doigt.",
        "Les quatre dernières notes sont égales. Compte-les « un, deux, trois, quatre ».",
      ],
    },
    rare: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Une note de basse vient d’abord, et un accord de deux notes lui répond.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
    },
  },
};

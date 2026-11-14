/** The guide of *Can-can* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach a écrit le « Galop infernal » pour la fête endiablée des dieux qui clôt son opérette « Orphée aux Enfers », créée en 1858. " +
    "Dans les années 1890, les cabarets parisiens du Moulin Rouge et des Folies Bergère l’ont repris pour accompagner le cancan. " +
    "Le film « Moulin Rouge ! », sorti en 2001, l’utilise dans sa musique.",
  funFact:
    "Sa mélodie partage ses notes principales avec deux airs bien plus lents du même acte. Pourtant, elle ne leur ressemble en rien.",
  versions: {
    common: {
      practice: [
        "Joue les sept premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 8 à 16 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une mesure entière ou une demi-mesure.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Tiens le premier sol quatre temps. Les danseuses attendent que la musique démarre.",
        "Le doigt 5 joue les deux premiers ré. Puis le doigt 4 prend ré, pour que le doigt 5 puisse atteindre mi.",
        "Joue les noires brèves et rebondissantes, comme des danseuses qui lancent la jambe.",
      ],
      tricky: {
        4: "Sur ré, remplace le doigt 5 par le doigt 4. Puis le doigt 5 atteint mi, et le doigt 2 descend sur si.",
        5: "Le doigt 3 quitte do, et le doigt 2 joue deux fois la. Tiens chaque la deux temps.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note de basse tombe sur le temps, et un accord de deux notes lui répond.",
        "Joue les sept premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo, comme dans un bal à minuit.",
      ],
      tricky: {
        4: "Sur ré, remplace le doigt 5 par le doigt 4. Puis le doigt 5 atteint mi, et le doigt 2 descend sur si.",
      },
    },
  },
};

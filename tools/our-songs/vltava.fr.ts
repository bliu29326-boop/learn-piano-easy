/** The guide of *Vltava* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana a écrit « La Moldau » en 1874. " +
    "C’est le deuxième des six poèmes symphoniques de son cycle « Ma patrie », Má vlast en tchèque. " +
    "Sa musique peint la rivière qui traverse Prague. " +
    "Le film de Terrence Malick « The Tree of Life », sorti en 2011, l’utilise.",
  funFact:
    "Sa célèbre mélodie est une adaptation de La Mantovana, un air attribué au ténor italien de la Renaissance Giuseppe Cenci.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 5 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 9 à la main droite seule. La mélodie y descend jusqu’au mi.",
        "Maintenant, la main gauche seule. Elle garde chaque position une mesure entière et ne bouge jamais.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur le si. Puis les doigts 2 à 5 montent du mi au la.",
        "Lâche le la un peu en avance. Pendant ce court silence, monte la main d’une touche, le doigt 4 sur le si.",
        "Compte six temps par mesure : long, court, long, court. La rivière coule sans jamais se presser.",
      ],
      tricky: {
        3: "Le doigt 4 joue trois fois le si. La main vient de monter d’une touche, alors le doigt 5 attend au-dessus du do.",
        8: "Joue les deux premiers fa dièse avec le pouce, et le troisième avec le doigt 2. " +
          "Le pouce est alors libre pour le mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une longue note grave, puis une note ou un accord court.",
        "Joue les neuf premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Chaque demi-mesure a une note longue et une note courte, aux deux mains. Sens le balancement : long, court.",
        "Lâche le la un peu en avance. Pendant ce court silence, monte la main d’une touche, le doigt 4 sur le si.",
        "Termine sur le mi et le sol ensemble. Le pouce et le doigt 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        3: "Une fois la main montée, le doigt 4 joue trois fois le si. La main gauche joue un long mi, puis un si court.",
      },
    },
  },
};

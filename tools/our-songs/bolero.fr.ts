/** The guide of *Boléro* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ravel a écrit le « Boléro » pour orchestre en 1928, et Durand l’a publié pour la première fois en 1929. " +
    "Deux mélodies alternent sur un seul rythme de caisse claire, qui grandit du doux au fort. " +
    "En 1979, le film « Elle » lui a fait une large place, et ses ventes se sont envolées.",
  funFact:
    "Ravel a d’abord joué la mélodie d’un seul doigt à son ami Gustave Samazeuilh. Il lui a demandé si elle avait quelque chose d’insistant.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie descend lentement jusqu’au do.",
        "Maintenant, la main gauche seule. Elle tient une note ou une quinte pendant toute une mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue doux et régulier, comme une flûte au loin. La mélodie doit à peine changer de volume.",
        "Prends le long do avec le doigt 5. Le doigt 2 peut alors descendre jusqu’au mi sans que la main bouge.",
        "Rejoue mi avec le doigt 3 au début de la mesure 6. Le pouce est alors prêt pour le do.",
      ],
      tricky: {
        2: "Le doigt 2 joue la, puis le doigt 5 prend le long do. Les doigts 4 et 5 jouent ensuite si et do.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : la fondamentale, la quinte, puis les deux, une sur chaque temps.",
        "Joue les mesures 5 et 6 à la main droite seule. Le pouce descend deux fois d’une touche.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Compte trois temps lents par mesure. La main gauche joue une fois sur chaque temps, comme un tambour discret.",
        "Après mi, le pouce descend sur ré. À la mesure suivante, il descend encore jusqu’au do.",
        "Enfonce do et mi ensemble, et laisse-les sonner jusqu’à la fin.",
      ],
      tricky: {
        5: "Après le long sol, les doigts 4 et 5 montent jusqu’au si. À la fin, le pouce joue mi, puis descend sur ré.",
        6: "Le doigt 2 joue mi, et le pouce joue ré. Puis le pouce descend sur do et y reste.",
      },
    },
    epic: {
      tricky: {
        6: "Le pouce descend du ré au do, pendant que la main gauche garde le rythme du tambour.",
      },
    },
  },
};

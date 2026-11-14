/** The guide of *Gymnopédie No. 1* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie a terminé ses trois « Gymnopédies » en 1888. " +
    "La première a paru dans une revue l’été de la même année. " +
    "Elle porte l’indication « Lent et douloureux ». " +
    "Le film « La Famille Tenenbaum » (2001) l’utilise.",
  funFact:
    "Claude Debussy, un ami de Satie, a plus tard orchestré la première et la troisième Gymnopédie.",
  versions: {
    common: {
      practice: [
        "Joue la main gauche seule. Elle tient une quinte à vide dans chaque mesure.",
        "Joue les mesures 5 à 8 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue les quintes doux et laisse-les sonner. Elles se balancent comme une barque lente.",
        "Lève le pouce du si un peu plus tôt. Il descend alors au la à temps.",
        "Ralentis un peu à la fin, et laisse le dernier do s’éteindre.",
      ],
      tricky: {
        7: "Le pouce descend du si au la. Puis les doigts 2 et 3 montent jusqu’au si et au do.",
      },
    },
    rare: {
      tips: [
        "Garde la pédale enfoncée toute la mesure, et change-la pile sur la barre de mesure.",
        "Le pouce joue le si, puis descend d’un pas jusqu’au la. Garde les autres doigts souples.",
        "Laisse les deux dernières mesures sonner doux, comme la fin d’une berceuse.",
      ],
      tricky: {
        7: "Le pouce descend du si au la. Garde la main près des touches.",
      },
    },
    epic: {
      tricky: {
        6: "Le pouce descend jusqu’au do dièse pendant que le doigt 3 lâche le fa dièse.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule. Saute de l’octave grave jusqu’à l’accord pendant le court silence.",
        "Joue les mesures 5 à 8 à deux mains, lentement.",
        "Joue seuls les accords de la main droite, et lève la main entre eux.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
    },
  },
};

/** The guide of *Funeral March* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Cette marche funèbre est le troisième mouvement de la « Sonate pour piano nº 2 » de Chopin, publiée en 1840. " +
    "On l’a jouée aux funérailles de Chopin lui-même, et aux funérailles nationales de John F. Kennedy. " +
    "Les films et les dessins animés citent souvent son début pour un enterrement.",
  funFact:
    "Beaucoup de spécialistes datent la marche de 1837, deux ans avant que Chopin achève le reste de la sonate.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie quitte enfin le ré.",
        "Maintenant, la main gauche seule. Elle se balance entre ré et si bémol, comme une cloche lente.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tricky: {
        7: "Tiens le mi trois temps, puis joue le ré un temps. Tiens le ré trois temps, et le pouce joue le do dièse en dernier.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle sonne un accord à chaque temps, comme une cloche.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
    },
    epic: {
      tricky: {
        22: "Le doigt 4 prend le do dans la sixte, pour que le doigt 5 soit libre de monter jusqu’au mi bémol.",
      },
    },
    legendary: {
      tricky: {
        22: "Lève la main pendant le court silence, puis pose-la sur mi bémol, la bémol, do et mi bémol.",
      },
    },
  },
};

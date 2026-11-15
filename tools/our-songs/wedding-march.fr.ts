/** The guide of *Wedding March* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn a écrit cette marche en 1842, dans sa musique pour « Le Songe d’une nuit d’été » de Shakespeare. " +
    "Elle est devenue un classique des mariages après que Victoria, la princesse royale, l’a choisie pour le sien en 1858. " +
    "Au cinéma, on l’entend encore chaque fois qu’un couple quitte l’autel.",
  funFact:
    "Le premier mariage connu où elle a été jouée a eu lieu à Tiverton, en Angleterre, le 2 juin 1847. " +
    "C’est l’organiste Samuel Reay qui l’a jouée.",
  versions: {
    common: {
      tricky: {
        2: "Tiens le si avec le doigt 4 pendant six temps. Puis le pouce joue le fa dièse.",
        4: "La main est descendue. Le doigt 4 joue le fa, et le doigt 2 joue le ré.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle joue un accord sur chaque temps, comme une fanfare.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tricky: {
        1: "Tiens le do aigu avec le doigt 5. La main gauche joue la, do et fa sur chaque temps.",
        2: "La main gauche joue le la et le ré. Tiens le si à la main droite pendant que l’accord se répète.",
        4: "Le doigt 4 joue le fa, et le doigt 2 le ré. La main gauche reste sur si, ré et sol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

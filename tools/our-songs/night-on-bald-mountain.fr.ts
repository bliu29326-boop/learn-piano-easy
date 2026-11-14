/** The guide of *Night on Bald Mountain* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Moussorgski a achevé son tableau musical d’un sabbat de sorcières sur le mont Chauve la nuit de la Saint-Jean, le 23 juin 1867. " +
    "Cinq ans après la mort de Moussorgski, Rimski-Korsakov a publié en 1886 son propre arrangement de l’œuvre. " +
    "Le film Fantasia de Walt Disney (1940) l’a rendu célèbre, dans l’arrangement de Leopold Stokowski d’après la version de Rimski-Korsakov.",
  funFact:
    "Avec Sadko de Rimski-Korsakov, qui date lui aussi de 1867, c’est l’un des premiers poèmes symphoniques d’un compositeur russe.",
  versions: {
    common: {
      tricky: {
        5: "La main est montée. Le doigt 2 joue le la, et le doigt 3 joue le si bémol.",
      },
    },
    rare: {
      tricky: {
        5: "La main est montée pendant le silence. Le doigt 2 joue le la, et le doigt 3 joue le si bémol.",
      },
    },
  },
};

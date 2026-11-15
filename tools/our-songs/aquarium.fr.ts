/** The guide of *Aquarium* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium est le septième mouvement du « Carnaval des animaux », une plaisanterie musicale que Saint-Saëns a écrite en 1886. " +
    "La suite a été publiée en 1922, l’année qui a suivi sa mort. " +
    "Le film de Terrence Malick « Les Moissons du ciel » (1978) le fait entendre pendant son générique de début.",
  funFact:
    "De son vivant, Saint-Saëns a interdit que la suite soit jouée en public. " +
    "Il craignait que ses plaisanteries nuisent à sa réputation de compositeur sérieux.",
  versions: {
    common: {
      tricky: {
        1: "Va et viens entre mi et ré dièse avec les doigts 5 et 4. Puis le doigt 4 glisse sur le ré, la touche blanche.",
        3: "La mesure 3 reprend la mesure 1. Garde le doigt 4 près de la touche noire, et le ré dièse viendra facilement.",
      },
    },
    rare: {
      tricky: {
        1: "Va et viens entre mi et ré dièse avec les doigts 5 et 4, pendant que la main gauche alterne la et do.",
        3: "Comme à la mesure 1, les doigts 5 et 4 vont et viennent entre mi et ré dièse. " +
          "Puis le doigt 4 prend le ré, la touche blanche.",
      },
    },
    epic: {},
    legendary: {},
  },
};

/** The guide of *Night on Bald Mountain* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky terminó su retrato musical de un aquelarre de brujas en el Monte Pelado la noche de San Juan, el 23 de junio de 1867. " +
    "Cinco años después de su muerte, en 1886, Rimsky-Korsakov publicó su propio arreglo de la obra. " +
    "La película Fantasia (1940), de Walt Disney, la hizo famosa, con el arreglo de Leopold Stokowski basado en la versión de Rimsky-Korsakov.",
  funFact: "Junto con Sadko de Rimsky-Korsakov, también de 1867, es uno de los primeros poemas sinfónicos de un compositor ruso.",
  versions: {
    common: {
      tricky: {
        5: "La mano subió. El dedo 2 toca el la, y el dedo 3 toca el si bemol.",
      },
    },
    rare: {
      tricky: {
        5: "La mano subió durante el silencio. El dedo 2 toca el la, y el dedo 3 toca el si bemol.",
      },
    },
  },
};

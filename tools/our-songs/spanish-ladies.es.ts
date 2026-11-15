/** The guide of *Spanish Ladies* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Spanish Ladies es una canción marinera tradicional sobre una tripulación que navega de regreso a Inglaterra desde España. " +
    "Una versión de 1769 se conserva en el cuaderno de bitácora de un barco.",
  funFact: "En la película Jaws, de 1975, el cazador de tiburones Quint canta una versión de balleneros de esta canción.",
  versions: {
    common: {
      tips: [
        "Empieza con el pulgar en el si grave. Luego el dedo 3 toca el mi.",
        "Suelta el segundo si un poco antes. En ese hueco, sube el pulgar hasta el mi.",
        "Cuenta tres tiempos lentos en cada compás, como un barco que se mece sobre las olas.",
      ],
      tricky: {
        6: "Ahora el pulgar toca el mi dos veces, y el dedo 2 toca el fa sostenido. La mano subió hasta el mi.",
      },
    },
    rare: {
      tricky: {
        6: "Ahora el pulgar toca el mi dos veces, y el dedo 2 toca el fa sostenido. La mano izquierda toca un mi grave, y luego el si dos veces.",
      },
    },
    epic: {
      tricky: {
        22: "El dedo 5 toca el mi dos veces arriba, mientras la nota de abajo pasa del sol al si. Luego el pulgar alcanza el la.",
        26: "Levanta las dos manos después del acorde de si mayor, y apoya las dos juntas en el último acorde de mi menor.",
      },
    },
    legendary: {
      tricky: {
        21: "Mantén el pulgar en el sol durante todo el compás. Solo se mueve la nota de arriba, del mi al re y al si.",
        26: "Levanta las dos manos en el silencio corto del compás 25. Luego apóyalas en el último acorde, sobre la octava de mi grave.",
      },
    },
  },
};

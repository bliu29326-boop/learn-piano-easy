/** The guide of *The Sorcerer's Apprentice* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas terminó este poema sinfónico en 1897, y se publicó ese mismo año. " +
    "Sigue el poema de Goethe El aprendiz de brujo, de 1797. " +
    "En la película de Walt Disney Fantasia (1940), Mickey Mouse hace de aprendiz.",
  funFact: "Dukas lo subtituló «scherzo sobre una balada de Goethe». Es, de lejos, la obra suya más tocada y grabada.",
  versions: {
    common: {
      practice: [
        "Toca los primeros tres compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 4 a 10 con la mano derecha sola. La mano se queda en un solo lugar.",
        "Ahora la mano izquierda sola. Mantiene una o dos notas graves en cada compás.",
        "Junta las dos manos en los primeros diez compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tricky: {
        7: "Después del sol sostenido con el dedo 2, el dedo 4 toma el la. La mano izquierda pasa del mi de vuelta al la y al mi.",
        10: "Como en el compás 7, el dedo 4 toma el la después del sol sostenido. Luego el dedo 5 sube al do.",
      },
    },
    rare: {
      tricky: {
        7: "El dedo 4 toma el la después del sol sostenido. La mano izquierda baja de su acorde de mi de vuelta al la.",
        10: "Aquí termina la melodía. El dedo 4 toma el la, y la mano izquierda vuelve al la.",
      },
    },
    legendary: {
      tricky: {
        6: "Los dedos de la mano derecha bajan por el sol, el fa y el mi, cada nota corta. La mano izquierda salta arriba a sus acordes.",
      },
    },
  },
};

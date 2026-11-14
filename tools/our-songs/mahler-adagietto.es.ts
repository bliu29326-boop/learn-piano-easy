/** The guide of *Adagietto* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El Adagietto es el lento cuarto movimiento de la Quinta Sinfonía de Mahler, estrenada en Colonia en 1904. " +
    "La película Death in Venice, de Luchino Visconti, de 1971, lo hizo famoso mucho más allá de la sala de conciertos.",
  funFact: "Desde esa película, es la música más conocida que Mahler escribió.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. El compás 5 tiene un si, y los compases 6 y 7 un fa sostenido.",
        "Ahora la mano izquierda sola. Mantiene cada nota medio compás o un compás entero.",
        "Toca los primeros ocho compases con las dos manos juntas, despacio.",
        "Toca toda la canción con las dos manos a velocidad completa.",
      ],
      tricky: {
        4: "Toca el primer do con el dedo 5, y repítelo con el dedo 4. Luego el dedo 5 toma el re.",
        5: "El si es una tecla blanca, y el si bemol que sigue es una tecla negra. Los dedos 3 y 2 los tocan.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Una nota grave llega en el pulso, y un acorde le responde.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tricky: {
        5: "El si es una tecla blanca, y el si bemol que sigue es una tecla negra. Al principio la mano izquierda toca solo sol y re.",
        7: "El pulgar toca primero el fa sostenido y al final el fa. La mano izquierda pasa de si bemol a do a mitad del compás.",
      },
    },
    epic: {
      tricky: {
        18: "El pulgar baja del do al la para la sexta. Luego sube al fa para las notas sueltas.",
      },
    },
    legendary: {
    },
  },
};

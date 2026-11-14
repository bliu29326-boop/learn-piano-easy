/** The guide of *Funeral March* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta marcha fúnebre es el tercer movimiento de la Sonata para piano n.º 2 de Chopin, publicada en 1840. " +
    "Se tocó en el funeral del propio Chopin, y en el funeral de Estado de John F. Kennedy. " +
    "Las películas y los dibujos animados suelen citar su comienzo cuando hay un funeral.",
  funFact: "Muchos especialistas fechan la marcha en 1837, dos años antes de que Chopin terminara el resto de la sonata.",
  versions: {
    common: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Por fin la melodía se aleja del re.",
        "Ahora la mano izquierda sola. Se balancea entre el re y el si bemol, como una campana lenta.",
        "Junta las dos manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tricky: {
        7: "Mantén el mi tres tiempos, y luego toca el re durante uno. Mantén el re tres tiempos, y al final el pulgar toca el do sostenido.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Hace sonar un acorde en cada tiempo, como una campana.",
        "Toca la mano derecha sola en los ocho primeros compases, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
    },
    epic: {
      tricky: {
        22: "El dedo 4 toma el do en la sexta, para que el dedo 5 quede libre y suba al mi bemol.",
      },
    },
    legendary: {
      tricky: {
        22: "Levanta la mano en el silencio corto, y luego baja la mano al mi bemol, al la bemol, al do y al mi bemol.",
      },
    },
  },
};

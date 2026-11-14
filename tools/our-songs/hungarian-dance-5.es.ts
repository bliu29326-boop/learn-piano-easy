/** The guide of *Hungarian Dance No. 5* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms escribió sus Danzas húngaras para piano a cuatro manos, y la primera serie se publicó en 1869. " +
    "La Danza n.º 5 se volvió la más famosa de todas. " +
    "En la película The Great Dictator (1940), Charlie Chaplin afeita a un cliente al compás de esta música.",
  funFact: "Brahms basó esta danza en una csárdás de Béla Kéler, pero creía que era una melodía popular.",
  versions: {
    common: {
      tricky: {
        2: "El dedo 5 se estira hacia arriba hasta el do, y luego el dedo 3 vuelve al la.",
      },
    },
    rare: {
      tricky: {
        5: "La mano derecha ahora toca una octava más arriba. Tu pulgar cae en el mi agudo.",
      },
    },
    epic: {
      tricky: {
        7: "Los dedos 1 y 4 tocan el sol sostenido y el mi sostenido. Luego la mano sube dos veces, rápido.",
        15: "Son las mismas sextas del compás 7. Mantén el pulgar cerca del la y del si.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: salta hacia abajo a la octava y luego vuelve arriba al acorde.",
        "Toca solas las octavas de la mano derecha, con el pulgar y el meñique en una sola forma.",
        "Toca despacio las figuras rápidas de los compases 5 a 7 con la mano derecha sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa y deja que el último acorde resuene.",
      ],
      tricky: {
        8: "Abre la mano sobre el fa sostenido, el la, el do sostenido y el fa sostenido con los dedos 1, 2, 3 y 5.",
      },
    },
  },
};

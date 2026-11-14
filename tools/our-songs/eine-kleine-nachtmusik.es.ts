/** The guide of *Eine kleine Nachtmusik* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart terminó esta serenata para cuerdas en Viena en 1787. " +
    "No se publicó hasta 1827, más de treinta años después de su muerte. " +
    "En la película Amadeus (1984), el viejo Salieri la toca, y un sacerdote reconoce la melodía al instante.",
  funFact: "El título significa «una pequeña serenata», y Mozart la anotó él mismo en su lista de obras.",
  versions: {
    common: {
      tips: [
        "El pulgar en el re, el dedo 2 en el sol, el dedo 4 en el si y el dedo 5 en el re agudo.",
        "Toca el sol corto y brillante, como si las cuerdas lo lanzaran de un golpe.",
        "Aprovecha el silencio después del re agudo para llevar los dedos 2, 3 y 5 al fa sostenido, al la y al do.",
      ],
      tricky: {
        5: "Tu mano se movió durante el silencio. Ahora el dedo 5 toca el do, y el dedo 3 toca el la.",
        7: "Baja por el do, el la y el fa sostenido con los dedos 5, 3 y 2, y luego vuelve a subir al la.",
      },
    },
    rare: {
      tricky: {
        5: "Mueve la mano en el silencio del compás 4. El dedo 5 cae en el do, y el dedo 3 en el la.",
        7: "Baja por el do, el la y el fa sostenido con los dedos 5, 3 y 2, y luego vuelve a subir al la.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las dobles notas de la mano derecha, en terceras y sextas, y presiona las dos notas de cada par como una sola.",
        "Junta las manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
    },
    legendary: {
      tricky: {
        2: "Levanta la octava de sol, y luego salta hacia abajo a la octava de re. Mantén la mano abierta.",
        3: "Cuatro octavas seguidas: sol, re, sol y si. Levanta un poco la mano después de cada una.",
      },
    },
  },
};

/** The guide of *Toccata and Fugue in D minor* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La Tocata y fuga en re menor de Bach se publicó por primera vez en 1833, cuando la música de Bach volvía a descubrirse. " +
    "Felix Mendelssohn la impulsó y la tocó en 1840 con gran éxito. " +
    "La película de Walt Disney Fantasia (1940) empieza con ella.",
  funFact: "La obra siguió casi desconocida hasta su primera edición, más de ochenta años después de la muerte de Bach.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 3 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 4 a 6 con la mano derecha sola. La misma idea vuelve una octava más abajo.",
        "Ahora la mano izquierda sola. En los compases 7 y 8 sube por un acorde oscuro, nota por nota.",
        "Junta las dos manos, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa, fuerte y con decisión.",
      ],
      tips: [
        "Toca el primer la fuerte y mantenlo durante todo el compás, como un gran órgano.",
        "Después del silencio, el dedo 5 baja al sol. Luego cada dedo toca una nota más abajo.",
        "Este acorde suena oscuro y tenso. Déjalo flotar en el aire, y luego disfruta del acorde brillante del compás 9.",
      ],
      tricky: {
        2: "Usa el silencio para bajar el dedo 5 del la al sol. Luego el pasaje baja dedo por dedo.",
        4: "Usa el silencio del compás 3 para bajar la mano una octava. El dedo 5 llega al la.",
      },
    },
    rare: {
      tips: [
        "Toca el la largo con fuerza, y luego deja que el pasaje rápido ruede hasta el re.",
        "El pedal mantiene sonando cada nota de la subida, así que el acorde crece nota por nota.",
        "El fa sostenido hace brillante este acorde. Es la respuesta a toda la tensión de antes.",
      ],
      tricky: {
        2: "Usa el silencio para bajar el dedo 5 del la al sol. Luego el pasaje baja dedo por dedo.",
        4: "Usa el silencio del compás 3 para bajar la mano derecha una octava. El dedo 5 llega al la.",
      },
    },
    epic: {
      tricky: {
        4: "Usa el silencio del compás 3 para bajar la mano derecha una octava. Luego toca el mordente la, sol, la y mantén el la.",
      },
    },
    legendary: {
      practice: [
        "Toca las octavas de la mano derecha sola en los primeros seis compases. Mantén la mano abierta, con el pulgar y el meñique listos.",
        "Toca con la mano izquierda sola. Cada arpegio abarca dos octavas, y el bajo stride salta entre el bajo y el acorde.",
        "Junta las manos en los compases 7 a 9, donde las manos se turnan para subir por el acorde oscuro.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que el último acorde ruja.",
      ],
      tips: [
        "Las octavas hacen que la melodía suene como un órgano. Deja que la nota de arriba suene un poco más fuerte.",
        "La mano izquierda empieza la subida y la mano derecha la termina. Debe sonar como un solo pasaje largo.",
        "El bajo repite como un eco el pasaje del comienzo, en octavas. Haz que retumbe como los tubos más graves de un órgano.",
      ],
    },
  },
};

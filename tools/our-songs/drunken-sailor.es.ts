/** The guide of *Drunken Sailor* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor es una canción marinera que las tripulaciones cantaban mientras jalaban cuerdas o hacían girar el cabrestante. " +
    "Nadie sabe quién la escribió, y su melodía está en el modo dórico.",
  funFact: "El primer relato escrito de esta canción marinera viene de un viaje ballenero de 1839, que partió de New London, Connecticut.",
  versions: {
    common: {
      tips: [
        "Cada mitad del compás va larga, corta, corta. Zapatéala como un marinero en la cubierta.",
        "El dedo 5 toca el la, y luego el pulgar baja hasta el re. La mano se queda donde está.",
        "Toca el último la del compás 5 con el dedo 2. Así los dedos 3, 4 y 5 quedan listos para el si, el do y el re.",
      ],
      tricky: {
        3: "El dedo 4 toca el sol seis veces: larga, corta, corta, larga, corta, corta. Toca ligeras las notas cortas.",
        7: "El dedo 5 baja de re a do. Luego los dedos 4, 3 y 2 bajan al la, al sol y al mi.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave, y luego dos notas en el tiempo siguiente.",
        "Toca la mano derecha sola en los ocho primeros compases, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tricky: {
        3: "El dedo 4 toca el sol seis veces, mientras la mano izquierda toca el do y luego el sol. Mantén las dos manos parejas.",
        7: "Después del re largo, el dedo 5 baja al do. La mano izquierda toca el do, luego el fa y el la, y luego el do y el sol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

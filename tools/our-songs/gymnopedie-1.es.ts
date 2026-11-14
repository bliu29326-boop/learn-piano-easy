/** The guide of *Gymnopédie No. 1* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie terminó sus tres Gymnopédies en 1888, y la primera se publicó ese mismo verano en una revista. " +
    "Lleva la indicación «Lent et douloureux», que significa lento y doloroso. " +
    "La película The Royal Tenenbaums (2001) la usa.",
  funFact: "Claude Debussy, amigo de Satie, arregló más tarde la primera y la tercera Gymnopédie para orquesta.",
  versions: {
    common: {
      practice: [
        "Toca la mano izquierda sola. Mantiene una quinta abierta en cada compás.",
        "Toca los compases 5 a 8 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las dos manos en los compases 5 a 8, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Toca suaves las quintas y déjalas sonar. Se mecen como un bote lento.",
        "Levanta el pulgar del si un poco antes. Así baja al la a tiempo.",
        "Ve un poco más despacio al final, y deja que el último do se apague.",
      ],
      tricky: {
        7: "Tu pulgar baja del si al la. Luego los dedos 2 y 3 suben al si y al do.",
      },
    },
    rare: {
      tips: [
        "Mantén el pedal pisado durante cada compás entero, y cámbialo justo en la línea divisoria.",
        "El pulgar toca el si y luego baja al la. Mantén sueltos los otros dedos.",
        "Deja que los dos últimos compases suenen suaves, como el final de una canción de cuna.",
      ],
      tricky: {
        7: "Tu pulgar baja del si al la. Mantén la mano cerca de las teclas.",
      },
    },
    epic: {
      tricky: {
        6: "Tu pulgar se estira hacia abajo hasta el do sostenido mientras el dedo 3 suelta el fa sostenido.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola. En el silencio corto, salta de la octava grave hacia arriba al acorde.",
        "Toca los compases 5 a 8 con las dos manos juntas, despacio.",
        "Toca solos los acordes de la mano derecha, y levanta la mano entre uno y otro.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
    },
  },
};

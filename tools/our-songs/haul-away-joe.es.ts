/** The guide of *Haul Away Joe* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe es una canción marinera corta para tirar de un cabo. " +
    "R. R. Terry la publicó en 1921 como canción marinera para cobrar la escota de trinquete.",
  funFact: "Una estrofa de la edición de Terry habla del rey Luis de Francia, que perdió la cabeza en la Revolución.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí el estribillo baja hasta el re grave.",
        "Ahora la mano izquierda sola. Mantiene dos teclas y las cambia como mucho dos veces por compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tricky: {
        2: "El dedo 5 toca el do tres veces. Luego el dedo 3 toma el la, y el dedo 2 espera sobre el sol.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave larga y luego un acorde corto.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cada medio compás de la mano izquierda tiene una nota larga y un acorde corto. Siente el tirón: largo, corto.",
        "Los dedos 1 y 5 presionan las sextas como una sola nota. Luego el dedo 5 se queda en la nota de arriba.",
        "Termina con el re y el fa juntos. Los dedos 1 y 3 los presionan como una sola nota.",
      ],
      tricky: {
        5: "Abre los dedos 1 y 5 sobre el fa y el re para la sexta. Luego el dedo 5 vuelve a tocar el re solo.",
      },
    },
    epic: {},
    legendary: {},
  },
};

/** The guide of *Air on the G String* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach escribió esta aria como movimiento lento de su tercera Suite orquestal. " +
    "En 1871, el violinista August Wilhelmj la arregló para que un violín tocara toda la melodía en su cuerda más grave, la cuerda de sol. " +
    "La película Se7en (1995) la usa mientras dos detectives revisan fotos de un crimen.",
  funFact:
    "Wilhelmj escribió «auf der G-Saite», que significa «en la cuerda de sol», sobre la parte del violín, y de ahí viene el apodo de la pieza.",
  versions: {
    common: {
      tips: [
        "Mantén el primer mi durante un compás entero y escucha. Un violín canta esta nota con un solo arco largo.",
        "Levanta el pulgar del do por un momento. Así el dedo 2 cae en el si, y la mano se queda ahí.",
        "Cada nota larga llena un compás entero. Cuenta ocho tiempos lentos y espera uno más antes de la nota siguiente.",
      ],
      tricky: {
        3: "Levanta el pulgar del do por un momento y luego toca el si con el dedo 2.",
        8: "Después del silencio, el dedo 4 toca el re. Luego el pulgar baja hasta el sol.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Primero suena la nota del bajo, y el acorde de dos notas le responde.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito. La melodía aparece dos veces.",
        "Ahora tócala a velocidad completa.",
      ],
      tricky: {
        6: "Después del silencio, el dedo 5 toma el mi. Luego los dedos 2 y 1 tocan el si bemol y el la.",
        14: "El mismo movimiento que en el compás 6: el dedo 5 en el mi, y luego el si bemol con el dedo 2.",
        19: "La mano derecha toca el do y el mi a la vez. La mano izquierda se abre sobre el do, el mi y el sol con los dedos 5, 3 y 1.",
      },
    },
    epic: {
      tricky: {
        14: "Toca cada par como una sola nota, y deja que el dedo de arriba cante la melodía. El pulgar toma casi todas las notas de abajo.",
      },
    },
    legendary: {
      tricky: {
        9: "Aprovecha el silencio del principio para subir la mano una octava. Luego toma cuatro notas con los dedos 1, 2, 3 y 5.",
      },
    },
  },
};

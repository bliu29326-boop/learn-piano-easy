/** The guide of *Can-can* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach escribió el Galop infernal para la fiesta desenfrenada de los dioses con la que termina su opereta Orfeo en los infiernos, estrenada en 1858. " +
    "En la década de 1890, los cabarets parisinos Moulin Rouge y Folies Bergère lo tomaron para acompañar el cancán. " +
    "La película Moulin Rouge! de 2001 lo usa en su banda sonora.",
  funFact: "Su melodía comparte sus notas principales con dos canciones mucho más lentas del mismo acto, y aun así no se parece en nada a ellas.",
  versions: {
    common: {
      practice: [
        "Toca los primeros siete compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 8 a 16 con la mano derecha sola. La mano se queda en el mismo lugar.",
        "Ahora la mano izquierda sola. Mantiene una forma durante un compás entero o medio compás.",
        "Junta las dos manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén el primer sol durante cuatro tiempos. Las bailarinas esperan a que empiece la música.",
        "El dedo 5 toca los dos primeros re. Luego el dedo 4 toma el re, para que el dedo 5 alcance el mi.",
        "Toca las negras cortas y saltarinas, como bailarinas que lanzan las piernas al aire.",
      ],
      tricky: {
        4: "Cambia del dedo 5 al dedo 4 en el re. Luego el dedo 5 alcanza el mi, y el dedo 2 baja al si.",
        5: "El dedo 3 deja el do, y el dedo 2 toca el la dos veces. Mantén cada la durante dos tiempos.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Una nota del bajo llega en el pulso, y una doble nota le responde.",
        "Toca los primeros siete compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa, como en un salón de baile a medianoche.",
      ],
      tricky: {
        4: "Cambia del dedo 5 al dedo 4 en el re. Luego el dedo 5 alcanza el mi, y el dedo 2 baja al si.",
      },
    },
  },
};

/** The guide of *Boléro* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ravel escribió el Boléro para orquesta en 1928, y Durand lo publicó por primera vez en 1929. " +
    "Dos melodías se turnan sobre un único ritmo de caja, que crece de suave a fuerte. " +
    "La película 10, de 1979, le dio un lugar destacado, y sus ventas se dispararon.",
  funFact: "Ravel tocó la melodía por primera vez con un solo dedo para su amigo Gustave Samazeuilh, y le preguntó si tenía algo insistente.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. La melodía baja despacio hasta el do.",
        "Ahora la mano izquierda sola. Mantiene una nota o una quinta durante todo un compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Toca suave y parejo, como una flauta a lo lejos. El volumen de la melodía casi no debe cambiar.",
        "Toma el do largo con el dedo 5. Así el dedo 2 puede bajar hasta el mi sin mover la mano.",
        "Al comienzo del compás 6, toca el mi otra vez con el dedo 3. Así el pulgar queda listo para el do.",
      ],
      tricky: {
        2: "El dedo 2 toca el la, y luego el dedo 5 toma el do largo. Después los dedos 4 y 5 tocan el si y el do.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: la fundamental, la quinta y luego las dos, una en cada tiempo.",
        "Toca los compases 5 y 6 con la mano derecha sola. El pulgar baja dos veces.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cuenta tres tiempos lentos en cada compás. La mano izquierda toca una vez en cada tiempo, como un tambor tranquilo.",
        "Después del mi, el pulgar baja al re. En el compás siguiente vuelve a bajar, hasta el do.",
        "Presiona el do y el mi a la vez, y déjalos sonar hasta el final.",
      ],
      tricky: {
        5: "Después del sol largo, los dedos 4 y 5 suben hasta el si. Al final, el pulgar toca el mi y luego baja al re.",
        6: "El dedo 2 toca el mi, y el pulgar toca el re. Luego el pulgar baja al do y se queda ahí.",
      },
    },
    epic: {
      tricky: {
        6: "El pulgar baja de re a do, mientras la mano izquierda sigue con el ritmo del tambor.",
      },
    },
  },
};

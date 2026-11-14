/** The guide of *Ave Maria* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert compuso esta canción en 1825, a partir de una traducción alemana del poema La dama del lago, de Walter Scott. " +
    "Es la tercera canción de Ellen, y se publicó en 1826 como parte de su opus 52. " +
    "La película Fantasia (1940), de Walt Disney, la usa en su parte final, justo después de Una noche en el monte pelado.",
  funFact: "En Fantasia, las campanas del final de Una noche en el monte pelado parecen convertirse en campanas de iglesia que llevan al Ave Maria.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 7 con la mano derecha sola. La mano se queda en el mismo lugar.",
        "Ahora la mano izquierda sola. Mantiene cada nota del bajo durante medio compás o más.",
        "Junta las dos manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Canta las notas largas en tu cabeza. La melodía es una oración, así que tócala suave.",
        "El pulgar descansa en el la y el dedo 5 en el mi. Cada nota de la mano derecha queda bajo un dedo.",
        "Las últimas cuatro notas son parejas. Cuéntalas uno, dos, tres, cuatro.",
      ],
    },
    rare: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Primero suena una nota del bajo, y un acorde de dos notas le responde.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
    },
  },
};

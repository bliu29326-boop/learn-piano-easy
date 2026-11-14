/** The guide of *Swan Lake* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaikovsky escribió la música del ballet El lago de los cisnes en 1875 y 1876, y el Ballet Bolshói lo estrenó en 1877. " +
    "Este tema es la melodía del oboe del segundo acto. " +
    "La película Black Swan (2010) incluye escenas de El lago de los cisnes.",
  funFact: "Vladimir Begichev encargó la partitura en mayo de 1875, y Tchaikovsky recibió 800 rublos por ella.",
  versions: {
    common: {
      tips: [
        "Mantén el primer mi mientras cuentas hasta cuatro. Luego cuatro notas cortas suben del la al re.",
        "Es una melodía triste y orgullosa. Deja cantar cada nota aguda larga.",
        "En este compás, el dedo 2 toca el la, para que el pulgar llegue abajo hasta el fa.",
      ],
      tricky: {
        3: "Aquí toca el la con el dedo 2. Luego el pulgar baja hasta el fa, y el dedo 3 toma el do.",
        7: "Como en el compás 3, el dedo 2 toca el la, y el pulgar baja hasta el fa.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Una nota grave llega en el pulso, y un acorde de dos notas le responde.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
    },
  },
};

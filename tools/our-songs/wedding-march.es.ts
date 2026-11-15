/** The guide of *Wedding March* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn escribió esta marcha en 1842 como parte de su música para El sueño de una noche de verano, de Shakespeare. " +
    "Se volvió una de las favoritas en las bodas después de que Victoria, la princesa real, la eligiera para la suya en 1858. " +
    "Las películas todavía la ponen cada vez que una pareja sale del altar.",
  funFact:
    "La primera boda conocida que usó esta marcha fue la de Tiverton, Inglaterra, el 2 de junio de 1847, con el organista Samuel Reay.",
  versions: {
    common: {
      tricky: {
        2: "Mantén el si con el dedo 4 durante seis tiempos. Luego el pulgar toca el fa sostenido.",
        4: "La mano ya bajó. El dedo 4 toca el fa, y el dedo 2 toca el re.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Toca un acorde en cada tiempo, como una banda de música en un desfile.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tricky: {
        1: "Mantén el do agudo con el dedo 5. La mano izquierda toca el la, el do y el fa en cada tiempo.",
        2: "La mano izquierda toca el la y el re. Mantén el si en la mano derecha mientras el acorde se repite.",
        4: "El dedo 4 toca el fa, y el dedo 2 toca el re. La mano izquierda se queda en el si, el re y el sol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

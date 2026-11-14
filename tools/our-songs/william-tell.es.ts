/** The guide of *William Tell Overture* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La ópera Guillermo Tell, de Rossini, se estrenó en 1829, y fue la última de sus 39 óperas. " +
    "Su obertura termina con un galop rápido, que a menudo se llama «Marcha de los soldados suizos». " +
    "Ese final se volvió el tema musical de The Lone Ranger en la radio, la televisión y el cine.",
  funFact:
    "Algunos escritores han definido a un intelectual como un hombre que puede escuchar la obertura de Guillermo Tell sin pensar en el Lone Ranger.",
  versions: {
    rare: {
      practice: [
        "Toca los primeros cinco compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca con la mano izquierda sola. Toca un acorde en cada medio compás.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa, como un caballo al galope.",
      ],
    },
    epic: {
      tricky: {
        17: "Usa el silencio después del la largo para subir el pulgar hasta el mi agudo.",
      },
    },
    legendary: {
      tricky: {
        13: "Las octavas bajan del fa sostenido al si. Mantén la mano abierta, y deja que rebote en cada una.",
      },
    },
  },
};

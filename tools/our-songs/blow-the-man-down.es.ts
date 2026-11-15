/** The guide of *Blow the Man Down* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down es una canción marinera de driza, que la tripulación cantaba mientras subía una vela pesada por el mástil. " +
    "Nuestra melodía sigue la edición impresa de R. R. Terry de 1921.",
  funFact: "Un periódico de Syracuse, Nueva York, citó un verso de la canción en 1867. Unos marineros la habían cantado en un barco de vapor de Nueva York a Glasgow.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 7 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 8 a 17 con la mano derecha sola. La mano se mueve dos veces, siempre después de una nota larga.",
        "Ahora la mano izquierda sola. Mantiene una o dos notas durante todo un compás.",
        "Junta las dos manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el sol. El dedo 2 toma el si, el dedo 4 toma el re y el dedo 5 toma el mi.",
        "Mantén el primer re durante tres tiempos, y luego toca el mi durante un tiempo. El mi corto tira como una cuerda.",
        "Los marineros cantaban esto mientras subían una vela. Apóyate un poco en la primera nota de cada compás, como en un tirón.",
      ],
      tricky: {
        8: "Después del mi largo, la mano baja. El dedo 4 cae en el do, y el pulgar espera sobre el fa sostenido.",
        13: "El dedo 4 se estira desde el la hasta el mi, y el dedo 5 toca el sol agudo.",
        14: "Después del sol agudo, el dedo 5 baja hasta el re. Toca el re tres veces: corto, largo y luego mediano.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave larga, y luego un acorde corto.",
        "Toca la mano derecha sola en los primeros siete compases, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 8 a 17, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tricky: {
        8: "Después del acorde de do y mi, la mano baja. El dedo 4 cae en el do. La mano izquierda toca el re, y luego el la y el re a la vez.",
        13: "El dedo 4 se estira desde el la hasta el mi, y el dedo 5 toca el sol agudo. La mano izquierda toca el do, y luego el sol y el do a la vez.",
        14: "El dedo 5 baja del sol agudo hasta el re y lo toca tres veces. Mantén la muñeca suelta.",
      },
    },
    epic: {},
    legendary: {},
  },
};

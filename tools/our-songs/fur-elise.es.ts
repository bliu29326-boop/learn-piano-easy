/** The guide of *Für Elise* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escribió esta breve pieza para piano en 1810, y su manuscrito la dedica a Elise. " +
    "Nadie sabe con certeza quién era Elise. " +
    "Ludwig Nohl encontró la pieza y la publicó en 1867, cuarenta años después de la muerte de Beethoven.",
  funFact: "Una teoría dice que Nohl leyó mal el nombre, y que la pieza en realidad era para Therese Malfatti, con quien Beethoven esperaba casarse.",
  versions: {
    common: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano derecha sola desde el compás 5, donde la mano baja al do central.",
        "Ahora la mano izquierda sola. Mantiene dos formas, una por compás.",
        "Junta las dos manos en los ocho primeros compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Balancea la mano entre los dedos 5 y 4 para el mi y el re sostenido, como un columpio suave.",
        "Aquí la mano izquierda espera. Toca la melodía suave, como si contaras un secreto.",
        "Levanta la mano en el silencio después del la, y apoya el pulgar en el do central.",
      ],
      tricky: {
        5: "Después del silencio, tu pulgar cae en el do central. Mira hacia abajo antes de tocarlo.",
        7: "Tu pulgar toma la tecla negra sol sostenido, para que la mano pueda subir hasta el do.",
        13: "La mano vuelve a bajar al do central. Aprovecha el silencio del compás 12 para llegar.",
      },
    },
    rare: {
      practice: [
        "Toca la mano derecha sola, despacio, en los ocho primeros compases.",
        "Toca la mano izquierda sola. Cada acorde sube desde el bajo, una nota por tiempo.",
        "Junta las manos en los compases 4 a 8, donde se turnan.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda sube, y luego la mano derecha sigue subiendo. Debe sonar como una sola mano.",
        "El pulgar en el mi, el meñique en el mi agudo. Abre la mano sobre toda la octava.",
        "El sol sostenido del bajo hace que el acorde suene brillante. Esa nota lleva el oído de vuelta a casa, al la.",
      ],
      tricky: {
        5: "Aprovecha el silencio después del la para bajar el pulgar derecho al do central.",
        6: "La mano izquierda se abre mucho: el dedo 2 toca el si, y el pulgar sube hasta el sol sostenido.",
        14: "La misma extensión que en el compás 6: el dedo 2 toca el si, y el pulgar izquierdo sube hasta el sol sostenido.",
      },
    },
    legendary: {
      tricky: {
        20: "Levanta la mano del do agudo, y luego toma las notas la, do, mi y la con los dedos 1, 2, 3 y 5.",
        28: "Vuelve el acorde de cuatro notas. Primero suelta el do agudo, y luego apoya la mano sobre toda la octava.",
      },
    },
  },
};

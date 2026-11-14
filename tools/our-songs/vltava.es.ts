/** The guide of *Vltava* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana escribió Vltava en 1874. Es el segundo de seis poemas sinfónicos de su ciclo Má vlast, «Mi patria». " +
    "Su música pinta el río que pasa por Praga. " +
    "La película The Tree of Life (2011), de Terrence Malick, la usa.",
  funFact:
    "Su famosa melodía es una adaptación de La Mantovana, una melodía que se atribuye al tenor italiano del Renacimiento Giuseppe Cenci.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 5 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 9 con la mano derecha sola. Ahí la melodía baja caminando hasta el mi.",
        "Ahora la mano izquierda sola. Mantiene cada forma un compás entero, y nunca se mueve.",
        "Junta las dos manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el si. Luego los dedos 2 a 5 suben del mi al la.",
        "Suelta el la un poco antes. En el hueco corto, sube la mano una tecla, con el dedo 4 en el si.",
        "Cuenta seis tiempos en cada compás: largo, corto, largo, corto. El río sigue fluyendo y nunca se apura.",
      ],
      tricky: {
        3: "El dedo 4 toca el si tres veces. La mano acaba de subir una tecla, así que el dedo 5 espera sobre el do.",
        8: "Toca los dos primeros fa sostenido con el pulgar, y el tercero con el dedo 2. Así el pulgar queda libre para el mi.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave larga, y luego una nota o un acorde corto.",
        "Toca los primeros nueve compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cada medio compás tiene una nota larga y una corta, en las dos manos. Siente el vaivén: largo, corto.",
        "Suelta el la un poco antes. En el hueco corto, sube la mano una tecla, con el dedo 4 en el si.",
        "Termina con el mi y el sol juntos. Los dedos 1 y 3 los presionan como una sola nota.",
      ],
      tricky: {
        3: "Después de que la mano suba, el dedo 4 toca el si tres veces. La mano izquierda toca un mi largo, y luego un si corto.",
      },
    },
  },
};

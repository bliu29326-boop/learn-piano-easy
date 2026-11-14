/** The guide of *Symphony No. 7: Allegretto* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escribió su Séptima Sinfonía en 1811 y 1812. " +
    "En su estreno en Viena, en diciembre de 1813, el público exigió escuchar otra vez el Allegretto. " +
    "La película The King's Speech (2010) lo pone de fondo bajo el discurso radial del rey en tiempos de guerra.",
  funFact: "La melodía suena primero en lo grave, en las violas y los violonchelos.",
  versions: {
    common: {
      tips: [
        "Di «larga, corta, corta» mientras tocas el primer compás. Ese ritmo es toda la pieza.",
        "Tu mano nunca se mueve. Los dedos 1, 2 y 3 tocan el mi, el fa sostenido y el sol.",
        "Empieza muy suave, y deja que cada compás suene un poco más fuerte.",
      ],
    },
    rare: {
      tips: [
        "Aquí la mano izquierda baja un poco. El dedo 5 pasa de sol sostenido a sol.",
        "Mantén el pedal pisado durante cada compás entero, y cámbialo justo en la línea divisoria.",
        "Ahora la mano izquierda toca en cada tiempo. Mantenla pareja, como una marcha lenta.",
      ],
      tricky: {
        15: "La mano izquierda se mece entre el sol y el re con los dedos 5 y 2.",
        16: "Toca el mi y el sol a la vez con los dedos 1 y 3. Luego levanta la mano derecha en el silencio.",
      },
    },
    epic: {
      tips: [
        "Mantén suaves los acordes arpegiados, para que el mi repetido cante por encima.",
        "Cambia el pedal en el último tiempo, donde el acorde pasa a re mayor.",
        "Cambia el pedal tres veces en este compás, una por cada acorde nuevo.",
      ],
    },
    legendary: {},
  },
};

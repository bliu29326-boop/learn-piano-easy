/** The guide of *The Sailor's Hornpipe* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe es una melodía de baile animada, muy ligada a la Marina Real británica. " +
    "Las primeras colecciones la imprimieron como The College Hornpipe.",
  funFact: "Los dibujos animados de Popeye de Max Fleischer empezaban con este hornpipe, así que mucha gente lo conoce como la melodía de Popeye.",
  versions: {
    common: {
      tricky: {
        4: "Después del do, el pulgar pasa por debajo hasta el si. Luego los dedos 2 y 4 suben al re y al sol.",
      },
    },
    rare: {
      tricky: {
        4: "Después del do, el pulgar pasa por debajo hasta el si. Luego los dedos 2 y 4 suben al re y al sol.",
      },
    },
    epic: {
      tricky: {
        17: "Toca el último acorde con las dos manos a la vez. Deja que el pedal lo sostenga hasta el final.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava en el pulso, y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca los arpegios de la mano izquierda sola. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios rueden suave debajo de los pasajes de la mano derecha.",
        "Cada acorde se suelta un poco antes. Usa ese hueco para llevar toda la mano al acorde siguiente.",
      ],
    },
  },
};

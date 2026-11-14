/** The guide of *Morning Mood* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg escribió Morning Mood en 1875 para la obra de teatro Peer Gynt, de Ibsen, y la publicó en su primera Suite Peer Gynt en 1888. " +
    "Su melodía usa solo cinco notas de la escala, y va y viene entre la flauta y el oboe. " +
    "La película Soylent Green, de 1973, la usa mientras un hombre que se muere escucha la música que eligió.",
  funFact: "La música pinta un amanecer en el desierto de Marruecos, y no sobre un fiordo noruego, como imagina casi todo el público.",
  versions: {
    common: {
      tips: [
        "Tu pulgar derecho está en el do central, y el dedo 5 empieza en el sol. Los dedos 2 y 3 descansan sobre re y mi.",
        "Después del primer do, cuatro notas cortas se mecen entre re y mi. Cuéntalas parejas.",
        "Toca suave, como un amanecer lento. Cada nota debe fluir hacia la siguiente.",
      ],
      tricky: {
        5: "Aquí el dedo 2 toma el mi, y el dedo 4 el sol. Así el dedo 5 queda libre para el la agudo del compás 6.",
        7: "El dedo 5 vuelve del la al sol. La mano izquierda pasa a re y sol a mitad del compás.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave y luego una doble nota dos veces. La mano se queda quieta.",
        "Toca con la mano derecha sola en los primeros ocho compases, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda toca en cada tiempo. Cuenta uno, dos, tres, dos veces en cada compás.",
        "Mantén suaves los acordes de la mano izquierda, para que la melodía flote por encima como la luz de la mañana.",
        "Termina con sol y si juntos. Los dedos 1 y 3 los presionan como uno solo.",
      ],
      tricky: {
        7: "El dedo 5 vuelve del mi al re. La mano izquierda pasa al la y al re a mitad del compás.",
      },
    },
  },
};

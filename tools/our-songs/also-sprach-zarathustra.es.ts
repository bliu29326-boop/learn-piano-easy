/** The guide of *Also sprach Zarathustra* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Richard Strauss escribió este poema sinfónico en 1896, a partir de un libro del filósofo Friedrich Nietzsche. " +
    "Su fanfarria inicial pinta un amanecer que se eleva sobre un do grave y largo. " +
    "La película de Stanley Kubrick 2001: A Space Odyssey (1968) empieza con ella.",
  funFact: "Las tres notas que suben, do, sol y do, son la segunda, la tercera y la cuarta nota de la serie armónica de un do grave.",
  versions: {
    common: {
      practice: [
        "Toca los primeros dos compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Ahora toca los compases 3 a 8 con la mano derecha. Tu pulgar se queda cerca del sol.",
        "Toca la mano izquierda sola. Mantiene una quinta abierta en cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Esto es un amanecer. Toca cada nota larga completa, y déjala sonar hasta el final.",
        "Aquí el mi se vuelve un mi bemol, y el sonido brillante se vuelve oscuro. Escucha el cambio.",
        "El compás 3 omite el do grave, para que tu pulgar pueda esperar en el sol.",
      ],
      tricky: {
        1: "Tu pulgar toca el do central y luego sube hasta el sol. Muévelo durante la nota larga.",
        8: "Las dos manos vuelven a casa. La izquierda regresa al do y al sol, y la derecha termina en el mi.",
      },
    },
    rare: {
      practice: [
        "Toca los compases 3 a 6 con la mano derecha sola. Esta es la melodía del amanecer.",
        "Toca solos los acordes de dos notas de la mano derecha, en los compases 9 a 16.",
        "Toca la mano izquierda sola. En los compases 7 y 8, golpea el do y el sol como un timbal.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda empieza sola, como una nota grave de órgano antes del alba. Mantenla durante los dos compases.",
        "Toca las notas de tambor de forma pareja, una en cada tiempo, y cada vez un poco más fuerte.",
        "La nota de arriba de cada acorde lleva la melodía. Tócala un poco más fuerte.",
      ],
      tricky: {
        3: "Tu pulgar toca el do central y luego sube hasta el sol durante la nota larga.",
        15: "Aquí la mano izquierda toca un acorde de do completo. Abre los dedos 5, 3 y 1 sobre el do, el mi y el sol.",
      },
    },
    epic: {
      tips: [
        "Mantén la octava grave con el pedal pisado. Debe retumbar como un gran órgano.",
        "El mi brillante se vuelve un mi bemol oscuro. Toca el mi bemol un poco más suave.",
        "Golpea el do y el sol como un timbal, y crece en volumen hasta el compás 9.",
      ],
      tricky: {
        3: "La mano derecha entra en el do central mientras la mano izquierda sube una octava. El silencio del compás 2 le da tiempo.",
      },
    },
    legendary: {
      tips: [
        "Fija la mano en una octava, con el pulgar y el meñique. El brazo la lleva de tecla en tecla.",
        "Para los acordes de cuatro notas, usa los dedos 1, 2, 3 y 5. El dedo 4 descansa.",
        "Cada acorde sube más alto y suena más fuerte. Guarda tu sonido más fuerte para el último acorde de do.",
      ],
      tricky: {
        11: "La mano derecha baja de un salto del acorde agudo a la octava sobre el do central. Aprovecha el silencio de antes.",
      },
    },
  },
};

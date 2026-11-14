/** The guide of *Piano Concerto No. 21: Andante* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart terminó este concierto el 9 de marzo de 1785, cuatro semanas después del anterior. " +
    "Su movimiento lento, el Andante, canta una melodía larga sobre acordes suaves y repetidos. " +
    "La película Elvira Madigan (1967) lo usa, y hoy el concierto es muy conocido por ese nombre.",
  funFact: "Mozart terminó el concierto solo cuatro semanas después de su Concierto para piano n.º 20.",
  versions: {
    common: {
      tips: [
        "Mantén el primer fa durante siete tiempos. El do corto llega justo antes de la siguiente nota larga.",
        "El dedo 4 mantiene el do agudo. Luego los dedos 5, 4, 3 y 2 tocan cuatro notas rápidas.",
        "Toca suave y ligado, como si tararearas una canción de cuna.",
      ],
      tricky: {
        5: "El dedo 3 sube de sol a si bemol. Luego los dedos 5, 4 y 3 tocan re, do y si bemol.",
      },
    },
    rare: {
      tricky: {
        5: "El dedo 3 sube de sol a si bemol. Luego los dedos 5, 4 y 3 tocan re, do y si bemol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

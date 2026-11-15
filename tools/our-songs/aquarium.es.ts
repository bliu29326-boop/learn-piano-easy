/** The guide of *Aquarium* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium es el séptimo movimiento de El carnaval de los animales, una broma musical que Saint-Saëns escribió en 1886. " +
    "La suite se publicó en 1922, un año después de su muerte. " +
    "La película de 1978 de Terrence Malick, Days of Heaven, la usa en sus créditos iniciales.",
  funFact:
    "Mientras vivió, Saint-Saëns prohibió tocar la suite en público, por miedo a que sus bromas dañaran su fama de compositor serio.",
  versions: {
    common: {
      tricky: {
        1: "Alterna entre el mi y el re sostenido con los dedos 5 y 4. Luego el dedo 4 se desliza al re de la tecla blanca.",
        3: "El compás 3 es otra vez el compás 1. Mantén el dedo 4 cerca de la tecla negra, para que el re sostenido salga fácil.",
      },
    },
    rare: {
      tricky: {
        1: "Alterna entre el mi y el re sostenido con los dedos 5 y 4, mientras la mano izquierda pasa del la al do.",
        3: "Como en el compás 1, los dedos 5 y 4 se mecen entre el mi y el re sostenido. Luego el dedo 4 toma el re de la tecla blanca.",
      },
    },
    epic: {},
    legendary: {},
  },
};

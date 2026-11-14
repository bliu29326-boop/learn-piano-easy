/** The guide of *Swan Lake* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaïkovski a écrit la musique du ballet « Le Lac des cygnes » en 1875 et 1876, " +
    "et le Ballet du Bolchoï l’a monté pour la première fois en 1877. " +
    "Ce thème est la mélodie du hautbois au deuxième acte. " +
    "Le film Black Swan (2010) contient des séquences du « Lac des cygnes ».",
  funFact: "Vladimir Begitchev a commandé la partition en mai 1875, et Tchaïkovski a reçu 800 roubles pour ce travail.",
  versions: {
    common: {
      tips: [
        "Tiens le premier mi en comptant jusqu’à quatre. Puis quatre notes courtes montent du la au ré.",
        "C’est une mélodie triste et fière. Laisse chanter chaque longue note aiguë.",
        "Dans cette mesure, le doigt 2 joue le la, pour que le pouce puisse descendre jusqu’au fa.",
      ],
      tricky: {
        3: "Ici, joue le la avec le doigt 2. Puis le pouce descend jusqu’au fa, et le doigt 3 prend le do.",
        7: "Comme à la mesure 3, le doigt 2 joue le la, et le pouce descend jusqu’au fa.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave arrive sur le temps, et un accord de deux notes lui répond.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
    },
  },
};

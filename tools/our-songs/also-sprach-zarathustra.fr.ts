/** The guide of *Also sprach Zarathustra* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Richard Strauss a écrit ce poème symphonique en 1896, d’après un livre du philosophe Friedrich Nietzsche. " +
    "Sa fanfare d’ouverture peint un lever de soleil, qui monte au-dessus d’un do très grave et tenu. " +
    "Le film de Stanley Kubrick « 2001, l’Odyssée de l’espace » (1968) s’ouvre sur elle.",
  funFact:
    "Les trois notes qui montent, do, sol et do, sont les deuxième, troisième et quatrième notes de la série harmonique d’un do grave.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Maintenant, joue les mesures 3 à 8 à la main droite. Le pouce reste près du sol.",
        "Joue la main gauche seule. Elle tient une quinte à vide par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "C’est un lever de soleil. Joue chaque note longue pleinement, et laisse-la sonner jusqu’au bout.",
        "Ici, le mi devient mi bémol, et le son clair devient sombre. Écoute ce changement.",
        "La mesure 3 laisse de côté le do grave, pour que le pouce puisse attendre sur le sol.",
      ],
      tricky: {
        1: "Le pouce joue le do central, puis monte jusqu’au sol. Déplace-le pendant la note longue.",
        8: "Les deux mains rentrent à la maison. La main gauche revient sur do et sol, et la main droite finit sur le mi.",
      },
    },
    rare: {
      practice: [
        "Joue les mesures 3 à 6 à la main droite seule. C’est la mélodie du lever de soleil.",
        "Joue seuls les accords de deux notes de la main droite, aux mesures 9 à 16.",
        "Joue la main gauche seule. Aux mesures 7 et 8, elle frappe do et sol comme des timbales.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche commence seule, comme une note d’orgue grave avant l’aube. Tiens-la pendant les deux mesures.",
        "Joue les notes de timbales bien régulières, une sur chaque temps, et un peu plus fort à chaque fois.",
        "La note du haut de chaque accord porte la mélodie. Joue-la un peu plus fort.",
      ],
      tricky: {
        3: "Le pouce joue le do central, puis monte jusqu’au sol pendant la note longue.",
        15: "Ici, la main gauche joue un accord de do majeur complet. Ouvre les doigts 5, 3 et 1 sur do, mi et sol.",
      },
    },
    epic: {
      tips: [
        "Tiens l’octave grave avec la pédale enfoncée. Elle doit gronder comme un grand orgue.",
        "Le mi clair devient un mi bémol sombre. Joue le mi bémol un peu plus doux.",
        "Frappe do et sol comme des timbales, et joue de plus en plus fort jusqu’à la mesure 9.",
      ],
      tricky: {
        3: "La main droite entre sur le do central pendant que la main gauche monte d’une octave. " +
          "Le silence de la mesure 2 lui en laisse le temps.",
      },
    },
    legendary: {
      tips: [
        "Fixe la main en position d’octave, le pouce et l’auriculaire. Le bras la porte de touche en touche.",
        "Pour les accords de quatre notes, prends les doigts 1, 2, 3 et 5. Le doigt 4 se repose.",
        "Chaque accord monte plus haut et sonne plus fort. Garde le son le plus fort pour le dernier accord de do majeur.",
      ],
      tricky: {
        11: "La main droite saute de l’accord aigu jusqu’à l’octave sur le do central. Profite du silence juste avant.",
      },
    },
  },
};

/** The guide of *Für Elise* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven a écrit ce court morceau pour piano en 1810, et son manuscrit le dédie à Élise. " +
    "Personne ne sait avec certitude qui était Élise. " +
    "Ludwig Nohl a trouvé le morceau et l’a publié en 1867, quarante ans après la mort de Beethoven.",
  funFact:
    "Selon une théorie, Nohl aurait mal lu le nom. Le morceau aurait en fait été écrit pour Thérèse Malfatti, que Beethoven espérait épouser.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main droite seule à partir de la mesure 5, où la main descend jusqu’au do central.",
        "Maintenant, la main gauche seule. Elle garde deux positions, une par mesure.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Alterne entre les doigts 5 et 4 pour le mi et le ré dièse, comme une douce balançoire.",
        "Ici, la main gauche attend. Joue la mélodie doux, comme si tu confiais un secret.",
        "Lève la main pendant le silence après le la, et pose le pouce sur le do central.",
      ],
      tricky: {
        5: "Après le silence, le pouce arrive sur le do central. Regarde le clavier avant de le jouer.",
        7: "Le pouce prend la touche noire sol dièse, pour que la main puisse monter jusqu’au do.",
        13: "La main redescend jusqu’au do central. Profite du silence de la mesure 12 pour y arriver.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule, lentement.",
        "Joue la main gauche seule. Chaque accord monte depuis la basse, une note par temps.",
        "Joue les mesures 4 à 8 à deux mains, là où elles jouent chacune à leur tour.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche monte, puis la main droite continue de monter. Cela doit sonner comme une seule main.",
        "Le pouce sur le mi, l’auriculaire sur le mi aigu. Ouvre la main sur toute l’octave.",
        "Le sol dièse à la basse rend l’accord lumineux. Il ramène l’oreille chez elle, vers le la.",
      ],
      tricky: {
        5: "Profite du silence après le la pour descendre le pouce droit jusqu’au do central.",
        6: "La main gauche s’ouvre grand : le doigt 2 joue le si, et le pouce monte jusqu’au sol dièse.",
        14: "Le même écart qu’à la mesure 6 : le doigt 2 joue le si, et le pouce gauche monte jusqu’au sol dièse.",
      },
    },
    legendary: {
      tricky: {
        20: "Lâche le do aigu, puis attrape la, do, mi et la avec les doigts 1, 2, 3 et 5.",
        28: "L’accord de quatre notes revient. Lâche d’abord le do aigu, puis pose la main sur toute l’octave.",
      },
    },
  },
};

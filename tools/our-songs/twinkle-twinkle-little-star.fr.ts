/** The guide of *Twinkle Twinkle Little Star* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Cet air était d’abord une chanson française, « Ah ! vous dirai-je, maman », imprimée pour la première fois en 1761. " +
    "Mozart a écrit douze variations sur cet air pour le piano. " +
    "En 1806, Jane Taylor a publié son poème sur une petite étoile, que l’on a chanté plus tard sur cet air.",
  funFact:
    "La chanson de l’alphabet anglais et Baa, Baa, Black Sheep se chantent sur ce même air.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Maintenant, la main gauche seule. Elle se déplace seulement entre le do, le fa et le sol.",
        "Joue les quatre premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Pose le pouce sur le do central. Le doigt 4 joue le sol, et l’auriculaire joue le la.",
        "Le dernier do dure deux fois plus longtemps que les notes d’avant. Compte deux temps.",
        "La partie du milieu dit deux fois la même chose. Joue-la plus doux la deuxième fois, comme un écho.",
      ],
      tricky: {
        3: "Ici, la main descend d’une touche. Le doigt 4 quitte le sol et arrive sur le fa.",
        5: "L’auriculaire joue maintenant le sol. Descends à partir de lui, un doigt par touche : 5, 4, 3, 2.",
        11: "C’est de nouveau la mesure 3. Glisse la main d’une touche vers le bas, pour que le doigt 4 arrive sur le fa.",
      },
    },
    rare: {
      practice: [
        "Joue la main droite seule, lentement, et sens les deux notes rapides de la mesure 4.",
        "Joue la main gauche seule. Elle tient chaque accord deux ou quatre temps.",
        "Joue la partie du milieu à deux mains.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tricky: {
        3: "Ici, le doigt 4 descend du sol au fa. Laisse toute la main glisser d’une touche avec lui.",
        11: "C’est de nouveau la mesure 3. Glisse la main d’une touche vers le bas, pour que le doigt 4 arrive sur le fa.",
        14: "Le doigt 4 glisse encore une fois du sol au fa, pendant que la coda rentre à la maison.",
      },
    },
    epic: {
      tricky: {
        3: "Le doigt 4 descend en glissant du sol au fa, pendant que la basse d’Alberti continue de rouler.",
        9: "Le pouce descend en glissant du ré au do. Puis les doigts 2 et 4 prennent la première tierce.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue lentement les doubles croches de la partie du milieu, à la main droite seule.",
        "Joue seules les octaves de la main droite, et lève la main entre elles.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Regarde les sauts de la main gauche, et laisse la main droite trouver ses accords au toucher.",
        "Chaque note de la mélodie commence un groupe de quatre doubles croches. " +
          "Appuie un peu dessus, pour que la mélodie s’entende toujours.",
        "Joue les octaves courtes et claires, comme des cloches.",
      ],
      tricky: {
        3: "Le pouce descend du la au sol pendant que le doigt 2 garde le do. Déplace la main d’un seul bloc.",
        14: "C’est de nouveau la mesure 3. Le pouce descend du la au sol, et le doigt 2 reste sur le do.",
      },
    },
  },
};

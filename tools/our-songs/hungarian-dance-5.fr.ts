/** The guide of *Hungarian Dance No. 5* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms a écrit ses « Danses hongroises » pour piano à quatre mains, et le premier recueil a été publié en 1869. " +
    "La cinquième est devenue la plus célèbre de toutes. " +
    "Dans le film « Le Dictateur » (1940), Charlie Chaplin rase un client en rythme sur cette musique.",
  funFact:
    "Brahms a construit cette danse sur un csárdás de Béla Kéler, mais il croyait que c’était un air populaire.",
  versions: {
    common: {
      tricky: {
        2: "Le doigt 5 monte chercher le do, puis le doigt 3 revient sur le la.",
      },
    },
    rare: {
      tricky: {
        5: "La main droite joue maintenant une octave plus haut. Le pouce arrive sur le mi aigu.",
      },
    },
    epic: {
      tricky: {
        7: "Les doigts 1 et 4 jouent sol dièse et mi dièse. Ensuite, la main monte deux fois, rapidement.",
        15: "Les mêmes sixtes qu’à la mesure 7. Garde le pouce près du la et du si.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite, le pouce et l’auriculaire gardés dans la même position.",
        "Joue lentement les motifs rapides des mesures 5 à 7, à la main droite seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tricky: {
        8: "Ouvre la main sur fa dièse, la, do dièse et fa dièse, avec les doigts 1, 2, 3 et 5.",
      },
    },
  },
};

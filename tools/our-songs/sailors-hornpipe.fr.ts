/** The guide of *The Sailor's Hornpipe* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe est un air de danse plein d’entrain, étroitement lié à la Royal Navy. " +
    "Les premiers recueils l’imprimaient sous le titre The College Hornpipe.",
  funFact:
    "Les dessins animés de Popeye, de Max Fleischer, commençaient par ce hornpipe. " +
    "Beaucoup de gens le connaissent donc comme l’air de Popeye.",
  versions: {
    common: {
      tricky: {
        4: "Après le do, le pouce passe dessous jusqu’au si. Puis les doigts 2 et 4 montent jusqu’au ré et au sol.",
      },
    },
    rare: {
      tricky: {
        4: "Après le do, le pouce passe dessous jusqu’au si. Puis les doigts 2 et 4 montent jusqu’au ré et au sol.",
      },
    },
    epic: {
      tricky: {
        17: "Joue le dernier accord aux deux mains à la fois. Laisse la pédale le tenir jusqu’à la fin.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Laisse les arpèges rouler tout en douceur sous les traits de la main droite.",
        "Chaque accord se relâche un peu tôt. Profite de ce petit vide pour déplacer toute la main jusqu’à l’accord suivant.",
      ],
    },
  },
};

/** The guide of *Piano Concerto No. 21: Andante* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart menyelesaikan konserto ini pada 9 Maret 1785, empat minggu setelah konserto sebelumnya. " +
    "Bagian lambatnya, Andante, menyanyikan melodi panjang di atas akor berulang yang lembut. " +
    "Film Elvira Madigan (1967) memutarnya, dan kini konserto ini dikenal luas dengan nama itu.",
  funFact: "Mozart menyelesaikan konserto ini hanya empat minggu setelah Konserto Piano No. 20 miliknya.",
  versions: {
    common: {
      tips: [
        "Tahan F pertama selama tujuh ketukan. C pendek datang tepat sebelum not panjang berikutnya.",
        "Jari 4 menahan C tinggi. Lalu jari 5, 4, 3, dan 2 memainkan empat not cepat.",
        "Mainkan dengan lembut dan halus, seolah kamu sedang menyenandungkan lagu ninabobo.",
      ],
      tricky: {
        5: "Jari 3 naik dari G ke B mol. Lalu jari 5, 4, dan 3 memainkan D, C, dan B mol.",
      },
    },
    rare: {
      tricky: {
        5: "Jari 3 naik dari G ke B mol. Lalu jari 5, 4, dan 3 memainkan D, C, dan B mol.",
      },
    },
    epic: {},
    legendary: {},
  },
};

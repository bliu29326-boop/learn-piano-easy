/** The guide of *Night on Bald Mountain* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky menyelesaikan gambaran musiknya tentang pertemuan para penyihir di Gunung Gundul pada malam Santo Yohanes, 23 Juni 1867. " +
    "Pada 1886, lima tahun setelah ia wafat, Rimsky-Korsakov menerbitkan aransemennya sendiri. " +
    "Film Fantasia (1940) karya Walt Disney membuatnya terkenal, lewat aransemen Leopold Stokowski yang berdasar pada versi Rimsky-Korsakov.",
  funFact: "Bersama Sadko karya Rimsky-Korsakov, yang juga dari 1867, karya ini termasuk puisi simfonis pertama yang ditulis komponis Rusia.",
  versions: {
    common: {
      tricky: {
        5: "Tangan sudah pindah naik. Jari 2 memainkan A, dan jari 3 memainkan B mol.",
      },
    },
    rare: {
      tricky: {
        5: "Tangan sudah pindah naik saat tanda istirahat. Jari 2 memainkan A, dan jari 3 memainkan B mol.",
      },
    },
  },
};

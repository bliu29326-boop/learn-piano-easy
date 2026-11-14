/** The guide of *Ave Maria* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert menggubah lagu ini pada 1825, dari terjemahan bahasa Jerman puisi The Lady of the Lake karya Walter Scott. " +
    "Lagu ini adalah lagu ketiga Ellen, dan diterbitkan pada 1826 sebagai bagian dari Opus 52-nya. " +
    "Film Fantasia (1940) karya Walt Disney memakainya di bagian terakhir, tepat setelah Night on Bald Mountain.",
  funFact:
    "Dalam Fantasia, lonceng di akhir Night on Bald Mountain seakan berubah menjadi lonceng gereja yang mengantar ke Ave Maria.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 7 dengan tangan kanan saja. Tanganmu tetap di tempat yang sama.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not bas selama setengah birama atau lebih.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Nyanyikan not-not panjang di dalam kepalamu. Melodi ini sebuah doa, jadi mainkan dengan lembut.",
        "Ibu jari berada di A dan jari 5 di E. Setiap not tangan kanan ada di bawah satu jari.",
        "Empat not terakhir sama panjang. Hitung keempatnya: satu, dua, tiga, empat.",
      ],
    },
    rare: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Not bas datang lebih dulu, lalu akor dua not menjawabnya.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
    },
  },
};

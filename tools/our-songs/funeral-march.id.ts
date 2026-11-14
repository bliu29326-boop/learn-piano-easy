/** The guide of *Funeral March* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mars pemakaman ini adalah bagian ketiga dari Sonata Piano No. 2 karya Chopin, yang diterbitkan pada 1840. " +
    "Mars ini dimainkan di pemakaman Chopin sendiri, dan di pemakaman kenegaraan John F. Kennedy. " +
    "Film dan kartun sering mengutip bagian pembukanya untuk adegan pemakaman.",
  funFact: "Banyak ahli memperkirakan mars ini ditulis pada 1837, dua tahun sebelum Chopin menyelesaikan bagian lain sonatanya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Akhirnya melodi bergerak menjauh dari D.",
        "Sekarang tangan kiri saja. Tangan kiri berayun di antara D dan B mol, seperti lonceng yang pelan.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tricky: {
        7: "Tahan E selama tiga ketukan, lalu mainkan D selama satu ketukan. Tahan D selama tiga ketukan, dan ibu jari memainkan C kres paling akhir.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri membunyikan akor di setiap ketukan, seperti dentang lonceng.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
    },
    epic: {
      tricky: {
        22: "Jari 4 mengambil C dalam sekst itu, sehingga jari 5 bebas meraih ke atas ke E mol.",
      },
    },
    legendary: {
      tricky: {
        22: "Angkat tanganmu saat tanda istirahat pendek, lalu mendarat di E mol, A mol, C, dan E mol.",
      },
    },
  },
};

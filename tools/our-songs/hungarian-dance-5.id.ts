/** The guide of *Hungarian Dance No. 5* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms menulis Tarian Hungaria untuk piano empat tangan, dan kumpulan pertamanya terbit pada 1869. " +
    "Tarian No. 5 menjadi yang paling terkenal dari semuanya. " +
    "Dalam film The Great Dictator (1940), Charlie Chaplin mencukur seorang pelanggan mengikuti irama lagu ini.",
  funFact: "Brahms mendasarkan tarian ini pada sebuah csárdás karya Béla Kéler, tetapi ia mengira itu lagu rakyat.",
  versions: {
    common: {
      tricky: {
        2: "Jari 5 meraih ke atas ke C, lalu jari 3 kembali ke A.",
      },
    },
    rare: {
      tricky: {
        5: "Tangan kanan sekarang bermain satu oktaf lebih tinggi. Ibu jarimu mendarat di E tinggi.",
      },
    },
    epic: {
      tricky: {
        7: "Jari 1 dan 4 memainkan G kres dan E kres. Lalu tanganmu naik dua kali, dengan cepat.",
        15: "Sekst yang sama dengan birama 7. Jaga ibu jari tetap dekat dengan A dan B.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: lompat ke bawah untuk oktafnya, lalu kembali ke atas untuk akornya.",
        "Mainkan oktaf tangan kanan saja, dengan ibu jari dan kelingking dalam satu posisi.",
        "Mainkan motif cepat di birama 5 sampai 7 dengan tangan kanan saja, pelan-pelan.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tricky: {
        8: "Rentangkan tanganmu di atas F kres, A, C kres, dan F kres dengan jari 1, 2, 3, dan 5.",
      },
    },
  },
};

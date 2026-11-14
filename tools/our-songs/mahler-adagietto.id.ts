/** The guide of *Adagietto* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Adagietto adalah bagian keempat yang lambat dari Simfoni Kelima karya Mahler, yang pertama kali dimainkan di Köln pada tahun 1904. " +
    "Film Death in Venice karya Luchino Visconti dari tahun 1971 membuatnya terkenal jauh di luar gedung konser.",
  funFact: "Sejak film itu, karya ini menjadi musik Mahler yang paling terkenal.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Birama 5 punya sebuah B, dan birama 6 dan 7 punya F kres.",
        "Sekarang tangan kiri saja. Tangan kiri menahan setiap not selama setengah atau satu birama penuh.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tricky: {
        4: "Mainkan C pertama dengan jari 5, lalu ulangi dengan jari 4. Lalu jari 5 memainkan D.",
        5: "B adalah tuts putih, dan B mol sesudahnya tuts hitam. Jari 3 dan 2 memainkannya.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Not rendah datang tepat pada ketukan, dan sebuah akor menjawabnya.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tricky: {
        5: "B adalah tuts putih, dan B mol sesudahnya tuts hitam. Awalnya tangan kiri hanya memainkan G dan D.",
        7: "Ibu jari memainkan F kres lebih dulu, dan F di akhir. Di tengah birama, tangan kiri pindah dari B mol ke C.",
      },
    },
    epic: {
      tricky: {
        18: "Ibu jari turun dari C ke A untuk sekst. Lalu ibu jari naik ke F untuk not-not tunggal.",
      },
    },
    legendary: {
    },
  },
};

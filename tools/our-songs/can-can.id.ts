/** The guide of *Can-can* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach menulis Galop infernal untuk pesta liar para dewa yang menutup operetanya, Orpheus in the Underworld, yang pertama kali dipentaskan pada tahun 1858. " +
    "Pada tahun 1890-an, kabaret Paris Moulin Rouge dan Folies Bergère memakainya untuk mengiringi tarian can-can. " +
    "Film Moulin Rouge! (2001) memakainya dalam musiknya.",
  funFact:
    "Not utama melodinya sama dengan not utama dua lagu yang jauh lebih lambat di babak yang sama. " +
    "Namun, bunyinya sama sekali tidak mirip.",
  versions: {
    common: {
      practice: [
        "Mainkan 7 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 8 sampai 16 dengan tangan kanan saja. Tangan tetap di tempat yang sama.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama setengah atau satu birama penuh.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan G pertama selama empat ketukan. Para penari menunggu musik dimulai.",
        "Jari 5 memainkan dua D pertama. Lalu jari 4 memainkan D, agar jari 5 bisa menjangkau E.",
        "Mainkan not seperempat dengan pendek dan memantul, seperti penari yang menendangkan kaki.",
      ],
      tricky: {
        4: "Ganti jari 5 dengan jari 4 pada D. Lalu jari 5 menjangkau E, dan jari 2 turun ke B.",
        5: "Jari 3 meninggalkan C, dan jari 2 memainkan A dua kali. Tahan setiap A selama dua ketukan.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Satu not bas datang tepat pada ketukan, lalu satu akor dua not menjawabnya.",
        "Mainkan tangan kanan saja pada 7 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh, seperti di gedung dansa pada tengah malam.",
      ],
      tricky: {
        4: "Ganti jari 5 dengan jari 4 pada D. Lalu jari 5 menjangkau E, dan jari 2 turun ke B.",
      },
    },
  },
};

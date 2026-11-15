/** The guide of *Haul Away Joe* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe adalah lagu pelaut pendek untuk menarik tali. " +
    "R. R. Terry mencetaknya pada 1921 sebagai lagu pelaut untuk menarik tali layar depan.",
  funFact: "Salah satu bait dalam cetakan Terry bercerita tentang Raja Louis dari Prancis, yang kehilangan kepalanya dalam Revolusi.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada birama 1 sampai 4, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, tempat refrein turun ke D rendah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan dua tuts dan menggantinya paling banyak dua kali per birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tricky: {
        2: "Jari 5 memainkan C tiga kali. Lalu jari 3 memainkan A, dan jari 2 menunggu di atas G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah yang panjang, lalu satu akor pendek.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap setengah birama tangan kiri berisi satu not panjang dan satu akor pendek. Rasakan tarikannya: panjang, pendek.",
        "Jari 1 dan 5 menekan sekst seperti satu not. Lalu jari 5 tetap di not atas.",
        "Akhiri dengan D dan F bersamaan. Jari 1 dan 3 menekan keduanya seperti satu not.",
      ],
      tricky: {
        5: "Rentangkan jari 1 dan 5 di atas F dan D untuk sekst itu. Lalu jari 5 memainkan D lagi sendirian.",
      },
    },
    epic: {},
    legendary: {},
  },
};

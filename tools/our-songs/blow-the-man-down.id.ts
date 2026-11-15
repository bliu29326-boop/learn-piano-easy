/** The guide of *Blow the Man Down* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down adalah lagu pelaut untuk menarik tali layar, dinyanyikan saat awak kapal menarik layar yang berat ke puncak tiangnya. " +
    "Melodi kami mengikuti cetakan R. R. Terry tahun 1921.",
  funFact:
    "Sebuah surat kabar di Syracuse, New York, mengutip satu baris lagu ini pada tahun 1867. " +
    "Para pelaut telah menyanyikannya di kapal uap dari New York ke Glasgow.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 7 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 8 sampai 17 dengan tangan kanan saja. Tangan berpindah dua kali, setiap kali setelah not panjang.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu atau dua not selama satu birama penuh.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di G. Jari 2 memainkan B, jari 4 memainkan D, dan jari 5 memainkan E.",
        "Tahan D pertama selama tiga ketukan, lalu mainkan E selama satu ketukan. E yang pendek itu menarik seperti tali.",
        "Para pelaut menyanyikan lagu ini sambil menarik layar. Beri sedikit tekanan pada not pertama setiap birama, seperti tarikan.",
      ],
      tricky: {
        8: "Setelah E yang panjang, tangan berpindah ke bawah. Jari 4 mendarat di C, dan ibu jari menunggu di atas F kres.",
        13: "Jari 4 menjangkau naik dari A ke E, dan jari 5 memainkan G tinggi.",
        14: "Setelah G tinggi, jari 5 pindah turun ke D. Jari itu memainkan D tiga kali: pendek, panjang, lalu sedang.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah yang panjang, lalu satu akor pendek.",
        "Mainkan tangan kanan saja pada 7 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 8 sampai 17, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tricky: {
        8: "Setelah akor C dan E, tangan berpindah ke bawah. Jari 4 mendarat di C. Tangan kiri memainkan D, lalu A dan D bersamaan.",
        13: "Jari 4 menjangkau naik dari A ke E, dan jari 5 memainkan G tinggi. Tangan kiri memainkan C, lalu G dan C bersamaan.",
        14: "Jari 5 pindah turun dari G tinggi ke D dan memainkannya tiga kali. Jaga pergelangan tangan tetap lemas.",
      },
    },
    epic: {},
    legendary: {},
  },
};

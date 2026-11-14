/** The guide of *Air on the G String* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach menulis Air ini sebagai bagian lambat dari Suite Orkestra ketiganya. " +
    "Pada 1871, pemain biola August Wilhelmj mengaransemennya agar sebuah biola bisa memainkan seluruh melodinya pada senar terendahnya, senar G. " +
    "Film Se7en (1995) memutarnya saat dua detektif melihat-lihat foto kejahatan.",
  funFact:
    "Wilhelmj menulis “auf der G-Saite”, artinya “di senar G”, di atas bagian biola, dan dari situlah karya ini mendapat julukannya.",
  versions: {
    common: {
      tips: [
        "Tahan E pertama selama satu birama penuh, dan dengarkan. Biola menyanyikan not ini dengan satu gesekan busur yang panjang.",
        "Angkat ibu jari dari C sebentar. Lalu jari 2 mendarat di B, dan tanganmu tetap di sana.",
        "Setiap not panjang mengisi satu birama penuh. Hitung delapan ketukan pelan, lalu tunggu satu ketukan lagi sebelum not berikutnya.",
      ],
      tricky: {
        3: "Angkat ibu jari dari C sebentar, lalu mainkan B dengan jari 2.",
        8: "Setelah tanda istirahat, jari 4 memainkan D. Lalu ibu jari menjangkau turun ke G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Not bas datang lebih dulu, lalu akor dua not menjawabnya.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis. Melodinya muncul dua kali.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tricky: {
        6: "Setelah tanda istirahat, jari 5 mengambil E. Lalu jari 2 dan 1 memainkan B mol dan A.",
        14: "Gerakan yang sama dengan birama 6: jari 5 di E, lalu B mol dengan jari 2.",
        19: "Tangan kanan memainkan C dan E bersamaan. Tangan kiri merentang di atas C, E, dan G dengan jari 5, 3, dan 1.",
      },
    },
    epic: {
      tricky: {
        14: "Mainkan setiap pasangan not sebagai satu, dan biarkan jari atas menyanyikan melodinya. Ibu jari mengambil sebagian besar not bawah.",
      },
    },
    legendary: {
      tricky: {
        9: "Pakai tanda istirahat di awal untuk memindahkan tangan satu oktaf ke atas. Lalu ambil empat not dengan jari 1, 2, 3, dan 5.",
      },
    },
  },
};

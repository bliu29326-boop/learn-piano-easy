/** The guide of *Gymnopédie No. 1* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie menyelesaikan ketiga Gymnopédie-nya pada tahun 1888, dan yang pertama diterbitkan di sebuah majalah pada musim panas itu. " +
    "Karya ini diberi tanda “Lent et douloureux”, yang berarti lambat dan penuh duka. " +
    "Film The Royal Tenenbaums (2001) memakai karya ini.",
  funFact: "Claude Debussy, sahabat Satie, kemudian mengaransemen Gymnopédie pertama dan ketiga untuk orkestra.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri menahan satu kuint kosong di setiap birama.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 5 sampai 8, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan kuint-kuint itu dengan lembut, dan biarkan berbunyi panjang. Kuint itu berayun seperti perahu yang pelan.",
        "Angkat ibu jari dari B sedikit lebih awal. Dengan begitu ibu jari turun ke A tepat waktu.",
        "Pelankan sedikit di akhir lagu, dan biarkan C terakhir memudar.",
      ],
      tricky: {
        7: "Ibu jarimu berpindah dari B turun ke A. Lalu jari 2 dan 3 naik ke B dan C.",
      },
    },
    rare: {
      tips: [
        "Injak pedal selama satu birama penuh, lalu ganti tepat di garis birama.",
        "Ibu jari memainkan B, lalu bergeser turun ke A. Biarkan jari-jari lainnya lemas.",
        "Biarkan dua birama terakhir berbunyi lembut, seperti akhir sebuah lagu ninabobo.",
      ],
      tricky: {
        7: "Ibu jarimu bergeser dari B turun ke A. Jaga tangan tetap dekat dengan tuts.",
      },
    },
    epic: {
      tricky: {
        6: "Ibu jarimu meraih turun ke C kres, saat jari 3 melepaskan F kres.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja. Lompat dari oktaf rendah naik ke akor, saat tanda istirahat yang pendek.",
        "Mainkan birama 5 sampai 8 dengan kedua tangan, pelan-pelan.",
        "Mainkan akor tangan kanan saja, dan angkat tangan di antara akor-akornya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
    },
  },
};

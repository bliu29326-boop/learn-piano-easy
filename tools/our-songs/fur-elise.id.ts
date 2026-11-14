/** The guide of *Für Elise* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven menulis karya piano pendek ini pada tahun 1810, dan di naskah tulisan tangannya, karya ini dipersembahkan untuk Elise. " +
    "Tak ada yang tahu pasti siapa Elise. " +
    "Ludwig Nohl menemukan karya ini dan menerbitkannya pada tahun 1867, empat puluh tahun setelah Beethoven wafat.",
  funFact: "Ada teori yang mengatakan bahwa Nohl salah membaca nama itu, dan karya ini sebenarnya ditulis untuk Therese Malfatti, perempuan yang ingin dinikahi Beethoven.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja mulai birama 5, tempat tangan turun ke C tengah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan dua posisi, satu di setiap birama.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ayunkan tangan di antara jari 5 dan 4 untuk E dan D kres, seperti ayunan yang lembut.",
        "Di sini tangan kiri menunggu. Mainkan melodinya dengan lembut, seperti sedang membisikkan rahasia.",
        "Angkat tangan saat tanda istirahat setelah A, lalu daratkan ibu jari di C tengah.",
      ],
      tricky: {
        5: "Setelah tanda istirahat, ibu jarimu mendarat di C tengah. Lihat ke bawah sebelum memainkannya.",
        7: "Ibu jarimu memainkan tuts hitam G kres, agar tangan bisa meraih C di atasnya.",
        13: "Tangan turun lagi ke C tengah. Pakai tanda istirahat di birama 12 untuk sampai ke sana.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, pelan-pelan.",
        "Mainkan tangan kiri saja. Setiap akor naik dari bas, satu not di setiap ketukan.",
        "Gabungkan kedua tangan pada birama 4 sampai 8, tempat kedua tangan bergantian.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri naik, lalu tangan kanan meneruskan naik. Bunyinya harus seperti satu tangan saja.",
        "Ibu jari di E, kelingking di E tinggi. Bentangkan tangan selebar satu oktaf penuh.",
        "G kres di bas membuat akornya cerah. Nada itu menarik telinga pulang ke A.",
      ],
      tricky: {
        5: "Pakai tanda istirahat setelah A untuk memindahkan ibu jari kanan turun ke C tengah.",
        6: "Tangan kiri terbuka lebar: jari 2 memainkan B, dan ibu jari meraih ke atas sampai G kres.",
        14: "Rentangan yang sama dengan birama 6: jari 2 memainkan B, dan ibu jari kiri meraih ke atas sampai G kres.",
      },
    },
    legendary: {
      tricky: {
        20: "Angkat tangan dari C tinggi, lalu tekan A, C, E, dan A dengan jari 1, 2, 3, dan 5.",
        28: "Akor empat not itu kembali. Angkat dulu tangan dari C tinggi, lalu daratkan di seluruh oktaf.",
      },
    },
  },
};

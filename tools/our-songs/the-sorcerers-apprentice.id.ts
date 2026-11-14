/** The guide of *The Sorcerer's Apprentice* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas menyelesaikan puisi simfonis ini pada 1897, dan karya ini diterbitkan pada tahun yang sama. " +
    "Karya ini mengikuti puisi Goethe dari tahun 1797, Der Zauberlehrling. " +
    "Dalam film Fantasia (1940) karya Walt Disney, Mickey Mouse memerankan sang murid penyihir.",
  funFact:
    "Dukas memberinya anak judul scherzo berdasarkan sebuah balada karya Goethe. " +
    "Karya ini jauh lebih sering dipentaskan dan direkam daripada karya-karyanya yang lain.",
  versions: {
    common: {
      practice: [
        "Mainkan 3 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 4 sampai 10 dengan tangan kanan saja. Tangan tetap di satu tempat.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu atau dua not rendah di setiap birama.",
        "Gabungkan kedua tangan pada 10 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tricky: {
        7: "Setelah G kres dengan jari 2, jari 4 mengambil A. Tangan kiri pindah dari E kembali ke A dan E.",
        10: "Seperti di birama 7, jari 4 mengambil A setelah G kres. Lalu jari 5 menjangkau C di atas.",
      },
    },
    rare: {
      tricky: {
        7: "Jari 4 mengambil A setelah G kres. Tangan kiri turun dari akor E kembali ke A.",
        10: "Melodi berakhir di sini. Jari 4 mengambil A, dan tangan kiri kembali ke A.",
      },
    },
    legendary: {
      tricky: {
        6: "Jari kanan turun ke G, F, dan E, masing-masing pendek. Tangan kiri melompat naik ke akornya.",
      },
    },
  },
};

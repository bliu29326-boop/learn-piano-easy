/** The guide of *Toccata and Fugue in D minor* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Toccata and Fugue in D minor karya Bach pertama kali diterbitkan pada 1833, saat musik Bach kembali dihidupkan. " +
    "Felix Mendelssohn memperjuangkannya, dan memainkannya pada 1840 dengan sambutan yang meriah. " +
    "Film Fantasia (1940) karya Walt Disney dibuka dengan karya ini.",
  funFact: "Karya ini nyaris tak dikenal sampai pertama kali dicetak, lebih dari delapan puluh tahun setelah Bach wafat.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 3 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 4 sampai 6 dengan tangan kanan saja. Gagasan yang sama kembali, satu oktaf lebih rendah.",
        "Sekarang tangan kiri saja. Di birama 7 dan 8, tangan kiri menaiki sebuah akor yang gelap, not demi not.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh, keras dan berani.",
      ],
      tips: [
        "Mainkan A pertama dengan keras dan tahan sepanjang birama, seperti orgel besar.",
        "Setelah tanda istirahat, jari 5 turun ke G. Lalu setiap jari memainkan satu tuts lebih rendah.",
        "Akor ini terdengar gelap dan tegang. Biarkan menggantung di udara, lalu nikmati akor yang cerah di birama 9.",
      ],
      tricky: {
        2: "Pakai tanda istirahat untuk memindahkan jari 5 dari A turun ke G. Lalu rentetan not cepat turun jari demi jari.",
        4: "Pakai tanda istirahat di birama 3 untuk memindahkan tangan turun satu oktaf. Jari 5 mendarat di A.",
      },
    },
    rare: {
      tips: [
        "Mainkan A panjang dengan keras, lalu biarkan rentetan not cepat berjatuhan turun ke D.",
        "Pedal membuat setiap not tanjakan terus berbunyi, sehingga akor tumbuh not demi not.",
        "F kres membuat akor ini cerah. Akor inilah jawaban atas semua ketegangan sebelumnya.",
      ],
      tricky: {
        2: "Pakai tanda istirahat untuk memindahkan jari 5 dari A turun ke G. Lalu rentetan not cepat turun jari demi jari.",
        4: "Pakai tanda istirahat di birama 3 untuk memindahkan tangan kanan turun satu oktaf. Jari 5 mendarat di A.",
      },
    },
    epic: {
      tricky: {
        4: "Pakai tanda istirahat di birama 3 untuk memindahkan tangan kanan turun satu oktaf. Lalu sentilkan A, G, A, dan tahan A-nya.",
      },
    },
    legendary: {
      practice: [
        "Mainkan oktaf tangan kanan saja pada 6 birama pertama. Biarkan tangan terbuka, dengan ibu jari dan kelingking siap.",
        "Mainkan tangan kiri saja. Setiap arpeggio merentang dua oktaf, dan bas stride melompat di antara bas dan akor.",
        "Gabungkan kedua tangan pada birama 7 sampai 9, tempat kedua tangan bergantian menaiki akor yang gelap.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir menggelegar.",
      ],
      tips: [
        "Oktaf membuat melodi terdengar seperti orgel. Biarkan not teratas berbunyi sedikit lebih keras.",
        "Tangan kiri memulai tanjakan, dan tangan kanan menyelesaikannya. Bunyinya harus seperti satu rentetan panjang.",
        "Bas menggemakan rentetan not cepat di awal lagu dalam oktaf. Buat bunyinya bergemuruh seperti pipa orgel yang paling rendah.",
      ],
    },
  },
};

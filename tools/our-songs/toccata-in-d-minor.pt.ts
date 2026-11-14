/** The guide of *Toccata and Fugue in D minor* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "A Tocata e Fuga em Ré menor, de Bach, foi publicada pela primeira vez em 1833, quando a música de Bach estava sendo redescoberta. " +
    "Felix Mendelssohn defendeu a obra e a tocou com grande sucesso em 1840. " +
    "O filme Fantasia (1940), de Walt Disney, começa com ela.",
  funFact: "A peça ficou quase desconhecida até a primeira edição, mais de oitenta anos depois da morte de Bach.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 3 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 4 a 6 só com a mão direita. A mesma ideia volta uma oitava abaixo.",
        "Agora só a mão esquerda. Nos compassos 7 e 8, ela sobe por um acorde sombrio, uma nota de cada vez.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal, forte e com ousadia.",
      ],
      tips: [
        "Toque o primeiro Lá forte e segure-o pelo compasso inteiro, como um grande órgão.",
        "Depois da pausa, o dedo 5 desce para o Sol. Em seguida, cada dedo toca um grau abaixo.",
        "Este acorde soa sombrio e tenso. Deixe-o pairar no ar, e depois aproveite o acorde luminoso do compasso 9.",
      ],
      tricky: {
        2: "Use a pausa para levar o dedo 5 do Lá para baixo até o Sol. A passagem rápida então desce dedo por dedo.",
        4: "Use a pausa do compasso 3 para levar a mão uma oitava abaixo. O dedo 5 cai no Lá.",
      },
    },
    rare: {
      tips: [
        "Toque o Lá longo com força, e depois deixe a passagem rápida descer rolando até o Ré.",
        "O pedal mantém cada nota da subida soando, e assim o acorde cresce uma nota de cada vez.",
        "O Fá sustenido deixa este acorde luminoso. Ele é a resposta a toda a tensão que veio antes.",
      ],
      tricky: {
        2: "Use a pausa para levar o dedo 5 do Lá para baixo até o Sol. Depois a passagem rápida desce dedo por dedo.",
        4: "Use a pausa do compasso 3 para levar a mão direita uma oitava abaixo. O dedo 5 cai no Lá.",
      },
    },
    epic: {
      tricky: {
        4: "Use a pausa do compasso 3 para levar a mão direita uma oitava abaixo. Depois faça Lá, Sol, Lá rápido e segure o Lá.",
      },
    },
    legendary: {
      practice: [
        "Toque só as oitavas da mão direita nos 6 primeiros compassos. Mantenha a mão aberta, com o polegar e o dedo mínimo prontos.",
        "Toque só a mão esquerda. Cada arpejo cobre duas oitavas, e o baixo stride salta entre a nota do baixo e o acorde.",
        "Junte as mãos nos compassos 7 a 9, onde as mãos se revezam para subir pelo acorde sombrio.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde trovejar.",
      ],
      tips: [
        "As oitavas fazem a melodia soar como um órgão. Deixe a nota de cima soar um pouco mais forte.",
        "A mão esquerda começa a subida, e a mão direita a termina. Deve soar como uma única passagem longa.",
        "O baixo repete em oitavas a passagem do início. Faça-o roncar como os tubos mais graves do órgão.",
      ],
    },
  },
};

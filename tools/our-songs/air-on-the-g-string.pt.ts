/** The guide of *Air on the G String* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach escreveu esta ária como o movimento lento da sua Terceira Suíte para Orquestra. " +
    "Em 1871, o violinista August Wilhelmj fez um arranjo para que um violino tocasse a melodia inteira na sua corda mais grave, a corda Sol. " +
    "O filme Se7en (1995) usa a música enquanto dois detetives olham fotos de um crime.",
  funFact:
    "Wilhelmj escreveu “auf der G-Saite”, ou seja, “na corda Sol”, acima da parte do violino, e daí veio o apelido da peça.",
  versions: {
    common: {
      tips: [
        "Segure o primeiro Mi por um compasso inteiro e escute. Um violino canta esta nota numa só arcada longa.",
        "Tire o polegar do Dó por um instante. Aí o dedo 2 cai no Si, e a mão fica ali.",
        "Cada nota longa ocupa um compasso inteiro. Conte oito tempos lentos e espere mais um antes da próxima nota.",
      ],
      tricky: {
        3: "Tire o polegar do Dó por um instante e depois toque o Si com o dedo 2.",
        8: "Depois da pausa, o dedo 4 toca o Ré. Em seguida, o polegar desce até o Sol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. A nota do baixo vem primeiro, e o acorde de duas notas responde.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito. A melodia vem duas vezes.",
        "Agora toque na velocidade normal.",
      ],
      tricky: {
        6: "Depois da pausa, o dedo 5 pega o Mi. Em seguida, os dedos 2 e 1 tocam Si bemol e Lá.",
        14: "O mesmo movimento do compasso 6: o dedo 5 no Mi, depois o Si bemol com o dedo 2.",
        19: "A mão direita toca Dó e Mi juntos. A mão esquerda se abre sobre Dó, Mi e Sol com os dedos 5, 3 e 1.",
      },
    },
    epic: {
      tricky: {
        14: "Toque cada par como uma só nota, e deixe o dedo de cima cantar a melodia. O polegar pega a maioria das notas mais graves.",
      },
    },
    legendary: {
      tricky: {
        9: "Aproveite a pausa do início para subir a mão uma oitava. Depois pegue quatro notas com os dedos 1, 2, 3 e 5.",
      },
    },
  },
};

/** The boss of *Scales and keys* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { JingleBellsTexts } from "./jingle-bells.en";

export const jingleBellsUr: Translation<JingleBellsTexts> = {
  title: `آخری چیلنج: ${isolate("Jingle Bells")} دونوں ہاتھوں سے`,
  steps: {
    intro: {
      text: `${isolate("Jingle Bells")}، ${isolate("C")} میجر میں ہے، اس لیے اس کا اسکیل کا نشان خالی ہے۔ دھن ${isolate("C")} میجر اسکیل کے قدموں پر اوپر نیچے چلتی ہے۔ بایاں ہاتھ ہر میژر میں ایک نیچے والا نوٹ یا ایک ففتھ دبائے رکھتا ہے۔`,
    },
    song: {
      text: `${isolate("Jingle Bells")} دونوں ہاتھوں سے پوری رفتار پر بجائیں۔ دایاں ہاتھ ${isolate("C")} پوزیشن میں رکھیں، اور ہر بیس نوٹ پورے میژر تک دبائے رکھیں۔`,
    },
  },
};

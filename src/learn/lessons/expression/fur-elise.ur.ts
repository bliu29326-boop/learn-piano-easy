/** The boss of *Expression* in Urdu. */
import { isolate } from "../../../i18n/format";
import type { Translation } from "../../../i18n/translation";
import type { FurEliseRareTexts } from "./fur-elise.en";

export const furEliseRareUr: Translation<FurEliseRareTexts> = {
  title: `آخری چیلنج: ${isolate("Für Elise")} دونوں ہاتھوں سے`,
  steps: {
    intro: {
      text: `${isolate("Für Elise")} ${isolate("A")} مائنر میں ہے، اس لیے اس کی آواز تھوڑی اداس لگتی ہے۔ بایاں ہاتھ ہر کورڈ کو توڑ کر نیچے سے اوپر بجاتا ہے، اور دایاں ہاتھ اسی چڑھائی کو آگے لے جاتا ہے۔ اسے ہلکے سے اور جوڑ کر بجائیں۔`,
    },
    song: {
      text: `${isolate("Für Elise")} دونوں ہاتھوں سے، لکھی ہوئی رفتار سے تھوڑا آہستہ بجائیں۔ ہر ریسٹ میں دائیں ہاتھ کا انگوٹھا نیچے مڈل ${isolate("C")} پر لے آئیں۔`,
    },
  },
};

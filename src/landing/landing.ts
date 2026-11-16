/** The public landing uses the same original content as its build-time rendered HTML. */
import type { Locale } from "../i18n/locale";
import type { View, ViewContext } from "../site/views";
import { publicPage } from "../site/keytrail-content";
import { el } from "../ui/dom";
export function landingView(_locale:Locale,_context:ViewContext):View {
  const element=el("div",{class:"kt-public kt-main"});
  element.innerHTML=publicPage("/")!.body;
  return {element};
}

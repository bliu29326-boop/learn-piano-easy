/** Enhance public HTML without replacing readable server content. Every success follows a real API response. */
import { api, providerRedirect, refreshSession, signInUrl, type Identity } from "./client";
import { isPaid } from "./policy";
export function enhancePublic(root:ParentNode=document):void {
  const status=root.querySelector<HTMLElement>("[data-api-status]");
  const tell=(message:string,tone="")=>{if(status){status.textContent=message;status.dataset.tone=tone}};
  const account=root.querySelector<HTMLElement>("[data-account]");
  const checkoutKey=crypto.randomUUID();
  const checkout=[...root.querySelectorAll<HTMLButtonElement>("[data-checkout]")];
  const signin=root.querySelector<HTMLAnchorElement>("[data-signin]");
  if(signin)signin.href=signInUrl();
  let identity:Identity|undefined;
  const paint=(value:Identity)=>{
    identity=value;const paid=isPaid(value.membership);
    root.querySelectorAll<HTMLElement>("[data-account-link]").forEach(link=>link.textContent=value.user?"My account":"Account");
    if(signin)signin.hidden=value.user!==null;
    const name=root.querySelector<HTMLElement>("[data-identity]");if(name)name.textContent=value.user?`Signed in as ${value.user.name || value.user.email} (${value.user.email}).`:"Sign in with Google to view your membership.";
    const membership=root.querySelector<HTMLElement>("[data-membership]");
    if(membership)membership.textContent=paid?`Keytrail Plus is active through ${new Date(value.membership.current_period_end!*1000).toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"})}. ${value.membership.cancel_at_period_end?"Future renewal is canceled. Access continues through this paid period.":"Renews monthly unless canceled in billing."}`:"Keytrail Free. Worlds 1 and 2 and all core practice tools are available.";
    root.querySelectorAll<HTMLButtonElement>("[data-portal]").forEach(button=>button.hidden=!value.user || !paid);
    root.querySelectorAll<HTMLButtonElement>("[data-logout]").forEach(button=>button.hidden=!value.user);
    checkout.forEach(button=>{button.hidden=!!account&&paid;button.disabled=paid;button.textContent=paid?"Plus is active":value.user?"Continue to test checkout":"Sign in to continue"});
  };
  const busy=async(button:HTMLButtonElement,run:()=>Promise<void>)=>{button.disabled=true;button.setAttribute("aria-busy","true");try{await run()}catch(error){tell(error instanceof Error?error.message:"The request failed. Please retry.","error")}finally{button.disabled=false;button.removeAttribute("aria-busy");if(identity&&checkout.includes(button)&&isPaid(identity.membership))button.disabled=true}};
  checkout.forEach(button=>button.addEventListener("click",()=>void busy(button,async()=>{
    tell("Checking your account…");const me=await refreshSession();paint(me);
    if(!me.user){location.assign(signInUrl(location.pathname+location.search+location.hash));return}
    if(isPaid(me.membership)){tell("Your Plus membership is already active. Manage it from your account.");return}
    tell("Opening Stripe test checkout…");const result=await api<{url:string;order_id:string}>("/api/checkout",{},{idempotencyKey:checkoutKey});
    if(!result.url||!result.order_id)throw new Error("Checkout could not be verified. Refresh your account before trying again.");providerRedirect(result.url);
  })));
  root.querySelectorAll<HTMLButtonElement>("[data-portal]").forEach(button=>button.addEventListener("click",()=>{
    const modal=document.createElement("dialog");modal.className="kt-plus-dialog";modal.setAttribute("aria-labelledby","cancel-title");
    modal.innerHTML='<h2 id="cancel-title">Cancel future renewal?</h2><p>Your verified paid access continues through the current paid period. This stops the next monthly renewal; it does not erase your local practice.</p><div class="kt-actions"><button class="kt-button kt-primary" data-confirm-cancel>Cancel future renewal</button><button class="kt-button" data-close-cancel>Keep renewal</button></div><p role="status" data-cancel-status></p>';
    modal.querySelector<HTMLButtonElement>("[data-close-cancel]")!.onclick=()=>modal.close();
    const confirm=modal.querySelector<HTMLButtonElement>("[data-confirm-cancel]")!;confirm.onclick=()=>{confirm.disabled=true;void api<{ok:boolean;cancel_at_period_end:boolean}>("/api/billing/cancel",{confirm:true}).then(async result=>{if(result.ok!==true||result.cancel_at_period_end!==true)throw new Error("Cancellation is not confirmed. Refresh your account.");paint(await refreshSession());tell("Future renewal is canceled. Your verified paid time remains available.","success");modal.close()}).catch(error=>{modal.querySelector<HTMLElement>("[data-cancel-status]")!.textContent=error instanceof Error?error.message:"Cancellation failed. Please retry."}).finally(()=>{confirm.disabled=false})};
    modal.addEventListener("close",()=>modal.remove(),{once:true});document.body.append(modal);modal.showModal();
  }));
  root.querySelectorAll<HTMLButtonElement>("[data-logout]").forEach(button=>button.addEventListener("click",()=>void busy(button,async()=>{await api("/api/auth/logout",{});paint(await refreshSession());tell("You are signed out. Local practice data has not been removed.");location.assign("/account/")})));
  root.querySelectorAll<HTMLButtonElement>("[data-refresh]").forEach(button=>button.addEventListener("click",()=>void busy(button,async()=>{paint(await refreshSession());tell("Account status is up to date.")})));
  const form=root.querySelector<HTMLFormElement>("[data-contact]");
  if(form){let key=crypto.randomUUID();let snapshot="";form.addEventListener("submit",event=>{event.preventDefault();if(!form.reportValidity())return;const values=new FormData(form);const fields={email:String(values.get("email")??""),topic:String(values.get("topic")??""),message:String(values.get("message")??"")};const current=JSON.stringify(fields);if(snapshot&&current!==snapshot)key=crypto.randomUUID();snapshot=current;const submit=form.querySelector<HTMLButtonElement>('button[type="submit"]')!;if(submit.disabled)return;void busy(submit,async()=>{tell("Sending your message…");const result=await api<{ok:boolean;status:string;reference:string}>("/api/contact",{...fields,idempotency_key:key});if(result.ok!==true||result.status!=="accepted"||!result.reference)throw new Error("Delivery is not confirmed. Your message is kept here so you can retry.");tell(`Your message was accepted. Reference: ${result.reference}.`,"success");/* Keep fields and key: repeated clicks stay idempotent. */})})}
  const sessionId=new URLSearchParams(location.search).get("session_id");
  if(account&&sessionId){tell("Verifying this checkout with the payment provider…");void api<{verified_payment:boolean;membership?:Identity["membership"]}>("/api/billing/reconcile",{session_id:sessionId}).then(async result=>{paint(await refreshSession());/* The backend success response must explicitly refer to this matched session. */if(result.verified_payment===true)tell("This checkout has been verified by the server. Your current membership is shown above.","success");else tell("This checkout is not confirmed as paid. Your current membership above is not proof of this transaction. Refresh or contact support.","error")}).catch(error=>{tell(error instanceof Error?error.message:"This checkout could not be verified. Do not purchase again to resolve an unknown result.","error");void refreshSession().then(paint).catch(()=>{})})}
  else if(account||checkout.length){void refreshSession().then(paint).catch(error=>tell(error instanceof Error?error.message:"Account status is unavailable. Free practice remains available.","error"))}
  else {void refreshSession().then(paint).catch(()=>{})}
}

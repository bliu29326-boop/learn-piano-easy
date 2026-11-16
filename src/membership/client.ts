/** Same-origin server identity. No session or entitlement is written to browser storage. */
import { mayUse, type FeatureRequest, type Membership } from "./policy";
export interface Identity { user: null | {id:string;name:string;email:string}; membership: Membership; environment:"development" }
export type SessionState = {status:"idle"|"loading"|"error";value:null;error?:string} | {status:"ready";value:Identity};
let state: SessionState = {status:"idle",value:null};
let inFlight: Promise<Identity> | undefined;
const listeners = new Set<(state:SessionState)=>void>();
export const sessionState = () => state;
function publish(next:SessionState):void {state=next;for(const listener of listeners) listener(state)}
export function onSession(listener:(state:SessionState)=>void):()=>void {listeners.add(listener);listener(state);return()=>{listeners.delete(listener)}}
export function apiError(data:unknown,fallback="The request failed. Please retry."):string {
  const value=data as {message?:unknown;error?:unknown};if(typeof value?.message==="string")return value.message;if(typeof value?.error==="string")return value.error;
  if(value?.error&&typeof value.error==="object"&&"code" in value.error&&typeof value.error.code==="string")return `Request not completed: ${value.error.code}. Please retry or contact support.`;
  return fallback;
}
export async function api<T>(path:string, body?:unknown,options:{idempotencyKey?:string}={}):Promise<T> {
  const response=await fetch(path,{method:body===undefined?"GET":"POST",credentials:"same-origin",cache:"no-store",headers:body===undefined?{Accept:"application/json"}:{Accept:"application/json","Content-Type":"application/json",...(options.idempotencyKey?{"Idempotency-Key":options.idempotencyKey}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
  let data:unknown;try{data=await response.json()}catch{throw new Error(`The server could not complete this request (${response.status}).`)}
  if(!response.ok)throw new Error(apiError(data,`Request failed (${response.status}).`));
  return data as T;
}
function validIdentity(value:Identity):boolean {
  return !!value && (value.user!==null || value.membership?.active===false) && (value.user===null || (typeof value.user?.id==="string" && typeof value.user?.email==="string" && typeof value.user?.name==="string")) && typeof value.membership?.active==="boolean" && (value.membership.current_period_end===null || typeof value.membership.current_period_end==="number") && typeof value.membership.cancel_at_period_end==="boolean";
}
export function refreshSession():Promise<Identity> {
  if(inFlight) return inFlight;
  publish({status:"loading",value:null});
  inFlight=api<Identity>("/api/me").then(value=>{if(!validIdentity(value))throw new Error("Account status could not be verified. Please retry.");publish({status:"ready",value});return value}).catch((error:unknown)=>{publish({status:"error",value:null,error:error instanceof Error?error.message:"Account status unavailable."});throw error}).finally(()=>{inFlight=undefined});
  return inFlight;
}
export function signInUrl(returnTo=location.pathname+location.search+location.hash):string {
  const safe=returnTo.startsWith("/")&&!returnTo.startsWith("//")?returnTo:"/account/";
  return `/api/auth/google?return_to=${encodeURIComponent(safe)}`;
}
export function showPlus(reason="This feature is part of Keytrail Plus."):void {
  const old=document.querySelector<HTMLDialogElement>("#keytrail-plus");if(old){if(!old.open)old.showModal();return}
  const modal=document.createElement("dialog");modal.id="keytrail-plus";modal.className="kt-plus-dialog";modal.setAttribute("aria-labelledby","keytrail-plus-title");
  const title=document.createElement("h2");title.id="keytrail-plus-title";title.textContent="A little further with Plus.";
  const text=document.createElement("p");text.textContent=reason+" Free practice, worlds 1 and 2, and your own imports remain available.";
  const signedIn=document.createElement("a");signedIn.href=signInUrl();signedIn.className="kt-button";signedIn.textContent="Sign in";
  const actions=document.createElement("div");actions.className="kt-actions";
  const pricing=document.createElement("a");pricing.href="/pricing/";pricing.className="kt-button kt-primary";pricing.textContent="Explore Plus";
  const close=document.createElement("button");close.className="kt-button";close.textContent="Keep practicing";close.onclick=()=>modal.close();actions.append(pricing,signedIn,close);modal.append(title,text,actions);
  modal.addEventListener("close",()=>modal.remove(),{once:true});document.body.append(modal);modal.showModal();
}
export async function requireFeature(request:FeatureRequest):Promise<boolean> {
  if(mayUse(request,null))return true;
  try{const identity=await refreshSession();if(mayUse(request,identity.membership))return true;showPlus()}catch(error){showPlus(error instanceof Error?error.message:"Membership could not be verified.")}
  return false;
}
export function providerRedirect(url:string):void {
  const parsed=new URL(url,location.origin);
  if(parsed.protocol!=="https:" || ![location.origin,"https://checkout.stripe.com","https://billing.stripe.com"].includes(parsed.origin))throw new Error("The server returned an invalid payment destination.");
  location.assign(parsed.href);
}
/** Protected echo/download: the server validates paid coverage, MIDI header and size. */
export async function exportMidi(bytes:Uint8Array,name:string):Promise<void> {
  if(!(await requireFeature({feature:"export"})))return;
  if(bytes.byteLength>1048576)throw new Error("MIDI export currently supports files up to 1 MB. Your file is still available for free local practice.");
  let binary="";for(let offset=0;offset<bytes.length;offset+=32768)binary+=String.fromCharCode(...bytes.subarray(offset,offset+32768));
  const filename=/^[A-Za-z0-9][A-Za-z0-9_. -]{0,95}\.mid$/i.test(name)?name:"keytrail-export.mid";
  const response=await fetch("/api/export/midi",{method:"POST",credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/json"},body:JSON.stringify({midi_base64:btoa(binary),filename})});
  if(!response.ok){let message="MIDI export could not be authorized. Please retry.";try{message=apiError(await response.json(),message)}catch{}throw new Error(message)}
  if(!(response.headers.get("content-type")??"").includes("audio/midi"))throw new Error("The export response was not a MIDI file.");
  const blob=await response.blob();const url=URL.createObjectURL(blob);const link=document.createElement("a");link.href=url;link.download=filename;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}

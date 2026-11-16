import { fail } from "./http";
export const bytes = (s: string) => new TextEncoder().encode(s);
export function base64url(value: Uint8Array) { return btoa(Array.from(value, c => String.fromCharCode(c)).join("")).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,""); }
export function unbase64(value: string) { if (!/^[A-Za-z0-9+/_=-]+$/.test(value)) throw Error("INVALID_BASE64"); const s = atob(value.replace(/-/g,"+").replace(/_/g,"/")); return Uint8Array.from(s,c=>c.charCodeAt(0)); }
export const random = () => base64url(crypto.getRandomValues(new Uint8Array(32)));
export async function digest(value: string) { return new Uint8Array(await crypto.subtle.digest("SHA-256",bytes(value))); }
export async function mac(secret: string, value: string) { const k = await crypto.subtle.importKey("raw",bytes(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]); return Array.from(new Uint8Array(await crypto.subtle.sign("HMAC",k,bytes(value))),n=>n.toString(16).padStart(2,"0")).join(""); }
export function equal(a: string, b: string) { if (a.length !== b.length) return false; let diff = 0; for(let i=0;i<a.length;i++) diff |= a.charCodeAt(i)^b.charCodeAt(i); return diff===0; }
async function aes(secret: string) { return crypto.subtle.importKey("raw",await digest(secret),"AES-GCM",false,["encrypt","decrypt"]); }
export async function seal(secret: string, context: string, value: unknown) { const iv = crypto.getRandomValues(new Uint8Array(12)); const encrypted = await crypto.subtle.encrypt({name:"AES-GCM",iv,additionalData:bytes(context)},await aes(secret),bytes(JSON.stringify(value))); return "v1."+base64url(iv)+"."+base64url(new Uint8Array(encrypted)); }
export async function open<T>(secret: string, context: string, value: string): Promise<T> { const [v,iv,data] = value.split("."); if(v!=="v1"||!iv||!data) throw Error("INVALID_CIPHERTEXT"); const plain = await crypto.subtle.decrypt({name:"AES-GCM",iv:unbase64(iv),additionalData:bytes(context)},await aes(secret),unbase64(data)); return JSON.parse(new TextDecoder().decode(plain)); }
export function contactKey(value: string | undefined) { try { if (!value || unbase64(value).length!==32) fail(503,"CONTACT_UNAVAILABLE"); return "keytrail-contact-v1:"+value; } catch { fail(503,"CONTACT_UNAVAILABLE"); } }

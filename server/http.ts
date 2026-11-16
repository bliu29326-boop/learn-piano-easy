import type { Env } from "./types";
export const PRIVATE = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer" };
export class HTTPError extends Error { constructor(public status: number, public code: string, public details: Record<string, unknown> = {}) { super(code); } }
export function fail(status: number, code: string, details: Record<string, unknown> = {}): never { throw new HTTPError(status, code, details); }
export const json = (value: unknown, status = 200, extra: Record<string,string> = {}) => Response.json(value, { status, headers: { ...PRIVATE, ...extra } });
export function originConfig(env: Env) {
 let u: URL; try { u = new URL(env.APP_ORIGIN); } catch { fail(503,"CONFIGURATION_UNAVAILABLE"); }
 if (env.ENVIRONMENT !== "development" || u.origin !== env.APP_ORIGIN || u.username || u.password || (u.protocol !== "https:" && !(u.protocol === "http:" && ["localhost", "127.0.0.1", "[::1]"].includes(u.hostname)))) fail(503,"CONFIGURATION_UNAVAILABLE");
}
export function sameOrigin(request: Request, env: Env) { if (new URL(request.url).origin !== env.APP_ORIGIN || request.headers.get("Origin") !== env.APP_ORIGIN || request.headers.get("Sec-Fetch-Site") === "cross-site") fail(403,"ORIGIN_FORBIDDEN"); }
export async function readText(request: Request, max: number) {
 const length = request.headers.get("Content-Length"); if (length && (!/^\d+$/.test(length) || Number(length) > max)) fail(413,"BODY_TOO_LARGE");
 const reader = request.body?.getReader(); if (!reader) return "";
 const chunks: Uint8Array[] = []; let size = 0;
 try { for (;;) { const x = await reader.read(); if (x.done) break; size += x.value.length; if (size > max) { await reader.cancel(); fail(413,"BODY_TOO_LARGE"); } chunks.push(x.value); } } finally { reader.releaseLock(); }
 const out = new Uint8Array(size); let offset = 0; for (const c of chunks) { out.set(c,offset); offset += c.length; }
 try { return new TextDecoder("utf-8", { fatal:true }).decode(out); } catch { fail(400,"INVALID_BODY"); }
}
export async function bodyJSON(request: Request, max = 16384): Promise<Record<string, any>> {
 if (request.headers.get("Content-Type")?.split(";")[0]?.trim() !== "application/json") fail(415,"JSON_REQUIRED");
 const raw = await readText(request,max); let x: unknown; try { x = JSON.parse(raw); } catch { fail(400,"INVALID_BODY"); }
 if (!x || typeof x !== "object" || Array.isArray(x)) fail(400,"INVALID_BODY"); return x as Record<string, any>;
}
export function exact(body: Record<string,unknown>, keys: string[], optional: string[] = []) { if (keys.some(k => !Object.hasOwn(body,k)) || Object.keys(body).some(k => !keys.includes(k) && !optional.includes(k))) fail(400,"INVALID_BODY"); }
export function safeReturn(value: unknown) {
 if (typeof value !== "string" || value.length > 4096 || !value.startsWith("/") || value.startsWith("//") || /[\\\x00-\x1f\x7f]/.test(value)) return "/account/";
 try { let path = new URL(value,"https://return.invalid").pathname; for(let i=0;i<8;i++) { if (path.startsWith("//") || /[\\\x00-\x1f\x7f]/.test(path) || /^\/api(?:\/|$)/i.test(path)) return "/account/"; const decoded = decodeURIComponent(path); if (path === decoded) return value; path = decoded; } } catch {} return "/account/";
}
export const redirect = (location: string, cookies: string[] = [], status = 303) => { const h = new Headers({ ...PRIVATE, Location: location }); for (const c of cookies) h.append("Set-Cookie",c); return new Response(null,{status,headers:h}); };
export async function providerJSON(url: string, init: RequestInit = {}) {
 let r: Response; const provider = new URL(url).hostname;
 try { r = await fetch(url, { ...init, signal: AbortSignal.timeout(15000), redirect: "manual" }); } catch { console.warn({event:"provider_request_failed",provider,status:null,error:"network"}); fail(503,"PROVIDER_UNAVAILABLE"); }
 if (!r.ok) { let error="http"; try {const body=await r.json() as any;if(typeof body.error==="string"&&/^[a-z_]{1,64}$/.test(body.error))error=body.error;}catch{} console.warn({event:"provider_request_failed",provider,status:r.status,error}); fail(503,"PROVIDER_UNAVAILABLE"); } try { return await r.json() as any; } catch { fail(503,"PROVIDER_INVALID_RESPONSE"); }
}

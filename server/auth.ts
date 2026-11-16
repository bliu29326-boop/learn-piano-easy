import type { Env, User } from "./types";
import { stmt } from "./types";
import { bytes, random, digest, base64url, unbase64, mac, seal, open } from "./crypto";
import { fail, json, redirect, safeReturn, providerJSON } from "./http";
export function authSecret(env: Env) { const s=env.AUTH_SECRET??env.SESSION_SECRET; if (!s || bytes(s).length<32) fail(503,"AUTH_UNAVAILABLE"); return s; }
function prefix(env: Env) { return (env.APP_ORIGIN.startsWith("https:")?"__Host-":"")+"keytrail-dev."; }
export function cookie(env: Env, name: string, value: string, maxAge: number) { return prefix(env)+name+"="+value+"; Path=/; HttpOnly; "+(env.APP_ORIGIN.startsWith("https:")?"Secure; ":"")+"SameSite=Lax; Max-Age="+maxAge; }
export function getCookie(request: Request, env: Env, name: string) { const key=prefix(env)+name+"="; const values=(request.headers.get("Cookie")??"").split(";").map(s=>s.trim()).filter(s=>s.startsWith(key)); return values.length===1?values[0]!.slice(key.length):null; }
export async function currentUser(request: Request, env: Env): Promise<User | null> { const token=getCookie(request,env,"session"); if (!token || token.length>256 || !/^[A-Za-z0-9_-]{32,256}$/.test(token)) return null; return stmt(env,"SELECT u.id,u.name,u.email,u.stripe_customer_id FROM kt_sessions s JOIN kt_users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?",await mac(authSecret(env),"session:"+token),Date.now()).first<User>(); }
export async function requireUser(request: Request, env: Env) { const u=await currentUser(request,env); if(!u) fail(401,"SIGN_IN_REQUIRED"); return u; }
export async function logout(request: Request, env: Env) { const token=getCookie(request,env,"session"); if(token) await stmt(env,"DELETE FROM kt_sessions WHERE token_hash=?",await mac(authSecret(env),"session:"+token)).run(); const h=new Headers();h.append("Set-Cookie",cookie(env,"session","",0));h.append("Set-Cookie",cookie(env,"oauth","",0));const r=json({ok:true});for(const [k,v] of h)r.headers.append(k,v);return r; }
export async function googleStart(request: Request, env: Env) {
 const secret=authSecret(env); if(!env.GOOGLE_CLIENT_ID||!env.GOOGLE_CLIENT_SECRET) fail(503,"GOOGLE_UNAVAILABLE");
 if(request.headers.get("Sec-Fetch-Site")==="cross-site"||(request.headers.has("Origin")&&request.headers.get("Origin")!==env.APP_ORIGIN)) fail(403,"ORIGIN_FORBIDDEN");
 const state=random(),browser=random(),verifier=random(),nonce=random(),time=Date.now();
 // Bounded cleanup for expired state; only initiation is stateful, never /me.
 await stmt(env,"DELETE FROM kt_oauth WHERE expires_at<?",time).run();
 await stmt(env,"INSERT INTO kt_oauth(state_hash,browser_hash,verifier,nonce,return_to,expires_at) VALUES(?,?,?,?,?,?)",await mac(secret,"state:"+state),await mac(secret,"oauth:"+browser),await seal(secret,"oauth:"+state,verifier),nonce,safeReturn(new URL(request.url).searchParams.get("return_to")),time+600000).run();
 const u=new URL("https://accounts.google.com/o/oauth2/v2/auth"); const params={client_id:env.GOOGLE_CLIENT_ID,redirect_uri:env.APP_ORIGIN+"/api/auth/callback/google",response_type:"code",scope:"openid email profile",state,nonce,code_challenge:base64url(await digest(verifier)),code_challenge_method:"S256",access_type:"online",prompt:"select_account"}; for(const [k,v]of Object.entries(params))u.searchParams.set(k,v);
 return redirect(u.href,[cookie(env,"oauth",browser,600)],302);
}
async function verifyIDToken(token: unknown, env: Env, nonce: string) {
 if(typeof token!=="string"||token.length>16384) fail(400,"GOOGLE_IDENTITY_INVALID");
 try {
  const parts=token.split(".");if(parts.length!==3) fail(400,"GOOGLE_IDENTITY_INVALID");
  const h=JSON.parse(new TextDecoder().decode(unbase64(parts[0]!))),p=JSON.parse(new TextDecoder().decode(unbase64(parts[1]!)));
  const now=Math.floor(Date.now()/1000);
  if(h.alg!=="RS256"||typeof h.kid!=="string"||!["https://accounts.google.com","accounts.google.com"].includes(p.iss)||p.aud!==env.GOOGLE_CLIENT_ID||(p.azp!==undefined&&p.azp!==env.GOOGLE_CLIENT_ID)||p.nonce!==nonce||!Number.isInteger(p.exp)||p.exp<=now||!Number.isInteger(p.iat)||p.iat>now+60||p.iat<now-3600||typeof p.sub!=="string"||!p.sub||p.sub.length>255||p.email_verified!==true||typeof p.email!=="string"||p.email.length>254) fail(400,"GOOGLE_IDENTITY_INVALID");
  const jwks=await providerJSON("https://www.googleapis.com/oauth2/v3/certs"); const key=Array.isArray(jwks.keys)?jwks.keys.find((x:any)=>x.kid===h.kid&&x.kty==="RSA"&&x.alg==="RS256"&&x.use==="sig"):null;if(!key)fail(400,"GOOGLE_IDENTITY_INVALID");
  const publicKey=await crypto.subtle.importKey("jwk",key,{name:"RSASSA-PKCS1-v1_5",hash:"SHA-256"},false,["verify"]);
  if(!await crypto.subtle.verify("RSASSA-PKCS1-v1_5",publicKey,unbase64(parts[2]!),bytes(parts[0]+"."+parts[1]))) fail(400,"GOOGLE_IDENTITY_INVALID");
  return {sub:p.sub as string,email:p.email as string,name:typeof p.name==="string"?p.name.slice(0,150):"Pianist"};
 }catch(e){ if(e instanceof Error && e.message==="PROVIDER_UNAVAILABLE")throw e;fail(400,"GOOGLE_IDENTITY_INVALID"); }
}
export async function googleCallback(request: Request, env: Env) {
 const secret=authSecret(env),q=new URL(request.url).searchParams,state=q.get("state"),code=q.get("code"),browser=getCookie(request,env,"oauth");
 if(!state||!browser||!code||q.has("error")||state.length>256||code.length>4096||browser.length>256||!env.GOOGLE_CLIENT_ID||!env.GOOGLE_CLIENT_SECRET)fail(400,"OAUTH_STATE_INVALID");
 const row=await stmt(env,"UPDATE kt_oauth SET consumed_at=? WHERE state_hash=? AND browser_hash=? AND consumed_at IS NULL AND expires_at>? RETURNING *",Date.now(),await mac(secret,"state:"+state),await mac(secret,"oauth:"+browser),Date.now()).first<{verifier:string;nonce:string;return_to:string}>();if(!row)fail(400,"OAUTH_STATE_INVALID");
 const verifier=await open<string>(secret,"oauth:"+state,row.verifier);
 const token=await providerJSON("https://oauth2.googleapis.com/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,client_secret:env.GOOGLE_CLIENT_SECRET,code,code_verifier:verifier,redirect_uri:env.APP_ORIGIN+"/api/auth/callback/google",grant_type:"authorization_code"})});
 const identity=await verifyIDToken(token.id_token,env,row.nonce);
 const id="kt_"+crypto.randomUUID();await stmt(env,"INSERT INTO kt_users(id,google_sub,name,email,created_at) VALUES(?,?,?,?,?) ON CONFLICT(google_sub) DO UPDATE SET name=excluded.name,email=excluded.email",id,identity.sub,identity.name,identity.email,Date.now()).run();
 const user=await stmt(env,"SELECT id FROM kt_users WHERE google_sub=?",identity.sub).first<{id:string}>();if(!user)fail(503,"AUTH_UNAVAILABLE");
 const session=random(),old=getCookie(request,env,"session");
 const statements=[stmt(env,"INSERT INTO kt_sessions(token_hash,user_id,expires_at,created_at) VALUES(?,?,?,?)",await mac(secret,"session:"+session),user.id,Date.now()+2592000000,Date.now())];
 if(old) statements.push(stmt(env,"DELETE FROM kt_sessions WHERE token_hash=?",await mac(secret,"session:"+old)));await env.DB.batch(statements);
 return redirect(env.APP_ORIGIN+safeReturn(row.return_to),[cookie(env,"session",session,2592000),cookie(env,"oauth","",0)]);
}

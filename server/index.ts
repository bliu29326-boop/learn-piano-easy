import type { Env } from "./types";
import { originConfig, sameOrigin, bodyJSON, exact, fail, json, HTTPError } from "./http";
import { currentUser, requireUser, googleStart, googleCallback, logout } from "./auth";
import { checkout, reconcile, membership, cancel, webhook } from "./billing";
import { contact } from "./contact";
import { exportMIDI } from "./entitlements";
import { accountPage } from "./account";
export async function handleRequest(request: Request, env: Env): Promise<Response> {
 try {
  originConfig(env); if(new URL(request.url).origin!==env.APP_ORIGIN) fail(403,"ORIGIN_FORBIDDEN");
  const path=new URL(request.url).pathname.replace(/\/$/,""),method=request.method;
  if(path==="/api/stripe/webhook"&&method==="POST")return await webhook(request,env);
  if(method==="POST")sameOrigin(request,env);
  if(path==="/api/auth/google"&&method==="GET")return await googleStart(request,env);
  if(path==="/api/auth/callback/google"&&method==="GET")return await googleCallback(request,env);
  if((path==="/api/me"||path==="/api/entitlements")&&method==="GET") {const user=await currentUser(request,env);return json({user:user?{id:user.id,name:user.name,email:user.email}:null,membership:user?await membership(env,user.id):{active:false,current_period_end:null,cancel_at_period_end:false},environment:"development"});}
  if(path==="/account"&&method==="GET")return await accountPage(request,env);
  if(path==="/api/contact"&&method==="POST")return await contact(request,env,await bodyJSON(request));
  if(path==="/api/auth/logout"&&method==="POST"){exact(await bodyJSON(request),[]);return await logout(request,env);}
  if(method==="POST"&&["/api/checkout","/api/billing/reconcile","/api/billing/cancel","/api/export/midi"].includes(path)) {
   const user=await requireUser(request,env),body=await bodyJSON(request,path==="/api/export/midi"?1401024:16384);
   if(path==="/api/checkout")return await checkout(env,user,body,request.headers.get("Idempotency-Key"));
   if(path==="/api/billing/reconcile")return await reconcile(env,user,body);
   if(path==="/api/billing/cancel")return await cancel(env,user,body);
   return await exportMIDI(env,user,body);
  }
  fail(404,"NOT_FOUND");
 }catch(error){if(error instanceof HTTPError)return json({error:{code:error.code,...error.details}},error.status);return json({error:{code:"SERVICE_UNAVAILABLE"}},503);}
}
export default {fetch:handleRequest};

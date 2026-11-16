import type { Env } from "./types";
import { stmt } from "./types";
import { contactKey, mac, seal, open, random } from "./crypto";
import { exact, fail, json } from "./http";
interface Contact {reference:string;payload_hash:string;data:string;mail_data:string|null;status:string;provider_message_id:string|null;first_attempt_at:number|null;attempts:number;next_at:number;lease_token:string|null;lease_until:number}
interface Input {email:string;topic:string;message:string}
interface Mail {from:string;to:string[];reply_to:string;subject:string;text:string}
export const CONTACT_LIMITS={attempts:5,provider_window_ms:23*3600000,lease_ms:60000,email_day:3,ip_hour:10,total_day:100,total:10000};
function email(x:unknown) {if(typeof x!=="string"||x.length>254||x!==x.trim()||!/^[-A-Za-z0-9.!#$%&'*+/=?^_`{|}~]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,63}$/.test(x)||x.split("@")[0]!.length>64||x.includes(".."))fail(400,"INVALID_EMAIL");return x.toLowerCase();}
function mailConfig(env:Env) {try {if(!env.EMAIL_API_KEY||!env.EMAIL_FROM||!env.SUPPORT_EMAIL||/[\r\n\x00]/.test(env.EMAIL_FROM))return null;email(env.EMAIL_FROM.match(/<([^<>]+)>$/)?.[1]??env.EMAIL_FROM);return {from:env.EMAIL_FROM,to:email(env.SUPPORT_EMAIL)};}catch{return null;}}
function response(row:Contact) {if(row.status==="accepted"&&row.provider_message_id?.trim())return json({ok:true,status:"accepted",reference:row.reference});return json({ok:false,status:row.status==="reconciliation_required"?"reconciliation_required":"saved",reference:row.reference,error:{code:"CONTACT_NOT_ACCEPTED",message:row.status==="reconciliation_required"?"Your message is saved. Contact support for manual review; do not submit another copy.":"Your message is saved, but email acceptance is not confirmed. Retry the same submission later. No automatic retry will run.",retryable:row.status!=="reconciliation_required"}},503,{"Retry-After":String(Math.max(1,Math.ceil((Math.max(row.next_at,row.lease_until)-Date.now())/1000)))});}
const read=(env:Env,reference:string)=>stmt(env,"SELECT * FROM kt_contacts WHERE reference=?",reference).first<Contact>();
async function deliver(env:Env,secret:string,record:Contact) {
 const config=mailConfig(env);if(record.status==="accepted"||record.status==="reconciliation_required"||!config)return response(record);
 const now=Date.now(),lease=random(),l=CONTACT_LIMITS;
 const row=await stmt(env,"UPDATE kt_contacts SET status='sending',lease_token=?,lease_until=? WHERE reference=? AND ((status IN ('pending','retry') AND next_at<=?) OR (status='sending' AND lease_until<=?)) RETURNING *",lease,now+l.lease_ms,record.reference,now,now).first<Contact>();
 if(!row)return response((await read(env,record.reference))!);
 if(row.attempts>=l.attempts||(row.first_attempt_at!==null&&now-row.first_attempt_at>=l.provider_window_ms)){await stmt(env,"UPDATE kt_contacts SET status='reconciliation_required',lease_token=NULL,lease_until=0 WHERE reference=? AND lease_token=?",row.reference,lease).run();return response((await read(env,row.reference))!);}
 try {
  let mail:Mail;if(row.mail_data)mail=await open<Mail>(secret,"contact-mail:"+row.reference,row.mail_data);else{const input=await open<Input>(secret,"contact:"+row.reference,row.data);mail={from:config.from,to:[config.to],reply_to:input.email,subject:"Keytrail contact: "+input.topic,text:`Keytrail website contact\nReference: ${row.reference}\nTopic: ${input.topic}\nVisitor: ${input.email}\n\n${input.message}`};if(!await stmt(env,"UPDATE kt_contacts SET mail_data=? WHERE reference=? AND lease_token=? AND mail_data IS NULL RETURNING reference",await seal(secret,"contact-mail:"+row.reference,mail),row.reference,lease).first())return response((await read(env,row.reference))!);}
  const intent=Date.now();if(!await stmt(env,"UPDATE kt_contacts SET first_attempt_at=COALESCE(first_attempt_at,?),attempts=attempts+1 WHERE reference=? AND lease_token=? AND lease_until>? AND attempts<? AND (first_attempt_at IS NULL OR first_attempt_at>?) RETURNING reference",intent,row.reference,lease,intent,l.attempts,intent-l.provider_window_ms).first())return response((await read(env,row.reference))!);
  const res=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+env.EMAIL_API_KEY,"Content-Type":"application/json","Idempotency-Key":"keytrail-contact:"+row.reference},body:JSON.stringify(mail),signal:AbortSignal.timeout(15000),redirect:"manual"});
  const data:any=res.ok?await res.json():null;if(typeof data?.id!=="string"||!data.id.trim()||data.id.length>256)throw Error("PROVIDER_NOT_ACCEPTED");
  await stmt(env,"UPDATE kt_contacts SET status='accepted',provider_message_id=?,accepted_at=?,lease_token=NULL,lease_until=0 WHERE reference=? AND lease_token=?",data.id,Date.now(),row.reference,lease).run();
 }catch{await stmt(env,"UPDATE kt_contacts SET status='retry',next_at=?,lease_token=NULL,lease_until=0 WHERE reference=? AND lease_token=?",Date.now()+60000*Math.pow(2,row.attempts),row.reference,lease).run();}
 return response((await read(env,row.reference))!);
}
export async function contact(request:Request,env:Env,body:Record<string,unknown>) {
 exact(body,["email","topic","message","idempotency_key"]);const secret=contactKey(env.CONTACT_DATA_KEY),address=email(body.email);
 if(typeof body.topic!=="string"||!body.topic.trim()||body.topic.length>100||/[\x00-\x1f\x7f]/.test(body.topic)||typeof body.message!=="string"||!body.message.trim()||body.message.length>6000||/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(body.message)||typeof body.idempotency_key!=="string"||!/^[A-Za-z0-9_-]{8,128}$/.test(body.idempotency_key))fail(400,"INVALID_BODY");
 const input={email:address,topic:body.topic.trim(),message:body.message.trim()},key=await mac(secret,"contact-idempotency:"+body.idempotency_key),payload=await mac(secret,"contact-payload:"+JSON.stringify(input));
 const lookup=()=>stmt(env,"SELECT * FROM kt_contacts WHERE idempotency_hash=?",key).first<Contact>();let row=await lookup();
 if(!row){const reference=crypto.randomUUID(),now=Date.now(),em=await mac(secret,"email:"+address),ip=await mac(secret,"ip:"+(request.headers.get("CF-Connecting-IP")??"unknown")),l=CONTACT_LIMITS;
  await stmt(env,`INSERT OR IGNORE INTO kt_contacts(reference,idempotency_hash,payload_hash,email_hash,ip_hash,data,created_at) SELECT ?,?,?,?,?,?,?
   WHERE (SELECT count(*) FROM kt_contacts WHERE email_hash=? AND created_at>=?)<?
   AND (SELECT count(*) FROM kt_contacts WHERE ip_hash=? AND created_at>=?)<?
   AND (SELECT count(*) FROM kt_contacts WHERE created_at>=?)<? AND (SELECT count(*) FROM kt_contacts)<?`,reference,key,payload,em,ip,await seal(secret,"contact:"+reference,input),now,em,now-86400000,l.email_day,ip,now-3600000,l.ip_hour,now-86400000,l.total_day,l.total).run();row=await lookup();if(!row)fail(429,"CONTACT_LIMIT_REACHED");}
 if(row.payload_hash!==payload)fail(409,"IDEMPOTENCY_CONFLICT");
 try{return await deliver(env,secret,row);}catch{try{return response((await read(env,row.reference))??row);}catch{return response(row);}}
}
/** Owner-only tooling may call this directly; deliberately not an HTTP admin route or scheduler. */
export async function recoverContact(env:Env,reference:string) {const row=await read(env,reference);if(!row)fail(404,"NOT_FOUND");return deliver(env,contactKey(env.CONTACT_DATA_KEY),row);}

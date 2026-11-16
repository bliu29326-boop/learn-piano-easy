import type { Env, User, Order, Membership } from "./types";
import { stmt } from "./types";
import { fail, exact, json, providerJSON, readText } from "./http";
import { mac, equal } from "./crypto";
export const STRIPE_API_VERSION = "2025-06-30.basil";
const id = (x:any):string|null => typeof x==="string"?x:typeof x?.id==="string"?x.id:null;
const validID = (value:unknown,prefix:string) => typeof value==="string"&&new RegExp("^"+prefix+"[A-Za-z0-9_]+$").test(value);
function config(env:Env) {
 if(env.ENVIRONMENT!=="development"||!env.STRIPE_SECRET_KEY||! /^(?:sk|rk)_test_/.test(env.STRIPE_SECRET_KEY)||!validID(env.STRIPE_ACCOUNT_ID,"acct_")||!validID(env.STRIPE_PRICE_ID,"price_")||!validID(env.STRIPE_PRODUCT_ID,"prod_")||env.STRIPE_PROJECT_ID!=="keytrail-dev"||!env.STRIPE_WEBHOOK_SECRET)fail(503,"PAYMENTS_UNAVAILABLE");
}
async function stripe(env:Env,path:string,method="GET",body?:URLSearchParams,key?:string) {config(env);return providerJSON("https://api.stripe.com/v1"+path,{method,headers:{Authorization:"Bearer "+env.STRIPE_SECRET_KEY,"Stripe-Version":STRIPE_API_VERSION,...(body?{"Content-Type":"application/x-www-form-urlencoded"}:{}),...(key?{"Idempotency-Key":key}:{})},...(body?{body}:{})});}
function list(value:any) {if(!value||value.has_more!==false||!Array.isArray(value.data)||value.data.length>100)fail(409,"BILLING_RECONCILIATION_REQUIRED");return value.data as any[];}
function priceMatches(p:any,o:Pick<Order,"price_id"|"product_id">,active=false) {return p?.id===o.price_id&&id(p.product)===o.product_id&&p.livemode===false&&(!active||p.active===true)&&p.currency==="usd"&&p.unit_amount===999&&p.type==="recurring"&&p.recurring?.interval==="month"&&p.recurring.interval_count===1&&p.recurring.usage_type==="licensed";}
function scope(env:Env,o:Order) {config(env);if(o.site!==env.STRIPE_PROJECT_ID||o.account_id!==env.STRIPE_ACCOUNT_ID||o.environment!==env.ENVIRONMENT||o.price_id!==env.STRIPE_PRICE_ID||o.product_id!==env.STRIPE_PRODUCT_ID||o.origin!==env.APP_ORIGIN)fail(403,"BILLING_SCOPE_MISMATCH");}
function metadata(o:Order) {return {project:o.site,environment:o.environment,account_id:o.account_id,order_id:o.id,user_id:o.user_id};}
function metadataMatches(o:Order,m:any) {return !!m&&Object.entries(metadata(o)).every(([k,v])=>m[k]===v);}
async function checked(env:Env,o?:Order,forCheckout=false) {config(env);if(o)scope(env,o);const a=await stripe(env,"/account");if(a.id!==env.STRIPE_ACCOUNT_ID)fail(403,"STRIPE_ACCOUNT_MISMATCH");const p=await stripe(env,"/prices/"+env.STRIPE_PRICE_ID);if(!priceMatches(p,o??{price_id:env.STRIPE_PRICE_ID!,product_id:env.STRIPE_PRODUCT_ID!},forCheckout))fail(403,"STRIPE_PRICE_MISMATCH");}
function sessionMatches(s:any,o:Order) {if(!s||!validID(s.id,"cs_test_")||s.livemode!==false||s.mode!=="subscription"||s.client_reference_id!==o.id||!metadataMatches(o,s.metadata)||(o.session_id&&s.id!==o.session_id)||(o.customer_id&&id(s.customer)!==o.customer_id)||(o.subscription_id&&id(s.subscription)!==o.subscription_id)||!["open","complete","expired"].includes(s.status))fail(403,"CHECKOUT_SCOPE_MISMATCH");}
function subscriptionMatches(s:any,o:Order,customer:string) {const items=list(s?.items);if(!s||s.livemode!==false||id(s.customer)!==customer||!metadataMatches(o,s.metadata)||(o.subscription_id&&s.id!==o.subscription_id)||items.length!==1||items[0].quantity!==1||!priceMatches(items[0].price,o)||!["active","past_due","canceled","unpaid","incomplete","incomplete_expired","paused","trialing"].includes(s.status))fail(403,"SUBSCRIPTION_SCOPE_MISMATCH");return items[0];}
export async function membership(env:Env,userID:string):Promise<Membership> {
 const now=Math.floor(Date.now()/1000);
 const row=await stmt(env,"SELECT c.period_end,o.cancel_at_period_end,o.subscription_status FROM kt_coverage c JOIN kt_orders o ON o.id=c.order_id WHERE o.user_id=? AND o.site=? AND o.environment='development' AND o.account_id=? AND o.price_id=? AND c.revoked=0 AND c.period_start<=? AND c.period_end>? ORDER BY c.period_end DESC LIMIT 1",userID,env.STRIPE_PROJECT_ID??"keytrail-dev",env.STRIPE_ACCOUNT_ID??"",env.STRIPE_PRICE_ID??"",now,now).first<{period_end:number;cancel_at_period_end:number;subscription_status:string}>();
 if(!row)return {active:false,current_period_end:null,cancel_at_period_end:false};return {active:true,current_period_end:row.period_end,cancel_at_period_end:!!row.cancel_at_period_end||row.subscription_status==="canceled"};
}
const orderByID=(env:Env,orderID:string)=>stmt(env,"SELECT * FROM kt_orders WHERE id=?",orderID).first<Order>();
function assertion(env:Env) {return stmt(env,"SELECT CASE WHEN changes()=1 THEN 1 ELSE json('KEYTRAIL_CAS_CONFLICT') END");}
async function canRetire(env:Env,o:Order):Promise<boolean> {
 scope(env,o);if(!o.session_id)fail(409,"CHECKOUT_RECONCILIATION_REQUIRED");const s=await stripe(env,"/checkout/sessions/"+o.session_id);sessionMatches(s,o);
 if(s.status==="open")return false;
 if(s.status==="expired"&&s.payment_status==="unpaid"&&!id(s.subscription))return true;
 const sid=id(s.subscription);if(!sid)return false;const sub=await stripe(env,"/subscriptions/"+sid),customer=id(s.customer);if(!customer)return false;subscriptionMatches(sub,o,customer);
 if(!["canceled","incomplete_expired"].includes(sub.status))return false;
 const invoices=list(await stripe(env,"/invoices?subscription="+encodeURIComponent(sid)+"&limit=100"));
 // Any pending or unknown money, paid future period or pagination retains the generation.
 for(const invoice of invoices){if(!["paid","void"].includes(invoice.status))return false;const lines=list(await stripe(env,"/invoices/"+invoice.id+"/lines?limit=100"));if(lines.some(x=>x.period?.end>Math.floor(Date.now()/1000)&&invoice.amount_paid>0))return false;}
 const coverage=await stmt(env,"SELECT invoice_id FROM kt_coverage WHERE order_id=? AND revoked=0 AND period_end>? LIMIT 1",o.id,Math.floor(Date.now()/1000)).first();return !coverage;
}
async function noOtherSubscription(env:Env,user:User) {
 const fresh=await stmt(env,"SELECT stripe_customer_id FROM kt_users WHERE id=?",user.id).first<{stripe_customer_id:string|null}>();if(!fresh?.stripe_customer_id)return;
 const all=list(await stripe(env,"/subscriptions?customer="+encodeURIComponent(fresh.stripe_customer_id)+"&status=all&limit=100"));
 for(const sub of all) {if(!["canceled","incomplete_expired"].includes(sub.status))fail(409,"SUBSCRIPTION_ALREADY_EXISTS");const old=await stmt(env,"SELECT * FROM kt_orders WHERE subscription_id=? AND user_id=?",sub.id,user.id).first<Order>();if(!old||!await canRetire(env,old))fail(409,"SUBSCRIPTION_RECONCILIATION_REQUIRED");}
}
async function prepareOrder(env:Env,user:User,key:string|null) {
 if(key){const alias=await stmt(env,"SELECT order_id FROM kt_checkout_keys WHERE user_id=? AND request_key=?",user.id,key).first<{order_id:string}>();if(alias){const old=await orderByID(env,alias.order_id);if(!old)fail(409,"BILLING_RECONCILIATION_REQUIRED");return old;}}
 let current=await stmt(env,"SELECT o.* FROM kt_checkout_slots s JOIN kt_orders o ON o.id=s.order_id WHERE s.user_id=?",user.id).first<Order>();
 if(current){scope(env,current);if(current.session_id){const s=await stripe(env,"/checkout/sessions/"+current.session_id);sessionMatches(s,current);if(s.status!=="open"){if(!await canRetire(env,current))fail(409,"SUBSCRIPTION_ALREADY_EXISTS");}else return bindKey(env,user.id,key,current);}else return bindKey(env,user.id,key,current);}
 await noOtherSubscription(env,user);
 // Retired rows are retained. No absent-slot legacy history can be skipped.
 const historical=(await stmt(env,"SELECT * FROM kt_orders WHERE user_id=? AND status<>'retired'",user.id).all<Order>()).results;
 for(const o of historical)if(o.id!==current?.id&&!await canRetire(env,o))fail(409,"SUBSCRIPTION_RECONCILIATION_REQUIRED");
 const candidate="kto_"+crypto.randomUUID(),now=Date.now(),customer=(await stmt(env,"SELECT stripe_customer_id FROM kt_users WHERE id=?",user.id).first<{stripe_customer_id:string|null}>())?.stripe_customer_id??null;
 const insertion="INSERT INTO kt_orders(id,user_id,site,account_id,environment,price_id,product_id,origin,checkout_email,customer_id,created_at,expires_at) SELECT ?,?,?,?,?,?,?,?,?,?,?,?";
 const args=[candidate,user.id,env.STRIPE_PROJECT_ID!,env.STRIPE_ACCOUNT_ID!,env.ENVIRONMENT,env.STRIPE_PRICE_ID!,env.STRIPE_PRODUCT_ID!,env.APP_ORIGIN,user.email,customer,now,Math.floor(now/1000)+3600];
 if(current){
  // CAS both slot movement and retirement in one D1 transaction.
  try{await env.DB.batch([stmt(env,insertion,...args),stmt(env,"UPDATE kt_checkout_slots SET order_id=? WHERE user_id=? AND order_id=?",candidate,user.id,current.id),assertion(env),stmt(env,"UPDATE kt_orders SET status='retired' WHERE id=?",current.id)]);}catch{const winner=await stmt(env,"SELECT o.* FROM kt_checkout_slots s JOIN kt_orders o ON o.id=s.order_id WHERE s.user_id=?",user.id).first<Order>();if(!winner||winner.id===current.id)fail(409,"CHECKOUT_BUSY");return bindKey(env,user.id,key,winner);}
 }else await env.DB.batch([stmt(env,insertion+" WHERE NOT EXISTS(SELECT 1 FROM kt_checkout_slots WHERE user_id=?)",...args,user.id),stmt(env,"INSERT OR IGNORE INTO kt_checkout_slots(user_id,order_id) SELECT ?,? WHERE EXISTS(SELECT 1 FROM kt_orders WHERE id=?)",user.id,candidate,candidate)]);
 current=await stmt(env,"SELECT o.* FROM kt_checkout_slots s JOIN kt_orders o ON o.id=s.order_id WHERE s.user_id=?",user.id).first<Order>();if(!current)fail(409,"CHECKOUT_BUSY");return bindKey(env,user.id,key,current);
}
async function bindKey(env:Env,userID:string,key:string|null,o:Order) {if(key){await stmt(env,"INSERT OR IGNORE INTO kt_checkout_keys(user_id,request_key,order_id) VALUES(?,?,?)",userID,key,o.id).run();const a=await stmt(env,"SELECT order_id FROM kt_checkout_keys WHERE user_id=? AND request_key=?",userID,key).first<{order_id:string}>();if(a?.order_id!==o.id){const old=a?await orderByID(env,a.order_id):null;if(!old)fail(409,"IDEMPOTENCY_CONFLICT");return old;}}return o;}
export async function checkout(env:Env,user:User,body:Record<string,unknown>,requestKey:string|null) {
 exact(body,[]);if(requestKey&&!/^[A-Za-z0-9_-]{8,128}$/.test(requestKey))fail(400,"INVALID_IDEMPOTENCY_KEY");await checked(env,undefined,true);
 if((await membership(env,user.id)).active)fail(409,"SUBSCRIPTION_ALREADY_EXISTS");const o=await prepareOrder(env,user,requestKey);scope(env,o);
 let s:any;if(o.session_id)s=await stripe(env,"/checkout/sessions/"+o.session_id);else{
  // A lost creation result only reuses the canonical provider key for 25 minutes.
  // Frozen one-hour expiry retains Stripe's minimum 30-minute creation margin.
  if(Date.now()-o.created_at>=25*60000||o.expires_at<=Math.floor(Date.now()/1000)+1860)fail(409,"CHECKOUT_RECONCILIATION_REQUIRED");
  const p=new URLSearchParams({mode:"subscription","line_items[0][price]":o.price_id,"line_items[0][quantity]":"1","payment_method_types[0]":"card",client_reference_id:o.id,success_url:env.APP_ORIGIN+"/account/?session_id={CHECKOUT_SESSION_ID}",cancel_url:env.APP_ORIGIN+"/account/?checkout=cancelled",expires_at:String(o.expires_at),allow_promotion_codes:"false","automatic_tax[enabled]":"false","adaptive_pricing[enabled]":"false"});
  // No trial_period_days, setup fees, annual price, promotions or client-selected price.
  if(o.customer_id)p.set("customer",o.customer_id);else p.set("customer_email",o.checkout_email);
  for(const[k,v]of Object.entries(metadata(o))){p.set("metadata["+k+"]",v);p.set("subscription_data[metadata]["+k+"]",v);}
  const created=await stripe(env,"/checkout/sessions","POST",p,"keytrail-checkout:"+o.account_id+":"+o.id);if(!validID(created.id,"cs_test_"))fail(503,"CHECKOUT_INVALID");s=await stripe(env,"/checkout/sessions/"+created.id);
 }
 sessionMatches(s,o);if(s.status!=="open"||s.payment_status!=="unpaid")fail(409,"CHECKOUT_NOT_OPEN");let url:URL;try{url=new URL(s.url);}catch{fail(503,"CHECKOUT_INVALID");}if(url.origin!=="https://checkout.stripe.com"||url.username||url.password)fail(503,"CHECKOUT_INVALID");
 await stmt(env,"UPDATE kt_orders SET session_id=?,checkout_url=? WHERE id=? AND (session_id IS NULL OR session_id=?)",s.id,url.href,o.id,s.id).run();const persisted=await orderByID(env,o.id);if(!persisted||persisted.session_id!==s.id||persisted.checkout_url!==url.href)fail(409,"CHECKOUT_BUSY");return json({url:url.href,order_id:o.id});
}
interface Proof {invoice:string;subscription:string;customer:string;intent:string;charge:string;start:number;end:number;refund:number;disputed:boolean}
async function invoiceProof(env:Env,o:Order,sub:any,invoiceID:string,customer:string):Promise<Proof|null> {
 const inv=await stripe(env,"/invoices/"+invoiceID);
 if(inv.id!==invoiceID||inv.livemode!==false||id(inv.customer)!==customer||id(inv.parent?.subscription_details?.subscription)!==sub.id||inv.currency!=="usd")fail(403,"INVOICE_SCOPE_MISMATCH");
 if(inv.status!=="paid") {if(!["draft","open","void","uncollectible"].includes(inv.status))fail(403,"INVOICE_INVALID");return null;}
 if(inv.amount_paid!==999||inv.amount_due!==999||inv.amount_remaining!==0||inv.total!==999||inv.subtotal!==999||!["subscription_create","subscription_cycle"].includes(inv.billing_reason))fail(403,"PAYMENT_NOT_PROVEN");
 const lines=list(await stripe(env,"/invoices/"+invoiceID+"/lines?limit=100")),line=lines[0],details=line?.parent?.subscription_item_details;
 if(lines.length!==1||line.amount!==999||line.currency!=="usd"||line.quantity!==1||id(line.pricing?.price_details?.price)!==o.price_id||id(line.pricing?.price_details?.product)!==o.product_id||details?.proration!==false||id(details?.subscription)!==sub.id||details?.subscription_item!==sub.items.data[0].id||!Number.isInteger(line.period?.start)||!Number.isInteger(line.period?.end)||line.period.end<=line.period.start)fail(403,"INVOICE_PRICE_MISMATCH");
 const payments=list(await stripe(env,"/invoice_payments?invoice="+encodeURIComponent(invoiceID)+"&limit=100")),pay=payments[0];
 if(payments.length!==1||pay.status!=="paid"||pay.livemode!==false||id(pay.invoice)!==invoiceID||pay.amount_paid!==999||pay.amount_requested!==999||pay.currency!=="usd"||pay.payment?.type!=="payment_intent"||!validID(id(pay.payment.payment_intent),"pi_"))fail(403,"PAYMENT_NOT_PROVEN");
 const pi=await stripe(env,"/payment_intents/"+id(pay.payment.payment_intent));if(pi.livemode!==false||id(pi.customer)!==customer||pi.status!=="succeeded"||pi.amount!==999||pi.amount_received!==999||pi.amount_capturable!==0||pi.currency!=="usd"||!validID(id(pi.latest_charge),"ch_"))fail(403,"PAYMENT_NOT_CAPTURED");
 const ch=await stripe(env,"/charges/"+id(pi.latest_charge));if(ch.livemode!==false||id(ch.customer)!==customer||id(ch.payment_intent)!==pi.id||ch.amount!==999||ch.amount_captured!==999||ch.currency!=="usd"||ch.status!=="succeeded"||ch.paid!==true||ch.captured!==true||!Number.isInteger(ch.amount_refunded)||ch.amount_refunded<0||ch.amount_refunded>999)fail(403,"PAYMENT_NOT_CAPTURED");
 let disputed=false;if(ch.disputed===true){const disputes=list(await stripe(env,"/disputes?charge="+encodeURIComponent(ch.id)+"&limit=100"));if(!disputes.length)fail(409,"DISPUTE_RECONCILIATION_REQUIRED");disputed=disputes.some(d=>id(d.charge)!==ch.id||!["won","warning_closed"].includes(d.status));}else if(ch.disputed!==false)fail(403,"PAYMENT_NOT_PROVEN");
 return {invoice:inv.id,subscription:sub.id,customer,intent:pi.id,charge:ch.id,start:line.period.start,end:line.period.end,refund:ch.amount_refunded,disputed};
}
export async function reconcileOrder(env:Env,old:Order,sessionID:string|null,invoiceID?:string,event?:{id:string;type:string}) {
 scope(env,old);const o=await stmt(env,"UPDATE kt_orders SET proof_revision=proof_revision+1 WHERE id=? RETURNING *",old.id).first<Order>();if(!o)fail(404,"ORDER_NOT_FOUND");await checked(env,o);
 let s:any=null,sub:any=null,customer=o.customer_id,session=o.session_id;
 if(sessionID||session){s=await stripe(env,"/checkout/sessions/"+(sessionID??session));sessionMatches(s,o);session=s.id;
  if(s.status==="complete"){customer=id(s.customer);const sid=id(s.subscription);if(!customer||!sid)fail(403,"SUBSCRIPTION_SCOPE_MISMATCH");sub=await stripe(env,"/subscriptions/"+sid);}else if(s.status==="expired"&&s.payment_status!=="unpaid")fail(403,"PAYMENT_NOT_PROVEN");
 }else if(o.subscription_id){sub=await stripe(env,"/subscriptions/"+o.subscription_id);customer=id(sub.customer);}else fail(409,"CHECKOUT_RECONCILIATION_REQUIRED");
 let proof:Proof|null=null,item:any=null;if(sub){if(!customer)fail(403,"SUBSCRIPTION_SCOPE_MISMATCH");item=subscriptionMatches(sub,o,customer);
  // Exact checkout line items defend against future integration parameter drift.
  if(s){const lines=list(await stripe(env,"/checkout/sessions/"+s.id+"/line_items?limit=100"));if(lines.length!==1||lines[0].quantity!==1||lines[0].amount_total!==999||lines[0].amount_subtotal!==999||lines[0].currency!=="usd"||!priceMatches(lines[0].price,o))fail(403,"STRIPE_PRICE_MISMATCH");}
  const invoice=invoiceID??id(sub.latest_invoice);if(invoice)proof=await invoiceProof(env,o,sub,invoice,customer);
 }
 const periodEnd=Number.isInteger(item?.current_period_end)?item.current_period_end:null;
 const writes=[stmt(env,"UPDATE kt_orders SET session_id=COALESCE(session_id,?),subscription_id=COALESCE(subscription_id,?),customer_id=COALESCE(customer_id,?),subscription_status=?,cancel_at_period_end=?,provider_period_end=?,status=? WHERE id=? AND proof_revision=? AND (session_id IS NULL OR session_id IS ?) AND (subscription_id IS NULL OR subscription_id IS ?) AND (customer_id IS NULL OR customer_id IS ?)",session,sub?.id??null,customer,sub?.status??null,sub?.cancel_at_period_end===true?1:0,periodEnd,proof?"paid":s?.status==="expired"?"expired":"pending",o.id,o.proof_revision,session,sub?.id??null,customer),assertion(env)];
 if(customer){writes.push(stmt(env,"UPDATE kt_users SET stripe_customer_id=? WHERE id=? AND (stripe_customer_id IS NULL OR stripe_customer_id=?)",customer,o.user_id,customer),assertion(env));}
 if(proof){const p=proof;
  // The order revision fences both first insertion and updates. Invoice/intent/charge IDs stay immutable.
  writes.push(stmt(env,`INSERT INTO kt_coverage(invoice_id,order_id,subscription_id,customer_id,payment_intent_id,charge_id,amount_paid,currency,period_start,period_end,revoked,refunded_amount,disputed,verified_at,source)
   VALUES(?,?,?,?,?,?,999,'usd',?,?,?,?,?,?,?) ON CONFLICT(invoice_id) DO UPDATE SET revoked=CASE WHEN MAX(kt_coverage.refunded_amount,excluded.refunded_amount)>=999 OR excluded.disputed=1 THEN 1 ELSE 0 END,refunded_amount=MAX(kt_coverage.refunded_amount,excluded.refunded_amount),disputed=excluded.disputed,verified_at=excluded.verified_at,source=excluded.source
   WHERE kt_coverage.order_id IS excluded.order_id AND kt_coverage.subscription_id IS excluded.subscription_id AND kt_coverage.customer_id IS excluded.customer_id AND kt_coverage.payment_intent_id IS excluded.payment_intent_id AND kt_coverage.charge_id IS excluded.charge_id AND kt_coverage.period_start IS excluded.period_start AND kt_coverage.period_end IS excluded.period_end`,p.invoice,o.id,p.subscription,p.customer,p.intent,p.charge,p.start,p.end,p.refund===999||p.disputed?1:0,p.refund,p.disputed?1:0,Date.now(),event?"signed_webhook_server_verified":"server_verified"),assertion(env));
 }
 if(event)writes.push(stmt(env,"INSERT OR IGNORE INTO kt_stripe_events(id,type,processed_at) VALUES(?,?,?)",event.id,event.type,Date.now()));
 try{await env.DB.batch(writes);}catch{fail(409,"BILLING_PROOF_SUPERSEDED");}
 return {membership:await membership(env,o.user_id),verified_payment:!!proof};
}
export async function reconcile(env:Env,user:User,body:Record<string,unknown>) {
 exact(body,["session_id"]);if(!validID(body.session_id,"cs_test_"))fail(400,"INVALID_SESSION_ID");let o=await stmt(env,"SELECT * FROM kt_orders WHERE session_id=? AND user_id=?",body.session_id,user.id).first<Order>();
 if(!o){await checked(env);const s=await stripe(env,"/checkout/sessions/"+body.session_id);const candidate=typeof s.metadata?.order_id==="string"?await orderByID(env,s.metadata.order_id):null;if(!candidate||candidate.user_id!==user.id)fail(404,"ORDER_NOT_FOUND");sessionMatches(s,candidate);o=candidate;}
 return json(await reconcileOrder(env,o,body.session_id as string));
}
/** Explicit confirmation avoids a globally configured portal enabling price changes or new trials. */
export async function cancel(env:Env,user:User,body:Record<string,unknown>) {
 exact(body,["confirm"]);if(body.confirm!==true)fail(400,"CANCELLATION_CONFIRMATION_REQUIRED");
 const o=await stmt(env,"SELECT * FROM kt_orders WHERE user_id=? AND subscription_id IS NOT NULL AND status<>'retired' ORDER BY created_at DESC LIMIT 1",user.id).first<Order>();if(!o?.subscription_id)fail(404,"SUBSCRIPTION_NOT_FOUND");await checked(env,o);
 const sub=await stripe(env,"/subscriptions/"+o.subscription_id);subscriptionMatches(sub,o,o.customer_id!);if(sub.status!=="canceled"){await stripe(env,"/subscriptions/"+sub.id,"POST",new URLSearchParams({cancel_at_period_end:"true"}),"keytrail-cancel:"+o.id);const updated=await stripe(env,"/subscriptions/"+sub.id);subscriptionMatches(updated,o,o.customer_id!);if(updated.cancel_at_period_end!==true)fail(503,"CANCELLATION_NOT_CONFIRMED");}
 const result=await reconcileOrder(env,o,o.session_id);return json({ok:true,...result,cancel_at_period_end:true});
}
export const WEBHOOK_EVENTS=["invoice.paid","invoice.payment_succeeded","invoice.payment_failed","checkout.session.completed","checkout.session.expired","checkout.session.async_payment_succeeded","customer.subscription.created","customer.subscription.updated","customer.subscription.deleted","charge.refunded","charge.dispute.created","charge.dispute.updated","charge.dispute.closed","charge.dispute.funds_withdrawn","charge.dispute.funds_reinstated"];
async function signedEvent(request:Request,env:Env) {
 config(env);const raw=await readText(request,262144),header=request.headers.get("Stripe-Signature")??"",parts=header.split(","),ts=parts.filter(x=>x.startsWith("t="));if(ts.length!==1||!/^t=\d+$/.test(ts[0]!)||Math.abs(Math.floor(Date.now()/1000)-Number(ts[0]!.slice(2)))>300)fail(400,"WEBHOOK_SIGNATURE_INVALID");
 const signature=await mac(env.STRIPE_WEBHOOK_SECRET!,ts[0]!.slice(2)+"."+raw);if(!parts.some(p=>/^v1=[0-9a-f]{64}$/.test(p)&&equal(p.slice(3),signature)))fail(400,"WEBHOOK_SIGNATURE_INVALID");let event:any;try{event=JSON.parse(raw);}catch{fail(400,"WEBHOOK_INVALID");}if(!validID(event.id,"evt_")||event.livemode!==false||(event.account&&event.account!==env.STRIPE_ACCOUNT_ID)||typeof event.type!=="string"||!event.data?.object)fail(403,"WEBHOOK_SCOPE_MISMATCH");return event;
}
export async function webhook(request:Request,env:Env) {
 const event=await signedEvent(request,env);if(await stmt(env,"SELECT id FROM kt_stripe_events WHERE id=?",event.id).first())return json({received:true,duplicate:true});
 if(!WEBHOOK_EVENTS.includes(event.type))return json({received:true,ignored:true});await checked(env);
 const x=event.data.object;let order:Order|null=null,sessionID:string|null=null,invoiceID:string|undefined,sub:any;
 if(event.type.startsWith("checkout.session.")){if(!validID(x.id,"cs_test_"))fail(403,"WEBHOOK_SCOPE_MISMATCH");const s=await stripe(env,"/checkout/sessions/"+x.id);sessionID=s.id;order=typeof s.metadata?.order_id==="string"?await orderByID(env,s.metadata.order_id):null;if(order)sessionMatches(s,order);}
 else if(event.type.startsWith("customer.subscription.")){if(!validID(x.id,"sub_"))fail(403,"WEBHOOK_SCOPE_MISMATCH");sub=await stripe(env,"/subscriptions/"+x.id);}
 else if(event.type.startsWith("invoice.")){if(!validID(x.id,"in_"))fail(403,"WEBHOOK_SCOPE_MISMATCH");const inv=await stripe(env,"/invoices/"+x.id);invoiceID=inv.id;const sid=id(inv.parent?.subscription_details?.subscription);if(sid)sub=await stripe(env,"/subscriptions/"+sid);}
 else{
  const chargeID=event.type==="charge.refunded"?x.id:id(x.charge);if(!validID(chargeID,"ch_"))fail(403,"WEBHOOK_SCOPE_MISMATCH");const ch=await stripe(env,"/charges/"+chargeID);const known=await stmt(env,"SELECT o.*,c.invoice_id AS exact_invoice FROM kt_coverage c JOIN kt_orders o ON o.id=c.order_id WHERE c.charge_id=?",chargeID).first<Order&{exact_invoice:string}>();
  if(known){order=known;invoiceID=known.exact_invoice;}else{const pi=id(ch.payment_intent);if(pi){const pays=list(await stripe(env,"/invoice_payments?payment[type]=payment_intent&payment[payment_intent]="+encodeURIComponent(pi)+"&limit=100"));if(pays.length===1){invoiceID=id(pays[0].invoice)??undefined;if(invoiceID){const inv=await stripe(env,"/invoices/"+invoiceID);const sid=id(inv.parent?.subscription_details?.subscription);if(sid)sub=await stripe(env,"/subscriptions/"+sid);}}}}
 }
 if(!order&&sub&&typeof sub.metadata?.order_id==="string")order=await orderByID(env,sub.metadata.order_id);
 // Unrelated merchant events are acknowledged, never attached by email or metadata user ID alone.
 if(!order)return json({received:true,ignored:true});scope(env,order);if(sub&&!metadataMatches(order,sub.metadata))fail(403,"WEBHOOK_SCOPE_MISMATCH");
 const result=await reconcileOrder(env,order,sessionID??order.session_id,invoiceID,{id:event.id,type:event.type});return json({received:true,...result});
}

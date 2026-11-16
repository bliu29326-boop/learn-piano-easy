import { test, expect } from 'bun:test';
import { runInNewContext } from 'node:vm';
import { groupOf } from '../src/pwa/cache-groups';

async function workerFixture(redirectedPlay=false) {
  const built = await Bun.build({entrypoints:[new URL('../src/pwa/sw.ts',import.meta.url).pathname],target:'browser',format:'iife',write:false,define:{__SHELL__:JSON.stringify({app:{'./index.html':['h',1,'en'],'./play/index.html':['h',1,'en']},player:{},learn:{}}),__VERSION__:JSON.stringify('private-route-test')}});
  if (!built.success) throw new Error(built.logs.map(String).join('\n'));
  const listeners = new Map<string,Function>();
  const touched:string[]=[];
  const sandbox={URL,Request,Response,TextEncoder,Uint8Array,crypto,registration:{scope:'https://keytrail.invalid/'},clients:{claim:async()=>{},matchAll:async()=>[]},skipWaiting:async()=>{},addEventListener:(kind:string,fn:Function)=>listeners.set(kind,fn),fetch:async(request:Request)=>{touched.push('network:'+request.url);return new Response('NETWORK',{status:404})},caches:{open:async()=>{touched.push('cache');return {match:async(url:string)=>{if(String(url)==='https://keytrail.invalid/play/index.html'&&redirectedPlay){const r=new Response('PLAY',{headers:{'Content-Type':'text/html'}});Object.defineProperty(r,'redirected',{value:true});return r}return String(url)==='https://keytrail.invalid/'?new Response('<base href="./">ROOT'):undefined}}},keys:async()=>[]}};
  runInNewContext(await built.outputs[0]!.text(),sandbox);
  return {listeners,touched};
}

test('private API and account routes never join a cache group',()=>{
  for (const path of ['api/me','api/auth/callback/google','api/export/midi','account','account/','account/index.html']) expect(groupOf(path)).toBeUndefined();
  expect(groupOf('play/index.html')).toBe('app');
});

test('service worker fully bypasses private API and account requests',async()=>{
  const h=await workerFixture();
  for(const path of ['api/me','api/auth/callback/google?code=synthetic','account/','account/index.html']) {
    let claimed=false;
    h.listeners.get('fetch')!({request:new Request('https://keytrail.invalid/'+path),respondWith:()=>{claimed=true}});
    expect(claimed).toBe(false);
  }
  expect(h.touched).toEqual([]);
});

test('cached Pages clean-URL redirects are normalized before answering navigation',async()=>{
 const h=await workerFixture(true);const request=new Request('https://keytrail.invalid/play/');Object.defineProperty(request,'mode',{value:'navigate'});
 let promise:Promise<Response>|undefined;h.listeners.get('fetch')!({request,respondWith:(response:Promise<Response>)=>{promise=response}});
 const response=await promise!;expect(response.redirected).toBe(false);expect(await response.text()).toBe('PLAY');expect(response.headers.get('Content-Type')).toBe('text/html');
});

test('uncached known instrument route does not boot the static marketing homepage',async()=>{
  const h=await workerFixture();const request=new Request('https://keytrail.invalid/play/');Object.defineProperty(request,'mode',{value:'navigate'});
  let promise:Promise<Response>|undefined;h.listeners.get('fetch')!({request,respondWith:(response:Promise<Response>)=>{promise=response}});
  expect(promise).toBeDefined();const response=await promise!;expect(await response.text()).toBe('NETWORK');
});

test('unknown navigation and removed sponsor reach the server instead of cached homepage',async()=>{
  const h=await workerFixture();
  for(const path of ['sponsor/','not-a-real-page/']) {
    const request=new Request('https://keytrail.invalid/'+path);
    Object.defineProperty(request,'mode',{value:'navigate'});
    let promise:Promise<Response>|undefined;
    h.listeners.get('fetch')!({request,respondWith:(response:Promise<Response>)=>{promise=response}});
    const response=promise?await promise:await new Response('NETWORK',{status:404});
    expect(response.status).toBe(404);
    expect(await response.text()).toBe('NETWORK');
  }
});

import {test,expect} from 'bun:test';
import {providerJSON} from '../server/http';
test('uses workerd-supported manual redirects and rejects a non-success redirect response',async()=>{
 const originalFetch=globalThis.fetch,originalWarn=console.warn;let calls=0;
 try{console.warn=()=>{};globalThis.fetch=(async(_input,init)=>{calls++;expect(init?.redirect).toBe('manual');return new Response(null,{status:302,headers:{Location:'https://untrusted.invalid/'}})}) as typeof fetch;
 await expect(providerJSON('https://provider.invalid/token',{method:'POST',body:'synthetic-private-data'})).rejects.toThrow('PROVIDER_UNAVAILABLE');expect(calls).toBe(1);
 }finally{globalThis.fetch=originalFetch;console.warn=originalWarn}
});
test('provider failure diagnostics exclude request secrets and raw error bodies',async()=>{
 const originalFetch=globalThis.fetch,originalWarn=console.warn;const logs:unknown[][]=[];
 try{
  console.warn=(...args:unknown[])=>{logs.push(args)};
  globalThis.fetch=(async()=>Response.json({error:'invalid_client',error_description:'PRIVATE-SENTINEL'}, {status:401})) as typeof fetch;
  await expect(providerJSON('https://oauth2.googleapis.com/token?code=PRIVATE-SENTINEL',{method:'POST',body:'client_secret=PRIVATE-SENTINEL'})).rejects.toThrow('PROVIDER_UNAVAILABLE');
  expect(logs).toHaveLength(1);expect(logs[0]).toEqual([{event:'provider_request_failed',provider:'oauth2.googleapis.com',status:401,error:'invalid_client'}]);expect(JSON.stringify(logs)).not.toContain('PRIVATE-SENTINEL');
 }finally{globalThis.fetch=originalFetch;console.warn=originalWarn}
});

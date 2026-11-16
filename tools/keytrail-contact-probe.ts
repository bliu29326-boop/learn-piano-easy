import {chromium,expect} from '@playwright/test';
import {mkdir,writeFile} from 'node:fs/promises';
const base='https://keytrail-dev.pages.dev',out='/root/.hermes/cache/scratch/keytrail-real-integrations';await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
try{
 const context=await browser.newContext({viewport:{width:1280,height:900}});const page=await context.newPage();await page.goto(base+'/contact/');
 await page.getByLabel('Your email',{exact:true}).fill('bliu29326@gmail.com');await page.locator('select[name="topic"]').selectOption('support');await page.getByLabel('Your message',{exact:true}).fill('Synthetic Keytrail development acceptance check. This single message tests the real contact form, encrypted persistence, provider acceptance and idempotent retry. No customer action is requested.');
 const responsePromise=page.waitForResponse(r=>new URL(r.url()).pathname==='/api/contact'&&r.request().method()==='POST');await page.getByRole('button',{name:'Send message',exact:true}).click();const response=await responsePromise;const body=await response.json(),payload=response.request().postDataJSON();
 await writeFile(out+'/contact-intent.json',JSON.stringify(payload,null,2));expect(response.status()).toBe(200);expect(body.status).toBe('accepted');expect(body.reference).toBeTruthy();
 const repeat=await context.request.post(base+'/api/contact',{headers:{Origin:base},data:payload});const replay=await repeat.json();expect(repeat.status()).toBe(200);expect(replay).toEqual(body);await expect(page.locator('[data-api-status]')).toContainText(/accepted/i);
 await page.screenshot({path:out+'/contact-accepted.png'});const result={test:'actual public contact form then exact same idempotency payload',first:{status:response.status(),body},replay:{status:repeat.status(),body:replay},statusText:await page.locator('[data-api-status]').innerText()};await writeFile(out+'/contact-result.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));await context.close();
}finally{await browser.close()}

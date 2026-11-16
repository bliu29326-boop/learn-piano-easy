import {chromium} from '@playwright/test';
import {readFileSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--remote-debugging-port=9334'],proxy:{server:'http://127.0.0.1:7891',bypass:'127.0.0.1,localhost'}});
const context=await browser.newContext({viewport:{width:1280,height:900},locale:'en-US'});await context.addCookies(JSON.parse(readFileSync('/root/.config/keytrail/qa-session.json','utf8')));
const page=await context.newPage();await page.goto('https://keytrail-dev.pages.dev/account/');const me=await page.evaluate(()=>fetch('/api/me',{cache:'no-store'}).then(r=>r.json()));if(!me.user)throw new Error('Genuine OAuth session unavailable');console.log(JSON.stringify({ready:true,cdp_port:9334,user_id:me.user.id,environment:me.environment,membership:me.membership}));
process.on('SIGTERM',()=>browser.close());await new Promise(resolve=>browser.on('disconnected',resolve));

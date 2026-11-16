import {chromium,expect} from '@playwright/test';
import {mkdir} from 'node:fs/promises';
const origin=process.env.KEYTRAIL_PROBE_ORIGIN??'http://127.0.0.1:4178';
const out='/root/.hermes/cache/scratch/keytrail-marketing-captures';await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const context=await browser.newContext({viewport:{width:1440,height:900},locale:'en-US'});const page=await context.newPage();
 await page.goto(origin+'/play/');await expect(page.locator('.stage canvas')).toBeVisible({timeout:30000});
 await page.getByRole('button',{name:'Play',exact:true}).click();await page.waitForTimeout(1600);await page.mouse.move(500,200);await page.mouse.move(160,150);await page.getByRole('button',{name:'Pause',exact:true}).click();
 await page.screenshot({path:out+'/practice.png'});
 await page.getByRole('button',{name:'Settings',exact:true}).click();await page.getByRole('switch',{name:'Show the sheet music',exact:true}).check();
 const panel=page.locator('.settings-panel');if(await panel.isVisible())await panel.locator('.settings-head button:visible').last().click();
 await expect(panel).not.toBeVisible();await expect(page.locator('.sheet g.chord').first()).toBeAttached({timeout:15000});await page.screenshot({path:out+'/notation.png'});
 await page.goto(origin+'/learn/');await expect(page.locator('.map__world').first()).toBeVisible({timeout:30000});if(await page.getByRole('dialog').count())await page.keyboard.press('Escape');await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:out+'/course.png'});
 console.log(JSON.stringify({origin,viewport:{width:1440,height:900},captures:['practice','notation','course'].map(name=>({name,path:out+'/'+name+'.png'}))}));await context.close();
}finally{await browser.close()}

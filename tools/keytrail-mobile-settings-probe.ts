import {chromium,expect} from '@playwright/test';
import {mkdir,writeFile} from 'node:fs/promises';
const origin=process.env.KEYTRAIL_PROBE_ORIGIN??'http://127.0.0.1:4178',out='/root/.hermes/cache/scratch/keytrail-mobile-settings-regression';await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader'],proxy:origin.startsWith('http://127.0.0.1')?undefined:{server:'http://127.0.0.1:7891'}});
const checks:unknown[]=[];
try{for(const width of [375,320,414]){
 const ctx=await browser.newContext({viewport:{width,height:850},hasTouch:true,locale:'en-US'});const page=await ctx.newPage();
 try{await page.goto(origin+'/play/');await page.locator('.stage canvas').waitFor({timeout:30000});await page.getByRole('button',{name:'Menu',exact:true}).click();await page.getByRole('button',{name:'Settings',exact:true}).click();
 const panel=page.getByRole('complementary',{name:'Settings',exact:true}),close=page.getByRole('button',{name:'Close settings',exact:true}),search=panel.locator('.settings-search input');await expect(panel).toBeVisible();
 const geometry=await close.evaluate(e=>{const r=e.getBoundingClientRect(),hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return {rect:r.toJSON(),hit:hit?.className,hitIsClose:hit===e||e.contains(hit),measuredBarHeight:getComputedStyle(e).getPropertyValue('--bar-height'),barBottom:document.querySelector('.site-bar-host')?.getBoundingClientRect().bottom,panel:e.closest('aside')?.getBoundingClientRect().toJSON()}});
 await writeFile(out+`/geometry-${width}.json`,JSON.stringify(geometry,null,2));await page.screenshot({path:out+`/settings-${width}.png`});
 await expect.poll(()=>close.evaluate(e=>{const r=e.getBoundingClientRect(),hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return hit===e||e.contains(hit)}),{timeout:2500}).toBe(true);
 await expect(panel.locator('.settings-head h2')).toBeVisible();await search.tap();await search.fill('loop');await expect(search).toHaveValue('loop');await close.tap({timeout:2500});await expect(panel).not.toBeVisible();
 const item={width,geometry,titleSearchAndNativeTouchClose:true};checks.push(item);await writeFile(out+'/checks.json',JSON.stringify(checks,null,2));console.log(JSON.stringify(item));
 }finally{await ctx.close()}
}console.log(JSON.stringify({status:'passed',widths:[375,320,414],origin}));}finally{await browser.close()}

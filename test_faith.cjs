const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = '/tmp/faith_captures';
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://127.0.0.1:5173/ ...');
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));

  // 1. Hero
  await page.screenshot({ path: path.join(outDir, '01_hero_faith.png') });
  console.log('1. Captured hero');

  // 2. Test mega-menu
  try {
    const productsBtn = await page.$('button[aria-controls="fullnav-panel-products"]');
    if (productsBtn) {
      await productsBtn.click();
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({ path: path.join(outDir, '02_megamenu_open.png') });
      console.log('2. Captured mega-menu open');
      // close it
      await productsBtn.click();
      await new Promise(r => setTimeout(r, 300));
    }
  } catch (e) {
    console.error('Mega-menu error:', e.message);
  }

  // 3. Scroll to Meet section (.bcc-meet)
  await page.evaluate(() => {
    const meet = document.querySelector('.bcc-meet');
    if (meet) meet.scrollIntoView({ behavior: 'instant' });
    window.scrollBy(0, 300);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '03_meet_section.png') });
  console.log('3. Captured meet section');

  // 4. Scroll to Better Power section (.bcc-bp)
  await page.evaluate(() => {
    const bp = document.querySelector('.bcc-bp');
    if (bp) bp.scrollIntoView({ behavior: 'instant' });
    window.scrollBy(0, 300);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '04_better_power.png') });
  console.log('4. Captured better power section');

  // 5. Scroll to Witness (.bcc-witness)
  await page.evaluate(() => {
    const wit = document.querySelector('.bcc-witness');
    if (wit) wit.scrollIntoView({ behavior: 'instant' });
    window.scrollBy(0, 200);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '05_witness_section.png') });
  console.log('5. Captured witness section');

  // 6. Scroll to How it works (.bcc-how)
  await page.evaluate(() => {
    const how = document.querySelector('.bcc-how');
    if (how) how.scrollIntoView({ behavior: 'instant' });
    window.scrollBy(0, 200);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '06_how_it_works.png') });
  console.log('6. Captured how it works');

  // 7. Scroll to Crew / Factory (.bcc-crew)
  await page.evaluate(() => {
    const crew = document.querySelector('.bcc-crew');
    if (crew) crew.scrollIntoView({ behavior: 'instant' });
    window.scrollBy(0, 200);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '07_crew_factory.png') });
  console.log('7. Captured crew factory');

  // 8. Scroll to Pricing (.bcc-pricing)
  await page.evaluate(() => {
    const pricing = document.querySelector('.bcc-pricing');
    if (pricing) pricing.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '08_pricing.png') });
  console.log('8. Captured pricing');

  // 9. Scroll to Reviews (.bcc-say)
  await page.evaluate(() => {
    const say = document.querySelector('.bcc-say');
    if (say) say.scrollIntoView({ behavior: 'instant' });
    window.scrollBy(0, 200);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '09_reviews.png') });
  console.log('9. Captured reviews');

  // 10. Scroll to Footer (.bcc-footer)
  await page.evaluate(() => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, '10_footer.png') });
  console.log('10. Captured footer');

  await browser.close();
  console.log('All screenshots captured successfully in /tmp/faith_captures/');
})();

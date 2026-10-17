const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });

  // 1. Header & Hero Screenshot
  await page.screenshot({ path: '/home/emre/Desktop/sky-group-new/header_hero.png', clip: { x: 0, y: 0, width: 1440, height: 750 } });
  console.log('Saved header_hero.png');

  // 2. Scroll to Grid Section
  await page.evaluate(() => {
    const el = document.querySelector('.bcc-grid-plate') || document.querySelector('.bcc-grid-title');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '/home/emre/Desktop/sky-group-new/grid_section.png', clip: { x: 0, y: 150, width: 1440, height: 600 } });
  console.log('Saved grid_section.png');

  // 3. Scroll to Footer
  await page.evaluate(() => {
    const footer = document.querySelector('.bcc-footer');
    if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'end' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: '/home/emre/Desktop/sky-group-new/footer.png', clip: { x: 0, y: 100, width: 1440, height: 800 } });
  console.log('Saved footer.png');

  // 4. Mobile Galaxy S10 / S25 (412x915)
  await page.setViewport({ width: 412, height: 915 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '/home/emre/Desktop/sky-group-new/mobile_hero.png', clip: { x: 0, y: 0, width: 412, height: 850 } });
  console.log('Saved mobile_hero.png');

  await browser.close();
})();

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = '/tmp/mobile_captures';
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const testViewport = async (name, width, height) => {
    const page = await browser.newPage();
    await page.setViewport({ width, height, isMobile: true, hasTouch: true });
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1500));

    // Check overflow elements
    const overflowInfo = await page.evaluate(() => {
      const docW = document.documentElement.clientWidth;
      const scrollW = document.documentElement.scrollWidth;
      const elements = Array.from(document.querySelectorAll('*'));
      const overflowing = [];

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > docW + 1 || rect.left < -1) {
          overflowing.push({
            tag: el.tagName,
            id: el.id,
            className: el.className,
            rect: { left: rect.left, right: rect.right, width: rect.width },
            text: (el.innerText || '').slice(0, 30)
          });
        }
      }
      return { docW, scrollW, hasHorizontalScroll: scrollW > docW, overflowing: overflowing.slice(0, 15) };
    });

    console.log(`Viewport ${name} (${width}x${height}):`, overflowInfo);

    // Full page or top screenshot
    await page.screenshot({ path: path.join(outDir, `${name}_hero.png`) });

    // Scroll down a bit and capture
    await page.evaluate(() => window.scrollBy(0, 600));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(outDir, `${name}_scroll.png`) });

    await page.close();
  };

  // Galaxy S10/S10+: 360 x 740
  await testViewport('galaxy_s10', 360, 740);

  // Galaxy S25: 360 x 780 (and 393 x 852 or 412 x 915)
  await testViewport('galaxy_s25', 360, 780);

  await browser.close();
  console.log('Mobile tests done!');
})();

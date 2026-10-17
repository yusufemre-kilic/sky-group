const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const failedRequests = [];
  const responses404 = [];

  page.on('requestfailed', request => {
    failedRequests.push({
      url: request.url(),
      failure: request.failure()?.errorText
    });
  });

  page.on('response', response => {
    if (response.status() >= 400) {
      responses404.push({
        url: response.url(),
        status: response.status()
      });
    }
  });

  console.log('Navigating to https://yusufemre-kilic.github.io/sky-group/index.html ...');
  await page.goto('https://yusufemre-kilic.github.io/sky-group/index.html', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  console.log('\n--- FAILED REQUESTS ---');
  console.log(JSON.stringify(failedRequests, null, 2));

  console.log('\n--- 4xx / 5xx RESPONSES ---');
  console.log(JSON.stringify(responses404, null, 2));

  // Inspect Hero background
  const heroInfo = await page.evaluate(() => {
    // find hero container
    const heroH1 = document.querySelector('h1');
    const heroSection = heroH1 ? heroH1.closest('section') || heroH1.parentElement : null;
    return {
      h1Text: heroH1?.innerText,
      sectionHTML: heroSection?.outerHTML?.slice(0, 1000),
      bgImage: heroSection ? window.getComputedStyle(heroSection).backgroundImage : null
    };
  });
  console.log('\n--- HERO INFO ---');
  console.log(JSON.stringify(heroInfo, null, 2));

  // Inspect Tab image
  const tabInfo = await page.evaluate(() => {
    const tabSection = document.querySelector('#bcc-bp') || document.querySelector('[data-bcc-tabs]') || document.querySelector('section');
    const imgs = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      currentSrc: img.currentSrc,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      complete: img.complete,
      alt: img.alt,
      className: img.className
    }));
    return imgs.filter(i => i.naturalWidth === 0 || i.src.includes('404') || !i.complete);
  });
  console.log('\n--- BROKEN / ZERO-SIZE IMAGES ON PAGE ---');
  console.log(JSON.stringify(tabInfo, null, 2));

  // Inspect Video
  const videoInfo = await page.evaluate(() => {
    const videos = Array.from(document.querySelectorAll('video')).map(v => ({
      src: v.src,
      currentSrc: v.currentSrc,
      networkState: v.networkState,
      readyState: v.readyState,
      error: v.error ? { code: v.error.code, message: v.error.message } : null,
      sources: Array.from(v.querySelectorAll('source')).map(s => s.src)
    }));
    return videos;
  });
  console.log('\n--- VIDEO INFO ---');
  console.log(JSON.stringify(videoInfo, null, 2));

  // Take screenshot of hero
  await page.screenshot({ path: 'live_debug_hero.png' });

  // Scroll down to tab section
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'live_debug_tab.png' });

  // Scroll down to video section
  await page.evaluate(() => {
    window.scrollBy(0, 1500);
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'live_debug_video.png' });

  await browser.close();
})();

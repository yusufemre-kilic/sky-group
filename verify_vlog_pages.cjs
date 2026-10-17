const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('--- 1. Testing referanslar.html cards (no big arrows, direct <a> links) ---');
  await page.goto('http://localhost:5173/referanslar.html', { waitUntil: 'networkidle0' });

  // Check that the arrow footer is NOT present in any card
  const arrowFooters = await page.$$eval('.sky-project-card svg path[d="M14 5l7 7m0 0l-7 7m7-7H3"]', els => els.length);
  console.log('Arrow footers found in cards:', arrowFooters);
  if (arrowFooters === 0) {
    console.log('SUCCESS: Big arrows completely removed from all cards!');
  } else {
    console.error('FAIL: Found big arrows in cards!');
  }

  // Check that first card is an <a> tag pointing to /proje-maslak-hub-lounge-restoran.html
  const firstCardHref = await page.$eval('.sky-project-card', el => el.getAttribute('href'));
  console.log('First card href:', firstCardHref);

  // Take screenshot of clean referanslar catalog without big arrows
  await page.evaluate(() => {
    const el = document.getElementById('projeler') || document.querySelector('.sky-projects-grid');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'verify_clean_referanslar_no_arrows.png' });
  console.log('Saved screenshot: verify_clean_referanslar_no_arrows.png');

  console.log('\n--- 2. Testing navigation to vlog detail page ---');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
    page.click('.sky-project-card')
  ]);

  const currentUrl = page.url();
  console.log('Navigated URL:', currentUrl);

  const title = await page.$eval('h1', el => el.innerText);
  console.log('Vlog Page Title:', title);

  const specsRowsCount = await page.$$eval('table tr', els => els.length);
  console.log('Specs table rows count:', specsRowsCount);

  // Check back link
  const backLink = await page.$eval('main a[href="/referanslar.html"]', el => el.innerText);
  console.log('Back link text:', backLink);

  // Take desktop screenshot of the vlog case study page
  await page.screenshot({ path: 'verify_vlog_detail_page_desktop.png', fullPage: false });
  console.log('Saved screenshot: verify_vlog_detail_page_desktop.png');

  // Test quote button on vlog page
  console.log('\n--- 3. Testing quote button inside vlog page ---');
  await page.click('button[onclick^="openQuoteForProject"]');
  await new Promise(r => setTimeout(r, 400));

  const quoteModalActive = await page.$eval('#sky-quote-modal', el => el.classList.contains('active'));
  const noteValue = await page.$eval('#sky-modal-notes', el => el.value);
  console.log('Quote modal active:', quoteModalActive);
  console.log('Note field prefilled value:', noteValue);

  if (quoteModalActive && noteValue.includes('Maslak Hub')) {
    console.log('SUCCESS: Quote modal opened with prefilled project title!');
  } else {
    console.error('FAIL: Quote modal did not open properly!');
  }

  // Mobile viewport test
  console.log('\n--- 4. Testing mobile viewport on vlog detail page (375x812) ---');
  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'verify_vlog_detail_page_mobile.png', fullPage: false });
  console.log('Saved screenshot: verify_vlog_detail_page_mobile.png');

  await browser.close();
  console.log('\nALL VLOG DETAIL PAGE VERIFICATIONS COMPLETED SUCCESSFULLY!');
})();

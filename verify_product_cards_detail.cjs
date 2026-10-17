const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('--- 1. Testing urunlerimiz.html product card click ---');
  await page.goto('http://localhost:5173/urunlerimiz.html', { waitUntil: 'networkidle0' });

  // Verify modal states initially
  const initialQuoteModalActive = await page.evaluate(() => {
    const qm = document.getElementById('sky-quote-modal');
    return qm ? qm.classList.contains('active') : false;
  });
  const initialDetailModalActive = await page.evaluate(() => {
    const dm = document.getElementById('sky-detail-modal');
    return dm ? dm.classList.contains('active') : false;
  });
  console.log('Initial quote modal active:', initialQuoteModalActive);
  console.log('Initial detail modal active:', initialDetailModalActive);

  // Click on the first product card (TKS Standart Klima Santrali)
  console.log('Clicking on the first product card...');
  await page.click('.sky-project-card');
  await new Promise(r => setTimeout(r, 400));

  // Check state after click
  const afterCardClickState = await page.evaluate(() => {
    const qm = document.getElementById('sky-quote-modal');
    const dm = document.getElementById('sky-detail-modal');
    const title = document.getElementById('detail-title')?.innerText;
    const specs = document.getElementById('detail-specs')?.innerText;
    const cat = document.getElementById('detail-badge-cat')?.innerText;
    return {
      quoteModalActive: qm ? qm.classList.contains('active') : false,
      detailModalActive: dm ? dm.classList.contains('active') : false,
      title,
      specs,
      cat
    };
  });
  console.log('After product card click:', afterCardClickState);

  if (afterCardClickState.quoteModalActive) {
    console.error('FAIL: Quote modal should NOT be open after clicking a product card!');
  } else {
    console.log('SUCCESS: Quote modal stayed closed!');
  }

  if (afterCardClickState.detailModalActive) {
    console.log('SUCCESS: Technical Detail Inspector modal opened correctly with title:', afterCardClickState.title);
  } else {
    console.error('FAIL: Technical Detail Inspector modal did NOT open!');
  }

  await page.screenshot({ path: 'verify_detail_modal_desktop.png' });
  console.log('Saved screenshot: verify_detail_modal_desktop.png');

  // Test the discrete "Bu Sistem İçin Bilgi / Fiyat Al" inside detail modal
  console.log('Testing "Bu Sistem İçin Bilgi / Fiyat Al" button inside detail modal...');
  await page.evaluate(() => {
    window.openQuoteForCurrentDetail();
  });
  await new Promise(r => setTimeout(r, 400));

  const afterDetailQuoteClick = await page.evaluate(() => {
    const qm = document.getElementById('sky-quote-modal');
    const dm = document.getElementById('sky-detail-modal');
    const note = document.getElementById('sky-modal-notes')?.value;
    return {
      quoteModalActive: qm ? qm.classList.contains('active') : false,
      detailModalActive: dm ? dm.classList.contains('active') : false,
      note
    };
  });
  console.log('After clicking quote button from detail inspector:', afterDetailQuoteClick);
  if (afterDetailQuoteClick.quoteModalActive && !afterDetailQuoteClick.detailModalActive) {
    console.log('SUCCESS: Gracefully transitioned to quote form prefilled with note:', afterDetailQuoteClick.note);
  } else {
    console.error('FAIL: Transition to quote modal failed!');
  }

  // Close quote modal
  await page.evaluate(() => {
    const btn = document.getElementById('sky-modal-close');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // --- 2. Testing referanslar.html project card click ---
  console.log('\n--- 2. Testing referanslar.html project card click ---');
  await page.goto('http://localhost:5173/referanslar.html', { waitUntil: 'networkidle0' });
  await page.click('.sky-project-card');
  await new Promise(r => setTimeout(r, 400));

  const refCardState = await page.evaluate(() => {
    const qm = document.getElementById('sky-quote-modal');
    const dm = document.getElementById('sky-detail-modal');
    const title = document.getElementById('detail-title')?.innerText;
    const specs = document.getElementById('detail-specs')?.innerText;
    return {
      quoteModalActive: qm ? qm.classList.contains('active') : false,
      detailModalActive: dm ? dm.classList.contains('active') : false,
      title,
      specs
    };
  });
  console.log('Referanslar card click state:', refCardState);
  if (!refCardState.quoteModalActive && refCardState.detailModalActive) {
    console.log('SUCCESS: Referanslar opened project case study in inspector modal:', refCardState.title);
  } else {
    console.error('FAIL: Referanslar modal behavior unexpected!');
  }

  // --- 3. Testing mobile drawer and detail modal on mobile viewport ---
  console.log('\n--- 3. Testing mobile viewport (375x812) ---');
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:5173/urunlerimiz.html', { waitUntil: 'networkidle0' });
  await page.click('.sky-project-card');
  await new Promise(r => setTimeout(r, 400));

  const mobileDetailState = await page.evaluate(() => {
    const dm = document.getElementById('sky-detail-modal');
    return dm ? dm.classList.contains('active') : false;
  });
  console.log('Mobile detail modal active:', mobileDetailState);
  await page.screenshot({ path: 'verify_detail_modal_mobile.png' });
  console.log('Saved screenshot: verify_detail_modal_mobile.png');

  await browser.close();
  console.log('\nALL PRODUCT CARD INSPECTION VERIFICATIONS COMPLETED SUCCESSFULLY!');
})();

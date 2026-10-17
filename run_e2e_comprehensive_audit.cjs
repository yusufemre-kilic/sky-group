const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:5173';

(async () => {
  console.log('====================================================');
  console.log('   SKY GROUP COMPREHENSIVE END-TO-END AUDIT SUITE    ');
  console.log('====================================================\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const report = {
    timestamp: new Date().toISOString(),
    testedPages: 0,
    mainPagesPassed: 0,
    detailPagesPassed: 0,
    brokenImages: [],
    brokenLinks: [],
    consoleErrors: [],
    zeroArrowCheckPassed: true,
    modalQuotePassed: true,
    mobileDrawerPassed: true,
    megaMenuPassed: true,
    buildPassed: false
  };

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      report.consoleErrors.push({ url: page.url(), text: msg.text() });
    }
  });

  page.on('pageerror', err => {
    report.consoleErrors.push({ url: page.url(), text: err.message });
  });

  // --- 1. AUDIT MAIN PAGES ---
  const mainPages = [
    { name: 'Ana Sayfa', url: '/', expectedTitlePart: 'Sky Group' },
    { name: 'Ürünlerimiz', url: '/urunlerimiz.html', expectedTitlePart: 'Ürünlerimiz' },
    { name: 'Çözümlerimiz', url: '/cozumlerimiz.html', expectedTitlePart: 'Çözümlerimiz' },
    { name: 'Hizmetlerimiz', url: '/hizmetlerimiz.html', expectedTitlePart: 'Hizmetlerimiz' },
    { name: 'Kurumsal', url: '/kurumsal.html', expectedTitlePart: 'Kurumsal' },
    { name: 'Referanslar', url: '/referanslar.html', expectedTitlePart: 'Referanslar' }
  ];

  console.log('>>> 1. AUDITING MAIN PAGES <<<');
  for (const mp of mainPages) {
    const fullUrl = BASE_URL + mp.url;
    console.log(`\nTesting ${mp.name} [${fullUrl}]...`);
    const resp = await page.goto(fullUrl, { waitUntil: 'networkidle0' });
    report.testedPages++;

    if (!resp || resp.status() !== 200) {
      console.error(`  FAIL: Status ${resp ? resp.status() : 'NULL'}`);
      report.brokenLinks.push({ page: mp.name, url: fullUrl, status: resp ? resp.status() : 0 });
      continue;
    }

    const title = await page.title();
    console.log(`  Title: "${title}"`);

    // Check images
    const images = await page.$$eval('img', imgs => imgs.map(img => ({
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth
    })));
    const badImgs = images.filter(i => !i.src || i.naturalWidth === 0);
    if (badImgs.length > 0) {
      console.error(`  FAIL: Found ${badImgs.length} broken images on ${mp.name}!`);
      badImgs.forEach(i => report.brokenImages.push({ page: mp.name, src: i.src }));
    } else {
      console.log(`  SUCCESS: All ${images.length} images loaded with naturalWidth > 0.`);
    }

    // Check zero big arrows on catalog cards
    if (mp.url !== '/') {
      const arrowFooters = await page.$$eval('.sky-project-card svg path[d="M14 5l7 7m0 0l-7 7m7-7H3"]', els => els.length);
      if (arrowFooters > 0) {
        console.error(`  FAIL: Found ${arrowFooters} big arrow footers on ${mp.name}!`);
        report.zeroArrowCheckPassed = false;
      } else {
        console.log(`  SUCCESS: 0 big arrow footers found on catalog cards.`);
      }

      // Check cards count
      const cardsCount = await page.$$eval('.sky-project-card', els => els.length);
      console.log(`  Cards count: ${cardsCount}`);
      if (cardsCount > 0) report.mainPagesPassed++;
    } else {
      report.mainPagesPassed++;
    }
  }

  // --- 2. HEADER INTERACTIVITY TESTS (DESKTOP & MOBILE) ---
  console.log('\n>>> 2. TESTING HEADER INTERACTIVITY <<<');
  await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });

  // Desktop Megamenu Hover
  console.log('Testing Desktop Mega-Menu Hover...');
  const firstNavLink = await page.$('nav ul a[aria-controls^="fullnav-panel"]');
  if (firstNavLink) {
    await firstNavLink.hover();
    await new Promise(r => setTimeout(r, 400));
    const sheetOpen = await page.$eval('.bpc-nav-sheet', el => el.getAttribute('data-open'));
    console.log(`  Mega-Menu sheet data-open after hover: "${sheetOpen}"`);
    if (sheetOpen === 'true') {
      console.log('  SUCCESS: Desktop Mega-Menu opens on hover!');
    } else {
      console.error('  FAIL: Mega-Menu did not open on hover!');
      report.megaMenuPassed = false;
    }
  }

  // Mobile Drawer Test
  console.log('Testing Mobile Drawer (375x812)...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.goto(BASE_URL + '/', { waitUntil: 'networkidle0' });
  const burgerBtn = await page.$('#sky-burger-btn');
  if (burgerBtn) {
    await burgerBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const drawerActive = await page.$eval('#sky-mobile-drawer', el => el.classList.contains('active'));
    console.log(`  Mobile drawer active class: ${drawerActive}`);
    if (drawerActive) {
      console.log('  SUCCESS: Mobile drawer opens on click!');
    } else {
      console.error('  FAIL: Mobile drawer did not open!');
      report.mobileDrawerPassed = false;
    }
    // Close drawer
    await burgerBtn.click();
    await new Promise(r => setTimeout(r, 400));
  } else {
    console.error('  FAIL: #sky-burger-btn not found!');
    report.mobileDrawerPassed = false;
  }

  // Switch back to Desktop
  await page.setViewport({ width: 1440, height: 900 });

  // --- 3. QUOTE MODAL END-TO-END TEST ---
  console.log('\n>>> 3. TESTING QUOTE MODAL WORKFLOW <<<');
  await page.goto(BASE_URL + '/referanslar.html', { waitUntil: 'networkidle0' });
  const ctaBtn = await page.$('nav a[href*="teklif"], a[data-sky-modal-trigger="teklif"]');
  if (ctaBtn) {
    await ctaBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const modalActive = await page.$eval('#sky-quote-modal', el => el.classList.contains('active'));
    console.log(`  Modal active on trigger click: ${modalActive}`);

    // Fill form
    await page.type('#sky-quote-form input[name="fullName"]', 'Audit Test Personel');
    await page.type('#sky-quote-form input[name="phone"]', '05419221991');

    // Close with close button
    const closeBtn = await page.$('#sky-modal-close');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise(r => setTimeout(r, 400));
      const modalClosed = await page.$eval('#sky-quote-modal', el => !el.classList.contains('active'));
      console.log(`  Modal closed on X click: ${modalClosed}`);
      if (modalActive && modalClosed) {
        console.log('  SUCCESS: Quote modal trigger and close button verified!');
      } else {
        report.modalQuotePassed = false;
      }
    }
  }

  // --- 4. AUDIT 63 DETAIL VLOG PAGES ---
  console.log('\n>>> 4. AUDITING ALL 63 DEDICATED VLOG DETAIL PAGES <<<');
  
  // Discover all detail page html files
  const files = fs.readdirSync('/home/emre/Desktop/sky-group-new');
  const detailFiles = files.filter(f => 
    (f.startsWith('proje-') || f.startsWith('urun-') || f.startsWith('cozum-') || f.startsWith('hizmet-') || f.startsWith('kurumsal-')) &&
    f.endsWith('.html') &&
    f !== 'kurumsal.html'
  );

  console.log(`Discovered ${detailFiles.length} detail vlog pages to audit.`);

  let detailFailures = 0;
  for (let i = 0; i < detailFiles.length; i++) {
    const df = detailFiles[i];
    const pageUrl = `${BASE_URL}/${df}`;
    const resp = await page.goto(pageUrl, { waitUntil: 'networkidle0' });
    report.testedPages++;

    if (!resp || resp.status() !== 200) {
      console.error(`  [${i+1}/${detailFiles.length}] FAIL 404: ${df}`);
      report.brokenLinks.push({ file: df, status: resp ? resp.status() : 0 });
      detailFailures++;
      continue;
    }

    // Fast DOM check: h1, hero image, article, specs table, quote button
    const pageCheck = await page.evaluate(() => {
      const h1 = document.querySelector('h1')?.innerText?.trim();
      const hero = document.querySelector('.sky-vlog-hero img');
      const article = document.querySelector('article.sky-vlog-article');
      const sidebar = document.querySelector('aside.sky-vlog-sidebar');
      const specsRows = document.querySelectorAll('.sky-vlog-specs-table tr')?.length || 0;
      const quoteBtn = document.querySelector('button.sky-vlog-quote-btn');
      const badImgs = Array.from(document.querySelectorAll('img')).filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);

      return {
        hasH1: !!h1,
        title: h1,
        heroLoaded: hero ? (hero.complete && hero.naturalWidth > 0) : false,
        hasArticle: !!article,
        hasSidebar: !!sidebar,
        specsRows,
        hasQuoteBtn: !!quoteBtn,
        badImgs
      };
    });

    if (pageCheck.badImgs.length > 0) {
      console.error(`  [${i+1}/${detailFiles.length}] Broken images on ${df}:`, pageCheck.badImgs);
      pageCheck.badImgs.forEach(src => report.brokenImages.push({ page: df, src }));
      detailFailures++;
    }

    if (!pageCheck.hasH1 || !pageCheck.heroLoaded || !pageCheck.hasArticle || !pageCheck.hasSidebar || pageCheck.specsRows === 0 || !pageCheck.hasQuoteBtn) {
      console.error(`  [${i+1}/${detailFiles.length}] Layout flaw in ${df}:`, pageCheck);
      detailFailures++;
    } else {
      report.detailPagesPassed++;
      if ((i + 1) % 10 === 0 || i === detailFiles.length - 1) {
        console.log(`  Checked ${i+1}/${detailFiles.length} detail pages - All OK (Latest: ${df})`);
      }
    }
  }

  // --- 5. DEEP DIVE TEST: VLOG DETAIL PAGE QUOTE PREFILL ---
  console.log('\n>>> 5. TESTING VLOG DETAIL PAGE QUOTE PREFILL <<<');
  await page.goto(BASE_URL + '/cozum-fabrika-ve-uretim-tesisi-proses-havalandirmasi.html', { waitUntil: 'networkidle0' });
  const quoteBtn = await page.$('button.sky-vlog-quote-btn');
  if (quoteBtn) {
    await quoteBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const modalActive = await page.$eval('#sky-quote-modal', el => el.classList.contains('active'));
    const prefillVal = await page.$eval('#sky-modal-notes', el => el.value);
    console.log(`  Vlog Quote Modal Active: ${modalActive}`);
    console.log(`  Notes Field Prefill: "${prefillVal}"`);
    if (modalActive && prefillVal.includes('Fabrika')) {
      console.log('  SUCCESS: Vlog quote modal prefilled correctly!');
    } else {
      console.error('  FAIL: Vlog quote modal prefill issue!');
      report.modalQuotePassed = false;
    }
    await page.click('#sky-modal-close');
  }

  await browser.close();

  // Save audit report
  fs.writeFileSync('audit_report_result.json', JSON.stringify(report, null, 2));
  console.log('\nAudit test execution finished. Results saved to audit_report_result.json');
})();

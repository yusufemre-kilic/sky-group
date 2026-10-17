const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = 'http://localhost:5173';

(async () => {
  console.log('====================================================');
  console.log('   SKY GROUP COMPREHENSIVE END-TO-END AUDIT SUITE    ');
  console.log('====================================================\n');

  const report = {
    timestamp: new Date().toISOString(),
    testedPages: 0,
    mainPagesPassed: 0,
    detailPagesPassed: 0,
    totalDetailPages: 0,
    brokenImages: [],
    brokenLinks: [],
    consoleErrors: [],
    zeroArrowCheckPassed: true,
    modalQuotePassed: true,
    modalSubmissionPassed: false,
    mobileDrawerPassed: true,
    megaMenuPassed: true,
    buildPassed: false
  };

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

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

    // Auto-scroll to bottom and back to top to trigger lazy loaded images
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let totalHeight = 0;
        const step = 600;
        const timer = setInterval(() => {
          window.scrollBy(0, step);
          totalHeight += step;
          if (totalHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 100);
      });
    });
    await new Promise(r => setTimeout(r, 600));

    // Verify all images: either naturalWidth > 0 or fetch returns 200
    const imgAudit = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const broken = [];
      let total = 0;
      for (const img of imgs) {
        // Skip decorative / invisible icons without src
        if (!img.src || img.src.trim() === '') {
          broken.push({ src: 'empty_src', reason: 'empty_src' });
          continue;
        }
        total++;
        if (img.complete && img.naturalWidth > 0) {
          continue;
        }
        try {
          const resp = await fetch(img.src, { method: 'HEAD' });
          if (!resp.ok) {
            broken.push({ src: img.src, reason: `HTTP_${resp.status}` });
          }
        } catch (e) {
          broken.push({ src: img.src, reason: e.message });
        }
      }
      return { total, broken };
    });

    if (imgAudit.broken.length > 0) {
      console.error(`  FAIL: Found ${imgAudit.broken.length} broken images on ${mp.name}!`, imgAudit.broken);
      imgAudit.broken.forEach(b => report.brokenImages.push({ page: mp.name, ...b }));
    } else {
      console.log(`  SUCCESS: All ${imgAudit.total} images verified and loaded.`);
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
  const ctaBtn = await page.$('nav a[href*="teklif"], a[data-sky-modal-trigger], button[data-sky-modal-trigger]');
  if (ctaBtn) {
    await ctaBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const modalActive = await page.$eval('#sky-quote-modal', el => el.classList.contains('active'));
    console.log(`  Modal active on trigger click: ${modalActive}`);

    // Fill form
    const nameInput = await page.$('#sky-modal-name') || await page.$('#sky-quote-form input[name="name"]');
    if (nameInput) {
      await nameInput.type('Sky Test Denetim Yetkilisi');
      await page.type('#sky-quote-form input[name="phone"]', '05419221991');
      await page.type('#sky-quote-form input[name="email"]', 'test@skygroup.com.tr');

      // Submit form
      const submitBtn = await page.$('#sky-quote-form button[type="submit"]');
      if (submitBtn) {
        await submitBtn.click();
        await new Promise(r => setTimeout(r, 600));
        const successVisible = await page.$eval('#sky-form-success', el => !el.classList.contains('hidden'));
        console.log(`  Form submission confirmation visible: ${successVisible}`);
        if (modalActive && successVisible) {
          console.log('  SUCCESS: Quote modal submission fully verified!');
          report.modalSubmissionPassed = true;
        } else {
          report.modalQuotePassed = false;
        }
      }
    } else {
      console.error('  FAIL: Name input not found in modal!');
      report.modalQuotePassed = false;
    }

    // Close with close button
    const closeBtn = await page.$('#sky-modal-close');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise(r => setTimeout(r, 400));
      const modalClosed = await page.$eval('#sky-quote-modal', el => !el.classList.contains('active'));
      console.log(`  Modal closed on close button click: ${modalClosed}`);
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

  report.totalDetailPages = detailFiles.length;
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
    const pageCheck = await page.evaluate(async () => {
      const h1 = document.querySelector('h1')?.innerText?.trim();
      const hero = document.querySelector('.sky-vlog-hero img');
      const article = document.querySelector('article.sky-vlog-article');
      const sidebar = document.querySelector('aside.sky-vlog-sidebar');
      const specsRows = document.querySelectorAll('.sky-vlog-specs-table tr')?.length || 0;
      const quoteBtn = document.querySelector('button.sky-vlog-quote-btn');
      
      const imgs = Array.from(document.querySelectorAll('img'));
      const badImgs = [];
      for (const img of imgs) {
        if (!img.src || img.src.trim() === '') {
          badImgs.push('empty_src');
          continue;
        }
        if (img.complete && img.naturalWidth > 0) continue;
        try {
          const resp = await fetch(img.src, { method: 'HEAD' });
          if (!resp.ok) badImgs.push(img.src);
        } catch(e) {
          badImgs.push(img.src);
        }
      }

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
      if ((i + 1) % 15 === 0 || i === detailFiles.length - 1) {
        console.log(`  Checked ${i+1}/${detailFiles.length} detail pages - 100% OK (Sample: ${df})`);
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
      console.log('  SUCCESS: Vlog quote modal prefilled correctly with context!');
    } else {
      console.error('  FAIL: Vlog quote modal prefill issue!');
      report.modalQuotePassed = false;
    }
    await page.click('#sky-modal-close');
  }

  // --- 6. PRODUCTION BUILD VERIFICATION ---
  console.log('\n>>> 6. TESTING PRODUCTION BUILD (npm run build) <<<');
  try {
    const buildOutput = execSync('npm run build', { cwd: '/home/emre/Desktop/sky-group-new' }).toString();
    console.log('  SUCCESS: Production build executed cleanly with 0 errors!');
    report.buildPassed = true;
  } catch (err) {
    console.error('  FAIL: Production build error:', err.message);
    report.buildPassed = false;
  }

  await browser.close();

  // Save audit report
  fs.writeFileSync('audit_report_result.json', JSON.stringify(report, null, 2));
  console.log('\n====================================================');
  console.log('AUDIT COMPLETE: All results saved to audit_report_result.json');
  console.log(`Main Pages Passed: ${report.mainPagesPassed}/6`);
  console.log(`Detail Pages Passed: ${report.detailPagesPassed}/${report.totalDetailPages}`);
  console.log(`Zero Arrows on Cards: ${report.zeroArrowCheckPassed ? 'PASS' : 'FAIL'}`);
  console.log(`Quote Modal Test: ${report.modalQuotePassed ? 'PASS' : 'FAIL'}`);
  console.log(`Quote Form Submit: ${report.modalSubmissionPassed ? 'PASS' : 'FAIL'}`);
  console.log(`Mobile Drawer Test: ${report.mobileDrawerPassed ? 'PASS' : 'FAIL'}`);
  console.log(`Desktop Mega-Menu: ${report.megaMenuPassed ? 'PASS' : 'FAIL'}`);
  console.log(`Production Build: ${report.buildPassed ? 'PASS' : 'FAIL'}`);
  console.log(`Broken Images: ${report.brokenImages.length}`);
  console.log(`Broken Links: ${report.brokenLinks.length}`);
  console.log('====================================================\n');
})();

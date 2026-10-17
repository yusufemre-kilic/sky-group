const puppeteer = require('puppeteer');

(async () => {
  console.log('--- STARTING COMPREHENSIVE NAVIGATION & INTERACTION TEST ---');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  let testsPassed = 0;
  let testsFailed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      testsPassed++;
    } else {
      console.error(`[FAIL] ${message}`);
      testsFailed++;
    }
  }

  try {
    // 1. Visit Homepage
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
    console.log('Homepage loaded');

    // 2. Test Desktop Navigation Clicks across all pages
    const navTests = [
      { text: 'Ürünlerimiz', expectedUrl: '/urunlerimiz.html' },
      { text: 'Çözümlerimiz', expectedUrl: '/cozumlerimiz.html' },
      { text: 'Hizmetlerimiz', expectedUrl: '/hizmetlerimiz.html' },
      { text: 'Referanslar', expectedUrl: '/referanslar.html' },
      { text: 'Kurumsal', expectedUrl: '/kurumsal.html' }
    ];

    for (const test of navTests) {
      console.log(`Testing click on '${test.text}'...`);
      const linkSelector = `nav ul a[href*="${test.expectedUrl}"]`;
      await page.waitForSelector(linkSelector, { timeout: 3000 });
      
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
        page.click(linkSelector)
      ]);

      const currentUrl = page.url();
      assert(currentUrl.includes(test.expectedUrl), `Navigated to ${test.expectedUrl} (Current: ${currentUrl})`);
    }

    // Return to Homepage by clicking Sky Group logo
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      page.click('a[aria-label="Sky Group"]')
    ]);
    assert(page.url() === 'http://localhost:5173/' || page.url().endsWith(':5173/'), 'Navigated back to Homepage via logo');

    // 3. Test Pricing Section on Homepage
    console.log('\nTesting Pricing Section...');
    const pricingContent = await page.$('#sky-pricing-content');
    assert(pricingContent !== null, '#sky-pricing-content exists');

    const pricingClasses = await page.evaluate(el => el.className, pricingContent);
    assert(!pricingClasses.includes('blur-sm'), 'Pricing section has NO blur-sm');
    assert(!pricingClasses.includes('pointer-events-none'), 'Pricing section has NO pointer-events-none');

    const gate = await page.$('#sky-pricing-gate');
    assert(gate === null, '#sky-pricing-gate is completely removed');

    // Test Accordion toggle
    const detailsBtn = await page.$('#sky-pricing-details-btn');
    assert(detailsBtn !== null, 'Details button exists');
    await detailsBtn.click();
    await new Promise(r => setTimeout(r, 200));

    const isAccordionOpen = await page.evaluate(() => {
      const acc = document.getElementById('sky-pricing-accordion');
      return acc && !acc.classList.contains('hidden');
    });
    assert(isAccordionOpen, 'Pricing specification accordion expands on click');

    // Test Facility dropdown
    const facilityToggle = await page.$('#sky-pricing-facility-toggle');
    if (facilityToggle) {
      await facilityToggle.click();
      await new Promise(r => setTimeout(r, 200));
      const firstOpt = await page.$('.sky-pricing-facility-opt[data-value*="HASTANE"]');
      if (firstOpt) {
        await firstOpt.click();
        await new Promise(r => setTimeout(r, 200));
        const badgeText = await page.evaluate(() => document.getElementById('sky-pricing-utility-badge').textContent.trim());
        assert(badgeText.includes('HASTANE'), `Facility badge updated to: ${badgeText}`);
      }
    }

    // Test Quote Modal from Pricing Card
    const quoteBtn = await page.$('#sky-pricing-content a[href="#sky-quote-modal"]');
    assert(quoteBtn !== null, 'Pricing quote button exists');
    await quoteBtn.click();
    await new Promise(r => setTimeout(r, 400));

    const isModalActive = await page.evaluate(() => {
      const m = document.getElementById('sky-quote-modal');
      return m && m.classList.contains('active');
    });
    assert(isModalActive, 'Quote modal opened on pricing CTA click');

    // Close Modal
    await page.click('#sky-modal-close');
    await new Promise(r => setTimeout(r, 300));

    // 4. Test Mobile Drawer
    console.log('\nTesting Mobile Drawer...');
    await page.setViewport({ width: 390, height: 844 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

    const burger = await page.$('#sky-burger-btn');
    assert(burger !== null, 'Mobile burger button exists');
    await burger.click();
    await new Promise(r => setTimeout(r, 300));

    const isDrawerActive = await page.evaluate(() => {
      const d = document.getElementById('sky-mobile-drawer');
      return d && d.classList.contains('active');
    });
    assert(isDrawerActive, 'Mobile drawer opened on burger click');

    // Click 'Referanslar' inside mobile drawer
    console.log('Clicking Referanslar in mobile drawer...');
    const mobileRefLink = await page.$('#sky-mobile-drawer a[href="/referanslar.html"]');
    assert(mobileRefLink !== null, 'Mobile Referanslar link exists in drawer');

    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      mobileRefLink.click()
    ]);
    assert(page.url().includes('/referanslar.html'), `Mobile navigation to Referanslar succeeded (Current: ${page.url()})`);

    // Screenshot of referanslar on mobile
    await page.screenshot({ path: 'verify_mobile_referanslar_nav.png' });
    console.log('Saved verify_mobile_referanslar_nav.png');

    // 5. Test Desktop Mega-Menu Hover Interactivity
    console.log('\nTesting Desktop Mega-Menu Hover...');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

    await page.hover('nav ul a[aria-controls="fullnav-panel-products"]');
    await new Promise(r => setTimeout(r, 300));

    const isSheetOpen = await page.evaluate(() => {
      const s = document.querySelector('.bpc-nav-sheet');
      return s && s.getAttribute('data-open') === 'true';
    });
    assert(isSheetOpen, 'Desktop mega-menu sheet opened on hover over Ürünlerimiz');

    await page.screenshot({ path: 'verify_desktop_megamenu_hover.png' });
    console.log('Saved verify_desktop_megamenu_hover.png');

    // Click link inside mega-menu sheet
    const paneLink = await page.$('#fullnav-panel-products a[href="/urunlerimiz.html"]');
    assert(paneLink !== null, 'Mega-menu product link exists');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      paneLink.click()
    ]);
    assert(page.url().includes('/urunlerimiz.html'), 'Navigated to /urunlerimiz.html via mega-menu dropdown link');

    // Screenshot of final state
    await page.screenshot({ path: 'verify_final_nav_complete.png' });
    console.log('Saved verify_final_nav_complete.png');

  } catch (err) {
    console.error('Test error:', err);
    testsFailed++;
  } finally {
    await browser.close();
    console.log(`\n========================================`);
    console.log(`RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
    console.log(`========================================`);
    process.exit(testsFailed === 0 ? 0 : 1);
  }
})();

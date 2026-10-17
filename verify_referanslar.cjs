const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting Referanslar Navigation & Design Verification...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // 1. TEST DESKTOP NAVIGATION FROM HOME PAGE
    console.log('Step 1: Navigating to Home Page http://localhost:5173/');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

    console.log('Step 2: Clicking desktop header link "Referanslar"...');
    const referansLink = await page.waitForSelector('nav a[href*="referanslar"]');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      referansLink.click()
    ]);

    const currentUrl = page.url();
    console.log('Current URL after click:', currentUrl);
    if (!currentUrl.includes('referanslar')) {
      throw new Error('Desktop header click did not navigate to referanslar: ' + currentUrl);
    }
    console.log('✓ Desktop header navigation to /referanslar succeeded!');

    // 2. CAPTURE DESKTOP REFERANSLAR HERO & 3-COLUMN SHOWCASE
    console.log('Step 3: Capturing Hero and 3-Column Showcase...');
    await page.screenshot({
      path: '/home/emre/Desktop/sky-group-new/verify_ref_desktop_showcase.png',
      clip: { x: 0, y: 0, width: 1440, height: 950 }
    });

    // 3. CAPTURE PROJECT GRID & FILTERING
    console.log('Step 4: Capturing Project Grid...');
    await page.evaluate(() => {
      document.querySelector('#projeler').scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));

    await page.screenshot({
      path: '/home/emre/Desktop/sky-group-new/verify_ref_projects_grid.png',
      clip: { x: 0, y: 800, width: 1440, height: 900 }
    });

    // 4. TEST FILTER CLICK
    console.log('Step 5: Testing category filter "Restoran & Yeme-İçme"...');
    await page.evaluate(() => {
      document.querySelector('button[data-filter="restoran"]').click();
    });
    await new Promise(r => setTimeout(r, 400));

    const visibleCards = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.sky-project-card'))
        .filter(c => c.style.display !== 'none').length;
    });
    console.log(`Visible cards after filter: ${visibleCards}`);

    await page.screenshot({
      path: '/home/emre/Desktop/sky-group-new/verify_ref_filtered_restoran.png',
      clip: { x: 0, y: 800, width: 1440, height: 900 }
    });

    // 5. TEST QUOTE MODAL TRIGGER FROM PROJECT CARD
    console.log('Step 6: Testing Quote Modal from project card...');
    const cardQuoteBtn = await page.waitForSelector('.sky-project-card button');
    await cardQuoteBtn.click();
    await new Promise(r => setTimeout(r, 400));

    const modalActive = await page.evaluate(() => {
      const modal = document.querySelector('#sky-quote-modal');
      const textarea = modal.querySelector('textarea');
      return {
        isActive: modal.classList.contains('active'),
        noteValue: textarea ? textarea.value : ''
      };
    });
    console.log('Modal status:', modalActive);

    await page.screenshot({
      path: '/home/emre/Desktop/sky-group-new/verify_ref_modal_open.png',
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });

    // Close modal
    await page.click('#sky-modal-close');
    await new Promise(r => setTimeout(r, 300));

    // 6. TEST MOBILE NAVIGATION FROM HOME PAGE
    console.log('Step 7: Testing Mobile Drawer Navigation...');
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });

    await mobilePage.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

    console.log('Opening mobile burger menu...');
    const burgerBtn = await mobilePage.waitForSelector('#sky-burger-btn');
    await burgerBtn.click();
    await new Promise(r => setTimeout(r, 400));

    await mobilePage.screenshot({
      path: '/home/emre/Desktop/sky-group-new/verify_ref_mobile_drawer.png'
    });

    console.log('Clicking "Referanslar" in mobile drawer...');
    const mobileRefLink = await mobilePage.waitForSelector('#sky-mobile-drawer a[href*="referanslar"]');
    await Promise.all([
      mobilePage.waitForNavigation({ waitUntil: 'networkidle2' }),
      mobileRefLink.click()
    ]);

    const mobileUrl = mobilePage.url();
    console.log('Mobile URL after click:', mobileUrl);
    if (!mobileUrl.includes('referanslar')) {
      throw new Error('Mobile drawer click did not navigate to referanslar: ' + mobileUrl);
    }
    console.log('✓ Mobile burger navigation to /referanslar succeeded!');

    await mobilePage.screenshot({
      path: '/home/emre/Desktop/sky-group-new/verify_ref_mobile_page.png'
    });

    console.log('All verification checks passed with 100% success!');
  } catch (err) {
    console.error('Verification failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

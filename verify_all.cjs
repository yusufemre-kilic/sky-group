const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('--- TEST 1: index.html ---');
  await page.goto('http://localhost:5173/index.html', { waitUntil: 'networkidle2' });

  // 1. Check header transparency at top
  const headerBgTop = await page.evaluate(() => {
    const nav = document.querySelector('nav#main-navbar') || document.querySelector('.bcc-topnav nav');
    return window.getComputedStyle(nav).backgroundColor;
  });
  console.log('Top header background:', headerBgTop);

  // Scroll down 800px and check header transparency
  await page.evaluate(() => window.scrollTo(0, 800));
  await new Promise(r => setTimeout(r, 400));
  const headerBgScrolled = await page.evaluate(() => {
    const nav = document.querySelector('nav#main-navbar') || document.querySelector('.bcc-topnav nav');
    return window.getComputedStyle(nav).backgroundColor;
  });
  console.log('Scrolled header background:', headerBgScrolled);

  await page.screenshot({ path: '/tmp/test_index_scrolled_header.png' });

  // 2. FAQ section test
  console.log('Testing FAQ section...');
  await page.evaluate(() => {
    const faq = document.querySelector('#faq') || document.querySelector('.bcc-faq-row');
    if (faq) faq.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 300));

  // Check details elements
  const faqRowsCount = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row').length);
  console.log('FAQ rows count:', faqRowsCount);

  // Click row 0
  const row0StatusBefore = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row')[0]?.open);
  await page.click('details.bcc-faq-row:nth-of-type(1) summary');
  await new Promise(r => setTimeout(r, 500));
  const row0StatusAfter1 = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row')[0]?.open);
  console.log(`Row 0 opened: before=${row0StatusBefore}, after=${row0StatusAfter1}`);

  // Click row 1
  await page.click('details.bcc-faq-row:nth-of-type(2) summary');
  await new Promise(r => setTimeout(r, 500));
  const row0StatusAfter2 = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row')[0]?.open);
  const row1StatusAfter2 = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row')[1]?.open);
  console.log(`Both stay open? Row 0=${row0StatusAfter2}, Row 1=${row1StatusAfter2}`);

  // Click row 2
  await page.click('details.bcc-faq-row:nth-of-type(3) summary');
  await new Promise(r => setTimeout(r, 500));
  const row0After3 = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row')[0]?.open);
  const row1After3 = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row')[1]?.open);
  const row2After3 = await page.evaluate(() => document.querySelectorAll('details.bcc-faq-row')[2]?.open);
  console.log(`All 3 stay open? Row 0=${row0After3}, Row 1=${row1After3}, Row 2=${row2After3}`);

  await page.screenshot({ path: '/tmp/test_index_faq.png' });

  console.log('\n--- TEST 2: referanslar.html ---');
  await page.goto('http://localhost:5173/referanslar.html', { waitUntil: 'networkidle2' });

  // 1. Check project cards border radius and no "Keşif & Teklif İste"
  const cardData = await page.evaluate(() => {
    const card = document.querySelector('.sky-project-card');
    const thumb = document.querySelector('.sky-project-photo');
    const filterBtn = document.querySelector('.sky-filter-btn');
    const allText = document.querySelector('.sky-projects-grid')?.innerText || '';
    const hasOfferButton = allText.includes('Keşif & Teklif İste') || allText.includes('Keşif & Teklif');
    return {
      cardRadius: card ? window.getComputedStyle(card).borderRadius : 'N/A',
      thumbRadius: thumb ? window.getComputedStyle(thumb).borderRadius : 'N/A',
      filterBtnRadius: filterBtn ? window.getComputedStyle(filterBtn).borderRadius : 'N/A',
      hasOfferButton: hasOfferButton,
      cardCount: document.querySelectorAll('.sky-project-card').length
    };
  });
  console.log('Project card data:', cardData);

  // 2. Check green colors in DOM / nav sheets
  const greenCheck = await page.evaluate(() => {
    const allElements = document.querySelectorAll('.bpc-nav-sheet *');
    const detectedGreens = [];
    allElements.forEach(el => {
      const cs = window.getComputedStyle(el);
      const bg = cs.backgroundColor;
      const col = cs.color;
      [bg, col].forEach(val => {
        if (val.includes('rgb(30, 77, 43)') || val.includes('rgb(178, 221, 121)') || val.includes('rgb(36, 94, 51)')) {
          detectedGreens.push({ tag: el.tagName, class: el.className, val });
        }
      });
    });
    return {
      detectedGreensCount: detectedGreens.length,
      detectedGreens
    };
  });
  console.log('Nav & Mega-menu green color check:', greenCheck);

  // 3. Hover navigation item to view mega menu
  const navTrigger = await page.$('nav button, nav a');
  if (navTrigger) {
    await navTrigger.hover();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: '/tmp/test_referanslar_megamenu.png' });
  }

  // 4. Scroll to projects grid and take screenshot
  await page.evaluate(() => {
    const grid = document.querySelector('.sky-projects-grid');
    if (grid) grid.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: '/tmp/test_referanslar_cards.png' });

  // 5. Test clicking a card to open quote modal
  await page.click('.sky-project-card');
  await new Promise(r => setTimeout(r, 400));
  const isModalOpen = await page.evaluate(() => {
    const m = document.getElementById('sky-quote-modal');
    return m && m.classList.contains('active') && window.getComputedStyle(m).display !== 'none';
  });
  console.log('Quote modal opened on card click:', isModalOpen);
  await page.screenshot({ path: '/tmp/test_referanslar_modal.png' });

  await browser.close();
  console.log('All tests completed successfully!');
})();

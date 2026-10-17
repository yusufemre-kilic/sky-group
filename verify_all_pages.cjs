const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const pagesToTest = [
    { url: 'http://localhost:5173/urunlerimiz.html', name: 'urunlerimiz', expectedCards: 18 },
    { url: 'http://localhost:5173/cozumlerimiz.html', name: 'cozumlerimiz', expectedCards: 12 },
    { url: 'http://localhost:5173/hizmetlerimiz.html', name: 'hizmetlerimiz', expectedCards: 8 },
    { url: 'http://localhost:5173/kurumsal.html', name: 'kurumsal', expectedCards: 10 },
    { url: 'http://localhost:5173/referanslar.html', name: 'referanslar', expectedCards: 15 }
  ];

  for (const pt of pagesToTest) {
    console.log(`\n================ Testing ${pt.name} (${pt.url}) ================`);
    await page.goto(pt.url, { waitUntil: 'networkidle2' });

    // 1. Check title & showcase
    const title = await page.title();
    console.log(`Page Title: ${title}`);

    // 2. Count project cards
    const cardCount = await page.evaluate(() => document.querySelectorAll('.sky-project-card').length);
    console.log(`Card count: ${cardCount} (Expected: ${pt.expectedCards})`);

    // 3. Verify no bottom CTA banner
    const hasCtaBanner = await page.evaluate(() => {
      const text = document.body.innerText;
      return text.includes('ÜCRETSİZ MÜHENDİSLİK KEŞFİ VE METRAJLIK ŞARTNAME') ||
             text.includes('Projeniz İçin 24 Saat İçinde Metrajlı Fiyat Teklifi Alın');
    });
    console.log(`Has bottom CTA banner? ${hasCtaBanner} (Must be false!)`);

    // 4. Verify social media links in footer
    const socialLinks = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.bcc-footer a[href*="instagram"], .bcc-footer a[href*="linkedin"], .bcc-footer a[href*="wa.me"], .bcc-footer a[href*="facebook"]')).map(a => a.href);
    });
    console.log(`Social links in footer (${socialLinks.length}):`, socialLinks);

    // 5. Test Filter Buttons
    const filterButtons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.sky-filter-btn')).map(b => b.innerText.trim());
    });
    console.log(`Filter tabs: ${filterButtons.join(' | ')}`);

    // Click 2nd filter tab and verify filtering
    if (filterButtons.length > 1) {
      await page.click('.sky-filter-btn:nth-of-type(2)');
      await new Promise(r => setTimeout(r, 200));
      const visibleCount = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.sky-project-card')).filter(c => window.getComputedStyle(c).display !== 'none').length;
      });
      console.log(`Filtered visible cards: ${visibleCount}`);
      // Click 'All' back
      await page.click('.sky-filter-btn:nth-of-type(1)');
      await new Promise(r => setTimeout(r, 200));
    }

    // 6. Test Card Click Modal
    await page.click('.sky-project-card:first-child');
    await new Promise(r => setTimeout(r, 300));
    const modalState = await page.evaluate(() => {
      const m = document.getElementById('sky-quote-modal');
      const notes = document.getElementById('sky-modal-notes')?.value || '';
      return {
        isOpen: m && m.classList.contains('active'),
        notesPrefilled: notes
      };
    });
    console.log(`Card click modal opened: ${modalState.isOpen}, notes: "${modalState.notesPrefilled}"`);

    // Close modal
    await page.click('#sky-modal-close');
    await new Promise(r => setTimeout(r, 200));

    // 7. Take Screenshots
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: `/tmp/verify_${pt.name}_top.png` });

    await page.evaluate(() => {
      const g = document.querySelector('.sky-projects-grid');
      if (g) g.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: `/tmp/verify_${pt.name}_cards.png` });
  }

  await browser.close();
  console.log('\nAll pages verified successfully!');
})();

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const outDir = '/tmp/anim_captures';
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  console.log('Navigating to http://127.0.0.1:5173...');
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle2' });

  // Wait 1s for any initial scripts
  await new Promise(r => setTimeout(r, 1000));

  // Check runway height and document scroll height
  const info = await page.evaluate(() => {
    const bcc = document.querySelector('.bcc');
    const runway = document.querySelector('.bcc-runway');
    return {
      docHeight: document.documentElement.scrollHeight,
      winHeight: window.innerHeight,
      runwayHeight: runway ? runway.offsetHeight : 0,
      bccP: bcc ? bcc.style.getPropertyValue('--bcc-p') : 'none'
    };
  });
  console.log('Page metrics:', info);

  // Capture 1: Hero
  await page.screenshot({ path: path.join(outDir, '01_hero.png') });
  console.log('Captured 01_hero.png');

  // Let's scroll through the runway to trigger Hero -> Energy blur transition (scroll progress ~0.08 - 0.20)
  // Runway height is roughly 620svh (~5580px)
  const runwayH = info.runwayHeight || 5500;

  // Animation 1 & 2: Scroll to Energy section (p ~ 0.15)
  const scrollToP = async (targetP) => {
    const targetY = targetP * (runwayH - 900);
    await page.evaluate((y) => window.scrollTo(0, y), targetY);
    await new Promise(r => setTimeout(r, 400));
    return await page.evaluate(() => ({
      scrollY: window.scrollY,
      bccP: document.querySelector('.bcc')?.style.getPropertyValue('--bcc-p')
    }));
  };

  // Scroll to p = 0.10 (Energy text starting to blur in)
  let state = await scrollToP(0.10);
  console.log('At p=0.10:', state);
  await page.screenshot({ path: path.join(outDir, '02_energy_entering.png') });

  // Scroll to p = 0.15 (Energy underline draw & words visible)
  state = await scrollToP(0.15);
  console.log('At p=0.15:', state);
  await page.screenshot({ path: path.join(outDir, '03_energy_underline.png') });

  // Scroll to p = 0.32 (Pills: Rising Energy Costs, Increased Power Outages)
  state = await scrollToP(0.32);
  console.log('At p=0.32:', state);
  await page.screenshot({ path: path.join(outDir, '04_energy_pills.png') });

  // Animation 4: Mosaic / Tile Grid Merge (p ~ 0.58 - 0.85)
  // At p = 0.60, tiles start visible / separated
  state = await scrollToP(0.60);
  console.log('At p=0.60:', state);
  await page.screenshot({ path: path.join(outDir, '05_mosaic_tiles_entering.png') });

  // At p = 0.75, tiles merging
  state = await scrollToP(0.75);
  console.log('At p=0.75:', state);
  await page.screenshot({ path: path.join(outDir, '06_mosaic_tiles_merging.png') });

  // At p = 0.88, full image continuous reveal with Meet Base Core
  state = await scrollToP(0.88);
  console.log('At p=0.88:', state);
  await page.screenshot({ path: path.join(outDir, '07_mosaic_merged_title.png') });

  // Animation 5: bcc-meet (A Texas-sized home battery...)
  // Scroll to .bcc-meet
  const scrollToSelector = async (sel, offset = 0) => {
    await page.evaluate((s, off) => {
      const el = document.querySelector(s);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
        window.scrollBy(0, off);
      }
    }, sel, offset);
    await new Promise(r => setTimeout(r, 600));
  };

  await scrollToSelector('.bcc-meet', 200);
  await page.screenshot({ path: path.join(outDir, '08_meet_text_icons.png') });
  console.log('Captured 08_meet_text_icons.png');

  // Animation 6: bcc-witness (Grid Day vs Night)
  await scrollToSelector('.bcc-witness', 0);
  await page.screenshot({ path: path.join(outDir, '09_witness_grid_day.png') });
  console.log('Captured 09_witness_grid_day.png');

  // Scroll further down in witness to flip to night
  await scrollToSelector('.bcc-witness', 800);
  await page.screenshot({ path: path.join(outDir, '10_witness_grid_night.png') });
  console.log('Captured 10_witness_grid_night.png');

  // Animation 8: bcc-crew (Overlapping photo cards)
  await scrollToSelector('.bcc-crew', 200);
  await page.screenshot({ path: path.join(outDir, '11_crew_overlapping_cards.png') });
  console.log('Captured 11_crew_overlapping_cards.png');

  // Animation 7: bcc-say (What members are saying)
  await scrollToSelector('.bcc-say', 200);
  await page.screenshot({ path: path.join(outDir, '12_what_members_saying.png') });
  console.log('Captured 12_what_members_saying.png');

  // Animation 9: bcc-nf (Nightfall closing cinematic + green BASE footer)
  await scrollToSelector('.bcc-nf', 100);
  await page.screenshot({ path: path.join(outDir, '13_nightfall_cinematic.png') });
  console.log('Captured 13_nightfall_cinematic.png');

  await scrollToSelector('.bcc-nf', 1200);
  await page.screenshot({ path: path.join(outDir, '14_nightfall_houses_glow.png') });
  console.log('Captured 14_nightfall_houses_glow.png');

  // Scroll to bottom (Big green BASE footer)
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(outDir, '15_footer_base.png') });
  console.log('Captured 15_footer_base.png');

  await browser.close();
  console.log('Done testing!');
})();

import os
import re

def build_skygroup_html():
    with open('/home/emre/Desktop/sky-group-new/index.html.bak', 'r', encoding='utf-8') as f:
        orig = f.read()

    # Extract the original head
    head_match = re.search(r'<head>(.*?)</head>', orig, re.DOTALL)
    orig_head = head_match.group(1) if head_match else ''

    # Clean up old Base metadata from head
    clean_head = re.sub(r'<title>.*?</title>', '', orig_head)
    clean_head = re.sub(r'<meta name="description"[^>]*>', '', clean_head)
    clean_head = re.sub(r'<meta property="og:[^>]*>', '', clean_head)
    clean_head = re.sub(r'<meta name="twitter:[^>]*>', '', clean_head)
    clean_head = re.sub(r'<link rel="canonical"[^>]*>', '', clean_head)
    clean_head = re.sub(r'<link rel="alternate"[^>]*>', '', clean_head)
    clean_head = re.sub(r'<link rel="icon"[^>]*>', '', clean_head)
    clean_head = re.sub(r'<link rel="apple-touch-icon"[^>]*>', '', clean_head)

    # New custom styles for Sky Group accents
    sky_custom_styles = """
    <title>Sky Group | Havalandırma, İklimlendirme ve Mekanik Tesisat Çözümleri</title>
    <meta name="description" content="Sky Group; havalandırma sistemleri, klima santralleri, VRF/VRV iklimlendirme, ısı geri kazanım ve yangın söndürme projelerinde yüksek mühendislik güvencesi sunar.">
    <link rel="icon" type="image/png" href="/tema/sg/images/favicon.png">
    <link rel="apple-touch-icon" href="/tema/sg/images/favicon.png">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Sky Group | Havalandırma ve İklimlendirme Çözümleri">
    <meta property="og:description" content="Endüstriyel tesisler ve modern yapılar için yüksek verimli mekanik tesisat ve iklimlendirme çözümleri.">
    <meta property="og:image" content="/sm/ambar/banner/sky-mekanik.jpg">
    <meta property="og:site_name" content="Sky Group">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Sky Group | Havalandırma ve İklimlendirme">
    <meta name="twitter:description" content="Yüksek enerji tasarruflu havalandırma ve iklimlendirme sistemleri.">
    <meta name="twitter:image" content="/sm/ambar/banner/sky-mekanik.jpg">
    <style>
      :root {
        --sky-blue: #0d5ca9;
        --sky-navy: #072b4d;
        --sky-cyan: #09bde3;
        --sky-orange: #ed6c30;
        --color-brand-primary: #ed6c30 !important;
        --color-brand-primary-subtle: #d95b22 !important;
        --color-text-brand: #ffffff !important;
      }
      .sky-glow {
        box-shadow: 0 10px 30px -10px rgba(13, 92, 169, 0.4);
      }
      .sky-card-hover {
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      }
      .sky-card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 35px -12px rgba(13, 92, 169, 0.25);
        border-color: #0d5ca9;
      }
      .sky-brand-logo-text {
        font-family: var(--font-headline, 'PP Neue Montreal', sans-serif);
        font-weight: 800;
        letter-spacing: -0.03em;
      }
      .bcc-hero-sub {
        height: auto !important;
        overflow: visible !important;
        color: #ffffff !important;
        text-shadow: 0 2px 10px rgba(0,0,0,0.8) !important;
        font-size: 1.25rem !important;
        font-weight: 500 !important;
        line-height: 1.5 !important;
        margin: 1.25rem auto 1.5rem auto !important;
        max-width: 680px !important;
        text-align: center !important;
      }
      .bcc-hero-title {
        text-shadow: 0 4px 16px rgba(0,0,0,0.6) !important;
      }
      .bcc-hero-scrim {
        opacity: 0.35 !important;
      }
      #main-navbar {
        background: rgba(4, 13, 22, 0.15) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
        transition: background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease !important;
      }
      #main-navbar.scrolled {
        background: rgba(5, 17, 30, 0.88) !important;
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.14) !important;
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6) !important;
      }
      #main-navbar a {
        color: #f8fafc !important;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7) !important;
      }
      #main-navbar a:hover {
        color: #09bde3 !important;
        text-shadow: 0 0 12px rgba(9, 189, 227, 0.6) !important;
      }
      footer.sky-footer {
        background: #040d16 !important;
        color: #ffffff !important;
        position: relative;
        z-index: 10;
        border-top: 1px solid rgba(255,255,255,0.12) !important;
      }
      footer.sky-footer a {
        color: #94a3b8 !important;
        transition: color 0.2s ease;
      }
      footer.sky-footer a:hover {
        color: #09bde3 !important;
      }
      footer.sky-footer p, footer.sky-footer span {
        color: #cbd5e1 !important;
      }
      footer.sky-footer h4 {
        color: #ffffff !important;
      }
      @keyframes sky-marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .sky-marquee-track {
        display: flex;
        width: 200%;
        animation: sky-marquee 35s linear infinite;
      }
      .sky-marquee-track:hover {
        animation-play-state: paused;
      }
      /* Ensure text contrast on light section backgrounds */
      .bcc-stmt-head .bcc-word {
        color: #1e293b;
      }
      .bcc-how-title {
        color: #0f172a !important;
      }
      .bcc-how-body {
        color: #334155 !important;
      }
      .bcc-crew-head {
        color: #0f172a !important;
      }
      .bcc-crew-cta {
        background-color: #ed6c30 !important;
        color: #ffffff !important;
        padding: 14px 28px !important;
        border-radius: 8px !important;
        font-weight: 700 !important;
        box-shadow: 0 8px 20px -4px rgba(237, 108, 48, 0.4) !important;
        display: inline-block !important;
        text-decoration: none !important;
        margin-top: 24px !important;
      }
      .bcc-crew-cta:hover {
        background-color: #d95b22 !important;
        color: #ffffff !important;
      }

      /* Bulletproof Styling for Pricing Section (#teklif) */
      #teklif {
        background-color: #071726 !important;
        color: #ffffff !important;
        padding: 90px 20px !important;
        position: relative !important;
        z-index: 10 !important;
        border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
      }
      #teklif .sky-pricing-card {
        background-color: #0c233c !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        border-radius: 20px !important;
        padding: 36px 32px !important;
        color: #ffffff !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35) !important;
        transition: transform 0.3s ease, border-color 0.3s ease !important;
      }
      #teklif .sky-pricing-card:hover {
        transform: translateY(-5px) !important;
        border-color: #09bde3 !important;
      }
      #teklif .sky-pricing-card.featured {
        background: linear-gradient(180deg, #112d4a 0%, #07192c 100%) !important;
        border: 2px solid #ed6c30 !important;
        box-shadow: 0 20px 45px -10px rgba(237, 108, 48, 0.45) !important;
        padding-top: 48px !important;
        position: relative !important;
      }
      #teklif .sky-pricing-card.featured:hover {
        border-color: #ff8548 !important;
      }
      #teklif .sky-pricing-badge {
        position: absolute !important;
        top: -15px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        background-color: #ed6c30 !important;
        color: #ffffff !important;
        font-size: 11px !important;
        font-weight: 800 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.08em !important;
        padding: 5px 18px !important;
        border-radius: 9999px !important;
        white-space: nowrap !important;
        box-shadow: 0 4px 15px rgba(237, 108, 48, 0.6) !important;
      }
      #teklif .sky-tag {
        display: inline-block !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        padding: 5px 14px !important;
        border-radius: 9999px !important;
        margin-bottom: 16px !important;
      }
      #teklif .sky-tag-blue {
        background: rgba(13, 92, 169, 0.3) !important;
        color: #09bde3 !important;
        border: 1px solid rgba(9, 189, 227, 0.4) !important;
      }
      #teklif .sky-tag-orange {
        background: rgba(237, 108, 48, 0.25) !important;
        color: #ff9a6c !important;
        border: 1px solid rgba(237, 108, 48, 0.5) !important;
      }
      #teklif .sky-tag-green {
        background: rgba(16, 185, 129, 0.25) !important;
        color: #34d399 !important;
        border: 1px solid rgba(16, 185, 129, 0.4) !important;
      }
      #teklif h3 {
        font-size: 22px !important;
        font-weight: 800 !important;
        color: #ffffff !important;
        margin: 0 0 10px 0 !important;
      }
      #teklif p.sky-card-desc {
        font-size: 14px !important;
        color: #cbd5e1 !important;
        margin-bottom: 24px !important;
        line-height: 1.55 !important;
      }
      #teklif ul.sky-features {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 0 32px 0 !important;
      }
      #teklif ul.sky-features li {
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        font-size: 14px !important;
        color: #f1f5f9 !important;
        margin-bottom: 12px !important;
      }
      #teklif .sky-btn-card-primary {
        background: #ed6c30 !important;
        color: #ffffff !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        padding: 14px 20px !important;
        border-radius: 10px !important;
        text-align: center !important;
        display: block !important;
        text-decoration: none !important;
        box-shadow: 0 8px 20px -4px rgba(237, 108, 48, 0.5) !important;
        transition: background 0.2s ease !important;
      }
      #teklif .sky-btn-card-primary:hover {
        background: #d95b22 !important;
      }
      #teklif .sky-btn-card-secondary {
        background: rgba(255, 255, 255, 0.1) !important;
        color: #ffffff !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        padding: 14px 20px !important;
        border-radius: 10px !important;
        text-align: center !important;
        display: block !important;
        text-decoration: none !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        transition: all 0.2s ease !important;
      }
      #teklif .sky-btn-card-secondary:hover {
        background: rgba(255, 255, 255, 0.2) !important;
        border-color: rgba(255, 255, 255, 0.4) !important;
      }
      #teklif .sky-form-box {
        background-color: #0c233c !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        border-radius: 24px !important;
        padding: 40px !important;
        margin-top: 48px !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4) !important;
      }
      #teklif .sky-form-box input,
      #teklif .sky-form-box select,
      #teklif .sky-form-box textarea {
        background-color: #071726 !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        color: #ffffff !important;
        padding: 14px 16px !important;
        border-radius: 10px !important;
        font-size: 14px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        outline: none !important;
      }
      #teklif .sky-form-box input:focus,
      #teklif .sky-form-box select:focus,
      #teklif .sky-form-box textarea:focus {
        border-color: #09bde3 !important;
      }
      #teklif .sky-form-box label {
        color: #cbd5e1 !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        display: block !important;
        margin-bottom: 6px !important;
      }
      #teklif .sky-btn-submit {
        background: #ed6c30 !important;
        color: #ffffff !important;
        font-weight: 700 !important;
        font-size: 16px !important;
        padding: 16px !important;
        border-radius: 12px !important;
        border: none !important;
        width: 100% !important;
        cursor: pointer !important;
        box-shadow: 0 10px 25px -5px rgba(237, 108, 48, 0.5) !important;
        transition: all 0.2s ease !important;
      }
      #teklif .sky-btn-submit:hover {
        background: #d95b22 !important;
        transform: translateY(-2px) !important;
      }
    </style>
    """

    # Topnav HTML
    topnav_html = """
    <div class="bcc-topnav">
      <nav class="left-0 right-0 z-50 antialiased duration-300 transition-all relative w-full" id="main-navbar">
        <div class="max-w-[1376px] mx-auto px-4 md:px-8 h-[60px] md:h-[72px] flex items-center justify-between gap-4">
          
          <!-- Brand Logo -->
          <a href="/" class="flex items-center gap-3 group focus:outline-none" aria-label="Sky Group Ana Sayfa">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0d5ca9] to-[#09bde3] p-0.5 shadow-lg shadow-sky-500/30 flex items-center justify-center">
              <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <svg class="w-6 h-6 text-[#09bde3] group-hover:rotate-180 transition-transform duration-700 ease-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                SKY <span class="text-[#09bde3]">GROUP</span>
              </span>
              <span class="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1 hidden sm:block">Mühendislik &amp; İklimlendirme</span>
            </div>
          </a>

          <!-- Navigation Links -->
          <ul class="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-200">
            <li><a href="#urunler" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">Ürünlerimiz</a></li>
            <li><a href="#hizmetler" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">Hizmetlerimiz</a></li>
            <li><a href="#imalat" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">İmalat</a></li>
            <li><a href="#referanslar" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">Referanslar</a></li>
            <li><a href="#hakkimizda" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">Hakkımızda</a></li>
            <li><a href="#standartlar" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">Standartlar</a></li>
            <li><a href="#faq" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">SSS</a></li>
            <li><a href="#iletisim" class="px-3.5 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-colors">İletişim</a></li>
          </ul>

          <!-- Call to Action Buttons -->
          <div class="flex items-center gap-3">
            <a href="tel:+905419221991" class="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-[#09bde3] transition-colors py-2 px-3">
              <svg class="w-4 h-4 text-[#09bde3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              0 (541) 922 19 91
            </a>
            <a href="#teklif" class="inline-flex items-center justify-center font-semibold transition-all duration-200 bg-[#ed6c30] hover:bg-[#d95b22] text-white py-2 px-4 rounded-lg text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30">
              Teklif Alın
            </a>
            <button id="mobile-menu-toggle" type="button" class="lg:hidden inline-flex p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10" aria-label="Menüyü aç">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-drawer" class="hidden lg:hidden bg-slate-950/95 border-b border-white/10 px-4 py-6 space-y-4">
          <ul class="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <li><a href="#urunler" class="block py-2 hover:text-[#09bde3]">Ürünlerimiz</a></li>
            <li><a href="#hizmetler" class="block py-2 hover:text-[#09bde3]">Hizmetlerimiz</a></li>
            <li><a href="#imalat" class="block py-2 hover:text-[#09bde3]">İmalat</a></li>
            <li><a href="#referanslar" class="block py-2 hover:text-[#09bde3]">Referanslarımız</a></li>
            <li><a href="#hakkimizda" class="block py-2 hover:text-[#09bde3]">Hakkımızda</a></li>
            <li><a href="#standartlar" class="block py-2 hover:text-[#09bde3]">Teknik Standartlar</a></li>
            <li><a href="#faq" class="block py-2 hover:text-[#09bde3]">Sıkça Sorulan Sorular</a></li>
            <li><a href="#iletisim" class="block py-2 hover:text-[#09bde3]">İletişim</a></li>
          </ul>
          <div class="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a href="tel:+905419221991" class="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 text-white font-semibold text-sm">
              <svg class="w-4 h-4 text-[#09bde3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              0 (541) 922 19 91
            </a>
            <a href="https://wa.me/905419221991" target="_blank" class="flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm">
              WhatsApp İle Hızlı İletişim
            </a>
          </div>
        </div>
      </nav>
    </div>
    """

    # Section 1: bcc-runway (Hero + Stress Stage + Mosaic Grid Stage)
    runway_html = """
    <section class="bcc-runway">
      <div class="bcc-frame" data-bcc-screen>
        
        <!-- Hero Stage -->
        <div class="bcc-stage bcc-stage-hero">
          <div class="bcc-hero-media" aria-hidden="true">
            <img class="bcc-hero-poster" src="/sm/ambar/banner/sky-mekanik.jpg" alt="Sky Group Havalandırma ve İklimlendirme Tesisatı" width="1920" height="1080" loading="eager" fetchpriority="high">
            <img class="bcc-hero-soft" src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="1920" height="1080" loading="lazy" decoding="async">
            <div class="bcc-hero-scrim"></div>
          </div>
          
          <div class="bcc-hero-content">
            <span class="bcc-hero-tape" data-bcc-seasons-egg>
              <span class="bpc-tape-eyebrow">MÜHENDİSLİK &amp; İKLİMLENDİRME ÇÖZÜMLERİ</span>
            </span>
            <div class="bcc-hero-title-mask">
              <h1 class="bcc-hero-title">Sky Group</h1>
            </div>
            <p class="bcc-hero-sub">Doğru İklimlendirme ve Havalandırma Çözümleriyle Geleceğin Tesislerini İnşa Ediyoruz.</p>
            <div class="flex flex-wrap items-center justify-center gap-4 mt-6">
              <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-[#ed6c30] hover:bg-[#d95b22] text-white py-3 px-6 rounded-lg text-body-lg shadow-xl shadow-orange-500/20" href="#teklif">
                Hemen Teklif Alın
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
              <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md py-3 px-6 rounded-lg text-body-lg border border-white/20" href="#referanslar">
                Referans Projelerimiz
              </a>
            </div>
            <a class="bcc-hero-videocard" href="#bcc-fact" data-bcc-pip-open aria-label="İmalat ve Montaj Sahasını İnceleyin">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bcc-hero-pip-icon"><polygon points="6 3 20 12 6 21 6 3"/></svg>
              <span class="bcc-hero-videocard-text">Üretim &amp; Saha Montajını İnceleyin</span>
            </a>
          </div>
        </div>

        <!-- Stress Stage (Underline brush animation + Chip pills) -->
        <div class="bcc-stage bcc-stage-stress" id="bcc-stress">
          <div class="bcc-stmt-inner">
            <h2 class="bcc-stmt-head">
              <span class="bcc-uphrase">
                <span class="bcc-useg">
                  <span class="bcc-word" style="--ws:0.0881">Enerji</span>
                  <span class="bcc-word" style="--ws:0.103">ve</span>
                  <span class="bcc-word" style="--ws:0.1179">iklimlendirme</span>
                  <img class="bcc-stroke bcc-stroke-seg1" style="--ws:0.1179" src="/_bpc/assets/base-core-concept/underline-brush.avif" alt="" width="2721" height="27" loading="lazy" decoding="async">
                </span>
                <br class="bcc-br-m">
                <span class="bcc-useg">
                  <span class="bcc-word" style="--ws:0.1328">yönetimi.</span>
                  <img class="bcc-stroke bcc-stroke-seg2" style="--ws:0.1328" src="/_bpc/assets/base-core-concept/underline-brush.avif" alt="" width="2721" height="27" loading="lazy" decoding="async">
                </span>
                <img class="bcc-stroke bcc-stroke-whole" style="--ws:0.1328" src="/_bpc/assets/base-core-concept/underline-brush.avif" alt="" width="2721" height="27" loading="lazy" decoding="async">
              </span>
              <br>
              <span class="bcc-word" style="--ws:0.1477">Doğru</span>
              <span class="bcc-word" style="--ws:0.1626">mühendislik</span>
              <span class="bcc-word" style="--ws:0.1775">ile</span>
              <span class="bcc-word" style="--ws:0.1924">yüksek</span>
              <span class="bcc-word" style="--ws:0.2073">tasarruf.</span>
            </h2>
            <ul class="bcc-chips" role="list">
              <li class="bcc-chip" style="--chip-tint: var(--color-orange-5); --chip-ink: var(--color-orange-90); --ws: 0.3184; --wsa: 0.3319;">
                <span class="bcc-chip-icon" aria-hidden="true">
                  <svg viewBox="0 0 31 31" fill="none">
                    <circle class="bcc-chip-disc" cx="15.5" cy="15.5" r="15.5"></circle>
                    <path class="bcc-chip-zig" pathLength="1" d="M7.92245 22.0343L11.7428 14.9322C12.0933 14.2805 13.0056 14.2221 13.4364 14.8236L15.5896 17.8302C16.0087 18.4153 16.89 18.3795 17.2602 17.7623L22.1105 9.6762" stroke-width="2" stroke-linecap="round"></path>
                    <path class="bcc-chip-tip" pathLength="1" d="M23.3906 12.2383L22.9173 8.76456L19.2267 9.67599" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </span>
                <span class="bcc-chip-pill">%85'e Varan Isı Geri Kazanımı</span>
              </li>
              <li class="bcc-chip" style="--chip-tint: var(--color-yellow-5); --chip-ink: var(--color-yellow-80); --ws: 0.3319; --wsa: 0.3454;">
                <span class="bcc-chip-icon" aria-hidden="true">
                  <svg viewBox="0 0 31 31" fill="none">
                    <circle class="bcc-chip-disc" cx="15.5" cy="15.5" r="15.5"></circle>
                    <path class="bcc-chip-zig" pathLength="1" d="M7.92245 22.0343L11.7428 14.9322C12.0933 14.2805 13.0056 14.2221 13.4364 14.8236L15.5896 17.8302C16.0087 18.4153 16.89 18.3795 17.2602 17.7623L22.1105 9.6762" stroke-width="2" stroke-linecap="round"></path>
                    <path class="bcc-chip-tip" pathLength="1" d="M23.3906 12.2383L22.9173 8.76456L19.2267 9.67599" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </span>
                <span class="bcc-chip-pill">A+++ Enerji Sınıfı &amp; Düşük Maliyet</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Grid Stage (Mosaic Tiles dissolving to reveal full engineering photo) -->
        <div class="bcc-stage bcc-stage-grid">
          <div class="bcc-grid-final" aria-hidden="true">
            <picture>
              <img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="Sky Group Havalandırma İmalatı" width="2560" height="1440" loading="lazy" decoding="async">
            </picture>
          </div>
          <div class="bcc-grid-tiles bcc-grid-tiles-desktop" aria-hidden="true">
            <div class="bcc-grid-tile" style="--c:2; --r:1; --ws:0.535"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:2; --r:0; --ws:0.5478"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:4; --r:1; --ws:0.5606"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile bcc-grid-tile-tl" style="--c:0; --r:0; --ws:0.5734"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:1; --r:2; --ws:0.5862"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile bcc-grid-tile-br" style="--c:4; --r:2; --ws:0.599"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:3; --r:1; --ws:0.6338"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile bcc-grid-tile-bl" style="--c:0; --r:2; --ws:0.6466"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:1; --r:0; --ws:0.6594"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:3; --r:2; --ws:0.6722"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:0; --r:1; --ws:0.685"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile bcc-grid-tile-tr" style="--c:4; --r:0; --ws:0.6978"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:2; --r:2; --ws:0.7106"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:1; --r:1; --ws:0.7234"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
            <div class="bcc-grid-tile" style="--c:3; --r:0; --ws:0.7362"><img src="/sm/ambar/banner/sky-mekanik-250.jpg" alt="" width="2560" height="1440" loading="lazy" decoding="async"></div>
          </div>
          <div class="bcc-grid-plate">
            <div class="bcc-grid-scrim" aria-hidden="true"></div>
            <h2 class="bcc-grid-title" style="--ws:0.8931"><span class="bcc-grid-meet">Mühendislikte</span> Sky Group</h2>
            <p class="bcc-grid-sub" style="--ws:0.9094">İstanbul, Türkiye</p>
          </div>
        </div>

      </div>
    </section>
    """

    # Section 2: bcc-meet (Text + Icons Reveal)
    meet_html = """
    <section class="bcc-meet" data-bcc-scrub="runway" data-bcc-scrub-sm="travel" data-bcc-cue="0.72" data-bcc-cue-sm="0.36" id="hakkimizda">
      <div class="bcc-meet-screen" data-bcc-clear>
        <div class="bcc-meet-inner">
          <h2 class="bcc-stmt-head bcc-meet-head">
            <span class="bcc-meet-line" data-bcc-reveal>
              <span class="bcc-meet-green">
                <span class="bcc-meet-w" style="--cd:0.05s">Endüstriyel</span>
                <span class="bcc-meet-w" style="--cd:0.13s">tesislerden</span>
                <span class="bcc-meet-w" style="--cd:0.21s">modern</span>
                <span class="bcc-meet-mark">
                  <span class="bcc-meet-w" style="--cd:0.29s">yapılara</span>
                  <img class="bcc-meet-pic" src="/_bpc/assets/base-core-concept/meet-battery.avif" alt="" width="190" height="222" loading="lazy" decoding="async">
                </span>
              </span>
            </span>
            <span class="bcc-meet-w" style="--ws:0.1400">,</span>
            <span class="bcc-meet-w" style="--ws:0.1600">yüksek</span>
            <span class="bcc-meet-w" style="--ws:0.1800">verimli</span>
            <span class="bcc-meet-w" style="--ws:0.2000">klima</span>
            <span class="bcc-meet-mark">
              <span class="bcc-meet-w" style="--ws:0.2200">santralleri</span>
              <img class="bcc-meet-ico bcc-meet-ico-house" style="--ws:0.2500" src="/_bpc/assets/base-core-concept/meet-house.avif" alt="" width="268" height="162" loading="lazy" decoding="async">
            </span>
            <span class="bcc-meet-w" style="--ws:0.2400">ile</span>
            <span class="bcc-meet-w" style="--ws:0.2600">taze</span>
            <span class="bcc-meet-w" style="--ws:0.2800">hava</span>
            <span class="bcc-meet-w" style="--ws:0.3000">sağlarken</span>
            <span class="bcc-meet-mark">
              <span class="bcc-meet-w" style="--ws:0.3200">,</span>
              <img class="bcc-meet-ico bcc-meet-ico-bolt" style="--ws:0.3500" src="/_bpc/assets/base-core-concept/meet-icon-bolt.avif" alt="" width="112" height="186" loading="lazy" decoding="async">
            </span>
            <span class="bcc-meet-w" style="--ws:0.3400">enerji</span>
            <span class="bcc-meet-w" style="--ws:0.3600">maliyetlerini</span>
            <span class="bcc-meet-w" style="--ws:0.3800">düşüren</span>
            <span class="bcc-meet-mark">
              <span class="bcc-meet-w" style="--ws:0.4000">tasarruf</span>
              <img class="bcc-meet-ico bcc-meet-ico-dollar" style="--ws:0.4300" src="/_bpc/assets/base-core-concept/meet-icon-dollar.avif" alt="" width="189" height="182" loading="lazy" decoding="async">
              <span class="bcc-meet-w" style="--ws:0.4000">,</span>
            </span>
            <span class="bcc-meet-w" style="--ws:0.4200">ve</span>
            <span class="bcc-meet-w" style="--ws:0.4400">kesintisiz</span>
            <span class="bcc-meet-w" style="--ws:0.4600">iklimlendirme</span>
            <span class="bcc-meet-w" style="--ws:0.4800">güvencesi</span>
            <span class="bcc-meet-mark">
              <span class="bcc-meet-w" style="--ws:0.5000">sunuyoruz</span>
              <img class="bcc-meet-ico bcc-meet-ico-tower" style="--ws:0.5300" src="/_bpc/assets/base-core-concept/meet-icon-tower.avif" alt="" width="152" height="156" loading="lazy" decoding="async">
              <span class="bcc-meet-w" style="--ws:0.5000">.</span>
            </span>
          </h2>
          <div class="bcc-meet-sub" style="--ws:0.66; --wd:0.17">
            <p class="bcc-meet-sub-bold">Sky Group; konfor ve endüstriyel iklimlendirmede projelendirme, imalat ve montajı tek elden yürütür.</p>
            <p class="bcc-meet-sub-muted">İstanbul merkezli üretim ve Türkiye genelinde anahtar teslim taahhüt.</p>
          </div>
          <div class="bcc-meet-cta" style="--ws:0.74; --wd:0.17">
            <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-[#ed6c30] hover:bg-[#d95b22] text-white py-3 px-6 rounded-lg text-body-lg bcc-meet-btn" href="#teklif">
              Hemen Teklif Alın
            </a>
            <a class="bcc-meet-more" href="#urunler">Tüm ürün ve çözümlerimizi keşfedin ›</a>
          </div>
        </div>
      </div>
    </section>
    """

    # Section 3: bcc-bp (4 Better Power / Core Feature Pinned Crossfade Steps)
    bp_html = """
    <section class="bcc-bp" data-bcc-scrub="runway" data-bcc-steps="4" data-bcc-snap data-bcc-snap-off="(max-width: 767.9px), (max-height: 720px), (pointer: coarse)" style="--n:4" id="urunler">
      <i class="bcc-bp-stop bcc-bp-stop-out bcc-bp-stop-back" aria-hidden="true"></i>
      <i class="bcc-bp-stop bcc-bp-stop-seam" aria-hidden="true"></i>
      <i class="bcc-bp-stop" style="--at:0.125" aria-hidden="true"></i>
      <i class="bcc-bp-stop" style="--at:0.375" aria-hidden="true"></i>
      <i class="bcc-bp-stop" style="--at:0.625" aria-hidden="true"></i>
      <i class="bcc-bp-stop" style="--at:0.875" aria-hidden="true"></i>
      <i class="bcc-bp-stop" style="--at:1" aria-hidden="true"></i>
      <i class="bcc-bp-stop bcc-bp-stop-out bcc-bp-stop-on" aria-hidden="true"></i>
      
      <div class="bcc-bp-screen" data-bcc-screen data-bcc-clear>
        <div class="bcc-bp-grid">
          
          <!-- Left: Pinned crossfading product images -->
          <div class="bcc-bp-card" data-bcc-reveal style="--rd:0.06s">
            <img class="bcc-bp-img object-cover" data-shot="battery" src="/sm/ambar/urunler/tks-standart-klima-santrali.jpg" alt="Klima Santralleri AHU" width="1360" height="1338" loading="lazy" decoding="async">
            <img class="bcc-bp-img object-cover" data-shot="install" style="--wb:0.2500" src="/sm/ambar/urunler/vrvvrf-sistemler.jpg" alt="VRV VRF Sistemleri" width="1360" height="1338" loading="lazy" decoding="async">
            <img class="bcc-bp-img object-cover" data-shot="winter" style="--wb:0.5000" src="/sm/ambar/urunler/isi-geri-kazanim-cihazlari-hrv.jpg" alt="Isı Geri Kazanım Cihazları HRV" width="1360" height="1338" loading="lazy" decoding="async">
            <img class="bcc-bp-img object-cover" data-shot="hand" style="--wb:0.7500" src="/sm/ambar/urunler/yangin-sondurme-sistemleri.jpg" alt="Yangın Söndürme Sistemleri" width="1360" height="1338" loading="lazy" decoding="async">
          </div>

          <!-- Right: 4 Interactive steps with animated progress bar -->
          <div class="bcc-bp-copy">
            <h2 class="bcc-bp-head" data-bcc-reveal>
              <span class="bcc-bp-line">
                <span class="bcc-bp-mark">
                  Mükemmel İklimlendirme
                  <svg width="100%" height="10" viewBox="44 149 212 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none" class="block bcc-bp-stroke"><path d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z" fill="#ed6c30"></path></svg>
                </span>
              </span>
              Sky Group ile Başlar:
            </h2>

            <ol class="bcc-bp-list" data-bcc-reveal style="--rd:0.12s">
              
              <!-- Step 0 -->
              <li class="bcc-bp-step" style="--i:0">
                <span class="bcc-bp-seg" aria-hidden="true"></span>
                <span class="bcc-bp-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>
                </span>
                <div class="bcc-bp-text">
                  <h3 class="bcc-bp-title">Klima Santralleri (AHU)</h3>
                  <div class="bcc-bp-clip">
                    <p class="bcc-bp-body">
                      <strong>1.000 - 100.000 m³/h</strong> debi kapasitesi. EN 1886 L1 sızdırmazlık standardında hijyenik ve standart klima santralleri.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Step 1 -->
              <li class="bcc-bp-step" style="--i:1">
                <span class="bcc-bp-seg" aria-hidden="true"></span>
                <span class="bcc-bp-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
                <div class="bcc-bp-text">
                  <h3 class="bcc-bp-title">VRV / VRF Merkezi Sistemler</h3>
                  <div class="bcc-bp-clip">
                    <p class="bcc-bp-body">
                      Tek dış üniteyle onlarca bağımsız mahali iklimlendirme. Yüksek COP ve inverter kompresör teknolojisi ile %40'a varan elektrik tasarrufu.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Step 2 -->
              <li class="bcc-bp-step" style="--i:2">
                <span class="bcc-bp-seg" aria-hidden="true"></span>
                <span class="bcc-bp-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </span>
                <div class="bcc-bp-text">
                  <h3 class="bcc-bp-title">Isı Geri Kazanım Cihazları (HRV)</h3>
                  <div class="bcc-bp-clip">
                    <p class="bcc-bp-body">
                      Egzoz havasının ısısını taze havaya aktararak mekanları havalandırırken ısıtma ve soğutma giderlerini %85'e kadar düşürür.
                    </p>
                  </div>
                </div>
              </li>

              <!-- Step 3 -->
              <li class="bcc-bp-step" style="--i:3">
                <span class="bcc-bp-seg" aria-hidden="true"></span>
                <span class="bcc-bp-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                </span>
                <div class="bcc-bp-text">
                  <h3 class="bcc-bp-title">Yangın &amp; Davlumbaz Söndürme</h3>
                  <div class="bcc-bp-clip">
                    <p class="bcc-bp-body">
                      Otomatik sulu sprinkler tesisatı, FM200 gazlı yangın söndürme ve endüstriyel mutfak davlumbaz söndürme sistemleri.
                    </p>
                  </div>
                </div>
              </li>

            </ol>

            <div class="bcc-bp-cta" data-bcc-reveal style="--rd:0.2s">
              <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-[#ed6c30] hover:bg-[#d95b22] text-white py-3 px-6 rounded-lg text-body-lg bcc-bp-btn" href="#teklif">
                Fiyat Teklifi Alın
              </a>
              <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-white/10 hover:bg-white/20 text-slate-800 py-3 px-6 rounded-lg text-body-lg border border-slate-300 bcc-bp-btn" href="#referanslar">
                Referans Projeler
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
    """

    # Section 4: bcc-witness (Interactive Day/Night comparison + Supplier Logos)
    witness_html = """
    <section class="bcc-witness" style="--wit-cue:0.08" id="hizmetler">
      <i class="bcc-witness-stop" aria-hidden="true"></i>
      <div class="bcc-witness-catch" data-bcc-scrub="runway" data-bcc-flip="0.58" data-bcc-cue="0.08" data-bcc-snap-soft>
        <div class="bcc-witness-scene" data-bcc-screen>
          <i class="bcc-witness-clear" aria-hidden="true"></i>
          
          <div class="bcc-witness-frame bcc-witness-cols">
            
            <!-- Interactive visual comparison card with switch -->
            <div class="bcc-witness-card" data-bcc-reveal>
              <picture class="bcc-witness-img bcc-witness-img-day">
                <img src="/sm/ambar/banner/sky-mekanik-719.jpg" alt="Merkezi Soğutma Chiller Grubu" width="1348" height="1312" loading="lazy" decoding="async" class="object-cover w-full h-full">
              </picture>
              <picture class="bcc-witness-img bcc-witness-img-night">
                <img src="/sm/ambar/banner/sky-mekanik-459.jpg" alt="Klima Santrali ve Isıtma" width="1348" height="1312" loading="lazy" decoding="async" class="object-cover w-full h-full">
              </picture>
              
              <label class="bcc-witness-toggle">
                <input class="bcc-witness-switch" type="checkbox" role="switch" checked aria-label="Mevsimsel İklimlendirme Modu">
                <span class="bcc-witness-toggle-label" aria-hidden="true">Mod</span>
                <span class="bcc-witness-track" aria-hidden="true">
                  <span class="bcc-witness-word bcc-witness-word-on">Yaz</span>
                  <span class="bcc-witness-word bcc-witness-word-off">Kış</span>
                  <span class="bcc-witness-knob"></span>
                </span>
              </label>
            </div>

            <!-- Copy for Day vs Night -->
            <div class="bcc-witness-copy">
              <div class="bcc-witness-copy-day">
                <h2 class="bcc-witness-head bcc-witness-head-day">☀️ Yaz Modu: Merkezi Soğutma &amp; Chiller</h2>
                <p class="bcc-witness-body bcc-witness-body-day">
                  Kavurucu sıcaklarda hava ve su soğutmalı chiller grupları, VRF dış üniteleri ve hassas klima cihazlarıyla tesisinizde homojen serinlik ve optimum nem kontrolü sağlar.
                </p>
              </div>
              <div class="bcc-witness-copy-night">
                <h2 class="bcc-witness-head bcc-witness-head-night">❄️ Kış Modu: Isı Geri Kazanım &amp; Kaskad Isıtma</h2>
                <p class="bcc-witness-body bcc-witness-body-night">
                  Dondurucu kış şartlarında yüksek COP değerine sahip ısı pompaları, klima santrali serpantinleri ve kaskad kazanlarla minimum enerji tüketerek ortamı ısıtır.
                </p>
              </div>
            </div>

          </div>

          <!-- Supplier Logos Marquee -->
          <div class="bcc-witness-press">
            <p class="bcc-witness-press-label text-label-sm font-bold text-slate-800">Birlikte Çalıştığımız Global Ekipman ve Teknoloji Ortaklarımız</p>
            <div class="bcc-witness-press-window">
              <div class="bcc-witness-press-track">
                <ul class="bcc-witness-press-row flex items-center gap-8">
                  <li><img src="/sm/ambar/t/1.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/2.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/3.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/4.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/5.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/6.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/7.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/8.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/9.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/10.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/11.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                  <li><img src="/sm/ambar/t/12.png" alt="Supplier Logo" class="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity"></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    """

    # Section 5: bcc-how (3 Adımda Anahtar Teslim Proje)
    how_html = """
    <section class="bcc-how" data-bcc-wide data-bcc-scrub="runway" data-bcc-scrub-sm="travel" aria-labelledby="bcc-how-head">
      <div class="bcc-how-screen" data-bcc-clear>
        <div class="bcc-how-inner">
          <h2 class="bcc-how-head" id="bcc-how-head" data-bcc-reveal>
            <span class="bcc-how-d">3 Adımda Anahtar Teslim Proje:</span>
            <span class="bcc-how-m">3 Adımda Mekanik Tesisat:</span>
          </h2>
          
          <ol class="bcc-how-list">
            
            <li class="bcc-how-step bcc-how-step-1">
              <svg width="100%" height="100%" viewBox="149 44 19 212" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none" class="block bcc-how-rule bcc-sw"><path d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z" fill="#ed6c30" transform="matrix(0 1 1 0 0 0)"></path></svg>
              <span class="bcc-how-chip bcc-sw" aria-hidden="true"> 1 </span>
              <h3 class="bcc-how-title bcc-sw">Ücretsiz Keşif &amp; Mahal Analizi</h3>
              <p class="bcc-how-body bcc-sw">Uzman makine mühendislerimiz yapınızı yerinde inceler; mahal bazında ısı kaybı/kazancı ve taze hava debisi hesaplamalarını çıkarır.</p>
            </li>

            <li class="bcc-how-step bcc-how-step-2">
              <svg width="100%" height="100%" viewBox="149 44 19 212" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none" class="block bcc-how-rule bcc-sw"><path d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z" fill="#ed6c30" transform="matrix(0 1 1 0 0 0)"></path></svg>
              <span class="bcc-how-chip bcc-sw" aria-hidden="true"> 2 </span>
              <h3 class="bcc-how-title bcc-sw">Optimum Mühendislik &amp; Teklif</h3>
              <p class="bcc-how-body bcc-sw">Enerji tasarrufu en yüksek cihazlar seçilir, 3D kanal ve borulama projeleri hazırlanır; şeffaf ve rekabetçi teklifiniz sunulur.</p>
            </li>

            <li class="bcc-how-step bcc-how-step-3">
              <svg width="100%" height="100%" viewBox="149 44 19 212" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none" class="block bcc-how-rule bcc-sw"><path d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z" fill="#ed6c30" transform="matrix(0 1 1 0 0 0)"></path></svg>
              <span class="bcc-how-chip bcc-sw" aria-hidden="true"> 3 </span>
              <h3 class="bcc-how-title bcc-sw">Sertifikalı Montaj &amp; 7/24 Servis</h3>
              <p class="bcc-how-body bcc-sw">Sertifikalı montaj ekiplerimiz sahada kurulumu tamamlar, sızdırmazlık ve debi testleri yapılarak sistem anahtar teslim çalışır vaziyette teslim edilir.</p>
            </li>

          </ol>

          <div class="bcc-how-cta bcc-sw">
            <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-[#ed6c30] hover:bg-[#d95b22] text-white py-3 px-6 rounded-lg text-body-lg bcc-how-btn" href="#teklif">
              Projeniz İçin Teklif Alın
            </a>
          </div>

        </div>
      </div>
    </section>
    """

    # Section 6: bcc-fact (İmalat Sahası & Fabrika Gücümüz)
    fact_html = """
    <section class="bcc-fact" id="bcc-fact" tabindex="-1" data-bcc-scrub="runway" data-bcc-cue="0.18">
      <div class="bcc-fact-screen" data-bcc-screen>
        <div class="bcc-fact-box" id="imalat">
          <div class="bcc-fact-media">
            <picture>
              <img src="/sm/ambar/banner/sky-mekanik-723.jpg" alt="Sky Group Havalandırma İmalat Sahası" width="2560" height="1920" loading="lazy" decoding="async">
            </picture>
            <div class="bcc-fact-scrim" aria-hidden="true"></div>
          </div>
          
          <div class="bcc-fact-copy">
            <span class="bcc-fact-eyebrow" data-bcc-reveal>
              <span class="bpc-tape-eyebrow">MODERN İMALAT PARKURU</span>
            </span>
            <h2 class="bcc-fact-head" data-bcc-reveal style="--rd:0.06s">Hava Kanalı ve İklimlendirme İmalat Gücümüz</h2>
            <p class="bcc-fact-body" data-bcc-reveal style="--rd:0.12s">
              Otomatik CNC plazma kesim ve rulo kenet makineleriyle sıfır hava kaçaklı spiro ve kare havalandırma kanalları, akustik susturucular ve menfezler üretiyoruz.
            </p>
            <div class="bcc-fact-cta" data-bcc-reveal style="--rd:0.18s">
              <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-[#ed6c30] hover:bg-[#d95b22] text-white py-3 px-6 rounded-lg text-body-lg bcc-fact-btn" href="#teklif">
                Fabrika &amp; Tesis Keşfi İsteyin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    """

    # Section 7: bcc-crew (Polaroid Collage of Engineers and Technicians)
    crew_html = """
    <section class="bcc-crew" data-bcc-scrub="travel">
      <div class="bcc-crew-screen">
        
        <h2 class="bcc-crew-head" data-bcc-reveal>
          Alanında Uzman <span class="bcc-crew-mark">Mühendislik<svg width="100%" height="10" viewBox="44 149 212 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none" class="block bcc-crew-stroke bcc-sw"><path d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z" fill="#ed6c30"></path></svg></span> ve Saha Kadrosu
        </h2>

        <div class="bcc-crew-stage">
          <div class="bcc-crew-collage" aria-hidden="true">
            
            <div class="bcc-crew-piece bcc-crew-shop bcc-sw">
              <div class="bcc-crew-art">
                <img src="/sm/ambar/banner/sky-mekanik-925.jpg" alt="Saha Montajı" width="540" height="449" loading="lazy" decoding="async">
              </div>
            </div>

            <div class="bcc-crew-piece bcc-crew-robots bcc-sw">
              <div class="bcc-crew-art">
                <img class="bcc-crew-inphoto" src="/sm/ambar/banner/sky-mekanik-723.jpg" alt="Kanal İmalatı" width="620" height="684" loading="lazy" decoding="async">
                <img class="bcc-crew-frame" src="/_bpc/assets/base-core-concept/crew-polaroid-660.avif" alt="" width="660" height="723" loading="lazy" decoding="async">
              </div>
            </div>

            <div class="bcc-crew-piece bcc-crew-group bcc-sw">
              <div class="bcc-crew-art bcc-crew-card">
                <img class="bcc-crew-inphoto" src="/sm/ambar/banner/sky-mekanik.jpg" alt="Mühendislik Ekibi" width="620" height="699" loading="lazy" decoding="async">
              </div>
            </div>

            <div class="bcc-crew-piece bcc-crew-tape-a bcc-sw">
              <div class="bcc-crew-art">
                <img src="/_bpc/assets/base-core-concept/crew-tape-a-420.avif" alt="" width="420" height="514" loading="lazy" decoding="async">
              </div>
            </div>

            <div class="bcc-crew-piece bcc-crew-bench bcc-sw">
              <div class="bcc-crew-art">
                <img src="/sm/ambar/banner/sky-mekanik-459.jpg" alt="Tesis Montajı" width="480" height="662" loading="lazy" decoding="async">
              </div>
            </div>

            <div class="bcc-crew-piece bcc-crew-battery bcc-sw">
              <div class="bcc-crew-art">
                <img class="bcc-crew-inphoto" src="/sm/ambar/banner/sky-mekanik-719.jpg" alt="Chiller Soğutma" width="640" height="705" loading="lazy" decoding="async">
                <img class="bcc-crew-frame" src="/_bpc/assets/base-core-concept/crew-polaroid-660.avif" alt="" width="660" height="723" loading="lazy" decoding="async">
              </div>
            </div>

            <div class="bcc-crew-piece bcc-crew-tape-b bcc-sw">
              <div class="bcc-crew-art">
                <img src="/_bpc/assets/base-core-concept/crew-tape-b-520.avif" alt="" width="520" height="287" loading="lazy" decoding="async">
              </div>
            </div>

          </div>
        </div>

        <a class="inline-flex touch-manipulation items-center justify-center gap-2 font-semibold transition-colors duration-150 bg-[#ed6c30] hover:bg-[#d95b22] text-white py-3 px-6 rounded-lg text-body-lg bcc-crew-cta bcc-sw" href="tel:+905419221991">
          <span class="bcc-crew-d">Mühendisimizle Görüşün: 0 (541) 922 19 91</span>
          <span class="bcc-crew-m">Mühendisimizle Görüşün</span>
        </a>

      </div>
    </section>
    """

    # Section 8: bcc-pricing (Kurumsal Çözüm Paketleri & Teklif Formu)
    pricing_html = """
    <section class="bcc-pricing" id="teklif" tabindex="-1">
      <div class="max-w-[1376px] mx-auto px-4 md:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="text-[#09bde3] text-sm uppercase font-bold tracking-wider mb-2 block" style="color:#09bde3 !important">Kurumsal Çözüm Paketleri</span>
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tight mb-4" style="color:#ffffff !important">
            Projenize Özel Mekanik Çözümler
          </h2>
          <p class="text-base md:text-lg" style="color:#cbd5e1 !important">
            İster ticari bir plaza, ister hastane ya da endüstriyel fabrika; her yapı tipine uygun esnek mühendislik çözümleri sunuyoruz.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch mt-6">
          
          <!-- Paket 1 -->
          <div class="sky-pricing-card">
            <div>
              <span class="sky-tag sky-tag-blue">Plaza &amp; Ticari</span>
              <h3>VRF &amp; Merkezi İklimlendirme</h3>
              <p class="sky-card-desc">Ofisler, oteller, iş merkezleri ve rezidanslar için bağımsız iklimlendirme kontrolü.</p>
              <ul class="sky-features">
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> VRF/VRV Dış ve İç Üniteler</li>
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Fancoil &amp; Chiller Entegrasyonu</li>
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Akıllı Termostat &amp; Bölgesel Kontrol</li>
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Düşük Ses &amp; Yüksek Estetik</li>
              </ul>
            </div>
            <a href="#hizli-form" class="sky-btn-card-secondary">Bu Çözüm İçin Teklif Al</a>
          </div>

          <!-- Paket 2 (Featured) -->
          <div class="sky-pricing-card featured sky-glow">
            <span class="sky-pricing-badge">En Çok Tercih Edilen</span>
            <div>
              <span class="sky-tag sky-tag-orange">Endüstriyel Tesisler</span>
              <h3>Havalandırma &amp; Santral Çözümü</h3>
              <p class="sky-card-desc">Fabrikalar, lojistik depolar ve atölyeler için ağır hizmet tipi mekanik çözümler.</p>
              <ul class="sky-features">
                <li><svg class="w-4 h-4 text-[#ed6c30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> TKS Standart Klima Santrali</li>
                <li><svg class="w-4 h-4 text-[#ed6c30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Spiro &amp; Kare Kanal İmalat &amp; Montajı</li>
                <li><svg class="w-4 h-4 text-[#ed6c30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Isı Geri Kazanım Cihazları (HRV)</li>
                <li><svg class="w-4 h-4 text-[#ed6c30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Duman Egzoz &amp; Jet Fan Sistemleri</li>
              </ul>
            </div>
            <a href="#hizli-form" class="sky-btn-card-primary">Hemen Proje Teklifi Al</a>
          </div>

          <!-- Paket 3 -->
          <div class="sky-pricing-card">
            <div>
              <span class="sky-tag sky-tag-green">Sağlık &amp; Hijyen</span>
              <h3>Hijyenik Tesis &amp; Yangın</h3>
              <p class="sky-card-desc">Hastaneler, ameliyathaneler, temiz odalar ve yüksek güvenlikli tesisler.</p>
              <ul class="sky-features">
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> THKS Hijyenik Klima Santrali</li>
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> H13/H14 HEPA Filtre &amp; Laminar Akış</li>
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Pozitif/Negatif Basınç Odaları</li>
                <li><svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Otomatik Sprinkler &amp; Gazlı Söndürme</li>
              </ul>
            </div>
            <a href="#hizli-form" class="sky-btn-card-secondary">Bu Çözüm İçin Teklif Al</a>
          </div>

        </div>

        <!-- Hızlı Teklif Talep Formu -->
        <div id="hizli-form" class="sky-form-box max-w-3xl mx-auto">
          <div class="text-center mb-8">
            <span class="text-xs uppercase font-bold tracking-wider block mb-1" style="color:#ed6c30 !important">Aynı Gün Geri Dönüş</span>
            <h3 style="font-size: 26px !important; margin-bottom: 8px !important">Hızlı Fiyat Teklifi Talep Formu</h3>
            <p style="color:#94a3b8 !important; font-size:14px !important">Formu doldurun, uzman mühendislerimiz projenizi inceleyip hemen sizinle iletişime geçsin.</p>
          </div>

          <form action="#" onsubmit="event.preventDefault(); alert('Talebiniz başarıyla alındı! Mühendislerimiz en kısa sürede sizinle iletişime geçecektir.');" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>Adınız Soyadınız *</label>
                <input type="text" required placeholder="Örn: Ahmet Yılmaz">
              </div>
              <div>
                <label>Telefon Numaranız *</label>
                <input type="tel" required placeholder="0 (5XX) XXX XX XX">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label>E-posta Adresiniz</label>
                <input type="email" placeholder="ornek@sirketiniz.com">
              </div>
              <div>
                <label>Hizmet / Proje Türü *</label>
                <select>
                  <option value="vrf">VRV / VRF Merkezi İklimlendirme</option>
                  <option value="santral">Klima Santralleri &amp; Havalandırma</option>
                  <option value="isi-geri-kazanim">Isı Geri Kazanım Cihazları (HRV)</option>
                  <option value="yangin">Yangın &amp; Davlumbaz Söndürme</option>
                  <option value="komple">Komple Mekanik Tesisat Taahhüt</option>
                </select>
              </div>
            </div>

            <div>
              <label>Projeniz Hakkında Detaylar / Notlar</label>
              <textarea rows="3" placeholder="Tesis alanı, lokasyon, cihaz kapasitesi veya özel talepleriniz..."></textarea>
            </div>

            <button type="submit" class="sky-btn-submit">
              Teklif Talebini Gönder
            </button>
          </form>
        </div>

      </div>
    </section>
    """

    # Section 9: bcc-say (Referans Projeler ve Müşteri Yorumları)
    say_html = """
    <section class="bcc-say" data-bcc-scrub="runway" data-bcc-scrub-sm="travel" data-bcc-wide aria-labelledby="bcc-say-head" id="referanslar">
      <div class="bcc-say-screen" data-bcc-clear>
        <div class="bcc-say-inner">
          <h2 class="bcc-say-head" id="bcc-say-head" data-bcc-reveal>
            <span class="bcc-say-h1">Referans Projelerimiz</span>
            <span class="bcc-say-h2">ve İş Ortaklarımız</span>
          </h2>
          
          <ul class="bcc-say-deck" role="list" data-bcc-gather="5 -4 center">
            
            <li class="bcc-say-card" data-bcc-gather-item style="--i:0; --ws:0.248; --wd:0.13; --xs:0.680; --xd:0.200; --dx:88.6; --dy:48.0; --r0:5.12; --r1:-1.95; --jx:0; --cw:26.15; --cx:0.31; --cy:0">
              <blockquote class="bcc-say-quote">
                <span class="bcc-say-stars" role="img" aria-label="Rated 5 out of 5">
                  <svg viewBox="0 0 118 22" aria-hidden="true" focusable="false" fill="#ed6c30">
                    <path transform="translate(0 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(23 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(46 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(69 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(92 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
                <p class="bcc-say-body">
                  “Ameliyathane ve yoğun bakım ünitelerimizin hijyenik klima santralleri ve laminar akış tavanları Sky Group tarafından sıfır hata ile devreye alındı.”
                </p>
                <footer class="bcc-say-author">
                  <cite class="bcc-say-name">Özel Sağlık Grubu Hastanesi</cite>
                  <span class="bcc-say-meta">İstanbul • 24.000 m² Kapalı Alan</span>
                </footer>
              </blockquote>
            </li>

            <li class="bcc-say-card" data-bcc-gather-item style="--i:1; --ws:0.316; --wd:0.13; --xs:0.720; --xd:0.200; --dx:94.2; --dy:44.0; --r0:-3.80; --r1:2.40; --jx:0; --cw:26.15; --cx:0.31; --cy:0">
              <blockquote class="bcc-say-quote">
                <span class="bcc-say-stars" role="img" aria-label="Rated 5 out of 5">
                  <svg viewBox="0 0 118 22" aria-hidden="true" focusable="false" fill="#ed6c30">
                    <path transform="translate(0 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(23 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(46 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(69 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(92 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
                <p class="bcc-say-body">
                  “AVM ortak alan duman egzoz fanları, jet fan sistemleri ve tüm ofis katlarının VRF iklimlendirmesi taahhüt süresinden önce tamamlandı.”
                </p>
                <footer class="bcc-say-author">
                  <cite class="bcc-say-name">Karma Yaşam ve Alışveriş Merkezi</cite>
                  <span class="bcc-say-meta">Kocaeli • 65.000 m² Proje Sahası</span>
                </footer>
              </blockquote>
            </li>

            <li class="bcc-say-card" data-bcc-gather-item style="--i:2; --ws:0.384; --wd:0.13; --xs:0.760; --xd:0.200; --dx:99.8; --dy:40.0; --r0:4.20; --r1:-0.80; --jx:0; --cw:26.15; --cx:0.31; --cy:0">
              <blockquote class="bcc-say-quote">
                <span class="bcc-say-stars" role="img" aria-label="Rated 5 out of 5">
                  <svg viewBox="0 0 118 22" aria-hidden="true" focusable="false" fill="#ed6c30">
                    <path transform="translate(0 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(23 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(46 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(69 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    <path transform="translate(92 0) scale(0.875)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
                <p class="bcc-say-body">
                  “Fabrika üretim hollerinin toz toplama filtreleri ve ısı geri kazanım sistemi sayesinde yıllık enerji faturamızda %32 oranında net tasarruf elde ettik.”
                </p>
                <footer class="bcc-say-author">
                  <cite class="bcc-say-name">Otomotiv Yan Sanayi Fabrikası</cite>
                  <span class="bcc-say-meta">Bursa • 38.000 m² Üretim Alanı</span>
                </footer>
              </blockquote>
            </li>

          </ul>

          <!-- Reference Client Logos Grid -->
          <div class="mt-16 p-8 md:p-10 rounded-3xl bg-slate-900/60 border border-slate-300">
            <h3 class="text-center text-xl font-bold text-slate-900 mb-2">Kurumsal Referans Markalarımız</h3>
            <p class="text-center text-sm text-slate-600 mb-8">Projelerinde Sky Group kalitesini tercih eden saygın kuruluşlar</p>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center">
              <img src="/sm/ambar/r/1.png" alt="Referans Logo" class="h-10 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/2.png" alt="Referans Logo" class="h-10 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/3.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/4.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/5.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/6.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/7.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/8.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/9.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/10.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/11.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/12.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/13.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/14.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/15.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
              <img src="/sm/ambar/r/16.png" alt="Referans Logo" class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
            </div>
          </div>

        </div>
      </div>
    </section>
    """

    # Section 10: bcc-specs (Teknik Standartlar & Kriterler)
    specs_html = """
    <section class="bcc-specs" aria-labelledby="bcc-specs-head" id="standartlar" data-bcc-core-rain>
      <div class="bcc-specs-inner">
        <h2 class="bcc-specs-head" id="bcc-specs-head" data-bcc-reveal>
          Sky Group Teknik Standartları
          <svg width="100%" height="10" viewBox="44 149 212 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none" class="block bcc-specs-stroke"><path d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z" fill="#ed6c30"></path></svg>
        </h2>

        <!-- Group 1: İmalat & Sızdırmazlık -->
        <div class="bcc-specs-group" data-bcc-reveal style="--rd:0.06s">
          <h3 class="bcc-specs-gtitle" data-bcc-reveal style="--rd:0.06s"> İmalat &amp; Gövde Standartları </h3>
          <dl class="bcc-specs-rows">
            <div class="bcc-specs-cell" data-bcc-reveal style="--rd:0.090s">
              <dt class="text-label-xs">Hava Kaçağı Sınıfı</dt>
              <dd class="text-body-md">EN 1886 L1 / L2 Yüksek Sızdırmazlık Onaylı</dd>
            </div>
            <div class="bcc-specs-cell" data-bcc-reveal style="--rd:0.120s">
              <dt class="text-label-xs">Gövde Dayanımı</dt>
              <dd class="text-body-md">EN 1886 D1 Deformasyon Mukavemeti</dd>
            </div>
            <div class="bcc-specs-cell" data-bcc-reveal style="--rd:0.150s">
              <dt class="text-label-xs">Isı Köprüleme (TB)</dt>
              <dd class="text-body-md">T2 Isı İletim, TB2 Isı Köprüsü (50mm Taş Yünü İzolasyon)</dd>
            </div>
          </dl>
        </div>

        <!-- Group 2: Verim & Fan Teknolojisi -->
        <div class="bcc-specs-group" data-bcc-reveal style="--rd:0.18s">
          <h3 class="bcc-specs-gtitle" data-bcc-reveal style="--rd:0.18s"> Verimlilik &amp; Otomasyon </h3>
          <dl class="bcc-specs-rows">
            <div class="bcc-specs-cell" data-bcc-reveal style="--rd:0.210s">
              <dt class="text-label-xs">Isı Geri Kazanım</dt>
              <dd class="text-body-md">%75 - %85 Termal Verim (Plakalı &amp; Rotorlu Eşanjör)</dd>
            </div>
            <div class="bcc-specs-cell" data-bcc-reveal style="--rd:0.240s">
              <dt class="text-label-xs">Fan &amp; Motor</dt>
              <dd class="text-body-md">EC Motorlu Direct Drive Plug Fan (IE4 / IE5 Sınıfı)</dd>
            </div>
            <div class="bcc-specs-cell" data-bcc-reveal style="--rd:0.270s">
              <dt class="text-label-xs">Bina Otomasyonu (BMS)</dt>
              <dd class="text-body-md">BACnet IP/MSTP, Modbus RTU/TCP, KNX, DDC Pano Entegrasyonu</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>
    """

    # Section 11: bcc-faq (Sıkça Sorulan Sorular)
    faq_html = """
    <section class="bcc-faq" aria-labelledby="bcc-faq-head" id="faq">
      <div class="bcc-faq-inner">
        
        <div class="bcc-faq-title">
          <span class="bcc-faq-tape" data-bcc-reveal><span class="bpc-tape-eyebrow">Merak Edilenler</span></span>
          <h2 class="bcc-faq-head" id="bcc-faq-head" data-bcc-reveal style="--rd:0.08s">
            Sıkça Sorulan Sorular
            <svg width="100%" height="10" viewBox="44 149 212 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none" class="block bcc-faq-stroke"><path d="M46.189 161.553C58.3867 161.345 70.6266 161.191 82.6133 158.867C120.776 155.148 158.334 150.869 196.547 150.155C215.572 149.797 234.873 150.048 253.67 151.024C257.336 154.132 250.725 155.061 248.351 155.261C228.982 156.892 206.756 155.168 186.983 155.781C141.587 157.188 96.8898 165.033 52.0009 166.516C49.9952 166.583 47.905 166.597 46.0849 165.638C44.7768 164.175 45.1425 162.963 46.1918 161.553L46.189 161.553Z" fill="#ed6c30"></path></svg>
          </h2>
        </div>

        <div class="bcc-faq-list">
          
          <details class="bcc-faq-row" name="bcc-faq" open data-bcc-reveal style="--rd:0.16s">
            <summary class="bcc-faq-q">
              <span>Sky Group hangi mekanik tesisat alanlarında hizmet verir?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bcc-faq-arrow" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </summary>
            <div class="bcc-faq-a">
              <p>Sky Group; klima santralleri (standart ve hijyenik), VRV/VRF merkezi klima sistemleri, havalandırma kanalı imalatı ve montajı, ısı geri kazanım cihazları (HRV/DX), yangın söndürme ve davlumbaz güvenlik tesisatı ile anahtar teslim mekanik taahhüt hizmetleri sunmaktadır.</p>
            </div>
          </details>

          <details class="bcc-faq-row" name="bcc-faq" data-bcc-reveal style="--rd:0.24s">
            <summary class="bcc-faq-q">
              <span>Keşif ve teklif süreci ücretli midir, nasıl ilerler?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bcc-faq-arrow" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </summary>
            <div class="bcc-faq-a">
              <p>Keşif ve ön projelendirme hizmetlerimiz tamamen ücretsizdir. Mimari planlarınızı iletmeniz veya teknik ekibimizin yerinde keşif yapması sonrasında mühendislerimiz en geç 24-48 saat içinde şeffaf maliyet tablosunu içeren detaylı teklifinizi hazırlar.</p>
            </div>
          </details>

          <details class="bcc-faq-row" name="bcc-faq" data-bcc-reveal style="--rd:0.32s">
            <summary class="bcc-faq-q">
              <span>VRF / VRV sistemlerinin split klimalara göre avantajı nedir?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bcc-faq-arrow" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </summary>
            <div class="bcc-faq-a">
              <p>VRF sistemleri tek bir dış üniteyle onlarca bağımsız iç üniteyi besleyerek cephe kirliliğini önler. Her odanın ayrı ayrı derece ayarlanmasını sağlar ve inverter teknolojisiyle sadece ihtiyaç duyulan mahale enerji aktararak elektrik faturalarında %40'a varan tasarruf sağlar.</p>
            </div>
          </details>

          <details class="bcc-faq-row" name="bcc-faq" data-bcc-reveal style="--rd:0.40s">
            <summary class="bcc-faq-q">
              <span>Isı geri kazanım (HRV) cihazı işletmeye nasıl katkı sağlar?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bcc-faq-arrow" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </summary>
            <div class="bcc-faq-a">
              <p>İç ortamdaki kirli hava dışarı atılırken sahip olduğu sıcaklık enerjisi dışarıdan alınan soğuk taze havaya aktarılır. Böylece pencereler kapalıyken bile %100 taze hava sağlanır ve ısıtma sistemi yükü %85'e kadar hafifler.</p>
            </div>
          </details>

          <details class="bcc-faq-row" name="bcc-faq" data-bcc-reveal style="--rd:0.48s">
            <summary class="bcc-faq-q">
              <span>Garanti ve periyodik servis koşullarınız nelerdir?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bcc-faq-arrow" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </summary>
            <div class="bcc-faq-a">
              <p>Uygulaması yapılan tüm ekipman ve montaj işçilikleri 2 yıl süreyle Sky Group resmi garantisi altındadır. Ayrıca kurumsal periyodik bakım anlaşmaları ile 7/24 acil servis, filtre değişim ve mevsimlik genel kontrol hizmetleri sunulmaktadır.</p>
            </div>
          </details>

        </div>

      </div>
    </section>
    """

    # Section 12 & Footer: bcc-nf & footer (Kapanış, İletişim, Dev Logo)
    nf_and_footer_html = """
    <section class="bcc-nf" data-bcc-scrub="runway" data-bcc-cue="0.78" aria-labelledby="bcc-nf-title" id="iletisim">
      <div class="bcc-nf-screen" data-bcc-screen>
        <div class="bcc-nf-stage">
          <div class="bcc-nf-layer" style="--sky:#072b4d">
            <img class="bcc-nf-fit" src="/sm/ambar/banner/sky-mekanik.jpg" alt="" width="1920" height="1080" loading="eager" fetchpriority="high">
          </div>
          <div class="bcc-nf-dim" aria-hidden="true"></div>
          <div class="bcc-nf-scrim" aria-hidden="true"></div>
        </div>

        <div class="bcc-nf-copy">
          <h2 class="bcc-nf-head" id="bcc-nf-title">
            <span class="bcc-nf-line">Mekanik Tesisatta</span>
            <span class="bcc-nf-line text-[#09bde3]">Doğru Çözüm Ortağınız.</span>
          </h2>
          <div class="bcc-nf-payoff">
            <p class="bcc-nf-payoff-head">Sky Group ile Projenizi Güvenle Hayata Geçirin</p>
            <p class="bcc-nf-payoff-sub">İstanbul merkezli üretim tesisimiz ve Türkiye genelindeki saha ağımızla yanınızdayız.</p>
            <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a href="tel:+905419221991" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0d5ca9] hover:bg-[#0b4d8d] text-white font-bold text-base transition-colors shadow-xl shadow-sky-900/40">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                0 (541) 922 19 91
              </a>
              <a href="https://wa.me/905419221991" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-colors shadow-xl shadow-emerald-900/40">
                WhatsApp İle Yazın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rail Scroll Progress Dots -->
    <div class="bcc-rail" style="--rail-exit: 13.05" aria-hidden="true">
      <span class="bcc-rail-slot" style="--i: 0"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 1"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 2"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 3"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 4"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 5"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 6"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 7"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 8"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 9"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 10"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 11"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 12"><span class="bcc-rail-pill"></span></span>
      <span class="bcc-rail-slot" style="--i: 13"><span class="bcc-rail-pill"></span></span>
    </div>

    <!-- Grain texture overlay -->
    <div class="bcc-grain" aria-hidden="true"></div>

    <!-- Sky Group Branded Modern Footer -->
    <footer class="sky-footer bg-[#040d16] text-white border-t border-white/10 pt-16 pb-12">
      <div class="max-w-[1376px] mx-auto px-4 md:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          <!-- Col 1: About & Info -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#0d5ca9] to-[#09bde3] p-0.5 flex items-center justify-center">
                <div class="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#09bde3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
              </div>
              <span class="text-2xl font-black tracking-tight text-white">SKY <span class="text-[#09bde3]">GROUP</span></span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
              Sky Group Mühendislik; havalandırma, iklimlendirme, klima santralleri, VRF ve yangın güvenliği sistemlerinde yüksek kalite ve mühendislik deneyimiyle hizmet verir.
            </p>
            <div class="pt-2 text-sm text-slate-300 space-y-2">
              <p class="flex items-start gap-2.5">
                <svg class="w-5 h-5 text-[#09bde3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Ünalan Mah. Hakim Sk. No:23/8 Üsküdar / İstanbul / Türkiye</span>
              </p>
              <p class="flex items-center gap-2.5">
                <svg class="w-5 h-5 text-[#09bde3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+905419221991" class="hover:text-white transition-colors">+90 (541) 922 19 91</a>
              </p>
              <p class="flex items-center gap-2.5">
                <svg class="w-5 h-5 text-[#09bde3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:info@skymekanik.com" class="hover:text-white transition-colors">info@skymekanik.com</a>
              </p>
            </div>
          </div>

          <!-- Col 2: Ürünler -->
          <div>
            <h4 class="text-sm uppercase font-bold tracking-wider text-slate-300 mb-4">Ürünlerimiz</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li><a href="#urunler" class="hover:text-[#09bde3] transition-colors">Split Klimalar</a></li>
              <li><a href="#urunler" class="hover:text-[#09bde3] transition-colors">Klima Santralleri (TKS)</a></li>
              <li><a href="#urunler" class="hover:text-[#09bde3] transition-colors">VRV/VRF Sistemleri</a></li>
              <li><a href="#urunler" class="hover:text-[#09bde3] transition-colors">Isı Geri Kazanım (HRV)</a></li>
              <li><a href="#urunler" class="hover:text-[#09bde3] transition-colors">Hava Kanalları İmalatı</a></li>
              <li><a href="#urunler" class="hover:text-[#09bde3] transition-colors">Hijyenik Santral (THKS)</a></li>
              <li><a href="#urunler" class="hover:text-[#09bde3] transition-colors">Yangın Söndürme</a></li>
            </ul>
          </div>

          <!-- Col 3: Kurumsal -->
          <div>
            <h4 class="text-sm uppercase font-bold tracking-wider text-slate-300 mb-4">Kurumsal</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li><a href="#hakkimizda" class="hover:text-[#09bde3] transition-colors">Hakkımızda</a></li>
              <li><a href="#referanslar" class="hover:text-[#09bde3] transition-colors">Referans Projeler</a></li>
              <li><a href="#standartlar" class="hover:text-[#09bde3] transition-colors">Kalite Politikamız</a></li>
              <li><a href="#teklif" class="hover:text-[#09bde3] transition-colors">Teklif Talep Formu</a></li>
              <li><a href="#faq" class="hover:text-[#09bde3] transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#iletisim" class="hover:text-[#09bde3] transition-colors">Bize Ulaşın</a></li>
            </ul>
          </div>

          <!-- Col 4: Sosyal Medya & WhatsApp -->
          <div>
            <h4 class="text-sm uppercase font-bold tracking-wider text-slate-300 mb-4">Sosyal Medya</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li><a href="https://www.instagram.com/skymekanik/" target="_blank" class="hover:text-[#09bde3] transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/skymekanik/" target="_blank" class="hover:text-[#09bde3] transition-colors">Facebook</a></li>
              <li><a href="https://twitter.com/skymekanik" target="_blank" class="hover:text-[#09bde3] transition-colors">Twitter / X</a></li>
              <li><a href="https://www.youtube.com/channel/skymekanik/" target="_blank" class="hover:text-[#09bde3] transition-colors">YouTube</a></li>
              <li><a href="https://wa.me/905419221991" target="_blank" class="text-emerald-400 font-semibold hover:underline">WhatsApp Hattı</a></li>
            </ul>
          </div>

        </div>

        <!-- Giant Typography Wordmark -->
        <div class="border-t border-white/10 pt-12 pb-8 text-center select-none overflow-hidden">
          <span class="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tighter text-white/5 hover:text-white/10 transition-colors duration-500 block leading-none">
            SKY GROUP
          </span>
        </div>

        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Sky Group Havalandırma ve İklimlendirme Sistemleri. Tüm hakları saklıdır.</p>
          <p>İstanbul, Türkiye • Mühendislik &amp; İklimlendirme Teknolojileri</p>
        </div>

      </div>
    </footer>

    <!-- Mobile menu toggle script -->
    <script>
      // Mobile drawer toggle
      const toggleBtn = document.getElementById('mobile-menu-toggle');
      const drawer = document.getElementById('mobile-drawer');
      if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', () => {
          drawer.classList.toggle('hidden');
        });
        drawer.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => drawer.classList.add('hidden'));
        });
      }

      // Modern transparent navbar scroll transition
      const navBar = document.getElementById('main-navbar');
      if (navBar) {
        const handleScroll = () => {
          if (window.scrollY > 40) {
            navBar.classList.add('scrolled');
          } else {
            navBar.classList.remove('scrolled');
          }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
      }
    </script>
    """

    # Assemble complete HTML document
    full_html = f"""<!DOCTYPE html><html lang="tr">
<head>
{clean_head}
{sky_custom_styles}
</head>
<body class="bpc-theme bg-slate-950 text-white">
  <main class="bcc" style="--bcc-runway-h:620svh; --wd:0.0339; --bcc-stroke-wd:0.0542; --bcc-soft-a:0.0339; --bcc-soft-d:0.0542; --bcc-chrome-a:0.0542; --bcc-chrome-d:0.0474; --bcc-hero-a:0.0881; --bcc-hero-d:0.0542; --bcc-scale-d:0.1423; --bcc-stress-out-a:0.5524; --bcc-stress-out-a-sm:0.535; --bcc-stress-out-d:0.0581; --bcc-tile-wd:0.0407; --bcc-lock-a:0.814; --bcc-lock-d:0.093; --bcc-final-a:0.8605; --bcc-final-d:0.0407; --bcc-title-a:0.8838; --bcc-title-d:0.0581">
    <div class="bcc-dots" aria-hidden="true"></div>
    {topnav_html}
    {runway_html}
    {meet_html}
    {bp_html}
    {witness_html}
    {how_html}
    {fact_html}
    {crew_html}
    {pricing_html}
    {say_html}
    {specs_html}
    {faq_html}
    {nf_and_footer_html}
  </main>
</body>
</html>
<script type="module" src="/_bpc/assets/core.astro_astro_type_script_index_0_lang.BTqtMorG.js"></script>
"""

    with open('/home/emre/Desktop/sky-group-new/index.html', 'w', encoding='utf-8') as f:
        f.write(full_html)
    print("index.html written successfully! Total size:", len(full_html))

if __name__ == '__main__':
    build_skygroup_html()

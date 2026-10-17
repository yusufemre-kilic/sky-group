import os
import re
import svg_plates

def build_faithful_site():
    bak_path = '/home/emre/Desktop/sky-group-new/index.html.bak'
    out_path = '/home/emre/Desktop/sky-group-new/index.html'

    with open(bak_path, 'r', encoding='utf-8') as f:
        html = f.read()

    print(f"Loaded original index.html.bak: {len(html)} bytes")

    # 1. REMOVE CLIENT HYDRATION ATTRIBUTES FROM ASTRO ISLANDS
    # Keeps SSR markup intact while preventing React bundles from hydrating and overwriting translated content
    html = re.sub(r'(<astro-island\b[^>]*?)\s+client=\"(?:load|visible|idle)\"', r'\1', html)

    # 2. PROTECT ALL SCRIPT AND STYLE TAGS WITH PLACEHOLDERS
    scripts = []
    def save_script(match):
        idx = len(scripts)
        scripts.append(match.group(0))
        return f"<!-- __SCRIPT_PLACEHOLDER_{idx}__ -->"

    html = re.sub(r'<script\b[^>]*>[\s\S]*?</script>', save_script, html)

    styles = []
    def save_style(match):
        idx = len(styles)
        styles.append(match.group(0))
        return f"<!-- __STYLE_PLACEHOLDER_{idx}__ -->"

    html = re.sub(r'<style\b[^>]*>[\s\S]*?</style>', save_style, html)

    # 3. HEAD METADATA & TITLE
    import base64
    fav_32_path = '/home/emre/Desktop/sky-group-new/public/favicon-32x32.png'
    fav_16_path = '/home/emre/Desktop/sky-group-new/public/favicon-16x16.png'
    with open(fav_32_path, 'rb') as f:
        fav_32_b64 = base64.b64encode(f.read()).decode('ascii')
    with open(fav_16_path, 'rb') as f:
        fav_16_b64 = base64.b64encode(f.read()).decode('ascii')

    sky_meta_block = f"""<title>Sky Group | Endüstriyel Havalandırma &amp; İklimlendirme Sistemleri</title>
<meta name="description" content="Sky Group; endüstriyel havalandırma sistemleri, klima santralleri, VRF iklimlendirme, hava kanalı imalatı ve yangın duman tahliye projelerinde yüksek mühendislik güvencesi sunar.">
<link rel="canonical" href="https://skymekanik.com">
<link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,{fav_32_b64}">
<link rel="icon" type="image/png" sizes="16x16" href="data:image/png;base64,{fav_16_b64}">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=20261016">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=20261016">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=20261016">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=20261016">
<meta name="theme-color" content="#061527">
<meta property="og:type" content="website">
<meta property="og:title" content="Sky Group | Endüstriyel Havalandırma &amp; İklimlendirme Sistemleri">
<meta property="og:description" content="Endüstriyel tesisler ve modern yapılar için yüksek verimli mekanik tesisat ve iklimlendirme çözümleri.">
<meta property="og:url" content="https://skymekanik.com">
<meta property="og:site_name" content="Sky Group">
<meta property="og:locale" content="tr_TR">
<meta property="og:image" content="/sm/ambar/banner/sky-mekanik-459.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Sky Group Endüstriyel Havalandırma ve İklimlendirme Sistemleri">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sky Group | Endüstriyel Havalandırma &amp; İklimlendirme Sistemleri">
<meta name="twitter:description" content="Endüstriyel tesisler ve modern yapılar için yüksek verimli mekanik tesisat ve iklimlendirme çözümleri.">
<meta name="twitter:image" content="/sm/ambar/banner/sky-mekanik-459.jpg">
<meta name="twitter:image:alt" content="Sky Group Endüstriyel Havalandırma ve İklimlendirme Sistemleri">"""

    # Replace old Base Power meta block in <head>
    html = re.sub(
        r'<title>.*?</title>[\s\S]*?<meta name=\"twitter:image:alt\"[^>]*>',
        sky_meta_block,
        html,
        count=1
    )
    
    custom_head_styles = """
    <style>
      :root, html, body {
        --sky-blue: #0d5ca9;
        --sky-cyan: #09bde3;
        --sky-blue-hover: #0284c7;
        --sky-navy-deep: #061527;
        --sky-navy-dark: #040e1a;
        --sky-ice-light: #e0f2fe;

        /* Override all Base Power green variables with Sky Group blues */
        --color-green-100: #040e1a;
        --color-green-90: #061527;
        --color-green-60: #0284c7;
        --color-green-20: #09bde3;
        --color-green-5: #e0f2fe;

        --bpc-color-green-90: #061527;
        --bpc-color-green-20: #09bde3;
        --bpc-color-grounded: #061527;
        --bpc-color-livewire: #09bde3;

        --color-brand-primary: #09bde3;
        --color-brand-primary-foreground: #061527;
        --color-brand-primary-hover: #0284c7;
        --color-brand-primary-subtle: #e0f2fe;
        --color-brand-primary-active: #040e1a;

        --bpc-color-brand-primary: #09bde3;
        --bpc-color-brand-primary-foreground: #061527;
        --bpc-color-brand-primary-hover: #0284c7;
        --bpc-color-brand-primary-subtle: #e0f2fe;
        --bpc-color-brand-primary-active: #040e1a;

        --color-text-brand: #061527;
        --color-text-link: #0284c7;
        --color-surface-dark: #061527;
        --color-timeline-active: #0284c7;
        --bcc-night-dot: color-mix(in srgb, var(--color-white) 6%, #061527);
      }

      /* Mobile Sizing & Overflow Fix for Galaxy S10, S10+, S25 */
      html, body {
        overflow-x: clip !important;
        max-width: 100vw !important;
        width: 100% !important;
        position: relative !important;
      }
      .bcc,
      .bcc-runway,
      .bcc-hero,
      .bcc-meet,
      .bcc-bp,
      .bcc-witness,
      .bcc-witness-scene,
      .bcc-witness-frame,
      .bcc-witness-press,
      .bcc-witness-press-window,
      .bcc-say,
      .bcc-specs,
      footer {
        max-width: 100vw !important;
        overflow-x: clip !important;
        box-sizing: border-box !important;
      }
      .bcc-witness-press-window {
        overflow: hidden !important;
        contain: paint layout !important;
      }
      @media (max-width: 767.9px) {
        .bcc-meet-mark {
          max-width: calc(100vw - 32px) !important;
          white-space: normal !important;
          word-break: break-word !important;
        }
        .bcc-meet-mark img {
          display: inline-block !important;
          vertical-align: middle !important;
          max-height: 1.4em !important;
          width: auto !important;
        }
        .bcc-witness-frame {
          padding-inline: 16px !important;
        }
        .bcc-witness-press {
          padding-inline: 12px !important;
          overflow: hidden !important;
        }
      }

      /* Image quality enhancements */
      img, picture, picture source, video {
        image-rendering: -webkit-optimize-contrast !important;
        image-rendering: high-quality !important;
      }

      /* Always transparent modern glassmorphism navbar floating over hero photo */
      .bcc-topnav,
      .bcc-x .bcc-topnav,
      .bcc-x:not([data-bcc-cued]) .bcc-topnav {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 9999 !important;
        transform: none !important;
      }
      .bcc-topnav nav,
      nav#main-navbar {
        background: rgba(4, 13, 22, 0.20) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
        transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
      }
      .bcc-topnav nav.scrolled,
      nav#main-navbar.scrolled {
        background: rgba(4, 13, 22, 0.40) !important;
        backdrop-filter: blur(16px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25) !important;
      }
      .bcc-hero-scrim {
        opacity: 0.35 !important;
      }
      .bcc-hero-sub {
        height: auto !important;
        overflow: visible !important;
        line-height: 1.5 !important;
      }
      .bcc-hero-sub span {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        font-family: inherit !important;
        font-size: 1.25rem !important;
        color: #f8fafc !important;
        text-shadow: 0 2px 10px rgba(0,0,0,0.8) !important;
        display: block !important;
        margin-top: 1rem !important;
      }
      .bcc-hero-title {
        text-shadow: 0 4px 16px rgba(0,0,0,0.6) !important;
      }
      /* Mega-menu sheet */
      .bpc-nav-sheet {
        transition: opacity 0.25s ease, height 0.3s ease !important;
      }
      .bpc-nav-sheet[data-open="true"] {
        height: auto !important;
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
      }
      .bpc-nav-sheet[data-open="false"], .bpc-nav-sheet:not([data-open="true"]) {
        height: 0 !important;
        opacity: 0 !important;
        visibility: hidden !important;
        display: none !important;
        pointer-events: none !important;
      }
      .bpc-nav-pane[data-active="true"] {
        opacity: 1 !important;
        display: block !important;
        visibility: visible !important;
        position: static !important;
        pointer-events: auto !important;
      }
      .bpc-nav-pane[data-active="false"], .bpc-nav-pane:not([data-active="true"]) {
        opacity: 0 !important;
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }

      /* Base Power Conduit Blueprint Dot Background */
      [data-bpc-bg="conduit"] {
        background-color: #f7f6f4 !important;
        background-image: radial-gradient(#d3cfc9 1.1px, transparent 1.1px) !important;
        background-size: 20px 20px !important;
      }

      /* Mobile Navigation Drawer - Transparent Glassmorphic like Header */
      #sky-mobile-drawer {
        position: fixed !important;
        top: 54px !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        height: calc(100vh - 54px) !important;
        height: calc(100dvh - 54px) !important;
        z-index: 99999 !important;
        background: rgba(4, 13, 22, 0.40) !important;
        backdrop-filter: blur(20px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        opacity: 0 !important;
        pointer-events: none !important;
        transform: translateY(-8px) !important;
        transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      #sky-mobile-drawer.active {
        opacity: 1 !important;
        pointer-events: auto !important;
        transform: translateY(0) !important;
        display: block !important;
      }
      #sky-mobile-drawer details {
        border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
      }
      #sky-mobile-drawer summary {
        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7) !important;
      }
      #sky-mobile-drawer a {
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6) !important;
      }

      /* Sky Group Executive Swiss Quote Modal */
      #sky-quote-modal {
        position: fixed !important;
        inset: 0 !important;
        z-index: 999999 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 1rem !important;
        background: rgba(6, 21, 39, 0.65) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transition: opacity 0.25s ease, visibility 0.25s ease !important;
      }
      #sky-quote-modal.active {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }
      #sky-quote-modal .modal-card {
        background-color: #ffffff !important;
        color: #1e293b !important;
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        box-shadow: 0 25px 60px -15px rgba(6, 21, 39, 0.35) !important;
        transform: scale(0.96);
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      #sky-quote-modal.active .modal-card {
        transform: scale(1);
      }
      #sky-modal-close {
        position: absolute !important;
        top: 0.85rem !important;
        right: 0.85rem !important;
        left: auto !important;
        z-index: 50 !important;
      }
      #sky-quote-modal input,
      #sky-quote-modal select,
      #sky-quote-modal textarea {
        background-color: #f8fafc !important;
        color: #0f172a !important;
        border: 1px solid #cbd5e1 !important;
        border-radius: 8px !important;
      }
      #sky-quote-modal input:focus,
      #sky-quote-modal select:focus,
      #sky-quote-modal textarea:focus {
        background-color: #ffffff !important;
        border-color: #09bde3 !important;
        outline: none !important;
        box-shadow: 0 0 0 3px rgba(9, 189, 227, 0.18) !important;
      }
      #sky-quote-modal input::placeholder,
      #sky-quote-modal textarea::placeholder {
        color: #94a3b8 !important;
      }

      /* Pricing Section Grid Styles */
      .sky-pricing-container {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
        align-items: start !important;
      }
      @media (min-width: 1024px) {
        .sky-pricing-container {
          grid-template-columns: 1.15fr 0.85fr !important;
          gap: 3.5rem !important;
        }
      }

      /* Clean statement text: Hide inline battery/pylon/dollar icons */
      .bcc-meet-ico, .bcc-meet-pic {
        display: none !important;
      }

      /* Mobile fix for Customer Reviews (bcc-say): prevent title clipping & card overlap */
      @media (max-width: 820px) {
        .bcc-say-inner {
          max-width: 100% !important;
          padding-inline: 1.25rem !important;
          position: relative !important;
        }
        .bcc-say-head {
          position: relative !important;
          margin-left: 0 !important;
          margin-bottom: 2rem !important;
          padding: 0 !important;
          text-align: left !important;
          transform: none !important;
          left: auto !important;
        }
        .bcc-say-head .bcc-say-h1,
        .bcc-say-head .bcc-say-h2,
        .bcc-x .bcc-say-head .bcc-say-h1,
        .bcc-x .bcc-say-head .bcc-say-h2,
        .bcc-x :is(.bcc-say-h1, .bcc-say-h2) {
          position: relative !important;
          transform: none !important;
          display: block !important;
          font-size: 1.85rem !important;
          line-height: 1.2 !important;
          white-space: normal !important;
          text-align: left !important;
          word-break: normal !important;
        }
        .bcc-say-deck {
          position: relative !important;
          top: auto !important;
          left: auto !important;
          margin-top: 2rem !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 1.5rem !important;
        }
      }
      .bcc-x .bcc-say-head:before,
      .bcc-x .bcc-say-head:after {
        background: transparent !important;
      }

      /* BP Section Styling (Scroll Runway Parity - Non-clickable) */
      .bcc-bp-step {
        cursor: default !important;
        user-select: none;
      }
      .bcc-bp-seg:after {
        background: #09bde3 !important;
      }
      .bcc-bp-stroke path {
        fill: #09bde3 !important;
      }
      .bcc-x .bcc-bp[data-bcc-step="0"] .bcc-bp-step:nth-child(1) .bcc-bp-title,
      .bcc-x .bcc-bp[data-bcc-step="1"] .bcc-bp-step:nth-child(2) .bcc-bp-title,
      .bcc-x .bcc-bp[data-bcc-step="2"] .bcc-bp-step:nth-child(3) .bcc-bp-title,
      .bcc-x .bcc-bp[data-bcc-step="3"] .bcc-bp-step:nth-child(4) .bcc-bp-title {
        color: #09bde3 !important;
        text-shadow: 0 0 16px rgba(9, 189, 227, 0.25);
      }
      .bcc-x .bcc-bp[data-bcc-step="0"] .bcc-bp-step:nth-child(1) .bcc-bp-ico,
      .bcc-x .bcc-bp[data-bcc-step="1"] .bcc-bp-step:nth-child(2) .bcc-bp-ico,
      .bcc-x .bcc-bp[data-bcc-step="2"] .bcc-bp-step:nth-child(3) .bcc-bp-ico,
      .bcc-x .bcc-bp[data-bcc-step="3"] .bcc-bp-step:nth-child(4) .bcc-bp-ico {
        color: #09bde3 !important;
      }
      .bcc-bp-img {
        transition: opacity 0.35s ease, transform 0.35s ease !important;
      }

      /* Hero Tape Badge - Sky Group Blue/Cyan Pill */
      .bcc-hero-tape {
        transform: translateY(6px) !important;
        margin-bottom: 16px !important;
      }
      .bcc-hero-tape:before,
      .bcc-hero-tape:after {
        display: none !important;
      }
      .bpc-tape-eyebrow {
        background: rgba(9, 189, 227, 0.2) !important;
        color: #ffffff !important;
        border: 1px solid rgba(9, 189, 227, 0.5) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border-radius: 9999px !important;
        padding: 6px 16px !important;
        box-shadow: 0 4px 20px rgba(9, 189, 227, 0.25) !important;
        font-weight: 600 !important;
        letter-spacing: 0.06em !important;
        text-transform: uppercase !important;
      }

      /* Green to Blue Component Overrides */
      .bcc-meet-green {
        color: #0284c7 !important;
      }
      .bg-brand-primary,
      .bcc-hero-cta button,
      .bcc-bp-btn.bg-brand-primary,
      #main-navbar a[href*="teklif"],
      #main-navbar a[href*="get-started"],
      a.bg-brand-primary {
        background-color: #09bde3 !important;
        color: #04111f !important;
        font-weight: 600 !important;
        box-shadow: 0 4px 14px rgba(9, 189, 227, 0.35) !important;
      }
      .bg-brand-primary:hover,
      .bcc-hero-cta button:hover,
      .bcc-bp-btn.bg-brand-primary:hover,
      #main-navbar a[href*="teklif"]:hover,
      a.bg-brand-primary:hover {
        background-color: #38bdf8 !important;
        color: #04111f !important;
        box-shadow: 0 6px 20px rgba(9, 189, 227, 0.5) !important;
      }
      .bcc-bp-btn.bg-transparent,
      .border-brand-primary-foreground {
        border-color: #0284c7 !important;
        color: #0284c7 !important;
      }
      .bcc-bp-btn.bg-transparent:hover,
      .border-brand-primary-foreground:hover {
        border-color: #09bde3 !important;
        color: #09bde3 !important;
        background-color: rgba(9, 189, 227, 0.08) !important;
      }
      .bcc-witness-track {
        background: #0284c7 !important;
      }
      .bcc-witness-word-on {
        color: #ffffff !important;
      }
      .bcc-witness:has(.bcc-witness-switch:not(:checked)) .bcc-witness-track {
        background: #ed6c30 !important;
      }
      .bcc-witness:has(.bcc-witness-switch:not(:checked)) .bcc-witness-scene {
        background-color: #061527 !important;
      }
      .bcc-witness-head-day,
      .bcc-specs-head,
      .bcc-specs-gtitle {
        color: #061527 !important;
      }
      footer.bg-brand-primary-foreground,
      .bg-brand-primary-foreground {
        background-color: #061527 !important;
      }
      .text-brand-primary {
        color: #0284c7 !important;
      }
      .text-brand-primary-foreground {
        color: #061527 !important;
      }

      /* FAQ Accordion Transitions & Animation */
      .bcc-faq-row {
        cursor: pointer;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
      }
      .bcc-faq-q {
        cursor: pointer !important;
        user-select: none !important;
      }
      .bcc-faq-chev {
        transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1) !important;
      }
      .bcc-faq-row[open] .bcc-faq-chev,
      .bcc-faq-row.is-open .bcc-faq-chev {
        transform: rotate(180deg) !important;
      }
      .bcc-faq-a {
        overflow: hidden !important;
      }
      .focus-visible\:outline-brand-primary-foreground:focus-visible {
        outline-color: #0284c7 !important;
      }
      .focus-visible\:ring-brand-primary-foreground:focus-visible {
        --tw-ring-color: #0284c7 !important;
      }
    </style>
    """
    html = html.replace('</head>', custom_head_styles + '\n</head>', 1)

    # 4. IMAGE REPLACEMENTS
    img_map = {
        # Hero images (matching frame 0 of sky-hvac-all-seasons video)
        '/_bpc/assets/base-core-concept/hero-video-1280.avif': '/_bpc/assets/base-core-concept/sky-rooftop-hvac-summer.jpg',
        '/_bpc/assets/base-core-concept/hero-video-820.avif': '/_bpc/assets/base-core-concept/sky-rooftop-hvac-summer.jpg',
        '/_bpc/assets/base-core-concept/hero-video-1920.avif': '/_bpc/assets/base-core-concept/sky-rooftop-hvac-summer.jpg',
        '/_bpc/assets/base-core-concept/hero-video-2560.avif': '/_bpc/assets/base-core-concept/sky-rooftop-hvac-summer.jpg',
        '/_bpc/assets/base-core-concept/hero-video-blur.avif': '/_bpc/assets/base-core-concept/sky-rooftop-hvac-summer.jpg',
        '/_bpc/assets/base-core-concept/video-preview.avif': '/_bpc/assets/base-core-concept/sky-rooftop-hvac-summer.jpg',

        # Meet (high-res 843x1200 product showcase)
        '/_bpc/assets/base-core-concept/meet-battery.avif': '/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg',

        # Better power (4 step showcase with 1200x800 high-res -B assets)
        '/_bpc/assets/base-core-concept/better-battery-960.avif': '/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg',
        '/_bpc/assets/base-core-concept/better-battery-480.avif': '/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg',
        '/_bpc/assets/base-core-concept/better-battery-1360.avif': '/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg',
        
        '/_bpc/assets/base-core-concept/better-install-960.avif': '/sm/ambar/urunler/vrvvrf-sistemler-B.jpg',
        '/_bpc/assets/base-core-concept/better-install-480.avif': '/sm/ambar/urunler/vrvvrf-sistemler-B.jpg',
        '/_bpc/assets/base-core-concept/better-install-1360.avif': '/sm/ambar/urunler/vrvvrf-sistemler-B.jpg',

        # Better winter
        '/_bpc/assets/base-core-concept/better-winter-960.avif': '/sm/ambar/urunler/isi-geri-kazanim-cihazlari-hrv-B.jpg',
        '/_bpc/assets/base-core-concept/better-winter-480.avif': '/sm/ambar/urunler/isi-geri-kazanim-cihazlari-hrv-B.jpg',
        '/_bpc/assets/base-core-concept/better-winter-1360.avif': '/sm/ambar/urunler/isi-geri-kazanim-cihazlari-hrv-B.jpg',

        # Better hand
        '/_bpc/assets/base-core-concept/better-hand-960.avif': '/sm/ambar/urunler/yangin-sondurme-sistemleri-B.jpg',
        '/_bpc/assets/base-core-concept/better-hand-480.avif': '/sm/ambar/urunler/yangin-sondurme-sistemleri-B.jpg',
        '/_bpc/assets/base-core-concept/better-hand-1360.avif': '/sm/ambar/urunler/yangin-sondurme-sistemleri-B.jpg',

        # Witness day / night comparison
        '/_bpc/assets/base-core-concept/witness-day-square-674.avif': '/sm/ambar/koca_fotogal_bb3b74f63d4c55312eb731d8454870d6.jpg',
        '/_bpc/assets/base-core-concept/witness-day-square-1348.avif': '/sm/ambar/koca_fotogal_bb3b74f63d4c55312eb731d8454870d6.jpg',
        '/_bpc/assets/base-core-concept/witness-day-wide-920.avif': '/sm/ambar/koca_fotogal_bb3b74f63d4c55312eb731d8454870d6.jpg',
        '/_bpc/assets/base-core-concept/witness-day-wide-1840.avif': '/sm/ambar/koca_fotogal_bb3b74f63d4c55312eb731d8454870d6.jpg',
        '/_bpc/assets/base-core-concept/witness-night-square-674.avif': '/sm/ambar/koca_fotogal_cc0e330caa9430309f63c45477f22e6f.jpg',
        '/_bpc/assets/base-core-concept/witness-night-square-1348.avif': '/sm/ambar/koca_fotogal_cc0e330caa9430309f63c45477f22e6f.jpg',
        '/_bpc/assets/base-core-concept/witness-night-wide-920.avif': '/sm/ambar/koca_fotogal_cc0e330caa9430309f63c45477f22e6f.jpg',
        '/_bpc/assets/base-core-concept/witness-night-wide-1840.avif': '/sm/ambar/koca_fotogal_cc0e330caa9430309f63c45477f22e6f.jpg',

        # Factory (using 1200x800 high-res air ducts and ventilation)
        '/_bpc/assets/base-core-concept/factory-still-1280.avif': '/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg',
        '/_bpc/assets/base-core-concept/factory-still-2560.avif': '/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg',
        '/_bpc/assets/base-core-concept/factory-still-1920.avif': '/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg',
        '/_bpc/assets/base-core-concept/factory-still-820.avif': '/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg',
        '/_bpc/assets/base-core-concept/factory-still-tall-480.avif': '/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg',
        '/_bpc/assets/base-core-concept/factory-still-tall-780.avif': '/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg',
        '/_bpc/assets/base-core-concept/factory-still-tall-1170.avif': '/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg',

        # Crew (high-res 1200x800 product photos)
        '/_bpc/assets/base-core-concept/crew-shop-540.avif': '/sm/ambar/urunler/sistem-klimalari-B.jpg',
        '/_bpc/assets/base-core-concept/crew-shop-1060.avif': '/sm/ambar/urunler/sistem-klimalari-B.jpg',
        '/_bpc/assets/base-core-concept/crew-robots-620.avif': '/sm/ambar/urunler/isitma-sistemleri-B.jpg',
        '/_bpc/assets/base-core-concept/crew-robots-1200.avif': '/sm/ambar/urunler/isitma-sistemleri-B.jpg',
        '/_bpc/assets/base-core-concept/crew-robots-1240.avif': '/sm/ambar/urunler/isitma-sistemleri-B.jpg',
        '/_bpc/assets/base-core-concept/crew-polaroid-660.avif': '/sm/ambar/urunler/merkezi-sistemler-B.jpg',
        '/_bpc/assets/base-core-concept/crew-polaroid-1280.avif': '/sm/ambar/urunler/merkezi-sistemler-B.jpg',
        '/_bpc/assets/base-core-concept/crew-group-620.avif': '/sm/ambar/koca_fotogal_1974677cca99f6e23ae15fda8ccfc95c.jpg',
        '/_bpc/assets/base-core-concept/crew-group-1200.avif': '/sm/ambar/koca_fotogal_1974677cca99f6e23ae15fda8ccfc95c.jpg',
        '/_bpc/assets/base-core-concept/crew-group-1240.avif': '/sm/ambar/koca_fotogal_1974677cca99f6e23ae15fda8ccfc95c.jpg',
        '/_bpc/assets/base-core-concept/crew-bench-480.avif': '/sm/ambar/koca_fotogal_321dfeb271deec020ab8c7d6a16a6c8b.jpg',
        '/_bpc/assets/base-core-concept/crew-bench-940.avif': '/sm/ambar/koca_fotogal_321dfeb271deec020ab8c7d6a16a6c8b.jpg',
        '/_bpc/assets/base-core-concept/crew-bench-960.avif': '/sm/ambar/koca_fotogal_321dfeb271deec020ab8c7d6a16a6c8b.jpg',
        '/_bpc/assets/base-core-concept/crew-battery-640.avif': '/sm/ambar/urunler/davlumbaz-sondurme-sistemi-B.jpg',
        '/_bpc/assets/base-core-concept/crew-battery-1240.avif': '/sm/ambar/urunler/davlumbaz-sondurme-sistemi-B.jpg',
        '/_bpc/assets/base-core-concept/crew-battery-1280.avif': '/sm/ambar/urunler/davlumbaz-sondurme-sistemi-B.jpg',

        # Reviews / Say
        '/_bpc/assets/base-core-concept/say-photo-porch.avif': '/sm/ambar/koca_fotogal_3c8b8d14fd73efbcdd37647d88a6c1c2.jpg',
        '/_bpc/assets/base-core-concept/say-photo-install.avif': '/sm/ambar/koca_fotogal_484c8b3a0660cbabdad309952e7d135b.jpg',
        '/_bpc/assets/base-core-concept/say-photo-service.avif': '/sm/ambar/koca_fotogal_5712a7e4518f2c1a74f50893e4faa7af.jpg',

        # Mega-menu content images
        '/_bpc/assets/images/content/874A1778.avif': '/sm/ambar/koca_fotogal_6b5abdb48c204fe45d4b71af4bf3015c.jpg',
        '/_bpc/assets/images/content/jjwatt-hero-card.avif': '/sm/ambar/koca_fotogal_8b6a466ed354146bb946beeb058166a4.jpg',
        '/_bpc/assets/images/content/spring-26_-photoshoot-156.avif': '/sm/ambar/koca_fotogal_910f18c72e6d8ef46ca92734073d84ef.jpg',
        '/_bpc/assets/images/content/spring-26_-photoshoot-216.avif': '/sm/ambar/koca_fotogal_927323f529423eba2d917ccdd5c1026c.jpg',
        '/_bpc/assets/images/content/spring-26_-photoshoot-76.avif': '/sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg',

        # Reveal stage mosaic tiles (high-res)
        '/_bpc/assets/base-core-concept/reveal-wide-1280.avif': '/sm/ambar/banner/sky-mekanik-459.jpg',
        '/_bpc/assets/base-core-concept/reveal-wide-1920.avif': '/sm/ambar/banner/sky-mekanik-459.jpg',
        '/_bpc/assets/base-core-concept/reveal-wide-2560.avif': '/sm/ambar/banner/sky-mekanik-459.jpg',
        '/_bpc/assets/base-core-concept/reveal-wide-820.avif': '/sm/ambar/banner/sky-mekanik-459.jpg',
        '/_bpc/assets/base-core-concept/reveal-tall-1170.avif': '/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg',
        '/_bpc/assets/base-core-concept/reveal-tall-480.avif': '/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg',
        '/_bpc/assets/base-core-concept/reveal-tall-780.avif': '/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg',
        '/_bpc/assets/og-base-core-concept.jpg': '/sm/ambar/banner/sky-mekanik-459.jpg',
    }

    for old_src, new_src in img_map.items():
        html = html.replace(old_src, new_src)

    # 5. HERO TITLE REPLACEMENT
    html = re.sub(r'<h1 class=\"bcc-hero-title\">Base Core</h1>', '<h1 class="bcc-hero-title">Sky Group</h1>', html)
    html = re.sub(r'<h1 class=\"bcc-hero-title\">Core</h1>', '<h1 class="bcc-hero-title">Sky Group</h1>', html)

    # Hero Eyebrow Tape & Subtitle
    hero_tape_old = '<span class="bcc-hero-tape" data-bcc-seasons-egg><span class="bpc-tape-eyebrow">Meet</span></span>'
    hero_tape_new = '<span class="bcc-hero-tape" data-bcc-seasons-egg><span class="bpc-tape-eyebrow inline-flex items-center gap-1.5"><img src="/assets/sky-group-logo-arrow.png" alt="Sky Group" class="w-4 h-4 object-contain inline-block filter brightness-110 drop-shadow" width="16" height="16">MÜHENDİSLİK &amp; İKLİMLENDİRME</span></span>'
    html = html.replace(hero_tape_old, hero_tape_new)
    html = html.replace(
        '<span class="bpc-tape-eyebrow">Meet</span>',
        '<span class="bpc-tape-eyebrow">MÜHENDİSLİK &amp; İKLİMLENDİRME</span>'
    )
    html = html.replace(
        '<span class="bpc-tape-eyebrow">Power for a resilient grid</span>',
        '<span class="bpc-tape-eyebrow">MÜHENDİSLİK &amp; İKLİMLENDİRME</span>'
    )
    html = html.replace(
        '<span>Built for all seasons</span>',
        '<span>Doğru İklimlendirme ve Havalandırma Çözümleriyle Geleceğin Tesislerini İnşa Ediyoruz.</span>'
    )
    html = html.replace(
        'A whole-home battery for real energy independence.',
        'Doğru İklimlendirme ve Havalandırma Çözümleriyle Geleceğin Tesislerini İnşa Ediyoruz.'
    )

    # Hero CTA Button & Video label
    html = html.replace('>\nLearn more\n <svg', '>\nDetayları Keşfedin\n <svg')
    html = html.replace('aria-label="See Base Factory 1 — video tour"', 'aria-label="Sky Group İmalat Sahası"')
    html = html.replace('See Base Factory 1', 'İmalat Sahasını İnceleyin')

    # 6. TOPNAV LOGO & BRANDING
    sky_logo_html = """<a href="/" aria-label="Sky Group" class="inline-flex min-h-11 shrink-0 touch-manipulation items-center gap-2.5"><img src="/assets/sky-group-logo-s.png" alt="Sky Group" class="h-9 w-9 object-contain drop-shadow" width="36" height="36"><span class="text-xl font-black tracking-tight text-white sky-brand-logo">SKY <span class="text-[#09bde3]">GROUP</span></span></a>"""
    
    html = re.sub(
        r'<a href=\"/\" aria-label=\"Base Power\" class=\"[^\"]*\">.*?</a>',
        sky_logo_html,
        html,
        count=1
    )

    # Topnav desktop links
    desktop_nav_old = '<ul class="hidden lg:flex items-center gap-1"><li><button type="button" aria-expanded="false" aria-controls="fullnav-panel-products" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Products<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li><button type="button" aria-expanded="false" aria-controls="fullnav-panel-pricing" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Pricing<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li><button type="button" aria-expanded="false" aria-controls="fullnav-panel-resources" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Resources<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li><li><a href="/utilities" class="inline-flex items-center rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft text-text-inverse hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground">Utilities</a></li><li><button type="button" aria-expanded="false" aria-controls="fullnav-panel-company" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Company<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li></ul>'

    desktop_nav_new = '<ul class="hidden lg:flex items-center gap-1"><li><a href="/urunlerimiz.html" aria-controls="fullnav-panel-products" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Ürünlerimiz<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></a></li><li><a href="/cozumlerimiz.html" aria-controls="fullnav-panel-pricing" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Çözümlerimiz<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></a></li><li><a href="/hizmetlerimiz.html" aria-controls="fullnav-panel-resources" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Hizmetlerimiz<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></a></li><li><a href="/referanslar.html" class="inline-flex items-center rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft text-text-inverse hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground">Referanslar</a></li><li><a href="/kurumsal.html" aria-controls="fullnav-panel-company" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Kurumsal<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></a></li></ul>'
    html = html.replace(desktop_nav_old, desktop_nav_new)

    html = html.replace('>Sign in<', '>0 (541) 922 19 91<')
    html = html.replace('href="/sign-in"', 'href="tel:+905419221991"')
    html = html.replace('>Get Core<', '>Teklif Alın<')
    html = html.replace('href="/get-started"', 'href="#sky-quote-modal" data-sky-modal-trigger="teklif"')
    html = html.replace('style="height:0;--bpc-nav-sheet-top:69px"', 'style="--bpc-nav-sheet-top:69px"')

    # Mobile Burger Button
    burger_btn_old = '<button type="button" aria-label="Open menu" aria-expanded="false" aria-controls="_r26R_0_" class="lg:hidden inline-flex size-11 touch-manipulation items-center justify-center rounded-full transition-colors text-text-inverse hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu shrink-0" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button>'
    
    burger_btn_new = """<button type="button" id="sky-burger-btn" aria-label="Menü" aria-expanded="false" aria-controls="sky-mobile-drawer" class="lg:hidden inline-flex size-11 touch-manipulation items-center justify-center rounded-full transition-colors text-text-inverse hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground cursor-pointer z-50">
  <svg id="sky-burger-icon-open" class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
  <svg id="sky-burger-icon-close" class="hidden w-6 h-6 text-[#09bde3]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>"""
    html = html.replace(burger_btn_old, burger_btn_new)

    # Mobile Drawer HTML right after header </nav>
    mobile_drawer_html = """
    <div id="sky-mobile-drawer" class="lg:hidden" aria-hidden="true">
      <div class="px-5 py-6 flex flex-col gap-4 text-white">
        <!-- Navigation Accordion / Links -->
        <div class="flex flex-col gap-1">
          <!-- 1. Ürünlerimiz -->
          <div class="border-b border-white/10 py-2.5">
            <div class="flex items-center justify-between">
              <a href="/urunlerimiz.html" class="font-bold text-lg py-1 text-white hover:text-[#09bde3] flex-1">Ürünlerimiz</a>
              <button type="button" class="p-2 text-gray-400 hover:text-white cursor-pointer" onclick="const p=this.closest('div').nextElementSibling; p.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180');" aria-label="Ürünlerimiz alt menüsünü aç">
                <svg class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
            <div class="hidden pl-3 pt-2 pb-1 space-y-2.5 text-sm text-gray-300">
              <a href="/urunlerimiz.html" class="block py-1 text-[#09bde3] font-semibold">Tüm Ürünlerimiz Sayfası →</a>
              <a href="/urunlerimiz.html" class="block py-1 hover:text-[#09bde3]">Klima Santralleri (AHU)</a>
              <a href="/urunlerimiz.html" class="block py-1 hover:text-[#09bde3]">Kendinden Flanşlı Galvaniz Kanal</a>
              <a href="/urunlerimiz.html" class="block py-1 hover:text-[#09bde3]">Spiromatic Spiral Yuvarlak Kanal</a>
              <a href="/urunlerimiz.html" class="block py-1 hover:text-[#09bde3]">VRV / VRF İklimlendirme</a>
              <a href="/urunlerimiz.html" class="block py-1 hover:text-[#09bde3]">Yangın &amp; Duman Damperleri</a>
              <a href="/urunlerimiz.html" class="block py-1 hover:text-[#09bde3]">Isı Geri Kazanım Cihazları (HRV)</a>
            </div>
          </div>

          <!-- 2. Çözümlerimiz -->
          <div class="border-b border-white/10 py-2.5">
            <div class="flex items-center justify-between">
              <a href="/cozumlerimiz.html" class="font-bold text-lg py-1 text-white hover:text-[#09bde3] flex-1">Çözümlerimiz</a>
              <button type="button" class="p-2 text-gray-400 hover:text-white cursor-pointer" onclick="const p=this.closest('div').nextElementSibling; p.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180');" aria-label="Çözümlerimiz alt menüsünü aç">
                <svg class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
            <div class="hidden pl-3 pt-2 pb-1 space-y-2.5 text-sm text-gray-300">
              <a href="/cozumlerimiz.html" class="block py-1 text-[#09bde3] font-semibold">Tüm Çözümlerimiz Sayfası →</a>
              <a href="/cozumlerimiz.html" class="block py-1 hover:text-[#09bde3]">Endüstriyel Tesisler &amp; Fabrikalar</a>
              <a href="/cozumlerimiz.html" class="block py-1 hover:text-[#09bde3]">Hastaneler &amp; Temiz Odalar</a>
              <a href="/cozumlerimiz.html" class="block py-1 hover:text-[#09bde3]">Ticari Yapılar &amp; Plazalar</a>
              <a href="/cozumlerimiz.html" class="block py-1 hover:text-[#09bde3]">AVM &amp; Sosyal Tesisler</a>
              <a href="/cozumlerimiz.html" class="block py-1 hover:text-[#09bde3]">Restoran &amp; Otel Mutfak Egzozu</a>
              <a href="/cozumlerimiz.html" class="block py-1 hover:text-[#09bde3]">Otopark Jet Fan Sistemleri</a>
            </div>
          </div>

          <!-- 3. Hizmetlerimiz -->
          <div class="border-b border-white/10 py-2.5">
            <div class="flex items-center justify-between">
              <a href="/hizmetlerimiz.html" class="font-bold text-lg py-1 text-white hover:text-[#09bde3] flex-1">Hizmetlerimiz</a>
              <button type="button" class="p-2 text-gray-400 hover:text-white cursor-pointer" onclick="const p=this.closest('div').nextElementSibling; p.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180');" aria-label="Hizmetlerimiz alt menüsünü aç">
                <svg class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
            <div class="hidden pl-3 pt-2 pb-1 space-y-2.5 text-sm text-gray-300">
              <a href="/hizmetlerimiz.html" class="block py-1 text-[#09bde3] font-semibold">Tüm Hizmetlerimiz Sayfası →</a>
              <a href="/hizmetlerimiz.html" class="block py-1 hover:text-[#09bde3]">Yerinde Keşif &amp; Debi Simülasyonu</a>
              <a href="/hizmetlerimiz.html" class="block py-1 hover:text-[#09bde3]">3D Projelendirme &amp; Metraj</a>
              <a href="/hizmetlerimiz.html" class="block py-1 hover:text-[#09bde3]">CNC Plazma Kanal İmalatı</a>
              <a href="/hizmetlerimiz.html" class="block py-1 hover:text-[#09bde3]">Anahtar Teslim Saha Montajı</a>
              <a href="/hizmetlerimiz.html" class="block py-1 hover:text-[#09bde3]">TAB Test, Ayar &amp; Dengeleme</a>
              <a href="tel:+905419221991" class="block py-1 hover:text-[#09bde3]">7/24 Teknik Servis &amp; Bakım</a>
            </div>
          </div>

          <!-- 4. Referanslar -->
          <div class="border-b border-white/10 py-3">
            <a href="/referanslar.html" class="block font-bold text-lg text-white hover:text-[#09bde3]">Referanslar (250+ Proje)</a>
          </div>

          <!-- 5. Kurumsal -->
          <div class="border-b border-white/10 py-2.5">
            <div class="flex items-center justify-between">
              <a href="/kurumsal.html" class="font-bold text-lg py-1 text-white hover:text-[#09bde3] flex-1">Kurumsal</a>
              <button type="button" class="p-2 text-gray-400 hover:text-white cursor-pointer" onclick="const p=this.closest('div').nextElementSibling; p.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180');" aria-label="Kurumsal alt menüsünü aç">
                <svg class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
            <div class="hidden pl-3 pt-2 pb-1 space-y-2.5 text-sm text-gray-300">
              <a href="/kurumsal.html" class="block py-1 text-[#09bde3] font-semibold">Tüm Kurumsal Bilgiler →</a>
              <a href="/kurumsal.html" class="block py-1 hover:text-[#09bde3]">Hakkımızda &amp; 20+ Yıllık Tecrübe</a>
              <a href="/kurumsal.html" class="block py-1 hover:text-[#09bde3]">Ankara İvedik OSB Üretim Tesisimiz</a>
              <a href="/kurumsal.html" class="block py-1 hover:text-[#09bde3]">TSE, Eurovent, CE Kalite Belgeleri</a>
              <a href="/kurumsal.html" class="block py-1 hover:text-[#09bde3]">İSG ve Sıfır Kaza Politikası</a>
              <a href="#sky-quote-modal" data-sky-modal-trigger="katalog" class="block py-1 hover:text-[#09bde3]">Ürün &amp; Hizmet Kataloğu İndir</a>
            </div>
          </div>
        </div>

        <!-- Quick Action CTA Buttons -->
        <div class="pt-4 flex flex-col gap-3">
          <a href="#sky-quote-modal" data-sky-modal-trigger="teklif" style="background-color: #09bde3 !important; color: #040e1a !important;" class="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-lg font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 cursor-pointer">
            Hemen Fiyat Teklifi Alın
          </a>
          <a href="tel:+905419221991" class="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg border border-white/20 bg-white/5 text-white font-semibold text-base hover:bg-white/10 transition-colors">
            <svg class="w-5 h-5 text-[#09bde3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            0 (541) 922 19 91
          </a>
          <a href="https://wa.me/905419221991" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-base transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            WhatsApp Danışma Hattı
          </a>
        </div>

        <!-- Company Info -->
        <div class="pt-2 text-xs text-gray-400 text-center leading-relaxed">
          İvedik OSB Mah. 1354. Cad. No: 138/6 Yenimahalle / Ankara<br>
          © 2026 Sky Group. Tüm hakları saklıdır.
        </div>
      </div>
    </div>
    """
    html = html.replace('</nav>', '</nav>\n' + mobile_drawer_html, 1)

    # Dropdown Mega-Menu: Panel 1 (Products)
    html = html.replace('>Reliable Power<', '>HAVALANDIRMA SİSTEMLERİ<')
    html = html.replace('>Base Core<', '>Klima Santralleri (AHU)<')
    html = html.replace('>Our next-generation home battery — backup power and savings, available in Texas and Illinois.<', '>Yüksek debili, çift cidarlı hijyenik ve standart klima santralleri.<')
    html = html.replace('>How it works<', '>Hava Kanalı İmalatı<')
    html = html.replace('>Good for your home. Good for the grid.<', '>CNC plazma kesim, kendinden flanşlı galvaniz ve paslanmaz kanallar.<')
    html = html.replace('>With solar<', '>VRV / VRF İklimlendirme<')
    html = html.replace('>More from your solar system.<', '>Çok bölgeli bağımsız inverter iklimlendirme sistemleri.<')
    html = html.replace('>With a portable generator<', '>Yangın &amp; Duman Tahliyesi<')
    html = html.replace('>Turn your portable into a standby.<', '>400°C/2h yangına dayanıklı duman tahliye ve jet fan sistemleri.<')
    html = html.replace('>Calculate backup duration<', '>Isı Geri Kazanım Cihazları (HRV)<')
    html = html.replace('>Find out how long your Base battery would last in a power outage.<', '>%80\'e varan enerji geri kazanımı ile maksimum tasarruf.<')
    html = html.replace('>Base vs. other Texas energy providers.<', '>Sky Group mühendislik ve imalat farkı.<')
    html = html.replace('>Base Energy for Business<', '>Endüstriyel Havalandırma<')
    html = html.replace('>Custom plans for business across Texas.<', '>Fabrika, depo ve ticari yapılar için yüksek verimli çözümler.<')
    html = html.replace('>Affordable Power<', '>MÜHENDİSLİK ÇÖZÜMLERİ<')

    # Dropdown Mega-Menu: Panel 2 (Pricing)
    html = html.replace('>See what Base can offer at your home.<', '>Sky Group Mühendislik Çözümleri<')
    html = html.replace('>Base availability, pricing, and offers vary by address. Find your utility to see what applies to you.<', '>Mimari ve mekanik çizimlerinizi bize iletin, 24 saat içinde detaylı keşif ve metrajlı teklif hazırlayalım.<')
    html = html.replace('>See Base in your area<', '>Sektörel Çözümleri Görün &rarr;<')
    html = html.replace('>Base is now serving homeowners across Texas and Illinois.<', '>Türkiye genelinde 250+ endüstriyel ve ticari referans proje.<')
    html = html.replace('>Pricing by product<', '>Hizmet Kapsamımız<')
    html = html.replace('>Energy<', '>Mühendislik &amp; Projelendirme<')
    html = html.replace('>Available in Texas where homeowners have the power to choose their energy providers.<', '>Uzman mühendis kadromuzla yerinde keşif, debi hesabı ve projelendirme.<')
    html = html.replace('>Home Backup<', '>İmalat Güvencesi<')
    html = html.replace('>Home backup that works with select utilities.<', '>Kendi modern atölyemizde yüksek kapasiteli üretim ve stok.<')
    html = html.replace('>Energy + Backup<', '>Anahtar Teslim Montaj<')
    html = html.replace('>Save on energy. Never lose power.<', '>Santral, kanal, menfez montajı, test ve balans (TAB) ayarları.<')

    # Dropdown Mega-Menu: Panel 3 (Resources)
    html = html.replace('>The official power company of JJ Watt&#x27;s home.<', '>Endüstriyel tesislerde lider mekanik tesisat mühendisliği.<')
    html = html.replace('>Help center<', '>7/24 Teknik Servis<')
    html = html.replace('>Member support and FAQs.<', '>Periyodik bakım ve acil müdahale desteği.<')
    html = html.replace('>Reviews<', '>Referans Projeler<')
    html = html.replace('>4.8 out of 5 on Google.<', '>Fabrika, AVM, hastane ve konut referansları.<')
    html = html.replace('>Stories<', '>Teknik Dokümanlar<')
    html = html.replace('>How Texans save and protect.<', '>Eurovent, TSE ve CE standartları şartnameleri.<')
    html = html.replace('>Blog<', '>Haberler &amp; Sektörel<')
    html = html.replace('>Updates and news.<', '>İklimlendirme ve enerji verimliliği bültenleri.<')

    # Dropdown Mega-Menu: Panel 4 (Company)
    html = html.replace('>About Base<', '>Hakkımızda<')
    html = html.replace('>Our mission and team.<', '>Köklü tecrübe, yetkin mühendis ve saha kadrosu.<')
    html = html.replace('>Press<', '>İletişim &amp; Adres<')
    html = html.replace('>Media coverage and announcements.<', '>0 (541) 922 19 91 | info@skymekanik.com<')
    html = html.replace('>Inside Base<', '>Üretim Tesisimiz<')
    html = html.replace('>Exploring technical challenges.<', '>Modern makine parkuru ve CNC hatlarımız.<')
    html = html.replace('>Careers<', '>Kalite Standartları<')
    html = html.replace('>For engineers, operators, and creatives.<', '>ISO 9001:2015, CE, TSE EN 1886 belgeleri.<')
    html = html.replace('>Field careers<', '>Saha Güvenliği<')
    html = html.replace('>For electricians installing the future of power.<', '>İş sağlığı ve güvenliğinde sıfır kaza prensibi.<')
    html = html.replace('>All open roles<', '>Katalog İndir<')
    html = html.replace('>View current openings.<', '>2026 Ürün ve Hizmet Kataloğumuzu inceleyin.<')
    html = html.replace('>Join the charge<', '>Doğru İklimlendirme<')
    html = html.replace('>We need smart people solving hard problems.<', '>Geleceğin tesisleri için yüksek verimli mekanik çözümler üretiyoruz.<')

    # Mega-menu link destinations (connect directly to dedicated pages)
    html = html.replace('href="/core"', 'href="/urunlerimiz.html"')
    html = html.replace('href="/how-it-works"', 'href="/hizmetlerimiz.html"')
    html = html.replace('href="/with-solar"', 'href="/urunlerimiz.html"')
    html = html.replace('href="/with-generator"', 'href="/urunlerimiz.html"')
    html = html.replace('href="/duration-calculator"', 'href="/urunlerimiz.html"')
    html = html.replace('href="/energy"', 'href="/cozumlerimiz.html"')
    html = html.replace('href="/compare"', 'href="/kurumsal.html"')
    html = html.replace('href="/business"', 'href="/cozumlerimiz.html"')
    html = html.replace('href="/pricing"', 'href="/cozumlerimiz.html"')
    html = html.replace('href="/watt"', 'href="/kurumsal.html"')
    html = html.replace('href="/reviews"', 'href="/referanslar.html"')
    html = html.replace('href="/stories"', 'href="/kurumsal.html"')
    html = html.replace('href="/blog"', 'href="/kurumsal.html"')
    html = html.replace('href="/about"', 'href="/kurumsal.html"')
    html = html.replace('href="/press"', 'href="/kurumsal.html#iletisim"')
    html = html.replace('href="/learn"', 'href="/kurumsal.html"')
    html = html.replace('href="/careers"', 'href="/kurumsal.html"')
    html = html.replace('href="/field"', 'href="/referanslar.html"')
    html = html.replace('href="/open-roles"', 'href="/referanslar.html"')
    html = html.replace('href="/get-started"', 'href="#sky-quote-modal" data-sky-modal-trigger="teklif"')
    html = html.replace('href="/waitlist"', 'href="#sky-quote-modal" data-sky-modal-trigger="kesif"')
    html = html.replace('href="/oncor"', 'href="/cozumlerimiz.html"')
    html = html.replace('href="/utilities"', 'href="/cozumlerimiz.html"')

    # Section IDs for smooth in-page scrolling
    html = re.sub(r'<section\s+class=\"bcc-witness\"', '<section id="bcc-witness" class="bcc-witness"', html)
    html = re.sub(r'<section\s+class=\"bcc-bp\"', '<section id="bcc-bp" class="bcc-bp"', html)
    html = re.sub(r'<section\s+class=\"bcc-how\"', '<section id="bcc-how" class="bcc-how"', html)
    html = re.sub(r'<section\s+class=\"bcc-specs\"', '<section id="bcc-specs" class="bcc-specs"', html)
    html = re.sub(r'<section\s+class=\"bcc-faq\"', '<section id="bcc-faq" class="bcc-faq"', html)
    html = re.sub(r'<section\s+class=\"bcc-crew\"', '<section id="bcc-crew" class="bcc-crew"', html)
    html = re.sub(r'<section\s+class=\"bcc-nf\"', '<section id="bcc-nf" class="bcc-nf"', html)

    # 7. SECTION 1: STRESS STAGE WORDS
    stress_exact_map = {
        '--ws:0.0881': 'Enerji',
        '--ws:0.103': 've',
        '--ws:0.1179': 'iklimlendirme',
        '--ws:0.1328': 'yönetimi.',
        '--ws:0.1477': 'Doğru',
        '--ws:0.1626': 'mühendislik',
        '--ws:0.1775': 'ile',
        '--ws:0.1924': 'yüksek',
        '--ws:0.2073': 'konfor.',
    }
    for ws, turkish_w in stress_exact_map.items():
        html = re.sub(
            r'<span class=\"bcc-word\" style=\"' + re.escape(ws) + r'\">[^<]*</span>',
            f'<span class="bcc-word" style="{ws}">{turkish_w}</span>',
            html
        )

    # Stress chip pills
    html = html.replace('>Rising energy costs<', '>Yüksek Enerji Maliyetleri<')
    html = html.replace('>Increased power outages<', '>Hava Sirkülasyonu İhtiyacı<')
    html = html.replace('>Extreme weather events<', '>Aşırı Sıcaklar ve İklim Değişimi<')
    html = html.replace('>Aging power grid<', '>Eski &amp; Verimsiz Havalandırma Hatları<')

    # Hero video replacement with Sky Group All Seasons 1080p video
    html = html.replace(
        '<video class="bcc-hero-video" data-bcc-hero-video data-stream-uid="887a0aa809b4053c0cc21f414c9bb3b5" autoplay muted loop playsinline preload="none"></video>',
        '<video class="bcc-hero-video bcc-hero-video-live" data-bcc-hero-video src="/_bpc/assets/base-core-concept/sky-hvac-all-seasons.mp4" autoplay muted loop playsinline preload="auto" style="opacity: 1 !important; visibility: visible !important; object-fit: cover;"></video>'
    )
    html = html.replace(
        'data-src="/_bpc/assets/base-core-concept/all-seasons.mp4"',
        'src="/_bpc/assets/base-core-concept/sky-hvac-all-seasons.mp4" data-src="/_bpc/assets/base-core-concept/sky-hvac-all-seasons.mp4" preload="auto"'
    )

    # Mosaic card titles
    html = html.replace('>Meet Base Core<', '>Sky Group ile Tanışın<')
    html = html.replace('>Built for all seasons<', '>Dört Mevsim Kesintisiz Taze Hava<')
    html = html.replace('>Learn more<', '>Detayları Keşfedin<')

    # 7b. SECTION BCC-GRID: "Meet Base Core" and "Built in the USA."
    grid_title_pattern = r'<h2 class=\"bcc-grid-title\"[^>]*><span class=\"bcc-grid-meet\">Meet</span> Base Core[\s\S]*?</h2>\s*<p class=\"bcc-grid-sub\"[^>]*>Built in the USA\.</p>'
    grid_title_replacement = """<h2 class="bcc-grid-title" style="--ws:0.8931"><span class="bcc-grid-meet">Keşfedin:</span> Sky Group<img src="/assets/sky-group-logo-arrow.png" alt="Sky Group" class="inline-block w-8 h-8 align-middle ml-2 object-contain filter drop-shadow-[0_2px_8px_rgba(9,189,227,0.4)]" width="32" height="32"></h2> <p class="bcc-grid-sub" style="--ws:0.9094">Türkiye'de Yerli İmalat &amp; Yüksek Standartlarda Mühendislik.</p>"""
    html = re.sub(grid_title_pattern, grid_title_replacement, html, count=1)

    # 8. SECTION 2: BCC-MEET WORDS
    meet_exact_map = [
        ('--cd:0.05s', 'A', 'Doğru'),
        ('--cd:0.13s', 'Texas-sized', 'mühendislik'),
        ('--cd:0.21s', 'home', 've'),
        ('--cd:0.29s', 'battery', 'santraller'),
        ('--ws:0.1400', 'that', 'ile'),
        ('--ws:0.1600', 'automatically', 'binalarınızda'),
        ('--ws:0.1800', 'powers', 'kesintisiz'),
        ('--ws:0.2000', 'your', 'temiz'),
        ('--ws:0.2200', 'home', 'hava'),
        ('--ws:0.2400', 'when', 've'),
        ('--ws:0.2600', 'the', 'ideal'),
        ('--ws:0.2800', 'lights', 'iklimlendirme'),
        ('--ws:0.3000', 'go', 'konforu'),
        ('--ws:0.3200', 'out', 'sağlıyoruz'),
        ('--ws:0.3400', 'and', 'üstelik'),
        ('--ws:0.3600', 'saves', 'yüksek'),
        ('--ws:0.3800', 'you', 'enerji'),
        ('--ws:0.4000', 'money', 'tasarrufuyla'),
        ('--ws:0.4200', 'all', 'işletme'),
        ('--ws:0.4400', 'while', 'giderlerini'),
        ('--ws:0.4600', 'strengthening', 'en'),
        ('--ws:0.4800', 'our', 'aza'),
        ('--ws:0.5000', 'grid', 'indiriyoruz'),
    ]
    for key, orig_w, turkish_w in meet_exact_map:
        html = re.sub(
            r'<span class="bcc-meet-w" style="' + re.escape(key) + r'">' + re.escape(orig_w) + r'</span>',
            f'<span class="bcc-meet-w" style="{key}">{turkish_w}</span>',
            html
        )

    html = html.replace(
        '<p class="bcc-meet-sub-bold">Base designs, builds, installs, and maintains each Base Core Battery.</p>',
        '<p class="bcc-meet-sub-bold">Sky Group; klima santralleri, VRF iklimlendirme ve hava kanallarında anahtar teslim çözümler sunar.</p>'
    )
    html = html.replace(
        '<p class="bcc-meet-sub-muted">Currently available in Texas and Illinois.</p>',
        '<p class="bcc-meet-sub-muted">Türkiye genelinde 250+ endüstriyel ve ticari referans proje.</p>'
    )
    html = html.replace(
        'Not in your area?  Tell us where to go next ›',
        'Projeniz için yerinde ücretsiz keşif talep edin ›'
    )
    html = html.replace('alt="Base Core home battery"', 'alt="Sky Group Klima Santralleri"')

    # 9. SECTION 3: BCC-BP (BETTER POWER / 4 STEP SHOWCASE)
    # Target exact heading markup
    html = html.replace(
        '<span class="bcc-bp-mark">Better power<svg',
        '<span class="bcc-bp-mark">Doğru iklimlendirme<svg'
    )
    html = html.replace(
        '</span></span> starts with Core:</h2>',
        '</span></span> Sky Group ile başlar:</h2>'
    )

    # 4 Steps titles & bodies
    html = html.replace(
        '<h3 class="bcc-bp-title">One of the largest home batteries</h3>',
        '<h3 class="bcc-bp-title">Merkezi Klima Santralleri (AHU)</h3>'
    )
    html = html.replace(
        '<p class="bcc-bp-body"> <strong>39.2 kWh</strong>  in every Base Core, making it one of the largest home batteries available. </p>',
        '<p class="bcc-bp-body"> <strong>120.000 m³/h</strong> debiye kadar çift cidarlı akustik gövde, yüksek enerji verimliliği ve hijyenik iç hava kalitesi. </p>'
    )

    html = html.replace(
        '<h3 class="bcc-bp-title">Days of backup</h3>',
        '<h3 class="bcc-bp-title">VRV / VRF İklimlendirme Sistemleri</h3>'
    )
    html = re.sub(
        r'<p class=\"bcc-bp-body\">\s*Approx\. 36-72 hours[\s\S]*?\(not required\)\.\s*</p>',
        '<p class="bcc-bp-body"> Çok bölgeli bağımsız sıcaklık kontrolü, yüksek sezonsal verimlilik (SEER/SCOP), inverter kompresör ve düşük işletme maliyeti ile maksimum tasarruf. </p>',
        html
    )

    html = html.replace(
        '<h3 class="bcc-bp-title">From Texas summer to Chicago winter</h3>',
        '<h3 class="bcc-bp-title">Isı Geri Kazanım Cihazları (HRV)</h3>'
    )
    html = re.sub(
        r'<p class=\"bcc-bp-body\">\s*Tested for -22 to 122°F[\s\S]*?to 3 feet\.\s*</p>',
        '<p class="bcc-bp-body"> %80’e varan ısıl geri kazanım verimiyle egzoz havasındaki termal enerjiyi taze havaya aktaran, enerji tüketimini minimize eden teknoloji. </p>',
        html
    )

    html = html.replace(
        '<h3 class="bcc-bp-title">Affordable pricing</h3>',
        '<h3 class="bcc-bp-title">Yangın &amp; Duman Tahliye Sistemleri</h3>'
    )
    html = re.sub(
        r'<p class=\"bcc-bp-body\">\s*Automatic, whole-home backup without the five-figure cost[\s\S]*?</p>',
        '<p class="bcc-bp-body"> 400°C/2h yangına dayanıklı duman egzoz fanları, yangın ve duman damperleri, merdiven ve asansör kovası basınçlandırma sistemleri. </p>',
        html
    )
    html = html.replace('data-bcc-pricing-modal>See your pricing</a>', 'data-bcc-pricing-modal>Hemen Fiyat Teklifi Alın</a>')
    html = html.replace('bcc-bp-btn" href="/get-started">Get started</a>', 'bcc-bp-btn" href="tel:+905419221991">Keşif Talebi Oluşturun</a>')

    # Step 3 SVG: Replace dollar sign icon with fire/flame ventilation icon
    dollar_svg_pattern = r'<g transform=\"translate\(5\.25 0\.25\)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6\.75 0C7\.16 0 7\.5 0\.34 7\.5 0\.75V22\.75[\s\S]*?</g>'
    fire_svg = '<g transform="translate(1.5 1.5)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1c.5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.3 1-3 1.1 1.5 2.5 2 3.5 1.5 1.5-.7 1.5-2.5 1-4-.7-2.1.2-4.1 2.5-6.5z" fill="currentColor"/></g>'
    html = re.sub(dollar_svg_pattern, fire_svg, html, count=1)

    # Step 0 SVG: Replace battery with fan / ventilation rotor icon
    battery_svg_pattern = r'<g transform=\"translate\(0\.25 5\.25\)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2\.75 1\.5C2\.42 1\.5 2\.1 1\.63 1\.87 1\.87C1\.63 2\.1 1\.5 2\.42 1\.5 2\.75V10\.75[\s\S]*?</g>'
    fan_svg = '<g transform="translate(1 1)"><path d="M11 11c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" fill="currentColor" opacity="0.9"/><path d="M11 11c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="currentColor" opacity="0.9"/><path d="M11 11c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" fill="currentColor" opacity="0.9"/><path d="M11 11c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" fill="currentColor" opacity="0.9"/><circle cx="11" cy="11" r="2.5" fill="currentColor"/></g>'
    html = re.sub(battery_svg_pattern, fan_svg, html, count=1)

    # 10. SECTION 4: BCC-WITNESS (DAY/NIGHT COMPARISON)
    html = html.replace('When the grid is up and running:', 'Normal İşletme Şartlarında:')
    html = re.sub(
        r'Base earns by supporting the grid[\s\S]*?improving reliability\.',
        'Akıllı otomasyon sistemleri sayesinde enerji tüketimi minimumda tutulur, frekans invertörlü fanlar taze hava ihtiyacına göre debiyi hassas şekilde otomatik dengeler.',
        html
    )

    html = html.replace('When the grid goes down:', 'Acil Durum &amp; Yoğun Kullanımda:')
    html = re.sub(
        r'Your Base battery automatically backs up your home[\s\S]*?whole-home\s*backup\.',
        'Yangın algılama veya acil durumda sistem anında tahliye moduna geçer; yangın damperlerini kapatıp duman tahliye fanlarını devreye sokarak insan hayatını güvenceye alır.',
        html
    )

    # Witness Press/Media Ticker: Replace with Sky Group client reference logos
    html = html.replace('Featured across national news and media', 'REFERANSLARIMIZ &amp; PROJELERİMİZDEN BAZILARI')
    
    reference_logos_html = """
    <li> <img src="/sm/ambar/r/12.png" alt="Dragon Restaurant" style="--il:0; --ir:0; object-fit:contain; max-height:55px;" width="180" height="70" loading="lazy"> </li>
    <li> <img src="/sm/ambar/r/14.png" alt="ECE Türkiye" style="--il:0; --ir:0; object-fit:contain; max-height:55px;" width="180" height="70" loading="lazy"> </li>
    <li> <img src="/sm/ambar/r/21.png" alt="Köşebaşı" style="--il:0; --ir:0; object-fit:contain; max-height:55px;" width="180" height="70" loading="lazy"> </li>
    <li> <img src="/sm/ambar/r/22.png" alt="İnci Deri" style="--il:0; --ir:0; object-fit:contain; max-height:55px;" width="180" height="70" loading="lazy"> </li>
    <li> <img src="/sm/ambar/r/10.png" alt="Faik Sönmez" style="--il:0; --ir:0; object-fit:contain; max-height:55px;" width="180" height="70" loading="lazy"> </li>
    <li> <img src="/sm/ambar/r/32.png" alt="Tavuk Dünyası" style="--il:0; --ir:0; object-fit:contain; max-height:55px;" width="180" height="70" loading="lazy"> </li>
    """
    html = re.sub(
        r'<ul class=\"bcc-witness-press-row\">\s*<li>[\s\S]*?</ul>',
        f'<ul class="bcc-witness-press-row">{reference_logos_html}</ul>',
        html,
        count=1
    )
    html = re.sub(
        r'<ul class=\"bcc-witness-press-row bcc-witness-press-dupe\" aria-hidden=\"true\">\s*<li>[\s\S]*?</ul>',
        f'<ul class="bcc-witness-press-row bcc-witness-press-dupe" aria-hidden="true">{reference_logos_html}</ul>',
        html,
        count=1
    )

    # Witness toggle
    html = html.replace('aria-label="Grid power"', 'aria-label="Sistem durumu"')
    html = html.replace('<span class="bcc-witness-toggle-label" aria-hidden="true">Grid</span>', '<span class="bcc-witness-toggle-label" aria-hidden="true">Sistem</span>')

    # 11. SECTION 5: BCC-HOW (3 STEPS)
    html = html.replace('<span class="bcc-how-d">How to sign up:</span><span class="bcc-how-m">How to get Base Core for your home:</span>', '<span class="bcc-how-d">Nasıl Çalışıyoruz?</span><span class="bcc-how-m">Projenizi 3 Adımda Hayata Geçirin:</span>')
    html = html.replace('See if Base is available in your area', 'Keşif ve Debi Hesabı')
    html = html.replace('Enter your zip code or select your utility to check if Base is available in your area.', 'Uzman mühendislerimiz projenizi ve hava debisi gereksinimlerinizi yerinde inceleyerek en uygun çözümü projelendirir.')
    html = html.replace('Learn about your plan', 'Fabrika İmalatı &amp; Hazırlık')
    html = html.replace('We’ll show the Base plan available at your address and your price.', 'Kendi modern CNC plazma ve flanş hatlarımızda galvaniz hava kanalları ve santral üniteleri yüksek hassasiyetle imal edilir.')
    html = html.replace('Enjoy affordable reliable power', 'Saha Montajı ve Teslimat')
    html = html.replace('Submit a refundable deposit, send a few photos, and get Base Core installed, delivering backup power and savings.', 'Sertifikalı montaj ekiplerimiz sahada montajı tamamlar, test ve balans ayarlarını yaparak tesisinizi anahtar teslim teslim eder.')
    html = html.replace('See your pricing — jump to the pricing section', 'Hemen Teklif İsteyin')

    # 12. SECTION 6: BCC-FACT (FACTORY TOUR)
    html = html.replace('See Base Factory 1 in action', 'Sky Group İmalat Sahası ve Tesislerimizi İnceleyin')
    html = html.replace('Inside the Base factory: stacked snapshots of battery production behind a knit Base logo patch', 'Sky Group Üretim Tesisi ve İmalat Sahası')

    # 13. SECTION 7: BCC-CREW (ENGINEERING CREW)
    html = html.replace(
        '<h2 class="bcc-crew-head" data-bcc-reveal> Built by a team of <span class="bcc-crew-mark">world-class',
        '<h2 class="bcc-crew-head" data-bcc-reveal> Alanında uzman <span class="bcc-crew-mark">mühendisler'
    )
    html = html.replace(
        '</span> engineers. </h2>',
        '</span> ve deneyimli saha kadrosu. </h2>'
    )
    html = html.replace('<span class="bcc-crew-d">Join our team</span><span class="bcc-crew-m">Join the team</span>', '<span class="bcc-crew-d">Bizimle İletişime Geçin</span><span class="bcc-crew-m">Bizimle İletişime Geçin</span>')

    # 14. SECTION 8: BCC-PRICING (Exact Base Power Company Layout + Interactive Gate Modal from core?base_vid=b20734ae...)
    svg0, svg1, svg2, svg3 = svg_plates.svg_plates

    bcc_pricing_html = f"""<section class="bcc-pricing relative overflow-hidden" id="bcc-pricing" tabindex="-1">
  <div data-bpc-bg="conduit" class="relative w-full px-4 md:px-8 py-16 md:py-24 bg-transparent flex flex-col justify-center min-h-[100svh] supports-[height:100dvh]:min-h-[100dvh]">
    
    <!-- 1. 2-Column Content (Directly Visible & Interactive) -->
    <div id="sky-pricing-content" class="w-full">
      <div class="max-w-[1376px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: The Pricing Card -->
        <div class="order-2 lg:order-none flex justify-center lg:justify-start">
          <div class="w-full max-w-[600px] bg-surface-raised rounded-2xl overflow-hidden flex flex-col shadow hover:shadow-md transition-shadow duration-300 bg-white border border-slate-200/80">
            <div class="flex flex-col gap-4 px-6 pt-5 pb-0">
              
              <!-- Badge & Facility Action -->
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span id="sky-pricing-utility-badge" class="inline-flex items-center font-bold rounded px-2.5 py-1 bg-[#09bde3]/15 text-[#0369a1] text-[11px] sm:text-xs uppercase tracking-wider whitespace-nowrap">
                  ENDÜSTRİYEL TESİS &amp; FABRİKA
                </span>
                
                <div class="relative">
                  <button type="button" id="sky-pricing-facility-toggle" class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0284c7] transition-colors shrink-0 cursor-pointer py-1 px-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50">
                    <span id="sky-pricing-facility-btn-text">Tesis Türünü Seç</span>
                    <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  </button>
                  <div id="sky-pricing-facility-menu" class="hidden absolute right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 z-30 w-64 py-1.5 divide-y divide-slate-100">
                    <div class="p-1">
                      <button type="button" class="sky-pricing-facility-opt w-full px-3 py-2 text-xs text-slate-800 hover:bg-slate-50 hover:text-[#0284c7] font-medium flex items-center justify-between transition-colors cursor-pointer rounded-lg text-left" data-value="ENDÜSTRİYEL TESİS &amp; FABRİKA">
                        <span>Fabrika &amp; Endüstriyel Tesis</span>
                      </button>
                      <button type="button" class="sky-pricing-facility-opt w-full px-3 py-2 text-xs text-slate-800 hover:bg-slate-50 hover:text-[#0284c7] font-medium flex items-center justify-between transition-colors cursor-pointer rounded-lg text-left" data-value="PLAZA &amp; KURUMSAL OFİS">
                        <span>Plaza &amp; Kurumsal Ofis</span>
                      </button>
                      <button type="button" class="sky-pricing-facility-opt w-full px-3 py-2 text-xs text-slate-800 hover:bg-slate-50 hover:text-[#0284c7] font-medium flex items-center justify-between transition-colors cursor-pointer rounded-lg text-left" data-value="SAĞLIK YAPISI &amp; HASTANE">
                        <span>Sağlık Yapısı &amp; Hastane</span>
                      </button>
                      <button type="button" class="sky-pricing-facility-opt w-full px-3 py-2 text-xs text-slate-800 hover:bg-slate-50 hover:text-[#0284c7] font-medium flex items-center justify-between transition-colors cursor-pointer rounded-lg text-left" data-value="AVM &amp; TİCARİ YAŞAM MERKEZİ">
                        <span>AVM &amp; Ticari Yaşam Merkezi</span>
                      </button>
                      <button type="button" class="sky-pricing-facility-opt w-full px-3 py-2 text-xs text-slate-800 hover:bg-slate-50 hover:text-[#0284c7] font-medium flex items-center justify-between transition-colors cursor-pointer rounded-lg text-left" data-value="LOJİSTİK DEPO &amp; ANTREPO">
                        <span>Lojistik Depo &amp; Antrepo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Sky Group Mühendislik Çözümü</h3>

              <!-- Rates / Cost Breakdown Block -->
              <div class="w-full border border-slate-200 rounded-xl flex flex-col gap-3 p-4 bg-slate-50/70">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-slate-600 flex items-center">
                    Doğrudan İmalat Fiyatı
                    <svg width="14" height="14" style="width:14px;height:14px;min-width:14px;min-height:14px;display:inline-block;vertical-align:middle;margin-left:4px;" class="text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-width="2" d="M12 16v-4m0-4h.01"/></svg>
                  </span>
                  <span class="font-bold text-slate-900">Rekabetçi Net Metraj</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-slate-600 flex items-center">
                    Mühendislik &amp; Debi Hesabı
                    <svg width="14" height="14" style="width:14px;height:14px;min-width:14px;min-height:14px;display:inline-block;vertical-align:middle;margin-left:4px;" class="text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-width="2" d="M12 16v-4m0-4h.01"/></svg>
                  </span>
                  <span class="font-bold text-[#0284c7]">+ Ücretsiz Keşif</span>
                </div>
                <div class="h-px w-full bg-slate-200"></div>
                <div class="flex items-baseline justify-between">
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-slate-900">Anahtar Teslim Bütçe</span>
                    <span class="text-xs text-slate-500">DWG Çizimi &amp; Debi Simülasyonu</span>
                  </div>
                  <div class="text-right">
                    <span class="text-xl sm:text-2xl font-extrabold text-slate-900">Doğru Kapasite &amp; Fiyat</span>
                  </div>
                </div>
              </div>

              <!-- Savings Pill -->
              <div class="self-start inline-flex items-center gap-1.5 bg-[#09bde3]/15 text-[#0369a1] px-3 py-1.5 rounded-md text-xs font-bold">
                <span class="w-2 h-2 rounded-full bg-[#09bde3]"></span>
                ~%25'e varan doğrudan imalatçı maliyet avantajı
              </div>

              <!-- Bullet list -->
              <ul role="list" class="flex flex-col gap-2.5 my-1">
                <li class="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <svg width="16" height="16" style="width:16px;height:16px;min-width:16px;min-height:16px;" class="text-slate-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                  <span>Aracısız doğrudan fabrika imalat fiyatı</span>
                </li>
                <li class="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <svg width="16" height="16" style="width:16px;height:16px;min-width:16px;min-height:16px;" class="text-slate-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  <span>EN 1507 Class C galvaniz kanal &amp; TSE EN 1886 klima santrali</span>
                </li>
                <li class="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  <svg width="16" height="16" style="width:16px;height:16px;min-width:16px;min-height:16px;" class="text-slate-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  <span>250+ Başarılı referans ve %100 iş programı sadakati</span>
                </li>
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3 px-6 pt-4 pb-5 border-t border-slate-100 mt-2">
              <button type="button" id="sky-pricing-details-btn" class="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-semibold transition-all text-center cursor-pointer bg-white">
                Şartname Detayları
              </button>
              <a href="#sky-quote-modal" data-sky-modal-trigger="teklif" style="background-color: #09bde3 !important; color: #041628 !important;" class="flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all text-center shadow-sm cursor-pointer hover:opacity-95 flex items-center justify-center">
                Hemen Fiyat Teklifi Alın
              </a>
            </div>

            <!-- Expandable Accordion -->
            <div id="sky-pricing-accordion" class="hidden px-6 pb-5 flex-col gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600 bg-slate-50/50">
              <div class="flex justify-between py-1 border-b border-slate-200/60"><span class="font-medium text-slate-500">Keşif &amp; Debi Simülasyonu</span><span class="font-bold text-slate-800">Ücretsiz (24 Saatte DWG Analizi)</span></div>
              <div class="flex justify-between py-1 border-b border-slate-200/60"><span class="font-medium text-slate-500">Kanal İmalat Standartı</span><span class="font-bold text-slate-800">EN 1507 Class C Galvaniz</span></div>
              <div class="flex justify-between py-1 border-b border-slate-200/60"><span class="font-medium text-slate-500">Klima Santrali Standartı</span><span class="font-bold text-slate-800">TSE EN 1886 • Eurovent • CE</span></div>
              <div class="flex justify-between py-1 border-b border-slate-200/60"><span class="font-medium text-slate-500">Test ve Balans (TAB)</span><span class="font-bold text-slate-800">Anahtar Teslim Dahil</span></div>
              <div class="flex justify-between py-1"><span class="font-medium text-slate-500">Garanti Süresi</span><span class="font-bold text-slate-800">2 Yıl Tam Garanti &amp; 7/24 Servis</span></div>
            </div>
          </div>
        </div>

        <!-- Right Column: Features & Guarantees (Exact Base Power Layout from Image 2) -->
        <div class="flex flex-col gap-8 order-1 lg:order-none">
          <div class="flex flex-col gap-2">
            <span class="inline-flex self-start items-center font-bold rounded px-2.5 py-1 bg-surface-raised text-slate-700 text-xs uppercase tracking-wider">
              MÜHENDİSLİK &amp; FİYATLANDIRMA ESASLARI
            </span>
            <h2 class="font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-[1.2] text-balance">
              Şeffaf Keşif, Metrajlı Şartname ve Doğru Fiyatlandırma.
            </h2>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed mt-1">
              Endüstriyel tesisler, fabrikalar, plazalar ve sağlık yapıları için mimari DWG çizimleri üzerinden debi simülasyonu yapıyor; imalatçı güvencemizle aracı maliyeti olmadan en rekabetçi bütçeyi hazırlıyoruz.
            </p>
          </div>

          <ul role="list" class="flex flex-col gap-6">
            <!-- 1. Debi Hesabı -->
            <li class="flex items-start gap-4">
              {svg0}
              <div class="flex flex-col gap-1">
                <p class="text-base sm:text-lg font-bold text-slate-900">Mühendislik &amp; Debi Hesabı</p>
                <p class="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">Mahal debisi, kanal basınç kayıpları ve ısı yükü simülasyonlarıyla doğru kapasite tespiti.</p>
              </div>
            </li>

            <!-- 2. İmalat -->
            <li class="flex items-start gap-4">
              {svg1}
              <div class="flex flex-col gap-1">
                <p class="text-base sm:text-lg font-bold text-slate-900">Kendi Tesisimizde İmalat</p>
                <p class="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">CNC plazma ve flanş hatlarımızda EN 1507 Class C galvaniz kanal ve klima santrali üretimi.</p>
              </div>
            </li>

            <!-- 3. Saha Montajı -->
            <li class="flex items-start gap-4">
              {svg2}
              <div class="flex flex-col gap-1">
                <p class="text-base sm:text-lg font-bold text-slate-900">Anahtar Teslim Saha Montajı</p>
                <p class="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">Deneyimli şantiye kadrosu, iş programına tam sadakat, test ve balans (TAB) ayarları.</p>
              </div>
            </li>

            <!-- 4. Garanti & Servis -->
            <li class="flex items-start gap-4">
              {svg3}
              <div class="flex flex-col gap-1">
                <p class="text-base sm:text-lg font-bold text-slate-900">2 Yıl Garanti &amp; Servis</p>
                <p class="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">Tüm ekipmanlarda 2 yıl tam garanti, periyodik bakım anlaşmaları ve 7/24 teknik müdahale.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</section>"""
    html = re.sub(
        r'<section class=\"bcc-pricing\" id=\"bcc-pricing\" tabindex=\"-1\">[\s\S]*?(?=<section class=\"bcc-say\")',
        bcc_pricing_html + '\n\n',
        html,
        count=1
    )

    # 15. SECTION 9: BCC-SAY (REVIEWS & TESTIMONIALS)
    html = html.replace(
        '<span class="bcc-say-h1">What members</span> <span class="bcc-say-h2">are saying</span>',
        '<span class="bcc-say-h1">Referanslarımız ve</span> <span class="bcc-say-h2">Müşteri Yorumları</span>'
    )
    html = html.replace('David Kalinec', 'Ahmet Yılmaz - Fabrika Müdürü')
    html = re.sub(
        r'“I recommend switching to BASE power[\s\S]*?Glad I made the switch\.”',
        '“Fabrikamızın 12.000 m² üretim alanının tüm havalandırma kanalları ve santral montajı zamanından önce teslim edildi. Kusursuz mühendislik ve yüksek işçilik kalitesi.”',
        html
    )

    html = html.replace('Carlos Contreras', 'Mehmet Kaya - AVM Tesis Direktörü')
    html = re.sub(
        r'“I have nothing but great things to say about Base Power[\s\S]*?Give it a try!”',
        '“AVM projemizdeki VRF iklimlendirme ve duman tahliye sistemlerinde Sky Group ile çalıştık. Enerji faturalarımızda ciddi tasarruf sağladık, teknik ekipleri çok ilgili.”',
        html
    )

    html = html.replace('Gordon RN', 'Dr. Selin Arslan - Hastane Başhekimi')
    html = re.sub(
        r'“Everyone needs these battery systems![\s\S]*?cpap machine will work all night!”',
        '“Hijyenik klima santrali imalatında gösterdikleri titizlik, sızdırmazlık testleri ve dokümantasyon takibi için Sky Group ekibine teşekkür ederiz.”',
        html
    )

    html = html.replace('Jonathan Sullivan', 'Burak Çelik - Şantiye Şefi')
    html = html.replace(
        '“Totally satisfied with BASE. Great rate for energy, and the battery kicks in seamlessly when the grid goes down. No issues for me. And no generator noise!!”',
        '“Şantiye sürecinde gösterdikleri disiplin, iş güvenliği ve montaj hızı üst düzeydi. Sonraki projelerimizde de kesinlikle birinci tercihimiz olacak.”'
    )

    html = html.replace('Jeff Semler', 'Erdem Koç - Lojistik Merkezi Müdürü')
    html = html.replace(
        '“I&#39;m an early adopter of BASE and love it. I enjoy the peace of mind of knowing a power outage is less of a worry, and the competitive pricing for electricity is the icing on the cake. I couldn&#39;t be happier!”',
        '“Depolama alanlarımızın hava sirkülasyonu ve ısı geri kazanım santralleri tam kapasitede mükemmel çalışıyor. Sıcaklık ve nem kontrolünde sıfır problem yaşadık.”'
    )

    html = html.replace('Angelo V', 'Serdar Özkan - Otel Genel Müdürü')
    html = html.replace(
        '“I just passed my one year anniversary and I love BASE. When I first started with BASE I knew that this would be one of my greatest decisions ever as a homeowner or a terrible decision. I am on cloud nine and couldn’t be happier with the entire BASE experience. I have 100% Peace of Mind as a homeowner. I live in Houston Texas and I have experienced every hurricane here since 1980. I highly recommend BASE to everyone.”',
        '“Otelimizin 180 odasının sessiz klima konforu ve mutfak davlumbaz egzoz filtrasyonundaki başarıları takdire şayan. Konuklarımızdan iklimlendirme konusunda tam not alıyoruz.”'
    )

    # 16. SECTION 10: BCC-SPECS
    html = html.replace('Base Core specs', 'Teknik Özellikler ve Standartlar')
    html = re.sub(r'<h3 class="bcc-specs-gtitle"[^>]*>\s*Power\s*</h3>', '<h3 class="bcc-specs-gtitle" data-bcc-reveal style="--rd:0.06s"> Kapasite &amp; Güç Parametreleri </h3>', html)
    html = re.sub(r'<h3 class="bcc-specs-gtitle"[^>]*>\s*Features\s*</h3>', '<h3 class="bcc-specs-gtitle" data-bcc-reveal style="--rd:0.16s"> Teknik Özellikler &amp; Standartlar </h3>', html)
    html = re.sub(r'<h3 class="bcc-specs-gtitle"[^>]*>\s*Other details\s*</h3>', '<h3 class="bcc-specs-gtitle" data-bcc-reveal style="--rd:0.26s"> Garanti, Servis &amp; Sertifikasyon </h3>', html)

    html = html.replace('Energy Capacity', 'Hava Debisi Aralığı')
    html = html.replace('39.2 kWh total energy', '1.000 - 120.000 m³/h')
    html = html.replace('Reduced usage duration', 'Statik Basınç Dayanımı')
    html = html.replace('Up to 36 hours', '2.500 Pa\'a kadar')
    html = html.replace('AC Voltage (nominal)', 'Soğutma Kapasitesi')
    html = html.replace('120/240 V', '5 kW - 2.500 kW')
    html = html.replace('Grid frequency', 'Isıtma Kapasitesi')
    html = html.replace('60 Hz', '10 kW - 3.000 kW')

    html = html.replace('Size', 'Kanal Yapısı')
    html = html.replace('35.9&quot; H x 30.68&quot; W x 22&quot;', 'Prizmatik &amp; Spiral Galvaniz')
    html = html.replace('Operating temperature', 'Çalışma Sıcaklığı')
    html = html.replace('-22 to 122 °F', '-25°C ile +55°C arası')
    html = html.replace('Noise', 'Ses İzolasyonu')
    html = html.replace('55 dBA (at 1 meter)', '50mm Taşyünü Akustik Panel')
    html = html.replace('Auto-switch', 'Otomasyon Uyum')
    html = html.replace('Seamless (50 milliseconds)', 'BMS / Modbus / BACnet Uyumlu')

    html = html.replace('Lifetime', 'Ekonomik Ömür')
    html = html.replace('12 years', '15+ Yıl Dayanıklı Gövde')
    html = html.replace('Core maintenance', 'Bakım ve Servis')
    html = html.replace(
        'Base handles all service and maintenance for the lifetime of the battery.',
        'Sky Group periyodik bakım anlaşması ve 7/24 teknik servis desteği.'
    )
    html = html.replace('Certifications', 'Sertifikalar')
    html = html.replace(
        'UL 1973, UL 9540, UL 991, UL 1998, UL 1741, IEEE 1547-2003',
        'ISO 9001:2015, CE, TSE EN 1886, DIN 1946-4, EN 12101-3'
    )
    html = html.replace('fill="#ed6c30"', 'fill="#09bde3"')

    # 17. SECTION 11: BCC-FAQ
    html = html.replace('Got questions?', 'Merak Edilenler')
    html = html.replace('We’ve got answers', 'Sıkça Sorulan Sorular')

    # FAQ 1
    html = html.replace('What is Base? What is Base Core?', 'Sky Group hangi alanlarda iklimlendirme ve havalandırma hizmeti sunuyor?')
    html = html.replace(
        'Base is an energy company building a grid for the future so Americans can enjoy affordable, reliable power. We design, build, install, and operate home batteries that back up your home, save your money, and support the grid.',
        'Fabrikalar, endüstriyel tesisler, hastaneler, oteller, alışveriş merkezleri, rezidanslar ve ticari binalar için merkezi klima santralleri (AHU), VRF sistemleri, hava kanalı imalatı, otopark jet fan sistemleri ve duman tahliye projelerinde anahtar teslim hizmet veriyoruz.'
    )
    html = html.replace(
        'Base Core is our next generation home battery, designed from the ground up to support the grid and now in production at Base Factory 1 in Austin. It backs up your whole home, switches over seamlessly when the grid drops, and can withstand conditions from Texas summers and Chicago winters.',
        'Tüm projelerimizde yerinde keşif, debi hesabı, projelendirme, modern CNC hatlarımızda imalat ve uzman şantiye kadromuzla anahtar teslim montaj gerçekleştiriyoruz.'
    )

    # FAQ 2
    html = html.replace('How long will it back me up?', 'Hava kanalı imalatını kendi bünyenizde mi yapıyorsunuz?')
    html = html.replace(
        'Base Core holds 39.2 kWh of energy, which is ~3x the size of typical batteries. How long it lasts depends on how much power you use. A battery stores a fixed amount of energy, so running high-usage devices like A/C drains it faster, just like a bigger hose empties a bucket more quickly.',
        'Evet, kendi modern imalat tesisimizde CNC plazma kesim ve otomatik flanş çakma hatlarıyla yüksek sızdırmazlık sınıfına (EN 1507 Class C) sahip galvaniz, paslanmaz ve kendinden flanşlı hava kanalları üretiyoruz.'
    )
    html = html.replace(
        'At reduced usage, a Base Core can back you up for up to 36 hours. For context, 97% of outages in Texas are less than 2.5 hours long.',
        'Standart kanalların yanı sıra hijyenik klima santrali bağlantı parçaları, susturucular, yangın ve duman damperleri de titizlikle üretilmektedir.'
    )
    html = html.replace(
        'In the case of an extended outage, Core has a built-in generator port that lets you recharge it from a standard portable generator, so you stay powered as long as you have fuel. The Base app shows a real-time estimate of your remaining backup time, at both your current usage and reduced usage.',
        'Yüksek stok kapasitemiz ve seri üretim gücümüz sayesinde büyük ölçekli şantiyelerin kanal ve santral ihtiyaçlarına derhal yanıt verebiliyoruz.'
    )

    # FAQ 3
    html = html.replace('What is the warranty?', 'VRF / VRV sistemlerinin standart klimalara göre avantajı nedir?')
    html = html.replace(
        'You don’t take on the risk of owning or maintaining the hardware. Base retains ownership of the battery for the full term of your agreement, which means we warranty it and handle all service and maintenance, typically within days and at no cost to you. Base covers 100% of maintenance for manufacturing defects, installation defects, and other damage outside your control.',
        'Değişken debili soğutucu akışkan teknolojisiyle sadece o an ihtiyaç duyulan mahallelere enerji harcar. %40’a varan enerji tasarrufu sağlar, her odanın bağımsız kontrol edilmesine imkan tanır ve tek bir dış ünite grubuyla onlarca iç üniteyi çalıştırarak cephe estetiğini korur.'
    )

    # FAQ 4
    html = html.replace('Why is Base significantly less expensive than alternatives?', 'Keşif ve fiyat teklifi süreci nasıl işliyor?')
    html = html.replace(
        'Base’s shared business model is what sets us apart. Instead of charging a high margin, Base earns most of its income from grid support — helping the power grid when it’s under strain.',
        'İletişim kanallarımız veya telefon numaramız üzerinden bize ulaştığınızda, mühendislerimiz projenizin mimari ve mekanik çizimlerini inceler; yerinde keşif yaparak 24 saat içinde detaylı teknik şartname ve metrajlı teklif sunar.'
    )
    html = html.replace(
        'That’s why whole-home backup costs a few hundred dollars upfront instead of tens of thousands for a generator, or the years-long payback of a solar-and-battery system.',
        'Bütçenize ve işletmenizin ihtiyaçlarına en uygun ekipman seçimi yapılarak şeffaf ve detaylı maliyet tablosu paylaşılır.'
    )
    html = html.replace(
        'We also build everything ourselves and pass those savings to you. We design the battery, build it at our factory in Austin, install it with our own electricians, and keep watching over it after that.',
        'İmalatçı firma olmamızın avantajıyla aracı maliyetlerini ortadan kaldırarak sektördeki en rekabetçi fiyatları ve garantili teslim sürelerini sunuyoruz.'
    )

    # FAQ 5
    faq5_replacement = """<details class="bcc-faq-row" data-bcc-reveal style="--rd:0.40s"> <summary class="bcc-faq-q"> <span>Kalite belgeleri ve test standartlarınız nelerdir?</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 bcc-faq-chev" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg> </summary> <div class="bcc-faq-a"> <p class="text-body-lg">Tüm imalat ve montajlarımız ISO 9001:2015, TSE EN 1886 ve EN 12101-3 yangın dayanım standartlarına tam uyumlu olarak gerçekleştirilmektedir.</p><p class="text-body-lg">Hava kanallarımız EN 1507 Class C sızdırmazlık standardında üretilmekte, klima santrallerimiz ise Eurovent sertifikalı bileşenlerle donatılmaktadır.</p><p class="text-body-lg">Tüm mekanik ekipman ve imalatlarımız 2 yıl Sky Group garantisi altındadır. Devreye alma sonrasında periyodik bakım anlaşmaları, filtre değişimleri ve 7/24 acil servis desteği sağlıyoruz.</p> </div> </details>"""
    html = re.sub(
        r'<details class=\"bcc-faq-row\" name=\"bcc-faq\" data-bcc-reveal style=\"--rd:0\.40s\">[\s\S]*?</details>',
        faq5_replacement,
        html,
        count=1
    )
    # Strip name="bcc-faq" so questions stay open independently when clicked
    html = html.replace('name="bcc-faq"', '')

    # 18. SECTION 12: BCC-NF (NIGHTFALL CINEMATIC)
    nf_exact_map = {
        '--ws:0.0500; --wd:0.075': 'Gece',
        '--ws:0.0820; --wd:0.075': 'gündüz,',
        '--ws:0.1140; --wd:0.075': '365',
        '--ws:0.1460; --wd:0.075': 'gün',
        '--ws:0.1780; --wd:0.075': 'kesintisiz,',
        '--ws:0.3400; --wd:0.075': 'taze',
        '--ws:0.3720; --wd:0.075': 'hava',
        '--ws:0.4040; --wd:0.075': 'konforu.',
    }
    for key, turkish_w in nf_exact_map.items():
        html = re.sub(
            r'<span class=\"bcc-nf-word\" style=\"' + re.escape(key) + r'\">[^<]*</span>',
            f'<span class="bcc-nf-word" style="{key}">{turkish_w}</span>',
            html
        )

    html = html.replace('Say hello to affordable &amp; reliable power', 'Doğru İklimlendirme ve Havalandırma Çözümleriyle Geleceğin Tesislerini İnşa Ediyoruz.')
    html = html.replace('Say hello to affordable & reliable power', 'Doğru İklimlendirme ve Havalandırma Çözümleriyle Geleceğin Tesislerini İnşa Ediyoruz.')
    html = re.sub(
        r'Base Core is currently available in Texas and Illinois[\s\S]*?30 seconds\.',
        'Türkiye genelinde endüstriyel ve ticari projelere anahtar teslim mühendislik ve mekanik tesisat hizmeti sunuyoruz.',
        html
    )

    # 19. MAIN FOOTER
    # Footer navigation columns
    html = html.replace('<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">How it works</h2>', '<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">HAVA KANALLARI</h2>')
    html = html.replace('<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">Members</h2>', '<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">ÇÖZÜMLERİMİZ</h2>')
    html = html.replace('<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">Partnerships</h2>', '<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">HİZMETLERİMİZ</h2>')
    html = html.replace('<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">Resources</h2>', '<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">STANDARTLAR</h2>')
    html = html.replace('<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">Company</h2>', '<h2 class="text-body-sm font-medium uppercase tracking-wide text-text-disabled">KURUMSAL</h2>')

    # Footer links
    html = html.replace('>Home energy<', '>VRF İklimlendirme<')
    html = html.replace('>How Base works<', '>Galvaniz Kanal İmalatı<')
    html = html.replace('>Homebuilders<', '>Isı Geri Kazanım (HRV)<')
    html = html.replace('>Installer partners<', '>Yangın Duman Tahliyesi<')
    html = html.replace('>Utilities<', '>Otopark Jet Fan Sistemleri<')
    html = html.replace('>Compare your bill<', '>TSE &amp; CE Standartları<')
    html = html.replace('>Resource hub<', '>Eurovent Şartnamesi<')

    # Footer contact & address
    html = html.replace('205 E Riverside Dr, Suite 100,<br/>Austin, TX 78704', 'İvedik OSB Mah. 1354. Cad. No: 138/6<br/>Yenimahalle / Ankara')
    html = html.replace('205 E Riverside Dr, Suite 100,<br />Austin, TX 78704', 'İvedik OSB Mah. 1354. Cad. No: 138/6<br/>Yenimahalle / Ankara')
    html = html.replace('<p class="font-semibold">Prospective members:</p>', '<p class="font-semibold">Hemen İletişime Geçin:</p>')
    html = html.replace('512-518-1009', '0 (541) 922 19 91')
    html = html.replace('tel:+15125181009', 'tel:+905419221991')
    html = html.replace('team@basepowercompany.com', 'info@skymekanik.com')
    html = html.replace('<p class="font-semibold">Existing members:</p>', '<p class="font-semibold">7/24 Teknik Destek &amp; Servis:</p>')
    html = html.replace('Chat with us from your Base Power app or dashboard', 'Acil servis ve periyodik bakım hattı: 0 (541) 922 19 91')
    html = html.replace('Chat with us from your Sky Group app or dashboard', 'Acil servis ve periyodik bakım hattı: 0 (541) 922 19 91')

    # Replace App store badges with Sky Group certification badges & arrow emblem
    badges_html = """
    <div class="flex flex-col items-start gap-2.5 lg:items-end">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-400/30 text-sky-200 text-xs font-semibold shadow-sm mb-1">
        <img src="/assets/sky-group-logo-arrow.png" alt="Mühendislik & İklimlendirme" class="w-4 h-4 object-contain" width="16" height="16">
        Mühendislik &amp; İklimlendirme Çözümleri
      </div>
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-semibold shadow-sm">
        <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
        TSE EN 1886 Belgeli Üretim
      </div>
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-semibold shadow-sm">
        <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
        ISO 9001:2015 Kalite Güvencesi
      </div>
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-semibold shadow-sm">
        <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
        CE &amp; EN 12101-3 Yangın Dayanımı
      </div>
    </div>
    """
    html = re.sub(
        r'<div class=\"flex flex-col items-start gap-3 lg:items-end\">[\s\S]*?</div>',
        badges_html.strip(),
        html,
        count=1
    )

    # Replace Base Power social links with Sky Group genuine social links
    sky_social_html = """
    <div class="flex items-center gap-[22px] shrink-0">
      <a href="https://www.instagram.com/skymekanik" target="_blank" rel="noopener noreferrer" aria-label="Sky Group Instagram" class="flex items-center justify-center w-5 h-5 hover:text-[#09bde3] transition-colors duration-200 shrink-0 text-text-inverse">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a href="https://www.linkedin.com/company/sky-group-mekanik" target="_blank" rel="noopener noreferrer" aria-label="Sky Group LinkedIn" class="flex items-center justify-center w-5 h-5 hover:text-[#09bde3] transition-colors duration-200 shrink-0 text-text-inverse">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
      <a href="https://wa.me/905419221991" target="_blank" rel="noopener noreferrer" aria-label="Sky Group WhatsApp" class="flex items-center justify-center w-5 h-5 hover:text-emerald-400 transition-colors duration-200 shrink-0 text-text-inverse">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </a>
      <a href="https://www.facebook.com/skymekanik" target="_blank" rel="noopener noreferrer" aria-label="Sky Group Facebook" class="flex items-center justify-center w-5 h-5 hover:text-[#09bde3] transition-colors duration-200 shrink-0 text-text-inverse">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a href="tel:+905419221991" aria-label="Sky Group Telefon" class="flex items-center justify-center w-5 h-5 hover:text-[#09bde3] transition-colors duration-200 shrink-0 text-text-inverse">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
    """
    html = re.sub(
        r'<div class=\"flex items-center gap-\[22px\] shrink-0\">[\s\S]*?</div>\s*</div>\s*<svg viewBox=\"0 0 1389',
        sky_social_html.strip() + '</div>\n<svg viewBox="0 0 1389',
        html,
        count=1
    )

    # Replace giant footer watermark SVG from "BASE" to "SKY GROUP"
    sky_watermark_svg = """
    <svg viewBox="0 0 1389 220" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto select-none pointer-events-none" aria-hidden="true">
      <text x="50%" y="70%" text-anchor="middle" dominant-baseline="middle" font-family="'Inter', system-ui, -apple-system, sans-serif" font-weight="900" font-size="180" fill="currentColor" opacity="0.14" letter-spacing="14">SKY GROUP</text>
    </svg>
    """
    html = re.sub(
        r'<svg viewBox=\"0 0 1389 290\"[\s\S]*?</svg>',
        sky_watermark_svg.strip(),
        html,
        count=1
    )

    # Legal compliance block with Sky Group primary logo
    sky_legal_html = """
    <div class="text-body-sm text-text-disabled max-w-3xl space-y-3">
      <div class="flex items-center gap-3 pb-1">
        <img src="/assets/sky-group-logo-s.png" alt="Sky Group" class="h-10 w-10 object-contain drop-shadow" width="40" height="40">
        <span class="text-2xl font-black tracking-tight text-white">SKY <span class="text-[#09bde3]">GROUP</span></span>
      </div>
      <p><strong class="font-semibold text-text-disabled">Sky Group İklimlendirme ve Havalandırma Sistemleri San. ve Tic. Ltd. Şti.</strong></p>
      <p>Tüm mekanik tesisat ve hava kanalı imalatlarımız TSE EN 1886, DIN 1946-4, EN 12101-3 ve Eurovent standartlarına tam uyumludur.</p>
      <p>Ankara Merkez: İvedik OSB Mah. 1354. Cad. No: 138/6 Yenimahalle / Ankara | Tel: 0 (541) 922 19 91 | E-Posta: info@skymekanik.com</p>
      <p>Sky Group; modern CNC plazma makineleri, otomatik kanal ve flanş hatları ile donatılmış fabrikasında yüksek kapasiteli üretim gerçekleştirmektedir.</p>
      <p>Projelerinize özel mühendislik hesaplamaları, debi simülasyonları ve anahtar teslim montaj hizmeti ile Türkiye genelinde hizmetinizdeyiz.</p>
      <p>© 2026 Sky Group. Tüm hakları saklıdır. Görseller ve katalog içerikleri telif hakkı koruması altındadır.</p>
      <div class="flex flex-wrap gap-x-4 gap-y-3 pt-2">
        <a href="/gizlilik-politikasi" class="underline underline-offset-2 hover:text-text-inverse transition-colors duration-200">Gizlilik Politikası</a>
        <a href="/kvkk" class="underline underline-offset-2 hover:text-text-inverse transition-colors duration-200">KVKK Aydınlatma Metni</a>
        <a href="/kalite-standartlari" class="underline underline-offset-2 hover:text-text-inverse transition-colors duration-200">Kalite Standartlarımız</a>
        <a href="tel:+905419221991" class="underline underline-offset-2 hover:text-text-inverse transition-colors duration-200">Teknik Destek Hattı</a>
        <a href="/katalog" class="underline underline-offset-2 hover:text-text-inverse transition-colors duration-200">Ürün &amp; Hizmet Kataloğu</a>
      </div>
    </div>
    """
    html = re.sub(
        r'<div class=\"text-body-sm text-text-disabled max-w-3xl space-y-1\.5\">[\s\S]*?</div>\s*</div>',
        sky_legal_html.strip() + '\n</div>',
        html,
        count=1
    )

    html = html.replace('Built in Austin, TX', 'Sky Group © 2026 | Ankara &amp; İstanbul, Türkiye')

    # Replace AICPA SOC badge with TSE & CE badge
    html = html.replace(
        '<img src="/_bpc/assets/badges/aicpa-soc.png" alt="AICPA SOC for Service Organizations" class="w-24 h-auto" loading="lazy"/>',
        '<div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white font-bold text-xs tracking-wider shadow-sm"><span class="text-[#09bde3]">TSE</span> EN 1886 &bull; CE</div>'
    )
    # Replace small Base circular logo near footer copyright with Sky Group logo
    html = re.sub(
        r'<div class=\"w-7\"><svg viewBox=\"0 0 380 380\"[\s\S]*?</svg></div>',
        '<div class="w-8 h-8"><img src="/assets/sky-group-logo-s.png" alt="Sky Group" class="w-full h-full object-contain" width="32" height="32"></div>',
        html,
        count=1
    )

    # Clean any leftover generic "Base Power" / "Base Core" instances
    html = html.replace('Base Power Company', 'Sky Group')
    html = html.replace('Base Power, Inc', 'Sky Group Mühendislik')
    html = html.replace('Base Power', 'Sky Group')
    html = html.replace('Base Core', 'Sky Group')
    html = html.replace('#1e4d2b', '#061527')
    html = html.replace('#1e4d2b8c', '#0615278c')

    # Clean leftover English buttons and links
    html = html.replace('> See your pricing <', '> Hemen Fiyat Teklifi Alın <')
    html = html.replace('>See your pricing<', '>Hemen Fiyat Teklifi Alın<')
    html = html.replace('>Get started<', '>Keşif Talebi Oluşturun<')
    html = html.replace('href="https://account.basepowercompany.com/sign-in"', 'href="tel:+905419221991"')
    html = html.replace('href="https://help.basepowercompany.com/en/"', 'href="tel:+905419221991"')
    html = html.replace('href="https://help.basepowercompany.com"', 'href="tel:+905419221991"')
    html = html.replace('https://charge.basepowercompany.com', 'https://skymekanik.com')
    html = html.replace('https://www.basepowercompany.com/core.md', '')
    html = html.replace('https://www.basepowercompany.com/core', 'https://skymekanik.com')

    # Translate remaining image alt texts
    html = html.replace(
        'alt="A snow-covered Texas farmhouse with every window lit and a Core battery on the wall"',
        'alt="Sky Group Dört Mevsim Dayanıklı İklimlendirme ve Havalandırma Sistemleri"'
    )
    html = html.replace(
        'alt="A snow-covered Texas farmhouse with every window lit and a Core battery on the porch"',
        'alt="Sky Group Isı Geri Kazanım Cihazları ve Tesisat Montajı"'
    )
    html = html.replace(
        'alt="A hand resting on the lid of a Core battery beside a planted trellis"',
        'alt="Sky Group Yangın ve Duman Tahliye Fan Sistemleri"'
    )
    html = html.replace(
        'alt="Two Base electricians wiring a home\'s meter panel during an install"',
        'alt="Sky Group Uzman Teknik Ekipleri ve Saha Montajı"'
    )
    html = html.replace(
        'alt="A Base technician servicing the top panel of a Sky Group battery"',
        'alt="Sky Group Periyodik Bakım ve Teknik Servis Hizmetleri"'
    )
    html = html.replace(
        'alt="A Texas suburb at night under a starry sky, every house dark except one with its windows lit"',
        'alt="Sky Group Kesintisiz Çalışan Endüstriyel Tesisat ve Havalandırma Sistemleri"'
    )
    html = html.replace(
        'alt="A Texas suburb at night under a starry sky, every house dark except one with warm light from a Core battery"',
        'alt="Sky Group Gece Boyu Kesintisiz Çalışan Endüstriyel Tesisat ve Havalandırma"'
    )
    html = html.replace(
        'alt="Illustration of a home with an orange roof on a sunny day, its Base battery beside the wall and a power pole carrying energy to the grid"',
        'alt="Sky Group Normal İşletme Şartlarında İklimlendirme ve Taze Hava Dağıtımı"'
    )
    html = html.replace(
        'alt="Illustration of the same home at night under a stormy sky during an outage, windows glowing warm on Base battery backup"',
        'alt="Sky Group Acil Durum Duman Tahliye ve Otomasyon Sistemi Devrede"'
    )
    html = html.replace(
        'alt="A Sky Group home battery installed against a garden wall"',
        'alt="Sky Group Standart ve Hijyenik Klima Santrali Montajı"'
    )
    html = html.replace(
        'alt="A Base battery installed against a garden wall"',
        'alt="Sky Group Standart ve Hijyenik Klima Santrali Montajı"'
    )
    html = html.replace(
        'alt="A Base technician kneeling beside a Core battery at a brick wall, opening its top panel"',
        'alt="Sky Group VRF / VRV İklimlendirme Dış Ünite Sistemleri"'
    )
    html = html.replace(
        'alt="A Base customer talking with a Base team member beside their Sky Group battery"',
        'alt="Sky Group Uzman Mühendislik Kadrosu ve Saha Danışmanlığı"'
    )
    html = html.replace(
        'alt="A Base technician installing a battery on a brick wall in winter, breathing steam into the cold air"',
        'alt="Sky Group Isı Geri Kazanım Cihazları ve Tesisat Montajı"'
    )
    html = html.replace(
        'alt="A gloved hand pointing to the high-voltage connections inside an open Core battery"',
        'alt="Sky Group Yangın ve Duman Tahliye Fan Sistemleri"'
    )

    # RESTORE ALL PROTECTED STYLES
    for idx, s in enumerate(styles):
        html = html.replace(f"<!-- __STYLE_PLACEHOLDER_{idx}__ -->", s)

    # Mega-menu, Mobile Drawer, Quote Modal and Global Button interactivity script right before </body>
    # Sky Group Fiyat Teklifi & Keşif Talebi Modal (Refined Swiss Corporate Light Theme)
    sky_modal_html = """
    <!-- Sky Group Fiyat Teklifi & Keşif Talebi Modal -->
    <div id="sky-quote-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="modal-card relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-7 text-slate-800 max-h-[92vh] overflow-y-auto">
        <!-- Close Button -->
        <button type="button" id="sky-modal-close" class="absolute top-3.5 right-3.5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer" aria-label="Kapat">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        
        <!-- Header -->
        <div class="flex items-center gap-3 mb-2.5">
          <div class="w-10 h-10 rounded-xl bg-[#061527] flex items-center justify-center p-2 shadow-sm shrink-0">
            <img src="/assets/sky-group-logo-s.png" alt="Sky Group" class="w-full h-full object-contain" width="40" height="40">
          </div>
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#0284c7] block">Mühendislik &amp; Projelendirme</span>
            <h3 class="text-lg sm:text-xl font-bold tracking-tight text-[#061527]">Ücretsiz Keşif &amp; Fiyat Teklifi</h3>
          </div>
        </div>
        
        <p class="text-xs text-slate-600 mb-3 leading-relaxed">
          Mimari ve mekanik detaylarınızı iletin; uzman mühendislerimiz 24 saat içinde yerinde keşif ve metrajlı teknik şartnamenizi hazırlasın.
        </p>

        <!-- Form -->
        <form id="sky-quote-form" class="space-y-2.5 sm:space-y-3">
          <div>
            <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Ad Soyad / Firma Adı *</label>
            <input type="text" name="name" required placeholder="Örn: Ahmet Yılmaz / ABC İnşaat A.Ş." class="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Telefon Numarası *</label>
              <input type="tel" name="phone" required placeholder="0 (5XX) XXX XX XX" class="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
            </div>
            <div>
              <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">E-Posta Adresi</label>
              <input type="email" name="email" placeholder="ornek@firma.com" class="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Proje / Tesis Türü</label>
              <select name="type" class="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
                <option value="Fabrika & Endüstriyel Tesis">Fabrika &amp; Endüstriyel Tesis</option>
                <option value="Ticari Yapı & Plaza">Ticari Yapı &amp; Plaza</option>
                <option value="Hastane & Temiz Oda">Hastane &amp; Temiz Oda</option>
                <option value="AVM & Sosyal Tesis">AVM &amp; Sosyal Tesis</option>
                <option value="Otel & Konut Projesi">Otel &amp; Konut Projesi</option>
                <option value="Diğer Mekanik Tesisat">Diğer Mekanik Tesisat</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">İlgilenilen Sistem</label>
              <select name="system" class="w-full px-3 py-2 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
                <option value="Merkezi Klima Santralleri (AHU)">Klima Santralleri (AHU)</option>
                <option value="Hava Kanalı İmalatı">Hava Kanalı İmalatı</option>
                <option value="VRV / VRF İklimlendirme">VRV / VRF İklimlendirme</option>
                <option value="Yangın & Duman Tahliye">Yangın &amp; Duman Tahliyesi</option>
                <option value="Isı Geri Kazanım Cihazları (HRV)">Isı Geri Kazanım (HRV)</option>
                <option value="Komple Mekanik Tesisat">Komple Anahtar Teslim Tesisat</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Proje Notu / Metraj / Talebiniz</label>
            <textarea name="notes" rows="2" placeholder="Projenizin debisi, m² bilgisi veya özel taleplerinizi iletebilirsiniz..." class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all resize-none font-medium"></textarea>
          </div>

          <button type="submit" style="background-color: #09bde3 !important; color: #040e1a !important;" class="w-full py-2.5 sm:py-3.5 px-4 rounded-lg font-bold text-sm sm:text-base hover:opacity-95 transition-opacity shadow-md flex items-center justify-center gap-2 cursor-pointer mt-1">
            <span>Teklif Talebini Gönder</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>

          <!-- Success Notice -->
          <div id="sky-form-success" class="hidden p-3 sm:p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm text-center font-medium">
            ✓ <strong>Talebiniz Başarıyla Alındı!</strong><br>Uzman mühendislerimiz en geç 24 saat içinde sizinle iletişime geçecektir.
          </div>
        </form>

        <!-- Quick Direct Contact -->
        <div class="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span>🔒 Bilgileriniz gizli tutulur</span>
          <div class="flex items-center gap-3">
            <a href="https://wa.me/905419221991" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1">
              WhatsApp
            </a>
            <span class="text-slate-300">•</span>
            <a href="tel:+905419221991" class="text-[#09bde3] hover:underline font-bold flex items-center gap-1">
              0 (541) 922 19 91
            </a>
          </div>
        </div>
      </div>
    </div>
    """

    nav_interactive_js = sky_modal_html + """
<script>
  (function() {
    // 1. Dropdown Mega-Menu sheet interactivity (Desktop)
    const sheet = document.querySelector('.bpc-nav-sheet');
    const desktopLinks = document.querySelectorAll('nav ul a[aria-controls^="fullnav-panel"], nav ul button[aria-controls^="fullnav-panel"]');
    const panes = document.querySelectorAll('.bpc-nav-pane');
    let activeLink = null;

    function closeNav() {
      if (sheet) {
        sheet.setAttribute('data-open', 'false');
      }
      desktopLinks.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.classList.remove('bg-white/10');
      });
      panes.forEach(p => {
        p.setAttribute('data-active', 'false');
        p.setAttribute('inert', '');
      });
      activeLink = null;
    }

    // Transparent navbar scroll transition
    const nav = document.querySelector('.bcc-topnav nav') || document.getElementById('main-navbar');
    if (nav) {
      nav.id = 'main-navbar';
      window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        closeNav();
      }, { passive: true });
    }

    desktopLinks.forEach(link => {
      const targetId = link.getAttribute('aria-controls');
      const pane = document.getElementById(targetId);

      // On desktop hover, show the mega-menu sheet
      link.addEventListener('mouseenter', function() {
        if (window.innerWidth >= 1024) {
          closeNav();
          if (sheet) {
            sheet.setAttribute('data-open', 'true');
          }
          link.setAttribute('aria-expanded', 'true');
          link.classList.add('bg-white/10');
          if (pane) {
            pane.setAttribute('data-active', 'true');
            pane.removeAttribute('inert');
          }
          activeLink = link;
        }
      });

      // If it is a button (fallback), allow toggling on click
      if (link.tagName === 'BUTTON') {
        link.addEventListener('click', function(e) {
          e.stopPropagation();
          if (activeLink === link && sheet && sheet.getAttribute('data-open') === 'true') {
            closeNav();
          } else {
            closeNav();
            if (sheet) sheet.setAttribute('data-open', 'true');
            link.setAttribute('aria-expanded', 'true');
            link.classList.add('bg-white/10');
            if (pane) {
              pane.setAttribute('data-active', 'true');
              pane.removeAttribute('inert');
            }
            activeLink = link;
          }
        });
      }
      // If it is an <a> tag, do not intercept click so browser navigates to href!
    });

    if (sheet) {
      // Close when clicking navigation links inside the sheet
      sheet.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          closeNav();
        });
      });
    }

    const topnav = document.querySelector('.bcc-topnav');
    if (topnav) {
      topnav.addEventListener('mouseleave', function() {
        if (window.innerWidth >= 1024) {
          closeNav();
        }
      });
    }

    // 2. Mobile Burger Drawer Logic
    const burgerBtn = document.getElementById('sky-burger-btn');
    const drawer = document.getElementById('sky-mobile-drawer');
    const iconOpen = document.getElementById('sky-burger-icon-open');
    const iconClose = document.getElementById('sky-burger-icon-close');

    function toggleMobileMenu(forceClose) {
      if (!drawer || !burgerBtn) return;
      const willClose = forceClose === true || drawer.classList.contains('active');
      if (willClose) {
        drawer.classList.remove('active');
        burgerBtn.setAttribute('aria-expanded', 'false');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
        document.body.style.overflow = '';
      } else {
        closeNav();
        drawer.classList.add('active');
        burgerBtn.setAttribute('aria-expanded', 'true');
        if (iconOpen) iconOpen.classList.add('hidden');
        if (iconClose) iconClose.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    if (burgerBtn && drawer) {
      burgerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
      });

      // Close when clicking any link inside the mobile drawer
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          toggleMobileMenu(true);
        });
      });
    }

    document.addEventListener('click', function(e) {
      if (topnav && !topnav.contains(e.target) && (!drawer || !drawer.contains(e.target))) {
        closeNav();
        toggleMobileMenu(true);
      }
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth >= 1024) {
        toggleMobileMenu(true);
      }
    });

    // 3. Sky Group Quotation & Inquiry Modal Logic
    const quoteModal = document.getElementById('sky-quote-modal');
    const modalCloseBtn = document.getElementById('sky-modal-close');
    const quoteForm = document.getElementById('sky-quote-form');

    function openQuoteModal(context) {
      if (!quoteModal) return;
      closeNav();
      toggleMobileMenu(true);

      quoteModal.classList.add('active');
      quoteModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const noteField = quoteModal.querySelector('textarea');
      if (context === 'katalog') {
        if (noteField) noteField.value = '2026 Sky Group Ürün ve Hizmet Kataloğunun e-posta adresime gönderilmesini rica ederim.';
      } else if (context === 'kesif') {
        if (noteField) noteField.value = 'Projemiz için yerinde ücretsiz mühendislik keşfi ve debi hesabı talep ediyoruz.';
      } else if (context === 'iletisim') {
        if (noteField) noteField.value = 'Sky Group mühendislik ekibi ile teknik görüşme ve proje danışmanlığı talep ediyoruz.';
      } else if (typeof context === 'string' && context.length > 0 && context !== 'teklif') {
        if (noteField) noteField.value = context;
      }
    }

    function closeQuoteModal() {
      if (!quoteModal) return;
      quoteModal.classList.remove('active');
      quoteModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeQuoteModal);
    }
    if (quoteModal) {
      quoteModal.addEventListener('click', function(e) {
        if (e.target === quoteModal) {
          closeQuoteModal();
        }
      });
    }
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeQuoteModal();
        closeNav();
        toggleMobileMenu(true);
      }
    });

    // Hook up all modal triggers across the entire page
    const modalTriggerSelectors = [
      '[data-sky-modal-trigger]',
      '[data-bcc-pricing-modal]',
      'a[href*="/get-started"]',
      'a[href*="/waitlist"]',
      'a[href*="/careers"]',
      'a[href="#sky-quote-modal"]'
    ];
    document.querySelectorAll(modalTriggerSelectors.join(',')).forEach(el => {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const context = el.getAttribute('data-sky-modal-trigger') || '';
        openQuoteModal(context);
      });
    });

    // Also hook up any remaining buttons that have "Teklif" or "Keşif"
    document.querySelectorAll('button').forEach(btn => {
      const text = btn.innerText.trim();
      if ((text.includes('Teklif') || text.includes('Keşif')) && !btn.id && !btn.getAttribute('data-bcc-core-rain-trigger')) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          openQuoteModal('teklif');
        });
      }
    });

    // Form submit simulation with instant feedback
    if (quoteForm) {
      quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const successBanner = document.getElementById('sky-form-success');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Gönderiliyor...</span>';
        }
        setTimeout(() => {
          if (submitBtn) submitBtn.style.display = 'none';
          if (successBanner) successBanner.classList.remove('hidden');
          setTimeout(() => {
            closeQuoteModal();
            setTimeout(() => {
              quoteForm.reset();
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.display = 'flex';
                submitBtn.innerHTML = '<span>Teklif Talebini Gönder</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>';
              }
              if (successBanner) successBanner.classList.add('hidden');
            }, 400);
          }, 3000);
        }, 700);
      });
    }

    // 4. Pricing Accordion & Facility Menu Interactivity
    const facilityToggleBtn = document.getElementById('sky-pricing-facility-toggle');
    const facilityMenu = document.getElementById('sky-pricing-facility-menu');
    const facilityBadge = document.getElementById('sky-pricing-utility-badge');
    const detailsBtn = document.getElementById('sky-pricing-details-btn');
    const accordion = document.getElementById('sky-pricing-accordion');

    if (facilityToggleBtn && facilityMenu) {
      facilityToggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        facilityMenu.classList.toggle('hidden');
      });

      document.querySelectorAll('.sky-pricing-facility-opt').forEach(opt => {
        opt.addEventListener('click', function() {
          const val = this.getAttribute('data-value');
          if (facilityBadge && val) facilityBadge.textContent = val;
          facilityMenu.classList.add('hidden');
        });
      });

      document.addEventListener('click', function(e) {
        if (!facilityMenu.contains(e.target) && !facilityToggleBtn.contains(e.target)) {
          facilityMenu.classList.add('hidden');
        }
      });
    }

    if (detailsBtn && accordion) {
      detailsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const isHidden = accordion.classList.contains('hidden');
        if (isHidden) {
          accordion.classList.remove('hidden');
          accordion.classList.add('flex');
          detailsBtn.textContent = 'Şartnameyi Gizle';
          detailsBtn.classList.add('bg-slate-100');
        } else {
          accordion.classList.add('hidden');
          accordion.classList.remove('flex');
          detailsBtn.textContent = 'Şartname Detayları';
          detailsBtn.classList.remove('bg-slate-100');
        }
      });
    }

    // 4. Smooth Scrolling for all hash anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const hash = this.getAttribute('href');
        if (!hash || hash === '#' || hash === '#sky-quote-modal') return;

        const targetStep = this.getAttribute('data-target-step');
        if (targetStep !== null) {
          const stepIdx = parseInt(targetStep, 10);
          const stops = document.querySelectorAll('#bcc-bp .bcc-bp-stop[style*="--at"]');
          if (stops && stops[stepIdx]) {
            e.preventDefault();
            closeNav();
            toggleMobileMenu(true);
            stops[stepIdx].scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }

        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          closeNav();
          toggleMobileMenu(true);
          const navH = 64;
          const rect = target.getBoundingClientRect();
          const targetTop = rect.top + window.pageYOffset - navH;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Logo click smooth scroll to top
    document.querySelectorAll('a[href="/"], .sky-brand-logo').forEach(logo => {
      logo.addEventListener('click', function(e) {
        if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
          e.preventDefault();
          closeNav();
          toggleMobileMenu(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // 6. Witness Day/Night Switch Interactivity
    const witnessToggle = document.querySelector('.bcc-witness-toggle');
    const witnessSwitch = document.querySelector('.bcc-witness-switch');
    if (witnessToggle && witnessSwitch) {
      witnessToggle.addEventListener('click', function(e) {
        if (e.target !== witnessSwitch) {
          witnessSwitch.checked = !witnessSwitch.checked;
          witnessSwitch.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }

    // 7. Fact Section Video Controls (Sound, Replay, Fullscreen)
    const soundBtn = document.querySelector('[data-bcc-fact-sound]');
    const replayBtn = document.querySelector('[data-bcc-fact-replay]');
    const fsBtn = document.querySelector('[data-bcc-fact-fs]');
    const factVideo = document.querySelector('[data-bcc-fact-video]');

    if (soundBtn) {
      soundBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const pressed = soundBtn.getAttribute('aria-pressed') === 'true';
        soundBtn.setAttribute('aria-pressed', String(!pressed));
        if (factVideo) {
          factVideo.muted = pressed;
        }
      });
    }
    if (replayBtn) {
      replayBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (factVideo) {
          factVideo.currentTime = 0;
          factVideo.play();
        }
      });
    }
    if (fsBtn) {
      fsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetEl = document.querySelector('.bcc-fact-box') || factVideo;
        if (targetEl) {
          if (!document.fullscreenElement) {
            targetEl.requestFullscreen?.() || targetEl.webkitRequestFullscreen?.();
          } else {
            document.exitFullscreen?.();
          }
        }
      });
    }

    // 8. Specs Core Rain Capacity Trigger
    const rainTrigger = document.querySelector('[data-bcc-core-rain-trigger]');
    if (rainTrigger) {
      rainTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        openQuoteModal('Klima Santralleri (AHU) - 1.000 - 120.000 m³/h Özel Debi ve Kapasite Talebi');
      });
    }

    // 9. Stress Chips interactivity
    document.querySelectorAll('.bcc-chip').forEach(chip => {
      chip.style.cursor = 'pointer';
      chip.addEventListener('click', function() {
        const text = this.innerText.trim();
        openQuoteModal(text + ' İklimlendirme ve Havalandırma Çözümü');
      });
    });

    // 10. Sıkça Sorulan Sorular (FAQ) Accordion with smooth animation (stays open when clicked)
    document.querySelectorAll('.bcc-faq-row').forEach(row => {
      row.removeAttribute('name');
      const summary = row.querySelector('.bcc-faq-q');
      const answer = row.querySelector('.bcc-faq-a');
      if (!summary || !answer) return;

      answer.style.overflow = 'hidden';
      answer.style.transition = 'max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease, padding 0.35s cubic-bezier(0.22, 1, 0.36, 1)';

      if (row.hasAttribute('open')) {
        row.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 60 + 'px';
        answer.style.opacity = '1';
        answer.style.paddingBottom = '24px';
      } else {
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.style.paddingBottom = '0px';
      }

      summary.addEventListener('click', function(e) {
        e.preventDefault();
        const isOpen = row.hasAttribute('open');

        if (isOpen) {
          // Collapse smoothly
          answer.style.maxHeight = answer.scrollHeight + 60 + 'px';
          answer.offsetHeight; // reflow
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
          answer.style.paddingBottom = '0px';
          row.classList.remove('is-open');
          setTimeout(() => {
            row.removeAttribute('open');
          }, 350);
        } else {
          // Expand smoothly and STAY OPEN ("bastın mı açık kalsın")
          row.setAttribute('open', '');
          row.classList.add('is-open');
          answer.style.paddingBottom = '24px';
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
          answer.offsetHeight; // reflow
          answer.style.maxHeight = answer.scrollHeight + 60 + 'px';
          answer.style.opacity = '1';
        }
      });
    });
  })();
</script>
"""
    html = html.replace('</body>', nav_interactive_js + '\n</body>', 1)

    # RESTORE ALL PROTECTED SCRIPTS
    for idx, s in enumerate(scripts):
        html = html.replace(f"<!-- __SCRIPT_PLACEHOLDER_{idx}__ -->", s)

    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"Faithfully rebuilt {out_path} ({len(html)} bytes) with exact Base Power Company layout preserved!")
    
    # Also generate the Referanslar page and all other Swiss showcase pages
    try:
        import build_referanslar
        build_referanslar.generate_referanslar()
        import build_all_pages
        build_all_pages.build_urunlerimiz()
        build_all_pages.build_cozumlerimiz()
        build_all_pages.build_hizmetlerimiz()
        build_all_pages.build_kurumsal()
        build_all_pages.update_referanslar()
        build_all_pages.update_index()
    except Exception as e:
        print(f"Error generating pages: {e}")

if __name__ == '__main__':
    build_faithful_site()


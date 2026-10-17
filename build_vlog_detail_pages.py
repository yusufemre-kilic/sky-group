#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for individual Vlog / Case Study Detail Pages for all:
  - Referanslar (Projects) -> proje-*.html
  - Ürünlerimiz (Products) -> urun-*.html
  - Çözümlerimiz (Solutions) -> cozum-*.html
  - Hizmetlerimiz (Services) -> hizmet-*.html
  - Kurumsal (Corporate Articles) -> kurumsal-*.html

Design follows 100% Swiss / Base Power Company design system:
  - Exact transparent frosted topnav with mega menu & mobile drawer
  - Minimalist breadcrumb back link
  - Category, location & engineering badges
  - Clean typography: dark navy titles (#061527), slate-600 body, #09bde3 / #0284c7 accents
  - Full-width hero photo with architectural caption
  - 2-Column Vlog layout:
      Left (65%): Challenge narrative, 4-step engineering execution, detail photo gallery, performance outcomes
      Right (35%): Sticky technical data table, standards badges, contact/quote CTA card
  - 3 Related items grid (NO ARROWS)
  - Exact dark footer with social links & contact
  - Quote modal integrated with pre-filled title
"""

import os
import re
import unicodedata

BASE_DIR = '/home/emre/Desktop/sky-group-new'

def slugify(text, prefix=""):
    tr_map = {
        'ı': 'i', 'I': 'i', 'İ': 'i',
        'ğ': 'g', 'Ğ': 'g',
        'ü': 'u', 'Ü': 'u',
        'ş': 's', 'Ş': 's',
        'ö': 'o', 'Ö': 'o',
        'ç': 'c', 'Ç': 'c'
    }
    for k, v in tr_map.items():
        text = text.replace(k, v)
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r'[^\w\s-]', '', text.lower()).strip()
    slug = re.sub(r'[-\s]+', '-', text)
    if prefix:
        return f"{prefix}-{slug}"
    return slug

def extract_base_components():
    with open(os.path.join(BASE_DIR, 'referanslar.html'), 'r', encoding='utf-8') as f:
        html = f.read()

    start = html.find('<div class="bcc-topnav-fixed">')
    end = html.find('<!-- ================= HERO SHOWCASE ================= -->')
    if end == -1:
        end = html.find('<main')
    topnav_html = html[start:end].strip()

    footer_start = html.find('<footer class="bcc-footer')
    if footer_start == -1:
        footer_start = html.find('<footer')
    modal_pos = html.find('<!-- Sky Group Fiyat Teklifi')
    if modal_pos == -1:
        modal_pos = html.find('<div id="sky-quote-modal"')
    footer_html = html[footer_start:modal_pos].strip()

    from build_pages_core import MODAL_HTML
    return topnav_html, footer_html, MODAL_HTML

def escape_html(text):
    if not text:
        return ""
    s = str(text)
    s = s.replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')
    s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    return s

def render_vlog_page(item, back_url, back_label, related_items, topnav_html, footer_html, modal_html):
    title = item['title']
    category = item.get('category_label', item.get('badge_cat', 'Mühendislik'))
    location = item.get('location', item.get('badge_loc', 'Türkiye'))
    specs = item.get('specs', 'Yüksek Verimli Mühendislik Altyapısı')
    image = item['image']
    desc = item.get('desc', '')
    slug = item['slug']

    challenge = item.get('challenge', f"""
{title} kapsamında mekanik iklimlendirme ve havalandırma altyapısının projelendirilmesinde mahal mimarisi, hava sirkülasyon ihtiyacı ve enerji verimliliği öncelikli kriterler olarak belirlenmiştir. Mahalde homojen hava dağılımının sağlanması, ses seviyesinin minimum düzeyde tutulması ve şartnamelere tam uygunluk hedeflenmiştir.
""")
    execution = item.get('execution', f"""
Sky Group mühendislik ekibi tarafından mimari DWG çizimleri üzerinde debi ve sürtünme kaybı simülasyonları gerçekleştirilmiştir. Kendi tesislerimizde modern CNC hatlarında üretilen galvaniz ve spiral hava kanalları, TSE EN 1507 Class C standardında yüksek sızdırmazlıkla imal edilmiş ve sahada uzman şantiye kadromuzla montajı tamamlanmıştır.
""")
    results = item.get('results', [
        "Homojen taze hava dağılımı ve yüksek iç hava kalitesi (IAQ)",
        "Sıfır ses kriterine uygun akustik susturuculu hava hatları",
        "TSE EN 1886 ve Eurovent standartlarına tam uygunluk",
        "2 yıl Sky Group üretici garantisi ve periyodik servis desteği"
    ])

    title_clean = escape_html(title)
    category_clean = escape_html(category)
    location_clean = escape_html(location)
    specs_clean = escape_html(specs)
    desc_clean = escape_html(desc)
    challenge_clean = escape_html(challenge)
    execution_clean = escape_html(execution)

    specs_table = item.get('specs_table', [
        ("Sistem Tipi", category),
        ("Kapasite / Debi", specs_clean),
        ("Kanal Standardı", "TSE EN 1507 Class C"),
        ("İmalat Parkuru", "Sky Group CNC Fabrikasyonu"),
        ("Sızdırmazlık", "Mastikli & EPDM Contalı Flanş"),
        ("Akustik Kriter", "&lt; 40 dB(A)"),
        ("Kalite Onayı", "TSE • Eurovent • CE • ISO 9001"),
        ("Garanti Süresi", "2 Yıl İmalatçı Garantisi")
    ])

    gallery_images = item.get('gallery_images', [
        "/assets/images/factory_pipes_ducts.jpg",
        "/assets/images/factory_plant_interior.jpg"
    ])

    specs_rows = "\n".join([f"""
    <tr>
      <td class="key">{escape_html(k)}</td>
      <td class="val">{escape_html(v)}</td>
    </tr>
    """ for k, v in specs_table])

    results_html = "\n".join([f"""
    <li class="sky-vlog-result-item">
      <span class="sky-vlog-result-check">✓</span>
      <span>{r}</span>
    </li>
    """ for r in results])

    gallery_html = "\n".join([f"""
    <div class="sky-vlog-gallery-item">
      <img src="{img}" alt="{title_clean} Detay Görseli" loading="lazy">
    </div>
    """ for img in gallery_images[:2]])

    related_cards_html = ""
    for rel in related_items[:3]:
        rel_slug = rel.get('slug', '')
        rel_cat = rel.get('category_label', rel.get('badge_cat', ''))
        rel_loc = rel.get('location', rel.get('badge_loc', ''))
        rel_specs = escape_html(rel.get('specs', ''))
        related_cards_html += f"""
        <a href="/{rel_slug}.html" class="sky-project-card">
          <div class="sky-project-photo">
            <img src="{rel['image']}" alt="{rel['title']}" loading="lazy">
            <span class="sky-card-cat-badge">{rel_cat}</span>
            <span class="sky-card-loc-badge">{rel_loc}</span>
          </div>
          <div class="sky-project-info">
            <h3 class="sky-project-title">{rel['title']}</h3>
            <p class="sky-project-specs">
              <span class="sky-specs-dot"></span>
              <span>{rel_specs}</span>
            </p>
            <p class="sky-project-desc">{rel.get('desc', '')[:120]}...</p>
          </div>
        </a>
        """

    page_html = f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title_clean} | Sky Group İklimlendirme & Havalandırma</title>
  <meta name="description" content="{desc_clean[:155]}">
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" href="/favicon.png">

  <!-- Core Base Power Layout Styles -->
  <link rel="stylesheet" href="/_bpc/assets/BaseCoreSpecs.DESLp_Zg.css">
  <link rel="stylesheet" href="/_bpc/assets/core.KFUJ36fi.css">
  <link rel="stylesheet" href="/_bpc/assets/MarketingLayout.CLOcHXtv.css">

  <style>
    :root {{
      --sky-blue: #0d5ca9;
      --sky-cyan: #09bde3;
      --sky-blue-hover: #0284c7;
      --sky-navy-deep: #061527;
      --sky-navy-dark: #040e1a;
      --sky-ice-light: #e0f2fe;

      /* Base Power Overrides */
      --color-green-100: #040e1a;
      --color-green-90: #061527;
      --color-green-60: #0284c7;
      --color-green-20: #09bde3;
      --color-brand-primary: #09bde3;
      --color-brand-primary-foreground: #061527;
      --color-brand-primary-hover: #0284c7;
      --bpc-color-brand-primary: #09bde3;
      --bpc-color-brand-primary-foreground: #061527;
    }}

    html, body {{
      background-color: #ffffff !important;
      color: #0f172a !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      margin: 0;
      padding: 0;
      overflow-x: clip !important;
      width: 100%;
    }}

    /* Permanent Frosted Glass Topnav */
    .bcc-topnav-fixed {{
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      z-index: 9999 !important;
    }}
    .bcc-topnav-fixed .bcc-topnav nav,
    .bcc-topnav-fixed nav#main-navbar {{
      background: rgba(5, 17, 30, 0.88) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18) !important;
      transition: background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease !important;
    }}
    .bcc-topnav-fixed nav a,
    .bcc-topnav-fixed nav button {{
      color: #ffffff !important;
    }}
    .bcc-topnav-fixed nav a:hover,
    .bcc-topnav-fixed nav button:hover {{
      color: #09bde3 !important;
    }}
    .bcc-topnav-fixed nav a.bg-brand-primary,
    .bcc-topnav-fixed nav a[href*="teklif"] {{
      background-color: #09bde3 !important;
      color: #04111f !important;
      font-weight: 600 !important;
      box-shadow: 0 4px 14px rgba(9, 189, 227, 0.35) !important;
    }}
    .bcc-topnav-fixed nav a.bg-brand-primary:hover {{
      background-color: #38bdf8 !important;
      color: #04111f !important;
    }}

    /* Mega-Menu Blue Theme (Zero Green) */
    .bpc-nav-sheet {{
      background-color: #ffffff !important;
      color: #0f172a !important;
      border-bottom: 1px solid #e2e8f0 !important;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.12) !important;
      transition: opacity 0.25s ease, height 0.3s ease !important;
    }}
    .bpc-nav-sheet[data-open="true"] {{
      height: auto !important;
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      display: block !important;
    }}
    .bpc-nav-sheet[data-open="false"],
    .bpc-nav-sheet:not([data-open="true"]) {{
      height: 0 !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      display: none !important;
    }}
    .bpc-nav-pane[data-active="true"] {{
      opacity: 1 !important;
      pointer-events: auto !important;
      position: static !important;
      display: block !important;
    }}
    .bpc-nav-sheet a {{
      color: #0f172a !important;
    }}
    .bpc-nav-sheet a:hover {{
      color: #0284c7 !important;
    }}
    .bpc-nav-sheet .bg-brand-primary-foreground,
    .bpc-nav-sheet [class*="bg-brand-primary-foreground"] {{
      background-color: #061527 !important;
      color: #ffffff !important;
    }}

    /* Mobile Drawer */
    #sky-mobile-drawer {{
      position: fixed !important;
      top: 69px !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background: rgba(5, 17, 30, 0.98) !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
      z-index: 9998 !important;
      overflow-y: auto !important;
      display: none !important;
      opacity: 0 !important;
      transition: opacity 0.25s ease !important;
    }}
    #sky-mobile-drawer.active {{
      display: block !important;
      opacity: 1 !important;
    }}

    /* ================= VLOG DETAIL PAGE SWISS ARCHITECTURAL STYLES ================= */
    .sky-vlog-main {{
      padding-top: 80px;
      min-height: 100vh;
      background-color: #ffffff;
    }}
    .sky-vlog-container {{
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 24px;
    }}

    /* Breadcrumbs & Header */
    .sky-vlog-header {{
      padding-top: 36px;
      padding-bottom: 24px;
    }}
    .sky-vlog-back-link {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      text-decoration: none;
      transition: color 0.15s ease;
    }}
    .sky-vlog-back-link:hover {{
      color: #0284c7;
    }}
    .sky-vlog-badges {{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      margin-top: 18px;
      margin-bottom: 12px;
    }}
    .sky-badge-primary {{
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: #e0f2fe;
      color: #0284c7;
      border: 1px solid #bae6fd;
    }}
    .sky-badge-neutral {{
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      background: #f1f5f9;
      color: #475569;
      border: 1px solid #e2e8f0;
    }}
    .sky-badge-specs {{
      font-size: 12px;
      font-weight: 600;
      color: #0284c7;
    }}
    .sky-vlog-title {{
      font-size: clamp(28px, 4.2vw, 44px);
      font-weight: 800;
      color: #061527;
      line-height: 1.18;
      letter-spacing: -0.025em;
      margin: 12px 0 16px 0;
    }}
    .sky-vlog-lead {{
      font-size: 17px;
      line-height: 1.65;
      color: #475569;
      max-width: 900px;
      margin: 0 0 32px 0;
    }}

    /* Hero Photo */
    .sky-vlog-hero {{
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      max-height: 520px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      background-color: #061527;
      box-shadow: 0 10px 30px -10px rgba(6, 21, 39, 0.12);
      margin-bottom: 48px;
    }}
    @media (min-width: 768px) {{
      .sky-vlog-hero {{
        aspect-ratio: 21 / 9;
      }}
    }}
    .sky-vlog-hero img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }}
    .sky-vlog-hero-badge {{
      position: absolute;
      bottom: 16px;
      left: 20px;
      padding: 6px 14px;
      border-radius: 4px;
      background: rgba(6, 21, 39, 0.85);
      backdrop-filter: blur(8px);
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.02em;
    }}

    /* 2-Column Vlog Grid Layout */
    .sky-vlog-grid {{
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      margin-bottom: 60px;
    }}
    @media (min-width: 1024px) {{
      .sky-vlog-grid {{
        grid-template-columns: minmax(0, 1.8fr) minmax(360px, 1fr);
        gap: 52px;
        align-items: start;
      }}
    }}

    /* Left: Vlog Article Narrative */
    .sky-vlog-article {{
      display: flex;
      flex-direction: column;
      gap: 44px;
    }}
    .sky-vlog-section-title {{
      font-size: 22px;
      font-weight: 800;
      color: #061527;
      letter-spacing: -0.02em;
      margin: 0 0 16px 0;
      line-height: 1.3;
    }}
    .sky-vlog-section-text {{
      font-size: 15px;
      line-height: 1.7;
      color: #334155;
      margin: 0;
    }}

    /* 4-Step Engineering Execution */
    .sky-vlog-steps {{
      display: flex;
      flex-direction: column;
      gap: 14px;
    }}
    .sky-vlog-step-card {{
      padding: 18px 20px;
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      transition: border-color 0.2s ease;
    }}
    .sky-vlog-step-card:hover {{
      border-color: #cbd5e1;
    }}
    .sky-vlog-step-header {{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    }}
    .sky-vlog-step-num {{
      width: 24px;
      height: 24px;
      border-radius: 9999px;
      background-color: #0284c7;
      color: #ffffff;
      font-size: 12px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }}
    .sky-vlog-step-title {{
      font-size: 15px;
      font-weight: 700;
      color: #061527;
      margin: 0;
    }}
    .sky-vlog-step-desc {{
      font-size: 13.5px;
      line-height: 1.65;
      color: #475569;
      margin: 0;
      padding-left: 34px;
    }}

    /* Detail Photo Gallery */
    .sky-vlog-gallery {{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
      margin-top: 14px;
    }}
    @media (min-width: 640px) {{
      .sky-vlog-gallery {{
        grid-template-columns: repeat(2, 1fr);
      }}
    }}
    .sky-vlog-gallery-item {{
      aspect-ratio: 4 / 3;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      background-color: #f1f5f9;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }}
    .sky-vlog-gallery-item img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }}
    .sky-vlog-gallery-item:hover img {{
      transform: scale(1.04);
    }}

    /* Performance Outcomes Checklist */
    .sky-vlog-results-box {{
      padding: 22px 24px;
      background-color: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 6px;
      list-style: none;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }}
    .sky-vlog-result-item {{
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 14px;
      line-height: 1.5;
      color: #14532d;
      font-weight: 500;
    }}
    .sky-vlog-result-check {{
      color: #0284c7;
      font-weight: 800;
      font-size: 16px;
      line-height: 1;
      flex-shrink: 0;
    }}

    /* Right: Sticky Technical Sidebar */
    .sky-vlog-sidebar {{
      display: flex;
      flex-direction: column;
      gap: 24px;
    }}
    @media (min-width: 1024px) {{
      .sky-vlog-sidebar {{
        position: sticky;
        top: 96px;
      }}
    }}
    .sky-vlog-specs-card {{
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 20px 22px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }}
    .sky-vlog-specs-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      margin-bottom: 8px;
      border-bottom: 1px solid #f1f5f9;
    }}
    .sky-vlog-specs-title {{
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
    }}
    .sky-vlog-specs-tag {{
      font-size: 11px;
      font-weight: 700;
      color: #0284c7;
    }}
    .sky-vlog-specs-table {{
      width: 100%;
      border-collapse: collapse;
    }}
    .sky-vlog-specs-table tr {{
      border-bottom: 1px solid #f8fafc;
    }}
    .sky-vlog-specs-table tr:last-child {{
      border-bottom: none;
    }}
    .sky-vlog-specs-table td {{
      padding: 10px 4px;
    }}
    .sky-vlog-specs-table td.key {{
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 0.03em;
    }}
    .sky-vlog-specs-table td.val {{
      color: #061527;
      font-weight: 700;
      font-size: 13px;
      text-align: right;
    }}

    /* Standards Card */
    .sky-vlog-standards-card {{
      background-color: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 18px 20px;
    }}
    .sky-vlog-standards-pills {{
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 10px;
    }}
    .sky-vlog-standard-pill {{
      display: inline-block;
      padding: 4px 10px;
      background-color: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      color: #334155;
    }}

    /* Quote / CTA Card */
    .sky-vlog-quote-card {{
      background: linear-gradient(145deg, #f0f9ff 0%, #ffffff 100%);
      border: 1px solid #bae6fd;
      border-radius: 6px;
      padding: 22px;
      box-shadow: 0 4px 16px -2px rgba(2, 132, 199, 0.08);
    }}
    .sky-vlog-quote-subtitle {{
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0284c7;
      display: block;
      margin-bottom: 6px;
    }}
    .sky-vlog-quote-heading {{
      font-size: 16px;
      font-weight: 800;
      color: #061527;
      line-height: 1.35;
      margin: 0 0 8px 0;
    }}
    .sky-vlog-quote-desc {{
      font-size: 12.5px;
      line-height: 1.6;
      color: #475569;
      margin: 0 0 18px 0;
    }}
    .sky-vlog-quote-btn {{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      padding: 12px 16px;
      border: none;
      border-radius: 4px;
      background-color: #09bde3 !important;
      color: #04111f !important;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.15s ease;
      box-shadow: 0 4px 14px rgba(9, 189, 227, 0.35);
    }}
    .sky-vlog-quote-btn:hover {{
      background-color: #38bdf8 !important;
      transform: translateY(-1px);
    }}
    .sky-vlog-quote-contacts {{
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid rgba(226, 232, 240, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      font-weight: 600;
    }}
    .sky-vlog-quote-contacts a {{
      color: #061527;
      text-decoration: none;
      transition: color 0.15s ease;
    }}
    .sky-vlog-quote-contacts a:hover {{
      color: #0284c7;
    }}
    .sky-vlog-quote-contacts a.whatsapp {{
      color: #059669;
    }}
    .sky-vlog-quote-contacts a.whatsapp:hover {{
      text-decoration: underline;
    }}

    /* Related Items Section (No Arrows) */
    .sky-vlog-related-section {{
      max-width: 1240px;
      margin: 60px auto 0;
      padding: 48px 24px;
      border-top: 1px solid #e2e8f0;
    }}
    .sky-vlog-related-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 28px;
    }}
    .sky-vlog-related-title {{
      font-size: 22px;
      font-weight: 800;
      color: #061527;
      letter-spacing: -0.02em;
      margin: 0;
    }}
    .sky-vlog-related-link {{
      font-size: 13px;
      font-weight: 600;
      color: #0284c7;
      text-decoration: none;
    }}
    .sky-vlog-related-link:hover {{
      text-decoration: underline;
    }}

    /* Reusable 3-Col Card Grid (No Arrows) */
    .sky-projects-grid {{
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }}
    @media (min-width: 640px) {{
      .sky-projects-grid {{
        grid-template-columns: repeat(2, 1fr);
      }}
    }}
    @media (min-width: 1024px) {{
      .sky-projects-grid {{
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
      }}
    }}
    .sky-project-card {{
      background-color: #ffffff !important;
      border: 1px solid #e2e8f0 !important;
      border-radius: 4px !important;
      padding: 14px !important;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease !important;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
      cursor: pointer;
      text-decoration: none;
    }}
    .sky-project-card:hover {{
      border-color: #061527 !important;
      box-shadow: 0 10px 25px -4px rgba(6, 21, 39, 0.08) !important;
      transform: translateY(-2px);
    }}
    .sky-project-photo {{
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 2px !important;
      aspect-ratio: 16 / 10;
      background-color: #f1f5f9;
    }}
    .sky-project-photo img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }}
    .sky-project-card:hover .sky-project-photo img {{
      transform: scale(1.03);
    }}
    .sky-card-cat-badge {{
      position: absolute;
      top: 8px;
      left: 8px;
      padding: 2px 7px;
      font-size: 9px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.95);
      color: #0f172a;
      backdrop-filter: blur(4px);
    }}
    .sky-card-loc-badge {{
      position: absolute;
      bottom: 8px;
      right: 8px;
      padding: 2px 7px;
      font-size: 9px;
      font-weight: 600;
      border-radius: 2px;
      background: rgba(6, 21, 39, 0.85);
      color: #ffffff;
      backdrop-filter: blur(4px);
    }}
    .sky-project-info {{
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }}
    .sky-project-title {{
      font-size: 16px;
      font-weight: 700;
      color: #061527;
      margin: 0;
      line-height: 1.35;
      transition: color 0.15s ease;
    }}
    .sky-project-card:hover .sky-project-title {{
      color: #0284c7;
    }}
    .sky-project-specs {{
      font-size: 12px;
      font-weight: 600;
      color: #0284c7;
      margin: 6px 0 0 0;
      display: flex;
      align-items: center;
      gap: 6px;
    }}
    .sky-specs-dot {{
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background-color: #09bde3;
    }}
    .sky-project-desc {{
      font-size: 13px;
      line-height: 1.55;
      color: #64748b;
      margin: 8px 0 0 0;
    }}

    /* Quote Modal Styles */
    #sky-quote-modal {{
      position: fixed !important;
      inset: 0 !important;
      z-index: 999999 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 16px !important;
      background: rgba(6, 21, 39, 0.82) !important;
      backdrop-filter: blur(14px) !important;
      -webkit-backdrop-filter: blur(14px) !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transition: opacity 0.25s ease, visibility 0.25s ease !important;
    }}
    #sky-quote-modal.active {{
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }}
    #sky-quote-modal .modal-card {{
      background-color: #ffffff !important;
      color: #1e293b !important;
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      border-radius: 8px !important;
      box-shadow: 0 25px 60px -15px rgba(6, 21, 39, 0.4) !important;
      transform: scale(0.96);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }}
    #sky-quote-modal.active .modal-card {{
      transform: scale(1) !important;
    }}
  </style>
</head>
<body class="bpc-theme">

  <!-- TOPNAV -->
  {topnav_html}

  <!-- MAIN ARTICLE CONTENT -->
  <main class="sky-vlog-main">
    
    <!-- HEADER & BREADCRUMB SECTION -->
    <section class="sky-vlog-container sky-vlog-header">
      
      <!-- Back Link -->
      <div>
        <a href="{back_url}" class="sky-vlog-back-link">
          <span>←</span>
          <span>{back_label}</span>
        </a>
      </div>

      <!-- Badges Bar -->
      <div class="sky-vlog-badges">
        <span class="sky-badge-primary">{category_clean}</span>
        <span class="sky-badge-neutral">{location_clean}</span>
        <span class="sky-badge-specs">• {specs_clean}</span>
      </div>

      <!-- Main Title -->
      <h1 class="sky-vlog-title">
        {title_clean}
      </h1>

      <!-- Subtitle Lead -->
      <p class="sky-vlog-lead">
        {desc_clean}
      </p>

    </section>

    <!-- FULL HERO IMAGE -->
    <section class="sky-vlog-container">
      <div class="sky-vlog-hero">
        <img src="{image}" alt="{title_clean}">
        <div class="sky-vlog-hero-badge">
          <span>{location_clean} • Sky Group Mühendislik &amp; İmalat Güvencesi</span>
        </div>
      </div>
    </section>

    <!-- 2-COLUMN VLOG & CASE STUDY GRID -->
    <section class="sky-vlog-container">
      <div class="sky-vlog-grid">
        
        <!-- LEFT: CASE STUDY & VLOG NARRATIVE -->
        <article class="sky-vlog-article">
          
          <!-- Section 1: Challenge -->
          <div>
            <h2 class="sky-vlog-section-title">
              1. Proje Özeti ve Saha İhtiyaçları
            </h2>
            <p class="sky-vlog-section-text">
              {challenge_clean}
            </p>
          </div>

          <!-- Section 2: Engineering Execution (Vlog Steps) -->
          <div>
            <h2 class="sky-vlog-section-title">
              2. Mühendislik Süreci ve Şantiye Uygulaması
            </h2>
            
            <div class="sky-vlog-steps">
              <div class="sky-vlog-step-card">
                <div class="sky-vlog-step-header">
                  <span class="sky-vlog-step-num">1</span>
                  <h3 class="sky-vlog-step-title">Keşif, Debi Hesabı &amp; 3D Kanal Güzergahı</h3>
                </div>
                <p class="sky-vlog-step-desc">
                  Mimari DWG paftaları üzerinde mahal taze hava gereksinimi (ACH) ve kanal basınç kayıpları simüle edilmiş; mimari asma tavan veya açık konseptle tam uyumlu kanal kesitleri projelendirilmiştir.
                </p>
              </div>

              <div class="sky-vlog-step-card">
                <div class="sky-vlog-step-header">
                  <span class="sky-vlog-step-num">2</span>
                  <h3 class="sky-vlog-step-title">Kendi CNC Tesisimizde İmalat (EN 1507 Class C)</h3>
                </div>
                <p class="sky-vlog-step-desc">
                  Kanal ve fitingler Sky Group modern CNC plazma parkurunda milimetrik hassasiyetle kesilmiş, kendinden flanşlı büküm ve sızdırmaz mastikleme ile sıfır hava kaçaklı olarak hazırlanmıştır.
                </p>
              </div>

              <div class="sky-vlog-step-card">
                <div class="sky-vlog-step-header">
                  <span class="sky-vlog-step-num">3</span>
                  <h3 class="sky-vlog-step-title">Vinçli Şantiye Montajı ve İSG Emniyeti</h3>
                </div>
                <p class="sky-vlog-step-desc">
                  Şantiye koordinasyon planına uygun olarak sertifikalı montaj ekiplerimizce askı, titreşim yutucu yaylar, ses susturucuları ve menfez bağlantıları iş güvenliği kurallarına tam uyumla monte edilmiştir.
                </p>
              </div>

              <div class="sky-vlog-step-card">
                <div class="sky-vlog-step-header">
                  <span class="sky-vlog-step-num">4</span>
                  <h3 class="sky-vlog-step-title">TAB (Test, Ayar, Balanslama) ve Teslim</h3>
                </div>
                <p class="sky-vlog-step-desc">
                  Kalibre edilmiş anemometre ve fark basınç ölçerlerle hava debileri menfez bazında dengelenmiş; ses ve titreşim testleri tamamlanarak devreye alma tutanağı düzenlenmiştir.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 3: Engineering Gallery -->
          <div>
            <h2 class="sky-vlog-section-title">
              3. İmalat ve Uygulama Detayları
            </h2>
            <div class="sky-vlog-gallery">
              {gallery_html}
            </div>
            <p style="font-size: 12px; color: #64748b; margin-top: 10px;">Görseller Sky Group üretim atölyesi ve şantiye montaj süreçlerine aittir.</p>
          </div>

          <!-- Section 4: Performance Outcomes -->
          <div>
            <h2 class="sky-vlog-section-title">
              4. Sağlanan Performans ve Kazanımlar
            </h2>
            <ul class="sky-vlog-results-box">
              {results_html}
            </ul>
          </div>

        </article>

        <!-- RIGHT: STICKY TECHNICAL DATA & ACTION SIDEBAR -->
        <aside class="sky-vlog-sidebar">
          
          <!-- Technical Data Card -->
          <div class="sky-vlog-specs-card">
            <div class="sky-vlog-specs-header">
              <span class="sky-vlog-specs-title">TEKNİK PARAMETRELER</span>
              <span class="sky-vlog-specs-tag">ŞARTNAME</span>
            </div>
            <table class="sky-vlog-specs-table">
              <tbody>
                {specs_rows}
              </tbody>
            </table>
          </div>

          <!-- Certified Standards Card -->
          <div class="sky-vlog-standards-card">
            <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; display: block;">KALİTE VE UYGUNLUK STANDARTLARI</span>
            <div class="sky-vlog-standards-pills">
              <span class="sky-vlog-standard-pill">TSE EN 1886</span>
              <span class="sky-vlog-standard-pill">EN 1507 Class C</span>
              <span class="sky-vlog-standard-pill">Eurovent</span>
              <span class="sky-vlog-standard-pill">CE</span>
              <span class="sky-vlog-standard-pill">ISO 9001:2015</span>
            </div>
          </div>

          <!-- Quote / Contact Box -->
          <div class="sky-vlog-quote-card">
            <span class="sky-vlog-quote-subtitle">MÜHENDİSLİK DANIŞMANLIĞI</span>
            <h3 class="sky-vlog-quote-heading">Bu Sistem Benzeri Bir Projeniz Mi Var?</h3>
            <p class="sky-vlog-quote-desc">
              Mimari DWG çizimlerinizi iletin; uzman mühendislerimiz 24 saat içinde mahal debi hesabı ve imalatçı fiyat teklifinizi hazırlasın.
            </p>
            
            <button type="button" class="sky-vlog-quote-btn" onclick="openQuoteForProject(this.getAttribute('data-item-title'))" data-item-title="{title_clean}">
              <span>Ücretsiz Keşif &amp; Teklif Al</span>
            </button>

            <div class="sky-vlog-quote-contacts">
              <a href="tel:+905419221991">
                📞 0 (541) 922 19 91
              </a>
              <a href="https://wa.me/905419221991" target="_blank" rel="noopener noreferrer" class="whatsapp">
                WhatsApp Destek
              </a>
            </div>
          </div>

        </aside>

      </div>
    </section>

    <!-- RELATED ITEMS SECTION (NO ARROWS) -->
    <section class="sky-vlog-related-section">
      <div class="sky-vlog-related-header">
        <h2 class="sky-vlog-related-title">İlgili Diğer Sistem ve Projeler</h2>
        <a href="{back_url}" class="sky-vlog-related-link">
          Tümünü Gör →
        </a>
      </div>

      <div class="sky-projects-grid">
        {related_cards_html}
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  {footer_html}

  <!-- QUOTE MODAL HOST -->
  {modal_html}

  <!-- CLIENT SCRIPTS -->
  <script>
    (function() {{
      // Mobile Drawer Toggle
      const burgerBtn = document.getElementById('sky-burger-btn');
      const drawer = document.getElementById('sky-mobile-drawer');
      const iconOpen = document.getElementById('sky-burger-icon-open');
      const iconClose = document.getElementById('sky-burger-icon-close');

      function toggleMobileMenu(forceClose = false) {{
        if (!drawer) return;
        const isOpen = drawer.classList.contains('active');
        if (isOpen || forceClose) {{
          drawer.classList.remove('active');
          drawer.setAttribute('aria-hidden', 'true');
          if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
          if (iconOpen) iconOpen.classList.remove('hidden');
          if (iconClose) iconClose.classList.add('hidden');
          document.body.style.overflow = '';
        }} else {{
          drawer.classList.add('active');
          drawer.setAttribute('aria-hidden', 'false');
          if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'true');
          if (iconOpen) iconOpen.classList.add('hidden');
          if (iconClose) iconClose.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        }}
      }}

      if (burgerBtn) {{
        burgerBtn.addEventListener('click', function(e) {{
          e.stopPropagation();
          toggleMobileMenu();
        }});
      }}

      // Quote Modal
      const quoteModal = document.getElementById('sky-quote-modal');
      const quoteClose = document.getElementById('sky-modal-close');
      const quoteForm = document.getElementById('sky-quote-form');
      const formSuccess = document.getElementById('sky-form-success');
      const notesField = document.getElementById('sky-modal-notes');

      window.openQuoteModal = function() {{
        if (quoteModal) {{
          quoteModal.classList.add('active');
          quoteModal.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }}
      }};

      window.openQuoteForProject = function(itemTitle) {{
        if (notesField) {{
          notesField.value = itemTitle + ' hakkında teknik şartname ve fiyat teklifi talebi.';
        }}
        window.openQuoteModal();
      }};

      function closeQuoteModal() {{
        if (quoteModal) {{
          quoteModal.classList.remove('active');
          quoteModal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }}
      }}

      if (quoteClose) {{
        quoteClose.addEventListener('click', closeQuoteModal);
      }}

      if (quoteModal) {{
        quoteModal.addEventListener('click', function(e) {{
          if (e.target === quoteModal) closeQuoteModal();
        }});
      }}

      if (quoteForm) {{
        quoteForm.addEventListener('submit', function(e) {{
          e.preventDefault();
          if (formSuccess) {{
            formSuccess.classList.remove('hidden');
            setTimeout(() => {{
              closeQuoteModal();
              quoteForm.reset();
              formSuccess.classList.add('hidden');
            }}, 3000);
          }}
        }});
      }}

      // Desktop Mega Menu Hover
      const sheet = document.querySelector('.bpc-nav-sheet');
      const desktopLinks = document.querySelectorAll('nav ul a[aria-controls^="fullnav-panel"], nav ul button[aria-controls^="fullnav-panel"]');
      const panes = document.querySelectorAll('.bpc-nav-pane');

      function closeNav() {{
        if (sheet) sheet.setAttribute('data-open', 'false');
        desktopLinks.forEach(b => {{
          b.setAttribute('aria-expanded', 'false');
        }});
        panes.forEach(p => {{
          p.setAttribute('data-active', 'false');
        }});
      }}

      desktopLinks.forEach(link => {{
        const panelId = link.getAttribute('aria-controls');
        const targetPane = document.getElementById(panelId);

        link.addEventListener('mouseenter', function() {{
          if (!sheet || !targetPane) return;
          desktopLinks.forEach(b => b.setAttribute('aria-expanded', 'false'));
          panes.forEach(p => p.setAttribute('data-active', 'false'));
          link.setAttribute('aria-expanded', 'true');
          targetPane.setAttribute('data-active', 'true');
          sheet.setAttribute('data-open', 'true');
        }});
      }});

      if (sheet) {{
        sheet.addEventListener('mouseleave', closeNav);
      }}

      const topnavNav = document.querySelector('.bcc-topnav-fixed nav');
      if (topnavNav) {{
        topnavNav.addEventListener('mouseleave', function(e) {{
          if (!sheet) return;
          const rect = sheet.getBoundingClientRect();
          if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {{
            closeNav();
          }}
        }});
      }}
    }})();
  </script>

</body>
</html>"""
    return page_html

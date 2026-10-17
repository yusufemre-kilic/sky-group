#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sky Group Complete Multi-Page Generator
Generates:
  - urunlerimiz.html
  - cozumlerimiz.html
  - hizmetlerimiz.html
  - kurumsal.html
  - referanslar.html (updated, CTA banner removed, social links fixed)
  - index.html (updated, social links & header navigation fixed)

Follows exact Swiss architectural 3-column showcase design of referanslar.html,
with NO "ÜCRETSİZ MÜHENDİSLİK KEŞFİ VE METRAJLIK ŞARTNAME..." CTA banner.
Utilizes all real images, documents, certificates, and project data.
"""

import os
import re
from build_vlog_detail_pages import slugify

BASE_DIR = '/home/emre/Desktop/sky-group-new'

# Social links SVG definition
SOCIAL_LINKS_HTML = """
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

MODAL_HTML = """
<!-- Sky Group Fiyat Teklifi & Keşif Talebi Modal -->
<div id="sky-quote-modal" aria-hidden="true" role="dialog" aria-modal="true">
  <div class="modal-card relative w-full max-w-lg bg-white border border-slate-200 rounded-lg shadow-2xl p-4 sm:p-7 text-slate-800 max-h-[92vh] overflow-y-auto">
    <!-- Close Button -->
    <button type="button" id="sky-modal-close" class="absolute top-3.5 right-3.5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer" aria-label="Kapat">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
    
    <!-- Header -->
    <div class="flex items-center gap-3 mb-2.5">
      <div class="w-10 h-10 rounded-lg bg-[#061527] flex items-center justify-center p-2 shadow-sm shrink-0">
        <img src="/assets/sky-group-logo-s.png" alt="Sky Group" class="w-full h-full object-contain" width="40" height="40">
      </div>
      <div>
        <span class="text-[10px] font-bold uppercase tracking-widest text-[#0284c7] block">MÜHENDİSLİK &amp; PROJELENDİRME</span>
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
        <input type="text" name="fullName" required placeholder="Örn: Ahmet Yılmaz / ABC İnşaat A.Ş." class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        <div>
          <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Telefon Numarası *</label>
          <input type="tel" name="phone" required placeholder="0 (5XX) XXX XX XX" class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
        </div>
        <div>
          <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">E-Posta Adresi</label>
          <input type="email" name="email" placeholder="ornek@firma.com" class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        <div>
          <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Proje / Tesis Türü</label>
          <select name="projectType" class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
            <option value="Fabrika &amp; Endüstriyel Tesis">Fabrika &amp; Endüstriyel Tesis</option>
            <option value="Plaza &amp; Ticari Bina">Plaza &amp; Ticari Bina</option>
            <option value="Hastane &amp; Temiz Oda">Hastane &amp; Temiz Oda</option>
            <option value="AVM &amp; Sosyal Tesis">AVM &amp; Sosyal Tesis</option>
            <option value="Restoran &amp; Otel Mutfak">Restoran &amp; Otel Mutfak</option>
            <option value="Otopark &amp; Yangın Duman">Otopark &amp; Yangın Duman</option>
            <option value="Diğer">Diğer İklimlendirme Projesi</option>
          </select>
        </div>
        <div>
          <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">İlgilenilen Sistem</label>
          <select name="systemInterest" class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
            <option value="Klima Santralleri (AHU)">Klima Santralleri (AHU)</option>
            <option value="Hava Kanalı İmalatı">Hava Kanalı İmalatı (Galvaniz / Spiral)</option>
            <option value="VRF / VRV Sistemleri">VRF / VRV Sistemleri</option>
            <option value="Isı Geri Kazanım (HRV)">Isı Geri Kazanım (HRV)</option>
            <option value="Yangın &amp; Duman Tahliyesi">Yangın &amp; Duman Tahliyesi</option>
            <option value="Komple Mekanik Taahhüt">Komple Mekanik Taahhüt</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Proje Notu / Metraj / Talebiniz</label>
        <textarea name="notes" id="sky-modal-notes" rows="2" placeholder="Projenizin debisi, m² bilgisi veya teknik detaylarını iletebilirsiniz..." class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all resize-none font-medium"></textarea>
      </div>

      <button type="submit" style="background-color: #09bde3 !important; color: #04111f !important;" class="w-full py-2.5 sm:py-3.5 px-4 rounded-lg font-bold text-sm sm:text-base hover:bg-[#38bdf8] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mt-1">
        <span>Teklif Talebini Gönder</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>

      <div id="sky-form-success" class="hidden p-3 sm:p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm text-center font-medium">
        ✓ <strong>Talebiniz Başarıyla Alındı!</strong><br>Uzman mühendislerimiz en geç 24 saat içinde sizinle iletişime geçecektir.
      </div>
    </form>

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

def extract_base_components():
    """Extract topnav, footer and base HTML assets from index.html"""
    with open(os.path.join(BASE_DIR, 'index.html'), 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract topnav wrapper
    topnav_start = html.find('<div class="bcc-topnav">')
    runway_pos = html.find('<section class="bcc-runway">')
    if runway_pos == -1:
        runway_pos = html.find('<!--astro:end--></astro-island> </div>') + len('<!--astro:end--></astro-island> </div>')
    topnav_html = html[topnav_start:runway_pos].strip()

    # Ensure topnav desktop items are direct <a> links!
    topnav_html = re.sub(r'<button\s+type="button"\s+aria-expanded="false"\s+aria-controls="fullnav-panel-products"[^>]*>Ürünlerimiz', r'<a href="/urunlerimiz.html" aria-controls="fullnav-panel-products" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Ürünlerimiz', topnav_html)
    topnav_html = re.sub(r'<button\s+type="button"\s+aria-expanded="false"\s+aria-controls="fullnav-panel-pricing"[^>]*>Çözümlerimiz', r'<a href="/cozumlerimiz.html" aria-controls="fullnav-panel-pricing" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Çözümlerimiz', topnav_html)
    topnav_html = re.sub(r'<button\s+type="button"\s+aria-expanded="false"\s+aria-controls="fullnav-panel-resources"[^>]*>Hizmetlerimiz', r'<a href="/hizmetlerimiz.html" aria-controls="fullnav-panel-resources" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Hizmetlerimiz', topnav_html)
    topnav_html = re.sub(r'<button\s+type="button"\s+aria-expanded="false"\s+aria-controls="fullnav-panel-company"[^>]*>Kurumsal', r'<a href="/kurumsal.html" aria-controls="fullnav-panel-company" class="inline-flex items-center gap-1 rounded px-3.5 py-2 text-body-lg font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-foreground text-text-inverse hover:bg-white/10">Kurumsal', topnav_html)
    topnav_html = topnav_html.replace('</button></li><li><a href="/cozumlerimiz.html"', '</a></li><li><a href="/cozumlerimiz.html"')
    topnav_html = topnav_html.replace('</button></li><li><a href="/hizmetlerimiz.html"', '</a></li><li><a href="/hizmetlerimiz.html"')
    topnav_html = topnav_html.replace('</button></li><li><a href="/referanslar.html"', '</a></li><li><a href="/referanslar.html"')
    topnav_html = topnav_html.replace('</button></li></ul>', '</a></li></ul>')

    # Ensure mega-menu inside links point to dedicated pages
    topnav_html = topnav_html.replace('href="#bcc-bp"', 'href="/urunlerimiz.html"')
    topnav_html = topnav_html.replace('href="#bcc-how"', 'href="/hizmetlerimiz.html"')
    topnav_html = topnav_html.replace('href="#bcc-stress"', 'href="/cozumlerimiz.html"')
    topnav_html = topnav_html.replace('href="#bcc-specs"', 'href="/kurumsal.html"')
    topnav_html = topnav_html.replace('href="#bcc-pricing"', 'href="/hizmetlerimiz.html"')
    topnav_html = topnav_html.replace('href="#bcc-fact"', 'href="/kurumsal.html"')

    # Extract footer
    footer_start = html.find('<div class="bcc-footer">')
    footer_end = html.find('<!--astro:end--></astro-island> </div>', footer_start) + len('<!--astro:end--></astro-island> </div>')
    footer_html = html[footer_start:footer_end].strip()

    # Update social media links in footer_html
    old_social_pattern = r'<div class="flex items-center gap-\[22px\] shrink-0">[\s\S]*?</div>\s*</div>\s*<svg viewBox="0 0 1389'
    new_social_replacement = SOCIAL_LINKS_HTML.strip() + '</div>\n<svg viewBox="0 0 1389'
    footer_html = re.sub(old_social_pattern, new_social_replacement, footer_html)

    # Ensure footer links navigate to new dedicated pages!
    footer_html = footer_html.replace('href="#bcc-bp"', 'href="/urunlerimiz.html"')
    footer_html = footer_html.replace('href="#bcc-how"', 'href="/hizmetlerimiz.html"')
    footer_html = footer_html.replace('href="#bcc-stress"', 'href="/cozumlerimiz.html"')
    footer_html = footer_html.replace('href="#bcc-fact"', 'href="/kurumsal.html"')
    footer_html = footer_html.replace('href="/homebuilders"', 'href="/urunlerimiz.html"')
    footer_html = footer_html.replace('href="/install-partners"', 'href="/cozumlerimiz.html"')

    return topnav_html, footer_html

DETAIL_MODAL_HTML = """
<!-- Sky Group Detaylı Teknik İnceleme Modal (Product / Project Detail Inspector) -->
<div id="sky-detail-modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="sky-detail-card">
    <!-- Header with Badges and Close button -->
    <div class="sky-detail-header">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span id="detail-badge-cat" style="padding: 3px 8px; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; border-radius: 3px; background: #e0f2fe; color: #0284c7; border: 1px solid #bae6fd;">Kategori</span>
        <span id="detail-badge-loc" style="padding: 3px 8px; font-size: 0.6875rem; font-weight: 600; border-radius: 3px; background: #e2e8f0; color: #334155;">Standart / Konum</span>
      </div>
      <button type="button" onclick="closeDetailModal()" style="width: 28px; height: 28px; border-radius: 9999px; border: 1px solid #e2e8f0; background: #ffffff; color: #64748b; display: flex; align-items: center; justify-content: center; cursor: pointer;" aria-label="Kapat">
        <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
    
    <!-- Body: Scrollable -->
    <div class="sky-detail-body">
      <!-- Image & Specs Grid -->
      <div class="sky-detail-grid">
        <div class="sky-detail-img-box">
          <img id="detail-image" src="" alt="">
        </div>
        <div class="sky-detail-info">
          <h2 id="detail-title" class="sky-detail-title">Ürün Başlığı</h2>
          <div class="sky-detail-specs-badge">
            <span class="sky-detail-specs-dot"></span>
            <span id="detail-specs">Kapasite ve Standart Verisi</span>
          </div>
          <p id="detail-desc" class="sky-detail-desc">Teknik açıklama verileri buraya yüklenecektir.</p>
        </div>
      </div>
      
      <!-- Technical Highlights Grid -->
      <div class="sky-detail-features-box">
        <div class="sky-detail-features-title">
          <svg style="width: 14px; height: 14px; color: #0284c7;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>MÜHENDİSLİK VE İMALAT STANDARTLARI</span>
        </div>
        <div class="sky-detail-features-list">
          <div class="sky-detail-feature-item">
            <svg style="width: 14px; height: 14px; color: #0284c7; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>TSE EN 1886 ve DIN 1946-4 Normları</span>
          </div>
          <div class="sky-detail-feature-item">
            <svg style="width: 14px; height: 14px; color: #0284c7; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>CNC Plazma Kesim &amp; Sızdırmaz Contalama</span>
          </div>
          <div class="sky-detail-feature-item">
            <svg style="width: 14px; height: 14px; color: #0284c7; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Hassas Test, Ayar ve Balanslama (TAB)</span>
          </div>
          <div class="sky-detail-feature-item">
            <svg style="width: 14px; height: 14px; color: #0284c7; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>2 Yıl Sky Group Üretici Garantisi</span>
          </div>
        </div>
      </div>
      
      <!-- Standards Note -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: #f0f9ff; border: 1px solid #e0f2fe; border-radius: 6px; font-size: 0.6875rem; color: #0369a1;">
        <span style="font-weight: 700;">✓ TSE • Eurovent • CE • ISO 9001:2015 Belgeli</span>
        <span style="color: #64748b;">Kendi Tesisimizde İmalat ve Doğrudan Teslim</span>
      </div>
    </div>
    
    <!-- Footer Actions -->
    <div class="sky-detail-footer">
      <div class="sky-detail-contact-links">
        <a href="tel:+905419221991">
          <svg style="width: 14px; height: 14px; color: #0284c7;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          0 (541) 922 19 91
        </a>
        <span>•</span>
        <a href="https://wa.me/905419221991" target="_blank" rel="noopener noreferrer" style="color: #059669;">
          WhatsApp Destek
        </a>
      </div>
      <div class="sky-detail-btn-group">
        <button type="button" onclick="closeDetailModal()" class="sky-detail-btn-close">
          Kapat
        </button>
        <button type="button" onclick="openQuoteForCurrentDetail()" class="sky-detail-btn-quote">
          <span>Bu Sistem İçin Bilgi / Fiyat Al</span>
          <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    </div>
  </div>
</div>
"""

def generate_page(title, meta_desc, active_nav, showcase_col1, showcase_col2, showcase_col3, filter_tabs, cards, logos_type="clients"):
    """
    Generates a full Swiss showcase page with:
      - identical fixed transparent topnav
      - 3-column Swiss showcase
      - filter tabs
      - catalog cards grid (4px radius, flat Swiss style, no CTA banner)
      - logo grid
      - modal & footer
    """
    topnav_html, footer_html = extract_base_components()

    # Generate Filter Buttons HTML
    filters_html = []
    for idx, (cat_id, cat_name, count) in enumerate(filter_tabs):
        active_class = "active" if idx == 0 else ""
        count_str = f" ({count})" if count else ""
        filters_html.append(f"""
        <button type="button" class="sky-filter-btn {active_class}" onclick="filterCategory('{cat_id}')">
          {cat_name}{count_str}
        </button>
        """)
    filters_bar_html = "\n".join(filters_html)

    # Generate Cards HTML (Clean Swiss cards linking to dedicated vlog detail pages, NO BIG ARROWS)
    prefix_map = {
        'urunlerimiz': 'urun',
        'cozumlerimiz': 'cozum',
        'hizmetlerimiz': 'hizmet',
        'kurumsal': 'kurumsal'
    }
    nav_prefix = prefix_map.get(active_nav, 'detay')

    cards_html = []
    for c in cards:
        slug = c.get('slug') or slugify(c['title'], nav_prefix)
        card = f"""
        <a href="/{slug}.html" class="sky-project-card group block text-left" 
             data-category="{c['category']}">
          <div class="sky-project-photo">
            <img src="{c['image']}" alt="{c['title']}" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" loading="lazy">
            <span class="sky-card-cat-badge">{c['badge_cat']}</span>
            <span class="sky-card-loc-badge">{c['badge_loc']}</span>
          </div>
          <div class="pt-3.5 flex flex-col flex-1">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">{c['title']}</h3>
            <p class="text-xs font-semibold text-[#0284c7] mt-1 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#09bde3]"></span>
              <span>{c['specs']}</span>
            </p>
            <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">{c['desc']}</p>
          </div>
        </a>
        """
        cards_html.append(card)
    cards_grid_html = "\n".join(cards_html)

    # Logos Grid
    logos_html = []
    if logos_type == "tech":
        # Technical / Certification Logos (t/1.png to 31.png)
        for i in range(1, 32):
            logos_html.append(f"""
            <div class="sky-logo-card group">
              <img src="/sm/ambar/t/{i}.png" alt="Sky Group Teknik Belge &amp; Standart {i}" loading="lazy" />
            </div>
            """)
        logos_title = "TEKNİK VE İMALAT STANDARTLARI"
        logos_subtitle = "TSE, Eurovent, CE ve ISO 9001 sertifikalı mühendislik altyapısı."
    else:
        # Client Logos (r/1.png to 30.png)
        for i in range(1, 31):
            logos_html.append(f"""
            <div class="sky-logo-card group">
              <img src="/sm/ambar/r/{i}.png" alt="Sky Group Referans Marka {i}" loading="lazy" />
            </div>
            """)
        logos_title = "İŞ ORTAKLARIMIZ VE REFERANSLAR"
        logos_subtitle = "Türkiye'nin öncü sanayi kuruluşları ve ticari projelerinde Sky Group imzası."
    logos_grid_html = "\n".join(logos_html)

    html_template = f"""<!DOCTYPE html>
<html lang="tr" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Sky Group İklimlendirme ve Havalandırma</title>
  <meta name="description" content="{meta_desc}">
  
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Core Base Power Layout Styles -->
  <link rel="stylesheet" href="/_bpc/assets/BaseCoreSpecs.DESLp_Zg.css">
  <link rel="stylesheet" href="/_bpc/assets/core.KFUJ36fi.css">
  <link rel="stylesheet" href="/_bpc/assets/MarketingLayout.CLOcHXtv.css">

  <style>
    :root {{
      font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
      --color-brand-primary: #09bde3 !important;
      --color-brand-primary-subtle: #38bdf8 !important;
      --color-brand-primary-foreground: #061527 !important;
      --bpc-color-brand-primary: #09bde3 !important;
      --bpc-color-brand-primary-subtle: #38bdf8 !important;
      --bpc-color-brand-primary-foreground: #061527 !important;
      --color-green-100: #04111f !important;
      --color-green-90: #061527 !important;
      --color-green-80: #0d2847 !important;
      --color-green-60: #0284c7 !important;
      --color-green-50: #09bde3 !important;
      --color-green-20: #e0f2fe !important;
      --color-green-10: #f0f9ff !important;
    }}

    /* Permanent Frosted Glass Header Navigation */
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
    }}
    .bpc-nav-sheet[data-open="false"],
    .bpc-nav-sheet:not([data-open="true"]) {{
      height: 0 !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
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
    .bpc-nav-sheet button.bg-brand-primary,
    .bpc-nav-sheet .bg-brand-primary {{
      background-color: #09bde3 !important;
      color: #04111f !important;
      font-weight: 700 !important;
    }}
    .bpc-nav-sheet button.bg-brand-primary:hover,
    .bpc-nav-sheet .bg-brand-primary:hover {{
      background-color: #38bdf8 !important;
      color: #04111f !important;
    }}

    /* Mobile Drawer */
    #sky-mobile-drawer {{
      position: fixed;
      inset: 0;
      top: 60px;
      z-index: 99999;
      background: rgba(6, 21, 39, 0.96) !important;
      backdrop-filter: blur(28px) saturate(180%) !important;
      -webkit-backdrop-filter: blur(28px) saturate(180%) !important;
      border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-12px);
      transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s ease;
      overflow-y: auto;
    }}
    #sky-mobile-drawer.active {{
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(0) !important;
    }}

    /* 3-Column Swiss Showcase Layout */
    .sky-showcase-grid {{
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }}
    @media (min-width: 1024px) {{
      .sky-showcase-grid {{
        flex-direction: row;
        align-items: stretch;
        gap: 0;
      }}
      .sky-showcase-col-1 {{
        flex: 1 1 0%;
        padding-right: 3.5rem;
      }}
      .sky-showcase-col-2 {{
        flex: 1 1 0%;
        border-left: 1px solid #e2e8f0;
        padding-left: 3.5rem;
        padding-right: 3.5rem;
      }}
      .sky-showcase-col-3 {{
        flex: 0 0 38%;
        border-left: 1px solid #e2e8f0;
        padding-left: 3.5rem;
      }}
    }}
    @media (max-width: 1023px) {{
      .sky-showcase-col-2,
      .sky-showcase-col-3 {{
        border-top: 1px solid #e2e8f0;
        padding-top: 2.5rem;
      }}
    }}

    /* Filter Buttons - Crisp, Minimal, Subtle 4px Radius */
    .sky-filter-btn {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.45rem 1rem;
      border-radius: 4px !important;
      font-size: 0.8125rem;
      font-weight: 600;
      background-color: #ffffff !important;
      color: #334155 !important;
      border: 1px solid #cbd5e1 !important;
      cursor: pointer;
      transition: all 0.15s ease;
      user-select: none;
      white-space: nowrap;
    }}
    .sky-filter-btn:hover {{
      background-color: #f8fafc !important;
      color: #0f172a !important;
      border-color: #94a3b8 !important;
    }}
    .sky-filter-btn.active {{
      background-color: #061527 !important;
      color: #ffffff !important;
      border-color: #061527 !important;
      box-shadow: none !important;
    }}

    /* Cards Grid - Flat, Minimalist, Subtle 4px Radius */
    .sky-projects-grid {{
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }}
    @media (min-width: 640px) {{
      .sky-projects-grid {{
        grid-template-columns: repeat(2, 1fr);
      }}
    }}
    @media (min-width: 1024px) {{
      .sky-projects-grid {{
        grid-template-columns: repeat(3, 1fr);
        gap: 1.75rem;
      }}
    }}

    .sky-project-card {{
      background-color: #ffffff !important;
      border: 1px solid #e2e8f0 !important;
      border-radius: 4px !important;
      padding: 1rem !important;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease !important;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03) !important;
      cursor: pointer;
    }}
    .sky-project-card:hover {{
      border-color: #0f172a !important;
      box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.08) !important;
      transform: translateY(-2px);
    }}

    .sky-project-photo {{
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 2px !important;
      aspect-ratio: 16 / 10;
      background-color: #f1f5f9;
      border: 1px solid #e2e8f0;
    }}

    /* Badges - 2px Radius */
    .sky-card-cat-badge {{
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      padding: 0.25rem 0.55rem;
      border-radius: 2px !important;
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      background: #ffffff !important;
      color: #0f172a !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06) !important;
      z-index: 2;
    }}
    .sky-card-loc-badge {{
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      padding: 0.25rem 0.55rem;
      border-radius: 2px !important;
      font-size: 0.6875rem;
      font-weight: 600;
      background: rgba(6, 21, 39, 0.85) !important;
      color: #ffffff !important;
      backdrop-filter: blur(8px) !important;
      -webkit-backdrop-filter: blur(8px) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      z-index: 2;
    }}

    /* Logos Grid */
    .sky-logos-grid {{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }}
    @media (min-width: 640px) {{
      .sky-logos-grid {{
        grid-template-columns: repeat(3, 1fr);
      }}
    }}
    @media (min-width: 768px) {{
      .sky-logos-grid {{
        grid-template-columns: repeat(4, 1fr);
      }}
    }}
    @media (min-width: 1024px) {{
      .sky-logos-grid {{
        grid-template-columns: repeat(6, 1fr);
        gap: 1rem;
      }}
    }}

    .sky-logo-card {{
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 4px !important;
      padding: 1.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      transition: all 0.2s ease;
    }}
    .sky-logo-card:hover {{
      border-color: #cbd5e1;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transform: translateY(-2px);
    }}
    .sky-logo-card img {{
      max-height: 2.75rem !important;
      max-width: 85% !important;
      width: auto !important;
      height: auto !important;
      object-fit: contain !important;
      filter: grayscale(100%);
      opacity: 0.75;
      transition: all 0.2s ease;
    }}
    .sky-logo-card:hover img {{
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.05);
    }}

    /* Quote Modal */
    #sky-quote-modal {{
      position: fixed !important;
      inset: 0 !important;
      z-index: 999999 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 16px !important;
      background: rgba(6, 21, 39, 0.75) !important;
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
      box-shadow: 0 25px 60px -15px rgba(6, 21, 39, 0.35) !important;
      transform: scale(0.96);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }}
    #sky-quote-modal.active .modal-card {{
      transform: scale(1) !important;
    }}

    /* Detail Inspector Modal */
    #sky-detail-modal {{
      position: fixed !important;
      inset: 0 !important;
      z-index: 999999 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 16px !important;
      background: rgba(6, 21, 39, 0.78) !important;
      backdrop-filter: blur(14px) !important;
      -webkit-backdrop-filter: blur(14px) !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transition: opacity 0.25s ease, visibility 0.25s ease !important;
    }}
    #sky-detail-modal.active {{
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }}
    #sky-detail-modal .sky-detail-card {{
      background-color: #ffffff !important;
      color: #1e293b !important;
      border: 1px solid rgba(0, 0, 0, 0.08) !important;
      border-radius: 12px !important;
      box-shadow: 0 25px 60px -15px rgba(6, 21, 39, 0.35) !important;
      width: 100% !important;
      max-width: 680px !important;
      max-height: 90vh !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden !important;
      transform: scale(0.96);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }}
    #sky-detail-modal.active .sky-detail-card {{
      transform: scale(1) !important;
    }}
    .sky-detail-header {{
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      padding: 14px 20px !important;
      border-bottom: 1px solid #f1f5f9 !important;
      background: #fafbfc !important;
    }}
    .sky-detail-body {{
      padding: 20px !important;
      overflow-y: auto !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 16px !important;
    }}
    .sky-detail-grid {{
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 16px !important;
    }}
    @media (max-width: 640px) {{
      .sky-detail-grid {{
        grid-template-columns: 1fr !important;
      }}
    }}
    .sky-detail-img-box {{
      width: 100% !important;
      aspect-ratio: 4/3 !important;
      border-radius: 8px !important;
      overflow: hidden !important;
      background: #f1f5f9 !important;
      border: 1px solid #e2e8f0 !important;
    }}
    .sky-detail-img-box img {{
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }}
    .sky-detail-info {{
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      gap: 10px !important;
    }}
    .sky-detail-title {{
      font-size: 1.25rem !important;
      font-weight: 700 !important;
      color: #0f172a !important;
      line-height: 1.3 !important;
      margin: 0 !important;
    }}
    .sky-detail-specs-badge {{
      display: inline-flex !important;
      align-items: center !important;
      gap: 6px !important;
      padding: 4px 10px !important;
      background: #f0fdf4 !important;
      color: #166534 !important;
      border: 1px solid #bbf7d0 !important;
      border-radius: 4px !important;
      font-size: 0.75rem !important;
      font-weight: 600 !important;
      width: fit-content !important;
    }}
    .sky-detail-specs-dot {{
      width: 6px !important;
      height: 6px !important;
      border-radius: 9999px !important;
      background: #22c55e !important;
      display: inline-block !important;
    }}
    .sky-detail-desc {{
      font-size: 0.8125rem !important;
      line-height: 1.5 !important;
      color: #475569 !important;
      margin: 0 !important;
    }}
    .sky-detail-features-box {{
      background: #f8fafc !important;
      border: 1px solid #e2e8f0 !important;
      border-radius: 8px !important;
      padding: 12px 14px !important;
    }}
    .sky-detail-features-title {{
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
      font-size: 0.6875rem !important;
      font-weight: 700 !important;
      text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
      color: #0284c7 !important;
      margin-bottom: 8px !important;
    }}
    .sky-detail-features-list {{
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 8px 12px !important;
    }}
    @media (max-width: 640px) {{
      .sky-detail-features-list {{
        grid-template-columns: 1fr !important;
      }}
    }}
    .sky-detail-feature-item {{
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
      font-size: 0.75rem !important;
      color: #334155 !important;
      font-weight: 500 !important;
    }}
    .sky-detail-footer {{
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      padding: 12px 20px !important;
      border-top: 1px solid #f1f5f9 !important;
      background: #fafbfc !important;
      gap: 12px !important;
      flex-wrap: wrap !important;
    }}
    .sky-detail-contact-links {{
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      font-size: 0.75rem !important;
      font-weight: 600 !important;
      color: #64748b !important;
    }}
    .sky-detail-contact-links a {{
      display: inline-flex !important;
      align-items: center !important;
      gap: 4px !important;
      color: #0284c7 !important;
      text-decoration: none !important;
    }}
    .sky-detail-btn-group {{
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
    }}
    .sky-detail-btn-close {{
      padding: 7px 14px !important;
      border-radius: 6px !important;
      border: 1px solid #cbd5e1 !important;
      background: #ffffff !important;
      color: #475569 !important;
      font-size: 0.75rem !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: all 0.2s !important;
    }}
    .sky-detail-btn-close:hover {{
      background: #f1f5f9 !important;
      color: #0f172a !important;
    }}
    .sky-detail-btn-quote {{
      padding: 7px 14px !important;
      border-radius: 6px !important;
      border: none !important;
      background: #09bde3 !important;
      color: #04111f !important;
      font-size: 0.75rem !important;
      font-weight: 700 !important;
      cursor: pointer !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 6px !important;
      transition: background 0.2s !important;
    }}
    .sky-detail-btn-quote:hover {{
      background: #38bdf8 !important;
    }}
  </style>
</head>
<body class="bpc-theme">

  <!-- TOPNAV WRAPPER -->
  <div class="bcc-topnav-fixed">
    {topnav_html}
  </div>

  <!-- MAIN CONTENT -->
  <main class="min-h-screen bg-white" style="padding-top: 69px;">
    
    <!-- 3-COLUMN SWISS SHOWCASE SECTION -->
    <section class="max-w-[1376px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <div class="sky-showcase-grid">
        
        <!-- Col 1 -->
        <div class="sky-showcase-col-1 flex flex-col justify-start">
          {showcase_col1}
        </div>

        <!-- Col 2 -->
        <div class="sky-showcase-col-2 flex flex-col justify-start">
          {showcase_col2}
        </div>

        <!-- Col 3: Photo Card -->
        <div class="sky-showcase-col-3 flex flex-col justify-start">
          {showcase_col3}
        </div>

      </div>
    </section>

    <!-- HORIZONTAL DIVIDER -->
    <div class="max-w-[1376px] mx-auto px-6 md:px-12">
      <div class="border-t border-slate-200"></div>
    </div>

    <!-- CATALOG GRID & FILTERS SECTION -->
    <section id="sky-catalog-section" class="max-w-[1376px] mx-auto px-6 md:px-12 py-12 md:py-16">
      
      <!-- Filter Bar -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">DETAYLI KATALOG</p>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Kapsamlı Teknik İnceleme</h2>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">İlgili kategoriye göre filtreleyerek sistem detaylarını ve teknik şartnameleri inceleyin.</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          {filters_bar_html}
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="sky-projects-grid">
        {cards_grid_html}
      </div>

    </section>

    <!-- HORIZONTAL DIVIDER -->
    <div class="max-w-[1376px] mx-auto px-6 md:px-12">
      <div class="border-t border-slate-200"></div>
    </div>

    <!-- LOGOS & STANDARDS SECTION -->
    <section id="standartlar" class="max-w-[1376px] mx-auto px-6 md:px-12 py-12 md:py-16">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{logos_title}</p>
        <p class="text-sm md:text-base text-slate-600">{logos_subtitle}</p>
      </div>

      <div class="sky-logos-grid">
        {logos_grid_html}
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <div class="bcc-footer">
    {footer_html}
  </div>

  <!-- TECHNICAL DETAIL INSPECTOR MODAL -->
  {DETAIL_MODAL_HTML}

  <!-- EXECUTIVE QUOTE MODAL -->
  {MODAL_HTML}

  <!-- INTERACTIVITY JAVASCRIPT -->
  <script>
    (function() {{
      // 1. Dropdown Mega-Menu sheet interactivity (Desktop)
      const sheet = document.querySelector('.bpc-nav-sheet');
      const desktopLinks = document.querySelectorAll('nav ul a[aria-controls^="fullnav-panel"], nav ul button[aria-controls^="fullnav-panel"]');
      const panes = document.querySelectorAll('.bpc-nav-pane');
      let activeLink = null;

      function closeNav() {{
        if (sheet) {{
          sheet.setAttribute('data-open', 'false');
        }}
        desktopLinks.forEach(b => {{
          b.setAttribute('aria-expanded', 'false');
          b.classList.remove('bg-white/10');
        }});
        panes.forEach(p => {{
          p.setAttribute('data-active', 'false');
          p.setAttribute('inert', '');
        }});
        activeLink = null;
      }}

      desktopLinks.forEach(link => {{
        const targetId = link.getAttribute('aria-controls');
        if (!targetId || targetId === 'sky-mobile-drawer') return;
        const pane = document.getElementById(targetId);

        link.addEventListener('mouseenter', function() {{
          if (window.innerWidth >= 1024) {{
            closeNav();
            if (sheet) sheet.setAttribute('data-open', 'true');
            link.setAttribute('aria-expanded', 'true');
            link.classList.add('bg-white/10');
            if (pane) {{
              pane.setAttribute('data-active', 'true');
              pane.removeAttribute('inert');
            }}
            activeLink = link;
          }}
        }});

        if (link.tagName === 'BUTTON') {{
          link.addEventListener('click', function(e) {{
            e.stopPropagation();
            if (activeLink === link && sheet && sheet.getAttribute('data-open') === 'true') {{
              closeNav();
            }} else {{
              closeNav();
              if (sheet) sheet.setAttribute('data-open', 'true');
              link.setAttribute('aria-expanded', 'true');
              link.classList.add('bg-white/10');
              if (pane) {{
                pane.setAttribute('data-active', 'true');
                pane.removeAttribute('inert');
              }}
              activeLink = link;
            }}
          }});
        }}
      }});

      if (sheet) {{
        sheet.querySelectorAll('a').forEach(link => {{
          link.addEventListener('click', function() {{
            closeNav();
          }});
        }});
      }}

      const topnav = document.querySelector('.bcc-topnav');
      if (topnav) {{
        topnav.addEventListener('mouseleave', function() {{
          if (window.innerWidth >= 1024) {{
            closeNav();
          }}
        }});
      }}

      document.addEventListener('click', function(e) {{
        if (sheet && !sheet.contains(e.target) && !e.target.closest('nav')) {{
          closeNav();
        }}
      }});

      // 2. Mobile Drawer Toggle
      const burgerBtn = document.getElementById('sky-burger-btn');
      const drawer = document.getElementById('sky-mobile-drawer');
      const iconOpen = document.getElementById('sky-burger-icon-open');
      const iconClose = document.getElementById('sky-burger-icon-close');

      if (burgerBtn && drawer) {{
        burgerBtn.addEventListener('click', function() {{
          const isOpen = drawer.classList.contains('active');
          if (isOpen) {{
            drawer.classList.remove('active');
            drawer.setAttribute('aria-hidden', 'true');
            burgerBtn.setAttribute('aria-expanded', 'false');
            if (iconOpen) iconOpen.classList.remove('hidden');
            if (iconClose) iconClose.classList.add('hidden');
            document.body.style.overflow = '';
          }} else {{
            drawer.classList.add('active');
            drawer.setAttribute('aria-hidden', 'false');
            burgerBtn.setAttribute('aria-expanded', 'true');
            if (iconOpen) iconOpen.classList.add('hidden');
            if (iconClose) iconClose.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
          }}
        }});

        drawer.querySelectorAll('a').forEach(link => {{
          link.addEventListener('click', function() {{
            drawer.classList.remove('active');
            drawer.setAttribute('aria-hidden', 'true');
            burgerBtn.setAttribute('aria-expanded', 'false');
            if (iconOpen) iconOpen.classList.remove('hidden');
            if (iconClose) iconClose.classList.add('hidden');
            document.body.style.overflow = '';
          }});
        }});
      }}

      // 3. Filter Category Logic
      window.filterCategory = function(cat, shouldScroll) {{
        const buttons = document.querySelectorAll('.sky-filter-btn');
        buttons.forEach(b => {{
          if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + cat + "'")) {{
            b.classList.add('active');
          }} else {{
            b.classList.remove('active');
          }}
        }});

        const cards = document.querySelectorAll('.sky-project-card');
        cards.forEach(card => {{
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {{
            card.style.display = 'flex';
          }} else {{
            card.style.display = 'none';
          }}
        }});

        if (shouldScroll) {{
          const catSection = document.getElementById('sky-catalog-section');
          if (catSection) {{
            catSection.scrollIntoView({{ behavior: 'smooth' }});
          }}
        }}
      }};

      // 4. Detail Inspector Modal Open & Close Logic
      const detailModal = document.getElementById('sky-detail-modal');
      let currentDetailTitle = '';

      window.openItemDetail = function(el) {{
        if (!el) return;
        const title = el.getAttribute('data-title') || el.querySelector('h3')?.innerText || '';
        const specs = el.getAttribute('data-specs') || '';
        const desc = el.getAttribute('data-desc') || '';
        const image = el.getAttribute('data-image') || el.querySelector('img')?.src || '';
        const badgeCat = el.getAttribute('data-badge-cat') || '';
        const badgeLoc = el.getAttribute('data-badge-loc') || '';

        currentDetailTitle = title;

        if (!detailModal) return;

        const titleEl = document.getElementById('detail-title');
        const specsEl = document.getElementById('detail-specs');
        const descEl = document.getElementById('detail-desc');
        const imgEl = document.getElementById('detail-image');
        const catEl = document.getElementById('detail-badge-cat');
        const locEl = document.getElementById('detail-badge-loc');

        if (titleEl) titleEl.innerText = title;
        if (specsEl) specsEl.innerText = specs || 'Mühendislik Standartlarına Uygun';
        if (descEl) descEl.innerText = desc;
        if (imgEl) {{
          imgEl.src = image;
          imgEl.alt = title;
        }}
        if (catEl) catEl.innerText = badgeCat || 'Teknik Detay';
        if (locEl) locEl.innerText = badgeLoc || 'Sky Group Güvencesi';

        detailModal.classList.add('active');
        detailModal.classList.remove('opacity-0', 'pointer-events-none');
        const cardEl = detailModal.querySelector('.modal-card');
        if (cardEl) {{
          cardEl.classList.remove('scale-95');
          cardEl.classList.add('scale-100');
        }}
        document.body.style.overflow = 'hidden';
      }};

      window.closeDetailModal = function() {{
        if (!detailModal) return;
        detailModal.classList.remove('active');
        detailModal.classList.add('opacity-0', 'pointer-events-none');
        const cardEl = detailModal.querySelector('.modal-card');
        if (cardEl) {{
          cardEl.classList.add('scale-95');
          cardEl.classList.remove('scale-100');
        }}
        document.body.style.overflow = '';
      }};

      window.openQuoteForCurrentDetail = function() {{
        const title = currentDetailTitle;
        closeDetailModal();
        if (window.openQuoteModal) {{
          window.openQuoteModal(title ? (title + ' Bilgi & Teklif Talebi') : 'Mühendislik Teklifi');
        }}
      }};

      if (detailModal) {{
        detailModal.addEventListener('click', function(e) {{
          if (e.target === detailModal) {{
            closeDetailModal();
          }}
        }});
      }}

      // 5. Quote Modal Open & Close Logic
      const modal = document.getElementById('sky-quote-modal');
      const modalClose = document.getElementById('sky-modal-close');
      const modalNotes = document.getElementById('sky-modal-notes');
      const form = document.getElementById('sky-quote-form');
      const successMsg = document.getElementById('sky-form-success');

      window.openQuoteModal = function(title) {{
        if (!modal) return;
        if (title && modalNotes) {{
          modalNotes.value = title;
        }}
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }};

      function closeModal() {{
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }}

      if (modalClose) {{
        modalClose.addEventListener('click', closeModal);
      }}

      if (modal) {{
        modal.addEventListener('click', function(e) {{
          if (e.target === modal) {{
            closeModal();
          }}
        }});
      }}

      document.addEventListener('keydown', function(e) {{
        if (e.key === 'Escape') {{
          closeDetailModal();
          closeModal();
          closeNav();
        }}
      }});

      if (form) {{
        form.addEventListener('submit', function(e) {{
          e.preventDefault();
          if (successMsg) successMsg.classList.remove('hidden');
          const submitBtn = form.querySelector('button[type="submit"]');
          if (submitBtn) submitBtn.style.display = 'none';
          setTimeout(() => {{
            closeModal();
            form.reset();
            if (successMsg) successMsg.classList.add('hidden');
            if (submitBtn) submitBtn.style.display = '';
          }}, 3000);
        }});
      }}

      // Connect any trigger elements with data-sky-modal-trigger
      document.querySelectorAll('[data-sky-modal-trigger], a[href="#sky-quote-modal"]').forEach(el => {{
        el.addEventListener('click', function(e) {{
          e.preventDefault();
          const target = el.getAttribute('data-sky-modal-trigger') || 'Genel Keşif ve Fiyat Teklifi';
          openQuoteModal(target);
        }});
      }});

    }})();
  </script>
</body>
</html>
"""
    return html_template

print("Multi-page builder core module ready.")

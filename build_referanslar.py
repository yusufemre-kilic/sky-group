#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_referanslar.py
Generates referanslar.html adhering strictly to:
1. Header: 100% identical to the homepage header shown in uploaded_media_1_1792238727327.png
   (extracts exact .bcc-topnav and #sky-mobile-drawer from index.html).
2. Page Design: 100% identical to uploaded_media_0_1792238727327.png
   (clean white canvas, 3-column Swiss layout with vertical dividers, exact typography and subtitles,
   no breadcrumbs, no giant KPI stat boxes, no boxed card borders).
3. Sektörel Referans Kataloğu: Understated Swiss project cards, 30-logo wall, bottom CTA banner,
   exact footer from index.html, and executive quote modal.
"""

import os
import re
import base64
from build_pages_core import DETAIL_MODAL_HTML
from build_vlog_detail_pages import slugify

def generate_referanslar():
    index_path = '/home/emre/Desktop/sky-group-new/index.html'
    with open(index_path, 'r', encoding='utf-8') as f:
        index_html = f.read()

    fav_32_path = '/home/emre/Desktop/sky-group-new/public/favicon-32x32.png'
    fav_16_path = '/home/emre/Desktop/sky-group-new/public/favicon-16x16.png'
    with open(fav_32_path, 'rb') as f:
        fav_32_b64 = base64.b64encode(f.read()).decode('ascii')
    with open(fav_16_path, 'rb') as f:
        fav_16_b64 = base64.b64encode(f.read()).decode('ascii')

    # 1. EXTRACT EXACT TOPNAV & MOBILE DRAWER FROM INDEX.HTML
    # Look for <div class="bcc-topnav"> up to the end of topnav
    topnav_start = index_html.find('<div class="bcc-topnav">')
    if topnav_start == -1:
        raise ValueError("Could not find <div class=\"bcc-topnav\"> in index.html")
    
    # In index.html, topnav island ends right before <section class="bcc-runway">
    runway_pos = index_html.find('<section class="bcc-runway">')
    if runway_pos == -1:
        # fallback search
        runway_pos = index_html.find('<!--astro:end--></astro-island> </div>') + len('<!--astro:end--></astro-island> </div>')
    
    topnav_html = index_html[topnav_start:runway_pos].strip()

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

    # 2. EXTRACT EXACT FOOTER FROM INDEX.HTML
    footer_start = index_html.find('<div class="bcc-footer">')
    footer_end = index_html.find('<!--astro:end--></astro-island> </div>', footer_start) + len('<!--astro:end--></astro-island> </div>')
    footer_html = index_html[footer_start:footer_end].strip()

    # 3. EXTRACT EXACT MODAL FROM INDEX.HTML
    modal_start = index_html.find('<div id="sky-quote-modal"')
    # Modal ends before </main> or before footer
    modal_end = index_html.find('</div>\n    </div>\n    \n<script>\n  (function() {\n    // 1. Dropdown Mega-Menu')
    if modal_end == -1:
        modal_end = index_html.find('<!-- End Quote Modal -->')
    if modal_end != -1:
        modal_html = index_html[modal_start:modal_end+len('</div>\n    </div>')].strip()
    else:
        # standard fallback modal
        modal_html = """
    <!-- Sky Group Fiyat Teklifi & Keşif Talebi Modal -->
    <div id="sky-quote-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="modal-card relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-7 text-slate-900 max-h-[92vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-[#09bde3]/15 flex items-center justify-center text-[#09bde3]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900">Mühendislik &amp; Fiyat Teklifi</h3>
              <p class="text-xs text-slate-500">24 saat içinde metrajlı şartname</p>
            </div>
          </div>
          <button type="button" id="sky-modal-close" class="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer" aria-label="Kapat">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <form id="sky-quote-form" class="mt-3 sm:mt-4 space-y-3">
          <div>
            <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Ad Soyad / Firma Ünvanı *</label>
            <input type="text" name="fullName" required placeholder="Örn: Ahmet Yılmaz / ABC İnşaat A.Ş." class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Telefon Numarası *</label>
              <input type="tel" name="phone" required placeholder="0 (5XX) XXX XX XX" class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
            </div>
            <div>
              <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">E-Posta Adresi</label>
              <input type="email" name="email" placeholder="ornek@sirket.com" class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
            </div>
          </div>

          <div>
            <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Proje / Tesis Türü</label>
            <select name="projectType" class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all font-medium">
              <option value="Restoran &amp; Kafe">Restoran &amp; Kafe (Mutfak Davlumbaz &amp; Egzoz)</option>
              <option value="AVM &amp; Mağaza">AVM &amp; Mağaza (VRF &amp; Havalandırma)</option>
              <option value="Fabrika &amp; Endüstriyel Tesis">Fabrika &amp; Endüstriyel Tesis (Ağır Havalandırma)</option>
              <option value="Plaza &amp; Ofis Katı">Plaza &amp; Ofis Katı (Konfor İklimlendirme)</option>
              <option value="Diğer / Özel İmalat">Diğer / Özel İmalat &amp; Kanal Talebi</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Proje Notu / Metraj / Talebiniz</label>
            <textarea name="notes" rows="2" placeholder="Projenizin debisi, m² bilgisi veya özel taleplerinizi iletebilirsiniz..." class="w-full px-3 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#09bde3] focus:ring-2 focus:ring-[#09bde3]/20 transition-all resize-none font-medium"></textarea>
          </div>

          <button type="submit" style="background-color: #09bde3 !important; color: #040e1a !important;" class="w-full py-2.5 sm:py-3.5 px-4 rounded-lg font-bold text-sm sm:text-base hover:opacity-95 transition-opacity shadow-md flex items-center justify-center gap-2 cursor-pointer mt-1">
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

    # 4. BRAND LOGOS (1 to 30)
    logos_html = []
    for i in range(1, 31):
        logos_html.append(f"""
        <div class="sky-logo-card group">
          <img src="/sm/ambar/r/{i}.png" alt="Sky Group Referans Marka {i}" loading="lazy" />
        </div>
        """)
    logos_grid_html = "\n".join(logos_html)

    # 5. PROJECT CARDS DATA (15 authentic projects)
    projects = [
        {
            "id": 1,
            "title": "Maslak Hub Lounge & Restoran",
            "category": "restoran",
            "category_label": "Restoran & Yeme-İçme",
            "location": "Sarıyer, Maslak 42",
            "image": "/sm/ambar/koca_fotogal_6b5abdb48c204fe45d4b71af4bf3015c.jpg",
            "desc": "Mimari konseptle bütünleşen görünür spiral galvaniz kanallar, açık mutfak davlumbaz egzoz hattı, elektrostatik duman-yağ tutucu filtreler ve salon taze hava besleme klima santrali.",
            "specs": "18.000 m³/h Debi • Spiral Kanal",
            "featured": True
        },
        {
            "id": 2,
            "title": "Köşebaşı Kebap Zorlu Center",
            "category": "restoran",
            "category_label": "Restoran & Yeme-İçme",
            "location": "Beşiktaş, İstanbul",
            "image": "/sm/ambar/koca_fotogal_f8bf535a1daf3fc6dfbe0502229177c9.jpg",
            "desc": "Özel mangal egzoz bacaları, 400°C/2h yangına dayanıklı kanal izolasyonu, aktif karbon filtre üniteleri ve hijyenik taze hava santral beslemesi.",
            "specs": "26.000 m³/h • Yangın Tahliye",
            "featured": False
        },
        {
            "id": 3,
            "title": "Emirgan Sütiş Vadistanbul",
            "category": "restoran",
            "category_label": "Restoran & Yeme-İçme",
            "location": "Ayazağa, İstanbul",
            "image": "/sm/ambar/koca_fotogal_02b706c473c6dfb44960fefe0f2df887.jpg",
            "desc": "Yüksek müşteri kapasiteli ana salon iklimlendirmesi, mutfak egzoz hatları, akustik menfez susturucuları ve ısı geri kazanımlı HRV taze hava besleme sistemi.",
            "specs": "22.500 m³/h • HRV Isı Geri Kazanım",
            "featured": False
        },
        {
            "id": 4,
            "title": "Punto Akasya AVM",
            "category": "avm",
            "category_label": "AVM & Mağazacılık",
            "location": "Üsküdar, İstanbul",
            "image": "/sm/ambar/koca_fotogal_4e388981b679c0134ecad7ce6bc0ad21.jpg",
            "desc": "AVM tavan mimarisine uygun siyah elektrostatik fırın boyalı kanal imalatı, VRF kaset tipi iç üniteler, slot lineer difüzörler ve otomatik balans ayarları.",
            "specs": "12.000 m³/h • VRF Entegrasyonu",
            "featured": False
        },
        {
            "id": 5,
            "title": "Punto Zorlu Center",
            "category": "avm",
            "category_label": "AVM & Mağazacılık",
            "location": "Zincirlikuyu, İstanbul",
            "image": "/sm/ambar/koca_fotogal_7dcf2b3f2ac8d480ae68dd64d612f5b8.jpg",
            "desc": "Özel konsept lüks mağaza mekanik iklimlendirme ve hava dağıtımı. Gizli tavan montajı, homojen hava dağılımı ve fancoil entegrasyonu.",
            "specs": "14.000 m³/h • Akustik İzolasyon",
            "featured": False
        },
        {
            "id": 6,
            "title": "Siemens Endüstriyel Üretim Tesisi",
            "category": "endustriyel",
            "category_label": "Endüstriyel & Fabrika",
            "location": "Gebze Organize Sanayi Bölgesi",
            "image": "/sm/ambar/koca_fotogal_910f18c72e6d8ef46ca92734073d84ef.jpg",
            "desc": "Ağır sanayi üretim holü havalandırması, toz ve partikül toplama siklon filtreleri, TSE EN 1507 Class C sızdırmaz galvaniz kanal montajı ve çatı tipi egzoz fanları.",
            "specs": "85.000 m³/h • Class C Sızdırmaz",
            "featured": True
        },
        {
            "id": 7,
            "title": "Morini Zorlu Center",
            "category": "restoran",
            "category_label": "Restoran & Yeme-İçme",
            "location": "Beşiktaş, İstanbul",
            "image": "/sm/ambar/koca_fotogal_5cac43c34ab4f641e5a2f5416c24e236.jpg",
            "desc": "Seçkin İtalyan restoranı için sıfır ses kriterli iklimlendirme tasarımı, fancoil hava kanalları, difüzör montajı ve hassas test-balans (TAB) ölçümlemesi.",
            "specs": "16.000 m³/h • Akustik Susturucu",
            "featured": False
        },
        {
            "id": 8,
            "title": "Faik Sönmez Genel Merkez & Mağazaları",
            "category": "avm",
            "category_label": "AVM & Mağazacılık",
            "location": "İstanbul",
            "image": "/sm/ambar/koca_fotogal_1974677cca99f6e23ae15fda8ccfc95c.jpg",
            "desc": "Tekstil genel merkezi ve mağaza zincirleri için VRV/VRF ısıtma-soğutma, kendinden flanşlı galvaniz hava kanalları ve enerji tasarruflu havalandırma santralleri.",
            "specs": "34.000 m³/h • VRV İklimlendirme",
            "featured": False
        },
        {
            "id": 9,
            "title": "Damat Tween Brandium AVM",
            "category": "avm",
            "category_label": "AVM & Mağazacılık",
            "location": "Ataşehir, İstanbul",
            "image": "/sm/ambar/koca_fotogal_8b6a466ed354146bb946beeb058166a4.jpg",
            "desc": "Perakende mağaza hava dağıtım kanalları, fırın boyalı difüzörler, fancoil bağlantıları ve şık mimari asma tavan entegrasyonu.",
            "specs": "15.000 m³/h • Mimari Tasarım",
            "featured": False
        },
        {
            "id": 10,
            "title": "Kitchenette Bebek & Kanyon",
            "category": "restoran",
            "category_label": "Restoran & Yeme-İçme",
            "location": "Beşiktaş & Levent, İstanbul",
            "image": "/sm/ambar/koca_fotogal_a7ec0c12102543688ea827f35f53bdaf.jpg",
            "desc": "Restoran zincirinin yoğun mutfak kapasitesine özel egzoz fanları, koku tutucu karbon filtreler ve açık teras hava perdeleri montajı.",
            "specs": "20.000 m³/h • Karbon Filtrasyon",
            "featured": False
        },
        {
            "id": 11,
            "title": "Cevahir AVM Mağazalar Grubu",
            "category": "avm",
            "category_label": "AVM & Mağazacılık",
            "location": "Şişli, İstanbul",
            "image": "/sm/ambar/koca_fotogal_c29f0fe1477dfe793669db5a22a18349.jpg",
            "desc": "Türkiye'nin en büyük AVM'lerinden Cevahir bünyesindeki mağazalar için merkezi santral bağlantı kanalları, VAV kutuları ve balans vanaları montajı.",
            "specs": "45.000 m³/h • VAV Sistemleri",
            "featured": False
        },
        {
            "id": 12,
            "title": "Midpoint Nişantaşı",
            "category": "restoran",
            "category_label": "Restoran & Yeme-İçme",
            "location": "Nişantaşı, İstanbul",
            "image": "/sm/ambar/koca_fotogal_bf461e4d8a953e679ce3227615ce1f67.jpg",
            "desc": "Şehrin merkezinde sıfır koku salınımı sağlayan UV-C ve elektrostatik mutfak filtrasyon sistemi ve müşteri konfor iklimlendirmesi.",
            "specs": "18.500 m³/h • UV-C Filtre",
            "featured": False
        },
        {
            "id": 13,
            "title": "Hasel İstif Makinaları Plaza & Servis",
            "category": "plaza",
            "category_label": "Plaza & Ofis",
            "location": "Tuzla, İstanbul",
            "image": "/sm/ambar/koca_fotogal_dfc1f1e42653357ad18ccbc99f8376b3.jpg",
            "desc": "Yönetim plazası ofis katları için 4 borulu fancoil tesisatı, taze hava santrali ve servis atölyesi egzoz gazı tahliye hattı.",
            "specs": "28.000 m³/h • Fancoil & Egzoz",
            "featured": False
        },
        {
            "id": 14,
            "title": "Organize Sanayi Kimya Fabrikası",
            "category": "endustriyel",
            "category_label": "Endüstriyel & Fabrika",
            "location": "Çerkezköy OSB, Tekirdağ",
            "image": "/sm/ambar/koca_fotogal_927323f529423eba2d917ccdd5c1026c.jpg",
            "desc": "Asit buharı ve kimyasal gazlara dayanıklı paslanmaz çelik (AISI 316) hava kanalları, ex-proof çatı fanları ve gaz algılama otomasyonu.",
            "specs": "60.000 m³/h • AISI 316 Paslanmaz",
            "featured": False
        },
        {
            "id": 15,
            "title": "Sky Group İmalat Sahası & CNC Parkuru",
            "category": "endustriyel",
            "category_label": "Endüstriyel & Fabrika",
            "location": "Sky Group Tesisleri",
            "image": "/sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg",
            "desc": "Kendi modern üretim atölyemizde CNC plazma kesim, otomatik flanş çakma ve dikiş kaynak hatları ile günlük 2.500 m² galvaniz hava kanalı imalat kapasitesi.",
            "specs": "Günlük 2.500 m² Kanal İmalatı",
            "featured": True
        }
    ]

    cards_html = []
    for p in projects:
        slug = p.get('slug') or slugify(p['title'], 'proje')
        card = f"""
        <a href="/{slug}.html" class="sky-project-card group block text-left" 
             data-category="{p['category']}">
          <div class="sky-project-photo">
            <img src="{p['image']}" alt="{p['title']}" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" loading="lazy">
            <span class="sky-card-cat-badge">{p['category_label']}</span>
            <span class="sky-card-loc-badge">{p['location']}</span>
          </div>
          <div class="pt-3.5 flex flex-col flex-1">
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">{p['title']}</h3>
            <p class="text-xs font-semibold text-[#0284c7] mt-1 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#09bde3]"></span>
              <span>{p['specs']}</span>
            </p>
            <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">{p['desc']}</p>
          </div>
        </a>
        """
        cards_html.append(card)

    projects_grid_html = "\n".join(cards_html)

    # 6. ASSEMBLE FULL HTML WITH EXACT 1:1 REPLICA OF THE IMAGES
    full_html = f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Referanslar &amp; Projeler | Sky Group Endüstriyel Havalandırma</title>
  <meta name="description" content="Sky Group'un Türkiye genelinde hayata geçirdiği 250'den fazla restoran zinciri, AVM, fabrika ve plaza iklimlendirme ve havalandırma referansları.">
  <link rel="canonical" href="https://skymekanik.com/referanslar">
  
  <link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,{fav_32_b64}">
  <link rel="icon" type="image/png" sizes="16x16" href="data:image/png;base64,{fav_16_b64}">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=20261016">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=20261016">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=20261016">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=20261016">
  <meta name="theme-color" content="#061527">

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
    }}

    html, body {{
      background-color: #ffffff !important;
      color: #0f172a !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      overflow-x: clip !important;
      max-width: 100vw !important;
      width: 100% !important;
    }}

    /* 1. Header Parity with Homepage - Always Transparent Frosted Glass */
    .bcc-topnav-fixed {{
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      z-index: 9999 !important;
    }}
    .bcc-topnav-fixed .bcc-topnav nav,
    .bcc-topnav-fixed nav#main-navbar {{
      background: rgba(5, 17, 30, 0.85) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.10) !important;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
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

    /* 2. 3-Column Swiss Showcase Layout */
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

    /* Project Filter Buttons - Crisp, Minimal, Subtle Rounding */
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

    /* Project Cards Grid - Flat, Minimalist, Subtle 4px Radius */
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

    /* Card Badges - Crisp, Clean Rectangles with 2px Radius */
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
      height: 5.5rem;
      padding: 0.75rem 1rem;
      background-color: #ffffff;
      border-radius: 4px !important;
      border: 1px solid #e2e8f0;
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

    /* Sky Group Executive Swiss Quote Modal */
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

  <!-- ================= TOPNAV WRAPPER (100% IDENTICAL TO HOMEPAGE HEADER uploaded_media_1_1792238727327.png) ================= -->
  <div class="bcc-topnav-fixed">
    {topnav_html}
  </div>

  <!-- ================= MAIN CONTENT (DIRECT PARITY WITH uploaded_media_0_1792238727327.png) ================= -->
  <main class="min-h-screen bg-white" style="padding-top: 69px;">
    
    <!-- 3-COLUMN SWISS SHOWCASE SECTION (NO KPI BOXES, NO BREADCRUMBS, PURE CRISP WHITE CANVAS) -->
    <section class="max-w-[1376px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <div class="sky-showcase-grid">
        
        <!-- Col 1: SKY GROUP -->
        <div class="sky-showcase-col-1 flex flex-col justify-start">
          <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">SKY GROUP</p>
          <ul class="flex flex-col gap-8">
            <li>
              <a href="/kurumsal.html" class="block group">
                <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Hakkımızda</span>
                <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Köklü tecrübe, yetkin mühendis ve saha kadrosu.</span>
              </a>
            </li>
            <li>
              <a href="/kurumsal.html#iletisim" class="block group">
                <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">İletişim &amp; Adres</span>
                <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">0 (541) 922 19 91 | info@skymekanik.com</span>
              </a>
            </li>
            <li>
              <button type="button" onclick="filterCategory('endustriyel', true)" class="block text-left w-full group cursor-pointer">
                <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Üretim Tesisimiz</span>
                <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Modern makine parkuru ve CNC hatlarımız.</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- Col 2: KALİTE STANDARTLARI -->
        <div class="sky-showcase-col-2 flex flex-col justify-start">
          <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">KALİTE STANDARTLARI</p>
          <ul class="flex flex-col gap-8">
            <li>
              <button type="button" onclick="document.getElementById('standartlar')?.scrollIntoView({{behavior:'smooth'}})" class="block text-left w-full group cursor-pointer">
                <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Kalite Standartları</span>
                <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">ISO 9001:2015, CE, TSE EN 1886 belgeleri.</span>
              </button>
            </li>
            <li>
              <a href="/kurumsal.html" class="block group">
                <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Saha Güvenliği</span>
                <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">İş sağlığı ve güvenliğinde sıfır kaza prensibi.</span>
              </a>
            </li>
            <li>
              <button type="button" onclick="filterCategory('all', true)" class="block text-left w-full group cursor-pointer">
                <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Referans Kataloğu</span>
                <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">250+ tamamlanmış prestijli proje portföyü.</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- Col 3: Photo Card -->
        <div class="sky-showcase-col-3 flex flex-col justify-start">
          <a href="/proje-maslak-hub-lounge-restoran.html" class="group block cursor-pointer">
            <div class="relative block overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-xs" style="border-radius: 4px !important;">
              <img src="/sm/ambar/koca_fotogal_6b5abdb48c204fe45d4b71af4bf3015c.jpg" alt="Doğru İklimlendirme" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy">
              <span class="sky-card-cat-badge">Öne Çıkan Proje</span>
              <span class="sky-card-loc-badge">Maslak 42</span>
            </div>
            <h3 class="mt-4 text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Doğru İklimlendirme: Maslak Hub</h3>
            <p class="mt-2 text-sm md:text-base text-slate-500 leading-relaxed">Geleceğin tesisleri ve seçkin gastronomi mekanları için yüksek verimli mekanik çözümler üretiyoruz.</p>
          </a>
        </div>

      </div>
    </section>

    <!-- CLEAN DIVIDER -->
    <div class="max-w-[1376px] mx-auto px-4 md:px-8">
      <hr class="border-slate-200">
    </div>

    <!-- ================= CATEGORY FILTER TABS & PROJECTS GRID ================= -->
    <section class="max-w-[1376px] mx-auto px-4 md:px-8 py-12 md:py-16" id="projeler">
      
      <!-- Section Header & Filter Tabs -->
      <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 pb-4 border-b border-slate-100">
        <div>
          <p class="bpc-eyebrow text-slate-500 font-semibold tracking-wider text-xs uppercase">SEKTÖREL REFERANS KATALOĞU</p>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-1">Tamamlanan Referans Projeler</h2>
          <p class="text-sm md:text-base text-slate-500 mt-1">Sektöre göre filtreleyerek mekanik montaj detaylarını inceleyin.</p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap items-center gap-2.5" id="sky-filter-container">
          <button type="button" class="sky-filter-btn active" data-filter="all">Tümü (15)</button>
          <button type="button" class="sky-filter-btn" data-filter="restoran">Restoran &amp; Yeme-İçme (6)</button>
          <button type="button" class="sky-filter-btn" data-filter="avm">AVM &amp; Mağazacılık (5)</button>
          <button type="button" class="sky-filter-btn" data-filter="endustriyel">Endüstriyel &amp; Fabrika (3)</button>
          <button type="button" class="sky-filter-btn" data-filter="plaza">Plaza &amp; Ofis (1)</button>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="sky-projects-grid" id="sky-projects-grid">
        {projects_grid_html}
      </div>

    </section>

    <!-- ================= CORPORATE CLIENT LOGOS ================= -->
    <section id="standartlar" class="max-w-[1376px] mx-auto px-4 md:px-8 py-16 border-t border-slate-200 mt-8 bg-slate-50/50">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <p class="bpc-eyebrow text-slate-500 font-semibold tracking-wider text-xs uppercase mb-2">GÜÇLÜ MÜHENDİSLİK ÇÖZÜM ORTAKLIĞI</p>
        <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Bizi Tercih Eden Kurumsal Markalar</h2>
        <p class="text-sm md:text-base text-slate-600 mt-2">Ulusal ve uluslararası 80'den fazla seçkin kurumsal markanın iklimlendirme ve havalandırma projelerinde Sky Group kalitesi.</p>
      </div>

      <!-- Logos Wall -->
      <div class="sky-logos-grid">
        {logos_grid_html}
      </div>
    </section>

  </main>

  <!-- ================= FOOTER (100% IDENTICAL TO HOMEPAGE) ================= -->
  {footer_html}

  <!-- ================= TECHNICAL DETAIL INSPECTOR MODAL ================= -->
  {DETAIL_MODAL_HTML}

  <!-- ================= QUOTE MODAL HOST ================= -->
  {modal_html}

  <!-- ================= CLIENT INTERACTIVITY SCRIPTS ================= -->
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

      // Transparent navbar scroll transition
      const nav = document.querySelector('.bcc-topnav nav') || document.getElementById('main-navbar');
      if (nav) {{
        window.addEventListener('scroll', function() {{
          if (window.scrollY > 40) {{
            nav.classList.add('scrolled');
          }} else {{
            nav.classList.remove('scrolled');
          }}
          closeNav();
        }}, {{ passive: true }});
      }}

      desktopLinks.forEach(link => {{
        const targetId = link.getAttribute('aria-controls');
        const pane = document.getElementById(targetId);

        link.addEventListener('mouseenter', function() {{
          if (window.innerWidth >= 1024) {{
            closeNav();
            if (sheet) {{
              sheet.setAttribute('data-open', 'true');
            }}
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

      // 2. Mobile Burger Drawer Logic
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

      if (drawer) {{
        drawer.querySelectorAll('a').forEach(link => {{
          link.addEventListener('click', () => toggleMobileMenu(true));
        }});
      }}

      // 3. Category Filter Logic
      function filterCategory(category, shouldScroll) {{
        const buttons = document.querySelectorAll('.sky-filter-btn');
        const cards = document.querySelectorAll('.sky-project-card');

        buttons.forEach(btn => {{
          const btnFilter = btn.getAttribute('data-filter');
          if (btnFilter === category || (category === 'all' && btnFilter === 'all')) {{
            btn.classList.add('active');
          }} else {{
            btn.classList.remove('active');
          }}
        }});

        cards.forEach(card => {{
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {{
            card.style.display = 'flex';
            setTimeout(() => {{ card.style.opacity = '1'; }}, 10);
          }} else {{
            card.style.display = 'none';
            card.style.opacity = '0';
          }}
        }});

        if (shouldScroll) {{
          const projSection = document.getElementById('projeler');
          if (projSection) {{
            projSection.scrollIntoView({{ behavior: 'smooth' }});
          }}
        }}
      }}
      window.filterCategory = filterCategory;

      document.querySelectorAll('.sky-filter-btn').forEach(btn => {{
        btn.addEventListener('click', function() {{
          const cat = this.getAttribute('data-filter');
          filterCategory(cat);
        }});
      }});

      // 4. Detail Inspector Modal Logic
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
        if (specsEl) specsEl.innerText = specs || 'Referans Proje Mühendisliği';
        if (descEl) descEl.innerText = desc;
        if (imgEl) {{
          imgEl.src = image;
          imgEl.alt = title;
        }}
        if (catEl) catEl.innerText = badgeCat || 'Referans';
        if (locEl) locEl.innerText = badgeLoc || 'Sky Group İmzası';

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
          window.openQuoteModal(title ? (title + ' Referans Projesi Detay Talebi') : 'Mühendislik Teklifi');
        }}
      }};

      if (detailModal) {{
        detailModal.addEventListener('click', function(e) {{
          if (e.target === detailModal) {{
            closeDetailModal();
          }}
        }});
      }}

      // 5. Quote Modal Logic
      const quoteModal = document.getElementById('sky-quote-modal');
      const modalCloseBtn = document.getElementById('sky-modal-close');
      const quoteForm = document.getElementById('sky-quote-form');

      function openQuoteModal(context) {{
        if (!quoteModal) return;
        closeNav();
        toggleMobileMenu(true);

        quoteModal.classList.add('active');
        quoteModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const noteField = quoteModal.querySelector('textarea');
        if (context === 'katalog') {{
          if (noteField) noteField.value = '2026 Sky Group Ürün ve Hizmet Kataloğunun e-posta adresime gönderilmesini rica ederim.';
        }} else if (context === 'iletisim') {{
          if (noteField) noteField.value = 'Sky Group mühendislik ekibi ile teknik görüşme ve proje danışmanlığı talep ediyoruz.';
        }} else if (context === 'kesif') {{
          if (noteField) noteField.value = 'Projemiz için yerinde ücretsiz mühendislik keşfi ve debi hesabı talep ediyoruz.';
        }} else if (typeof context === 'string' && context.length > 0 && context !== 'teklif') {{
          if (noteField) noteField.value = context;
        }}
      }}
      window.openQuoteModal = openQuoteModal;

      function closeQuoteModal() {{
        if (!quoteModal) return;
        quoteModal.classList.remove('active');
        quoteModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }}
      window.closeQuoteModal = closeQuoteModal;

      if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuoteModal);
      if (quoteModal) {{
        quoteModal.addEventListener('click', function(e) {{
          if (e.target === quoteModal) closeQuoteModal();
        }});
      }}

      document.addEventListener('keydown', function(e) {{
        if (e.key === 'Escape') {{
          closeDetailModal();
          closeQuoteModal();
          closeNav();
          toggleMobileMenu(true);
        }}
      }});

      document.querySelectorAll('[data-sky-modal-trigger]').forEach(el => {{
        el.addEventListener('click', function(e) {{
          e.preventDefault();
          const ctx = el.getAttribute('data-sky-modal-trigger') || '';
          openQuoteModal(ctx);
        }});
      }});

      if (quoteForm) {{
        quoteForm.addEventListener('submit', function(e) {{
          e.preventDefault();
          const successNotice = document.getElementById('sky-form-success');
          const submitBtn = quoteForm.querySelector('button[type="submit"]');
          if (submitBtn) {{
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            submitBtn.innerText = 'Gönderiliyor...';
          }}
          setTimeout(() => {{
            if (successNotice) successNotice.classList.remove('hidden');
            if (submitBtn) submitBtn.style.display = 'none';
            setTimeout(() => {{
              closeQuoteModal();
              quoteForm.reset();
              if (successNotice) successNotice.classList.add('hidden');
              if (submitBtn) {{
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.display = 'flex';
                submitBtn.innerText = 'Teklif Talebini Gönder';
              }}
            }}, 3000);
          }}, 600);
        }});
      }}
    }})();
  </script>

</body>
</html>"""

    output_path = '/home/emre/Desktop/sky-group-new/referanslar.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(full_html)

    print(f"Successfully generated {output_path} ({len(full_html)} bytes) with exact homepage topnav & Swiss 3-column layout!")

if __name__ == '__main__':
    generate_referanslar()

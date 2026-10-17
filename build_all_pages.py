#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build all 4 new pages + update referanslar.html and index.html:
  1. urunlerimiz.html
  2. cozumlerimiz.html
  3. hizmetlerimiz.html
  4. kurumsal.html
  5. referanslar.html (removes bottom CTA banner, fixes footer & social links)
  6. index.html (fixes footer & social links, updates nav links)
"""

import os
import re
from build_pages_core import generate_page, SOCIAL_LINKS_HTML, BASE_DIR

def build_urunlerimiz():
    showcase_col1 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">ÜRÜN KATEGORİLERİ</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="filterCategory('santral', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Klima Santralleri (AHU)</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Hijyenik ve standart çift cidarlı santraller, yüksek verimli EC plug fanlar.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('kanal', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Hava Kanalı İmalatı</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">CNC plazma kesim, kendinden flanşlı galvaniz ve paslanmaz hava kanalları.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('vrf', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">VRF / VRV Sistemleri</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Değişken debili inverter ısı pompaları ve bağımsız iç üniteler.</span>
        </button>
      </li>
    </ul>
    """

    showcase_col2 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">TEKNİK STANDARTLAR</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="document.getElementById('standartlar')?.scrollIntoView({behavior:'smooth'})" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">TSE EN 1886 Güvencesi</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Sızdırmazlık sınıfı Class C, termal köprüleme TB2 ve yüksek rijitlik.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="document.getElementById('standartlar')?.scrollIntoView({behavior:'smooth'})" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Eurovent &amp; CE Sertifikaları</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Bağımsız akredite laboratuvar onaylı enerji verimi ve mekanik emniyet.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('all', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Teknik Ürün Kataloğu</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Tüm santral serileri, debi tabloları ve boyutlandırma verilerini inceleyin.</span>
        </button>
      </li>
    </ul>
    """

    showcase_col3 = """
    <a href="./urun-thks-hijyenik-klima-santrali.html" class="group block cursor-pointer">
      <div class="relative block overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-xs" style="border-radius: 4px !important;">
        <img src="./sm/ambar/urunler/thks-hijyenik-klima-santral.jpg" alt="Hijyenik Klima Santrali" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy">
        <span class="sky-card-cat-badge">Öne Çıkan Ürün</span>
        <span class="sky-card-loc-badge">DIN 1946-4 Hijyenik</span>
      </div>
      <div class="pt-4">
        <h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">THKS Hijyenik Klima Santralleri</h3>
        <p class="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">Hastaneler, ameliyathaneler, temiz odalar ve ilaç sanayi için özel olarak tasarlanmış antibakteriyel, yıkanabilir paslanmaz iç yüzeyli klima santralleri.</p>
      </div>
    </a>
    """

    filter_tabs = [
        ('all', 'Tümü', 18),
        ('santral', 'Klima Santralleri', 3),
        ('kanal', 'Hava Kanalları', 4),
        ('vrf', 'VRF / VRV', 2),
        ('hrv', 'Isı Geri Kazanım', 2),
        ('fan', 'Endüstriyel Fanlar', 3),
        ('menfez', 'Menfez & Difüzör', 2),
        ('filtre', 'Filtrasyon', 2),
    ]

    cards = [
        {
            "category": "santral",
            "title": "TKS Standart Klima Santrali",
            "specs": "1.500 - 100.000 m³/h • Çift Cidarlı",
            "desc": "Kaya yünü izolasyonlu çift cidarlı paneller, yüksek verimli EC plug fanlar ve korozyona dayanıklı alüminyum profiller ile yüksek enerji tasarrufu.",
            "image": "/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg",
            "badge_cat": "Klima Santrali",
            "badge_loc": "TSE EN 1886"
        },
        {
            "category": "santral",
            "title": "THKS Hijyenik Klima Santrali",
            "specs": "DIN 1946-4 & VDI 6022 • Paslanmaz İç Yüzey",
            "desc": "Hastaneler, laboratuvarlar ve ilaç tesisleri için antibakteriyel, paslanmaz sac iç cidarlı, sızdırmaz hepa filtreli hijyenik santraller.",
            "image": "/sm/ambar/urunler/thks-hijyenik-klima-santral-B.jpg",
            "badge_cat": "Hijyenik AHU",
            "badge_loc": "Eurovent Belgeli"
        },
        {
            "category": "santral",
            "title": "Rooftop Paket Çatı Tipi Klima",
            "specs": "Dx Soğutma Devresi • Entegre Isı Pompası",
            "desc": "AVM ve endüstriyel tesis çatılarına montaja uygun, kanal bağlantısıyla tek gövdede ısıtma, soğutma ve taze hava sağlayan paket santral.",
            "image": "/assets/images/commercial_rooftop_hvac_system_1792187202526.jpg",
            "badge_cat": "Paket Santral",
            "badge_loc": "Çatı Tipi"
        },
        {
            "category": "kanal",
            "title": "Kendinden Flanşlı Galvaniz Hava Kanalı",
            "specs": "EN 1507 Class C • CNC Plazma Kesim",
            "desc": "0.60 - 1.20 mm birinci sınıf galvaniz sacdan CNC tezgahlarında otomatik flanşlı üretilen, mastikli yüksek sızdırmazlık standardında prizmatik kanallar.",
            "image": "/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg",
            "badge_cat": "Hava Kanalı",
            "badge_loc": "EN 1507 Class C"
        },
        {
            "category": "kanal",
            "title": "Paslanmaz Çelik & Kaynaklı Hava Kanalı",
            "specs": "AISI 304 / 316 Paslanmaz • Asit Dayanımı",
            "desc": "Kimya, tekstil ve endüstriyel mutfak egzoz hatları için korozyona ve asit buharlarına tam mukavemetli tig/argon dikiş kaynaklı kanallar.",
            "image": "/assets/images/factory_pipes_ducts.jpg",
            "badge_cat": "Paslanmaz Kanal",
            "badge_loc": "AISI 316"
        },
        {
            "category": "kanal",
            "title": "Spiromatic Contalı Spiral Yuvarlak Kanal",
            "specs": "EPDM Çift Dudaklı Conta • Yüksek Basınç",
            "desc": "Mimari konsept projelerde görünür estetik hava dağıtımı sağlayan, contalı bağlantısı sayesinde sıfır hava kaçaklı spiral sarımlı yuvarlak kanallar.",
            "image": "/assets/images/architectural_spiral_ducts.jpg",
            "badge_cat": "Spiral Kanal",
            "badge_loc": "Spiromatic"
        },
        {
            "category": "kanal",
            "title": "Yangın ve Duman Damperleri",
            "specs": "EN 1366-2 Onaylı • 72°C Termal / Motorlu",
            "desc": "Yangın ve zehirli dumanın komşu mahallere geçişini 120 dakikaya kadar engelleyen, sigortalı ve servomotor kumandalı otomatik yangın damperleri.",
            "image": "/sm/ambar/urunler/yangin-sondurme-sistemleri-B.jpg",
            "badge_cat": "Yangın Damperi",
            "badge_loc": "EN 1366-2"
        },
        {
            "category": "vrf",
            "title": "VRV / VRF Değişken Debili Dış Üniteler",
            "specs": "DC Inverter • Yüksek SCOP / SEER",
            "desc": "Aynı anda bağımsız ısıtma ve soğutma sağlayan heat-recovery ve heat-pump modelleriyle enerji sarfiyatını minimize eden dış üniteler.",
            "image": "/sm/ambar/urunler/vrvvrf-sistemler-B.jpg",
            "badge_cat": "VRF Dış Ünite",
            "badge_loc": "Inverter"
        },
        {
            "category": "vrf",
            "title": "VRF İç Üniteler (Kaset, Kanallı & Gizli Tavan)",
            "specs": "Ultra Sessiz &lt;24 dB • Bağımsız Termostat",
            "desc": "Plaza ofisleri, otel odaları ve rezidanslar için tavan arkasına gizlenen fancoil ve 4 yöne üflemeli dekoratif kaset tipi iç üniteler.",
            "image": "/sm/ambar/urunler/sistem-klimalari.jpg",
            "badge_cat": "VRF İç Ünite",
            "badge_loc": "Konfor Serisi"
        },
        {
            "category": "hrv",
            "title": "Plakalı Isı Geri Kazanım Cihazları (HRV)",
            "specs": "%80'e Varan Verim • Alüminyum Eşanjör",
            "desc": "Mahalden atılan sıcak veya soğuk havanın enerjisini taze havaya transfer ederek ısıtma ve soğutma yükünü %80'e varan oranda düşüren HRV cihazları.",
            "image": "/sm/ambar/urunler/isi-geri-kazanim-cihazlari-hrv.jpg",
            "badge_cat": "Isı Geri Kazanım",
            "badge_loc": "%80 Tasarruf"
        },
        {
            "category": "hrv",
            "title": "THRV DX Isı Pompalı Isı Geri Kazanım Santrali",
            "specs": "Dahili Soğutma Gaz Devresi • EC Fanlar",
            "desc": "Ek bir dış üniteye gerek kalmadan taze havayı kışın ısıtan, yazın soğutan entegre inverter kompresörlü yüksek teknolojili taze hava santrali.",
            "image": "/sm/ambar/urunler/thrv-dx-heat-pump-isi-geri-kazanim-cihazlari.jpg",
            "badge_cat": "DX Heat Pump",
            "badge_loc": "Entegre Soğutma"
        },
        {
            "category": "fan",
            "title": "TDF Dikdörtgen Kanal Tipi Radyal Fanlar",
            "specs": "Geriye Eğik Kanat • Açılabilir Servis Kapağı",
            "desc": "Hava kanalı arasına direkt flanşla monte edilen, düşük ses seviyeli ve yüksek statik basınç üreten endüstriyel kanal fanları.",
            "image": "/sm/ambar/urunler/tdf-dikdortgen-kanal-tipi-fanlar.jpg",
            "badge_cat": "Kanal Tipi Fan",
            "badge_loc": "TDF Serisi"
        },
        {
            "category": "fan",
            "title": "Yangın ve Duman Tahliye Fanları (400°C/2h)",
            "specs": "EN 12101-3 Belgeli • F400 Dayanım",
            "desc": "Yangın anında 400 derece sıcaklıkta 2 saat boyunca kesintisiz çalışarak duman tahliyesi ve kaçış yollarında güvenli koridor oluşturan çatı ve şaft fanları.",
            "image": "/sm/ambar/urunler/yangin-sondurme-sistemleri.jpg",
            "badge_cat": "Duman Fanı",
            "badge_loc": "400°C / 2h"
        },
        {
            "category": "fan",
            "title": "Kapalı Otopark Jet Fan Sistemleri",
            "specs": "Çift Hızlı Tersinir • İndüksiyon İtme Gücü",
            "desc": "Kanalsız otopark havalandırmasında günlük egzoz ve yangın duman tahliyesini CO sensör otomasyonu ile yöneten aksiyel jet fanlar.",
            "image": "/sm/ambar/koca_fotogal_fd00ec4d1c2be4f2aa6b28a4d4855936.jpg",
            "badge_cat": "Jet Fan",
            "badge_loc": "Otopark Sistemleri"
        },
        {
            "category": "menfez",
            "title": "Lineer Slot Difüzör & Swirl Anemostad",
            "specs": "Ayarlanabilir Kanat • Homojen Dağılım",
            "desc": "Geniş hacimlerde hava sirkülasyonunu cereyansız ve homojen bir şekilde sağlayan eloksallı ve fırın boyalı difüzör serisi.",
            "image": "/sm/ambar/urunler/difuzorler.jpg",
            "badge_cat": "Hava Dağıtım",
            "badge_loc": "Mimari Seri"
        },
        {
            "category": "menfez",
            "title": "Çift Sıra Ayarlı Menfez & Dış Panjurlar",
            "specs": "Düşük Basınç Kaybı • Damperli / Dampersiz",
            "desc": "Emiş ve üfleme hatlarında hava debisi yönlendirmesi sağlayan, yağmur korumalı dış hava panjurları ve akustik menfezler.",
            "image": "/sm/ambar/urunler/menfezler.jpg",
            "badge_cat": "Menfez",
            "badge_loc": "Alüminyum"
        },
        {
            "category": "filtre",
            "title": "Endüstriyel Torba, Kaset & HEPA Filtreler",
            "specs": "G4, F7, F9 & H13/H14 • ISO 16890",
            "desc": "Klima santrallerinde taze havayı kaba partiküllerden, polenlerden ve mikroorganizmalardan arındıran yüksek toz tutma kapasiteli filtreler.",
            "image": "/sm/ambar/urunler/filtre-brosur.jpg",
            "badge_cat": "Filtrasyon",
            "badge_loc": "HEPA H14"
        },
        {
            "category": "filtre",
            "title": "Otomatik Mutfak Davlumbaz Yangın Söndürme",
            "specs": "UL 300 Sertifikalı • Mekanik & Termal Tetik",
            "desc": "Restoran ve otel mutfaklarında kızgın yağ yangınlarını sıvı kimyasalla saniyeler içinde boğan onaylı davlumbaz söndürme kitleri.",
            "image": "/sm/ambar/urunler/davlumbaz-sondurme-sistemi.jpg",
            "badge_cat": "Yangın Bastırma",
            "badge_loc": "UL 300"
        }
    ]

    html = generate_page(
        title="Ürünlerimiz - Klima Santralleri, Hava Kanalları, VRF ve Fanlar",
        meta_desc="Sky Group imalatı standart ve hijyenik klima santralleri, EN 1507 Class C galvaniz hava kanalları, VRF/VRV sistemleri ve yangın duman fanları ürün kataloğu.",
        active_nav="urunlerimiz",
        showcase_col1=showcase_col1,
        showcase_col2=showcase_col2,
        showcase_col3=showcase_col3,
        filter_tabs=filter_tabs,
        cards=cards,
        logos_type="tech"
    )

    with open(os.path.join(BASE_DIR, 'urunlerimiz.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully built urunlerimiz.html")

def build_cozumlerimiz():
    showcase_col1 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">SEKTÖREL ÇÖZÜMLERİMİZ</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="filterCategory('endustriyel', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Endüstriyel &amp; Fabrikalar</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Ağır proses havalandırması, toz toplama siklonları ve kimyasal gaz tahliyesi.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('saglik', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Sağlık &amp; Temiz Odalar</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Pozitif/negatif basınçlı ameliyathaneler, HEPA laminer akış ve steril alanlar.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('plaza', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Plaza &amp; Ticari Binalar</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">4 borulu fancoil tesisatı, VAV zonlama ve düşük desibelli taze hava beslemesi.</span>
        </button>
      </li>
    </ul>
    """

    showcase_col2 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">MÜHENDİSLİK HESAPLARI</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="filterCategory('endustriyel', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Debi &amp; Basınç Simülasyonu</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Mimari DWG çizimleri üzerinden mahal debisi ve sürtünme kaybı hesabı.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('plaza', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Akustik ve TAB Balanslama</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Düşük ses seviyesi, susturucu hesapları ve hassas menfez balans ayarları.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('all', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Maksimum Enerji Tasarrufu</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">%80'e varan ısı geri kazanım verimliliği ile işletme giderlerinde düşüş.</span>
        </button>
      </li>
    </ul>
    """

    showcase_col3 = """
    <a href="./cozum-endustriyel-ve-ticari-proje-muhendisligi.html" class="group block cursor-pointer">
      <div class="relative block overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-xs" style="border-radius: 4px !important;">
        <img src="./sm/ambar/koca_fotogal_910f18c72e6d8ef46ca92734073d84ef.jpg" alt="Endüstriyel Tesis İklimlendirme" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy">
        <span class="sky-card-cat-badge">Öne Çıkan Çözüm</span>
        <span class="sky-card-loc-badge">Anahtar Teslim</span>
      </div>
      <div class="pt-4">
        <h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Endüstriyel ve Ticari Proje Mühendisliği</h3>
        <p class="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">Mimari gereksinimlere tam uyumlu, enerji verimliliği en yüksek iklimlendirme ve havalandırma altyapısının projelendirilmesi ve imalatçı güvencesiyle devreye alınması.</p>
      </div>
    </a>
    """

    filter_tabs = [
        ('all', 'Tümü', 12),
        ('endustriyel', 'Endüstriyel & Fabrika', 3),
        ('saglik', 'Sağlık & Temiz Oda', 2),
        ('plaza', 'Plaza & Ofis', 2),
        ('avm', 'AVM & Sosyal', 2),
        ('restoran', 'Restoran & Mutfak', 2),
        ('otopark', 'Otopark & Yangın', 1),
    ]

    cards = [
        {
            "category": "endustriyel",
            "title": "Fabrika ve Üretim Tesisi Proses Havalandırması",
            "specs": "60.000 m³/h Debi • Asit ve Toz Egzozu",
            "desc": "Ağır sanayi, kimya ve plastik enjeksiyon tesislerinde çalışma ortamındaki zararlı gaz ve tozları çalışma hattından uzaklaştıran paslanmaz kanal ve siklon filtrasyon sistemleri.",
            "image": "/assets/images/factory_process_ventilation.jpg",
            "badge_cat": "Endüstriyel",
            "badge_loc": "Çerkezköy OSB"
        },
        {
            "category": "saglik",
            "title": "Ameliyathane & Temiz Oda Hijyenik İklimlendirme",
            "specs": "DIN 1946-4 • Laminer Hava Akışı (LAF)",
            "desc": "Hastanelerde mikroorganizma ve partikül riskini sıfıra indiren, pozitif basınç kontrollü hijyenik santral ve H14 hepa filtrasyon entegrasyonu.",
            "image": "/assets/images/cleanroom_operating_room.jpg",
            "badge_cat": "Sağlık",
            "badge_loc": "İstanbul Şehir Hastanesi"
        },
        {
            "category": "plaza",
            "title": "Plaza & Genel Müdürlük Fancoil & Taze Hava Sistemleri",
            "specs": "4 Borulu Fancoil • VAV Zon Kontrolü",
            "desc": "Çok katlı iş merkezlerinde kat bazında bağımsız ısıtma ve soğutma sağlayan, yüksek akustik konforlu ve enerji tasarruflu merkezi iklimlendirme tesisatı.",
            "image": "/assets/images/commercial_office_interior.jpg",
            "badge_cat": "Plaza & Ofis",
            "badge_loc": "Maslak & Levent"
        },
        {
            "category": "avm",
            "title": "AVM ve Hipermarket Geniş Hacim İklimlendirmesi",
            "specs": "Rooftop Paket Santral • Yüksek Tavan Difüzör",
            "desc": "Binlerce ziyaretçinin sirkülasyon halinde olduğu alışveriş merkezlerinde homojen sıcaklık ve taze hava dağılımı sağlayan çatı tipi rooftop santralleri.",
            "image": "/assets/images/shopping_mall_atrium.jpg",
            "badge_cat": "AVM & Sosyal",
            "badge_loc": "Akasya AVM"
        },
        {
            "category": "restoran",
            "title": "Restoran ve Otel Mutfak Koku-Duman Filtrasyonu",
            "specs": "Elektrostatik Filtre • UV-C Karbon • UL 300",
            "desc": "Yoğun ızgara ve kızartma mutfaklarında dışarıya sıfır koku salınımı sağlayan elektrostatik duman tutucu ve otomatik davlumbaz yangın bastırma hattı.",
            "image": "/assets/images/commercial_kitchen_exhaust.jpg",
            "badge_cat": "Restoran & Mutfak",
            "badge_loc": "Zorlu Center"
        },
        {
            "category": "otopark",
            "title": "Kapalı Otopark Jet Fan & Duman Tahliye Sistemleri",
            "specs": "Çift Hızlı Aksiyel • CO Gaz Sensör Otomasyonu",
            "desc": "Yeraltı katlarında kanalsız hava hareketi oluşturan indüksiyon jet fanlar ile yangın anında kaçış koridorlarını zehirli dumandan arındıran otomasyon altyapısı.",
            "image": "/assets/images/parking_garage_ventilation.jpg",
            "badge_cat": "Otopark & Yangın",
            "badge_loc": "Ankara & İstanbul"
        },
        {
            "category": "endustriyel",
            "title": "Lojistik Depo & Antrepo Sıcak Hava Apareyleri",
            "specs": "Yüksek Tavan Sirkülasyonu • Nem Alma",
            "desc": "Paletli ürün depolama sahalarında ısı kaybını önleyen sıcak hava apareyleri ve neme duyarlı havalandırma santralleri ile ideal ortam şartlandırması.",
            "image": "/assets/images/logistics_warehouse_hall.jpg",
            "badge_cat": "Lojistik & Depo",
            "badge_loc": "Gebze Lojistik Üssü"
        },
        {
            "category": "plaza",
            "title": "Otel & Rezidans Bağımsız VRF / VRV Konfor Sistemleri",
            "specs": "3 Borulu Heat Recovery • Akıllı Termostat",
            "desc": "Aynı anda bir odada ısıtma, diğerinde soğutma yapabilen 3 borulu VRF altyapısıyla otel müşterilerine maksimum konfor ve sıfır gürültü sunan sistemler.",
            "image": "/assets/images/modern_plaza_exterior.jpg",
            "badge_cat": "Rezidans & Otel",
            "badge_loc": "Nişantaşı & Beşiktaş"
        },
        {
            "category": "endustriyel",
            "title": "Veri Merkezi (Data Center) Hassas Kontrollü Soğutma",
            "specs": "CRAC / CRAH • Sıcak-Soğuk Koridor Kapatma",
            "desc": "7/24 kritik sunucu odalarında sıcaklık ve nemi ±0.5°C hassasiyetle sabitleyen, serbest soğutma (free-cooling) özellikli hassas klima çözümleri.",
            "image": "/assets/images/data_center_cooling.jpg",
            "badge_cat": "Data Center",
            "badge_loc": "Kocaeli Teknopark"
        },
        {
            "category": "avm",
            "title": "Spor Kompleksi & Yüzme Havuzu Nem Alma Santralleri",
            "specs": "Epoksi Kaplı Eşanjör • Klor Gazı Mukavemeti",
            "desc": "Yüksek buharlaşma olan kapalı havuzlarda yoğuşmayı önleyen, klor gazına mukavim korozyon dirençli paket nem alma klima santralleri.",
            "image": "/assets/images/indoor_pool_facility.jpg",
            "badge_cat": "Spor & Havuz",
            "badge_loc": "Bursa Spor Tesisleri"
        },
        {
            "category": "restoran",
            "title": "Kafe & Lounge Mimari Spiral Kanal Konsepti",
            "specs": "Mat Siyah & Bakır Fırın Boya • Contalı Spiral",
            "desc": "Açık tavan endüstriyel mimari tasarımına sahip restoranlarda görsel şıklık katan, özel ral renklerinde elektrostatik toz boyalı spiral kanal çözümleri.",
            "image": "/assets/images/architectural_spiral_ducts.jpg",
            "badge_cat": "Lounge & Restoran",
            "badge_loc": "Vadistanbul"
        },
        {
            "category": "saglik",
            "title": "İlaç ve Biyoteknoloji GMP Uyumlu İklimlendirme",
            "specs": "ISO Class 5 - 8 • Basınç Kaskadı Kontrolü",
            "desc": "İlaç dolum ve paketleme hatlarında çapraz bulaşmayı önleyen diferansiyel basınç kaskadı ve HEPA filtrasyon otomasyonu.",
            "image": "/assets/images/pharma_laboratory_clean.jpg",
            "badge_cat": "İlaç & GMP",
            "badge_loc": "Tekirdağ İlaç Fabrikası"
        }
    ]

    html = generate_page(
        title="Çözümlerimiz - Endüstriyel, Sağlık, Ticari ve Mutfak İklimlendirme",
        meta_desc="Fabrikalar, hastaneler, AVM'ler, plazalar ve restoranlar için mühendislik simülasyonları ile tasarlanan anahtar teslim mekanik tesisat çözümleri.",
        active_nav="cozumlerimiz",
        showcase_col1=showcase_col1,
        showcase_col2=showcase_col2,
        showcase_col3=showcase_col3,
        filter_tabs=filter_tabs,
        cards=cards,
        logos_type="clients"
    )

    with open(os.path.join(BASE_DIR, 'cozumlerimiz.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully built cozumlerimiz.html")

def build_hizmetlerimiz():
    showcase_col1 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">HİZMET DÖNGÜSÜ</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="filterCategory('proje', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Mühendislik &amp; Debi Hesabı</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Mahal hacimleri, ısı yükleri ve sürtünme kaybı üzerinden doğru kapasite tespiti.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('imalat', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Kendi Tesisimizde İmalat</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">CNC plazma ve flanş hatlarımızda EN 1507 Class C galvaniz kanal üretimi.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('montaj', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Anahtar Teslim Montaj</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Sertifikalı kaynakçı ve şantiye kadrosu, iş programına tam sadakat.</span>
        </button>
      </li>
    </ul>
    """

    showcase_col2 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">SAHA GÜVENCESİ &amp; TEST</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="filterCategory('servis', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Test ve Balanslama (TAB)</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Kalibre cihazlarla hava debisi, menfez üfleme hızı ve statik basınç kalibrasyonu.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('servis', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">7/24 Teknik Servis &amp; Bakım</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Periyodik filtre değişimleri, V-kayış kontrolleri ve 2 saat içinde yerinde müdahale.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="document.getElementById('standartlar')?.scrollIntoView({behavior:'smooth'})" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">2 Yıl Tam Garanti</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Tüm imalat ve montaj operasyonlarımızda üretici güvencesiyle 2 yıl tam garanti.</span>
        </button>
      </li>
    </ul>
    """

    showcase_col3 = """
    <a href="./hizmet-anahtar-teslim-saha-montaji-ve-santiye-yonetimi.html" class="group block cursor-pointer">
      <div class="relative block overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-xs" style="border-radius: 4px !important;">
        <img src="./sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg" alt="Mühendislik ve Montaj Sahası" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy">
        <span class="sky-card-cat-badge">Uçtan Uca</span>
        <span class="sky-card-loc-badge">Fabrikadan Şantiyeye</span>
      </div>
      <div class="pt-4">
        <h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Uçtan Uca Mekanik Tesisat Taahhüdü</h3>
        <p class="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">Projelendirmeden CNC imalata, sahada vinçli montajdan test ve devreye almaya kadar tek muhatapla garantili anahtar teslim hizmet.</p>
      </div>
    </a>
    """

    filter_tabs = [
        ('all', 'Tümü', 8),
        ('proje', 'Keşif & Projelendirme', 2),
        ('imalat', 'İmalat & Sac İşleme', 2),
        ('montaj', 'Şantiye & Montaj', 2),
        ('servis', 'TAB & Teknik Servis', 2),
    ]

    cards = [
        {
            "category": "proje",
            "title": "Yerinde Keşif, Debi ve Isı Yükü Simülasyonu",
            "specs": "CFD Simülasyonu • Psikrometrik Analiz",
            "desc": "Deneyimli makine mühendislerimiz mevcut tesisi veya mimari DWG çizimleri yerinde inceler; mahal bazlı taze hava debisi ve kanal sürtünme kayıplarını hesaplar.",
            "image": "/sm/ambar/koca_fotogal_1e1615508c69191e103635434b04190b.jpg",
            "badge_cat": "Projelendirme",
            "badge_loc": "Ankara & İstanbul"
        },
        {
            "category": "proje",
            "title": "Mekanik Tesisat Projelendirme & Şartname Hazırlama",
            "specs": "Shop-Drawing • As-Built • Metraj Listesi",
            "desc": "Uygulama öncesi şantiye çakışmalarını sıfırlayan koordinasyon çizimleri, keşif özetleri, teknik şartnameler ve en rekabetçi imalatçı bütçesini hazırlıyoruz.",
            "image": "/sm/ambar/koca_fotogal_484c8b3a0660cbabdad309952e7d135b.jpg",
            "badge_cat": "Projelendirme",
            "badge_loc": "Türkiye Geneli"
        },
        {
            "category": "imalat",
            "title": "CNC Parkurumuzda Kanal ve Flanş İmalatı",
            "specs": "Günlük 2.500 m² Kapasite • EN 1507 Class C",
            "desc": "Kendi fabrikamızda CNC plazma kesim tezgahları ve otomatik kendinden flanşlı büküm hatlarıyla galvaniz, paslanmaz ve dikiş kaynaklı kanal üretimi.",
            "image": "/sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg",
            "badge_cat": "İmalat",
            "badge_loc": "İvedik OSB Fabrika"
        },
        {
            "category": "imalat",
            "title": "Hijyenik ve Standart Santral İmalat & Montajı",
            "specs": "TSE EN 1886 • Eurovent Normları",
            "desc": "Çift cidarlı, kaya yünü dolgulu, antibakteriyel iç yüzeyli klima santrallerinin ve ısı geri kazanım cihazlarının modüler montajı ve fabrika testleri.",
            "image": "/sm/ambar/koca_fotogal_5712a7e4518f2c1a74f50893e4faa7af.jpg",
            "badge_cat": "İmalat",
            "badge_loc": "Sky Group Tesisleri"
        },
        {
            "category": "montaj",
            "title": "Anahtar Teslim Saha Montajı ve Şantiye Yönetimi",
            "specs": "İSG Onaylı İskele & Vinç • Sertifikalı Kadro",
            "desc": "İş sağlığı ve güvenliği kurallarına tam riayet ederek hava kanallarının, santrallerin, menfezlerin ve borulama hatlarının sahada kusursuz montajı.",
            "image": "/sm/ambar/koca_fotogal_38ce38c54201407528bf968fb7a6f6aa.jpg",
            "badge_cat": "Şantiye Montajı",
            "badge_loc": "Saha Ekipleri"
        },
        {
            "category": "montaj",
            "title": "Yangın Duman Tahliye ve Şaft İzolasyon Uygulaması",
            "specs": "400°C / 2h Taşyünü İzolasyon • Yangın Mastikleri",
            "desc": "Duman tahliye kanallarının yangın dayanımlı taş yünü ile kaplanması, şaft geçişlerinde yangın durdurucu mastikleme ve otomatik damper bağlantıları.",
            "image": "/sm/ambar/koca_fotogal_6bc7f77c0f5be682787f9ea34ea4b2fe.jpg",
            "badge_cat": "Yangın İzolasyon",
            "badge_loc": "EN 1366 Standardı"
        },
        {
            "category": "servis",
            "title": "Test, Ayar ve Balanslama (TAB) Hizmetleri",
            "specs": "Kalibre Pitot ve Anemometre • TAB Raporlaması",
            "desc": "Montaj sonrası menfez bazında hava debisi ölçümü, kanal sızdırmazlık testleri ve santral fan basınç dengesinin sağlanarak resmi TAB raporunun sunulması.",
            "image": "/sm/ambar/koca_fotogal_4df2b3096de6b454b45eda5ebebac697.jpg",
            "badge_cat": "TAB Hizmetleri",
            "badge_loc": "Resmi Onaylı"
        },
        {
            "category": "servis",
            "title": "7/24 Periyodik Bakım ve Acil Teknik Müdahale",
            "specs": "2 Saat İçinde Yerinde Müdahale • Orijinal Yedek Parça",
            "desc": "Yıllık bakım sözleşmeleri kapsamında filtre değişimleri, V-kayış gerginlik testleri, motor izolasyon ölçümleri ve 7/24 acil arıza müdahale desteği.",
            "image": "/sm/ambar/koca_fotogal_a19c98a13b30cc3a7002daf12b94817b.jpg",
            "badge_cat": "Teknik Servis",
            "badge_loc": "7/24 Acil Hat"
        }
    ]

    html = generate_page(
        title="Hizmetlerimiz - Keşif, İmalat, Montaj, TAB ve 7/24 Teknik Servis",
        meta_desc="Sky Group keşif ve debi simülasyonundan CNC kanal imalatına, anahtar teslim saha montajından test ve balanslama (TAB) ve 7/24 teknik bakıma kadar tam kapsamlı hizmet sunar.",
        active_nav="hizmetlerimiz",
        showcase_col1=showcase_col1,
        showcase_col2=showcase_col2,
        showcase_col3=showcase_col3,
        filter_tabs=filter_tabs,
        cards=cards,
        logos_type="clients"
    )

    with open(os.path.join(BASE_DIR, 'hizmetlerimiz.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully built hizmetlerimiz.html")

def build_kurumsal():
    showcase_col1 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">KURUMSAL PROFİL</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="filterCategory('hakkimizda', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Hakkımızda &amp; Tarihçe</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">20 yılı aşkın mekanik tesisat ve endüstriyel havalandırma tecrübesi.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('tesis', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Modern İmalat Tesisimiz</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Ankara İvedik OSB'de günlük 2.500 m² galvaniz hava kanalı üretim gücü.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('hakkimizda', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Yetkin Mühendis Kadrosu</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Makine mühendisleri, teknik ressamlar ve deneyimli şantiye şefleri.</span>
        </button>
      </li>
    </ul>
    """

    showcase_col2 = """
    <p class="text-slate-900 font-bold tracking-wider text-xs uppercase mb-8">KALİTE &amp; İSG STANDARTLARI</p>
    <ul class="flex flex-col gap-8">
      <li>
        <button type="button" onclick="filterCategory('kalite', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Uluslararası Sertifikasyon</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">ISO 9001:2015, TSE EN 1886, DIN 1946-4, CE ve Eurovent kalite belgeleri.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('isg', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Sıfır İş Kazası Prensibi</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Şantiyelerde en üst seviye İSG prosedürleri ve düzenli güvenlik denetimleri.</span>
        </button>
      </li>
      <li>
        <button type="button" onclick="filterCategory('iletisim', true)" class="block text-left w-full group cursor-pointer">
          <span class="block text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">İletişim &amp; Fabrika Ziyareti</span>
          <span class="block text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">İvedik OSB Mah. 1354. Cad. No: 138/6 Yenimahalle / Ankara | 0 (541) 922 19 91</span>
        </button>
      </li>
    </ul>
    """

    showcase_col3 = """
    <a href="./kurumsal-cnc-plazma-kesim-otomatik-flans-parkuru.html" class="group block cursor-pointer">
      <div class="relative block overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/80 shadow-xs" style="border-radius: 4px !important;">
        <img src="./sm/ambar/banner/sky-mekanik-723.jpg" alt="Sky Group Genel Merkez" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy">
        <span class="sky-card-cat-badge">Genel Merkez &amp; Fabrika</span>
        <span class="sky-card-loc-badge">Ankara İvedik OSB</span>
      </div>
      <div class="pt-4">
        <h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">Sky Group İmalat Sahası &amp; Mühendislik Merkezi</h3>
        <p class="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">Modern makine parkurumuz, otomatik flanş çakma hatlarımız ve CNC plazma tezgahlarımız ile Türkiye genelinde 250'den fazla projeye imza attık.</p>
      </div>
    </a>
    """

    filter_tabs = [
        ('all', 'Tümü', 10),
        ('hakkimizda', 'Hakkımızda & Kadro', 2),
        ('tesis', 'Üretim Tesisimiz', 2),
        ('kalite', 'Kalite Sertifikaları', 3),
        ('isg', 'İSG & Güvenlik', 2),
        ('iletisim', 'İletişim & Lokasyon', 1),
    ]

    cards = [
        {
            "category": "hakkimizda",
            "title": "Şirket Profili ve 20+ Yıllık Mühendislik Tecrübesi",
            "specs": "250+ Tamamlanmış Proje • 2 Yıl Tam Garanti",
            "desc": "Sky Group; iklimlendirme, endüstriyel havalandırma, klima santralleri imalatı ve mekanik taahhüt alanında yüksek mühendislik prensipleriyle kurulmuş sektörün lider taahhüt firmasıdır.",
            "image": "/sm/ambar/banner/sky-mekanik.jpg",
            "badge_cat": "Kurumsal",
            "badge_loc": "Ankara & İstanbul"
        },
        {
            "category": "hakkimizda",
            "title": "Mühendislik ve Şantiye Yönetim Kadromuz",
            "specs": "Yetkin Makine Mühendisleri • Deneyimli Şefler",
            "desc": "Projenizin ilk keşif ve simülasyon aşamasından şantiyedeki montaj ve test-balanslama adımlarına kadar her aşamayı alanında uzman mühendis kadromuzla yönetiyoruz.",
            "image": "/sm/ambar/banner/sky-mekanik-925.jpg",
            "badge_cat": "Kadro",
            "badge_loc": "Mühendislik Departmanı"
        },
        {
            "category": "tesis",
            "title": "CNC Plazma Kesim & Otomatik Flanş Parkuru",
            "specs": "Günlük 2.500 m² Kanal • Hassas Kesim",
            "desc": "Ankara İvedik OSB'deki tesisimizde bilgisayar destekli CNC plazma kesim tablaları ve tam otomatik kendinden flanşlı kanal makineleri ile yüksek hızda hatasız üretim yapıyoruz.",
            "image": "/sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg",
            "badge_cat": "Üretim Tesisimiz",
            "badge_loc": "CNC Parkuru"
        },
        {
            "category": "tesis",
            "title": "Fabrika Lojistik ve Hızlı Şantiye Sevkiyatı",
            "specs": "Yüksek Sac Stoğu • Hızlı Sevkiyat Ağı",
            "desc": "Geniş galvaniz sac ve hammadde stoğumuz sayesinde büyük ölçekli fabrika ve AVM şantiyelerinin ani kanal ve ekipman taleplerini gecikmesiz karşılıyoruz.",
            "image": "/sm/ambar/banner/sky-mekanik-719.jpg",
            "badge_cat": "Lojistik Güç",
            "badge_loc": "İvedik OSB Depo"
        },
        {
            "category": "kalite",
            "title": "ISO 9001:2015 Kalite Yönetim Sistemi",
            "specs": "Uluslararası Akredite • Sürekli İyileştirme",
            "desc": "Tüm tasarım, hammadde kabul, CNC imalat ve montaj süreçlerimiz ISO 9001:2015 uluslararası kalite yönetim standartlarına uygun olarak denetlenmekte ve belgelenmektedir.",
            "image": "/sm/ambar/t/10.png",
            "badge_cat": "Kalite Standardı",
            "badge_loc": "ISO 9001:2015"
        },
        {
            "category": "kalite",
            "title": "TSE EN 1886 Mekanik İklimlendirme Belgesi",
            "specs": "Mekanik Rijitlik D1 • Termal İletim T2/TB2",
            "desc": "Ürettiğimiz klima santralleri gövde mukavemeti, termal köprüleme ve hava kaçağı kriterlerinde TSE EN 1886 normlarının en üst sınıf başarı kriterlerini karşılar.",
            "image": "/sm/ambar/t/11.png",
            "badge_cat": "TSE Belgesi",
            "badge_loc": "TSE EN 1886"
        },
        {
            "category": "kalite",
            "title": "Eurovent & CE Avrupa Uygunluk Belgeleri",
            "specs": "EN 12101-3 Duman • EN 1507 Kanal Sızdırmazlık",
            "desc": "Avrupa Birliği CE direktiflerine tam uyumlu, bağımsız Eurovent onaylı santral bileşenleri ve 400°C/2h yangın dayanım test sertifikalı duman tahliye fanları.",
            "image": "/sm/ambar/t/26.png",
            "badge_cat": "Avrupa Normu",
            "badge_loc": "CE & Eurovent"
        },
        {
            "category": "isg",
            "title": "Şantiyelerde İş Sağlığı ve Güvenliği (İSG)",
            "specs": "Sıfır Kaza Prensibi • Sertifikalı Yüksekte Çalışma",
            "desc": "Şantiye montaj ekiplerimiz tam donanımlı KKD (Kişisel Koruyucu Donanım) ile çalışmakta, periyodik İSG eğitimleri ve risk analizleriyle güvenli montaj gerçekleştirilmektedir.",
            "image": "/sm/ambar/banner/sky-mekanik-459.jpg",
            "badge_cat": "İSG Politikası",
            "badge_loc": "Sıfır Kaza"
        },
        {
            "category": "isg",
            "title": "Çevreye Duyarlı Üretim ve Enerji Verimliliği",
            "specs": "ISO 14001 • Geri Dönüştürülebilir Malzeme",
            "desc": "İmalat atıklarının geri dönüşümü, düşük karbon ayak izi ve binalarda %80'e varan enerji tasarrufu sağlayan çevre dostu iklimlendirme sistemleri tasarımı.",
            "image": "/sm/ambar/banner/sky-mekanik-250.jpg",
            "badge_cat": "Çevre Politikası",
            "badge_loc": "ISO 14001"
        },
        {
            "category": "iletisim",
            "title": "Ankara Fabrika & Genel Merkez İletişim",
            "specs": "0 (541) 922 19 91 • info@skymekanik.com",
            "desc": "Adres: İvedik OSB Mah. 1354. Cad. No: 138/6 Yenimahalle / Ankara. Projeleriniz için doğrudan fabrikamızı ziyaret edebilir, imalat parkurumuzu inceleyebilirsiniz.",
            "image": "/sm/ambar/banner/sky-mekanik-723.jpg",
            "badge_cat": "İletişim & Ziyaret",
            "badge_loc": "Yenimahalle / Ankara"
        }
    ]

    html = generate_page(
        title="Kurumsal - Hakkımızda, Üretim Tesisimiz, Sertifikalar ve İSG",
        meta_desc="Sky Group kurumsal profili; Ankara İvedik OSB'deki modern imalat tesisimiz, makine parkurumuz, ISO 9001 ve TSE sertifikalarımız, mühendislik ekibimiz.",
        active_nav="kurumsal",
        showcase_col1=showcase_col1,
        showcase_col2=showcase_col2,
        showcase_col3=showcase_col3,
        filter_tabs=filter_tabs,
        cards=cards,
        logos_type="tech"
    )

    with open(os.path.join(BASE_DIR, 'kurumsal.html'), 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully built kurumsal.html")

def update_referanslar():
    """Update referanslar.html: remove bottom CTA banner, fix social links and footer"""
    ref_path = os.path.join(BASE_DIR, 'referanslar.html')
    with open(ref_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Remove the bottom CTA banner completely
    cta_pattern = r'<!-- =+ 5\. BOTTOM CTA BANNER[\s\S]*?</section>'
    html = re.sub(cta_pattern, '', html)

    # 2. Fix social links
    old_social_pattern = r'<div class="flex items-center gap-\[22px\] shrink-0">[\s\S]*?</div>\s*</div>\s*<svg viewBox="0 0 1389'
    new_social_replacement = SOCIAL_LINKS_HTML.strip() + '</div>\n<svg viewBox="0 0 1389'
    html = re.sub(old_social_pattern, new_social_replacement, html)

    # 3. Update footer navigation links
    html = html.replace('href="#bcc-bp"', 'href="./urunlerimiz.html"')
    html = html.replace('href="#bcc-how"', 'href="./hizmetlerimiz.html"')
    html = html.replace('href="#bcc-stress"', 'href="./cozumlerimiz.html"')
    html = html.replace('href="#bcc-fact"', 'href="./kurumsal.html"')
    html = html.replace('href="/homebuilders"', 'href="./urunlerimiz.html"')
    html = html.replace('href="/install-partners"', 'href="./cozumlerimiz.html"')

    with open(ref_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully updated referanslar.html (CTA banner removed, social links fixed)")

def update_index():
    """Update index.html: fix social links, footer links, ensure nav connects cleanly"""
    index_path = os.path.join(BASE_DIR, 'index.html')
    with open(index_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Fix social links
    old_social_pattern = r'<div class="flex items-center gap-\[22px\] shrink-0">[\s\S]*?</div>\s*</div>\s*<svg viewBox="0 0 1389'
    new_social_replacement = SOCIAL_LINKS_HTML.strip() + '</div>\n<svg viewBox="0 0 1389'
    html = re.sub(old_social_pattern, new_social_replacement, html)

    # 2. Update footer navigation links
    html = html.replace('href="#bcc-bp"', 'href="./urunlerimiz.html"')
    html = html.replace('href="#bcc-how"', 'href="./hizmetlerimiz.html"')
    html = html.replace('href="#bcc-stress"', 'href="./cozumlerimiz.html"')
    html = html.replace('href="#bcc-fact"', 'href="./kurumsal.html"')
    html = html.replace('href="/homebuilders"', 'href="./urunlerimiz.html"')
    html = html.replace('href="/install-partners"', 'href="./cozumlerimiz.html"')

    # 3. In mobile drawer, add direct prominent link for each page
    html = html.replace('<li><a href="#bcc-bp" data-target-step="0" class="block py-1 hover:text-[#09bde3]">Klima Santralleri (AHU)</a></li>',
                        '<li><a href="./urunlerimiz.html" class="block py-1 font-bold text-[#09bde3]">Tüm Ürünler Sayfası &rarr;</a></li><li><a href="/urunlerimiz.html#santral" class="block py-1 hover:text-[#09bde3]">Klima Santralleri (AHU)</a></li>')
    html = html.replace('<li><a href="#bcc-stress" class="block py-1 hover:text-[#09bde3]">Endüstriyel Tesisler &amp; Fabrikalar</a></li>',
                        '<li><a href="./cozumlerimiz.html" class="block py-1 font-bold text-[#09bde3]">Tüm Çözümlerimiz Sayfası &rarr;</a></li><li><a href="/cozumlerimiz.html#endustriyel" class="block py-1 hover:text-[#09bde3]">Endüstriyel Tesisler &amp; Fabrikalar</a></li>')
    html = html.replace('<li><a href="#bcc-how" class="block py-1 hover:text-[#09bde3]">Mühendislik &amp; Projelendirme</a></li>',
                        '<li><a href="./hizmetlerimiz.html" class="block py-1 font-bold text-[#09bde3]">Tüm Hizmetlerimiz Sayfası &rarr;</a></li><li><a href="/hizmetlerimiz.html#proje" class="block py-1 hover:text-[#09bde3]">Mühendislik &amp; Projelendirme</a></li>')
    html = html.replace('<li><a href="#bcc-fact" class="block py-1 hover:text-[#09bde3]">Hakkımızda</a></li>',
                        '<li><a href="./kurumsal.html" class="block py-1 font-bold text-[#09bde3]">Tüm Kurumsal Bilgiler &rarr;</a></li><li><a href="/kurumsal.html#hakkimizda" class="block py-1 hover:text-[#09bde3]">Hakkımızda</a></li>')

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Successfully updated index.html (social links & nav links updated)")

if __name__ == '__main__':
    build_urunlerimiz()
    build_cozumlerimiz()
    build_hizmetlerimiz()
    build_kurumsal()
    update_referanslar()
    update_index()
    print("All pages successfully built and updated!")

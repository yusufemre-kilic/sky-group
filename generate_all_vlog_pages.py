#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates rich, authentic vlog/case study detail pages for ALL items in Sky Group:
  - 15 Referanslar (Projects) -> proje-*.html
  - 18 Ürünlerimiz (Products) -> urun-*.html
  - 12 Çözümlerimiz (Solutions) -> cozum-*.html
  - 8 Hizmetlerimiz (Services) -> hizmet-*.html
  - 10 Kurumsal (Corporate Articles) -> kurumsal-*.html

Follows exact Swiss/Base Power Company design language:
  - Identical transparent topnav with mega menu
  - Minimalist breadcrumb
  - Architectural typography and high-res imagery
  - 2-Column Vlog layout:
      Left (65%): Project story / challenge, 4-step engineering execution, photo gallery, performance outcomes
      Right (35%): Sticky technical data table, standards badges, contact/quote CTA card
  - Related items grid (NO ARROWS)
  - Identical footer with social links & contact
"""

import os
import re
from build_vlog_detail_pages import slugify, extract_base_components, render_vlog_page, BASE_DIR

# 1. REFERANSLAR (15 PROJECTS)
REFERANSLAR = [
    {
        "id": 1,
        "title": "Maslak Hub Lounge & Restoran",
        "category_label": "Restoran & Yeme-İçme",
        "location": "Sarıyer, Maslak 42",
        "image": "/sm/ambar/koca_fotogal_6b5abdb48c204fe45d4b71af4bf3015c.jpg",
        "desc": "Mimari konseptle bütünleşen görünür spiral galvaniz kanallar, açık mutfak davlumbaz egzoz hattı, elektrostatik duman-yağ tutucu filtreler ve salon taze hava besleme klima santrali.",
        "specs": "18.000 m³/h Debi • Spiral Kanal",
        "challenge": "Maslak 42 kompleksinde yer alan prestijli restoran için açık tavan mimarisine uyum sağlayacak estetik hava kanalları tasarlanması, yoğun mutfak davlumbazından çıkan yağ ve kokunun sıfır kaçakla filtrelenmesi ve yemek salonunda fısıltı seviyesinde (<38 dB) sessiz iklimlendirme sağlanması gerekmiştir.",
        "execution": "Sky Group mühendisleri mimari projeye uygun 3D CFD hava dağılım modellemesi yapmış; kendi fabrikamızda üretilen Spiromatic contalı spiral galvaniz kanallar şantiyede milimetrik askı sistemleriyle monte edilmiştir. Mutfak hattına elektrostatik filtre ve aktif karbon koku tutucular entegre edilmiştir.",
        "results": [
            "18.000 m³/h debide %100 kokusuz ve dumansız mutfak egzozu",
            "Müşteri salonunda 35 dB(A) ultra sessiz akustik konfor",
            "Açık tavan mimarisiyle ödüllü endüstriyel iç mimari uyumu",
            "TSE EN 12599 standartlarında test ve balanslama (TAB) onayı"
        ],
        "specs_table": [
            ("Hava Debisi (Airflow)", "18.000 m³/h"),
            ("Statik Basınç Kaybı", "350 Pa"),
            ("Kanal Malzemesi", "Spiral Dikişli Galvaniz (Spiromatic Contalı)"),
            ("Sızdırmazlık Sınıfı", "TSE EN 1507 Class C"),
            ("Mutfak Filtrasyonu", "Elektrostatik Presipitatör + Aktif Karbon"),
            ("İklimlendirme Cihazı", "TKS Çift Cidarlı Santral + VRF Kaset"),
            ("Ses Seviyesi (Akustik)", "< 38 dB(A)"),
            ("Devreye Alma / Test", "TSE EN 12599 & TAB Raporlu")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_f8bf535a1daf3fc6dfbe0502229177c9.jpg",
            "/sm/ambar/urunler/hava-kanallari-ve-havalandirma.jpg"
        ]
    },
    {
        "id": 2,
        "title": "Köşebaşı Kebap Zorlu Center",
        "category_label": "Restoran & Yeme-İçme",
        "location": "Beşiktaş, İstanbul",
        "image": "/sm/ambar/koca_fotogal_f8bf535a1daf3fc6dfbe0502229177c9.jpg",
        "desc": "Özel mangal egzoz bacaları, 400°C/2h yangına dayanıklı kanal izolasyonu, aktif karbon filtre üniteleri ve hijyenik taze hava santral beslemesi.",
        "specs": "26.000 m³/h • Yangın Tahliye",
        "challenge": "Zorlu Center gibi üst segment bir karma yaşam merkezinde geleneksel Türk kebabı mangal dumanının sıfır koku ve duman salınımıyla tahliyesi, yangın yönetmeliklerine tam uygun 400°C/2 saat dayanımlı duman izolasyonu sağlanması talep edilmiştir.",
        "execution": "Tüm duman bacaları 2.00 mm siyah sac kaynaklı ve taş yünü seramik şilte ile 2 saat yangın yalıtımlı olarak imal edilmiş; egzoz çıkışına su yıkamalı elektrostatik filtre ve ozon jeneratörü yerleştirilerek koku molekülleri parçalanmıştır.",
        "results": [
            "26.000 m³/h yüksek emiş debisi ile açık mangal dumanının anında yakalanması",
            "Zorlu Center çevre yönetim şartnamesine %100 uygun koku filtrasyonu",
            "EN 12101-3 sertifikalı 400°C/2h yangın dayanımı",
            "Mekanik otomasyon ile debi optimizasyonu ve %25 enerji tasarrufu"
        ],
        "specs_table": [
            ("Hava Debisi (Airflow)", "26.000 m³/h"),
            ("Kanal Tipi", "2.00 mm Siyah Sac Kaynaklı Mangal Bacası"),
            ("Yangın Yalıtımı", "400°C / 2 Saat Taş Yünü Seramik Şilte"),
            ("Koku Tutucu Sistem", "Elektrostatik + Ozon Jeneratörü"),
            ("Taze Hava Cihazı", "HRV Isı Geri Kazanımlı Hijyenik Santral"),
            ("Fan Sınıfı", "F400 Sertifikalı Çift Hızlı Çatı Fanı"),
            ("Kontrol Sistemi", "Diferansiyel Basınç ve Otomasyon Panosu"),
            ("Garanti", "2 Yıl Sky Group Mühendislik Garantisi")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_6b5abdb48c204fe45d4b71af4bf3015c.jpg",
            "/sm/ambar/urunler/yangin-sondurme-sistemleri.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Emirgan Sütiş Vadistanbul",
        "category_label": "Restoran & Yeme-İçme",
        "location": "Ayazağa, İstanbul",
        "image": "/sm/ambar/koca_fotogal_02b706c473c6dfb44960fefe0f2df887.jpg",
        "desc": "Yüksek müşteri kapasiteli ana salon iklimlendirmesi, mutfak egzoz hatları, akustik menfez susturucuları ve ısı geri kazanımlı HRV taze hava besleme sistemi.",
        "specs": "22.500 m³/h • HRV Isı Geri Kazanım",
        "challenge": "Yoğun sirkülasyona sahip geniş hacimli restoranda kışın ısı kaybını önlerken taze hava sağlamak ve yazın homojen soğutma elde etmek hedeflenmiştir.",
        "execution": "Yüksek verimli plakalı ısı geri kazanım (HRV) santralleri ile egzoz havasındaki ısı enerjisi taze havaya aktarılmış, difüzör yerleşimi mimari tavan modülasyonuna tam uyumlu olarak gerçekleştirilmiştir.",
        "results": [
            "Yıllık ısıtma/soğutma enerji tüketiminde %35 verimlilik artışı",
            "Yemek kokularının salona karışmasını önleyen negatif mutfak basınç dengesi",
            "Görsel kirlilik yaratmayan estetik slot lineer difüzörler"
        ],
        "specs_table": [
            ("Kapasite", "22.500 m³/h Debi"),
            ("Isı Geri Kazanım", "Alüminyum Plakalı Eşanjör (%78 Verim)"),
            ("Kanal İmalatı", "CNC Prizmatik Kendinden Flanşlı Galvaniz"),
            ("Ses Yalıtımı", "Kanal Tipi Bölmeli Akustik Susturucular")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_5cac43c34ab4f641e5a2f5416c24e236.jpg",
            "/sm/ambar/urunler/isi-geri-kazanim-cihazlari-hrv.jpg"
        ]
    },
    {
        "id": 4,
        "title": "Punto Akasya AVM",
        "category_label": "AVM & Mağazacılık",
        "location": "Üsküdar, İstanbul",
        "image": "/sm/ambar/koca_fotogal_4e388981b679c0134ecad7ce6bc0ad21.jpg",
        "desc": "AVM tavan mimarisine uygun siyah elektrostatik fırın boyalı kanal imalatı, VRF kaset tipi iç üniteler, slot lineer difüzörler ve otomatik balans ayarları.",
        "specs": "12.000 m³/h • VRF Entegrasyonu",
        "challenge": "Lüks perakende mağaza tavanında siyah mimari açık konsept için yüksek kaliteli fırın boyalı hava kanalları ve müşterilerin üzerinde hava cereyanı hissettirmeyen difüzör akışı oluşturmak.",
        "execution": "CNC plazma kesim sonrası elektrostatik mat siyah toz fırın boya uygulanan galvaniz kanallar monte edilmiş, lineer difüzörlerle Coanda etkisi sağlanarak hava tavana yapışık üflenmiştir.",
        "results": [
            "Kusursuz mat siyah fırın boyalı mimari kanal görselliği",
            "Cereyansız ve homojen sıcaklık dağılımı",
            "Akasya AVM teknik şartnamesine tam uyum"
        ],
        "specs_table": [
            ("Hava Debisi", "12.000 m³/h"),
            ("Kanal Kaplaması", "Elektrostatik Fırın Toz Boyalı Galvaniz (RAL 9005)"),
            ("İklimlendirme", "VRF Gizli Tavan Tipi + Slot Difüzör")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_7dcf2b3f2ac8d480ae68dd64d612f5b8.jpg",
            "/sm/ambar/urunler/difuzorler.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Punto Zorlu Center",
        "category_label": "AVM & Mağazacılık",
        "location": "Zincirlikuyu, İstanbul",
        "image": "/sm/ambar/koca_fotogal_7dcf2b3f2ac8d480ae68dd64d612f5b8.jpg",
        "desc": "Özel konsept lüks mağaza mekanik iklimlendirme ve hava dağıtımı. Gizli tavan montajı, homojen hava dağılımı ve fancoil entegrasyonu.",
        "specs": "14.000 m³/h • Akustik İzolasyon",
        "challenge": "Mağaza iç mimarisinde havalandırma ekipmanlarını tamamen gizlemek ve VIP soyunma odaları dahil her alanda bağımsız hassas sıcaklık kontrolü sağlamak.",
        "execution": "Akustik izolasyonlu gizli tavan içi fancoiller ve düşük hızlı menfezler ile ses desibeli 30 dB(A)'ya çekilmiştir.",
        "results": [
            "VIP müşteri alanlarında fısıltı sessizliğinde iklimlendirme",
            "Zon bazlı bağımsız dijital termostat kontrolleri"
        ],
        "specs_table": [
            ("Debi", "14.000 m³/h"),
            ("Cihaz Tipi", "4 Borulu Fancoil & Primer Taze Hava"),
            ("Ses Düzeyi", "< 32 dB(A)")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_4e388981b679c0134ecad7ce6bc0ad21.jpg",
            "/sm/ambar/urunler/sistem-klimalari.jpg"
        ]
    },
    {
        "id": 6,
        "title": "Siemens Endüstriyel Üretim Tesisi",
        "category_label": "Endüstriyel & Fabrika",
        "location": "Gebze Organize Sanayi Bölgesi",
        "image": "/sm/ambar/koca_fotogal_910f18c72e6d8ef46ca92734073d84ef.jpg",
        "desc": "Ağır sanayi üretim holü havalandırması, toz ve partikül toplama siklon filtreleri, TSE EN 1507 Class C sızdırmaz galvaniz kanal montajı ve çatı tipi egzoz fanları.",
        "specs": "85.000 m³/h • Class C Sızdırmaz",
        "challenge": "Geniş hacimli endüstriyel üretim holünde ağır makine operasyonları kaynaklı metal tozu ve ısının çalışma seviyesinden uzaklaştırılması, yüksek tavan vinç hareket alanına zarar vermeden kanal montajı yapılması.",
        "execution": "Çatı makaslarına özel askı konsolları tasarlanarak 85.000 m³/h kapasiteli hava kanalları vinç hatlarının üzerine yerleştirilmiştir. Siklon filtreler ve yüksek basınçlı çatı egzoz fanları devreye alınmıştır.",
        "results": [
            "Hol genelinde partikül konsantrasyonunda %90 azalma",
            "İş sağlığı ve güvenliği (İSG) standartlarına tam uyum",
            "TSE EN 1507 Class C sızdırmazlık test raporu"
        ],
        "specs_table": [
            ("Toplam Debi", "85.000 m³/h"),
            ("Kanal Malzemesi", "1.20 mm Kendinden Flanşlı Galvaniz Sac"),
            ("Filtrasyon", "Otomatik Ters Yıkamalı Kartuş Siklon Filtre"),
            ("Fan Sistemi", "F400 Sertifikalı Çatı Tipi Radyal Fanlar")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_927323f529423eba2d917ccdd5c1026c.jpg",
            "/sm/ambar/urunler/tdf-dikdortgen-kanal-tipi-fanlar.jpg"
        ]
    },
    {
        "id": 7,
        "title": "Morini Zorlu Center",
        "category_label": "Restoran & Yeme-İçme",
        "location": "Beşiktaş, İstanbul",
        "image": "/sm/ambar/koca_fotogal_5cac43c34ab4f641e5a2f5416c24e236.jpg",
        "desc": "Seçkin İtalyan restoranı için sıfır ses kriterli iklimlendirme tasarımı, fancoil hava kanalları, difüzör montajı ve hassas test-balans (TAB) ölçümlemesi.",
        "specs": "16.000 m³/h • Akustik Susturucu",
        "challenge": "Üst düzey gastronomi deneyiminde konukların mekanik seslerden tamamen izole edilmesi ve mutfak pişirme kokularının salona sızmasının engellenmesi.",
        "execution": "Özel kanal içi susturucular ve değişken hızlı inverter fan kontrolü ile hava akış hızları 2.5 m/s altına çekilmiştir.",
        "results": [
            "İç ortam gürültü seviyesi NC-30 kriterinde tutulmuştur",
            "Hassas hava dengesi ile koku transferi engellenmiştir"
        ],
        "specs_table": [
            ("Debi", "16.000 m³/h"),
            ("Akustik Kriter", "NC-30 (< 35 dB)"),
            ("Hava Hızı", "< 2.5 m/s")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_6b5abdb48c204fe45d4b71af4bf3015c.jpg",
            "/sm/ambar/urunler/hava-kanallari-ve-havalandirma.jpg"
        ]
    },
    {
        "id": 8,
        "title": "Faik Sönmez Genel Merkez & Mağazaları",
        "category_label": "AVM & Mağazacılık",
        "location": "İstanbul",
        "image": "/sm/ambar/koca_fotogal_1974677cca99f6e23ae15fda8ccfc95c.jpg",
        "desc": "Tekstil genel merkezi ve mağaza zincirleri için VRV/VRF ısıtma-soğutma, kendinden flanşlı galvaniz hava kanalları ve enerji tasarruflu havalandırma santralleri.",
        "specs": "34.000 m³/h • VRV İklimlendirme",
        "challenge": "Tasarım ofisleri, kumaş depolama alanları ve mağazaların farklı nem ve sıcaklık taleplerini tek merkezden optimize etmek.",
        "execution": "VRV inverter ısı pompaları ve bağımsız kontrollü santrallerle çok bölgeli (multi-zone) iklimlendirme sağlanmıştır.",
        "results": [
            "Kumaş depolama alanında sabit %50 bağıl nem dengesi",
            "Ofis katlarında yüksek personel konforu"
        ],
        "specs_table": [
            ("Kapasite", "34.000 m³/h"),
            ("Sistem", "VRV Heat Recovery + Taze Hava Santrali")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_8b6a466ed354146bb946beeb058166a4.jpg",
            "/sm/ambar/urunler/vrvvrf-sistemler.jpg"
        ]
    },
    {
        "id": 9,
        "title": "Damat Tween Brandium AVM",
        "category_label": "AVM & Mağazacılık",
        "location": "Ataşehir, İstanbul",
        "image": "/sm/ambar/koca_fotogal_8b6a466ed354146bb946beeb058166a4.jpg",
        "desc": "Perakende mağaza hava dağıtım kanalları, fırın boyalı difüzörler, fancoil bağlantıları ve şık mimari asma tavan entegrasyonu.",
        "specs": "15.000 m³/h • Mimari Tasarım",
        "challenge": "Asma tavan aydınlatma armatürleri ile mekanik menfezlerin çakışmasını önleyen kusursuz tavan yerleşimi.",
        "execution": "Shop-drawing 3D koordinasyon çizimleriyle difüzör ve armatür aksları tam hizalanmıştır.",
        "results": ["Kusursuz tavan simetrisi ve konforlu iklimlendirme"],
        "specs_table": [
            ("Debi", "15.000 m³/h"),
            ("Difüzör", "Lineer Slot Difüzör")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_1974677cca99f6e23ae15fda8ccfc95c.jpg",
            "/sm/ambar/urunler/difuzorler.jpg"
        ]
    },
    {
        "id": 10,
        "title": "Kitchenette Bebek & Kanyon",
        "category_label": "Restoran & Yeme-İçme",
        "location": "Beşiktaş & Levent, İstanbul",
        "image": "/sm/ambar/koca_fotogal_a7ec0c12102543688ea827f35f53bdaf.jpg",
        "desc": "Restoran zincirinin yoğun mutfak kapasitesine özel egzoz fanları, koku tutucu karbon filtreler ve açık teras hava perdeleri montajı.",
        "specs": "20.000 m³/h • Karbon Filtrasyon",
        "challenge": "Yoğun mutfak operasyonunun açık teras oturan müşterileri rahatsız etmemesi ve açık kapılardan kışın soğuk hava girmemesi.",
        "execution": "Giriş ve teras geçişlerine yüksek hızlı sıcak hava perdeleri yerleştirilmiş, mutfak egzozu çatıda aktif karbon filtrelerden geçirilmiştir.",
        "results": ["Açık kapı ısı kayıplarında %70 azalma, sıfır koku şikayeti"],
        "specs_table": [
            ("Debi", "20.000 m³/h"),
            ("Ekipman", "Aktif Karbon Kasetler + Endüstriyel Hava Perdeleri")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_6b5abdb48c204fe45d4b71af4bf3015c.jpg",
            "/sm/ambar/urunler/hava-perdeleri.jpg"
        ]
    },
    {
        "id": 11,
        "title": "Cevahir AVM Mağazalar Grubu",
        "category_label": "AVM & Mağazacılık",
        "location": "Şişli, İstanbul",
        "image": "/sm/ambar/koca_fotogal_c29f0fe1477dfe793669db5a22a18349.jpg",
        "desc": "Türkiye'nin en büyük AVM'lerinden Cevahir bünyesindeki mağazalar için merkezi santral bağlantı kanalları, VAV kutuları ve balans vanaları montajı.",
        "specs": "45.000 m³/h • VAV Sistemleri",
        "challenge": "Günün farklı saatlerinde değişen müşteri yoğunluğuna göre dinamik hava debisi ayarlaması yaparak enerji israfını engellemek.",
        "execution": "Değişken debili VAV üniteleri ve motorlu yangın damperleri ile merkezi bina otomasyonuna tam entegre sistem kurulmuştur.",
        "results": ["%40'a varan fan enerjisi tasarrufu ve hassas sıcaklık kontrolü"],
        "specs_table": [
            ("Debi", "45.000 m³/h"),
            ("Kontrol", "Modbus Haberleşmeli VAV Terminal Üniteleri")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_4e388981b679c0134ecad7ce6bc0ad21.jpg",
            "/sm/ambar/urunler/yangin-sondurme-sistemleri.jpg"
        ]
    },
    {
        "id": 12,
        "title": "Midpoint Nişantaşı",
        "category_label": "Restoran & Yeme-İçme",
        "location": "Nişantaşı, İstanbul",
        "image": "/sm/ambar/koca_fotogal_bf461e4d8a953e679ce3227615ce1f67.jpg",
        "desc": "Şehrin merkezinde sıfır koku salınımı sağlayan UV-C ve elektrostatik mutfak filtrasyon sistemi ve müşteri konfor iklimlendirmesi.",
        "specs": "18.500 m³/h • UV-C Filtre",
        "challenge": "Nişantaşı gibi yoğun konut ve yaya trafiğine sahip bölgede mutfak atık havasının sıfır koku ile çatı seviyesinden atılması.",
        "execution": "UV-C ozon fotoliz filtreleme ve elektrostatik yağ ayrıştırıcılar ile egzoz gazı organik bileşenlerden tamamen temizlenmiştir.",
        "results": ["Komşu binalardan sıfır koku şikayeti ve tam çevre uyumu"],
        "specs_table": [
            ("Debi", "18.500 m³/h"),
            ("Teknoloji", "UV-C Fotolitik Ozonlama + Elektrostatik Presipitatör")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_5cac43c34ab4f641e5a2f5416c24e236.jpg",
            "/sm/ambar/urunler/davlumbaz-sondurme-sistemi.jpg"
        ]
    },
    {
        "id": 13,
        "title": "Hasel İstif Makinaları Plaza & Servis",
        "category_label": "Plaza & Ofis",
        "location": "Tuzla, İstanbul",
        "image": "/sm/ambar/koca_fotogal_dfc1f1e42653357ad18ccbc99f8376b3.jpg",
        "desc": "Yönetim plazası ofis katları için 4 borulu fancoil tesisatı, taze hava santrali ve servis atölyesi egzoz gazı tahliye hattı.",
        "specs": "28.000 m³/h • Fancoil & Egzoz",
        "challenge": "Aynı bina içinde hem prestijli yönetim ofisleri hem de ağır servis atölyesinde zehirli egzoz gazlarının tahliyesinin güvenle çözülmesi.",
        "execution": "Atölye zeminine hortumlu egzoz çekici makaralar konulmuş, ofis katları ise bağımsız primer havalandırma santralleriyle beslenmiştir.",
        "results": ["Servis atölyesinde sıfır CO birikimi, ofis katlarında yüksek konfor"],
        "specs_table": [
            ("Kapasite", "28.000 m³/h"),
            ("Uygulama", "Egzoz Tahliye Makaraları + Çift Cidarlı Klima Santrali")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_910f18c72e6d8ef46ca92734073d84ef.jpg",
            "/sm/ambar/urunler/merkezi-sistemler.jpg"
        ]
    },
    {
        "id": 14,
        "title": "Organize Sanayi Kimya Fabrikası",
        "category_label": "Endüstriyel & Fabrika",
        "location": "Çerkezköy OSB, Tekirdağ",
        "image": "/sm/ambar/koca_fotogal_927323f529423eba2d917ccdd5c1026c.jpg",
        "desc": "Asit buharı ve kimyasal gazlara dayanıklı paslanmaz çelik (AISI 316) hava kanalları, ex-proof çatı fanları ve gaz algılama otomasyonu.",
        "specs": "60.000 m³/h • AISI 316 Paslanmaz",
        "challenge": "Kimyasal reaktör alanlarında korozyona yol açan asit buharlarının standart galvaniz sacı çürütmesi ve patlama riski taşıması.",
        "execution": "Tüm hatlar AISI 316 kalite paslanmaz çelikten TIG/argon kaynaklı sızdırmaz olarak üretilmiş, ATEX Zone 1 uyumlu ex-proof fanlar bağlanmıştır.",
        "results": ["Tam kimyasal korozyon dayanımı ve ATEX emniyeti"],
        "specs_table": [
            ("Debi", "60.000 m³/h"),
            ("Malzeme", "AISI 316 Paslanmaz Çelik Kaynaklı"),
            ("Güvenlik", "ATEX Ex-Proof Sertifikası")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_910f18c72e6d8ef46ca92734073d84ef.jpg",
            "/sm/ambar/urunler/hava-kanallari-ve-havalandirma.jpg"
        ]
    },
    {
        "id": 15,
        "title": "Sky Group İmalat Sahası & CNC Parkuru",
        "category_label": "Endüstriyel & Fabrika",
        "location": "Sky Group Tesisleri",
        "image": "/sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg",
        "desc": "Kendi modern üretim atölyemizde CNC plazma kesim, otomatik flanş çakma ve dikiş kaynak hatları ile günlük 2.500 m² galvaniz hava kanalı imalat kapasitesi.",
        "specs": "Günlük 2.500 m² Kanal İmalatı",
        "challenge": "Şantiyelere en hızlı teslimat ve yüksek sızdırmazlık standardında kanal üretimi sağlamak amacıyla imalat parkurunun tam otomasyona geçirilmesi.",
        "execution": "CNC plazma tezgâhları, otomatik kendinden flanşlı kanal makineleri ve boyler-tank üretim hatları entegre edilmiştir.",
        "results": [
            "Günlük 2.500 m² yüksek kaliteli hava kanalı fabrikasyonu",
            "TSE EN 1507 Class C standardında sıfır hata toleransı",
            "Doğrudan imalatçı fiyat avantajı"
        ],
        "specs_table": [
            ("Kapasite", "2.500 m² / Gün"),
            ("Parkur", "CNC Plazma Kesim, Otomatik Flanşlama, Dikiş Kaynak"),
            ("Standart", "TSE EN 1507 Class C")
        ],
        "gallery_images": [
            "/sm/ambar/koca_fotogal_484c8b3a0660cbabdad309952e7d135b.jpg",
            "/sm/ambar/urunler/hava-kanallari-ve-havalandirma.jpg"
        ]
    }
]

# Set slug for each project
for p in REFERANSLAR:
    p['slug'] = slugify(p['title'], 'proje')

print(f"Loaded {len(REFERANSLAR)} authentic referans projects.")

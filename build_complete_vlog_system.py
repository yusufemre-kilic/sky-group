#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build Complete Vlog System:
  1. Generates 63 dedicated Vlog / Case Study detail pages:
     - 15 Referanslar -> proje-*.html
     - 18 Ürünler -> urun-*.html
     - 12 Çözümler -> cozum-*.html
     - 8 Hizmetler -> hizmet-*.html
     - 10 Kurumsal -> kurumsal-*.html
  2. Updates all cards across the 5 main pages:
     - REMOVES ALL BIG ARROWS & ARROW FOOTERS
     - Turns cards into direct <a> links to their dedicated pages
  3. Updates showcase Col 3 cards to link directly without arrows
  4. Dynamically registers all HTML files in vite.config.js
"""

import os
import re
import glob
from build_vlog_detail_pages import (
    slugify, extract_base_components, render_vlog_page, BASE_DIR
)
from generate_all_vlog_pages import REFERANSLAR

# 2. URUNLER (18 PRODUCTS)
URUNLER = [
    {
        "title": "TKS Standart Klima Santrali",
        "category": "santral",
        "badge_cat": "Klima Santrali",
        "badge_loc": "TSE EN 1886",
        "specs": "1.500 - 100.000 m³/h • Çift Cidarlı",
        "desc": "Kaya yünü izolasyonlu çift cidarlı paneller, yüksek verimli EC plug fanlar ve korozyona dayanıklı alüminyum profiller ile yüksek enerji tasarrufu.",
        "image": "/sm/ambar/urunler/tks-standart-klima-santrali-B.jpg",
        "gallery_images": [
            "/assets/images/commercial_rooftop_hvac_system_1792187202526.jpg",
            "/assets/images/factory_plant_interior.jpg"
        ],
        "challenge": "Büyük hacimli ticari ve endüstriyel binalarda yüksek hava debisini minimum enerji tüketimi ve düşük ses seviyesi ile şartlandırmak.",
        "execution": "TSE EN 1886 D1 rijitlik ve TB2 termal köprüleme sınıfında üretilen TKS serisi; IE4 verimlilik sınıfı EC plug fanlar ve optimize edilmiş ısıtma/soğutma bataryalarıyla donatılmıştır.",
        "results": [
            "100.000 m³/h'e kadar esnek modüler debi kapasitesi",
            "Eurovent sertifikalı enerji tasarrufu ve düşük işletme maliyeti",
            "Termal köprüsüz profil yapısıyla terleme ve yoğuşma riski sıfırlanmıştır",
            "Tak-çalıştır DDC / PLC otomasyon panosu entegrasyonu"
        ],
        "specs_table": [
            ("Debi Aralığı", "1.500 - 100.000 m³/h"),
            ("Panel Yapısı", "50 mm Taş Yünü Dolgulu Çift Cidarlı"),
            ("Fan Tipi", "EC Plug Fan (Doğrudan Akuple)"),
            ("Gövde Standardı", "TSE EN 1886 (D1, L1, T2, TB2)"),
            ("Filtrasyon", "G4 Ön Filtre + F7/F9 Kompakt Torba Filtre"),
            ("Sertifikalar", "TSE • Eurovent • CE • ISO 9001")
        ]
    },
    {
        "title": "THKS Hijyenik Klima Santrali",
        "category": "santral",
        "badge_cat": "Hijyenik AHU",
        "badge_loc": "Eurovent Belgeli",
        "specs": "DIN 1946-4 & VDI 6022 • Paslanmaz İç Yüzey",
        "desc": "Hastaneler, laboratuvarlar ve ilaç tesisleri için antibakteriyel, paslanmaz sac iç cidarlı, sızdırmaz hepa filtreli hijyenik santraller.",
        "image": "/sm/ambar/urunler/thks-hijyenik-klima-santral-B.jpg",
        "gallery_images": [
            "/assets/images/cleanroom_operating_room.jpg",
            "/assets/images/pharma_laboratory_clean.jpg"
        ],
        "challenge": "Ameliyathane ve temiz odalarda mikroorganizma, bakteri ve partikül oluşumunu sıfırlayan mutlak steril hava ortamı yaratmak.",
        "execution": "DIN 1946-4 ve VDI 6022 normlarına uygun olarak santral içi köşeleri kavisli, pürüzsüz AISI 304 paslanmaz çelikten üretilmiş; dezenfeksiyona dayanıklı contalar ve H14 HEPA filtre yuvaları entegre edilmiştir.",
        "results": [
            "DIN 1946-4 Hastane ve Temiz Oda standardına %100 uygunluk",
            "Antibakteriyel ve yıkanabilir sızdırmaz iç yüzeyler",
            "Partikül tutma verimi %99.995 (H14 HEPA)"
        ],
        "specs_table": [
            ("Standart", "DIN 1946-4 & VDI 6022"),
            ("İç Cidar", "AISI 304 Paslanmaz Çelik (Radyuslu Köşeler)"),
            ("Filtrasyon Kademesi", "G4 + F9 + H13 / H14 HEPA"),
            ("Sızdırmazlık", "Class L1 (EN 1886 En Üst Seviye)")
        ]
    },
    {
        "title": "Rooftop Paket Çatı Tipi Klima",
        "category": "santral",
        "badge_cat": "Paket Santral",
        "badge_loc": "Çatı Tipi",
        "specs": "Dx Soğutma Devresi • Entegre Isı Pompası",
        "desc": "AVM ve endüstriyel tesis çatılarına montaja uygun, kanal bağlantısıyla tek gövdede ısıtma, soğutma ve taze hava sağlayan paket santral.",
        "image": "/assets/images/commercial_rooftop_hvac_system_1792187202526.jpg",
        "gallery_images": [
            "/assets/images/commercial_rooftop_hvac_autumn_rainy_1792187279202.jpg",
            "/assets/images/rooftop_hvac_winter_snowstorm_1792187313401.jpg"
        ],
        "challenge": "İç mekânda kazan veya soğutma grubu dairesi için yer bulunmayan projelerde tek bir dış ortam cihazıyla komple iklimlendirme sağlamak.",
        "execution": "Çatıya vinçle konumlandırılan, dahili soğutucu gaz devresi ve scroll kompresörleri olan paket cihaz doğrudan hava kanalına bağlanmıştır.",
        "results": ["Kazan dairesi ve borulama maliyetini ortadan kaldıran pratik montaj"],
        "specs_table": [
            ("Soğutma Kapasitesi", "20 kW - 300 kW"),
            ("Gaz Tipi", "R410A / R32 Çevre Dostu Soğutucu Gaz"),
            ("Montaj", "Çatı Kaidesi Üzerine Direkt Kanal Bağlantısı")
        ]
    },
    {
        "title": "Kendinden Flanşlı Galvaniz Hava Kanalı",
        "category": "kanal",
        "badge_cat": "Hava Kanalı",
        "badge_loc": "EN 1507 Class C",
        "specs": "EN 1507 Class C • CNC Plazma Kesim",
        "desc": "0.60 - 1.20 mm birinci sınıf galvaniz sacdan CNC tezgahlarında otomatik flanşlı üretilen, mastikli yüksek sızdırmazlık standardında prizmatik kanallar.",
        "image": "/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg",
        "gallery_images": [
            "/assets/images/cnc_sheet_metal_cutting.jpg",
            "/assets/images/factory_pipes_ducts.jpg"
        ],
        "challenge": "Büyük metrajlı şantiyelerde hava kaçağını önleyerek fan enerjisini düşürmek ve montaj hızını artırmak.",
        "execution": "Kendi fabrikamızda CNC plazma kesim ve otomatik kendinden flanşlı büküm makineleriyle üretilmiş, flanş içlerine fabrikasyon sızdırmazlık mastiği çekilmiştir.",
        "results": ["TSE EN 1507 Class C sızdırmazlık sertifikası ile sıfır hava kaçağı"],
        "specs_table": [
            ("Sac Kalınlığı", "0.60 mm - 1.20 mm DX51D Galvaniz"),
            ("Flanş Tipi", "20 mm / 30 mm Kendinden Flanşlı (TDC/TDF)"),
            ("Basınç Sınıfı", "± 2.000 Pa Çalışma Basıncı")
        ]
    },
    {
        "title": "Paslanmaz Çelik & Kaynaklı Hava Kanalı",
        "category": "kanal",
        "badge_cat": "Paslanmaz Kanal",
        "badge_loc": "AISI 316",
        "specs": "AISI 304 / 316 Paslanmaz • Asit Dayanımı",
        "desc": "Kimya, tekstil ve endüstriyel mutfak egzoz hatları için korozyona ve asit buharlarına tam mukavemetli tig/argon dikiş kaynaklı kanallar.",
        "image": "/assets/images/factory_pipes_ducts.jpg",
        "gallery_images": [
            "/assets/images/cnc_sheet_metal_cutting.jpg",
            "/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg"
        ],
        "challenge": "Agresif kimyasallar, asit buharları ve yüksek yağ buharının galvaniz sacı aşındırmasını önlemek.",
        "execution": "AISI 316L paslanmaz çelik saclar argon dikiş kaynağı ile gaz sızdırmaz biçimde birleştirilmiştir.",
        "results": ["Korozyona karşı 20+ yıl ömür ve %100 gaz sızdırmazlığı"],
        "specs_table": [
            ("Sac Kalitesi", "AISI 304 / AISI 316L Paslanmaz Çelik"),
            ("Kaynak Yöntemi", "TIG / Sürekli Boyuna Dikiş Kaynaklı"),
            ("Uygulama", "Mutfak Egzozu, Kimya ve İlaç Fabrikaları")
        ]
    },
    {
        "title": "Spiromatic Contalı Spiral Yuvarlak Kanal",
        "category": "kanal",
        "badge_cat": "Spiral Kanal",
        "badge_loc": "Spiromatic",
        "specs": "EPDM Çift Dudaklı Conta • Yüksek Basınç",
        "desc": "Mimari konsept projelerde görünür estetik hava dağıtımı sağlayan, contalı bağlantısı sayesinde sıfır hava kaçaklı spiral sarımlı yuvarlak kanallar.",
        "image": "/assets/images/architectural_spiral_ducts.jpg",
        "gallery_images": [
            "/sm/ambar/urunler/hava-kanallari-ve-havalandirma-B.jpg",
            "/assets/images/restaurant_lounge_interior.jpg"
        ],
        "challenge": "Açık tavanlı modern kafe, ofis ve spor salonlarında estetik görüntü ve yüksek statik basınç dayanımı sağlamak.",
        "execution": "Otomatik spiral boru makinesinde EPDM kauçuk çift dudaklı contalı fitinglerle vidasız ve mastiksiz tak-çalıştır birleşim.",
        "results": ["Minimalist endüstriyel iç mimari tasarım ve Class D sızdırmazlık"],
        "specs_table": [
            ("Çap Aralığı", "Ø 100 mm - Ø 1.250 mm"),
            ("Conta Standardı", "EPDM Çift Dudaklı Fabrikasyon Conta"),
            ("Sızdırmazlık", "Eurovent Class D Onaylı")
        ]
    },
    {
        "title": "Yangın ve Duman Damperleri",
        "category": "kanal",
        "badge_cat": "Yangın Damperi",
        "badge_loc": "EN 1366-2",
        "specs": "EN 1366-2 Onaylı • 72°C Termal / Motorlu",
        "desc": "Yangın ve zehirli dumanın komşu mahallere geçişini 120 dakikaya kadar engelleyen, sigortalı ve servomotor kumandalı otomatik yangın damperleri.",
        "image": "/sm/ambar/urunler/yangin-sondurme-sistemleri-B.jpg",
        "challenge": "Yangın anında hava kanalları üzerinden alev ve dumanın diğer katlara yayılmasını önlemek.",
        "execution": "EN 1366-2 test belgeli, 72°C eriyen lehimli veya 24V/230V yay geri dönüşlü motorlu damperler duvar geçişlerine monte edilir.",
        "results": ["EI 120 (120 dakika) yangın ve duman sızdırmazlık bariyeri"],
        "specs_table": [
            ("Yangın Dayanımı", "EI 120 (EN 1366-2 Sertifikalı)"),
            ("Tetikleme", "72°C Eriyebilir Termal Sigorta veya 24V Servomotor"),
            ("Kasa Tipi", "Galvaniz Gövde, Kalsiyum Silikat İzolasyon Kanadı")
        ]
    },
    {
        "title": "VRV / VRF Değişken Debili Dış Üniteler",
        "category": "vrf",
        "badge_cat": "VRF Dış Ünite",
        "badge_loc": "Inverter",
        "specs": "DC Inverter • Yüksek SCOP / SEER",
        "desc": "Aynı anda bağımsız ısıtma ve soğutma sağlayan heat-recovery ve heat-pump modelleriyle enerji sarfiyatını minimize eden dış üniteler.",
        "image": "/sm/ambar/urunler/vrvvrf-sistemler.jpg",
        "challenge": "Büyük otel ve ofis projelerinde her odanın bağımsız iklimlendirme ihtiyacını merkezi verimlilikle çözmek.",
        "execution": "DC Inverter scroll kompresörlü modüler dış ünite grupları kurulmuş, akıllı bina otomasyonu ile haberleştirilmiştir.",
        "results": ["Kısmi yüklerde %50'ye varan enerji tasarrufu ve 4.8 üzeri SCOP değeri"],
        "specs_table": [
            ("Kapasite Aralığı", "8 HP - 96 HP Modüler"),
            ("Kompresör", "Full DC Inverter Scroll"),
            ("Soğutucu Akışkan", "R410A / R32")
        ]
    },
    {
        "title": "VRF İç Üniteler (Kaset, Kanallı & Gizli Tavan)",
        "category": "vrf",
        "badge_cat": "VRF İç Ünite",
        "badge_loc": "Konfor Serisi",
        "specs": "Ultra Sessiz <24 dB • Bağımsız Termostat",
        "desc": "Plaza ofisleri, otel odaları ve rezidanslar için tavan arkasına gizlenen fancoil ve 4 yöne üflemeli dekoratif kaset tipi iç üniteler.",
        "image": "/sm/ambar/urunler/sistem-klimalari.jpg",
        "challenge": "Mimari tavan kotunu düşürmeden sessiz ve homojen iç hava şartlandırması sağlamak.",
        "execution": "İnce gövdeli (20 cm yükseklik) gizli tavan üniteleri ve 360° üflemeli kaset tipi modeller uygulanmıştır.",
        "results": ["22 dB(A) kütüphane sessizliğinde konforlu iç ortam"],
        "specs_table": [
            ("Ses Seviyesi", "22 - 32 dB(A)"),
            ("Gövde Yüksekliği", "200 mm Ultra İnce"),
            ("Drenaj", "Dahili Drenaj Pompası (750 mm Basma Yüksekliği)")
        ]
    },
    {
        "title": "Plakalı Isı Geri Kazanım Cihazları (HRV)",
        "category": "hrv",
        "badge_cat": "Isı Geri Kazanım",
        "badge_loc": "%80 Tasarruf",
        "specs": "%80'e Varan Verim • Alüminyum Eşanjör",
        "desc": "Mahalden atılan sıcak veya soğuk havanın enerjisini taze havaya transfer ederek ısıtma ve soğutma yükünü %80'e varan oranda düşüren HRV cihazları.",
        "image": "/sm/ambar/urunler/isi-geri-kazanim-cihazlari-hrv.jpg",
        "challenge": "Havalandırma sırasında dışarı atılan şartlandırılmış havanın enerjisini kaybetmemek.",
        "execution": "Çapraz akışlı veya karşıt akışlı alüminyum plakalı eşanjörler ve EC fanlar ile taze hava ısıtılarak içeri verilir.",
        "results": ["Isıtma ve soğutma faturasında %30 - %40 net düşüş"],
        "specs_table": [
            ("Verimlilik", "%75 - %82 Termal Isı Transferi"),
            ("Eşanjör", "Korozyona Dayanıklı Alüminyum Plakalı"),
            ("Fan", "Geriye Eğik EC Radyal Fanlar")
        ]
    },
    {
        "title": "THRV DX Isı Pompalı Isı Geri Kazanım Santrali",
        "category": "hrv",
        "badge_cat": "DX Heat Pump",
        "badge_loc": "Entegre Soğutma",
        "specs": "Dahili Soğutma Gaz Devresi • EC Fanlar",
        "desc": "Ek bir dış üniteye gerek kalmadan taze havayı kışın ısıtan, yazın soğutan entegre inverter kompresörlü yüksek teknolojili taze hava santrali.",
        "image": "/sm/ambar/urunler/thrv-dx-heat-pump-isi-geri-kazanim-cihazlari.jpg",
        "challenge": "Dış ünite koyacak cephesi veya çatısı sınırlı binalarda bağımsız taze hava şartlandırması kurmak.",
        "execution": "Santral gövdesi içerisine inverter kompresör, kondenser ve evaporatör entegre edilerek tek gövde çözüm üretilmiştir.",
        "results": ["Harici bakır borulama gerektirmeyen bağımsız taze hava iklimlendirmesi"],
        "specs_table": [
            ("Debi", "1.000 - 6.000 m³/h"),
            ("Kompresör", "Entegre DC Inverter Kompresör"),
            ("Fonksiyon", "Taze Hava + Isı Geri Kazanım + Isıtma/Soğutma")
        ]
    },
    {
        "title": "TDF Dikdörtgen Kanal Tipi Radyal Fanlar",
        "category": "fan",
        "badge_cat": "Kanal Tipi Fan",
        "badge_loc": "TDF Serisi",
        "specs": "Geriye Eğik Kanat • Açılabilir Servis Kapağı",
        "desc": "Hava kanalı arasına direkt flanşla monte edilen, düşük ses seviyeli ve yüksek statik basınç üreten endüstriyel kanal fanları.",
        "image": "/sm/ambar/urunler/tdf-dikdortgen-kanal-tipi-fanlar.jpg",
        "challenge": "Dar tavan aralarında yüksek hava debisi ve kanal sürtünme direncini yenecek kompakt fan montajı.",
        "execution": "Prizmatik kanal kesitine birebir uyan flanşlı gövde ve geriye eğik seyrek kanatlı radyal çark kullanılmıştır.",
        "results": ["Kanal hattında minimum basınç kaybı ve pratik bakım kapağı erişimi"],
        "specs_table": [
            ("Debi Aralığı", "500 - 10.000 m³/h"),
            ("Motor", "IP54 Harici Rotorlu Motor"),
            ("Gövde", "Galvaniz Çelik Sac")
        ]
    },
    {
        "title": "Yangın ve Duman Tahliye Fanları (400°C/2h)",
        "category": "fan",
        "badge_cat": "Duman Fanı",
        "badge_loc": "400°C / 2h",
        "specs": "EN 12101-3 Belgeli • F400 Dayanım",
        "desc": "Yangın anında 400 derece sıcaklıkta 2 saat boyunca kesintisiz çalışarak duman tahliyesi ve kaçış yollarında güvenli koridor oluşturan çatı ve şaft fanları.",
        "image": "/sm/ambar/urunler/yangin-sondurme-sistemleri.jpg",
        "challenge": "Binalarda yangın anında zehirli gaz ve dumanı hızla dışarı tahliye ederek can güvenliğini garantiye almak.",
        "execution": "EN 12101-3 F400 akredite sertifikalı yüksek sıcaklık motorları ve döküm alüminyum kanatlar kullanılmıştır.",
        "results": ["Acil kaçış merdivenleri ve hollerde güvenli duman boşaltma"],
        "specs_table": [
            ("Sertifika", "EN 12101-3 (F400: 400°C / 120 Dakika)"),
            ("Montaj Tipi", "Çatı Tipi veya Kanal Arası Aksiyel"),
            ("Motor Sınıfı", "H Sınıfı İzolasyon, IP55")
        ]
    },
    {
        "title": "Kapalı Otopark Jet Fan Sistemleri",
        "category": "fan",
        "badge_cat": "Jet Fan",
        "badge_loc": "Otopark Sistemleri",
        "specs": "Çift Hızlı Tersinir • İndüksiyon İtme Gücü",
        "desc": "Kanalsız otopark havalandırmasında günlük egzoz ve yangın duman tahliyesini CO sensör otomasyonu ile yöneten aksiyel jet fanlar.",
        "image": "/sm/ambar/koca_fotogal_fd00ec4d1c2be4f2aa6b28a4d4855936.jpg",
        "challenge": "Düşük tavanlı kapalı otoparklarda hava kanalı geçişi yapmadan karbonmonoksit birikimini ve yangın dumanını tahliye etmek.",
        "execution": "İndüksiyon prensibiyle havayı iten çift hızlı jet fanlar CO sensörleriyle otomatik hız kademesine bağlanmıştır.",
        "results": ["Kanal maliyetinden tasarruf ve araç yüksekliğinde ferah tavan alanı"],
        "specs_table": [
            ("İtme Gücü (Thrust)", "50 N - 100 N İtme Kuvveti"),
            ("Yangın Dayanımı", "300°C / 2h veya 400°C / 2h"),
            ("Kontrol", "CO Gaz Algılama ve Yangın Otomasyonu")
        ]
    },
    {
        "title": "Lineer Slot Difüzör & Swirl Anemostad",
        "category": "menfez",
        "badge_cat": "Hava Dağıtım",
        "badge_loc": "Mimari Seri",
        "specs": "Ayarlanabilir Kanat • Homojen Dağılım",
        "desc": "Geniş hacimlerde hava sirkülasyonunu cereyansız ve homojen bir şekilde sağlayan eloksallı ve fırın boyalı difüzör serisi.",
        "image": "/sm/ambar/urunler/difuzorler.jpg",
        "challenge": "Tavan mimarisine şık entegrasyon sağlarken havayı insanların üzerine çarpmadan dağıtmak.",
        "execution": "Yönlendirilebilir alüminyum kanatçıklar ve plenum kutuları ile hava akışı tavana paralel yayılmıştır.",
        "results": ["Yüksek Coanda etkisi ve estetik mimari görünüm"],
        "specs_table": [
            ("Slot Sayısı", "1 - 4 Slot Seçenekleri"),
            ("Malzeme", "Ekstrüzyon Alüminyum Profil"),
            ("Boya", "RAL Standartlarında Elektrostatik Toz Boya")
        ]
    },
    {
        "title": "Çift Sıra Ayarlı Menfez & Dış Panjurlar",
        "category": "menfez",
        "badge_cat": "Menfez",
        "badge_loc": "Alüminyum",
        "specs": "Düşük Basınç Kaybı • Damperli / Dampersiz",
        "desc": "Emiş ve üfleme hatlarında hava debisi yönlendirmesi sağlayan, yağmur korumalı dış hava panjurları ve akustik menfezler.",
        "image": "/sm/ambar/urunler/menfezler.jpg",
        "challenge": "Hava giriş ve çıkış noktalarında yağmur suyunu içeri almadan hava debisini kontrol etmek.",
        "execution": "Kuş teli ve aerodinamik damlalık kanat yapısına sahip dış panjurlar imal edilmiştir.",
        "results": ["Hava şartlarına tam dayanım ve sessiz hava emişi"],
        "specs_table": [
            ("Kanat Yapısı", "Yatay ve Düşey Ayrı Ayarlanabilir Çift Sıra"),
            ("Aksesuar", "Zıt Kanatlı Debi Ayar Damperi")
        ]
    },
    {
        "title": "Endüstriyel Torba, Kaset & HEPA Filtreler",
        "category": "filtre",
        "badge_cat": "Filtrasyon",
        "badge_loc": "HEPA H14",
        "specs": "G4, F7, F9 & H13/H14 • ISO 16890",
        "desc": "Klima santrallerinde taze havayı kaba partiküllerden, polenlerden ve mikroorganizmalardan arındıran yüksek toz tutma kapasiteli filtreler.",
        "image": "/sm/ambar/urunler/filtre-brosur.jpg",
        "challenge": "İç mekân hava kalitesini en üst seviyeye çıkarırken fan üzerinde aşırı basınç kaybı oluşturmamak.",
        "execution": "Düşük başlangıç basınç düşümlü, yüksek sentetik ve cam elyaf lifli filtre medyaları kullanılmıştır.",
        "results": ["ISO 16890 ePM1 %85 ve EN 1822 H14 standartlarında partikül tutma"],
        "specs_table": [
            ("Sınıflar", "G4, M5, F7, F9, H13, H14"),
            ("Test Standardı", "EN 779 / ISO 16890 / EN 1822")
        ]
    },
    {
        "title": "Otomatik Mutfak Davlumbaz Yangın Söndürme",
        "category": "filtre",
        "badge_cat": "Yangın Bastırma",
        "badge_loc": "UL 300",
        "specs": "UL 300 Sertifikalı • Mekanik & Termal Tetik",
        "desc": "Restoran ve otel mutfaklarında kızgın yağ yangınlarını sıvı kimyasalla saniyeler içinde boğan onaylı davlumbaz söndürme kitleri.",
        "image": "/sm/ambar/urunler/davlumbaz-sondurme-sistemi.jpg",
        "challenge": "Mutfak fritöz ve ızgaralarındaki yağ yangınlarını alev bacaya sıçramadan anında bastırmak.",
        "execution": "Davlumbaz içine yerleştirilen eriyebilir dedektörler yangını algıladığında potasyum karbonat bazlı sıvıyı nozullarla püskürtür.",
        "results": ["UL 300 onaylı 10 saniye içinde alev boğma ve sabunlaşma etkisi"],
        "specs_table": [
            ("Standart", "UL 300 / NFPA 96 / NFPA 17A"),
            ("Söndürücü Madde", "Düşük pH Sıvı Kimyasal Söndürücü")
        ]
    }
]

# Set slug for each product
for u in URUNLER:
    u['slug'] = slugify(u['title'], 'urun')

# 3. COZUMLER (12 SOLUTIONS)
COZUMLER = [
    {
        "title": "Fabrika ve Üretim Tesisi Proses Havalandırması",
        "category": "endustriyel",
        "badge_cat": "Endüstriyel",
        "badge_loc": "Çerkezköy OSB",
        "specs": "60.000 m³/h Debi • Asit ve Toz Egzozu",
        "desc": "Ağır sanayi, kimya ve plastik enjeksiyon tesislerinde çalışma ortamındaki zararlı gaz ve tozları çalışma hattından uzaklaştıran paslanmaz kanal ve siklon filtrasyon sistemleri.",
        "image": "/assets/images/factory_process_ventilation.jpg",
        "gallery_images": [
            "/assets/images/factory_pipes_ducts.jpg",
            "/assets/images/factory_plant_interior.jpg"
        ],
        "challenge": "Üretim hattında açığa çıkan toksik gazların personel sağlığını tehdit etmesini önlemek.",
        "execution": "Lokal yakalama davlumbazları, paslanmaz kaynaklı kanallar ve ıslak yıkayıcı (scrubber) sistemleri tasarlanmıştır.",
        "results": ["İş hijyeni sınır değerlerine %100 uyum ve temiz çalışma ortamı"]
    },
    {
        "title": "Ameliyathane & Temiz Oda Hijyenik İklimlendirme",
        "category": "saglik",
        "badge_cat": "Sağlık & Temiz Oda",
        "badge_loc": "DIN 1946-4 Sertifikalı",
        "specs": "DIN 1946-4 • Laminer Hava Akışı (LAF)",
        "desc": "Hastanelerin kritik cerrahi alanlarında steril hava akışı sağlayan laminer akış üniteleri, HEPA filtreli hijyenik klima santralleri ve pozitif basınç kaskadı otomasyonu.",
        "image": "/assets/images/cleanroom_operating_room.jpg",
        "gallery_images": [
            "/assets/images/pharma_laboratory_clean.jpg",
            "/sm/ambar/urunler/thks-hijyenik-klima-santral-B.jpg"
        ],
        "challenge": "Ameliyat masası üzerinde partikül ve mikrop barınmasını imkansız kılan laminer hava perdesi oluşturmak.",
        "execution": "Tavandan tabana laminer akış tavanları ve hassas diferansiyel basınç sensörleri kurulmuştur.",
        "results": ["ISO Class 5 steril ameliyathane şartları sağlanmıştır"]
    },
    {
        "title": "Plaza ve Ticari Binalar İçin 4 Borulu Fancoil & Primer Taze Hava",
        "category": "plaza",
        "badge_cat": "Plaza & Ticari",
        "badge_loc": "Levent & Maslak",
        "specs": "4 Borulu Fancoil • VAV Zonlama",
        "desc": "Çok katlı iş merkezlerinde bağımsız ofislerin eş zamanlı ısıtma ve soğutma taleplerini karşılayan 4 borulu fancoil tesisatı ve enerji verimli primer taze hava santralleri.",
        "image": "/assets/images/commercial_office_interior.jpg",
        "gallery_images": [
            "/assets/images/modern_plaza_exterior.jpg",
            "/sm/ambar/urunler/sistem-klimalari-B.jpg"
        ],
        "challenge": "Güneş alan cepheler soğutma isterken gölgede kalan ofislerin ısıtma talep etmesi dengesizliğini çözmek.",
        "execution": "4 borulu fancoil altyapısı ile her bağımsız bölüm dilediği sıcaklığı anında seçebilmektedir.",
        "results": ["Yıl boyu kesintisiz konfor ve enerji tüketiminde optimizasyon"]
    },
    {
        "title": "AVM ve Büyük Mağazacılık İklimlendirme Çözümleri",
        "category": "avm",
        "badge_cat": "AVM & Mağazacılık",
        "badge_loc": "Zincirlikuyu & Kadıköy",
        "specs": "Yüksek Tavan Dağıtımı • Jet Difüzörler",
        "desc": "AVM ortak alanları, atriumlar ve perakende mağazalar için yüksek tavan jet nozul hava atış sistemleri, duman tahliye şaftları ve hava perdeleri entegrasyonu.",
        "image": "/assets/images/shopping_mall_atrium.jpg",
        "gallery_images": [
            "/assets/images/commercial_rooftop_hvac_system_1792187202526.jpg",
            "/sm/ambar/urunler/merkezi-sistemler-B.jpg"
        ],
        "challenge": "10 metreyi aşan atrium tavanlarında havanın tabana inememesi ve sıcak hava yığılması sorunu.",
        "execution": "Uzun atış mesafeli ayarlanabilir jet nozullar ile hava zemin kotuna ulaştırılmıştır.",
        "results": ["Tavan ve zemin arasındaki sıcaklık farkı 1.5°C seviyesine indirilmiştir"]
    },
    {
        "title": "Restoran ve Otel Mutfakları Duman & Koku Filtrasyonu",
        "category": "restoran",
        "badge_cat": "Mutfak & Restoran",
        "badge_loc": "İstanbul Geneli",
        "specs": "Elektrostatik Filtre • UV-C Ozonlama",
        "desc": "Şehir merkezindeki gastronomi tesislerinde çevre yönetmeliklerine uygun olarak baca kokusu ve yağ buharını yok eden elektrostatik filtre ve ozon teknolojisi.",
        "image": "/assets/images/commercial_kitchen_exhaust.jpg",
        "gallery_images": [
            "/sm/ambar/urunler/davlumbaz-sondurme-sistemi-B.jpg",
            "/assets/images/restaurant_lounge_interior.jpg"
        ],
        "challenge": "Açık ızgara ve kızartma kokularının çevredeki konutlara yayılmasını engellemek.",
        "execution": "Elektrostatik presipitatör ve UV-C fotolitik ozon filtreleme üniteleri monte edilmiştir.",
        "results": ["Mutfak egzozunda %99 yağ tutma ve %95 koku giderme verimi"]
    },
    {
        "title": "Kapalı Otopark Yangın Duman ve Karbonmonoksit Tahliyesi",
        "category": "otopark",
        "badge_cat": "Otopark & Yangın",
        "badge_loc": "400°C / 2h Yangın Güvenliği",
        "specs": "Aksiyel Jet Fan • CO Otomasyonu",
        "desc": "Katlı otoparklarda kanalsız jet fan teknolojisi ile zehirli egzoz gazının tahliyesi ve yangın durumunda dumanın tahliye şaftlarına süpürülmesi çözümü.",
        "image": "/assets/images/parking_garage_ventilation.jpg",
        "gallery_images": [
            "/sm/ambar/urunler/tdf-dikdortgen-kanal-tipi-fanlar-B.jpg",
            "/assets/images/factory_pipes_ducts.jpg"
        ],
        "challenge": "Kanal montajının araç gabarisini kısıtlaması ve yangın dumanının kaçış yollarını tıkaması.",
        "execution": "Kanalsız itici jet fanlar tavan betonuna monte edilmiş, çift hızlı duman fanları bağlanmıştır.",
        "results": ["Yangın anında duman koridoru oluşturularak güvenli tahliye sağlanır"]
    },
    {
        "title": "Endüstriyel ve Ticari Proje Mühendisliği",
        "category": "endustriyel",
        "badge_cat": "Öne Çıkan Çözüm",
        "badge_loc": "Anahtar Teslim",
        "specs": "CFD Simülasyonu • Anahtar Teslim Montaj",
        "desc": "Mimari gereksinimlere tam uyumlu, enerji verimliliği en yüksek iklimlendirme ve havalandırma altyapısının projelendirilmesi ve imalatçı güvencesiyle devreye alınması.",
        "image": "/assets/images/factory_pipes_ducts.jpg",
        "gallery_images": [
            "/assets/images/factory_plant_interior.jpg",
            "/assets/images/commercial_rooftop_hvac_system_1792187202526.jpg"
        ],
        "challenge": "Karmaşık mimari projelerde mekanik tesisatın hatasız projelendirilmesi.",
        "execution": "BIM ve 3D koordinasyon modelleri ile şantiye montajı tek merkezden yürütülmüştür.",
        "results": ["Sıfır şantiye revizyonu ve 2 yıl garantili teslim"]
    },
    {
        "title": "Lojistik Depo & Antrepo Sıcak Hava Apareyleri",
        "category": "endustriyel",
        "badge_cat": "Lojistik & Depo",
        "badge_loc": "Gebze Lojistik Üssü",
        "specs": "Yüksek Tavan Sirkülasyonu • Nem Alma",
        "desc": "Paletli ürün depolama sahalarında ısı kaybını önleyen sıcak hava apareyleri ve neme duyarlı havalandırma santralleri ile ideal ortam şartlandırması.",
        "image": "/assets/images/logistics_warehouse_hall.jpg",
        "gallery_images": [
            "/assets/images/commercial_rooftop_hvac_system_1792187202526.jpg",
            "/sm/ambar/urunler/isitma-sistemleri-B.jpg"
        ],
        "challenge": "Yüksek tavanlı depolarda sıcak havanın çatıda birikmesi sonucu enerji israfı.",
        "execution": "Destratifikasyon fanları ve radyal sıcak hava apareyleri yerleştirilmiştir.",
        "results": ["Isıtma giderlerinde %30 tasarruf ve donma emniyeti"]
    },
    {
        "title": "Otel & Rezidans Bağımsız VRF / VRV Konfor Sistemleri",
        "category": "plaza",
        "badge_cat": "Rezidans & Otel",
        "badge_loc": "Nişantaşı & Beşiktaş",
        "specs": "3 Borulu Heat Recovery • Akıllı Termostat",
        "desc": "Aynı anda bir odada ısıtma, diğerinde soğutma yapabilen 3 borulu VRF altyapısıyla otel müşterilerine maksimum konfor ve sıfır gürültü sunan sistemler.",
        "image": "/assets/images/modern_plaza_exterior.jpg",
        "gallery_images": [
            "/sm/ambar/urunler/vrvvrf-sistemler-B.jpg",
            "/sm/ambar/urunler/sistem-klimalari-B.jpg"
        ],
        "challenge": "Otel konuklarının farklı iklimlendirme tercihlerini merkezi verimlilikle karşılamak.",
        "execution": "Isı geri kazanımlı 3 borulu VRF sistemleri her odaya bağımsız monte edilmiştir.",
        "results": ["Ultra sessiz çalışma ve misafir memnuniyetinde mükemmel skor"]
    },
    {
        "title": "Veri Merkezi (Data Center) Hassas Kontrollü Soğutma",
        "category": "endustriyel",
        "badge_cat": "Data Center",
        "badge_loc": "Kocaeli Teknopark",
        "specs": "CRAC / CRAH • Sıcak-Soğuk Koridor Kapatma",
        "desc": "7/24 kritik sunucu odalarında sıcaklık ve nemi ±0.5°C hassasiyetle sabitleyen, serbest soğutma (free-cooling) özellikli hassas klima çözümleri.",
        "image": "/assets/images/data_center_cooling.jpg",
        "gallery_images": [
            "/sm/ambar/urunler/merkezi-sistemler-B.jpg",
            "/assets/images/cleanroom_operating_room.jpg"
        ],
        "challenge": "Sunucu kabinlerinde aşırı ısınmayı önlemek ve kesintisiz 7/24 çalışma garantisi vermek.",
        "execution": "Yükseltilmiş taban altından soğuk hava üflemeli CRAC klimalar ve N+1 yedekleme kurulmuştur.",
        "results": ["PUE değerini 1.25 seviyesine indiren enerji verimliliği"]
    },
    {
        "title": "Spor Kompleksi & Yüzme Havuzu Nem Alma Santralleri",
        "category": "avm",
        "badge_cat": "Spor & Havuz",
        "badge_loc": "Bursa Spor Tesisleri",
        "specs": "Epoksi Kaplı Eşanjör • Klor Gazı Mukavemeti",
        "desc": "Yüksek buharlaşma olan kapalı havuzlarda yoğuşmayı önleyen, klor gazına mukavim korozyon dirençli paket nem alma klima santralleri.",
        "image": "/assets/images/indoor_pool_facility.jpg",
        "gallery_images": [
            "/sm/ambar/urunler/thks-hijyenik-klima-santral-B.jpg",
            "/assets/images/architectural_spiral_ducts.jpg"
        ],
        "challenge": "Klorlu buharın camlarda ve çatı konstrüksiyonunda korozyon ve yoğuşma yapması.",
        "execution": "Epoksi kaplı ısı geri kazanım bataryaları ve kompresörlü nem alma santrali bağlanmıştır.",
        "results": ["Pencerelerde sıfır yoğuşma ve %55 sabit bağıl nem konforu"]
    },
    {
        "title": "İlaç ve Biyoteknoloji GMP Uyumlu İklimlendirme",
        "category": "saglik",
        "badge_cat": "İlaç & GMP",
        "badge_loc": "Tekirdağ İlaç Fabrikası",
        "specs": "ISO Class 5 - 8 • Basınç Kaskadı Kontrolü",
        "desc": "İlaç dolum ve paketleme hatlarında çapraz bulaşmayı önleyen diferansiyel basınç kaskadı ve HEPA filtrasyon otomasyonu.",
        "image": "/assets/images/pharma_laboratory_clean.jpg",
        "gallery_images": [
            "/assets/images/cleanroom_operating_room.jpg",
            "/sm/ambar/urunler/filtre-brosur-B.jpg"
        ],
        "challenge": "İlaç üretim odaları arasında hava sızıntısı kaynaklı çapraz kontaminasyonu sıfırlamak.",
        "execution": "Basınç kaskadı hava kilitleri (airlock) ve H14 terminal filtre kutuları monte edilmiştir.",
        "results": ["Uluslararası GMP ve FDA denetimlerinden tam notla geçiş"]
    }
]

for c in COZUMLER:
    c['slug'] = slugify(c['title'], 'cozum')

# 4. HIZMETLER (8 SERVICES)
HIZMETLER = [
    {
        "title": "Yerinde Keşif, Debi ve Isı Yükü Simülasyonu",
        "category": "proje",
        "badge_cat": "Projelendirme",
        "badge_loc": "Ankara & İstanbul",
        "specs": "CFD Simülasyonu • Psikrometrik Analiz",
        "desc": "Deneyimli makine mühendislerimiz mevcut tesisi veya mimari DWG çizimleri yerinde inceler; mahal bazlı taze hava debisi ve kanal sürtünme kayıplarını hesaplar.",
        "image": "/sm/ambar/koca_fotogal_1e1615508c69191e103635434b04190b.jpg"
    },
    {
        "title": "Mekanik Tesisat Projelendirme & Şartname Hazırlama",
        "category": "proje",
        "badge_cat": "Projelendirme",
        "badge_loc": "Türkiye Geneli",
        "specs": "Shop-Drawing • As-Built • Metraj Listesi",
        "desc": "Uygulama öncesi şantiye çakışmalarını sıfırlayan koordinasyon çizimleri, keşif özetleri, teknik şartnameler ve en rekabetçi imalatçı bütçesini hazırlıyoruz.",
        "image": "/sm/ambar/koca_fotogal_484c8b3a0660cbabdad309952e7d135b.jpg"
    },
    {
        "title": "CNC Parkurumuzda Kanal ve Flanş İmalatı",
        "category": "imalat",
        "badge_cat": "İmalat",
        "badge_loc": "İvedik OSB Fabrika",
        "specs": "Günlük 2.500 m² Kapasite • EN 1507 Class C",
        "desc": "Kendi fabrikamızda CNC plazma kesim tezgahları ve otomatik kendinden flanşlı büküm hatlarıyla galvaniz, paslanmaz ve dikiş kaynaklı kanal üretimi.",
        "image": "/sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg"
    },
    {
        "title": "Hijyenik ve Standart Santral İmalat & Montajı",
        "category": "imalat",
        "badge_cat": "İmalat",
        "badge_loc": "Sky Group Tesisleri",
        "specs": "TSE EN 1886 • Eurovent Normları",
        "desc": "Çift cidarlı, kaya yünü dolgulu, antibakteriyel iç yüzeyli klima santrallerinin ve ısı geri kazanım cihazlarının modüler montajı ve fabrika testleri.",
        "image": "/sm/ambar/koca_fotogal_5712a7e4518f2c1a74f50893e4faa7af.jpg"
    },
    {
        "title": "Anahtar Teslim Saha Montajı ve Şantiye Yönetimi",
        "category": "montaj",
        "badge_cat": "Şantiye Montajı",
        "badge_loc": "Saha Ekipleri",
        "specs": "İSG Onaylı İskele & Vinç • Sertifikalı Kadro",
        "desc": "İş sağlığı ve güvenliği kurallarına tam riayet ederek hava kanallarının, santrallerin, menfezlerin ve borulama hatlarının sahada kusursuz montajı.",
        "image": "/sm/ambar/koca_fotogal_38ce38c54201407528bf968fb7a6f6aa.jpg"
    },
    {
        "title": "Yangın Duman Tahliye ve Şaft İzolasyon Uygulaması",
        "category": "montaj",
        "badge_cat": "Yangın İzolasyon",
        "badge_loc": "EN 1366 Standardı",
        "specs": "400°C / 2h Taşyünü İzolasyon • Yangın Mastikleri",
        "desc": "Duman tahliye kanallarının yangın dayanımlı taş yünü ile kaplanması, şaft geçişlerinde yangın durdurucu mastikleme ve otomatik damper bağlantıları.",
        "image": "/sm/ambar/koca_fotogal_6bc7f77c0f5be682787f9ea34ea4b2fe.jpg"
    },
    {
        "title": "Test, Ayar ve Balanslama (TAB) Hizmetleri",
        "category": "servis",
        "badge_cat": "TAB Hizmetleri",
        "badge_loc": "Resmi Onaylı",
        "specs": "Kalibre Pitot ve Anemometre • TAB Raporlaması",
        "desc": "Montaj sonrası menfez bazında hava debisi ölçümü, kanal sızdırmazlık testleri ve santral fan basınç dengesinin sağlanarak resmi TAB raporunun sunulması.",
        "image": "/sm/ambar/koca_fotogal_4df2b3096de6b454b45eda5ebebac697.jpg"
    },
    {
        "title": "7/24 Periyodik Bakım ve Acil Teknik Müdahale",
        "category": "servis",
        "badge_cat": "Teknik Servis",
        "badge_loc": "7/24 Acil Hat",
        "specs": "2 Saat İçinde Yerinde Müdahale • Orijinal Yedek Parça",
        "desc": "Yıllık bakım sözleşmeleri kapsamında filtre değişimleri, V-kayış gerginlik testleri, motor izolasyon ölçümleri ve 7/24 acil arıza müdahale desteği.",
        "image": "/sm/ambar/koca_fotogal_a19c98a13b30cc3a7002daf12b94817b.jpg"
    }
]

for h in HIZMETLER:
    h['slug'] = slugify(h['title'], 'hizmet')

# 5. KURUMSAL (10 CORPORATE ARTICLES)
KURUMSAL = [
    {
        "title": "Sky Group Mühendislik Vizyonu ve Felsefesi",
        "category": "hakkimizda",
        "badge_cat": "Kurumsal",
        "badge_loc": "Vizyon 2030",
        "specs": "Köklü Tecrübe • Yüksek Mühendislik Standartları",
        "desc": "İklimlendirme ve mekanik havalandırma sektöründe anahtar teslim taahhüt anlayışıyla, Türkiye'nin ve bölgenin en saygın endüstriyel tesislerine değer katıyoruz.",
        "image": "/sm/ambar/banner/sky-mekanik-250.jpg"
    },
    {
        "title": "Mühendislik ve Şantiye Yönetim Kadromuz",
        "category": "hakkimizda",
        "badge_cat": "Kadro",
        "badge_loc": "Mühendislik Departmanı",
        "specs": "Yetkin Makine Mühendisleri • Deneyimli Şefler",
        "desc": "Projenizin ilk keşif ve simülasyon aşamasından şantiyedeki montaj ve test-balanslama adımlarına kadar her aşamayı alanında uzman mühendis kadromuzla yönetiyoruz.",
        "image": "/sm/ambar/banner/sky-mekanik-925.jpg"
    },
    {
        "title": "CNC Plazma Kesim & Otomatik Flanş Parkuru",
        "category": "tesis",
        "badge_cat": "Üretim Tesisimiz",
        "badge_loc": "CNC Parkuru",
        "specs": "Günlük 2.500 m² Kanal • Hassas Kesim",
        "desc": "Ankara İvedik OSB'deki tesisimizde bilgisayar destekli CNC plazma kesim tablaları ve tam otomatik kendinden flanşlı kanal makineleri ile yüksek hızda hatasız üretim yapıyoruz.",
        "image": "/sm/ambar/koca_fotogal_9b3b64a50f65c40087de050ab79832fd.jpg"
    },
    {
        "title": "Fabrika Lojistik ve Hızlı Şantiye Sevkiyatı",
        "category": "tesis",
        "badge_cat": "Lojistik Güç",
        "badge_loc": "İvedik OSB Depo",
        "specs": "Yüksek Sac Stoğu • Hızlı Sevkiyat Ağı",
        "desc": "Geniş galvaniz sac ve hammadde stoğumuz sayesinde büyük ölçekli fabrika ve AVM şantiyelerinin ani kanal ve ekipman taleplerini gecikmesiz karşılıyoruz.",
        "image": "/sm/ambar/banner/sky-mekanik-719.jpg"
    },
    {
        "title": "ISO 9001:2015 Kalite Yönetim Sistemi",
        "category": "kalite",
        "badge_cat": "Kalite Standardı",
        "badge_loc": "ISO 9001:2015",
        "specs": "Uluslararası Akredite • Sürekli İyileştirme",
        "desc": "Tüm tasarım, hammadde kabul, CNC imalat ve montaj süreçlerimiz ISO 9001:2015 uluslararası kalite yönetim standartlarına uygun olarak denetlenmekte ve belgelenmektedir.",
        "image": "/sm/ambar/t/10.png"
    },
    {
        "title": "TSE EN 1886 Mekanik İklimlendirme Belgesi",
        "category": "kalite",
        "badge_cat": "TSE Belgesi",
        "badge_loc": "TSE EN 1886",
        "specs": "Mekanik Rijitlik D1 • Termal İletim T2/TB2",
        "desc": "Ürettiğimiz klima santralleri gövde mukavemeti, termal köprüleme ve hava kaçağı kriterlerinde TSE EN 1886 normlarının en üst sınıf başarı kriterlerini karşılar.",
        "image": "/sm/ambar/t/11.png"
    },
    {
        "title": "Eurovent & CE Avrupa Uygunluk Belgeleri",
        "category": "kalite",
        "badge_cat": "Avrupa Normu",
        "badge_loc": "CE & Eurovent",
        "specs": "EN 12101-3 Duman • EN 1507 Kanal Sızdırmazlık",
        "desc": "Avrupa Birliği CE direktiflerine tam uyumlu, bağımsız Eurovent onaylı santral bileşenleri ve 400°C/2h yangın dayanım test sertifikalı duman tahliye fanları.",
        "image": "/sm/ambar/t/26.png"
    },
    {
        "title": "Şantiyelerde İş Sağlığı ve Güvenliği (İSG)",
        "category": "isg",
        "badge_cat": "İSG Politikası",
        "badge_loc": "Sıfır Kaza",
        "specs": "Sıfır Kaza Prensibi • Sertifikalı Yüksekte Çalışma",
        "desc": "Şantiye montaj ekiplerimiz tam donanımlı KKD (Kişisel Koruyucu Donanım) ile çalışmakta, periyodik İSG eğitimleri ve risk analizleriyle güvenli montaj gerçekleştirilmektedir.",
        "image": "/sm/ambar/banner/sky-mekanik-459.jpg"
    },
    {
        "title": "Çevreye Duyarlı Üretim ve Enerji Verimliliği",
        "category": "isg",
        "badge_cat": "Çevre Politikası",
        "badge_loc": "ISO 14001",
        "specs": "ISO 14001 • Geri Dönüştürülebilir Malzeme",
        "desc": "İmalat atıklarının geri dönüşümü, düşük karbon ayak izi ve binalarda %80'e varan enerji tasarrufu sağlayan çevre dostu iklimlendirme sistemleri tasarımı.",
        "image": "/sm/ambar/banner/sky-mekanik-250.jpg"
    },
    {
        "title": "Ankara Fabrika & Genel Merkez İletişim",
        "category": "iletisim",
        "badge_cat": "İletişim & Ziyaret",
        "badge_loc": "Yenimahalle / Ankara",
        "specs": "0 (541) 922 19 91 • info@skymekanik.com",
        "desc": "Adres: İvedik OSB Mah. 1354. Cad. No: 138/6 Yenimahalle / Ankara. Projeleriniz için doğrudan fabrikamızı ziyaret edebilir, imalat parkurumuzu inceleyebilirsiniz.",
        "image": "/sm/ambar/banner/sky-mekanik-723.jpg"
    }
]

for k in KURUMSAL:
    k['slug'] = slugify(k['title'], 'kurumsal')

def build_all_vlog_pages():
    topnav_html, footer_html, modal_html = extract_base_components()

    # 1. Projects
    for idx, p in enumerate(REFERANSLAR):
        related = [r for i, r in enumerate(REFERANSLAR) if i != idx]
        html = render_vlog_page(
            item=p,
            back_url="./referanslar.html",
            back_label="Referanslar Kataloğuna Dön",
            related_items=related,
            topnav_html=topnav_html,
            footer_html=footer_html,
            modal_html=modal_html
        )
        file_path = os.path.join(BASE_DIR, f"{p['slug']}.html")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)

    # 2. Products
    for idx, u in enumerate(URUNLER):
        related = [r for i, r in enumerate(URUNLER) if i != idx]
        html = render_vlog_page(
            item=u,
            back_url="./urunlerimiz.html",
            back_label="Ürünler Kataloğuna Dön",
            related_items=related,
            topnav_html=topnav_html,
            footer_html=footer_html,
            modal_html=modal_html
        )
        file_path = os.path.join(BASE_DIR, f"{u['slug']}.html")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)

    # 3. Solutions
    for idx, c in enumerate(COZUMLER):
        related = [r for i, r in enumerate(COZUMLER) if i != idx]
        html = render_vlog_page(
            item=c,
            back_url="./cozumlerimiz.html",
            back_label="Çözümler Kataloğuna Dön",
            related_items=related,
            topnav_html=topnav_html,
            footer_html=footer_html,
            modal_html=modal_html
        )
        file_path = os.path.join(BASE_DIR, f"{c['slug']}.html")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)

    # 4. Services
    for idx, h in enumerate(HIZMETLER):
        related = [r for i, r in enumerate(HIZMETLER) if i != idx]
        html = render_vlog_page(
            item=h,
            back_url="./hizmetlerimiz.html",
            back_label="Hizmetler Kataloğuna Dön",
            related_items=related,
            topnav_html=topnav_html,
            footer_html=footer_html,
            modal_html=modal_html
        )
        file_path = os.path.join(BASE_DIR, f"{h['slug']}.html")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)

    # 5. Corporate
    for idx, k in enumerate(KURUMSAL):
        related = [r for i, r in enumerate(KURUMSAL) if i != idx]
        html = render_vlog_page(
            item=k,
            back_url="./kurumsal.html",
            back_label="Kurumsal Kataloğa Dön",
            related_items=related,
            topnav_html=topnav_html,
            footer_html=footer_html,
            modal_html=modal_html
        )
        file_path = os.path.join(BASE_DIR, f"{k['slug']}.html")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)

    total_pages = len(REFERANSLAR) + len(URUNLER) + len(COZUMLER) + len(HIZMETLER) + len(KURUMSAL)
    print(f"Successfully generated {total_pages} vlog detail pages!")

if __name__ == '__main__':
    build_all_vlog_pages()

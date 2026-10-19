/**
 * Sky Group - Interactive 3D Product & Technical Spec Modal System
 * Provides an interactive 3D exploded CAD viewer, component hotspots,
 * technical specification sheets, catalog galleries, and an engineering proposal form.
 */

(function () {
  'use strict';

  function initSkyProductModal() {
    // If modal container already exists, ensure it's upgraded
    let modalEl = document.getElementById('sky-quote-modal');
    if (!modalEl) {
      modalEl = document.createElement('div');
      modalEl.id = 'sky-quote-modal';
      modalEl.setAttribute('aria-hidden', 'true');
      modalEl.setAttribute('role', 'dialog');
      modalEl.setAttribute('aria-modal', 'true');
      document.body.appendChild(modalEl);
    }

    // Modal CSS & Layout
    modalEl.className = 'sky-spec-modal-backdrop';

    modalEl.innerHTML = `
      <div class="sky-spec-modal-dialog">
        <!-- Close Button -->
        <button type="button" id="sky-spec-modal-close" class="sky-spec-modal-close-btn" aria-label="Kapat">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- 2-COLUMN SPLIT CONTAINER -->
        <div class="sky-spec-modal-grid">
          
          <!-- LEFT: 3D CAD & SCHEMATIC VIEWER (58%) -->
          <div class="sky-spec-left-stage">
            
            <!-- Stage Top Bar: Tabs -->
            <div class="sky-spec-stage-topbar">
              <div class="sky-spec-view-tabs" role="tablist">
                <button type="button" class="sky-spec-tab active" data-tab="cutaway">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
                  <span>Teknik Şema &amp; Kesit</span>
                </button>
                <button type="button" class="sky-spec-tab" data-tab="specs">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>Teknik Tablo</span>
                </button>
                <button type="button" class="sky-spec-tab" data-tab="gallery">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <span>İmalat Galerisi</span>
                </button>
              </div>
            </div>

            <!-- Main Stage Canvas / View Container -->
            <div class="sky-spec-main-viewport">
              
              <!-- Tab 1: CAD Cutaway with Hotspots -->
              <div id="sky-pane-cutaway" class="sky-spec-pane active">
                <div class="sky-spec-schematic-wrap">
                  <div class="sky-spec-image-stage">
                    <img id="sky-spec-main-img" src="" alt="Teknik Kesit Görünümü" class="sky-spec-schematic-img">
                    
                    <!-- Hotspot Pins Container -->
                    <div id="sky-spec-hotspots-layer" class="sky-spec-hotspots-layer"></div>
                    
                    <!-- Floating Component Tooltip -->
                    <div id="sky-spec-tooltip" class="sky-spec-tooltip hidden">
                      <div class="sky-spec-tooltip-header">
                        <span id="sky-tt-num" class="sky-spec-tt-num">01</span>
                        <span id="sky-tt-title" class="sky-spec-tt-title">Bileşen Adı</span>
                      </div>
                      <p id="sky-tt-desc" class="sky-spec-tt-desc">Bileşen teknik detay açıklaması.</p>
                    </div>
                  </div>
                </div>

                <!-- Hotspot Hint -->
                <div class="sky-spec-hotspot-hint">
                  <svg class="w-4 h-4 text-[#09bde3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Bileşen detaylarını görmek için görsel üzerindeki <strong>numaralı pinlere</strong> tıklayın veya üzerine gelin.</span>
                </div>
              </div>

              <!-- Tab 2: Technical Specs Table -->
              <div id="sky-pane-specs" class="sky-spec-pane">
                <div class="sky-spec-table-scroll">
                  <table class="sky-spec-full-table">
                    <thead>
                      <tr>
                        <th>Teknik Parametre</th>
                        <th>Sky Group Standart Değeri</th>
                      </tr>
                    </thead>
                    <tbody id="sky-spec-table-body"></tbody>
                  </table>
                </div>
              </div>

              <!-- Tab 3: Manufacturing & Project Gallery -->
              <div id="sky-pane-gallery" class="sky-spec-pane">
                <div id="sky-spec-gallery-grid" class="sky-spec-gallery-grid"></div>
              </div>

            </div>

            <!-- Bottom Thumbnail Strip -->
            <div class="sky-spec-thumb-strip-wrap">
              <span class="sky-spec-strip-label">KATALOG GÖRSELLERİ:</span>
              <div id="sky-spec-thumb-strip" class="sky-spec-thumb-strip"></div>
            </div>

          </div>

          <!-- RIGHT: SPEC SUMMARY & FAST PROPOSAL FORM (42%) -->
          <div class="sky-spec-right-console">
            
            <!-- Category & Title -->
            <div class="sky-spec-header-meta">
              <div class="flex items-center gap-2">
                <span id="sky-spec-cat-badge" class="sky-spec-category-tag">KLİMA SANTRALLERİ</span>
                <span id="sky-spec-code-badge" class="sky-spec-code-tag">TKS 7-7 / 22-22</span>
              </div>
              <h2 id="sky-spec-title" class="sky-spec-title">TKS Standart Klima Santrali</h2>
              <p id="sky-spec-lead" class="sky-spec-lead">
                1.500 – 120.000 m³/h yüksek debili, 50mm çift cidarlı taşyünü izolasyonlu klima santrali.
              </p>
            </div>

            <!-- In-Modal Product Selector -->
            <div class="sky-spec-product-switcher">
              <label for="sky-spec-select">Ürün / Sistem Seçiniz:</label>
              <select id="sky-spec-select" class="sky-spec-select-box"></select>
            </div>

            <!-- Key Specs Summary Pills -->
            <div id="sky-spec-quick-grid" class="sky-spec-quick-grid"></div>

            <!-- Proposal Form -->
            <form id="sky-spec-quote-form" class="sky-spec-form">
              <div class="sky-spec-form-title">
                <svg class="w-4 h-4 text-[#09bde3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>Hızlı Şartname & Fiyat Teklifi</span>
              </div>

              <div class="sky-spec-form-row">
                <input type="text" name="name" required placeholder="Ad Soyad / Firma Adı *" class="sky-spec-input">
              </div>

              <div class="sky-spec-form-grid">
                <input type="tel" name="phone" required placeholder="Telefon *" class="sky-spec-input">
                <input type="email" name="email" placeholder="E-Posta Adresi" class="sky-spec-input">
              </div>

              <div class="sky-spec-form-row">
                <input type="text" name="capacity" id="sky-spec-input-capacity" placeholder="İstenen Debi / Kapasite (Örn: 15.000 m³/h)" class="sky-spec-input">
              </div>

              <div class="sky-spec-form-row">
                <textarea name="notes" id="sky-spec-input-notes" rows="2" placeholder="Proje notunuz veya mahal bilgileri..." class="sky-spec-textarea"></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="sky-spec-submit-btn">
                <span>⚡ Ücretsiz Mühendislik Keşfi & Teklif Al</span>
              </button>

              <!-- Form Success Notice -->
              <div id="sky-spec-form-success" class="sky-spec-success hidden">
                <svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>Talebiniz başarıyla alındı! Mühendislerimiz 24 saat içinde dönüş yapacaktır.</span>
              </div>
            </form>

            <!-- Direct Fast Action Contacts -->
            <div class="sky-spec-direct-actions">
              <a id="sky-spec-whatsapp-btn" href="https://wa.me/905419221991" target="_blank" rel="noopener noreferrer" class="sky-spec-wa-btn">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z"/></svg>
                <span>WhatsApp ile Mühendisle Görüş</span>
              </a>

              <a href="tel:+905419221991" class="sky-spec-phone-btn">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>0 (541) 922 19 91</span>
              </a>
            </div>

            <!-- Trust Badges -->
            <div class="sky-spec-trust-footer">
              <span>✓ Fabrika Doğrudan İmalat</span>
              <span>✓ TSE & Eurovent</span>
              <span>✓ 2 Yıl Garanti + TAB</span>
            </div>

          </div>

        </div>
      </div>
    `;

    // Inject CSS for the Modal
    injectModalStyles();

    // Populate Product Switcher Dropdown
    const selectEl = document.getElementById('sky-spec-select');
    if (selectEl && window.SKY_PRODUCTS_DATA) {
      selectEl.innerHTML = '';
      Object.keys(window.SKY_PRODUCTS_DATA).forEach(key => {
        const prod = window.SKY_PRODUCTS_DATA[key];
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = `${prod.title} (${prod.category})`;
        selectEl.appendChild(opt);
      });

      selectEl.addEventListener('change', function () {
        loadProductIntoModal(this.value);
      });
    }

    // Tab Switching Logic
    const tabs = modalEl.querySelectorAll('.sky-spec-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        const tabKey = this.getAttribute('data-tab');
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        modalEl.querySelectorAll('.sky-spec-pane').forEach(p => p.classList.remove('active'));
        const targetPane = document.getElementById(`sky-pane-${tabKey}`);
        if (targetPane) targetPane.classList.add('active');
      });
    });

    // Close logic
    const closeBtn = document.getElementById('sky-spec-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeProductSpecModal);
    }
    modalEl.addEventListener('click', function (e) {
      if (e.target === modalEl) closeProductSpecModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalEl.classList.contains('active')) {
        closeProductSpecModal();
      }
    });

    // Form submission
    const form = document.getElementById('sky-spec-quote-form');
    const successMsg = document.getElementById('sky-spec-form-success');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (successMsg) {
          successMsg.classList.remove('hidden');
          setTimeout(() => {
            closeProductSpecModal();
            form.reset();
            successMsg.classList.add('hidden');
          }, 3500);
        }
      });
    }
  }

  // Load specific product data into the modal
  function loadProductIntoModal(productId, activeTab = 'cutaway') {
    if (!window.SKY_PRODUCTS_DATA) return;
    const prod = window.SKY_PRODUCTS_DATA[productId] || window.SKY_PRODUCTS_DATA['tks'];
    if (!prod) return;

    // Update Dropdown
    const selectEl = document.getElementById('sky-spec-select');
    if (selectEl && selectEl.value !== prod.id) {
      selectEl.value = prod.id;
    }

    // Meta & Headers
    const catBadge = document.getElementById('sky-spec-cat-badge');
    if (catBadge) catBadge.textContent = prod.category.toUpperCase();

    const codeBadge = document.getElementById('sky-spec-code-badge');
    if (codeBadge) codeBadge.textContent = prod.code;

    const titleEl = document.getElementById('sky-spec-title');
    if (titleEl) titleEl.textContent = prod.title;

    const leadEl = document.getElementById('sky-spec-lead');
    if (leadEl) leadEl.textContent = prod.lead;

    // Main 3D Cutaway Image
    const mainImg = document.getElementById('sky-spec-main-img');
    if (mainImg) {
      mainImg.src = prod.cutaway3D;
      mainImg.alt = prod.title;
    }

    // Render Hotspots Layer
    renderHotspots(prod.hotspots || []);

    // Render Quick Specs Grid
    const quickGrid = document.getElementById('sky-spec-quick-grid');
    if (quickGrid) {
      quickGrid.innerHTML = '';
      (prod.quickSpecs || []).slice(0, 4).forEach(spec => {
        const item = document.createElement('div');
        item.className = 'sky-spec-quick-item';
        item.innerHTML = `
          <span class="label">${spec.label}</span>
          <span class="val">${spec.val}</span>
        `;
        quickGrid.appendChild(item);
      });
    }

    // Render Full Specifications Table
    const tbody = document.getElementById('sky-spec-table-body');
    if (tbody) {
      tbody.innerHTML = '';
      (prod.specsTable || []).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="font-semibold text-slate-300">${row.k}</td>
          <td class="text-slate-100">${row.v}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // Render Gallery Grid & Bottom Thumbnails
    const galGrid = document.getElementById('sky-spec-gallery-grid');
    const thumbStrip = document.getElementById('sky-spec-thumb-strip');
    if (galGrid && thumbStrip) {
      galGrid.innerHTML = '';
      thumbStrip.innerHTML = '';

      (prod.gallery || []).forEach((imgSrc, idx) => {
        // Large Gallery Grid Item
        const galItem = document.createElement('div');
        galItem.className = 'sky-spec-gal-card';
        galItem.innerHTML = `
          <img src="${imgSrc}" alt="${prod.title} Görsel ${idx + 1}" loading="lazy">
          <div class="sky-spec-gal-overlay">
            <span>🔍 Tam Boyut İncele</span>
          </div>
        `;
        galItem.addEventListener('click', () => {
          if (mainImg) {
            mainImg.src = imgSrc;
            // switch back to cutaway tab to view large
            const cutawayTab = document.querySelector('.sky-spec-tab[data-tab="cutaway"]');
            if (cutawayTab) cutawayTab.click();
          }
        });
        galGrid.appendChild(galItem);

        // Thumbnail Strip Item
        const thumb = document.createElement('div');
        thumb.className = `sky-spec-thumb ${idx === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${imgSrc}" alt="Thumbnail ${idx + 1}">`;
        thumb.addEventListener('click', function () {
          thumbStrip.querySelectorAll('.sky-spec-thumb').forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          if (mainImg) mainImg.src = imgSrc;
        });
        thumbStrip.appendChild(thumb);
      });
    }

    // Update WhatsApp link with prefilled context
    const waBtn = document.getElementById('sky-spec-whatsapp-btn');
    if (waBtn) {
      const msg = encodeURIComponent(`Merhaba Sky Group, web sitenizden "${prod.title}" (${prod.code}) hakkında teknik şartname ve fiyat teklifi almak istiyorum.`);
      waBtn.href = `https://wa.me/905419221991?text=${msg}`;
    }

    // Update Form Note placeholder
    const notesInput = document.getElementById('sky-spec-input-notes');
    if (notesInput) {
      notesInput.value = `${prod.title} için keşif ve teklif talebi.`;
    }

    // Activate Requested Tab
    const targetTabBtn = document.querySelector(`.sky-spec-tab[data-tab="${activeTab}"]`);
    if (targetTabBtn) targetTabBtn.click();
  }

  // Render glowing hotspot pins on top of the 3D cutaway
  function renderHotspots(hotspots) {
    const layer = document.getElementById('sky-spec-hotspots-layer');
    const tooltip = document.getElementById('sky-spec-tooltip');
    const ttNum = document.getElementById('sky-tt-num');
    const ttTitle = document.getElementById('sky-tt-title');
    const ttDesc = document.getElementById('sky-tt-desc');

    if (!layer) return;
    layer.innerHTML = '';

    hotspots.forEach(hp => {
      const pin = document.createElement('button');
      pin.type = 'button';
      pin.className = 'sky-spec-hotspot-pin';
      pin.style.left = `${hp.x}%`;
      pin.style.top = `${hp.y}%`;
      pin.setAttribute('aria-label', hp.title);

      pin.innerHTML = `
        <span class="sky-pin-core">${hp.num}</span>
      `;

      function showTooltip() {
        if (!tooltip || !ttNum || !ttTitle || !ttDesc) return;
        ttNum.textContent = hp.num;
        ttTitle.textContent = hp.title;
        ttDesc.textContent = hp.desc;
        tooltip.classList.remove('hidden');

        // position tooltip smartly
        const leftPercent = hp.x > 60 ? (hp.x - 35) : (hp.x + 5);
        const topPercent = Math.min(Math.max(hp.y - 10, 5), 70);
        tooltip.style.left = `${leftPercent}%`;
        tooltip.style.top = `${topPercent}%`;
      }

      pin.addEventListener('mouseenter', showTooltip);
      pin.addEventListener('focus', showTooltip);
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        showTooltip();
      });

      layer.appendChild(pin);
    });

    // Close tooltip on canvas click
    layer.addEventListener('click', () => {
      if (tooltip) tooltip.classList.add('hidden');
    });
  }

  // Find product by title or string match
  function findProductIdByTitle(title) {
    if (!title || !window.SKY_PRODUCTS_DATA) return 'tks';
    const lower = title.toLowerCase();

    for (const key of Object.keys(window.SKY_PRODUCTS_DATA)) {
      const p = window.SKY_PRODUCTS_DATA[key];
      if (lower.includes(key) || lower.includes(p.title.toLowerCase()) || lower.includes(p.slug.toLowerCase().replace('.html', ''))) {
        return key;
      }
    }

    if (lower.includes('rooftop') || lower.includes('çatı')) return 'rooftop';
    if (lower.includes('hijyenik') || lower.includes('thks')) return 'thks';
    if (lower.includes('ısı pompalı') || lower.includes('thrv')) return 'thrv-dx';
    if (lower.includes('jet fan') || lower.includes('otopark')) return 'jet-fan';
    if (lower.includes('davlumbaz') || lower.includes('mutfak')) return 'davlumbaz';
    if (lower.includes('flanş') || lower.includes('galvaniz')) return 'galvaniz-kanal';
    if (lower.includes('spiral') || lower.includes('spiromatic')) return 'spiral-kanal';
    if (lower.includes('paslanmaz')) return 'paslanmaz-kanal';
    if (lower.includes('damper')) return 'damper';
    if (lower.includes('duman') || lower.includes('400')) return 'yangin-fani';
    if (lower.includes('difüzör') || lower.includes('slot') || lower.includes('swirl')) return 'difuzor';
    if (lower.includes('menfez') || lower.includes('panjur')) return 'menfez';
    if (lower.includes('filtre') || lower.includes('hepa')) return 'filtre';
    if (lower.includes('dış ünite') || lower.includes('vrv')) return 'vrf-dis';
    if (lower.includes('iç ünite') || lower.includes('kaset')) return 'vrf-ic';
    if (lower.includes('plakalı') || lower.includes('hrv')) return 'hrv';
    if (lower.includes('tdf') || lower.includes('kanal tipi fan')) return 'tdf';

    return 'tks';
  }

  // Public Global Functions
  window.openProductSpecModal = function (productIdOrTitle, activeTab = 'cutaway') {
    const modalEl = document.getElementById('sky-quote-modal');
    if (!modalEl) return;

    let targetId = productIdOrTitle;
    if (!window.SKY_PRODUCTS_DATA || !window.SKY_PRODUCTS_DATA[targetId]) {
      targetId = findProductIdByTitle(productIdOrTitle);
    }

    loadProductIntoModal(targetId, activeTab);

    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  // Backwards compatibility with existing buttons calling openQuoteForProject / openQuoteModal
  window.openQuoteForProject = function (itemTitle) {
    window.openProductSpecModal(itemTitle, 'cutaway');
  };

  window.openQuoteModal = function () {
    // Check if current page is a product page
    const pagePath = window.location.pathname;
    let targetId = 'tks';
    for (const key of Object.keys(window.SKY_PRODUCTS_DATA || {})) {
      if (pagePath.includes(window.SKY_PRODUCTS_DATA[key].slug)) {
        targetId = key;
        break;
      }
    }
    window.openProductSpecModal(targetId, 'cutaway');
  };

  window.closeProductSpecModal = function () {
    const modalEl = document.getElementById('sky-quote-modal');
    if (modalEl) {
      modalEl.classList.remove('active');
      modalEl.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  // Inject High-Tech Engineering Styles
  function injectModalStyles() {
    if (document.getElementById('sky-spec-modal-styles')) return;

    const style = document.createElement('style');
    style.id = 'sky-spec-modal-styles';
    style.textContent = `
      .sky-spec-modal-backdrop {
        position: fixed !important;
        inset: 0 !important;
        z-index: 999999 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 12px !important;
        background: rgba(15, 23, 42, 0.75) !important;
        backdrop-filter: blur(8px) !important;
        -webkit-backdrop-filter: blur(8px) !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transition: opacity 0.2s ease, visibility 0.2s ease !important;
      }
      .sky-spec-modal-backdrop.active {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }
      .sky-spec-modal-dialog {
        position: relative !important;
        width: 100% !important;
        max-width: 1140px !important;
        max-height: 92vh !important;
        background: #0f172a !important;
        border: 1px solid #334155 !important;
        border-radius: 8px !important;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
        overflow: hidden !important;
        display: flex !important;
        flex-direction: column !important;
        transform: scale(0.98) !important;
        transition: transform 0.2s ease !important;
        color: #f8fafc !important;
      }
      .sky-spec-modal-backdrop.active .sky-spec-modal-dialog {
        transform: scale(1) !important;
      }
      .sky-spec-modal-close-btn {
        position: absolute !important;
        top: 12px !important;
        right: 12px !important;
        z-index: 50 !important;
        width: 32px !important;
        height: 32px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 4px !important;
        background: #1e293b !important;
        border: 1px solid #334155 !important;
        color: #94a3b8 !important;
        cursor: pointer !important;
        transition: all 0.15s ease !important;
      }
      .sky-spec-modal-close-btn:hover {
        background: #334155 !important;
        color: #ffffff !important;
      }
      .sky-spec-modal-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        overflow-y: auto !important;
        max-height: 92vh !important;
      }
      @media (min-width: 900px) {
        .sky-spec-modal-grid {
          grid-template-columns: 58% 42% !important;
          overflow: hidden !important;
        }
      }

      /* LEFT STAGE (WHITE BACKGROUND - SADE & KLASİK) */
      .sky-spec-left-stage {
        background: #ffffff !important;
        display: flex !important;
        flex-direction: column !important;
        overflow: hidden !important;
        border-bottom: 1px solid #e2e8f0 !important;
      }
      @media (min-width: 900px) {
        .sky-spec-left-stage {
          border-bottom: none !important;
          border-right: 1px solid #e2e8f0 !important;
        }
      }
      .sky-spec-stage-topbar {
        padding: 10px 16px !important;
        background: #f8fafc !important;
        border-bottom: 1px solid #e2e8f0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 8px !important;
      }
      .sky-spec-view-tabs {
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
      }
      .sky-spec-tab {
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        padding: 6px 12px !important;
        border-radius: 4px !important;
        font-size: 12px !important;
        font-weight: 600 !important;
        background: transparent !important;
        border: 1px solid transparent !important;
        color: #64748b !important;
        cursor: pointer !important;
        transition: all 0.15s ease !important;
      }
      .sky-spec-tab:hover {
        color: #0f172a !important;
        background: #e2e8f0 !important;
      }
      .sky-spec-tab.active {
        background: #ffffff !important;
        border-color: #cbd5e1 !important;
        color: #0284c7 !important;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06) !important;
      }

      /* Viewport */
      .sky-spec-main-viewport {
        position: relative !important;
        flex: 1 !important;
        min-height: 380px !important;
        max-height: 500px !important;
        overflow-y: auto !important;
        background-color: #ffffff !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .sky-spec-pane {
        display: none !important;
        width: 100% !important;
        height: 100% !important;
      }
      .sky-spec-pane.active {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
      }
      .sky-spec-schematic-wrap {
        position: relative !important;
        width: 100% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 16px !important;
      }
      .sky-spec-image-stage {
        position: relative !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        max-width: 100% !important;
        max-height: 100% !important;
      }
      .sky-spec-schematic-img {
        max-width: 100% !important;
        max-height: 440px !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
        border-radius: 4px !important;
        display: block !important;
        box-shadow: none !important;
      }
      .sky-spec-hotspots-layer {
        position: absolute !important;
        inset: 0 !important;
        pointer-events: auto !important;
      }

      /* Hotspot Pins (SADE & KLASİK) */
      .sky-spec-hotspot-pin {
        position: absolute !important;
        width: 24px !important;
        height: 24px !important;
        transform: translate(-50%, -50%) !important;
        background: transparent !important;
        border: none !important;
        cursor: pointer !important;
        z-index: 20 !important;
        padding: 0 !important;
      }
      .sky-pin-core {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 24px !important;
        height: 24px !important;
        border-radius: 50% !important;
        background-color: #0284c7 !important;
        color: #ffffff !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        border: 2px solid #ffffff !important;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35) !important;
        transition: transform 0.15s ease, background-color 0.15s ease !important;
      }
      .sky-spec-hotspot-pin:hover .sky-pin-core {
        transform: scale(1.15) !important;
        background-color: #0369a1 !important;
      }

      /* Tooltip */
      .sky-spec-tooltip {
        position: absolute !important;
        z-index: 40 !important;
        max-width: 280px !important;
        background: #1e293b !important;
        border: 1px solid #475569 !important;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5) !important;
        border-radius: 6px !important;
        padding: 12px 14px !important;
        color: #ffffff !important;
        pointer-events: none !important;
      }
      .sky-spec-tooltip-header {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        margin-bottom: 4px !important;
      }
      .sky-spec-tt-num {
        background: #0284c7 !important;
        color: #ffffff !important;
        font-size: 10px !important;
        font-weight: 700 !important;
        padding: 1px 6px !important;
        border-radius: 3px !important;
      }
      .sky-spec-tt-title {
        font-size: 13px !important;
        font-weight: 700 !important;
        color: #ffffff !important;
      }
      .sky-spec-tt-desc {
        font-size: 11px !important;
        line-height: 1.5 !important;
        color: #94a3b8 !important;
        margin: 0 !important;
      }
      .sky-spec-hotspot-hint {
        padding: 8px 14px !important;
        font-size: 11px !important;
        color: #64748b !important;
        background: #f8fafc !important;
        border-top: 1px solid #e2e8f0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        width: 100% !important;
      }

      /* Table Scroll */
      .sky-spec-table-scroll {
        width: 100% !important;
        height: 100% !important;
        padding: 16px !important;
        overflow-y: auto !important;
      }
      .sky-spec-full-table {
        width: 100% !important;
        border-collapse: collapse !important;
        font-size: 12px !important;
      }
      .sky-spec-full-table th {
        background: #1e293b !important;
        color: #38bdf8 !important;
        text-align: left !important;
        padding: 10px 14px !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        border-bottom: 1px solid #334155 !important;
      }
      .sky-spec-full-table td {
        padding: 9px 14px !important;
        border-bottom: 1px solid #1e293b !important;
      }
      .sky-spec-full-table tr:hover {
        background: rgba(255, 255, 255, 0.03) !important;
      }

      /* Gallery Grid */
      .sky-spec-gallery-grid {
        width: 100% !important;
        height: 100% !important;
        padding: 14px !important;
        display: grid !important;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) !important;
        gap: 12px !important;
        overflow-y: auto !important;
      }
      .sky-spec-gal-card {
        position: relative !important;
        aspect-ratio: 4 / 3 !important;
        border-radius: 4px !important;
        overflow: hidden !important;
        border: 1px solid #334155 !important;
        cursor: pointer !important;
        background: #061527 !important;
      }
      .sky-spec-gal-card img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        transition: transform 0.25s ease !important;
      }
      .sky-spec-gal-card:hover img {
        transform: scale(1.04) !important;
      }
      .sky-spec-gal-overlay {
        position: absolute !important;
        inset: 0 !important;
        background: rgba(15, 23, 42, 0.7) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        opacity: 0 !important;
        transition: opacity 0.2s ease !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        color: #38bdf8 !important;
      }
      .sky-spec-gal-card:hover .sky-spec-gal-overlay {
        opacity: 1 !important;
      }

      /* Bottom Thumbnail Strip */
      .sky-spec-thumb-strip-wrap {
        padding: 8px 14px !important;
        background: #f8fafc !important;
        border-top: 1px solid #e2e8f0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
      }
      .sky-spec-strip-label {
        font-size: 10px !important;
        font-weight: 700 !important;
        letter-spacing: 0.05em !important;
        color: #64748b !important;
        white-space: nowrap !important;
      }
      .sky-spec-thumb-strip {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        overflow-x: auto !important;
        padding-bottom: 2px !important;
      }
      .sky-spec-thumb {
        width: 48px !important;
        height: 36px !important;
        border-radius: 4px !important;
        overflow: hidden !important;
        border: 1px solid #cbd5e1 !important;
        cursor: pointer !important;
        opacity: 0.75 !important;
        flex-shrink: 0 !important;
        transition: all 0.15s ease !important;
      }
      .sky-spec-thumb img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
      }
      .sky-spec-thumb:hover, .sky-spec-thumb.active {
        opacity: 1 !important;
        border-color: #0284c7 !important;
      }

      /* RIGHT CONSOLE */
      .sky-spec-right-console {
        padding: 20px 22px !important;
        background: #0f172a !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
        overflow-y: auto !important;
      }
      .sky-spec-header-meta {
        padding-right: 36px !important;
      }
      .sky-spec-category-tag {
        font-size: 10px !important;
        font-weight: 700 !important;
        letter-spacing: 0.05em !important;
        color: #38bdf8 !important;
        background: #1e293b !important;
        border: 1px solid #334155 !important;
        padding: 2px 7px !important;
        border-radius: 4px !important;
      }
      .sky-spec-code-tag {
        font-size: 10px !important;
        font-weight: 600 !important;
        color: #94a3b8 !important;
      }
      .sky-spec-title {
        font-size: 18px !important;
        font-weight: 700 !important;
        color: #ffffff !important;
        margin: 6px 0 4px 0 !important;
        line-height: 1.3 !important;
      }
      .sky-spec-lead {
        font-size: 12px !important;
        line-height: 1.5 !important;
        color: #94a3b8 !important;
        margin: 0 !important;
      }

      /* Product Switcher */
      .sky-spec-product-switcher {
        display: flex !important;
        flex-direction: column !important;
        gap: 4px !important;
      }
      .sky-spec-product-switcher label {
        font-size: 11px !important;
        font-weight: 600 !important;
        color: #94a3b8 !important;
      }
      .sky-spec-select-box {
        width: 100% !important;
        padding: 8px 10px !important;
        background: #1e293b !important;
        border: 1px solid #334155 !important;
        border-radius: 4px !important;
        color: #ffffff !important;
        font-size: 12px !important;
        font-weight: 500 !important;
        outline: none !important;
        cursor: pointer !important;
      }
      .sky-spec-select-box:focus {
        border-color: #0284c7 !important;
      }

      /* Quick Specs Grid */
      .sky-spec-quick-grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 8px !important;
      }
      .sky-spec-quick-item {
        background: #1e293b !important;
        border: 1px solid #334155 !important;
        border-radius: 4px !important;
        padding: 8px 10px !important;
      }
      .sky-spec-quick-item .label {
        display: block !important;
        font-size: 10px !important;
        font-weight: 600 !important;
        color: #38bdf8 !important;
        letter-spacing: 0.02em !important;
        margin-bottom: 2px !important;
      }
      .sky-spec-quick-item .val {
        display: block !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        color: #f8fafc !important;
        line-height: 1.3 !important;
      }

      /* Form */
      .sky-spec-form {
        display: flex !important;
        flex-direction: column !important;
        gap: 8px !important;
        background: #090d16 !important;
        border: 1px solid #1e293b !important;
        border-radius: 6px !important;
        padding: 12px !important;
      }
      .sky-spec-form-title {
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        color: #f8fafc !important;
        text-transform: uppercase !important;
        letter-spacing: 0.04em !important;
        margin-bottom: 2px !important;
      }
      .sky-spec-form-row {
        width: 100% !important;
      }
      .sky-spec-form-grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 8px !important;
      }
      .sky-spec-input, .sky-spec-textarea {
        width: 100% !important;
        padding: 8px 10px !important;
        background: #0f172a !important;
        border: 1px solid #334155 !important;
        border-radius: 4px !important;
        color: #ffffff !important;
        font-size: 12px !important;
        outline: none !important;
        transition: border-color 0.15s ease !important;
      }
      .sky-spec-input:focus, .sky-spec-textarea:focus {
        border-color: #0284c7 !important;
      }
      .sky-spec-textarea {
        resize: none !important;
      }
      .sky-spec-submit-btn {
        width: 100% !important;
        padding: 10px 14px !important;
        border-radius: 4px !important;
        background: #0284c7 !important;
        color: #ffffff !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        border: none !important;
        cursor: pointer !important;
        transition: background-color 0.15s ease !important;
      }
      .sky-spec-submit-btn:hover {
        background: #0369a1 !important;
      }
      .sky-spec-success {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        background: rgba(16, 185, 129, 0.15) !important;
        border: 1px solid rgba(16, 185, 129, 0.4) !important;
        padding: 8px 10px !important;
        border-radius: 4px !important;
        font-size: 11px !important;
        color: #6ee7b7 !important;
      }
      .sky-spec-success.hidden {
        display: none !important;
      }

      /* Direct Action Contacts */
      .sky-spec-direct-actions {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 8px !important;
      }
      .sky-spec-wa-btn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        padding: 8px 10px !important;
        border-radius: 4px !important;
        background: #16a34a !important;
        color: #ffffff !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        text-decoration: none !important;
        transition: background-color 0.15s ease !important;
      }
      .sky-spec-wa-btn:hover {
        background: #15803d !important;
      }
      .sky-spec-phone-btn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        padding: 8px 10px !important;
        border-radius: 4px !important;
        background: #1e293b !important;
        border: 1px solid #334155 !important;
        color: #ffffff !important;
        font-size: 11px !important;
        font-weight: 600 !important;
        text-decoration: none !important;
        transition: background-color 0.15s ease !important;
      }
      .sky-spec-phone-btn:hover {
        background: #334155 !important;
      }

      /* Trust Footer */
      .sky-spec-trust-footer {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        font-size: 10px !important;
        font-weight: 500 !important;
        color: #64748b !important;
        padding-top: 6px !important;
        border-top: 1px solid #1e293b !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Auto-init on DOMContentLoaded or immediate execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSkyProductModal);
  } else {
    initSkyProductModal();
  }

  // Also bind to any [data-sky-modal-trigger] clicks
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-sky-modal-trigger], a[href="#sky-quote-modal"], .sky-vlog-quote-btn');
    if (trigger) {
      e.preventDefault();
      const productTitle = trigger.getAttribute('data-item-title') || trigger.getAttribute('data-product') || '';
      window.openQuoteForProject(productTitle);
    }
  });

})();

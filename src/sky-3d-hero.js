import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Sky Group Master Multi-Story Building Mechanical Digital Twin (BIM & CFD Spatial Model)
 * Systematic, real-world building project architecture with:
 * - 5 Levels: Rooftop Plant Deck, 3F Executive Office, 2F Cleanroom/Lab, 1F Grand Lobby, B1 Underground Parking & Pump Room
 * - Continuous Central Vertical MEP Riser Shaft traversing all floors with motorized fire dampers
 * - Rooftop Central AHU (EC Plug Fan & Rotary Wheel) + Dual VRF Inverter Outdoor Bank + Chiller
 * - Floor-by-Floor EN 1507 Class C Rectangular & Spiromatic Distribution with Anemostats & Swirl Diffusers
 * - Basement Hydronic Pumping Station (1 Asıl + 1 Yedek) + High-Temp 400°C/2h Smoke Jet Fans
 * - Multi-Story Aerodynamic CFD Airflow Simulation cascading down the riser and across all levels
 * - 8 Interactive Hotspot Pins across the building height + Multi-Floor System Filtering HUD
 */

export function initSky3DHero() {
  const container = document.getElementById('sky-3d-hero-container');
  if (!container) return;

  // Clear previous canvas if any
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // --- 1. PROCEDURAL OPTICAL GLOW TEXTURE GENERATOR ---
  function createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.18, 'rgba(0, 240, 255, 0.95)');
    grad.addColorStop(0.45, 'rgba(9, 189, 227, 0.5)');
    grad.addColorStop(0.75, 'rgba(2, 132, 199, 0.16)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    return texture;
  }
  const glowTexture = createGlowTexture();

  // --- 2. THREE.JS SCENE & PERSPECTIVE CAMERA SETUP ---
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020813, 0.012);

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
  
  // High-angle architectural cutaway view showing the entire multi-story building
  camera.position.set(34, 22, 36);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.38;
  container.appendChild(renderer.domElement);

  // Orbit controls with smooth inertia
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.045;
  controls.maxPolarAngle = Math.PI / 2 - 0.02;
  controls.minDistance = 8;
  controls.maxDistance = 85;
  controls.target.set(1.0, 5.5, 0.0); // Center at middle building story
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.35;

  let isUserInteracting = false;
  let resumeRotateTimeout = null;
  const pauseRotation = () => {
    isUserInteracting = true;
    controls.autoRotate = false;
    clearTimeout(resumeRotateTimeout);
    resumeRotateTimeout = setTimeout(() => {
      isUserInteracting = false;
      if (currentMode !== 'hotspot') {
        controls.autoRotate = true;
      }
    }, 8000);
  };

  renderer.domElement.addEventListener('pointerdown', pauseRotation);
  renderer.domElement.addEventListener('wheel', pauseRotation, { passive: true });
  renderer.domElement.addEventListener('touchstart', pauseRotation, { passive: true });

  // Main hierarchy groups for systematic multi-story filtering
  const mainGroup = new THREE.Group();
  mainGroup.position.set(2.0, 0, 0);
  scene.add(mainGroup);

  const groupBuilding = new THREE.Group();  // Slabs, Columns & BIM Envelope
  const groupRoof = new THREE.Group();      // Rooftop AHU, VRF & Chiller
  const groupFloors = new THREE.Group();    // 3F, 2F, 1F Ductwork & Diffusers
  const groupBasement = new THREE.Group();  // B1 Pumps & Smoke Jet Fans
  const groupCfd = new THREE.Group();       // Multi-Story CFD Airflow Particles
  const groupPins = new THREE.Group();      // Hotspot Markers

  mainGroup.add(groupBuilding);
  mainGroup.add(groupRoof);
  mainGroup.add(groupFloors);
  mainGroup.add(groupBasement);
  mainGroup.add(groupCfd);
  mainGroup.add(groupPins);

  // Active rotating elements registry
  const rotatingElements = [];

  // Point cloud buffers by group
  const bldgPts = { pos: [], col: [] };
  const roofPts = { pos: [], col: [] };
  const floorPts = { pos: [], col: [] };
  const basePts = { pos: [], col: [] };

  function sampleBoxLiDAR(target, x, y, z, w, h, d, density, r, g, b) {
    const halfW = w / 2, halfH = h / 2, halfD = d / 2;
    const count = Math.floor(density * (w * h + w * d + h * d));
    for (let i = 0; i < count; i++) {
      const face = Math.floor(Math.random() * 6);
      let px = 0, py = 0, pz = 0;
      switch (face) {
        case 0: px = halfW; py = (Math.random() - 0.5) * h; pz = (Math.random() - 0.5) * d; break;
        case 1: px = -halfW; py = (Math.random() - 0.5) * h; pz = (Math.random() - 0.5) * d; break;
        case 2: py = halfH; px = (Math.random() - 0.5) * w; pz = (Math.random() - 0.5) * d; break;
        case 3: py = -halfH; px = (Math.random() - 0.5) * w; pz = (Math.random() - 0.5) * d; break;
        case 4: pz = halfD; px = (Math.random() - 0.5) * w; py = (Math.random() - 0.5) * h; break;
        case 5: pz = -halfD; px = (Math.random() - 0.5) * w; py = (Math.random() - 0.5) * h; break;
      }
      target.pos.push(x + px, y + py, z + pz);
      const bright = 0.82 + Math.random() * 0.35;
      target.col.push(Math.min(1, r * bright), Math.min(1, g * bright), Math.min(1, b * bright));
    }
  }

  function sampleCylinderLiDAR(target, x, y, z, radius, length, axis, density, r, g, b) {
    const count = Math.floor(density * radius * length * Math.PI * 2);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const t = (Math.random() - 0.5) * length;
      let px = 0, py = 0, pz = 0;
      if (axis === 'x') {
        px = t;
        py = Math.cos(theta) * radius;
        pz = Math.sin(theta) * radius;
      } else if (axis === 'y') {
        py = t;
        px = Math.cos(theta) * radius;
        pz = Math.sin(theta) * radius;
      } else {
        pz = t;
        px = Math.cos(theta) * radius;
        py = Math.sin(theta) * radius;
      }
      target.pos.push(x + px, y + py, z + pz);
      const bright = 0.85 + Math.random() * 0.3;
      target.col.push(Math.min(1, r * bright), Math.min(1, g * bright), Math.min(1, b * bright));
    }
  }

  function addWireBox(parent, x, y, z, w, h, d, color = 0x09bde3, opacity = 0.6) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    line.position.set(x, y, z);
    parent.add(line);
    return line;
  }

  function addWireCylinder(parent, x, y, z, rTop, rBot, height, segments, color = 0x09bde3, opacity = 0.5, rotX = 0, rotZ = 0) {
    const geo = new THREE.CylinderGeometry(rTop, rBot, height, segments, 1, true);
    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    line.position.set(x, y, z);
    if (rotX) line.rotation.x = rotX;
    if (rotZ) line.rotation.z = rotZ;
    parent.add(line);
    return line;
  }

  // --- 3. BLUEPRINT SITE GROUND GRID ---
  const siteGrid = new THREE.GridHelper(80, 80, 0x00f0ff, 0x072740);
  siteGrid.position.y = -3.5;
  siteGrid.material.opacity = 0.35;
  siteGrid.material.transparent = true;
  groupBuilding.add(siteGrid);

  // Ground Scatter Points (3,000 points)
  const gCount = 3000;
  const gPos = new Float32Array(gCount * 3);
  const gCol = new Float32Array(gCount * 3);
  for (let i = 0; i < gCount; i++) {
    const gx = (Math.random() - 0.5) * 76;
    const gz = (Math.random() - 0.5) * 76;
    const gy = -3.52 + Math.random() * 0.04;
    gPos[i * 3] = gx;
    gPos[i * 3 + 1] = gy;
    gPos[i * 3 + 2] = gz;
    const d = Math.sqrt(gx * gx + gz * gz);
    const col = d < 18 ? new THREE.Color(0x00f0ff) : (d < 35 ? new THREE.Color(0x09bde3) : new THREE.Color(0x02253d));
    gCol[i * 3] = col.r;
    gCol[i * 3 + 1] = col.g;
    gCol[i * 3 + 2] = col.b;
  }
  const groundGeo = new THREE.BufferGeometry();
  groundGeo.setAttribute('position', new THREE.BufferAttribute(gPos, 3));
  groundGeo.setAttribute('color', new THREE.BufferAttribute(gCol, 3));
  groupBuilding.add(new THREE.Points(groundGeo, new THREE.PointsMaterial({
    size: 0.22,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })));

  // --- 4. MULTI-STORY BUILDING ARCHITECTURE & BIM SLABS ---
  // Level Heights:
  // B1 (Basement/Otopark): y: -3.0 to 0.0
  // 1F (Lobi / Atriyum): y: 0.0 to 3.8
  // 2F (Temiz Oda / Lab): y: 3.8 to 7.6
  // 3F (Yönetim & Ofis): y: 7.6 to 11.4
  // ROOF (Çatı Mekanik Terası): y: 11.4 to 16.5
  const buildingWidth = 26.0;
  const buildingDepth = 17.0;

  const floorLevels = [
    { id: 'b1', name: 'B1: OTOPARK & POMPA DAİRESİ', y: -3.0, slabH: 0.35 },
    { id: '1f', name: '1F: GİRİŞ LOBİ & ATRİYUM', y: 0.0, slabH: 0.35 },
    { id: '2f', name: '2F: TEMİZ ODA & AR-GE', y: 3.8, slabH: 0.35 },
    { id: '3f', name: '3F: PLAZA OFİS KAT', y: 7.6, slabH: 0.35 },
    { id: 'roof', name: 'ROOF: ÇATI MEKANİK TERASI', y: 11.4, slabH: 0.45 }
  ];

  floorLevels.forEach((lvl, idx) => {
    // Concrete floor slab LiDAR points
    sampleBoxLiDAR(bldgPts, 0, lvl.y, 0, buildingWidth, lvl.slabH, buildingDepth, 10, 0.04, 0.3, 0.55);
    // Floor slab outer wireframe
    addWireBox(groupBuilding, 0, lvl.y, 0, buildingWidth, lvl.slabH, buildingDepth, 0x09bde3, 0.45);

    // Floor Slab Internal Floor Tile Gridlines
    const slabGrid = new THREE.GridHelper(buildingWidth, 12, 0x09bde3, 0x032840);
    slabGrid.position.set(0, lvl.y + lvl.slabH / 2 + 0.01, 0);
    slabGrid.material.opacity = 0.25;
    slabGrid.material.transparent = true;
    groupBuilding.add(slabGrid);
  });

  // Structural Steel I-Beam Columns (HEB 300) extending full height from B1 to Roof
  const colGrid = [
    [-12.5, -8.0], [-4.2, -8.0], [4.2, -8.0], [12.5, -8.0],
    [-12.5, 0.0],  [12.5, 0.0],
    [-12.5, 8.0],  [-4.2, 8.0],  [4.2, 8.0],  [12.5, 8.0]
  ];
  colGrid.forEach(([cx, cz]) => {
    const colTotalHeight = 15.0; // from -3.0 to 12.0
    const colMidY = 4.5;
    sampleBoxLiDAR(bldgPts, cx, colMidY, cz, 0.5, colTotalHeight, 0.5, 12, 0.04, 0.45, 0.7);
    addWireBox(groupBuilding, cx, colMidY, cz, 0.5, colTotalHeight, 0.5, 0x0284c7, 0.4);
    // Base anchor shoe
    addWireBox(groupBuilding, cx, -3.0, cz, 0.9, 0.2, 0.9, 0x00f0ff, 0.7);
  });

  // Facade Curtain Wall Mullion Wireframe (Dış Cam Cephe Profilleri - Şeffaf / Zarif)
  for (let f = 0; f < 4; f++) {
    const startY = floorLevels[f].y + 0.35;
    const endY = floorLevels[f + 1].y;
    const storyH = endY - startY;
    const midY = startY + storyH / 2;
    // Front and Back Glazing Lines
    [-8.0, 8.0].forEach(fz => {
      addWireBox(groupBuilding, 0, midY, fz, buildingWidth, storyH, 0.05, 0x092640, 0.25);
      // Vertical Mullions every 4 meters
      for (let mx = -10.0; mx <= 10.0; mx += 4.0) {
        addWireBox(groupBuilding, mx, midY, fz, 0.12, storyH, 0.15, 0x0284c7, 0.35);
      }
    });
  }

  // --- 5. CONTINUOUS CENTRAL VERTICAL MEP RISER SHAFT ---
  // Vertical mechanical shaft positioned at x: 4.5, z: 0.0 running from -3.0m to +13.5m
  const shaftX = 4.5;
  const shaftZ = 0.0;
  const shaftH = 16.5;
  const shaftMidY = 5.25;

  // Shaft Enclosure Wireframe
  addWireBox(groupBuilding, shaftX, shaftMidY, shaftZ, 4.2, shaftH, 3.6, 0x00f0ff, 0.4);

  // Main Galvanized Supply Air Duct Riser (Prizmatik Dikey Besleme Şaftı)
  const riserW = 1.8;
  const riserD = 1.6;
  sampleBoxLiDAR(floorPts, shaftX - 0.8, shaftMidY, shaftZ, riserW, shaftH, riserD, 16, 0.0, 0.8, 1.0);
  addWireBox(groupFloors, shaftX - 0.8, shaftMidY, shaftZ, riserW, shaftH, riserD, 0x00f0ff, 0.75);

  // Return Air Vertical Riser (Dönüş Şaftı)
  sampleBoxLiDAR(floorPts, shaftX + 1.1, shaftMidY, shaftZ, 1.4, shaftH, riserD, 14, 0.9, 0.6, 0.1);
  addWireBox(groupFloors, shaftX + 1.1, shaftMidY, shaftZ, 1.4, shaftH, riserD, 0xf59e0b, 0.6);

  // Chilled Water & Condenser Hydronic Riser Pipes (İkiz Dikey Borular)
  [-0.6, 0.6].forEach(pz => {
    addWireCylinder(groupFloors, shaftX + 0.1, shaftMidY, shaftZ + pz, 0.15, 0.15, shaftH, 12, 0x38bdf8, 0.85);
  });

  // Motorized Fire Dampers at Every Floor Slab Penetration
  [0.0, 3.8, 7.6, 11.4].forEach(fy => {
    addWireBox(groupFloors, shaftX - 0.8, fy + 0.2, shaftZ, 2.1, 0.4, 1.9, 0xef4444, 0.9);
    // Belimo spring actuator box
    addWireBox(groupFloors, shaftX - 0.8 + 1.15, fy + 0.2, shaftZ + 0.7, 0.3, 0.3, 0.3, 0xf97316, 0.95);
  });

  // --- 6. ROOFTOP LEVEL (ÇATI KAT MEKANİK SAHASI, y: 11.4 to 16.5) ---
  // Rooftop concrete equipment plinths
  sampleBoxLiDAR(roofPts, -4.0, 11.6, 0.0, 14.5, 0.5, 7.5, 16, 0.08, 0.5, 0.85);
  addWireBox(groupRoof, -4.0, 11.6, 0.0, 14.5, 0.5, 7.5, 0x09bde3, 0.6);

  // Central Modular AHU (Klima Santrali) on Rooftop
  const ahuRoofY = 12.0;
  const ahuModules = [
    { id: 'intake', name: 'Taze Hava Emiş & Damper', x: -8.8, w: 2.4, h: 3.4, d: 3.2, color: 0x00f0ff },
    { id: 'filter', name: 'G4 + F7 + H14 HEPA Filtre', x: -6.5, w: 2.0, h: 3.4, d: 3.2, color: 0x09bde3 },
    { id: 'rotor', name: 'Döner Isı Geri Kazanım', x: -4.2, w: 2.4, h: 3.4, d: 3.2, color: 0x38bdf8 },
    { id: 'coil', name: 'Isıtma/Soğutma Serpantin', x: -1.9, w: 2.0, h: 3.4, d: 3.2, color: 0x0284c7 },
    { id: 'fan', name: 'EC Plug Fan & VFD Motor', x: 0.6, w: 2.8, h: 3.4, d: 3.2, color: 0x00f0ff }
  ];

  ahuModules.forEach(mod => {
    const modY = ahuRoofY + mod.h / 2;
    const col = new THREE.Color(mod.color);
    sampleBoxLiDAR(roofPts, mod.x, modY, 0, mod.w, mod.h, mod.d, 22, col.r, col.g, col.b);
    addWireBox(groupRoof, mod.x, modY, 0, mod.w, mod.h, mod.d, 0x09bde3, 0.75);

    // Double-walled casing panel outline
    addWireBox(groupRoof, mod.x, modY, 0, mod.w * 0.95, mod.h * 0.95, mod.d * 0.95, 0x0284c7, 0.4);

    // Inspection Service Door & Circular Porthole
    addWireBox(groupRoof, mod.x, modY, mod.d / 2 + 0.02, mod.w * 0.75, mod.h * 0.8, 0.04, 0x38bdf8, 0.6);
    const porthole = new THREE.Mesh(
      new THREE.RingGeometry(0.24, 0.32, 18),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
    );
    porthole.position.set(mod.x, modY + 0.4, mod.d / 2 + 0.04);
    groupRoof.add(porthole);
  });

  // Active Rotating Heat Recovery Wheel in AHU (x: -4.2)
  const rotorGroup = new THREE.Group();
  rotorGroup.position.set(-4.2, ahuRoofY + 1.7, 0);
  groupRoof.add(rotorGroup);

  const rotorOuter = new THREE.Mesh(
    new THREE.CylinderGeometry(1.4, 1.4, 0.6, 28, 2, true),
    new THREE.MeshBasicMaterial({ color: 0x09bde3, wireframe: true, transparent: true, opacity: 0.45 })
  );
  rotorOuter.rotation.z = Math.PI / 2;
  rotorGroup.add(rotorOuter);

  for (let s = 0; s < 10; s++) {
    const sang = (s / 10) * Math.PI * 2;
    const spoke = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.04, 2.7),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.65 })
    );
    spoke.rotation.x = sang;
    rotorGroup.add(spoke);
  }
  rotatingElements.push({ obj: rotorGroup, axis: 'x', speed: 0.007 });

  // Active Rotating 14-Blade EC Plug Fan Impeller (x: 0.6)
  const fanGroup = new THREE.Group();
  fanGroup.position.set(0.6, ahuRoofY + 1.7, 0);
  groupRoof.add(fanGroup);

  const fanScroll = new THREE.Mesh(
    new THREE.TorusGeometry(1.3, 0.25, 14, 28),
    new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true, transparent: true, opacity: 0.45 })
  );
  fanScroll.rotation.y = Math.PI / 2;
  fanGroup.add(fanScroll);

  const impellerGroup = new THREE.Group();
  fanGroup.add(impellerGroup);
  for (let b = 0; b < 14; b++) {
    const angle = (b / 14) * Math.PI * 2;
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.9, 0.4),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.85 })
    );
    blade.position.set(0, Math.cos(angle) * 0.85, Math.sin(angle) * 0.85);
    blade.rotation.x = angle + 0.38;
    impellerGroup.add(blade);
  }
  rotatingElements.push({ obj: impellerGroup, axis: 'x', speed: 0.08 });

  // Fan Discharge to Shaft Riser Transition Elbow
  addWireBox(groupRoof, 2.5, ahuRoofY + 1.7, 0, 1.8, 1.6, 1.6, 0x00f0ff, 0.8);

  // Rooftop Dual VRF Condenser Units (x: -5.0, z: 5.2)
  [-6.5, -3.5].forEach(vx => {
    sampleBoxLiDAR(roofPts, vx, 13.0, 5.2, 2.2, 2.6, 2.0, 20, 0.0, 0.75, 1.0);
    addWireBox(groupRoof, vx, 13.0, 5.2, 2.2, 2.6, 2.0, 0x00f0ff, 0.8);
    // Cowl & axial fan
    addWireCylinder(groupRoof, vx, 14.4, 5.2, 0.8, 0.8, 0.3, 16, 0x09bde3, 0.85);
    const vrfFan = new THREE.Group();
    vrfFan.position.set(vx, 14.4, 5.2);
    groupRoof.add(vrfFan);
    for (let f = 0; f < 3; f++) {
      const fang = (f / 3) * Math.PI * 2;
      const fb = new THREE.Mesh(
        new THREE.BoxGeometry(0.65, 0.03, 0.18),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.9 })
      );
      fb.position.set(Math.cos(fang) * 0.35, 0, Math.sin(fang) * 0.35);
      fb.rotation.y = fang;
      vrfFan.add(fb);
    }
    rotatingElements.push({ obj: vrfFan, axis: 'y', speed: 0.12 });
  });

  // Rooftop Air-Cooled Chiller Block (x: -5.0, z: -5.2)
  sampleBoxLiDAR(roofPts, -5.0, 12.8, -5.2, 4.2, 2.4, 2.4, 18, 0.02, 0.6, 0.9);
  addWireBox(groupRoof, -5.0, 12.8, -5.2, 4.2, 2.4, 2.4, 0x0284c7, 0.75);
  [-6.0, -4.0].forEach(cx => {
    addWireCylinder(groupRoof, cx, 14.1, -5.2, 0.7, 0.7, 0.25, 14, 0x00f0ff, 0.8);
    const chFan = new THREE.Group();
    chFan.position.set(cx, 14.1, -5.2);
    groupRoof.add(chFan);
    for (let f = 0; f < 3; f++) {
      const fang = (f / 3) * Math.PI * 2;
      const b = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.03, 0.15),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.85 })
      );
      b.position.set(Math.cos(fang) * 0.3, 0, Math.sin(fang) * 0.3);
      b.rotation.y = fang;
      chFan.add(b);
    }
    rotatingElements.push({ obj: chFan, axis: 'y', speed: 0.09 });
  });

  // --- 7. STORY 3 (3F: PLAZA OFİS KAT, y: 7.6 to 11.4) ---
  const y3f = 7.6;
  const ceilingY3f = 10.4;
  // Horizontal Branch Duct taking off from vertical riser into 3F ceiling
  sampleBoxLiDAR(floorPts, -2.5, ceilingY3f, 0.0, 9.5, 0.9, 1.2, 16, 0.05, 0.8, 1.0);
  addWireBox(groupFloors, -2.5, ceilingY3f, 0.0, 9.5, 0.9, 1.2, 0x09bde3, 0.75);

  // Spiral Spiromatic Round Duct Branch to Office Rooms (+Z and -Z)
  [-4.5, 4.5].forEach(bz => {
    addWireBox(groupFloors, -4.0, ceilingY3f, bz / 2, 0.8, 0.8, Math.abs(bz), 0x09bde3, 0.6);
    addWireCylinder(groupFloors, -4.0, ceilingY3f, bz, 0.35, 0.35, 8.0, 14, 0x00f0ff, 0.7, 0, Math.PI / 2);
    // 4-Way Ceiling Anemostats dropping into office space
    [-7.0, -4.0, -1.0].forEach(dx => {
      addWireCylinder(groupFloors, dx, ceilingY3f - 0.5, bz, 0.15, 0.15, 0.7, 10, 0x09bde3, 0.5);
      addWireBox(groupFloors, dx, ceilingY3f - 0.9, bz, 1.0, 0.1, 1.0, 0x00f0ff, 0.9);
    });
  });

  // VRF 4-Way Ceiling Cassette Units in 3F
  [-8.0, 1.0].forEach(cx => {
    addWireBox(groupFloors, cx, ceilingY3f - 0.2, 0.0, 1.6, 0.35, 1.6, 0x00f0ff, 0.85);
  });

  // --- 8. STORY 2 (2F: TEMİZ ODA & AR-GE LABORATUVARI, y: 3.8 to 7.6) ---
  const y2f = 3.8;
  const ceilingY2f = 6.6;
  // Horizontal Duct Branch
  sampleBoxLiDAR(floorPts, -2.5, ceilingY2f, 0.0, 9.5, 0.9, 1.2, 16, 0.05, 0.8, 1.0);
  addWireBox(groupFloors, -2.5, ceilingY2f, 0.0, 9.5, 0.9, 1.2, 0x09bde3, 0.75);

  // Cleanroom Terminal HEPA Filter Ceiling Grid (Laminer Akış Tavanı)
  addWireBox(groupFloors, -5.0, ceilingY2f - 0.4, 0.0, 8.0, 0.15, 10.0, 0x00f0ff, 0.5);
  for (let hx = -8.0; hx <= -2.0; hx += 2.0) {
    for (let hz = -4.0; hz <= 4.0; hz += 2.5) {
      addWireBox(groupFloors, hx, ceilingY2f - 0.45, hz, 1.6, 0.1, 2.0, 0x38bdf8, 0.75);
    }
  }

  // Low-wall Return Air Grilles (Süpürgelik Emiş Menfezleri)
  [-8.5, -1.5].forEach(rx => {
    addWireBox(groupFloors, rx, y2f + 0.6, 5.0, 1.2, 0.8, 0.1, 0xf59e0b, 0.8);
  });

  // --- 9. STORY 1 (1F: GİRİŞ LOBİ & ATRİYUM, y: 0.0 to 3.8) ---
  const y1f = 0.0;
  const ceilingY1f = 2.9;
  // Exposed Architectural Spiromatic Spiral Ducts with High-Induction Swirl Diffusers
  addWireCylinder(groupFloors, -3.5, ceilingY1f, 0.0, 0.45, 0.45, 12.0, 16, 0x00f0ff, 0.8, 0, Math.PI / 2);
  [-8.0, -5.0, -2.0, 1.0].forEach(sx => {
    addWireCylinder(groupFloors, sx, ceilingY1f - 0.4, 0.0, 0.18, 0.18, 0.6, 10, 0x09bde3, 0.6);
    // Swirl Diffuser Plate
    addWireCylinder(groupFloors, sx, ceilingY1f - 0.75, 0.0, 0.55, 0.55, 0.08, 18, 0x00f0ff, 0.9);
  });

  // --- 10. BASEMENT LEVEL (B1: OTOPARK & POMPA DAİRESİ, y: -3.0 to 0.0) ---
  const yB1 = -3.0;

  // Hydronic Pump Station (1 Asıl + 1 Yedek İkiz Pompa İstasyonu) at x: -7.5, z: -4.0
  [-8.5, -6.5].forEach(px => {
    sampleCylinderLiDAR(basePts, px, yB1 + 0.8, -4.0, 0.48, 0.5, 'z', 22, 0.0, 0.85, 1.0);
    addWireCylinder(groupBasement, px, yB1 + 0.8, -4.0, 0.48, 0.48, 0.5, 16, 0x00f0ff, 0.85, Math.PI / 2);
    // Motor
    addWireCylinder(groupBasement, px, yB1 + 1.6, -4.0, 0.32, 0.32, 0.9, 12, 0x09bde3, 0.75);
    // Butterfly isolation valves
    addWireBox(groupBasement, px, yB1 + 0.8, -4.7, 0.35, 0.35, 0.15, 0x00f0ff, 0.9);
    addWireBox(groupBasement, px, yB1 + 0.8, -3.3, 0.35, 0.35, 0.15, 0x00f0ff, 0.9);
  });
  // Expansion Vessel (Membranlı Genleşme Deposu)
  sampleCylinderLiDAR(basePts, -4.5, yB1 + 1.2, -4.0, 0.55, 1.8, 'y', 20, 0.0, 0.7, 1.0);
  addWireCylinder(groupBasement, -4.5, yB1 + 1.2, -4.0, 0.55, 0.55, 1.8, 16, 0x00f0ff, 0.85);

  // High-Temperature 400°C/2h Smoke Exhaust Jet Fans suspended along parking aisles
  [-3.0, 3.0].forEach(jx => {
    const jz = 3.5;
    const jy = yB1 + 2.3;
    sampleCylinderLiDAR(basePts, jx, jy, jz, 0.42, 2.6, 'x', 24, 1.0, 0.3, 0.1);
    addWireCylinder(groupBasement, jx, jy, jz, 0.42, 0.42, 2.6, 18, 0xef4444, 0.85, 0, Math.PI / 2);
    // Bellmouth silencer nozzles
    addWireCylinder(groupBasement, jx - 1.3, jy, jz, 0.54, 0.42, 0.35, 16, 0xf97316, 0.9, 0, Math.PI / 2);
    addWireCylinder(groupBasement, jx + 1.3, jy, jz, 0.42, 0.54, 0.35, 16, 0xf97316, 0.9, 0, Math.PI / 2);

    // Rotating smoke fan impeller
    const jImpeller = new THREE.Group();
    jImpeller.position.set(jx, jy, jz);
    groupBasement.add(jImpeller);
    for (let j = 0; j < 8; j++) {
      const jang = (j / 8) * Math.PI * 2;
      const jb = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.38, 0.15),
        new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true, transparent: true, opacity: 0.85 })
      );
      jb.position.set(0, Math.cos(jang) * 0.2, Math.sin(jang) * 0.2);
      jb.rotation.x = jang;
      jImpeller.add(jb);
    }
    rotatingElements.push({ obj: jImpeller, axis: 'x', speed: 0.14 });
  });

  // --- 11. ASSEMBLE BUILDING & LEVEL POINT CLOUDS ---
  function buildPoints(target, pSize, opacity) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(target.pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(target.col, 3));
    return new THREE.Points(geo, new THREE.PointsMaterial({
      size: pSize,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
  }

  groupBuilding.add(buildPoints(bldgPts, 0.22, 0.65));
  groupRoof.add(buildPoints(roofPts, 0.20, 0.88));
  groupFloors.add(buildPoints(floorPts, 0.20, 0.88));
  groupBasement.add(buildPoints(basePts, 0.20, 0.88));

  // --- 12. MULTI-STORY AERODYNAMIC CFD AIRFLOW SIMULATION ---
  // 6 Continuous Multi-Level Spline Trajectories:
  // 1. Fresh air from roof intake -> AHU filters -> down through vertical riser
  // 2. Supply air branch peeling off into 3F Executive Office -> Anemostats -> Floor cascade
  // 3. Supply air branch peeling off into 2F Cleanroom -> HEPA ceiling grid -> Laminar flow
  // 4. Supply air branch peeling off into 1F Atrium -> Swirl diffusers -> Lobby circulation
  // 5. Multi-story warm return air ascending up through return shaft to roof heat wheel
  // 6. Basement emergency smoke jet stream across parking aisle
  const cfdSplines = [
    // Trajectory 1: Roof AHU supply into Central Vertical Riser
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-8.8, 13.7, 0.0),
        new THREE.Vector3(-4.2, 13.7, 0.0),
        new THREE.Vector3(0.6, 13.7, 0.0),
        new THREE.Vector3(3.7, 13.7, 0.0),
        new THREE.Vector3(3.7, 11.4, 0.0),
        new THREE.Vector3(3.7, 7.6, 0.0),
        new THREE.Vector3(3.7, 3.8, 0.0),
        new THREE.Vector3(3.7, 0.0, 0.0)
      ]),
      colorStart: new THREE.Color(0x00f0ff),
      colorEnd: new THREE.Color(0x38bdf8),
      particleCount: 4200,
      speedBase: 0.0034
    },
    // Trajectory 2: 3F Office Branch & Anemostat Cascade
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(3.7, 10.4, 0.0),
        new THREE.Vector3(-2.0, 10.4, 0.0),
        new THREE.Vector3(-4.0, 10.4, 4.5),
        new THREE.Vector3(-7.0, 9.5, 4.5),
        new THREE.Vector3(-7.0, 8.0, 4.5),
        new THREE.Vector3(-9.0, 7.7, 5.5)
      ]),
      colorStart: new THREE.Color(0x00f0ff),
      colorEnd: new THREE.Color(0x38bdf8),
      particleCount: 2600,
      speedBase: 0.0028
    },
    // Trajectory 3: 2F Cleanroom Branch & HEPA Laminar Downflow
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(3.7, 6.6, 0.0),
        new THREE.Vector3(-2.0, 6.6, 0.0),
        new THREE.Vector3(-5.0, 6.2, 0.0),
        new THREE.Vector3(-5.0, 4.8, 0.0),
        new THREE.Vector3(-5.0, 3.9, 0.0)
      ]),
      colorStart: new THREE.Color(0x09bde3),
      colorEnd: new THREE.Color(0x00f0ff),
      particleCount: 2600,
      speedBase: 0.0026
    },
    // Trajectory 4: 1F Atrium Lobby Spiral Duct & Swirl Diffuser
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(3.7, 2.9, 0.0),
        new THREE.Vector3(-2.0, 2.9, 0.0),
        new THREE.Vector3(-5.0, 2.9, 0.0),
        new THREE.Vector3(-5.0, 2.1, 0.0),
        new THREE.Vector3(-5.0, 0.8, 0.0),
        new THREE.Vector3(-7.5, 0.2, 1.5)
      ]),
      colorStart: new THREE.Color(0x00f0ff),
      colorEnd: new THREE.Color(0x38bdf8),
      particleCount: 2400,
      speedBase: 0.0024
    },
    // Trajectory 5: Warm Multi-Story Return Air Flowing Up the Return Shaft
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-8.5, 4.4, 5.0),
        new THREE.Vector3(5.6, 4.4, 0.0),
        new THREE.Vector3(5.6, 8.0, 0.0),
        new THREE.Vector3(5.6, 12.0, 0.0),
        new THREE.Vector3(-4.2, 13.7, 0.0)
      ]),
      colorStart: new THREE.Color(0xf59e0b),
      colorEnd: new THREE.Color(0xf97316),
      particleCount: 2200,
      speedBase: 0.0022
    },
    // Trajectory 6: Basement Smoke Jet Fan High-Velocity Thrust
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-5.0, -0.7, 3.5),
        new THREE.Vector3(-3.0, -0.7, 3.5),
        new THREE.Vector3(3.0, -0.7, 3.5),
        new THREE.Vector3(8.0, -0.8, 3.5),
        new THREE.Vector3(12.0, -1.0, 3.5)
      ]),
      colorStart: new THREE.Color(0xef4444),
      colorEnd: new THREE.Color(0xf59e0b),
      particleCount: 2000,
      speedBase: 0.0068
    }
  ];

  let totalParticles = 0;
  cfdSplines.forEach(s => totalParticles += s.particleCount);

  const cfdPositions = new Float32Array(totalParticles * 3);
  const cfdColors = new Float32Array(totalParticles * 3);
  const cfdMeta = [];

  let pOffset = 0;
  cfdSplines.forEach(spl => {
    for (let p = 0; p < spl.particleCount; p++) {
      const idx = pOffset + p;
      const progress = Math.random();
      const speed = spl.speedBase * (0.8 + Math.random() * 0.4);
      const jx = (Math.random() - 0.5) * 0.5;
      const jy = (Math.random() - 0.5) * 0.5;
      const jz = (Math.random() - 0.5) * 0.5;
      cfdMeta.push({ spline: spl.curve, progress, speed, jx, jy, jz });

      const pt = spl.curve.getPointAt(progress);
      cfdPositions[idx * 3] = pt.x + jx;
      cfdPositions[idx * 3 + 1] = pt.y + jy;
      cfdPositions[idx * 3 + 2] = pt.z + jz;

      const col = spl.colorStart.clone().lerp(spl.colorEnd, progress);
      cfdColors[idx * 3] = col.r;
      cfdColors[idx * 3 + 1] = col.g;
      cfdColors[idx * 3 + 2] = col.b;
    }
    pOffset += spl.particleCount;
  });

  const cfdGeo = new THREE.BufferGeometry();
  cfdGeo.setAttribute('position', new THREE.BufferAttribute(cfdPositions, 3));
  cfdGeo.setAttribute('color', new THREE.BufferAttribute(cfdColors, 3));
  const cfdMesh = new THREE.Points(cfdGeo, new THREE.PointsMaterial({
    size: 0.24,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }));
  groupCfd.add(cfdMesh);

  // --- 13. 8 INTERACTIVE MULTI-STORY TECHNICAL HOTSPOTS ---
  const hotspots = [
    {
      id: 'ahu_roof',
      name: 'Rooftop Merkezi AHU & EC Plug Fan',
      level: 'Çatı Katı (Roof)',
      target: new THREE.Vector3(0.6, 13.7, 0.0),
      camPos: new THREE.Vector3(14.0, 18.0, 12.0),
      specs: [
        { label: 'Toplam Debi', val: '148.500 m³/h • Çift Cidarlı Taşyünü' },
        { label: 'Fan Verimi', val: 'IE5 Sabit Mıknatıslı EC Plug Fan' },
        { label: 'Isı Geri Kazanım', val: '%82 Termal Verimli Döner Rotor' },
        { label: 'Standart', val: 'TSE EN 1886 D1/L1 • Eurovent' }
      ]
    },
    {
      id: 'vrf_roof',
      name: 'Modüler VRF / VRV Dış Ünite Grubu',
      level: 'Çatı Katı (Roof)',
      target: new THREE.Vector3(-5.0, 13.5, 5.2),
      camPos: new THREE.Vector3(3.0, 17.5, 14.5),
      specs: [
        { label: 'Kompresör', val: 'DC Inverter Twin-Rotary & Scroll' },
        { label: 'Soğutucu Akışkan', val: 'R410A / R32 Çevre Dostu Gaz' },
        { label: 'Sezonsal Verim', val: 'SEER: 8.2 • SCOP: 4.88' },
        { label: 'Boru Dağıtımı', val: 'Refnet Y-Branşman Bakır Hatları' }
      ]
    },
    {
      id: 'riser_shaft',
      name: 'Merkezi Dikey MEP Riser & Yangın Damperi',
      level: 'Tüm Katlar (Şaft)',
      target: new THREE.Vector3(3.7, 7.6, 0.0),
      camPos: new THREE.Vector3(15.0, 10.5, 8.0),
      specs: [
        { label: 'Hava Kanalı', val: 'EN 1507 Class C Sıfır Kaçak Galvaniz' },
        { label: 'Yangın Güvenliği', val: 'Kat Geçişlerinde Belimo Yangın Damperleri' },
        { label: 'Hidronik Hatlar', val: 'Dikişsiz Çelik Boru + Taş Yünü İzolasyon' },
        { label: 'Servis', val: 'Her Katta Akustik Müdahale Kapağı' }
      ]
    },
    {
      id: 'floor3_office',
      name: '3F Ofis Dağıtımı & 4 Yönlü Anemostadlar',
      level: '3. Kat (Plaza Ofis)',
      target: new THREE.Vector3(-4.0, 9.8, 4.5),
      camPos: new THREE.Vector3(5.0, 13.0, 14.0),
      specs: [
        { label: 'Dağıtım Tipi', val: 'Spiromatic Dairesel Spiral & Prizmatik' },
        { label: 'Difüzörler', val: '4 Yönlü Tavan Anemostadları + VAV Box' },
        { label: 'İklimlendirme', val: 'VRF 4 Yönlü Kaset Tipi İç Üniteler' },
        { label: 'Konfor Standart', val: 'ASHRAE 55 • ISO 7730 Termal Konfor' }
      ]
    },
    {
      id: 'floor2_cleanroom',
      name: '2F Temiz Oda & H14 HEPA Laminer Tavan',
      level: '2. Kat (AR-GE & Lab)',
      target: new THREE.Vector3(-5.0, 5.5, 0.0),
      camPos: new THREE.Vector3(4.0, 8.5, 9.0),
      specs: [
        { label: 'Filtrasyon Sınıfı', val: 'H14 (%99.995 MPPS) Terminal Tavan' },
        { label: 'Akış Karakteri', val: 'Laminer Düşey Tek Yönlü Hava Akımı' },
        { label: 'Basınçlandırma', val: '+25 Pa Pozitif Mahal Fark Basıncı' },
        { label: 'Standart', val: 'ISO 14644-1 Class 5 • DIN 1946-4' }
      ]
    },
    {
      id: 'floor1_atrium',
      name: '1F Atriyum Lobi & Girdaplı Swirl Difüzör',
      level: '1. Kat (Giriş & Lobi)',
      target: new THREE.Vector3(-3.5, 2.2, 0.0),
      camPos: new THREE.Vector3(6.0, 5.0, 9.0),
      specs: [
        { label: 'Mimari Entegrasyon', val: 'Görünür (Açıkta) Spiromatic Çift Contalı Kanal' },
        { label: 'Hava Dağılımı', val: 'Yüksek İndüksiyonlu Girdaplı (Swirl) Menfez' },
        { label: 'Hava Hızı', val: '< 0.18 m/s Mahal İçi Cereyansız Konfor' },
        { label: 'Standart', val: 'EN 13779 IDA 1 Yüksek İç Hava Kalitesi' }
      ]
    },
    {
      id: 'base_pumps',
      name: 'B1 Hidronik Pompa İstasyonu & Chiller',
      level: 'Bodrum Katı (B1)',
      target: new THREE.Vector3(-7.5, -2.0, -4.0),
      camPos: new THREE.Vector3(2.0, 1.5, 3.5),
      specs: [
        { label: 'Yapılandırma', val: '1 Asıl + 1 Yedek İkiz Frekans İnvertörlü Pompa' },
        { label: 'Vana Grubu', val: 'GG25 Döküm Salyangoz • PN16 Kelebek Vanalar' },
        { label: 'Genleşme Tankı', val: 'Membranlı Kapalı Tip • 10 Bar Emniyet' },
        { label: 'Otomasyon', val: 'BMS Scada Diferansiyel Basınç Modülasyonu' }
      ]
    },
    {
      id: 'base_jetfan',
      name: '400°C/2h Otopark Duman Tahliye Jet Fanı',
      level: 'Bodrum Katı (B1)',
      target: new THREE.Vector3(0.0, -0.7, 3.5),
      camPos: new THREE.Vector3(8.0, 2.5, 11.5),
      specs: [
        { label: 'Yangın Dayanımı', val: '400°C / 120 Dakika Kesintisiz Tahliye' },
        { label: 'İtme Gücü', val: '55 N Çift Yönlü Aerodinamik İtme' },
        { label: 'Nozullar', val: 'Her İki Uçta Akustik Susturucu Koni' },
        { label: 'Standart', val: 'EN 12101-3 F400 • CE Yangın Onaylı' }
      ]
    }
  ];

  const pinMeshes = [];
  hotspots.forEach(spot => {
    const pinHolder = new THREE.Group();
    pinHolder.position.copy(spot.target);

    // Glowing core sphere
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    );
    sphere.userData = { hotspot: spot };
    pinHolder.add(sphere);

    // Pulsing outer ring
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.48, 0.62, 24),
      new THREE.MeshBasicMaterial({ color: 0x09bde3, side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
    );
    ring.rotation.x = Math.PI / 2;
    pinHolder.add(ring);

    groupPins.add(pinHolder);
    pinMeshes.push(pinHolder);
  });

  // Hotspot interaction & camera lerp
  let targetCamPos = null;
  let targetLookAt = null;
  let isLerpingCamera = false;

  function focusHotspot(spot) {
    targetCamPos = spot.camPos.clone().add(mainGroup.position);
    targetLookAt = spot.target.clone().add(mainGroup.position);
    isLerpingCamera = true;
    controls.autoRotate = false;

    const infoCard = document.getElementById('sky-3d-info-card');
    if (infoCard) {
      infoCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <span class="sky-3d-card-sys">${spot.level}</span>
            <h4 class="sky-3d-card-title">${spot.name}</h4>
          </div>
          <button type="button" onclick="window.closeSky3DInfo()" style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer; padding: 0 4px; line-height: 1;">&times;</button>
        </div>
        <div style="margin: 8px 0; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          ${spot.specs.map(s => `
            <div class="sky-3d-card-spec-row">
              <span class="sky-3d-card-spec-label">${s.label}:</span>
              <span class="sky-3d-card-spec-val">${s.val}</span>
            </div>
          `).join('')}
        </div>
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <a href="#sky-quote-modal" data-sky-modal-trigger="kesif" class="sky-3d-card-cta" style="flex: 1;">
            Teklif &amp; Projelendir
          </a>
          <button type="button" onclick="window.resetSky3DCamera()" style="padding: 7px 12px; border-radius: 6px; background: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 255, 255, 0.2); color: #ffffff; font-size: 11px; font-weight: 700; cursor: pointer;">
            Genel Bakış
          </button>
        </div>
      `;
      infoCard.classList.remove('hidden');
    }
  }

  window.closeSky3DInfo = function() {
    const card = document.getElementById('sky-3d-info-card');
    if (card) card.classList.add('hidden');
  };

  window.resetSky3DCamera = function() {
    targetCamPos = new THREE.Vector3(34, 22, 36);
    targetLookAt = new THREE.Vector3(1.0, 5.5, 0.0);
    isLerpingCamera = true;
    controls.autoRotate = true;
    window.closeSky3DInfo();
  };

  // Raycaster for clicking pins
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  renderer.domElement.addEventListener('click', (e) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const hitObjects = pinMeshes.map(grp => grp.children[0]);
    const intersects = raycaster.intersectObjects(hitObjects, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hit.userData?.hotspot) {
        focusHotspot(hit.userData.hotspot);
      }
    }
  });

  // --- 14. MULTI-FLOOR / SYSTEM FILTERING MODES ---
  let currentMode = 'all';

  window.setSky3DMode = function(mode) {
    currentMode = mode;
    const btns = document.querySelectorAll('.sky-3d-mode-btn');
    btns.forEach(b => {
      if (b.getAttribute('data-mode') === mode) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    // Reset visibility
    groupBuilding.visible = true;
    groupRoof.visible = true;
    groupFloors.visible = true;
    groupBasement.visible = true;
    groupCfd.visible = true;

    if (mode === 'roof') {
      groupFloors.visible = false;
      groupBasement.visible = false;
      targetCamPos = new THREE.Vector3(22.0, 22.0, 24.0);
      targetLookAt = new THREE.Vector3(0.0, 13.0, 0.0);
      isLerpingCamera = true;
    } else if (mode === 'floors') {
      groupRoof.visible = false;
      groupBasement.visible = false;
      targetCamPos = new THREE.Vector3(26.0, 12.0, 26.0);
      targetLookAt = new THREE.Vector3(-1.0, 6.0, 0.0);
      isLerpingCamera = true;
    } else if (mode === 'basement') {
      groupRoof.visible = false;
      groupFloors.visible = false;
      targetCamPos = new THREE.Vector3(18.0, 4.0, 20.0);
      targetLookAt = new THREE.Vector3(-1.0, -1.5, 0.0);
      isLerpingCamera = true;
    } else if (mode === 'cfd') {
      groupBuilding.visible = true;
      groupRoof.visible = true;
      groupFloors.visible = true;
      groupBasement.visible = true;
      groupCfd.visible = true;
      targetCamPos = new THREE.Vector3(34, 22, 36);
      targetLookAt = new THREE.Vector3(1.0, 5.5, 0.0);
      isLerpingCamera = true;
    } else if (mode === 'all') {
      targetCamPos = new THREE.Vector3(34, 22, 36);
      targetLookAt = new THREE.Vector3(1.0, 5.5, 0.0);
      isLerpingCamera = true;
    }
  };

  // --- 15. ANIMATION LOOP ---
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    // Rotate active machinery (EC fan, heat wheel, VRF fans, chiller fans, jet fans)
    rotatingElements.forEach(el => {
      if (el.axis === 'x') el.obj.rotation.x += el.speed;
      else if (el.axis === 'y') el.obj.rotation.y += el.speed;
      else if (el.axis === 'z') el.obj.rotation.z += el.speed;
    });

    // Multi-Story CFD Particle Streamlines
    const posAttr = cfdGeo.attributes.position;
    for (let i = 0; i < totalParticles; i++) {
      const p = cfdMeta[i];
      p.progress += p.speed;
      if (p.progress >= 1.0) p.progress = 0.0;

      const pt = p.spline.getPointAt(p.progress);
      const turb = Math.sin(time * 5.5 + i) * 0.035;
      posAttr.setXYZ(
        i,
        pt.x + p.jx + turb,
        pt.y + p.jy + turb,
        pt.z + p.jz + turb
      );
    }
    posAttr.needsUpdate = true;

    // Pulse Hotspot Rings
    pinMeshes.forEach((pin, idx) => {
      const ring = pin.children[1];
      if (ring) {
        const s = 1.0 + Math.sin(time * 3.5 + idx * 1.2) * 0.28;
        ring.scale.set(s, s, s);
      }
    });

    // Smooth Camera Lerping
    if (isLerpingCamera && targetCamPos && targetLookAt) {
      camera.position.lerp(targetCamPos, 0.045);
      controls.target.lerp(targetLookAt, 0.045);
      if (camera.position.distanceTo(targetCamPos) < 0.08 && controls.target.distanceTo(targetLookAt) < 0.08) {
        isLerpingCamera = false;
      }
    }

    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  // Resize handler
  function onWindowResize() {
    if (!container) return;
    const newW = container.clientWidth || window.innerWidth;
    const newH = container.clientHeight || window.innerHeight;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  }
  window.addEventListener('resize', onWindowResize);

  // Live SCADA Multi-Story Sensors
  const flowVal = document.getElementById('sky-telemetry-flow');
  const pressVal = document.getElementById('sky-telemetry-press');
  const tempVal = document.getElementById('sky-telemetry-temp');
  const copVal = document.getElementById('sky-telemetry-cop');

  setInterval(() => {
    if (flowVal) {
      const baseFlow = 148500;
      const variation = Math.floor(Math.sin(Date.now() / 2000) * 320);
      flowVal.innerText = (baseFlow + variation).toLocaleString('tr-TR');
    }
    if (pressVal) {
      const basePress = 460;
      const pVar = Math.floor(Math.sin(Date.now() / 1500) * 14);
      pressVal.innerText = (basePress + pVar);
    }
    if (tempVal) {
      const baseTemp = 16.2;
      const tVar = (Math.sin(Date.now() / 3000) * 0.3).toFixed(1);
      tempVal.innerText = (parseFloat(baseTemp) + parseFloat(tVar)).toFixed(1);
    }
    if (copVal) {
      const baseCop = 4.88;
      const cVar = (Math.sin(Date.now() / 2500) * 0.08).toFixed(2);
      copVal.innerText = (parseFloat(baseCop) + parseFloat(cVar)).toFixed(2);
    }
  }, 1000);
}

// Auto-run when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSky3DHero);
} else {
  initSky3DHero();
}

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Sky Group Master Product 3D Digital Twin Engine
 * Procedural, highly detailed WebGL 3D CAD models for all 18 HVAC product families:
 * - Air Handling Units: TKS (Standard AHU), THKS (Hygienic AHU), THRV-DX (Heat Pump Recovery), HRV (Plate Recovery), Rooftop (Packaged Unit)
 * - Ventilation Fans: TDF (Rectangular Duct Fan), Yangın Fanı (400°C/2h Smoke Exhaust), Jet Fan (Car Park Impulse Fan)
 * - Ductwork: Galvaniz Kanal (Self-Flanged), Spiral Kanal (Spiromatic Round), Paslanmaz Kanal (TIG Welded Stainless)
 * - Air Distribution: Menfez (Double Deflection Grille), Difüzör (Linear Slot & Swirl Anemostat), Damper (Fire & Smoke Damper)
 * - Filtration: Filtre (G4 Cassette, F7/F9 Pocket Bag & H14 Absolute HEPA Module)
 * - VRF & Specialties: VRF Dış (Modular Inverter Outdoor), VRF İç (4-Way Cassette & Ducted), Davlumbaz (Commercial Kitchen Hood & Ansul)
 */

export function initSky3DProduct(containerId = 'sky-product-3d-canvas') {
  const container = document.getElementById(containerId);
  if (!container) return null;

  // Clear existing contents
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const productId = container.getAttribute('data-product') || 'tks';
  const productData = (window.SKY_PRODUCTS_DATA && window.SKY_PRODUCTS_DATA[productId]) || {
    id: productId,
    title: 'Sky Group Mühendislik Ürünü',
    hotspots: []
  };

  // --- 1. THREE.JS SCENE SETUP ---
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const width = container.clientWidth || 900;
  const height = container.clientHeight || 480;

  const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
  camera.position.set(9.0, 4.2, 7.5);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  container.appendChild(renderer.domElement);

  // --- 2. ORBIT CONTROLS ---
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 - 0.05;
  controls.minDistance = 2.5;
  controls.maxDistance = 26.0;
  controls.target.set(0, 0, 0);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.6;

  let isUserInteracting = false;
  let resumeTimer = null;
  const pauseAutoRotate = () => {
    isUserInteracting = true;
    controls.autoRotate = false;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isUserInteracting = false;
      if (state.autoRotate) controls.autoRotate = true;
    }, 6000);
  };

  renderer.domElement.addEventListener('pointerdown', pauseAutoRotate);
  renderer.domElement.addEventListener('wheel', pauseAutoRotate, { passive: true });
  renderer.domElement.addEventListener('touchstart', pauseAutoRotate, { passive: true });

  // --- 3. STUDIO LIGHTING & SHADOW GROUND ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
  keyLight.position.set(12, 16, 14);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.bias = -0.0005;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.7);
  fillLight.position.set(-14, 8, -10);
  scene.add(fillLight);

  const topRimLight = new THREE.DirectionalLight(0xf0fdf4, 0.6);
  topRimLight.position.set(0, 18, 0);
  scene.add(topRimLight);

  // Contact ground shadow plane
  const groundGeo = new THREE.PlaneGeometry(30, 30);
  const groundMat = new THREE.ShadowMaterial({ opacity: 0.12 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.65;
  ground.receiveShadow = true;
  scene.add(ground);

  const grid = new THREE.GridHelper(24, 24, 0xe2e8f0, 0xf1f5f9);
  grid.position.y = -1.64;
  scene.add(grid);

  // --- 4. MATERIAL PALETTE ---
  const materials = {
    aluFrame: new THREE.MeshStandardMaterial({ color: 0xd4d8dd, metalness: 0.75, roughness: 0.3 }),
    galvSteel: new THREE.MeshStandardMaterial({ color: 0xc4cdd5, metalness: 0.65, roughness: 0.45 }),
    stainless: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 }),
    baseSkid: new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.35 }),
    panelSolid: new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.15, roughness: 0.4 }),
    panelCutaway: new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.22,
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45
    }),
    fanHousing: new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.5, roughness: 0.35 }),
    fanImpeller: new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.7, roughness: 0.25 }),
    motorCast: new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 }),
    copperPipe: new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.85, roughness: 0.25 }),
    coolingFin: new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.55, roughness: 0.4 }),
    heatingFin: new THREE.MeshStandardMaterial({ color: 0xf87171, metalness: 0.55, roughness: 0.4 }),
    rotorWheel: new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7, roughness: 0.35 }),
    filterCloth: new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.9, metalness: 0.05 }),
    damperBlade: new THREE.MeshStandardMaterial({ color: 0xa1a1aa, metalness: 0.8, roughness: 0.3 }),
    actuatorOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, metalness: 0.3, roughness: 0.4 }),
    drainPan: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 }),
    doorHandle: new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.7, roughness: 0.3 }),
    rubberBlack: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8, metalness: 0.1 }),
    brassGold: new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.85, roughness: 0.25 })
  };

  const animators = [];
  const dynamicCutawayPanels = [];
  const modelRoot = new THREE.Group();
  scene.add(modelRoot);

  // Mesh creation helpers
  function createBox(w, h, d, mat, x, y, z, cast = true, receive = true) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  }

  function createCyl(rTop, rBot, height, segs, mat, x, y, z, rotX = 0, rotZ = 0) {
    const geo = new THREE.CylinderGeometry(rTop, rBot, height, segs);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    if (rotX) mesh.rotation.x = rotX;
    if (rotZ) mesh.rotation.z = rotZ;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  // --- 5. CATEGORY-BASED PROCEDURAL GENERATORS ---

  // A. AIR HANDLING & RECOVERY UNITS (TKS, THKS, THRV-DX, HRV, ROOFTOP)
  function buildAhuModel(parent, type) {
    const isHygienic = type === 'thks';
    const isDx = type === 'thrv-dx';
    const isHrv = type === 'hrv';
    const isRooftop = type === 'rooftop';

    const L = isHrv ? 4.8 : (isRooftop ? 6.2 : 7.6);
    const H = isHrv ? 1.9 : 2.6;
    const W = isHrv ? 1.8 : 2.0;
    const halfL = L / 2, halfH = H / 2, halfW = W / 2;

    // Base skid
    const skidH = 0.22;
    const skidY = -halfH - skidH / 2;
    const skidFront = createBox(L + 0.3, skidH, 0.12, materials.baseSkid, 0, skidY, halfW - 0.06);
    const skidBack = createBox(L + 0.3, skidH, 0.12, materials.baseSkid, 0, skidY, -halfW + 0.06);
    parent.add(skidFront, skidBack);
    [-halfL, -halfL * 0.5, 0, halfL * 0.5, halfL].forEach(cx => {
      parent.add(createBox(0.12, skidH, W - 0.24, materials.baseSkid, cx, skidY, 0));
    });

    // Framework
    const pSize = 0.08;
    const frameMat = isHygienic ? materials.stainless : materials.aluFrame;
    parent.add(
      createBox(L, pSize, pSize, frameMat, 0, -halfH + pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, frameMat, 0, -halfH + pSize / 2, -halfW + pSize / 2),
      createBox(L, pSize, pSize, frameMat, 0, halfH - pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, frameMat, 0, halfH - pSize / 2, -halfW + pSize / 2)
    );

    // Back, roof, floor solid panels
    const intMat = isHygienic ? materials.stainless : materials.galvSteel;
    parent.add(
      createBox(L - 0.1, H - 0.1, 0.05, materials.panelSolid, 0, 0, -halfW + 0.04),
      createBox(L - 0.1, 0.05, W - 0.1, materials.panelSolid, 0, halfH - 0.03, 0),
      createBox(L - 0.1, 0.05, W - 0.1, intMat, 0, -halfH + 0.03, 0),
      createBox(0.05, H - 0.1, W - 0.1, materials.panelSolid, halfL - 0.03, 0, 0)
    );

    // Front Cutaway Panels (3 Modules)
    const doorCount = isHrv ? 3 : 4;
    const doorW = (L - 0.2) / doorCount;
    for (let d = 0; d < doorCount; d++) {
      const dx = -halfL + 0.1 + (d + 0.5) * doorW;
      const cutDoor = createBox(doorW - 0.04, H - 0.18, 0.03, materials.panelCutaway, dx, 0, halfW - 0.02, false, false);
      parent.add(cutDoor);
      dynamicCutawayPanels.push(cutDoor);
      // Handle & ring
      parent.add(createBox(0.04, 0.12, 0.04, materials.doorHandle, dx + doorW * 0.4, 0, halfW + 0.01));
      parent.add(createCyl(0.11, 0.11, 0.04, 16, materials.aluFrame, dx, 0.2, halfW, Math.PI / 2));
    }

    // Specific Interials
    if (isHrv) {
      // HRV: Diamond Plate Heat Exchanger Core in Center
      const plateCore = createBox(1.5, 1.4, W - 0.35, materials.aluFrame, 0, 0, 0);
      plateCore.rotation.z = Math.PI / 4;
      parent.add(plateCore);
      // Dual centrifugal fans
      [-1.4, 1.4].forEach((fx, idx) => {
        const fy = idx === 0 ? -0.35 : 0.35;
        const fan = createCyl(0.35, 0.35, 0.25, 20, materials.fanHousing, fx, fy, 0, 0, Math.PI / 2);
        parent.add(fan);
        animators.push(() => { fan.rotation.x += 0.1; });
      });
      // Filters on sides
      [-1.9, 1.9].forEach(px => {
        parent.add(createBox(0.06, H - 0.4, W - 0.4, materials.filterCloth, px, 0, 0));
      });
    } else if (isRooftop) {
      // ROOFTOP: Top Condenser Fans + Compressor Compartment
      [-1.2, 1.2].forEach(fx => {
        const topFanRim = createCyl(0.55, 0.55, 0.18, 24, materials.motorCast, fx, halfH + 0.09, 0);
        const topFanBlades = createCyl(0.48, 0.48, 0.04, 4, materials.fanImpeller, fx, halfH + 0.12, 0);
        parent.add(topFanRim, topFanBlades);
        animators.push(() => { topFanBlades.rotation.y += 0.15; });
      });
      // Scroll Compressors
      [-1.8, -1.0].forEach(cx => {
        const comp = createCyl(0.2, 0.2, 0.7, 16, materials.motorCast, cx, -halfH + 0.5, -halfW + 0.5);
        parent.add(comp);
      });
      // Supply Fan & Coils
      const plugFan = createCyl(0.45, 0.45, 0.35, 20, materials.fanHousing, 1.8, -0.2, 0, 0, Math.PI / 2);
      parent.add(plugFan);
      animators.push(() => { plugFan.rotation.x += 0.12; });
      parent.add(createBox(0.3, H - 0.5, W - 0.4, materials.coolingFin, 0.5, -0.1, 0));
    } else {
      // TKS, THKS, THRV-DX: Two-Deck AHU with Center Rotary Wheel
      // Rotary Wheel
      const wheelAssembly = new THREE.Group();
      wheelAssembly.position.set(0, 0, 0);
      parent.add(wheelAssembly);
      const wheelRim = createCyl(1.05, 1.05, 0.28, 32, materials.aluFrame, 0, 0, 0, 0, Math.PI / 2);
      const wheelCore = createCyl(1.01, 1.01, 0.26, 28, materials.rotorWheel, 0, 0, 0, 0, Math.PI / 2);
      wheelAssembly.add(wheelRim, wheelCore);
      for (let s = 0; s < 12; s++) {
        const ang = (s / 12) * Math.PI * 2;
        const spoke = createBox(0.03, 1.98, 0.02, materials.aluFrame, 0, 0, 0);
        spoke.rotation.x = ang;
        wheelAssembly.add(spoke);
      }
      animators.push(() => { wheelAssembly.rotation.x += 0.008; });

      // Fans (Lower Supply & Upper Exhaust)
      const fan1 = createCyl(0.42, 0.42, 0.35, 24, materials.fanHousing, 2.8, -halfH / 2 + 0.1, 0, 0, Math.PI / 2);
      const fan2 = createCyl(0.36, 0.36, 0.3, 24, materials.fanHousing, -1.3, halfH / 2 - 0.05, 0, 0, Math.PI / 2);
      parent.add(fan1, fan2);
      animators.push(() => { fan1.rotation.x += 0.12; fan2.rotation.x += 0.12; });

      // Coils
      parent.add(createBox(0.28, halfH - 0.3, W - 0.35, isHygienic ? materials.stainless : materials.coolingFin, 1.35, -halfH / 2, 0));
      parent.add(createBox(0.22, halfH - 0.3, W - 0.35, materials.heatingFin, 1.85, -halfH / 2, 0));
      // Drain Pan
      parent.add(createBox(0.95, 0.08, W - 0.25, materials.drainPan, 1.6, -halfH + 0.12, 0));

      // Filters
      parent.add(createBox(0.06, halfH - 0.25, W - 0.3, isHygienic ? materials.stainless : materials.aluFrame, -2.1, -halfH / 2, 0));
      for (let bi = 0; bi < 4; bi++) {
        const bz = -halfW + 0.25 + (bi + 0.5) * ((W - 0.4) / 4);
        const bag = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.75, 4), materials.filterCloth);
        bag.rotateZ(-Math.PI / 2);
        bag.position.set(-1.7, -halfH / 2, bz);
        bag.scale.set(1.0, 1.4, 0.8);
        parent.add(bag);
      }

      // Dampers on left
      [-halfH / 2, halfH / 2].forEach(dy => {
        parent.add(createBox(0.08, halfH - 0.25, W - 0.3, materials.aluFrame, -halfL - 0.04, dy, 0));
        parent.add(createBox(0.14, 0.18, 0.12, materials.actuatorOrange, -halfL - 0.04, dy, halfW + 0.05));
      });

      // DX compressor if thrv-dx
      if (isDx) {
        parent.add(createCyl(0.2, 0.2, 0.65, 16, materials.motorCast, 2.5, -halfH / 2, -halfW + 0.5));
      }

      // Control panel on front
      parent.add(createBox(0.32, 0.55, 0.18, materials.motorCast, 2.3, 0.35, halfW + 0.09));
    }
  }

  // B. FANS & VENTILATION (TDF, YANGIN-FANI, JET-FAN)
  function buildFanModel(parent, type) {
    if (type === 'tdf') {
      // TDF: Rectangular in-line duct fan with hollow casing
      parent.add(
        createBox(3.4, 2.2, 0.05, materials.galvSteel, 0, 0, -1.08),  // Back
        createBox(3.4, 0.05, 2.2, materials.galvSteel, 0, 1.08, 0),   // Top
        createBox(3.4, 0.05, 2.2, materials.galvSteel, 0, -1.08, 0),  // Bottom
        createBox(0.05, 2.2, 2.2, materials.galvSteel, -1.68, 0, 0),  // Left with duct inlet
        createBox(0.05, 2.2, 2.2, materials.galvSteel, 1.68, 0, 0)    // Right with duct outlet
      );
      // Flanges on both ends
      [-1.72, 1.72].forEach(fx => {
        parent.add(createBox(0.08, 2.4, 2.4, materials.aluFrame, fx, 0, 0));
      });
      // Cutaway service door on front
      const door = createBox(3.3, 2.1, 0.04, materials.panelCutaway, 0, 0, 1.09, false, false);
      parent.add(door);
      dynamicCutawayPanels.push(door);
      // Impeller & external rotor motor
      const imp = createCyl(0.85, 0.85, 0.55, 24, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
      const motor = createCyl(0.3, 0.3, 0.4, 16, materials.motorCast, 0.3, 0, 0, 0, Math.PI / 2);
      parent.add(imp, motor);
      animators.push(() => { imp.rotation.x += 0.14; });
      // Terminal box
      parent.add(createBox(0.22, 0.22, 0.14, materials.fanHousing, -0.8, 1.15, 0.6));
    } else if (type === 'yangin-fani') {
      // Smoke fan 400°C/2h: Cylindrical hot-dip galvanized casing with aerofoil runner
      const tube = createCyl(1.3, 1.3, 4.2, 32, materials.galvSteel, 0, 0, 0, 0, Math.PI / 2);
      parent.add(tube);
      // Flange rings
      [-2.12, 2.12].forEach(fx => {
        parent.add(createCyl(1.48, 1.48, 0.08, 32, materials.baseSkid, fx, 0, 0, 0, Math.PI / 2));
      });
      // Center Torpedo Motor Cowl
      const motorPod = createCyl(0.5, 0.5, 2.2, 24, materials.motorCast, 0.2, 0, 0, 0, Math.PI / 2);
      const runner = createCyl(1.22, 1.22, 0.14, 8, materials.fanImpeller, -0.6, 0, 0, 0, Math.PI / 2);
      parent.add(motorPod, runner);
      animators.push(() => { runner.rotation.x += 0.15; });
      // Mounting feet
      parent.add(createBox(2.8, 0.15, 0.4, materials.baseSkid, 0, -1.35, 1.0));
      parent.add(createBox(2.8, 0.15, 0.4, materials.baseSkid, 0, -1.35, -1.0));
      // Terminal box
      parent.add(createBox(0.25, 0.25, 0.16, materials.actuatorOrange, 0, 1.35, 0));
    } else {
      // Jet fan: Long impulse tunnel fan with dual silencer pods
      const mainTube = createCyl(0.65, 0.65, 5.4, 28, materials.galvSteel, 0, 0, 0, 0, Math.PI / 2);
      parent.add(mainTube);
      // Silencer outer pods
      [-1.8, 1.8].forEach(sx => {
        parent.add(createCyl(0.78, 0.78, 1.6, 28, materials.aluFrame, sx, 0, 0, 0, Math.PI / 2));
      });
      // Center runner
      const jetRunner = createCyl(0.6, 0.6, 0.12, 8, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
      parent.add(jetRunner);
      animators.push(() => { jetRunner.rotation.x += 0.16; });
      // Deflector vanes on discharge
      parent.add(createBox(0.12, 0.6, 0.5, materials.damperBlade, 2.75, -0.1, 0));
      // Ceiling suspension brackets
      [-1.4, 1.4].forEach(bx => {
        parent.add(createBox(0.1, 0.6, 0.3, materials.baseSkid, bx, 0.8, 0));
      });
    }
  }

  // C. DUCTWORK (GALVANIZ, SPIRAL, PASLANMAZ)
  function buildDuctModel(parent, type) {
    if (type === 'spiral-kanal') {
      // Spiromatic spiral round duct with 90° bend fitting & rubber gasket
      const straightTube = createCyl(0.75, 0.75, 4.6, 32, materials.galvSteel, -0.6, 0, 0, 0, Math.PI / 2);
      parent.add(straightTube);
      // Spiral lockseam ridges
      for (let r = -2.0; r <= 1.4; r += 0.5) {
        parent.add(createCyl(0.765, 0.765, 0.03, 32, materials.aluFrame, r, 0, 0, 0, Math.PI / 2));
      }
      // Gasketed collar
      parent.add(createCyl(0.78, 0.78, 0.12, 32, materials.rubberBlack, 1.75, 0, 0, 0, Math.PI / 2));
      // 90° segmented bend branch
      const bend = createCyl(0.74, 0.74, 1.8, 28, materials.galvSteel, 2.4, 0.9, 0);
      parent.add(bend);
      // Suspension clamp
      parent.add(createCyl(0.82, 0.82, 0.08, 32, materials.baseSkid, -0.8, 0, 0, 0, Math.PI / 2));
      parent.add(createCyl(0.02, 0.02, 1.4, 8, materials.baseSkid, -0.8, 1.1, 0));
    } else if (type === 'paslanmaz-kanal') {
      // Heavy-duty AISI 304/316 TIG welded round & rectangular duct
      const sTube = createCyl(0.85, 0.85, 4.8, 32, materials.stainless, 0, 0, 0, 0, Math.PI / 2);
      parent.add(sTube);
      // TIG weld longitudinal line
      parent.add(createBox(4.78, 0.02, 0.03, materials.aluFrame, 0, 0.85, 0));
      // Heavy flat-bar companion angle ring flanges with bolts
      [-2.38, 2.38].forEach(fx => {
        parent.add(createCyl(1.05, 1.05, 0.08, 32, materials.stainless, fx, 0, 0, 0, Math.PI / 2));
        for (let b = 0; b < 8; b++) {
          const ang = (b / 8) * Math.PI * 2;
          parent.add(createBox(0.12, 0.04, 0.04, materials.doorHandle, fx, Math.sin(ang) * 0.95, Math.cos(ang) * 0.95));
        }
      });
      // Inspection cleaning hatch
      parent.add(createCyl(0.35, 0.35, 0.06, 16, materials.stainless, 0, 0, 0.86, Math.PI / 2));
    } else {
      // Galvaniz: Self-flanged rectangular duct with cross-break beads & acoustic lining cutaway
      const ductBox = createBox(4.8, 2.0, 2.4, materials.galvSteel, 0, 0, 0);
      parent.add(ductBox);
      // Self-flanged frame collars on ends
      [-2.42, 2.42].forEach(fx => {
        parent.add(createBox(0.08, 2.16, 2.56, materials.aluFrame, fx, 0, 0));
        // Corner brackets (köşe takozları)
        [-1.04, 1.04].forEach(cy => {
          [-1.24, 1.24].forEach(cz => {
            parent.add(createBox(0.1, 0.16, 0.16, materials.baseSkid, fx, cy, cz));
          });
        });
      });
      // Stiffening cross-break lines (trapez)
      parent.add(createBox(3.6, 0.02, 0.02, materials.aluFrame, 0, 1.01, 0));
      // Cutaway acoustic lining view on front
      const cutawayLining = createBox(2.8, 1.4, 0.08, materials.filterCloth, 0, 0, 1.21);
      parent.add(cutawayLining);
    }
  }

  // D. AIR DISTRIBUTION & DAMPERS (MENFEZ, DIFUZOR, DAMPER)
  function buildAirDistModel(parent, type) {
    if (type === 'menfez') {
      // Double deflection grille with adjustable blades & OBD damper
      const frame = createBox(0.12, 2.4, 3.6, materials.aluFrame, 0, 0, 0);
      parent.add(frame);
      // Front row: horizontal aerofoil blades
      for (let y = -0.95; y <= 0.95; y += 0.22) {
        const blade = createBox(0.08, 0.03, 3.3, materials.damperBlade, 0.03, y, 0);
        blade.rotation.x = 0.25;
        parent.add(blade);
      }
      // Rear row: vertical aerofoil blades
      for (let z = -1.5; z <= 1.5; z += 0.3) {
        const vBlade = createBox(0.08, 2.1, 0.03, materials.damperBlade, -0.04, 0, z);
        vBlade.rotation.y = 0.2;
        parent.add(vBlade);
      }
      // Rear opposed blade volume damper frame
      parent.add(createBox(0.18, 2.1, 3.3, materials.motorCast, -0.16, 0, 0));
    } else if (type === 'difuzor') {
      // Linear Slot Diffuser with insulated plenum box & Swirl Anemostat
      // Plenum box on top
      const plenum = createBox(1.6, 1.4, 3.4, materials.galvSteel, 0, 0.6, 0);
      parent.add(plenum);
      // Circular spigot collar on side
      parent.add(createCyl(0.45, 0.45, 0.35, 24, materials.galvSteel, -0.85, 0.6, 0, 0, Math.PI / 2));
      // 3-slot linear face plate on bottom
      const face = createBox(1.8, 0.06, 3.6, materials.aluFrame, 0, -0.13, 0);
      parent.add(face);
      // Linear black deflector vanes
      [-0.15, 0, 0.15].forEach(sx => {
        parent.add(createBox(0.04, 0.05, 3.3, materials.doorHandle, sx, -0.15, 0));
      });
      // Side Swirl Anemostat display
      const swirlPlate = createBox(1.8, 0.05, 1.8, materials.panelSolid, 0, -1.1, 0);
      parent.add(swirlPlate);
      for (let s = 0; s < 16; s++) {
        const ang = (s / 16) * Math.PI * 2;
        const sVane = createBox(0.04, 0.03, 0.38, materials.doorHandle, Math.sin(ang) * 0.55, -1.07, Math.cos(ang) * 0.55);
        sVane.rotation.y = ang + 0.5;
        parent.add(sVane);
      }
    } else {
      // Fire & Smoke Damper: Galvanized sleeve, opposed blades, Belimo actuator
      const sleeve = createBox(1.4, 2.4, 2.6, materials.galvSteel, 0, 0, 0);
      parent.add(sleeve);
      // Flanges
      [-0.72, 0.72].forEach(fx => {
        parent.add(createBox(0.08, 2.6, 2.8, materials.aluFrame, fx, 0, 0));
      });
      // 4 Interlocking opposed blades
      for (let b = -0.75; b <= 0.75; b += 0.5) {
        const blade = createBox(0.18, 0.04, 2.35, materials.damperBlade, 0, b, 0);
        blade.rotation.z = Math.PI / 5;
        parent.add(blade);
      }
      // Belimo spring-return actuator
      const act = createBox(0.2, 0.32, 0.18, materials.actuatorOrange, 0.1, 0.2, 1.4);
      parent.add(act);
      // Thermal fusible link sensor
      parent.add(createCyl(0.03, 0.03, 0.12, 12, materials.brassGold, -0.2, 0.2, 1.35, Math.PI / 2));
    }
  }

  // E. FILTRATION (FILTRE)
  function buildFilterModel(parent) {
    // Universal filter bank housing holding G4 cassette, F7/F9 pocket, H14 HEPA
    const housing = createBox(4.2, 2.4, 2.4, materials.galvSteel, 0, 0, 0);
    parent.add(housing);
    // Cutaway view on front
    const cutDoor = createBox(3.8, 2.1, 0.04, materials.panelCutaway, 0, 0, 1.21, false, false);
    parent.add(cutDoor);
    dynamicCutawayPanels.push(cutDoor);

    // 1. G4 Pleated Pre-filter (Left)
    const g4Frame = createBox(0.12, 2.0, 2.0, materials.filterCloth, -1.4, 0, 0);
    parent.add(g4Frame);

    // 2. F7/F9 Pocket Bag Filter (Center)
    parent.add(createBox(0.1, 2.0, 2.0, materials.aluFrame, -0.2, 0, 0));
    for (let bi = 0; bi < 4; bi++) {
      const bz = -0.75 + bi * 0.5;
      const bag = new THREE.Mesh(new THREE.ConeGeometry(0.22, 1.1, 4), materials.filterCloth);
      bag.rotateZ(-Math.PI / 2);
      bag.position.set(0.4, 0, bz);
      parent.add(bag);
    }

    // 3. H14 Absolute HEPA Filter (Right)
    const hepaFrame = createBox(0.25, 2.0, 2.0, materials.aluFrame, 1.4, 0, 0);
    const hepaCore = createBox(0.22, 1.9, 1.9, materials.filterCloth, 1.4, 0, 0);
    const hepaGel = createBox(0.26, 2.02, 0.04, materials.coolingFin, 1.4, 0, 1.0);
    parent.add(hepaFrame, hepaCore, hepaGel);

    // Differential pressure gauges
    [-1.0, 0.6].forEach(gx => {
      parent.add(createCyl(0.09, 0.09, 0.04, 16, materials.aluFrame, gx, 0.5, 1.24, Math.PI / 2));
    });
  }

  // F. VRF & SPECIALTIES (VRF-DIS, VRF-IC, DAVLUMBAZ)
  function buildVrfModel(parent, type) {
    if (type === 'vrf-dis') {
      // VRF Outdoor Unit with hollow cabinet & cutaway service door
      parent.add(
        createBox(3.4, 3.6, 0.05, materials.panelSolid, 0, 0, -0.98), // Back panel
        createBox(3.4, 0.05, 2.0, materials.panelSolid, 0, 1.78, 0),  // Roof panel
        createBox(3.4, 0.12, 2.0, materials.baseSkid, 0, -1.74, 0),   // Base frame skid
        createBox(0.05, 3.4, 1.9, materials.coolingFin, -1.68, 0.05, 0), // Left coil
        createBox(0.05, 3.4, 1.9, materials.coolingFin, 1.68, 0.05, 0)   // Right coil
      );
      // Cutaway front door
      const cDoor = createBox(3.28, 3.38, 0.04, materials.panelCutaway, 0, 0.05, 0.99, false, false);
      parent.add(cDoor);
      dynamicCutawayPanels.push(cDoor);
      // Top discharge axial fan with protection grille
      const topRim = createCyl(0.85, 0.85, 0.25, 28, materials.fanHousing, 0, 1.88, 0);
      const topBlades = createCyl(0.75, 0.75, 0.05, 4, materials.fanImpeller, 0, 1.92, 0);
      parent.add(topRim, topBlades);
      animators.push(() => { topBlades.rotation.y += 0.16; });
      // Inverter Scroll Compressors inside
      [-0.6, 0.6].forEach(cx => {
        parent.add(createCyl(0.26, 0.26, 0.9, 16, materials.motorCast, cx, -0.9, -0.2));
      });
      // Accumulator vessel
      parent.add(createCyl(0.22, 0.22, 1.1, 16, materials.motorCast, -1.1, -0.8, 0.2));
      // Heat exchanger blue fin coils along 3 sides
      parent.add(createBox(3.3, 2.8, 0.12, materials.coolingFin, 0, 0.2, -0.9));
      // Brass service valves
      parent.add(createBox(0.25, 0.2, 0.15, materials.brassGold, 1.2, -1.2, 1.05));
    } else if (type === 'vrf-ic') {
      // 4-Way Ceiling Cassette Unit & Slim Ducted
      const cassBody = createBox(2.8, 0.8, 2.8, materials.galvSteel, 0, 0.5, 0);
      const cassFascia = createBox(3.2, 0.08, 3.2, materials.panelSolid, 0, 0.05, 0);
      parent.add(cassBody, cassFascia);
      // 4 motorized discharge louvers
      [
        [0, 1.4, 0], [0, -1.4, 0], [1.4, 0, Math.PI / 2], [-1.4, 0, Math.PI / 2]
      ].forEach(([lx, lz, rot]) => {
        const louver = createBox(1.8, 0.02, 0.14, materials.doorHandle, lx, 0.01, lz);
        louver.rotation.y = rot;
        parent.add(louver);
      });
      // Internal centrifugal turbo fan
      const turboFan = createCyl(0.65, 0.65, 0.35, 20, materials.fanImpeller, 0, 0.5, 0);
      parent.add(turboFan);
      animators.push(() => { turboFan.rotation.y += 0.14; });
      // Condensate drain pump on side
      parent.add(createBox(0.18, 0.22, 0.18, materials.actuatorOrange, 1.3, 0.5, 0.8));
    } else {
      // Davlumbaz: AISI 304 Stainless Steel Kitchen Hood with Ansul Fire Suppression
      const hood = createBox(4.6, 1.8, 2.8, materials.stainless, 0, 0, 0);
      parent.add(hood);
      // Sloped Baffle grease filters underneath
      for (let f = -1.6; f <= 1.6; f += 0.8) {
        const baffle = createBox(0.7, 0.06, 1.6, materials.stainless, f, -0.7, 0.2);
        baffle.rotation.x = -0.3;
        parent.add(baffle);
      }
      // Grease drain cup
      parent.add(createCyl(0.12, 0.09, 0.18, 16, materials.stainless, 2.1, -0.9, 0.8));
      // Ansul Fire Suppression stainless steel piping manifold
      parent.add(createCyl(0.02, 0.02, 4.2, 12, materials.stainless, 0, -0.4, 1.1, 0, Math.PI / 2));
      // 4 Brass spray discharge nozzles aimed downward
      [-1.4, -0.5, 0.5, 1.4].forEach(nx => {
        const noz = createCyl(0.04, 0.025, 0.1, 10, materials.brassGold, nx, -0.48, 1.1);
        parent.add(noz);
      });
      // Manual release pull box on hood corner
      parent.add(createBox(0.14, 0.2, 0.08, materials.actuatorOrange, 2.32, -0.2, 1.2));
    }
  }

  // --- 6. ROUTE PRODUCT ID TO MODEL GENERATOR ---
  if (['tks', 'thks', 'thrv-dx', 'hrv', 'rooftop'].includes(productId)) {
    buildAhuModel(modelRoot, productId);
  } else if (['tdf', 'yangin-fani', 'jet-fan'].includes(productId)) {
    buildFanModel(modelRoot, productId);
  } else if (['galvaniz-kanal', 'spiral-kanal', 'paslanmaz-kanal'].includes(productId)) {
    buildDuctModel(modelRoot, productId);
  } else if (['menfez', 'difuzor', 'damper'].includes(productId)) {
    buildAirDistModel(modelRoot, productId);
  } else if (productId === 'filtre') {
    buildFilterModel(modelRoot);
  } else if (['vrf-dis', 'vrf-ic', 'davlumbaz'].includes(productId)) {
    buildVrfModel(modelRoot, productId);
  } else {
    buildAhuModel(modelRoot, 'tks');
  }

  // --- 7. AERODYNAMIC CFD AIRFLOW SIMULATION ---
  const cfdGroup = new THREE.Group();
  scene.add(cfdGroup);

  const particleCount = 80;
  const particles = [];
  const pPositions = new Float32Array(particleCount * 3);
  const pColors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const isSupply = i < particleCount * 0.65;
    particles.push({
      isSupply,
      progress: Math.random(),
      speed: 0.005 + Math.random() * 0.004,
      offsetY: (Math.random() - 0.5) * 0.6,
      offsetZ: (Math.random() - 0.5) * 1.0
    });
    if (isSupply) {
      pColors[i * 3] = 0.02; pColors[i * 3 + 1] = 0.65; pColors[i * 3 + 2] = 0.98;
    } else {
      pColors[i * 3] = 0.95; pColors[i * 3 + 1] = 0.45; pColors[i * 3 + 2] = 0.12;
    }
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

  // Procedural soft circle glow texture
  const pCanvas = document.createElement('canvas');
  pCanvas.width = 32; pCanvas.height = 32;
  const pCtx = pCanvas.getContext('2d');
  const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
  pGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  pGrad.addColorStop(0.3, 'rgba(2, 132, 199, 0.8)');
  pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  pCtx.fillStyle = pGrad;
  pCtx.fillRect(0, 0, 32, 32);
  const pTex = new THREE.CanvasTexture(pCanvas);

  const pMat = new THREE.PointsMaterial({
    size: 0.15,
    map: pTex,
    transparent: true,
    opacity: 0.8,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const cfdPoints = new THREE.Points(pGeo, pMat);
  cfdGroup.add(cfdPoints);

  animators.push(() => {
    if (!state.cfdEnabled) {
      cfdGroup.visible = false;
      return;
    }
    cfdGroup.visible = true;
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.progress += p.speed;
      if (p.progress > 1.0) p.progress = 0.0;
      pos[i * 3] = -3.5 + p.progress * 7.0;
      pos[i * 3 + 1] = (p.isSupply ? -0.4 : 0.4) + p.offsetY;
      pos[i * 3 + 2] = p.offsetZ;
    }
    pGeo.attributes.position.needsUpdate = true;
  });

  // --- 8. DYNAMIC HOTSPOT PINS GENERATOR ---
  const pinsGroup = new THREE.Group();
  scene.add(pinsGroup);

  function createPinBadgeTexture(numStr) {
    const cvs = document.createElement('canvas');
    cvs.width = 64; cvs.height = 64;
    const c = cvs.getContext('2d');
    c.fillStyle = '#0284c7';
    c.beginPath();
    c.arc(32, 32, 28, 0, Math.PI * 2);
    c.fill();
    c.lineWidth = 4;
    c.strokeStyle = '#ffffff';
    c.stroke();
    c.fillStyle = '#ffffff';
    c.font = 'bold 26px sans-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(numStr, 32, 33);
    const tex = new THREE.CanvasTexture(cvs);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  const rawHotspots = (productData && productData.hotspots && productData.hotspots.length > 0)
    ? productData.hotspots
    : [
        { num: '01', title: 'Gövde & Taşıyıcı Mimarisi', desc: 'Eurovent ve TSE standartlarında yüksek mukavemetli karkas.' },
        { num: '02', title: 'Yüksek Verimli İç Aksam', desc: 'Optimize edilmiş aerodinamik komponentler ve düşük enerji tüketimi.' },
        { num: '03', title: 'Hava Dağıtım & Kontrol', desc: 'Hassas debi kalibrasyonu ve sızdırmaz bağlantı elemanları.' }
      ];

  const pinMeshes = [];
  rawHotspots.forEach((h, idx) => {
    const pinAnchor = new THREE.Group();
    // Calculate spread along model
    const total = rawHotspots.length;
    const px = -2.8 + (idx / Math.max(1, total - 1)) * 5.6;
    const py = (idx % 2 === 0 ? -0.2 : 0.5);
    const pz = 1.35;
    pinAnchor.position.set(px, py, pz);

    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.25, 8),
      new THREE.MeshBasicMaterial({ color: 0x0284c7 })
    );
    stalk.position.y = -0.12;

    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: createPinBadgeTexture(h.num || `0${idx + 1}`),
      depthTest: false
    }));
    sprite.scale.set(0.32, 0.32, 1);
    sprite.position.y = 0.05;
    sprite.userData = { hotspot: h, pos: [px, py, pz] };

    pinAnchor.add(stalk, sprite);
    pinAnchor.userData = { hotspot: h, pos: [px, py, pz] };
    pinsGroup.add(pinAnchor);
    pinMeshes.push(sprite);
  });

  animators.push(() => {
    const t = Date.now() * 0.003;
    const s = 0.32 + Math.sin(t) * 0.025;
    pinMeshes.forEach(p => p.scale.set(s, s, 1));
  });

  // Raycasting for pin clicks
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onPointerClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(pinsGroup.children, true);
    if (intersects.length > 0) {
      let hit = intersects[0].object;
      while (hit.parent && !hit.userData.hotspot) hit = hit.parent;
      if (hit && hit.userData.hotspot) {
        showHotspotCard(hit.userData.hotspot);
        focusCamera(hit.userData.pos);
      }
    }
  }
  renderer.domElement.addEventListener('click', onPointerClick);

  function focusCamera(targetPos) {
    controls.autoRotate = false;
    const offset = new THREE.Vector3(targetPos[0] + 3.0, targetPos[1] + 1.5, targetPos[2] + 4.0);
    const startPos = camera.position.clone();
    const startTarget = controls.target.clone();
    const destTarget = new THREE.Vector3(targetPos[0], targetPos[1], targetPos[2]);
    let progress = 0;
    function step() {
      progress += 0.04;
      if (progress <= 1.0) {
        camera.position.lerpVectors(startPos, offset, progress);
        controls.target.lerpVectors(startTarget, destTarget, progress);
        requestAnimationFrame(step);
      }
    }
    step();
  }

  // --- 9. STATE & FLOATING UI ---
  const state = {
    autoRotate: true,
    cfdEnabled: true,
    isCutaway: true
  };

  function setCutawayMode(transparent) {
    state.isCutaway = transparent;
    dynamicCutawayPanels.forEach(p => {
      p.material = transparent ? materials.panelCutaway : materials.panelSolid;
    });
  }

  function resetCamera() {
    controls.autoRotate = state.autoRotate;
    controls.target.set(0, 0, 0);
    camera.position.set(9.0, 4.2, 7.5);
    hideHotspotCard();
  }

  createFloatingUI(container, {
    productTitle: productData.title,
    state,
    controls,
    setCutawayMode,
    resetCamera,
    onResize
  });

  // --- 10. ANIMATION LOOP & RESIZE ---
  let animId = null;
  function animate() {
    animId = requestAnimationFrame(animate);
    controls.update();
    animators.forEach(fn => fn());
    renderer.render(scene, camera);
  }
  animate();

  function onResize() {
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize);

  return {
    scene,
    camera,
    renderer,
    destroy: () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      while (container.firstChild) container.removeChild(container.firstChild);
    }
  };
}

/**
 * Floating HUD Bar & Hotspot Callout Card
 */
function createFloatingUI(container, actions) {
  if (container.parentElement.querySelector('.sky-3d-hud')) return;

  const hud = document.createElement('div');
  hud.className = 'sky-3d-hud';
  hud.innerHTML = `
    <!-- Top Left Status Badge -->
    <div class="sky-3d-badge-bar">
      <span class="sky-3d-pill">
        <span class="sky-3d-dot live"></span>
        ${actions.productTitle} • 3D CAD İkiz
      </span>
      <span class="sky-3d-pill text-muted">
        360° Çevir • Yakınlaştır • İncele
      </span>
    </div>

    <!-- Top Right Floating Action Controls -->
    <div class="sky-3d-actions-bar">
      <button type="button" id="sky-btn-rotate" class="sky-3d-action-btn active" title="Döndürmeyi Aç/Kapat">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
        <span>Döndür</span>
      </button>

      <button type="button" id="sky-btn-cfd" class="sky-3d-action-btn active" title="Aerodinamik Hava Akışını Göster">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span>Hava Akışı</span>
      </button>

      <button type="button" id="sky-btn-casing" class="sky-3d-action-btn" title="Şeffaf Kesit / Kapalı Gövde">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        <span id="sky-casing-text">Şeffaf Gövde</span>
      </button>

      <button type="button" id="sky-btn-toggle-view" class="sky-3d-action-btn" title="3D Model / 2D Katalog Çizimi Geçişi">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        <span id="sky-view-toggle-text">2D Çizim</span>
      </button>

      <button type="button" id="sky-btn-reset" class="sky-3d-action-btn" title="Görünümü Sıfırla">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
        <span>Sıfırla</span>
      </button>
    </div>

    <!-- Hotspot Callout Card (Floating Bottom Right) -->
    <div id="sky-3d-hotspot-card" class="sky-3d-callout-card" style="display: none;">
      <div class="sky-3d-callout-header">
        <span class="sky-3d-callout-num" id="sky-card-num">01</span>
        <h4 class="sky-3d-callout-title" id="sky-card-title">Bileşen Başlığı</h4>
        <button type="button" class="sky-3d-callout-close" onclick="hideHotspotCard()">&times;</button>
      </div>
      <p class="sky-3d-callout-desc" id="sky-card-desc">Bileşen mühendislik açıklaması.</p>
    </div>
  `;

  container.parentElement.style.position = 'relative';
  container.parentElement.appendChild(hud);

  const btnRotate = hud.querySelector('#sky-btn-rotate');
  btnRotate.addEventListener('click', () => {
    actions.state.autoRotate = !actions.state.autoRotate;
    actions.controls.autoRotate = actions.state.autoRotate;
    btnRotate.classList.toggle('active', actions.state.autoRotate);
  });

  const btnCfd = hud.querySelector('#sky-btn-cfd');
  btnCfd.addEventListener('click', () => {
    actions.state.cfdEnabled = !actions.state.cfdEnabled;
    btnCfd.classList.toggle('active', actions.state.cfdEnabled);
  });

  const btnCasing = hud.querySelector('#sky-btn-casing');
  const casingText = hud.querySelector('#sky-casing-text');
  btnCasing.addEventListener('click', () => {
    actions.state.isCutaway = !actions.state.isCutaway;
    actions.setCutawayMode(actions.state.isCutaway);
    casingText.textContent = actions.state.isCutaway ? 'Şeffaf Gövde' : 'Kapalı Gövde';
    btnCasing.classList.toggle('active', !actions.state.isCutaway);
  });

  const btnToggleView = hud.querySelector('#sky-btn-toggle-view');
  const viewToggleText = hud.querySelector('#sky-view-toggle-text');
  const canvasEl = document.getElementById('sky-product-3d-canvas');
  const view2dEl = document.getElementById('sky-product-2d-view');

  btnToggleView.addEventListener('click', () => {
    if (view2dEl && canvasEl) {
      const isShowing2D = window.getComputedStyle(view2dEl).display !== 'none';
      if (isShowing2D) {
        view2dEl.style.display = 'none';
        canvasEl.style.display = 'block';
        viewToggleText.textContent = '2D Çizim';
        btnToggleView.classList.remove('active');
        if (actions.onResize) actions.onResize();
      } else {
        view2dEl.style.display = 'flex';
        canvasEl.style.display = 'none';
        viewToggleText.textContent = '3D Model';
        btnToggleView.classList.add('active');
      }
    }
  });

  const btnReset = hud.querySelector('#sky-btn-reset');
  btnReset.addEventListener('click', () => {
    actions.resetCamera();
  });
}

window.showHotspotCard = function(hotspot) {
  const card = document.getElementById('sky-3d-hotspot-card');
  if (!card) return;
  document.getElementById('sky-card-num').textContent = hotspot.num || '01';
  document.getElementById('sky-card-title').textContent = hotspot.title || '';
  document.getElementById('sky-card-desc').textContent = hotspot.desc || '';
  card.style.display = 'block';
};

window.hideHotspotCard = function() {
  const card = document.getElementById('sky-3d-hotspot-card');
  if (card) card.style.display = 'none';
};

// Auto-run if container exists on page load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSky3DProduct());
  } else {
    initSky3DProduct();
  }
}

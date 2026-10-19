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

  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(8.5, 4.2, 7.5);

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
  controls.minDistance = 2.0;
  controls.maxDistance = 28.0;
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
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
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

  // --- 4. MATERIAL PALETTE (DoubleSide for hollow ducts/casings) ---
  const materials = {
    aluFrame: new THREE.MeshStandardMaterial({ color: 0xd4d8dd, metalness: 0.8, roughness: 0.25, side: THREE.DoubleSide }),
    galvSteel: new THREE.MeshStandardMaterial({ color: 0xc4cdd5, metalness: 0.65, roughness: 0.45, side: THREE.DoubleSide }),
    stainless: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.15, side: THREE.DoubleSide }),
    baseSkid: new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.75, roughness: 0.35, side: THREE.DoubleSide }),
    panelSolid: new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.15, roughness: 0.35, side: THREE.DoubleSide }),
    panelCutaway: new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.2,
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45,
      depthWrite: false,
      side: THREE.DoubleSide
    }),
    fanHousing: new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.6, roughness: 0.3, side: THREE.DoubleSide }),
    fanImpeller: new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.75, roughness: 0.25, side: THREE.DoubleSide }),
    motorCast: new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.85, roughness: 0.3, side: THREE.DoubleSide }),
    copperPipe: new THREE.MeshStandardMaterial({ color: 0xc2410c, metalness: 0.9, roughness: 0.2, side: THREE.DoubleSide }),
    coolingFin: new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.55, roughness: 0.35, side: THREE.DoubleSide }),
    heatingFin: new THREE.MeshStandardMaterial({ color: 0xf87171, metalness: 0.55, roughness: 0.35, side: THREE.DoubleSide }),
    rotorWheel: new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7, roughness: 0.4, side: THREE.DoubleSide }),
    filterCloth: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.95, metalness: 0.05, side: THREE.DoubleSide }),
    filterG4: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.9, metalness: 0.05, side: THREE.DoubleSide }),
    damperBlade: new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.25, side: THREE.DoubleSide }),
    actuatorOrange: new THREE.MeshStandardMaterial({ color: 0xea580c, metalness: 0.2, roughness: 0.4 }),
    drainPan: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.15, side: THREE.DoubleSide }),
    doorHandle: new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.3 }),
    rubberBlack: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.85, metalness: 0.1, side: THREE.DoubleSide }),
    brassGold: new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.85, roughness: 0.25 }),
    springSilver: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.2 }),
    yellowSafety: new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.2, roughness: 0.4 }),
    gaugeFace: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 }),
    touchscreen: new THREE.MeshBasicMaterial({ color: 0x0284c7 })
  };

  const animators = [];
  const dynamicCutawayPanels = [];
  const modelRoot = new THREE.Group();
  scene.add(modelRoot);

  // Mesh creation helpers
  function createBox(w, h, d, mat, x = 0, y = 0, z = 0, cast = true, receive = true) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  }

  function createCyl(rTop, rBot, height, segs, mat, x = 0, y = 0, z = 0, rotX = 0, rotZ = 0, open = false) {
    const geo = new THREE.CylinderGeometry(rTop, rBot, height, segs, 1, open);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    if (rotX) mesh.rotation.x = rotX;
    if (rotZ) mesh.rotation.z = rotZ;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  function registerCutawayPanel(mesh, solidMat = materials.panelSolid, cutawayMat = materials.panelCutaway) {
    mesh.userData.solidMat = solidMat;
    mesh.userData.cutawayMat = cutawayMat;
    dynamicCutawayPanels.push(mesh);
    return mesh;
  }

  // --- SPECIALIZED DEDICATED MODEL: TKS STANDART KLİMA SANTRALİ (5-MODULE CAD TWIN) ---
  function buildTksDetailedModel(parent) {
    const L = 8.4;
    const H = 2.6;
    const W = 2.0;
    const halfL = L / 2; // 4.2
    const halfH = H / 2; // 1.3
    const halfW = W / 2; // 1.0

    // 1. BASE SKID (Galvanized structural C-channel with forklift pockets and corner lifting brackets)
    const skidH = 0.22;
    const skidY = -halfH - skidH / 2;
    const frontRail = createBox(L + 0.2, skidH, 0.1, materials.baseSkid, 0, skidY, halfW - 0.05);
    const backRail = createBox(L + 0.2, skidH, 0.1, materials.baseSkid, 0, skidY, -halfW + 0.05);
    parent.add(frontRail, backRail);

    // Cross beams tying the base frame together
    const crossX = [-halfL, -2.5, -0.8, 0.8, 2.5, halfL];
    crossX.forEach(cx => {
      parent.add(createBox(0.12, skidH, W - 0.2, materials.baseSkid, cx, skidY, 0));
    });

    // Forklift lifting pockets (rectangular cutouts with reinforcement trim)
    [-2.5, 0.8].forEach(fx => {
      parent.add(createBox(0.28, 0.12, 0.12, materials.aluFrame, fx, skidY, halfW - 0.04));
      parent.add(createBox(0.28, 0.12, 0.12, materials.aluFrame, fx, skidY, -halfW + 0.04));
    });

    // 4 Corner crane lifting lugs
    [[-halfL - 0.05, halfW - 0.02], [-halfL - 0.05, -halfW + 0.02], [halfL + 0.05, halfW - 0.02], [halfL + 0.05, -halfW + 0.02]].forEach(([lx, lz]) => {
      parent.add(createBox(0.08, 0.18, 0.08, materials.yellowSafety, lx, skidY + 0.06, lz));
    });

    // 2. THERMAL-BREAK EXTRUDED ALUMINUM PROFILE FRAMEWORK & CORNER BLOCKS
    const pSize = 0.08;
    // 4 Long horizontal outer edge profiles (top front, top back, bottom front, bottom back)
    parent.add(
      createBox(L, pSize, pSize, materials.aluFrame, 0, -halfH + pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, materials.aluFrame, 0, -halfH + pSize / 2, -halfW + pSize / 2),
      createBox(L, pSize, pSize, materials.aluFrame, 0, halfH - pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, materials.aluFrame, 0, halfH - pSize / 2, -halfW + pSize / 2)
    );

    // 6 Vertical dividing posts along front and back (creating 5 modular bays)
    crossX.forEach(px => {
      parent.add(
        createBox(pSize, H, pSize, materials.aluFrame, px, 0, halfW - pSize / 2),
        createBox(pSize, H, pSize, materials.aluFrame, px, 0, -halfW + pSize / 2),
        // Transverse cross tie beams at top and bottom
        createBox(pSize, pSize, W - pSize * 2, materials.aluFrame, px, halfH - pSize / 2, 0),
        createBox(pSize, pSize, W - pSize * 2, materials.aluFrame, px, -halfH + pSize / 2, 0)
      );
    });

    // Internal horizontal floor dividing upper deck and lower deck in Modules 1, 2, 3
    const midDeckL = 5.0; // from x = -4.2 to +0.8
    const midDeck = createBox(midDeckL, 0.05, W - 0.16, materials.galvSteel, -halfL + midDeckL / 2, 0, 0);
    parent.add(midDeck);

    // 3. SOLID CASING PANELS (Rear wall, floor, end walls)
    // Rear double-skin insulated wall
    parent.add(createBox(L - 0.1, H - 0.1, 0.05, materials.panelSolid, 0, 0, -halfW + 0.04));
    // Floor panel
    parent.add(createBox(L - 0.1, 0.05, W - 0.16, materials.galvSteel, 0, -halfH + 0.03, 0));
    // Right end wall with discharge collar
    parent.add(createBox(0.05, H - 0.1, W - 0.16, materials.panelSolid, halfL - 0.03, 0, 0));
    const dischargeCollar = createBox(0.18, 1.2, 1.2, materials.galvSteel, halfL + 0.09, -0.2, 0);
    parent.add(dischargeCollar);

    // Left end wall with two large rectangular cutout damper penetrations
    parent.add(createBox(0.05, H - 0.1, W - 0.16, materials.panelSolid, -halfL + 0.03, 0, 0));

    // 4. MODULAR ROOF & FRONT DOORS (Togglable via Şeffaf Gövde)
    const modCenters = [
      (-4.2 + -2.5) / 2, // Mod 1: -3.35
      (-2.5 + -0.8) / 2, // Mod 2: -1.65
      (-0.8 + 0.8) / 2,  // Mod 3: 0.0
      (0.8 + 2.5) / 2,   // Mod 4: 1.65
      (2.5 + 4.2) / 2    // Mod 5: 3.35
    ];
    const modWidths = [1.7, 1.7, 1.6, 1.7, 1.7];

    modCenters.forEach((cx, idx) => {
      const mw = modWidths[idx] - 0.08;
      // Roof panel
      const roofPanel = createBox(mw, 0.04, W - 0.16, materials.panelCutaway, cx, halfH - 0.02, 0, false, false);
      parent.add(roofPanel);
      registerCutawayPanel(roofPanel, materials.panelSolid, materials.panelCutaway);

      // Front service door
      const doorPanel = createBox(mw, H - 0.18, 0.03, materials.panelCutaway, cx, 0, halfW - 0.02, false, false);
      parent.add(doorPanel);
      registerCutawayPanel(doorPanel, materials.panelSolid, materials.panelCutaway);

      // Door aluminum perimeter frame
      const frameThick = 0.04;
      parent.add(
        createBox(mw, frameThick, 0.02, materials.aluFrame, cx, (H - 0.18) / 2, halfW),
        createBox(mw, frameThick, 0.02, materials.aluFrame, cx, -(H - 0.18) / 2, halfW),
        createBox(frameThick, H - 0.18, 0.02, materials.aluFrame, cx - mw / 2, 0, halfW),
        createBox(frameThick, H - 0.18, 0.02, materials.aluFrame, cx + mw / 2, 0, halfW)
      );

      // Heavy-duty black compression turn handles (2 per door)
      [-0.45, 0.45].forEach(hy => {
        parent.add(createBox(0.04, 0.14, 0.05, materials.doorHandle, cx + mw / 2 - 0.1, hy, halfW + 0.02));
      });
      // Cast hinges on the left edge (2 per door)
      [-0.55, 0.55].forEach(hy => {
        parent.add(createBox(0.03, 0.1, 0.03, materials.aluFrame, cx - mw / 2 + 0.04, hy, halfW + 0.01));
      });
    });

    // Circular inspection portholes on Door 1 (upper fan), Door 3 (rotary wheel), Door 5 (supply fan)
    [[-3.35, 0.55], [0.0, 0.2], [3.35, -0.45]].forEach(([px, py]) => {
      const portBezel = createCyl(0.14, 0.14, 0.04, 24, materials.aluFrame, px, py, halfW, Math.PI / 2);
      const portGlass = createCyl(0.11, 0.11, 0.045, 20, materials.panelCutaway, px, py, halfW, Math.PI / 2);
      parent.add(portBezel, portGlass);
    });

    // Magnehelic differential pressure gauges on Door 2 (Filter) and Door 5 (Supply Fan)
    [[-1.65, 0.1], [3.35, 0.35]].forEach(([gx, gy]) => {
      const gaugeRing = createCyl(0.08, 0.08, 0.03, 20, materials.aluFrame, gx, gy, halfW + 0.015, Math.PI / 2);
      const gaugeFace = createCyl(0.07, 0.07, 0.035, 20, materials.gaugeFace, gx, gy, halfW + 0.015, Math.PI / 2);
      parent.add(gaugeRing, gaugeFace);
      // Dual clear silicone tubing running from gauge into plenum
      parent.add(createCyl(0.008, 0.008, 0.22, 8, materials.panelCutaway, gx - 0.03, gy - 0.12, halfW + 0.01));
      parent.add(createCyl(0.008, 0.008, 0.22, 8, materials.panelCutaway, gx + 0.03, gy - 0.12, halfW + 0.01));
    });

    // Front DDC PLC Control Cabinet on Door 5 (Supply Fan)
    const plcW = 0.48, plcH = 0.68, plcD = 0.18;
    const plcBox = createBox(plcW, plcH, plcD, materials.galvSteel, 2.75, 0.45, halfW + plcD / 2);
    // Graphic touchscreen
    const plcScreen = createBox(0.24, 0.16, 0.01, materials.touchscreen, 2.75, 0.56, halfW + plcD + 0.005);
    // 3 pilot LEDs (Green, Yellow, Red)
    const ledG = createCyl(0.014, 0.014, 0.02, 10, materials.coolingFin, 2.65, 0.42, halfW + plcD + 0.01, Math.PI / 2);
    const ledY = createCyl(0.014, 0.014, 0.02, 10, materials.yellowSafety, 2.75, 0.42, halfW + plcD + 0.01, Math.PI / 2);
    const ledR = createCyl(0.014, 0.014, 0.02, 10, materials.heatingFin, 2.85, 0.42, halfW + plcD + 0.01, Math.PI / 2);
    // Rotary main disconnect switch (red knob on yellow plate)
    const isolatorPlate = createBox(0.08, 0.08, 0.01, materials.yellowSafety, 2.75, 0.3, halfW + plcD + 0.005);
    const isolatorKnob = createBox(0.04, 0.06, 0.03, materials.heatingFin, 2.75, 0.3, halfW + plcD + 0.02);
    parent.add(plcBox, plcScreen, ledG, ledY, ledR, isolatorPlate, isolatorKnob);

    // --- MODULE 1 INTERNALS: DAMPERS, G4 FILTER & UPPER EXHAUST FAN ---
    // Lower Fresh Air Intake Damper
    const lowerDamperY = -halfH / 2 - 0.05;
    const damperW = W - 0.35, damperH = 0.85;
    const lowerDamperFrame = createBox(0.12, damperH, damperW, materials.aluFrame, -halfL - 0.06, lowerDamperY, 0);
    parent.add(lowerDamperFrame);
    // 5 Aerofoil damper blades
    for (let b = 0; b < 5; b++) {
      const by = lowerDamperY - damperH / 2 + 0.1 + b * ((damperH - 0.2) / 4);
      const blade = createBox(0.08, 0.015, damperW - 0.06, materials.damperBlade, -halfL - 0.06, by, 0);
      blade.rotation.z = 0.55;
      parent.add(blade);
    }
    // Belimo orange actuator motor on lower damper
    const belimo1 = createBox(0.16, 0.2, 0.14, materials.actuatorOrange, -halfL - 0.06, lowerDamperY, halfW + 0.06);
    parent.add(belimo1);

    // G4 Pleated pre-filter bank inside lower plenum
    const g4Bank = createBox(0.1, halfH - 0.35, W - 0.35, materials.aluFrame, -3.7, lowerDamperY, 0);
    const g4Media = createBox(0.08, halfH - 0.4, W - 0.4, materials.filterG4, -3.7, lowerDamperY, 0);
    parent.add(g4Bank, g4Media);

    // Upper Exhaust Damper
    const upperDamperY = halfH / 2 - 0.05;
    const upperDamperFrame = createBox(0.12, damperH, damperW, materials.aluFrame, -halfL - 0.06, upperDamperY, 0);
    parent.add(upperDamperFrame);
    for (let b = 0; b < 5; b++) {
      const by = upperDamperY - damperH / 2 + 0.1 + b * ((damperH - 0.2) / 4);
      const blade = createBox(0.08, 0.015, damperW - 0.06, materials.damperBlade, -halfL - 0.06, by, 0);
      blade.rotation.z = -0.55;
      parent.add(blade);
    }
    const belimo2 = createBox(0.16, 0.2, 0.14, materials.actuatorOrange, -halfL - 0.06, upperDamperY, halfW + 0.06);
    parent.add(belimo2);

    // Upper Deck Return/Exhaust Plug Fan
    const exFanGroup = new THREE.Group();
    exFanGroup.position.set(-2.85, upperDamperY, 0);
    parent.add(exFanGroup);
    // Suction cone / bellmouth
    const exBell = createCyl(0.38, 0.3, 0.12, 24, materials.aluFrame, 0.2, 0, 0, 0, Math.PI / 2);
    // Rotating impeller
    const exImpeller = createCyl(0.42, 0.42, 0.28, 20, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
    exFanGroup.add(exBell, exImpeller);
    // Fan motor
    const exMotor = createCyl(0.18, 0.18, 0.34, 16, materials.motorCast, -0.32, 0, 0, 0, Math.PI / 2);
    exFanGroup.add(exMotor);
    // Yellow wire safety cage around suction
    const exGuard = createCyl(0.46, 0.46, 0.1, 16, materials.yellowSafety, 0.28, 0, 0, 0, Math.PI / 2, true);
    exFanGroup.add(exGuard);
    animators.push(() => { exImpeller.rotation.x += 0.14; });

    // --- MODULE 2 INTERNALS: FINE FILTRATION (F7/F9 BAG FILTERS) ---
    // Aluminum grid header frame
    const f7Frame = createBox(0.1, halfH - 0.35, W - 0.35, materials.aluFrame, -2.4, lowerDamperY, 0);
    parent.add(f7Frame);
    // 6 deep tapered synthetic pocket bags extending horizontally downstream
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        const bagY = lowerDamperY - 0.22 + row * 0.44;
        const bagZ = -halfW + 0.35 + col * ((W - 0.7) / 2);
        // Tapered pocket cone pointing in +X direction
        const bagGeo = new THREE.ConeGeometry(0.18, 0.85, 4);
        const bagMesh = new THREE.Mesh(bagGeo, materials.filterCloth);
        bagMesh.position.set(-1.9, bagY, bagZ);
        bagMesh.rotation.z = -Math.PI / 2;
        bagMesh.scale.set(0.9, 1.2, 0.7);
        parent.add(bagMesh);
      }
    }

    // --- MODULE 3 INTERNALS: ROTARY HEAT RECOVERY WHEEL ---
    const wheelAssembly = new THREE.Group();
    wheelAssembly.position.set(0, 0, 0);
    parent.add(wheelAssembly);

    // Outer wheel casing & perimeter seals
    const wheelCasing = createBox(0.38, H - 0.2, W - 0.2, materials.aluFrame, 0, 0, 0);
    parent.add(wheelCasing);

    // Rotating wheel drum
    const wheelRim = createCyl(1.12, 1.12, 0.32, 36, materials.aluFrame, 0, 0, 0, 0, Math.PI / 2);
    const wheelCore = createCyl(1.08, 1.08, 0.3, 32, materials.rotorWheel, 0, 0, 0, 0, Math.PI / 2);
    wheelAssembly.add(wheelRim, wheelCore);

    // 12 Radial aluminum spoke ribs
    for (let s = 0; s < 12; s++) {
      const ang = (s / 12) * Math.PI * 2;
      const spoke = createBox(0.025, 2.12, 0.02, materials.aluFrame, 0, 0, 0);
      spoke.rotation.x = ang;
      wheelAssembly.add(spoke);
    }
    // Drive pulley and gearmotor on top corner
    const driveMotor = createCyl(0.09, 0.09, 0.22, 12, materials.motorCast, 0.22, 1.05, 0.75, 0, Math.PI / 2);
    const driveBelt = createCyl(0.02, 0.02, 0.3, 8, materials.doorHandle, 0.22, 0.95, 0.75);
    parent.add(driveMotor, driveBelt);
    animators.push(() => { wheelAssembly.rotation.x += 0.01; });

    // --- MODULE 4 INTERNALS: THERMAL CONDITIONING (COILS, ELIMINATOR, DRAIN PAN) ---
    // 1. Chilled Water Cooling Coil
    const coilW = W - 0.35, coilH = halfH - 0.35;
    const coolCoilFin = createBox(0.24, coilH, coilW, materials.coolingFin, 1.15, lowerDamperY, 0);
    parent.add(coolCoilFin);

    // Copper supply/return vertical distribution headers with valves
    [-0.5, 0.5].forEach(hz => {
      const coolHeader = createCyl(0.045, 0.045, coilH + 0.1, 14, materials.copperPipe, 1.15, lowerDamperY, hz);
      parent.add(coolHeader);
    });

    // 16 Real copper U-bend return hairpin loops visible on the front face!
    for (let ui = 0; ui < 8; ui++) {
      const uy = lowerDamperY - coilH / 2 + 0.1 + ui * ((coilH - 0.2) / 7);
      const ubend = new THREE.Mesh(
        new THREE.TorusGeometry(0.032, 0.012, 8, 12, Math.PI),
        materials.copperPipe
      );
      ubend.position.set(1.15, uy, halfW - 0.18);
      ubend.rotation.y = Math.PI / 2;
      ubend.rotation.x = Math.PI / 2;
      parent.add(ubend);
    }

    // 2. Condensate Drain Pan (AISI 304 Stainless steel with sloped floor)
    const pan = createBox(1.3, 0.09, coilW + 0.1, materials.drainPan, 1.5, -halfH + 0.1, 0);
    parent.add(pan);
    // Drain siphon / P-trap pipe
    const drainStub = createCyl(0.02, 0.02, 0.18, 10, materials.stainless, 1.8, -halfH + 0.06, halfW - 0.05, 0, 0);
    parent.add(drainStub);

    // 3. Droplet Eliminator (Mist Eliminator) with vertical wave louvers
    const elimFin = createBox(0.12, coilH, coilW, materials.aluFrame, 1.45, lowerDamperY, 0);
    parent.add(elimFin);
    for (let el = 0; el < 12; el++) {
      const ez = -halfW + 0.3 + el * ((coilW - 0.2) / 11);
      const blade = createBox(0.08, coilH - 0.05, 0.012, materials.aluFrame, 1.45, lowerDamperY, ez);
      blade.rotation.y = 0.35;
      parent.add(blade);
    }

    // 4. Hot Water Heating Coil
    const heatCoilFin = createBox(0.18, coilH, coilW, materials.heatingFin, 1.85, lowerDamperY, 0);
    parent.add(heatCoilFin);
    // Red painted supply/return pipe stubs
    [-0.4, 0.4].forEach(hz => {
      const heatHeader = createCyl(0.04, 0.04, coilH + 0.1, 14, materials.copperPipe, 1.85, lowerDamperY, hz);
      parent.add(heatHeader);
    });

    // --- MODULE 5 INTERNALS: DIRECT-DRIVE EC PLUG FAN & SILENCER ---
    const fanAssembly = new THREE.Group();
    fanAssembly.position.set(2.85, lowerDamperY, 0);
    parent.add(fanAssembly);

    // Spun aluminum aerodynamic inlet bellmouth (suction nozzle)
    const bellmouth = createCyl(0.48, 0.38, 0.18, 28, materials.aluFrame, -0.4, 0, 0, 0, Math.PI / 2);
    // Piezometer ring for airflow measurement
    const piezoRing = createCyl(0.44, 0.44, 0.03, 24, materials.copperPipe, -0.38, 0, 0, 0, Math.PI / 2, true);
    fanAssembly.add(bellmouth, piezoRing);

    // Direct-drive backward curved EC plug fan impeller (rotating in render loop)
    const plugImpeller = createCyl(0.52, 0.52, 0.36, 24, materials.fanHousing, -0.05, 0, 0, 0, Math.PI / 2);
    const centerSpinner = createCyl(0.14, 0.05, 0.16, 16, materials.aluFrame, -0.25, 0, 0, 0, Math.PI / 2);
    fanAssembly.add(plugImpeller, centerSpinner);
    animators.push(() => { plugImpeller.rotation.x += 0.15; });

    // Cast iron IE4 electric motor with cooling ribs
    const fanMotor = createCyl(0.24, 0.24, 0.45, 18, materials.motorCast, 0.32, 0, 0, 0, Math.PI / 2);
    const termBox = createBox(0.14, 0.12, 0.14, materials.motorCast, 0.32, 0.26, 0);
    fanAssembly.add(fanMotor, termBox);

    // Fan rigid base frame
    const fanBase = createBox(1.1, 0.08, 0.8, materials.baseSkid, 0.05, -coilH / 2 + 0.08, 0);
    fanAssembly.add(fanBase);

    // 4 Corner heavy-duty open helical steel spring vibration isolators
    [[-0.4, -0.3], [-0.4, 0.3], [0.4, -0.3], [0.4, 0.3]].forEach(([sx, sz]) => {
      const springBase = createBox(0.12, 0.03, 0.12, materials.motorCast, sx, -coilH / 2 + 0.02, sz);
      const springCoil = createCyl(0.04, 0.04, 0.12, 10, materials.springSilver, sx, -coilH / 2 + 0.08, sz);
      fanAssembly.add(springBase, springCoil);
    });

    // Flexible duct connector sleeve (canvas collar)
    const flexCollar = createBox(0.1, coilH, coilW, materials.rubberBlack, 2.35, lowerDamperY, 0);
    parent.add(flexCollar);

    // Yellow safety guard handrail in fan section
    const rail1 = createBox(1.2, 0.03, 0.03, materials.yellowSafety, 2.9, lowerDamperY + 0.4, halfW - 0.25);
    const rail2 = createBox(1.2, 0.03, 0.03, materials.yellowSafety, 2.9, lowerDamperY, halfW - 0.25);
    parent.add(rail1, rail2);

    // Acoustic Sound Attenuator Splitters on discharge
    for (let si = -1; si <= 1; si++) {
      const sz = si * 0.45;
      const pod = createBox(0.65, coilH - 0.1, 0.22, materials.galvSteel, 3.8, lowerDamperY, sz);
      const nose = createCyl(0.11, 0.11, coilH - 0.1, 16, materials.aluFrame, 3.47, lowerDamperY, sz);
      parent.add(pod, nose);
    }
  }

  // --- SPECIALIZED DEDICATED MODEL: THKS HİJYENİK KLİMA SANTRALİ (DIN 1946-4 CLEANROOM TWIN) ---
  function buildThksDetailedModel(parent) {
    const L = 8.6;
    const H = 2.6;
    const W = 2.0;
    const halfL = L / 2; // 4.3
    const halfH = H / 2; // 1.3
    const halfW = W / 2; // 1.0

    // 1. BASE SKID (Galvanized structural C-channel with forklift slots and yellow crane lifting brackets)
    const skidH = 0.22;
    const skidY = -halfH - skidH / 2;
    const frontRail = createBox(L + 0.2, skidH, 0.1, materials.baseSkid, 0, skidY, halfW - 0.05);
    const backRail = createBox(L + 0.2, skidH, 0.1, materials.baseSkid, 0, skidY, -halfW + 0.05);
    parent.add(frontRail, backRail);

    const crossX = [-halfL, -2.6, -0.9, 0.8, 2.6, halfL];
    crossX.forEach(cx => {
      parent.add(createBox(0.12, skidH, W - 0.2, materials.baseSkid, cx, skidY, 0));
    });

    // Forklift lifting pockets
    [-2.6, 0.8].forEach(fx => {
      parent.add(createBox(0.28, 0.12, 0.12, materials.stainless, fx, skidY, halfW - 0.04));
      parent.add(createBox(0.28, 0.12, 0.12, materials.stainless, fx, skidY, -halfW + 0.04));
    });

    // 4 Corner crane lifting lugs
    [[-halfL - 0.05, halfW - 0.02], [-halfL - 0.05, -halfW + 0.02], [halfL + 0.05, halfW - 0.02], [halfL + 0.05, -halfW + 0.02]].forEach(([lx, lz]) => {
      parent.add(createBox(0.08, 0.18, 0.08, materials.yellowSafety, lx, skidY + 0.06, lz));
    });

    // 2. THERMAL-BREAK EXTRUDED STAINLESS / ANODIZED FRAMEWORK
    const pSize = 0.08;
    parent.add(
      createBox(L, pSize, pSize, materials.stainless, 0, -halfH + pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, materials.stainless, 0, -halfH + pSize / 2, -halfW + pSize / 2),
      createBox(L, pSize, pSize, materials.stainless, 0, halfH - pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, materials.stainless, 0, halfH - pSize / 2, -halfW + pSize / 2)
    );

    crossX.forEach(px => {
      parent.add(
        createBox(pSize, H, pSize, materials.stainless, px, 0, halfW - pSize / 2),
        createBox(pSize, H, pSize, materials.stainless, px, 0, -halfW + pSize / 2),
        createBox(pSize, pSize, W - pSize * 2, materials.stainless, px, halfH - pSize / 2, 0),
        createBox(pSize, pSize, W - pSize * 2, materials.stainless, px, -halfH + pSize / 2, 0)
      );
    });

    // 3. SEAMLESS AISI 304 STAINLESS STEEL INTERIOR LINING & COVED CORNER PROFILES
    const midDeckL = 5.1; // x = -4.3 to 0.8
    const midDeck = createBox(midDeckL, 0.05, W - 0.16, materials.stainless, -halfL + midDeckL / 2, 0, 0);
    parent.add(midDeck);

    // Rear wall (outer solid panel + inner stainless sheet)
    parent.add(createBox(L - 0.1, H - 0.1, 0.04, materials.panelSolid, 0, 0, -halfW + 0.03));
    parent.add(createBox(L - 0.12, H - 0.12, 0.01, materials.stainless, 0, 0, -halfW + 0.055));

    // Floor panel (gleaming stainless steel AISI 304)
    parent.add(createBox(L - 0.1, 0.05, W - 0.16, materials.stainless, 0, -halfH + 0.03, 0));

    // Coved corner radius profiles (R20 coved hygiene corners) along floor-wall intersections
    const coveBack = createCyl(0.04, 0.04, L - 0.2, 12, materials.stainless, 0, -halfH + 0.07, -halfW + 0.07, 0, Math.PI / 2);
    parent.add(coveBack);

    // Right discharge end wall with flanged stainless collar
    parent.add(createBox(0.05, H - 0.1, W - 0.16, materials.panelSolid, halfL - 0.03, 0, 0));
    const dischargeCollar = createBox(0.18, 1.2, 1.2, materials.stainless, halfL + 0.09, -0.2, 0);
    parent.add(dischargeCollar);

    // Left end wall with two damper cutouts
    parent.add(createBox(0.05, H - 0.1, W - 0.16, materials.panelSolid, -halfL + 0.03, 0, 0));

    // 4. MODULAR ROOF & FRONT SERVICE DOORS (Togglable via Şeffaf Gövde)
    const modCenters = [
      (-4.3 + -2.6) / 2, // Mod 1: -3.45
      (-2.6 + -0.9) / 2, // Mod 2: -1.75
      (-0.9 + 0.8) / 2,  // Mod 3: -0.05
      (0.8 + 2.6) / 2,   // Mod 4: 1.70
      (2.6 + 4.3) / 2    // Mod 5: 3.45
    ];
    const modWidths = [1.7, 1.7, 1.7, 1.8, 1.7];

    modCenters.forEach((cx, idx) => {
      const mw = modWidths[idx] - 0.08;
      // Roof panel
      const roofPanel = createBox(mw, 0.04, W - 0.16, materials.panelCutaway, cx, halfH - 0.02, 0, false, false);
      parent.add(roofPanel);
      registerCutawayPanel(roofPanel, materials.panelSolid, materials.panelCutaway);

      // Front service door
      const doorPanel = createBox(mw, H - 0.18, 0.03, materials.panelCutaway, cx, 0, halfW - 0.02, false, false);
      parent.add(doorPanel);
      registerCutawayPanel(doorPanel, materials.panelSolid, materials.panelCutaway);

      // Stainless perimeter door frame
      const frameThick = 0.04;
      parent.add(
        createBox(mw, frameThick, 0.02, materials.stainless, cx, (H - 0.18) / 2, halfW),
        createBox(mw, frameThick, 0.02, materials.stainless, cx, -(H - 0.18) / 2, halfW),
        createBox(frameThick, H - 0.18, 0.02, materials.stainless, cx - mw / 2, 0, halfW),
        createBox(frameThick, H - 0.18, 0.02, materials.stainless, cx + mw / 2, 0, halfW)
      );

      // Heavy-duty black compression turn handles with keylocks
      [-0.45, 0.45].forEach(hy => {
        parent.add(createBox(0.04, 0.14, 0.05, materials.doorHandle, cx + mw / 2 - 0.1, hy, halfW + 0.02));
      });
      // Stainless steel heavy-duty hinges
      [-0.55, 0.55].forEach(hy => {
        parent.add(createBox(0.03, 0.1, 0.03, materials.stainless, cx - mw / 2 + 0.04, hy, halfW + 0.01));
      });
    });

    // Circular inspection portholes on Door 1 (upper fan), Door 3 (heat recovery), Door 5 (supply fan)
    [[-3.45, 0.55], [-0.05, 0.2], [3.45, -0.45]].forEach(([px, py]) => {
      const portBezel = createCyl(0.14, 0.14, 0.04, 24, materials.stainless, px, py, halfW, Math.PI / 2);
      const portGlass = createCyl(0.11, 0.11, 0.045, 20, materials.panelCutaway, px, py, halfW, Math.PI / 2);
      parent.add(portBezel, portGlass);
    });

    // Magnehelic differential pressure gauges on Door 2 (Pre/Fine Filters) and Door 5 (HEPA Filter & Fan)
    [[-1.75, 0.1], [3.45, 0.35]].forEach(([gx, gy]) => {
      const gaugeRing = createCyl(0.08, 0.08, 0.03, 20, materials.stainless, gx, gy, halfW + 0.015, Math.PI / 2);
      const gaugeFace = createCyl(0.07, 0.07, 0.035, 20, materials.gaugeFace, gx, gy, halfW + 0.015, Math.PI / 2);
      parent.add(gaugeRing, gaugeFace);
      parent.add(createCyl(0.008, 0.008, 0.22, 8, materials.panelCutaway, gx - 0.03, gy - 0.12, halfW + 0.01));
      parent.add(createCyl(0.008, 0.008, 0.22, 8, materials.panelCutaway, gx + 0.03, gy - 0.12, halfW + 0.01));
    });

    // Front DDC PLC Control Cabinet on Door 5 (Hygienic Control)
    const plcW = 0.48, plcH = 0.68, plcD = 0.18;
    const plcBox = createBox(plcW, plcH, plcD, materials.stainless, 2.85, 0.45, halfW + plcD / 2);
    const plcScreen = createBox(0.24, 0.16, 0.01, materials.touchscreen, 2.85, 0.56, halfW + plcD + 0.005);
    const ledG = createCyl(0.014, 0.014, 0.02, 10, materials.coolingFin, 2.75, 0.42, halfW + plcD + 0.01, Math.PI / 2);
    const ledY = createCyl(0.014, 0.014, 0.02, 10, materials.yellowSafety, 2.85, 0.42, halfW + plcD + 0.01, Math.PI / 2);
    const ledR = createCyl(0.014, 0.014, 0.02, 10, materials.heatingFin, 2.95, 0.42, halfW + plcD + 0.01, Math.PI / 2);
    const isolatorPlate = createBox(0.08, 0.08, 0.01, materials.yellowSafety, 2.85, 0.3, halfW + plcD + 0.005);
    const isolatorKnob = createBox(0.04, 0.06, 0.03, materials.heatingFin, 2.85, 0.3, halfW + plcD + 0.02);
    parent.add(plcBox, plcScreen, ledG, ledY, ledR, isolatorPlate, isolatorKnob);

    // --- MODULE 1 INTERNALS: DAMPERS, G4 FILTER & UPPER EXHAUST FAN ---
    const lowerDamperY = -halfH / 2 - 0.05;
    const damperW = W - 0.35, damperH = 0.85;
    const lowerDamperFrame = createBox(0.12, damperH, damperW, materials.stainless, -halfL - 0.06, lowerDamperY, 0);
    parent.add(lowerDamperFrame);
    for (let b = 0; b < 5; b++) {
      const by = lowerDamperY - damperH / 2 + 0.1 + b * ((damperH - 0.2) / 4);
      const blade = createBox(0.08, 0.015, damperW - 0.06, materials.damperBlade, -halfL - 0.06, by, 0);
      blade.rotation.z = 0.55;
      parent.add(blade);
    }
    const belimo1 = createBox(0.16, 0.2, 0.14, materials.actuatorOrange, -halfL - 0.06, lowerDamperY, halfW + 0.06);
    parent.add(belimo1);

    // G4 synthetic pleated panel pre-filter bank in stainless frame
    const g4Bank = createBox(0.1, halfH - 0.35, W - 0.35, materials.stainless, -3.8, lowerDamperY, 0);
    const g4Media = createBox(0.08, halfH - 0.4, W - 0.4, materials.filterG4, -3.8, lowerDamperY, 0);
    parent.add(g4Bank, g4Media);

    // Upper Exhaust Damper
    const upperDamperY = halfH / 2 - 0.05;
    const upperDamperFrame = createBox(0.12, damperH, damperW, materials.stainless, -halfL - 0.06, upperDamperY, 0);
    parent.add(upperDamperFrame);
    for (let b = 0; b < 5; b++) {
      const by = upperDamperY - damperH / 2 + 0.1 + b * ((damperH - 0.2) / 4);
      const blade = createBox(0.08, 0.015, damperW - 0.06, materials.damperBlade, -halfL - 0.06, by, 0);
      blade.rotation.z = -0.55;
      parent.add(blade);
    }
    const belimo2 = createBox(0.16, 0.2, 0.14, materials.actuatorOrange, -halfL - 0.06, upperDamperY, halfW + 0.06);
    parent.add(belimo2);

    // Upper Return/Exhaust Plug Fan
    const exFanGroup = new THREE.Group();
    exFanGroup.position.set(-2.95, upperDamperY, 0);
    parent.add(exFanGroup);
    const exBell = createCyl(0.38, 0.3, 0.12, 24, materials.stainless, 0.2, 0, 0, 0, Math.PI / 2);
    const exImpeller = createCyl(0.42, 0.42, 0.28, 20, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
    exFanGroup.add(exBell, exImpeller);
    const exMotor = createCyl(0.18, 0.18, 0.34, 16, materials.motorCast, -0.32, 0, 0, 0, Math.PI / 2);
    exFanGroup.add(exMotor);
    const exGuard = createCyl(0.46, 0.46, 0.1, 16, materials.yellowSafety, 0.28, 0, 0, 0, Math.PI / 2, true);
    exFanGroup.add(exGuard);
    animators.push(() => { exImpeller.rotation.x += 0.14; });

    // --- MODULE 2 INTERNALS: FINE FILTRATION (F7/F9 POCKET BAG FILTER) ---
    const f7Frame = createBox(0.1, halfH - 0.35, W - 0.35, materials.stainless, -2.5, lowerDamperY, 0);
    parent.add(f7Frame);
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        const bagY = lowerDamperY - 0.22 + row * 0.44;
        const bagZ = -halfW + 0.35 + col * ((W - 0.7) / 2);
        const bagGeo = new THREE.ConeGeometry(0.18, 0.85, 4);
        const bagMesh = new THREE.Mesh(bagGeo, materials.filterCloth);
        bagMesh.position.set(-2.0, bagY, bagZ);
        bagMesh.rotation.z = -Math.PI / 2;
        bagMesh.scale.set(0.9, 1.2, 0.7);
        parent.add(bagMesh);
      }
    }

    // --- MODULE 3 INTERNALS: HEAT RECOVERY & RUN-AROUND / PLATE EXCHANGER ---
    const plateCore = createBox(1.5, 1.4, W - 0.35, materials.stainless, -0.05, 0, 0);
    plateCore.rotation.z = Math.PI / 4;
    parent.add(plateCore);
    const diagBaffle = createBox(2.2, 0.04, W - 0.3, materials.stainless, -0.05, 0, 0);
    diagBaffle.rotation.z = -Math.PI / 4;
    parent.add(diagBaffle);

    // --- MODULE 4 INTERNALS: UV-C STERILIZATION & COILS & PASLANMAZ DRAIN PAN ---
    const coilW = W - 0.35, coilH = halfH - 0.35;

    // 1. GERMICIDAL UV-C LAMP ARRAY (Quartz tubes emitting soft sterilizing glow)
    for (let u = 0; u < 3; u++) {
      const uy = lowerDamperY - 0.25 + u * 0.25;
      const uvTube = createCyl(0.02, 0.02, coilW - 0.1, 12, materials.coolingFin, 0.95, uy, 0, Math.PI / 2);
      parent.add(uvTube);
      parent.add(createBox(0.04, 0.04, 0.04, materials.stainless, 0.95, uy, halfW - 0.2));
      parent.add(createBox(0.04, 0.04, 0.04, materials.stainless, 0.95, uy, -halfW + 0.2));
    }

    // 2. Chilled Water Cooling Coil
    const coolCoilFin = createBox(0.24, coilH, coilW, materials.coolingFin, 1.25, lowerDamperY, 0);
    parent.add(coolCoilFin);

    [-0.5, 0.5].forEach(hz => {
      const coolHeader = createCyl(0.045, 0.045, coilH + 0.1, 14, materials.copperPipe, 1.25, lowerDamperY, hz);
      parent.add(coolHeader);
    });

    // 16 Copper U-bend hairpins on front face
    for (let ui = 0; ui < 8; ui++) {
      const uy = lowerDamperY - coilH / 2 + 0.1 + ui * ((coilH - 0.2) / 7);
      const ubend = new THREE.Mesh(
        new THREE.TorusGeometry(0.032, 0.012, 8, 12, Math.PI),
        materials.copperPipe
      );
      ubend.position.set(1.25, uy, halfW - 0.18);
      ubend.rotation.y = Math.PI / 2;
      ubend.rotation.x = Math.PI / 2;
      parent.add(ubend);
    }

    // 3. AISI 304 Stainless Steel Dual-Slope Condensate Drain Pan
    const pan = createBox(1.3, 0.09, coilW + 0.1, materials.stainless, 1.6, -halfH + 0.1, 0);
    parent.add(pan);
    const drainStub = createCyl(0.025, 0.025, 0.2, 12, materials.stainless, 1.9, -halfH + 0.06, halfW - 0.05);
    parent.add(drainStub);

    // 4. Wave-Profile Stainless Droplet Eliminator
    const elimFin = createBox(0.12, coilH, coilW, materials.stainless, 1.55, lowerDamperY, 0);
    parent.add(elimFin);
    for (let el = 0; el < 12; el++) {
      const ez = -halfW + 0.3 + el * ((coilW - 0.2) / 11);
      const blade = createBox(0.08, coilH - 0.05, 0.012, materials.stainless, 1.55, lowerDamperY, ez);
      blade.rotation.y = 0.35;
      parent.add(blade);
    }

    // 5. Hot Water Heating Coil
    const heatCoilFin = createBox(0.18, coilH, coilW, materials.heatingFin, 1.95, lowerDamperY, 0);
    parent.add(heatCoilFin);
    [-0.4, 0.4].forEach(hz => {
      const heatHeader = createCyl(0.04, 0.04, coilH + 0.1, 14, materials.copperPipe, 1.95, lowerDamperY, hz);
      parent.add(heatHeader);
    });

    // --- MODULE 5 INTERNALS: DIRECT-DRIVE EC PLUG FAN & TERMINAL H14 HEPA FILTER ---
    const fanAssembly = new THREE.Group();
    fanAssembly.position.set(2.85, lowerDamperY, 0);
    parent.add(fanAssembly);

    const bellmouth = createCyl(0.48, 0.38, 0.18, 28, materials.stainless, -0.4, 0, 0, 0, Math.PI / 2);
    const piezoRing = createCyl(0.44, 0.44, 0.03, 24, materials.copperPipe, -0.38, 0, 0, 0, Math.PI / 2, true);
    fanAssembly.add(bellmouth, piezoRing);

    const plugImpeller = createCyl(0.52, 0.52, 0.36, 24, materials.fanHousing, -0.05, 0, 0, 0, Math.PI / 2);
    const centerSpinner = createCyl(0.14, 0.05, 0.16, 16, materials.stainless, -0.25, 0, 0, 0, Math.PI / 2);
    fanAssembly.add(plugImpeller, centerSpinner);
    animators.push(() => { plugImpeller.rotation.x += 0.15; });

    const fanMotor = createCyl(0.24, 0.24, 0.45, 18, materials.motorCast, 0.32, 0, 0, 0, Math.PI / 2);
    const termBox = createBox(0.14, 0.12, 0.14, materials.motorCast, 0.32, 0.26, 0);
    fanAssembly.add(fanMotor, termBox);

    const fanBase = createBox(1.1, 0.08, 0.8, materials.stainless, 0.05, -coilH / 2 + 0.08, 0);
    fanAssembly.add(fanBase);

    [[-0.4, -0.3], [-0.4, 0.3], [0.4, -0.3], [0.4, 0.3]].forEach(([sx, sz]) => {
      const springBase = createBox(0.12, 0.03, 0.12, materials.motorCast, sx, -coilH / 2 + 0.02, sz);
      const springCoil = createCyl(0.04, 0.04, 0.12, 10, materials.springSilver, sx, -coilH / 2 + 0.08, sz);
      fanAssembly.add(springBase, springCoil);
    });

    const flexCollar = createBox(0.1, coilH, coilW, materials.rubberBlack, 2.35, lowerDamperY, 0);
    parent.add(flexCollar);

    // TERMINAL H14 HEPA FILTER BANK (DIN 1946-4 Hospital Cleanroom Filter)
    const hepaFrame = createBox(0.2, coilH - 0.1, coilW - 0.1, materials.stainless, 3.65, lowerDamperY, 0);
    const hepaCore = createBox(0.16, coilH - 0.15, coilW - 0.15, materials.filterCloth, 3.65, lowerDamperY, 0);
    parent.add(hepaFrame, hepaCore);

    // Hygienic Acoustic Sound Attenuator with glass fabric anti-erosion cover
    for (let si = -1; si <= 1; si += 2) {
      const sz = si * 0.4;
      const pod = createBox(0.42, coilH - 0.1, 0.2, materials.stainless, 4.05, lowerDamperY, sz);
      parent.add(pod);
    }
  }

  // --- SPECIALIZED DEDICATED MODEL: ROOFTOP PAKET ÇATI TİPİ KLİMA (PACKAGED INDUSTRIAL AHU & DX TWIN) ---
  function buildRooftopDetailedModel(parent) {
    const L = 6.2;
    const H = 2.1;
    const W = 2.2;
    const halfL = L / 2; // 3.1
    const halfH = H / 2; // 1.05
    const halfW = W / 2; // 1.1

    // 1. ROOF-CURB STRUCTURAL BASE (Hotspot 04: Heavy-duty galvanized çatı kaidesi)
    const curbH = 0.45;
    const curbY = -halfH - curbH / 2; // -1.05 - 0.225 = -1.275
    const curbL = L + 0.2;
    const curbW = W + 0.2;

    // Outer structural galvanized curb skirt
    const curbFront = createBox(curbL, curbH, 0.08, materials.baseSkid, 0, curbY, halfW + 0.06);
    const curbBack = createBox(curbL, curbH, 0.08, materials.baseSkid, 0, curbY, -halfW - 0.06);
    const curbLeft = createBox(0.08, curbH, curbW - 0.16, materials.baseSkid, -halfL - 0.06, curbY, 0);
    const curbRight = createBox(0.08, curbH, curbW - 0.16, materials.baseSkid, halfL + 0.06, curbY, 0);
    parent.add(curbFront, curbBack, curbLeft, curbRight);

    // Flanged curb top cap with neoprene acoustic sealing gasket
    const capRailF = createBox(curbL + 0.08, 0.04, 0.14, materials.aluFrame, 0, -halfH - 0.02, halfW + 0.05);
    const capRailB = createBox(curbL + 0.08, 0.04, 0.14, materials.aluFrame, 0, -halfH - 0.02, -halfW - 0.05);
    parent.add(capRailF, capRailB);

    // Neoprene sealing strip
    const sealF = createBox(curbL, 0.02, 0.04, materials.rubberBlack, 0, -halfH + 0.01, halfW);
    const sealB = createBox(curbL, 0.02, 0.04, materials.rubberBlack, 0, -halfH + 0.01, -halfW);
    parent.add(sealF, sealB);

    // 4 Corner heavy-duty crane lifting hoist brackets (for rooftop crane rigging)
    [[-halfL - 0.08, halfW + 0.08], [-halfL - 0.08, -halfW - 0.08], [halfL + 0.08, halfW + 0.08], [halfL + 0.08, -halfW - 0.08]].forEach(([lx, lz]) => {
      const lug = createBox(0.14, 0.25, 0.14, materials.yellowSafety, lx, curbY + 0.1, lz);
      const eyeHole = createCyl(0.035, 0.035, 0.16, 16, materials.motorCast, lx, curbY + 0.16, lz, 0, Math.PI / 2);
      parent.add(lug, eyeHole);
    });

    // Roof curb bottom penetration collars (Duct drop openings into building):
    // Return Air duct drop collar
    const returnDrop = createBox(0.9, 0.18, 0.9, materials.galvSteel, -0.1, curbY - 0.14, 0);
    const returnDropHole = createBox(0.82, 0.19, 0.82, materials.motorCast, -0.1, curbY - 0.14, 0);
    // Supply Air duct drop collar
    const supplyDrop = createBox(0.9, 0.18, 0.9, materials.galvSteel, 2.3, curbY - 0.14, 0);
    const supplyDropHole = createBox(0.82, 0.19, 0.82, materials.motorCast, 2.3, curbY - 0.14, 0);
    parent.add(returnDrop, returnDropHole, supplyDrop, supplyDropHole);

    // 2. EXTRUDED ALUMINUM CORROSION-RESISTANT CASING FRAMEWORK
    const pSize = 0.08;
    // Longitudinal top & bottom frame rails
    parent.add(
      createBox(L, pSize, pSize, materials.aluFrame, 0, -halfH + pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, materials.aluFrame, 0, -halfH + pSize / 2, -halfW + pSize / 2),
      createBox(L, pSize, pSize, materials.aluFrame, 0, halfH - pSize / 2, halfW - pSize / 2),
      createBox(L, pSize, pSize, materials.aluFrame, 0, halfH - pSize / 2, -halfW + pSize / 2)
    );

    // Vertical structural corner and partition mullions
    [-halfL + pSize / 2, -0.7, 0.6, 1.8, halfL - pSize / 2].forEach(vx => {
      parent.add(
        createBox(pSize, H - 2 * pSize, pSize, materials.aluFrame, vx, 0, halfW - pSize / 2),
        createBox(pSize, H - 2 * pSize, pSize, materials.aluFrame, vx, 0, -halfW + pSize / 2)
      );
    });

    // Transverse ceiling and floor cross beams
    [-halfL + pSize / 2, -0.7, 0.6, 1.8, halfL - pSize / 2].forEach(vx => {
      parent.add(
        createBox(pSize, pSize, W - 2 * pSize, materials.aluFrame, vx, -halfH + pSize / 2, 0),
        createBox(pSize, pSize, W - 2 * pSize, materials.aluFrame, vx, halfH - pSize / 2, 0)
      );
    });

    // 3. WEATHERPROOF CASING PANELS (Rear, floor, and sloped standing-seam roof)
    // Rear solid panel with double-walled 50mm polyurethane insulation
    parent.add(createBox(L - 0.1, H - 0.1, 0.05, materials.panelSolid, 0, 0, -halfW + 0.04));
    // Unit floor deck (galvanized inner lining)
    parent.add(createBox(L - 0.1, 0.05, W - 0.1, materials.galvSteel, 0, -halfH + 0.04, 0));
    // Right end panel (Supply end)
    parent.add(createBox(0.05, H - 0.1, W - 0.1, materials.panelSolid, halfL - 0.03, 0, 0));

    // Sloped Weatherproof Roof with standing-seam rain drip edges:
    const roofIndoor = createBox(3.8, 0.06, W + 0.1, materials.panelSolid, 1.15, halfH + 0.03, 0);
    parent.add(roofIndoor);
    parent.add(
      createBox(3.84, 0.04, 0.04, materials.aluFrame, 1.15, halfH + 0.01, halfW + 0.06),
      createBox(3.84, 0.04, 0.04, materials.aluFrame, 1.15, halfH + 0.01, -halfW - 0.06)
    );

    // Internal thermal & acoustic separation bulkhead between Outdoor Condenser and Indoor AHU sections
    const bulkhead = createBox(0.06, H - 0.12, W - 0.12, materials.galvSteel, -0.7, 0, 0);
    parent.add(bulkhead);

    // --- 4. SECTION 1: OUTDOOR CONDENSER & COMPRESSOR COMPARTMENT (X: -3.0 to -0.7) ---
    // Condenser Coils: V-Bank / U-Coil geometry with Blue-Fin coating (Hotspot 02)
    const rearCondFin = createBox(2.2, H - 0.25, 0.12, materials.coolingFin, -1.85, 0.02, -halfW + 0.15);
    const leftCondFin = createBox(0.12, H - 0.25, W - 0.3, materials.coolingFin, -halfL + 0.15, 0.02, 0);
    parent.add(rearCondFin, leftCondFin);

    // Hail guards on exterior of condenser coils
    for (let hg = -0.8; hg <= 0.8; hg += 0.2) {
      const hailStrut = createBox(2.25, 0.02, 0.02, materials.aluFrame, -1.85, hg, -halfW + 0.05);
      parent.add(hailStrut);
    }

    // Copper headers and distributor loops for condenser
    [-0.8, -0.2, 0.4].forEach(cy => {
      const condHeader = createCyl(0.035, 0.035, 2.1, 14, materials.copperPipe, -1.85, cy, -halfW + 0.24, 0, Math.PI / 2);
      parent.add(condHeader);
    });

    // Dual Top Condenser Axial Fans (Hotspot 02)
    const condFanPositions = [-2.2, -1.2];
    condFanPositions.forEach((cfx, fidx) => {
      const cowlHeight = 0.22;
      const cowlRing = createCyl(0.48, 0.46, cowlHeight, 28, materials.motorCast, cfx, halfH + cowlHeight / 2, 0, 0, 0, true);
      const cowlLip = createCyl(0.51, 0.51, 0.04, 28, materials.aluFrame, cfx, halfH + cowlHeight, 0);
      parent.add(cowlRing, cowlLip);

      const grilleRing = createCyl(0.46, 0.46, 0.02, 24, materials.galvSteel, cfx, halfH + cowlHeight + 0.01, 0, 0, 0, true);
      parent.add(grilleRing);
      for (let sp = 0; sp < 4; sp++) {
        const spoke = createBox(0.9, 0.015, 0.015, materials.galvSteel, cfx, halfH + cowlHeight + 0.015, 0);
        spoke.rotation.y = (sp / 4) * Math.PI;
        parent.add(spoke);
      }

      const fanHub = new THREE.Group();
      fanHub.position.set(cfx, halfH + 0.12, 0);
      parent.add(fanHub);

      const centerBoss = createCyl(0.12, 0.12, 0.08, 16, materials.aluFrame, 0, 0, 0);
      fanHub.add(centerBoss);

      for (let b = 0; b < 5; b++) {
        const bladeGroup = new THREE.Group();
        bladeGroup.rotation.y = (b / 5) * Math.PI * 2;
        const blade = createBox(0.34, 0.02, 0.11, materials.fanImpeller, 0.24, 0, 0);
        blade.rotation.x = 0.35;
        bladeGroup.add(blade);
        fanHub.add(bladeGroup);
      }

      const rotSpeed = fidx === 0 ? 0.18 : 0.17;
      animators.push(() => { fanHub.rotation.y += rotSpeed; });

      const motorBody = createCyl(0.15, 0.15, 0.3, 16, materials.motorCast, cfx, halfH - 0.12, 0);
      parent.add(motorBody);
    });

    // Tandem Inverter Hermetic Scroll Compressors (Hotspot 01)
    const compBaseChannel = createBox(1.5, 0.06, 0.6, materials.baseSkid, -1.8, -halfH + 0.1, 0.1);
    parent.add(compBaseChannel);

    const compPositions = [-2.15, -1.45];
    compPositions.forEach((cx) => {
      [[-0.12, -0.12], [-0.12, 0.12], [0.12, -0.12], [0.12, 0.12]].forEach(([ox, oz]) => {
        parent.add(createCyl(0.04, 0.04, 0.04, 12, materials.rubberBlack, cx + ox, -halfH + 0.14, 0.1 + oz));
      });

      const compBody = createCyl(0.16, 0.16, 0.58, 24, materials.motorCast, cx, -halfH + 0.45, 0.1);
      const compDome = createCyl(0.14, 0.16, 0.08, 20, materials.motorCast, cx, -halfH + 0.76, 0.1);
      const compJbox = createBox(0.1, 0.14, 0.08, materials.motorCast, cx + 0.14, -halfH + 0.5, 0.1);
      const heaterBand = createCyl(0.165, 0.165, 0.05, 20, materials.heatingFin, cx, -halfH + 0.22, 0.1);
      parent.add(compBody, compDome, compJbox, heaterBand);
    });

    // Suction Accumulator vessel
    const accumBody = createCyl(0.12, 0.12, 0.52, 20, materials.motorCast, -0.95, -halfH + 0.42, 0.25);
    const accumTop = createCyl(0.09, 0.12, 0.06, 16, materials.motorCast, -0.95, -halfH + 0.70, 0.25);
    parent.add(accumBody, accumTop);

    // Refrigerant Piping Network
    const suctionPipe1 = createCyl(0.04, 0.04, 0.8, 14, materials.copperPipe, -1.8, -halfH + 0.62, 0.1, 0, Math.PI / 2);
    const suctionPipeToAccum = createCyl(0.04, 0.04, 0.6, 14, materials.copperPipe, -1.2, -halfH + 0.62, 0.18, Math.PI / 4, 0);
    parent.add(suctionPipe1, suctionPipeToAccum);

    const dischargePipe = createCyl(0.03, 0.03, 1.1, 14, materials.copperPipe, -1.8, -halfH + 0.78, -0.15, 0, Math.PI / 2);
    const vibLoop = createCyl(0.045, 0.045, 0.22, 16, materials.springSilver, -1.35, -halfH + 0.78, -0.15, 0, Math.PI / 2);
    parent.add(dischargePipe, vibLoop);

    const filterDrier = createCyl(0.06, 0.06, 0.24, 16, materials.fanHousing, -0.95, -halfH + 0.28, -0.3, 0, Math.PI / 2);
    const filterFittings = createCyl(0.03, 0.03, 0.34, 14, materials.brassGold, -0.95, -halfH + 0.28, -0.3, 0, Math.PI / 2);
    const eevBody = createBox(0.09, 0.12, 0.09, materials.brassGold, -0.95, -halfH + 0.45, -0.3);
    const eevWire = createCyl(0.01, 0.01, 0.2, 8, materials.rubberBlack, -0.95, -halfH + 0.54, -0.3);
    parent.add(filterDrier, filterFittings, eevBody, eevWire);

    [-0.15, 0.15].forEach(gz => {
      const pGauge = createCyl(0.045, 0.045, 0.02, 16, materials.gaugeFace, -0.73, -halfH + 0.65, gz, 0, Math.PI / 2);
      parent.add(pGauge);
    });

    // --- 5. SECTION 2: INDOOR AIR HANDLING & ECONOMIZER (X: -0.7 to +3.0) ---
    // MODULE 1: ECONOMIZER & FRESH / RETURN AIR DAMPERS (Hotspot 03)
    const hoodW = 1.1, hoodH = 0.8, hoodD = 0.35;
    const hoodBox = createBox(hoodW, hoodH, hoodD, materials.galvSteel, -0.1, 0.2, -halfW - hoodD / 2 + 0.04);
    const hoodRoof = createBox(hoodW + 0.06, 0.03, hoodD + 0.08, materials.aluFrame, -0.1, 0.2 + hoodH / 2 + 0.02, -halfW - hoodD / 2);
    hoodRoof.rotation.x = -0.12;
    parent.add(hoodBox, hoodRoof);

    for (let lb = -0.3; lb <= 0.3; lb += 0.12) {
      const lBlade = createBox(hoodW - 0.06, 0.02, 0.18, materials.damperBlade, -0.1, 0.2 + lb, -halfW - hoodD / 2);
      lBlade.rotation.x = 0.45;
      parent.add(lBlade);
    }

    const faDamperW = 1.0, faDamperH = 0.75;
    const faDamperFrame = createBox(faDamperW, faDamperH, 0.08, materials.aluFrame, -0.1, 0.2, -halfW + 0.25);
    parent.add(faDamperFrame);
    for (let db = -0.25; db <= 0.25; db += 0.14) {
      const blade = createBox(faDamperW - 0.06, 0.11, 0.015, materials.damperBlade, -0.1, 0.2 + db, -halfW + 0.25);
      blade.rotation.x = 0.3;
      parent.add(blade);
    }

    const raDamperL = 0.9, raDamperW = 0.9;
    const raDamperFrame = createBox(raDamperL, 0.08, raDamperW, materials.aluFrame, -0.1, -halfH + 0.15, 0);
    parent.add(raDamperFrame);
    for (let rb = -0.3; rb <= 0.3; rb += 0.15) {
      const blade = createBox(raDamperL - 0.06, 0.015, 0.12, materials.damperBlade, -0.1, -halfH + 0.15, rb);
      blade.rotation.z = 0.25;
      parent.add(blade);
    }

    // Belimo Orange Modulating Damper Actuator
    const actBody = createBox(0.16, 0.22, 0.14, materials.actuatorOrange, -0.1, 0.35, halfW - 0.2);
    const actHub = createCyl(0.04, 0.04, 0.06, 16, materials.aluFrame, -0.1, 0.35, halfW - 0.12, Math.PI / 2, 0);
    const actLever = createBox(0.03, 0.14, 0.02, materials.motorCast, -0.1, 0.42, halfW - 0.1);
    parent.add(actBody, actHub, actLever);

    const sensorProbe = createCyl(0.015, 0.015, 0.35, 10, materials.stainless, 0.25, 0.2, 0);
    parent.add(sensorProbe);

    // MODULE 2: FILTER SECTION (G4 Pleated Pre-filter + F7 Compact Cassette)
    const filterX = 0.6;
    const filterH = H - 0.3;
    const filterW = W - 0.3;
    const filterFrame = createBox(0.18, filterH, filterW, materials.galvSteel, filterX, 0, 0);
    parent.add(filterFrame);

    for (let fz = -filterW / 2 + 0.3; fz <= filterW / 2 - 0.2; fz += 0.5) {
      const g4Panel = createBox(0.05, filterH - 0.1, 0.44, materials.filterG4, filterX - 0.05, 0, fz);
      const f7Panel = createBox(0.07, filterH - 0.1, 0.44, materials.filterCloth, filterX + 0.05, 0, fz);
      parent.add(g4Panel, f7Panel);
    }

    const dpProbe1 = createCyl(0.01, 0.01, 0.2, 8, materials.copperPipe, filterX - 0.14, 0.3, halfW - 0.15);
    const dpProbe2 = createCyl(0.01, 0.01, 0.2, 8, materials.copperPipe, filterX + 0.14, 0.3, halfW - 0.15);
    parent.add(dpProbe1, dpProbe2);

    // MODULE 3: DIRECT EXPANSION (DX) EVAPORATOR COOLING COIL
    const coilX = 1.25;
    const coilH = H - 0.35;
    const coilW = W - 0.35;

    const dxCoilBlock = createBox(0.32, coilH, coilW, materials.coolingFin, coilX, 0.02, 0);
    parent.add(dxCoilBlock);

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 3; col++) {
        const ubY = -coilH / 2 + 0.2 + col * (coilH / 3.2);
        const ubX = coilX - 0.12 + row * 0.08;
        const ubend = createCyl(0.025, 0.025, 0.04, 12, materials.copperPipe, ubX, ubY, halfW - 0.18, Math.PI / 2, 0);
        parent.add(ubend);
      }
    }

    const spiderHub = createCyl(0.035, 0.035, 0.08, 14, materials.brassGold, coilX - 0.15, -0.2, halfW - 0.22);
    parent.add(spiderHub);
    for (let cap = 0; cap < 4; cap++) {
      const capTube = createCyl(0.008, 0.008, 0.28, 8, materials.copperPipe, coilX - 0.08, -0.2 + cap * 0.1, halfW - 0.22, 0, Math.PI / 4);
      parent.add(capTube);
    }

    const panW = coilW + 0.15;
    const panL = 0.85;
    const panH = 0.09;
    const drainPanMesh = createBox(panL, panH, panW, materials.drainPan, coilX, -halfH + panH / 2 + 0.05, 0);
    parent.add(drainPanMesh);

    const pTrap1 = createCyl(0.03, 0.03, 0.35, 12, materials.stainless, coilX + 0.1, -halfH - 0.05, halfW + 0.02);
    const pTrap2 = createCyl(0.03, 0.03, 0.22, 12, materials.stainless, coilX + 0.22, -halfH - 0.12, halfW + 0.02);
    const pTrapBottom = createCyl(0.03, 0.03, 0.14, 12, materials.stainless, coilX + 0.16, -halfH - 0.22, halfW + 0.02, 0, Math.PI / 2);
    parent.add(pTrap1, pTrap2, pTrapBottom);

    const eliminatorBlock = createBox(0.12, coilH - 0.05, coilW, materials.aluFrame, coilX + 0.24, 0.02, 0);
    parent.add(eliminatorBlock);

    // MODULE 4: MODULATING HEATING SECTION (Gas Burner / Electric Coil)
    const heatX = 1.8;
    const heatH = coilH;
    const heatW = coilW;

    for (let tr = -0.5; tr <= 0.5; tr += 0.25) {
      const heatTube = createCyl(0.045, 0.045, heatW - 0.2, 16, materials.stainless, heatX, tr, 0, Math.PI / 2, 0);
      parent.add(heatTube);
    }
    const burnerBox = createBox(0.25, heatH - 0.2, 0.3, materials.galvSteel, heatX, 0, -halfW + 0.2);
    parent.add(burnerBox);

    // MODULE 5: DIRECT-DRIVE EC SUPPLY AIR PLUG FAN & MOTOR
    const fanAssembly = new THREE.Group();
    fanAssembly.position.set(2.45, 0.05, 0);
    parent.add(fanAssembly);

    const bellmouth = createCyl(0.48, 0.38, 0.18, 28, materials.aluFrame, -0.38, 0, 0, 0, Math.PI / 2);
    const piezoRing = createCyl(0.44, 0.44, 0.03, 24, materials.copperPipe, -0.36, 0, 0, 0, Math.PI / 2, true);
    fanAssembly.add(bellmouth, piezoRing);

    const plugImpeller = createCyl(0.52, 0.52, 0.36, 24, materials.fanHousing, -0.05, 0, 0, 0, Math.PI / 2);
    const centerSpinner = createCyl(0.14, 0.05, 0.16, 16, materials.aluFrame, -0.24, 0, 0, 0, Math.PI / 2);
    fanAssembly.add(plugImpeller, centerSpinner);
    animators.push(() => { plugImpeller.rotation.x += 0.15; });

    const fanMotor = createCyl(0.24, 0.24, 0.45, 18, materials.motorCast, 0.32, 0, 0, 0, Math.PI / 2);
    const termBox = createBox(0.14, 0.12, 0.14, materials.motorCast, 0.32, 0.26, 0);
    fanAssembly.add(fanMotor, termBox);

    const fanBase = createBox(1.1, 0.08, 0.8, materials.baseSkid, 0.05, -coilH / 2 + 0.1, 0);
    fanAssembly.add(fanBase);

    [[-0.4, -0.3], [-0.4, 0.3], [0.4, -0.3], [0.4, 0.3]].forEach(([sx, sz]) => {
      const springBase = createBox(0.12, 0.03, 0.12, materials.motorCast, sx, -coilH / 2 + 0.04, sz);
      const springCoil = createCyl(0.04, 0.04, 0.12, 10, materials.springSilver, sx, -coilH / 2 + 0.1, sz);
      fanAssembly.add(springBase, springCoil);
    });

    const dischargeDuct = createBox(0.85, 0.6, 0.85, materials.galvSteel, 2.3, -halfH + 0.3, 0);
    const flexCollar = createBox(0.9, 0.1, 0.9, materials.rubberBlack, 2.3, -halfH + 0.05, 0);
    parent.add(dischargeDuct, flexCollar);

    // --- 6. FRONT SERVICE ACCESS DOORS & CUTAWAY SWITCHING ---
    const doorSpecs = [
      { name: 'Condenser & Compressor', minX: -2.85, maxX: -0.85 },
      { name: 'Economizer & Filter', minX: -0.65, maxX: 0.55 },
      { name: 'DX Evaporator & Heater', minX: 0.65, maxX: 1.85 },
      { name: 'Supply Plug Fan', minX: 1.95, maxX: 2.85 }
    ];

    doorSpecs.forEach((ds, didx) => {
      const dw = ds.maxX - ds.minX;
      const dx = (ds.minX + ds.maxX) / 2;
      const dh = H - 0.22;

      const cutDoor = createBox(dw - 0.04, dh, 0.04, materials.panelCutaway, dx, 0, halfW - 0.02, false, false);
      parent.add(cutDoor);
      registerCutawayPanel(cutDoor, materials.panelSolid, materials.panelCutaway);

      const handle = createBox(0.04, 0.14, 0.04, materials.doorHandle, dx + dw * 0.42, 0, halfW + 0.01);
      const hinge1 = createBox(0.03, 0.08, 0.03, materials.stainless, dx - dw * 0.45, dh * 0.35, halfW + 0.01);
      const hinge2 = createBox(0.03, 0.08, 0.03, materials.stainless, dx - dw * 0.45, -dh * 0.35, halfW + 0.01);
      parent.add(handle, hinge1, hinge2);

      if (didx === 1 || didx === 2 || didx === 3) {
        const portholeBezel = createCyl(0.12, 0.12, 0.04, 20, materials.aluFrame, dx, 0.22, halfW, Math.PI / 2);
        parent.add(portholeBezel);
      }
    });

    // Weatherproof DDC Automation & Power Control Panel (IP55)
    const ctrlBox = createBox(0.42, 0.65, 0.18, materials.panelSolid, 0.6, 0.3, halfW + 0.08);
    const ctrlBezel = createBox(0.38, 0.6, 0.02, materials.aluFrame, 0.6, 0.3, halfW + 0.17);
    const ctrlScreen = createBox(0.24, 0.16, 0.01, materials.touchscreen, 0.6, 0.4, halfW + 0.18);
    const isolatorBack = createBox(0.09, 0.09, 0.02, materials.yellowSafety, 0.6, 0.18, halfW + 0.18);
    const isolatorKnob = createCyl(0.035, 0.035, 0.05, 12, materials.heatingFin, 0.6, 0.18, halfW + 0.2, Math.PI / 2);
    parent.add(ctrlBox, ctrlBezel, ctrlScreen, isolatorBack, isolatorKnob);

    // Dual External Magnehelic Differential Pressure Gauges
    [-0.15, 0.15].forEach(gz => {
      const magGauge = createCyl(0.065, 0.065, 0.035, 20, materials.aluFrame, 0.6, -0.25, halfW + 0.08 + gz, Math.PI / 2);
      const magFace = createCyl(0.055, 0.055, 0.037, 20, materials.gaugeFace, 0.6, -0.25, halfW + 0.08 + gz, Math.PI / 2);
      const magTube = createCyl(0.008, 0.008, 0.3, 8, materials.panelCutaway, 0.6, -0.42, halfW + 0.08 + gz);
      parent.add(magGauge, magFace, magTube);
    });
  }

  // --- 5. CATEGORY-BASED PROCEDURAL GENERATORS ---

  // A. AIR HANDLING & RECOVERY UNITS (TKS, THKS, THRV-DX, HRV, ROOFTOP)
  function buildAhuModel(parent, type) {
    if (type === 'tks') {
      buildTksDetailedModel(parent);
      return;
    }
    if (type === 'thks') {
      buildThksDetailedModel(parent);
      return;
    }
    if (type === 'rooftop') {
      buildRooftopDetailedModel(parent);
      return;
    }
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

    // Front Cutaway Panels (3 or 4 Modules)
    const doorCount = isHrv ? 3 : 4;
    const doorW = (L - 0.2) / doorCount;
    for (let d = 0; d < doorCount; d++) {
      const dx = -halfL + 0.1 + (d + 0.5) * doorW;
      const cutDoor = createBox(doorW - 0.04, H - 0.18, 0.03, materials.panelCutaway, dx, 0, halfW - 0.02, false, false);
      parent.add(cutDoor);
      dynamicCutawayPanels.push(cutDoor);
      // Handle & circular inspection porthole
      parent.add(createBox(0.04, 0.12, 0.04, materials.doorHandle, dx + doorW * 0.4, 0, halfW + 0.01));
      parent.add(createCyl(0.11, 0.11, 0.04, 16, materials.aluFrame, dx, 0.2, halfW, Math.PI / 2));
    }

    // Specific Interials
    if (isHrv) {
      // HRV: Diamond Plate Heat Exchanger Core in Center
      const plateCore = createBox(1.5, 1.4, W - 0.35, materials.aluFrame, 0, 0, 0);
      plateCore.rotation.z = Math.PI / 4;
      parent.add(plateCore);
      // Dual centrifugal EC fans
      [-1.4, 1.4].forEach((fx, idx) => {
        const fy = idx === 0 ? -0.35 : 0.35;
        const fan = createCyl(0.35, 0.35, 0.25, 20, materials.fanHousing, fx, fy, 0, 0, Math.PI / 2);
        parent.add(fan);
        animators.push(() => { fan.rotation.x += 0.1; });
      });
      // Compact Filters on sides
      [-1.9, 1.9].forEach(px => {
        parent.add(createBox(0.06, H - 0.4, W - 0.4, materials.filterCloth, px, 0, 0));
      });
      // 4 round spigot collars on top / sides
      [[-halfL - 0.1, 0.4], [halfL + 0.1, -0.4]].forEach(([sx, sy]) => {
        parent.add(createCyl(0.32, 0.32, 0.22, 24, materials.galvSteel, sx, sy, 0, 0, Math.PI / 2, true));
      });
    } else if (isRooftop) {
      // ROOFTOP: Top Condenser Fans with wire safety cowl + Compressors
      [-1.2, 1.2].forEach(fx => {
        const topFanRim = createCyl(0.55, 0.55, 0.18, 24, materials.motorCast, fx, halfH + 0.09, 0, 0, 0, true);
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

      // Final HEPA & UV-C module for THKS Hygienic
      if (isHygienic) {
        parent.add(createBox(0.18, halfH - 0.3, W - 0.35, materials.stainless, 2.15, -halfH / 2, 0));
        // UV-C lamp tube with blue tint
        const uvLamp = createCyl(0.03, 0.03, W - 0.5, 12, materials.coolingFin, 1.1, -halfH / 2 + 0.2, 0, Math.PI / 2);
        parent.add(uvLamp);
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
      // TDF: Hollow rectangular in-line duct fan with flanged ends & service door
      const L = 3.2, H = 2.0, W = 2.0;
      parent.add(
        createBox(L, 0.04, W, materials.galvSteel, 0, H / 2, 0),        // Top
        createBox(L, 0.04, W, materials.galvSteel, 0, -H / 2, 0),       // Bottom
        createBox(L, H, 0.04, materials.galvSteel, 0, 0, -W / 2)        // Back
      );
      // Flanges on both open ends
      [-L / 2, L / 2].forEach(fx => {
        parent.add(
          createBox(0.08, 0.12, W + 0.2, materials.aluFrame, fx, H / 2 + 0.04, 0),
          createBox(0.08, 0.12, W + 0.2, materials.aluFrame, fx, -H / 2 - 0.04, 0),
          createBox(0.08, H, 0.12, materials.aluFrame, fx, 0, W / 2 + 0.04),
          createBox(0.08, H, 0.12, materials.aluFrame, fx, 0, -W / 2 - 0.04)
        );
        // Corner cleats
        [-H / 2 - 0.04, H / 2 + 0.04].forEach(cy => {
          [-W / 2 - 0.04, W / 2 + 0.04].forEach(cz => {
            parent.add(createBox(0.1, 0.14, 0.14, materials.baseSkid, fx, cy, cz));
          });
        });
      });
      // Front cutaway service door
      const door = createBox(L - 0.1, H - 0.1, 0.03, materials.panelCutaway, 0, 0, W / 2, false, false);
      parent.add(door);
      dynamicCutawayPanels.push(door);
      // Quick release latches
      [-0.8, 0.8].forEach(lx => {
        parent.add(createBox(0.08, 0.12, 0.04, materials.doorHandle, lx, H / 2 - 0.1, W / 2 + 0.02));
      });
      // Backward-curved centrifugal impeller & external rotor motor in center
      const imp = createCyl(0.78, 0.78, 0.45, 24, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
      const motor = createCyl(0.28, 0.28, 0.35, 16, materials.motorCast, 0.25, 0, 0, 0, Math.PI / 2);
      parent.add(imp, motor);
      animators.push(() => { imp.rotation.x += 0.14; });
      // Terminal box on top
      parent.add(createBox(0.24, 0.18, 0.16, materials.fanHousing, -0.6, H / 2 + 0.1, 0.4));
    } else if (type === 'yangin-fani') {
      // 400°C/2h Smoke Exhaust: HOLLOW cylindrical tube (openEnded) with angle flanges & torpedo motor pod
      const R = 1.25, L = 4.2;
      const tube = createCyl(R, R, L, 32, materials.galvSteel, 0, 0, 0, 0, Math.PI / 2, true);
      parent.add(tube);
      // Drilled circular companion angle flanges on both open ends
      [-L / 2, L / 2].forEach(fx => {
        const flangeRing = createCyl(R + 0.18, R + 0.18, 0.06, 32, materials.baseSkid, fx, 0, 0, 0, Math.PI / 2, true);
        parent.add(flangeRing);
        for (let b = 0; b < 12; b++) {
          const ang = (b / 12) * Math.PI * 2;
          parent.add(createBox(0.08, 0.04, 0.04, materials.doorHandle, fx, Math.sin(ang) * (R + 0.09), Math.cos(ang) * (R + 0.09)));
        }
      });
      // Center Torpedo Motor Cowl with streamlined nose & tail
      const motorPod = createCyl(0.46, 0.46, 2.0, 24, materials.motorCast, 0.1, 0, 0, 0, Math.PI / 2);
      const noseCone = new THREE.Mesh(new THREE.ConeGeometry(0.46, 0.6, 20), materials.motorCast);
      noseCone.rotateZ(-Math.PI / 2);
      noseCone.position.set(-1.2, 0, 0);
      parent.add(motorPod, noseCone);
      // Aerofoil axial runner blades (8 blades) spinning
      const runner = new THREE.Group();
      runner.position.set(-0.6, 0, 0);
      parent.add(runner);
      const hub = createCyl(0.48, 0.48, 0.2, 20, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
      runner.add(hub);
      for (let b = 0; b < 8; b++) {
        const ang = (b / 8) * Math.PI * 2;
        const blade = createBox(0.04, 0.7, 0.16, materials.fanImpeller, 0, Math.sin(ang) * 0.78, Math.cos(ang) * 0.78);
        blade.rotation.x = ang + 0.35;
        runner.add(blade);
      }
      animators.push(() => { runner.rotation.x += 0.15; });
      // Guide struts
      for (let s = 0; s < 4; s++) {
        const ang = (s / 4) * Math.PI * 2;
        const strut = createBox(0.03, R - 0.46, 0.1, materials.baseSkid, 0.4, Math.sin(ang) * (R + 0.46) / 2, Math.cos(ang) * (R + 0.46) / 2);
        strut.rotation.x = ang;
        parent.add(strut);
      }
      // Channel mounting feet
      parent.add(
        createBox(2.8, 0.12, 0.35, materials.baseSkid, 0, -R - 0.1, 0.9),
        createBox(2.8, 0.12, 0.35, materials.baseSkid, 0, -R - 0.1, -0.9)
      );
      // External IP55 fire terminal box
      parent.add(createBox(0.24, 0.24, 0.16, materials.actuatorOrange, 0, R + 0.1, 0));
    } else {
      // Jet Fan: Car park impulse tunnel fan with dual silencer pods & guide vanes
      const R = 0.62, L = 5.2;
      const mainTube = createCyl(R, R, L, 28, materials.galvSteel, 0, 0, 0, 0, Math.PI / 2, true);
      parent.add(mainTube);
      // Dual silencer outer pods
      [-1.7, 1.7].forEach(sx => {
        parent.add(createCyl(R + 0.12, R + 0.12, 1.5, 28, materials.aluFrame, sx, 0, 0, 0, Math.PI / 2, true));
      });
      // Central motor & axial runner
      const motorCore = createCyl(0.28, 0.28, 1.2, 16, materials.motorCast, 0, 0, 0, 0, Math.PI / 2);
      const runner = createCyl(R - 0.05, R - 0.05, 0.12, 8, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
      parent.add(motorCore, runner);
      animators.push(() => { runner.rotation.x += 0.16; });
      // Deflector vanes on discharge
      for (let v = -0.3; v <= 0.3; v += 0.2) {
        const vane = createBox(0.08, 0.04, 0.8, materials.damperBlade, L / 2 + 0.02, v, 0);
        vane.rotation.z = -0.2;
        parent.add(vane);
      }
      // Wire guard grilles on ends
      [-L / 2 - 0.02, L / 2 + 0.02].forEach(gx => {
        parent.add(createCyl(R + 0.02, R + 0.02, 0.04, 16, materials.aluFrame, gx, 0, 0, 0, Math.PI / 2, true));
      });
      // Ceiling suspension brackets
      [-1.4, 1.4].forEach(bx => {
        parent.add(createBox(0.08, 0.55, 0.25, materials.baseSkid, bx, R + 0.35, 0));
      });
    }
  }

  // C. DUCTWORK (GALVANIZ, SPIRAL, PASLANMAZ)
  function buildDuctModel(parent, type) {
    if (type === 'spiral-kanal') {
      // Spiromatic spiral round duct with 90° bend fitting & rubber gasket
      const R = 0.75, L = 4.4;
      const straightTube = createCyl(R, R, L, 32, materials.galvSteel, -0.6, 0, 0, 0, Math.PI / 2, true);
      parent.add(straightTube);
      // Continuously spaced spiral lockseam ridges
      for (let r = -2.6; r <= 1.2; r += 0.45) {
        parent.add(createCyl(R + 0.015, R + 0.015, 0.025, 32, materials.aluFrame, r, 0, 0, 0, Math.PI / 2, true));
      }
      // Male spigot coupling with twin-lip EPDM black rubber gasket
      parent.add(createCyl(R + 0.025, R + 0.025, 0.12, 32, materials.rubberBlack, 1.65, 0, 0, 0, Math.PI / 2, true));
      // 90° segmented bend branch (open-ended vertical duct)
      const bendTube = createCyl(R - 0.01, R - 0.01, 1.8, 28, materials.galvSteel, 2.2, 0.9, 0, 0, 0, true);
      parent.add(bendTube);
      // Suspension clamp with M8 threaded rod
      parent.add(createCyl(R + 0.06, R + 0.06, 0.08, 32, materials.baseSkid, -0.8, 0, 0, 0, Math.PI / 2, true));
      parent.add(createCyl(0.02, 0.02, 1.4, 8, materials.baseSkid, -0.8, R + 0.7, 0));
    } else if (type === 'paslanmaz-kanal') {
      // Heavy-duty AISI 304/316 TIG welded HOLLOW round duct
      const R = 0.85, L = 4.6;
      const sTube = createCyl(R, R, L, 32, materials.stainless, 0, 0, 0, 0, Math.PI / 2, true);
      parent.add(sTube);
      // Continuous longitudinal TIG automated plasma weld bead
      parent.add(createBox(L - 0.02, 0.02, 0.03, materials.aluFrame, 0, R, 0));
      // Solid flat-bar companion ring flanges on both ends with 8 perimeter bolts
      [-L / 2, L / 2].forEach(fx => {
        parent.add(createCyl(R + 0.2, R + 0.2, 0.08, 32, materials.stainless, fx, 0, 0, 0, Math.PI / 2, true));
        for (let b = 0; b < 8; b++) {
          const ang = (b / 8) * Math.PI * 2;
          parent.add(createBox(0.12, 0.04, 0.04, materials.doorHandle, fx, Math.sin(ang) * (R + 0.1), Math.cos(ang) * (R + 0.1)));
        }
      });
      // Oval inspection cleaning hatch (müdahale kapağı) with tightening knobs
      parent.add(createCyl(0.32, 0.32, 0.06, 16, materials.stainless, 0, 0, R + 0.02, Math.PI / 2));
      [-0.15, 0.15].forEach(kx => {
        parent.add(createBox(0.04, 0.08, 0.06, materials.doorHandle, kx, 0, R + 0.07));
      });
    } else {
      // Galvaniz: HOLLOW self-flanged rectangular air duct (completely open through both ends)
      const L = 4.6, H = 2.0, W = 2.4;
      parent.add(
        createBox(L, 0.04, W, materials.galvSteel, 0, H / 2, 0),        // Top wall
        createBox(L, 0.04, W, materials.galvSteel, 0, -H / 2, 0),       // Bottom wall
        createBox(L, H, 0.04, materials.galvSteel, 0, 0, -W / 2)        // Back wall
      );
      // Front wall with cutaway acoustic lining window
      const frontLeft = createBox(0.9, H, 0.04, materials.galvSteel, -L / 2 + 0.45, 0, W / 2);
      const frontRight = createBox(0.9, H, 0.04, materials.galvSteel, L / 2 - 0.45, 0, W / 2);
      const cutawayLining = createBox(L - 1.8, H - 0.3, 0.03, materials.panelCutaway, 0, 0, W / 2, false, false);
      parent.add(frontLeft, frontRight, cutawayLining);
      dynamicCutawayPanels.push(cutawayLining);
      // Internal perforated acoustic sheet and rockwool visible through window
      parent.add(createBox(L - 1.9, H - 0.4, 0.08, materials.filterCloth, 0, 0, W / 2 - 0.06));

      // TDF roll-formed flanges on both open ends
      [-L / 2, L / 2].forEach(fx => {
        parent.add(
          createBox(0.08, 0.14, W + 0.24, materials.aluFrame, fx, H / 2 + 0.05, 0),
          createBox(0.08, 0.14, W + 0.24, materials.aluFrame, fx, -H / 2 - 0.05, 0),
          createBox(0.08, H, 0.14, materials.aluFrame, fx, 0, W / 2 + 0.05),
          createBox(0.08, H, 0.14, materials.aluFrame, fx, 0, -W / 2 - 0.05)
        );
        // Corner cleats (köşe takozları)
        [-H / 2 - 0.05, H / 2 + 0.05].forEach(cy => {
          [-W / 2 - 0.05, W / 2 + 0.05].forEach(cz => {
            parent.add(createBox(0.1, 0.16, 0.16, materials.baseSkid, fx, cy, cz));
          });
        });
      });
      // Cross-break stiffness beads
      parent.add(createBox(L - 0.8, 0.02, 0.02, materials.aluFrame, 0, H / 2 + 0.02, 0));
    }
  }

  // D. AIR DISTRIBUTION & DAMPERS (MENFEZ, DIFUZOR, DAMPER)
  function buildAirDistModel(parent, type) {
    if (type === 'menfez') {
      // Double deflection grille: OPEN perimeter frame with adjustable aerofoil blades & rear OBD damper
      const H = 2.2, W = 3.4, D = 0.24;
      // 4 perimeter extruded aluminum borders
      parent.add(
        createBox(D, 0.14, W + 0.2, materials.aluFrame, 0, H / 2 + 0.05, 0),   // Top
        createBox(D, 0.14, W + 0.2, materials.aluFrame, 0, -H / 2 - 0.05, 0),  // Bottom
        createBox(D, H, 0.14, materials.aluFrame, 0, 0, W / 2 + 0.05),         // Right
        createBox(D, H, 0.14, materials.aluFrame, 0, 0, -W / 2 - 0.05)         // Left
      );
      // Front row: horizontal adjustable aerofoil louvers
      for (let y = -H / 2 + 0.2; y <= H / 2 - 0.15; y += 0.24) {
        const blade = createBox(0.08, 0.02, W - 0.1, materials.damperBlade, D / 2 - 0.03, y, 0);
        blade.rotation.z = 0.22; // Deflect air up/down around longitudinal horizontal axis
        parent.add(blade);
      }
      // Rear row: vertical adjustable aerofoil louvers
      for (let z = -W / 2 + 0.25; z <= W / 2 - 0.2; z += 0.28) {
        const vBlade = createBox(0.06, H - 0.05, 0.02, materials.damperBlade, 0, 0, z);
        vBlade.rotation.y = 0.2;
        parent.add(vBlade);
      }
      // Rear opposed blade volume damper (OBD) frame & gear adjuster
      parent.add(
        createBox(0.12, 0.08, W - 0.1, materials.motorCast, -D / 2 - 0.04, H / 2 - 0.04, 0),
        createBox(0.12, 0.08, W - 0.1, materials.motorCast, -D / 2 - 0.04, -H / 2 + 0.04, 0)
      );
      parent.add(createBox(0.08, 0.12, 0.08, materials.brassGold, D / 2 + 0.02, H / 2 - 0.1, W / 2 - 0.1));
    } else if (type === 'difuzor') {
      // Linear Slot Diffuser with insulated plenum box & Swirl Anemostat
      // Top insulated plenum box (hollow galvanized sheet)
      const pL = 3.4, pH = 1.3, pW = 1.5;
      parent.add(
        createBox(pL, 0.03, pW, materials.galvSteel, 0, pH / 2 + 0.3, 0),
        createBox(pL, pH, 0.03, materials.galvSteel, 0, 0.3, -pW / 2),
        createBox(pL, pH, 0.03, materials.galvSteel, 0, 0.3, pW / 2)
      );
      // Circular spigot collar on side of plenum box
      parent.add(createCyl(0.42, 0.42, 0.35, 24, materials.galvSteel, -pL / 2 - 0.15, 0.3, 0, 0, Math.PI / 2, true));
      // 3-slot linear face plate on bottom
      parent.add(createBox(pL + 0.2, 0.06, pW + 0.2, materials.aluFrame, 0, -pH / 2 + 0.3, 0));
      // 3 black aerodynamic directional deflection rollers
      [-0.35, 0, 0.35].forEach(sz => {
        parent.add(createBox(pL - 0.1, 0.04, 0.06, materials.doorHandle, 0, -pH / 2 + 0.26, sz));
      });
      // Side Swirl Anemostat display
      const swirlPlate = createBox(1.8, 0.04, 1.8, materials.panelSolid, 0, -1.0, 0);
      parent.add(swirlPlate);
      for (let s = 0; s < 16; s++) {
        const ang = (s / 16) * Math.PI * 2;
        const sVane = createBox(0.03, 0.02, 0.36, materials.doorHandle, Math.sin(ang) * 0.55, -0.98, Math.cos(ang) * 0.55);
        sVane.rotation.y = ang + 0.5;
        parent.add(sVane);
      }
    } else {
      // Fire & Smoke Damper: HOLLOW rectangular sleeve casing with interlocking blades & Belimo actuator
      const L = 1.4, H = 2.2, W = 2.4;
      parent.add(
        createBox(L, 0.04, W, materials.galvSteel, 0, H / 2, 0),        // Top sleeve
        createBox(L, 0.04, W, materials.galvSteel, 0, -H / 2, 0),       // Bottom sleeve
        createBox(L, H, 0.04, materials.galvSteel, 0, 0, -W / 2),       // Back sleeve
        createBox(L, H, 0.04, materials.galvSteel, 0, 0, W / 2)         // Front sleeve
      );
      // Flanges on both open ends
      [-L / 2, L / 2].forEach(fx => {
        parent.add(
          createBox(0.08, 0.14, W + 0.2, materials.aluFrame, fx, H / 2 + 0.05, 0),
          createBox(0.08, 0.14, W + 0.2, materials.aluFrame, fx, -H / 2 - 0.05, 0),
          createBox(0.08, H, 0.14, materials.aluFrame, fx, 0, W / 2 + 0.05),
          createBox(0.08, H, 0.14, materials.aluFrame, fx, 0, -W / 2 - 0.05)
        );
      });
      // 4 Interlocking opposed aerodynamic blades inside the sleeve
      for (let b = -H / 2 + 0.35; b <= H / 2 - 0.25; b += 0.5) {
        const blade = createBox(0.35, 0.04, W - 0.12, materials.damperBlade, 0, b, 0);
        blade.rotation.z = 0.35;
        parent.add(blade);
      }
      // Internal side linkage rod
      parent.add(createBox(0.03, H - 0.4, 0.03, materials.brassGold, 0.15, 0, W / 2 - 0.08));
      // Belimo spring-return electric actuator (orange housing)
      const act = createBox(0.22, 0.34, 0.18, materials.actuatorOrange, 0.1, 0.2, W / 2 + 0.14);
      parent.add(act);
      // Manual winding handle & shaft
      parent.add(createCyl(0.025, 0.025, 0.15, 12, materials.motorCast, 0.1, 0.2, W / 2 + 0.04, Math.PI / 2));
      // 72°C thermal fusible link sensor
      parent.add(createCyl(0.03, 0.03, 0.12, 12, materials.brassGold, -0.2, 0.2, W / 2 + 0.08, Math.PI / 2));
    }
  }

  // E. FILTRATION (FILTRE)
  function buildFilterModel(parent) {
    // Universal filter housing: HOLLOW casing with open airflow path & front cutaway door
    const L = 4.4, H = 2.4, W = 2.2;
    parent.add(
      createBox(L, 0.04, W, materials.galvSteel, 0, H / 2, 0),        // Top
      createBox(L, 0.04, W, materials.galvSteel, 0, -H / 2, 0),       // Bottom
      createBox(L, H, 0.04, materials.galvSteel, 0, 0, -W / 2)        // Back
    );
    // End flanges
    [-L / 2, L / 2].forEach(fx => {
      parent.add(
        createBox(0.08, 0.12, W + 0.2, materials.aluFrame, fx, H / 2 + 0.04, 0),
        createBox(0.08, 0.12, W + 0.2, materials.aluFrame, fx, -H / 2 - 0.04, 0),
        createBox(0.08, H, 0.12, materials.aluFrame, fx, 0, W / 2 + 0.04),
        createBox(0.08, H, 0.12, materials.aluFrame, fx, 0, -W / 2 - 0.04)
      );
    });
    // Front cutaway service door
    const cutDoor = createBox(L - 0.1, H - 0.1, 0.03, materials.panelCutaway, 0, 0, W / 2, false, false);
    parent.add(cutDoor);
    dynamicCutawayPanels.push(cutDoor);

    // 1. G4 Pleated Pre-filter (Left) with wire mesh
    const g4Frame = createBox(0.12, H - 0.2, W - 0.2, materials.aluFrame, -1.4, 0, 0);
    const g4Media = createBox(0.1, H - 0.25, W - 0.25, materials.filterCloth, -1.4, 0, 0);
    parent.add(g4Frame, g4Media);

    // 2. F7/F9 Pocket Bag Filter (Center) with 4 deep fabric cones
    parent.add(createBox(0.1, H - 0.2, W - 0.2, materials.aluFrame, -0.2, 0, 0));
    for (let bi = 0; bi < 4; bi++) {
      const bz = -0.7 + bi * 0.46;
      const bag = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.1, 4), materials.filterCloth);
      bag.rotateZ(-Math.PI / 2);
      bag.position.set(0.4, 0, bz);
      bag.scale.set(1.0, 1.3, 0.75);
      parent.add(bag);
    }

    // 3. H14 Absolute HEPA Filter (Right) with aluminum frame & continuous gasket
    const hepaFrame = createBox(0.25, H - 0.2, W - 0.2, materials.aluFrame, 1.4, 0, 0);
    const hepaCore = createBox(0.22, H - 0.26, W - 0.26, materials.filterCloth, 1.4, 0, 0);
    const hepaGel = createBox(0.26, H - 0.18, 0.04, materials.coolingFin, 1.4, 0, W / 2 - 0.1);
    parent.add(hepaFrame, hepaCore, hepaGel);

    // Differential pressure gauges on front
    [-1.0, 0.6].forEach(gx => {
      parent.add(createCyl(0.09, 0.09, 0.04, 16, materials.aluFrame, gx, 0.6, W / 2 + 0.03, Math.PI / 2));
    });
  }

  // F. VRF & SPECIALTIES (VRF-DIS, VRF-IC, DAVLUMBAZ)
  function buildVrfModel(parent, type) {
    if (type === 'vrf-dis') {
      // VRF Outdoor Unit: Hollow tower cabinet with top axial fan & compressors
      const L = 3.2, H = 3.6, W = 2.0;
      parent.add(
        createBox(L, H, 0.04, materials.panelSolid, 0, 0, -W / 2),      // Back
        createBox(L, 0.04, W, materials.panelSolid, 0, H / 2, 0),       // Roof
        createBox(L, 0.12, W, materials.baseSkid, 0, -H / 2, 0),        // Base frame
        createBox(0.04, H - 0.2, W - 0.1, materials.coolingFin, -L / 2, 0.05, 0), // Left coil
        createBox(0.04, H - 0.2, W - 0.1, materials.coolingFin, L / 2, 0.05, 0)   // Right coil
      );
      // Front cutaway service door
      const cDoor = createBox(L - 0.1, H - 0.2, 0.03, materials.panelCutaway, 0, 0.05, W / 2, false, false);
      parent.add(cDoor);
      dynamicCutawayPanels.push(cDoor);

      // Top discharge axial fan with protection cowl
      const topRim = createCyl(0.82, 0.82, 0.22, 28, materials.fanHousing, 0, H / 2 + 0.11, 0, 0, 0, true);
      const topBlades = createCyl(0.72, 0.72, 0.05, 4, materials.fanImpeller, 0, H / 2 + 0.14, 0);
      parent.add(topRim, topBlades);
      animators.push(() => { topBlades.rotation.y += 0.16; });

      // Inverter Scroll Compressors inside
      [-0.6, 0.6].forEach(cx => {
        parent.add(createCyl(0.26, 0.26, 0.9, 16, materials.motorCast, cx, -H / 2 + 0.6, -0.2));
      });
      // Accumulator vessel & oil separator
      parent.add(createCyl(0.22, 0.22, 1.1, 16, materials.motorCast, -1.1, -H / 2 + 0.7, 0.2));
      // Microchannel condenser blue fins along back
      parent.add(createBox(L - 0.2, 2.6, 0.1, materials.coolingFin, 0, 0.2, -W / 2 + 0.08));
      // Service valves
      parent.add(createBox(0.22, 0.18, 0.14, materials.brassGold, 1.1, -H / 2 + 0.4, W / 2 + 0.05));
    } else if (type === 'vrf-ic') {
      // 4-Way Ceiling Cassette Unit: Tilted so the bottom architectural panel & louvers face the viewer!
      const cassetteGroup = new THREE.Group();
      cassetteGroup.rotation.x = -Math.PI + 0.55; // Invert so white decorative fascia faces user
      parent.add(cassetteGroup);

      const cassBody = createBox(2.8, 0.8, 2.8, materials.galvSteel, 0, 0.5, 0);
      const cassFascia = createBox(3.2, 0.08, 3.2, materials.panelSolid, 0, 0.05, 0);
      cassetteGroup.add(cassBody, cassFascia);

      // Center return intake grille with washable mesh
      const centerGrille = createBox(1.6, 0.02, 1.6, materials.filterCloth, 0, 0.02, 0);
      cassetteGroup.add(centerGrille);

      // 4 motorized auto-swing discharge louvers around the perimeter
      [
        [0, 1.35, 0], [0, -1.35, 0], [1.35, 0, Math.PI / 2], [-1.35, 0, Math.PI / 2]
      ].forEach(([lx, lz, rot]) => {
        const louver = createBox(1.7, 0.03, 0.16, materials.doorHandle, lx, 0.01, lz);
        louver.rotation.y = rot;
        cassetteGroup.add(louver);
      });

      // Internal centrifugal turbo fan
      const turboFan = createCyl(0.65, 0.65, 0.35, 20, materials.fanImpeller, 0, 0.5, 0);
      cassetteGroup.add(turboFan);
      animators.push(() => { turboFan.rotation.y += 0.14; });

      // Drain pump & flare connections on side
      cassetteGroup.add(createBox(0.18, 0.22, 0.18, materials.actuatorOrange, 1.3, 0.5, 0.8));
      cassetteGroup.add(createCyl(0.04, 0.04, 0.3, 12, materials.copperPipe, 1.45, 0.5, -0.4, 0, Math.PI / 2));
    } else {
      // Davlumbaz: Commercial kitchen wall/island hood with HOLLOW underside & Ansul Fire Suppression
      const L = 4.6, H = 1.6, W = 2.6;
      // Sloped front visor canopy hood profile
      const hoodRoof = createBox(L, 0.04, W - 0.6, materials.stainless, 0, H / 2, -0.3);
      const hoodBack = createBox(L, H, 0.04, materials.stainless, 0, 0, -W / 2);
      const hoodLeft = createBox(0.04, H, W, materials.stainless, -L / 2, 0, 0);
      const hoodRight = createBox(0.04, H, W, materials.stainless, L / 2, 0, 0);
      // Sloped front visor
      const hoodVisor = createBox(L, 0.9, 0.04, materials.stainless, 0, 0.25, W / 2 - 0.2);
      hoodVisor.rotation.x = 0.5;
      parent.add(hoodRoof, hoodBack, hoodLeft, hoodRight, hoodVisor);

      // Top circular exhaust collar
      parent.add(createCyl(0.55, 0.55, 0.3, 24, materials.stainless, 0, H / 2 + 0.15, -0.3, 0, 0, true));

      // HOLLOW underside: sloped stainless steel baffle grease filters
      for (let f = -L / 2 + 0.6; f <= L / 2 - 0.6; f += 0.75) {
        const baffle = createBox(0.68, 0.04, 1.3, materials.aluFrame, f, -0.2, 0.1);
        baffle.rotation.x = -0.4;
        parent.add(baffle);
      }
      // Perimeter grease drain gutter & collection cup
      parent.add(createCyl(0.1, 0.08, 0.18, 16, materials.stainless, L / 2 - 0.3, -H / 2 - 0.08, W / 2 - 0.2));

      // Ansul R-102 fire suppression stainless steel piping manifold
      parent.add(createCyl(0.02, 0.02, L - 0.6, 12, materials.stainless, 0, -0.05, 0.85, 0, Math.PI / 2));
      // 4 Brass cone spray nozzles aimed downward
      [-1.4, -0.5, 0.5, 1.4].forEach(nx => {
        const noz = createCyl(0.035, 0.02, 0.09, 10, materials.brassGold, nx, -0.12, 0.85);
        parent.add(noz);
      });
      // Emergency red pull station box on hood corner
      parent.add(createBox(0.14, 0.2, 0.08, materials.actuatorOrange, L / 2 + 0.03, -0.3, W / 2 - 0.2));
    }
  }

  // --- 6. ROUTE PRODUCT ID TO MODEL GENERATOR ---
  if (productId === 'tks') {
    buildTksDetailedModel(modelRoot);
  } else if (productId === 'thks') {
    buildThksDetailedModel(modelRoot);
  } else if (productId === 'rooftop') {
    buildRooftopDetailedModel(modelRoot);
  } else if (['thrv-dx', 'hrv'].includes(productId)) {
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
    buildTksDetailedModel(modelRoot);
  }

  // --- 7. AUTO-FIT CAMERA & GROUND TO EXACT MODEL BOUNDING BOX ---
  modelRoot.updateMatrixWorld(true);
  const bbox = new THREE.Box3().setFromObject(modelRoot);
  const size = bbox.getSize(new THREE.Vector3());
  const center = bbox.getCenter(new THREE.Vector3());

  // Center model at origin
  modelRoot.position.sub(center);

  // Position ground & grid just below the model bottom
  const modelBottom = -size.y / 2;
  ground.position.y = modelBottom - 0.05;
  grid.position.y = modelBottom - 0.04;

  // Compute camera distance based on max dimension
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let camDist = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.05;
  camDist = Math.max(camDist, 3.8);
  const defaultCamPos = new THREE.Vector3(camDist * 0.72, camDist * 0.38, camDist * 0.74);
  const defaultTarget = new THREE.Vector3(0, 0, 0);
  camera.position.copy(defaultCamPos);
  camera.lookAt(defaultTarget);
  controls.target.copy(defaultTarget);
  controls.update();

  // Camera smooth tween helper
  let cameraTween = null;
  function tweenCameraTo(targetCamPos, targetLookAt, duration = 650) {
    const startCamPos = camera.position.clone();
    const startLookAt = controls.target.clone();
    const startTime = performance.now();
    cameraTween = {
      update: (now) => {
        const elapsed = now - startTime;
        const t = Math.min(1.0, elapsed / duration);
        // smoothstep easing
        const ease = t * t * (3 - 2 * t);
        camera.position.lerpVectors(startCamPos, targetCamPos, ease);
        controls.target.lerpVectors(startLookAt, targetLookAt, ease);
        controls.update();
        if (t >= 1.0) cameraTween = null;
      }
    };
  }

  // --- 8. AERODYNAMIC CFD AIRFLOW SIMULATION ---
  const cfdGroup = new THREE.Group();
  scene.add(cfdGroup);

  const particleCount = 80;
  const particles = [];
  const pPositions = new Float32Array(particleCount * 3);
  const pColors = new Float32Array(particleCount * 3);

  const isTksProduct = productId === 'tks';
  const isThksProduct = productId === 'thks';
  const isRooftopProduct = productId === 'rooftop';
  const isAhuDual = isTksProduct || isThksProduct;
  const halfLen = Math.max(2.0, size.x / 2 + 0.4);
  const spanY = Math.max(1.0, size.y * 0.45);
  const spanZ = Math.max(1.0, size.z * 0.45);

  for (let i = 0; i < particleCount; i++) {
    const isSupply = isAhuDual ? (i < particleCount * 0.7) : (isRooftopProduct ? (i < particleCount * 0.6) : (i < particleCount * 0.65));
    particles.push({
      isSupply,
      progress: Math.random(),
      speed: (isAhuDual ? 0.006 : 0.005) + Math.random() * 0.004,
      offsetY: (Math.random() - 0.5) * (isAhuDual ? 0.35 : spanY),
      offsetZ: (Math.random() - 0.5) * (isAhuDual ? 0.7 : spanZ)
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
    opacity: 0.85,
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

      if (isAhuDual) {
        if (p.isSupply) {
          // Fresh air: flows from intake (-4.3) along lower deck to discharge (+4.3)
          pos[i * 3] = -4.3 + p.progress * 8.6;
          pos[i * 3 + 1] = -0.65 + Math.sin(p.progress * Math.PI * 4) * 0.08 + p.offsetY;
          pos[i * 3 + 2] = p.offsetZ;
        } else {
          // Exhaust air: flows from return (1.2) through heat wheel/plate to exhaust fan/damper (-4.3)
          pos[i * 3] = 1.2 - p.progress * 5.5;
          pos[i * 3 + 1] = 0.65 + p.offsetY;
          pos[i * 3 + 2] = p.offsetZ;
        }
      } else if (isRooftopProduct) {
        if (p.isSupply) {
          // Indoor treated air stream: from economizer (-0.4) through filter, DX coil, supply fan, down into roof curb (2.3)
          const px = -0.4 + p.progress * 2.8;
          pos[i * 3] = px;
          if (p.progress > 0.8) {
            const dropRatio = (p.progress - 0.8) / 0.2;
            pos[i * 3 + 1] = 0.05 - dropRatio * 1.35 + p.offsetY * 0.4;
          } else {
            pos[i * 3 + 1] = 0.05 + Math.sin(p.progress * Math.PI * 3) * 0.06 + p.offsetY * 0.6;
          }
          pos[i * 3 + 2] = p.offsetZ * 0.7;
        } else {
          // Condenser air: drawn into side coils (-2.5 to -1.0) and exhausted upward through top axial fans
          const fanX = (i % 2 === 0) ? -2.2 : -1.2;
          pos[i * 3] = fanX + Math.sin(i * 1.5 + p.progress * 6.28) * 0.22;
          pos[i * 3 + 1] = -0.2 + p.progress * 2.1;
          pos[i * 3 + 2] = Math.cos(i * 1.5 + p.progress * 6.28) * 0.22;
        }
      } else {
        pos[i * 3] = -halfLen + p.progress * (halfLen * 2);
        pos[i * 3 + 1] = (p.isSupply ? -0.2 : 0.2) + p.offsetY;
        pos[i * 3 + 2] = p.offsetZ;
      }
    }
    pGeo.attributes.position.needsUpdate = true;
  });

  // --- 9. DYNAMIC HOTSPOT PINS GENERATOR ---
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

  // Specific 3D positions for TKS & THKS & ROOFTOP hotspots
  const tksHotspotCoords = [
    [-3.8, 1.1, 1.08],  // 01: İskelet & 50mm Taşyünü Panel
    [-1.8, -0.4, 1.08], // 02: Filtre Hücresi (G4 + F7/F9)
    [0.0, 0.2, 1.08],   // 03: Isı Geri Kazanım Eşanjörü
    [1.3, -0.4, 1.08],  // 04: Isıtma & Soğutma Serpantinleri
    [2.8, -0.4, 1.08],  // 05: Plug Fan & EC Motor Grubu
    [-3.8, -0.5, 1.08]  // 06: Otomasyon & Hava Ayar Damperi
  ];

  const thksHotspotCoords = [
    [-3.6, 1.1, 1.08],  // 01: AISI 304 Paslanmaz Pürüzsüz İç Yüzey
    [-1.8, -0.4, 1.08], // 02: 3 Kademeli Hijyenik Filtrasyon
    [1.3, -0.4, 1.08],  // 03: Hijyenik Paslanmaz Damla Tutucu & Yoğuşma Tavası
    [2.8, -0.4, 1.08]   // 04: EC Plug Fan & Hijyenik Susturucu Hücresi
  ];

  const rooftopHotspotCoords = [
    [-1.8, -0.4, 1.18], // 01: Hermetik Scroll Inverter Kompresör
    [-1.7, 1.32, 0.2],  // 02: Kondenser & Aksiyel Fanlar
    [-0.1, 0.25, 1.18], // 03: Evaporatör & Taze Hava Ekonomizörü
    [2.3, -1.25, 1.18]  // 04: Roof-Curb Kanal Bağlantısı
  ];

  const pinMeshes = [];
  rawHotspots.forEach((h, idx) => {
    const pinAnchor = new THREE.Group();
    let px, py, pz;
    if (isTksProduct && tksHotspotCoords[idx]) {
      [px, py, pz] = tksHotspotCoords[idx];
    } else if (isThksProduct && thksHotspotCoords[idx]) {
      [px, py, pz] = thksHotspotCoords[idx];
    } else if (isRooftopProduct && rooftopHotspotCoords[idx]) {
      [px, py, pz] = rooftopHotspotCoords[idx];
    } else {
      const total = rawHotspots.length;
      const isWideZ = size.z > size.x;
      const majorSpan = isWideZ ? size.z : size.x;
      const majorOffset = (-majorSpan / 2 + 0.4) + (idx / Math.max(1, total - 1)) * (majorSpan - 0.8);
      px = isWideZ ? (size.x / 2 + 0.4) : majorOffset;
      py = (idx % 2 === 0 ? -0.2 : 0.4);
      pz = isWideZ ? majorOffset : (size.z / 2 + 0.4);
    }
    pinAnchor.position.set(px, py, pz);

    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.25, 8),
      new THREE.MeshBasicMaterial({ color: 0x0284c7 })
    );
    stalk.position.y = -0.12;

    const spriteMat = new THREE.SpriteMaterial({
      map: createPinBadgeTexture(h.num || `0${idx + 1}`),
      depthTest: false
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(0.42, 0.42, 1);
    sprite.position.y = 0.05;

    sprite.userData = { hotspot: h, pos: [px, py, pz] };
    pinAnchor.add(stalk, sprite);
    pinsGroup.add(pinAnchor);
    pinAnchor.userData = { hotspot: h, pos: [px, py, pz] };
    pinMeshes.push(sprite);
  });

  // Pin click detection via Raycaster
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onCanvasClick(evt) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((evt.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((evt.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(pinMeshes, true);

    if (intersects.length > 0) {
      let hit = intersects[0].object;
      while (hit.parent && !hit.userData.hotspot) hit = hit.parent;
      if (hit && hit.userData.hotspot) {
        showHotspotCard(hit.userData.hotspot);
        // Smooth camera tween to hotspot
        const pos = hit.userData.pos;
        if (pos) {
          const targetLook = new THREE.Vector3(pos[0], pos[1], pos[2]);
          const targetCam = new THREE.Vector3(pos[0] * 0.8 + 1.2, pos[1] + 0.5, pos[2] + 2.8);
          tweenCameraTo(targetCam, targetLook, 700);
        }
      }
    }
  }
  renderer.domElement.addEventListener('click', onCanvasClick);

  // --- 10. HUD OVERLAY & ACTION DISPATCHER ---
  const state = {
    autoRotate: true,
    cfdEnabled: true,
    cutawayEnabled: true,
    viewMode: '3d'
  };

  injectHudStyles();
  renderHud(container, productData, {
    onToggleRotate: () => {
      state.autoRotate = !state.autoRotate;
      controls.autoRotate = state.autoRotate;
      updateHudButton('btn-rotate', state.autoRotate);
    },
    onToggleCfd: () => {
      state.cfdEnabled = !state.cfdEnabled;
      updateHudButton('btn-cfd', state.cfdEnabled);
    },
    onToggleCutaway: () => {
      state.cutawayEnabled = !state.cutawayEnabled;
      dynamicCutawayPanels.forEach(panel => {
        const sMat = panel.userData.solidMat || materials.panelSolid;
        const cMat = panel.userData.cutawayMat || materials.panelCutaway;
        panel.material = state.cutawayEnabled ? cMat : sMat;
      });
      updateHudButton('btn-cutaway', state.cutawayEnabled);
    },
    onToggleView: () => {
      const stage = container.closest('.sky-vlog-hero') || container.parentElement || container;
      const view2d = stage.querySelector('#sky-product-2d-view') || document.getElementById('sky-product-2d-view');
      const is2dVisible = view2d && window.getComputedStyle(view2d).display !== 'none';
      if (view2d) {
        if (is2dVisible) {
          view2d.style.display = 'none';
          container.style.display = 'block';
          state.viewMode = '3d';
          updateHudButton('btn-view', false);
          onResize();
        } else {
          view2d.style.display = 'flex';
          container.style.display = 'none';
          state.viewMode = '2d';
          updateHudButton('btn-view', true);
        }
      }
    },
    onResetCamera: () => {
      tweenCameraTo(defaultCamPos, defaultTarget, 650);
      window.closeHotspotCard();
    }
  });

  // Set initial HUD button active states to match state
  updateHudButton('btn-rotate', state.autoRotate);
  updateHudButton('btn-cfd', state.cfdEnabled);
  updateHudButton('btn-cutaway', state.cutawayEnabled);
  updateHudButton('btn-view', state.viewMode === '2d');

  // --- 11. ANIMATION & RESIZE LOOPS ---
  let reqId = null;
  function animate() {
    reqId = requestAnimationFrame(animate);
    if (cameraTween) {
      cameraTween.update(performance.now());
    } else {
      controls.update();
    }
    for (let i = 0; i < animators.length; i++) {
      animators[i]();
    }
    renderer.render(scene, camera);
  }
  animate();

  function onResize() {
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight || 480;
    if (w > 0 && h > 0) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
  }
  window.addEventListener('resize', onResize);

  return {
    destroy: () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    }
  };
}

// --- HUD TEMPLATES & UTILS ---
function injectHudStyles() {
  if (document.getElementById('sky-3d-hud-styles')) return;
  const style = document.createElement('style');
  style.id = 'sky-3d-hud-styles';
  style.textContent = `
    .sky-3d-hud-container {
      position: absolute;
      top: 12px;
      left: 14px;
      right: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;
      z-index: 10;
      flex-wrap: wrap;
      gap: 8px;
    }
    .sky-3d-hud-left, .sky-3d-hud-right {
      display: flex;
      gap: 6px;
      align-items: center;
      pointer-events: auto;
    }
    .sky-3d-badge {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border: 1px solid #e2e8f0;
      border-radius: 9999px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .sky-3d-badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #0284c7;
    }
    .sky-3d-btn {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      color: #334155;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .sky-3d-btn:hover {
      background: #f8fafc;
      border-color: #0284c7;
      color: #0284c7;
    }
    .sky-3d-btn.active {
      background: #0284c7;
      border-color: #0284c7;
      color: #ffffff;
    }
    .sky-3d-callout-card {
      position: absolute;
      bottom: 20px;
      right: 20px;
      max-width: 320px;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      border: 1px solid #e2e8f0;
      border-left: 4px solid #0284c7;
      border-radius: 10px;
      padding: 12px 16px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
      z-index: 30;
      pointer-events: auto;
      animation: fadeIn 0.2s ease;
    }
    .sky-3d-callout-num {
      display: inline-block;
      font-size: 11px;
      font-weight: 800;
      color: #0284c7;
      background: #e0f2fe;
      padding: 2px 6px;
      border-radius: 4px;
      margin-bottom: 4px;
    }
    .sky-3d-callout-title {
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .sky-3d-callout-desc {
      font-size: 12px;
      color: #64748b;
      line-height: 1.45;
    }
    .sky-3d-callout-close {
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #94a3b8;
    }
    .sky-3d-callout-close:hover {
      color: #0f172a;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

function renderHud(container, productData, actions) {
  const stage = container.closest('.sky-vlog-hero') || container.parentElement || container;
  let hud = stage.querySelector('.sky-3d-hud-container');
  if (hud) hud.remove();

  hud = document.createElement('div');
  hud.className = 'sky-3d-hud-container';
  hud.innerHTML = `
    <div class="sky-3d-hud-left">
      <div class="sky-3d-badge">
        <span class="sky-3d-badge-dot"></span>
        <span id="sky-product-tag">${productData.title || '3D CAD Dijital İkiz'}</span>
      </div>
      <div class="sky-3d-badge" style="font-weight: 500; font-size: 11px; color: #64748b;">
        360° Çevir • Yakınlaştır • İncele
      </div>
    </div>
    <div class="sky-3d-hud-right">
      <button id="btn-rotate" class="sky-3d-btn" title="Otomatik Döndürmeyi Aç/Kapat">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
        Döndür
      </button>
      <button id="btn-cfd" class="sky-3d-btn" title="Aerodinamik Hava Akışını Aç/Kapat">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Hava Akışı
      </button>
      <button id="btn-cutaway" class="sky-3d-btn" title="Gövdeyi Şeffaf / Katı Yap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
        Şeffaf Gövde
      </button>
      <button id="btn-view" class="sky-3d-btn" title="2D Şema ile 3D Model Arasında Geçiş Yap">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        2D Çizim
      </button>
      <button id="btn-reset" class="sky-3d-btn" title="Varsayılan Kamera Açısına Dön">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        Sıfırla
      </button>
    </div>
  `;
  stage.appendChild(hud);

  // Card element for hotspots
  let card = stage.querySelector('#sky-3d-hotspot-card');
  if (card) card.remove();
  card = document.createElement('div');
  card.id = 'sky-3d-hotspot-card';
  card.className = 'sky-3d-callout-card';
  card.style.display = 'none';
  card.innerHTML = `
    <button class="sky-3d-callout-close" onclick="window.closeHotspotCard()">&times;</button>
    <span id="sky-card-num" class="sky-3d-callout-num">01</span>
    <div id="sky-card-title" class="sky-3d-callout-title">Bileşen Adı</div>
    <div id="sky-card-desc" class="sky-3d-callout-desc">Bileşen teknik detay açıklaması.</div>
  `;
  stage.appendChild(card);

  // Wire buttons
  document.getElementById('btn-rotate').addEventListener('click', actions.onToggleRotate);
  document.getElementById('btn-cfd').addEventListener('click', actions.onToggleCfd);
  document.getElementById('btn-cutaway').addEventListener('click', actions.onToggleCutaway);
  document.getElementById('btn-view').addEventListener('click', actions.onToggleView);
  document.getElementById('btn-reset').addEventListener('click', actions.onResetCamera);
}

function updateHudButton(btnId, isActive) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  if (isActive) btn.classList.add('active');
  else btn.classList.remove('active');
}

window.showHotspotCard = function(hotspot) {
  const card = document.getElementById('sky-3d-hotspot-card');
  if (!card) return;
  document.getElementById('sky-card-num').textContent = hotspot.num || '01';
  document.getElementById('sky-card-title').textContent = hotspot.title || '';
  document.getElementById('sky-card-desc').textContent = hotspot.desc || '';
  card.style.display = 'block';
};

window.closeHotspotCard = function() {
  const card = document.getElementById('sky-3d-hotspot-card');
  if (card) card.style.display = 'none';
};

// Auto-boot on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initSky3DProduct());
} else {
  initSky3DProduct();
}

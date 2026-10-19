import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Sky Group Interactive 3D Product Digital Twin — TKS Standart Klima Santrali
 * High-fidelity, engineering-accurate cutaway 3D CAD model featuring:
 * - Full structural aluminum frame & double-wall insulated sandwich casing
 * - Transparent cutaway acrylic front with inspection doors and industrial latches
 * - Heavy galvanized C-channel base skid with forklift pockets & lifting lugs
 * - Multi-blade aerodynamic intake & exhaust dampers with Belimo servomotor actuators
 * - G4 cassette pre-filter & F7/F9 pocket bag filter banks with differential pressure gauges
 * - Rotating hygroscopic thermal recovery wheel with honeycomb matrix & drive belt
 * - Multi-row chilled & hot water finned-tube serpentines with copper manifold headers & drain pan
 * - Dual direct-drive EC plug fans with backward-curved impellers & vibration isolators
 * - Industrial DDC control cabinet with wiring conduits & digital status display
 * - Aerodynamic CFD airflow particle simulation (Fresh supply stream & return exhaust stream)
 * - OrbitControls (360° rotate, zoom, pan), 6 interactive component inspection pins, and mode toggles
 */

export function initSky3DProduct(containerId = 'sky-product-3d-canvas') {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const productId = container.getAttribute('data-product') || 'tks';
  const isHygienic = productId === 'thks';

  // Clear any existing contents
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // --- 1. SCENE, CAMERA & RENDERER SETUP ---
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const width = container.clientWidth || 900;
  const height = container.clientHeight || 480;
  
  const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
  // Optimal architectural cutaway 3/4 isometric perspective
  camera.position.set(9.5, 4.2, 7.8);

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
  controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below floor
  controls.minDistance = 3.5;
  controls.maxDistance = 24.0;
  controls.target.set(0.0, 0.0, 0.0);
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
      if (state.autoRotate) {
        controls.autoRotate = true;
      }
    }, 6000);
  };

  renderer.domElement.addEventListener('pointerdown', pauseAutoRotate);
  renderer.domElement.addEventListener('wheel', pauseAutoRotate, { passive: true });
  renderer.domElement.addEventListener('touchstart', pauseAutoRotate, { passive: true });

  // --- 3. LIGHTING (STUDIO ENGINEERING SETUP) ---
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

  // Subtle contact shadow floor
  const groundGeo = new THREE.PlaneGeometry(30, 30);
  const groundMat = new THREE.ShadowMaterial({ opacity: 0.12 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.55;
  ground.receiveShadow = true;
  scene.add(ground);

  // Subtle studio grid on floor
  const grid = new THREE.GridHelper(24, 24, 0xe2e8f0, 0xf1f5f9);
  grid.position.y = -1.54;
  scene.add(grid);

  // --- 4. MODEL HIERARCHY & MATERIALS ---
  const ahuGroup = new THREE.Group();
  scene.add(ahuGroup);

  // Material Library
  const materials = {
    aluFrame: new THREE.MeshStandardMaterial({
      color: 0xd4d8dd,
      metalness: 0.75,
      roughness: 0.3,
      name: 'AluFrame'
    }),
    galvSteel: new THREE.MeshStandardMaterial({
      color: 0xc4cdd5,
      metalness: 0.65,
      roughness: 0.45,
      name: 'GalvSteel'
    }),
    baseSkid: new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.8,
      roughness: 0.35,
      name: 'BaseSkid'
    }),
    panelSolid: new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.15,
      roughness: 0.4,
      name: 'PanelSolid'
    }),
    panelCutaway: new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.22,
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45,
      name: 'PanelCutaway'
    }),
    fanHousing: new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.5,
      roughness: 0.35,
      name: 'FanHousing'
    }),
    fanImpeller: new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.7,
      roughness: 0.25,
      name: 'FanImpeller'
    }),
    motorCast: new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3,
      name: 'MotorCast'
    }),
    copperPipe: new THREE.MeshStandardMaterial({
      color: 0xb45309,
      metalness: 0.85,
      roughness: 0.25,
      name: 'CopperPipe'
    }),
    coolingFin: new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.55,
      roughness: 0.4,
      name: 'CoolingFin'
    }),
    heatingFin: new THREE.MeshStandardMaterial({
      color: 0xf87171,
      metalness: 0.55,
      roughness: 0.4,
      name: 'HeatingFin'
    }),
    rotorWheel: new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.7,
      roughness: 0.35,
      name: 'RotorWheel'
    }),
    filterCloth: new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.9,
      metalness: 0.05,
      name: 'FilterCloth'
    }),
    damperBlade: new THREE.MeshStandardMaterial({
      color: 0xa1a1aa,
      metalness: 0.8,
      roughness: 0.3,
      name: 'DamperBlade'
    }),
    actuatorOrange: new THREE.MeshStandardMaterial({
      color: 0xea580c,
      metalness: 0.3,
      roughness: 0.4,
      name: 'ActuatorOrange'
    }),
    drainPan: new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.9,
      roughness: 0.2,
      name: 'DrainPan'
    }),
    doorHandle: new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.7,
      roughness: 0.3,
      name: 'DoorHandle'
    })
  };

  // Dimensions of AHU
  // Length: 8.8m, Height: 2.8m, Width: 2.2m (scaled to Three.js units)
  const L = 7.6;
  const H = 2.6;
  const W = 2.0;
  const halfL = L / 2;
  const halfH = H / 2;
  const halfW = W / 2;

  // Track dynamic animated parts
  const animators = [];
  const dynamicCutawayPanels = [];

  // Helper for adding simple box mesh
  function createBox(w, h, d, mat, x, y, z, cast = true, receive = true) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  }

  // Helper for cylinder
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

  // --- 5. BUILD BASE SKID (GALVANIZED C-CHANNEL SKID WITH FORKLIFT POCKETS) ---
  const skidGroup = new THREE.Group();
  ahuGroup.add(skidGroup);

  const skidBeamH = 0.24;
  const skidY = -halfH - skidBeamH / 2;

  // Two longitudinal side beams
  const skidBeamFront = createBox(L + 0.3, skidBeamH, 0.12, materials.baseSkid, 0, skidY, halfW - 0.06);
  const skidBeamBack = createBox(L + 0.3, skidBeamH, 0.12, materials.baseSkid, 0, skidY, -halfW + 0.06);
  skidGroup.add(skidBeamFront, skidBeamBack);

  // 6 Transverse cross beams
  const crossBeamXs = [-halfL, -halfL * 0.6, -halfL * 0.2, halfL * 0.2, halfL * 0.6, halfL];
  crossBeamXs.forEach(cx => {
    const cross = createBox(0.12, skidBeamH, W - 0.24, materials.baseSkid, cx, skidY, 0);
    skidGroup.add(cross);
  });

  // Forklift pocket openings (visual rectangular collars)
  [-1.6, 1.6].forEach(fx => {
    const pocketFront = createBox(0.36, 0.14, 0.14, materials.aluFrame, fx, skidY, halfW - 0.05);
    skidGroup.add(pocketFront);
  });

  // 4 Corner lifting lugs with holes
  [[-halfL - 0.1, -halfW + 0.06], [-halfL - 0.1, halfW - 0.06], [halfL + 0.1, -halfW + 0.06], [halfL + 0.1, halfW - 0.06]].forEach(([lx, lz]) => {
    const lug = createBox(0.08, 0.32, 0.08, materials.baseSkid, lx, skidY + 0.06, lz);
    skidGroup.add(lug);
  });

  // --- 6. BUILD ALUMINUM CARCASS FRAMEWORK (50mm PROFILES & PILLARS) ---
  const frameGroup = new THREE.Group();
  ahuGroup.add(frameGroup);

  const pSize = 0.08; // 50mm - 80mm profile width

  // 4 Main Horizontal Longitudes (Top & Bottom, Front & Back)
  const beamBotFront = createBox(L, pSize, pSize, materials.aluFrame, 0, -halfH + pSize / 2, halfW - pSize / 2);
  const beamBotBack = createBox(L, pSize, pSize, materials.aluFrame, 0, -halfH + pSize / 2, -halfW + pSize / 2);
  const beamTopFront = createBox(L, pSize, pSize, materials.aluFrame, 0, halfH - pSize / 2, halfW - pSize / 2);
  const beamTopBack = createBox(L, pSize, pSize, materials.aluFrame, 0, halfH - pSize / 2, -halfW + pSize / 2);
  frameGroup.add(beamBotFront, beamBotBack, beamTopFront, beamTopBack);

  // Central Longitudinal Separator Beam (Double Deck Divider Floor)
  const deckY = 0.0;
  const beamMidFront = createBox(L, pSize, pSize, materials.aluFrame, 0, deckY, halfW - pSize / 2);
  const beamMidBack = createBox(L, pSize, pSize, materials.aluFrame, 0, deckY, -halfW + pSize / 2);
  frameGroup.add(beamMidFront, beamMidBack);

  // Vertical Modular Posts (Corner & Division Uprights)
  const postXs = [-halfL + pSize / 2, -2.2, -0.9, 0.9, 2.3, halfL - pSize / 2];
  postXs.forEach(px => {
    // Front post
    const postFront = createBox(pSize, H, pSize, materials.aluFrame, px, 0, halfW - pSize / 2);
    // Back post
    const postBack = createBox(pSize, H, pSize, materials.aluFrame, px, 0, -halfW + pSize / 2);
    // Transverse top and bottom ties
    const tieTop = createBox(pSize, pSize, W - pSize * 2, materials.aluFrame, px, halfH - pSize / 2, 0);
    const tieMid = createBox(pSize, pSize, W - pSize * 2, materials.aluFrame, px, deckY, 0);
    const tieBot = createBox(pSize, pSize, W - pSize * 2, materials.aluFrame, px, -halfH + pSize / 2, 0);
    frameGroup.add(postFront, postBack, tieTop, tieMid, tieBot);
  });

  // Solid Double-Deck Galvanized Divider Deck (except at rotary wheel center)
  const deckPlateLeft = createBox(2.8, 0.04, W - 0.16, materials.galvSteel, -2.4, deckY, 0);
  const deckPlateRight = createBox(2.8, 0.04, W - 0.16, materials.galvSteel, 2.4, deckY, 0);
  frameGroup.add(deckPlateLeft, deckPlateRight);

  // Solid Enclosing Back Wall & Roof & Floor Panels
  const backWall = createBox(L - 0.1, H - 0.1, 0.05, materials.panelSolid, 0, 0, -halfW + 0.04);
  const roofPanel = createBox(L - 0.1, 0.05, W - 0.1, materials.panelSolid, 0, halfH - 0.03, 0);
  const floorPanel = createBox(L - 0.1, 0.05, W - 0.1, materials.panelSolid, 0, -halfH + 0.03, 0);
  const rightEndWall = createBox(0.05, H - 0.1, W - 0.1, materials.panelSolid, halfL - 0.03, 0, 0);
  frameGroup.add(backWall, roofPanel, floorPanel, rightEndWall);

  // --- 7. FRONT CASING: CUTAWAY TRANSPARENT ACRYLIC SHELL WITH SERVICE DOORS ---
  const casingGroup = new THREE.Group();
  ahuGroup.add(casingGroup);

  // Service Door Modules along front face
  const frontSections = [
    { x1: -halfL + pSize, x2: -2.2, label: 'Damper & Filtre' },
    { x1: -2.2, x2: -0.9, label: 'Ön Filtre Hücresi' },
    { x1: -0.9, x2: 0.9, label: 'Rotor Bölmesi' },
    { x1: 0.9, x2: 2.3, label: 'Serpantin Hücresi' },
    { x1: 2.3, x2: halfL - pSize, label: 'Fan & Motor' }
  ];

  frontSections.forEach((sec, idx) => {
    const secW = (sec.x2 - sec.x1) - 0.04;
    const secCenterX = (sec.x1 + sec.x2) / 2;

    // Lower Deck Door
    const doorLower = createBox(secW, halfH - 0.1, 0.03, materials.panelCutaway, secCenterX, -halfH / 2, halfW - 0.02, false, false);
    // Upper Deck Door
    const doorUpper = createBox(secW, halfH - 0.1, 0.03, materials.panelCutaway, secCenterX, halfH / 2, halfW - 0.02, false, false);
    
    casingGroup.add(doorLower, doorUpper);
    dynamicCutawayPanels.push(doorLower, doorUpper);

    // Industrial black latches/handles on each door
    [-0.35, 0.35].forEach(dy => {
      const handle = createBox(0.04, 0.12, 0.04, materials.doorHandle, sec.x2 - 0.08, dy, halfW + 0.01);
      casingGroup.add(handle);
    });

    // Glass inspection porthole ring on upper & lower door
    [-halfH / 2 + 0.1, halfH / 2 - 0.1].forEach(portholeY => {
      const ring = createCyl(0.12, 0.12, 0.04, 16, materials.aluFrame, secCenterX, portholeY, halfW, Math.PI / 2);
      casingGroup.add(ring);
    });
  });

  // --- 8. SECTION 1: INTAKE & EXHAUST MULTI-BLADE DAMPERS (LEFT END) ---
  const damperGroup = new THREE.Group();
  ahuGroup.add(damperGroup);

  function createDamperSection(yCenter, hTotal, isIntake) {
    const dGroup = new THREE.Group();
    // Flange collar
    const flange = createBox(0.08, hTotal, W - 0.3, materials.aluFrame, -halfL - 0.04, yCenter, 0);
    dGroup.add(flange);

    // 4 Aerodynamic Louver Blades
    const bladeCount = 4;
    const bladePitch = (hTotal - 0.2) / bladeCount;
    for (let b = 0; b < bladeCount; b++) {
      const by = yCenter - (hTotal - 0.2) / 2 + (b + 0.5) * bladePitch;
      const blade = createBox(0.12, 0.02, W - 0.38, materials.damperBlade, -halfL - 0.04, by, 0);
      blade.rotation.z = Math.PI / 6; // Slight open angle 30°
      dGroup.add(blade);
    }

    // Belimo Actuator Servomotor Box mounted on front side
    const actuator = createBox(0.14, 0.18, 0.12, materials.actuatorOrange, -halfL - 0.04, yCenter, halfW + 0.05);
    const actKnob = createCyl(0.03, 0.03, 0.04, 12, materials.motorCast, -halfL - 0.04, yCenter, halfW + 0.12, Math.PI / 2);
    dGroup.add(actuator, actKnob);

    return dGroup;
  }

  // Lower Intake Damper
  const damperIntake = createDamperSection(-halfH / 2, halfH - 0.2, true);
  // Upper Exhaust Damper
  const damperExhaust = createDamperSection(halfH / 2, halfH - 0.2, false);
  damperGroup.add(damperIntake, damperExhaust);

  // --- 9. SECTION 2: FILTER SECTION (POCKET BAG FILTERS & G4 CASSETTE) ---
  const filterGroup = new THREE.Group();
  ahuGroup.add(filterGroup);

  // Lower Deck: 4 Deep Pocket Bag Filters (F7/F9 EU7)
  const pocketFrame = createBox(0.06, halfH - 0.25, W - 0.3, materials.aluFrame, -2.1, -halfH / 2, 0);
  filterGroup.add(pocketFrame);

  // 4 Wedge/Pocket Bags extending to the right
  const bagCount = 4;
  const bagW = (W - 0.4) / bagCount;
  for (let bi = 0; bi < bagCount; bi++) {
    const bz = -halfW + 0.25 + (bi + 0.5) * bagW;
    // Tapered wedge pocket geometry
    const bagGeo = new THREE.ConeGeometry(bagW * 0.45, 0.75, 4);
    bagGeo.rotateZ(-Math.PI / 2);
    const bagMesh = new THREE.Mesh(bagGeo, materials.filterCloth);
    bagMesh.position.set(-1.7, -halfH / 2, bz);
    bagMesh.scale.set(1.0, 1.4, 0.8);
    filterGroup.add(bagMesh);
  }

  // Upper Deck: G4 Metal Wire Mesh Cassette Filter
  const upperFilterFrame = createBox(0.06, halfH - 0.25, W - 0.3, materials.aluFrame, -2.1, halfH / 2, 0);
  const upperFilterMesh = createBox(0.04, halfH - 0.3, W - 0.36, materials.damperBlade, -2.1, halfH / 2, 0);
  filterGroup.add(upperFilterFrame, upperFilterMesh);

  // Differential Pressure Magnehelic Gauge on Front Post
  const gaugeBody = createCyl(0.09, 0.09, 0.04, 16, materials.aluFrame, -2.2, deckY + 0.3, halfW + 0.03, Math.PI / 2);
  const gaugeFace = createCyl(0.075, 0.075, 0.042, 16, materials.panelSolid, -2.2, deckY + 0.3, halfW + 0.03, Math.PI / 2);
  filterGroup.add(gaugeBody, gaugeFace);

  // Sensing tubes (black rubber conduits across filter frame)
  const tubeMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
  const tube1 = createCyl(0.008, 0.008, 0.4, 8, tubeMat, -2.1, deckY + 0.15, halfW + 0.02);
  filterGroup.add(tube1);

  // --- 10. SECTION 3: ROTARY THERMAL RECOVERY WHEEL (DÖNER ISI EŞANJÖRÜ) ---
  const rotorGroup = new THREE.Group();
  ahuGroup.add(rotorGroup);

  // Outer Wheel Casing Framework
  const rotorCasing = createBox(0.45, H - 0.2, W - 0.2, materials.galvSteel, 0, 0, 0);
  rotorCasing.visible = false; // Internal visual reference

  // Central Vertical Mounting Plate with Purge Sector
  const purgePlate = createBox(0.04, 0.35, W - 0.25, materials.galvSteel, 0, 0, 0);
  rotorGroup.add(purgePlate);

  // Rotating Wheel Assembly (spans across lower & upper decks!)
  const wheelAssembly = new THREE.Group();
  wheelAssembly.position.set(0, 0, 0);
  rotorGroup.add(wheelAssembly);

  const wheelRadius = 1.05;
  const wheelDepth = 0.28;

  // Outer rim
  const wheelRim = createCyl(wheelRadius, wheelRadius, wheelDepth, 32, materials.aluFrame, 0, 0, 0, 0, Math.PI / 2);
  wheelAssembly.add(wheelRim);

  // Internal Honeycomb Wheel Cylinder Matrix
  const wheelCore = createCyl(wheelRadius - 0.04, wheelRadius - 0.04, wheelDepth - 0.02, 28, materials.rotorWheel, 0, 0, 0, 0, Math.PI / 2);
  wheelAssembly.add(wheelCore);

  // Central Hub
  const wheelHub = createCyl(0.2, 0.2, wheelDepth + 0.06, 16, materials.baseSkid, 0, 0, 0, 0, Math.PI / 2);
  wheelAssembly.add(wheelHub);

  // 12 Radial Spokes across the wheel
  for (let s = 0; s < 12; s++) {
    const ang = (s / 12) * Math.PI * 2;
    const spoke = createBox(0.03, wheelRadius * 1.9, 0.02, materials.aluFrame, 0, 0, 0);
    spoke.rotation.x = ang;
    wheelAssembly.add(spoke);
  }

  // Drive motor mounted on top of rotor casing
  const rotorMotor = createBox(0.18, 0.22, 0.18, materials.motorCast, 0, halfH - 0.25, 0.6);
  const rotorBelt = createBox(0.04, 0.45, 0.02, materials.doorHandle, 0, halfH - 0.45, 0.6);
  rotorGroup.add(rotorMotor, rotorBelt);

  // Continuous rotation of the wheel
  animators.push(() => {
    wheelAssembly.rotation.x += 0.008;
  });

  // --- 11. SECTION 4: HEATING & COOLING COILS (SERPANTİNLER & DRAIN PAN) ---
  const coilGroup = new THREE.Group();
  ahuGroup.add(coilGroup);

  const coilY = -halfH / 2;
  const coilH = halfH - 0.3;
  const coilW = W - 0.35;

  // 1. Chilled Water Cooling Coil (Soğutma Bataryası)
  const coolFinBlock = createBox(0.28, coilH, coilW, materials.coolingFin, 1.35, coilY, 0);
  coilGroup.add(coolFinBlock);

  // Vertical Copper Headers (Manifold boruları)
  const coolHeaderIn = createCyl(0.035, 0.035, coilH + 0.1, 12, materials.copperPipe, 1.35, coilY, halfW - 0.25);
  const coolHeaderOut = createCyl(0.035, 0.035, coilH + 0.1, 12, materials.copperPipe, 1.35, coilY, halfW - 0.15);
  // Connection flanges protruding outside
  const coolFlangeIn = createCyl(0.06, 0.06, 0.12, 12, materials.copperPipe, 1.35, coilY + 0.3, halfW, Math.PI / 2);
  const coolFlangeOut = createCyl(0.06, 0.06, 0.12, 12, materials.copperPipe, 1.35, coilY - 0.3, halfW, Math.PI / 2);
  coilGroup.add(coolHeaderIn, coolHeaderOut, coolFlangeIn, coolFlangeOut);

  // 2. Hot Water Heating Coil (Isıtma Bataryası)
  const heatFinBlock = createBox(0.22, coilH, coilW, materials.heatingFin, 1.85, coilY, 0);
  const heatHeaderIn = createCyl(0.03, 0.03, coilH + 0.08, 12, materials.copperPipe, 1.85, coilY, halfW - 0.25);
  const heatHeaderOut = createCyl(0.03, 0.03, coilH + 0.08, 12, materials.copperPipe, 1.85, coilY, halfW - 0.15);
  coilGroup.add(heatFinBlock, heatHeaderIn, heatHeaderOut);

  // Droplet Eliminator (Damla Tutucu) behind cooling coil
  const dropElim = createBox(0.08, coilH, coilW, materials.damperBlade, 1.55, coilY, 0);
  coilGroup.add(dropElim);

  // Stainless Steel Condensate Drain Pan (Yoğuşma Tavası) underneath coils
  const drainPan = createBox(0.95, 0.08, coilW + 0.1, materials.drainPan, 1.6, -halfH + 0.12, 0);
  const drainPipe = createCyl(0.025, 0.025, 0.22, 10, materials.drainPan, 1.6, -halfH + 0.08, halfW - 0.1, Math.PI / 2);
  coilGroup.add(drainPan, drainPipe);

  // --- 12. SECTION 5: EC PLUG FANS & MOTORS ---
  const fanGroup = new THREE.Group();
  ahuGroup.add(fanGroup);

  function createECPlugFan(xPos, yPos, zPos, scale = 1.0) {
    const fGroup = new THREE.Group();
    fGroup.position.set(xPos, yPos, zPos);

    // Motor Base Skid & Vibration Springs
    const fanBase = createBox(0.6 * scale, 0.04, 0.6 * scale, materials.galvSteel, 0, -0.45 * scale, 0);
    fGroup.add(fanBase);

    [-0.22 * scale, 0.22 * scale].forEach(sx => {
      [-0.22 * scale, 0.22 * scale].forEach(sz => {
        const spring = createCyl(0.03 * scale, 0.03 * scale, 0.1 * scale, 8, materials.aluFrame, sx, -0.4 * scale, sz);
        fGroup.add(spring);
      });
    });

    // Aerodynamic Bellmouth Inlet Nozzle Ring
    const bellmouth = createCyl(0.42 * scale, 0.35 * scale, 0.12 * scale, 24, materials.fanHousing, -0.25 * scale, 0, 0, 0, Math.PI / 2);
    fGroup.add(bellmouth);

    // Brushless EC Motor Housing (Permanent Magnet Hub)
    const ecMotor = createCyl(0.18 * scale, 0.18 * scale, 0.32 * scale, 16, materials.motorCast, 0.18 * scale, 0, 0, 0, Math.PI / 2);
    // Terminal box on motor
    const termBox = createBox(0.12 * scale, 0.1 * scale, 0.1 * scale, materials.fanHousing, 0.18 * scale, 0.18 * scale, 0);
    fGroup.add(ecMotor, termBox);

    // Rotating Impeller (7 Backward Curved Radial Blades)
    const impellerGroup = new THREE.Group();
    impellerGroup.position.set(-0.05 * scale, 0, 0);
    fGroup.add(impellerGroup);

    // Impeller backplate & cone
    const backplate = createCyl(0.38 * scale, 0.38 * scale, 0.04 * scale, 24, materials.fanImpeller, 0, 0, 0, 0, Math.PI / 2);
    impellerGroup.add(backplate);

    for (let b = 0; b < 7; b++) {
      const theta = (b / 7) * Math.PI * 2;
      const bladeGeo = new THREE.BoxGeometry(0.03 * scale, 0.14 * scale, 0.16 * scale);
      const blade = new THREE.Mesh(bladeGeo, materials.fanImpeller);
      blade.position.set(0, Math.cos(theta) * 0.24 * scale, Math.sin(theta) * 0.24 * scale);
      blade.rotation.x = theta + 0.4;
      impellerGroup.add(blade);
    }

    // Animation: High-speed rotation of impeller
    animators.push(() => {
      impellerGroup.rotation.x += 0.12;
    });

    return fGroup;
  }

  // Lower Supply EC Plug Fan (High pressure)
  const supplyFan = createECPlugFan(3.0, -halfH / 2 + 0.1, 0, 1.15);
  // Upper Exhaust EC Plug Fan
  const exhaustFan = createECPlugFan(-1.2, halfH / 2 - 0.05, 0, 0.95);
  fanGroup.add(supplyFan, exhaustFan);

  // Flexible canvas collar at supply discharge (Right face)
  const canvasCollar = createBox(0.08, halfH - 0.3, W - 0.4, materials.actuatorOrange, halfL + 0.02, -halfH / 2, 0);
  fanGroup.add(canvasCollar);

  // --- 13. SECTION 6: DDC CONTROL CABINET & INDUSTRIAL CABLING ---
  const controlGroup = new THREE.Group();
  ahuGroup.add(controlGroup);

  // Industrial Control Box on front post
  const ddcPanel = createBox(0.32, 0.55, 0.18, materials.motorCast, 2.3, deckY + 0.35, halfW + 0.09);
  // Screen / Display window
  const ddcScreen = createBox(0.18, 0.12, 0.02, materials.coolingFin, 2.3, deckY + 0.45, halfW + 0.185);
  // Emergency stop rotary switch
  const emgSwitch = createCyl(0.03, 0.03, 0.03, 12, materials.actuatorOrange, 2.3, deckY + 0.22, halfW + 0.19, Math.PI / 2);
  controlGroup.add(ddcPanel, ddcScreen, emgSwitch);

  // Flexible electrical conduits running to motors & dampers
  const conduitMat = new THREE.MeshBasicMaterial({ color: 0x334155 });
  const conduit1 = createCyl(0.012, 0.012, 0.6, 8, conduitMat, 2.3, deckY + 0.05, halfW + 0.04);
  controlGroup.add(conduit1);

  // --- 14. AERODYNAMIC CFD AIRFLOW SIMULATION (BLUE FRESH AIR & RED RETURN AIR) ---
  const cfdGroup = new THREE.Group();
  ahuGroup.add(cfdGroup);

  const particleCount = 120;
  const particles = [];

  // Procedural soft circle glow texture for CFD particles
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.3, 'rgba(2, 132, 199, 0.8)');
  grad.addColorStop(0.7, 'rgba(2, 132, 199, 0.2)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 32, 32);
  const particleTex = new THREE.CanvasTexture(canvas);

  const particleMat = new THREE.PointsMaterial({
    size: 0.14,
    map: particleTex,
    transparent: true,
    opacity: 0.8,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const pPositions = new Float32Array(particleCount * 3);
  const pColors = new Float32Array(particleCount * 3);

  // Initialize particles along 2 pathways:
  // Stream 1 (Fresh Supply Air - Blue): Enters left lower damper -> filters -> rotor -> coils -> supply fan -> discharge
  // Stream 2 (Exhaust Air - Warm/Orange): Enters top deck -> filter -> rotor -> exhaust fan -> discharge
  for (let i = 0; i < particleCount; i++) {
    const isSupply = i < particleCount * 0.65;
    const progress = Math.random();
    particles.push({
      isSupply,
      progress,
      speed: 0.004 + Math.random() * 0.003,
      offsetY: (Math.random() - 0.5) * 0.6,
      offsetZ: (Math.random() - 0.5) * 1.2
    });

    // Initial color
    if (isSupply) {
      pColors[i * 3] = 0.02;     // R
      pColors[i * 3 + 1] = 0.65; // G
      pColors[i * 3 + 2] = 0.98; // B
    } else {
      pColors[i * 3] = 0.95;     // R
      pColors[i * 3 + 1] = 0.45; // G
      pColors[i * 3 + 2] = 0.12; // B
    }
  }

  const pGeometry = new THREE.BufferGeometry();
  pGeometry.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  pGeometry.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
  const particleSystem = new THREE.Points(pGeometry, particleMat);
  cfdGroup.add(particleSystem);

  animators.push(() => {
    if (!state.cfdEnabled) {
      cfdGroup.visible = false;
      return;
    }
    cfdGroup.visible = true;

    const pos = pGeometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.progress += p.speed;
      if (p.progress > 1.0) p.progress = 0.0;

      let px, py, pz;
      if (p.isSupply) {
        // Supply air path from x = -halfL to +halfL
        px = -halfL + p.progress * (L + 0.3);
        py = -halfH / 2 + p.offsetY;
        pz = p.offsetZ;
      } else {
        // Exhaust air path in upper deck from x = 1.0 to -halfL
        px = 1.5 - p.progress * (L * 0.7);
        py = halfH / 2 + p.offsetY;
        pz = p.offsetZ;
      }

      pos[i * 3] = px;
      pos[i * 3 + 1] = py;
      pos[i * 3 + 2] = pz;
    }
    pGeometry.attributes.position.needsUpdate = true;
  });

  // --- 15. INTERACTIVE 3D HOTSPOT PINS ---
  const pinsGroup = new THREE.Group();
  ahuGroup.add(pinsGroup);

  const hotspots = [
    {
      id: 'damper',
      num: '01',
      title: 'Hava Ayar Damperi',
      pos: [-halfL + 0.2, -halfH / 2 + 0.2, halfW + 0.25],
      desc: isHygienic 
        ? 'DIN 1946-4 normunda, sızdırmaz contalı, antibakteriyel kasetli ve Belimo oransal servomotorlu taze hava damperi.'
        : 'EN 1751 Class 4 sızdırmazlık normunda, aerodinamik alüminyum kanatlı ve Belimo oransal servomotorlu taze hava damperi.'
    },
    {
      id: 'filter',
      num: '02',
      title: isHygienic ? 'H14 HEPA Sızdırmaz Filtre' : 'G4 + F7/F9 Filtre Hücresi',
      pos: [-1.8, -halfH / 2 + 0.4, halfW + 0.25],
      desc: isHygienic
        ? 'EN 1822 normunda %99.995 sızdırmazlıkta jel contalı H14 HEPA filtre hücresi ve aerosol DOP test portları.'
        : 'ISO 16890 / EN 779 standartlarında yüksek toz tutma kapasiteli sentetik torba filtre ve diferansiyel manometre izleme.'
    },
    {
      id: 'rotor',
      num: '03',
      title: isHygienic ? 'Epoksi Kaplı Isı Geri Kazanım' : 'Döner Isı Geri Kazanım Rotoru',
      pos: [0.0, 0.4, halfW + 0.25],
      desc: isHygienic
        ? 'VDI 6022 hijyen standartlarına uygun, çapraz bulaşmasız epoksi kaplamalı hava ayrıştırmalı ısı geri kazanım eşanjörü.'
        : '%82-85 ısıl verimlilikte higroskopik alüminyum petek rotor. Egzoz havasının gizli ve duyulur enerjisini taze havaya aktarır.'
    },
    {
      id: 'coil',
      num: '04',
      title: isHygienic ? 'AISI 304 Paslanmaz Serpantin' : 'Isıtma & Soğutma Serpantinleri',
      pos: [1.6, -halfH / 2 + 0.3, halfW + 0.25],
      desc: isHygienic
        ? 'AISI 304 paslanmaz çelik kasetli, hidrofilik antibakteriyel lamelli ve sökülebilir eğimli yoğuşma tavalı batarya.'
        : 'Dikişsiz bakır boru ve hidrofilik alüminyum lameller. 25 bar basınç testli, paslanmaz yoğuşma tavalı ve damla tutuculu.'
    },
    {
      id: 'fan',
      num: '05',
      title: 'EC Plug Fan & Motor',
      pos: [3.0, -halfH / 2 + 0.4, halfW + 0.25],
      desc: 'Geriye eğik kanatlı radyal alüminyum çark, fırçasız EC daimi mıknatıslı motor ve titreşim sönümleyici yaylı izolatörler.'
    },
    {
      id: 'panel',
      num: '06',
      title: 'Otomasyon & Kumanda Panosu',
      pos: [2.3, deckY + 0.65, halfW + 0.25],
      desc: 'IP55 sızdırmaz korumalı DDC mikroişlemcili pano, BACnet/Modbus bina otomasyonu entegrasyonu ve dijital durum ekranı.'
    }
  ];

  function createPinBadgeTexture(numStr) {
    const cvs = document.createElement('canvas');
    cvs.width = 64;
    cvs.height = 64;
    const c = cvs.getContext('2d');
    c.fillStyle = '#0284c7';
    c.beginPath();
    c.arc(32, 32, 28, 0, Math.PI * 2);
    c.fill();
    c.lineWidth = 4;
    c.strokeStyle = '#ffffff';
    c.stroke();
    c.fillStyle = '#ffffff';
    c.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(numStr, 32, 33);
    const tex = new THREE.CanvasTexture(cvs);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  const pinMeshes = [];

  hotspots.forEach(h => {
    const pinAnchor = new THREE.Group();
    pinAnchor.position.set(...h.pos);

    // Stalk line
    const stalkGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.25, 8);
    const stalkMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const stalk = new THREE.Mesh(stalkGeo, stalkMat);
    stalk.position.y = -0.12;

    // Sprite badge
    const badgeMat = new THREE.SpriteMaterial({
      map: createPinBadgeTexture(h.num),
      depthTest: false
    });
    const sprite = new THREE.Sprite(badgeMat);
    sprite.scale.set(0.32, 0.32, 1);
    sprite.position.y = 0.05;
    sprite.userData = { hotspot: h };

    pinAnchor.add(stalk, sprite);
    pinAnchor.userData = { hotspot: h };
    pinsGroup.add(pinAnchor);
    pinMeshes.push(sprite);
  });

  // Pulse animation for pins
  animators.push(() => {
    const t = Date.now() * 0.003;
    const s = 0.32 + Math.sin(t) * 0.025;
    pinMeshes.forEach(p => {
      p.scale.set(s, s, 1);
    });
  });

  // Raycasting for pin interaction
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onPointerClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(pinsGroup.children, true);

    if (intersects.length > 0) {
      let hitObj = intersects[0].object;
      while (hitObj.parent && !hitObj.userData.hotspot) {
        hitObj = hitObj.parent;
      }
      if (hitObj && hitObj.userData.hotspot) {
        showHotspotCard(hitObj.userData.hotspot);
        // Animate camera focus smoothly
        focusCamera(hitObj.userData.hotspot.pos);
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

  // --- 16. STATE & UI CONTROLS ---
  const state = {
    autoRotate: true,
    cfdEnabled: true,
    isCutaway: true,
    isExploded: false
  };

  function setCutawayMode(transparent) {
    state.isCutaway = transparent;
    dynamicCutawayPanels.forEach(p => {
      p.material = transparent ? materials.panelCutaway : materials.panelSolid;
    });
  }

  function setExplodedMode(exploded) {
    state.isExploded = exploded;
    const targetZ = exploded ? halfW + 0.8 : halfW - 0.02;
    dynamicCutawayPanels.forEach(p => {
      p.position.z = targetZ;
    });
  }

  function resetCamera() {
    controls.autoRotate = state.autoRotate;
    controls.target.set(0, 0, 0);
    camera.position.set(9.5, 4.2, 7.8);
    hideHotspotCard();
  }

  // --- 17. CREATE SLEEK FLOATING UI OVERLAYS OVER CANVAS ---
  createFloatingUI(container, {
    state,
    controls,
    isHygienic,
    setCutawayMode,
    setExplodedMode,
    resetCamera,
    onResize
  });

  // --- 18. ANIMATION LOOP & RESIZE ---
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
 * Creates minimalist, high-end floating control buttons and hotspot info popover
 */
function createFloatingUI(container, actions) {
  // Check if controls already exist
  if (container.parentElement.querySelector('.sky-3d-hud')) return;

  const hud = document.createElement('div');
  hud.className = 'sky-3d-hud';
  hud.innerHTML = `
    <!-- Top Left Status Badge -->
    <div class="sky-3d-badge-bar">
      <span class="sky-3d-pill">
        <span class="sky-3d-dot live"></span>
        ${actions.isHygienic ? 'THKS Hijyenik AHU (DIN 1946-4)' : 'TKS Standart AHU (EN 1886)'} 3D CAD İkiz
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

  // Bind Buttons
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

// Global functions for hotspot card
window.showHotspotCard = function(hotspot) {
  const card = document.getElementById('sky-3d-hotspot-card');
  if (!card) return;
  document.getElementById('sky-card-num').textContent = hotspot.num;
  document.getElementById('sky-card-title').textContent = hotspot.title;
  document.getElementById('sky-card-desc').textContent = hotspot.desc;
  card.style.display = 'block';
};

window.hideHotspotCard = function() {
  const card = document.getElementById('sky-3d-hotspot-card');
  if (card) card.style.display = 'none';
};

// Auto-run if container exists
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSky3DProduct());
  } else {
    initSky3DProduct();
  }
}

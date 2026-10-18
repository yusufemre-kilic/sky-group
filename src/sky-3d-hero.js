import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Sky Group Master 3D Digital Twin, LiDAR Spatial Scan & Aerodynamic CFD Airflow Engine
 * Inspired by Pinnacl (pinnacl.co), elevated with full-spectrum HVAC mechanical engineering:
 * - 5-Module Central Air Handling Unit (AHU - Klima Santrali) with Coils, Filters, Rotor & EC Plug Fan
 * - Dual Modular VRF / VRV Inverter Condenser Outdoor Bank & Refnet Copper Piping
 * - Hydronic Chiller & Inline Circulation Pump Station (1 Asıl + 1 Yedek) with Manifold & Expansion Tank
 * - Ceiling Suspended Heat Recovery Ventilation Unit (HRV)
 * - High-Temperature 400°C/2h Smoke Exhaust Jet Fan & Motorized Fire Dampers
 * - EN 1507 Class C Galvanized Rectangular Trunk & Spiromatic Spiral Ducts with Silencers & Diffusers
 * - Structural BIM Envelope: I-Beam Steel Columns, Overhead Roof Trusses & Unistrut Trapeze Hangers
 * - Multi-Stream CFD Airflow Simulation: Fresh air intake, conditioned supply, room diffusion, return & smoke jet
 * - 8 Interactive Hotspot Pins with Camera Lerp, Technical BIM Cards & Realtime SCADA Telemetry
 */

export function initSky3DHero() {
  const container = document.getElementById('sky-3d-hero-container');
  if (!container) return;

  // Clear previous canvas
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // --- 1. OPTICAL RADIAL GLOW TEXTURE GENERATOR ---
  function createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.18, 'rgba(0, 240, 255, 0.95)');
    grad.addColorStop(0.45, 'rgba(9, 189, 227, 0.5)');
    grad.addColorStop(0.75, 'rgba(2, 132, 199, 0.18)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    return texture;
  }
  const glowTexture = createGlowTexture();

  // --- 2. THREE.JS SCENE SETUP ---
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020813, 0.014);

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
  camera.position.set(28, 17, 32);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.4;
  container.appendChild(renderer.domElement);

  // Orbit controls with smooth inertia
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.045;
  controls.maxPolarAngle = Math.PI / 2 - 0.02;
  controls.minDistance = 6;
  controls.maxDistance = 65;
  controls.target.set(1.5, 3.5, 2.0);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.4;

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

  // Main hierarchy groups for multi-system filtering
  const mainGroup = new THREE.Group();
  mainGroup.position.set(2.0, 0, 0);
  scene.add(mainGroup);

  const sysAhuGroup = new THREE.Group();       // AHU Santral
  const sysVrfGroup = new THREE.Group();       // VRF & Chiller
  const sysDuctGroup = new THREE.Group();      // Ductwork & Diffusers
  const sysFireGroup = new THREE.Group();      // Jet Fan & Fire Dampers
  const sysStructureGroup = new THREE.Group(); // Structural I-Beams & Unistrut
  const sysCfdGroup = new THREE.Group();       // CFD Airflow Particles
  const pinGroup = new THREE.Group();          // Hotspot Pins

  mainGroup.add(sysAhuGroup);
  mainGroup.add(sysVrfGroup);
  mainGroup.add(sysDuctGroup);
  mainGroup.add(sysFireGroup);
  mainGroup.add(sysStructureGroup);
  mainGroup.add(sysCfdGroup);
  mainGroup.add(pinGroup);

  // Active rotating elements registry
  const rotatingElements = [];

  // Reusable helpers for point clouds and wireframes
  const ahuPoints = { pos: [], col: [] };
  const vrfPoints = { pos: [], col: [] };
  const ductPoints = { pos: [], col: [] };
  const firePoints = { pos: [], col: [] };
  const structPoints = { pos: [], col: [] };

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

  // --- 3. BLUEPRINT SPATIAL GRID & GROUND SCATTER ---
  const gridHelper = new THREE.GridHelper(70, 70, 0x00f0ff, 0x072740);
  gridHelper.position.y = 0;
  gridHelper.material.opacity = 0.32;
  gridHelper.material.transparent = true;
  sysStructureGroup.add(gridHelper);

  // Ground Scatter Points (4,000 points)
  const gCount = 4000;
  const gPos = new Float32Array(gCount * 3);
  const gCol = new Float32Array(gCount * 3);
  const cHigh = new THREE.Color(0x00f0ff);
  const cMid = new THREE.Color(0x09bde3);
  const cDark = new THREE.Color(0x02253d);

  for (let i = 0; i < gCount; i++) {
    const gx = (Math.random() - 0.5) * 68;
    const gz = (Math.random() - 0.5) * 68;
    const gy = -0.02 + Math.random() * 0.04;
    gPos[i * 3] = gx;
    gPos[i * 3 + 1] = gy;
    gPos[i * 3 + 2] = gz;
    const d = Math.sqrt(gx * gx + gz * gz);
    const c = d < 14 ? cHigh : (d < 28 ? cMid : cDark);
    gCol[i * 3] = c.r;
    gCol[i * 3 + 1] = c.g;
    gCol[i * 3 + 2] = c.b;
  }
  const groundGeo = new THREE.BufferGeometry();
  groundGeo.setAttribute('position', new THREE.BufferAttribute(gPos, 3));
  groundGeo.setAttribute('color', new THREE.BufferAttribute(gCol, 3));
  const groundPoints = new THREE.Points(groundGeo, new THREE.PointsMaterial({
    size: 0.22,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }));
  sysStructureGroup.add(groundPoints);

  // --- 4. STRUCTURAL BIM ENVELOPE: I-BEAMS & OVERHEAD TRUSSES ---
  const colCoords = [
    [-15, -12], [-15, 20], [17, -12], [17, 20], [1, -12], [1, 20]
  ];
  colCoords.forEach(([cx, cz]) => {
    // Structural steel column (HEB 260 profile)
    sampleBoxLiDAR(structPoints, cx, 4.5, cz, 0.45, 9.0, 0.45, 14, 0.05, 0.4, 0.65);
    addWireBox(sysStructureGroup, cx, 4.5, cz, 0.45, 9.0, 0.45, 0x0284c7, 0.45);
    // Base plate with 4 anchor bolts
    addWireBox(sysStructureGroup, cx, 0.1, cz, 0.9, 0.15, 0.9, 0x00f0ff, 0.6);
  });

  // Overhead roof trusses spanning across columns at y: 8.8
  const trussY = 8.8;
  const trussZList = [-12, 4, 20];
  trussZList.forEach(tz => {
    sampleBoxLiDAR(structPoints, 1.0, trussY, tz, 32.0, 0.5, 0.35, 12, 0.05, 0.35, 0.6);
    addWireBox(sysStructureGroup, 1.0, trussY, tz, 32.0, 0.5, 0.35, 0x0284c7, 0.35);
  });

  // Unistrut Trapeze Duct Hanger Supports (Tavana asılı C-profil askılar)
  const hangerXList = [4.0, 8.0, 11.2, 14.5];
  hangerXList.forEach(hx => {
    // Trapeze crossbar under duct
    addWireBox(sysStructureGroup, hx, 4.6, 0, 0.15, 0.15, 3.2, 0x00f0ff, 0.65);
    // 2 Threaded vertical hanger rods
    addWireCylinder(sysStructureGroup, hx, 6.7, -1.5, 0.03, 0.03, 4.0, 6, 0x09bde3, 0.5);
    addWireCylinder(sysStructureGroup, hx, 6.7, 1.5, 0.03, 0.03, 4.0, 6, 0x09bde3, 0.5);
  });

  // --- 5. CENTRAL AIR HANDLING UNIT (AHU) WITH FULL MECHANICAL INTERNALS ---
  // Skid base under AHU
  const skidY = 0.4;
  sampleBoxLiDAR(ahuPoints, -1.0, skidY, 0, 14.2, 0.65, 4.4, 18, 0.08, 0.55, 0.85);
  addWireBox(sysAhuGroup, -1.0, skidY, 0, 14.2, 0.65, 4.4, 0x09bde3, 0.7);

  // 8 Heavy-duty spring vibration isolator feet
  const springPositions = [
    [-7.2, -1.9], [-2.5, -1.9], [2.2, -1.9], [5.5, -1.9],
    [-7.2, 1.9], [-2.5, 1.9], [2.2, 1.9], [5.5, 1.9]
  ];
  springPositions.forEach(([sx, sz]) => {
    addWireCylinder(sysAhuGroup, sx, 0.16, sz, 0.32, 0.35, 0.32, 12, 0x00f0ff, 0.8);
    // Helical spring line
    const springCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(sx, 0.05, sz),
      new THREE.Vector3(sx + 0.15, 0.15, sz + 0.1),
      new THREE.Vector3(sx - 0.15, 0.25, sz - 0.1),
      new THREE.Vector3(sx, 0.32, sz)
    ]);
    const springTube = new THREE.Mesh(
      new THREE.TubeGeometry(springCurve, 16, 0.04, 6, false),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.7 })
    );
    sysAhuGroup.add(springTube);
  });

  // AHU Modular Sections
  const ahuModules = [
    { id: 'intake', name: 'Hava Emiş & Modülasyonlu Damper', x: -6.4, w: 2.8, h: 4.4, d: 4.0, color: 0x00f0ff, density: 24 },
    { id: 'filter', name: 'G4 + F7 Torba & H14 HEPA Filtre', x: -3.6, w: 2.4, h: 4.4, d: 4.0, color: 0x09bde3, density: 28 },
    { id: 'rotor', name: 'Döner Isı Geri Kazanım Rotoru', x: -0.8, w: 2.8, h: 4.4, d: 4.0, color: 0x38bdf8, density: 26 },
    { id: 'coil', name: 'Isıtma/Soğutma Serpantin & Vana', x: 2.0, w: 2.4, h: 4.4, d: 4.0, color: 0x0284c7, density: 26 },
    { id: 'fan', name: 'EC Plug Fan & VFD İnvertör', x: 4.8, w: 3.2, h: 4.4, d: 4.0, color: 0x00f0ff, density: 30 }
  ];

  ahuModules.forEach(mod => {
    const modY = skidY + 0.32 + mod.h / 2;
    const col = new THREE.Color(mod.color);
    sampleBoxLiDAR(ahuPoints, mod.x, modY, 0, mod.w, mod.h, mod.d, mod.density, col.r, col.g, col.b);
    addWireBox(sysAhuGroup, mod.x, modY, 0, mod.w, mod.h, mod.d, 0x09bde3, 0.7);

    // Double-walled casing panel seams
    addWireBox(sysAhuGroup, mod.x, modY, 0, mod.w * 0.96, mod.h * 0.96, mod.d * 0.96, 0x0284c7, 0.35);

    // Service Door & Circular Inspection Porthole with Chrome Rim
    const doorW = mod.w * 0.75, doorH = mod.h * 0.8;
    addWireBox(sysAhuGroup, mod.x, modY, mod.d / 2 + 0.02, doorW, doorH, 0.04, 0x38bdf8, 0.55);

    // Circular glass inspection porthole
    const porthole = new THREE.Mesh(
      new THREE.RingGeometry(0.3, 0.38, 20),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.8 })
    );
    porthole.position.set(mod.x, modY + 0.5, mod.d / 2 + 0.04);
    sysAhuGroup.add(porthole);

    // Door latch handle
    addWireBox(sysAhuGroup, mod.x + doorW / 2 - 0.1, modY, mod.d / 2 + 0.06, 0.08, 0.3, 0.08, 0x00f0ff, 0.9);
  });

  // Internal 1: Motorized Modulating Intake Damper Blades (x: -6.4)
  for (let b = 0; b < 6; b++) {
    const by = 1.4 + b * 0.6;
    addWireBox(sysAhuGroup, -6.4, by, 0, 0.06, 0.28, 3.6, 0x00f0ff, 0.85);
  }
  // External Damper Actuator (Belimo servo motor)
  addWireBox(sysAhuGroup, -6.4, 2.9, 2.2, 0.45, 0.45, 0.35, 0x10b981, 0.85);

  // Internal 2: Multi-Stage Filter Bank (x: -3.6)
  // G4 Pleated pre-filter mesh
  addWireBox(sysAhuGroup, -4.3, 2.8, 0, 0.15, 3.6, 3.6, 0x38bdf8, 0.6);
  // F7 Deep pocket bag filters (4 V-pocket rows)
  for (let pk = -1.2; pk <= 1.2; pk += 0.8) {
    addWireBox(sysAhuGroup, -3.7, 2.8, pk, 0.8, 3.6, 0.35, 0x09bde3, 0.5);
  }
  // Terminal H14 HEPA filter frame
  addWireBox(sysAhuGroup, -3.0, 2.8, 0, 0.2, 3.6, 3.6, 0x00f0ff, 0.8);
  // External Magnehelic differential pressure manometer gauge
  const manometer = new THREE.Mesh(
    new THREE.CircleGeometry(0.24, 18),
    new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
  );
  manometer.position.set(-3.6, 3.8, 2.05);
  sysAhuGroup.add(manometer);

  // Internal 3: Active Rotating Heat Recovery Wheel (x: -0.8)
  const rotorGroup = new THREE.Group();
  rotorGroup.position.set(-0.8, skidY + 0.32 + 2.2, 0);
  sysAhuGroup.add(rotorGroup);

  const rotorOuter = new THREE.Mesh(
    new THREE.CylinderGeometry(1.9, 1.9, 0.7, 32, 2, true),
    new THREE.MeshBasicMaterial({ color: 0x09bde3, wireframe: true, transparent: true, opacity: 0.4 })
  );
  rotorOuter.rotation.z = Math.PI / 2;
  rotorGroup.add(rotorOuter);

  // 12 Aluminum Matrix Spokes
  for (let s = 0; s < 12; s++) {
    const sang = (s / 12) * Math.PI * 2;
    const spoke = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 0.05, 3.6),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.55 })
    );
    spoke.rotation.x = sang;
    rotorGroup.add(spoke);
  }
  rotatingElements.push({ obj: rotorGroup, axis: 'x', speed: 0.006 });

  // Internal 4: Heating & Cooling Hydronic Coils + 3-Way Valve (x: 2.0)
  // Serpentine copper tube grid & fin block
  addWireBox(sysAhuGroup, 1.8, 2.8, 0, 0.35, 3.6, 3.6, 0x38bdf8, 0.65);
  for (let cRow = 1.3; cRow <= 4.3; cRow += 0.5) {
    addWireCylinder(sysAhuGroup, 1.8, cRow, 0, 0.06, 0.06, 3.5, 8, 0x00f0ff, 0.7, Math.PI / 2);
  }
  // Copper manifold headers
  addWireCylinder(sysAhuGroup, 2.2, 2.8, -1.8, 0.12, 0.12, 3.4, 10, 0x09bde3, 0.85);
  addWireCylinder(sysAhuGroup, 2.2, 2.8, 1.8, 0.12, 0.12, 3.4, 10, 0x09bde3, 0.85);
  // Belimo 3-Way Modulating Actuator Valve
  addWireBox(sysAhuGroup, 2.2, 4.4, 2.2, 0.4, 0.4, 0.4, 0x00f0ff, 0.9);

  // Internal 5: Dynamic 14-Blade EC Plug Fan Impeller (x: 4.8)
  const fanGroup = new THREE.Group();
  fanGroup.position.set(4.8, skidY + 0.32 + 2.2, 0);
  sysAhuGroup.add(fanGroup);

  const fanScroll = new THREE.Mesh(
    new THREE.TorusGeometry(1.65, 0.3, 14, 32),
    new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true, transparent: true, opacity: 0.45 })
  );
  fanScroll.rotation.y = Math.PI / 2;
  fanGroup.add(fanScroll);

  const impellerGroup = new THREE.Group();
  fanGroup.add(impellerGroup);
  const bladeCount = 14;
  for (let i = 0; i < bladeCount; i++) {
    const angle = (i / bladeCount) * Math.PI * 2;
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 1.15, 0.5),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.8 })
    );
    blade.position.set(0, Math.cos(angle) * 1.05, Math.sin(angle) * 1.05);
    blade.rotation.x = angle + 0.38;
    impellerGroup.add(blade);
  }
  // Motor shaft & hub
  const motorHub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.45, 0.6, 16),
    new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.75 })
  );
  motorHub.rotation.z = Math.PI / 2;
  fanGroup.add(motorHub);

  rotatingElements.push({ obj: impellerGroup, axis: 'x', speed: 0.085 });

  // Flexible canvas vibration compensator connector between fan discharge and duct
  addWireBox(sysAhuGroup, 4.8, 5.3, 0, 2.2, 0.4, 2.2, 0x38bdf8, 0.7);

  // --- 6. ROOFTOP & PLANT VRF/VRV SYSTEM & CHILLER WITH ROTATING AXIAL FANS ---
  // Concrete plinth for VRF outdoor bank
  sampleBoxLiDAR(vrfPoints, -8.5, 0.25, 9.5, 6.4, 0.5, 4.2, 16, 0.08, 0.5, 0.8);
  addWireBox(sysVrfGroup, -8.5, 0.25, 9.5, 6.4, 0.5, 4.2, 0x09bde3, 0.6);

  // 2 Modular VRF Outdoor Condenser Units
  [-10.2, -6.8].forEach(vx => {
    // Casing
    sampleBoxLiDAR(vrfPoints, vx, 2.1, 9.5, 2.6, 3.2, 2.4, 24, 0.0, 0.75, 1.0);
    addWireBox(sysVrfGroup, vx, 2.1, 9.5, 2.6, 3.2, 2.4, 0x00f0ff, 0.75);

    // Top discharge cowl & protective wire guard
    addWireCylinder(sysVrfGroup, vx, 3.8, 9.5, 0.95, 0.95, 0.35, 20, 0x09bde3, 0.85);

    // Rotating 3-blade axial fan propeller
    const vrfFan = new THREE.Group();
    vrfFan.position.set(vx, 3.8, 9.5);
    sysVrfGroup.add(vrfFan);
    for (let f = 0; f < 3; f++) {
      const fang = (f / 3) * Math.PI * 2;
      const fBlade = new THREE.Mesh(
        new THREE.BoxGeometry(0.75, 0.04, 0.22),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.9 })
      );
      fBlade.position.set(Math.cos(fang) * 0.45, 0, Math.sin(fang) * 0.45);
      fBlade.rotation.y = fang;
      vrfFan.add(fBlade);
    }
    rotatingElements.push({ obj: vrfFan, axis: 'y', speed: 0.12 });

    // Side micro-channel condenser fin lattice
    addWireBox(sysVrfGroup, vx, 1.8, 9.5 - 1.15, 2.4, 2.2, 0.1, 0x38bdf8, 0.5);
  });

  // Black Armaflex Insulated Copper Lines with Refnet Y-Joints
  const vrfPipeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-6.8, 1.5, 9.5),
    new THREE.Vector3(-4.0, 4.2, 9.5),
    new THREE.Vector3(0.0, 4.8, 12.0),
    new THREE.Vector3(6.0, 4.8, 12.0)
  ]);
  const vrfTube = new THREE.Mesh(
    new THREE.TubeGeometry(vrfPipeCurve, 32, 0.14, 10, false),
    new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.65 })
  );
  sysVrfGroup.add(vrfTube);

  // Refnet Y-branch brass joint at x: 0.0
  addWireBox(sysVrfGroup, 0.0, 4.8, 12.0, 0.5, 0.3, 0.4, 0x00f0ff, 0.9);

  // VRF 4-Way Ceiling Cassette Indoor Units inside the architectural zone
  [new THREE.Vector3(-1.5, 4.2, 12.0), new THREE.Vector3(5.5, 4.2, 12.0)].forEach(cp => {
    addWireBox(sysVrfGroup, cp.x, cp.y, cp.z, 1.8, 0.45, 1.8, 0x09bde3, 0.85);
    // 4 Directional air discharge vanes
    addWireBox(sysVrfGroup, cp.x, cp.y - 0.2, cp.z, 1.9, 0.06, 1.9, 0x00f0ff, 0.9);
  });

  // --- 7. HYDRONIC CHILLER & CIRCULATION PUMP STATION ---
  // Air-cooled water chiller unit (x: -12.5, z: -6.5)
  sampleBoxLiDAR(vrfPoints, -12.5, 1.8, -6.5, 4.2, 3.2, 2.8, 20, 0.0, 0.6, 0.9);
  addWireBox(sysVrfGroup, -12.5, 1.8, -6.5, 4.2, 3.2, 2.8, 0x0284c7, 0.7);
  // Twin chiller axial condenser fans
  [-13.3, -11.7].forEach(cx => {
    addWireCylinder(sysVrfGroup, cx, 3.5, -6.5, 0.75, 0.75, 0.3, 16, 0x00f0ff, 0.8);
    const chFan = new THREE.Group();
    chFan.position.set(cx, 3.5, -6.5);
    sysVrfGroup.add(chFan);
    for (let f = 0; f < 3; f++) {
      const fang = (f / 3) * Math.PI * 2;
      const b = new THREE.Mesh(
        new THREE.BoxGeometry(0.65, 0.03, 0.18),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.85 })
      );
      b.position.set(Math.cos(fang) * 0.35, 0, Math.sin(fang) * 0.35);
      b.rotation.y = fang;
      chFan.add(b);
    }
    rotatingElements.push({ obj: chFan, axis: 'y', speed: 0.1 });
  });

  // Dual Inline Hydronic Circulation Pumps (1 Asıl + 1 Yedek)
  [-9.5, -8.0].forEach(px => {
    // Pump spiral volute casing
    sampleCylinderLiDAR(vrfPoints, px, 0.8, -6.5, 0.5, 0.45, 'z', 22, 0.0, 0.8, 1.0);
    addWireCylinder(sysVrfGroup, px, 0.8, -6.5, 0.5, 0.5, 0.45, 16, 0x00f0ff, 0.85, Math.PI / 2);
    // Vertical TEFC electric motor
    addWireCylinder(sysVrfGroup, px, 1.6, -6.5, 0.35, 0.35, 1.0, 12, 0x09bde3, 0.75);
    // Flanged butterfly isolation valves with manual gear handwheels
    addWireBox(sysVrfGroup, px, 0.8, -7.2, 0.35, 0.35, 0.15, 0x00f0ff, 0.85);
    addWireBox(sysVrfGroup, px, 0.8, -5.8, 0.35, 0.35, 0.15, 0x00f0ff, 0.85);
    // Bourdon dial pressure gauge on discharge
    const pGauge = new THREE.Mesh(
      new THREE.CircleGeometry(0.12, 14),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
    );
    pGauge.position.set(px, 1.4, -5.8);
    sysVrfGroup.add(pGauge);
  });

  // Hydronic Expansion Tank (Membranlı Genleşme Deposu)
  sampleCylinderLiDAR(vrfPoints, -6.5, 1.2, -6.5, 0.55, 1.6, 'y', 20, 0.0, 0.65, 0.95);
  addWireCylinder(sysVrfGroup, -6.5, 1.2, -6.5, 0.55, 0.55, 1.6, 16, 0x00f0ff, 0.8);

  // --- 8. SUSPENDED HEAT RECOVERY VENTILATION UNIT (HRV) ---
  // Ceiling suspended compact plate HRV (x: 8.5, y: 6.2, z: -5.5)
  sampleBoxLiDAR(ahuPoints, 8.5, 6.2, -5.5, 3.2, 1.2, 2.4, 20, 0.05, 0.75, 1.0);
  addWireBox(sysAhuGroup, 8.5, 6.2, -5.5, 3.2, 1.2, 2.4, 0x09bde3, 0.8);
  // 4 Circular spigot connection collars
  [[-1.6, -0.6], [-1.6, 0.6], [1.6, -0.6], [1.6, 0.6]].forEach(([sx, sz]) => {
    addWireCylinder(sysAhuGroup, 8.5 + sx, 6.2, -5.5 + sz, 0.28, 0.28, 0.45, 14, 0x00f0ff, 0.85, 0, Math.PI / 2);
  });

  // --- 9. FIRE & LIFE SAFETY: SMOKE JET FAN & MOTORIZED FIRE DAMPERS ---
  // High-Temperature 400°C/2h Smoke Jet Fan suspended at (x: 0.0, y: 6.6, z: 15.5)
  sampleCylinderLiDAR(firePoints, 0.0, 6.6, 15.5, 0.48, 2.8, 'x', 24, 1.0, 0.35, 0.1);
  addWireCylinder(sysFireGroup, 0.0, 6.6, 15.5, 0.48, 0.48, 2.8, 18, 0xef4444, 0.85, 0, Math.PI / 2);
  // Both ends: Aerodynamic sound attenuator bellmouth nozzles
  addWireCylinder(sysFireGroup, -1.4, 6.6, 15.5, 0.6, 0.48, 0.4, 18, 0xf97316, 0.9, 0, Math.PI / 2);
  addWireCylinder(sysFireGroup, 1.4, 6.6, 15.5, 0.48, 0.6, 0.4, 18, 0xf97316, 0.9, 0, Math.PI / 2);
  // High-speed internal jet fan impeller
  const jetFanImpeller = new THREE.Group();
  jetFanImpeller.position.set(0.0, 6.6, 15.5);
  sysFireGroup.add(jetFanImpeller);
  for (let jf = 0; jf < 8; jf++) {
    const jfang = (jf / 8) * Math.PI * 2;
    const jBlade = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.42, 0.16),
      new THREE.MeshBasicMaterial({ color: 0xef4444, wireframe: true, transparent: true, opacity: 0.85 })
    );
    jBlade.position.set(0, Math.cos(jfang) * 0.22, Math.sin(jfang) * 0.22);
    jBlade.rotation.x = jfang;
    jetFanImpeller.add(jBlade);
  }
  rotatingElements.push({ obj: jetFanImpeller, axis: 'x', speed: 0.15 });

  // 2 Suspension threaded rods holding the jet fan
  addWireCylinder(sysFireGroup, -0.8, 7.7, 15.5, 0.025, 0.025, 2.2, 6, 0xef4444, 0.7);
  addWireCylinder(sysFireGroup, 0.8, 7.7, 15.5, 0.025, 0.025, 2.2, 6, 0xef4444, 0.7);

  // Motorized Fire Damper at firewall transition (x: 8.8, y: 6.0, z: 0.0)
  addWireBox(sysFireGroup, 8.8, 6.0, 0.0, 0.6, 2.4, 2.4, 0xef4444, 0.9);
  // Belimo electric spring-return actuator motor box
  addWireBox(sysFireGroup, 8.8, 7.1, 1.3, 0.35, 0.35, 0.35, 0xf97316, 0.95);
  // Thermal fusible link indicator
  const fireBadge = new THREE.Mesh(
    new THREE.RingGeometry(0.1, 0.18, 12),
    new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide })
  );
  fireBadge.position.set(8.8, 6.0, 1.25);
  sysFireGroup.add(fireBadge);

  // --- 10. EN 1507 CLASS C DUCTWORK DISTRIBUTION NETWORK ---
  const ductSegments = [
    // Main riser from fan discharge
    { x: 4.8, y: 6.0, z: 0, w: 2.4, h: 2.2, d: 2.4 },
    // Horizontal main distribution trunk extending right
    { x: 8.5, y: 6.0, z: 0, w: 5.0, h: 2.0, d: 2.0 },
    // Acoustic sound attenuator (Kanal Tipi Susturucu) with internal baffles
    { x: 12.0, y: 6.0, z: 0, w: 2.6, h: 2.2, d: 2.2 },
    // 90° radius elbow turn towards +Z
    { x: 14.5, y: 6.0, z: 2.5, w: 2.0, h: 1.8, d: 3.5 },
    // Secondary branch trunk
    { x: 14.5, y: 6.0, z: 6.5, w: 1.8, h: 1.6, d: 4.5 },
    // Fresh air intake duct coming into left from building facade
    { x: -9.5, y: 2.8, z: 0, w: 3.8, h: 2.8, d: 2.8 }
  ];

  ductSegments.forEach(d => {
    sampleBoxLiDAR(ductPoints, d.x, d.y, d.z, d.w, d.h, d.d, 16, 0.05, 0.8, 1.0);
    addWireBox(sysDuctGroup, d.x, d.y, d.z, d.w, d.h, d.d, 0x09bde3, 0.7);

    // Bolted Flanges every 1.5m with corner clips
    const fCount = Math.max(1, Math.floor(Math.max(d.w, d.d) / 1.4));
    for (let f = 0; f < fCount; f++) {
      if (d.w >= d.d) {
        const fx = d.x - d.w / 2 + (f + 0.5) * (d.w / fCount);
        addWireBox(sysDuctGroup, fx, d.y, d.z, 0.08, d.h * 1.08, d.d * 1.08, 0x00f0ff, 0.85);
      } else {
        const fz = d.z - d.d / 2 + (f + 0.5) * (d.d / fCount);
        addWireBox(sysDuctGroup, d.x, d.y, fz, d.w * 1.08, d.h * 1.08, 0.08, 0x00f0ff, 0.85);
      }
    }
  });

  // Sound Attenuator Internal Splitter Baffles (Kulisler)
  [-0.6, 0.0, 0.6].forEach(bz => {
    addWireBox(sysDuctGroup, 12.0, 6.0, bz, 2.5, 1.9, 0.25, 0x38bdf8, 0.6);
  });

  // Circular Spiromatic Spiral Duct Branch
  const spiralCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(14.5, 6.0, 8.5),
    new THREE.Vector3(14.5, 6.0, 13.5),
    new THREE.Vector3(11.0, 6.0, 17.0),
    new THREE.Vector3(3.5, 6.0, 17.0),
    new THREE.Vector3(-2.0, 6.0, 17.0)
  ]);
  const spiralTube = new THREE.Mesh(
    new THREE.TubeGeometry(spiralCurve, 54, 0.65, 18, false),
    new THREE.MeshBasicMaterial({ color: 0x09bde3, wireframe: true, transparent: true, opacity: 0.55 })
  );
  sysDuctGroup.add(spiralTube);

  // Ceiling Diffusers & Swirl Anemostats
  const diffuserList = [
    { x: 14.5, y: 4.2, z: 11.0, type: 'square' },
    { x: 11.0, y: 4.2, z: 17.0, type: 'swirl' },
    { x: 5.5, y: 4.2, z: 17.0, type: 'square' },
    { x: 0.0, y: 4.2, z: 17.0, type: 'swirl' }
  ];

  diffuserList.forEach(df => {
    // Drop collar duct
    addWireCylinder(sysDuctGroup, df.x, df.y + 0.9, df.z, 0.28, 0.28, 1.8, 14, 0x09bde3, 0.5);

    if (df.type === 'square') {
      // 4-Way Anemostat Louver Plate
      addWireBox(sysDuctGroup, df.x, df.y, df.z, 1.35, 0.12, 1.35, 0x00f0ff, 0.9);
      addWireBox(sysDuctGroup, df.x, df.y, df.z, 0.8, 0.1, 0.8, 0x38bdf8, 0.8);
    } else {
      // High-induction Swirl Diffuser (Girdaplı difüzör)
      addWireCylinder(sysDuctGroup, df.x, df.y, df.z, 0.65, 0.65, 0.12, 20, 0x00f0ff, 0.9);
      // Radial swirl blades
      for (let sb = 0; sb < 8; sb++) {
        const sang = (sb / 8) * Math.PI * 2;
        const sBlade = new THREE.Mesh(
          new THREE.BoxGeometry(0.4, 0.04, 0.08),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.85 })
        );
        sBlade.position.set(df.x + Math.cos(sang) * 0.35, df.y, df.z + Math.sin(sang) * 0.35);
        sBlade.rotation.y = sang + 0.5;
        sysDuctGroup.add(sBlade);
      }
    }
  });

  // --- 11. COMPILE POINT CLOUDS WITH DEDICATED SYSTEM GROUPING ---
  function buildPoints(target, pointSize, opacity) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(target.pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(target.col, 3));
    return new THREE.Points(geo, new THREE.PointsMaterial({
      size: pointSize,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
  }

  sysAhuGroup.add(buildPoints(ahuPoints, 0.20, 0.88));
  sysVrfGroup.add(buildPoints(vrfPoints, 0.19, 0.85));
  sysDuctGroup.add(buildPoints(ductPoints, 0.19, 0.85));
  sysFireGroup.add(buildPoints(firePoints, 0.21, 0.92));
  sysStructureGroup.add(buildPoints(structPoints, 0.22, 0.65));

  // --- 12. MULTI-STREAM CFD AERODYNAMIC AIRFLOW SIMULATION ---
  // 6 Distinct Aerodynamic Splines:
  // 1. Fresh intake into AHU
  // 2. Conditioned main supply through coils & fan into main trunk
  // 3. Swirling discharge through diffuser 1
  // 4. Spiral duct distribution through diffuser 2 & 3
  // 5. Warm return airflow being exhausted back to heat wheel
  // 6. High-velocity smoke jet plume
  const cfdSplines = [
    // Streamline 1: Outdoor fresh air into louvers & filters
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-12.0, 2.8, 0.0),
        new THREE.Vector3(-8.5, 2.8, 0.0),
        new THREE.Vector3(-6.4, 2.8, 0.0),
        new THREE.Vector3(-3.6, 2.8, 0.0),
        new THREE.Vector3(-0.8, 2.8, 0.0)
      ]),
      colorStart: new THREE.Color(0x0284c7),
      colorEnd: new THREE.Color(0x00f0ff),
      particleCount: 2200,
      speedBase: 0.0022
    },
    // Streamline 2: Conditioned supply from coils & fan through main riser & trunk
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.8, 2.8, 0.0),
        new THREE.Vector3(2.0, 2.8, 0.0),
        new THREE.Vector3(4.8, 2.8, 0.0),
        new THREE.Vector3(4.8, 6.0, 0.0),
        new THREE.Vector3(8.5, 6.0, 0.0),
        new THREE.Vector3(12.0, 6.0, 0.0),
        new THREE.Vector3(14.5, 6.0, 2.5),
        new THREE.Vector3(14.5, 6.0, 8.5)
      ]),
      colorStart: new THREE.Color(0x00f0ff),
      colorEnd: new THREE.Color(0x38bdf8),
      particleCount: 5000,
      speedBase: 0.0032
    },
    // Streamline 3: Discharge through Diffuser 1 (Square anemostat plume)
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(14.5, 6.0, 6.5),
        new THREE.Vector3(14.5, 4.2, 11.0),
        new THREE.Vector3(14.5, 2.0, 11.0),
        new THREE.Vector3(16.5, 0.4, 12.5)
      ]),
      colorStart: new THREE.Color(0x00f0ff),
      colorEnd: new THREE.Color(0x38bdf8),
      particleCount: 2200,
      speedBase: 0.0028
    },
    // Streamline 4: Spiral duct branch into Swirl Diffuser 2
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(14.5, 6.0, 8.5),
        new THREE.Vector3(14.5, 6.0, 13.5),
        new THREE.Vector3(11.0, 6.0, 17.0),
        new THREE.Vector3(11.0, 4.2, 17.0),
        new THREE.Vector3(11.0, 1.2, 17.0),
        new THREE.Vector3(8.5, 0.3, 18.5)
      ]),
      colorStart: new THREE.Color(0x09bde3),
      colorEnd: new THREE.Color(0x00f0ff),
      particleCount: 2400,
      speedBase: 0.0025
    },
    // Streamline 5: Warm return air sucked from room back to heat recovery
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(4.0, 1.0, 15.0),
        new THREE.Vector3(2.0, 4.0, 10.0),
        new THREE.Vector3(0.0, 4.5, 5.0),
        new THREE.Vector3(-0.8, 4.2, 0.0)
      ]),
      colorStart: new THREE.Color(0xf59e0b),
      colorEnd: new THREE.Color(0xf97316),
      particleCount: 2000,
      speedBase: 0.002
    },
    // Streamline 6: Emergency Smoke Jet Fan High-Velocity Thrust
    {
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.2, 6.6, 15.5),
        new THREE.Vector3(0.0, 6.6, 15.5),
        new THREE.Vector3(3.5, 6.6, 15.5),
        new THREE.Vector3(8.5, 6.4, 15.5),
        new THREE.Vector3(14.0, 6.2, 15.5)
      ]),
      colorStart: new THREE.Color(0xef4444),
      colorEnd: new THREE.Color(0xf59e0b),
      particleCount: 1800,
      speedBase: 0.0065
    }
  ];

  // Total CFD particles: 15,600
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
      const jx = (Math.random() - 0.5) * 0.55;
      const jy = (Math.random() - 0.5) * 0.55;
      const jz = (Math.random() - 0.5) * 0.55;
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
  const cfdMat = new THREE.PointsMaterial({
    size: 0.24,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const cfdMesh = new THREE.Points(cfdGeo, cfdMat);
  sysCfdGroup.add(cfdMesh);

  // --- 13. DYNAMIC SWEEPING LIDAR LASER SCANNER ---
  const scanGeo = new THREE.PlaneGeometry(0.12, 10.0);
  const scanMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    transparent: true,
    opacity: 0.28,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
  const scanBeam = new THREE.Mesh(scanGeo, scanMat);
  scanBeam.rotation.y = Math.PI / 2;
  scanBeam.position.set(0, 5.0, 4.0);
  sysStructureGroup.add(scanBeam);

  // --- 14. 8 INTERACTIVE TECHNICAL HOTSPOTS (CLICKABLE BIM PINS) ---
  const hotspots = [
    {
      id: 'fan',
      name: 'EC Plug Fan & IE5 VFD Motor',
      system: 'Klima Santrali (AHU)',
      target: new THREE.Vector3(4.8, 3.8, 0),
      camPos: new THREE.Vector3(12.5, 6.2, 7.5),
      specs: [
        { label: 'Debi / Basınç', val: '120.000 m³/h • 1450 Pa' },
        { label: 'Motor Tipi', val: 'IE5 Ultra-Premium Sabit Mıknatıslı EC' },
        { label: 'Sürücü', val: '0-10V / Modbus RTU VFD İnvertör' },
        { label: 'Standart', val: 'TSE EN 1886 D1/L1 • Eurovent' }
      ]
    },
    {
      id: 'rotor',
      name: 'Döner Isı Geri Kazanım Rotoru',
      system: 'Klima Santrali (AHU)',
      target: new THREE.Vector3(-0.8, 3.8, 0),
      camPos: new THREE.Vector3(6.5, 6.5, 7.5),
      specs: [
        { label: 'Isıl Verim', val: '%82 Sezonsal Duyulur & Gizli Isı' },
        { label: 'Matris Tipi', val: 'Higroskopik Alüminyum Petek' },
        { label: 'Sızıntı Sınıfı', val: 'Hava Kaçak Oranı < %0.5 (Class 3)' },
        { label: 'Standart', val: 'EN 308 • ErP 2018 EcoDesign' }
      ]
    },
    {
      id: 'filter',
      name: 'H14 HEPA & F7 Torba Filtre Hücresi',
      system: 'Hava Filtrasyonu',
      target: new THREE.Vector3(-3.6, 3.8, 0),
      camPos: new THREE.Vector3(3.5, 6.2, 7.5),
      specs: [
        { label: 'Filtrasyon', val: 'H14 (%99.995 MPPS) + F7 ePM1 %70' },
        { label: 'Kullanım Alanı', val: 'Temiz Oda, Ameliyathane & İlaç Üretimi' },
        { label: 'Fark Basınç', val: 'Magnehelic U-Tüp Manometre İzleme' },
        { label: 'Standart', val: 'EN 1822 • ISO 16890 • DIN 1946-4' }
      ]
    },
    {
      id: 'coil',
      name: 'Hidronik Isıtma/Soğutma Bataryası & 3 Yollu Vana',
      system: 'Klima Santrali (AHU)',
      target: new THREE.Vector3(2.0, 3.8, 0),
      camPos: new THREE.Vector3(8.5, 6.2, 6.5),
      specs: [
        { label: 'Borulama', val: 'Dikişsiz Bakır Boru + Hidrofilik Alüminyum Kanat' },
        { label: 'Test Basıncı', val: '20 Bar Hidrostatik Sızdırmazlık Testi' },
        { label: 'Vana Grubu', val: 'Belimo Oransal 3 Yollu Modülasyonlu Vana' },
        { label: 'Drenaj', val: 'AISI 304 Paslanmaz Çelik Eğimli Tava' }
      ]
    },
    {
      id: 'vrf',
      name: 'Modüler VRF / VRV Dış Ünite Grubu',
      system: 'VRF / VRV Sistemleri',
      target: new THREE.Vector3(-8.5, 3.2, 9.5),
      camPos: new THREE.Vector3(-1.5, 6.5, 17.5),
      specs: [
        { label: 'Kompresör', val: 'DC Inverter Twin-Rotary & Scroll' },
        { label: 'Soğutucu Akışkan', val: 'R410A / R32 Çevre Dostu Gaz' },
        { label: 'Sezonsal Verim', val: 'SEER: 8.2 • SCOP: 4.85' },
        { label: 'Boru Hattı', val: '1000m Toplam Borulama Mesafesi' }
      ]
    },
    {
      id: 'pumps',
      name: 'Hidronik Sirkülasyon Pompa İstasyonu',
      system: 'Mekanik Tesisat & Chiller',
      target: new THREE.Vector3(-8.8, 2.0, -6.5),
      camPos: new THREE.Vector3(-2.5, 5.5, 1.5),
      specs: [
        { label: 'Yapılandırma', val: '1 Asıl + 1 Yedek İkiz Frekans İnvertörlü' },
        { label: 'Gövde', val: 'GG25 Döküm Salyangoz Gövde • PN16 Flanş' },
        { label: 'Vana Donanımı', val: 'Kelebek Vana + Pislik Tutucu + Çekvalf' },
        { label: 'Genleşme', val: 'EPDM Membranlı Kapalı Genleşme Deposu' }
      ]
    },
    {
      id: 'jetfan',
      name: '400°C/2h Yangın & Duman Jet Fanı',
      system: 'Yangın & Duman Güvenliği',
      target: new THREE.Vector3(0.0, 6.6, 15.5),
      camPos: new THREE.Vector3(6.5, 8.5, 21.0),
      specs: [
        { label: 'Yangın Dayanımı', val: '400°C / 120 Dakika Kesintisiz Çalışma' },
        { label: 'İtme Kuvveti', val: '55 N Çift Yönlü Aerodinamik İtme' },
        { label: 'Otomasyon', val: 'CO Sensörü + Yangın Senaryo Entegrasyonu' },
        { label: 'Standart', val: 'EN 12101-3 F400 • CE Sertifikalı' }
      ]
    },
    {
      id: 'duct',
      name: 'EN 1507 Class C Galvaniz & Spiromatic Kanal',
      system: 'Hava Kanalı İmalatı & Montaj',
      target: new THREE.Vector3(12.0, 6.0, 2.5),
      camPos: new THREE.Vector3(19.0, 9.5, 11.0),
      specs: [
        { label: 'Hava Sızıntısı', val: 'Class C (En Yüksek Sızdırmazlık Seviyesi)' },
        { label: 'İmalat', val: 'CNC Plazma Kesim + Otomatik TDF/TDC Flanş' },
        { label: 'Sac Kalitesi', val: '275 gr/m² Galvaniz Kaplama Çelik' },
        { label: 'Standart', val: 'EN 1507 • SMACNA • DW144' }
      ]
    }
  ];

  const pinMeshes = [];
  hotspots.forEach(spot => {
    const pinHolder = new THREE.Group();
    pinHolder.position.copy(spot.target);

    // Glowing core sphere
    const sphereGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.userData = { hotspot: spot };
    pinHolder.add(sphere);

    // Outer pulsing ring
    const ringGeo = new THREE.RingGeometry(0.45, 0.58, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x09bde3, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    pinHolder.add(ring);

    pinGroup.add(pinHolder);
    pinMeshes.push(pinHolder);
  });

  // Hotspot interaction & Camera lerp
  let targetCamPos = null;
  let targetLookAt = null;
  let isLerpingCamera = false;

  function focusHotspot(spot) {
    targetCamPos = spot.camPos.clone().add(mainGroup.position);
    targetLookAt = spot.target.clone().add(mainGroup.position);
    isLerpingCamera = true;
    controls.autoRotate = false;

    // Render interactive info card
    const infoCard = document.getElementById('sky-3d-info-card');
    if (infoCard) {
      infoCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <span class="sky-3d-card-sys">${spot.system}</span>
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
    targetCamPos = new THREE.Vector3(28, 17, 32);
    targetLookAt = new THREE.Vector3(1.5, 3.5, 2.0);
    isLerpingCamera = true;
    controls.autoRotate = true;
    window.closeSky3DInfo();
  };

  // Raycaster for mouse clicks on pins
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  renderer.domElement.addEventListener('click', (e) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const hitObjects = [];
    pinMeshes.forEach(grp => hitObjects.push(grp.children[0]));
    const intersects = raycaster.intersectObjects(hitObjects, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hit.userData?.hotspot) {
        focusHotspot(hit.userData.hotspot);
      }
    }
  });

  // --- 15. MULTI-SYSTEM FILTERING MODES ---
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

    // Reset visibility states
    sysAhuGroup.visible = true;
    sysVrfGroup.visible = true;
    sysDuctGroup.visible = true;
    sysFireGroup.visible = true;
    sysStructureGroup.visible = true;
    sysCfdGroup.visible = true;

    if (mode === 'ahu') {
      sysVrfGroup.visible = false;
      sysDuctGroup.visible = false;
      sysFireGroup.visible = false;
    } else if (mode === 'cooling') {
      sysAhuGroup.visible = false;
      sysDuctGroup.visible = false;
      sysFireGroup.visible = false;
    } else if (mode === 'duct') {
      sysAhuGroup.visible = false;
      sysVrfGroup.visible = false;
      sysFireGroup.visible = false;
    } else if (mode === 'fire') {
      sysAhuGroup.visible = false;
      sysVrfGroup.visible = false;
      sysDuctGroup.visible = false;
    } else if (mode === 'cfd') {
      sysAhuGroup.visible = true;
      sysDuctGroup.visible = true;
      sysVrfGroup.visible = false;
      sysFireGroup.visible = false;
      sysStructureGroup.visible = false;
    }
  };

  // --- 16. ANIMATION LOOP ---
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Rotate active machinery elements (Plug fan, heat rotor, VRF fans, Jet fan)
    rotatingElements.forEach(el => {
      if (el.axis === 'x') el.obj.rotation.x += el.speed;
      else if (el.axis === 'y') el.obj.rotation.y += el.speed;
      else if (el.axis === 'z') el.obj.rotation.z += el.speed;
    });

    // Sweeping LiDAR Laser Scanner
    const scanX = -10.0 + Math.sin(time * 0.75) * 22.0;
    scanBeam.position.x = scanX;

    // CFD Aerodynamic Particle Streamline Animation
    const posAttr = cfdGeo.attributes.position;
    for (let i = 0; i < totalParticles; i++) {
      const p = cfdMeta[i];
      p.progress += p.speed;
      if (p.progress >= 1.0) p.progress = 0.0;

      const pt = p.spline.getPointAt(p.progress);
      const turb = Math.sin(time * 6.0 + i) * 0.035;
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

  // Live SCADA/BMS Telemetry Sensors
  const flowVal = document.getElementById('sky-telemetry-flow');
  const pressVal = document.getElementById('sky-telemetry-press');
  const tempVal = document.getElementById('sky-telemetry-temp');
  const copVal = document.getElementById('sky-telemetry-cop');

  setInterval(() => {
    if (flowVal) {
      const baseFlow = 52400;
      const variation = Math.floor(Math.sin(Date.now() / 2000) * 160);
      flowVal.innerText = (baseFlow + variation).toLocaleString('tr-TR');
    }
    if (pressVal) {
      const basePress = 420;
      const pVar = Math.floor(Math.sin(Date.now() / 1500) * 12);
      pressVal.innerText = (basePress + pVar);
    }
    if (tempVal) {
      const baseTemp = 16.5;
      const tVar = (Math.sin(Date.now() / 3000) * 0.3).toFixed(1);
      tempVal.innerText = (parseFloat(baseTemp) + parseFloat(tVar)).toFixed(1);
    }
    if (copVal) {
      const baseCop = 4.82;
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

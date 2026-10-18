import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Sky Group 3D Digital Twin, LiDAR Spatial Scan & Aerodynamic CFD Airflow Engine
 * Inspired by Pinnacl & Studio MASS aesthetic, elevated with mechanical precision.
 */
export function initSky3DHero() {
  const container = document.getElementById('sky-3d-hero-container');
  if (!container) return;

  // Clear previous canvas if any
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // --- 1. PROCEDURAL GLOW TEXTURE GENERATOR ---
  function createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(0, 240, 255, 0.9)');
    grad.addColorStop(0.5, 'rgba(9, 189, 227, 0.45)');
    grad.addColorStop(0.8, 'rgba(2, 132, 199, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    return texture;
  }
  const glowTexture = createGlowTexture();

  // --- 2. THREE.JS SCENE, CAMERA, RENDERER ---
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030b14, 0.015);

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
  
  // Position camera slightly offset to give prominence to the 3D machinery on the right
  camera.position.set(24, 15, 28);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  container.appendChild(renderer.domElement);

  // Orbit controls with smooth inertia
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.045;
  controls.maxPolarAngle = Math.PI / 2 - 0.03; // Stay slightly above ground
  controls.minDistance = 8;
  controls.maxDistance = 55;
  controls.target.set(2.5, 3.2, 0); // Target center of AHU + ductwork
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.45;

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
    }, 7000);
  };

  renderer.domElement.addEventListener('pointerdown', pauseRotation);
  renderer.domElement.addEventListener('wheel', pauseRotation, { passive: true });
  renderer.domElement.addEventListener('touchstart', pauseRotation, { passive: true });

  // Main Scene Groups
  const mainGroup = new THREE.Group();
  mainGroup.position.set(2.0, 0, 0); // Shift installation slightly to the right for typography balance
  scene.add(mainGroup);

  const pointCloudGroup = new THREE.Group();
  const wireframeGroup = new THREE.Group();
  const airflowGroup = new THREE.Group();
  const machineryGroup = new THREE.Group();
  mainGroup.add(pointCloudGroup);
  mainGroup.add(wireframeGroup);
  mainGroup.add(airflowGroup);
  mainGroup.add(machineryGroup);

  // --- 3. BLUEPRINT SPATIAL GRID & LIDAR GROUND SCAN ---
  const gridHelper = new THREE.GridHelper(64, 64, 0x00f0ff, 0x092640);
  gridHelper.position.y = 0;
  gridHelper.material.opacity = 0.35;
  gridHelper.material.transparent = true;
  mainGroup.add(gridHelper);

  // Ground Scatter LiDAR Points (3,000 points)
  const groundCount = 3000;
  const groundPositions = new Float32Array(groundCount * 3);
  const groundColors = new Float32Array(groundCount * 3);
  const cBright = new THREE.Color(0x00f0ff);
  const cMid = new THREE.Color(0x09bde3);
  const cDim = new THREE.Color(0x03304d);

  for (let i = 0; i < groundCount; i++) {
    const x = (Math.random() - 0.5) * 60;
    const z = (Math.random() - 0.5) * 60;
    const y = -0.02 + Math.random() * 0.05;
    groundPositions[i * 3] = x;
    groundPositions[i * 3 + 1] = y;
    groundPositions[i * 3 + 2] = z;

    const dist = Math.sqrt(x * x + z * z);
    const col = dist < 12 ? cBright : (dist < 25 ? cMid : cDim);
    groundColors[i * 3] = col.r;
    groundColors[i * 3 + 1] = col.g;
    groundColors[i * 3 + 2] = col.b;
  }
  const groundGeo = new THREE.BufferGeometry();
  groundGeo.setAttribute('position', new THREE.BufferAttribute(groundPositions, 3));
  groundGeo.setAttribute('color', new THREE.BufferAttribute(groundColors, 3));
  const groundMat = new THREE.PointsMaterial({
    size: 0.22,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const groundPoints = new THREE.Points(groundGeo, groundMat);
  pointCloudGroup.add(groundPoints);

  // --- 4. AIR HANDLING UNIT (AHU) DENSE LIDAR SCAN + CAD WIREFRAME ---
  // Modular sections: Damper/Intake, HEPA Filters, Rotary Heat Exchanger, EC Fan Plenum
  const ahuModules = [
    { id: 'intake', name: 'Hava Emiş & Yangın Damperi', x: -5.0, w: 2.8, h: 4.4, d: 3.8, color: 0x00f0ff, density: 24 },
    { id: 'filter', name: 'H14 HEPA & F7 Filtre Hücresi', x: -2.3, w: 2.2, h: 4.4, d: 3.8, color: 0x09bde3, density: 28 },
    { id: 'heat_exchanger', name: 'Isı Geri Kazanım Rotoru', x: 0.3, w: 2.8, h: 4.4, d: 3.8, color: 0x38bdf8, density: 26 },
    { id: 'fan_plenum', name: 'EC Plug Fan Hücresi', x: 3.5, w: 3.4, h: 4.4, d: 3.8, color: 0x00f0ff, density: 30 }
  ];

  const ahuPointPositions = [];
  const ahuPointColors = [];

  // Procedural LiDAR Surface Sampling with High Structural Fidelity
  function sampleBoxLiDAR(x, y, z, w, h, d, density, r, g, b, isDuct = false) {
    const halfW = w / 2;
    const halfH = h / 2;
    const halfD = d / 2;
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
      ahuPointPositions.push(x + px, y + py, z + pz);
      const intensity = 0.85 + Math.random() * 0.35;
      ahuPointColors.push(Math.min(1, r * intensity), Math.min(1, g * intensity), Math.min(1, b * intensity));
    }
  }

  // Heavy-duty structural skid base under AHU
  const skidY = 0.35;
  sampleBoxLiDAR(-0.5, skidY, 0, 12.8, 0.6, 4.2, 16, 0.1, 0.5, 0.8);
  
  // Skid base CAD wireframe
  const skidGeo = new THREE.BoxGeometry(12.8, 0.6, 4.2);
  const skidEdges = new THREE.EdgesGeometry(skidGeo);
  const skidWire = new THREE.LineSegments(skidEdges, new THREE.LineBasicMaterial({ color: 0x09bde3, transparent: true, opacity: 0.6 }));
  skidWire.position.set(-0.5, skidY, 0);
  wireframeGroup.add(skidWire);

  // Vibration spring isolator feet (6 vibration mounts)
  const mountPositions = [
    [-6.2, 0.15, -1.8], [-0.5, 0.15, -1.8], [5.2, 0.15, -1.8],
    [-6.2, 0.15, 1.8], [-0.5, 0.15, 1.8], [5.2, 0.15, 1.8]
  ];
  mountPositions.forEach(p => {
    const mountGeo = new THREE.CylinderGeometry(0.3, 0.35, 0.3, 12);
    const mountEdges = new THREE.EdgesGeometry(mountGeo);
    const mountLine = new THREE.LineSegments(mountEdges, new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.8 }));
    mountLine.position.set(p[0], p[1], p[2]);
    wireframeGroup.add(mountLine);
  });

  // Construct each AHU module
  ahuModules.forEach(mod => {
    const modY = skidY + 0.3 + mod.h / 2;
    const col = new THREE.Color(mod.color);
    sampleBoxLiDAR(mod.x, modY, 0, mod.w, mod.h, mod.d, mod.density, col.r, col.g, col.b);

    // Casing CAD Wireframe
    const boxGeo = new THREE.BoxGeometry(mod.w, mod.h, mod.d);
    const edges = new THREE.EdgesGeometry(boxGeo);
    const wireframe = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x09bde3, transparent: true, opacity: 0.75 }));
    wireframe.position.set(mod.x, modY, 0);
    wireframeGroup.add(wireframe);

    // Inspection Service Door Frame & Circular Glass Porthole
    const doorGeo = new THREE.PlaneGeometry(mod.w * 0.75, mod.h * 0.8);
    const doorEdges = new THREE.EdgesGeometry(doorGeo);
    const doorLine = new THREE.LineSegments(doorEdges, new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 }));
    doorLine.position.set(mod.x, modY, mod.d / 2 + 0.02);
    wireframeGroup.add(doorLine);

    // Circular inspection porthole
    const portholeGeo = new THREE.RingGeometry(0.3, 0.38, 20);
    const portholeMesh = new THREE.Mesh(portholeGeo, new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.75 }));
    portholeMesh.position.set(mod.x, modY + 0.5, mod.d / 2 + 0.03);
    wireframeGroup.add(portholeMesh);
  });

  // --- 5. INTERNAL ROTATING MACHINERY ---
  // Rotating EC Centrifugal Plug Fan (x: 3.5, y: 2.8, z: 0)
  const fanGroup = new THREE.Group();
  fanGroup.position.set(3.5, skidY + 0.3 + 2.2, 0);
  machineryGroup.add(fanGroup);

  const fanScrollGeo = new THREE.TorusGeometry(1.5, 0.28, 14, 32);
  const fanScrollMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true, transparent: true, opacity: 0.4 });
  const fanScroll = new THREE.Mesh(fanScrollGeo, fanScrollMat);
  fanScroll.rotation.y = Math.PI / 2;
  fanGroup.add(fanScroll);

  // Fan Impeller with 14 backward-curved blades
  const impellerGroup = new THREE.Group();
  fanGroup.add(impellerGroup);
  const bladeCount = 14;
  for (let i = 0; i < bladeCount; i++) {
    const angle = (i / bladeCount) * Math.PI * 2;
    const bladeGeo = new THREE.BoxGeometry(0.12, 1.0, 0.45);
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.7 });
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.set(0, Math.cos(angle) * 0.95, Math.sin(angle) * 0.95);
    blade.rotation.x = angle + 0.35;
    impellerGroup.add(blade);
  }

  // Rotary Heat Exchanger Wheel (x: 0.3)
  const rotorGroup = new THREE.Group();
  rotorGroup.position.set(0.3, skidY + 0.3 + 2.2, 0);
  machineryGroup.add(rotorGroup);

  const rotorGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.7, 28, 3, true);
  const rotorMat = new THREE.MeshBasicMaterial({ color: 0x09bde3, wireframe: true, transparent: true, opacity: 0.35 });
  const rotorMesh = new THREE.Mesh(rotorGeo, rotorMat);
  rotorMesh.rotation.z = Math.PI / 2;
  rotorGroup.add(rotorMesh);

  // --- 6. AIR DUCT NETWORK (GALVANİZ VE SPİRAL KANALLAR) ---
  const ductSegments = [
    // Main riser from fan discharge
    { x: 3.5, y: 5.9, z: 0, w: 2.4, h: 2.2, d: 2.4 },
    // Horizontal main distribution trunk extending right
    { x: 7.8, y: 5.9, z: 0, w: 6.2, h: 2.0, d: 2.0 },
    // 90° radius elbow turn towards +Z
    { x: 11.2, y: 5.9, z: 3.5, w: 1.8, h: 1.8, d: 5.4 },
    // Secondary branch trunk
    { x: 14.5, y: 5.9, z: 6.2, w: 4.8, h: 1.5, d: 1.5 },
    // Fresh air intake duct coming into left from building facade
    { x: -8.2, y: 2.8, z: 0, w: 3.8, h: 2.6, d: 2.6 }
  ];

  ductSegments.forEach(d => {
    sampleBoxLiDAR(d.x, d.y, d.z, d.w, d.h, d.d, 16, 0.05, 0.75, 1.0, true);
    const boxGeo = new THREE.BoxGeometry(d.w, d.h, d.d);
    const edges = new THREE.EdgesGeometry(boxGeo);
    const wireframe = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x09bde3, transparent: true, opacity: 0.65 }));
    wireframe.position.set(d.x, d.y, d.z);
    wireframeGroup.add(wireframe);

    // Bolted Flanges every 1.5m
    const flangeCount = Math.max(1, Math.floor(d.w / 1.5));
    for (let f = 0; f < flangeCount; f++) {
      const flangeGeo = new THREE.BoxGeometry(0.09, d.h * 1.08, d.d * 1.08);
      const flangeEdges = new THREE.EdgesGeometry(flangeGeo);
      const flangeLine = new THREE.LineSegments(flangeEdges, new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.8 }));
      flangeLine.position.set(d.x - d.w / 2 + (f + 0.5) * (d.w / flangeCount), d.y, d.z);
      wireframeGroup.add(flangeLine);
    }
  });

  // Circular Spiromatic Spiral Duct Branch
  const spiralCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(11.2, 5.9, 6.2),
    new THREE.Vector3(11.2, 5.9, 12.5),
    new THREE.Vector3(8.5, 5.9, 17.0),
    new THREE.Vector3(2.0, 5.9, 17.0)
  ]);
  const spiralTubeGeo = new THREE.TubeGeometry(spiralCurve, 48, 0.7, 18, false);
  const spiralTubeMat = new THREE.MeshBasicMaterial({ color: 0x09bde3, wireframe: true, transparent: true, opacity: 0.45 });
  const spiralTube = new THREE.Mesh(spiralTubeGeo, spiralTubeMat);
  wireframeGroup.add(spiralTube);

  // Ceiling Diffuser Anemostats (Tavandan hava üfleme menfezleri)
  const diffuserLocations = [
    new THREE.Vector3(11.2, 4.0, 8.5),
    new THREE.Vector3(11.2, 4.0, 12.0),
    new THREE.Vector3(6.5, 4.0, 17.0),
    new THREE.Vector3(2.5, 4.0, 17.0)
  ];

  diffuserLocations.forEach(pos => {
    // Drop collar duct
    const collarGeo = new THREE.CylinderGeometry(0.28, 0.28, 1.8, 14);
    const collarMesh = new THREE.Mesh(collarGeo, new THREE.MeshBasicMaterial({ color: 0x09bde3, wireframe: true, transparent: true, opacity: 0.45 }));
    collarMesh.position.set(pos.x, pos.y + 0.9, pos.z);
    wireframeGroup.add(collarMesh);

    // 4-Way Anemostat Louver Plate
    const plateGeo = new THREE.BoxGeometry(1.3, 0.12, 1.3);
    const plateEdges = new THREE.EdgesGeometry(plateGeo);
    const plateLine = new THREE.LineSegments(plateEdges, new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.9 }));
    plateLine.position.set(pos.x, pos.y, pos.z);
    wireframeGroup.add(plateLine);
  });

  // Assemble Complete AHU & Duct Point Cloud
  const ahuPointGeo = new THREE.BufferGeometry();
  ahuPointGeo.setAttribute('position', new THREE.Float32BufferAttribute(ahuPointPositions, 3));
  ahuPointGeo.setAttribute('color', new THREE.Float32BufferAttribute(ahuPointColors, 3));
  const ahuPointMat = new THREE.PointsMaterial({
    size: 0.20,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const ahuPoints = new THREE.Points(ahuPointGeo, ahuPointMat);
  pointCloudGroup.add(ahuPoints);

  // --- 7. REAL-TIME CFD AERODYNAMIC AIRFLOW SIMULATION ---
  // 15,000 animated particles flowing along aerodynamic duct streamlines
  const particleCount = 15000;
  const flowCurves = [
    // Streamline 1: Fresh air intake straight through AHU modules into main riser
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10.0, 2.8, 0),
      new THREE.Vector3(-5.0, 2.8, 0),
      new THREE.Vector3(-2.3, 2.8, 0),
      new THREE.Vector3(0.3, 2.8, 0),
      new THREE.Vector3(3.5, 2.8, 0),
      new THREE.Vector3(3.5, 5.9, 0),
      new THREE.Vector3(7.8, 5.9, 0),
      new THREE.Vector3(11.2, 5.9, 3.5),
      new THREE.Vector3(14.5, 5.9, 6.2),
      new THREE.Vector3(17.5, 5.9, 6.2)
    ]),
    // Streamline 2: Curving into spiral duct and diffusing down through Diffuser 1
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.0, 2.6, 0.4),
      new THREE.Vector3(0.3, 2.6, 0.4),
      new THREE.Vector3(3.5, 5.9, 0.4),
      new THREE.Vector3(11.2, 5.9, 6.2),
      new THREE.Vector3(11.2, 4.0, 8.5),
      new THREE.Vector3(11.2, 1.2, 8.5),
      new THREE.Vector3(13.0, 0.4, 10.0)
    ]),
    // Streamline 3: Curving into Diffuser 2
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.0, 3.0, -0.4),
      new THREE.Vector3(0.3, 3.0, -0.4),
      new THREE.Vector3(3.5, 5.9, -0.4),
      new THREE.Vector3(11.2, 5.9, 12.0),
      new THREE.Vector3(11.2, 4.0, 12.0),
      new THREE.Vector3(11.2, 1.0, 12.0),
      new THREE.Vector3(9.0, 0.3, 14.0)
    ]),
    // Streamline 4: Flowing deep into room through spiral branch and Diffuser 3
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(3.5, 5.9, 0),
      new THREE.Vector3(11.2, 5.9, 8.5),
      new THREE.Vector3(11.2, 5.9, 14.5),
      new THREE.Vector3(8.5, 5.9, 17.0),
      new THREE.Vector3(4.0, 5.9, 17.0),
      new THREE.Vector3(2.5, 4.0, 17.0),
      new THREE.Vector3(2.5, 1.0, 17.0)
    ])
  ];

  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const particleData = [];

  const colSupplyPure = new THREE.Color(0x00f0ff); // 100% conditioned fresh supply air
  const colSupplyMid = new THREE.Color(0x09bde3);
  const colDiffused = new THREE.Color(0x38bdf8);

  for (let i = 0; i < particleCount; i++) {
    const curveIdx = i % flowCurves.length;
    const progress = Math.random();
    const speed = 0.0016 + Math.random() * 0.0032;
    const jitterX = (Math.random() - 0.5) * 0.75;
    const jitterY = (Math.random() - 0.5) * 0.75;
    const jitterZ = (Math.random() - 0.5) * 0.75;

    particleData.push({ progress, speed, curveIdx, jitterX, jitterY, jitterZ });

    const p = flowCurves[curveIdx].getPointAt(progress);
    particlePositions[i * 3] = p.x + jitterX;
    particlePositions[i * 3 + 1] = p.y + jitterY;
    particlePositions[i * 3 + 2] = p.z + jitterZ;

    const col = progress < 0.4 ? colSupplyPure : (progress < 0.8 ? colSupplyMid : colDiffused);
    particleColors[i * 3] = col.r;
    particleColors[i * 3 + 1] = col.g;
    particleColors[i * 3 + 2] = col.b;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.26,
    map: glowTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const airflowParticles = new THREE.Points(particleGeo, particleMat);
  airflowGroup.add(airflowParticles);

  // --- 8. ANIMATED LIDAR SCANNING BEAM (CYAN SWEEP LINE) ---
  const scanBeamGeo = new THREE.PlaneGeometry(0.12, 14);
  const scanBeamMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    transparent: true,
    opacity: 0.65,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
  const scanBeam = new THREE.Mesh(scanBeamGeo, scanBeamMat);
  scanBeam.rotation.y = Math.PI / 2;
  scanBeam.position.set(0, 3.5, 0);
  mainGroup.add(scanBeam);

  // --- 9. INTERACTIVE 3D HOTSPOT PINS ---
  const hotspots = [
    {
      id: 'fan',
      title: 'EC Plug Fan & Motor Hücresi',
      desc: '48.500 m³/h yüksek debili, IE5 süper premium verimli geriye eğik radyal kanatlı doğrudan tahrikli fan ünitesi. Frekans invertörü ile hassas debi modülasyonu.',
      pos: new THREE.Vector3(3.5, 2.8, 2.0),
      camPos: new THREE.Vector3(12.0, 5.0, 8.5),
      target: new THREE.Vector3(3.5, 2.8, 0)
    },
    {
      id: 'rotor',
      title: 'Isı Geri Kazanım Rotoru',
      desc: 'Alüminyum higroskopik matris ile egzoz havasındaki termal enerjinin %82’sini taze havaya aktaran yüksek verimli döner eşanjör tamburu.',
      pos: new THREE.Vector3(0.3, 2.8, 2.0),
      camPos: new THREE.Vector3(6.5, 4.5, 8.0),
      target: new THREE.Vector3(0.3, 2.8, 0)
    },
    {
      id: 'filter',
      title: 'H14 HEPA & F7 Kompakt Filtre',
      desc: 'EN 779 ve EN 1822 standartlarında %99.995 partikül tutma verimi. DIN 1946-4 ve ISO 14644 temiz oda hijyenik santral konfigürasyonu.',
      pos: new THREE.Vector3(-2.3, 2.8, 2.0),
      camPos: new THREE.Vector3(3.0, 4.2, 7.5),
      target: new THREE.Vector3(-2.3, 2.8, 0)
    },
    {
      id: 'duct',
      title: 'EN 1507 Class C Galvaniz Şebeke',
      desc: 'Fabrikamızda CNC plazma ve Spiromatic hatlarında üretilen kendinden flanşlı, mastikli sızdırmaz hava kanalı sistemi (Maks. sızdırmazlık).',
      pos: new THREE.Vector3(11.2, 5.9, 4.0),
      camPos: new THREE.Vector3(18.0, 8.5, 10.5),
      target: new THREE.Vector3(11.2, 5.9, 3.5)
    }
  ];

  const pinMeshes = [];
  hotspots.forEach(h => {
    const pinGroup = new THREE.Group();
    pinGroup.position.copy(h.pos);
    pinGroup.userData = { id: h.id, hotspot: h };

    const coreGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const core = new THREE.Mesh(coreGeo, coreMat);
    pinGroup.add(core);

    const ringGeo = new THREE.RingGeometry(0.35, 0.46, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x09bde3, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    pinGroup.add(ring);

    pinMeshes.push(pinGroup);
    mainGroup.add(pinGroup);
  });

  // Raycasting for Hotspot Clicks
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  let targetCamPos = null;
  let targetLookAt = null;
  let isLerpingCamera = false;

  function focusHotspot(hotspot) {
    targetCamPos = hotspot.camPos.clone();
    targetLookAt = hotspot.target.clone();
    isLerpingCamera = true;
    controls.autoRotate = false;
    currentMode = 'hotspot';

    const infoCard = document.getElementById('sky-3d-info-card');
    if (infoCard) {
      infoCard.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">● KOMPONENT DETAYI</span>
          <button id="sky-3d-info-close" class="text-slate-400 hover:text-white text-base leading-none cursor-pointer px-1">&times;</button>
        </div>
        <h4 class="text-white text-sm font-bold tracking-tight">${hotspot.title}</h4>
        <p class="text-slate-300 text-xs mt-1.5 leading-relaxed">${hotspot.desc}</p>
        <div class="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
          <span class="text-[10px] font-mono text-cyan-300">TSE EN 1886 D1/L1</span>
          <a href="#sky-quote-modal" data-sky-modal-trigger="teklif" class="text-[11px] font-bold text-[#040e1a] bg-[#09bde3] hover:bg-cyan-300 px-2.5 py-1 rounded transition-colors">Şartname Al ›</a>
        </div>
      `;
      infoCard.classList.remove('hidden');
      infoCard.classList.add('block');
      const closeBtn = document.getElementById('sky-3d-info-close');
      if (closeBtn) {
        closeBtn.onclick = () => {
          infoCard.classList.add('hidden');
          resetCameraView();
        };
      }
    }
  }

  function resetCameraView() {
    targetCamPos = new THREE.Vector3(24, 15, 28);
    targetLookAt = new THREE.Vector3(2.5, 3.2, 0);
    isLerpingCamera = true;
    controls.autoRotate = true;
    currentMode = 'all';
    const infoCard = document.getElementById('sky-3d-info-card');
    if (infoCard) infoCard.classList.add('hidden');
  }

  // Raycaster click on 3D pins
  renderer.domElement.addEventListener('click', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(pinMeshes, true);
    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj && !obj.userData?.hotspot) {
        obj = obj.parent;
      }
      if (obj && obj.userData?.hotspot) {
        focusHotspot(obj.userData.hotspot);
      }
    }
  });

  // --- 10. MODE CONTROLS (TÜMÜ, LİDAR, BIM WIREFRAME, CFD AIRFLOW) ---
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

    switch (mode) {
      case 'lidar':
        pointCloudGroup.visible = true;
        wireframeGroup.visible = false;
        airflowGroup.visible = false;
        ahuPointMat.size = 0.26;
        ahuPointMat.opacity = 1.0;
        break;
      case 'wireframe':
        pointCloudGroup.visible = false;
        wireframeGroup.visible = true;
        airflowGroup.visible = false;
        break;
      case 'cfd':
        pointCloudGroup.visible = true;
        wireframeGroup.visible = true;
        airflowGroup.visible = true;
        ahuPointMat.size = 0.12;
        ahuPointMat.opacity = 0.40;
        particleMat.size = 0.32;
        particleMat.opacity = 1.0;
        break;
      default: // 'all'
        pointCloudGroup.visible = true;
        wireframeGroup.visible = true;
        airflowGroup.visible = true;
        ahuPointMat.size = 0.20;
        ahuPointMat.opacity = 0.88;
        particleMat.size = 0.26;
        particleMat.opacity = 0.95;
        break;
    }
  };

  window.resetSky3DCamera = resetCameraView;

  // --- 11. ANIMATION TICK & RENDER LOOP ---
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Rotate Impeller (450 RPM visual) and Heat Wheel
    impellerGroup.rotation.x += delta * 6.5;
    rotorGroup.rotation.x += delta * 0.9;

    // Laser Beam Sweep Cycle (moves between -12m and +18m)
    const scanX = -8.0 + Math.sin(time * 0.7) * 16.0;
    scanBeam.position.x = scanX;

    // CFD Airflow Particle Streamline Animation
    const posAttr = particleGeo.attributes.position;
    for (let i = 0; i < particleCount; i++) {
      const pData = particleData[i];
      pData.progress += pData.speed;
      if (pData.progress >= 1.0) {
        pData.progress = 0.0;
      }

      const curve = flowCurves[pData.curveIdx];
      const point = curve.getPointAt(pData.progress);

      // Micro aerodynamic turbulence
      const turb = Math.sin(time * 7.0 + i) * 0.04;
      posAttr.setXYZ(
        i,
        point.x + pData.jitterX + turb,
        point.y + pData.jitterY + turb,
        point.z + pData.jitterZ + turb
      );
    }
    posAttr.needsUpdate = true;

    // Pulse Hotspot Rings
    pinMeshes.forEach((pin, idx) => {
      const ring = pin.children[1];
      if (ring) {
        const s = 1.0 + Math.sin(time * 3.8 + idx * 1.5) * 0.28;
        ring.scale.set(s, s, s);
      }
    });

    // Camera Lerp
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

  // Live Telemetry Sensors
  const flowVal = document.getElementById('sky-telemetry-flow');
  const pressVal = document.getElementById('sky-telemetry-press');
  setInterval(() => {
    if (flowVal) {
      const baseFlow = 48500;
      const variation = Math.floor(Math.sin(Date.now() / 2000) * 140);
      flowVal.innerText = (baseFlow + variation).toLocaleString('tr-TR');
    }
    if (pressVal) {
      const basePress = 420;
      const pVar = Math.floor(Math.sin(Date.now() / 1500) * 9);
      pressVal.innerText = (basePress + pVar);
    }
  }, 1000);
}

// Auto-run when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSky3DHero);
} else {
  initSky3DHero();
}

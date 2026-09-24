export const personal = {
  name: 'Shoban Ananth',
  location: 'Marlton, NJ',
  phone: '(856) 656-3133',
  email: 'shoban.ananth@outlook.com',
  linkedin: 'https://linkedin.com/in/shoban-an',
  github: 'https://github.com/shobanAnanth',
  title: 'Embedded Software Engineer · Computer Engineering @ Purdue',
  tagline:
    'Building software where it meets the physical world — real-time firmware, control systems, and on-device ML that has to hold its timing budget.',
  interests:
    'Drawn to systems with hard constraints: real-time firmware, hardware-in-the-loop validation, sensor fusion, and edge AI running inside a power envelope. Open to embedded and general SWE roles alike.',
};

export const education = {
  school: 'Purdue University',
  location: 'West Lafayette, IN',
  degree: 'Bachelor of Science in Computer Engineering',
  gpa: '3.60 / 4.00',
  period: 'Aug 2024 – May 2028',
  graduation: 'May 2028',
  coursework: [
    'Operating Systems',
    'Computer Architecture',
    'Digital System Design',
    'Signals & Systems (DSP)',
    'Data Structures',
  ],
};

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  /** Renders a "Current" pill on the timeline. */
  current?: boolean;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: 'Rolls-Royce',
    role: 'Embedded Software Engineer Intern (Controls and Systems)',
    location: 'West Lafayette / Indianapolis, IN',
    period: 'Sep 2026 – Present',
    current: true,
    bullets: [
      'Engineered a real-time cockpit virtualization simulator in C++, modeling jet instrumentation under fixed timing budgets.',
      'Accelerated controller validation 35% by writing real-time hardware-in-the-loop simulation code for engine dynamics.',
      'Expanded coverage across 20+ failure modes by designing nominal, edge-case, and fault-injection test scenarios.',
      'Cut manual validation effort by 8 hrs/week by automating test execution and results analysis in Python.',
    ],
  },
  {
    company: 'IBM',
    role: 'Backend Developer Intern — Machine Learning for z/OS',
    location: 'Poughkeepsie, NY',
    period: 'Jun 2026 – Sep 2026',
    bullets: [
      'Eliminated 10+ hours of manual testing per cycle by building a Python framework validating ML model scoring on z/OS.',
      'Cut per-cycle validation time 80% by automating 100+ CICS and WOLA scoring scenarios in a Jenkins CI/CD pipeline.',
      'Enabled real-time fraud scoring by deploying a gradient-boosted model behind REST endpoints served to CICS apps.',
    ],
  },
  {
    company: 'Embedded Systems @ Purdue (ES@P)',
    role: 'Embedded Software Engineer',
    location: 'West Lafayette, IN',
    period: 'Aug 2025 – May 2026',
    bullets: [
      'Developed real-time C/C++ firmware on Zephyr RTOS (ESP32) for a UAV flight controller and HIL simulation platform.',
      'Implemented cascaded PID control loops on a memory-constrained microcontroller, tuned against hardware-in-the-loop runs.',
      'Reduced control loop latency 50% by optimizing RTOS thread scheduling, synchronization, and interrupt handling.',
      'Built interrupt-driven sensor pipelines delivering deterministic sampling for closed-loop state estimation.',
      'Verified firmware timing and data integrity with logic analyzers across concurrent real-time tasks.',
    ],
  },
  {
    company: 'Kautex Textron',
    role: 'Machine Learning Researcher',
    location: 'West Lafayette, IN',
    period: 'Aug 2025 – Apr 2026',
    bullets: [
      'Built Python and SQL data pipelines processing 250K+ production records for real-time manufacturing insight.',
      'Improved prediction reliability to within 5% error through iterative feature engineering and XGBoost tuning.',
      'Built backend services and a React dashboard surfacing real-time predictions to 8+ engineers on the plant floor.',
    ],
  },
  {
    company: 'Purdue Electric Racing',
    role: 'Firmware Engineer',
    location: 'West Lafayette, IN',
    period: 'Aug 2024 – Dec 2024',
    bullets: [
      'Interfaced sensors on an electric race car by writing bare-metal STM32 C firmware driving GPIO and timer peripherals.',
      'Enabled vehicle bring-up and testing by integrating MCU sensor inputs across the software and hardware subteams.',
    ],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
  kind?: 'github' | 'demo' | 'external';
};

export type Metric = {
  /** Kept short so it reads as a stat — "40", "~50%", "1st". */
  value: string;
  label: string;
};

export type Project = {
  name: string;
  subtitle: string;
  tech: string[];
  period: string;
  award?: string;
  /** The high-level pitch. One paragraph. */
  summary: string;
  /** The fleshed-out detail — what was actually built, decision by decision. */
  highlights: string[];
  /** Optional stat row. Omit and the row is skipped. */
  metrics?: Metric[];
  links?: ProjectLink[];
  /**
   * Featured projects render as full-width showcase rows with a visual panel.
   * Everything else falls through to the compact card grid below them.
   */
  featured?: boolean;
  /**
   * Folder key under src/assets/<key>/ that the gallery pulls images from.
   * Drop files in that folder and they appear automatically, sorted by filename.
   * Until then the panel falls back to a spec sheet built from metrics + tech.
   */
  gallery?: string;
};

/**
 * Optional captions for gallery images, keyed by filename without extension.
 * Anything not listed renders without a caption — no need to fill it all in.
 */
export const galleryCaptions: Record<string, string> = {
  '01-uwb-mast':
    'UWB ranging board on the printed mast — the fixed anchor pose estimates are solved against.',
  '02-radar-esp32-benchtest':
    'Bench bring-up: the mmWave radar board alongside the ESP32-S3 running acquisition, fusion, and inference.',
};

export const projects: Project[] = [
  {
    name: 'RescueVision',
    subtitle: '1st Place @ StarkHacks — Sensor Fusion Track (sponsored by Analog Devices)',
    tech: ['C/C++', 'FreeRTOS', 'ESP32-S3', 'mmWave Radar', 'UWB', 'BLE', 'Sensor Fusion'],
    period: 'Apr 2026',
    award: '1st Place',
    featured: true,
    gallery: 'rescuevision',
    summary:
      'A real-time victim localization system for structural firefighters. It sees through zero-visibility smoke by fusing 60GHz mmWave radar, UWB ranging, and magnetometer data on an ESP32-S3, then streams pose estimates to an iOS client — with every stage of inference running on-device.',
    highlights: [
      'Processed 60GHz mmWave radar point clouds and UWB ranging on an ESP32-S3 to produce real-time bearing and distance estimates.',
      'Deployed a neural network on the microcontroller within on-chip memory limits, classifying radar returns in real time.',
      'Scheduled sensor acquisition, fusion, and inference as concurrent FreeRTOS tasks with real-time deadlines.',
      'Fused radar, UWB, and magnetometer data on-device, streaming pose estimates over a BLE link to an iOS client.',
      'Kept localization functional in zero-visibility fire conditions by running all inference on-device with no cloud offload.',
    ],
    metrics: [
      { value: '1st', label: 'of the ADI track' },
      { value: '3', label: 'Sensors fused on-device' },
      { value: '0', label: 'Cloud dependencies' },
    ],
  },
  {
    name: 'Edge AI Perception System',
    subtitle: 'Jetson Orin Nano — on-device vision under a power budget',
    tech: ['C++', 'Python', 'Embedded Linux', 'TensorRT', 'YOLOv8', 'Time-of-Flight'],
    period: 'Aug 2026 – Present',
    featured: true,
    gallery: 'edge-ai',
    summary:
      'A fully offline perception stack on a Jetson Orin Nano: RGB and Time-of-Flight depth fused into real-time detection and tracking, with the models compiled down to TensorRT so it all fits inside a 15W envelope.',
    highlights: [
      'Brought up an ADTF3175 ToF camera on embedded Linux (JetPack 6.2/L4T) via its CSI-2 driver and a systemd service.',
      'Built a real-time YOLOv8 perception pipeline sustaining 40 FPS detection and tracking fully on-device and offline.',
      'Optimized models into TensorRT engines for GPU-accelerated inference within a 15W power envelope.',
      'Fused RGB with Time-of-Flight depth for distance-gated detection and 3D reasoning about the scene.',
    ],
    metrics: [
      { value: '40', label: 'FPS sustained' },
      { value: '15W', label: 'Power envelope' },
      { value: '100%', label: 'On-device, offline' },
    ],
  },
  {
    name: 'Menu Finder',
    subtitle: 'AI-Powered Restaurant Discovery',
    tech: ['React', 'Node.js', 'OpenAI', 'Embeddings', 'Cheerio', 'Playwright', 'Google Places API'],
    period: 'Mar 2026 – Jun 2026',
    summary:
      'Full-stack app that turns the chaos of restaurant websites into a searchable menu graph — ask for "spicy vegetarian under $15" and get real dishes off real menus.',
    highlights: [
      'Built an LLM pipeline converting scraped, wildly inconsistent restaurant HTML into structured menu data against a validated schema.',
      'Powered semantic search with OpenAI embeddings, so queries match on meaning rather than keywords.',
      'Designed a hybrid scraper — Cheerio for static pages, Playwright for JavaScript-rendered ones — with schema validation catching bad extractions before they reach the index.',
      'Grounded results in currently-open restaurants near the user via the Google Places API.',
    ],
  },
  {
    name: 'Driver Safety Monitoring',
    subtitle: 'Embedded Safety System on Raspberry Pi',
    tech: ['Python', 'Raspberry Pi', 'Multithreading', 'Interrupt-driven I/O'],
    period: 'Mar 2026 – Jun 2026',
    summary:
      'A Raspberry Pi safety system that detects rapid deceleration, instability, and unsafe following distance, then fires driver alerts in real time.',
    highlights: [
      'Built on interrupt-driven sensing rather than polling — an alert that arrives late is not an alert.',
      'Used multithreading to keep the control loop deterministic while sensor reads and alerting run concurrently.',
      'Cut response latency ~35% against a polling baseline.',
    ],
  },
  {
    name: 'Adaptive Cruise Control Simulation',
    subtitle: 'Vehicle Dynamics & Control Modeling',
    tech: ['MATLAB', 'Python', 'Time-Series Analysis', 'Control Systems'],
    period: 'Apr 2025 – May 2025',
    summary:
      'MATLAB and Python simulation modeling vehicle dynamics and adaptive cruise control behavior from time-series sensor data.',
    highlights: [
      'Modeled ACC response against recorded time-series sensor data to validate control performance before touching hardware.',
      'Surfaced tuning trends across parameter sweeps, making it obvious which gains actually mattered.',
      'Stress-tested the control logic against edge cases that would have been expensive to reproduce on a real vehicle.',
    ],
  },
  {
    name: 'Employee Management System',
    subtitle: 'Full-Stack REST API + CRUD App',
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL', 'REST'],
    period: 'Jul 2025 – Aug 2025',
    summary:
      'End-to-end CRUD app built solo with Node/Express, React, and PostgreSQL — a deliberate exercise in clean route design and query shaping.',
    highlights: [
      'Designed the REST surface first, then built to it: predictable routes, consistent error shapes, no surprises for the client.',
      'Shaped PostgreSQL queries to do the work in the database instead of in application loops.',
      'Refactored data-handling paths cut backend complexity ~50% versus the initial implementation.',
    ],
  },
];

export const skills = {
  Languages: [
    'C', 'C++', 'Python', 'Assembly', 'SystemVerilog', 'MATLAB', 'Java', 'SQL',
  ],
  Embedded: [
    'Zephyr RTOS', 'FreeRTOS', 'ESP-IDF', 'ESP32/ESP32-S3', 'STM32',
    'Bare-Metal Firmware', 'GPIO/Timers', 'Interrupts',
  ],
  'Signals & Wireless': [
    'DSP', 'mmWave Radar', 'UWB Ranging', 'BLE', 'Sensor Fusion',
    'Time-of-Flight Depth', 'PID Control',
  ],
  Tools: [
    'Logic Analyzers', 'Hardware-in-the-Loop', 'TensorRT', 'NVIDIA Jetson',
    'Git', 'Embedded Linux', 'Docker', 'Jenkins', 'CI/CD',
  ],
};

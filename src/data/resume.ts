export const personal = {
  name: 'Shoban Ananth',
  location: 'Marlton, NJ',
  phone: '(856) 656-3133',
  email: 'shoban.ananth@outlook.com',
  linkedin: 'https://linkedin.com/in/shoban-an',
  github: 'https://github.com/shobanAnanth',
  title: 'Software Engineer · Computer Engineering @ Purdue',
  tagline:
    'Building software across every layer — full-stack products, AI-powered systems, and embedded firmware where code meets the real world.',
  interests:
    'Drawn to work that spans the stack: full-stack product engineering, applied ML, and embedded systems where software meets the physical world. Open to general SWE roles, with embedded a strong second.',
};

export const education = {
  school: 'Purdue University',
  location: 'West Lafayette, IN',
  degree: 'Bachelor of Science in Computer Engineering',
  graduation: 'Dec 2027',
  coursework: [
    'Operating Systems',
    'Data Structures & Algorithms',
    'Computer Architecture',
    'Digital System Design',
    'Probability & Statistics',
  ],
};

export const experience = [
  {
    company: 'IBM',
    role: 'Software Engineer Intern',
    location: 'Poughkeepsie, NY',
    period: 'Incoming Summer 2026',
    bullets: [
      'Joining the Machine Learning for z/OS (MLz) team to work on backend services bringing ML capabilities to IBM Z mainframe workloads.',
    ],
  },
  {
    company: 'Kautex Textron – Purdue Data Mine',
    role: 'Machine Learning Engineer',
    location: 'West Lafayette, IN',
    period: 'Aug 2025 – Present',
    bullets: [
      'Shipped an end-to-end ML system predicting bulk density across 250K+ production records — now used daily by 8+ engineers to make real-time manufacturing calls.',
      'Owned the full stack: Python data pipeline, XGBoost model tuned to ±5% error, React dashboard, and the validation suite that keeps it honest in production.',
    ],
  },
  {
    company: 'Embedded Systems @ Purdue (ES@P)',
    role: 'Embedded Software Engineer',
    location: 'West Lafayette, IN',
    period: 'Aug 2025 – Present',
    bullets: [
      'Wrote real-time C firmware on Zephyr RTOS (ESP32) for a HIL UAV sensor platform; cut end-to-end latency ~50% by retuning RTOS scheduling and synchronization.',
      'Validated multi-threaded timing and data integrity with logic analyzers across an interrupt-driven sampling pipeline — deterministic enough to trust downstream.',
    ],
  },
  {
    company: 'Purdue Electric Racing (PER)',
    role: 'Software Engineer',
    location: 'West Lafayette, IN',
    period: 'Aug 2024 – Dec 2024',
    bullets: [
      'Built STM32 firmware (GPIO, timers) interfacing sensors on Purdue’s electric race car; cut team integration time ~20% by bridging the software and hardware groups.',
      'Designed an LED diagnostic + fault-code scheme that isolated hardware issues faster, reducing debug time ~30% during competition prep.',
    ],
  },
];

export const projects = [
  {
    name: 'RescueVision',
    subtitle: '1st Place @ StarkHacks – Sensor Fusion Track (Sponsored by ADI)',
    tech: ['ESP32-S3', 'ARKit', 'mmWave Radar', 'UWB', 'Neural Network', 'Sensor Fusion'],
    period: 'Apr 2026',
    award: '1st Place',
    description:
      'A real-time victim localization system for structural firefighters that overlays victims in 3D AR through zero-visibility smoke. It fuses 60GHz mmWave radar, UWB positioning, and ARKit into a three-layer sensor pipeline running on an ESP32-S3, with an on-device neural network classifying radar returns as conscious, unconscious, or animal — prioritizing rescues without any cloud dependence. Won 1st place at StarkHacks’ Sensor Fusion track, sponsored by Analog Devices.',
  },
  {
    name: 'Menu Finder',
    subtitle: 'AI-Powered Restaurant Discovery',
    tech: ['React', 'Node.js', 'OpenAI', 'Embeddings', 'Cheerio', 'Playwright', 'Google Places API'],
    period: 'Mar 2026 – Present',
    description:
      'Full-stack app that turns the chaos of restaurant websites into a searchable menu graph. An LLM pipeline converts scraped HTML into structured menu data, and OpenAI embeddings power semantic queries like "spicy vegetarian under $15." A hybrid Cheerio + Playwright scraper with schema validation keeps the data layer resilient against the inconsistency of real-world restaurant sites.',
  },
  {
    name: 'Driver Safety Monitoring',
    subtitle: 'Embedded Safety System on Raspberry Pi',
    tech: ['Python', 'Raspberry Pi', 'Multithreading', 'Interrupt-driven I/O'],
    period: 'Mar 2026 – Present',
    description:
      'A Raspberry Pi safety system that detects rapid deceleration, instability, and unsafe following distance and fires driver alerts in real time. Built around interrupt-driven sensing and multithreading to give the control loop the determinism a safety-critical alert needs — cutting response latency ~35% over a polling baseline.',
  },
  {
    name: 'Adaptive Cruise Control Simulation',
    subtitle: 'Vehicle Dynamics & Control Modeling',
    tech: ['MATLAB', 'Python', 'Time-Series Analysis', 'Control Systems'],
    period: 'Apr 2025 – May 2025',
    description:
      'MATLAB and Python simulation modeling vehicle dynamics and ACC behavior from time-series sensor data. Used to validate control performance, surface tuning trends, and stress-test the logic before any of it touches real hardware.',
  },
  {
    name: 'Employee Management System',
    subtitle: 'Full-Stack REST API + CRUD App',
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL', 'REST'],
    period: 'Jul 2025 – Aug 2025',
    description:
      'End-to-end CRUD app built solo with Node/Express, React, and PostgreSQL — a deliberate exercise in clean route design and query shaping. Refactored data-handling paths cut backend complexity ~50% versus the initial implementation.',
  },
];

export const skills = {
  'Languages & Frameworks': [
    'Java', 'Python', 'Go', 'JavaScript', 'TypeScript', 'SQL',
    'C/C++', 'R', 'MATLAB', 'React', 'Node.js', 'Next.js',
  ],
  'AI / ML Tools': [
    'OpenAI API', 'Embeddings', 'LLMs', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost',
  ],
  'Systems & Tools': [
    'ETL Pipelines', 'RTOS', 'Multithreading', 'Feature Engineering',
    'Git', 'Docker', 'Linux', 'CI/CD', 'AWS',
  ],
};

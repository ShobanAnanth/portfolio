export const personal = {
  name: 'Shoban Ananth',
  location: 'Marlton, NJ',
  phone: '(856) 656-3133',
  email: 'shoban.ananth@outlook.com',
  linkedin: 'https://linkedin.com/in/shoban-an',
  github: 'https://github.com/shobanAnanth',
  title: 'Computer Engineering Student @ Purdue',
  tagline: 'Building at the intersection of embedded systems, machine learning, and full-stack engineering.',
};

export const education = {
  school: 'Purdue University',
  location: 'West Lafayette, IN',
  degree: 'Bachelor of Science in Computer Engineering',
  gpa: '3.69 / 4.0',
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
    role: 'Backend Developer Intern',
    location: 'Poughkeepsie, NY',
    period: 'Incoming Summer 2026',
    bullets: [],
  },
  {
    company: 'Kautex Textron – Purdue Data Mine',
    role: 'Machine Learning Engineer / Researcher',
    location: 'West Lafayette, IN',
    period: 'Aug 2025 – Present',
    bullets: [
      'Engineered an end-to-end ML-powered bulk density prediction system using XGBoost across 250K+ production records to deliver real-time manufacturing insights',
      'Built scalable backend services (Python, SQL) for data pipelines and API integration with Kautex Textron systems',
      'Developed React dashboard serving real-time predictions to 8+ engineers, with query latency over 250K-row tables',
      'Optimized XGBoost model via feature engineering and tuning, achieving ±5% error and improving reliability',
      'Implemented validation pipelines to ensure model stability, data integrity, and consistent performance',
    ],
  },
  {
    company: 'Embedded Systems @ Purdue',
    role: 'Firmware Developer',
    location: 'West Lafayette, IN',
    period: 'Aug 2025 – Present',
    bullets: [
      'Developed real-time C firmware on Zephyr RTOS (ESP32) for a HIL multi-sensor UAV simulation platform',
      'Reduced latency by ~50% by optimizing RTOS scheduling and synchronization, improving real-time data reliability',
      'Enabled accurate time-series data collection via interrupt-driven pipelines, ensuring deterministic sampling',
      'Validated system timing and data integrity using logic analyzers, ensuring consistency in multithreaded systems',
    ],
  },
  {
    company: 'Purdue Electric Racing (PER)',
    role: 'Embedded Software Developer',
    location: 'West Lafayette, IN',
    period: 'Aug 2024 – Dec 2024',
    bullets: [
      'Integrated MCU inputs across software and hardware teams for an electric race car, cutting integration time by ~20%',
      'Developed STM32 C firmware using GPIO and timers to interface sensors for real-time control and data collection',
      'Reduced debugging time by ~30% by using LED diagnostics and fault codes to isolate hardware issues',
    ],
  },
];

export const projects = [
  {
    name: 'Menu Finder',
    subtitle: 'AI-Powered Restaurant Discovery App',
    tech: ['React', 'Node.js', 'OpenAI', 'Cheerio', 'Playwright'],
    period: 'Mar 2026 – Present',
    bullets: [
      'Built a full-stack restaurant app with Google Places API for real-time, location-based search and filtering',
      'Engineered an LLM pipeline using OpenAI to convert unstructured restaurant websites into structured menu data',
      'Implemented semantic menu search using OpenAI embeddings, enabling natural language queries across menus',
      'Built hybrid scraping (Cheerio + Playwright) with schema validation for robust data extraction across sites',
    ],
  },
  {
    name: 'RescueVision',
    subtitle: '1st Place @ StarkHacks – Sensor Fusion Track (Sponsored by ADI)',
    tech: ['ESP32-S3', 'ARKit', 'mmWave', 'UWB', 'Neural Network'],
    period: 'Apr 2026',
    award: '🏆 1st Place',
    bullets: [
      'Built a real-time victim localization system for structural firefighting, fusing 60GHz mmWave radar, UWB positioning, and ARKit into a three-layer sensor pipeline enabling 3D AR victim overlay in zero-visibility conditions',
      'Fused UWB, magnetometer, and mmWave point cloud on ESP32-S3 for real-time victim bearing and distance',
      'Deployed a lightweight neural network on the ESP32-S3 to classify mmWave point cloud returns as conscious, unconscious, or animal targets in real time, enabling on-device rescue prioritization without cloud offloading',
    ],
  },
  {
    name: 'Driver Safety Monitoring & Alert System',
    subtitle: 'Raspberry Pi + Sensors',
    tech: ['Python', 'Raspberry Pi', 'Multithreading', 'Interrupt-driven'],
    period: 'Mar 2026 – Present',
    bullets: [
      'Wrote Python scripts to evaluate sensor signal quality, stability, and responsiveness under varying conditions',
      'Implemented interrupt-driven sensing and multithreading, reducing latency ~35% and ensuring determinism',
      'Designed control logic to detect rapid deceleration, instability, and unsafe following distance, triggering alerts',
    ],
  },
  {
    name: 'Adaptive Cruise Control Simulation System',
    subtitle: 'Vehicle Dynamics & Control Simulation',
    tech: ['MATLAB', 'Python', 'Time-Series Analysis'],
    period: 'Apr 2025 – May 2025',
    bullets: [
      'Processed and validated time-series sensor data to model vehicle dynamics and control behavior',
      'Visualized time-series vehicle data in MATLAB to identify control trends and validate system performance',
    ],
  },
  {
    name: 'Full-Stack Employee Management System',
    subtitle: 'REST API + CRUD Web App',
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL'],
    period: 'Jul 2025 – Aug 2025',
    bullets: [
      'Built management system with REST APIs and CRUD workflows using Node.js, Express, React, and PostgreSQL',
      'Optimized database queries and backend route handling, reducing data-handling complexity by ~50%',
    ],
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

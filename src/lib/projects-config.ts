/**
 * Project Configuration
 * Defines the curated portfolio order and public-safe metadata.
 */

export interface CustomProject {
  slug: string;
  name: string;
  description: string;
  html_url?: string;
  github_url?: string;
  demo_url?: string;
  website_url?: string;
  language: string;
  category: 'professional' | 'university' | 'personal';
  sourceType: 'open-source' | 'closed-source' | 'proprietary';
  priority: number;
  stargazers_count?: number;
  tags?: string[];
  role?: string;
  period?: string;
  impact?: string;
  status?: string;
  confidential?: boolean;
  group?: 'professional' | 'game-dev' | 'technical';
  thumbnail?: string;
  thumbnailFit?: 'cover' | 'contain';
  thumbnailBackground?: string;
  thumbnailPosition?: string;
  gallery_images?: string[];
  video_url?: string;
  hasInternalPage: boolean;
}

export type ProjectSource = CustomProject;

export const featuredProjects: CustomProject[] = [
  {
    slug: 'naiss-ride',
    name: 'Naiss Ride',
    description: 'Public-safe case study of production mobile engineering across rides, feed, camera, gamification, auth, payments, reliability, and release quality.',
    language: 'React Native',
    category: 'professional',
    sourceType: 'proprietary',
    priority: 1,
    role: 'Mobile Software Engineer',
    period: 'June 2026 - Present',
    impact: 'Shipping production features inside a live startup mobile app with observability, testing, and release discipline.',
    status: 'Active startup work',
    confidential: true,
    group: 'professional',
    tags: ['React Native', 'Expo', 'TypeScript', 'Convex', 'Sentry', 'PostHog'],
    thumbnail: '/assets/projects/naiss-ride-logo.png',
    thumbnailFit: 'contain',
    thumbnailBackground: '#03E888',
    hasInternalPage: true,
  },
  {
    slug: 'easeaccess24-automation',
    name: 'EaseAccess24 Automation',
    description: 'Internal developer productivity and AI automation work, including environment tooling that turns fragile manual setup into repeatable CLI workflows.',
    language: 'Automation',
    category: 'professional',
    sourceType: 'proprietary',
    priority: 2,
    role: 'Software Engineering Intern',
    period: 'June 2026 - Present',
    impact: 'Reduced environment-switching friction with Vercel and Psono-backed CLI commands for staging and production workflows.',
    status: 'Active internship',
    confidential: true,
    group: 'professional',
    tags: ['CLI', 'AI Automation', 'Vercel', 'Psono', 'Developer Experience'],
    thumbnail: '/assets/projects/easeaccess24-logo.png',
    thumbnailFit: 'contain',
    hasInternalPage: true,
  },
  {
    slug: 'cleanr',
    name: 'Cleanr',
    description: 'Uber-like apartment-cleaning marketplace built as a dual mobile app ecosystem for users and cleaners.',
    website_url: 'https://www.getcleanr.io/',
    language: 'React Native',
    category: 'professional',
    sourceType: 'closed-source',
    priority: 3,
    role: 'Tech Lead & Full-Stack Developer',
    period: 'March 2025 - April 2026',
    impact: 'Led a 3-developer team across booking, matching, payments, maps, cancellation logic, and mobile release execution.',
    status: 'Past startup build',
    confidential: true,
    group: 'professional',
    tags: ['React Native', 'Expo', 'Firebase', 'Stripe', 'Google Maps'],
    thumbnail: '/assets/projects/cleanr pic.webp',
    video_url: 'https://youtu.be/81EEbJNf314',
    hasInternalPage: true,
  },
  {
    slug: 'streamscope',
    name: 'StreamScope',
    description: 'Real-time chat intelligence MVP for live streamers, shipped from zero in 10 days and awarded 2nd place at IE Tech Venture Bootcamp 2026.',
    language: 'Full Stack',
    category: 'university',
    sourceType: 'closed-source',
    priority: 4,
    role: 'Technical Lead',
    period: '2026',
    impact: 'Turned a startup-style problem into a deployed MVP under a compressed deadline.',
    status: '2nd place',
    confidential: true,
    group: 'professional',
    tags: ['Real-Time', 'Chat Intelligence', 'MVP', 'Product Strategy'],
    hasInternalPage: true,
  },
  {
    slug: 'chess-anomaly-detection',
    name: 'Chess Anomaly Detection',
    description: 'Machine learning system for behavioral anomaly detection in online chess, comparing six unsupervised detectors and an ensemble review workflow.',
    github_url: 'https://github.com/Kiril-P/Final-Group-Project-Machine-Learning',
    language: 'Python',
    category: 'university',
    sourceType: 'open-source',
    priority: 5,
    role: 'ML Project Contributor',
    period: '2026',
    impact: 'LOF reached 0.971 test AUC on subtle synthetic injection; ensemble flagged 312 of 17,909 players for review.',
    status: '100/100 ML project',
    group: 'technical',
    tags: ['Machine Learning', 'Anomaly Detection', 'Lichess', 'Python'],
    thumbnail: '/assets/projects/chess-anomaly-detection.jpg',
    thumbnailFit: 'cover',
    thumbnailPosition: 'center',
    gallery_images: ['/assets/projects/chess pic2.webp'],
    hasInternalPage: true,
  },
  {
    slug: 'chess-engine',
    name: 'Chess Engine',
    description: 'Advanced chess engine implementing move validation, a GUI, turn switching, legal move highlighting, and bot play.',
    github_url: 'https://github.com/Kiril-P/ChessEngine',
    language: 'C++',
    category: 'university',
    sourceType: 'open-source',
    priority: 6,
    role: 'University Project Developer',
    period: '2025',
    impact: 'Built chess rules, GUI interaction, move highlighting, check/checkmate handling, and bot move logic.',
    status: 'Algorithms project',
    group: 'technical',
    tags: ['AI', 'Algorithms', 'C++'],
    thumbnail: '/assets/projects/chess pic1.webp',
    gallery_images: ['/assets/projects/chess pic2.webp'],
    video_url: 'https://youtu.be/g9J_QGgzTGg',
    hasInternalPage: true,
  },
  {
    slug: 'polygon-protocol',
    name: 'Polygon Protocol',
    description: 'Browser-playable geometric roguelite built in Godot for Mini Jam 202, centered on shape evolution, dash combat, bosses, and meta progression.',
    github_url: 'https://github.com/Kiril-P/Polygon-Protocol',
    demo_url: 'https://kirilp.itch.io/polygon-protocol',
    language: 'Godot',
    category: 'personal',
    sourceType: 'open-source',
    priority: 7,
    role: 'Solo Developer',
    period: '2026',
    impact: 'Released on itch.io with browser play and desktop downloads.',
    status: 'Mini Jam 202',
    group: 'game-dev',
    tags: ['Game Dev', 'Roguelite', 'Bullet Hell', 'GDScript'],
    thumbnail: '/assets/projects/polygonprotocol.webp',
    video_url: 'https://youtu.be/Yu9m_tLXc84',
    hasInternalPage: true,
  },
  {
    slug: 'starburst',
    name: 'StarBurst',
    description: 'Phaser bullet hell with multiple ships, bosses, power-ups, progression updates, and browser-first arcade pacing.',
    github_url: 'https://github.com/Kiril-P/starburst',
    demo_url: 'https://kirilp.itch.io/starburst',
    language: 'JavaScript',
    category: 'personal',
    sourceType: 'open-source',
    priority: 8,
    role: 'Solo Developer',
    period: '2025',
    impact: 'Submitted to Bullet Hell Jam 6 and iterated with devlogs and player feedback.',
    status: 'Bullet Hell Jam 6',
    group: 'game-dev',
    tags: ['Phaser', 'Bullet Hell', 'Canvas', 'Game Dev'],
    thumbnail: '/assets/projects/starburst1.webp',
    gallery_images: [
      '/assets/projects/starburst2.webp',
      '/assets/projects/starburst3.webp',
      '/assets/projects/starburst4.webp',
      '/assets/projects/starburst5.webp'
    ],
    hasInternalPage: true,
  },
  {
    slug: 'nomnomnow',
    name: 'NomNomNow',
    description: 'Serverless food delivery backend architecture using AWS Lambda, DynamoDB, API Gateway, Cognito, and real-time order workflow patterns.',
    github_url: 'https://github.com/Kiril-P/Cloud-Computing-Final-Project',
    demo_url: 'https://kpetrovski.me/Cloud-Computing-Final-Project/',
    language: 'TypeScript',
    category: 'university',
    sourceType: 'open-source',
    priority: 9,
    role: 'Cloud Architecture Developer',
    period: '2025',
    impact: 'Designed a complete cloud-backed ordering system with serverless deployment and API architecture.',
    status: 'University project',
    group: 'technical',
    tags: ['AWS', 'TypeScript', 'Serverless', 'APIs'],
    thumbnail: '/assets/projects/nomnomnow pic.webp',
    video_url: 'https://youtu.be/CGYAp0squuc',
    hasInternalPage: true,
  },
  {
    slug: 'battleship',
    name: 'Battleship Multiplayer',
    description: 'Networked multiplayer Battleship in C with POSIX sockets, custom binary protocol, threading, and terminal UI.',
    github_url: 'https://github.com/Kiril-P/Battleship-Multiplayer-Game',
    language: 'C',
    category: 'university',
    sourceType: 'open-source',
    priority: 10,
    role: 'Systems Programmer',
    period: '2025',
    impact: 'Built a LAN-playable client-server game with concurrent connection handling.',
    status: 'Systems project',
    group: 'technical',
    tags: ['Networking', 'C', 'Sockets', 'Threads'],
    thumbnail: '/assets/projects/Battleship.webp',
    gallery_images: [
      '/assets/projects/Battleship (1).webp',
      '/assets/projects/Battleship (2).webp',
      '/assets/projects/Battleship (3).webp',
      '/assets/projects/Battleship (4).webp'
    ],
    hasInternalPage: true,
  },
  {
    slug: 'solitaire',
    name: 'Solitaire',
    description: 'Classic card game implementation with drag-and-drop mechanics and win-state detection.',
    language: 'Java',
    category: 'university',
    sourceType: 'open-source',
    priority: 11,
    role: 'University Project Developer',
    period: '2025',
    impact: 'Implemented card movement, rules, and GUI interaction for a complete playable solitaire project.',
    status: 'Java GUI project',
    group: 'game-dev',
    tags: ['Java', 'GUI', 'Logic'],
    thumbnail: '/assets/projects/solitaire.webp',
    gallery_images: [
      '/assets/projects/solitaire2.webp',
      '/assets/projects/solitaire3.webp'
    ],
    hasInternalPage: true,
  }
];

export const shouldUseFeaturedProjects = featuredProjects.length > 0;

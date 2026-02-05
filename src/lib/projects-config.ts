/**
 * Project Configuration
 * Define which projects to feature in your Bento grid.
 */

export interface CustomProject {
  slug: string; // Unique URL identifier
  name: string;
  description: string;
  html_url?: string; // External link (GitHub or Live Demo) - deprecated, use github_url or demo_url
  github_url?: string; // GitHub repository link
  demo_url?: string; // Live demo or playable link (e.g., itch.io)
  website_url?: string; // Product website (e.g., company landing page)
  language: string;
  category: 'professional' | 'university' | 'personal';
  sourceType: 'open-source' | 'closed-source' | 'proprietary';
  priority: number;
  stargazers_count?: number;
  tags?: string[];
  thumbnail: string; // Primary image for Bento grid
  gallery_images?: string[]; // Additional images for deep-dive page
  video_url?: string; // YouTube loop URL
  hasInternalPage: boolean;
}

export type ProjectSource = CustomProject;

// Featured Projects Configuration
// Priority: Cleanr -> Polygon -> Chess -> Starburst -> Battleship
export const featuredProjects: CustomProject[] = [
  {
    slug: 'cleanr',
    name: 'Cleanr',
    description: 'Leading the development of a cloud-native SaaS platform for commercial cleaning management. Built with robust serverless architecture.',
    website_url: 'https://www.getcleanr.io/',
    language: 'Cloud/SaaS',
    category: 'professional',
    sourceType: 'closed-source', // Displays as "Closed Source"
    priority: 1,
    tags: ['SaaS', 'Cloud Native', 'Enterprise'],
    thumbnail: '/assets/projects/cleanr pic.png',
    hasInternalPage: true,
  },
  {
    slug: 'polygon-protocol',
    name: 'Polygon Protocol',
    description: 'A high-octane geometric roguelite built in Godot Engine. Evolve from a simple shape into a complex polygon weapon system.',
    github_url: 'https://github.com/Kiril-P/Polygon-Protocol',
    demo_url: 'https://kirilp.itch.io/polygon-protocol',
    language: 'Godot',
    category: 'personal',
    sourceType: 'open-source',
    priority: 2,
    stargazers_count: 0,
    tags: ['Game Dev', 'Roguelite', 'Bullet Hell'],
    thumbnail: '/assets/projects/polygonprotocol.png',
    video_url: 'https://youtu.be/Yu9m_tLXc84',
    hasInternalPage: true,
  },
  {
    slug: 'chess-engine',
    name: 'Chess Engine',
    description: 'Advanced chess engine implementing minimax algorithm with alpha-beta pruning. Features move validation, AI opponent, and game state management.',
    language: 'C++',
    category: 'university',
    sourceType: 'open-source',
    priority: 3,
    stargazers_count: 12,
    tags: ['AI', 'Algorithms', 'C++'],
    thumbnail: '/assets/projects/chess pic1.png',
    gallery_images: ['/assets/projects/chess pic2.png'],
    video_url: 'https://youtu.be/g9J_QGgzTGg',
    hasInternalPage: true,
  },
  {
    slug: 'starburst',
    name: 'Starburst',
    description: 'High-performance browser-based bullet hell shooter. Optimized 60FPS rendering loop using HTML5 Canvas and vanilla JavaScript.',
    github_url: 'https://github.com/Kiril-P/starburst',
    demo_url: 'https://kirilp.itch.io/starburst',
    language: 'JavaScript',
    category: 'personal',
    sourceType: 'open-source',
    priority: 4,
    stargazers_count: 5,
    tags: ['Canvas', 'Game Dev', 'Performance'],
    thumbnail: '/assets/projects/starburst1.png',
    gallery_images: [
      '/assets/projects/starburst2.png',
      '/assets/projects/starburst3.png',
      '/assets/projects/starburst4.png',
      '/assets/projects/starburst5.png'
    ],
    hasInternalPage: true,
  },
  {
    slug: 'battleship',
    name: 'Battleship Multiplayer',
    description: 'Networked multiplayer game built in C using low-level socket programming. Handles concurrent connections and game state synchronization.',
    github_url: 'https://github.com/Kiril-P/Battleship-Multiplayer-Game',
    language: 'C',
    category: 'university',
    sourceType: 'open-source',
    priority: 5,
    stargazers_count: 8,
    tags: ['Networking', 'C', 'Sockets'],
    thumbnail: '/assets/projects/Battleship.png',
    gallery_images: [
      '/assets/projects/Battleship (1).png',
      '/assets/projects/Battleship (2).png',
      '/assets/projects/Battleship (3).png',
      '/assets/projects/Battleship (4).png'
    ],
    hasInternalPage: true,
  },
  {
    // NomNomNow - Included for deep-dive access even if not in top 5 featured grid
    slug: 'nomnomnow',
    name: 'NomNomNow',
    description: 'Serverless cloud computing project leveraging AWS Lambda and DynamoDB for scalable food delivery architecture.',
    language: 'TypeScript',
    category: 'university',
    sourceType: 'open-source',
    priority: 6,
    tags: ['AWS', 'Serverless', 'Cloud'],
    thumbnail: '/assets/projects/nomnomnow pic.png',
    video_url: 'https://youtu.be/CGYAp0squuc',
    hasInternalPage: true,
  },
  {
    // Solitaire - Included for deep-dive access
    slug: 'solitaire',
    name: 'Solitaire',
    description: 'Classic card game implementation with drag-and-drop mechanics and win-state detection.',
    language: 'Java',
    category: 'university',
    sourceType: 'open-source',
    priority: 7,
    tags: ['Java', 'GUI', 'Logic'],
    thumbnail: '/assets/projects/solitaire.png',
    gallery_images: [
      '/assets/projects/solitaire2.png',
      '/assets/projects/solitaire3.png'
    ],
    hasInternalPage: true,
  }
];

export const shouldUseFeaturedProjects = featuredProjects.length > 0;

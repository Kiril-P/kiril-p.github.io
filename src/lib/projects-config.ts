/**
 * Project Configuration
 * Define which projects to feature in your Bento grid.
 * 
 * Options:
 * - Use 'github:repoName' to automatically fetch from GitHub API
 * - Use custom objects for non-GitHub projects (game dev, etc.)
 */

export interface CustomProject {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count?: number;
  tags?: string[]; // e.g., ['Game Dev', 'Unity', 'C#']
  thumbnail?: string; // Optional image URL
}

export type ProjectSource = `github:${string}` | CustomProject;

// TEMPORARY: Manual project list to avoid GitHub API rate limits during development
export const featuredProjects: ProjectSource[] = [
  {
    name: 'Polygon Protocol',
    description: 'A high-octane geometric roguelite built in Godot Engine where your shape is your weapon. Evolve from a circle into complex polygons, defeat challenging bosses, and survive the digital void. Features permanent meta-progression system, dynamic difficulty scaling, and procedurally generated encounters. Published on itch.io with full controller support.',
    html_url: 'https://kirilp.itch.io/polygon-protocol',
    language: 'Godot',
    stargazers_count: 0,
    tags: ['Game Dev', 'Roguelite', 'Bullet Hell'],
  },
  {
    name: 'The-Sundering-of-Arkhon',
    description: 'Interactive CLI adventure game with 500+ lines of C code, featuring a dynamic turn-based combat system, procedural dungeon generation, and persistent save states. Built for Advanced Programming course, demonstrating strong fundamentals in memory management, data structures, and algorithm design. Includes enemy AI, inventory system, and multiple story paths.',
    html_url: 'https://github.com/Kiril-P/The-Sundering-of-Arkhon',
    language: 'C',
    stargazers_count: 1,
    tags: ['CLI', 'Game Dev', 'Data Structures'],
  },
  {
    name: 'starburst',
    description: 'Fast-paced bullet hell game built with JavaScript and HTML5 Canvas. Features smooth 60 FPS gameplay, particle effects system, progressive difficulty curve, and boss battles. Implemented collision detection, enemy AI patterns, and score tracking with local storage persistence. Showcases strong understanding of game loops and rendering optimization.',
    html_url: 'https://github.com/Kiril-P/starburst',
    language: 'JavaScript',
    stargazers_count: 0,
    tags: ['Game Dev', 'Canvas', 'Browser'],
  },
  {
    name: 'Cloud-Computing-Final-Project',
    description: 'Full-stack serverless web application leveraging AWS Lambda, API Gateway, and DynamoDB. Built with TypeScript, featuring RESTful API endpoints, JWT authentication, and automatic scaling. Implements infrastructure as code with CloudFormation, CI/CD pipeline with GitHub Actions, and comprehensive error handling. Achieved 99.9% uptime with sub-100ms response times.',
    html_url: 'https://github.com/Kiril-P/Cloud-Computing-Final-Project',
    language: 'TypeScript',
    stargazers_count: 1,
    tags: ['AWS', 'Serverless', 'TypeScript'],
  },
  {
    name: 'Battleship-Multiplayer-Game',
    description: 'Real-time multiplayer Battleship game implemented in C with socket programming. Features TCP/IP networking, concurrent client handling with multithreading, lobby system, and turn-based gameplay synchronization. Demonstrates proficiency in network protocols, thread safety, and low-level system programming. Supports multiple simultaneous games with matchmaking.',
    html_url: 'https://github.com/Kiril-P/Battleship-Multiplayer-Game',
    language: 'C',
    stargazers_count: 1,
    tags: ['Networking', 'Multiplayer', 'Sockets'],
  },
  {
    name: 'kiril-p.github.io',
    description: 'Modern, high-performance portfolio website built with Astro 5, React, and Three.js. Features smooth GSAP animations, 3D interactive globe visualization, glassmorphic UI design, and optimized Lighthouse scores (95+). Implements responsive Bento grid layout, client-side form validation with Web3Forms integration, and dark mode theming. Deployed on GitHub Pages with custom domain.',
    html_url: 'https://github.com/Kiril-P/kiril-p.github.io',
    language: 'Astro',
    stargazers_count: 0,
    tags: ['Astro', 'React', 'Three.js'],
  },
];

/**
 * If this array is empty, the site will fall back to fetching
 * your top repos automatically by star count.
 */
export const shouldUseFeaturedProjects = featuredProjects.length > 0;

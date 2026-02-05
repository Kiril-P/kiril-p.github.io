/**
 * Project Content - Technical Reports & Deep-Dive Details
 * Each project has rich content for its internal page
 */

export interface ProjectContent {
    slug: string;
    longDescription: string;
    features: string[];
    technicalHighlights: string[];
    architecture?: {
        title: string;
        items: string[];
    }[];
    challenges?: string[];
    techStack: string[];
}

export const projectContent: Record<string, ProjectContent> = {
    'cleanr': {
        slug: 'cleanr',
        longDescription: `Cleanr is a production-ready mobile platform connecting users with professional cleaners for on-demand and scheduled apartment cleaning services. Built as a dual-app ecosystem, Cleanr features separate React Native applications for users and cleaners, creating an Uber-like experience for home cleaning.

The platform handles real-time cleaner matching, GPS tracking, secure payments via Stripe, push notifications, and a sophisticated penalty system for cancellations. With Firebase as the backend, Cleanr scales seamlessly while maintaining sub-second response times for critical operations like cleaner assignment and booking updates.`,
        features: [
            'Dual React Native apps: User-facing booking app and Cleaner workforce app',
            'Three service tiers: Basic (standard cleaning), Plus (enhanced services), Pro (deep clean)',
            'On-demand booking with real-time cleaner matching',
            'Scheduled cleanings with recurring booking support',
            'Live GPS tracking and ETA updates',
            'Stripe payment integration with secure card storage',
            'Firebase Cloud Messaging for push notifications',
            'Sophisticated penalty system with grace periods',
            'Multi-language support (i18next)',
            'Rating and review system for quality assurance'
        ],
        technicalHighlights: [
            'React Native with Expo for cross-platform iOS/Android deployment',
            'Firebase Firestore for real-time data synchronization',
            'Firebase Cloud Functions for serverless backend logic',
            'Stripe API for payment processing and refunds',
            'React Navigation for complex navigation flows',
            'Google Maps integration for location services',
            'Firebase Authentication with Google Sign-In and Apple Sign-In',
            'Expo Notifications for push notification handling',
            'TypeScript for type-safe development',
            'React Hook Form with Zod validation'
        ],
        architecture: [
            {
                title: 'Mobile Applications',
                items: [
                    'User App: Booking interface, service selection, payment management',
                    'Cleaner App: Job acceptance, navigation, task completion',
                    'Shared Firebase backend for real-time sync',
                    'Expo managed workflow for streamlined deployment'
                ]
            },
            {
                title: 'Backend Infrastructure',
                items: [
                    'Firebase Firestore: Real-time database for bookings, users, cleaners',
                    'Cloud Functions: Penalty calculations, payment processing, notifications',
                    'Firebase Storage: Profile pictures and cleaning verification photos',
                    'Firestore Security Rules: Row-level access control'
                ]
            },
            {
                title: 'Payment System',
                items: [
                    'Stripe Payment Intents for secure card processing',
                    'Off-session payments for penalty charges',
                    'Automated refund processing with penalty deductions',
                    'Customer portal for payment method management'
                ]
            },
            {
                title: 'Penalty System',
                items: [
                    'Time-based penalties for scheduled cleanings (0-75% of booking)',
                    'Status-based penalties for on-demand bookings',
                    'Grace period: 2 free cancellations per 90 days',
                    'Automated penalty assessment and charging',
                    'Dispute resolution workflow'
                ]
            }
        ],
        challenges: [
            'Implementing real-time cleaner matching with sub-second latency',
            'Designing a fair and transparent penalty system',
            'Managing concurrent booking requests without double-assignment',
            'Handling offline scenarios gracefully in both apps',
            'Ensuring secure payment processing with PCI compliance',
            'Optimizing Firebase queries to minimize read costs'
        ],
        techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Firestore', 'Cloud Functions', 'Stripe', 'Google Maps', 'FCM', 'React Navigation']
    },

    'polygon-protocol': {
        slug: 'polygon-protocol',
        longDescription: `Polygon Protocol is a high-octane geometric roguelite where players evolve from a simple triangle into a devastating polygon weapon system. Built entirely in Godot Engine, this bullet-hell experience combines intense action with strategic evolution mechanics.

The game features a unique shape-based progression system where each side of your polygon can equip different weapons, creating endless tactical possibilities. Survive waves of geometric enemies, collect evolution fragments, and become the ultimate polygon predator.`,
        features: [
            'Dynamic polygon evolution system with 6 base shapes',
            'Procedurally generated enemy wave patterns',
            'Over 15 unique weapons attachable to polygon vertices',
            'Particle-heavy visual effects running at 60FPS',
            'Original soundtrack with reactive audio',
            'Local high-score leaderboards',
            'Multiple difficulty tiers with distinct enemy behaviors'
        ],
        technicalHighlights: [
            'Custom 2D physics for precise geometric collisions',
            'Object pooling for thousands of simultaneous bullets',
            'Shader-based visual effects for neon aesthetics',
            'State machine architecture for enemy AI',
            'Optimized draw calls with batched rendering',
            'Procedural generation algorithms for level variety'
        ],
        architecture: [
            {
                title: 'Core Game Loop',
                items: [
                    'Fixed timestep physics at 60 ticks/second',
                    'Entity-component system for game objects',
                    'Signal-based event communication',
                    'Resource pooling for bullet management'
                ]
            },
            {
                title: 'Visual Effects Pipeline',
                items: [
                    'Custom shaders for glow and distortion effects',
                    'Particle systems with GPU acceleration',
                    'Screen shake and camera effects',
                    'Post-processing for bloom and chromatic aberration'
                ]
            }
        ],
        challenges: [
            'Maintaining 60FPS with 500+ on-screen projectiles',
            'Balancing roguelite progression without save states',
            'Creating satisfying visual feedback for rapid-fire gameplay',
            'Designing intuitive controls for fast-paced action'
        ],
        techStack: ['Godot 4', 'GDScript', 'GLSL Shaders', 'Aseprite', 'FMOD']
    },

    'chess-engine': {
        slug: 'chess-engine',
        longDescription: `A sophisticated chess engine implementing the minimax algorithm with alpha-beta pruning optimization. This project demonstrates deep understanding of game theory, tree search algorithms, and computational optimization.

The engine features a complete chess rule implementation, intelligent move ordering, and an evaluation function that considers piece values, positional advantages, and king safety. It can analyze positions up to 8 plies deep in reasonable time.`,
        features: [
            'Complete chess rules including castling, en passant, and promotion',
            'Minimax search with alpha-beta pruning',
            'Move ordering heuristics for faster search',
            'Positional evaluation considering piece-square tables',
            'Three difficulty levels with adjustable search depth',
            'Legal move highlighting and validation',
            'Game state persistence and move history'
        ],
        technicalHighlights: [
            'Alpha-beta pruning reducing node evaluations by 90%+',
            'Bitboard representation for efficient move generation',
            'Transposition tables preventing redundant calculations',
            'Quiescence search for tactical accuracy',
            'Iterative deepening for time-controlled play',
            'Principal Variation search optimization'
        ],
        architecture: [
            {
                title: 'Board Representation',
                items: [
                    '64-bit bitboards for each piece type',
                    'Magic bitboards for sliding piece moves',
                    'Zobrist hashing for position identification',
                    'Incremental board state updates'
                ]
            },
            {
                title: 'Search Algorithm',
                items: [
                    'Negamax with alpha-beta framework',
                    'Move ordering: captures, killers, history heuristic',
                    'Null move pruning for position refutation',
                    'Late move reduction for non-tactical moves'
                ]
            }
        ],
        challenges: [
            'Implementing correct castling and en passant edge cases',
            'Tuning evaluation function weights for balanced play',
            'Debugging search algorithms with non-obvious bugs',
            'Optimizing memory usage for deep search trees'
        ],
        techStack: ['C++', 'CMake', 'SFML', 'Google Test']
    },

    'starburst': {
        slug: 'starburst',
        longDescription: `Starburst is a high-performance browser-based bullet hell shooter that pushes HTML5 Canvas to its limits. Built entirely with vanilla JavaScript, this game demonstrates that complex, performant games don't require heavy frameworks.

The rendering engine maintains a rock-solid 60FPS even with hundreds of particles, enemies, and projectiles on screen simultaneously. Every frame is carefully optimized with object pooling, spatial partitioning, and batch rendering.`,
        features: [
            'Smooth 60FPS gameplay in modern browsers',
            'Hundreds of simultaneous on-screen entities',
            'Progressive difficulty scaling',
            'Power-up system with visual feedback',
            'Particle explosions and trail effects',
            'Responsive touch controls for mobile',
            'Browser-based with no installation required'
        ],
        technicalHighlights: [
            'Object pooling eliminating garbage collection pauses',
            'Spatial hashing for O(1) collision detection',
            'RequestAnimationFrame with delta time interpolation',
            'Canvas context optimization (no transforms during draw)',
            'Sprite batching reducing draw calls',
            'Web Audio API for low-latency sound effects'
        ],
        architecture: [
            {
                title: 'Game Loop Architecture',
                items: [
                    'Fixed timestep physics with variable rendering',
                    'State machine for game flow management',
                    'Entity manager with component pattern',
                    'Event-driven input handling'
                ]
            },
            {
                title: 'Performance Optimizations',
                items: [
                    'Object pools for bullets, particles, enemies',
                    'Spatial hash grid for collision queries',
                    'Off-screen canvas for static backgrounds',
                    'Typed arrays for particle systems'
                ]
            }
        ],
        challenges: [
            'Achieving consistent 60FPS across all browsers',
            'Managing memory without causing GC stalls',
            'Implementing smooth touch controls',
            'Balancing visual fidelity with performance'
        ],
        techStack: ['Vanilla JavaScript', 'HTML5 Canvas', 'Web Audio API', 'CSS3']
    },

    'battleship': {
        slug: 'battleship',
        longDescription: `A production-quality, multiplayer turn-based Battleship game implemented in pure C using POSIX sockets and threading. This network programming project features a beautiful ANSI-colored terminal UI and custom ship shapes inspired by Sea Battle 2.

The game demonstrates mastery of low-level systems programming: socket communication, multi-threading, mutex synchronization, and binary protocol design. It works seamlessly across different machines on the same network.`,
        features: [
            '6×6 grid with classic battleship mechanics',
            'Custom ship shapes including L and Z patterns',
            'Real TCP networking across LAN',
            'Client-server architecture with authoritative server',
            'Multi-threaded with one thread per client',
            'Terminal UI with ANSI color rendering',
            'Fog of war hiding opponent ships',
            'Graceful disconnect handling and reconnection'
        ],
        technicalHighlights: [
            'POSIX sockets with non-blocking I/O',
            'Thread-safe game state with pthread mutexes',
            'Binary network protocol with proper serialization',
            'Comprehensive input validation and error handling',
            'Clean modular architecture with separated concerns',
            'CMake build system for cross-platform compilation'
        ],
        architecture: [
            {
                title: 'Threading Model',
                items: [
                    'Main thread accepts connections and manages game state',
                    'Client threads handle per-player message processing',
                    'Mutex protection for all shared state access',
                    'Condition variables for turn synchronization'
                ]
            },
            {
                title: 'Network Protocol',
                items: [
                    'Custom binary protocol for minimal bandwidth',
                    'Message types: PLACEMENT, FIRE, HIT/MISS, GAME_OVER',
                    'Serialization with network byte order',
                    'Heartbeat system for connection monitoring'
                ]
            },
            {
                title: 'Game State Machine',
                items: [
                    'Server: WAITING → PLACEMENT → PLAYING → FINISHED',
                    'Client: CONNECTING → WAITING → PLACEMENT → PLAYING → FINISHED',
                    'State transitions triggered by network events'
                ]
            }
        ],
        challenges: [
            'Handling race conditions in multi-threaded server',
            'Designing a robust network protocol for game state',
            'Implementing proper cleanup on client disconnect',
            'Creating an intuitive terminal-based UI'
        ],
        techStack: ['C', 'POSIX Sockets', 'pthreads', 'CMake', 'ANSI Terminal']
    },

    'nomnomnow': {
        slug: 'nomnomnow',
        longDescription: `NomNomNow is a serverless food delivery backend architecture built on AWS. This cloud computing project demonstrates modern serverless patterns for high-scale, cost-effective web applications.

The system handles restaurant management, order processing, and real-time delivery tracking without any server management. Lambda functions scale automatically from zero to thousands of concurrent executions.`,
        features: [
            'RESTful API for all food ordering operations',
            'Restaurant and menu management system',
            'Order processing with status tracking',
            'User authentication and session management',
            'Real-time order updates via WebSocket',
            'Cost-optimized serverless architecture',
            'Infrastructure as Code with CloudFormation'
        ],
        technicalHighlights: [
            'AWS Lambda functions with TypeScript',
            'DynamoDB single-table design pattern',
            'API Gateway with request validation',
            'Cognito for user authentication',
            'Step Functions for order workflow orchestration',
            'CloudWatch for monitoring and alerting'
        ],
        architecture: [
            {
                title: 'API Layer',
                items: [
                    'API Gateway REST endpoints',
                    'Lambda authorizers for JWT validation',
                    'Request/response schema validation',
                    'CORS configuration for web clients'
                ]
            },
            {
                title: 'Data Layer',
                items: [
                    'DynamoDB with GSI for query flexibility',
                    'Single-table design for efficient access patterns',
                    'TTL for automatic order history cleanup',
                    'DynamoDB Streams for real-time updates'
                ]
            }
        ],
        challenges: [
            'Designing efficient DynamoDB access patterns',
            'Managing cold starts for optimal user experience',
            'Implementing idempotent order processing',
            'Cost optimization while maintaining performance'
        ],
        techStack: ['AWS Lambda', 'DynamoDB', 'TypeScript', 'API Gateway', 'Cognito', 'CloudFormation']
    },

    'solitaire': {
        slug: 'solitaire',
        longDescription: `A complete implementation of Klondike Solitaire featuring intuitive drag-and-drop card mechanics and polished visual feedback. Built with Java Swing, this project demonstrates object-oriented design principles and GUI programming.

The game includes all standard Klondike rules, automatic win detection, undo functionality, and smooth card animations that make gameplay feel responsive and satisfying.`,
        features: [
            'Complete Klondike Solitaire rules implementation',
            'Intuitive drag-and-drop card movement',
            'Automatic foundation building',
            'Unlimited undo/redo functionality',
            'Win detection and celebration animation',
            'Card flip animations',
            'Multiple draw modes (draw 1 or draw 3)'
        ],
        technicalHighlights: [
            'MVC architecture separating game logic from UI',
            'Command pattern for undo/redo operations',
            'Observer pattern for UI updates',
            'Custom card rendering with anti-aliasing',
            'Event-driven input handling',
            'Efficient repaint with dirty rectangle tracking'
        ],
        architecture: [
            {
                title: 'Object-Oriented Design',
                items: [
                    'Card class with suit, rank, and face-up state',
                    'Pile abstract class with Tableau, Foundation, Stock subclasses',
                    'Game class orchestrating rules and win conditions',
                    'GamePanel handling all rendering and input'
                ]
            },
            {
                title: 'Design Patterns',
                items: [
                    'MVC for clean separation of concerns',
                    'Command pattern for reversible moves',
                    'Observer for reactive UI updates',
                    'Factory for card deck creation'
                ]
            }
        ],
        challenges: [
            'Implementing complex Klondike ruleset correctly',
            'Creating smooth drag-and-drop with visual feedback',
            'Managing Z-order for overlapping cards',
            'Detecting valid moves efficiently'
        ],
        techStack: ['Java', 'Swing', 'JUnit', 'Maven']
    }
};

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
    'naiss-ride': {
        slug: 'naiss-ride',
        longDescription: `Naiss Ride is a public-safe case study for current production mobile engineering work inside a live startup environment. The focus is not private product disclosure; it is the engineering surface: shipping features across ride flows, social feed surfaces, media capture, gamification, authentication, payments, reliability, analytics, and release quality.

The work demonstrates the kind of execution YC and technical teams look for: moving inside a real codebase, improving user-facing surfaces, keeping quality visible with observability, and contributing to a production release cadence without leaking private implementation details.`,
        features: [
            'Production React Native and Expo feature development across core mobile product surfaces',
            'Ride, feed, camera, gamification, authentication, and payment flow contributions',
            'Reliability and product observability using Sentry and PostHog',
            'Quality work across unit and end-to-end testing with Jest and Detox',
            'EAS build and release workflow exposure in a live startup app',
            'Public-safe representation of private company work'
        ],
        technicalHighlights: [
            'React Native / Expo / TypeScript mobile stack',
            'Expo Router navigation patterns for app-scale flows',
            'Zustand and NativeWind usage in production UI work',
            'Convex-backed app architecture exposure',
            'Error monitoring and product analytics tied to release confidence',
            'Mobile QA mindset across feature implementation, visual polish, and regressions'
        ],
        architecture: [
            {
                title: 'Mobile Product Surface',
                items: [
                    'Feature work spans high-frequency user flows rather than isolated demos',
                    'Navigation, state, analytics, and visual details are treated as one product system',
                    'Private screens and repo internals are intentionally abstracted on the public portfolio'
                ]
            },
            {
                title: 'Reliability Loop',
                items: [
                    'Sentry for runtime visibility',
                    'PostHog for product behavior signals',
                    'Jest and Detox for confidence around unit and end-to-end paths',
                    'EAS for builds and over-the-air release operations'
                ]
            }
        ],
        challenges: [
            'Communicating real production responsibility without exposing private product details',
            'Balancing feature velocity with mobile reliability and visual quality',
            'Working across multiple app surfaces while preserving consistency',
            'Contributing inside an existing startup engineering workflow'
        ],
        techStack: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Zustand', 'NativeWind', 'Convex', 'Sentry', 'PostHog', 'Jest', 'Detox', 'EAS']
    },

    'easeaccess24-automation': {
        slug: 'easeaccess24-automation',
        longDescription: `EaseAccess24 Automation is a developer productivity and AI automation case study focused on replacing fragile environment-switching work with repeatable CLI flows. The core project automated .env synchronization and validation across staging and production contexts.

The public value is the operating pattern: identify a repeated developer pain point, build a focused internal tool, integrate with existing infrastructure, and reduce context-switching overhead for the engineering team.`,
        features: [
            'Internal CLI commands for environment synchronization and validation',
            'Automated staging and production .env switching',
            'Integration with Vercel environment data',
            'Integration with Psono-backed secret workflows',
            'Developer-facing checks to catch incorrect local configuration',
            'Built as internal productivity tooling rather than a public SaaS surface'
        ],
        technicalHighlights: [
            'Command-line workflow design for a real engineering team',
            'Environment integrity checks before developers run or deploy',
            'External service integration with Vercel and secret management tooling',
            'Automation-first approach to reducing manual setup errors',
            'Public-safe framing of private internal tooling'
        ],
        architecture: [
            {
                title: 'CLI Workflow',
                items: [
                    'Pull the correct environment context',
                    'Validate required variables locally',
                    'Make incorrect staging/production setup harder to miss'
                ]
            },
            {
                title: 'Integration Layer',
                items: [
                    'Vercel-backed environment source',
                    'Psono-backed secret access pattern',
                    'Local .env output designed for developer speed and repeatability'
                ]
            }
        ],
        challenges: [
            'Turning a manual operational workflow into a reliable tool',
            'Keeping environment automation useful without making it risky',
            'Designing CLI output that is fast to understand during development',
            'Representing private developer tooling publicly without leaking sensitive details'
        ],
        techStack: ['CLI Tooling', 'TypeScript', 'Vercel', 'Psono', 'Environment Automation', 'Developer Experience']
    },

    'streamscope': {
        slug: 'streamscope',
        longDescription: `StreamScope is a real-time chat intelligence MVP for live streamers, built from a blank slate in 10 days and awarded 2nd place at IE Tech Venture Bootcamp 2026. The product direction was simple: help creators understand and manage fast-moving communities while the stream is happening.

The project is strongest as a startup execution signal. It combines problem validation, product scoping, technical architecture, and full-stack MVP delivery under a compressed deadline.`,
        features: [
            'Real-time chat intelligence concept for live streamers',
            'MVP shipped in 10 days under startup-style constraints',
            'Community signal detection for fast-moving chat environments',
            'Product scoped around creator workflow, not just raw analytics',
            '2nd place at IE Tech Venture Bootcamp 2026',
            'Public-safe summary of a private/collaborative repository'
        ],
        technicalHighlights: [
            'Real-time data flow and dashboard thinking',
            'Product architecture under time pressure',
            'Rapid prioritization from idea to demo',
            'Full-stack execution across product and technical delivery',
            'Pitch-ready framing for judges and stakeholders'
        ],
        architecture: [
            {
                title: 'Signal Pipeline',
                items: [
                    'Ingest live chat activity',
                    'Surface useful trends and moments',
                    'Translate noisy message streams into creator-facing decisions'
                ]
            },
            {
                title: 'Startup Build Loop',
                items: [
                    'Validate problem and audience',
                    'Choose the smallest credible MVP',
                    'Build, demo, and pitch under a 10-day deadline'
                ]
            }
        ],
        challenges: [
            'Keeping scope narrow enough to ship in 10 days',
            'Turning noisy chat into useful creator signals',
            'Balancing technical ambition with demo reliability',
            'Communicating the product as a business, not only a dashboard'
        ],
        techStack: ['Real-Time Systems', 'Full-Stack MVP', 'Product Strategy', 'Dashboard UX', 'Startup Prototyping']
    },

    'chess-anomaly-detection': {
        slug: 'chess-anomaly-detection',
        longDescription: `Chess Anomaly Detection is a machine learning project for detecting unusual behavioral patterns in online chess. Lichess game data is reshaped into player-level records, behavioral and engine-accuracy features are engineered, and six unsupervised detectors are compared against synthetic anomaly injections.

The goal is careful and defensible: identify statistically unusual behavior clusters for review, not declare definitive cheating labels. The strongest result was LOF with 0.971 test AUC on subtle synthetic injection, while an ensemble flagged 312 of 17,909 players for human review.`,
        features: [
            'Player-level behavioral feature engineering from chess game data',
            'Six unsupervised anomaly detectors compared with shared validation',
            'Synthetic anomaly injection for measurable evaluation',
            'Majority-vote ensemble for review-oriented flagging',
            'Precomputed results, charts, report, poster, and presentation deliverables',
            '100/100 machine learning final project result'
        ],
        technicalHighlights: [
            'LOF achieved 0.971 test AUC on subtle synthetic injection',
            'Ensemble flagged 312 of 17,909 players for review',
            'Models included LOF, Isolation Forest, One-Class SVM, Autoencoder, ACPLSubAutoencoder, and Z-score baseline',
            'Feature importance, UMAP, ROC curves, model agreement, and learning curves documented',
            'Unit tests verify feature engineering and validation logic'
        ],
        architecture: [
            {
                title: 'Data Pipeline',
                items: [
                    'Load raw chess game data',
                    'Aggregate games into player-level records',
                    'Engineer behavioral and engine-accuracy features',
                    'Split and validate without leaking labels across phases'
                ]
            },
            {
                title: 'Modeling Layer',
                items: [
                    'Compare anomaly detectors under common evaluation',
                    'Use synthetic injection to measure recall on subtle behaviors',
                    'Combine model outputs through ensemble review logic'
                ]
            },
            {
                title: 'Interpretability',
                items: [
                    'Permutation importance for feature signal',
                    'UMAP views for cluster inspection',
                    'Model agreement analysis for review confidence'
                ]
            }
        ],
        challenges: [
            'Avoiding overclaiming in a sensitive cheating-detection domain',
            'Designing meaningful synthetic anomalies for evaluation',
            'Comparing unsupervised models fairly',
            'Making results understandable through charts and deliverables'
        ],
        techStack: ['Python', 'scikit-learn', 'PyTorch', 'Pandas', 'UMAP', 'SHAP', 'pytest', 'Jupyter']
    },

    'black-hole-render': {
        slug: 'black-hole-render',
        longDescription: `Black Hole Render is a cinematic procedural Three.js experiment built around shader-driven visuals, responsive quality profiles, and export-ready stills. It combines layered geometry, lensing, bloom, particles, orbiting bodies, and compact viewer controls.

The project is a technical-art proof point: it shows taste, WebGL fluency, performance awareness, and the ability to wrap a visual experiment in practical controls and verification.`,
        features: [
            'Cinematic, high-energy, and minimal visual presets',
            'Mobile and desktop adaptive quality profiles',
            'PNG viewport export',
            'Clean mode for higher-fidelity stills',
            'WebGL fallback for unsupported hardware',
            'Smoke tests for desktop render, mobile controls, and export'
        ],
        technicalHighlights: [
            'Three.js scene with layered shader geometry',
            'Screen-space lensing and bloom-driven presentation',
            'Hidden-tab pause behavior',
            'Resize handling for stable framing',
            'Quality caps for high-density mobile screens'
        ],
        architecture: [
            {
                title: 'Render Pipeline',
                items: [
                    'Scene geometry and shader layers',
                    'Postprocessing for bloom and stylized output',
                    'Particle and orbiting body systems'
                ]
            },
            {
                title: 'Viewer Controls',
                items: [
                    'Preset switching',
                    'Clean still-export mode',
                    'Reset and export actions'
                ]
            }
        ],
        challenges: [
            'Keeping a heavy visual scene responsive on mobile',
            'Balancing cinematic quality with export and runtime controls',
            'Providing graceful fallback when WebGL is unavailable'
        ],
        techStack: ['Three.js', 'Vite', 'TypeScript', 'WebGL', 'Shaders', 'Playwright']
    },

    'typing-wizard-duel': {
        slug: 'typing-wizard-duel',
        longDescription: `Typing Wizard Duel is a static browser prototype where spells are cast by typing exact multi-line incantations under pressure. The core loop is about precision, rhythm, and readable feedback: accuracy builds combo and guard, mistakes cause fizzle states, and a CPU opponent pushes the player with timed attacks.

The project demonstrates lightweight game architecture without a framework, emphasizing feel, state management, and clear separation between typing, damage, UI, enemy behavior, events, and animation systems.`,
        features: [
            'Exact multi-line spell typing',
            'Immediate character highlighting and mistake feedback',
            'Combo meter, guard gains, HP bars, and fizzle states',
            'Local CPU opponent with timed spell casting',
            'Duel events that interrupt rhythm with short skill checks',
            'Tutorial overlay, reduced motion, debug controls, and post-match stats'
        ],
        technicalHighlights: [
            'Dependency-free static HTML/CSS/JavaScript implementation',
            'Separated managers for typing, damage, UI, enemy AI, events, animation, and stats',
            'Works from file:// and static Vercel deployment',
            'Built around a readable global namespace rather than a build step'
        ],
        architecture: [
            {
                title: 'Game Systems',
                items: [
                    'TypingEngine for spell input',
                    'DamageManager and ComboManager for combat outcomes',
                    'EnemyAI and DuelEventManager for pressure and pacing',
                    'UIManager and AnimationManager for feedback'
                ]
            }
        ],
        challenges: [
            'Making typing feel like combat rather than a form field',
            'Balancing opponent pressure and mistake recovery',
            'Keeping the prototype dependency-free while maintaining structure'
        ],
        techStack: ['HTML', 'CSS', 'Vanilla JavaScript', 'Vercel']
    },

    'rush-hour-retail': {
        slug: 'rush-hour-retail',
        longDescription: `Rush Hour Retail is a chaotic 3D time-management game built for a short jam window. Players race through a hypermarket, collect generated shopping lists, choose between speed and capacity, and scan items at checkout before time runs out.

The project is useful on the portfolio as a speed and iteration signal: it was built under a 3-4 day constraint, with extra time spent fixing optimization and frame-rate issues in an unfamiliar 3D workflow.`,
        features: [
            'Generated shopping lists and route optimization pressure',
            'Cart versus run tradeoff for speed and capacity',
            'Help desk marker system for item discovery',
            'Progressive difficulty and high-score tracking',
            'Reactive customer behavior',
            'Submitted to Patch Notes v1.1'
        ],
        technicalHighlights: [
            '3D game-jam workflow under severe time pressure',
            'Performance triage for FPS spikes',
            'Gameplay systems designed around seconds as currency',
            'Browser-playable itch.io release'
        ],
        architecture: [
            {
                title: 'Jam Loop',
                items: [
                    'Generate a shopping target',
                    'Route through store sections',
                    'Balance speed, item capacity, and checkout timing',
                    'Escalate pressure as the run progresses'
                ]
            }
        ],
        challenges: [
            'Learning and shipping 3D gameplay under a short deadline',
            'Optimizing frame-rate spikes enough for playability',
            'Cutting scope while preserving the core time-management fantasy'
        ],
        techStack: ['Godot', '3D Gameplay', 'Game Jam', 'Optimization']
    },

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

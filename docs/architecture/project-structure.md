# The Way - Project Structure

## Directory Overview

```
/workspace
├── docs/                      # Documentation
│   ├── milestones/            # Milestone specifications
│   │   ├── 01-platform-reset.md
│   │   ├── 02-canonical-content-graph.md
│   │   └── 03-liturgical-interaction-language.md
│   └── architecture/          # Architectural documentation
│
├── src/                       # Source code
│   ├── core/                  # Core application logic
│   │   ├── events.js          # Event bus and action creators
│   │   ├── state.js           # Immutable state management
│   │   ├── reducers.js        # Pure reducer functions
│   │   ├── selectors.js       # Memoized state queries
│   │   └── utils.js           # Pure utility functions
│   │
│   ├── features/              # Feature modules
│   │   ├── reader/            # Reading experience
│   │   ├── explorer/          # Knowledge graph navigation
│   │   ├── fellowship/        # Community features
│   │   ├── knowledge/         # Knowledge graph
│   │   ├── search/            # Search functionality
│   │   └── ai/                # AI assistant (The Scribe)
│   │
│   ├── ui/                    # User interface components
│   │   ├── atoms/             # Basic UI elements
│   │   ├── molecules/         # Composite components
│   │   ├── organisms/         # Complex UI sections
│   │   ├── templates/         # Page layouts
│   │   └── foundations/       # Design tokens, themes
│   │
│   ├── data/                  # Data layer
│   │   ├── repositories/      # Data access patterns
│   │   ├── api/               # API clients
│   │   ├── cache/             # Caching strategies
│   │   └── graph/             # Content graph operations
│   │
│   └── workers/               # Cloudflare Workers
│       ├── auth/              # Authentication worker
│       ├── presence/          # Presence tracking
│       ├── sync/              # Sync coordination
│       └── matrix/            # Matrix bridge
│
├── public/                    # Static assets
├── package.json               # Project configuration
├── shadow-cljs.edn            # ClojureScript configuration
└── README.md                  # Project overview
```

## Module Responsibilities

### Core (`src/core/`)
- Event bus for application-wide communication
- Immutable state container
- Pure reducer functions
- Memoized selectors
- Functional utilities (compose, pipe, curry, etc.)

### Features (`src/features/`)
- Self-contained feature modules
- Each feature has its own events, reducers, selectors
- No cross-feature dependencies (communicate via core events)

### UI (`src/ui/`)
- Atomic design pattern
- Stateless functional components
- No business logic in components
- Pure function of state → UI

### Data (`src/data/`)
- Repository pattern for data access
- API client abstractions
- Offline-first caching
- Content graph traversal

### Workers (`src/workers/`)
- Cloudflare Workers for serverless backend
- Authentication handling
- Presence tracking
- Sync coordination
- Matrix protocol bridging

## Dependency Rules

1. **Core** has no dependencies on other modules
2. **Features** depend only on Core
3. **UI** depends on Core and Foundations
4. **Data** depends on Core
5. **Workers** are independent deployment units

## State Flow

```
User Action → Event → Reducer → New State → UI Render
     ↑                                          ↓
     └────────────── Feedback Loop ─────────────┘
```

All state transformations are pure functions.
No mutations anywhere in the application.

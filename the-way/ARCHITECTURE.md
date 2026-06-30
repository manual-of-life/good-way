# The Way - Architectural Specification

## Project Vision

**The Way** is an immersive Christian multimedia knowledge, fellowship and study platform.

This is NOT:
- An ebook
- A website  
- A social network

This IS:
- A living Christian multimedia knowledge graph with integrated fellowship
- An exploration engine connecting Scripture, commentary, media, prayer, and community
- A platform designed for contemplation, learning, and genuine fellowship

---

## Core Principles

### Absolute Principles

1. **NO classes containing mutable state**
2. **NO singleton services**
3. **NO inheritance hierarchies**
4. **NO god objects**
5. **NO global mutable variables**
6. **NO business logic inside widgets**
7. **NO duplicated logic**
8. **NO duplicated layouts**

Everything must be:
- Immutable
- Pure
- Composable
- Testable
- Predictable

### Programming Philosophy

```
Event → Pure Reducer → New State → Render
```

- Represent all application state as immutable maps and vectors
- Business logic consists of pure transformations
- UI is a pure function of immutable application state
- Application flow is event-driven
- No hidden mutations

### Design Philosophy

**Think in graphs, not pages.**

Every entity can link to every other entity:
- Text ↔ Image ↔ Verse ↔ Chapter ↔ Prayer ↔ Video ↔ Commentary ↔ Song ↔ Discussion ↔ Person ↔ Place ↔ Timeline ↔ Original Language ↔ Map ↔ Community Room ↔ Another Book

Nothing is isolated.

---

## Technology Stack

### Frontend
- **Tauri** - Cross-platform desktop and mobile framework
- **Vanilla JavaScript (ES6+)** - Functional programming only
- **Web Components** - For reusable UI elements
- **CSS Custom Properties** - For theming and design tokens

### Backend (Serverless)
- **Cloudflare Workers** - OAuth, presence, friend lookup, Matrix tokens, notifications, caching
- **Cloudflare Durable Objects** - Real-time presence and state
- **Cloudflare D1** - SQLite database (only if needed)
- **Cloudflare R2** - Asset storage (audio, images, documents)
- **Cloudflare Pages** - Static hosting and CDN

### Content & Assets
- **Notion** - Content management and authoring
- **Cloudinary** - Image optimization and transformation
- **Cloudflare R2** - Audio and document storage
- **YouTube** - Video hosting (documentaries, teaching, interviews)

### Authentication
- OAuth providers: Google, Apple, GitHub, Discord
- Identity verification through social providers
- Platform-owned user profiles

### Communication
- **Matrix** - Messaging, presence, voice, groups, prayer rooms, Bible studies, discussion spaces
- **LiveKit** - Voice rooms (spatial audio)

---

## Folder Architecture

```
the-way/
├── src/                          # Frontend source code
│   ├── core/                     # Core functional primitives
│   │   ├── state.js              # Immutable state management
│   │   ├── events.js             # Event bus and dispatch
│   │   ├── reducers.js           # Pure reducer functions
│   │   ├── selectors.js          # State query functions
│   │   └── utils.js              # Pure utility functions
│   │
│   ├── domain/                   # Domain models and business logic
│   │   ├── node.js               # Content node model
│   │   ├── graph.js              # Graph operations
│   │   ├── content.js            # Content types and transformations
│   │   ├── user.js               # User model and operations
│   │   ├── fellowship.js         # Social graph operations
│   │   └── knowledge.js          # Knowledge graph operations
│   │
│   ├── data/                     # Data layer
│   │   ├── repositories/         # Repository implementations
│   │   │   ├── content-repo.js   # Content repository
│   │   │   ├── user-repo.js      # User repository
│   │   │   ├── graph-repo.js     # Graph repository
│   │   │   └── sync-repo.js      # Offline sync repository
│   │   ├── api/                  # API clients
│   │   │   ├── cloudflare.js     # Cloudflare Workers client
│   │   │   ├── matrix.js         # Matrix SDK wrapper
│   │   │   ├── notion.js         # Notion API client
│   │   │   └── oauth.js          # OAuth client
│   │   └── cache/                # Caching layer
│   │       ├── memory-cache.js   # In-memory cache
│   │       ├── indexeddb.js      # IndexedDB wrapper
│   │       └── strategies.js     # Cache strategies
│   │
│   ├── ui/                       # UI components (functional, stateless)
│   │   ├── atoms/                # Primitive UI elements
│   │   │   ├── button.js
│   │   │   ├── input.js
│   │   │   ├── icon.js
│   │   │   ├── typography.js
│   │   │   └── spacer.js
│   │   ├── molecules/            # Composite UI elements
│   │   │   ├── card.js
│   │   │   ├── navigation-item.js
│   │   │   ├── search-box.js
│   │   │   └── media-player.js
│   │   ├── organisms/            # Complex UI components
│   │   │   ├── reader.js
│   │   │   ├── graph-explorer.js
│   │   │   ├── fellowship-room.js
│   │   │   └── knowledge-panel.js
│   │   ├── templates/            # Page layouts
│   │   │   ├── dwelling.js       # Home
│   │   │   ├── treasury.js       # Library
│   │   │   ├── upper-room.js     # Chat/Community
│   │   │   ├── tent-of-meeting.js # Voice rooms
│   │   │   └── workshop.js       # Settings
│   │   └── foundations/          # Design system
│   │       ├── tokens.css        # Design tokens
│   │       ├── typography.css    # Typography system
│   │       ├── colors.css        # Color palette
│   │       ├── spacing.css       # Spacing system
│   │       └── animations.css    # Animation definitions
│   │
│   ├── features/                 # Feature modules
│   │   ├── reader/               # Reading experience
│   │   │   ├── engine.js         # Rendering engine
│   │   │   ├── typography.js     # Dynamic typography
│   │   │   ├── navigation.js     # Content navigation
│   │   │   └── annotations.js    # Bookmarks, notes
│   │   ├── explorer/             # Graph exploration
│   │   │   ├── content-graph.js  # Content graph viewer
│   │   │   ├── knowledge-graph.js # Knowledge graph viewer
│   │   │   ├── social-graph.js   # Social graph viewer
│   │   │   └── spatial-nav.js    # Spatial navigation
│   │   ├── fellowship/           # Community features
│   │   │   ├── identity.js       # OAuth and identity
│   │   │   ├── friends.js        # Friend management
│   │   │   ├── messaging.js      # Matrix messaging
│   │   │   ├── voice.js          # LiveKit voice rooms
│   │   │   └── presence.js       # Online presence
│   │   ├── knowledge/            # Knowledge features
│   │   │   ├── connections.js    # Connection engine
│   │   │   ├── commentary.js     # Commentary integration
│   │   │   ├── original-langs.js # Greek/Hebrew tools
│   │   │   ├── timeline.js       # Biblical timeline
│   │   │   └── maps.js           # Biblical maps
│   │   ├── search/               # Search functionality
│   │   │   ├── engine.js         # Search engine
│   │   │   ├── filters.js        # Search filters
│   │   │   └── suggestions.js    # Search suggestions
│   │   └── ai/                   # AI assistant (Scribe)
│   │       ├── scribe.js         # AI interface
│   │       ├── explanations.js   # AI explanations
│   │       └── questions.js      # Q&A system
│   │
│   ├── services/                 # Application services (stateless)
│   │   ├── navigation-service.js # Navigation logic
│   │   ├── sync-service.js       # Offline sync
│   │   ├── notification-service.js # Notifications
│   │   ├── analytics-service.js  # Analytics (privacy-focused)
│   │   └── accessibility-service.js # Accessibility
│   │
│   ├── routes/                   # Route definitions
│   │   ├── router.js             # Router implementation
│   │   ├── routes.js             # Route configuration
│   │   └── guards.js             # Route guards
│   │
│   ├── assets/                   # Static assets
│   │   ├── fonts/                # Typography fonts
│   │   ├── images/               # Images and icons
│   │   ├── audio/                # Audio files
│   │   └── content/              # Initial content
│   │
│   ├── index.html                # Main HTML entry
│   ├── main.js                   # Application bootstrap
│   └── styles.css                # Global styles
│
├── src-tauri/                    # Tauri backend (Rust)
│   ├── src/
│   │   ├── main.rs               # Rust entry point
│   │   ├── commands/             # Tauri commands
│   │   │   ├── filesystem.rs     # File system operations
│   │   │   ├── offline.rs        # Offline mode support
│   │   │   └── native.rs         # Native integrations
│   │   └── utils/                # Rust utilities
│   ├── Cargo.toml                # Rust dependencies
│   ├── tauri.conf.json           # Tauri configuration
│   ├── capabilities/             # Permission capabilities
│   └── icons/                    # App icons
│
├── workers/                      # Cloudflare Workers
│   ├── src/
│   │   ├── index.js              # Main worker entry
│   │   ├── oauth.js              # OAuth handling
│   │   ├── presence.js           # Presence service
│   │   ├── matrix-proxy.js       # Matrix token proxy
│   │   ├── notifications.js      # Push notifications
│   │   └── cache.js              # Edge caching
│   ├── wrangler.toml             # Worker configuration
│   └── package.json              # Worker dependencies
│
├── content/                      # Content source (Notion export)
│   ├── hebrews/                  # Hebrews multimedia adaptation
│   ├── bible/                    # Bible content
│   ├── devotionals/              # Devotionals
│   ├── theology/                 # Theological works
│   ├── history/                  # Church history
│   └── courses/                  # Educational courses
│
├── tests/                        # Test suites
│   ├── unit/                     # Unit tests
│   ├── integration/              # Integration tests
│   ├── e2e/                      # End-to-end tests
│   └── fixtures/                 # Test fixtures
│
├── docs/                         # Documentation
│   ├── architecture/             # Architecture docs
│   ├── api/                      # API documentation
│   ├── guides/                   # User guides
│   └── contributing/             # Contribution guidelines
│
├── scripts/                      # Build and development scripts
│   ├── build.js                  # Build scripts
│   ├── deploy.js                 # Deployment scripts
│   ├── sync-content.js           # Content sync from Notion
│   └── generate-types.js         # Type generation
│
├── .gitignore
├── package.json
├── ARCHITECTURE.md               # This file
└── README.md
```

---

## Module Boundaries

### Core Layer (`src/core/`)
- **Purpose**: Functional primitives for state management
- **Dependencies**: None
- **Depended upon by**: All layers
- **Rules**: 
  - Pure functions only
  - No side effects
  - No DOM access

### Domain Layer (`src/domain/`)
- **Purpose**: Business logic and domain models
- **Dependencies**: Core layer
- **Depended upon by**: Data, Services, Features
- **Rules**:
  - No UI concerns
  - No external API calls
  - Immutable data structures

### Data Layer (`src/data/`)
- **Purpose**: Data access and persistence
- **Dependencies**: Core, Domain
- **Depended upon by**: Services, Features
- **Rules**:
  - Repository pattern only
  - No business logic
  - Abstract external APIs

### UI Layer (`src/ui/`)
- **Purpose**: Presentation components
- **Dependencies**: Core (for state reading)
- **Depended upon by**: Features, Routes
- **Rules**:
  - Stateless functional components
  - No business logic
  - Pure function of props and state

### Features Layer (`src/features/`)
- **Purpose**: Feature-specific logic and composition
- **Dependencies**: Core, Domain, Data, UI
- **Depended upon by**: Routes
- **Rules**:
  - Compose UI components
  - Orchestrate data flow
  - Handle feature-specific events

### Services Layer (`src/services/`)
- **Purpose**: Cross-cutting application services
- **Dependencies**: Core, Domain, Data
- **Depended upon by**: Features, Routes
- **Rules**:
  - Stateless service functions
  - No UI concerns
  - Coordinate multiple repositories

---

## Dependency Rules

```
Routes → Features → UI
           ↓
Services → Data → Domain → Core
```

**Strict Rules:**
1. Lower layers cannot depend on higher layers
2. Sibling layers should not depend on each other (use common dependencies)
3. Core has no dependencies
4. UI can only read state, never mutate directly
5. All state mutations flow through events → reducers

---

## State Architecture

### State Structure

```javascript
const initialState = {
  // Navigation state
  navigation: {
    currentRoute: 'dwelling',
    history: [],
    params: {},
    query: {}
  },
  
  // Content state
  content: {
    nodes: {},           // Map<id, Node>
    relationships: {},   // Map<id, Relationship[]>
    currentNodeId: null,
    loading: false,
    error: null
  },
  
  // User state
  user: {
    profile: null,
    isAuthenticated: false,
    identityProviders: [],
    friends: [],
    presence: 'offline'
  },
  
  // Fellowship state
  fellowship: {
    rooms: [],
    activeRoom: null,
    messages: {},
    participants: {}
  },
  
  // Knowledge state
  knowledge: {
    connections: [],
    exploredNodes: [],
    bookmarks: [],
    notes: {},
    highlights: {}
  },
  
  // UI state
  ui: {
    theme: 'light',
    fontSize: 'medium',
    sidebarOpen: true,
    modals: [],
    notifications: []
  },
  
  // Sync state
  sync: {
    status: 'idle',
    lastSync: null,
    pendingChanges: [],
    conflicts: []
  }
};
```

### State Management Pattern

```javascript
// Event dispatch
dispatch({
  type: 'CONTENT/NODE_LOADED',
  payload: { nodeId, node, relationships }
});

// Pure reducer
function contentReducer(state, event) {
  switch (event.type) {
    case 'CONTENT/NODE_LOADED':
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [event.payload.nodeId]: event.payload.node
        },
        relationships: {
          ...state.relationships,
          [event.payload.nodeId]: event.payload.relationships
        },
        loading: false
      };
    
    default:
      return state;
  }
}

// Selector (pure query)
const getNodeById = (state, nodeId) => 
  state.content.nodes[nodeId];

const getRelatedNodes = (state, nodeId) =>
  state.content.relationships[nodeId]
    ?.map(rel => state.content.nodes[rel.targetId]);
```

---

## Repository Architecture

### Repository Interface

```javascript
// All repositories implement this pattern
const createRepository = (dependencies) => ({
  getById: async (id) => {},
  getAll: async (filters) => {},
  create: async (entity) => {},
  update: async (id, changes) => {},
  delete: async (id) => {},
  query: async (query) => {}
});
```

### Content Repository

```javascript
const createContentRepository = ({ cache, api, sync }) => ({
  async getNodeById(id) {
    // Check cache first
    const cached = await cache.get(`node:${id}`);
    if (cached) return cached;
    
    // Fetch from API
    const node = await api.content.getNode(id);
    
    // Cache the result
    await cache.set(`node:${id}`, node);
    
    return node;
  },
  
  async getRelatedNodes(id, relationshipType) {
    const relationships = await this.getRelationships(id);
    const filtered = relationships.filter(
      r => !relationshipType || r.type === relationshipType
    );
    
    return Promise.all(
      filtered.map(rel => this.getNodeById(rel.targetId))
    );
  },
  
  async getRelationships(nodeId) {
    // Implementation
  }
});
```

### Caching Strategy

```javascript
const cacheStrategies = {
  // Cache-first for static content
  STATIC: {
    read: 'cache-first',
    write: 'cache-and-network'
  },
  
  // Network-first for dynamic content
  DYNAMIC: {
    read: 'network-first',
    write: 'network-only'
  },
  
  // Stale-while-revalidate for user data
  USER_DATA: {
    read: 'stale-while-revalidate',
    write: 'cache-and-network'
  }
};
```

---

## Event Architecture

### Event Types

```javascript
const EventTypes = {
  // Navigation events
  NAVIGATION: {
    NAVIGATE: 'NAVIGATION/NAVIGATE',
    BACK: 'NAVIGATION/BACK',
    FORWARD: 'NAVIGATION/FORWARD'
  },
  
  // Content events
  CONTENT: {
    NODE_REQUESTED: 'CONTENT/NODE_REQUESTED',
    NODE_LOADED: 'CONTENT/NODE_LOADED',
    NODE_ERROR: 'CONTENT/NODE_ERROR',
    RELATIONSHIPS_LOADED: 'CONTENT/RELATIONSHIPS_LOADED'
  },
  
  // User events
  USER: {
    LOGIN_REQUESTED: 'USER/LOGIN_REQUESTED',
    LOGIN_SUCCESS: 'USER/LOGIN_SUCCESS',
    LOGOUT: 'USER/LOGOUT',
    PROFILE_UPDATED: 'USER/PROFILE_UPDATED'
  },
  
  // Fellowship events
  FELLOWSHIP: {
    ROOM_JOINED: 'FELLOWSHIP/ROOM_JOINED',
    ROOM_LEFT: 'FELLOWSHIP/ROOM_LEFT',
    MESSAGE_RECEIVED: 'FELLOWSHIP/MESSAGE_RECEIVED',
    PARTICIPANT_JOINED: 'FELLOWSHIP/PARTICIPANT_JOINED'
  },
  
  // Knowledge events
  KNOWLEDGE: {
    CONNECTION_DISCOVERED: 'KNOWLEDGE/CONNECTION_DISCOVERED',
    BOOKMARK_ADDED: 'KNOWLEDGE/BOOKMARK_ADDED',
    NOTE_CREATED: 'KNOWLEDGE/NOTE_CREATED'
  },
  
  // Sync events
  SYNC: {
    SYNC_STARTED: 'SYNC/SYNC_STARTED',
    SYNC_COMPLETED: 'SYNC/SYNC_COMPLETED',
    CONFLICT_DETECTED: 'SYNC/CONFLICT_DETECTED'
  }
};
```

### Event Flow

```
User Action → Event Dispatch → Reducer → State Update → UI Render
     ↓
Side Effect Handler → External API → New Event → Continue Cycle
```

---

## Content Graph Architecture

### Node Model

```javascript
const Node = {
  id: string,              // Unique identifier
  type: NodeType,          // Type of content
  title: string,           // Display title
  subtitle?: string,       // Optional subtitle
  content: ContentBlock[], // Array of content blocks
  metadata: {
    author?: string,
    date?: string,
    version?: string,
    language?: string,
    tags?: string[]
  },
  assets: Asset[],         // Associated media
  relationships: Relationship[], // Connections to other nodes
  children?: Node[],       // Child nodes (optional)
  createdAt: timestamp,
  updatedAt: timestamp
};

const NodeType = {
  CHAPTER: 'chapter',
  VERSE: 'verse',
  ARTICLE: 'article',
  PRAYER: 'prayer',
  SONG: 'song',
  VIDEO: 'video',
  AUDIO: 'audio',
  IMAGE: 'image',
  MAP: 'map',
  TIMELINE: 'timeline',
  PERSON: 'person',
  PLACE: 'place',
  COMMENTARY: 'commentary',
  DISCUSSION: 'discussion',
  COURSE: 'course'
};
```

### Relationship Model

```javascript
const Relationship = {
  id: string,
  sourceId: string,        // Source node ID
  targetId: string,        // Target node ID
  type: RelationshipType,  // Type of relationship
  strength: number,        // Connection strength (0-1)
  context?: string,        // Context of the relationship
  metadata: {}
};

const RelationshipType = {
  REFERENCES: 'references',      // References another passage
  QUOTES: 'quotes',              // Quotes from another source
  FULFILLS: 'fulfills',          // Fulfills prophecy
  PARALLEL: 'parallel',          // Parallel passage
  CONTRASTS: 'contrasts',        // Contrasting concept
  EXPLAINS: 'explains',          // Provides explanation
  ILLUSTRATES: 'illustrates',    // Provides illustration
  LOCATED_AT: 'located_at',      // Geographic location
  CREATED_BY: 'created_by',      // Authorship
  PART_OF: 'part_of',            // Hierarchical relationship
  RELATED_TO: 'related_to'       // General relationship
};
```

### Graph Operations

```javascript
const GraphOperations = {
  // Find all paths between two nodes
  findPaths: (graph, startId, endId, maxLength = 5) => {},
  
  // Get all connected nodes within N degrees
  getConnections: (graph, nodeId, degrees = 2) => {},
  
  // Find central nodes (most connected)
  getCentralNodes: (graph, limit = 10) => {},
  
  // Traverse graph with filters
  traverse: (graph, startId, filters, visitor) => {},
  
  // Build subgraph around a node
  buildSubgraph: (graph, nodeId, radius = 2) => {}
};
```

---

## Navigation Philosophy

### Biblical Metaphors

Traditional UI → Biblical Metaphor:
- **Home** → Dwelling
- **Dashboard** → Courtyard
- **Library** → Treasury
- **Search** → Seek
- **Navigation** → The Way
- **Notifications** → Watchtower
- **Friends** → Fellowship
- **Chat** → Upper Room
- **Audio rooms** → Tent of Meeting
- **Voice channel** → Table Fellowship
- **User profile** → Stewardship
- **Settings** → Workshop
- **Downloads** → Storehouse
- **Saved** → Treasure
- **Archive** → Scroll Chest
- **Reading history** → Footsteps
- **Bookmarks** → Memorial Stones
- **Timeline** → Genealogy
- **Collections** → Baskets
- **AI assistant** → Scribe
- **Knowledge explorer** → Lamp
- **Discovery** → Wilderness Path

### Navigation Patterns

1. **Non-linear Exploration**: Users navigate through relationships, not hierarchical menus
2. **Spatial Navigation**: Movement feels intentional, like walking through a cathedral library
3. **Context Preservation**: Navigation history maintains context for meaningful backtracking
4. **Progressive Disclosure**: Deep content revealed through exploration, not overwhelming initial display

### Route Configuration

```javascript
const routes = {
  dwelling: {
    path: '/',
    component: Dwelling,
    meta: { title: 'Dwelling', icon: 'home' }
  },
  
  treasury: {
    path: '/treasury',
    component: Treasury,
    meta: { title: 'Treasury', icon: 'library' },
    children: {
      node: {
        path: ':nodeId',
        component: NodeView
      }
    }
  },
  
  upperRoom: {
    path: '/upper-room',
    component: UpperRoom,
    meta: { title: 'Upper Room', icon: 'fellowship' },
    requiresAuth: true
  },
  
  tentOfMeeting: {
    path: '/tent-of-meeting',
    component: TentOfMeeting,
    meta: { title: 'Tent of Meeting', icon: 'voice' },
    requiresAuth: true
  },
  
  stewardship: {
    path: '/stewardship',
    component: Stewardship,
    meta: { title: 'Stewardship', icon: 'profile' },
    requiresAuth: true
  },
  
  workshop: {
    path: '/workshop',
    component: Workshop,
    meta: { title: 'Workshop', icon: 'settings' }
  },
  
  wildernessPath: {
    path: '/wilderness-path',
    component: WildernessPath,
    meta: { title: 'Wilderness Path', icon: 'discover' }
  },
  
  lamp: {
    path: '/lamp',
    component: Lamp,
    meta: { title: 'Lamp', icon: 'knowledge' }
  }
};
```

---

## Widget Philosophy

### Component Categories

1. **Atoms**: Primitive, indivisible UI elements
   - Button, Input, Icon, Typography, Spacer
   - Pure functional, no state
   - Highly reusable

2. **Molecules**: Combinations of atoms
   - Card, NavigationItem, SearchBox, MediaPlayer
   - May have local UI state (not business state)
   - Context-aware

3. **Organisms**: Complex, feature-specific components
   - Reader, GraphExplorer, FellowshipRoom, KnowledgePanel
   - Compose molecules and atoms
   - Feature-complete UI sections

4. **Templates**: Page-level layouts
   - Dwelling, Treasury, UpperRoom, etc.
   - Define overall page structure
   - Wire organisms together

### Component Pattern

```javascript
// Functional, stateless component
const createComponent = (render, defaultProps = {}) => {
  return (props = {}) => {
    const mergedProps = { ...defaultProps, ...props };
    return render(mergedProps);
  };
};

// Example: Button atom
const Button = createComponent(
  ({ label, onClick, variant = 'primary', disabled = false }) => {
    const element = document.createElement('button');
    element.className = `btn btn--${variant}`;
    element.textContent = label;
    element.disabled = disabled;
    
    if (onClick && !disabled) {
      element.addEventListener('click', onClick);
    }
    
    return element;
  },
  { variant: 'primary', disabled: false }
);

// Usage
const saveButton = Button({
  label: 'Save to Treasure',
  variant: 'primary',
  onClick: () => dispatch({ type: 'BOOKMARK/ADD' })
});
```

### Statelessness Rule

**Widgets never contain business logic.**

```javascript
// ❌ WRONG: Business logic in widget
function BookmarkButton({ nodeId }) {
  const handleClick = async () => {
    // Business logic in widget!
    const node = await api.getNode(nodeId);
    await db.bookmarks.add(node);
    await sync.push();
  };
  
  return Button({ label: 'Bookmark', onClick: handleClick });
}

// ✅ CORRECT: Pure widget, logic in feature
function BookmarkButton({ nodeId, onClick }) {
  return Button({ 
    label: 'Bookmark', 
    onClick: () => onClick(nodeId) 
  });
}

// Feature layer handles the logic
features.bookmark = {
  addBookmark: (nodeId) => {
    dispatch({ type: 'BOOKMARK/REQUESTED', payload: { nodeId } });
  }
};
```

---

## Coding Conventions

### Naming Conventions

**Files and Directories:**
- Use kebab-case for file names: `content-repo.js`, `graph-explorer.js`
- Use camelCase for JavaScript files
- Directory names match their purpose: `repositories/`, `components/`

**Variables and Functions:**
- Use camelCase for variables and functions
- Use descriptive, intention-revealing names
- Prefix boolean variables with `is`, `has`, `should`: `isLoading`, `hasError`
- Use verbs for functions: `getNode`, `createUser`, `calculateDistance`
- Use nouns for variables: `currentUser`, `activeNode`, `selectedRange`

**Constants:**
- Use UPPER_SNAKE_CASE for constants: `MAX_RETRIES`, `DEFAULT_TIMEOUT`
- Use PascalCase for types and constructors: `NodeType`, `Relationship`

**Events:**
- Use format: `DOMAIN/ACTION`: `CONTENT/NODE_LOADED`, `USER/LOGIN_SUCCESS`
- Always uppercase with forward slash separator

**CSS:**
- Use BEM-like naming: `.btn`, `.btn--primary`, `.card__title`
- Use custom properties for design tokens: `--color-primary`, `--spacing-md`

### Functional Programming Rules

1. **Immutability**: Never mutate state directly
   ```javascript
   // ❌ WRONG
   state.user.name = newName;
   
   // ✅ CORRECT
   return { ...state, user: { ...state.user, name: newName } };
   ```

2. **Pure Functions**: Same input always produces same output
   ```javascript
   // ❌ WRONG: Has side effect
   let counter = 0;
   function increment() { counter++; return counter; }
   
   // ✅ CORRECT: Pure
   function increment(count) { return count + 1; }
   ```

3. **No Hidden State**: All dependencies explicit
   ```javascript
   // ❌ WRONG: Hidden dependency
   function calculateTotal() { return items.reduce(...) }
   
   // ✅ CORRECT: Explicit dependencies
   function calculateTotal(items) { return items.reduce(...) }
   ```

4. **Function Composition**: Build complex from simple
   ```javascript
   // Instead of nested calls
   const result = process(filter(transform(data)));
   
   // Use composition
   const processPipeline = compose(process, filter, transform);
   const result = processPipeline(data);
   ```

### Code Organization

```javascript
// 1. Imports (grouped by type)
import { dispatch } from '../core/events';
import { getNodeById } from '../domain/node';

// 2. Constants
const DEFAULT_PAGE_SIZE = 20;

// 3. Type definitions (JSDoc)
/**
 * @typedef {Object} Node
 * @property {string} id
 * @property {string} type
 */

// 4. Pure utility functions
const formatDate = (date) => {};

// 5. Main module exports
export const createContentRepository = (deps) => ({
  // Implementation
});
```

---

## Testing Philosophy

### Testing Pyramid

```
        /\
       /  \      E2E Tests (few)
      /----\     
     /      \    Integration Tests (some)
    /--------\   
   /          \  Unit Tests (many)
  /------------\ 
```

### Unit Tests

**Test pure functions in isolation:**

```javascript
// content-reducer.test.js
import { contentReducer } from './reducers';
import { EventTypes } from './events';

describe('contentReducer', () => {
  it('handles NODE_LOADED event', () => {
    const initialState = { nodes: {}, loading: true };
    const event = {
      type: EventTypes.CONTENT.NODE_LOADED,
      payload: { nodeId: '1', node: { id: '1', title: 'Test' } }
    };
    
    const newState = contentReducer(initialState, event);
    
    expect(newState.nodes['1']).toEqual({ id: '1', title: 'Test' });
    expect(newState.loading).toBe(false);
  });
  
  it('returns unchanged state for unknown events', () => {
    const initialState = { nodes: {}, loading: false };
    const event = { type: 'UNKNOWN/EVENT' };
    
    const newState = contentReducer(initialState, event);
    
    expect(newState).toBe(initialState);
  });
});
```

### Integration Tests

**Test module interactions:**

```javascript
// content-flow.test.js
describe('Content Loading Flow', () => {
  it('loads node from cache when available', async () => {
    const cache = createMockCache({ 'node:1': cachedNode });
    const api = createMockApi();
    const repo = createContentRepository({ cache, api });
    
    const node = await repo.getNodeById('1');
    
    expect(node).toEqual(cachedNode);
    expect(api.content.getNode).not.toHaveBeenCalled();
  });
  
  it('fetches from API when cache miss', async () => {
    const cache = createMockCache({});
    const api = createMockApi({ getNode: jest.fn(() => Promise.resolve(freshNode)) });
    const repo = createContentRepository({ cache, api });
    
    const node = await repo.getNodeById('1');
    
    expect(node).toEqual(freshNode);
    expect(api.content.getNode).toHaveBeenCalledWith('1');
  });
});
```

### E2E Tests

**Test complete user flows:**

```javascript
// e2e/navigation.spec.js
describe('Navigation Flow', () => {
  it('navigates from Dwelling to Treasury to Node', async () => {
    await page.goto('/');
    await expect(page).toMatchElement('h1', { text: 'Dwelling' });
    
    await page.click('[data-testid="nav-treasury"]');
    await expect(page).toMatchElement('h1', { text: 'Treasury' });
    
    await page.click('[data-testid="node-hebrews-1"]');
    await expect(page).toMatchElement('h1', { text: 'Hebrews 1' });
    await expect(page).toMatchElement('.verse-content');
  });
});
```

### Test Requirements

1. **All pure functions must have unit tests**
2. **All reducers must be tested**
3. **All repositories must have integration tests**
4. **Critical user flows must have E2E tests**
5. **Accessibility must be tested** (screen reader, keyboard navigation)

---

## Future Scalability Plan

### Phase 1: Foundation (Months 1-3)
- Core architecture implementation
- Basic content graph engine
- Reader with typography system
- Offline-first caching
- Single content work (Hebrews)

### Phase 2: Fellowship (Months 4-6)
- OAuth integration
- Matrix messaging integration
- Basic presence system
- Friend management
- Upper Room (chat)

### Phase 3: Knowledge (Months 7-9)
- Knowledge graph engine
- Cross-link discovery
- Commentary integration
- Original language tools
- Timeline and maps

### Phase 4: Voice & Community (Months 10-12)
- LiveKit voice rooms
- Spatial audio
- Group management
- Bible study rooms
- Prayer circles

### Phase 5: Expansion (Year 2)
- Additional biblical books
- Course system
- AI assistant (Scribe)
- Advanced search
- Mobile optimization

### Phase 6: Platform (Year 3+)
- Third-party content
- API for developers
- Plugin system
- Multi-language support
- Advanced analytics

### Scalability Considerations

**Content Scaling:**
- Content stored as independent nodes
- Lazy loading of relationships
- Pagination for large graphs
- Incremental synchronization

**User Scaling:**
- Serverless architecture scales automatically
- Edge caching reduces origin load
- Matrix federation for distributed messaging
- Sharded Durable Objects for presence

**Performance Budgets:**
- Initial load: < 3 seconds on 3G
- Time to interactive: < 5 seconds
- Navigation transitions: < 300ms
- Graph exploration: < 1 second per degree
- Voice room join: < 2 seconds

---

## Design Language

### Visual Metaphors

**Materials:**
- Stone (permanence, foundation)
- Paper (readability, warmth)
- Linen (purity, simplicity)
- Wood (organic, natural)
- Light (divine, guidance)
- Glass (clarity, transparency)
- Water (life, flow)

**Avoid:**
- Glossy technology metaphors
- Cheap medieval aesthetics
- Excessive religious iconography
- Gold gradients
- Cross/dove clipart

### Typography System

Typography tells the story:

```css
/* Narrative text - breathes */
.narrative {
  font-size: 1.125rem;
  line-height: 1.8;
  max-width: 65ch;
  margin: 2rem auto;
}

/* Poetry - flows */
.poetry {
  font-size: 1rem;
  line-height: 2;
  text-align: center;
  white-space: pre-line;
  margin: 3rem auto;
}

/* Prophecy - elevated */
.prophecy {
  font-size: 1.25rem;
  line-height: 2.2;
  letter-spacing: 0.02em;
  border-left: 3px solid var(--color-accent);
  padding-left: 1.5rem;
  margin: 2rem 0;
}

/* Dialogue - intimate */
.dialogue {
  font-size: 1rem;
  line-height: 1.6;
  background: var(--color-surface);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

/* God's speech - unmistakable */
.divine-speech {
  font-size: 1.375rem;
  line-height: 2;
  font-weight: 300;
  color: var(--color-primary);
  text-indent: 2rem;
  margin: 3rem 0;
}

/* Old Testament quotation - indented */
.ot-quotation {
  font-size: 0.875rem;
  line-height: 1.7;
  margin-left: 2rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-muted);
  color: var(--color-muted);
}
```

### Spacing System

Based on sacred geometry and readability:

```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */
  
  /* Sacred whitespace */
  --space-sacred-sm: 4rem;   /* 64px */
  --space-sacred-md: 6rem;   /* 96px */
  --space-sacred-lg: 8rem;   /* 128px */
}
```

### Color Palette

Inspired by natural materials:

```css
:root {
  /* Base colors */
  --color-stone-light: #F5F5F0;
  --color-stone: #E8E8E3;
  --color-stone-dark: #D4D4CE;
  
  --color-paper: #FAF9F6;
  --color-paper-warm: #FDFBF7;
  
  --color-linen: #F8F7F2;
  
  --color-wood-light: #C9B09A;
  --color-wood: #A68B6C;
  --color-wood-dark: #8B6F4E;
  
  /* Text colors */
  --color-text-primary: #2D2D2D;
  --color-text-secondary: #5A5A5A;
  --color-text-muted: #8B8B8B;
  
  /* Accent colors */
  --color-primary: #6B5B95;    /* Deep purple - royalty, divinity */
  --color-secondary: #88B04B;  /* Olive green - peace, life */
  --color-accent: #D4A574;     /* Warm gold - light, glory */
  
  /* Semantic colors */
  --color-success: #6B8E23;
  --color-warning: #DAA520;
  --color-error: #B22222;
  
  /* Dark mode */
  &.dark-mode {
    --color-paper: #1A1A1A;
    --color-text-primary: #E8E8E3;
    --color-text-secondary: #B8B8B3;
  }
}
```

### Animation Language

Animations communicate meaning, never decorate:

```css
/* Page transitions - turning pages */
.page-enter {
  opacity: 0;
  transform: translateY(10px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

/* Content fade - moving light */
.content-fade {
  animation: fadeIn 600ms ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Subtle pulse - breathing */
.breathe {
  animation: breathe 4000ms ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.95; }
}

/* Ripple - water */
.ripple {
  animation: ripple 800ms ease-out;
}

@keyframes ripple {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

/* Float - dust particles */
.float {
  animation: float 6000ms ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
```

**Animation Principles:**
- Slow: 300-600ms minimum
- Gentle: Ease-in-out curves
- Meaningful: Communicates state change
- Inspired by nature: pages, light, dust, water, wind
- Nothing flashes or screams
- Everything invites contemplation

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

All features must be usable:

1. **Without sound**: All information available visually
2. **Without color**: Information not conveyed by color alone
3. **With screen readers**: Full ARIA support, semantic HTML
4. **With keyboard**: Complete keyboard navigation
5. **With large fonts**: Support up to 200% zoom
6. **Without animations**: Respect prefers-reduced-motion

### Implementation

```css
/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus indicators */
:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --color-text-primary: #000000;
    --color-text-secondary: #333333;
    --color-primary: #4B0082;
  }
}
```

### Screen Reader Support

```javascript
// Announce state changes
const announce = (message, priority = 'polite') => {
  const announcer = document.getElementById('announcer');
  announcer.setAttribute('aria-live', priority);
  announcer.textContent = message;
};

// Usage
dispatch({
  type: 'CONTENT/NODE_LOADED',
  payload: { nodeId, node },
  onComplete: () => announce(`Loaded: ${node.title}`)
});
```

### Keyboard Navigation

```javascript
// Global keyboard shortcuts
const keyboardShortcuts = {
  'Escape': () => dispatch({ type: 'NAVIGATION/BACK' }),
  'Ctrl+K': () => dispatch({ type: 'SEARCH/OPEN' }),
  'Ctrl+B': () => dispatch({ type: 'BOOKMARK/TOGGLE' }),
  'ArrowRight': () => dispatch({ type: 'NAVIGATION/NEXT' }),
  'ArrowLeft': () => dispatch({ type: 'NAVIGATION/PREVIOUS' })
};

document.addEventListener('keydown', (e) => {
  const handler = keyboardShortcuts[e.key];
  if (handler) {
    e.preventDefault();
    handler();
  }
});
```

---

## Social Philosophy

### Core Principles

**Optimize for:**
- Learning
- Reflection
- Friendship
- Prayer
- Discussion
- Encouragement

**Never optimize for:**
- Engagement metrics
- Doom scrolling
- Addiction
- Virality
- Time on platform

### Social Graph Architecture

Three orthogonal graphs:

1. **Content Graph**: Everything links to everything
2. **Social Graph**: Identity through OAuth, fellowship through Matrix
3. **Knowledge Graph**: All concepts connected

### Identity Model

```javascript
const UserIdentity = {
  platformId: string,        // Internal platform ID
  displayName: string,
  avatarUrl?: string,
  email?: string,
  
  // Linked identity providers
  providers: [
    {
      provider: 'google' | 'apple' | 'github' | 'discord',
      providerId: string,
      verified: boolean
    }
  ],
  
  // Platform-specific data
  bio?: string,
  stewardship: {           // Profile
    verse: string,
    testimony?: string,
    gifts?: string[]
  },
  
  // Fellowship connections
  friends: string[],       // Platform friend IDs
  matrixId: string,        // Matrix user ID
  
  // Privacy settings
  visibility: 'public' | 'friends' | 'private',
  showOnline: boolean
};
```

### Fellowship Spaces

```javascript
const FellowshipSpace = {
  id: string,
  type: SpaceType,
  name: string,
  description?: string,
  members: string[],
  moderators: string[],
  settings: {
    maxMembers?: number,
    requiresApproval: boolean,
    allowVoice: boolean,
    allowMessages: boolean
  }
};

const SpaceType = {
  UPPER_ROOM: 'upper-room',         // Chat room
  TENT_OF_MEETING: 'tent-of-meeting', // Voice room
  TABLE_FELLOWSHIP: 'table-fellowship', // Small group
  PRAYER_CIRCLE: 'prayer-circle',   // Prayer group
  BIBLE_STUDY: 'bible-study',       // Study group
  TEACHING_HALL: 'teaching-hall',   // Large teaching space
  COFFEE_TABLE: 'coffee-table'      // Casual hangout
};
```

---

## Voice Architecture

### Spatial Audio Model

Voice is spatial. Users move between discussion spaces.

```javascript
const VoiceRoom = {
  id: string,
  type: SpaceType,
  name: string,
  participants: [
    {
      userId: string,
      position: { x: number, y: number },
      volume: number,      // Based on proximity
      muted: boolean,
      speaking: boolean
    }
  ],
  spatialConfig: {
    width: number,         // Room width in virtual units
    height: number,        // Room height
    falloff: number        // Volume falloff rate
  }
};

// Calculate volume based on distance
const calculateVolume = (listener, speaker, config) => {
  const distance = Math.sqrt(
    Math.pow(speaker.position.x - listener.position.x, 2) +
    Math.pow(speaker.position.y - listener.position.y, 2)
  );
  
  const maxDistance = config.width * 0.75;
  const normalizedDistance = Math.min(distance / maxDistance, 1);
  
  return 1 - Math.pow(normalizedDistance, config.falloff);
};
```

### Room Types

- **Prayer Circles**: Intimate, quiet spaces for prayer
- **Bible Studies**: Structured discussion spaces
- **Coffee Tables**: Casual conversation areas
- **Teaching Halls**: Large lecture-style spaces
- **Mission Rooms**: Planning and coordination
- **Small Groups**: Regular fellowship groups

---

## Performance Budgets

### Load Time Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | < 1.5s | 3G network |
| Time to Interactive | < 3.5s | 3G network |
| Largest Contentful Paint | < 2.5s | 3G network |
| Cumulative Layout Shift | < 0.1 | All networks |
| First Input Delay | < 100ms | All networks |

### Runtime Performance

| Operation | Target | Notes |
|-----------|--------|-------|
| Navigation transition | < 300ms | Including animation |
| Graph traversal (1 degree) | < 500ms | From cache |
| Graph traversal (2 degrees) | < 1000ms | From cache |
| Message send | < 200ms | To Matrix server |
| Voice room join | < 2000ms | Including auth |
| Content search | < 500ms | With suggestions |

### Memory Budgets

| Platform | Max Memory | Notes |
|----------|-----------|-------|
| Desktop | 512 MB | Typical usage |
| Mobile | 256 MB | Conservative |
| Low-end devices | 128 MB | Graceful degradation |

### Asset Budgets

| Asset Type | Max Size | Optimization |
|------------|----------|--------------|
| Initial bundle | < 200 KB | Gzipped |
| Route chunk | < 50 KB | Gzipped |
| Font file | < 100 KB | Subsetted |
| Hero image | < 150 KB | WebP/AVIF |
| Thumbnail | < 20 KB | WebP/AVIF |
| Audio stream | Adaptive | MP3, 128kbps |

---

## "Never Do This" Rules

### Architecture

1. **Never** create classes with mutable state
2. **Never** use singleton services
3. **Never** build inheritance hierarchies
4. **Never** create god objects that do everything
5. **Never** use global mutable variables
6. **Never** put business logic inside widgets
7. **Never** duplicate logic or layouts
8. **Never** couple layers incorrectly (see Dependency Rules)

### Performance

1. **Never** block the UI thread
2. **Never** load all content upfront
3. **Never** ignore offline scenarios
4. **Never** make unnecessary network requests
5. **Never** cache without invalidation strategy

### UX

1. **Never** use flashy animations
2. **Never** auto-play audio or video
3. **Never** interrupt reading with popups
4. **Never** optimize for engagement over edification
5. **Never** hide navigation or make it confusing

### Accessibility

1. **Never** rely on color alone for information
2. **Never** remove focus indicators
3. **Never** break keyboard navigation
4. **Never** ignore screen reader users
5. **Never** forget reduced motion preferences

### Security

1. **Never** store sensitive data in localStorage
2. **Never** trust client-side validation alone
3. **Never** expose API keys in client code
4. **Never** log sensitive user information
5. **Never** ignore CORS and CSP headers

---

## Implementation Milestones

This architecture will be implemented across 12 milestones:

1. **Foundation**: Core architecture, state management, basic routing
2. **Content Engine**: Node model, graph operations, reader basics
3. **Typography System**: Dynamic typography, content rendering
4. **Offline First**: Caching, sync, IndexedDB integration
5. **Design System**: Components, tokens, themes
6. **OAuth & Identity**: Authentication, user profiles
7. **Matrix Integration**: Messaging, presence, rooms
8. **Graph Explorer**: Content graph visualization
9. **Knowledge Graph**: Connections, commentary, tools
10. **Voice Rooms**: LiveKit integration, spatial audio
11. **Search & Discovery**: Search engine, recommendations
12. **Polish & Launch**: Accessibility, performance, testing

Each milestone will include:
- Architectural goals
- Functional requirements
- Implementation tasks
- Acceptance criteria
- Test expectations
- Performance budgets

---

## Conclusion

**The Way** is designed to be:

- **Elegant**: Simple, composable, beautiful
- **Long-lasting**: Built on stable foundations
- **Accessible**: Usable by everyone
- **Artistic**: A work of excellence
- **Maintainable**: Clear structure, pure functions
- **Delightful**: A joy to use

This architecture supports the vision of a living Christian multimedia knowledge graph that connects Scripture, commentary, media, prayer, and community in ways that deepen faith and foster genuine fellowship.

**Soli Deo Gloria**

# MILESTONE 04: The Living Reader Engine (LRE)

## Mission

Design and implement the platform's core Reader Engine.

This is **NOT** an ebook reader.  
This is **NOT** a PDF viewer.  
This is **NOT** an EPUB renderer.

It is a **Living Multimedia Reader** capable of rendering an interactive Christian Knowledge Graph.

Every reading experience is assembled dynamically from immutable graph nodes.

---

## Design Goals

The reader should feel like:

- Walking through an illuminated manuscript
- Walking through a cathedral museum
- Walking through Scripture

Rather than:

- Scrolling a document
- Turning static pages
- Consuming linear content

---

## Core Principle

The reader renders:

1. **Knowledge**
2. **Relationships**
3. **Media**
4. **Community**

Rather than pages.

---

## 1. Reader Engine Architecture

### 1.1 Overview

The Living Reader Engine (LRE) is a functional, data-driven composition system that transforms immutable graph nodes into immersive multimedia experiences.

```
┌─────────────────────────────────────────────────────────┐
│                    READER ENGINE                        │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│  │   Graph     │    │   State     │    │   Event     │ │
│  │   Loader    │───▶│   Manager   │───▶│   Bus       │ │
│  └─────────────┘    └─────────────┘    └─────────────┘ │
│         │                  │                  │         │
│         ▼                  ▼                  ▼         │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│  │   Render    │    │   Layout    │    │   Media     │ │
│  │   Pipeline  │◀──▶│   Engine    │◀──▶│   Manager   │ │
│  └─────────────┘    └─────────────┘    └─────────────┘ │
│         │                  │                            │
│         ▼                  ▼                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │           Composition Tree Generator            │   │
│  └─────────────────────────────────────────────────┘   │
│         │                                              │
│         ▼                                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Component Renderer                 │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 1.2 Architectural Principles

1. **Pure Function Rendering**: UI = f(State)
2. **Immutable Data Flow**: No mutations anywhere
3. **Compositional Architecture**: Small pure functions compose complex behavior
4. **Separation of Concerns**: Content ≠ Presentation ≠ Behavior
5. **Extensibility by Design**: Plugin architecture for future features
6. **Offline First**: Complete functionality without network
7. **Accessibility Native**: WCAG 2.1 AA built-in, not bolted on

### 1.3 Module Boundaries

```
src/features/reader/
├── engine/
│   ├── pipeline.js          # Render pipeline orchestration
│   ├── composer.js          # Scene/Panel/Block composition
│   ├── layout.js            # Responsive layout engine
│   └── virtualizer.js       # Performance optimization
├── state/
│   ├── reader-state.js      # Immutable state model
│   ├── selectors.js         # State query functions
│   └── reducers.js          # Pure state transformations
├── components/
│   ├── scene.js             # Scene container
│   ├── panel.js             # Panel container
│   ├── block.js             # Block renderer
│   └── component-registry.js # Component lookup
├── media/
│   ├── audio-manager.js     # Audio coordination
│   ├── video-manager.js     # Video embedding
│   ├── image-loader.js      # Progressive images
│   └── media-sync.js        # Media state synchronization
├── navigation/
│   ├── crosslink-engine.js  # Relationship traversal
│   ├── context-panel.js     # Contextual information
│   └── history-manager.js   # Navigation history
├── modes/
│   ├── reader-mode.js       # Standard reading
│   ├── study-mode.js        # Deep study with tools
│   ├── prayer-mode.js       # Contemplative focus
│   ├── presentation-mode.js # Teaching/presentation
│   └── accessibility-mode.js # Enhanced accessibility
├── plugins/
│   ├── plugin-api.js        # Plugin interface
│   └── registry.js          # Plugin registration
└── events/
    ├── reader-events.js     # Event definitions
    └── event-handlers.js    # Event processing
```

### 1.4 Dependencies

```
Reader Engine depends on:
├── Canonical Content Graph (Milestone 02)
├── Liturgical Interaction Language (Milestone 03)
├── State Management Core
├── Event Bus
└── Media Services

Reader Engine does NOT depend on:
├── Specific UI frameworks (Flutter details)
├── Backend implementations
├── Authentication systems
└── Social features
```

---

## 2. Renderer Pipeline

### 2.1 Pipeline Stages

The render pipeline transforms graph nodes into visual experiences through six pure transformation stages:

```
┌──────────────────────────────────────────────────────────────┐
│                     RENDERER PIPELINE                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Stage 1: GRAPH LOADING                                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Input: Node ID (e.g., "hebrews-chapter-1")           │   │
│  │ Output: Loaded Node + Relationships                  │   │
│  │ Process:                                             │   │
│  │   • Fetch node from local cache or remote            │   │
│  │   • Resolve immediate relationships                  │   │
│  │   • Validate node structure                          │   │
│  │   • Apply permissions filtering                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  Stage 2: SCENE COMPOSITION                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Input: Loaded Node                                   │   │
│  │ Output: Scene Structure                              │   │
│  │ Process:                                             │   │
│  │   • Determine scene boundaries                       │   │
│  │   • Extract panels from node                         │   │
│  │   • Order panels by priority/weight                  │   │
│  │   • Apply reading mode transformations               │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  Stage 3: PANEL EXPANSION                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Input: Scene Structure                               │   │
│  │ Output: Expanded Panels with Blocks                  │   │
│  │ Process:                                             │   │
│  │   • Expand each panel into blocks                    │   │
│  │   • Resolve block references                         │   │
│  │   • Apply panel-specific transformations             │   │
│  │   • Calculate panel metadata                         │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  Stage 4: BLOCK RESOLUTION                                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Input: Expanded Panels                               │   │
│  │ Output: Resolved Blocks with Components              │   │
│  │ Process:                                             │   │
│  │   • Map block types to components                    │   │
│  │   • Resolve asset references                         │   │
│  │   • Apply typography rules                           │   │
│  │   • Inject crosslink metadata                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  Stage 5: LAYOUT CALCULATION                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Input: Resolved Blocks                               │   │
│  │ Output: Layout Instructions                          │   │
│  │ Process:                                             │   │
│  │   • Analyze viewport constraints                     │   │
│  │   • Apply responsive layout rules                    │   │
│  │   • Calculate spatial relationships                  │   │
│  │   • Generate layout tree                             │   │
│  └──────────────────────────────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  Stage 6: COMPONENT RENDERING                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Input: Layout Instructions                           │   │
│  │ Output: Rendered UI                                  │   │
│  │ Process:                                             │   │
│  │   • Instantiate components                           │   │
│  │   • Apply styles and animations                      │   │
│  │   • Attach event handlers                            │   │
│  │   • Mount to DOM                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 2.2 Pipeline Properties

#### 2.2.1 Immutability

Each stage produces new data structures; nothing is mutated:

```javascript
// Pseudocode illustration
function renderPipeline(initialState) {
  const loaded = loadGraph(initialState.nodeId);
  const scene = composeScene(loaded);
  const panels = expandPanels(scene);
  const blocks = resolveBlocks(panels);
  const layout = calculateLayout(blocks);
  const rendered = renderComponents(layout);
  
  return rendered;
}
```

#### 2.2.2 Incremental Rendering

Pipeline supports partial re-rendering:

- If only media state changes → Skip to Stage 6
- If only layout changes → Skip to Stage 5-6
- If content changes → Full pipeline

#### 2.2.3 Error Boundaries

Each stage has error handling:

```javascript
Stage Result = Success(Data) | Error(ErrorInfo)

On Error:
  • Log error immutably
  • Attempt graceful degradation
  • Show fallback UI
  • Never crash entire reader
```

### 2.3 Pipeline Configuration

Pipeline behavior is configurable per reading session:

```javascript
const pipelineConfig = {
  // Which stages to run
  stages: ['load', 'compose', 'expand', 'resolve', 'layout', 'render'],
  
  // Caching strategy
  cache: {
    enabled: true,
    ttl: 3600, // seconds
    invalidateOn: ['nodeUpdate', 'relationshipChange']
  },
  
  // Performance tuning
  performance: {
    virtualizeThreshold: 50, // blocks before virtualization
    preloadDepth: 2, // scenes to preload
    lazyLoadMedia: true
  },
  
  // Mode-specific transformations
  mode: 'reader', // reader | study | prayer | presentation
  
  // Accessibility overrides
  accessibility: {
    reduceMotion: false,
    highContrast: false,
    largeFonts: false
  }
};
```

---

## 3. Scene Composition Model

### 3.1 Scene Definition

A **Scene** represents one meaningful experiential unit within the knowledge graph.

```javascript
Scene = {
  // Identity
  id: UUID,
  kind: 'Scene',
  title: String,
  slug: String,
  
  // Content
  summary: String,
  language: LanguageCode,
  
  // Structure
  panels: [PanelReference],
  
  // Metadata
  metadata: {
    estimatedDuration: Number, // seconds
    complexity: 'simple' | 'moderate' | 'complex',
    themes: [ThemeReference],
    people: [PersonReference],
    places: [PlaceReference],
    timePeriod: TimePeriodReference,
    
    // Reading experience
    recommendedMode: ReadingMode,
    prerequisites: [SceneReference],
    followUps: [SceneReference]
  },
  
  // Assets
  assets: {
    heroImage: AssetReference,
    backgroundMusic: AssetReference,
    ambientSound: AssetReference
  },
  
  // Relationships
  relationships: [Relationship],
  
  // Permissions
  permissions: PermissionSet,
  
  // Versioning
  timestamps: Timestamps,
  version: SemanticVersion
}
```

### 3.2 Scene Types

Scenes are categorized by experiential purpose:

| Scene Type | Purpose | Example |
|------------|---------|---------|
| `Narrative` | Tell a story | Burning Bush, Prodigal Son |
| `Teaching` | Present instruction | Sermon on the Mount |
| `Prophecy` | Declare divine message | Isaiah's Vision |
| `Poetry` | Express worship/wisdom | Psalm 23 |
| `Historical` | Document events | Fall of Jerusalem |
| `Biographical` | Explore a life | Paul's Conversion |
| `Theological` | Explain doctrine | Trinity, Atonement |
| `Devotional` | Guide prayer/reflection | Morning Prayer |
| `Interactive` | Engage user participation | Parable Exploration |
| `Multimedia` | Rich media experience | Temple Reconstruction |
| `Community` | Foster fellowship | Discussion Hub |
| `Prayer` | Facilitate prayer | Prayer Room Entry |

### 3.3 Scene Composition Rules

#### 3.3.1 Coherence

Each scene must have:
- One primary theme
- Clear beginning and end
- Logical flow between panels
- Appropriate pacing

#### 3.3.2 Modularity

Scenes are:
- Independently loadable
- Reusable in different contexts
- Composable into larger experiences
- Linkable from multiple locations

#### 3.3.3 Adaptability

Scenes adapt to:
- Reading mode (reader/study/prayer/presentation)
- Device form factor (phone/tablet/desktop)
- User preferences (font size, contrast)
- Accessibility needs

### 3.4 Scene Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Created   │────▶│   Loaded    │────▶│   Active    │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Archived   │◀────│   Exited    │◀────│  Background │
└─────────────┘     └─────────────┘     └─────────────┘
```

**State Transitions:**

| From | To | Trigger |
|------|-----|---------|
| Created | Loaded | User navigates to scene |
| Loaded | Active | Scene fully rendered |
| Active | Background | User navigates away |
| Background | Active | User returns |
| Background | Exited | Memory pressure / timeout |
| Exited | Archived | Session ends |

### 3.5 Scene Events

Scenes emit immutable events:

```javascript
SceneEvents = {
  SceneLoading: { sceneId, timestamp },
  SceneLoaded: { sceneId, duration, timestamp },
  SceneEntered: { sceneId, entryPoint, timestamp },
  SceneFocused: { sceneId, focusedPanel, timestamp },
  SceneBlurred: { sceneId, timestamp },
  SceneExited: { sceneId, exitPoint, duration, timestamp },
  SceneCompleted: { sceneId, completionCriteria, timestamp }
}
```

---

## 4. Panel Specification

### 4.1 Panel Definition

A **Panel** is a semantic container within a Scene that groups related Blocks.

```javascript
Panel = {
  // Identity
  id: UUID,
  kind: 'Panel',
  type: PanelType,
  
  // Content
  title: Optional<String>,
  summary: Optional<String>,
  
  // Structure
  blocks: [BlockReference],
  
  // Layout
  layout: {
    order: Number,
    priority: Number,
    span: 'full' | 'half' | 'third',
    alignment: 'start' | 'center' | 'end',
    spacing: 'compact' | 'normal' | 'spacious'
  },
  
  // Behavior
  behavior: {
    expandable: Boolean,
    initiallyExpanded: Boolean,
    collapsible: Boolean,
    sticky: Boolean,
    parallax: Boolean
  },
  
  // Styling
  style: {
    background: Optional<StyleReference>,
    typography: Optional<TypographyReference>,
    animation: Optional<AnimationReference>
  },
  
  // Metadata
  metadata: {
    purpose: String,
    audience: Optional<Audience>,
    prerequisites: Optional<[NodeReference]>
  },
  
  // Relationships
  relationships: [Relationship],
  
  // Permissions
  permissions: PermissionSet
}
```

### 4.2 Panel Types

| Panel Type | Purpose | Typical Blocks |
|------------|---------|----------------|
| `Narrative` | Tell story | Paragraph, Quote, Verse |
| `Dialogue` | Present conversation | Dialogue, Response, Reaction |
| `Verse` | Display Scripture | Verse, Crossref, Footnote |
| `Poetry` | Show poetic text | Stanza, Line, Refrain |
| `Illustration` | Visual content | Image, Caption, Annotation |
| `Gallery` | Multiple images | ImageGrid, Carousel, Lightbox |
| `Timeline` | Temporal sequence | TimelineEvent, Marker, Connector |
| `Map` | Geographic content | Map, Location, Journey |
| `Animation` | Motion content | Animation, Frame, Control |
| `Music` | Audio experience | MusicPlayer, Lyrics, Info |
| `Narration` | Spoken content | NarrationPlayer, Transcript |
| `Video` | Video content | VideoPlayer, Chapters, Transcript |
| `Quote` | Highlight quotation | Quote, Attribution, Context |
| `HistoricalNote` | Background info | Note, Reference, Image |
| `GreekStudy` | Original language | GreekText, Parsing, Lexicon |
| `HebrewStudy` | Original language | HebrewText, Parsing, Lexicon |
| `Reflection` | Contemplative content | Question, Prompt, Space |
| `Question` | Interactive query | Question, Options, Feedback |
| `Answer` | Response to question | Answer, Explanation, Reference |
| `Community` | Social content | Discussion, Comments, Reactions |
| `VoiceRoom` | Audio gathering | RoomInfo, Participants, Controls |
| `Discussion` | Threaded conversation | Thread, Replies, Context |
| `AIInsight` | AI-generated content | Insight, Sources, Confidence |
| `Prayer` | Prayer content | PrayerText, Type, Amenities |
| `Callout` | Emphasized content | CalloutText, Icon, Style |
| `Interactive` | User interaction | Quiz, Poll, Game, Diagram |

### 4.3 Panel Behavior

#### 4.3.1 Expansion States

```javascript
PanelExpansion = {
  collapsed: 'Only title visible',
  preview: 'Title + summary visible',
  expanded: 'All blocks visible',
  focused: 'Expanded + highlighted',
  fullscreen: 'Takes entire viewport'
}
```

#### 4.3.2 Loading States

```javascript
PanelLoading = {
  idle: 'Not yet loaded',
  loading: 'Fetching content',
  loaded: 'Ready to render',
  error: 'Failed to load',
  partial: 'Some content missing'
}
```

#### 4.3.3 Interaction States

```javascript
PanelInteraction = {
  default: 'Normal state',
  hovered: 'Pointer over panel',
  selected: 'Panel is selected',
  active: 'Panel has focus',
  disabled: 'Interactions blocked'
}
```

### 4.4 Panel Rendering Strategy

Panels use progressive enhancement:

```
1. Render panel skeleton (immediate)
2. Load panel metadata (fast)
3. Load critical blocks (priority)
4. Load non-critical blocks (lazy)
5. Load rich media (on demand)
```

---

## 5. Block Specification

### 5.1 Block Definition

A **Block** is the smallest unit of content within a Panel.

```javascript
Block = {
  // Identity
  id: UUID,
  kind: 'Block',
  type: BlockType,
  
  // Content
  content: BlockContent,
  
  // Typography
  typography: {
    family: TypographyFamily,
    size: RelativeSize,
    weight: FontWeight,
    lineHeight: LineHeight,
    letterSpacing: LetterSpacing,
    alignment: TextAlignment
  },
  
  // Layout
  layout: {
    order: Number,
    indent: Number,
    spacing: Spacing,
    width: WidthConstraint
  },
  
  // Interactivity
  interactivity: {
    selectable: Boolean,
    copyable: Boolean,
    highlightable: Boolean,
    annotatable: Boolean,
    clickable: Boolean,
    hoverable: Boolean
  },
  
  // Crosslinks
  crosslinks: [Crosslink],
  
  // Media
  media: Optional<MediaReference>,
  
  // Metadata
  metadata: {
    source: Optional<NodeReference>,
    language: Optional<LanguageCode>,
    variant: Optional<String>
  },
  
  // Permissions
  permissions: PermissionSet
}
```

### 5.2 Block Types

### 5.2.1 Text Blocks

| Block Type | Description | Use Case |
|------------|-------------|----------|
| `Paragraph` | Standard prose | Narrative, explanation |
| `Heading` | Section title | H1-H6 hierarchy |
| `Subheading` | Subsection title | H4-H6 |
| `Verse` | Scripture verse | Bible text with reference |
| `Quote` | Quoted text | Citations, dialogue |
| `Dialogue` | Conversational text | Character speech |
| `PoetryLine` | Single poetry line | Psalms, prophetic poetry |
| `PoetryStanza` | Poetry stanza group | Grouped verses |
| `PrayerText` | Prayer content | Written prayers |
| `Footnote` | Reference note | Citations, clarifications |
| `Callout` | Emphasized text | Important points |
| `Caption` | Descriptive text | Image/video captions |

### 5.2.2 Media Blocks

| Block Type | Description | Use Case |
|------------|-------------|----------|
| `Image` | Static image | Illustrations, photos |
| `ImageGallery` | Multiple images | Photo collections |
| `AudioPlayer` | Audio playback | Narration, music |
| `VideoPlayer` | Video playback | Teaching, documentaries |
| `YouTubeEmbed` | YouTube video | External video content |
| `Animation` | Animated content | SVG animations |
| `InteractiveSVG` | Interactive diagram | Maps, timelines |
| `Carousel` | Rotating content | Image sequences |

### 5.2.3 Structural Blocks

| Block Type | Description | Use Case |
|------------|-------------|----------|
| `Divider` | Visual separator | Section breaks |
| `Spacer` | Vertical space | Rhythm control |
| `Container` | Grouping wrapper | Logical grouping |
| `Grid` | Multi-column layout | Complex arrangements |
| `Flex` | Flexible layout | Dynamic arrangements |

### 5.2.4 Interactive Blocks

| Block Type | Description | Use Case |
|------------|-------------|----------|
| `Button` | Clickable action | Navigation, actions |
| `Link` | Hyperlink | Cross-references |
| `CrosslinkCard` | Rich link preview | Related content |
| `Quiz` | Interactive quiz | Knowledge checks |
| `Poll` | Voting mechanism | Community input |
| `MiniGame` | Simple game | Interactive learning |
| `Flashcard` | Study aid | Memorization |

### 5.2.5 Informational Blocks

| Block Type | Description | Use Case |
|------------|-------------|----------|
| `PersonCard` | Person information | Biographical data |
| `LocationCard` | Place information | Geographic data |
| `TimelineCard` | Event information | Historical data |
| `ConceptCard` | Idea explanation | Theological concepts |
| `WordStudy` | Original language | Greek/Hebrew analysis |
| `MapBlock` | Interactive map | Geographic visualization |
| `TimelineBlock` | Sequential events | Historical timeline |
| `TreeBlock` | Hierarchical data | Genealogy, taxonomy |

### 5.3 Block Content Structure

Each block type has specific content structure:

```javascript
// Example: Verse Block
VerseBlock = {
  type: 'Verse',
  content: {
    reference: 'Hebrews 1:1',
    text: 'In the past God spoke to our ancestors...',
    translation: 'NIV',
    originalLanguage: {
      greek: Optional<GreekText>,
      hebrew: Optional<HebrewText>
    },
    variants: [TextVariant],
    footnotes: [FootnoteReference]
  }
}

// Example: Image Block
ImageBlock = {
  type: 'Image',
  content: {
    assetId: UUID,
    alt: 'Description for accessibility',
    caption: Optional<String>,
    attribution: Optional<String>,
    sizes: {
      thumbnail: URL,
      medium: URL,
      large: URL,
      original: URL
    },
    focalPoint: { x: Number, y: Number }
  }
}

// Example: Crosslink Card
CrosslinkCard = {
  type: 'CrosslinkCard',
  content: {
    targetNodeId: UUID,
    relationshipType: String,
    preview: {
      title: String,
      summary: String,
      thumbnail: Optional<URL>
    },
    actions: [Action]
  }
}
```

### 5.4 Block Rendering Pipeline

```
Block Input
    │
    ▼
┌─────────────────┐
│ Type Detection  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Content Parse   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Typography Apply│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Layout Compute  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Component Select│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Render Output   │
└─────────────────┘
```

---

## 6. Component Specification

### 6.1 Component Philosophy

Components are:

1. **Pure Functions**: `Component(props) → UI`
2. **Stateless**: No internal mutable state
3. **Composable**: Small components build complex UIs
4. **Reusable**: One component, many contexts
5. **Testable**: Easy to verify in isolation
6. **Accessible**: WCAG compliance built-in

### 6.2 Component Hierarchy

```
Component
├── Atomic Components (indivisible)
│   ├── Text
│   ├── Icon
│   ├── Button
│   ├── Image
│   ├── Spacer
│   └── Divider
│
├── Molecular Components (atomic combinations)
│   ├── HeadingWithIcon
│   ├── CardPreview
│   ├── MediaPlayer
│   ├── CrosslinkPreview
│   └── PrayerCard
│
├── Organism Components (molecular combinations)
│   ├── SceneHeader
│   ├── PanelContainer
│   ├── BlockGroup
│   ├── MediaGallery
│   └── DiscussionThread
│
└── Template Components (layout patterns)
    ├── SingleColumnLayout
    ├── MultiColumnLayout
    ├── ImmersiveLayout
    └── PresentationLayout
```

### 6.3 Component Interface

Every component follows this interface:

```javascript
Component = (props) => {
  // Props are immutable
  // Props contain all necessary data
  // Props include callbacks for interactions
  
  return UI;
}

Component.propTypes = {
  // Required props
  requiredProp: Type.isRequired,
  
  // Optional props with defaults
  optionalProp: Type.default(defaultValue),
  
  // Callbacks
  onAction: Function,
  
  // Children (for composition)
  children: Node
}
```

### 6.4 Core Component Catalog

### 6.4.1 Atomic Components

#### Text
```javascript
Text({
  content: String,
  variant: 'body' | 'caption' | 'label' | 'title',
  emphasis: 'normal' | 'bold' | 'italic',
  color: ColorToken,
  align: 'left' | 'center' | 'right' | 'justify',
  selectable: Boolean,
  copiable: Boolean
})
```

#### Icon
```javascript
Icon({
  name: IconName, // Biblical metaphor icon
  size: 'small' | 'medium' | 'large',
  color: ColorToken,
  decorative: Boolean // For screen readers
})
```

#### Button
```javascript
Button({
  label: String,
  icon: Optional<IconName>,
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost',
  size: 'small' | 'medium' | 'large',
  disabled: Boolean,
  loading: Boolean,
  onClick: Function
})
```

#### Image
```javascript
Image({
  src: URL,
  alt: String,
  sizes: ImageSizes,
  loading: 'eager' | 'lazy',
  aspectRatio: Ratio,
  objectFit: 'cover' | 'contain' | 'fill',
  onLoad: Function,
  onError: Function
})
```

### 6.4.2 Molecular Components

#### MediaPlayer
```javascript
MediaPlayer({
  assetId: UUID,
  type: 'audio' | 'video' | 'narration' | 'music',
  title: String,
  artwork: Optional<URL>,
  controls: ControlSet,
  autoplay: Boolean,
  loop: Boolean,
  volume: Number,
  onPlay: Function,
  onPause: Function,
  onEnded: Function,
  onTimeUpdate: Function
})
```

#### CrosslinkPreview
```javascript
CrosslinkPreview({
  targetNode: Node,
  relationshipType: String,
  showThumbnail: Boolean,
  showSummary: Boolean,
  actions: [Action],
  onClick: Function,
  onContextMenu: Function
})
```

#### PrayerCard
```javascript
PrayerCard({
  prayer: PrayerNode,
  type: 'petition' | 'thanksgiving' | 'confession' | 'adoration',
  isPrivate: Boolean,
  amenCount: Number,
  userHasAmened: Boolean,
  onAmen: Function,
  onReply: Function,
  onShare: Function
})
```

### 6.4.3 Organism Components

#### SceneHeader
```javascript
SceneHeader({
  scene: Scene,
  showBreadcrumb: Boolean,
  showActions: Boolean,
  onNavigate: Function,
  onBookmark: Function,
  onShare: Function
})
```

#### PanelContainer
```javascript
PanelContainer({
  panel: Panel,
  isExpanded: Boolean,
  onToggleExpand: Function,
  onFocus: Function,
  children: [Component]
})
```

#### DiscussionThread
```javascript
DiscussionThread({
  thread: DiscussionNode,
  maxDepth: Number,
  sortBy: 'newest' | 'oldest' | 'popular',
  onReply: Function,
  onReact: Function,
  onReport: Function
})
```

### 6.5 Component Styling

Components use design tokens, not hardcoded values:

```javascript
// Design Token System
tokens = {
  // Colors
  colors: {
    text: { primary, secondary, muted },
    background: { base, elevated, overlay },
    accent: { primary, secondary, success, warning, error },
    biblical: { dwelling, treasury, way, vine, etc. }
  },
  
  // Typography
  typography: {
    families: { narrative, poetry, prophecy, dialogue, prayer },
    sizes: { xs, sm, base, lg, xl, 2xl, 3xl, 4xl },
    weights: { light, normal, medium, semibold, bold },
    lineHeights: { tight, normal, relaxed, loose }
  },
  
  // Spacing
  spacing: {
    units: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
    sections: { compact, normal, spacious, generous }
  },
  
  // Motion
  motion: {
    durations: { fast: 150, normal: 300, slow: 500, slower: 800 },
    easings: { easeIn, easeOut, easeInOut, spring },
    animations: { fade, slide, scale, rotate, bloom, gather }
  },
  
  // Layout
  layout: {
    breakpoints: { phone, tablet, desktop, ultrawide },
    columns: { single, double, triple, quad },
    gutters: { narrow, normal, wide }
  }
}
```

---

## 7. Responsive Layout Engine

### 7.1 Layout Philosophy

The layout engine **re-composes** rather than **stretches**:

```
Wrong:  [===== Stretch Content =====]
Right:  [Recompose for Each Breakpoint]
```

### 7.2 Breakpoint System

```javascript
Breakpoints = {
  phone: { min: 0, max: 639 },
  phoneLarge: { min: 640, max: 767 },
  tablet: { min: 768, max: 1023 },
  tabletLarge: { min: 1024, max: 1279 },
  desktop: { min: 1280, max: 1535 },
  desktopLarge: { min: 1536, max: 1919 },
  ultraWide: { min: 1920, max: Infinity }
}
```

### 7.3 Layout Modes

### 7.3.1 Phone (Single Column)

```
┌─────────────────┐
│   Scene Header  │
├─────────────────┤
│                 │
│     Panel 1     │
│                 │
├─────────────────┤
│                 │
│     Panel 2     │
│                 │
├─────────────────┤
│                 │
│     Panel 3     │
│                 │
└─────────────────┘
```

**Characteristics:**
- Single column flow
- Full-width panels
- Stacked blocks
- Minimal whitespace
- Touch-optimized targets

### 7.3.2 Tablet (Multi-Column)

```
┌─────────────────────────────────┐
│         Scene Header            │
├───────────────────┬─────────────┤
│                   │             │
│     Panel 1       │  Context    │
│                   │  Panel      │
├───────────────────┤             │
│                   │             │
│     Panel 2       │             │
│                   │             │
├───────────────────┴─────────────┤
│         Panel 3                 │
└─────────────────────────────────┘
```

**Characteristics:**
- Two-column layout
- Primary + context panels
- Side-by-side blocks where appropriate
- Balanced whitespace
- Hybrid touch/mouse

### 7.3.3 Desktop (Immersive Workspace)

```
┌─────────────────────────────────────────────────────┐
│                  Scene Header                       │
├──────────┬──────────────────────────────┬───────────┤
│          │                              │           │
│   Nav    │        Main Content          │  Context  │
│  Panel   │                              │  Panel    │
│          │   ┌────────────────────┐     │           │
│          │   │      Panel 1       │     │           │
│          │   ├────────────────────┤     │           │
│          │   │      Panel 2       │     │           │
│          │   └────────────────────┘     │           │
├──────────┴──────────────────────────────┴───────────┤
│                  Status Bar                         │
└─────────────────────────────────────────────────────┘
```

**Characteristics:**
- Three-column layout
- Persistent navigation
- Large content area
- Rich context panel
- Mouse + keyboard optimized
- Multiple simultaneous views

### 7.3.4 Ultra-Wide (Museum Mode)

```
┌─────────────────────────────────────────────────────────────────┐
│                       Scene Header                              │
├──────┬───────────────────┬───────────────┬────────────────┬─────┤
│      │                   │               │                │     │
│ Nav  │    Primary        │    Secondary  │    Context     │Tools│
│      │    Content        │    Content    │    & Related   │     │
│      │                   │               │                │     │
│      │  ┌───────────┐    │  ┌─────────┐  │  ┌──────────┐  │     │
│      │  │  Panel 1  │    │  │ Panel 3 │  │  │ Crossrefs│  │     │
│      │  ├───────────┤    │  ├─────────┤  │  ├──────────┤  │     │
│      │  │  Panel 2  │    │  │ Panel 4 │  │  │  Media   │  │     │
│      │  └───────────┘    │  └─────────┘  │  └──────────┘  │     │
├──────┴───────────────────┴───────────────┴────────────────┴─────┤
│                       Timeline / Map                            │
└─────────────────────────────────────────────────────────────────┘
```

**Characteristics:**
- Five-zone layout
- Multiple content streams
- Integrated timeline/map
- Tool panel available
- Museum-like experience
- Maximum immersion

### 7.4 Layout Algorithm

```javascript
function calculateLayout(scenes, panels, blocks, viewport) {
  // 1. Determine breakpoint
  const breakpoint = getBreakpoint(viewport.width);
  
  // 2. Select layout mode
  const layoutMode = getLayoutMode(breakpoint, userPreferences);
  
  // 3. Calculate zone allocations
  const zones = allocateZones(layoutMode, viewport);
  
  // 4. Distribute panels to zones
  const panelDistribution = distributePanels(panels, zones, priorities);
  
  // 5. Calculate block layouts within panels
  const blockLayouts = panels.map(panel => 
    layoutBlocks(panel.blocks, zones[panel.zone])
  );
  
  // 6. Generate layout tree
  const layoutTree = buildLayoutTree(zones, panelDistribution, blockLayouts);
  
  // 7. Apply constraints and adjustments
  const finalLayout = applyConstraints(layoutTree, viewport);
  
  return finalLayout;
}
```

### 7.5 Layout Constraints

```javascript
Constraints = {
  // Minimum sizes
  minTouchTarget: 44, // pixels
  minFontSize: 14, // pixels
  minLineHeight: 1.4,
  
  // Maximum sizes
  maxLineWidth: 75, // characters
  maxHeadingWidth: 50, // characters
  
  // Aspect ratios
  imageAspectRatios: ['1:1', '4:3', '16:9', '3:2'],
  videoAspectRatios: ['16:9', '4:3', '21:9'],
  
  // Whitespace
  minMargin: 16, // pixels
  minPadding: 12, // pixels
  preferredWhitespace: 'generous'
}
```

### 7.6 Responsive Typography

Typography scales with viewport:

```javascript
function calculateFontSize(baseSize, viewport, hierarchyLevel) {
  const scale = getScaleFactor(viewport);
  const hierarchyMultiplier = getHierarchyMultiplier(hierarchyLevel);
  
  return baseSize * scale * hierarchyMultiplier;
}

// Scale factors
ScaleFactors = {
  phone: 0.9,
  tablet: 1.0,
  desktop: 1.1,
  ultraWide: 1.2
}
```

---

## 8. Crosslink Engine

### 8.1 Crosslink Philosophy

Crosslinks are **hidden doors**, not hyperlinks.

They reveal relationships without breaking context.

### 8.2 Crosslink Types

```javascript
CrosslinkTypes = {
  // Scriptural relationships
  'quotes': 'Direct quotation',
  'references': 'Biblical reference',
  'fulfills': 'Prophecy fulfillment',
  'contrasts': 'Contrasting passage',
  'continues': 'Continuation of thought',
  'explains': 'Explanatory passage',
  'parallel-account': 'Parallel narrative',
  
  // Thematic relationships
  'related-theme': 'Same theme',
  'related-doctrine': 'Same doctrine',
  'related-symbol': 'Same symbol',
  
  // Entity relationships
  'mentions-person': 'Person mentioned',
  'mentions-place': 'Place mentioned',
  'mentions-event': 'Event mentioned',
  'located-at': 'Geographic location',
  'occurs-before': 'Temporal predecessor',
  'occurs-after': 'Temporal successor',
  
  // Scholarly relationships
  'commentary-of': 'Commentary on passage',
  'translation-of': 'Translation variant',
  'original-language': 'Greek/Hebrew source',
  
  // Community relationships
  'discussion-about': 'Related discussion',
  'prayer-for': 'Related prayer',
  'study-group': 'Study group content',
  
  // Media relationships
  'illustrates': 'Visual illustration',
  'expanded-in': 'Expanded treatment',
  'adapted-from': 'Source material',
  
  // AI relationships
  'ai-generated-from': 'AI insight source',
  'ai-suggests': 'AI recommendation'
}
```

### 8.3 Crosslink Discovery

```javascript
function discoverCrosslinks(node, options = {}) {
  const {
    maxDepth = 2,
    relationshipTypes = 'all',
    prioritize = 'relevance',
    filterBy = null
  } = options;
  
  // 1. Get direct relationships
  const directLinks = getRelationships(node.id, relationshipTypes);
  
  // 2. Traverse deeper if requested
  const indirectLinks = maxDepth > 1 
    ? traverseGraph(directLinks, maxDepth - 1)
    : [];
  
  // 3. Score and rank links
  const scored = scoreLinks([...directLinks, ...indirectLinks], {
    relevanceTo: node,
    userPreferences: getUserPreferences(),
    readingContext: getCurrentContext()
  });
  
  // 4. Filter if specified
  const filtered = filterBy 
    ? scored.filter(filterBy)
    : scored;
  
  // 5. Sort by priority
  const sorted = sortByPriority(filtered, prioritize);
  
  return sorted;
}
```

### 8.4 Crosslink Presentation

Crosslinks appear contextually:

### 8.4.1 Inline Crosslinks

```
In the past God spoke to our [ancestors] through the prophets...
                                       │
                                       ▼
                              ┌─────────────────┐
                              │ Ancestors       │
                              │ • Patriarchs    │
                              │ • Israelites    │
                              │ 12 occurrences  │
                              │ [Explore]       │
                              └─────────────────┘
```

### 8.4.2 Margin Crosslinks

```
┌────────────────────────────┬──────────────────┐
│ In the past God spoke to   │ Related:         │
│ our ancestors through the  │ • Exodus 3:6     │
│ prophets...                │ • Deut 1:8       │
│                            │ • Matt 1:23      │
│                            │ [View All →]     │
└────────────────────────────┴──────────────────┘
```

### 8.4.3 Context Panel Crosslinks

```
┌─────────────────────────────────┬──────────────────────┐
│                                 │                      │
│     Main Content                │   Crosslinks         │
│                                 │                      │
│     [Reading text...]           │   People:            │
│                                 │   • Moses            │
│                                 │   • Aaron            │
│                                 │                      │
│                                 │   Places:            │
│                                 │   • Mount Sinai      │
│                                 │   • Egypt            │
│                                 │                      │
│                                 │   Themes:            │
│                                 │   • Covenant         │
│                                 │   • Law              │
│                                 │                      │
│                                 │   [Explore Graph →]  │
└─────────────────────────────────┴──────────────────────┘
```

### 8.5 Crosslink Actions

Every crosslink exposes actions:

```javascript
CrosslinkActions = {
  preview: 'Show quick preview',
  navigate: 'Navigate to target',
  openSide: 'Open in context panel',
  openNew: 'Open in new view',
  compare: 'Compare side-by-side',
  addToStudy: 'Add to study collection',
  share: 'Share relationship',
  annotate: 'Add note to relationship'
}
```

### 8.6 Crosslink State Management

```javascript
CrosslinkState = {
  // Currently visible crosslinks
  visible: [Crosslink],
  
  // Active/focused crosslink
  active: Optional<Crosslink>,
  
  // History of opened crosslinks
  history: [CrosslinkNavigation],
  
  // User preferences for crosslinks
  preferences: {
    autoExpand: Boolean,
    showPreviews: Boolean,
    preferredDepth: Number,
    hiddenTypes: [CrosslinkType]
  }
}
```

---

## 9. Reader State Model

### 9.1 State Philosophy

Reader state is:

1. **Immutable**: Never mutate, always create new
2. **Complete**: All information recoverable
3. **Serializable**: Can be saved/restored
4. **Time-travelable**: Full history maintained
5. **Predictable**: Same input → same output

### 9.2 State Structure

```javascript
ReaderState = {
  // Session identification
  sessionId: UUID,
  startedAt: Timestamp,
  
  // Current content
  currentScene: Optional<SceneReference>,
  currentPanel: Optional<PanelReference>,
  focusedBlock: Optional<BlockReference>,
  
  // Navigation
  history: [NavigationEntry],
  future: [NavigationEntry],
  breadcrumbs: [Breadcrumb],
  
  // View state
  view: {
    mode: ReadingMode,
    layout: LayoutConfiguration,
    zoom: ZoomLevel,
    scrollPosition: ScrollPosition,
    focusedElement: Optional<ElementId>
  },
  
  // Panel states
  panels: {
    expanded: [PanelId],
    collapsed: [PanelId],
    pinned: [PanelId]
  },
  
  // Media state
  media: {
    audio: AudioState,
    video: VideoState,
    images: ImageLoadState
  },
  
  // User annotations
  annotations: {
    bookmarks: [Bookmark],
    highlights: [Highlight],
    notes: [Note],
    tags: [Tag]
  },
  
  // Crosslink state
  crosslinks: {
    discovered: [Crosslink],
    opened: [CrosslinkId],
    favorites: [CrosslinkId]
  },
  
  // Community state
  community: {
    discussions: [DiscussionState],
    prayers: [PrayerState],
    presence: PresenceState
  },
  
  // Preferences (session-specific)
  preferences: {
    typography: TypographyPreferences,
    layout: LayoutPreferences,
    media: MediaPreferences,
    accessibility: AccessibilityPreferences
  },
  
  // Cache state
  cache: {
    loadedNodes: [NodeId],
    pendingLoads: [NodeId],
    failedLoads: [LoadError]
  },
  
  // UI state
  ui: {
    sidebarOpen: Boolean,
    contextPanelOpen: Boolean,
    searchOpen: Boolean,
    notificationsOpen: Boolean,
    activeModal: Optional<ModalType>
  }
}
```

### 9.3 State Reducers

All state changes go through pure reducers:

```javascript
function readerReducer(state, action) {
  switch (action.type) {
    case 'SCENE_LOADED':
      return loadScene(state, action.payload);
    
    case 'PANEL_TOGGLED':
      return togglePanel(state, action.payload);
    
    case 'CROSSLINK_OPENED':
      return openCrosslink(state, action.payload);
    
    case 'BOOKMARK_CREATED':
      return createBookmark(state, action.payload);
    
    case 'MEDIA_PLAYBACK_CHANGED':
      return updateMediaState(state, action.payload);
    
    case 'NAVIGATION_HISTORY_UPDATED':
      return updateHistory(state, action.payload);
    
    default:
      return state;
  }
}
```

### 9.4 State Persistence

State persists across sessions:

```javascript
PersistenceStrategy = {
  // What to persist
  persistent: [
    'sessionId',
    'currentScene',
    'scrollPosition',
    'annotations',
    'preferences'
  ],
  
  // What not to persist
  transient: [
    'media.playbackState',
    'ui.activeModal',
    'cache.pendingLoads'
  ],
  
  // When to persist
  triggers: [
    'sceneChange',
    'annotationCreated',
    'preferenceChange',
    'sessionEnd',
    'periodic(30s)'
  ]
}
```

### 9.5 State Selectors

Selectors provide efficient state queries:

```javascript
// Current scene with full data
const selectCurrentScene = createSelector(
  [state => state.currentScene, state => state.cache.loadedNodes],
  (sceneRef, loadedNodes) => 
    loadedNodes.find(n => n.id === sceneRef?.id)
);

// Expanded panels for current scene
const selectExpandedPanels = createSelector(
  [state => state.currentScene, state => state.panels.expanded],
  (scene, expandedIds) =>
    scene?.panels.filter(p => expandedIds.includes(p.id))
);

// Visible crosslinks
const selectVisibleCrosslinks = createSelector(
  [state => state.crosslinks.discovered, state => state.preferences],
  (crosslinks, prefs) =>
    crosslinks.filter(cl => !prefs.hiddenTypes.includes(cl.type))
);
```

---

## 10. Multimedia Architecture

### 10.1 Media Philosophy

Media is:

1. **Progressive**: Loads in quality stages
2. **Non-blocking**: Never delays content rendering
3. **Coordinated**: Multiple media types coexist gracefully
4. **Persistent**: Playback state survives navigation
5. **Accessible**: Full accessibility support

### 10.2 Media Types

```javascript
MediaTypes = {
  // Images
  'image': {
    formats: ['avif', 'webp', 'jpg', 'png'],
    loading: 'progressive',
    caching: 'aggressive'
  },
  
  // Audio
  'narration': {
    formats: ['mp3', 'aac', 'ogg'],
    streaming: true,
    backgroundable: true
  },
  'music': {
    formats: ['mp3', 'aac', 'ogg', 'flac'],
    streaming: true,
    backgroundable: true,
    crossfade: true
  },
  'ambient': {
    formats: ['mp3', 'ogg'],
    streaming: true,
    looping: true,
    backgroundable: true
  },
  
  // Video
  'youtube': {
    embed: true,
    lazyLoad: true,
    pictureInPicture: true
  },
  'video': {
    formats: ['mp4', 'webm'],
    streaming: true,
    pictureInPicture: true
  },
  
  // Animation
  'svg-animation': {
    formats: ['svg'],
    interactive: true
  },
  'lottie': {
    formats: ['json'],
    interactive: false
  }
}
```

### 10.3 Audio Architecture

### 10.3.1 Audio Mixer

Multiple audio sources coexist:

```javascript
AudioMixer = {
  channels: {
    narration: {
      volume: 0.8,
      muted: false,
      ducking: true // Lower when other audio plays
    },
    music: {
      volume: 0.3,
      muted: false,
      ducking: false,
      crossfade: true
    },
    ambient: {
      volume: 0.2,
      muted: false,
      looping: true
    },
    voiceChat: {
      volume: 1.0,
      muted: false,
      priority: 'high' // Overrides others
    },
    effects: {
      volume: 0.5,
      muted: false
    },
    notifications: {
      volume: 0.4,
      muted: false
    }
  },
  
  masterVolume: 1.0,
  globalMute: false
}
```

### 10.3.2 Audio State

```javascript
AudioState = {
  // Per-channel state
  channels: {
    narration: {
      isPlaying: Boolean,
      currentTime: Number,
      duration: Number,
      speed: Number,
      source: Optional<AssetReference>
    },
    // ... other channels
  },
  
  // Focus state
  focusChannel: Optional<ChannelName>,
  
  // Queue
  queue: [AudioRequest],
  
  // History
  history: [AudioPlayback]
}
```

### 10.4 Video Architecture

### 10.4.1 Video Embedding

```javascript
VideoEmbed = {
  // YouTube
  youtube: {
    videoId: String,
    startTime: Optional<Number>,
    endTime: Optional<Number>,
    controls: Boolean,
    autoplay: Boolean,
    loop: Boolean,
    modestBranding: Boolean
  },
  
  // Self-hosted
  selfHosted: {
    sources: [VideoSource],
    poster: Optional<URL>,
    captions: [CaptionTrack],
    chapters: [ChapterMarker]
  }
}
```

### 10.4.2 Video State

```javascript
VideoState = {
  activeVideo: Optional<VideoReference>,
  playbackState: 'idle' | 'loading' | 'playing' | 'paused' | 'ended',
  currentTime: Number,
  duration: Number,
  playbackRate: Number,
  volume: Number,
  muted: Boolean,
  fullscreen: Boolean,
  pictureInPicture: Boolean,
  quality: VideoQuality,
  captionsEnabled: Boolean,
  captionsTrack: Optional<LanguageCode>
}
```

### 10.5 Image Architecture

### 10.5.1 Progressive Loading

```javascript
ImageLoading = {
  stages: [
    { quality: 'blurry', size: 'thumbnail', priority: 'immediate' },
    { quality: 'medium', size: 'medium', priority: 'soon' },
    { quality: 'high', size: 'large', priority: 'idle' },
    { quality: 'original', size: 'original', priority: 'background' }
  ],
  
  strategy: 'progressive',
  placeholder: 'blurhash' | 'dominant-color' | 'solid'
}
```

### 10.5.2 Image Cache

```javascript
ImageCache = {
  // In-memory cache
  memory: LRUCache(maxSize: '100MB'),
  
  // IndexedDB cache
  indexedDB: {
    store: 'images',
    versioning: true,
    expiration: '30d'
  },
  
  // CDN cache
  cdn: {
    enabled: true,
    ttl: '7d'
  }
}
```

### 10.6 Media Synchronization

Media state syncs across:

1. **Multiple tabs**: Same media stays in sync
2. **Multiple devices**: Cloud-synced playback position
3. **Session restore**: Resume where you left off

```javascript
MediaSync = {
  // Local sync (tabs)
  local: BroadcastChannel('media-sync'),
  
  // Remote sync (devices)
  remote: {
    enabled: true,
    debounce: 5000, // ms
    fields: ['currentTime', 'playbackState']
  },
  
  // Conflict resolution
  conflictResolution: 'latest-wins'
}
```

---

## 11. Offline Strategy

### 11.1 Offline Philosophy

The reader works **completely offline**:

1. **Full content access**: Everything cached
2. **Graceful degradation**: Missing media handled elegantly
3. **Background sync**: Updates when online
4. **Conflict resolution**: Smart merging of changes

### 11.2 Caching Strategy

### 11.2.1 Cache Layers

```javascript
CacheLayers = {
  // Layer 1: Memory (fastest)
  memory: {
    maxSize: '500MB',
    eviction: 'LRU',
    contents: ['current-scene', 'recent-scenes', 'active-media']
  },
  
  // Layer 2: IndexedDB (persistent)
  indexedDB: {
    databases: ['content-graph', 'media-assets', 'user-data'],
    versioning: true,
    contents: ['all-cached-content']
  },
  
  // Layer 3: Service Worker (network fallback)
  serviceWorker: {
    strategies: {
      'content': 'cache-first',
      'media': 'stale-while-revalidate',
      'api': 'network-first'
    }
  }
}
```

### 11.2.2 Cache Invalidation

```javascript
CacheInvalidation = {
  // Time-based
  ttl: {
    content: '7d',
    media: '30d',
    userData: 'never' // Manual invalidation
  },
  
  // Event-based
  onEvents: {
    'node-updated': 'invalidate-node',
    'relationship-changed': 'invalidate-related',
    'user-action': 'invalidate-user-data'
  },
  
  // Version-based
  onVersionChange: 'clear-all'
}
```

### 11.3 Prefetching Strategy

```javascript
Prefetching = {
  // What to prefetch
  priorities: {
    critical: ['current-scene', 'next-scene', 'previous-scene'],
    high: ['linked-nodes', 'crosslink-targets'],
    normal: ['related-content', 'user-collections'],
    low: ['recommended-content', 'discover']
  },
  
  // When to prefetch
  triggers: {
    'scene-load': 'prefetch-adjacent',
    'idle': 'prefetch-recommended',
    'wifi-connected': 'prefetch-collections',
    'charging': 'prefetch-extensive'
  },
  
  // Budget
  budget: {
    bandwidth: '10MB/session',
    storage: '2GB-total'
  }
}
```

### 11.4 Sync Strategy

### 11.4.1 Delta Sync

Only sync changes:

```javascript
DeltaSync = {
  // Track changes locally
  changeLog: [ChangeEvent],
  
  // Sync protocol
  protocol: {
    request: { since: Timestamp, nodeId: Optional<UUID> },
    response: { changes: [Delta], checkpoint: Timestamp }
  },
  
  // Conflict detection
  conflicts: detectConflicts(localChanges, remoteChanges),
  
  // Conflict resolution
  resolution: 'merge-or-prompt'
}
```

### 11.4.2 Sync States

```javascript
SyncState = {
  status: 'synced' | 'syncing' | 'pending' | 'conflict' | 'offline',
  lastSync: Optional<Timestamp>,
  pendingChanges: Number,
  conflicts: [Conflict],
  nextSync: Optional<Timestamp>
}
```

### 11.5 Graceful Degradation

When media is unavailable:

```javascript
DegradationStrategy = {
  'missing-image': 'show-placeholder-with-caption',
  'missing-audio': 'show-transcript-with-notice',
  'missing-video': 'show-thumbnail-with-description',
  'missing-animation': 'show-static-frame',
  'slow-connection': 'reduce-quality-automatically'
}
```

---

## 12. Event Model

### 12.1 Event Philosophy

Events are:

1. **Immutable**: Never change after creation
2. **Append-only**: Only add, never modify
3. **Timestamped**: Precise timing recorded
4. **Typed**: Clear event taxonomy
5. **Serializable**: Can be stored/replayed

### 12.2 Event Taxonomy

### 12.2.1 Navigation Events

```javascript
NavigationEvents = {
  SceneEntered: {
    sceneId: UUID,
    entryPoint: String,
    previousScene: Optional<UUID>,
    timestamp: Timestamp
  },
  
  SceneExited: {
    sceneId: UUID,
    exitPoint: String,
    duration: Number,
    timestamp: Timestamp
  },
  
  PanelFocused: {
    sceneId: UUID,
    panelId: UUID,
    timestamp: Timestamp
  },
  
  CrosslinkOpened: {
    sourceNodeId: UUID,
    targetNodeId: UUID,
    relationshipType: String,
    timestamp: Timestamp
  },
  
  NavigationHistoryUpdated: {
    history: [NavigationEntry],
    timestamp: Timestamp
  }
}
```

### 12.2.2 Content Events

```javascript
ContentEvents = {
  SceneLoaded: {
    sceneId: UUID,
    loadDuration: Number,
    source: 'cache' | 'network',
    timestamp: Timestamp
  },
  
  PanelExpanded: {
    panelId: UUID,
    timestamp: Timestamp
  },
  
  PanelCollapsed: {
    panelId: UUID,
    timestamp: Timestamp
  },
  
  BlockInteracted: {
    blockId: UUID,
    interactionType: String,
    timestamp: Timestamp
  }
}
```

### 12.2.3 Annotation Events

```javascript
AnnotationEvents = {
  BookmarkCreated: {
    bookmarkId: UUID,
    nodeId: UUID,
    position: Position,
    note: Optional<String>,
    timestamp: Timestamp
  },
  
  HighlightCreated: {
    highlightId: UUID,
    nodeId: UUID,
    range: Range,
    color: Color,
    note: Optional<String>,
    timestamp: Timestamp
  },
  
  NoteCreated: {
    noteId: UUID,
    nodeId: UUID,
    content: String,
    visibility: 'private' | 'shared',
    timestamp: Timestamp
  }
}
```

### 12.2.4 Media Events

```javascript
MediaEvents = {
  AudioStarted: {
    channelId: String,
    assetId: UUID,
    timestamp: Timestamp
  },
  
  AudioPaused: {
    channelId: String,
    position: Number,
    timestamp: Timestamp
  },
  
  AudioCompleted: {
    channelId: String,
    assetId: UUID,
    duration: Number,
    timestamp: Timestamp
  },
  
  VideoOpened: {
    videoId: UUID,
    source: String,
    timestamp: Timestamp
  },
  
  ImageLoaded: {
    imageId: UUID,
    quality: String,
    loadDuration: Number,
    timestamp: Timestamp
  }
}
```

### 12.2.5 Community Events

```javascript
CommunityEvents = {
  PrayerStarted: {
    prayerId: UUID,
    type: String,
    timestamp: Timestamp
  },
  
  DiscussionOpened: {
    discussionId: UUID,
    nodeId: UUID,
    timestamp: Timestamp
  },
  
  VoiceRoomEntered: {
    roomId: UUID,
    timestamp: Timestamp
  },
  
  VoiceRoomExited: {
    roomId: UUID,
    duration: Number,
    timestamp: Timestamp
  }
}
```

### 12.2.6 Study Events

```javascript
StudyEvents = {
  StudyModeEnabled: {
    sceneId: UUID,
    tools: [StudyTool],
    timestamp: Timestamp
  },
  
  VerseCopied: {
    verseReference: String,
    translation: String,
    timestamp: Timestamp
  },
  
  WordStudied: {
    word: String,
    language: 'greek' | 'hebrew',
    lexiconEntry: UUID,
    timestamp: Timestamp
  }
}
```

### 12.3 Event Bus

```javascript
EventBus = {
  // Subscribe to events
  subscribe(eventType, handler),
  
  // Publish events
  publish(event),
  
  // Unsubscribe
  unsubscribe(subscription),
  
  // Replay events (for debugging/time-travel)
  replay(fromTime, toTime, filter)
}
```

### 12.4 Event Storage

Events stored immutably:

```javascript
EventStore = {
  // Append-only log
  log: [Event],
  
  // Indexes for querying
  indexes: {
    byType: Map<EventType, [EventId]>,
    byNode: Map<NodeId, [EventId]>,
    byTime: BTree<Timestamp, EventId>,
    bySession: Map<SessionId, [EventId]>
  },
  
  // Retention policy
  retention: {
    detailed: '30d',
    aggregated: '1y',
    forever: ['annotations', 'bookmarks']
  }
}
```

---

## 13. Plugin Architecture

### 13.1 Plugin Philosophy

Plugins enable extensibility without modifying core:

1. **Sandboxed**: Cannot break core functionality
2. **Composable**: Plugins can work together
3. **Discoverable**: Registry of available plugins
4. **Versioned**: Compatible versions tracked

### 13.2 Plugin API

```javascript
PluginAPI = {
  // Plugin metadata
  manifest: {
    id: String,
    name: String,
    version: String,
    description: String,
    author: String,
    requiredAPIVersion: String
  },
  
  // Extension points
  extensions: {
    // Add new block types
    blockTypes: [BlockTypeDefinition],
    
    // Add new components
    components: [ComponentDefinition],
    
    // Add new reading modes
    modes: [ReadingModeDefinition],
    
    // Add new tools
    tools: [ToolDefinition],
    
    // Add new export formats
    exporters: [ExporterDefinition],
    
    // Add new import formats
    importers: [ImporterDefinition]
  },
  
  // Hooks into lifecycle
  hooks: {
    onSceneLoad: Function,
    onSceneUnload: Function,
    onPanelRender: Function,
    onBlockRender: Function,
    onUserAction: Function
  },
  
  // Access to services
  services: {
    graph: GraphService,
    state: StateService,
    events: EventBus,
    media: MediaService,
    storage: StorageService
  }
}
```

### 13.3 Plugin Registry

```javascript
PluginRegistry = {
  // Registered plugins
  plugins: Map<PluginId, PluginInstance>,
  
  // Plugin discovery
  discover: async function(source) {
    // Scan plugin directory
    // Validate manifests
    // Check compatibility
    // Register valid plugins
  },
  
  // Plugin activation
  activate: function(pluginId) {
    // Initialize plugin
    // Register extensions
    // Attach hooks
  },
  
  // Plugin deactivation
  deactivate: function(pluginId) {
    // Remove extensions
    // Detach hooks
    // Cleanup resources
  }
}
```

### 13.4 Future Plugin Categories

Potential future plugins:

| Category | Examples |
|----------|----------|
| **3D/VR** | 3D temple reconstruction, VR pilgrimage |
| **AR** | AR Bible lands exploration |
| **Language** | Interactive Greek/Hebrew tutor |
| **AI** | Advanced AI teacher, conversation partner |
| **Music** | Interactive musical notation, singing |
| **Games** | Biblical trivia, interactive parables |
| **Social** | Enhanced discussion features |
| **Export** | PDF, ePub, print export |
| **Integration** | Notion, Obsidian, Logos integration |

---

## 14. Testing Strategy

### 14.1 Testing Philosophy

Testing ensures:

1. **Correctness**: Behavior matches specification
2. **Reliability**: Works consistently
3. **Performance**: Meets performance budgets
4. **Accessibility**: WCAG compliance verified
5. **Regression**: Changes don't break existing

### 14.2 Test Categories

### 14.2.1 Unit Tests

Test individual functions/components:

```javascript
// Example: Pure function test
test('composeScene creates correct structure', () => {
  const node = mockNode('hebrews-1');
  const scene = composeScene(node);
  
  expect(scene.id).toBe(node.id);
  expect(scene.panels.length).toBeGreaterThan(0);
  expect(scene.metadata.themes).toContain('Christology');
});
```

**Coverage target**: 90%+

### 14.2.2 Golden Rendering Tests

Verify visual output:

```javascript
// Example: Golden test
test('renders Hebrews 1 scene correctly', async () => {
  const result = await renderScene('hebrews-1');
  
  expect(result).toMatchGoldenSnapshot('hebrews-1-scene');
});
```

**Purpose**: Catch unintended visual changes

### 14.2.3 Component Tests

Test component behavior:

```javascript
// Example: Component test
test('CrosslinkPreview shows correct actions', () => {
  const props = {
    targetNode: mockNode('psalm-2'),
    relationshipType: 'quotes'
  };
  
  const { getByRole } = render(<CrosslinkPreview {...props} />);
  
  expect(getByRole('button', { name: 'Preview' })).toBeInTheDocument();
  expect(getByRole('button', { name: 'Navigate' })).toBeInTheDocument();
});
```

### 14.2.4 Reader State Tests

Test state transformations:

```javascript
// Example: State test
test('togglePanel expands collapsed panel', () => {
  const initialState = {
    panels: { expanded: [], collapsed: ['panel-1'] }
  };
  
  const action = { type: 'PANEL_TOGGLED', payload: { panelId: 'panel-1' } };
  const newState = readerReducer(initialState, action);
  
  expect(newState.panels.expanded).toContain('panel-1');
  expect(newState.panels.collapsed).not.toContain('panel-1');
});
```

### 14.2.5 Graph Traversal Tests

Test crosslink discovery:

```javascript
// Example: Graph test
test('discovers all crosslinks from Hebrews 1', () => {
  const node = loadNode('hebrews-1');
  const crosslinks = discoverCrosslinks(node, { maxDepth: 2 });
  
  expect(crosslinks.length).toBeGreaterThan(10);
  expect(crosslinks.some(cl => cl.targetId === 'psalm-2')).toBe(true);
  expect(crosslinks.some(cl => cl.type === 'quotes')).toBe(true);
});
```

### 14.2.6 Layout Tests

Test responsive layouts:

```javascript
// Example: Layout test
test.each([
  ['phone', 375, 'single-column'],
  ['tablet', 768, 'two-column'],
  ['desktop', 1280, 'three-column'],
  ['ultra-wide', 1920, 'five-zone']
])('calculates %s layout correctly', (name, width, expected) => {
  const layout = calculateLayout(mockScene, { width, height: 800 });
  
  expect(layout.mode).toBe(expected);
});
```

### 14.2.7 Accessibility Tests

Test WCAG compliance:

```javascript
// Example: Accessibility test
test('scene meets WCAG 2.1 AA', async () => {
  const { container } = render(<Scene scene={mockScene} />);
  
  const results = await axe(container);
  
  expect(results.violations).toHaveLength(0);
});
```

### 14.2.8 Offline Tests

Test offline functionality:

```javascript
// Example: Offline test
test('reader works completely offline', async () => {
  // Pre-cache content
  await cacheScene('hebrews-1');
  
  // Go offline
  await setOffline(true);
  
  // Should still render
  const result = await renderScene('hebrews-1');
  
  expect(result).toBeDefined();
  expect(result.source).toBe('cache');
});
```

### 14.2.9 Performance Tests

Test performance budgets:

```javascript
// Example: Performance test
test('scene loads within performance budget', async () => {
  const start = performance.now();
  await renderScene('hebrews-1');
  const duration = performance.now() - start;
  
  expect(duration).toBeLessThan(1000); // 1 second budget
});

test('maintains 60fps during scroll', async () => {
  const fps = await measureFPSDuringScroll();
  
  expect(fps.min).toBeGreaterThan(55); // Allow small variance
});
```

### 14.3 Test Infrastructure

```javascript
TestInfrastructure = {
  // Test runners
  runners: {
    unit: 'Jest',
    e2e: 'Playwright',
    visual: 'Chromatic',
    accessibility: 'axe-core',
    performance: 'Lighthouse CI'
  },
  
  // Mocks and fixtures
  mocks: {
    graph: 'Mock graph with test data',
    media: 'Mock media services',
    network: 'Mock network conditions'
  },
  
  // CI/CD integration
  ci: {
    runOnPR: true,
    requirePassing: true,
    performanceBudgets: true,
    accessibilityGates: true
  }
}
```

---

## 15. Performance Strategy

### 15.1 Performance Budgets

Strict budgets for key metrics:

| Metric | Budget | Measurement |
|--------|--------|-------------|
| **Initial Load** | < 2s | Time to interactive |
| **Scene Load** | < 1s | Cached, < 3s uncached |
| **First Paint** | < 500ms | Visible content |
| **Time to Content** | < 1s | Primary content visible |
| **Input Latency** | < 100ms | Tap/click to response |
| **Scroll FPS** | > 55fps | During scrolling |
| **Animation FPS** | > 55fps | During animations |
| **Memory Usage** | < 200MB | Steady state |
| **Bundle Size** | < 500KB | Initial JS |
| **Total Page Weight** | < 2MB | Including media |

### 15.2 Optimization Strategies

### 15.2.1 Code Splitting

```javascript
CodeSplitting = {
  // Core (always loaded)
  core: ['engine', 'state', 'events', 'basic-components'],
  
  // Lazy-loaded by route
  routes: {
    'reader': ['reader-engine', 'layout-engine'],
    'study': ['study-tools', 'crosslink-engine'],
    'prayer': ['prayer-components', 'ambient-audio']
  },
  
  // Lazy-loaded by feature
  features: {
    'video': ['video-player', 'youtube-embed'],
    'audio': ['audio-mixer', 'narration-player'],
    'community': ['discussion-thread', 'voice-room']
  },
  
  // Lazy-loaded by media type
  media: {
    '3d': ['three-js', 'webgl-renderer'],
    'animation': ['lottie', 'svg-animator']
  }
}
```

### 15.2.2 Virtualization

Virtualize long content lists:

```javascript
Virtualization = {
  // When to virtualize
  threshold: 50, // items
  
  // Window size
  windowSize: 10, // items above/below viewport
  
  // Overscan
  overscan: 5, // extra items
  
  // Item sizing
  itemSize: 'variable', // or fixed number
  
  // Recycling
  recycleComponents: true
}
```

### 15.2.3 Memoization

Memoize expensive computations:

```javascript
Memoization = {
  // What to memoize
  targets: [
    'graph-traversal',
    'layout-calculation',
    'crosslink-discovery',
    'style-computation',
    'component-rendering'
  ],
  
  // Cache strategy
  strategy: 'LRU',
  maxSize: 1000, // entries
  
  // Invalidation
  invalidateOn: ['data-change', 'preference-change']
}
```

### 15.2.4 Predictive Preloading

Predict and preload:

```javascript
PredictivePreloading = {
  // Predictions
  predictions: {
    'next-scene': 'Based on reading order',
    'linked-content': 'Based on crosslink clicks',
    'related-media': 'Based on current media'
  },
  
  // Timing
  timing: {
    'immediate': ['current-scene-media'],
    'soon': ['next-scene', 'previous-scene'],
    'idle': ['related-content', 'recommendations']
  },
  
  // Budget
  budget: {
    concurrent: 3, // max parallel loads
    bandwidth: '5MB/min'
  }
}
```

### 15.2.5 Image Optimization

```javascript
ImageOptimization = {
  // Formats (in priority order)
  formats: ['avif', 'webp', 'jpg'],
  
  // Sizes
  sizes: [320, 640, 960, 1280, 1920],
  
  // Quality
  quality: {
    thumbnail: 60,
    medium: 75,
    large: 85,
    original: 95
  },
  
  // Lazy loading
  lazyLoad: {
    threshold: '1.5x viewport',
    placeholder: 'blurhash'
  }
}
```

### 15.2.6 Media Streaming

```javascript
MediaStreaming = {
  // Audio
  audio: {
    format: 'mp3',
    bitrate: '128kbps',
    buffering: '30s',
    adaptive: false
  },
  
  // Video (YouTube handles this)
  video: {
    delegate: 'YouTube',
    quality: 'auto'
  }
}
```

### 15.3 Performance Monitoring

```javascript
PerformanceMonitoring = {
  // Metrics to track
  metrics: [
    'FCP', // First Contentful Paint
    'LCP', // Largest Contentful Paint
    'FID', // First Input Delay
    'CLS', // Cumulative Layout Shift
    'TTI', // Time to Interactive
    'FPS', // Frames Per Second
    'Memory' // Memory Usage
  ],
  
  // Reporting
  reporting: {
    sampleRate: 0.1, // 10% of sessions
    thresholds: {
      good: 'green',
      needsImprovement: 'orange',
      poor: 'red'
    }
  },
  
  // Alerts
  alerts: {
    onDegradation: true,
    onBudgetViolation: true
  }
}
```

---

## 16. Design System Manifesto

### 16.1 Our Creed

We believe:

1. **Beauty is Functional**: Aesthetics serve understanding
2. **Simplicity is Sophisticated**: Complexity hidden, elegance revealed
3. **Silence is Sacred**: Whitespace enables contemplation
4. **Motion Communicates**: Animation explains, never decorates
5. **Typography Tells Stories**: Form follows meaning
6. **Accessibility is Love**: Everyone deserves beauty
7. **Performance is Politeness**: Respect users' time and data
8. **Immutability is Integrity**: Data you can trust

### 16.2 Our Values

| Value | Practice |
|-------|----------|
| **Reverence** | Design that invites awe |
| **Clarity** | Design that removes confusion |
| **Patience** | Design that allows slowness |
| **Hospitality** | Design that welcomes all |
| **Integrity** | Design that tells truth |
| **Craftsmanship** | Design that honors detail |

### 16.3 Our Practices

1. **Start with Content**: Let meaning drive form
2. **Design in Silence**: Default to calm
3. **Animate with Purpose**: Every motion means something
4. **Test with Real Users**: Validate assumptions
5. **Measure Relentlessly**: Data informs decisions
6. **Iterate Humbly**: Always improve, never perfect

### 16.4 Our Metrics

Success measured by:

1. **Engagement Depth**: Time in contemplation, not scrolling
2. **Understanding**: Comprehension scores, not clicks
3. **Accessibility**: WCAG AAA where possible
4. **Performance**: Consistent 60fps, instant responses
5. **Delight**: User-reported joy and peace

### 16.5 Our Promise to Users

We promise:

- Never manipulate your attention
- Never dark pattern your choices
- Never sacrifice accessibility for aesthetics
- Never compromise performance for features
- Always respect your time and data
- Always design for dignity

---

## Appendix A: Complete Node Type Reference

### A.1 Content Nodes (45 types)

Book, Chapter, Section, Scene, Panel, Verse, Paragraph, Quote, Dialogue, PoetryLine, PoetryStanza, Prayer, Question, Answer, Reflection, Callout, Footnote, Caption, Heading, Subheading

### A.2 Entity Nodes (15 types)

Person, Group, Nation, City, Region, Building, Object, Artifact, Event, Timeline, HistoricalPeriod, Language, Doctrine, Theme, Symbol

### A.3 Linguistic Nodes (5 types)

GreekWord, HebrewWord, LexiconEntry, ParsingInfo, TranslationVariant

### A.4 Media Nodes (15 types)

Image, Painting, Photo, Diagram, Animation, MusicTrack, AmbientTrack, Narration, SoundEffect, Video, Playlist, Map, Location, Journey, Gallery

### A.5 Scholarly Nodes (8 types)

Commentary, StudyNote, WordStudy, HistoricalNote, TheologicalEssay, ChurchFather, Biography, Author

### A.6 Community Nodes (10 types)

Community, Discussion, PrayerRoom, VoiceRoom, PrayerRequest, Comment, Reaction, Friendship, Notification, Achievement

### A.7 User Nodes (8 types)

User, Bookmark, ReadingProgress, Note, Highlight, Tag, Collection, SearchHistory

### A.8 AI Nodes (4 types)

AIInsight, AIConversation, AIExplanation, AISuggestion

### A.9 Future Nodes

Reserved for undiscovered content types

---

## Appendix B: Complete Relationship Type Reference

### B.1 Scriptural Relationships (15 types)

quotes, references, fulfills, contrasts, continues, explains, mentions, contains, parallel-account, allusion-to, echoes, develops, concludes, introduces, summarizes

### B.2 Thematic Relationships (8 types)

related-theme, related-doctrine, related-symbol, related-festival, related-miracle, related-prophecy, related-fulfillment, related-teaching

### B.3 Entity Relationships (12 types)

mentions-person, mentions-place, mentions-event, located-at, occurs-before, occurs-after, born-in, died-at, lived-in, visited, ruled-over, founded

### B.4 Linguistic Relationships (8 types)

translation-of, original-language, cognate-of, derived-from, parsed-as, translated-as, variant-of, emended-to

### B.5 Scholarly Relationships (10 types)

commentary-of, study-of, explains, argues-for, argues-against, supports, challenges, builds-on, responds-to, cites

### B.6 Media Relationships (8 types)

illustrates, depicts, shows, represents, adapted-from, inspired-by, soundtrack-for, visualizes

### B.7 Community Relationships (8 types)

prayer-for, discussion-about, study-group, shared-with, recommended-by, endorsed-by, led-by, participated-in

### B.8 User Relationships (6 types)

favorited, saved-by-user, visited-after, read-with, annotated-by, collected-in

### B.9 AI Relationships (4 types)

ai-generated-from, ai-suggests, ai-explains, ai-connects

---

## Appendix C: Implementation Checklist

### Phase 1: Foundation (Weeks 1-4)

- [ ] Implement render pipeline stages 1-3
- [ ] Build scene composition engine
- [ ] Create panel expansion system
- [ ] Develop basic block resolver
- [ ] Establish state management
- [ ] Set up event bus

### Phase 2: Core Rendering (Weeks 5-8)

- [ ] Complete block resolution
- [ ] Implement component registry
- [ ] Build atomic components
- [ ] Build molecular components
- [ ] Create layout engine
- [ ] Implement responsive breakpoints

### Phase 3: Multimedia (Weeks 9-12)

- [ ] Build audio mixer
- [ ] Implement video embedding
- [ ] Create progressive image loading
- [ ] Develop media synchronization
- [ ] Add offline caching

### Phase 4: Crosslinks & Navigation (Weeks 13-16)

- [ ] Implement crosslink discovery
- [ ] Build context panels
- [ ] Create navigation history
- [ ] Develop breadcrumb system
- [ ] Add search integration

### Phase 5: Polish & Performance (Weeks 17-20)

- [ ] Optimize rendering performance
- [ ] Implement virtualization
- [ ] Add predictive preloading
- [ ] Complete accessibility audit
- [ ] Write comprehensive tests

### Phase 6: Plugins & Extensions (Weeks 21-24)

- [ ] Finalize plugin API
- [ ] Build plugin registry
- [ ] Create sample plugins
- [ ] Document extension points
- [ ] Launch plugin ecosystem

---

## Conclusion

The Living Reader Engine represents a fundamental reimagining of what a reading experience can be. Rather than displaying static pages, it renders living knowledge—interconnected, multimedia, community-enriched, and endlessly explorable.

Built on immutable foundations, powered by functional composition, and guided by biblical metaphors, the LRE will serve as the heart of "The Way" for decades to come.

Its design anticipates future content types, emerging technologies, and evolving user needs while remaining faithful to timeless principles of beauty, accessibility, and reverence.

This is not merely a reader. It is a gateway to encountering Truth in all its richness.

*Soli Deo Gloria*

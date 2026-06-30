# MILESTONE 02: Canonical Content Graph (CCG)

## Mission Statement

Design the canonical immutable knowledge graph that represents **ALL** content inside "The Way" platform.

This is **NOT**:
- An object hierarchy
- An ebook model  
- A CMS model

This **IS**:
- A semantic knowledge graph
- Everything is a Node
- Everything may connect to everything else
- A living vine, not a folder tree

---

## 1. Complete Graph Specification

### 1.1 Core Philosophy

The graph resembles a **living vine** where:
- Books are highly connected nodes, not containers
- Every verse may lead to another verse, song, image, prayer, discussion, location, person, commentary, map, animation, or another book
- Everything is traversable in any direction
- Relationships are first-class entities with their own metadata

### 1.2 The Universal Node Model

Every node in the system conforms to this immutable structure:

```javascript
{
  // Identity
  id: UUID,                    // Globally unique identifier
  kind: NodeType,              // Enum from canonical taxonomy
  title: String,               // Human-readable title
  slug: String,                // URL-safe identifier (unique per namespace)
  
  // Content
  summary: String,             // Brief description (markdown allowed)
  language: LanguageCode,      // ISO 639-1 code (e.g., "en", "grc", "he")
  content: ContentBlock[],     // Structured content (see Section 1.4)
  
  // Metadata
  metadata: {
    version: SemVer,           // Content version (immutable)
    createdAt: Timestamp,      // ISO 8601 timestamp
    updatedAt: Timestamp,      // ISO 8601 timestamp
    createdBy: UserID,         // Creator identity
    updatedBy: UserID,         // Last updater identity
    source: SourceReference,   // Origin (Notion, manual, AI, import)
    license: LicenseType,      // Usage rights
    tags: Tag[],               // Flat array of string tags
    custom: Map<String, Any>   // Extensible metadata (schema-less)
  },
  
  // Relationships (references only, not embedded)
  relationships: RelationshipRef[],
  
  // Assets (references only, not embedded)
  assets: AssetRef[],
  
  // Permissions
  permissions: {
    read: PermissionLevel,     // public | authenticated | role-based | private
    write: PermissionLevel,
    delete: PermissionLevel,
    share: PermissionLevel
  },
  
  // Provenance
  provenance: {
    history: VersionHash[],    // Chain of previous versions
    derivedFrom: NodeID[],     // Parent nodes (for AI-generated, translations, etc.)
    conflicts: ConflictRef[]   // Merge conflicts (if any)
  }
}
```

### 1.3 The Universal Relationship Model

Relationships are **first-class entities**, not foreign keys:

```javascript
{
  id: UUID,                    // Unique relationship identifier
  source: NodeID,              // Starting node
  destination: NodeID,         // Target node
  type: RelationshipType,      // From canonical relationship taxonomy
  direction: Direction,        // directed | bidirectional | symmetric
  
  // Semantic weight
  priority: Integer,           // 1-100 (display priority)
  weight: Float,               // 0.0-1.0 (algorithmic importance)
  confidence: Float,           // 0.0-1.0 (AI-generated certainty)
  
  // Context
  context: {
    label: String,             // Human-readable label ("quotes", "fulfills", etc.)
    excerpt: String,           // Optional quote showing the relationship
    source: SourceReference,   // Where this relationship was discovered
    createdBy: UserID,
    createdAt: Timestamp,
    custom: Map<String, Any>   // Extensible (schema-less)
  },
  
  // Lifecycle
  status: Status,              // active | deprecated | disputed | pending
  version: SemVer
}
```

### 1.4 Content Block Structure

Nodes contain structured content blocks, not raw HTML:

```javascript
ContentBlock = 
  | { type: "paragraph", text: RichText, style: TextStyle }
  | { type: "verse", reference: BibleReference, text: RichText, variant: TextVariant }
  | { type: "poetry", lines: PoetryLine[], meter: Meter }
  | { type: "dialogue", speaker: PersonRef, text: RichText, emotion: Emotion }
  | { type: "quote", source: NodeRef, text: RichText, blockQuote: Boolean }
  | { type: "prayer", category: PrayerCategory, text: RichText, liturgical: Boolean }
  | { type: "code", language: CodeLanguage, code: String, annotation: Annotation[] }
  | { type: "callout", variant: CalloutVariant, title: String, content: ContentBlock[] }
  | { type: "interactive", trigger: Trigger, action: Action, preview: Preview }
  | { type: "media-ref", assetId: AssetID, caption: RichText, alt: String }
  | { type: "cross-ref", nodeId: NodeID, label: String, preview: String }
  | { type: "timeline-event", date: DateRange, description: ContentBlock[] }
  | { type: "map-ref", location: GeoCoordinates, zoom: Integer, markers: Marker[] }
  | { type: "ai-insight", prompt: String, response: RichText, confidence: Float }
  | { type: "discussion-thread", roomId: RoomID, topic: String, count: Integer }
```

### 1.5 Rich Text Model

```javascript
RichText = TextRun[]

TextRun = {
  text: String,
  formatting: {
    bold: Boolean,
    italic: Boolean,
    underline: Boolean,
    smallCaps: Boolean,
    superscript: Boolean,
    subscript: Boolean
  },
  semantics: {
    type: SemanticType,        // e.g., "divine-speech", "prophecy", "ot-quote"
    language: LanguageCode,
    transliteration: String,
    strongsNumber: String,
    morphologicalCode: String
  },
  interactions: Interaction[]
}
```

---

## 2. Canonical Node Taxonomy

### 2.1 Content Nodes (Scripture & Literature)

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Book` | Biblical book, theological work, biography | canon, testament, genre, author, originalLanguage |
| `Chapter` | Chapter within a book | bookRef, chapterNumber, verseCount |
| `Section` | Logical division within chapter | chapterRef, sectionNumber, theme |
| `Scene` | Graphic novel scene, narrative unit | parentRef, sceneNumber, panelCount, mood |
| `Panel` | Individual graphic novel panel | sceneRef, panelNumber, composition, focus |
| `Verse` | Bible verse | bookRef, chapterNumber, verseNumber, manuscriptVariants |
| `Paragraph` | Prose paragraph | parentRef, paragraphNumber, rhetoricalDevice |
| `Quote` | Quoted passage | sourceRef, quotationType, context |

### 2.2 Narrative & Dramatic Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Prayer` | Prayer text | category, liturgicalUse, occasion, length |
| `Question` | Discussion question | category, difficulty, relatedThemes, answerCount |
| `Answer` | Answer to question | questionRef, authorType, confidence, votes |
| `Dialogue` | Conversational exchange | participants[], setting, emotionalTone |

### 2.3 Entity Nodes (People, Places, Things)

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Person` | Biblical figure, historical person, user | names[], titles[], roles[], lifeDates, biography |
| `Group` | Family, tribe, nation, community | members[], leadership, location, timePeriod |
| `Nation` | Ancient or modern nation | peopleRef, territory, government, alliances |
| `City` | Ancient or modern city | coordinates, foundingDate, significance, modernName |
| `Region` | Geographic region | boundaries[], climate, resources, biblicalName |
| `Temple` | Temple, tabernacle, sacred space | type, constructionDate, dimensions, significance |
| `Building` | Significant building | type, location, purpose, biblicalReferences |
| `Object` | Artifact, tool, item | material, purpose, symbolicMeaning, references |
| `Artifact` | Archaeological artifact | discoveryDate, location, museum, images[] |

### 2.4 Event & Temporal Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Event` | Historical event, miracle, prophecy fulfillment | date, location, participants, significance, sources |
| `Timeline` | Ordered sequence of events | startdate, endDate, theme, eventRefs[] |
| `HistoricalPeriod` | Era, age, dynasty | startDate, endDate, characteristics, keyEvents |
| `Journey` | Travel route, pilgrimage | startLocation, endLocation, waypoints[], distance |

### 2.5 Linguistic Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Language` | Natural language | code, name, family, script, direction |
| `GreekWord` | Greek lexical entry | lemma, transliteration, strongsNumber, frequency |
| `HebrewWord` | Hebrew lexical entry | lemma, transliteration, strongsNumber, frequency |
| `LexiconEntry` | Dictionary definition | wordRef, definitions[], usageExamples, etymology |
| `Morphology` | Grammatical form | wordRef, parsing, tense, voice, mood, case |

### 2.6 Interpretive Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Commentary` | Exegetical note | targetRef, author, tradition, length, confidence |
| `StudyNote` | User or editorial note | targetRef, authorType, visibility, tags[] |
| `Illustration` | Visual explanation | topic, style, artist, medium |
| `Painting` | Artwork | artist, date, movement, location, dimensions |
| `Photo` | Photograph | photographer, date, location, subject |
| `Diagram` | Schematic illustration | type, complexity, interactive, layers[] |

### 2.7 Media Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Animation` | Animated sequence | duration, style, narrator, musicRefs[] |
| `MusicTrack` | Musical composition | composer, performer, duration, genre, lyrics |
| `AmbientTrack` | Background audio | duration, mood, loopable, instruments[] |
| `Narration` | Spoken narration | narrator, duration, language, transcript |
| `SoundEffect` | Audio effect | type, duration, usage, source |
| `Video` | Video content | provider, duration, quality, chapters[], transcripts[] |
| `Playlist` | Ordered media collection | items[], totalDuration, theme, curator |

### 2.8 Spatial Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Map` | Geographic map | bounds, projection, layers[], timePeriod |
| `Location` | Specific coordinate | coordinates, elevation, accuracy, modernEquivalent |
| `Place` | Named place (biblical or modern) | names[], type, significance, references[] |

### 2.9 Organizational Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Collection` | Curated grouping | items[], curator, theme, visibility |
| `Theme` | Theological or narrative theme | definition, relatedThemes, keyPassages |
| `Doctrine` | Formal doctrine | tradition, formulation, keyTexts, controversies |
| `Symbol` | Symbolic element | meaning, occurrences, variations, culturalContext |
| `Festival` | Religious festival | origin, observance, significance, modernPractice |
| `Miracle` | Miraculous event | type, recipient, location, gospelParallels |
| `Prophecy` | Prophetic utterance | prophet, date, fulfillmentRefs[], interpretation |
| `Fulfillment` | Prophecy fulfillment | prophecyRef, eventRef, correspondence |

### 2.10 Historical & Biographical Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `ChurchFather` | Early church writer | dates, works, tradition, influence, quotes[] |
| `Biography` | Life story | subjectRef, author, scope, sources, chapters[] |
| `Author` | Writer profile | works[], tradition, period, influences, portrait |

### 2.11 Community Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Community` | Faith community | members[], leadership, location, meetingTimes |
| `Discussion` | Threaded conversation | topic, roomRef, participants[], messageCount, lastActivity |
| `PrayerRoom` | Virtual prayer space | theme, capacity, currentParticipants, schedule |
| `VoiceRoom` | Audio discussion space | theme, capacity, currentSpeakers, recordingEnabled |
| `User` | Platform user | displayName, avatar, bio, joinDate, preferences |
| `Friendship` | Connection between users | userA, userB, since, strength, sharedInterests |

### 2.12 Notification & Achievement Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Notification` | User notification | type, message, relatedNode, read, timestamp |
| `Achievement` | User milestone | type, title, description, criteria, awardedDate |

### 2.13 Personal State Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `Bookmark` | User bookmark | userRef, nodeRef, position, note, created |
| `ReadingProgress` | Progress tracking | userRef, nodeRef, percentage, lastPosition, timeSpent |
| `SearchResult` | Search result snapshot | query, matches[], facets, timestamp |

### 2.14 AI Nodes

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `AIInsight` | AI-generated analysis | prompt, response, confidence, sources[], modelVersion |
| `AIConversation` | AI dialogue session | userRef, messages[], context, duration |

### 2.15 Future-Proof Node

| Node Type | Description | Key Metadata |
|-----------|-------------|--------------|
| `FutureNode` | Placeholder for unknown types | schemaVersion, data: Map<String, Any>, migrationHints |

**Extensibility Rule**: New node types can be added without schema changes by:
1. Adding to the taxonomy enumeration
2. Defining type-specific metadata fields in `metadata.custom`
3. Ensuring backward compatibility through version negotiation

---

## 3. Canonical Relationship Taxonomy

### 3.1 Scriptural Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `quotes` | directed | Direct quotation | NT quotes OT |
| `references` | directed | General reference | Passage mentions person |
| `fulfills` | directed | Prophecy fulfillment | NT event fulfills OT prophecy |
| `contrasts` | bidirectional | Theological contrast | Law vs Grace |
| `continues` | directed | Narrative continuation | Chapter continues story |
| `explains` | directed | Exegetical explanation | Commentary explains verse |
| `mentions` | directed | Brief mention | Verse mentions location |
| `contains` | directed | Structural containment | Chapter contains verses |
| `parallel-account` | bidirectional | Synoptic parallel | Gospel parallels |
| `alludes-to` | directed | Subtle allusion | Possible OT allusion in NT |
| `echoes` | directed | Thematic echo | Theme echoes earlier passage |
| `expands` | directed | Development of idea | Later text expands concept |

### 3.2 Linguistic Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `translation-of` | directed | Translation relationship | LXX translates Hebrew |
| `transliteration-of` | directed | Transliteration | Greek transliterates Hebrew name |
| `cognate-of` | bidirectional | Linguistic cognate | Related words in Semitic languages |
| `derived-from` | directed | Etymological derivation | Word derived from root |
| `used-in` | directed | Word usage | Word used in specific passage |
| `defined-by` | directed | Lexical definition | Entry defines word |
| `translated-as` | directed | Translation equivalent | Hebrew word translated as Greek |

### 3.3 Historical & Temporal Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `occurs-before` | directed | Temporal precedence | Event A before Event B |
| `occurs-after` | directed | Temporal succession | Event B after Event A |
| `contemporary-with` | bidirectional | Same time period | Contemporary kings |
| `causes` | directed | Causal relationship | Event causes outcome |
| `results-in` | directed | Consequence | Action results in blessing |
| `precedes` | directed | Immediate predecessor | Chapter precedes next |
| `follows` | directed | Immediate successor | Verse follows previous |

### 3.4 Spatial Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `located-at` | directed | Physical location | City located at coordinates |
| `contains-location` | directed | Geographic containment | Region contains cities |
| `travels-to` | directed | Movement destination | Journey travels to city |
| `travels-from` | directed | Movement origin | Journey travels from city |
| `same-place` | bidirectional | Identical location | Modern city same as ancient |
| `near` | bidirectional | Proximity | Village near Jerusalem |
| `route-of` | directed | Path association | Road is route of journey |

### 3.5 Personal Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `spoken-by` | directed | Attribution | Quote spoken by person |
| `written-by` | directed | Authorship | Book written by author |
| `addressed-to` | directed | Recipient | Letter addressed to church |
| `about` | directed | Subject | Biography about person |
| `descendant-of` | directed | Genealogical | Son descendant of father |
| `ancestor-of` | directed | Genealogical | Father ancestor of son |
| `contemporary-of` | bidirectional | Same era | Prophets contemporary |
| `influenced-by` | directed | Intellectual influence | Theologian influenced by |
| `influences` | directed | Intellectual impact | Writer influences later |
| `disciple-of` | directed | Discipleship | Apostle disciple of Jesus |
| `teacher-of` | directed | Teaching relationship | Rabbi teaches student |

### 3.6 Thematic Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `illustrates` | directed | Example of theme | Story illustrates grace |
| `exemplifies` | directed | Perfect example | Person exemplifies faith |
| `related-theme` | bidirectional | Thematic connection | Justice related to mercy |
| `symbolizes` | directed | Symbolic meaning | Lamb symbolizes Christ |
| `represents` | directed | Representation | Type represents antitype |
| `foreshadows` | directed | Typological | OT event foreshadows NT |
| `fulfillment-of` | directed | Antitype | NT is fulfillment of type |

### 3.7 Media Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `depicts` | directed | Visual representation | Image depicts scene |
| `narrates` | directed | Audio narration | Narration narrates chapter |
| `accompanies` | bidirectional | Background media | Music accompanies scene |
| `soundtrack-for` | directed | Musical score | Track is soundtrack for video |
| `illustrated-by` | directed | Visual illustration | Passage illustrated by image |
| `adapted-from` | directed | Adaptation source | Video adapted from book |
| `source-for` | directed | Original source | Book is source for film |

### 3.8 Community Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `prayer-for` | directed | Prayer request | Prayer for person/situation |
| `answered-by` | directed | Prayer answer | Prayer answered by event |
| `responds-to` | directed | Discussion reply | Comment responds to post |
| `study-group` | bidirectional | Study participation | User in study group |
| `favorite` | directed | User preference | User favorites node |
| `saved-by-user` | directed | Personal save | User saves content |
| `shared-with` | directed | Sharing | Content shared with user |
| `visited-after` | directed | Navigation pattern | User visited B after A |
| `recommended-with` | bidirectional | Co-recommendation | Items often viewed together |

### 3.9 Scholarly Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `commentary-of` | directed | Exegetical work | Commentary on book |
| `critique-of` | directed | Critical response | Article critiques view |
| `supports` | directed | Evidential support | Evidence supports claim |
| `challenges` | directed | Counter-argument | View challenges orthodoxy |
| `harmonizes-with` | bidirectional | Reconciliation | Account harmonizes with |
| `variant-of` | bidirectional | Textual variant | Manuscript variant of verse |
| `corroborated-by` | directed | External confirmation | Event corroborated by archaeology |

### 3.10 AI Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `AI-generated-from` | directed | AI creation source | Insight generated from passage |
| `AI-summarizes` | directed | AI summary | Summary of long article |
| `AI-translates` | directed | AI translation | AI translation of text |
| `AI-analyzes` | directed | AI analysis | AI analysis of theme |
| `AI-suggests` | directed | AI recommendation | AI suggests related content |
| `AI-questions` | directed | AI-generated question | Question about passage |

### 3.11 Structural Relationships

| Relationship | Direction | Description | Example |
|--------------|-----------|-------------|---------|
| `part-of` | directed | Mereological | Chapter part of book |
| `has-part` | directed | Composition | Book has chapters |
| `sequence-of` | directed | Ordered collection | Playlist sequence of tracks |
| `version-of` | bidirectional | Versioning | Translation version of original |
| `abridgment-of` | directed | Condensed form | Summary abridgment of book |
| `expansion-of` | directed | Extended form | Commentary expansion of verse |

### 3.12 Relationship Metadata Extensions

Relationships support arbitrary metadata for future needs:

```javascript
{
  // Standard fields...
  
  // Custom extensions (schema-less)
  custom: {
    // Confidence scores for AI-generated relationships
    aiConfidence: 0.87,
    
    // Dispute tracking
    disputedBy: [userID1, userID2],
    disputeReason: "Alternative interpretation exists",
    
    // Cultural context
    culturalContext: "Second Temple Judaism",
    
    // Denominational perspective
    tradition: "Reformed",
    
    // Strength indicators
    strength: "strong" | "moderate" | "weak" | "disputed",
    
    // Evidence
    evidence: [nodeID1, nodeID2],
    
    // Any future field
    ...additionalFields
  }
}
```

---

## 4. Graph Storage Strategy

### 4.1 Storage Principles

1. **Immutability First**: Nodes never mutate; new versions replace old ones
2. **Append-Only History**: Complete version history maintained
3. **Local-First**: Primary storage is local device storage
4. **Incremental Sync**: Only changed nodes transfer over network
5. **Content-Addressable**: Nodes identified by content hash when possible

### 4.2 Local Storage Architecture

```
LocalStorage/
├── nodes/
│   ├── {nodeId}/
│   │   ├── current.json          # Current version
│   │   ├── history/
│   │   │   ├── v1.0.0.json
│   │   │   ├── v1.1.0.json
│   │   │   └── v2.0.0.json
│   │   └── metadata.json         # Index info
│   └── index.db                  # IndexedDB for queries
│
├── relationships/
│   ├── {relationshipId}.json
│   └── index.db
│
├── assets/
│   ├── {assetId}/
│   │   ├── manifest.json
│   │   └── cache/
│   │       ├── thumbnail.jpg
│   │       └── full.mp4
│   └── index.db
│
├── events/
│   ├── event-log.db              # Append-only event store
│   └── checkpoints/
│       └── checkpoint-{timestamp}.json
│
└── sync/
    ├── pending-uploads/
    ├── pending-downloads/
│   └── last-sync.json
```

### 4.3 Database Selection

**Primary: IndexedDB**
- Schema-less document storage
- Transactional support
- Large object storage (blobs)
- Background sync capability
- Cross-browser support

**Secondary: File System Access API** (where available)
- Direct file access for large assets
- Better performance for media
- Progressive Web App capability

**Fallback: localStorage**
- Small metadata only
- Emergency fallback
- Not for primary storage

### 4.4 Indexing Strategy

```javascript
// Primary indexes
nodes.byKind = MultiMap<NodeKind, NodeID>
nodes.bySlug = Map<Slug, NodeID>
nodes.byTag = MultiMap<Tag, NodeID>
nodes.byLanguage = MultiMap<Language, NodeID>
nodes.byCreatedAt = TimeSeries<NodeID>
nodes.byUpdatedAt = TimeSeries<NodeID>

// Relationship indexes
relationships.bySource = MultiMap<NodeID, RelationshipID>
relationships.byDestination = MultiMap<NodeID, RelationshipID>
relationships.byType = MultiMap<RelationshipType, RelationshipID>
relationships.byUsers = MultiMap<UserID, RelationshipID>

// Full-text search index (separate)
searchIndex = InvertedIndex<{
  terms: Map<Term, PostingList>,
  documents: Map<NodeID, DocumentInfo>,
  synonyms: Map<Term, Term[]>
}>
```

### 4.5 Versioning Strategy

```javascript
VersionStrategy = {
  // Semantic versioning for content
  versionFormat: "major.minor.patch",
  
  // Version increments
  major: "Breaking content changes",
  minor: "Additions without breaking changes", 
  patch: "Corrections and clarifications",
  
  // Version chain
  versionChain: [
    { version: "1.0.0", hash: "...", timestamp: "...", changes: [...] },
    { version: "1.1.0", hash: "...", timestamp: "...", changes: [...] },
    { version: "2.0.0", hash: "...", timestamp: "...", changes: [...] }
  ],
  
  // Diff storage (optional for large nodes)
  diffStrategy: "store-full-copy-until-threshold-then-diff",
  diffThreshold: "1MB"
}
```

### 4.6 Content Addressing

```javascript
function generateNodeId(node) {
  // For canonical content: use stable identifier
  if (node.metadata.source === "canonical") {
    return `${node.kind}:${node.slug}`;
  }
  
  // For user-generated content: use content hash + random
  const contentHash = sha256(JSON.stringify({
    kind: node.kind,
    title: node.title,
    content: node.content,
    language: node.language
  }));
  
  return `${node.kind}:${contentHash.slice(0, 16)}:${uuid()}`;
}
```

---

## 5. Offline Synchronization Strategy

### 5.1 Sync Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Local Device  │────▶│   Sync Engine   │◀────│   Cloud Store   │
│                 │     │                 │     │                 │
│ • Local Graph   │     │ • Change Detect │     │ • Master Graph  │
│ • Event Log     │     │ • Conflict Res  │     │ • Version Store │
│ • Pending Queue │     │ • Delta Compute │     │ • Sync Cursors  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### 5.2 Change Detection

**Event-Sourced Change Tracking:**

```javascript
// Every mutation creates an event
ChangeEvent = {
  id: UUID,
  type: EventType,           // NodeCreated, NodeUpdated, RelationshipCreated, etc.
  entityId: NodeID | RelationshipID,
  previousState: Node | null,
  newState: Node | null,
  timestamp: Timestamp,
  deviceId: DeviceID,
  vectorClock: VectorClock,
  checksum: String
}

// Event log is append-only
eventLog.append(changeEvent);

// Sync engine reads from last checkpoint
syncEngine.processEventsSince(lastSyncCheckpoint);
```

**Vector Clocks for Ordering:**

```javascript
VectorClock = Map<DeviceID, Integer>

// Increment on local change
function incrementClock(deviceId) {
  clock[deviceId] = (clock[deviceId] || 0) + 1;
  return clock;
}

// Merge clocks on sync
function mergeClocks(local, remote) {
  const merged = new Map(local);
  for (const [id, time] of remote) {
    merged.set(id, Math.max(merged.get(id) || 0, time));
  }
  return merged;
}

// Compare clocks
function compareClocks(a, b) {
  let aGreater = false;
  let bGreater = false;
  
  const allKeys = new Set([...a.keys(), ...b.keys()]);
  for (const key of allKeys) {
    const aTime = a.get(key) || 0;
    const bTime = b.get(key) || 0;
    if (aTime > bTime) aGreater = true;
    if (bTime > aTime) bGreater = true;
  }
  
  if (aGreater && !bGreater) return "A_AFTER_B";
  if (bGreater && !aGreater) return "B_AFTER_A";
  if (!aGreater && !bGreater) return "EQUAL";
  return "CONFLICT";
}
```

### 5.3 Delta Synchronization

**Efficient Transfer Protocol:**

```javascript
SyncRequest = {
  deviceId: DeviceID,
  lastCheckpoint: Timestamp,
  knownVersions: Map<NodeID, SemVer>,
  capabilities: ["compression", "binary", "differential"],
  filters: {
    kinds: NodeKind[],
    languages: Language[],
    maxBytes: Integer
  }
}

SyncResponse = {
  newCheckpoint: Timestamp,
  newNodes: Node[],
  updatedNodes: NodeUpdate[],
  deletedNodes: NodeID[],
  newRelationships: Relationship[],
  updatedRelationships: RelationshipUpdate[],
  deletedRelationships: RelationshipID[],
  serverVectorClock: VectorClock,
  compression: "gzip" | "brotli" | null,
  totalCount: Integer,
  hasMore: Boolean,
  nextCursor: Cursor
}
```

**Differential Updates:**

```javascript
// For large nodes, send only diffs
NodeUpdate = {
  nodeId: NodeID,
  fromVersion: SemVer,
  toVersion: SemVer,
  diffType: "full" | "patch",
  diff: Patch | Node
}

// JSON Patch format (RFC 6902)
Patch = {
  op: "add" | "remove" | "replace" | "move" | "copy" | "test",
  path: JSONPointer,
  value?: Any
}[]
```

### 5.4 Conflict Resolution

**Three-Way Merge Strategy:**

```javascript
ConflictResolution = {
  // Automatic resolution rules
  autoResolve: [
    {
      condition: "non-overlapping-fields",
      strategy: "merge-fields"
    },
    {
      condition: "monotonically-increasing-counter",
      strategy: "take-maximum"
    },
    {
      condition: "timestamp-field-only",
      strategy: "take-latest-timestamp"
    }
  ],
  
  // Manual resolution required
  manualResolve: [
    {
      condition: "overlapping-text-changes",
      strategy: "present-three-way-merge-ui"
    },
    {
      condition: "conflicting-relationships",
      strategy: "flag-for-review"
    }
  ],
  
  // Resolution record
  recordResolution: (base, ours, theirs, result) => {
    return {
      conflictId: UUID,
      nodeId: NodeID,
      baseVersion: base.version,
      ourVersion: ours.version,
      theirVersion: theirs.version,
      resolution: result,
      resolvedAt: Timestamp,
      resolvedBy: UserID | "auto"
    };
  }
}
```

**CRDT for Specific Fields:**

```javascript
// Use CRDTs for eventually consistent fields
CrdtFields = {
  // Tags: grow-only set
  tags: GSet<Tag>,
  
  // Relationships: OR-Set
  relationships: ORSet<RelationshipRef>,
  
  // Comments: LWW-Register with unique IDs
  comments: LWWMap<CommentID, Comment>,
  
  // Ratings: PN-Counter
  upvotes: PNCounter,
  downvotes: PNCounter
}
```

### 5.5 Sync States

```javascript
SyncState = {
  IDLE: "No sync in progress",
  CONNECTING: "Establishing connection",
  DOWNLOADING: "Receiving updates from server",
  UPLOADING: "Sending local changes to server",
  RESOLVING_CONFLICTS: "Manual conflict resolution needed",
  ERROR: "Sync failed (retry scheduled)",
  COMPLETE: "Fully synchronized"
}

// Sync progress tracking
SyncProgress = {
  phase: "download" | "upload" | "resolve",
  totalItems: Integer,
  processedItems: Integer,
  bytesTransferred: Integer,
  estimatedTimeRemaining: Duration,
  currentItem: NodeID | RelationshipID
}
```

### 5.6 Bandwidth Optimization

```javascript
OptimizationStrategies = {
  // Priority-based syncing
  priorityQueue: [
    { priority: 1, filter: "user-bookmarks-and-progress" },
    { priority: 2, filter: "currently-viewed-content" },
    { priority: 3, filter: "related-to-viewed-content" },
    { priority: 4, filter: "user-created-content" },
    { priority: 5, filter: "trending-content" },
    { priority: 6, filter: "everything-else" }
  ],
  
  // Compression
  compression: {
    algorithm: "brotli",
    level: 6,
    minSize: 1024  // Only compress if > 1KB
  },
  
  // Batching
  batching: {
    maxBatchSize: 100,
    maxBatchBytes: 1048576,  // 1MB
    maxWaitTime: 5000  // 5 seconds
  },
  
  // Deduplication
  deduplication: {
    enabled: true,
    chunkSize: 4096,
    hashAlgorithm: "xxhash64"
  },
  
  // Prefetching
  prefetching: {
    enabled: true,
    depth: 2,  // Two hops from current node
    predictionModel: "navigation-history"
  }
}
```

### 5.7 Offline Capabilities

**Full Offline Functionality:**

```javascript
OfflineCapabilities = {
  // Reading
  readCachedNodes: true,
  traverseGraph: true,
  searchLocalIndex: true,
  
  // Writing
  createNodes: true,
  updateNodes: true,
  createRelationships: true,
  addBookmarks: true,
  addNotes: true,
  
  // Limitations when offline
  limitations: [
    "Cannot see other users' recent activity",
    "Cannot join live discussions",
    "AI features unavailable",
    "Media streaming limited to cached assets",
    "Search limited to local index"
  ],
  
  // Queue management
  pendingOperations: {
    maxSize: 1000,
    persistence: "indexeddb",
    retryStrategy: "exponential-backoff",
    maxRetries: 10
  }
}
```

---

## 6. Cross-Link Traversal Engine

### 6.1 Traversal Abstraction

```javascript
TraversalEngine = {
  // Core traversal function
  traverse: (startNode: NodeID, options: TraversalOptions) => TraversalResult,
  
  // Streaming traversal for large graphs
  streamTraverse: (startNode: NodeID, options: TraversalOptions) => AsyncIterable<Node>,
  
  // Bidirectional traversal
  traverseBidirectional: (nodeA: NodeID, nodeB: NodeID) => Path[]
}

TraversalOptions = {
  // Direction
  direction: "outgoing" | "incoming" | "both",
  
  // Depth control
  maxDepth: Integer,
  minDepth: Integer,
  
  // Relationship filtering
  relationshipTypes: RelationshipType[],
  excludeRelationshipTypes: RelationshipType[],
  relationshipWeights: Map<RelationshipType, Float>,
  
  // Node filtering
  nodeKinds: NodeKind[],
  excludeNodeKinds: NodeKind[],
  nodePredicate: (node: Node) => Boolean,
  
  // Language preferences
  preferredLanguages: Language[],
  fallbackLanguages: Language[],
  
  // Performance
  limit: Integer,
  timeout: Duration,
  cacheResults: Boolean,
  
  // Scoring
  scoringFunction: ScoringFunction,
  
  // User context
  userId: UserID,
  includePersonalized: Boolean
}
```

### 6.2 Traversal Algorithms

**Depth-First Traversal:**

```javascript
async function* depthFirst(startNode, options) {
  const visited = new Set();
  const stack = [{ nodeId: startNode, depth: 0, path: [startNode] }];
  
  while (stack.length > 0) {
    const { nodeId, depth, path } = stack.pop();
    
    if (visited.has(nodeId)) continue;
    if (depth > options.maxDepth) continue;
    
    visited.add(nodeId);
    const node = await getNode(nodeId);
    
    if (depth >= options.minDepth) {
      if (!options.nodePredicate || options.nodePredicate(node)) {
        yield { node, path, depth };
      }
    }
    
    if (depth < options.maxDepth) {
      const relationships = await getRelationships(nodeId, {
        direction: options.direction,
        types: options.relationshipTypes
      });
      
      for (const rel of relationships) {
        const nextNodeId = rel.source === nodeId ? rel.destination : rel.source;
        if (!visited.has(nextNodeId)) {
          stack.push({
            nodeId: nextNodeId,
            depth: depth + 1,
            path: [...path, nextNodeId]
          });
        }
      }
    }
  }
}
```

**Breadth-First Traversal:**

```javascript
async function* breadthFirst(startNode, options) {
  const visited = new Set([startNode]);
  const queue = [{ nodeId: startNode, depth: 0, path: [startNode] }];
  
  while (queue.length > 0) {
    const { nodeId, depth, path } = queue.shift();
    const node = await getNode(nodeId);
    
    if (depth >= options.minDepth) {
      if (!options.nodePredicate || options.nodePredicate(node)) {
        yield { node, path, depth };
      }
    }
    
    if (depth < options.maxDepth) {
      const relationships = await getRelationships(nodeId, {
        direction: options.direction,
        types: options.relationshipTypes
      });
      
      for (const rel of relationships) {
        const nextNodeId = rel.source === nodeId ? rel.destination : rel.source;
        if (!visited.has(nextNodeId)) {
          visited.add(nextNodeId);
          queue.push({
            nodeId: nextNodeId,
            depth: depth + 1,
            path: [...path, nextNodeId]
          });
        }
      }
    }
  }
}
```

**Weighted Traversal:**

```javascript
async function* weightedTraversal(startNode, options) {
  const visited = new Set();
  const priorityQueue = new PriorityQueue();
  
  priorityQueue.enqueue(startNode, 1.0, [startNode]);
  
  while (!priorityQueue.isEmpty()) {
    const { nodeId, score, path } = priorityQueue.dequeue();
    
    if (visited.has(nodeId)) continue;
    visited.add(nodeId);
    
    const node = await getNode(nodeId);
    
    if (!options.nodePredicate || options.nodePredicate(node)) {
      yield { node, score, path };
    }
    
    const relationships = await getRelationships(nodeId, options);
    
    for (const rel of relationships) {
      const nextNodeId = rel.source === nodeId ? rel.destination : rel.source;
      if (!visited.has(nextNodeId)) {
        const edgeWeight = options.relationshipWeights?.get(rel.type) ?? rel.weight ?? 0.5;
        const newScore = score * edgeWeight;
        
        if (newScore > options.minimumScore ?? 0.1) {
          priorityQueue.enqueue(nextNodeId, newScore, [...path, nextNodeId]);
        }
      }
    }
  }
}
```

### 6.3 Path Finding

**Shortest Path (BFS):**

```javascript
async function findShortestPath(startNode, endNode, options = {}) {
  const visited = new Set([startNode]);
  const queue = [{ nodeId: startNode, path: [startNode] }];
  
  while (queue.length > 0) {
    const { nodeId, path } = queue.shift();
    
    if (nodeId === endNode) {
      return { found: true, path, length: path.length };
    }
    
    const relationships = await getRelationships(nodeId, {
      types: options.relationshipTypes,
      direction: "both"
    });
    
    for (const rel of relationships) {
      const nextNodeId = rel.source === nodeId ? rel.destination : rel.source;
      if (!visited.has(nextNodeId)) {
        visited.add(nextNodeId);
        queue.push({ nodeId: nextNodeId, path: [...path, nextNodeId] });
      }
    }
  }
  
  return { found: false, path: null };
}
```

**All Paths (with cycle detection):**

```javascript
async function findAllPaths(startNode, endNode, options = {}) {
  const paths = [];
  const maxPaths = options.maxPaths ?? 100;
  
  function dfs(currentId, path, visited) {
    if (paths.length >= maxPaths) return;
    
    if (currentId === endNode) {
      paths.push([...path]);
      return;
    }
    
    // Prevent infinite loops
    if (path.length > options.maxLength ?? 20) return;
    
    getRelationshipsSync(currentId, { types: options.relationshipTypes })
      .forEach(rel => {
        const nextId = rel.source === currentId ? rel.destination : rel.source;
        if (!visited.has(nextId)) {
          visited.add(nextId);
          path.push(nextId);
          dfs(nextId, path, visited);
          path.pop();
          visited.delete(nextId);
        }
      });
  }
  
  dfs(startNode, [startNode], new Set([startNode]));
  return paths;
}
```

### 6.4 Semantic Similarity Traversal

```javascript
SemanticTraversal = {
  // Embedding-based similarity
  findBySimilarity: async (nodeId, options) => {
    const sourceNode = await getNode(nodeId);
    const sourceEmbedding = await getEmbedding(sourceNode);
    
    const candidates = await searchIndex.findByVector(sourceEmbedding, {
      limit: options.limit ?? 20,
      filters: options.filters
    });
    
    // Re-rank by relationship proximity
    const ranked = await Promise.all(
      candidates.map(async candidate => {
        const path = await findShortestPath(nodeId, candidate.id, { maxHops: 3 });
        const relationshipScore = path.found ? 1 / path.length : 0;
        const embeddingScore = candidate.similarity;
        
        return {
          node: candidate,
          score: (embeddingScore * 0.7) + (relationshipScore * 0.3)
        };
      })
    );
    
    return ranked.sort((a, b) => b.score - a.score);
  },
  
  // Theme-based clustering
  findThematicCluster: async (nodeId, options) => {
    const node = await getNode(nodeId);
    const themes = extractThemes(node);
    
    const relatedNodes = await Promise.all(
      themes.flatMap(theme => 
        searchIndex.findByTheme(theme, { limit: 10 })
      )
    );
    
    // Deduplicate and rank by theme overlap
    return rankByThemeOverlap(flatten(relatedNodes), themes);
  }
}
```

### 6.5 Context-Aware Traversal

```javascript
ContextAwareTraversal = {
  // User-aware traversal
  personalizeTraversal: (userId, baseTraversal) => {
    return {
      ...baseTraversal,
      nodePredicate: (node) => {
        // Base filtering
        if (!baseTraversal.nodePredicate?.(node)) return false;
        
        // User-specific filtering
        if (node.permissions.read === "private") {
          return node.metadata.createdBy === userId;
        }
        
        if (node.permissions.read === "authenticated") {
          return isAuthenticated(userId);
        }
        
        return true;
      },
      scoringFunction: (node, baseScore) => {
        // Boost based on user interests
        const interestBoost = getUserInterestScore(userId, node) ?? 0;
        // Boost based on reading history
        const historyBoost = getReadingHistoryBoost(userId, node) ?? 0;
        // Boost based on social connections
        const socialBoost = getSocialBoost(userId, node) ?? 0;
        
        return baseScore + interestBoost + historyBoost + socialBoost;
      }
    };
  },
  
  // Language-aware traversal
  localizeTraversal: (preferredLanguages, baseTraversal) => {
    return {
      ...baseTraversal,
      nodePredicate: (node) => {
        if (!baseTraversal.nodePredicate?.(node)) return false;
        
        // Prefer content in preferred languages
        if (preferredLanguages.includes(node.language)) {
          return true;
        }
        
        // Allow fallback if no preferred content available
        if (preferredLanguages.includes(node.metadata.originalLanguage)) {
          return true;
        }
        
        // Last resort: allow any language if marked as universal
        return node.metadata.isUniversal ?? false;
      }
    };
  }
}
```

### 6.6 Traversal Results

```javascript
TraversalResult = {
  nodes: TraversedNode[],
  relationships: TraversedRelationship[],
  statistics: {
    totalNodesVisited: Integer,
    totalRelationshipsFollowed: Integer,
    maxDepthReached: Integer,
    averageScore: Float,
    traversalTime: Duration
  },
  paths: Path[]?,
  clusters: Cluster[]?,
  suggestions: Suggestion[],
  hasMore: Boolean,
  nextCursor: Cursor?
}

TraversedNode = {
  node: Node,
  depth: Integer,
  path: NodeID[],
  score: Float,
  incomingRelationships: RelationshipSummary[],
  outgoingRelationships: RelationshipSummary[]
}

Path = {
  nodes: Node[],
  relationships: Relationship[],
  totalWeight: Float,
  semanticCoherence: Float
}
```

---

## 7. Notion Synchronization Architecture

### 7.1 Architectural Principle

**Notion is NOT the database.**

Notion is one authoring interface among many. The canonical graph exists independently.

```
┌──────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Notion DB  │────▶│  Sync Layer     │────▶│ Canonical Graph │
│              │     │                 │     │                 │
│ • Pages      │     │ • Transform     │     │ • Nodes         │
│ • Databases  │     │ • Validate      │     │ • Relationships │
│ • Properties │     │ • Deduplicate   │     │ • Assets        │
└──────────────┘     └─────────────────┘     └─────────────────┘
                            │
                            ▼
                     ┌─────────────────┐
                     │  Other Sources  │
                     │                 │
                     │ • Manual Entry  │
                     │ • API Imports   │
                     │ • AI Generation │
                     │ • User Content  │
                     └─────────────────┘
```

### 7.2 Mapping Strategy

**Notion → Graph Mapping:**

```javascript
NotionToGraphMapper = {
  // Page mappings
  pageTypes: {
    "Book": {
      sourceType: "notion_page",
      targetType: "Book",
      transform: (page) => ({
        title: page.properties.Name.title[0]?.plain_text,
        slug: generateSlug(page.properties.Name.title[0]?.plain_text),
        content: parseBlocksToContent(page.blocks),
        metadata: {
          canon: page.properties.Canon?.select?.name,
          testament: page.properties.Testament?.select?.name,
          genre: page.properties.Genre?.multi_select?.map(m => m.name),
          author: resolvePerson(page.properties.Author?.relation),
          originalLanguage: page.properties.Language?.select?.name
        }
      })
    },
    
    "Chapter": {
      sourceType: "notion_page",
      targetType: "Chapter",
      transform: (page) => ({
        title: page.properties.Name.title[0]?.plain_text,
        slug: generateSlug(page.properties.Name.title[0]?.plain_text),
        content: parseBlocksToContent(page.blocks),
        metadata: {
          bookRef: resolveNode(page.properties.Book?.relation, "Book"),
          chapterNumber: page.properties.Number?.number,
          verseCount: page.properties["Verse Count"]?.number
        }
      })
    },
    
    "Verse": {
      sourceType: "notion_database_row",
      targetType: "Verse",
      transform: (row) => ({
        title: `Verse ${row.properties.Verse.number}`,
        slug: `${row.parent.book}-${row.parent.chapter}-${row.properties.Verse.number}`,
        content: parseBlocksToContent(row.blocks),
        metadata: {
          bookRef: resolveNode(row.parent.book, "Book"),
          chapterNumber: row.parent.chapter,
          verseNumber: row.properties.Verse.number,
          manuscriptVariants: row.properties.Variants?.rich_text?.[0]?.plain_text
        }
      })
    },
    
    "Person": {
      sourceType: "notion_database_row",
      targetType: "Person",
      transform: (row) => ({
        title: row.properties.Name.title[0]?.plain_text,
        slug: generateSlug(row.properties.Name.title[0]?.plain_text),
        content: parseBlocksToContent(row.blocks),
        metadata: {
          names: extractNames(row.properties),
          lifeDates: parseDateRange(row.properties["Life Dates"]),
          roles: row.properties.Roles?.multi_select?.map(m => m.name),
          biography: extractBiography(row.blocks)
        }
      })
    }
    
    // ... additional mappings for all node types
  },
  
  // Relationship extraction
  extractRelationships: (notionEntity) => {
    const relationships = [];
    
    // Extract relation properties
    for (const [propName, propValue] of Object.entries(notionEntity.properties)) {
      if (propValue.type === "relation") {
        const relationType = inferRelationType(propName);
        for (const relation of propValue.relation) {
          relationships.push({
            type: relationType,
            targetId: resolveNotionIdToNodeId(relation.id),
            context: {
              source: "notion",
              propertyName: propName
            }
          });
        }
      }
    }
    
    // Extract inline references from content
    const inlineRefs = extractInlineReferences(notionEntity.blocks);
    relationships.push(...inlineRefs);
    
    return relationships;
  }
}
```

### 7.3 Block Parsing

```javascript
function parseBlocksToContent(blocks) {
  return blocks.map(block => {
    switch (block.type) {
      case "paragraph":
        return {
          type: "paragraph",
          text: parseRichText(block.paragraph.rich_text),
          style: block.paragraph.color
        };
      
      case "heading_1":
        return {
          type: "callout",
          variant: "heading1",
          title: parseRichText(block.heading_1.rich_text),
          content: []
        };
      
      case "quote":
        return {
          type: "quote",
          text: parseRichText(block.quote.rich_text),
          blockQuote: true
        };
      
      case "bulleted_list_item":
        return {
          type: "paragraph",
          text: parseRichText(block.bulleted_list_item.rich_text),
          style: { listStyle: "bullet" }
        };
      
      case "image":
        return {
          type: "media-ref",
          assetId: createAssetRef(block.image),
          caption: parseRichText(block.image.caption)
        };
      
      case "video":
        return {
          type: "media-ref",
          assetId: createAssetRef(block.video),
          caption: parseRichText(block.video.caption)
        };
      
      case "embed":
        return handleEmbed(block.embed);
      
      case "callout":
        return {
          type: "callout",
          variant: block.callout.icon?.emoji || "info",
          title: parseRichText(block.callout.rich_text).slice(0, 1),
          content: parseBlocksToContent(block.callout.children || [])
        };
      
      default:
        return {
          type: "paragraph",
          text: parseRichText(block[block.type]?.rich_text || []),
          style: { note: `Unknown block type: ${block.type}` }
        };
    }
  });
}
```

### 7.4 Synchronization Process

```javascript
NotionSyncProcess = {
  // One-time full sync
  fullSync: async () => {
    const notionPages = await notionAPI.getAllPages();
    const notionDatabases = await notionAPI.getAllDatabases();
    
    const nodes = [];
    const relationships = [];
    
    // Process pages
    for (const page of notionPages) {
      const mapping = NotionToGraphMapper.pageTypes[page.template];
      if (mapping) {
        const node = mapping.transform(page);
        const rels = NotionToGraphMapper.extractRelationships(page);
        
        nodes.push(node);
        relationships.push(...rels.map(rel => ({
          ...rel,
          source: node.id
        })));
      }
    }
    
    // Process database rows
    for (const db of notionDatabases) {
      const rows = await notionAPI.getDatabaseRows(db.id);
      for (const row of rows) {
        const mapping = NotionToGraphMapper.databaseTypes[db.name];
        if (mapping) {
          const node = mapping.transform(row);
          const rels = NotionToGraphMapper.extractRelationships(row);
          
          nodes.push(node);
          relationships.push(...rels.map(rel => ({
            ...rel,
            source: node.id
          })));
        }
      }
    }
    
    // Validate and deduplicate
    const validatedNodes = validateNodes(nodes);
    const validatedRels = validateRelationships(relationships);
    
    // Import into canonical graph
    await graphStore.import(validatedNodes, validatedRels);
    
    return {
      nodesImported: validatedNodes.length,
      relationshipsImported: validatedRels.length,
      errors: collectErrors()
    };
  },
  
  // Incremental sync (webhook-driven)
  incrementalSync: async (changedEntities) => {
    const updates = [];
    const deletions = [];
    
    for (const entity of changedEntities) {
      if (entity.action === "deleted") {
        deletions.push({
          nodeId: resolveNotionIdToNodeId(entity.id),
          reason: "source_deleted"
        });
      } else {
        const page = await notionAPI.getPage(entity.id);
        const mapping = NotionToGraphMapper.pageTypes[page.template];
        
        if (mapping) {
          const newNode = mapping.transform(page);
          const existingNode = await graphStore.getNode(newNode.id);
          
          if (existingNode) {
            // Create new version
            updates.push({
              nodeId: newNode.id,
              newVersion: newNode,
              previousVersion: existingNode
            });
          } else {
            updates.push({
              nodeId: newNode.id,
              newVersion: newNode,
              previousVersion: null
            });
          }
        }
      }
    }
    
    await graphStore.applyUpdates(updates, deletions);
    
    return {
      updatesApplied: updates.length,
      deletionsApplied: deletions.length
    };
  }
}
```

### 7.5 Decoupling Guarantee

**The application NEVER depends on Notion internals:**

```javascript
DecouplingRules = {
  // No Notion types in core
  coreCodeMustNotImport: [
    "@notionhq/client",
    "notion-types",
    "notion-api-types"
  ],
  
  // Sync layer is isolated
  syncLayerBoundary: {
    input: "NotionAPIResponse",
    output: "CanonicalNode | CanonicalRelationship",
    noLeakage: "Notion types never escape sync layer"
  },
  
  // Alternative sources supported
  alternativeSources: [
    "ManualEntry",
    "CSVImport",
    "APIImport",
    "AIGeneration",
    "UserGenerated",
    "ThirdPartyCMS"
  ],
  
  // Migration path exists
  migrationSupport: {
    exportFromNotion: true,
    importToOtherCMS: true,
    directDatabaseAccess: false  // Always through abstraction
  }
}
```

---

## 8. Asset Reference Architecture

### 8.1 Asset Abstraction

**Assets are nodes, not files:**

```javascript
AssetNode = {
  ...baseNodeStructure,
  kind: "Image" | "Video" | "Audio" | "Document" | "3DModel" | "Font",
  
  metadata: {
    // Source information
    provider: "cloudinary" | "cloudflare-r2" | "youtube" | "local" | "external",
    providerId: String,              // ID in provider system
    originalUrl: String,             // Source URL
    
    // Technical metadata
    mimeType: String,
    byteSize: Integer,
    dimensions: { width: Integer, height: Integer }?,
    duration: Duration?,             // For audio/video
    bitrate: Integer?,
    codec: String?,
    
    // Processing
    variants: AssetVariant[],
    thumbnails: Thumbnail[],
    optimizedFor: ["web" | "mobile" | "print"],
    
    // Rights
    license: License,
    attribution: String,
    restrictions: String[]
  },
  
  // References, not embedded data
  locations: {
    original: AssetLocation,
    variants: Map<VariantName, AssetLocation>,
    thumbnails: Map<Size, AssetLocation>,
    fallback: AssetLocation?
  }
}

AssetLocation = {
  url: String,                       // CDN or direct URL
  provider: String,
  region: String?,
  cacheControl: String,
  expires: Timestamp?,
  integrity: String                  // SRI hash
}
```

### 8.2 Provider Abstraction

```javascript
AssetProvider = {
  // Cloudflare R2
  r2: {
    upload: async (file, options) => {
      const key = generateAssetKey(options);
      await r2Client.put(key, file, {
        customMetadata: options.metadata,
        httpMetadata: {
          contentType: file.type,
          cacheControl: options.cacheControl
        }
      });
      
      return {
        provider: "cloudflare-r2",
        providerId: key,
        url: `https://${options.bucket}.r2.cloudflarestorage.com/${key}`,
        variants: await generateVariants(key, options)
      };
    },
    
    stream: async (assetId, options) => {
      const asset = await getAsset(assetId);
      const url = selectOptimalUrl(asset.locations, options);
      
      return {
        type: "stream",
        url: url,
        headers: {
          "Accept-Ranges": "bytes",
          "Cache-Control": "public, max-age=31536000"
        }
      };
    }
  },
  
  // Cloudinary
  cloudinary: {
    upload: async (file, options) => {
      const result = await cloudinary.uploader.upload(file, {
        folder: options.folder,
        transformation: options.transformations,
        tags: options.tags
      });
      
      return {
        provider: "cloudinary",
        providerId: result.public_id,
        url: result.secure_url,
        variants: result.eager?.map(t => t.secure_url) || [],
        thumbnails: result.thumbnails?.map(t => t.secure_url) || []
      };
    },
    
    transform: async (assetId, transformations) => {
      const asset = await getAsset(assetId);
      const cloudinaryId = asset.providerId;
      
      return cloudinary.url(cloudinaryId, {
        transformation: transformations,
        secure: true
      });
    }
  },
  
  // YouTube
  youtube: {
    reference: async (videoId) => {
      const info = await youtubeAPI.getVideo(videoId);
      
      return {
        provider: "youtube",
        providerId: videoId,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        metadata: {
          title: info.snippet.title,
          duration: parseDuration(info.contentDetails.duration),
          thumbnail: info.snippet.thumbnails.maxres?.url
        }
      };
    }
  },
  
  // Local (offline)
  local: {
    store: async (file, options) => {
      const assetDir = await getAssetDirectory();
      const fileName = generateAssetFileName(options);
      const path = `${assetDir}/${fileName}`;
      
      await writeFile(path, file);
      
      return {
        provider: "local",
        providerId: fileName,
        url: `file://${path}`,
        offline: true
      };
    }
  }
}
```

### 8.3 Variant Generation

```javascript
VariantStrategy = {
  // Image variants
  imageVariants: (original) => [
    { name: "thumbnail", width: 150, height: 150, quality: 80, crop: "center" },
    { name: "small", width: 400, quality: 85 },
    { name: "medium", width: 800, quality: 90 },
    { name: "large", width: 1600, quality: 92 },
    { name: "original", preserve: true },
    { name: "webp", format: "webp", quality: 85 },
    { name: "avif", format: "avif", quality: 80 }
  ],
  
  // Video variants
  videoVariants: (original) => [
    { name: "preview", duration: 30, quality: "low" },
    { name: "mobile", resolution: "720p", codec: "h264", bitrate: "2M" },
    { name: "tablet", resolution: "1080p", codec: "h264", bitrate: "4M" },
    { name: "desktop", resolution: "1080p", codec: "h265", bitrate: "6M" },
    { name: "original", preserve: true }
  ],
  
  // Audio variants
  audioVariants: (original) => [
    { name: "preview", duration: 30, bitrate: "64k" },
    { name: "mobile", bitrate: "128k", codec: "aac" },
    { name: "standard", bitrate: "192k", codec: "aac" },
    { name: "high", bitrate: "320k", codec: "aac" },
    { name: "lossless", preserve: true }
  ],
  
  // Lazy generation
  generateOnDemand: true,
  cacheVariants: true,
  cleanupUnused: true
}
```

### 8.4 Asset Loading Strategy

```javascript
AssetLoader = {
  // Progressive loading
  loadProgressive: async (assetRef, options) => {
    const asset = await getAsset(assetRef);
    
    // Start with lowest quality
    const thumbnail = asset.locations.thumbnails?.get("small");
    if (thumbnail) {
      options.onProgress?.({ stage: "thumbnail", url: thumbnail.url });
    }
    
    // Then medium quality
    const medium = asset.locations.variants?.get("medium");
    if (medium) {
      options.onProgress?.({ stage: "medium", url: medium.url });
    }
    
    // Finally original/high quality
    const original = asset.locations.original;
    if (original) {
      options.onProgress?.({ stage: "original", url: original.url });
    }
    
    return asset;
  },
  
  // Adaptive loading based on network
  loadAdaptive: async (assetRef, options) => {
    const connection = await getNetworkInfo();
    const asset = await getAsset(assetRef);
    
    let variant;
    if (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g") {
      variant = "small";
    } else if (connection.effectiveType === "3g") {
      variant = "medium";
    } else {
      variant = "large";
    }
    
    const location = asset.locations.variants?.get(variant) 
      ?? asset.locations.original;
    
    return loadAsset(location, options);
  },
  
  // Offline-first loading
  loadOfflineFirst: async (assetRef, options) => {
    const cached = await cache.get(assetRef);
    if (cached) {
      return cached;
    }
    
    // Try to load from network
    try {
      const asset = await loadFromNetwork(assetRef, options);
      await cache.set(assetRef, asset);
      return asset;
    } catch (error) {
      if (options.requireOffline) {
        throw new OfflineError("Asset not available offline");
      }
      
      // Return placeholder
      return getPlaceholder(assetRef);
    }
  }
}
```

### 8.5 Asset Caching

```javascript
AssetCache = {
  // Multi-tier caching
  tiers: {
    memory: {
      maxSize: "100MB",
      evictionPolicy: "LRU",
      ttl: "5 minutes"
    },
    disk: {
      maxSize: "2GB",
      evictionPolicy: "LFU",
      ttl: "30 days"
    },
    indexeddb: {
      maxSize: "quota-available",
      evictionPolicy: "manual",
      ttl: "indefinite"
    }
  },
  
  // Cache strategies by asset type
  strategies: {
    images: "aggressive",      // Cache heavily
    videos: "selective",       // Cache based on viewing
    audio: "moderate",         // Cache played content
    documents: "on-demand"     // Cache when opened
  },
  
  // Background prefetching
  prefetch: async (predictedAssets) => {
    for (const asset of predictedAssets) {
      if (!await cache.has(asset)) {
        await cache.prefetch(asset, { priority: "low" });
      }
    }
  },
  
  // Cache invalidation
  invalidate: async (pattern) => {
    const keys = await cache.keys(pattern);
    for (const key of keys) {
      await cache.delete(key);
    }
  }
}
```

---

## 9. Immutable Event Model

### 9.1 Event Taxonomy

**All events are immutable, append-only records:**

```javascript
BaseEvent = {
  id: UUID,
  type: EventType,
  timestamp: Timestamp,
  deviceId: DeviceID,
  userId: UserID?,
  vectorClock: VectorClock,
  correlationId: UUID?,        // Links related events
  causationId: UUID?,          // Event that caused this one
  version: SemVer,
  checksum: String
}
```

### 9.2 Domain Events

**Content Events:**

```javascript
ContentEvents = {
  NodeCreated: {
    ...BaseEvent,
    type: "NodeCreated",
    payload: {
      node: Node,
      source: "manual" | "import" | "ai" | "sync"
    }
  },
  
  NodeUpdated: {
    ...BaseEvent,
    type: "NodeUpdated",
    payload: {
      nodeId: NodeID,
      oldVersion: SemVer,
      newVersion: SemVer,
      changes: ChangeSet,
      reason: "edit" | "correction" | "expansion" | "migration"
    }
  },
  
  NodeDeprecated: {
    ...BaseEvent,
    type: "NodeDeprecated",
    payload: {
      nodeId: NodeID,
      replacementId: NodeID?,
      reason: String
    }
  },
  
  RelationshipCreated: {
    ...BaseEvent,
    type: "RelationshipCreated",
    payload: {
      relationship: Relationship,
      source: "manual" | "extracted" | "ai" | "inferred"
    }
  },
  
  RelationshipRemoved: {
    ...BaseEvent,
    type: "RelationshipRemoved",
    payload: {
      relationshipId: RelationshipID,
      reason: "error" | "deprecated" | "disputed"
    }
  }
}
```

**Navigation Events:**

```javascript
NavigationEvents = {
  BookOpened: {
    ...BaseEvent,
    type: "BookOpened",
    payload: {
      bookId: NodeID,
      entryPoint: "search" | "link" | "bookmark" | "recommendation",
      referrerNodeId: NodeID?
    }
  },
  
  SceneViewed: {
    ...BaseEvent,
    type: "SceneViewed",
    payload: {
      sceneId: NodeID,
      viewDuration: Duration,
      interactions: Interaction[]
    }
  },
  
  NodeTraversed: {
    ...BaseEvent,
    type: "NodeTraversed",
    payload: {
      fromNodeId: NodeID,
      toNodeId: NodeID,
      relationshipType: RelationshipType,
      traversalTime: Duration
    }
  },
  
  SearchPerformed: {
    ...BaseEvent,
    type: "SearchPerformed",
    payload: {
      query: String,
      filters: SearchFilters,
      resultCount: Integer,
      selectedResult: NodeID?
    }
  }
}
```

**User Action Events:**

```javascript
UserActionEvents = {
  BookmarkAdded: {
    ...BaseEvent,
    type: "BookmarkAdded",
    payload: {
      nodeId: NodeID,
      position: Position?,
      note: String?
    }
  },
  
  NoteCreated: {
    ...BaseEvent,
    type: "NoteCreated",
    payload: {
      noteId: NodeID,
      targetNodeId: NodeID,
      content: ContentBlock[],
      visibility: "private" | "shared" | "public"
    }
  },
  
  PrayerStarted: {
    ...BaseEvent,
    type: "PrayerStarted",
    payload: {
      prayerId: NodeID,
      context: PrayerContext,
      roomId: RoomID?
    }
  },
  
  DiscussionJoined: {
    ...BaseEvent,
    type: "DiscussionJoined",
    payload: {
      discussionId: NodeID,
      role: "participant" | "observer" | "moderator"
    }
  }
}
```

**Social Events:**

```javascript
SocialEvents = {
  FriendJoinedDiscussion: {
    ...BaseEvent,
    type: "FriendJoinedDiscussion",
    payload: {
      discussionId: NodeID,
      friendId: UserID,
      mutualFriends: UserID[]
    }
  },
  
  VoiceRoomEntered: {
    ...BaseEvent,
    type: "VoiceRoomEntered",
    payload: {
      roomId: NodeID,
      participants: UserID[],
      role: "speaker" | "listener"
    }
  },
  
  FriendshipEstablished: {
    ...BaseEvent,
    type: "FriendshipEstablished",
    payload: {
      userA: UserID,
      userB: UserID,
      introducedBy: UserID?
    }
  }
}
```

**Sync Events:**

```javascript
SyncEvents = {
  SyncStarted: {
    ...BaseEvent,
    type: "SyncStarted",
    payload: {
      direction: "upload" | "download" | "bidirectional",
      estimatedItemCount: Integer
    }
  },
  
  SyncCompleted: {
    ...BaseEvent,
    type: "SyncCompleted",
    payload: {
      nodesUploaded: Integer,
      nodesDownloaded: Integer,
      conflictsResolved: Integer,
      duration: Duration
    }
  },
  
  ConflictDetected: {
    ...BaseEvent,
    type: "ConflictDetected",
    payload: {
      nodeId: NodeID,
      localVersion: SemVer,
      remoteVersion: SemVer,
      conflictType: "content" | "relationship" | "metadata",
      resolutionRequired: Boolean
    }
  },
  
  AssetDownloaded: {
    ...BaseEvent,
    type: "AssetDownloaded",
    payload: {
      assetId: AssetID,
      size: Integer,
      source: "network" | "peer" | "cache"
    }
  }
}
```

**AI Events:**

```javascript
AIEvents = {
  AIInsightGenerated: {
    ...BaseEvent,
    type: "AIInsightGenerated",
    payload: {
      insightId: NodeID,
      sourceNodeIds: NodeID[],
      prompt: String,
      modelVersion: String,
      confidence: Float
    }
  },
  
  AIConversationStarted: {
    ...BaseEvent,
    type: "AIConversationStarted",
    payload: {
      conversationId: NodeID,
      context: NodeID[],
      initialPrompt: String
    }
  }
}
```

### 9.3 Event Store

```javascript
EventStore = {
  // Append-only log
  append: async (event) => {
    // Validate event
    validateEvent(event);
    
    // Add vector clock
    event.vectorClock = incrementVectorClock(event.deviceId);
    
    // Calculate checksum
    event.checksum = sha256(JSON.stringify(event));
    
    // Write to append-only log
    await eventLog.write(event);
    
    // Update projections
    await updateProjections(event);
    
    // Notify subscribers
    await notifySubscribers(event);
    
    return event;
  },
  
  // Query events
  query: async (criteria) => {
    const events = [];
    
    for await (const event of eventLog.read(criteria)) {
      if (matchesCriteria(event, criteria)) {
        events.push(event);
      }
    }
    
    return events;
  },
  
  // Replay events (for rebuilding state)
  replay: async (fromCheckpoint, processor) => {
    const checkpoint = await loadCheckpoint(fromCheckpoint);
    
    for await (const event of eventLog.read({ after: checkpoint.timestamp })) {
      await processor(event);
      
      // Periodic checkpointing
      if (shouldCheckpoint()) {
        await createCheckpoint(event);
      }
    }
  },
  
  // Event sourcing projections
  projections: {
    currentNodeState: buildCurrentStateProjection,
    relationshipGraph: buildRelationshipProjection,
    userActivity: buildUserActivityProjection,
    syncState: buildSyncStateProjection
  }
}
```

### 9.4 Event Processing Pipeline

```javascript
EventPipeline = {
  stages: [
    {
      name: "validation",
      process: (event) => {
        validateSchema(event);
        validatePermissions(event);
        validateCausality(event);
        return event;
      }
    },
    {
      name: "enrichment",
      process: (event) => {
        event.enrichments = {
          geoLocation: getGeoLocation(),
          deviceInfo: getDeviceInfo(),
          networkState: getNetworkState()
        };
        return event;
      }
    },
    {
      name: "projection",
      process: async (event) => {
        await updateReadModels(event);
        await updateIndexes(event);
        await updateCache(event);
        return event;
      }
    },
    {
      name: "notification",
      process: async (event) => {
        const notifications = generateNotifications(event);
        for (const notification of notifications) {
          await sendNotification(notification);
        }
        return event;
      }
    },
    {
      name: "analytics",
      process: async (event) => {
        if (shouldTrack(event)) {
          await recordAnalytics(event);
        }
        return event;
      }
    }
  ]
}
```

### 9.5 Event Subscription

```javascript
EventSubscription = {
  // Subscribe to events
  subscribe: (criteria, handler) => {
    const subscription = {
      id: UUID,
      criteria: normalizeCriteria(criteria),
      handler: handler,
      createdAt: Timestamp
    };
    
    subscribers.add(subscription);
    
    return {
      unsubscribe: () => {
        subscribers.delete(subscription);
      }
    };
  },
  
  // Subscribe with backpressure handling
  subscribeWithBackpressure: (criteria, handler, options) => {
    const queue = new BoundedQueue(options.maxQueueSize ?? 1000);
    
    const subscription = subscribe(criteria, async (event) => {
      if (queue.isFull()) {
        if (options.onOverflow === "drop") {
          return;  // Drop event
        } else if (options.onOverflow === "block") {
          await queue.waitUntilSpaceAvailable();
        }
      }
      
      await queue.enqueue(event);
      
      // Process queue asynchronously
      processQueue(queue, handler);
    });
    
    return subscription;
  },
  
  // Replay subscription (for catching up)
  subscribeFromCheckpoint: (checkpointId, criteria, handler) => {
    const checkpoint = loadCheckpoint(checkpointId);
    
    // First, replay historical events
    replay(checkpointId, async (event) => {
      if (matchesCriteria(event, criteria)) {
        await handler(event, { replayed: true });
      }
    });
    
    // Then subscribe to new events
    return subscribe(criteria, handler);
  }
}
```

---

## 10. Future Extensibility Analysis

### 10.1 Design Principles for Longevity

**Twenty-Year Architecture Goals:**

1. **Schema Evolution Without Breaking Changes**
   - All structures support optional fields
   - Unknown fields preserved during serialization
   - Version negotiation built into protocol

2. **Type System Extensibility**
   - Node types defined in registry, not hardcoded
   - New types can be registered at runtime
   - Backward compatibility guaranteed

3. **Relationship Flexibility**
   - Relationship types are data, not schema
   - Custom relationships supported
   - Relationship metadata extensible

4. **Storage Agnosticism**
   - Graph logic independent of storage backend
   - Multiple storage engines supported
   - Migration paths between engines

### 10.2 Extensibility Mechanisms

**Plugin Architecture:**

```javascript
PluginSystem = {
  // Node type plugins
  registerNodeType: (typeDef) => {
    validateNodeType(typeDef);
    nodeTypeRegistry.register(typeDef.name, typeDef);
    
    // Auto-generate UI components
    generateDefaultComponents(typeDef);
    
    // Update indexes
    rebuildIndexes();
  },
  
  // Relationship type plugins
  registerRelationshipType: (typeDef) => {
    validateRelationshipType(typeDef);
    relationshipTypeRegistry.register(typeDef.name, typeDef);
  },
  
  // Content transformer plugins
  registerTransformer: (sourceType, targetType, transformer) => {
    transformerRegistry.register(sourceType, targetType, transformer);
  },
  
  // Search analyzer plugins
  registerAnalyzer: (nodeType, analyzer) => {
    searchAnalyzers.register(nodeType, analyzer);
  }
}
```

**Content Transformation Pipeline:**

```javascript
TransformationPipeline = {
  // Register transformers
  transformers: [
    {
      name: "MarkdownToContentBlocks",
      input: "text/markdown",
      output: "ContentBlock[]",
      transform: markdownParser
    },
    {
      name: "HTMLToContentBlocks", 
      input: "text/html",
      output: "ContentBlock[]",
      transform: htmlParser
    },
    {
      name: "DocxToContentBlocks",
      input: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      output: "ContentBlock[]",
      transform: docxParser
    },
    {
      name: "NotionToContentBlocks",
      input: "notion/blocks",
      output: "ContentBlock[]",
      transform: notionParser
    }
  ],
  
  // Chain transformers
  compose: (transformers) => {
    return (input) => {
      let result = input;
      for (const transformer of transformers) {
        result = transformer.transform(result);
      }
      return result;
    };
  }
}
```

### 10.3 Future Content Types (Anticipated)

```javascript
FutureContentTypes = {
  // Immersive content
  "VRScene": {
    description: "Virtual reality environment",
    anticipated: "2026-2028",
    requirements: ["3D models", "spatial audio", "interaction scripts"]
  },
  
  "AROverlay": {
    description: "Augmented reality biblical overlays",
    anticipated: "2027-2029",
    requirements: ["geolocation", "camera integration", "3D rendering"]
  },
  
  // Interactive content
  "ChooseYourOwnAdventure": {
    description: "Interactive narrative paths",
    anticipated: "2025-2026",
    requirements: ["branching logic", "state tracking", "multiple endings"]
  },
  
  "Simulation": {
    description: "Historical/cultural simulations",
    anticipated: "2026-2028",
    requirements: ["physics engine", "agent modeling", "scenario scripting"]
  },
  
  // AI-native content
  "DynamicCommentary": {
    description: "AI-generated contextual commentary",
    anticipated: "2025-2026",
    requirements: ["real-time generation", "context awareness", "citation tracking"]
  },
  
  "ConversationalStudy": {
    description: "AI-guided study conversations",
    anticipated: "2025-2026",
    requirements: ["dialogue management", "knowledge retrieval", "personalization"]
  },
  
  // Collaborative content
  "CollaborativeAnnotation": {
    description: "Real-time collaborative markup",
    anticipated: "2025-2026",
    requirements: ["CRDT implementation", "presence tracking", "conflict resolution"]
  },
  
  "CrowdsourcedTranslation": {
    description: "Community translation projects",
    anticipated: "2026-2027",
    requirements: ["workflow management", "quality voting", "version comparison"]
  }
}
```

### 10.4 Scalability Projections

**Node Count Projections:**

```
Year 1:   10,000 nodes     (Hebrews + supporting content)
Year 2:   100,000 nodes    (Full NT + expanded media)
Year 3:   1,000,000 nodes  (Complete Bible + extensive commentary)
Year 5:   10,000,000 nodes (Full library + user content)
Year 10:  100,000,000 nodes (Comprehensive Christian knowledge graph)
Year 20:  1,000,000,000 nodes (Global Christian knowledge base)
```

**Performance Requirements:**

```javascript
PerformanceBudgets = {
  // Query performance
  nodeLookup: "< 10ms",
  relationshipTraversal: "< 50ms per hop",
  searchQuery: "< 200ms",
  graphTraversal: "< 1s for depth-5 traversal",
  
  // Storage efficiency
  nodeOverhead: "< 20% metadata",
  indexSize: "< 30% of data size",
  compressionRatio: "> 3:1 for text content",
  
  // Sync performance
  syncThroughput: "> 100 nodes/second",
  conflictResolution: "< 5s per conflict",
  offlineQueueSize: "unlimited (bounded by storage)",
  
  // Client performance
  coldStart: "< 2s to interactive",
  warmStart: "< 500ms to interactive",
  navigationTransition: "< 300ms",
  memoryUsage: "< 500MB for typical session"
}
```

### 10.5 Technology Evolution Strategy

**Abstraction Layers for Future-Proofing:**

```javascript
AbstractionLayers = {
  // Storage abstraction
  storageInterface: {
    methods: ["get", "set", "delete", "query", "transaction"],
    implementations: ["IndexedDB", "SQLite", "LevelDB", "custom"],
    migrationPath: "automatic schema migration"
  },
  
  // Network abstraction
  networkInterface: {
    methods: ["fetch", "subscribe", "publish", "sync"],
    protocols: ["HTTP/3", "WebSocket", "WebRTC", "future protocols"],
    fallbackStrategy: "graceful degradation"
  },
  
  // Rendering abstraction
  renderingInterface: {
    methods: ["render", "update", "animate"],
    targets: ["DOM", "Canvas", "WebGL", "native", "future targets"],
    adaptationStrategy: "capability detection"
  },
  
  // AI abstraction
  aiInterface: {
    methods: ["generate", "analyze", "summarize", "translate"],
    providers: ["local model", "cloud API", "hybrid", "future providers"],
    fallbackStrategy: "queue for later processing"
  }
}
```

### 10.6 Migration Strategies

**Zero-Downtime Migration:**

```javascript
MigrationStrategy = {
  // Dual-write during migration
  dualWrite: async (oldSchema, newSchema, data) => {
    // Write to both schemas
    await writeOldSchema(data);
    await writeNewSchema(transformToNew(data));
    
    // Verify consistency
    const oldData = await readOldSchema(data.id);
    const newData = await readNewSchema(data.id);
    
    if (!areEquivalent(oldData, transformToNew(oldData), newData)) {
      reportInconsistency(data.id);
    }
  },
  
  // Gradual rollout
  gradualRollout: {
    phases: [
      { percentage: 1, description: "Internal testing" },
      { percentage: 5, description: "Beta users" },
      { percentage: 25, description: "Early adopters" },
      { percentage: 50, description: "Half of users" },
      { percentage: 100, description: "Full rollout" }
    ],
    rollbackTrigger: "errorRate > 1%",
    monitoringMetrics: ["errorRate", "latency", "userReports"]
  },
  
  // Data backfill
  backfill: async (transformer, options) => {
    const batchSize = options.batchSize ?? 1000;
    let cursor = options.startCursor ?? null;
    
    while (true) {
      const batch = await fetchBatch(cursor, batchSize);
      if (batch.length === 0) break;
      
      const transformed = batch.map(transformer);
      await bulkWrite(transformed);
      
      cursor = batch[batch.length - 1].cursor;
      
      // Progress reporting
      reportProgress({ processed: totalProcessed, total: estimatedTotal });
    }
  }
}
```

### 10.7 Deprecation Strategy

```javascript
DeprecationPolicy = {
  // Deprecation timeline
  timeline: {
    announcement: "6 months before removal",
    warningPhase: "3 months of warnings",
    sunsetPhase: "1 month of reduced functionality",
    removal: "Complete removal"
  },
  
  // Communication strategy
  communication: [
    "In-app notifications",
    "Email to affected users",
    "Documentation updates",
    "Migration guides",
    "Automated migration tools"
  ],
  
  // Compatibility guarantees
  guarantees: [
    "Read access to deprecated content maintained indefinitely",
    "Export tools provided for all deprecated formats",
    "Migration paths documented and automated where possible",
    "No data loss during deprecation"
  ]
}
```

---

## Conclusion: The Living Vine

The Canonical Content Graph architecture presented here achieves the mission of representing all content types—past, present, and future—without requiring architectural redesign.

**Key Achievements:**

1. **Universal Node Model**: Single structure handles books, verses, scenes, people, places, media, prayers, discussions, AI insights, and future unknown types.

2. **First-Class Relationships**: Relationships are rich, queryable entities with their own metadata, not mere foreign keys.

3. **True Graph Semantics**: Content forms a living vine where anything can connect to anything, traversable in any direction.

4. **Immutability**: Complete version history, append-only events, and content-addressable storage ensure data integrity.

5. **Offline-First**: Full functionality without network, with intelligent synchronization when connected.

6. **Provider Agnostic**: Notion is one authoring tool among many; the graph stands independent.

7. **Asset Abstraction**: Media referenced, not embedded; multiple providers supported; progressive loading optimized.

8. **Event Sourcing**: Complete audit trail, replayable history, and real-time reactivity.

9. **Future-Proof**: Plugin architecture, extensible types, and abstraction layers accommodate 20+ years of evolution.

10. **Elegant Simplicity**: Despite handling immense complexity, the core model remains simple: Nodes, Relationships, Events.

This architecture will support:
- An interactive Bible ✓
- An interactive museum ✓
- A theological encyclopedia ✓
- A Christian social network ✓
- A multimedia graphic novel ✓
- A prayer community ✓
- Future forms we cannot yet imagine ✓

**The graph is the platform.** Everything else is interpretation.

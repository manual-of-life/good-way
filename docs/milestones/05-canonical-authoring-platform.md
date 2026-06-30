# MILESTONE 05

## Canonical Authoring Platform (CAP)

### Table of Contents

1. [Mission](#mission)
2. [Core Principles](#core-principles)
3. [Authoring Philosophy](#authoring-philosophy)
4. [Publishing Pipeline Architecture](#publishing-pipeline-architecture)
5. [Notion Integration Architecture](#notion-integration-architecture)
6. [Canonical Transformation Pipeline](#canonical-transformation-pipeline)
7. [Validation Pipeline](#validation-pipeline)
8. [Versioning Strategy](#versioning-strategy)
9. [Crosslink Authoring Model](#crosslink-authoring-model)
10. [Media Pipeline](#media-pipeline)
11. [Accessibility Pipeline](#accessibility-pipeline)
12. [Localization Strategy](#localization-strategy)
13. [Incremental Synchronization Strategy](#incremental-synchronization-strategy)
14. [Future Importer Architecture](#future-importer-architecture)
15. [Quality Gate Specification](#quality-gate-specification)
16. [Publishing Workflow](#publishing-workflow)
17. [Testing Strategy](#testing-strategy)
18. [Appendix: Data Models](#appendix-data-models)

---

## Mission

Design a complete authoring ecosystem where:

- The application shall **NEVER** edit content directly
- Content is immutable, versioned, validated, and canonical
- Notion is only ONE authoring environment among many
- The platform never depends on Notion internals

### Core Capabilities

The Canonical Authoring Platform enables:

1. **Author Once, Publish Everywhere**
   - Desktop applications
   - Web browsers
   - Mobile devices (iOS/Android)
   - Tablets
   - Offline readers
   - Future platforms (VR/AR, smart displays)

2. **Multi-Source Authoring**
   - Notion (primary initial interface)
   - Markdown files
   - USFM (Bible formatting)
   - OSIS (XML Bible standard)
   - Obsidian vaults
   - Git repositories
   - Direct JSON/YAML
   - Future formats

3. **Content Types Supported**
   - Books, chapters, sections
   - Scenes and panels
   - Verses and paragraphs
   - Images, audio, narration, music
   - Videos (YouTube references)
   - Maps and timelines
   - Commentary and study notes
   - Prayers and discussion prompts
   - Crosslinks and relationships
   - AI prompts and metadata

---

## Core Principles

### Principle 1: Immutability

Once published, content never changes. Updates create new versions.

```
Draft → Review → Approved → Published → Archived
```

Readers consume only published, immutable snapshots.

### Principle 2: Decoupling

Notion is an editing surface, not the database.

**Never expose in Flutter:**
- Notion concepts
- Notion IDs
- Notion URLs
- Notion-specific fields

### Principle 3: Canonical Form

All content transforms into the Canonical Content Graph (CCG).

Regardless of source format, the output is identical.

### Principle 4: Validation First

Publishing fails if validation fails.

No broken content reaches readers.

### Principle 5: Accessibility Mandatory

Accessibility metadata is required, not optional.

Publishing fails without:
- Alt text for images
- Transcripts for audio
- Captions for video
- Text descriptions for maps

### Principle 6: Incremental Sync

Readers download only changes.

Unchanged nodes are never re-downloaded.

### Principle 7: Human Oversight

AI may suggest, but humans approve.

No AI publishes directly.

---

## Authoring Philosophy

Content creators should think about:

- Knowledge
- Stories
- Relationships
- Scripture
- Theology
- Beauty

**Not about:**
- Software
- Database schemas
- File formats
- Technical implementation

The tooling should disappear.

### The Author's Mental Model

Authors work with familiar concepts:

| Author Concept | Canonical Equivalent |
|----------------|---------------------|
| Book | Collection of Chapters |
| Chapter | Collection of Scenes |
| Scene | Meaningful experience unit |
| Panel | Semantic moment |
| Crosslink | Relationship between nodes |
| Media | Referenced asset |
| Tag | Classification metadata |

### Author Capabilities

An author should be able to:

1. **Create** new content
2. **Duplicate** existing content
3. **Move** content within hierarchy
4. **Merge** related content
5. **Split** content into smaller units
6. **Archive** outdated content
7. **Restore** archived content
8. **Preview** across platforms
9. **Publish** validated content
10. **View** publishing history

All without technical knowledge.

---

## Publishing Pipeline Architecture

### Overview

The publishing pipeline transforms authored content into the Canonical Content Graph.

```
┌─────────────┐
│   Author    │
│  (Notion/   │
│   Other)    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Extract   │
│   Stage     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Validate  │
│   Stage     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Transform  │
│   Stage     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Version   │
│   Stage     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Package   │
│   Stage     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Sign     │
│   Stage     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Distribute │
│   Stage     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Reader    │
│   Engine    │
└─────────────┘
```

### Stage 1: Extract

**Purpose:** Retrieve content from authoring sources.

**Inputs:**
- Notion API responses
- Markdown files
- USFM files
- OSIS XML
- JSON/YAML files
- Git repository commits

**Outputs:**
- Normalized intermediate representation
- Source metadata
- Extraction timestamp
- Source identifiers (internal use only)

**Functions:**

```javascript
// Pseudocode
extractFromNotion(databaseId, apiKey) → IntermediateRepresentation
extractFromMarkdown(filePath) → IntermediateRepresentation
extractFromUSFM(fileContent) → IntermediateRepresentation
extractFromOSIS(xmlContent) → IntermediateRepresentation
extractFromJSON(jsonContent) → IntermediateRepresentation
```

**Guarantees:**
- Idempotent extraction
- No side effects
- Complete error reporting
- Partial extraction support

### Stage 2: Validate

**Purpose:** Ensure content integrity before transformation.

**Validation Categories:**

1. **Structural Validation**
   - Required fields present
   - Field types correct
   - Hierarchy valid
   - No circular references in hierarchy

2. **Reference Validation**
   - All crosslinks reference existing nodes
   - All media references resolve
   - All relationship targets exist
   - No orphaned nodes

3. **Semantic Validation**
   - Node types match content
   - Relationship types appropriate
   - Metadata completeness
   - Language codes valid

4. **Accessibility Validation**
   - Images have alt text
   - Audio has transcripts
   - Video has captions
   - Maps have descriptions

5. **Quality Validation**
   - No duplicate IDs
   - No broken formatting
   - Consistent naming
   - Appropriate content length

**Outputs:**
- Validation report
- List of errors (blocking)
- List of warnings (non-blocking)
- Validation pass/fail status

**Behavior:**
- Publishing halts on any error
- Warnings logged but do not block
- Detailed error messages for authors

### Stage 3: Transform

**Purpose:** Convert intermediate representation to Canonical Content Graph.

**Transformations:**

1. **Node Transformation**
   ```
   Intermediate Node → CCG Node
   - Assign UUID
   - Normalize metadata
   - Compute slug
   - Set timestamps
   ```

2. **Relationship Transformation**
   ```
   Intermediate Link → CCG Relationship
   - Resolve source/destination
   - Assign relationship type
   - Compute weight/priority
   - Set directionality
   ```

3. **Asset Transformation**
   ```
   Intermediate Asset → CCG Asset Reference
   - Upload to CDN (if needed)
   - Generate variants
   - Extract metadata
   - Create thumbnails/previews
   ```

4. **Crosslink Resolution**
   ```
   Author Link → CCG Relationship
   - Resolve symbolic references
   - Infer relationship types
   - Validate targets
   - Compute transitive links
   ```

**Outputs:**
- Complete CCG fragment
- Transformation log
- Asset manifest

### Stage 4: Version

**Purpose:** Create immutable version snapshot.

**Versioning Model:**

```
Version {
  id: UUID
  publicationId: UUID
  versionNumber: Integer
  parentVersionId: UUID?
  contentHash: SHA256
  manifest: Manifest
  publishedAt: Timestamp
  publishedBy: AuthorID
  changelog: String
  status: Draft | Review | Approved | Published | Archived
}
```

**Version Operations:**

1. **Create Version**
   - Generate new version number
   - Compute content hash
   - Record parent version
   - Set initial status

2. **Promote Version**
   - Draft → Review
   - Review → Approved
   - Approved → Published
   - Published → Archived

3. **Compare Versions**
   - Compute diff
   - Identify added nodes
   - Identify removed nodes
   - Identify modified nodes
   - Generate changelog

**Outputs:**
- Version record
- Content manifest
- Changelog
- Diff report

### Stage 5: Package

**Purpose:** Bundle content for distribution.

**Package Contents:**

```
Package {
  manifest.json
  nodes/
    *.json
  relationships/
    *.json
  assets/
    references.json
  metadata/
    version.json
    changelog.md
    accessibility-report.json
  signatures/
    package.sig
}
```

**Packaging Steps:**

1. Collect all nodes for version
2. Collect all relationships
3. Generate asset reference manifest
4. Include metadata and reports
5. Compute package hash
6. Sign package

**Optimization:**
- Compress JSON
- Deduplicate assets
- Index for fast lookup
- Generate delta packages

**Outputs:**
- Distribution package
- Delta packages (if applicable)
- Package manifest

### Stage 6: Sign

**Purpose:** Ensure content authenticity and integrity.

**Signing Process:**

1. Compute SHA256 of package manifest
2. Sign hash with publisher private key
3. Attach signature to package
4. Include public key fingerprint

**Verification:**
- Readers verify signature before consuming
- Reject unsigned or tampered packages
- Log verification failures

**Key Management:**
- Private keys secured offline
- Public keys distributed with app
- Key rotation supported

**Outputs:**
- Signed package
- Signature metadata
- Verification instructions

### Stage 7: Distribute

**Purpose:** Deliver packages to readers.

**Distribution Channels:**

1. **Cloudflare R2**
   - Primary storage
   - Global CDN
   - Versioned buckets
   - Access control

2. **Incremental Updates**
   - Delta packages
   - Node-level patches
   - Asset deduplication

3. **Offline Bundles**
   - Complete book downloads
   - Series collections
   - Thematic packages

**Distribution Strategy:**

```
Reader Request
    ↓
Check Local Cache
    ↓
If Missing/Outdated
    ↓
Request Delta from CDN
    ↓
Apply Delta
    ↓
Verify Integrity
    ↓
Update Local Graph
```

**Outputs:**
- Distributed packages
- Update notifications
- Download statistics

---

## Notion Integration Architecture

### Philosophy

Notion is treated as **one editing surface** among many.

The platform must function identically regardless of authoring tool.

### Notion Database Design

Design separate logical databases in Notion:

#### 1. Books Database

| Property | Type | Purpose |
|----------|------|---------|
| Title | Text | Book name |
| Slug | Text | URL-friendly identifier |
| Description | Text | Book summary |
| Language | Select | Primary language |
| Status | Select | Draft/Review/Published |
| Chapters | Relation | Linked chapters |
| Cover Image | Files | Book cover |
| Metadata | Rich Text | JSON metadata |
| Authors | Relation | Linked authors |
| Published Version | Number | Current version |

#### 2. Chapters Database

| Property | Type | Purpose |
|----------|------|---------|
| Title | Text | Chapter name |
| Slug | Text | URL-friendly identifier |
| Book | Relation | Parent book |
| Order | Number | Chapter sequence |
| Scenes | Relation | Linked scenes |
| Summary | Text | Chapter overview |
| Status | Select | Draft/Review/Published |
| Metadata | Rich Text | JSON metadata |

#### 3. Nodes Database

| Property | Type | Purpose |
|----------|------|---------|
| Title | Text | Node title |
| Type | Select | Node kind |
| Slug | Text | URL-friendly identifier |
| Content | Rich Text | Main content |
| Parent | Relation | Parent node |
| Children | Relation | Child nodes |
| Relationships | Relation | Linked relationships |
| Assets | Relation | Associated media |
| Metadata | Rich Text | JSON metadata |
| Status | Select | Draft/Review/Published |

#### 4. Relationships Database

| Property | Type | Purpose |
|----------|------|---------|
| Source | Relation | Source node |
| Destination | Relation | Target node |
| Type | Select | Relationship type |
| Priority | Number | Importance weight |
| Direction | Select | Unidirectional/Bidirectional |
| Metadata | Rich Text | Additional context |

#### 5. Media Database

| Property | Type | Purpose |
|----------|------|---------|
| Title | Text | Media name |
| Type | Select | Image/Audio/Video |
| Source URL | URL | External reference |
| Alt Text | Text | Accessibility description |
| Transcript | Files | Audio transcript |
| Captions | Files | Video captions |
| Metadata | Rich Text | Technical metadata |
| Status | Select | Processing/Ready |

#### 6. People Database

| Property | Type | Purpose |
|----------|------|---------|
| Name | Text | Person name |
| Bio | Rich Text | Biography |
| Image | Files | Portrait |
| References | Relation | Related nodes |
| Metadata | Rich Text | Additional info |

#### 7. Places Database

| Property | Type | Purpose |
|----------|------|---------|
| Name | Text | Location name |
| Description | Rich Text | Location details |
| Coordinates | Text | Lat/Lng |
| Map Image | Files | Map reference |
| References | Relation | Related nodes |

#### 8. Events Database

| Property | Type | Purpose |
|----------|------|---------|
| Title | Text | Event name |
| Date | Date | Event date |
| Description | Rich Text | Event details |
| Participants | Relation | People involved |
| Locations | Relation | Places involved |
| References | Relation | Related nodes |

#### 9. Themes Database

| Property | Type | Purpose |
|----------|------|---------|
| Name | Text | Theme name |
| Description | Rich Text | Theme explanation |
| Related Themes | Relation | Connected themes |
| References | Relation | Supporting nodes |

#### 10. Doctrines Database

Similar structure to Themes.

#### 11. Timelines Database

| Property | Type | Purpose |
|----------|------|---------|
| Name | Text | Timeline name |
| Start Date | Date | Timeline start |
| End Date | Date | Timeline end |
| Events | Relation | Included events |
| References | Relation | Related nodes |

#### 12. Playlists Database

| Property | Type | Purpose |
|----------|------|---------|
| Title | Text | Playlist name |
| Items | Relation | Ordered media/nodes |
| Description | Text | Playlist purpose |

#### 13. Translations Database

| Property | Type | Purpose |
|----------|------|---------|
| Source Node | Relation | Original content |
| Language | Select | Target language |
| Translated Content | Rich Text | Translation |
| Translator | Relation | Translator person |
| Review Status | Select | Pending/Approved |

#### 14. Authors Database

| Property | Type | Purpose |
|----------|------|---------|
| Name | Text | Author name |
| Bio | Rich Text | Biography |
| Works | Relation | Authored content |
| Contact | Text | Contact info |

#### 15. Publishing Database

| Property | Type | Purpose |
|----------|------|---------|
| Version | Number | Version number |
| Content | Relation | Published content |
| Published At | Date | Publication date |
| Published By | Relation | Publisher |
| Changelog | Rich Text | Changes summary |
| Status | Select | Draft/Published/Archived |

### Extraction Layer

The Notion extraction layer:

1. **Authenticates** with Notion API
2. **Queries** all databases
3. **Normalizes** data to intermediate representation
4. **Resolves** relations between databases
5. **Validates** completeness
6. **Outputs** normalized data

**Never exposes:**
- Notion page IDs
- Notion block IDs
- Notion-specific properties
- Notion URLs

### Synchronization Strategy

**Initial Sync:**
- Full database export
- Complete graph build
- Baseline version creation

**Incremental Sync:**
- Poll for updated pages (last_edited_time)
- Extract only changed content
- Compute delta
- Apply to existing graph

**Conflict Resolution:**
- Last-write-wins for metadata
- Manual resolution for content conflicts
- Audit trail maintained

### Error Handling

**Extraction Errors:**
- Log detailed error
- Continue with remaining content
- Report incomplete extraction
- Block publishing if critical

**Rate Limiting:**
- Respect Notion rate limits
- Implement exponential backoff
- Queue requests
- Notify on persistent failures

---

## Canonical Transformation Pipeline

### Purpose

Transform any source format into the Canonical Content Graph.

### Transformation Functions

Each source format has a dedicated transformer:

```javascript
// Transformer interface
interface Transformer {
  canHandle(source: any): boolean
  transform(source: any): CCGFragment
  validate(fragment: CCGFragment): ValidationResult
}

// Registered transformers
const transformers = [
  NotionTransformer,
  MarkdownTransformer,
  USFMTransformer,
  OSISTransformer,
  JSONTransformer,
  YAMLTransformer,
  // Future transformers
]
```

### Transformation Rules

#### Rule 1: Node Creation

Every meaningful content unit becomes a Node.

```
Input: Chapter content
Output: Node { type: 'Chapter', ... }
```

#### Rule 2: Relationship Inference

Implicit relationships become explicit.

```
Input: "See also Hebrews 1"
Output: Relationship { 
  type: 'references',
  source: currentNode,
  destination: hebrews1Node
}
```

#### Rule 3: Asset Normalization

All assets become references.

```
Input: Image file path
Output: AssetReference {
  provider: 'cloudinary',
  id: '...',
  variants: [...],
  altText: '...'
}
```

#### Rule 4: Metadata Enrichment

Add computed metadata.

```
Computed Fields:
- slug (from title)
- wordCount
- readingTime
- language (detected or specified)
- contentHash
```

#### Rule 5: Crosslink Resolution

Symbolic references resolve to nodes.

```
Input: "Melchizedek (Gen 14)"
Resolution:
1. Search for node with title "Melchizedek"
2. Search for node with reference "Genesis 14"
3. Create relationship if found
4. Flag for manual review if ambiguous
```

### Transformation Pipeline

```
Source Content
    ↓
[Parser] → Parsed AST
    ↓
[Normalizer] → Normalized Structure
    ↓
[Enricher] → Enriched with Metadata
    ↓
[Link Resolver] → Resolved Crosslinks
    ↓
[Validator] → Validated Fragment
    ↓
CCG Fragment
```

### Error Recovery

**Non-Breaking Errors:**
- Log warning
- Use default value
- Continue transformation

**Breaking Errors:**
- Halt transformation
- Report specific error
- Require manual fix

---

## Validation Pipeline

### Validation Categories

#### 1. Structural Validation

**Checks:**
- Required fields present
- Field types correct
- Hierarchical integrity
- No circular parent references

**Schema Example:**
```javascript
const NodeSchema = {
  required: ['id', 'kind', 'title'],
  properties: {
    id: { type: 'uuid' },
    kind: { type: 'enum', values: NODE_TYPES },
    title: { type: 'string', minLength: 1 },
    slug: { type: 'string', pattern: SLUG_PATTERN },
    // ...
  }
}
```

#### 2. Reference Validation

**Checks:**
- All relationship sources exist
- All relationship destinations exist
- All asset references resolvable
- No orphaned relationships

**Algorithm:**
```javascript
function validateReferences(graph) {
  const nodeIds = new Set(graph.nodes.map(n => n.id))
  const errors = []
  
  for (const rel of graph.relationships) {
    if (!nodeIds.has(rel.source)) {
      errors.push(`Missing source: ${rel.source}`)
    }
    if (!nodeIds.has(rel.destination)) {
      errors.push(`Missing destination: ${rel.destination}`)
    }
  }
  
  return errors
}
```

#### 3. Semantic Validation

**Checks:**
- Node types match content
- Relationship types appropriate
- Metadata completeness
- Language codes valid (ISO 639)

**Examples:**
- `quotes` relationship must connect text nodes
- `located-at` relationship must connect to Place node
- `translation-of` must connect same-content different-language nodes

#### 4. Accessibility Validation

**Mandatory Checks:**

| Asset Type | Required Metadata |
|------------|------------------|
| Image | altText |
| Audio | transcript |
| Video | captions, transcript |
| Map | textualDescription |
| Diagram | textualDescription |
| Chart | dataDescription |

**Validation Rule:**
```javascript
function validateAccessibility(node) {
  const errors = []
  
  for (const asset of node.assets) {
    switch (asset.type) {
      case 'image':
        if (!asset.altText) {
          errors.push(`Image missing alt text: ${asset.id}`)
        }
        break
      case 'audio':
        if (!asset.transcript) {
          errors.push(`Audio missing transcript: ${asset.id}`)
        }
        break
      // ...
    }
  }
  
  return errors
}
```

#### 5. Quality Validation

**Checks:**
- No duplicate IDs
- No broken formatting
- Consistent naming conventions
- Appropriate content length
- No placeholder text ("Lorem ipsum")
- No TODO comments in published content

### Validation Report

```javascript
{
  passed: boolean,
  timestamp: ISO8601,
  contentVersion: string,
  errors: [
    {
      code: string,
      message: string,
      severity: 'error' | 'warning',
      location: {
        nodeId: string,
        field: string
      },
      suggestion: string
    }
  ],
  warnings: [...],
  summary: {
    totalNodes: number,
    totalRelationships: number,
    totalAssets: number,
    errorCount: number,
    warningCount: number
  }
}
```

### Blocking vs Non-Blocking

**Blocking (Errors):**
- Missing required fields
- Broken references
- Missing accessibility metadata
- Duplicate IDs
- Invalid relationship types

**Non-Blocking (Warnings):**
- Unusual content length
- Missing optional metadata
- Potential typos
- Style inconsistencies

---

## Versioning Strategy

### Version Model

```
Version {
  // Identification
  id: UUID
  publicationId: UUID
  versionNumber: Integer (semver-like)
  
  // Lineage
  parentVersionId: UUID?
  childVersionIds: [UUID]
  
  // Content
  contentHash: SHA256
  nodeCount: Integer
  relationshipCount: Integer
  assetCount: Integer
  
  // Metadata
  manifest: Manifest
  changelog: String
  publishedAt: ISO8601
  publishedBy: AuthorID
  
  // Lifecycle
  status: 'Draft' | 'Review' | 'Approved' | 'Published' | 'Archived'
  
  // Distribution
  packageUrl: URL?
  deltaFromPrevious: URL?
}
```

### Version Lifecycle

```
┌─────────┐
│  Draft  │
└────┬────┘
     │ Submit for Review
     ▼
┌─────────┐
│  Review │
└────┬────┘
     │ Approve
     ▼
┌──────────┐
│ Approved │
└────┬─────┘
     │ Publish
     ▼
┌───────────┐
│ Published │◄──── Readers consume this
└────┬──────┘
     │ Superseded
     ▼
┌──────────┐
│ Archived │
└──────────┘
```

### Version Comparison

**Diff Algorithm:**

1. Compare node sets
   - Added nodes
   - Removed nodes
   - Modified nodes (by content hash)

2. Compare relationship sets
   - Added relationships
   - Removed relationships
   - Modified relationships

3. Compare assets
   - New assets
   - Deprecated assets
   - Updated assets

4. Generate changelog
   - Human-readable summary
   - Machine-readable diff

**Example Changelog:**
```markdown
## Version 2.1.0

### Added
- 3 new scenes in Hebrews Chapter 11
- 12 crosslinks to Old Testament prophecies
- Audio narration for Chapter 10

### Changed
- Updated commentary on Melchizedek
- Enhanced map of Jerusalem

### Fixed
- Corrected Greek transliteration in Chapter 1
- Fixed broken link to Psalm 110

### Removed
- Duplicate image in Chapter 5
```

### Branching Strategy

**Main Branch:**
- Published versions
- Production content

**Development Branch:**
- Draft versions
- Work in progress

**Release Branch:**
- Review versions
- Pre-publication testing

### Rollback Support

**Capabilities:**
- Revert to any previous version
- Compare current with any historical version
- Restore archived content
- Branch from historical version

---

## Crosslink Authoring Model

### Author Experience

Authors create links without understanding implementation.

**Simple Syntax:**
```
See [[Hebrews 1]] for more.

This fulfills [[Psalm 110|the prophecy]].

Compare with [[Genesis 14:18-20]].
```

**Visual Interface:**
- Type `[[` to open link picker
- Search for target
- Select relationship type
- Add optional display text

### Relationship Types

Authors select from curated list:

| Category | Types |
|----------|-------|
| Scriptural | quotes, references, fulfills, contrasts, continues, parallel-account |
| Explanatory | explains, illustrates, expands, commentary-of |
| Historical | occurs-before, occurs-after, located-at, same-place |
| Personal | spoken-by, mentions, same-person |
| Thematic | related-theme, inspired-by |
| Community | prayer-for, study-group, discussion-of |
| User | favorite, saved-by-user, visited-after |
| AI | AI-generated-from |

### Resolution Process

```
Author Input: "[[Melchizedek]]"
    ↓
[Search] Find matching nodes
    ↓
[Disambiguate] If multiple matches
    ↓
[Infer Type] Based on context
    ↓
[Create Relationship] With metadata
    ↓
[Validate] Ensure target exists
```

### Contextual Links

Links can include context:

```
[[Hebrews 1:5|quoted in]] [[Psalm 2:7]]
```

Creates relationship with context metadata:
```javascript
{
  type: 'quotes',
  source: psalm2_7,
  destination: hebrews1_5,
  context: 'quoted in',
  displayText: 'Psalm 2:7'
}
```

### Bidirectional Links

Some relationships are automatically bidirectional:

| Forward | Automatic Reverse |
|---------|------------------|
| quotes | quoted-by |
| fulfills | fulfilled-in |
| occurs-before | occurs-after |
| located-at | contains |
| translation-of | original |

### Link Validation

**At Publish Time:**
- Verify target exists
- Verify relationship type appropriate
- Check for circular references
- Validate context syntax

**At Runtime:**
- Verify link still valid
- Handle deleted targets gracefully
- Show deprecation notices

---

## Media Pipeline

### Image Pipeline

**Flow:**
```
Original Image
    ↓
[Upload] → Cloudinary
    ↓
[Transform]
  - Resize variants
  - Optimize compression
  - Generate thumbnails
  - Create WebP/AVIF
    ↓
[Metadata]
  - Extract EXIF
  - Compute dimensions
  - Generate color palette
    ↓
[Store Reference]
  - Cloudinary ID
  - Variant URLs
  - Alt text
```

**Generated Variants:**
- Thumbnail (150x150)
- Small (400px wide)
- Medium (800px wide)
- Large (1600px wide)
- Original (preserved)

**Formats:**
- WebP (primary)
- AVIF (where supported)
- JPEG (fallback)

### Audio Pipeline

**Flow:**
```
Original Audio
    ↓
[Process]
  - Normalize loudness (-16 LUFS)
  - Remove silence
  - Convert to MP3/AAC
    ↓
[Generate]
  - Waveform data
  - Preview clips (30s)
  - Chapter markers
    ↓
[Transcribe]
  - Generate transcript
  - Sync timestamps
    ↓
[Upload] → Cloudflare R2
    ↓
[Store Reference]
  - R2 URL
  - Duration
  - Transcript
  - Waveform
```

**Formats:**
- MP3 (primary, 128kbps)
- AAC (iOS optimization)
- OGG (fallback)

### Video Pipeline

**Flow:**
```
YouTube Reference
    ↓
[Fetch Metadata]
  - YouTube API
  - Duration
  - Title
  - Description
  - Thumbnails
    ↓
[Generate]
  - Local thumbnails
  - Chapter markers (if available)
  - Transcript (if available)
    ↓
[Store Reference]
  - YouTube ID
  - Embed URL
  - Metadata
```

**Note:** Videos are referenced, not hosted.

### Narration Pipeline

Same as Audio Pipeline, with additional:

**Synchronization:**
- Verse-level timestamps
- Word-level highlights (optional)
- Sync with text display

### Music Pipeline

Similar to Audio Pipeline:

**Additional Metadata:**
- Composer
- Performer
- License
- Lyrics (if applicable)
- Sheet music reference

### Asset Reference Model

```javascript
AssetReference {
  id: UUID
  type: 'image' | 'audio' | 'video' | 'narration' | 'music'
  
  // Provider-specific
  provider: 'cloudinary' | 'r2' | 'youtube'
  providerId: string
  providerUrl: URL
  
  // Variants
  variants: [
    {
      type: string
      url: URL
      width?: number
      height?: number
      bitrate?: number
      format: string
    }
  ]
  
  // Accessibility
  altText?: string
  transcript?: string
  captions?: string
  textualDescription?: string
  
  // Metadata
  duration?: number
  dimensions?: { width: number, height: number }
  fileSize?: number
  createdAt: ISO8601
  updatedAt: ISO8601
  
  // Usage
  license: string
  attribution?: string
}
```

---

## Accessibility Pipeline

### Mandatory Requirements

All published content must meet WCAG 2.1 AA standards.

### Image Accessibility

**Required:**
- Alt text for all images
- Decorative images marked appropriately
- Complex images have extended descriptions

**Validation:**
```javascript
function validateImageAccessibility(image) {
  if (!image.altText || image.altText.trim() === '') {
    return {
      valid: false,
      error: 'Image missing alt text'
    }
  }
  
  if (image.altText.length < 5) {
    return {
      valid: false,
      warning: 'Alt text may be too short'
    }
  }
  
  if (image.altText.toLowerCase().includes('image of')) {
    return {
      valid: false,
      warning: 'Avoid "image of" in alt text'
    }
  }
  
  return { valid: true }
}
```

### Audio Accessibility

**Required:**
- Complete transcript
- Speaker identification
- Sound effect descriptions
- Timestamp markers

**Transcript Format:**
```
[00:00] Narrator: In the beginning...
[00:15] [Music: Gentle strings begin]
[00:30] Narrator: God spoke to our ancestors...
```

### Video Accessibility

**Required:**
- Closed captions (SRT/VTT)
- Audio description track (for visual-only content)
- Transcript

**Caption Requirements:**
- Synchronized with audio
- Include speaker names
- Describe relevant sounds
- Proper punctuation

### Map Accessibility

**Required:**
- Textual description of geography
- Key locations listed
- Route descriptions (for journey maps)
- Scale reference

**Example:**
```
Map of Paul's First Missionary Journey:
Starting point: Antioch (modern Turkey)
Route: West to Cyprus, north to Galatia, 
south to Pamphylia, return to Antioch
Key stops: Seleucia, Salamis, Paphos, 
Perga, Pisidian Antioch, Iconium, Lystra, Derbe, Attalia
Distance: Approximately 1,000 miles
```

### Interactive Element Accessibility

**Requirements:**
- Keyboard navigable
- Screen reader announcements
- Focus indicators
- ARIA labels

### Validation Enforcement

**Publishing Blocks If:**
- Any image missing alt text
- Any audio missing transcript
- Any video missing captions
- Any map missing description
- Interactive elements not keyboard accessible

**Automated Checks:**
- Alt text presence and quality
- Transcript completeness
- Caption synchronization
- Color contrast ratios
- Heading hierarchy
- Link text descriptiveness

---

## Localization Strategy

### Multilingual Content Model

Each node may have multiple translations:

```javascript
Node {
  id: UUID
  kind: string
  title: string
  content: string
  language: 'en' // Primary language
  
  // Translations
  translations: [
    {
      language: 'es',
      title: string,
      content: string,
      translatorId: UUID,
      reviewedAt: ISO8601,
      status: 'draft' | 'review' | 'approved'
    },
    {
      language: 'fr',
      // ...
    }
  ]
  
  // Shared across translations
  relationships: [...]
  assets: [...]
  metadata: {...}
}
```

### Translation Workflow

```
Source Content (English)
    ↓
[Extract] Content for translation
    ↓
[Assign] To translators
    ↓
[Translate] In Notion/external tool
    ↓
[Review] By native speaker
    ↓
[Approve] For publication
    ↓
[Publish] With source
```

### Audio Localization

**Multiple Narrations:**
```javascript
Node {
  // ...
  narrations: [
    {
      language: 'en',
      assetId: UUID,
      narrator: string
    },
    {
      language: 'es',
      assetId: UUID,
      narrator: string
    }
  ]
}
```

### Commentary Localization

Different commentary sets per language:

```javascript
Node {
  // ...
  commentaries: {
    'en': [commentary1, commentary2],
    'es': [spanishCommentary1],
    'fr': [frenchCommentary1, frenchCommentary2]
  }
}
```

### Language Detection

**Automatic Detection:**
- Detect content language
- Warn if mismatch with declared language
- Suggest correct language code

### RTL Support

**Right-to-Left Languages:**
- Arabic
- Hebrew
- Syriac

**Requirements:**
- Separate typography rules
- Mirrored layouts
- RTL-aware crosslinks

---

## Incremental Synchronization Strategy

### Sync Model

Readers synchronize incrementally:

```
Local State          Server State
    │                    │
    │   Version Check    │
    │───────────────────>│
    │                    │
    │   Available Updates│
    │<───────────────────│
    │                    │
    │   Delta Request    │
    │───────────────────>│
    │                    │
    │   Delta Package    │
    │<───────────────────│
    │                    │
    │   Apply & Verify   │
    │                    │
```

### Delta Computation

**Server-Side:**

```javascript
function computeDelta(localVersion, serverVersion) {
  const localNodes = new Set(localVersion.nodeHashes)
  const serverNodes = new Set(serverVersion.nodeHashes)
  
  const added = serverNodes.difference(localNodes)
  const removed = localNodes.difference(serverNodes)
  const modified = findModified(localVersion, serverVersion)
  
  return {
    addedNodes: added,
    removedNodes: removed,
    modifiedNodes: modified,
    addedRelationships: ...,
    removedRelationships: ...,
    newAssets: ...,
    deprecatedAssets: ...
  }
}
```

### Client-Side Sync

**Steps:**

1. **Check Version**
   - Compare local version hash with server
   - Determine if update needed

2. **Download Delta**
   - Request only changed content
   - Parallel downloads for large deltas

3. **Verify Integrity**
   - Check hashes
   - Verify signatures
   - Validate structure

4. **Apply Changes**
   - Add new nodes
   - Update modified nodes
   - Mark removed nodes (soft delete)
   - Update relationships
   - Download new assets

5. **Update State**
   - Set new version
   - Clear old caches
   - Update indexes

### Conflict Resolution

**Scenarios:**

1. **User Notes vs Content Update**
   - User notes preserved
   - Content updated independently

2. **Reading Progress vs Content Change**
   - Progress mapped to new structure
   - Fallback to nearest ancestor if exact match gone

3. **Bookmarks vs Node Removal**
   - Bookmark preserved with deprecation notice
   - Redirect to related content if available

### Offline Considerations

**During Offline:**
- Queue sync requests
- Continue reading cached content
- Allow local annotations
- Sync when reconnected

**Bandwidth Optimization:**
- Compress JSON
- Binary encoding for large datasets
- Asset deduplication
- Background downloads

---

## Future Importer Architecture

### Plugin System

Importers are plugins implementing a standard interface:

```javascript
interface Importer {
  // Metadata
  readonly name: string
  readonly version: string
  readonly supportedFormats: string[]
  
  // Detection
  canImport(source: any): boolean
  
  // Import
  import(source: any): Promise<ImportResult>
  
  // Validation
  validate(result: ImportResult): ValidationResult
  
  // Transformation
  transform(result: ImportResult): CCGFragment
}
```

### Planned Importers

#### Markdown Importer

**Supported Formats:**
- Standard Markdown
- GitHub Flavored Markdown
- CommonMark
- MultiMarkdown

**Features:**
- Frontmatter metadata
- Link conversion
- Image reference handling
- Heading hierarchy

#### USFM Importer (Bible)

**Supported:**
- USFM 2.x and 3.x
- Bible books
- Chapters and verses
- Footnotes
- Cross-references
- Formatting markers

**Transformation:**
- Books → Book nodes
- Chapters → Chapter nodes
- Verses → Verse nodes
- Cross-refs → Relationships

#### OSIS Importer (XML Bible)

**Supported:**
- OSIS 2.1.1
- TEI headers
- Bible content
- Commentaries
- Lexicons

#### Obsidian Importer

**Supported:**
- Markdown files
- Wikilinks (`[[ ]]`)
- Tags
- Frontmatter
- Embedded media

**Features:**
- Vault-wide import
- Link graph preservation
- Tag conversion

#### Git Repository Importer

**Supported:**
- Git-based content
- Multiple branches
- Commit history
- Diff-based updates

#### Bible API Importers

**Sources:**
- API.Bible
- Open Scriptures
- SWORD Project
- Various denominational APIs

### Importer Registration

```javascript
const importers = new Map()

function registerImporter(importer) {
  for (const format of importer.supportedFormats) {
    importers.set(format, importer)
  }
}

function getImporterForFormat(format) {
  return importers.get(format)
}
```

### Universal Output

All importers produce the same Canonical Content Graph.

No special-casing in the reader engine.

---

## Quality Gate Specification

### Gate 1: Structural Integrity

**Must Pass:**
- All required fields present
- Correct field types
- Valid hierarchy
- No circular parent references

**Failure Action:** Block publishing, report errors

### Gate 2: Reference Integrity

**Must Pass:**
- All relationship sources exist
- All relationship destinations exist
- All asset references resolvable
- No orphaned relationships

**Failure Action:** Block publishing, report broken links

### Gate 3: Accessibility Compliance

**Must Pass:**
- All images have alt text
- All audio has transcripts
- All video has captions
- All maps have descriptions
- Interactive elements keyboard accessible

**Failure Action:** Block publishing, report missing accessibility

### Gate 4: Content Quality

**Must Pass:**
- No duplicate IDs
- No placeholder text
- No TODO comments
- Appropriate content length
- Consistent formatting

**Failure Action:** Block publishing, report quality issues

### Gate 5: Translation Consistency

**Must Pass:**
- All translations present (if required)
- No mixed languages in single node
- Translation metadata complete
- Review status approved

**Failure Action:** Block publishing, report translation issues

### Gate 6: Media Readiness

**Must Pass:**
- All media uploaded
- All variants generated
- All metadata extracted
- License information present

**Failure Action:** Block publishing, report media issues

### Gate 7: Theological Review

**Must Pass:**
- Doctrinal accuracy verified
- Scripture references correct
- Commentary reviewed
- Sensitive topics flagged

**Failure Action:** Require manual approval

### Gate 8: Final Approval

**Must Pass:**
- All automated checks passed
- Human reviewer approval
- Publisher authorization

**Failure Action:** Block publishing

---

## Publishing Workflow

### Roles

**Author:**
- Creates content
- Edits drafts
- Submits for review

**Reviewer:**
- Reviews content
- Requests changes
- Approves for publication

**Publisher:**
- Final approval
- Triggers publication
- Manages versions

**Translator:**
- Creates translations
- Submits for review

**Accessibility Auditor:**
- Verifies accessibility
- Reports issues

### Workflow States

```
Draft ──► Review ──► Approved ──► Published ──► Archived
  │          │          │            │
  │          │          │            └──► (when superseded)
  │          │          │
  │          │          └──► (can return to Review)
  │          │
  │          └──► (can return to Draft)
  │
  └──► (can be deleted)
```

### Publishing Steps

1. **Author Completes Draft**
   - Content created
   - Initial self-review
   - Submit for review

2. **Reviewer Examines**
   - Content review
   - Theological check
   - Accessibility check
   - Request changes or approve

3. **Publisher Finalizes**
   - Final approval
   - Version assignment
   - Trigger publishing pipeline

4. **Pipeline Executes**
   - Extract
   - Validate
   - Transform
   - Version
   - Package
   - Sign
   - Distribute

5. **Notification**
   - Authors notified
   - Reviewers notified
   - Update notifications sent to readers

### Emergency Recall

**Capability:**
- Recall published version
- Replace with corrected version
- Notify all readers
- Audit trail maintained

---

## Testing Strategy

### Test Categories

#### 1. Validation Tests

**Coverage:**
- All validation rules
- Error message accuracy
- Blocking vs non-blocking behavior
- Edge cases

**Examples:**
```javascript
test('blocks publishing when image missing alt text', () => {
  const image = { type: 'image', url: '...' }
  const result = validateAccessibility([image])
  expect(result.passed).toBe(false)
  expect(result.errors).toContainEqual(
    expect.objectContaining({ code: 'MISSING_ALT_TEXT' })
  )
})
```

#### 2. Publishing Tests

**Coverage:**
- End-to-end publishing
- Each pipeline stage
- Error recovery
- Rollback

**Examples:**
```javascript
test('publishes valid content successfully', async () => {
  const content = loadFixture('hebrews-chapter-1')
  const result = await publish(content)
  expect(result.status).toBe('published')
  expect(result.version).toBeDefined()
})
```

#### 3. Graph Integrity Tests

**Coverage:**
- No orphaned nodes
- No broken relationships
- Consistent hashes
- Valid hierarchies

#### 4. Crosslink Verification Tests

**Coverage:**
- All links resolve
- Relationship types correct
- Bidirectional links consistent
- Circular reference detection

#### 5. Asset Verification Tests

**Coverage:**
- All assets accessible
- Variants generated
- Metadata extracted
- License compliance

#### 6. Translation Verification Tests

**Coverage:**
- All translations present
- Language codes valid
- Consistent structure
- Review status correct

#### 7. Accessibility Verification Tests

**Coverage:**
- WCAG 2.1 AA compliance
- Screen reader compatibility
- Keyboard navigation
- Color contrast

#### 8. Incremental Sync Tests

**Coverage:**
- Delta computation accuracy
- Client sync correctness
- Conflict resolution
- Offline behavior

#### 9. Performance Tests

**Coverage:**
- Publishing time budgets
- Validation speed
- Delta size limits
- Memory usage

### Test Data

**Fixtures:**
- Sample books
- Complete chapters
- Edge cases (empty content, maximum size)
- Invalid content (for error testing)
- Multilingual content
- Complex relationship graphs

### Continuous Integration

**Pipeline:**
```
Code Change
    ↓
Run Unit Tests
    ↓
Run Integration Tests
    ↓
Build Test Content
    ↓
Publish Test Content
    ↓
Validate Published Content
    ↓
Test Reader Consumption
    ↓
Report Results
```

---

## Appendix: Data Models

### Publishing Manifest

```javascript
PublishingManifest {
  // Identification
  id: UUID
  versionId: UUID
  publicationId: UUID
  
  // Content Summary
  nodeCount: number
  relationshipCount: number
  assetCount: number
  totalSize: number
  
  // Content Indexes
  nodes: [
    {
      id: UUID
      kind: string
      slug: string
      hash: SHA256
      size: number
    }
  ]
  
  relationships: [
    {
      id: UUID
      source: UUID
      destination: UUID
      type: string
      hash: SHA256
    }
  ]
  
  assets: [
    {
      id: UUID
      type: string
      provider: string
      providerId: string
      hash: SHA256
      size: number
    }
  ]
  
  // Metadata
  createdAt: ISO8601
  publishedAt: ISO8601
  publishedBy: UUID
  contentHash: SHA256
  signature: string
}
```

### Delta Package

```javascript
DeltaPackage {
  // Versioning
  fromVersion: UUID
  toVersion: UUID
  
  // Changes
  addedNodes: [Node]
  modifiedNodes: [Node]
  removedNodeIds: [UUID]
  
  addedRelationships: [Relationship]
  modifiedRelationships: [Relationship]
  removedRelationshipIds: [UUID]
  
  addedAssets: [AssetReference]
  deprecatedAssetIds: [UUID]
  
  // Metadata
  createdAt: ISO8601
  compressedSize: number
  uncompressedSize: number
  contentHash: SHA256
}
```

### Validation Report

```javascript
ValidationReport {
  passed: boolean
  timestamp: ISO8601
  version: string
  
  errors: [
    {
      code: string
      message: string
      severity: 'error'
      location: {
        nodeId?: UUID
        field?: string
        relationshipId?: UUID
        assetId?: UUID
      }
      suggestion?: string
    }
  ]
  
  warnings: [
    {
      code: string
      message: string
      severity: 'warning'
      location: {...}
      suggestion?: string
    }
  ]
  
  summary: {
    totalChecks: number
    passedChecks: number
    errorCount: number
    warningCount: number
    blockedGates: [string]
  }
}
```

---

## Conclusion

The Canonical Authoring Platform provides:

1. **Decoupled Authoring** - Notion is one of many interfaces
2. **Immutable Publishing** - Versions never change, only supersede
3. **Universal Transformation** - All sources produce same CCG
4. **Mandatory Validation** - No broken content published
5. **Accessibility First** - WCAG 2.1 AA enforced
6. **Incremental Sync** - Efficient updates for readers
7. **Extensible Import** - Plugin architecture for future formats
8. **Quality Gates** - Automated and human review
9. **Complete Testing** - Comprehensive test coverage

This architecture supports:
- Hundreds of books
- Millions of graph nodes
- Decades of content evolution
- Multiple languages
- Diverse media types
- Future platforms

**Without requiring redesign.**

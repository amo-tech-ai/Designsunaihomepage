# RULE — Routing & Directory Structure

**Purpose**: Define production-ready directory structure and routing system  
**Audience**: All developers  
**Status**: Non-Negotiable

---

## 1) PURPOSE

These rules exist to:
- **Prevent broken navigation** – Users can always move forward and backward predictably
- **Keep layouts consistent** – Every screen type has a defined wrapper and navigation pattern
- **Make features scalable** – Adding new features doesn't require refactoring routes or folder structure
- **Keep UI + AI flows predictable** – AI actions map to clear next steps, no random navigation jumps

---

## 2) GOLDEN RULES (NON-NEGOTIABLE)

### Route Design
- ✅ **One route = one screen purpose** – `/leads` shows list, `/leads/:id` shows detail
- ✅ **One primary action per screen** – Clear "what user does next"
- ✅ **Public vs authenticated areas separated** – Different layouts, different route guards
- ✅ **Layouts are route-level** – Never duplicated inside screen components
- ✅ **No dead ends** – Every screen has next action (CTA, back button, cancel)

### Structure Rules
- ✅ **Routes match product workflows** – Not developer convenience or technical grouping
- ✅ **Naming is consistent** – kebab-case folders, PascalCase components, no "misc" or "page1"
- ✅ **Feature folders own their UI + logic** – Shared components stay truly shared (no business logic)
- ✅ **AI actions belong to features** – Not scattered in global utilities

### State Rules
- ✅ **Errors & empty states are first-class** – Required for every route-level screen

---

## 3) DIRECTORY STRUCTURE STANDARD

### Top-Level Folders

```
src/
├── routes/          → Route definitions, route guards
├── layouts/         → PublicLayout, AppLayout, WizardLayout
├── screens/         → Route-level screens only (1 screen per route)
├── features/        → Feature modules (UI + hooks + services + AI)
├── components/      → Reusable UI primitives (no business logic)
├── services/        → API clients, Edge Function clients
├── ai/              → Agent prompts, schemas, orchestration
├── lib/             → Shared utilities, config, helpers
├── types/           → Shared TypeScript types
├── assets/          → Static files (images, fonts)
└── docs/            → Rules, specs, documentation
```

---

### Folder Ownership Rules

#### `/routes/` – Route Definitions
**Allowed**:
- Route configuration (path → screen mapping)
- Route guards (auth, role, onboarding checks)
- Layout assignments

**Forbidden**:
- Screen UI components
- Business logic
- API calls

---

#### `/layouts/` – Route-Level Layouts
**Allowed**:
- Navigation (sidebar, header, footer)
- Global actions (user menu, notifications)
- Layout structure only

**Forbidden**:
- Screen-specific content
- Business logic
- API calls
- AI triggers

**Standard Layouts**:
- `PublicLayout` – Marketing, landing, auth pages
- `AppLayout` – Dashboard, data screens, authenticated area
- `WizardLayout` – Multi-step flows (onboarding, project creation)

---

#### `/screens/` – Route-Level Screens
**Allowed**:
- Composing features into page layout
- Handling route params
- Defining page states (loading, empty, error)

**Forbidden**:
- Business logic (belongs in features)
- Direct API calls (belongs in services)
- Reusable components (belongs in components)

**Naming**: `{Purpose}Screen.tsx` – e.g., `LeadsListScreen.tsx`, `LeadDetailScreen.tsx`

---

#### `/features/` – Feature Modules
**Allowed**:
- Feature-specific UI components
- Data fetching hooks
- Business logic
- API service calls
- AI action triggers
- Feature types

**Forbidden**:
- Global utilities (use `/lib/`)
- Shared components (use `/components/`)

**Structure Example**:
```
features/
├── lead-enrichment/
│   ├── LeadEnrichmentCard.tsx     (feature UI)
│   ├── useLeadEnrichment.ts       (data hook)
│   ├── leadEnrichmentService.ts   (API calls)
│   └── types.ts                   (feature types)
└── call-analysis/
    ├── CallAnalysisResults.tsx
    ├── useCallAnalysis.ts
    └── callAnalysisService.ts
```

**When to Create a New Feature Folder**:
- Feature has distinct business logic
- Feature has 3+ related components
- Feature has its own data model
- Feature has unique API endpoints

---

#### `/components/` – Reusable UI Primitives
**Allowed**:
- Pure UI components
- Generic design system components
- Accepts props, emits events only

**Forbidden**:
- Business logic
- API calls
- AI triggers
- Feature-specific logic

**Examples**: Button, Card, Modal, Input, Badge, Skeleton

---

#### `/services/` – API & Edge Functions
**Allowed**:
- API client setup
- Edge Function wrappers
- HTTP request logic
- Error handling

**Forbidden**:
- UI components
- Business logic (orchestration belongs in features)

---

#### `/ai/` – AI Orchestration
**Allowed**:
- Agent prompt templates
- AI response schemas
- Orchestration interfaces
- Agent configuration

**Forbidden**:
- UI components
- Direct API calls (use services)

**Structure**:
```
ai/
├── agents/          → Agent definitions
├── prompts/         → Prompt templates
└── schemas/         → Response schemas
```

---

#### `/types/` – Shared Types
**Allowed**:
- Global TypeScript types
- Shared interfaces
- Enums used across features

**Forbidden**:
- Feature-specific types (belong in feature folder)

---

### Naming Conventions

- **Folders**: `kebab-case` – e.g., `lead-enrichment`, `call-analysis`
- **Components**: `PascalCase.tsx` – e.g., `LeadCard.tsx`, `CallAnalysisResults.tsx`
- **Hooks**: `camelCase.ts` – e.g., `useLeadEnrichment.ts`, `useCallAnalysis.ts`
- **Services**: `camelCase.ts` – e.g., `leadService.ts`, `callService.ts`
- **Types**: `PascalCase` – e.g., `Lead`, `CallAnalysis`, `User`

---

## 4) ROUTING ARCHITECTURE

### Route Types

#### Public Routes (No Auth Required)
- Landing page: `/`
- Marketing: `/features`, `/pricing`
- Auth: `/login`, `/signup`, `/reset-password`
- Legal: `/privacy`, `/terms`

**Layout**: `PublicLayout`  
**Guard**: None (redirects to dashboard if already authenticated)

---

#### Protected Routes (Auth Required)
- Dashboard: `/dashboard`
- Leads: `/leads`, `/leads/:id`, `/leads/:id/edit`
- Calls: `/calls`, `/calls/analyze`
- Workflows: `/workflows`, `/workflows/:id`
- Settings: `/settings`

**Layout**: `AppLayout`  
**Guard**: `requireAuth` – Redirects to `/login` if not authenticated

---

#### Wizard Routes (Multi-Step Flows)
- Onboarding: `/onboarding/step-1`, `/onboarding/step-2`
- Project creation: `/project/create/step-1`

**Layout**: `WizardLayout`  
**Guard**: Depends on wizard (some public, some protected)

---

#### Error Routes
- Not found: `/404`
- Server error: `/500`
- Offline: `/offline`

**Layout**: Minimal error layout  
**Guard**: None

---

### URL Design Rules

#### Params (Identity)
**Use for**: Resource identification (required, part of URL structure)

**Examples**:
- `/leads/:id` – Specific lead
- `/workflows/:workflowId` – Specific workflow
- `/calls/:callId/analysis` – Call analysis result

**Rule**: Params identify **what** resource you're viewing

---

#### Query Strings (State)
**Use for**: Filters, sorting, pagination, search (optional, temporary state)

**Examples**:
- `/leads?status=active&sort=score` – Filtered lead list
- `/search?q=fintech&limit=20` – Search query
- `/calls?date=2024-12` – Date filter

**Rule**: Query strings define **how** you're viewing the resource

---

#### Anti-Patterns (Forbidden)

❌ `/page1`, `/page2` – No semantic meaning  
❌ `/leads/list` – Redundant (`/leads` is already the list)  
❌ `/leads?id=123` – Identity in query string (use params)  
❌ `/dashboard?view=leads` – Routes hidden in query strings  
❌ `/main/user/profile/edit` – Too deeply nested

---

## 5) LAYOUTS + NAVIGATION RULES

### Layout Assignment

| Route Type | Layout | Navigation | Breadcrumbs |
|------------|--------|------------|-------------|
| Public | PublicLayout | Header + footer | No |
| Protected | AppLayout | Sidebar + header | Yes |
| Wizard | WizardLayout | Progress bar | No |
| Error | ErrorLayout | Minimal | No |

---

### Navigation Visibility Rules

**Sidebar (AppLayout)**:
- Always visible on desktop
- Collapsible on tablet
- Bottom nav on mobile
- Active route highlighted
- Shows: Dashboard, Leads, Calls, Workflows, Settings

**Header (AppLayout)**:
- Always visible
- Shows: Breadcrumbs, Command Bar (Cmd+K), Notifications, User Menu

**Breadcrumbs**:
- Show current location hierarchy
- Each level is clickable (navigates back)
- Format: `Dashboard > Leads > Acme Corp`

---

### Mobile Navigation Behavior

**Desktop/Tablet**: Persistent sidebar + header  
**Mobile**: Bottom navigation (5 items max) + collapsible menu

**Rule**: User must always know:
1. Where they are (active nav item, breadcrumbs, page title)
2. What to do next (clear primary CTA)
3. How to go back (back button, breadcrumbs, cancel)

---

## 6) SCREEN ↔ FEATURE OWNERSHIP RULES

### Ownership Model

**Screens = Composition Layer**
- Import features
- Handle route params
- Define page states
- No business logic

**Features = Logic Layer**
- Data fetching
- State management
- API calls
- AI triggers
- Business rules

**Components = UI Layer**
- Pure presentation
- No data fetching
- No business logic

---

### Mapping Examples

#### Example 1: Dashboard
**Route**: `/dashboard`  
**Screen**: `DashboardScreen.tsx`  
**Features Used**:
- `features/dashboard/DashboardStats`
- `features/dashboard/RecentActivity`
- `features/dashboard/QuickActions`

**Flow**:
1. User navigates to `/dashboard`
2. `AppLayout` wraps screen (sidebar + header)
3. `DashboardScreen` composes feature components
4. Features fetch their own data
5. Features handle their own errors

---

#### Example 2: Lead Enrichment
**Route**: `/leads/:id`  
**Screen**: `LeadDetailScreen.tsx`  
**Features Used**:
- `features/lead-profile/LeadProfileCard`
- `features/lead-enrichment/EnrichmentSection`
- `features/call-history/CallHistoryList`

**Flow**:
1. User navigates to `/leads/123`
2. Screen extracts `id` from route params
3. Screen passes `id` to feature components
4. `EnrichmentSection` triggers AI enrichment
5. Results update inline (no route change)

---

#### Example 3: Search
**Route**: `/search?q=fintech`  
**Screen**: `SearchScreen.tsx`  
**Features Used**:
- `features/search/SearchInput`
- `features/search/SearchResults`
- `features/search/useNaturalLanguageSearch` (AI hook)

**Flow**:
1. User types in Command Bar
2. Navigates to `/search?q=fintech`
3. `SearchScreen` reads query from URL
4. `useNaturalLanguageSearch` parses query (AI)
5. Results displayed inline

---

### Dependency Rules

✅ **Screens can import Features**  
✅ **Features can import Components**  
✅ **Features can import Services**  
✅ **Features can import AI agents**  

❌ **Components cannot import Features**  
❌ **Components cannot import Services**  
❌ **Layouts cannot import Features**  
❌ **Features cannot import other Features** (extract to shared if needed)

---

## 7) AI-INTEGRATED ROUTING RULES

### Core Principle
**AI never navigates users randomly. UI controls navigation.**

---

### AI Flow Patterns

#### Pattern 1: Inline AI Result (No Route Change)
**Example**: Lead enrichment

**Flow**:
1. User on `/leads/123`
2. User clicks "Enrich Lead"
3. AI runs (thinking state shown inline)
4. Results appear on same screen
5. No route change

**Rule**: Quick AI tasks (< 10 seconds) stay on current screen

---

#### Pattern 2: Modal AI Result (No Route Change)
**Example**: Email draft generation

**Flow**:
1. User on `/leads/123`
2. User clicks "Draft Email"
3. Modal opens with thinking state
4. AI generates email draft
5. User edits in modal
6. User clicks "Send" or "Cancel"
7. Modal closes, stays on `/leads/123`

**Rule**: Medium AI tasks (10-30 seconds) use modals

---

#### Pattern 3: Dedicated Result Screen (Route Change)
**Example**: Call analysis

**Flow**:
1. User uploads call recording
2. Navigate to `/calls/:callId/analyzing` (status screen)
3. Show progress + thinking state
4. AI completes analysis
5. Navigate to `/calls/:callId/results` (results screen)
6. Show analysis results + actions
7. User can navigate back or execute actions

**Rule**: Long AI tasks (30+ seconds) use dedicated result routes

---

### Real-World Examples

#### Example 1: Document Analysis
**Scenario**: User uploads contract PDF

**Route Flow**:
```
/upload
  ↓ (user uploads file)
/documents/:docId/analyzing (status screen)
  ↓ (AI extracts terms)
/documents/:docId/insights (results screen)
  ↓ (user clicks "Create Tasks")
/tasks/new?source=doc-123 (pre-filled task form)
```

**AI Location**: `features/document-analysis/documentAnalysisService.ts`

---

#### Example 2: Lead Scoring
**Scenario**: User adds new lead

**Route Flow**:
```
/leads (list screen)
  ↓ (user clicks "Add Lead")
/leads (modal opens for add form)
  ↓ (user submits)
/leads (modal closes, AI enrichment runs inline)
  ↓ (AI completes, score badge appears)
/leads/:id (user clicks lead to view details)
```

**AI Location**: `features/lead-enrichment/useLeadEnrichment.ts`

---

### AI Action Ownership

**Rule**: AI actions live inside the feature that owns the screen

**Correct**:
- `/features/call-analysis/callAnalysisService.ts` – Calls Gemini for call transcription
- `/features/lead-enrichment/leadEnrichmentService.ts` – Calls Gemini for company data

**Incorrect**:
- `/lib/ai.ts` – All AI logic in one file (unmaintainable)
- `/components/LeadCard.tsx` – Component triggers AI directly (violates separation)

---

## 8) ERROR, EMPTY, LOADING STATES (MANDATORY)

### Required States Per Screen

Every route-level screen must define:

#### 1. Loading State
**When**: Data is being fetched, AI is processing  
**Shows**: Skeleton loader + context message

**Example**: "Loading leads...", "Analyzing call..."

---

#### 2. Empty State
**When**: No data exists (0 results, first-time user)  
**Shows**:
- Explanation (why empty)
- Primary action (how to add data)
- Visual (icon or illustration)

**Example**: 
- Title: "No leads yet"
- Message: "Add your first lead to get started"
- CTA: "Add Lead" button

---

#### 3. Error State
**When**: API fails, AI times out, permission denied  
**Shows**:
- User-friendly error message
- Recovery action (retry, go back, contact support)
- Error code (for debugging)

**Example**:
- Title: "Failed to load leads"
- Message: "We couldn't fetch your leads. Please try again."
- CTA: "Retry" button
- Code: `ERROR_500`

---

### State Priority Logic

```
Error > Loading > Empty > Data
```

**Rule**: Check states in this order:
1. If error → show error state
2. Else if loading → show loading state
3. Else if empty → show empty state
4. Else → show data

**Forbidden**: Blank white screens (every state must render something)

---

### Global Error Handling

**Error Boundary**: Catches unexpected React errors  
**Fallback**: Full-screen error page with "Report Issue" button  
**Offline Fallback**: Detect offline, show `/offline` route

---

## 9) TESTING & VALIDATION RULES

### Navigation Validation

- [ ] All routes render without errors
- [ ] Deep links work (paste URL → correct screen loads)
- [ ] Back/forward browser buttons work correctly
- [ ] Route guards prevent unauthorized access
- [ ] Mobile navigation works (bottom nav, gestures)
- [ ] Breadcrumbs navigate correctly

---

### Layout Validation

- [ ] Public routes use PublicLayout
- [ ] Protected routes use AppLayout
- [ ] Wizard routes use WizardLayout
- [ ] Active nav item highlights correctly
- [ ] User menu accessible on all layouts

---

### Screen State Validation

- [ ] Every screen has loading state (no blank screens)
- [ ] Every screen has empty state (with CTA)
- [ ] Every screen has error state (with retry)
- [ ] Loading skeletons match final layout
- [ ] Error messages are user-friendly

---

### AI Flow Validation

- [ ] AI never auto-navigates without user action
- [ ] Long AI tasks show progress
- [ ] AI results have clear next action
- [ ] AI errors show recovery options
- [ ] AI thinking states are visible

---

### URL Validation

- [ ] URLs are human-readable
- [ ] URLs are stable (don't change randomly)
- [ ] URLs can be bookmarked
- [ ] Query strings preserve filter state
- [ ] Params correctly identify resources

---

## 10) DIAGRAMS

### Routing Flow

```mermaid
graph TB
    Start([User Visits App])
    
    Start --> Public{Authenticated?}
    
    Public -->|No| PublicRoutes[Public Routes]
    Public -->|Yes| AppRoutes[App Routes]
    
    PublicRoutes --> Landing[/ - Landing Page]
    PublicRoutes --> Login[/login - Login]
    PublicRoutes --> Signup[/signup - Signup]
    
    AppRoutes --> Dashboard[/dashboard - Dashboard]
    AppRoutes --> Leads[/leads - Lead List]
    AppRoutes --> LeadDetail[/leads/:id - Lead Detail]
    AppRoutes --> CallAnalyze[/calls/analyze - Call Analysis]
    AppRoutes --> Workflows[/workflows - Workflows]
    
    LeadDetail --> Enrich{AI Enrichment}
    Enrich --> InlineResult[Results Inline]
    
    CallAnalyze --> Upload[Upload Recording]
    Upload --> Status[/calls/:id/analyzing]
    Status --> Results[/calls/:id/results]
    Results --> Actions[Execute Actions]
    
    AppRoutes --> Error404[/404 - Not Found]
    AppRoutes --> Error500[/500 - Server Error]
    
    style Start fill:#e1f5ff
    style Public fill:#fff3cd
    style Enrich fill:#d4edda
    style Error404 fill:#f8d7da
    style Error500 fill:#f8d7da
```

---

## 11) "DONE" DEFINITION

A routing + structure setup is complete only if:

### Route Completeness
- [ ] All routes map to a screen
- [ ] All screens have a feature owner
- [ ] No orphaned routes (routes without screens)
- [ ] No orphaned screens (screens without routes)

### Layout Completeness
- [ ] All route groups have correct layout
- [ ] Layouts are not duplicated in screens
- [ ] Navigation is consistent across all screens
- [ ] Active states work correctly

### State Completeness
- [ ] Every screen has loading state
- [ ] Every screen has empty state
- [ ] Every screen has error state
- [ ] No blank screens exist

### Navigation Completeness
- [ ] Deep links work
- [ ] Back/forward buttons work
- [ ] No dead ends (every screen has next action)
- [ ] Route guards work correctly

### AI Integration Completeness
- [ ] AI actions belong to features
- [ ] AI never auto-navigates
- [ ] Long AI tasks have status routes
- [ ] AI results have clear next steps

### Scalability
- [ ] Adding new features doesn't require route refactor
- [ ] Directory structure is predictable
- [ ] Naming is consistent
- [ ] Dependencies follow rules (no circular deps)

---

## EXAMPLE ROUTE MAP

### Public Routes (PublicLayout)
```
/                           → LandingScreen
/features                   → FeaturesScreen
/pricing                    → PricingScreen
/login                      → LoginScreen
/signup                     → SignupScreen
/reset-password             → ResetPasswordScreen
```

---

### Protected Routes (AppLayout)
```
/dashboard                  → DashboardScreen
/leads                      → LeadsListScreen
/leads/:id                  → LeadDetailScreen
/leads/:id/edit             → LeadEditScreen
/calls                      → CallsListScreen
/calls/analyze              → CallAnalyzeScreen
/calls/:id/analyzing        → CallAnalyzingStatusScreen
/calls/:id/results          → CallAnalysisResultsScreen
/workflows                  → WorkflowsListScreen
/workflows/:id              → WorkflowDetailScreen
/search                     → SearchScreen (with ?q=)
/settings                   → SettingsScreen
```

---

### Wizard Routes (WizardLayout)
```
/onboarding/step-1          → OnboardingStep1Screen
/onboarding/step-2          → OnboardingStep2Screen
/onboarding/step-3          → OnboardingStep3Screen
/project/create/step-1      → ProjectCreateStep1Screen
/project/create/step-2      → ProjectCreateStep2Screen
```

---

### Error Routes (ErrorLayout)
```
/404                        → NotFoundScreen
/500                        → ServerErrorScreen
/offline                    → OfflineScreen
```

---

**Status**: Active rule as of 2024-12-20  
**Enforcement**: Mandatory for all routes and features  
**Violations**: Must be fixed before merge

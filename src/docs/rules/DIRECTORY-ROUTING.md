# RULE — Directory Structure & Routing

**Purpose**: Define how the project is structured and how routing works  
**Status**: Non-Negotiable  
**Applies To**: All routes, screens, features, components

---

## CORE PRINCIPLE

**Structure follows user journeys, not developer preference.**  
Every route maps to **one screen, one purpose, one primary action**.

---

## DIRECTORY RULES (NON-NEGOTIABLE)

### Top-Level Structure

```
/routes/          → route definitions, guards, and grouping
/layouts/         → route-level layouts only (public, app, wizard)
/screens/         → full pages tied 1:1 to routes
/features/        → feature logic (data, actions, AI triggers)
/components/      → reusable UI only (no business logic)
/services/        → API + Edge Function clients
/ai/              → agents, prompts, schemas
/lib/             → shared utilities and config
/types/           → shared types
/assets/          → static files
/docs/            → rules and specs
```

---

### Ownership Rules

1. **Routes own screens**
   - Each route maps to exactly one screen
   - Routes define navigation structure
   - Routes control access (auth guards)

2. **Screens compose features**
   - Screens are layouts + features
   - Screens handle routing params
   - Screens define page-level states

3. **Features own logic, data, and AI actions**
   - Features contain business logic
   - Features make API calls
   - Features trigger AI agents
   - Features manage their own state

4. **Components never own logic**
   - Components are pure UI
   - Components receive props
   - Components emit events
   - No API calls, no AI, no complex state

5. **AI lives inside the feature that uses it**
   - AI agents are imported by features
   - AI prompts stored in `/ai/prompts/`
   - AI schemas stored in `/ai/schemas/`
   - Features orchestrate AI calls

**Rule of Thumb**: If you don't know where something belongs → it goes in `features/`.

---

## ROUTING RULES

### Route Design

- ✅ One route = one screen purpose
- ✅ Routes reflect **user workflows**, not technical structure
- ✅ Public, authenticated, and wizard routes are separated
- ✅ Layouts wrap routes, never duplicated inside screens
- ✅ URLs are human-readable and stable

### Route Examples

**Good**:
```
/login                    → LoginScreen
/dashboard                → DashboardScreen
/leads                    → LeadsListScreen
/leads/:id                → LeadDetailScreen
/leads/:id/edit           → LeadEditScreen
/calls/analyze            → CallAnalysisScreen
/workflows                → WorkflowsScreen
/workflows/:id            → WorkflowDetailScreen
```

**Bad**:
```
/main                     → Too generic
/page1                    → No semantic meaning
/user/profile/details     → Too nested
/dashboard/leads/list     → Redundant with /leads
```

---

### URL Structure

**Params** = Identity (required, part of resource)
```
/leads/:id                → Specific lead
/deals/:dealId            → Specific deal
/workflows/:workflowId    → Specific workflow
```

**Query Strings** = State (optional, filters, sorting)
```
/leads?status=active&sort=score    → Filtered list
/calls?date=2024-12&user=john      → Date + user filter
/search?q=fintech&limit=20         → Search query
```

**Never**:
```
/leads/123                → Hardcoded IDs (use params)
/leads?id=123             → Identity in query string
/dashboard?page=leads     → Routes in query string
```

---

### Navigation Control

**Rule**: No hidden navigation; UI controls where users go next

**Good**:
- Button with `onClick={() => navigate('/leads')}`
- Link with `to="/leads/:id"`
- Form submit → navigate to result screen
- AI completion → show "View Results" button

**Bad**:
- Auto-redirect after 3 seconds
- AI auto-navigates to next screen
- Background process changes route
- Nested routes without UI indication

---

## LAYOUT RULES

### Layout Types

1. **Public Layout** → Marketing, entry, auth
   - No authentication required
   - Minimal navigation
   - Footer with legal links
   - Examples: Landing page, login, signup

2. **App Layout** → Dashboards, data, actions
   - Authentication required
   - Full navigation (sidebar + header)
   - User menu, notifications
   - Examples: Dashboard, leads, calls, workflows

3. **Wizard Layout** → Multi-step flows
   - Authentication optional (depends on wizard)
   - Progress indicator
   - Back/Next navigation
   - Examples: Onboarding, project brief wizard

---

### Layout Responsibilities

**Layouts Define**:
- Navigation structure (sidebar, header)
- User context (avatar, logout)
- Breadcrumbs (if applicable)
- Global actions (command bar, notifications)

**Layouts Do NOT**:
- Contain business logic
- Make API calls
- Define screen content
- Duplicate UI inside screens

---

### Navigation Clarity

**User Always Knows**:
1. **Where they are** (active nav item, breadcrumbs, page title)
2. **What to do next** (clear CTAs, next steps)
3. **How to go back** (back button, breadcrumbs, cancel)

**Example**:
```
App Layout
├── Sidebar (always visible)
│   ├── Dashboard (active if on /dashboard)
│   ├── Leads (active if on /leads*)
│   ├── Calls (active if on /calls*)
│   └── Workflows
├── Header
│   ├── Breadcrumbs: Dashboard > Leads > Acme Corp
│   ├── Command Bar (Cmd+K)
│   └── User Menu
└── Screen Content
    └── /leads/:id → LeadDetailScreen
```

---

## AI + ROUTING RULE

### Core Principle
**AI never changes routes on its own.**

### AI Flow Patterns

#### Pattern 1: Inline Result
**Scenario**: Quick AI task (enrichment, suggestion)

```
User clicks "Enrich Lead"
  → AI runs (thinking state shown inline)
  → Result appears on same screen
  → No navigation
```

**Route**: No change

---

#### Pattern 2: Modal Result
**Scenario**: Medium AI task (call analysis, email draft)

```
User uploads call recording
  → Modal opens with thinking state
  → AI analyzes call
  → Results shown in modal
  → User can edit/approve
  → User clicks "Save" or "Close"
```

**Route**: No change (modal state in URL optional: `?modal=call-analysis`)

---

#### Pattern 3: Dedicated Result Screen
**Scenario**: Long AI task (deep research, workflow execution)

```
User starts deep research
  → Navigate to /research/:id/status
  → Show progress (thinking state)
  → AI completes
  → Show results on /research/:id/results
  → User can navigate back or forward
```

**Route**: Changes, but user-initiated

---

### AI Action Routing Rules

1. **AI outputs always lead to a clear next screen**
   - "View Full Analysis" button
   - "Go to Lead Profile" link
   - "See All Actions" button

2. **Long AI tasks route to a status or results screen**
   - Don't keep user on same screen waiting
   - Navigate to dedicated screen with progress
   - Show estimated completion time

3. **AI actions belong to the feature owning the screen**
   - `/features/lead-enrichment/` owns enrichment AI
   - `/features/call-analysis/` owns call analysis AI
   - Feature imports AI agent, calls it, handles result

---

## STATES (MANDATORY)

### Required States Per Screen

Every route-level screen must define:

#### 1. Loading State
**When**: Data is being fetched, AI is thinking, action is processing

**Must Show**:
- Skeleton loaders OR spinner
- Context message ("Loading leads...", "Analyzing call...")
- No blank white screen

**Example**:
```tsx
if (isLoading) {
  return <LoadingSkeleton message="Loading leads..." />;
}
```

---

#### 2. Empty State
**When**: No data exists (zero leads, no calls, first-time user)

**Must Show**:
- Explanation (why empty)
- Primary action (how to add data)
- Visual (icon or illustration)

**Example**:
```tsx
if (leads.length === 0) {
  return (
    <EmptyState
      title="No leads yet"
      message="Add your first lead to get started"
      action={<Button onClick={openAddLeadModal}>Add Lead</Button>}
      icon={<Users />}
    />
  );
}
```

---

#### 3. Error State
**When**: API fails, AI times out, permission denied

**Must Show**:
- Error message (user-friendly)
- Recovery action (retry, go back, contact support)
- Error code (for debugging)

**Example**:
```tsx
if (error) {
  return (
    <ErrorState
      title="Failed to load leads"
      message="We couldn't fetch your leads. Please try again."
      action={<Button onClick={retry}>Retry</Button>}
      errorCode={error.code}
    />
  );
}
```

---

### State Priority

```
Error > Loading > Empty > Data
```

**Logic**:
```tsx
function LeadsScreen() {
  if (error) return <ErrorState />;
  if (isLoading) return <LoadingSkeleton />;
  if (leads.length === 0) return <EmptyState />;
  return <LeadsList leads={leads} />;
}
```

**Rule**: No blank screens. Ever.

---

## VALIDATION CHECKLIST

This rule is followed if:

### Route Validation
- [ ] Every URL maps to a screen and feature owner
- [ ] Deep links work (can share URL, user lands on correct screen)
- [ ] Back/forward browser navigation works
- [ ] No duplicate routes
- [ ] Route params are clearly defined

### Screen Validation
- [ ] Every screen has loading state
- [ ] Every screen has empty state
- [ ] Every screen has error state
- [ ] No blank screens (all states defined)
- [ ] Screen purpose is clear from URL

### Navigation Validation
- [ ] User always knows where they are (active nav item)
- [ ] User always knows what to do next (clear CTAs)
- [ ] User can always go back (back button or breadcrumbs)
- [ ] No dead-end screens
- [ ] No auto-navigation (user controls flow)

### Layout Validation
- [ ] Public routes use Public Layout
- [ ] Auth routes use App Layout
- [ ] Wizard routes use Wizard Layout
- [ ] Layouts not duplicated inside screens
- [ ] Navigation defined at layout level

### Feature Validation
- [ ] Features own their business logic
- [ ] Features own their AI agents
- [ ] Features make API calls (not components)
- [ ] Components are pure UI (no logic)
- [ ] AI never auto-navigates

### Scalability Validation
- [ ] New features can be added without refactoring routes
- [ ] New screens can be added without breaking navigation
- [ ] Route structure is predictable
- [ ] File organization is logical

**If a route or folder breaks these rules, it must be redesigned.**

---

## EXAMPLES

### ✅ Good Structure

```
/screens/
  LeadsListScreen.tsx       → /leads
  LeadDetailScreen.tsx      → /leads/:id
  CallAnalysisScreen.tsx    → /calls/analyze

/features/
  lead-enrichment/
    useLeadEnrichment.ts    → Hook
    enrichmentActions.ts    → API calls
    LeadEnrichmentAI.ts     → AI agent call
  call-analysis/
    useCallAnalysis.ts
    CallAnalysisAI.ts

/ai/
  agents/
    leadEnrichmentAgent.ts  → Gemini logic
    callAnalysisAgent.ts
  prompts/
    leadEnrichment.txt
    callAnalysis.txt
```

---

### ❌ Bad Structure

```
/pages/
  Index.tsx                 → Too generic
  Page1.tsx                 → No meaning
  LeadsListAndDetail.tsx    → Two purposes

/components/
  LeadCard.tsx
    - Contains API call        ❌
    - Contains AI logic        ❌
    - Makes navigation calls   ❌

/utils/
  everythingElse.ts         → Not a dumping ground

/ai/
  (empty - AI scattered everywhere)  ❌
```

---

## REFACTORING GUIDE

### If You Find

**Screen doing API calls**:
→ Move to feature hook (`useLeadData`)

**Component with business logic**:
→ Extract to feature (`features/lead-scoring/`)

**AI logic in component**:
→ Move to `/ai/agents/` and call from feature

**Route without states**:
→ Add loading, empty, error states

**Nested route mess**:
→ Flatten to reflect user journey

---

## ENFORCEMENT

### Before Committing
- [ ] All routes follow naming convention
- [ ] All screens have 3 states (loading, empty, error)
- [ ] No components contain business logic
- [ ] AI agents live in `/ai/`
- [ ] Features own their logic

### Before Deploying
- [ ] Test deep links
- [ ] Test back/forward navigation
- [ ] Test all screen states
- [ ] Verify no blank screens
- [ ] Verify layouts applied correctly

### Before Adding Feature
- [ ] Define route first
- [ ] Create screen with states
- [ ] Create feature folder
- [ ] Move AI to `/ai/agents/`
- [ ] Update navigation

---

**Status**: Active rule as of 2024-12-20  
**Violations**: Must be fixed before merge  
**Questions**: See `/docs/rules/README.md`

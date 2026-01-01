# Dashboard System - Master Summary
## Luxury AI CRM Platform Documentation Index

**Last Updated:** January 1, 2026  
**Total Pages:** 12 screens (9 implemented, 3 planned)  
**Design System:** FashionOS Quiet Luxury  
**Status:** Production UI Ready, AI Integration Pending

---

## 📋 MASTER PROGRESS TRACKER

### Implementation Order & Status

| # | Route | Screen Name | Status | UI | Backend | AI | Doc |
|---|-------|-------------|--------|----|---------|----|-----|
| 1 | `/wizard` | Lead Capture Wizard | ✅ Complete | ✅ | ✅ | ✅ | 03 |
| 2 | `/proposal` | AI Proposal View | ✅ Complete | ✅ | ✅ | ✅ | 04 |
| 3 | `/dashboard` | Client Dashboard | ✅ Complete | ✅ | ✅ | ⚠️ | 05 |
| 4 | `/dashboard-v2/main` | Admin Main Dashboard | ✅ UI Ready | ✅ | ⚠️ | ❌ | 06 |
| 5 | `/dashboard-v2/blueprints` | Blueprint Management | ✅ UI Ready | ✅ | ❌ | ❌ | 07 |
| 6 | `/dashboard-v2/projects` | Project Tracking | ✅ UI Ready | ✅ | ❌ | ❌ | 08 |
| 7 | `/dashboard-v2/tasks` | Task Management | ✅ UI Ready | ✅ | ❌ | ❌ | 09 |
| 8 | `/dashboard-v2/automations` | Automation Config | ✅ UI Ready | ✅ | ❌ | ❌ | 10 |
| 9 | `/dashboard-v2/settings` | Account Settings | ✅ UI Ready | ✅ | ❌ | ❌ | 11 |
| 10 | `/app/leads` | Lead Intelligence | 🔮 Planned | ⚠️ | ❌ | ❌ | 12 |
| 11 | `/whatsapp` | WhatsApp Automation | 🔮 Planned | ❌ | ❌ | ❌ | 13 |
| 12 | Global `⌘K` | Command Bar | 🔮 Planned | ❌ | ❌ | ❌ | 14 |

**Legend:**  
✅ Complete | ⚠️ Partial | ❌ Not Started | 🔮 Planned

---

## 🗺️ SCREEN DIRECTORY

### By User Type

| Screen | Route | Purpose | User Type | Layout Type |
|--------|-------|---------|-----------|-------------|
| **Lead Capture Wizard** | `/wizard` | Capture structured lead data | Prospect/Client | 4-step form |
| **AI Proposal View** | `/proposal` | Display generated proposal | Prospect/Client | Document view |
| **Client Dashboard** | `/dashboard` | Track project progress | Client | Header + 7 tabs + sidebar |
| **Admin Main Dashboard** | `/dashboard-v2/main` | Operations activity hub | Admin/Team | 3-panel |
| **Blueprint Management** | `/dashboard-v2/blueprints` | Manage project templates | Admin/PM | 3-panel + table |
| **Project Tracking** | `/dashboard-v2/projects` | Monitor all projects | Admin/Team | 3-panel + cards |
| **Task Management** | `/dashboard-v2/tasks` | Manage team tasks | Admin/Team | 3-panel + table |
| **Automation Config** | `/dashboard-v2/automations` | Configure AI automations | Admin | 3-panel + cards |
| **Account Settings** | `/dashboard-v2/settings` | User preferences | Admin/Team | Full-width form |
| **Lead Intelligence** | `/app/leads` | CRM lead management | Admin/Sales | 3-panel + table |
| **WhatsApp Hub** | `/whatsapp` | Message automation | Admin/Sales | Chat interface |
| **Command Bar** | Global `⌘K` | Natural language query | All users | Modal overlay |

### By Layout Type

| Layout | Screens | Characteristics |
|--------|---------|----------------|
| **3-Panel** | Main, Blueprints, Projects, Tasks, Automations, Leads | Left nav (256px) + Center work (fluid) + Right AI (320px) |
| **Header + Tabs** | Client Dashboard | Sticky header + 7 tabs + Right sidebar (320px) |
| **Document View** | Proposal | Full-width reading experience |
| **Multi-Step Form** | Wizard | Centered form (max 640px) with progress |
| **Modal Overlay** | Command Bar | Centered search interface |
| **Chat Interface** | WhatsApp | Left conversations + Center chat |
| **Full-Width Form** | Settings | Single-column form sections |

---

## 🤖 AI AGENTS OVERVIEW

### Agent Directory

| Agent Name | Type | Purpose | Triggers On | Used In Screens | Status |
|------------|------|---------|-------------|-----------------|--------|
| **Proposal Generator** | Planner | Generate complete proposals | Wizard completion | Wizard, Proposal | ✅ Active |
| **Insight Extractor** | Analyst | Extract goals/risks from text | Wizard step submission | Wizard, Dashboard | ✅ Active |
| **Blueprint Generator** | Planner | Create project blueprints | User request | Blueprints | 🔮 Planned |
| **Lead Scorer** | Scorer | Score lead quality (0-100) | Lead created/enriched | Leads, Dashboard | 🔮 Planned |
| **Lead Enricher** | Retriever | Enrich company data | Lead created | Leads | 🔮 Planned |
| **WhatsApp Bot** | Content/Comms | Handle messages, qualify leads | Message received | WhatsApp | 🔮 Planned |
| **Workflow Optimizer** | Optimizer | Improve automation workflows | Weekly scheduled | Automations | 🔮 Planned |
| **Sentiment Monitor** | Analyst | Track client emotions | Communication logged | Dashboard, Leads | 🔮 Planned |
| **Task Assigner** | Ops Automation | Auto-assign tasks to team | Task created (no assignee) | Tasks | 🔮 Planned |
| **Approval Controller** | Controller | Gate AI write actions | Before any write action | All screens | 🔮 Planned |
| **RAG Retriever** | Retriever | Find relevant internal docs | Command Bar query | Command Bar | 🔮 Planned |
| **Action Orchestrator** | Orchestrator | Coordinate multi-agent flows | Complex user intent | Command Bar, Chat | 🔮 Planned |

### Agent by Screen

| Screen | Agents Used | Primary Agent | Status |
|--------|-------------|---------------|--------|
| Wizard | Proposal Generator, Insight Extractor | Proposal Generator | ✅ |
| Proposal | Proposal Generator | Proposal Generator | ✅ |
| Client Dashboard | Insight Extractor, Sentiment Monitor | Insight Extractor | ⚠️ |
| Main Dashboard | None (displays data) | N/A | ❌ |
| Blueprints | Blueprint Generator | Blueprint Generator | 🔮 |
| Projects | Sentiment Monitor | Sentiment Monitor | 🔮 |
| Tasks | Task Assigner | Task Assigner | 🔮 |
| Automations | Workflow Optimizer, Approval Controller | Workflow Optimizer | 🔮 |
| Settings | None | N/A | ❌ |
| Leads | Lead Scorer, Lead Enricher, Sentiment Monitor | Lead Scorer | 🔮 |
| WhatsApp | WhatsApp Bot, Lead Scorer, Sentiment Monitor | WhatsApp Bot | 🔮 |
| Command Bar | RAG Retriever, Action Orchestrator | Action Orchestrator | 🔮 |

---

## 🧠 GEMINI 3 FEATURES MAP

### Features by Model

| Gemini Feature | Model | Used In | Purpose | Status |
|----------------|-------|---------|---------|--------|
| **Text Generation** | Pro | Wizard, Proposal, Blueprints | Generate proposals, blueprints, content | ✅ |
| **Structured Outputs** | Flash | Wizard, Leads | Extract structured data (goals, scores) | ✅ |
| **Gemini Thinking** | Pro | Blueprints, Projects | Deep reasoning for complex planning | 🔮 |
| **Function Calling** | Pro | Command Bar, Automations | Execute CRM actions | 🔮 |
| **URL Context** | Flash | Leads | Scrape company websites | 🔮 |
| **Deep Research** | Pro | Projects, Leads | Research competitors, market data | 🔮 |
| **Google Search Grounding** | Flash | Command Bar, Chat | Real-time web data | 🔮 |
| **Google Maps Grounding** | Flash | Leads | Location intelligence | 🔮 |
| **RAG** | Flash | Command Bar | Query internal knowledge base | 🔮 |
| **Image Generation** | Imagen 3 Fast | Proposals, Marketing | Generate visuals | 🔮 |
| **Interactions API** | Flash | Command Bar, WhatsApp | Conversational UI | 🔮 |
| **Multimodal Input** | Pro | Dashboard (Files tab) | Analyze uploaded docs/images | 🔮 |

### Model Usage Strategy

| Model | Primary Use Cases | Characteristics | Cost Tier |
|-------|-------------------|----------------|-----------|
| **Gemini 3 Pro** | Proposal generation, deep research, complex reasoning | High quality, slower, thinking mode | Premium |
| **Gemini 3 Flash** | Real-time queries, structured extraction, grounding | Fast, efficient, real-time | Standard |
| **Gemini Thinking** | Blueprint generation, strategic planning | Extended reasoning, multi-step | Premium+ |
| **Imagen 3 Fast** | Visual generation for proposals | Quick image generation | Standard |
| **Imagen 3 Pro** | High-quality marketing visuals | Premium quality images | Premium |

---

## 🎨 GLOBAL UX RULES

### Design System: FashionOS Quiet Luxury

**Typography:**
- Headlines/Stats: Playfair Display (serif) - 48px/40px/32px/24px
- Body/Utility: Inter (sans-serif) - 16px/14px/12px/10px
- Labels: 10px, font-black, uppercase, tracking-[0.2em]

**Color Palette:**
- Primary text: Pure black (#000000)
- Secondary text: Zinc-600 (#52525B)
- Tertiary text: Zinc-400 (#A1A1AA)
- AI accent: Indigo-500 (#6366F1)
- Action accent: Orange-500 (#FF6A3D) [Client Dashboard only]
- Success: Emerald-500 (#10B981)
- Background: White (#FFFFFF)
- Surface: Off-white (#FCFCFC)
- Border: Gray-200 (#EEEEEE)

**Spacing Scale:**
- XXL: 120px (section padding desktop)
- XL: 80px (section padding tablet)
- L: 48px (card padding, generous whitespace)
- M: 32px (content spacing)
- S: 24px (element spacing)
- XS: 16px (tight spacing)
- XXS: 8px (minimal spacing)

**Border Radius:**
- Primary cards: 40px (Maison style)
- Secondary cards: 32px
- Buttons: Full (pill shape)
- Inputs: 16px (rounded-2xl)
- Modals: 32px

**Layout Measurements:**
- Left Nav: 256px (w-64)
- Right AI Panel: 320px (w-80) | Collapsed: 56px (w-14)
- Top Strip: 64px (h-16)
- Max Content Width: 1400px
- Card Padding: 40px (p-10) desktop / 24px (p-6) mobile

---

### Empty States (Standard Pattern)

**Components:**
- Icon circle: 80px diameter, gray-50 background
- Icon: 40px, zinc-300 color
- Title: 18px, font-bold, zinc-900
- Description: 14px, zinc-500, max-width 400px, centered
- CTA button: Primary or outline
- Optional: Illustration or onboarding steps

**Examples:**
- No files: "Upload your first file"
- No tasks: "Create your first task"
- No automations: "Set up your first automation"

---

### Loading States (Standard Pattern)

**Types:**

1. **Full-Screen Loading** (Wizard processing)
   - Animated icon/logo
   - "Thinking" message
   - Progress indicator
   - Expected time estimate

2. **Skeleton Loaders** (Table/card loading)
   - Gray-200 base + animated pulse
   - Match final content shape
   - Show layout structure

3. **Inline Spinners** (Button actions)
   - 16px spinner in button
   - Button disabled state
   - "Processing..." text

---

### Error States (Standard Pattern)

**Components:**
- Icon: AlertCircle, rose-500
- Title: "Something went wrong"
- Description: User-friendly error message
- CTA: "Try again" button
- Optional: "Contact support" link

**Error Types:**
- Network error: "Connection lost. Check your internet."
- AI error: "AI processing failed. Please try again."
- Validation error: Inline below field
- Permission error: "You don't have access to this."

---

### Approval Gates (AI Actions)

**Trigger:** Any AI-initiated write action (create/update/delete)

**Modal Structure:**
- Backdrop: bg-zinc-900/50, backdrop-blur-sm
- Content: White card, rounded-[32px], p-10, max-width 500px
- Icon: Top, in colored circle (64px)
- Title: "Confirm AI Action" (text-2xl, Playfair)
- Description: Plain text explanation of action
- Preview card: What will be created/changed
- Buttons: "Approve" (primary) + "Edit" (outline) + "Reject" (ghost)

**Approval Required For:**
- Creating tasks, projects, leads
- Updating client data
- Sending messages
- Scheduling events
- Changing automation settings

**No Approval Needed For:**
- Generating proposals (read-only)
- Scoring leads (read-only)
- Extracting insights (read-only)
- Search/query operations

---

### Responsive Breakpoints

| Breakpoint | Min Width | Layout Changes |
|------------|-----------|----------------|
| **Mobile** | 0px | 1-column, nav → bottom bar, AI panel → drawer |
| **Tablet** | 768px | 2-column where applicable, nav → icon rail |
| **Desktop** | 1200px | Full 3-panel layout, all features visible |
| **Large Desktop** | 1600px | Wider content, more breathing room |

**Touch Targets:** Minimum 44px × 44px  
**Focus States:** 2px solid outline, indigo-500  
**Keyboard Navigation:** Full tab order, visible focus indicators

---

### Accessibility Baseline

**Required:**
- ✅ WCAG AA contrast (4.5:1 text, 3:1 UI)
- ✅ Keyboard navigation (Tab, Shift+Tab, Enter, Esc)
- ✅ Focus indicators (visible outline)
- ✅ Alt text on images
- ✅ ARIA labels on icons/buttons
- ✅ Semantic HTML (h1, nav, main, aside)
- ✅ Screen reader friendly

**Testing:**
- Lighthouse accessibility score: 95+
- Keyboard-only navigation test
- Screen reader test (VoiceOver/NVDA)
- Color blindness check

---

## 🔄 GLOBAL WORKFLOWS

### Workflow 1: AI Action Approval Flow

```
User requests action
  ↓
AI analyzes intent
  ↓
If write action → Show approval modal
  ↓
User decides: Approve / Edit / Reject
  ↓
If Approve → Execute action → Log → Notify
If Edit → Show edit form → User adjusts → Approve
If Reject → Cancel → Log rejection → Show feedback form
```

### Workflow 2: Data Persistence Flow

```
User input (form/chat/wizard)
  ↓
Frontend validation
  ↓
Store in Context (immediate)
  ↓
If AI processing needed → Queue agent
  ↓
Agent processes → Returns output
  ↓
Store output in Context
  ↓
Update UI (real-time if possible)
  ↓
Sync to backend (if connected)
```

### Workflow 3: Error Recovery Flow

```
Action fails
  ↓
Detect error type (network/AI/validation)
  ↓
Show user-friendly error message
  ↓
Offer retry option
  ↓
If retry successful → Continue flow
If retry fails → Show "Contact support" option
  ↓
Log error details for debugging
```

---

## 📊 IMPLEMENTATION PRIORITIES

### Phase 1: Core Functionality (✅ Complete)
- Wizard (4 steps)
- Proposal generation
- Client Dashboard (7 tabs)
- Admin Dashboard V2 (UI shell)

### Phase 2: AI Integration (Current Sprint)
- Proposal Generator agent (active)
- Insight Extractor agent (active)
- Blueprint Generator agent
- Lead Scorer agent

### Phase 3: Advanced Features (Q1 2026)
- Command Bar (⌘K)
- WhatsApp automation
- Lead Intelligence CRM
- Task auto-assignment
- Sentiment monitoring

### Phase 4: Optimization (Q2 2026)
- Workflow optimizer
- RAG retrieval
- Function calling
- Multimodal input
- Real-time collaboration

---

## 📚 DOCUMENT INDEX

| Doc # | Filename | Screen | Status |
|-------|----------|--------|--------|
| 00 | `00-summary.md` | Master Summary | ✅ |
| 01 | `01-client-dashboard.md` | System Overview | ✅ |
| 02 | `02-ai-platform-system-plan.md` | Platform Plan | ✅ |
| 03 | `03-wizard.md` | Lead Capture Wizard | ⏳ |
| 04 | `04-proposal.md` | AI Proposal View | ⏳ |
| 05 | `05-dashboard.md` | Client Dashboard | ⏳ |
| 06 | `06-main.md` | Admin Main Dashboard | ⏳ |
| 07 | `07-blueprints.md` | Blueprint Management | ⏳ |
| 08 | `08-projects.md` | Project Tracking | ⏳ |
| 09 | `09-tasks.md` | Task Management | ⏳ |
| 10 | `10-automations.md` | Automation Config | ⏳ |
| 11 | `11-settings.md` | Account Settings | ⏳ |
| 12 | `12-leads.md` | Lead Intelligence | ⏳ |
| 13 | `13-whatsapp.md` | WhatsApp Automation | ⏳ |
| 14 | `14-command-bar.md` | Command Bar | ⏳ |

---

## ✅ PRODUCTION READINESS CHECKLIST

### Global Requirements (All Screens)

**UI/UX:**
- [ ] Empty states designed
- [ ] Loading states designed
- [ ] Error states designed
- [ ] Responsive breakpoints defined
- [ ] Touch targets ≥44px
- [ ] Focus states visible
- [ ] Keyboard navigation works

**AI Integration:**
- [ ] Agent inputs/outputs defined
- [ ] Approval gates implemented
- [ ] Error handling defined
- [ ] Fallback content ready
- [ ] AI reasoning displayed

**Data & Logic:**
- [ ] Data sources identified
- [ ] Persistence strategy defined
- [ ] Validation rules documented
- [ ] Audit trail visible
- [ ] Export/backup options

**Performance:**
- [ ] Page load <2s
- [ ] AI response <30s
- [ ] Skeleton loaders during load
- [ ] Optimistic UI updates
- [ ] Infinite scroll (if applicable)

**Accessibility:**
- [ ] WCAG AA compliant
- [ ] Screen reader tested
- [ ] Keyboard navigation tested
- [ ] Color contrast verified
- [ ] Alt text on images

---

**END OF MASTER SUMMARY**

*This document serves as the index and global rules reference for all individual screen documentation.*

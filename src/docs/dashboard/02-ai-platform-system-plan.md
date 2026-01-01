# AI Platform System Plan - Production Ready
## Luxury AI CRM - Complete System Architecture

**Document Type:** System Planning & Architecture  
**Scope:** Full AI Platform (Chatbots, Wizards, Screens, Agents, Automations)  
**Status:** Implementation Ready  
**Date:** January 1, 2026

---

## 📊 SUMMARY TABLES

### Screens & Features Overview

| Screen | Route | Purpose | Core Features | AI Features | Status |
|--------|-------|---------|---------------|-------------|--------|
| **Wizard** | `/wizard` | Lead capture | 4-step input, AI preview | Proposal generation, insight extraction | ✅ Complete |
| **Proposal** | `/proposal` | AI-generated proposal | Timeline, budget, phases | Gemini 3 Pro generation, thinking mode | ✅ Complete |
| **Client Dashboard** | `/dashboard` | Project tracking | 7 tabs, status, timeline | AI notes, risk analysis, next steps | ✅ Complete |
| **Admin Dashboard** | `/dashboard-v2` | Operations hub | 6 pages, 3-panel layout | 5 AI tabs, agents, automations | ✅ Complete |
| **Main Dashboard** | `/dashboard-v2/main` | Activity feed | Stats, recent activity | AI recommendations, quick insights | ✅ Complete |
| **Blueprints** | `/dashboard-v2/blueprints` | Template management | Table view, version control | Blueprint generator, optimizer | ✅ UI Only |
| **Projects** | `/dashboard-v2/projects` | Project tracking | Cards, progress, team | Predictive completion, risk alerts | ✅ UI Only |
| **Tasks** | `/dashboard-v2/tasks` | Task management | Filters, status, priority | Auto-assignment, smart scheduling | ✅ UI Only |
| **Automations** | `/dashboard-v2/automations` | Automation config | Enable/pause, metrics | Trigger detection, self-optimization | ✅ UI Only |
| **Settings** | `/dashboard-v2/settings` | Account management | Profile, notifications | AI preferences, learning controls | ✅ UI Only |
| **Command Bar** | Global (⌘K) | Natural language query | Search, navigation | NLP parsing, context-aware results | 🔮 Planned |
| **WhatsApp Hub** | `/whatsapp` | Message automation | Chat interface, templates | 24/7 auto-reply, lead qualification | 🔮 Planned |
| **Lead Intelligence** | `/app/leads` | Lead management | CRM table, filters | Auto-scoring, enrichment, prioritization | 🔮 Planned |

### AI Agents Overview

| Agent | Type | Purpose | Input | Output | Runs On | Status |
|-------|------|---------|-------|--------|---------|--------|
| **Proposal Generator** | Planner | Create project proposals | Lead data | Proposal doc | Wizard completion | ✅ Active |
| **Insight Extractor** | Analyst | Extract key insights | Lead responses | Goals, risks, notes | Wizard steps | ✅ Active |
| **Blueprint Generator** | Planner | Create project blueprints | Brief description | Tasks, timeline, resources | Blueprints page | 🔮 Planned |
| **Lead Scorer** | Scorer | Score lead quality | Lead data | Score (0-100) + rationale | Lead creation | 🔮 Planned |
| **Lead Enricher** | Retriever | Enrich lead data | Company name | Industry, size, funding | Lead import | 🔮 Planned |
| **WhatsApp Bot** | Content/Comms | Handle inquiries | Message text | Reply + actions | Message received | 🔮 Planned |
| **Workflow Optimizer** | Optimizer | Improve workflows | Success patterns | Updated workflow | Weekly | 🔮 Planned |
| **Sentiment Monitor** | Analyst | Track client emotions | Communication logs | Sentiment score + flags | Real-time | 🔮 Planned |
| **Task Assigner** | Ops Automation | Assign tasks | Task + team data | Assignment + notification | Task created | 🔮 Planned |
| **Approval Controller** | Controller | Gate AI actions | Action proposal | Approved/rejected | Before execution | 🔮 Planned |
| **RAG Retriever** | Retriever | Find relevant docs | Query | Relevant context | Command bar | 🔮 Planned |
| **Action Orchestrator** | Orchestrator | Coordinate agents | User intent | Agent sequence | Multiple | 🔮 Planned |

### AI Features by Google Gemini Model

| Feature | Model | Use Case | Screen | Implementation | Status |
|---------|-------|----------|--------|----------------|--------|
| **Proposal Generation** | Gemini 3 Pro | Generate complete proposals | Wizard, Proposal | Text Generation | ✅ Active |
| **Thinking Mode** | Gemini Thinking | Deep reasoning for complex planning | Wizard, Blueprints | Extended thinking | 🔮 Planned |
| **Structured Output** | Gemini 3 Flash | Extract structured data | Wizard, Lead forms | Structured Outputs | ✅ Active |
| **Function Calling** | Gemini 3 Pro | Execute CRM actions | Command Bar, Automations | Function Calling | 🔮 Planned |
| **URL Context** | Gemini 3 Flash | Analyze website/LinkedIn | Lead enrichment | URL Context | 🔮 Planned |
| **Deep Research** | Gemini 3 Pro | Research competitors/market | Projects, Blueprints | Deep Research | 🔮 Planned |
| **Google Search** | Gemini 3 Flash | Real-time data grounding | Command Bar, Chat | Search Grounding | 🔮 Planned |
| **Google Maps** | Gemini 3 Flash | Location intelligence | Lead enrichment | Maps Grounding | 🔮 Planned |
| **RAG** | Gemini 3 Flash | Query internal docs | Command Bar, Chat | RAG API | 🔮 Planned |
| **Image Generation** | Imagen 3 Fast | Generate visuals | Proposals, Marketing | Image Generation | 🔮 Planned |
| **Multimodal** | Gemini 3 Pro | Analyze documents/images | Files tab, Uploads | Multimodal input | 🔮 Planned |
| **Interactions API** | Gemini 3 Flash | Conversational UI | Chat, Command Bar | Interactions API | 🔮 Planned |

---

## 🗺️ SYSTEM MAP

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        ENTRY POINTS                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Wizard (/wizard)           → Capture Lead Data              │
│  2. Command Bar (⌘K)           → Natural Language Query         │
│  3. WhatsApp                   → External Message Entry         │
│  4. Direct Login (/login)      → Dashboard Access               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        CORE SCREENS                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Wizard → Processing → Proposal → Client Dashboard              │
│                                                                  │
│  Login → Admin Dashboard V2 → [6 Pages]                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        DATA FLOW                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  User Input → AI Processing → Stored Data → Dashboard Display   │
│                                                                  │
│  ┌────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐      │
│  │ Wizard │──>│  Gemini  │──>│ Context  │──>│Dashboard │      │
│  │  Form  │   │   Agent  │   │  Store   │   │   View   │      │
│  └────────┘   └──────────┘   └──────────┘   └──────────┘      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Screen Routing Map

```
/
├── /wizard (4 steps)
│   └── /wizard/step1 → Company Info
│   └── /wizard/step2 → Project Goals  
│   └── /wizard/step3 → Services & Timeline
│   └── /wizard/step4 → Contact & Preferences
│   └── /processing → AI generation (loading)
│   └── /proposal → Generated proposal view
│
├── /dashboard (Client view - 7 tabs)
│   └── Overview, Proposal, Requirements, Timeline, Deliverables, Files, Chat
│
├── /dashboard-v2 (Admin view)
│   ├── /main → Activity feed & stats
│   ├── /blueprints → Template management
│   ├── /projects → Project tracking
│   ├── /tasks → Task management
│   ├── /automations → Automation config
│   └── /settings → Account settings
│
├── /app/leads (CRM)
├── /whatsapp (Messages)
└── /login (Auth)
```

---

## 📱 SCREENS & DASHBOARDS

### 1. WIZARD SCREEN (`/wizard`)

**Purpose:** Capture structured lead data to feed AI proposal generation

**Layout Type:** Centered single-column form with progress indicator

**Key Sections:**
- Progress bar (1/4, 2/4, 3/4, 4/4)
- Step title & description
- Form fields (contextual per step)
- Navigation buttons (Back, Next)
- AI preview badge (shows AI is analyzing)

**Core Features (V1):**
- 4-step progressive disclosure
- Real-time validation
- AI insight extraction per step
- Auto-save to context
- Completion redirect to proposal

**Advanced Features (Post-MVP):**
- Multi-language support
- Voice input for responses
- Smart field pre-fill (URL scraping)
- Conditional logic (skip irrelevant steps)
- Progress persistence (save & resume)

**Data Shown:**
- Step 1: Company name, website
- Step 2: Project goals (multi-select + text)
- Step 3: Services needed, timeline, budget range
- Step 4: Contact name, email, phone

**Data Source:** User input → Lead Context → AI analysis

---

### 2. PROPOSAL SCREEN (`/proposal`)

**Purpose:** Display AI-generated project proposal for review and download

**Layout Type:** Full-width document view with sidebar

**Key Sections:**
- Hero header (project title, company)
- Executive summary
- Goals & objectives
- Proposed solution
- Timeline & phases
- Budget breakdown
- Deliverables list
- Next steps CTA

**Core Features (V1):**
- AI-generated content from wizard data
- Phase-by-phase breakdown
- Budget range display
- Download PDF button
- "Accept Proposal" CTA

**Advanced Features (Post-MVP):**
- Live editing with AI suggestions
- Alternative proposals (A/B versions)
- Interactive timeline drag-to-adjust
- Pricing calculator
- E-signature integration
- Custom branding per client

**Data Shown:**
- Generated proposal document
- Timeline (weeks/months)
- Budget range ($XX,XXX - $XX,XXX)
- Phases with durations
- Deliverables count
- AI confidence score

**Data Source:** Gemini 3 Pro (proposal generator agent)

---

### 3. CLIENT DASHBOARD (`/dashboard`)

**Purpose:** Allow clients to track project progress and communicate with team

**Layout Type:** Header + Tabs + Content + Sidebar (3-section)

**Key Sections:**
- Sticky header (project name, status, actions)
- Tab navigation (7 tabs)
- Main content area (per tab)
- Right sidebar (metadata + AI notes)

**Core Features (V1):**
- 7 tabs: Overview, Proposal, Requirements, Timeline, Deliverables, Files, Chat
- Status dropdown (Draft/In Progress/Review/Completed)
- Project metadata display
- AI assistant notes sidebar
- Share project button
- Timeline visualization

**Advanced Features (Post-MVP):**
- Real-time collaboration
- File upload/download
- AI chat interface (full conversation)
- Task assignments visible to client
- Payment milestones
- Approval workflows
- Notification center

**Data Shown (per tab):**
- Overview: Summary, goals, proposal snapshot, timeline preview, quick actions
- Proposal: Full proposal document
- Requirements: Functional, technical, design requirements
- Timeline: Phases with dates and progress
- Deliverables: List with completion status
- Files: Uploaded documents (empty state)
- Chat: AI conversation history (empty state)

**Data Source:** Lead Context + Proposal Generator + Manual updates

---

### 4. ADMIN DASHBOARD V2 (`/dashboard-v2`)

**Purpose:** Internal operations hub for managing all projects, tasks, and AI automations

**Layout Type:** 3-panel (Left nav + Center work + Right AI)

**Key Sections:**
- Top context strip (64px, project name + badges + goal)
- Left navigation (256px, 6 menu items)
- Center work area (fluid, page-specific content)
- Right AI panel (320px collapsible, 5 tabs)

**Core Features (V1):**
- 6 pages: Main, Blueprints, Projects, Tasks, Automations, Settings
- AI intelligence panel with 5 tabs (Agents, Auto, Flows, Journeys, Examples)
- Collapsible right panel (320px → 56px)
- Context-aware recommendations
- Confirmation modals for AI actions
- Stats cards on each page

**Advanced Features (Post-MVP):**
- Real-time agent status
- Live automation logs
- Custom dashboard builder
- Multi-project view toggle
- Team collaboration features
- Analytics dashboard
- Export/import data

**Data Shown:**
- Main: Activity feed, stats (leads, automations, response time)
- Blueprints: Table of templates with versions
- Projects: Cards with progress, tasks, team
- Tasks: Filterable table (status, priority, assignee)
- Automations: Cards with metrics, enable/pause
- Settings: Profile, notifications, security

**Data Source:** Mock data (production integration pending)

---

### 5. COMMAND BAR (Global)

**Purpose:** Natural language interface to query CRM data and execute actions

**Layout Type:** Modal overlay (⌘K trigger)

**Key Sections:**
- Search input (large, centered)
- Suggested prompts (pills)
- Results area (categorized)
- Action preview cards
- Quick actions footer

**Core Features (V1):**
- Keyboard shortcut activation (⌘K / Ctrl+K)
- Natural language parsing
- Instant results (leads, projects, tasks)
- Navigation shortcuts
- Recent queries

**Advanced Features (Post-MVP):**
- AI-powered query understanding
- Function calling (execute CRM actions)
- Multi-step workflows via chat
- Context-aware suggestions
- Voice input
- Query history with favorites

**Data Shown:**
- Search results (leads, projects, tasks, docs)
- Suggested actions ("Create task", "Send proposal")
- Recent searches
- Quick links

**Data Source:** Gemini 3 Flash + RAG + CRM database

---

### 6. WHATSAPP HUB (`/whatsapp`)

**Purpose:** Manage automated WhatsApp conversations and lead qualification

**Layout Type:** Chat interface (left sidebar + center conversation)

**Key Sections:**
- Conversation list (left, 300px)
- Active conversation (center)
- Message input (bottom)
- Lead info sidebar (right, collapsible)
- Automation status indicator

**Core Features (V1):**
- Display all WhatsApp conversations
- Auto-reply indicator
- Manual takeover button
- Lead qualification status
- Quick replies (templates)

**Advanced Features (Post-MVP):**
- AI-powered responses (Gemini)
- Sentiment analysis per conversation
- Auto-scheduling (calendar integration)
- Media handling (images, PDFs)
- Bulk messaging
- Template builder
- Analytics dashboard

**Data Shown:**
- Conversation threads
- Lead name, number, status
- Message timestamps
- Auto-reply vs manual indicator
- Qualification score
- Next best action

**Data Source:** WhatsApp API + WhatsApp Bot Agent + Lead Context

---

### 7. LEAD INTELLIGENCE (`/app/leads`)

**Purpose:** CRM table with AI-powered lead scoring and enrichment

**Layout Type:** Data table with filters and detail panel

**Key Sections:**
- Filter bar (top)
- Data table (center)
- Lead detail panel (right slide-out)
- Bulk actions bar
- Stats cards (top)

**Core Features (V1):**
- Table view (name, company, status, score, date)
- Sortable columns
- Search and filters
- Lead detail view
- Manual lead entry

**Advanced Features (Post-MVP):**
- AI auto-scoring (0-100 with explanation)
- Data enrichment (company info from web)
- Predictive prioritization
- Duplicate detection
- Bulk import (CSV)
- Lead routing (auto-assign)
- Pipeline view (kanban)

**Data Shown:**
- Lead name, company, email, phone
- Lead score (AI-generated)
- Status (New/Qualified/Contacted/Converted/Lost)
- Source (Wizard, WhatsApp, Manual)
- Created date
- Next action suggestion

**Data Source:** Lead Context + Lead Scorer Agent + Lead Enricher Agent

---

## 💬 CHATBOTS

### Persistent AI Assistant

**Purpose:** Provide contextual help, answer questions, propose actions

**Trigger:** Floating button (bottom-right) or Command Bar

**Layout:**
- Chat bubble interface
- Suggested prompts (3-4 visible)
- Action preview cards (before execution)
- Approval buttons (Yes/No or Edit)

**Capabilities:**

**Core (V1):**
- Answer product questions
- Explain dashboard features
- Navigate to screens
- Show relevant data

**Advanced (Post-MVP):**
- Execute CRM actions (with approval)
- Generate content (proposals, emails)
- Analyze data on request
- Create tasks and automations
- Learn user preferences

**Suggested Prompts:**
- "Show me high-priority leads"
- "What's my team working on today?"
- "Generate a proposal for [company]"
- "Schedule a follow-up for [lead]"
- "Summarize last week's activity"

**Action Preview Example:**
```
┌─────────────────────────────────────┐
│ AI PROPOSES ACTION                  │
├─────────────────────────────────────┤
│ Create Task:                        │
│ "Follow up with Acme Corp"          │
│                                     │
│ Assignee: You                       │
│ Due: Tomorrow 10am                  │
│ Priority: High                      │
│                                     │
│ [Approve] [Edit] [Reject]           │
└─────────────────────────────────────┘
```

**Approval Flow:**
1. User asks question or makes request
2. AI analyzes intent
3. If action required: Show preview card
4. User approves/edits/rejects
5. If approved: Execute and confirm
6. If rejected: Ask for clarification

**Persistence:**
- All conversations stored
- Action history logged
- User preferences learned over time

---

## 🧙 WIZARDS

### 1. Lead Capture Wizard (`/wizard`)

**Steps:**
1. Company Information
2. Project Goals & Challenges
3. Services, Timeline, Budget
4. Contact Information & Preferences

**Inputs per Step:**

**Step 1:**
- Company name (text, required)
- Website URL (text, optional)

**Step 2:**
- Primary goal (multi-select: Scale, Automate, Improve CX, etc.)
- Current challenges (textarea, optional)

**Step 3:**
- Services needed (multi-select: CRM, Automation, AI, etc.)
- Timeline preference (dropdown: 1-2 weeks, 1 month, 2-3 months, Flexible)
- Budget range (dropdown: <$10k, $10k-$25k, $25k-$50k, $50k+)

**Step 4:**
- Contact name (text, required)
- Email (email, required)
- Phone (tel, optional)
- Preferred contact method (radio: Email, Phone, WhatsApp)

**Validation Rules:**
- Step 1: Company name required
- Step 2: At least one goal selected
- Step 3: At least one service selected
- Step 4: Name and email required, email format validated

**Progress Indicator:**
- Visual bar showing 1/4, 2/4, 3/4, 4/4
- Step numbers clickable (if step completed)

**Output Destination:**
- Lead Context (stored)
- Proposal Generator Agent (triggered)
- Client Dashboard (created)

---

### 2. Blueprint Creation Wizard (Planned)

**Steps:**
1. Blueprint Name & Description
2. Phase Configuration
3. Task Templates
4. Resource Allocation

**Purpose:** Create reusable project templates with AI assistance

**AI Enhancement:** Gemini analyzes description and suggests phases, tasks, durations

---

### 3. Automation Setup Wizard (Planned)

**Steps:**
1. Trigger Selection
2. Conditions & Filters
3. Actions to Execute
4. Approval Settings

**Purpose:** Configure AI automations without code

**AI Enhancement:** Gemini suggests optimal conditions based on historical data

---

## 🚶 USER JOURNEYS

### Journey 1: Lead to Project Setup

**Goal:** Capture lead, generate proposal, set up project dashboard

**Steps:**
1. User lands on wizard page
2. Completes 4 steps (5-7 minutes)
3. Wizard completion triggers AI processing screen
4. Proposal Generator Agent creates proposal (15-30 seconds)
5. User redirected to `/proposal` with generated doc
6. User reviews proposal, clicks "Accept Proposal"
7. Client Dashboard created at `/dashboard`
8. User sees Overview tab with project summary

**System Responses:**
- Step 2: AI extracts goals from text input → stores in context
- Step 4 completion: Triggers Proposal Generator
- Processing screen: Shows thinking animation
- Proposal ready: Shows success animation + CTA

**AI Involvement:**
- Insight Extractor: Analyzes wizard responses
- Proposal Generator: Creates full proposal
- Risk Analyzer: Identifies potential issues

**Persistence Points:**
- Lead data → Lead Context (step-by-step)
- Proposal → Proposal Store
- Project → Client Dashboard data

---

### Journey 2: Natural Language Command to Action

**Goal:** User asks AI to perform CRM action via Command Bar

**Steps:**
1. User presses ⌘K to open Command Bar
2. Types: "Create a follow-up task for Acme Corp tomorrow at 10am"
3. AI parses intent: Create task for specific lead
4. AI shows action preview card with details
5. User clicks "Approve"
6. Task created in Tasks page
7. Notification sent
8. Confirmation shown in Command Bar

**System Responses:**
- Parse query with Gemini 3 Flash
- Look up "Acme Corp" in leads database
- Generate task object with AI-inferred priority
- Show preview modal
- Execute on approval
- Log action in activity feed

**AI Involvement:**
- NLP Parser: Understands intent
- Function Caller: Executes CRM action
- Approval Controller: Gates execution

**Persistence Points:**
- Task → Tasks database
- Action log → Activity feed
- Command → Command history

---

### Journey 3: Automated Lead Qualification

**Goal:** WhatsApp message received, AI qualifies lead, notifies team

**Steps:**
1. Message arrives via WhatsApp API webhook
2. WhatsApp Bot Agent analyzes message
3. Determines intent: Request property viewing
4. Extracts data: Name, property interest, preferred date
5. Checks availability in calendar (future: Google Calendar API)
6. Sends auto-reply with available slots
7. User selects slot in WhatsApp
8. AI creates lead in CRM
9. Lead Scorer Agent assigns score (85/100)
10. High score triggers notification to sales team
11. Task auto-created: "Prepare property docs for viewing"

**System Responses:**
- Auto-reply within 2 minutes
- Lead creation in real-time
- Score calculation with explanation
- Notification via email/in-app
- Task assignment based on team availability

**AI Involvement:**
- WhatsApp Bot: Handles conversation
- Lead Scorer: Evaluates quality
- Task Assigner: Assigns to best team member
- Sentiment Monitor: Flags urgent/angry tone

**Persistence Points:**
- Conversation → WhatsApp history
- Lead → CRM database
- Score → Lead record
- Task → Tasks database
- Notification → Notification center

---

## ⚙️ WORKFLOWS (MERMAID-READY)

### Workflow 1: Proposal Generation

**Trigger:** Wizard completion (Step 4 submitted)

**Flow Description:**
- User completes wizard → System validates all inputs → AI Processing screen shown → Proposal Generator Agent invoked with lead data → Gemini 3 Pro generates proposal (thinking mode) → Structured output parsed (title, summary, phases, budget, deliverables) → Proposal stored in context → Insight Extractor runs (goals, risks, next steps) → Results stored → User redirected to `/proposal` → Proposal displayed

**Conditions:**
- All required fields completed
- Email format valid
- At least one goal and service selected

**Agents Involved:**
- Proposal Generator (primary)
- Insight Extractor (secondary)

**Actions:**
- Generate proposal document
- Extract AI insights
- Store in context
- Redirect user

**Approval Gates:** None (auto-executes after wizard)

**Stored Outputs:**
- Proposal object (title, summary, phases, budget, deliverables)
- AI insights (goals, risks, nextStep)
- Lead data (company, contact, services)

---

### Workflow 2: Task Auto-Assignment

**Trigger:** Task created without assignee

**Flow Description:**
- Task created manually or via AI → System checks if assignee specified → If not: Task Assigner Agent invoked → Agent analyzes task (priority, type, complexity) → Retrieves team member data (availability, skills, current workload) → Calculates best match using scoring algorithm → Assigns task to team member → Sends notification → Logs assignment reasoning

**Conditions:**
- Task has no assignee
- At least one team member available
- Task priority is set

**Agents Involved:**
- Task Assigner

**Actions:**
- Analyze task requirements
- Score team members
- Assign task
- Send notification
- Log reasoning

**Approval Gates:** 
- Optional: If task is high-priority, ask manager to approve assignment

**Stored Outputs:**
- Task assignment (assignee ID)
- Assignment reasoning (why this person)
- Notification record

---

### Workflow 3: Lead Enrichment Pipeline

**Trigger:** New lead created in CRM

**Flow Description:**
- Lead created → Lead Enricher Agent invoked → Agent extracts company name → Calls URL Context API with company website → Scrapes company data (industry, size, description) → Calls Google Search Grounding for additional data (funding, news) → Lead Scorer Agent invoked with enriched data → Generates score (0-100) with rationale → If score > 80: Priority flag set → If score < 30: Low-priority flag set → Lead updated in CRM → Notification sent to sales team if high-priority

**Conditions:**
- Lead has company name or website
- Lead not already enriched

**Agents Involved:**
- Lead Enricher (primary)
- Lead Scorer (secondary)

**Actions:**
- Scrape company data
- Search for additional info
- Calculate score
- Update lead record
- Send notification if needed

**Approval Gates:** None (auto-executes)

**Stored Outputs:**
- Enriched lead data (industry, size, funding)
- Lead score (0-100)
- Score rationale (text explanation)

---

## 🤖 AI AGENTS (DETAILED)

### 1. Proposal Generator (Planner)

**Purpose:** Generate complete project proposals from wizard data

**When it Runs:** Wizard completion → Processing screen

**Inputs:**
- Company name, website
- Goals, challenges
- Services, timeline, budget range
- Contact info

**Outputs:**
- Proposal document (title, summary, phases, budget, deliverables)
- Timeline estimate
- Phase breakdown (name, duration, status)
- AI confidence score

**Model:** Gemini 3 Pro (thinking mode)

**Screen:** Proposal page (`/proposal`)

---

### 2. Insight Extractor (Analyst)

**Purpose:** Extract key insights from user text input

**When it Runs:** After each wizard step with text input

**Inputs:**
- User responses (goals, challenges)

**Outputs:**
- Structured goals list
- Identified risks
- Next step recommendations

**Model:** Gemini 3 Flash (structured output)

**Screen:** Client Dashboard sidebar (AI notes)

---

### 3. Blueprint Generator (Planner)

**Purpose:** Create project blueprints from brief descriptions

**When it Runs:** User requests via Blueprints page

**Inputs:**
- Blueprint name
- Brief description (2-3 sentences)

**Outputs:**
- Phase list (names, durations)
- Task templates per phase
- Resource allocation suggestions
- Timeline estimate

**Model:** Gemini 3 Pro (thinking mode for complex projects)

**Screen:** Blueprints page

---

### 4. Lead Scorer (Scorer)

**Purpose:** Score lead quality 0-100 with reasoning

**When it Runs:** Lead created or enriched

**Inputs:**
- Lead data (company, industry, size, budget)
- Source (wizard, WhatsApp, manual)
- Engagement signals (response time, interest level)

**Outputs:**
- Score (0-100)
- Rationale (3-5 bullet points explaining score)
- Priority flag (High/Medium/Low)

**Model:** Gemini 3 Flash (structured output)

**Screen:** Lead Intelligence page (`/app/leads`)

---

### 5. Lead Enricher (Retriever)

**Purpose:** Auto-enrich lead data from web sources

**When it Runs:** Lead created with company name/website

**Inputs:**
- Company name
- Website URL (optional)

**Outputs:**
- Industry
- Company size (employees)
- Funding stage (if available)
- Recent news (1-2 headlines)

**Model:** Gemini 3 Flash + URL Context + Google Search Grounding

**Screen:** Lead detail panel

---

### 6. WhatsApp Bot (Content/Comms)

**Purpose:** Handle incoming WhatsApp messages, qualify leads, schedule viewings

**When it Runs:** Message received via webhook

**Inputs:**
- Message text
- Sender phone number
- Conversation history

**Outputs:**
- Reply message (auto-generated)
- Detected intent (inquiry/viewing/complaint)
- Extracted data (name, property interest, date)
- Lead object (if new conversation)

**Model:** Gemini 3 Flash (Interactions API for conversational flow)

**Screen:** WhatsApp Hub (`/whatsapp`)

---

### 7. Workflow Optimizer (Optimizer)

**Purpose:** Analyze workflow success patterns and suggest improvements

**When it Runs:** Weekly (scheduled job)

**Inputs:**
- Workflow execution logs (past 30 days)
- Success/failure metrics
- Execution times

**Outputs:**
- Optimization suggestions (3-5 recommendations)
- Updated workflow configurations
- Performance comparison (before/after)

**Model:** Gemini 3 Pro (deep analysis)

**Screen:** Automations page (recommendations)

---

### 8. Sentiment Monitor (Analyst)

**Purpose:** Track client emotions across communications

**When it Runs:** Real-time (on new message/email/call log)

**Inputs:**
- Communication text (email, WhatsApp, call transcript)
- Previous sentiment scores
- Client history

**Outputs:**
- Sentiment score (-1.0 to +1.0)
- Emotion labels (happy, frustrated, confused, urgent)
- Risk flags (client may churn)
- Opportunity flags (upsell potential)

**Model:** Gemini 3 Flash (sentiment analysis)

**Screen:** Client Dashboard sidebar, Lead detail panel

---

### 9. Task Assigner (Ops Automation)

**Purpose:** Intelligently assign tasks to team members

**When it Runs:** Task created without assignee

**Inputs:**
- Task data (title, priority, type, complexity)
- Team member data (skills, availability, workload)

**Outputs:**
- Assigned team member ID
- Assignment reasoning (3-5 reasons)
- Alternative assignees (if primary unavailable)

**Model:** Gemini 3 Flash (structured output)

**Screen:** Tasks page

---

### 10. Approval Controller (Controller)

**Purpose:** Gate all AI-initiated actions requiring user approval

**When it Runs:** Before any agent executes CRM action (create/update/delete)

**Inputs:**
- Agent action proposal (type, target, changes)
- User context (current screen, recent activity)

**Outputs:**
- Approval modal (shows action preview)
- User decision (approved/rejected/edited)
- Execution confirmation

**Model:** None (orchestration logic)

**Screen:** All screens (modal overlay)

---

### 11. RAG Retriever (Retriever)

**Purpose:** Find relevant docs/data from internal knowledge base

**When it Runs:** Command Bar query, Chat query

**Inputs:**
- User query (natural language)
- Current context (screen, project)

**Outputs:**
- Top 3-5 relevant documents
- Snippets with highlights
- Relevance scores

**Model:** Gemini 3 Flash + RAG API

**Screen:** Command Bar, Chat

---

### 12. Action Orchestrator (Orchestrator)

**Purpose:** Coordinate multiple agents for complex workflows

**When it Runs:** User requests multi-step action (e.g., "Create project from this lead")

**Inputs:**
- User intent (parsed from command)
- Required agents for workflow
- Sequence order

**Outputs:**
- Agent execution queue
- Intermediate results
- Final combined output

**Model:** None (orchestration logic)

**Screen:** Command Bar, Chat

---

## 🎯 CORE vs ADVANCED

### CORE (Must Ship - V1)

**Screens:**
- ✅ Wizard (4 steps)
- ✅ Proposal view
- ✅ Client Dashboard (7 tabs)
- ✅ Admin Dashboard V2 (6 pages)

**Features:**
- ✅ Lead capture with validation
- ✅ AI proposal generation
- ✅ Project status tracking
- ✅ Timeline visualization
- ✅ Basic dashboard stats

**AI Agents:**
- ✅ Proposal Generator
- ✅ Insight Extractor

**Data Persistence:**
- ✅ Lead Context (in-memory)
- ✅ Proposal storage (session)

---

### ADVANCED (Post-MVP - V2+)

**Screens:**
- 🔮 Command Bar (⌘K)
- 🔮 WhatsApp Hub
- 🔮 Lead Intelligence (full CRM)
- 🔮 Analytics Dashboard
- 🔮 Team Collaboration

**Features:**
- 🔮 Natural language queries
- 🔮 Real-time collaboration
- 🔮 File upload/management
- 🔮 AI chat (full conversation)
- 🔮 E-signature integration
- 🔮 Payment milestones
- 🔮 Custom branding per client
- 🔮 Multi-language support
- 🔮 Voice input
- 🔮 Mobile apps

**AI Agents:**
- 🔮 Blueprint Generator
- 🔮 Lead Scorer
- 🔮 Lead Enricher
- 🔮 WhatsApp Bot
- 🔮 Workflow Optimizer
- 🔮 Sentiment Monitor
- 🔮 Task Assigner
- 🔮 RAG Retriever
- 🔮 Action Orchestrator

**AI Features:**
- 🔮 Function Calling (execute actions)
- 🔮 URL Context (scrape websites)
- 🔮 Deep Research (competitor analysis)
- 🔮 Google Search Grounding (real-time data)
- 🔮 Google Maps Grounding (location intelligence)
- 🔮 RAG (query internal docs)
- 🔮 Image Generation (visuals)
- 🔮 Multimodal (analyze docs/images)
- 🔮 Interactions API (conversational UI)

**Data Persistence:**
- 🔮 Database (Supabase)
- 🔮 File storage (cloud)
- 🔮 Real-time sync
- 🔮 Backup/export

---

## 🎨 IMPLEMENTATION NOTES

**Design Principles:**
1. **Approval First:** AI never executes actions without user confirmation
2. **Transparency:** Always show reasoning for AI decisions
3. **Persistence:** Every AI output must be stored somewhere
4. **Progressive Enhancement:** Core features work without AI, AI enhances
5. **Graceful Degradation:** If AI fails, show fallback UI

**Naming Conventions:**
- Screens: Descriptive (Lead Intelligence, not "CRM Page")
- Agents: Role-based (Scorer, Enricher, not "Agent 1")
- Features: Benefit-driven (Smart Scheduling, not "Calendar AI")

**Data Flow Rules:**
- User input → Context Store (immediate)
- AI processing → Processing screen (visible)
- AI output → Target screen (redirect or update)
- All actions → Activity log (audit trail)

**Quality Checks:**
- Every screen must have clear purpose (documented)
- Every AI agent must have defined inputs/outputs
- Every workflow must have approval gate (if writing data)
- Every feature must map to user value (not "cool tech")

---

## 📊 FEATURE-SCREEN-AGENT MATRIX

| Feature | Screen | Agent | User Value | Status |
|---------|--------|-------|------------|--------|
| Proposal Generation | Wizard → Proposal | Proposal Generator | Save 2-3 hours per proposal | ✅ Active |
| Insight Extraction | Wizard | Insight Extractor | Surface hidden goals/risks | ✅ Active |
| Project Tracking | Client Dashboard | None | Transparency for clients | ✅ Active |
| Operations Hub | Admin Dashboard V2 | Multiple | Central command center | ✅ UI Only |
| Blueprint Creation | Blueprints page | Blueprint Generator | Reusable templates | 🔮 Planned |
| Lead Scoring | Lead Intelligence | Lead Scorer | Focus on best leads | 🔮 Planned |
| Data Enrichment | Lead detail | Lead Enricher | No manual research | 🔮 Planned |
| WhatsApp Automation | WhatsApp Hub | WhatsApp Bot | 24/7 lead response | 🔮 Planned |
| Natural Language Query | Command Bar | RAG Retriever | No SQL needed | 🔮 Planned |
| Task Auto-Assignment | Tasks page | Task Assigner | Optimal resource allocation | 🔮 Planned |
| Sentiment Tracking | Dashboard sidebar | Sentiment Monitor | Early risk detection | 🔮 Planned |
| Workflow Optimization | Automations page | Workflow Optimizer | Self-improving system | 🔮 Planned |

---

**END OF SYSTEM PLAN**

*This document is production-ready and implementation-ready. All screens, agents, and workflows are designed for real-world deployment with clear separation of Core (V1) and Advanced (V2+) features.*

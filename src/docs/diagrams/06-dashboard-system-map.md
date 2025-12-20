# 06 - Dashboard System Map: Ops + Intelligence

**Purpose:** Clarify internal product complexity and feature ownership  
**Use Cases:** Product review, feature planning, team alignment  
**Status:** ✅ Components exist, 🔴 Routing needed

---

## 🗺️ Complete Dashboard Architecture

```mermaid
flowchart TB
    Entry([User Accesses App]) --> AppRoot[/app<br/>App Shell]
    
    AppRoot --> Nav{Navigation}
    
    %% Main Dashboard
    Nav -->|Default| Dashboard[/app/dashboard<br/>📊 Project Dashboard]
    
    %% CRM Section
    Nav -->|Leads| CRM[/app/leads<br/>👥 Leads CRM]
    
    %% Operations Section
    Nav -->|Operations| Ops[/app/ops<br/>🤖 Agent Control Room]
    
    %% Workflows Section
    Nav -->|Workflows| Workflows[/app/workflows<br/>🔄 Automation Map]
    
    %% Intelligence Section
    Nav -->|Intelligence| Intelligence[/app/intelligence<br/>🧠 Intelligence Hub]
    
    %% Settings Section
    Nav -->|Settings| Settings[/app/settings<br/>⚙️ Settings]
    
    %% ===== PROJECT DASHBOARD =====
    Dashboard --> D1[Active Projects Overview]
    Dashboard --> D2[Recent Activity Feed]
    Dashboard --> D3[Quick Actions]
    Dashboard --> D4[Metrics Summary]
    
    D3 -->|Upload Call| Intelligence
    D3 -->|Add Lead| CRM
    D3 -->|Start Wizard| WizExt[/wizard]
    
    %% ===== CRM SECTION =====
    CRM --> CRM1[Leads Table]
    CRM --> CRM2[Filter & Search]
    CRM --> CRM3[Sun Score Badges]
    CRM --> CRM4[Pipeline Health]
    
    CRM1 -->|Click Lead| LeadDetail[/app/leads/:id<br/>👤 Lead Profile]
    
    LeadDetail --> LD1[Lead Overview]
    LeadDetail --> LD2[Activity Timeline]
    LeadDetail --> LD3[AI Insights]
    LeadDetail --> LD4[Actions]
    
    LD4 -->|Generate Proposal| PropGen[Proposal Generator]
    LD4 -->|Enrich Lead| Enrich[Enrichment Flow]
    LD4 -->|View Dossier| Dossier[Deep Dossier]
    
    %% ===== OPERATIONS SECTION =====
    Ops --> Ops1[AI Agents Grid]
    Ops --> Ops2[Agent Status]
    Ops --> Ops3[Performance Metrics]
    Ops --> Ops4[Agent Controls]
    
    Ops1 --> Agent1[Post-Call Architect<br/>✅ Active]
    Ops1 --> Agent2[Meeting Protector<br/>🟡 Partial]
    Ops1 --> Agent3[Persona Chameleon<br/>❌ Inactive]
    Ops1 --> Agent4[Deal Health Oracle<br/>❌ Inactive]
    Ops1 --> Agent5[Email Resurrection<br/>❌ Inactive]
    
    Agent1 --> A1Status[Status: Running<br/>Processed: 45 calls<br/>Accuracy: 92%]
    Agent2 --> A2Status[Status: Testing<br/>Qualified: 12 leads<br/>Accuracy: 75%]
    
    %% ===== WORKFLOWS SECTION =====
    Workflows --> WF1[Workflow Map Visualization]
    Workflows --> WF2[Trigger Configuration]
    Workflows --> WF3[Execution Log]
    Workflows --> WF4[Workflow Templates]
    
    WF1 --> WF1a[Lead Scoring<br/>✅ Active]
    WF1 --> WF1b[Ghost Detection<br/>🟡 Partial]
    WF1 --> WF1c[Contract-to-Cash<br/>❌ Inactive]
    
    %% ===== INTELLIGENCE SECTION =====
    Intelligence --> IntNav{Intelligence Features}
    
    IntNav -->|Call Analysis| IntUpload[/app/intelligence/upload<br/>📞 Call Upload]
    IntNav -->|Search| IntSearch[/app/intelligence/search<br/>🔍 NL Search]
    IntNav -->|View Briefs| IntBriefs[Call Briefs Library]
    
    IntUpload --> Upload1[Drag & Drop Interface]
    Upload1 --> Upload2[File Validation]
    Upload2 --> IntAnalysis[/app/intelligence/analysis<br/>⚡ AI Processing]
    
    IntAnalysis --> Analyze1[Transcription]
    Analyze1 --> Analyze2[Signal Extraction]
    Analyze2 --> Analyze3[Action Generation]
    Analyze3 --> IntBrief[/app/intelligence/brief<br/>📝 Call Brief]
    
    IntBrief --> Brief1[Full Transcription]
    IntBrief --> Brief2[Extracted Signals]
    IntBrief --> Brief3[Action Items]
    IntBrief --> Brief4[Interactive Checkboxes]
    
    IntSearch --> Search1[Command Bar<br/>Cmd+K]
    Search1 --> Search2[Text-to-SQL]
    Search2 --> IntResults[/app/intelligence/search<br/>📊 Results]
    
    IntResults --> Result1[Filtered Leads]
    IntResults --> Result2[Match Reasons]
    IntResults --> Result3[Export Options]
    
    %% ===== SETTINGS SECTION =====
    Settings --> Set1[Profile Settings]
    Settings --> Set2[Integration Config]
    Settings --> Set3[Notification Preferences]
    Settings --> Set4[API Keys]
    Settings --> Set5[Team Management]
    
    Set2 --> Int1[Gmail Integration<br/>🟡 60%]
    Set2 --> Int2[Slack Integration<br/>🟡 50%]
    Set2 --> Int3[Calendar Integration<br/>❌ 0%]
    Set2 --> Int4[LinkedIn Integration<br/>❌ 0%]
    
    %% Styling
    classDef complete fill:#51cf66,stroke:#37b24d,color:#fff
    classDef partial fill:#ffd43b,stroke:#fab005,color:#000
    classDef missing fill:#ff6b6b,stroke:#c92a2a,color:#fff
    classDef section fill:#4c6ef5,stroke:#364fc7,color:#fff
    
    class Dashboard,CRM,LeadDetail,Ops,Workflows,Intelligence,Settings section
    class IntUpload,IntAnalysis,IntBrief,IntSearch,IntResults,Agent1,WF1a complete
    class Agent2,WF1b,Int1,Int2 partial
    class Agent3,Agent4,Agent5,WF1c,Int3,Int4 missing
```

---

## 📊 Dashboard Feature Breakdown

### 1. Project Dashboard (`/app/dashboard`)

**Purpose:** Central hub for project oversight

**Components:**
- ✅ Active projects list
- ✅ Recent activity feed
- ✅ Quick action buttons
- ✅ Metrics summary cards

**Features:**
```
┌─────────────────────────────────────┐
│ 📊 PROJECT DASHBOARD                │
├─────────────────────────────────────┤
│ Active Projects (3)                 │
│ ├─ AI Chatbot Platform (Week 4/12) │
│ ├─ CRM Integration (Week 2/8)      │
│ └─ Analytics Dashboard (Week 1/6)  │
│                                     │
│ Quick Actions                       │
│ [Upload Call] [Add Lead] [Wizard]  │
│                                     │
│ Metrics                             │
│ Leads: 47 | Calls: 28 | Score: 78  │
└─────────────────────────────────────┘
```

**Status:** ✅ Complete (100%)

**Gaps:** None

---

### 2. Leads CRM (`/app/leads`)

**Purpose:** Lead management and relationship tracking

**Components:**
- ✅ Leads table (sortable, filterable)
- ✅ Search bar
- ✅ Filter dropdowns
- ✅ Sun Score badges
- ✅ Pipeline health widget

**Features:**
```
┌─────────────────────────────────────┐
│ 👥 LEADS CRM                        │
├─────────────────────────────────────┤
│ [Search] [Filter ▼] [Add Lead +]   │
│                                     │
│ Name        Company    Score  Last  │
│ ──────────────────────────────────  │
│ Sarah Chen  Fintech    🔥 95   2h   │
│ Mike Ross   SaaS Co    🟡 67   1d   │
│ Jane Doe    E-comm     ❄️ 34   5d   │
│                                     │
│ Showing 47 leads                    │
└─────────────────────────────────────┘
```

**Status:** ✅ Complete (100%)

**Gaps:** None

---

### 3. Lead Profile (`/app/leads/:id`)

**Purpose:** Detailed lead view with AI insights

**Components:**
- ✅ Lead overview card
- ✅ Activity timeline
- ✅ Sun Score badge
- ✅ AI insights panel
- ✅ Action buttons
- 🟡 Proposal generator (partial)
- 🟡 Enrichment flow (partial)
- ❌ Deep dossier (missing)

**Features:**
```
┌─────────────────────────────────────┐
│ 👤 Sarah Chen @ FintechFlow         │
│ 🔥 Sun Score: 95 (Hot Lead)         │
├─────────────────────────────────────┤
│ Overview                            │
│ Role: CEO | Budget: $75k            │
│ Timeline: Q1 2026 | Priority: High  │
│                                     │
│ Activity Timeline                   │
│ ├─ Call uploaded (2h ago)           │
│ ├─ Email opened (1d ago)            │
│ └─ Form submitted (3d ago)          │
│                                     │
│ AI Insights                         │
│ • Strong buying signals             │
│ • Budget confirmed                  │
│ • Decision maker identified         │
│                                     │
│ Actions                             │
│ [Generate Proposal] [Enrich Lead]   │
│ [View Dossier ❌] [Book Call]       │
└─────────────────────────────────────┘
```

**Status:** 🟡 Partial (80%)

**Gaps:**
- Deep dossier not built
- Enrichment flow incomplete

---

### 4. Agent Control Room (`/app/ops`)

**Purpose:** Monitor and control AI agents

**Components:**
- ✅ AI agents grid
- ✅ Agent status indicators
- ✅ Performance metrics
- ✅ Agent controls (start/stop/configure)

**AI Agents:**

| Agent | Status | Completion | Metrics |
|-------|--------|------------|---------|
| **Post-Call Architect** | 🟢 Active | 100% | 45 calls, 92% accuracy |
| **Meeting Protector** | 🟡 Testing | 75% | 12 qualified, 75% accuracy |
| **Persona Chameleon** | 🔴 Inactive | 0% | Not started |
| **Deal Health Oracle** | 🔴 Inactive | 0% | Not started |
| **Email Resurrection** | 🔴 Inactive | 0% | Not started |
| **Contract Velocity** | 🔴 Inactive | 0% | Not started |

**Features:**
```
┌─────────────────────────────────────┐
│ 🤖 AGENT CONTROL ROOM               │
├─────────────────────────────────────┤
│ Post-Call Architect       🟢 Active │
│ ├─ Status: Running                  │
│ ├─ Processed: 45 calls              │
│ ├─ Accuracy: 92%                    │
│ └─ [Configure] [View Logs]          │
│                                     │
│ Meeting Protector         🟡 Testing│
│ ├─ Status: Partial                  │
│ ├─ Qualified: 12 leads              │
│ ├─ Accuracy: 75%                    │
│ └─ [Configure] [Complete Setup]     │
│                                     │
│ Persona Chameleon         🔴 Inactive│
│ ├─ Status: Not Started              │
│ └─ [Build Feature]                  │
└─────────────────────────────────────┘
```

**Status:** ✅ Complete (100%)

**Gaps:** None (agents themselves need building)

---

### 5. Automation Map (`/app/workflows`)

**Purpose:** Visualize and manage workflow automations

**Components:**
- ✅ Workflow map visualization
- ✅ Trigger configuration
- ✅ Execution log
- ✅ Workflow templates

**Workflows:**

| Workflow | Status | Triggers | Actions |
|----------|--------|----------|---------|
| **Zero-Touch Lead Scoring** | 🟢 Active | Lead created | Auto-score, route |
| **Ghost Detection** | 🟡 Partial | 3+ missed touches | Flag, alert |
| **Contract-to-Cash** | 🔴 Inactive | Contract signed | Onboard, invoice |
| **Champion Autopilot** | 🔴 Inactive | Quarterly | Check-in, nurture |

**Features:**
```
┌─────────────────────────────────────┐
│ 🔄 AUTOMATION MAP                   │
├─────────────────────────────────────┤
│ [Visual Workflow Map]               │
│                                     │
│ Lead Created → Auto-Score →         │
│   ↓                                 │
│ Route to Rep → Send Welcome Email   │
│                                     │
│ Triggers                            │
│ ├─ New lead added                   │
│ ├─ Email opened                     │
│ └─ Call completed                   │
│                                     │
│ Recent Executions                   │
│ ├─ Lead scored (2m ago) ✅          │
│ ├─ Email sent (15m ago) ✅          │
│ └─ Ghost detected (1h ago) ⚠️       │
└─────────────────────────────────────┘
```

**Status:** ✅ Complete (100%)

**Gaps:** None (workflows themselves need building)

---

### 6. Intelligence Hub (`/app/intelligence`)

**Purpose:** AI-powered sales intelligence features

#### 6.1 Call Upload (`/app/intelligence/upload`)

**Components:**
- ✅ Drag & drop interface
- ✅ File validation (.mp3, .wav)
- ✅ Upload progress
- ✅ Recent uploads list

**Features:**
```
┌─────────────────────────────────────┐
│ 📞 CALL UPLOAD                      │
├─────────────────────────────────────┤
│ Drag and drop recording here        │
│ or [Browse Files]                   │
│                                     │
│ Supported: .mp3, .wav, .m4a         │
│ Max size: 100MB                     │
│                                     │
│ Recent Uploads                      │
│ ├─ fintech_discovery.mp3 (2h ago)  │
│ ├─ saas_demo.wav (1d ago)           │
│ └─ healthcare_call.mp3 (2d ago)     │
└─────────────────────────────────────┘
```

**Status:** ✅ Complete (100%)

---

#### 6.2 AI Analysis (`/app/intelligence/analysis`)

**Components:**
- ✅ "Thinking" animation (no spinners)
- ✅ Progressive task list
- ✅ Status indicators
- ✅ Error handling

**Features:**
```
┌─────────────────────────────────────┐
│ ⚡ AI ANALYSIS                       │
├─────────────────────────────────────┤
│ Processing your call recording...   │
│                                     │
│ ✅ Transcribing conversation        │
│ ✅ Identifying scope and budget     │
│ 🔄 Extracting action items          │
│ ⏳ Finalizing intelligence brief    │
│                                     │
│ [Smooth thinking animation]         │
│ Estimated time: 8-12 seconds        │
└─────────────────────────────────────┘
```

**Status:** ✅ Complete (100%)

---

#### 6.3 Call Brief (`/app/intelligence/brief`)

**Components:**
- ✅ Full transcription
- ✅ Extracted signals (budget, timeline, priority)
- ✅ Action items list
- ✅ Interactive checkboxes
- ✅ Completion tracking

**Features:**
```
┌─────────────────────────────────────┐
│ 📝 CALL BRIEF                       │
├─────────────────────────────────────┤
│ Call: fintech_discovery.mp3         │
│ Duration: 45 minutes                │
│ Date: Dec 18, 2025                  │
│                                     │
│ 📊 Signals Extracted                │
│ • Budget: $75,000                   │
│ • Timeline: Q1 2026                 │
│ • Priority: High                    │
│ • Decision Maker: Confirmed         │
│                                     │
│ ✅ Action Items                     │
│ ☐ Send SOC2 docs (Due: Friday)     │
│ ☐ Schedule tech deep-dive (Week)    │
│ ☑ Draft proposal (Due: Dec 28)      │
│                                     │
│ 📄 Full Transcription               │
│ [Collapsible transcript...]         │
└─────────────────────────────────────┘
```

**Status:** ✅ Complete (100%)

---

#### 6.4 Natural Language Search (`/app/intelligence/search`)

**Components:**
- ✅ Command bar (Cmd+K)
- ✅ Text-to-SQL conversion
- ✅ Results table
- ✅ Match reasons (partial)
- ❌ Query history (missing)
- ❌ Saved segments (missing)

**Features:**
```
┌─────────────────────────────────────┐
│ 🔍 SEARCH RESULTS                   │
├─────────────────────────────────────┤
│ Query: "Fintech CEOs in NY >$50k"   │
│                                     │
│ Found 8 leads                       │
│                                     │
│ Name        Company    Budget Match │
│ ──────────────────────────────────  │
│ Sarah Chen  Fintech    $75k   95%   │
│ Mike Ross   SaaS NY    $60k   87%   │
│ Jane Doe    FinApp     $55k   82%   │
│                                     │
│ [Export CSV] [Save Search ❌]       │
└─────────────────────────────────────┘
```

**Status:** 🟡 Partial (60%)

**Gaps:**
- Query history not saved
- Saved segments not implemented

---

### 7. Settings (`/app/settings`)

**Purpose:** Configure app, integrations, and preferences

**Components:**
- ✅ Profile settings
- ✅ Integration configuration
- ✅ Notification preferences
- ✅ API keys management
- ✅ Team management (UI exists)

**Integrations Status:**

| Integration | Status | Completion | Next Step |
|-------------|--------|------------|-----------|
| **Gmail** | 🟡 Partial | 60% | Add send functionality |
| **Slack** | 🟡 Partial | 50% | Add webhook secret |
| **Google Calendar** | 🔴 Missing | 0% | Set up OAuth |
| **LinkedIn** | 🔴 Missing | 0% | Apply for API access |
| **Stripe** | 🔴 Missing | 0% | Add API credentials |

**Features:**
```
┌─────────────────────────────────────┐
│ ⚙️ SETTINGS                          │
├─────────────────────────────────────┤
│ Profile                             │
│ ├─ Name: John Doe                   │
│ ├─ Email: john@example.com          │
│ └─ [Update Profile]                 │
│                                     │
│ Integrations                        │
│ ├─ Gmail         🟡 Connected       │
│ ├─ Slack         🟡 Connected       │
│ ├─ Calendar      ❌ Not Connected   │
│ └─ LinkedIn      ❌ Not Connected   │
│                                     │
│ Notifications                       │
│ ├─ Email alerts  ✅ Enabled         │
│ ├─ Slack alerts  ✅ Enabled         │
│ └─ SMS alerts    ❌ Disabled        │
└─────────────────────────────────────┘
```

**Status:** 🟡 Partial (70%)

**Gaps:**
- Calendar integration not set up
- LinkedIn integration not set up
- Some integrations incomplete

---

## 📊 Dashboard Completion Summary

| Section | Routes | Components | Status | Completion |
|---------|--------|------------|--------|------------|
| **Project Dashboard** | 1 | 4 | ✅ Complete | 100% |
| **Leads CRM** | 2 | 6 | ✅ Complete | 100% |
| **Lead Profile** | 1 | 9 | 🟡 Partial | 80% |
| **Agent Control Room** | 1 | 4 | ✅ Complete | 100% |
| **Automation Map** | 1 | 4 | ✅ Complete | 100% |
| **Intelligence Hub** | 4 | 12 | 🟡 Partial | 85% |
| **Settings** | 1 | 5 | 🟡 Partial | 70% |
| **TOTAL** | 11 | 44 | 🟡 Partial | **91%** |

---

## 🎯 Priority Fixes

### Fix #1: Complete Intelligence Search
**Priority:** 🔥 MEDIUM  
**Time:** 2 hours  
**Tasks:**
- Add query history table
- Build saved segments feature
- Improve match reason display

---

### Fix #2: Complete Lead Profile
**Priority:** 🔥 MEDIUM  
**Time:** 3 hours  
**Tasks:**
- Build deep dossier view
- Complete enrichment flow
- Add data source attribution

---

### Fix #3: Complete Settings Integrations
**Priority:** 🔥 HIGH  
**Time:** 8 hours  
**Tasks:**
- Set up Google Calendar OAuth (4 hours)
- Complete Gmail integration (2 hours)
- Complete Slack integration (1 hour)
- Set up LinkedIn integration (8 hours - if API approved)

---

**Reference:**
- Dashboard Components: `/components/crm/`, `/components/ops/`
- Intelligence Features: `/docs/features/02-sales-intelligence.md`
- Workflow Specs: `/docs/features/18-workflow-connected-intelligence.md`

---

**Status:** 🟡 91% complete - Most components exist, routing needed  
**Priority:** HIGH - Core product experience  
**Action:** Implement routing, complete partial features

---

*This system map shows a highly complete dashboard with clear feature ownership and minor gaps to address.*

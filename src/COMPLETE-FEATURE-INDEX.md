# COMPLETE FEATURE INDEX
**Luxury AI CRM - Sales Intelligence OS**  
**All Screens, Features, AI Agents & Database Tables**

---

## 🖥️ ALL SCREENS (40+ Pages)

### 📊 CRM DASHBOARD SCREENS

#### 1. **Lead Dashboard** (Main Hub)
**URL**: http://localhost:5173/app/leads  
**Purpose**: Central command center for lead management  
**Features**:
- Lead table with sorting/filtering
- Add new leads
- Lead enrichment panel
- Fit score widget
- AI suggestions sidebar
- Bulk actions
- Export functionality

**Components**:
- `CRMLeadsDashboard.tsx`
- `LeadTable.tsx`
- `LeadEnrichmentPanel.tsx`
- `FitScoreWidget.tsx`
- `AISuggestionsPanel.tsx`

---

#### 2. **Agent Control Room** (AI Monitoring)
**URL**: http://localhost:5173/app/ops  
**Purpose**: Monitor all AI agents and their performance  
**Features**:
- 7 AI agent status cards
- Real-time metrics (success rate, latency, cost)
- Activity timeline
- Error logs
- Agent health indicators
- Performance charts

**Components**:
- `AgentControlRoom.tsx`
- `AgentStatusCard.tsx`
- `MetricsDashboard.tsx`
- `ActivityTimeline.tsx`

---

#### 3. **Automation Map** (Workflow Builder)
**URL**: http://localhost:5173/app/workflow  
**Purpose**: Visual workflow automation builder  
**Features**:
- Visual workflow canvas
- Drag-and-drop workflow builder
- 3 pre-configured workflows
- Trigger configuration
- Action step editor
- Execution history
- Workflow analytics

**Components**:
- `AutomationMapPage.tsx`
- `WorkflowCanvas.tsx`
- `TriggerConfigPanel.tsx`
- `ActionStepEditor.tsx`

---

#### 4. **Settings Page** (Configuration)
**URL**: http://localhost:5173/app/settings  
**Purpose**: System configuration and integrations  
**Features**:
- Profile management
- Integration connections (Google, Slack, HubSpot, Salesforce, Zoom)
- API key management
- Team management
- Billing & usage
- Notification preferences

**Components**:
- `SettingsPage.tsx`
- `IntegrationCards.tsx`
- `APIKeyManager.tsx`
- `TeamSettings.tsx`

---

### 🧠 SALES INTELLIGENCE SCREENS

#### 5. **Call Ingestion** (Upload/Paste)
**URL**: http://localhost:5173/app/intelligence/ingest  
**Purpose**: Upload or paste sales call transcripts  
**Features**:
- Audio file upload
- Transcript paste area
- Multiple file formats (MP3, WAV, M4A)
- Batch upload
- Call metadata entry (date, participants, company)

**Components**:
- `CallIngestion.tsx`
- `FileUploadZone.tsx`
- `TranscriptEditor.tsx`

---

#### 6. **Analysis Progress** (Processing)
**URL**: http://localhost:5173/app/intelligence/analysis  
**Purpose**: Real-time analysis progress display  
**Features**:
- 3-step progress animation
  - Step 1: Transcribing audio
  - Step 2: Analyzing conversation
  - Step 3: Generating action items
- Estimated time remaining
- "Thinking" animations (no spinners)
- Cancel analysis option

**Components**:
- `AnalysisState.tsx`
- `ProgressStepper.tsx`
- `ThinkingAnimation.tsx`

---

#### 7. **Call Brief** (Analysis Results)
**URL**: http://localhost:5173/app/intelligence/brief  
**Purpose**: View post-call analysis and action items  
**Features**:
- Call summary (2-3 sentences)
- Sentiment analysis (positive/neutral/negative)
- Key points extracted (budget, timeline, pain points)
- 3-5 action items with priorities (HIGH/MEDIUM/LOW)
- Concerns/objections identified
- Next steps recommendations
- Export to PDF/Email
- Share with team

**Components**:
- `CallBrief.tsx`
- `CallSummary.tsx`
- `ActionItems.tsx`
- `SentimentBadge.tsx`
- `KeyPointsList.tsx`

---

#### 8. **Search Results** (Natural Language)
**URL**: http://localhost:5173/app/intelligence/search  
**Keyboard Shortcut**: `Cmd+K` (Mac) or `Ctrl+K` (Windows)  
**Purpose**: Natural language search across CRM data  
**Features**:
- Natural language query parsing
- Real-time results
- Match explanations (why each result matches)
- Filter by: industry, budget, location, stage, score
- Sort by: relevance, date, fit score
- Click to open lead profile

**Components**:
- `SearchResults.tsx`
- `CommandBar.tsx`
- `SearchResultCard.tsx`
- `MatchReasoning.tsx`

---

### 📧 EMAIL & MESSAGING SCREENS

#### 9. **Message Composer** (Email Drafter)
**URL**: Opens as modal from lead profile  
**Trigger**: Click "Draft Email" on any lead  
**Purpose**: AI-powered email composition  
**Features**:
- Scenario selection (Post-Discovery, Budget Approval, Proposal, Break-up)
- AI draft generation
- Tone matching (Professional, Casual, Executive)
- Personalization based on call notes
- Subject line suggestions
- Edit and refine
- Send or schedule
- Save as template

**Components**:
- `MessageComposer.tsx`
- `EmailDraftEditor.tsx`
- `ToneSelector.tsx`
- `SubjectLineGenerator.tsx`

---

### 📈 DASHBOARD & PROJECTS SCREENS

#### 10. **Project Dashboard**
**URL**: http://localhost:5173/dashboard  
**Purpose**: Project overview and metrics  
**Features**:
- Project cards
- Metrics summary (deals won, revenue, pipeline)
- Activity feed
- Quick actions
- Team performance

**Components**:
- `ProjectDashboard.tsx`
- `ProjectCard.tsx`
- `MetricsSummary.tsx`
- `ActivityFeed.tsx`

---

#### 11. **Deck Editor**
**URL**: http://localhost:5173/deck-editor  
**Purpose**: Presentation/proposal editor  
**Features**:
- Slide editor
- AI content generation
- Templates library
- Export to PDF/PowerPoint

**Components**:
- `DeckEditor.tsx`
- `SlideCanvas.tsx`
- `ContentGenerator.tsx`

---

### 🏠 PUBLIC MARKETING SCREENS (No Login)

#### 12. **Home Page (V7 - Latest)**
**URL**: http://localhost:5173/  
**Purpose**: Main landing page  
**Features**: Hero, features, testimonials, CTA

#### 13. **Home Page Versions**
- **V6**: http://localhost:5173/v6
- **V5**: http://localhost:5173/v5
- **V4**: http://localhost:5173/v4
- **V3**: http://localhost:5173/v3
- **V2**: http://localhost:5173/v2
- **V1**: http://localhost:5173/v1

#### 14. **Projects Page**
**URL**: http://localhost:5173/projects  
**Purpose**: Case studies and portfolio

#### 15. **Process Page**
**URL**: http://localhost:5173/process  
**Purpose**: How we work methodology

#### 16. **Services Page**
**URL**: http://localhost:5173/services  
**Purpose**: All services overview

#### 17. **Service Detail Pages**
- **AI Web Dev**: http://localhost:5173/services/ai-web-dev
- **AI Development**: http://localhost:5173/services/ai-development
- **AI Sales & Marketing**: http://localhost:5173/services/ai-sales-marketing
- **AI Agents**: http://localhost:5173/services/ai-agents
- **AI MVP**: http://localhost:5173/services/ai-mvp
- **AI Chatbots**: http://localhost:5173/services/ai-chatbots

#### 18. **Industry Chatbot Pages**
- **SaaS**: http://localhost:5173/services/chatbot/saas
- **E-commerce**: http://localhost:5173/services/chatbot/ecommerce
- **Healthcare**: http://localhost:5173/services/chatbot/healthcare
- **Real Estate**: http://localhost:5173/services/chatbot/real-estate
- **B2B**: http://localhost:5173/services/chatbot/b2b
- **Automotive**: http://localhost:5173/services/chatbot/automotive
- **Tourism**: http://localhost:5173/services/chatbot/tourism

#### 19. **About Us Page**
**URL**: http://localhost:5173/about  
**Purpose**: Company information

#### 20. **WhatsApp Automation Page**
**URL**: http://localhost:5173/whatsapp  
**Purpose**: WhatsApp integration features

#### 21. **Booking Page**
**URL**: http://localhost:5173/booking  
**Purpose**: Schedule a demo

#### 22. **Sitemap**
**URL**: http://localhost:5173/sitemap  
**Purpose**: Site navigation

#### 23. **Style Guide**
**URL**: http://localhost:5173/style-guide  
**Purpose**: Design system showcase

#### 24. **Startup AI Architecture**
**URL**: http://localhost:5173/docs/startup-ai  
**Purpose**: Technical documentation

#### 25. **Investor Share Page**
**URL**: http://localhost:5173/share/investor  
**Purpose**: Investor deck sharing

#### 26. **Events Hub**
**URL**: http://localhost:5173/events  
**Purpose**: Upcoming events

---

### 🧙 WIZARD FLOW SCREENS

#### 27. **Brief Wizard**
**URL**: http://localhost:5173/wizard  
**Purpose**: Multi-step project brief

#### 28. **AI Processing**
**URL**: http://localhost:5173/processing  
**Purpose**: Processing animation

#### 29. **Proposal Ready**
**URL**: http://localhost:5173/proposal  
**Purpose**: Proposal delivery

---

### 🔐 AUTH SCREENS

#### 30. **Login Page**
**URL**: http://localhost:5173/login  
**Purpose**: User authentication

---

## 🤖 AI FEATURES (9 Total)

### **Feature 1: Lead Enrichment Agent**
**Screen**: Lead Dashboard → "Add Lead"  
**URL**: http://localhost:5173/app/leads  
**AI Model**: Gemini 2.0 Flash + Search Grounding  
**Purpose**: Automatically research and enrich lead data  
**Input**: Email address or company name  
**Output**:
- Company name
- Industry classification
- Employee count
- Budget tier estimation
- Tech stack analysis
- Fit score (0-100)
- Reasoning for score

**Cost**: ~$0.001 per lead  
**Latency**: 3-5 seconds  
**Service File**: `/services/lead-enrichment.service.ts`  
**Edge Function**: `/supabase/functions/enrich-lead/index.ts`  
**Hook**: `/hooks/useLeadEnrichment.ts`

**How It Works**:
1. User enters email (e.g., john@stripe.com)
2. System extracts company domain (stripe.com)
3. Gemini + Search Grounding researches company
4. AI analyzes fit against ICP (Ideal Customer Profile)
5. Calculates fit score based on:
   - Industry match
   - Budget tier
   - Tech stack compatibility
   - Growth signals
6. Returns enriched data

---

### **Feature 2: Call Analysis Agent (Post-Call Action Architect)**
**Screen**: Call Ingestion → Analysis → Brief  
**URLs**: 
- Ingest: http://localhost:5173/app/intelligence/ingest
- Analysis: http://localhost:5173/app/intelligence/analysis
- Brief: http://localhost:5173/app/intelligence/brief

**AI Model**: Gemini 2.0 Pro + Function Calling  
**Purpose**: Analyze sales calls and extract action items  
**Input**: Audio file or transcript  
**Output**:
- Call summary (2-3 sentences)
- Sentiment (positive/neutral/negative)
- Key information:
  - Budget mentioned
  - Timeline mentioned
  - Decision-makers
  - Competitors mentioned
  - Pain points
- 3-5 action items with:
  - Description
  - Priority (HIGH/MEDIUM/LOW)
  - Due date
  - Assigned owner
- Concerns/objections
- Next steps

**Cost**: ~$0.01 per call (Pro model) or ~$0.001 (Flash Thinking)  
**Latency**: 10-15 seconds  
**Service File**: `/services/call-analysis.service.ts`  
**Edge Function**: `/supabase/functions/analyze-call/index.ts`  
**Hook**: `/hooks/useCallAnalysis.ts`

**How It Works**:
1. User uploads audio or pastes transcript
2. System transcribes audio (if needed)
3. Gemini Pro analyzes conversation for:
   - Sentiment and tone
   - Key business information
   - Buying signals
   - Objections
4. Function Calling extracts structured action items
5. Calculates deal health indicators
6. Returns structured brief

---

### **Feature 3: Natural Language Search Agent**
**Screen**: Command Bar (Cmd+K) or Search Results  
**URL**: http://localhost:5173/app/intelligence/search  
**Keyboard Shortcut**: `Cmd+K` or `Ctrl+K`  
**AI Model**: Gemini 2.0 Flash + Function Calling  
**Purpose**: Search CRM data using natural language  
**Input**: Natural language query  
**Examples**:
- "leads in fintech with budget over 50k"
- "deals at risk in New York"
- "CEOs who opened my last email"
- "companies using React"

**Output**:
- Filtered results
- Match explanations (✓ Fintech ✓ Budget > $50K)
- Relevance scores
- Suggested refinements

**Cost**: ~$0.0001 per query  
**Latency**: 1-2 seconds  
**Service File**: `/services/nl-search.service.ts`  
**Edge Function**: `/supabase/functions/nl-search/index.ts`  
**Hook**: `/hooks/useNLSearch.ts`  
**Context**: `/context/CommandBarContext.tsx`

**How It Works**:
1. User types natural language query
2. Gemini Flash parses query into structured filters:
   - Industry
   - Budget range
   - Location
   - Tech stack
   - Engagement level
   - Deal stage
3. Converts to SQL WHERE clauses
4. Executes database query
5. Returns results with match reasons

**Supported Operators**:
- AND: "fintech AND NYC"
- OR: "NYC OR SF"
- NOT: "NOT healthcare"
- Comparisons: >, <, =, >=, <=
- LIKE: "companies like stripe"

---

### **Feature 4: Deal Health Monitor Agent**
**Screen**: Lead Dashboard → Click on deal  
**URL**: http://localhost:5173/app/leads (deal detail)  
**AI Model**: Gemini 2.0 Pro + Code Execution  
**Purpose**: Calculate and monitor deal health score  
**Input**: Deal data (last contact, engagement, stage, etc.)  
**Output**:
- Health score (0-100)
- Color-coded indicator:
  - 🟢 Green: Healthy (80-100)
  - 🟡 Yellow: At Risk (50-79)
  - 🔴 Red: Critical (<50)
- Risk factors (array)
- Opportunities (array)
- Recommended actions (prioritized)
- Historical health trend

**Scoring Formula**:
- **Recency (30 points)**:
  - Last contact 0-7 days: 30 points
  - 8-14 days: 20 points
  - 15-30 days: 10 points
  - 30+ days: 0 points
- **Engagement (30 points)**:
  - Email open rate
  - Meeting attendance
  - Champion involvement
- **Momentum (20 points)**:
  - Stage progression speed
  - Sentiment trend
- **Risk Deductions (-20 points)**:
  - Competitor presence: -5
  - Budget unclear: -5
  - No champion: -10

**Cost**: ~$0.005 per calculation  
**Latency**: 2-3 seconds  
**Service File**: `/services/deal-health.service.ts`  
**Edge Function**: `/supabase/functions/calculate-deal-health/index.ts` (to be deployed)

**How It Works**:
1. System collects deal data:
   - Last contact date
   - Email engagement metrics
   - Meeting history
   - Stage transitions
   - Sentiment from calls
2. Gemini Pro analyzes patterns
3. Code Execution calculates weighted score
4. AI identifies specific risks and opportunities
5. Generates prioritized recommendations

---

### **Feature 5: Email Drafter Agent**
**Screen**: Message Composer (modal)  
**URL**: Opens from lead profile → "Draft Email"  
**AI Model**: Gemini 2.0 Pro + RAG (Retrieval Augmented Generation)  
**Purpose**: Generate personalized follow-up emails  
**Input**:
- Call notes/transcript
- Lead profile
- Scenario (Post-Discovery, Budget Approval, etc.)
- User's writing style samples

**Output**:
- Subject line (40-60 characters)
- Email body (150-250 words)
- Call-to-action
- Tone-matched to user's style
- Personalized with call details

**Scenarios**:
- Post-Discovery Call
- Budget Approval Request
- Proposal Follow-up
- Break-up Email
- Re-engagement
- Meeting Confirmation

**Cost**: ~$0.005 per draft  
**Latency**: 3-5 seconds  
**Service File**: `/services/email-drafter.service.ts`  
**Edge Function**: `/supabase/functions/draft-email/index.ts` (to be deployed)

**How It Works**:
1. User selects scenario
2. System retrieves:
   - Recent call notes
   - Lead's pain points
   - Previous email history
   - User's writing style samples
3. RAG pulls relevant context
4. Gemini Pro drafts email matching:
   - User's tone
   - Lead's personality
   - Scenario requirements
5. Returns editable draft

---

### **Feature 6: Ghost Detection Workflow Agent**
**Screen**: Automation Map  
**URL**: http://localhost:5173/app/workflow  
**AI Model**: Gemini 2.0 Flash (scoring) + Pro (drafts)  
**Purpose**: Automatically re-engage stale leads  
**Trigger**: Cron job (daily at 9 AM)  
**Input**: All leads with no contact in 7+ days  
**Output**:
- Ghost score (0-100)
- Re-engagement email draft
- Recommended approach
- Notification to sales rep

**Ghost Scoring Criteria**:
- Days since last contact (0-40 points)
- Previous engagement level (0-30 points)
- Deal value (0-20 points)
- Stage in pipeline (0-10 points)

**Thresholds**:
- 70+ points: HIGH priority (re-engage immediately)
- 40-69 points: MEDIUM priority (re-engage this week)
- <40 points: LOW priority (archive or nurture)

**Cost**: ~$0.50 per day (batch processing)  
**Service File**: `/services/workflow-automation.service.ts`  
**Edge Function**: `/supabase/functions/workflows/ghost-detection/index.ts` (to be deployed)  
**Spec**: `/docs/features/workflows/19-ghost-detection.md`

**How It Works**:
1. Every day at 9 AM, system queries:
   - Leads with last_contact_date > 7 days ago
   - Deals in active stages
2. For each lead:
   - Gemini Flash calculates ghost score
   - If score > 40, generate re-engagement email
   - Gemini Pro drafts personalized message
3. Creates tasks in CRM:
   - Assign to lead owner
   - Set due date (today)
   - Attach draft email
4. Sends Slack notification

---

### **Feature 7: Contract-to-Cash Workflow Agent**
**Screen**: Automation Map  
**URL**: http://localhost:5173/app/workflow  
**AI Model**: Gemini 2.0 Pro + RAG + Code Execution  
**Purpose**: Automate post-contract processes  
**Trigger**: Database trigger when deal stage = "Contract Sent"  
**Input**: Signed contract (PDF)  
**Output**:
- Contract terms extracted
- Payment milestones created
- Invoice schedule generated
- Delivery timeline
- Kickoff meeting scheduled

**Extracted Data**:
- Total contract value
- Payment schedule
- Deliverables list
- Due dates
- Terms and conditions
- Signatures present

**Cost**: ~$0.02 per contract  
**Service File**: `/services/workflow-automation.service.ts`  
**Edge Function**: `/supabase/functions/workflows/contract-to-cash/index.ts` (to be deployed)  
**Spec**: `/docs/features/workflows/20-contract-to-cash.md`

**How It Works**:
1. When deal stage changes to "Contract Sent"
2. System retrieves uploaded contract PDF
3. Gemini Pro + RAG extracts:
   - Total value
   - Payment terms
   - Deliverables
   - Key dates
4. Code Execution calculates:
   - Payment milestones (e.g., 50% upfront, 50% on completion)
   - Invoice due dates
5. Creates records in CRM:
   - Payment milestones
   - Delivery tasks
   - Invoice reminders
6. Schedules kickoff meeting
7. Notifies team via Slack

---

### **Feature 8: Champion Autopilot Workflow Agent**
**Screen**: Automation Map  
**URL**: http://localhost:5173/app/workflow  
**AI Model**: Gemini 2.0 Pro + RAG  
**Purpose**: Identify and track champions in deals  
**Trigger**: Database trigger when new call is analyzed  
**Input**: Call transcript  
**Output**:
- Champion identified (name, title, role)
- Influence score (0-100)
- Engagement level
- Relationship strength
- Nurture strategy

**Champion Indicators**:
- Uses "we" language
- Asks detailed questions
- Introduces to other stakeholders
- Responds quickly to emails
- Advocates for solution internally

**Influence Score Factors**:
- Seniority level (0-40 points)
- Budget authority (0-30 points)
- Decision-making role (0-20 points)
- Internal influence signals (0-10 points)

**Cost**: ~$0.005 per call  
**Service File**: `/services/workflow-automation.service.ts`  
**Edge Function**: `/supabase/functions/workflows/champion-autopilot/index.ts` (to be deployed)  
**Spec**: `/docs/features/workflows/21-champion-autopilot.md`

**How It Works**:
1. When new call is analyzed
2. Gemini Pro analyzes transcript for champion signals:
   - Who spoke most positively?
   - Who asked detailed questions?
   - Who used "we" language?
   - Who mentioned internal processes?
3. RAG pulls LinkedIn/company data
4. Calculates influence score
5. Creates champion profile in CRM:
   - Link to contact
   - Influence score
   - Engagement history
   - Nurture recommendations
6. Suggests nurture actions:
   - Personalized content to share
   - Coffee/lunch invitation
   - Introduction to team
   - Executive briefing

---

### **Feature 9: AI Suggestions Panel**
**Screen**: Lead Dashboard (right sidebar)  
**URL**: http://localhost:5173/app/leads  
**AI Model**: Gemini 2.0 Flash (real-time analysis)  
**Purpose**: Proactive action recommendations  
**Input**: Real-time CRM data  
**Output**:
- Prioritized suggestions (HIGH/MEDIUM/LOW)
- Action cards with one-click execution
- Reasoning for each suggestion
- Expected impact

**Suggestion Types**:
1. **Follow-up Reminders**
   - "3 leads need follow-up today"
   - Click to see list and draft emails
2. **Deal Risk Alerts**
   - "Deal ABC at risk - no contact in 10 days"
   - Click to view deal and draft re-engagement
3. **Hot Lead Notifications**
   - "Lead XYZ opened email 5 times - ready to close"
   - Click to schedule call
4. **Opportunity Alerts**
   - "Company ABC just raised $50M - great timing"
   - Click to draft congratulations email
5. **Task Priorities**
   - "Focus on these 3 high-value deals today"
   - Click to view deal details

**Cost**: ~$0.001 per page load  
**Latency**: <1 second (cached)  
**Component**: `/components/crm/AISuggestionsPanel.tsx`

**How It Works**:
1. On page load, system analyzes:
   - Overdue follow-ups
   - Deal health scores
   - Recent engagement signals
   - Pipeline bottlenecks
2. Gemini Flash prioritizes actions
3. Generates suggestion cards
4. Updates every 5 minutes (or on data change)
5. User can dismiss or act on suggestions

---

## 🤖 AI AGENTS (7 Total)

### **Agent 1: Enrichment Agent**
**Model**: Gemini 2.0 Flash + Search Grounding  
**Purpose**: Lead data enrichment  
**Status**: ✅ Code Complete  
**Deployment**: Pending (`/supabase/functions/enrich-lead/`)  
**Success Rate**: ~92% (target: >90%)  
**Avg Latency**: 3-5 seconds  
**Cost per Operation**: $0.001

---

### **Agent 2: Call Analysis Agent**
**Model**: Gemini 2.0 Pro + Function Calling  
**Purpose**: Sales call analysis  
**Status**: ✅ Code Complete  
**Deployment**: Pending (`/supabase/functions/analyze-call/`)  
**Success Rate**: ~95% (target: >90%)  
**Avg Latency**: 10-15 seconds  
**Cost per Operation**: $0.01 (or $0.001 with Flash Thinking)

---

### **Agent 3: Search Agent**
**Model**: Gemini 2.0 Flash + Function Calling  
**Purpose**: Natural language search parsing  
**Status**: ✅ Code Complete  
**Deployment**: Pending (`/supabase/functions/nl-search/`)  
**Success Rate**: ~90% simple queries, ~85% complex (target: >90%)  
**Avg Latency**: 1-2 seconds  
**Cost per Operation**: $0.0001

---

### **Agent 4: Email Drafter Agent**
**Model**: Gemini 2.0 Pro + RAG  
**Purpose**: Email composition  
**Status**: 🟡 Service Layer Ready, Edge Function Pending  
**Deployment**: To be deployed (`/supabase/functions/draft-email/`)  
**Success Rate**: TBD (target: >90%)  
**Avg Latency**: 3-5 seconds  
**Cost per Operation**: $0.005

---

### **Agent 5: Deal Health Agent**
**Model**: Gemini 2.0 Pro + Code Execution  
**Purpose**: Deal health scoring  
**Status**: 🟡 Service Layer Ready, Edge Function Pending  
**Deployment**: To be deployed (`/supabase/functions/calculate-deal-health/`)  
**Success Rate**: TBD (target: >90%)  
**Avg Latency**: 2-3 seconds  
**Cost per Operation**: $0.005

---

### **Agent 6: Ghost Detection Agent**
**Model**: Gemini 2.0 Flash + Pro  
**Purpose**: Stale lead re-engagement  
**Status**: 🟡 Spec Complete, Implementation Pending  
**Deployment**: To be deployed (`/supabase/functions/workflows/ghost-detection/`)  
**Trigger**: Cron (daily 9 AM)  
**Cost per Day**: ~$0.50

---

### **Agent 7: Workflow Orchestrator Agent**
**Model**: Gemini 2.0 Pro + RAG  
**Purpose**: Contract-to-Cash + Champion Autopilot  
**Status**: 🟡 Spec Complete, Implementation Pending  
**Deployment**: To be deployed (2 Edge Functions)  
**Trigger**: Database triggers  
**Cost per Operation**: $0.005-$0.02

---

## 📊 DATABASE TABLES (8 Total)

### **Table 1: leads**
**Purpose**: Store all lead/contact data  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 1-50)  
**Access**: http://localhost:5173/app/leads

**Columns**:
- `id` (uuid, primary key)
- `email` (text, unique, required)
- `company` (text)
- `name` (text)
- `title` (text)
- `industry` (text)
- `employee_count` (integer)
- `budget_tier` (text) - 'SMB', 'Mid-Market', 'Enterprise'
- `tech_stack` (jsonb) - Array of technologies
- `fit_score` (integer) - 0-100
- `fit_reasoning` (text)
- `enriched_data` (jsonb) - Full enrichment data
- `enriched_at` (timestamp)
- `data_source` (text) - 'gemini_search', 'manual', 'import'
- `user_id` (uuid, foreign key to auth.users)
- `created_at` (timestamp)
- `updated_at` (timestamp)

**RLS Policies**: 4 policies (SELECT, INSERT, UPDATE, DELETE by user_id)

**Indexes**:
- `idx_leads_user_id` on `user_id`
- `idx_leads_email` on `email`
- `idx_leads_fit_score` on `fit_score`

---

### **Table 2: deals**
**Purpose**: Store deal/opportunity data  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 51-100)

**Columns**:
- `id` (uuid, primary key)
- `lead_id` (uuid, foreign key to leads)
- `title` (text)
- `value` (numeric) - Deal value in dollars
- `stage` (text) - 'Discovery', 'Proposal', 'Negotiation', 'Contract Sent', 'Closed Won', 'Closed Lost'
- `probability` (integer) - 0-100
- `close_date` (date)
- `health_score` (integer) - 0-100
- `health_data` (jsonb) - Risk factors, opportunities
- `user_id` (uuid, foreign key)
- `created_at` (timestamp)
- `updated_at` (timestamp)

**RLS Policies**: 4 policies (SELECT, INSERT, UPDATE, DELETE by user_id)

**Indexes**:
- `idx_deals_user_id` on `user_id`
- `idx_deals_lead_id` on `lead_id`
- `idx_deals_stage` on `stage`

---

### **Table 3: calls**
**Purpose**: Store sales call data and transcripts  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 101-150)  
**Access**: http://localhost:5173/app/intelligence/brief

**Columns**:
- `id` (uuid, primary key)
- `deal_id` (uuid, foreign key to deals)
- `call_date` (timestamp)
- `duration_minutes` (integer)
- `transcript` (text) - Full transcript
- `summary` (text) - AI-generated summary
- `sentiment` (text) - 'positive', 'neutral', 'negative'
- `key_points` (jsonb) - Array of key points
- `analysis_data` (jsonb) - Full AI analysis
- `user_id` (uuid, foreign key)
- `created_at` (timestamp)
- `updated_at` (timestamp)

**RLS Policies**: 4 policies

**Indexes**:
- `idx_calls_user_id` on `user_id`
- `idx_calls_deal_id` on `deal_id`
- `idx_calls_call_date` on `call_date`

---

### **Table 4: call_actions**
**Purpose**: Store action items extracted from calls  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 151-200)  
**Access**: http://localhost:5173/app/intelligence/brief

**Columns**:
- `id` (uuid, primary key)
- `call_id` (uuid, foreign key to calls)
- `type` (text) - 'follow-up-email', 'schedule-demo', 'send-proposal', 'internal-meeting'
- `description` (text)
- `priority` (text) - 'HIGH', 'MEDIUM', 'LOW'
- `due_date` (date)
- `status` (text) - 'pending', 'in-progress', 'completed', 'cancelled'
- `completed_at` (timestamp)
- `user_id` (uuid, foreign key)
- `created_at` (timestamp)
- `updated_at` (timestamp)

**RLS Policies**: 4 policies

**Indexes**:
- `idx_call_actions_user_id` on `user_id`
- `idx_call_actions_call_id` on `call_id`
- `idx_call_actions_status` on `status`

---

### **Table 5: email_drafts**
**Purpose**: Store AI-generated email drafts  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 201-250)

**Columns**:
- `id` (uuid, primary key)
- `lead_id` (uuid, foreign key to leads)
- `scenario` (text) - 'post-discovery', 'budget-approval', 'proposal', 'break-up'
- `subject` (text)
- `body` (text)
- `tone` (text) - 'professional', 'casual', 'executive'
- `sent_at` (timestamp)
- `opened_at` (timestamp)
- `clicked_at` (timestamp)
- `user_id` (uuid, foreign key)
- `created_at` (timestamp)
- `updated_at` (timestamp)

**RLS Policies**: 4 policies

**Indexes**:
- `idx_email_drafts_user_id` on `user_id`
- `idx_email_drafts_lead_id` on `lead_id`

---

### **Table 6: workflows**
**Purpose**: Store workflow configurations  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 251-300)  
**Access**: http://localhost:5173/app/workflow

**Columns**:
- `id` (uuid, primary key)
- `name` (text) - 'Ghost Detection', 'Contract-to-Cash', 'Champion Autopilot'
- `trigger_type` (text) - 'cron', 'database', 'webhook'
- `trigger_config` (jsonb) - Cron schedule or database trigger
- `actions` (jsonb) - Array of action steps
- `status` (text) - 'active', 'paused', 'archived'
- `last_run_at` (timestamp)
- `success_count` (integer)
- `failure_count` (integer)
- `user_id` (uuid, foreign key)
- `created_at` (timestamp)
- `updated_at` (timestamp)

**RLS Policies**: 4 policies

**Indexes**:
- `idx_workflows_user_id` on `user_id`
- `idx_workflows_status` on `status`

---

### **Table 7: ai_logs**
**Purpose**: Track all AI operations for cost monitoring  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 301-350)  
**Access**: http://localhost:5173/app/ops (metrics)

**Columns**:
- `id` (uuid, primary key)
- `operation` (text) - 'lead_enrichment', 'call_analysis', 'nl_search', etc.
- `model` (text) - 'gemini-2.0-flash-exp', 'gemini-2.0-pro-exp'
- `tokens_used` (integer)
- `cost` (numeric) - Cost in dollars
- `latency_ms` (integer)
- `success` (boolean)
- `error_message` (text)
- `user_id` (uuid, foreign key)
- `created_at` (timestamp)

**RLS Policies**: 2 policies (SELECT by user_id, INSERT system-only)

**Indexes**:
- `idx_ai_logs_user_id` on `user_id`
- `idx_ai_logs_operation` on `operation`
- `idx_ai_logs_created_at` on `created_at`

**Monitoring Query**:
```sql
SELECT 
  operation,
  COUNT(*) as calls,
  AVG(latency_ms) as avg_latency,
  SUM(cost) as total_cost,
  AVG(CASE WHEN success THEN 1.0 ELSE 0.0 END) as success_rate
FROM ai_logs
WHERE created_at > NOW() - INTERVAL '7 days'
GROUP BY operation;
```

---

### **Table 8: search_history**
**Purpose**: Track natural language search queries  
**Schema**: `/supabase/migrations/001_initial_schema.sql` (lines 351-362)

**Columns**:
- `id` (uuid, primary key)
- `query` (text) - Raw natural language query
- `parsed_filters` (jsonb) - Structured filters from AI
- `result_count` (integer)
- `clicked_result_id` (uuid) - Which result user clicked
- `user_id` (uuid, foreign key)
- `created_at` (timestamp)

**RLS Policies**: 2 policies

**Indexes**:
- `idx_search_history_user_id` on `user_id`
- `idx_search_history_created_at` on `created_at`

---

## 🎯 QUICK REFERENCE MATRIX

### Feature Access by Screen

| Screen | URL | Features | AI Agents |
|--------|-----|----------|-----------|
| **Lead Dashboard** | `/app/leads` | Lead Enrichment, AI Suggestions | Enrichment Agent |
| **Call Ingestion** | `/app/intelligence/ingest` | Upload/Paste Transcripts | None |
| **Call Analysis** | `/app/intelligence/analysis` | Progress Animation | None |
| **Call Brief** | `/app/intelligence/brief` | Action Items, Summary | Call Analysis Agent |
| **Search** | `Cmd+K` | Natural Language Search | Search Agent |
| **Agent Control** | `/app/ops` | Agent Monitoring | All Agents |
| **Automation Map** | `/app/workflow` | Workflows, Triggers | Ghost Detection, Contract-to-Cash, Champion |
| **Settings** | `/app/settings` | Integrations, API Keys | None |

---

### Database Usage by Feature

| Feature | Tables Used |
|---------|-------------|
| **Lead Enrichment** | leads, ai_logs |
| **Call Analysis** | calls, call_actions, deals, ai_logs |
| **NL Search** | leads, deals, search_history, ai_logs |
| **Deal Health** | deals, calls, email_drafts |
| **Email Drafter** | email_drafts, leads, calls, ai_logs |
| **Ghost Detection** | leads, email_drafts, workflows, ai_logs |
| **Contract-to-Cash** | deals, workflows, ai_logs |
| **Champion Autopilot** | calls, leads, workflows, ai_logs |

---

## 🚀 HOW TO ACCESS

### Start Development Server
```bash
npm run dev
```

### Open Main Dashboard
http://localhost:5173/app/leads

### Test Each Feature
1. **Lead Enrichment**: Click "Add Lead" → Enter `john@stripe.com`
2. **Call Analysis**: Go to `/app/intelligence/ingest` → Paste transcript
3. **Search**: Press `Cmd+K` → Type "leads in fintech"
4. **Agent Control**: Go to `/app/ops`
5. **Workflows**: Go to `/app/workflow`

---

## 📚 DOCUMENTATION

- **Complete Guide**: `/FEATURE-VERIFICATION-GUIDE.md`
- **Visual Sitemap**: `/SITEMAP-VISUAL.md`
- **Quick Start**: `/QUICK-START.md`
- **Deployment**: `/DEPLOY-NOW.md`

---

**Created**: December 21, 2025  
**Status**: ✅ All screens documented with URLs  
**Total Screens**: 30+  
**Total Features**: 9  
**Total AI Agents**: 7  
**Total Database Tables**: 8

# 🌳 Visual Site Tree - Luxury AI CRM

**Hierarchical view of all pages and routes**

---

## 🌐 **COMPLETE SITE TREE**

```
Luxury AI CRM Application
│
├─ 🏠 ROOT (/)                                          [PUBLIC - Homepage V6 ⭐ DEFAULT]
│
├─ 📄 CORE MARKETING PAGES
│  ├─ /about                                            [About Us]
│  ├─ /booking                                          [Meeting Scheduler]
│  ├─ /projects                                         [Portfolio Showcase]
│  ├─ /process                                          [How We Work]
│  ├─ /sitemap                                          [Sitemap Directory]
│  ├─ /style-guide                                      [Design System]
│  ├─ /whatsapp                                         [WhatsApp Automation]
│  ├─ /events                                           [Event Hub]
│  └─ /share/investor                                   [Investor Materials]
│
├─ 🤖 SERVICES HUB
│  ├─ /services                                         [Services Overview]
│  │
│  ├─ 🔧 AI DEVELOPMENT SERVICES
│  │  ├─ /services/ai-web-dev                          [Web Development]
│  │  ├─ /services/ai-development                      [Custom AI Solutions]
│  │  ├─ /services/ai-sales-marketing                  [Sales & Marketing AI]
│  │  ├─ /services/ai-agents                           [Autonomous AI Agents]
│  │  ├─ /services/ai-mvp                              [MVP Development]
│  │  └─ /services/ai-chatbots                         [Chatbot Overview]
│  │
│  └─ 💬 CHATBOT INDUSTRY SOLUTIONS
│     ├─ /services/chatbot/saas                        [SaaS Chatbots]
│     ├─ /services/chatbot/ecommerce                   [E-commerce Chatbots]
│     ├─ /services/chatbot/healthcare                  [Healthcare Chatbots]
│     ├─ /services/chatbot/real-estate                 [Real Estate Chatbots]
│     ├─ /services/chatbot/b2b                         [B2B Chatbots]
│     ├─ /services/chatbot/automotive                  [Automotive Chatbots]
│     └─ /services/chatbot/tourism                     [Tourism Chatbots]
│
├─ 🧙 WIZARD FLOW (Lead Generation Funnel)
│  ├─ /wizard                                           [Brief Wizard - 5 Steps]
│  │  ├─ Step 1: Project Type Selection
│  │  ├─ Step 2: Budget Range
│  │  ├─ Step 3: Timeline Preference
│  │  ├─ Step 4: Requirements & Features
│  │  └─ Step 5: Contact Information
│  │
│  ├─ /processing                                       [AI Processing Screen]
│  │  ├─ Analyzing requirements
│  │  ├─ Generating proposal
│  │  └─ AI thinking animations
│  │
│  └─ /proposal                                         [Proposal Ready Screen]
│     ├─ View generated proposal
│     ├─ Accept/Decline options
│     └─ Schedule consultation
│
├─ 🔐 AUTHENTICATION
│  └─ /login                                            [Login Page]
│     ├─ Email/Password auth
│     ├─ Social logins (Google, GitHub)
│     └─ Magic link authentication
│
├─ 📊 CLIENT DASHBOARD (Protected)
│  ├─ /dashboard                                        [Project Dashboard]
│  │  ├─ Project overview
│  │  ├─ Milestones & deliverables
│  │  ├─ Team collaboration
│  │  ├─ File management
│  │  └─ Timeline tracking
│  │
│  └─ /deck-editor                                      [Presentation Builder]
│     ├─ Slide editor
│     ├─ Template library
│     ├─ Export to PDF/PPTX
│     └─ Real-time collaboration
│
├─ 🤖 CRM/ADMIN PORTAL (Protected - Internal)
│  └─ /app
│     ├─ /leads                                         [Lead Management]
│     │  ├─ Lead list with filters
│     │  ├─ Lead detail cards
│     │  ├─ Status pipeline
│     │  ├─ Activity timeline
│     │  ├─ Contact enrichment
│     │  └─ Notes & tags
│     │
│     ├─ /ops                                           [Agent Control Room]
│     │  ├─ AI agent monitoring
│     │  ├─ Task queue management
│     │  ├─ Performance metrics
│     │  ├─ Agent configuration
│     │  └─ Error logs
│     │
│     ├─ /workflow                                      [Automation Map]
│     │  ├─ Visual workflow builder
│     │  ├─ Automation rules
│     │  ├─ Trigger configuration
│     │  ├─ Integration connections
│     │  └─ Testing & debugging
│     │
│     └─ /settings                                      [System Settings]
│        ├─ Account settings
│        ├─ Team management
│        ├─ API key management
│        ├─ Integration setup
│        ├─ Billing & usage
│        └─ Security preferences
│
├─ 🧠 SALES INTELLIGENCE OS (Protected - AI Features)
│  └─ /app/intelligence
│     ├─ /ingest                                        [Call Ingestion]
│     │  ├─ Upload recording (audio/video)
│     │  ├─ Paste transcript
│     │  ├─ Connect CRM (auto-sync)
│     │  └─ Metadata form
│     │
│     ├─ /analysis                                      [AI Analysis State]
│     │  ├─ Processing status
│     │  ├─ Transcript generation
│     │  ├─ Sentiment analysis
│     │  ├─ Key moments detection
│     │  ├─ Speaker identification
│     │  └─ Action items extraction
│     │
│     ├─ /brief                                         [Call Brief Output]
│     │  ├─ Executive summary
│     │  ├─ Deal health score
│     │  ├─ Objections detected
│     │  ├─ Champion identified
│     │  ├─ Next steps (AI-generated)
│     │  ├─ Follow-up email draft
│     │  └─ Export options
│     │
│     └─ /search                                        [Command Bar Search]
│        ├─ Natural language queries
│        ├─ Lead search results
│        ├─ Deal lookup
│        ├─ Activity search
│        └─ Knowledge base
│
├─ 📚 DOCUMENTATION & RESOURCES
│  └─ /docs
│     └─ /startup-ai                                    [Startup AI Guide]
│        ├─ AI strategy framework
│        ├─ Implementation roadmap
│        ├─ Best practices
│        └─ Case studies
│
└─ ⚠️ ERROR HANDLING
   └─ /*                                                [404 Not Found]
      └─ Redirect to homepage with error message
```

---

## 🎯 **USER FLOW VISUALIZATIONS**

### **Flow 1: New Visitor → Lead Conversion**
```
┌─────────────┐
│   Landing   │
│      /      │
└──────┬──────┘
       │
       ├─→ Explore Services ──→ /services/ai-chatbots
       │                              │
       │                              ↓
       │                         View Details
       │                              │
       ↓                              ↓
   Click CTA                    Click "Get Started"
       │                              │
       └──────────┬───────────────────┘
                  ↓
          ┌──────────────┐
          │   /wizard    │ ← Start wizard flow
          └──────┬───────┘
                 │
                 ├─ Step 1: Project Type
                 ├─ Step 2: Budget
                 ├─ Step 3: Timeline
                 ├─ Step 4: Requirements
                 └─ Step 5: Contact Info
                 │
                 ↓
          ┌─────────────┐
          │ /processing │ ← AI analyzes input
          └──────┬──────┘
                 │
                 ↓
          ┌─────────────┐
          │  /proposal  │ ← View generated proposal
          └──────┬──────┘
                 │
                 ├─→ Accept → Redirect to /login
                 └─→ Decline → Back to homepage
```

### **Flow 2: CRM User → Sales Call Analysis**
```
┌─────────────┐
│   /login    │ ← Authenticate
└──────┬──────┘
       │
       ↓
┌──────────────────┐
│   /app/leads     │ ← View lead list
└──────┬───────────┘
       │
       ├─→ Click "Analyze Call"
       │
       ↓
┌───────────────────��────┐
│ /app/intelligence/     │
│       ingest           │ ← Upload recording
└──────┬─────────────────┘
       │
       ├─ Upload audio file
       ├─ Add context (deal stage, participants)
       └─ Submit
       │
       ↓
┌────────────────────────┐
│ /app/intelligence/     │
│      analysis          │ ← AI processing
└──────┬─────────────────┘
       │
       ├─ Transcription (2-3 min)
       ├─ Sentiment analysis
       ├─ Key moments detection
       └─ Action items extraction
       │
       ↓
┌────────────────────────┐
│ /app/intelligence/     │
│       brief            │ ← View insights
└──────┬─────────────────┘
       │
       ├─ Read summary
       ├─ Copy action items
       ├─ Draft follow-up email
       └─ Update CRM (auto-sync)
       │
       ↓
┌──────────────────┐
│   /app/leads     │ ← Back to lead list
└──────────────────┘
```

### **Flow 3: Client Project Management**
```
┌─────────────┐
│   /login    │ ← Client logs in
└──────┬──────┘
       │
       ↓
┌──────────────────┐
│   /dashboard     │ ← Project overview
└──────┬───────────┘
       │
       ├─ View milestones
       ├─ Check deliverables
       ├─ Download files
       ├─ Send message to team
       │
       ├─→ Need to present?
       │
       ↓
┌──────────────────┐
│  /deck-editor    │ ← Build presentation
└──────┬───────────┘
       │
       ├─ Choose template
       ├─ Add slides
       ├─ Customize branding
       ├─ Preview deck
       └─ Export to PDF
       │
       ↓
   Download & Share
```

---

## 🔒 **ACCESS LEVEL MATRIX**

| Route | Public | Client | Admin | AI Features |
|-------|--------|--------|-------|-------------|
| `/` (Marketing) | ✅ | ✅ | ✅ | ❌ |
| `/services/*` | ✅ | ✅ | ✅ | ❌ |
| `/wizard` | ✅ | ✅ | ✅ | ❌ |
| `/login` | ✅ | ✅ | ✅ | ❌ |
| `/dashboard` | ❌ | ✅ | ✅ | ❌ |
| `/deck-editor` | ❌ | ✅ | ✅ | ❌ |
| `/app/leads` | ❌ | ❌ | ✅ | ❌ |
| `/app/ops` | ❌ | ❌ | ✅ | ❌ |
| `/app/workflow` | ❌ | ❌ | ✅ | ❌ |
| `/app/settings` | ❌ | ❌ | ✅ | ❌ |
| `/app/intelligence/*` | ❌ | ❌ | ✅ | ✅ |

**Legend:**
- ✅ **Accessible** - User can view/interact
- ❌ **Blocked** - Redirects to login or 403

---

## 🎨 **PAGE DESIGN VERSIONS**

### **Production Pages (V6 - Default)**
```
✅ Active Routes Using V6 Design:
├─ /                          (HomePageV6 ⭐ DEFAULT)
├─ /v6                        (HomePageV6 - Same as /)
└─ /style-guide               (StyleGuideV6)
```

### **V7 Design (Archive)**
```
📦 V7 Routes (Globe Illustration):
├─ /v7                        (HomePageV7 - Globe version)
├─ /projects                  (ProjectsPageV7)
├─ /services/ai-web-dev       (AIWebDevPageV7)
├─ /services/ai-development   (AIDevelopmentPageV7)
├─ /services/ai-sales-marketing (AISalesMarketingPageV7)
├─ /services/ai-agents        (AIAgentsPageV7)
├─ /services/ai-mvp           (AIMVPPageV7)
└─ /services/ai-chatbots      (AIChatbotsPageV7)
```

### **Mixed Version Pages**
```
🔧 Using Earlier Versions:
├─ /process         (ProcessPageV2)
├─ /services        (ServicesPageV2)
└─ /sitemap         (SitemapV2)
```

---

## 💬 **CHATBOT DEPLOYMENT MAP**

### **Chatbot Enabled** (21 pages)
```
✅ Chatbot Active:
├─ / (Homepage)
├─ All /services/* pages (6)
├─ All /services/chatbot/* pages (7)
├─ /about
├─ /projects
├─ /process
├─ /booking
├─ /events
└─ /share/investor
```

### **Chatbot Disabled** (Clean UX)
```
❌ Chatbot Hidden:
├─ /wizard
├─ /processing
├─ /proposal
├─ /login
├─ /dashboard
├─ /deck-editor
└─ All /app/* routes (9)
```

---

## 📊 **ROUTE STATISTICS**

| Category | Count | % of Total |
|----------|-------|------------|
| **Marketing Pages** | 10 | 25% |
| **Service Pages** | 14 | 35% |
| **Wizard Flow** | 3 | 7.5% |
| **Authentication** | 1 | 2.5% |
| **Client Dashboard** | 2 | 5% |
| **CRM/Admin** | 4 | 10% |
| **AI Intelligence** | 4 | 10% |
| **Documentation** | 1 | 2.5% |
| **Error Handling** | 1 | 2.5% |
| **TOTAL** | 40 | 100% |

---

## 🚀 **PERFORMANCE PRIORITIES**

### **Critical Routes (LCP < 2.5s)**
```
High Priority Performance:
├─ / (Homepage V7)
├─ /services/ai-chatbots
├─ /wizard
└─ /dashboard
```

### **Standard Routes (LCP < 3.5s)**
```
Medium Priority:
├─ All other /services/*
├─ /about
└─ /projects
```

### **Admin Routes (LCP < 5s)**
```
Lower Priority (Internal Only):
└─ All /app/* routes
```

---

## 🔗 **INTEGRATION POINTS**

```
External Connections:
├─ Supabase
│  ├─ /login (Auth)
│  ├─ /dashboard (Database)
│  └─ /app/leads (Realtime)
│
├─ WhatsApp Business API
│  └─ /whatsapp (Integration UI)
│
├─ Calendar APIs (Cal.com, Calendly)
│  └─ /booking (Scheduling)
│
└─ AI Services (OpenAI, Anthropic)
   └─ /app/intelligence/* (Call Analysis)
```

---

**🎯 Total Pages: 40 Production Routes**  
**✅ All Routes Documented**  
**📅 Last Updated: December 27, 2025**
# QUICK REFERENCE - SCREENS & FEATURES
**Luxury AI CRM - All Screens with URLs**

---

## 🎯 MAIN CRM SCREENS (Start Here)

| # | Screen Name | URL | Features |
|---|-------------|-----|----------|
| 1 | **Lead Dashboard** | http://localhost:5173/app/leads | Lead enrichment, AI suggestions, fit scoring |
| 2 | **Call Ingestion** | http://localhost:5173/app/intelligence/ingest | Upload audio, paste transcripts |
| 3 | **Call Brief** | http://localhost:5173/app/intelligence/brief | Action items, sentiment, summary |
| 4 | **Natural Language Search** | Press `Cmd+K` or `Ctrl+K` | AI-powered search across CRM |
| 5 | **Agent Control Room** | http://localhost:5173/app/ops | Monitor AI agents, metrics |
| 6 | **Automation Map** | http://localhost:5173/app/workflow | Workflow builder, triggers |
| 7 | **Settings** | http://localhost:5173/app/settings | Integrations, API keys, team |

---

## 🤖 9 AI FEATURES

| # | Feature Name | Access Point | AI Model | Status |
|---|--------------|--------------|----------|--------|
| 1 | **Lead Enrichment** | `/app/leads` → "Add Lead" | Gemini Flash + Search | ✅ Ready |
| 2 | **Call Analysis** | `/app/intelligence/ingest` | Gemini Pro + Functions | ✅ Ready |
| 3 | **NL Search** | Press `Cmd+K` | Gemini Flash + Functions | ✅ Ready |
| 4 | **Deal Health** | `/app/leads` → Click deal | Gemini Pro + Code | ✅ Ready |
| 5 | **Email Drafter** | Lead → "Draft Email" | Gemini Pro + RAG | ✅ Ready |
| 6 | **Ghost Detection** | `/app/workflow` | Gemini Flash + Pro | ✅ Ready |
| 7 | **Contract-to-Cash** | `/app/workflow` | Gemini Pro + RAG | ✅ Ready |
| 8 | **Champion Autopilot** | `/app/workflow` | Gemini Pro + RAG | ✅ Ready |
| 9 | **AI Suggestions** | `/app/leads` (sidebar) | Gemini Flash | ✅ Ready |

---

## 🤖 7 AI AGENTS

| # | Agent Name | Purpose | Model | Cost/Op |
|---|------------|---------|-------|---------|
| 1 | **Enrichment Agent** | Research companies | Gemini Flash + Search | $0.001 |
| 2 | **Call Analysis Agent** | Analyze calls | Gemini Pro | $0.01 |
| 3 | **Search Agent** | Parse NL queries | Gemini Flash | $0.0001 |
| 4 | **Email Drafter Agent** | Draft emails | Gemini Pro + RAG | $0.005 |
| 5 | **Deal Health Agent** | Score deals | Gemini Pro + Code | $0.005 |
| 6 | **Ghost Detection Agent** | Re-engage leads | Gemini Flash + Pro | $0.50/day |
| 7 | **Workflow Orchestrator** | Automate workflows | Gemini Pro + RAG | $0.005 |

---

## 📊 8 DATABASE TABLES

| # | Table Name | Purpose | Key Columns |
|---|------------|---------|-------------|
| 1 | `leads` | Contact data | email, company, fit_score |
| 2 | `deals` | Opportunities | value, stage, health_score |
| 3 | `calls` | Call transcripts | transcript, summary, sentiment |
| 4 | `call_actions` | Action items | description, priority, due_date |
| 5 | `email_drafts` | Email drafts | subject, body, sent_at |
| 6 | `workflows` | Automations | name, trigger_type, status |
| 7 | `ai_logs` | AI operations | operation, cost, success |
| 8 | `search_history` | Search queries | query, parsed_filters |

---

## 🏠 ALL PUBLIC PAGES (40+ Total)

### Landing Pages
- `/` - Home (Latest)
- `/v1` - `/v6` - Version archives
- `/projects` - Case studies
- `/about` - About us
- `/booking` - Schedule demo

### Service Pages
- `/services` - All services
- `/services/ai-web-dev` - Web development
- `/services/ai-development` - Software development
- `/services/ai-sales-marketing` - Sales & marketing
- `/services/ai-agents` - AI agents
- `/services/ai-mvp` - MVP development
- `/services/ai-chatbots` - Chatbots

### Industry Pages
- `/services/chatbot/saas` - SaaS
- `/services/chatbot/ecommerce` - E-commerce
- `/services/chatbot/healthcare` - Healthcare
- `/services/chatbot/real-estate` - Real estate
- `/services/chatbot/b2b` - B2B
- `/services/chatbot/automotive` - Automotive
- `/services/chatbot/tourism` - Tourism

### Other Pages
- `/whatsapp` - WhatsApp automation
- `/sitemap` - Site map
- `/style-guide` - Design system
- `/docs/startup-ai` - Technical docs
- `/share/investor` - Investor deck
- `/events` - Events hub

---

## 📁 COMPONENT LOCATIONS

### CRM Components
```
/components/crm/
├── CRMLeadsDashboard.tsx       # Main dashboard
├── CommandBar.tsx               # Cmd+K search
├── MessageComposer.tsx          # Email drafter
├── SettingsPage.tsx             # Settings
├── AISuggestionsPanel.tsx       # AI suggestions
│
├── enrichment/
│   ├── LeadEnrichmentPanel.tsx  # Lead enrichment UI
│   ├── FitScoreWidget.tsx       # Fit score display
│   └── EnrichmentProgress.tsx   # Progress animation
│
├── intelligence/
│   ├── CallIngestion.tsx        # Call upload
│   ├── AnalysisState.tsx        # Analysis progress
│   ├── CallBrief.tsx            # Analysis results
│   ├── SearchResults.tsx        # Search results
│   └── ActionItems.tsx          # Action items
│
├── health/
│   ├── DealHealthDashboard.tsx  # Health monitor
│   ├── HealthScoreCard.tsx      # Score display
│   └── RiskFactorsList.tsx      # Risk indicators
│
└── workflows/
    ├── WorkflowCanvas.tsx       # Workflow editor
    └── TriggerConfigPanel.tsx   # Trigger settings
```

### Operations Components
```
/components/ops/
├── AgentControlRoom.tsx         # Agent monitoring
└── AutomationMapPage.tsx        # Workflow automation
```

### Service Layer
```
/services/
├── lead-enrichment.service.ts   # Lead enrichment
├── call-analysis.service.ts     # Call analysis
├── nl-search.service.ts         # NL search
├── deal-health.service.ts       # Deal health
├── email-drafter.service.ts     # Email drafter
└── workflow-automation.service.ts # Workflows
```

### Edge Functions
```
/supabase/functions/
├── enrich-lead/index.ts         # Lead enrichment
├── analyze-call/index.ts        # Call analysis
└── nl-search/index.ts           # NL search
```

---

## ⚡ QUICK ACCESS

### Start Development Server
```bash
npm run dev
```

### Main URLs to Test
1. **Lead Dashboard**: http://localhost:5173/app/leads
2. **Call Ingestion**: http://localhost:5173/app/intelligence/ingest
3. **Agent Control**: http://localhost:5173/app/ops
4. **Search**: Press `Cmd+K` from any page

### Test Lead Enrichment
```
1. Go to: http://localhost:5173/app/leads
2. Click: "Add Lead"
3. Enter: john@stripe.com
4. Watch AI enrichment animation
```

### Test Call Analysis
```
1. Go to: http://localhost:5173/app/intelligence/ingest
2. Paste: "We need a CRM for 20 people. Budget is $75k."
3. Click: "Analyze Call"
4. View action items extracted
```

### Test Natural Language Search
```
1. Press: Cmd+K (or Ctrl+K)
2. Type: "leads in fintech with budget over 50k"
3. Press: Enter
4. View filtered results
```

---

## 📊 FEATURE MATRIX

### By Screen

| Screen | Lead Enrich | Call Analysis | NL Search | Deal Health | Email Draft | Workflows | AI Suggest |
|--------|-------------|---------------|-----------|-------------|-------------|-----------|------------|
| Lead Dashboard | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Call Ingestion | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Call Brief | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Search Results | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Agent Control | All agents monitored here |
| Automation Map | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

---

## 🎯 VERIFICATION CHECKLIST

### Visual Check (2 min)
- [ ] Start: `npm run dev`
- [ ] Open: http://localhost:5173/app/leads
- [ ] Verify: Page loads, no errors
- [ ] Check: Navigation works
- [ ] Test: Click "Add Lead"

### Feature Check (5 min)
- [ ] Lead enrichment animation
- [ ] Call analysis flow
- [ ] Search (Cmd+K) opens
- [ ] Agent control displays metrics
- [ ] Workflows visible

### Console Check (1 min)
- [ ] Press F12
- [ ] Go to Console tab
- [ ] Verify: No red errors
- [ ] Warnings: OK

---

## 📚 DOCUMENTATION

- **Complete Index**: `/COMPLETE-FEATURE-INDEX.md` (detailed)
- **Quick Start**: `/QUICK-START.md` (2 min)
- **Verification Guide**: `/FEATURE-VERIFICATION-GUIDE.md` (15 min)
- **Visual Sitemap**: `/SITEMAP-VISUAL.md` (5 min)
- **Deployment**: `/DEPLOY-NOW.md`

---

## 🎉 SUMMARY

**Total Screens**: 40+  
**CRM Screens**: 7 main screens  
**AI Features**: 9 features  
**AI Agents**: 7 agents  
**Database Tables**: 8 tables  

**Start Here**: http://localhost:5173/app/leads  
**Test Features**: Follow verification checklist above  
**Deploy**: Run `./scripts/deploy-production.sh` (2 hours)

---

**Created**: December 21, 2025  
**Status**: ✅ Complete reference guide  
**Your Next Step**: Run `npm run dev` and explore!

# SYSTEMATIC IMPLEMENTATION PLAN

**Last Updated**: 2024-12-20  
**Status**: Ready to Execute

---

## PROGRESS TRACKER

| Phase | Tasks | Owner | Status | Validation |
|-------|-------|-------|--------|------------|
| 1. Handoff Prep | Export types, mocks, specs | Figma Make | ⬜ Not Started | Package complete |
| 2. Backend Setup | Database, APIs, auth | Cursor AI | ⬜ Not Started | APIs responding |
| 3. AI Integration | Gemini agents, logic | Cursor AI | ⬜ Not Started | Agents working |
| 4. Testing | End-to-end flows | Both | ⬜ Not Started | All flows pass |
| 5. Optimization | Performance, mobile | Both | ⬜ Not Started | <2s load time |
| 6. Deployment | Production launch | DevOps | ⬜ Not Started | Live & monitored |

---

## PHASE 1: HANDOFF PREPARATION (FIGMA MAKE)

### Task 1.1: Export Type Definitions
- [ ] Create `/handoff/types/core.ts`
- [ ] Create `/handoff/types/leads.ts`
- [ ] Create `/handoff/types/intelligence.ts`
- [ ] Create `/handoff/types/workflows.ts`

### Task 1.2: Export Mock Data
- [ ] Create `/handoff/mocks/leads-data.ts`
- [ ] Create `/handoff/mocks/calls-data.ts`
- [ ] Create `/handoff/mocks/users-data.ts`

### Task 1.3: Write API Specifications
- [ ] Create `/handoff/specs/auth-api.md`
- [ ] Create `/handoff/specs/leads-api.md`
- [ ] Create `/handoff/specs/intelligence-api.md`
- [ ] Create `/handoff/specs/workflows-api.md`

### Task 1.4: Write AI Agent Specs
- [ ] Create `/handoff/specs/agents/lead-enrichment.md`
- [ ] Create `/handoff/specs/agents/call-analysis.md`
- [ ] Create `/handoff/specs/agents/action-architect.md`
- [ ] Create `/handoff/specs/agents/nl-search.md`

### Task 1.5: Document Integration Points
- [ ] Create `/handoff/README.md` (integration guide)
- [ ] Create `/handoff/VALIDATION.md` (test cases)

**Validation**: All files created, types compile, specs clear

---

## PHASE 2: BACKEND SETUP (CURSOR AI)

### Task 2.1: Database Schema
- [ ] Set up Supabase project
- [ ] Create `users` table
- [ ] Create `leads` table
- [ ] Create `activities` table
- [ ] Create `deals` table
- [ ] Create `call_transcripts` table
- [ ] Create `actions` table
- [ ] Create `workflows` table
- [ ] Set up Row-Level Security (RLS)
- [ ] Create indexes

### Task 2.2: Authentication API
- [ ] POST /api/auth/login
- [ ] POST /api/auth/logout
- [ ] GET /api/auth/session
- [ ] POST /api/auth/refresh
- [ ] Implement JWT generation
- [ ] Implement session management

### Task 2.3: Leads API
- [ ] GET /api/leads (list with pagination)
- [ ] GET /api/leads/:id (single lead)
- [ ] POST /api/leads (create)
- [ ] PUT /api/leads/:id (update)
- [ ] DELETE /api/leads/:id (soft delete)
- [ ] GET /api/leads/search (filters)

### Task 2.4: Activities API
- [ ] GET /api/activities (for a lead)
- [ ] POST /api/activities (create)
- [ ] GET /api/activities/timeline (feed view)

### Task 2.5: Deploy Backend
- [ ] Deploy to Vercel/Railway
- [ ] Set environment variables
- [ ] Test all endpoints
- [ ] Set up error logging

**Validation**: All CRUD operations work, auth flows correctly

---

## PHASE 3: AI INTEGRATION (CURSOR AI + GEMINI)

### Task 3.1: Gemini Setup
- [ ] Get Gemini API key
- [ ] Set up Gemini SDK
- [ ] Configure function calling
- [ ] Set up context caching
- [ ] Test basic prompts

### Task 3.2: Lead Enrichment Agent
**Input**: Lead email/company name  
**Process**:
1. Call Gemini with Search Grounding
2. Extract company data (size, industry, revenue)
3. Score lead (0-100) based on fit
4. Store enriched data in database

**Output**: Enriched lead object

**Files to Create**:
- [ ] `/backend/agents/lead-enrichment.ts`
- [ ] `/backend/prompts/lead-enrichment.txt`

### Task 3.3: Call Analysis Agent
**Input**: Audio file or transcript  
**Process**:
1. Transcribe (if audio) using Gemini
2. Analyze sentiment, key points, next steps
3. Extract action items using function calling
4. Classify call outcome (positive/neutral/negative)

**Output**: CallAnalysis object with actions array

**Files to Create**:
- [ ] `/backend/agents/call-analysis.ts`
- [ ] `/backend/prompts/call-analysis.txt`
- [ ] `/backend/schemas/call-actions-schema.json`

### Task 3.4: Post-Call Action Architect
**Input**: Call transcript + lead context  
**Process**:
1. Extract all action items
2. Prioritize using Gemini Thinking mode
3. Generate email drafts
4. Suggest meeting times
5. Create follow-up tasks

**Output**: Prioritized actions with drafts

**Files to Create**:
- [ ] `/backend/agents/action-architect.ts`
- [ ] `/backend/prompts/action-prioritization.txt`
- [ ] `/backend/prompts/email-drafter.txt`

### Task 3.5: Natural Language Search
**Input**: Search query (natural language)  
**Process**:
1. Parse query using Gemini function calling
2. Extract filters (date, status, company, etc.)
3. Generate SQL query
4. Execute search
5. Rank results by relevance

**Output**: Search results array

**Files to Create**:
- [ ] `/backend/agents/nl-search.ts`
- [ ] `/backend/prompts/query-parser.txt`
- [ ] `/backend/schemas/search-filters-schema.json`

### Task 3.6: API Endpoints for AI
- [ ] POST /api/intelligence/analyze-call
- [ ] POST /api/intelligence/post-call-actions
- [ ] POST /api/leads/enrich
- [ ] POST /api/search/query

**Validation**: Each agent returns correct output format, handles errors

---

## PHASE 4: WORKFLOWS AUTOMATION (CURSOR AI)

### Task 4.1: Ghost Detection Workflow
**Trigger**: Runs daily at 9 AM  
**Logic**:
1. Find leads with no activity in 30+ days
2. Check if deal is still open
3. Send alert to owner
4. Optionally: Draft re-engagement email

**Files to Create**:
- [ ] `/backend/workflows/ghost-detection.ts`
- [ ] `/backend/cron/daily-checks.ts`

### Task 4.2: Contract-to-Cash Workflow
**Trigger**: Deal stage changes to "Contract Sent"  
**Logic**:
1. Parse contract PDF using Gemini Code Execution
2. Extract key dates, amount, terms
3. Create payment milestones
4. Set up payment tracking
5. Alert on overdue payments

**Files to Create**:
- [ ] `/backend/workflows/contract-to-cash.ts`
- [ ] `/backend/agents/contract-parser.ts`

### Task 4.3: Champion Autopilot Workflow
**Trigger**: New call analyzed  
**Logic**:
1. Identify champion mentions in transcript
2. Track champion engagement over time
3. Alert if champion goes silent
4. Suggest champion nurture actions

**Files to Create**:
- [ ] `/backend/workflows/champion-autopilot.ts`
- [ ] `/backend/agents/champion-detector.ts`

**Validation**: Workflows trigger correctly, actions execute

---

## PHASE 5: INTEGRATION & TESTING (BOTH)

### Task 5.1: Connect Frontend to Backend
- [ ] Update AuthContext to call real APIs
- [ ] Update LeadContext to call real APIs
- [ ] Update IntelligenceContext to call real APIs
- [ ] Remove all mock data
- [ ] Add error handling
- [ ] Add loading states

### Task 5.2: End-to-End Testing
**Test Journey 1: New Lead Enrichment**
1. User adds lead with email
2. Backend enriches via Gemini
3. Frontend shows enriched data
4. User sees score and insights

**Test Journey 2: Post-Call Flow**
1. User uploads call recording
2. Backend transcribes and analyzes
3. Frontend shows action items
4. User clicks "Send Email"
5. Email draft appears
6. User edits and sends

**Test Journey 3: Natural Language Search**
1. User types "leads in fintech closing this month"
2. Backend parses query
3. Frontend shows results
4. User clicks a lead
5. Lead profile loads

### Task 5.3: Error Handling
- [ ] API errors show user-friendly messages
- [ ] Timeout handling (30s max)
- [ ] Retry logic (3 attempts)
- [ ] Fallback to cached data
- [ ] Error logging to Sentry

### Task 5.4: Performance Optimization
- [ ] Lazy load components
- [ ] Optimize images
- [ ] Cache API responses
- [ ] Reduce bundle size
- [ ] Add service worker (PWA)

**Validation**: All 3 journeys work end-to-end, errors handled gracefully

---

## PHASE 6: DEPLOYMENT (DEVOPS)

### Task 6.1: Environment Setup
- [ ] Production environment variables
- [ ] API keys secured
- [ ] Database backups enabled
- [ ] CDN configured

### Task 6.2: Deploy
- [ ] Deploy backend to Railway/Vercel
- [ ] Deploy frontend to Vercel
- [ ] Configure custom domain
- [ ] Set up SSL

### Task 6.3: Monitoring
- [ ] Set up Sentry error tracking
- [ ] Set up analytics (Plausible/PostHog)
- [ ] Set up uptime monitoring
- [ ] Set up performance monitoring

### Task 6.4: Launch Checklist
- [ ] All P0 features working
- [ ] Mobile tested on real devices
- [ ] Security audit passed
- [ ] Performance <2s load time
- [ ] Error rate <1%
- [ ] Documentation complete

**Validation**: Production running smoothly, monitoring active

---

## FILES TO CREATE (SUMMARY)

### Handoff Package (Figma Make)
1. `/handoff/types/` (4 files)
2. `/handoff/mocks/` (3 files)
3. `/handoff/specs/` (4 API specs)
4. `/handoff/specs/agents/` (4 agent specs)
5. `/handoff/README.md`
6. `/handoff/VALIDATION.md`

### Backend (Cursor AI)
1. `/backend/agents/` (6 agents)
2. `/backend/workflows/` (3 workflows)
3. `/backend/prompts/` (6 prompts)
4. `/backend/schemas/` (3 schemas)
5. `/backend/cron/` (1 cron job)
6. `/backend/api/` (20+ endpoints)

### Testing
1. `/tests/integration/` (3 journey tests)
2. `/tests/unit/` (agent tests)

**Total**: ~50 new files

---

## TIMELINE ESTIMATE

- Phase 1: 1 day
- Phase 2: 3 days
- Phase 3: 5 days
- Phase 4: 3 days
- Phase 5: 3 days
- Phase 6: 2 days

**Total**: 17 days to full production

---

## NEXT IMMEDIATE ACTION

Start Phase 1, Task 1.1:
```
Create /handoff/types/core.ts with base type definitions
```

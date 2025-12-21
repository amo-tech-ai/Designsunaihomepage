# HANDOFF PACKAGE: Figma Make → Cursor AI

**Project**: Luxury AI CRM - Sales Intelligence OS  
**Date**: 2024-12-20  
**Status**: Ready for Backend Implementation

---

## QUICK START

### For Cursor AI Developer

1. **Review this README** - Understand the system
2. **Check `/handoff/types/`** - All TypeScript interfaces
3. **Read `/handoff/specs/`** - API and agent specifications (natural language)
4. **See `/docs/implementation/00-IMPLEMENTATION-PLAN.md`** - Full plan
5. **Follow `/docs/rules/`** - All project rules

---

## PACKAGE CONTENTS

### 1. Type Definitions (`/handoff/types/`)
- `core.ts` - Base types (User, Auth, Enums)
- `leads.ts` - Lead management types
- `intelligence.ts` - AI features types
- `workflows.ts` - Automation types
- `index.ts` - Central exports

**Use these**: Import in backend for type safety

### 2. API Specifications (`/handoff/specs/`)
- `auth-api.md` - Authentication endpoints
- `leads-api.md` - Lead CRUD endpoints
- `intelligence-api.md` - AI features endpoints
- `workflows-api.md` - Automation endpoints

**Format**: Natural language (no code)  
**Includes**: Request/response schemas, logic, validation, database requirements

### 3. AI Agent Specifications (`/handoff/specs/agents/`)
- `lead-enrichment.md` - Company data enrichment
- `call-analysis.md` - Call transcription & analysis
- `action-architect.md` - Post-call action prioritization
- `nl-search.md` - Natural language search

**Format**: Natural language logic  
**Includes**: Prompts, Gemini config, processing steps, error handling

---

## WHAT FIGMA MAKE PROVIDED

### ✅ Complete
1. **200+ React Components** - All UI built
2. **40+ Routes** - Navigation working
3. **Type Definitions** - Frontend contracts defined
4. **Context Providers** - State management structure
5. **Design System** - Consistent UI components
6. **Mock Data** - Sample data for testing
7. **Error States** - UI for all error scenarios
8. **Loading States** - Thinking states, skeletons
9. **Mobile Optimization** - Responsive layouts

### 📦 Exported for You
- All TypeScript types
- API endpoint specifications
- AI agent logic (natural language)
- Integration points documented
- Test cases defined

---

## WHAT CURSOR AI MUST BUILD

### Phase 1: Backend Foundation
- [ ] Database schema (PostgreSQL/Supabase)
- [ ] Authentication system (JWT)
- [ ] API routes structure
- [ ] Error handling middleware
- [ ] Environment setup

### Phase 2: Core APIs
- [ ] Auth endpoints (login, logout, session)
- [ ] Leads CRUD endpoints
- [ ] Activities endpoints
- [ ] Deals endpoints

### Phase 3: AI Integration
- [ ] Gemini API setup
- [ ] Lead Enrichment agent (code)
- [ ] Call Analysis agent (code)
- [ ] Action Architect agent (code)
- [ ] Natural Language Search agent (code)

### Phase 4: Workflows
- [ ] Ghost Detection automation
- [ ] Contract-to-Cash automation
- [ ] Champion Autopilot automation
- [ ] Cron job scheduler

### Phase 5: Integration
- [ ] Connect frontend to backend
- [ ] Remove mock data
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] Deployment

---

## TECHNOLOGY STACK

### Frontend (Already Built)
- React 18 + TypeScript
- React Router v6
- Tailwind CSS v4
- Motion (Framer Motion)
- Recharts (charts)
- Shadcn UI components

### Backend (You Build)
**Recommended**:
- **Database**: PostgreSQL (via Supabase)
- **Backend**: Node.js + Express OR Next.js API routes
- **Auth**: JWT (jsonwebtoken library)
- **AI**: Gemini 2.0 API (Google AI SDK)
- **Hosting**: Vercel or Railway
- **File Storage**: Supabase Storage OR Cloudinary

**Alternative**:
- Python + FastAPI (if you prefer)
- Still use PostgreSQL + Gemini

---

## INTEGRATION POINTS

### 1. Authentication
**Frontend**: `/components/auth/LoginPage.tsx` + `AuthContext.tsx`  
**Backend**: POST `/api/auth/login`  
**Flow**:
1. User submits email + password
2. Backend validates, returns JWT
3. Frontend stores token in localStorage
4. All future requests include token in header

### 2. Lead Enrichment
**Frontend**: `/components/crm/enrichment/AddLeadForm.tsx`  
**Backend**: POST `/api/leads` + POST `/api/leads/:id/enrich`  
**Flow**:
1. User adds lead
2. Backend creates lead record
3. Backend queues enrichment job
4. Gemini enriches via Search Grounding
5. Backend updates lead with enriched data
6. Frontend polls or uses WebSocket for updates

### 3. Call Analysis
**Frontend**: `/components/crm/intelligence/CallIngestion.tsx`  
**Backend**: POST `/api/intelligence/analyze-call`  
**Flow**:
1. User uploads call recording
2. Backend transcribes with Gemini (if audio)
3. Gemini analyzes transcript
4. Backend extracts actions, calculates health
5. Backend saves to database
6. Frontend displays results

### 4. Natural Language Search
**Frontend**: `/components/crm/intelligence/CommandBar.tsx`  
**Backend**: POST `/api/search/query`  
**Flow**:
1. User types query (e.g., "leads in fintech closing this month")
2. Backend parses with Gemini Function Calling
3. Backend converts to SQL filters
4. Backend executes search
5. Backend returns ranked results
6. Frontend displays in SearchResults component

---

## DATABASE SCHEMA

### Tables Needed

1. **users** - User accounts
2. **sessions** - Auth sessions
3. **leads** - Lead records
4. **activities** - Interactions (calls, emails, etc.)
5. **deals** - Sales opportunities
6. **call_transcripts** - Call data
7. **actions** - Action items
8. **workflows** - Automation definitions
9. **workflow_runs** - Automation execution history

**See**: `/handoff/specs/` files for detailed field definitions

### Relationships
- users ← sessions (one-to-many)
- users ← leads (one-to-many, via owner_id)
- leads ← activities (one-to-many)
- leads ← deals (one-to-many)
- leads ← call_transcripts (one-to-many)
- leads ← actions (one-to-many)

---

## GEMINI API SETUP

### Get API Key
1. Go to https://aistudio.google.com/
2. Create project
3. Enable Gemini API
4. Get API key
5. Add to `.env`: `GEMINI_API_KEY=your_key_here`

### Models to Use
- **Gemini 2.0 Flash**: Fast, cheap - use for enrichment, search
- **Gemini 2.0 Pro**: Complex reasoning - use for call analysis
- **Gemini 2.0 Pro Thinking**: Multi-step - use for action prioritization

### Features to Enable
- **Function Calling**: For structured outputs
- **Search Grounding**: For lead enrichment
- **Context Caching**: Cache system prompts (save costs)

---

## ENVIRONMENT VARIABLES

### Required
```
# Database
DATABASE_URL=postgresql://...
SUPABASE_URL=https://...
SUPABASE_ANON_KEY=...

# Auth
JWT_SECRET=... (generate with: openssl rand -base64 32)
JWT_EXPIRY=7d

# AI
GEMINI_API_KEY=...

# App
NODE_ENV=production
PORT=3000
FRONTEND_URL=https://...
```

### Optional
```
# Error Tracking
SENTRY_DSN=...

# Analytics
POSTHOG_API_KEY=...

# File Storage
CLOUDINARY_URL=...
```

---

## API RESPONSE FORMAT

### Success
```json
{
  "success": true,
  "data": { ... },
  "pagination": { ... } // if applicable
}
```

### Error
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "User-friendly error message",
    "details": { ... } // optional
  }
}
```

---

## TESTING STRATEGY

### Unit Tests
- Test each AI agent with sample inputs
- Test database queries
- Test validation logic

### Integration Tests
- Test full user journeys (see `/docs/implementation/00-IMPLEMENTATION-PLAN.md`)
- Test auth flow
- Test lead creation + enrichment
- Test call upload + analysis

### Performance Tests
- API response time < 1s
- AI response time < 10s
- Database queries < 500ms
- Page load < 2s

---

## DEPLOYMENT

### Recommended Setup
1. **Frontend**: Vercel (auto-deploys from Git)
2. **Backend**: Vercel Serverless Functions OR Railway
3. **Database**: Supabase (managed PostgreSQL)
4. **File Storage**: Supabase Storage

### CI/CD
1. Push to `main` branch
2. Vercel auto-deploys frontend
3. Railway/Vercel auto-deploys backend
4. Run integration tests
5. If tests pass, promote to production

---

## QUESTIONS?

### Common Questions

**Q: Can I use Python instead of Node.js?**  
A: Yes, FastAPI works great. Types can be converted to Pydantic models.

**Q: Do I need to use Supabase?**  
A: No, any PostgreSQL database works. Supabase is just convenient.

**Q: Can I modify the type definitions?**  
A: Yes, but communicate changes back to Figma Make team so frontend can update.

**Q: How do I test AI agents without spending money?**  
A: Use Gemini's free tier (50 requests/day). Mock responses for unit tests.

**Q: What if Gemini API is too slow?**  
A: Use async processing. Return 202 Accepted immediately, process in background, notify when done.

---

## NEXT STEPS

1. ✅ Read this README
2. ⬜ Review type definitions
3. ⬜ Read API specs (start with auth)
4. ⬜ Read agent specs (start with lead enrichment)
5. ⬜ Set up database
6. ⬜ Implement auth endpoints
7. ⬜ Test auth with frontend
8. ⬜ Continue with implementation plan

---

## SUPPORT

- **Implementation Plan**: `/docs/implementation/00-IMPLEMENTATION-PLAN.md`
- **Project Rules**: `/docs/rules/`
- **AI Agent Rules**: `/docs/rules/AI-AGENTS-RULES.md`
- **Handoff Guide**: `/docs/rules/FIGMA-CURSOR-HANDOFF.md`

---

**Status**: Package complete. Ready for backend development. 🚀

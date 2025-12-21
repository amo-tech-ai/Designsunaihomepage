# FIGMA MAKE → CURSOR AI HANDOFF

## DIVISION OF RESPONSIBILITIES

### Figma Make (Frontend Only)
**What it builds**:
- React components (TSX)
- UI state management
- Form validation (client-side)
- Navigation/routing
- Mock data displays
- Type definitions (frontend)
- API interface specs

**What it CANNOT do**:
- Backend logic
- Database operations
- Real API implementations
- Server-side validation
- Authentication backends
- Payment processing
- Email sending
- File uploads (server-side)

### Cursor AI (Backend + Integration)
**What it builds**:
- API routes/endpoints
- Database schemas
- AI agent logic (code)
- Server-side validation
- Authentication systems
- Third-party integrations
- Background jobs
- Deployment configs

---

## HANDOFF PACKAGE

### Structure
```
/handoff/
  README.md (this file)
  /specs/
    api-endpoints.md
    database-schema.md
    agent-logic.md
    integration-requirements.md
  /types/
    types.ts (from Figma Make)
  /mocks/
    mock-data.ts
    mock-responses.ts
  /components/
    [exported React components]
```

### API Endpoints Spec
For each endpoint document:
- Method (GET/POST/PUT/DELETE)
- Path (/api/leads)
- Request body schema
- Response schema
- Auth required (yes/no)
- Rate limits

### Database Schema Spec
For each table document:
- Table name
- Fields (name, type, constraints)
- Relationships
- Indexes
- Migrations needed

### Agent Logic Spec
For each agent document:
- Trigger conditions
- Input schema
- Processing steps (natural language)
- Tools/APIs to call
- Output schema
- Error handling

---

## HANDOFF CHECKLIST

### Figma Make Provides
- [ ] All React components exported
- [ ] TypeScript types defined
- [ ] Mock data samples
- [ ] API endpoint specs
- [ ] Navigation flow documented
- [ ] Form validation rules
- [ ] Error states designed
- [ ] Loading states designed

### Cursor AI Receives
- [ ] Read all specs
- [ ] Understand data flow
- [ ] Validate type definitions
- [ ] Confirm API contracts
- [ ] Check integration requirements

### Cursor AI Builds
- [ ] API endpoints matching specs
- [ ] Database schema implemented
- [ ] Agent logic coded
- [ ] Tests written
- [ ] Deployed to staging

### Cursor AI Returns
- [ ] API documentation
- [ ] Environment variables needed
- [ ] Deployment instructions
- [ ] Testing guide

---

## COMMUNICATION PROTOCOL

### Figma Make → Cursor
**Format**: Natural language specs

Example:
```
API Endpoint: Create Lead
- POST /api/leads
- Input: { name, email, company, source }
- Validate: email format, required fields
- AI Action: Enrich with company data
- Output: { id, ...input, enrichedData, score }
- Error: 400 if validation fails
```

### Cursor → Figma Make
**Format**: Implementation notes

Example:
```
Implemented: POST /api/leads
- Base URL: https://api.example.com
- Auth: Bearer token in header
- Rate limit: 100/hour
- Response time: ~500ms
- Error codes: 400, 401, 500
```

---

## INTEGRATION POINTS

### 1. Authentication
**Figma Make**: Login form, auth context  
**Cursor AI**: JWT generation, session management

### 2. Data Fetching
**Figma Make**: React Query hooks, loading states  
**Cursor AI**: REST/GraphQL endpoints, caching

### 3. Form Submission
**Figma Make**: Client validation, UI feedback  
**Cursor AI**: Server validation, data processing

### 4. AI Features
**Figma Make**: Trigger buttons, result displays  
**Cursor AI**: Agent orchestration, model calls

### 5. Real-time Updates
**Figma Make**: WebSocket listeners, UI updates  
**Cursor AI**: WebSocket server, event emitters

---

## VALIDATION WORKFLOW

### Step 1: Figma Make Exports
- Component library complete
- Types match specs
- Mocks demonstrate flow

### Step 2: Cursor AI Reviews
- Can types be implemented?
- Are specs clear?
- Any missing requirements?

### Step 3: Cursor AI Builds
- Implements backend
- Writes tests
- Deploys staging

### Step 4: Integration Test
- Figma Make frontend + Cursor backend
- Test all user journeys
- Fix integration issues

### Step 5: Production
- Deploy both together
- Monitor errors
- Iterate

---

## COMMON ISSUES

### Issue: Type Mismatch
**Problem**: Frontend expects different shape than backend returns  
**Solution**: Update handoff specs, rebuild both sides

### Issue: Missing Endpoint
**Problem**: Frontend calls API that doesn't exist  
**Solution**: Add to specs, Cursor implements

### Issue: Auth Flow Unclear
**Problem**: Frontend doesn't know how to handle tokens  
**Solution**: Document auth flow in handoff

### Issue: AI Response Format
**Problem**: Frontend expects structured output, gets unstructured  
**Solution**: Define JSON schema in agent spec

---

## BEST PRACTICES

### For Figma Make
1. Export types early and often
2. Use mock data that matches real structure
3. Handle all loading/error states
4. Document API expectations clearly
5. Don't assume backend capabilities

### For Cursor AI
1. Follow specs exactly
2. Return errors in consistent format
3. Document all endpoints
4. Provide clear error messages
5. Test with frontend team

### For Both
1. Version the handoff package
2. Keep specs in sync with code
3. Test integration frequently
4. Communicate blockers early
5. Use TypeScript for contracts

---

## EXAMPLE HANDOFF

### Figma Make Output
```
Feature: Lead Enrichment

UI Components:
- LeadForm.tsx (input form)
- LeadCard.tsx (displays enriched data)
- EnrichmentStatus.tsx (shows progress)

Types:
interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  enrichedData?: CompanyData;
  score?: number;
}

API Needed:
POST /api/leads/enrich
Input: { leadId: string }
Output: { lead: Lead, status: 'complete' | 'pending' }
```

### Cursor AI Response
```
Implemented: Lead Enrichment API

Endpoint: POST /api/leads/enrich
URL: https://api.prod.com/api/leads/enrich
Auth: Required (Bearer token)

Agent: LeadEnrichmentAgent
- Calls Clearbit API for company data
- Scores lead based on company size, industry
- Stores in PostgreSQL
- Returns in ~3s

Database:
- Table: leads (added enrichedData JSONB)
- Index: email (for deduplication)

Environment Variables Needed:
- CLEARBIT_API_KEY
- DATABASE_URL

Status: Deployed to staging
Test: curl -X POST https://staging.api.com/api/leads/enrich -H "Authorization: Bearer TOKEN" -d '{"leadId":"123"}'
```

---

## GEMINI INTEGRATION NOTES

### What Figma Make Can Do
- Design chat UI
- Show thinking states
- Display structured outputs
- Handle streaming responses

### What Cursor AI Must Implement
- Gemini API calls
- Function calling setup
- Context management
- Response parsing
- Error handling
- Rate limiting

### Handoff Requirements
- Define function schemas
- Document prompt templates
- Specify response formats
- List grounding sources (Search, Maps)
- Define fallback behavior

---

## QUICK REFERENCE

### Figma Make Exports
- Components (React/TSX)
- Types (TypeScript interfaces)
- Mocks (sample data)
- Specs (natural language)

### Cursor AI Implements
- APIs (REST/GraphQL)
- Agents (Python/Node.js)
- Database (PostgreSQL/MongoDB)
- Auth (JWT/OAuth)
- Integrations (Gemini, Maps, etc.)

### Both Test Together
- User journeys
- Error handling
- Performance
- Security

---

**Status**: Use this guide for every feature handoff

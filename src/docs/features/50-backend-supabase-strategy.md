# Backend Architecture: Supabase Strategy

## Document Purpose
Define the complete backend architecture strategy for the Luxury AI CRM using Supabase as the primary backend platform. This document covers data modeling, authentication, real-time subscriptions, storage, and edge functions orchestration—**no code, pure strategy**.

**Last Updated:** December 18, 2025  
**Owner:** Backend Team  
**Status:** Planning Phase

---

## Architecture Philosophy

### Core Principles
1. **Serverless-First**: No server management, infinite scalability
2. **Real-Time by Default**: All data syncs instantly across clients
3. **Postgres Power**: Leverage advanced SQL for complex queries (Deal Health, Search)
4. **Edge Computing**: AI processing happens closest to users (low latency)
5. **Audit Everything**: Complete trail of all AI decisions and data changes

### Why Supabase?
- **Postgres**: Best relational database for CRM data (relationships, constraints, indexes)
- **Row-Level Security (RLS)**: Multi-tenant data isolation built-in
- **Realtime**: WebSocket subscriptions for live updates (deal health changes, new calls)
- **Edge Functions**: Deno runtime for AI agents (Gemini API calls)
- **Storage**: Call recordings, contract PDFs, demo assets
- **Auth**: OAuth providers (Google, LinkedIn) + magic links

---

## Database Architecture Strategy

### Multi-Tenant Design Pattern

**Strategy: Shared Database, Row-Level Security**

```
Why: 
- Single database = easier maintenance, shared indexes
- RLS = automatic data isolation per customer org
- Cost-effective at scale vs. database-per-tenant

How:
- Every table has `org_id` foreign key
- RLS policies filter by auth.jwt()→>'org_id'
- Users belong to orgs via `org_members` table
```

**Alternative Considered:**
- Schema-per-tenant: Rejected (Supabase doesn't support, complex migrations)
- Database-per-tenant: Rejected (cost prohibitive, no cross-org analytics)

---

### Table Hierarchy Strategy

**Core Entities (Foundation)**
```
organizations
├── users (org_members)
├── leads
│   ├── calls
│   │   └── call_briefs
│   │       └── action_items
│   ├── personas
│   ├── deal_health_scores
│   └── notes
├── customers (extended leads)
│   ├── upsell_triggers
│   └── health_scores
└── contracts
    └── contract_clauses
```

**AI Intelligence Layer**
```
ai_agent_runs (audit log for all AI operations)
ai_queries (search history + results)
ai_training_data (feedback loop for model improvement)
```

**Workflow Automation Layer**
```
workflow_triggers (event definitions)
workflow_executions (run log)
scheduled_jobs (cron-style tasks)
```

**Integration Layer**
```
connected_accounts (OAuth tokens: LinkedIn, Gmail, Calendar)
webhooks (incoming: Gong, DocuSign, Stripe)
api_keys (outgoing: Gemini, external services)
```

---

### Index Strategy

**Performance-Critical Indexes:**

1. **Lead Search** (Natural Language → SQL)
   - Index: `leads (org_id, company, role, location, budget_min)`
   - Type: Composite B-Tree
   - Why: Accelerates filtered queries from Command Bar

2. **Deal Health Calculation** (Scoring Engine)
   - Index: `deal_health_scores (org_id, score, updated_at DESC)`
   - Type: Composite with Sort
   - Why: Fetch "at-risk" deals instantly for alerts

3. **Call Ingestion Pipeline**
   - Index: `calls (org_id, lead_id, date DESC)`
   - Type: Composite with Sort
   - Why: Recent calls list per lead, chronological order

4. **Activity Timeline** (Lead Profile)
   - Index: `notes (lead_id, created_at DESC)`
   - Type: Composite with Sort
   - Why: Memory stream rendering

5. **Resurrection Campaigns** (Cold Lead Revival)
   - Index: `leads (org_id, last_contact_date)` WHERE `status = 'cold'`
   - Type: Partial Index
   - Why: Find stale leads efficiently

**Full-Text Search Indexes:**
- `calls.transcript` → `tsvector` index for keyword search
- `call_briefs.summary` → `tsvector` for semantic search

---

### Data Retention Strategy

**Hot Data (Active CRM)**
- Leads, Calls, Briefs: Indefinite retention
- Access Pattern: Frequent reads/writes
- Storage: Primary Postgres tables

**Warm Data (Historical Intelligence)**
- Old call transcripts (>6 months): Move to Storage bucket
- AI agent runs (>3 months): Archive to `ai_agent_runs_archive`
- Access Pattern: Occasional analytics queries
- Storage: Postgres + cold storage

**Cold Data (Compliance Archive)**
- Deleted leads (GDPR/retention policy): Hard delete after 90 days
- Audit logs: 7-year retention in append-only table
- Access Pattern: Rarely accessed, legal/compliance only
- Storage: Supabase Storage (encrypted)

---

## Authentication & Authorization Strategy

### Authentication Flow

**Primary Method: OAuth (Luxury Feel)**
```
User Flow:
1. Click "Sign in with Google"
2. OAuth redirect → Google consent
3. Return with ID token
4. Supabase creates/matches user
5. Issue JWT with org_id claim
```

**Fallback: Magic Link (Passwordless)**
```
Why: No password friction for executives
Flow: Email → OTP link → Auto-login
```

**Enterprise: SAML SSO**
```
For large customers requiring Okta/Azure AD
Integration: Supabase Auth supports SAML
```

---

### Authorization Model (RLS Policies)

**Strategy: Role-Based + Org-Scoped**

**Roles Hierarchy:**
1. **Org Owner** (full access, billing)
2. **Admin** (manage users, configure agents)
3. **Sales Manager** (view all leads, edit team's data)
4. **Sales Rep** (view/edit own leads, read-only on others)
5. **Read-Only** (analysts, executives viewing dashboards)

**RLS Policy Pattern (All Tables):**
```
Policy: "Users can access their org's data"
Check: auth.jwt()->>'org_id' = table.org_id

Policy: "Reps can edit only their assigned leads"
Check: 
  auth.jwt()->>'role' = 'admin' 
  OR 
  (auth.jwt()->>'user_id' = table.owner_id)
```

**Special Policies:**
- `ai_agent_runs`: Admin-only read (transparency + debugging)
- `connected_accounts`: User can only see their own OAuth tokens
- `billing`: Org Owner only

---

## Realtime Subscription Strategy

### Use Cases for Realtime

**1. Live Deal Health Updates**
```
Scenario: Manager watching Deal Health dashboard
Subscription: Changes to `deal_health_scores` WHERE org_id = X
Benefit: Instant alerts when deal goes yellow/red
```

**2. Collaborative Call Review**
```
Scenario: Team reviewing a call brief together
Subscription: Changes to `action_items` WHERE call_id = Y
Benefit: See checkboxes toggle in real-time
```

**3. Command Bar Results Streaming**
```
Scenario: User types natural language query
Subscription: Listen to `ai_queries` table inserts
Benefit: Show results as they're generated (progressive loading)
```

**4. Multi-User Demo Builder**
```
Scenario: AE and SE co-editing a demo
Subscription: Changes to `demo_configs` WHERE prospect_id = Z
Benefit: Google Docs-style collaboration
```

---

### Realtime Performance Optimization

**Strategy: Selective Subscriptions**
```
Anti-Pattern: Subscribe to entire `leads` table
✅ Pattern: Subscribe to:
  - Single lead's changes (profile view)
  - Filtered subset (my assigned leads)
  - Aggregated counts (dashboard tiles)
```

**Broadcast Channel Design:**
```
Channel: `org:{org_id}:deals:health`
Purpose: Send summary updates, not full rows
Payload: { deal_id, new_score, changed_reasons }
Why: Reduce bandwidth, client re-fetches details on-demand
```

---

## Storage Strategy (Supabase Storage Buckets)

### Bucket Architecture

**1. `call-recordings` Bucket**
- Purpose: Audio/video files from calls
- Access: Private (RLS enforced)
- Lifecycle: Retain 1 year, then archive to cold storage
- CDN: Yes (signed URLs with 24h expiry)

**2. `call-transcripts` Bucket**
- Purpose: Raw transcription JSON (backup)
- Access: Private
- Lifecycle: Retain indefinitely (cheap text storage)
- CDN: No (backend-only access)

**3. `contracts` Bucket**
- Purpose: Uploaded contract PDFs
- Access: Private (RLS by lead owner)
- Lifecycle: Retain 7 years (legal compliance)
- CDN: Yes (signed URLs)

**4. `demo-assets` Bucket**
- Purpose: Generated demo screenshots, logos
- Access: Private (per prospect)
- Lifecycle: 90 days post-demo
- CDN: Yes (fast loading in Demo Builder)

**5. `avatars` Bucket**
- Purpose: User profile pictures
- Access: Public (non-sensitive)
- Lifecycle: Indefinite
- CDN: Yes (aggressive caching)

---

### File Upload Strategy

**Client-Side Direct Upload (Preferred)**
```
Why: Offload backend, faster uploads, resumable
Flow:
1. Client requests signed upload URL (Edge Function)
2. Client uploads directly to Storage bucket
3. Client notifies backend: "File uploaded at X"
4. Edge Function triggers processing (transcription)
```

**Server-Side Upload (Fallback)**
```
When: Large files >100MB, need validation pre-upload
Flow:
1. Client sends file to Edge Function
2. Function validates, scans (virus check optional)
3. Function uploads to Storage
4. Returns file URL to client
```

---

## Edge Functions Orchestration Strategy

### Function Types & Patterns

**1. Request-Response Functions (Synchronous)**
```
Pattern: Client calls → Function processes → Returns result
Examples:
  - `search-leads`: Text-to-SQL, return filtered leads
  - `generate-persona`: Analyze lead, return persona JSON
  - `qualify-meeting`: Chat input, return qualification score

Timeout: 10 seconds max
Retry: None (client retries if needed)
```

**2. Async Task Functions (Background Jobs)**
```
Pattern: Triggered → Processes → Updates database → Notifies client
Examples:
  - `analyze-call`: Long transcription + AI extraction
  - `calculate-deal-health`: Score all deals (30-60 seconds)
  - `update-battle-cards`: Weekly competitor scraping

Timeout: 5 minutes
Retry: 3 attempts with exponential backoff
Notification: Realtime broadcast when done
```

**3. Scheduled Functions (Cron Jobs)**
```
Pattern: pg_cron triggers Edge Function on schedule
Examples:
  - `detect-ghosts`: Daily at 6 AM (find at-risk deals)
  - `resurrect-leads`: Weekly on Monday (cold lead revival)
  - `refresh-integrations`: Hourly (sync LinkedIn, Gmail)

Reliability: Idempotent (safe to run multiple times)
```

**4. Database Trigger Functions (Event-Driven)**
```
Pattern: Row change → Trigger → Edge Function → Side effects
Examples:
  - New call inserted → `analyze-call` triggered
  - Lead status = 'won' → `create-onboarding-plan` triggered
  - Contract uploaded → `analyze-contract` triggered

Guarantee: At-least-once delivery (function must be idempotent)
```

---

### Edge Function Communication Patterns

**Pattern 1: Function Chain (Sequential)**
```
Use Case: Call Ingestion Pipeline
Flow:
  ingest-call → transcribe → extract-signals → generate-brief
Why: Each step depends on previous output
Implementation: Function A calls Function B via internal HTTP
```

**Pattern 2: Parallel Dispatch (Fan-Out)**
```
Use Case: Lead Enrichment
Flow:
  new-lead → [
    enrich-company (Clearbit),
    enrich-linkedin (LinkedIn API),
    calculate-score (AI model)
  ] → merge-results
Why: Independent tasks, faster total time
Implementation: Promise.all() or queue with concurrency
```

**Pattern 3: Event Bus (Pub/Sub)**
```
Use Case: Multi-Agent Coordination
Flow:
  Event: "Deal went red" →
    Listeners:
      - Send Slack alert
      - Generate intervention plan
      - Update forecast
Why: Decoupled, extensible
Implementation: Supabase Realtime broadcast as event bus
```

---

### Edge Function Error Handling Strategy

**Transient Errors (Retry)**
```
Examples: API rate limit, network timeout
Strategy: Exponential backoff (1s, 2s, 4s)
Logging: Warn level, include retry count
```

**Permanent Errors (Fail Fast)**
```
Examples: Invalid input, auth failure, quota exceeded
Strategy: Return error to client immediately
Logging: Error level, alert ops team if critical
```

**Partial Failures (Graceful Degradation)**
```
Example: Deal Health can't fetch email data (Gmail API down)
Strategy: Calculate score with available signals, flag "incomplete"
Logging: Info level, notify user "Using partial data"
```

---

## AI Orchestration Strategy

### Centralized Agent Coordinator

**Concept: Single "Brain" Function**
```
Function: `orchestrate-agents`
Purpose: Manage all AI agent execution, prioritization, cost control
Runs: Continuously (invoked by various triggers)

Responsibilities:
1. Receive agent requests (queue pattern)
2. Prioritize based on user-facing vs. background
3. Batch requests to reduce API calls
4. Enforce rate limits per org (cost control)
5. Distribute load across Gemini models (Flash vs. Pro)
6. Log all runs to `ai_agent_runs` table
```

---

### Agent Prioritization Logic

**Priority Tiers:**

**P0: User-Waiting (Real-Time)**
- Command Bar search
- Persona generation (user clicked "Generate")
- Meeting qualification (user in chat)
- Expected latency: <2 seconds
- Model: Gemini 2.0 Flash (fast)

**P1: User-Initiated (Async)**
- Call analysis (user uploaded)
- Contract review (user requested)
- Demo personalization (user building)
- Expected latency: <30 seconds
- Model: Gemini 1.5 Pro (accurate)

**P2: System-Triggered (Background)**
- Deal health scoring (scheduled)
- Email resurrection drafts (scheduled)
- Upsell detection (event-driven)
- Expected latency: Minutes to hours OK
- Model: Gemini 2.0 Flash Thinking (complex reasoning)

**P3: Bulk Operations (Batch)**
- Competitive intel updates (weekly)
- Lead scoring (nightly)
- Expected latency: Hours OK
- Model: Batch API calls

---

### Cost Control Strategy

**Per-Org Budget Enforcement**
```
Strategy: Track AI spend per `org_id` in real-time
Table: `ai_usage_quotas`
Fields: org_id, monthly_limit, current_spend, reset_date

Logic:
  IF current_spend > monthly_limit THEN
    Queue request instead of executing
    Notify org admin: "AI quota exceeded"
  ELSE
    Execute + increment current_spend
```

**Model Selection Logic**
```
Decision Tree:
  IF P0 priority AND simple task → Flash (cheap, fast)
  IF P0 priority AND complex task → Flash Thinking (balanced)
  IF P1 priority AND deep analysis → Pro (accurate)
  IF P2 priority AND reasoning → Flash Thinking (cost-effective)
```

**Caching Strategy**
```
Cache: Redis or Supabase table `ai_cache`
Key: Hash(function_name + input_params)
TTL:
  - Persona: 7 days (changes slowly)
  - Search results: 1 hour (data changes)
  - Battle cards: 1 week (updates weekly)
  - Deal health: 1 hour (recalculate frequently)
```

---

## Integration Wiring Strategy

### OAuth Connection Flow

**Pattern: Centralized OAuth Handler**

**Tables:**
```
connected_accounts
  id, user_id, org_id, provider, access_token, refresh_token,
  expires_at, scopes, metadata
```

**Flow:**
```
1. User clicks "Connect LinkedIn"
2. Frontend redirects to `/auth/linkedin` (Edge Function)
3. Function redirects to LinkedIn OAuth
4. LinkedIn redirects back with code
5. Function exchanges code for tokens
6. Function stores tokens in `connected_accounts`
7. Function triggers `sync-linkedin-data` background job
8. Frontend polls or listens via Realtime for sync completion
```

**Token Refresh Strategy:**
```
Edge Function: `refresh-oauth-tokens` (runs hourly)
Logic:
  SELECT * FROM connected_accounts WHERE expires_at < NOW() + 1 day
  FOR EACH account:
    Call provider's refresh endpoint
    Update access_token + expires_at
  NOTIFY user if refresh fails (requires re-auth)
```

---

### Webhook Ingestion Pattern

**Table:**
```
webhook_events
  id, provider, event_type, payload, processed_at, retry_count
```

**Flow:**
```
1. External service (Gong, DocuSign) sends webhook
2. Edge Function: `webhook-receiver` validates signature
3. Insert raw payload into `webhook_events` (processed_at = null)
4. Return 200 OK immediately (fast acknowledgment)
5. Background worker: `process-webhooks` polls for unprocessed events
6. Worker routes to specific handler:
   - Gong call.recorded → `ingest-call`
   - DocuSign contract.signed → `analyze-contract`
7. Mark processed_at after success
```

**Why This Pattern?**
- Decouples receiving from processing (reliability)
- Webhook sender won't timeout
- Failed processing can retry without re-receiving

---

### API Rate Limit Handling

**Strategy: Client-Side + Server-Side Buffering**

**LinkedIn Example (Rate Limit: 500 requests/day):**
```
Client-Side:
  - Disable "Refresh Network" button after click (prevent spam)

Server-Side:
  - Track: `api_rate_limits` table (provider, daily_count, reset_time)
  - Before each LinkedIn call:
    IF daily_count >= 480 (safety buffer) THEN
      Queue request for next day
      Notify user: "LinkedIn sync scheduled for tomorrow"
    ELSE
      Execute + increment daily_count
```

**Gmail Example (Rate Limit: 250 quota units/user/second):**
```
Strategy: Request queue with throttling
Implementation:
  - Use Redis queue or Postgres `job_queue` table
  - Worker processes queue at safe rate (100 units/sec)
  - User sees: "Syncing 127 emails... 45% complete"
```

---

## Data Migration & Seeding Strategy

### Initial Setup (New Org Signup)

**Seed Data Functions:**
```
Function: `seed-new-org`
Triggered: After org creation

Actions:
1. Create default lead statuses (New, Qualified, Proposal, Won, Lost)
2. Create default email templates (Welcome, Follow-up, Breakup)
3. Create sample playbook (generic sales process)
4. Create demo lead (tutorial data)
5. Grant org owner full permissions
```

---

### Data Import Strategy (Salesforce/HubSpot Migration)

**Pattern: Async Import with Progress Tracking**

**Tables:**
```
import_jobs
  id, org_id, source_system, status, total_rows, 
  processed_rows, error_count, started_at, completed_at
```

**Flow:**
```
1. User uploads CSV or connects Salesforce API
2. Edge Function: `create-import-job` parses headers, estimates rows
3. Function inserts job record, returns job_id
4. Background worker: `process-import` reads rows in batches (100 at a time)
5. For each row:
   - Validate + transform to CRM schema
   - Insert into `leads` table
   - Update processed_rows
6. Realtime broadcasts progress: "1,234 / 5,000 leads imported"
7. On completion, trigger enrichment for imported leads
```

**Error Handling:**
```
- Invalid rows: Log to `import_errors` table with reason
- User downloads error report CSV after completion
- Partial success: "4,823 succeeded, 177 failed"
```

---

## Backup & Disaster Recovery Strategy

### Postgres Backup Strategy

**Automatic Backups (Supabase Managed):**
- Daily full backups (retained 30 days)
- Point-in-time recovery (PITR) available
- Stored in geographically distributed locations

**Custom Backup Strategy (Critical Data):**
```
Scheduled Function: `backup-critical-data` (weekly)
Exports:
  - All `leads` + `calls` to JSON
  - All `ai_agent_runs` (audit trail)
  - Encrypted and uploaded to external S3 bucket
Retention: 1 year
```

---

### Disaster Recovery Plan

**Scenario 1: Supabase Region Outage**
```
Mitigation:
  - Supabase auto-fails over to replica region
  - Client apps use connection pooler (transparent failover)
  - Expected downtime: <2 minutes

Action Items:
  - Monitor Supabase status page
  - Notify users via status banner if detected
```

**Scenario 2: Data Corruption (e.g., bad migration)**
```
Mitigation:
  - Rollback to PITR restore point
  - Supabase supports restore to any minute in last 7 days

Action Items:
  - Stop all writes immediately
  - Restore to pre-corruption timestamp
  - Re-run failed migration with fix
  - Test in staging first
```

**Scenario 3: Accidental Mass Deletion**
```
Mitigation:
  - Soft deletes by default (deleted_at column)
  - Hard delete only after 90-day grace period

Recovery:
  - UPDATE leads SET deleted_at = NULL WHERE deleted_at > [incident_time]
  - Restore from nightly backup if hard-deleted
```

---

## Performance Optimization Strategy

### Query Optimization

**Strategy 1: Materialized Views for Dashboards**
```
Use Case: Deal Health Dashboard (expensive aggregate query)

Problem:
  SELECT 
    COUNT(*) FILTER (WHERE score > 80) as green,
    COUNT(*) FILTER (WHERE score 50-80) as yellow,
    COUNT(*) FILTER (WHERE score < 50) as red
  FROM deal_health_scores
  -- Slow on 10,000+ deals

Solution:
  CREATE MATERIALIZED VIEW deal_health_summary AS ...
  REFRESH MATERIALIZED VIEW CONCURRENTLY (every 5 minutes)
  -- Query hits cached view, <10ms response
```

**Strategy 2: Connection Pooling**
```
Why: Supabase has connection limits (default: 100)
Implementation: Use PgBouncer (built into Supabase)
Config: Transaction mode (best for serverless)
```

**Strategy 3: Partial Indexes for Common Filters**
```
CREATE INDEX leads_active_high_budget 
ON leads (org_id, budget_min) 
WHERE status != 'lost' AND budget_min > 50000;

Benefit: Index only hot leads, smaller + faster
```

---

### Edge Function Cold Start Optimization

**Problem:** First invocation after idle = 500ms+ latency

**Solutions:**

**1. Keep-Alive Pinging**
```
Cron job: `ping-functions` (every 5 minutes)
Calls: Critical functions with no-op requests
Effect: Functions stay warm
```

**2. Lazy Loading**
```
Anti-Pattern: Import all dependencies at top
✅ Pattern: Dynamic imports inside function
  const { analyze } = await import('./heavy-lib.js');
Effect: Faster cold starts
```

**3. Function Bundling**
```
Combine related functions into single deployment
Example: All search functions in one file
Why: Share initialization code
```

---

## Security & Compliance Strategy

### Data Encryption

**At Rest:**
- Postgres: AES-256 encryption (Supabase default)
- Storage buckets: AES-256 encryption
- Backups: Encrypted before upload

**In Transit:**
- HTTPS/TLS 1.3 for all connections
- Supabase enforces SSL for Postgres connections

**Application-Level Encryption (Sensitive Fields):**
```
Fields: OAuth tokens, API keys, contract clauses
Strategy: Encrypt in Edge Function before storing
Library: Web Crypto API (built into Deno)
Key Management: Supabase secrets (rotated quarterly)
```

---

### GDPR Compliance Strategy

**Right to Access:**
```
Edge Function: `export-user-data`
Output: JSON file with all user's data (leads, calls, notes)
Delivery: Email link with 24h expiry
```

**Right to Deletion:**
```
Edge Function: `delete-user-data`
Soft Delete:
  - Mark records with deleted_at
  - Anonymize PII (replace names with "Deleted User")
Hard Delete (after 90 days):
  - Cascade delete all related records
  - Keep audit log (non-PII) for compliance
```

**Right to Portability:**
```
Export format: Standard JSON schema
Includes: Leads, calls, transcripts, action items
Excludes: AI-generated insights (proprietary)
```

---

### Audit Logging Strategy

**Audit Table: `audit_logs`**
```
Fields:
  - id, org_id, user_id, action, table_name, record_id,
  - old_values (JSONB), new_values (JSONB),
  - ip_address, user_agent, timestamp

Triggers: Postgres trigger on UPDATE/DELETE for all core tables

Retention: 7 years (compliance requirement)

Access: Admin-only, read-only
```

**What to Log:**
- All data changes (UPDATE, DELETE)
- All AI agent decisions (inputs + outputs)
- All failed auth attempts
- All permission changes

**What NOT to Log:**
- Read queries (SELECT) — too much volume
- Health check pings
- Temporary/cache tables

---

## Monitoring & Observability Strategy

### Key Metrics to Track

**Database Metrics:**
- Query latency (p50, p95, p99)
- Connection pool utilization
- Slow queries (>1 second)
- Table sizes / growth rate

**Edge Function Metrics:**
- Invocation count per function
- Error rate (%)
- Cold start rate (%)
- Execution duration (avg, p95)
- Cost per invocation

**AI Agent Metrics:**
- Accuracy per agent (%)
- Confidence scores distribution
- API cost per agent per day
- Queue depth (backlog)

**Business Metrics:**
- Active orgs
- Leads processed/day
- Calls analyzed/day
- Revenue per org (for cost vs. value analysis)

---

### Alerting Strategy

**Critical Alerts (Page Ops Team):**
- Database connection pool >90% full
- Edge function error rate >5%
- AI agent accuracy drops below 80%
- Backup job fails

**Warning Alerts (Slack Notification):**
- Slow query detected (>2 seconds)
- Storage bucket >80% quota
- OAuth token refresh failing for >10 users
- AI cost approaching monthly budget

**Info Alerts (Log Only):**
- New org signup
- Large import job completed
- Scheduled function executed successfully

---

## Scaling Strategy

### Current Capacity (MVP: 50 orgs, 500 users)
- Supabase: Free tier (500 MB DB, 1 GB storage)
- Edge Functions: 500k invocations/month free
- Expected load: ~20 API calls/user/day = 10k/day

### Scale to 500 Orgs (5,000 users)
- Supabase: Pro tier ($25/month)
- Database: 8 GB (estimated)
- Edge Functions: ~5M invocations/month
- Strategy: Optimize queries, add indexes, enable caching

### Scale to 5,000 Orgs (50,000 users)
- Supabase: Team tier ($599/month) or Enterprise
- Database: 80 GB
- Edge Functions: ~50M invocations/month
- Strategy:
  - Read replicas for analytics queries
  - Separate Supabase project for batch jobs
  - CDN for static assets (avatars, logos)
  - Consider dedicated infra for AI orchestrator

### Scale to 50,000 Orgs (500,000 users)
- Supabase: Multi-region deployment
- Database: Sharding by org_id (challenging migration)
- Edge Functions: Consider Cloudflare Workers (lower cost at scale)
- Strategy: Hire dedicated SRE team, custom scaling plan

---

## Cost Estimation (Monthly)

### Baseline Assumptions
- 100 orgs
- 1,000 users
- 50 calls/day analyzed
- 2,000 search queries/day
- 10,000 deal health calculations/day

### Cost Breakdown

**Supabase Pro: $25**
- Database (8 GB)
- Storage (10 GB)
- Bandwidth (100 GB)

**Edge Functions: $50**
- 5M invocations
- 500 GB-seconds compute

**Gemini API: $800**
- Call analysis (50/day × $0.40/call) = $600/month
- Search queries (2000/day × $0.01/query) = $600/month
- Deal health (10k/day × $0.001/calc) = $300/month
- Total: ~$1,500/month (estimate high, optimize to $800)

**External APIs: $200**
- LinkedIn API: $100/month
- Webhook receivers (Gong, DocuSign): $50/month
- Monitoring (Sentry, Datadog): $50/month

**Total: ~$1,075/month**

**Per-User Cost: $1.08/month**
**Revenue Target: $50/user/month** → **46x gross margin** ✅

---

## Migration Path from Mock Data to Production

### Phase 1: Local Development (Current)
- Mock data in `IntelligenceContext`
- No backend calls
- Fast iteration

### Phase 2: Supabase Setup (Week 1)
- Create Supabase project
- Run schema migrations (create all tables)
- Seed with sample data
- Update frontend to call Supabase REST API

### Phase 3: Edge Functions (Week 2-3)
- Deploy `ingest-call`, `analyze-call`, `search-leads`
- Replace mock AI responses with real Gemini calls
- Add error handling + retries

### Phase 4: Realtime (Week 4)
- Enable realtime subscriptions for Deal Health, Call Analysis
- Update frontend to listen to broadcasts
- Test collaborative scenarios

### Phase 5: Production Hardening (Week 5-6)
- Add monitoring + alerts
- Implement rate limiting + cost controls
- Load testing (simulate 1,000 concurrent users)
- Security audit (pen test, RLS verification)

---

## Open Questions & Decisions Needed

### Technical Decisions
- [ ] **Decision:** Use Postgres full-text search or Algolia for lead search?
  - **Recommendation:** Start with Postgres (simpler), migrate to Algolia if search latency becomes issue
  
- [ ] **Decision:** Store call transcripts in Postgres or Storage?
  - **Recommendation:** Storage (cheaper for large text, Postgres for metadata + search)

- [ ] **Decision:** Real-time or polling for AI agent status updates?
  - **Recommendation:** Realtime for <10 second tasks, polling for >30 second tasks

### Business Decisions
- [ ] **Decision:** AI cost ceiling per org per month?
  - **Recommendation:** $50/org/month cap (10% of revenue), notify admin at 80%

- [ ] **Decision:** Free tier AI usage limits?
  - **Recommendation:** 10 call analyses + 50 searches per month, then paywall

---

## Next Steps

### This Week
1. Create Supabase project (production + staging)
2. Write SQL migration for all tables (schema.sql)
3. Deploy first edge function (`search-leads`)
4. Test RLS policies with multi-tenant data

### Next Week
1. Implement OAuth flow for Google + LinkedIn
2. Deploy `ingest-call` + `analyze-call` pipeline
3. Migrate frontend from mock data to Supabase calls
4. Set up monitoring dashboard (Supabase built-in)

### This Month
1. Complete all P0 edge functions
2. Load test with realistic data (1,000 leads, 100 calls)
3. Security review with external auditor
4. Soft launch with 5 beta customers

---

**Document Status:** Strategic blueprint complete, ready for implementation planning.

**Next Document:** [51 - Edge Functions Architecture](./51-edge-functions-architecture.md)

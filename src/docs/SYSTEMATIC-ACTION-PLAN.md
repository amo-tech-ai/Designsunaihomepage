# Systematic Action Plan - Next Steps

**Generated:** December 18, 2025  
**Based On:** 00-progress-tracker.md gap analysis  
**Focus:** Complete missing workflows, fix blockers, build connected features

---

## 🎯 Executive Summary

### Current Status
- **Production Ready:** 1 feature (Action Architect)
- **Beta Ready:** 1 feature (NL Search - with known limitations)
- **In Progress:** 2 features (Meeting Protector 75%, NL Search 85%)
- **Not Started:** 10 features, 3 workflows

### Critical Gaps Identified

**P0 Blockers (Must Fix This Week):**
1. ⚠️ Meeting Protector: Calendar OAuth not set up (blocking launch)
2. ⚠️ Meeting Protector: Slack webhook URL missing (alerts broken)
3. ⚠️ Meeting Protector: Chat timeout (>30s kills conversations)
4. ⚠️ NL Search: Complex query parsing (OR logic failing)
5. ⚠️ NL Search: Query caching not implemented (waste API calls)

**Missing Core Components (Build Next 2 Weeks):**
- Database tables: `lead_personas`, `deal_health_scores`, `saved_segments`
- Edge functions: `calculate-deal-health`, `generate-persona`, `resurrect-leads`
- UI screens: Persona widget, Deal Health dashboard, Resource library
- Workflows: Ghost detection implementation, contract-to-cash logic

---

## 📋 Phase 1: Fix P0 Blockers (This Week - Dec 18-22)

### Day 1 (Today - Dec 18)

#### TASK 1.1: Fix Slack Webhook ⚡ URGENT
```
STATUS: 🔴 Blocking Meeting Protector alerts
EFFORT: 1 hour
PRIORITY: P0

STEPS:
1. Go to Slack App settings
2. Create incoming webhook for #sales-alerts channel
3. Add SLACK_WEBHOOK_URL to Supabase secrets
4. Test alert sending:
   supabase secrets set SLACK_WEBHOOK_URL="https://hooks.slack.com/..."
5. Deploy edge function with new secret
6. Send test alert, verify received in Slack

VERIFICATION:
- Create test lead with score <30
- Verify manager receives Slack notification
- Check notification includes: lead name, score, action buttons

FILE TO UPDATE: None (configuration only)
```

#### TASK 1.2: Fix iOS Mobile Scroll Bug ⚡ URGENT
```
STATUS: 🔴 Degraded mobile UX
EFFORT: 1 hour
PRIORITY: P0

STEPS:
1. Open /components/crm/intelligence/QualificationChat.tsx
2. Find bottom drawer component (line ~120)
3. Update CSS:
   .drawer-content {
     overflow-y: auto;
     -webkit-overflow-scrolling: touch; /* iOS smooth scroll */
     height: calc(100vh - 200px); /* Fixed height */
   }
4. Test on iPhone 13 (iOS Safari)
5. Test on Android (Chrome)
6. Deploy fix

VERIFICATION:
- Open meeting chat on iPhone
- Scroll through conversation
- Verify smooth scrolling, no stuck drawer

FILE TO UPDATE: /components/crm/intelligence/QualificationChat.tsx
```

### Day 2-3 (Dec 19-20)

#### TASK 1.3: Set Up Google Calendar OAuth 🔒 CRITICAL PATH
```
STATUS: 🔴 Blocking Meeting Protector launch
EFFORT: 2 days
PRIORITY: P0

STEPS:
DAY 1:
1. Go to Google Cloud Console
2. Create new project: "Luxury-AI-CRM"
3. Enable Google Calendar API
4. Create OAuth 2.0 credentials:
   - Application type: Web application
   - Authorized redirect URIs: 
     • https://app.luxurycrm.com/auth/google/callback
     • http://localhost:3000/auth/google/callback (dev)
5. Save Client ID and Client Secret

DAY 2:
6. Add credentials to Supabase secrets:
   supabase secrets set GOOGLE_CLIENT_ID="..."
   supabase secrets set GOOGLE_CLIENT_SECRET="..."
7. Create edge function: google-calendar-auth
8. Build OAuth flow:
   - User clicks "Connect Calendar"
   - Redirect to Google consent screen
   - Receive auth code
   - Exchange for access token
   - Store in user_integrations table
9. Create edge function: book-calendar-meeting
10. Test end-to-end booking flow

VERIFICATION:
- Complete qualification chat (score >70)
- Click "Book Meeting" button
- Redirected to Google consent
- Approve access
- Select time slot
- Meeting created in Google Calendar
- Confirmation sent to lead email

FILES TO CREATE:
- /supabase/functions/google-calendar-auth/index.ts
- /supabase/functions/book-calendar-meeting/index.ts
- /components/crm/intelligence/CalendarBooking.tsx

DATABASE SCHEMA:
CREATE TABLE user_integrations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  provider TEXT, -- 'google_calendar'
  access_token TEXT ENCRYPTED,
  refresh_token TEXT ENCRYPTED,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### TASK 1.4: Fix Complex Search OR Logic 🔍
```
STATUS: 🟡 85% accuracy (need 90%+)
EFFORT: 2 days
PRIORITY: P0

STEPS:
DAY 1: Improve Gemini Prompt
1. Open /supabase/functions/search-leads/gemini-prompt.ts
2. Add OR logic examples to system instruction:

EXAMPLE ADDITIONS:
"""
Handle OR conditions:
Query: "NYC OR SF" 
SQL: (location = 'New York' OR location = 'San Francisco')

Query: "Fintech OR Healthcare"
SQL: (industry = 'Fintech' OR industry = 'Healthcare')

Query: "Budget >$50k OR <$10k"
SQL: (budget > 50000 OR budget < 10000)

RULES:
- OR must create parentheses: (condition1 OR condition2)
- Multiple ORs: (c1 OR c2 OR c3)
- Mixed AND/OR: condition1 AND (c2 OR c3)
"""

3. Test with 20 OR queries
4. Measure accuracy (target: 90%+)

DAY 2: Handle Edge Cases
5. Budget parsing:
   - "$50k" → 50000
   - "fifty thousand" → 50000
   - "$50-100k" → BETWEEN 50000 AND 100000
6. Update prompt with number format examples
7. Test with 50 complex queries
8. Deploy updated function

VERIFICATION:
- Query: "NYC OR SF" → Returns leads from both cities
- Query: "Budget >$50k AND (NYC OR SF)" → Correct AND/OR logic
- Query: "Fintech OR Healthcare with budgets $50-100k" → Handles range + OR
- Success rate: 90%+ on test set

FILE TO UPDATE: /supabase/functions/search-leads/gemini-prompt.ts
```

#### TASK 1.5: Implement Query Caching 💾
```
STATUS: 🔴 Wasting API calls, slow repeat queries
EFFORT: 1 day
PRIORITY: P1 (nice to have, not blocking)

STEPS:
1. Create cache table:
   CREATE TABLE query_cache (
     id UUID PRIMARY KEY,
     query_hash TEXT UNIQUE,
     query_text TEXT,
     results JSONB,
     created_at TIMESTAMP DEFAULT NOW()
   );
   CREATE INDEX idx_query_cache_hash ON query_cache(query_hash);

2. Update search-leads function:
   async function searchLeads(query: string) {
     // Generate hash
     const hash = crypto.createHash('sha256')
       .update(query + user.org_id)
       .digest('hex');
     
     // Check cache (< 1 hour old)
     const cached = await supabase
       .from('query_cache')
       .select('*')
       .eq('query_hash', hash)
       .gte('created_at', new Date(Date.now() - 3600000))
       .single();
     
     if (cached) {
       return { ...cached.results, cacheHit: true };
     }
     
     // Execute query
     const results = await executeSearch(query);
     
     // Store in cache
     await supabase.from('query_cache').insert({
       query_hash: hash,
       query_text: query,
       results
     });
     
     return { ...results, cacheHit: false };
   }

3. Add cache indicator in UI:
   {cacheHit && <Badge>Cached • Refresh</Badge>}

4. Add manual refresh button

VERIFICATION:
- Search "fintech leads" → 1.8s (no cache)
- Search "fintech leads" again → 0.2s (cache hit)
- Badge shows "Cached • Refresh"
- Click refresh → Bypasses cache, calls Gemini

FILE TO UPDATE: /supabase/functions/search-leads/index.ts
DATABASE: Add query_cache table
```

### Day 4-5 (Dec 21-22)

#### TASK 1.6: Fix Meeting Chat Timeout ⏱️
```
STATUS: 🟡 30% of conversations timeout (>30s)
EFFORT: 2 days
PRIORITY: P0

OPTION A: Implement Streaming (Recommended)
STEPS:
1. Update qualify-meeting function to use streaming:
   
   const stream = await gemini.generateContentStream({
     model: 'gemini-2.0-flash-exp',
     contents: conversationHistory,
     systemInstruction: BANT_PROMPT
   });
   
   for await (const chunk of stream) {
     // Send chunk to client via websocket
     websocket.send(JSON.stringify({
       type: 'message_chunk',
       content: chunk.text()
     }));
   }

2. Update frontend to handle streaming:
   - Display AI response as it arrives (word by word)
   - Show typing indicator while waiting
   - Handle connection errors gracefully

3. Set timeout to 60s (vs current 30s)
4. Test with long conversations (10+ exchanges)

OPTION B: Optimize Prompt (Fallback if streaming fails)
STEPS:
1. Reduce prompt length (remove examples)
2. Use fewer output tokens (max 512 vs 1024)
3. Simplify system instruction
4. Test response time improvement

VERIFICATION:
- Start qualification chat
- Give long, rambling answers (50+ words each)
- Complete 8-question conversation
- No timeouts, all responses received
- Total time: <90s for full qualification

FILE TO UPDATE: /supabase/functions/qualify-meeting/index.ts
FRONTEND UPDATE: /components/crm/intelligence/QualificationChat.tsx
```

---

## 📋 Phase 2: Build Missing Core Features (Week 4 - Dec 23-29)

### Feature Priority Order

1. **Persona Chameleon** (Highest ROI, connects to all features)
2. **Deal Health Oracle** (Critical for sales managers)
3. **Meeting Protector** (Finish remaining 25%)
4. **NL Search** (Finish remaining 15%)

### TASK 2.1: Build Persona Chameleon MVP 🎭

#### Day 1 (Dec 23): Database + Edge Function
```
CREATE TABLES:

-- Store persona analysis
CREATE TABLE lead_personas (
  id UUID PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) UNIQUE,
  org_id UUID REFERENCES organizations(id),
  
  -- Persona classification
  archetype TEXT CHECK (archetype IN (
    'analytical_driver',
    'friendly_enthusiast',
    'skeptical_researcher',
    'busy_executive',
    'collaborative_team_player'
  )),
  confidence_score DECIMAL(3,2),
  
  -- Communication preferences
  prefers_bullets BOOLEAN,
  prefers_data BOOLEAN,
  prefers_stories BOOLEAN,
  response_speed TEXT, -- 'fast', 'medium', 'slow'
  communication_style JSONB,
  
  -- Analysis metadata
  analyzed_at TIMESTAMP DEFAULT NOW(),
  source TEXT[], -- ['linkedin', 'email_history', 'call_transcript']
  
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_lead_personas_lead ON lead_personas(lead_id);
CREATE INDEX idx_lead_personas_archetype ON lead_personas(org_id, archetype);

-- Store generated messages
CREATE TABLE message_drafts (
  id UUID PRIMARY KEY,
  lead_id UUID REFERENCES leads(id),
  persona_id UUID REFERENCES lead_personas(id),
  user_id UUID REFERENCES users(id),
  
  -- Message content
  subject TEXT,
  body TEXT,
  tone TEXT,
  
  -- Performance tracking
  persona_match_score DECIMAL(3,2),
  predicted_response_rate DECIMAL(3,2),
  actual_opened BOOLEAN,
  actual_replied BOOLEAN,
  
  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'scheduled')),
  sent_at TIMESTAMP,
  
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE EDGE FUNCTION: generate-persona

import { Gemini } from '@google/generative-ai';

const PERSONA_ANALYSIS_PROMPT = `
You are an expert at analyzing communication styles from sales interactions.

Given:
- LinkedIn profile text
- Email history
- Call transcripts

Classify the person into ONE of these archetypes:

1. ANALYTICAL DRIVER
   - Prefers: Data, bullets, ROI calculations
   - Hates: Fluff, stories, long emails
   - Response speed: Fast (wants efficiency)
   - Example: CTOs, CFOs, data-driven CEOs

2. FRIENDLY ENTHUSIAST
   - Prefers: Personal connection, stories, enthusiasm
   - Likes: Casual tone, emojis, relationship building
   - Response speed: Medium (enjoys conversation)
   - Example: Marketing leaders, HR executives

3. SKEPTICAL RESEARCHER
   - Prefers: Evidence, case studies, detailed comparisons
   - Needs: Proof points, customer testimonials
   - Response speed: Slow (thorough evaluation)
   - Example: Legal, compliance, cautious decision-makers

4. BUSY EXECUTIVE
   - Prefers: TL;DR, 3 bullet points, executive summary
   - Hates: Long emails, too many details
   - Response speed: Fast (or never - delegates)
   - Example: C-suite, VPs with large teams

5. COLLABORATIVE TEAM PLAYER
   - Prefers: Inclusive language, "we" vs "I", team input
   - Likes: Collaboration, workshops, group demos
   - Response speed: Medium (needs to consult team)
   - Example: Product managers, team leads

Output JSON:
{
  "archetype": "analytical_driver",
  "confidence": 0.87,
  "preferences": {
    "prefers_bullets": true,
    "prefers_data": true,
    "prefers_stories": false,
    "optimal_email_length": "short", // short/medium/long
    "response_speed": "fast",
    "best_send_time": "7-9am" // when they open emails
  },
  "communication_style": {
    "tone": "professional, direct",
    "avoid": ["fluff", "long paragraphs", "vague claims"],
    "include": ["specific numbers", "bullet points", "clear CTAs"]
  },
  "reasoning": "LinkedIn shows frequent data-heavy posts about
                analytics. Email responses are terse (<50 words).
                Call transcript shows they interrupt with questions
                about metrics."
}
`;

export async function generatePersona(leadId: string) {
  // Fetch lead data
  const { data: lead } = await supabase
    .from('leads')
    .select('*, call_briefs(*), emails(*)')
    .eq('id', leadId)
    .single();
  
  // Fetch LinkedIn profile (if connected)
  const linkedinData = await fetchLinkedInProfile(lead.linkedin_url);
  
  // Prepare context for AI
  const context = {
    linkedin: linkedinData?.summary || '',
    emailHistory: lead.emails.map(e => e.body).join('\n\n'),
    callTranscripts: lead.call_briefs.map(c => c.transcript).join('\n\n')
  };
  
  // Call Gemini
  const result = await gemini.generateContent({
    model: 'gemini-2.0-flash-exp',
    systemInstruction: PERSONA_ANALYSIS_PROMPT,
    contents: [{ text: JSON.stringify(context) }]
  });
  
  const persona = JSON.parse(result.response.text());
  
  // Store in database
  await supabase.from('lead_personas').upsert({
    lead_id: leadId,
    org_id: lead.org_id,
    archetype: persona.archetype,
    confidence_score: persona.confidence,
    prefers_bullets: persona.preferences.prefers_bullets,
    prefers_data: persona.preferences.prefers_data,
    prefers_stories: persona.preferences.prefers_stories,
    response_speed: persona.preferences.response_speed,
    communication_style: persona.communication_style,
    source: ['email_history', 'call_transcript']
  });
  
  return persona;
}

FILE TO CREATE: /supabase/functions/generate-persona/index.ts
```

#### Day 2 (Dec 24): UI Components
```
CREATE COMPONENT: PersonaWidget.tsx

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function PersonaWidget({ leadId }: { leadId: string }) {
  const { data: persona } = usePersona(leadId);
  
  if (!persona) return <LoadingPersona />;
  
  const archetypeConfig = {
    analytical_driver: {
      icon: '📊',
      color: 'blue',
      label: 'Analytical Driver',
      description: 'Data-driven, prefers bullets'
    },
    friendly_enthusiast: {
      icon: '🤝',
      color: 'green',
      label: 'Friendly Enthusiast',
      description: 'Relationship-focused, warm tone'
    },
    // ... other archetypes
  };
  
  const config = archetypeConfig[persona.archetype];
  
  return (
    <Card className="p-4 glass-card">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{config.icon}</span>
        <div>
          <h3 className="font-medium">{config.label}</h3>
          <p className="text-sm text-muted">{config.description}</p>
        </div>
        <Badge variant={config.color}>
          {Math.round(persona.confidence_score * 100)}% match
        </Badge>
      </div>
      
      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-medium">Communication Tips:</h4>
        <ul className="text-sm space-y-1">
          {persona.prefers_bullets && (
            <li>✓ Use bullet points</li>
          )}
          {persona.prefers_data && (
            <li>✓ Include specific numbers/ROI</li>
          )}
          {persona.response_speed === 'fast' && (
            <li>✓ Keep emails short (<100 words)</li>
          )}
          <li>📧 Best send time: {persona.communication_style.best_send_time}</li>
        </ul>
      </div>
      
      <button 
        onClick={() => openMessageComposer(leadId)}
        className="mt-4 w-full btn-primary"
      >
        Draft Message in Their Style
      </button>
    </Card>
  );
}

FILE TO CREATE: /components/crm/personas/PersonaWidget.tsx
```

#### Day 3 (Dec 25): Message Generation
```
CREATE EDGE FUNCTION: draft-personalized-message

const MESSAGE_GENERATION_PROMPT = `
Generate an email that matches the recipient's communication style.

RECIPIENT PERSONA:
{persona_data}

CONTEXT:
- Last interaction: {last_interaction}
- Purpose of email: {purpose}
- Key points to include: {key_points}

STYLE RULES FOR {archetype}:

IF analytical_driver:
- Max 100 words
- Use bullet points
- Include specific numbers/data
- No fluff or stories
- Direct subject line ("Q1 CRM ROI: 40% faster closes")

IF friendly_enthusiast:
- Warm, personal tone
- Start with personal connection
- Use stories/examples
- Can be longer (200+ words)
- Enthusiastic subject line ("Loved our conversation!")

IF skeptical_researcher:
- Include proof points (case studies, testimonials)
- Link to detailed resources
- Acknowledge their concerns
- Professional, thorough tone
- Evidence-based subject line ("How 12 companies improved...")

IF busy_executive:
- TL;DR at top (3 bullets max)
- Executive summary style
- Assume they'll delegate to team
- Ultra-short subject line (3-5 words)

IF collaborative_team_player:
- Use "we" language
- Mention team involvement
- Suggest group demos/workshops
- Inclusive tone
- Team-focused subject line ("For your team's review")

Output JSON:
{
  "subject": "...",
  "body": "...",
  "tone": "professional/warm/enthusiastic",
  "persona_match_score": 0.94,
  "predicted_response_rate": 0.78,
  "reasoning": "Used bullet points (prefers bullets: true),
                included ROI data (prefers data: true),
                kept under 100 words (analytical driver)"
}
`;

FILE TO CREATE: /supabase/functions/draft-personalized-message/index.ts
```

---

## 📋 Phase 3: Build Deal Health Oracle (Week 5 - Dec 30 - Jan 5)

### TASK 3.1: Deal Scoring Algorithm 📊

```
CREATE EDGE FUNCTION: calculate-deal-health

SCORING LOGIC (40+ signals):

1. ENGAGEMENT SIGNALS (30 points total):
   - Last contact < 7 days: +10
   - Last contact 7-14 days: +5
   - Last contact 14-30 days: 0
   - Last contact > 30 days: -10
   - Email opened in last 7 days: +5
   - Email replied to in last 14 days: +10
   - Call completed in last 14 days: +5

2. MOMENTUM SIGNALS (25 points total):
   - Budget confirmed: +10
   - Timeline confirmed: +10
   - Next meeting scheduled: +5
   - Demo completed: +5
   - Proposal sent: +5
   - Stage progression (moved forward): +10
   - Stage regression (moved backward): -15

3. STAKEHOLDER SIGNALS (20 points total):
   - Multiple contacts (>2): +10
   - Decision maker engaged: +10
   - Champion identified: +5
   - Executive sponsor: +5
   - Single threaded (only 1 contact): -10

4. COMPETITIVE SIGNALS (15 points total):
   - No competitors mentioned: +5
   - Competitor mentioned but dismissed: 0
   - Active competitive evaluation: -10
   - Lost to competitor before: -15

5. RISK SIGNALS (10 points total):
   - Budget concerns raised: -10
   - Timeline pushed back: -10
   - Legal review stalled: -15
   - Procurement involved: -5 (slower but not bad)
   - Champion left company: -20

TOTAL SCORE: 0-100

HEALTH CATEGORIES:
- 80-100: Green (healthy, likely to close)
- 50-79: Yellow (at risk, needs attention)
- 0-49: Red (critical, intervention required)

async function calculateDealHealth(leadId: string) {
  const { data: lead } = await supabase
    .from('leads')
    .select(`
      *,
      emails!inner(opened, replied_at, sent_at),
      calls!inner(call_date),
      contacts(count),
      activity_log(*)
    `)
    .eq('id', leadId)
    .single();
  
  let score = 0;
  const signals = [];
  
  // Engagement
  const daysSinceContact = getDaysSince(lead.last_contact_date);
  if (daysSinceContact < 7) {
    score += 10;
    signals.push({ category: 'engagement', points: 10, reason: 'Recent contact' });
  } else if (daysSinceContact > 30) {
    score -= 10;
    signals.push({ category: 'engagement', points: -10, reason: 'No contact in 30+ days' });
  }
  
  // Email opens
  const recentOpens = lead.emails.filter(e => 
    e.opened && getDaysSince(e.sent_at) < 7
  ).length;
  if (recentOpens > 0) {
    score += 5;
    signals.push({ category: 'engagement', points: 5, reason: 'Email opened recently' });
  }
  
  // Momentum
  if (lead.budget_confirmed) {
    score += 10;
    signals.push({ category: 'momentum', points: 10, reason: 'Budget confirmed' });
  }
  
  if (lead.next_meeting_date) {
    score += 5;
    signals.push({ category: 'momentum', points: 5, reason: 'Next meeting scheduled' });
  }
  
  // Stakeholders
  if (lead.contacts.length > 2) {
    score += 10;
    signals.push({ category: 'stakeholders', points: 10, reason: 'Multi-threaded (3+ contacts)' });
  } else if (lead.contacts.length === 1) {
    score -= 10;
    signals.push({ category: 'stakeholders', points: -10, reason: 'Single threaded (risky)' });
  }
  
  // Competitors
  if (lead.competitors?.length > 0) {
    score -= 10;
    signals.push({ category: 'competitive', points: -10, reason: `Evaluating ${lead.competitors.join(', ')}` });
  }
  
  // Determine health category
  let health_category;
  if (score >= 80) health_category = 'green';
  else if (score >= 50) health_category = 'yellow';
  else health_category = 'red';
  
  // Store score
  await supabase.from('deal_health_scores').insert({
    lead_id: leadId,
    org_id: lead.org_id,
    score,
    health_category,
    signals,
    calculated_at: new Date()
  });
  
  // Create alert if red
  if (health_category === 'red' && score < 40) {
    await createInterventionAlert(leadId, score, signals);
  }
  
  return { score, health_category, signals };
}

FILE TO CREATE: /supabase/functions/calculate-deal-health/index.ts
```

### TASK 3.2: Deal Health Dashboard UI 📺

```
CREATE COMPONENT: DealHealthDashboard.tsx

export function DealHealthDashboard() {
  const { data: healthStats } = useDealHealthStats();
  
  return (
    <div className="space-y-6">
      {/* Traffic Light Summary */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          title="Healthy Deals"
          value={healthStats.green_count}
          percentage={healthStats.green_percentage}
          icon="🟢"
          trend="+3 this week"
        />
        <StatCard
          title="At Risk"
          value={healthStats.yellow_count}
          percentage={healthStats.yellow_percentage}
          icon="🟡"
          trend="-2 this week"
        />
        <StatCard
          title="Critical"
          value={healthStats.red_count}
          percentage={healthStats.red_percentage}
          icon="🔴"
          trend="+1 this week"
        />
      </div>
      
      {/* Deals Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Deal</TableHead>
              <TableHead>Health</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {healthStats.deals.map(deal => (
              <TableRow key={deal.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{deal.company}</p>
                    <p className="text-sm text-muted">{deal.contact_name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <HealthBadge category={deal.health_category} />
                </TableCell>
                <TableCell>
                  <span className="font-mono">{deal.score}/100</span>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(deal.last_contact_date)} ago
                </TableCell>
                <TableCell>
                  {formatCurrency(deal.value)}
                </TableCell>
                <TableCell>
                  <button onClick={() => openDrillDown(deal.id)}>
                    View Details
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

FILE TO CREATE: /components/crm/health/DealHealthDashboard.tsx
```

---

## 📋 Phase 4: Complete Remaining Workflows (Week 6 - Jan 6-12)

### TASK 4.1: Implement Ghost Detection Workflow (from spec 19)
### TASK 4.2: Create Contract-to-Cash Workflow
### TASK 4.3: Build Champion Autopilot Workflow
### TASK 4.4: Implement Multi-Threading Enforcer

*(Each workflow follows the same pattern: database schema → edge function → UI → alerts → testing)*

---

## 🎯 Success Criteria

### Week 3 End (Dec 22)
- [ ] All P0 blockers fixed (OAuth, Slack, timeout, OR logic)
- [ ] Meeting Protector: 95% complete (launch-ready)
- [ ] NL Search: 95% complete (90%+ accuracy)
- [ ] Query caching implemented (30% API call reduction)

### Week 4 End (Dec 29)
- [ ] Persona Chameleon: MVP complete (50% done)
- [ ] Database tables created (personas, message_drafts)
- [ ] Persona widget rendering on lead profiles
- [ ] Message generation working (80%+ match score)

### Week 5 End (Jan 5)
- [ ] Deal Health Oracle: Dashboard live
- [ ] Scoring algorithm calculating (85%+ accuracy)
- [ ] Alerts triggering for red deals
- [ ] Manager receiving daily digest

### Week 6 End (Jan 12)
- [ ] Ghost Detection: Implemented and running
- [ ] 90-day cold leads getting breakup emails
- [ ] 15%+ response rate on resurrection emails
- [ ] All P0 features 100% complete

---

## 📊 Tracking Progress

Update `/docs/features/00-progress-tracker.md` daily with:
- Task status changes (🔴 → 🟡 → 🟢)
- % completion updates
- Blockers identified/resolved
- Real-world test results

Update this action plan weekly with:
- Completed tasks marked ✅
- New tasks added based on discoveries
- Timeline adjustments
- Risk assessment

---

**Next Review:** December 22, 2025 (end of Week 3)  
**Owner:** Development Team  
**Status:** 🟢 **ACTIVE - EXECUTING SYSTEMATICALLY**

---

*This plan represents the systematic path from 35% → 100% complete for all P0 features, with clear daily tasks, verification criteria, and connected workflows.*

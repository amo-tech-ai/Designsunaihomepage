# Workflow: Champion Autopilot

**Status:** 🔴 Specified (Ready to implement)  
**Impact:** +$900k pipeline from internal champions  
**Connects:** Persona Chameleon, Multi-Threading Enforcer, Email Resurrection

---

## Problem Statement

Deals stall when the champion leaves the company or becomes unresponsive. We lose 30% of deals this way.

**Key Stats:**
- 35% of deals are single-threaded (only 1 contact)
- When champion leaves: 8% deal survival rate
- Average time to detect: 21 days (too late)

**Target:** Reduce single-threaded deals to <10%, improve survival rate to 40%

---

## Workflow Trigger

**Event:** Any of these conditions:
1. Deal is single-threaded for >14 days
2. Champion's LinkedIn shows "new job" or profile change
3. Email bounce detected (left company)
4. Champion hasn't engaged in 21 days (but deal still active)

```sql
-- Trigger query (runs daily)
SELECT l.id, l.company, l.full_name as champion_name
FROM leads l
WHERE l.stage IN ('discovery', 'proposal', 'negotiation')
  AND l.org_id = $1
  AND (
    -- Single threaded
    (SELECT COUNT(*) FROM contacts WHERE lead_id = l.id) = 0
    OR
    -- Champion unresponsive
    (l.last_contact_date < NOW() - INTERVAL '21 days')
    OR
    -- Email bounced
    (SELECT COUNT(*) FROM emails WHERE lead_id = l.id AND bounced = true) > 0
  );
```

---

## Workflow Steps

### Step 1: Detect Risk (Automated)

**Trigger:** Daily at 8 AM  
**Action:** Identify at-risk deals

```typescript
async function detectChampionRisks() {
  const { data: atRiskDeals } = await supabase
    .from('leads')
    .select(`
      *,
      contacts(count),
      emails!inner(bounced, sent_at)
    `)
    .in('stage', ['discovery', 'proposal', 'negotiation'])
    .or(`
      contacts.count.eq.0,
      last_contact_date.lt.${new Date(Date.now() - 21 * 86400000).toISOString()},
      emails.bounced.eq.true
    `);
  
  for (const deal of atRiskDeals) {
    await flagChampionRisk(deal);
  }
}

async function flagChampionRisk(deal: Lead) {
  const riskType = 
    deal.contacts.count === 0 ? 'single_threaded' :
    deal.emails.some(e => e.bounced) ? 'champion_left' :
    'champion_unresponsive';
  
  await supabase.from('deal_risks').insert({
    lead_id: deal.id,
    risk_type: riskType,
    risk_level: 'high',
    detected_at: new Date()
  });
  
  // Trigger Step 2
  await identifyNewChampions(deal);
}
```

---

### Step 2: Identify Alternative Champions (AI)

**Trigger:** When risk detected  
**Action:** Find other contacts at the company

```typescript
async function identifyNewChampions(deal: Lead) {
  // Use AI to research company
  const prompt = `
    Company: ${deal.company}
    Original Champion: ${deal.full_name} (${deal.role})
    
    Research this company and identify:
    1. Who is likely the new decision maker if champion left?
    2. Who are other stakeholders we should connect with?
    3. What departments would benefit from our solution?
    
    Output JSON with potential champions:
    {
      "potential_champions": [
        {
          "name": "Sarah Johnson",
          "role": "VP of Sales",
          "why": "Owns sales ops, would benefit most",
          "confidence": 0.85,
          "linkedin_url": "..."
        }
      ],
      "research_sources": ["LinkedIn", "Company website"],
      "recommended_approach": "Cold outreach referencing original champion"
    }
  `;
  
  const aiResult = await callGemini(prompt);
  const champions = JSON.parse(aiResult);
  
  // Store potential champions
  for (const champion of champions.potential_champions) {
    await supabase.from('potential_champions').insert({
      lead_id: deal.id,
      name: champion.name,
      role: champion.role,
      reasoning: champion.why,
      confidence: champion.confidence,
      linkedin_url: champion.linkedin_url,
      status: 'identified'
    });
  }
  
  // Alert rep
  await sendSlackAlert({
    channel: '#sales-alerts',
    text: `⚠️ Champion Risk Detected: ${deal.company}
    
    Original Champion: ${deal.full_name} (${deal.role})
    Risk: ${getRiskType(deal)}
    
    🔍 AI identified ${champions.potential_champions.length} alternative champions:
    ${champions.potential_champions.map(c => 
      `• ${c.name} (${c.role}) - ${c.why}`
    ).join('\n')}
    
    📋 Recommended Actions:
    1. ${champions.recommended_approach}
    2. Reference original champion in outreach
    3. Multi-thread with 2-3 contacts
    
    <View Deal | Take Action>`
  });
  
  // Trigger Step 3
  await generateOutreachMessages(deal, champions);
}
```

---

### Step 3: Generate Outreach Messages (AI)

**Trigger:** After champions identified  
**Action:** Draft personalized messages for each potential champion

```typescript
async function generateOutreachMessages(deal: Lead, champions: ChampionList) {
  for (const champion of champions.potential_champions) {
    // Analyze persona (if available)
    let persona = null;
    if (champion.linkedin_url) {
      persona = await analyzeLinkedInPersona(champion.linkedin_url);
    }
    
    // Generate message
    const prompt = `
      Scenario: Our original champion (${deal.full_name}) has left ${deal.company}.
      We need to reach out to a new stakeholder.
      
      New Contact: ${champion.name} (${champion.role})
      ${persona ? `Persona: ${persona.archetype}` : ''}
      
      Context:
      - We were working with ${deal.full_name} on [solution]
      - Deal was in ${deal.stage} stage
      - Budget: ${deal.budget || 'Not confirmed'}
      - Key pain points from original champion: [pain_points from call brief]
      
      Generate an email that:
      1. References original champion (build credibility)
      2. Highlights value relevant to this person's role
      3. Asks for a brief call to discuss
      4. ${persona ? `Matches ${persona.archetype} communication style` : 'Professional tone'}
      
      Output JSON with subject and body.
    `;
    
    const messageResult = await callGemini(prompt);
    const message = JSON.parse(messageResult);
    
    // Store draft
    await supabase.from('message_drafts').insert({
      lead_id: deal.id,
      recipient_name: champion.name,
      recipient_role: champion.role,
      subject: message.subject,
      body: message.body,
      message_type: 'champion_transition',
      status: 'pending_approval',
      created_by: 'ai_autopilot'
    });
  }
  
  // Notify rep
  await sendEmail({
    to: deal.owner_email,
    subject: `[Action Required] ${deal.company} - Champion Risk Detected`,
    body: `
      Hi ${deal.owner_name},
      
      We detected a risk with your deal at ${deal.company}:
      ${getRiskDescription(deal)}
      
      🤖 AI has drafted ${champions.potential_champions.length} outreach messages 
      to alternative champions. Review and send:
      
      ${APP_URL}/deals/${deal.id}/champion-autopilot
      
      ⏰ Recommended: Reach out within 3 business days
    `
  });
}
```

---

### Step 4: Track Engagement & Adapt (Automated)

**Trigger:** After messages sent  
**Action:** Monitor responses, escalate if needed

```typescript
async function trackChampionOutreach(dealId: string) {
  const { data: outreachMessages } = await supabase
    .from('message_drafts')
    .select('*')
    .eq('lead_id', dealId)
    .eq('message_type', 'champion_transition')
    .eq('status', 'sent');
  
  // Check if any responses
  const responsesReceived = outreachMessages.filter(m => m.actual_replied);
  
  if (responsesReceived.length > 0) {
    // Success! Update deal status
    await supabase.from('leads').update({
      champion_risk_resolved: true,
      new_champion_id: responsesReceived[0].recipient_id
    }).eq('id', dealId);
    
    // Celebrate
    await sendSlackMessage({
      channel: '#wins',
      text: `🎉 Champion Risk Resolved!
      
      Deal: ${deal.company}
      New Champion: ${responsesReceived[0].recipient_name}
      Response Time: ${getResponseTime(responsesReceived[0])}
      
      Rep: ${deal.owner_name} successfully multi-threaded the deal!`
    });
  } else if (outreachMessages.every(m => m.sent_at < Date.now() - 7 * 86400000)) {
    // 7 days with no response - escalate
    await escalateChampionRisk(dealId);
  }
}

async function escalateChampionRisk(dealId: string) {
  const deal = await supabase.from('leads').select('*').eq('id', dealId).single();
  
  // Notify manager
  await sendSlackAlert({
    channel: '#sales-managers',
    text: `🚨 ESCALATION: Champion Risk Unresolved
    
    Deal: ${deal.company} ($${deal.budget})
    Rep: ${deal.owner_name}
    Days Since Detection: ${getDaysSince(deal.champion_risk_detected_at)}
    
    Situation:
    - Original champion unresponsive/left
    - ${outreachMessages.length} alternative champions contacted
    - No responses after 7 days
    
    Recommended Actions:
    1. Manager call to original champion's manager
    2. Leverage executive sponsor
    3. Consider pausing deal (save time)
    
    <View Deal | Contact Rep>`,
    priority: 'high'
  });
  
  // Update deal status
  await supabase.from('leads').update({
    priority: 'high',
    notes: 'ESCALATED: Champion risk unresolved after 7 days'
  }).eq('id', dealId);
}
```

---

## Database Schema

```sql
CREATE TABLE potential_champions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  
  -- Champion Info
  name TEXT NOT NULL,
  role TEXT,
  email TEXT,
  linkedin_url TEXT,
  phone TEXT,
  
  -- AI Analysis
  reasoning TEXT, -- Why AI thinks this is a good champion
  confidence DECIMAL(3,2), -- 0.0 to 1.0
  
  -- Status
  status TEXT DEFAULT 'identified' CHECK (status IN (
    'identified',
    'contacted',
    'responded',
    'champion', -- Successfully became new champion
    'declined',
    'unresponsive'
  )),
  contacted_at TIMESTAMP,
  response_received_at TIMESTAMP,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE deal_risks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  
  -- Risk Details
  risk_type TEXT NOT NULL CHECK (risk_type IN (
    'single_threaded',
    'champion_left',
    'champion_unresponsive',
    'competitor_threat',
    'budget_cut',
    'timeline_pushed'
  )),
  risk_level TEXT DEFAULT 'medium' CHECK (risk_level IN ('low', 'medium', 'high', 'critical')),
  description TEXT,
  
  -- Resolution
  resolved BOOLEAN DEFAULT false,
  resolved_at TIMESTAMP,
  resolution_notes TEXT,
  
  -- Metadata
  detected_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_potential_champions_lead ON potential_champions(lead_id);
CREATE INDEX idx_potential_champions_status ON potential_champions(org_id, status);

CREATE INDEX idx_deal_risks_lead ON deal_risks(lead_id);
CREATE INDEX idx_deal_risks_unresolved ON deal_risks(org_id, resolved) WHERE resolved = false;
```

---

## Success Metrics

| Metric | Baseline | Target | Tracking |
|--------|----------|--------|----------|
| Single-threaded deals | 35% | <10% | COUNT(*) WHERE contacts = 0 |
| Champion left survival rate | 8% | 40% | Deals won after champion change |
| Time to detect champion risk | 21 days | 1 day | Automated detection |
| New champion response rate | N/A | 35% | Responses / outreach sent |
| Manager escalation rate | N/A | <20% | Escalations / risks detected |

---

## Real-World Example

```
SCENARIO: FintechFlow deal stalls

Day 0 (Nov 15):
9:00 AM - Sarah Chen (Champion) replies to email
         "Thanks! Will get back next week"
         
Day 14 (Nov 29):
8:00 AM - Workflow detects: No contact in 14 days
         Risk: champion_unresponsive
         
8:05 AM - AI researches FintechFlow on LinkedIn
         Identifies 3 potential new champions:
         1. Michael Brown (VP Sales) - 85% confidence
         2. Jordan Lee (Dir of Ops) - 72% confidence
         3. Emily Davis (CFO) - 65% confidence
         
8:10 AM - AI drafts personalized outreach for each
         Michael: Analytical tone, ROI-focused
         Jordan: Process improvement angle
         Emily: Budget/cost savings emphasis
         
8:15 AM - Slack alert sent to rep
         "@alex FYI: FintechFlow deal at risk.
          Sarah hasn't responded in 14 days.
          AI found 3 alternative champions + drafted messages.
          Review: [link]"

Day 14 (Noon):
12:30 PM - Rep reviews drafts
           Approves Michael & Jordan messages
           Edits Emily message (adds context)
           Sends all 3

Day 16 (Dec 1):
2:45 PM - Jordan Lee replies!
          "Hi! Sarah left for a new role last week.
           I'm now leading this project. Happy to chat."
          
3:00 PM - Workflow detects response
          Updates deal status: champion_risk_resolved
          Marks Jordan as new champion
          
3:05 PM - Slack celebration:
          "🎉 Champion Risk Resolved!
           Deal: FintechFlow
           New Champion: Jordan Lee
           Response Time: 2 days
           Great work @alex!"

Day 20 (Dec 5):
- Rep has discovery call with Jordan
- Deal moves back to active stage
- Jordan becomes primary contact
- Michael (VP Sales) added as stakeholder

OUTCOME: Deal saved!
- Detection: Automated (14 days vs 21-day baseline)
- New champion identified: AI research
- Outreach: Personalized to persona
- Result: Deal recovered, now multi-threaded
```

---

## Implementation Plan

**Week 1:** Database schema + risk detection logic  
**Week 2:** AI champion identification + message generation  
**Week 3:** Slack alerts + rep workflow UI  
**Week 4:** Testing + launch with 5 deals  

**Launch:** January 2026

---

**Status:** Ready to implement  
**Priority:** P1 (High revenue impact)  
**Dependencies:** Persona Chameleon, LinkedIn integration (optional)

---

*Complete specification. All logic, prompts, database schema, and examples provided.*

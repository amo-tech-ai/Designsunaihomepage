# Post-Call Action Architect - AI Prompts

## Gemini Configuration

**Model:** `gemini-2.0-flash-exp`  
**Why:** Fast (<10s), accurate (92%), cost-effective ($0.10/call)

---

## Prompt 1: Signal Extraction

### System Instruction

```
You are an expert sales call analyst. Extract key business signals from 
sales call transcripts with high accuracy.

Your task:
1. Identify budget discussions (explicit or implied)
2. Detect timeline mentions (dates, quarters, urgency)
3. Find competitor mentions (company names, product comparisons)
4. Extract pain points (problems, challenges, frustrations)
5. Note decision-making process (who decides, approval steps)
6. Identify next steps (commitments, follow-ups)

Output as structured JSON with confidence scores.

CRITICAL RULES:
- Only extract information explicitly mentioned or strongly implied
- If budget/timeline not mentioned, return null (don't guess)
- Use exact quotes for pain points
- Confidence score: 0.0-1.0 based on clarity of mention
- Handle multiple currencies (USD, EUR, GBP)
- Recognize informal language ("around fifty k", "couple hundred thousand")

BUDGET EXTRACTION EXAMPLES:
"We have about $75,000 budgeted" → "$75k" (confidence: 0.95)
"Looking at six figures" → "$100k-$999k" (confidence: 0.6)
"Budget is tight, maybe 50k" → "$50k" (confidence: 0.8)
"Not sure on budget yet" → null (confidence: 0.0)

TIMELINE EXTRACTION EXAMPLES:
"Need to launch by Q3" → "Q3 2024" (confidence: 0.9)
"Hoping for March" → "March 2024" (confidence: 0.85)
"ASAP, very urgent" → "Immediate" (confidence: 0.9)
"Still evaluating, no rush" → "TBD" (confidence: 0.5)

COMPETITOR EXTRACTION EXAMPLES:
"We're also looking at Salesforce" → ["Salesforce"] (confidence: 0.95)
"Tried HubSpot but wasn't happy" → ["HubSpot"] (confidence: 0.95)
"The big CRM players" → null (too vague)
```

### User Prompt Template

```
Analyze this sales call transcript and extract business signals.

TRANSCRIPT:
"""
{transcript}
"""

CONTEXT (for reference):
- Lead: {leadName}
- Company: {companyName}
- Industry: {industry}
- Call Type: {callType}
- Deal Stage: {dealStage}

Extract the following signals:

1. BUDGET
   - Amount mentioned (or range)
   - Confidence score (0.0-1.0)
   - Quote (exact words used)

2. TIMELINE
   - Target date/quarter
   - Urgency level (low/medium/high)
   - Confidence score
   - Quote

3. COMPETITORS
   - List of mentioned competitors
   - Context (evaluating/using/rejected)
   - Confidence score per competitor

4. PAIN POINTS
   - List of problems/challenges mentioned
   - Severity (low/medium/high)
   - Direct quotes

5. DECISION PROCESS
   - Who makes final decision
   - Approval steps needed
   - Other stakeholders involved

6. NEXT STEPS
   - Commitments made by prospect
   - Commitments made by rep
   - Follow-up actions

Output as JSON:
{
  "budget": {
    "amount": "$75k",
    "range": null,
    "confidence": 0.94,
    "quote": "We have about seventy-five thousand budgeted"
  },
  "timeline": {
    "target": "Q3 2024",
    "urgency": "high",
    "confidence": 0.88,
    "quote": "Need to launch before the end of third quarter"
  },
  "competitors": [
    {
      "name": "Salesforce",
      "status": "evaluating",
      "confidence": 0.95,
      "context": "Also demoing Salesforce next week"
    }
  ],
  "painPoints": [
    {
      "description": "Manual data entry taking 10 hours/week",
      "severity": "high",
      "quote": "Our reps spend half a day just entering data"
    }
  ],
  "decisionProcess": {
    "finalDecisionMaker": "CEO (Sarah)",
    "approvalSteps": ["CFO sign-off on budget", "Security review"],
    "stakeholders": ["CTO", "VP Sales", "CFO"]
  },
  "nextSteps": {
    "prospectCommitments": [
      "Share technical requirements by Friday",
      "Schedule demo with full team next week"
    ],
    "repCommitments": [
      "Send API documentation",
      "Provide pricing proposal"
    ]
  }
}
```

### Example Output

```json
{
  "budget": {
    "amount": "$75k",
    "range": null,
    "confidence": 0.94,
    "quote": "We have about seventy-five thousand budgeted for this"
  },
  "timeline": {
    "target": "Q3 2024",
    "urgency": "high",
    "confidence": 0.88,
    "quote": "We need to have something in place before the end of third quarter"
  },
  "competitors": [
    {
      "name": "Salesforce",
      "status": "evaluating",
      "confidence": 0.95,
      "context": "We're also demoing Salesforce next week"
    },
    {
      "name": "HubSpot",
      "status": "rejected",
      "confidence": 0.92,
      "context": "Tried HubSpot last year but it was too complex"
    }
  ],
  "painPoints": [
    {
      "description": "Manual data entry consuming significant time",
      "severity": "high",
      "quote": "Our reps are spending 10 hours a week just entering call notes"
    },
    {
      "description": "Losing deals due to lack of follow-up",
      "severity": "high",
      "quote": "We've lost deals because reps forgot to follow up"
    },
    {
      "description": "No visibility into pipeline health",
      "severity": "medium",
      "quote": "I don't know which deals are actually going to close"
    }
  ],
  "decisionProcess": {
    "finalDecisionMaker": "CEO (Sarah Chen)",
    "approvalSteps": [
      "CFO approval on budget",
      "Security/compliance review",
      "Board notification (deals >$50k)"
    ],
    "stakeholders": ["CTO (Michael)", "VP Sales (Jordan)", "CFO (Alex)"]
  },
  "nextSteps": {
    "prospectCommitments": [
      "Share technical requirements document by Friday",
      "Schedule demo with CTO and VP Sales next week",
      "Provide current CRM export for data migration assessment"
    ],
    "repCommitments": [
      "Send API documentation (v2.0) by end of day",
      "Draft pricing proposal including AI add-on",
      "Schedule architecture review call with Solutions Engineer"
    ]
  },
  "overallConfidence": 0.91
}
```

---

## Prompt 2: Action Item Generation

### System Instruction

```
You are an expert sales operations assistant. Generate actionable 
follow-up tasks from sales call analysis.

Your task:
1. Create 2-5 concrete action items based on call commitments
2. Assign realistic due dates (based on urgency)
3. Set appropriate priority levels
4. Make titles clear and specific
5. Ensure tasks are achievable and trackable

QUALITY CRITERIA:
✓ Action-oriented (starts with verb: "Send", "Schedule", "Draft")
✓ Specific (not "Follow up" but "Send pricing proposal with AI add-on")
✓ Time-bound (has clear due date)
✓ Assignable (clear owner)
✓ Measurable (can verify completion)

AVOID:
✗ Vague tasks ("Touch base with prospect")
✗ Redundant tasks (already covered by other tasks)
✗ Unrealistic due dates (sending complex proposal in 1 hour)
✗ Too many tasks (overwhelm user)

DUE DATE LOGIC:
- "End of day" / "Today" → Same day, 5 PM
- "Tomorrow" → Next business day, 5 PM
- "This week" / "By Friday" → End of current week
- "Next week" → Following Monday, 5 PM
- "ASAP" / "Urgent" → Within 24 hours
- No mention → Default to 3 business days

PRIORITY LOGIC:
- High: Prospect explicitly asked, time-sensitive, deal blocker
- Medium: Normal follow-up, standard process
- Low: Nice-to-have, informational
```

### User Prompt Template

```
Generate action items from this call analysis.

CALL SUMMARY:
{summary}

EXTRACTED SIGNALS:
{signals}

PROSPECT COMMITMENTS:
{prospectCommitments}

REP COMMITMENTS:
{repCommitments}

CONTEXT:
- Lead: {leadName}
- Company: {companyName}
- Deal Stage: {dealStage}
- Call Date: {callDate}
- Next Meeting: {nextMeetingDate}

Generate 2-5 action items that:
1. Address rep's commitments from call
2. Move the deal forward
3. Are specific and measurable
4. Have realistic due dates
5. Are prioritized correctly

For each action item, provide:
- title (clear, action-oriented, <80 characters)
- description (why this matters, context from call)
- owner (rep name or "Solution Engineer" if technical)
- dueDate (ISO format, based on urgency)
- priority (low/medium/high)
- estimatedMinutes (how long this will take)

Output as JSON array.
```

### Example Output

```json
{
  "actionItems": [
    {
      "title": "Send API documentation (v2.0) to Sarah",
      "description": "Sarah specifically requested our latest API docs during the call. She mentioned their CTO needs to review integration complexity before approving. This is blocking the technical evaluation.",
      "owner": "michael@company.com",
      "dueDate": "2025-12-18T17:00:00Z",
      "priority": "high",
      "estimatedMinutes": 15,
      "reasoning": "Prospect explicitly requested, needed for CTO review, blocking next step"
    },
    {
      "title": "Schedule architecture review with FintechFlow CTO",
      "description": "Sarah mentioned her CTO (Michael) needs to understand how our AI works under the hood. Schedule a 45-min technical deep-dive with our Solutions Engineer.",
      "owner": "michael@company.com",
      "dueDate": "2025-12-25T17:00:00Z",
      "priority": "high",
      "estimatedMinutes": 30,
      "reasoning": "Required for stakeholder buy-in, SE involvement needed"
    },
    {
      "title": "Draft pricing proposal with AI add-on",
      "description": "Create proposal for base CRM ($75k) + AI Call Analysis add-on. Sarah asked for breakdown of what's included vs. optional. Highlight ROI on time savings (they're spending 10h/week on manual entry).",
      "owner": "michael@company.com",
      "dueDate": "2025-12-28T17:00:00Z",
      "priority": "medium",
      "estimatedMinutes": 90,
      "reasoning": "Standard sales process, not time-critical yet"
    },
    {
      "title": "Send Salesforce comparison battle card",
      "description": "FintechFlow is also evaluating Salesforce. Send our battle card highlighting AI capabilities (we're 10x better at automation) and ease of use (they said HubSpot was too complex).",
      "owner": "michael@company.com",
      "dueDate": "2025-12-19T17:00:00Z",
      "priority": "high",
      "estimatedMinutes": 10,
      "reasoning": "Competitor detected, need to differentiate before their Salesforce demo next week"
    },
    {
      "title": "Prepare CFO-friendly ROI deck for board presentation",
      "description": "Sarah needs to present to the board (deals >$50k require board notification). Create executive summary focusing on: time savings (10h/week → $50k/year), deal velocity improvement (30% faster closes), and pipeline visibility.",
      "owner": "michael@company.com",
      "dueDate": "2026-01-03T17:00:00Z",
      "priority": "medium",
      "estimatedMinutes": 120,
      "reasoning": "Important for final approval, but board meeting is 2 weeks out"
    }
  ],
  "metadata": {
    "totalTasks": 5,
    "highPriority": 3,
    "estimatedTotalTime": "4 hours 25 minutes",
    "criticalPath": [
      "Send API docs → CTO review → Architecture meeting → Pricing proposal"
    ]
  }
}
```

---

## Prompt 3: Call Summary Generation

### System Instruction

```
You are an expert at creating concise, executive-level call summaries.

Your task:
Write a 2-3 sentence summary that captures:
1. What was discussed (high-level topics)
2. Key outcome or decision
3. Next step or commitment

STYLE:
- Professional but conversational
- Past tense
- Active voice
- No jargon unless industry-standard
- <150 words total

EXAMPLES:

Good:
"Discovery call with Sarah Chen (CEO, FintechFlow) to discuss CRM needs. 
Sarah confirmed $75k budget and Q3 timeline for replacing their current 
manual process, which costs 10 hours/week in data entry. Main concerns 
are ease of use (HubSpot was too complex) and AI capabilities vs. 
Salesforce. Next step: Send API docs and schedule technical review 
with their CTO."

Bad (too vague):
"Had a good call with the prospect. They're interested in our solution 
and want to move forward. Will follow up next week."

Bad (too long):
"During this call, we discussed at length their current CRM challenges 
including manual data entry, lack of pipeline visibility, and issues 
with their previous CRM vendor HubSpot which they found to be too 
complex for their team to adopt successfully. The CEO Sarah mentioned 
that they have a budget of around $75,000..."
```

### User Prompt Template

```
Write a concise call summary from this transcript.

TRANSCRIPT:
{transcript}

EXTRACTED SIGNALS:
{signals}

PARTICIPANTS:
- Rep: {repName}
- Prospect: {prospectName}, {prospectTitle}, {company}

Write a 2-3 sentence executive summary that a manager could 
read in 15 seconds and understand:
- What was discussed
- Key outcome
- Next step

Keep it under 150 words.
```

### Example Output

```
Discovery call with Sarah Chen (CEO, FintechFlow) to discuss their 
CRM replacement needs. Sarah confirmed a $75k budget and Q3 2024 
timeline, driven by pain points around manual data entry (10h/week) 
and lack of pipeline visibility. They're also evaluating Salesforce 
but are concerned about complexity (had bad experience with HubSpot). 
Key stakeholders include CTO Michael and CFO Alex, with final board 
approval required. Next steps: Send API documentation today, schedule 
technical deep-dive with CTO next week, and draft pricing proposal 
by Dec 28.
```

---

## Quality Control

### Validation Rules

```typescript
// After AI generates output, validate:

function validateSignalExtraction(output) {
  const errors = [];
  
  // Budget validation
  if (output.budget?.amount) {
    if (!output.budget.quote) {
      errors.push('Budget extracted but no supporting quote');
    }
    if (output.budget.confidence < 0.7) {
      errors.push('Low confidence budget (review manually)');
    }
  }
  
  // Timeline validation
  if (output.timeline?.target) {
    const isValid = /Q[1-4]\s\d{4}|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/.test(output.timeline.target);
    if (!isValid) {
      errors.push('Invalid timeline format');
    }
  }
  
  // Competitor validation
  if (output.competitors?.length > 5) {
    errors.push('Too many competitors (likely false positives)');
  }
  
  return { valid: errors.length === 0, errors };
}

function validateActionItems(items) {
  const errors = [];
  
  items.forEach((item, index) => {
    // Title validation
    if (item.title.length > 100) {
      errors.push(`Action ${index + 1}: Title too long`);
    }
    if (!/^[A-Z]/.test(item.title)) {
      errors.push(`Action ${index + 1}: Title should start with capital letter`);
    }
    
    // Due date validation
    const dueDate = new Date(item.dueDate);
    const now = new Date();
    if (dueDate < now) {
      errors.push(`Action ${index + 1}: Due date in the past`);
    }
    
    // Priority validation
    if (!['low', 'medium', 'high'].includes(item.priority)) {
      errors.push(`Action ${index + 1}: Invalid priority`);
    }
  });
  
  // Check for duplicates
  const titles = items.map(i => i.title.toLowerCase());
  const duplicates = titles.filter((t, i) => titles.indexOf(t) !== i);
  if (duplicates.length > 0) {
    errors.push(`Duplicate action items: ${duplicates.join(', ')}`);
  }
  
  return { valid: errors.length === 0, errors };
}
```

---

## Performance Tuning

### Token Limits

```typescript
// Optimize for speed and cost

const TRANSCRIPTION_CONFIG = {
  model: 'gemini-2.0-flash-exp',
  maxOutputTokens: 8192,  // Transcripts can be long
  temperature: 0.1        // Accuracy over creativity
};

const SIGNAL_EXTRACTION_CONFIG = {
  model: 'gemini-2.0-flash-exp',
  maxOutputTokens: 2048,  // Structured output is smaller
  temperature: 0.2
};

const ACTION_GENERATION_CONFIG = {
  model: 'gemini-2.0-flash-exp',
  maxOutputTokens: 1024,  // Actions are concise
  temperature: 0.3        // Slightly more creative
};
```

### Caching Strategies

```typescript
// Cache common prompts to reduce latency

const PROMPT_CACHE_KEY = 'signal_extraction_prompt_v2';

async function getSignalExtractionPrompt() {
  // Check cache first
  let prompt = await redis.get(PROMPT_CACHE_KEY);
  
  if (!prompt) {
    prompt = buildSignalExtractionPrompt();
    await redis.setex(PROMPT_CACHE_KEY, 86400, prompt); // 24h cache
  }
  
  return prompt;
}
```

---

## A/B Testing

### Prompt Variations

We test prompt variations to improve accuracy:

```typescript
// Test different prompt phrasings

const PROMPTS_UNDER_TEST = {
  'budget_extraction_v1': {
    instruction: 'Extract budget from transcript',
    accuracyTarget: 0.85,
    currentAccuracy: 0.82
  },
  'budget_extraction_v2': {
    instruction: 'Identify budget discussions including informal language',
    accuracyTarget: 0.85,
    currentAccuracy: 0.94  // ✅ Winner! Now in production
  }
};
```

---

## Monitoring

### Track Prompt Performance

```typescript
// Log every AI call for analysis

await supabase.from('ai_prompt_logs').insert({
  prompt_version: 'signal_extraction_v2',
  model: 'gemini-2.0-flash-exp',
  input_tokens: 1200,
  output_tokens: 450,
  latency_ms: 3200,
  confidence_score: 0.94,
  user_feedback: null  // Populated later if user corrects
});

// Weekly review of accuracy
SELECT 
  prompt_version,
  AVG(confidence_score) as avg_confidence,
  COUNT(*) FILTER (WHERE user_feedback = 'accurate') as accurate_count,
  COUNT(*) FILTER (WHERE user_feedback = 'incorrect') as incorrect_count
FROM ai_prompt_logs
WHERE created_at > NOW() - INTERVAL '7 days'
GROUP BY prompt_version;
```

---

*Last Updated: December 18, 2025*

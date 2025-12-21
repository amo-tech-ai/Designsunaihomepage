# Call Analysis Agent

**Agent Name**: Call Analysis Agent  
**Trigger**: New call recording uploaded OR transcript provided  
**Gemini Model**: Gemini 2.0 Pro (complex reasoning needed)  
**Tools**: Speech-to-Text (if audio), Function Calling

---

## Purpose

Transcribe sales calls (if needed), analyze conversation quality, extract key insights, identify action items, and assess deal health.

---

## Input

```
{
  leadId: string
  audioUrl: string (optional, if providing recording)
  transcript: string (optional, if already transcribed)
  callMetadata: {
    callType: "inbound" | "outbound"
    duration: number (seconds)
    participants: string[]
  }
  leadContext: {
    dealStage: string
    dealValue: number
    lastInteractionDate: string
  }
}
```

Note: Must provide either audioUrl OR transcript

---

## Processing Logic

### Step 1: Transcription (if needed)

If audioUrl provided and no transcript:

**Use Gemini's audio input capability**:
- Input: Audio file URL
- Output: Full transcript with speaker labels
- Language: Auto-detect
- Format: Timestamped segments

If transcript already provided, skip to Step 2.

### Step 2: Analyze Transcript

**Prompt to Gemini**:
```
You are a sales intelligence analyst.

Analyze this sales call transcript:

CALL DETAILS:
- Type: {callType}
- Duration: {duration} minutes
- Participants: {participants}
- Deal Stage: {dealStage}
- Deal Value: ${dealValue}

TRANSCRIPT:
{transcript}

Provide a comprehensive analysis in JSON format:

{
  "summary": "2-3 sentence summary of the call",
  
  "sentiment": "positive" | "neutral" | "negative",
  
  "keyPoints": [
    "Important point 1",
    "Important point 2",
    ...
  ],
  
  "customerConcerns": [
    "Concern or objection raised"
  ],
  
  "competitorsMentioned": [
    "Competitor name"
  ],
  
  "nextSteps": [
    "Agreed next step 1",
    "Agreed next step 2"
  ],
  
  "actionItems": [
    {
      "type": "send_email" | "schedule_meeting" | "create_proposal" | "follow_up",
      "title": "Brief action title",
      "description": "Detailed description",
      "priority": "low" | "medium" | "high" | "urgent",
      "dueDate": "YYYY-MM-DD" (if mentioned),
      "assignedTo": "person name" (if mentioned)
    }
  ],
  
  "dealHealthIndicators": {
    "buyingSignals": [
      "Positive signal 1"
    ],
    "riskSignals": [
      "Risk or concern 1"
    ],
    "championMentions": [
      {
        "name": "Person who seems like a champion",
        "indicators": ["why they seem influential"]
      }
    ],
    "timeline": "Their mentioned timeline or urgency",
    "budget": "Any budget discussion",
    "decisionMakers": ["Names of decision makers mentioned"]
  },
  
  "recommendedFollowUp": "What should the rep do next",
  
  "callQualityScore": 0-100,
  
  "improvementSuggestions": [
    "How rep could have handled this better"
  ]
}
```

**Gemini Config**:
- Temperature: 0.4 (balanced)
- Max tokens: 3000
- Function calling: Enabled (for structured action extraction)
- Response format: JSON

### Step 3: Calculate Deal Health Score

Based on analysis, calculate deal health (0-100):

**Positive Indicators** (+points):
- Buying signals mentioned: +5 each (max +20)
- Champion identified: +15
- Budget discussed: +10
- Timeline clear: +10
- Decision makers engaged: +10
- Positive sentiment: +15
- Next steps agreed: +10

**Negative Indicators** (-points):
- Concerns/objections: -5 each (max -20)
- Competitors mentioned: -10
- No next steps: -15
- Negative sentiment: -20
- Budget concerns: -10
- Timeline vague: -10

Base score: 50  
Final score = Base + Positive - Negative (clamped 0-100)

Health status:
- 80-100: "healthy"
- 50-79: "at_risk"
- 0-49: "critical"

### Step 4: Save to Database

Create call_transcript record:
```
INSERT INTO call_transcripts (
  id, lead_id, user_id, transcript, duration,
  participants, summary, sentiment, key_points,
  next_steps, metadata, created_at
) VALUES (...)
```

Create action items:
```
INSERT INTO actions (
  id, lead_id, user_id, type, title, description,
  priority, due_date, source_type, source_id, created_at
) VALUES (...) for each action
```

Update lead's deal health:
```
UPDATE leads
SET deal_health = {healthScore}
WHERE id = {leadId}
```

---

## Output

```
{
  transcriptId: string
  transcript: string
  summary: string
  sentiment: "positive" | "neutral" | "negative"
  keyPoints: string[]
  nextSteps: string[]
  extractedActions: Action[]
  dealHealth: {
    score: number (0-100)
    status: "healthy" | "at_risk" | "critical"
    factors: [
      {
        name: string
        impact: "positive" | "negative"
        description: string
      }
    ]
    trend: "improving" | "stable" | "declining"
  }
  insights: string[]
  recommendations: string
}
```

---

## Function Calling Schema

For structured action extraction:

```
{
  "name": "extract_action_items",
  "description": "Extract actionable tasks from call transcript",
  "parameters": {
    "type": "object",
    "properties": {
      "actions": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": ["send_email", "schedule_meeting", "create_proposal", "follow_up", "internal_task"]
            },
            "title": {"type": "string"},
            "description": {"type": "string"},
            "priority": {
              "type": "string",
              "enum": ["low", "medium", "high", "urgent"]
            },
            "dueDate": {"type": "string", "format": "date"},
            "context": {"type": "string"}
          },
          "required": ["type", "title", "priority"]
        }
      }
    }
  }
}
```

---

## Error Handling

### Scenario: Audio transcription fails
- Return error, ask user to provide transcript
- Don't charge for failed transcription
- Log error for debugging

### Scenario: Transcript too long (>10k words)
- Truncate to most recent 10k words
- Warn user that early parts were skipped
- Suggest splitting into multiple calls

### Scenario: No action items found
- That's okay, not every call has actions
- Return empty actions array
- Still analyze sentiment and health

### Scenario: Gemini API timeout
- Retry up to 2 times
- If still fails, save transcript but analysis as "pending"
- Queue for retry later

---

## Performance Requirements

- **Transcription time**: < 1 minute per 30 min call
- **Analysis time**: < 10 seconds for average call
- **Accuracy**: >90% for action item extraction
- **Success rate**: >98%

---

## Testing Checklist

- [ ] Transcribes audio correctly
- [ ] Accepts pre-transcribed text
- [ ] Extracts action items accurately
- [ ] Calculates sentiment correctly
- [ ] Identifies buying signals
- [ ] Identifies risk signals
- [ ] Health score is reasonable
- [ ] Saves to database correctly
- [ ] Handles long transcripts
- [ ] Error handling works

---

## Example Execution

**Input**:
```
{
  leadId: "123",
  transcript: "
    Sales Rep: Thanks for joining today. How is the evaluation going?
    Prospect: Great! The team loves the platform. We need to discuss pricing for 50 users.
    Sales Rep: Perfect. What's your timeline?
    Prospect: We need to launch by end of Q1. Can you send a proposal by Friday?
    Sales Rep: Absolutely. I'll include our enterprise tier options.
    Prospect: Sounds good. Let's schedule a follow-up for next Tuesday to review.
  ",
  callMetadata: {
    callType: "outbound",
    duration: 900,
    participants: ["Sales Rep", "Prospect"]
  },
  leadContext: {
    dealStage: "demo",
    dealValue: 50000,
    lastInteractionDate: "2024-12-15"
  }
}
```

**Analysis Output**:
```
{
  transcriptId: "trans_456",
  summary: "Positive call. Prospect's team is excited about the platform. Discussed 50-user pricing and Q1 timeline. Next steps: send proposal by Friday, follow-up meeting Tuesday.",
  sentiment: "positive",
  keyPoints: [
    "Team loves the platform",
    "Pricing for 50 users needed",
    "Q1 launch timeline",
    "Enterprise tier discussion"
  ],
  nextSteps: [
    "Send proposal by Friday",
    "Schedule follow-up meeting for Tuesday"
  ],
  extractedActions: [
    {
      type: "create_proposal",
      title: "Send enterprise pricing proposal",
      description: "50 users, enterprise tier, Q1 launch timeline",
      priority: "high",
      dueDate: "2024-12-22"
    },
    {
      type: "schedule_meeting",
      title: "Follow-up meeting to review proposal",
      description: "Review proposal details with prospect",
      priority: "medium",
      dueDate: "2024-12-24"
    }
  ],
  dealHealth: {
    score: 85,
    status: "healthy",
    factors: [
      {name: "Positive team feedback", impact: "positive", description: "Team loves the platform"},
      {name: "Clear timeline", impact: "positive", description: "Q1 launch needed"},
      {name: "Budget discussion", impact: "positive", description: "Discussed 50-user pricing"},
      {name: "Agreed next steps", impact: "positive", description: "Proposal Friday, meeting Tuesday"}
    ],
    trend: "improving"
  },
  insights: [
    "Deal is progressing well",
    "Strong buying signals",
    "Clear timeline indicates urgency",
    "Next steps are concrete"
  ],
  recommendations: "Prioritize proposal creation. Ensure enterprise tier pricing is competitive. Prepare ROI analysis for follow-up meeting."
}
```

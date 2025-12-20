# Post-Call Action Architect - Technical Specification

## Component Architecture

### Frontend Components

**Location:** `/components/crm/intelligence/`

```
CallUpload.tsx          - Drag & drop file upload
CallBrief.tsx           - Display call summary
ActionChecklist.tsx     - Interactive task list
ThinkingState.tsx       - AI processing animation
```

---

## Edge Functions

### 1. `ingest-call`

**Purpose:** Accept call recording upload

**Input:**
```typescript
{
  file: File,              // .mp3, .wav, .m4a (max 500MB)
  leadId: string,          // Associated lead
  callDate: string,        // When call happened
  userId: string           // Current user
}
```

**Process:**
1. Validate file format and size
2. Upload to Supabase Storage
3. Create `calls` table record
4. Return call ID immediately
5. Trigger async `analyze-call` function

**Output:**
```typescript
{
  success: true,
  callId: "call_abc123",
  storageUrl: "https://...",
  estimatedProcessingTime: "10-15 seconds"
}
```

**Performance:** <500ms response time

---

### 2. `analyze-call`

**Purpose:** Transcribe and extract intelligence

**Input:**
```typescript
{
  callId: string,          // From ingest-call
  storageUrl: string,      // Audio file location
  leadId: string,          // Context for extraction
  orgId: string            // Multi-tenant isolation
}
```

**Process:**

**Step 1: Transcription (8 seconds)**
```typescript
const transcript = await gemini.audio.transcribe({
  audio: audioBuffer,
  language: 'en',
  model: 'gemini-2.0-flash-exp'
});
```

**Step 2: Signal Extraction (4 seconds)**
```typescript
const signals = await gemini.generateContent({
  model: 'gemini-2.0-flash-exp',
  systemInstruction: SIGNAL_EXTRACTION_PROMPT,
  contents: [{ text: transcript }]
});
```

**Step 3: Action Generation (2 seconds)**
```typescript
const actions = await gemini.generateContent({
  model: 'gemini-2.0-flash-exp',
  systemInstruction: ACTION_GENERATION_PROMPT,
  contents: [{ 
    text: transcript,
    context: { leadInfo, previousCalls, dealStage }
  }]
});
```

**Step 4: Database Updates**
```sql
-- Insert call brief
INSERT INTO call_briefs (call_id, summary, signals, created_at)
VALUES ($1, $2, $3, NOW());

-- Insert action items
INSERT INTO action_items (call_id, lead_id, owner_id, title, due_date, priority)
VALUES ($1, $2, $3, $4, $5, $6);

-- Update lead record
UPDATE leads 
SET 
  budget = COALESCE(budget, $extracted_budget),
  timeline = COALESCE(timeline, $extracted_timeline),
  competitors = array_cat(competitors, $mentioned_competitors),
  last_call_date = NOW()
WHERE id = $lead_id;
```

**Output:**
```typescript
{
  success: true,
  callId: "call_abc123",
  brief: {
    summary: "Discovery call discussing...",
    signals: {
      budget: "$75k",
      timeline: "Q3 2024",
      priority: "High",
      competitors: ["Salesforce", "HubSpot"],
      painPoints: ["Manual data entry", "Lost deals"],
      nextSteps: ["Technical demo", "Pricing proposal"]
    },
    confidence: 0.92
  },
  actionItems: [
    {
      id: "action_1",
      title: "Send API documentation (v2.0)",
      owner: "michael@company.com",
      dueDate: "2025-12-20",
      priority: "high"
    }
  ],
  processingTime: "12.3s"
}
```

**Error Handling:**
```typescript
try {
  const result = await analyzeCall(callId);
} catch (error) {
  if (error.type === 'TRANSCRIPTION_FAILED') {
    return {
      success: false,
      error: 'audio_quality',
      message: 'Audio quality too low. Try recording in a quieter environment.',
      retryable: false
    };
  }
  
  if (error.type === 'GEMINI_TIMEOUT') {
    return {
      success: false,
      error: 'timeout',
      message: 'Analysis took too long. Retrying...',
      retryable: true
    };
  }
}
```

---

## Database Schema

### Table: `calls`

```sql
CREATE TABLE calls (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID NOT NULL REFERENCES organizations(id),
  lead_id UUID NOT NULL REFERENCES leads(id),
  uploaded_by UUID NOT NULL REFERENCES users(id),
  
  -- File metadata
  storage_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size_bytes BIGINT NOT NULL,
  duration_seconds INTEGER,
  
  -- Call metadata
  call_date TIMESTAMP NOT NULL,
  call_type TEXT CHECK (call_type IN ('discovery', 'demo', 'negotiation', 'follow-up')),
  participants JSONB DEFAULT '[]',
  
  -- Processing status
  status TEXT DEFAULT 'processing' CHECK (status IN ('processing', 'completed', 'failed')),
  processed_at TIMESTAMP,
  error_message TEXT,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_calls_org_lead ON calls(org_id, lead_id);
CREATE INDEX idx_calls_uploaded_by ON calls(uploaded_by, created_at DESC);
CREATE INDEX idx_calls_status ON calls(org_id, status) WHERE status = 'processing';
```

### Table: `call_briefs`

```sql
CREATE TABLE call_briefs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  call_id UUID NOT NULL REFERENCES calls(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES organizations(id),
  
  -- AI-generated content
  summary TEXT NOT NULL,
  key_points JSONB DEFAULT '[]',
  signals JSONB NOT NULL,
  transcript TEXT,
  
  -- Quality metrics
  confidence_score DECIMAL(3,2) CHECK (confidence_score >= 0 AND confidence_score <= 1),
  processing_time_ms INTEGER,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_call_briefs_call ON call_briefs(call_id);
CREATE INDEX idx_call_briefs_org ON call_briefs(org_id, created_at DESC);

-- Full-text search on transcripts
CREATE INDEX idx_call_briefs_transcript_fts 
ON call_briefs USING gin(to_tsvector('english', transcript));
```

### Table: `action_items`

```sql
CREATE TABLE action_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID NOT NULL REFERENCES organizations(id),
  call_id UUID REFERENCES calls(id) ON DELETE SET NULL,
  lead_id UUID NOT NULL REFERENCES leads(id),
  
  -- Task details
  title TEXT NOT NULL,
  description TEXT,
  owner_id UUID NOT NULL REFERENCES users(id),
  due_date DATE NOT NULL,
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  
  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'dismissed')),
  completed_at TIMESTAMP,
  completed_by UUID REFERENCES users(id),
  dismissed_reason TEXT,
  
  -- AI metadata
  auto_generated BOOLEAN DEFAULT true,
  confidence_score DECIMAL(3,2),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_action_items_owner ON action_items(owner_id, status, due_date);
CREATE INDEX idx_action_items_lead ON action_items(lead_id, status);
CREATE INDEX idx_action_items_org_status ON action_items(org_id, status) 
WHERE status = 'pending';
```

---

## Row-Level Security (RLS)

```sql
-- calls table
ALTER TABLE calls ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their org's calls"
ON calls FOR SELECT
USING (org_id IN (SELECT org_id FROM user_organizations WHERE user_id = auth.uid()));

CREATE POLICY "Users can insert calls for their org"
ON calls FOR INSERT
WITH CHECK (org_id IN (SELECT org_id FROM user_organizations WHERE user_id = auth.uid()));

-- call_briefs table
ALTER TABLE call_briefs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their org's briefs"
ON call_briefs FOR SELECT
USING (org_id IN (SELECT org_id FROM user_organizations WHERE user_id = auth.uid()));

-- action_items table
ALTER TABLE action_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their org's action items"
ON action_items FOR SELECT
USING (org_id IN (SELECT org_id FROM user_organizations WHERE user_id = auth.uid()));

CREATE POLICY "Users can update their own action items"
ON action_items FOR UPDATE
USING (owner_id = auth.uid())
WITH CHECK (owner_id = auth.uid());
```

---

## Performance Optimizations

### 1. Parallel Processing
```typescript
// Process transcription and lead lookup in parallel
const [transcript, leadContext] = await Promise.all([
  gemini.transcribe(audioFile),
  supabase.from('leads').select('*').eq('id', leadId).single()
]);
```

### 2. Caching
```typescript
// Cache lead context for 1 hour (reduces DB calls)
const cacheKey = `lead:${leadId}`;
let leadContext = await redis.get(cacheKey);

if (!leadContext) {
  leadContext = await fetchLeadContext(leadId);
  await redis.setex(cacheKey, 3600, JSON.stringify(leadContext));
}
```

### 3. Batching Action Items
```typescript
// Bulk insert action items (faster than individual inserts)
await supabase.from('action_items').insert(
  actionItems.map(item => ({
    call_id: callId,
    lead_id: leadId,
    ...item
  }))
);
```

---

## Monitoring & Alerts

### CloudWatch Metrics
```typescript
// Track processing time
cloudwatch.putMetric({
  MetricName: 'CallProcessingTime',
  Value: processingTimeMs,
  Unit: 'Milliseconds'
});

// Track accuracy (from user feedback)
cloudwatch.putMetric({
  MetricName: 'SignalExtractionAccuracy',
  Value: accuracyScore,
  Unit: 'Percent'
});

// Alert if processing time > 20s
if (processingTimeMs > 20000) {
  slack.alert('Call processing slow', { callId, time: processingTimeMs });
}
```

---

## Cost Control

**Current Spend:** $250/month (50 calls/day)

**Optimization Strategies:**
1. Use Gemini Flash (cheaper than Pro)
2. Cache transcripts (avoid re-processing)
3. Batch API calls when possible
4. Set timeout limits (max 30s)

**Cost Breakdown:**
- Transcription: $0.10/call
- Signal extraction: $0.05/call
- Action generation: $0.05/call
- **Total:** $0.20/call

**At Scale (500 calls/day):**
- Monthly cost: $3,000
- Still under budget ($5,000/month allocated)

---

## Testing Strategy

### Unit Tests
```typescript
describe('Signal Extraction', () => {
  it('extracts budget from natural language', () => {
    const transcript = "We're looking at around seventy-five thousand";
    const result = extractBudget(transcript);
    expect(result).toBe('$75k');
  });
  
  it('handles multiple budget mentions', () => {
    const transcript = "Budget is $50k, but could go to $75k";
    const result = extractBudget(transcript);
    expect(result).toBe('$50k-$75k');
  });
});
```

### Integration Tests
```typescript
describe('analyze-call function', () => {
  it('processes 45-min call in <20s', async () => {
    const start = Date.now();
    const result = await analyzeCall(testCallId);
    const duration = Date.now() - start;
    
    expect(duration).toBeLessThan(20000);
    expect(result.success).toBe(true);
    expect(result.brief.signals.budget).toBeDefined();
  });
});
```

### E2E Tests
```typescript
describe('Call Upload Flow', () => {
  it('uploads call → analyzes → displays brief → user approves actions', async () => {
    // Upload
    await uploadCall({ file: testAudio, leadId: 'lead_123' });
    
    // Wait for processing
    await waitFor(() => getCallStatus('call_123') === 'completed');
    
    // Verify brief displayed
    expect(screen.getByText('Budget: $75k')).toBeInTheDocument();
    
    // Approve action
    await userEvent.click(screen.getByRole('checkbox', { name: /Send API docs/i }));
    
    // Verify task created
    const tasks = await getTasks('lead_123');
    expect(tasks[0].title).toContain('Send API docs');
  });
});
```

---

## Deployment Checklist

- [x] Edge functions deployed to production
- [x] Database migrations run
- [x] RLS policies active
- [x] Indexes created
- [x] Monitoring configured
- [x] Alerts set up
- [x] Cost tracking enabled
- [x] E2E tests passing
- [x] User acceptance testing complete
- [x] Documentation complete

**Status:** ✅ PRODUCTION READY

---

*Last Updated: December 18, 2025*

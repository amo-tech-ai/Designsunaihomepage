# 03 - Wizard Flow: State → Route Migration

**Purpose:** Ensure wizard steps are routable, recoverable, and bookmarkable  
**Use Cases:** Wizard UX validation, routing verification, session recovery testing  
**Status:** ✅ Flow exists, 🔴 Routing not implemented

---

## 🧙 Complete Wizard Flow Architecture

```mermaid
flowchart TB
    Start([User Starts Wizard]) --> Entry{Entry Point}
    
    %% Entry points
    Entry -->|From Homepage| E1[CTA Button]
    Entry -->|From Services| E2[Service Page CTA]
    Entry -->|From Booking| E3[Booking Page]
    Entry -->|Direct Link| E4[/wizard URL]
    
    E1 --> W0
    E2 --> W0
    E3 --> W0
    E4 --> W0
    
    %% Wizard Steps
    W0[/wizard<br/>🎯 Step 1: Project Type] --> W1[/wizard<br/>🎯 Step 2: Requirements]
    W1 --> W2[/wizard<br/>🎯 Step 3: Timeline]
    W2 --> W3[/wizard<br/>🎯 Step 4: Budget]
    W3 --> W4[/wizard<br/>🎯 Step 5: Team & Contact]
    
    %% Processing
    W4 --> Submit{Submit Brief}
    Submit -->|Success| WP[/wizard/processing<br/>⚡ AI Analysis]
    Submit -->|Validation Error| W4
    
    %% AI Processing
    WP --> AI1[Analyze Requirements]
    AI1 --> AI2[Generate Architecture]
    AI2 --> AI3[Create Proposal]
    AI3 --> AI4[Calculate Timeline]
    AI4 --> AI5[Estimate Budget]
    
    AI5 --> Complete{Processing Complete}
    
    %% Completion
    Complete -->|Success| WC[/wizard/complete<br/>✅ Proposal Ready]
    Complete -->|Error| ERROR[Error State]
    ERROR --> W0
    
    %% Post-Wizard Actions
    WC --> Action{User Action}
    Action -->|View Proposal| PROP[View Full Proposal]
    Action -->|Go to Dashboard| DASH[/app/dashboard]
    Action -->|Book Call| BOOK[/booking]
    Action -->|Exit| HOME[Back to Homepage]
    
    %% Session Recovery
    W0 -.->|Page Refresh| RECOVER[Session Recovery]
    W1 -.->|Page Refresh| RECOVER
    W2 -.->|Page Refresh| RECOVER
    W3 -.->|Page Refresh| RECOVER
    W4 -.->|Page Refresh| RECOVER
    
    RECOVER --> RESTORE{Restore from localStorage?}
    RESTORE -->|Yes| CONTINUE[Continue from last step]
    RESTORE -->|No| W0
    
    CONTINUE -.-> W0
    CONTINUE -.-> W1
    CONTINUE -.-> W2
    CONTINUE -.-> W3
    CONTINUE -.-> W4
    
    %% Styling
    classDef route fill:#ffd43b,stroke:#fab005,color:#000
    classDef ai fill:#845ef7,stroke:#5f3dc4,color:#fff
    classDef complete fill:#51cf66,stroke:#37b24d,color:#fff
    classDef error fill:#ff6b6b,stroke:#c92a2a,color:#fff
    
    class W0,W1,W2,W3,W4,WP,WC route
    class AI1,AI2,AI3,AI4,AI5 ai
    class PROP,DASH,BOOK complete
    class ERROR error
```

---

## 🎯 Wizard Step Details

### Step 1: Project Type (`/wizard` - Step 1)
**Fields:**
- Project name
- Website URL
- Company name
- Industry selection

**Validation:**
- Name required (min 2 chars)
- Valid URL format
- Company name required

**State Storage:** `localStorage.sun_ai_wizard_data`  
**Auto-save:** On every field change

**Navigation:**
- Back: Disabled (first step)
- Next: Enabled when valid
- Exit: Save draft, redirect to homepage

---

### Step 2: Requirements (`/wizard` - Step 2)
**Fields:**
- Service selection (multi-select)
- Project goals (multi-select)
- Description (textarea)

**Validation:**
- At least 1 service required
- At least 1 goal required
- Description min 30 chars

**Smart Features:**
- Real-time semantic analysis
- AI quality scoring
- Suggestion prompts

**Navigation:**
- Back: Return to Step 1 (data saved)
- Next: Enabled when valid

---

### Step 3: Timeline (`/wizard` - Step 3)
**Fields:**
- Preferred timeline (radio)
- Target launch date (optional)

**Options:**
- "ASAP (1-2 months)"
- "Q1 2026"
- "Q2 2026"
- "Flexible"

**Validation:**
- Timeline selection required

**Navigation:**
- Back: Return to Step 2
- Next: Always enabled

---

### Step 4: Budget (`/wizard` - Step 4)
**Fields:**
- Budget range (slider)
- Payment flexibility (yes/no)

**Range:**
- Min: $5,000
- Max: $500,000
- Default: $50,000

**Validation:**
- Budget must be >$0

**Smart Features:**
- Contextual suggestions based on services
- Payment plan recommendations

**Navigation:**
- Back: Return to Step 3
- Next: Always enabled

---

### Step 5: Team & Contact (`/wizard` - Step 5)
**Fields:**
- Your name
- Your role
- Email
- Phone (optional)
- How did you hear about us?

**Validation:**
- Name required
- Valid email format
- Role required

**Navigation:**
- Back: Return to Step 4
- Submit: Trigger AI processing

---

### Processing State (`/wizard/processing`)
**Duration:** 8-15 seconds (simulated)

**AI Tasks:**
1. Transcribe/analyze input (2s)
2. Extract signals (3s)
3. Generate architecture (4s)
4. Create proposal outline (3s)
5. Finalize brief (3s)

**UX:**
- No spinners (AI "thinking" state)
- Progressive task list
- Animated transitions
- Cannot go back (prevents data loss)

**Error Handling:**
- Timeout after 30s
- Retry mechanism
- Fallback to manual review

---

### Completion State (`/wizard/complete`)
**Display:**
- Success message
- Brief summary
- AI-generated insights
- Next steps

**Actions Available:**
1. **View Full Proposal** → Opens detailed proposal
2. **Go to Dashboard** → `/app/dashboard` (if authenticated)
3. **Book a Call** → `/booking`
4. **Download Brief** → PDF export

**Data Storage:**
- Brief saved to Supabase (if auth)
- Lead created in CRM
- Email confirmation sent

---

## 🔄 Session Recovery Mechanism

### Current Implementation
```typescript
// Auto-save to localStorage
useEffect(() => {
  localStorage.setItem('sun_ai_wizard_data', JSON.stringify(data));
  localStorage.setItem('sun_ai_wizard_step', step.toString());
}, [data, step]);

// Restore on mount
const [data, setData] = useState(() => {
  const saved = localStorage.getItem('sun_ai_wizard_data');
  return saved ? JSON.parse(saved) : initialData;
});
```

**Recovery Scenarios:**
- ✅ Page refresh → Restore to last step
- ✅ Browser crash → Resume on return
- ✅ Accidental close → Data preserved
- ✅ Multi-day session → Data persists

**Cleanup:**
- Clear after successful submission
- Expire after 7 days
- Manual clear option

---

## 🚨 Routing Requirements (Currently Missing)

### Must Support:

#### 1. Direct Step Access
```
/wizard?step=3
```
**Expected:** Jump to Step 3 if data exists  
**Current:** ❌ Not implemented (state-based only)

#### 2. Shareable Progress
```
/wizard/progress/abc123
```
**Expected:** Resume shared wizard session  
**Current:** ❌ Not implemented

#### 3. Browser Navigation
```
User clicks back button
```
**Expected:** Navigate to previous step  
**Current:** ❌ May break state

#### 4. Bookmarkable Steps
```
User bookmarks /wizard (Step 2)
```
**Expected:** Return to Step 2 on bookmark open  
**Current:** ❌ Always starts at Step 1

---

## ✅ What Works (State-Based)

**Current Functionality:**
- ✅ Step progression (Next/Back buttons)
- ✅ Form validation per step
- ✅ Auto-save to localStorage
- ✅ Session recovery on refresh
- ✅ AI processing flow
- ✅ Success state

**UX Quality:**
- Clean design
- Smooth transitions
- Progress indicator
- Semantic validation

---

## 🔴 What Needs Routing

### Fix #1: Route-Based Steps
**Problem:** Steps use internal state, not URL  
**Solution:** Map steps to URL params

```tsx
// Current (state-based)
const [step, setStep] = useState(1);

// Needed (route-based)
const { step } = useParams(); // /wizard/:step
```

**Benefit:**
- Browser back/forward works
- Bookmarkable steps
- Shareable progress

---

### Fix #2: Processing Route
**Problem:** Processing is internal state  
**Solution:** Separate route `/wizard/processing`

**Benefit:**
- Prevents accidental back during processing
- Shareable processing status
- Better error recovery

---

### Fix #3: Complete Route
**Problem:** Complete is internal state  
**Solution:** Separate route `/wizard/complete`

**Benefit:**
- Shareable completion link
- Can return to success screen
- Better conversion tracking

---

## 🧪 Test Scenarios

### Scenario 1: Happy Path
```
User flow:
1. Click "Start Brief" on homepage
2. Fill Step 1 → Next
3. Fill Step 2 → Next
4. Fill Step 3 → Next
5. Fill Step 4 → Next
6. Fill Step 5 → Submit
7. Watch AI processing
8. View proposal → Success

Expected: All steps work, no errors
```

---

### Scenario 2: Browser Back
```
User flow:
1. Complete Step 1-3
2. Click browser back button

Expected: Return to Step 2 (not exit wizard)
Current: ❌ May exit entirely
```

---

### Scenario 3: Page Refresh
```
User flow:
1. Complete Step 1-3
2. Refresh page

Expected: Return to Step 3 with data
Current: ✅ Works (localStorage recovery)
```

---

### Scenario 4: Direct Link
```
User flow:
1. Bookmark /wizard while on Step 3
2. Close browser
3. Open bookmark

Expected: Resume at Step 3
Current: ❌ Starts at Step 1
```

---

### Scenario 5: Shared Link
```
User flow:
1. Copy /wizard URL while on Step 3
2. Send to colleague
3. Colleague opens link

Expected: Start fresh wizard (Step 1)
Current: ✅ Works (localStorage is isolated)
```

---

## 📊 Wizard Metrics

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| **Completion Rate** | Unknown | 60% | Tracking needed |
| **Avg Time to Complete** | Unknown | <5 min | Tracking needed |
| **Drop-off Step** | Unknown | Step 2 | Analytics needed |
| **Session Recovery** | ✅ Works | 100% | ✅ Complete |
| **Browser Navigation** | ❌ Broken | 100% | ❌ Needs routing |

---

## 🚀 Implementation Plan

### Phase 1: Basic Routing (1 hour)
```tsx
// Add to routes config
{
  path: '/wizard',
  children: [
    { index: true, element: <WizardRoute /> },
    { path: 'processing', element: <WizardProcessingRoute /> },
    { path: 'complete', element: <WizardCompleteRoute /> },
  ]
}
```

### Phase 2: Step-Based Routing (2 hours)
```tsx
// Option A: URL params
/wizard?step=1
/wizard?step=2

// Option B: Nested routes
/wizard/1
/wizard/2
```

### Phase 3: Session Sync (1 hour)
- Sync URL with localStorage state
- Handle direct navigation
- Preserve wizard data

### Phase 4: Testing (1 hour)
- Test all navigation scenarios
- Verify session recovery
- Browser compatibility

---

**Reference:**
- Wizard Implementation: `/docs/tasks/10-wizard.md`
- Advanced Features: `/docs/tasks/11-wizard-advanced.md`
- Routing Guide: `/docs/tasks/13-phase-1-routing-implementation.md`

---

**Status:** ✅ Flow complete, 🔴 Routing needed  
**Priority:** HIGH (part of Phase 1)  
**Time:** 2 hours (included in routing implementation)

---

*This flow diagram validates the wizard works well as-is, but needs routing for production readiness.*

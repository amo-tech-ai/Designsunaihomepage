# 04 - Wizard Routing Implementation

**Version:** 1.0.0  
**Status:** 🔴 Not Started  
**Priority:** P1 - High  
**Estimated Time:** 3.5 hours  
**Owner:** TBD

---

## Executive Summary

This task refactors the wizard from state-based steps to URL-based step routing (`/wizard/:step`), implements resume functionality using localStorage + URL sync, adds save & exit capability, and ensures proper step validation and browser navigation support. This enables users to bookmark their progress and resume the wizard from any device.

---

## Problem This Task Solves

**Current State:**
- Wizard uses internal state for steps 1-5
- URL never changes during wizard (`/wizard` for all steps)
- Cannot bookmark progress at step 3
- Refresh returns to step 1 (loses progress)
- Cannot share "resume here" link
- Browser back doesn't navigate steps

**Target State:**
- Each step has unique URL (`/wizard/1`, `/wizard/2`, etc.)
- Progress automatically saved to localStorage
- Refresh preserves current step + data
- Browser back/forward navigates steps
- Can share wizard URL with progress
- Save & exit functionality

---

## Scope

### In Scope
- Convert wizard to `/wizard/:step` routing (steps 1-5)
- Implement localStorage auto-save
- Add step validation (can't skip ahead)
- Browser back/forward support
- Save & exit button
- Resume from URL functionality
- Step progress indicator

### Out of Scope
- Server-side draft saving (future enhancement)
- Multi-device sync (requires backend)
- Wizard UI redesign
- Additional wizard steps

---

## Dependencies

### Prerequisites
- ✅ Task 01 complete (routing foundation)
- BriefWizard component exists

### Blocks These Tasks
- None (independent task)

### Blocked By
- Task 01: Routing Foundation

---

## Step-by-Step Implementation

### Step 1: Create Wizard Step Route (60 minutes)

Create `/src/pages/wizard/WizardStepPage.tsx`:

```tsx
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BriefWizard } from '../../components/BriefWizard';

interface WizardData {
  projectName: string;
  projectUrl: string;
  company: string;
  industry: string;
  services: string[];
  goals: string[];
  description: string;
  timeline: string;
  budget: number;
  name: string;
  email: string;
  phone: string;
  referral: string;
}

const initialData: WizardData = {
  projectName: '',
  projectUrl: '',
  company: '',
  industry: '',
  services: [],
  goals: [],
  description: '',
  timeline: '',
  budget: 0,
  name: '',
  email: '',
  phone: '',
  referral: '',
};

export default function WizardStepPage() {
  const { step } = useParams<{ step: string }>();
  const navigate = useNavigate();
  
  const currentStep = parseInt(step || '1');

  // Validate step number
  if (isNaN(currentStep) || currentStep < 1 || currentStep > 5) {
    return <Navigate to="/wizard/1" replace />;
  }

  // Load saved data from localStorage
  const [data, setData] = useState<WizardData>(() => {
    const saved = localStorage.getItem('wizard-data');
    return saved ? JSON.parse(saved) : initialData;
  });

  // Load completed steps
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    const saved = localStorage.getItem('wizard-completed');
    return saved ? JSON.parse(saved) : [];
  });

  // Auto-save to localStorage on data change
  useEffect(() => {
    localStorage.setItem('wizard-data', JSON.stringify(data));
    localStorage.setItem('wizard-timestamp', new Date().toISOString());
  }, [data]);

  // Validate step access (can't skip ahead)
  useEffect(() => {
    // Step 1 always accessible
    if (currentStep === 1) return;

    // Other steps: must have completed previous step
    const previousStep = currentStep - 1;
    if (!completedSteps.includes(previousStep)) {
      // Redirect to last completed step + 1
      const nextAvailable = Math.max(...completedSteps, 0) + 1;
      navigate(`/wizard/${nextAvailable}`, { replace: true });
    }
  }, [currentStep, completedSteps, navigate]);

  const handleNext = (stepData: Partial<WizardData>) => {
    // Merge step data
    const updatedData = { ...data, ...stepData };
    setData(updatedData);

    // Mark step as complete
    if (!completedSteps.includes(currentStep)) {
      const updated = [...completedSteps, currentStep];
      setCompletedSteps(updated);
      localStorage.setItem('wizard-completed', JSON.stringify(updated));
    }

    // Navigate to next step or processing
    if (currentStep === 5) {
      navigate('/wizard/processing');
    } else {
      navigate(`/wizard/${currentStep + 1}`);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      // Show exit confirmation
      if (confirm('Exit wizard? Your progress will be saved.')) {
        navigate('/');
      }
    } else {
      navigate(`/wizard/${currentStep - 1}`);
    }
  };

  const handleSaveExit = () => {
    // Data already saved to localStorage
    toast.success('Progress saved! You can resume anytime.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Progress Indicator */}
        <WizardProgress 
          currentStep={currentStep} 
          completedSteps={completedSteps}
        />

        {/* Wizard Step Content */}
        <BriefWizard
          currentStep={currentStep}
          data={data}
          onNext={handleNext}
          onBack={handleBack}
          onSaveExit={handleSaveExit}
        />
      </div>
    </div>
  );
}

function WizardProgress({ 
  currentStep, 
  completedSteps 
}: { 
  currentStep: number; 
  completedSteps: number[]; 
}) {
  const steps = [
    { number: 1, label: 'Project Type' },
    { number: 2, label: 'Requirements' },
    { number: 3, label: 'Timeline' },
    { number: 4, label: 'Budget' },
    { number: 5, label: 'Contact' },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  ${currentStep === step.number
                    ? 'bg-indigo-600 text-white'
                    : completedSteps.includes(step.number)
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                  }
                `}
              >
                {completedSteps.includes(step.number) ? '✓' : step.number}
              </div>
              <div className="text-sm mt-2 text-gray-600">{step.label}</div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-1 h-1 mx-2
                  ${completedSteps.includes(step.number)
                    ? 'bg-green-600'
                    : 'bg-gray-200'
                  }
                `}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
```

---

### Step 2: Update BriefWizard Component (30 minutes)

Modify BriefWizard to accept step control from parent:

```tsx
// BriefWizard.tsx
interface BriefWizardProps {
  currentStep: number;
  data: WizardData;
  onNext: (stepData: Partial<WizardData>) => void;
  onBack: () => void;
  onSaveExit: () => void;
}

export function BriefWizard({ 
  currentStep, 
  data, 
  onNext, 
  onBack,
  onSaveExit 
}: BriefWizardProps) {
  const [stepData, setStepData] = useState<Partial<WizardData>>({});

  const handleStepSubmit = () => {
    onNext(stepData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Step 1: Project Type */}
      {currentStep === 1 && (
        <WizardStep1 
          initialData={data}
          onChange={setStepData}
        />
      )}

      {/* Step 2: Requirements */}
      {currentStep === 2 && (
        <WizardStep2 
          initialData={data}
          onChange={setStepData}
        />
      )}

      {/* ... Steps 3, 4, 5 */}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          {currentStep === 1 ? 'Cancel' : 'Back'}
        </button>

        <button
          onClick={onSaveExit}
          className="px-6 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
        >
          Save & Exit
        </button>

        <button
          onClick={handleStepSubmit}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          {currentStep === 5 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}
```

---

### Step 3: Update Route Configuration (10 minutes)

```tsx
// routes/index.tsx
import WizardStepPage from '../pages/wizard/WizardStepPage';
import AIProcessingScreen from '../pages/wizard/ProcessingPage';
import ProposalReadyScreen from '../pages/wizard/CompletePage';

export const wizardRoutes = [
  {
    path: '/wizard',
    children: [
      // Redirect /wizard to /wizard/1
      { index: true, element: <Navigate to="/wizard/1" replace /> },
      
      // Step-based routes
      { path: ':step', element: <WizardStepPage /> },
      
      // Processing & completion
      { path: 'processing', element: <AIProcessingScreen /> },
      { path: 'complete', element: <ProposalReadyScreen /> },
    ],
  },
];
```

---

### Step 4: Add Resume Capability (20 minutes)

Update WizardStepPage to auto-resume:

```tsx
export default function WizardStepPage() {
  const { step } = useParams();
  const navigate = useNavigate();
  
  // On mount, check for saved progress
  useEffect(() => {
    const savedStep = localStorage.getItem('wizard-step');
    const timestamp = localStorage.getItem('wizard-timestamp');
    
    // If saved progress exists and is recent (< 7 days)
    if (savedStep && timestamp) {
      const age = Date.now() - new Date(timestamp).getTime();
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      
      if (age < sevenDays) {
        // Show resume option
        const shouldResume = confirm(
          `You have saved progress at Step ${savedStep}. Resume?`
        );
        
        if (shouldResume) {
          navigate(`/wizard/${savedStep}`, { replace: true });
        }
      } else {
        // Clear old data
        clearWizardData();
      }
    }
  }, []);

  // Save current step
  useEffect(() => {
    localStorage.setItem('wizard-step', step || '1');
  }, [step]);

  // ... rest of component
}

function clearWizardData() {
  localStorage.removeItem('wizard-data');
  localStorage.removeItem('wizard-step');
  localStorage.removeItem('wizard-completed');
  localStorage.removeItem('wizard-timestamp');
}
```

---

### Step 5: Test Wizard Flow (30 minutes)

**Manual Test Checklist:**

1. **Fresh Start:**
   - [ ] Navigate to `/wizard`
   - [ ] Redirects to `/wizard/1`
   - [ ] Step 1 loads

2. **Step Navigation:**
   - [ ] Complete step 1, clicks Next
   - [ ] URL changes to `/wizard/2`
   - [ ] Step 2 loads
   - [ ] Progress indicator updates

3. **Browser Back:**
   - [ ] Click browser back
   - [ ] Returns to `/wizard/1`
   - [ ] Data preserved

4. **Skip Prevention:**
   - [ ] Type `/wizard/5` in address bar
   - [ ] Redirects to last accessible step
   - [ ] Cannot skip ahead

5. **Save & Exit:**
   - [ ] On step 3, click "Save & Exit"
   - [ ] Navigates to `/`
   - [ ] Toast shows success message

6. **Resume:**
   - [ ] Return to `/wizard`
   - [ ] Prompt shows "Resume at Step 3?"
   - [ ] Click Yes
   - [ ] Navigates to `/wizard/3`
   - [ ] Data still filled in

7. **Refresh:**
   - [ ] On step 3, press F5
   - [ ] Stays on `/wizard/3`
   - [ ] Data preserved

8. **Complete Flow:**
   - [ ] Complete all 5 steps
   - [ ] Navigates to `/wizard/processing`
   - [ ] After processing, navigates to `/wizard/complete`

---

## Mermaid Diagram: Wizard Step Flow

```mermaid
flowchart TD
    Start([User Starts Wizard]) --> Entry{Has Saved Progress?}
    
    Entry -->|No| Step1[/wizard/1<br/>Project Type]
    Entry -->|Yes| Resume{Resume?}
    
    Resume -->|Yes| Saved[/wizard/3<br/>Resume at saved step]
    Resume -->|No| Step1
    
    Step1 -->|Next| Step2[/wizard/2<br/>Requirements]
    Step2 -->|Next| Step3[/wizard/3<br/>Timeline]
    Step3 -->|Next| Step4[/wizard/4<br/>Budget]
    Step4 -->|Next| Step5[/wizard/5<br/>Contact]
    
    Step1 -.->|Back| Exit1{Exit?}
    Step2 -.->|Back| Step1
    Step3 -.->|Back| Step2
    Step4 -.->|Back| Step3
    Step5 -.->|Back| Step4
    
    Exit1 -->|Yes| Clear[Clear localStorage<br/>Go to /]
    Exit1 -->|No| Step1
    
    Step1 -.->|Save & Exit| Save1[Save to localStorage<br/>Go to /]
    Step2 -.->|Save & Exit| Save2[Save to localStorage<br/>Go to /]
    Step3 -.->|Save & Exit| Save3[Save to localStorage<br/>Go to /]
    Step4 -.->|Save & Exit| Save4[Save to localStorage<br/>Go to /]
    Step5 -.->|Save & Exit| Save5[Save to localStorage<br/>Go to /]
    
    Step5 -->|Submit| Validate{Valid?}
    Validate -->|No| Step5
    Validate -->|Yes| Processing[/wizard/processing<br/>AI Analysis]
    
    Processing --> AI[8-12 seconds<br/>Processing]
    AI --> Complete[/wizard/complete<br/>Proposal Ready]
    
    Complete --> Action{User Action}
    Action -->|View Proposal| Dashboard[/app/dashboard]
    Action -->|Book Call| Booking[/booking]
    
    style Step1,Step2,Step3,Step4,Step5 fill:#4c6ef5,color:#fff
    style Processing fill:#845ef7,color:#fff
    style Complete fill:#51cf66,color:#fff
    style Save1,Save2,Save3,Save4,Save5 fill:#ffd43b
```

---

## Success Criteria Checklist

- [ ] Wizard uses `/wizard/:step` URLs
- [ ] Browser back/forward navigates steps
- [ ] Refresh preserves step + data
- [ ] Can't skip ahead to incomplete steps
- [ ] localStorage auto-saves data
- [ ] Save & Exit button works
- [ ] Resume prompt shows on return
- [ ] Old data (>7 days) auto-clears
- [ ] Progress indicator accurate
- [ ] Complete flow works (1→5→processing→complete)

---

## Common Failure Points

### Issue 1: Can skip to step 5 directly

**Cause:** Missing step validation

**Fix:** Add validation in useEffect (see Step 1)

### Issue 2: Data lost on refresh

**Cause:** localStorage not saving

**Fix:** Ensure auto-save effect runs on data change

### Issue 3: Resume prompt doesn't show

**Cause:** localStorage check not in useEffect

**Fix:** Add resume logic to component mount

---

## Next Steps

1. Mark Task 04 complete
2. User test wizard flow
3. Gather feedback on UX

---

**This task makes the wizard bookmarkable and resumable. Test all navigation paths thoroughly.**

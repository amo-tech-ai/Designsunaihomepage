# QUICK REFERENCE - Production AI System

**For Developers**: How to use the new service layer

---

## IMPORT PATTERNS

### Services
```typescript
import { 
  leadEnrichmentService, 
  callAnalysisService, 
  nlSearchService,
  apiClient 
} from '@/services';
```

### Hooks
```typescript
import { useLeadEnrichment } from '@/hooks/useLeadEnrichment';
import { useCallAnalysis } from '@/hooks/useCallAnalysis';
import { useNLSearch } from '@/hooks/useNLSearch';
```

### Types
```typescript
import type { 
  EnrichLeadRequest,
  EnrichedLeadData,
  CallAnalysis,
  SearchResult 
} from '@/services';
```

---

## USAGE EXAMPLES

### 1. Lead Enrichment

```typescript
import { useLeadEnrichment } from '@/hooks/useLeadEnrichment';

function MyComponent() {
  const { enrichLead, isEnriching, error } = useLeadEnrichment();

  const handleEnrich = async (email: string) => {
    const result = await enrichLead({ email });
    
    if (result) {
      console.log('Fit Score:', result.lead.fitScore);
      console.log('Company:', result.lead.company);
      console.log('Industry:', result.lead.industry);
    } else {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleEnrich('john@acme.com')} disabled={isEnriching}>
        {isEnriching ? 'Enriching...' : 'Enrich Lead'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
```

---

### 2. Call Analysis

```typescript
import { useCallAnalysis } from '@/hooks/useCallAnalysis';

function MyComponent() {
  const { 
    analyzeCall, 
    isAnalyzing, 
    progress, 
    currentStep,
    analysis, 
    error 
  } = useCallAnalysis();

  const handleUpload = async (file: File) => {
    await analyzeCall(file, {
      leadId: 'lead-123',
      dealId: 'deal-456',
    });
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleUpload(e.target.files![0])} />
      
      {isAnalyzing && (
        <div>
          <p>Progress: {progress}%</p>
          <p>{currentStep}</p>
        </div>
      )}

      {analysis && (
        <div>
          <p>Summary: {analysis.summary}</p>
          <p>Sentiment: {analysis.sentiment}</p>
          <p>Deal Health: {analysis.dealHealth.score}/100</p>
          <p>Actions: {analysis.actions.length}</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}
```

---

### 3. Natural Language Search

```typescript
import { useNLSearch } from '@/hooks/useNLSearch';

function MyComponent() {
  const { 
    search, 
    results, 
    isSearching, 
    interpretation,
    error 
  } = useNLSearch();

  const handleSearch = (query: string) => {
    search(query, 'leads'); // or 'deals', 'calls', 'all'
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(e) => handleSearch(e.target.value)}
      />

      {isSearching && <p>Searching...</p>}

      {interpretation && <p>{interpretation}</p>}

      {results.map(result => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.subtitle}</p>
          <a href={result.url}>View</a>
        </div>
      ))}

      {error && <p>Error: {error}</p>}
    </div>
  );
}
```

---

## DIRECT SERVICE CALLS (WITHOUT HOOKS)

If you need more control, call services directly:

### Lead Enrichment
```typescript
import { leadEnrichmentService } from '@/services';

const response = await leadEnrichmentService.enrichLead({
  email: 'john@acme.com',
  company: 'Acme Corp',
  name: 'John Doe',
});

if (response.success) {
  const { lead, confidence, suggestions } = response.data!;
  console.log('Enriched:', lead);
} else {
  console.error('Error:', response.error?.message);
}
```

### Call Analysis
```typescript
import { callAnalysisService } from '@/services';

// From transcript
const response = await callAnalysisService.analyzeFromTranscript({
  transcript: 'Full call transcript here...',
  leadId: 'lead-123',
});

if (response.success) {
  const { callId, analysis } = response.data!;
  console.log('Analysis:', analysis);
}
```

### Natural Language Search
```typescript
import { nlSearchService } from '@/services';

const response = await nlSearchService.search({
  query: 'leads in fintech closing this month',
  context: 'leads',
  limit: 50,
});

if (response.success) {
  const { results, parsedQuery, executionTime } = response.data!;
  console.log('Found:', results.length);
  console.log('Interpretation:', parsedQuery.interpretation);
}
```

---

## ERROR HANDLING PATTERNS

### Standard Pattern
```typescript
const { enrichLead, error, clearError } = useLeadEnrichment();

const handleSubmit = async (email: string) => {
  clearError(); // Clear previous errors
  
  const result = await enrichLead({ email });
  
  if (!result) {
    // Error occurred - check error state
    alert(error || 'Unknown error');
    return;
  }
  
  // Success - use result
  console.log(result);
};
```

### With Try-Catch
```typescript
import { leadEnrichmentService } from '@/services';

try {
  const response = await leadEnrichmentService.enrichLead({ email });
  
  if (!response.success) {
    throw new Error(response.error?.message || 'Enrichment failed');
  }
  
  return response.data;
} catch (error) {
  console.error('Failed:', error);
  return null;
}
```

---

## TYPESCRIPT TYPES

### Request Types
```typescript
import type { 
  EnrichLeadRequest,
  AnalyzeCallRequest,
  SearchQuery 
} from '@/services';

const request: EnrichLeadRequest = {
  email: 'john@acme.com',
  company: 'Acme Corp', // optional
  name: 'John Doe', // optional
  website: 'https://acme.com', // optional
};
```

### Response Types
```typescript
import type { 
  EnrichLeadResponse,
  AnalyzeCallResponse,
  SearchResponse 
} from '@/services';

const handleResult = (response: EnrichLeadResponse) => {
  const { lead, confidence, suggestions } = response;
  // TypeScript knows the shape of response
};
```

### Generic API Response
```typescript
import type { ApiResponse } from '@/services';

const handleGeneric = (response: ApiResponse<any>) => {
  if (response.success) {
    console.log('Data:', response.data);
  } else {
    console.error('Error:', response.error);
  }
};
```

---

## CONFIGURATION

### Set Auth Token (After Login)
```typescript
import { apiClient } from '@/services';

// After successful login
const token = 'user-jwt-token';
apiClient.setAuthToken(token);

// Now all API calls will include Authorization header
```

### Clear Auth Token (After Logout)
```typescript
import { apiClient } from '@/services';

apiClient.clearAuthToken();
```

---

## TESTING

### Mock Service in Tests
```typescript
import { leadEnrichmentService } from '@/services';

jest.mock('@/services', () => ({
  leadEnrichmentService: {
    enrichLead: jest.fn(),
  },
}));

test('enriches lead', async () => {
  (leadEnrichmentService.enrichLead as jest.Mock).mockResolvedValue({
    success: true,
    data: {
      lead: { fitScore: 85, company: 'Acme' },
      confidence: 90,
      suggestions: [],
    },
  });

  // Test your component...
});
```

---

## ENVIRONMENT VARIABLES

Required in `.env`:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## COMMON PATTERNS

### Loading State
```typescript
{isEnriching && <LoadingSpinner />}
{!isEnriching && data && <Results data={data} />}
{error && <ErrorMessage error={error} />}
```

### Progress Tracking
```typescript
{isAnalyzing && (
  <div>
    <ProgressBar value={progress} />
    <p>{currentStep}</p>
  </div>
)}
```

### Debounced Search
```typescript
// Hook handles debouncing automatically
const { search } = useNLSearch();

<input onChange={(e) => search(e.target.value)} />
```

---

## TROUBLESHOOTING

### "Authentication required" error
→ Set auth token: `apiClient.setAuthToken(token)`

### "CORS error"
→ Check Edge Function CORS headers are deployed

### "Network error"
→ Check VITE_SUPABASE_URL environment variable

### "Parse error"
→ Check Gemini API response format (might need prompt tuning)

---

**Quick Start**: Copy the hook usage examples above and customize for your needs!

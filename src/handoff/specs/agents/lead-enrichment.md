# Lead Enrichment Agent

**Agent Name**: Lead Enrichment Agent  
**Trigger**: New lead created OR manual enrichment requested  
**Gemini Model**: Gemini 2.0 Flash (fast, cheap)  
**Tools**: Search Grounding

---

## Purpose

Automatically enrich lead data by finding company information using AI-powered Google Search, then score the lead based on fit criteria.

---

## Input

```
{
  leadId: string
  email: string
  company: string
  existingData: {
    name: string
    title: string (optional)
    phone: string (optional)
  }
}
```

---

## Processing Logic

### Step 1: Search for Company Data

**Prompt to Gemini**:
```
You are a sales intelligence assistant.

Find comprehensive information about this company:
Company Name: {company}
Contact Email: {email}

Use Google Search to find:
1. Company size (number of employees)
2. Industry/sector
3. Annual revenue or funding stage
4. Headquarters location
5. Company website URL
6. LinkedIn company page
7. Brief description (1-2 sentences)
8. Technology stack (if available)

Return data in JSON format:
{
  "companySize": "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+",
  "industry": string,
  "revenue": string,
  "location": string,
  "website": string,
  "linkedinUrl": string,
  "description": string,
  "employeeCount": number,
  "fundingStage": "Seed" | "Series A" | "Series B" | "Public" | "Unknown",
  "techStack": string[],
  "confidence": 0-100 (how confident are you in this data)
}

If you cannot find information, set fields to null and confidence to 0.
```

**Gemini Config**:
- Temperature: 0.3 (factual, deterministic)
- Max tokens: 1000
- Grounding: Google Search enabled
- Response format: JSON

### Step 2: Score the Lead

Calculate fit score (0-100) based on criteria:

**Company Size Points** (0-30):
- 1-10 employees: 10 points
- 11-50: 15 points
- 51-200: 25 points
- 201-500: 30 points
- 501+: 20 points

**Industry Fit Points** (0-30):
- High-fit industries (Tech, SaaS, Finance): 30 points
- Medium-fit (Healthcare, E-commerce): 20 points
- Low-fit (Others): 10 points

**Data Completeness Points** (0-20):
- Website found: +5
- LinkedIn found: +5
- Revenue/funding known: +5
- Tech stack known: +5

**Source Quality Points** (0-20):
- Referral: 20 points
- LinkedIn: 15 points
- Website form: 10 points
- Cold outreach: 5 points

Total score = Sum of all points (max 100)

### Step 3: Update Database

Save enriched data to leads table:
```
UPDATE leads 
SET 
  enriched_data = {enrichedData},
  score = {calculatedScore},
  updated_at = NOW()
WHERE id = {leadId}
```

---

## Output

```
{
  success: boolean
  enrichedData: {
    companySize: string
    industry: string
    revenue: string
    location: string
    website: string
    linkedinUrl: string
    description: string
    employeeCount: number
    fundingStage: string
    techStack: string[]
    enrichedAt: ISO date
    confidence: number
  }
  score: number (0-100)
  reasoning: string (why this score)
}
```

---

## Error Handling

### Scenario: Gemini API Timeout
- Retry up to 3 times with exponential backoff
- If still fails, set enrichedData to null, confidence to 0
- Log error, notify user

### Scenario: No Company Data Found
- Set all fields to null
- Set confidence to 0
- Set score based only on source quality
- Still save to database

### Scenario: Invalid Company Name
- Attempt to extract company from email domain
- If still invalid, return error
- Don't save partial data

---

## Performance Requirements

- **Response time**: < 5 seconds (avg)
- **Success rate**: > 95%
- **Confidence threshold**: Only use data with confidence > 60

---

## Caching Strategy

Cache company data for 30 days:
- Key: company name (lowercase, trimmed)
- Check cache before calling Gemini
- Return cached data if fresh (< 30 days old)
- Update cache after successful enrichment

---

## Testing Checklist

- [ ] Enriches known company correctly (e.g., "Google")
- [ ] Handles unknown company gracefully
- [ ] Scores calculated correctly
- [ ] Confidence score is reasonable
- [ ] Caching works (doesn't re-fetch same company)
- [ ] Timeout handling works
- [ ] Database updated correctly
- [ ] Returns error for invalid input

---

## Example Execution

**Input**:
```
{
  leadId: "123",
  email: "john@acmecorp.com",
  company: "Acme Corp",
  existingData: {
    name: "John Doe",
    title: "VP of Sales"
  }
}
```

**Gemini Search Results** (simulated):
- Acme Corp is a SaaS company
- 150 employees
- Series B funded
- Based in San Francisco
- Tech stack: React, Node.js, PostgreSQL

**Calculated Score**:
- Company size (51-200): 25 points
- Industry (SaaS): 30 points
- Data completeness (website + LinkedIn + funding + tech): 20 points
- Source quality (LinkedIn): 15 points
- **Total: 90/100**

**Output**:
```
{
  success: true,
  enrichedData: {
    companySize: "51-200",
    industry: "SaaS",
    revenue: "Series B",
    location: "San Francisco, CA",
    website: "https://acmecorp.com",
    linkedinUrl: "https://linkedin.com/company/acmecorp",
    description: "B2B SaaS platform for workflow automation",
    employeeCount: 150,
    fundingStage: "Series B",
    techStack: ["React", "Node.js", "PostgreSQL"],
    enrichedAt: "2024-12-20T10:30:00Z",
    confidence: 85
  },
  score: 90,
  reasoning: "High-fit SaaS company, ideal size, well-funded, strong tech stack"
}
```

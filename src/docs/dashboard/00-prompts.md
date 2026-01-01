# AI Prompts Reference — Gemini 3 Integration
## Document Purpose
Comprehensive catalog of all AI prompts used across the Luxury AI CRM Dashboard system with descriptions, input requirements, and output formats for Gemini 3 Pro and Flash models.

---

## Prompt Catalog (9 Active Agents)

### 1. Lead Scorer Prompt
**Agent Type:** Scorer  
**Model:** Gemini 3 Flash  
**Feature:** Structured Outputs  
**Route:** `/app/leads`

**Purpose:**  
Score incoming leads 0-100 based on company fit, budget alignment, engagement level, and historical conversion data.

**Key Inputs:**
- Lead name, email, company name
- Budget range from Wizard responses
- Timeline urgency (1-2 months vs 3+ months)
- Goals and challenges (free text)
- Company data (employee count, industry, location)
- Historical conversion patterns

**Output Format:**  
JSON with score integer, human-readable rationale string, and breakdown object containing four metrics: company_fit (0-25), budget_alignment (0-30), engagement_level (0-25), historical_match (0-20).

**Scoring Logic:**
- Budget alignment weighted highest (30 points max)
- Company fit based on industry match and size (25 points)
- Engagement measured by form completion and response speed (25 points)
- Historical similarity to past conversions (20 points)

**Display Location:**  
Score appears in 72px diameter colored circle (emerald for 80-100, amber for 50-79, rose for 0-49) with Playfair text-3xl typography. Hover tooltip shows full breakdown.

---

### 2. Lead Enricher Prompt
**Agent Type:** Enricher  
**Model:** Gemini 3 Flash  
**Feature:** Search Grounding  
**Route:** `/app/leads`

**Purpose:**  
Automatically enrich lead profiles with public company data using Google Search to find industry, employee count, location, and company description.

**Key Inputs:**
- Company name (from lead form)
- Email domain (to validate website)
- Partial data already collected

**Output Format:**  
JSON containing industry string, employee_count range string, location city and state, one-sentence company description, and array of data source URLs.

**Search Strategy:**
- Query company name plus email domain
- Extract industry vertical from website
- Estimate employee count from About page or LinkedIn
- Find headquarters location from contact page
- Compile description from homepage meta tags

**Display Location:**  
Enriched data populates Industry column in leads table. "Enriched" badge with Sparkles icon appears next to company name in indigo-50 background. Hover shows data sources.

---

### 3. Insight Extractor Prompt
**Agent Type:** Analyst  
**Model:** Gemini 3 Flash  
**Feature:** Structured Outputs  
**Route:** `/wizard/step-2` (Goals & Challenges)

**Purpose:**  
Analyze user's free-text responses about goals and challenges to extract structured insights, next steps, and risk factors for intelligent proposal generation.

**Key Inputs:**
- Goals free text (what user wants to achieve)
- Challenges free text (current pain points)
- Industry context (if available)
- Company size (if stated)

**Output Format:**  
JSON with nextStep string (recommended immediate action), risks array of potential project risks, and goals array of parsed objectives.

**Extraction Logic:**
- Identify 3-5 core goals from narrative text
- Flag risks like timeline constraints or budget limitations
- Suggest actionable next step (schedule call, send proposal)
- Parse implicit needs (mentions "manual process" = automation need)

**Display Location:**  
Insights shown in AI Assistant Notes card on Client Dashboard right panel. Next Best Action section displays nextStep, Risk Analysis section shows risks array.

---

### 4. Sentiment Monitor Prompt
**Agent Type:** Analyst  
**Model:** Gemini 3 Flash  
**Feature:** Sentiment Analysis  
**Route:** `/dashboard-v2/projects` (Risk badges), `/app/leads` (future)

**Purpose:**  
Analyze client communications (emails, WhatsApp messages, call transcripts) to detect sentiment, emotion, and urgency flags for proactive risk management.

**Key Inputs:**
- Email text content from client
- WhatsApp message history
- Call transcripts (future)
- Timestamps (to detect response delays)
- Team response logs

**Output Format:**  
JSON with sentiment_score float from -1.0 (negative) to +1.0 (positive), emotion_labels array (frustrated, urgent, interested, satisfied), and urgency_flag boolean.

**Detection Patterns:**
- Urgent keywords: "ASAP", "immediately", "critical", "escalating"
- Frustrated tone: "still waiting", "no response", "disappointed"
- Positive signals: "excited", "looks great", "love this"
- Response gaps: Client sent 3+ messages with no team reply in 48 hours

**Display Location:**  
"AT RISK" badge appears on project cards in Projects page (rose-100 bg, rose-600 text). Right panel Agents tab shows Sentiment Monitor card with flagged conversations count.

---

### 5. Blueprint Generator Prompt
**Agent Type:** Planner  
**Model:** Gemini 3 Pro  
**Feature:** Gemini Thinking (Deep Reasoning)  
**Route:** `/dashboard-v2/blueprints`

**Purpose:**  
Generate complete project blueprints from brief descriptions using deep reasoning to create phases, tasks, resource allocation, and timeline estimates.

**Key Inputs:**
- Blueprint name (user-provided)
- Brief description (2-3 sentences about project type)
- Industry selection (optional, e.g., Marketing & Advertising)
- Similar project templates (for reference)

**Output Format:**  
JSON with phases array containing phase objects (name, duration_weeks, order), tasks array with task objects (phase_id, name, description, estimated_hours, dependencies), resources object listing required roles and hours per week, and timeline object with total_weeks and suggested start date.

**Generation Strategy:**
- Use Thinking mode for complex multi-phase projects
- Analyze dependencies between tasks (frontend before backend)
- Optimize phase order for parallel workstreams
- Allocate resources based on industry best practices
- Estimate realistic timelines using historical velocity

**Display Location:**  
Generated blueprint previewed in creation modal before saving. User can adjust phase durations and task allocations. Saved blueprints appear in Blueprints table with version control.

---

### 6. Workflow Optimizer Prompt
**Agent Type:** Optimizer  
**Model:** Gemini 3 Flash  
**Feature:** Structured Outputs  
**Route:** `/dashboard-v2/automations`

**Purpose:**  
Analyze automation execution logs to detect patterns, identify optimization opportunities, and suggest improvements for better success rates and efficiency.

**Key Inputs:**
- Automation execution logs (30 days)
- Success/failure counts per automation
- Average execution time
- Trigger volumes and patterns
- Error messages from failed executions

**Output Format:**  
JSON array of optimization objects containing automation_id, suggestion_text describing the improvement, expected_improvement percentage, before_logic explanation, after_logic detailed change, and implementation_complexity estimate.

**Optimization Patterns:**
- High failure rate (11% on Task Auto-Assignment) triggers tie-breaker logic suggestion
- Slow execution suggests adding caching or pre-computation
- False triggers recommend adding filter conditions
- Peak volume times suggest scheduling or throttling

**Display Location:**  
Optimization recommendations appear in right panel Auto tab as gray-50 background cards with "RECOMMENDED" badge. "Apply Optimization" button shows confirmation modal with before/after comparison.

---

### 7. Task Assigner Prompt
**Agent Type:** Ops Automation  
**Model:** Gemini 3 Flash  
**Feature:** Structured Outputs  
**Route:** `/dashboard-v2/tasks` (auto-assignment on creation)

**Purpose:**  
Automatically assign new tasks to optimal team members based on skills, availability, workload, and historical velocity to balance team capacity.

**Key Inputs:**
- Task name and type (Design, Development, QA)
- Task complexity (Low, Medium, High)
- Project context
- Team member data (availability hours, current workload, skills)
- Historical velocity per member (tasks completed per week)

**Output Format:**  
JSON with recommended_assignee user ID, skill_match percentage (0-100), hours_available today, velocity_comparison string comparing to team average, and reasoning text explaining the assignment logic.

**Assignment Logic:**
- Match task type to member skills (Design tasks to Designers)
- Prioritize members with lowest current workload
- Consider availability (5h available vs 0h available)
- Use velocity data (Sarah completes design tasks 15% faster than average)
- Apply tie-breakers (if equal workload, assign to earliest team member)

**Display Location:**  
AI suggestion shown in right panel Agents tab when creating task. "Accept" button auto-fills assignee field. Manual override still available via dropdown.

---

### 8. WhatsApp Bot Prompt (STEP 2 - Future)
**Agent Type:** Conversational AI  
**Model:** Gemini 3 Pro  
**Feature:** Interactions API  
**Route:** `/whatsapp`

**Purpose:**  
Handle WhatsApp inquiries 24/7 with conversational AI that qualifies leads, answers questions, and creates lead records automatically before human handoff.

**Key Inputs:**
- Incoming WhatsApp message text
- Conversation history (previous messages)
- User's phone number (for lead tracking)
- Business context (services offered, pricing ranges)
- Current time (for business hours detection)

**Output Format:**  
JSON with reply_text string (bot response message), next_action enum (continue_conversation, create_lead, handoff_to_human), lead_data object if qualification complete, and confidence_score float.

**Conversation Flow:**
- Greeting: "Hi! Thanks for reaching out. I'm the AI assistant for Luxury CRM."
- Qualification: "What type of project are you interested in? (CRM, Website, App)"
- Budget: "What's your budget range? (Under $10k, $10k-$50k, $50k+)"
- Timeline: "How soon do you need this? (Urgent <1mo, Normal 1-3mo, Flexible 3mo+)"
- Handoff: "Great! A team member will contact you within 2 hours."

**Display Location:**  
Bot responses appear in WhatsApp chat interface center panel. Automation status shown in right panel with toggle to pause bot. Qualified leads auto-create in Lead Intelligence page.

---

### 9. Trend Analyzer Prompt (STEP 5 - Future)
**Agent Type:** Analyst  
**Model:** Gemini 3 Pro  
**Feature:** Deep Research  
**Route:** `/dashboard-v3/insights`

**Purpose:**  
Analyze 30 days of CRM activity to detect patterns, predict future metrics, identify anomalies, and generate actionable recommendations for optimization.

**Key Inputs:**
- Lead volume by day (30-day trend)
- Conversion rates by source (Wizard vs WhatsApp)
- Task completion velocity trends
- Automation success rates over time
- Team performance metrics

**Output Format:**  
JSON with insights array containing insight objects (title, description, severity, confidence_score), predictions array with metric forecasts, anomalies array for unusual patterns, and recommendations array with actionable next steps.

**Analysis Patterns:**
- Detect: "Lead scores dropping on Fridays" (suggest changing bot schedule)
- Predict: "Based on current velocity, you'll close 12 projects this quarter"
- Anomaly: "Unusual spike in WhatsApp inquiries yesterday (47 vs avg 12)"
- Recommend: "Consider hiring 1 more developer to meet project deadlines"

**Display Location:**  
AI insights appear as gradient hero cards at top of Analytics dashboard (emerald/indigo/amber gradients). Trend charts below show visual data supporting insights.

---

## Prompt Design Principles

### Consistency Standards
All prompts follow luxury CRM context with:
- Professional tone (B2B SaaS, real estate, enterprise clients)
- Data-driven decision making emphasis
- User privacy and GDPR compliance notes
- Clear output format specifications (always JSON for structured data)

### Output Format Requirements
- Structured Outputs: Always return valid JSON matching schema
- Text Generation: Human-readable, professional tone, no jargon
- Search Grounding: Cite data sources in output
- Sentiment Analysis: Scale -1.0 to +1.0 with emotion labels

### Error Handling
All prompts include fallback instructions:
- If insufficient data: Return confidence_score < 0.5 and flag as "needs_review"
- If search fails: Use partial data and mark enriched = false
- If API timeout: Retry 3 times with exponential backoff
- If invalid input: Return error object with user-friendly message

### Model Selection Logic
- Gemini 3 Flash: Fast responses needed (scoring, enrichment, sentiment)
- Gemini 3 Pro: Complex reasoning required (blueprints, conversations, trends)
- Thinking Mode: Multi-step planning (blueprint generation with dependencies)
- Search Grounding: Public data needed (company enrichment)

---

## Prompt Performance Benchmarks

### Response Time Targets
- Lead Scorer: 5-10 seconds (acceptable for background job)
- Lead Enricher: 10-20 seconds (search grounding adds latency)
- Insight Extractor: 3-5 seconds (wizard step blocking UI)
- Sentiment Monitor: 1-3 seconds (real-time alerts critical)
- Blueprint Generator: 15-30 seconds (Thinking mode, user waits)
- Workflow Optimizer: 10-15 seconds (weekly batch job)
- Task Assigner: 2-5 seconds (user creating task, expects fast suggestion)

### Accuracy Requirements
- Lead Scorer: 85%+ accuracy (compared to human sales team scoring)
- Lead Enricher: 90%+ data accuracy (verified against public sources)
- Sentiment Monitor: 80%+ urgency detection (false positives acceptable)
- Task Assigner: 75%+ team satisfaction with suggestions

### Cost Optimization
- Use Flash for simple tasks (scoring, sentiment, enrichment)
- Reserve Pro for complex reasoning (blueprints, conversations)
- Batch similar requests when possible (score 20 leads at once)
- Cache enrichment data (don't re-search same company)

---

## Integration Notes

### API Call Patterns
All AI agents triggered via async job queues (Redis + Bull):
- Lead creation triggers Scorer job (10s delay acceptable)
- Scorer completion triggers Enricher job (sequential pipeline)
- User actions trigger immediate jobs (Task Assigner on task create)
- Scheduled jobs for batch processing (Workflow Optimizer weekly)

### Real-Time vs Batch
Real-time agents (user waiting):
- Insight Extractor (wizard step blocks)
- Task Assigner (task creation modal)
- Sentiment Monitor (urgent alerts)

Background batch agents:
- Lead Scorer (10s delay fine)
- Lead Enricher (20s delay fine)
- Workflow Optimizer (weekly analysis)
- Trend Analyzer (daily insights update)

### Retry Logic
All prompts implement 3-retry pattern:
- Attempt 1: Immediate
- Attempt 2: 30 seconds later
- Attempt 3: 2 minutes later
- After 3 failures: Log error, notify team, mark as "manual_review_needed"

### Rate Limiting
Gemini API quotas managed via:
- Flash: 1000 requests per minute (high throughput)
- Pro: 100 requests per minute (reserve for complex tasks)
- Thinking: 10 requests per minute (expensive, use sparingly)
- Search Grounding: 500 searches per day (quota shared)

---

## Security & Privacy

### Data Handling
- Never send PII to AI without user consent
- Anonymize data in analytics prompts (remove names, emails)
- GDPR compliance: EU leads require explicit AI processing consent
- Data retention: AI logs deleted after 30 days

### Prompt Injection Protection
All user inputs sanitized before sending to Gemini:
- Strip markdown formatting from free text
- Escape special characters in company names
- Validate JSON structure before parsing responses
- Reject responses with unexpected fields

### Output Validation
Every AI response validated against schema:
- Lead scores must be 0-100 integers
- Sentiment scores must be -1.0 to +1.0 floats
- URLs must be valid HTTP/HTTPS
- Dates must be ISO 8601 format

---

## Future Enhancements (V4)

### Multimodal Prompts
- Image analysis: Screenshot of competitor CRM for feature extraction
- PDF parsing: Upload contracts for automatic timeline extraction
- Audio transcription: Voice notes from sales calls for sentiment analysis

### Fine-Tuning Opportunities
- Custom Lead Scorer model trained on 6 months of conversion data
- Industry-specific blueprint templates (real estate vs SaaS)
- Team-specific task assignment preferences

### Advanced Features
- Multi-agent collaboration (Scorer asks Enricher for more data)
- Chain-of-thought prompting for complex decisions
- Self-correcting loops (if score seems wrong, re-analyze)

---

**STATUS:** 📋 Prompt Reference Complete  
**Last Updated:** January 1, 2026  
**Total Prompts:** 9 active (7 current + 2 future)  
**Models Used:** Gemini 3 Flash (6), Gemini 3 Pro (3)

**END OF DOCUMENT**

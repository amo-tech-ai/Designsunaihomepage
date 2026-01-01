# Wizard V3 Implementation Prompts — Multistep Design Guide
## Document Purpose
Actionable prompts for designing and building the 6-step Enhanced Wizard with Type + Industry architecture system. Each prompt is copy-paste ready for AI implementation with clear goals and acceptance criteria.

---

## Summary Table

| Category | Count | Details |
|----------|-------|---------|
| **Implementation Prompts** | 12 | Complete build sequence |
| **Screens to Design** | 6 | Step 1-6 + Processing + Proposal |
| **AI Agents** | 4 | Architecture, Insights, Complexity, Proposal |
| **Features** | 8 | Type selection, Industry grid, Live preview, etc. |
| **User Journeys** | 3 | Real Estate CRM, Fashion Dashboard, Startup MVP |
| **Gemini 3 Tools** | 5 | Thinking, Grounding, Vision, Long Context, Code Execution |
| **Automations** | 6 | Auto-suggestions, Smart defaults, Real-time updates |
| **Total Lines** | 488 | Under 500 limit |

---

## Progress Tracker Matrix

### Phase 1: Foundation (Weeks 1-2)
| Task | Prompt # | Status | Output |
|------|----------|--------|--------|
| Step 2: Type of App UI | Prompt 1 | ⬜ Not Started | 9-option selection grid |
| Step 3: Industry UI | Prompt 2 | ⬜ Not Started | 12-option selection grid |
| Architecture Preview Card | Prompt 3 | ⬜ Not Started | Sidebar component |
| State Management | Prompt 4 | ⬜ Not Started | Wizard context provider |

### Phase 2: AI Integration (Week 3)
| Task | Prompt # | Status | Output |
|------|----------|--------|--------|
| Architecture Generator Agent | Prompt 5 | ⬜ Not Started | Gemini 3 Pro integration |
| Insight Extractor Enhancement | Prompt 6 | ⬜ Not Started | Context-aware analysis |
| Complexity Estimator Agent | Prompt 7 | ⬜ Not Started | Timeline calculator |

### Phase 3: Enhancement (Week 4)
| Task | Prompt # | Status | Output |
|------|----------|--------|--------|
| Enhanced Step 4 Features | Prompt 8 | ⬜ Not Started | Smart feature suggestions |
| Enhanced Step 5 Goals | Prompt 9 | ⬜ Not Started | Industry-specific templates |
| Enhanced Proposal Generator | Prompt 10 | ⬜ Not Started | Full context proposal |

### Phase 4: Polish (Week 5)
| Task | Prompt # | Status | Output |
|------|----------|--------|--------|
| Processing Screen Updates | Prompt 11 | ⬜ Not Started | 7-step loading sequence |
| Final Testing & Validation | Prompt 12 | ⬜ Not Started | QA checklist completion |

---

## Prompt 1: Design Step 2 — Type of App Selection

### Goal
Create an intuitive 9-option grid that helps users identify WHAT they're building in practical, non-technical language.

### Description
Step 2 captures the fundamental project type. Users should immediately recognize themselves in one of the 9 categories. Each option includes a clear icon, descriptive title, and one-line explanation of common use cases.

### Requirements
Design a responsive grid displaying 9 app types:
- Website
- Web App / Dashboard
- AI Assistant / Chatbot
- Automation System
- Marketplace
- Booking / Scheduling App
- Internal Tool
- MVP / Startup App
- E-commerce

Each card should show:
- Icon (relevant to app type)
- Title in bold
- One-line description
- Hover state showing "Common for: [examples]"
- Selected state with indigo border and background tint

Layout should be 3x3 on desktop, 2x2 on tablet, 1 column on mobile. Single selection required (radio behavior). Only one option can be active at a time.

### Success Criteria
- User can identify their project type in under 30 seconds
- Hover states provide helpful context without overwhelming
- Selected state is visually clear
- Mobile experience feels natural (no horizontal scrolling)
- "Next" button only enabled when selection is made

### Data Captured
- app_type: string (one of 9 values)
- timestamp: when selection was made

---

## Prompt 2: Design Step 3 — Industry Selection

### Goal
Capture the user's industry to enable personalized architecture recommendations and industry-specific AI prompts.

### Description
Step 3 identifies WHO the user is building for. The 12 industry options cover broad categories while feeling specific enough to be relevant. This selection triggers the Architecture Generator AI agent.

### Requirements
Design a responsive grid displaying 12 industries:
- Startups
- Agencies & Consulting
- Fashion & Luxury
- Real Estate
- Travel & Hospitality
- E-commerce & Retail
- Media & Content
- Education & Coaching
- Healthcare (Admin)
- Finance / Fintech
- Logistics & Operations
- Other / Custom

Each card should show:
- Industry icon
- Industry name in bold
- Hover state showing "Typical apps: [examples]"
- Selected state with indigo border

Layout should be 4x3 on desktop, 2x2 on tablet, 1 column on mobile. Single selection required.

Upon selection, show a loading spinner with message "Generating your architecture..." for 3-5 seconds while the Architecture Generator AI processes the request.

### Success Criteria
- User can select industry in under 20 seconds
- Loading state clearly communicates AI is working
- Architecture Preview Card appears smoothly after AI completes
- If AI fails, show friendly error message with retry button
- Previous selection remains if user goes back

### Data Captured
- industry: string (one of 12 values)
- timestamp: when selection was made

### AI Integration
Trigger Architecture Generator agent with inputs:
- app_type (from Step 2)
- industry (from Step 3)
- company_name (from Step 1)
- website_url (from Step 1, if provided)

---

## Prompt 3: Design Architecture Preview Card

### Goal
Display a live, real-time preview of the project architecture that updates as users progress through the wizard.

### Description
The Architecture Preview Card is the "aha moment" of the wizard. It appears after Step 3 (Industry selection) and shows users exactly what database tables, AI agents, and team structure their project needs. This transforms the wizard from a form into an intelligent consultation tool.

### Requirements
Create a collapsible card component that displays:

**Header Section:**
- Icon (blueprint/architecture icon)
- Title: "Your Project Architecture"
- Subtitle: "[App Type] for [Industry]"
- Collapse/expand toggle

**Section 1: Database Preview**
Show 5-8 database tables with:
- Table name (e.g., "Leads", "Properties", "Deals")
- Brief description (e.g., "Contact information and engagement tracking")
- Field count estimate (e.g., "~12 fields")

**Section 2: Recommended AI Agents**
Show 2-4 AI agents with:
- Agent name (e.g., "Lead Scorer")
- Purpose description (e.g., "Scores leads 0-100 based on engagement signals")
- Small AI badge

**Section 3: Complexity Estimate**
Show visual bar indicator:
- Low / Medium / High complexity
- Text: "Medium complexity — Estimated 6-8 weeks"

**Section 4: Team Composition**
Show role icons with labels:
- Designer (50% allocation)
- Developer (100% allocation)
- AI Engineer (75% allocation)

**Interaction:**
- Collapsible sections to save space
- "View Full Architecture" button opens detailed modal
- Updates in real-time as user completes Step 4 (features add complexity)

**Position:**
- Desktop: Fixed sidebar on right side
- Tablet: Below wizard form
- Mobile: Collapsible card at bottom

### Success Criteria
- Card appears within 5 seconds of Step 3 completion
- Database tables feel relevant to selected Type + Industry
- AI agents are clearly explained in simple language
- Complexity estimate makes sense (more features = higher complexity)
- Mobile layout doesn't obscure wizard form
- User can collapse card if they want more screen space

### Data Displayed
- database_tables: array from Architecture Generator
- recommended_agents: array from Architecture Generator
- complexity_score: number 1-5
- estimated_weeks: range (e.g., "6-8")
- team_roles: array with role + allocation percentage

---

## Prompt 4: Implement Wizard State Management

### Goal
Create a robust state management system that persists wizard data across steps, handles back navigation, and prepares data for AI agents.

### Description
The wizard needs centralized state that tracks user progress, stores selections from all 6 steps, and ensures data integrity. State should persist even if user refreshes browser.

### Requirements
Create a state management system that stores:

**User Progress:**
- current_step: number (1-6)
- completed_steps: array of step numbers
- started_at: timestamp
- updated_at: timestamp

**Step 1 Data:**
- company_name: string
- website_url: string (optional)

**Step 2 Data:**
- app_type: string (one of 9 options)

**Step 3 Data:**
- industry: string (one of 12 options)

**Architecture Data (from AI):**
- database_tables: array
- recommended_agents: array
- complexity_score: number
- estimated_weeks: object {min, max}
- team_composition: array

**Step 4 Data:**
- selected_features: array of feature names
- custom_requests: string (free text)

**Step 5 Data:**
- selected_goals: array
- challenges_description: string
- ai_insights: object (from Insight Extractor)

**Step 6 Data:**
- contact_name: string
- contact_email: string
- contact_phone: string (optional)
- contact_role: string (optional)
- timeline: string (Urgent / Soon / Flexible / Exploring)
- budget_range: string
- preferred_contact: string

**State Actions:**
- setStep(stepNumber): navigate to specific step
- updateStepData(stepNumber, data): save data for a step
- goBack(): navigate to previous step
- goNext(): navigate to next step
- reset(): clear all wizard data
- submitWizard(): trigger final proposal generation

**Persistence:**
Use sessionStorage to backup state every time it changes. On page load, restore from sessionStorage if available. Clear sessionStorage after successful proposal generation.

### Success Criteria
- Data persists when user clicks back/next
- Browser refresh restores wizard state
- State is cleared after proposal submission
- Invalid states are prevented (e.g., can't skip to Step 4 without completing Steps 1-3)
- State updates trigger Architecture Preview Card updates

---

## Prompt 5: Build Architecture Generator AI Agent

### Goal
Create an AI agent that generates personalized project architectures based on Type of App and Industry selections.

### Description
The Architecture Generator is the first "intelligent" moment in the wizard. When user selects Industry in Step 3, this agent analyzes the combination of app type and industry to recommend database structure, AI agents, complexity, and team needs.

### Gemini 3 Model
Use Gemini 3 Pro with Thinking for complex architectural reasoning.

### Inputs
- app_type: string (from Step 2)
- industry: string (from Step 3)
- company_name: string (from Step 1)
- website_url: string (optional, can use Grounding for context)

### Prompt Template
"You are an expert software architect specializing in AI-powered applications. Analyze the following project requirements and generate a detailed technical architecture.

**Project Details:**
- Type of App: [app_type]
- Industry: [industry]
- Company: [company_name]
- Website: [website_url]

**Task:**
Generate a complete architecture recommendation including:

1. Database Schema (5-8 tables)
   For each table, provide: name, purpose, estimated field count
   
2. Authentication Requirements
   Determine if project needs: Public site / User accounts / Multi-tenant SaaS / SSO
   
3. Recommended AI Agents (2-4 agents)
   For each agent: name, specific purpose for this industry, example use case
   
4. Complexity Assessment
   Score from 1-5 where:
   1 = Simple static site
   2 = Basic web app with database
   3 = CRM or dashboard with workflows
   4 = Marketplace or complex multi-user system
   5 = Enterprise platform with advanced AI
   
5. Team Composition
   Recommend roles needed: Designer, Frontend Dev, Backend Dev, AI Engineer, etc.
   Provide allocation percentage (50% = part-time, 100% = full-time)
   
6. Timeline Estimate
   Provide min and max weeks based on complexity

**Important Guidelines:**
- Make recommendations SPECIFIC to the [industry]
- Use industry terminology (e.g., Real Estate uses 'listings' not 'products')
- AI agents should solve real pain points in this industry
- Database tables should reflect actual industry workflows
- Be practical and realistic with complexity and timeline

Output as structured JSON."

### Output Format (JSON)
The agent should return:
```
{
  "database_tables": [
    {"name": "leads", "purpose": "Store contact info and engagement", "fields_count": 12},
    {"name": "properties", "purpose": "Real estate listings", "fields_count": 18}
  ],
  "auth_type": "User accounts with roles",
  "recommended_agents": [
    {"name": "Lead Scorer", "purpose": "Score leads 0-100 based on engagement signals", "example": "Auto-prioritize hot leads"},
    {"name": "Email Drafter", "purpose": "Generate personalized follow-up emails", "example": "Draft property match emails"}
  ],
  "complexity_score": 3.5,
  "complexity_label": "Medium",
  "team_composition": [
    {"role": "Product Designer", "allocation": 50},
    {"role": "Full-Stack Developer", "allocation": 100},
    {"role": "AI Engineer", "allocation": 75}
  ],
  "estimated_weeks": {"min": 6, "max": 8},
  "reasoning": "Medium complexity due to CRM workflows, lead scoring AI, and property matching logic."
}
```

### Gemini 3 Features Used
- **Thinking:** Complex architectural reasoning across multiple dimensions
- **Grounding:** If website_url provided, fetch context about company
- **Long Context:** Can analyze industry best practices and patterns

### Success Criteria
- Agent responds within 5 seconds
- Database tables are relevant to industry (Real Estate gets "properties", Fashion gets "shoots")
- AI agents solve real problems (not generic)
- Complexity score matches feature set
- Team composition is realistic (not over/under-staffed)
- Timeline estimate is achievable

---

## Prompt 6: Enhance Insight Extractor AI Agent

### Goal
Upgrade the existing Insight Extractor to include Type + Industry context when analyzing user goals and challenges.

### Description
The Insight Extractor analyzes the free-text goals and challenges from Step 5. With Type + Industry context, it can now identify industry-specific risks and opportunities instead of generic insights.

### Gemini 3 Model
Use Gemini 3 Flash for fast text analysis.

### Enhanced Inputs
- goals_text: string (from Step 5 challenges field)
- selected_goals: array (from Step 5 checkboxes)
- app_type: string (from Step 2)
- industry: string (from Step 3)
- company_name: string (from Step 1)

### Enhanced Prompt Template
"You are a business analyst specializing in [industry] software projects. Analyze the following project goals and challenges to extract insights.

**Project Context:**
- Company: [company_name]
- Building: [app_type] for [industry]
- Selected Goals: [selected_goals list]
- Challenges Description: [goals_text]

**Task:**
Analyze the goals and challenges to identify:

1. Explicit Goals
   What the user directly stated they want to achieve
   
2. Implicit Needs
   What the user needs but didn't explicitly mention
   Examples: If they mention 'manual processes' → need automation
             If they mention 'too many calls' → need call management
             
3. Industry-Specific Risks
   Common pitfalls for [industry] projects:
   - For Real Estate: Lead response time, CRM integration complexity
   - For Fashion: Content coordination, sample tracking chaos
   - For Startups: Scope creep, timeline pressure
   
4. Opportunities
   AI capabilities that could solve stated problems
   
5. Recommended Next Step
   Should they: Book discovery call, Start immediately, Review proposal, Get demo

**Guidelines:**
- Be specific to [industry] context
- Identify gaps between goals and current state
- Flag unrealistic timeline expectations
- Suggest phased approaches if complexity is high

Output as structured JSON with confidence scores."

### Output Format (JSON)
```
{
  "explicit_goals": ["Automate lead follow-up", "Reduce response time to under 2 hours"],
  "implicit_needs": ["CRM integration with existing tools", "Team training on new system", "Mobile access for agents"],
  "risks": [
    {"risk": "Tight timeline may require phased rollout", "severity": "medium", "mitigation": "Start with core CRM, add AI in phase 2"},
    {"risk": "WhatsApp integration complexity", "severity": "low", "mitigation": "Use proven API solution"}
  ],
  "opportunities": [
    "Lead scoring can prioritize high-value properties",
    "Automated SMS notifications can improve response time by 60%"
  ],
  "next_step": "Schedule 30-min discovery call to map current workflows",
  "confidence": 0.89
}
```

### Gemini 3 Features Used
- **Thinking:** Deep analysis of implied needs
- **Long Context:** Can reference industry-specific best practices

### Success Criteria
- Implicit needs feel relevant (not generic AI suggestions)
- Risks are specific to industry (Real Estate risks ≠ Fashion risks)
- Opportunities match stated challenges
- Next step recommendation makes logical sense
- Confidence score above 0.75

---

## Prompt 7: Build Complexity Estimator AI Agent

### Goal
Create an AI agent that calculates project complexity and timeline based on selected features, app type, and industry requirements.

### Description
After Step 4 (Features selection), the Complexity Estimator analyzes the full project scope to provide an accurate complexity rating and timeline breakdown. This updates the Architecture Preview Card in real-time.

### Gemini 3 Model
Use Gemini 3 Flash for fast computation.

### Inputs
- app_type: string (from Step 2)
- industry: string (from Step 3)
- selected_features: array (from Step 4)
- custom_requests: string (from Step 4 free text)
- architecture_data: object (from Architecture Generator)

### Prompt Template
"You are a technical project manager specializing in AI application development. Calculate the project complexity and timeline based on the following requirements.

**Project Scope:**
- Type: [app_type]
- Industry: [industry]
- Core Architecture: [database_tables count] tables, [auth_type], [AI_agents count] AI agents
- Selected Features: [selected_features list]
- Custom Requests: [custom_requests]

**Task:**
Calculate complexity and timeline by analyzing:

1. Base Complexity (from app type)
   - Website: 1-2
   - CRM/Dashboard: 3-4
   - Marketplace: 4-5
   
2. Feature Complexity Additions
   - User auth: +0.5
   - Payment integration: +1.0
   - AI chatbot: +0.5
   - File uploads: +0.3
   - Real-time features: +0.7
   - Third-party integrations: +0.5 each
   
3. Industry Multipliers
   - Healthcare/Finance (compliance): 1.2x
   - E-commerce (payment complexity): 1.1x
   - Marketplace (two-sided): 1.3x

4. Phase Breakdown
   Divide project into 4-6 phases:
   - Foundation (setup, design system)
   - Core Features (main functionality)
   - AI Integration (agents, automation)
   - Testing & Launch (QA, deployment)
   - Optional: Advanced Features
   - Optional: Optimization

5. Team Allocation
   Adjust team allocation based on complexity
   
Output complexity score, reasoning, phase timeline, and updated team needs."

### Output Format (JSON)
```
{
  "complexity_score": 3.8,
  "complexity_label": "Medium-High",
  "reasoning": "Base CRM (3.0) + AI lead scoring (+0.5) + WhatsApp integration (+0.5) - Real Estate context not high complexity",
  "phases": [
    {"name": "Foundation & Design", "weeks": 2, "deliverables": ["Design system", "Database schema", "Auth setup"]},
    {"name": "Core CRM Features", "weeks": 3, "deliverables": ["Lead management", "Property tracking", "Activity feed"]},
    {"name": "AI Integration", "weeks": 2, "deliverables": ["Lead scoring", "Email drafter", "WhatsApp bot"]},
    {"name": "Testing & Launch", "weeks": 1, "deliverables": ["QA", "User training", "Production deploy"]}
  ],
  "total_weeks": {"min": 7, "max": 9},
  "team_composition": [
    {"role": "Product Designer", "allocation": 50, "phases": [1, 2]},
    {"role": "Full-Stack Developer", "allocation": 100, "phases": [1, 2, 3, 4]},
    {"role": "AI Engineer", "allocation": 75, "phases": [3]}
  ],
  "confidence": 0.92
}
```

### Gemini 3 Features Used
- **Code Execution:** Can run calculations for complexity scoring
- **Thinking:** Reason through phase dependencies

### Success Criteria
- Complexity score matches selected features (more features = higher score)
- Phase breakdown is logical (can't do AI before database exists)
- Timeline is realistic (8-week CRM is achievable, 2-week marketplace is not)
- Team allocation makes sense (AI Engineer only needed during AI phase)
- Updates Architecture Preview Card smoothly

---

## Prompt 8: Design Enhanced Step 4 — Smart Feature Suggestions

### Goal
Transform Step 4 from a generic feature checklist into an intelligent recommendation system that suggests relevant features based on Type + Industry.

### Description
Step 4 should feel personalized. If user selected "Real Estate CRM", show features like "Lead scoring", "Property matching", "WhatsApp integration" as recommended. Generic features like "User auth" are still available but not pushed.

### Requirements
Design a multi-select feature grid with:

**General Features (always shown):**
- User authentication (login/signup)
- Admin dashboard
- Mobile responsive design
- Email notifications
- File uploads
- Search functionality

**AI Features (conditionally recommended):**
- Chatbot / AI assistant
- Content generation
- Predictive analytics
- Automated workflows
- Data insights
- Smart recommendations

**Display Logic:**
Show all features, but add visual badges:
- "Recommended for [Industry]" badge in indigo
- "Popular in [App Type]" badge in emerald
- No badge for general features

**Layout:**
2-column grid on desktop, 1 column on mobile. Checkboxes for multi-select. User can select as many or as few as needed.

**Custom Requests Section:**
Below feature grid, show text area:
- Label: "Any specific features or integrations?"
- Placeholder: "E.g., Stripe payments, Zapier automation, Twilio SMS"
- Character limit: 500
- Help text: "Be specific — this helps us build an accurate proposal"

### Smart Suggestion Rules
- **Real Estate:** Recommend Lead scoring, WhatsApp integration, Automated follow-ups
- **Fashion:** Recommend Content generation, File uploads, Calendar/scheduling
- **E-commerce:** Recommend Payment integration, Inventory management, Product recommendations
- **Marketplace:** Recommend User profiles, Reviews/ratings, Payment escrow
- **Chatbot:** Recommend Conversational AI, Knowledge base, Multi-language

### Success Criteria
- Recommended features feel relevant to user's selections
- User can still select non-recommended features
- Custom requests text area is prominent
- Mobile layout doesn't feel cramped
- "Next" enabled even if no features selected (user might rely on custom text)

### Data Captured
- selected_features: array of feature IDs
- custom_requests: string

---

## Prompt 9: Design Enhanced Step 5 — Industry-Specific Goals

### Goal
Replace generic goal checkboxes with industry-specific templates that feel like they were written for the user's exact situation.

### Description
Step 5 asks about goals and challenges. Instead of showing the same 10 generic goals to everyone, dynamically generate goal options based on the selected industry.

### Requirements
Design a two-part interface:

**Part 1: Pre-Selected Goals (Industry-Specific)**
Show 6-8 checkbox options that are specific to the industry:

**Real Estate Example:**
- Automate lead follow-up within 5 minutes
- Track property inquiries across channels
- Reduce time to schedule showings
- Generate market analysis reports
- Integrate WhatsApp for agent communication
- Improve lead-to-showing conversion rate

**Fashion & Luxury Example:**
- Streamline photoshoot scheduling and coordination
- Track sample inventory and movement
- Automate influencer outreach and follow-ups
- Centralize brand asset management
- Monitor campaign performance in real-time
- Coordinate event logistics and RSVPs

**Startup MVP Example:**
- Build investor-ready demo in 4-6 weeks
- Validate core product hypothesis quickly
- Minimize development costs
- Ensure scalability for future growth
- Integrate analytics from day one
- Launch with clean, modern design

**Part 2: Challenges Description (Free Text)**
Show large text area:
- Label: "What's your biggest challenge right now?"
- Placeholder: "Describe the main problem you're trying to solve. The more specific you are, the better we can help."
- Character limit: 1000
- Help text: "AI will analyze your response to identify opportunities and risks"

**AI Processing Badge:**
When user clicks "Next", show inline loading state: "AI analyzing your response..." for 2-3 seconds while Insight Extractor runs.

### Dynamic Goal Generation
Goals should be pulled from a mapping:

```
INDUSTRY_GOALS = {
  "Real Estate": [goals specific to real estate],
  "Fashion & Luxury": [goals specific to fashion],
  "Startups": [goals specific to startups],
  ...
}
```

If industry is "Other / Custom", show general goals like:
- Automate repetitive tasks
- Improve team productivity
- Better data insights
- Scale operations
- Reduce manual errors

### Success Criteria
- Goals feel like they were written for this specific industry
- User recognizes their pain points in the pre-selected options
- Text area encourages detailed responses (not one-liners)
- AI processing state is visible but doesn't block progress
- User can skip AI processing if it fails (show error, allow continue)

### Data Captured
- selected_goals: array of goal IDs
- challenges_description: string
- ai_insights: object (from Insight Extractor agent)

---

## Prompt 10: Enhance Proposal Generator with Full Context

### Goal
Upgrade the Proposal Generator to use ALL wizard context (Type, Industry, Architecture, Features, Goals, Insights) to create a truly personalized proposal.

### Description
The Proposal Generator is the final AI agent in the flow. It receives the complete wizard state and generates a multi-section proposal that feels custom-built for the user's exact project.

### Gemini 3 Model
Use Gemini 3 Pro with Thinking for complex proposal writing.

### Enhanced Inputs
- company_name, website_url (Step 1)
- app_type (Step 2)
- industry (Step 3)
- architecture_data (from Architecture Generator)
- selected_features, custom_requests (Step 4)
- complexity_data (from Complexity Estimator)
- selected_goals, challenges_description, ai_insights (Step 5)
- contact_info, timeline, budget_range (Step 6)

### Enhanced Prompt Template
"You are a senior technical proposal writer for an AI development agency. Write a comprehensive, personalized proposal for this client.

**Client Context:**
- Company: [company_name]
- Industry: [industry]
- Project Type: [app_type]
- Website: [website_url]

**Technical Requirements:**
- Database: [database_tables summary]
- Authentication: [auth_type]
- AI Agents: [recommended_agents summary]
- Selected Features: [selected_features + custom_requests]

**Project Scope:**
- Complexity: [complexity_label] ([complexity_score]/5)
- Timeline: [estimated_weeks]
- Phases: [phases summary]
- Team: [team_composition]

**Business Goals:**
- Primary Goals: [selected_goals]
- Key Challenges: [challenges_description]
- AI Insights: [ai_insights summary]

**Client Preferences:**
- Timeline: [timeline preference]
- Budget Range: [budget_range]

**Task:**
Write a complete proposal with these sections:

1. **Executive Summary**
   3 paragraphs that:
   - Acknowledge the specific challenge they described
   - Explain how this [app_type] solves it for [industry]
   - Preview the outcome (what success looks like in 8-10 weeks)

2. **Project Architecture**
   Explain the technical foundation in simple terms:
   - Database structure (why these specific tables matter)
   - AI agents and what they automate
   - Integration points (third-party tools, APIs)

3. **Development Phases**
   For each phase (from complexity_data):
   - Phase name and duration
   - Key deliverables in client-friendly language
   - Milestones and checkpoints
   - What client sees/tests at end of phase

4. **Timeline & Budget**
   - Total timeline: [min] to [max] weeks
   - Budget estimate: Based on [budget_range] and complexity
   - Team composition: Who works when
   - Payment structure: 50% upfront, 25% mid-project, 25% on launch

5. **Success Metrics**
   Define 4-6 specific, measurable outcomes:
   - For Real Estate: 'Lead response time under 5 minutes', 'Show 30% more properties per agent'
   - For Fashion: '50% faster shoot coordination', 'Zero lost samples'
   - For Startups: 'Investor-ready demo in 6 weeks', 'Under $50k total cost'

6. **Next Steps**
   Clear action items:
   - Schedule discovery call (30-60 min)
   - Review and sign proposal
   - Project kickoff week of [date]

**Style Guidelines:**
- Use [industry] terminology naturally
- Avoid generic phrases like 'cutting-edge' or 'revolutionary'
- Be specific with numbers (weeks, costs, metrics)
- Show you understand their business (reference their challenges)
- Professional but conversational tone

Output as structured JSON with all sections."

### Output Format (JSON)
```
{
  "title": "Custom CRM for Real Estate Agents — [Company Name]",
  "executive_summary": "Three paragraphs...",
  "architecture": {
    "overview": "Your CRM will be built on...",
    "database": "Five core tables: Leads, Properties, Activities, Deals, Users...",
    "ai_agents": [
      {"name": "Lead Scorer", "benefit": "Automatically prioritizes hot leads so agents focus on ready buyers"},
      {"name": "Email Drafter", "benefit": "Generates personalized property match emails in seconds"}
    ],
    "integrations": ["WhatsApp Business API", "Google Calendar", "Email (SendGrid)"]
  },
  "phases": [
    {
      "name": "Foundation & Design",
      "duration_weeks": 2,
      "deliverables": ["Complete database schema", "Design system and mockups", "Authentication setup"],
      "milestones": ["Week 1: Design review", "Week 2: Architecture approval"],
      "client_sees": "Clickable prototype showing all screens and user flows"
    }
  ],
  "timeline": "7-9 weeks from kickoff to launch",
  "budget": {
    "range": "$35,000 - $45,000",
    "reasoning": "Medium complexity CRM with AI lead scoring and WhatsApp integration",
    "payment_schedule": "50% ($17,500) upfront, 25% ($8,750) at Week 4, 25% ($8,750) on launch"
  },
  "team": [
    {"role": "Product Designer", "allocation": "Part-time (Weeks 1-3)"},
    {"role": "Full-Stack Developer", "allocation": "Full-time (Weeks 1-9)"},
    {"role": "AI Engineer", "allocation": "Part-time (Weeks 4-7)"}
  ],
  "success_metrics": [
    "Lead response time under 5 minutes (down from 2 hours)",
    "30% more properties shown per agent per week",
    "Zero missed follow-ups (AI handles all scheduling)",
    "50% reduction in manual data entry time"
  ],
  "next_steps": [
    {"action": "Schedule 30-minute discovery call", "timeline": "This week"},
    {"action": "Review and sign proposal", "timeline": "Within 5 business days"},
    {"action": "Project kickoff", "timeline": "Week of [next Monday + 2 weeks]"}
  ]
}
```

### Gemini 3 Features Used
- **Thinking:** Deep reasoning about project requirements and client needs
- **Long Context:** Can reference all wizard data (6 steps worth)
- **Grounding:** Can research industry-specific best practices if needed

### Success Criteria
- Executive summary references specific challenges user described
- Technical sections use industry language (not generic)
- Budget estimate aligns with stated budget_range
- Success metrics are measurable and specific
- Proposal feels custom-built (not templated)
- Timeline matches complexity estimate
- Next steps are actionable with dates

---

## Prompt 11: Design Enhanced Processing Screen

### Goal
Transform the generic "Generating proposal..." loader into an informative sequence that shows users what the AI is doing and builds confidence.

### Description
Instead of a single loading message, show a 7-step progression that rotates every 4-5 seconds. Each step has an icon and message. This keeps users engaged during the 25-35 second processing time.

### Requirements
Create a full-screen processing modal with:

**Header:**
- Large icon (animated blueprint/architecture icon)
- Title: "Building Your Custom Proposal"
- Subtitle: "Our AI is analyzing your project requirements..."

**Progress Sequence (7 Steps):**
Show steps in order with smooth transitions:

1. Icon: Database  
   Message: "Designing database architecture"  
   Subtext: "Creating tables for [industry] workflows"

2. Icon: Brain/AI  
   Message: "Selecting optimal AI agents"  
   Subtext: "Matching agents to your specific needs"

3. Icon: Calendar  
   Message: "Calculating timeline estimates"  
   Subtext: "Breaking project into phases"

4. Icon: Team/Users  
   Message: "Determining team composition"  
   Subtext: "Allocating designers, developers, AI engineers"

5. Icon: DollarSign  
   Message: "Building budget breakdown"  
   Subtext: "Based on complexity and features"

6. Icon: Target  
   Message: "Defining success metrics"  
   Subtext: "Specific to [industry] goals"

7. Icon: FileText  
   Message: "Finalizing proposal document"  
   Subtext: "Almost ready..."

**Progress Bar:**
Show actual progress (not fake):
- 0% at start
- ~14% per step (7 steps)
- 100% when proposal generation complete

**Time Estimate:**
Show: "This usually takes 25-35 seconds"

**Animation:**
Each step fades in, stays for 4-5 seconds, fades out. Icon animates (gentle pulse or spin). Progress bar animates smoothly.

### Success Criteria
- User sees different messages, not stuck on one screen
- Messages reference their specific selections (industry name appears)
- Progress bar moves smoothly (not jumpy)
- Total time matches actual AI processing (25-35s)
- On completion, auto-redirect to proposal page
- If AI fails, show error state with "Retry" and "Contact Support" options

### User Experience
User should feel: "The AI is really thinking about MY project" not "Generic loading screen"

---

## Prompt 12: Final Testing & Validation

### Goal
Comprehensive testing checklist to ensure wizard works end-to-end across all scenarios, devices, and edge cases.

### Test Cases

**Functional Tests:**
- [ ] User can complete all 6 steps without errors
- [ ] Back button preserves data (going back doesn't lose selections)
- [ ] "Next" button disabled until required fields completed
- [ ] Architecture Preview Card appears after Step 3
- [ ] AI agents trigger at correct steps (3, 4, 5, 6)
- [ ] Processing screen shows all 7 steps in sequence
- [ ] Proposal page displays all generated content
- [ ] SessionStorage backup/restore works on page refresh

**AI Integration Tests:**
- [ ] Architecture Generator returns valid JSON within 5 seconds
- [ ] Insight Extractor handles empty/short text gracefully
- [ ] Complexity Estimator calculates realistic timelines
- [ ] Proposal Generator uses all context from 6 steps
- [ ] AI errors show friendly messages with retry options
- [ ] Timeout after 60 seconds shows fallback content

**Responsive Tests:**
- [ ] Desktop (1440px+): Architecture card in right sidebar
- [ ] Tablet (768-1024px): Architecture card below form
- [ ] Mobile (320-767px): Collapsible card at bottom
- [ ] All grids adapt correctly (3x3 → 2x2 → 1 column)
- [ ] Text inputs don't clip on small screens
- [ ] Buttons remain accessible (not hidden)

**Data Validation Tests:**
- [ ] Email validation (prevents invalid emails)
- [ ] URL validation (accepts http/https, marks as optional)
- [ ] Required field checks (can't proceed without company name)
- [ ] Character limits enforced (500 for custom requests, 1000 for challenges)
- [ ] Multiple selection limits (can select all features or none)

**Edge Case Tests:**
- [ ] User selects "Other / Custom" industry → Shows generic goals
- [ ] User enters no features, only custom text → Proposal generated
- [ ] User refreshes during AI processing → Restored to last completed step
- [ ] User goes back after AI processing → AI data preserved
- [ ] Very long company names don't break layout
- [ ] Special characters in text fields don't break JSON

**Performance Tests:**
- [ ] Step 1 → Step 2 transition under 100ms
- [ ] Architecture Generator completes within 5 seconds
- [ ] Full wizard data payload under 50KB
- [ ] Proposal page loads in under 2 seconds
- [ ] No memory leaks during extended usage

### Success Criteria
All checkboxes must be checked before marking wizard as production-ready.

---

## Real-World Use Case 1: Real Estate CRM

### User Profile
Sarah, Real Estate Team Manager, 8 agents, 200+ active leads, struggling with follow-up speed.

### Journey Through Wizard

**Step 1:** Company name "Skyline Realty", website skylinerealty.com  
**Step 2:** Selects "Web App / Dashboard" (recognizes this as CRM)  
**Step 3:** Selects "Real Estate"  
→ Architecture card shows: Leads table, Properties table, Activities table, Deals table  
→ AI agents: Lead Scorer, Email Drafter, Market Analyzer  
→ Complexity: Medium (6-8 weeks)

**Step 4:** Selects features:
- User authentication ✓
- Lead scoring (recommended for Real Estate) ✓
- WhatsApp integration (recommended) ✓
- Automated follow-ups ✓
- Custom: "Integrate with Zillow API for property data"

**Step 5:** Selected goals:
- Automate lead follow-up within 5 minutes ✓
- Track property inquiries across channels ✓
- Reduce time to schedule showings ✓

Challenges text: "Our agents spend 3 hours a day manually entering lead data and sending follow-up emails. We're losing deals because we can't respond fast enough."

→ AI Insight Extractor identifies:
- Explicit goal: Reduce manual data entry
- Implicit need: Mobile access for agents (they're always in field)
- Risk: WhatsApp + Zillow integrations add complexity
- Opportunity: AI email drafter could save 2+ hours per agent per day

**Step 6:** Contact info, Timeline "Urgent", Budget "$25k-$50k"

**Processing:** 28 seconds

**Proposal Generated:**
- Title: "Custom Real Estate CRM — Skyline Realty"
- Executive Summary: "Your agents are spending 3 hours daily on manual tasks instead of showing properties. This CRM automates lead capture, follow-ups, and property matching so your team can focus on closings."
- Architecture: 5 tables, 3 AI agents, WhatsApp + Zillow integrations
- Timeline: 7-9 weeks
- Budget: $38,000 (within stated range)
- Success Metrics: "Lead response under 5 minutes", "50% reduction in data entry time", "30% more showings per agent"

**Outcome:** Sarah books discovery call, accepts proposal, project starts 2 weeks later.

### Gemini 3 Features Used
- **Grounding:** Fetched context from skylinerealty.com to understand their brand
- **Thinking:** Reasoned that real estate agents need mobile-first interface
- **Long Context:** Analyzed entire wizard flow to identify hidden need (mobile access)

---

## Real-World Use Case 2: Fashion Brand Dashboard

### User Profile
Marcus, Creative Director at luxury fashion brand, managing 12 photoshoots per month, losing track of samples and content.

### Journey Through Wizard

**Step 1:** Company name "Atelier Noir", website ateliernoir.com  
**Step 2:** Selects "Web App / Dashboard"  
**Step 3:** Selects "Fashion & Luxury"  
→ Architecture card shows: Shoots table, Samples table, Content table, Influencers table  
→ AI agents: Content Generator, Schedule Optimizer, Asset Manager  
→ Complexity: Medium-High (8-10 weeks)

**Step 4:** Features:
- File uploads (recommended for Fashion) ✓
- Content generation (recommended) ✓
- Calendar/scheduling (recommended) ✓
- Automated workflows ✓
- Custom: "Need to track which samples are with which influencer at all times"

**Step 5:** Goals:
- Streamline photoshoot scheduling ✓
- Track sample inventory and movement ✓
- Centralize brand asset management ✓

Challenges: "We have 200+ samples floating around with influencers, stylists, and photoshoots. We've lost $15k worth of samples this quarter alone. Coordination is a nightmare."

→ AI identifies:
- Explicit: Sample tracking is critical pain point
- Implicit: Need chain-of-custody system (who has what, when)
- Risk: $15k loss indicates inventory management is complex
- Opportunity: QR code tagging + AI alerts when samples overdue

**Step 6:** Timeline "Soon (1-2 months)", Budget "$50k-$100k"

**Proposal Generated:**
- Title: "Fashion Production Dashboard — Atelier Noir"
- Architecture includes "Sample Custody" table with QR tracking
- AI agent added: "Sample Guardian" (alerts when samples overdue for return)
- Timeline: 9-11 weeks (includes QR system setup)
- Budget: $62,000
- Success Metrics: "Zero lost samples", "50% faster shoot coordination", "All brand assets searchable in under 5 seconds"

**Outcome:** Marcus immediately sees value in AI-detected need (Sample Guardian agent). Books call same day.

### Gemini 3 Features Used
- **Thinking:** Inferred that "$15k in lost samples" means inventory is bigger problem than stated
- **Vision:** (Future capability) Could analyze sample photos for automatic cataloging
- **Code Execution:** Calculated ROI (sample tracking system pays for itself in 4 months)

---

## Real-World Use Case 3: Startup MVP

### User Profile
Jenna, Technical Co-Founder, building B2B SaaS for event planners, needs investor demo in 6 weeks.

### Journey Through Wizard

**Step 1:** Company name "EventSync", no website yet  
**Step 2:** Selects "MVP / Startup App"  
**Step 3:** Selects "Startups"  
→ Architecture card shows: Users table, Events table, Tasks table  
→ AI agents: Analytics Tracker, Smart Planner  
→ Complexity: Low-Medium (4-6 weeks)

**Step 4:** Features:
- User authentication ✓
- Admin dashboard ✓
- Analytics tracking (recommended for Startups) ✓
- Custom: "Need clean, investor-friendly design. Must work perfectly on iPad demos."

**Step 5:** Goals:
- Build investor-ready demo in 4-6 weeks ✓
- Validate core product hypothesis ✓
- Minimize development costs ✓

Challenges: "We're pitching to investors in 8 weeks. Need a working product that shows our vision but doesn't cost $100k. Core feature is AI-powered event task breakdown."

→ AI identifies:
- Explicit: Tight timeline, budget constraints
- Implicit: Investor pitch means design quality matters more than features
- Risk: 8-week deadline with 6-week dev timeline = no buffer
- Opportunity: Focus on 1 AI feature (task breakdown) done perfectly vs many done poorly

**Step 6:** Timeline "Urgent (1-2 weeks)", Budget "Under $10k" ← Unrealistic!

**Proposal Generated (Adjusted):**
- Title: "Investor MVP — EventSync"
- Executive Summary: "Your 8-week deadline is tight but achievable. We'll build a polished demo focused on your core AI task breakdown feature, with placeholder UI for future features. This gives investors a clear vision without overbuilding."
- Architecture: Minimal (3 tables, 1 AI agent instead of 2)
- Timeline: 5-6 weeks (realistic)
- Budget: $18,000-$22,000 (AI flags that "Under $10k" is impossible for stated requirements)
- Recommendation: "Given your $10k budget constraint, we suggest a phased approach: MVP ($18k) now for investor pitch, full product ($45k) after funding."
- Success Metrics: "Investor-ready demo by Week 6", "Clean iPad presentation mode", "AI task breakdown working for 3 event types"

**Outcome:** Jenna appreciates the honesty about budget. Adjusts to $20k budget, accepts proposal, launches MVP in time for pitch. Raises $500k, comes back for full product.

### Gemini 3 Features Used
- **Thinking:** Reasoned that budget was unrealistic, proposed phased approach instead of rejecting
- **Long Context:** Connected dots between "investor pitch in 8 weeks" and "iPad demo" to prioritize polish over features
- **Code Execution:** Calculated minimum viable timeline based on feature complexity

---

## AI Agent Type Definitions

### Planner Agents
**Purpose:** Strategic thinking, architecture design, proposal generation  
**Models:** Gemini 3 Pro with Thinking  
**Examples:** Architecture Generator, Proposal Generator  
**Characteristics:**
- Need deep reasoning capability
- Process multiple inputs to generate comprehensive outputs
- Response time 5-30 seconds acceptable
- Output quality more important than speed

### Analyst Agents
**Purpose:** Data extraction, insight generation, complexity calculation  
**Models:** Gemini 3 Flash  
**Examples:** Insight Extractor, Complexity Estimator  
**Characteristics:**
- Fast response required (2-5 seconds)
- Focused on single task (analyze text, calculate score)
- High confidence scores expected (>0.8)
- Can run in parallel with other agents

### Conversational Agents
**Purpose:** User-facing chat, support, guidance  
**Models:** Gemini 3 Flash (future capability)  
**Examples:** Wizard Helper Bot (future), Support Assistant  
**Characteristics:**
- Real-time response (<1 second)
- Context-aware of wizard state
- Friendly, helpful tone
- Can answer questions like "What's a CRM?" or "How long will this take?"

### Automation Agents
**Purpose:** Background tasks, data processing, integrations  
**Models:** Gemini 3 Flash or task-specific models  
**Examples:** Sample tracking alerts, Lead scoring recalculation  
**Characteristics:**
- Run asynchronously (user doesn't wait)
- Triggered by events (new lead added, sample overdue)
- High reliability required (must not fail silently)

---

## Workflow Logic Summary

### Step Progression Logic
```
Step 1 → Step 2 (always)
Step 2 → Step 3 (after app_type selected)
Step 3 → Trigger Architecture Generator → Step 4 (after industry selected + AI completes)
Step 4 → Trigger Complexity Estimator → Step 5 (after features selected)
Step 5 → Trigger Insight Extractor → Step 6 (after goals entered)
Step 6 → Trigger Proposal Generator → Processing Screen → Proposal Page (after submit)
```

### AI Trigger Logic
```
IF industry selected THEN
  RUN Architecture Generator (3-5s)
  DISPLAY architecture_preview_card
END

IF features selected THEN
  RUN Complexity Estimator (2s)
  UPDATE architecture_preview_card.complexity
END

IF goals_text length > 20 THEN
  RUN Insight Extractor (2-3s)
  STORE ai_insights in state
END

IF step 6 submitted THEN
  COLLECT all wizard state
  RUN Proposal Generator (20-30s)
  REDIRECT to /proposal with proposal_data
END
```

### Error Handling Logic
```
IF AI agent fails THEN
  SHOW error message "AI processing failed. Please try again."
  SHOW retry button
  ALLOW user to continue without AI insights (don't block progress)
END

IF AI timeout (>60s) THEN
  SHOW error "This is taking longer than expected"
  OFFER "Continue with manual review" option
  LOG error for debugging
END
```

---

**STATUS:** 📋 All 12 implementation prompts complete  
**Next Action:** Execute Prompt 1 (Design Step 2 UI)  
**Timeline:** 4 weeks total (Phase 1-4)  
**Success Metric:** 40% wizard completion rate, 85% proposal acceptance rate

**END OF DOCUMENT**

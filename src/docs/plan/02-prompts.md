# Sun AI Agency — Wizard & Dashboard Prompts

## Master System Prompt (Use Once)

ROLE:
You are a Principal Product Designer and AI Systems Architect.

GOAL:
Design a business-first AI wizard and dashboard system that adapts by industry and user goals.

RULES:
- Use plain business language (no technical jargon)
- Focus on outcomes, not databases or infrastructure
- Every screen must add visible value to the user
- The system must build on previous answers
- Use AI reasoning and search grounding where relevant

SYSTEM CONCEPT:
Industry → Goals → Services → AI Agents → Automations → Dashboard

OUTPUT REQUIREMENTS FOR EACH SCREEN:
- Purpose (why this screen exists)
- UI layout (3-panel: Left Context / Main Work / Right Intelligence)
- Fields and content
- Workflows and logic
- AI agents involved
- AI tools used
- Example real-world behavior

---

## Screen 1 — Business Context (Foundation)

PURPOSE:
Understand who the system is for and establish business context.

UI LAYOUT:

Left (Context):
- Brand name
- Industry
- Website (optional)

Main (Work):
- Fields:
  - Full name
  - Company or Brand name
  - Website (optional)
  - Short business description (2-3 sentences)

Right (Intelligence):
- Live Architecture Blueprint:
  - Who this system is for
  - Industry detected
  - Initial complexity estimate

AI LOGIC:
- If website is provided, analyze:
  - Industry signals
  - Business model
  - Market positioning
  - Company size indicators

AI TOOLS:
- URL Context Analysis
- AI Thinking Mode

OUTPUT:
- Confirmed industry
- Refined business description
- Blueprint initialized
- Context for next screen

EXAMPLE BEHAVIOR:
User enters "Fashion startup selling sustainable accessories"
AI detects: Fashion industry, E-commerce model, Small size, Sustainability focus
Blueprint shows: Fashion + E-commerce, Startup scope

---

## Screen 2 — What Are You Building?

PURPOSE:
Let users choose the type of application they want to build.

OPTIONS (multi-select allowed):
- AI Dashboard
- CRM / Sales System
- AI Chat Assistant
- Automation System
- Internal Operations Tool

UI LAYOUT:

Left (Context):
- Selected industry
- Company name
- Business description

Main (Work):
- Large selectable cards with:
  - Icon
  - Name
  - One-line business description
  - Example use case for THEIR industry

Right (Intelligence):
- Blueprint updates:
  - Type of system
  - Expected scope
  - Suggested AI role (Advisor / Operator / Assistant)
  - Estimated timeline

AI LOGIC:
- Filter available services based on industry and system type
- Show industry-specific examples
- Adjust complexity estimate based on selections
- Recommend combinations (e.g., "Most Fashion brands combine Dashboard + CRM")

AI TOOLS:
- AI Reasoning
- Industry Knowledge Base

OUTPUT:
- Selected system types
- Initial service recommendations
- Updated complexity score

EXAMPLE BEHAVIOR:
Fashion startup selects "AI Dashboard + CRM"
AI suggests: Campaign tracking, Vendor management, Sales pipeline
Blueprint updates: Medium complexity, 2 AI agents recommended

---

## Screen 3 — Business Goals (Outcomes)

PURPOSE:
Understand what success means for this specific business.

GOAL OPTIONS (industry-adaptive):
- Increase revenue
- Save time with automation
- Improve customer experience
- Organize operations
- Scale services
- Launch faster

UI LAYOUT:

Left (Context):
- Industry
- System type
- Current selections

Main (Work):
- Goal selection chips (multi-select)
- Optional free-text: "What does success look like for you?"
- Each goal shows why it matters for their industry

Right (Intelligence):
- Blueprint shows:
  - Primary focus detected
  - AI role evolving
  - Complexity changes
  - New services suggested

AI LOGIC:
- Map each goal to:
  - Services
  - AI agents
  - Dashboard widgets
  - Automation opportunities

GOAL-TO-SERVICE MAPPING:
- Increase revenue → CRM, Analytics, AI Advisor, Sales automation
- Save time → Automations, AI Agents, Workflow tools
- Improve experience → Chatbots, CRM, Multi-channel messaging
- Organize operations → Dashboard, Project tracking, Database
- Scale services → Automations, AI Agents, Templates
- Launch faster → MVP features, Core AI only, Simplified scope

AI TOOLS:
- AI Thinking
- Structured Output (Goal to Service mapping)

OUTPUT:
- Selected goals ranked by priority
- Services automatically added or upgraded
- AI agent roles defined

EXAMPLE BEHAVIOR:
Fashion startup selects "Increase revenue + Improve customer experience"
AI adds: CRM with follow-ups, AI chatbot, Email automation, Analytics dashboard
Blueprint updates: Advanced AI recommended, 3 agents active

---

## Screen 4 — Recommended Services (Intelligent)

PURPOSE:
Show what the system recommends based on all previous answers.

UI LAYOUT:

Left (Context):
- Industry
- System type
- Goals
- Current complexity

Main (Work):

Section 1: Core Services (pre-selected based on wizard)
- AI Dashboard
- CRM and Sales
- AI Assistant
- Automations (if relevant to goals)

Section 2: Recommended Add-ons (smart suggestions)
- Advanced analytics
- Content generation
- Sentiment analysis
- WhatsApp or Email automation
- Payment integration
- Multi-channel messaging

Each service card includes:
- Icon
- Service name
- What it does (1 sentence)
- Why it matters for THIS industry (1 sentence)
- Core vs Advanced badge
- Toggle to add/remove

Right (Intelligence):
- Blueprint updates in real-time:
  - Active services count
  - AI capabilities
  - Scope and complexity
  - Pricing tier indicator
  - Timeline estimate

AI LOGIC:
- Use industry + goals + system type to auto-select services
- Rank add-ons by relevance
- Allow user to adjust selections
- Recalculate complexity and timeline on changes
- Flag conflicts (e.g., "Advanced AI works best with Automations")

AI TOOLS:
- AI Reasoning
- Service Recommendation Engine

OUTPUT:
- Final service list
- Complexity score
- Timeline estimate
- Pricing tier

EXAMPLE BEHAVIOR:
Fashion startup with "Revenue + Experience" goals sees:
Core: Dashboard, CRM, AI Chatbot, Email automation
Recommended: Content AI (for campaigns), WhatsApp, Payment integration
Blueprint: Medium-High complexity, 4-6 weeks, Advanced tier

---

## Screen 5 — AI Intelligence Level

PURPOSE:
Let users choose how proactive and autonomous AI should be.

OPTIONS:
- Core AI (Assistive, guided, human-in-the-loop)
- Advanced AI (Proactive, autonomous, learns continuously)

UI LAYOUT:

Left (Context):
- All previous selections
- Current complexity

Main (Work):

Option 1: Core AI
- Description: AI assists and recommends, but you make decisions
- Features:
  - AI suggests next steps
  - AI highlights important information
  - AI answers questions
  - Human approves all actions

Option 2: Advanced AI
- Description: AI takes initiative and handles tasks automatically
- Features:
  - AI executes approved workflows
  - AI monitors and alerts proactively
  - AI learns from patterns
  - AI optimizes over time

Visual AI Agent Cards (adjust based on selection):
- Advisor (recommends and explains)
- Operator (executes with approval)
- Autonomous (executes automatically within rules)

Right (Intelligence):
- Blueprint shows:
  - AI agents active
  - Automation depth
  - Human-in-the-loop checkpoints
  - Pricing adjustment
  - Timeline adjustment

AI LOGIC:
- Adjust automation levels based on selection
- Add or remove autonomous agents
- Update dashboard intelligence features
- Adjust pricing tier

AI TOOLS:
- AI Thinking
- Risk Assessment

OUTPUT:
- AI level confirmed
- Agent roles assigned
- Automation rules defined
- Final complexity score

EXAMPLE BEHAVIOR:
User selects "Advanced AI"
System activates: 3 autonomous agents, 5 automated workflows, continuous learning
Blueprint updates: High complexity, Premium tier, AI runs 24/7

---

## Screen 6 — Project Summary and Launch

PURPOSE:
Confirm what is being built and launch the dashboard.

UI LAYOUT:

Left (Context):
- Company logo or icon
- Industry badge
- System type badge

Main (Work):

Project Overview Card:
- Industry: Fashion and Lifestyle
- System Type: AI Dashboard + CRM
- Primary Goals: Increase revenue, Improve customer experience
- Services Included: (list with icons)
- AI Level: Advanced AI with 3 autonomous agents
- Timeline Estimate: 4-6 weeks
- Pricing Tier: Advanced

What You Get Section:
- Dashboard with real-time insights
- CRM for vendors and customers
- AI chatbot for support
- Email automation
- Content generation AI
- 3 AI agents working 24/7

CTA Button:
"Launch My Dashboard"

Secondary Action:
"Adjust My Selections"

Right (Intelligence):
- Final Blueprint (locked):
  - Configuration summary
  - Team size needed
  - Timeline with milestones
  - Next immediate steps

AI LOGIC:
- Lock configuration
- Generate dashboard structure
- Initialize AI agents
- Create project timeline
- Set up onboarding tasks

AI TOOLS:
- Structured Output
- Dashboard Generation Engine

OUTPUT:
- Locked project configuration
- Dashboard generation triggered
- User redirected to Client Dashboard V3

---

## Post-Wizard — Client Dashboard V3 (Auto-Generated)

PURPOSE:
Show personalized, live dashboard based on all wizard inputs.

LAYOUT STRUCTURE:

Left Panel (Context):
- Business info
- Industry
- Active services
- AI agents status
- Quick navigation

Main Panel (Work):
Three sections:
1. Project Snapshot
2. What AI Is Doing For You
3. What Happens Next

Right Panel (Intelligence):
- AI Project Assistant
- Suggested next step
- Risks to be aware of
- Helpful tips
- Ask AI button

SECTION 1: PROJECT SNAPSHOT

Display Cards:
- System Type (from wizard)
- Industry (from wizard)
- Primary Goal (from wizard)
- Project Size (calculated)

Helper Text:
This is a living project — details can be refined anytime.

SECTION 2: WHAT AI IS DOING FOR YOU

Title: How AI Will Help Your Business
Subtitle: These AI capabilities are included in your system.

Dynamic Cards (based on wizard selections):
- AI Helpers Working for You
- AI That Thinks With You
- AI That Creates Content
- Automated Background Work
- AI Knowledge and Intelligence

Each card shows:
- Title
- Business-focused description
- 3 key capabilities

SECTION 3: WHAT HAPPENS NEXT

4-Step Timeline:
1. AI finalizes your project plan (Status: Complete, Green)
2. Key features and workflows are prepared (Status: In Progress, Blue)
3. Your team reviews and approves (Status: Upcoming, Gray)
4. Build or execution begins (Status: Upcoming, Gray)

Action Buttons:
- Primary: View Full Project Details
- Secondary: Talk to AI About This Project

RIGHT SIDEBAR: AI PROJECT ASSISTANT

Card 1 — Suggested Next Step:
Dynamic based on project type and industry
Examples:
- Chatbot project: Define top 5 customer questions
- Automation project: List 3 most time-consuming tasks
- Dashboard project: Share key metrics you track today
- CRM project: Upload current customer list

Card 2 — Be Aware Of:
Dynamic risk flags and considerations
Examples:
- Multiple systems: Can extend timelines, consider phasing
- Creative AI: Requires brand guidelines upfront
- AI Agents: Need clear task boundaries
- Data-heavy: Data quality affects AI performance

Card 3 — Helpful Tip:
Industry-specific guidance
Examples:
- Fashion/Luxury: Maintain exclusivity while scaling personal touches
- Startups: Start with one high-value feature, expand as you learn
- Agencies: Automate reporting first for immediate time savings
- E-commerce: AI works best with clean product data

Quick Action Button:
Ask AI a Question

AI LOGIC:
- Personalize all content based on wizard data
- Update timeline daily
- Generate contextual tips
- Monitor progress
- Suggest upgrades when relevant

AI TOOLS:
- AI Reasoning
- Search Grounding (industry benchmarks)
- Continuous Learning

---

## Dashboard Evolution (Ongoing Intelligence)

DAY 1 BEHAVIOR:
- Setup and visibility
- Show what is included
- Explain what AI will do
- Set expectations

DAY 7 BEHAVIOR:
- First insights appear
- AI starts making recommendations
- Progress updates visible
- User patterns detected

DAY 30 BEHAVIOR:
- Optimization suggestions
- Upgrade opportunities highlighted
- Performance benchmarks shown
- ROI visibility

AI continuously:
- Learns user preferences
- Adjusts recommendations
- Flags risks early
- Suggests service additions
- Optimizes workflows

---

## Industry-Specific Search Grounding (Global Reusable Prompt)

Use search grounding to discover:
- Common AI use cases in {industry}
- Top KPIs and metrics for {industry}
- Competitive AI features in {industry}
- Best practices for {industry}
- Automation opportunities in {industry}
- Typical pain points in {industry}

Summarize findings in simple business language.
Avoid technical jargon.
Focus on outcomes and value.

---

## Widget Personalization Prompt (Dashboard Generation)

Based on:
- Industry: {industry}
- System Type: {systemType}
- Goals: {goals}
- Services: {services}

Generate dashboard widgets that show:
- Key metrics for this industry
- Progress toward stated goals
- Service-specific insights
- AI agent activity
- Actionable next steps

Each widget must:
- Use business language
- Show clear value
- Include context
- Suggest actions
- Update in real-time

---

## AI Agent Activation Prompt

Based on wizard configuration:
- Industry: {industry}
- Goals: {goals}
- AI Level: {aiLevel}
- Services: {services}

Activate AI agents:
1. Sales Advisor (if CRM or revenue goal selected)
2. Operations Planner (if automation or operations selected)
3. Content Generator (if content AI selected)
4. Customer Support Bot (if chatbot selected)
5. Analytics Advisor (if dashboard selected)

Each agent should:
- Understand business context
- Focus on stated goals
- Operate within AI level rules
- Provide business-focused recommendations
- Learn from user interactions

---

## Timeline Generation Prompt

Based on:
- Services selected: {services}
- AI level: {aiLevel}
- Complexity score: {complexity}
- Team size: {teamSize}

Generate realistic timeline with milestones:
- Week 1: Planning and setup
- Week 2-3: Core features build
- Week 4-5: AI integration and testing
- Week 6: Review and refinement
- Week 7+: Launch and optimization

Adjust based on complexity.
Flag dependencies.
Highlight approval checkpoints.

---

## Risk Detection Prompt

Analyze project configuration:
- Industry: {industry}
- Services: {services}
- Goals: {goals}
- Timeline: {timeline}

Identify potential risks:
- Scope creep indicators
- Timeline pressure points
- Service conflicts
- Data requirements
- Integration complexity
- Resource constraints

For each risk:
- Explain in business terms
- Suggest mitigation
- Indicate severity (Low/Medium/High)

---

## Upgrade Suggestion Prompt

Based on:
- Current services: {currentServices}
- Usage patterns: {usageData}
- Goals achieved: {goalsProgress}
- Time since launch: {daysSinceLaunch}

Suggest upgrades when:
- Goal progress is slower than expected
- User frequently requests features not included
- Industry benchmarks show gaps
- AI detects optimization opportunities

Present suggestions as:
- What it adds
- Why it helps achieve goals
- Expected impact
- Effort required

---

## What You Now Have

- Fully adaptive wizard (6 screens)
- Clear business-first UI structure
- AI that builds on previous answers
- Personalized dashboard generation
- Ongoing intelligence and optimization
- Industry-specific customization
- Scalable to new industries and services
- Zero technical jargon
- Immediate value visibility

---

END OF PROMPTS

# Sun AI Website V11 — Sitemap & User Journeys

**Design System:** Calm Luxury Editorial  
**Total Pages:** 18 marketing pages + 8 app pages = 26 pages  

---

## SITE ARCHITECTURE

```
sunai.com/
│
├── / (Home V11)
│
├── SOLUTIONS/
│   ├── /solutions (All Services Overview)
│   ├── /solutions/ai-web-design
│   ├── /solutions/app-development
│   ├── /solutions/ai-agents
│   ├── /solutions/chatbots
│   ├── /solutions/sales-crm
│   └── /solutions/mvp-builder
│
├── INDUSTRIES/
│   ├── /industries/saas
│   ├── /industries/ecommerce
│   ├── /industries/real-estate
│   ├── /industries/b2b-services
│   ├── /industries/automotive
│   └── /industries/tourism
│
├── COMPANY/
│   ├── /about
│   ├── /case-studies
│   ├── /process
│   ├── /booking
│   └── /support
│
└── APP (Existing)/
    ├── /wizard (Project Brief Wizard)
    ├── /processing (AI Analysis)
    ├── /proposal (Proposal Ready)
    ├── /login
    ├── /dashboard (Client Portal)
    ├── /app/leads (CRM)
    ├── /app/intelligence (Sales Intelligence OS)
    └── /whatsapp (WhatsApp Automation)
```

---

## USER JOURNEY 1: Discovery → Booking

**Persona:** First-time visitor exploring AI services

1. **Landing:** `/` (Home V11)
   - Hero: "Build AI systems that transform your business"
   - Scan: Trusted by logos, services grid, results stats
   - **Decision:** Interested in specific solution

2. **Deep Dive:** `/solutions/ai-agents`
   - Learn: What AI agents are, how they work, pricing tiers
   - See: Case study examples, ROI calculator
   - **Decision:** Ready to explore fit for their industry

3. **Industry Validation:** `/industries/saas`
   - Confirm: Use cases match their business model
   - Read: Testimonials from similar companies
   - **Decision:** Convinced, wants to start conversation

4. **Conversion:** `/booking`
   - Book: 30-min discovery call via calendar
   - **Exit:** Email confirmation, calendar invite

---

## USER JOURNEY 2: Solution Research → Brief Wizard

**Persona:** Decision-maker comparing AI vendors

1. **Entry:** `/solutions` (Overview)
   - Compare: All 7 solutions side-by-side
   - Filter: By business need (automation, customer service, sales)
   - **Decision:** AI Chatbots + Sales CRM fit needs

2. **Solution 1:** `/solutions/chatbots`
   - Understand: Features, pricing, timeline
   - **Decision:** Interested, but want to see process

3. **Process Clarity:** `/process`
   - Review: 4-phase methodology, timeline expectations
   - Trust: Transparent pricing, no hidden costs
   - **Decision:** Ready to get scoped proposal

4. **Self-Service Scoping:** `/wizard`
   - Input: Business goals, timeline, budget, technical details
   - Receive: AI-analyzed brief, instant ballpark estimate
   - **Decision:** Proposal looks good → book call or `/processing` → `/proposal`

---

## USER JOURNEY 3: Brand Trust Building

**Persona:** Enterprise buyer doing due diligence

1. **Referral Entry:** `/about`
   - Learn: Company story, team expertise, mission
   - Validate: Years in business, credentials
   - **Decision:** Want to see proof of work

2. **Social Proof:** `/case-studies`
   - Read: 3-5 detailed case studies with metrics
   - Filter: By industry or solution type
   - **Decision:** Impressed, want to understand process

3. **Methodology:** `/process`
   - Study: 7-phase AI Product Systems Architect framework
   - Appreciate: "Thinking states" not loading spinners, zero manual data entry
   - **Decision:** Aligned with quality standards

4. **Direct Contact:** `/support` or `/booking`
   - Choose: Live chat for questions OR book strategic call
   - **Exit:** In sales conversation

---

## USER JOURNEY 4: Industry-Specific Entry

**Persona:** E-commerce owner searching "AI for online stores"

1. **SEO Landing:** `/industries/ecommerce`
   - Recognize: Pain points addressed (cart abandonment, customer support, inventory)
   - See: E-commerce-specific AI solutions
   - **Decision:** Want to see chatbot solution

2. **Solution Deep Dive:** `/solutions/chatbots`
   - Learn: How chatbots integrate with Shopify/WooCommerce
   - Pricing: Transparent tier structure
   - **Decision:** Interested in MVP approach

3. **MVP Validation:** `/solutions/mvp-builder`
   - Understand: Rapid prototyping, 4-6 week timeline
   - **Decision:** Perfect fit, ready to brief

4. **Wizard Flow:** `/wizard` → `/processing` → `/proposal`
   - Complete brief, get instant proposal, book call

---

## USER JOURNEY 5: Existing Client Re-engagement

**Persona:** Past client returning for new project

1. **Direct Login:** `/login`
   - Access: Existing credentials
   - **Route:** Redirected to `/dashboard`

2. **Client Portal:** `/dashboard`
   - Review: Past project history, current status
   - Explore: New service offerings in sidebar
   - **Decision:** Want to add WhatsApp automation

3. **New Solution Research:** `/solutions/sales-crm` or `/whatsapp`
   - Learn: New offerings since last project
   - **Decision:** Request add-on to existing account

4. **Internal Request:** `/dashboard` (hypothetical project request feature)
   - Submit: Brief for new module
   - **Exit:** Account manager notified

---

## USER JOURNEY 6: Support & Education

**Persona:** Active user needing help

1. **Entry:** `/support`
   - Options: Live chat, help docs, video tutorials, ticket system
   - **Decision:** Start with help docs

2. **Self-Service:** Help center (future page)
   - Browse: Getting started guides, API docs, troubleshooting
   - **Decision:** Need human help

3. **Escalation:** Live chat → Support ticket
   - Submit: Detailed issue with screenshots
   - **Exit:** Response SLA commitment shown

---

## NAVIGATION STRUCTURE

### Header (Global)
- Logo (links to `/`)
- Solutions (dropdown mega-menu)
- Industries (dropdown)
- Company (dropdown)
- **CTA:** "Start Project" → `/wizard`

### Footer (Global)
- **Column 1:** Company links (About, Process, Case Studies, Booking, Support)
- **Column 2:** Solutions (all 7)
- **Column 3:** Industries (all 6)
- **Column 4:** Wizards (Brief, Processing, Proposal, Login)
- **Column 5:** Social links, newsletter signup

---

## KEY CONVERSION PATHS

| Entry Point | Primary CTA | Secondary CTA | Exit Goal |
|-------------|-------------|---------------|-----------|
| `/` | Start Your Project | Book a Call | `/wizard` |
| `/solutions/*` | Get Started | View Pricing | `/wizard` or `/booking` |
| `/industries/*` | See Solutions | Case Studies | `/solutions/*` |
| `/about` | Work With Us | Our Process | `/booking` |
| `/case-studies` | Start Your Project | Contact Us | `/wizard` |
| `/process` | Begin Brief | Schedule Call | `/wizard` |

---

## CROSS-LINKING STRATEGY

### Every Solutions Page Links To:
- 2-3 relevant industry pages
- `/process` (how we build it)
- `/case-studies` (proof)
- `/wizard` (start now)

### Every Industry Page Links To:
- 3-4 relevant solution pages
- Industry-specific case study
- `/booking` (industry expert call)

### Every Company Page Links To:
- At least 1 solution page
- `/wizard` or `/booking`

---

**Version:** 11  
**Last Updated:** 2026-01-07  
**Status:** Sitemap defined, pages in development

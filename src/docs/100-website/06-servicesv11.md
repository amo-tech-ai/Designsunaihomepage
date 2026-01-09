# SERVICES PAGE V11 — CALM LUXURY IMPLEMENTATION GUIDE

**Purpose:** Premium AI services overview page with modular service cards  
**Route:** `/services/v11`  
**Design System:** Calm Luxury Editorial (styleguide.md)  
**Content Strategy:** Business-first, conversion-focused, non-technical

---

## PROGRESS TRACKER

### Overall Progress: 0% Complete

**Phase 1 — Planning & Documentation**
- [x] Content structure defined
- [x] Routes mapped
- [ ] Wireframes created
- [ ] Design specs finalized

**Phase 2 — Implementation**
- [ ] Hero section built
- [ ] Service cards grid created
- [ ] Detail pages scaffolded
- [ ] Responsive variants tested

**Phase 3 — Polish & Launch**
- [ ] Copy finalized
- [ ] Links verified
- [ ] Mobile optimized
- [ ] Performance tested

---

## ROUTE ARCHITECTURE

### Main Services Page
- **Route:** `/services/v11`
- **Component:** `ServicesPageV11.tsx`
- **Location:** `/components/premium/v11/ServicesPageV11.tsx`

### Service Detail Pages (To Be Created)

| Service | Route | Component | Priority |
|---------|-------|-----------|----------|
| AI Web Applications | `/services/ai-web-apps` | `AIWebAppsDetailPage.tsx` | High |
| AI Chatbots | `/services/chatbots` | `ChatbotsDetailPage.tsx` | High |
| AI Agents & Automations | `/services/ai-agents` | `AIAgentsDetailPage.tsx` | High |
| Sales & Marketing Automation | `/services/sales-automation` | `SalesAutomationDetailPage.tsx` | Medium |
| AI Analytics & Business Intelligence | `/services/analytics` | `AnalyticsDetailPage.tsx` | Medium |
| Custom AI Integrations | `/services/custom-ai` | `CustomAIDetailPage.tsx` | Low |

---

## SECTION 1 — HERO SECTION

### Content Specifications

**Eyebrow Text:**
- "SUN AI SERVICES" (uppercase, 12px, tracking-widest, amber #F59E0B)

**Headline:**
- "AI systems that save time, increase revenue, and unlock your next stage of growth"
- Font: Playfair Display, 60-72px
- Color: #1A1A1A
- Max width: 900px
- Line height: 1.1

**Subheading:**
- "We design and deploy practical AI solutions that automate operations, improve marketing performance, and help businesses scale without complexity."
- Font: Lora (serif), 18-20px
- Color: #666666
- Max width: 700px
- Line height: 1.6

**Primary CTA:**
- Text: "Explore Our AI Solutions"
- Style: Amber background (#F59E0B), dark text (#1A1A1A)
- Size: px-10 py-5
- On click: Smooth scroll to service cards section

**Secondary CTA:**
- Text: "Start AI Assessment"
- Style: Border button (border-[#1A1A1A])
- Route: `/wizard`

### Layout Specifications

**Desktop (1024px+):**
- Centered text layout
- Max width: 1200px container
- Padding: py-24 md:py-32
- Background: #FDFCFB (warm off-white)

**Tablet (768-1023px):**
- Maintained centered layout
- Reduce heading to 48px
- Padding: py-20

**Mobile (<768px):**
- Stack CTAs vertically
- Heading: 36px
- Padding: py-16
- Full-width buttons with gap-4

### Visual Elements

**Abstract Illustration (Optional):**
- Subtle geometric pattern or AI-themed illustration
- Positioned right side (desktop only)
- Opacity: 20-30%
- Color: Amber tint

**Success:**
- [ ] Headline immediately communicates value
- [ ] No jargon or buzzwords
- [ ] CTAs clearly actionable
- [ ] Generous whitespace maintained

---

## SECTION 2 — WHO THESE SERVICES ARE FOR

### Content Specifications

**Section Heading:**
- "Built for Growing Businesses"
- Font: Playfair Display, 42-48px
- Color: #1A1A1A
- Centered

**Subheading:**
- "Our services are built for businesses that want to:"
- Font: Inter, 18px
- Color: #666666

**Benefit List (5 items):**
1. Save time by automating repetitive work
2. Increase sales and conversion rates
3. Reduce operational friction
4. Scale without hiring large teams
5. Use AI in a practical, business-first way

**Closing Statement:**
- "Whether you're a growing brand, agency, or SaaS company, our systems adapt to your industry and goals."
- Font: Lora, 16px, italic
- Color: #999999

### Layout Specifications

**Desktop:**
- Two-column layout:
  - Left: Heading + subheading
  - Right: Benefit list + closing statement
- Max width: 1200px
- Gap: 80px between columns

**Tablet:**
- Single column, centered
- Max width: 700px

**Mobile:**
- Single column
- Padding: px-6

### Visual Elements

**Benefit List Items:**
- Amber square bullet (6px × 6px, #F59E0B)
- Text: 16px, #666666
- Line spacing: space-y-4
- Icon alternative: CheckCircle (lucide-react) in amber

**Success:**
- [ ] Speaks to business pain points
- [ ] Non-judgmental, empowering tone
- [ ] Clear target audience
- [ ] Scannable format

---

## SECTION 3 — SERVICES OVERVIEW (CRITICAL)

### Grid Layout Specifications

**Desktop (1024px+):**
- 3-column grid
- Gap: 32px (gap-8)
- Max width: 1200px
- Equal height cards

**Tablet (768-1023px):**
- 2-column grid
- Gap: 24px (gap-6)

**Mobile (<768px):**
- 1-column stack
- Full width cards
- Gap: 16px (gap-4)

### Service Card Component Specifications

**Card Container:**
- Background: White (#FFFFFF)
- Border: 1px solid #EFE9E4
- Padding: 32px (p-8)
- Square corners (no rounded)
- Hover: Border color → #F59E0B, subtle translate-y

**Card Structure (Top to Bottom):**

1. **Icon/Illustration**
   - Size: 48px × 48px
   - Color: Amber (#F59E0B) or dark (#1A1A1A)
   - Margin bottom: 24px

2. **Service Name**
   - Font: Playfair Display, 24px, 600 weight
   - Color: #1A1A1A
   - Margin bottom: 12px

3. **One-Line Benefit**
   - Font: Lora (serif), 16px
   - Color: #666666
   - Margin bottom: 16px

4. **Description (2-3 sentences)**
   - Font: Inter, 15px
   - Color: #666666
   - Line height: 1.6
   - Margin bottom: 20px

5. **"Best For" Section**
   - Label: "BEST FOR" (uppercase, 10px, tracking-widest, #999999)
   - Text: 14px, #666666
   - Margin bottom: 12px

6. **"Business Impact" Section**
   - Label: "BUSINESS IMPACT" (uppercase, 10px, tracking-widest, #999999)
   - Text: 14px, #F59E0B, 600 weight
   - Margin bottom: 24px

7. **CTA Link**
   - Text: "View details →"
   - Font: 14px, 700 weight
   - Color: #1A1A1A
   - Hover: Color → #F59E0B
   - Route: Corresponding service detail page

### Service Cards Content

#### CARD 1: AI Web Applications

**Icon:** Code (lucide-react)

**Service Name:** AI Web Applications

**One-Line Benefit:** Custom AI-powered applications built for your business workflows

**Description:**
We build intelligent web applications that automate processes, analyze data, and support decision-making.

**Best For:** Operations, internal tools, dashboards, data workflows

**Business Impact:** Faster execution, fewer errors, scalable systems

**Route:** `/services/ai-web-apps`

---

#### CARD 2: AI Chatbots

**Icon:** MessageSquare (lucide-react)

**Service Name:** AI Chatbots

**One-Line Benefit:** Always-on assistants for sales, support, and customer engagement

**Description:**
AI chatbots that respond instantly, qualify leads, answer questions, and guide users—across web, WhatsApp, and messaging platforms.

**Best For:** Lead capture, customer support, FAQs

**Business Impact:** Faster response times, higher conversion, lower support load

**Route:** `/services/chatbots`

---

#### CARD 3: AI Agents & Automations

**Icon:** Zap (lucide-react)

**Service Name:** AI Agents & Automations

**One-Line Benefit:** Autonomous AI agents that work for your business 24/7

**Description:**
We design AI agents that execute tasks, coordinate tools, and automate workflows across your systems.

**Best For:** Sales follow-ups, reporting, task execution

**Business Impact:** Time saved, consistent execution, operational leverage

**Route:** `/services/ai-agents`

---

#### CARD 4: Sales & Marketing Automation

**Icon:** TrendingUp (lucide-react)

**Service Name:** Sales & Marketing Automation

**One-Line Benefit:** AI systems that turn traffic into revenue

**Description:**
Automate lead nurturing, follow-ups, content distribution, and CRM workflows to increase conversions without manual effort.

**Best For:** Marketing teams, sales pipelines, CRM optimization

**Business Impact:** Higher close rates, better lead quality, predictable growth

**Route:** `/services/sales-automation`

---

#### CARD 5: AI Analytics & Business Intelligence

**Icon:** BarChart3 (lucide-react)

**Service Name:** AI Analytics & Business Intelligence

**One-Line Benefit:** Turn data into clear decisions

**Description:**
We implement AI-powered analytics that surface insights, trends, and opportunities—without complex dashboards.

**Best For:** Founders, operators, decision-makers

**Business Impact:** Better decisions, clearer priorities, reduced guesswork

**Route:** `/services/analytics`

---

#### CARD 6: Custom AI Integrations

**Icon:** Puzzle (lucide-react)

**Service Name:** Custom AI Integrations

**One-Line Benefit:** Connect AI to your existing tools and platforms

**Description:**
We integrate AI into your current stack (CRM, e-commerce, messaging, internal tools) without disruption.

**Best For:** Businesses with existing systems

**Business Impact:** Unified workflows, automation across tools

**Route:** `/services/custom-ai`

---

### Success Criteria

- [ ] All 6 service cards display correctly
- [ ] Grid responsive on all breakpoints
- [ ] Cards have equal height on desktop
- [ ] All routes link correctly
- [ ] Hover states smooth and subtle
- [ ] Copy clear and benefit-focused
- [ ] Icons consistent style and size

---

## SECTION 4 — HOW OUR SERVICES WORK TOGETHER

### Content Specifications

**Section Heading:**
- "Designed as Modular Systems"
- Font: Playfair Display, 42-48px
- Color: #1A1A1A

**Subheading:**
- "Our services work together, not in isolation."
- Font: Lora, 18px
- Color: #666666

**Flow Description:**
"You can start with one service and expand as your business grows."

### Visual Flow Diagram

**4-Step Process (Horizontal Flow):**

```
1. Diagnose → 2. Select → 3. Deploy → 4. Optimize
```

**Each Step Includes:**
- Number badge (circular, 48px, amber border)
- Step name (14px, uppercase, tracking-widest)
- Short description (14px, #666666)

**Arrow Connectors:**
- Thin line (1px, #EFE9E4)
- ArrowRight icon (lucide-react, 16px, amber)

### Layout Specifications

**Desktop:**
- Horizontal 4-column layout
- Equal width steps
- Connecting arrows between
- Max width: 1200px

**Tablet:**
- 2×2 grid
- Vertical arrows for connections

**Mobile:**
- Vertical stack
- Downward arrows between steps
- Full width containers

### Step Content

**Step 1: Diagnose**
- "Understand business bottlenecks"
- Icon: Search

**Step 2: Select**
- "Choose the right AI systems"
- Icon: Target

**Step 3: Deploy**
- "Integrate and implement"
- Icon: Rocket

**Step 4: Optimize**
- "Scale and improve over time"
- Icon: TrendingUp

### Success Criteria

- [ ] Flow visually clear
- [ ] Steps easy to scan
- [ ] Arrows guide eye naturally
- [ ] Responsive on all devices
- [ ] Reinforces modular approach

---

## SECTION 5 — INDUSTRY-AWARE BY DESIGN

### Content Specifications

**Section Heading:**
- "Built for Your Industry"
- Font: Playfair Display, 42-48px
- Color: #1A1A1A

**Description:**
"Each service adapts to your industry context. AI works best when it understands the business—we build for that."

### Industry Cards (4 columns)

**Card Structure:**
- Icon (industry-specific)
- Industry name (18px, 600 weight)
- 3 key use cases (bulleted, 14px)
- Subtle background (#FAF8F6)
- Border: 1px solid #EFE9E4

**Industries:**

1. **Fashion & E-commerce**
   - Conversion optimization
   - Retention campaigns
   - Marketing automation

2. **Real Estate**
   - Lead response speed
   - Qualification systems
   - Follow-up automation

3. **Events & Tourism**
   - Booking automation
   - Guest communication
   - Operational efficiency

4. **SaaS & Tech**
   - User onboarding
   - Churn reduction
   - Customer success AI

### Layout Specifications

**Desktop:**
- 4-column grid
- Gap: 24px
- Equal height cards

**Tablet:**
- 2×2 grid

**Mobile:**
- Vertical stack

### Success Criteria

- [ ] Industry relevance clear
- [ ] Use cases specific and concrete
- [ ] Not limiting (shows adaptability)
- [ ] Links to industry pages (optional)

---

## SECTION 6 — WHY SUN AI AGENCY

### Content Specifications

**Section Heading:**
- "Why Sun AI Agency"
- Font: Playfair Display, 42-48px
- Color: #1A1A1A

### 4 Key Differentiators (Grid Layout)

**Card 1: Business-First AI**
- Icon: Target
- Heading: "Business-First AI"
- Description: "Not experiments, not demos. Real solutions for real operations."

**Card 2: Clear Outcomes**
- Icon: CheckCircle
- Heading: "Clear Outcomes"
- Description: "Measurable results, not buzzwords. You'll know what success looks like."

**Card 3: Modular Systems**
- Icon: Layers
- Heading: "Modular Systems"
- Description: "Start with what you need. Expand as you grow. No forced packages."

**Card 4: Practical Design**
- Icon: Shield
- Heading: "Practical Design"
- Description: "Built for daily operations, not presentations. Systems that work."

### Layout Specifications

**Desktop:**
- 2×2 grid
- Gap: 32px
- Cards with subtle background (#FAF8F6)

**Tablet:**
- 2×2 maintained

**Mobile:**
- Vertical stack

**Card Styling:**
- Padding: 24px
- Border: 1px solid #EFE9E4
- Icon: 32px, amber
- Heading: 18px, 600 weight
- Description: 15px, #666666

### Success Criteria

- [ ] Differentiators clear and specific
- [ ] Not generic agency claims
- [ ] Reinforces "practical AI" positioning
- [ ] Builds trust without hype

---

## SECTION 7 — FINAL CALL TO ACTION

### Content Specifications

**Background:**
- Dark (#1A1A1A)
- Full-width section

**Headline:**
- "Not sure which service fits your business?"
- Font: Playfair Display, 48-60px
- Color: White

**Subheading:**
- "Start with our AI Assessment Wizard. We'll analyze your business and recommend the right systems."
- Font: Lora, 18px
- Color: #E5E5E5

**Primary CTA:**
- Text: "Start AI Assessment"
- Background: Amber (#F59E0B)
- Text color: Dark (#1A1A1A)
- Size: px-10 py-5, text-lg
- Route: `/wizard`

**Secondary CTA:**
- Text: "Book a Strategy Call"
- Style: Border button (white border)
- Text color: White
- Route: `/booking`

### Layout Specifications

**Desktop:**
- Centered content
- Max width: 900px
- Padding: py-32

**Tablet:**
- Maintained centered
- Padding: py-24

**Mobile:**
- Stack CTAs vertically
- Padding: py-20
- Full-width buttons

### Success Criteria

- [ ] Strong conversion focus
- [ ] Clear next step
- [ ] Low-friction entry point
- [ ] Reassuring tone

---

## WIREFRAME SPECIFICATIONS

### Desktop Wireframe (1440px)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (Fixed)                                              │
│ Logo | Services | How It Works | Industries | Contact      │
└─────────────────────────────────────────────────────────────┘
│                                                             │
│ HERO SECTION                                                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │        [Eyebrow: SUN AI SERVICES]                      │ │
│ │                                                         │ │
│ │  "AI systems that save time, increase revenue,         │ │
│ │   and unlock your next stage of growth"                │ │
│ │                                                         │ │
│ │  "We design and deploy practical AI solutions..."      │ │
│ │                                                         │ │
│ │  [Explore AI Solutions] [Start AI Assessment]          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ WHO THIS IS FOR                                             │
│ ┌──────────────────┬──────────────────────────────────────┐ │
│ │ "Built for       │ • Save time by automating            │ │
│ │  Growing         │ • Increase sales and conversion      │ │
│ │  Businesses"     │ • Reduce operational friction        │ │
│ │                  │ • Scale without hiring               │ │
│ │                  │ • Use AI practically                 │ │
│ └──────────────────┴──────────────────────────────────────┘ │
│                                                             │
│ SERVICES OVERVIEW (3-Column Grid)                           │
│ ┌────────────┬────────────┬────────────┐                   │
│ │ [Icon]     ��� [Icon]     │ [Icon]     │                   │
│ │ AI Web     │ AI         │ AI Agents  │                   │
│ │ Apps       │ Chatbots   │ & Auto.    │                   │
│ │            │            │            │                   │
│ │ Description│ Description│ Description│                   │
│ │ Best for..│ Best for..│ Best for..│                   │
│ │ Impact:... │ Impact:... │ Impact:... │                   │
│ │ [View →]   │ [View →]   │ [View →]   │                   │
│ └────────────┴────────────┴────────────┘                   │
│ ┌────────────┬────────────┬────────────┐                   │
│ │ Sales &    │ Analytics  │ Custom     │                   │
│ │ Marketing  │ & BI       │ Integr.    │                   │
│ │ ...        │ ...        │ ...        │                   │
│ └────────────┴────────────┴────────────┘                   │
│                                                             │
│ HOW SERVICES WORK TOGETHER                                  │
│ ┌──────��───┬──────┬───┬──────┬───┬──────┐                 │
│ │  1   │ → │  2   │ → │  3   │ → │  4   │                 │
│ │Diagn.│   │Select│   │Deploy│   │Optim.│                 │
│ └──────┴───┴──────┴───┴──────┴───┴──────┘                 │
│                                                             │
│ INDUSTRY AWARE (4-Column Grid)                              │
│ ┌────────┬────────┬────────┬────────┐                      │
│ │Fashion │Real    │Events  │SaaS    │                      │
│ │E-comm  │Estate  │Tourism │Tech    │                      │
│ │• ...   │• ...   │• ...   │• ...   │                      │
│ └────────┴────────┴────────┴────────┘                      │
│                                                             │
│ WHY SUN AI (2×2 Grid)                                       │
│ ┌────────────────┬────────────────┐                        │
│ │Business-First  │Clear Outcomes  ��                        │
│ └────────────────┴────────────────┘                        │
│ ┌────────────────┬────────────────┐                        │
│ │Modular Systems │Practical Design│                        │
│ └────────────────┴────────────────┘                        │
│                                                             │
│ FINAL CTA (Dark Background)                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Not sure which service fits your business?"           │ │
│ │                                                         │ │
│ │ [Start AI Assessment] [Book Strategy Call]             │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ FOOTER                                                      │
└────────────��────────────────────────────────────────────────┘
```

### Tablet Wireframe (768px)

```
┌───────────────────────────────┐
│ HEADER (Hamburger Menu)       │
└───────────────────────────────┘
│                               │
│ HERO (Centered, Reduced)      │
│                               │
│ WHO THIS IS FOR               │
│ (Single Column)               │
│                               │
│ SERVICES (2-Column Grid)      │
│ ┌─────────┬─────────┐         │
│ │ Card 1  │ Card 2  │         │
│ └─────────┴─────────┘         │
│ ┌─────────┬─────────┐         │
│ │ Card 3  │ Card 4  │         │
│ └─────────┴─────────┘         │
│ ┌─────────┬─────────┐         │
│ │ Card 5  │ Card 6  │         │
│ └─────────┴─────────┘         │
│                               │
│ HOW IT WORKS (2×2 Grid)       │
│                               │
│ INDUSTRY (2×2 Grid)           │
│                               │
│ WHY SUN AI (2×2 Grid)         │
│                               │
│ FINAL CTA                     │
│                               │
│ FOOTER                        │
└───────────────────────────────┘
```

### Mobile Wireframe (375px)

```
┌─────────────────┐
│ [☰] Logo        │
└─────────────────┘
│                 │
│ HERO            │
│ (Centered)      │
│                 │
│ [CTA]           │
│ [CTA]           │
│                 │
│ WHO THIS IS FOR │
│ (Stacked)       │
│                 │
│ SERVICES        │
│ ┌─────────────┐ │
│ │ Card 1      │ │
│ └─────────────┘ │
│ ┌─────────────┐ │
│ │ Card 2      │ │
│ └─────────────┘ │
│ ┌─────────────┐ │
│ │ Card 3      │ │
│ └─────────────┘ │
│ ┌─────────────┐ │
│ │ Card 4      │ │
│ └─────────────┘ │
│ ┌─────────────┐ │
│ │ Card 5      │ │
│ └─────────────┘ │
│ ┌─────────────┐ │
│ │ Card 6      │ │
│ └─────────────┘ │
│                 │
│ HOW IT WORKS    │
│ (Vertical)      │
│                 │
│ INDUSTRY        │
│ (Stacked)       │
│                 │
│ WHY SUN AI      │
│ (Stacked)       │
│                 │
│ FINAL CTA       │
│                 │
│ FOOTER          │
└─────────────────┘
```

---

## RESPONSIVE DESIGN BEST PRACTICES

### Mobile Optimization (Critical)

**Touch Targets:**
- Minimum 44px × 44px for all tappable elements
- Service cards: Full width, minimum 60px tap height for "View details" link
- CTAs: Full width buttons with py-4 minimum

**Typography Scaling:**
- H1: 36px (mobile) → 72px (desktop)
- H2: 28px (mobile) → 48px (desktop)
- Body: 16px (all breakpoints, adjust line-height)

**Spacing:**
- Section padding: py-16 (mobile) → py-32 (desktop)
- Card gaps: gap-4 (mobile) → gap-8 (desktop)
- Container padding: px-6 (mobile) → px-16 (desktop)

**Service Cards Mobile:**
- Stack vertically with space-y-4
- Maintain card padding (p-6 minimum)
- Icon size reduced to 40px
- "View details" link prominent (16px, bold)

### Tablet Optimization

**Breakpoint:** 768px - 1023px

**Grid Adjustments:**
- Service cards: 2 columns
- Industry cards: 2 columns
- How It Works: 2×2 grid
- Why Sun AI: 2×2 maintained

**Typography:**
- H1: 48px
- H2: 36px
- Adjust max-width containers to 90%

### Desktop Optimization

**Breakpoint:** 1024px+

**Max Widths:**
- Hero content: 900px
- Section containers: 1200px
- Paragraph text: 700px

**Grid Layouts:**
- Service cards: 3 columns
- Industry: 4 columns
- How It Works: Horizontal 4-step
- Why Sun AI: 2×2 grid

---

## ANIMATION & INTERACTION SPECS

### Scroll Animations (Motion/React)

**Service Cards:**
```typescript
// Stagger animation on scroll into view
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

**Section Reveals:**
- Fade in with subtle upward movement (y: 20 → 0)
- Stagger child elements by 100ms
- Trigger when 20% in viewport

### Hover States

**Service Cards:**
- Border color: #EFE9E4 → #F59E0B
- Transform: translateY(0) → translateY(-4px)
- Transition: 200ms ease
- No shadow changes (editorial style)

**CTA Buttons:**
- Primary (Amber): bg-[#F59E0B] → bg-[#FCD34D]
- Secondary (Border): bg-transparent → bg-[#1A1A1A], text inverts
- Transition: 200ms ease

**"View details" Links:**
- Color: #1A1A1A → #F59E0B
- Arrow icon: translateX(0) → translateX(4px)

---

## NAVIGATION & FOOTER INTEGRATION

### Header Navigation Updates

Add to main navigation:
```
Services → Dropdown menu:
  - AI Web Applications
  - AI Chatbots
  - AI Agents & Automations
  - Sales & Marketing Automation
  - AI Analytics & BI
  - Custom AI Integrations
```

### Footer Updates

Add "Services" column:
```
SERVICES
- AI Web Applications → /services/ai-web-apps
- AI Chatbots → /services/chatbots
- AI Agents → /services/ai-agents
- Sales Automation → /services/sales-automation
- Analytics & BI → /services/analytics
- Custom Integrations → /services/custom-ai
```

---

## SERVICE DETAIL PAGE TEMPLATE (FUTURE)

### Route Pattern
`/services/[service-slug]`

### Required Sections (Standardized)
1. Hero (service name + one-line benefit)
2. What It Does (detailed explanation)
3. Who It's For (target users/businesses)
4. How It Works (3-5 steps)
5. Business Outcomes (measurable benefits)
6. Use Cases (3-4 real scenarios)
7. Technology Stack (optional, non-technical)
8. Pricing Approach (transparent, no hard numbers)
9. Next Steps (CTA to wizard or booking)

### Template Specifications
- Reuse Calm Luxury style guide
- Consistent layout across all detail pages
- Modular sections for easy updates
- Each page links back to main services page

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Core Structure
- [ ] Create `ServicesPageV11.tsx` component
- [ ] Implement hero section
- [ ] Build "Who This Is For" section
- [ ] Create reusable ServiceCard component
- [ ] Implement service cards grid (all 6 cards)
- [ ] Verify all routes link correctly

### Phase 2: Supporting Sections
- [ ] Build "How Services Work Together" flow
- [ ] Create industry cards section
- [ ] Implement "Why Sun AI" differentiators
- [ ] Add final CTA section
- [ ] Integrate FooterV11

### Phase 3: Responsive & Polish
- [ ] Test mobile layout (375px, 414px)
- [ ] Test tablet layout (768px, 1024px)
- [ ] Test desktop layout (1440px, 1920px)
- [ ] Verify touch targets on mobile
- [ ] Test all links and navigation
- [ ] Check scroll animations

### Phase 4: Content & Copy
- [ ] Finalize all copy with stakeholder
- [ ] Proofread for typos
- [ ] Verify tone consistency (business-first, no hype)
- [ ] Check all CTAs are clear

### Phase 5: Performance
- [ ] Lazy load images/illustrations
- [ ] Optimize scroll animations (60fps)
- [ ] Test page load time (<2s)
- [ ] Run Lighthouse audit (score >90)

### Phase 6: Route Integration
- [ ] Add route to `routes/index.tsx`
- [ ] Create wrapper in `MarketingPageWrappers.tsx`
- [ ] Update footer links
- [ ] Test navigation from all pages

---

## SUCCESS METRICS

### User Engagement
- [ ] Average time on page >90 seconds
- [ ] Scroll depth >70% of users reach service cards
- [ ] Click-through rate to detail pages >15%

### Conversion
- [ ] CTA click rate >8%
- [ ] Wizard starts from this page >5%
- [ ] Booking clicks >3%

### Technical
- [ ] Page load <2s (3G connection)
- [ ] Lighthouse performance >90
- [ ] Zero console errors
- [ ] Mobile usability score: 100

### Content Clarity
- [ ] User feedback: "I understand what you offer"
- [ ] Low bounce rate (<40%)
- [ ] High scroll engagement

---

## NATURAL LANGUAGE DESIGN PROMPT (FOR AI IMPLEMENTATION)

**Context:**
You are building a premium AI agency services overview page. The page must feel luxurious, intelligent, and trustworthy while clearly explaining technical services in business terms.

**Style:**
- Calm Luxury Editorial aesthetic
- Warm off-white backgrounds (#FDFCFB)
- Amber accents (#F59E0B) sparingly
- Playfair Display for headings
- Generous whitespace
- Square corners on all elements
- Clean 1px borders (#EFE9E4)

**Layout:**
- Hero section: Centered, clear value proposition
- Service cards: 3-column responsive grid (6 cards total)
- Each card links to detail page
- Progressive disclosure: Overview → Detail pages
- Dark CTA section at bottom

**Tone:**
- Business-first, not technical
- Confident without hype
- Clear benefits over features
- Reassuring and practical

**Key Elements:**
1. Clear service names (not jargon)
2. One-line benefits (what you get)
3. "Best for" targeting (who needs this)
4. "Business impact" outcomes (measurable value)
5. "View details" CTAs (clear next step)

**Responsive:**
- Mobile: Vertical stack, full-width cards
- Tablet: 2-column grid
- Desktop: 3-column grid
- Touch targets: 44px minimum

**Animations:**
- Subtle scroll reveals
- Card hover: Border color + slight lift
- Stagger children by 100ms
- 60fps smooth

**Avoid:**
- Jargon and buzzwords
- Generic claims ("best in class")
- Cluttered layouts
- Rounded corners (editorial = square)
- Heavy shadows

**Goal:**
Users should immediately understand:
1. What you offer (6 clear services)
2. Who it's for (their business type)
3. What they get (tangible outcomes)
4. What to do next (clear CTAs)

---

## NOTES FOR DESIGNERS

### Visual Hierarchy Priorities

1. **Primary:** Service names and one-line benefits
2. **Secondary:** Card descriptions and "Best for" sections
3. **Tertiary:** Labels and metadata
4. **CTAs:** "View details" links and final CTAs

### Spacing Ratios

- Section gaps: 128px (desktop), 80px (mobile)
- Card gaps: 32px (desktop), 16px (mobile)
- Internal card spacing: 24px between elements
- Text line spacing: 1.6 for body, 1.1 for headings

### Color Usage Guidelines

**Amber (#F59E0B):**
- Primary CTAs only
- "Business Impact" text
- Active/hover states
- Never for large backgrounds

**Dark (#1A1A1A):**
- Headings
- Body text
- Final CTA section background
- Icons (alternating with amber)

**Neutral Grays:**
- #666666: Body text, descriptions
- #999999: Labels, metadata
- #EFE9E4: Borders, dividers

### Typography Hierarchy

**Level 1 (Page Title):**
- Playfair Display, 60-72px, 700 weight
- Used once per page (hero only)

**Level 2 (Section Headings):**
- Playfair Display, 42-48px, 600 weight
- Used for major sections

**Level 3 (Card Titles):**
- Playfair Display, 24px, 600 weight
- Service names

**Level 4 (Subsections):**
- Inter, 18px, 600 weight
- Rare usage

**Body Text:**
- Inter, 15-16px, 400 weight
- Line height: 1.6

**Labels:**
- Inter, 10-12px, 700 weight
- Uppercase, tracking-widest

---

## VERSION HISTORY

**V11 (Current)**
- Initial services overview page
- 6 service cards defined
- Routes mapped for detail pages
- Calm Luxury style applied

**Future Versions:**
- V11.1: Add service detail pages
- V11.2: Add interactive comparison tool
- V11.3: Add pricing transparency section

---

**END OF DOCUMENT**

**Total Sections:** 7 main sections  
**Total Service Cards:** 6  
**Total Detail Pages (Planned):** 6  
**Responsive Breakpoints:** 3 (mobile, tablet, desktop)  
**Animation Library:** Motion/React  
**Design System:** Calm Luxury Editorial V11

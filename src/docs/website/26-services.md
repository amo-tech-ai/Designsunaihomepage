# Services Page - Design Specification
## Luxury AI CRM Services Showcase

**Document Type:** Multi-Step Design Prompts  
**Design System:** FashionOS Quiet Luxury  
**Page Type:** Main Services Directory  
**Status:** Design Specification  
**Date:** December 31, 2024

---

## 🎯 Design Brief

**Objective:** Create a premium services showcase page that presents AI-powered CRM services with editorial luxury aesthetic, making complex offerings feel approachable and high-value.

**Design Principles:**
- Quiet luxury with generous whitespace
- Serif headlines (Playfair Display) for service names
- Sans body text (Inter) for descriptions
- Service cards as "boutique experiences"
- Clear visual hierarchy
- Mobile-first responsive design

---

## 📐 Page Structure (7 Sections)

```
1. Hero Section (Above fold)
2. Services Overview Grid (6-8 cards)
3. Featured Service Spotlight (Rotating)
4. Service Categories (3 pillars)
5. Process Timeline (How it works)
6. Pricing Tiers (Optional)
7. CTA Footer (Get started)
```

---

## 🎨 STEP 1: Hero Section

### Visual Description

**Layout:** Full-width centered hero with subtle gradient background

**Elements:**
- **Headline:** Large serif text (Playfair Display), centered, black color
  - Primary: "Intelligence-First CRM Services"
  - Secondary tagline: "AI that works for your business, not against it"
  - Font sizes: 72px desktop / 48px mobile
  
- **Subheadline:** Sans-serif (Inter), light weight, zinc-600 color
  - Max width: 600px, centered
  - "Zero manual data entry. Zero busywork. Pure strategic leverage."
  
- **Visual Element:** Abstract geometric shapes or subtle gradient blob
  - Off-white (#FCFCFC) to very light indigo gradient
  - Positioned behind text, non-intrusive
  - Glassmorphism effect: semi-transparent, soft blur
  
- **CTA Buttons:** Two pill-shaped buttons, centered
  - Primary: Black background, white text, "Explore Services"
  - Secondary: White background, thin border, "Book Consultation"
  - Spacing: 16px gap between buttons

**Spacing:**
- Top padding: 120px desktop / 80px mobile
- Bottom padding: 120px desktop / 80px mobile
- Content max-width: 1200px

---

## 🎨 STEP 2: Services Overview Grid

### Visual Description

**Layout:** Responsive grid of service cards

**Grid Structure:**
- Desktop: 3 columns
- Tablet: 2 columns  
- Mobile: 1 column
- Gap between cards: 32px
- Container padding: 48px sides

**Service Card Design (Maison Style):**

Each card is a white rounded rectangle with:
- Border radius: 40px
- Padding: 40px
- Height: Auto (content-driven)
- Border: 1px solid #EEEEEE
- Hover state: Subtle shadow lift, slight scale (1.02)
- Transition: Smooth 300ms

**Card Content Structure:**

1. **Icon Area (Top)**
   - Icon size: 24px, indigo-500 color
   - Background: Light indigo circle (64px diameter)
   - Centered in circle

2. **Service Name (Headline)**
   - Playfair Display, 24px, black
   - Margin bottom: 12px
   - Center-aligned

3. **Description**
   - Inter font, 14px, light weight
   - Color: zinc-600
   - Line height: 1.6 (relaxed)
   - Max 2-3 lines
   - Center-aligned

4. **Feature Pills (Optional)**
   - Small rounded pills showing key features
   - Background: gray-50
   - Text: 10px, uppercase, tracking-wide
   - Horizontal scroll on mobile
   - Example: "AI-POWERED" "ZERO SETUP" "24/7 ACTIVE"

5. **CTA Link**
   - Text: "Learn More →"
   - Color: black, underline on hover
   - Font: 12px, uppercase, tracking-wide
   - Positioned at bottom

**Visual Hierarchy:**
- Icon + background (most prominent)
- Service name (secondary focus)
- Description (supporting)
- Feature pills (tertiary)
- CTA (subtle invitation)

---

## 📋 Main Services List (8 Core Services)

### Service 1: Post-Call Action Architect
**Icon:** Phone with sparkles  
**Description:** Transform sales calls into automated action sequences with AI-powered insight extraction and workflow triggers.  
**Features:** Call transcription, Action extraction, Auto-scheduling

### Service 2: Natural Language Command Bar
**Icon:** Search with magic wand  
**Description:** Query your entire CRM using plain English. No SQL, no filters, just ask and receive instant intelligence.  
**Features:** Plain English queries, Instant results, Context-aware

### Service 3: Lead Intelligence Engine
**Icon:** Brain with network nodes  
**Description:** Automatic lead scoring, enrichment, and prioritization powered by neural networks and real-time data.  
**Features:** Auto-scoring, Data enrichment, Priority alerts

### Service 4: WhatsApp Automation Suite
**Icon:** Message bubble with lightning bolt  
**Description:** 24/7 intelligent response system that qualifies leads, schedules viewings, and handles inquiries autonomously.  
**Features:** Auto-reply, Lead qualification, Smart scheduling

### Service 5: Blueprint Generation System
**Icon:** Blueprint/drafting compass  
**Description:** AI generates complete project blueprints from brief descriptions, including tasks, timelines, and resource allocation.  
**Features:** Auto-generation, Task breakdown, Timeline creation

### Service 6: Sentiment Analysis Monitor
**Icon:** Heart rate monitor  
**Description:** Real-time emotional intelligence tracking across all client communications to identify opportunities and risks.  
**Features:** Emotion tracking, Risk detection, Opportunity flagging

### Service 7: Automated Workflow Orchestrator
**Icon:** Connected nodes/flowchart  
**Description:** Self-optimizing workflows that adapt based on success patterns and business outcomes.  
**Features:** Auto-optimization, Pattern learning, Smart triggers

### Service 8: Intelligence Dashboard Hub
**Icon:** Dashboard with sparkles  
**Description:** Executive-grade visual intelligence with real-time metrics, predictive insights, and actionable recommendations.  
**Features:** Real-time metrics, Predictions, Recommendations

---

## 🎨 STEP 3: Featured Service Spotlight

### Visual Description

**Layout:** Full-width alternating content blocks (image left/right)

**Structure:**

**Block 1 (Image Left, Content Right):**
- Left side: Large screenshot or illustration (50% width)
  - Rounded corners: 40px
  - Subtle shadow
  - Image: Dashboard/interface mockup
  
- Right side: Content (50% width)
  - Label: "FEATURED SERVICE" (10px, uppercase, tracking-wide, indigo-500)
  - Headline: Service name in Playfair, 48px, black
  - Description: 2-3 paragraphs, Inter 16px, zinc-600
  - Feature list: 4-5 bullet points with checkmark icons
  - CTA button: "Explore Feature →" (pill button)

**Block 2 (Content Left, Image Right):**
- Mirror layout of Block 1
- Different service showcase

**Spacing:**
- Vertical padding between blocks: 120px desktop / 80px mobile
- Content padding from image: 80px desktop / 40px mobile

**Visual Treatment:**
- Background: Alternating white / off-white (#FCFCFC)
- Each block has breathing room
- Images use subtle border (1px #EEEEEE)

---

## 🎨 STEP 4: Service Categories (3 Pillars)

### Visual Description

**Layout:** Three equal-width columns with icon headers

**Column Structure:**

Each pillar is a vertical card:
- Width: 33.33% desktop / 100% mobile
- Padding: 48px
- Background: White
- Border radius: 40px
- Border: 1px solid #EEEEEE
- Gap between columns: 24px

**Content per Pillar:**

1. **Category Icon**
   - Large icon: 32px
   - Color: indigo-500
   - Background circle: 80px diameter, indigo-50
   - Centered

2. **Category Name**
   - Playfair Display, 28px, black
   - Margin bottom: 16px
   - Center-aligned

3. **Category Description**
   - Inter, 14px, light, zinc-600
   - 2-3 sentences
   - Center-aligned
   - Margin bottom: 24px

4. **Services in Category**
   - Vertical list of 2-4 services
   - Each service: small icon + name
   - Icon size: 16px, zinc-400
   - Name: 12px, zinc-700
   - Left-aligned within card
   - Spacing: 12px between items

**Three Categories:**

1. **Intelligence & Automation**
   - Post-Call Action Architect
   - Natural Language Command Bar
   - Automated Workflow Orchestrator

2. **Lead & Client Management**
   - Lead Intelligence Engine
   - WhatsApp Automation Suite
   - Sentiment Analysis Monitor

3. **Planning & Analytics**
   - Blueprint Generation System
   - Intelligence Dashboard Hub

---

## 🎨 STEP 5: Process Timeline (How It Works)

### Visual Description

**Layout:** Horizontal timeline with 4 steps

**Desktop Layout:**
- Horizontal flow, left to right
- Steps connected by dotted line
- Each step is a circle with content below

**Mobile Layout:**
- Vertical stack
- Steps connected by vertical dotted line

**Step Design:**

Each step contains:

1. **Number Circle**
   - Size: 80px diameter
   - Background: indigo-500 (active) or gray-100 (inactive)
   - Number: Playfair, 32px, white (active) or zinc-400
   - Centered

2. **Step Title**
   - Playfair, 20px, black
   - Below circle
   - Margin top: 24px

3. **Step Description**
   - Inter, 14px, light, zinc-600
   - Max width: 240px
   - 2 lines max

**Four Steps:**

1. **Discover**
   - "Explore our AI-powered services and identify your needs"
   
2. **Configure**
   - "Customize workflows and intelligence parameters for your business"
   
3. **Activate**
   - "AI begins learning your patterns and automating processes"
   
4. **Optimize**
   - "Continuous improvement through machine learning and feedback"

**Connector Line:**
- Style: 2px dotted
- Color: zinc-300
- Positioned between circles

---

## 🎨 STEP 6: Pricing Tiers (Optional)

### Visual Description

**Layout:** Three pricing cards, side by side

**Card Structure:**

Each pricing tier card:
- Width: Equal (33.33% desktop / 100% mobile)
- Background: White
- Border radius: 40px
- Border: 1px solid #EEEEEE
- Padding: 48px
- Gap: 24px between cards

**Recommended Tier (Middle):**
- Slightly larger scale (1.05)
- Border: 2px solid indigo-500
- Subtle shadow
- "RECOMMENDED" badge at top

**Card Content:**

1. **Tier Badge** (Top)
   - Small pill badge
   - Background: gray-50 / indigo-50 (recommended)
   - Text: 10px, uppercase, tracking-wide

2. **Tier Name**
   - Playfair, 32px, black
   - Center-aligned

3. **Price**
   - Playfair, 56px, black
   - Center-aligned
   - Margin bottom: 8px
   - Format: "$XXX/mo"

4. **Billing Cycle**
   - Inter, 12px, zinc-500
   - "Billed monthly" or "Billed annually"

5. **Feature List**
   - Vertical list
   - Checkmark icon + feature name
   - Icon: 14px, emerald-500
   - Text: 14px, Inter, zinc-700
   - Spacing: 16px between items
   - 6-8 features

6. **CTA Button**
   - Full-width pill button
   - Height: 48px
   - Text: "Get Started" or "Choose Plan"
   - Recommended tier: indigo-500 background
   - Others: white background, black border

**Three Tiers:**

1. **Starter**
   - Entry-level automation
   - 2-3 services included
   - Basic support

2. **Professional** (Recommended)
   - Full service suite
   - 6-8 services included
   - Priority support
   - Custom workflows

3. **Enterprise**
   - Unlimited usage
   - All services + custom
   - Dedicated account manager
   - White-glove onboarding

---

## 🎨 STEP 7: CTA Footer Section

### Visual Description

**Layout:** Full-width centered call-to-action

**Background:**
- Gradient: Subtle indigo-50 to white
- OR solid off-white (#FCFCFC)
- Padding: 120px vertical, 48px horizontal

**Content Structure:**

1. **Pre-headline**
   - Text: "READY TO TRANSFORM YOUR CRM"
   - Font: 10px, uppercase, tracking-wide
   - Color: indigo-500
   - Center-aligned

2. **Main Headline**
   - Playfair Display, 56px, black
   - "Start with Intelligence"
   - Center-aligned
   - Margin bottom: 16px

3. **Supporting Text**
   - Inter, 18px, light, zinc-600
   - "Book a 30-minute strategy session to discover which services fit your business"
   - Max width: 600px, centered
   - Margin bottom: 32px

4. **CTA Buttons**
   - Two buttons, side by side
   - Primary: "Book Strategy Session" (black bg, white text)
   - Secondary: "View Pricing" (white bg, black border)
   - Button size: 56px height, generous padding
   - Gap: 16px

5. **Trust Indicators** (Optional)
   - Small text below buttons
   - "No credit card required • 30-day guarantee • Cancel anytime"
   - Font: 12px, zinc-500
   - Center-aligned

---

## 📱 Responsive Breakpoints

### Desktop (≥1200px)
- 3-column service grid
- Horizontal timeline
- Side-by-side pricing cards
- Full-width hero

### Tablet (768px - 1199px)
- 2-column service grid
- Horizontal timeline (smaller)
- 2-column pricing (third wraps)
- Reduced padding (32px → 24px)

### Mobile (<768px)
- 1-column service grid
- Vertical timeline
- Stacked pricing cards
- Reduced font sizes (72px → 48px headlines)
- Reduced padding (48px → 24px)
- Buttons stack vertically

---

## 🎨 Visual Design Tokens

### Typography Scale
- **Hero headline:** 72px desktop / 48px mobile (Playfair)
- **Section headline:** 48px desktop / 32px mobile (Playfair)
- **Card headline:** 24px (Playfair)
- **Body large:** 18px (Inter)
- **Body standard:** 14px (Inter)
- **Labels:** 10px uppercase tracking-wide (Inter)

### Color Palette
- **Primary text:** #000000 (pure black)
- **Secondary text:** #52525B (zinc-600)
- **Tertiary text:** #A1A1AA (zinc-400)
- **Accent:** #6366F1 (indigo-500)
- **Success:** #10B981 (emerald-500)
- **Background:** #FFFFFF (white)
- **Surface:** #FCFCFC (off-white)
- **Border:** #EEEEEE (gray-200)

### Spacing Scale
- **XXL:** 120px (section padding desktop)
- **XL:** 80px (section padding tablet)
- **L:** 48px (card padding, content spacing)
- **M:** 32px (grid gaps)
- **S:** 24px (element spacing)
- **XS:** 16px (tight spacing)
- **XXS:** 8px (minimal spacing)

### Border Radius
- **Primary cards:** 40px
- **Secondary cards:** 32px
- **Buttons:** Full (pill shape)
- **Images:** 40px
- **Badges:** Full (pill shape)

---

## 🎯 Design Goals Checklist

**Visual Impact:**
- [ ] Hero immediately communicates value proposition
- [ ] Service cards feel premium and approachable
- [ ] Clear visual hierarchy throughout
- [ ] Generous whitespace creates luxury feel
- [ ] Serif/sans typography creates editorial quality

**User Experience:**
- [ ] Services are scannable at a glance
- [ ] Clear path from overview → detail pages
- [ ] Process timeline reduces anxiety
- [ ] Pricing is transparent (if shown)
- [ ] Multiple CTAs at different commitment levels

**Brand Alignment:**
- [ ] FashionOS quiet luxury aesthetic
- [ ] Playfair serif for high-level concepts
- [ ] Inter sans for utility/data
- [ ] Indigo signals AI/intelligence
- [ ] Premium feel without being ostentatious

**Responsive Design:**
- [ ] Mobile-first grid system
- [ ] Touch-friendly button sizes (min 44px)
- [ ] Readable font sizes on all devices
- [ ] Optimized image loading
- [ ] Smooth transitions between breakpoints

---

## 🔗 Service Detail Page Links

Each service card links to dedicated detail page:

- `/services/post-call-action-architect`
- `/services/natural-language-command-bar`
- `/services/lead-intelligence-engine`
- `/services/whatsapp-automation-suite`
- `/services/blueprint-generation-system`
- `/services/sentiment-analysis-monitor`
- `/services/automated-workflow-orchestrator`
- `/services/intelligence-dashboard-hub`

---

## 📐 Wireframe ASCII Art

```
┌─────────────────────────────────────────────────────────────┐
│                        HERO SECTION                          │
│                                                              │
│              Intelligence-First CRM Services                 │
│          AI that works for your business, not against it     │
│                                                              │
│         Zero manual data entry. Zero busywork. Pure...       │
│                                                              │
│         [ Explore Services ]  [ Book Consultation ]          │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│                   SERVICES OVERVIEW GRID                       │
│                                                                │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │  [Icon]  │     │  [Icon]  │     │  [Icon]  │              │
│  │          │     │          │     │          │              │
│  │ Service  │     │ Service  │     │ Service  │              │
│  │  Name    │     │  Name    │     │  Name    │              │
│  │          │     │          │     │          │              │
│  │Description│    │Description│    │Description│             │
│  │ text here │    │ text here │    │ text here │             │
│  │          │     │          │     │          │              │
│  │[AI][24/7]│     │[AI][24/7]│     │[AI][24/7]│             │
│  │          │     │          │     │          │              │
│  │Learn More│     │Learn More│     │Learn More│              │
│  └──────────┘     └──────────┘     └──────────┘              │
│                                                                │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │  [Icon]  │     │  [Icon]  │     │  [Icon]  │              │
│  │ Service 4│     │ Service 5│     │ Service 6│              │
│  └──────────┘     └──────────┘     └──────────┘              │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                  FEATURED SERVICE SPOTLIGHT                     │
│                                                                 │
│  ┌─────────────────┐    ┌──────────────────────────────┐       │
│  │                 │    │  FEATURED SERVICE             │       │
│  │   Dashboard     │    │                               │       │
│  │   Screenshot    │    │  Post-Call Action Architect   │       │
│  │                 │    │                               │       │
│  │                 │    │  Transform sales calls into   │       │
│  │                 │    │  automated action sequences...│       │
│  │                 │    │                               │       │
│  └─────────────────┘    │  ✓ Call transcription        │       │
│                         │  ✓ Action extraction          │       │
│                         │  ✓ Auto-scheduling            │       │
│                         │                               │       │
│                         │  [ Explore Feature → ]        │       │
│                         └───────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    SERVICE CATEGORIES                            │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   [Icon]     │  │   [Icon]     │  │   [Icon]     │          │
│  │              │  │              │  │              │          │
│  │Intelligence &│  │  Lead & Client│ │Planning &    │          │
│  │ Automation   │  │  Management  │  │ Analytics    │          │
│  │              │  │              │  │              │          │
│  │ Description  │  │ Description  │  │ Description  │          │
│  │ text here... │  │ text here... │  │ text here... │          │
│  │              │  │              │  │              │          │
│  │ • Service 1  │  │ • Service 1  │  │ • Service 1  │          │
│  │ • Service 2  │  │ • Service 2  │  │ • Service 2  │          │
│  │ • Service 3  │  │ • Service 3  │  │              │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                      PROCESS TIMELINE                             │
│                                                                   │
│     ①  ............  ②  ............  ③  ............  ④          │
│  Discover          Configure        Activate         Optimize     │
│                                                                   │
│  Explore our       Customize        AI begins        Continuous   │
│  services and      workflows for    learning your    improvement  │
│  identify needs    your business    patterns         via ML       │
└───────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────┐
│                         PRICING TIERS                              │
│                                                                    │
│   ┌─────────┐      ┌──────────────┐      ┌─────────┐             │
│   │ STARTER │      │ PROFESSIONAL │      │ENTERPRISE│             │
│   │         │      │ RECOMMENDED  │      │         │             │
│   │  $299   │      │    $799      │      │ Custom  │             │
│   │  /month │      │   /month     │      │         │             │
│   │         │      │              │      │         │             │
│   │ ✓ Basic │      │ ✓ Full Suite│      │ ✓ All + │             │
│   │ ✓ 2-3   │      │ ✓ 6-8 Svc   │      │ ✓ Custom│             │
│   │   Svc   │      │ ✓ Priority  │      │ ✓ Dedic.│             │
│   │         │      │              │      │   AM    │             │
│   │[Choose] │      │[Get Started] │      │[Contact]│             │
│   └─────────┘      └──────────────┘      └─────────┘             │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                         CTA FOOTER                                  │
│                                                                     │
│                   READY TO TRANSFORM YOUR CRM                       │
│                                                                     │
│                    Start with Intelligence                          │
│                                                                     │
│          Book a 30-minute strategy session to discover              │
│              which services fit your business                       │
│                                                                     │
│          [ Book Strategy Session ]  [ View Pricing ]                │
│                                                                     │
│         No credit card required • 30-day guarantee                  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## ✨ Implementation Notes

**Design-to-Development Handoff:**
1. Use these prompts to create high-fidelity mockups (Figma/Sketch)
2. Export assets at 2x and 3x for retina displays
3. Ensure all interactive states are documented (hover, active, disabled)
4. Provide component specifications for developers
5. Include animation timing specs (300ms smooth transitions)

**Accessibility Considerations:**
- Minimum contrast ratio: 4.5:1 for body text
- Touch targets: Minimum 44x44px
- Keyboard navigation: Logical tab order
- Screen reader: Proper heading hierarchy (H1 → H6)
- Focus states: Visible outline on interactive elements

**Performance Optimization:**
- Lazy load below-fold images
- Use WebP format with JPG fallback
- Optimize icon SVGs (inline or sprite sheet)
- Defer non-critical CSS
- Progressive image loading (blur-up technique)

---

## 📊 Success Metrics

**User Engagement:**
- Time on page: Target 2-3 minutes
- Scroll depth: 80%+ reach pricing/CTA
- Click-through rate: 15%+ on service cards
- Conversion rate: 5%+ book consultation

**Design Quality:**
- Mobile usability score: 95+
- Page speed: <2s load time
- Accessibility score: WCAG AA compliant
- Visual consistency: 100% brand alignment

---

**END OF DESIGN SPECIFICATION**

*Ready for mockup creation, prototyping, and development handoff.*

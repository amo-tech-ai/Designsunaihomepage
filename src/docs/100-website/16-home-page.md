# Home Page V11 - Wireframe & Design Specification

## Document Status
- **Version:** V11 (Calm Luxury Design System)
- **Status:** ✅ Production Ready
- **Last Updated:** 2026-01-17
- **Design System:** V14 Style Guide Aligned

---

## Page Structure Overview

### Content Flow (12 Sections)
1. **Hero** - Above-the-fold value proposition
2. **Trusted By** - Social proof logos
3. **How It Works** - 4-step process with animations
4. **Services Grid** - 9 service offerings
5. **Transformation** - Lead capture form
6. **Results** - Data visualization charts
7. **Pillars** - 3 core differentiators
8. **Timeline** - 5-phase process breakdown
9. **Pricing** - 3 investment tiers
10. **Project Brief** - Secondary CTA
11. **Final CTA** - Conversion section
12. **Footer** - Navigation & links

---

## Section Wireframes

### 01. Hero Section

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ [Background: Subtle grid pattern]               │
│                                                  │
│ ┌───────────────┐  ┌───────────────┐           │
│ │ LEFT COLUMN   │  │ RIGHT COLUMN  │           │
│ │               │  │               │           │
│ │ • Badge       │  │ • Stats Card  │           │
│ │ • H1          │  │   - 25+ AI    │           │
│ │ • Body        │  │   - 6+ Agents │           │
│ │ • 2 CTAs      │  │   - 35% Save  │           │
│ │ • Trust Strip │  │               │           │
│ └───────────────┘  └───────────────┘           │
└─────────────────────────────────────────────────┘
```

#### Content Elements
1. **Badge** (Top left)
   - Text: "Production-Ready AI Systems"
   - Style: Uppercase, 10px, border, pulsing dot
   
2. **Headline** (H1)
   - Text: "Build Intelligent AI Products, Agents & Automation"
   - Lines: 3 lines on desktop
   - Font: Serif, 5xl-6xl
   
3. **Subheadline** (Paragraph)
   - Length: 2 sentences (~30 words)
   - Focus: Production-ready, multi-agent, scale
   
4. **CTAs** (Button pair)
   - Primary: "Start Your Project" + arrow icon
   - Secondary: "Talk to an Expert" + chat icon
   - Layout: Row on desktop, stack on mobile
   
5. **Trust Strip** (Bottom)
   - Label: "Trusted by innovative teams"
   - Elements: 4 logo placeholders (rectangles)
   
6. **Stats Card** (Right side)
   - 3 metrics with left border accent
   - Numbers: 25+, 6+, 35%
   - Labels: Platforms, Systems, Savings

#### Animations & Effects
- [ ] Fade-in from bottom (20px offset)
- [ ] Staggered delays (badge → headline → body → CTAs)
- [ ] Pulsing dot animation on badge
- [ ] Grid pattern background (subtle, 80px squares)
- [ ] Corner decorative elements on stats card
- [ ] Smooth ease curve: [0.16, 1, 0.3, 1]

---

### 02. Trusted By Section

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│                 TRUSTED BY                       │
│                                                  │
│    [Label: uppercase small text]                │
│                                                  │
│    [Logo] [Logo] [Logo] [Logo]                  │
│                                                  │
└─────────────────────────────────────────────────┘
```

#### Content Elements
1. **Label** - "Trusted by innovative teams"
2. **Logo Grid** - 4 placeholder boxes
3. **Spacing** - 8 units between logos

#### Animations & Effects
- [ ] No animation (static section)
- [ ] Border top and bottom separation

---

### 03. How It Works Section (Interactive)

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│               HOW IT WORKS                       │
│                                                  │
│ [Header + Description]                           │
│                                                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────┐│
│ │ STEP 1   │ │ STEP 2   │ │ STEP 3   │ │ ... ││
│ │ [Screen] │ │ [Screen] │ │ [Screen] │ │     ││
│ │ Title    │ │ Title    │ │ Title    │ │     ││
│ │ Desc     │ │ Desc     │ │ Desc     │ │     ││
│ └──────────┘ └──────────┘ └──────────┘ └─────┘│
│                                                  │
│ [● ● ○ ○] <- Progress dots                     │
└─────────────────────────────────────────────────┘
```

#### Content Elements (4 Steps)
1. **Step 1: Profile Wizard**
   - Screen: Form inputs, chips UI
   - Description: "Tell StartupAI what you're building..."
   
2. **Step 2: AI Readiness Analysis**
   - Screen: Score display, gap analysis
   - Description: "Get a readiness score, key gaps..."
   
3. **Step 3: Generate Materials**
   - Screen: Document cards, deck preview
   - Description: "Generate an investor deck + core docs..."
   
4. **Step 4: Daily Execution**
   - Screen: Task list, priorities
   - Description: "StartupAI turns strategy into daily priorities..."

#### Animations & Effects
- [ ] Horizontal carousel (4 steps)
- [ ] Auto-advance every 5 seconds
- [ ] Animated cursor moving on screen mockups
- [ ] Cursor positions: different per step
- [ ] Scale hover effect (1.02x)
- [ ] Smooth transitions between steps
- [ ] Progress dots indicate current step
- [ ] Fade in/out on step change

---

### 04. Services Grid Section

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              OUR SERVICES                        │
│                                                  │
│ [Header: "Expert AI Development Services"]      │
│                                                  │
│ ┌──────┐ ┌──────┐ ┌──────┐                     │
│ │  1   │ │  2   │ │  3   │                     │
│ │ Icon │ │ Icon │ │ Icon │                     │
│ │Title │ │Title │ │Title │                     │
│ │ Desc │ │ Desc │ │ Desc │                     │
│ └──────┘ └──────┘ └──────┘                     │
│                                                  │
│ ┌──────┐ ┌──────┐ ┌──────┐                     │
│ │  4   │ │  5   │ │  6   │  (3x3 grid)        │
│ └──────┘ └──────┘ └──────┘                     │
│                                                  │
│ ┌──────┐ ┌──────┐ ┌──────┐                     │
│ │  7   │ │  8   │ │  9   │                     │
│ └──────┘ └──────┘ └──────┘                     │
└─────────────────────────────────────────────────┘
```

#### Services List (9 Cards)
1. **AI MVP Development Services** - Zap icon
2. **Integrate AI into Existing Software** - Code2 icon
3. **High-Converting Landing Pages** - FileText icon
4. **AI-Powered App Development** - Smartphone icon
5. **Custom AI Tools Development** - Wrench icon
6. **Game Development** - Gamepad2 icon
7. **Enterprise Software** - Building2 icon
8. **Automation Development** - Workflow icon
9. **AI Consulting Services** - Lightbulb icon

#### Card Structure (Each)
- Icon (top, 24px size)
- Title (h3, bold, 18px)
- Description (2 sentences, 60-80 words)
- Border on normal state
- Background: white

#### Animations & Effects
- [ ] Fade up on scroll (whileInView)
- [ ] Stagger delay: 150ms per card
- [ ] Hover: Border color change to black
- [ ] Hover: Slight lift (translate -2px)
- [ ] Icon color change on hover (accent color)

---

### 05. Transformation Section (Lead Form)

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ [Dark background #1A1A1A]                       │
│                                                  │
│ ┌────────────────┐  ┌────────────────┐         │
│ │ LEFT: Header   │  │ RIGHT: Form    │         │
│ │               │  │               │         │
│ │ "Start your   │  │ [Dropdown 1]   │         │
│ │  AI trans-    │  │ [Dropdown 2]   │         │
│ │  formation"   │  │ [Dropdown 3]   │         │
│ │               │  │ [Submit CTA]   │         │
│ └────────────────┘  └────────────────┘         │
│                                                  │
└─────────────────────────────────────────────────┘
```

#### Form Fields
1. **Solution Type** (dropdown)
   - Options: Custom AI Platform, Automation System, Multi-Agent Workflow
   
2. **Timeline** (dropdown)
   - Options: 4-8 Weeks, 2-4 Months
   
3. **Budget** (dropdown)
   - Options: $15k-$30k, $30k-$50k, $50k+
   
4. **CTA Button**
   - Text: "Get Started" + arrow icon
   - Color: Amber (#F59E0B)

#### Animations & Effects
- [ ] White text on dark background
- [ ] Form inputs: glass effect (white/5 opacity)
- [ ] Border bottom on inputs
- [ ] Focus state: accent color border
- [ ] Button hover: lighter amber
- [ ] Bottom border: 4px accent stripe

---

### 06. Results Section (Data Visualization)

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│           AI THAT DRIVES RESULTS                 │
│                                                  │
│ [Header with left border accent]                │
│                                                  │
│ ┌─────────────────┐  ┌─────────────────┐       │
│ │ CHART 1         │  │ CHART 2         │       │
│ │ Time to Prod    │  │ Cost Reduction  │       │
│ │                 │  │                 │       │
│ │ [Bar Graph]     │  │ [Bar Graph]     │       │
│ │ Traditional: 32w│  │ Traditional: $  │       │
│ │ Sun AI: 8w      │  │ Sun AI: 35% ↓   │       │
│ └─────────────────┘  └─────────────────┘       │
└─────────────────────────────────────────────────┘
```

#### Chart Structure
1. **Chart 1: Time to Production**
   - Y-axis: 0-30 weeks
   - Bars: Traditional (32w gray) vs Sun AI (8w amber)
   - Labels: Font mono for numbers
   
2. **Chart 2: Cost Reduction**
   - Similar structure
   - Comparison bars
   - Percentage reduction highlighted

#### Animations & Effects
- [ ] Bars animate from 0 to full height
- [ ] Animation duration: 1 second
- [ ] Stagger delay: 200ms between bars
- [ ] Y-axis labels visible
- [ ] Number labels on top of bars
- [ ] Hover: subtle highlight

---

### 07. Pillars Section (3 Core Differentiators)

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│         WHY TEAMS CHOOSE SUN AI                  │
│                                                  │
│ [Centered header + subtext]                     │
│                                                  │
│ ┌───────┐    ┌───────┐    ┌───────┐           │
│ │  01   │    │  02   │    │  03   │           │
│ │ Icon  │    │ Icon  │    │ Icon  │           │
│ │ Title │    │ Title │    │ Title │           │
│ │ Desc  │    │ Desc  │    │ Desc  │           │
│ └───────┘    └───────┘    └───────┘           │
└─────────────────────────────────────────────────┘
```

#### Pillars Content
1. **Enterprise-Grade Security** - Shield icon
   - "SOC 2 compliant infrastructure..."
   
2. **Rapid Deployment** - Zap icon
   - "Production-ready systems in 8-12 weeks..."
   
3. **Dedicated Teams** - Users icon
   - "Senior engineers and AI specialists..."

#### Card Features
- Large number badge (01, 02, 03) in corner
- Icon in bordered square container
- Title: Uppercase, bold, tracking-wide
- Description: 1-2 sentences
- Background: white cards on beige

#### Animations & Effects
- [ ] Fade up on scroll
- [ ] Stagger delay: 150ms between cards
- [ ] Hover: Border color darkens
- [ ] Hover: Number badge changes color (to accent)
- [ ] Hover: Icon container gets accent border
- [ ] Smooth transitions (300ms)

---

### 08. Timeline Section (5 Phases)

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              OUR PROCESS                         │
│                                                  │
│ [Header with left border] "12-week framework"   │
│                                                  │
│ ───────────────────────────────────────────     │
│ ● 01 Discovery     (Week 1)                     │
│   └─ Deep-dive into requirements...             │
│                                                  │
│ ● 02 Architecture  (Week 2)                     │
│   └─ System design, data modeling...            │
│                                                  │
│ ● 03 Development   (Week 3-8)                   │
│   └─ Agile sprints with weekly demos...         │
│                                                  │
│ ● 04 Testing       (Week 9-10)                  │
│   └─ QA, security audits, optimization...       │
│                                                  │
│ ● 05 Launch        (Week 11-12)                 │
│   └─ Production deployment, training...         │
│                                                  │
└─────────────────────────────────────────────────┘
```

#### Phase Structure (Each of 5)
- Phase number (01-05)
- Phase title (bold)
- Duration label (Week X)
- Description (1 sentence)
- Connected by vertical line

#### Animations & Effects
- [ ] Vertical line draws on scroll
- [ ] Phases fade in sequentially
- [ ] Stagger delay: 200ms between phases
- [ ] Active dot indicator (orange)
- [ ] Inactive dots (gray)

---

### 09. Pricing Section (3 Tiers)

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│          INVESTMENT LEVELS                       │
│                                                  │
│ [Centered header + subtitle]                    │
│                                                  │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│ │ STARTER │ │  SCALE  │ │ CUSTOM  │           │
│ │         │ │  ⭐     │ │         │           │
│ │ $15-30k │ │ $30-60k │ │  $60k+  │           │
│ │         │ │         │ │         │           │
│ │ ✓ List  │ │ ✓ List  │ │ ✓ List  │           │
│ │ ✓ List  │ │ ✓ List  │ │ ✓ List  │           │
│ │ ✓ List  │ │ ✓ List  │ │ ✓ List  │           │
│ │         │ │         │ │         │           │
│ │ [CTA]   │ │ [CTA]   │ │ [CTA]   │           │
│ └─────────┘ └─────────┘ └─────────┘           │
└─────────────────────────────────────────────────┘
```

#### Tier Breakdown
1. **MVP / POC (Starter)**
   - Range: $15k-$30k
   - Features: 5 items
   - Delivery: 4-6 weeks
   
2. **Production Ready (Scale)** ⭐ HIGHLIGHTED
   - Range: $30k-$60k
   - Features: 6 items
   - Delivery: 8-12 weeks
   - Visual emphasis: taller, border accent
   
3. **Enterprise Systems (Custom)**
   - Range: $60k+
   - Features: 6 items
   - Delivery: 12+ weeks

#### Card Elements
- Tier name (label)
- Price range (large text)
- Feature list (check icons)
- CTA button at bottom
- Border styling

#### Animations & Effects
- [ ] Cards scale on hover (1.05x)
- [ ] Featured card: permanent scale + shadow
- [ ] Check icons appear with stagger
- [ ] Border glow on hover (subtle)
- [ ] Button hover: color shift

---

### 10. Project Brief Section

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ [Light background]                               │
│                                                  │
│         [Centered content block]                 │
│                                                  │
│         "Ready to Build Your AI System?"         │
│                                                  │
│         [Body text: 2 sentences]                 │
│                                                  │
│         [CTA Button]                             │
│                                                  │
└─────────────────────────────────────────────────┘
```

#### Content Elements
- Headline (h2)
- Body paragraph
- Single CTA button
- Centered alignment
- Spacious padding

#### Animations & Effects
- [ ] Fade in on scroll
- [ ] Button hover: lift + shadow
- [ ] Simple, clean section
- [ ] Border top/bottom

---

### 11. Final CTA Section

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ [Accent background or gradient]                 │
│                                                  │
│ ┌────────────────┐  ┌────────────────┐         │
│ │ LEFT: Copy     │  │ RIGHT: Action  │         │
│ │               │  │               │         │
│ │ "Transform    │  │ [Large CTA]    │         │
│ │  your team"   │  │ [Secondary]    │         │
│ └────────────────┘  └────────────────┘         │
│                                                  │
└─────────────────────────────────────────────────┘
```

#### Elements
1. Compelling headline
2. Supporting text
3. Primary CTA (large button)
4. Secondary link/button
5. Optional: Contact info or badge

#### Animations & Effects
- [ ] Gradient background (if used)
- [ ] Button hover: glow effect
- [ ] Fade in elements on scroll

---

### 12. Footer Section

#### Layout Structure
```
┌─────────────────────────────────────────────────┐
│ [Footer Navigation - 5 columns]                 │
│                                                  │
│ Column 1    Column 2    Column 3    Column 4    │
│ Products    Company     Legal       Resources   │
│ • Link      • Link      • Link      • Link      │
│ • Link      • Link      • Link      • Link      │
│                                                  │
│ [Social Icons]                                   │
│ [Copyright]                                      │
└─────────────────────────────────────────────────┘
```

#### Content Columns
1. **Products** - Service pages
2. **Company** - About, contact
3. **Legal** - Terms, privacy
4. **Resources** - Style guide, docs
5. **Social** - Icon links

---

## Design Patterns

### Typography Hierarchy
1. **H1 (Hero)** - 5xl-6xl, serif, charcoal
2. **H2 (Section)** - 4xl-5xl, serif, charcoal
3. **H3 (Card Title)** - xl-2xl, bold, charcoal
4. **Label** - 10px, uppercase, bold, tracking-widest
5. **Body** - base-lg, light, serif (Lora)
6. **Caption** - xs-sm, gray

### Color Usage
- **Primary BG:** #FDFCFB (ivory)
- **Card BG:** #FFFFFF (white)
- **Text:** #1A1A1A (charcoal)
- **Accent 1:** #F59E0B (amber)
- **Accent 2:** #FCD34D (light amber)
- **Border:** #EFE9E4 (warm gray)
- **Meta:** #666666, #888888, #999999

### Spacing System (4px Grid)
- Section padding: py-24 (96px)
- Large gaps: gap-16 (64px)
- Medium gaps: gap-8 (32px)
- Small gaps: gap-4 (16px)
- Container: max-w-7xl, px-6 lg:px-16

---

## Animation Patterns

### Scroll-Triggered Animations
1. **Fade Up**
   - Initial: opacity 0, y: 20px
   - Final: opacity 1, y: 0
   - Duration: 600ms
   - Ease: [0.16, 1, 0.3, 1]

2. **Stagger Children**
   - Delay between: 150-200ms
   - Used on: Service cards, pillars, pricing

3. **Scale In**
   - Initial: opacity 0, scale: 0.95
   - Final: opacity 1, scale: 1
   - Duration: 500ms

### Hover Effects
1. **Card Hover**
   - Scale: 1.02x
   - Border color change
   - Shadow increase
   - Duration: 300ms

2. **Button Hover**
   - Background color shift
   - Icon movement (arrow →)
   - Shadow glow
   - Duration: 300ms

3. **Icon Hover**
   - Color change to accent
   - Subtle rotation or bounce
   - Duration: 200ms

### Motion Principles
- **Ease curve:** [0.16, 1, 0.3, 1] (smooth acceleration)
- **Duration range:** 200-800ms
- **No abrupt movements**
- **WhileInView:** once: true (no repeat)
- **Respect reduced motion** preferences

---

## Responsive Behavior

### Breakpoints
1. **Mobile** (< 640px)
   - Single column layouts
   - Stack CTAs vertically
   - Reduce padding
   - Hide decorative elements

2. **Tablet** (640px - 1024px)
   - 2-column grids
   - Adjusted font sizes
   - Maintain spacing

3. **Desktop** (> 1024px)
   - Full layouts as designed
   - 3-column grids
   - Large typography
   - All animations active

### Mobile Optimizations
- Touch targets: min 44x44px
- Readable line length
- Simplified animations
- Faster auto-advance timings
- No hover states (tap instead)

---

## Scroll Effects Summary

### By Section
- [x] **Hero** - Fade in, stagger elements
- [ ] **Trusted By** - Static (no scroll effects)
- [x] **How It Works** - Carousel auto-advance, cursor animations
- [x] **Services Grid** - Stagger fade up, hover lift
- [ ] **Transformation** - Static form (interactive inputs)
- [x] **Results** - Bar chart height animations
- [x] **Pillars** - Stagger fade up, hover effects
- [x] **Timeline** - Sequential phase reveals, line drawing
- [x] **Pricing** - Card scale on hover, check icons appear
- [x] **Project Brief** - Fade in
- [x] **Final CTA** - Fade in, button glow
- [ ] **Footer** - Static

### Scroll Experience Goals
1. Guide user down page naturally
2. Reveal content progressively
3. Maintain readability during scroll
4. Avoid distracting movements
5. Smooth, cinematic feel

---

## Conversion Optimization

### CTA Hierarchy
1. **Primary** (Hero) - "Start Your Project"
2. **Secondary** (Hero) - "Talk to an Expert"
3. **Tertiary** (Transformation) - Form submission
4. **Supporting** (Pricing) - Tier selection
5. **Final** (Final CTA) - Last chance conversion

### Trust Signals Placement
- Hero: Trust strip (4 logos)
- Stats: Metric card (25+, 6+, 35%)
- Pillars: Core differentiators
- Pricing: Transparent investment levels
- Results: Data-driven performance charts

---

## Implementation Checklist

### Phase 1: Structure ✅
- [x] 12 sections created
- [x] Component architecture
- [x] Responsive grid systems
- [x] Content organized

### Phase 2: Styling ✅
- [x] V14 color palette applied
- [x] Typography hierarchy
- [x] Spacing system (4px grid)
- [x] Border treatments

### Phase 3: Animations ✅
- [x] Scroll-triggered reveals
- [x] Hover states
- [x] Carousel functionality (How It Works)
- [x] Chart animations (Results)
- [x] Cursor animations

### Phase 4: Polish ✅
- [x] Mobile responsive
- [x] Touch optimizations
- [x] Performance optimized
- [x] Accessibility features

### Phase 5: Testing
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Animation performance
- [ ] Conversion tracking setup
- [ ] A/B test variants

---

## Performance Notes

### Optimization Strategies
1. **Lazy load** sections below fold
2. **Optimize images** (if using real logos)
3. **Defer animations** until in viewport
4. **Minimize reflows** during scroll
5. **GPU acceleration** for transforms

### Target Metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

---

## Content Guidelines

### Writing Style
- **Tone:** Executive, sophisticated, technical
- **Length:** Concise (2-3 sentences per section)
- **Focus:** Benefits over features
- **Voice:** Active, confident
- **Avoid:** Hype, clichés, jargon without definition

### Headline Formula
1. Clear value proposition
2. Specific outcomes
3. Audience-focused
4. Action-oriented

Example: "Build Intelligent AI Products, Agents & Automation"
- ✅ Specific: AI Products, Agents, Automation
- ✅ Value: Build (action)
- ✅ Audience: Teams building AI
- ✅ No fluff: Direct and clear

---

## Next Enhancement Opportunities

### V12 Modern Tech Additions (Optional)
1. **Gradient mesh backgrounds** - Animated subtle gradients
2. **Glassmorphism cards** - Frosted glass effects
3. **Terminal aesthetics** - Code snippets, CLI
4. **Bento grid layout** - Asymmetric service cards
5. **Animated counters** - Live number effects
6. **System status badge** - "All systems operational"
7. **Tech stack pills** - GPT-4, Claude badges
8. **API examples** - Code snippets for developers

### Future Sections to Consider
- [ ] Case studies carousel
- [ ] Video testimonials
- [ ] Interactive demo
- [ ] ROI calculator
- [ ] FAQ accordion
- [ ] Integration showcase

---

## Document Control

**Reviewed by:** AI Product Systems Architect  
**Approved for:** V11 Production Implementation  
**Next Review:** After V12 enhancements evaluation  

---

## Quick Reference

### File Locations
- **Main Component:** `/components/premium/v11/home-v11/HomePageV11Refactored.tsx`
- **Section Components:** `/components/premium/v11/home-v11/sections/`
- **Route:** `/home/v11` or `/`
- **Style Guide:** `/style-guide/v14`

### Key Dependencies
- Motion library: `motion/react`
- Icons: `lucide-react`
- Styling: Tailwind CSS v4
- Font families: Playfair Display (serif), Inter (sans), Lora (body serif)

---

**End of Document**

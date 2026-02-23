# Premium Scroll Section — Sun AI Services

## 1. OVERVIEW

Two scroll-synced sections inspired by Superside's "Why creative teams choose Superside" and "Proven process" layouts.

**Goal:**
- Communicate value pillars and process with premium scroll interaction
- BCG strategy × Superside polish × AI-native product
- Executive-grade, calm, intelligent

---

## 2. SECTION ARCHITECTURE

### SECTION A: WHY TEAMS CHOOSE SUN AI
**Layout:**
- Left column (sticky): Headline + supporting text + CTA
- Right column (scrollable): 5–6 value cards with subtle scroll animations

**Background:** Deep green (#1A3A32 or darker)
**Cards:** Lighter surface with glassmorphism
**Accent:** Muted green for active states

---

### SECTION B: PROVEN PROCESS
**Layout:**
- Left column (sticky): Headline + supporting text + CTA
- Right column (scrollable): 6 numbered process cards

**Visual treatment:**
- Numbered badges (01–06)
- Vertical timeline connector
- Active step highlighted on scroll

---

## 3. WIREFRAME — DESKTOP

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌──────────────────┐  ┌──────────────────────────┐   │
│  │  STICKY LEFT     │  │  SCROLLABLE RIGHT        │   │
│  │                  │  │                          │   │
│  │  Why teams       │  │  [Card 1]                │   │
│  │  choose Sun AI   │  │  Business outcomes       │   │
│  │                  │  │                          │   │
│  │  Supporting      │  │  [Card 2]                │   │
│  │  paragraph       │  │  AI strategy first       │   │
│  │                  │  │                          │   │
│  │  [CTA Button]    │  │  [Card 3]                │   │
│  │                  │  │  Systems thinking        │   │
│  │                  │  │                          │   │
│  │                  │  │  [Card 4]                │   │
│  │                  │  │  Seamless integration    │   │
│  │                  │  │                          │   │
│  │                  │  │  [Card 5]                │   │
│  │                  │  │  Cross-functional        │   │
│  └──────────────────┘  └──────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4. CARD CONTENT — VALUE PILLARS

**Card 1: Built for real business outcomes**
AI systems designed to deliver measurable operational and financial impact—not experiments.

**Card 2: AI strategy before AI tooling**
We start with business goals, then architect the right AI approach—no pre-built solutions forced into your workflow.

**Card 3: Systems thinking, not experiments**
Holistic AI architecture that integrates with existing operations, workflows, and teams.

**Card 4: Seamless integration with existing teams**
Our delivery model works alongside your teams—no disruption, no learning curve, no bottlenecks.

**Card 5: Cross-functional alignment**
We bridge business, product, and engineering—ensuring AI initiatives have stakeholder buy-in from day one.

**Card 6: Long-term partnership**
Beyond launch: optimization, training, and strategic evolution as your business scales.

---

## 5. CARD CONTENT — PROCESS STEPS

**01 — Discovery & AI diagnosis**
Assess AI readiness, identify opportunities, and define success metrics aligned with business goals.

**02 — Strategy & system design**
Create AI architecture, prioritized roadmaps, and technical specifications for implementation.

**03 — Build AI products & agents**
Develop custom AI applications, intelligent agents, and automation workflows with rapid iteration.

**04 — Integrate & automate workflows**
Connect AI systems to existing operations, tools, and data pipelines for seamless execution.

**05 — Scale across teams**
Deploy AI solutions, train teams, and ensure adoption with documentation and support.

**06 — Measure, optimize, evolve**
Track performance, refine models, and expand AI capabilities as business needs grow.

---

## 6. SCROLL INTERACTION DESIGN

### Motion Philosophy:
"Executive presentation, not marketing animation"

**Allowed:**
- Fade + translate up on card entrance (subtle)
- Active card highlight (accent line or glow)
- Smooth scroll-triggered transitions

**Not Allowed:**
- Parallax overload
- Bouncy animations
- Decorative motion
- Distracting effects

---

## 7. RESPONSIVE BEHAVIOR

**Desktop (>1024px):**
- Sticky left column
- Scrollable right column
- Scroll-triggered card animations

**Tablet (768–1024px):**
- Reduced sticky behavior
- Cards remain stacked

**Mobile (<768px):**
- No sticky positioning
- Linear vertical stack
- Simplified animations
- Clear section separation

---

## 8. COMPONENT STRUCTURE

```tsx
<ScrollSection>
  <StickyLeftColumn>
    <Headline />
    <SupportingText />
    <PrimaryCTA />
  </StickyLeftColumn>
  
  <ScrollableRightColumn>
    <ValueCard />
    <ValueCard />
    <ValueCard />
    ...
  </ScrollableRightColumn>
</ScrollSection>
```

---

## 9. COLOR PALETTE

**Background:**
- Primary: #0D1F1A (deep green, almost charcoal)
- Alternative: #1A3A32 (slightly lighter)

**Cards:**
- Surface: rgba(255, 255, 255, 0.05)
- Border: rgba(255, 255, 255, 0.1)
- Glassmorphism: backdrop-blur-xl

**Text:**
- Headlines: #FFFFFF
- Body: rgba(255, 255, 255, 0.7)
- Labels: rgba(255, 255, 255, 0.5)

**Accent:**
- Active state: #C5F467 (muted green)
- Hover: rgba(197, 244, 103, 0.2)

---

## 10. TYPOGRAPHY SYSTEM

**Headlines (Left Column):**
- Font: Georgia, serif
- Size: 48px–56px
- Weight: Normal (400)
- Line-height: 1.1
- Letter-spacing: -0.02em

**Card Titles:**
- Font: System sans-serif
- Size: 20px
- Weight: Medium (500)
- Line-height: 1.4

**Body Text:**
- Font: System sans-serif
- Size: 14px–15px
- Weight: Normal (400)
- Line-height: 1.6
- Color: rgba(255, 255, 255, 0.7)

**Numbers (Process):**
- Font: Georgia, serif
- Size: 18px
- Weight: Light (300)
- Color: #C5F467

---

## 11. SUCCESS CRITERIA

✅ Feels like a consulting framework brought to life
✅ Calm, intelligent, premium tone
✅ Designed for trust and clarity
✅ Ready for engineering handoff
✅ No marketing gimmicks
✅ Executive-appropriate presentation

---

## 12. IMPLEMENTATION CHECKLIST

- [ ] Create ScrollSection component
- [ ] Implement sticky positioning (desktop)
- [ ] Build ValueCard component
- [ ] Build ProcessCard component
- [ ] Add scroll-triggered animations (IntersectionObserver)
- [ ] Implement responsive breakpoints
- [ ] Test scroll performance
- [ ] Verify mobile experience
- [ ] Add accessibility (ARIA labels)
- [ ] Review with design system consistency

---

## 13. DESIGN NOTES

**Inspiration:**
Superside's "Why creative teams choose Superside" and "Proven process" sections.

**Key differentiators:**
- AI-native content (not creative services)
- Executive audience (not marketing teams)
- Strategic positioning (not tactical execution)
- Luxury calm aesthetic (not energetic/playful)

**Reference:**
- Superside: Dark background, sticky left, scrollable right
- BCG: Strategic clarity, systems thinking
- Sun AI: Glassmorphism, muted green accents, Georgia serif

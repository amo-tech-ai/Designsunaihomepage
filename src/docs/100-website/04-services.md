# WHAT WE BUILD — 8 SERVICE CARDS

**Purpose:** Showcase core services with clear value propositions  
**Layout:** 4×2 grid (4 cards per row)  
**Style:** Calm luxury editorial with neutral palette

---

## SECTION HEADER

**Eyebrow (orange-600, 12px, uppercase, 600 weight):**  
"OUR EXPERTISE"

**Headline (48-60px, neutral-900, 600 weight):**  
"What We Build"

**Subheadline (18px, neutral-600, regular):**  
"From custom agents to full-scale automation platforms, we engineer systems that drive measurable ROI."

---

## CARD 1 — AI APPLICATIONS

**Icon:** `Brain` (Lucide React)  
**Alternative icons:** `Sparkles`, `Cpu`, `Zap`

**Title (uppercase, 14px, 700 weight):**  
AI APPLICATIONS

**Description (neutral-600, 15px):**  
Intelligent apps that adapt to user context and learn from interactions.

**Improved Description:**  
Production-ready AI apps that personalize experiences, automate decisions, and scale with usage.

**Value Props (bullet format):**
- Context-aware responses
- Continuous learning
- Production-grade reliability

**Link:** `/services/ai-development`

---

## CARD 2 — AUTOMATION SYSTEMS

**Icon:** `Workflow` (Lucide React)  
**Alternative icons:** `Zap`, `GitBranch`, `Link`

**Title:**  
AUTOMATION SYSTEMS

**Description (current):**  
End-to-end workflows that run on autopilot.

**Improved Description:**  
Complete automation pipelines from trigger to action — no manual intervention required.

**Value Props:**
- End-to-end orchestration
- Error handling built-in
- 99.9% uptime guarantee

**Link:** `/services/ai-agents`

---

## CARD 3 — MULTI-AGENT SYSTEMS

**Icon:** `Network` (Lucide React)  
**Alternative icons:** `GitMerge`, `Share2`, `Layers`

**Title:**  
MULTI-AGENT SYSTEMS

**Description (current):**  
Orchestrated agents solving complex logic.

**Improved Description:**  
Coordinated AI agents that collaborate, delegate, and solve complex multi-step problems.

**Value Props:**
- Agent collaboration
- Task delegation
- Complex reasoning

**Link:** `/services/ai-agents`

---

## CARD 4 — CUSTOM AI AGENTS

**Icon:** `Bot` (Lucide React)  
**Alternative icons:** `Cpu`, `Microchip`, `Binary`

**Title:**  
CUSTOM AI AGENTS

**Description (current):**  
Specialized models trained on your data.

**Improved Description:**  
Domain-specific AI agents fine-tuned on your data for maximum accuracy and relevance.

**Value Props:**
- Your data, your models
- Domain expertise built-in
- Private & secure

**Link:** `/services/ai-agents`

---

## CARD 5 — DASHBOARDS & ANALYTICS

**Icon:** `BarChart3` (Lucide React)  
**Alternative icons:** `LineChart`, `TrendingUp`, `PieChart`

**Title:**  
DASHBOARDS & ANALYTICS

**Description (current):**  
Real-time visibility into business performance.

**Improved Description:**  
Executive dashboards with real-time metrics, AI insights, and automated reporting.

**Value Props:**
- Real-time data sync
- AI-powered insights
- Custom KPI tracking

**Link:** `/services/ai-web-dev`

---

## CARD 6 — INTERNAL TOOLS

**Icon:** `Settings` (Lucide React)  
**Alternative icons:** `Tool`, `Sliders`, `Database`

**Title:**  
INTERNAL TOOLS

**Description (current):**  
Admin panels that streamline operations.

**Improved Description:**  
Custom admin panels, CRMs, and internal tools that eliminate manual workflows.

**Value Props:**
- Tailored to your process
- Role-based access
- Integration-ready

**Link:** `/services/ai-web-dev`

---

## CARD 7 — MARKETPLACES

**Icon:** `Store` (Lucide React)  
**Alternative icons:** `ShoppingBag`, `ShoppingCart`, `Package`

**Title:**  
MARKETPLACES

**Description (current):**  
Platforms that match supply and demand intelligently.

**Improved Description:**  
Two-sided platforms with AI matching, dynamic pricing, and automated fulfillment.

**Value Props:**
- Smart matching algorithms
- Dynamic pricing
- Automated transactions

**Link:** `/services/ai-mvp`

---

## CARD 8 — AUTONOMOUS WORKFLOWS

**Icon:** `Route` (Lucide React)  
**Alternative icons:** `ArrowRightLeft`, `Shuffle`, `GitBranch`

**Title:**  
AUTONOMOUS WORKFLOWS

**Description (current):**  
Self-healing processes for mission-critical tasks.

**Improved Description:**  
Mission-critical workflows that monitor, detect issues, and self-correct without human intervention.

**Value Props:**
- Self-healing capabilities
- Proactive error detection
- 24/7 monitoring

**Link:** `/services/ai-agents`

---

## CARD DESIGN SPECS

### Container
- Background: White
- Border: 1px solid neutral-200
- Border radius: 16px
- Padding: 32px (desktop), 24px (mobile)
- Hover state: Border → neutral-300, Shadow-lg

### Icon Container
- Size: 48px × 48px
- Background: Neutral-100
- Border radius: 12px
- Icon size: 24px
- Icon color: Neutral-700
- Hover: Background → Orange-50, Icon → Orange-600

### Title
- Font size: 14px
- Font weight: 700
- Color: Neutral-900
- Transform: Uppercase
- Letter spacing: 0.05em
- Margin bottom: 12px

### Description
- Font size: 15px
- Line height: 1.6
- Color: Neutral-600
- Max width: 280px

---

## GRID LAYOUT

### Desktop (1024px+)
- 4 columns
- Gap: 24px
- Max container width: 1400px

### Tablet (768-1023px)
- 2 columns
- Gap: 20px
- Cards span 2 rows

### Mobile (<768px)
- 1 column
- Gap: 16px
- Full-width cards
- Scroll vertically

---

## INTERACTION STATES

### Default
- Border: neutral-200
- Background: White
- Icon background: Neutral-100

### Hover
- Border: neutral-300
- Shadow: 0 10px 30px rgba(0,0,0,0.08)
- Icon background: Orange-50
- Icon color: Orange-600
- Transform: translateY(-2px)
- Transition: 200ms ease

### Click
- Navigate to service page
- Smooth transition (no page reload)

---

## IMPROVED ICON MAPPING

| Service | Current Icon | Recommended Icon | Reasoning |
|---------|-------------|------------------|-----------|
| AI Applications | Briefcase | `Brain` | Better represents intelligence |
| Automation Systems | Zap | `Workflow` | Shows connected processes |
| Multi-Agent Systems | Layers | `Network` | Illustrates agent collaboration |
| Custom AI Agents | Chip | `Bot` | More recognizable as AI |
| Dashboards & Analytics | BarChart | `BarChart3` | Modern chart representation |
| Internal Tools | Wrench | `Settings` | Universal tool symbol |
| Marketplaces | Shopping bag | `Store` | Clearer marketplace icon |
| Autonomous Workflows | Terminal | `Route` | Shows automated paths |

---

## CONTENT HIERARCHY

### Level 1: Section
- Eyebrow + Headline + Subheadline
- Center aligned
- Max width: 800px
- Margin bottom: 64px

### Level 2: Cards
- 8 cards in 4×2 grid
- Equal height across rows
- Consistent spacing

### Level 3: Card Content
- Icon (top)
- Title (12px below icon)
- Description (8px below title)

---

## ACCESSIBILITY

- **Semantic HTML:** Use `<article>` for each card
- **Headings:** Card titles as `<h3>`
- **Links:** Entire card clickable
- **ARIA:** `aria-label="View {Service Name} details"`
- **Keyboard:** Tab navigation, Enter to activate
- **Focus:** Orange outline (2px) on keyboard focus

---

## RESPONSIVE BREAKPOINTS

```
Desktop:   1024px+ → 4 columns
Tablet:    768-1023px → 2 columns
Mobile:    <768px → 1 column
```

---

## ANIMATION SPECS

### On Scroll (Initial Load)
- Cards fade in sequentially
- Stagger delay: 100ms per card
- Opacity: 0 → 1
- TranslateY: 20px → 0
- Duration: 400ms
- Easing: ease-out

### On Hover
- Icon background color change: 150ms
- Icon color change: 150ms
- Card lift (translateY): 200ms
- Shadow appearance: 200ms
- Border color: 150ms

---

## PROMPT 1 — SECTION HEADER & GRID

Create the "What We Build" section with an orange eyebrow label reading "OUR EXPERTISE", a large headline "What We Build" (48-60px), and a subheadline explaining we build custom agents to automation platforms. Below, set up an 8-card grid with 4 columns on desktop, 2 on tablet, 1 on mobile. Cards have white background, subtle border, 16px rounded corners, and 32px padding. Add 24px gap between cards. Section background is neutral-50.

---

## PROMPT 2 — CARD STRUCTURE & ICONS

For each card, create a consistent structure: icon container at top (48px square with neutral-100 background, 12px rounded), icon inside (24px, neutral-700 color), title below in uppercase (14px, bold, neutral-900), and description text (15px, neutral-600, line-height 1.6). Use these Lucide React icons: Brain, Workflow, Network, Bot, BarChart3, Settings, Store, Route. Align all content left within each card.

---

## PROMPT 3 — CARD CONTENT

Populate 8 cards with these titles and descriptions:

**Row 1:**
1. AI APPLICATIONS — "Production-ready AI apps that personalize experiences, automate decisions, and scale with usage."
2. AUTOMATION SYSTEMS — "Complete automation pipelines from trigger to action — no manual intervention required."
3. MULTI-AGENT SYSTEMS — "Coordinated AI agents that collaborate, delegate, and solve complex multi-step problems."
4. CUSTOM AI AGENTS — "Domain-specific AI agents fine-tuned on your data for maximum accuracy and relevance."

**Row 2:**
5. DASHBOARDS & ANALYTICS — "Executive dashboards with real-time metrics, AI insights, and automated reporting."
6. INTERNAL TOOLS — "Custom admin panels, CRMs, and internal tools that eliminate manual workflows."
7. MARKETPLACES — "Two-sided platforms with AI matching, dynamic pricing, and automated fulfillment."
8. AUTONOMOUS WORKFLOWS — "Mission-critical workflows that monitor, detect issues, and self-correct without human intervention."

---

## PROMPT 4 — HOVER INTERACTIONS

Add hover effects to cards: on hover, change border from neutral-200 to neutral-300, add shadow (0 10px 30px rgba(0,0,0,0.08)), lift card slightly (translateY -2px), change icon background from neutral-100 to orange-50, and icon color from neutral-700 to orange-600. All transitions should be smooth (200ms ease). Entire card should be clickable and navigate to the respective service page.

---

## PROMPT 5 — SCROLL ANIMATIONS

Implement scroll-triggered animations: cards fade in sequentially as user scrolls to section. Each card starts with opacity 0 and translateY 20px. When in viewport, animate to opacity 1 and translateY 0 over 400ms with ease-out easing. Stagger each card by 100ms (first card at 0ms, second at 100ms, etc.). Use Intersection Observer API or Motion/React for implementation.

---

## PROMPT 6 — RESPONSIVE BEHAVIOR

Make grid responsive: Desktop (1024px+) shows 4 columns with 24px gap. Tablet (768-1023px) shows 2 columns with 20px gap. Mobile (<768px) shows 1 column full-width with 16px gap. Cards maintain equal height within each row. Section padding adjusts: 80px top/bottom on desktop, 60px on tablet, 40px on mobile. Headline size scales: 60px desktop, 48px tablet, 36px mobile.

---

## SEO & META

**Section Title:** "What We Build — AI Services & Solutions"  
**Meta Description:** "Custom AI applications, automation systems, multi-agent platforms, dashboards, and autonomous workflows engineered for measurable ROI."  
**Keywords:** AI applications, automation systems, multi-agent AI, custom AI agents, dashboards, internal tools, marketplaces, autonomous workflows

---

## FINAL CHECKLIST

- [ ] Section header with eyebrow, headline, subheadline
- [ ] 8 cards in responsive grid (4×2 desktop)
- [ ] Correct icons from Lucide React
- [ ] Updated descriptions with clear value props
- [ ] Hover states: border, shadow, icon color change
- [ ] Entire card clickable (link to service page)
- [ ] Scroll animations (fade in + stagger)
- [ ] Responsive: 4 col → 2 col → 1 col
- [ ] Accessibility: semantic HTML, ARIA labels, keyboard nav
- [ ] Equal card heights per row
- [ ] Consistent spacing and alignment
- [ ] Mobile-friendly touch targets (min 44px)

---

**END OF DOCUMENT**

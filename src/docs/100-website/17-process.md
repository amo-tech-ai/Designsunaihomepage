# Process Page V11/V12 - Wireframe & Design Specification

## Document Status
- **Version:** V12 (Calm Luxury Process Page)
- **Status:** ✅ Production Ready
- **Last Updated:** 2026-01-17
- **Design System:** V14 Style Guide Aligned
- **Route:** `/process/v12`

---

## Page Structure Overview

### Content Flow (5 Major Sections)
1. **Hero** - 8-week process visualization with animated diagram
2. **Phase Details** - 7 expandable/collapsible phase cards
3. **Client Involvement Matrix** - Time commitment breakdown table
4. **Methodology Comparison** - 3-way comparison table
5. **Final CTA** - Conversion section
6. **Footer** - Navigation

---

## Section Wireframes

### 01. Hero Section

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ [Dark Background: #1A1A1A]                              │
│                                                          │
│ ┌──────────────────┐  ┌──────────────────────────────┐ │
│ │ LEFT: Content    │  │ RIGHT: Circular Diagram      │ │
│ │   (40% width)    │  │   (60% width)                │ │
│ │                  │  │                              │ │
│ │ [Eyebrow]        │  │        ┌────────┐           │ │
│ │ [H1 Line 1]      │  │      ╱          ╲          │ │
│ │ [H1 Line 2]      │  │    │   8 WEEKS   │         │ │
│ │ [Subheadline]    │  │    │  DELIVERY   │         │ │
│ │                  │  │    │    CYCLE    │         │ │
│ │ [CTA Primary]    │  │      ╲          ╱          │ │
│ │ [CTA Secondary]  │  │        └────────┘           │ │
│ │                  │  │                              │ │
│ │ ───────────────  │  │  ● Launch   ● Design        │ │
│ │ [3-Col Stats]    │  │  ● Build    ● Test          │ │
│ │ 20+ | $2M | 300% │  │  (4 icons around circle)    │ │
│ └──────────────────┘  └──────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

#### Content Elements

**1. Eyebrow Label**
- Text: "AMO AI PROCESS"
- Color: Amber (#F59E0B)
- Size: 12px
- Style: Uppercase, bold, tracking-widest

**2. Headline (Split into 2 lines)**
- Line 1: "8 Weeks."
  - Color: White
  - Font: Playfair Display (serif)
  - Size: 60-72px
  - Weight: Bold
  
- Line 2: "Not 8 Months."
  - Color: Amber (#F59E0B)
  - Same styling as Line 1

**3. Subheadline**
- Text: "We move fast without cutting corners—AI acceleration + expert delivery for measurable results."
- Color: Neutral-300 (#E5E5E5)
- Font: Lora (serif)
- Size: 18-20px
- Line height: Relaxed (1.6)

**4. CTAs (Button Pair)**
- Primary: "Start Your AI Brief" + Arrow icon
  - Background: Amber (#F59E0B)
  - Text: Dark (#1A1A1A)
  - Square corners (no border radius)
  - Padding: 40px horizontal, 20px vertical
  
- Secondary: "See Success Stories"
  - Border: 1px solid white
  - Text: White
  - Background: Transparent
  - Same padding as primary

**5. Stats Grid (3 columns)**
- Column 1: "20+" / "Projects Delivered"
- Column 2: "$2M+" / "Monthly GMV"
- Column 3: "300%" / "Average ROI"
- Number size: 36-48px, bold
- Label size: 12px, uppercase, neutral-400

#### Circular Diagram Specifications

**Center Circle**
- Diameter: 280px
- Border: 2px solid neutral-700
- Content:
  - "8 Weeks" (48px, bold, white)
  - "DELIVERY CYCLE" (12px, uppercase, amber)

**Outer Circle**
- Diameter: 400px (radius: 180px)
- Stroke: 2px solid neutral-700 (#404040)
- Fill: None

**Animated Arc**
- Color: Amber (#F59E0B)
- Width: 3px
- Length: ~90° (quarter circle)
- Animation: Rotates 360° clockwise
- Duration: 8 seconds
- Loop: Infinite
- Easing: Linear

**Icons (4 positioned around circle)**
1. **Launch** (45° - top right)
   - Icon: Rocket
   
2. **Design** (135° - right)
   - Icon: Code2
   
3. **Build** (225° - bottom)
   - Icon: Database
   
4. **Test** (315° - left)
   - Icon: Shield

**Icon Container**
- Size: 48px circle
- Border: 2px solid white/20
- Background: Dark (#1A1A1A)
- Icon size: 24px
- Default state: White icon, neutral border
- Active state: Amber icon, amber border with glow

#### Animations & Effects
- [x] Hero fade in on load
- [x] Arc rotates continuously (8s per rotation)
- [x] Icons pulse when arc passes (scale 1 → 1.15 → 1)
- [x] Icon glow effect when active (amber shadow)
- [x] Label color change when active (neutral → amber)
- [x] Stats counter animation (optional)
- [x] Smooth transitions (300-400ms)

---

### 02. Phase Detail Cards Section

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│              COMPLETE PHASE BREAKDOWN                    │
│                                                          │
│ [Section Header + Description]                          │
│                                                          │
│ ┌──────────────────────────────────────────────────┐   │
│ │ [Icon] 1  PHASE NAME        WEEK X  [+]         │   │
│ │                                                  │   │
│ │ [Expanded content appears below]                │   │
│ └──────────────────────────────────────────────────┘   │
│                                                          │
│ ┌──────────────────────────────────────────────────┐   │
│ │ [Icon] 2  PHASE NAME        WEEK X  [+]         │   │
│ └──────────────────────────────────────────────────┘   │
│                                                          │
│ ... (7 total cards)                                     │
└─────────────────────────────────────────────────────────┘
```

#### Card States

**Collapsed State**
```
┌────────────────────────────────────────────────────┐
│ ┌───┐  1  Discovery & Strategy      ⏱ Week 1  [+]│
│ │ 💡│  Duration: Week 1                           │
│ └───┘  Involvement: High                          │
└────────────────────────────────────────────────────┘
```

**Expanded State**
```
┌────────────────────────────────────────────────────┐
│ ┌───┐  1  Discovery & Strategy      ⏱ Week 1  [-]│
│ │ 💡│  Duration: Week 1                           │
│ └───┘  Involvement: High                          │
│                                                    │
│ ┌─ EXPANDED CONTENT ────────────────────────────┐ │
│ │                                                │ │
│ │ GOAL                    | DELIVERABLES         │ │
│ │ Deep understanding...   | • Project brief      │ │
│ │                         | • User stories       │ │
│ │ ACTIVITIES              | • Architecture doc   │ │
│ │ • Kickoff meeting       | • Database schema    │ │
│ │ • Requirements          | • Timeline           │ │
│ │ • Competitor analysis   |                      │ │
│ │                         | SUCCESS CRITERIA     │ │
│ │ CLIENT TIME: 8-10 hrs   | • Requirements done  │ │
│ │                         | • Architecture OK    │ │
│ └────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────┘
```

#### 7 Phases Content

**Phase 1: Discovery & Strategy**
- Week: 1
- Icon: Lightbulb
- Goal: Deep understanding of requirements
- Client Time: 8-10 hours
- Involvement: High
- Activities (5 items)
- Deliverables (5 items)
- Success Criteria (3 items)

**Phase 2: Design & Planning**
- Week: 2
- Icon: Palette
- Goal: Visual design and UX
- Client Time: 4-6 hours
- Involvement: Medium
- Activities (5 items)
- Deliverables (5 items)
- Success Criteria (3 items)

**Phase 3: Frontend Foundation**
- Week: 3
- Icon: Code
- Goal: Build React app structure
- Client Time: 2-3 hours
- Involvement: Low
- Activities (5 items)
- Deliverables (5 items)
- Success Criteria (3 items)

**Phase 4: Backend & Database**
- Week: 4
- Icon: Database
- Goal: Build data layer & APIs
- Client Time: 1-2 hours
- Involvement: Low
- Activities (5 items)
- Deliverables (5 items)
- Success Criteria (3 items)

**Phase 5: AI Integration**
- Week: 5-6
- Icon: Sparkles
- Goal: Implement AI features
- Client Time: 4-6 hours
- Involvement: Medium
- Activities (5 items)
- Deliverables (5 items)
- Success Criteria (3 items)

**Phase 6: Polish & Testing**
- Week: 7
- Icon: Bug
- Goal: Refine UX & fix bugs
- Client Time: 6-8 hours
- Involvement: High
- Activities (5 items)
- Deliverables (5 items)
- Success Criteria (3 items)

**Phase 7: Launch & Handoff**
- Week: 8
- Icon: Rocket
- Goal: Production deployment
- Client Time: 4-5 hours
- Involvement: Medium
- Activities (5 items)
- Deliverables (5 items)
- Success Criteria (3 items)

#### Card Design Specifications

**Collapsed Header**
- Background: White
- Border: 1px solid #EFE9E4
- Padding: 32px (desktop), 24px (mobile)
- Hover: Background → #FDFCFB

**Icon Container**
- Size: 56px × 56px
- Background: #FAF8F6
- Border: 1px solid #EFE9E4
- Icon: 28px, color #1A1A1A
- Square corners (no border radius)

**Phase Number**
- Font: Playfair Display (serif)
- Size: 32px
- Color: Amber (#F59E0B)
- Weight: Bold

**Phase Name**
- Font: Inter (sans-serif)
- Size: 20-24px
- Color: Dark (#1A1A1A)
- Weight: 600

**Metadata Badges**
- Duration: Clock icon + "Week X"
- Involvement: Users icon + "High/Medium/Low"
- Font: 14px
- Color: #666666

**Expand/Collapse Button**
- Collapsed: Plus icon (+)
- Expanded: Minus icon (−)
- Size: 24px
- Color: #999999 (collapsed), Amber (expanded)

**Expanded Content Panel**
- Background: #FDFCFB (warm off-white)
- Border top: 1px solid #EFE9E4
- Padding: 32px (desktop), 24px (mobile)
- Layout: 2-column grid (50/50 split)

**Left Column**
- Goal section
- Activities list (amber square bullets)
- Client time badge

**Right Column**
- Deliverables list (checkmark icons)
- Success criteria list (shield icons)

**Bullets & Icons**
- Activities: 6px amber square
- Deliverables: CheckCircle icon (amber)
- Success Criteria: Shield icon (dark)

#### Animations & Effects
- [x] Accordion expand/collapse (height auto)
- [x] Smooth height transition (300ms ease-out)
- [x] Fade in expanded content (opacity 0 → 1)
- [x] Border color change when expanded (amber left border 4px)
- [x] Hover state on collapsed cards
- [x] Icon color change on active state
- [x] No layout shift during animation

---

### 03. Client Involvement Matrix Section

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│         CLIENT INVOLVEMENT MATRIX                        │
│                                                          │
│ [Header: "Total: 30-40 hours over 8 weeks"]            │
│                                                          │
│ ┌────────────────────────────────────────────────────┐ │
│ │ PHASE    │ TIME REQUIRED │ ACTIVITIES             │ │
│ ├────────────────────────────────────────────────────┤ │
│ │ Discovery│ 8-10 hours    │ Workshops, approvals   │ │
│ │ Design   │ 4-6 hours     │ Design reviews         │ │
│ │ Frontend │ 2-3 hours     │ Device testing         │ │
│ │ Backend  │ 1-2 hours     │ Data review            │ │
│ │ AI       │ 4-6 hours     │ AI testing             │ │
│ │ Polish   │ 6-8 hours     │ UAT, beta testing      │ │
│ │ Launch   │ 4-5 hours     │ Training, prep         │ │
│ ├────────────────────────────────────────────────────┤ │
│ │ TOTAL    │ 30-40 hours   │ Avg 4-5 hrs/week      │ │
│ └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

#### Table Specifications

**Header Row**
- Background: Dark (#1A1A1A)
- Text: White
- Font: 12px, bold, uppercase, tracking-widest
- Padding: 16px vertical
- Columns: Phase | Time Required | Activities

**Body Rows (7 phases)**
- Background: White
- Border bottom: 1px solid #EFE9E4
- Hover: Background → #FDFCFB
- Text: 
  - Phase name: #1A1A1A, 600 weight
  - Time/Activities: #666666, normal weight
- Padding: 16px vertical, 24px horizontal

**Footer Row (Total)**
- Background: #FAF8F6 (light gray)
- Border top: 2px solid amber (#F59E0B)
- Text: Bold
- Highlight: "30-40 hours" in amber

#### Row Data
1. Discovery | 8-10 hours | Workshops, approvals, context
2. Design | 4-6 hours | Design reviews, feedback
3. Frontend | 2-3 hours | Device testing, check-ins
4. Backend | 1-2 hours | Data review, test data
5. AI Integration | 4-6 hours | AI testing, prompt refinement
6. Polish | 6-8 hours | UAT, beta testing, approvals
7. Launch | 4-5 hours | Training, launch prep
**TOTAL** | **30-40 hours** | Avg 4-5 hrs/week

#### Animations & Effects
- [x] Hover highlight on rows (subtle background change)
- [x] No animations on load (static table)
- [x] Smooth color transitions (200ms)

---

### 04. Methodology Comparison Section

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│          METHODOLOGY COMPARISON                          │
│                                                          │
│ [Header: "See how our systematic process compares"]    │
│                                                          │
│ ┌────────────────────────────────────────────────────┐ │
│ │ ASPECT  │ OUR PROCESS │ AGENCY │ FREELANCER     │ │
│ ├──────���─────────────────────────────────────────────┤ │
│ │ Timeline│ 8 weeks ⭐  │ 12-16w │ 10-20w varies  │ │
│ │ Phases  │ 7 struct ⭐ │ Ad-hoc │ Undefined      │ │
│ │ Client  │ 4-5 hr/w ⭐ │ 10+hr  │ Inconsistent   │ │
│ │ Testing │ Built-in ⭐ │ Extra  │ Minimal        │ │
│ │ Docs    │ Compreh. ⭐ │ Limited│ Rarely         │ │
│ │ Support │ 30 days  ⭐ │ Extra  │ Usually none   │ │
│ │ Success │ 95% OT   ⭐ │ 60% OT │ 40% on-time    │ │
│ └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

#### Table Specifications

**Header Row**
- Background: Dark (#1A1A1A)
- Text: White
- Font: 12px, bold, uppercase, tracking-widest
- "Our Process" column: Bottom border 4px amber (highlight)
- Columns: Aspect | Our Process | Traditional Agency | Freelancer

**Comparison Rows (8 aspects)**

1. **Timeline**
   - Our Process: "8 weeks (fixed)"
   - Traditional: "12-16 weeks"
   - Freelancer: "10-20 weeks (varies)"

2. **Phases**
   - Our Process: "7 structured phases"
   - Traditional: "Ad-hoc milestones"
   - Freelancer: "Undefined"

3. **Client Involvement**
   - Our Process: "4-5 hrs/week"
   - Traditional: "10+ hrs/week"
   - Freelancer: "Inconsistent"

4. **Deliverables**
   - Our Process: "Weekly checkpoints"
   - Traditional: "Monthly reviews"
   - Freelancer: "When done"

5. **Testing**
   - Our Process: "Built-in UAT phase"
   - Traditional: "Separate QA contract"
   - Freelancer: "Minimal"

6. **Documentation**
   - Our Process: "Comprehensive"
   - Traditional: "Limited"
   - Freelancer: "Rarely provided"

7. **Post-Launch**
   - Our Process: "30-day support"
   - Traditional: "Extra cost"
   - Freelancer: "Usually none"

8. **Success Rate**
   - Our Process: "95% on-time"
   - Traditional: "60% on-time"
   - Freelancer: "40% on-time"

#### Styling Details

**"Our Process" Column (Highlighted)**
- Background: #FFF7ED (amber-50, very subtle)
- Text: Amber (#F59E0B)
- Font weight: 600 (semibold)
- Bottom border on header: 4px amber

**Other Columns**
- Background: White
- Text: #666666 (neutral gray)
- Font weight: Normal

**Row Styling**
- Border bottom: 1px solid #EFE9E4
- Hover: Background → #FDFCFB (all columns)
- Padding: 16px vertical, 24px horizontal

#### Animations & Effects
- [x] Hover highlight on rows
- [x] Static table (no load animations)
- [x] Smooth transitions (200ms)

---

### 05. Final CTA Section

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ [Dark Background: #1A1A1A]                              │
│                                                          │
│              READY TO START YOUR PROJECT?                │
│                                                          │
│         Book a call to discuss your project and          │
│              get a detailed timeline                     │
│                                                          │
│        [Book Strategy Call]  [Start Project Brief]      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

#### Content Elements

**Headline**
- Text: "Ready to Start Your Project?"
- Font: Playfair Display (serif)
- Size: 48-60px (desktop), 36px (mobile)
- Color: White
- Weight: 600
- Alignment: Center

**Subheadline**
- Text: "Book a call to discuss your project and get a detailed timeline"
- Font: Lora (serif)
- Size: 18-20px
- Color: #E5E5E5 (neutral-300)
- Line height: Relaxed
- Alignment: Center

**CTAs (2 buttons, horizontal)**
- Primary: "Book Strategy Call" + Arrow
  - Background: Amber (#F59E0B)
  - Text: Dark (#1A1A1A)
  - Link: `/booking`
  
- Secondary: "Start Project Brief"
  - Border: 1px solid white
  - Text: White
  - Background: Transparent
  - Link: `/wizard`

**Both buttons**
- Padding: 40px horizontal, 20px vertical
- Font: Bold, 16-18px
- Square corners
- Hover effects

#### Animations & Effects
- [x] Fade in on scroll
- [x] Button hover: Primary → lighter amber
- [x] Button hover: Secondary → white background, dark text
- [x] Smooth transitions (300ms)

---

### 06. Footer Section

Standard FooterV11 component (see Home Page wireframe for details)

---

## Design Patterns

### Typography System

**Display (Headlines)**
- Font: Playfair Display (serif)
- H1: 60-72px, weight 700
- H2: 48-60px, weight 600
- H3: 32-36px, weight 600
- Color: White (dark bg) or #1A1A1A (light bg)

**Body Text**
- Font: Lora (serif) for narrative text
- Font: Inter (sans-serif) for UI elements
- Size: 16-18px
- Line height: 1.6
- Color: #666666 (light bg) or #E5E5E5 (dark bg)

**Labels & Metadata**
- Font: Inter (sans-serif)
- Size: 10-12px
- Weight: Bold (600-700)
- Transform: Uppercase
- Tracking: Widest (0.2em)
- Color: #999999 or #F59E0B

**Table Text**
- Headers: 12px, bold, uppercase, white
- Body: 14-16px, normal, #666666
- Highlighted: 16px, semibold, amber

### Color Palette

**Primary Colors**
- Dark background: #1A1A1A
- Light background: #FDFCFB (warm off-white)
- Card background: #FFFFFF (white)
- Accent: #F59E0B (amber)
- Accent light: #FCD34D (light amber)

**Neutral Grays**
- Text dark: #1A1A1A
- Text medium: #666666
- Text light: #999999
- Border: #EFE9E4
- Hover background: #FDFCFB
- Table background: #FAF8F6

**On Dark Backgrounds**
- Text primary: #FFFFFF
- Text secondary: #E5E5E5
- Border: white/20 (rgba opacity)

### Spacing System

**Section Padding**
- Desktop: py-28 (112px)
- Tablet: py-20 (80px)
- Mobile: py-16 (64px)

**Container**
- Max width: 1200px (most sections), 1400px (hero)
- Horizontal padding: px-16 (desktop), px-6 (mobile)

**Card Spacing**
- Padding: 32px (desktop), 24px (mobile)
- Gap between cards: 16px (4 units)

**Grid Gaps**
- Large: gap-16 (64px)
- Medium: gap-8 (32px)
- Small: gap-4 (16px)

---

## Animation Specifications

### Hero Circular Diagram

**Arc Rotation**
- Element: SVG path (90° arc)
- Initial position: 0° (top)
- Final position: 360° (full rotation)
- Duration: 8 seconds
- Loop: Infinite
- Easing: Linear (constant speed)
- Color: Amber (#F59E0B)
- Stroke width: 3px

**Icon Pulse (Triggered)**
- Trigger: When arc passes icon position (within 20° range)
- Scale: 1 → 1.15 → 1
- Duration: 400ms
- Easing: Ease-out
- Shadow: Amber glow (0 0 20px rgba(245,158,11,0.5))
- Border color: White/20 → Amber

**Icon Label Highlight**
- Default: #999999 (neutral-400)
- Active: #F59E0B (amber)
- Transition: 300ms
- Duration: Active for 1 second after arc passes

**Arc Position Detection**
- Check rotation angle every frame
- Calculate which quadrant (45°, 135°, 225°, 315°)
- Activate corresponding icon
- Deactivate previous icon

### Phase Card Accordion

**Collapse → Expand**
- Height: 0 → auto
- Opacity: 0 → 1
- Duration: 300ms
- Easing: ease-out
- Border: #EFE9E4 → Amber left border (4px)

**Expand → Collapse**
- Height: auto → 0
- Opacity: 1 → 0
- Duration: 300ms
- Easing: ease-in
- Border: Amber → #EFE9E4

**Expand Button**
- Icon switch: Plus (+) ↔ Minus (−)
- Color: #999999 → #F59E0B
- Rotation: Optional 180° spin
- Duration: 200ms

**Content Reveal**
- Stagger: Fade in sections sequentially
- Delay: 50ms between left/right columns
- No height jumping (use overflow hidden)

### Table Interactions

**Row Hover**
- Background: White → #FDFCFB
- Transition: 200ms ease
- All cells change together
- No border changes

**Column Highlight (Our Process)**
- Persistent background: #FFF7ED
- No hover change (maintains highlight)
- Text color remains amber

### Button Hover States

**Primary Button (Amber)**
- Default: #F59E0B background
- Hover: #FCD34D background (lighter)
- Active: #D97706 (darker)
- Transition: 200ms ease
- Text remains dark (#1A1A1A)

**Secondary Button (Border)**
- Default: Transparent, white border
- Hover: White background, dark text
- Active: Slight scale down (0.98)
- Transition: 200ms ease

**Icon Movement (Arrows)**
- Default: Static
- Hover: Translate +4px right
- Transition: 200ms ease
- Combined with button color change

---

## Responsive Behavior

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

### Hero Section Responsive

**Desktop (≥1024px)**
- Layout: 2 columns (40% left, 60% right)
- Circular diagram: 400px diameter
- Stats: 3 columns horizontal
- Headline: 72px
- CTAs: Side by side

**Tablet (768-1023px)**
- Layout: 2 columns maintained
- Circular diagram: 320px diameter
- Stats: 3 columns horizontal (smaller)
- Headline: 60px
- CTAs: Side by side

**Mobile (<768px)**
- Layout: Single column (stacked)
- Headline first (48px)
- Circular diagram: 280px, centered
- Stats: Vertical stack, centered
- CTAs: Full width, stacked
- Spacing reduced (py-20 instead of py-32)

### Phase Cards Responsive

**All Breakpoints**
- Full width (no columns)
- Vertical stack
- Padding adjusts: 32px → 24px → 16px

**Expanded Content**
- Desktop: 2 columns (50/50)
- Tablet: 2 columns (adjusted padding)
- Mobile: Single column (stacked)

### Tables Responsive

**Desktop**
- Full table visible
- All 4 columns visible
- No horizontal scroll

**Tablet**
- Horizontal scroll enabled
- Minimum column widths set
- Sticky first column (optional)

**Mobile**
- Horizontal scroll required
- Reduced padding (16px → 12px)
- Smaller font sizes
- Consider card layout alternative

---

## Content Strategy

### Messaging Hierarchy

**Primary Message**
- "8 Weeks. Not 8 Months."
- Focus on speed + quality
- Challenge traditional agency timelines

**Supporting Messages**
1. Structured 7-phase process
2. Minimal client time (4-5 hrs/week)
3. 95% on-time success rate
4. Comprehensive deliverables
5. Built-in testing and documentation

**Proof Points**
- 20+ projects delivered
- $2M+ monthly GMV impact
- 300% average ROI
- Detailed phase breakdowns
- Transparent comparison tables

### Tone & Voice

**Characteristics**
- Confident but not arrogant
- Professional but approachable
- Data-driven
- Process-focused
- Clear and concise

**Avoid**
- Hype language
- Vague promises
- Industry jargon without context
- Over-selling
- Generic agency speak

---

## Conversion Optimization

### CTA Placement Strategy

**Primary CTAs (3 locations)**
1. Hero: "Start Your AI Brief" (above fold)
2. Hero: "See Success Stories" (secondary)
3. Final CTA: "Book Strategy Call" (bottom)
4. Final CTA: "Start Project Brief" (alternative)

**CTA Hierarchy**
- Highest priority: "Start Your AI Brief" (wizard)
- High priority: "Book Strategy Call" (booking)
- Medium priority: "See Success Stories" (social proof)

### Trust Signals

**Quantitative**
- 20+ projects delivered
- $2M+ monthly GMV
- 300% average ROI
- 95% on-time success rate
- 30-40 total client hours

**Qualitative**
- Detailed phase documentation
- Transparent comparison tables
- Clear deliverables for each phase
- Success criteria defined
- Comprehensive involvement matrix

### Objection Handling

**Common Objections Addressed**
1. "It takes too long" → 8 weeks vs 8 months
2. "Too much client work" → 4-5 hours/week average
3. "Lack of transparency" → Full phase breakdown
4. "Unclear deliverables" → Listed for each phase
5. "Unknown involvement" → Matrix shows exact hours
6. "How do you compare?" → Side-by-side table

---

## Performance Considerations

### Animation Performance

**Optimization Techniques**
1. Use CSS transforms (GPU accelerated)
2. Avoid animating height directly (use max-height)
3. Use will-change property sparingly
4. Debounce scroll events
5. Use requestAnimationFrame for arc rotation

**Target Metrics**
- Arc animation: 60fps constant
- Accordion: No jank during expand/collapse
- Hover states: Instant response (<16ms)
- Table scroll: Smooth on mobile

### Loading Strategy

**Critical Path**
1. Load hero section first
2. Lazy load phase cards below fold
3. Defer table rendering until in viewport
4. Preload icon assets
5. Use font-display: swap

**Bundle Optimization**
- Split phase data into separate module
- Lazy load motion library if not critical
- Optimize SVG paths
- Compress table data

---

## Accessibility Requirements

### Keyboard Navigation

**Interactive Elements**
- All buttons: Focusable with Tab
- Accordion cards: Space/Enter to toggle
- Tables: Arrow keys to navigate cells
- Links: Tab order logical

**Focus Indicators**
- Visible outline: 2px solid amber
- Offset: 2px from element
- No removal of default outlines
- High contrast (4.5:1 minimum)

### Screen Readers

**ARIA Labels**
- Accordion: aria-expanded state
- Tables: Proper header associations
- Buttons: Descriptive labels
- Icons: aria-hidden or aria-label

**Semantic HTML**
- Proper heading hierarchy (h1 → h2 → h3)
- Table markup (thead, tbody, tfoot)
- Button elements (not div clicks)
- List elements for phase content

### Color Contrast

**WCAG AA Requirements**
- Text on dark: 7:1 (white on #1A1A1A) ✓
- Amber on white: 3:1 (large text) ✓
- Borders: 3:1 minimum ✓
- Hover states: Maintain contrast ✓

**Text Sizes**
- Minimum body: 16px
- Minimum labels: 12px (bold, uppercase)
- Maximum line length: 80 characters

---

## Implementation Checklist

### Phase 1: Hero Section ✅
- [x] Dark background (#1A1A1A)
- [x] Two-column layout (40/60)
- [x] Headline split with amber accent
- [x] CTA buttons (square corners)
- [x] Stats grid (3 columns)
- [x] Circular diagram structure
- [x] Arc rotation animation (8s loop)
- [x] Icon positioning (4 icons at degrees)
- [x] Icon pulse on arc pass
- [x] Label color changes

### Phase 2: Phase Cards ✅
- [x] 7 phase cards created
- [x] Accordion functionality
- [x] Collapsed state styling
- [x] Expanded state styling
- [x] Icon containers (square, 56px)
- [x] Two-column expanded layout
- [x] Activities, deliverables, criteria lists
- [x] Client time badges
- [x] Expand/collapse animations
- [x] Amber left border when expanded

### Phase 3: Tables ✅
- [x] Client Involvement Matrix
- [x] Dark header (#1A1A1A)
- [x] 7 rows + total footer
- [x] Hover states
- [x] Amber footer border
- [x] Methodology Comparison table
- [x] "Our Process" column highlight
- [x] 8 comparison rows
- [x] Responsive horizontal scroll

### Phase 4: Final CTA ✅
- [x] Dark section
- [x] Centered content
- [x] Headline + subheadline
- [x] Two CTAs (booking, wizard)
- [x] Button hover states
- [x] Proper links

### Phase 5: Responsive ✅
- [x] Mobile hero (stacked)
- [x] Circular diagram scales
- [x] Phase cards mobile padding
- [x] Table horizontal scroll
- [x] Touch-friendly buttons

### Phase 6: Animations ✅
- [x] Arc rotation working
- [x] Icon pulse triggers
- [x] Accordion smooth
- [x] Hover transitions
- [x] No layout shift

### Phase 7: Content ✅
- [x] All 7 phases documented
- [x] Activities/deliverables complete
- [x] Table data accurate
- [x] CTAs link correctly
- [x] Eyebrow text updated

### Phase 8: Testing
- [ ] Cross-browser (Chrome, Firefox, Safari)
- [ ] Mobile devices (iOS, Android)
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Performance benchmarks (60fps)
- [ ] Lighthouse audit (>90 score)

---

## Enhancement Opportunities

### Future Additions

**Interactive Elements**
1. **Phase Timeline Visualization**
   - Horizontal timeline bar
   - Current week indicator
   - Progress tracking

2. **Cost Calculator**
   - Input project parameters
   - Get estimated timeline + cost
   - Phase breakdown

3. **Success Stories Integration**
   - Link to case studies from phases
   - Show which phase delivered what
   - Client testimonials per phase

4. **Live Demo**
   - Interactive walkthrough
   - Simulated project flow
   - Click through phases

5. **Download Options**
   - PDF process guide
   - Phase checklist templates
   - Timeline poster

**Animation Enhancements**
1. Scroll-triggered phase reveals
2. Timeline progress indicator
3. Animated stat counters (20+ incrementing)
4. Micro-interactions on bullets
5. Parallax effects on hero

---

## Document Control

**Reviewed by:** AI Product Systems Architect  
**Approved for:** V12 Production Implementation  
**Next Review:** After user testing feedback  

---

## Quick Reference

### File Locations
- **Component:** `/components/premium/v11/ProcessPageV12.tsx`
- **Route:** `/process/v12`
- **Documentation:** `/docs/100-website/05-process-page-v12.md`
- **Style Guide:** `/style-guide/v14`

### Key Dependencies
- Motion library: `motion/react`
- Icons: `lucide-react`
- Router: `react-router-dom`
- Footer: `FooterV11`

### Design Tokens
- Dark: #1A1A1A
- Accent: #F59E0B
- Light: #FDFCFB
- Border: #EFE9E4
- Serif: Playfair Display
- Sans: Inter
- Body serif: Lora

---

**End of Document**

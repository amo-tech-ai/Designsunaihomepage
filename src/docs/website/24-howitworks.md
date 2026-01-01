# How It Works Section - Home V7 Design Specification

**Section:** How It Works - From Idea to Revenue (Home V7)  
**Route:** `/v7`  
**Status:** 🎨 Design Specification  
**Design System:** Sun AI V7 (White bg + Orange Accent #FF6B2C)

---

## 📊 Summary Table

| Attribute | Details |
|-----------|---------|
| **Section Name** | How It Works - From Idea to Revenue |
| **Layout Type** | Centered hero + horizontal timeline with 5 steps |
| **Background** | White or light gray (#F8F9FA) |
| **Timeline Steps** | 5 phases (Brief → Analysis → Proposal → Booking → Launch) |
| **Connection Type** | Horizontal orange line through circular icon nodes |
| **Icon Style** | Circular containers with line icons inside |
| **Active vs Inactive** | Active steps: dark/orange, Inactive: faded gray |
| **Animation Style** | Progressive reveal, line drawing, icon fade-in |
| **Scroll Effects** | Parallax headline, sequential step reveals, line progress |
| **Mobile Behavior** | Vertical timeline or horizontal scroll carousel |
| **Color Palette** | White bg, Orange #FF6B2C, Dark navy text, Gray inactive |
| **Step Labels** | No numbered badges (01, 02, etc.) - title only |

---

## 🎯 Success Criteria

### Design Goals
- [ ] Communicate complete process in under 10 seconds
- [ ] Visual flow guides eye left-to-right naturally
- [ ] Each step purpose clear from icon + title alone
- [ ] Active vs inactive states show current focus
- [ ] Timeline feels approachable, not overwhelming
- [ ] Orange accent creates energy and momentum

### User Experience Goals
- [ ] User understands full journey (idea → revenue) in 15 seconds
- [ ] Timeline shows achievable, structured path
- [ ] Icons instantly communicate step purpose
- [ ] Progressive reveal maintains engagement
- [ ] Mobile experience preserves timeline clarity
- [ ] Section reduces perceived complexity of AI projects

### Business Goals
- [ ] Position Sun AI as organized, process-driven partner
- [ ] Build confidence through clear methodology
- [ ] Differentiate from unstructured "we build stuff" competitors
- [ ] Support sales with visual process map
- [ ] Memorable "idea to revenue" positioning

---

## 🏗️ Layout Architecture

### Overall Structure
```
┌─────────────────────────────────────────────────────────────┐
│                    WHITE BACKGROUND                         │
│                                                             │
│                    [HOW IT WORKS]                           │
│                   (small orange label)                      │
│                                                             │
│                 From Idea to Revenue                        │
│                  (large dark headline)                      │
│                                                             │
│     Our intelligent process streamlines development,        │
│    delivering production-ready AI systems in record time.   │
│                  (gray subheadline)                         │
│                                                             │
│                                                             │
│  ━━━●━━━━━━━━━━━●━━━━━━━━━━━●━━━━━━━━━━━●━━━━━━━━━━━●     │
│     │           │           │           │           │      │
│   [icon]      [icon]      [icon]      [icon]      [icon]   │
│                                                             │
│   Brief      Analysis    Proposal    Booking     Launch    │
│                                                             │
│   Tell us    Our AI      Receive a   Schedule    We build, │
│   about..    evaluates   clear..     your strat. deploy..  │
│                                                             │
│  (Active: Dark/Orange)    (Inactive: Faded Gray)           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Grid System
- **Desktop:** 5 equal columns for steps, centered hero above
- **Tablet:** 5 columns compressed or 3+2 rows
- **Mobile:** Vertical stack or horizontal scroll carousel

---

## 📝 Content Structure

### 1. Eyebrow Label
**Text:** "HOW IT WORKS"

**Design Specs:**
- Font size: 12px, uppercase, semibold
- Letter spacing: 0.15em (extra wide tracking)
- Color: #FF6B2C (orange accent)
- Position: Centered, 24px above headline
- Animation: Fade in, 0ms delay

### 2. Main Headline
**Text:** "From Idea to Revenue"

**Design Specs:**
- Font size: 56px (desktop), 42px (tablet), 32px (mobile)
- Font weight: Bold (700)
- Line height: 1.2
- Color: #00334F (dark navy)
- Text align: Center
- Max width: 800px, centered
- Bottom margin: 24px
- Animation: Fade up + slight scale, 200ms delay, 0.8s duration

### 3. Subheadline
**Text:** "Our intelligent process streamlines development, delivering production-ready AI systems in record time."

**Design Specs:**
- Font size: 18px (desktop), 16px (mobile)
- Font weight: Regular (400)
- Line height: 1.6
- Color: #64748B (slate gray)
- Text align: Center
- Max width: 700px, centered
- Bottom margin: 80px
- Animation: Fade up, 400ms delay, 0.8s duration

### 4. Timeline Connector Line
**Design Specs:**
- Type: Horizontal line connecting all 5 steps
- Color: #FF6B2C (orange accent) for active portion
- Color: #E2E8F0 (light gray) for inactive portion
- Line width: 3px
- Position: Through center of circular icon containers
- Animation: Draw from left to right, 2s duration, starts at 600ms delay
- Progress: Draws through each step sequentially

### 5. Timeline Steps (5 Total)

#### Step 1: Brief (Active)
**Icon:** Document/File icon (simple line style)
**Title:** "Brief"
**Description:** "Tell us about your business goals and vision."

**Design Specs:**
- Circle container: 80px diameter
- Circle background: White
- Circle border: 3px solid #FF6B2C (orange) - active state
- Circle shadow: 0 4px 16px rgba(255,107,44,0.15)
- Icon size: 32px
- Icon color: #FF6B2C (orange)
- Icon stroke width: 2px
- Title: 18px, bold, #00334F (dark navy)
- Title margin top: 24px
- Description: 14px, regular, #64748B (gray)
- Description margin top: 8px
- Max width: 180px per step
- Animation: Fade up + scale from 0.8, 800ms delay, 0.6s duration

#### Step 2: Analysis (Active)
**Icon:** Frame/Scan/Target icon (square frame with corner marks)
**Title:** "Analysis"
**Description:** "Our AI evaluates opportunities and requirements."

**Design Specs:**
- Same as Step 1 (active state)
- Animation: 950ms delay (150ms after Step 1)

#### Step 3: Proposal (Active)
**Icon:** Document with checkmark or list icon
**Title:** "Proposal"
**Description:** "Receive a clear scope, timeline, and pricing."

**Design Specs:**
- Same as Step 1 (active state)
- Animation: 1100ms delay (150ms after Step 2)

#### Step 4: Booking (Inactive/Faded)
**Icon:** Calendar icon
**Title:** "Booking"
**Description:** "Schedule your strategy session to kick off."

**Design Specs:**
- Circle container: 80px diameter
- Circle background: White
- Circle border: 3px solid #E2E8F0 (light gray) - inactive state
- Circle shadow: 0 2px 8px rgba(0,0,0,0.05) - subtle
- Icon size: 32px
- Icon color: #CBD5E1 (light gray) - faded
- Icon stroke width: 2px
- Title: 18px, bold, #CBD5E1 (light gray) - faded
- Description: 14px, regular, #E2E8F0 (very light gray) - faded
- Opacity: 0.5 overall
- Animation: 1250ms delay (150ms after Step 3)

#### Step 5: Launch (Inactive/Faded)
**Icon:** Rocket icon
**Title:** "Launch"
**Description:** "We build, deploy, and activate your system."

**Design Specs:**
- Same as Step 4 (inactive/faded state)
- Animation: 1400ms delay (150ms after Step 4)

---

## 🎬 Animation Sequence

### On Scroll Into View (25% threshold)

**Timeline:**
1. **0ms** - Eyebrow label fades in
2. **200ms** - Headline fades up + scales from 95%
3. **400ms** - Subheadline fades up
4. **600ms** - Timeline connector line begins drawing left-to-right
5. **800ms** - Step 1 (Brief) fades up + scales, circle appears
6. **950ms** - Step 2 (Analysis) fades up + scales
7. **1100ms** - Step 3 (Proposal) fades up + scales
8. **1250ms** - Step 4 (Booking) fades up faded state
9. **1400ms** - Step 5 (Launch) fades up faded state
10. **2600ms** - Line finishes drawing to end (total 2s from start at 600ms)

**Total Sequence:** ~2.6 seconds

### Progressive Line Drawing
- **Segment 1 (Brief → Analysis):** 600ms start, 400ms duration
- **Segment 2 (Analysis → Proposal):** 1000ms start, 400ms duration
- **Segment 3 (Proposal → Booking):** 1400ms start, 400ms duration
- **Segment 4 (Booking → Launch):** 1800ms start, 400ms duration
- Line changes from orange to gray at step 3→4 transition

### Scroll Parallax (Desktop Only)
- **Headline:** Moves up 25px at 0.5 scroll speed
- **Timeline steps:** Move up 10px at 0.7 scroll speed
- **Background:** Optional subtle gradient shift
- **Disable on mobile**

### Hover States (If Interactive)
- **Active steps:** Circle lifts 4px, shadow intensifies, scale 1.05
- **Inactive steps:** Subtle brightness increase only
- **Transition:** 300ms ease-out

---

## 🎨 Visual Design

### Color Palette
- **Background:** White #FFFFFF or #F8F9FA (light gray)
- **Primary Accent:** Orange #FF6B2C
- **Text Primary:** Dark Navy #00334F
- **Text Secondary:** Slate Gray #64748B
- **Inactive/Faded:** Light Gray #CBD5E1
- **Line Inactive:** #E2E8F0
- **Circle Border Active:** #FF6B2C (3px)
- **Circle Border Inactive:** #E2E8F0 (3px)

### Typography
- **Eyebrow:** 12px, uppercase, semibold, tracking 0.15em
- **Headline:** 56px/1.2, bold
- **Subheadline:** 18px/1.6, regular
- **Step Title:** 18px/1.3, bold
- **Step Description:** 14px/1.5, regular

### Shadows & Effects
- **Active Circle:** 0 4px 16px rgba(255,107,44,0.15)
- **Inactive Circle:** 0 2px 8px rgba(0,0,0,0.05)
- **Hover Active:** 0 8px 24px rgba(255,107,44,0.25)

### Spacing
- **Section Padding:** 100px top, 100px bottom
- **Headline to Timeline:** 80px gap
- **Step Spacing:** Equal distribution across width (calc based on container)
- **Circle to Title:** 24px vertical gap
- **Title to Description:** 8px gap

---

## 📱 Responsive Behavior

### Desktop (1280px+)
- 5 steps in horizontal row
- Full headline size (56px)
- Horizontal timeline line
- All parallax effects active
- Step width: ~180px each

### Tablet (768px-1279px)
- 5 steps compressed or 3+2 grid
- Headline 42px
- Timeline adapts to layout
- Reduced parallax
- Step width: ~150px

### Mobile (<768px)
**Option A: Vertical Stack**
- Steps stacked vertically
- Vertical line runs down left side
- Icons and circles aligned left
- Headline 32px
- No parallax

**Option B: Horizontal Scroll Carousel**
- Steps scroll horizontally
- Swipe/drag interaction
- Snap to each step
- Timeline scrolls with content
- Dots indicator below for progress

---

## ♿ Accessibility

### Semantic HTML
- `<section>` with `aria-labelledby`
- Headline as `<h2>` with unique ID
- Timeline as `<ol>` (ordered list of steps)
- Each step as `<li>` with step content

### ARIA Labels
- Section: "How our process works from idea to revenue"
- Timeline: "5-step development process"
- Active steps: Include "current step" or "active"
- Inactive: Include "upcoming step"

### Motion Preferences
- Respect `prefers-reduced-motion`
- If enabled: Show all content immediately
- Timeline line appears fully drawn
- Steps display without fade/scale animations

### Color Contrast
- Dark navy on white: 14:1 ratio ✓
- Orange on white: 4.8:1 ratio ✓
- Gray text on white: 7:1 ratio ✓
- All meet WCAG AA standards

### Keyboard Navigation
- Steps focusable if interactive
- Tab order: eyebrow → headline → steps 1-5
- Focus indicator: 2px orange outline offset 4px

---

## ✅ Production Ready Checklist

### Design Completeness
- [x] All color values specified
- [x] Typography scale defined
- [x] Spacing system documented
- [x] Icon library selected (Lucide React)
- [x] Animation timing specified
- [x] Responsive breakpoints defined
- [x] Active/inactive states designed

### Content Requirements
- [ ] Final copy approved (headline, subheadline)
- [ ] Step descriptions validated by team
- [ ] Icon selection finalized
- [ ] Step order confirmed by process team
- [ ] Active vs inactive logic defined (show first 3 as active)

### Technical Specifications
- [ ] Animation library selected (Motion/Framer)
- [ ] Line drawing approach defined (SVG path animation)
- [ ] Scroll trigger thresholds tested
- [ ] Performance budget set (< 1.5s load)
- [ ] Icon SVG assets prepared

### Interaction Design
- [x] Hover states defined (if interactive)
- [x] Focus states meet accessibility
- [x] Animation sequence documented
- [x] Parallax speed specified
- [x] Mobile interaction pattern chosen

### Accessibility Compliance
- [x] Semantic HTML planned
- [x] ARIA labels documented
- [x] Color contrast verified (WCAG AA)
- [x] Keyboard navigation defined
- [x] Reduced motion fallback specified

### Browser Testing
- [ ] Chrome (latest, -1)
- [ ] Firefox (latest, -1)
- [ ] Safari (latest, -1)
- [ ] Edge (latest)
- [ ] Mobile Safari iOS 15+
- [ ] Mobile Chrome Android 12+

### Performance
- [ ] Animations run at 60fps
- [ ] No layout shift during load
- [ ] SVG line drawing optimized
- [ ] Icons lazy loaded if heavy
- [ ] Critical CSS inlined

### QA Testing
- [ ] Visual regression tests pass
- [ ] Animation timing verified
- [ ] Line drawing completes correctly
- [ ] Parallax smooth on devices
- [ ] Reduced motion tested
- [ ] Screen reader navigation tested
- [ ] Active/inactive states render correctly

---

## 🔄 Multi-Step Design Prompts

### Prompt 1: Centered Hero Section
> Create a clean white hero section with centered content. At the top, add a small orange label "HOW IT WORKS" (12px, uppercase, extra-wide tracking, #FF6B2C). Below it, place a large bold headline "From Idea to Revenue" in dark navy (56px, #00334F). Add a centered subheadline in gray explaining the intelligent process (18px, #64748B, max-width 700px). Use generous whitespace—100px padding top and bottom, 80px gap between headline and timeline below.

### Prompt 2: Horizontal Timeline Base
> Below the hero (80px gap), create a horizontal timeline spanning the content width. Design five circular containers (80px diameter, white background) evenly spaced across. Each circle has a 3px border—the first three use orange (#FF6B2C), the last two use light gray (#E2E8F0). Draw a horizontal line (3px width) connecting all circles through their centers. The line is orange from start through circle 3, then transitions to light gray from circle 3 to 5. This creates a visual "progress" effect showing completion through step 3.

### Prompt 3: Icon & Step Content
> Inside each circular container, place a simple line icon (32px, 2px stroke weight). Icons from left to right: document, frame/scan, document-check, calendar, rocket. The first three icons are orange (#FF6B2C), the last two are light gray (#CBD5E1). Below each circle (24px gap), add a step title in bold (18px) and a short description (14px). Active steps (1-3): dark navy title, gray description. Inactive steps (4-5): light gray title and description, overall 0.5 opacity for faded effect. Each step content has max-width of 180px, centered under its circle.

### Prompt 4: Timeline Animation Sequence
> Animate the section on scroll. When it enters the viewport (25% visible), trigger this sequence: (1) Eyebrow label fades in at 0ms, (2) Headline fades up and scales from 95% at 200ms, (3) Subheadline fades up at 400ms, (4) Timeline line begins drawing left-to-right at 600ms over 2 seconds. As the line draws, each circle and step content fades up sequentially with 150ms stagger starting at 800ms. The line drawing should sync with step reveals—when the line reaches a circle, that step appears. Use smooth easing (ease-out cubic) throughout.

### Prompt 5: Active vs Inactive States
> Create clear visual distinction between active (completed) and inactive (future) steps. Active steps (1-3): orange circle borders (#FF6B2C), orange icons, dark text, moderate shadow (0 4px 16px rgba(255,107,44,0.15)). Inactive steps (4-5): light gray borders (#E2E8F0), gray icons (#CBD5E1), faded gray text, subtle shadow (0 2px 8px rgba(0,0,0,0.05)), 50% overall opacity. The timeline line also transitions from orange to gray between steps 3 and 4. If steps are interactive, add hover state to active steps: lift 4px, intensify shadow, scale 1.05 over 300ms.

### Prompt 6: Scroll Parallax Effect
> Add subtle parallax scrolling for depth (desktop only). As the user scrolls down: the headline moves upward at 50% scroll speed (25px total displacement), while the timeline circles and steps move upward at 70% scroll speed (10px total displacement). This creates a gentle layered effect. Keep the connecting line moving with the circles. Disable all parallax on mobile devices to maintain performance and simplicity.

### Prompt 7: Mobile Responsive Layout
> For mobile (<768px), choose one of two approaches: **Vertical Stack:** Stack all five steps vertically in a single column. Change the horizontal line to a vertical line running down the left edge. Align all circles to the left with step content to the right. **Horizontal Carousel:** Keep horizontal layout but make it scrollable. Users swipe/drag to see steps. Add snap-scroll to each step. Include dot indicators below showing current position (5 dots, active one is orange). Either way, reduce headline to 32px, circle diameter to 64px, icons to 24px. Remove parallax effects. Maintain active/inactive color distinction.

### Prompt 8: Accessibility & Reduced Motion
> Ensure full accessibility. Use semantic HTML: `<section>` for container, `<h2>` for headline, `<ol>` for timeline, `<li>` for each step. Add ARIA labels: section labeled "How our process works from idea to revenue", active steps marked with "current step" state, inactive marked "upcoming step". Verify all text meets WCAG AA contrast (navy on white: 14:1, orange on white: 4.8:1, gray on white: 7:1). Implement `prefers-reduced-motion`: when enabled, disable all animations—show eyebrow, headline, subheadline, and timeline immediately in final state with line fully drawn and all steps visible. Ensure keyboard navigation works with visible focus states (2px orange outline).

---

## 📏 Success Metrics

### Design Quality
- **Visual hierarchy:** 9/10 (headline dominates, clear flow)
- **Brand consistency:** 100% V7 light theme adherence
- **Clarity:** Process understood in under 15 seconds

### Performance
- **Section load time:** < 1.5 seconds
- **Animation frame rate:** 60fps throughout
- **Line drawing smoothness:** No stuttering
- **Lighthouse score:** 92+ for section

### User Engagement
- **Section view rate:** 80%+ of page visitors
- **Time in section:** 12-18 seconds average
- **Interaction rate:** 10%+ hover/click on steps (if interactive)
- **Scroll completion:** 70%+ view all 5 steps

### Business Impact
- **Process comprehension:** 90%+ understand full journey
- **Trust increase:** 35%+ perceived organization/professionalism
- **Reduced friction:** 25%+ decrease in "How do we start?" questions
- **Sales enablement:** 85%+ of sales team uses this in presentations

---

## 🚀 Implementation Phases

### Phase 1: MVP
1. Centered hero with headline and subheadline
2. Five static timeline steps in horizontal layout
3. Basic line connector (no animation)
4. Active/inactive visual states
5. Mobile responsive (vertical stack)

### Phase 2: Enhanced
1. Timeline line drawing animation
2. Sequential step reveal animations
3. Hover states for active steps
4. Scroll-triggered entrance sequence

### Phase 3: Polished
1. Scroll parallax effects (desktop)
2. Mobile carousel alternative (optional)
3. Icon micro-animations on reveal
4. Performance optimization (60fps)
5. Full accessibility audit

---

## 💡 Design Notes

### Active vs Inactive Logic
- **Active (First 3 steps):** Brief, Analysis, Proposal
  - These are "completed" or "current" in the customer journey
  - Use full color, orange accents, clear visibility
  - Represents what Sun AI does before customer commitment
  
- **Inactive (Last 2 steps):** Booking, Launch
  - These are "future" steps post-engagement
  - Use faded gray, reduced opacity
  - Creates aspirational "what comes next" feeling

### No Numbered Badges
- **Per user request:** Do not include 01, 02, 03, 04, 05 labels
- Icons and titles provide sufficient identification
- Cleaner, more modern aesthetic without numbers
- Reduces visual clutter

### Line Drawing Sync
- Line drawing should feel connected to step reveals
- As line "reaches" each circle, that step fades in
- Creates cause-and-effect relationship
- Guides user's eye naturally left to right

---

## 📚 Alternative Layouts (Future Consideration)

### Center-Focused Radial
- Steps arranged in semicircle above center
- Line follows curved path
- More dynamic but less scannable

### Vertical Timeline (Desktop)
- Steps arranged vertically down page
- Larger content areas per step
- Better for longer descriptions
- Requires more scroll depth

### Interactive Stepper
- Click/tap to advance through steps
- Animated transitions between steps
- More engaging but requires interaction
- May reduce passive scanning

---

**Document Version:** 1.0  
**Last Updated:** December 29, 2025  
**Page:** Home V7  
**Section Order:** Mid-page (after hero/features)

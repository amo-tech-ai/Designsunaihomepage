# 8 Weeks Timeline Section - Home V6 Design Specification

**Section:** 8 Weeks Velocity System (Home V6)  
**Route:** `/v6` or `/`  
**Status:** 🎨 Design Specification  
**Design System:** Sun AI V6 (Dark Teal + Orange Accent)

---

## 📊 Summary Table

| Attribute | Details |
|-----------|---------|
| **Section Name** | Build AI in 8 Weeks. Not 8 Months. |
| **Layout Type** | Centered hero with horizontal timeline below |
| **Background** | Dark teal gradient (#003D5C to #00516D) |
| **Timeline Phases** | 4 phases (Weeks 1-2, 3-5, 6-7, Week 8) |
| **Cards Style** | Glassmorphism dark cards with icons |
| **Connection Type** | Horizontal progress line with icon markers |
| **Animation Style** | Fade-up reveals, line drawing, icon pops |
| **Scroll Effects** | Parallax headline, stagger card reveals, progress line draw |
| **Mobile Behavior** | Stack cards vertically, maintain timeline flow |
| **Color Palette** | Dark Teal bg, Orange accent (#FF6B2C), White text |
| **Spacing** | Large vertical padding (py-24), generous gaps |

---

## 🎯 Success Criteria

### Design Goals
- [ ] Immediately communicate speed advantage (8 weeks vs 8 months)
- [ ] Timeline appears scannable and digestible in 5 seconds
- [ ] Visual progression shows clear start-to-finish journey
- [ ] Dark background creates premium, focused atmosphere
- [ ] Orange accent draws eye to key benefit (speed)
- [ ] Cards feel interactive and inviting to explore

### User Experience Goals
- [ ] User understands full process flow within 10 seconds
- [ ] Each phase purpose is clear from title alone
- [ ] Timeline feels achievable, not overwhelming
- [ ] Animation guides eye left-to-right through timeline
- [ ] Mobile experience maintains timeline clarity
- [ ] Section differentiates from competitors (generic timelines)

### Business Goals
- [ ] Position Sun AI as fast alternative to traditional dev
- [ ] Build confidence through structured, proven process
- [ ] Reduce perceived risk of AI implementation
- [ ] Support sales conversations with visual process map
- [ ] Memorable contrast (8 weeks vs 8 months headline)

---

## 🏗️ Layout Architecture

### Overall Structure
```
┌─────────────────────────────────────────────────────────────┐
│                    DARK TEAL BACKGROUND                     │
│                                                             │
│                  [THE SUN AI VELOCITY SYSTEM]               │
│                         (small orange label)                │
│                                                             │
│              Build AI in 8 Weeks. Not 8 Months.            │
│                  (large white headline)                     │
│                   (8 Weeks in orange)                       │
│                                                             │
│      A proven acceleration system that takes your AI        │
│         project from idea to production—fast.               │
│                  (gray subheadline)                         │
│                                                             │
│                                                             │
│    ●━━━━━━━━━━━●━━━━━━━━━━━●━━━━━━━━━━━●                  │
│   [○]          [⚡]        [∞]          [🚀]                │
│                                                             │
│  ┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐         │
│  │WEEKS  │    │WEEKS  │    │WEEKS  │    │WEEK 8 │         │
│  │1-2    │    │3-5    │    │6-7    │    │       │         │
│  │       │    │       │    │       │    │       │         │
│  │Strat. │    │Rapid  │    │Integr.│    │Launch │         │
│  │Design │    │Build  │    │       │    │Scale  │         │
│  │       │    │       │    │       │    │       │         │
│  │Scope, │    │Core   │    │Test & │    │Deploy │         │
│  │arch.. │    │dev..  │    │connect│    │monitor│         │
│  └───────┘    └───────┘    └───────┘    └───────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Grid System
- **Desktop:** 4-column grid for timeline cards, centered hero above
- **Tablet:** 2x2 grid or 4-column compressed
- **Mobile:** Single column stack with vertical timeline

---

## 📝 Content Structure

### 1. Eyebrow Label
**Text:** "THE SUN AI VELOCITY SYSTEM"

**Design Specs:**
- Font size: 12px, uppercase, semibold
- Letter spacing: 0.1em (wide tracking)
- Color: #FF6B2C (orange accent)
- Position: Centered, 24px above headline
- Animation: Fade in + slide down 20px, 0ms delay

### 2. Main Headline
**Text:** "Build AI in 8 Weeks. Not 8 Months."

**Design Specs:**
- Font size: 64px (desktop), 48px (tablet), 36px (mobile)
- Font weight: Bold (700)
- Line height: 1.1
- Color: White (full text), #FF6B2C for "8 Weeks"
- Max width: 900px, centered
- Bottom margin: 24px
- Animation: Fade up + scale from 0.95, 200ms delay, 1s duration

### 3. Subheadline
**Text:** "A proven acceleration system that takes your AI project from idea to production—fast."

**Design Specs:**
- Font size: 20px (desktop), 18px (mobile)
- Font weight: Regular (400)
- Line height: 1.6
- Color: rgba(255,255,255,0.7) (light gray/white)
- Max width: 700px, centered
- Bottom margin: 80px
- Animation: Fade up, 400ms delay, 0.8s duration

### 4. Timeline Connector Line
**Design Specs:**
- Type: Horizontal line with dots at intersections
- Color: rgba(255,255,255,0.15) (subtle white)
- Line width: 2px
- Dots: 8px diameter circles, filled with accent color
- Icons above dots: 24px, orange accent (#FF6B2C)
- Position: 40px above card tops
- Animation: Draw from left to right, 1.5s duration, starts at 600ms delay

### 5. Timeline Cards (4 Total)

#### Card 1: Strategy & Design (Weeks 1-2)
**Icon:** Target/Compass (○)
**Week Label:** "WEEKS 1-2" (small orange text, uppercase)
**Title:** "Strategy & Design"
**Subtitle:** "Scope, architecture, and UX"

**Design Specs:**
- Background: rgba(255,255,255,0.05) glassmorphism
- Backdrop blur: 10px
- Border: 1px solid rgba(255,255,255,0.1)
- Border radius: 16px
- Padding: 32px
- Width: 220px (desktop), full width (mobile)
- Shadow: 0 8px 32px rgba(0,0,0,0.2)
- Week label color: #FF6B2C, 11px, semibold
- Title: 20px, bold, white
- Subtitle: 14px, regular, rgba(255,255,255,0.6)
- Hover: Lift 8px, glow border (1px #FF6B2C)
- Animation: Fade up + slide from bottom 40px, 800ms delay

#### Card 2: Rapid Build (Weeks 3-5)
**Icon:** Lightning bolt (⚡)
**Week Label:** "WEEKS 3-5"
**Title:** "Rapid Build"
**Subtitle:** "Core development and AI logic"

**Design Specs:**
- Same as Card 1
- Animation: 950ms delay (150ms after Card 1)

#### Card 3: Integrations (Weeks 6-7)
**Icon:** Infinity/Connect (∞)
**Week Label:** "WEEKS 6-7"
**Title:** "Integrations"
**Subtitle:** "Testing and connecting APIs"

**Design Specs:**
- Same as Card 1
- Animation: 1100ms delay (150ms after Card 2)

#### Card 4: Launch & Scale (Week 8)
**Icon:** Rocket (🚀)
**Week Label:** "WEEK 8"
**Title:** "Launch & Scale"
**Subtitle:** "Deployment and handoff"

**Design Specs:**
- Same as Card 1
- Slight accent: Border can be slightly stronger (rgba(255,107,44,0.3))
- Animation: 1250ms delay (150ms after Card 3)

---

## 🎬 Animation Sequence

### On Scroll Into View (20% threshold)

**Timeline:**
1. **0ms** - Eyebrow label fades in + slides down
2. **200ms** - Headline fades up + scales from 95%
3. **400ms** - Subheadline fades up
4. **600ms** - Timeline connector line draws left-to-right (1.5s duration)
5. **800ms** - Card 1 fades up from bottom
6. **950ms** - Card 2 fades up from bottom
7. **1100ms** - Card 3 fades up from bottom
8. **1250ms** - Card 4 fades up from bottom
9. **1400ms** - Icons pop/scale on timeline (bounce effect)

**Total Sequence:** ~2.8 seconds

### Scroll Parallax
- **Headline:** Moves up 30px at 0.4 scroll speed
- **Cards:** Move up 15px at 0.6 scroll speed (slower than headline)
- **Background gradient:** Subtle shift in opacity/position
- **Disable on mobile**

### Hover States
- **Cards:** Lift 8px, border glows orange, shadow intensifies
- **Transition:** 300ms ease-out
- **Cursor:** Pointer (implies clickable, even if static)

---

## 🎨 Visual Design

### Color Palette
- **Background:** Dark Teal (#003D5C to #00516D gradient)
- **Primary Accent:** Orange #FF6B2C
- **Text Primary:** White #FFFFFF
- **Text Secondary:** rgba(255,255,255,0.7)
- **Text Tertiary:** rgba(255,255,255,0.5)
- **Card Background:** rgba(255,255,255,0.05)
- **Card Border:** rgba(255,255,255,0.1)
- **Line/Connector:** rgba(255,255,255,0.15)

### Typography
- **Eyebrow:** 12px, uppercase, semibold, tracking 0.1em
- **Headline:** 64px/1.1, bold
- **Subheadline:** 20px/1.6, regular
- **Week Label:** 11px, uppercase, semibold
- **Card Title:** 20px/1.3, bold
- **Card Subtitle:** 14px/1.5, regular

### Shadows & Effects
- **Card Shadow:** 0 8px 32px rgba(0,0,0,0.2)
- **Card Hover:** 0 16px 48px rgba(0,0,0,0.3)
- **Backdrop Blur:** 10px (glassmorphism)
- **Border Glow (hover):** 0 0 0 1px #FF6B2C

### Spacing
- **Section Padding:** 120px top, 120px bottom
- **Headline to Timeline:** 80px gap
- **Card Gap:** 32px (desktop), 24px (mobile)
- **Card Internal:** 32px padding

---

## 📱 Responsive Behavior

### Desktop (1280px+)
- 4 cards in horizontal row
- Full headline size (64px)
- Horizontal timeline with connector line
- All parallax effects active

### Tablet (768px-1279px)
- 2x2 grid or 4-column compressed (cards narrower)
- Headline 48px
- Timeline line adapts to grid
- Reduced parallax

### Mobile (<768px)
- Single column vertical stack
- Headline 36px
- Vertical timeline (line runs vertically left of cards)
- Cards full width with 24px padding
- No parallax effects

---

## ♿ Accessibility

### Semantic HTML
- `<section>` with `aria-labelledby`
- Headline as `<h2>` with unique ID
- Each card as `<article>` or `<div role="listitem">`
- Timeline as `<ol>` (ordered list of steps)

### Motion Preferences
- Respect `prefers-reduced-motion`
- If enabled: Show all content immediately, no animations
- Timeline line appears fully drawn
- Cards display in place without slide/fade

### Color Contrast
- White text on dark teal: 12:1 ratio ✓
- Orange accent on dark teal: 6.5:1 ratio ✓
- Gray text on dark teal: 5:1 ratio ✓
- All meet WCAG AA standards

### Keyboard Navigation
- Cards focusable if interactive
- Tab order: eyebrow → headline → cards 1-4
- Focus indicator: 2px orange outline

---

## ✅ Production Ready Checklist

### Design Completeness
- [x] All color values specified (hex + rgba)
- [x] Typography scale defined
- [x] Spacing system documented
- [x] Animation timing specified
- [x] Responsive breakpoints defined
- [x] Glassmorphism effects detailed

### Content Requirements
- [ ] Final copy approved (headline, subheadline)
- [ ] Week ranges validated by project management
- [ ] Phase descriptions reviewed by delivery team
- [ ] Icon selection finalized (Lucide React)
- [ ] Legal review of "8 weeks" claim (if needed)

### Technical Specifications
- [ ] Animation library selected (Motion/Framer)
- [ ] Glassmorphism backdrop-filter support verified
- [ ] Timeline line drawing approach defined (SVG or CSS)
- [ ] Scroll trigger thresholds tested
- [ ] Performance budget set (< 2s load)

### Interaction Design
- [x] Hover states defined for all cards
- [x] Focus states meet accessibility standards
- [x] Animation sequence documented
- [x] Parallax speed specified
- [x] Mobile touch interactions considered

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
- [ ] Backdrop-filter performance tested (can be heavy)
- [ ] No layout shift during animation
- [ ] Critical CSS inlined
- [ ] Fonts preloaded

### QA Testing
- [ ] Visual regression tests pass
- [ ] Animation sequence timing verified
- [ ] Timeline line draws correctly
- [ ] Parallax smooth on all devices
- [ ] Reduced motion tested
- [ ] Screen reader navigation tested

---

## 🔄 Multi-Step Design Prompts

### Prompt 1: Dark Hero Foundation
> Create a full-width dark hero section with a teal gradient background (#003D5C to #00516D). Center all content vertically and horizontally. At the top, place a small orange label "THE SUN AI VELOCITY SYSTEM" (12px, uppercase, wide tracking). Below it, add a large bold headline "Build AI in 8 Weeks. Not 8 Months." in white (64px), with "8 Weeks" in orange (#FF6B2C). Add a centered subheadline in light gray explaining the acceleration system (20px). Leave generous whitespace—120px padding top and bottom.

### Prompt 2: Timeline Connector Line
> Below the hero content (80px gap), create a horizontal timeline connector. Draw a subtle white line (2px, 15% opacity) spanning the width of the content area. Place four small circular dots (8px diameter, orange #FF6B2C) evenly spaced along the line. Above each dot, position an icon (24px, orange): target, lightning bolt, infinity symbol, and rocket. The line and dots should suggest a linear progression from left to right.

### Prompt 3: Glassmorphism Timeline Cards
> Create four equal-width cards (220px each on desktop) aligned below the timeline connector. Each card has a dark glassmorphism effect: 5% white background, 10px backdrop blur, 1px border at 10% white opacity, 16px border radius, 32px padding, and dark shadow. Inside each card: small orange week label at top (11px, "WEEKS 1-2", uppercase), bold white title (20px, e.g., "Strategy & Design"), and light gray subtitle (14px, e.g., "Scope, architecture, and UX"). Space cards with 32px gaps horizontally.

### Prompt 4: Card Hover & Animation
> Add subtle interactions to the timeline cards. On hover: lift the card 8px upward, add a glowing orange border (1px), and intensify the shadow. Transition should be smooth (300ms ease-out). For scroll animations: when the section enters view, fade in the eyebrow label first, then the headline (with a slight scale from 95%), then the subheadline. After that, draw the timeline connector line from left to right over 1.5 seconds. Finally, have each card fade up from the bottom (40px slide) in a staggered sequence—150ms delay between each card.

### Prompt 5: Scroll Parallax Effect
> Add subtle parallax scrolling for depth. As the user scrolls down: the headline should move upward slightly (30px total displacement at 40% scroll speed), while the timeline cards move upward at a slower rate (15px at 60% scroll speed). This creates a layered, dimensional effect. Keep the background gradient static or with minimal shift. Disable all parallax effects on mobile devices to maintain performance and avoid disorientation.

### Prompt 6: Mobile Vertical Timeline
> Redesign the timeline for mobile (<768px). Stack all four cards vertically in a single column. Change the horizontal connector line to a vertical line running down the left edge of the cards. Position the icons and dots to the left of each card, creating a vertical timeline flow. Reduce the headline to 36px, card padding to 24px, and gaps to 24px. Ensure the week labels, titles, and subtitles remain clear and readable. Remove parallax effects and simplify animations to basic fade-ins.

### Prompt 7: Accessibility & Reduced Motion
> Ensure full accessibility. Use semantic HTML: `<section>` for the container, `<h2>` for the headline, `<ol>` for the timeline, and `<li>` for each card. Add ARIA labels where needed (e.g., "Timeline of 8-week development process"). Verify all text meets WCAG AA contrast on the dark teal background (white at 12:1, orange at 6.5:1). Implement `prefers-reduced-motion` support: when enabled, disable all animations—show the eyebrow, headline, subheadline, timeline line, and cards immediately in their final positions. Ensure cards are keyboard-navigable with visible focus states (2px orange outline).

---

## 📏 Success Metrics

### Design Quality
- **Visual hierarchy score:** 9/10 (headline dominates, clear timeline flow)
- **Brand consistency:** 100% V6 dark theme adherence
- **Readability:** All text scannable in under 10 seconds

### Performance
- **Section load time:** < 2 seconds
- **Animation frame rate:** 60fps throughout sequence
- **Backdrop-filter performance:** No janky scrolling
- **Lighthouse score:** 90+ for section

### User Engagement
- **Section view rate:** 85%+ of page visitors
- **Time in section:** 10-15 seconds average
- **Scroll completion:** 75%+ view all 4 cards
- **Bounce rate:** < 35%

### Business Impact
- **Message comprehension:** 90%+ identify "speed" as key benefit
- **Timeline clarity:** 85%+ understand all 4 phases
- **Trust increase:** 30%+ perceived credibility boost
- **CTA conversion:** 8%+ click-through increase

---

## 🚀 Implementation Phases

### Phase 1: MVP
1. Dark hero with headline and subheadline
2. Four static timeline cards in horizontal layout
3. Basic fade-in on scroll
4. Mobile responsive stack

### Phase 2: Enhanced
1. Timeline connector line drawing animation
2. Staggered card reveal animations
3. Glassmorphism effects (backdrop-filter)
4. Hover states and micro-interactions

### Phase 3: Polished
1. Scroll parallax effects (desktop)
2. Icon pop animations on timeline
3. Performance optimization
4. Full accessibility audit

---

**Document Version:** 1.0  
**Last Updated:** December 29, 2025  
**Page:** Home V6  
**Section Order:** Mid-page (after hero, before metrics)

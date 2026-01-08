# PROCESS PAGE V12 — CALM LUXURY REDESIGN

**Purpose:** Apply V11 editorial style guide to process page  
**Route:** `/process/v12`  
**Key Change:** Replace purple/green gradients with calm luxury palette

---

## DESIGN SYSTEM ALIGNMENT

### Color Palette Changes

**OLD (V11):**
- Hero: `bg-gradient-to-br from-purple-600 via-purple-700 to-green-600`
- Pills: Glassmorphism with rounded corners
- CTAs: Rounded buttons with gradients

**NEW (V12 - Calm Luxury):**
- Hero: Dark navy `bg-[#1A1A1A]` or subtle gradient `from-[#1A1A1A] to-[#2D2D2D]`
- Accent: Amber `#F59E0B` for highlights
- Secondary: Warm off-white `#FDFCFB`
- No rounded buttons — square corners only
- No glassmorphism — clean borders

### Typography Updates

**Headings:**
- Font: Playfair Display (serif)
- H1: 60-72px, weight 700
- Color: White on dark, `#1A1A1A` on light

**Body:**
- Font: Inter (sans-serif)
- Size: 16-18px
- Color: `#666666` on light, `#E5E5E5` on dark

**Labels:**
- Uppercase, tracking-widest
- Size: 10-12px, weight 700
- Color: `#999999` or `#F59E0B`

---

## HERO SECTION REDESIGN

### Layout (Dark Background)

**Background:**
- Base: `bg-[#1A1A1A]` (solid dark)
- Optional subtle gradient: `bg-gradient-to-br from-[#1A1A1A] via-[#242424] to-[#1A1A1A]`

**Left Column (40% width):**
- Eyebrow: "AMO AI PROCESS" (orange, 12px, uppercase, 600 weight)
- Headline: "8 Weeks." (white, 60-72px, Playfair, 700 weight)
- Headline accent: "Not 8 Months." (orange `#F59E0B`, same size, 700 weight)
- Body text: "We move fast without cutting corners—AI acceleration + expert delivery for measurable results." (neutral-300, 18-20px, Lora font, line-height 1.6)
- CTA 1: "Start Your AI Brief" (bg-orange-500, square corners, white text, bold)
- CTA 2: "See Success Stories" (border button, white border, white text)

**Right Column (60% width):**
- Circular animated diagram (same as reference image)
- Center circle: "8 Weeks" (white, 48px, bold), "DELIVERY CYCLE" (orange, 12px, uppercase)
- Outer ring: Thin gray circle with orange arc animation
- Icons positioned around ring:
  - Top right: Rocket (Launch)
  - Right: Code brackets (Design)
  - Bottom: Layers (Build)
  - Left: Shield with check (Test)
- Icons: 24px, white, inside 48px circle containers (border-2 white/20)

**Stats Bar (below content):**
- 3 columns, white text
- Stat 1: "20+" (36px, bold), "PROJECTS DELIVERED" (12px, uppercase, neutral-400)
- Stat 2: "$2M+" (36px, bold), "MONTHLY GMV" (12px, uppercase, neutral-400)
- Stat 3: "300%" (36px, bold), "AVERAGE ROI" (12px, uppercase, neutral-400)

---

## HERO ANIMATION SPECS

### Circular Diagram Animation

**Static Elements:**
- Center circle: 280px diameter, border-2 neutral-700
- Text "8 Weeks": Always visible
- Text "DELIVERY CYCLE": Always visible, amber color

**Animated Elements:**
1. **Orange Arc (Motion/React):**
   - Initial: Arc at 0° (top)
   - Animation: Rotate clockwise 360° over 8 seconds
   - Loop: Infinite
   - Easing: linear
   - Stroke: 3px, `#F59E0B`
   - Opacity: 100%

2. **Icon Pulse:**
   - When orange arc passes an icon, trigger pulse
   - Scale: 1 → 1.15 → 1
   - Duration: 400ms
   - Easing: ease-out
   - Glow effect: shadow-lg with orange tint

3. **Label Highlight:**
   - When arc passes icon, change label color
   - Color: neutral-400 → orange-500
   - Duration: 300ms
   - Return to neutral-400 after 1 second

**Icon Positions (degrees):**
- Launch: 45° (top right)
- Design: 135° (right)
- Build: 225° (bottom)
- Test: 315° (left)

---

## PHASE CARDS REDESIGN

### Card Style (Calm Luxury)

**Container:**
- Background: White `#FFFFFF`
- Border: 1px solid `#EFE9E4` (NOT 2px, more subtle)
- Border radius: 0px (square corners, editorial style)
- Padding: 32px (desktop), 24px (mobile)
- Hover: Border color → `#D1C7BD`, NO shadow

**Collapsed State:**
- Icon container: 56px square, background `#FAF8F6`, square corners
- Icon: 28px, color `#1A1A1A`
- Phase number: Amber `#F59E0B`, 32px, bold, Playfair
- Phase name: `#1A1A1A`, 24px, 600 weight, Inter
- Duration badge: Inline pill, `bg-[#FAF8F6]`, `text-[#666666]`, square corners

**Expanded State:**
- Background: `#FDFCFB` (warm off-white)
- Border top: 1px solid `#EFE9E4`
- Content: Two-column grid
- Bullet points: Small amber squares (6px) instead of colored dots

**Remove:**
- All colorful backgrounds (purple-50, blue-50, etc.)
- All rounded corners on badges
- ChevronDown icon (replace with simple "+" / "−" symbol)

---

## PHASE COLOR SYSTEM (SIMPLIFIED)

**OLD:** 7 different colors (purple, blue, indigo, green, orange, yellow, red)

**NEW:** Unified amber accent system
- All phase numbers: Amber `#F59E0B`
- All icons: Dark `#1A1A1A` on light gray `#FAF8F6` background
- Active/expanded cards: Amber accent line on left (4px border-l-4)
- No background color changes

**Phase Icon Containers:**
- Size: 56px × 56px
- Background: `#FAF8F6` (same for all)
- Border: 1px solid `#EFE9E4`
- Icon color: `#1A1A1A`

---

## CLIENT INVOLVEMENT MATRIX REDESIGN

### Table Style

**Header:**
- Background: `#1A1A1A` (dark, not gradient)
- Text: White
- Font: 14px, 600 weight, uppercase, tracking-wider
- Padding: 16px vertical

**Rows:**
- Background: White
- Border bottom: 1px solid `#EFE9E4`
- Hover: `bg-[#FDFCFB]` (warm off-white, NOT colored)
- Text: `#1A1A1A` for labels, `#666666` for content

**Highlight Column (Our Process):**
- Background: `#FFF7ED` (amber-50, very subtle)
- Text: `#F59E0B` (amber) for values
- Font weight: 600

**Footer Row:**
- Background: `#FAF8F6`
- Border top: 2px solid `#F59E0B` (amber accent)
- Text: `#1A1A1A`, bold

---

## METHODOLOGY COMPARISON REDESIGN

### Table Style

**Header:**
- Background: `#1A1A1A`
- Text: White
- Highlight column (Our Process): Add amber underline (border-b-4 border-amber-500)

**Comparison Cells:**
- Our Process column: `bg-[#FFF7ED]`, text `#F59E0B`, weight 600
- Others: White background, text `#666666`
- Checkmarks: Replace green highlights with amber `#F59E0B`

**Remove:**
- Gradient header
- Colored row hovers (use neutral-50 instead)

---

## FINAL CTA SECTION

**Background:**
- Dark `#1A1A1A` (NOT gradient)
- Optional: Subtle texture or pattern

**Content:**
- Headline: White, 48-60px, Playfair, 600 weight
- Body: `#E5E5E5`, 18-20px, Lora
- CTA 1: `bg-[#F59E0B]`, text white, square corners, bold
- CTA 2: Border button, `border-white`, text white

**Padding:**
- Desktop: py-32
- Mobile: py-20

---

## BUTTON SPECIFICATIONS

### Primary CTA (Accent)
```
Background: #F59E0B (amber)
Text: #1A1A1A (dark, high contrast)
Padding: px-10 py-5
Font: 600 weight, 16px
Border radius: 0px (square)
Hover: bg-[#FCD34D] (lighter amber)
Transition: 200ms ease
```

### Secondary CTA (Border)
```
Background: transparent
Border: 1px solid #1A1A1A (or white on dark)
Text: #1A1A1A (or white on dark)
Padding: px-10 py-5
Font: 600 weight, 16px
Border radius: 0px (square)
Hover: bg-[#1A1A1A], text white (invert)
Transition: 200ms ease
```

---

## RESPONSIVE BEHAVIOR

### Hero Section
**Desktop (1024px+):**
- Two-column layout (40/60 split)
- Circular diagram: 400px diameter
- Stats: Horizontal 3-column

**Tablet (768-1023px):**
- Two-column maintained
- Diagram: 320px diameter
- Stats: Horizontal 3-column

**Mobile (<768px):**
- Single column (stacked)
- Headline first
- Diagram: 280px diameter, centered
- Stats: Vertical stack, centered

### Phase Cards
**All Breakpoints:**
- Full width
- Consistent padding adjustments
- No grid layout (vertical stack only)

---

## ANIMATION IMPLEMENTATION

### Hero Circle Animation (Motion/React)

```typescript
// Rotating arc animation
<motion.path
  d="..." // Arc path
  stroke="#F59E0B"
  strokeWidth={3}
  fill="none"
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }}
/>
```

### Icon Pulse (Triggered by Arc)

```typescript
// When arc passes icon position
<motion.div
  animate={isActive ? {
    scale: [1, 1.15, 1],
    boxShadow: ['none', '0 0 20px rgba(245, 158, 11, 0.5)', 'none']
  } : {}}
  transition={{ duration: 0.4 }}
>
  <Icon />
</motion.div>
```

### Phase Card Expand

```typescript
// Smooth height animation
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  {/* Expanded content */}
</motion.div>
```

---

## CONTENT UPDATES

### Eyebrow Text
- OLD: "OUR PROCESS"
- NEW: "AMO AI PROCESS" (matches reference image)

### Headline
- OLD: "7-Phase Development Model: From Idea to Launch"
- NEW: "8 Weeks. Not 8 Months." (split into two lines, second line in amber)

### Subheadline
- OLD: Multiple sentences
- NEW: "We move fast without cutting corners—AI acceleration + expert delivery for measurable results."

### Stats
- 20+ Projects Delivered
- $2M+ Monthly GMV
- 300% Average ROI

---

## FOOTER UPDATE

### Add New Link to "Company" Column

**Location:** FooterV11.tsx, Company section

**Add after "Our Process" link:**
```tsx
<li>
  <Link 
    to="/process/v12" 
    className="text-neutral-600 hover:text-orange-500 transition-colors text-[15px] block"
  >
    Process V12
  </Link>
</li>
```

---

## ROUTE CONFIGURATION

### Add to routes/index.tsx

```tsx
{ path: '/process/v12', element: <ProcessPageV12Wrapper /> }
```

### Add to routes/wrappers/MarketingPageWrappers.tsx

```tsx
const ProcessPageV12 = lazy(() => import('../../components/premium/v11/ProcessPageV12').then(m => ({ default: m.ProcessPageV12 })));

export const ProcessPageV12Wrapper = () => <ProcessPageV12 />;
```

---

## IMPLEMENTATION CHECKLIST

### Phase 1 — Structure & Colors
- [ ] Create ProcessPageV12.tsx component
- [ ] Replace all gradient backgrounds with solid colors
- [ ] Update color palette (purple/green → neutral/amber)
- [ ] Remove all rounded corners from buttons
- [ ] Apply Playfair Display to headings
- [ ] Change all borders to 1px (remove 2px borders)

### Phase 2 — Hero Section
- [ ] Dark background (#1A1A1A)
- [ ] Two-column layout (left: content, right: diagram)
- [ ] Eyebrow: "AMO AI PROCESS"
- [ ] Headline: "8 Weeks. Not 8 Months."
- [ ] Circular animated diagram
- [ ] Orange arc rotation (8 seconds, infinite)
- [ ] Icon pulse on arc pass
- [ ] Stats bar (20+, $2M+, 300%)

### Phase 3 — Phase Cards
- [ ] Remove colored backgrounds
- [ ] Square corners on all cards
- [ ] Unified amber accent system
- [ ] Replace colored bullets with amber squares
- [ ] Update icon containers (neutral backgrounds)
- [ ] Simplified expand/collapse (no chevron rotation)

### Phase 4 — Tables
- [ ] Client Involvement Matrix: Dark header, amber highlights
- [ ] Methodology Comparison: Remove gradient, use amber
- [ ] Consistent border styling (#EFE9E4)
- [ ] Neutral hover states

### Phase 5 — Final CTA
- [ ] Dark background (no gradient)
- [ ] White headline (Playfair)
- [ ] Amber primary button
- [ ] Border secondary button

### Phase 6 — Footer & Routes
- [ ] Add link to FooterV11 (Company section)
- [ ] Create wrapper component
- [ ] Add route to index.tsx
- [ ] Test navigation

### Phase 7 — Responsive
- [ ] Test mobile layout (stacked)
- [ ] Test tablet layout (2-column)
- [ ] Verify circular diagram scales properly
- [ ] Check all animations work on touch devices

---

## SUCCESS CRITERIA

### Visual
- [ ] No purple/green gradients visible
- [ ] All buttons have square corners
- [ ] Amber accent used consistently (#F59E0B)
- [ ] Playfair Display on all headings
- [ ] Clean borders (1px, #EFE9E4)
- [ ] Generous whitespace maintained

### Functional
- [ ] Circular diagram animates smoothly (8s loop)
- [ ] Icons pulse when arc passes
- [ ] Phase cards expand/collapse
- [ ] All links work
- [ ] Responsive on all breakpoints

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible (amber outline)
- [ ] ARIA labels present
- [ ] Sufficient color contrast

### Performance
- [ ] Page loads <2s
- [ ] Animations run at 60fps
- [ ] No layout shift
- [ ] Lighthouse score >90

---

**END OF DOCUMENT**

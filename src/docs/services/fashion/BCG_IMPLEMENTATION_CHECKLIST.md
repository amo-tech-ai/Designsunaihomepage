# BCG Design System Implementation Checklist
## Fashion Industry Page - `/industries/fashion`

**Status:** 🔄 In Progress  
**Target:** BCG.com consulting-grade design  
**Date:** February 11, 2026

---

## Phase 1: Design Audit & Analysis ✅

### 1.1 Screenshot Analysis
- [x] Screenshot 1: Article layout (Gen Z fashion article)
- [x] Screenshot 2: Fashion Industry overview page  
- [x] Screenshot 3: Executive Guide article
- [x] Identify common patterns across all screenshots

### 1.2 BCG Design System Extraction
- [x] Color palette documented
- [x] Typography scale defined
- [x] Component patterns identified
- [x] Layout grid system understood
- [x] Border radius specifications (0px sharp corners)
- [x] Accent line specifications (48px × 3px green)

---

## Phase 2: Color System Migration 🔄

### 2.1 Replace Current Colors
- [ ] Replace `#1A3A32` (current green) → `#00A86B` (BCG green accent)
- [ ] Replace `#1F2421` (text) → `#212427` (BCG text primary)
- [ ] Replace `#6B7370` (muted text) → `#696969` (BCG text secondary)
- [ ] Replace `#8B9D8A` (borders) → `#E5E7EB` (BCG border)
- [ ] Replace `#FAF8F5` (background) → `#F8F9FA` (BCG surface)
- [ ] Update all gradient accents to match BCG palette

### 2.2 Component-Specific Colors
- [ ] Buttons: Background `#00A86B`, text `#212427`
- [ ] Stat numbers: `#00A86B` (green)
- [ ] Accent lines: `#00A86B`, 48px × 3px
- [ ] Borders: `#E5E7EB`, 1px solid
- [ ] Cards: White background, `#E5E7EB` border

---

## Phase 3: Typography Updates 🔄

### 3.1 Font Stack
- [ ] Update primary font to: `'Helvetica Neue', Helvetica, Arial, sans-serif`
- [ ] Remove custom font references if using non-standard fonts
- [ ] Test fallback rendering

### 3.2 Type Scale
- [ ] H1: 52px (down from current 4xl-6xl)
- [ ] H2: 38px (section titles)
- [ ] Body: 16px, line-height 1.6
- [ ] Caption: 13-14px (labels, sources)
- [ ] Small caps labels: uppercase, letter-spacing tight

### 3.3 Hierarchy Rules
- [ ] Headlines: Sentence case (not title case)
- [ ] Section labels: "EXHIBIT 1", "SOURCE:", etc. in small caps
- [ ] No all-caps headlines (only labels)
- [ ] Body text: Regular weight, generous line-height

---

## Phase 4: Component Redesign 🔄

### 4.1 Hero Section
- [ ] Full-bleed hero image (100vw)
- [ ] Dark overlay for text contrast
- [ ] Breadcrumb: `Industries › Fashion` format with `›` separator
- [ ] Remove parallax effects (BCG uses static hero)
- [ ] Title: 52px, white text on dark overlay
- [ ] Subtitle: 16px, white/80% opacity

### 4.2 Stats Grid (4-Column)
- [ ] Remove rounded corners (border-radius: 0)
- [ ] Thin border `#E5E7EB`
- [ ] Large stat number in green `#00A86B`
- [ ] Stat label below number
- [ ] Source text at bottom in 13px
- [ ] Equal column widths
- [ ] White background

### 4.3 Service Cards (3×2 Grid)
- [ ] Sharp corners (border-radius: 0)
- [ ] Border: 1px solid `#E5E7EB`
- [ ] Large faded number (01, 02...) in top-right corner
- [ ] Badge labels: colored pills (HIGH DEMAND, QUICK WIN, etc.)
- [ ] Green accent line (48×3px) below title
- [ ] ROI value in green, bold
- [ ] Hover: Background `#F8F9FA` (not scale/transform)
- [ ] Tags: Small, grey text with dots as separators

### 4.4 Data Visualizations
- [ ] Label as "EXHIBIT 1", "EXHIBIT 2", etc.
- [ ] Source note below in 13px grey
- [ ] Bar charts: Thin bars, grey with green highlights
- [ ] Remove animated progress bars (use static bars)
- [ ] Clean, minimal axis labels
- [ ] Data table: Alternating row backgrounds (#F8F9FA)

### 4.5 Process Flow / Timeline
- [ ] Horizontal layout (left to right)
- [ ] Numbered circles (① ② ③) in green
- [ ] Arrows between phases (→)
- [ ] Phase boxes with sharp corners
- [ ] Bullet points for deliverables
- [ ] ROI timeframe at bottom of each phase
- [ ] White background, grey borders

### 4.6 Team Profiles
- [ ] Circular headshots (80px diameter)
- [ ] Name + Title below photo
- [ ] No hover effects (static)
- [ ] 3-4 column grid
- [ ] White background
- [ ] Minimal metadata (name, role only)

### 4.7 Insights/Articles Grid
- [ ] 16:9 or 4:3 image aspect ratio (consistent)
- [ ] No rounded corners on images
- [ ] Small category badge (top-left or above title)
- [ ] Title: 16-18px
- [ ] Date/meta: 13px grey
- [ ] Hover: No animation (or subtle grey background only)
- [ ] Border: 1px `#E5E7EB`

### 4.8 Related Content Footer
- [ ] Dark background (`#212427` or `#1A1A1A`)
- [ ] White text
- [ ] 3-4 column grid
- [ ] Small card images
- [ ] Minimal padding
- [ ] "Related Content" title in white

### 4.9 Footer
- [ ] Dark background (`#212427`)
- [ ] White text
- [ ] Logo + navigation links
- [ ] Social icons (LinkedIn, Twitter, etc.)
- [ ] Legal links at bottom
- [ ] No newsletter form (BCG doesn't use in footer)

---

## Phase 5: Layout & Spacing 🔄

### 5.1 Grid System
- [ ] Max content width: 1200px
- [ ] Centered with auto margins
- [ ] Full-bleed for hero images only
- [ ] Consistent horizontal padding: 24-32px

### 5.2 Vertical Rhythm
- [ ] Section spacing: 64-96px between sections
- [ ] Card padding: 24-32px
- [ ] Component spacing: 16-24px
- [ ] White space: Generous (BCG is very spacious)

### 5.3 Responsive Breakpoints
- [ ] Desktop: 1200px+
- [ ] Tablet: 768px - 1199px
- [ ] Mobile: < 768px
- [ ] Stack columns vertically on mobile
- [ ] Reduce section padding on mobile (32-48px)

---

## Phase 6: Animation Removal/Reduction ⏳

### 6.1 Remove Heavy Animations
- [ ] Remove parallax scrolling effects
- [ ] Remove scale transforms on hover
- [ ] Remove complex scroll-driven animations
- [ ] Remove staggered entrance animations
- [ ] Remove glassmorphism/backdrop-blur effects

### 6.2 Keep Minimal Interactions
- [ ] Subtle hover states (background color change only)
- [ ] Simple opacity transitions (200-300ms)
- [ ] No motion on initial load
- [ ] Respect `prefers-reduced-motion`

---

## Phase 7: Content & Copy Updates ⏳

### 7.1 Headlines
- [ ] Benefit-led headlines (not feature-led)
- [ ] Sentence case (not title case)
- [ ] Concise, punchy statements
- [ ] Data-driven when possible

### 7.2 Body Copy
- [ ] Lead with data/stats
- [ ] Short paragraphs (2-3 sentences max)
- [ ] Active voice
- [ ] Professional tone (not salesy)

### 7.3 CTAs
- [ ] Action verbs: "Explore", "Learn More", "Download Guide"
- [ ] No hype language
- [ ] Clear, specific benefits

---

## Phase 8: Testing & Validation ⏳

### 8.1 Visual Regression Testing
- [ ] Compare side-by-side with BCG screenshots
- [ ] Check color accuracy (hex values)
- [ ] Verify typography rendering
- [ ] Check spacing consistency
- [ ] Validate border radius (0px)

### 8.2 Responsive Testing
- [ ] Desktop 1920px
- [ ] Laptop 1440px
- [ ] Tablet 768px
- [ ] Mobile 375px
- [ ] Test grid breakpoints

### 8.3 Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 8.4 Performance
- [ ] Lighthouse score > 90
- [ ] No layout shift (CLS < 0.1)
- [ ] Fast paint (FCP < 1.5s)
- [ ] Remove unused animations

---

## Phase 9: Documentation & Handoff ⏳

### 9.1 Code Documentation
- [ ] Component prop types documented
- [ ] Usage examples provided
- [ ] Design token reference created
- [ ] Migration notes written

### 9.2 Design Documentation
- [ ] Screenshot comparisons (before/after)
- [ ] Color palette reference
- [ ] Typography scale reference
- [ ] Component patterns documented

### 9.3 Production Readiness
- [ ] All TypeScript errors resolved
- [ ] No console warnings
- [ ] All images optimized
- [ ] Code reviewed and cleaned

---

## Key Differences: Current vs. BCG Target

| Aspect | Current | BCG Target |
|--------|---------|------------|
| **Border Radius** | 12px+ rounded | 0px (sharp corners) |
| **Primary Green** | `#1A3A32` (dark) | `#00A86B` (bright) |
| **Animations** | Heavy parallax, scale | Minimal/none |
| **Typography** | Custom fonts, various sizes | Helvetica, strict scale |
| **Cards** | Gradients, shadows | Flat, bordered |
| **Hero** | Parallax | Static full-bleed |
| **Stats** | Various styles | Consistent green numbers |
| **White Space** | Moderate | Generous |
| **Tone** | Luxury/premium | Professional/strategic |

---

## Progress Tracking

- **Phase 1:** ✅ Complete (Analysis)
- **Phase 2:** 🔄 In Progress (0/12 tasks)
- **Phase 3:** ⏳ Not Started (0/10 tasks)
- **Phase 4:** ⏳ Not Started (0/45 tasks)
- **Phase 5:** ⏳ Not Started (0/9 tasks)
- **Phase 6:** ⏳ Not Started (0/6 tasks)
- **Phase 7:** ⏳ Not Started (0/9 tasks)
- **Phase 8:** ⏳ Not Started (0/16 tasks)
- **Phase 9:** ⏳ Not Started (0/10 tasks)

**Total Progress:** 10/117 tasks (8.5%)

---

## Next Actions

1. Create BCG color token system
2. Update all component colors systematically
3. Remove border-radius from all cards
4. Replace hero with static full-bleed version
5. Redesign stats grid to match BCG 4-column pattern
6. Update service cards to match BCG specifications

---

**Last Updated:** February 11, 2026 10:45 AM  
**Assignee:** AI Product Systems Architect  
**Priority:** HIGH

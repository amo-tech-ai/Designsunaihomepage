# BCG Visual Validation Checklist - Print & Test

**Page:** `/industries/fashion`  
**Date:** February 11, 2026  
**Tester:** _________________  
**Status:** ⏳ Ready for Testing

---

## 🎨 Color Validation

### Primary Colors

- [ ] **Green Accent** = `#00A86B` (not `#1A3A32`)
  - Check: Stat numbers
  - Check: Accent lines
  - Check: CTAs
  - Check: Badges

- [ ] **Text Primary** = `#212427` (not black)
  - Check: Headlines
  - Check: Body text
  - Check: Card titles

- [ ] **Text Secondary** = `#696969` (not too dark)
  - Check: Captions
  - Check: Meta text
  - Check: Source notes

- [ ] **Borders** = `#E5E7EB` (light grey)
  - Check: Card borders
  - Check: Dividers
  - Check: Table borders

- [ ] **Surface** = `#F8F9FA` (off-white)
  - Check: Card hover states
  - Check: Alternate backgrounds

### Dark Sections

- [ ] **Dark Background** = `#212427`
  - Check: Related content section
  - Check: Footer area

---

## 📐 Typography Validation

### Font Family

- [ ] **Helvetica Neue** (or fallback)
  - All headlines: ____________
  - All body text: ____________
  - All captions: ____________

### Font Sizes

- [ ] **Hero (H1)** = 52px
  - Hero title: ____________

- [ ] **Section (H2)** = 38px
  - Section titles: ____________

- [ ] **Body** = 16px
  - Paragraphs: ____________

- [ ] **Caption** = 13px
  - Labels: ____________
  - Source notes: ____________

### Font Weights

- [ ] **Headlines** = Normal (400), not bold
- [ ] **Body** = Normal (400)
- [ ] **Labels** = Semibold (600) for small caps only

---

## 🔲 Border Radius Validation

### Sharp Corners (0px)

- [ ] **Hero section** = No rounded corners
- [ ] **Stats grid cards** = Sharp corners
- [ ] **Service cards** = Sharp corners
- [ ] **Process flow cards** = Sharp corners
- [ ] **Insights cards** = Sharp corners
- [ ] **Related content cards** = Sharp corners

### Exceptions (Circular)

- [ ] **Team avatars** = Fully circular (OK)
- [ ] **Numbered circles** = Fully circular (OK)
- [ ] **Badge pills** = Slight rounding (OK for badges)

---

## 📏 Spacing Validation

### Section Gaps

- [ ] **Desktop sections** = 96px vertical gap
  - Measure between sections: ____________

- [ ] **Mobile sections** = 48px vertical gap
  - Test on mobile: ____________

### Card Padding

- [ ] **All cards** = 32px internal padding
  - Stats cards: ____________
  - Service cards: ____________
  - Process cards: ____________

### Container Width

- [ ] **Max width** = 1200px
  - Desktop content: ____________

---

## 🎯 BCG Signature Elements

### Green Accent Lines

- [ ] **Width** = 48px (not full width)
- [ ] **Height** = 3px (thin)
- [ ] **Color** = `#00A86B`
- [ ] **Placement** = Below titles

**Found in:**
- [ ] Section titles
- [ ] Service card titles
- [ ] Process phase titles

### Numbered Circles

- [ ] **Size** = 40px diameter
- [ ] **Background** = `#00A86B` (green)
- [ ] **Text color** = White
- [ ] **Shape** = Perfect circle

**Found in:**
- [ ] Process flow (4 circles)

### EXHIBIT Labels

- [ ] **Text** = "EXHIBIT 1", "EXHIBIT 2", etc.
- [ ] **Style** = Uppercase
- [ ] **Size** = 13px
- [ ] **Weight** = Semibold
- [ ] **Color** = `#696969` (grey)
- [ ] **Letter spacing** = Wide

**Found in:**
- [ ] Stats grid section
- [ ] Data visualization sections

### Source Notes

- [ ] **Size** = 13px
- [ ] **Color** = `#696969` (grey)
- [ ] **Style** = Italic
- [ ] **Placement** = Below data/charts

**Found in:**
- [ ] Stats grid
- [ ] Data sections

---

## 🖼️ Component Checklist

### 1. Hero Section

- [ ] Full-bleed background image
- [ ] Dark gradient overlay
- [ ] Breadcrumb: `Home › Industries › Fashion`
- [ ] Title: 52px, white, normal weight
- [ ] Subtitle: 18px, white/90%
- [ ] Two CTA buttons (primary + secondary)
- [ ] No parallax effect (static)

### 2. Stats Grid

- [ ] 4 columns on desktop
- [ ] 2 columns on tablet
- [ ] 1 column on mobile
- [ ] "EXHIBIT 1" label at top
- [ ] Green stat numbers (48px)
- [ ] Sublabel in uppercase
- [ ] Description text
- [ ] Source note at bottom
- [ ] Thin grey borders
- [ ] Sharp corners
- [ ] Equal column widths

### 3. Service Cards

- [ ] 3 columns on desktop
- [ ] 2 columns on tablet
- [ ] 1 column on mobile
- [ ] 6 cards total (01-06)
- [ ] Large faded number in corner
- [ ] Colored badge at top
- [ ] Title (normal weight)
- [ ] Green accent line (48×3px)
- [ ] Description text
- [ ] Tags with dot separators
- [ ] ROI metric in large green text
- [ ] Build cost + ROI timeframe
- [ ] Sharp corners
- [ ] Grey borders
- [ ] Hover: background change only (no scale)

### 4. Process Flow

- [ ] Horizontal layout on desktop
- [ ] Vertical layout on mobile
- [ ] 4 phases total
- [ ] Green numbered circles (40px)
- [ ] Arrow connectors (→)
- [ ] Phase title
- [ ] Green accent line (48×3px)
- [ ] Bullet point deliverables
- [ ] Duration at bottom
- [ ] White cards, grey borders
- [ ] Sharp corners

### 5. Team Section

- [ ] 4 columns on desktop
- [ ] 2 columns on tablet
- [ ] 1 column on mobile
- [ ] Circular avatars (80px)
- [ ] Name (medium weight)
- [ ] Role/title
- [ ] Specialty
- [ ] Credentials
- [ ] Center-aligned text
- [ ] No hover effects

### 6. Insights Section

- [ ] 4 columns on desktop
- [ ] 2 columns on tablet
- [ ] 1 column on mobile
- [ ] 4:3 aspect ratio images
- [ ] Sharp corners on images
- [ ] Category badge (green, uppercase)
- [ ] Article title (16px)
- [ ] Date + read time
- [ ] Hover: background change only
- [ ] Grey borders
- [ ] "See All Insights" button at bottom

### 7. Related Content

- [ ] Dark background (#212427)
- [ ] White text
- [ ] 4 columns on desktop
- [ ] Small cards
- [ ] Category label (green)
- [ ] Title (white)
- [ ] Description (white/70%)
- [ ] Arrow icon (→)
- [ ] Transparent white borders
- [ ] Bottom navigation links

---

## 🎬 Animation Validation

### ❌ Should NOT Have

- [ ] No parallax scrolling
- [ ] No scale transforms on hover
- [ ] No fade-in entrance animations
- [ ] No staggered animations
- [ ] No scroll-driven complex animations
- [ ] No glassmorphism effects
- [ ] No gradient animations

### ✅ Should Have (Minimal)

- [ ] Subtle background color change on card hover (200ms)
- [ ] Text color change on link hover (150ms)
- [ ] Smooth opacity transitions only
- [ ] Respects `prefers-reduced-motion`

---

## 📱 Responsive Validation

### Desktop (1920px)

- [ ] Hero: Full height, full width
- [ ] Stats: 4 columns
- [ ] Services: 3 columns (2 rows)
- [ ] Process: Horizontal layout
- [ ] Team: 4 columns
- [ ] Insights: 4 columns
- [ ] Related: 4 columns
- [ ] Max content width: 1200px
- [ ] Proper padding: 24-32px

### Laptop (1440px)

- [ ] Same as desktop
- [ ] Content centered
- [ ] No horizontal scroll

### Tablet (768px)

- [ ] Stats: 2 columns
- [ ] Services: 2 columns
- [ ] Process: Still horizontal or vertical?
- [ ] Team: 2 columns
- [ ] Insights: 2 columns
- [ ] Related: 2 columns
- [ ] Reduced padding: 24px

### Mobile (375px)

- [ ] Hero: Readable text
- [ ] Stats: 1 column (stacked)
- [ ] Services: 1 column (stacked)
- [ ] Process: Vertical timeline
- [ ] Team: 1 column
- [ ] Insights: 1 column
- [ ] Related: 1 column
- [ ] Padding: 16-24px
- [ ] Text doesn't overflow
- [ ] Buttons are touch-friendly (44px min)
- [ ] No horizontal scroll

---

## 🌐 Browser Validation

### Chrome (Latest)

- [ ] Page loads correctly
- [ ] No console errors
- [ ] Fonts render correctly
- [ ] Colors accurate
- [ ] Borders sharp

### Safari (Latest)

- [ ] Page loads correctly
- [ ] No console errors
- [ ] Fonts render correctly
- [ ] Colors accurate
- [ ] Borders sharp

### Firefox (Latest)

- [ ] Page loads correctly
- [ ] No console errors
- [ ] Fonts render correctly
- [ ] Colors accurate
- [ ] Borders sharp

### Mobile Safari (iOS)

- [ ] Page loads correctly
- [ ] Touch interactions work
- [ ] Text readable
- [ ] No layout issues

### Chrome Mobile (Android)

- [ ] Page loads correctly
- [ ] Touch interactions work
- [ ] Text readable
- [ ] No layout issues

---

## ♿ Accessibility Validation

### Color Contrast

- [ ] Body text on white: 16.5:1 (AAA) ✅
- [ ] Secondary text on white: 4.8:1 (AA) ✅
- [ ] Green accent on white: 3.4:1 (Large text only)
- [ ] Links on white: 8.2:1 (AAA) ✅
- [ ] White text on dark: 14.2:1 (AAA) ✅

### Keyboard Navigation

- [ ] Tab key works for all interactive elements
- [ ] Focus indicators visible
- [ ] Logical tab order (top to bottom)
- [ ] Enter/Space activate buttons
- [ ] No keyboard traps

### Screen Reader

- [ ] All images have alt text
- [ ] Headings properly nested (H1 → H2 → H3)
- [ ] Links have descriptive text
- [ ] ARIA labels where appropriate
- [ ] Breadcrumb properly labeled

---

## ⚡ Performance Validation

### Lighthouse Score

- [ ] Performance: _____ (Target: >90)
- [ ] Accessibility: _____ (Target: >95)
- [ ] Best Practices: _____ (Target: >95)
- [ ] SEO: _____ (Target: >90)

### Core Web Vitals

- [ ] LCP (Largest Contentful Paint): _____ sec (Target: <2.5s)
- [ ] FID (First Input Delay): _____ ms (Target: <100ms)
- [ ] CLS (Cumulative Layout Shift): _____ (Target: <0.1)

### Load Performance

- [ ] Hero image loads quickly
- [ ] No layout shift during load
- [ ] Fonts load without FOIT/FOUT
- [ ] No console errors
- [ ] No 404s in Network tab

---

## 🔍 Content Validation

### Headlines

- [ ] Benefit-led (not feature-led)
- [ ] Sentence case (not title case)
- [ ] Concise and clear
- [ ] Data-driven where appropriate

### Body Copy

- [ ] Leads with data/stats
- [ ] Short paragraphs (2-3 sentences)
- [ ] Professional tone
- [ ] No hype language
- [ ] No vague claims

### CTAs

- [ ] Action verbs used
- [ ] Clear benefits stated
- [ ] Buttons well-sized
- [ ] Proper contrast

---

## 📸 Screenshot Comparison

### Compare with BCG Screenshot 1

- [ ] Hero layout matches
- [ ] Color accuracy
- [ ] Typography similar
- [ ] Spacing similar
- [ ] Overall feel matches

### Compare with BCG Screenshot 2

- [ ] Stats grid layout matches
- [ ] Service cards similar
- [ ] Color accuracy
- [ ] Typography similar

### Compare with BCG Screenshot 3

- [ ] Article layout matches
- [ ] Team section similar
- [ ] Footer similar
- [ ] Overall consistency

---

## ✅ Final Sign-Off

### Visual Design

- [ ] All colors match BCG palette
- [ ] All typography correct (size, weight, family)
- [ ] All corners sharp (0px radius)
- [ ] All spacing consistent
- [ ] All borders correct (1px, grey)
- [ ] No unwanted animations
- [ ] Professional appearance

### Technical

- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] No 404 errors
- [ ] All images load
- [ ] All links work
- [ ] Responsive on all devices
- [ ] Accessible (WCAG AA)
- [ ] Performance >90

### Content

- [ ] All copy professional
- [ ] No typos
- [ ] Stats accurate
- [ ] CTAs clear
- [ ] Metadata complete

---

## 🎯 Overall Assessment

**Total Checks:** 250+  
**Passed:** _____  
**Failed:** _____  
**Pass Rate:** _____%  

**Ready for Production?** [ ] YES [ ] NO  

**Notes:**
```
_____________________________________________________________

_____________________________________________________________

_____________________________________________________________

_____________________________________________________________

_____________________________________________________________
```

---

## 📝 Issue Log

| # | Issue | Severity | Component | Status |
|---|-------|----------|-----------|--------|
| 1 |       |          |           |        |
| 2 |       |          |           |        |
| 3 |       |          |           |        |
| 4 |       |          |           |        |
| 5 |       |          |           |        |

---

## ✍️ Signatures

**Tester:** _________________________ Date: __________  
**Developer:** _________________________ Date: __________  
**Designer:** _________________________ Date: __________  
**Stakeholder:** _________________________ Date: __________

---

**Checklist Version:** 1.0  
**Last Updated:** February 11, 2026  
**Status:** ⏳ Ready for Testing

---

*Print this checklist and check each item while visually inspecting the page. Compare side-by-side with BCG.com screenshots for best results.*

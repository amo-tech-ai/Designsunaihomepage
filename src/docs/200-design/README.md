# Design System Implementation Guide

**Created:** 2025-02-06  
**Status:** 📋 Ready for Implementation

---

## Quick Links

- **Style Guide:** `/docs/200-design/style-guide.md`
- **Process Page Analysis:** `/docs/200-design/02-process.md`
- **Design System Web App:** `/sunai/design-system`
- **Visual Reference:** `/sunai/design-system/preview`

---

## What Was Created

### 1. Style Guide Documentation (`/docs/200-design/style-guide.md`)
Complete design system extracted from SunAI Agency V12:
- ✅ Color palette with HEX values
- ✅ Typography scale (Georgia + System fonts)
- ✅ Spacing system (8px grid)
- ✅ Component library (buttons, cards, badges)
- ✅ Layout patterns (hero, grids, sections)
- ✅ Animation guidelines
- ✅ Responsive behavior
- ✅ Accessibility standards
- ✅ Do's and Don'ts

### 2. Process Page Analysis (`/docs/200-design/02-process.md`)
Comprehensive audit of `/process/v12` with:
- ❌ Issues identified (color mismatches, spacing, typography)
- ✅ Recommended fixes (phase-by-phase)
- 📋 Implementation checklist
- 🤖 AI-ready prompt for systematic updates
- ✅ Testing checklist

### 3. Design System Web Apps
- **Documentation Page:** `/sunai/design-system`
- **Visual Reference:** `/sunai/design-system/preview`
- **Footer Link:** Added under "Resources" with NEW badge

---

## Copy-Paste AI Prompt for Process Page V12

Use this prompt to update `/process/v12` to match the SunAI design system:

```
Update /components/premium/v11/ProcessPageV12.tsx to align with the SunAI Design System:

CRITICAL COLOR CHANGES:
1. Replace ALL instances of #F59E0B (amber/orange) with #1A3A32 (deep teal)
2. Change hero section background from #1A1A1A to #1A3A32
3. Update accent text colors to #A8C5B8 (sage green)
4. Change "AMO AI PROCESS" to "SUNAI PROCESS"

TYPOGRAPHY:
5. Hero H1: Change to text-[64px] leading-[1.1] with style={{ fontFamily: 'Georgia, serif' }}
6. Section H2: Standardize to text-[48px] with Georgia serif
7. Phase numbers: Change to text-[40px] with color #1A3A32/20 (20% opacity)
8. Add style={{ fontFamily: 'Georgia, serif' }} to all heading elements (h1, h2, h3, h4)

SPACING:
9. Hero section: pt-[200px] pb-[128px]
10. All other sections: py-[96px]
11. Change all max-w-[1400px] and max-w-[1200px] to max-w-[1280px]
12. Card padding: standardize to p-8 (remove responsive p-6 md:p-8)

COMPONENTS:
13. Icon containers: w-12 h-12 (instead of w-14 h-14), add rounded-xl, bg-[#E8F5E9]
14. Borders: Change #EFE9E4 to #E0E0DE everywhere
15. Phase expansion border: Change border-[#F59E0B] to border-[#1A3A32]
16. List bullets: bg-[#F59E0B] → bg-[#1A3A32]

BUTTONS:
17. Primary CTA: px-6 py-4 bg-[#FAF8F5] text-[#1A3A32] text-[14px] font-semibold rounded-lg hover:bg-white transition-all duration-200 hover:shadow-lg
18. Secondary CTA: px-6 py-4 text-[#FAF8F5] text-[14px] font-medium rounded-lg border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.1)] transition-all duration-200
19. Add transition-all duration-200 to all interactive elements

BACKGROUNDS:
20. Section backgrounds: Alternate between #FFFFFF, #FAF8F5, #E8F5E9
21. Hero and CTA sections: #1A3A32
22. Update any #FDFCFB to #FAF8F5
23. Update any #FAF8F6 to #F5F3EF

Maintain all existing functionality and structure. Only update visual styling to match the SunAI Calm Luxury aesthetic.
```

---

## Quick Reference: Key Changes Needed

### Color Replacements
```
#F59E0B (Amber) → #1A3A32 (Deep Teal)
#1A1A1A (Black) → #1A3A32 (Deep Teal)
#FDFCFB → #FAF8F5 (Cream)
#FAF8F6 → #F5F3EF (Warm White)
#EFE9E4 → #E0E0DE (Soft Gray)
```

### Typography Fixes
```
text-7xl → text-[64px]
text-5xl → text-[48px]
text-3xl → text-[40px]
Add: style={{ fontFamily: 'Georgia, serif' }}
```

### Spacing Updates
```
py-20 md:py-32 → pt-[200px] pb-[128px] (hero)
py-20 md:py-28 → py-[96px] (sections)
max-w-[1400px] → max-w-[1280px]
p-6 md:p-8 → p-8
```

### Component Refinements
```
w-14 h-14 → w-12 h-12 rounded-xl
bg-[#FAF8F6] → bg-[#E8F5E9]
border-[#EFE9E4] → border-[#E0E0DE]
Add rounded-lg to buttons
Add transition-all duration-200
```

---

## Implementation Workflow

### Step 1: Backup Current File
```bash
cp /components/premium/v11/ProcessPageV12.tsx /components/premium/v11/ProcessPageV12.backup.tsx
```

### Step 2: Apply Changes
Use the AI prompt above to systematically update the component

### Step 3: Visual QA
- [ ] Compare with `/sunai` homepage
- [ ] Check all buttons match design system
- [ ] Verify phase cards use teal on expand
- [ ] Confirm spacing is consistent
- [ ] Test hover states and transitions

### Step 4: Cross-Browser Test
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile (iOS/Android)

### Step 5: Lighthouse Audit
- [ ] Performance: >90
- [ ] Accessibility: 100
- [ ] Best Practices: >95
- [ ] SEO: 100

---

## Documentation Structure

```
/docs/200-design/
  ├── style-guide.md          # Complete design system reference
  ├── 02-process.md           # Process page analysis + prompts
  └── README.md               # This file (quick start guide)
```

---

## Design System Assets

### Color Palette (for design tools)
```css
/* Primary */
--deep-teal: #1A3A32;
--dark-teal: #0D1F1A;
--sage-green: #A8C5B8;
--mint-light: #E8F5E9;

/* Neutrals */
--cream: #FAF8F5;
--warm-white: #F5F3EF;
--soft-gray: #E0E0DE;
--medium-gray: #9B9F9D;

/* Text */
--text-primary: #1F2421;
--text-secondary: #6B7370;
--text-muted: #9B9F9D;

/* Accent */
--accent-orange: #FF6B4A;
```

### Typography Tokens
```css
/* Headings */
--font-serif: 'Georgia', serif;
--h1-size: 64px;
--h2-size: 48px;
--h3-size: 32px;
--h4-size: 24px;
--h5-size: 20px;

/* Body */
--font-sans: system-ui, -apple-system, sans-serif;
--body-large: 20px;
--body: 16px;
--small: 14px;
--caption: 13px;
```

### Spacing Tokens
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
--space-5xl: 128px;
--space-6xl: 200px;
```

---

## Additional Pages to Update (Future)

Once Process V12 is complete, apply same system to:

1. `/sunai/services` - Services page
2. `/process/v11` - Previous process version
3. `/about` - About page
4. `/projects` - Projects/case studies page
5. `/booking` - Booking page

Use the same methodology:
1. Create analysis doc in `/docs/200-design/`
2. Identify color/typography/spacing mismatches
3. Generate AI prompt
4. Apply systematically
5. Test and verify

---

## Support Resources

### Reference Pages
- Live Design System: `/sunai/design-system`
- Visual Examples: `/sunai/design-system/preview`
- Production Homepage: `/sunai`

### Documentation
- Full Style Guide: `/docs/200-design/style-guide.md`
- Process Page Guide: `/docs/200-design/02-process.md`

### Quick Tests
```bash
# View current process page
open http://localhost:5173/process/v12

# View design system
open http://localhost:5173/sunai/design-system

# View homepage for comparison
open http://localhost:5173/sunai
```

---

## Questions?

Refer to:
1. `/docs/200-design/style-guide.md` for design decisions
2. `/docs/200-design/02-process.md` for implementation details
3. `/sunai/design-system/preview` for visual examples

**Maintained by:** SunAI Design Team  
**Last Updated:** 2025-02-06

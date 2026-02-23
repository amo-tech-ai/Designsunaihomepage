# Visual Language

## Philosophy
**High-quality photography. Creative work as artifacts. Intentional grids and crops.**

Images feel crafted, not stock. Every visual element tells a story.

---

## Photography Style

### 1. Executive & Professional
```
Subject:        Decision-makers, professionals, team collaboration
Setting:        Real offices, natural environments, authentic workspaces
Lighting:       Natural, warm, soft shadows
Mood:           Confident, calm, focused
Color Grading:  Warm tones, slightly desaturated, editorial quality
```

### 2. Product & Interface
```
Display:        Clean screens, realistic mockups, artifacts
Context:        Hands interacting, natural use cases
Background:     Minimal, out-of-focus, or solid neutrals
Style:          High-fidelity, detailed, professional photography
Angle:          Straight-on or subtle 3/4 view
```

### 3. Environmental
```
Subject:        Workspace environments, architecture, nature (sparingly)
Style:          Wide shots, strong composition, editorial quality
Color:          Consistent with brand palette (greens, ivories, neutrals)
Use:            Hero sections, background layers, atmosphere
```

---

## What to Avoid

### ✗ DON'T USE
- [ ] Generic stock photography (fake smiles, staged poses)
- [ ] Overly saturated colors
- [ ] Cartoon illustrations or playful graphics
- [ ] Clip art or low-resolution images
- [ ] Busy backgrounds that compete with content
- [ ] Cliché business imagery (handshakes, lightbulbs)

---

## Image Treatment

### 1. Aspect Ratios

**Hero Sections:**
```
Desktop:  16:9 or 21:9 (cinematic)
Tablet:   4:3 or 16:9
Mobile:   1:1 or 4:5 (portrait-friendly)
```

**Content Cards:**
```
Desktop:  3:2 or 4:3
Tablet:   3:2
Mobile:   1:1 or 16:9
```

**Testimonial / Profile:**
```
All:      1:1 (square)
Size:     80px–120px (profile images)
```

### 2. Border Radius
```
Standard Images:  12px
Profile Images:   50% (circular) or 8px (rounded square)
Hero Images:      0px (full-bleed) or 16px (contained)
```

### 3. Overlays & Gradients
```
Dark Overlay (text on image):
  background: linear-gradient(
    180deg,
    rgba(31, 36, 33, 0) 0%,
    rgba(31, 36, 33, 0.6) 100%
  )

Light Glass Overlay:
  background: rgba(255, 255, 255, 0.5)
  backdrop-filter: blur(20px)

Use: Ensure text contrast (4.5:1 minimum)
```

### 4. Image Grids
```
Masonry Grid:
  Columns:  3 (desktop) / 2 (tablet) / 1 (mobile)
  Gap:      16px
  Style:    Varied heights, intentional composition

Standard Grid:
  Columns:  3 (desktop) / 2 (tablet) / 1 (mobile)
  Gap:      24px
  Style:    Equal heights, uniform spacing
```

---

## Iconography

### Icon System
```
Library:        lucide-react (primary)
Style:          Outline/stroke icons
Stroke Width:   2px
Corner Radius:  2px
Size Scale:     16px, 20px, 24px, 32px
Color:          #1F2421 (default) or inherit
```

### Icon Usage Rules

**✓ DO:**
- [ ] Use consistent stroke width (2px)
- [ ] Align icons with text baseline
- [ ] Provide 8px gap between icon and text
- [ ] Use semantic icons (intuitive meaning)
- [ ] Maintain 44px minimum tap target on mobile

**✗ DON'T:**
- [ ] Mix icon styles (outline + filled)
- [ ] Use decorative icons without purpose
- [ ] Scale icons unevenly
- [ ] Use multiple colors in one icon
- [ ] Overcrowd UI with icons

---

## Illustrations (Minimal Use)

### When to Use
- Abstract concepts that need visualization
- Onboarding flows (if necessary)
- Empty states (sparingly)
- Technical diagrams

### Style Guidelines
```
Approach:       Minimal, geometric, abstract
Color Palette:  Authority Green, Innovation Lime, neutrals
Line Weight:    Consistent, clean
Complexity:     Simple shapes, not detailed illustrations
Mood:           Professional, not playful
```

### Prefer Photography Over Illustrations
Default to high-quality photography. Only use illustrations when photography cannot convey the concept.

---

## Data Visualization

### Chart Style
```
Library:        Recharts
Colors:         Authority Green (#1A3A32), Innovation Lime (#C5F467)
                Supporting: Soft Sage (#8B9D8A), neutrals
Grid Lines:     #E0E0DE, 1px
Font:           Inter, 12px–14px
Tooltips:       White background, soft shadow, 8px border-radius
```

### Chart Types

**Line Charts:**
```
Line Color:     #1A3A32
Line Width:     2px
Point Size:     4px
Area Fill:      rgba(26, 58, 50, 0.1) (optional)
```

**Bar Charts:**
```
Bar Color:      #1A3A32 (primary), #C5F467 (comparison)
Bar Radius:     4px (top corners)
Gap:            16px
```

**Donut/Pie Charts:**
```
Colors:         Authority Green, Innovation Lime, Soft Sage, neutrals
Thickness:      40px (donut inner radius)
Labels:         Outside or center, 14px Inter
```

### Data Visualization Principles
- [ ] Use color sparingly and meaningfully
- [ ] Label axes clearly
- [ ] Show data directly (no unnecessary decoration)
- [ ] Maintain readability at all sizes
- [ ] Use consistent formatting (decimals, percentages)

---

## Brand Artifacts

### UI Mockups
```
Display:        High-fidelity screenshots, realistic devices
Context:        Clean backgrounds, soft shadows
Angle:          Straight-on or subtle perspective
Quality:        Retina-ready (2x resolution minimum)
```

### Device Frames
```
Style:          Minimal bezels, modern devices
Color:          Neutral (silver, black, white)
Shadow:         Soft, realistic depth
Background:     Transparent or subtle gradient
```

### Logo Display
```
Trust Section:
  Layout:       Horizontal row, evenly spaced
  Logo Height:  32px–40px
  Filter:       Grayscale + opacity 60% (default)
                Full color on hover (optional)
  Gap:          48px between logos
```

---

## Image Optimization

### Technical Specs

**File Formats:**
```
Photography:    WebP (primary), JPEG (fallback)
Illustrations:  SVG (primary), PNG (fallback)
Icons:          SVG only
```

**Resolution:**
```
Hero Images:    1920px width (desktop), 2x for retina
Content Images: 1200px width (desktop), 2x for retina
Thumbnails:     400px width, 2x for retina
Profile Images: 240px (1x), 480px (2x)
```

**Compression:**
```
WebP Quality:   80–85%
JPEG Quality:   75–85%
PNG:            TinyPNG or similar optimization
SVG:            SVGO optimization
```

### Responsive Images
```html
<picture>
  <source media="(min-width: 1200px)" srcset="hero-large.webp" type="image/webp" />
  <source media="(min-width: 768px)" srcset="hero-medium.webp" type="image/webp" />
  <source srcset="hero-small.webp" type="image/webp" />
  <img src="hero-medium.jpg" alt="Description" />
</picture>
```

---

## Content Strategy

### Image Sourcing

**Preferred Sources:**
- Custom photography (brand photoshoots)
- Unsplash (curated, high-quality)
- Pexels (selective, professional shots)
- Customer/user-generated content (with permission)

**Selection Criteria:**
- [ ] High resolution (2000px+ width)
- [ ] Natural lighting, authentic settings
- [ ] Diverse, inclusive representation
- [ ] Aligns with calm luxury aesthetic
- [ ] Minimal post-processing required

---

## Visual Hierarchy

### Image Sizing

**Hero Section:**
```
Desktop:  Full-width or 1440px max, 600px–800px height
Tablet:   Full-width, 500px–600px height
Mobile:   Full-width, 400px–500px height
```

**Featured Image:**
```
Desktop:  800px width, 3:2 aspect ratio
Tablet:   600px width, 3:2 aspect ratio
Mobile:   Full-width, 1:1 or 4:3 aspect ratio
```

**Thumbnail:**
```
Desktop:  300px–400px width, 1:1 or 3:2
Tablet:   250px–350px width
Mobile:   Full-width or 200px–300px
```

---

## Accessibility

### Alt Text
```
Decorative Images:    alt="" (empty)
Content Images:       Descriptive alt text (100 characters max)
Complex Images:       Detailed description nearby or aria-describedby
Functional Images:    Describe the function/action
```

### Contrast
```
Text on Images:       4.5:1 minimum contrast ratio
Use Overlays:        Dark gradient or semi-transparent background
Test Tools:          WebAIM Contrast Checker
```

### Captions
```
When to Use:         Context needed, attribution, credit
Style:              14px, Medium Grey, italic (optional)
Placement:          Below image, 8px gap
```

---

## Visual Checklist

Every image must pass:

- [ ] **High Quality:** Retina-ready resolution, sharp, well-lit
- [ ] **Brand Aligned:** Matches calm luxury aesthetic
- [ ] **Optimized:** WebP format, compressed, fast-loading
- [ ] **Accessible:** Alt text provided, sufficient contrast
- [ ] **Responsive:** Adapts to all screen sizes
- [ ] **Purposeful:** Adds value, not decoration

---

**Status:** ✓ Visual Language Approved
**Last Updated:** February 2026

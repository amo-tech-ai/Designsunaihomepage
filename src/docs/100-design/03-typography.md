# Typography System

## Philosophy
**Clear hierarchy. Editorial confidence. Excellent readability.**

Strong contrast between headlines and body. Calm rhythm. Vertical spacing that breathes.

---

## Typeface Families

### 1. Headlines — Editorial Serif
```
Primary: Georgia (system fallback)
Upgrade: Playfair Display, Fraunces, Tiempos

Use: Section titles, hero moments, major headlines
Feel: Confident, editorial, timeless
```

### 2. Body Text — Humanist Sans
```
Primary: Inter (loaded)
Fallback: -apple-system, SF Pro, system-ui

Use: Paragraphs, descriptions, long-form content
Feel: Readable, comfortable, professional
```

### 3. UI Text — Neutral Sans
```
Primary: Inter (loaded)
Fallback: -apple-system, SF Pro, system-ui

Use: Buttons, labels, navigation, data
Feel: Precise, neutral, clean
```

---

## Type Scale

### Display (Hero Moments)
```
Desktop: 64px / 1.1 line-height / -0.02em letter-spacing
Tablet:  48px / 1.1 / -0.02em
Mobile:  36px / 1.2 / -0.01em

Family: Editorial Serif
Weight: 400 (Regular) or 600 (Semibold)
```

### H1 (Page Titles)
```
Desktop: 48px / 1.2 / -0.02em
Tablet:  40px / 1.2 / -0.01em
Mobile:  32px / 1.3 / -0.01em

Family: Editorial Serif
Weight: 600
```

### H2 (Section Headers)
```
Desktop: 36px / 1.3 / -0.01em
Tablet:  32px / 1.3 / -0.01em
Mobile:  28px / 1.3 / 0

Family: Editorial Serif
Weight: 600
```

### H3 (Subsection Headers)
```
Desktop: 28px / 1.4 / 0
Tablet:  24px / 1.4 / 0
Mobile:  22px / 1.4 / 0

Family: Editorial Serif
Weight: 600
```

### H4 (Component Headers)
```
Desktop: 20px / 1.4 / 0
Tablet:  18px / 1.4 / 0
Mobile:  18px / 1.4 / 0

Family: Humanist Sans
Weight: 600
```

### Body Large
```
Desktop: 18px / 1.6 / 0
All:     18px / 1.6 / 0

Family: Humanist Sans
Weight: 400
Use: Introductory paragraphs, key descriptions
```

### Body Regular
```
All: 16px / 1.6 / 0

Family: Humanist Sans
Weight: 400
Use: Default body text, descriptions
```

### Body Small
```
All: 14px / 1.5 / 0

Family: Humanist Sans
Weight: 400
Use: Captions, metadata, secondary info
```

### UI Text (Labels)
```
All: 14px / 1.4 / 0

Family: Neutral Sans
Weight: 500
Use: Buttons, input labels, navigation
```

### UI Text (Small)
```
All: 12px / 1.4 / 0.01em

Family: Neutral Sans
Weight: 500
Use: Badges, tags, micro-copy
```

---

## Font Weights

### Inter (Sans-Serif)
```
400 — Regular (Body text, default)
500 — Medium (UI elements, labels)
600 — Semibold (Headings, emphasis)
```

### Editorial Serif (Georgia/Playfair)
```
400 — Regular (Display, elegant headers)
600 — Semibold (Strong headers, hero text)
```

**Rule:** Never use bold (700+) or thin (300-). Maintain calm, confident weight.

---

## Typography Hierarchy

### Level 1: Hero Moment
```
Display 64px Serif
Body Large 18px Sans
Spacing: 24px between
```

### Level 2: Page Section
```
H2 36px Serif
Body Regular 16px Sans
Spacing: 16px between
```

### Level 3: Component
```
H4 20px Sans
Body Small 14px Sans
Spacing: 12px between
```

---

## Vertical Rhythm

### Paragraph Spacing
```
Between paragraphs: 16px
After headings: 16px
Before headings: 32px
```

### Section Spacing
```
Between sections: 96px (desktop) / 64px (mobile)
Within sections: 48px (desktop) / 32px (mobile)
Component groups: 24px
```

---

## Usage Rules

### Headlines (Serif)
- [ ] Use for section titles, hero text, editorial moments
- [ ] Always pair with generous whitespace
- [ ] Keep line length under 60 characters
- [ ] Use negative letter-spacing on large sizes
- [ ] Never use all caps

### Body Text (Sans)
- [ ] Use Inter with 1.6 line-height
- [ ] Optimal line length: 60–75 characters
- [ ] Never justify text
- [ ] Use comfortable margins (24px min)
- [ ] Break long paragraphs at natural points

### UI Text (Sans)
- [ ] Use 500 weight for buttons and labels
- [ ] Keep labels short (1–3 words)
- [ ] Use sentence case, not title case
- [ ] Align consistently within components
- [ ] Add 0.01em letter-spacing to small text (12px)

---

## Color + Typography

### Text Colors
```
Primary Text:    #1F2421 (Charcoal) on #FAF8F5 (Ivory)
Secondary Text:  #6B7370 (Grey) on #FAF8F5 (Ivory)
Inverted Text:   #FAF8F5 (Ivory) on #1A3A32 (Green)
Accent Text:     #1A3A32 (Green) on #FAF8F5 (Ivory)
```

### Never Use
- Pure black (#000) on white
- Innovation Lime (#C5F467) for text
- Low-contrast grey combinations
- Colored body text (except links)

---

## Responsive Scaling

### Breakpoint Adjustments
```
Desktop (1200px+):  Full scale
Tablet (768–1199px): -8px to -16px on Display/H1
Mobile (<768px):    -12px to -28px on Display/H1
                    Body remains 16px
```

### Approach
1. Scale down display sizes aggressively
2. Keep body text readable (16px minimum)
3. Increase line-height slightly on mobile
4. Reduce letter-spacing on smaller screens

---

## Special Treatments

### AI Feature Labels
```
12px / 500 weight / 0.05em letter-spacing / UPPERCASE
Color: #1A3A32 (Authority Green)
Background: rgba(197, 244, 103, 0.15)
Padding: 4px 8px
Border-radius: 4px
```

### Stat Numbers
```
48px / 600 weight / -0.02em
Family: Humanist Sans (not serif)
Color: #1A3A32 (Authority Green)
```

### Quotes / Testimonials
```
24px / 400 weight / 1.5 line-height
Family: Editorial Serif
Style: Italic
Color: #1F2421 (Charcoal)
```

---

## Accessibility

### Minimum Requirements
- [ ] 16px minimum for body text
- [ ] 4.5:1 contrast ratio (text on background)
- [ ] 1.4+ line-height for body text
- [ ] Comfortable paragraph width (<75ch)
- [ ] Clear visual hierarchy (size + weight + spacing)

### Enhancements
- [ ] Support system font scaling
- [ ] Test at 200% zoom
- [ ] Avoid long lines of italic text
- [ ] Provide text alternatives for icon-only buttons

---

## Implementation (CSS Custom Properties)

```css
/* Families */
--font-serif: Georgia, "Playfair Display", serif;
--font-sans: "Inter", -apple-system, "SF Pro", system-ui, sans-serif;

/* Sizes */
--text-display: 64px;
--text-h1: 48px;
--text-h2: 36px;
--text-h3: 28px;
--text-h4: 20px;
--text-body-lg: 18px;
--text-body: 16px;
--text-body-sm: 14px;
--text-ui: 14px;
--text-ui-sm: 12px;

/* Weights */
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;

/* Line Heights */
--leading-tight: 1.2;
--leading-snug: 1.4;
--leading-normal: 1.6;

/* Letter Spacing */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.01em;
```

---

**Status:** ✓ Type System Approved
**Last Updated:** February 2026

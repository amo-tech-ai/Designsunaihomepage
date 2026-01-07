# Sun AI V11 Style Guide — Calm Luxury Editorial

**Design Philosophy:** Premium editorial aesthetic. No clutter, no shadows, no rounded buttons. Strong typography, structured borders, generous whitespace.

---

## 1. Color Palette

### Primary
```css
--bg-primary: #FDFCFB      /* Warm off-white background */
--bg-surface: #FFFFFF      /* Cards, elevated surfaces */
--bg-alt: #FAF8F6          /* Alternate section background */
--text-primary: #1A1A1A    /* Headings, primary text */
--text-secondary: #666666  /* Body text, descriptions */
--text-tertiary: #999999   /* Labels, metadata */
```

### Accent & Borders
```css
--accent-amber: #F59E0B    /* CTAs, progress, highlights */
--accent-light: #FCD34D    /* Hover states, secondary accents */
--border-primary: #EFE9E4  /* Cards, dividers */
--border-input: #D1C7BD    /* Form fields */
```

### Dark Sections
```css
--bg-dark: #1A1A1A         /* Footer, CTA backgrounds */
--text-on-dark: #FFFFFF    /* Text on dark backgrounds */
```

---

## 2. Typography

### Font Stack
- **Sans-Serif (UI):** `font-family: 'Inter', sans-serif`
- **Serif (Display):** `font-family: 'Playfair Display', serif`
- **Serif (Narrative):** `font-family: 'Lora', serif`

### Hierarchy
| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **H1** | 48-72px | 700 | 1.1 | Page titles (Playfair) |
| **H2** | 36-48px | 600 | 1.2 | Section headers (Playfair) |
| **H3** | 24-30px | 600 | 1.3 | Subsections (Inter) |
| **Body Large** | 18-20px | 300 | 1.6 | Intro paragraphs (Lora) |
| **Body** | 16px | 400 | 1.6 | Standard text (Inter) |
| **Small** | 14px | 400 | 1.5 | Secondary text |
| **Label** | 10-12px | 700 | 1.4 | Uppercase labels |

### Text Styles
- **Headings:** `font-serif`, `tracking-tight`, `text-[#1A1A1A]`
- **Body:** `font-sans`, `text-[#666666]`, `leading-relaxed`
- **Labels:** `uppercase`, `tracking-widest`, `text-[#999999]`, `font-bold`

---

## 3. Layout System

### Container Widths
- **Max Width:** `max-w-[1400px]` for content sections
- **Text Content:** `max-w-3xl` for readable paragraphs
- **Form/Work Area:** `max-w-xl` for focused tasks

### Spacing Scale
- **Section Padding:** `py-24` to `py-32` (96px to 128px vertical)
- **Container Padding:** `px-6` mobile, `px-16` desktop
- **Block Spacing:** `space-y-16` to `space-y-24` between content blocks
- **Element Spacing:** `space-y-6` to `space-y-8` within blocks

### Grid Patterns
- **2-Column:** `grid-cols-1 md:grid-cols-2 gap-8`
- **3-Column:** `grid-cols-1 md:grid-cols-3 gap-12`
- **Service Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

---

## 4. Components

### Buttons
```tsx
// Primary
className="px-10 py-5 bg-[#1A1A1A] text-white font-bold hover:bg-[#333] transition-all"

// Secondary
className="px-10 py-5 border border-[#1A1A1A] text-[#1A1A1A] font-bold hover:bg-[#1A1A1A] hover:text-white transition-all"

// Accent CTA
className="px-10 py-5 bg-[#F59E0B] text-[#1A1A1A] font-bold hover:bg-[#FCD34D] transition-all"
```

### Cards
```tsx
className="p-8 md:p-12 border border-[#EFE9E4] bg-white"
// No shadows, no rounded corners, clean borders only
```

### Form Inputs
```tsx
// Text Input
className="w-full bg-transparent border-b border-[#D1C7BD] py-3 text-[#1A1A1A] focus:border-[#1A1A1A] outline-none"

// Textarea
className="w-full border border-[#D1C7BD] p-4 text-[#1A1A1A] focus:border-[#1A1A1A] outline-none resize-none"
```

---

## 5. Animation Patterns

### Scroll Animations (Motion/React)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Stagger Children
```tsx
transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
```

### Hover States
- **Duration:** 200-300ms
- **Properties:** `opacity`, `background-color`, `border-color`, `transform: translateX(4px)`
- **No bouncing or excessive movement**

---

## 6. Content Patterns

### Hero Section
- Full-width, centered text
- 72px serif heading + 20px body + CTA buttons
- Minimal decoration, strong typography focus

### Stats Bar
- 3-column grid, centered alignment
- Large serif numbers (48-60px), small uppercase labels (10px)
- Subtle divider borders between columns

### Process/Timeline
- Numbered vertical steps OR horizontal cards
- Circle numbers (40px), step title, description
- Connecting lines: 1px `#D1C7BD`

### Testimonials
- Large serif quote (24px Lora), author name + company
- No heavy borders, minimal styling

### CTA Sections
- Dark background (`#1A1A1A`), white text
- Contrasting CTA button (`#F59E0B`)
- Clean top border separator

---

## 7. Design Principles

### ✅ DO
- Use generous whitespace and vertical rhythm
- Lead with strong serif typography
- Maintain flat design with borders only
- Use amber accent sparingly for hierarchy
- Keep square corners on all buttons
- Prioritize readability and breathing room

### ❌ DON'T
- No box shadows or drop shadows
- No rounded button corners (editorial aesthetic)
- No glassmorphism on marketing pages
- No gradients on backgrounds
- No excessive animations or movement
- No cluttered layouts or tight spacing

---

## 8. Responsive Behavior

### Breakpoints
- **Mobile:** < 768px (stack all grids, reduce heading sizes 30%)
- **Tablet:** 768px - 1024px (2-column grids)
- **Desktop:** > 1024px (full multi-column layouts)

### Typography Scaling
- H1: 36px mobile → 72px desktop
- H2: 28px mobile → 48px desktop
- Padding: py-12 mobile → py-32 desktop

---

**Version:** 11 (Calm Luxury Editorial)  
**Last Updated:** 2026-01-07

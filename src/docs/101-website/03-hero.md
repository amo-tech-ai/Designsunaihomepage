# Home Page V6 - Hero Section Design Prompt

## Layout Structure

### Two-Column Hero Layout
```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  LEFT COLUMN (50%)          RIGHT COLUMN (50%)          │
│  ┌──────────────────┐       ┌──────────────────┐       │
│  │ [Eyebrow]        │       │                  │       │
│  │                  │       │    [NLP]         │       │
│  │ Build Intelligent│       │                  │       │
│  │ AI Products,     │       │[ANALYTICS]  [CLOUD]      │
│  │ Agents           │       │                  │       │
│  │ & Automation     │       │    ┌────────┐    │       │
│  │                  │       │    │   AI   │    │       │
│  │ [Description]    │       │[AUTO]│ GLOBE │[INTEG]    │
│  │                  │       │    └────────┘    │       │
│  │ [Start Project]  │       │                  │       │
│  │ [Talk to Expert] │       │[AGENTS] [SOLUTIONS]      │
│  │                  │       │    [DDSA]        │       │
│  │ [Trust Badge]    │       │                  │       │
│  │ [4 Logo Boxes]   │       │                  │       │
│  └──────────────────┘       └──────────────────┘       │
└─────────────────────────────────────────────────────────┘
```

---

## Left Column - Content

### 1. Eyebrow Label
- Text: "PRODUCTION-READY AI"
- Color: Coral/Orange (#FF6B6B or similar)
- Size: 11px
- Style: Uppercase, bold, tracking-widest
- Small dot icon to the left

### 2. Headline (4 Lines)
- **Line 1:** "Build Intelligent"
  - Color: Dark navy (#1E3A5F or similar)
  - Font: Sans-serif, bold
  - Size: 56-64px

- **Line 2:** "AI Products,"
  - Color: Bright blue (#4A90E2)
  - Same font and size

- **Line 3:** "Agents"
  - Color: Dark navy (same as line 1)
  
- **Line 4:** "& Automation"
  - Color: Dark navy (same as line 1)

### 3. Description Paragraph
- Text: "Sun AI designs and launches production-ready AI platforms, automation systems, and multi-agent solutions that transform how teams work and scale."
- Color: Medium gray (#6B7280)
- Font: Sans-serif, normal weight
- Size: 16-18px
- Line height: 1.6
- Max width: 480px

### 4. Primary CTA Button
- Text: "Start Your Project"
- Icon: Right arrow
- Background: Dark navy (#1E3A5F)
- Text color: White
- Padding: 16px vertical, 32px horizontal
- Border radius: 24px (pill shape)
- Font: 16px, medium weight

### 5. Secondary CTA Link
- Text: "Talk to an Expert"
- Icon: Chat bubble (left of text)
- Background: Transparent
- Text color: Dark navy
- Style: Text link with icon
- Underline on hover

### 6. Trust Badge Section
- Label: "TRUSTED BY INNOVATIVE TEAMS"
- Color: Light gray (#9CA3AF)
- Size: 10px, uppercase, tracking-wide
- Position: Below CTAs with spacing

### 7. Logo Grid
- 4 placeholder boxes in a horizontal row
- Each box: Light gray background (#F3F4F6)
- Size: ~80px width, 40px height
- Spacing: 16px gap between boxes
- Purpose: Client/partner logos

---

## Right Column - AI Globe with Orbiting Icons

### Central Globe Element

**Globe Sphere:**
- Circular shape, approximately 280px diameter
- Background: Dotted mesh pattern (like a wireframe globe)
- Color: Very light blue/gray with slight transparency
- Effect: 3D appearance with depth

**Center Text:**
- Text: "AI"
- Font: Bold, sans-serif
- Size: 72-96px
- Color: Bright blue (#4A90E2)
- Position: Centered in globe
- Effect: Semi-transparent overlay on globe pattern

### 7 Orbiting Icon Cards

**Card Design:**
- Shape: Small rounded rectangles (80px × 60px)
- Background: White
- Border: 1px solid light gray (#E5E7EB)
- Shadow: Subtle drop shadow (soft, minimal)
- Icon size: 20px
- Label size: 10px, uppercase

**Card Positions (Orbital Layout):**

1. **NLP** - Top right (2 o'clock position)
   - Icon: Document/text icon
   - Distance from center: ~180px

2. **ANALYTICS** - Mid-left (9 o'clock position)
   - Icon: Bar chart icon
   - Distance from center: ~180px

3. **CLOUD** - Right side (3 o'clock position)
   - Icon: Cloud icon
   - Distance from center: ~180px

4. **AUTOMATION** - Lower left (7 o'clock position)
   - Icon: Gear/cog icon
   - Distance from center: ~180px

5. **INTEGRATIONS** - Lower right (4 o'clock position)
   - Icon: Puzzle piece or connection icon
   - Distance from center: ~180px

6. **AI AGENTS** - Bottom left (7:30 position)
   - Icon: Robot/bot icon
   - Distance from center: ~180px

7. **SOLUTIONS** - Bottom right (4:30 position)
   - Icon: Lightbulb or grid icon
   - Distance from center: ~180px

8. **DDSA** - Bottom center (6 o'clock position)
   - Icon: Database icon
   - Distance from center: ~180px

**Visual Relationship:**
The cards appear to float around the central globe in an orbital pattern, not touching the globe but positioned at varying distances to create depth and hierarchy.

---

## Animation Concepts

### Globe Animations
1. **Subtle Rotation** - Globe slowly rotates clockwise (30-40 second full rotation)
2. **Pulse Effect** - Gentle scale pulse on "AI" text (1.0 → 1.05 → 1.0 every 3 seconds)
3. **Dot Pattern Shimmer** - Dots fade in/out randomly for depth effect

### Orbiting Icon Animations
1. **Gentle Float** - Each card moves up and down 8-12px in a slow, staggered pattern
2. **Orbital Rotation** - Cards slowly rotate around the globe (60+ seconds per full orbit)
3. **Hover State** - Individual card scales to 1.08x, shadow increases, slight color tint

### Text Entrance (On Page Load)
1. Eyebrow fades in first (200ms)
2. Headline lines appear sequentially with slight upward slide
   - Line 1: Delay 300ms
   - Line 2 (blue): Delay 500ms  
   - Line 3: Delay 700ms
   - Line 4: Delay 900ms
3. Description fades in at 1100ms
4. Buttons fade in together at 1300ms
5. Trust badge and logos fade in at 1500ms

### Globe Entrance
- Globe fades in with scale animation (0.9 → 1.0) starting at 400ms
- Icon cards fade in sequentially, starting from top and going clockwise
- Each card delay: 100ms apart
- First card (NLP) appears at 800ms

---

## Color Palette

### Primary Colors
- Dark Navy: #1E3A5F (headlines, buttons)
- Bright Blue: #4A90E2 (accent text, AI text, highlights)
- Coral/Orange: #FF6B6B (eyebrow label)

### Neutral Colors
- Dark text: #1F2937
- Medium gray: #6B7280 (body text)
- Light gray: #9CA3AF (labels)
- Border gray: #E5E7EB
- Background gray: #F3F4F6 (logo boxes)

### Globe/Icon Colors
- Globe mesh: #E0F2FE (very light blue)
- Icon backgrounds: #FFFFFF (white)
- Icon colors: Dark navy or bright blue

---

## Typography

### Headline
- Font: Inter, DM Sans, or similar modern sans-serif
- Weight: Bold (700)
- Size: 56-64px (desktop), 36-42px (mobile)
- Line height: 1.1

### Body Text
- Font: Same as headline
- Weight: Normal (400)
- Size: 16-18px
- Line height: 1.6

### Labels & Metadata
- Font: Same as headline
- Weight: Bold (600-700)
- Size: 10-11px
- Transform: Uppercase
- Tracking: 0.1em

---

## Spacing & Layout

### Section Padding
- Desktop: 120px vertical, 80px horizontal
- Mobile: 60px vertical, 24px horizontal

### Content Column
- Max width: 540px
- Headline margin bottom: 24px
- Description margin bottom: 32px
- Button spacing: 16px gap
- Trust badge margin top: 48px

### Globe Column
- Container: 600px × 600px
- Globe centered in container
- Icons positioned absolutely around globe
- Responsive: Scales down proportionally on smaller screens

---

## Responsive Behavior

### Desktop (≥1024px)
- Two-column side-by-side layout
- Globe full size (280px diameter)
- All 8 icon cards visible
- Headline 64px

### Tablet (768-1023px)
- Two-column maintained but tighter
- Globe medium size (220px diameter)
- Icon cards scale down proportionally
- Headline 52px

### Mobile (<768px)
- Single column, content stacked
- Content first, globe below
- Globe small size (200px diameter)
- Only 4-5 key icon cards visible (others hidden)
- Headline 36-42px
- Buttons full width, stacked

---

## Design Principles

### Visual Hierarchy
1. Headline dominates with size and color contrast
2. Blue accent on "AI Products" draws eye immediately
3. Globe provides visual interest without competing
4. CTAs clearly actionable below fold

### Motion Strategy
- All animations subtle and elegant
- Nothing distracting or jarring
- Orbital motion reinforces "AI ecosystem" concept
- Float animations add life without overwhelming

### Professional Aesthetic
- Clean, modern sans-serif typography
- Generous whitespace
- Soft shadows (not heavy)
- Minimal color palette (navy, blue, white, gray)
- Professional trust signals (logos, badge)

---

## Content Strategy

### Headline Message
- "Build Intelligent" - Action-oriented opening
- "AI Products, Agents & Automation" - Clear value proposition
- Blue highlight on "AI Products" emphasizes core offering

### Description Focus
- "Production-ready" - Key differentiator (not experimental)
- "Platforms, automation, multi-agent" - Specific capabilities
- "Transform how teams work and scale" - Clear benefit

### CTAs
- Primary: "Start Your Project" - Direct action
- Secondary: "Talk to an Expert" - Lower commitment option

### Trust Building
- "Trusted by Innovative Teams" - Social proof
- Logo placeholders - Credibility through association

---

## Implementation Checklist

### Structure
- [ ] Two-column grid layout
- [ ] Content column (left, 50%)
- [ ] Globe column (right, 50%)
- [ ] Responsive breakpoints set

### Content Elements
- [ ] Eyebrow label with icon
- [ ] 4-line headline (navy + blue)
- [ ] Description paragraph
- [ ] Primary CTA button (navy, pill)
- [ ] Secondary CTA link (with icon)
- [ ] Trust badge label
- [ ] 4 logo placeholder boxes

### Globe & Icons
- [ ] Central globe sphere created
- [ ] Dotted mesh pattern applied
- [ ] "AI" text centered in globe
- [ ] 8 icon cards designed
- [ ] Cards positioned in orbital pattern
- [ ] Correct icons assigned to each card

### Animations
- [ ] Globe rotation (slow, continuous)
- [ ] Icon float animations (subtle)
- [ ] Entrance sequence (staggered)
- [ ] Hover states on cards
- [ ] Button hover effects

### Polish
- [ ] Colors match design system
- [ ] Typography hierarchy clear
- [ ] Shadows subtle and consistent
- [ ] Mobile layout tested
- [ ] No layout shift on load

---

## Quick Reference

**Key Measurements:**
- Globe diameter: 280px (desktop)
- Icon card size: 80px × 60px
- Orbital radius: 180px from center
- Headline size: 64px (desktop)
- Section padding: 120px vertical

**Key Colors:**
- Dark navy: #1E3A5F
- Bright blue: #4A90E2
- Coral: #FF6B6B
- Light gray: #F3F4F6

**Icon Cards (8 total):**
NLP, Analytics, Cloud, Automation, Integrations, AI Agents, Solutions, DDSA

---

**End of Document**

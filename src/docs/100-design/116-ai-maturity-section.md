# 116 — AI Maturity Curve Framework Section

## 1. Overview
BCG-inspired strategic framework section showcasing AI maturity progression. Luxury consulting-grade UI with stage-based cards, timeline visualization, and executive presentation aesthetic.

---

## 2. Component Architecture

### 2.1 Files
```
/components/premium/sunai/
└── AIMaturitySection.tsx     # Full maturity framework section
```

### 2.2 Integration
```
/components/premium/sunai/SunAIAgencyV12.tsx   # After process section
```

---

## 3. Design Philosophy

### 3.1 Strategic Framework UI
```
Aesthetic:   BCG strategy exhibit → interactive software
Structure:   Category rows + stage columns + timeline
Hierarchy:   Icons → Titles → Cards → Timeline
Interaction: Subtle hover, stage selection, smooth scroll
```

### 3.2 What Makes This Executive-Grade
- **Framework clarity** — Clear maturity progression
- **Consulting DNA** — BCG slide deck aesthetic
- **Structured layout** — Grid-based precision
- **Editorial rhythm** — Generous whitespace
- **No decoration** — Content is the design
- **Strategic tone** — Calm, authoritative, intelligent

---

## 4. Section Structure

### 4.1 Layout Anatomy
```
┌─────────────────────────────────────────────────┐
│ Badge: "Strategic Framework"                    │
│ Title: "The Future-Built Playbook..."          │
│ Subtitle: Description                           │
└─────────────────────────────────────────────────┘

┌────────────┬─────────────┬─────────────┬─────────┐
│  [Stage 1] │  [Stage 2]  │  [Stage 3]  │         │
│  Header    │  Header     │  Header     │         │
└────────────┴─────────────┴─────────────┴─────────┘

┌──────────────────────────────────────────────────┐
│ [Icon] Category 1    │  Card  │  Card  │  Card  │
│        Title         │  1.1   │  1.2   │  1.3   │
├──────────────────────┼────────┼────────┼────────┤
│ [Icon] Category 2    │  Card  │  Card  │  Card  │
│        Title         │  2.1   │  2.2   │  2.3   │
├──────────────────────┼────────┼────────┼────────┤
│ [Icon] Category 3    │  Card  │  Card  │  Card  │
│        Title         │  3.1   │  3.2   │  3.3   │
└──────────────────────┴────────┴────────┴────────┘

┌──────────────────────────────────────────────────┐
│        Timeline Progress Indicator               │
│   ●─────────────●─────────────●                 │
│ Laggard     Scaling    Future-Built             │
└──────────────────────────────────────────────────┘
```

### 4.2 Grid System
```
Desktop:
  - Layout: 280px sidebar + 1fr grid
  - Cards: 3 columns
  - Gap: 24px (gap-6)

Tablet:
  - Cards: 3 columns
  - Reduced padding

Mobile:
  - Stack vertically
  - 1 column layout
  - Full width cards
```

---

## 5. Components Breakdown

### 5.1 Section Header
```tsx
Elements:
  - Badge: "Strategic Framework" with Sparkles icon
  - Title: 52px Georgia serif
  - Subtitle: 18px sans-serif, muted

Background: #FAF8F5 (warm off-white)
Padding: 80px → 112px vertical
```

### 5.2 Stage Headers
```tsx
3 Stage Pills:
  - Foundation (light mint)
  - Scaling (medium mint)
  - Future-Built (green)

Interaction:
  - Click to activate stage
  - Hover lift (-2px)
  - Active state tracking

Design:
  - Rounded-xl cards
  - 18px title, 14px description
  - Gradient mint colors
```

### 5.3 Category Row
```tsx
Structure:
  - Left: Icon + Category title
  - Right: 3 stage cards in grid

Icon:
  - 48px rounded square
  - Mint background (#E8F5E9)
  - Dark green icon

Title:
  - 18px primary text
  - 15px subtitle (muted)
```

### 5.4 Stage Cards
```tsx
Card Anatomy:
  - White background, 80% opacity
  - Backdrop blur (glassmorphism)
  - Border: #E5E7E6

Content:
  - Bullet points (2-3 per card)
  - Green dot indicators
  - 14px text, 1.6 line-height

Hover:
  - Lift -2px
  - Shadow: 0 8px 24px rgba(0,0,0,0.08)

Animation:
  - whileInView fade-in
  - Staggered delays per row
```

### 5.5 Timeline Progress
```tsx
Elements:
  - Gradient line (light → green)
  - 3 stage markers with dots
  - Stage labels below

Interaction:
  - Hover scales marker
  - Active marker larger (20px vs 12px)
  - Past markers filled green

Colors:
  - Active: Stage color
  - Inactive: #E5E7E6 (gray)
  - Line: Gradient mint → green
```

---

## 6. Data Structure

### 6.1 Maturity Stages
```typescript
interface MaturityStage {
  id: string;
  title: string;
  description: string;
  color: string;          // Background color
  position: number;       // 0-100 for timeline
}
```

### 6.2 Categories
```typescript
interface MaturityCategory {
  icon: IconComponent;
  title: string;
  subtitle: string;
  stages: {
    laggard: string[];
    scaling: string[];
    futureBuilt: string[];
  };
}
```

### 6.3 Default Categories
```
1. Pursue a multiyear strategic ambition
   Icon: Building2

2. Reshape and invent with impact
   Icon: Target

3. Implement an AI-first operating model
   Icon: Settings

4. Secure and enable necessary talent
   Icon: Users

5. Use fit-for-purpose technology and data
   Icon: Database
```

---

## 7. Animation System

### 7.1 Card Animations
```tsx
Fade-in on scroll:
  initial: { opacity: 0, y: 20 }
  whileInView: { opacity: 1, y: 0 }
  transition: { duration: 0.4, ease: 'easeOut' }

Hover lift:
  whileHover: { y: -2, boxShadow: '...' }
```

### 7.2 Timeline Markers
```tsx
Marker entrance:
  initial: { opacity: 0, scale: 0.8 }
  whileInView: { opacity: 1, scale: 1 }
  transition: { delay: index * 0.1 }

Hover interaction:
  whileHover: { scale: 1.3 }
```

### 7.3 Stage Headers
```tsx
Click activation:
  onClick: setActiveStage(stage.id)
  whileHover: { y: -2 }
  transition: { duration: 0.2 }
```

---

## 8. Color System

### 8.1 Background & Structure
```
Section BG:     #FAF8F5 (warm cream)
Card BG:        rgba(255,255,255,0.8) + blur
Card border:    #E5E7E6 (light gray)
Icon BG:        #E8F5E9 (soft mint)
```

### 8.2 Stage Colors
```
Foundation:     #E8F5E9 (light mint)
Scaling:        #B8E6C0 (medium mint)
Future-Built:   #34C759 (green)
```

### 8.3 Text Hierarchy
```
Primary text:   #1F2421 (dark charcoal)
Secondary:      #6B7370 (medium gray)
Tertiary:       #9CA6A3 (light gray)
Bullet dots:    #34C759 (green accent)
Icon color:     #1A3A32 (dark green)
```

---

## 9. Typography

### 9.1 Section Header
```
Title:
  Font: Georgia, serif
  Size: 36px → 52px (responsive)
  Weight: 400 (normal)
  Leading: 1.15
  Color: #1F2421

Subtitle:
  Font: System sans-serif
  Size: 17px → 18px
  Weight: 400
  Leading: 1.6
  Color: #6B7370
```

### 9.2 Category Titles
```
Title:
  Size: 18px
  Weight: 400
  Leading: 1.3
  Color: #1F2421

Subtitle:
  Size: 15px
  Leading: 1.3
  Color: #6B7370
```

### 9.3 Card Content
```
Bullets:
  Size: 14px
  Weight: 400
  Leading: 1.6
  Color: #4A5250
  Max: 2-3 per card
```

### 9.4 Timeline Labels
```
Stage title:
  Size: 13px
  Weight: 500
  Color: Active ? #1F2421 : #6B7370

Description:
  Size: 11px
  Leading: 1.4
  Color: #9CA6A3
```

---

## 10. Icons

### 10.1 Category Icons
```
Library: lucide-react
Size: 24px (w-6 h-6)
Stroke: 1.5
Color: #1A3A32

Icons:
  - Building2: Strategic ambition
  - Target: Impact focus
  - Settings: Operating model
  - Users: Talent
  - Database: Technology & data
```

### 10.2 Badge Icon
```
Sparkles: Strategic Framework indicator
Size: 16px (w-4 h-4)
Color: #34C759
```

---

## 11. Responsive Behavior

### 11.1 Breakpoints
```
Mobile (<768px):
  - Single column layout
  - Stack stage headers
  - Stack cards vertically
  - Smaller timeline markers

Tablet (768px-1024px):
  - 3-column card grid maintained
  - Reduced padding
  - Adjusted sidebar width

Desktop (>1024px):
  - Full 280px sidebar
  - 3-column card grid
  - Maximum 1400px width
```

### 11.2 Spacing Scale
```
Section padding:
  Mobile:   py-20 (80px)
  Tablet:   py-24 (96px)
  Desktop:  py-28 (112px)

Horizontal:
  Mobile:   px-6 (24px)
  Tablet:   px-12 (48px)
  Desktop:  px-16 (64px)

Internal gaps:
  Grid: gap-6 (24px)
  Category rows: mb-8 (32px)
```

---

## 12. Usage Examples

### 12.1 Default Implementation
```tsx
import { AIMaturitySection } from './components/premium/sunai/AIMaturitySection';

export function Page() {
  return <AIMaturitySection />;
}
```

### 12.2 Custom Title & Content
```tsx
<AIMaturitySection
  title="AI Transformation Roadmap"
  subtitle="Strategic framework for enterprise AI adoption"
  stages={customStages}
  categories={customCategories}
/>
```

### 12.3 Custom Stages
```tsx
const customStages = [
  {
    id: 'starter',
    title: 'AI Foundation',
    description: 'Build core capabilities',
    color: '#E8F5E9',
    position: 20
  },
  {
    id: 'advanced',
    title: 'AI at Scale',
    description: 'Deploy across organization',
    color: '#34C759',
    position: 80
  }
];
```

---

## 13. Props API

### 13.1 Component Interface
```typescript
interface AIMaturitySectionProps {
  title?: string;
  subtitle?: string;
  stages?: MaturityStage[];
  categories?: MaturityCategory[];
  className?: string;
}
```

### 13.2 Defaults
```typescript
title: "The Future-Built Playbook for Climbing the AI Maturity Curve"
subtitle: "A strategic framework for enterprise AI transformation"
stages: 3 default stages (Foundation, Scaling, Future-Built)
categories: 5 default categories with content
```

---

## 14. Accessibility

### 14.1 Standards
- ✅ Keyboard navigation for stage selection
- ✅ Focus visible on all interactive elements
- ✅ Semantic HTML structure
- ✅ ARIA labels where appropriate
- ✅ Color contrast meets WCAG AA

### 14.2 Interaction States
```
Stage Headers:
  - Clickable (onClick)
  - Keyboard accessible
  - Focus ring visible

Timeline:
  - Hover states for markers
  - Visual feedback on active stage

Cards:
  - Scroll-based animations
  - viewport: { once: true }
```

---

## 15. Performance

### 15.1 Optimization
- Viewport-based animations (whileInView)
- GPU-accelerated transforms
- Single state management (activeStage)
- No global re-renders
- Efficient event handlers

### 15.2 Bundle Impact
```
Component size: ~4KB gzipped
Dependencies:   motion/react, lucide-react
Data:           ~2KB default content
Total:          Minimal
```

---

## 16. Visual Tone

### 16.1 BCG Design DNA
- **Structured precision** — Grid-based layout
- **Strategic clarity** — Clear maturity progression
- **Editorial calm** — Generous whitespace
- **Executive polish** — Premium materials (glass, shadows)
- **Consulting heritage** — Framework visualization
- **Future-facing** — Modern, clean, intelligent

### 16.2 Feels Like
✓ BCG Annual Report  
✓ McKinsey Strategy Deck  
✓ Management Consulting Slide  
✓ Executive Keynote  
✓ Strategic Framework Poster  

### 16.3 Anti-Patterns
```
❌ Bright colors or gradients
❌ Playful illustrations
❌ Excessive animations
❌ Dense text blocks
❌ Decorative graphics
❌ Marketing-style CTAs
❌ Cluttered layouts
```

---

## 17. Integration Checklist

□ Import `AIMaturitySection` component  
□ Customize title and subtitle (if needed)  
□ Define maturity stages (or use defaults)  
□ Define category content (or use defaults)  
□ Test stage selection interaction  
□ Verify timeline visualization  
□ Test scroll animations  
□ Check mobile responsive layout  
□ Verify hover states on cards  
□ Test keyboard navigation  
□ Validate color contrast  
□ Ensure content fits in cards  

---

## 18. Content Guidelines

### 18.1 Bullet Points
- **Length:** 1-2 lines maximum per bullet
- **Count:** 2-3 bullets per card
- **Tone:** Action-oriented, strategic
- **Format:** Sentence case, no periods

### 18.2 Stage Descriptions
- **Length:** Single sentence
- **Focus:** Clear value proposition
- **Avoid:** Jargon, buzzwords

### 18.3 Category Titles
- **Style:** Verb phrase format
- **Example:** "Pursue a multiyear strategic ambition"
- **Avoid:** Generic labels

---

## 19. Interaction Flow

```
User Action           →  Visual Response
─────────────────────────────────────────────
Scroll to section     →  Cards fade in (staggered)
Hover stage header    →  Lift -2px
Click stage header    →  Activate stage
                      →  Update timeline active state
Hover card           →  Lift -2px, shadow increase
Scroll to timeline   →  Markers fade in (staggered)
Hover timeline       →  Marker scales 1.3×
```

---

## 20. BCG Framework Inspiration

This component captures BCG's signature "maturity curve" framework design:

1. **Clear progression** — Laggard → Scaling → Future-Built
2. **Category-based structure** — 5 strategic pillars
3. **Action-oriented content** — Bullet points, not paragraphs
4. **Timeline visualization** — Progress indicator
5. **Consulting aesthetic** — Clean, structured, authoritative
6. **Premium materials** — Glass cards, subtle shadows
7. **Strategic tone** — Executive intelligence, not marketing

**Reference:** BCG EXHIBIT 2 — "The Future-Built Playbook for Climbing the AI Maturity Curve"

---

**Component:** `AIMaturitySection`  
**File:** `/components/premium/sunai/AIMaturitySection.tsx`  
**Live:** `/sunai` (SunAI Agency — after Process section)  
**Created:** 2026-02-04  
**Status:** ✅ Production Ready

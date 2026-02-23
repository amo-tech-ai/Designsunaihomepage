# UI Components

## Philosophy
**Minimal borders. Soft shadows. Rounded corners. Breathing room.**

Components feel crafted, not assembled. Every element has purpose.

---

## Buttons

### 1. Primary Button
```
Background:      #1A3A32 (Authority Green)
Text:           #FAF8F5 (Warm Ivory)
Padding:        12px 24px (height: ~44px)
Border Radius:  8px
Font:           Inter, 14px, 500 weight
Shadow:         0 2px 8px rgba(26, 58, 50, 0.15)

Hover:          Background darkens to #152E28
                Shadow increases: 0 4px 12px rgba(26, 58, 50, 0.25)
Active:         Background: #0F211D
Disabled:       Background: #E0E0DE, Text: #9A9C9A
```

### 2. Secondary Button
```
Background:      Transparent
Text:           #1A3A32 (Authority Green)
Border:         1px solid #1A3A32
Padding:        12px 24px
Border Radius:  8px
Font:           Inter, 14px, 500 weight
Shadow:         None

Hover:          Background: rgba(26, 58, 50, 0.05)
                Border: 2px solid #1A3A32 (adjust padding -1px)
Active:         Background: rgba(26, 58, 50, 0.1)
Disabled:       Border: #D0D0CE, Text: #9A9C9A
```

### 3. Ghost Button
```
Background:      Transparent
Text:           #1F2421 (Charcoal)
Border:         None
Padding:        12px 16px
Border Radius:  6px
Font:           Inter, 14px, 500 weight

Hover:          Background: rgba(31, 36, 33, 0.05)
Active:         Background: rgba(31, 36, 33, 0.1)
Disabled:       Text: #9A9C9A
```

### 4. Innovation Button (Accent)
```
Background:      #C5F467 (Innovation Lime)
Text:           #1A3A32 (Authority Green)
Padding:        12px 24px
Border Radius:  8px
Font:           Inter, 14px, 600 weight
Shadow:         0 2px 8px rgba(197, 244, 103, 0.3)

Hover:          Background: #B8E84F
                Shadow: 0 4px 12px rgba(197, 244, 103, 0.4)
Active:         Background: #A9D940
Disabled:       Background: #E0E0DE, Text: #9A9C9A

Use:            AI features, innovation moments, high-impact CTAs
```

### Button Sizing
```
Large:   14px text, 16px 32px padding (height: ~52px)
Default: 14px text, 12px 24px padding (height: ~44px)
Small:   12px text, 8px 16px padding (height: ~36px)
```

### Button Groups
```
Gap:          12px horizontal
Stack Mobile: 100% width, 12px vertical gap
Alignment:    Left-aligned (forms) or center-aligned (CTAs)
```

---

## Cards

### 1. Content Card (Standard)
```
Background:      #FFFFFF (Pure White)
Border:         None
Border Radius:  12px
Padding:        32px (desktop) / 24px (mobile)
Shadow:         0 1px 3px rgba(0, 0, 0, 0.04),
                0 4px 16px rgba(0, 0, 0, 0.06)

Hover:          Shadow: 0 4px 8px rgba(0, 0, 0, 0.08),
                        0 8px 24px rgba(0, 0, 0, 0.1)
                Transform: translateY(-2px)
                Transition: 200ms ease-out
```

### 2. Glass Card (Luxury)
```
Background:      rgba(255, 255, 255, 0.7)
Backdrop Filter: blur(40px)
Border:         1px solid rgba(255, 255, 255, 0.3)
Border Radius:  16px
Padding:        32px (desktop) / 24px (mobile)
Shadow:         0 8px 32px rgba(0, 0, 0, 0.08)

Hover:          Background: rgba(255, 255, 255, 0.8)
                Border: rgba(255, 255, 255, 0.5)
```

### 3. Stat Card
```
Background:      #FFFFFF
Border:         None
Border Radius:  12px
Padding:        24px
Shadow:         0 1px 3px rgba(0, 0, 0, 0.04)

Layout:
  Number:   48px, 600 weight, Authority Green
  Label:    14px, 400 weight, Medium Grey
  Gap:      8px
```

### 4. Testimonial Card
```
Background:      #FAF8F5 (Warm Ivory)
Border:         None
Border Radius:  12px
Padding:        32px

Layout:
  Quote:    24px italic serif, Charcoal
  Author:   14px, 500 weight, Authority Green
  Role:     14px, 400 weight, Medium Grey
  Gap:      16px between elements
```

### Card Grid
```
Desktop:  3 columns, 24px gap
Tablet:   2 columns, 20px gap
Mobile:   1 column, 16px gap
```

---

## Inputs & Forms

### 1. Text Input
```
Background:      #FFFFFF
Border:         1px solid #D0D0CE
Border Radius:  8px
Padding:        12px 16px
Font:           Inter, 16px, 400 weight
Height:         44px

Focus:          Border: 2px solid #1A3A32
                Shadow: 0 0 0 3px rgba(26, 58, 50, 0.1)
Error:          Border: 2px solid #B85C5C
                Shadow: 0 0 0 3px rgba(184, 92, 92, 0.1)
Disabled:       Background: #F5F5F4, Text: #9A9C9A
```

### 2. Textarea
```
Same as Text Input, but:
Min Height:     120px
Padding:        12px 16px
Resize:         vertical
```

### 3. Select Dropdown
```
Same as Text Input, plus:
Arrow Icon:     12px chevron-down (right: 16px)
Padding Right:  40px (for icon)

Dropdown Menu:
  Background:   #FFFFFF
  Border:       1px solid #D0D0CE
  Border Radius: 8px
  Shadow:       0 4px 16px rgba(0, 0, 0, 0.1)
  Item Padding: 12px 16px
  Item Hover:   Background: rgba(26, 58, 50, 0.05)
```

### 4. Checkbox
```
Size:           20px × 20px
Border:         2px solid #D0D0CE
Border Radius:  4px
Background:     #FFFFFF

Checked:
  Background:   #1A3A32
  Border:       #1A3A32
  Checkmark:    #FFFFFF (stroke-width: 2px)

Focus:          Shadow: 0 0 0 3px rgba(26, 58, 50, 0.1)
```

### 5. Radio Button
```
Size:           20px × 20px
Border:         2px solid #D0D0CE
Border Radius:  50%
Background:     #FFFFFF

Selected:
  Border:       #1A3A32
  Inner Dot:    10px circle, #1A3A32

Focus:          Shadow: 0 0 0 3px rgba(26, 58, 50, 0.1)
```

### 6. Toggle Switch
```
Width:          48px
Height:         24px
Background:     #D0D0CE (off), #1A3A32 (on)
Border Radius:  12px

Handle:
  Size:         20px
  Background:   #FFFFFF
  Shadow:       0 2px 4px rgba(0, 0, 0, 0.2)
  Position:     2px from left (off), 26px from left (on)
  Transition:   200ms ease-out
```

### Form Layout
```
Label → Input:        8px gap
Input → Helper Text:  8px gap
Field → Field:        20px gap
Form Section:         32px gap
Error Message:        12px below input, #B85C5C color
```

---

## Tabs & Filters

### 1. Tab Navigation
```
Container:
  Border Bottom:  1px solid #E0E0DE
  Gap:           32px between tabs

Tab (Inactive):
  Padding:       12px 0
  Font:          Inter, 14px, 500 weight
  Color:         #6B7370 (Medium Grey)
  Border Bottom: 2px solid transparent

Tab (Active):
  Color:         #1A3A32 (Authority Green)
  Border Bottom: 2px solid #1A3A32

Tab (Hover):
  Color:         #1F2421 (Charcoal)
```

### 2. Filter Pills
```
Background:      Transparent
Border:         1px solid #D0D0CE
Border Radius:  20px
Padding:        8px 16px
Font:           Inter, 14px, 500 weight
Color:          #1F2421

Selected:
  Background:   #1A3A32
  Border:       #1A3A32
  Color:        #FAF8F5

Hover:          Border: #1A3A32, Color: #1A3A32
Gap:            8px between pills
```

---

## Navigation

### 1. Header Navigation
```
Height:         72px
Background:     rgba(250, 248, 245, 0.9) (glass on scroll)
Backdrop Blur:  20px (on scroll)
Border Bottom:  1px solid rgba(224, 224, 222, 0.5) (on scroll)
Padding:        0 64px (desktop) / 0 24px (mobile)

Logo:           Max height 40px
Menu Gap:       32px between items
Menu Font:      Inter, 14px, 500 weight
Menu Color:     #1F2421
Menu Hover:     #1A3A32
```

### 2. Sidebar Navigation
```
Width:          280px (desktop)
Background:     #FFFFFF
Border Right:   1px solid #E0E0DE
Padding:        24px 16px

Item:
  Padding:      12px 16px
  Border Radius: 8px
  Font:         Inter, 14px, 500 weight
  Color:        #1F2421

Item Active:
  Background:   rgba(26, 58, 50, 0.1)
  Color:        #1A3A32
  Font Weight:  600

Item Hover:
  Background:   rgba(31, 36, 33, 0.05)
```

---

## Modals & Overlays

### 1. Modal
```
Background:      #FFFFFF
Border Radius:   16px
Padding:        48px (desktop) / 32px (mobile)
Max Width:      600px (standard) / 800px (wide)
Shadow:         0 24px 64px rgba(0, 0, 0, 0.2)

Backdrop:
  Background:   rgba(31, 36, 33, 0.6)
  Backdrop Blur: 8px

Close Button:
  Position:     Top-right, 16px offset
  Size:         32px × 32px
  Icon:         X (lucide-react)
  Color:        #6B7370
```

### 2. Toast Notification
```
Background:      #FFFFFF
Border Radius:   12px
Padding:        16px 20px
Shadow:         0 8px 24px rgba(0, 0, 0, 0.15)
Max Width:      400px
Position:       Top-right, 24px offset

Success:        Left border: 3px solid #4A9B7F
Warning:        Left border: 3px solid #D4A574
Error:          Left border: 3px solid #B85C5C
Info:           Left border: 3px solid #5B7FA6

Animation:      Slide in from right, 300ms ease-out
Auto-dismiss:   5 seconds
```

---

## Badges & Labels

### 1. Status Badge
```
Padding:        4px 8px
Border Radius:  4px
Font:           Inter, 12px, 500 weight

Success:
  Background:   #E8F5F0
  Color:        #2F7A5F
  Border:       1px solid #B3DFD1

Warning:
  Background:   #FBF3E9
  Color:        #A67C42
  Border:       1px solid #F0D9BC

Error:
  Background:   #F9EDED
  Color:        #8F4444
  Border:       1px solid #E8BFBF
```

### 2. AI Feature Label
```
Background:      rgba(197, 244, 103, 0.15)
Color:          #1A3A32
Border:         1px solid rgba(197, 244, 103, 0.3)
Border Radius:  4px
Padding:        4px 8px
Font:           Inter, 12px, 500 weight, uppercase
Letter Spacing: 0.05em
```

---

## Dividers & Borders

### Horizontal Divider
```
Height:         1px
Background:     #E0E0DE
Margin:         32px 0 (standard)
```

### Subtle Divider
```
Height:         1px
Background:     rgba(224, 224, 222, 0.5)
Use:            Card sections, list items
```

### No Harsh Dividers
Prefer whitespace over lines. Use dividers sparingly.

---

## Icons

### System
```
Library:        lucide-react
Size:           16px (small), 20px (default), 24px (large)
Stroke Width:   2px (default)
Color:          Inherit from parent or #1F2421
```

### Usage
```
With Text:      8px gap
Standalone:     Minimum 44px tap target
In Buttons:     Left side, 8px gap to text
```

---

## Loading States

### Spinner (Minimal Use)
```
Size:           24px
Color:          #1A3A32
Stroke Width:   2px
Animation:      Smooth rotation, 1s linear infinite
```

### Thinking Indicator (Preferred)
```
Style:          Pulsing dot or subtle animation
Color:          #C5F467 (Innovation Lime)
Size:           8px dot
Label:          "Thinking..." in 14px, Medium Grey
```

### Skeleton Loader
```
Background:     Linear gradient
                #F0EFEC → #E8E7E4 → #F0EFEC
Animation:      Shimmer effect, 2s ease-in-out infinite
Border Radius:  Match component (8px–12px)
```

---

## Component Checklist

Every component must have:

- [ ] **Clear States:** Default, hover, active, focus, disabled
- [ ] **Accessibility:** Proper ARIA labels, keyboard navigation
- [ ] **Responsive:** Works on mobile, tablet, desktop
- [ ] **Consistent:** Matches design system spacing/colors
- [ ] **Performance:** Smooth animations, optimized rendering

---

**Status:** ✓ Component Library Approved
**Last Updated:** February 2026

# Dashboard V2 - Quick Reference Card

**For Developers:** Copy-paste patterns for consistent implementation

---

## 🎨 Colors (Copy-Paste Ready)

```tsx
// Backgrounds
bg-slate-50         // Page background
bg-white            // Cards, panels
bg-slate-100        // Hover states

// Borders
border-slate-200    // Default borders (1px)

// Text
text-slate-900      // Headlines, primary text
text-slate-600      // Body text
text-slate-500      // Labels, secondary

// Status Badges
bg-emerald-50 text-emerald-700    // Success/Active
bg-orange-50 text-orange-700      // Warning/Review
bg-blue-50 text-blue-700          // Info/In Progress
bg-slate-100 text-slate-700       // Neutral/Draft
bg-red-50 text-red-700            // Error/Critical

// Accent (Sparingly)
bg-orange-500       // Primary actions
border-orange-500   // Active tab indicator
```

---

## 📏 Spacing (Standard Values)

```tsx
p-3     // 12px - Compact cards
p-4     // 16px - Right panel, standard spacing
p-6     // 24px - Stats cards, modals
p-8     // 32px - Main content area

gap-2   // 8px  - Button icon + text
gap-3   // 12px - Navigation items
gap-4   // 16px - Card grids
gap-6   // 24px - Section spacing
```

---

## 📦 Component Snippets

### Stats Card
```tsx
<div className="bg-white rounded-lg border border-slate-200 p-6">
  <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
    <Icon className="w-4 h-4" />
    <span>Label</span>
  </div>
  <div className="text-3xl text-slate-900 mb-1">247</div>
  <div className="text-xs text-emerald-600">+12% this week</div>
</div>
```

### Page Header
```tsx
<div className="flex items-center justify-between mb-6">
  <div>
    <h1 className="text-2xl text-slate-900 mb-1">Page Title</h1>
    <p className="text-sm text-slate-600">Description text</p>
  </div>
  <button className="h-10 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
    <Plus className="w-4 h-4" />
    <span>New Item</span>
  </button>
</div>
```

### Status Badge
```tsx
<span className="px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700 rounded">
  Active
</span>
```

### Primary Button
```tsx
<button className="h-10 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
  <Icon className="w-4 h-4" />
  <span>Action</span>
</button>
```

### Secondary Button
```tsx
<button className="h-10 px-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
  Action
</button>
```

### Table Container
```tsx
<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
  <table className="w-full">
    <thead className="bg-slate-50 border-b border-slate-200">
      <tr>
        <th className="text-left px-6 py-3 text-xs text-slate-500 uppercase tracking-wider">
          Column
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-200">
      <tr className="hover:bg-slate-50 transition-colors cursor-pointer">
        <td className="px-6 py-4">
          <span className="text-sm text-slate-900">Data</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Confirmation Modal
```tsx
<div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50">
  <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
    <h3 className="text-lg text-slate-900 mb-2">Confirm Action</h3>
    <p className="text-sm text-slate-600 mb-6">
      Explanation text here...
    </p>
    <div className="flex gap-3">
      <button className="flex-1 h-10 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
        Confirm
      </button>
      <button className="flex-1 h-10 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
        Cancel
      </button>
    </div>
  </div>
</div>
```

### Right Panel AI Card (Recommendation)
```tsx
<div className="p-4 bg-slate-50 rounded-lg">
  <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">
    Recommended
  </h4>
  <p className="text-sm text-slate-900 mb-1">Recommendation Title</p>
  <p className="text-xs text-slate-600 mb-3">Description text</p>
  <button className="w-full h-8 px-3 bg-orange-500 text-white rounded text-xs hover:bg-orange-600 transition-colors">
    Take Action
  </button>
</div>
```

### Right Panel AI Card (Status)
```tsx
<div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
  <div className="flex items-start justify-between mb-2">
    <h4 className="text-sm text-slate-900">Agent Name</h4>
    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded">
      Active
    </span>
  </div>
  <p className="text-xs text-slate-600">Status description</p>
</div>
```

### Progress Bar
```tsx
<div>
  <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
    <span>Progress</span>
    <span>65%</span>
  </div>
  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
    <div className="h-full bg-orange-500 transition-all" style={{ width: '65%' }} />
  </div>
</div>
```

---

## 🎯 Icon Sizes

```tsx
// Navigation (Left Panel)
<Icon className="w-5 h-5" />      // 20px

// Buttons, Stats, Tabs
<Icon className="w-4 h-4" />      // 16px

// Empty States
<Icon className="w-12 h-12" />    // 48px
```

---

## 📱 Layout Template

```tsx
"use client";

import { DashboardLayout } from "../layout/DashboardLayout";
import { TopStrip } from "../components/TopStrip";

export default function NewPage() {
  const topStrip = (
    <TopStrip
      projectName="Real Estate CRM"
      industry="Real Estate"
      status="In Progress"
      complexity="Medium"
      deliveryModel="Phased MVP"
      primaryGoal="Automate Operations"
    />
  );

  return (
    <DashboardLayout topStrip={topStrip} rightPanelDefaultOpen={false}>
      <div className="p-8 space-y-6">
        {/* Your content here */}
      </div>
    </DashboardLayout>
  );
}
```

---

## ✅ Checklist for New Pages

**Layout:**
- [ ] `p-8` on main content container
- [ ] `space-y-6` between major sections
- [ ] TopStrip configured
- [ ] Right panel configured (if needed)

**Typography:**
- [ ] Page title: `text-2xl text-slate-900 mb-1`
- [ ] Description: `text-sm text-slate-600`
- [ ] Stats: `text-3xl text-slate-900`
- [ ] Labels: `text-xs text-slate-500`

**Colors:**
- [ ] Cards: `bg-white border border-slate-200`
- [ ] Page bg: `bg-slate-50` (automatic)
- [ ] Accent used sparingly

**Components:**
- [ ] Buttons: `h-10` standard
- [ ] Icons: `w-4 h-4` standard
- [ ] Badges: `px-2.5 py-1 text-xs`
- [ ] Hover states: `transition-colors`

---

## 🚫 Common Mistakes to Avoid

❌ `text-3xl font-bold` → Use `text-3xl` (regular weight)  
❌ `rounded-2xl` for cards → Use `rounded-lg`  
❌ `shadow-2xl` → Use `border border-slate-200`  
❌ `text-blue-500` → Use `text-slate-600`  
❌ Multiple accent colors → Use orange only  
❌ Auto-execute AI → Require confirmation  
❌ Spinners → Use text loading states  

---

## 📚 Full Documentation

See `/docs/wizards/13-dashboard-v2-style-guide.md` for complete guide.

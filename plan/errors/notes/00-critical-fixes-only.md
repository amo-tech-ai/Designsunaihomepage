# Critical Fixes Only (P0)
**Priority:** P0 - CRITICAL BLOCKERS  
**Total Time:** ~6 hours  
**Status:** Must complete before production

---

## 🚨 Critical Fixes Checklist

| # | Prompt | Time | Status |
|---|--------|------|--------|
| 1 | [Fix Import Syntax](./03-prompt-01-fix-import-syntax.md) | 5 min | ⬜ |
| 2 | [Add TypeScript Config](./03-prompt-02-add-typescript-config.md) | 5 min | ⬜ |
| 3 | [Add PostCSS Config](./03-prompt-03-add-postcss-config.md) | 2 min | ⬜ |
| 4 | [Add Tailwind Config](./03-prompt-04-add-tailwind-config.md) | 3 min | ⬜ |
| 5 | [Implement React Router](./03-prompt-05-implement-react-router.md) | 4-6 hours | ⬜ |

**Total Time: ~6 hours**

---

## Quick Execution Order

### Step 1: Fix Import Syntax (5 min)
**File:** [03-prompt-01-fix-import-syntax.md](./03-prompt-01-fix-import-syntax.md)

Replace incorrect imports:
- `'sonner@2.0.3'` → `'sonner'`
- `'next-themes@0.4.6'` → `'next-themes'`

**Files:**
- `src/App.tsx:51`
- `src/components/ui/sonner.tsx:3-4`
- `src/components/crm/ProposalGenerator.tsx:13`

---

### Step 2: Add TypeScript Config (5 min)
**File:** [03-prompt-02-add-typescript-config.md](./03-prompt-02-add-typescript-config.md)

Create `tsconfig.json` in project root with proper configuration.

---

### Step 3: Add PostCSS Config (2 min)
**File:** [03-prompt-03-add-postcss-config.md](./03-prompt-03-add-postcss-config.md)

Create `postcss.config.js` in project root.

---

### Step 4: Add Tailwind Config (3 min)
**File:** [03-prompt-04-add-tailwind-config.md](./03-prompt-04-add-tailwind-config.md)

Create `tailwind.config.js` in project root.

---

### Step 5: Implement React Router (4-6 hours)
**File:** [03-prompt-05-implement-react-router.md](./03-prompt-05-implement-react-router.md)

Replace state-based navigation with URL-based routing.

**This is the biggest blocker - must complete for production.**

---

## Success Criteria

After completing all critical fixes:

- [ ] Build succeeds without errors
- [ ] TypeScript type checking works
- [ ] All imports use correct syntax
- [ ] CSS processing works correctly
- [ ] URLs change when navigating
- [ ] Browser back/forward buttons work
- [ ] Links are shareable

**Result: Ready for Phase 2 fixes** ✅

---

## After Critical Fixes

Once these 5 prompts are complete, proceed to:
- [Full Index](./00-index.md) - See all prompts including high-priority fixes

---

## Related Documents

- [Full Audit Report](./01-audit.md) - Complete findings
- [All Prompts Index](./00-index.md) - Complete list of all 10 prompts


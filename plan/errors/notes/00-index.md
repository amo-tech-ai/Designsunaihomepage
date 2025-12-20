# Fix Prompts Index
**Total Prompts:** 10  
**Total Time:** ~12-15 hours  
**Goal:** Production-ready application

> **🚨 Need only critical fixes?** See [Critical Fixes Only](./00-critical-fixes-only.md) (5 prompts, ~6 hours)

---

## 📋 Quick Reference

| # | Prompt | Priority | Time | Status |
|---|--------|----------|------|--------|
| 1 | [Fix Import Syntax](./03-prompt-01-fix-import-syntax.md) | P0 - CRITICAL | 5 min | ⬜ |
| 2 | [Add TypeScript Config](./03-prompt-02-add-typescript-config.md) | P0 - CRITICAL | 5 min | ⬜ |
| 3 | [Add PostCSS Config](./03-prompt-03-add-postcss-config.md) | P0 - CRITICAL | 2 min | ⬜ |
| 4 | [Add Tailwind Config](./03-prompt-04-add-tailwind-config.md) | P0 - CRITICAL | 3 min | ⬜ |
| 5 | [Implement React Router](./03-prompt-05-implement-react-router.md) | P0 - CRITICAL | 4-6 hours | ⬜ |
| 6 | [Add Error Boundaries](./03-prompt-06-add-error-boundaries.md) | P1 - HIGH | 1 hour | ⬜ |
| 7 | [Add 404 Page](./03-prompt-07-add-404-page.md) | P1 - HIGH | 30 min | ⬜ |
| 8 | [Implement Code Splitting](./03-prompt-08-implement-code-splitting.md) | P1 - HIGH | 2-3 hours | ⬜ |
| 9 | [Standardize Import Paths](./03-prompt-09-standardize-import-paths.md) | P1 - MEDIUM | 1-2 hours | ⬜ |
| 10 | [Add Environment Validation](./03-prompt-10-add-environment-validation.md) | P1 - MEDIUM | 30 min | ⬜ |

---

## 🎯 Execution Order

### Phase 1: Critical (Today - 6 hours)
**Priority:** P0 - Must complete before production

1. ✅ [Prompt 1: Fix Import Syntax](./03-prompt-01-fix-import-syntax.md) (5 min)
2. ✅ [Prompt 2: Add TypeScript Config](./03-prompt-02-add-typescript-config.md) (5 min)
3. ✅ [Prompt 3: Add PostCSS Config](./03-prompt-03-add-postcss-config.md) (2 min)
4. ✅ [Prompt 4: Add Tailwind Config](./03-prompt-04-add-tailwind-config.md) (3 min)
5. ✅ [Prompt 5: Implement React Router](./03-prompt-05-implement-react-router.md) (4-6 hours)

**Phase 1 Total: ~6 hours**

### Phase 2: High Priority (This Week)
**Priority:** P1 - Should complete this week

6. ✅ [Prompt 6: Add Error Boundaries](./03-prompt-06-add-error-boundaries.md) (1 hour)
7. ✅ [Prompt 7: Add 404 Page](./03-prompt-07-add-404-page.md) (30 min)
8. ✅ [Prompt 8: Implement Code Splitting](./03-prompt-08-implement-code-splitting.md) (2-3 hours)
9. ✅ [Prompt 9: Standardize Import Paths](./03-prompt-09-standardize-import-paths.md) (1-2 hours)
10. ✅ [Prompt 10: Add Environment Validation](./03-prompt-10-add-environment-validation.md) (30 min)

**Phase 2 Total: ~5-7 hours**

**Grand Total: ~12-15 hours**

---

## 🎯 Success Criteria

After completing all prompts:

- [ ] Build succeeds without warnings
- [ ] TypeScript type checking passes
- [ ] All routes work with URL-based navigation
- [ ] Browser back/forward buttons work
- [ ] Links are shareable
- [ ] Error boundaries catch errors
- [ ] 404 page shows for invalid URLs
- [ ] Bundle size < 500KB
- [ ] All imports use correct syntax
- [ ] Environment variables validated

**Result: 85%+ Production Ready** ✅

---

## 📚 Related Documents

- [Full Audit Report](./01-audit.md) - Complete forensic audit findings
- [Original Combined Prompts](./02-prompts-fix.md) - All prompts in one file (reference)


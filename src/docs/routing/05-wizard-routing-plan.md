# 05 - Wizard Routing Plan

**Organized Version:** This document is part of the `/docs/routing/` organized structure.

---

## 📍 DOCUMENT LOCATION

**Current Location:** `/docs/routing/05-wizard-routing-plan.md`  
**Original Location:** `/docs/tasks/17-wizard-routing-plan.md`

**Status:** ✅ Content is in original location

---

## 📖 TO READ THIS DOCUMENT

Please refer to the complete content at:

**→ `/docs/tasks/17-wizard-routing-plan.md`**

---

## 📋 DOCUMENT SUMMARY

**What's Inside:**
- 3 routing strategy options (A: current, B: step-based, C: query params)
- Option B recommended (step-based URLs `/wizard/1`, `/wizard/2`, etc.)
- 2 Mermaid diagrams (wizard step flow, user journey)
- Resume + share strategy (localStorage + URL sync)
- Exit path specifications (cancel, save & exit, back)
- State management guide

**Key Recommendations:**
- ✅ Implement step-based URLs `/wizard/:step` (2h)
- ✅ Add save & exit functionality (1h)
- ✅ Implement resume from localStorage (30min)
- ✅ Browser back/forward support

**Time to Read:** 20-25 minutes

---

## 🔗 RELATED DOCUMENTS

**Before This:**
- `01-routing-structure-audit.md` — Complete audit

**Parallel:**
- `03-marketing-routing-plan.md` — Marketing routes
- `04-dashboard-app-routing-plan.md` — Dashboard routes

**Reference:**
- `06-routing-best-practices.md` — Dynamic route patterns

**Implementation:**
- `/docs/tasks/13-phase-1-routing-implementation.md` — Wizard route setup

---

## 🎯 USE CASES

**Read this document when:**
- Refactoring wizard to URL-based steps
- Building multi-step forms
- Implementing progress saving
- Planning resumable flows
- Handling wizard exit paths

---

**Navigation:** [← Back to Index](./00-INDEX.md) | [Next: Best Practices →](./06-routing-best-practices.md)

---

*For the complete wizard routing plan, see `/docs/tasks/17-wizard-routing-plan.md`*

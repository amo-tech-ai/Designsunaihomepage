# Routing Reference Documentation Suite

**Created:** December 20, 2025  
**Status:** Production-Ready  
**Target:** Vite + React + React Router v6

---

## 📚 **DOCUMENT OVERVIEW**

This suite contains **permanent reference documentation** for routing architecture, best practices, and troubleshooting.

**All documents in this folder:**

```
/docs/routing/
├── ROUTING-BEST-PRACTICES.md        ✅ Architectural reference
├── ROUTING-TROUBLESHOOTING.md       ✅ Incident response guide
├── 00-CRITICAL-CORRECTIONS.md       ✅ Bug catalog
├── 00-QUICK-START.md                ✅ Implementation entry point
├── 00-progress-tracker.md           ✅ Task tracking
├── 01-routing-foundation-CORRECTED.md ✅ Task 01 (validated)
├── 01-routing-foundation.md         ⚠️ Original (has bugs)
├── 02-08-*.md                       ⚠️ Original tasks (need corrections)
└── README-REFERENCE-DOCS.md         ← You are here
```

---

## 🎯 **WHICH DOCUMENT SHOULD I USE?**

### **For Architecture & Best Practices**
👉 **Use:** `ROUTING-BEST-PRACTICES.md`

**When to use:**
- Before starting routing work
- During code reviews
- When onboarding new developers
- To establish team standards
- As reference for architectural decisions

**What it contains:**
- Non-negotiable routing principles
- Recommended folder structure
- Navigation rules
- Lazy loading & Suspense strategy
- Platform-specific deployment configs
- Common anti-patterns with fixes
- 3 Mermaid diagrams
- Production readiness checklist

**Length:** Comprehensive (~8,000 words)

---

### **For Troubleshooting & Debugging**
👉 **Use:** `ROUTING-TROUBLESHOOTING.md`

**When to use:**
- Routes are broken in production
- Pages don't load
- Navigation stopped working
- Getting console errors
- During incident response

**What it contains:**
- Symptoms index (quick lookup table)
- Step-by-step diagnostic procedures
- Platform-specific failure fixes
- Debugging checklist
- 3 Mermaid diagrams (error flows)
- Escalation protocols

**Length:** Comprehensive (~7,500 words)

---

### **For Implementation Tasks**
👉 **Use:** `00-QUICK-START.md` + `01-routing-foundation-CORRECTED.md`

**When to use:**
- Implementing routing for the first time
- Following step-by-step task instructions

**Critical:** Use **CORRECTED** versions only!

**See also:** `00-CRITICAL-CORRECTIONS.md` for bug catalog

---

## 🔍 **QUICK NAVIGATION**

### **I need to...**

#### **Understand routing principles**
→ `ROUTING-BEST-PRACTICES.md` → Section 2

#### **Set up folder structure**
→ `ROUTING-BEST-PRACTICES.md` → Section 3

#### **Learn layout routing pattern**
→ `ROUTING-BEST-PRACTICES.md` → Section 5

#### **Configure production deployment**
→ `ROUTING-BEST-PRACTICES.md` → Section 8  
→ `ROUTING-TROUBLESHOOTING.md` → Section 9

#### **Fix blank screen issue**
→ `ROUTING-TROUBLESHOOTING.md` → Section 2 (Symptoms Index)  
→ Then Section 3 or 4

#### **Fix 404 in production**
→ `ROUTING-TROUBLESHOOTING.md` → Section 9

#### **Fix sidebar navigation**
→ `ROUTING-TROUBLESHOOTING.md` → Section 6

#### **Fix wizard progress loss**
→ `ROUTING-TROUBLESHOOTING.md` → Section 7

#### **Fix auth redirect issues**
→ `ROUTING-TROUBLESHOOTING.md` → Section 8

#### **Implement routing step-by-step**
→ `00-QUICK-START.md`  
→ Then `01-routing-foundation-CORRECTED.md`

---

## 📊 **DOCUMENT COMPARISON**

| Feature | Best Practices | Troubleshooting | Task Docs |
|---------|---------------|-----------------|-----------|
| **Purpose** | Architectural reference | Incident response | Implementation guide |
| **When to use** | Before/during dev | When broken | During implementation |
| **Tone** | Instructive | Diagnostic | Step-by-step |
| **Length** | Comprehensive | Comprehensive | Detailed |
| **Diagrams** | 3 (architecture) | 3 (failure flows) | 1 per task |
| **Examples** | Good vs Bad | Fix procedures | Copy-paste code |
| **Update frequency** | Quarterly | As issues arise | Per task completion |

---

## 🎓 **RECOMMENDED READING ORDER**

### **For New Developers**

1. Read `00-QUICK-START.md` (10 min)
2. Skim `ROUTING-BEST-PRACTICES.md` Sections 1-6 (30 min)
3. Implement Task 01 using `01-routing-foundation-CORRECTED.md` (2 hours)
4. Refer back to Best Practices as needed

### **For Experienced Developers**

1. Read `ROUTING-BEST-PRACTICES.md` Section 2 (Principles) (10 min)
2. Review Section 9 (Anti-Patterns) (15 min)
3. Bookmark `ROUTING-TROUBLESHOOTING.md` for reference

### **For Code Reviewers**

1. Read `ROUTING-BEST-PRACTICES.md` Sections 2, 6, 9 (30 min)
2. Use Section 11 (Production Checklist) during reviews
3. Reference anti-patterns when providing feedback

### **For DevOps / SREs**

1. Read `ROUTING-BEST-PRACTICES.md` Section 8 (Deployment) (10 min)
2. Bookmark `ROUTING-TROUBLESHOOTING.md` Section 9 (Production Failures)
3. Use Troubleshooting guide during incidents

---

## 🔥 **CRITICAL WARNINGS**

### ⚠️ **DO NOT USE Original Task Documents (v1.0.0)**

**Files to AVOID:**
- `01-routing-foundation.md` (v1.0.0) - Has 9 critical bugs
- `02-marketing-routing.md` (v1.0.0) - Has 2 critical bugs
- `03-dashboard-routing.md` (v1.0.0) - Has 1 critical bug
- Tasks 04-08 (v1.0.0) - Need corrections

**Why:** These contain bugs that will break your app:
- Wrong Sonner import syntax
- Missing safeLazy helper
- Dead navigation callbacks
- Architecture contradictions
- See `00-CRITICAL-CORRECTIONS.md` for full list

### ✅ **USE Corrected Versions Only**

**Safe files:**
- `01-routing-foundation-CORRECTED.md` (v2.0.0) ✅
- `00-QUICK-START.md` ✅
- `ROUTING-BEST-PRACTICES.md` ✅
- `ROUTING-TROUBLESHOOTING.md` ✅

---

## 🛠️ **MAINTENANCE**

### **Document Ownership**

| Document | Owner | Update Frequency |
|----------|-------|------------------|
| Best Practices | Frontend Lead | Quarterly |
| Troubleshooting | DevOps + Frontend | As issues arise |
| Task Docs | Product Architecture | Per sprint |
| Corrections | Product Architecture | As bugs found |

### **When to Update**

**Best Practices:**
- React Router version upgrade
- New routing pattern adopted
- Architecture decision changes
- Quarterly review

**Troubleshooting:**
- New production issue discovered
- New failure pattern identified
- New platform added (deployment)
- After major incidents

**Task Docs:**
- Task completed and validated
- Bug discovered in task
- Process improvement identified

---

## 📞 **SUPPORT & FEEDBACK**

### **Found an Issue?**

1. Check if it's in `00-CRITICAL-CORRECTIONS.md`
2. If new, document:
   - What's wrong
   - Why it breaks
   - How to fix
   - Affected files
3. Create issue or notify team lead
4. Update relevant document

### **Need Clarification?**

1. Check relevant document's Table of Contents
2. Use Cmd+F to search for keyword
3. Check Mermaid diagrams for visual explanation
4. Ask in #frontend channel with document reference

### **Want to Contribute?**

1. Read existing document first
2. Follow same tone and format
3. Add examples (good vs bad)
4. Include verification steps
5. Create PR with updates
6. Tag frontend lead for review

---

## 🎯 **SUCCESS METRICS**

**These documents are successful if:**

- New developers can implement routing without help
- Code reviews reference specific sections
- Production incidents resolve faster (use Troubleshooting guide)
- Routing bugs decrease over time
- Team adopts consistent patterns

**Track:**
- References in PRs
- Incident resolution time (before/after)
- Onboarding time for routing tasks
- Routing-related bugs per sprint

---

## 📚 **RELATED DOCUMENTATION**

### **Internal Docs**
- `/docs/routing/03-marketing-routing-plan.md` - Marketing route specifications
- `/docs/routing/04-dashboard-app-routing-plan.md` - Dashboard route specifications
- `/docs/routing/06-routing-best-practices.md` - Original best practices (different format)

### **External Resources**
- [React Router v6 Docs](https://reactrouter.com/en/main)
- [Vite Docs](https://vitejs.dev/)
- [React Suspense Docs](https://react.dev/reference/react/Suspense)

---

## 🚀 **QUICK START CHECKLIST**

**For first-time implementers:**

- [ ] Read `00-QUICK-START.md` (10 min)
- [ ] Review `00-CRITICAL-CORRECTIONS.md` (10 min)
- [ ] Skim `ROUTING-BEST-PRACTICES.md` Principles (10 min)
- [ ] Implement Task 01 using **CORRECTED** version (2 hours)
- [ ] Bookmark `ROUTING-TROUBLESHOOTING.md` for reference
- [ ] Update progress tracker

**Total time:** ~3 hours for solid foundation

---

## 📖 **VERSION HISTORY**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | Dec 20, 2025 | Initial reference suite created | Product Architecture |

---

**These documents form the complete routing knowledge base for the team. Keep them updated, reference them often, and follow them strictly for production-ready routing.**

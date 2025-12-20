# 06 - Routing Best Practices Reference

**Organized Version:** This document is part of the `/docs/routing/` organized structure.

---

## 📍 DOCUMENT LOCATION

**Current Location:** `/docs/routing/06-routing-best-practices.md`  
**Original Location:** `/docs/tasks/18-routing-best-practices-reference.md`

**Status:** ✅ Content is in original location

---

## 📖 TO READ THIS DOCUMENT

Please refer to the complete content at:

**→ `/docs/tasks/18-routing-best-practices-reference.md`**

---

## 📋 DOCUMENT SUMMARY

**What's Inside:**
- URL naming conventions (lowercase, kebab-case, nouns)
- Route grouping & nesting rules (max 3-4 levels)
- Redirect & canonical URL strategy
- Dynamic route guidelines (`:id` vs `:slug`)
- Error handling patterns (404, loading, validation)
- SEO essentials (meta tags, sitemaps, Open Graph)
- Security rules (never trust client, validate server-side)
- Complete testing checklist (20+ items)
- 20-item Do/Don't comparison table

**Key Standards:**
- ✅ Always lowercase
- ✅ Kebab-case for multi-word
- ✅ No trailing slashes
- ✅ Collections = plural, Items = singular
- ✅ Never put sensitive data in URLs
- ✅ Always validate on backend

**Time to Read:** 30-40 minutes (reference material)

---

## 🔗 RELATED DOCUMENTS

**Use with:**
- `03-marketing-routing-plan.md` — When building marketing routes
- `04-dashboard-app-routing-plan.md` — When building app routes
- `05-wizard-routing-plan.md` — When building wizard routes

**Reference during:**
- Code reviews
- Creating new routes
- Onboarding developers
- SEO audits
- Security reviews

---

## 🎯 USE CASES

**Read this document when:**
- Creating any new route
- Reviewing routing PRs
- Setting up SEO
- Implementing auth guards
- Debugging routing issues
- Onboarding team members

**Quick Reference Sections:**
- URL Conventions → Section A
- Route Nesting → Section B
- Redirects → Section C
- Dynamic Routes → Section D
- Error Handling → Section E
- SEO → Section F
- Security → Section G
- Testing → Section H
- Do/Don't → Section I

---

**Navigation:** [← Back to Index](./00-INDEX.md) | [Start: Audit →](./01-routing-structure-audit.md)

---

*For the complete best practices reference, see `/docs/tasks/18-routing-best-practices-reference.md`*

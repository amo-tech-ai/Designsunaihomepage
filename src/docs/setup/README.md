# 📂 Setup Documentation

This folder contains core setup and configuration documentation for the Luxury AI CRM application.

---

## 📑 **Files in This Folder**

| File | Description | Use Case |
|------|-------------|----------|
| **sitemap.md** | Complete sitemap with detailed route information | Reference all routes, auth requirements, user journeys |
| **sitemap-visual.md** | Visual tree representation of site structure | Quick navigation, flow visualization |
| **README.md** | This file - folder overview | Navigation guide |

---

## 🗺️ **Sitemap Documentation**

### **sitemap.md** - Comprehensive Route Guide
**50+ pages documented including:**
- ✅ All marketing pages
- ✅ Service & chatbot pages  
- ✅ Wizard flow (3 steps)
- ✅ Dashboard & CRM routes
- ✅ Sales Intelligence OS
- ✅ Auth requirements
- ✅ Chatbot visibility rules
- ✅ User journey maps
- ✅ Integration points

**Best for:**
- Understanding complete site architecture
- Planning new features
- Onboarding developers
- SEO planning

### **sitemap-visual.md** - Tree View Navigation
**Visual hierarchical structure including:**
- ✅ Tree-style route map
- ✅ User flow diagrams
- ✅ Access level matrix
- ✅ Design version tracking
- ✅ Chatbot deployment map
- ✅ Performance priorities
- ✅ Route statistics

**Best for:**
- Quick visual reference
- Understanding relationships
- Flow visualization
- Presenting to stakeholders

---

## 🎯 **Quick Access**

### **Need to know all routes?**
→ Open **sitemap.md**

### **Need visual hierarchy?**
→ Open **sitemap-visual.md**

### **Need to add a new page?**
1. Add route to `/routes/index.tsx`
2. Update both sitemap files
3. Update this README if needed

---

## 📊 **Site Overview Stats**

| Metric | Count |
|--------|-------|
| **Total Pages** | 50+ |
| **Marketing Pages** | 16 |
| **Service Pages** | 13 (6 core + 7 chatbot) |
| **Protected Routes** | 15 |
| **Public Routes** | 35 |
| **Version Archives** | 6 (V1-V6) |
| **Wizard Steps** | 3 |
| **AI Intelligence Pages** | 4 |

---

## 🔗 **Related Documentation**

### **In Other Folders:**
- `/docs/home/` - Home page implementation docs
- `/docs/roadmap/` - Feature roadmaps
- `/routes/` - Actual route implementations
- `/components/` - Component source code

---

## ✅ **Maintenance Checklist**

When adding/removing routes:
- [ ] Update `/routes/index.tsx`
- [ ] Update `sitemap.md` route list
- [ ] Update `sitemap-visual.md` tree
- [ ] Update navigation components
- [ ] Update auth requirements in `ProtectedRoute`
- [ ] Update chatbot visibility rules in `App.tsx`
- [ ] Test route in browser
- [ ] Update analytics tracking (if needed)

---

## 🚀 **Key Routes Reference**

### **Most Important Pages:**
```
/                           # Homepage (V7)
/services/ai-chatbots       # Main service offering
/wizard                     # Lead generation
/dashboard                  # Client portal
/app/leads                  # CRM dashboard
/app/intelligence/ingest    # Call analysis entry
```

### **High Traffic Expected:**
```
/
/services/ai-chatbots
/services/chatbot/saas
/services/chatbot/ecommerce
/booking
```

### **Business Critical:**
```
/wizard                     # Lead funnel
/processing                 # AI processing
/proposal                   # Conversion point
/app/intelligence/*         # Core AI features
```

---

## 📅 **Version History**

| Date | Change | Author |
|------|--------|--------|
| Dec 27, 2025 | Created setup documentation folder | System |
| Dec 27, 2025 | Added comprehensive sitemap.md | System |
| Dec 27, 2025 | Added visual sitemap-visual.md | System |

---

**📍 Location:** `/docs/setup/`  
**🎯 Purpose:** Core site structure documentation  
**✅ Status:** Complete & Up-to-date

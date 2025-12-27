# 📚 Setup Documentation Index

**Complete reference for all setup, sitemap, and page organization documentation**

---

## 🎯 **QUICK REFERENCE**

| Document | Purpose | Status |
|----------|---------|--------|
| `01-pages-table.md` | Complete 47-page audit with features, use cases, examples | ✅ Complete |
| `02-pages-organized.md` | 3-table organization (Marketing, Dashboards, Wizards) + Mermaid diagrams | ✅ Complete |
| `sitemap-visual.md` | Visual site tree with user flows and access matrix | ✅ Updated - V6 Default |
| `sitemapv3.md` | Comprehensive sitemap with conversion funnels | ✅ Updated - V6 Default |

---

## 📋 **DOCUMENT SUMMARIES**

### **1. `/docs/setup/01-pages-table.md`**
**Complete Pages Audit Table - Luxury AI CRM**

**Contains:**
- **47 pages** in one comprehensive table
- Columns: #, Route, Component, Category, Features, Use Cases, Real World Example, Purpose, Access, Status
- Critical AI implementation gaps (9 features)
- Implementation priority checklist (4 phases)
- Production readiness summary (81% complete)

**Use When:**
- Need to see ALL pages in one view
- Auditing feature completeness
- Planning AI implementation
- Understanding business impact of each page

**Key Metrics:**
- Total Pages: 47
- UI Complete: 100%
- AI Backend: 0%
- Production Ready: 38 pages (81%)

---

### **2. `/docs/setup/02-pages-organized.md` ⭐ RECOMMENDED**
**Pages Organized by Category - 3 Tables + Mermaid Diagrams**

**Contains:**
- **Table 1: Marketing Pages (25)** - All public marketing and service pages
- **Table 2: Dashboards (11)** - Client portal, CRM, AI Intelligence OS
- **Table 3: Wizards & Auth (4)** - Wizard flow + login
- **6 Mermaid Diagrams:**
  1. Marketing User Journey (Visitor → Lead)
  2. Sales Intelligence OS Flow (Call Upload → Insights)
  3. CRM Admin Workflow (Daily Operations)
  4. Wizard Conversion Funnel (5 Steps → Proposal)
  5. Complete User Journey (Visitor → Client)
  6. Additional flow diagrams

**Use When:**
- Need category-specific view
- Planning user journeys
- Visualizing flows with diagrams
- Understanding conversion funnels

**Key Insights:**
- Marketing: 25 pages (100% production ready)
- Dashboards: 11 pages (4 need AI backend)
- Wizards: 4 pages (1 needs AI backend)

---

### **3. `/docs/setup/sitemap-visual.md`**
**Visual Site Tree - Hierarchical View**

**Contains:**
- Complete site tree (ASCII format)
- 3 user flow visualizations (ASCII diagrams)
- Access level matrix (Public/Client/Admin)
- Page design versions (V6/V7/Mixed)
- Chatbot deployment map (21 enabled, 19 disabled)
- Route statistics (40 production routes)
- Performance priorities
- Integration points (Supabase, WhatsApp, Calendar, AI)

**Use When:**
- Need hierarchical site structure view
- Understanding routing architecture
- Planning access control
- Checking chatbot deployment

**Special Features:**
- ASCII art site tree
- ASCII flow diagrams (no Mermaid dependency)
- Design version tracking

---

### **4. `/docs/setup/sitemapv3.md`**
**Comprehensive Sitemap V3 - Use Cases & Funnels**

**Contains:**
- Streamlined site tree
- Complete 40-page inventory table
- Category breakdown (9 categories)
- Usage statistics
- Access control matrix
- 4 conversion funnels:
  1. Visitor → Lead
  2. Lead → Meeting
  3. Client → Project
  4. Sales Rep → Intelligence
- Priority routes by performance
- Key architectural insights

**Use When:**
- Need conversion funnel analysis
- Understanding user journeys
- Planning SEO priorities
- Analyzing public vs protected split

**Key Insights:**
- 66% public pages
- 34% protected pages
- 3-step wizard for zero-friction conversion
- Sales Intelligence OS isolated in `/app/intelligence/*`

---

## 🎨 **HOMEPAGE VERSION: V6 IS NOW DEFAULT**

### **Change Summary (December 27, 2025)**

**Before:**
- `/` → HomePageV7 (Globe illustration, 300×300px)
- `/v6` → HomePageV6 (Circle illustration)

**After:**
- `/` → HomePageV6 ⭐ **DEFAULT** (Circle illustration)
- `/v6` → HomePageV6 (Same as `/`)
- `/v7` → HomePageV7 (Moved to archive, Globe illustration)

**Files Updated:**
1. ✅ `/routes/index.tsx` - Changed route mapping
2. ✅ `/App.tsx` - Updated getCurrentVersion() to return 'v6' as default
3. ✅ `/docs/setup/sitemap-visual.md` - Updated tree and version sections
4. ✅ `/docs/setup/sitemapv3.md` - Updated route labels
5. ✅ `/docs/setup/02-pages-organized.md` - Documented V6 as default

**Reason:**
- V6 circle illustration provides calm, refined aesthetic
- V7 globe available as alternative at `/v7`
- Aligns with "Calm Luxury" brand positioning

---

## 📊 **PAGE ORGANIZATION STRUCTURE**

### **3-Category System (Recommended)**

```
┌─────────────────────────────────────────────┐
│                                             │
│  MARKETING PAGES (25)                       │
│  ✅ 100% Production Ready                   │
│  • Homepage V6                              │
│  • 9 Marketing pages                        │
│  • 14 Service pages                         │
│  • 1 Documentation page                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  DASHBOARDS (11)                            │
│  ⚠️ 36% Need AI Backend                     │
│  • 2 Client dashboards (✅ Ready)           │
│  • 4 CRM/Admin pages (1 ready, 3 need AI)  │
│  • 4 AI Intelligence pages (❌ All need AI) │
│  • 1 Archive page                           │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  WIZARDS & AUTH (4)                         │
│  ⚠️ 25% Need AI Backend                     │
│  • Wizard (✅ Ready)                        │
│  • Processing (✅ Ready)                    │
│  • Proposal (❌ Needs AI generator)         │
│  • Login (✅ Ready)                         │
│                                             │
└─────────────────────────────────────────────┘

SUPPORTING: Archive (6) + Error (1) = 7 pages
```

---

## 🚨 **CRITICAL AI GAPS (9 FEATURES)**

### **By Category:**

**Wizard (1 feature):**
- `/proposal` - AI proposal generator

**Dashboards (8 features):**
- `/app/leads` - Lead enrichment
- `/app/ops` - Agent monitoring system
- `/app/workflow` - Automation engine
- `/app/intelligence/ingest` - Transcription service
- `/app/intelligence/analysis` - AI call analysis
- `/app/intelligence/brief` - AI insights generator
- `/app/intelligence/search` - Natural language search

**Total:** 9 features with 0% AI implementation

---

## 🎯 **IMPLEMENTATION PRIORITY**

### **Phase 1: Wizard Completion (Week 1)**
1. `/proposal` - AI proposal generator
   - **Input:** Wizard form data
   - **Output:** Custom proposal with pricing/timeline
   - **Backend:** OpenAI GPT-4 + template engine

### **Phase 2: Sales Intelligence Core (Week 2-3)**
2. `/app/intelligence/ingest` - Transcription
3. `/app/intelligence/analysis` - AI call analysis
4. `/app/intelligence/brief` - AI insights generation
   - **Backend:** AssemblyAI + OpenAI GPT-4

### **Phase 3: CRM Intelligence (Week 4-5)**
5. `/app/leads` - Lead enrichment
6. `/app/intelligence/search` - NL search
   - **Backend:** Clearbit/Apollo + OpenAI Embeddings

### **Phase 4: Automation (Week 6+)**
7. `/app/ops` - Agent monitoring
8. `/app/workflow` - Automation engine
   - **Backend:** Custom orchestration system

---

## 📈 **USAGE RECOMMENDATIONS**

### **For Product Planning:**
→ Use `02-pages-organized.md` for category-based planning

### **For Development:**
→ Use `01-pages-table.md` for complete feature audit

### **For Marketing/SEO:**
→ Use `sitemapv3.md` for conversion funnels and priorities

### **For Architecture Review:**
→ Use `sitemap-visual.md` for hierarchical structure

---

## 🔄 **MAINTENANCE SCHEDULE**

| Update Trigger | Files to Update |
|----------------|-----------------|
| **New page added** | All 4 documents |
| **Route changed** | `sitemap-visual.md`, `sitemapv3.md`, route files |
| **AI feature implemented** | `01-pages-table.md`, `02-pages-organized.md` |
| **Design version change** | All docs + `routes/index.tsx` + `App.tsx` |
| **Conversion funnel change** | `02-pages-organized.md`, `sitemapv3.md` |

---

## ✅ **CURRENT STATUS**

**Documentation:**
- ✅ All 4 sitemap documents created/updated
- ✅ V6 set as default homepage
- ✅ Routing files updated
- ✅ 3-table organization complete
- ✅ Mermaid diagrams added (6 total)

**Implementation:**
- ✅ UI: 47/47 pages (100%)
- ❌ AI Backend: 0/9 features (0%)
- 🎯 Next: Phase 1 - Implement `/proposal` AI generator

---

**📅 Last Updated:** December 27, 2025  
**🏠 Default Homepage:** V6 (Circle Illustration)  
**📊 Total Pages:** 47 (40 production + 6 archive + 1 error)  
**🎯 Priority:** Implement 9 AI features across 4 phases

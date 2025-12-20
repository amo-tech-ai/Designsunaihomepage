# 07 - SEO Routing Optimization

**Version:** 1.0.0  
**Status:** 🔴 Not Started  
**Priority:** P2 - Medium  
**Estimated Time:** 2 hours  
**Owner:** TBD

---

## Executive Summary

This task implements comprehensive SEO optimization for all marketing routes including unique meta tags (title, description, canonical URLs), Open Graph tags for social sharing, sitemap.xml generation, robots.txt configuration, and structured data. This enables search engines to properly crawl, index, and rank the site.

---

## Problem This Task Solves

**Current State:**
- All pages share same `<title>`
- No meta descriptions
- No canonical URLs
- No Open Graph tags (broken social previews)
- No sitemap.xml
- No robots.txt
- Search engines cannot properly index site

**Target State:**
- Each route has unique, optimized title
- Descriptive meta descriptions on all pages
- Canonical URLs prevent duplicate content
- Open Graph tags enable rich social previews
- Sitemap.xml lists all public routes
- Robots.txt guides crawlers
- Structured data for rich snippets

---

## Scope

### In Scope
- Add unique titles to all marketing routes
- Add unique meta descriptions
- Add canonical URLs
- Add Open Graph tags
- Generate sitemap.xml
- Create robots.txt
- Add JSON-LD structured data (basic)
- SEO validation checklist

### Out of Scope
- Content optimization (keyword research)
- Backlink strategy
- Advanced structured data (reviews, products, etc.)
- Performance optimization (separate task)
- Image SEO (alt text already in components)

---

## Dependencies

### Prerequisites
- ✅ Task 02 complete (marketing routes exist)
- react-helmet-async installed

### Blocks These Tasks
- None (optimization task)

### Blocked By
- Task 02: Marketing Routing

---

## Step-by-Step Implementation

### Step 1: Create SEO Component Wrapper (30 minutes)

Create `/src/components/SEO.tsx`:

```tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = '/og-default.png',
  ogType = 'website',
  noindex = false,
  structuredData,
}: SEOProps) {
  const siteUrl = 'https://yoursite.com'; // TODO: Use env variable
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const fullTitle = `${title} | Your Brand Name`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
```

---

### Step 2: Add SEO to All Marketing Pages (60 minutes)

Update each marketing page:

```tsx
// HomePage.tsx
import { SEO } from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="AI Development Agency"
        description="Build intelligent web applications with our expert AI development team. From chatbots to custom AI solutions, we deliver production-ready code."
        canonical="/"
        ogImage="/og-home.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Your Company",
          "url": "https://yoursite.com",
          "logo": "https://yoursite.com/logo.png",
          "description": "AI Development Agency",
          "sameAs": [
            "https://twitter.com/yourcompany",
            "https://linkedin.com/company/yourcompany"
          ]
        }}
      />
      
      {/* Page content */}
    </>
  );
}

// PricingPage.tsx
export default function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing for AI development projects. From $15,000 for MVPs to custom enterprise solutions. View our pricing tiers and start your project today."
        canonical="/pricing"
        ogImage="/og-pricing.png"
      />
      
      {/* Page content */}
    </>
  );
}

// ServiceDetailPage.tsx
export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        canonical={`/services/${service.slug}`}
        ogImage={service.ogImage || '/og-default.png'}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "Your Company"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": service.pricing.starter
          }
        }}
      />
      
      {/* Page content */}
    </>
  );
}

// CaseStudyDetailPage.tsx
export default function CaseStudyDetailPage() {
  const study = getCaseStudyBySlug(slug);

  return (
    <>
      <SEO
        title={study.title}
        description={study.excerpt}
        canonical={`/case-studies/${study.slug}`}
        ogImage={study.logo}
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": study.title,
          "description": study.excerpt,
          "image": study.logo,
          "author": {
            "@type": "Organization",
            "name": "Your Company"
          }
        }}
      />
      
      {/* Page content */}
    </>
  );
}
```

**Pages to Update:**
- [x] HomePage (/)
- [x] ServicesPage (/services)
- [x] ServiceDetailPage (/services/:slug) — 7 services
- [x] PricingPage (/pricing)
- [x] CaseStudiesPage (/case-studies)
- [x] CaseStudyDetailPage (/case-studies/:slug)
- [x] ContactPage (/contact)
- [x] ProjectsPage (/projects)
- [x] ProcessPage (/process)
- [x] AboutPage (/about)
- [x] BookingPage (/booking)

---

### Step 3: Generate Sitemap.xml (30 minutes)

Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Services -->
  <url>
    <loc>https://yoursite.com/services</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Service Detail Pages -->
  <url>
    <loc>https://yoursite.com/services/ai-web-dev</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.com/services/ai-development</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... 5 more services -->
  
  <!-- Pricing -->
  <url>
    <loc>https://yoursite.com/pricing</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Case Studies -->
  <url>
    <loc>https://yoursite.com/case-studies</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Case Study Detail Pages -->
  <url>
    <loc>https://yoursite.com/case-studies/fintech-saas-ai-automation</loc>
    <lastmod>2025-12-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- ... more case studies -->
  
  <!-- Other Pages -->
  <url>
    <loc>https://yoursite.com/contact</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://yoursite.com/projects</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://yoursite.com/process</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://yoursite.com/about</loc>
    <lastmod>2025-12-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
</urlset>
```

**Automated Generation (Optional):**

Create script `/scripts/generate-sitemap.js`:

```javascript
const fs = require('fs');
const services = require('../src/data/services').services;
const caseStudies = require('../src/data/caseStudies').caseStudies;

const baseUrl = 'https://yoursite.com';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/projects', priority: '0.7', changefreq: 'monthly' },
  { path: '/process', priority: '0.6', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
];

const serviceRoutes = services.map(s => ({
  path: `/services/${s.slug}`,
  priority: '0.8',
  changefreq: 'monthly'
}));

const caseStudyRoutes = caseStudies.map(cs => ({
  path: `/case-studies/${cs.slug}`,
  priority: '0.7',
  changefreq: 'monthly'
}));

const allRoutes = [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('✓ Sitemap generated');
```

Run: `node scripts/generate-sitemap.js`

---

### Step 4: Create robots.txt (10 minutes)

Create `/public/robots.txt`:

```
# Allow all crawlers
User-agent: *
Allow: /

# Disallow protected routes
Disallow: /app/
Disallow: /wizard/processing
Disallow: /wizard/complete
Disallow: /login

# Disallow utility routes
Disallow: /sitemap
Disallow: /deck-editor
Disallow: /style-guide

# Sitemap location
Sitemap: https://yoursite.com/sitemap.xml
```

---

### Step 5: SEO Validation (30 minutes)

**Manual Validation Checklist:**

1. **Unique Titles:**
   - [ ] Visit `/`
   - [ ] Check browser tab shows: "AI Development Agency | Your Brand"
   - [ ] Visit `/services`
   - [ ] Check browser tab shows different title
   - [ ] All pages have unique titles ✅

2. **Meta Descriptions:**
   - [ ] View page source on `/pricing`
   - [ ] Find `<meta name="description">`
   - [ ] Verify it's unique and descriptive
   - [ ] 150-160 characters ✅

3. **Canonical URLs:**
   - [ ] View source on `/services/ai-chatbots`
   - [ ] Find `<link rel="canonical">`
   - [ ] Verify URL is correct
   - [ ] All pages have canonical ✅

4. **Open Graph:**
   - [ ] Share `/pricing` on Twitter
   - [ ] Preview shows title, description, image ✅
   - [ ] Test on Facebook sharing debugger

5. **Sitemap:**
   - [ ] Visit `https://yoursite.com/sitemap.xml`
   - [ ] XML displays correctly
   - [ ] All marketing routes listed ✅

6. **Robots.txt:**
   - [ ] Visit `https://yoursite.com/robots.txt`
   - [ ] File displays correctly
   - [ ] Protected routes disallowed ✅

**Automated Validation:**

```bash
# Install lighthouse CLI
npm install -g lighthouse

# Run SEO audit
lighthouse https://yoursite.com --only-categories=seo --view

# Check for:
# - Meta description ✓
# - Robots.txt ✓
# - Canonical ✓
# - Crawlable links ✓
```

---

## Mermaid Diagram: SEO Crawl Map

```mermaid
flowchart TD
    Crawler([Search Engine<br/>Crawler]) --> Robots[/robots.txt]
    
    Robots --> Allowed{Allowed?}
    
    Allowed -->|Yes| Sitemap[/sitemap.xml]
    Allowed -->|No Protected| Skip[Skip /app/*<br/>/wizard/processing]
    
    Sitemap --> Routes[All Public Routes]
    
    Routes --> Home[/ Homepage]
    Routes --> Services[/services]
    Routes --> Pricing[/pricing]
    Routes --> Cases[/case-studies]
    
    Home --> Index1[Index Page<br/>Extract Meta Tags]
    Services --> Index2[Index Page<br/>Extract Meta Tags]
    Pricing --> Index3[Index Page<br/>Extract Meta Tags]
    Cases --> Index4[Index Page<br/>Extract Meta Tags]
    
    Index1 --> Meta{Meta Tags Valid?}
    Index2 --> Meta
    Index3 --> Meta
    Index4 --> Meta
    
    Meta -->|Yes| Rank[Add to Search Index<br/>Calculate Ranking]
    Meta -->|No| LowRank[Add with Low Quality<br/>Poor Ranking]
    
    Rank --> Snippet[Generate Rich Snippet<br/>From Structured Data]
    
    Snippet --> SERP[Show in Search Results]
    
    style Home fill:#e8f5e9
    style Services fill:#e8f5e9
    style Pricing fill:#e8f5e9
    style Cases fill:#e8f5e9
    style Skip fill:#ffebee
    style SERP fill:#fff9c4
```

---

## SEO Checklist Per Route

| Route | Title ✓ | Desc ✓ | Canonical ✓ | OG ✓ | Structured Data | In Sitemap |
|-------|---------|--------|-------------|------|-----------------|------------|
| `/` | ✅ | ✅ | ✅ | ✅ | Organization | ✅ |
| `/services` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `/services/:slug` (x7) | ✅ | ✅ | ✅ | ✅ | Service | ✅ |
| `/pricing` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `/case-studies` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `/case-studies/:slug` | ✅ | ✅ | ✅ | ✅ | Article | ✅ |
| `/contact` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `/projects` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `/process` | ✅ | ✅ | ✅ | ✅ | - | ✅ |
| `/about` | ✅ | ✅ | ✅ | ✅ | Organization | ✅ |
| `/app/*` | ❌ | ❌ | ❌ | ❌ | - | ❌ (noindex) |
| `/login` | noindex | - | - | - | - | ❌ |

---

## Success Criteria Checklist

- [ ] All marketing pages have unique titles
- [ ] All marketing pages have unique descriptions
- [ ] All pages have canonical URLs
- [ ] All pages have Open Graph tags
- [ ] sitemap.xml generated and accessible
- [ ] robots.txt created and configured
- [ ] Protected routes excluded from sitemap
- [ ] Structured data on key pages
- [ ] Lighthouse SEO score >90
- [ ] Social sharing previews work

---

## Common Failure Points

### Issue 1: All pages show same title

**Cause:** Helmet not updating

**Fix:** Ensure HelmetProvider at app root:
```tsx
<HelmetProvider>
  <App />
</HelmetProvider>
```

### Issue 2: Social preview shows wrong image

**Cause:** Relative path instead of absolute

**Fix:** Use full URL:
```tsx
ogImage={`https://yoursite.com/og-pricing.png`}
```

### Issue 3: Sitemap not accessible

**Cause:** Not in `/public` folder

**Fix:** Move to `/public/sitemap.xml`

---

## Next Steps

1. Mark Task 07 complete
2. Submit sitemap to Google Search Console
3. Monitor SEO performance

---

**This task makes the site discoverable by search engines. Submit sitemap to search consoles after deployment.**

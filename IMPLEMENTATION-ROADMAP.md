# Voila Cleaners — SEO Implementation Roadmap
> Commercial-first strategy | April 2026

---

## Phase 1: Technical Foundation (Weeks 1–4)

**Goal:** Make the site crawlable, indexable, and structured correctly before any content investment.

### Week 1: Critical Technical Fixes

#### 1. Fix Server-Side Rendering (URGENT)
The site has `"use client"` at the page level, which prevents metadata exports and SSR. This is the single biggest SEO blocker.

**Fix pattern for each page:**
```tsx
// BEFORE: src/app/page.tsx (bad)
"use client"
export default function Home() { ... }

// AFTER: src/app/page.tsx (good — Server Component)
import type { Metadata } from "next"
import HomePageClient from "@/components/home-page" // client logic stays here

export const metadata: Metadata = {
  title: "...",
  description: "...",
}

export default function Home() {
  return <HomePageClient />
}
```

**Pages to fix:**
- [ ] `src/app/page.tsx`
- [ ] `src/app/services/page.tsx`
- [ ] `src/app/services/commercial-cleaning/page.tsx`
- [ ] `src/app/services/serviced-apartments/page.tsx`
- [ ] `src/app/services/retail-cleaning/page.tsx`
- [ ] `src/app/services/after-builders/page.tsx`
- [ ] `src/app/services/end-of-tenancy/page.tsx`
- [ ] `src/app/services/luxury-housekeeping/page.tsx`
- [ ] `src/app/services/deep-cleaning/page.tsx`
- [ ] `src/app/services/residential-cleaning/page.tsx`
- [ ] `src/app/about/page.tsx`
- [ ] `src/app/contact/page.tsx`

#### 2. Add Page Metadata to All Existing Pages
```tsx
// src/app/services/commercial-cleaning/page.tsx
export const metadata: Metadata = {
  title: "Office Cleaning London | Commercial Cleaning Services | Voila Cleaners",
  description: "Professional office and commercial cleaning in London. Vetted, insured staff. Contract and one-off cleans. After-hours scheduling. Free quote within 24 hours.",
  openGraph: {
    title: "Office Cleaning London | Voila Cleaners",
    description: "Professional commercial cleaning services across London.",
    url: "https://voila-cleaners.co.uk/services/commercial-cleaning",
    images: [{ url: "/og/commercial-cleaning.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://voila-cleaners.co.uk/services/commercial-cleaning",
  },
};
```

#### 3. Create sitemap.ts
```tsx
// src/app/sitemap.ts
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://voila-cleaners.co.uk"
  const pages = [
    { url: base, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/services/commercial-cleaning`, priority: 0.9 },
    { url: `${base}/services/serviced-apartments`, priority: 0.9 },
    { url: `${base}/services/retail-cleaning`, priority: 0.8 },
    { url: `${base}/services/after-builders`, priority: 0.8 },
    { url: `${base}/services/end-of-tenancy`, priority: 0.8 },
    { url: `${base}/services/luxury-housekeeping`, priority: 0.7 },
    { url: `${base}/services/deep-cleaning`, priority: 0.7 },
    { url: `${base}/services/residential-cleaning`, priority: 0.7 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
  ]
  return pages.map(p => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p.priority,
  }))
}
```

#### 4. Create robots.ts
```tsx
// src/app/robots.ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://voila-cleaners.co.uk/sitemap.xml",
  }
}
```

#### 5. Add LocalBusiness Schema to Layout
```tsx
// src/app/layout.tsx — add to <head>
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Voila Cleaners",
  "description": "Premium cleaning services in London",
  "url": "https://voila-cleaners.co.uk",
  "telephone": "+442071129177",
  "email": "info@voila-cleaners.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "66 Paul Street",
    "addressLocality": "London",
    "postalCode": "EC2A 4NA",
    "addressCountry": "GB"
  },
  "areaServed": { "@type": "City", "name": "London" },
  "priceRange": "££-£££",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "07:00",
    "closes": "20:00"
  }
}
```

#### 6. Fix lang attribute
```tsx
// src/app/layout.tsx
<html lang="en-GB" suppressHydrationWarning> // was lang="en"
```

---

### Week 2: Google Business Profile & Search Console

- [ ] Claim Google Business Profile at business.google.com
- [ ] Set business name: "Voila Cleaners"
- [ ] Set category: "Cleaning Service" (primary) + "Commercial Cleaning Service"
- [ ] Add all 8 services to GBP
- [ ] Upload 10 photos minimum (team, process, results)
- [ ] Add service areas (all London)
- [ ] Register Google Search Console: search.google.com/search-console
- [ ] Add voila-cleaners.co.uk property
- [ ] Verify via DNS or HTML tag
- [ ] Submit sitemap: /sitemap.xml
- [ ] Register Bing Webmaster Tools
- [ ] Set up GA4 with conversion events

---

### Week 3: New Pages — Priority

#### Create /pricing page
- Fixed pricing grid for commercial services
- Office size × frequency matrix
- FAQ about pricing
- Captures "office cleaning cost London" and "commercial cleaning prices" queries

#### Create /privacy and /terms pages
- Required for Google's trust signals
- Already linked in footer — currently 404

---

### Week 4: Schema Markup on Commercial Pages

Add Service schema to `/services/commercial-cleaning`:
```tsx
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Office Cleaning London",
  "serviceType": "Commercial Cleaning",
  "description": "Professional office and commercial cleaning services across London",
  "provider": { "@type": "LocalBusiness", "name": "Voila Cleaners" },
  "areaServed": { "@type": "City", "name": "London" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Cleaning Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contract Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Office Clean" } },
    ]
  }
}
```

Add FAQPage schema to commercial page FAQ:
```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does office cleaning cost in London?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office cleaning in London typically ranges from £15–£25 per hour depending on office size, frequency, and service specification."
      }
    },
    // ... more FAQs
  ]
}
```

---

## Phase 2: Content Expansion (Weeks 5–12)

**Goal:** Build topical authority around commercial cleaning via area pages and blog.

### Week 5–6: Area Page Development

Create area hub: `src/app/office-cleaning/[area]/page.tsx`

**Launch first 3 area pages:**
- `/office-cleaning/city-of-london` — EC1, EC2, EC3, EC4 postcodes
- `/office-cleaning/canary-wharf` — E14
- `/office-cleaning/mayfair` — W1

Each page: 500+ words, local context, LocalBusiness schema, CTA.

### Week 7–8: Blog Launch

Create: `src/app/blog/page.tsx` (index) + `src/app/blog/[slug]/page.tsx`

**Publish first 2 posts:**
1. "How Much Does Office Cleaning Cost in London? (2026)"
2. "Office Cleaning Frequency Guide: How Often Should You Clean?"

Implement Article schema on all blog posts.

### Week 9–10: Expand Commercial Service Pages

Expand `/services/commercial-cleaning` to 1,200+ words:
- Add 8+ bullet checklist
- Add "Industries We Serve" section
- Add "Areas We Cover" section (link to area pages)
- Add 4-question FAQ (FAQPage schema)
- Add testimonials from office clients specifically

Expand `/services/serviced-apartments` similarly with Airbnb-specific content.

### Week 11–12: Citation Building & GBP

- [ ] Submit to Yell.com (free listing)
- [ ] Submit to Thomson Local
- [ ] Submit to Yelp UK
- [ ] Create Trustpilot profile, start requesting reviews
- [ ] Submit to Checkatrade
- [ ] Submit to Bark.com
- [ ] Apply to Which? Trusted Traders
- [ ] List on FreeIndex
- [ ] Add to HiPages (if available UK)
- [ ] Start requesting Google reviews from existing clients (target: 20 reviews in 3 months)

---

## Phase 3: Authority Building (Weeks 13–24)

**Goal:** Build domain authority through content, links, and GEO signals.

### Content
- [ ] Publish 2 blog posts per month (commercial focus)
- [ ] Complete all 10 area pages
- [ ] Launch /airbnb-cleaning-london dedicated page
- [ ] Create /case-studies section with 2 anonymised studies
- [ ] Create /about expansion (team, certifications, history)

### Link Building
- [ ] Reach out to 3 property management associations for listings
- [ ] Guest post on London property/business blogs (2 posts)
- [ ] Write Airbnb host community contribution
- [ ] Issue 1 press release to local London business press
- [ ] Approach cleaning product suppliers for co-marketing

### Technical
- [ ] Run Core Web Vitals audit — fix any LCP/CLS issues
- [ ] Implement OG images for all main pages (next/og or static)
- [ ] Review and optimise all image alt text
- [ ] Implement AggregateRating schema once 10+ Google reviews collected
- [ ] Add llms.txt for AI search visibility

### GBP
- [ ] Post weekly GBP updates
- [ ] Respond to all reviews within 24 hours
- [ ] Add products/services menu to GBP
- [ ] Run first GBP offer/promotion

---

## Phase 4: Scale & Optimise (Months 7–12)

**Goal:** Convert traction into sustained organic revenue.

- [ ] Monthly performance review (Search Console, GA4, GBP Insights)
- [ ] Identify and double-down on top-performing content
- [ ] A/B test contact form CTAs and commercial-focused copy
- [ ] Expand blog to 24+ posts
- [ ] Create link-bait data piece ("London Office Cleaning Report 2026")
- [ ] Publish 2 in-depth case studies
- [ ] Launch email capture with lead magnet (Office Cleaning Checklist PDF)
- [ ] Explore Google Ads for "office cleaning London" to supplement organic
- [ ] Review area page performance — expand to 15+ areas

---

## Milestone Tracking

| Milestone | Target Date | Status |
|-----------|------------|--------|
| All pages have SSR + metadata | Week 1 | ⬜ |
| sitemap.xml + robots.txt live | Week 1 | ⬜ |
| GBP claimed and optimised | Week 2 | ⬜ |
| Google Search Console live | Week 2 | ⬜ |
| /pricing page live | Week 3 | ⬜ |
| LocalBusiness schema on site | Week 4 | ⬜ |
| First 3 area pages live | Week 6 | ⬜ |
| Blog launched with 2 posts | Week 8 | ⬜ |
| 10+ Google reviews | Month 2 | ⬜ |
| 20+ Google reviews | Month 3 | ⬜ |
| 10 area pages live | Month 3 | ⬜ |
| 10+ blog posts live | Month 4 | ⬜ |
| 30+ referring domains | Month 6 | ⬜ |
| First page ranking: area terms | Month 4 | ⬜ |
| First page ranking: niche commercial | Month 5 | ⬜ |
| 2,000+ monthly organic sessions | Month 6 | ⬜ |

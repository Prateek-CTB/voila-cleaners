# Voila Cleaners — SEO Strategy
> **Primary focus: Commercial & Office Cleaning | Secondary: Residential**
> Business: Voila Cleaners, 66 Paul Street, London EC2A 4NA
> Date: April 2026

---

## 1. Business Context

**Business type:** Premium B2B/B2C cleaning service, London
**Primary targets:** Office managers, facility managers, property managers, Airbnb hosts, retail operators, developers
**Secondary targets:** Landlords (end of tenancy), luxury homeowners
**USP:** Premium, discreet, structured — not budget cleaning

**Current site:** Next.js 16, TypeScript, Tailwind CSS v4
**Domain:** voila-cleaners.co.uk
**Existing pages:** Home, /services, 8 service pages, /about, /contact

---

## 2. SEO Goals (12 months)

| KPI | Baseline (Est.) | 3 Month | 6 Month | 12 Month |
|-----|----------------|---------|---------|----------|
| Organic Traffic | ~0–200/mo | 500/mo | 2,000/mo | 8,000/mo |
| Commercial keyword rankings (top 10) | 0 | 5 | 20 | 60+ |
| Domain Rating | ~1–5 | 10 | 20 | 35 |
| Indexed Pages | 12 | 30 | 60 | 100+ |
| Google Business Profile views | baseline | +50% | +150% | +300% |
| B2B enquiries from organic | 0 | 5/mo | 20/mo | 60/mo |

---

## 3. Keyword Strategy

### Tier 1: Primary Commercial Keywords (high commercial intent)

| Keyword | Monthly Volume (Est.) | Difficulty | Priority |
|---------|----------------------|------------|----------|
| office cleaning London | 2,400 | High | P1 |
| commercial cleaning London | 1,600 | High | P1 |
| office cleaning services London | 1,200 | High | P1 |
| contract cleaning London | 800 | Medium | P1 |
| commercial cleaning company London | 600 | Medium | P1 |
| serviced apartment cleaning London | 400 | Low | P1 |
| Airbnb cleaning service London | 800 | Low-Medium | P1 |
| short let cleaning London | 300 | Low | P1 |
| retail cleaning services London | 300 | Low | P2 |
| after builders cleaning London | 600 | Low | P2 |
| post construction cleaning London | 400 | Low | P2 |

### Tier 2: Area + Service Keywords (local SEO)

| Pattern | Priority |
|---------|----------|
| office cleaning [area] London | P1 |
| commercial cleaning [area] | P2 |
| cleaning company [area] London | P2 |

**Target London areas** (prioritised by commercial density):
- City of London (EC1, EC2, EC3, EC4)
- Canary Wharf (E14)
- Mayfair (W1)
- Soho / Fitzrovia (W1)
- Victoria (SW1)
- Shoreditch / Hoxton (EC2, N1)
- Clerkenwell (EC1)
- Paddington / Marylebone (W2)
- Westminster (SW1)
- South Bank / Waterloo (SE1)

### Tier 3: Informational / Long-tail

| Keyword | Intent | Page Type |
|---------|--------|-----------|
| how often should offices be cleaned | Informational | Blog |
| office cleaning checklist London | Informational | Blog/Resource |
| how to choose a commercial cleaning company | Informational | Blog |
| difference between deep clean and regular clean | Informational | Blog |
| end of tenancy cleaning deposit back London | Commercial | Service page |
| Airbnb cleaning between guests | Informational | Blog |
| best cleaning products for offices | Informational | Blog |
| commercial cleaning vs residential cleaning | Informational | Blog |

---

## 4. On-Page SEO Requirements

### Critical Issues to Fix Now (pre-launch)

1. **"use client" on all pages** — Prevents server-side rendering. Move client logic to child components; keep page.tsx as a Server Component to enable metadata exports and SSR.
2. **No page-level metadata** — Every page needs unique `export const metadata: Metadata = {}`.
3. **No schema markup** — Need `LocalBusiness`, `Service`, `FAQPage`, `Review`, `BreadcrumbList` schemas.
4. **No sitemap.xml** — Create `/app/sitemap.ts` in Next.js App Router.
5. **No robots.txt** — Create `/app/robots.ts`.
6. **No OpenGraph / Twitter Card tags** — Add to all pages.

### Metadata Template (per page)
```tsx
export const metadata: Metadata = {
  title: "[Service] in London | Voila Cleaners",
  description: "[150–160 char description with primary keyword]",
  openGraph: {
    title: "[Service] in London | Voila Cleaners",
    description: "...",
    url: "https://voila-cleaners.co.uk/services/[service]",
    siteName: "Voila Cleaners",
    images: [{ url: "/og/[service].jpg", width: 1200, height: 630 }],
    type: "website",
  },
  alternates: { canonical: "https://voila-cleaners.co.uk/services/[service]" },
};
```

### Heading Structure (H1 → H2 → H3)
- **H1**: One per page, contains primary keyword + location
- **H2**: Section headings (service features, why us, how it works)
- **H3**: Sub-items within sections

### Content Quality Requirements
- Minimum 800 words per service page
- Include primary keyword in: H1, first 100 words, one H2, meta description, URL slug, image alt text
- Include secondary keywords naturally in body copy
- Include local area references (City of London, Canary Wharf, Mayfair, etc.)
- Include trust signals: years operating, client count, certifications, guarantee

---

## 5. Local SEO Strategy

### Google Business Profile (Priority: URGENT)
- [ ] Claim/verify GBP listing for Voila Cleaners
- [ ] Set primary category: "Cleaning Service" or "Commercial Cleaning Service"
- [ ] Add all services as GBP services
- [ ] Upload 10+ photos (team, equipment, before/after)
- [ ] Collect 20+ Google reviews in first 3 months
- [ ] Post weekly GBP updates (offers, tips, news)
- [ ] Add business hours, service areas, service descriptions

### NAP Consistency
Ensure **Name, Address, Phone** is identical everywhere:
- **Name:** Voila Cleaners
- **Address:** 66 Paul Street, London, EC2A 4NA
- **Phone:** 020 7112 9177
- **Email:** info@voila-cleaners.co.uk

Submit to: Google, Bing Places, Yelp, Yell.com, Checkatrade, Bark.com, TrustATrader, Thomson Local

### Local Landing Pages (Area Pages)
Create dedicated pages for top commercial areas:
- `/office-cleaning/city-of-london`
- `/office-cleaning/canary-wharf`
- `/office-cleaning/mayfair`
- `/office-cleaning/shoreditch`
- `/office-cleaning/victoria`
- `/office-cleaning/soho`

---

## 6. Schema Markup Plan

| Page | Schema Types |
|------|-------------|
| Homepage | `Organization`, `LocalBusiness`, `WebSite` (with SearchAction) |
| All service pages | `Service`, `LocalBusiness`, `BreadcrumbList` |
| FAQ section | `FAQPage` |
| About page | `Organization`, `AboutPage` |
| Contact page | `ContactPage`, `LocalBusiness` |
| Blog posts | `Article`, `BlogPosting`, `BreadcrumbList` |
| Area pages | `LocalBusiness`, `Service`, `BreadcrumbList` |
| Reviews section | `AggregateRating` |

### Example: Commercial Cleaning Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Office Cleaning London",
  "description": "Professional office and commercial cleaning services across London",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Voila Cleaners",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "66 Paul Street",
      "addressLocality": "London",
      "postalCode": "EC2A 4NA",
      "addressCountry": "GB"
    },
    "telephone": "+442071129177",
    "url": "https://voila-cleaners.co.uk"
  },
  "areaServed": { "@type": "City", "name": "London" }
}
```

---

## 7. Content Strategy

### Pillar Pages (Commercial focus)
1. **Office Cleaning London** — master hub page (`/services/commercial-cleaning`)
2. **Serviced Apartment & Airbnb Cleaning** (`/services/serviced-apartments`)
3. **Retail & Showroom Cleaning** (`/services/retail-cleaning`)
4. **After-Builders & Post-Construction Cleaning** (`/services/after-builders`)

### Supporting Content Clusters

**Cluster 1: Office Cleaning**
- How often should an office be cleaned? (blog)
- Office cleaning checklist (downloadable resource)
- How to choose a commercial cleaner in London (blog)
- Signs your office needs a deep clean (blog)
- Office cleaning costs London 2026 (blog)
- Area pages: office cleaning in City of London, Canary Wharf, Mayfair, etc.

**Cluster 2: Serviced Apartments / Airbnb**
- How to get 5-star Airbnb reviews: cleaning guide (blog)
- Short let turnover cleaning checklist (blog)
- Best cleaning service for Airbnb hosts London (blog)
- Serviced apartment cleaning standards guide (blog)

**Cluster 3: After-Builders**
- What does a post-construction clean include? (blog)
- After-builders cleaning checklist (blog)
- How long does a builders clean take? (blog)

**Cluster 4: Commercial Trust Content**
- About Voila (DBS checks, insurance, certifications)
- Case studies (anonymised: property manager, Airbnb host, office manager)
- Pricing guide (transparent pricing earns trust & captures price-intent searches)

---

## 8. E-E-A-T Signals

**Experience**
- Publish before/after case studies with real metrics (time saved, client retention)
- Named client testimonials with location and company type
- Staff profiles with experience and training

**Expertise**
- Author bios on blog posts (cleaning industry experience)
- Certifications page (DBS, insurance, BICSc, CHAS if applicable)
- Detailed service descriptions with technical knowledge

**Authoritativeness**
- Local press coverage (Time Out London, local business press)
- Industry association memberships (British Cleaning Council)
- Featured in property management publications

**Trustworthiness**
- Verified Google reviews (20+ target in 3 months)
- Transparent pricing page
- Privacy Policy and Terms pages (currently missing)
- Secure HTTPS (verify SSL)
- Company registration number in footer

---

## 9. Link Building Strategy

### Priority Tactics
1. **Local business directories** — Yell, Yelp UK, Bark, Checkatrade, TrustATrader (free, quick wins)
2. **Property management associations** — ARLA, NRLA, UKALA (guest posts or listings)
3. **London business community** — London Chamber of Commerce, EC2/Shoreditch business groups
4. **Airbnb host forums and communities** — guides, Q&A contributions
5. **Local press** — East London, City of London news sites
6. **Content-led links** — data posts ("how much does office cleaning cost in London")
7. **Supplier partnerships** — cleaning product brands, eco suppliers
8. **Testimonial-based links** — featured suppliers on client websites

### Target DA
- Year 1: 30+ referring domains
- Focus on local/relevant over high DA + irrelevant

---

## 10. Technical SEO Checklist

- [ ] Convert page.tsx files to Server Components (remove "use client" from page level)
- [ ] Add page-specific `metadata` exports to all pages
- [ ] Create `src/app/sitemap.ts` (dynamic, auto-generates)
- [ ] Create `src/app/robots.ts`
- [ ] Add canonical URLs to all pages
- [ ] Implement JSON-LD schema on all pages
- [ ] Add OpenGraph images (1200×630) for all main pages
- [ ] Verify Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- [ ] Compress and serve local images (not Unsplash for hero/OG)
- [ ] Add `lang="en-GB"` (currently `lang="en"`)
- [ ] Register with Google Search Console
- [ ] Register with Bing Webmaster Tools
- [ ] Submit sitemap to both
- [ ] Set up GA4 with conversion tracking (form submits, phone clicks)
- [ ] Verify 404 handling
- [ ] Implement breadcrumbs on all interior pages (already in JSX — add schema)

---

## 11. GEO (AI Search) Optimisation

AI assistants (ChatGPT, Perplexity, Gemini, Google AI Overviews) are increasingly used for "best X in Y" queries.

- Write FAQ sections in question-answer format (direct AI citation targets)
- Include specific, citable facts: "500+ London clients", "48-hour re-clean guarantee", "DBS-checked staff"
- Create an `llms.txt` file at domain root describing the business
- Use clear entity markup in schema (name, address, phone, service area)
- Target "best office cleaning London" and "top commercial cleaning London" in content
- Get listed on AI-friendly directories (Trustpilot, Which? Trusted Traders)

---

## 12. Priority Action Items

### Immediate (Week 1–2)
1. Fix "use client" on all page.tsx files → enables SSR and metadata
2. Add page metadata to all 11 existing pages
3. Create sitemap.ts and robots.ts
4. Add LocalBusiness + Service schema to homepage and commercial page
5. Claim and optimise Google Business Profile
6. Register Google Search Console and submit sitemap

### Short-term (Month 1)
7. Create Privacy Policy and Terms pages
8. Launch Pricing page
9. Create 3 London area pages for office cleaning (City, Canary Wharf, Mayfair)
10. Add AggregateRating schema with real review data
11. Write 2 blog posts targeting commercial cleaning informational queries
12. Build 10+ directory citations

### Medium-term (Months 2–3)
13. Create full blog section with 8+ posts
14. Build out all 6 commercial area landing pages
15. Develop case studies section
16. Launch link building outreach to property directories
17. A/B test contact form CTA copy for commercial clients

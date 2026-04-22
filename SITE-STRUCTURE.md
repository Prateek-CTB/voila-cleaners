# Voila Cleaners — Site Structure & URL Architecture
> Commercial-first architecture | April 2026

---

## URL Hierarchy

```
voila-cleaners.co.uk/
│
├── / (Homepage)
│
├── /services/                         ← Service hub
│   ├── /services/commercial-cleaning  ← PRIMARY PILLAR ★
│   ├── /services/serviced-apartments  ← PRIMARY PILLAR ★
│   ├── /services/retail-cleaning      ← PRIMARY PILLAR ★
│   ├── /services/after-builders       ← PRIMARY PILLAR ★
│   ├── /services/end-of-tenancy       ← Secondary (high intent)
│   ├── /services/luxury-housekeeping  ← Secondary
│   ├── /services/deep-cleaning        ← Secondary
│   └── /services/residential-cleaning ← Secondary
│
├── /office-cleaning/                  ← Area hub for office cleaning ★ NEW
│   ├── /office-cleaning/city-of-london         ★ NEW
│   ├── /office-cleaning/canary-wharf           ★ NEW
│   ├── /office-cleaning/mayfair                ★ NEW
│   ├── /office-cleaning/shoreditch             ★ NEW
│   ├── /office-cleaning/victoria               ★ NEW
│   ├── /office-cleaning/soho                   ★ NEW
│   ├── /office-cleaning/clerkenwell            ★ NEW
│   ├── /office-cleaning/paddington             ★ NEW
│   ├── /office-cleaning/waterloo               ★ NEW
│   └── /office-cleaning/westminster            ★ NEW
│
├── /airbnb-cleaning-london/           ★ NEW (high value niche)
│
├── /blog/                             ★ NEW
│   ├── /blog/office-cleaning-cost-london-2026
│   ├── /blog/how-often-should-offices-be-cleaned
│   ├── /blog/commercial-cleaning-checklist
│   ├── /blog/airbnb-cleaning-guide-london
│   ├── /blog/after-builders-cleaning-what-to-expect
│   └── /blog/... (ongoing)
│
├── /about/
├── /contact/
├── /pricing/                          ★ NEW
├── /case-studies/                     ★ NEW
├── /privacy/                          ★ NEW (needed, linked in footer)
├── /terms/                            ★ NEW (needed, linked in footer)
│
├── /sitemap.xml                       (auto-generated via sitemap.ts)
└── /robots.txt                        (auto-generated via robots.ts)
```

---

## Page Priority Matrix

| Priority | Page | Purpose |
|----------|------|---------|
| P0 (fix now) | / | Primary entry point — fix SSR |
| P0 (fix now) | /services/commercial-cleaning | Primary commercial pillar |
| P0 (fix now) | /services/serviced-apartments | High-value niche |
| P1 (Month 1) | /office-cleaning/ | Area hub |
| P1 (Month 1) | /office-cleaning/city-of-london | Top commercial area |
| P1 (Month 1) | /office-cleaning/canary-wharf | Top commercial area |
| P1 (Month 1) | /office-cleaning/mayfair | Top commercial area |
| P1 (Month 1) | /pricing/ | Captures price-intent searches + trust |
| P1 (Month 1) | /blog/ | Content/traffic engine |
| P2 (Month 2) | /airbnb-cleaning-london/ | Niche, low competition |
| P2 (Month 2) | /office-cleaning/shoreditch | Area page |
| P2 (Month 2) | /office-cleaning/soho | Area page |
| P2 (Month 2) | /case-studies/ | E-E-A-T + B2B conversion |
| P3 (Month 3) | Remaining area pages | Area page expansion |

---

## Commercial Service Page Template

Each commercial service page must follow this structure:

```
[Service] in London | Voila Cleaners

├── H1: [Service] in London
│
├── Hero section
│   ├── Primary keyword in first paragraph
│   ├── Trust signals (years, clients, guarantee)
│   └── CTA: Request a Quote
│
├── H2: What's Included
│   └── Bullet checklist (at least 6 items)
│
├── H2: Why London Businesses Choose Voila
│   └── 3-card grid (USPs)
│
├── H2: Areas We Cover (link to area pages)
│
├── H2: Industries We Serve
│   └── (co-working, retail, hospitality, property, etc.)
│
├── H2: How It Works
│   └── 4-step process
│
├── H2: Client Reviews
│   └── 5+ relevant testimonials
│
├── H2: Frequently Asked Questions
│   └── 4–5 FAQs (enables FAQPage schema)
│
└── H2: Get a Free Quote
    └── Form or CTA to /contact
```

---

## Area Page Template (Office Cleaning [Area])

```
Office Cleaning [Area] | Voila Cleaners

├── H1: Office Cleaning in [Area], London
│
├── Intro: Location-specific content (mention local landmarks, business types)
│
├── H2: Our [Area] Commercial Cleaning Services
│   ├── Link to /services/commercial-cleaning
│   └── Service list relevant to area (co-working, retail, executive offices)
│
├── H2: Why [Area] Businesses Choose Voila
│
├── H2: [Area] Office Cleaning Coverage
│   └── Postcodes served
│
├── H2: Client Testimonials from [Area]
│   └── Area-specific testimonials from home-page data
│
├── H2: Get a Quote for [Area]
│   └── CTA + phone number
│
└── LocalBusiness + Service schema
```

---

## Internal Linking Strategy

### Hub & Spoke Model
- `/services/commercial-cleaning` links to ALL area pages
- All area pages link back to `/services/commercial-cleaning`
- Homepage links to `/services/commercial-cleaning` prominently
- Blog posts link to relevant service and area pages

### Priority Links to Add
| From | To | Anchor Text |
|------|----|------------|
| Homepage | /services/commercial-cleaning | "Office & Commercial Cleaning" |
| Homepage | /office-cleaning/city-of-london | "Cleaning in the City" |
| /services/commercial-cleaning | /office-cleaning/[all areas] | Area name |
| Blog posts | /services/commercial-cleaning | "commercial cleaning London" |
| /services/serviced-apartments | /airbnb-cleaning-london | "Airbnb cleaning service" |
| Footer | /pricing | "Pricing" |
| Footer | /blog | "Resources" |

---

## Metadata Templates

### Homepage
```tsx
title: "Premium Cleaning Services London | Office & Commercial Cleaning | Voila Cleaners"
description: "Premium office cleaning, commercial cleaning, and serviced apartment cleaning across London. Trusted by 500+ businesses. DBS-checked, insured, 5-star standards. Get a free quote."
```

### Commercial Cleaning
```tsx
title: "Office Cleaning London | Commercial Cleaning Services | Voila Cleaners"
description: "Professional office and commercial cleaning services in London. Trained, vetted staff. After-hours scheduling. Trusted by offices, co-working spaces & retail. Free quote."
```

### Serviced Apartments
```tsx
title: "Serviced Apartment Cleaning London | Airbnb & Short Let Cleaning | Voila Cleaners"
description: "Fast, reliable serviced apartment and Airbnb cleaning in London. Guest-ready guaranteed. Same-day turnovers. Trusted by property managers and hosts. Get a free quote."
```

### Area Page (example: City of London)
```tsx
title: "Office Cleaning City of London | Commercial Cleaning EC1 EC2 EC3 | Voila Cleaners"
description: "Professional office cleaning in the City of London. Covering EC1, EC2, EC3, EC4. After-hours, contract, and one-off cleans. Background-checked staff. Free quote."
```

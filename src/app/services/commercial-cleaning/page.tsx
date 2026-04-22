import React from "react"
import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { StatsBar } from "@/components/ui/stats-bar"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import { ScrollMorphHeroSection } from "@/components/ui/scroll-morph-hero-section"
import Link from "next/link"
import { Shield, EyeOff, Users, PoundSterling } from "lucide-react"

export const metadata: Metadata = {
    title: "Office Cleaning London | Commercial Cleaning Services | Voila Cleaners",
    description: "Professional office and commercial cleaning in London. Vetted, insured staff. After-hours scheduling. COSHH-compliant. Trusted by 70+ offices. £17/hr commercial rates.",
    openGraph: {
        title: "Office Cleaning London | Voila Cleaners",
        description: "Professional commercial cleaning services across London. Trained, vetted staff. Contract and one-off cleans. After-hours scheduling.",
        url: "https://voila-cleaners.co.uk/services/commercial-cleaning",
    },
    alternates: { canonical: "https://voila-cleaners.co.uk/services/commercial-cleaning" },
}

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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Cleaning" }, "priceCurrency": "GBP", "price": "17.00", "unitText": "HOUR" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Office Clean" }, "priceCurrency": "GBP", "price": "25.00", "unitText": "HOUR" },
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does office cleaning cost in London?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our commercial and office cleaning rates start from £17.00 per hour. We offer transparent pricing with dedicated B2B account management."
      }
    },
    {
      "@type": "Question",
      "name": "Are your cleaners DBS checked and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Voila Cleaners staff are fully vetted, DBS-checked, and comprehensively insured to operate in commercial environments."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide out-of-hours office cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We provide early morning, late evening, and weekend cleaning to ensure zero disruption to your business operations."
      }
    }
  ]
}

export default function CommercialCleaningPage() {
    return (
        <main className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            <Navbar />

            <PageHero
                badge="Commercial Cleaning"
                title="Professional Office &"
                titleAccent="Commercial Cleaning."
                subtitle="Your workspace is a reflection of your brand. We maintain offices, co-working spaces, and commercial environments to the highest hygienic and visual standards — reliably, discreetly, and around your schedule."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
                ]}
                image="/commercial-cleaning.png"
                imageAlt="Immaculate commercial office space in London"
                cta={{ label: "Request Commercial Quote", href: "/contact" }}
            />

            {/* Tailored Approach */}
            <SplitFeature
                label="Tailored for Business"
                title="Cleaning That Matches Your Brand Standards."
                description="Whether it's a boutique agency in Soho, a law firm in the City, or a tech startup in Shoreditch — we design cleaning schedules and processes that fit your workspace, not the other way around. Every business has unique operational hours, security protocols, and hygienic requirements. We adapt to yours entirely."
                bullets={[
                    "Daily, weekly, or custom schedules to suit your footfall",
                    "After-hours cleaning (evenings or early mornings) to avoid disruption",
                    "Dedicated account manager for swift, single-point communication",
                    "Stringent COSHH-compliant procedures and risk assessments",
                    "Premium, eco-friendly commercial-grade products",
                    "Strict security and key-holding protocols"
                ]}
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80&fit=crop"
                imageAlt="Executive meeting room"
                stat={{ value: "£17", label: "Competitive Hourly Rate" }}
                reverse
            />

            {/* SEO Text Expansion - 1000+ words equivalent section */}
            <section className="py-24 bg-secondary border-y border-border">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold tracking-tight mb-8">The Premier Office Cleaning Company in London</h2>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            Maintaining a pristine office environment in London is not merely about aesthetics; it is a fundamental pillar of employee productivity, health, and corporate brand reputation. As a leading commercial cleaning company in London, Voila Cleaners provides unparalleled office cleaning services tailored to the dynamic needs of modern businesses. We understand that a clean workspace is a productive workspace.
                        </p>
                        <p>
                            From daily vacuuming and dusting to intensive deep cleans of high-traffic zones such as washrooms, kitchens, and reception areas, our comprehensive service ensures every square inch of your commercial property reflects professionalism. We utilize advanced cleaning methodologies, commercial-grade equipment, and eco-friendly products that effectively eradicate bacteria and viruses without leaving harmful chemical residues.
                        </p>
                        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Our Commercial Cleaning Process</h3>
                        <p>
                            Our approach to commercial cleaning in London is highly structured. We begin with a detailed site audit to understand your specific requirements, identifying high-touch points, sensitive IT equipment areas, and specialized flooring that requires specific care. Based on this audit, we craft a bespoke cleaning manifesto.
                        </p>
                        <p>
                            This manifesto dictates the exact responsibilities of our DBS-checked cleaning operatives during every visit. Quality assurance is maintained through regular audits conducted by your dedicated account manager, ensuring our high standards never slip. We also implement robust key-holding and alarm-setting protocols, allowing our teams to operate outside of your business hours with absolute security.
                        </p>
                        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Industries We Serve</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Corporate Offices & Law Firms:</strong> Precision cleaning with strict confidentiality and discretion.</li>
                            <li><strong>Creative Agencies & Tech Startups:</strong> Flexible cleaning schedules accommodating non-traditional working hours and open-plan layouts.</li>
                            <li><strong>Co-Working Spaces:</strong> High-frequency sanitization for shared desks, meeting pods, and communal breakout areas.</li>
                            <li><strong>Retail Boutiques:</strong> Immaculate floor care, window shining, and fitting room maintenance to uphold luxury brand standards.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <BentoGrid
                heading="Why Businesses Choose Voila"
                items={[
                    { title: "Health & Safety Compliant", description: "We adhere to UK cleaning industry standards — COSHH compliant, risk-assessed, and health & safety trained.", bg: "bg-secondary", icon: <Shield className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Zero Disruption", description: "Cleaning happens around your schedule — evenings, early mornings, weekends. Your team never notices.", bg: "bg-secondary", icon: <EyeOff className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Consistent Teams", description: "Same professionals, every visit. They know your space, your preferences, and your standards.", bg: "bg-secondary", icon: <Users className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Transparent Pricing", description: "At £17/hour, there are no hidden costs. No surprise invoices. Straightforward, competitive commercial rates.", bg: "bg-secondary", icon: <PoundSterling className="size-5" strokeWidth={1.5} />, span: 1 },
                ]}
            />

            {/* Stats */}
            <StatsBar
                heading="Commercial Impact"
                stats={[
                    { value: "70+", label: "Offices cleaned" },
                    { value: "99%", label: "On-time arrival" },
                    { value: "0", label: "Security incidents" },
                    { value: "5.0★", label: "Client rating" },
                ]}
            />

            {/* Visual Portfolio Showcase */}
            <section className="relative w-full border-t border-border" aria-label="Office cleaning portfolio showcase">
                {/* Marquee trust bar */}
                <div className="w-full bg-[#0A0A0A] overflow-hidden border-b border-neutral-800">
                    <div className="flex py-2.5" style={{ "--duration": "28s" } as React.CSSProperties}>
                        {/* Two copies for seamless loop */}
                        {[0, 1].map((copy) => (
                            <ul
                                key={copy}
                                aria-hidden={copy === 1}
                                className="flex shrink-0 items-center animate-marquee"
                                style={{ gap: "0px" }}
                            >
                                {[
                                    "✦ DBS Checked Staff",
                                    "✦ Fully Insured",
                                    "✦ COSHH Compliant",
                                    "✦ After-Hours Available",
                                    "✦ Dedicated Account Manager",
                                    "✦ Eco-Friendly Products",
                                    "✦ From £17/hr",
                                    "✦ Zero-Contract Options",
                                    "✦ Same Team Every Visit",
                                    "✦ 5★ Client Rating",
                                    "✦ City of London",
                                    "✦ Canary Wharf",
                                    "✦ Mayfair & West End",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center whitespace-nowrap px-6 text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-white/55"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="w-full h-[680px] bg-[#FAFAFA] border-b border-border overflow-hidden">
                    <ScrollMorphHeroSection />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-background border-t border-border">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group border border-border p-6 rounded-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between font-bold text-lg">
                                How much does office cleaning cost in London?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-muted-foreground mt-4 leading-relaxed">
                                Our standard commercial and office cleaning rates start from an incredibly competitive £17.00 per hour. We focus on transparent pricing without hidden management fees. A minimum booking duration of 2 hours applies per visit.
                            </p>
                        </details>
                        <details className="group border border-border p-6 rounded-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between font-bold text-lg">
                                Are your cleaners DBS checked and insured?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-muted-foreground mt-4 leading-relaxed">
                                Yes. Security is paramount for our commercial clients. Every operative is thoroughly vetted, DBS-checked, and carries comprehensive public liability insurance. 
                            </p>
                        </details>
                        <details className="group border border-border p-6 rounded-none cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between font-bold text-lg">
                                Do you provide cleaning supplies and equipment?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-muted-foreground mt-4 leading-relaxed">
                                Yes, our teams arrive fully equipped with premium, commercial-grade cleaning agents, color-coded microfiber cloths, and industrial HEPA-filter vacuums. We also manage consumable replenishments (toilet roll, hand soap) upon request.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials3D
                heading="Client Stories"
                subtitle="What businesses across London say about our commercial service."
                testimonials={[
                    { name: "Marcus Chen", username: "@marcusc", body: "Voila took over our office cleaning six months ago. The difference was immediate. At £17/hr it is incredible value.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Soho" },
                    { name: "Rebecca Lane", username: "@rebeccal", body: "Reliable, professional, and flexible. They adapted to our odd hours without any fuss.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Mayfair" },
                    { name: "Henry Blackwell", username: "@henryb", body: "Our co-working space needs daily cleans. Voila is punctual, professional, and invisible.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Soho" },
                ]}
            />

            {/* CTA */}
            <section className="py-24 bg-background border-t border-border">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                        Elevate Your Workspace
                    </h2>
                    <p className="text-[15px] text-muted-foreground mb-8 max-w-lg mx-auto">
                        Get a tailored commercial cleaning proposal today. No obligation, fast response.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-none bg-foreground text-background hover:bg-foreground/90 transition-colors">
                        Get Your Proposal
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/ui/page-hero"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Pricing & Rates | Commercial Cleaning London | Voila Cleaners",
    description: "Transparent, competitive pricing for commercial cleaning, serviced apartments, and deep cleans in London. Commercial rates from £17/hour. No hidden fees.",
    alternates: { canonical: "https://voila-cleaners.co.uk/pricing" },
}

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <PageHero
                badge="Transparent Pricing"
                title="Bespoke Quality at"
                titleAccent="Competitive Rates."
                subtitle="We don't hide our prices. Whether you manage a corporate office in the City or an Airbnb in Soho, our rates are straightforward, reliable, and designed for B2B partnerships."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Pricing", href: "/pricing" },
                ]}
                image="/commercial-cleaning.png"
                imageAlt="Immaculate commercial office space"
                cta={{ label: "Request Custom Quote", href: "/contact" }}
            />

            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Core Services</h2>
                        <p className="text-muted-foreground text-sm max-w-2xl">
                            All rates are exclusive of VAT. Minimum booking of 2 hours applies for hourly services. We provide dedicated account management for all commercial contracts.
                        </p>
                    </div>

                    <div className="border-t border-l border-border flex flex-col w-full mb-16">
                        <PricingRow service="Commercial & Office Cleaning" price="£17.00" unit="per hour" highlight />
                        <PricingRow service="Serviced Apartment Turnover" price="£17.50" unit="per hour" highlight />
                        <PricingRow service="Deep Clean" price="£25.00" unit="per hour" />
                        <PricingRow service="End of Tenancy" price="£25.00" unit="per hour" />
                        <PricingRow service="Luxury Housekeeping" price="£20.00" unit="per hour" />
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Additional Services</h2>
                        <p className="text-muted-foreground text-sm max-w-2xl">
                            Specialist services and lifestyle management assistance. Can be bundled with core cleaning contracts.
                        </p>
                    </div>

                    <div className="border-t border-l border-border flex flex-col w-full">
                        <PricingRow service="Ironing" price="£20.00" unit="per hour" />
                        <PricingRow service="Shopping" price="£20.00" unit="per hour" />
                        <PricingRow service="Packing" price="£20.00" unit="per hour" />
                        <PricingRow service="Silver Polish" price="£20.00" unit="per hour" />
                        <PricingRow service="Carpet Cleaning" price="Bespoke" unit="contact us" />
                        <PricingRow service="Window Cleaning" price="Bespoke" unit="contact us" />
                        <PricingRow service="Gardening" price="Bespoke" unit="contact us" />
                    </div>
                </div>
            </section>

            {/* B2B Value Proposition Section */}
            <section className="py-24 bg-secondary">
                <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Why B2B Clients Choose Us</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            When you partner with Voila Cleaners, you&apos;re not just paying an hourly rate. You are investing in absolute reliability, security, and brand reputation. 
                        </p>
                        <ul className="space-y-4">
                            {[
                                "DBS-checked, fully insured professionals",
                                "Dedicated account manager for rapid response",
                                "COSHH-compliant procedures & reporting",
                                "Flexible out-of-hours scheduling"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 bg-foreground rounded-none" />
                                    <span className="text-sm font-medium text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-background border border-border p-8 rounded-none">
                        <h3 className="font-bold text-lg mb-2">Need a tailored contract?</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            We offer volume discounts and customised SLAs for large offices, property management firms, and multi-site retailers.
                        </p>
                        <Link href="/contact" className="inline-flex w-full items-center justify-center px-6 py-3 bg-foreground text-background text-sm font-bold uppercase tracking-wider rounded-none hover:bg-foreground/90 transition-colors">
                            Request Corporate Proposal
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function PricingRow({ service, price, unit, highlight = false }: { service: string, price: string, unit: string, highlight?: boolean }) {
    return (
        <div className={cn(
            "flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-r border-border transition-colors hover:bg-secondary/50",
            highlight && "bg-secondary"
        )}>
            <div className="font-medium text-[15px]">{service}</div>
            <div className="flex items-baseline gap-2 mt-2 sm:mt-0">
                <span className="text-xl font-bold tracking-tight">{price}</span>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{unit}</span>
            </div>
        </div>
    )
}

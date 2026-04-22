import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import Link from "next/link"

const areas = {
    "city-of-london": {
        name: "City of London",
        postcodes: "EC1, EC2, EC3, EC4",
        description: "Premium office and commercial cleaning services across the Square Mile. We serve law firms, corporate headquarters, and financial institutions with unparalleled discretion and reliability.",
    },
    "canary-wharf": {
        name: "Canary Wharf",
        postcodes: "E14",
        description: "Specialist corporate cleaning for Canary Wharf's high-rise offices and commercial estates. Flexible, after-hours cleaning tailored to enterprise requirements.",
    },
    "mayfair": {
        name: "Mayfair",
        postcodes: "W1",
        description: "Boutique office cleaning for Mayfair's hedge funds, private equity firms, and luxury retail headquarters. Impeccable standards for high-end environments.",
    }
}

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
    const areaData = areas[params.area as keyof typeof areas]
    if (!areaData) return {}

    return {
        title: `Office Cleaning ${areaData.name} | Commercial Cleaners | Voila Cleaners`,
        description: `Premium office cleaning services in ${areaData.name} (${areaData.postcodes}). £17/hour commercial rates. DBS-checked staff, fully insured. Request a quote.`,
        alternates: { canonical: `https://voila-cleaners.co.uk/office-cleaning/${params.area}` },
    }
}

export default function OfficeCleaningAreaPage({ params }: { params: { area: string } }) {
    const areaData = areas[params.area as keyof typeof areas]

    if (!areaData) {
        notFound()
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Voila Cleaners ${areaData.name}`,
        "description": areaData.description,
        "areaServed": {
            "@type": "City",
            "name": areaData.name
        },
        "priceRange": "££",
        "telephone": "+442071129177"
    }

    return (
        <main className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            
            <Navbar />

            <PageHero
                badge="Local Commercial Service"
                title={`Office Cleaning in`}
                titleAccent={areaData.name + "."}
                subtitle={areaData.description}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Office Cleaning", href: "/services/commercial-cleaning" },
                    { label: areaData.name, href: `/office-cleaning/${params.area}` },
                ]}
                image="/commercial-cleaning.png"
                imageAlt={`Commercial office cleaning in ${areaData.name}`}
                cta={{ label: "Request Quote", href: "/contact" }}
            />

            <SplitFeature
                label={`Serving ${areaData.postcodes}`}
                title={`Tailored Cleaning for ${areaData.name} Businesses.`}
                description={`We understand the fast-paced nature of businesses in ${areaData.name}. Our commercial cleaning services are designed to be entirely invisible — maintaining your workspace to pristine standards out-of-hours, so you can focus on your core operations.`}
                bullets={[
                    "£17/hour transparent commercial rate",
                    "DBS-checked and fully vetted local operatives",
                    "Dedicated account manager for fast communication",
                    "Eco-friendly, COSHH-compliant procedures"
                ]}
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&fit=crop"
                imageAlt={`Modern office in ${areaData.name}`}
            />

            <section className="py-24 bg-secondary border-y border-border text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Need a cleaning partner in {areaData.name}?</h2>
                    <p className="text-muted-foreground mb-8">
                        Join dozens of businesses across {areaData.name} that trust Voila Cleaners for their daily workspace maintenance.
                    </p>
                    <Link href="/contact" className="inline-flex px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-none bg-foreground text-background hover:bg-foreground/90 transition-colors">
                        Get Your Free Proposal
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { BentoGrid } from "@/components/ui/bento-grid"
import { StatsBar } from "@/components/ui/stats-bar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Home, Sparkles, Briefcase, KeyRound, BellRing } from "lucide-react"

const services = [
    {
        title: "Luxury Housekeeping",
        description: "Regular and bespoke housekeeping designed for high-value homes. Tailored schedules, premium-grade products, and trained staff who understand how to maintain your home to five-star standards.",
        bg: "bg-[#FFF9F0]",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fit=crop",
        imageAlt: "Luxury living space",
        href: "/services/luxury-housekeeping",
        icon: <Home className="size-5" strokeWidth={1.5} />,
        span: 1 as const,
    },
    {
        title: "Deep Cleaning Services",
        description: "Comprehensive top-to-bottom cleaning for seasonal refreshes, post-renovation recovery, or property preparation. Every surface, every corner — no shortcuts.",
        bg: "bg-[#F0F5FF]",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&fit=crop",
        imageAlt: "Spotless kitchen",
        href: "/services/deep-cleaning",
        icon: <Sparkles className="size-5" strokeWidth={1.5} />,
        span: 1 as const,
    },
    {
        title: "Commercial & Office Cleaning",
        description: "Professional cleaning tailored to modern workplaces, shared offices, and executive suites. We keep your environment sharp, hygienic, and presentable.",
        bg: "bg-[#F0FFF5]",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop",
        imageAlt: "Clean modern office",
        href: "/services/commercial-cleaning",
        icon: <Briefcase className="size-5" strokeWidth={1.5} />,
        span: 1 as const,
    },
    {
        title: "End of Tenancy Cleaning",
        description: "Move-out ready cleaning that meets agency standards. Deposit-back guarantee with a meticulous checklist that covers every room from ceiling to skirting boards.",
        bg: "bg-[#FFF0F5]",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80&fit=crop",
        imageAlt: "Empty clean room",
        href: "/services/end-of-tenancy",
        icon: <KeyRound className="size-5" strokeWidth={1.5} />,
        span: 1 as const,
    },
    {
        title: "Serviced Apartment Turnover Cleaning",
        description: "Fast, structured turnover cleans for Airbnb, corporate lets, and serviced apartments — maintaining five-star guest reviews and consistent hospitality standards.",
        bg: "bg-[#F5F0FF]",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&fit=crop",
        imageAlt: "Serviced apartment bedroom",
        href: "/services/serviced-apartments",
        icon: <BellRing className="size-5" strokeWidth={1.5} />,
        span: 2 as const,
    },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="Our Services"
                title="Premium Cleaning Services"
                titleAccent="for Every Need."
                subtitle="From luxury residences to corporate offices, every service is designed around precision, discretion, and measurable results. Explore our services below."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                ]}
            />

            {/* Services Bento Grid */}
            <BentoGrid items={services} />

            {/* Stats */}


            {/* CTA strip */}
            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Not Sure Which Service You Need?
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto leading-relaxed">
                        Get in touch and our team will recommend the right service based on your property type, timeline, and requirements.
                    </p>
                    <Link href="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors shadow-sm">
                        Request a Free Quote
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

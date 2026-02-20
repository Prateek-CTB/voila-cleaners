"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { StatsBar } from "@/components/ui/stats-bar"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Shield, EyeOff, Users, PoundSterling } from "lucide-react"

export default function CommercialCleaningPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
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
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&fit=crop"
                imageAlt="Modern clean commercial office space"
                cta={{ label: "Request Commercial Quote", href: "/contact" }}
            />

            {/* Tailored Approach */}
            <SplitFeature
                label="Tailored for Business"
                title="Cleaning That Matches Your Brand Standards."
                description="Whether it's a boutique agency, a law firm, or a tech startup — we design cleaning schedules and processes that fit your workspace, not the other way around."
                bullets={[
                    "Daily, weekly, or custom schedules",
                    "After-hours cleaning to avoid disruption",
                    "Reception and client-facing area focus",
                    "Kitchen and breakroom sanitisation",
                    "Meeting room preparation and reset",
                    "Dedicated account manager",
                ]}
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80&fit=crop"
                imageAlt="Executive meeting room"
                stat={{ value: "70+", label: "Offices served" }}
                reverse
            />

            {/* What Sets Us Apart */}
            <BentoGrid
                heading="Why Businesses Choose Voila"
                items={[
                    { title: "Health & Safety Compliant", description: "We adhere to UK cleaning industry standards — COSHH compliant, risk-assessed, and health & safety trained.", bg: "bg-[#F0F5FF]", icon: <Shield className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Zero Disruption", description: "Cleaning happens around your schedule — evenings, early mornings, weekends. Your team never notices.", bg: "bg-[#FFF9F0]", icon: <EyeOff className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Consistent Teams", description: "Same professionals, every visit. They know your space, your preferences, and your standards.", bg: "bg-[#F0FFF5]", icon: <Users className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Transparent Pricing", description: "No hidden costs. No surprise invoices. Straightforward, competitive commercial rates.", bg: "bg-[#FFF0F5]", icon: <PoundSterling className="size-5" strokeWidth={1.5} />, span: 1 },
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

            {/* Testimonials */}
            <Testimonials3D
                heading="Client Stories"
                subtitle="What businesses across London say about our commercial service."
                testimonials={[
                    { name: "Marcus Chen", username: "@marcusc", body: "Voila took over our office cleaning six months ago. The difference was immediate.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Soho" },
                    { name: "Rebecca Lane", username: "@rebeccal", body: "Reliable, professional, and flexible. They adapted to our odd hours without any fuss.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Mayfair" },
                    { name: "Henry Blackwell", username: "@henryb", body: "Our co-working space needs daily cleans. Voila is punctual, professional, and invisible.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Soho" },
                    { name: "Claire Davidson", username: "@claired", body: "Meeting rooms are always presentation-ready. Clients have commented on how polished our office looks.", img: "https://randomuser.me/api/portraits/women/45.jpg", country: "City" },
                    { name: "James Porter", username: "@jamesp", body: "We manage three floors and Voila handles it all seamlessly. Zero complaints from any team.", img: "https://randomuser.me/api/portraits/men/51.jpg", country: "Canary Wharf" },
                    { name: "Anika Patel", username: "@anikap", body: "The kitchen and breakroom are always spotless. Our team actually enjoys using them now.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Shoreditch" },
                    { name: "Tom Wilson", username: "@tomw", body: "After-hours cleaning means zero disruption. They're in and out before anyone arrives.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "King's Cross" },
                    { name: "Sophie Hartley", username: "@sophieh", body: "Consistent quality every single day. That's what we needed and that's what we got.", img: "https://randomuser.me/api/portraits/women/32.jpg", country: "Fitzrovia" },
                    { name: "David Okonkwo", username: "@davido", body: "Our law firm requires discretion and precision. Voila delivers on both.", img: "https://randomuser.me/api/portraits/men/85.jpg", country: "Temple" },
                    { name: "Emily Cross", username: "@emilyc", body: "Switched from our previous provider and the improvement was night and day.", img: "https://randomuser.me/api/portraits/women/44.jpg", country: "Marylebone" },
                ]}
            />

            {/* CTA */}
            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Elevate Your Workspace
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        Get a tailored commercial cleaning proposal. No obligation, fast response.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                        Get Your Proposal
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

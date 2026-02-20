"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { ProcessSteps } from "@/components/ui/process-steps"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Shield, ClipboardList, Zap } from "lucide-react"

export default function EndOfTenancyPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="End of Tenancy"
                title="Move-Out Cleaning"
                titleAccent="to Deposit-Back Standards."
                subtitle="Our end of tenancy cleaning is designed to meet letting agent and landlord standards. A meticulous, room-by-room clean that maximises your deposit return — guaranteed."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "End of Tenancy", href: "/services/end-of-tenancy" },
                ]}
                image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85&fit=crop"
                imageAlt="Empty clean room ready for new tenants"
                cta={{ label: "Book End of Tenancy", href: "/contact" }}
            />

            <SplitFeature
                label="What You Get"
                title="Agency-Standard Cleaning. No Shortcuts."
                description="Every room cleaned from ceiling to floor — including those areas that agencies check most closely. We handle kitchens, bathrooms, floors, windows, and every detail in between."
                bullets={[
                    "Full oven, hob, and extractor deep-clean",
                    "Fridge, freezer, and washing machine cleaning",
                    "Limescale removal from all bathroom fixtures",
                    "Skirting boards, door frames, and light switches",
                    "Window sills, tracks, and internal glass",
                    "Carpet vacuuming and hard floor mopping",
                ]}
                image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=700&q=80&fit=crop"
                imageAlt="Spotless empty apartment"
                stat={{ value: "100%", label: "Deposit-back rate" }}
            />

            <BentoGrid
                heading="Why Tenants Trust Us"
                items={[
                    { title: "Deposit-Back Guarantee", description: "If your landlord or agency isn't satisfied, we'll re-clean the areas in question free of charge.", bg: "bg-[#FFF9F0]", icon: <Shield className="size-5" strokeWidth={1.5} />, span: 2 },
                    { title: "Agency Checklists", description: "We follow the exact checklists used by major letting agencies across London.", bg: "bg-[#F0F5FF]", icon: <ClipboardList className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Same-Day Availability", description: "Last-minute move? We offer same-day bookings subject to availability.", bg: "bg-[#F0FFF5]", icon: <Zap className="size-5" strokeWidth={1.5} />, span: 1 },
                ]}
            />

            <ProcessSteps
                heading="How It Works"
                headingAccent="Fast and Reliable."
                steps={[
                    { number: "01", title: "Tell Us Your Move-Out Date", description: "Share your property size, move-out date, and any special requirements." },
                    { number: "02", title: "Instant Quote", description: "We provide a fixed-price quote based on bedrooms and bathrooms — no surprises." },
                    { number: "03", title: "Move-Out Clean", description: "Our team arrives on the day and works through every room systematically." },
                    { number: "04", title: "Inspection Ready", description: "We leave your property in inspection-ready condition. If it doesn't pass, we come back free." },
                ]}
            />

            <Testimonials3D
                heading="Tenant Reviews"
                subtitle="Full deposits returned, happy landlords, smooth move-outs."
                testimonials={[
                    { name: "Tom Reynolds", username: "@tomr", body: "Got my full deposit back thanks to Voila. The letting agent was impressed.", img: "https://randomuser.me/api/portraits/men/41.jpg", country: "Clapham" },
                    { name: "Sophie Grant", username: "@sophieg", body: "Booked last-minute and they still delivered an incredible clean.", img: "https://randomuser.me/api/portraits/women/45.jpg", country: "Brixton" },
                    { name: "Ali Hassan", username: "@alih", body: "Professional, on time, and the flat looked better than when I moved in.", img: "https://randomuser.me/api/portraits/men/85.jpg", country: "Shoreditch" },
                    { name: "Priya Sharma", username: "@priyas", body: "End of tenancy clean got our full deposit back. Agency approved on first inspection!", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Islington" },
                    { name: "Amelia Foster", username: "@ameliaf", body: "Moving out of a 4-bed flat was daunting. Their service made it painless.", img: "https://randomuser.me/api/portraits/women/12.jpg", country: "Battersea" },
                    { name: "Jake Morrison", username: "@jakem", body: "Oven, fridge, bathroom tiles — they cleaned everything to agency standard.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Hackney" },
                    { name: "Nina Petrova", username: "@ninap", body: "My landlord was so pleased she gave me a full reference. Clean made all the difference.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Canary Wharf" },
                    { name: "Luke Edwards", username: "@lukee", body: "Same-day booking, arrived on time, flat was spotless by evening. Brilliant.", img: "https://randomuser.me/api/portraits/men/61.jpg", country: "Bermondsey" },
                    { name: "Hannah Park", username: "@hannahp", body: "Used them for two different move-outs now. Both times faultless.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "Fulham" },
                    { name: "Sam Okonkwo", username: "@samo", body: "The letting agent said it was the cleanest handover they'd seen in months.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Peckham" },
                ]}
            />

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Moving Out Soon?
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        Book your end of tenancy clean and get your deposit back. Fixed pricing, no hidden costs.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                        Get Your Fixed Quote
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

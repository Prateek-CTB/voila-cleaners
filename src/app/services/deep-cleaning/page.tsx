"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { ProcessSteps } from "@/components/ui/process-steps"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { CookingPot, ShowerHead, Sofa, DoorOpen } from "lucide-react"

export default function DeepCleaningPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="Deep Cleaning"
                title="Comprehensive Deep Cleaning"
                titleAccent="Top to Bottom."
                subtitle="A deep clean from Voila goes beyond what regular cleaning covers. Every surface, every corner, every detail — meticulously restored to a pristine condition."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Deep Cleaning", href: "/services/deep-cleaning" },
                ]}
                image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=85&fit=crop"
                imageAlt="Deep cleaned kitchen with gleaming surfaces"
                cta={{ label: "Book Deep Clean", href: "/contact" }}
            />

            {/* When You Need It */}
            <SplitFeature
                label="When to Book"
                title="More Than a Regular Clean — A Complete Refresh."
                description="Deep cleaning is perfect for seasonal refreshes, post-renovation recovery, pre-move-in preparation, and those moments when your home needs that extra level of care."
                bullets={[
                    "Post-renovation or building work cleanup",
                    "Seasonal spring/autumn deep clean",
                    "Property preparation before sale or letting",
                    "After a long period of vacancy",
                    "New home move-in preparation",
                ]}
                image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&fit=crop"
                imageAlt="Clean modern living space"
                stat={{ value: "100%", label: "Coverage guarantee" }}
            />

            {/* What We Cover */}
            <BentoGrid
                heading="What We Cover"
                subtitle="A meticulous checklist covering every area of your property."
                items={[
                    { title: "Kitchen & Appliances", description: "Inside ovens, fridges, extractors, cupboard fronts, splash-backs, sinks — all degreased and sanitised.", bg: "bg-[#FFF9F0]", icon: <CookingPot className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Bathrooms & En-Suites", description: "Limescale removal, grout deep-clean, fixture polishing, toilet sanitisation, mirror finishing.", bg: "bg-[#F0F5FF]", icon: <ShowerHead className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Living Spaces & Bedrooms", description: "Skirting boards, light fittings, window sills, radiators, upholstery vacuuming, carpet treatment.", bg: "bg-[#F0FFF5]", icon: <Sofa className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Hallways, Stairs & Utilities", description: "Banisters, door frames, light switches, utility rooms, storage areas — the often-missed details.", bg: "bg-[#FFF0F5]", icon: <DoorOpen className="size-5" strokeWidth={1.5} />, span: 1 },
                ]}
            />

            {/* Process */}
            <ProcessSteps
                heading="How It Works"
                headingAccent="Thorough and Efficient."
                steps={[
                    { number: "01", title: "Request Your Quote", description: "Share your property details and preferred date. We'll respond within 24 hours." },
                    { number: "02", title: "Property Assessment", description: "We assess the scope — room count, condition, and any special requirements." },
                    { number: "03", title: "Deep Clean Day", description: "Our team arrives fully equipped. We work through the property systematically from top to bottom." },
                    { number: "04", title: "Final Walkthrough", description: "We do a quality check before leaving. If anything isn't perfect, we fix it on the spot." },
                ]}
            />

            {/* Testimonials */}
            <Testimonials3D
                heading="Client Feedback"
                subtitle="What clients say after their deep clean."
                testimonials={[
                    { name: "David Leigh", username: "@davidl", body: "The deep clean before our house sale made a genuine difference. The estate agent was impressed.", img: "https://randomuser.me/api/portraits/men/41.jpg", country: "Fulham" },
                    { name: "Claire O'Brien", username: "@claireob", body: "Post-renovation, our flat was covered in dust. Voila's deep clean was extraordinary.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Battersea" },
                    { name: "Thomas Park", username: "@thomasp", body: "Every surface, every corner — they didn't miss a thing. Kitchen looks brand new.", img: "https://randomuser.me/api/portraits/men/51.jpg", country: "Wandsworth" },
                    { name: "Fiona Grant", username: "@fionag", body: "Spring clean was exactly what our home needed. Feels like a completely different space.", img: "https://randomuser.me/api/portraits/women/45.jpg", country: "Dulwich" },
                    { name: "Steve Morrison", username: "@stevem", body: "The oven alone was worth the price. Haven't seen it that clean since we bought it.", img: "https://randomuser.me/api/portraits/men/85.jpg", country: "Islington" },
                    { name: "Rachel Kim", username: "@rachelk", body: "Booked before Christmas and they were thorough beyond expectations. Every detail covered.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "Clapham" },
                    { name: "George Wells", username: "@georgew", body: "The grout in our bathrooms looks white again. Genuinely didn't think it was possible.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Brixton" },
                    { name: "Natasha Bell", username: "@natashab", body: "Pre-move-in deep clean was perfect. We walked into a spotless new home.", img: "https://randomuser.me/api/portraits/women/12.jpg", country: "Greenwich" },
                    { name: "Patrick Hughes", username: "@patrickh", body: "Extractor fan, behind the fridge, inside drawers — they literally cleaned everything.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Hackney" },
                    { name: "Laura Bennett", username: "@laurab", body: "Our landlord was so impressed they asked who we used. Deposit returned in full.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Putney" },
                ]}
            />

            {/* CTA */}
            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Book Your Deep Clean Today
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        Experience the difference a professional deep clean makes. No shortcuts, no compromises.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                        Get a Quote
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

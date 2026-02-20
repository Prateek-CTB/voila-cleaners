"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { StatsBar } from "@/components/ui/stats-bar"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Shirt, Frame, UtensilsCrossed, CarFront } from "lucide-react"

export default function RetailCleaningPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="Retail & Showroom"
                title="Retail, Showroom &"
                titleAccent="Hospitality Cleaning."
                subtitle="First impressions matter. We maintain retail stores, showrooms, galleries, and hospitality venues to the visual and hygienic standards your brand demands."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Retail Cleaning", href: "/services/retail-cleaning" },
                ]}
                image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85&fit=crop"
                imageAlt="Clean retail store interior"
                cta={{ label: "Request Retail Quote", href: "/contact" }}
            />

            <SplitFeature
                label="Brand-Grade Presentation"
                title="Your Space Reflects Your Brand."
                description="A polished showroom floor, spotless display cases, sparkling windows — these details matter. We help luxury brands, boutiques, and hospitality venues maintain the presentation their customers expect."
                bullets={[
                    "Display and fixture cleaning",
                    "Window and glass polishing",
                    "Floor care — marble, tile, hardwood, carpet",
                    "Washroom and staff area cleaning",
                    "Opening-hours or after-hours scheduling",
                    "Event pre/post-cleaning available",
                ]}
                image="https://images.unsplash.com/photo-1555529902-5261145633bf?w=700&q=80&fit=crop"
                imageAlt="Luxury boutique interior"
                stat={{ value: "40+", label: "Retail clients" }}
                reverse
            />

            <BentoGrid
                heading="Sectors We Serve"
                items={[
                    { title: "Fashion & Luxury Retail", description: "Boutiques, flagship stores, and luxury retail environments maintained to brand standards.", bg: "bg-[#FFF9F0]", icon: <Shirt className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Galleries & Event Spaces", description: "White-wall galleries, exhibition spaces, and venue cleaning before and after events.", bg: "bg-[#F0F5FF]", icon: <Frame className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Restaurants & Cafés", description: "Front-of-house deep cleaning, kitchen support cleaning, and hygiene compliance assistance.", bg: "bg-[#F0FFF5]", icon: <UtensilsCrossed className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Car Showrooms & Studios", description: "Large-format floor cleaning, glass partitions, and precision showroom detailing.", bg: "bg-[#FFF0F5]", icon: <CarFront className="size-5" strokeWidth={1.5} />, span: 1 },
                ]}
            />

            <StatsBar
                heading="Retail Performance"
                stats={[
                    { value: "40+", label: "Retail venues" },
                    { value: "100%", label: "Satisfaction rate" },
                    { value: "0", label: "Complaints" },
                    { value: "After-hrs", label: "Scheduling" },
                ]}
            />

            <Testimonials3D
                heading="Retail Client Feedback"
                subtitle="Boutiques, galleries, and hospitality venues across London."
                testimonials={[
                    { name: "Olivia Park", username: "@oliviap", body: "Our gallery has never looked better. They understand the standard for VIP viewings.", img: "https://randomuser.me/api/portraits/women/44.jpg", country: "Mayfair" },
                    { name: "Hugo Blanc", username: "@hugob", body: "They clean our boutique every morning before opening. Customers always comment on how pristine it is.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Notting Hill" },
                    { name: "David Okonkwo", username: "@davido", body: "Our showroom is always presentation-ready. Clients comment on how immaculate it looks.", img: "https://randomuser.me/api/portraits/men/85.jpg", country: "King's Road" },
                    { name: "Sophie Webb", username: "@sophiew", body: "Event pre-cleaning was flawless. The gallery was ready for our exhibition opening perfectly.", img: "https://randomuser.me/api/portraits/women/65.jpg", country: "Shoreditch" },
                    { name: "Marco Rossi", username: "@marcor", body: "Our restaurant's front of house is always spotless. Hygiene ratings have never been better.", img: "https://randomuser.me/api/portraits/men/51.jpg", country: "Soho" },
                    { name: "Charlotte Grey", username: "@charlotteg", body: "Window and glass polishing is immaculate. Our storefront always looks inviting.", img: "https://randomuser.me/api/portraits/women/32.jpg", country: "Bond Street" },
                    { name: "James Ford", username: "@jamesf", body: "Our car showroom floor sparkles. Clients notice and it makes a difference.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Knightsbridge" },
                    { name: "Amara Obi", username: "@amarao", body: "After-hours scheduling means we never sacrifice trade time. Brilliant service.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Covent Garden" },
                    { name: "Patrick Cole", username: "@patrickc", body: "Marble floor polishing is an art. Voila's team genuinely know what they're doing.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Chelsea" },
                    { name: "Rachel Kim", username: "@rachelk", body: "Post-event cleanup for our gallery opening was done by 6am. Incredible turnaround.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "Fitzrovia" },
                ]}
            />

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Present Your Best Face
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        Talk to us about a bespoke cleaning schedule for your retail or hospitality space.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                        Get Your Quote
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

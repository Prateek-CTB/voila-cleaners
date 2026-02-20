"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { StatsBar } from "@/components/ui/stats-bar"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { BadgeCheck, RefreshCw, Leaf, Handshake } from "lucide-react"

export default function ResidentialCleaningPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="Residential Cleaning"
                title="Regular Home Cleaning"
                titleAccent="You Can Rely On."
                subtitle="Professional residential cleaning that fits your life. Consistent, flexible, and always to a high standard — so your home stays spotless without the stress."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Residential Cleaning", href: "/services/residential-cleaning" },
                ]}
                image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=85&fit=crop"
                imageAlt="Beautiful clean residential living room"
                cta={{ label: "Book Residential Clean", href: "/contact" }}
            />

            <SplitFeature
                label="Your Home, Our Priority"
                title="Flexible Cleaning for Busy Lives."
                description="Whether it's weekly, fortnightly, or a one-off refresh — we match your schedule and cleaning preferences. Same cleaner every time, same high standard every visit."
                bullets={[
                    "Weekly, fortnightly, or custom schedules",
                    "Kitchens, bathrooms, bedrooms, living areas",
                    "Ironing and laundry add-ons available",
                    "Pet-friendly products on request",
                    "Same dedicated cleaner each visit",
                    "Flexible rescheduling, no lock-in",
                ]}
                image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80&fit=crop"
                imageAlt="Modern home interior"
                stat={{ value: "4.9★", label: "Client rating" }}
                reverse
            />

            <BentoGrid
                heading="Why Families Choose Voila"
                items={[
                    { title: "Trusted & Vetted", description: "Every cleaner is background-checked, reference-verified, and trained to our internal standards.", bg: "bg-[#FFF9F0]", icon: <BadgeCheck className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Consistency Guaranteed", description: "Same professional each visit. They learn your preferences and maintain your standards.", bg: "bg-[#F0F5FF]", icon: <RefreshCw className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Eco-Friendly Options", description: "We offer eco-conscious, non-toxic products that are safe for children, pets, and the environment.", bg: "bg-[#F0FFF5]", icon: <Leaf className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "No Lock-In Contracts", description: "Cancel or pause any time. We earn your loyalty through results, not commitments.", bg: "bg-[#FFF0F5]", icon: <Handshake className="size-5" strokeWidth={1.5} />, span: 1 },
                ]}
            />


            <Testimonials3D
                heading="What Homeowners Say"
                subtitle="Trusted weekly by families across London."
                testimonials={[
                    { name: "Emma Collins", username: "@emmac", body: "Finally found a cleaning service I can trust completely. Same cleaner every week, always thorough.", img: "https://randomuser.me/api/portraits/women/32.jpg", country: "Wimbledon" },
                    { name: "Raj Patel", username: "@rajp", body: "Our home has never been so consistently clean. The team is wonderful and our kids love them.", img: "https://randomuser.me/api/portraits/men/51.jpg", country: "Ealing" },
                    { name: "Lucy Webb", username: "@lucyw", body: "Flexible, reliable, and genuinely good at what they do. Worth every penny.", img: "https://randomuser.me/api/portraits/women/44.jpg", country: "Richmond" },
                    { name: "Mark Stevens", username: "@marks", body: "Pet-friendly products, flexible timing, no lock-in — perfect for our busy household.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Chiswick" },
                    { name: "Sarah Hughes", username: "@sarahh", body: "They remember our preferences from week to week. That level of care is rare.", img: "https://randomuser.me/api/portraits/women/65.jpg", country: "Putney" },
                    { name: "Daniel Cross", username: "@danielc", body: "Cancelled and rebooked twice — no fuss at all. Genuinely flexible service.", img: "https://randomuser.me/api/portraits/men/61.jpg", country: "Balham" },
                    { name: "Grace Taylor", username: "@gracet", body: "Eco-friendly products were important to us. Voila offered them without hesitation.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "Crouch End" },
                    { name: "Ben Watson", username: "@benw", body: "We've had the same cleaner for 8 months. She's practically part of the family.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Twickenham" },
                    { name: "Lisa Chen", username: "@lisac", body: "Ironing add-on is a game changer. One less thing to worry about each week.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Muswell Hill" },
                    { name: "Andrew Mills", username: "@andrewm", body: "Tried three other services before. Voila is the first we've actually kept.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Dulwich" },
                ]}
            />

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Ready for a Cleaner Home?
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        No contracts, no hassle. Just consistently brilliant cleaning.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                        Get Started
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

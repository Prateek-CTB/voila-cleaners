"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"

import { ValuesParallax } from "@/components/ui/values-parallax"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { EyeOff, Search, Handshake, Gem } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="About Voila Cleaners"
                title="Built on Detail,"
                titleAccent="Driven by Standards."
                subtitle="Voila Cleaners was founded with a simple belief: cleaning should be precise, professional, and consistent. We serve London's most discerning clients because we refuse to cut corners."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                ]}
            />

            {/* Our Story */}
            <SplitFeature
                label="Our Story"
                title="From Local Service to London's Trusted Name."
                description="What started as a small housekeeping service in West London grew into one of the city's most trusted premium cleaning companies. Today, we maintain luxury homes, offices, serviced apartments, and commercial properties across every London borough. Our growth has been driven by word-of-mouth, client loyalty, and an unwavering commitment to quality."
                image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80&fit=crop"
                imageAlt="Beautiful London property"
                stat={{ value: "8+", label: "Years of excellence" }}
            />

            {/* Values — Scroll Parallax */}
            <ValuesParallax
                values={[
                    {
                        title: "Discretion",
                        description: "We work quietly, professionally, and with complete respect for your privacy. Your home, your space, your rules.",
                        image: "/about/discretion.png",
                        icon: <EyeOff className="size-5" strokeWidth={1.5} />,
                    },
                    {
                        title: "Detail",
                        description: "We see what others miss. Skirting boards, light switches, behind the sofa — no corner is overlooked.",
                        image: "/about/detail.png",
                        icon: <Search className="size-5" strokeWidth={1.5} />,
                    },
                    {
                        title: "Dependability",
                        description: "Same team, same standard, every time. We show up when we say we will and deliver what we promise.",
                        image: "/about/dependability.png",
                        icon: <Handshake className="size-5" strokeWidth={1.5} />,
                    },
                    {
                        title: "Our People",
                        description: "Every professional is background-checked, insured, and trained to our internal standards. They're the heart of everything we do.",
                        image: "/about/our_people_value.png",
                        icon: <Gem className="size-5" strokeWidth={1.5} />,
                    },
                ]}
            />

            {/* Our Approach */}
            <SplitFeature
                label="Our Approach"
                title="Systems, Not Shortcuts."
                description="We don't rely on luck or improvisation. Every clean follows a structured checklist. Every cleaner is trained on our internal protocols. Every visit is quality-checked. This systematic approach is why our clients stay with us — and why they recommend us."
                bullets={[
                    "50-point structured checklists for every property type",
                    "Internal training programme for all cleaning professionals",
                    "Random quality audits to maintain standards",
                    "Dedicated account manager for every client",
                    "24-hour response time on all enquiries",
                ]}
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&fit=crop"
                imageAlt="Immaculate home interior"
                reverse
            />

            {/* Stats */}


            {/* Testimonials */}
            <Testimonials3D
                heading="What Clients Say About Us"
                subtitle="Trusted by homeowners, property managers, and businesses across London."
                testimonials={[
                    { name: "Richard Hayes", username: "@richardh", body: "Voila isn't just a cleaning company — they're a partner in maintaining our home. First-class.", img: "https://randomuser.me/api/portraits/men/41.jpg", country: "Chelsea" },
                    { name: "Samira Joshi", username: "@samiraj", body: "Professional, discreet, and completely reliable. We've recommended them to every neighbour.", img: "https://randomuser.me/api/portraits/women/45.jpg", country: "Marylebone" },
                    { name: "Michael Tran", username: "@michaelt", body: "We manage 40+ properties and Voila handles all turnovers. Consistent, fast, zero complaints.", img: "https://randomuser.me/api/portraits/men/51.jpg", country: "Kensington" },
                    { name: "Sarah Mitchell", username: "@sarahm", body: "Eight years of excellence. They've maintained our home flawlessly from day one.", img: "https://randomuser.me/api/portraits/women/32.jpg", country: "Chelsea" },
                    { name: "Oliver Chen", username: "@oliverc", body: "Discretion, detail, and dependability — they live by their values. Truly exceptional.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Belgravia" },
                    { name: "Rebecca Lane", username: "@rebeccal", body: "From our office to our home — Voila handles both with the same impeccable standard.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Mayfair" },
                    { name: "James Harrington", username: "@jamesh", body: "Their systematic approach is what sets them apart. Checklists, quality checks, no shortcuts.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Canary Wharf" },
                    { name: "Charlotte Reid", username: "@charlotter", body: "Every cleaner we've had has been wonderful. The hiring and training process clearly works.", img: "https://randomuser.me/api/portraits/women/44.jpg", country: "Hampstead" },
                    { name: "Daniel Murray", username: "@danielm", body: "Response time is incredible. 24 hours or less, every single time. Professional operation.", img: "https://randomuser.me/api/portraits/men/61.jpg", country: "London" },
                    { name: "Priya Sharma", username: "@priyas", body: "From our first enquiry to today — the service has been consistently brilliant. No dip in quality.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Islington" },
                ]}
            />

            <Footer />
        </main>
    )
}

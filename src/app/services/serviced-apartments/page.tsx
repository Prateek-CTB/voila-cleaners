"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { ProcessSteps } from "@/components/ui/process-steps"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Building, Smartphone, Camera, Siren } from "lucide-react"

export default function ServicedApartmentsPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="Serviced Apartments"
                title="Turnover Cleaning for"
                titleAccent="Short-Stay Properties."
                subtitle="Keep your Airbnb, corporate let, or serviced apartment guest-ready at all times. Fast, structured turnovers that maintain five-star reviews and hospitality standards."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Serviced Apartments", href: "/services/serviced-apartments" },
                ]}
                image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85&fit=crop"
                imageAlt="Pristine serviced apartment bedroom"
                cta={{ label: "Book Turnover Clean", href: "/contact" }}
            />

            <SplitFeature
                label="Hospitality-Grade Service"
                title="Guest-Ready in Hours, Not Days."
                description="Our turnover teams are trained in hospitality cleaning protocols. We handle linen changes, full sanitisation, restocking, and quality checks — everything needed between guests."
                bullets={[
                    "Complete linen change and bed-making",
                    "Kitchen reset — fridge, oven, dishes, surfaces",
                    "Bathroom deep-clean and toiletry restocking",
                    "Living area tidy and vacuum",
                    "Quality check photography on completion",
                    "Same-day availability for urgent turnovers",
                ]}
                image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80&fit=crop"
                imageAlt="Luxury hotel-style bedroom"
                stat={{ value: "2hr", label: "Avg. turnover time" }}
            />

            <BentoGrid
                heading="Built for Property Managers"
                items={[
                    { title: "Multi-Property Packages", description: "Manage multiple listings across London with one trusted cleaning partner. Volume discounts available.", bg: "bg-[#FFF9F0]", icon: <Building className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "API-Ready Scheduling", description: "We integrate with your booking calendar to auto-schedule turnovers. No manual coordination needed.", bg: "bg-[#F0F5FF]", icon: <Smartphone className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Quality Assurance Photos", description: "After every clean, we send verification photos — proof of guest-ready condition for your records.", bg: "bg-[#F0FFF5]", icon: <Camera className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Emergency Cover", description: "Last-minute booking? Early check-in? Our rapid-response teams handle urgent turnovers within hours.", bg: "bg-[#FFF0F5]", icon: <Siren className="size-5" strokeWidth={1.5} />, span: 1 },
                ]}
            />

            <ProcessSteps
                heading="How Turnovers Work"
                headingAccent="Seamless and Automated."
                steps={[
                    { number: "01", title: "Guest Checks Out", description: "Your booking system notifies us automatically — or you send a quick message." },
                    { number: "02", title: "Team Dispatched", description: "Our dedicated turnover crew arrives within the agreed window, fully equipped." },
                    { number: "03", title: "Full Reset", description: "Cleaning, linen change, restocking, and quality checks — everything done to hospitality standards." },
                    { number: "04", title: "Guest-Ready Confirmation", description: "You receive confirmation photos and a status update. Property is live and ready." },
                ]}
            />

            <Testimonials3D
                heading="Host Reviews"
                subtitle="Trusted by Airbnb hosts and property managers across London."
                testimonials={[
                    { name: "Daniel Murray", username: "@danielm", body: "Managing 12 properties was a nightmare. Voila made turnovers effortless — reviews went from 4.2 to 4.9.", img: "https://randomuser.me/api/portraits/men/41.jpg", country: "London" },
                    { name: "Nina Petrova", username: "@ninap", body: "They're incredibly fast and thorough. Guests consistently comment on how clean the apartment is.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Canary Wharf" },
                    { name: "Emma Thornton", username: "@emmat", body: "As an Airbnb host, turnover speed is everything. Voila's team is always on time.", img: "https://randomuser.me/api/portraits/women/45.jpg", country: "Shoreditch" },
                    { name: "Thomas Webber", username: "@thomasw", body: "Managing serviced apartments is stressful enough. Voila takes cleaning off my plate entirely.", img: "https://randomuser.me/api/portraits/men/61.jpg", country: "Marylebone" },
                    { name: "Sarah Keane", username: "@sarahk", body: "Photo verification after every turnover gives me total peace of mind when I'm abroad.", img: "https://randomuser.me/api/portraits/women/32.jpg", country: "Kensington" },
                    { name: "Liam Foster", username: "@liamf", body: "Emergency same-day turnover when a guest arrived early. Voila handled it perfectly.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Bermondsey" },
                    { name: "Priya Nair", username: "@priyan", body: "Linen changes, restocking, and deep clean all in under 2 hours. That's impressive.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Paddington" },
                    { name: "Marcus Bell", username: "@marcusb", body: "Volume discounts for my 8 properties make it cost-effective too. Great value.", img: "https://randomuser.me/api/portraits/men/85.jpg", country: "Brixton" },
                    { name: "Jessica Lane", username: "@jessical", body: "My Airbnb rating went to 4.98 after switching to Voila. Cleanliness reviews are always 5 stars.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "Notting Hill" },
                    { name: "Oliver Hayes", username: "@oliverh", body: "Calendar integration means I never need to manually book cleans. Everything is automated.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Hackney" },
                ]}
            />

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Keep Your Guests Wowed
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        Reliable turnovers, five-star reviews, zero stress. Let&apos;s talk about your properties.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                        Get Multi-Property Quote
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

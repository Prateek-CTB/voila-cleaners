"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { ProcessSteps } from "@/components/ui/process-steps"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { StatsBar } from "@/components/ui/stats-bar"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

export default function LuxuryHousekeepingPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="Luxury Housekeeping"
                title="Regular Housekeeping"
                titleAccent="Designed for Luxury Homes."
                subtitle="Our housekeeping service is crafted for clients who value precision, discretion, and immaculate presentation. From weekly visits to bespoke scheduling — your home, maintained to five-star standards."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Luxury Housekeeping", href: "/services/luxury-housekeeping" },
                ]}
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85&fit=crop"
                imageAlt="Beautifully maintained luxury home interior"
                cta={{ label: "Book Housekeeping", href: "/contact" }}
            />

            {/* What's Included */}
            <SplitFeature
                label="What's Included"
                title="Everything You'd Expect — and More."
                description="Our luxury housekeeping goes beyond surface cleaning. We maintain every aspect of your home with care, consistency, and attention to the smallest details."
                bullets={[
                    "Thorough room-by-room cleaning and polishing",
                    "Kitchen deep-clean including appliances and surfaces",
                    "Bathroom sanitisation and fixture shining",
                    "Bed linen changes and laundry management",
                    "Floor care — vacuuming, mopping, specialist treatments",
                    "Cupboard and wardrobe organisation on request",
                ]}
                image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&fit=crop"
                imageAlt="Pristine modern kitchen"
                stat={{ value: "50+", label: "Point checklist" }}
            />

            {/* How It Works */}
            <ProcessSteps
                heading="How It Works"
                headingAccent="Simple and Seamless."
                subtitle="We handle everything so you don't have to think twice."
                steps={[
                    { number: "01", title: "Enquire & Consult", description: "Tell us about your property, schedule preferences, and any specific requirements. We'll arrange a consultation." },
                    { number: "02", title: "Bespoke Plan", description: "We design a cleaning plan tailored to your home — room priorities, frequency, and any special instructions." },
                    { number: "03", title: "Meet Your Team", description: "We assign dedicated, vetted professionals to your property. You'll see the same familiar faces every visit." },
                    { number: "04", title: "Consistent Excellence", description: "Every session follows our structured checklist. Quality checks ensure standards never slip." },
                ]}
            />

            {/* Stats */}


            {/* Testimonials */}
            <Testimonials3D
                heading="What Our Clients Say"
                subtitle="Trusted by London's most discerning homeowners."
                testimonials={[
                    { name: "Sarah Mitchell", username: "@sarahm", body: "Voila transformed the way I think about home maintenance. Discreet, thorough, and consistently excellent.", img: "https://randomuser.me/api/portraits/women/32.jpg", country: "Chelsea" },
                    { name: "James Barrett", username: "@jamesb", body: "We've used several services before — nothing comes close. The attention to detail is remarkable.", img: "https://randomuser.me/api/portraits/men/45.jpg", country: "Kensington" },
                    { name: "Ayesha Khan", username: "@ayeshak", body: "Reliable, professional, and genuinely kind. They treat our home with the same care we do.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Hampstead" },
                    { name: "Oliver Chen", username: "@oliverc", body: "Same cleaner every week — they know every detail of our home. True luxury service.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Belgravia" },
                    { name: "Charlotte Reid", username: "@charlotter", body: "Our home has never looked better. The consistency is what sets Voila apart.", img: "https://randomuser.me/api/portraits/women/44.jpg", country: "Holland Park" },
                    { name: "Marcus Webb", username: "@marcusw", body: "From silver polishing to linen changes — they handle everything with care.", img: "https://randomuser.me/api/portraits/men/61.jpg", country: "Mayfair" },
                    { name: "Sophia Aldridge", username: "@sophiaa", body: "They treat our home like their own. The attention to detail is what keeps us loyal.", img: "https://randomuser.me/api/portraits/women/65.jpg", country: "Notting Hill" },
                    { name: "Henry Blackwell", username: "@henryb", body: "Discreet, professional, and thorough. Exactly what a luxury home needs.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Knightsbridge" },
                    { name: "Priya Nair", username: "@priyan", body: "The team is always punctual and meticulous. Five-star service every single visit.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "St John's Wood" },
                    { name: "Andrew Foster", username: "@andrewf", body: "We had tried three different services. Voila is the only one that truly met our standards.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Richmond" },
                ]}
            />

            {/* CTA */}
            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Ready for Five-Star Housekeeping?
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        Request a bespoke quote and discover why London&apos;s most discerning households trust Voila Cleaners.
                    </p>
                    <Link href="/contact"
                        className="inline-flex px-7 py-3.5 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors">
                        Request Your Quote
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { SplitFeature } from "@/components/ui/split-feature"
import { BentoGrid } from "@/components/ui/bento-grid"
import { ProcessSteps } from "@/components/ui/process-steps"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { HardHat, Wrench, Home, Ruler } from "lucide-react"

export default function AfterBuildersPage() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="After-Builders Clean"
                title="Post-Construction &"
                titleAccent="After-Builders Cleaning."
                subtitle="Building work creates mess that regular cleaning can't handle. Our specialist after-builders service removes construction dust, debris, paint splashes, and residue — restoring your property to move-in condition."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "After-Builders Clean", href: "/services/after-builders" },
                ]}
                image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=85&fit=crop"
                imageAlt="Modern building construction site"
                cta={{ label: "Book After-Builders", href: "/contact" }}
            />

            <SplitFeature
                label="Specialist Equipment"
                title="Industrial-Grade Clean. Residential Finish."
                description="Post-construction requires specialist skills and equipment. Our teams are trained to handle plaster dust extraction, paint removal, grout haze cleaning, and heavy-duty degreasing."
                bullets={[
                    "Construction dust and debris removal",
                    "Paint splash and adhesive clean-off",
                    "Window and glass deep-clean",
                    "Hard floor scrubbing and polishing",
                    "Air vent and extractor cleaning",
                    "Final snagging-level detail clean",
                ]}
                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&fit=crop"
                imageAlt="Construction renovation"
                stat={{ value: "200+", label: "Projects completed" }}
            />

            <BentoGrid
                heading="Project Types We Handle"
                items={[
                    { title: "Full Renovations", description: "Complete property overhauls — we come in after the builders leave and transform chaos into perfection.", bg: "bg-[#FFF9F0]", icon: <HardHat className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Kitchen & Bathroom Refits", description: "Targeted post-fit cleaning for newly installed kitchens and bathrooms.", bg: "bg-[#F0F5FF]", icon: <Wrench className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "New-Build Handovers", description: "Developer-grade cleaning for new-build properties before handover to buyers or letting agents.", bg: "bg-[#F0FFF5]", icon: <Home className="size-5" strokeWidth={1.5} />, span: 1 },
                    { title: "Extension & Loft Conversions", description: "Structural dust permeates everywhere. We clean the entire property, not just the extension.", bg: "bg-[#FFF0F5]", icon: <Ruler className="size-5" strokeWidth={1.5} />, span: 1 },
                ]}
            />

            <ProcessSteps
                heading="Our Process"
                headingAccent="From Dust to Done."
                steps={[
                    { number: "01", title: "Site Assessment", description: "We visit the property (or receive photos) to assess scope, dust levels, and any specialist requirements." },
                    { number: "02", title: "Fixed-Price Quote", description: "You get a transparent, all-inclusive quote. No hidden extras, no hourly surprises." },
                    { number: "03", title: "Deep Clean Execution", description: "Our specialist team works top-to-bottom with industrial equipment and professional-grade products." },
                    { number: "04", title: "Move-In Ready", description: "We leave the property in habitable condition — clean enough to furnish and move straight in." },
                ]}
            />

            <Testimonials3D
                heading="Developer & Homeowner Reviews"
                subtitle="Post-construction cleaning trusted by builders and homeowners."
                testimonials={[
                    { name: "Paul Davidson", username: "@pauld", body: "After a six-month renovation, the flat was unrecognisable. Voila had it sparkling in a single day.", img: "https://randomuser.me/api/portraits/men/41.jpg", country: "Notting Hill" },
                    { name: "Laura Shah", username: "@lauras", body: "We use Voila for all our new-build handovers. Spotless, move-in ready every time.", img: "https://randomuser.me/api/portraits/women/45.jpg", country: "London" },
                    { name: "Benjamin Cross", username: "@benc", body: "Post-renovation clean was flawless. Construction dust, paint residue — all gone in one session.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Fulham" },
                    { name: "James Harrington", username: "@jamesh", body: "After-builders clean was spotless. Saved us days of work before client handover.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Canary Wharf" },
                    { name: "Fiona Grant", username: "@fionag", body: "Kitchen refit left dust everywhere. They cleaned the entire flat, not just the kitchen.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Dulwich" },
                    { name: "Steve Allen", username: "@stevea", body: "Loft conversion dust got into every room. Voila cleaned the whole house thoroughly.", img: "https://randomuser.me/api/portraits/men/85.jpg", country: "Hackney" },
                    { name: "Nina Smirnova", username: "@ninas", body: "New extension looked like a building site. One day with Voila and it was move-in ready.", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Wandsworth" },
                    { name: "Tom Richards", username: "@tomr", body: "Paint splashes on the floors, cement dust on windows — they handled all of it professionally.", img: "https://randomuser.me/api/portraits/men/61.jpg", country: "Islington" },
                    { name: "Hannah Cole", username: "@hannahc", body: "Developer-grade clean for our 12-unit block. Every flat was spotless for handover.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "Greenwich" },
                    { name: "Robert Kim", username: "@robertk", body: "Industrial equipment, specialist products, and attention to detail. Exactly what we needed.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Battersea" },
                ]}
            />

            <section className="py-20 bg-[#F7F7F5]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                        Just Finished Building Work?
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-8 max-w-lg mx-auto">
                        Let us handle the cleanup. Fast turnaround, professional results.
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

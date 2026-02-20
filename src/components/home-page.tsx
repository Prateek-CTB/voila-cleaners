"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Star, ArrowRight, Home, Building2, KeyRound, Landmark, BellRing, Briefcase, Plane, HardHat, ClipboardCheck, ShieldCheck, Clock, Search } from "lucide-react"
import { Testimonials3D } from "@/components/ui/testimonials-3d"
import { PostcodeModal } from "@/components/ui/postcode-modal"
import { PostcodeInput } from "@/components/ui/postcode-input"
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor"
import { ScrollServices } from "@/components/ui/scroll-services"

// ── Data ─────────────────────────────────────────────────────────
const residentialServices = [
    {
        title: "Luxury Housekeeping",
        desc: "Regular and bespoke housekeeping for high-value homes. Tailored schedules, premium products, five-star standards.",
        bg: "bg-[#FFF9F0]",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fit=crop",
        href: "/services/luxury-housekeeping",
    },
    {
        title: "Deep Cleaning",
        desc: "Comprehensive top-to-bottom cleaning for seasonal refresh, post-renovation, or property preparation.",
        bg: "bg-[#F0F5FF]",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&fit=crop",
        href: "/services/deep-cleaning",
    },
    {
        title: "End of Tenancy",
        desc: "Move-out cleaning to deposit-back standards. Agency-approved checklists, guaranteed results.",
        bg: "bg-[#F0FFF5]",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80&fit=crop",
        href: "/services/end-of-tenancy",
    },
    {
        title: "Residential Cleaning",
        desc: "Flexible regular cleaning for busy households. Same cleaner every visit, no contracts.",
        bg: "bg-[#FFF0F5]",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80&fit=crop",
        href: "/services/residential-cleaning",
    },
]

const commercialServices = [
    {
        title: "Office Cleaning",
        desc: "Professional cleaning for workplaces, co-working spaces, and executive suites. After-hours scheduling.",
        bg: "bg-[#F0F5FF]",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop",
        href: "/services/commercial-cleaning",
    },
    {
        title: "Serviced Apartments",
        desc: "Fast turnover cleaning for Airbnb, corporate lets, and serviced apartments. Guest-ready guaranteed.",
        bg: "bg-[#FFF9F0]",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&fit=crop",
        href: "/services/serviced-apartments",
    },
    {
        title: "Retail & Showroom",
        desc: "Maintain brand-grade presentation for retail stores, galleries, and hospitality venues.",
        bg: "bg-[#FFF0F5]",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80&fit=crop",
        href: "/services/retail-cleaning",
    },
    {
        title: "After-Builders Clean",
        desc: "Specialist post-construction cleaning. Industrial-grade equipment, residential-grade finish.",
        bg: "bg-[#F0FFF5]",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop",
        href: "/services/after-builders",
    },
]

const faqs = [
    { q: "Can I reschedule or cancel a booking?", a: "Yes — cancel or reschedule with 24 hours notice at no charge." },
    { q: "Do you bring your own cleaning supplies?", a: "Yes. We arrive fully equipped with premium-grade, eco-conscious products." },
    { q: "Are your cleaners vetted and insured?", a: "Every cleaner is background-checked, reference-verified, and fully insured." },
    { q: "What happens if I'm not satisfied?", a: "We offer a re-clean guarantee within 48 hours — at no extra cost." },
    { q: "How do I get a quote?", a: "Complete the form or call us directly. We respond within 24 hours." },
]

const clientTypes = [
    { label: "Luxury Homeowners", icon: <Home className="size-5" strokeWidth={1.5} /> },
    { label: "Property Managers", icon: <Building2 className="size-5" strokeWidth={1.5} /> },
    { label: "Landlords", icon: <KeyRound className="size-5" strokeWidth={1.5} /> },
    { label: "Estate Agents", icon: <Landmark className="size-5" strokeWidth={1.5} /> },
    { label: "Serviced Apt Hosts", icon: <BellRing className="size-5" strokeWidth={1.5} /> },
    { label: "Corporate Offices", icon: <Briefcase className="size-5" strokeWidth={1.5} /> },
    { label: "Relocation Clients", icon: <Plane className="size-5" strokeWidth={1.5} /> },
    { label: "Developers", icon: <HardHat className="size-5" strokeWidth={1.5} /> },
]

const trustCards = [
    { icon: <ClipboardCheck className="size-6 text-[#1a1a1a]" strokeWidth={1.5} />, title: "Precision Cleaning Systems", desc: "Structured 50-point checklists and repeatable processes for a consistent, verifiable clean every visit." },
    { icon: <ShieldCheck className="size-6 text-[#1a1a1a]" strokeWidth={1.5} />, title: "Vetted & Trained Staff", desc: "Background-checked, insured, and trained to uphold Voila's exacting professional standards." },
    { icon: <Clock className="size-6 text-[#1a1a1a]" strokeWidth={1.5} />, title: "Discreet, Reliable Service", desc: "Punctual, polite, and respectful of your home, schedule, and privacy." },
]

const voilaTestimonials = [
    { name: "Sarah Mitchell", username: "@sarahm", body: "Voila transformed the way I think about home maintenance. Discreet, thorough, and consistently excellent.", img: "https://randomuser.me/api/portraits/women/32.jpg", country: "Chelsea" },
    { name: "Michael Tran", username: "@michaelt", body: "We manage 40+ properties and Voila handles all turnovers. Consistent, fast, zero complaints from guests.", img: "https://randomuser.me/api/portraits/men/51.jpg", country: "Kensington" },
    { name: "Rebecca Lane", username: "@rebeccal", body: "Our office has never looked better. The team adapted to our odd hours without any fuss.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "Mayfair" },
    { name: "James Harrington", username: "@jamesh", body: "After-builders clean was spotless. Saved us days of work before client handover.", img: "https://randomuser.me/api/portraits/men/22.jpg", country: "Canary Wharf" },
    { name: "Priya Sharma", username: "@priyas", body: "End of tenancy clean got our full deposit back. Agency approved on first inspection!", img: "https://randomuser.me/api/portraits/women/53.jpg", country: "Islington" },
    { name: "Oliver Chen", username: "@oliverc", body: "Luxury housekeeping that actually feels luxurious. Same cleaner every week — they know every detail.", img: "https://randomuser.me/api/portraits/men/33.jpg", country: "Belgravia" },
    { name: "Emma Thornton", username: "@emmat", body: "As an Airbnb host, turnover speed is everything. Voila's team is always on time and thorough.", img: "https://randomuser.me/api/portraits/women/45.jpg", country: "Shoreditch" },
    { name: "David Okonkwo", username: "@davido", body: "Our showroom is always presentation-ready. Clients comment on how immaculate it looks.", img: "https://randomuser.me/api/portraits/men/85.jpg", country: "King's Road" },
    { name: "Charlotte Reid", username: "@charlotter", body: "Deep clean before Christmas was exceptional. Every corner, every surface — absolutely spotless.", img: "https://randomuser.me/api/portraits/women/44.jpg", country: "Hampstead" },
    { name: "Thomas Webber", username: "@thomasw", body: "Managing serviced apartments is stressful enough. Voila takes cleaning completely off my plate.", img: "https://randomuser.me/api/portraits/men/61.jpg", country: "Marylebone" },
    { name: "Sophia Aldridge", username: "@sophiaa", body: "They treat our home like their own. The attention to detail is what keeps us loyal.", img: "https://randomuser.me/api/portraits/women/65.jpg", country: "Notting Hill" },
    { name: "Benjamin Cross", username: "@benc", body: "Post-renovation clean was flawless. Construction dust, paint residue — all gone in one session.", img: "https://randomuser.me/api/portraits/men/41.jpg", country: "Fulham" },
    { name: "Rachel Kim", username: "@rachelk", body: "I've used three other services before. Voila is the first one I've actually kept beyond a month.", img: "https://randomuser.me/api/portraits/women/29.jpg", country: "Clapham" },
    { name: "Henry Blackwell", username: "@henryb", body: "Our co-working space needs daily cleans. Voila is punctual, professional, and invisible.", img: "https://randomuser.me/api/portraits/men/76.jpg", country: "Soho" },
    { name: "Amelia Foster", username: "@ameliaf", body: "Moving out of a 4-bed flat was daunting. Their end-of-tenancy service made it painless.", img: "https://randomuser.me/api/portraits/women/12.jpg", country: "Battersea" },
]

const HERO_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90&fit=crop"

const heroServiceCards = [
    { label: "Luxury Housekeeping", tag: "View service", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80&fit=crop", href: "/services/luxury-housekeeping", bg: "bg-[#e8dfd3]" },
    { label: "Deep Cleaning", tag: "View service", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&fit=crop", href: "/services/deep-cleaning", bg: "bg-[#c9e4de]" },
    { label: "Office Cleaning", tag: "Join our clients", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&fit=crop", href: "/services/commercial-cleaning", bg: "bg-[#d4dce8]" },
    { label: "Serviced Apartments", tag: "View service", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80&fit=crop", href: "/services/serviced-apartments", bg: "bg-[#e8d4d4]" },
]

// ── Component ────────────────────────────────────────────────────
export default function HomePage() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null)
    const [postcode, setPostcode] = useState("")
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <PostcodeModal isOpen={showModal} onClose={() => setShowModal(false)} postcode={postcode} />
            {/* ════════════════════════════════════════════════════════════
          1. HERO — Magazine-style with image overlay + service cards
      ════════════════════════════════════════════════════════════ */}
            <section className="pt-16 sm:pt-20 bg-[#F7F7F5] overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-4 sm:pb-6">
                    {/* Main hero image with overlay */}
                    <div className="relative w-full rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.12)] aspect-[16/9] sm:aspect-[16/7]">
                        <Image src={HERO_IMG} alt="Luxury London interior maintained by Voila Cleaners" fill priority className="object-cover" sizes="100vw" />
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                        {/* Curved decorative text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                            <p className="text-white/[0.07] text-[clamp(3rem,12vw,10rem)] font-bold tracking-tight whitespace-nowrap absolute top-[10%] -right-[5%] rotate-[-8deg]">
                                precision · discretion · excellence
                            </p>
                            <p className="text-white/[0.06] text-[clamp(2rem,8vw,6rem)] font-bold tracking-tight whitespace-nowrap absolute bottom-[8%] -left-[3%] rotate-[4deg]">
                                five-star cleaning standards while reducing stress
                            </p>
                        </div>

                        {/* Text content overlaid on image */}
                        <div className="absolute inset-0 flex flex-col justify-end sm:justify-center px-4 sm:px-8 md:px-14 lg:px-16 pb-4 sm:pb-0">
                            <span className="hidden sm:inline-flex self-start items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1.5 text-xs font-medium text-[#1a1a1a] shadow-sm mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                Premium Cleaning Services London
                            </span>
                            <h1 className="text-[clamp(1.4rem,4.5vw,4.2rem)] font-bold tracking-tight leading-[1.1] text-white max-w-2xl mb-1 sm:mb-4">
                                Achieve excellence in<br />
                                home, office, and property.
                            </h1>
                            <p className="text-xs sm:text-sm md:text-[15px] text-white/80 leading-relaxed max-w-lg mb-0">
                                Voila Cleaners delivers high-end domestic and commercial cleaning across London.
                            </p>
                        </div>

                        {/* Floating stats */}
                        <div className="hidden lg:block absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-5 py-3 border border-white/60">
                            <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
                            <p className="text-xs font-semibold text-[#1a1a1a]">5-Star Standards</p>
                        </div>
                        <div className="hidden lg:block absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-5 py-3 border border-white/60">
                            <p className="text-xs font-semibold text-[#1a1a1a]">Background-Checked</p>
                            <p className="text-xs text-[#6b6b6b] mt-0.5">Professionals</p>
                        </div>
                    </div>

                    {/* Service preview cards row — like the yoga reference */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-3 sm:mt-5">
                        {heroServiceCards.map((c, i) => (
                            <Link key={i} href={c.href} className="group">
                                <div className={`${c.bg} rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-all`}>
                                    <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] overflow-hidden">
                                        <Image src={c.image} alt={c.label} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" sizes="(max-width:1024px)50vw,25vw" />
                                        {/* Tag pill on image */}
                                        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-sm text-[9px] sm:text-[10px] font-medium text-[#1a1a1a] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-sm">
                                            {c.tag}
                                        </span>
                                        {/* Arrow icon */}
                                        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 w-5 h-5 sm:w-7 sm:h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                                            <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                        </span>
                                    </div>
                                    <div className="p-2 sm:p-4">
                                        <p className="font-semibold text-[11px] sm:text-sm text-[#1a1a1a]">{c.label}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* CTA strip below cards */}
                    <div className="mt-3 sm:mt-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 max-w-xl mx-auto">
                        <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Enter your postcode e.g. SW1A 1AA"
                            onKeyDown={(e) => { if (e.key === "Enter" && postcode.trim()) setShowModal(true) }}
                            className="flex-1 w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-[#e8e5df] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 shadow-sm" />
                        <button
                            onClick={() => { if (postcode.trim()) setShowModal(true) }}
                            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors whitespace-nowrap shadow-sm cursor-pointer">
                            <Search className="size-4" strokeWidth={2} />
                            Find a Cleaner
                        </button>
                    </div>
                    <div className="hidden sm:flex items-center justify-center gap-4 mt-5 mb-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a1a] hover:text-[#555] transition-colors group">
                            <Search className="size-4" strokeWidth={1.5} />
                            <span className="group-hover:underline underline-offset-4">Find a Cleaner</span>
                        </Link>
                        <span className="text-[#d4d0c8]">|</span>
                        <p className="text-xs text-[#6b6b6b]">Trusted by 500+ London homeowners</p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
          2. WHY VOILA — Interactive showcase
      ════════════════════════════════════════════════════════════ */}
            <ConnoisseurStackInteractor />

            {/* ════════════════════════════════════════════════════════════
          3. WHO WE SERVE — Avatar Grid
      ════════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-[#F7F7F5]">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-12">Who We Serve</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {clientTypes.map((c, i) => (
                            <div key={i} className="flex flex-col items-center gap-2.5 group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-white border border-[#e0dcd6] shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#1a1a1a] group-hover:scale-110 group-hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] group-hover:border-[#ccc] transition-all duration-300">{c.icon}</div>
                                <span className="text-xs font-medium text-[#6b6b6b] group-hover:text-[#1a1a1a] transition-colors max-w-[80px] text-center leading-tight">{c.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
          4. SERVICES — Scroll-driven Residential / Commercial
      ════════════════════════════════════════════════════════════ */}
            <ScrollServices residential={residentialServices} commercial={commercialServices} />

            {/* ════════════════════════════════════════════════════════════
          5. STATS BAR
      ════════════════════════════════════════════════════════════ */}


            {/* ════════════════════════════════════════════════════════════
          6. PROCESS — How it Works
      ════════════════════════════════════════════════════════════ */}
            <section id="process" className="py-24 bg-[#F7F7F5]">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div className="lg:sticky lg:top-24">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-4">
                            Simple. Structured.<br /><span className="text-[#9a9a9a]">Reliable.</span>
                        </h2>
                        <p className="text-[15px] text-[#6b6b6b] leading-relaxed max-w-sm">
                            Our process is designed to take the stress out of cleaning. From first enquiry to ongoing service — we handle everything.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#ede9e3]" />
                        <div className="space-y-8">
                            {[
                                { n: "01", title: "Enquire", desc: "Share your requirements through our form, phone, or email. We respond within 24 hours." },
                                { n: "02", title: "Bespoke Proposal", desc: "We design a cleaning plan tailored to your property — scope, frequency, and special instructions." },
                                { n: "03", title: "Meet Your Team", desc: "We assign dedicated, vetted professionals. You'll see the same familiar faces every visit." },
                                { n: "04", title: "Consistent Excellence", desc: "Every session follows our structured checklist. Quality checks ensure standards never slip." },
                            ].map((s, i) => (
                                <div key={i} className="relative pl-12">
                                    <div className="absolute left-0 top-1 w-[31px] h-[31px] rounded-full bg-white border-2 border-[#ede9e3] flex items-center justify-center z-10">
                                        <span className="text-[10px] font-bold text-[#1a1a1a]">{s.n}</span>
                                    </div>
                                    <div className="bg-white rounded-[16px] border border-[#ede9e3] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                                        <h3 className="font-semibold text-sm text-[#1a1a1a] mb-2">{s.title}</h3>
                                        <p className="text-sm text-[#6b6b6b] leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
          7. TESTIMONIALS — 3D Marquee
      ════════════════════════════════════════════════════════════ */}
            <Testimonials3D
                heading="What Our Clients Say"
                subtitle="Trusted by homeowners, landlords, property managers, and businesses across London."
                testimonials={voilaTestimonials}
            />

            {/* ════════════════════════════════════════════════════════════
          8. FAQ + QUOTE FORM
      ════════════════════════════════════════════════════════════ */}
            <section id="faq" className="py-24 bg-[#F7F7F5]">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-4">
                            Experience<br />Cleaning Done<br /><span className="text-[#9a9a9a]">Properly.</span>
                        </h2>
                        <p className="text-[15px] text-[#6b6b6b] mb-10 leading-relaxed max-w-sm">
                            Common questions answered. If you need more detail, just get in touch.
                        </p>
                        <div className="divide-y divide-[#ede9e3]">
                            {faqs.map((f, i) => (
                                <div key={i}>
                                    <button className="w-full flex items-start justify-between py-4 text-left gap-4 group" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                                        <span className="text-sm font-medium text-[#1a1a1a] leading-snug group-hover:text-[#444]">{f.q}</span>
                                        <span className="text-lg text-[#9a9a9a] shrink-0 mt-[-2px]">{faqOpen === i ? "−" : "+"}</span>
                                    </button>
                                    {faqOpen === i && <p className="pb-4 text-sm text-[#6b6b6b] leading-relaxed">{f.a}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="contact" className="relative rounded-[24px] p-[2px]"
                        style={{ background: "linear-gradient(135deg, #f4a5c0 0%, #b5d5f5 50%, #a5e6c0 100%)" }}>
                        <div className="bg-white rounded-[22px] p-8">
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">Request Your Premium Cleaning Quote</h3>
                            <p className="text-sm text-[#6b6b6b] mb-6">Fast response · No commitment</p>
                            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" placeholder="First Name" className="px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                    <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                </div>
                                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                <PostcodeInput required />
                                <select defaultValue="" className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm text-[#444] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15">
                                    <option value="" disabled>Service Type</option>
                                    {["Housekeeping", "Deep Clean", "End of Tenancy", "Office Cleaning", "Serviced Apt", "After-Builders", "Retail"].map(t => <option key={t}>{t}</option>)}
                                </select>
                                <textarea placeholder="Message (optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15 resize-none" />
                                <button type="submit" className="w-full py-3.5 text-sm font-semibold rounded-xl bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors shadow-sm mt-1">Submit Enquiry</button>
                            </form>
                            <p className="text-xs text-center text-[#9a9a9a] mt-4">We respond within 24 hours. No hard sell.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
          9. FINAL CTA
      ════════════════════════════════════════════════════════════ */}
            <section className="py-28 bg-[#F7F7F5] relative overflow-hidden">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-32 h-32 rounded-[20px] bg-white border border-[#ede9e3] shadow-sm rotate-6 hidden lg:block" />
                <div className="absolute -right-8 top-1/3 w-24 h-24 rounded-[20px] bg-white border border-[#ede9e3] shadow-sm -rotate-6 hidden lg:block" />
                <div className="absolute left-20 bottom-10 w-16 h-16 rounded-2xl bg-amber-50 border border-[#ede9e3] shadow-sm rotate-12 hidden lg:block" />
                <div className="absolute right-24 bottom-16 w-20 h-20 rounded-2xl bg-blue-50 border border-[#ede9e3] shadow-sm -rotate-3 hidden lg:block" />
                <div className="relative max-w-2xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-8">
                        <div className="flex -space-x-3">
                            {["L", "H", "B", "D"].map((l, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-[#F7F7F5] flex items-center justify-center text-xs font-bold text-[#6b6b6b] shadow-sm">{l}</div>
                            ))}
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-4">
                        Ready to Experience<br />Five-Star Cleaning<br />Standards?
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-10 max-w-lg mx-auto">Partner with a professional team that understands presentation, discretion, and detail.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                        <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter" && postcode.trim()) setShowModal(true) }}
                            placeholder="Enter your postcode e.g. SW1A 1AA"
                            className="flex-1 px-5 py-3 rounded-full border border-[#ede9e3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 shadow-sm" />
                        <button onClick={() => { if (postcode.trim()) setShowModal(true) }}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors whitespace-nowrap shadow-sm cursor-pointer">
                            <Search className="size-4" strokeWidth={2} />
                            Find a Cleaner
                        </button>
                    </div>
                    <p className="text-xs text-[#9a9a9a] mt-5">500+ clients across London trust Voila Cleaners</p>
                </div>
            </section>
        </>
    )
}

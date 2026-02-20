"use client"

import Image from "next/image"
import { useState } from "react"

// Section 5 — 2x2 Feature Cards (mirrors "We've done the hard part" section)
const tabs = ["Residential", "Commercial"]

const cards = [
    {
        title: "Luxury Housekeeping Services",
        desc: "Regular and bespoke housekeeping designed to maintain high-value homes with precision and care.",
        bg: "bg-[#FFF9F0]",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&fit=crop",
        imgAlt: "Luxury living room",
    },
    {
        title: "Deep Cleaning Services",
        desc: "Comprehensive, top-to-bottom cleaning for seasonal refresh, post-renovation, or property preparation.",
        bg: "bg-[#F0F5FF]",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80&fit=crop",
        imgAlt: "Deep cleaning in progress",
    },
    {
        title: "Commercial & Office Cleaning",
        desc: "Professional cleaning solutions tailored to modern workplaces and executive offices.",
        bg: "bg-[#F0FFF5]",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop",
        imgAlt: "Modern clean office",
    },
    {
        title: "Serviced Apartment Turnover Cleaning",
        desc: "Fast, structured turnover cleaning to maintain five-star guest standards across every stay.",
        bg: "bg-[#FFF0F5]",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&fit=crop",
        imgAlt: "Serviced apartment bedroom",
    },
]

export function FeatureCards() {
    const [active, setActive] = useState(0)

    return (
        <section id="services" className="py-24 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-3">
                        We've Done the Hard Work,<br />So You Don't Have To.
                    </h2>
                    <p className="text-[#6b6b6b] text-[15px] mb-8 max-w-lg mx-auto">
                        Structured systems, trained professionals, and a relentless focus on quality — across every service we offer.
                    </p>

                    {/* Toggle pills */}
                    <div className="inline-flex bg-white border border-[#ede9e3] rounded-full p-1 gap-1 shadow-sm">
                        {tabs.map((t, i) => (
                            <button key={t} onClick={() => setActive(i)}
                                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${active === i
                                        ? "bg-[#1a1a1a] text-white shadow-sm"
                                        : "text-[#6b6b6b] hover:text-[#1a1a1a]"
                                    }`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2x2 card grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                    {cards.map((c, i) => (
                        <div key={i}
                            className={`${c.bg} rounded-[24px] border border-[#ede9e3] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-shadow`}>
                            {/* Image */}
                            <div className="relative w-full h-[220px] overflow-hidden">
                                <Image src={c.image} alt={c.imgAlt} fill className="object-cover object-center" sizes="(max-width: 640px) 90vw, 45vw" />
                            </div>
                            {/* Text */}
                            <div className="p-6">
                                <h3 className="font-semibold text-[15px] text-[#1a1a1a] mb-2">{c.title}</h3>
                                <p className="text-sm text-[#6b6b6b] leading-relaxed">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

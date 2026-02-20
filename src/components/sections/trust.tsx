"use client"

import { ClipboardCheck, ShieldCheck, Clock } from "lucide-react"

// Section 3 — Trust Positioning (mirrors "Because creative work" section)
const cards = [
    {
        icon: <ClipboardCheck className="size-6 text-[#1a1a1a]" strokeWidth={1.5} />,
        title: "Precision Cleaning Systems",
        desc: "Structured 50-point checklists and repeatable processes ensure a consistent, verifiable clean every visit.",
    },
    {
        icon: <ShieldCheck className="size-6 text-[#1a1a1a]" strokeWidth={1.5} />,
        title: "Vetted & Professionally Trained Staff",
        desc: "Every cleaner is background-checked, insured, and trained to uphold Voila's exacting professional standards.",
    },
    {
        icon: <Clock className="size-6 text-[#1a1a1a]" strokeWidth={1.5} />,
        title: "Discreet, Reliable Service",
        desc: "We work around you. Punctual, polite, and respectful of your home, schedule, and privacy.",
    },
]

export function TrustCards() {
    return (
        <section className="py-24 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Top row: large heading left / paragraph right */}
                <div className="grid lg:grid-cols-2 gap-10 mb-14 items-start">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#1a1a1a]">
                        London's Trusted<br />
                        Luxury Cleaning<br />
                        Company.
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] leading-relaxed pt-2 max-w-lg">
                        We are not a volume-based cleaning agency. We are a{" "}
                        <strong className="text-[#1a1a1a] font-semibold">detail-driven professional cleaning service</strong>{" "}
                        built for high-end residential properties, serviced apartments, and corporate environments.
                        When clients search for premium cleaning, they choose Voila Cleaners — because we deliver consistency, discretion, and measurable results.
                    </p>
                </div>

                {/* 3 equal cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {cards.map((c, i) => (
                        <div key={i}
                            className="bg-white rounded-[20px] border border-[#ede9e3] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow">
                            <div className="mb-4">{c.icon}</div>
                            <h3 className="font-semibold text-[15px] text-[#1a1a1a] mb-2">{c.title}</h3>
                            <p className="text-sm text-[#6b6b6b] leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { Check } from "lucide-react"

const reasons = [
    "Professionally trained & background-checked staff",
    "Structured cleaning systems & quality control",
    "Discreet and respectful service",
    "Flexible scheduling",
    "Premium-grade products and equipment",
    "Dedicated client communication",
]

const values = [
    { label: "500+", sub: "Happy clients" },
    { label: "5★", sub: "Average rating" },
    { label: "100%", sub: "Insured & vetted" },
    { label: "24h", sub: "Response time" },
]

export function Features() {
    return (
        <section className="py-24 lg:py-32 border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT */}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">Why Choose Us</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                            Why Voila<br />
                            <span className="text-muted-foreground">Cleaners?</span>
                        </h2>
                        <ul className="space-y-4 mb-10">
                            {reasons.map((r, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-foreground">{r}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-muted-foreground border-l-2 border-border pl-4 leading-relaxed italic">
                            "We focus on long-term client relationships, not one-off transactions."
                        </p>
                    </div>

                    {/* RIGHT — Stats grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {values.map((v, i) => (
                            <div key={i} className="rounded-2xl border border-border p-8 text-center hover:bg-muted/30 transition-colors">
                                <p className="text-4xl font-bold tracking-tight mb-1">{v.label}</p>
                                <p className="text-sm text-muted-foreground">{v.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

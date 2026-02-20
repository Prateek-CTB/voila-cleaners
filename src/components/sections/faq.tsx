"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
    {
        q: "What areas in London do you cover?",
        a: "We provide premium cleaning services across Central London and surrounding areas. Contact us to confirm coverage in your specific location.",
    },
    {
        q: "Are your cleaners vetted and insured?",
        a: "Yes. All our cleaners are background-checked, insured, and trained to meet our premium service standards before working in any client property.",
    },
    {
        q: "Do you offer one-off and regular cleaning?",
        a: "Yes. We provide both scheduled housekeeping on a weekly or fortnightly basis and one-time deep cleaning services for specific needs.",
    },
    {
        q: "Do you bring your own cleaning equipment?",
        a: "Yes. Our team arrives fully equipped with professional-grade, eco-conscious cleaning products and tools — no preparation required on your part.",
    },
    {
        q: "How do I get a quote?",
        a: "Simply contact us via phone or complete the online enquiry form. We aim to respond within 24 hours with a tailored proposal.",
    },
]

export function Faq() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <section className="py-24 lg:py-32 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                {/* LEFT */}
                <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">FAQ</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                        Frequently<br />Asked<br />
                        <span className="text-muted-foreground">Questions.</span>
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mt-4">
                        Can't find what you're looking for? Reach out to our team directly.
                    </p>
                    <Link href="/contact"
                        className="group inline-flex items-center gap-2 text-sm font-medium mt-6 hover:text-muted-foreground transition-colors">
                        Contact us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* RIGHT — Accordion */}
                <div className="divide-y divide-border">
                    {faqs.map((faq, i) => (
                        <div key={i}>
                            <button
                                className="w-full flex items-start justify-between py-5 text-left gap-4"
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                            >
                                <span className="text-sm font-medium leading-snug">{faq.q}</span>
                                {open === i
                                    ? <Minus className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                                    : <Plus className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                                }
                            </button>
                            {open === i && (
                                <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

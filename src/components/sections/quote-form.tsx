"use client"

// Section 6 — Quote Form + FAQ (mirrors "Reserve username" section)
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { PostcodeInput } from "@/components/ui/postcode-input"

const faqs = [
    {
        q: "Can I reschedule or cancel a booking?",
        a: "Yes — cancel or reschedule with 24 hours notice at no charge. We accommodate flexible arrangements.",
    },
    {
        q: "Do you bring your own cleaning supplies?",
        a: "Yes. All professionals arrive fully equipped with premium-grade, eco-conscious products and tools.",
    },
    {
        q: "Are your cleaners vetted and insured?",
        a: "Absolutely. Every cleaner is background-checked, reference-verified, and fully insured.",
    },
    {
        q: "What happens if I'm not satisfied?",
        a: "We offer a re-clean guarantee within 48 hours — at no extra cost. Your satisfaction is non-negotiable.",
    },
    {
        q: "How do I get a quote?",
        a: "Simply complete the form or call us directly. We respond within 24 hours with a tailored proposal.",
    },
]

const propertyTypes = ["Flat / Apartment", "House", "Penthouse", "Commercial Office", "Serviced Apartment", "Other"]
const serviceTypes = ["Regular Housekeeping", "One-off Deep Clean", "End of Tenancy", "Commercial Cleaning", "Serviced Apt Turnover", "After Builders Clean"]

export function QuoteForm() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

                {/* LEFT — Heading + FAQ Accordion */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-4">
                        Experience<br />
                        Cleaning Done<br />
                        <span className="text-[#9a9a9a]">Properly.</span>
                    </h2>
                    <p className="text-[15px] text-[#6b6b6b] mb-10 leading-relaxed max-w-sm">
                        Stop settling for average. Partner with a professional team that understands presentation, discretion, and detail.
                    </p>

                    <div className="divide-y divide-[#ede9e3]">
                        {faqs.map((faq, i) => (
                            <div key={i}>
                                <button
                                    className="w-full flex items-start justify-between py-4 text-left gap-4 group"
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                >
                                    <span className="text-sm font-medium text-[#1a1a1a] leading-snug group-hover:text-[#444] transition-colors">
                                        {faq.q}
                                    </span>
                                    {open === i
                                        ? <Minus className="w-4 h-4 text-[#9a9a9a] shrink-0 mt-0.5" />
                                        : <Plus className="w-4 h-4 text-[#9a9a9a] shrink-0 mt-0.5" />
                                    }
                                </button>
                                {open === i && (
                                    <p className="pb-4 text-sm text-[#6b6b6b] leading-relaxed">{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT — Gradient-border Form Card */}
                <div id="contact"
                    className="relative rounded-[24px] p-[2px]"
                    style={{
                        background: "linear-gradient(135deg, #f4a5c0 0%, #b5d5f5 50%, #a5e6c0 100%)",
                    }}
                >
                    <div className="bg-white rounded-[22px] p-8">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">
                            Request Your Premium Cleaning Quote
                        </h3>
                        <p className="text-sm text-[#6b6b6b] mb-6">Fast response · No commitment</p>

                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-3">
                                <input type="text" placeholder="First Name"
                                    className="px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                <input type="text" placeholder="Last Name"
                                    className="px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                            </div>
                            <input type="email" placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                            <input type="tel" placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                            <PostcodeInput required />
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm text-[#444] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15">
                                <option value="" disabled selected>Service Type</option>
                                {serviceTypes.map(t => <option key={t}>{t}</option>)}
                            </select>
                            <textarea placeholder="Message (optional)" rows={3}
                                className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15 resize-none" />
                            <button type="submit"
                                className="w-full py-3.5 text-sm font-semibold rounded-xl bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors shadow-sm mt-1">
                                Submit Enquiry
                            </button>
                        </form>

                        <p className="text-xs text-center text-[#9a9a9a] mt-4">
                            We respond within 24 hours. No hard sell.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

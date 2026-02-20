"use client"

import { Navbar } from "@/components/layout/navbar"
import { PageHero } from "@/components/ui/page-hero"
import { Footer } from "@/components/layout/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { PostcodeInput } from "@/components/ui/postcode-input"
import { useState } from "react"

const propertyTypes = ["Flat / Apartment", "House", "Penthouse", "Commercial Office", "Serviced Apartment", "Retail / Showroom", "Other"]
const serviceTypes = ["Regular Housekeeping", "One-off Deep Clean", "End of Tenancy", "Commercial Cleaning", "Serviced Apt Turnover", "After-Builders Clean", "Retail / Showroom"]

const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@voilacleaners.co.uk", href: "mailto:hello@voilacleaners.co.uk" },
    { icon: Phone, label: "Phone", value: "020 7112 9177", href: "tel:+442071129177" },
    { icon: MapPin, label: "Address", value: "34 Bloomsbury Street, London WC1B 3QJ", href: "https://maps.google.com/?q=34+Bloomsbury+Street+London+WC1B+3QJ" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
]

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />

            <PageHero
                badge="Get In Touch"
                title="Let's Talk About"
                titleAccent="Your Property."
                subtitle="Whether you need a one-off deep clean or an ongoing partnership, we're here to help. Tell us about your requirements and we'll respond within 24 hours."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact", href: "/contact" },
                ]}
            />

            <section id="contact" className="py-16 bg-[#F7F7F5]">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                    {/* LEFT — Contact info */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Contact Information</h2>
                        <div className="space-y-5 mb-10">
                            {contactInfo.map((c, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-[#ede9e3] flex items-center justify-center shadow-sm shrink-0">
                                        <c.icon className="w-4 h-4 text-[#1a1a1a]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9a9a9a] font-medium">{c.label}</p>
                                        {c.href ? (
                                            <a href={c.href} className="text-sm font-semibold text-[#1a1a1a] hover:underline">{c.value}</a>
                                        ) : (
                                            <p className="text-sm font-semibold text-[#1a1a1a]">{c.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ callout */}
                        <div className="bg-white rounded-[20px] border border-[#ede9e3] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                            <h3 className="font-semibold text-sm text-[#1a1a1a] mb-2">Have a Quick Question?</h3>
                            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-3">
                                Check our FAQ — we've answered the most common questions about our services, pricing, and process.
                            </p>
                            <a href="/#faq" className="text-sm font-semibold text-[#1a1a1a] underline underline-offset-4 hover:text-[#333]">
                                View FAQ →
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Gradient-border form */}
                    <div
                        className="relative rounded-[24px] p-[2px]"
                        style={{ background: "linear-gradient(135deg, #f4a5c0 0%, #b5d5f5 50%, #a5e6c0 100%)" }}
                    >
                        <div className="bg-white rounded-[22px] p-8">
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">
                                Request Your Premium Cleaning Quote
                            </h3>
                            <p className="text-sm text-[#6b6b6b] mb-6">Fast response · No commitment · No hard sell</p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="text-4xl mb-4">✓</div>
                                    <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">Thank You!</h4>
                                    <p className="text-sm text-[#6b6b6b]">We&apos;ll be in touch within 24 hours.</p>
                                </div>
                            ) : (
                                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" placeholder="First Name" required
                                            className="px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                        <input type="text" placeholder="Last Name" required
                                            className="px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                    </div>
                                    <input type="email" placeholder="Email Address" required
                                        className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                    <input type="tel" placeholder="Phone Number"
                                        className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15" />
                                    <PostcodeInput required />
                                    <select required
                                        className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm text-[#444] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15"
                                        defaultValue="">
                                        <option value="" disabled>Service Type</option>
                                        {serviceTypes.map(t => <option key={t}>{t}</option>)}
                                    </select>
                                    <textarea placeholder="Tell us about your property and requirements..." rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-[#ede9e3] bg-[#fafaf8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/15 resize-none" />
                                    <button type="submit"
                                        className="w-full py-3.5 text-sm font-semibold rounded-xl bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors shadow-sm mt-1">
                                        Submit Enquiry
                                    </button>
                                </form>
                            )}

                            <p className="text-xs text-center text-[#9a9a9a] mt-4">
                                We respond within 24 hours. Your details are kept private.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

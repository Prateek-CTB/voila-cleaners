"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { useState } from "react"

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90&fit=crop"

export function Hero() {
    const [email, setEmail] = useState("")

    return (
        <section className="pt-14 min-h-screen flex items-center bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6 py-20 w-full">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">

                    {/* ── LEFT ──────────────────────────────────── */}
                    <div className="flex flex-col gap-6">
                        {/* Badge */}
                        <span className="inline-flex self-start items-center gap-1.5 bg-white border border-[#e8e5df] rounded-full px-3 py-1 text-xs font-medium text-[#6b6b6b] shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            Premium Cleaning Services London
                        </span>

                        {/* Headline */}
                        <h1 className="text-[clamp(2.6rem,6vw,4.4rem)] font-bold tracking-tight leading-[1.0] text-[#1a1a1a]">
                            Premium<br />
                            Cleaning Services<br />
                            <span className="text-[#9a9a9a]">in London.</span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-lg font-semibold text-[#1a1a1a] -mt-2">
                            Discreet. Detailed. Exceptional.
                        </p>

                        {/* Body */}
                        <p className="text-[15px] text-[#6b6b6b] leading-relaxed max-w-[440px]">
                            Voila Cleaners delivers high-end domestic and commercial cleaning services across London for clients who expect nothing less than excellence.
                        </p>
                        <p className="text-[15px] text-[#6b6b6b] leading-relaxed max-w-[440px] -mt-3">
                            From luxury residences and penthouses to offices and serviced apartments, our trained professionals maintain your property to five-star standards.
                        </p>

                        {/* Email + CTA row */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full border border-[#e8e5df] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 shadow-sm"
                            />
                            <Link href="/book"
                                className="px-6 py-3 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors whitespace-nowrap shadow-sm">
                                Book Your Private Cleaning Consultation
                            </Link>
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-3 mt-1">
                            <div className="flex -space-x-2">
                                {["A", "B", "C", "D"].map((l, i) => (
                                    <div key={i}
                                        className="w-7 h-7 rounded-full bg-[#e8e5df] border-2 border-[#F7F7F5] flex items-center justify-center text-[9px] font-bold text-[#6b6b6b]">
                                        {l}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-[#6b6b6b]">
                                Trusted by London homeowners, landlords &amp; businesses
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT ─────────────────────────────────── */}
                    <div className="relative flex flex-col items-center">
                        {/* Main image card */}
                        <div className="relative w-full max-w-[500px] mx-auto rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)] aspect-[4/5]">
                            <Image
                                src={HERO_IMAGE}
                                alt="Luxury clean London interior maintained by Voila Cleaners"
                                fill
                                priority
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 90vw, 45vw"
                            />

                            {/* Floating badge — top right */}
                            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 border border-white/60">
                                <p className="text-xs font-semibold text-[#1a1a1a]">Background-Checked</p>
                                <p className="text-xs text-[#6b6b6b] mt-0.5">Professionals</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-4 py-3 border border-white/60">
                                <div className="flex gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-xs font-semibold text-[#1a1a1a]">5-Star Standards</p>
                            </div>
                        </div>

                        {/* Carousel dots */}
                        <div className="flex items-center gap-2 mt-5">
                            {[0, 1, 2].map((i) => (
                                <div key={i}
                                    className={`rounded-full transition-all ${i === 0 ? "w-5 h-2 bg-[#1a1a1a]" : "w-2 h-2 bg-[#d4d0cb]"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

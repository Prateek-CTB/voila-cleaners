import Link from "next/link"
import { useState } from "react"

// Section 7 — Final CTA (mirrors "Ready to join the next era" section)
export function FinalCta() {
    const [email, setEmail] = useState("")

    return (
        <section className="py-28 bg-[#F7F7F5] relative overflow-hidden">
            {/* Subtle decorative blobs — like the floating images in reference */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-32 h-32 rounded-[20px] bg-white border border-[#ede9e3] shadow-sm rotate-6 hidden lg:block" />
            <div className="absolute -right-8 top-1/3 w-24 h-24 rounded-[20px] bg-white border border-[#ede9e3] shadow-sm -rotate-6 hidden lg:block" />
            <div className="absolute left-20 bottom-10 w-16 h-16 rounded-2xl bg-amber-50 border border-[#ede9e3] shadow-sm rotate-12 hidden lg:block" />
            <div className="absolute right-24 bottom-16 w-20 h-20 rounded-2xl bg-blue-50 border border-[#ede9e3] shadow-sm -rotate-3 hidden lg:block" />

            <div className="relative max-w-2xl mx-auto px-6 text-center">
                {/* Avatars */}
                <div className="flex justify-center mb-8">
                    <div className="flex -space-x-3">
                        {["L", "H", "B", "D"].map((l, i) => (
                            <div key={i}
                                className="w-10 h-10 rounded-full bg-white border-2 border-[#F7F7F5] flex items-center justify-center text-xs font-bold text-[#6b6b6b] shadow-sm">
                                {l}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-4">
                    Ready to Experience<br />
                    Five-Star Cleaning<br />
                    Standards?
                </h2>
                <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-10 max-w-lg mx-auto">
                    Partner with a professional team that understands presentation, discretion, and detail.
                </p>

                {/* Email + CTA */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-5 py-3 rounded-full border border-[#ede9e3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 shadow-sm"
                    />
                    <Link href="#contact"
                        className="px-6 py-3 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors whitespace-nowrap shadow-sm">
                        Request Quote Today
                    </Link>
                </div>

                <p className="text-xs text-[#9a9a9a] mt-5">
                    500+ clients across London trust Voila Cleaners
                </p>
            </div>
        </section>
    )
}

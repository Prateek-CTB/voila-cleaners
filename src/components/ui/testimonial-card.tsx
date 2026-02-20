"use client"

import { Star } from "lucide-react"

interface Testimonial {
    quote: string
    name: string
    role: string
    rating?: number
}

interface TestimonialCardProps {
    testimonials: Testimonial[]
    heading?: string
}

export function TestimonialCards({ testimonials, heading }: TestimonialCardProps) {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                {heading && (
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] text-center mb-12">
                        {heading}
                    </h2>
                )}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <div key={i}
                            className="bg-white rounded-[20px] border border-[#ede9e3] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow relative overflow-hidden">
                            {/* Gradient left accent */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[20px]"
                                style={{
                                    background: `linear-gradient(180deg, ${["#f4a5c0", "#b5d5f5", "#a5e6c0", "#fcd9a5", "#c3b5f5", "#a5d5e6"][i % 6]
                                        } 0%, transparent 100%)`
                                }}
                            />

                            {/* Stars */}
                            {t.rating && (
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            )}

                            <p className="text-sm text-[#444] leading-relaxed mb-6 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#ede9e3] flex items-center justify-center text-xs font-bold text-[#6b6b6b]">
                                    {t.name.split(" ").map(w => w[0]).join("")}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#1a1a1a]">{t.name}</p>
                                    <p className="text-xs text-[#9a9a9a]">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

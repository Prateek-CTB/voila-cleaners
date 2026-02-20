"use client"

import Image from "next/image"

interface SplitFeatureProps {
    label?: string
    title: string
    description: string
    bullets?: string[]
    image: string
    imageAlt: string
    reverse?: boolean
    stat?: { value: string; label: string }
}

export function SplitFeature({
    label,
    title,
    description,
    bullets,
    image,
    imageAlt,
    reverse = false,
    stat,
}: SplitFeatureProps) {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "direction-rtl" : ""}`}>
                    {/* Text side */}
                    <div className={`${reverse ? "lg:order-2" : ""} flex flex-col gap-5`}>
                        {label && (
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#9a9a9a]">
                                {label}
                            </span>
                        )}
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
                            {title}
                        </h2>
                        <p className="text-[15px] text-[#6b6b6b] leading-relaxed max-w-lg">
                            {description}
                        </p>
                        {bullets && bullets.length > 0 && (
                            <ul className="space-y-3 mt-2">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[#444]">
                                        <span className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        </span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Image side */}
                    <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
                        <div className="relative rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] aspect-[4/3]">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 90vw, 45vw"
                            />
                        </div>

                        {/* Floating stat */}
                        {stat && (
                            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-[#ede9e3] px-5 py-3.5 z-10">
                                <p className="text-2xl font-bold text-[#1a1a1a] tracking-tight">{stat.value}</p>
                                <p className="text-xs text-[#6b6b6b]">{stat.label}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

export interface BentoItem {
    title: string
    description: string
    bg: string
    icon?: React.ReactNode
    image?: string
    imageAlt?: string
    href?: string
    span?: 1 | 2
}

interface BentoGridProps {
    heading?: string
    subtitle?: string
    items: BentoItem[]
}

export function BentoGrid({ heading, subtitle, items }: BentoGridProps) {
    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                {(heading || subtitle) && (
                    <div className="text-center mb-12">
                        {heading && (
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-3">
                                {heading}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-[15px] text-[#6b6b6b] max-w-lg mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                    {items.map((item, i) => {
                        const inner = (
                            <div
                                key={i}
                                className={`${item.bg} rounded-[24px] border border-[#ede9e3] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all ${item.span === 2 ? "sm:col-span-2" : ""
                                    } ${item.href ? "cursor-pointer group" : ""}`}
                            >
                                {/* Image top */}
                                {item.image && (
                                    <div className="relative w-full h-[200px] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.imageAlt || item.title}
                                            fill
                                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                            sizes="(max-width: 640px) 90vw, 45vw"
                                        />
                                    </div>
                                )}
                                {/* Content */}
                                <div className="p-7">
                                    {item.icon && (
                                        <span className="text-2xl mb-3 block">{item.icon}</span>
                                    )}
                                    <h3 className="font-semibold text-[15px] text-[#1a1a1a] mb-2 group-hover:text-[#333]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )

                        return item.href ? (
                            <Link key={i} href={item.href} className={item.span === 2 ? "sm:col-span-2" : ""}>
                                {inner}
                            </Link>
                        ) : (
                            <div key={i} className={item.span === 2 ? "sm:col-span-2" : ""}>
                                {inner}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

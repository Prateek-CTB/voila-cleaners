"use client"

import Link from "next/link"
import Image from "next/image"

interface PageHeroProps {
    badge?: string
    title: string
    titleAccent?: string
    subtitle: string
    breadcrumbs?: { label: string; href: string }[]
    cta?: { label: string; href: string }
    image?: string
    imageAlt?: string
}

export function PageHero({
    badge,
    title,
    titleAccent,
    subtitle,
    breadcrumbs,
    cta,
    image,
    imageAlt,
}: PageHeroProps) {
    return (
        <section className="relative pt-14 overflow-hidden bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-1.5 text-xs text-[#9a9a9a] mb-8">
                        {breadcrumbs.map((b, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                {i > 0 && <span>/</span>}
                                <Link href={b.href} className="hover:text-[#1a1a1a] transition-colors">
                                    {b.label}
                                </Link>
                            </span>
                        ))}
                    </nav>
                )}

                <div className={`grid ${image ? "lg:grid-cols-2 gap-12 items-center" : ""}`}>
                    <div>
                        {/* Badge */}
                        {badge && (
                            <span className="inline-flex items-center gap-1.5 bg-white border border-[#ede9e3] rounded-full px-3.5 py-1.5 text-xs font-medium text-[#6b6b6b] shadow-sm mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                {badge}
                            </span>
                        )}

                        {/* Heading */}
                        <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-bold tracking-tight leading-[1.05] text-[#1a1a1a] mb-5">
                            {title}
                            {titleAccent && (
                                <>
                                    <br />
                                    <span className="text-[#9a9a9a]">{titleAccent}</span>
                                </>
                            )}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[15px] text-[#6b6b6b] leading-relaxed max-w-lg mb-8">
                            {subtitle}
                        </p>

                        {/* CTA */}
                        {cta && (
                            <Link
                                href={cta.href}
                                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors shadow-sm"
                            >
                                {cta.label}
                            </Link>
                        )}
                    </div>

                    {/* Optional hero image */}
                    {image && (
                        <div className="relative hidden lg:block">
                            <div className="relative rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] aspect-[4/3]">
                                <Image
                                    src={image}
                                    alt={imageAlt || ""}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 0vw, 45vw"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

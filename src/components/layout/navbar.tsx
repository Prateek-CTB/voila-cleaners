"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const residentialLinks = [
    { label: "Luxury Housekeeping", href: "/services/luxury-housekeeping" },
    { label: "Deep Cleaning", href: "/services/deep-cleaning" },
    { label: "End of Tenancy", href: "/services/end-of-tenancy" },
    { label: "Residential Cleaning", href: "/services/residential-cleaning" },
]

const commercialLinks = [
    { label: "Office Cleaning", href: "/services/commercial-cleaning" },
    { label: "Serviced Apartments", href: "/services/serviced-apartments" },
    { label: "Retail & Showroom", href: "/services/retail-cleaning" },
    { label: "After-Builders Clean", href: "/services/after-builders" },
]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])

    useEffect(() => {
        const fn = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setServicesOpen(false)
            }
        }
        document.addEventListener("mousedown", fn)
        return () => document.removeEventListener("mousedown", fn)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [mobileOpen])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 pointer-events-none">
            <div className={cn(
                "max-w-5xl mx-auto flex items-center justify-center transition-all duration-700 ease-out pointer-events-auto",
                scrolled ? "mt-3" : "mt-5"
            )}>
                {/* ─── Logo Container ─── */}
                <div className={cn(
                    "flex-none pointer-events-auto rounded-full px-4 py-1",
                    "bg-white/[0.12] backdrop-blur-2xl backdrop-saturate-[1.8]",
                    "border border-white/[0.25]",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.18),_inset_0_1px_0_rgba(255,255,255,0.25),_inset_0_-1px_0_rgba(255,255,255,0.05)]",
                )}>
                    <Link href="/" className="relative block group">
                        <Image
                            src="/Voila-final.png"
                            alt="Voila Cleaners"
                            width={160}
                            height={120}
                            className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                            style={{ height: 'auto', width: 'auto', maxWidth: 'none', maxHeight: '60px' }}
                            priority
                        />
                    </Link>
                </div>

                {/* ─── Navbar Container ─── */}
                <div className="flex-none pointer-events-auto">
                    <nav className={cn(
                        "relative flex items-center justify-between h-[52px] px-2 pl-6 rounded-full transition-all duration-500",
                        "bg-white/[0.12] backdrop-blur-2xl backdrop-saturate-[1.8]",
                        "border border-white/[0.25]",
                        "shadow-[0_8px_32px_rgba(0,0,0,0.18),_inset_0_1px_0_rgba(255,255,255,0.25),_inset_0_-1px_0_rgba(255,255,255,0.05)]",
                    )}>
                        {/* Desktop Centre Nav */}
                        <div className="hidden md:flex items-center gap-0.5">
                            <Link href="/about"
                                className="px-4 py-1.5 text-[13px] font-medium text-[#1a1a1a]/70 hover:text-[#1a1a1a] rounded-full hover:bg-black/[0.05] transition-all duration-200">
                                About
                            </Link>

                            {/* Services Dropdown */}
                            <div ref={dropdownRef} className="relative">
                                <button
                                    className="flex items-center gap-1 px-4 py-1.5 text-[13px] font-medium text-[#1a1a1a]/70 hover:text-[#1a1a1a] rounded-full hover:bg-black/[0.05] transition-all duration-200"
                                    onClick={() => setServicesOpen(v => !v)}
                                    onMouseEnter={() => setServicesOpen(true)}
                                >
                                    Services
                                    <ChevronDown className={cn("w-3 h-3 opacity-50 transition-transform duration-200", servicesOpen && "rotate-180")} />
                                </button>

                                {servicesOpen && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        <div className={cn(
                                            "bg-white/[0.92] backdrop-blur-3xl backdrop-saturate-[1.8] rounded-2xl p-5 min-w-[420px]",
                                            "border border-black/[0.08]",
                                            "shadow-[0_16px_48px_rgba(0,0,0,0.14),_inset_0_1px_0_rgba(255,255,255,0.6)]",
                                        )}>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#555] mb-3 px-3">Residential</p>
                                                    <div className="space-y-0.5">
                                                        {residentialLinks.map(l => (
                                                            <Link key={l.href} href={l.href}
                                                                onClick={() => setServicesOpen(false)}
                                                                className="block px-3 py-2.5 rounded-xl text-[13px] font-semibold text-[#1a1a1a] hover:bg-black/[0.05] transition-all duration-150">
                                                                {l.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#555] mb-3 px-3">Commercial</p>
                                                    <div className="space-y-0.5">
                                                        {commercialLinks.map(l => (
                                                            <Link key={l.href} href={l.href}
                                                                onClick={() => setServicesOpen(false)}
                                                                className="block px-3 py-2.5 rounded-xl text-[13px] font-semibold text-[#1a1a1a] hover:bg-black/[0.05] transition-all duration-150">
                                                                {l.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-3 border-t border-black/[0.08]">
                                                <Link href="/services" onClick={() => setServicesOpen(false)}
                                                    className="flex items-center gap-1.5 px-3 text-[13px] font-bold text-[#1a1a1a] hover:text-[#555] transition-colors">
                                                    View All Services →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="/contact"
                                className="px-4 py-1.5 text-[13px] font-medium text-[#1a1a1a]/70 hover:text-[#1a1a1a] rounded-full hover:bg-black/[0.05] transition-all duration-200">
                                Contact
                            </Link>
                        </div>

                        {/* CTA */}
                        <Link href="/contact"
                            className={cn(
                                "hidden md:inline-flex items-center px-5 py-2 text-[12px] font-semibold tracking-[0.08em] uppercase rounded-full shrink-0 transition-all duration-300",
                                "bg-[#1a1a1a] text-white hover:bg-[#333]",
                                "shadow-[0_2px_12px_rgba(0,0,0,0.15)]",
                            )}>
                            Book a Clean
                        </Link>

                        {/* Mobile toggle */}
                        <button className="md:hidden p-2 mr-1 text-[#1a1a1a]/70 hover:text-[#1a1a1a] rounded-full hover:bg-black/[0.05] transition-all" onClick={() => setMobileOpen(v => !v)}>
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </nav>

                    {/* ─── Mobile Menu ─── */}
                    {
                        mobileOpen && (
                            <div className={cn(
                                "md:hidden mt-2 p-5 space-y-1 rounded-2xl",
                                "bg-[#111110]/[0.96] backdrop-blur-3xl",
                                "border border-white/[0.08]",
                                "shadow-[0_24px_80px_rgba(0,0,0,0.5)]",
                            )}>
                                <Link href="/about"
                                    className="block py-3 text-[14px] font-medium text-white/70 hover:text-white transition-colors"
                                    onClick={() => setMobileOpen(false)}>
                                    About
                                </Link>

                                <button
                                    className="w-full flex items-center justify-between py-3 text-[14px] font-medium text-white/70 hover:text-white"
                                    onClick={() => setMobileServicesOpen(v => !v)}
                                >
                                    <span>Services</span>
                                    <ChevronDown className={cn("w-4 h-4 opacity-50 transition-transform", mobileServicesOpen && "rotate-180")} />
                                </button>
                                {mobileServicesOpen && (
                                    <div className="pl-4 space-y-0.5 mb-2 border-l border-white/[0.08]">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 pt-1 pb-2 px-3">Residential</p>
                                        {residentialLinks.map(l => (
                                            <Link key={l.href} href={l.href}
                                                className="block py-2 px-3 rounded-xl text-[13px] font-medium text-white/55 hover:text-white hover:bg-white/[0.05]"
                                                onClick={() => setMobileOpen(false)}>
                                                {l.label}
                                            </Link>
                                        ))}
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 pt-3 pb-2 px-3">Commercial</p>
                                        {commercialLinks.map(l => (
                                            <Link key={l.href} href={l.href}
                                                className="block py-2 px-3 rounded-xl text-[13px] font-medium text-white/55 hover:text-white hover:bg-white/[0.05]"
                                                onClick={() => setMobileOpen(false)}>
                                                {l.label}
                                            </Link>
                                        ))}
                                        <Link href="/services"
                                            className="block py-2 px-3 text-[13px] font-semibold text-white/80 hover:text-white"
                                            onClick={() => setMobileOpen(false)}>
                                            View All Services →
                                        </Link>
                                    </div>
                                )}

                                <Link href="/contact"
                                    className="block py-3 text-[14px] font-medium text-white/70 hover:text-white transition-colors"
                                    onClick={() => setMobileOpen(false)}>
                                    Contact
                                </Link>

                                <div className="pt-3">
                                    <Link href="/contact"
                                        className="block text-center py-3 text-[13px] font-semibold tracking-[0.08em] uppercase rounded-full bg-white text-[#111110] hover:bg-white/90 transition-colors"
                                        onClick={() => setMobileOpen(false)}>
                                        Book a Clean
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

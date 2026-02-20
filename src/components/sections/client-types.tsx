"use client"

import { Home, Building2, KeyRound, Landmark, BellRing, Briefcase, Plane, HardHat } from "lucide-react"
import React from "react"

// Section 4 — "Who We Serve" (mirrors "For everyone who creates" avatar grid)
const clients = [
    { label: "Luxury Homeowners", bg: "bg-amber-50", icon: <Home className="size-5" strokeWidth={1.5} /> },
    { label: "Property Managers", bg: "bg-blue-50", icon: <Building2 className="size-5" strokeWidth={1.5} /> },
    { label: "Landlords", bg: "bg-purple-50", icon: <KeyRound className="size-5" strokeWidth={1.5} /> },
    { label: "Estate Agents", bg: "bg-green-50", icon: <Landmark className="size-5" strokeWidth={1.5} /> },
    { label: "Serviced Apt Hosts", bg: "bg-rose-50", icon: <BellRing className="size-5" strokeWidth={1.5} /> },
    { label: "Corporate Offices", bg: "bg-indigo-50", icon: <Briefcase className="size-5" strokeWidth={1.5} /> },
    { label: "Relocation Clients", bg: "bg-orange-50", icon: <Plane className="size-5" strokeWidth={1.5} /> },
    { label: "Developers", bg: "bg-teal-50", icon: <HardHat className="size-5" strokeWidth={1.5} /> },
]

export function ClientTypes() {
    return (
        <section className="py-24 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-12">
                    Who We Serve
                </h2>

                {/* Two-row wrap grid — scrollable on mobile */}
                <div className="flex flex-wrap justify-center gap-4">
                    {clients.map((c, i) => (
                        <div key={i}
                            className="flex flex-col items-center gap-2.5 cursor-pointer group">
                            <div className={`w-16 h-16 rounded-full ${c.bg} border border-[#ede9e3] flex items-center justify-center text-[#1a1a1a] shadow-sm group-hover:scale-105 transition-transform`}>
                                {c.icon}
                            </div>
                            <span className="text-xs font-medium text-[#6b6b6b] group-hover:text-[#1a1a1a] transition-colors max-w-[80px] text-center leading-tight">
                                {c.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

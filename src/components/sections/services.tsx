"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
    {
        number: "01",
        title: "Luxury Housekeeping Services",
        desc: "Regular and bespoke housekeeping designed to maintain high-value homes with precision and care.",
        href: "/services/housekeeping",
    },
    {
        number: "02",
        title: "Deep Cleaning Services",
        desc: "Comprehensive, top-to-bottom cleaning for seasonal refresh, post-renovation, or property preparation.",
        href: "/services/deep-cleaning",
    },
    {
        number: "03",
        title: "End of Tenancy Cleaning",
        desc: "Detailed cleaning that meets landlord and letting agency standards — every time.",
        href: "/services/end-of-tenancy",
    },
    {
        number: "04",
        title: "Commercial & Office Cleaning",
        desc: "Professional cleaning solutions tailored to modern workplaces and executive offices.",
        href: "/services/commercial",
    },
    {
        number: "05",
        title: "Serviced Apartment Cleaning",
        desc: "Fast, structured turnover cleaning to maintain five-star guest standards.",
        href: "/services/serviced-apartments",
    },
]

export function Services() {
    return (
        <section className="py-24 lg:py-32 border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">What We Do</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            Our Premium<br />Cleaning Services
                        </h2>
                    </div>
                    <Link href="/services"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0">
                        View all services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Services list */}
                <div className="divide-y divide-border">
                    {services.map((s, i) => (
                        <Link key={i} href={s.href}
                            className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 hover:bg-muted/30 -mx-4 px-4 rounded-xl transition-colors">
                            <span className="text-xs font-mono text-muted-foreground shrink-0 w-6">{s.number}</span>
                            <h3 className="text-lg font-semibold flex-1 group-hover:text-foreground">{s.title}</h3>
                            <p className="text-sm text-muted-foreground max-w-md flex-1">{s.desc}</p>
                            <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 hidden md:block group-hover:translate-x-1 group-hover:text-foreground transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
    title: string;
    desc: string;
    bg: string;
    image: string;
    href: string;
}

interface ScrollServicesProps {
    residential: ServiceItem[];
    commercial: ServiceItem[];
}

export function ScrollServices({ residential, commercial }: ScrollServicesProps) {
    const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");

    const services = activeTab === "residential" ? residential : commercial;

    return (
        <section id="services" className="py-24 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-3">
                        We&apos;ve Done the Hard Work,<br />So You Don&apos;t Have To.
                    </h2>
                    <p className="text-[#6b6b6b] text-[15px] mb-6 max-w-lg mx-auto">
                        Structured systems, trained professionals, and a relentless focus on quality — across every service.
                    </p>

                    {/* Tab pills — click to switch */}
                    <div className="inline-flex bg-white border border-[#ede9e3] rounded-full p-1 gap-1 shadow-sm">
                        {(["residential", "commercial"] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveTab(t)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize cursor-pointer ${activeTab === t
                                    ? "bg-[#1a1a1a] text-white shadow-sm"
                                    : "text-[#6b6b6b] hover:text-[#1a1a1a]"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Service cards with animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="grid sm:grid-cols-2 gap-5"
                    >
                        {services.map((s, i) => (
                            <Link key={i} href={s.href} className="group">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: i * 0.08 }}
                                    className={`${s.bg} rounded-[24px] border border-[#ede9e3] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all`}
                                >
                                    <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden">
                                        <Image
                                            src={s.image}
                                            alt={s.title}
                                            fill
                                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                            sizes="(max-width:640px)90vw,45vw"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-semibold text-[15px] text-[#1a1a1a] mb-2 flex items-center gap-2">
                                            {s.title}
                                            <ArrowRight className="w-3.5 h-3.5 text-[#9a9a9a] group-hover:translate-x-1 transition-transform" />
                                        </h3>
                                        <p className="text-sm text-[#6b6b6b] leading-relaxed">{s.desc}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

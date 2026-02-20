"use client";

import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface ValueItem {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
}

interface ValuesParallaxProps {
    heading?: string;
    subtitle?: string;
    values: ValueItem[];
}

export function ValuesParallax({
    heading = "What We Stand For",
    subtitle = "The principles that guide everything we do.",
    values,
}: ValuesParallaxProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Horizontal translation: scroll drives cards left
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(values.length - 1) * 100}%`]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const idx = Math.min(
            Math.floor(latest * values.length),
            values.length - 1
        );
        setActiveIndex(idx);
    });

    return (
        <div
            ref={containerRef}
            style={{ height: `${(values.length + 1) * 100}vh` }}
            className="relative"
        >
            <div className="sticky top-0 h-screen overflow-hidden bg-[#F7F7F5]">
                {/* Header */}
                <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999] mb-3">
                        Our Values
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-2">
                        {heading}
                    </h2>
                    <p className="text-sm md:text-[15px] text-[#6b6b6b] leading-relaxed max-w-md">{subtitle}</p>

                    {/* Progress dots */}
                    <div className="flex gap-2 mt-5">
                        {values.map((v, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index
                                            ? "w-10 bg-[#1a1a1a]"
                                            : "w-4 bg-[#d5d0ca]"
                                        }`}
                                />
                                {activeIndex === index && (
                                    <span className="text-[11px] font-semibold text-[#1a1a1a] tracking-wide">
                                        {v.title}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Horizontal scroll track */}
                <div className="absolute bottom-0 left-0 right-0 top-[220px] md:top-[240px] overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex h-full"
                    >
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="min-w-full h-full px-4 md:px-6"
                            >
                                <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center gap-6 md:gap-12">
                                    {/* Image */}
                                    <div className="w-full md:w-3/5 h-[45%] md:h-[80%] relative rounded-2xl md:rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 60vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    {/* Text card */}
                                    <div className="w-full md:w-2/5 flex flex-col justify-center">
                                        <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500 bg-[#1a1a1a] text-white`}
                                        >
                                            {value.icon}
                                        </div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#999] mb-2">
                                            {String(index + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm md:text-[15px] text-[#555] leading-relaxed max-w-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

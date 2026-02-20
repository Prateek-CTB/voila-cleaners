"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
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
            style={{ height: "300vh" }}
            className="relative"
        >
            <div className="sticky top-0 h-screen overflow-hidden bg-[#F7F7F5] flex items-center">
                <div className="max-w-6xl mx-auto px-4 md:px-6 w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                    {/* LEFT: Header + Values list */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-8 md:mb-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999] mb-3">
                                Our Values
                            </p>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
                                {heading}
                            </h2>
                            <p className="text-sm md:text-[15px] text-[#6b6b6b] leading-relaxed max-w-md mt-2">{subtitle}</p>

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

                        {/* All values always visible — active one highlighted */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-start gap-4 md:gap-5">
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${activeIndex === index
                                                ? "bg-[#1a1a1a] text-white scale-110"
                                                : "bg-[#e8e5df] text-[#999] scale-100"
                                            }`}
                                    >
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3
                                            className={`text-lg md:text-xl font-bold tracking-tight transition-all duration-500 ${activeIndex === index
                                                    ? "text-[#1a1a1a] translate-x-1"
                                                    : "text-[#c4c0b8] translate-x-0"
                                                }`}
                                        >
                                            {value.title}
                                        </h3>
                                        <p
                                            className={`text-sm text-[#6b6b6b] leading-relaxed max-w-xs mt-1 transition-all duration-500 overflow-hidden ${activeIndex === index
                                                    ? "max-h-24 opacity-100"
                                                    : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Image crossfade */}
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] rounded-2xl md:rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        {/* Counter overlay */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm">
                            <p className="text-xs font-semibold text-[#1a1a1a]">
                                {String(activeIndex + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

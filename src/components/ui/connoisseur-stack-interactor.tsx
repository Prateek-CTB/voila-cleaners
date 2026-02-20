"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import gsap from "gsap";

interface MenuItem {
    num: string;
    name: string;
    clipId: string;
    image: string;
}

const defaultItems: MenuItem[] = [
    {
        num: "01",
        name: "Vetted Professionals",
        clipId: "clip-original",
        image: "/vetted-pro.jpeg",
    },
    {
        num: "02",
        name: "Precision Checklists",
        clipId: "clip-hexagons",
        image: "/checklist.jpeg",
    },
    {
        num: "03",
        name: "Same Cleaner",
        clipId: "clip-pixels",
        image: "/same-cleaner.jpeg",
    },
];

const descriptions = [
    "Every cleaner is background-checked, reference-verified, and fully insured.",
    "Structured 50-point checklists ensure a consistent, verifiable clean every visit.",
    "Your dedicated cleaner knows your home, preferences, and standards.",
];

export const ConnoisseurStackInteractor = ({
    items = defaultItems,
    className,
}: {
    items?: MenuItem[];
    className?: string;
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<SVGImageElement>(null);
    const mainGroupRef = useRef<SVGGElement>(null);
    const masterTl = useRef<gsap.core.Timeline | null>(null);

    const { scrollYProgress } = useScroll({
        target: scrollContainerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const idx = Math.min(
            Math.floor(latest * items.length),
            items.length - 1
        );
        if (idx !== activeIndex) {
            setActiveIndex(idx);
        }
    });

    const createLoop = (index: number) => {
        const item = items[index];
        const selector = `#${item.clipId} .path`;

        if (masterTl.current) masterTl.current.kill();

        if (imageRef.current) imageRef.current.setAttribute("href", item.image);
        if (mainGroupRef.current)
            mainGroupRef.current.setAttribute(
                "clip-path",
                `url(#${item.clipId})`
            );

        gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        tl.to(selector, {
            scale: 1,
            duration: 0.8,
            stagger: { amount: 0.4, from: "random" },
            ease: "expo.out",
        })
            .to(selector, {
                scale: 1.05,
                duration: 1.5,
                yoyo: true,
                repeat: 1,
                ease: "sine.inOut",
                stagger: { amount: 0.2, from: "center" },
            })
            .to(selector, {
                scale: 0,
                duration: 0.6,
                stagger: { amount: 0.3, from: "edges" },
                ease: "expo.in",
            });

        masterTl.current = tl;
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            createLoop(0);
        }, containerRef);
        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Re-run animation when activeIndex changes via scroll
    useEffect(() => {
        createLoop(activeIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex]);

    return (
        <div
            ref={scrollContainerRef}
            style={{ height: "200vh" }}
            className="relative"
        >
            <div className="sticky top-0 h-screen overflow-hidden bg-[#F7F7F5]">
                <div
                    ref={containerRef}
                    className={cn(
                        "flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-16 md:px-6 md:py-20 overflow-hidden transition-colors duration-500 h-full",
                        className
                    )}
                >
                    {/* LEFT SIDE: MENU */}
                    <div className="z-20 w-full md:w-1/2">
                        <div className="mb-8 md:mb-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999] mb-3">
                                Why Voila
                            </p>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight">
                                London&apos;s Trusted<br />Luxury Cleaning.
                            </h2>

                            {/* Progress dots */}
                            <div className="flex gap-2 mt-5">
                                {items.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div
                                            className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index
                                                ? "w-10 bg-[#1a1a1a]"
                                                : "w-4 bg-[#d5d0ca]"
                                                }`}
                                        />
                                        {activeIndex === index && (
                                            <span className="text-[11px] font-semibold text-[#1a1a1a] tracking-wide">
                                                {item.name}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-8 md:gap-14">
                                {items.map((item, index) => (
                                    <li
                                        key={item.num}
                                        className="group"
                                    >
                                        <div className="flex items-start gap-4 md:gap-6">
                                            <span
                                                className={cn(
                                                    "text-xl md:text-3xl font-bold transition-all duration-500 mt-1 md:mt-2",
                                                    activeIndex === index
                                                        ? "text-[#c4956a] scale-110"
                                                        : "text-[#c4c0b8]"
                                                )}
                                            >
                                                {item.num}
                                            </span>

                                            <div>
                                                <h3
                                                    className={cn(
                                                        "text-2xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] transition-all duration-700",
                                                        activeIndex === index
                                                            ? "text-[#1a1a1a] opacity-100 translate-x-2 md:translate-x-4"
                                                            : "text-[#c4c0b8] opacity-60 translate-x-0"
                                                    )}
                                                >
                                                    {item.name.split(" ")[0]}
                                                    <br />
                                                    {item.name.split(" ")[1]}
                                                </h3>
                                                {activeIndex === index && (
                                                    <p className="text-xs md:text-sm text-[#6b6b6b] mt-2 md:mt-3 max-w-xs transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
                                                        {descriptions[index]}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* RIGHT SIDE: SVG ANIMATION */}
                    <div className="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
                        <div className="absolute w-[120%] h-[120%] bg-[#c4956a]/10 blur-[120px] rounded-full transition-opacity duration-1000" />

                        <svg
                            viewBox="0 0 500 500"
                            className="w-[80%] max-w-[450px] h-auto z-10 drop-shadow-xl"
                        >
                            <defs>
                                {/* Shape 1: Rounded rectangle strips (replaces burger) */}
                                <clipPath id="clip-original">
                                    <rect className="path" x="30" y="30" width="440" height="100" rx="40" ry="40" />
                                    <rect className="path" x="30" y="140" width="440" height="100" rx="8" ry="8" />
                                    <rect className="path" x="30" y="250" width="440" height="100" rx="8" ry="8" />
                                    <rect className="path" x="30" y="360" width="440" height="110" rx="40" ry="40" />
                                </clipPath>

                                {/* Shape 2: Bento grid (original) */}
                                <clipPath id="clip-hexagons">
                                    <rect className="path" x="20" y="20" width="200" height="280" rx="12" />
                                    <rect className="path" x="20" y="320" width="200" height="160" rx="12" />
                                    <rect className="path" x="240" y="20" width="240" height="140" rx="12" />
                                    <rect className="path" x="240" y="180" width="110" height="160" rx="12" />
                                    <rect className="path" x="370" y="180" width="110" height="160" rx="12" />
                                    <rect className="path" x="240" y="360" width="240" height="120" rx="12" />
                                </clipPath>

                                {/* Shape 3: Pixel grid (original) */}
                                <clipPath id="clip-pixels">
                                    {Array.from({ length: 9 }).map((_, i) => (
                                        <rect
                                            key={i}
                                            className="path"
                                            x={(i % 3) * 160 + 20}
                                            y={Math.floor(i / 3) * 160 + 20}
                                            width="140"
                                            height="140"
                                            rx="4"
                                        />
                                    ))}
                                </clipPath>
                            </defs>

                            <g
                                ref={mainGroupRef}
                                clipPath={`url(#${items[0].clipId})`}
                            >
                                <image
                                    ref={imageRef}
                                    href={items[0].image}
                                    width="500"
                                    height="500"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

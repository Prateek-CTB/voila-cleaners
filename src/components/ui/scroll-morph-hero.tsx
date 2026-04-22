"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = "scatter" | "line" | "circle" | "arc";

interface CardTarget {
    x: number; y: number;
    rotation: number; scale: number; opacity: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const TOTAL = 20;
const IMG_W = 62;
const IMG_H = 88;

const IMAGES = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&q=80",
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=300&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&q=80",
    "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=300&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&q=80",
    "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=300&q=80",
    "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?w=300&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&q=80",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&q=80",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=300&q=80",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
];

const LABELS = [
    "Office Clean", "Deep Clean", "Co-Working", "Meeting Rooms", "Breakrooms",
    "Reception", "Washrooms", "After-Hours", "End of Tenancy", "Serviced Apt",
    "City of London", "Canary Wharf", "Mayfair", "Shoreditch", "Contract Clean",
    "COSHH Safe", "DBS Checked", "Insured", "Account Mgr", "5★ Rated",
];

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

// ─── FlipCard ─────────────────────────────────────────────────────────────────
function FlipCard({ src, idx, target, label }: {
    src: string; idx: number; target: CardTarget; label: string;
}) {
    return (
        <motion.div
            animate={{ x: target.x, y: target.y, rotate: target.rotation, scale: target.scale, opacity: target.opacity }}
            transition={{ type: "spring", stiffness: 38, damping: 14 }}
            style={{ position: "absolute", width: IMG_W, height: IMG_H, transformStyle: "preserve-3d" }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.55, type: "spring", stiffness: 240, damping: 20 }}
            >
                {/* Front */}
                <div className="absolute inset-0 overflow-hidden bg-neutral-200"
                    style={{ backfaceVisibility: "hidden", borderRadius: 0 }}>
                    <img src={src} alt={`office-${idx}`}
                        className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-200" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 overflow-hidden bg-[#0A0A0A] flex flex-col items-center justify-center p-2 border border-neutral-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: 0 }}>
                    <p className="text-[6px] font-mono font-bold text-neutral-400 uppercase tracking-widest mb-1">Voila</p>
                    <p className="text-[8px] font-semibold text-white text-center leading-tight">{label}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ScrollMorphHero() {
    const [phase, setPhase] = useState<Phase>("scatter");
    const [size, setSize] = useState({ w: 0, h: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Single motion value drives everything: 0=circle, 1=arc formed, 2+=shuffle offset
    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, { stiffness: 35, damping: 18 });

    const [prog, setProg] = useState(0);
    useEffect(() => smoothProgress.on("change", setProg), [smoothProgress]);

    // morphValue: 0→1 maps circle to arc
    const morphValue = Math.min(Math.max(prog, 0), 1);
    // shuffleOffset: past 1.0, used for continuous card rotation
    const shuffleOffset = Math.max(prog - 1, 0);

    // Container sizing
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
        ro.observe(el);
        setSize({ w: el.offsetWidth, h: el.offsetHeight });
        return () => ro.disconnect();
    }, []);

    // ── Fully automatic sequence ──────────────────────────────────────────────
    useEffect(() => {
        let cancelled = false;

        // Step 1: scatter → line → circle (phase transitions)
        const t1 = setTimeout(() => { if (!cancelled) setPhase("line"); }, 300);
        const t2 = setTimeout(() => { if (!cancelled) setPhase("circle"); }, 1800);

        // Step 2: morph circle → arc (progress 0 → 1)
        const t3 = setTimeout(() => {
            if (cancelled) return;
            setPhase("arc");
            animate(progress, 1, {
                duration: 2.2,
                ease: [0.22, 1, 0.36, 1],
            });
        }, 2600);

        // Step 3: after arc forms, slowly auto-shuffle cards left (progress 1 → 2.5)
        const t4 = setTimeout(() => {
            if (cancelled) return;
            animate(progress, 2.5, {
                duration: 12,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            });
        }, 5200);

        return () => {
            cancelled = true;
            clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── Card position computation ─────────────────────────────────────────────
    const scatterPos = useMemo(() =>
        IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1400,
            y: (Math.random() - 0.5) * 900,
            rotation: (Math.random() - 0.5) * 170,
            scale: 0.5,
            opacity: 0,
        })), []);

    const getTarget = (i: number): CardTarget => {
        if (phase === "scatter") return scatterPos[i];

        if (phase === "line") {
            const spacing = 70;
            const totalW = TOTAL * spacing;
            return { x: i * spacing - totalW / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
        }

        // circle & arc share the same computation (morphValue interpolates)
        const isMobile = size.w < 768;
        const minDim = Math.min(size.w, size.h);

        // Circle position
        const cRadius = Math.min(minDim * 0.3, 280);
        const cAngle = (i / TOTAL) * 360;
        const cRad = (cAngle * Math.PI) / 180;
        const cx = Math.cos(cRad) * cRadius;
        const cy = Math.sin(cRad) * cRadius;

        // Arc position (bottom rainbow)
        const arcRadius = Math.min(size.w, size.h * 1.5) * (isMobile ? 1.25 : 1.0);
        const apexY = size.h * (isMobile ? 0.36 : 0.26);
        const arcCenterY = apexY + arcRadius;
        const spread = isMobile ? 90 : 120;
        const startAngle = -90 - spread / 2;
        const step = spread / (TOTAL - 1);

        // shuffleOffset drives slow auto-rotation
        const maxShift = spread * 0.75;
        const shiftAngle = Math.sin(shuffleOffset * Math.PI) * maxShift * -1;

        const aAngle = startAngle + i * step + shiftAngle;
        const aRad = (aAngle * Math.PI) / 180;
        const ax = Math.cos(aRad) * arcRadius;
        const ay = Math.sin(aRad) * arcRadius + arcCenterY;

        return {
            x: lerp(cx, ax, morphValue),
            y: lerp(cy, ay, morphValue),
            rotation: lerp(cAngle + 90, aAngle + 90, morphValue),
            scale: lerp(1, isMobile ? 1.5 : 1.85, morphValue),
            opacity: 1,
        };
    };

    // ── Text visibility ───────────────────────────────────────────────────────
    const textOpacity = useTransform(smoothProgress, [0.85, 1], [0, 1]);
    const textY = useTransform(smoothProgress, [0.85, 1], [20, 0]);

    return (
        <div ref={containerRef}
            className="relative w-full h-full bg-[#FAFAFA] overflow-hidden select-none">

            {/* ── Centered Hook Text — appears once arc is fully formed ── */}
            <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="absolute inset-x-0 top-[6%] z-20 flex flex-col items-center text-center pointer-events-none px-4"
            >
                <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-[0.28em] text-neutral-400 mb-4">
                    Voila Cleaners — London
                </span>

                <h2 className="text-2xl md:text-[2.6rem] font-bold tracking-tight leading-[1.08] text-[#0A0A0A] mb-3 max-w-lg">
                    London&apos;s Most Trusted<br />
                    Office Cleaning Partner.
                </h2>

                <p className="text-xs md:text-sm text-neutral-500 max-w-xs md:max-w-sm leading-relaxed">
                    DBS-checked teams. COSHH-compliant. After-hours scheduling.
                    Trusted by <strong className="text-neutral-700">70+ London offices</strong>.
                </p>

                <div className="flex items-center gap-3 mt-5 pointer-events-auto">
                    <a
                        href="/contact"
                        className="inline-flex items-center px-5 py-2 bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-700 transition-colors"
                        style={{ borderRadius: 0 }}
                    >
                        Get a Free Quote
                    </a>
                    <a
                        href="/pricing"
                        className="inline-flex items-center px-5 py-2 border border-[#0A0A0A] text-[#0A0A0A] text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors"
                        style={{ borderRadius: 0 }}
                    >
                        View Rates
                    </a>
                </div>
            </motion.div>

            {/* ── Cards ── */}
            <div className="relative flex items-center justify-center w-full h-full">
                {IMAGES.map((src, i) => (
                    <FlipCard
                        key={i}
                        src={src}
                        idx={i}
                        target={getTarget(i)}
                        label={LABELS[i % LABELS.length]}
                    />
                ))}
            </div>
        </div>
    );
}

export { ScrollMorphHero };

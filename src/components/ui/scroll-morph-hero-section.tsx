"use client";
// Client boundary wrapper — import this from any Server Component page.
// The parent page keeps SSR + metadata; the animation runs client-side only.

import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
export function ScrollMorphHeroSection() {
    return <ScrollMorphHero />;
}

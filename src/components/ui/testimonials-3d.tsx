"use client"

import { Marquee } from "@/components/ui/3d-testimonials"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialItem {
    name: string
    username: string
    body: string
    img: string
    country: string
}

interface Testimonials3DProps {
    testimonials: TestimonialItem[]
    heading?: string
    subtitle?: string
}

function MarqueeCard({ img, name, username, body, country }: TestimonialItem) {
    return (
        <Card className="w-50">
            <CardContent>
                <div className="flex items-center gap-2.5">
                    <Avatar className="size-9">
                        <AvatarImage src={img} alt={name} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
                            {name} <span className="text-xs">{country}</span>
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-3 text-sm text-secondary-foreground">{body}</blockquote>
            </CardContent>
        </Card>
    )
}

export function Testimonials3D({ testimonials, heading = "What Our Clients Say", subtitle }: Testimonials3DProps) {
    // Split testimonials into columns (at least 4 per column ideally)
    const len = testimonials.length
    const col1 = testimonials.slice(0, Math.ceil(len / 3))
    const col2 = testimonials.slice(Math.ceil(len / 3), Math.ceil((2 * len) / 3))
    const col3 = testimonials.slice(Math.ceil((2 * len) / 3))

    return (
        <section className="py-20 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] text-center mb-4">
                    {heading}
                </h2>
                {subtitle && (
                    <p className="text-[15px] text-[#6b6b6b] text-center mb-12 max-w-lg mx-auto">{subtitle}</p>
                )}
                <div className="relative flex h-[420px] w-full flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
                    <div
                        className="flex flex-row items-center gap-4"
                        style={{
                            transform: 'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
                        }}
                    >
                        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                            {col1.map((r) => (
                                <MarqueeCard key={r.username} {...r} />
                            ))}
                        </Marquee>
                        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                            {col2.map((r) => (
                                <MarqueeCard key={r.username} {...r} />
                            ))}
                        </Marquee>
                        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                            {col3.map((r) => (
                                <MarqueeCard key={r.username} {...r} />
                            ))}
                        </Marquee>
                        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                            {col1.map((r) => (
                                <MarqueeCard key={r.username} {...r} />
                            ))}
                        </Marquee>
                        {/* Gradient overlays — fade to page bg */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F7F7F5]" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F7F7F5]" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F7F7F5]" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F7F7F5]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

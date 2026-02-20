import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
    return (
        <section className="py-24 lg:py-32 border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
                {/* Full-width dark CTA card */}
                <div className="rounded-3xl bg-foreground text-background p-12 lg:p-16 relative overflow-hidden">
                    {/* Background decor */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

                    <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="text-sm font-medium text-white/60 mb-4 uppercase tracking-widest">Strong Call to Action</p>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
                                Experience Cleaning<br />Done Properly.
                            </h2>
                            <p className="text-white/70 text-base leading-relaxed max-w-sm">
                                Stop settling for average cleaning services. Partner with a professional team that understands presentation, discretion, and detail.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link href="/quote"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold rounded-full bg-background text-foreground hover:opacity-90 transition-opacity">
                                Request Your Premium Cleaning Quote Today
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <p className="text-center text-xs text-white/50">
                                Call us or complete our online enquiry form for a fast response.
                            </p>

                            <div className="flex items-center justify-center gap-8 pt-4 border-t border-white/10 mt-2">
                                <div className="text-center">
                                    <p className="text-2xl font-bold">500+</p>
                                    <p className="text-xs text-white/60 mt-0.5">Happy clients</p>
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div className="text-center">
                                    <p className="text-2xl font-bold">4.7★</p>
                                    <p className="text-xs text-white/60 mt-0.5">Avg. rating</p>
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div className="text-center">
                                    <p className="text-2xl font-bold">24h</p>
                                    <p className="text-xs text-white/60 mt-0.5">Response</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

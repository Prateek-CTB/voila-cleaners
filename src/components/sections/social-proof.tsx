"use client"

const clientValues = [
    "Attention to detail",
    "Reliability",
    "Professional presentation",
    "Responsive communication",
    "Consistent results",
]

export function SocialProof() {
    return (
        <section className="py-20 border-t border-border bg-muted/20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-6">Social Proof</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    A Standard Clients Recommend
                </h2>
                <p className="text-muted-foreground text-base mb-10 max-w-lg mx-auto">
                    We serve private homeowners, landlords, and businesses who expect excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {clientValues.map((v, i) => (
                        <span key={i}
                            className="px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium text-foreground">
                            {v}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground mt-8">
                    Our clients value what matters most.
                </p>
            </div>
        </section>
    )
}

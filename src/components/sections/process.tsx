"use client"

const steps = [
    {
        number: "01",
        title: "Request Your Quote",
        desc: "Contact us via phone or our online enquiry form. We respond within 24 hours.",
        bg: "bg-blue-50 dark:bg-blue-950/20 border-blue-200/60 dark:border-blue-900/40",
    },
    {
        number: "02",
        title: "Receive a Tailored Cleaning Plan",
        desc: "We assess your property and create a bespoke cleaning schedule that fits your life.",
        bg: "bg-violet-50 dark:bg-violet-950/20 border-violet-200/60 dark:border-violet-900/40",
    },
    {
        number: "03",
        title: "Schedule Your Service",
        desc: "Choose dates and frequency that work for you. We accommodate flexible and recurring bookings.",
        bg: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40",
    },
    {
        number: "04",
        title: "Enjoy a Professionally Maintained Space",
        desc: "Sit back while our vetted professionals deliver a spotless result — every single time.",
        bg: "bg-amber-50 dark:bg-amber-950/20 border-amber-200/60 dark:border-amber-900/40",
    },
]

export function Process() {
    return (
        <section className="py-24 lg:py-32 border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT */}
                    <div className="lg:sticky lg:top-24">
                        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-4">How It Works</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                            Simple.<br />Structured.<br />
                            <span className="text-muted-foreground">Reliable.</span>
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-base max-w-sm">
                            A four-step process designed to remove friction and deliver a consistently excellent result.
                        </p>
                    </div>

                    {/* RIGHT — Bento Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {steps.map((s) => (
                            <div key={s.number} className={`rounded-2xl border p-7 ${s.bg}`}>
                                <span className="text-xs font-mono font-semibold text-muted-foreground">{s.number}</span>
                                <h3 className="text-sm font-semibold mt-3 mb-2 leading-snug">{s.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

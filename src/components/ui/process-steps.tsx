interface Step {
    number: string
    title: string
    description: string
}

interface ProcessStepsProps {
    heading: string
    headingAccent?: string
    subtitle?: string
    steps: Step[]
}

export function ProcessSteps({ heading, headingAccent, subtitle, steps }: ProcessStepsProps) {
    return (
        <section id="process" className="py-20 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left — sticky heading */}
                    <div className="lg:sticky lg:top-24">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-4">
                            {heading}
                            {headingAccent && (
                                <>
                                    <br />
                                    <span className="text-[#9a9a9a]">{headingAccent}</span>
                                </>
                            )}
                        </h2>
                        {subtitle && (
                            <p className="text-[15px] text-[#6b6b6b] leading-relaxed max-w-sm">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Right — timeline */}
                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#ede9e3]" />

                        <div className="space-y-8">
                            {steps.map((s, i) => (
                                <div key={i} className="relative pl-12">
                                    {/* Dot */}
                                    <div className="absolute left-0 top-1 w-[31px] h-[31px] rounded-full bg-white border-2 border-[#ede9e3] flex items-center justify-center z-10">
                                        <span className="text-[10px] font-bold text-[#1a1a1a]">{s.number}</span>
                                    </div>
                                    {/* Content card */}
                                    <div className="bg-white rounded-[16px] border border-[#ede9e3] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                                        <h3 className="font-semibold text-sm text-[#1a1a1a] mb-2">{s.title}</h3>
                                        <p className="text-sm text-[#6b6b6b] leading-relaxed">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

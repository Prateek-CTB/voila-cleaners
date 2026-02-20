interface Stat {
    value: string
    label: string
}

interface StatsBarProps {
    stats: Stat[]
    heading?: string
}

export function StatsBar({ stats, heading }: StatsBarProps) {
    return (
        <section className="py-16 bg-[#F7F7F5]">
            <div className="max-w-6xl mx-auto px-6">
                {heading && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9a9a9a] mb-8 text-center">
                        {heading}
                    </p>
                )}
                <div className="bg-white rounded-[20px] border border-[#ede9e3] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-10">
                    <div className={`grid grid-cols-2 md:grid-cols-${stats.length} gap-8`}>
                        {stats.map((s, i) => (
                            <div key={i} className="text-center">
                                <p className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-1.5">
                                    {s.value}
                                </p>
                                <p className="text-sm text-[#6b6b6b]">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

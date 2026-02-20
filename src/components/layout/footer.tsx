import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-[#F7F7F5] border-t border-[#ede9e3] py-14">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <p className="text-sm font-semibold text-[#1a1a1a] mb-2">Voila Cleaners</p>
                        <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-[280px]">
                            Premium Cleaning Services in London — trusted by homeowners, landlords, and businesses.
                        </p>
                        <p className="text-xs text-[#9a9a9a] mt-3">
                            34 Bloomsbury Street, London WC1B 3QJ
                        </p>
                        <a href="tel:+442071129177" className="text-xs text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors mt-1 block">
                            020 7112 9177
                        </a>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#9a9a9a] mb-4">Sitemap</p>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Services", href: "#services" },
                                { label: "FAQ", href: "#faq" },
                                { label: "Contact", href: "#contact" },
                                { label: "Privacy Policy", href: "/privacy" },
                            ].map(l => (
                                <li key={l.href}>
                                    <Link href={l.href}
                                        className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#9a9a9a] mb-4">Social</p>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Instagram", href: "#" },
                                { label: "Facebook", href: "#" },
                                { label: "Google Reviews", href: "#" },
                            ].map(l => (
                                <li key={l.label}>
                                    <Link href={l.href}
                                        className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#ede9e3] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-[#9a9a9a]">
                        © 2026 Voila Cleaners. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service"].map(l => (
                            <Link key={l} href="#"
                                className="text-xs text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors">
                                {l}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

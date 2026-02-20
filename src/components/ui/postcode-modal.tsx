"use client"

import { useState, useEffect, useRef } from "react"
import { X, MapPin, User, Mail, Phone, ChevronDown, ArrowRight, Loader2, CheckCircle2, MapPinOff } from "lucide-react"

// ── London boroughs within Zones 1–4 ─────────────────────────────
const LONDON_BOROUGHS = new Set([
    "City of London", "Westminster", "Camden", "Islington", "Hackney",
    "Tower Hamlets", "Southwark", "Lambeth", "Kensington and Chelsea",
    "Hammersmith and Fulham", "Wandsworth", "Lewisham", "Greenwich",
    "Newham", "Haringey", "Waltham Forest", "Brent", "Ealing",
    "Barnet", "Enfield", "Redbridge", "Hounslow", "Richmond upon Thames",
    "Merton", "Kingston upon Thames", "Croydon", "Bromley", "Bexley",
    "Havering", "Barking and Dagenham", "Harrow", "Hillingdon", "Sutton",
])

interface PostcodeModalProps {
    isOpen: boolean
    onClose: () => void
    postcode: string
}

interface PostcodeResult {
    valid: boolean
    inArea: boolean
    borough?: string
    message: string
}

const SERVICES = [
    "Luxury Housekeeping",
    "Deep Cleaning",
    "End of Tenancy",
    "Commercial Cleaning",
    "Serviced Apartments",
    "Retail & Showroom",
    "After-Builders Clean",
]

export function PostcodeModal({ isOpen, onClose, postcode }: PostcodeModalProps) {
    const [step, setStep] = useState<"validating" | "not-covered" | "form">("validating")
    const [postcodeResult, setPostcodeResult] = useState<PostcodeResult | null>(null)
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", postcode, service: "", message: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    // ── Validate postcode on open ────────────────────────────────
    useEffect(() => {
        if (!isOpen) return
        setStep("validating")
        setSubmitted(false)
        setFormData(prev => ({ ...prev, postcode }))

        const validate = async () => {
            try {
                const cleaned = postcode.replace(/\s/g, "").toUpperCase()
                const res = await fetch(`https://api.postcodes.io/postcodes/${cleaned}`)
                const data = await res.json()

                if (data.status !== 200 || !data.result) {
                    setPostcodeResult({ valid: false, inArea: false, message: "That doesn't look like a valid UK postcode." })
                    setStep("not-covered")
                    return
                }

                const borough = data.result.admin_district || ""
                const region = data.result.region || ""

                if (region === "London" && LONDON_BOROUGHS.has(borough)) {
                    setPostcodeResult({ valid: true, inArea: true, borough, message: `We serve ${borough}` })
                    setStep("form")
                } else if (region === "London") {
                    setPostcodeResult({ valid: true, inArea: false, borough, message: `We don't currently cover ${borough}. We serve London Zones 1–4.` })
                    setStep("not-covered")
                } else {
                    setPostcodeResult({ valid: true, inArea: false, message: "We currently only serve London (Zones 1–4)." })
                    setStep("not-covered")
                }
            } catch {
                setPostcodeResult({ valid: false, inArea: false, message: "Couldn't verify that postcode. Please try again." })
                setStep("not-covered")
            }
        }

        validate()
    }, [isOpen, postcode])

    // ── Close on Escape ──────────────────────────────────────────
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
        if (isOpen) document.addEventListener("keydown", handleKey)
        return () => document.removeEventListener("keydown", handleKey)
    }, [isOpen, onClose])

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose()
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (!isOpen) return null

    const inputClass = "w-full px-4 py-3 text-sm rounded-lg border border-[#e2e0db] bg-white focus:outline-none focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a]/10 transition-colors placeholder:text-[#b5b2ac]"

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={handleBackdropClick}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" style={{ animation: "fadeIn .2s ease" }} />

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative w-full max-w-md bg-[#FAFAF8] rounded-2xl shadow-2xl overflow-hidden"
                style={{ animation: "modalIn .3s cubic-bezier(.16,1,.3,1)" }}
            >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#1a1a1a] via-[#444] to-[#1a1a1a]" />

                {/* Close */}
                <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-[#eae7e2] transition-colors text-[#999] hover:text-[#1a1a1a]">
                    <X className="size-4" />
                </button>

                {/* ─── Validating ─── */}
                {step === "validating" && (
                    <div className="flex flex-col items-center justify-center py-24 px-8">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full border-2 border-[#e2e0db] border-t-[#1a1a1a] animate-spin" />
                        </div>
                        <p className="text-sm text-[#888] mt-5 tracking-wide">Checking your area…</p>
                    </div>
                )}

                {/* ─── Not Covered ─── */}
                {step === "not-covered" && (
                    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#f0ede8] flex items-center justify-center mb-6">
                            <MapPinOff className="size-7 text-[#888]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 tracking-tight">Outside Our Service Area</h3>
                        <p className="text-sm text-[#888] mb-8 max-w-[280px] leading-relaxed">{postcodeResult?.message}</p>
                        <div className="flex gap-3 w-full max-w-[280px]">
                            <button
                                onClick={onClose}
                                className="flex-1 py-2.5 text-sm font-medium rounded-lg border border-[#e2e0db] text-[#1a1a1a] hover:bg-[#f0ede8] transition-colors"
                            >
                                Go Back
                            </button>
                            <a
                                href="/contact"
                                className="flex-1 py-2.5 text-sm font-semibold rounded-lg bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors text-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                )}

                {/* ─── Contact Form ─── */}
                {step === "form" && !submitted && (
                    <div className="p-7">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1a1a] text-white text-[11px] font-medium tracking-wide mb-4">
                                <MapPin className="size-3" />
                                {postcodeResult?.message}
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1a1a] tracking-tight">Tell us about yourself</h3>
                            <p className="text-sm text-[#888] mt-1">We'll get back within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3.5">
                            {/* Full Name */}
                            <div>
                                <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1a1a1a] mb-1.5 tracking-wide uppercase">
                                    <User className="size-3 text-[#888]" /> Full Name
                                </label>
                                <input
                                    type="text" required value={formData.name}
                                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                                    placeholder="Enter your full name"
                                    className={inputClass}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1a1a1a] mb-1.5 tracking-wide uppercase">
                                    <Mail className="size-3 text-[#888]" /> Email Address
                                </label>
                                <input
                                    type="email" required value={formData.email}
                                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                                    placeholder="your.email@example.com"
                                    className={inputClass}
                                />
                            </div>

                            {/* Phone + Postcode row */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1a1a1a] mb-1.5 tracking-wide uppercase">
                                        <Phone className="size-3 text-[#888]" /> Phone
                                    </label>
                                    <input
                                        type="tel" required value={formData.phone}
                                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                                        placeholder="07123 456789"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1a1a1a] mb-1.5 tracking-wide uppercase">
                                        <MapPin className="size-3 text-[#888]" /> Postcode
                                    </label>
                                    <input
                                        type="text" readOnly value={formData.postcode}
                                        className="w-full px-4 py-3 text-sm rounded-lg border border-[#e2e0db] bg-[#f0ede8] text-[#888] cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            {/* Service */}
                            <div>
                                <label className="text-xs font-semibold text-[#1a1a1a] mb-1.5 block tracking-wide uppercase">Service Required</label>
                                <div className="relative">
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData(p => ({ ...p, service: e.target.value }))}
                                        className={`${inputClass} appearance-none cursor-pointer pr-10`}
                                    >
                                        <option value="">Choose a service</option>
                                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#888] pointer-events-none" />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-xs font-semibold text-[#1a1a1a] mb-1.5 block tracking-wide uppercase">
                                    Message <span className="font-normal normal-case text-[#888]">(Optional)</span>
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                                    placeholder="Tell us about your needs..."
                                    rows={3}
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-3.5 text-sm font-semibold rounded-lg bg-[#1a1a1a] text-white hover:bg-[#333] transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                            >
                                Send Message
                                <ArrowRight className="size-4" />
                            </button>
                        </form>
                    </div>
                )}

                {/* ─── Success ─── */}
                {step === "form" && submitted && (
                    <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#eef7ee] flex items-center justify-center mb-6">
                            <CheckCircle2 className="size-7 text-[#3a8a3a]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 tracking-tight">Message Sent</h3>
                        <p className="text-sm text-[#888] mb-8 max-w-[260px] leading-relaxed">We have received your details and will be in touch within 24 hours.</p>
                        <button
                            onClick={onClose}
                            className="px-10 py-2.5 text-sm font-semibold rounded-lg bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors cursor-pointer"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
                @keyframes modalIn { from { opacity: 0; transform: scale(.96) translateY(8px) } to { opacity: 1; transform: scale(1) translateY(0) } }
            `}</style>
        </div>
    )
}

"use client"

import { useState } from "react"
import { validatePostcode, type PostcodeStatus } from "@/lib/postcode-utils"
import { MapPin, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

interface PostcodeInputProps {
    required?: boolean
    className?: string
}

export function PostcodeInput({ required = false, className = "" }: PostcodeInputProps) {
    const [value, setValue] = useState("")
    const [status, setStatus] = useState<PostcodeStatus>({ type: "empty" })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const v = e.target.value.toUpperCase()
        setValue(v)
        setStatus(validatePostcode(v))
    }

    const baseClasses =
        "w-full px-4 py-3 rounded-xl border bg-[#fafaf8] text-sm uppercase focus:outline-none focus:ring-2 transition-colors"

    const borderClasses =
        status.type === "served"
            ? "border-emerald-400 focus:ring-emerald-200"
            : status.type === "not-served"
                ? "border-amber-400 focus:ring-amber-200"
                : status.type === "invalid"
                    ? "border-red-400 focus:ring-red-200"
                    : "border-[#ede9e3] focus:ring-[#1a1a1a]/15"

    return (
        <div className={className}>
            <div className="relative">
                <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode e.g. SW1A 1AA"
                    required={required}
                    value={value}
                    onChange={handleChange}
                    className={`${baseClasses} ${borderClasses}`}
                />
                {/* Status icon inside the input */}
                {status.type !== "empty" && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {status.type === "served" && <CheckCircle2 className="size-4 text-emerald-500" />}
                        {status.type === "not-served" && <AlertTriangle className="size-4 text-amber-500" />}
                        {status.type === "invalid" && <XCircle className="size-4 text-red-400" />}
                    </span>
                )}
            </div>

            {/* Feedback message */}
            {status.type === "served" && (
                <p className="flex items-center gap-1.5 mt-1.5 text-xs text-emerald-600 font-medium">
                    <MapPin className="size-3" />
                    Great news — we serve {status.area}!
                </p>
            )}
            {status.type === "not-served" && (
                <p className="flex items-center gap-1.5 mt-1.5 text-xs text-amber-600 font-medium">
                    <MapPin className="size-3" />
                    We&apos;re not in your area yet.
                </p>
            )}
            {status.type === "invalid" && (
                <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-500 font-medium">
                    <XCircle className="size-3" />
                    Please enter a valid UK postcode.
                </p>
            )}
        </div>
    )
}

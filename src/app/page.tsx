"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import HomePage from "@/components/home-page"

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />
            <HomePage />
            <Footer />
        </main>
    )
}

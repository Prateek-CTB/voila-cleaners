import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import HomePage from "@/components/home-page"

export const metadata: Metadata = {
    title: "Premium Cleaning Services London | Office & Commercial Cleaning | Voila Cleaners",
    description: "Premium office cleaning, commercial cleaning, and serviced apartment cleaning across London. Trusted by 500+ businesses and homeowners. DBS-checked, insured, 5-star standards.",
    openGraph: {
        title: "Premium Cleaning Services London | Voila Cleaners",
        description: "London's premium cleaning company. Office cleaning, serviced apartments, end of tenancy, and luxury housekeeping. Trusted by 500+ clients.",
        url: "https://voila-cleaners.co.uk",
        siteName: "Voila Cleaners",
        images: [{ url: "https://voila-cleaners.co.uk/og/home.jpg", width: 1200, height: 630 }],
        type: "website",
    },
    alternates: { canonical: "https://voila-cleaners.co.uk" },
}

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F7F7F5]">
            <Navbar />
            <HomePage />
            <Footer />
        </main>
    )
}

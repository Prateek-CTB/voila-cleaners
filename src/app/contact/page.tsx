import type { Metadata } from "next"
import ContactPageContent from "@/components/contact-page-content"

export const metadata: Metadata = {
    title: "Contact Voila Cleaners | Get a Free Cleaning Quote London",
    description: "Request a free quote for office cleaning, commercial cleaning, or residential services in London. Fast response within 24 hours. No commitment, no hard sell.",
    openGraph: {
        title: "Contact Voila Cleaners | Free Quote",
        description: "Get a free cleaning quote for your London property or office. We respond within 24 hours.",
        url: "https://voila-cleaners.co.uk/contact",
    },
    alternates: { canonical: "https://voila-cleaners.co.uk/contact" },
}

export default function ContactPage() {
    return <ContactPageContent />
}

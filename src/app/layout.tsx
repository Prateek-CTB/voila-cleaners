import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: {
    default: "Premium Cleaning Services London | Voila Cleaners",
    template: "%s | Voila Cleaners",
  },
  description: "Premium office cleaning, commercial cleaning, and serviced apartment cleaning across London. Trusted by 500+ businesses and homeowners. DBS-checked, insured, 5-star standards.",
  metadataBase: new URL("https://voila-cleaners.co.uk"),
  openGraph: {
    siteName: "Voila Cleaners",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Voila Cleaners",
  description: "Premium cleaning services in London — offices, homes, serviced apartments, and specialist cleans.",
  url: "https://voila-cleaners.co.uk",
  telephone: "+442071129177",
  email: "info@voila-cleaners.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "66 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5246,
    longitude: -0.0849,
  },
  areaServed: { "@type": "City", name: "London" },
  priceRange: "££-£££",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "20:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Serviced Apartment Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "End of Tenancy Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Housekeeping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "After Builders Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retail Cleaning" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

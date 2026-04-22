import { MetadataRoute } from "next"

const base = "https://voila-cleaners.co.uk"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/services/commercial-cleaning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/services/serviced-apartments`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/services/retail-cleaning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/services/after-builders`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/services/end-of-tenancy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/services/luxury-housekeeping`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/services/deep-cleaning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/services/residential-cleaning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/office-cleaning/city-of-london`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/office-cleaning/canary-wharf`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/office-cleaning/mayfair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ]
}

import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: "https://voila-cleaners.co.uk/sitemap.xml",
    }
}

import type { MetadataRoute } from "next"
import { BUSINESS_INFO } from "@/lib/business-info"
import { CITIES } from "@/lib/cities"
import { getAllServiceDetailSlugs } from "@/lib/service-details"
import { getAllCommercialSlugs } from "@/lib/commercial"

const SITE_URL = BUSINESS_INFO.url

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const cityRoutes = CITIES.map((c) => `/service-areas/${c.slug}`)
  const serviceDetailRoutes = getAllServiceDetailSlugs().map((slug) => `/services/${slug}`)
  const commercialRoutes = getAllCommercialSlugs().map((slug) => `/commercial/${slug}`)

  const staticRoutes = [
    "",
    "/services",
    "/services/christmas-lighting",
    "/services/landscape-lighting",
    "/services/event-lighting",
    "/services/wedding-lighting",
    ...serviceDetailRoutes,
    "/commercial",
    ...commercialRoutes,
    "/service-areas",
    ...cityRoutes,
    "/packages/basic",
    "/packages/advanced",
    "/packages/gingerbread",
    "/booking",
    "/contact",
    "/loyalty",
    "/blog",
    "/terms",
  ]

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/service-areas/") || route.startsWith("/services/") || route.startsWith("/commercial/")
          ? 0.8
          : 0.6,
  }))
}

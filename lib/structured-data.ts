import { BUSINESS_INFO } from "./business-info"

const SITE_URL = BUSINESS_INFO.url

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`
}

/**
 * LocalBusiness schema — the core structured data Google uses to understand
 * the business name, phone, address, service area, hours, rating, and booking URL.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: SITE_URL,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    foundingDate: BUSINESS_INFO.foundingYear,
    image: absoluteUrl(BUSINESS_INFO.image),
    logo: absoluteUrl(BUSINESS_INFO.logo),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: BUSINESS_INFO.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.aggregateRating.ratingValue,
      reviewCount: BUSINESS_INFO.aggregateRating.reviewCount,
    },
    sameAs: BUSINESS_INFO.sameAs,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: BUSINESS_INFO.bookingUrl,
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Free Christmas Lighting Estimate",
      },
    },
  }
}

/** WebSite schema with search action. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    publisher: { "@id": `${SITE_URL}/#business` },
  }
}

/** FAQPage schema — enables FAQ rich results in Google. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/** Service schema for a specific service + optional city. */
export function serviceSchema(opts: {
  name: string
  description: string
  serviceType: string
  areaServed?: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: opts.areaServed
      ? { "@type": "City", name: opts.areaServed }
      : BUSINESS_INFO.areaServed.map((name) => ({ "@type": "City", name })),
    url: absoluteUrl(opts.url),
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
  }
}

/** BreadcrumbList schema for nested pages. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}

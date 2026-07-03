// Central source of truth for business NAP (Name, Address, Phone) and SEO data.
// Update these values in one place and they propagate to structured data, sitemap, and pages.

export const BUSINESS_INFO = {
  name: "Lone Star Lighting Displays",
  legalName: "Lone Star Lighting Displays LLC",
  description:
    "Professional Christmas light installation and holiday lighting serving Austin, Buda, Kyle, San Marcos, Dripping Springs and the greater Central Texas area. Design, installation, maintenance, takedown, and storage included.",
  url: "https://www.lonestarlightingdisplays.com",
  telephone: "+15127713091",
  telephoneDisplay: "(512) 771-3091",
  email: "info@lonestarlightingdisplays.com",
  priceRange: "$$",
  foundingYear: "2020",
  image: "/images/hero-christmas-lighting.png",
  logo: "/logo.png",
  // Update with the real physical/mailing address for best local SEO results.
  address: {
    streetAddress: "PO Box 1234",
    addressLocality: "Buda",
    addressRegion: "TX",
    postalCode: "78610",
    addressCountry: "US",
  },
  geo: {
    latitude: 30.0852,
    longitude: -97.8403,
  },
  // Cities served — used for areaServed in structured data.
  areaServed: [
    "Austin, TX",
    "Buda, TX",
    "Kyle, TX",
    "San Marcos, TX",
    "Dripping Springs, TX",
    "Cedar Park, TX",
    "Round Rock, TX",
    "Georgetown, TX",
    "Lakeway, TX",
    "Bee Cave, TX",
    "Pflugerville, TX",
    "Leander, TX",
  ],
  // Hours: holiday lighting is seasonal; adjust as needed.
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],
  sameAs: [
    "https://www.facebook.com/lonestarlightingdisplays",
    "https://www.instagram.com/lonestarlightingdisplays",
  ],
  // Aggregate rating — swap with real review counts/values when available.
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "127",
  },
  bookingUrl: "https://www.lonestarlightingdisplays.com/booking",
} as const

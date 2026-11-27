export const SITE_CONFIG = {
  business: {
    name: "Lone Star Lighting Displays",
    owner: "Christian Shirrell",
    phone: "512-771-3091",
    phoneHref: "tel:+15127713091",
    textHref: "sms:+15127713091",
    email: "LoneStarLightingDisplays@outlook.com",
    url: "https://www.lonestarlightingdisplays.com",
    logo: "/logo.png",
    experience: "10+ years of lighting experience",
    description:
      "Professional holiday lighting for Central Texas homes, HOAs, and commercial properties with design, installation, maintenance, takedown, and storage.",
  },
  claims: {
    isFullyInsured: true,
    isBonded: false,
    hasPublicAddress: false,
    showStartingPrices: false,
    showAggregateRating: false,
    showWarranty: false,
    showGuarantee: false,
    showFoundingYear: false,
    showCustomerCounts: false,
  },
  serviceAreas: [
    { slug: "kyle", name: "Kyle", region: "Hays County" },
    { slug: "buda", name: "Buda", region: "Hays County" },
    { slug: "san-marcos", name: "San Marcos", region: "Hays County" },
    { slug: "austin", name: "South Austin", region: "Travis County" },
  ],
  services: [
    { slug: "christmas-lighting", name: "Christmas Lighting", active: true },
    { slug: "permanent-lighting", name: "Permanent Lighting", active: true },
    { slug: "landscape-lighting", name: "Landscape Lighting", active: true },
    { slug: "event-lighting", name: "Event Lighting", active: true },
  ],
  pricing: {
    residentialLabel: "Custom estimate",
    commercialLabel: "Custom proposal",
  },
} as const

export type ApprovedServiceArea = (typeof SITE_CONFIG.serviceAreas)[number]
export type SiteService = (typeof SITE_CONFIG.services)[number]

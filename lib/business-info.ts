// Central source of truth for business NAP (Name, Address, Phone) and SEO data.
// Update these values in one place and they propagate to structured data, sitemap, and pages.

import { SITE_CONFIG } from "./site-config"

export const BUSINESS_INFO = {
  name: SITE_CONFIG.business.name,
  legalName: SITE_CONFIG.business.name,
  description: SITE_CONFIG.business.description,
  url: SITE_CONFIG.business.url,
  telephone: "+15127713091",
  telephoneDisplay: SITE_CONFIG.business.phone,
  email: SITE_CONFIG.business.email,
  image: "/images/premium-hillcountry-estate.png",
  logo: SITE_CONFIG.business.logo,
  areaServed: SITE_CONFIG.serviceAreas.map((area) => `${area.name}, TX`),
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],
  sameAs: [],
} as const

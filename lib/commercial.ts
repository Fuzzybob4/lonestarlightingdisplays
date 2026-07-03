// Data for commercial holiday lighting landing pages under /commercial/[slug].
// Reuses the ServiceDetail shape so it can render with ServiceDetailTemplate.

import type { Metadata } from "next"
import type { ServiceDetail } from "@/lib/service-details"

export const COMMERCIAL_PAGES: ServiceDetail[] = [
  {
    slug: "hoa",
    name: "HOA & Community Holiday Lighting",
    metaTitle: "HOA Christmas Light Installation Austin TX | Community Holiday Lighting | Lone Star",
    metaDescription:
      "Professional HOA and community holiday lighting in Austin & Central Texas. Entrances, monuments, common areas & clubhouses. Fully insured, contract-ready. Free proposals.",
    keywords:
      "HOA Christmas lights Austin, community holiday lighting, HOA holiday light installation, neighborhood entrance Christmas lights, subdivision holiday lighting Austin TX, commercial Christmas light installer HOA",
    heroTitle: "HOA & Community Holiday Lighting",
    heroSubtitle:
      "Make a brilliant first impression at every entrance. Turnkey holiday lighting for HOAs, master-planned communities, and property management groups.",
    heroImage: "/images/christmas-lighting.jpeg",
    secondaryImage: "/images/christmas-elegant.png",
    intro:
      "Your community's entrances, monuments, and common areas set the tone for the entire neighborhood during the holidays. Lone Star Lighting Displays partners with HOAs and property managers across Central Texas to deliver consistent, professional displays that residents love and boards can budget with confidence. We handle design, installation, in-season maintenance, takedown, and storage — all under one fully insured, contract-ready agreement.",
    benefits: [
      { title: "Single Point of Contact", description: "One dedicated account manager for your entire community — no chasing multiple vendors." },
      { title: "Fully Insured & Bonded", description: "Certificates of insurance provided up front to satisfy board and management requirements." },
      { title: "Budget-Friendly Contracts", description: "Multi-year agreements with locked pricing make holiday lighting easy to plan and approve." },
      { title: "Consistent Brand Look", description: "Cohesive design across every entrance, monument, and amenity center for a polished community image." },
    ],
    process: [
      { step: "1", title: "Site Walk & Proposal", description: "We tour your entrances and common areas and deliver a detailed written proposal for the board." },
      { step: "2", title: "Board Approval", description: "Clear scope, pricing, and insurance docs make approval simple at your next meeting." },
      { step: "3", title: "Installation", description: "Our crews install on schedule, working around community traffic and events." },
      { step: "4", title: "Season Support & Takedown", description: "We monitor, maintain, then remove and store everything after the season." },
    ],
    features: [
      "Entrance & monument lighting",
      "Clubhouse & amenity centers",
      "Tree wrapping for common areas",
      "Commercial-grade LED products",
      "Certificate of insurance provided",
      "Multi-year contract options",
      "In-season maintenance included",
      "Takedown & storage included",
    ],
    faqs: [
      { question: "Do you provide certificates of insurance for our HOA?", answer: "Yes. We're fully insured and provide certificates of insurance up front, naming your HOA or management company as needed to satisfy board requirements." },
      { question: "Can you handle multiple entrances and common areas?", answer: "Absolutely. We specialize in community-wide displays covering entrances, monuments, clubhouses, pools, and amenity centers with a consistent, cohesive look." },
      { question: "Do you offer multi-year contracts?", answer: "Yes. Many communities prefer multi-year agreements with locked-in pricing, which simplifies budgeting and ensures the same trusted team returns each year." },
      { question: "Who maintains the lights during the season?", answer: "We do. Every commercial agreement includes in-season maintenance, so any outages are addressed quickly at no extra charge." },
    ],
    ctaTitle: "Request an HOA Lighting Proposal",
    ctaText: "Get a detailed, board-ready proposal for your community's holiday lighting. Fully insured and contract-ready.",
  },
  {
    slug: "shopping-centers",
    name: "Shopping Center & Retail Holiday Lighting",
    metaTitle: "Commercial Christmas Lights Austin TX | Shopping Center & Retail Holiday Lighting",
    metaDescription:
      "Drive holiday foot traffic with professional commercial Christmas lighting for shopping centers and retail in Austin & Central Texas. Fully insured. Free proposals.",
    keywords:
      "commercial Christmas lights Austin, shopping center holiday lighting, retail Christmas light installation, commercial holiday lighting Austin TX, storefront Christmas lights, mall holiday lighting Central Texas",
    heroTitle: "Shopping Center & Retail Holiday Lighting",
    heroSubtitle:
      "Turn holiday shoppers into customers. Eye-catching commercial displays for shopping centers, strip malls, and retail storefronts.",
    heroImage: "/images/christmas-colorful.jpeg",
    secondaryImage: "/images/advanced-package.png",
    intro:
      "The holidays are the most important season of the year for retail. A professionally lit shopping center draws shoppers in, extends dwell time, and creates the festive atmosphere customers expect. Lone Star Lighting Displays designs and installs commercial-grade displays for shopping centers and retail properties across Central Texas — from rooflines and entrances to tree wrapping and walkways — with minimal disruption to business hours.",
    benefits: [
      { title: "Drive Foot Traffic", description: "Festive, inviting lighting attracts shoppers and helps your tenants capture more holiday sales." },
      { title: "After-Hours Installation", description: "We work around your operating hours to avoid disrupting customers and tenants." },
      { title: "Commercial-Grade Durability", description: "Heavy-duty products built to withstand a full season of weather and operation." },
      { title: "Property-Wide Consistency", description: "A unified look across storefronts, parking areas, and common spaces." },
    ],
    process: [
      { step: "1", title: "Property Assessment", description: "We evaluate your center's layout, power access, and high-visibility areas." },
      { step: "2", title: "Design Proposal", description: "A detailed plan and quote tailored to your property and budget." },
      { step: "3", title: "Off-Hours Install", description: "Installation scheduled around business hours to keep your center open." },
      { step: "4", title: "Maintenance & Removal", description: "Season-long upkeep, then complete takedown and storage." },
    ],
    features: [
      "Roofline & facade lighting",
      "Entrance & walkway displays",
      "Parking lot tree wrapping",
      "Large-scale commercial products",
      "After-hours installation",
      "Certificate of insurance provided",
      "In-season maintenance included",
      "Takedown & storage included",
    ],
    faqs: [
      { question: "Will installation disrupt my tenants or customers?", answer: "No. We schedule installation during off-hours and work efficiently to keep your center open and accessible throughout the process." },
      { question: "Can you light an entire shopping center?", answer: "Yes. We handle property-wide displays including rooflines, entrances, walkways, and parking lot trees for a cohesive, professional look." },
      { question: "Are your products commercial-grade?", answer: "Always. Commercial properties get heavy-duty, weather-resistant products designed to perform reliably through the entire season." },
      { question: "Do you provide insurance documentation?", answer: "Yes. We're fully insured and provide certificates of insurance to satisfy property management and landlord requirements." },
    ],
    ctaTitle: "Request a Retail Lighting Proposal",
    ctaText: "Get a custom commercial lighting proposal that drives holiday foot traffic to your property.",
  },
  {
    slug: "restaurants",
    name: "Restaurant & Hospitality Holiday Lighting",
    metaTitle: "Restaurant Holiday Lighting Austin TX | Commercial Christmas Lights for Hospitality",
    metaDescription:
      "Professional holiday lighting for restaurants, bars & hospitality venues in Austin & Central Texas. Create a festive atmosphere that fills tables. Free proposals.",
    keywords:
      "restaurant Christmas lights Austin, hospitality holiday lighting, bar patio Christmas lights, restaurant holiday decor Austin TX, commercial patio lighting, venue holiday lighting Central Texas",
    heroTitle: "Restaurant & Hospitality Holiday Lighting",
    heroSubtitle:
      "Set the mood that fills tables. Warm, festive lighting for restaurants, bars, patios, and hospitality venues.",
    heroImage: "/images/event-lighting.png",
    secondaryImage: "/images/event-dramatic.png",
    intro:
      "Atmosphere is everything in hospitality. The right holiday lighting makes your restaurant or bar the place people want to be all season long — cozy patios, glowing entrances, and warm dining rooms that photograph beautifully and keep guests lingering. Lone Star Lighting Displays creates custom holiday environments for Central Texas restaurants and venues, with installation scheduled around your service hours.",
    benefits: [
      { title: "Fill More Tables", description: "An inviting, festive atmosphere draws in holiday diners and boosts reservations." },
      { title: "Instagram-Worthy Ambiance", description: "Beautiful lighting guests want to photograph and share, marketing your venue for free." },
      { title: "Patio & Indoor Options", description: "Warm string lighting, accent lighting, and displays for every part of your venue." },
      { title: "Works Around Service", description: "We install during closed hours so your service is never interrupted." },
    ],
    process: [
      { step: "1", title: "Venue Consultation", description: "We discuss your vibe, layout, and the guest experience you want to create." },
      { step: "2", title: "Custom Design", description: "A lighting plan tailored to your patio, entrance, and dining areas." },
      { step: "3", title: "Off-Hours Install", description: "Installed before opening or after close so service flows uninterrupted." },
      { step: "4", title: "Support & Takedown", description: "We maintain the display all season and remove it when you're ready." },
    ],
    features: [
      "Patio & deck string lighting",
      "Entrance & host-stand displays",
      "Dining room accent lighting",
      "Bar & lounge ambiance",
      "Dimmable & warm-white options",
      "Off-hours installation",
      "In-season maintenance included",
      "Takedown & storage included",
    ],
    faqs: [
      { question: "Can you install without interrupting service?", answer: "Yes. We schedule installation before opening or after closing so your guests and staff are never affected." },
      { question: "Do you light outdoor patios?", answer: "Definitely. Patios are one of our specialties — warm string lighting and accent fixtures create an inviting, year-round-feeling space for holiday guests." },
      { question: "Can the lighting match our brand or theme?", answer: "Yes. We tailor color temperature, style, and placement to match your venue's atmosphere, whether that's cozy and rustic or bright and modern." },
      { question: "Is the lighting safe for food-service areas?", answer: "Absolutely. We use commercial-grade, properly rated products and install to code, keeping all walkways and service areas safe and clear." },
    ],
    ctaTitle: "Request a Restaurant Lighting Proposal",
    ctaText: "Create a festive atmosphere that fills tables all season. Get a custom proposal for your venue.",
  },
  {
    slug: "apartments",
    name: "Apartment & Multifamily Holiday Lighting",
    metaTitle: "Apartment Holiday Lighting Austin TX | Multifamily Christmas Light Installation",
    metaDescription:
      "Professional holiday lighting for apartment communities & multifamily properties in Austin & Central Texas. Leasing offices, entrances & amenities. Free proposals.",
    keywords:
      "apartment Christmas lights Austin, multifamily holiday lighting, apartment community holiday lights, leasing office Christmas lighting, property management holiday lighting Austin TX",
    heroTitle: "Apartment & Multifamily Holiday Lighting",
    heroSubtitle:
      "Boost resident satisfaction and leasing appeal. Professional holiday lighting for apartment communities and multifamily properties.",
    heroImage: "/images/christmas-elegant.png",
    secondaryImage: "/images/christmas-lighting.jpeg",
    intro:
      "Holiday lighting is an easy win for apartment communities — it delights current residents, photographs beautifully for leasing marketing, and signals a well-managed property to prospects touring during the season. Lone Star Lighting Displays works with property managers and ownership groups across Central Texas to light leasing offices, entrances, clubhouses, and amenity areas, all under one insured, hassle-free agreement.",
    benefits: [
      { title: "Higher Resident Satisfaction", description: "Festive common areas show residents you invest in their community experience." },
      { title: "Stronger Leasing Appeal", description: "A beautifully lit property stands out to prospects touring during the holidays." },
      { title: "Turnkey for Property Managers", description: "Design, install, maintenance, and takedown handled entirely by our team." },
      { title: "Fully Insured", description: "Certificates of insurance provided to satisfy ownership and management requirements." },
    ],
    process: [
      { step: "1", title: "Property Walk", description: "We assess leasing offices, entrances, clubhouses, and amenity areas." },
      { step: "2", title: "Proposal", description: "A clear, budget-friendly plan ready for ownership approval." },
      { step: "3", title: "Installation", description: "Crews install around resident traffic and community schedules." },
      { step: "4", title: "Maintenance & Removal", description: "Season-long support, then full takedown and storage." },
    ],
    features: [
      "Leasing office & entrance displays",
      "Clubhouse & amenity lighting",
      "Tree wrapping for common areas",
      "Pool & courtyard accents",
      "Commercial-grade products",
      "Certificate of insurance provided",
      "In-season maintenance included",
      "Takedown & storage included",
    ],
    faqs: [
      { question: "Do you work with property management companies?", answer: "Yes. We regularly partner with property managers and ownership groups, providing insured, contract-ready service across multiple properties if needed." },
      { question: "Which areas do you typically light?", answer: "Most communities focus on leasing offices, main entrances, clubhouses, and amenity areas — but we can light as much or as little as your budget allows." },
      { question: "Can you service multiple properties in our portfolio?", answer: "Absolutely. We can coordinate installations across an entire portfolio with consistent design and a single point of contact." },
      { question: "Is installation disruptive to residents?", answer: "No. We schedule and stage our work to minimize disruption, keeping walkways and parking areas safe and accessible throughout." },
    ],
    ctaTitle: "Request a Multifamily Lighting Proposal",
    ctaText: "Delight residents and boost leasing appeal with turnkey holiday lighting. Get a proposal for your community.",
  },
  {
    slug: "churches",
    name: "Church & Place of Worship Holiday Lighting",
    metaTitle: "Church Holiday Lighting Austin TX | Christmas Light Installation for Places of Worship",
    metaDescription:
      "Professional Christmas lighting for churches & places of worship in Austin & Central Texas. Celebrate the season with a beautiful, welcoming display. Free proposals.",
    keywords:
      "church Christmas lights Austin, place of worship holiday lighting, church holiday light installation, religious facility Christmas lights Austin TX, congregation holiday lighting Central Texas",
    heroTitle: "Church & Place of Worship Holiday Lighting",
    heroSubtitle:
      "Celebrate the season with a warm, welcoming display. Professional Christmas lighting for churches and places of worship.",
    heroImage: "/images/christmas-lighting.jpeg",
    secondaryImage: "/images/basic-package.png",
    intro:
      "The holiday season is a meaningful time for congregations, and a beautiful display welcomes members and visitors alike to your services and events. Lone Star Lighting Displays helps churches and places of worship across Central Texas create warm, dignified holiday lighting — from rooflines and steeples to entrances, walkways, and grounds — with budget-conscious proposals and reliable, fully insured service.",
    benefits: [
      { title: "Welcoming Atmosphere", description: "A beautiful display invites members and visitors to your holiday services and events." },
      { title: "Safe, Lit Walkways", description: "Well-lit entrances and paths keep your congregation safe during evening services." },
      { title: "Budget-Conscious Plans", description: "We work within your budget to create maximum impact for your community." },
      { title: "Fully Insured Service", description: "Certificates of insurance provided for peace of mind and facility requirements." },
    ],
    process: [
      { step: "1", title: "Site Consultation", description: "We tour your facility and grounds to understand your vision and budget." },
      { step: "2", title: "Proposal", description: "A clear plan and quote tailored to your congregation's needs." },
      { step: "3", title: "Installation", description: "Scheduled around your services and events for zero disruption." },
      { step: "4", title: "Support & Takedown", description: "Season-long maintenance, then complete removal and storage." },
    ],
    features: [
      "Roofline & steeple lighting",
      "Entrance & doorway displays",
      "Walkway & path lighting",
      "Grounds & tree wrapping",
      "Nativity & feature accenting",
      "Certificate of insurance provided",
      "In-season maintenance included",
      "Takedown & storage included",
    ],
    faqs: [
      { question: "Can you work within a limited budget?", answer: "Yes. We design budget-conscious proposals and can phase or scale a display to make the most of whatever your congregation has allocated." },
      { question: "Will installation interfere with our services?", answer: "No. We schedule around your worship services, events, and gatherings so your congregation is never disrupted." },
      { question: "Can you light steeples and tall features?", answer: "Yes. Our team is equipped to safely light rooflines, steeples, and tall architectural features that make your building stand out." },
      { question: "Do you light walkways for evening events?", answer: "Absolutely. Safe, well-lit entrances and paths are a priority, especially for evening services and holiday gatherings." },
    ],
    ctaTitle: "Request a Church Lighting Proposal",
    ctaText: "Welcome your congregation with a beautiful holiday display. Get a budget-friendly proposal for your facility.",
  },
]

export function getCommercialBySlug(slug: string): ServiceDetail | undefined {
  return COMMERCIAL_PAGES.find((c) => c.slug === slug)
}

export function getAllCommercialSlugs(): string[] {
  return COMMERCIAL_PAGES.map((c) => c.slug)
}

export function commercialMetadata(data: ServiceDetail): Metadata {
  const url = `/commercial/${data.slug}`
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
      url,
    },
  }
}

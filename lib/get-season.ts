export type Season = "general" | "holiday"

// Define types for the seasonal content
export interface ServiceItem {
  title: string
  description: string
  image: string
}

export interface SeasonalContentData {
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  ctaText: string
  featuredServices: ServiceItem[]
}

export function getCurrentSeason(): Season {
  // Uncomment one of these lines to force a specific season:

  // return "holiday"; // Force holiday season
  //return "general"; // Force general season

  const today = new Date()
  const month = today.getMonth() + 1 // JavaScript months are 0-indexed
  const day = today.getDate()

  // Holiday season: August 1 - January 15
  if (
    (month === 8 && day >= 1) || // Aug 1 or later
    month === 9 || //All of September
    month === 10 || // All of October
    month === 11 || // All of November
    month === 12 || // All of December
    (month === 1 && day <= 15) // Jan 1-15
  ) {
    return "holiday"
  }

  // General season: January 16 - July 31
  return "general"
}

export function getSeasonalContent(): SeasonalContentData {
  const season = getCurrentSeason()

  if (season === "holiday") {
    return {
      heroTitle: "Stunning Holiday Displays",
      heroSubtitle: "Transform Your Home with Professional Christmas Lighting",
      heroImage: "/images/holiday-lights.png",
      ctaText: "Book Your Holiday Display",
      featuredServices: [
        {
          title: "Basic Package",
          description: "Beautiful roofline lighting to highlight your home's architecture",
          image: "/images/holiday-basic.png",
        },
        {
          title: "Advanced Package",
          description: "Roofline lighting plus wreaths & garlands for a complete look",
          image: "/images/holiday-advanced.png",
        },
        {
          title: "Gingerbread Package",
          description: "Complete holiday transformation with all the trimmings",
          image: "/images/holiday-premium.png",
        },
      ],
    }
  }

  return {
    heroTitle: "Transforming Yards, Homes & Patios into Nighttime Wonders",
    heroSubtitle: "Professional Outdoor Lighting Solutions",
    heroImage: "/images/outdoor-lighting.png",
    ctaText: "Enhance Your Outdoor Space",
    featuredServices: [
      {
        title: "Landscape Lighting",
        description: "Highlight your garden's best features with strategic lighting",
        image: "/images/landscape-lighting.png",
      },
      {
        title: "Patio & Deck Lighting",
        description: "Create the perfect ambiance for outdoor entertaining",
        image: "/images/patio.png",
      },
      {
        title: "Security Lighting",
        description: "Enhance safety and security around your property",
        image: "/images/security-lighting.png",
      },
    ],
  }
}

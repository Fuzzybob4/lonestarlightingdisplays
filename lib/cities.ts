// Per-city data powering the reusable city page template.
// Each entry produces a unique, content-rich /service-areas/[slug] page with
// local neighborhoods, FAQs, and copy — avoiding thin/duplicate content.

import type { Metadata } from "next"

export type CityNeighborhood = {
  name: string
  description: string
  highlights: string[]
}

export type CityFaq = {
  question: string
  answer: string
}

export type CityData = {
  slug: string
  city: string
  county: string
  established: string
  customers: string
  heroImage: string
  secondaryImage: string
  // Short intro paragraph (unique per city).
  intro: string
  // Longer local context paragraph for SEO depth.
  localContext: string
  neighborhoods: CityNeighborhood[]
  faqs: CityFaq[]
  // Distance/relationship to Austin for internal context.
  proximity: string
}

export const CITIES: CityData[] = [
  {
    slug: "austin",
    city: "Austin",
    county: "Travis County",
    established: "2020",
    customers: "500+",
    heroImage: "/images/hero-christmas-lighting.png",
    secondaryImage: "/images/christmas-elegant.png",
    proximity: "Our home base in the heart of Central Texas",
    intro:
      "Lone Star Lighting Displays is Austin's trusted name for professional Christmas light installation. From South Austin bungalows to Westlake estates, we design, install, maintain, and remove holiday lighting so you never touch a ladder.",
    localContext:
      "Austin homes range from historic Travis Heights cottages to sprawling Circle C properties and modern downtown condos. Our team understands the architectural variety across the city and tailors each roofline, tree-wrapping, and landscape design to your home. We handle HOA-friendly installs in master-planned communities and bold custom displays for homeowners who want to stand out on their street.",
    neighborhoods: [
      {
        name: "South Austin",
        description: "Eclectic neighborhoods from Travis Heights to Circle C",
        highlights: ["Custom roofline designs", "Mature tree wrapping", "HOA-compliant displays"],
      },
      {
        name: "Westlake",
        description: "Upscale Hill Country estates with dramatic architecture",
        highlights: ["Large-scale installations", "Premium warm-white displays", "Estate lighting"],
      },
      {
        name: "Circle C Ranch",
        description: "Master-planned community with consistent home styles",
        highlights: ["Neighborhood packages", "Energy-efficient LEDs", "Quick scheduling"],
      },
      {
        name: "Zilker & Barton Hills",
        description: "Close-knit central neighborhoods near the greenbelt",
        highlights: ["Classic roofline lighting", "Wreaths & garlands", "Smart timer controls"],
      },
    ],
    faqs: [
      {
        question: "How much does Christmas light installation cost in Austin?",
        answer:
          "Most Austin homes range from $600 for basic roofline lighting to $2,500+ for full displays with tree wrapping and landscape lighting. Every estimate is free and based on your home's size and design goals.",
      },
      {
        question: "When should I book holiday lighting in Austin?",
        answer:
          "We recommend booking by September or October. Austin's installation calendar fills quickly, and early booking secures your preferred installation date before the holiday rush.",
      },
      {
        question: "Do you remove and store the lights after the holidays?",
        answer:
          "Yes. Every package includes takedown in January and optional climate-controlled storage so your lights stay organized and ready for next season.",
      },
      {
        question: "Are your displays HOA-compliant?",
        answer:
          "Absolutely. We're experienced with Austin-area HOA guidelines and design displays that look spectacular while meeting community standards.",
      },
    ],
  },
  {
    slug: "buda",
    city: "Buda",
    county: "Hays County",
    established: "2021",
    customers: "200+",
    heroImage: "/images/christmas-elegant.png",
    secondaryImage: "/images/advanced-package.png",
    proximity: "Just 15 miles south of Austin along I-35",
    intro:
      "Buda Christmas lights done right. We bring professional holiday lighting to Garlic Creek, Sunfield, and every Buda neighborhood — complete design, installation, maintenance, and removal included.",
    localContext:
      "Buda's rapid growth means a mix of established family neighborhoods and brand-new developments. We work with both traditional homes in Garlic Creek and contemporary builds in Sunfield, customizing each display to the home's style. As a locally based team, we offer faster service calls and quicker maintenance than out-of-town competitors.",
    neighborhoods: [
      {
        name: "Garlic Creek",
        description: "Established family neighborhood with beautiful traditional homes",
        highlights: ["Classic lighting packages", "Family-friendly designs", "Reliable annual service"],
      },
      {
        name: "Sunfield",
        description: "Modern development with contemporary architecture",
        highlights: ["Contemporary designs", "Energy-efficient solutions", "Smart controls"],
      },
      {
        name: "Buda Mill Creek",
        description: "Scenic neighborhood with mature trees",
        highlights: ["Tree wrapping specialists", "Landscape integration", "Custom solutions"],
      },
      {
        name: "Elm Grove",
        description: "Growing community with diverse home styles",
        highlights: ["Roofline lighting", "Wreaths & garlands", "Flexible packages"],
      },
    ],
    faqs: [
      {
        question: "How much do Buda Christmas lights cost?",
        answer:
          "Buda installations typically start at $600 for roofline lighting and reach $2,500+ for complete displays. We provide free, no-obligation estimates tailored to your home.",
      },
      {
        question: "When should I book in Buda?",
        answer:
          "Book by September for the best installation dates. Popular neighborhoods like Garlic Creek and Sunfield fill up fast during the holiday season.",
      },
      {
        question: "Do you work with Buda HOAs?",
        answer:
          "Yes. We're familiar with Buda neighborhood guidelines and ensure your display meets community standards while still looking incredible.",
      },
      {
        question: "Do you handle takedown and storage in Buda?",
        answer:
          "Every package includes January takedown, and we offer optional storage so you don't have to find space in your garage.",
      },
    ],
  },
  {
    slug: "kyle",
    city: "Kyle",
    county: "Hays County",
    established: "2021",
    customers: "300+",
    heroImage: "/images/advanced-package.png",
    secondaryImage: "/images/christmas-colorful.jpeg",
    proximity: "20 miles south of Austin on the I-35 corridor",
    intro:
      "Professional holiday lighting in Kyle, TX. From Plum Creek to Waterleaf, we handle the design, installation, and removal of stunning Christmas displays for homes and businesses.",
    localContext:
      "Kyle is one of the fastest-growing cities in Texas, with master-planned communities like Plum Creek setting the standard for neighborhood charm. We design cohesive displays that fit Kyle's family-oriented communities, with energy-efficient LEDs and smart timers that keep your display effortless all season long.",
    neighborhoods: [
      {
        name: "Plum Creek",
        description: "Award-winning master-planned community with front porches",
        highlights: ["Porch & roofline lighting", "Neighborhood packages", "Classic warm-white"],
      },
      {
        name: "Waterleaf",
        description: "Popular family community with modern homes",
        highlights: ["Contemporary designs", "Tree wrapping", "Smart controls"],
      },
      {
        name: "Kyle Crossing",
        description: "Convenient community near shopping and schools",
        highlights: ["Quick installs", "Roofline lighting", "Affordable packages"],
      },
      {
        name: "Hometown Kyle",
        description: "Established central neighborhood",
        highlights: ["Custom designs", "Mature tree lighting", "Reliable service"],
      },
    ],
    faqs: [
      {
        question: "How much does Christmas light installation cost in Kyle?",
        answer:
          "Kyle homes generally range from $600 to $2,500+ depending on roofline size, tree wrapping, and landscape lighting. Estimates are always free.",
      },
      {
        question: "When should I book holiday lighting in Kyle?",
        answer:
          "September and October are ideal. Kyle's growing neighborhoods book quickly, so early scheduling locks in your installation date.",
      },
      {
        question: "Do you serve businesses in Kyle?",
        answer:
          "Yes. We light up Kyle storefronts, shopping centers, and offices in addition to residential homes.",
      },
      {
        question: "Is removal included in Kyle?",
        answer:
          "Yes. We return in January to remove everything, and optional storage keeps your lights safe until next year.",
      },
    ],
  },
  {
    slug: "san-marcos",
    city: "San Marcos",
    county: "Hays County",
    established: "2022",
    customers: "150+",
    heroImage: "/images/gingerbread-package.png",
    secondaryImage: "/images/christmas-lighting.jpeg",
    proximity: "30 miles south of Austin, halfway to San Antonio",
    intro:
      "San Marcos holiday lighting from a team that knows the area. We bring professional Christmas light installation to historic downtown homes, river-area residences, and local businesses.",
    localContext:
      "San Marcos blends historic charm with a vibrant university community. Our team highlights the character of historic downtown homes while delivering modern, energy-efficient displays for newer subdivisions. We're proud to serve both longtime residents and local businesses looking to draw holiday foot traffic.",
    neighborhoods: [
      {
        name: "Historic Downtown",
        description: "Character-rich homes near the square",
        highlights: ["Heritage-style lighting", "Architectural accenting", "Custom designs"],
      },
      {
        name: "Blanco Gardens",
        description: "Established neighborhood near the river",
        highlights: ["Tree wrapping", "Roofline lighting", "Warm-white displays"],
      },
      {
        name: "River Ridge",
        description: "Scenic hillside community",
        highlights: ["Landscape lighting", "Large-scale installs", "Custom solutions"],
      },
      {
        name: "Springtown",
        description: "Convenient community near shopping",
        highlights: ["Affordable packages", "Quick installs", "Smart timers"],
      },
    ],
    faqs: [
      {
        question: "How much do Christmas lights cost in San Marcos?",
        answer:
          "Most San Marcos homes range from $600 to $2,500+. We provide free estimates based on your home's size and the look you want.",
      },
      {
        question: "Do you light historic downtown San Marcos homes?",
        answer:
          "Yes. We specialize in accenting the unique architecture of historic homes with tasteful, period-appropriate lighting.",
      },
      {
        question: "When should I book in San Marcos?",
        answer:
          "We recommend booking by early fall. San Marcos installations fill up quickly during the holiday season.",
      },
      {
        question: "Do you serve San Marcos businesses?",
        answer:
          "Absolutely. We help downtown shops and restaurants create inviting holiday displays that attract customers.",
      },
    ],
  },
  {
    slug: "dripping-springs",
    city: "Dripping Springs",
    county: "Hays County",
    established: "2022",
    customers: "100+",
    heroImage: "/images/basic-package.png",
    secondaryImage: "/images/christmas-elegant.png",
    proximity: "25 miles west of Austin in the Hill Country",
    intro:
      "Luxury holiday lighting in Dripping Springs and the Texas Hill Country. We design and install premium Christmas displays for estates, ranches, and acreage homes in Caliterra, Belterra, and beyond.",
    localContext:
      "Known as the Gateway to the Hill Country, Dripping Springs features large lots, custom homes, and sprawling estates. These properties call for larger-scale installations and dramatic tree lighting across mature oaks. Our team is equipped to light acreage homes and luxury estates with displays that match the area's upscale character.",
    neighborhoods: [
      {
        name: "Caliterra",
        description: "Hill Country master-planned community",
        highlights: ["Estate-scale installs", "Mature oak wrapping", "Premium warm-white"],
      },
      {
        name: "Belterra",
        description: "Popular family community with custom homes",
        highlights: ["Roofline & landscape", "Smart controls", "Cohesive designs"],
      },
      {
        name: "Headwaters",
        description: "Modern Hill Country development",
        highlights: ["Contemporary displays", "Energy-efficient LEDs", "Custom packages"],
      },
      {
        name: "Dripping Springs Ranch",
        description: "Acreage homes and ranch properties",
        highlights: ["Large-scale lighting", "Driveway & gate accents", "Tree lighting"],
      },
    ],
    faqs: [
      {
        question: "How much does holiday lighting cost in Dripping Springs?",
        answer:
          "Hill Country estates often start higher due to larger rooflines and acreage. Most projects range from $1,200 to $5,000+. We provide detailed free estimates for every property.",
      },
      {
        question: "Can you light large estates and acreage homes?",
        answer:
          "Yes. We're equipped to handle large-scale installations, tall rooflines, mature oak wrapping, and long driveway or gate lighting.",
      },
      {
        question: "When should I book in Dripping Springs?",
        answer:
          "Larger Hill Country projects require more planning, so we recommend booking by late summer or early fall.",
      },
      {
        question: "Do you offer maintenance during the season?",
        answer:
          "Every display is backed by our in-season maintenance guarantee — if a bulb or strand fails, we fix it fast at no extra charge.",
      },
    ],
  },
  {
    slug: "cedar-park",
    city: "Cedar Park",
    county: "Williamson County",
    established: "2022",
    customers: "120+",
    heroImage: "/images/christmas-colorful.jpeg",
    secondaryImage: "/images/advanced-package.png",
    proximity: "18 miles northwest of Austin",
    intro:
      "Cedar Park Christmas light installation for homes and businesses. We design, hang, maintain, and remove professional holiday displays throughout the Cedar Park area.",
    localContext:
      "Cedar Park is a thriving family community in Williamson County with a mix of established neighborhoods and newer master-planned developments. We create cohesive, HOA-friendly displays for communities like Buttercup Creek and Ranch at Brushy Creek, with energy-efficient LEDs designed to handle Central Texas weather.",
    neighborhoods: [
      {
        name: "Buttercup Creek",
        description: "Established neighborhood with mature trees",
        highlights: ["Tree wrapping", "Classic roofline lighting", "Reliable service"],
      },
      {
        name: "Ranch at Brushy Creek",
        description: "Master-planned community with consistent styles",
        highlights: ["Neighborhood packages", "HOA-compliant displays", "Warm-white LEDs"],
      },
      {
        name: "Cypress Creek",
        description: "Family community near parks and trails",
        highlights: ["Roofline lighting", "Smart timers", "Custom designs"],
      },
      {
        name: "Twin Creeks",
        description: "Upscale community with golf-course homes",
        highlights: ["Premium displays", "Landscape lighting", "Large-scale installs"],
      },
    ],
    faqs: [
      {
        question: "How much does Christmas light installation cost in Cedar Park?",
        answer:
          "Cedar Park homes typically range from $600 to $2,500+ depending on size and design. All estimates are free.",
      },
      {
        question: "When should I book holiday lighting in Cedar Park?",
        answer:
          "Book by September or October to secure your preferred date before the holiday rush.",
      },
      {
        question: "Are your Cedar Park displays HOA-compliant?",
        answer:
          "Yes. We design displays that meet Williamson County HOA guidelines while still standing out.",
      },
      {
        question: "Do you include takedown in Cedar Park?",
        answer:
          "Yes. We return in January to remove your display, with optional storage available.",
      },
    ],
  },
  {
    slug: "round-rock",
    city: "Round Rock",
    county: "Williamson County",
    established: "2022",
    customers: "140+",
    heroImage: "/images/advanced-package.png",
    secondaryImage: "/images/christmas-elegant.png",
    proximity: "20 miles north of Austin",
    intro:
      "Round Rock holiday lighting for homes and businesses. Professional Christmas light design, installation, and removal across the Round Rock area.",
    localContext:
      "Round Rock combines established neighborhoods with major commercial corridors, making it a great fit for both residential and business holiday lighting. From family homes in Forest Creek to retail centers along I-35, we deliver displays that bring holiday cheer and curb appeal.",
    neighborhoods: [
      {
        name: "Forest Creek",
        description: "Golf-course community with upscale homes",
        highlights: ["Premium displays", "Tree wrapping", "Landscape lighting"],
      },
      {
        name: "Teravista",
        description: "Master-planned community with amenities",
        highlights: ["Neighborhood packages", "HOA-compliant", "Smart controls"],
      },
      {
        name: "Paloma Lake",
        description: "Lakeside family community",
        highlights: ["Roofline lighting", "Warm-white LEDs", "Custom designs"],
      },
      {
        name: "Old Town Round Rock",
        description: "Historic downtown district",
        highlights: ["Business displays", "Heritage accenting", "Custom solutions"],
      },
    ],
    faqs: [
      {
        question: "How much do Christmas lights cost in Round Rock?",
        answer:
          "Round Rock installations range from $600 for basic roofline lighting to $2,500+ for complete displays. Free estimates are always provided.",
      },
      {
        question: "Do you serve Round Rock businesses?",
        answer:
          "Yes. We light up retail centers, offices, and storefronts along the I-35 corridor and throughout Round Rock.",
      },
      {
        question: "When should I book in Round Rock?",
        answer:
          "Early fall is best. Book by September or October to lock in your installation date.",
      },
      {
        question: "Do you handle removal and storage?",
        answer:
          "Yes. January takedown is included, and we offer optional storage to keep your lights safe.",
      },
    ],
  },
  {
    slug: "georgetown",
    city: "Georgetown",
    county: "Williamson County",
    established: "2023",
    customers: "90+",
    heroImage: "/images/christmas-lighting.jpeg",
    secondaryImage: "/images/gingerbread-package.png",
    proximity: "28 miles north of Austin",
    intro:
      "Georgetown Christmas light installation with a local touch. We design and install professional holiday displays for historic homes, Sun City residences, and businesses around the square.",
    localContext:
      "Georgetown is famous for its beautifully preserved Victorian square and the sprawling Sun City retirement community. We tailor displays to Georgetown's distinct character — from elegant accenting of historic homes to easy, maintenance-free packages popular with Sun City residents.",
    neighborhoods: [
      {
        name: "Sun City",
        description: "Active-adult community with thousands of homes",
        highlights: ["Maintenance-free packages", "Easy install & removal", "Warm-white displays"],
      },
      {
        name: "Historic Downtown Square",
        description: "Victorian-era homes and storefronts",
        highlights: ["Heritage lighting", "Business displays", "Architectural accenting"],
      },
      {
        name: "Wolf Ranch",
        description: "Newer master-planned community",
        highlights: ["Contemporary designs", "HOA-compliant", "Smart controls"],
      },
      {
        name: "Berry Creek",
        description: "Golf-course community with custom homes",
        highlights: ["Premium displays", "Tree wrapping", "Landscape lighting"],
      },
    ],
    faqs: [
      {
        question: "How much does holiday lighting cost in Georgetown?",
        answer:
          "Georgetown homes range from $600 to $2,500+ depending on size and design goals. Estimates are free.",
      },
      {
        question: "Do you offer easy packages for Sun City residents?",
        answer:
          "Yes. Our maintenance-free packages are especially popular in Sun City — we handle everything from install to removal.",
      },
      {
        question: "When should I book in Georgetown?",
        answer:
          "We recommend booking by September or October, as Sun City and downtown installations fill quickly.",
      },
      {
        question: "Do you light Georgetown businesses?",
        answer:
          "Yes. We help downtown square shops and restaurants create festive, customer-drawing displays.",
      },
    ],
  },
  {
    slug: "lakeway",
    city: "Lakeway",
    county: "Travis County",
    established: "2023",
    customers: "80+",
    heroImage: "/images/christmas-elegant.png",
    secondaryImage: "/images/basic-package.png",
    proximity: "22 miles west of Austin on Lake Travis",
    intro:
      "Luxury Christmas light installation in Lakeway and the Lake Travis area. We design dramatic holiday displays for waterfront estates and Hill Country homes.",
    localContext:
      "Lakeway's hillside estates and waterfront properties along Lake Travis call for premium, large-scale lighting. We specialize in dramatic displays that complement luxury architecture, with tall roofline work, mature tree lighting, and elegant warm-white designs that look stunning across the lake.",
    neighborhoods: [
      {
        name: "Rough Hollow",
        description: "Luxury lakeside master-planned community",
        highlights: ["Estate-scale installs", "Premium warm-white", "Landscape lighting"],
      },
      {
        name: "The Hills",
        description: "Gated golf-course community",
        highlights: ["Large-scale displays", "Tree wrapping", "Custom designs"],
      },
      {
        name: "Flintrock Falls",
        description: "Upscale gated community",
        highlights: ["Premium installs", "Driveway accents", "Smart controls"],
      },
      {
        name: "Lakeway Highlands",
        description: "Hillside homes with lake views",
        highlights: ["Dramatic roofline", "Mature tree lighting", "Custom solutions"],
      },
    ],
    faqs: [
      {
        question: "How much does holiday lighting cost in Lakeway?",
        answer:
          "Lakeway's larger estates typically range from $1,200 to $5,000+. We provide detailed free estimates for every property.",
      },
      {
        question: "Can you light waterfront and hillside estates?",
        answer:
          "Yes. We're equipped for tall rooflines, steep terrain, and large lots common in the Lake Travis area.",
      },
      {
        question: "When should I book in Lakeway?",
        answer:
          "Larger luxury installs require more planning. Book by late summer or early fall for the best results.",
      },
      {
        question: "Is in-season maintenance included?",
        answer:
          "Yes. Our maintenance guarantee covers any failed bulbs or strands throughout the season at no extra charge.",
      },
    ],
  },
  {
    slug: "bee-cave",
    city: "Bee Cave",
    county: "Travis County",
    established: "2023",
    customers: "70+",
    heroImage: "/images/basic-package.png",
    secondaryImage: "/images/christmas-colorful.jpeg",
    proximity: "16 miles west of Austin",
    intro:
      "Bee Cave Christmas light installation for Hill Country homes and businesses. Professional design, installation, maintenance, and removal in the Bee Cave and Lake Travis area.",
    localContext:
      "Bee Cave pairs upscale Hill Country living with premier shopping at the Hill Country Galleria. We serve custom homes in communities like Falconhead and Spanish Oaks, plus area businesses looking to create inviting holiday displays for shoppers and diners.",
    neighborhoods: [
      {
        name: "Falconhead",
        description: "Golf-course community with custom homes",
        highlights: ["Premium displays", "Landscape lighting", "Tree wrapping"],
      },
      {
        name: "Spanish Oaks",
        description: "Exclusive gated luxury community",
        highlights: ["Estate-scale installs", "Custom designs", "Warm-white elegance"],
      },
      {
        name: "Uplands",
        description: "Hillside homes with views",
        highlights: ["Dramatic roofline", "Smart controls", "Custom solutions"],
      },
      {
        name: "Hill Country Galleria area",
        description: "Premier shopping and dining district",
        highlights: ["Business displays", "Storefront lighting", "Commercial packages"],
      },
    ],
    faqs: [
      {
        question: "How much does Christmas light installation cost in Bee Cave?",
        answer:
          "Bee Cave homes generally range from $1,000 to $4,000+ given the larger custom properties. Free estimates are always provided.",
      },
      {
        question: "Do you serve Bee Cave businesses?",
        answer:
          "Yes. We light up retail and dining locations including the Hill Country Galleria area.",
      },
      {
        question: "When should I book in Bee Cave?",
        answer:
          "Book by early fall. Custom Hill Country installs require additional planning and scheduling.",
      },
      {
        question: "Do you include removal and storage?",
        answer:
          "Yes. January takedown is included, and optional storage keeps your display safe year to year.",
      },
    ],
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug)
}

export function cityMetadata(data: CityData): Metadata {
  const title = `${data.city} Christmas Lights | Holiday Lighting ${data.city} TX | Lone Star Lighting Displays`
  const description = `Professional Christmas light installation in ${data.city}, TX. ${data.intro.slice(0, 110)} Free estimates.`
  const url = `/service-areas/${data.slug}`
  return {
    title,
    description,
    keywords: `${data.city} Christmas lights, holiday lighting ${data.city}, ${data.city} TX Christmas lights, Christmas light installation ${data.city}, best Christmas light installer ${data.city} TX, ${data.city} holiday lighting, professional holiday lighting ${data.city}`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [{ url: data.heroImage }],
    },
  }
}

export function getAllCitySlugs(): string[] {
  return CITIES.map((c) => c.slug)
}

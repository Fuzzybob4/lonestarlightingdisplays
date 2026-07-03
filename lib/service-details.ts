// Data for high-intent service detail pages under /services/[slug].
// Each entry produces a unique, conversion-focused, SEO-rich page.

import type { Metadata } from "next"

export type ServiceDetail = {
  slug: string
  name: string
  // SEO
  metaTitle: string
  metaDescription: string
  keywords: string
  // Hero
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  secondaryImage: string
  // Content
  intro: string
  benefits: { title: string; description: string }[]
  process: { step: string; title: string; description: string }[]
  features: string[]
  faqs: { question: string; answer: string }[]
  // CTA
  ctaTitle: string
  ctaText: string
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "permanent-lighting",
    name: "Permanent Holiday Lighting",
    metaTitle: "Permanent Christmas Lights Austin TX | Year-Round Permanent Holiday Lighting | Lone Star",
    metaDescription:
      "Professional permanent holiday lighting installation in Austin & Central Texas. Discreet daytime, brilliant at night, app-controlled for every holiday. Free estimates.",
    keywords:
      "permanent Christmas lights Austin, permanent holiday lighting, year-round Christmas lights, permanent roofline lighting Austin TX, app-controlled permanent lights, Jellyfish lighting alternative Austin, permanent LED lighting Central Texas",
    heroTitle: "Permanent Holiday Lighting",
    heroSubtitle: "Install once, light up every holiday — app-controlled lights that disappear into your roofline by day.",
    heroImage: "/images/christmas-elegant.png",
    secondaryImage: "/images/advanced-package.png",
    intro:
      "Permanent holiday lighting is the install-once solution that's transforming Central Texas homes. We mount discreet, low-profile LED channels along your roofline that vanish during the day and deliver brilliant color at night. Control everything from your phone — warm white for everyday elegance, red and green for Christmas, orange for Halloween, red-white-and-blue for the Fourth of July, and millions of colors in between.",
    benefits: [
      {
        title: "No Annual Install Costs",
        description: "Pay once for installation instead of every single holiday season. The system pays for itself over a few years.",
      },
      {
        title: "Every Holiday, One System",
        description: "Christmas, Halloween, July 4th, game days, birthdays — switch colors and patterns instantly from an app.",
      },
      {
        title: "Invisible by Day",
        description: "Our color-matched tracks tuck into your roofline and trim, so your home looks completely normal in daylight.",
      },
      {
        title: "No More Ladders",
        description: "Never climb a ladder or store tangled lights again. Tap a button and your home is lit.",
      },
    ],
    process: [
      { step: "1", title: "Consultation", description: "We assess your roofline and design a custom track layout for your home." },
      { step: "2", title: "Professional Install", description: "Our team mounts the channels and color-matched track in a single visit." },
      { step: "3", title: "App Setup", description: "We configure your app, presets, and schedules so you're ready to go." },
      { step: "4", title: "Lifetime Support", description: "We back every install with warranty coverage and responsive local support." },
    ],
    features: [
      "Color-matched aluminum track",
      "Commercial-grade RGB LEDs",
      "Smartphone app control",
      "Unlimited color presets",
      "Scheduling & automation",
      "Weatherproof for Texas climate",
      "Warranty-backed installation",
      "Professional design consultation",
    ],
    faqs: [
      {
        question: "How much do permanent Christmas lights cost in Austin?",
        answer:
          "Permanent lighting is priced by linear footage of roofline. Most Central Texas homes range from $3,500 to $8,000+ for a complete system. While the upfront cost is higher than seasonal installs, it eliminates annual installation fees and lasts for many years.",
      },
      {
        question: "Can I really use them for holidays other than Christmas?",
        answer:
          "Yes. The RGB system produces millions of colors and patterns, so you can light up for Halloween, Thanksgiving, July 4th, Valentine's Day, game days, and more — all from the app.",
      },
      {
        question: "Are the lights visible during the day?",
        answer:
          "Barely. We use low-profile tracks color-matched to your fascia and trim, so they blend into your roofline and are virtually invisible in daylight.",
      },
      {
        question: "Do they hold up to Texas weather?",
        answer:
          "Absolutely. The LEDs and tracks are commercial-grade and weatherproof, built to handle Central Texas heat, storms, and the occasional ice event.",
      },
    ],
    ctaTitle: "Light Up Every Holiday — Permanently",
    ctaText: "Get a free design consultation and quote for permanent holiday lighting at your home.",
  },
  {
    slug: "roofline-lighting",
    name: "Roofline Christmas Lighting",
    metaTitle: "Roofline Christmas Light Installation Austin TX | Professional Roofline Lighting | Lone Star",
    metaDescription:
      "Professional roofline Christmas light installation in Austin & Central Texas. Crisp, custom-cut C9 and LED roofline lighting with install, maintenance & removal included.",
    keywords:
      "roofline Christmas lights Austin, roofline lighting installation, C9 roofline lights, professional roofline Christmas lighting Austin TX, eave lighting, Christmas light installation roofline Central Texas",
    heroTitle: "Roofline Christmas Lighting",
    heroSubtitle: "Crisp, custom-fit roofline lighting that outlines your home with a clean, professional glow.",
    heroImage: "/images/advanced-package.png",
    secondaryImage: "/images/christmas-elegant.png",
    intro:
      "Roofline lighting is the foundation of a stunning holiday display. We custom-cut commercial-grade C9 and LED strands to your home's exact rooflines, eaves, peaks, and gables for that crisp, evenly spaced look you can't get from store-bought lights. Every strand is professionally clipped — never stapled or glued — for a clean finish that lasts the whole season.",
    benefits: [
      {
        title: "Custom-Cut to Your Home",
        description: "We measure and cut each strand to fit your rooflines perfectly, with no gaps, sags, or dangling cords.",
      },
      {
        title: "Commercial-Grade Bulbs",
        description: "Bright, durable C9 and LED options that stay vivid all season and stand up to Texas weather.",
      },
      {
        title: "Clean, Damage-Free Install",
        description: "We use professional clips designed for your roofline — never staples or nails that damage your home.",
      },
      {
        title: "Maintenance Included",
        description: "If a strand or bulb goes out, we fix it fast at no extra charge throughout the season.",
      },
    ],
    process: [
      { step: "1", title: "Measure & Quote", description: "We measure your rooflines and provide a precise, free estimate." },
      { step: "2", title: "Custom Fabrication", description: "Strands are cut and prepped to fit your home exactly." },
      { step: "3", title: "Professional Install", description: "Our insured team installs cleanly and safely, typically in a few hours." },
      { step: "4", title: "Takedown & Storage", description: "We remove everything in January and offer optional storage." },
    ],
    features: [
      "Custom-cut C9 & LED options",
      "Warm white or multicolor",
      "Professional clip installation",
      "Eaves, peaks, gables & ridges",
      "Timer & smart controls",
      "In-season maintenance",
      "January takedown included",
      "Optional storage",
    ],
    faqs: [
      {
        question: "How much does roofline lighting cost in Austin?",
        answer:
          "Roofline lighting is priced by linear footage. Most homes range from $600 to $1,500+ for the season, including installation, maintenance, and takedown. We provide a free, exact quote after measuring your rooflines.",
      },
      {
        question: "Do you use my lights or provide them?",
        answer:
          "We provide commercial-grade lights that are far brighter and more durable than store-bought strands. They're custom-cut to your home for a flawless fit.",
      },
      {
        question: "Will installation damage my roof?",
        answer:
          "No. We use professional clips designed to attach to shingles and gutters without staples, nails, or adhesive — protecting your home.",
      },
      {
        question: "What if a section goes out during the season?",
        answer:
          "Our maintenance guarantee covers it. Call us and we'll repair or replace any failed section at no additional cost.",
      },
    ],
    ctaTitle: "Outline Your Home in Holiday Magic",
    ctaText: "Get a free roofline lighting estimate customized to your home.",
  },
  {
    slug: "tree-wrapping",
    name: "Christmas Tree Wrapping",
    metaTitle: "Christmas Tree Wrapping Austin TX | Professional Tree Lighting | Lone Star Lighting",
    metaDescription:
      "Professional Christmas tree wrapping and outdoor tree lighting in Austin & Central Texas. Trunk wraps, canopy lighting & mini-light displays. Install & removal included.",
    keywords:
      "Christmas tree wrapping Austin, outdoor tree lighting, tree trunk wrapping, professional tree lighting Austin TX, oak tree Christmas lights, canopy lighting Central Texas",
    heroTitle: "Christmas Tree Wrapping",
    heroSubtitle: "Turn your trees into glowing centerpieces — from trunk wraps to full canopy lighting.",
    heroImage: "/images/christmas-colorful.jpeg",
    secondaryImage: "/images/gingerbread-package.png",
    intro:
      "Nothing transforms a yard like beautifully wrapped trees. Our team specializes in wrapping trunks, branches, and canopies with tightly spaced mini-lights for that magical, high-end look. Whether you have a single front-yard oak or a row of mature Live Oaks lining your drive, we have the equipment and expertise to light them safely and stunningly.",
    benefits: [
      {
        title: "Tight, Even Wraps",
        description: "We wrap trunks and limbs with consistent, close spacing for that polished, resort-quality glow.",
      },
      {
        title: "Any Size Tree",
        description: "From small ornamentals to towering mature oaks, our equipment safely reaches every branch.",
      },
      {
        title: "Tree-Safe Methods",
        description: "We use techniques that won't harm your trees, with strands secured for the season without girdling.",
      },
      {
        title: "Full-Service",
        description: "Design, installation, maintenance, and careful removal are all handled by our team.",
      },
    ],
    process: [
      { step: "1", title: "Walk-Through", description: "We assess your trees and recommend trunk, branch, or full-canopy wrapping." },
      { step: "2", title: "Custom Quote", description: "You get a free estimate based on tree count, size, and coverage." },
      { step: "3", title: "Expert Install", description: "Our team wraps each tree by hand for an even, professional finish." },
      { step: "4", title: "Removal", description: "We carefully remove all lighting in January, protecting your trees." },
    ],
    features: [
      "Trunk & branch wrapping",
      "Full canopy lighting",
      "Warm white or multicolor minis",
      "Mature oak specialists",
      "Tree-safe attachment",
      "In-season maintenance",
      "Careful January removal",
      "Optional storage",
    ],
    faqs: [
      {
        question: "How much does tree wrapping cost in Austin?",
        answer:
          "Tree wrapping is priced per tree based on size and how much coverage you want. Smaller trees start around $150-$300, while large mature oaks with full canopy wrapping can run $500+ each. Estimates are always free.",
      },
      {
        question: "Will wrapping hurt my trees?",
        answer:
          "No. We use tree-safe techniques and remove all lighting after the season, so there's no girdling or long-term harm to your trees.",
      },
      {
        question: "Can you wrap very tall trees?",
        answer:
          "Yes. We have the equipment and trained crews to safely light tall, mature trees common in Central Texas.",
      },
      {
        question: "How many lights does a tree need?",
        answer:
          "It depends on the look you want. A subtle trunk wrap uses fewer lights, while a full canopy can use thousands. We'll recommend the right amount during your consultation.",
      },
    ],
    ctaTitle: "Make Your Trees the Star of the Street",
    ctaText: "Get a free tree wrapping estimate for your yard.",
  },
  {
    slug: "removal-and-storage",
    name: "Light Removal & Storage",
    metaTitle: "Christmas Light Removal & Storage Austin TX | Takedown Service | Lone Star Lighting",
    metaDescription:
      "Professional Christmas light removal and storage in Austin & Central Texas. We take down, label, and store your holiday lights safely until next season. Free quotes.",
    keywords:
      "Christmas light removal Austin, holiday light takedown, Christmas light storage Austin TX, light removal service, professional Christmas light takedown Central Texas",
    heroTitle: "Light Removal & Storage",
    heroSubtitle: "We take it all down on schedule and store it safely — so January is as easy as December.",
    heroImage: "/images/christmas-lighting.jpeg",
    secondaryImage: "/images/basic-package.png",
    intro:
      "The holidays are over — leave the ladder in the garage. Our removal and storage service is included with every installation package and available as a standalone service. We carefully take down every strand, wreath, and tree wrap, then label and store everything in our climate-controlled facility so it's organized and ready to reinstall next year.",
    benefits: [
      {
        title: "On-Schedule Takedown",
        description: "We remove your display in January on a set schedule — no nagging, no waiting, no faded lights in March.",
      },
      {
        title: "Climate-Controlled Storage",
        description: "Your lights are labeled and stored safely in our facility, freeing up your garage and attic.",
      },
      {
        title: "Ready for Next Year",
        description: "Because we store and track your exact setup, reinstallation next season is faster and easier.",
      },
      {
        title: "Damage-Free Removal",
        description: "We remove every clip and strand carefully, leaving your home exactly as we found it.",
      },
    ],
    process: [
      { step: "1", title: "Schedule", description: "We set your removal date in early January when you book." },
      { step: "2", title: "Careful Takedown", description: "Our team removes all lighting, clips, and decor safely." },
      { step: "3", title: "Label & Store", description: "Everything is labeled and stored in our climate-controlled facility." },
      { step: "4", title: "Effortless Reinstall", description: "Next season, your tracked setup goes back up faster than ever." },
    ],
    features: [
      "Scheduled January takedown",
      "Climate-controlled storage",
      "Labeled & organized inventory",
      "Damage-free clip removal",
      "Faster reinstall next year",
      "Standalone or package service",
      "Insured, professional crews",
      "Frees up your garage & attic",
    ],
    faqs: [
      {
        question: "Is removal included with installation?",
        answer:
          "Yes. Every installation package includes January takedown. Storage is offered as an affordable add-on so you don't have to find space at home.",
      },
      {
        question: "Can you remove lights you didn't install?",
        answer:
          "Yes. We offer standalone removal for lights installed by you or another company. Contact us for a quick quote.",
      },
      {
        question: "How much does storage cost?",
        answer:
          "Storage pricing depends on the size of your display. It's a small seasonal fee that keeps your lights organized and protected, and makes next year's install faster.",
      },
      {
        question: "When do you take the lights down?",
        answer:
          "We schedule removals throughout January. You'll have a set date, so you never have to worry about a faded display lingering into spring.",
      },
    ],
    ctaTitle: "Skip the January Ladder Day",
    ctaText: "Add removal and storage to your package, or get a standalone quote today.",
  },
  {
    slug: "maintenance-guarantee",
    name: "Maintenance Guarantee",
    metaTitle: "Christmas Light Maintenance Guarantee Austin TX | In-Season Service | Lone Star Lighting",
    metaDescription:
      "Our Christmas light maintenance guarantee keeps your Austin display perfect all season. Free repairs on any failed bulb or strand. Fast local service across Central Texas.",
    keywords:
      "Christmas light maintenance Austin, holiday light repair, Christmas light service guarantee, light maintenance Austin TX, professional Christmas light repair Central Texas",
    heroTitle: "Our Maintenance Guarantee",
    heroSubtitle: "If any light fails during the season, we fix it fast — at no extra charge. Guaranteed.",
    heroImage: "/images/christmas-elegant.png",
    secondaryImage: "/images/christmas-colorful.jpeg",
    intro:
      "A great display should stay great all season long. That's why every Lone Star Lighting installation is backed by our in-season maintenance guarantee. If a bulb burns out, a strand goes dark, or a timer acts up, just call us — we'll be out promptly to make it right at no additional cost. It's the peace of mind that comes with hiring a local, professional team instead of doing it yourself.",
    benefits: [
      {
        title: "Free In-Season Repairs",
        description: "Any failed bulb, strand, or connection is repaired or replaced at no charge through the season.",
      },
      {
        title: "Fast Local Response",
        description: "Because we're based in Central Texas, we respond quickly — often within a few days of your call.",
      },
      {
        title: "Proactive Quality",
        description: "We use commercial-grade products and proven techniques to prevent issues before they start.",
      },
      {
        title: "Total Peace of Mind",
        description: "Your display stays picture-perfect for every holiday gathering, photo, and drive-by.",
      },
    ],
    process: [
      { step: "1", title: "You Call or Text", description: "Spot an issue? Reach out and describe what's happening." },
      { step: "2", title: "We Schedule Fast", description: "We book a prompt service visit, usually within days." },
      { step: "3", title: "We Fix It Free", description: "Our team repairs or replaces the affected lighting at no cost." },
      { step: "4", title: "Back to Brilliant", description: "Your display is restored to full, flawless glow." },
    ],
    features: [
      "Free in-season repairs",
      "Fast local response",
      "Bulb & strand replacement",
      "Timer & controller support",
      "Commercial-grade products",
      "Insured, professional crews",
      "Covers all installed lighting",
      "No hidden service fees",
    ],
    faqs: [
      {
        question: "What does the maintenance guarantee cover?",
        answer:
          "It covers any failure in the lighting we installed — burned-out bulbs, dark strands, loose connections, and timer or controller issues — repaired or replaced free during the season.",
      },
      {
        question: "How fast do you respond to service calls?",
        answer:
          "As a local Central Texas company, we typically schedule service visits within a few days, so your display isn't dark for long.",
      },
      {
        question: "Is there an extra charge for repairs?",
        answer:
          "No. In-season maintenance is included with every installation package at no additional cost.",
      },
      {
        question: "What if the problem is caused by weather?",
        answer:
          "Texas weather happens. If wind or a storm affects your display, we'll come out and restore it as part of your maintenance coverage.",
      },
    ],
    ctaTitle: "Lighting That Stays Perfect All Season",
    ctaText: "Book your installation and get our maintenance guarantee included free.",
  },
]

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug)
}

export function getAllServiceDetailSlugs(): string[] {
  return SERVICE_DETAILS.map((s) => s.slug)
}

export function serviceDetailMetadata(data: ServiceDetail): Metadata {
  const url = `/services/${data.slug}`
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

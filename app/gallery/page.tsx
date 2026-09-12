import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/structured-data"
import { BUSINESS_INFO } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Our Work | Holiday Lighting Gallery | Lone Star Lighting Displays",
  description:
    "See our holiday lighting projects across Central Texas — upscale homes, commercial properties, tree wrapping, landscape lighting, and event lighting.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Our Work | Lone Star Lighting Displays",
    description:
      "A look at recent residential, commercial, landscape, and event lighting projects across Central Texas.",
    type: "website",
    url: "/gallery",
  },
}

const PROJECTS = [
  {
    image: "/images/premium-estate-hero.png",
    alt: "Upscale Texas home with warm white roofline holiday lighting",
    title: "Roofline lighting",
    category: "Residential",
  },
  {
    image: "/images/premium-hillcountry-estate.png",
    alt: "Luxury hill country estate lit for the holidays at dusk",
    title: "Hill Country estate",
    category: "Residential",
  },
  {
    image: "/images/premium-roofline-closeup.png",
    alt: "Close-up of clean warm white LED holiday lighting on a modern home",
    title: "Clean, custom trim",
    category: "Residential",
  },
  {
    image: "/images/premium-tower-tree.png",
    alt: "A massive mature tree wrapped trunk to canopy in warm white lights",
    title: "Tower tree wrap",
    category: "Tree Wrapping",
  },
  {
    image: "/images/premium-landscape-garden.png",
    alt: "Landscape uplighting on a garden pathway and ornamental trees",
    title: "Garden path lighting",
    category: "Landscape Lighting",
  },
  {
    image: "/images/premium-commercial-storefront.png",
    alt: "Upscale shopping center storefront with holiday lighting",
    title: "Retail storefront",
    category: "Commercial",
  },
  {
    image: "/images/premium-office-building.png",
    alt: "Corporate office building with elegant architectural holiday lighting",
    title: "Corporate office",
    category: "Commercial",
  },
  {
    image: "/images/premium-hoa-entrance.png",
    alt: "Neighborhood entrance monument lit for the holidays",
    title: "Community entrance",
    category: "HOA & Community",
  },
  {
    image: "/images/premium-apartment-clubhouse.png",
    alt: "Apartment community clubhouse with holiday lighting",
    title: "Apartment clubhouse",
    category: "Multifamily",
  },
  {
    image: "/images/premium-restaurant-patio.png",
    alt: "Restaurant patio with warm bistro and holiday lighting",
    title: "Restaurant patio",
    category: "Hospitality",
  },
  {
    image: "/images/premium-church-steeple.png",
    alt: "Church steeple outlined in warm white holiday lights",
    title: "Church steeple",
    category: "Places of Worship",
  },
  {
    image: "/images/premium-event-lighting.png",
    alt: "Outdoor wedding reception with string lights and bistro lighting",
    title: "Event & wedding lighting",
    category: "Events",
  },
]

export default function GalleryPage() {
  return (
    <main className="flex flex-col">
      <JsonLd
        id="json-ld-gallery"
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Our Work", url: "/gallery" },
        ])}
      />

      <section className="border-b bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <p className="eyebrow text-gold">A few of our favorites</p>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Our work across Central Texas
          </h1>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-ink-foreground/75">
            Homes, businesses, communities, and events — a look at the kind of craftsmanship we bring to
            every property we light.
          </p>
        </div>
      </section>

      <section className="bg-background px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <div key={project.image} className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-16">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {project.category}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-ink-foreground">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink/70">Ready when you are</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Let&apos;s make your place the one people remember.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="min-h-12 bg-ink px-6 text-ink-foreground hover:bg-ink/90" asChild>
              <Link href="/booking">
                Start your estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-h-12 border-ink/30 bg-transparent px-6 text-ink hover:bg-ink/10"
              asChild
            >
              <a href={`tel:${BUSINESS_INFO.telephone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS_INFO.telephoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

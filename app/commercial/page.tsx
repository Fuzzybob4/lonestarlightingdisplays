import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Building2, Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/structured-data"
import { BUSINESS_INFO } from "@/lib/business-info"
import { COMMERCIAL_PAGES } from "@/lib/commercial"

export const metadata: Metadata = {
  title: "Commercial Holiday Lighting Austin TX | HOA, Retail, Restaurant & Property Lighting",
  description:
    "Commercial Christmas light installation in Austin & Central Texas. HOAs, shopping centers, restaurants, apartments & churches. Fully insured, contract-ready. Free proposals.",
  keywords:
    "commercial Christmas lights Austin, commercial holiday lighting Austin TX, HOA Christmas lights, retail holiday lighting, restaurant Christmas lights, apartment holiday lighting, church Christmas lights Central Texas",
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Commercial Holiday Lighting Austin TX | Lone Star Lighting Displays",
    description:
      "Fully insured, contract-ready commercial holiday lighting for HOAs, retail, restaurants, apartments, and churches across Central Texas.",
    type: "website",
    url: "/commercial",
  },
}

const WHY = [
  "Fully insured & bonded",
  "Certificates of insurance provided",
  "Commercial-grade products",
  "Multi-year contract options",
  "After-hours installation",
  "In-season maintenance included",
  "Takedown & storage included",
  "Single point of contact",
]

export default function CommercialPage() {
  return (
    <main className="flex flex-col">
      <JsonLd
        id="json-ld-commercial"
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Commercial", url: "/commercial" },
        ])}
      />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/christmas-colorful.jpeg"
            alt="Commercial holiday lighting in Austin, Texas"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <Building2 className="h-4 w-4" />
              Commercial & Property Lighting
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Commercial Holiday Lighting in Central Texas
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
              Turnkey, fully insured holiday lighting for HOAs, shopping centers, restaurants, apartment
              communities, and places of worship — designed, installed, maintained, and removed by one trusted local team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">
                  Request a Proposal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href={`tel:${BUSINESS_INFO.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {BUSINESS_INFO.telephoneDisplay}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance">Properties We Light</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Specialized holiday lighting programs for every type of commercial property.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMERCIAL_PAGES.map((page) => (
              <Card key={page.slug} className="overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={page.heroImage || "/placeholder.svg"}
                    alt={page.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{page.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {page.heroSubtitle}
                  </p>
                  <Button asChild variant="link" className="mt-3 h-auto p-0">
                    <Link href={`/commercial/${page.slug}`}>
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-muted/40 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance">
              Why Property Managers Choose Lone Star
            </h2>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {WHY.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            Request a Commercial Lighting Proposal
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed opacity-90">
            Get a detailed, contract-ready proposal for your property. Fully insured and built around your budget.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href={`tel:${BUSINESS_INFO.telephone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS_INFO.telephoneDisplay}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

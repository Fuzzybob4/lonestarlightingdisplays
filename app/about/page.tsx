import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Award, Phone, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/structured-data"
import { BUSINESS_INFO } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "About Lone Star Lighting Displays | Central Texas Holiday Lighting Pros",
  description:
    "Lone Star Lighting Displays is a local, fully insured holiday lighting company serving Austin and Central Texas — one team, from design to takedown.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Lone Star Lighting Displays",
    description:
      "A local, fully insured Central Texas holiday lighting team handling design, installation, maintenance, and takedown.",
    type: "website",
    url: "/about",
  },
}

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Fully insured, every job",
    description: "We carry proper insurance and provide certificates on request for residential and commercial clients alike.",
  },
  {
    icon: Users,
    title: "One team, start to finish",
    description: "The same local crew handles your design consultation, installation, in-season maintenance, and takedown.",
  },
  {
    icon: Award,
    title: "Built on craftsmanship",
    description: "Clean lines, commercial-grade materials, and attention to detail on every roofline, tree, and display.",
  },
]

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <JsonLd
        id="json-ld-about"
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/premium-roofline-closeup.png"
            alt="Close-up of professional warm white holiday roofline lighting"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About us</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              A local Central Texas team, built over a decade
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
              Lone Star Lighting Displays designs, installs, maintains, and removes holiday lighting for
              homes, businesses, and communities across Austin and Central Texas — one dedicated crew, one
              point of contact, every season.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">
                  Get a free estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <a href={`tel:${BUSINESS_INFO.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {BUSINESS_INFO.telephoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                We started with one truck and a lot of ladders.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Lone Star Lighting Displays grew from lighting a handful of neighborhood homes into a full
                design-install-maintain-remove service trusted by homeowners, HOAs, restaurants, apartment
                communities, and churches across Central Texas. What hasn&apos;t changed is the way we treat
                every property: like it&apos;s the only one on the schedule.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Today our team handles everything from a single-family roofline to multi-property commercial
                contracts, all under one insured, dependable service — the same team from the first design
                conversation to the day we take everything down and put it in storage.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/premium-hillcountry-estate.png"
                alt="Luxury Texas hill country home lit for the holidays at dusk"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance">What we stand for</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="flex flex-col items-start gap-3 border border-border bg-background p-6">
                <value.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            Let&apos;s talk about your property
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed opacity-90">
            Whether it&apos;s a single home or a portfolio of properties, we&apos;d love to show you what
            Lone Star can do.
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

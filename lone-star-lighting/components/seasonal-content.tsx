"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getSeasonalContent, getCurrentSeason } from "@/lib/get-season"

export function SeasonalContent() {
  const { heroTitle, heroSubtitle, heroImage } = getSeasonalContent()

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
      <div className="relative h-[600px] w-full">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt="Lone Star Lighting Displays"
          fill
          className="object-cover brightness-110"
          priority
        />
      </div>
      <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
        <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">{heroSubtitle}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" asChild>
              <Link href="/booking">Get Your Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/30 hover:bg-background/50" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SeasonalServices() {
  const { featuredServices } = getSeasonalContent()
  const season = getCurrentSeason()

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredServices.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
      ))}
    </div>
  )
}

function ServiceCard({ title, description, image }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <Button className="mt-6 w-full" asChild>
          <Link href="/booking">Request an Estimate</Link>
        </Button>
      </div>
    </div>
  )
}

export function SeasonalCTA() {
  const { ctaText } = getSeasonalContent()
  const season = getCurrentSeason()

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        {season === "holiday" ? "Book Now for Priority Holiday Scheduling!" : "Enhance Your Outdoor Space Today!"}
      </h2>
      <p className="mt-4 text-muted-foreground text-lg max-w-[700px] mx-auto">
        {season === "holiday"
          ? "Don't wait until the last minute. Secure your spot now and get your home ready for the holidays."
          : "Transform your outdoor living areas with professional lighting that enhances beauty, safety, and usability."}
      </p>
      <Button size="lg" className="mt-8" asChild>
        <Link href="/booking">{ctaText}</Link>
      </Button>
    </>
  )
}


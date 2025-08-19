"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { getCurrentSeason } from "@/lib/get-season"

export function SeasonalServicesPage() {
  const season = getCurrentSeason()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src={season === "holiday" ? "/images/christmas-lighting.jpeg" : "/images/outdoor-lighting.png"}
            alt={season === "holiday" ? "Holiday lighting services" : "Outdoor lighting services"}
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              {season === "holiday"
                ? "Professional holiday lighting packages for every home and budget"
                : "Professional outdoor lighting solutions for your home and landscape"}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {season === "holiday" ? <HolidayServices /> : <GeneralServices />}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Specialized lighting solutions for your special occasions and events
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
              <div className="relative h-48">
                <Image
                  src="/images/wedding-lighting.jpeg"
                  alt="Wedding Lighting"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Wedding Lighting</h3>
                <p className="mt-2 text-muted-foreground">
                  Create magical moments with romantic lighting for your special day
                </p>
                <Button className="mt-4 w-full" asChild>
                  <Link href="/services/wedding-lighting">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
              <div className="relative h-48">
                <Image src="/images/event-dramatic.png" alt="Event Lighting" fill className="object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Event Lighting</h3>
                <p className="mt-2 text-muted-foreground">
                  Professional lighting solutions for corporate events and celebrations
                </p>
                <Button className="mt-4 w-full" asChild>
                  <Link href="/services/event-lighting">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
              <div className="relative h-48">
                <Image src="/images/christmas-lighting.jpeg" alt="Christmas Lighting" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Christmas Lighting</h3>
                <p className="mt-2 text-muted-foreground">
                  Transform your home into a winter wonderland with festive displays
                </p>
                <Button className="mt-4 w-full" asChild>
                  <Link href="/services/christmas-lighting">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {season === "holiday" ? "Ready to Light Up Your Holidays?" : "Ready to Transform Your Outdoor Space?"}
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            {season === "holiday"
              ? "Book now to secure your spot and transform your home this holiday season."
              : "Book now to enhance your home's beauty, safety, and value with professional lighting."}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Get Your Free Estimate</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function HolidayServices() {
  return <>{/* Holiday services content */}</>
}

function GeneralServices() {
  return (
    <>
      {/* Landscape Lighting */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image src="/images/landscape-lighting.png" alt="Landscape Lighting" fill className="object-cover" />
        </div>
        <div>
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Starting at $1,200
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">Landscape Lighting</h2>
          <p className="mt-4 text-muted-foreground">
            Highlight your garden's best features with strategic lighting that creates depth, texture, and ambiance.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Professional design consultation</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Premium LED fixtures with lifetime warranty</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Path lighting, uplighting, and accent lighting</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Smart controls and scheduling options</span>
            </li>
          </ul>
          <Button className="mt-8" asChild>
            <Link href="/booking">Request an Estimate</Link>
          </Button>
        </div>
      </div>

      {/* Patio & Deck Lighting */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
        <div className="relative h-[300px] rounded-lg overflow-hidden md:order-2">
          <Image
            src="/images/patio.png"
            alt="Patio & Deck Lighting"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="md:order-1">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Starting at $800
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">Patio & Deck Lighting</h2>
          <p className="mt-4 text-muted-foreground">
            Create the perfect ambiance for outdoor entertaining with custom lighting for your deck, patio, or outdoor
            kitchen.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>String lights and bistro lighting</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Step and railing illumination</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Recessed lighting for covered areas</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Dimmable options for mood setting</span>
            </li>
          </ul>
          <Button className="mt-8" asChild>
            <Link href="/booking">Request an Estimate</Link>
          </Button>
        </div>
      </div>

      {/* Security Lighting */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image src="/images/security-lighting.png" alt="Security Lighting" fill className="object-cover" />
        </div>
        <div>
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Starting at $900
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">Security Lighting</h2>
          <p className="mt-4 text-muted-foreground">
            Enhance safety and security around your property with strategic lighting that deters intruders and
            illuminates dark areas.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Motion-activated flood lights</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Driveway and entry illumination</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Smart integration with home security</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Energy-efficient LED technology</span>
            </li>
          </ul>
          <Button className="mt-8" asChild>
            <Link href="/booking">Request an Estimate</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

function HolidayAddOns() {
  return <>{/* Holiday add-ons content */}</>
}

function GeneralAddOns() {
  return <></>
}

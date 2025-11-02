"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Sparkles, Home, Trees, Shield, PartyPopper, Heart, Calendar, ArrowRight } from "lucide-react"
import { getCurrentSeason } from "@/lib/get-season"

export function SeasonalServicesPage() {
  const season = getCurrentSeason()
  const isChristmasSeason = season === "christmas"

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Professional Lighting Services
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              From holiday displays to year-round outdoor lighting, we bring your vision to life with premium LED
              installations
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Holiday Services - Show during Christmas season */}
      {isChristmasSeason && (
        <section className="py-12 md:py-20 bg-gradient-to-b from-red-50 to-background dark:from-red-950/20 dark:to-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                🎄 Holiday Lighting Packages
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your home this Christmas with our professional installation packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/images/basic-package.png" alt="Basic Holiday Package" fill className="object-cover" />
                  </div>
                  <CardTitle className="text-2xl">Basic Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-2">Starting at $299</div>
                    <p className="text-muted-foreground">Perfect for smaller homes</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Classic roofline lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Professional installation & removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Premium LED lights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Storage included</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/packages/basic">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Advanced Package */}
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-primary">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 text-sm font-semibold">
                  Best Value
                </div>
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/advanced-package.png"
                      alt="Advanced Holiday Package"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">Advanced Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-2">Starting at $599</div>
                    <p className="text-muted-foreground">Most popular choice</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 fill-primary" />
                      <span>Everything in Basic package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 fill-primary" />
                      <span>Window & door frame lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 fill-primary" />
                      <span>Pathway & landscape accents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 fill-primary" />
                      <span>Custom design consultation</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/packages/advanced">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Gingerbread Package */}
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-semibold">
                  Premium
                </div>
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/gingerbread-package.png"
                      alt="Gingerbread Premium Package"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">Gingerbread Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-2">Starting at $999</div>
                    <p className="text-muted-foreground">Ultimate display experience</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Everything in Advanced package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Animated light sequences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>3D yard decorations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Premium design & support</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/packages/gingerbread">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">All Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional lighting solutions for every occasion and season
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Christmas Lighting */}
            <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/christmas-lighting.jpeg"
                    alt="Christmas Lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-red-500" />
                  <CardTitle>Christmas Lighting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional holiday light installation and removal. Make your home the talk of the neighborhood this
                  Christmas season.
                </p>
                <Button variant="outline" className="w-full group bg-transparent" asChild>
                  <Link href="/services/christmas-lighting">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Landscape Lighting */}
            <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/landscape-lighting.png"
                    alt="Landscape Lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Trees className="h-6 w-6 text-green-500" />
                  <CardTitle>Landscape Lighting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enhance your outdoor spaces with permanent landscape lighting. Beautiful, energy-efficient solutions
                  year-round.
                </p>
                <Button variant="outline" className="w-full group bg-transparent" asChild>
                  <Link href="/services/landscape-lighting">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Security Lighting */}
            <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/security-lighting.png"
                    alt="Security Lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <CardTitle>Security Lighting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Protect your property with strategic security lighting. Motion-activated and always-on options
                  available.
                </p>
                <Button variant="outline" className="w-full group bg-transparent" asChild>
                  <Link href="/services/security-lighting">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Event Lighting */}
            <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/event-lighting.png"
                    alt="Event Lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <PartyPopper className="h-6 w-6 text-purple-500" />
                  <CardTitle>Event Lighting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional lighting for parties, corporate events, and special celebrations. Create the perfect
                  ambiance.
                </p>
                <Button variant="outline" className="w-full group bg-transparent" asChild>
                  <Link href="/services/event-lighting">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Wedding Lighting */}
            <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/wedding-lighting.jpeg"
                    alt="Wedding Lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-6 w-6 text-pink-500" />
                  <CardTitle>Wedding Lighting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Make your special day magical with romantic wedding lighting. From ceremonies to receptions, we've got
                  you covered.
                </p>
                <Button variant="outline" className="w-full group bg-transparent" asChild>
                  <Link href="/services/wedding-lighting">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Outdoor Living Spaces */}
            <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/patio.png"
                    alt="Outdoor Living Lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-6 w-6 text-orange-500" />
                  <CardTitle>Outdoor Living Spaces</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Transform patios, decks, and outdoor kitchens with custom lighting. Extend your living space into the
                  evening.
                </p>
                <Button variant="outline" className="w-full group bg-transparent" asChild>
                  <Link href="/services/outdoor-living">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Why Choose Lone Star Lighting
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Professional service with a Texas touch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Locally Owned</h3>
                <p className="text-muted-foreground">Texas pride in every installation</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium LEDs</h3>
                <p className="text-muted-foreground">Energy-efficient, bright lighting</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Service</h3>
                <p className="text-muted-foreground">Professional & timely installation</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Guaranteed</h3>
                <p className="text-muted-foreground">Your satisfaction is our priority</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Light Up Your Property?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free quote today and see how we can transform your space with professional lighting
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/booking">Get Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

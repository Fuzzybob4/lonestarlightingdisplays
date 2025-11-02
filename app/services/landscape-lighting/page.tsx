import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Lightbulb, Clock, Shield, Sparkles } from "lucide-react"

export default function LandscapeLightingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-background" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 mb-4">
              Year-Round Beauty
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Professional Landscape Lighting
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transform your outdoor spaces with expertly designed landscape lighting. Enhance beauty, safety, and
              property value with premium LED installations.
            </p>
            <div className="flex flex-wrap gap-4">
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

      {/* Featured Image */}
      <section className="container py-12">
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/landscape-lighting.png"
            alt="Professional Landscape Lighting Installation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Why Choose Landscape Lighting?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional outdoor lighting offers multiple benefits for your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10">
                <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced Beauty</h3>
              <p className="text-muted-foreground">
                Highlight your landscape's best features and create stunning nighttime curb appeal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Increased Safety</h3>
              <p className="text-muted-foreground">
                Illuminate pathways, steps, and dark areas to prevent accidents and deter intruders
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10">
                <ArrowRight className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Higher Property Value</h3>
              <p className="text-muted-foreground">
                Professional lighting increases home value and makes your property stand out
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10">
                <Lightbulb className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Efficient</h3>
              <p className="text-muted-foreground">
                Premium LED fixtures provide brilliant light while using minimal electricity
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-muted/50 py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">What's Included</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Professional Design Consultation</h3>
                    <p className="text-muted-foreground">
                      Our lighting experts create a custom design plan tailored to your landscape and goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Premium LED Fixtures</h3>
                    <p className="text-muted-foreground">
                      Commercial-grade fixtures with lifetime warranties for durability and performance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Installation</h3>
                    <p className="text-muted-foreground">
                      Professional installation with proper wiring, transformers, and weatherproofing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Smart Controls & Timers</h3>
                    <p className="text-muted-foreground">
                      Automated scheduling and smart home integration options for convenience
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ongoing Maintenance</h3>
                    <p className="text-muted-foreground">
                      Optional maintenance plans to keep your system looking and performing its best
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/landscape-lighting.png" alt="Path lighting" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/outdoor-lighting.png" alt="Tree uplighting" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden col-span-2">
                <Image src="/images/patio.png" alt="Garden accent lighting" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lighting Types */}
      <section className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Types of Landscape Lighting
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer various lighting techniques to showcase your landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Path Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Illuminate walkways, driveways, and steps for safety and guidance. Perfect for defining pathways and
                preventing trips.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Walkway illumination</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Driveway edging</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Step safety lighting</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Uplighting</h3>
              <p className="text-muted-foreground mb-4">
                Dramatic lighting placed at ground level to highlight trees, architectural features, and focal points
                from below.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Tree canopy illumination</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Architectural accents</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Garden feature highlighting</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Downlighting</h3>
              <p className="text-muted-foreground mb-4">
                Fixtures mounted high to cast light downward, creating natural moonlight effects and functional
                illumination.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Moonlight effect</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Patio lighting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Seating area ambiance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Accent Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Focused beams that draw attention to specific plants, sculptures, or architectural elements in your
                landscape.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Garden focal points</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Sculpture illumination</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Special plant highlighting</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Well Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Recessed fixtures installed at ground level, perfect for uplighting trees and architectural features
                discreetly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Tree trunk lighting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Wall washing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Hidden installations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Deck & Patio Lighting</h3>
              <p className="text-muted-foreground mb-4">
                Specialized fixtures for outdoor living spaces, including step lights, post caps, and under-rail
                lighting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Deck step lighting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Post cap lights</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm">Under-rail accents</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From consultation to completion, we make the process simple and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-muted-foreground">
                We visit your property to understand your goals and assess your landscape
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Design</h3>
              <p className="text-muted-foreground">
                We create a detailed lighting plan with fixture placement and effects
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Install</h3>
              <p className="text-muted-foreground">
                Our certified technicians install your system with precision and care
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy & Support</h3>
              <p className="text-muted-foreground">
                Relax and enjoy your beautiful lighting with ongoing support available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality landscape lighting that fits your budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter Package</h3>
                <div className="text-4xl font-bold mb-2">$1,200</div>
                <p className="text-muted-foreground">Starting price</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 8 LED fixtures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Professional installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Transformer & wiring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Timer control</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/booking">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary shadow-lg">
            <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
              Most Popular
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                <div className="text-4xl font-bold mb-2">$2,500</div>
                <p className="text-muted-foreground">Starting price</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 16 LED fixtures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Design consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Premium transformer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Smart home integration</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/booking">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
                <div className="text-4xl font-bold mb-2">$4,000+</div>
                <p className="text-muted-foreground">Starting price</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>24+ LED fixtures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Custom design plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Color-changing options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Maintenance plan included</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/booking">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Transform Your Landscape?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get a free consultation and quote today. Our landscape lighting experts are ready to bring your vision to
              life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/booking">Schedule Consultation</Link>
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
            <p className="mt-6 text-sm text-primary-foreground/80">
              <Clock className="inline h-4 w-4 mr-1" />
              Most consultations scheduled within 48 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

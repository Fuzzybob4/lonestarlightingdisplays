import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Star, Phone, Clock, Award } from "lucide-react"

export const metadata = {
  title: "Christmas Light Installation San Marcos TX | Lone Star Lighting Displays",
  description:
    "Professional Christmas light installation in San Marcos, Texas. Serving historic downtown, residential areas, and business districts. Free estimates, professional installation, guaranteed satisfaction.",
  keywords:
    "Christmas lights San Marcos TX, holiday lighting San Marcos, Christmas light installation San Marcos, San Marcos Christmas decorations, historic downtown holiday lights",
}

export default function SanMarcosServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/christmas-colorful.jpeg"
            alt="Christmas Light Installation in San Marcos, Texas"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-white font-medium">SERVING SAN MARCOS, TX</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              San Marcos Christmas Light Installation
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Professional holiday lighting services for San Marcos homes and businesses. Celebrating the charm of the
              San Marcos River city.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Get Free San Marcos Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/30 hover:bg-background/50" asChild>
                <Link href="tel:+15127713091">
                  <Phone className="mr-2 h-4 w-4" />
                  (512) 771-3091
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* San Marcos Service Areas */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">San Marcos Areas We Serve</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
            Bringing professional Christmas lighting to San Marcos communities since 2022
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Historic Downtown</h3>
              <p className="text-muted-foreground mb-4">Charming historic district with unique architecture</p>
              <ul className="space-y-2 text-sm">
                <li>• Historic home specialists</li>
                <li>• Preservation-sensitive designs</li>
                <li>• Classic lighting styles</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Blanco Gardens</h3>
              <p className="text-muted-foreground mb-4">Established residential neighborhood</p>
              <ul className="space-y-2 text-sm">
                <li>• Family-friendly community</li>
                <li>• Traditional home designs</li>
                <li>• Neighborhood coordination</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">River Ridge</h3>
              <p className="text-muted-foreground mb-4">Scenic area near the San Marcos River</p>
              <ul className="space-y-2 text-sm">
                <li>• Natural landscape integration</li>
                <li>• Waterfront property expertise</li>
                <li>• Custom design solutions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us in San Marcos */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why San Marcos Chooses Lone Star Lighting
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">San Marcos Heritage Respect</h3>
                    <p className="text-muted-foreground">
                      We understand and respect San Marcos' rich history and unique character in every installation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Growing San Marcos Community</h3>
                    <p className="text-muted-foreground">
                      Over 150 satisfied San Marcos customers trust us for beautiful, respectful holiday displays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Historic Property Expertise</h3>
                    <p className="text-muted-foreground">
                      Specialized experience with historic homes and preservation-sensitive lighting installations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">University Town Understanding</h3>
                    <p className="text-muted-foreground">
                      We work around Texas State University schedules and understand the unique needs of a college town.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-christmas-lighting.png"
                alt="San Marcos Christmas Light Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* San Marcos Packages */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">San Marcos Christmas Lighting Packages</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Professional installation packages designed for San Marcos homes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Basic San Marcos Package</h3>
              <p className="text-3xl font-bold text-primary mb-4">$600+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>• Roofline lighting</li>
                <li>• Front door wreath</li>
                <li>• Timer controls</li>
                <li>• Installation & removal</li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/packages/basic">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-primary">
            <CardContent className="p-6">
              <div className="text-center mb-2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Advanced San Marcos Package</h3>
              <p className="text-3xl font-bold text-primary mb-4">$1,200+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>• Complete roofline lighting</li>
                <li>• Tree wrapping (2-3 trees)</li>
                <li>• Wreaths & garlands</li>
                <li>• Landscape lighting</li>
                <li>• Smart controls</li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/packages/advanced">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Gingerbread San Marcos Package</h3>
              <p className="text-3xl font-bold text-primary mb-4">$2,500+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>• Full home transformation</li>
                <li>• Extensive tree wrapping</li>
                <li>• Premium decorations</li>
                <li>• Smart home integration</li>
                <li>• Dedicated project manager</li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/packages/gingerbread">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* San Marcos FAQ */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">San Marcos Christmas Lighting FAQ</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">Common questions from San Marcos homeowners</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">When should I book in San Marcos?</h3>
                <p className="text-muted-foreground">
                  San Marcos homeowners should book by September for the best installation dates. Historic downtown
                  properties require special scheduling considerations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you work with historic properties?</h3>
                <p className="text-muted-foreground">
                  Yes! We have extensive experience with historic homes and follow all preservation guidelines while
                  creating beautiful displays.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What about university area properties?</h3>
                <p className="text-muted-foreground">
                  We work with both residential homeowners and rental property managers near Texas State University,
                  accommodating academic schedules.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do you handle river proximity?</h3>
                <p className="text-muted-foreground">
                  Properties near the San Marcos River require special moisture considerations. We use appropriate
                  weatherproofing for these unique locations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Light Up San Marcos?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Join the San Marcos families who trust Lone Star Lighting Displays for their holiday magic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Get Free San Marcos Estimate</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="tel:+15127713091">Call (512) 771-3091</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

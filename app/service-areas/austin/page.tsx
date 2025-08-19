import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Star, Phone, Clock, Award } from "lucide-react"

export const metadata = {
  title: "Christmas Light Installation Austin TX | Lone Star Lighting Displays",
  description:
    "Professional Christmas light installation in Austin, Texas. Serving South Austin, Circle C, Sunset Valley, and surrounding areas. Free estimates, professional installation, guaranteed satisfaction.",
  keywords:
    "Christmas lights Austin TX, holiday lighting Austin, Christmas light installation Austin, Austin Christmas decorations, South Austin holiday lights",
}

export default function AustinServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/hero-christmas-lighting.png"
            alt="Christmas Light Installation in Austin, Texas"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-white font-medium">SERVING AUSTIN, TX</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Austin Christmas Light Installation
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Professional holiday lighting services for Austin homes and businesses. Locally owned, Texas proud.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Get Free Austin Estimate</Link>
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

      {/* Austin Service Areas */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Austin Areas We Serve</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
            Bringing professional Christmas lighting to Austin neighborhoods since 2020
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">South Austin</h3>
              <p className="text-muted-foreground mb-4">Circle C, Shady Hollow, Sunset Valley, Oak Hill</p>
              <ul className="space-y-2 text-sm">
                <li>• Established neighborhoods</li>
                <li>• Family-friendly communities</li>
                <li>• Custom lighting designs</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Southwest Austin</h3>
              <p className="text-muted-foreground mb-4">Westlake, Rollingwood, West Lake Hills</p>
              <ul className="space-y-2 text-sm">
                <li>• Luxury home specialists</li>
                <li>• Premium lighting packages</li>
                <li>• Architectural highlighting</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Central Austin</h3>
              <p className="text-muted-foreground mb-4">Zilker, Barton Hills, Travis Heights</p>
              <ul className="space-y-2 text-sm">
                <li>• Historic home expertise</li>
                <li>• Eco-friendly LED options</li>
                <li>• Neighborhood-sensitive designs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us in Austin */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Austin Chooses Lone Star Lighting
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Local Austin Business</h3>
                    <p className="text-muted-foreground">
                      Family-owned and operated right here in Central Texas. We understand Austin's unique style and
                      weather.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">5-Star Austin Reviews</h3>
                    <p className="text-muted-foreground">
                      Hundreds of satisfied Austin customers trust us year after year for their holiday lighting needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Austin Weather Experts</h3>
                    <p className="text-muted-foreground">
                      We know how to handle Austin's unpredictable weather - from ice storms to 80-degree December days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Fast Austin Response</h3>
                    <p className="text-muted-foreground">
                      Local team means faster installation, quicker maintenance, and immediate support when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/christmas-elegant.png"
                alt="Austin Christmas Light Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Austin Packages */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Austin Christmas Lighting Packages</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Professional installation packages designed for Austin homes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Basic Austin Package</h3>
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
              <h3 className="text-2xl font-bold mb-2">Advanced Austin Package</h3>
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
              <h3 className="text-2xl font-bold mb-2">Gingerbread Austin Package</h3>
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

      {/* Austin FAQ */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Austin Christmas Lighting FAQ</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">Common questions from Austin homeowners</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">When should I book in Austin?</h3>
                <p className="text-muted-foreground">
                  Austin homeowners should book by September for the best installation dates. Our schedule fills up
                  quickly, especially in popular neighborhoods like Circle C and Westlake.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you handle Austin's weather changes?</h3>
                <p className="text-muted-foreground">
                  We're experienced with Austin's unpredictable weather. Our installations are designed to handle
                  everything from ice storms to warm December days.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What about HOA requirements in Austin?</h3>
                <p className="text-muted-foreground">
                  We're familiar with Austin area HOA guidelines and can help ensure your display meets community
                  standards while still looking spectacular.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How long does installation take in Austin?</h3>
                <p className="text-muted-foreground">
                  Most Austin installations take 2-6 hours depending on the package. We work efficiently to minimize
                  disruption to your day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Light Up Austin?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Join hundreds of Austin families who trust Lone Star Lighting Displays for their holiday magic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Get Free Austin Estimate</Link>
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

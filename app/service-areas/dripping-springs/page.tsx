import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Star, Phone, Clock, Award } from "lucide-react"

export const metadata = {
  title: "Christmas Light Installation Dripping Springs TX | Lone Star Lighting Displays",
  description:
    "Professional Christmas light installation in Dripping Springs, Texas. Serving Hill Country homes and luxury properties. Free estimates, professional installation, guaranteed satisfaction.",
  keywords:
    "Christmas lights Dripping Springs TX, holiday lighting Dripping Springs, Christmas light installation Dripping Springs, Hill Country Christmas decorations, Caliterra holiday lights, Belterra Christmas lights",
}

export default function DrippingSpringsServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/basic-package.png"
            alt="Christmas Light Installation in Dripping Springs, Texas"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-white font-medium">SERVING DRIPPING SPRINGS, TX</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Dripping Springs Christmas Light Installation
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Professional holiday lighting services for Hill Country homes and luxury properties. Bringing magic to the
              "Wedding Capital of Texas."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Get Free Dripping Springs Estimate</Link>
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

      {/* Dripping Springs Service Areas */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Dripping Springs Areas We Serve</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
            Bringing professional Christmas lighting to Hill Country communities since 2022
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Caliterra</h3>
              <p className="text-muted-foreground mb-4">Master-planned luxury community</p>
              <ul className="space-y-2 text-sm">
                <li>• Luxury home specialists</li>
                <li>• Premium lighting packages</li>
                <li>• Architectural highlighting</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Belterra</h3>
              <p className="text-muted-foreground mb-4">Golf course community with stunning views</p>
              <ul className="space-y-2 text-sm">
                <li>• Golf course property expertise</li>
                <li>• Landscape integration</li>
                <li>• Custom design solutions</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Headwaters</h3>
              <p className="text-muted-foreground mb-4">Hill Country estates and acreage properties</p>
              <ul className="space-y-2 text-sm">
                <li>• Large property specialists</li>
                <li>• Natural landscape respect</li>
                <li>• Extensive lighting displays</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us in Dripping Springs */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Dripping Springs Chooses Lone Star Lighting
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Hill Country Specialists</h3>
                    <p className="text-muted-foreground">
                      We understand the unique beauty of Hill Country properties and design lighting that complements
                      the natural landscape.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Luxury Property Experience</h3>
                    <p className="text-muted-foreground">
                      Over 100 satisfied Dripping Springs customers trust us for high-end, sophisticated holiday
                      displays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Large Property Expertise</h3>
                    <p className="text-muted-foreground">
                      Experienced with acreage properties, long driveways, and extensive outdoor spaces that require
                      specialized planning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Premium Service Standards</h3>
                    <p className="text-muted-foreground">
                      White-glove service that matches the expectations of discerning Hill Country homeowners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/gingerbread-package.png"
                alt="Dripping Springs Christmas Light Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dripping Springs Packages */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Dripping Springs Christmas Lighting Packages
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Professional installation packages designed for Hill Country homes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Basic Hill Country Package</h3>
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
              <h3 className="text-2xl font-bold mb-2">Advanced Hill Country Package</h3>
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
              <h3 className="text-2xl font-bold mb-2">Luxury Estate Package</h3>
              <p className="text-3xl font-bold text-primary mb-4">$2,500+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>• Full property transformation</li>
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

      {/* Dripping Springs FAQ */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Dripping Springs Christmas Lighting FAQ</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">Common questions from Hill Country homeowners</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">When should I book in Dripping Springs?</h3>
                <p className="text-muted-foreground">
                  Hill Country homeowners should book by August for the best installation dates. Luxury properties
                  require additional planning time for custom designs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you handle large properties?</h3>
                <p className="text-muted-foreground">
                  We specialize in acreage properties, long driveways, and extensive outdoor spaces that require
                  specialized equipment and planning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What about Hill Country weather?</h3>
                <p className="text-muted-foreground">
                  We're experienced with Hill Country's unique weather patterns and use installations designed to
                  withstand wind and temperature variations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do you respect the natural landscape?</h3>
                <p className="text-muted-foreground">
                  Our designs complement the natural Hill Country beauty, using lighting that enhances rather than
                  overwhelms the stunning landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Light Up the Hill Country?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Join the Dripping Springs families who trust Lone Star Lighting Displays for their luxury holiday displays.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Get Free Dripping Springs Estimate</Link>
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

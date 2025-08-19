import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Star, Phone, Clock, Award } from "lucide-react"

export const metadata = {
  title: "Christmas Light Installation Kyle TX | Lone Star Lighting Displays",
  description:
    "Professional Christmas light installation in Kyle, Texas. Serving Plum Creek, Waterleaf, and all Kyle neighborhoods. Free estimates, professional installation, guaranteed satisfaction.",
  keywords:
    "Christmas lights Kyle TX, holiday lighting Kyle, Christmas light installation Kyle, Kyle Christmas decorations, Plum Creek holiday lights, Waterleaf Christmas lights",
}

export default function KyleServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/gingerbread-package.png"
            alt="Christmas Light Installation in Kyle, Texas"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-white font-medium">SERVING KYLE, TX</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Kyle Christmas Light Installation
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Professional holiday lighting services for Kyle homes and businesses. Trusted by the Kyle community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Get Free Kyle Estimate</Link>
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

      {/* Kyle Service Areas */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kyle Neighborhoods We Serve</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
            Bringing professional Christmas lighting to Kyle communities since 2021
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Plum Creek</h3>
              <p className="text-muted-foreground mb-4">Master-planned community with diverse home styles</p>
              <ul className="space-y-2 text-sm">
                <li>• Large community displays</li>
                <li>• HOA-compliant designs</li>
                <li>• Coordinated neighborhood looks</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Waterleaf</h3>
              <p className="text-muted-foreground mb-4">Newer development with modern amenities</p>
              <ul className="space-y-2 text-sm">
                <li>• Contemporary lighting styles</li>
                <li>• Smart home integration</li>
                <li>• Energy-efficient solutions</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Kyle Crossing</h3>
              <p className="text-muted-foreground mb-4">Established neighborhood with mature landscaping</p>
              <ul className="space-y-2 text-sm">
                <li>• Tree wrapping specialists</li>
                <li>• Landscape integration</li>
                <li>• Traditional designs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us in Kyle */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Kyle Chooses Lone Star Lighting
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Kyle Community Partner</h3>
                    <p className="text-muted-foreground">
                      We're proud to be part of Kyle's growing community and support local events and initiatives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Kyle Family Favorite</h3>
                    <p className="text-muted-foreground">
                      Over 300 satisfied Kyle customers choose us year after year for reliable, beautiful displays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">HOA Expertise</h3>
                    <p className="text-muted-foreground">
                      Experienced with Kyle's HOA requirements and community standards for holiday decorations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Reliable Kyle Service</h3>
                    <p className="text-muted-foreground">
                      Punctual installation, proactive maintenance, and responsive support throughout the season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/basic-package.png"
                alt="Kyle Christmas Light Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kyle Packages */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kyle Christmas Lighting Packages</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Professional installation packages designed for Kyle homes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Basic Kyle Package</h3>
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
              <h3 className="text-2xl font-bold mb-2">Advanced Kyle Package</h3>
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
              <h3 className="text-2xl font-bold mb-2">Gingerbread Kyle Package</h3>
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

      {/* Kyle FAQ */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kyle Christmas Lighting FAQ</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">Common questions from Kyle homeowners</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">When should I book in Kyle?</h3>
                <p className="text-muted-foreground">
                  Kyle homeowners should book by September for the best installation dates. Popular neighborhoods like
                  Plum Creek fill up especially quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you work with Kyle HOAs?</h3>
                <p className="text-muted-foreground">
                  We're experienced with Kyle's various HOA requirements and can help ensure your display meets all
                  community guidelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What's popular in Kyle neighborhoods?</h3>
                <p className="text-muted-foreground">
                  Kyle residents love coordinated neighborhood displays and smart lighting controls. We specialize in
                  both traditional and modern lighting styles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do you handle Kyle's growth?</h3>
                <p className="text-muted-foreground">
                  As Kyle continues to grow, we've expanded our team and equipment to serve both established and new
                  neighborhoods efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Light Up Kyle?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Join hundreds of Kyle families who trust Lone Star Lighting Displays for their holiday magic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Get Free Kyle Estimate</Link>
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

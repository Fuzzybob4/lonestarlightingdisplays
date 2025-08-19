import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Home } from "lucide-react"

export const metadata = {
  title: "Basic Holiday Lighting Package | Lone Star Lighting Displays",
  description:
    "Our Basic Package features beautiful roofline lighting to highlight your home's architecture. Starting at $600 with professional installation and removal included.",
}

export default function BasicPackagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/basic-package.png"
            alt="Basic Holiday Lighting Package"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Basic Package</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Simple elegance that highlights your home's natural beauty
            </p>
            <div className="mt-6">
              <span className="text-3xl font-bold text-white">Starting at $600</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">What's Included</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Professional Roofline Lighting</p>
                  <p className="text-sm text-muted-foreground">
                    Warm white LED lights outlining your home's roofline and architectural features
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Front Door Decoration</p>
                  <p className="text-sm text-muted-foreground">Beautiful wreath or garland to welcome guests</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Timer Controls</p>
                  <p className="text-sm text-muted-foreground">Automatic on/off scheduling for convenience</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Professional Installation & Removal</p>
                  <p className="text-sm text-muted-foreground">Complete setup and takedown service included</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Pricing Details</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Installation (up to 200 ft)</span>
                    <span className="font-medium">$600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional footage</span>
                    <span className="font-medium">$3/ft</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Starting Price</span>
                      <span>$600</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Timeline</h3>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Installation:</span> 2-3 hours
                  </p>
                  <p>
                    <span className="font-medium">Season:</span> November - January
                  </p>
                  <p>
                    <span className="font-medium">Removal:</span> Included in price
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Perfect For</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Our Basic Package is ideal for homeowners who want elegant, professional lighting without the complexity
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">First-Time Customers</h3>
                <p className="text-muted-foreground">Perfect introduction to professional holiday lighting</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Smaller Homes</h3>
                <p className="text-muted-foreground">
                  Ideal for homes with simple rooflines and architectural features
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Budget-Conscious</h3>
                <p className="text-muted-foreground">Maximum impact while staying within a reasonable budget</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Book your Basic Package today and transform your home with elegant holiday lighting.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Book Basic Package</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/packages/advanced">View Advanced Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

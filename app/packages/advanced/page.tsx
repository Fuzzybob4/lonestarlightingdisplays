import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Star } from "lucide-react"

export const metadata = {
  title: "Advanced Holiday Lighting Package | Lone Star Lighting Displays",
  description:
    "Our most popular Advanced Package includes complete roofline lighting, tree wrapping, wreaths, and garlands. Starting at $1,200 with professional installation.",
}

export default function AdvancedPackagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/advanced-package.png"
            alt="Advanced Holiday Lighting Package"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-medium">MOST POPULAR</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Advanced Package</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Complete holiday transformation with roofline, wreaths, and landscaping
            </p>
            <div className="mt-6">
              <span className="text-3xl font-bold text-white">Starting at $1,200</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">What's Included</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Complete Roofline Lighting</p>
                  <p className="text-sm text-muted-foreground">
                    Full perimeter lighting highlighting all architectural features
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Tree Wrapping (2-3 Trees)</p>
                  <p className="text-sm text-muted-foreground">
                    Professional wrapping of your front yard trees with warm white LEDs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Wreaths & Garlands</p>
                  <p className="text-sm text-muted-foreground">
                    Premium wreaths for doors and windows, plus garland accents
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Landscape Bush Lighting</p>
                  <p className="text-sm text-muted-foreground">Net lights for bushes and shrubs to complete the look</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Smart Timer Controls</p>
                  <p className="text-sm text-muted-foreground">Advanced scheduling with dusk-to-dawn sensors</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Professional Installation & Removal</p>
                  <p className="text-sm text-muted-foreground">Complete setup, maintenance, and takedown service</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="border-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Pricing Details</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base package (up to 300 ft)</span>
                    <span className="font-medium">$1,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional tree wrapping</span>
                    <span className="font-medium">$75/tree</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Extra roofline footage</span>
                    <span className="font-medium">$4/ft</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Starting Price</span>
                      <span>$1,200</span>
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
                    <span className="font-medium">Installation:</span> 4-6 hours
                  </p>
                  <p>
                    <span className="font-medium">Season:</span> November - January
                  </p>
                  <p>
                    <span className="font-medium">Maintenance:</span> 1 mid-season check included
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

      {/* Why Choose Advanced */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Advanced?</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Our most popular package offers the perfect balance of impact and value
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Complete Transformation</h3>
                <p className="text-muted-foreground">Your entire front yard becomes a winter wonderland</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Neighborhood Standout</h3>
                <p className="text-muted-foreground">Be the house everyone drives by to see</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Best Value</h3>
                <p className="text-muted-foreground">Maximum impact for your investment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready for the Full Experience?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Join thousands of satisfied customers who chose our Advanced Package for their holiday lighting.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Book Advanced Package</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/packages/gingerbread">View Gingerbread Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Crown } from "lucide-react"

export const metadata = {
  title: "Gingerbread Holiday Lighting Package | Lone Star Lighting Displays",
  description:
    "Our premium Gingerbread Package offers complete holiday transformation with full home lighting design, extensive tree wrapping, and smart home integration. Starting at $2,500.",
}

export default function GingerbreadPackagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/gingerbread-package.png"
            alt="Gingerbread Holiday Lighting Package"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-medium">PREMIUM PACKAGE</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Gingerbread Package</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Complete holiday transformation with luxury features and smart integration
            </p>
            <div className="mt-6">
              <span className="text-3xl font-bold text-white">Starting at $2,500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Premium Features</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Full Home Lighting Design</p>
                  <p className="text-sm text-muted-foreground">
                    Custom lighting plan covering entire property including backyard
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Extensive Tree Wrapping</p>
                  <p className="text-sm text-muted-foreground">
                    Professional wrapping of all front and side yard trees
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Premium Decorative Elements</p>
                  <p className="text-sm text-muted-foreground">
                    Luxury wreaths, garlands, bows, and custom decorations
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Landscape Accent Lighting</p>
                  <p className="text-sm text-muted-foreground">
                    Pathway lights, uplighting, and ground-level accent features
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Smart Home Integration</p>
                  <p className="text-sm text-muted-foreground">
                    App control, voice activation, and custom lighting scenes
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Dedicated Project Manager</p>
                  <p className="text-sm text-muted-foreground">Personal service representative for the entire season</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Priority Maintenance</p>
                  <p className="text-sm text-muted-foreground">24/7 support and immediate response to any issues</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <Card className="border-2 border-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Investment Details</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base premium package</span>
                    <span className="font-medium">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional tree wrapping</span>
                    <span className="font-medium">$75/tree</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom decorative elements</span>
                    <span className="font-medium">$200-500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart home integration</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Starting Investment</span>
                      <span>$2,500</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Premium Service</h3>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Design consultation:</span> 1-2 hours
                  </p>
                  <p>
                    <span className="font-medium">Installation:</span> 8-12 hours (2-day process)
                  </p>
                  <p>
                    <span className="font-medium">Season:</span> November - January
                  </p>
                  <p>
                    <span className="font-medium">Maintenance:</span> Weekly checks included
                  </p>
                  <p>
                    <span className="font-medium">Removal & Storage:</span> Included
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Luxury Experience</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              The Gingerbread Package is designed for homeowners who want the ultimate holiday lighting experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Custom Design</h3>
                <p className="text-muted-foreground">Personalized lighting plan created specifically for your home</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Smart Technology</h3>
                <p className="text-muted-foreground">Control your lights from anywhere with our mobile app</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">White Glove Service</h3>
                <p className="text-muted-foreground">Dedicated support team ensures perfection all season long</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Neighborhood Showcase</h3>
                <p className="text-muted-foreground">Become the premier holiday destination in your area</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                <p className="text-muted-foreground">Only the highest quality LEDs and decorative elements</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Stress-Free</h3>
                <p className="text-muted-foreground">We handle every detail so you can enjoy the holidays</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready for the Ultimate Experience?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Transform your home into a holiday masterpiece with our premium Gingerbread Package.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Book Gingerbread Package</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

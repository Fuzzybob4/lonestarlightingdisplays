import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Gift, Snowflake, TreePine } from "lucide-react"

export const metadata = {
  title: "Christmas Lighting | Lone Star Lighting Displays",
  description: "Transform your home into a winter wonderland with professional Christmas lighting displays in Texas.",
}

export default function ChristmasLightingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/christmas-colorful.jpeg"
            alt="Christmas Lighting"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Christmas Lighting</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Transform your home into a winter wonderland with festive displays
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Magical Christmas Displays</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Create lasting holiday memories with our professional Christmas lighting installations. From simple
              elegance to elaborate displays, we bring the magic of Christmas to your home.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Roofline and architectural lighting</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Tree wrapping and landscape lighting</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Wreaths, garlands, and decorative elements</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Installation, maintenance, and removal</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/christmas-elegant.png" alt="Christmas lighting display" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Christmas Packages */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Christmas Lighting Packages</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">Choose the perfect holiday display for your home</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-background rounded-lg p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                <Snowflake className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Basic Package</h3>
              </div>
              <p className="text-2xl font-bold mb-2">Starting at $400</p>
              <p className="text-muted-foreground mb-4">Simple elegance for your home</p>
              <ul className="space-y-2 text-sm">
                <li>• Roofline lighting</li>
                <li>• Front door decoration</li>
                <li>• Basic timer controls</li>
                <li>• Installation & removal</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow border-2 border-primary">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Advanced Package</h3>
              </div>
              <p className="text-2xl font-bold mb-2">Starting at $800</p>
              <p className="text-muted-foreground mb-4">Most popular holiday display</p>
              <ul className="space-y-2 text-sm">
                <li>• Complete roofline lighting</li>
                <li>• Tree wrapping (2-3 trees)</li>
                <li>• Wreaths and garlands</li>
                <li>• Smart timer controls</li>
                <li>• Installation & removal</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Gingerbread Package</h3>
              </div>
              <p className="text-2xl font-bold mb-2">Starting at $1,500</p>
              <p className="text-muted-foreground mb-4">Complete holiday transformation</p>
              <ul className="space-y-2 text-sm">
                <li>• Full home lighting design</li>
                <li>• Extensive tree wrapping</li>
                <li>• Premium decorative elements</li>
                <li>• Landscape accent lighting</li>
                <li>• Smart home integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready for a Magical Christmas?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Book now to secure your spot and transform your home into a holiday wonderland.
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

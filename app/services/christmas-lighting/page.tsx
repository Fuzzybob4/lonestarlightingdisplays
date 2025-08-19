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
            src="/images/christmas-elegant.png"
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
            <Image
              src="/images/christmas-colorful.jpeg"
              alt="Christmas lighting display"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              🎄 Holiday Lighting Services in Buda, Kyle, San Marcos, and South Austin
            </h2>
            <p className="mt-4 max-w-[800px] text-muted-foreground text-lg">
              At Lone Star Lighting Displays, we bring the magic of Christmas to life throughout Buda, Kyle, San Marcos,
              and South Austin with custom holiday lighting designed to wow your neighbors and community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center mb-12">
            <div>
              <p className="text-muted-foreground text-lg mb-6">
                Whether you're decorating a charming front porch in Buda, outlining rooflines in South Austin, or
                wrapping trees around a San Marcos property, our team delivers professional, eye-catching Christmas
                light installation that fits your vision.
              </p>

              <h3 className="text-2xl font-bold mb-4">🌟 Why Homeowners & Businesses Trust Us in These Areas:</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-primary">Buda</h4>
                  <p className="text-muted-foreground">
                    We specialize in classic warm white roofline installs and tree wrapping services perfect for
                    neighborhoods like Garlic Creek and Sunfield.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary">Kyle</h4>
                  <p className="text-muted-foreground">
                    From holiday lighting for Plum Creek homes to larger HOA displays, we're known for our punctuality
                    and stunning designs in Kyle TX.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary">San Marcos</h4>
                  <p className="text-muted-foreground">
                    Whether it's a rental property, business storefront, or residential home, we create festive
                    atmospheres along the I-35 corridor and historic neighborhoods with professional San Marcos
                    Christmas lights.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary">South Austin</h4>
                  <p className="text-muted-foreground">
                    Our South Austin holiday lighting displays transform homes and businesses in communities like Circle
                    C, Shady Hollow, and Sunset Valley into holiday landmarks.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/christmas-elegant.png"
                alt="Christmas lighting installation in Buda, Kyle, San Marcos, and South Austin"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 shadow">
            <p className="text-muted-foreground text-center">
              We're proud to serve these growing Central Texas communities and can accommodate both early installs and
              unique design requests for commercial and residential properties. Our outdoor Christmas decorations bring
              joy to families throughout Buda, Kyle, San Marcos, and the greater Austin area.
            </p>
          </div>
        </div>
      </section>

      {/* Christmas Packages */}
      <section className="container py-12 md:py-24">
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

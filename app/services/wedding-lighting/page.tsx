import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Star, Sparkles } from "lucide-react"

export const metadata = {
  title: "Wedding Lighting | Lone Star Lighting Displays",
  description:
    "Create magical wedding moments with professional lighting. Romantic ambiance for your special day in Texas.",
}

export default function WeddingLightingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/wedding-header.jpeg"
            alt="Wedding Lighting"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Wedding Lighting</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Create magical moments with romantic lighting for your special day
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Romantic Wedding Ambiance</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Your wedding day deserves perfect lighting that creates an enchanting atmosphere for you and your guests.
              Our professional wedding lighting transforms any venue into a romantic wonderland.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>String lights and bistro lighting for outdoor ceremonies</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Uplighting and accent lighting for reception venues</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Dance floor and stage lighting</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Pathway and safety lighting for evening events</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/wedding-ambiance.avif" alt="Wedding ceremony lighting" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Wedding Lighting Packages</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Choose the perfect lighting package for your special day
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-background rounded-lg p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Intimate Package</h3>
              </div>
              <p className="text-2xl font-bold mb-2">Starting at $800</p>
              <p className="text-muted-foreground mb-4">Perfect for smaller ceremonies up to 50 guests</p>
              <ul className="space-y-2 text-sm">
                <li>• String lights for ceremony backdrop</li>
                <li>• Pathway lighting</li>
                <li>• Basic reception lighting</li>
                <li>• 4-hour service</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow border-2 border-primary">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Romantic Package</h3>
              </div>
              <p className="text-2xl font-bold mb-2">Starting at $1,500</p>
              <p className="text-muted-foreground mb-4">Most popular for weddings up to 150 guests</p>
              <ul className="space-y-2 text-sm">
                <li>• Complete ceremony lighting</li>
                <li>• Reception uplighting</li>
                <li>• Dance floor lighting</li>
                <li>• Cocktail area ambiance</li>
                <li>• 8-hour service</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Fairytale Package</h3>
              </div>
              <p className="text-2xl font-bold mb-2">Starting at $2,500</p>
              <p className="text-muted-foreground mb-4">Luxury lighting for grand celebrations</p>
              <ul className="space-y-2 text-sm">
                <li>• Premium ceremony lighting design</li>
                <li>• Full venue transformation</li>
                <li>• Custom color schemes</li>
                <li>• Professional lighting operator</li>
                <li>• 12-hour service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Light Up Your Special Day?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Let us help create the perfect romantic atmosphere for your wedding celebration.
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

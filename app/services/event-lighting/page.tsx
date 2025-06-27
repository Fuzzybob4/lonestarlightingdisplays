import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Users, Zap } from "lucide-react"

export const metadata = {
  title: "Event Lighting | Lone Star Lighting Displays",
  description: "Professional lighting solutions for corporate events, parties, and celebrations in Texas.",
}

export default function EventLightingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/event-string-lights.jpeg"
            alt="Event Lighting"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Event Lighting</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Professional lighting solutions for corporate events and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Professional Event Lighting</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6">
              Make your corporate events, parties, and celebrations memorable with professional lighting that sets the
              perfect mood and ensures your event stands out.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Corporate event and conference lighting</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Birthday parties and anniversary celebrations</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Graduation parties and milestone events</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Outdoor festivals and community events</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/event-professional.jpeg" alt="Corporate event lighting" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Event Types We Serve</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              From intimate gatherings to large-scale corporate events
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background rounded-lg p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Corporate Events</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Product launches</li>
                <li>• Company parties</li>
                <li>• Award ceremonies</li>
                <li>• Trade shows</li>
                <li>• Team building events</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Private Celebrations</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Birthday parties</li>
                <li>• Anniversary celebrations</li>
                <li>• Graduation parties</li>
                <li>• Retirement parties</li>
                <li>• Family reunions</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Special Events</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fundraising galas</li>
                <li>• Community festivals</li>
                <li>• Grand openings</li>
                <li>• Holiday parties</li>
                <li>• Outdoor concerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Illuminate Your Event?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Let us help create the perfect atmosphere for your next corporate event or celebration.
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

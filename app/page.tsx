import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Clock, ThumbsUp, Zap } from "lucide-react"
import { SeasonalContent, SeasonalServices, SeasonalCTA } from "@/components/seasonal-content"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Now using dynamic seasonal content */}
      <SeasonalContent />

      {/* Why Choose Us Section */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">Professional lighting services with a Texas touch</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Locally Owned & Operated</h3>
              <p className="mt-2 text-muted-foreground">Texas pride in every installation we complete</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Premium LED Lighting</h3>
              <p className="mt-2 text-muted-foreground">Energy-efficient, bright, and reliable installations</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast & Professional</h3>
              <p className="mt-2 text-muted-foreground">Expert installation and timely service</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">100% Satisfaction</h3>
              <p className="mt-2 text-muted-foreground">We guarantee you'll love your lighting display</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Overview - Now using dynamic seasonal content */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">Professional lighting solutions for every need</p>
          </div>

          {/* Featured Seasonal Services */}
          <div className="mt-12">
            <SeasonalServices />
          </div>

          {/* Quick Service Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">🎄 Holiday Lighting</h3>
                <p className="text-muted-foreground mb-4">Transform your home with stunning Christmas displays</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/christmas-lighting">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">💡 Landscape Lighting</h3>
                <p className="text-muted-foreground mb-4">Enhance your outdoor spaces year-round</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/landscape-lighting">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">🎉 Event Lighting</h3>
                <p className="text-muted-foreground mb-4">Professional lighting for special occasions</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/event-lighting">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 text-primary">
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
              </div>
              <p className="mt-4 text-muted-foreground">
                "Lone Star Lighting transformed our home! The team was professional, on time, and the lights look
                amazing. We'll definitely be using them again!"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="rounded-full bg-muted h-12 w-12 overflow-hidden relative">
                  <Image src="/images/testimonial-1.png" alt="Sarah Johnson" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Austin, TX</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 text-primary">
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
              </div>
              <p className="mt-4 text-muted-foreground">
                "Best decision we made! Their premium package made our house the talk of the neighborhood. Worth every
                penny for the hassle-free experience."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="rounded-full bg-muted h-12 w-12 overflow-hidden relative">
                  <Image src="/images/testimonial-2.png" alt="Michael Rodriguez" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">San Antonio, TX</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-1 text-primary">
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
                <Star className="fill-primary h-5 w-5" />
              </div>
              <p className="mt-4 text-muted-foreground">
                "As a business owner, I needed a company that could handle a large commercial display. Lone Star
                delivered beyond expectations and helped bring in more customers!"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="rounded-full bg-muted h-12 w-12 overflow-hidden relative">
                  <Image src="/images/testimonial-3.png" alt="Jennifer Williams" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">Jennifer Williams</p>
                  <p className="text-sm text-muted-foreground">Houston, TX</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Loyalty Program Teaser */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Loyalty Program</h2>
              <p className="mt-4 text-primary-foreground/80 text-lg">
                Become a member of our Lone Star Bright Rewards program and enjoy exclusive benefits:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 flex-shrink-0" />
                  <span>Up to 15% off annual renewals</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 flex-shrink-0" />
                  <span>Priority scheduling for loyal customers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 flex-shrink-0" />
                  <span>Free upgrades and exclusive perks</span>
                </li>
              </ul>
              <Button className="mt-8" size="lg" variant="secondary" asChild>
                <Link href="/loyalty">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/loyalty-program.png"
                alt="VIP Rewards Loyalty Program"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Now using dynamic seasonal content */}
      <section className="container py-12 md:py-24">
        <div className="rounded-lg bg-muted p-8 md:p-12 text-center">
          <SeasonalCTA />
        </div>
      </section>
    </div>
  )
}

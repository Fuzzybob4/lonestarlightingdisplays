import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Gift, Users } from "lucide-react"

export const metadata = {
  title: "Loyalty Program | Lone Star Lighting Displays",
  description:
    "Join our Lone Star Bright Rewards program and enjoy exclusive benefits, discounts, and perks for your holiday lighting.",
}

export default function LoyaltyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/images/christmas-elegant.png" alt="Loyalty Program" fill className="object-cover" priority />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Lone Star Bright Rewards</h1>
          <p className="mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Our loyalty program for valued customers
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Rewarding Your Loyalty</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              At Lone Star Lighting Displays, we value our long-term customers. Our Lone Star Bright Rewards program is
              designed to thank you for your continued business with exclusive benefits and savings.
            </p>
            <p className="mt-4 text-muted-foreground text-lg">
              The longer you're with us, the more you save and the better your benefits become. It's our way of showing
              appreciation for letting us be part of your holiday traditions year after year.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/booking">Join Now</Link>
              </Button>
            </div>
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
      </section>

      {/* Membership Tiers */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Membership Tiers</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Our three-tier system rewards you based on how long you've been with us
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Silver Star</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">1+ Year Customer</p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>5% Off Annual Renewal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Priority Scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Seasonal Newsletter with Tips</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t w-full">
                  <p className="text-sm text-muted-foreground">Sign a 1-year contract to qualify</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Gold Star</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">2+ Years Customer</p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>10% Off Annual Renewal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Priority Scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Free Small Upgrade (e.g., extra tree wrap)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Seasonal Newsletter with Tips</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t w-full">
                  <p className="text-sm text-muted-foreground">Automatic upgrade after 2 years</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Platinum Star</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">3+ Years Customer</p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>15% Off Annual Renewal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Exclusive Early Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Free Medium Upgrade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Seasonal Newsletter with Tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-medium mt-1">•</span>
                    <span>Exclusive Member Events</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t w-full">
                  <p className="text-sm text-muted-foreground">Automatic upgrade after 3 years</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              <span className="font-medium text-primary">Bonus:</span> Customers who book before September 30th get an
              additional 5% off.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/images/hevent-string-lights.jpeg" alt="Referral Program" fill className="object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter">Shine & Earn Referral Program</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Share the joy of professional holiday lighting with friends and family while earning rewards for yourself.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <Gift className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">$50 OFF for you</p>
                  <p className="text-muted-foreground">For each new customer you refer who books with us</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <Gift className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">$50 OFF for your friend</p>
                  <p className="text-muted-foreground">New customers also receive $50 off their first booking</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <Gift className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Stackable rewards</p>
                  <p className="text-muted-foreground">No limit! Refer 3 people, get $150 in savings</p>
                </div>
              </li>
            </ul>
            <Button className="mt-8" asChild>
              <Link href="/contact">Refer a Friend</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Perks */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Exclusive VIP Perks</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Special benefits for our high-value customers who book displays of $5,000+
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Free Holiday Decor</h3>
                <p className="mt-4 text-muted-foreground flex-grow">
                  Receive a free wreath or lighted garland on your second year as a VIP customer.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">First Install Priority</h3>
                <p className="mt-4 text-muted-foreground flex-grow">
                  Guaranteed early installation to ensure your display is up and running before anyone else.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Custom Keepsake</h3>
                <p className="mt-4 text-muted-foreground flex-grow">
                  Receive a Lone Star ornament as a small appreciation gift for your continued support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">Common questions about our loyalty program</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">How do I join the loyalty program?</h3>
              <p className="mt-2 text-muted-foreground">
                Simply book our services for one season with a contract. You'll automatically be enrolled in the Silver
                Star tier, with benefits increasing as you continue with us year after year.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">When do I receive my loyalty discount?</h3>
              <p className="mt-2 text-muted-foreground">
                Loyalty discounts are applied to your renewal booking for the following year. The discount will be
                automatically applied when you book your next season.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">How does the referral program work?</h3>
              <p className="mt-2 text-muted-foreground">
                Simply provide your friend's contact information through our referral form or have them mention your
                name when they book. Once they complete their booking, both of you will receive the $50 discount.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Can I combine loyalty discounts with other offers?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes! Your loyalty tier discount can be combined with the early booking bonus (before Sept. 30) and
                referral discounts for maximum savings.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Loyalty Program Today
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            Book your holiday lighting now and start earning rewards and exclusive benefits.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Book Now</Link>
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

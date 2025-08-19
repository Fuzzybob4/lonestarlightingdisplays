import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Star } from "lucide-react"

export const metadata = {
  title: "Service Areas | Lone Star Lighting Displays - Austin, Buda, Kyle, San Marcos",
  description:
    "Professional Christmas light installation serving Austin, Buda, Kyle, San Marcos, Dripping Springs and surrounding Central Texas areas. Local, trusted, professional.",
  keywords:
    "Christmas lights Austin, holiday lighting Buda, Kyle Christmas lights, San Marcos lighting, Dripping Springs holiday decorations, Central Texas Christmas installation",
}

const serviceAreas = [
  {
    city: "Austin",
    slug: "austin",
    description: "South Austin, Circle C, Sunset Valley, Westlake, and surrounding areas",
    neighborhoods: ["South Austin", "Circle C", "Sunset Valley", "Westlake", "Oak Hill", "Zilker"],
    image: "/images/hero-christmas-lighting.png",
    established: "2020",
    customers: "500+",
  },
  {
    city: "Buda",
    slug: "buda",
    description: "Garlic Creek, Sunfield, and all Buda neighborhoods",
    neighborhoods: ["Garlic Creek", "Sunfield", "Buda Mill Creek", "Elm Grove"],
    image: "/images/christmas-elegant.png",
    established: "2021",
    customers: "200+",
  },
  {
    city: "Kyle",
    slug: "kyle",
    description: "Plum Creek, Waterleaf, and Kyle residential areas",
    neighborhoods: ["Plum Creek", "Waterleaf", "Kyle Crossing", "Hometown Kyle"],
    image: "/images/advanced-package.png",
    established: "2021",
    customers: "300+",
  },
  {
    city: "San Marcos",
    slug: "san-marcos",
    description: "Historic downtown, residential areas, and business districts",
    neighborhoods: ["Historic Downtown", "Blanco Gardens", "River Ridge", "Springtown"],
    image: "/images/gingerbread-package.png",
    established: "2022",
    customers: "150+",
  },
  {
    city: "Dripping Springs",
    slug: "dripping-springs",
    description: "Hill Country homes and luxury properties",
    neighborhoods: ["Caliterra", "Belterra", "Dripping Springs Ranch", "Headwaters"],
    image: "/images/basic-package.png",
    established: "2022",
    customers: "100+",
  },
]

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/hero-christmas-lighting.png"
            alt="Christmas Light Installation Service Areas"
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-white font-medium">CENTRAL TEXAS SERVICE AREAS</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Where We Serve</h1>
            <p className="mt-4 max-w-[700px] text-lg text-white md:text-xl">
              Professional Christmas light installation across Central Texas communities
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Service Areas</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
            Proudly serving Central Texas families and businesses with professional holiday lighting since 2020
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {serviceAreas.map((area, index) => (
            <Card key={area.slug} className="overflow-hidden">
              <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={`relative h-[300px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={`${area.city} Christmas Lighting`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent
                  className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold">{area.city}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{area.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Serving Since</span>
                      </div>
                      <p className="text-lg font-bold">{area.established}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Happy Customers</span>
                      </div>
                      <p className="text-lg font-bold">{area.customers}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Neighborhoods We Serve:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.neighborhoods.map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link href={`/service-areas/${area.slug}`}>Learn More About {area.city}</Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1 bg-transparent">
                      <Link href="/booking">Get {area.city} Estimate</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Central Texas Coverage</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              We're strategically located to serve the greater Austin metropolitan area and surrounding communities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">North of Austin</h3>
                <p className="text-muted-foreground">Serving communities along I-35 and Highway 183</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">South of Austin</h3>
                <p className="text-muted-foreground">Buda, Kyle, San Marcos, and the I-35 corridor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">West of Austin</h3>
                <p className="text-muted-foreground">Hill Country communities and luxury developments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Why Choose Local?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Local Knowledge</h3>
                  <p className="text-muted-foreground">
                    We understand Central Texas weather, HOA requirements, and neighborhood preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Faster Response</h3>
                  <p className="text-muted-foreground">
                    Local team means quicker installation, faster maintenance, and immediate support.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">Community Reputation</h3>
                  <p className="text-muted-foreground">
                    Our reputation is built on satisfied neighbors and word-of-mouth referrals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-elegant.png"
              alt="Local Christmas Light Installation Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Don't See Your Area Listed?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto">
            We're always expanding our service areas. Contact us to see if we can serve your community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="tel:+15127713091">
                <Phone className="mr-2 h-4 w-4" />
                (512) 771-3091
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

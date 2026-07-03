import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Star, Phone, Clock, Award, ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { CityTestimonials } from "@/components/city-testimonials"
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/structured-data"
import { BUSINESS_INFO } from "@/lib/business-info"
import type { CityData } from "@/lib/cities"
import { CITIES } from "@/lib/cities"

const PACKAGES = [
  {
    name: "Basic",
    price: "$600+",
    href: "/packages/basic",
    features: ["Roofline lighting", "Front door wreath", "Timer controls", "Installation & removal"],
    featured: false,
  },
  {
    name: "Advanced",
    price: "$1,200+",
    href: "/packages/advanced",
    features: ["Complete roofline", "Tree wrapping (2-3 trees)", "Wreaths & garlands", "Landscape lighting", "Smart controls"],
    featured: true,
  },
  {
    name: "Gingerbread",
    price: "$2,500+",
    href: "/packages/gingerbread",
    features: ["Full home transformation", "Extensive tree wrapping", "Premium decorations", "Smart home integration", "Dedicated project manager"],
    featured: false,
  },
]

const WHY_CHOOSE = [
  {
    icon: Award,
    title: "Local Expertise",
    body: (city: string) => `We know ${city}'s neighborhoods, weather, and HOA guidelines — and design every display to match.`,
  },
  {
    icon: Star,
    title: "Trusted by Neighbors",
    body: (city: string) => `${city} families rely on us year after year for reliable, beautiful holiday lighting.`,
  },
  {
    icon: CheckCircle,
    title: "Full-Service",
    body: () => "Design, installation, in-season maintenance, takedown, and storage — all handled for you.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    body: (city: string) => `Being local means quicker installs and same-week service calls across ${city}.`,
  },
]

export function CityPageTemplate({ data }: { data: CityData }) {
  const { city, slug } = data
  const pageUrl = `/service-areas/${slug}`
  const nearbyCities = CITIES.filter((c) => c.slug !== slug).slice(0, 6)

  return (
    <div className="flex flex-col">
      <JsonLd
        id={`json-ld-city-${slug}`}
        data={[
          serviceSchema({
            name: `Christmas Light Installation in ${city}, TX`,
            description: data.intro,
            serviceType: "Christmas Light Installation",
            areaServed: `${city}, TX`,
            url: pageUrl,
            image: data.heroImage,
          }),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/service-areas" },
            { name: city, url: pageUrl },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image
            src={data.heroImage || "/placeholder.svg"}
            alt={`Christmas light installation in ${city}, Texas`}
            fill
            className="object-cover brightness-110"
            priority
          />
        </div>
        <div className="container mx-auto px-4 absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <div className="bg-background/30 backdrop-blur-sm px-6 py-4 rounded-lg max-w-3xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-white font-medium">SERVING {city.toUpperCase()}, TX</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
              {city} Christmas Light Installation
            </h1>
            <p className="mt-4 text-lg text-white md:text-xl text-pretty">{data.proximity}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">{`Get Free ${city} Estimate`}</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/30 hover:bg-background/50" asChild>
                <Link href={`tel:${BUSINESS_INFO.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {BUSINESS_INFO.telephoneDisplay}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Local Context */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">{data.county}</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
              {`Professional Holiday Lighting in ${city}`}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">{data.intro}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">{data.localContext}</p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
              {`${city} Neighborhoods We Serve`}
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
              {`Bringing professional Christmas lighting to ${city} communities since ${data.established}`}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.neighborhoods.map((n) => (
              <Card key={n.name}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{n.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{n.description}</p>
                  <ul className="space-y-2 text-sm">
                    {n.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-balance">
                {`Why ${city} Chooses Lone Star Lighting`}
              </h2>
              <div className="space-y-6">
                {WHY_CHOOSE.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="text-muted-foreground">{body(city)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={data.secondaryImage || "/placeholder.svg"}
                alt={`${city} Christmas light installation`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
              {`${city} Christmas Lighting Packages`}
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              {`Professional installation packages designed for ${city} homes`}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.name} className={pkg.featured ? "border-primary" : ""}>
                <CardContent className="p-6">
                  {pkg.featured && (
                    <div className="text-center mb-2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{`${pkg.name} Package`}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{pkg.price}</p>
                  <ul className="space-y-2 text-sm mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href={pkg.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Proof */}
      <CityTestimonials city={city} />

      {/* FAQ */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
              {`${city} Christmas Lighting FAQ`}
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">{`Common questions from ${city} homeowners`}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {data.faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related service links for internal linking / local SEO */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-balance">
              {`Our Services in ${city}`}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { label: "Christmas Lighting", href: "/services/christmas-lighting" },
              { label: "Permanent Lighting", href: "/services/permanent-lighting" },
              { label: "Roofline Lighting", href: "/services/roofline-lighting" },
              { label: "Tree Wrapping", href: "/services/tree-wrapping" },
              { label: "Removal & Storage", href: "/services/removal-and-storage" },
              { label: "Maintenance Guarantee", href: "/services/maintenance-guarantee" },
              { label: "Landscape Lighting", href: "/services/landscape-lighting" },
              { label: "Commercial Lighting", href: "/commercial" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="font-medium">{s.label}</span>
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          {nearbyCities.length > 0 && (
            <div className="mt-12">
              <div className="flex flex-col items-center text-center mb-6">
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl text-balance">
                  {`Nearby Areas We Serve`}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {c.city}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
            {`Ready to Light Up ${city}?`}
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-[700px] mx-auto text-pretty">
            {`Join the ${city} families who trust Lone Star Lighting Displays for their holiday magic.`}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">{`Get Free ${city} Estimate`}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href={`tel:${BUSINESS_INFO.telephone}`}>{`Call ${BUSINESS_INFO.telephoneDisplay}`}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

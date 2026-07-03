import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { JsonLd } from "@/components/json-ld"
import { CityTestimonials } from "@/components/city-testimonials"
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/structured-data"
import { BUSINESS_INFO } from "@/lib/business-info"
import type { ServiceDetail } from "@/lib/service-details"

export function ServiceDetailTemplate({
  data,
  basePath = "/services",
  breadcrumbLabel = "Services",
}: {
  data: ServiceDetail
  basePath?: string
  breadcrumbLabel?: string
}) {
  const url = `${basePath}/${data.slug}`

  return (
    <main className="flex flex-col">
      <JsonLd
        id={`json-ld-service-${data.slug}`}
        data={[
          serviceSchema({
            name: data.name,
            description: data.metaDescription,
            serviceType: data.name,
            url,
            image: data.heroImage,
          }),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: breadcrumbLabel, url: basePath },
            { name: data.name, url },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage || "/placeholder.svg"}
            alt={`${data.name} in ${BUSINESS_INFO.address.addressLocality}, Texas`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Serving Austin & Central Texas
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {data.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href={`tel:${BUSINESS_INFO.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {BUSINESS_INFO.telephoneDisplay}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-balance">
                {`Professional ${data.name} in Central Texas`}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">{data.intro}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={data.secondaryImage || "/placeholder.svg"}
                alt={`${data.name} example`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/40 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance">Why Choose This Service</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance">How It Works</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <CityTestimonials city={BUSINESS_INFO.address.addressLocality} />

      {/* FAQs */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-balance">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance">{data.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed opacity-90">
            {data.ctaText}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">
                Book Your Free Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href={`tel:${BUSINESS_INFO.telephone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS_INFO.telephoneDisplay}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

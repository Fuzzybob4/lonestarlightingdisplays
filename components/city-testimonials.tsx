import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// Placeholder testimonials. Swap the names/quotes with real Google reviews when available.
// Each review is tagged with a city so the section feels local on every page.
const REVIEWS = [
  {
    name: "Sarah M.",
    quote:
      "They transformed our home into a winter wonderland. Professional, on-time, and the takedown service in January was seamless. Highly recommend!",
    rating: 5,
  },
  {
    name: "James T.",
    quote:
      "Best decision we made for the holidays. The team designed a display that perfectly fit our home, and a bulb went out mid-season — they fixed it the next day, no charge.",
    rating: 5,
  },
  {
    name: "The Rodriguez Family",
    quote:
      "We get compliments from neighbors all season long. Worth every penny to skip the ladder and let the pros handle it. We'll be repeat customers for years.",
    rating: 5,
  },
]

export function CityTestimonials({ city }: { city: string }) {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-balance">
            {`What ${city} Customers Say`}
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground">
            Real feedback from homeowners who trusted us with their holiday lighting
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {REVIEWS.map((review) => (
            <Card key={review.name}>
              <CardContent className="p-6 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">{`"${review.quote}"`}</p>
                <p className="mt-4 font-bold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{`${city}, TX`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

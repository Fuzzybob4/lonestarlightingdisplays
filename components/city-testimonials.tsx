import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { getReviews } from "@/lib/site-content/reviews"

// Reviews are managed from /admin → Reviews.
export async function CityTestimonials({ city, slug }: { city: string; slug?: string }) {
  let reviews = (await getReviews()).filter((review) => review.visible)
  // Filter to location-specific reviews, or reviews with no location restriction
  if (slug) {
    reviews = reviews.filter((review) => !review.citySlug || review.citySlug === slug)
  }
  if (reviews.length === 0) return null

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
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">{`"${review.quote}"`}</p>
                <p className="mt-4 font-bold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location || `${city}, TX`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

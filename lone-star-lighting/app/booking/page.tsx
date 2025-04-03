import BookingForm from "@/components/booking-form"
import { getCurrentSeason } from "@/lib/get-season"

export const metadata = {
  title: "Book Your Lighting Service | Lone Star Lighting Displays",
  description: "Request a free estimate for professional lighting installation. Book now for your home or business.",
}

export default function BookingPage() {
  const season = getCurrentSeason()

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {season === "holiday" ? "Book Your Holiday Lighting" : "Book Your Outdoor Lighting"}
        </h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
          {season === "holiday"
            ? "Fill out the form below to request a free estimate for your holiday lighting display."
            : "Fill out the form below to request a free estimate for your outdoor lighting project."}
        </p>
      </div>
      <div className="mx-auto max-w-2xl">
        <BookingForm />
      </div>
    </div>
  )
}


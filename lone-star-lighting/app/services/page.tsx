import { Suspense } from "react"
import { SeasonalServicesPage } from "@/components/seasonal-services-page"

export const metadata = {
  title: "Services | Lone Star Lighting Displays",
  description:
    "Professional lighting services for homes and businesses in Texas. From outdoor landscape lighting to holiday displays.",
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="container py-12">Loading services...</div>}>
      <SeasonalServicesPage />
    </Suspense>
  )
}


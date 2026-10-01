import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("cedar-park")!

export const metadata = cityMetadata(city)

export default function CedarParkServicePage() {
  return <CityPageTemplate data={city} />
}

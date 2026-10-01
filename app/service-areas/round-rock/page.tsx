import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("round-rock")!

export const metadata = cityMetadata(city)

export default function RoundRockServicePage() {
  return <CityPageTemplate data={city} />
}

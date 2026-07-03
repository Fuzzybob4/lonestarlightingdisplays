import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("kyle")!

export const metadata = cityMetadata(city)

export default function KyleServicePage() {
  return <CityPageTemplate data={city} />
}

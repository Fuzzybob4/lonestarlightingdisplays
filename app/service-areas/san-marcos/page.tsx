import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("san-marcos")!

export const metadata = cityMetadata(city)

export default function SanMarcosServicePage() {
  return <CityPageTemplate data={city} />
}

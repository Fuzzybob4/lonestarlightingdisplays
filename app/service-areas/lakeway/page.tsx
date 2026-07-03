import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("lakeway")!

export const metadata = cityMetadata(city)

export default function LakewayServicePage() {
  return <CityPageTemplate data={city} />
}

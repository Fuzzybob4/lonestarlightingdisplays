import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("bee-cave")!

export const metadata = cityMetadata(city)

export default function BeeCaveServicePage() {
  return <CityPageTemplate data={city} />
}

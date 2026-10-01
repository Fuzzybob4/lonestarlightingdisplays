import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("dripping-springs")!

export const metadata = cityMetadata(city)

export default function DrippingSpringsServicePage() {
  return <CityPageTemplate data={city} />
}

import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("austin")!

export const metadata = cityMetadata(city)

export default function AustinServicePage() {
  return <CityPageTemplate data={city} />
}

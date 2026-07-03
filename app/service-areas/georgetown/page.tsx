import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("georgetown")!

export const metadata = cityMetadata(city)

export default function GeorgetownServicePage() {
  return <CityPageTemplate data={city} />
}

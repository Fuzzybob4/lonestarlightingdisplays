import { CityPageTemplate } from "@/components/city-page-template"
import { getCityBySlug, cityMetadata } from "@/lib/cities"

const city = getCityBySlug("buda")!

export const metadata = cityMetadata(city)

export default function BudaServicePage() {
  return <CityPageTemplate data={city} />
}

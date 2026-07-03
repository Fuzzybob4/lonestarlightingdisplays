import { notFound } from "next/navigation"
import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { getCommercialBySlug, commercialMetadata } from "@/lib/commercial"

const SLUG = "shopping-centers"
const data = getCommercialBySlug(SLUG)

export const metadata = data ? commercialMetadata(data) : {}

export default function Page() {
  if (!data) notFound()
  return <ServiceDetailTemplate data={data} basePath="/commercial" breadcrumbLabel="Commercial" />
}

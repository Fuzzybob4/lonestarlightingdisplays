import { notFound } from "next/navigation"
import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { getServiceDetailBySlug, serviceDetailMetadata } from "@/lib/service-details"

const SLUG = "maintenance-guarantee"
const data = getServiceDetailBySlug(SLUG)

export const metadata = data ? serviceDetailMetadata(data) : {}

export default function Page() {
  if (!data) notFound()
  return <ServiceDetailTemplate data={data} />
}

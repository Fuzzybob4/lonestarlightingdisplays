import type { Metadata } from "next"
import { isAdmin } from "@/lib/admin-auth"
import { IMAGE_GROUPS } from "@/lib/site-images/slots"
import { readImageOverrides } from "@/lib/site-images/store"
import { AdminLoginForm } from "@/components/admin/login-form"
import { ImageManager } from "@/components/admin/image-manager"

export const metadata: Metadata = {
  title: "Site admin | Lone Star Lighting Displays",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  if (!isAdmin()) return <AdminLoginForm />

  const overrides = await readImageOverrides()
  return <ImageManager groups={IMAGE_GROUPS} initialOverrides={overrides} />
}

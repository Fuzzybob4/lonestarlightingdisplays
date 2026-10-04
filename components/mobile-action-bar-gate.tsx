"use client"

import { usePathname } from "next/navigation"
import { MobileActionBar } from "@/components/mobile-action-bar"

export function MobileActionBarGate() {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith("/admin")
  if (isAdmin) return null
  return <MobileActionBar />
}

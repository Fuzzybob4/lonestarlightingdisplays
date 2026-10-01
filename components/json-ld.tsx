"use client"

import { useEffect } from "react"

/**
 * Injects JSON-LD structured data into the document head via the DOM
 * after mount, avoiding any React script-tag rendering warnings in
 * both the v0 preview and production builds.
 */
export function JsonLd({
  data,
  id = "json-ld",
}: {
  data: Record<string, unknown> | Record<string, unknown>[]
  id?: string
}) {
  useEffect(() => {
    // Remove any existing script with this id to avoid duplicates on HMR
    const existing = document.getElementById(id)
    if (existing) existing.remove()

    const script = document.createElement("script")
    script.id = id
    script.type = "application/ld+json"
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      const el = document.getElementById(id)
      if (el) el.remove()
    }
  }, [data, id])

  return null
}

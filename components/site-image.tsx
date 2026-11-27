"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import Image, { type ImageProps } from "next/image"

const SiteImagesContext = createContext<Record<string, string>>({})

export function SiteImagesProvider({
  overrides,
  children,
}: {
  overrides: Record<string, string>
  children: ReactNode
}) {
  return <SiteImagesContext.Provider value={overrides}>{children}</SiteImagesContext.Provider>
}

export function SiteImage({ slot, src, alt, onError, ...props }: ImageProps & { slot: string }) {
  const overrides = useContext(SiteImagesContext)
  const override = overrides[slot]
  const [failedOverride, setFailedOverride] = useState<string | null>(null)
  const useOverride = Boolean(override) && failedOverride !== override

  return (
    <Image
      key={useOverride ? override : String(src)}
      src={useOverride ? override : src}
      alt={alt}
      onError={(event) => {
        // Uploaded images live in Blob storage; if that store is unreachable, fall back to the built-in photo.
        if (useOverride) setFailedOverride(override)
        onError?.(event)
      }}
      {...props}
    />
  )
}

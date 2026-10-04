"use client"

import { createContext, useContext, type ReactNode } from "react"
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

export function SiteImage({ slot, src, alt, ...props }: ImageProps & { slot: string }) {
  const overrides = useContext(SiteImagesContext)
  return <Image src={overrides[slot] ?? src} alt={alt} {...props} />
}

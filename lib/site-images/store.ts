import { del, list } from "@vercel/blob"
import { unstable_cache } from "next/cache"

export const SITE_IMAGES_PREFIX = "site-images/"
export const SITE_IMAGES_TAG = "site-images"

export type ImageOverrides = Record<string, string>

type StoredBlob = { url: string; pathname: string; uploadedAt: Date }

function slotFromPathname(pathname: string) {
  return pathname.startsWith(SITE_IMAGES_PREFIX) ? pathname.split("/")[1] : undefined
}

async function listSiteImageBlobs(prefix = SITE_IMAGES_PREFIX): Promise<StoredBlob[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return []
  const blobs: StoredBlob[] = []
  let cursor: string | undefined
  do {
    const page = await list({ prefix, cursor, limit: 1000 })
    blobs.push(...page.blobs)
    cursor = page.hasMore ? page.cursor : undefined
  } while (cursor)
  return blobs
}

export async function readImageOverrides(): Promise<ImageOverrides> {
  const latest: Record<string, StoredBlob> = {}
  for (const blob of await listSiteImageBlobs()) {
    const slot = slotFromPathname(blob.pathname)
    if (!slot) continue
    const current = latest[slot]
    if (!current || new Date(blob.uploadedAt) > new Date(current.uploadedAt)) latest[slot] = blob
  }
  return Object.fromEntries(Object.entries(latest).map(([slot, blob]) => [slot, blob.url]))
}

export const getImageOverrides = unstable_cache(
  async () => {
    try {
      return await readImageOverrides()
    } catch (error) {
      console.error("Failed to load site image overrides:", error)
      return {} as ImageOverrides
    }
  },
  ["site-image-overrides"],
  { tags: [SITE_IMAGES_TAG], revalidate: 3600 },
)

export async function deleteSlotImages(slot: string, keepUrl?: string) {
  const blobs = await listSiteImageBlobs(`${SITE_IMAGES_PREFIX}${slot}/`)
  const urls = blobs.map((blob) => blob.url).filter((url) => url !== keepUrl)
  if (urls.length > 0) await del(urls)
}

export function isSlotBlobUrl(url: string, slot: string) {
  try {
    const parsed = new URL(url)
    return (
      parsed.protocol === "https:" &&
      parsed.hostname.endsWith(".public.blob.vercel-storage.com") &&
      parsed.pathname.startsWith(`/${SITE_IMAGES_PREFIX}${slot}/`)
    )
  } catch {
    return false
  }
}

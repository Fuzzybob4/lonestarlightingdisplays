import { del, list, put } from "@vercel/blob"

const CONTENT_PREFIX = "site-content/"

type StoredBlob = { url: string; pathname: string; uploadedAt: Date }

async function listBlobs(prefix: string): Promise<StoredBlob[]> {
  const blobs: StoredBlob[] = []
  let cursor: string | undefined
  do {
    const page = await list({ prefix, cursor, limit: 1000 })
    blobs.push(...page.blobs)
    cursor = page.hasMore ? page.cursor : undefined
  } while (cursor)
  return blobs
}

function newestFirst(blobs: StoredBlob[]) {
  return [...blobs].sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
}

/** Returns `null` when nothing has been saved yet, so callers can fall back to seed content. */
export async function readContentDoc<T>(name: string): Promise<T | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null
  const [latest] = newestFirst(await listBlobs(`${CONTENT_PREFIX}${name}/`))
  if (!latest) return null
  const response = await fetch(latest.url, { cache: "no-store" })
  if (!response.ok) throw new Error(`Could not read ${name} (${response.status})`)
  return (await response.json()) as T
}

// Each save writes a fresh uniquely-named file so the CDN can never serve a stale copy, then removes older versions.
export async function writeContentDoc(name: string, data: unknown) {
  const saved = await put(`${CONTENT_PREFIX}${name}/data.json`, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: true,
    contentType: "application/json",
  })
  const stale = (await listBlobs(`${CONTENT_PREFIX}${name}/`)).map((blob) => blob.url).filter((url) => url !== saved.url)
  if (stale.length > 0) await del(stale)
}

export async function deleteUnreferencedBlobs(prefix: string, keepUrls: Set<string>) {
  const unused = (await listBlobs(prefix)).map((blob) => blob.url).filter((url) => !keepUrls.has(url))
  if (unused.length > 0) await del(unused)
}

export function isBlobUrlUnder(url: string, prefix: string) {
  try {
    const parsed = new URL(url)
    return (
      parsed.protocol === "https:" &&
      parsed.hostname.endsWith(".public.blob.vercel-storage.com") &&
      parsed.pathname.startsWith(`/${prefix}`)
    )
  } catch {
    return false
  }
}

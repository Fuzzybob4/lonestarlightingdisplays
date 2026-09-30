import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { NextResponse } from "next/server"
import { isAdmin } from "@/lib/admin-auth"
import { isValidSlot } from "@/lib/site-images/slots"
import { SITE_IMAGES_PREFIX } from "@/lib/site-images/store"

const MAX_UPLOAD_BYTES = 15 * 1024 * 1024

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody

  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!isAdmin()) throw new Error("Unauthorized")
        const slot = pathname.startsWith(SITE_IMAGES_PREFIX) ? pathname.split("/")[1] : undefined
        if (!isValidSlot(slot)) throw new Error("Unknown image slot")
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"],
          maximumSizeInBytes: MAX_UPLOAD_BYTES,
          addRandomSuffix: true,
        }
      },
    })
    return NextResponse.json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed"
    return NextResponse.json({ error: message }, { status: message === "Unauthorized" ? 401 : 400 })
  }
}

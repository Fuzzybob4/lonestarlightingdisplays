"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { endAdminSession, isAdmin, startAdminSession, verifyCredentials } from "@/lib/admin-auth"
import { isValidSlot } from "@/lib/site-images/slots"
import {
  SITE_IMAGES_TAG,
  deleteSlotImages,
  isSlotBlobUrl,
  readImageOverrides,
  type ImageOverrides,
} from "@/lib/site-images/store"

import { REVIEWS_DOC, REVIEWS_TAG, sanitizeReviews, type Review } from "@/lib/site-content/reviews"
import { BLOG_DOC, BLOG_IMAGES_PREFIX, BLOG_TAG, sanitizeBlogPosts, type BlogPost } from "@/lib/site-content/blog"
import { deleteUnreferencedBlobs, writeContentDoc } from "@/lib/site-content/store"

export type LoginState = { error?: string }

export type ContentSaveResult<T> = { ok: true; items: T[] } | { ok: false; error: string }

export async function saveReviews(input: Review[]): Promise<ContentSaveResult<Review>> {
  if (!isAdmin()) return { ok: false, error: "Your session expired. Please sign in again." }
  const reviews = sanitizeReviews(input)
  if (typeof reviews === "string") return { ok: false, error: reviews }

  try {
    await writeContentDoc(REVIEWS_DOC, reviews)
  } catch (error) {
    console.error("Failed to save reviews:", error)
    return { ok: false, error: "Something went wrong while saving. Please try again." }
  }

  revalidateTag(REVIEWS_TAG)
  revalidatePath("/", "layout")
  return { ok: true, items: reviews }
}

export async function saveBlogPosts(input: BlogPost[]): Promise<ContentSaveResult<BlogPost>> {
  if (!isAdmin()) return { ok: false, error: "Your session expired. Please sign in again." }
  const posts = sanitizeBlogPosts(input)
  if (typeof posts === "string") return { ok: false, error: posts }

  try {
    await writeContentDoc(BLOG_DOC, posts)
    await deleteUnreferencedBlobs(BLOG_IMAGES_PREFIX, new Set(posts.map((post) => post.image)))
  } catch (error) {
    console.error("Failed to save blog posts:", error)
    return { ok: false, error: "Something went wrong while saving. Please try again." }
  }

  revalidateTag(BLOG_TAG)
  revalidatePath("/", "layout")
  return { ok: true, items: posts }
}

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")
  if (!email || !password) return { error: "Enter your email and password." }

  if (!verifyCredentials(email, password)) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { error: "That email and password combination is not correct." }
  }

  startAdminSession()
  redirect("/admin")
}

export async function logout() {
  endAdminSession()
  redirect("/")
}

export type ImageChange = { slot: string; action: "replace"; url: string } | { slot: string; action: "delete" }

export type SaveResult = { ok: true; overrides: ImageOverrides } | { ok: false; error: string }

export async function saveImageChanges(changes: ImageChange[]): Promise<SaveResult> {
  if (!isAdmin()) return { ok: false, error: "Your session expired. Please sign in again." }
  if (!Array.isArray(changes) || changes.length === 0) return { ok: false, error: "There are no changes to save." }

  for (const change of changes) {
    if (!isValidSlot(change.slot)) return { ok: false, error: "One of the images is not recognized." }
    if (change.action === "replace" && !isSlotBlobUrl(change.url, change.slot)) {
      return { ok: false, error: "An uploaded image could not be verified." }
    }
  }

  try {
    await Promise.all(
      changes.map((change) =>
        change.action === "replace" ? deleteSlotImages(change.slot, change.url) : deleteSlotImages(change.slot),
      ),
    )
  } catch (error) {
    console.error("Failed to save image changes:", error)
    return { ok: false, error: "Something went wrong while saving. Please try again." }
  }

  revalidateTag(SITE_IMAGES_TAG)
  revalidatePath("/", "layout")

  return { ok: true, overrides: await readImageOverrides() }
}

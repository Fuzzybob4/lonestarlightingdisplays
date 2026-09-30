import { unstable_cache } from "next/cache"
import { readContentDoc } from "./store"

export const REVIEWS_DOC = "reviews"
export const REVIEWS_TAG = "site-reviews"

export type Review = {
  id: string
  name: string
  /** Shown under the name. Leave empty to show the page's city (e.g. "Kyle, TX"). */
  location: string
  quote: string
  rating: number
  visible: boolean
}

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: "seed-sarah",
    name: "Sarah M.",
    location: "",
    quote:
      "They transformed our home into a winter wonderland. Professional, on-time, and the takedown service in January was seamless. Highly recommend!",
    rating: 5,
    visible: true,
  },
  {
    id: "seed-james",
    name: "James T.",
    location: "",
    quote:
      "Best decision we made for the holidays. The team designed a display that perfectly fit our home, and a bulb went out mid-season — they fixed it the next day, no charge.",
    rating: 5,
    visible: true,
  },
  {
    id: "seed-rodriguez",
    name: "The Rodriguez Family",
    location: "",
    quote:
      "We get compliments from neighbors all season long. Worth every penny to skip the ladder and let the pros handle it. We'll be repeat customers for years.",
    rating: 5,
    visible: true,
  },
]

export const MAX_REVIEWS = 60

export function sanitizeReviews(input: unknown): Review[] | string {
  if (!Array.isArray(input)) return "Reviews could not be read."
  if (input.length > MAX_REVIEWS) return `You can keep up to ${MAX_REVIEWS} reviews.`
  const reviews: Review[] = []
  for (const raw of input) {
    const item = (raw ?? {}) as Record<string, unknown>
    const name = String(item.name ?? "").trim().slice(0, 80)
    const quote = String(item.quote ?? "").trim().slice(0, 1200)
    if (!name) return "Every review needs a customer name."
    if (!quote) return `The review from ${name} needs some review text.`
    const rating = Math.round(Number(item.rating))
    reviews.push({
      id: String(item.id ?? "").slice(0, 60) || crypto.randomUUID(),
      name,
      location: String(item.location ?? "").trim().slice(0, 80),
      quote,
      rating: rating >= 1 && rating <= 5 ? rating : 5,
      visible: item.visible !== false,
    })
  }
  return reviews
}

export async function readReviews(): Promise<Review[]> {
  return (await readContentDoc<Review[]>(REVIEWS_DOC)) ?? DEFAULT_REVIEWS
}

export const getReviews = unstable_cache(
  async () => {
    try {
      return await readReviews()
    } catch (error) {
      console.error("Failed to load reviews:", error)
      return DEFAULT_REVIEWS
    }
  },
  ["site-reviews"],
  { tags: [REVIEWS_TAG], revalidate: 3600 },
)

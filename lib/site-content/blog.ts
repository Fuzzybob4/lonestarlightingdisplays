import { unstable_cache } from "next/cache"
import { isBlobUrlUnder, readContentDoc } from "./store"

export const BLOG_DOC = "blog"
export const BLOG_TAG = "site-blog"
export const BLOG_IMAGES_PREFIX = "blog-images/"
export const DEFAULT_BLOG_IMAGE = "/images/christmas-lighting.jpeg"

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  /** Plain text. Blank lines start a new paragraph, "## " starts a heading, "- " starts a bullet. */
  body: string
  image: string
  /** yyyy-mm-dd */
  date: string
  published: boolean
}

export const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    id: "seed-best-time-to-book",
    slug: "best-time-to-book",
    title: "Best Time to Book Christmas Light Installation in Texas",
    excerpt:
      "Learn why early booking is crucial for securing the best installation dates and maximizing your holiday display time.",
    date: "2023-09-15",
    image: "/images/christmas-lighting.jpeg",
    published: true,
    body: `Every fall, our install calendar fills up faster than most homeowners expect. If you want your lights up for Thanksgiving weekend, the best time to book is September through mid-October.

## Why early booking matters
Installation crews can only light so many homes per day. Booking early gives you your choice of install dates and more time to enjoy your display.

- First pick of installation dates
- More time to plan your design
- A longer season to enjoy your lights

## What if I book late?
We do our best to fit in late requests, but December dates are limited. Reach out as soon as you can and we will find the earliest opening.`,
  },
  {
    id: "seed-diy-vs-professional",
    slug: "diy-vs-professional",
    title: "DIY vs. Professional Holiday Lighting – What's Best?",
    excerpt:
      "Compare the pros and cons of DIY holiday lighting versus hiring professionals for your Christmas display.",
    date: "2023-10-03",
    image: "/images/basic-package.png",
    published: true,
    body: `Hanging your own lights can be a fun tradition, but it also means ladders, tangled strands, and a weekend on the roof.

## Doing it yourself
DIY works well for small displays. You control the timing, but you also buy, store, and replace everything yourself.

## Hiring a professional
A professional crew designs the display, installs it safely, fixes any issues during the season, and takes it all down in January.

- No ladders or roof work for you
- Commercial-grade lights and clips
- Service calls during the season
- Takedown and storage included`,
  },
  {
    id: "seed-energy-efficient-lighting",
    slug: "energy-efficient-lighting",
    title: "Energy-Efficient Holiday Lighting: Save Money While Celebrating",
    excerpt:
      "Discover how modern LED technology can create stunning displays while keeping your electricity bills manageable.",
    date: "2023-10-18",
    image: "/images/advanced-package.png",
    published: true,
    body: `Modern LED lights use a fraction of the power of old incandescent strands while looking brighter and lasting longer.

## Why LEDs
LEDs run cooler, last for many seasons, and keep your electric bill manageable even with a large display.

## Use timers
Putting your display on a timer means the lights are on when neighbors are out and off when everyone is asleep.`,
  },
  {
    id: "seed-holiday-lighting-trends",
    slug: "holiday-lighting-trends",
    title: "Holiday Lighting Trends for 2023",
    excerpt: "Stay ahead of the curve with this year's most popular holiday lighting styles, colors, and techniques.",
    date: "2023-11-01",
    image: "/images/premium-estate-hero.png",
    published: true,
    body: `Every season brings new ideas for holiday displays. Here are a few styles we see homeowners asking for.

- Classic warm white rooflines
- Wrapped trees and shrubs
- Oversized wreaths and garland on entryways
- Coordinated color themes

Not sure what fits your home? We are happy to put together a design for you.`,
  },
  {
    id: "seed-prepare-for-installation",
    slug: "prepare-for-installation",
    title: "How to Prepare Your Home for Professional Light Installation",
    excerpt: "Simple steps to take before your installation appointment to ensure a smooth and efficient process.",
    date: "2023-11-12",
    image: "/images/christmas-lighting.jpeg",
    published: true,
    body: `A little preparation helps install day go quickly and smoothly.

- Make sure outdoor outlets work
- Move vehicles away from the driveway and rooflines
- Keep pets inside during the install
- Let us know about any gate codes or access notes

That is it. Our crew handles the rest.`,
  },
  {
    id: "seed-commercial-holiday-lighting",
    slug: "commercial-holiday-lighting",
    title: "Commercial Holiday Lighting: Boosting Business During the Season",
    excerpt: "Learn how professional holiday lighting can attract customers and create a festive shopping experience.",
    date: "2023-11-25",
    image: "/images/landscape-lighting.png",
    published: true,
    body: `A well-lit storefront or property entrance draws attention during the busiest shopping season of the year.

## Why businesses invest in lighting
Holiday lighting makes your property stand out, welcomes customers, and shows your business cares about the community.

## Built around your schedule
We plan installation and takedown around your business hours so there is minimal disruption.`,
  },
]

export const MAX_BLOG_POSTS = 200

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
}

export function isAllowedBlogImage(src: string) {
  return /^\/images\/[\w./-]+$/.test(src) || isBlobUrlUnder(src, BLOG_IMAGES_PREFIX)
}

export function sanitizeBlogPosts(input: unknown): BlogPost[] | string {
  if (!Array.isArray(input)) return "Blog posts could not be read."
  if (input.length > MAX_BLOG_POSTS) return `You can keep up to ${MAX_BLOG_POSTS} posts.`
  const slugs = new Set<string>()
  const posts: BlogPost[] = []
  for (const raw of input) {
    const item = (raw ?? {}) as Record<string, unknown>
    const title = String(item.title ?? "").trim().slice(0, 160)
    if (!title) return "Every post needs a title."
    const slug = slugify(String(item.slug ?? "") || title)
    if (!slug) return `"${title}" needs a web address.`
    if (slugs.has(slug)) return `Two posts use the web address "/blog/${slug}". Please change one.`
    slugs.add(slug)
    const date = String(item.date ?? "")
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) return `"${title}" needs a valid date.`
    const image = String(item.image ?? "").trim() || DEFAULT_BLOG_IMAGE
    if (!isAllowedBlogImage(image)) return `The image for "${title}" could not be verified.`
    posts.push({
      id: String(item.id ?? "").slice(0, 60) || crypto.randomUUID(),
      slug,
      title,
      excerpt: String(item.excerpt ?? "").trim().slice(0, 400),
      body: String(item.body ?? "").slice(0, 50_000),
      image,
      date,
      published: item.published !== false,
    })
  }
  return posts
}

export function readingTime(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

export function formatPostDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

export function publishedPosts(posts: BlogPost[]) {
  return posts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date))
}

export async function readBlogPosts(): Promise<BlogPost[]> {
  return (await readContentDoc<BlogPost[]>(BLOG_DOC)) ?? DEFAULT_BLOG_POSTS
}

export const getBlogPosts = unstable_cache(
  async () => {
    try {
      return await readBlogPosts()
    } catch (error) {
      console.error("Failed to load blog posts:", error)
      return DEFAULT_BLOG_POSTS
    }
  },
  ["site-blog-posts"],
  { tags: [BLOG_TAG], revalidate: 3600 },
)

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogBody } from "@/components/blog-body"
import { formatPostDate, getBlogPosts, readingTime } from "@/lib/site-content/blog"

type Props = { params: { slug: string } }

async function findPost(slug: string) {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug && post.published)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await findPost(params.slug)
  if (!post) return { title: "Article not found | Lone Star Lighting Displays" }
  return {
    title: `${post.title} | Lone Star Lighting Displays`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", images: [post.image] },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await findPost(params.slug)
  if (!post) notFound()

  return (
    <article className="container max-w-3xl py-12 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All articles
      </Link>

      <header className="mt-6">
        <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl">{post.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" aria-hidden="true" />
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {readingTime(post.body)}
          </span>
        </div>
      </header>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-muted">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
      </div>

      <BlogBody body={post.body} />

      <div className="mt-12 flex flex-col items-start gap-4 rounded-lg border p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-pretty">Ready to light up your home this season?</p>
        <Button asChild>
          <Link href="/booking">Get a free quote</Link>
        </Button>
      </div>
    </article>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"
import { formatPostDate, getBlogPosts, publishedPosts, readingTime } from "@/lib/site-content/blog"

export const metadata = {
  title: "Blog | Lone Star Lighting Displays",
  description:
    "Tips, ideas, and inspiration for holiday lighting and decorations from the experts at Lone Star Lighting Displays.",
  alternates: { canonical: "/blog" },
}

export default async function BlogPage() {
  const posts = publishedPosts(await getBlogPosts())

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
          Tips, ideas, and inspiration for holiday lighting and decorations
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">New articles are coming soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>{readingTime(post.body)}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2 text-balance">{post.title}</h2>
                <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

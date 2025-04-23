import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Lone Star Lighting Displays",
  description:
    "Tips, ideas, and inspiration for holiday lighting and decorations from the experts at Lone Star Lighting Displays.",
}

const blogPosts = [
  {
    id: 1,
    title: "Best Time to Book Christmas Light Installation in Texas",
    excerpt:
      "Learn why early booking is crucial for securing the best installation dates and maximizing your holiday display time.",
    date: "September 15, 2023",
    readTime: "5 min read",
    slug: "best-time-to-book",
    image: "/images/holiday-lights.png",
  },
  {
    id: 2,
    title: "DIY vs. Professional Holiday Lighting – What's Best?",
    excerpt:
      "Compare the pros and cons of DIY holiday lighting versus hiring professionals for your Christmas display.",
    date: "October 3, 2023",
    readTime: "7 min read",
    slug: "diy-vs-professional",
    image: "/images/holiday-basic.png",
  },
  {
    id: 3,
    title: "Energy-Efficient Holiday Lighting: Save Money While Celebrating",
    excerpt:
      "Discover how modern LED technology can create stunning displays while keeping your electricity bills manageable.",
    date: "October 18, 2023",
    readTime: "6 min read",
    slug: "energy-efficient-lighting",
    image: "/images/holiday-advanced.png",
  },
  {
    id: 4,
    title: "Holiday Lighting Trends for 2023",
    excerpt: "Stay ahead of the curve with this year's most popular holiday lighting styles, colors, and techniques.",
    date: "November 1, 2023",
    readTime: "8 min read",
    slug: "holiday-lighting-trends",
    image: "/images/holiday-premium.png",
  },
  {
    id: 5,
    title: "How to Prepare Your Home for Professional Light Installation",
    excerpt: "Simple steps to take before your installation appointment to ensure a smooth and efficient process.",
    date: "November 12, 2023",
    readTime: "4 min read",
    slug: "prepare-for-installation",
    image: "/images/holiday-lights.png",
  },
  {
    id: 6,
    title: "Commercial Holiday Lighting: Boosting Business During the Season",
    excerpt: "Learn how professional holiday lighting can attract customers and create a festive shopping experience.",
    date: "November 25, 2023",
    readTime: "9 min read",
    slug: "commercial-holiday-lighting",
    image: "/images/landscape-lighting.png",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
          Tips, ideas, and inspiration for holiday lighting and decorations
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}

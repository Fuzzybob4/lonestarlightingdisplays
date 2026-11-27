import type { Metadata } from "next"
import { isAdmin } from "@/lib/admin-auth"
import { IMAGE_GROUPS } from "@/lib/site-images/slots"
import { readImageOverrides } from "@/lib/site-images/store"
import { readReviews } from "@/lib/site-content/reviews"
import { readBlogPosts } from "@/lib/site-content/blog"
import { AdminLoginForm } from "@/components/admin/login-form"
import { AdminShell } from "@/components/admin/admin-shell"
import { ImageManager } from "@/components/admin/image-manager"
import { ReviewsManager } from "@/components/admin/reviews-manager"
import { BlogManager } from "@/components/admin/blog-manager"

export const metadata: Metadata = {
  title: "Site admin | Lone Star Lighting Displays",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  if (!isAdmin()) return <AdminLoginForm />

  const [overrides, reviews, posts] = await Promise.all([readImageOverrides(), readReviews(), readBlogPosts()])

  return (
    <AdminShell
      tabs={[
        {
          id: "images",
          label: "Website images",
          description:
            "Pick a page, replace or delete any image, then press Save. Deleting a custom image restores the original photo.",
          content: <ImageManager groups={IMAGE_GROUPS} initialOverrides={overrides} />,
        },
        {
          id: "reviews",
          label: "Reviews",
          description:
            "Add, edit, reorder, hide, or delete the customer reviews shown on the city and service pages, then press Save.",
          content: <ReviewsManager initialReviews={reviews} />,
        },
        {
          id: "blog",
          label: "Blog",
          description: "Write new articles, edit or unpublish existing ones, and change cover images, then press Save.",
          content: <BlogManager initialPosts={posts} />,
        },
      ]}
    />
  )
}

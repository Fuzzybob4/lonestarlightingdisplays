"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { upload } from "@vercel/blob/client"
import { ExternalLink, ImagePlus, Plus, RotateCcw, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SaveBar, type SaveStatus } from "@/components/admin/save-bar"
import { saveBlogPosts } from "@/app/admin/actions"
import { BLOG_IMAGES_PREFIX, DEFAULT_BLOG_IMAGE, formatPostDate, slugify, type BlogPost } from "@/lib/site-content/blog"

type PendingImage = { file: File; preview: string }

const MAX_BYTES = 15 * 1024 * 1024

function today() {
  return new Date().toISOString().slice(0, 10)
}

function safeFileName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-+|-+$/g, "") || "image"
}

export function BlogManager({ initialPosts }: { initialPosts: BlogPost[] }) {
  const router = useRouter()
  const [saved, setSaved] = useState(initialPosts)
  const [posts, setPosts] = useState(initialPosts)
  const [images, setImages] = useState<Record<string, PendingImage>>({})
  const [activeId, setActiveId] = useState(initialPosts[0]?.id)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<SaveStatus>(null)
  const imagesRef = useRef(images)
  imagesRef.current = images

  useEffect(
    () => () => {
      for (const image of Object.values(imagesRef.current)) URL.revokeObjectURL(image.preview)
    },
    [],
  )

  const dirty = Object.keys(images).length > 0 || JSON.stringify(posts) !== JSON.stringify(saved)
  const active = posts.find((post) => post.id === activeId)
  const savedIds = new Set(saved.map((post) => post.id))

  function update(id: string, patch: Partial<BlogPost>) {
    setStatus(null)
    setPosts((current) => current.map((post) => (post.id === id ? { ...post, ...patch } : post)))
  }

  function clearImage(id: string) {
    setImages((current) => {
      if (!current[id]) return current
      URL.revokeObjectURL(current[id].preview)
      const { [id]: _removed, ...rest } = current
      return rest
    })
  }

  function stageImage(id: string, file: File | undefined) {
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setStatus({ kind: "error", message: "Please choose an image file (JPG, PNG, WebP, or AVIF)." })
      return
    }
    if (file.size > MAX_BYTES) {
      setStatus({ kind: "error", message: "That image is larger than 15 MB. Please choose a smaller file." })
      return
    }
    clearImage(id)
    setStatus(null)
    setImages((current) => ({ ...current, [id]: { file, preview: URL.createObjectURL(file) } }))
  }

  function addPost() {
    const id = crypto.randomUUID()
    setStatus(null)
    setPosts((current) => [
      { id, slug: "", title: "", excerpt: "", body: "", image: DEFAULT_BLOG_IMAGE, date: today(), published: true },
      ...current,
    ])
    setActiveId(id)
  }

  function removePost(post: BlogPost) {
    if (!window.confirm(`Delete "${post.title || "this post"}"? It will be removed from the site when you save.`)) return
    clearImage(post.id)
    setStatus(null)
    const remaining = posts.filter((item) => item.id !== post.id)
    setPosts(remaining)
    setActiveId(remaining[0]?.id)
  }

  function discard() {
    for (const image of Object.values(images)) URL.revokeObjectURL(image.preview)
    setImages({})
    setPosts(saved)
    setStatus(null)
    if (!saved.some((post) => post.id === activeId)) setActiveId(saved[0]?.id)
  }

  async function handleSave() {
    if (!dirty || saving) return
    setSaving(true)
    setStatus(null)
    try {
      const withImages = await Promise.all(
        posts.map(async (post) => {
          const pending = images[post.id]
          if (!pending) return { ...post, slug: post.slug || slugify(post.title) }
          const blob = await upload(`${BLOG_IMAGES_PREFIX}${safeFileName(pending.file.name)}`, pending.file, {
            access: "public",
            handleUploadUrl: "/api/admin/upload",
            contentType: pending.file.type,
          })
          return { ...post, slug: post.slug || slugify(post.title), image: blob.url }
        }),
      )

      const result = await saveBlogPosts(withImages)
      if ("error" in result) {
        setPosts(withImages)
        for (const image of Object.values(images)) URL.revokeObjectURL(image.preview)
        setImages({})
        setStatus({ kind: "error", message: result.error })
        return
      }
      for (const image of Object.values(images)) URL.revokeObjectURL(image.preview)
      setImages({})
      setSaved(result.items)
      setPosts(result.items)
      setStatus({ kind: "success", message: "Blog saved. Your changes are now live on the site." })
      router.refresh()
    } catch (error) {
      console.error("Blog save failed:", error)
      setStatus({ kind: "error", message: "The save did not finish. Check your connection and try again." })
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="pb-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:flex-row lg:items-start">
        <nav aria-label="Blog posts" className="flex flex-col gap-3 lg:sticky lg:top-24 lg:w-80 lg:shrink-0">
          <Button type="button" onClick={addPost} className="min-h-11 bg-ink text-ink-foreground hover:bg-ink/90">
            <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" /> New post
          </Button>
          <ul className="flex max-h-[calc(100vh-12rem)] flex-col overflow-y-auto border bg-background">
            {posts.length === 0 ? (
              <li className="p-4 text-sm text-muted-foreground">No posts yet.</li>
            ) : (
              posts.map((post) => {
                const isActive = post.id === active?.id
                return (
                  <li key={post.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(post.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex w-full flex-col gap-1 border-b px-4 py-3 text-left text-sm transition-colors ${
                        isActive ? "bg-ink text-ink-foreground" : "text-foreground hover:bg-surface"
                      }`}
                    >
                      <span className="font-semibold text-pretty">{post.title || "Untitled post"}</span>
                      <span className={`text-xs ${isActive ? "text-ink-foreground/60" : "text-muted-foreground"}`}>
                        {post.published ? formatPostDate(post.date) : "Draft — hidden from site"}
                      </span>
                    </button>
                  </li>
                )
              })
            )}
          </ul>
        </nav>

        {active ? (
          <PostEditor
            key={active.id}
            post={active}
            isSaved={savedIds.has(active.id)}
            pendingImage={images[active.id]}
            disabled={saving}
            onChange={(patch) => update(active.id, patch)}
            onImage={(file) => stageImage(active.id, file)}
            onUndoImage={() => clearImage(active.id)}
            onDelete={() => removePost(active)}
          />
        ) : (
          <div className="min-w-0 flex-1 border bg-background p-10 text-center text-muted-foreground">
            {'Press "New post" to write your first article.'}
          </div>
        )}
      </div>

      <SaveBar
        status={status}
        dirty={dirty}
        idleMessage={dirty ? "You have unsaved blog changes." : "No unsaved changes."}
        saving={saving}
        onDiscard={discard}
        onSave={handleSave}
      />
    </section>
  )
}

function PostEditor({
  post,
  isSaved,
  pendingImage,
  disabled,
  onChange,
  onImage,
  onUndoImage,
  onDelete,
}: {
  post: BlogPost
  isSaved: boolean
  pendingImage?: PendingImage
  disabled: boolean
  onChange: (patch: Partial<BlogPost>) => void
  onImage: (file: File | undefined) => void
  onUndoImage: () => void
  onDelete: () => void
}) {
  const [slugEdited, setSlugEdited] = useState(Boolean(post.slug))
  const slug = post.slug || slugify(post.title)

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6 border bg-background p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={post.published}
            onChange={(event) => onChange({ published: event.target.checked })}
            className="h-4 w-4 accent-primary"
          />
          Published (visible on the blog)
        </label>
        <div className="flex gap-2">
          {isSaved && post.published ? (
            <Button asChild variant="outline" size="sm" className="min-h-10">
              <Link href={`/blog/${post.slug}`} target="_blank">
                View post <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
          ) : null}
          <Button type="button" variant="outline" size="sm" className="min-h-10" onClick={onDelete} disabled={disabled}>
            <Trash2 className="mr-1.5 h-4 w-4" aria-hidden="true" /> Delete post
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="post-title">Title</Label>
        <Input
          id="post-title"
          value={post.title}
          placeholder="e.g. 5 Tips for a Brighter Holiday Display"
          onChange={(event) =>
            onChange(slugEdited ? { title: event.target.value } : { title: event.target.value, slug: slugify(event.target.value) })
          }
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="post-slug">Web address</Label>
          <div className="flex items-center border bg-background focus-within:ring-2 focus-within:ring-ring">
            <span className="pl-3 text-sm text-muted-foreground">/blog/</span>
            <input
              id="post-slug"
              value={post.slug}
              placeholder={slug || "my-post"}
              onChange={(event) => {
                setSlugEdited(true)
                onChange({ slug: event.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })
              }}
              onBlur={() => onChange({ slug: slugify(post.slug) })}
              className="h-10 min-w-0 flex-1 bg-transparent pr-3 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="post-date">Date</Label>
          <Input id="post-date" type="date" value={post.date} onChange={(event) => onChange({ date: event.target.value })} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="post-excerpt">Short summary</Label>
        <Textarea
          id="post-excerpt"
          rows={2}
          value={post.excerpt}
          placeholder="One or two sentences shown on the blog list."
          onChange={(event) => onChange({ excerpt: event.target.value })}
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium">Cover image</span>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted sm:w-64">
            {/* eslint-disable-next-line @next/next/no-img-element -- previews include local object URLs */}
            <img src={pendingImage?.preview ?? post.image} alt="Cover image preview" className="h-full w-full object-cover" />
            {pendingImage ? (
              <span className="absolute left-2 top-2 bg-gold px-2 py-1 text-xs font-semibold text-ink">
                New image — not saved
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              id={`cover-${post.id}`}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
              className="sr-only"
              disabled={disabled}
              onChange={(event) => {
                onImage(event.target.files?.[0])
                event.target.value = ""
              }}
            />
            <Button asChild size="sm" className="min-h-10 bg-ink text-ink-foreground hover:bg-ink/90">
              <label htmlFor={`cover-${post.id}`} className="cursor-pointer">
                <ImagePlus className="mr-1.5 h-4 w-4" aria-hidden="true" /> Replace image
              </label>
            </Button>
            {pendingImage ? (
              <Button type="button" size="sm" variant="outline" className="min-h-10" onClick={onUndoImage}>
                <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden="true" /> Undo
              </Button>
            ) : post.image !== DEFAULT_BLOG_IMAGE ? (
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="min-h-10"
                onClick={() => onChange({ image: DEFAULT_BLOG_IMAGE })}
              >
                <Trash2 className="mr-1.5 h-4 w-4" aria-hidden="true" /> Remove image
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="post-body">Article</Label>
        <p id="post-body-help" className="text-sm text-muted-foreground">
          {'Leave a blank line between paragraphs. Start a line with "## " for a heading or "- " for a bullet point.'}
        </p>
        <Textarea
          id="post-body"
          aria-describedby="post-body-help"
          rows={18}
          value={post.body}
          onChange={(event) => onChange({ body: event.target.value })}
          className="font-mono text-sm leading-relaxed"
        />
      </div>
    </div>
  )
}

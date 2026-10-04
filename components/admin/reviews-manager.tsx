"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowDown, ArrowUp, Plus, Star, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SaveBar, type SaveStatus } from "@/components/admin/save-bar"
import { saveReviews } from "@/app/admin/actions"
import type { Review } from "@/lib/site-content/reviews"
import { CITIES } from "@/lib/cities"

export function ReviewsManager({ initialReviews }: { initialReviews: Review[] }) {
  const router = useRouter()
  const [saved, setSaved] = useState(initialReviews)
  const [reviews, setReviews] = useState(initialReviews)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<SaveStatus>(null)

  const dirty = JSON.stringify(reviews) !== JSON.stringify(saved)

  function update(id: string, patch: Partial<Review>) {
    setStatus(null)
    setReviews((current) => current.map((review) => (review.id === id ? { ...review, ...patch } : review)))
  }

  function addReview() {
    setStatus(null)
    setReviews((current) => [
      { id: crypto.randomUUID(), name: "", location: "", quote: "", rating: 5, citySlug: "", visible: true },
      ...current,
    ])
  }

  function removeReview(id: string, name: string) {
    if (!window.confirm(`Delete the review from ${name || "this customer"}? It will be removed when you save.`)) return
    setStatus(null)
    setReviews((current) => current.filter((review) => review.id !== id))
  }

  function move(index: number, direction: -1 | 1) {
    setStatus(null)
    setReviews((current) => {
      const next = [...current]
      const target = index + direction
      if (target < 0 || target >= next.length) return current
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
  }

  async function handleSave() {
    if (!dirty || saving) return
    setSaving(true)
    setStatus(null)
    try {
      const result = await saveReviews(reviews)
      if ("error" in result) {
        setStatus({ kind: "error", message: result.error })
        return
      }
      setSaved(result.items)
      setReviews(result.items)
      setStatus({ kind: "success", message: "Reviews saved. They are now live across the site." })
      router.refresh()
    } catch (error) {
      console.error("Review save failed:", error)
      setStatus({ kind: "error", message: "The save did not finish. Check your connection and try again." })
    } finally {
      setSaving(false)
    }
  }

  const visibleCount = reviews.filter((review) => review.visible).length

  return (
    <section className="pb-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 py-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {`${reviews.length} ${reviews.length === 1 ? "review" : "reviews"} · ${visibleCount} shown on the city and service pages`}
          </p>
          <Button type="button" onClick={addReview} className="min-h-11 bg-ink text-ink-foreground hover:bg-ink/90">
            <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" /> Add review
          </Button>
        </div>

        {reviews.length === 0 ? (
          <div className="border bg-background p-10 text-center text-muted-foreground">
            No reviews yet. The reviews section is hidden on the site until you add one.
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {reviews.map((review, index) => (
              <li key={review.id} className={`border bg-background p-5 ${review.visible ? "" : "opacity-70"}`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={`name-${review.id}`}>Customer name</Label>
                    <Input
                      id={`name-${review.id}`}
                      value={review.name}
                      placeholder="e.g. Sarah M."
                      onChange={(event) => update(review.id, { name: event.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={`citySlug-${review.id}`}>Show on city (optional)</Label>
                    <select
                      id={`citySlug-${review.id}`}
                      value={review.citySlug}
                      onChange={(event) => update(review.id, { citySlug: event.target.value })}
                      className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">All cities (homepage only)</option>
                      {CITIES.map((city) => (
                        <option key={city.slug} value={city.slug}>
                          {city.city}, TX
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={`location-${review.id}`}>Display name (optional)</Label>
                    <Input
                      id={`location-${review.id}`}
                      value={review.location}
                      placeholder="e.g. Buda, TX (shown under customer name)"
                      onChange={(event) => update(review.id, { location: event.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <Label htmlFor={`quote-${review.id}`}>Review</Label>
                    <Textarea
                      id={`quote-${review.id}`}
                      value={review.quote}
                      rows={3}
                      className="leading-relaxed"
                      onChange={(event) => update(review.id, { quote: event.target.value })}
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-5">
                    <fieldset className="flex items-center gap-1">
                      <legend className="sr-only">Star rating</legend>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
                          aria-pressed={review.rating === value}
                          onClick={() => update(review.id, { rating: value })}
                          className="p-1"
                        >
                          <Star
                            className={`h-5 w-5 ${value <= review.rating ? "fill-current text-gold" : "text-muted-foreground"}`}
                            aria-hidden="true"
                          />
                        </button>
                      ))}
                    </fieldset>
                    <label className="flex items-center gap-2 text-sm font-medium">
                      <input
                        type="checkbox"
                        checked={review.visible}
                        onChange={(event) => update(review.id, { visible: event.target.checked })}
                        className="h-4 w-4 accent-primary"
                      />
                      Show on site
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      onClick={() => move(index, -1)}
                      disabled={index === 0}
                      aria-label="Move up"
                    >
                      <ArrowUp className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      onClick={() => move(index, 1)}
                      disabled={index === reviews.length - 1}
                      aria-label="Move down"
                    >
                      <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button type="button" variant="outline" onClick={() => removeReview(review.id, review.name)}>
                      <Trash2 className="mr-1.5 h-4 w-4" aria-hidden="true" /> Delete
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <SaveBar
        status={status}
        dirty={dirty}
        idleMessage={dirty ? "You have unsaved review changes." : "No unsaved changes."}
        saving={saving}
        onDiscard={() => {
          setReviews(saved)
          setStatus(null)
        }}
        onSave={handleSave}
      />
    </section>
  )
}

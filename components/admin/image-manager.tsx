"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { upload } from "@vercel/blob/client"
import { CheckCircle2, ExternalLink, ImagePlus, LogOut, RotateCcw, Trash2, TriangleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout, saveImageChanges, type ImageChange } from "@/app/admin/actions"
import type { ImagePageGroup, ImageSlot } from "@/lib/site-images/slots"

type Pending = { type: "replace"; file: File; preview: string } | { type: "delete" }
type Status = { kind: "success" | "error"; message: string } | null

const MAX_BYTES = 15 * 1024 * 1024

function safeFileName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-+|-+$/g, "") || "image"
}

export function ImageManager({
  groups,
  initialOverrides,
}: {
  groups: ImagePageGroup[]
  initialOverrides: Record<string, string>
}) {
  const router = useRouter()
  const [overrides, setOverrides] = useState(initialOverrides)
  const [pending, setPending] = useState<Record<string, Pending>>({})
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<Status>(null)
  const pendingRef = useRef(pending)
  pendingRef.current = pending

  useEffect(
    () => () => {
      for (const change of Object.values(pendingRef.current)) {
        if (change.type === "replace") URL.revokeObjectURL(change.preview)
      }
    },
    [],
  )

  const activeGroup = groups.find((group) => group.id === activeGroupId) ?? groups[0]
  const pendingCount = Object.keys(pending).length

  const pendingByGroup = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const group of groups) counts[group.id] = group.slots.filter((slot) => pending[slot.id]).length
    return counts
  }, [groups, pending])

  function clearPending(slotId: string) {
    setPending((current) => {
      const existing = current[slotId]
      if (existing?.type === "replace") URL.revokeObjectURL(existing.preview)
      const { [slotId]: _removed, ...rest } = current
      return rest
    })
  }

  function stageReplace(slotId: string, file: File | undefined) {
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setStatus({ kind: "error", message: "Please choose an image file (JPG, PNG, WebP, or AVIF)." })
      return
    }
    if (file.size > MAX_BYTES) {
      setStatus({ kind: "error", message: "That image is larger than 15 MB. Please choose a smaller file." })
      return
    }
    clearPending(slotId)
    setStatus(null)
    setPending((current) => ({ ...current, [slotId]: { type: "replace", file, preview: URL.createObjectURL(file) } }))
  }

  function stageDelete(slotId: string) {
    clearPending(slotId)
    setStatus(null)
    if (overrides[slotId]) setPending((current) => ({ ...current, [slotId]: { type: "delete" } }))
  }

  function discardAll() {
    for (const change of Object.values(pending)) {
      if (change.type === "replace") URL.revokeObjectURL(change.preview)
    }
    setPending({})
    setStatus(null)
  }

  async function handleSave() {
    if (pendingCount === 0 || saving) return
    setSaving(true)
    setStatus(null)
    try {
      const changes: ImageChange[] = []
      for (const [slot, change] of Object.entries(pending)) {
        if (change.type === "replace") {
          const blob = await upload(`site-images/${slot}/${safeFileName(change.file.name)}`, change.file, {
            access: "public",
            handleUploadUrl: "/api/admin/upload",
            contentType: change.file.type,
          })
          changes.push({ slot, action: "replace", url: blob.url })
        } else {
          changes.push({ slot, action: "delete" })
        }
      }

      const result = await saveImageChanges(changes)
      if ("error" in result) {
        setStatus({ kind: "error", message: result.error })
        return
      }

      setOverrides(result.overrides)
      discardAll()
      setStatus({
        kind: "success",
        message: `Saved ${changes.length} ${changes.length === 1 ? "change" : "changes"}. Your images are now live across the site.`,
      })
      router.refresh()
    } catch (error) {
      console.error("Image save failed:", error)
      setStatus({ kind: "error", message: "The upload did not finish. Check your connection and try again." })
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="bg-surface pb-32">
      <div className="border-b bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="eyebrow text-gold">Site admin</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Website images</h1>
            <p className="mt-2 max-w-xl text-pretty leading-7 text-ink-foreground/70">
              Pick a page, replace or delete any image, then press Save. Deleting a custom image restores the
              original photo.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => logout()}
            className="min-h-11 border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10"
          >
            <LogOut className="mr-2 h-4 w-4" aria-hidden="true" /> Sign out
          </Button>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:flex-row lg:items-start">
        <nav aria-label="Pages" className="lg:sticky lg:top-24 lg:w-72 lg:shrink-0">
          <label htmlFor="page-select" className="sr-only">
            Choose a page
          </label>
          <select
            id="page-select"
            value={activeGroup?.id}
            onChange={(event) => setActiveGroupId(event.target.value)}
            className="min-h-11 w-full border bg-background px-3 text-sm font-medium text-foreground lg:hidden"
          >
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.page}
                {pendingByGroup[group.id] ? ` (${pendingByGroup[group.id]} unsaved)` : ""}
              </option>
            ))}
          </select>
          <ul className="hidden max-h-[calc(100vh-8rem)] flex-col overflow-y-auto border bg-background lg:flex">
            {groups.map((group) => {
              const isActive = group.id === activeGroup?.id
              return (
                <li key={group.id}>
                  <button
                    type="button"
                    onClick={() => setActiveGroupId(group.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex w-full items-center justify-between gap-3 border-b px-4 py-3 text-left text-sm transition-colors ${
                      isActive ? "bg-ink font-semibold text-ink-foreground" : "text-foreground hover:bg-surface"
                    }`}
                  >
                    <span className="text-pretty">{group.page}</span>
                    <span className="flex shrink-0 items-center gap-2 text-xs">
                      {pendingByGroup[group.id] ? (
                        <span className="bg-gold px-1.5 py-0.5 font-bold text-ink">{pendingByGroup[group.id]}</span>
                      ) : null}
                      <span className={isActive ? "text-ink-foreground/60" : "text-muted-foreground"}>
                        {group.slots.length}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {activeGroup ? (
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-primary">{activeGroup.page}</h2>
              <Link
                href={activeGroup.path}
                target="_blank"
                className="flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                View page <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {activeGroup.slots.map((slot, index) => (
                <SlotCard
                  key={slot.id}
                  slot={slot}
                  title={`${activeGroup.page} - Image ${index + 1}`}
                  customUrl={overrides[slot.id]}
                  pending={pending[slot.id]}
                  disabled={saving}
                  onReplace={(file) => stageReplace(slot.id, file)}
                  onDelete={() => stageDelete(slot.id)}
                  onUndo={() => clearPending(slot.id)}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div aria-live="polite" className="min-h-6 text-sm">
            {status ? (
              <p
                className={`flex items-center gap-2 font-medium ${
                  status.kind === "success" ? "text-primary" : "text-destructive"
                }`}
              >
                {status.kind === "success" ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                ) : (
                  <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                )}
                {status.message}
              </p>
            ) : (
              <p className="text-muted-foreground">
                {pendingCount === 0
                  ? "No unsaved changes."
                  : `${pendingCount} unsaved ${pendingCount === 1 ? "change" : "changes"}.`}
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="min-h-11"
              onClick={discardAll}
              disabled={pendingCount === 0 || saving}
            >
              Discard
            </Button>
            <Button
              type="button"
              className="min-h-11 min-w-32 bg-gold text-ink hover:bg-gold/90"
              onClick={handleSave}
              disabled={pendingCount === 0 || saving}
            >
              {saving ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SlotCard({
  slot,
  title,
  customUrl,
  pending,
  disabled,
  onReplace,
  onDelete,
  onUndo,
}: {
  slot: ImageSlot
  title: string
  customUrl?: string
  pending?: Pending
  disabled: boolean
  onReplace: (file: File | undefined) => void
  onDelete: () => void
  onUndo: () => void
}) {
  const inputId = `upload-${slot.id}`
  const previewSrc =
    pending?.type === "replace" ? pending.preview : pending?.type === "delete" ? slot.defaultSrc : customUrl ?? slot.defaultSrc

  const badge = pending
    ? pending.type === "replace"
      ? { text: "New image — not saved", tone: "bg-gold text-ink" }
      : { text: "Will restore original", tone: "bg-destructive text-destructive-foreground" }
    : customUrl
      ? { text: "Custom image", tone: "bg-ink text-ink-foreground" }
      : { text: "Original", tone: "bg-background text-muted-foreground" }

  return (
    <li className={`flex flex-col border bg-background ${pending ? "ring-2 ring-gold" : ""}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element -- previews include local object URLs */}
        <img src={previewSrc} alt={`Preview: ${slot.label}`} className="h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 border px-2 py-1 text-xs font-semibold ${badge.tone}`}>{badge.text}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h3 className="font-semibold text-primary">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{slot.label}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <input
            id={inputId}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
            className="sr-only"
            disabled={disabled}
            onChange={(event) => {
              onReplace(event.target.files?.[0])
              event.target.value = ""
            }}
          />
          <Button asChild size="sm" className="min-h-10 bg-ink text-ink-foreground hover:bg-ink/90" disabled={disabled}>
            <label htmlFor={inputId} className="cursor-pointer">
              <ImagePlus className="mr-1.5 h-4 w-4" aria-hidden="true" />
              {customUrl || pending?.type === "replace" ? "Replace" : "Add image"}
            </label>
          </Button>
          {pending ? (
            <Button type="button" size="sm" variant="outline" className="min-h-10" onClick={onUndo} disabled={disabled}>
              <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden="true" /> Undo
            </Button>
          ) : (
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="min-h-10"
              onClick={onDelete}
              disabled={disabled || !customUrl}
              title={customUrl ? "Delete the custom image and restore the original" : "Nothing to delete yet"}
            >
              <Trash2 className="mr-1.5 h-4 w-4" aria-hidden="true" /> Delete
            </Button>
          )}
        </div>
      </div>
    </li>
  )
}

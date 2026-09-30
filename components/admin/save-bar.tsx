"use client"

import { CheckCircle2, TriangleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"

export type SaveStatus = { kind: "success" | "error"; message: string } | null

export function SaveBar({
  status,
  dirty,
  idleMessage,
  saving,
  onDiscard,
  onSave,
}: {
  status: SaveStatus
  dirty: boolean
  idleMessage: string
  saving: boolean
  onDiscard: () => void
  onSave: () => void
}) {
  return (
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
            <p className="text-muted-foreground">{idleMessage}</p>
          )}
        </div>
        <div className="flex gap-3">
          <Button type="button" variant="outline" className="min-h-11" onClick={onDiscard} disabled={!dirty || saving}>
            Discard
          </Button>
          <Button
            type="button"
            className="min-h-11 min-w-32 bg-gold text-ink hover:bg-gold/90"
            onClick={onSave}
            disabled={!dirty || saving}
          >
            {saving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </div>
    </div>
  )
}

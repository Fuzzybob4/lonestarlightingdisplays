"use client"

import { useState, type ReactNode } from "react"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout } from "@/app/admin/actions"

type Tab = { id: string; label: string; description: string; content: ReactNode }

export function AdminShell({ tabs }: { tabs: Tab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id)
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0]

  return (
    <div className="min-h-screen bg-surface">
      <div className="border-b bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 pt-10 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-gold">Site admin</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{active?.label}</h1>
              <p className="mt-2 max-w-xl text-pretty leading-7 text-ink-foreground/70">{active?.description}</p>
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
          <div role="tablist" aria-label="Admin sections" className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const selected = tab.id === active?.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`min-h-11 shrink-0 border-b-4 px-5 text-sm font-semibold transition-colors ${
                    selected
                      ? "border-gold text-ink-foreground"
                      : "border-transparent text-ink-foreground/60 hover:text-ink-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Inactive panels stay mounted so unsaved edits survive switching tabs. */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active?.id}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}

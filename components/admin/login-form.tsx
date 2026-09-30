"use client"

import { useState, useTransition, type FormEvent } from "react"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/app/admin/actions"

export function AdminLoginForm() {
  const [error, setError] = useState<string>()
  const [pending, startTransition] = useTransition()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setError(undefined)
    startTransition(() => {
      login({}, formData)
        .then((result) => {
          if (result?.error) setError(result.error)
        })
        .catch((err: unknown) => {
          if (err instanceof Error && err.message === "NEXT_REDIRECT") return
          setError("Sign in failed. Please try again.")
        })
    })
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface px-5 py-16">
      <div className="w-full max-w-sm border bg-background p-8">
        <div className="flex h-11 w-11 items-center justify-center bg-ink text-gold">
          <Lock className="h-5 w-5" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-primary">Staff sign in</h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Manage the photos shown across the website.</p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" autoComplete="username" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" autoComplete="current-password" required />
          </div>
          {error ? (
            <p role="alert" className="text-sm font-medium text-destructive">
              {error}
            </p>
          ) : null}
          <Button type="submit" disabled={pending} className="min-h-11 w-full bg-ink text-ink-foreground hover:bg-ink/90">
            {pending ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </section>
  )
}

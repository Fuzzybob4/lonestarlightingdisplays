import Link from "next/link"
import { Phone, MessageSquare, ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-2 shadow-[0_-8px_24px_rgba(7,19,31,0.12)] backdrop-blur sm:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a href={SITE_CONFIG.business.phoneHref} className="flex min-h-12 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-primary" aria-label={`Call ${SITE_CONFIG.business.name}`}>
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={SITE_CONFIG.business.textHref} className="flex min-h-12 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-primary" aria-label={`Text ${SITE_CONFIG.business.name}`}>
          <MessageSquare className="h-4 w-4" /> Text
        </a>
        <Link href="/booking" className="flex min-h-12 items-center justify-center gap-1 bg-accent px-2 text-xs font-bold text-accent-foreground">
          Estimate <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

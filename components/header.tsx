"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Commercial", href: "/commercial" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Lone Star Lighting Displays home"><Image src="/logo.png" alt="Lone Star Lighting Displays" width={44} height={44} className="h-11 w-11 rounded-md" /><span className="hidden text-sm font-bold uppercase leading-tight tracking-[0.12em] text-primary sm:block">Lone Star<br /><span className="font-normal tracking-[0.08em]">Lighting Displays</span></span></Link>
        <nav className="hidden items-center gap-7 lg:flex">{navigation.map((item) => <Link key={item.name} href={item.href} className={cn("text-sm font-semibold transition-colors hover:text-accent", pathname === item.href ? "text-primary" : "text-muted-foreground")}>{item.name}</Link>)}</nav>
        <div className="flex items-center gap-2"><Button variant="ghost" size="icon" className="hidden min-h-11 min-w-11 sm:inline-flex" asChild><a href="tel:+15127713091" aria-label="Call Lone Star Lighting Displays"><Phone className="h-4 w-4" /></a></Button><Button className="hidden min-h-11 bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex" asChild><Link href="/booking">Get a free estimate</Link></Button><Sheet open={isOpen} onOpenChange={setIsOpen}><SheetTrigger asChild><Button variant="outline" size="icon" className="min-h-11 min-w-11 lg:hidden"><Menu className="h-5 w-5" /><span className="sr-only">Open navigation</span></Button></SheetTrigger><SheetContent side="right" className="w-[min(88vw,380px)]"><div className="mt-10 flex flex-col gap-2">{navigation.map((item) => <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={cn("min-h-12 border-b border-border py-3 text-lg font-semibold", pathname === item.href ? "text-primary" : "text-muted-foreground")}>{item.name}</Link>)}<Button className="mt-4 min-h-12" asChild><Link href="/booking" onClick={() => setIsOpen(false)}>Get a free estimate</Link></Button><a href="tel:+15127713091" className="mt-2 flex min-h-12 items-center justify-center gap-2 border border-border text-sm font-semibold"><Phone className="h-4 w-4" /> (512) 771-3091</a></div></SheetContent></Sheet></div>
      </div>
    </header>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Sparkles, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  { image: "/images/christmas-lighting.jpeg", alt: "Warm white roofline lighting on a Texas home", label: "Residential" },
  { image: "/images/christmas-elegant.png", alt: "Elegant holiday lighting display", label: "Custom design" },
  { image: "/images/event-professional.jpeg", alt: "Professional lighting for an outdoor event", label: "Commercial" },
]

const services = [
  { title: "Holiday lighting", copy: "Custom rooflines, trees, wreaths, and displays designed to feel like your home at its best.", href: "/services/christmas-lighting" },
  { title: "Permanent lighting", copy: "Clean, low-profile lighting you can enjoy for holidays, game days, parties, and every night in between.", href: "/services/permanent-lighting" },
  { title: "Commercial displays", copy: "Make your storefront, venue, or community the place everyone wants to visit this season.", href: "/commercial" },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate min-h-[720px] bg-ink text-ink-foreground">
        <Image src="/images/hero-christmas-lighting.png" alt="Professionally lit Texas home at night" fill priority className="object-cover object-center opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-hero-scrim" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:justify-center lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-ink-foreground/30 bg-ink/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-sm"><Sparkles className="h-4 w-4" /> Central Texas lighting pros</div>
            <h1 className="max-w-3xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">Your home, <span className="text-gold">lit beautifully.</span></h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-ink-foreground/80 sm:text-xl">Professional holiday lighting designed, installed, maintained, and removed by a local team with 10 years of experience.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" className="min-h-12 bg-gold px-6 text-ink hover:bg-gold/90" asChild><Link href="/booking">Get a free estimate <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button size="lg" variant="outline" className="min-h-12 border-ink-foreground/50 bg-ink/20 px-6 text-ink-foreground hover:bg-ink-foreground/10" asChild><a href="tel:+15127713091"><Phone className="mr-2 h-4 w-4" /> (512) 771-3091</a></Button></div>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-foreground/20 pt-5 text-sm text-ink-foreground/75"><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> 10 years in business</span><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Austin & Central Texas</span><span className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Fully managed service</span></div>
        </div>
      </section>

      <section className="border-b bg-background"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8 lg:py-16"><div><p className="text-4xl font-bold tracking-tight text-primary">10<span className="text-gold">+</span></p><p className="mt-2 text-sm font-medium text-muted-foreground">years making Texas shine</p></div><div><p className="text-4xl font-bold tracking-tight text-primary">1</p><p className="mt-2 text-sm font-medium text-muted-foreground">team from design to takedown</p></div><div><p className="text-4xl font-bold tracking-tight text-primary">100<span className="text-gold">%</span></p><p className="mt-2 text-sm font-medium text-muted-foreground">custom, professional installs</p></div></div></section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="eyebrow">The Lone Star standard</p><h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl">The lights are only part of the experience.</h2><p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">You deserve a team that shows up prepared, communicates clearly, and treats your property like it matters. That is how we have built Lone Star for the last decade.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map((service) => <Link key={service.title} href={service.href} className="group flex min-h-64 flex-col justify-between border border-border bg-background p-6 transition-colors hover:border-gold"><div><h3 className="text-2xl font-bold text-primary">{service.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{service.copy}</p></div><span className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">A few of our favorites</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">See the difference.</h2></div><Link href="/gallery" className="flex items-center gap-2 text-sm font-bold text-primary">View all projects <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-4 md:grid-cols-3">{projects.map((project, index) => <div key={project.image} className={`group relative overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2" : "aspect-[4/3]"}`}><div className={index === 0 ? "relative aspect-[4/3] h-full min-h-80" : "relative h-full"}><Image src={project.image} alt={project.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-16"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{project.label}</span></div></div></div>)}</div></div></section>

      <section className="bg-ink px-5 py-20 text-ink-foreground sm:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p className="eyebrow text-gold">A better kind of busy season</p><h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Big lights. Small hassle.</h2><ul className="mt-8 grid gap-4 sm:grid-cols-2">{["One point of contact", "Custom design consultation", "Professional installation", "Maintenance when you need it", "Seasonal takedown", "Serving Central Texas"].map((item) => <li key={item} className="flex items-center gap-3 text-ink-foreground/80"><Check className="h-5 w-5 shrink-0 text-gold" />{item}</li>)}</ul></div><div className="border border-ink-foreground/20 bg-ink-foreground/5 p-7 sm:p-9"><div className="flex gap-1 text-gold"><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /></div><blockquote className="mt-5 text-2xl font-medium leading-9">“They made the whole process easy, and our house looked incredible. We will absolutely use Lone Star again.”</blockquote><p className="mt-6 text-sm text-ink-foreground/60">— Austin homeowner</p></div></div></section>

      <section className="bg-gold px-5 py-16 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-ink/70">Ready when you are</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Let&apos;s make your place the one people remember.</h2></div><Button size="lg" className="min-h-12 bg-ink px-6 text-ink-foreground hover:bg-ink/90" asChild><Link href="/booking">Start your estimate <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></section>
    </div>
  )
}

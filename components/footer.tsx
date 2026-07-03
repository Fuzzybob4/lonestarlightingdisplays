import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Lone Star Lighting Displays"
                width={40}
                height={40}
                className="h-10 w-10 rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">Lone Star</span>
                <span className="text-sm leading-tight">Lighting Displays</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Bringing Texas-sized holiday magic to your home with professional Christmas light installation.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://facebook.com/share/1FADNirDJj/?mibextid=wwXfr"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/lonestarlightingdisplays/"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:lonestarlightingdisplays@outlook.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+15127713091" className="text-muted-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/christmas-lighting" className="text-muted-foreground hover:text-primary">
                  Christmas Lighting
                </Link>
              </li>
              <li>
                <Link href="/services/permanent-lighting" className="text-muted-foreground hover:text-primary">
                  Permanent Lighting
                </Link>
              </li>
              <li>
                <Link href="/services/roofline-lighting" className="text-muted-foreground hover:text-primary">
                  Roofline Lighting
                </Link>
              </li>
              <li>
                <Link href="/services/tree-wrapping" className="text-muted-foreground hover:text-primary">
                  Tree Wrapping
                </Link>
              </li>
              <li>
                <Link href="/services/removal-and-storage" className="text-muted-foreground hover:text-primary">
                  Removal & Storage
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-muted-foreground hover:text-primary font-medium">
                  Commercial Lighting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service-areas/austin" className="text-muted-foreground hover:text-primary">
                  Austin
                </Link>
              </li>
              <li>
                <Link href="/service-areas/buda" className="text-muted-foreground hover:text-primary">
                  Buda
                </Link>
              </li>
              <li>
                <Link href="/service-areas/kyle" className="text-muted-foreground hover:text-primary">
                  Kyle
                </Link>
              </li>
              <li>
                <Link href="/service-areas/cedar-park" className="text-muted-foreground hover:text-primary">
                  Cedar Park
                </Link>
              </li>
              <li>
                <Link href="/service-areas/round-rock" className="text-muted-foreground hover:text-primary">
                  Round Rock
                </Link>
              </li>
              <li>
                <Link href="/service-areas/georgetown" className="text-muted-foreground hover:text-primary">
                  Georgetown
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-muted-foreground hover:text-primary font-medium">
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:lonestarlightingdisplays@outlook.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  lonestarlightingdisplays@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+15127713091" className="text-muted-foreground hover:text-primary">
                  (512) 771-3091
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-base font-medium mb-2">Hours</h4>
              <ul className="space-y-1 text-sm">
                <li className="text-muted-foreground">
                  <span className="font-medium">Mon-Fri:</span> 9am - 6pm
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium">Saturday:</span> 10am - 4pm
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium">Sunday:</span> Closed
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lone Star Lighting Displays. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-primary">
              Terms & Policies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

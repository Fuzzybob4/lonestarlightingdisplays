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
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:info@lonestarlightingdisplays.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/loyalty" className="text-muted-foreground hover:text-primary">
                  Loyalty Program
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-muted-foreground hover:text-primary">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:info@lonestarlightingdisplays.com" className="text-muted-foreground hover:text-primary">
                  info@lonestarlightingdisplays.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:support@lonestarlightingdisplays.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  support@lonestarlightingdisplays.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:sales@lonestarlightingdisplays.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  sales@lonestarlightingdisplays.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
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

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lone Star Lighting Displays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, Clock } from "lucide-react"
import { getCurrentSeason } from "@/lib/get-season"

export const metadata = {
  title: "Contact Us | Lone Star Lighting Displays",
  description: `Get in touch with our team for questions, support, or to schedule a consultation for your ${getCurrentSeason() === "holiday" ? "holiday" : "outdoor"} lighting needs.`,
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
          Have questions or need assistance? We're here to help with all your{" "}
          {getCurrentSeason() === "holiday" ? "holiday" : "outdoor"} lighting needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="mailto:lonestartlighingdisplays@outlook.com" className="hover:text-primary">
                        lonestartlighingdisplays@outlook.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="tel:+15127713091" className="hover:text-primary">
                        (512) 771-3091
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <div className="space-y-1 mt-1">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Monday-Friday:</span> 9am - 6pm
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Saturday:</span> 10am - 4pm
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">When should I book my holiday lighting?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We recommend booking as early as September to ensure availability. Our schedule fills up quickly,
                    especially for premium installation dates in November.
                  </p>
                </div>
                <div>
                  <p className="font-medium">What areas do you serve?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We currently serve the greater Austin, San Antonio, and Houston areas. Contact us to confirm service
                    in your specific location.
                  </p>
                </div>
                <div>
                  <p className="font-medium">How does the installation process work?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    After booking, our team will arrive on the scheduled date to install your lighting display. The
                    process typically takes 2-6 hours depending on the package. We handle everything from installation
                    to removal.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/services">View All FAQs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

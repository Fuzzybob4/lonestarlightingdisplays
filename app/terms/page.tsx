import { Shield, Calendar, CreditCard, RefreshCw } from "lucide-react"

export const metadata = {
  title: "Terms & Policies | Lone Star Lighting Displays",
  description: "Terms of service, payment policies, and service agreements for Lone Star Lighting Displays.",
}

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Terms & Policies</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
          Our service agreements and policies to ensure a smooth experience
        </p>
      </div>

      <div className="space-y-16 max-w-4xl mx-auto">
        {/* Service Overview */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full bg-primary/10 p-2">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Service Overview</h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Lone Star Lighting Displays offers professional lighting services for both residential and commercial
              properties. Our services include:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Holiday Lighting - Seasonal displays for Christmas and other holidays</li>
              <li>Landscape Lighting - Permanent outdoor lighting solutions</li>
              <li>Patio & Deck Lighting - Custom lighting for outdoor entertainment areas</li>
              <li>Security Lighting - Safety and security focused lighting solutions</li>
              <li>Permanent Lighting - Year-round programmable lighting systems</li>
            </ul>

            <p className="font-medium text-foreground">All services are available by contract only.</p>

            <p>
              Please note that our services, especially holiday lighting, are seasonal and operate on a first-come,
              first-served basis. We recommend booking well in advance to secure your preferred installation date.
            </p>
          </div>
        </section>

        {/* Installation Policies */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full bg-primary/10 p-2">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Installation Policies</h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-medium text-foreground">Installation Windows</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Commercial holiday installations begin October 1st</li>
              <li>Residential holiday installations begin October 15th</li>
              <li>Landscape and permanent lighting installations are available year-round</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Weather Considerations</h3>
            <p>
              Installations may be delayed due to inclement weather including rain, high winds, or freezing
              temperatures. Your safety and the safety of our installation team is our top priority. We will contact you
              as soon as possible to reschedule if weather impacts your installation date.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Property Access Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clear access to all areas where lighting will be installed</li>
              <li>Pets secured during installation</li>
              <li>Functioning exterior electrical outlets</li>
              <li>Gate codes or access instructions provided in advance</li>
              <li>Property owner or authorized representative present for initial consultation</li>
            </ul>
          </div>
        </section>

        {/* Payment Terms */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full bg-primary/10 p-2">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Payment Terms</h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-medium text-foreground">Payment Schedule</h3>
            <p>
              A 50% deposit is required at the time of booking to secure your installation date. The remaining balance
              is due upon completion of installation. For multi-year contracts, annual renewal payments are due 30 days
              prior to scheduled installation.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Accepted Payment Methods</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credit/Debit Cards (Visa, Mastercard, American Express, Discover)</li>
              <li>ACH Bank Transfer</li>
              <li>Checks (for deposits only, must clear before installation)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Late Payments</h3>
            <p>
              Payments not received according to the agreed-upon schedule may result in delayed or cancelled
              installation. A late fee of 5% will be applied to balances not paid within 15 days of the due date. For
              removal services, all outstanding balances must be paid in full before removal will be scheduled.
            </p>
          </div>
        </section>

        {/* Rescheduling & Cancellations */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full bg-primary/10 p-2">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Rescheduling & Cancellations</h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <h3 className="text-xl font-medium text-foreground">Customer Rescheduling</h3>
            <p>
              Requests to reschedule must be made at least 72 hours in advance of your scheduled installation. While we
              will make every effort to accommodate your new requested date, availability cannot be guaranteed,
              especially during peak season.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6">Cancellation Policy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made 30+ days before scheduled installation: Full refund of deposit</li>
              <li>Cancellations made 14-29 days before scheduled installation: 50% refund of deposit</li>
              <li>Cancellations made less than 14 days before scheduled installation: No refund of deposit</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6">Company Rescheduling</h3>
            <p>
              In the event that Lone Star Lighting Displays needs to reschedule your installation due to weather, supply
              chain issues, or other unforeseen circumstances, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact you as soon as possible with alternative dates</li>
              <li>Prioritize your installation in the new schedule</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HubSpotScript } from "@/components/hubspot-script"
import { JsonLd } from "@/components/json-ld"
import { localBusinessSchema, webSiteSchema } from "@/lib/structured-data"
import { BUSINESS_INFO } from "@/lib/business-info"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  title: "Lone Star Lighting Displays | Holiday Lighting Austin TX | Christmas Lights Central Texas",
  description:
    "Professional Christmas light installation in Austin, Buda, Kyle, San Marcos & Dripping Springs TX. Holiday lighting Austin TX experts. Book your free estimate today.",
  keywords:
    "holiday lighting Austin TX, Christmas lights Austin Texas, Christmas light installation Austin, Buda Christmas lights, Buda holiday lighting, Kyle Christmas lights, San Marcos holiday lighting, Dripping Springs Christmas lights, Central Texas holiday lights, professional Christmas light installer near me",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lone Star Lighting Displays | Holiday Lighting Austin TX",
    description:
      "Professional Christmas light installation serving Austin, Buda, Kyle, San Marcos & Dripping Springs. Texas-owned, locally operated.",
    type: "website",
    locale: "en_US",
    url: BUSINESS_INFO.url,
    siteName: BUSINESS_INFO.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd id="json-ld-global" data={[localBusinessSchema(), webSiteSchema()]} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* HubSpot tracking code loaded client-side to avoid SSR script tag warnings */}
        <HubSpotScript />
      </body>
    </html>
  )
}

import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lone Star Lighting Displays | Professional Holiday Lighting in Texas",
  description:
    "Texas-sized holiday magic with professional Christmas light installation, custom displays, and hassle-free service for homes and businesses.",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Start of HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/43556651.js"
        ></script>
        {/* End of HubSpot Embed Code */}
      </body>
    </html>
  )
}

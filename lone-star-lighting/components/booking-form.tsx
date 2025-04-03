"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { getCurrentSeason } from "@/lib/get-season"

export default function BookingForm() {
  const [hubspotLoaded, setHubspotLoaded] = useState(false)
  const season = getCurrentSeason()

  // Load HubSpot form script dynamically
  useEffect(() => {
    if (!hubspotLoaded) {
      const script = document.createElement("script")
      script.src = "https://js-na2.hsforms.net/forms/embed/242336252.js"
      script.async = true
      script.defer = true
      script.onload = () => {
        setHubspotLoaded(true)
      }
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [hubspotLoaded])

  // For general season, use the general season HubSpot form
  if (season === "general") {
    return (
      <Card>
        <CardContent className="p-6">
          <script src="https://js-na2.hsforms.net/forms/embed/242336252.js" defer></script>
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="5e122753-374d-4a71-be50-050c45247143"
            data-portal-id="242336252"
          ></div>
        </CardContent>
      </Card>
    )
  }

  // For holiday season, use the holiday season HubSpot form
  return (
    <Card>
      <CardContent className="p-6">
        <script src="https://js-na2.hsforms.net/forms/embed/242336252.js" defer></script>
        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id="9f8d6252-3163-44df-8d61-0cb14128cad6"
          data-portal-id="242336252"
        ></div>
      </CardContent>
    </Card>
  )
}


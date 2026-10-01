"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function BookingForm() {
  const [hubspotLoaded, setHubspotLoaded] = useState(false)

  // Load HubSpot form script dynamically
  useEffect(() => {
    if (!hubspotLoaded) {
      // Load the v2 script
      const script = document.createElement("script")
      script.src = "//js.hsforms.net/forms/embed/v2.js"
      script.charset = "utf-8"
      script.type = "text/javascript"
      script.async = true
      script.defer = true
      script.onload = () => {
        setHubspotLoaded(true)

        // Create the form using the v2 API
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "43556651",
            formId: "04e37b45-1b68-49cf-97e3-1ffaca55c8ce",
            region: "na1",
            target: "#hubspot-form-container",
          })
        }
      }
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [hubspotLoaded])

  return (
    <Card>
      <CardContent className="p-6">
        <div id="hubspot-form-container" className="min-h-[400px]"></div>
      </CardContent>
    </Card>
  )
}

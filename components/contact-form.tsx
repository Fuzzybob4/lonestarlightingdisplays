"use client"

import { useEffect, useId } from "react"
import { Card, CardContent } from "@/components/ui/card"

const HUBSPOT_PORTAL_ID = "43556651"
const HUBSPOT_FORM_ID = "04e37b45-1b68-49cf-97e3-1ffaca55c8ce"

export default function ContactForm() {
  const targetId = useId().replace(/:/g, "")

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return

    const createForm = () => {
      if (!window.hbspt || target.dataset.loaded === "true") return
      target.dataset.loaded = "true"
      window.hbspt.forms.create({
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        region: "na1",
        target: `#${targetId}`,
      })
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-hubspot-forms="true"]')
    if (window.hbspt) {
      createForm()
      return
    }

    if (existingScript) {
      existingScript.addEventListener("load", createForm)
      return () => existingScript.removeEventListener("load", createForm)
    }

    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/embed/v2.js"
    script.async = true
    script.defer = true
    script.dataset.hubspotForms = "true"
    script.addEventListener("load", createForm)
    document.body.appendChild(script)

    return () => script.removeEventListener("load", createForm)
  }, [targetId])

  return (
    <Card>
      <CardContent className="p-6">
        <div id={targetId} className="min-h-[400px]" aria-label="Contact form" />
      </CardContent>
    </Card>
  )
}

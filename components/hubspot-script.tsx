"use client"

import { useEffect } from "react"

export function HubSpotScript() {
  useEffect(() => {
    // Avoid injecting the script more than once
    if (document.getElementById("hs-script-loader")) return

    const script = document.createElement("script")
    script.id = "hs-script-loader"
    script.type = "text/javascript"
    script.async = true
    script.defer = true
    script.src = "//js-na1.hs-scripts.com/43556651.js"
    document.body.appendChild(script)
  }, [])

  return null
}

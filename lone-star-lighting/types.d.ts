// Add HubSpot types
interface Window {
  hbspt?: {
    forms: {
      create: (config: {
        region: string
        portalId: string
        formId: string
        target: string
      }) => void
    }
  }
}


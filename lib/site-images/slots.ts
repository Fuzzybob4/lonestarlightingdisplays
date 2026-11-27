import { CITIES } from "@/lib/cities"
import { COMMERCIAL_PAGES } from "@/lib/commercial"
import { SERVICE_DETAILS } from "@/lib/service-details"

export type ImageSlot = { id: string; label: string; defaultSrc: string }
export type ImagePageGroup = { id: string; page: string; path: string; slots: ImageSlot[] }

const SERVICE_AREA_CARDS = [
  { slug: "austin", city: "Austin", image: "/images/hero-christmas-lighting.png" },
  { slug: "buda", city: "Buda", image: "/images/buda-residential-lighting.png" },
  { slug: "kyle", city: "Kyle", image: "/images/kyle-residential-lighting.png" },
  { slug: "san-marcos", city: "San Marcos", image: "/images/gingerbread-package.png" },
  { slug: "dripping-springs", city: "Dripping Springs", image: "/images/basic-package.png" },
  { slug: "cedar-park", city: "Cedar Park", image: "/images/christmas-colorful.jpeg" },
  { slug: "round-rock", city: "Round Rock", image: "/images/advanced-package.png" },
  { slug: "georgetown", city: "Georgetown", image: "/images/christmas-lighting.jpeg" },
  { slug: "lakeway", city: "Lakeway", image: "/images/christmas-elegant.png" },
  { slug: "bee-cave", city: "Bee Cave", image: "/images/basic-package.png" },
]

const GALLERY_IMAGES = [
  "/images/premium-estate-hero.png",
  "/images/premium-hillcountry-estate.png",
  "/images/premium-roofline-closeup.png",
  "/images/premium-tower-tree.png",
  "/images/premium-landscape-garden.png",
  "/images/premium-commercial-storefront.png",
  "/images/premium-office-building.png",
  "/images/premium-hoa-entrance.png",
  "/images/premium-apartment-clubhouse.png",
  "/images/premium-restaurant-patio.png",
  "/images/premium-church-steeple.png",
  "/images/premium-event-lighting.png",
]

export const cardSlotForArea = (slug: string) => `areas-card-${slug}`
export const citySlot = (slug: string, position: "hero" | "secondary") => `city-${slug}-${position}`
export const detailSlot = (kind: "service" | "commercial", slug: string, position: "hero" | "secondary") =>
  `${kind}-${slug}-${position}`

export const IMAGE_GROUPS: ImagePageGroup[] = [
  {
    id: "home",
    page: "Home page",
    path: "/",
    slots: [
      { id: "home-hero", label: "Hero background", defaultSrc: "/images/premium-hillcountry-estate.png" },
      { id: "home-project-1", label: "Favorites — Residential", defaultSrc: "/images/premium-estate-hero.png" },
      { id: "home-project-2", label: "Favorites — Tree wrapping", defaultSrc: "/images/premium-tower-tree.png" },
      { id: "home-project-3", label: "Favorites — Commercial", defaultSrc: "/images/premium-commercial-storefront.png" },
    ],
  },
  {
    id: "service-areas",
    page: "Service Areas page",
    path: "/service-areas",
    slots: [
      { id: "areas-hero", label: "Hero background", defaultSrc: "/images/hero-christmas-lighting.png" },
      ...SERVICE_AREA_CARDS.map((area) => ({
        id: cardSlotForArea(area.slug),
        label: `${area.city} card`,
        defaultSrc: area.image,
      })),
      { id: "areas-team", label: "Local team section", defaultSrc: "/images/christmas-elegant.png" },
    ],
  },
  ...CITIES.map((city) => ({
    id: `city-${city.slug}`,
    page: `${city.city} page`,
    path: `/service-areas/${city.slug}`,
    slots: [
      { id: citySlot(city.slug, "hero"), label: "Hero background", defaultSrc: city.heroImage },
      { id: citySlot(city.slug, "secondary"), label: "Neighborhoods section", defaultSrc: city.secondaryImage },
    ],
  })),
  {
    id: "services",
    page: "Services page",
    path: "/services",
    slots: [
      { id: "services-basic", label: "Basic package", defaultSrc: "/images/basic-package.png" },
      { id: "services-advanced", label: "Advanced package", defaultSrc: "/images/advanced-package.png" },
      { id: "services-gingerbread", label: "Gingerbread package", defaultSrc: "/images/gingerbread-package.png" },
      { id: "services-christmas", label: "Christmas lighting", defaultSrc: "/images/christmas-lighting.jpeg" },
      { id: "services-landscape", label: "Landscape lighting", defaultSrc: "/images/landscape-lighting.png" },
      { id: "services-security", label: "Security lighting", defaultSrc: "/images/security-lighting.png" },
      { id: "services-event", label: "Event lighting", defaultSrc: "/images/event-lighting.png" },
      { id: "services-wedding", label: "Wedding lighting", defaultSrc: "/images/wedding-lighting.jpeg" },
      { id: "services-outdoor", label: "Outdoor living", defaultSrc: "/images/patio.png" },
    ],
  },
  {
    id: "christmas-lighting",
    page: "Christmas Lighting page",
    path: "/services/christmas-lighting",
    slots: [
      { id: "xmas-hero", label: "Hero background", defaultSrc: "/images/christmas-elegant.png" },
      { id: "xmas-display", label: "Display section", defaultSrc: "/images/christmas-colorful.jpeg" },
      { id: "xmas-install", label: "Installation section", defaultSrc: "/images/christmas-elegant.png" },
    ],
  },
  {
    id: "landscape-lighting",
    page: "Landscape Lighting page",
    path: "/services/landscape-lighting",
    slots: [
      { id: "landscape-hero", label: "Hero background", defaultSrc: "/images/landscape-lighting.png" },
      { id: "landscape-path", label: "Path lighting", defaultSrc: "/images/landscape-lighting.png" },
      { id: "landscape-tree", label: "Tree uplighting", defaultSrc: "/images/outdoor-lighting.png" },
      { id: "landscape-garden", label: "Garden accent lighting", defaultSrc: "/images/patio.png" },
    ],
  },
  {
    id: "event-lighting",
    page: "Event Lighting page",
    path: "/services/event-lighting",
    slots: [
      { id: "event-hero", label: "Hero background", defaultSrc: "/images/event-string-lights.jpeg" },
      { id: "event-corporate", label: "Corporate events", defaultSrc: "/images/event-dramatic.png" },
    ],
  },
  {
    id: "wedding-lighting",
    page: "Wedding Lighting page",
    path: "/services/wedding-lighting",
    slots: [
      { id: "wedding-hero", label: "Hero background", defaultSrc: "/images/wedding-header.jpeg" },
      { id: "wedding-ceremony", label: "Ceremony section", defaultSrc: "/images/wedding-ambiance.avif" },
    ],
  },
  ...SERVICE_DETAILS.map((service) => ({
    id: `service-${service.slug}`,
    page: `${service.name} page`,
    path: `/services/${service.slug}`,
    slots: [
      { id: detailSlot("service", service.slug, "hero"), label: "Hero background", defaultSrc: service.heroImage },
      { id: detailSlot("service", service.slug, "secondary"), label: "Details section", defaultSrc: service.secondaryImage },
    ],
  })),
  {
    id: "commercial",
    page: "Commercial page",
    path: "/commercial",
    slots: [{ id: "commercial-hero", label: "Hero background", defaultSrc: "/images/premium-office-building.png" }],
  },
  ...COMMERCIAL_PAGES.map((page) => ({
    id: `commercial-${page.slug}`,
    page: `${page.name} page`,
    path: `/commercial/${page.slug}`,
    slots: [
      {
        id: detailSlot("commercial", page.slug, "hero"),
        label: "Hero background (also the Commercial page card)",
        defaultSrc: page.heroImage,
      },
      { id: detailSlot("commercial", page.slug, "secondary"), label: "Details section", defaultSrc: page.secondaryImage },
    ],
  })),
  {
    id: "about",
    page: "About page",
    path: "/about",
    slots: [
      { id: "about-hero", label: "Hero background", defaultSrc: "/images/premium-roofline-closeup.png" },
      { id: "about-story", label: "Story section", defaultSrc: "/images/premium-hillcountry-estate.png" },
    ],
  },
  {
    id: "gallery",
    page: "Our Work (gallery) page",
    path: "/gallery",
    slots: GALLERY_IMAGES.map((src, index) => ({
      id: `gallery-${index + 1}`,
      label: `Project ${index + 1}`,
      defaultSrc: src,
    })),
  },
]

const VALID_SLOT_IDS = new Set(IMAGE_GROUPS.flatMap((group) => group.slots.map((slot) => slot.id)))

export function isValidSlot(slot: string | undefined): slot is string {
  return !!slot && VALID_SLOT_IDS.has(slot)
}

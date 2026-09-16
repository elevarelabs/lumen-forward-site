export const site = {
  name: "Lumen Forward",
  legal: "Lumen Forward Consulting",
  url: "https://lumenforward.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "jen@lumenforward.com",
  founder: "Jen Zils",
  h1: "Growth exposes structure.",
  cta: "Let's Talk",
  tagline: "Operating models that scale.",
  meta: {
    title: "Lumen Forward | Operating models that scale",
    description:
      "Growth exposes structure. Hands-on operational leadership for founder-led businesses when growth outpaces how they run. Let's Talk.",
    ogTitle: "Growth exposes structure.",
    ogDescription:
      "Operating models that scale. For founder-led businesses when growth outpaced how they run. Let's Talk.",
  },
} as const;

export const routes = {
  home: "/",
  growth: "/#growth",
  work: "/#work",
  about: "/about",
  contact: "/contact",
  structureCheck: "/structure-check",
  engagements: "/engagements",
  privacy: "/privacy",
} as const;

export const nav = [
  { href: routes.engagements, label: "Engagements" },
  { href: routes.structureCheck, label: "Structure Check" },
  { href: routes.about, label: "About" },
] as const;

export const site = {
  name: "Lumen Forward",
  legal: "Lumen Forward Consulting",
  url: "https://lumenforward.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@lumenforward.com",
  founder: "Jen Zils",
  h1: "Growth exposes structure.",
  cta: "Let's Talk",
  meta: {
    title: "Lumen Forward | Operational consulting for founder-led service businesses",
    description:
      "Growth exposes structure. Hands-on operational leadership for founder-led service businesses when the team is capable and the operating model has not kept up. Let's Talk.",
    ogTitle: "Growth exposes structure.",
    ogDescription:
      "I help founder-led service businesses when growth outpaces how they run. Hands-on, built to hand off. Let's Talk.",
  },
} as const;

export const routes = {
  home: "/",
  growth: "/#growth",
  work: "/#work",
  about: "/#about",
  contact: "/#contact",
  structureCheck: "/structure-check",
  engagements: "/engagements",
  report: "/engagements#report",
  privacy: "/privacy",
} as const;

export const nav = [
  { href: routes.growth, label: "What Growth Exposes" },
  { href: routes.engagements, label: "Engagements" },
  { href: routes.structureCheck, label: "Structure Check" },
  { href: routes.about, label: "About" },
] as const;

export const footerLinks = [
  { href: routes.contact, label: "Let's Talk" },
  { href: routes.structureCheck, label: "Structure Check" },
  { href: routes.report, label: "Get the report" },
  { href: routes.privacy, label: "Privacy" },
] as const;

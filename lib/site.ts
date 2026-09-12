export const site = {
  name: "Lumen Forward",
  url: "https://lumenforward.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@lumenforward.com",
  h1: "Growth exposes structure.",
  tagline: "Find the priority. Move it in 90 days.",
  cta: "Let's Talk",
  meta: {
    title: "Lumen Forward | Operational Consulting for Founder-Led Businesses",
    description:
      "Growth exposes structure. Hands-on operational leadership when the business is heavier than it should be—whether you're growing fast, stuck, or both. Let's Talk.",
    ogTitle: "Growth exposes structure.",
    ogDescription:
      "I help founder-led businesses find where structure stopped fitting—and fix it. Calm, hands-on, built to hand off.",
  },
} as const;

export const routes = {
  home: "/",
  howWeWork: "/#how-we-work",
  outcomes: "/#outcomes",
  about: "/about",
  aboutAnchor: "/#about",
  engagements: "/engagements",
  structureCheck: "/structure-check",
  contact: "/contact",
  privacy: "/privacy",
} as const;

export const nav = [
  { href: routes.howWeWork, label: "How We Work" },
  { href: routes.outcomes, label: "Outcomes" },
  { href: routes.about, label: "About" },
  { href: routes.engagements, label: "Engagements" },
  { href: routes.structureCheck, label: "Structure Check" },
] as const;

export const footerLinks = [
  { href: routes.howWeWork, label: "How We Work" },
  { href: routes.outcomes, label: "Outcomes" },
  { href: routes.about, label: "About" },
  { href: routes.engagements, label: "Engagements" },
  { href: routes.structureCheck, label: "Structure Check" },
  { href: routes.contact, label: "Let's Talk" },
  { href: routes.privacy, label: "Privacy" },
] as const;

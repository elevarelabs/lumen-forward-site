export const site = {
  name: "Lumen Forward",
  legal: "Lumen Forward Consulting",
  url: "https://lumenforward.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@lumenforward.com",
  founder: "Jen Zils",
  h1: "You built something meaningful. Now it can't run without you.",
  meta: {
    title: "Lumen Forward | Operating structure for founder-led service businesses",
    description:
      "You built something meaningful. Now it can't run without you. Lumen Forward helps founder-led service businesses design roles, decision rights, and cadence so the company can run, grow, and take on larger work.",
    ogTitle: "You built something meaningful. Now it can't run without you.",
    ogDescription:
      "Operating structure for founder-led service businesses. Discovery conversation with Jen Zils of Lumen Forward.",
  },
} as const;

export const routes = {
  home: "/",
  scenarios: "/#scenarios",
  method: "/#method",
  paradox: "/#paradox",
  about: "/#about",
  contact: "/#contact",
  privacy: "/privacy",
} as const;

export const nav = [
  { href: routes.scenarios, label: "Scenarios" },
  { href: routes.method, label: "Method" },
  { href: routes.paradox, label: "Paradox" },
  { href: routes.about, label: "About" },
] as const;

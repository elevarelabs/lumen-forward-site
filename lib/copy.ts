export const home = {
  hero: {
    eyebrow: "Operational consulting for founder-led businesses",
    h1: "Growth exposes structure.",
    subhead: "Every business runs on some kind of operating model. Whether anyone designed it or not.",
    supporting:
      "I work with founder-led businesses when growth outpaced how they run—or when the work got heavy and the map never got redrawn. We find where structure stopped fitting. Then we fix it.",
    primaryCta: "Let's Talk",
    secondaryCta: "Take the Structure Check",
  },
  problems: {
    heading: "When the business starts running you",
    intro:
      "The work still gets done. But evenings disappear into Slack. Decisions stack up on your desk. Every hire adds capacity—and more noise. That isn't a motivation problem. It's a structure problem.",
    cards: [
      {
        title: "Decisions still land on you",
        body: "Approvals, exceptions, and judgment calls route back to the same desk. The team waits. You carry more than the org chart admits.",
      },
      {
        title: "Growth that hurts",
        body: "Revenue may be up, flat, or under pressure. Either way, margin thins, roles blur, and the same few people absorb every fire. Success that feels like strain is still a structure problem.",
      },
      {
        title: "Hires without a clear seat",
        body: "Seats filled against urgency instead of a sharp role. Accountability stays fuzzy. Performance stays uneven. The next hire feels like relief—and often isn't.",
      },
    ],
    footnote:
      "Legacy pricing quietly costing margin; AI experiments without a clear operating question.",
    bridge:
      "If the business feels heavier than it should, that's usually structure—not effort, and not a personal failing.",
  },
  offer: {
    heading: "Hands-on operational leadership",
    body: "I don't hand you a slide deck and leave. I diagnose where structure, people, process, tools, and AI are creating drag—then I lead the work to fix it, and hand back a system that runs without me.",
    includes: [
      "Diagnose the operating model as it actually works",
      "Align structure, roles, and decision rights",
      "Clarify process and tooling",
      "Prioritize AI where it reduces drag",
      "Lead implementation alongside your team",
      "Hand off a running system with clear ownership",
    ],
    ladder:
      "Most engagements start with a free Structure Check, then a Priority Sprint if you want the priority in writing for the team—then hands-on implementation when you're ready to build. Details and pricing live on Engagements.",
    feeNote:
      "My fee covers my leadership; specialist costs, when a project needs them, are scoped and approved separately.",
    cta: "Let's Talk",
  },
  howWeWork: {
    heading: "How we work",
    subhead: "Five stages. One goal: leave the business running on structure, not continued presence.",
    steps: [
      {
        title: "Understand the business & priority",
        body: "We start with how the business actually runs and the priority you need resolved—not a generic assessment.",
      },
      {
        title: "Find what's creating drag",
        body: "We locate where structure, people, process, tools, or AI no longer fit—and what that costs in time, margin, and attention.",
      },
      {
        title: "Decide what to build",
        body: "We agree on the right-sized changes: what to fix, what to leave, and what success looks like.",
      },
      {
        title: "Lead implementation",
        body: "I stay in the work—coordinating people, decisions, and delivery until the change is real.",
      },
      {
        title: "Hand off so it holds",
        body: "Ownership, decision rights, and operating rhythm transfer to your team so the system holds without me.",
      },
    ],
    closing: "The point is not ongoing dependency. The point is a business that runs on clear structure.",
  },
  outcomes: {
    heading: "What you walk away with",
    intro: "Concrete operating outcomes—not a report that sits unused.",
    items: [
      {
        title: "Executable plan",
        body: "The priority, what it's costing, and the first 90 days—written so the team can act. Not a strategy memo that dies in a folder.",
      },
      {
        title: "Right-sized team",
        body: "Seats that match the work. Who owns what. What you don't need to hire for yet—and which roles were filled against urgency instead of a sharp job.",
      },
      {
        title: "Explicit decision rights",
        body: "Who decides, who is consulted, and what no longer routes to the founder by default.",
      },
      {
        title: "Implemented change",
        body: "The fix is in the work, not in a deck. Process, tooling, and ownership are live—and someone on your team holds them.",
      },
      {
        title: "Usable AI tools",
        body: "AI only where it reduces drag on a named operating question. Not a pile of experiments, and not a tool project with no structure underneath.",
      },
    ],
  },
  structureCheck: {
    kicker: "Free · ~3 minutes · six questions",
    heading: "Structure Check",
    body: "Six questions. About three minutes. See where to focus—and what to move first. No pitch deck. No branded framework. Just a clearer read so you can act.",
    tagline: "Find the priority. Move it in 90 days.",
    primaryCta: "Start the Structure Check",
    secondaryLead: "Prefer a conversation?",
    secondaryCta: "Let's Talk",
  },
  about: {
    heading: "About Jen",
    body: "Jen Zils has spent 25+ years in operational leadership—inside the pattern most founders eventually hit. The work still gets done. More decisions, more exceptions, and more weight land on the same few people—often the founder. Sometimes the business is growing. Sometimes it's stuck. Either way, the structure stopped fitting. Her work is practical and hands-on: diagnose what's creating drag, lead the fix, and leave a system the team can run. Calm, direct, built for leaders who want clarity over theater.",
    oneLiner: "Operational leadership for businesses past the stage their structure was built for.",
  },
  finalCta: {
    heading: "Bring me the priority.",
    body: "If the business feels heavier than it should, that's usually structure, not effort. Bring me the priority. I'll tell you what it takes, and I'll lead it.",
    cta: "Let's Talk",
    micro: "No discovery-call theater. Tell me what's heavy; I'll tell you what it takes.",
  },
} as const;

export const aboutPage = {
  heading: "About Jen",
  body: "Jen Zils has spent 25+ years leading operations inside founder-led businesses—the kind where the org chart lags the work, decisions still route through one desk, and growth (or the fight to hold ground) has made everything heavier. She comes in to diagnose what's creating drag, lead the fix with the team, and hand off a system that holds without her in the room.",
  stance: "Calm. Direct. No theater.",
  closer: "If that sounds like the help you need:",
} as const;

export const contactPage = {
  heading: "Let's Talk",
  intro:
    "Tell me what's heavy. I'll tell you what it takes—and whether a Structure Check, a Priority Sprint, or a direct implementation conversation is the right next step.",
  fields: {
    name: "Name",
    email: "Email",
    priority: "What's the priority?",
  },
  submit: "Let's Talk",
  underForm: "No discovery-call theater. No pitch deck. A clear read on fit and next step.",
  success: "Got it. I'll follow up shortly.",
} as const;

export const engagementsPage = {
  heading: "Engagements",
  intro:
    "Hands-on operational leadership. Diagnose, lead the fix, hand off. Most work follows a simple ladder.",
  rungs: [
    {
      name: "Structure Check",
      meta: "Free · ~3 minutes",
      body: "Six questions. A clearer read on where to focus. Start here if you want a private signal before a conversation.",
      href: "/structure-check",
      cta: "Start the Structure Check",
    },
    {
      name: "Priority Sprint",
      meta: "$7,500 · 2–3 weeks",
      body: "The priority worth moving, what it's costing, and the first 90 days—in writing for the team. 100% credit toward the first implementation if you start within 90 days. Find the priority. Move it in 90 days.",
    },
    {
      name: "Implementation",
      meta: "Scoped",
      body: "Lead the fix alongside your team. Hand off ownership so it holds. No forever retainer as the default.",
    },
  ],
  fit: {
    heading: "Fit",
    good: "Good fit when the founder is still in too many exceptions, the team can execute once the work is named, and you want a system you can run—not a permanent fractional seat.",
    not: "Not a fit for pre-revenue experiments, board-deck-only work, or tool projects with no structure underneath.",
  },
  cta: "Let's Talk",
} as const;

export const structureCheckPage = {
  heading: "Structure Check",
  lede: "Six questions. About three minutes. A private read on where structure stopped fitting—and what to move first.",
  tagline: "Find the priority. Move it in 90 days.",
} as const;

export const privacyPage = {
  heading: "Privacy",
  updated: "September 2026",
  sections: [
    {
      title: "What this site collects",
      body: "This is a marketing site. There is no account system and no product login. If you write through Let's Talk, I receive the name, email, and priority you send so I can reply.",
    },
    {
      title: "How messages are delivered",
      body: "When a form endpoint is configured, your message is sent through that provider so I can read it and follow up. If a form endpoint is not configured, your device opens a mail draft addressed to me instead. I use what you send only to assess fit and continue the conversation.",
    },
    {
      title: "What this site does not do",
      body: "I do not sell contact details. I do not run an advertising pixel on this site. Hosting and security logs may record standard technical data (such as IP address and user agent) as part of serving the pages.",
    },
    {
      title: "How long I keep a note",
      body: "I keep correspondence as long as it is useful to the conversation or required for ordinary business records, then I delete it.",
    },
    {
      title: "Questions",
      body: "If you want a message removed or you have a privacy question, write through Let's Talk and say so. I'll handle it directly.",
    },
  ],
} as const;

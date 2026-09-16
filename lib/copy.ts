export const home = {
  hero: {
    spine: "Lumen Forward Consulting",
    kicker: "Operational consulting",
    h1LineOne: "Growth exposes",
    h1LineTwo: "structure.",
    deck: "Every business runs on some kind of operating model, whether anyone named it or not. Growth makes the gaps visible.",
    body: "I work with founder-led service businesses that already have a decent team. The next chapter needs hands-on help: a large initiative, a team you intend to grow, or an operating model that no longer fits how the work actually runs.",
    cta: "Let's Talk",
    ctaHref: "/#contact",
    meta: "Founder-led service businesses",
  },
  scenarios: {
    eyebrow: "The pattern is not always the same",
    heading: "What Growth Exposes",
    intro:
      "Growth does not create one problem. Sometimes the team is ready and the operating model is not. Sometimes a hire never had a real seat. Sometimes one desk still holds every call. Three patterns, equal weight. None of them is the whole story.",
    items: [
      {
        number: "01",
        title: "Solid Teams, New Heights",
        body: "You already have a capable team. What you do not have is the operating structure for a large initiative or the next chapter: a new offer, an expansion, a systems rebuild. The people can do the work. Ops has not caught up.",
      },
      {
        number: "02",
        title: "Hires Without Seats",
        body: "Hiring fails or stalls because the role was never a seat. You hired against urgency. Accountability stayed vague. Performance stayed uneven. The next hire feels like relief, and often is not.",
      },
      {
        number: "03",
        title: "The Bottleneck",
        body: "Decisions still funnel to one desk. Approvals, exceptions, and judgment calls wait. The team pauses. This is one pattern growth exposes. It is not the brand, and it is not the only reason to get help.",
      },
    ],
  },
  work: {
    eyebrow: "The engagement",
    heading: "Hands-on, then handed off",
    intro:
      "I do not leave a deck and walk. I come in alongside your people, put structure into the work, and stay until it holds without me in the meeting.",
    beats: [
      {
        name: "See how it actually runs",
        body: "The unofficial map. Where work waits, where it doubles, where a few strong people carry an unnamed load. We start with the business as it is, not a generic assessment.",
      },
      {
        name: "Build what the team will use",
        body: "Seats that match the work. Decision rights people can act on. Cadence that holds when the week gets loud. Right-sized for a large initiative, a growing team, or a model that growth has outpaced.",
      },
      {
        name: "Leave it with your people",
        body: "Ownership transfers. I remain in the work until the change is real, then I step out. The point is a business that runs on clear structure, not continued presence.",
      },
    ],
  },
  credibility: {
    eyebrow: "The record",
    heading: "Built in operations, not in commentary.",
    stats: [
      {
        value: "19 years",
        label: "GE Capital",
        detail: "Operating discipline inside a large, unforgiving system.",
      },
      {
        value: "Black Belt",
        label: "Six Sigma",
        detail: "A trained eye for process, variation, and what actually moves a result.",
      },
      {
        value: "Former COO",
        label: "Product Launch Formula",
        detail: "The role ended in August 2026. The operating lessons did not.",
      },
    ],
    aboutEyebrow: "About",
    aboutHeading: "Jen Zils, Lumen Forward",
    about: [
      "Jen Zils founded Lumen Forward after two decades in operational leadership. Nineteen years at GE Capital. A Six Sigma Black Belt. Then COO of Product Launch Formula, a role that ended in August 2026.",
      "She works as a trusted peer in the room. Warm, direct, practical. She comes in to see where structure stopped fitting, build what the team can run, and stay long enough for it to hold.",
      "Lumen Forward is for founder-led service businesses whose people can do the work, and whose operating model has not kept up. A large initiative. A team you want to grow well. Structure that growth has outpaced. The job is the same: leave the business runnable by the people in it.",
    ],
  },
  example: {
    eyebrow: "What changed",
    heading: "A composite from the floor",
    body: "An advisory firm had a capable delivery team and a new retained offer that would not launch. Two hires had stalled because the job was \"help us grow\" rather than a seat. In ten weeks we wrote scorecards for Delivery Lead and Client Partner, mapped who owned pricing and scope, and stood up a Monday operating meeting with named owners. The retained offer launched with a lead and a backup. The two stalled seats were rewritten and filled against the new roles.",
  },
  cta: {
    eyebrow: "Next step",
    heading: "Let's Talk",
    body: "Tell me what growth is exposing. A large initiative, a team you want to grow, or a structure that no longer fits. I will tell you whether this work is a fit, and what it would take.",
    micro: "No pitch deck. No theater. A clear read on fit.",
    fields: {
      name: "Name",
      email: "Email",
      note: "What is going on in the business?",
    },
    submit: "Let's Talk",
    sending: "Sending",
    success: "Received. I will follow up shortly.",
    errorIncomplete: "Please complete all three fields.",
    errorSend: "The form did not send. You can write directly instead.",
    underForm: "If you would rather email, write to the address in the footer with a few sentences on what growth is exposing.",
  },
} as const;

export const privacyPage = {
  heading: "Privacy",
  updated: "September 2026",
  sections: [
    {
      title: "What this site collects",
      body: "This is a marketing site. There is no account system and no product login. If you write through Let's Talk, I receive the name, email, and note you send so I can reply.",
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
      body: "If you want a message removed or you have a privacy question, write through Let's Talk and say so. I will handle it directly.",
    },
  ],
} as const;

export const notFoundCopy = {
  heading: "That page is not here.",
  body: "The homepage is the whole site, minus this privacy note.",
  cta: "Back to Lumen Forward",
} as const;

export const home = {
  hero: {
    h1: "Growth exposes structure.",
    deck: "Operating models that scale.",
    body: "For founder-led businesses when growth outpaced how they run, or when work got heavy and the map never got redrawn.",
    cta: "Let's Talk",
    ctaHref: "/contact",
    secondaryCta: "Take the Structure Check",
    secondaryHref: "/structure-check",
    imageAlt: "Architectural structure showing scale",
    imageSrc: "/images/architecture-structure.jpg",
  },
  scenarios: {
    opening: "What worked at one stage can become the drag at the next.",
    heading: "What Growth Exposes",
    intro:
      "A practical diagnostic for seeing where operational friction is showing up and what deserves attention next.",
    reportCta: "Get the report",
    reportHref: "/structure-check",
    items: [
      {
        number: "01",
        title: "Solid Teams, New Heights",
        body: "You have a capable, trusted team preparing for a major initiative. The ambition is clear, but the execution machinery is untested at this scale.",
      },
      {
        number: "02",
        title: "Hires Without Seats",
        body: "You have made deliberate hires for team growth, but the handoffs are messy. Roles are blurring, and growth is creating friction rather than momentum.",
      },
      {
        number: "03",
        title: "The Bottleneck",
        body: "The business relies heavily on the founder for decisions. Work has gotten heavy, the map was never redrawn, and growth is hurting the very people building it.",
      },
    ],
  },
  officeBreak: {
    src: "/images/editorial-office.jpg",
    alt: "Quiet architectural office interior",
  },
  work: {
    heading: "Hands-on operational leadership.",
    intro:
      "We do not deliver a deck and walk away. We diagnose the friction in how your company operates, design the systems required to support your next phase of growth, and lead the implementation alongside your team.",
    eyebrow: "How We Work",
    stages: [
      { number: "01", title: "Understand", body: "Mapping the current reality without judgment." },
      { number: "02", title: "Find drag", body: "Identifying where effort is wasted and decisions stall." },
      { number: "03", title: "Decide what to build", body: "Aligning on the precise operating model needed." },
      { number: "04", title: "Lead implementation", body: "Building the structures alongside your team." },
      { number: "05", title: "Hand off", body: "Ensuring your team owns the new way of working." },
    ],
  },
  outcomes: {
    heading: "The result is clarity.",
    items: [
      "Decisions are made at the right level.",
      "Handoffs are clean and documented.",
      "The team has capacity for strategic initiatives.",
      "Growth feels sustainable, not painful.",
    ],
  },
  aboutTeaser: {
    heading: "About Jen Zils",
    photoLabel: "Jen photo here",
    paragraphs: [
      "With over 25 years of operations leadership, I build the engines that drive sustainable businesses.",
      "My track record includes 19 years at GE Capital, where I earned a Six Sigma Black Belt. I served as COO of Product Launch Formula through August 2026 and previously led operations for Internet Alchemy.",
      "I do not prescribe generic frameworks. I build the specific operational structure your business needs right now.",
    ],
    cta: "Read full biography",
  },
  teamBreak: {
    src: "/images/team-working.jpg",
    alt: "Team working together at a table",
  },
  cta: {
    heading: "Bring me the priority.",
    button: "Let's Talk",
  },
} as const;

export const aboutPage = {
  heading: "Operational reality over rigid frameworks.",
  paragraphs: [
    "With over 25 years of operations leadership, I build the engines that drive sustainable businesses. I specialize in founder-led organizations crossing thresholds where passion and effort are no longer enough to scale delivery.",
    "My background is grounded in rigorous process design. At GE Capital I spent 19 years and served as a Six Sigma Black Belt, learning how to locate friction and systematically remove it from complex operational flows.",
    "I later applied this structural rigor to fast-moving entrepreneurial environments. I served as COO of Product Launch Formula through August 2026 and previously led operations for Internet Alchemy, translating high-level visionary ambition into concrete, functioning operational models.",
    "I do not believe in dropping generic methodologies onto unique businesses. Growth exposes structure. The solution is always to map your specific reality, find the drag, and build the precise operating model you need to sustain your next phase.",
  ],
  trackHeading: "Track Record",
  track: [
    {
      org: "GE Capital",
      role: "19 years. Six Sigma Black Belt",
      desc: "Rigorous process optimization and friction removal in complex operational environments.",
    },
    {
      org: "Product Launch Formula",
      role: "Former COO, through August 2026",
      desc: "Scaled delivery and built operational structures to support massive digital launches.",
    },
    {
      org: "Internet Alchemy",
      role: "Operations Leadership",
      desc: "Translated visionary ambition into functioning, sustainable team operating models.",
    },
  ],
} as const;

export const structureCheckPage = {
  heading: "Structure Check",
  lede: "A calibrated six-question assessment to locate operational friction within your team. Use the output immediately, or bring it to our first conversation.",
} as const;

export const engagementsPage = {
  heading: "Engagement Models",
  intro:
    "Clear structures for working together. We align on the friction, define the scope, and execute with precision.",
  rungs: [
    {
      label: "Diagnostic",
      name: "Structure Check",
      meta: "Free",
      body: "A calibrated six-question assessment to locate operational friction within your team. Use the output immediately, or bring it to our first conversation.",
      href: "/structure-check",
      cta: "Take the Structure Check",
    },
    {
      label: "Deep Dive",
      name: "Priority Sprint",
      meta: "$7,500 · 2 to 3 weeks",
      note: "Recommended start",
      body: "A concentrated engagement to map your current reality, locate drag, and design the precise operating model needed next. Includes a clear credit line applied toward any subsequent implementation phase.",
      href: "/contact",
      cta: "Let's Talk",
    },
    {
      label: "Execution",
      name: "Implementation",
      meta: "Scoped custom",
      body: "Hands-on leadership to build the structures alongside your team. We align on the exact deliverables during the Priority Sprint.",
      href: "/contact",
      cta: "Let's Talk",
    },
  ],
  fitHeading: "Fit and Alignment",
  goodHeading: "Good Fit",
  good: [
    "Founder-led businesses in transition.",
    "Teams preparing for a major strategic initiative.",
    "Leaders who know growth is outpacing operations.",
    "Willingness to look honestly at current structures.",
    "Desire for hands-on operational leadership, not just advice.",
  ],
  notHeading: "Not a Fit",
  not: [
    "Looking for a generic framework or rigid methodology.",
    "Seeking a full-time permanent COO replacement.",
    "Unwilling to dedicate time from key team members.",
    "Startups without proven market demand.",
    "Projects requiring solely software engineering.",
  ],
  closeHeading: "Ready to locate the drag?",
  cta: "Let's Talk",
} as const;

export const contactPage = {
  heading: "Let's Talk",
  intro:
    "Whether you know exactly what structures are failing, or you just know growth has started to hurt, the first step is a conversation.",
  body: "Tell me what the priority is. We will find a time to discuss where the drag is and how to remove it.",
  direct: "Direct Contact",
  fields: {
    name: "Name",
    email: "Email",
    note: "What's the priority?",
  },
  submit: "Let's Talk",
  sending: "Sending",
  successHeading: "Message Received",
  success:
    "Thank you for reaching out. I will review your priority and be in touch shortly to find a time to talk.",
  another: "Send another message",
  errorIncomplete: "Please complete all three fields.",
  errorSend: "The form did not send. You can write directly instead.",
} as const;

export const privacyPage = {
  heading: "Privacy Policy",
  updated: "September 2026",
  sections: [
    {
      title: "Information Collection",
      body: "Lumen Forward Consulting operates this website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website. We use your data to provide and improve the service. By using the service, you agree to the collection and use of information in accordance with this policy.",
    },
    {
      title: "Contact Forms",
      body: "When you submit a contact form on our website, we collect your name, email address, and the contents of your message. We use this information solely to respond to your inquiry and discuss potential consulting engagements. We do not sell or rent this information to third parties. The Structure Check runs in your browser. We do not receive your answers unless you choose to follow up.",
    },
    {
      title: "Cookies and Tracking",
      body: "We may use standard analytics tools to understand how visitors interact with our website to improve the experience. This data is collected in aggregate. Hosting and security logs may record standard technical data as part of serving the pages.",
    },
    {
      title: "Questions",
      body: "If you have any questions about this Privacy Policy, please contact us at jen@lumenforward.com.",
    },
  ],
} as const;

export const notFoundCopy = {
  heading: "That page is not here.",
  body: "The homepage, Structure Check, Engagements, About, and Let's Talk are the public site.",
  cta: "Back to Lumen Forward",
} as const;

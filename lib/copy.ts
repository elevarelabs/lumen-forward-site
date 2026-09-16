export const home = {
  hero: {
    spine: "Lumen Forward Consulting",
    kicker: "Operating structure",
    h1LineOne: "You built something meaningful.",
    h1LineTwo: "Now it can't run without you.",
    deck: "That is true when every decision still waits on the founder. It is also true when you already have strong people, and a new offer, expansion, or systems rebuild has no operating spine to run on.",
    body: "I work with founder-led service businesses, typically $500K to $5M with 5 to 20 people, built from conviction and now hitting a structural ceiling. We design the roles, decision rights, and cadence that let the work move without multiplying chaos.",
    cta: "Book a discovery conversation",
    ctaHref: "/#contact",
    asideLabel: "Who this is for",
    meta: "Founder-led service firms · $500K to $5M · 5 to 20 people",
  },
  scenarios: {
    eyebrow: "Before any method",
    heading: "The strain shows up in more than one way.",
    intro:
      "The founder-as-bottleneck story is real. It is not the whole story. Some of the leaders I work with already have a capable team. What they lack is the structure to grow it, or to execute a large initiative without the business wobbling.",
    items: [
      {
        number: "01",
        title: "Every decision still waits on you",
        body: "Approvals, exceptions, and judgment calls route back to the same desk. The team pauses. You carry more than the org chart admits. The business cannot move unless you do.",
      },
      {
        number: "02",
        title: "The team grew. The org chart did not.",
        body: "Headcount went up. Roles, decision rights, and cadence did not. People are busy. Ownership is still fuzzy. Meetings multiply because no one is sure who decides.",
      },
      {
        number: "03",
        title: "The hire failed because the role was never defined",
        body: "You hired against urgency, not against a sharp seat. Accountability stayed vague. Performance stayed uneven. The next hire feels like relief, and often is not.",
      },
      {
        number: "04",
        title: "Strong people, a large initiative, no operating spine",
        body: "You already have a decent team. What you do not have is the structure to execute a new offer, an expansion, or a systems rebuild. Or you want to grow headcount on purpose, and you need roles, cadence, and accountability designed before more people multiply the chaos.",
      },
    ],
  },
  method: {
    eyebrow: "The work",
    heading: "The Lumen Forward Method",
    intro:
      "Six moves. One aim: leave the business with an operating structure your people can actually run. I stay in the work long enough to make the change real, then I hand it off.",
    steps: [
      {
        name: "Discern",
        body: "We get a clear read on how the business actually runs. The unofficial map. The work that only happens because you are in the room, or because a few strong people are carrying an unnamed load.",
      },
      {
        name: "Diagnose",
        body: "We name the structural gap. Not a personality verdict. The place where roles, decision rights, process, or cadence stopped fitting the work in front of you.",
      },
      {
        name: "Decide",
        body: "We choose what to change, what to leave, and what done looks like. Scope stays honest. The team can see the tradeoffs before anyone starts building.",
      },
      {
        name: "Design",
        body: "We design the operating structure: seats, decision rights, cadence, and the few artifacts the team will actually use when the week gets loud.",
      },
      {
        name: "Develop",
        body: "We build the capability in your people. Structure has to live in the team, not in a binder I take with me when the engagement ends.",
      },
      {
        name: "Deploy",
        body: "We put it into the work. Ownership transfers. The test is simple: the system has to hold when I am not in the meeting.",
      },
    ],
    example: {
      eyebrow: "What changed",
      heading: "A composite from the floor",
      body: "A $1.8M advisory firm had eleven people and a founder still sitting in every client kickoff. The delivery team was capable. A new retained offer sat unlaunched because delivery roles were undefined, and two hires had stalled because the job was \"help us grow\" rather than a seat. In ten weeks we wrote scorecards for Delivery Lead and Client Partner, mapped decision rights for pricing and scope, and stood up a Monday operating meeting with owners, not a round-robin. The retained offer launched with a named lead and a backup. The founder left routine kickoffs. The two stalled seats were rewritten and filled against the new roles.",
    },
  },
  paradox: {
    eyebrow: "A pattern, not a verdict",
    heading: "The stewardship paradox",
    pull: "I've watched this pattern break businesses.",
    body: [
      "The founder who cares the most often holds the most. Every exception, every quality check, every relationship stays close because the work matters. That care is the reason the company exists. It is also the reason the company cannot grow past one person's calendar.",
      "The paradox is not that you care too much. The paradox is that holding everything yourself is a poor way to protect what you built. Roles, cadence, and decision rights are how care scales. They are how a meaningful business stays meaningful when you are not in every room.",
      "This is not a lecture about letting go. It is an observation from the floor. Businesses break when the person who built them remains the operating system. They also stall when a capable team is asked to execute a large initiative without an operating system at all.",
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
      "Jen Zils founded Lumen Forward after two decades in operational leadership. Nineteen years at GE Capital. A Six Sigma Black Belt. Then COO of Product Launch Formula, through August 2026.",
      "She works as a trusted peer in the room. Warm, direct, and practical. The work is to diagnose where structure stopped fitting, design what the team can run, and stay long enough to deploy it.",
      "Lumen Forward is for founder-led service businesses that were built from conviction and have hit a structural ceiling. Sometimes the founder is still the bottleneck. Sometimes the team is already strong and the next chapter has no operating spine. The job is the same: make the business runnable by the people in it.",
    ],
  },
  cta: {
    eyebrow: "Next step",
    heading: "A discovery conversation.",
    body: "One conversation. How the business actually runs, where it is heavy, and whether this work is a fit. Bring the bottleneck, the blurry org chart, the failed hire, or the initiative that needs a spine. I will tell you what it would take.",
    micro: "No pitch deck. No theater. A clear read on fit.",
    fields: {
      name: "Name",
      email: "Email",
      note: "What is going on in the business?",
    },
    submit: "Request a conversation",
    sending: "Sending",
    success: "Received. I will follow up shortly.",
    errorIncomplete: "Please complete all three fields.",
    errorSend: "The form did not send. You can write directly instead.",
    underForm: "If you would rather email, write to the address in the footer with a few sentences on the current strain.",
  },
} as const;

export const privacyPage = {
  heading: "Privacy",
  updated: "September 2026",
  sections: [
    {
      title: "What this site collects",
      body: "This is a marketing site. There is no account system and no product login. If you write through the discovery form, I receive the name, email, and note you send so I can reply.",
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
      body: "If you want a message removed or you have a privacy question, use the discovery form and say so. I will handle it directly.",
    },
  ],
} as const;

export const notFoundCopy = {
  heading: "That page is not here.",
  body: "The homepage is the whole site, minus this privacy note.",
  cta: "Back to Lumen Forward",
} as const;

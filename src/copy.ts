export const site = {
  name: "Lumen Forward",
  legalName: "Lumen Forward Consulting",
  email: "hello@lumenforward.com",
} as const;

export const nav = [
  { href: "#work", label: "The work" },
  { href: "#method", label: "The Method" },
  { href: "#paradox", label: "Stewardship" },
  { href: "#record", label: "Record" },
] as const;

export const hero = {
  eyebrow: "Operating-model consulting",
  lineOne: "You built something meaningful.",
  lineTwo: "Now the operating model has to catch up.",
  honor:
    "You built something meaningful. Now it can't run without you.",
  lede: "For mission-driven founders of established service businesses. Built from conviction, with a real team and real clients, who have hit a structural ceiling or are ready for a growth chapter the current way of working cannot hold.",
  meta: "$500K to $5M · 5 to 20 people · service businesses",
  primaryCta: "Start a conversation",
  secondaryCta: "Read the scenarios",
} as const;

export const problems = {
  kicker: "How I help",
  heading: "The operating model is late to the business.",
  intro:
    "This is not always a founder who cannot let go. Sometimes the team is strong and the next move is large. Sometimes the org never caught up to the last round of hiring. The work is to give the business a structure that can hold what you have already built, and what you are about to ask of it.",
  scenarios: [
    {
      num: "01",
      title: "The founder is still the system",
      body: "Judgment, exceptions, and the calls that actually move work still route through you. The team is capable. Throughput is capped by your calendar. This is one pattern. It is not the only one.",
    },
    {
      num: "02",
      title: "The team grew. The organization did not.",
      body: "Headcount is up. Coordination is still informal. Meetings multiply, decision rights stay implied, and the org chart is a sketch of last year. You hired well. The structure never got designed to match.",
    },
    {
      num: "03",
      title: "The hire failed because the role never existed",
      body: "A capable person walked into an undefined seat. They guessed. You hoped. Months later you are backfilling, and still not sure what the job was supposed to own. That is a design miss, not a talent miss.",
    },
    {
      num: "04",
      title: "A solid team, a large next move",
      body: "The core is strong. You are not stuck in every decision. You are about to launch a new line, expand, overhaul systems, or scale the team, and you want decision rights, cadence, and seats in place before the strain shows up.",
    },
  ],
  close:
    "None of these is a personal failing. They are operating-model problems, and they show up in founder-heavy shops and in shops that already have a capable bench.",
} as const;

export const method = {
  kicker: "The Lumen Forward Method",
  heading: "Six phases. In order. Each one earns the next.",
  intro:
    "We do not start with a branded framework slide. We start with the work in front of you (the ceiling, the initiative, the scale-up). Then we move through a sequence that takes a clear read all the way to a model your team can run.",
  phases: [
    {
      name: "Discern",
      body: "What matters now, and what does not. We name the real constraint before we touch the org. Ceiling, initiative, or scale. One priority, held in the open.",
    },
    {
      name: "Diagnose",
      body: "How the business actually runs. Roles, decisions, cadence, handoffs. The map as it is, not as last year's deck described it.",
    },
    {
      name: "Decide",
      body: "What we will change, what we will leave, and who owns the call. Tradeoffs made on purpose, not by drift.",
    },
    {
      name: "Design",
      body: "Structure, decision rights, operating rhythm, and the few systems the next chapter actually needs. Enough architecture. Not a binder.",
    },
    {
      name: "Develop",
      body: "Build it with your people. Seats get sharp. Cadence gets real. The team practices the new way while it is still supervised.",
    },
    {
      name: "Deploy",
      body: "It goes live. Ownership transfers. The model holds without a consultant in the room, and without you as the default exception path.",
    },
  ],
} as const;

export const paradox = {
  kicker: "A pattern I keep seeing",
  heading: "The Stewardship Paradox",
  pull: "I've watched this pattern break businesses.",
  body: [
    "The founder who cares most becomes the person the business cannot grow past, even when they want it to. Or the leader who already built a good team still holds the last layer of judgment, because stewardship has felt like staying close.",
    "It looks like loyalty. It feels like care. It quietly concentrates risk in one person, one informal network, one undocumented way of deciding.",
    "I do not come in to tell you that you are doing this wrong. I come in because I have seen what happens when care is not paired with a designed operating model. Decision rights stay personal. Roles stay fuzzy. A growth initiative lands on an organization that was never asked to hold it.",
  ],
  close:
    "The paradox is this: the more you love the work, the more the business needs a structure that does not depend on that love being in every room.",
} as const;

export const credibility = {
  kicker: "About Jen Zils",
  heading: "The record, not the manifesto.",
  intro:
    "Leaders hire me for the operating work I have already done, not for a values statement. The through-line is the same: make complex work run, give people a structure they can execute inside, and leave the system stronger than I found it.",
  marks: [
    {
      title: "19 years, GE Capital",
      body: "Operating discipline inside a large, regulated machine. Credit, process, and the unglamorous work of making decisions hold.",
    },
    {
      title: "Six Sigma Black Belt",
      body: "A trained eye for variation, waste, and the few changes that actually move a system. Used in service businesses, not as theater.",
    },
    {
      title: "Former COO, Product Launch Formula",
      body: "Led the operational backbone of a high-growth education business. That role ended in August 2026. Lumen Forward is the work now.",
    },
  ],
  close:
    "Lumen Forward is operating-model consulting for founders who built something they believe in, and now need the business to run like it.",
} as const;

export const cta = {
  kicker: "Next step",
  heading: "Put a real operating model under the next chapter.",
  exampleLabel: "What changed for a client",
  example:
    "A twelve-person advisory firm, just over $2M, with a capable delivery team and a founder still sitting in most client exceptions. They were also standing up a second offer and did not want it to land on an undefined seat. We named decision rights, collapsed two fuzzy roles into one operator seat, and installed a weekly operating cadence the team now runs without her in the room. The second offer has an owner. She still leads. She is no longer the default path for every call.",
  formIntro:
    "Tell me what is in front of you (a ceiling, a hire that did not hold, a team that grew faster than the org, or a growth move you want to land cleanly). I will tell you whether this is a fit.",
  fields: {
    name: "Name",
    email: "Email",
    situation: "What is in front of you?",
    submit: "Open a mail draft",
  },
  previewNote:
    "Preview contact only. The lumenforward.com domain is not live yet. This form opens a mail draft to a placeholder address (hello@lumenforward.com) so you can see the path. Nothing is submitted to a server.",
} as const;

export const footer = {
  blurb:
    "Operating-model consulting for mission-driven founders of established service businesses.",
  copyright: "Lumen Forward Consulting",
} as const;

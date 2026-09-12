export type QuizScore = 0 | 1 | 2;

export type QuizBandId = "name" | "test" | "hold";

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: readonly {
    score: QuizScore;
    label: string;
  }[];
};

export const quizQuestions: readonly QuizQuestion[] = [
  {
    id: "decisions",
    prompt: "Where do decisions land in a normal week?",
    options: [
      {
        score: 0,
        label:
          "Approvals, exceptions, and judgment calls still come back to me. The team waits, and I carry more than the org chart admits.",
      },
      {
        score: 1,
        label:
          "A few people can decide in their lane, but anything unusual or cross-functional still finds my desk.",
      },
      {
        score: 2,
        label:
          "Decision rights are named. People decide in their seats and escalate only what should escalate.",
      },
    ],
  },
  {
    id: "weight",
    prompt: "How does the work actually feel right now?",
    options: [
      {
        score: 0,
        label:
          "Evenings disappear into Slack and leftover decisions. The work still gets done, but the business feels heavier than it should.",
      },
      {
        score: 1,
        label:
          "Some weeks hold. Then a fire, a hire, or a margin squeeze, and I'm back in every exception.",
      },
      {
        score: 2,
        label:
          "The operating rhythm is mostly predictable. Fires happen, but they don't automatically become mine.",
      },
    ],
  },
  {
    id: "seats",
    prompt: "What happens when you hire?",
    options: [
      {
        score: 0,
        label:
          "Seats get filled against urgency. The next person is supposed to bring relief—and often they add noise.",
      },
      {
        score: 1,
        label:
          "Roles are written down, but accountability stays fuzzy once the work starts moving.",
      },
      {
        score: 2,
        label:
          "Each seat has a sharp job, a clear owner, and a way to tell if it's working.",
      },
    ],
  },
  {
    id: "priority",
    prompt: "How named is the current priority?",
    options: [
      {
        score: 0,
        label:
          "Everything feels equally urgent. I couldn't name the one structural move that would change the next ninety days.",
      },
      {
        score: 1,
        label:
          "I have a read on what's creating drag, but I haven't tested it or put it in writing for the team.",
      },
      {
        score: 2,
        label:
          "The priority is named, shared, and specific enough that the team could act on it this quarter.",
      },
    ],
  },
  {
    id: "change",
    prompt: "What happens after a change is decided?",
    options: [
      {
        score: 0,
        label:
          "We talk it through, then it fades. Implementation lives in my head or a document no one opens.",
      },
      {
        score: 1,
        label:
          "We start well. Ownership blurs, and I get pulled back in to keep it alive.",
      },
      {
        score: 2,
        label:
          "Changes land with an owner, a rhythm, and a handoff. They hold without me in the room.",
      },
    ],
  },
  {
    id: "drag",
    prompt: "Can you point to what's creating drag?",
    options: [
      {
        score: 0,
        label:
          "I can feel the heaviness—margin, people, tools, leftover experiments—but I can't point to the operating model that stopped fitting.",
      },
      {
        score: 1,
        label:
          "I can name a few sources of drag, but I haven't separated what to fix from what to leave.",
      },
      {
        score: 2,
        label:
          "I know what's creating drag and what it's costing in time, margin, and attention.",
      },
    ],
  },
] as const;

export type QuizResult = {
  id: QuizBandId;
  band: string;
  range: readonly [number, number];
  lede: string;
  body: string;
  next: string;
  showSprint: boolean;
};

export const quizResults: readonly QuizResult[] = [
  {
    id: "name",
    band: "Name the priority",
    range: [0, 4],
    lede: "The heaviness is real. The next move isn't named yet.",
    body: "What's running you is still a pile—decisions, exceptions, evenings—rather than one structural priority the team could act on. That's the first piece of work: name it. Not a motivation problem. A structure problem.",
    next: "Bring me what's heavy. I'll tell you whether the next step is a conversation or a Priority Sprint.",
    showSprint: false,
  },
  {
    id: "test",
    band: "Test the assumption",
    range: [5, 8],
    lede: "You have a read. It hasn't been tested—or written so the team can use it.",
    body: "The drag has a shape. What's missing is a shared, right-sized move for the next ninety days. A Priority Sprint puts the priority, what it's costing, and the first 90 days in writing for the team.",
    next: "If you want that in writing before you build, the Priority Sprint is the usual next step.",
    showSprint: true,
  },
  {
    id: "hold",
    band: "Make it hold",
    range: [9, 12],
    lede: "The priority is clear enough. The risk is that it doesn't hold.",
    body: "Naming it isn't the hard part anymore. Implementation, ownership, and handoff are. The work now is to put the change in the operating model—and leave a system the team can run.",
    next: "If you want the fix in the work, not in a document, that's an implementation conversation.",
    showSprint: false,
  },
] as const;

export function scoreToBand(total: number): QuizResult {
  const result = quizResults.find((entry) => total >= entry.range[0] && total <= entry.range[1]);
  return result ?? quizResults[0];
}

export const quizMaxScore = quizQuestions.length * 2;

export type QuizScore = 0 | 1 | 2;

export type QuizBandId = "name" | "share" | "hold";

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
    id: "chapter",
    prompt: "What is the next chapter actually asking of the business?",
    options: [
      {
        score: 0,
        label:
          "A large initiative or a new height (offer, expansion, systems rebuild) with no operating structure to run it. The team can do the work. The model cannot.",
      },
      {
        score: 1,
        label:
          "We can see the next chapter. Seats, cadence, and ownership for it are only partly named.",
      },
      {
        score: 2,
        label:
          "The next chapter has named owners, a cadence, and a way to tell if it is working.",
      },
    ],
  },
  {
    id: "team",
    prompt: "How is the team set up for the work in front of it?",
    options: [
      {
        score: 0,
        label:
          "We have capable people. Headcount grew, or we want it to, without seats, cadence, and accountability catching up.",
      },
      {
        score: 1,
        label:
          "Some roles are clear. Cross-functional work and the next hire still get fuzzy.",
      },
      {
        score: 2,
        label:
          "Seats match the work. People know what they own and what they do not.",
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
          "The role was never a seat. We hired against urgency. The next person was supposed to bring relief, and often did not.",
      },
      {
        score: 1,
        label:
          "Roles are written down, but accountability stays vague once the work starts moving.",
      },
      {
        score: 2,
        label:
          "Each seat has a sharp job, a clear owner, and a way to tell if it is working.",
      },
    ],
  },
  {
    id: "decisions",
    prompt: "Where do decisions land in a normal week?",
    options: [
      {
        score: 0,
        label:
          "Approvals, exceptions, and judgment calls still come back to one desk. The team waits. This is one pattern, not the whole story, and it is loud.",
      },
      {
        score: 1,
        label:
          "People can decide in their lane. Anything unusual or cross-functional still finds the same desk.",
      },
      {
        score: 2,
        label:
          "Decision rights are named. People decide in their seats and escalate only what should escalate.",
      },
    ],
  },
  {
    id: "priority",
    prompt: "How named is the structural move for the next ninety days?",
    options: [
      {
        score: 0,
        label:
          "Everything feels equally urgent. I could not name the one structural move that would change the next quarter.",
      },
      {
        score: 1,
        label:
          "I have a read on what growth is exposing, but it is not yet in writing the team can use.",
      },
      {
        score: 2,
        label:
          "The priority is named, shared, and specific enough that the team could act on it this quarter.",
      },
    ],
  },
  {
    id: "hold",
    prompt: "What happens after a change is agreed?",
    options: [
      {
        score: 0,
        label:
          "We talk it through, then it fades. Implementation lives in someone's head or a document no one opens.",
      },
      {
        score: 1,
        label:
          "We start well. Ownership blurs, and someone gets pulled back in to keep it alive.",
      },
      {
        score: 2,
        label:
          "Changes land with an owner, a rhythm, and a handoff. They hold without extra heroics.",
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
};

export const quizResults: readonly QuizResult[] = [
  {
    id: "name",
    band: "Name what growth is exposing",
    range: [0, 4],
    lede: "The strain is real. The structural move is not named yet.",
    body: "What is running you is still a pile: a next chapter without a spine, a hire without a seat, or decisions that still wait on one desk. The first piece of work is to name the pattern. Not a motivation problem. A structure problem.",
    next: "Read the briefing, or bring me what is heavy. I will tell you whether the next step is a conversation or more definition first.",
  },
  {
    id: "share",
    band: "Make the read usable",
    range: [5, 8],
    lede: "You can see the pattern. The team cannot yet run it.",
    body: "Growth has a shape. What is missing is a shared, right-sized structure: seats, decision rights, cadence, written so people can act. That is the gap between a private read and an operating model.",
    next: "The briefing will sharpen the pattern. If you want it in the work, Let's Talk.",
  },
  {
    id: "hold",
    band: "Put it in the work",
    range: [9, 12],
    lede: "The read is clear enough. The risk is that it does not hold.",
    body: "Naming it is no longer the hard part. Implementation, ownership, and handoff are. The work now is to put the change in how the business actually runs, and leave a system the team can operate.",
    next: "If you want the fix in the work, not in a document, that is a conversation.",
  },
] as const;

export function scoreToBand(total: number): QuizResult {
  const result = quizResults.find((entry) => total >= entry.range[0] && total <= entry.range[1]);
  return result ?? quizResults[0];
}

export const quizMaxScore = quizQuestions.length * 2;

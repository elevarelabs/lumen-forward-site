export type QuizScore = 0 | 1 | 2 | 3;

export type QuizBandId = "foundation" | "drag" | "bottleneck";

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
    id: "priorities",
    prompt: "How clear are the strategic priorities across your team right now?",
    options: [
      { score: 3, label: "Everyone knows exactly what matters most." },
      { score: 2, label: "Most know, but there is occasional debate on trade-offs." },
      { score: 1, label: "Everything is urgent; priorities shift daily." },
      { score: 0, label: "There is no shared map of what matters." },
    ],
  },
  {
    id: "decisions",
    prompt: "Who owns the majority of operational decisions?",
    options: [
      { score: 3, label: "Decisions are pushed down to competent owners." },
      { score: 2, label: "Owners are defined, but they often seek permission." },
      { score: 1, label: "Most decisions escalate to the founder or leadership." },
      { score: 0, label: "The founder makes every decision." },
    ],
  },
  {
    id: "roles",
    prompt: "How well-defined are individual roles and responsibilities?",
    options: [
      { score: 3, label: "Extremely clear. Everyone knows their lane." },
      { score: 2, label: "Mostly clear, but edge cases cause confusion." },
      { score: 1, label: "Roles blur frequently; people step on toes." },
      { score: 0, label: "It is a free-for-all; whoever has time does the work." },
    ],
  },
  {
    id: "friction",
    prompt: "When a new project starts, how does the work flow?",
    options: [
      { score: 3, label: "Smoothly. The operational machinery just works." },
      { score: 2, label: "Okay, but it usually requires a kickoff meeting to clarify." },
      { score: 1, label: "It is bumpy. We recreate the wheel each time." },
      { score: 0, label: "Chaos. Projects stall immediately without heavy pushing." },
    ],
  },
  {
    id: "capacity",
    prompt: "Does the team have capacity to execute on new strategic initiatives?",
    options: [
      { score: 3, label: "Yes, we have protected capacity for growth." },
      { score: 2, label: "We can squeeze it in, but it causes stress." },
      { score: 1, label: "Barely. The day-to-day consumes almost everything." },
      { score: 0, label: "No. Everyone is drowning in immediate work." },
    ],
  },
  {
    id: "handoffs",
    prompt: "How clean are the handoffs between team members?",
    options: [
      { score: 3, label: "Documented, clear, and trusted." },
      { score: 2, label: "Usually fine, but sometimes information drops." },
      { score: 1, label: "Messy. We rely on chat messages and memory." },
      { score: 0, label: "Handoffs do not happen; people hold onto work too long." },
    ],
  },
] as const;

export type QuizResult = {
  id: QuizBandId;
  band: string;
  body: string;
};

export const quizMaxScore = quizQuestions.length * 3;

export function scoreToBand(total: number): QuizResult {
  const percentage = Math.round((total / quizMaxScore) * 100);

  if (percentage >= 80) {
    return {
      id: "foundation",
      band: "Strong Operational Foundation",
      body: "Your structures are holding up well. Decisions are distributed, roles are clear, and you have capacity for growth. The focus now should be on optimizing specific workflows for a new scale or preparing for a major strategic initiative.",
    };
  }

  if (percentage >= 50) {
    return {
      id: "drag",
      band: "Emerging Drag",
      body: "Growth is starting to outpace how you run. You likely have capable people, but the handoffs are getting messy and decisions are escalating too often. Redrawing the map now will prevent pain before the next growth phase.",
    };
  }

  return {
    id: "bottleneck",
    band: "Structural Bottleneck",
    body: "The business has outgrown its operating model. The founder is likely trapped in daily decisions, and the team is struggling with blurred roles and friction. You need a dedicated intervention to redesign how work flows before pushing for more growth.",
  };
}

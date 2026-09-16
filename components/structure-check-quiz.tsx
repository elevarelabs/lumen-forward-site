"use client";

import { useMemo, useState } from "react";
import { CtaLink } from "@/components/cta-link";
import { quizMaxScore, quizQuestions, scoreToBand, type QuizScore } from "@/lib/quiz";
import { routes, site } from "@/lib/site";

export function StructureCheckQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(QuizScore | null)[]>(() => quizQuestions.map(() => null));

  const current = quizQuestions[step];
  const complete = step >= quizQuestions.length;
  const total = useMemo(
    () => answers.reduce<number>((sum, value) => sum + (value ?? 0), 0),
    [answers],
  );
  const result = complete ? scoreToBand(total) : null;

  function choose(score: QuizScore) {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = score;
      return next;
    });
    setStep((value) => value + 1);
  }

  function back() {
    setStep((value) => Math.max(0, value - 1));
  }

  function retake() {
    setAnswers(quizQuestions.map(() => null));
    setStep(0);
  }

  if (result) {
    return (
      <div className="border border-navy/15 bg-cream px-6 py-10 sm:px-10 sm:py-12">
        <p className="eyebrow text-navy-soft">
          Your read · {total} of {quizMaxScore}
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-[1.12] text-navy sm:text-5xl">{result.band}</h2>
        <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-navy">{result.lede}</p>
        <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-navy-soft">{result.body}</p>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-navy">{result.next}</p>
        <div className="mt-10 flex flex-col items-start gap-4">
          <CtaLink href={routes.contact} variant="secondary">
            {site.cta}
          </CtaLink>
          <CtaLink href={routes.report} variant="quiet" className="text-navy">
            Get the report
          </CtaLink>
          <button
            type="button"
            onClick={retake}
            className="text-sm text-navy-soft underline decoration-navy/20 underline-offset-4 hover:text-navy"
          >
            Take it again
          </button>
        </div>
      </div>
    );
  }

  const progress = ((step + 1) / quizQuestions.length) * 100;

  return (
    <div className="border border-navy/15 bg-cream px-6 py-10 sm:px-10 sm:py-12">
      <div className="flex items-center justify-between gap-6">
        <p className="eyebrow text-navy-soft">
          Question {step + 1} of {quizQuestions.length}
        </p>
        {step > 0 ? (
          <button type="button" onClick={back} className="text-sm text-navy-soft hover:text-navy">
            Back
          </button>
        ) : null}
      </div>
      <div className="mt-5 h-px w-full bg-navy/15" aria-hidden>
        <div className="h-px bg-gold transition-all" style={{ width: `${progress}%` }} />
      </div>
      <h2 className="mt-8 max-w-2xl font-serif text-3xl leading-tight text-navy sm:text-4xl">{current.prompt}</h2>
      <fieldset className="mt-8 space-y-3">
        <legend className="sr-only">{current.prompt}</legend>
        {current.options.map((option) => {
          const selected = answers[step] === option.score;
          return (
            <button
              key={option.score}
              type="button"
              onClick={() => choose(option.score)}
              className={`block w-full border px-5 py-5 text-left text-[1.02rem] leading-relaxed transition-colors ${
                selected
                  ? "border-gold bg-cream text-navy"
                  : "border-navy/15 bg-cream text-navy hover:border-gold/70"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </fieldset>
    </div>
  );
}

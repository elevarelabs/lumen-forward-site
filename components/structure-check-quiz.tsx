"use client";

import { useState } from "react";
import { CtaLink } from "@/components/cta-link";
import { quizQuestions, scoreToBand, type QuizScore } from "@/lib/quiz";
import { routes, site } from "@/lib/site";

export function StructureCheckQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(QuizScore | null)[]>(() => quizQuestions.map(() => null));
  const [complete, setComplete] = useState(false);

  const current = quizQuestions[step];
  const selected = answers[step];
  const total = answers.reduce<number>((sum, value) => sum + (value ?? 0), 0);
  const result = complete ? scoreToBand(total) : null;
  const progress = (step / quizQuestions.length) * 100;

  function choose(score: QuizScore) {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = score;
      return next;
    });
  }

  function next() {
    if (selected === null) return;
    if (step < quizQuestions.length - 1) {
      setStep((value) => value + 1);
      return;
    }
    setComplete(true);
  }

  function back() {
    if (step > 0) setStep((value) => value - 1);
  }

  function retake() {
    setAnswers(quizQuestions.map(() => null));
    setStep(0);
    setComplete(false);
  }

  if (result) {
    return (
      <div className="border border-navy/10 bg-cream px-8 py-12 text-center sm:px-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">Assessment Complete</p>
        <h2 className="mt-8 font-serif text-4xl leading-tight text-navy md:text-5xl">{result.band}</h2>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden />
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-navy/80">{result.body}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaLink href={routes.contact} variant="primary">
            {site.cta}
          </CtaLink>
          <button
            type="button"
            onClick={retake}
            className="inline-flex h-14 items-center border border-navy/20 px-8 text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-navy/5"
          >
            Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[500px] flex-col overflow-hidden border border-navy/10 bg-cream px-8 py-12 sm:px-12">
      <div className="absolute inset-x-0 top-0 h-1 bg-navy/10" aria-hidden>
        <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
          Question {step + 1} of {quizQuestions.length}
        </p>
        <h2 className="font-serif text-3xl leading-tight text-navy md:text-4xl">{current.prompt}</h2>
      </div>
      <fieldset className="flex-grow space-y-3">
        <legend className="sr-only">{current.prompt}</legend>
        {current.options.map((option) => {
          const isSelected = selected === option.score;
          return (
            <button
              key={option.label}
              type="button"
              onClick={() => choose(option.score)}
              className={`w-full border p-5 text-left transition-colors ${
                isSelected ? "border-gold bg-gold/5 text-navy" : "border-navy/10 text-navy/80 hover:border-navy/30"
              }`}
            >
              <span className="flex items-center gap-4">
                <span
                  className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isSelected ? "border-gold" : "border-navy/20"
                  }`}
                >
                  {isSelected ? <span className="h-2.5 w-2.5 rounded-full bg-gold" /> : null}
                </span>
                <span className="text-lg">{option.label}</span>
              </span>
            </button>
          );
        })}
      </fieldset>
      <div className="mt-12 flex items-center justify-between border-t border-navy/10 pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="text-navy/60 transition-colors hover:text-navy disabled:opacity-0"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={next}
          disabled={selected === null}
          className="bg-navy px-6 py-2.5 font-semibold tracking-wide text-cream transition-colors hover:bg-navy-soft disabled:cursor-not-allowed disabled:opacity-50"
        >
          {step === quizQuestions.length - 1 ? "See Results" : "Next"}
        </button>
      </div>
    </div>
  );
}

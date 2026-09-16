import Link from "next/link";
import { notFoundCopy } from "@/lib/copy";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-32 sm:px-8">
        <h1 className="font-serif text-5xl leading-tight text-navy">{notFoundCopy.heading}</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-soft">{notFoundCopy.body}</p>
        <Link
          href={routes.home}
          className="mt-10 inline-flex bg-navy px-6 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-navy-soft"
        >
          {notFoundCopy.cta}
        </Link>
      </div>
    </div>
  );
}

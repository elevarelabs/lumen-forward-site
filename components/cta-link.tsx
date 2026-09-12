import Link from "next/link";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants: Record<NonNullable<CtaLinkProps["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center bg-accent px-6 py-3 text-[0.9375rem] font-medium tracking-[0.01em] text-canvas transition-colors hover:bg-accent-hover",
  secondary:
    "inline-flex items-center text-[0.9375rem] text-ink underline decoration-line underline-offset-[0.28em] transition-colors hover:text-accent hover:decoration-accent",
  ghost:
    "inline-flex items-center text-[0.9375rem] text-accent transition-colors hover:text-accent-hover",
};

export function CtaLink({ href, children, variant = "primary", className = "" }: CtaLinkProps) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}

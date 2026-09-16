import Link from "next/link";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

const variants: Record<NonNullable<CtaLinkProps["variant"]>, string> = {
  primary:
    "inline-flex bg-gold px-6 py-3.5 text-[0.78rem] font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:bg-cream",
  secondary:
    "inline-flex bg-navy px-6 py-3.5 text-[0.78rem] font-semibold tracking-[0.16em] text-cream uppercase transition-colors hover:bg-navy-soft",
  quiet:
    "inline-flex text-[0.82rem] font-medium tracking-[0.08em] text-current underline decoration-gold/70 decoration-1 underline-offset-[0.28em] transition-colors hover:decoration-gold",
};

export function CtaLink({ href, children, variant = "primary", className = "" }: CtaLinkProps) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}

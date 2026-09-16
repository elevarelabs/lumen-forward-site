type ImageBreakProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ImageBreak({ src, alt, className = "h-[50vh] md:h-[80vh]" }: ImageBreakProps) {
  return (
    <section className={`relative w-full overflow-hidden ${className}`} aria-hidden={alt === ""}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover grayscale-[20%]" />
    </section>
  );
}

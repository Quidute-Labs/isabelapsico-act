interface Props {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}

export function Photo({ src, alt, aspect = "aspect-[4/5]", className = "", priority = false }: Props) {
  return (
    <div className={`${aspect} w-full rounded-2xl overflow-hidden bg-secondary border border-border ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-expect-error: fetchpriority is a valid HTML attribute
        fetchpriority={priority ? "high" : "auto"}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

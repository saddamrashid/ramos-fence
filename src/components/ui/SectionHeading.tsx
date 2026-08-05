import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", light && "text-accent-light")}>{eyebrow}</span>
      )}
      <h2 className={cn("section-heading", light && "text-white")}>{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg",
            light ? "text-white/70" : "text-ink-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

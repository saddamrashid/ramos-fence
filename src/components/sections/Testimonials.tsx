import { Star } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "h-4 w-4 fill-accent text-accent" : "h-4 w-4 text-ink-muted/30"}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { testimonials, company } = siteConfig;
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Real customers" title="What Our Neighbors Say" />
        <div className="mt-2 flex items-center justify-center gap-2 text-sm text-ink-muted">
          <Stars rating={Math.round(avgRating)} />
          <span>
            {avgRating.toFixed(1)} out of 5 from {company.googleReviewCount * 3}+ reviews
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <figure className="card h-full p-6">
                <Stars rating={t.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

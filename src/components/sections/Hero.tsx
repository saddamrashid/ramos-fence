import Image from "next/image";
import { Phone, ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InspectionForm } from "@/components/ui/InspectionForm";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function Hero() {
  const { hero, company } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt=""
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <Container className="relative grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <AnimateIn direction="right">
          <span className="pill border border-white/20 bg-white/5 text-white/80">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.25rem] max-w-lg">
            {hero.headingLine1}{" "}
            <span className="italic text-accent-light">{hero.headingEmphasis}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" icon={<Phone className="h-4 w-4" aria-hidden />}>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            {hero.trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
                {badge}
              </span>
            ))}
          </div>

          <a
            href={company.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-4 transition-colors hover:bg-white/10"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">
              G
            </span>
            <div className="flex items-center gap-1 text-sm font-semibold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
              ))}
              {company.googleRating.toFixed(1)}
            </div>
            <span className="text-xs text-white/60">{company.googleReviewCount}+ Google Reviews</span>
          </a>
          
        </AnimateIn>

        <AnimateIn direction="left" delay={0.15}>
          <InspectionForm showEmail={false} />
        </AnimateIn>
      </Container>
    </section>
  );
}

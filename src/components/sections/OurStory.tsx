import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function OurStory() {
  const { story } = siteConfig;

  return (
    <section id="our-story" className="bg-surface py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimateIn direction="right" className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
            <Image
              src={story.image}
              alt="Our team at work"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-xl bg-white px-5 py-4 shadow-card sm:right-6">
            <p className="font-display text-2xl font-bold text-primary">{story.stat.value}</p>
            <p className="text-xs text-ink-muted">{story.stat.label}</p>
          </div>
        </AnimateIn>

        <AnimateIn direction="left" delay={0.1}>
          <span className="eyebrow">{story.eyebrow}</span>
          <h2 className="section-heading mt-3 text-left">{story.heading}</h2>
          <div className="mt-4 space-y-4 text-ink-muted">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {story.credentials.map((c) => (
              <span
                key={c}
                className="pill border border-primary/15 bg-primary/5 text-primary"
              >
                {c}
              </span>
            ))}
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}

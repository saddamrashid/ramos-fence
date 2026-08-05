import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function HowItWorks() {
  const { process } = siteConfig;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How it works" title="Our Simple 5-Step Process" />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-primary/15 sm:left-[23px]"
            aria-hidden
          />
          <ol className="flex flex-col gap-5">
            {process.map((step, i) => (
              <AnimateIn key={step.title} as="li" delay={i * 0.08} direction="left">
                <div className="relative flex gap-5 rounded-2xl bg-surface-alt p-5 sm:p-6">
                  <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white sm:h-12 sm:w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function Services() {
  const featured = siteConfig.services.filter((s) => s.featured);

  return (
    <section id="services" className="bg-surface-alt py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we treat"
          title="Our Services"
          subtitle={`We handle every common household pest found in the ${siteConfig.company.serviceRegion}, with treatments tailored to your specific situation.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <AnimateIn key={service.slug} delay={i * 0.1}>
              <article className="card group h-full overflow-hidden hover:-translate-y-1.5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 400px, 90vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                  <Link
                    href={`#services`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

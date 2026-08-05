import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function ServiceAreas() {
  const { serviceAreas, mapEmbedSrc, company } = siteConfig;

  return (
    <section id="service-areas" className="bg-primary py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Where we work"
          title="Service Areas"
          subtitle={`We serve the entire ${company.serviceRegion} area, including all five boroughs and surrounding communities.`}
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          <AnimateIn direction="right" className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Service area map"
              src={mapEmbedSrc}
              className="h-[320px] w-full border-0 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimateIn>

          <AnimateIn direction="left" delay={0.1} className="rounded-2xl bg-primary-dark/60 p-6 sm:p-7">
            <h3 className="font-display text-lg font-bold text-white">Cities We Serve</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area.city}
                  className="pill border border-white/10 bg-white/5 text-white/85"
                >
                  <MapPin className="h-3 w-3 text-accent" aria-hidden />
                  {area.city}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-white/5 p-4">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-white">Emergency Available</p>
                <p className="mt-0.5 text-xs text-white/60">{company.emergencyNote}</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}

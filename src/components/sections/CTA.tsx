import { AlertCircle, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { InspectionForm } from "@/components/ui/InspectionForm";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function CTA() {
  const { company, ctaSection } = siteConfig;

  return (
    <section id="get-started" className="bg-surface py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimateIn direction="right">
          <span className="eyebrow">{ctaSection.eyebrow}</span>
          <h2 className="section-heading mt-3 text-left">{ctaSection.heading}</h2>
          <p className="mt-4 max-w-md text-ink-muted">
            {ctaSection.description}
          </p>

          <ul className="mt-7 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-muted">Call or text us</p>
                <a href={`tel:${company.phoneHref}`} className="font-semibold text-ink hover:text-primary">
                  {company.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-muted">Hours</p>
                <p className="font-semibold text-ink">
                  {company.hours.map((h) => `${h.label} ${h.value}`).join(" · ")}
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <AlertCircle className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-muted">{ctaSection.emergencyLabel}</p>
                <p className="font-semibold text-ink">{ctaSection.emergencyNote}</p>
              </div>
            </li>
          </ul>
        </AnimateIn>

        <AnimateIn direction="left" delay={0.1}>
          <InspectionForm
            variant="light"
            eyebrow={ctaSection.formEyebrow}
            title={ctaSection.formTitle}
            subtitle={ctaSection.formSubtitle}
            showEmail
            showServiceField
            className="max-w-md lg:ml-auto"
          />
        </AnimateIn>
      </Container>
    </section>
  );
}
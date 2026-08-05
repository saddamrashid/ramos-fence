"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { faqs } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-alt py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Common questions" title="Frequently Asked Questions" />

        <div className="mt-10 flex flex-col gap-3 items-center">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateIn key={faq.question} delay={i * 0.05}>
                <div className="card overflow-hidden max-w-2xl">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-sm font-semibold text-ink sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-none text-primary transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

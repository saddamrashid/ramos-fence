"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, MoveHorizontal } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function Gallery() {
  const { gallery } = siteConfig;
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="bg-primary py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <AnimateIn direction="right">
            <span className="eyebrow text-accent-light">Real results, locally delivered</span>
            <h2 className="section-heading mt-3 text-left text-white">See Our Work in Action</h2>
          </AnimateIn>
          <a
            href="#gallery"
            className="btn-outline hidden sm:inline-flex"
            onClick={(e) => e.preventDefault()}
          >
            See All Photos
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mt-4 h-px w-full bg-white/10" />

        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[4/5] w-[240px] flex-none snap-start overflow-hidden rounded-2xl sm:w-[260px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="pill bg-accent/90 text-white">{item.category}</span>
                <h3 className="mt-2 font-display text-base font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2 flex items-center gap-2 text-xs text-white/50">
          <MoveHorizontal className="h-3.5 w-3.5" aria-hidden />
          Drag or scroll horizontally to see more projects
        </p>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function Blog() {
  const { blogPosts } = siteConfig;

  return (
    <section id="blog" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Knowledge base" title="Latest from Our Blog" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <AnimateIn key={post.title} delay={i * 0.1}>
              <article className="card group h-full overflow-hidden hover:-translate-y-1.5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 400px, 90vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wide text-accent">{post.category}</span>
                    <span className="text-ink-muted">· {post.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
                  <Link
                    href={post.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                  >
                    Read Full Article
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

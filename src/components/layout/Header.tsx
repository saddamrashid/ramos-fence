"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { company, nav } = siteConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-primary shadow-soft" : "bg-primary/95 shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-white">
          {/* <Image
            src={company.logo}
            alt={company.name}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            width={25}
            height={25}
          /> */}
          {company.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
              </Link>

              {item.children && (
                <div
                  className={cn(
                    "absolute left-0 top-full min-w-[240px] rounded-xl border border-white/10 bg-primary-dark p-2 shadow-card transition-all duration-150",
                    openDropdown === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <span className="font-medium">{child.label}</span>
                      {child.description && (
                        <span className="block text-xs text-white/50">{child.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-white/85 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {company.phone}
          </a>
          <Link href="#get-started" className="btn-primary">
            Free Estimate
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 origin-top overflow-y-auto bg-primary transition-all duration-300 ease-out lg:hidden",
          mobileOpen ? "max-h-[calc(100vh-72px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-white/10 py-1 last:border-none">
              <Link
                href={item.href}
                className="block py-2 text-base font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-2 flex flex-col gap-0.5 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="rounded-lg px-2 py-1.5 text-sm text-white/70"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={`tel:${company.phoneHref}`} className="mt-2 flex items-center gap-2 py-2 text-white">
            <Phone className="h-4 w-4" /> {company.phone}
          </a>
          <Link href="#get-started" className="btn-primary mt-2 w-full" onClick={() => setMobileOpen(false)}>
            Free Estimate
          </Link>
        </Container>
      </div>
    </header>
  );
}

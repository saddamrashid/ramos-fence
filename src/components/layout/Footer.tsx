import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function Footer() {
  const { company, footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark pt-16 text-white/70">
      <Container className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
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
          <p className="mt-3 max-w-xs text-sm">{footer.description}</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${company.phoneHref}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-accent" aria-hidden /> {company.phone}
            </a>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" aria-hidden />
              {company.hours.map((h) => `${h.label} ${h.value}`).join(", ")}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden /> {company.serviceRegion}
            </p>
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      link.label.startsWith("View all")
                        ? "font-medium text-accent hover:text-accent-light"
                        : "hover:text-white"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footer.legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

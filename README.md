# Local Service Landing Page (Next.js + TypeScript + Tailwind)

A responsive, animated, SEO-ready landing page template for local service
businesses (built out first for a pest-control company). It's designed so
that **cloning it for a new company only means editing one config file**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (theme colors driven by CSS variables)
- Framer Motion (scroll-reveal animations)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, SEO metadata, JSON-LD, theme CSS vars
    page.tsx           Assembles all sections in order
    sitemap.ts          Dynamic sitemap.xml
    robots.ts           Dynamic robots.txt
    globals.css         Base styles + small utility classes (btn, card, pill...)
  config/
    site.config.ts      ⭐ SINGLE SOURCE OF TRUTH — all copy, branding, theme
  types/
    site.ts             TypeScript contracts for site.config.ts
  components/
    layout/             Header, Footer
    sections/           Hero, OurStory, Services, HowItWorks, Gallery,
                         Testimonials, FAQ, ServiceAreas, Blog, CTA
    ui/                 Reusable building blocks: Button, Container,
                         SectionHeading, AnimateIn, InspectionForm
  lib/
    utils.ts            cn() classnames helper
```

## Cloning this site for a new company

99% of the time, you only need to touch **`src/config/site.config.ts`**:

1. **Theme** — swap the hex values under `theme`. Every color across the
   whole site (buttons, backgrounds, badges, text) is generated from these
   values via CSS variables in `layout.tsx`, so there is nothing else to
   update for a color re-skin.
2. **Company info** — name, logo emoji/icon, phone, hours, rating, etc.
3. **Section content** — hero copy, story, services, process steps, gallery
   items, testimonials, FAQs, service areas, blog posts, footer columns, and
   SEO fields (title, description, keywords, canonical URL, OG image).
4. **Images** — either point the `image` / `backgroundImage` fields at your
   own hosted images, or drop files into `public/images` and reference them
   with a root-relative path like `/images/hero.jpg`.
5. **Fonts (optional)** — the template ships with Playfair Display (display)
   + Inter (body). To use different Google Fonts, update the two imports in
   `src/app/layout.tsx` and the `fontDisplay` / `fontBody` labels in
   `site.config.ts` for consistency.

No component in `components/` should need to change for a standard re-skin —
they all read from `siteConfig`.

## SEO features included

- Per-page `<title>` / meta description / keywords via the Next.js Metadata API
- Open Graph + Twitter card tags
- `LocalBusiness` JSON-LD structured data (name, phone, rating, service area)
- Dynamic `sitemap.xml` and `robots.txt`
- Semantic HTML (`<header>`, `<main>`, `<footer>`, heading hierarchy)
- Descriptive `alt` text driven by config content
- next/image automatic image optimization + responsive `sizes`

## Accessibility & motion

- Visible keyboard focus states site-wide
- `prefers-reduced-motion` respected (animations shortened/disabled)
- Scroll-triggered fade/slide animations via the shared `<AnimateIn>` wrapper
- Accordion (FAQ) and dropdown menus use proper `aria-expanded` attributes

## Notes

- The inspection/contact forms (`InspectionForm.tsx`) currently simulate a
  submission. Wire the `handleSubmit` function up to a real API route, CRM,
  or email service (e.g. `/api/lead`) before going to production.
- The map embed uses a keyless Google Maps `output=embed` URL. For production
  you may want a proper Google Maps Embed API key or a static map image.
- Images currently reference Unsplash URLs as placeholders — replace with
  licensed photos of the real business before launch.
